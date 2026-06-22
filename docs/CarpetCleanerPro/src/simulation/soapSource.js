import { SIMULATION } from '../config/gameConfig.js';
import { WORLD, classifySurface } from '../world/worldLayout.js';

const SOURCE_STRIDE_BYTES = 8;
const MAX_SOURCES = SIMULATION.gridWidth * SIMULATION.gridHeight;
const FIXED_INPUT_STEP_SECONDS = 1 / 120;
const SOAP_RATE_KG_PER_SECOND = 0.32;

const SHADER = `
struct Source { index: u32, density: f32 }
struct SourceCount { value: u32 }
@group(0) @binding(0) var<storage, read_write> soap: array<f32>;
@group(0) @binding(1) var<storage, read> sources: array<Source>;
@group(0) @binding(2) var<uniform> sourceCount: SourceCount;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  if (id.x >= sourceCount.value) { return; }
  let source = sources[id.x];
  soap[source.index] = min(8.0, soap[source.index] + source.density);
}`;

export class SoapSource {
  constructor(device, materials) {
    this.device = device;
    this.materials = materials;
    this.pending = new Map();
    this.pendingMass = 0;
    this.totalSubmittedMass = 0;
    this.sourceBuffer = device.createBuffer({ label: 'Soap source footprints', size: MAX_SOURCES * SOURCE_STRIDE_BYTES, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST });
    this.countBuffer = device.createBuffer({ label: 'Soap source count', size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.pipeline = device.createComputePipeline({
      label: 'Soap injection source pass', layout: 'auto',
      compute: { module: device.createShaderModule({ code: SHADER }), entryPoint: 'main' }
    });
    this.bindGroup = device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: materials.getBuffer('soap') } },
        { binding: 1, resource: { buffer: this.sourceBuffer } },
        { binding: 2, resource: { buffer: this.countBuffer } }
      ]
    });
  }

  enqueue(pose) {
    if (!pose.contact) return 0;
    const footprint = createSoapFootprint(pose);
    for (const entry of footprint.entries) this.pending.set(entry.index, (this.pending.get(entry.index) || 0) + entry.density);
    this.pendingMass += footprint.massKg;
    return footprint.massKg;
  }

  encode(encoder) {
    if (this.pending.size === 0) return false;
    const entries = [...this.pending];
    const bytes = new ArrayBuffer(entries.length * SOURCE_STRIDE_BYTES);
    const view = new DataView(bytes);
    entries.forEach(([index, density], entryIndex) => {
      view.setUint32(entryIndex * SOURCE_STRIDE_BYTES, index, true);
      view.setFloat32(entryIndex * SOURCE_STRIDE_BYTES + 4, density, true);
    });
    this.device.queue.writeBuffer(this.sourceBuffer, 0, bytes);
    this.device.queue.writeBuffer(this.countBuffer, 0, new Uint32Array([entries.length, 0, 0, 0]));
    const pass = encoder.beginComputePass({ label: 'Soap source injection' });
    pass.setPipeline(this.pipeline);
    pass.setBindGroup(0, this.bindGroup);
    pass.dispatchWorkgroups(Math.ceil(entries.length / 64));
    pass.end();
    this.materials.recordInjected('soap', this.pendingMass);
    this.totalSubmittedMass += this.pendingMass;
    this.pending.clear();
    this.pendingMass = 0;
    return true;
  }

  reset() { this.pending.clear(); this.pendingMass = 0; this.totalSubmittedMass = 0; }
  dispose() { this.sourceBuffer.destroy(); this.countBuffer.destroy(); }
}

export function createSoapFootprint(pose) {
  if (!pose.contact || !isSoapSurface(pose.x, pose.z)) return { entries: [], massKg: 0 };
  const pressure = Math.max(0, Math.min(1, pose.pressure || 0.5));
  const speedFactor = 1 + Math.min(1, (pose.speed || 0) / 3) * 0.12;
  const massKg = SOAP_RATE_KG_PER_SECOND * FIXED_INPUT_STEP_SECONDS * (0.45 + pressure * 0.75) * speedFactor;
  const radius = 0.19 + pressure * 0.11;
  const centerGridX = (pose.x + WORLD.floor.width / 2) / WORLD.floor.width * SIMULATION.gridWidth;
  const centerGridY = (pose.z + WORLD.floor.depth / 2) / WORLD.floor.depth * SIMULATION.gridHeight;
  const radiusX = Math.ceil(radius / WORLD.floor.width * SIMULATION.gridWidth);
  const radiusY = Math.ceil(radius / WORLD.floor.depth * SIMULATION.gridHeight);
  const weighted = [];
  let weightTotal = 0;
  for (let gy = Math.floor(centerGridY) - radiusY; gy <= Math.floor(centerGridY) + radiusY; gy += 1) {
    if (gy < 0 || gy >= SIMULATION.gridHeight) continue;
    const worldZ = (gy + 0.5) / SIMULATION.gridHeight * WORLD.floor.depth - WORLD.floor.depth / 2;
    for (let gx = Math.floor(centerGridX) - radiusX; gx <= Math.floor(centerGridX) + radiusX; gx += 1) {
      if (gx < 0 || gx >= SIMULATION.gridWidth) continue;
      const worldX = (gx + 0.5) / SIMULATION.gridWidth * WORLD.floor.width - WORLD.floor.width / 2;
      if (!isSoapSurface(worldX, worldZ)) continue;
      const distance = Math.hypot(worldX - pose.x, worldZ - pose.z);
      if (distance > radius) continue;
      const normalized = distance / radius;
      const weight = (1 - normalized * normalized) ** 2;
      weighted.push({ index: gy * SIMULATION.gridWidth + gx, weight });
      weightTotal += weight;
    }
  }
  if (weightTotal === 0) return { entries: [], massKg: 0 };
  return {
    massKg,
    entries: weighted.map(entry => ({ index: entry.index, density: massKg * entry.weight / weightTotal / SIMULATION.cellAreaSquareMeters }))
  };
}

function isSoapSurface(x, z) {
  const surface = classifySurface(x, z);
  return surface === 'carpet' || surface === 'floor';
}

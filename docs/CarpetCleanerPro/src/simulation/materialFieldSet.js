import { SIMULATION } from '../config/gameConfig.js';
import { WORLD, classifySurface } from '../world/worldLayout.js';
import { CONSERVATION_TOLERANCE_KG, MATERIAL_FIELDS, SURFACE_MASK } from './materialSchema.js';

const FLOAT_BYTES = Float32Array.BYTES_PER_ELEMENT;

export class MaterialFieldSet {
  constructor(device, seed) {
    this.device = device;
    this.cellCount = SIMULATION.gridWidth * SIMULATION.gridHeight;
    this.buffers = new Map();
    this.ledger = new Map();
    for (const [name, schema] of Object.entries(MATERIAL_FIELDS)) {
      this.buffers.set(name, device.createBuffer({
        label: `Material field: ${name}`,
        size: this.cellCount * schema.components * FLOAT_BYTES,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
      }));
    }
    this.surfaceMaskBuffer = device.createBuffer({
      label: 'Immutable surface classification mask',
      size: this.cellCount * Uint32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
    });
    this.reset(seed);
  }

  reset(seed) {
    this.seed = seed >>> 0;
    const mask = createSurfaceMask();
    this.device.queue.writeBuffer(this.surfaceMaskBuffer, 0, mask);
    const random = xorshift32(this.seed);
    for (const [name, schema] of Object.entries(MATERIAL_FIELDS)) {
      const values = new Float32Array(this.cellCount * schema.components);
      if (name === 'embeddedSoil' || name === 'looseSoil') {
        const scale = name === 'embeddedSoil' ? 4.8 : 1.35;
        for (let index = 0; index < this.cellCount; index += 1) {
          if (mask[index] !== SURFACE_MASK.carpet) continue;
          const variation = 0.62 + random() * 0.38;
          const patch = 0.78 + 0.22 * Math.sin((index % SIMULATION.gridWidth) * 0.071 + Math.floor(index / SIMULATION.gridWidth) * 0.047);
          values[index] = scale * variation * patch;
        }
      }
      this.device.queue.writeBuffer(this.buffers.get(name), 0, values);
      const initial = schema.conserved ? totalQuantity(values, schema.components) : 0;
      this.ledger.set(name, { initial, injected: 0, drained: 0, extracted: 0, current: initial, residual: 0 });
    }
  }

  async inspect(name) {
    if (name === 'surfaceMask') {
      const values = await readBuffer(this.device, this.surfaceMaskBuffer, this.cellCount, Uint32Array);
      return { name, values, schema: { units: 'surface class', minimum: 0, maximum: 3, components: 1, conserved: false }, checksum: checksum(values), ledger: null };
    }
    const schema = MATERIAL_FIELDS[name];
    if (!schema) throw new Error(`Unknown material field: ${name}`);
    const values = await readBuffer(this.device, this.buffers.get(name), this.cellCount * schema.components, Float32Array);
    const ledger = this.ledger.get(name);
    if (schema.conserved) {
      ledger.current = totalQuantity(values, schema.components);
      ledger.residual = ledger.initial + ledger.injected - ledger.current - ledger.drained - ledger.extracted;
    }
    return { name, values, schema, checksum: checksum(new Uint32Array(values.buffer)), ledger: schema.conserved && ledger ? { ...ledger } : null };
  }

  summary() {
    return Object.fromEntries([...this.ledger].map(([name, values]) => [name, { ...values }]));
  }

  dispose() {
    for (const buffer of this.buffers.values()) buffer.destroy();
    this.surfaceMaskBuffer.destroy();
  }
}

function createSurfaceMask() {
  const mask = new Uint32Array(SIMULATION.gridWidth * SIMULATION.gridHeight);
  for (let y = 0; y < SIMULATION.gridHeight; y += 1) {
    const z = (y + 0.5) / SIMULATION.gridHeight * WORLD.floor.depth - WORLD.floor.depth / 2;
    for (let x = 0; x < SIMULATION.gridWidth; x += 1) {
      const worldX = (x + 0.5) / SIMULATION.gridWidth * WORLD.floor.width - WORLD.floor.width / 2;
      mask[y * SIMULATION.gridWidth + x] = SURFACE_MASK[classifySurface(worldX, z)];
    }
  }
  return mask;
}

function totalQuantity(values, components) {
  if (components !== 1) return 0;
  let total = 0;
  for (const value of values) total += value * SIMULATION.cellAreaSquareMeters;
  return total;
}

async function readBuffer(device, source, length, ArrayType) {
  const byteLength = length * ArrayType.BYTES_PER_ELEMENT;
  const readback = device.createBuffer({
    label: 'On-demand material diagnostic readback',
    size: byteLength,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
  });
  const encoder = device.createCommandEncoder({ label: 'Material diagnostic copy' });
  encoder.copyBufferToBuffer(source, 0, readback, 0, byteLength);
  device.queue.submit([encoder.finish()]);
  await readback.mapAsync(GPUMapMode.READ);
  const values = new ArrayType(readback.getMappedRange()).slice();
  readback.unmap();
  readback.destroy();
  return values;
}

function checksum(words) {
  let hash = 2166136261;
  for (const word of words) hash = Math.imul(hash ^ word, 16777619) >>> 0;
  return hash.toString(16).padStart(8, '0');
}

function xorshift32(initialSeed) {
  let state = initialSeed || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 0x100000000;
  };
}

export { CONSERVATION_TOLERANCE_KG };

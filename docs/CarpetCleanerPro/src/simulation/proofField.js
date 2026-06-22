const WORKGROUP_SIZE = 64;

const SHADER = `
struct Step { tick: u32, length: u32 }
@group(0) @binding(0) var<storage, read> source: array<u32>;
@group(0) @binding(1) var<storage, read_write> destination: array<u32>;
@group(0) @binding(2) var<uniform> step: Step;

@compute @workgroup_size(${WORKGROUP_SIZE})
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  let index = id.x;
  if (index >= step.length) { return; }
  let left = source[(index + step.length - 1u) % step.length];
  let right = source[(index + 1u) % step.length];
  var value = source[index] ^ (left << 7u) ^ (right >> 3u) ^ (step.tick * 2654435761u);
  value = value ^ (value >> 16u);
  destination[index] = value * 2246822519u + 3266489917u;
}`;

export class ProofField {
  constructor(device, length, seed) {
    this.device = device;
    this.length = length;
    this.seed = seed >>> 0;
    this.activeIndex = 0;
    this.buffers = [0, 1].map(() => device.createBuffer({
      label: 'Proof field ping-pong storage',
      size: length * Uint32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
    }));
    this.uniformBuffer = device.createBuffer({
      label: 'Proof field step uniform',
      size: 16,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    this.pipeline = device.createComputePipeline({
      label: 'Deterministic proof field pass',
      layout: 'auto',
      compute: { module: device.createShaderModule({ code: SHADER }), entryPoint: 'main' }
    });
    this.bindGroups = [
      this.createBindGroup(this.buffers[0], this.buffers[1]),
      this.createBindGroup(this.buffers[1], this.buffers[0])
    ];
    this.reset(seed);
  }

  createBindGroup(source, destination) {
    return this.device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: source } },
        { binding: 1, resource: { buffer: destination } },
        { binding: 2, resource: { buffer: this.uniformBuffer } }
      ]
    });
  }

  reset(seed = this.seed) {
    this.seed = seed >>> 0;
    const values = seededValues(this.length, this.seed);
    this.device.queue.writeBuffer(this.buffers[0], 0, values);
    this.device.queue.writeBuffer(this.buffers[1], 0, values);
    this.activeIndex = 0;
  }

  encode(encoder, tick) {
    this.device.queue.writeBuffer(this.uniformBuffer, 0, new Uint32Array([tick, this.length, 0, 0]));
    const pass = encoder.beginComputePass({ label: 'Proof field ordered pass' });
    pass.setPipeline(this.pipeline);
    pass.setBindGroup(0, this.bindGroups[this.activeIndex]);
    pass.dispatchWorkgroups(Math.ceil(this.length / WORKGROUP_SIZE));
    pass.end();
    this.activeIndex = 1 - this.activeIndex;
  }

  async checksum() {
    const readback = this.device.createBuffer({
      label: 'Proof field sparse checksum readback',
      size: this.length * Uint32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });
    const encoder = this.device.createCommandEncoder({ label: 'Proof field checksum copy' });
    encoder.copyBufferToBuffer(this.buffers[this.activeIndex], 0, readback, 0, this.length * 4);
    this.device.queue.submit([encoder.finish()]);
    await readback.mapAsync(GPUMapMode.READ);
    const values = new Uint32Array(readback.getMappedRange());
    let hash = 2166136261;
    for (const value of values) hash = Math.imul(hash ^ value, 16777619) >>> 0;
    readback.unmap();
    readback.destroy();
    return hash.toString(16).padStart(8, '0');
  }

  dispose() {
    for (const buffer of this.buffers) buffer.destroy();
    this.uniformBuffer.destroy();
  }
}

function seededValues(length, initialSeed) {
  const values = new Uint32Array(length);
  let seed = initialSeed || 1;
  for (let index = 0; index < length; index += 1) {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    values[index] = seed >>> 0;
  }
  return values;
}

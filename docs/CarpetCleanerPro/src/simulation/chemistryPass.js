import { SIMULATION } from '../config/gameConfig.js';

const LOOSEN_SHADER = `
@group(0) @binding(0) var<storage, read> water: array<f32>;
@group(0) @binding(1) var<storage, read> saturation: array<f32>;
@group(0) @binding(2) var<storage, read_write> embedded: array<f32>;
@group(0) @binding(3) var<storage, read_write> loose: array<f32>;
@group(0) @binding(4) var<storage, read> soap: array<f32>;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  let i = id.x; if (i >= 163840u) { return; }
  let wet = smoothstep(0.03, 1.5, water[i] + saturation[i] * 0.28);
  let surfactant = soap[i] / (soap[i] + 0.10);
  let loosen = min(embedded[i], wet * (0.08 + 0.58 * surfactant) * 0.008333333);
  embedded[i] = embedded[i] - loosen;
  loose[i] = loose[i] + loosen;
}`;

const SUSPEND_SHADER = `
@group(0) @binding(0) var<storage, read> water: array<f32>;
@group(0) @binding(1) var<storage, read_write> loose: array<f32>;
@group(0) @binding(2) var<storage, read_write> dissolved: array<f32>;
@group(0) @binding(3) var<storage, read_write> sediment: array<f32>;
@group(0) @binding(4) var<storage, read> soap: array<f32>;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  let i = id.x; if (i >= 163840u) { return; }
  let wet = smoothstep(0.03, 1.5, water[i]);
  let surfactant = soap[i] / (soap[i] + 0.10);
  let suspend = min(loose[i], wet * (1.8 + 4.5 * surfactant) * 0.008333333);
  let dissolve = min(sediment[i] + suspend * 0.72, wet * (0.24 + 1.1 * surfactant) * 0.008333333);
  let settle = min(dissolved[i] + suspend * 0.28 + dissolve, select(0.000583333, 0.00010, water[i] > 0.18));
  loose[i] = loose[i] - suspend;
  sediment[i] = sediment[i] + suspend * 0.72 - dissolve + settle;
  dissolved[i] = dissolved[i] + suspend * 0.28 + dissolve - settle;
}`;

const FOAM_SHADER = `
@group(0) @binding(0) var<storage, read> water: array<f32>;
@group(0) @binding(1) var<storage, read_write> soap: array<f32>;
@group(0) @binding(2) var<storage, read_write> foam: array<f32>;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  let i = id.x; if (i >= 163840u) { return; }
  let wet = smoothstep(0.03, 1.2, water[i]);
  let surfactant = soap[i] / (soap[i] + 0.10);
  let made = min(soap[i], wet * surfactant * (0.055 + water[i] * 0.012) * 0.008333333);
  let collapse = min(foam[i] + made, (0.006 + select(0.018, 0.002, water[i] > 0.05)) * 0.008333333);
  soap[i] = soap[i] - made + collapse;
  foam[i] = foam[i] + made - collapse;
}`;

export class ChemistryPass {
  constructor(device, materials, waterSolver) {
    device.pushErrorScope('validation');
    this.pipelines = [LOOSEN_SHADER, SUSPEND_SHADER, FOAM_SHADER].map((code, index) => device.createComputePipeline({ label: ['Embedded soil loosening','Mud suspension','Foam chemistry'][index], layout: 'auto', compute: { module: device.createShaderModule({ code }), entryPoint: 'main' } }));
    this.bindGroups = [0, 1].map(active => [
      device.createBindGroup({ layout: this.pipelines[0].getBindGroupLayout(0), entries: [
        { binding: 0, resource: { buffer: waterSolver.waterBuffers[active] } }, { binding: 1, resource: { buffer: waterSolver.saturationBuffers[active] } },
        { binding: 2, resource: { buffer: materials.getBuffer('embeddedSoil') } }, { binding: 3, resource: { buffer: materials.getBuffer('looseSoil') } }, { binding: 4, resource: { buffer: materials.getBuffer('soap') } }
      ] }),
      device.createBindGroup({ layout: this.pipelines[1].getBindGroupLayout(0), entries: [
        { binding: 0, resource: { buffer: waterSolver.waterBuffers[active] } }, { binding: 1, resource: { buffer: materials.getBuffer('looseSoil') } },
        { binding: 2, resource: { buffer: materials.getBuffer('dissolvedSoil') } }, { binding: 3, resource: { buffer: materials.getBuffer('sediment') } }, { binding: 4, resource: { buffer: materials.getBuffer('soap') } }
      ] }),
      device.createBindGroup({ layout: this.pipelines[2].getBindGroupLayout(0), entries: [
        { binding: 0, resource: { buffer: waterSolver.waterBuffers[active] } }, { binding: 1, resource: { buffer: materials.getBuffer('soap') } }, { binding: 2, resource: { buffer: materials.getBuffer('foam') } }
      ] })
    ]);
    this.validation = device.popErrorScope();
  }
  async assertValid() { const error = await this.validation; if (error) throw new Error(`Chemistry GPU validation failed: ${error.message}`); }
  encode(encoder, dt, active) { for (let index = 0; index < 3; index += 1) { const pass = encoder.beginComputePass({ label: ['Embedded soil loosening','Mud suspension','Foam production and decay'][index] }); pass.setPipeline(this.pipelines[index]); pass.setBindGroup(0, this.bindGroups[active][index]); pass.dispatchWorkgroups(Math.ceil(SIMULATION.gridWidth * SIMULATION.gridHeight / 64)); pass.end(); } }
  dispose() {}
}

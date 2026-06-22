import { SIMULATION } from '../config/gameConfig.js';
import { WORLD, classifySurface } from '../world/worldLayout.js';

const STRIDE = 16;
const MAX_SOURCES = SIMULATION.gridWidth * SIMULATION.gridHeight;
const WATER_RATE_KG_PER_SECOND = 5.2;

const SHADER = `
struct Source { index: u32, water: f32, impulseX: f32, impulseZ: f32 }
struct Count { value: u32 }
@group(0) @binding(0) var<storage, read_write> water: array<f32>;
@group(0) @binding(1) var<storage, read> sources: array<Source>;
@group(0) @binding(2) var<uniform> count: Count;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  if (id.x >= count.value) { return; }
  let source = sources[id.x];
  water[source.index] = min(100.0, water[source.index] + source.water);
}`;

export class WaterSource {
  constructor(device, materials, waterBuffers, velocityBuffers) {
    this.device = device; this.materials = materials; this.pending = new Map(); this.pendingMass = 0; this.totalSubmittedMass = 0;
    this.sourceBuffer = device.createBuffer({ label: 'Water source footprints', size: MAX_SOURCES * STRIDE, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST });
    this.countBuffer = device.createBuffer({ label: 'Water source count', size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.pipeline = device.createComputePipeline({ label: 'Water and momentum source pass', layout: 'auto', compute: { module: device.createShaderModule({ code: SHADER }), entryPoint: 'main' } });
    this.bindGroups = [0, 1].map(index => device.createBindGroup({ layout: this.pipeline.getBindGroupLayout(0), entries: [
      { binding: 0, resource: { buffer: waterBuffers[index] } },
      { binding: 1, resource: { buffer: this.sourceBuffer } }, { binding: 2, resource: { buffer: this.countBuffer } }
    ] }));
  }
  enqueue(pose) {
    if (!pose.contact) return { entries: [], massKg: 0 };
    const footprint = createWaterFootprint(pose);
    for (const entry of footprint.entries) {
      const current = this.pending.get(entry.index) || { water: 0, impulseX: 0, impulseZ: 0 };
      current.water += entry.density; current.impulseX += entry.impulseX; current.impulseZ += entry.impulseZ;
      this.pending.set(entry.index, current);
    }
    this.pendingMass += footprint.massKg;
    return footprint;
  }
  encode(encoder, activeIndex) {
    if (!this.pending.size) return false;
    const entries = [...this.pending]; const bytes = new ArrayBuffer(entries.length * STRIDE); const view = new DataView(bytes);
    entries.forEach(([index, value], i) => { const offset=i*STRIDE; view.setUint32(offset,index,true); view.setFloat32(offset+4,value.water,true); view.setFloat32(offset+8,value.impulseX,true); view.setFloat32(offset+12,value.impulseZ,true); });
    this.device.queue.writeBuffer(this.sourceBuffer,0,bytes); this.device.queue.writeBuffer(this.countBuffer,0,new Uint32Array([entries.length,0,0,0]));
    const pass=encoder.beginComputePass({label:'Water source injection'}); pass.setPipeline(this.pipeline); pass.setBindGroup(0,this.bindGroups[activeIndex]); pass.dispatchWorkgroups(Math.ceil(entries.length/64)); pass.end();
    this.materials.recordInjected('freeWater',this.pendingMass); this.totalSubmittedMass+=this.pendingMass; this.pending.clear(); this.pendingMass=0; return true;
  }
  reset(){this.pending.clear();this.pendingMass=0;this.totalSubmittedMass=0}
  dispose(){this.sourceBuffer.destroy();this.countBuffer.destroy()}
}

export function createWaterFootprint(pose) {
  if (!pose.contact || !validSurface(pose.x,pose.z)) return {entries:[],massKg:0};
  const pressure=Math.max(0,Math.min(1,pose.pressure||.5)); const massKg=WATER_RATE_KG_PER_SECOND/120*(.55+pressure*.65); const radius=.24+pressure*.12;
  const cx=(pose.x+WORLD.floor.width/2)/WORLD.floor.width*SIMULATION.gridWidth, cy=(pose.z+WORLD.floor.depth/2)/WORLD.floor.depth*SIMULATION.gridHeight;
  const rx=Math.ceil(radius/WORLD.floor.width*SIMULATION.gridWidth), ry=Math.ceil(radius/WORLD.floor.depth*SIMULATION.gridHeight); const cells=[]; let total=0;
  for(let y=Math.floor(cy)-ry;y<=Math.floor(cy)+ry;y++){if(y<0||y>=SIMULATION.gridHeight)continue;const wz=(y+.5)/SIMULATION.gridHeight*WORLD.floor.depth-WORLD.floor.depth/2;for(let x=Math.floor(cx)-rx;x<=Math.floor(cx)+rx;x++){if(x<0||x>=SIMULATION.gridWidth)continue;const wx=(x+.5)/SIMULATION.gridWidth*WORLD.floor.width-WORLD.floor.width/2;if(!validSurface(wx,wz))continue;const d=Math.hypot(wx-pose.x,wz-pose.z);if(d>radius)continue;const w=(1-(d/radius)**2)**2;cells.push({index:y*SIMULATION.gridWidth+x,weight:w});total+=w}}
  if(!total)return{entries:[],massKg:0}; const directionLength=Math.hypot(pose.velocityX||0,pose.velocityZ||0); const dx=directionLength>.05?pose.velocityX/directionLength:Math.cos(pose.orientation||0),dz=directionLength>.05?pose.velocityZ/directionLength:Math.sin(pose.orientation||0);
  return{massKg,entries:cells.map(cell=>{const share=cell.weight/total;return{index:cell.index,density:massKg*share/SIMULATION.cellAreaSquareMeters,impulseX:dx*share*1.8,impulseZ:dz*share*1.8}})};
}
function validSurface(x,z){const type=classifySurface(x,z);return type==='carpet'||type==='floor'}

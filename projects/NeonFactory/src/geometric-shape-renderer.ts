import type { NeonGeometricShapeDefinition, NeonPoint } from "./geometric-shapes";

export type NeonShapeLabelPosition = "above" | "below" | "left" | "right" | "center";
export interface NeonShapeLabel {
  text: string;
  position?: NeonShapeLabelPosition;
  offset?: number;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string | number;
}

export interface NeonShapeInstance {
  shape: NeonGeometricShapeDefinition;
  color?: string;
  x?: number;
  y?: number;
  z?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  glow?: number;
  shielded?: boolean;
  lineThickness?: number;
  energyIntensity?: number;
  energyCoverage?: number;
  energySpeed?: number;
  energyBleed?: number;
  opacity?: number;
  entranceProgress?: number;
  entranceMagnitude?: number;
  explodeProgress?: number;
  explodeMagnitude?: number;
  label?: NeonShapeLabel;
}

export interface NeonShapeEnergyInternalTuning {
  branchCycleRate: number;
  branchChanceScale: number;
  activeDurationMin: number;
  activeDurationMax: number;
  hazeDurationMin: number;
  hazeDurationMax: number;
  branchLengthMin: number;
  branchLengthMax: number;
  branchSegmentsMin: number;
  branchSegmentsMax: number;
  branchTurnMinDegrees: number;
  branchTurnMaxDegrees: number;
  branchNormalJitterDegrees: number;
  branchWidthScale: number;
  hazeWidthScale: number;
  hazeOpacity: number;
  hazeDrift: number;
}

export const neonShapeEnergyInternalTuning: NeonShapeEnergyInternalTuning = {
  branchCycleRate: 2.63,
  branchChanceScale: .44,
  activeDurationMin: .1,
  activeDurationMax: .66,
  hazeDurationMin: .2,
  hazeDurationMax: 1,
  branchLengthMin: .06,
  branchLengthMax: .39,
  branchSegmentsMin: 2,
  branchSegmentsMax: 9,
  branchTurnMinDegrees: 10,
  branchTurnMaxDegrees: 94,
  branchNormalJitterDegrees: 20,
  branchWidthScale: .74,
  hazeWidthScale: .37,
  hazeOpacity: 1,
  hazeDrift: 0,
};

export function setNeonShapeEnergyInternalTuning(tuning: Partial<NeonShapeEnergyInternalTuning>): void {
  Object.assign(neonShapeEnergyInternalTuning, tuning);
}

type V3 = [number, number, number];
type Vertex = {
  p: V3; n: V3; color: [number, number, number]; glow: number;
  effect: [number, number, number, number];
};
const floatsPerVertex = 14;

const shader = /* wgsl */`
struct Scene { aspect: f32, camera: f32, time: f32, padding: f32 }
@group(0) @binding(0) var<uniform> scene: Scene;
struct Input {
  @location(0) position: vec3f,
  @location(1) normal: vec3f,
  @location(2) color: vec3f,
  @location(3) glow: f32,
  @location(4) effect: vec4f,
}
struct Output {
  @builtin(position) position: vec4f,
  @location(0) normal: vec3f,
  @location(1) color: vec3f,
  @location(2) glow: f32,
  @location(3) effect: vec4f,
}
@vertex fn vertexMain(input: Input) -> Output {
  let depth = scene.camera - input.position.z;
  var output: Output;
  output.position = vec4f(input.position.x * 4 / scene.aspect, input.position.y * 4, depth * .045, depth);
  output.normal = input.normal;
  output.color = input.color;
  output.glow = input.glow;
  output.effect = input.effect;
  return output;
}
@fragment fn fragmentMain(input: Output) -> @location(0) vec4f {
  let normal = normalize(input.normal);
  let light = normalize(vec3f(-.45, -.7, 1));
  let diffuse = .18 + max(dot(normal, light), 0) * .82;
  let rim = pow(1 - abs(normal.z), 2.2);
  let side = 1 - abs(normal.z);
  let rareSurge = pow(max(.0, sin(scene.time * input.effect.z * .82 + input.color.r * 7.0)), 22.0)
    * input.effect.x * input.effect.y * input.effect.w;
  let energy = input.color * (diffuse * .12 + rim * input.glow * .36 + side * .08 + rareSurge * .7);
  return vec4f(energy + vec3f(rareSurge * .18), .12 + side * .12 + rareSurge * .28);
}
@fragment fn lineFragment(input: Output) -> @location(0) vec4f {
  let along = input.normal.x;
  let across = abs(input.normal.y);
  let phase = input.normal.z;
  let intensity = input.effect.x;
  let coverage = input.effect.y;
  let speed = input.effect.z;
  let bleed = input.effect.w;
  let pulseA = pow(max(.0, sin(along * 31.0 - scene.time * speed * 5.4 + phase)), 10.0);
  let pulseB = pow(max(.0, sin(along * 13.0 + scene.time * speed * 3.1 + phase * 2.7)), 18.0);
  let noise = sin(along * 71.0 + phase * 8.3) * .5 + .5;
  let threshold = 1.0 - coverage;
  let electricity = smoothstep(threshold, threshold + .18, pulseA * .65 + pulseB * .55 + noise * .18);
  let core = 1.0 - smoothstep(.06, .28, across);
  let halo = 1.0 - smoothstep(.12, 1.0, across);
  let surge = electricity * intensity;
  let pulse = .78 + sin(scene.time * speed * 2.1 + phase) * .13 + electricity * .24;
  let cloud = halo * (.1 + surge * (.42 + bleed * .44));
  let hot = input.color * (pulse + cloud * 2.1) * input.glow + vec3f(core * surge * 1.35);
  let alpha = (core * (.72 + pulse * .2) + cloud + halo * bleed * (.18 + electricity * .62)) * input.glow;
  return vec4f(hot, clamp(alpha, 0.0, 1.0));
}`;

const hex = (value: string): [number, number, number] => {
  const raw = value.replace("#", "");
  return [0, 2, 4].map(index => Number.parseInt(raw.slice(index, index + 2), 16) / 255) as [number, number, number];
};
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a: V3, b: V3): V3 => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
const normalize = (v: V3): V3 => {
  const length = Math.hypot(...v) || 1;
  return [v[0] / length, v[1] / length, v[2] / length];
};
const rotate = ([x, y, z]: V3, rx: number, ry: number, rz: number): V3 => {
  let a = y * Math.cos(rx) - z * Math.sin(rx), b = y * Math.sin(rx) + z * Math.cos(rx); y = a; z = b;
  a = x * Math.cos(ry) + z * Math.sin(ry); b = -x * Math.sin(ry) + z * Math.cos(ry); x = a; z = b;
  return [x * Math.cos(rz) - y * Math.sin(rz), x * Math.sin(rz) + y * Math.cos(rz), z];
};

function mesh(instance: NeonShapeInstance): Vertex[] {
  const { shape } = instance;
  const depth = shape.depth ?? .14;
  const color = hex(instance.color ?? shape.color);
  const scale = instance.scale ?? 1;
  const scaleX = scale * (instance.scaleX ?? 1);
  const scaleY = scale * (instance.scaleY ?? 1);
  const rx = instance.rotationX ?? 0, ry = instance.rotationY ?? 0, rz = instance.rotationZ ?? 0;
  const entranceProgress = instance.entranceProgress ?? 1;
  const entranceEase = entranceProgress * entranceProgress * (3 - 2 * entranceProgress);
  const entranceOffset = (point: NeonPoint, z: number, index: number): V3 => {
    if (entranceProgress >= 1) return [0, 0, 0];
    const seed = Math.sin(index * 91.17 + point[0] * 37.2 + point[1] * 53.7 + z * 29.1) * 43758.5453;
    const random = seed - Math.floor(seed);
    const angle = random * Math.PI * 2;
    const radius = (instance.entranceMagnitude ?? instance.explodeMagnitude ?? .55) * (1 - entranceEase) * (.35 + random * .75);
    return [Math.cos(angle) * radius, Math.sin(angle) * radius, (random - .5) * radius * .55];
  };
  const move = (point: NeonPoint, z: number, index = 0): V3 => {
    const p = rotate([point[0] * scaleX, -point[1] * scaleY, z * scale], rx, ry, rz);
    const e = entranceOffset(point, z, index);
    return [p[0] + (instance.x ?? 0) + e[0], p[1] + (instance.y ?? 0) + e[1], p[2] + (instance.z ?? 0) + e[2]];
  };
  const output: Vertex[] = [];
  const add = (a: V3, b: V3, c: V3, normal?: V3) => {
    const n = normal ?? normalize(cross(sub(b, a), sub(c, a)));
    const effect: Vertex["effect"] = [
      instance.energyIntensity ?? 1, instance.energyCoverage ?? .32,
      instance.energySpeed ?? 1, instance.energyBleed ?? .35,
    ];
    [a,b,c].forEach(p => output.push({ p, n, color, glow: (instance.glow ?? 1) * (instance.opacity ?? 1) * entranceEase, effect }));
  };
  const front = shape.points.map((point, index) => move(point, depth / 2, index));
  const back = shape.points.map((point, index) => move(point, -depth / 2, index + shape.points.length));
  for (let i = 1; i < front.length - 1; i++) add(front[0], front[i], front[i + 1]);
  for (let i = 1; i < back.length - 1; i++) add(back[0], back[i + 1], back[i]);
  shape.points.forEach((_, i) => {
    const next = (i + 1) % shape.points.length;
    add(front[i], back[i], back[next]);
    add(front[i], back[next], front[next]);
  });
  return output;
}

function edgeMesh(instance: NeonShapeInstance): Vertex[] {
  const { shape } = instance;
  const depth = shape.depth ?? .14;
  const color = hex(instance.color ?? shape.color);
  const scale = instance.scale ?? 1;
  const scaleX = scale * (instance.scaleX ?? 1);
  const scaleY = scale * (instance.scaleY ?? 1);
  const rx = instance.rotationX ?? 0, ry = instance.rotationY ?? 0, rz = instance.rotationZ ?? 0;
  const entranceProgress = instance.entranceProgress ?? 1;
  const entranceEase = entranceProgress * entranceProgress * (3 - 2 * entranceProgress);
  const move = (point: NeonPoint, z: number): V3 => {
    const p = rotate([point[0] * scaleX, -point[1] * scaleY, z * scale], rx, ry, rz);
    return [p[0] + (instance.x ?? 0), p[1] + (instance.y ?? 0), p[2] + (instance.z ?? 0)];
  };
  const explode = (a: V3, b: V3, index: number): [V3, V3] => {
    const progress = Math.max(instance.explodeProgress ?? 0, 1 - entranceEase);
    if (!progress) return [a, b];
    const mx = (a[0] + b[0]) / 2 - (instance.x ?? 0), my = (a[1] + b[1]) / 2 - (instance.y ?? 0);
    const length = Math.hypot(mx, my) || 1;
    const magnitude = instance.explodeMagnitude ?? .55;
    const speed = magnitude * (.45 + (Math.sin(index * 91.17) * .5 + .5) * .55);
    const dx = mx / length * progress * speed, dy = my / length * progress * speed + progress * progress * .18;
    const angle = progress * (index % 2 ? 1 : -1) * 2.4;
    const transform = (p: V3): V3 => {
      const x = p[0] - (instance.x ?? 0), y = p[1] - (instance.y ?? 0);
      return [x * Math.cos(angle) - y * Math.sin(angle) + (instance.x ?? 0) + dx, x * Math.sin(angle) + y * Math.cos(angle) + (instance.y ?? 0) + dy, p[2]];
    };
    return [transform(a), transform(b)];
  };
  const output: Vertex[] = [];
  let distance = 0;
  const effect: Vertex["effect"] = [
    instance.energyIntensity ?? 1, instance.energyCoverage ?? .32,
    instance.energySpeed ?? 1, instance.energyBleed ?? .35,
  ];
  const addLine = (a: V3, b: V3, phase: number, widthScale = 1, opacity = 1) => {
    [a, b] = explode(a, b, Math.floor(distance * 100) + Math.floor(phase * 10));
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const length = Math.hypot(dx, dy) || .001;
    const width = (instance.lineThickness ?? 1) * .018 * widthScale;
    const ox = -dy / length * width, oy = dx / length * width;
    const a0: V3 = [a[0] - ox, a[1] - oy, a[2]], a1: V3 = [a[0] + ox, a[1] + oy, a[2]];
    const b0: V3 = [b[0] - ox, b[1] - oy, b[2]], b1: V3 = [b[0] + ox, b[1] + oy, b[2]];
    const start = distance * 2.4, end = (distance + length) * 2.4;
    const push = (p: V3, along: number, across: number) =>
      output.push({ p, n: [along, across, phase], color, glow: (instance.glow ?? 1) * opacity * (instance.opacity ?? 1) * entranceEase * (1 + Math.sin((instance.explodeProgress ?? 0) * Math.PI) * (instance.explodeMagnitude ?? .55) * 2.2) * (1 - (instance.explodeProgress ?? 0) * .7), effect });
    push(a0,start,-1); push(a1,start,1); push(b0,end,-1);
    push(b0,end,-1); push(a1,start,1); push(b1,end,1);
    distance += length;
  };
  const addLoop = (points: readonly NeonPoint[], z: number, phase: number) =>
    points.forEach((point, index) => addLine(move(point, z), move(points[(index + 1) % points.length], z), phase + index * .73));
  addLoop(shape.points, depth / 2, .3);
  addLoop(shape.points, -depth / 2, 2.1);
  shape.holes?.forEach((hole, index) => {
    addLoop(hole, depth / 2 + .002, 3.7 + index);
    addLoop(hole, -depth / 2 - .002, 5.2 + index);
  });
  shape.points.forEach((point, index) => addLine(move(point, -depth / 2), move(point, depth / 2), 6.1 + index));
  const tuning = neonShapeEnergyInternalTuning;
  const time = performance.now() / 1000 * (instance.energySpeed ?? 1);
  const branchStrength = (instance.energyIntensity ?? 1) * (instance.energyCoverage ?? .32);
  const random = (seed: number) => {
    const value = Math.sin(seed * 12.9898 + shape.points.length * 78.233) * 43758.5453;
    return value - Math.floor(value);
  };
  const rotated = (x: number, y: number, radians: number): NeonPoint => [
    x * Math.cos(radians) - y * Math.sin(radians),
    x * Math.sin(radians) + y * Math.cos(radians),
  ];
  shape.points.forEach((point, index) => {
    const cycle = Math.floor(time * tuning.branchCycleRate + index * .61);
    const age = time * tuning.branchCycleRate + index * .61 - cycle;
    const seed = cycle * 37.1 + index * 11.7;
    const activeDuration = tuning.activeDurationMin + random(seed + 1) * Math.max(0, tuning.activeDurationMax - tuning.activeDurationMin);
    const hazeDuration = Math.min(1, activeDuration + tuning.hazeDurationMin + random(seed + 2) * Math.max(0, tuning.hazeDurationMax - tuning.hazeDurationMin));
    const branchActive = age < activeDuration;
    const hazeActive = age < hazeDuration;
    if ((!branchActive && !hazeActive) || random(seed + 3) > Math.min(.9, branchStrength * tuning.branchChanceScale)) return;
    const next = shape.points[(index + 1) % shape.points.length];
    const t = .16 + random(seed + 4) * .68;
    const base: NeonPoint = [point[0] + (next[0] - point[0]) * t, point[1] + (next[1] - point[1]) * t];
    const tx = next[0] - point[0], ty = next[1] - point[1], tl = Math.hypot(tx, ty) || 1;
    const direction = random(seed + 5) > .5 ? 1 : -1;
    const perpendicular: NeonPoint = [-ty / tl * direction, tx / tl * direction];
    const firstJitter = (random(seed + 6) * tuning.branchNormalJitterDegrees) * Math.PI / 180 * (random(seed + 7) > .5 ? 1 : -1);
    let heading = rotated(perpendicular[0], perpendicular[1], firstJitter);
    const segmentCount = Math.max(1, Math.round(tuning.branchSegmentsMin + random(seed + 8) * Math.max(0, tuning.branchSegmentsMax - tuning.branchSegmentsMin)));
    const points: NeonPoint[] = [base];
    for (let segment = 0; segment < segmentCount; segment++) {
      const length = tuning.branchLengthMin + random(seed + 10 + segment) * Math.max(0, tuning.branchLengthMax - tuning.branchLengthMin);
      const previous = points[points.length - 1];
      points.push([previous[0] + heading[0] * length, previous[1] + heading[1] * length]);
      const offset = (tuning.branchTurnMinDegrees + random(seed + 20 + segment) * Math.max(0, tuning.branchTurnMaxDegrees - tuning.branchTurnMinDegrees)) * Math.PI / 180;
      heading = rotated(heading[0], heading[1], offset * (random(seed + 30 + segment) > .5 ? 1 : -1));
    }
    if (hazeActive) {
      const fade = 1 - Math.max(0, age - activeDuration) / Math.max(.001, hazeDuration - activeDuration);
      const drift = Math.max(0, age - activeDuration) * tuning.hazeDrift;
      points.slice(0, -1).forEach((start, segment) => {
        const end = points[segment + 1];
        const hazeStart: NeonPoint = [start[0] + perpendicular[0] * drift, start[1] + perpendicular[1] * drift];
        const hazeEnd: NeonPoint = [end[0] + perpendicular[0] * drift, end[1] + perpendicular[1] * drift];
        addLine(move(hazeStart, depth / 2 + .002), move(hazeEnd, depth / 2 + .002), 31 + seed + segment, tuning.hazeWidthScale, fade * tuning.hazeOpacity);
      });
    }
    if (branchActive) {
      points.slice(0, -1).forEach((start, segment) => {
        addLine(move(start, depth / 2 + .006), move(points[segment + 1], depth / 2 + .006), 11 + seed + segment, tuning.branchWidthScale);
      });
    }
  });
  return output;
}

export class NeonGeometricShapeRenderer {
  readonly canvas: HTMLCanvasElement;
  readonly device: GPUDevice;
  #context: GPUCanvasContext;
  #pipeline: GPURenderPipeline;
  #linePipeline: GPURenderPipeline;
  #sceneBuffer: GPUBuffer;
  #depth: GPUTexture | null = null;
  #labelLayer: HTMLDivElement;
  #logicalSize: { width: number; height: number } | null = null;

  constructor(canvas: HTMLCanvasElement, device: GPUDevice, context: GPUCanvasContext, format: GPUTextureFormat) {
    this.canvas = canvas; this.device = device; this.#context = context;
    const parent = canvas.parentElement;
    if (parent && getComputedStyle(parent).position === "static") parent.style.position = "relative";
    this.#labelLayer = document.createElement("div");
    this.#labelLayer.className = "neon-shape-label-layer";
    Object.assign(this.#labelLayer.style, { position:"absolute", inset:"0", pointerEvents:"none", overflow:"hidden" });
    parent?.append(this.#labelLayer);
    const module = device.createShaderModule({ code: shader, label: "NeonFactory extruded shape shader" });
    this.#pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module, entryPoint: "vertexMain",
        buffers: [{ arrayStride: floatsPerVertex * 4, attributes: [
          { shaderLocation: 0, offset: 0, format: "float32x3" },
          { shaderLocation: 1, offset: 12, format: "float32x3" },
          { shaderLocation: 2, offset: 24, format: "float32x3" },
          { shaderLocation: 3, offset: 36, format: "float32" },
          { shaderLocation: 4, offset: 40, format: "float32x4" },
        ] }],
      },
      fragment: { module, entryPoint: "fragmentMain", targets: [{ format, blend: {
        color: { srcFactor: "src-alpha", dstFactor: "one" },
        alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha" },
      } }] },
      primitive: { topology: "triangle-list", cullMode: "back" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: false, depthCompare: "less-equal" },
    });
    this.#linePipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module, entryPoint: "vertexMain",
        buffers: [{ arrayStride: floatsPerVertex * 4, attributes: [
          { shaderLocation: 0, offset: 0, format: "float32x3" },
          { shaderLocation: 1, offset: 12, format: "float32x3" },
          { shaderLocation: 2, offset: 24, format: "float32x3" },
          { shaderLocation: 3, offset: 36, format: "float32" },
          { shaderLocation: 4, offset: 40, format: "float32x4" },
        ] }],
      },
      fragment: {
        module,
        entryPoint: "lineFragment",
        targets: [{ format, blend: {
          color: { srcFactor: "src-alpha", dstFactor: "one" },
          alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha" },
        } }],
      },
      primitive: { topology: "triangle-list" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: true, depthCompare: "less-equal" },
    });
    this.#sceneBuffer = device.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
  }

  static async create(canvas: HTMLCanvasElement): Promise<NeonGeometricShapeRenderer> {
    if (!navigator.gpu) throw new Error("WebGPU is required for the NeonFactory shape suite.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new NeonGeometricShapeRenderer(canvas, device, context, format);
  }

  setLogicalSize(width: number, height: number): this {
    this.#logicalSize = { width, height };
    this.canvas.width = width;
    this.canvas.height = height;
    return this;
  }

  render(instances: readonly NeonShapeInstance[], preserveColor = false, targetView?: GPUTextureView): void {
    this.#resize();
    const vertices = instances.flatMap(mesh);
    const edges = instances.flatMap(edgeMesh);
    const data = new Float32Array(vertices.length * floatsPerVertex);
    const edgeData = new Float32Array(edges.length * floatsPerVertex);
    vertices.forEach((vertex, i) => data.set([...vertex.p, ...vertex.n, ...vertex.color, vertex.glow, ...vertex.effect], i * floatsPerVertex));
    edges.forEach((vertex, i) => edgeData.set([...vertex.p, ...vertex.n, ...vertex.color, vertex.glow, ...vertex.effect], i * floatsPerVertex));
    const vertexBuffer = this.device.createBuffer({ size: Math.max(4, data.byteLength), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
    const edgeBuffer = this.device.createBuffer({ size: Math.max(4, edgeData.byteLength), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
    if (data.length) this.device.queue.writeBuffer(vertexBuffer, 0, data);
    if (edgeData.length) this.device.queue.writeBuffer(edgeBuffer, 0, edgeData);
    this.device.queue.writeBuffer(this.#sceneBuffer, 0, new Float32Array([this.canvas.width / this.canvas.height, 5, performance.now() / 1000, 0]));
    const bindGroup = this.device.createBindGroup({ layout: this.#pipeline.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: this.#sceneBuffer } }] });
    const lineBindGroup = this.device.createBindGroup({ layout: this.#linePipeline.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: this.#sceneBuffer } }] });
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{ view: targetView ?? this.#context.getCurrentTexture().createView(), clearValue: { r: 0, g: 0, b: 0, a: 0 }, loadOp: preserveColor ? "load" : "clear", storeOp: "store" }],
      depthStencilAttachment: { view: this.#depth!.createView(), depthClearValue: 1, depthLoadOp: "clear", depthStoreOp: "store" },
    });
    if (vertices.length) { pass.setPipeline(this.#pipeline); pass.setBindGroup(0, bindGroup); pass.setVertexBuffer(0, vertexBuffer); pass.draw(vertices.length); }
    if (edges.length) { pass.setPipeline(this.#linePipeline); pass.setBindGroup(0, lineBindGroup); pass.setVertexBuffer(0, edgeBuffer); pass.draw(edges.length); }
    pass.end(); this.device.queue.submit([encoder.finish()]);
    this.#renderLabels(instances);
    this.device.queue.onSubmittedWorkDone().then(() => { vertexBuffer.destroy(); edgeBuffer.destroy(); });
  }

  destroy(destroyDevice = true): void { this.#labelLayer.remove(); this.#depth?.destroy(); this.#sceneBuffer.destroy(); if (destroyDevice) this.device.destroy(); }
  #renderLabels(instances: readonly NeonShapeInstance[]): void {
    Object.assign(this.#labelLayer.style, {
      left: `${this.canvas.offsetLeft}px`,
      top: `${this.canvas.offsetTop}px`,
      right: "auto",
      bottom: "auto",
      width: `${this.canvas.clientWidth}px`,
      height: `${this.canvas.clientHeight}px`,
    });
    this.#labelLayer.replaceChildren(...instances.flatMap(instance => {
      if (!instance.label?.text || (instance.opacity ?? 1) <= 0) return [];
      const element = document.createElement("span");
      const scale = instance.scale ?? 1;
      const x = 50 + (instance.x ?? 0) * 40 / (this.canvas.width / this.canvas.height);
      const y = 50 - (instance.y ?? 0) * 40;
      const shapeRadius = scale * this.canvas.clientHeight * .2;
      const offset = shapeRadius + (instance.label.offset ?? 8) + (instance.label.fontSize ?? 18) * .5;
      const position = instance.label.position ?? "above";
      let tx = 0, ty = 0;
      if (position === "above") ty = -offset;
      if (position === "below") ty = offset;
      if (position === "left") tx = -offset;
      if (position === "right") tx = offset;
      element.textContent = instance.label.text;
      Object.assign(element.style, {
        position:"absolute", left:`${x}%`, top:`${y}%`, transform:`translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px))`,
        color:instance.color ?? instance.shape.color, fontFamily:instance.label.fontFamily ?? "Segoe UI, sans-serif",
        fontSize:`${instance.label.fontSize ?? 18}px`, fontWeight:String(instance.label.fontWeight ?? 600),
        textShadow:`0 0 5px ${instance.color ?? instance.shape.color},0 0 14px ${instance.color ?? instance.shape.color}`, whiteSpace:"nowrap",
        opacity:String(instance.opacity ?? 1),
      });
      return [element];
    }));
  }
  #resize(): void {
    if (this.#logicalSize) {
      const { width, height } = this.#logicalSize;
      if (this.canvas.width !== width || this.canvas.height !== height || !this.#depth) {
        this.canvas.width = width; this.canvas.height = height;
        this.#depth?.destroy();
        this.#depth = this.device.createTexture({ size: [width, height], format: "depth24plus", usage: GPUTextureUsage.RENDER_ATTACHMENT });
      }
      return;
    }
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.#depth && this.canvas.width === width && this.canvas.height === height) return;
    this.canvas.width = width; this.canvas.height = height;
    this.#depth?.destroy();
    this.#depth = this.device.createTexture({ size: [width, height], format: "depth24plus", usage: GPUTextureUsage.RENDER_ATTACHMENT });
  }
}

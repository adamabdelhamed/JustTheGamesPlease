import { NeonOrb } from "./orb";

const shader = /* wgsl */ `
struct Uniforms {
  resolution: vec2f,
  center: vec2f,
  radius: f32,
  glow: f32,
  time: f32,
  animate: f32,
  color: vec4f,
}
@group(0) @binding(0) var<uniform> u: Uniforms;

@vertex fn vertexMain(@builtin(vertex_index) index: u32) -> @builtin(position) vec4f {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f(3.0, -1.0),
    vec2f(-1.0, 3.0)
  );
  return vec4f(positions[index], 0.0, 1.0);
}

@fragment fn fragmentMain(@builtin(position) position: vec4f) -> @location(0) vec4f {
  let uv = position.xy / u.resolution;
  let aspect = u.resolution.x / u.resolution.y;
  let delta = vec2f((uv.x - u.center.x) * aspect, uv.y - u.center.y);
  let pulse = 1.0 + sin(u.time * 2.4) * 0.045 * u.animate;
  let distanceToCenter = length(delta);
  let radius = u.radius * pulse;
  let core = 1.0 - smoothstep(radius * 0.28, radius, distanceToCenter);
  let edge = 1.0 - smoothstep(radius * 0.82, radius * 1.04, distanceToCenter);
  let halo = exp(-max(distanceToCenter - radius * 0.7, 0.0) * 18.0 / max(u.glow, 0.05));
  let energy = core * 1.35 + edge * 0.8 + halo * u.glow;
  let whiteCore = pow(max(core, 0.0), 4.0);
  let rgb = u.color.rgb * energy + vec3f(whiteCore * 0.9);
  return vec4f(rgb, clamp(energy, 0.0, 1.0));
}
`;

function colorToRgba(color: string): [number, number, number, number] {
  const normalized = color.startsWith("#") ? color.slice(1) : color;
  if (!/^[0-9a-f]{6}$/i.test(normalized)) {
    throw new Error(`NeonFactory requires a six-digit hex color, received "${color}".`);
  }
  return [
    Number.parseInt(normalized.slice(0, 2), 16) / 255,
    Number.parseInt(normalized.slice(2, 4), 16) / 255,
    Number.parseInt(normalized.slice(4, 6), 16) / 255,
    1,
  ];
}

export class NeonRenderer {
  readonly canvas: HTMLCanvasElement;
  readonly adapter: GPUAdapter;
  readonly device: GPUDevice;
  readonly context: GPUCanvasContext;
  readonly format: GPUTextureFormat;
  #pipeline: GPURenderPipeline;
  #uniformBuffer: GPUBuffer;
  #bindGroup: GPUBindGroup;
  #orb: NeonOrb | null = null;
  #frame = 0;
  #startedAt = performance.now();

  private constructor(
    canvas: HTMLCanvasElement,
    adapter: GPUAdapter,
    device: GPUDevice,
    context: GPUCanvasContext,
    format: GPUTextureFormat,
  ) {
    this.canvas = canvas;
    this.adapter = adapter;
    this.device = device;
    this.context = context;
    this.format = format;
    const module = device.createShaderModule({ code: shader, label: "NeonFactory orb shader" });
    this.#pipeline = device.createRenderPipeline({
      label: "NeonFactory orb pipeline",
      layout: "auto",
      vertex: { module, entryPoint: "vertexMain" },
      fragment: {
        module,
        entryPoint: "fragmentMain",
        targets: [{ format, blend: { color: { srcFactor: "src-alpha", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } } }],
      },
      primitive: { topology: "triangle-list" },
    });
    this.#uniformBuffer = device.createBuffer({
      label: "NeonFactory orb uniforms",
      size: 48,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    this.#bindGroup = device.createBindGroup({
      layout: this.#pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.#uniformBuffer } }],
    });
  }

  static async create(canvas: HTMLCanvasElement): Promise<NeonRenderer> {
    if (!navigator.gpu) {
      throw new Error("WebGPU is required for NeonFactory. Use a browser and device with WebGPU enabled.");
    }
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("WebGPU is available, but no compatible GPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu");
    if (!context) throw new Error("The canvas could not create a WebGPU context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new NeonRenderer(canvas, adapter, device, context, format);
  }

  setScene(orb: NeonOrb): this {
    this.#orb = orb;
    return this;
  }

  start(): this {
    if (!this.#frame) this.#frame = requestAnimationFrame(this.#render);
    return this;
  }

  stop(): void {
    cancelAnimationFrame(this.#frame);
    this.#frame = 0;
  }

  destroy(): void {
    this.stop();
    this.#uniformBuffer.destroy();
    this.device.destroy();
  }

  #render = (now: number): void => {
    this.#resize();
    const orb = this.#orb;
    if (orb) {
      const data = new Float32Array([
        this.canvas.width, this.canvas.height,
        orb.x, orb.y,
        orb.radius, orb.glow,
        (now - this.#startedAt) / 1000, orb.animate ? 1 : 0,
        ...colorToRgba(orb.color),
      ]);
      this.device.queue.writeBuffer(this.#uniformBuffer, 0, data);
    }
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        clearValue: { r: 0.008, g: 0.012, b: 0.035, a: 1 },
        loadOp: "clear",
        storeOp: "store",
      }],
    });
    if (orb) {
      pass.setPipeline(this.#pipeline);
      pass.setBindGroup(0, this.#bindGroup);
      pass.draw(3);
    }
    pass.end();
    this.device.queue.submit([encoder.finish()]);
    this.#frame = requestAnimationFrame(this.#render);
  };

  #resize(): void {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }
}

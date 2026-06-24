// projects/NeonFactory/src/tokens.ts
var neonPalette = {
  cyan: "#55e7ff",
  pink: "#ff4f9a",
  green: "#7fffc2",
  gold: "#ffd45c",
  violet: "#a987ff",
  whiteHot: "#f4fbff"
};
var glowPresets = {
  soft: 0.38,
  standard: 0.65,
  intense: 1
};

// projects/NeonFactory/src/orb.ts
var NeonOrb = class {
  x;
  y;
  radius;
  color;
  glow;
  animate;
  constructor(options = {}) {
    this.x = options.x ?? 0.5;
    this.y = options.y ?? 0.5;
    this.radius = options.radius ?? 0.12;
    this.color = options.color ?? neonPalette.cyan;
    this.glow = options.glow ?? glowPresets.standard;
    this.animate = options.animate ?? true;
  }
  update(options) {
    Object.assign(this, options);
    this.x = Math.max(0, Math.min(1, this.x));
    this.y = Math.max(0, Math.min(1, this.y));
    this.radius = Math.max(0.01, Math.min(0.5, this.radius));
    this.glow = Math.max(0, Math.min(1.5, this.glow));
    return this;
  }
};

// projects/NeonFactory/src/renderer.ts
var shader = (
  /* wgsl */
  `
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
`
);
function colorToRgba(color) {
  const normalized = color.startsWith("#") ? color.slice(1) : color;
  if (!/^[0-9a-f]{6}$/i.test(normalized)) {
    throw new Error(`NeonFactory requires a six-digit hex color, received "${color}".`);
  }
  return [
    Number.parseInt(normalized.slice(0, 2), 16) / 255,
    Number.parseInt(normalized.slice(2, 4), 16) / 255,
    Number.parseInt(normalized.slice(4, 6), 16) / 255,
    1
  ];
}
var NeonRenderer = class _NeonRenderer {
  canvas;
  adapter;
  device;
  context;
  format;
  #pipeline;
  #uniformBuffer;
  #bindGroup;
  #orb = null;
  #frame = 0;
  #startedAt = performance.now();
  constructor(canvas, adapter, device, context, format) {
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
        targets: [{ format, blend: { color: { srcFactor: "src-alpha", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } } }]
      },
      primitive: { topology: "triangle-list" }
    });
    this.#uniformBuffer = device.createBuffer({
      label: "NeonFactory orb uniforms",
      size: 48,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    this.#bindGroup = device.createBindGroup({
      layout: this.#pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.#uniformBuffer } }]
    });
  }
  static async create(canvas) {
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
    return new _NeonRenderer(canvas, adapter, device, context, format);
  }
  setScene(orb) {
    this.#orb = orb;
    return this;
  }
  start() {
    if (!this.#frame) this.#frame = requestAnimationFrame(this.#render);
    return this;
  }
  stop() {
    cancelAnimationFrame(this.#frame);
    this.#frame = 0;
  }
  destroy() {
    this.stop();
    this.#uniformBuffer.destroy();
    this.device.destroy();
  }
  #render = (now) => {
    this.#resize();
    const orb = this.#orb;
    if (orb) {
      const data = new Float32Array([
        this.canvas.width,
        this.canvas.height,
        orb.x,
        orb.y,
        orb.radius,
        orb.glow,
        (now - this.#startedAt) / 1e3,
        orb.animate ? 1 : 0,
        ...colorToRgba(orb.color)
      ]);
      this.device.queue.writeBuffer(this.#uniformBuffer, 0, data);
    }
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        clearValue: { r: 8e-3, g: 0.012, b: 0.035, a: 1 },
        loadOp: "clear",
        storeOp: "store"
      }]
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
  #resize() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }
};

// projects/NeonFactory/src/primitive-renderer.ts
var maxPrimitives = 1024;
var floatsPerPrimitive = 12;
var shader2 = (
  /* wgsl */
  `
struct Scene { resolution: vec2f, count: f32, time: f32 }
struct Primitive { position: vec2f, size: vec2f, color: vec4f, glow: f32, intensity: f32, shape: f32, padding: f32 }
@group(0) @binding(0) var<uniform> scene: Scene;
@group(0) @binding(1) var<storage, read> items: array<Primitive>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) local: vec2f,
  @location(1) color: vec4f,
  @location(2) glow: f32,
  @location(3) intensity: f32,
  @location(4) shape: f32,
}

@vertex fn vertexMain(@builtin(vertex_index) vertex: u32, @builtin(instance_index) instance: u32) -> VertexOutput {
  var corners = array<vec2f, 6>(
    vec2f(-1,-1), vec2f(1,-1), vec2f(-1,1),
    vec2f(-1,1), vec2f(1,-1), vec2f(1,1)
  );
  let item = items[instance];
  let local = corners[vertex];
  let pixel = item.position + local * item.size;
  var output: VertexOutput;
  output.position = vec4f(pixel.x / scene.resolution.x * 2 - 1, 1 - pixel.y / scene.resolution.y * 2, 0, 1);
  output.local = local;
  output.color = item.color;
  output.glow = item.glow;
  output.intensity = item.intensity;
  output.shape = item.shape;
  return output;
}

@fragment fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
  var distance = length(input.local);
  if (input.shape > 0.5) {
    distance = max(abs(input.local.x), abs(input.local.y));
  }
  let core = 1 - smoothstep(0.45, 0.82, distance);
  let halo = (1 - smoothstep(0.35, 1, distance)) * input.glow;
  let energy = (core + halo) * input.intensity;
  let whiteCore = pow(max(core, 0), 4) * 0.75;
  return vec4f(input.color.rgb * energy + vec3f(whiteCore), clamp(energy, 0, 1));
}
`
);
function rgba(hex) {
  const value = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) throw new Error(`Expected six-digit hex color, received "${hex}".`);
  return [
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
    1
  ];
}
var NeonPrimitiveRenderer = class _NeonPrimitiveRenderer {
  canvas;
  device;
  #context;
  #pipeline;
  #sceneBuffer;
  #primitiveBuffer;
  #bindGroup;
  constructor(canvas, device, context, format) {
    this.canvas = canvas;
    this.device = device;
    this.#context = context;
    const module = device.createShaderModule({ code: shader2 });
    this.#pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: { module, entryPoint: "vertexMain" },
      fragment: {
        module,
        entryPoint: "fragmentMain",
        targets: [{ format, blend: { color: { srcFactor: "src-alpha", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } } }]
      },
      primitive: { topology: "triangle-list" }
    });
    this.#sceneBuffer = device.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.#primitiveBuffer = device.createBuffer({
      size: maxPrimitives * floatsPerPrimitive * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });
    this.#bindGroup = device.createBindGroup({
      layout: this.#pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.#sceneBuffer } },
        { binding: 1, resource: { buffer: this.#primitiveBuffer } }
      ]
    });
  }
  static async create(canvas) {
    if (!navigator.gpu) throw new Error("WebGPU is required for NeonFactory.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu");
    if (!context) throw new Error("The canvas could not create a WebGPU context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonPrimitiveRenderer(canvas, device, context, format);
  }
  render(primitives, timeSeconds = 0) {
    this.#resize();
    const visible = primitives.slice(0, maxPrimitives);
    const data = new Float32Array(visible.length * floatsPerPrimitive);
    visible.forEach((item, index) => {
      const offset = index * floatsPerPrimitive;
      data.set([
        item.x,
        item.y,
        item.width,
        item.height ?? item.width,
        ...rgba(item.color),
        item.glow ?? 0.5,
        item.intensity ?? 1,
        item.shape === "bolt" ? 1 : 0,
        0
      ], offset);
    });
    this.device.queue.writeBuffer(this.#sceneBuffer, 0, new Float32Array([this.canvas.width, this.canvas.height, visible.length, timeSeconds]));
    if (data.length) this.device.queue.writeBuffer(this.#primitiveBuffer, 0, data);
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.#context.getCurrentTexture().createView(),
        clearValue: { r: 6e-3, g: 9e-3, b: 0.025, a: 1 },
        loadOp: "clear",
        storeOp: "store"
      }]
    });
    if (visible.length) {
      pass.setPipeline(this.#pipeline);
      pass.setBindGroup(0, this.#bindGroup);
      pass.draw(6, visible.length);
    }
    pass.end();
    this.device.queue.submit([encoder.finish()]);
  }
  #resize() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }
};

// projects/NeonFactory/src/test-harness.ts
function createTestPage(id, driver, statusElement) {
  const snapshot = { id, status: "booting", assertions: [] };
  const publish = () => {
    statusElement.dataset.status = snapshot.status;
    statusElement.textContent = `${snapshot.status.toUpperCase()} \xB7 ${snapshot.assertions.filter((a) => a.passed).length}/${snapshot.assertions.length} assertions`;
    document.documentElement.dataset.testStatus = snapshot.status;
  };
  const api = {
    ...driver,
    getSnapshot: () => structuredClone(snapshot),
    ready() {
      snapshot.status = "ready";
      publish();
    },
    assert(name, passed, detail) {
      snapshot.assertions.push({ name, passed, detail });
      snapshot.status = snapshot.assertions.every((assertion) => assertion.passed) ? "passed" : "failed";
      publish();
    }
  };
  window.neonFactoryTest = api;
  publish();
  return api;
}
export {
  NeonOrb,
  NeonPrimitiveRenderer,
  NeonRenderer,
  createTestPage,
  glowPresets,
  neonPalette
};
//# sourceMappingURL=neonfactory.js.map

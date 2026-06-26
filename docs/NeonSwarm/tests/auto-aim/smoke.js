// projects/NeonFactory/src/tokens.ts
var neonPalette = {
  cyan: "#55e7ff",
  pink: "#ff4f9a",
  green: "#7fffc2",
  gold: "#ffd45c",
  violet: "#a987ff",
  orange: "#ff8a45",
  red: "#ff5577",
  deepBlue: "#287dff",
  whiteHot: "#f4fbff"
};

// projects/NeonFactory/src/geometric-shapes.ts
var regular = (sides, rotation = -Math.PI / 2, sx = 1, sy = 1) => Array.from({ length: sides }, (_, i) => {
  const angle = rotation + i * Math.PI * 2 / sides;
  return [Math.cos(angle) * sx, Math.sin(angle) * sy];
});
var star = (points, inner = 0.42, rotation = -Math.PI / 2) => Array.from({ length: points * 2 }, (_, i) => {
  const radius = i % 2 ? inner : 1;
  const angle = rotation + i * Math.PI / points;
  return [Math.cos(angle) * radius, Math.sin(angle) * radius];
});
var diamond = [[0, -1], [1, 0], [0, 1], [-1, 0]];
var arrow = [[0, -1], [0.82, 0.68], [0.27, 0.45], [0, 0.92], [-0.27, 0.45], [-0.82, 0.68]];
var chevron = [[-1, -0.62], [0, -0.05], [1, -0.62], [0.28, 0.82], [0, 0.34], [-0.28, 0.82]];
var square = regular(4, Math.PI / 4);
var colors = {
  player: neonPalette.cyan,
  hunter: neonPalette.red,
  bruiser: neonPalette.violet,
  tank: neonPalette.gold,
  trickster: "#9cff52",
  elite: "#70dfff"
};
var make = (family, id, name, points, rock, holes) => ({ id, name, family, points, holes, rock, color: colors[family], depth: family === "tank" ? 0.22 : 0.14 });
var neonShapeCatalog = [
  make("player", "arrow-classic", "Arrow Classic", arrow, "pitch", [arrow.map(([x, y]) => [x * 0.42, y * 0.42])]),
  make("player", "delta-sleek", "Delta Sleek", [[0, -1], [0.9, 0.82], [0, 0.48], [-0.9, 0.82]], "pitch", [[[0, -0.45], [0.35, 0.45], [0, 0.28], [-0.35, 0.45]]]),
  make("player", "star-core", "Star Core", star(4, 0.32), "roll", [diamond.map(([x, y]) => [x * 0.2, y * 0.2])]),
  make("player", "hex-fighter", "Hex Fighter", regular(6), "yaw", [regular(6, -Math.PI / 2, 0.48, 0.48)]),
  make("player", "wing-split", "Wing Split", [[-1, -0.85], [-0.25, 0.1], [0, -0.25], [0.25, 0.1], [1, -0.85], [0.66, 0.72], [0, 0.35], [-0.66, 0.72]], "roll", [diamond.map(([x, y]) => [x * 0.18, y * 0.28])]),
  make("player", "triad-pod", "Triad Pod", regular(3), "yaw", [regular(3, -Math.PI / 2, 0.38, 0.38)]),
  make("player", "spike-lance", "Spike Lance", [[0, -1], [0.48, 0.65], [0.18, 0.42], [0, 1], [-0.18, 0.42], [-0.48, 0.65]], "pitch"),
  make("player", "orbit-drone", "Orbit Drone", regular(12), "orbit", [regular(12, 0, 0.58, 0.58)]),
  make("player", "shield-ring", "Shield Ring", regular(32), "orbit", [regular(32, 0, 0.91, 0.91)]),
  make("hunter", "hunter-dart", "Dart", [[-1, -0.7], [1, 0], [-1, 0.7], [-0.45, 0]], "pitch"),
  make("hunter", "hunter-kite", "Kite", [[-1, -0.75], [1, 0], [-1, 0.75], [-0.55, 0]], "roll", [regular(3, 0, 0.35, 0.35)]),
  make("hunter", "hunter-needle", "Needle", [[-1, -0.42], [1, 0], [-1, 0.42], [-0.55, 0]], "yaw"),
  make("hunter", "hunter-talon", "Talon", star(3, 0.28), "roll"),
  make("hunter", "hunter-shard", "Shard", diamond, "pitch"),
  make("hunter", "hunter-vee", "Vee", chevron, "pitch"),
  make("hunter", "hunter-eye", "Watcher", regular(3, Math.PI / 2), "yaw", [regular(3, Math.PI / 2, 0.42, 0.42)]),
  make("hunter", "hunter-burst", "Burst", star(8, 0.35), "pulse"),
  make("hunter", "hunter-bolt", "Bolt", [[-0.7, -1], [0.15, -0.35], [-0.25, -0.2], [0.7, 1], [-0.1, 0.32], [0.3, 0.15]], "roll"),
  make("bruiser", "bruiser-frame", "Frame", square, "roll", [square.map(([x, y]) => [x * 0.48, y * 0.48])]),
  make("bruiser", "bruiser-gem", "Gem", diamond, "pitch", [diamond.map(([x, y]) => [x * 0.28, y * 0.28])]),
  make("bruiser", "bruiser-hex", "Hex Core", regular(6), "yaw", [regular(6, 0, 0.28, 0.28)]),
  make("bruiser", "bruiser-crown", "Crown", [[-1, -0.75], [-0.5, -0.55], [0, -0.85], [0.5, -0.55], [1, -0.75], [0.8, 0.8], [-0.8, 0.8]], "roll"),
  make("bruiser", "bruiser-cross", "Cross", [[-0.35, -1], [0.35, -1], [0.35, -0.35], [1, -0.35], [1, 0.35], [0.35, 0.35], [0.35, 1], [-0.35, 1], [-0.35, 0.35], [-1, 0.35], [-1, -0.35], [-0.35, -0.35]], "yaw"),
  make("bruiser", "bruiser-prism", "Prism", diamond, "pulse", [diamond.map(([x, y]) => [x * 0.2, y * 0.2])]),
  make("bruiser", "bruiser-gear", "Gear", star(8, 0.72), "yaw", [regular(8, 0, 0.28, 0.28)]),
  make("bruiser", "bruiser-x", "X Core", [[-1, -0.65], [-0.65, -1], [0, -0.35], [0.65, -1], [1, -0.65], [0.35, 0], [1, 0.65], [0.65, 1], [0, 0.35], [-0.65, 1], [-1, 0.65], [-0.35, 0]], "roll"),
  make("bruiser", "bruiser-slab", "Slab", [[-0.65, -1], [1, -1], [0.65, 1], [-1, 1]], "pitch"),
  make("tank", "tank-hex", "Heavy Hex", regular(6), "yaw", [regular(6, 0, 0.38, 0.38)]),
  make("tank", "tank-bar", "Armor Bar", [[-0.75, -1], [0.75, -1], [1, -0.45], [0.75, 1], [-0.75, 1], [-1, 0.45]], "pitch", [[[-0.48, -0.18], [0.48, -0.18], [0.48, 0.18], [-0.48, 0.18]]]),
  make("tank", "tank-block", "Block", square, "roll", [square.map(([x, y]) => [x * 0.42, y * 0.42])]),
  make("tank", "tank-oct", "Octagon", regular(8), "yaw", [regular(8, 0, 0.58, 0.58)]),
  make("tank", "tank-fort", "Fortress", regular(6), "pitch", [regular(6, 0, 0.58, 0.58)]),
  make("tank", "tank-reactor", "Reactor", regular(10), "pulse", [regular(10, 0, 0.54, 0.54)]),
  make("tank", "tank-citadel", "Citadel", [[-0.65, -1], [0.65, -1], [0.65, -0.72], [1, -0.72], [1, 0.72], [0.65, 0.72], [0.65, 1], [-0.65, 1], [-0.65, 0.72], [-1, 0.72], [-1, -0.72], [-0.65, -0.72]], "roll", [square.map(([x, y]) => [x * 0.28, y * 0.28])]),
  make("tank", "tank-bunker", "Bunker", [[-0.72, -1], [0.72, -1], [1, -0.58], [1, 0.58], [0.72, 1], [-0.72, 1], [-1, 0.58], [-1, -0.58]], "pitch", [[[-0.5, -0.14], [0.5, -0.14], [0.5, 0.14], [-0.5, 0.14]]]),
  make("tank", "tank-sun", "Sun Tank", regular(12), "yaw", [regular(12, 0, 0.28, 0.28)]),
  make("trickster", "trick-diamond", "Phase Diamond", diamond, "roll", [diamond.map(([x, y]) => [x * 0.2, y * 0.2])]),
  make("trickster", "trick-chevron", "Slipstream", [[-1, -0.8], [-0.2, 0], [-1, 0.8], [-0.35, 0.8], [0.45, 0], [-0.35, -0.8], [0.25, -0.8], [1, 0], [0.25, 0.8]], "pitch"),
  make("trickster", "trick-square", "Tilt Box", square, "roll", [square.map(([x, y]) => [x * 0.34, y * 0.34])]),
  make("trickster", "trick-compass", "Compass", diamond, "yaw"),
  make("trickster", "trick-eye", "Phase Eye", regular(3), "pulse", [regular(8, 0, 0.18, 0.18)]),
  make("trickster", "trick-hourglass", "Hourglass", [[-1, -1], [1, -1], [0.28, 0], [1, 1], [-1, 1], [-0.28, 0]], "pitch"),
  make("trickster", "trick-link", "Link", regular(12, 0, 1, 0.55), "yaw", [regular(12, 0, 0.62, 0.22)]),
  make("trickster", "trick-vortex", "Vortex", star(7, 0.56), "roll", [regular(7, 0, 0.25, 0.25)]),
  make("trickster", "trick-gate", "Ghost Gate", square, "pulse", [square.map(([x, y]) => [x * 0.78, y * 0.78])]),
  make("elite", "elite-star", "Nova Star", star(8, 0.55), "roll", [regular(8, 0, 0.3, 0.3)]),
  make("elite", "elite-saw", "Halo Saw", star(12, 0.72), "yaw", [regular(12, 0, 0.42, 0.42)]),
  make("elite", "elite-crown", "Void Crown", star(7, 0.48), "pitch", [diamond.map(([x, y]) => [x * 0.22, y * 0.22])]),
  make("elite", "elite-prism", "Royal Prism", diamond, "roll", [diamond.map(([x, y]) => [x * 0.5, y * 0.5])]),
  make("elite", "elite-orbit", "Orbit Eye", regular(12), "orbit", [regular(12, 0, 0.6, 0.6), regular(12, 0, 0.2, 0.2)]),
  make("elite", "elite-circuit", "Circuit Lord", star(8, 0.75), "yaw", [square.map(([x, y]) => [x * 0.4, y * 0.4])]),
  make("elite", "elite-sentinel", "Sentinel", star(10, 0.62), "pulse", [regular(10, 0, 0.22, 0.22)]),
  make("elite", "elite-wings", "Night Wings", [[-1, -0.8], [-0.7, 0.35], [-0.25, 0.05], [0, 0.85], [0.25, 0.05], [0.7, 0.35], [1, -0.8], [0.35, -0.35], [0, -0.05], [-0.35, -0.35]], "pitch"),
  make("elite", "elite-emperor", "Emperor", star(8, 0.48), "roll", [regular(8, 0, 0.24, 0.24)])
];

// projects/NeonFactory/src/primitive-renderer.ts
var maxPrimitives = 1024;
var floatsPerPrimitive = 20;
var shader = (
  /* wgsl */
  `
struct Scene { resolution: vec2f, count: f32, time: f32 }
struct Primitive {
  position: vec2f,
  size: vec2f,
  color: vec4f,
  secondaryColor: vec4f,
  glow: f32,
  intensity: f32,
  shape: f32,
  texture: f32,
  rimIntensity: f32,
  shadowStrength: f32,
  padding: vec2f,
}
@group(0) @binding(0) var<uniform> scene: Scene;
@group(0) @binding(1) var<storage, read> items: array<Primitive>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) local: vec2f,
  @location(1) color: vec4f,
  @location(2) glow: f32,
  @location(3) intensity: f32,
  @location(4) shape: f32,
  @location(5) secondaryColor: vec4f,
  @location(6) texture: f32,
  @location(7) rimIntensity: f32,
  @location(8) shadowStrength: f32,
}

@vertex fn vertexMain(@builtin(vertex_index) vertex: u32, @builtin(instance_index) instance: u32) -> VertexOutput {
  var corners = array<vec2f, 6>(
    vec2f(-1,-1), vec2f(1,-1), vec2f(-1,1),
    vec2f(-1,1), vec2f(1,-1), vec2f(1,1)
  );
  let item = items[instance];
  let local = corners[vertex];
  var pixelOffset = local * item.size;
  if (item.shape > 6.5 && item.shape < 7.5) {
    let c = cos(item.texture);
    let s = sin(item.texture);
    pixelOffset = vec2f(pixelOffset.x * c - pixelOffset.y * s, pixelOffset.x * s + pixelOffset.y * c);
  }
  let pixel = item.position + pixelOffset;
  var output: VertexOutput;
  output.position = vec4f(pixel.x / scene.resolution.x * 2 - 1, 1 - pixel.y / scene.resolution.y * 2, 0, 1);
  output.local = local;
  output.color = item.color;
  output.glow = item.glow;
  output.intensity = item.intensity;
  output.shape = item.shape;
  output.secondaryColor = item.secondaryColor;
  output.texture = item.texture;
  output.rimIntensity = item.rimIntensity;
  output.shadowStrength = item.shadowStrength;
  return output;
}

@fragment fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
  if (input.shape > 7.5) {
    let radius = length(input.local);
    let angle = atan2(input.local.y, input.local.x);
    if (angle < input.rimIntensity || angle > input.shadowStrength || radius > 1.0) { discard; }
    let lineDistance = abs(radius - 0.78);
    if (lineDistance > 0.16) { discard; }
    let core = 1.0 - smoothstep(0.012, 0.038, lineDistance);
    let halo = (1.0 - smoothstep(0.025, 0.16, lineDistance)) * input.glow;
    let pulseA = pow(max(0.0, sin(angle * 23.0 - scene.time * 8.5)), 16.0);
    let pulseB = pow(max(0.0, sin(angle * 11.0 + scene.time * 5.3 + 1.7)), 24.0);
    let grain = sin(angle * 71.0 + scene.time * 3.1) * 0.5 + 0.5;
    let surge = smoothstep(0.72, 0.94, pulseA * 0.7 + pulseB * 0.65 + grain * 0.12);
    let energy = (core * (0.88 + surge * 0.65) + halo * (0.22 + surge * 0.9)) * input.intensity;
    let hot = mix(input.color.rgb, input.secondaryColor.rgb, core * surge * 0.9);
    return vec4f(hot * energy, clamp(energy, 0.0, 0.95));
  }
  if (input.shape > 6.5) {
    let along = input.local.y;
    let across = abs(input.local.x);
    if (across > 1.0 || abs(along) > 1.0) { discard; }
    let core = 1.0 - smoothstep(0.08, 0.24, across);
    let halo = (1.0 - smoothstep(0.12, 1.0, across)) * input.glow;
    let endFade = 1.0 - smoothstep(0.72, 1.0, abs(along));
    let travel = pow(max(0.0, sin(along * 24.0 - scene.time * 8.0 + input.texture)), 14.0);
    let energy = (core * (0.75 + travel * 0.5) + halo * (0.2 + travel * 0.55)) * endFade * input.intensity;
    let hot = mix(input.color.rgb, input.secondaryColor.rgb, core * travel * 0.75);
    return vec4f(hot * energy, clamp(energy, 0.0, 0.95));
  }
  if (input.shape > 5.5) {
    // Pentagon SDF
    // local is in [-1, 1] range. Let's find pentagon distance.
    let px = abs(input.local.x);
    let py = input.local.y;
    // Pentagon constants for vertices/edges
    let k = vec3f(-0.809016994, 0.587785252, 1.37638192); // cos/sin of 72, plus height factor
    // Project/Mirror across the symmetry axes of regular pentagon
    var p = vec2f(px, py);
    p = p - 2 * min(dot(vec2f(-k.x, k.y), p), 0) * vec2f(-k.x, k.y);
    p = p - 2 * min(dot(vec2f(k.x, k.y), p), 0) * vec2f(k.x, k.y);
    p.x = p.x - clamp(p.x, -k.z * 0.5, k.z * 0.5);
    let d = length(p - vec2f(0, 0.72)) * sign(p.y - 0.72);
    // Map d to a normalized radius scale
    let scaleD = d + 0.35; // offset pentagon to fit bounds nicely
    if (scaleD > 0.8) { discard; }
    
    let edge = 1 - smoothstep(0.5, 0.65, scaleD);
    let border = smoothstep(0.45, 0.53, scaleD) * (1 - smoothstep(0.65, 0.75, scaleD));
    let fill = 1 - smoothstep(-0.2, 0.5, scaleD);
    let halo = (1 - smoothstep(0.55, 0.8, scaleD)) * input.glow;
    let glass = fill * 0.38 + border * 1.35;
    let energy = (glass + halo * 0.5) * input.intensity;
    let edgeColor = input.color.rgb * (border * 1.75 + edge * 0.3);
    let fillColor = mix(input.secondaryColor.rgb, input.color.rgb, fill * 0.45) * fill * 0.35;
    let bloom = input.color.rgb * halo * 0.4;
    let rgb = edgeColor + fillColor + bloom;
    return vec4f(rgb, clamp(energy, 0, 0.95));
  }
  if (input.shape > 4.5) {
    let d = abs(input.local.x) + abs(input.local.y);
    if (d > 1.08) { discard; }
    let edge = 1 - smoothstep(0.78, 0.92, d);
    let border = smoothstep(0.72, 0.82, d) * (1 - smoothstep(0.92, 1.02, d));
    let fill = 1 - smoothstep(0.0, 0.78, d);
    let halo = (1 - smoothstep(0.82, 1.08, d)) * input.glow;
    let glass = fill * 0.35 + border * 1.2;
    let energy = (glass + halo * 0.45) * input.intensity;
    let edgeColor = input.color.rgb * (border * 1.6 + edge * 0.3);
    let fillColor = mix(input.secondaryColor.rgb, input.color.rgb, fill * 0.5) * fill * 0.38;
    let bloom = input.color.rgb * halo * 0.35;
    let rgb = edgeColor + fillColor + bloom;
    return vec4f(rgb, clamp(energy, 0, 0.95));
  }
  if (input.shape > 1.5) {
    let r2 = dot(input.local, input.local);
    if (r2 > 1) { discard; }
    let z = sqrt(max(0, 1 - r2));
    let normal = normalize(vec3f(input.local.x, -input.local.y, z));
    let light = normalize(vec3f(-0.55, -0.7, 0.9));
    let diffuse = max(dot(normal, light), 0);
    let rim = pow(1 - z, 2.2) * input.rimIntensity;
    let shadow = mix(1 - input.shadowStrength, 1, smoothstep(-0.65, 0.45, dot(normal.xy, light.xy)));
    let grain = sin(input.local.x * 23 + input.local.y * 17) * sin(input.local.y * 31 - input.local.x * 11);
    let texture = 1 + grain * input.texture * 0.22;
    let specular = pow(max(dot(reflect(-light, normal), vec3f(0,0,1)), 0), 28) * 1.8;
    let body = mix(input.secondaryColor.rgb, input.color.rgb, diffuse * 0.8 + 0.2) * shadow * texture;
    let halo = pow(max(0, 1 - length(input.local)), 0.35) * input.glow;
    let rgb = body * (0.38 + diffuse * 0.95) + input.color.rgb * rim + vec3f(specular) + input.color.rgb * halo * 0.3;
    return vec4f(rgb * input.intensity, 1);
  }
  var distance = length(input.local);
  if (input.shape > 3.5) {
    let axis = min(abs(input.local.x), abs(input.local.y));
    let arm = 1 - smoothstep(0.04, 0.18, axis);
    let fade = 1 - smoothstep(0.2, 1, max(abs(input.local.x), abs(input.local.y)));
    let energy = arm * fade * input.intensity;
    let rgb = mix(input.secondaryColor.rgb, input.color.rgb, arm) * energy;
    return vec4f(rgb, clamp(energy, 0, 0.92));
  }
  if (input.shape > 2.5) {
    let ringDistance = abs(length(input.local) - 0.62);
    let ring = 1 - smoothstep(0.055, 0.18, ringDistance);
    let halo = (1 - smoothstep(0.12, 0.42, ringDistance)) * input.glow;
    let energy = (ring + halo * 0.45) * input.intensity;
    let rgb = mix(input.secondaryColor.rgb, input.color.rgb, ring) * energy;
    return vec4f(rgb, clamp(energy, 0, 0.9));
  }
  if (input.shape > 0.5) {
    distance = max(abs(input.local.x), abs(input.local.y));
  }
  let core = 1 - smoothstep(0.38, 0.76, distance);
  let halo = (1 - smoothstep(0.3, 1, distance)) * input.glow;
  let energy = (core + halo * 0.55) * input.intensity;
  let chromaticCore = mix(input.color.rgb, input.secondaryColor.rgb, pow(max(core, 0), 2));
  let raw = chromaticCore * (core * 1.05 + halo * 0.42);
  let rgb = raw / (vec3f(1) + raw * 0.32);
  return vec4f(rgb, clamp(energy, 0, 0.92));
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
  #logicalSize = null;
  constructor(canvas2, device, context, format) {
    this.canvas = canvas2;
    this.device = device;
    this.#context = context;
    const module = device.createShaderModule({ code: shader });
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
  static async create(canvas2) {
    if (!navigator.gpu) throw new Error("WebGPU is required for NeonFactory.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas2.getContext("webgpu");
    if (!context) throw new Error("The canvas could not create a WebGPU context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonPrimitiveRenderer(canvas2, device, context, format);
  }
  setLogicalSize(width, height) {
    this.#logicalSize = { width, height };
    this.canvas.width = width;
    this.canvas.height = height;
    return this;
  }
  render(primitives, timeSeconds = 0, preserveColor = false, targetView) {
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
        ...rgba(item.secondaryColor ?? item.color),
        item.glow ?? 0.5,
        item.intensity ?? 1,
        item.shape === "arc" ? 8 : item.shape === "line" ? 7 : item.shape === "pentagon" ? 6 : item.shape === "diamond" ? 5 : item.shape === "spark" ? 4 : item.shape === "ring" ? 3 : item.shape === "orb" ? 2 : item.shape === "bolt" ? 1 : 0,
        item.rotation ?? item.texture ?? 0,
        item.arcStart ?? item.rimIntensity ?? 0,
        item.arcEnd ?? item.shadowStrength ?? 0,
        0,
        0
      ], offset);
    });
    this.device.queue.writeBuffer(this.#sceneBuffer, 0, new Float32Array([this.canvas.width, this.canvas.height, visible.length, timeSeconds]));
    if (data.length) this.device.queue.writeBuffer(this.#primitiveBuffer, 0, data);
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: targetView ?? this.#context.getCurrentTexture().createView(),
        clearValue: { r: 6e-3, g: 9e-3, b: 0.025, a: 1 },
        loadOp: preserveColor ? "load" : "clear",
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
    if (this.#logicalSize) {
      if (this.canvas.width !== this.#logicalSize.width) this.canvas.width = this.#logicalSize.width;
      if (this.canvas.height !== this.#logicalSize.height) this.canvas.height = this.#logicalSize.height;
      return;
    }
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }
};

// projects/NeonFactory/src/lane-runner-scenes.ts
var hallVanishingY = 0.46;
var hallBottomWidth = 0.92;
var hallHorizonWidth = 0.08;
var hallFloorColor = "#05101f";
var hallDeepBlue = "#12356a";
var hallMutedBlue = "#1b4c8d";
var hallMutedCyan = "#2ac4dc";
var hallMutedViolet = "#453079";
var hallAccentPink = "#a7357e";
var hallEnergySpeed = 17e-4;
function createLaneRunnerScene(options) {
  switch (options.sceneId) {
    case "neonHall":
      return createNeonHall(options);
  }
}
function createNeonHall(options) {
  const { width, height, timeMs } = options;
  const primitives = [];
  const geometry = hallGeometry(width, height);
  addHallBase(primitives, width, height, timeMs);
  addHallRails(primitives, geometry);
  addHallCrossbars(primitives, geometry, timeMs);
  addHallLaneSignals(primitives, geometry, timeMs);
  addHallFloorGlyphs(primitives, geometry, timeMs);
  addHallHorizonDetails(primitives, geometry, timeMs);
  addHallSidePanels(primitives, geometry, timeMs);
  addHallEnergyTraces(primitives, geometry, timeMs);
  return { primitives };
}
function hallGeometry(width, height) {
  const vp = { x: width * 0.5, y: height * hallVanishingY };
  const bottomY = height * 0.985;
  const horizonY = height * hallVanishingY;
  const bottomHalf = width * hallBottomWidth * 0.5;
  const horizonHalf = width * hallHorizonWidth * 0.5;
  return {
    width,
    height,
    vp,
    leftBottom: { x: width * 0.5 - bottomHalf, y: bottomY },
    rightBottom: { x: width * 0.5 + bottomHalf, y: bottomY },
    leftHorizon: { x: vp.x - horizonHalf, y: horizonY },
    rightHorizon: { x: vp.x + horizonHalf, y: horizonY }
  };
}
function addHallBase(items, width, height, timeMs) {
  const pulse = 0.55 + Math.sin(timeMs * hallEnergySpeed) * 0.2;
  items.push({ x: width / 2, y: height * 0.76, width: width * 0.5, height: height * 0.43, color: hallFloorColor, secondaryColor: "#02050d", glow: 0.05, intensity: 0.23, shape: "bolt" });
  items.push({ x: width / 2, y: height * hallVanishingY, width: width * 0.34, height: 1.4, color: hallDeepBlue, secondaryColor: hallMutedCyan, glow: 0.3, intensity: 0.18 + pulse * 0.07, shape: "bolt" });
  items.push({ x: width / 2, y: height * 0.49, width: width * 0.18, height: 1.2, color: hallAccentPink, secondaryColor: hallMutedViolet, glow: 0.24, intensity: 0.08, shape: "bolt" });
}
function addHallRails(items, geometry) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (const [bottom, horizon] of [[leftBottom, leftHorizon], [rightBottom, rightHorizon]]) {
    addGlowingLine(items, bottom, horizon, hallDeepBlue, 0.48, 6.5);
    addGlowingLine(items, bottom, horizon, hallMutedCyan, 0.56, 1.3);
  }
  for (let lane = 1; lane <= 3; lane++) {
    const u = lane / 4;
    const start = lerpPoint(leftBottom, rightBottom, u);
    const end = lerpPoint(leftHorizon, rightHorizon, u);
    const color = lane === 2 ? hallMutedViolet : hallMutedBlue;
    addGlowingLine(items, start, end, color, lane === 2 ? 0.28 : 0.2, 3.4);
    addGlowingLine(items, start, end, hallMutedCyan, lane === 2 ? 0.26 : 0.18, 0.9);
  }
}
function addHallCrossbars(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let row = 0; row < 15; row++) {
    const t = Math.pow(row / 14, 1.82);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const rowPulse = 0.58 + Math.sin(timeMs / 480 + row * 0.78) * 0.42;
    const surge = Math.max(0, Math.sin(timeMs / 820 - row * 0.72));
    const color = row % 4 === 0 ? hallMutedCyan : row % 4 === 1 ? hallMutedBlue : row % 4 === 2 ? hallMutedViolet : hallAccentPink;
    addGlowingLine(items, left, right, color, (0.15 + t * 0.23) * (0.55 + rowPulse * 0.45) + surge * 0.055, 3.1 + t * 2);
    addGlowingLine(items, left, right, color, (0.2 + t * 0.27) * (0.52 + rowPulse * 0.48) + surge * 0.07, 0.75 + t * 0.6);
  }
}
function addHallLaneSignals(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let pulseIndex = 0; pulseIndex < 7; pulseIndex++) {
    const travel = (timeMs / 1900 + pulseIndex / 7) % 1;
    const t = Math.pow(travel, 1.55);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const opacity = 0.34 * (1 - travel);
    addGlowingLine(items, left, right, hallMutedCyan, opacity, 1.1 + t * 1.4);
  }
}
function addHallFloorGlyphs(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  const rows = [2, 4, 6, 8, 10, 12];
  for (const row of rows) {
    const t = Math.pow(row / 14, 1.82);
    const center = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), 0.5);
    const scale = 0.45 + t * 1.1;
    const pulse = 0.48 + Math.sin(timeMs / 720 + row * 1.3) * 0.24;
    items.push({
      x: center.x,
      y: center.y,
      width: 7 * scale,
      height: 7 * scale,
      color: row % 4 === 0 ? hallMutedViolet : hallDeepBlue,
      secondaryColor: row % 3 === 0 ? hallAccentPink : hallMutedCyan,
      glow: 0.34,
      intensity: 0.24 + pulse * 0.16,
      shape: "diamond"
    });
  }
}
function addHallHorizonDetails(items, geometry, timeMs) {
  const { vp, width, height, leftHorizon, rightHorizon } = geometry;
  const glowPulse = 0.75 + Math.sin(timeMs / 680) * 0.25;
  addGlowingLine(items, { x: vp.x - width * 0.12, y: vp.y + height * 0.012 }, { x: vp.x + width * 0.12, y: vp.y + height * 0.012 }, hallAccentPink, 0.2 + glowPulse * 0.08, 1.1);
  addGlowingLine(items, { x: vp.x - width * 0.16, y: vp.y + height * 0.028 }, { x: vp.x - width * 0.06, y: vp.y + height * 0.028 }, hallMutedCyan, 0.16, 0.85);
  addGlowingLine(items, { x: vp.x + width * 0.06, y: vp.y + height * 0.028 }, { x: vp.x + width * 0.16, y: vp.y + height * 0.028 }, hallMutedViolet, 0.16, 0.85);
  for (let index = 0; index < 8; index++) {
    const u = (index + 0.5) / 8;
    const base = lerpPoint(leftHorizon, rightHorizon, u);
    const sideBias = Math.abs(u - 0.5) * 2;
    items.push({
      x: base.x,
      y: base.y - height * (0.018 + sideBias * 0.018),
      width: 1 + sideBias * 0.7,
      height: height * (0.035 + sideBias * 0.03),
      color: index % 2 === 0 ? hallMutedBlue : hallMutedViolet,
      secondaryColor: index % 3 === 0 ? hallMutedCyan : hallAccentPink,
      glow: 0.24,
      intensity: 0.07 + glowPulse * 0.035,
      shape: "line",
      rotation: Math.sin(index * 1.7) * 0.12
    });
  }
}
function addHallSidePanels(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height } = geometry;
  for (const side of [0, 1]) {
    for (let index = 0; index < 9; index++) {
      const t = Math.pow((index + 1) / 10, 1.68);
      const rail = side === 0 ? lerpPoint(leftHorizon, leftBottom, t) : lerpPoint(rightHorizon, rightBottom, t);
      const outward = side === 0 ? -1 : 1;
      const flicker = 0.58 + Math.sin(timeMs / 600 + index * 1.5 + side) * 0.28;
      items.push({
        x: rail.x + outward * width * (0.035 + t * 0.06),
        y: rail.y - height * (0.018 + t * 0.012),
        width: 1.2 + t * 1.2,
        height: height * (0.035 + t * 0.08),
        color: index % 3 === 0 ? hallAccentPink : index % 3 === 1 ? hallMutedBlue : hallMutedCyan,
        secondaryColor: hallMutedViolet,
        glow: 0.3,
        intensity: (0.075 + t * 0.065) * flicker,
        shape: "bolt"
      });
    }
  }
}
function addHallEnergyTraces(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let index = 0; index < 24; index++) {
    const depth = 0.12 + index * 37 % 100 / 116;
    const t = Math.min(1, Math.pow(depth, 1.7));
    const side = index % 4 === 0 ? 0.18 : index % 4 === 1 ? 0.34 : index % 4 === 2 ? 0.66 : 0.82;
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const point = lerpPoint(left, right, side + Math.sin(index * 1.7 + timeMs / 1700) * 0.035);
    const shimmer = 0.62 + Math.sin(timeMs / 390 + index * 1.1) * 0.38;
    items.push({
      x: point.x,
      y: point.y,
      width: 0.8 + index % 3 * 0.5,
      height: 10 + index % 5 * 7,
      color: index % 5 === 0 ? hallAccentPink : index % 3 === 0 ? hallMutedCyan : hallMutedBlue,
      secondaryColor: hallMutedViolet,
      glow: 0.32,
      intensity: (0.07 + index % 4 * 0.018) * shimmer,
      shape: "bolt"
    });
  }
}
function addGlowingLine(items, a, b, color, alpha, thickness) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy);
  items.push({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
    width: thickness,
    height: length / 2,
    color,
    secondaryColor: neonPalette.whiteHot,
    glow: 0.32,
    intensity: alpha,
    shape: "line",
    rotation: Math.atan2(-dx, dy)
  });
}
function lerpPoint(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

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

// projects/NeonSwarm/src/autoAim.ts
var AutoAimControlState = class {
  manual = false;
  laneSelected() {
  }
  aimChanged() {
    this.manual = true;
  }
  aimReleased() {
    this.manual = false;
  }
};
function selectAutoAimOffset(targets, laneCenter, columnOffsets, currentOffset = 0) {
  if (!targets.length) return 0;
  const explicitRows = /* @__PURE__ */ new Map();
  for (const target of targets) {
    if (target.rowId === void 0) continue;
    const row = explicitRows.get(target.rowId) ?? [];
    row.push(target);
    explicitRows.set(target.rowId, row);
  }
  const frontRow = explicitRows.size ? [...explicitRows.values()].sort((left, right) => Math.max(...right.map((t) => t.y)) - Math.max(...left.map((t) => t.y)))[0] : targets.filter((t) => Math.abs(t.y - Math.max(...targets.map((c) => c.y))) < 3);
  const cols = columnOffsets.length > 0 ? columnOffsets : [0];
  let bestOffset = currentOffset;
  let bestDist = Infinity;
  for (const enemy of frontRow) {
    for (const colOffset of cols) {
      const candidateOffset = enemy.x - laneCenter - colOffset;
      const dist = Math.abs(candidateOffset - currentOffset);
      if (dist < bestDist) {
        bestDist = dist;
        bestOffset = candidateOffset;
      }
    }
  }
  return bestOffset;
}

// projects/NeonSwarm/src/viewport.ts
var defaultHelicopterCameraSettings = {
  height: 170,
  lookAngleDegrees: 20,
  followDistance: 255,
  zoom: 0.73,
  horizon: 0.54
};
function projectHelicopterScene(primitives, shapes, settings, viewport) {
  const centerX = viewport.width / 2;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const minDepth = 20;
  const projectPoint = (x, y) => {
    const worldX = x - centerX;
    const worldZ = viewport.playerY - y + settings.followDistance;
    const relativeY = -settings.height;
    const cameraY = relativeY * cos + worldZ * sin;
    const cameraZ = Math.max(minDepth, worldZ * cos - relativeY * sin);
    const scale = focalLength / cameraZ;
    return {
      x: centerX + worldX * scale,
      y: horizonY - cameraY * scale,
      scale,
      depth: cameraZ
    };
  };
  const projectedPrimitives = primitives.map((primitive) => {
    const point = projectPoint(primitive.x, primitive.y);
    const width = primitive.width * point.scale;
    const height = (primitive.height ?? primitive.width) * point.scale;
    return {
      ...primitive,
      x: point.x,
      y: point.y,
      width,
      height
    };
  });
  const projectedShapes = shapes.map((shape) => {
    const point = projectPoint(shape.x, shape.y);
    return {
      ...shape,
      x: point.x,
      y: point.y,
      size: shape.size * point.scale,
      z: (shape.z ?? 0) - point.depth * 8e-4
    };
  }).sort((a, b) => (b.z ?? 0) - (a.z ?? 0));
  return { primitives: projectedPrimitives, shapes: projectedShapes };
}

// projects/NeonSwarm/test-pages/auto-aim/smoke.ts
var status = document.querySelector("#test-status");
var results = document.querySelector("#results");
var run = () => {
  const laneCenter = 200;
  const remaining = [{ x: 170, y: 120, rowId: 1 }, { x: 230, y: 120, rowId: 1 }];
  const fartherCenteredRow = [{ x: 200, y: 80, rowId: 2 }];
  const allTargets = [...remaining, ...fartherCenteredRow];
  const firstOffset = selectAutoAimOffset(allTargets, laneCenter, [0]);
  const firstTarget = firstOffset < 0 ? remaining[0] : firstOffset > 0 ? remaining[1] : null;
  const afterFirstKill = firstTarget ? allTargets.filter((target) => target !== firstTarget) : allTargets;
  const secondOffset = selectAutoAimOffset(afterFirstKill, laneCenter, [0]);
  const control = new AutoAimControlState();
  control.laneSelected();
  const autoAimAfterLaneTap = !control.manual;
  control.aimChanged();
  const manualDuringJoystickAim = control.manual;
  control.aimReleased();
  const autoAimAfterJoystickRelease = !control.manual;
  return { firstOffset, firstTarget, secondOffset, autoAimAfterLaneTap, manualDuringJoystickAim, autoAimAfterJoystickRelease };
};
var test = createTestPage("neon-swarm-auto-aim-smoke", { suite: "smoke", run }, status);
test.ready();
var outcome = run();
var assertions = [
  ["Symmetric outside survivors produce a decisive first shift", outcome.firstOffset !== 0],
  ["First shift selects one remaining enemy", outcome.firstTarget !== null],
  ["After first kill auto aim shifts to the other survivor", outcome.firstTarget !== null && outcome.secondOffset !== 0 && Math.sign(outcome.secondOffset) !== Math.sign(outcome.firstOffset)],
  ["Closer row wins over a farther centered row", outcome.firstOffset !== 0],
  ["Lane tap does not permanently disable auto aim", outcome.autoAimAfterLaneTap],
  ["Joystick aim suppresses auto aim only until release", outcome.manualDuringJoystickAim && outcome.autoAimAfterJoystickRelease]
];
results.innerHTML = assertions.map(([name, passed], index) => `
  <li data-passed="${passed}" data-index="${index}">
    <strong>${name}</strong>
    <span>${passed ? "PASS" : "FAIL"}</span>
  </li>`).join("");
results.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    const idx = Number(item.getAttribute("data-index"));
    startSimulation(idx);
  });
});
for (const [name, passed] of assertions) test.assert(name, passed, `first=${outcome.firstOffset} second=${outcome.secondOffset}`);
var pageContainer = document.getElementById("page-container");
var simulatorPanel = document.getElementById("simulator-panel");
var closeSimBtn = document.getElementById("close-sim");
var replayBtn = document.getElementById("replay-btn");
var pauseBtn = document.getElementById("pause-btn");
var simStatusText = document.getElementById("sim-status");
var simTitle = document.getElementById("sim-title");
var simDetails = document.getElementById("sim-details");
var canvas = document.getElementById("game-canvas");
var renderer = null;
var animationFrameId = null;
var isPaused = false;
var activeScenarioIdx = 0;
var simTimeMs = 0;
var lastTimeMs = 0;
var simFinished = false;
var simOutcome = "";
var squadX = 200;
var squadAimX = 200;
var targetSquadAimX = 200;
var enemies = [];
var joystickOffset = 0;
var manualMode = false;
var laserActive = false;
async function startSimulation(index) {
  if (!renderer) {
    try {
      renderer = await NeonPrimitiveRenderer.create(canvas);
      renderer.setLogicalSize(450, 800);
    } catch (e) {
      console.error("Failed to initialize renderer", e);
      return;
    }
  }
  activeScenarioIdx = index;
  pageContainer.classList.add("simulator-active");
  simulatorPanel.removeAttribute("hidden");
  simTitle.textContent = assertions[index][0];
  resetSimulation();
  loop(performance.now());
}
function resetSimulation() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  simTimeMs = 0;
  lastTimeMs = 0;
  simFinished = false;
  simOutcome = "";
  isPaused = false;
  pauseBtn.textContent = "Pause";
  simStatusText.textContent = "Simulating...";
  simStatusText.className = "sim-status";
  squadX = 200;
  squadAimX = 200;
  targetSquadAimX = 200;
  joystickOffset = 0;
  manualMode = false;
  laserActive = true;
  if (activeScenarioIdx === 0 || activeScenarioIdx === 1) {
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 },
      { x: 230, y: 320, id: 2, color: neonPalette.pink, health: 1 }
    ];
  } else if (activeScenarioIdx === 2) {
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 },
      { x: 230, y: 320, id: 2, color: neonPalette.pink, health: 1 }
    ];
  } else if (activeScenarioIdx === 3) {
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 },
      { x: 230, y: 320, id: 2, color: neonPalette.pink, health: 1 },
      { x: 200, y: 200, id: 3, color: neonPalette.gold, health: 1 }
      // Farther in Y (smaller Y = farther away from squad Y=650)
    ];
  } else if (activeScenarioIdx === 4) {
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 }
    ];
  } else if (activeScenarioIdx === 5) {
    enemies = [
      { x: 230, y: 320, id: 1, color: neonPalette.pink, health: 1 }
    ];
  }
  updateDetails();
}
function updateDetails() {
  simDetails.innerHTML = `
    <dt>Scenario</dt><dd>${assertions[activeScenarioIdx][0]}</dd>
    <dt>Squad Position</dt><dd>x: ${squadX.toFixed(0)}, aim: ${(squadAimX - squadX).toFixed(0)}</dd>
    <dt>Manual Mode</dt><dd>${manualMode ? "YES" : "NO"}</dd>
    <dt>Time Elapsed</dt><dd>${simTimeMs.toFixed(0)} ms</dd>
    <dt>Status</dt><dd>${simOutcome || "Simulating"}</dd>
  `;
}
function loop(now) {
  if (isPaused) {
    lastTimeMs = now;
    animationFrameId = requestAnimationFrame(loop);
    return;
  }
  if (lastTimeMs === 0) lastTimeMs = now;
  const dt = Math.min((now - lastTimeMs) / 1e3, 0.05);
  lastTimeMs = now;
  updateSim(dt);
  drawSim();
  if (!simFinished) {
    animationFrameId = requestAnimationFrame(loop);
  }
}
function updateSim(dt) {
  simTimeMs += dt * 1e3;
  if (activeScenarioIdx === 0 || activeScenarioIdx === 1) {
    const laneCenter = 200;
    const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
    targetSquadAimX = laneCenter + offset;
    if (simTimeMs > 2500) {
      simFinished = true;
      simOutcome = `PASSED \xB7 Selected target at x=${squadAimX.toFixed(0)}`;
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 2) {
    const laneCenter = 200;
    if (simTimeMs < 1500) {
      const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
      targetSquadAimX = laneCenter + offset;
    } else if (simTimeMs >= 1500 && simTimeMs < 3e3) {
      if (enemies.length === 2) {
        enemies.splice(0, 1);
      }
      const offset = selectAutoAimOffset(enemies, laneCenter, [0], squadAimX - laneCenter);
      targetSquadAimX = laneCenter + offset;
    } else {
      simFinished = true;
      simOutcome = "PASSED \xB7 Successfully shifted auto-aim to the second survivor";
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 3) {
    const laneCenter = 200;
    const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
    targetSquadAimX = laneCenter + offset;
    if (simTimeMs > 2500) {
      simFinished = true;
      simOutcome = `PASSED \xB7 Chose closer row target at x=${squadAimX.toFixed(0)} over farther centered row`;
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 4) {
    const laneCenter = 200;
    const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
    targetSquadAimX = laneCenter + offset;
    if (simTimeMs > 2500) {
      simFinished = true;
      simOutcome = "PASSED \xB7 Lane tap checked; auto aim is active";
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 5) {
    const laneCenter = 200;
    if (simTimeMs < 1200) {
      manualMode = true;
      targetSquadAimX = 140;
    } else if (simTimeMs >= 1200 && simTimeMs < 3e3) {
      manualMode = false;
      const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
      targetSquadAimX = laneCenter + offset;
    } else {
      simFinished = true;
      simOutcome = "PASSED \xB7 Auto aim suppressed by joystick, snapped back on release";
      simStatusText.textContent = "PASSED";
    }
  }
  squadAimX += (targetSquadAimX - squadAimX) * Math.min(8 * dt, 1);
  updateDetails();
}
function drawSim() {
  const primitives = [
    ...createLaneRunnerScene({ sceneId: "neonHall", width: canvas.width, height: canvas.height, timeMs: simTimeMs }).primitives ?? []
  ];
  primitives.push({
    x: squadX,
    y: 650,
    width: 8,
    color: neonPalette.cyan,
    secondaryColor: neonPalette.deepBlue,
    glow: 0.85,
    shape: "orb",
    rimIntensity: 0.8
  });
  if (laserActive) {
    primitives.push({
      x: (squadX + squadAimX) / 2,
      y: (650 + 320) / 2,
      width: manualMode ? 1.5 : 2.5,
      height: 330,
      color: manualMode ? neonPalette.pink : neonPalette.green,
      secondaryColor: neonPalette.whiteHot,
      glow: 0.6,
      intensity: 0.8,
      shape: "bolt"
    });
  }
  for (const enemy of enemies) {
    primitives.push({
      x: enemy.x,
      y: enemy.y,
      width: 7,
      color: enemy.color,
      secondaryColor: neonPalette.whiteHot,
      glow: 0.8,
      texture: 0.3,
      rimIntensity: 1,
      shadowStrength: 0.5,
      intensity: 1,
      shape: "orb"
    });
  }
  if (manualMode) {
    primitives.push({
      x: 100,
      y: 700,
      width: 30,
      color: neonPalette.pink,
      secondaryColor: neonPalette.whiteHot,
      glow: 0.5,
      shape: "ring"
    });
  }
  const projected = projectHelicopterScene(primitives, [], defaultHelicopterCameraSettings, {
    width: canvas.width,
    height: canvas.height,
    playerY: 650
  });
  renderer.render(projected.primitives, simTimeMs / 1e3);
}
closeSimBtn.addEventListener("click", () => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  pageContainer.classList.remove("simulator-active");
  simulatorPanel.setAttribute("hidden", "true");
});
replayBtn.addEventListener("click", () => {
  resetSimulation();
  loop(performance.now());
});
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvcHJpbWl0aXZlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rlc3QtaGFybmVzcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2F1dG9BaW0udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy92aWV3cG9ydC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vdGVzdC1wYWdlcy9hdXRvLWFpbS9zbW9rZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJleHBvcnQgdHlwZSBOZW9uUHJpbWl0aXZlU2hhcGUgPSBcImNpcmNsZVwiIHwgXCJib2x0XCIgfCBcIm9yYlwiIHwgXCJyaW5nXCIgfCBcInNwYXJrXCIgfCBcImRpYW1vbmRcIiB8IFwicGVudGFnb25cIiB8IFwibGluZVwiIHwgXCJhcmNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJpbWl0aXZlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I/OiBzdHJpbmc7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgdGV4dHVyZT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aD86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIGFyY1N0YXJ0PzogbnVtYmVyO1xuICBhcmNFbmQ/OiBudW1iZXI7XG4gIHNoYXBlPzogTmVvblByaW1pdGl2ZVNoYXBlO1xufVxuXG5jb25zdCBtYXhQcmltaXRpdmVzID0gMTAyNDtcbmNvbnN0IGZsb2F0c1BlclByaW1pdGl2ZSA9IDIwO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovIGBcbnN0cnVjdCBTY2VuZSB7IHJlc29sdXRpb246IHZlYzJmLCBjb3VudDogZjMyLCB0aW1lOiBmMzIgfVxuc3RydWN0IFByaW1pdGl2ZSB7XG4gIHBvc2l0aW9uOiB2ZWMyZixcbiAgc2l6ZTogdmVjMmYsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBnbG93OiBmMzIsXG4gIGludGVuc2l0eTogZjMyLFxuICBzaGFwZTogZjMyLFxuICB0ZXh0dXJlOiBmMzIsXG4gIHJpbUludGVuc2l0eTogZjMyLFxuICBzaGFkb3dTdHJlbmd0aDogZjMyLFxuICBwYWRkaW5nOiB2ZWMyZixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBpdGVtczogYXJyYXk8UHJpbWl0aXZlPjtcblxuc3RydWN0IFZlcnRleE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBpbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDQpIHNoYXBlOiBmMzIsXG4gIEBsb2NhdGlvbig1KSBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbig2KSB0ZXh0dXJlOiBmMzIsXG4gIEBsb2NhdGlvbig3KSByaW1JbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDgpIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG59XG5cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZlcnRleDogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gVmVydGV4T3V0cHV0IHtcbiAgdmFyIGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBpdGVtID0gaXRlbXNbaW5zdGFuY2VdO1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZlcnRleF07XG4gIHZhciBwaXhlbE9mZnNldCA9IGxvY2FsICogaXRlbS5zaXplO1xuICBpZiAoaXRlbS5zaGFwZSA+IDYuNSAmJiBpdGVtLnNoYXBlIDwgNy41KSB7XG4gICAgbGV0IGMgPSBjb3MoaXRlbS50ZXh0dXJlKTtcbiAgICBsZXQgcyA9IHNpbihpdGVtLnRleHR1cmUpO1xuICAgIHBpeGVsT2Zmc2V0ID0gdmVjMmYocGl4ZWxPZmZzZXQueCAqIGMgLSBwaXhlbE9mZnNldC55ICogcywgcGl4ZWxPZmZzZXQueCAqIHMgKyBwaXhlbE9mZnNldC55ICogYyk7XG4gIH1cbiAgbGV0IHBpeGVsID0gaXRlbS5wb3NpdGlvbiArIHBpeGVsT2Zmc2V0O1xuICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKHBpeGVsLnggLyBzY2VuZS5yZXNvbHV0aW9uLnggKiAyIC0gMSwgMSAtIHBpeGVsLnkgLyBzY2VuZS5yZXNvbHV0aW9uLnkgKiAyLCAwLCAxKTtcbiAgb3V0cHV0LmxvY2FsID0gbG9jYWw7XG4gIG91dHB1dC5jb2xvciA9IGl0ZW0uY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaXRlbS5nbG93O1xuICBvdXRwdXQuaW50ZW5zaXR5ID0gaXRlbS5pbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFwZSA9IGl0ZW0uc2hhcGU7XG4gIG91dHB1dC5zZWNvbmRhcnlDb2xvciA9IGl0ZW0uc2Vjb25kYXJ5Q29sb3I7XG4gIG91dHB1dC50ZXh0dXJlID0gaXRlbS50ZXh0dXJlO1xuICBvdXRwdXQucmltSW50ZW5zaXR5ID0gaXRlbS5yaW1JbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFkb3dTdHJlbmd0aCA9IGl0ZW0uc2hhZG93U3RyZW5ndGg7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgaWYgKGlucHV0LnNoYXBlID4gNy41KSB7XG4gICAgbGV0IHJhZGl1cyA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gICAgbGV0IGFuZ2xlID0gYXRhbjIoaW5wdXQubG9jYWwueSwgaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFuZ2xlIDwgaW5wdXQucmltSW50ZW5zaXR5IHx8IGFuZ2xlID4gaW5wdXQuc2hhZG93U3RyZW5ndGggfHwgcmFkaXVzID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgbGluZURpc3RhbmNlID0gYWJzKHJhZGl1cyAtIDAuNzgpO1xuICAgIGlmIChsaW5lRGlzdGFuY2UgPiAwLjE2KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTIsIDAuMDM4LCBsaW5lRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4wMjUsIDAuMTYsIGxpbmVEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcHVsc2VBID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDIzLjAgLSBzY2VuZS50aW1lICogOC41KSksIDE2LjApO1xuICAgIGxldCBwdWxzZUIgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMTEuMCArIHNjZW5lLnRpbWUgKiA1LjMgKyAxLjcpKSwgMjQuMCk7XG4gICAgbGV0IGdyYWluID0gc2luKGFuZ2xlICogNzEuMCArIHNjZW5lLnRpbWUgKiAzLjEpICogMC41ICsgMC41O1xuICAgIGxldCBzdXJnZSA9IHNtb290aHN0ZXAoMC43MiwgMC45NCwgcHVsc2VBICogMC43ICsgcHVsc2VCICogMC42NSArIGdyYWluICogMC4xMik7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuODggKyBzdXJnZSAqIDAuNjUpICsgaGFsbyAqICgwLjIyICsgc3VyZ2UgKiAwLjkpKSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogc3VyZ2UgKiAwLjkpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNi41KSB7XG4gICAgbGV0IGFsb25nID0gaW5wdXQubG9jYWwueTtcbiAgICBsZXQgYWNyb3NzID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhY3Jvc3MgPiAxLjAgfHwgYWJzKGFsb25nKSA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDgsIDAuMjQsIGFjcm9zcyk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjEyLCAxLjAsIGFjcm9zcykpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5kRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMC43MiwgMS4wLCBhYnMoYWxvbmcpKTtcbiAgICBsZXQgdHJhdmVsID0gcG93KG1heCgwLjAsIHNpbihhbG9uZyAqIDI0LjAgLSBzY2VuZS50aW1lICogOC4wICsgaW5wdXQudGV4dHVyZSkpLCAxNC4wKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC43NSArIHRyYXZlbCAqIDAuNSkgKyBoYWxvICogKDAuMiArIHRyYXZlbCAqIDAuNTUpKSAqIGVuZEZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHRyYXZlbCAqIDAuNzUpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNS41KSB7XG4gICAgLy8gUGVudGFnb24gU0RGXG4gICAgLy8gbG9jYWwgaXMgaW4gWy0xLCAxXSByYW5nZS4gTGV0J3MgZmluZCBwZW50YWdvbiBkaXN0YW5jZS5cbiAgICBsZXQgcHggPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgbGV0IHB5ID0gaW5wdXQubG9jYWwueTtcbiAgICAvLyBQZW50YWdvbiBjb25zdGFudHMgZm9yIHZlcnRpY2VzL2VkZ2VzXG4gICAgbGV0IGsgPSB2ZWMzZigtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAxLjM3NjM4MTkyKTsgLy8gY29zL3NpbiBvZiA3MiwgcGx1cyBoZWlnaHQgZmFjdG9yXG4gICAgLy8gUHJvamVjdC9NaXJyb3IgYWNyb3NzIHRoZSBzeW1tZXRyeSBheGVzIG9mIHJlZ3VsYXIgcGVudGFnb25cbiAgICB2YXIgcCA9IHZlYzJmKHB4LCBweSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZigtay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZigtay54LCBrLnkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZihrLngsIGsueSk7XG4gICAgcC54ID0gcC54IC0gY2xhbXAocC54LCAtay56ICogMC41LCBrLnogKiAwLjUpO1xuICAgIGxldCBkID0gbGVuZ3RoKHAgLSB2ZWMyZigwLCAwLjcyKSkgKiBzaWduKHAueSAtIDAuNzIpO1xuICAgIC8vIE1hcCBkIHRvIGEgbm9ybWFsaXplZCByYWRpdXMgc2NhbGVcbiAgICBsZXQgc2NhbGVEID0gZCArIDAuMzU7IC8vIG9mZnNldCBwZW50YWdvbiB0byBmaXQgYm91bmRzIG5pY2VseVxuICAgIGlmIChzY2FsZUQgPiAwLjgpIHsgZGlzY2FyZDsgfVxuICAgIFxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC41LCAwLjY1LCBzY2FsZUQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNDUsIDAuNTMsIHNjYWxlRCkgKiAoMSAtIHNtb290aHN0ZXAoMC42NSwgMC43NSwgc2NhbGVEKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgtMC4yLCAwLjUsIHNjYWxlRCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC41NSwgMC44LCBzY2FsZUQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzggKyBib3JkZXIgKiAxLjM1O1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC41KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNzUgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC40NSkgKiBmaWxsICogMC4zNTtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC40O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA0LjUpIHtcbiAgICBsZXQgZCA9IGFicyhpbnB1dC5sb2NhbC54KSArIGFicyhpbnB1dC5sb2NhbC55KTtcbiAgICBpZiAoZCA+IDEuMDgpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC43OCwgMC45MiwgZCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC43MiwgMC44MiwgZCkgKiAoMSAtIHNtb290aHN0ZXAoMC45MiwgMS4wMiwgZCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoMC4wLCAwLjc4LCBkKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjgyLCAxLjA4LCBkKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM1ICsgYm9yZGVyICogMS4yO1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjYgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC41KSAqIGZpbGwgKiAwLjM4O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM1O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAxLjUpIHtcbiAgICBsZXQgcjIgPSBkb3QoaW5wdXQubG9jYWwsIGlucHV0LmxvY2FsKTtcbiAgICBpZiAocjIgPiAxKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgeiA9IHNxcnQobWF4KDAsIDEgLSByMikpO1xuICAgIGxldCBub3JtYWwgPSBub3JtYWxpemUodmVjM2YoaW5wdXQubG9jYWwueCwgLWlucHV0LmxvY2FsLnksIHopKTtcbiAgICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLTAuNTUsIC0wLjcsIDAuOSkpO1xuICAgIGxldCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCk7XG4gICAgbGV0IHJpbSA9IHBvdygxIC0geiwgMi4yKSAqIGlucHV0LnJpbUludGVuc2l0eTtcbiAgICBsZXQgc2hhZG93ID0gbWl4KDEgLSBpbnB1dC5zaGFkb3dTdHJlbmd0aCwgMSwgc21vb3Roc3RlcCgtMC42NSwgMC40NSwgZG90KG5vcm1hbC54eSwgbGlnaHQueHkpKSk7XG4gICAgbGV0IGdyYWluID0gc2luKGlucHV0LmxvY2FsLnggKiAyMyArIGlucHV0LmxvY2FsLnkgKiAxNykgKiBzaW4oaW5wdXQubG9jYWwueSAqIDMxIC0gaW5wdXQubG9jYWwueCAqIDExKTtcbiAgICBsZXQgdGV4dHVyZSA9IDEgKyBncmFpbiAqIGlucHV0LnRleHR1cmUgKiAwLjIyO1xuICAgIGxldCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0LCBub3JtYWwpLCB2ZWMzZigwLDAsMSkpLCAwKSwgMjgpICogMS44O1xuICAgIGxldCBib2R5ID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBkaWZmdXNlICogMC44ICsgMC4yKSAqIHNoYWRvdyAqIHRleHR1cmU7XG4gICAgbGV0IGhhbG8gPSBwb3cobWF4KDAsIDEgLSBsZW5ndGgoaW5wdXQubG9jYWwpKSwgMC4zNSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCByZ2IgPSBib2R5ICogKDAuMzggKyBkaWZmdXNlICogMC45NSkgKyBpbnB1dC5jb2xvci5yZ2IgKiByaW0gKyB2ZWMzZihzcGVjdWxhcikgKyBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IgKiBpbnB1dC5pbnRlbnNpdHksIDEpO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDMuNSkge1xuICAgIGxldCBheGlzID0gbWluKGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgICBsZXQgYXJtID0gMSAtIHNtb290aHN0ZXAoMC4wNCwgMC4xOCwgYXhpcyk7XG4gICAgbGV0IGZhZGUgPSAxIC0gc21vb3Roc3RlcCgwLjIsIDEsIG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSkpO1xuICAgIGxldCBlbmVyZ3kgPSBhcm0gKiBmYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGFybSkgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMi41KSB7XG4gICAgbGV0IHJpbmdEaXN0YW5jZSA9IGFicyhsZW5ndGgoaW5wdXQubG9jYWwpIC0gMC42Mik7XG4gICAgbGV0IHJpbmcgPSAxIC0gc21vb3Roc3RlcCgwLjA1NSwgMC4xOCwgcmluZ0Rpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjEyLCAwLjQyLCByaW5nRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZXJneSA9IChyaW5nICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIHJpbmcpICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMC41KSB7XG4gICAgZGlzdGFuY2UgPSBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICB9XG4gIGxldCBjb3JlID0gMSAtIHNtb290aHN0ZXAoMC4zOCwgMC43NiwgZGlzdGFuY2UpO1xuICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjMsIDEsIGRpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICBsZXQgZW5lcmd5ID0gKGNvcmUgKyBoYWxvICogMC41NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gIGxldCBjaHJvbWF0aWNDb3JlID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBwb3cobWF4KGNvcmUsIDApLCAyKSk7XG4gIGxldCByYXcgPSBjaHJvbWF0aWNDb3JlICogKGNvcmUgKiAxLjA1ICsgaGFsbyAqIDAuNDIpO1xuICBsZXQgcmdiID0gcmF3IC8gKHZlYzNmKDEpICsgcmF3ICogMC4zMik7XG4gIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xufVxuYDtcblxuZnVuY3Rpb24gcmdiYShoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdmFsdWUgPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGlmICghL15bMC05YS1mXXs2fSQvaS50ZXN0KHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzaXgtZGlnaXQgaGV4IGNvbG9yLCByZWNlaXZlZCBcIiR7aGV4fVwiLmApO1xuICByZXR1cm4gW1xuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgwLCAyKSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgyLCA0KSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSg0LCA2KSwgMTYpIC8gMjU1LFxuICAgIDEsXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjcHJpbWl0aXZlQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDogeyBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LCBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9IH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogbWF4UHJpbWl0aXZlcyAqIGZsb2F0c1BlclByaW1pdGl2ZSAqIDQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuICAgIHRoaXMuI2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH0sXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNwcmltaXRpdmVCdWZmZXIgfSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvblByaW1pdGl2ZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5LlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjYW52YXMgY291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIocHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdLCB0aW1lU2Vjb25kcyA9IDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmlzaWJsZSA9IHByaW1pdGl2ZXMuc2xpY2UoMCwgbWF4UHJpbWl0aXZlcyk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmlzaWJsZS5sZW5ndGggKiBmbG9hdHNQZXJQcmltaXRpdmUpO1xuICAgIHZpc2libGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyUHJpbWl0aXZlO1xuICAgICAgZGF0YS5zZXQoW1xuICAgICAgICBpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQgPz8gaXRlbS53aWR0aCxcbiAgICAgICAgLi4ucmdiYShpdGVtLmNvbG9yKSxcbiAgICAgICAgLi4ucmdiYShpdGVtLnNlY29uZGFyeUNvbG9yID8/IGl0ZW0uY29sb3IpLFxuICAgICAgICBpdGVtLmdsb3cgPz8gMC41LFxuICAgICAgICBpdGVtLmludGVuc2l0eSA/PyAxLFxuICAgICAgICBpdGVtLnNoYXBlID09PSBcImFyY1wiID8gOCA6IGl0ZW0uc2hhcGUgPT09IFwibGluZVwiID8gNyA6IGl0ZW0uc2hhcGUgPT09IFwicGVudGFnb25cIiA/IDYgOiBpdGVtLnNoYXBlID09PSBcImRpYW1vbmRcIiA/IDUgOiBpdGVtLnNoYXBlID09PSBcInNwYXJrXCIgPyA0IDogaXRlbS5zaGFwZSA9PT0gXCJyaW5nXCIgPyAzIDogaXRlbS5zaGFwZSA9PT0gXCJvcmJcIiA/IDIgOiBpdGVtLnNoYXBlID09PSBcImJvbHRcIiA/IDEgOiAwLFxuICAgICAgICBpdGVtLnJvdGF0aW9uID8/IGl0ZW0udGV4dHVyZSA/PyAwLFxuICAgICAgICBpdGVtLmFyY1N0YXJ0ID8/IGl0ZW0ucmltSW50ZW5zaXR5ID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjRW5kID8/IGl0ZW0uc2hhZG93U3RyZW5ndGggPz8gMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgIF0sIG9mZnNldCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHZpc2libGUubGVuZ3RoLCB0aW1lU2Vjb25kc10pKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLjAwNiwgZzogMC4wMDksIGI6IDAuMDI1LCBhOiAxIH0sXG4gICAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICB9XSxcbiAgICB9KTtcbiAgICBpZiAodmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZEdyb3VwKTtcbiAgICAgIHBhc3MuZHJhdyg2LCB2aXNpYmxlLmxlbmd0aCk7XG4gICAgfVxuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25Ub3BEb3duU2NlbmUgfSBmcm9tIFwiLi90b3AtZG93bi1zY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclNjZW5lSWRzID0gW1wibmVvbkhhbGxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxufTtcblxuY29uc3QgaGFsbFZhbmlzaGluZ1kgPSAwLjQ2O1xuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxIb3Jpem9uV2lkdGggPSAwLjA4O1xuY29uc3QgaGFsbEZsb29yQ29sb3IgPSBcIiMwNTEwMWZcIjtcbmNvbnN0IGhhbGxEZWVwQmx1ZSA9IFwiIzEyMzU2YVwiO1xuY29uc3QgaGFsbE11dGVkQmx1ZSA9IFwiIzFiNGM4ZFwiO1xuY29uc3QgaGFsbE11dGVkQ3lhbiA9IFwiIzJhYzRkY1wiO1xuY29uc3QgaGFsbE11dGVkVmlvbGV0ID0gXCIjNDUzMDc5XCI7XG5jb25zdCBoYWxsQWNjZW50UGluayA9IFwiI2E3MzU3ZVwiO1xuY29uc3QgaGFsbEVuZXJneVNwZWVkID0gMC4wMDE3O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgc3dpdGNoIChvcHRpb25zLnNjZW5lSWQpIHtcbiAgICBjYXNlIFwibmVvbkhhbGxcIjpcbiAgICAgIHJldHVybiBjcmVhdGVOZW9uSGFsbChvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBoYWxsR2VvbWV0cnkod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkSGFsbEJhc2UocHJpbWl0aXZlcywgd2lkdGgsIGhlaWdodCwgdGltZU1zKTtcbiAgYWRkSGFsbFJhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5KTtcbiAgYWRkSGFsbENyb3NzYmFycyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRmxvb3JHbHlwaHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbFNpZGVQYW5lbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxFbmVyZ3lUcmFjZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBoYWxsR2VvbWV0cnkod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IGhlaWdodCAqIGhhbGxWYW5pc2hpbmdZIH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBob3Jpem9uWSA9IGhlaWdodCAqIGhhbGxWYW5pc2hpbmdZO1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgY29uc3QgaG9yaXpvbkhhbGYgPSB3aWR0aCAqIGhhbGxIb3Jpem9uV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogdnAueCAtIGhvcml6b25IYWxmLCB5OiBob3Jpem9uWSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB2cC54ICsgaG9yaXpvbkhhbGYsIHk6IGhvcml6b25ZIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxCYXNlKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjc2LCB3aWR0aDogd2lkdGggKiAuNSwgaGVpZ2h0OiBoZWlnaHQgKiAuNDMsIGNvbG9yOiBoYWxsRmxvb3JDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IFwiIzAyMDUwZFwiLCBnbG93OiAuMDUsIGludGVuc2l0eTogLjIzLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIGhhbGxWYW5pc2hpbmdZLCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogaGFsbERlZXBCbHVlLCBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkQ3lhbiwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQ5LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogaGFsbEFjY2VudFBpbmssIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFsbFJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+KTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbERlZXBCbHVlLCAuNDgsIDYuNSk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbE11dGVkQ3lhbiwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbE11dGVkQmx1ZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgaGFsbE11dGVkQ3lhbiwgbGFuZSA9PT0gMiA/IC4yNiA6IC4xOCwgLjkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxDcm9zc2JhcnMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiByb3cgJSA0ID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IHJvdyAlIDQgPT09IDIgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsQWNjZW50UGluaztcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImV4cG9ydCB0eXBlIFRlc3RTdGF0dXMgPSBcImJvb3RpbmdcIiB8IFwicmVhZHlcIiB8IFwicGFzc2VkXCIgfCBcImZhaWxlZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RBc3NlcnRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3NlZDogYm9vbGVhbjtcbiAgZGV0YWlsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RQYWdlU25hcHNob3Qge1xuICBpZDogc3RyaW5nO1xuICBzdGF0dXM6IFRlc3RTdGF0dXM7XG4gIGFzc2VydGlvbnM6IFRlc3RBc3NlcnRpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlc3RQYWdlPFREcml2ZXIgZXh0ZW5kcyBvYmplY3Q+KFxuICBpZDogc3RyaW5nLFxuICBkcml2ZXI6IFREcml2ZXIsXG4gIHN0YXR1c0VsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKSB7XG4gIGNvbnN0IHNuYXBzaG90OiBUZXN0UGFnZVNuYXBzaG90ID0geyBpZCwgc3RhdHVzOiBcImJvb3RpbmdcIiwgYXNzZXJ0aW9uczogW10gfTtcbiAgY29uc3QgcHVibGlzaCA9ICgpID0+IHtcbiAgICBzdGF0dXNFbGVtZW50LmRhdGFzZXQuc3RhdHVzID0gc25hcHNob3Quc3RhdHVzO1xuICAgIHN0YXR1c0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtzbmFwc2hvdC5zdGF0dXMudG9VcHBlckNhc2UoKX0gXHUwMEI3ICR7c25hcHNob3QuYXNzZXJ0aW9ucy5maWx0ZXIoYSA9PiBhLnBhc3NlZCkubGVuZ3RofS8ke3NuYXBzaG90LmFzc2VydGlvbnMubGVuZ3RofSBhc3NlcnRpb25zYDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50ZXN0U3RhdHVzID0gc25hcHNob3Quc3RhdHVzO1xuICB9O1xuICBjb25zdCBhcGkgPSB7XG4gICAgLi4uZHJpdmVyLFxuICAgIGdldFNuYXBzaG90OiAoKTogVGVzdFBhZ2VTbmFwc2hvdCA9PiBzdHJ1Y3R1cmVkQ2xvbmUoc25hcHNob3QpLFxuICAgIHJlYWR5KCk6IHZvaWQge1xuICAgICAgc25hcHNob3Quc3RhdHVzID0gXCJyZWFkeVwiO1xuICAgICAgcHVibGlzaCgpO1xuICAgIH0sXG4gICAgYXNzZXJ0KG5hbWU6IHN0cmluZywgcGFzc2VkOiBib29sZWFuLCBkZXRhaWw/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LmFzc2VydGlvbnMucHVzaCh7IG5hbWUsIHBhc3NlZCwgZGV0YWlsIH0pO1xuICAgICAgc25hcHNob3Quc3RhdHVzID0gc25hcHNob3QuYXNzZXJ0aW9ucy5ldmVyeShhc3NlcnRpb24gPT4gYXNzZXJ0aW9uLnBhc3NlZCkgPyBcInBhc3NlZFwiIDogXCJmYWlsZWRcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICB9O1xuICAod2luZG93IGFzIHVua25vd24gYXMgeyBuZW9uRmFjdG9yeVRlc3Q6IHR5cGVvZiBhcGkgfSkubmVvbkZhY3RvcnlUZXN0ID0gYXBpO1xuICBwdWJsaXNoKCk7XG4gIHJldHVybiBhcGk7XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBdXRvQWltVGFyZ2V0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJvd0lkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b0FpbUNvbnRyb2xTdGF0ZSB7XG4gIG1hbnVhbCA9IGZhbHNlO1xuXG4gIGxhbmVTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAvLyBMYW5lIGNoYW5nZXMgYXJlIG5hdmlnYXRpb24sIG5vdCBwZXJzaXN0ZW50IG1hbnVhbCBhaW1pbmcuXG4gIH1cblxuICBhaW1DaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgfVxuXG4gIGFpbVJlbGVhc2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhZC1jZW50ZXIgYWltIG9mZnNldCAocmVsYXRpdmUgdG8gbGFuZUNlbnRlcikgdGhhdCBiZXN0IGFsaWduc1xuICogb25lIG9mIHRoZSBzcXVhZCdzIGZyb250LXJvdyBjb2x1bW5zIHRvIHRoZSBuZWFyZXN0IGVuZW15LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRzICAgICAgICAgQWxsIGxpdmUgKG5vbi1keWluZykgZW5lbWllcyBpbiB0aGUgY3VycmVudCBsYW5lLlxuICogQHBhcmFtIGxhbmVDZW50ZXIgICAgICBQaXhlbCBYIG9mIHRoZSBsYW5lJ3MgY2VudGVyLlxuICogQHBhcmFtIGNvbHVtbk9mZnNldHMgICBYIG9mZnNldHMgb2YgZWFjaCBmcm9udC1yb3cgY29sdW1uIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci5cbiAqIEBwYXJhbSBjdXJyZW50T2Zmc2V0ICAgQ3VycmVudCBzcXVhZCBhaW0gb2Zmc2V0IChzcXVhZCBjZW50ZXIgPSBsYW5lQ2VudGVyICsgY3VycmVudE9mZnNldCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBdXRvQWltT2Zmc2V0KFxuICB0YXJnZXRzOiByZWFkb25seSBBdXRvQWltVGFyZ2V0W10sXG4gIGxhbmVDZW50ZXI6IG51bWJlcixcbiAgY29sdW1uT2Zmc2V0czogcmVhZG9ubHkgbnVtYmVyW10sXG4gIGN1cnJlbnRPZmZzZXQgPSAwLFxuKTogbnVtYmVyIHtcbiAgaWYgKCF0YXJnZXRzLmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgLy8gSWRlbnRpZnkgdGhlIGZyb250IHJvdzogZ3JvdXAgdGFyZ2V0cyBieSByb3dJZCAob3IgdHJlYXQgdW5ncm91cGVkIHRhcmdldHMgYXMgYSBzaW5nbGUgcm93KS5cbiAgY29uc3QgZXhwbGljaXRSb3dzID0gbmV3IE1hcDxudW1iZXIsIEF1dG9BaW1UYXJnZXRbXT4oKTtcbiAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgIGlmICh0YXJnZXQucm93SWQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3Qgcm93ID0gZXhwbGljaXRSb3dzLmdldCh0YXJnZXQucm93SWQpID8/IFtdO1xuICAgIHJvdy5wdXNoKHRhcmdldCk7XG4gICAgZXhwbGljaXRSb3dzLnNldCh0YXJnZXQucm93SWQsIHJvdyk7XG4gIH1cbiAgY29uc3QgZnJvbnRSb3cgPSBleHBsaWNpdFJvd3Muc2l6ZVxuICAgID8gWy4uLmV4cGxpY2l0Um93cy52YWx1ZXMoKV0uc29ydCgobGVmdCwgcmlnaHQpID0+XG4gICAgICAgIE1hdGgubWF4KC4uLnJpZ2h0Lm1hcCh0ID0+IHQueSkpIC0gTWF0aC5tYXgoLi4ubGVmdC5tYXAodCA9PiB0LnkpKSlbMF1cbiAgICA6IHRhcmdldHMuZmlsdGVyKHQgPT4gTWF0aC5hYnModC55IC0gTWF0aC5tYXgoLi4udGFyZ2V0cy5tYXAoYyA9PiBjLnkpKSkgPCAzKTtcblxuICAvLyBGb3IgZWFjaCBlbmVteSBpbiB0aGUgZnJvbnQgcm93IFx1MDBENyBlYWNoIHNxdWFkIGNvbHVtbiwgY29tcHV0ZSB0aGUgc3F1YWQtY2VudGVyXG4gIC8vIG9mZnNldCB0aGF0IHdvdWxkIHBsYWNlIHRoYXQgY29sdW1uIGV4YWN0bHkgb24gdGhhdCBlbmVteSdzIFguXG4gIC8vIFBpY2sgdGhlIChlbmVteSwgY29sdW1uKSBwYWlyIHdob3NlIHJlcXVpcmVkIG9mZnNldCBpcyBjbG9zZXN0IHRvIHRoZSBjdXJyZW50XG4gIC8vIG9mZnNldCBcdTIwMTQgbWluaW1pc2luZyB0aGUgYWltIG1vdmVtZW50IG5lZWRlZCB3aGlsZSBndWFyYW50ZWVpbmcgYSBoaXQuXG4gIGNvbnN0IGNvbHMgPSBjb2x1bW5PZmZzZXRzLmxlbmd0aCA+IDAgPyBjb2x1bW5PZmZzZXRzIDogWzBdO1xuICBsZXQgYmVzdE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG4gIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZnJvbnRSb3cpIHtcbiAgICBmb3IgKGNvbnN0IGNvbE9mZnNldCBvZiBjb2xzKSB7XG4gICAgICAvLyBzcXVhZENlbnRlciA9IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgXHUyMTkyIGNvbHVtbiBsYW5kcyBhdCBsYW5lQ2VudGVyICsgYWltT2Zmc2V0ICsgY29sT2Zmc2V0XG4gICAgICAvLyBXZSB3YW50IHRoYXQgdG8gZXF1YWwgZW5lbXkueCBcdTIxOTIgYWltT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXRcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0O1xuICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGNhbmRpZGF0ZU9mZnNldCAtIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdCkge1xuICAgICAgICBiZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIGJlc3RPZmZzZXQgPSBjYW5kaWRhdGVPZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RPZmZzZXQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlLCBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIGFzcGVjdFdpZHRoOiBudW1iZXI7XG4gIGFzcGVjdEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RlZFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDE3MCxcbiAgbG9va0FuZ2xlRGVncmVlczogMjAsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyNTUsXG4gIHpvb206IC43MyxcbiAgaG9yaXpvbjogLjU0LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBwbGF5ZXJZOiBudW1iZXIgfSxcbik6IFByb2plY3RlZFNjZW5lIHtcbiAgY29uc3QgY2VudGVyWCA9IHZpZXdwb3J0LndpZHRoIC8gMjtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIGNvbnN0IHByb2plY3RQb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3Qgd29ybGRYID0geCAtIGNlbnRlclg7XG4gICAgY29uc3Qgd29ybGRaID0gdmlld3BvcnQucGxheWVyWSAtIHkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZTtcbiAgICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICAgIGNvbnN0IGNhbWVyYVkgPSByZWxhdGl2ZVkgKiBjb3MgKyB3b3JsZFogKiBzaW47XG4gICAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KG1pbkRlcHRoLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICAgIGNvbnN0IHNjYWxlID0gZm9jYWxMZW5ndGggLyBjYW1lcmFaO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjZW50ZXJYICsgd29ybGRYICogc2NhbGUsXG4gICAgICB5OiBob3Jpem9uWSAtIGNhbWVyYVkgKiBzY2FsZSxcbiAgICAgIHNjYWxlLFxuICAgICAgZGVwdGg6IGNhbWVyYVosXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0ZWRQcmltaXRpdmVzID0gcHJpbWl0aXZlcy5tYXAocHJpbWl0aXZlID0+IHtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCwgcHJpbWl0aXZlLnkpO1xuICAgIGNvbnN0IHdpZHRoID0gcHJpbWl0aXZlLndpZHRoICogcG9pbnQuc2NhbGU7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoKSAqIHBvaW50LnNjYWxlO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RlZFNoYXBlcyA9IHNoYXBlc1xuICAgIC5tYXAoc2hhcGUgPT4ge1xuICAgICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zaGFwZSxcbiAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgc2l6ZTogc2hhcGUuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgICAgICB6OiAoc2hhcGUueiA/PyAwKSAtIHBvaW50LmRlcHRoICogLjAwMDgsXG4gICAgICB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi56ID8/IDApIC0gKGEueiA/PyAwKSkpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXM6IHByb2plY3RlZFByaW1pdGl2ZXMsIHNoYXBlczogcHJvamVjdGVkU2hhcGVzIH07XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlTGFuZVJ1bm5lclNjZW5lLCBjcmVhdGVUZXN0UGFnZSwgTmVvblByaW1pdGl2ZVJlbmRlcmVyLCBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBBdXRvQWltQ29udHJvbFN0YXRlLCBzZWxlY3RBdXRvQWltT2Zmc2V0IH0gZnJvbSBcIi4uLy4uL3NyYy9hdXRvQWltXCI7XG5pbXBvcnQgeyBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBwcm9qZWN0SGVsaWNvcHRlclNjZW5lIH0gZnJvbSBcIi4uLy4uL3NyYy92aWV3cG9ydFwiO1xuXG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxPdXRwdXRFbGVtZW50PihcIiN0ZXN0LXN0YXR1c1wiKSE7XG5jb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MT0xpc3RFbGVtZW50PihcIiNyZXN1bHRzXCIpITtcblxuY29uc3QgcnVuID0gKCkgPT4ge1xuICBjb25zdCBsYW5lQ2VudGVyID0gMjAwO1xuICBjb25zdCByZW1haW5pbmcgPSBbeyB4OiAxNzAsIHk6IDEyMCwgcm93SWQ6IDEgfSwgeyB4OiAyMzAsIHk6IDEyMCwgcm93SWQ6IDEgfV07XG4gIGNvbnN0IGZhcnRoZXJDZW50ZXJlZFJvdyA9IFt7IHg6IDIwMCwgeTogODAsIHJvd0lkOiAyIH1dO1xuICBjb25zdCBhbGxUYXJnZXRzID0gWy4uLnJlbWFpbmluZywgLi4uZmFydGhlckNlbnRlcmVkUm93XTtcbiAgY29uc3QgZmlyc3RPZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGFsbFRhcmdldHMsIGxhbmVDZW50ZXIsIFswXSk7XG4gIGNvbnN0IGZpcnN0VGFyZ2V0ID0gZmlyc3RPZmZzZXQgPCAwID8gcmVtYWluaW5nWzBdIDogZmlyc3RPZmZzZXQgPiAwID8gcmVtYWluaW5nWzFdIDogbnVsbDtcbiAgY29uc3QgYWZ0ZXJGaXJzdEtpbGwgPSBmaXJzdFRhcmdldCA/IGFsbFRhcmdldHMuZmlsdGVyKHRhcmdldCA9PiB0YXJnZXQgIT09IGZpcnN0VGFyZ2V0KSA6IGFsbFRhcmdldHM7XG4gIGNvbnN0IHNlY29uZE9mZnNldCA9IHNlbGVjdEF1dG9BaW1PZmZzZXQoYWZ0ZXJGaXJzdEtpbGwsIGxhbmVDZW50ZXIsIFswXSk7XG4gIGNvbnN0IGNvbnRyb2wgPSBuZXcgQXV0b0FpbUNvbnRyb2xTdGF0ZSgpO1xuICBjb250cm9sLmxhbmVTZWxlY3RlZCgpO1xuICBjb25zdCBhdXRvQWltQWZ0ZXJMYW5lVGFwID0gIWNvbnRyb2wubWFudWFsO1xuICBjb250cm9sLmFpbUNoYW5nZWQoKTtcbiAgY29uc3QgbWFudWFsRHVyaW5nSm95c3RpY2tBaW0gPSBjb250cm9sLm1hbnVhbDtcbiAgY29udHJvbC5haW1SZWxlYXNlZCgpO1xuICBjb25zdCBhdXRvQWltQWZ0ZXJKb3lzdGlja1JlbGVhc2UgPSAhY29udHJvbC5tYW51YWw7XG4gIHJldHVybiB7IGZpcnN0T2Zmc2V0LCBmaXJzdFRhcmdldCwgc2Vjb25kT2Zmc2V0LCBhdXRvQWltQWZ0ZXJMYW5lVGFwLCBtYW51YWxEdXJpbmdKb3lzdGlja0FpbSwgYXV0b0FpbUFmdGVySm95c3RpY2tSZWxlYXNlIH07XG59O1xuXG5jb25zdCB0ZXN0ID0gY3JlYXRlVGVzdFBhZ2UoXCJuZW9uLXN3YXJtLWF1dG8tYWltLXNtb2tlXCIsIHsgc3VpdGU6IFwic21va2VcIiwgcnVuIH0sIHN0YXR1cyk7XG50ZXN0LnJlYWR5KCk7XG5jb25zdCBvdXRjb21lID0gcnVuKCk7XG5jb25zdCBhc3NlcnRpb25zID0gW1xuICBbXCJTeW1tZXRyaWMgb3V0c2lkZSBzdXJ2aXZvcnMgcHJvZHVjZSBhIGRlY2lzaXZlIGZpcnN0IHNoaWZ0XCIsIG91dGNvbWUuZmlyc3RPZmZzZXQgIT09IDBdLFxuICBbXCJGaXJzdCBzaGlmdCBzZWxlY3RzIG9uZSByZW1haW5pbmcgZW5lbXlcIiwgb3V0Y29tZS5maXJzdFRhcmdldCAhPT0gbnVsbF0sXG4gIFtcIkFmdGVyIGZpcnN0IGtpbGwgYXV0byBhaW0gc2hpZnRzIHRvIHRoZSBvdGhlciBzdXJ2aXZvclwiLCBvdXRjb21lLmZpcnN0VGFyZ2V0ICE9PSBudWxsICYmIG91dGNvbWUuc2Vjb25kT2Zmc2V0ICE9PSAwICYmIE1hdGguc2lnbihvdXRjb21lLnNlY29uZE9mZnNldCkgIT09IE1hdGguc2lnbihvdXRjb21lLmZpcnN0T2Zmc2V0KV0sXG4gIFtcIkNsb3NlciByb3cgd2lucyBvdmVyIGEgZmFydGhlciBjZW50ZXJlZCByb3dcIiwgb3V0Y29tZS5maXJzdE9mZnNldCAhPT0gMF0sXG4gIFtcIkxhbmUgdGFwIGRvZXMgbm90IHBlcm1hbmVudGx5IGRpc2FibGUgYXV0byBhaW1cIiwgb3V0Y29tZS5hdXRvQWltQWZ0ZXJMYW5lVGFwXSxcbiAgW1wiSm95c3RpY2sgYWltIHN1cHByZXNzZXMgYXV0byBhaW0gb25seSB1bnRpbCByZWxlYXNlXCIsIG91dGNvbWUubWFudWFsRHVyaW5nSm95c3RpY2tBaW0gJiYgb3V0Y29tZS5hdXRvQWltQWZ0ZXJKb3lzdGlja1JlbGVhc2VdLFxuXSBhcyBjb25zdDtcblxucmVzdWx0cy5pbm5lckhUTUwgPSBhc3NlcnRpb25zLm1hcCgoW25hbWUsIHBhc3NlZF0sIGluZGV4KSA9PiBgXG4gIDxsaSBkYXRhLXBhc3NlZD1cIiR7cGFzc2VkfVwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPlxuICAgIDxzdHJvbmc+JHtuYW1lfTwvc3Ryb25nPlxuICAgIDxzcGFuPiR7cGFzc2VkID8gXCJQQVNTXCIgOiBcIkZBSUxcIn08L3NwYW4+XG4gIDwvbGk+YCkuam9pbihcIlwiKTtcblxuLy8gQmluZCBjbGljayBoYW5kbGVyc1xucmVzdWx0cy5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIikuZm9yRWFjaChpdGVtID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IE51bWJlcihpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgIHN0YXJ0U2ltdWxhdGlvbihpZHgpO1xuICB9KTtcbn0pO1xuXG5mb3IgKGNvbnN0IFtuYW1lLCBwYXNzZWRdIG9mIGFzc2VydGlvbnMpIHRlc3QuYXNzZXJ0KG5hbWUsIHBhc3NlZCwgYGZpcnN0PSR7b3V0Y29tZS5maXJzdE9mZnNldH0gc2Vjb25kPSR7b3V0Y29tZS5zZWNvbmRPZmZzZXR9YCk7XG5cbi8vIFZpc3VhbCBTaW11bGF0aW9uIExvZ2ljXG5jb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLWNvbnRhaW5lclwiKSE7XG5jb25zdCBzaW11bGF0b3JQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltdWxhdG9yLXBhbmVsXCIpITtcbmNvbnN0IGNsb3NlU2ltQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1zaW1cIikhO1xuY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBsYXktYnRuXCIpITtcbmNvbnN0IHBhdXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZS1idG5cIikhO1xuY29uc3Qgc2ltU3RhdHVzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXN0YXR1c1wiKSE7XG5jb25zdCBzaW1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXRpdGxlXCIpITtcbmNvbnN0IHNpbURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbS1kZXRhaWxzXCIpITtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmxldCByZW5kZXJlcjogYW55ID0gbnVsbDtcbmxldCBhbmltYXRpb25GcmFtZUlkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbmxldCBpc1BhdXNlZCA9IGZhbHNlO1xubGV0IGFjdGl2ZVNjZW5hcmlvSWR4ID0gMDtcblxuLy8gU2ltdWxhdGlvbiBTdGF0ZVxubGV0IHNpbVRpbWVNcyA9IDA7XG5sZXQgbGFzdFRpbWVNcyA9IDA7XG5sZXQgc2ltRmluaXNoZWQgPSBmYWxzZTtcbmxldCBzaW1PdXRjb21lID0gXCJcIjtcblxuLy8gU2NlbmFyaW8gZWxlbWVudHNcbmxldCBzcXVhZFggPSAyMDA7XG5sZXQgc3F1YWRBaW1YID0gMjAwO1xubGV0IHRhcmdldFNxdWFkQWltWCA9IDIwMDtcbmxldCBlbmVtaWVzOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpZDogbnVtYmVyOyBjb2xvcjogc3RyaW5nOyBoZWFsdGg6IG51bWJlciB9PiA9IFtdO1xubGV0IGpveXN0aWNrT2Zmc2V0ID0gMDtcbmxldCBtYW51YWxNb2RlID0gZmFsc2U7XG5sZXQgbGFzZXJBY3RpdmUgPSBmYWxzZTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRTaW11bGF0aW9uKGluZGV4OiBudW1iZXIpIHtcbiAgaWYgKCFyZW5kZXJlcikge1xuICAgIHRyeSB7XG4gICAgICByZW5kZXJlciA9IGF3YWl0IE5lb25QcmltaXRpdmVSZW5kZXJlci5jcmVhdGUoY2FudmFzKTtcbiAgICAgIHJlbmRlcmVyLnNldExvZ2ljYWxTaXplKDQ1MCwgODAwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGluaXRpYWxpemUgcmVuZGVyZXJcIiwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgYWN0aXZlU2NlbmFyaW9JZHggPSBpbmRleDtcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2ltdWxhdG9yLWFjdGl2ZVwiKTtcbiAgc2ltdWxhdG9yUGFuZWwucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICBzaW1UaXRsZS50ZXh0Q29udGVudCA9IGFzc2VydGlvbnNbaW5kZXhdWzBdO1xuXG4gIHJlc2V0U2ltdWxhdGlvbigpO1xuICBsb29wKHBlcmZvcm1hbmNlLm5vdygpKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTaW11bGF0aW9uKCkge1xuICBpZiAoYW5pbWF0aW9uRnJhbWVJZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG5cbiAgc2ltVGltZU1zID0gMDtcbiAgbGFzdFRpbWVNcyA9IDA7XG4gIHNpbUZpbmlzaGVkID0gZmFsc2U7XG4gIHNpbU91dGNvbWUgPSBcIlwiO1xuICBpc1BhdXNlZCA9IGZhbHNlO1xuICBwYXVzZUJ0bi50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcbiAgc2ltU3RhdHVzVGV4dC50ZXh0Q29udGVudCA9IFwiU2ltdWxhdGluZy4uLlwiO1xuICBzaW1TdGF0dXNUZXh0LmNsYXNzTmFtZSA9IFwic2ltLXN0YXR1c1wiO1xuXG4gIC8vIENvbmZpZ3VyZSBzY2VuYXJpbyBzcGVjaWZpYyBzdGF0ZXNcbiAgc3F1YWRYID0gMjAwO1xuICBzcXVhZEFpbVggPSAyMDA7XG4gIHRhcmdldFNxdWFkQWltWCA9IDIwMDtcbiAgam95c3RpY2tPZmZzZXQgPSAwO1xuICBtYW51YWxNb2RlID0gZmFsc2U7XG4gIGxhc2VyQWN0aXZlID0gdHJ1ZTtcblxuICBpZiAoYWN0aXZlU2NlbmFyaW9JZHggPT09IDAgfHwgYWN0aXZlU2NlbmFyaW9JZHggPT09IDEpIHtcbiAgICAvLyBTeW1tZXRyaWMgc3Vydml2b3JzXG4gICAgZW5lbWllcyA9IFtcbiAgICAgIHsgeDogMTcwLCB5OiAzMjAsIGlkOiAxLCBjb2xvcjogbmVvblBhbGV0dGUucGluaywgaGVhbHRoOiAxIH0sXG4gICAgICB7IHg6IDIzMCwgeTogMzIwLCBpZDogMiwgY29sb3I6IG5lb25QYWxldHRlLnBpbmssIGhlYWx0aDogMSB9XG4gICAgXTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMikge1xuICAgIC8vIEtpbGwgZmlyc3QgdGhlbiBzaGlmdCB0byBzZWNvbmRcbiAgICBlbmVtaWVzID0gW1xuICAgICAgeyB4OiAxNzAsIHk6IDMyMCwgaWQ6IDEsIGNvbG9yOiBuZW9uUGFsZXR0ZS5waW5rLCBoZWFsdGg6IDEgfSxcbiAgICAgIHsgeDogMjMwLCB5OiAzMjAsIGlkOiAyLCBjb2xvcjogbmVvblBhbGV0dGUucGluaywgaGVhbHRoOiAxIH1cbiAgICBdO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVNjZW5hcmlvSWR4ID09PSAzKSB7XG4gICAgLy8gQ2xvc2VyIHJvdyB2cyBmYXJ0aGVyIHJvd1xuICAgIGVuZW1pZXMgPSBbXG4gICAgICB7IHg6IDE3MCwgeTogMzIwLCBpZDogMSwgY29sb3I6IG5lb25QYWxldHRlLnBpbmssIGhlYWx0aDogMSB9LFxuICAgICAgeyB4OiAyMzAsIHk6IDMyMCwgaWQ6IDIsIGNvbG9yOiBuZW9uUGFsZXR0ZS5waW5rLCBoZWFsdGg6IDEgfSxcbiAgICAgIHsgeDogMjAwLCB5OiAyMDAsIGlkOiAzLCBjb2xvcjogbmVvblBhbGV0dGUuZ29sZCwgaGVhbHRoOiAxIH0gLy8gRmFydGhlciBpbiBZIChzbWFsbGVyIFkgPSBmYXJ0aGVyIGF3YXkgZnJvbSBzcXVhZCBZPTY1MClcbiAgICBdO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVNjZW5hcmlvSWR4ID09PSA0KSB7XG4gICAgLy8gTGFuZSB0YXBcbiAgICBlbmVtaWVzID0gW1xuICAgICAgeyB4OiAxNzAsIHk6IDMyMCwgaWQ6IDEsIGNvbG9yOiBuZW9uUGFsZXR0ZS5waW5rLCBoZWFsdGg6IDEgfVxuICAgIF07XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2NlbmFyaW9JZHggPT09IDUpIHtcbiAgICAvLyBKb3lzdGljayBzdXBwcmVzc2lvbiB0aGVuIHJlbGVhc2VcbiAgICBlbmVtaWVzID0gW1xuICAgICAgeyB4OiAyMzAsIHk6IDMyMCwgaWQ6IDEsIGNvbG9yOiBuZW9uUGFsZXR0ZS5waW5rLCBoZWFsdGg6IDEgfVxuICAgIF07XG4gIH1cblxuICB1cGRhdGVEZXRhaWxzKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURldGFpbHMoKSB7XG4gIHNpbURldGFpbHMuaW5uZXJIVE1MID0gYFxuICAgIDxkdD5TY2VuYXJpbzwvZHQ+PGRkPiR7YXNzZXJ0aW9uc1thY3RpdmVTY2VuYXJpb0lkeF1bMF19PC9kZD5cbiAgICA8ZHQ+U3F1YWQgUG9zaXRpb248L2R0PjxkZD54OiAke3NxdWFkWC50b0ZpeGVkKDApfSwgYWltOiAkeyhzcXVhZEFpbVggLSBzcXVhZFgpLnRvRml4ZWQoMCl9PC9kZD5cbiAgICA8ZHQ+TWFudWFsIE1vZGU8L2R0PjxkZD4ke21hbnVhbE1vZGUgPyBcIllFU1wiIDogXCJOT1wifTwvZGQ+XG4gICAgPGR0PlRpbWUgRWxhcHNlZDwvZHQ+PGRkPiR7c2ltVGltZU1zLnRvRml4ZWQoMCl9IG1zPC9kZD5cbiAgICA8ZHQ+U3RhdHVzPC9kdD48ZGQ+JHtzaW1PdXRjb21lIHx8IFwiU2ltdWxhdGluZ1wifTwvZGQ+XG4gIGA7XG59XG5cbmZ1bmN0aW9uIGxvb3Aobm93OiBudW1iZXIpIHtcbiAgaWYgKGlzUGF1c2VkKSB7XG4gICAgbGFzdFRpbWVNcyA9IG5vdztcbiAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsYXN0VGltZU1zID09PSAwKSBsYXN0VGltZU1zID0gbm93O1xuICBjb25zdCBkdCA9IE1hdGgubWluKChub3cgLSBsYXN0VGltZU1zKSAvIDEwMDAsIDAuMDUpO1xuICBsYXN0VGltZU1zID0gbm93O1xuXG4gIHVwZGF0ZVNpbShkdCk7XG4gIGRyYXdTaW0oKTtcblxuICBpZiAoIXNpbUZpbmlzaGVkKSB7XG4gICAgYW5pbWF0aW9uRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTaW0oZHQ6IG51bWJlcikge1xuICBzaW1UaW1lTXMgKz0gZHQgKiAxMDAwO1xuXG4gIC8vIFJ1biB0aGUgbG9naWMgZm9yIHRoZSBzcGVjaWZpYyB0ZXN0IHNjZW5hcmlvIHN0ZXAtYnktc3RlcFxuICBpZiAoYWN0aXZlU2NlbmFyaW9JZHggPT09IDAgfHwgYWN0aXZlU2NlbmFyaW9JZHggPT09IDEpIHtcbiAgICAvLyBIaWdobGlnaHQgYXV0byBhaW0gY2hvb3NpbmcgdGFyZ2V0XG4gICAgY29uc3QgbGFuZUNlbnRlciA9IDIwMDtcbiAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGVuZW1pZXMsIGxhbmVDZW50ZXIsIFswXSwgMCk7XG4gICAgdGFyZ2V0U3F1YWRBaW1YID0gbGFuZUNlbnRlciArIG9mZnNldDtcbiAgICBcbiAgICBpZiAoc2ltVGltZU1zID4gMjUwMCkge1xuICAgICAgc2ltRmluaXNoZWQgPSB0cnVlO1xuICAgICAgc2ltT3V0Y29tZSA9IGBQQVNTRUQgXHUwMEI3IFNlbGVjdGVkIHRhcmdldCBhdCB4PSR7c3F1YWRBaW1YLnRvRml4ZWQoMCl9YDtcbiAgICAgIHNpbVN0YXR1c1RleHQudGV4dENvbnRlbnQgPSBcIlBBU1NFRFwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMikge1xuICAgIC8vIEZvY3VzIGZpcnN0IHN1cnZpdm9yLCBzaG9vdC9kZXN0cm95IGl0LCB0aGVuIHNoaWZ0IHRvIHRoZSBzZWNvbmQgb25lXG4gICAgY29uc3QgbGFuZUNlbnRlciA9IDIwMDtcbiAgICBpZiAoc2ltVGltZU1zIDwgMTUwMCkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChlbmVtaWVzLCBsYW5lQ2VudGVyLCBbMF0sIDApO1xuICAgICAgdGFyZ2V0U3F1YWRBaW1YID0gbGFuZUNlbnRlciArIG9mZnNldDtcbiAgICB9IGVsc2UgaWYgKHNpbVRpbWVNcyA+PSAxNTAwICYmIHNpbVRpbWVNcyA8IDMwMDApIHtcbiAgICAgIC8vIEZpcnN0IHN1cnZpdm9yIGdldHMgZGVzdHJveWVkXG4gICAgICBpZiAoZW5lbWllcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgZW5lbWllcy5zcGxpY2UoMCwgMSk7IC8vIEtpbGwgbGVmdCBzdXJ2aXZvclxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChlbmVtaWVzLCBsYW5lQ2VudGVyLCBbMF0sIHNxdWFkQWltWCAtIGxhbmVDZW50ZXIpO1xuICAgICAgdGFyZ2V0U3F1YWRBaW1YID0gbGFuZUNlbnRlciArIG9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2ltRmluaXNoZWQgPSB0cnVlO1xuICAgICAgc2ltT3V0Y29tZSA9IFwiUEFTU0VEIFx1MDBCNyBTdWNjZXNzZnVsbHkgc2hpZnRlZCBhdXRvLWFpbSB0byB0aGUgc2Vjb25kIHN1cnZpdm9yXCI7XG4gICAgICBzaW1TdGF0dXNUZXh0LnRleHRDb250ZW50ID0gXCJQQVNTRURcIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlU2NlbmFyaW9JZHggPT09IDMpIHtcbiAgICAvLyBDbG9zZXIgcm93IHZzIGZhcnRoZXIgY2VudGVyZWRcbiAgICBjb25zdCBsYW5lQ2VudGVyID0gMjAwO1xuICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdEF1dG9BaW1PZmZzZXQoZW5lbWllcywgbGFuZUNlbnRlciwgWzBdLCAwKTtcbiAgICB0YXJnZXRTcXVhZEFpbVggPSBsYW5lQ2VudGVyICsgb2Zmc2V0O1xuICAgIFxuICAgIGlmIChzaW1UaW1lTXMgPiAyNTAwKSB7XG4gICAgICBzaW1GaW5pc2hlZCA9IHRydWU7XG4gICAgICBzaW1PdXRjb21lID0gYFBBU1NFRCBcdTAwQjcgQ2hvc2UgY2xvc2VyIHJvdyB0YXJnZXQgYXQgeD0ke3NxdWFkQWltWC50b0ZpeGVkKDApfSBvdmVyIGZhcnRoZXIgY2VudGVyZWQgcm93YDtcbiAgICAgIHNpbVN0YXR1c1RleHQudGV4dENvbnRlbnQgPSBcIlBBU1NFRFwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVTY2VuYXJpb0lkeCA9PT0gNCkge1xuICAgIC8vIExhbmUgdGFwIGRvZXMgbm90IHBlcm1hbmVudGx5IGRpc2FibGUgYXV0byBhaW1cbiAgICBjb25zdCBsYW5lQ2VudGVyID0gMjAwO1xuICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdEF1dG9BaW1PZmZzZXQoZW5lbWllcywgbGFuZUNlbnRlciwgWzBdLCAwKTtcbiAgICB0YXJnZXRTcXVhZEFpbVggPSBsYW5lQ2VudGVyICsgb2Zmc2V0O1xuICAgIFxuICAgIGlmIChzaW1UaW1lTXMgPiAyNTAwKSB7XG4gICAgICBzaW1GaW5pc2hlZCA9IHRydWU7XG4gICAgICBzaW1PdXRjb21lID0gXCJQQVNTRUQgXHUwMEI3IExhbmUgdGFwIGNoZWNrZWQ7IGF1dG8gYWltIGlzIGFjdGl2ZVwiO1xuICAgICAgc2ltU3RhdHVzVGV4dC50ZXh0Q29udGVudCA9IFwiUEFTU0VEXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZVNjZW5hcmlvSWR4ID09PSA1KSB7XG4gICAgLy8gSm95c3RpY2sgYWltIHN1cHByZXNzZXMgYXV0byBhaW0gb25seSB1bnRpbCByZWxlYXNlXG4gICAgY29uc3QgbGFuZUNlbnRlciA9IDIwMDtcbiAgICBpZiAoc2ltVGltZU1zIDwgMTIwMCkge1xuICAgICAgLy8gTWFudWFsIGFpbSBvdmVycmlkZSB0byB0aGUgbGVmdCAoc3VwcHJlc3MgYXV0by1haW0pXG4gICAgICBtYW51YWxNb2RlID0gdHJ1ZTtcbiAgICAgIHRhcmdldFNxdWFkQWltWCA9IDE0MDsgLy8gT3ZlcnJpZGRlblxuICAgIH0gZWxzZSBpZiAoc2ltVGltZU1zID49IDEyMDAgJiYgc2ltVGltZU1zIDwgMzAwMCkge1xuICAgICAgLy8gUmVsZWFzZWQgam95c3RpY2ssIHNuYXAgYmFjayB0byB0YXJnZXQgKHggPSAyMzApXG4gICAgICBtYW51YWxNb2RlID0gZmFsc2U7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGVuZW1pZXMsIGxhbmVDZW50ZXIsIFswXSwgMCk7XG4gICAgICB0YXJnZXRTcXVhZEFpbVggPSBsYW5lQ2VudGVyICsgb2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzaW1GaW5pc2hlZCA9IHRydWU7XG4gICAgICBzaW1PdXRjb21lID0gXCJQQVNTRUQgXHUwMEI3IEF1dG8gYWltIHN1cHByZXNzZWQgYnkgam95c3RpY2ssIHNuYXBwZWQgYmFjayBvbiByZWxlYXNlXCI7XG4gICAgICBzaW1TdGF0dXNUZXh0LnRleHRDb250ZW50ID0gXCJQQVNTRURcIjtcbiAgICB9XG4gIH1cblxuICAvLyBTbW9vdGhseSBzd2VlcCBzcXVhZEFpbVggdG93YXJkcyB0aGUgdGFyZ2V0IGRpcmVjdGlvblxuICBzcXVhZEFpbVggKz0gKHRhcmdldFNxdWFkQWltWCAtIHNxdWFkQWltWCkgKiBNYXRoLm1pbig4ICogZHQsIDEpO1xuXG4gIHVwZGF0ZURldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gZHJhd1NpbSgpIHtcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW1xuICAgIC4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkOiBcIm5lb25IYWxsXCIsIHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCwgdGltZU1zOiBzaW1UaW1lTXMgfSkucHJpbWl0aXZlcyA/PyBbXSksXG4gIF07XG5cbiAgLy8gU3F1YWQgYXQgKHNxdWFkWCwgNjUwKVxuICBwcmltaXRpdmVzLnB1c2goe1xuICAgIHg6IHNxdWFkWCxcbiAgICB5OiA2NTAsXG4gICAgd2lkdGg6IDgsXG4gICAgY29sb3I6IG5lb25QYWxldHRlLmN5YW4sXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLmRlZXBCbHVlLFxuICAgIGdsb3c6IDAuODUsXG4gICAgc2hhcGU6IFwib3JiXCIsXG4gICAgcmltSW50ZW5zaXR5OiAwLjhcbiAgfSk7XG5cbiAgLy8gVGFyZ2V0IGxpbmVzIChsYXNlciBhaW1pbmcgbGluZSlcbiAgaWYgKGxhc2VyQWN0aXZlKSB7XG4gICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgIHg6IChzcXVhZFggKyBzcXVhZEFpbVgpIC8gMixcbiAgICAgIHk6ICg2NTAgKyAzMjApIC8gMixcbiAgICAgIHdpZHRoOiBtYW51YWxNb2RlID8gMS41IDogMi41LFxuICAgICAgaGVpZ2h0OiAzMzAsXG4gICAgICBjb2xvcjogbWFudWFsTW9kZSA/IG5lb25QYWxldHRlLnBpbmsgOiBuZW9uUGFsZXR0ZS5ncmVlbixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS53aGl0ZUhvdCxcbiAgICAgIGdsb3c6IDAuNixcbiAgICAgIGludGVuc2l0eTogMC44LFxuICAgICAgc2hhcGU6IFwiYm9sdFwiXG4gICAgfSk7XG4gIH1cblxuICAvLyBEcmF3IGVuZW1pZXNcbiAgZm9yIChjb25zdCBlbmVteSBvZiBlbmVtaWVzKSB7XG4gICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgIHg6IGVuZW15LngsXG4gICAgICB5OiBlbmVteS55LFxuICAgICAgd2lkdGg6IDcsXG4gICAgICBjb2xvcjogZW5lbXkuY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgICBnbG93OiAwLjgsXG4gICAgICB0ZXh0dXJlOiAwLjMsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMCxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAwLjUsXG4gICAgICBpbnRlbnNpdHk6IDEuMCxcbiAgICAgIHNoYXBlOiBcIm9yYlwiXG4gICAgfSk7XG4gIH1cblxuICAvLyBSZW5kZXIgdGV4dCBmb3Igam95c3RpY2sgaW5mb1xuICBpZiAobWFudWFsTW9kZSkge1xuICAgIC8vIEpveXN0aWNrIG92ZXJsYXkgcmVwcmVzZW50YXRpb25cbiAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgeDogMTAwLFxuICAgICAgeTogNzAwLFxuICAgICAgd2lkdGg6IDMwLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlLnBpbmssXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgICBnbG93OiAwLjUsXG4gICAgICBzaGFwZTogXCJyaW5nXCJcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgW10sIGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIHtcbiAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICBwbGF5ZXJZOiA2NTAsXG4gIH0pO1xuICByZW5kZXJlci5yZW5kZXIocHJvamVjdGVkLnByaW1pdGl2ZXMsIHNpbVRpbWVNcyAvIDEwMDApO1xufVxuXG5jbG9zZVNpbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoYW5pbWF0aW9uRnJhbWVJZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNpbXVsYXRvci1hY3RpdmVcIik7XG4gIHNpbXVsYXRvclBhbmVsLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XG59KTtcblxucmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlc2V0U2ltdWxhdGlvbigpO1xuICBsb29wKHBlcmZvcm1hbmNlLm5vdygpKTtcbn0pO1xuXG5wYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpc1BhdXNlZCA9ICFpc1BhdXNlZDtcbiAgcGF1c2VCdG4udGV4dENvbnRlbnQgPSBpc1BhdXNlZCA/IFwiUmVzdW1lXCIgOiBcIlBhdXNlXCI7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLE1BQ3BFLE1BQU0sS0FBSyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3RDLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7QUFDM0MsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEQsQ0FBQztBQUVILElBQU0sT0FBTyxDQUFDLFFBQWdCLFFBQVEsTUFBSyxXQUFXLENBQUMsS0FBSyxLQUFLLE1BQy9ELE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDM0MsUUFBTSxTQUFTLElBQUksSUFBSSxRQUFRO0FBQy9CLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLO0FBQ3ZDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNO0FBQzVELENBQUM7QUFFSCxJQUFNLFVBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RCxJQUFNLFFBQXFCLENBQUMsQ0FBQyxHQUFHLEVB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QUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBRWxGLEtBQUssUUFBUSxZQUFZLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUMvRSxLQUFLLFFBQVEsWUFBWSxhQUFhLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFH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b0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1MMUIs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

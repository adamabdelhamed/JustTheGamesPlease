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
  make("player", "sword-arc-katana", "Sword Arc Katana", [[-0.16, -1], [0.16, -1], [0.22, 0.28], [0.48, 0.62], [0.18, 0.52], [0.1, 1], [-0.1, 1], [-0.18, 0.52], [-0.48, 0.62], [-0.22, 0.28]], "pitch", [[[-0.055, -0.72], [0.055, -0.72], [0.055, 0.18], [-0.055, 0.18]]]),
  make("player", "sword-cleaver-wide", "Sword Cleaver Wide", [[-0.28, -1], [0.28, -1], [0.44, -0.76], [0.34, 0.34], [0.72, 0.58], [0.22, 0.55], [0.16, 1], [-0.16, 1], [-0.22, 0.55], [-0.72, 0.58], [-0.34, 0.34], [-0.44, -0.76]], "roll", [[[-0.1, -0.68], [0.1, -0.68], [0.08, 0.18], [-0.08, 0.18]]]),
  make("player", "sword-needle-sabre", "Sword Needle Sabre", [[0, -1], [0.08, -0.82], [0.11, 0.5], [0.32, 0.72], [0.08, 0.64], [0.05, 1], [-0.05, 1], [-0.08, 0.64], [-0.32, 0.72], [-0.11, 0.5], [-0.08, -0.82]], "pitch"),
  make("player", "sword-guarded-blade", "Sword Guarded Blade", [[-0.12, -1], [0.12, -1], [0.16, 0.36], [0.62, 0.36], [0.62, 0.54], [0.14, 0.56], [0.1, 1], [-0.1, 1], [-0.14, 0.56], [-0.62, 0.54], [-0.62, 0.36], [-0.16, 0.36]], "yaw", [[[-0.045, -0.72], [0.045, -0.72], [0.045, 0.22], [-0.045, 0.22]]]),
  make("player", "sword-prism-greatblade", "Sword Prism Greatblade", [[0, -1], [0.34, -0.74], [0.3, 0.28], [0.56, 0.52], [0.2, 0.48], [0.12, 1], [-0.12, 1], [-0.2, 0.48], [-0.56, 0.52], [-0.3, 0.28], [-0.34, -0.74]], "roll", [[[-0.08, -0.48], [0.08, -0.48], [0.08, 0.16], [-0.08, 0.16]]]),
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
var getNeonShape = (id) => neonShapeCatalog.find((shape) => shape.id === id);

// projects/NeonFactory/src/geometric-shape-renderer.ts
var neonShapeEnergyInternalTuning = {
  branchCycleRate: 2.63,
  branchChanceScale: 0.44,
  activeDurationMin: 0.1,
  activeDurationMax: 0.66,
  hazeDurationMin: 0.2,
  hazeDurationMax: 1,
  branchLengthMin: 0.06,
  branchLengthMax: 0.39,
  branchSegmentsMin: 2,
  branchSegmentsMax: 9,
  branchTurnMinDegrees: 10,
  branchTurnMaxDegrees: 94,
  branchNormalJitterDegrees: 20,
  branchWidthScale: 0.74,
  hazeWidthScale: 0.37,
  hazeOpacity: 1,
  hazeDrift: 0
};
function setNeonShapeEnergyInternalTuning(tuning) {
  Object.assign(neonShapeEnergyInternalTuning, tuning);
}
var floatsPerVertex = 14;
var shader = (
  /* wgsl */
  `
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
}`
);
var hex = (value) => {
  const raw = value.replace("#", "");
  return [0, 2, 4].map((index) => Number.parseInt(raw.slice(index, index + 2), 16) / 255);
};
var sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
var cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
var normalize = (v) => {
  const length = Math.hypot(...v) || 1;
  return [v[0] / length, v[1] / length, v[2] / length];
};
var rotate = ([x, y, z], rx, ry, rz) => {
  let a = y * Math.cos(rx) - z * Math.sin(rx), b = y * Math.sin(rx) + z * Math.cos(rx);
  y = a;
  z = b;
  a = x * Math.cos(ry) + z * Math.sin(ry);
  b = -x * Math.sin(ry) + z * Math.cos(ry);
  x = a;
  z = b;
  return [x * Math.cos(rz) - y * Math.sin(rz), x * Math.sin(rz) + y * Math.cos(rz), z];
};
function mesh(instance) {
  const { shape } = instance;
  const depth = shape.depth ?? 0.14;
  const color = hex(instance.color ?? shape.color);
  const scale = instance.scale ?? 1;
  const scaleX = scale * (instance.scaleX ?? 1);
  const scaleY = scale * (instance.scaleY ?? 1);
  const rx = instance.rotationX ?? 0, ry = instance.rotationY ?? 0, rz = instance.rotationZ ?? 0;
  const entranceProgress = instance.entranceProgress ?? 1;
  const entranceEase = entranceProgress * entranceProgress * (3 - 2 * entranceProgress);
  const entranceOffset = (point, z, index) => {
    if (entranceProgress >= 1) return [0, 0, 0];
    const seed = Math.sin(index * 91.17 + point[0] * 37.2 + point[1] * 53.7 + z * 29.1) * 43758.5453;
    const random2 = seed - Math.floor(seed);
    const angle = random2 * Math.PI * 2;
    const radius = (instance.entranceMagnitude ?? instance.explodeMagnitude ?? 0.55) * (1 - entranceEase) * (0.35 + random2 * 0.75);
    return [Math.cos(angle) * radius, Math.sin(angle) * radius, (random2 - 0.5) * radius * 0.55];
  };
  const move = (point, z, index = 0) => {
    const p = rotate([point[0] * scaleX, -point[1] * scaleY, z * scale], rx, ry, rz);
    const e = entranceOffset(point, z, index);
    return [p[0] + (instance.x ?? 0) + e[0], p[1] + (instance.y ?? 0) + e[1], p[2] + (instance.z ?? 0) + e[2]];
  };
  const output = [];
  const add = (a, b, c, normal) => {
    const n = normal ?? normalize(cross(sub(b, a), sub(c, a)));
    const effect = [
      instance.energyIntensity ?? 1,
      instance.energyCoverage ?? 0.32,
      instance.energySpeed ?? 1,
      instance.energyBleed ?? 0.35
    ];
    [a, b, c].forEach((p) => output.push({ p, n, color, glow: (instance.glow ?? 1) * (instance.opacity ?? 1) * entranceEase, effect }));
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
function edgeMesh(instance) {
  const { shape } = instance;
  const depth = shape.depth ?? 0.14;
  const color = hex(instance.color ?? shape.color);
  const scale = instance.scale ?? 1;
  const scaleX = scale * (instance.scaleX ?? 1);
  const scaleY = scale * (instance.scaleY ?? 1);
  const rx = instance.rotationX ?? 0, ry = instance.rotationY ?? 0, rz = instance.rotationZ ?? 0;
  const entranceProgress = instance.entranceProgress ?? 1;
  const entranceEase = entranceProgress * entranceProgress * (3 - 2 * entranceProgress);
  const move = (point, z) => {
    const p = rotate([point[0] * scaleX, -point[1] * scaleY, z * scale], rx, ry, rz);
    return [p[0] + (instance.x ?? 0), p[1] + (instance.y ?? 0), p[2] + (instance.z ?? 0)];
  };
  const explode = (a, b, index) => {
    const progress = Math.max(instance.explodeProgress ?? 0, 1 - entranceEase);
    const fallProgress = Math.max(0, Math.min(1, instance.fallProgress ?? 0));
    if (!progress && !fallProgress) return [a, b];
    const mx = (a[0] + b[0]) / 2 - (instance.x ?? 0), my = (a[1] + b[1]) / 2 - (instance.y ?? 0);
    const length = Math.hypot(mx, my) || 1;
    const magnitude = instance.explodeMagnitude ?? 0.55;
    const speed = magnitude * (0.45 + (Math.sin(index * 91.17) * 0.5 + 0.5) * 0.55);
    const drift = progress + fallProgress * 0.35;
    const dx = mx / length * drift * speed * 0.35;
    const dy = my / length * progress * speed + progress * progress * 0.18 - fallProgress * fallProgress * 0.55;
    const angle = progress * (index % 2 ? 1 : -1) * 2.4 + fallProgress * (index % 2 ? 1 : -1) * 1.35;
    const transform = (p) => {
      const x = p[0] - (instance.x ?? 0), y = p[1] - (instance.y ?? 0);
      return [x * Math.cos(angle) - y * Math.sin(angle) + (instance.x ?? 0) + dx, x * Math.sin(angle) + y * Math.cos(angle) + (instance.y ?? 0) + dy, p[2]];
    };
    return [transform(a), transform(b)];
  };
  const output = [];
  let distance = 0;
  const effect = [
    instance.energyIntensity ?? 1,
    instance.energyCoverage ?? 0.32,
    instance.energySpeed ?? 1,
    instance.energyBleed ?? 0.35
  ];
  const addLine = (a, b, phase, widthScale = 1, opacity = 1) => {
    [a, b] = explode(a, b, Math.floor(distance * 100) + Math.floor(phase * 10));
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const length = Math.hypot(dx, dy) || 1e-3;
    const width = (instance.lineThickness ?? 1) * 0.018 * widthScale;
    const ox = -dy / length * width, oy = dx / length * width;
    const a0 = [a[0] - ox, a[1] - oy, a[2]], a1 = [a[0] + ox, a[1] + oy, a[2]];
    const b0 = [b[0] - ox, b[1] - oy, b[2]], b1 = [b[0] + ox, b[1] + oy, b[2]];
    const start = distance * 2.4, end = (distance + length) * 2.4;
    const push = (p, along, across) => output.push({ p, n: [along, across, phase], color, glow: (instance.glow ?? 1) * opacity * (instance.opacity ?? 1) * entranceEase * (1 + Math.sin((instance.explodeProgress ?? 0) * Math.PI) * (instance.explodeMagnitude ?? 0.55) * 2.2) * (1 - (instance.explodeProgress ?? 0) * 0.7), effect });
    push(a0, start, -1);
    push(a1, start, 1);
    push(b0, end, -1);
    push(b0, end, -1);
    push(a1, start, 1);
    push(b1, end, 1);
    distance += length;
  };
  const addLoop = (points, z, phase) => points.forEach((point, index) => addLine(move(point, z), move(points[(index + 1) % points.length], z), phase + index * 0.73));
  addLoop(shape.points, depth / 2, 0.3);
  addLoop(shape.points, -depth / 2, 2.1);
  shape.holes?.forEach((hole, index) => {
    addLoop(hole, depth / 2 + 2e-3, 3.7 + index);
    addLoop(hole, -depth / 2 - 2e-3, 5.2 + index);
  });
  shape.points.forEach((point, index) => addLine(move(point, -depth / 2), move(point, depth / 2), 6.1 + index));
  const tuning = neonShapeEnergyInternalTuning;
  const time = performance.now() / 1e3 * (instance.energySpeed ?? 1);
  const branchStrength = (instance.energyIntensity ?? 1) * (instance.energyCoverage ?? 0.32);
  const random2 = (seed) => {
    const value = Math.sin(seed * 12.9898 + shape.points.length * 78.233) * 43758.5453;
    return value - Math.floor(value);
  };
  const rotated = (x, y, radians) => [
    x * Math.cos(radians) - y * Math.sin(radians),
    x * Math.sin(radians) + y * Math.cos(radians)
  ];
  shape.points.forEach((point, index) => {
    const cycle = Math.floor(time * tuning.branchCycleRate + index * 0.61);
    const age = time * tuning.branchCycleRate + index * 0.61 - cycle;
    const seed = cycle * 37.1 + index * 11.7;
    const activeDuration = tuning.activeDurationMin + random2(seed + 1) * Math.max(0, tuning.activeDurationMax - tuning.activeDurationMin);
    const hazeDuration = Math.min(1, activeDuration + tuning.hazeDurationMin + random2(seed + 2) * Math.max(0, tuning.hazeDurationMax - tuning.hazeDurationMin));
    const branchActive = age < activeDuration;
    const hazeActive = age < hazeDuration;
    if (!branchActive && !hazeActive || random2(seed + 3) > Math.min(0.9, branchStrength * tuning.branchChanceScale)) return;
    const next = shape.points[(index + 1) % shape.points.length];
    const t = 0.16 + random2(seed + 4) * 0.68;
    const base = [point[0] + (next[0] - point[0]) * t, point[1] + (next[1] - point[1]) * t];
    const tx = next[0] - point[0], ty = next[1] - point[1], tl = Math.hypot(tx, ty) || 1;
    const direction = random2(seed + 5) > 0.5 ? 1 : -1;
    const perpendicular = [-ty / tl * direction, tx / tl * direction];
    const firstJitter = random2(seed + 6) * tuning.branchNormalJitterDegrees * Math.PI / 180 * (random2(seed + 7) > 0.5 ? 1 : -1);
    let heading = rotated(perpendicular[0], perpendicular[1], firstJitter);
    const segmentCount = Math.max(1, Math.round(tuning.branchSegmentsMin + random2(seed + 8) * Math.max(0, tuning.branchSegmentsMax - tuning.branchSegmentsMin)));
    const points = [base];
    for (let segment = 0; segment < segmentCount; segment++) {
      const length = tuning.branchLengthMin + random2(seed + 10 + segment) * Math.max(0, tuning.branchLengthMax - tuning.branchLengthMin);
      const previous = points[points.length - 1];
      points.push([previous[0] + heading[0] * length, previous[1] + heading[1] * length]);
      const offset = (tuning.branchTurnMinDegrees + random2(seed + 20 + segment) * Math.max(0, tuning.branchTurnMaxDegrees - tuning.branchTurnMinDegrees)) * Math.PI / 180;
      heading = rotated(heading[0], heading[1], offset * (random2(seed + 30 + segment) > 0.5 ? 1 : -1));
    }
    if (hazeActive) {
      const fade = 1 - Math.max(0, age - activeDuration) / Math.max(1e-3, hazeDuration - activeDuration);
      const drift = Math.max(0, age - activeDuration) * tuning.hazeDrift;
      points.slice(0, -1).forEach((start, segment) => {
        const end = points[segment + 1];
        const hazeStart = [start[0] + perpendicular[0] * drift, start[1] + perpendicular[1] * drift];
        const hazeEnd = [end[0] + perpendicular[0] * drift, end[1] + perpendicular[1] * drift];
        addLine(move(hazeStart, depth / 2 + 2e-3), move(hazeEnd, depth / 2 + 2e-3), 31 + seed + segment, tuning.hazeWidthScale, fade * tuning.hazeOpacity);
      });
    }
    if (branchActive) {
      points.slice(0, -1).forEach((start, segment) => {
        addLine(move(start, depth / 2 + 6e-3), move(points[segment + 1], depth / 2 + 6e-3), 11 + seed + segment, tuning.branchWidthScale);
      });
    }
  });
  return output;
}
var NeonGeometricShapeRenderer = class _NeonGeometricShapeRenderer {
  canvas;
  device;
  #context;
  #pipeline;
  #linePipeline;
  #sceneBuffer;
  #depth = null;
  #labelLayer;
  #logicalSize = null;
  constructor(canvas, device, context, format) {
    this.canvas = canvas;
    this.device = device;
    this.#context = context;
    const parent = canvas.parentElement;
    if (parent && getComputedStyle(parent).position === "static") parent.style.position = "relative";
    this.#labelLayer = document.createElement("div");
    this.#labelLayer.className = "neon-shape-label-layer";
    Object.assign(this.#labelLayer.style, { position: "absolute", inset: "0", pointerEvents: "none", overflow: "hidden" });
    parent?.append(this.#labelLayer);
    const module = device.createShaderModule({ code: shader, label: "NeonFactory extruded shape shader" });
    this.#pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module,
        entryPoint: "vertexMain",
        buffers: [{ arrayStride: floatsPerVertex * 4, attributes: [
          { shaderLocation: 0, offset: 0, format: "float32x3" },
          { shaderLocation: 1, offset: 12, format: "float32x3" },
          { shaderLocation: 2, offset: 24, format: "float32x3" },
          { shaderLocation: 3, offset: 36, format: "float32" },
          { shaderLocation: 4, offset: 40, format: "float32x4" }
        ] }]
      },
      fragment: { module, entryPoint: "fragmentMain", targets: [{ format, blend: {
        color: { srcFactor: "src-alpha", dstFactor: "one" },
        alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha" }
      } }] },
      primitive: { topology: "triangle-list", cullMode: "back" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: false, depthCompare: "less-equal" }
    });
    this.#linePipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module,
        entryPoint: "vertexMain",
        buffers: [{ arrayStride: floatsPerVertex * 4, attributes: [
          { shaderLocation: 0, offset: 0, format: "float32x3" },
          { shaderLocation: 1, offset: 12, format: "float32x3" },
          { shaderLocation: 2, offset: 24, format: "float32x3" },
          { shaderLocation: 3, offset: 36, format: "float32" },
          { shaderLocation: 4, offset: 40, format: "float32x4" }
        ] }]
      },
      fragment: {
        module,
        entryPoint: "lineFragment",
        targets: [{ format, blend: {
          color: { srcFactor: "src-alpha", dstFactor: "one" },
          alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha" }
        } }]
      },
      primitive: { topology: "triangle-list" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: true, depthCompare: "less-equal" }
    });
    this.#sceneBuffer = device.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
  }
  static async create(canvas) {
    if (!navigator.gpu) throw new Error("WebGPU is required for the NeonFactory shape suite.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonGeometricShapeRenderer(canvas, device, context, format);
  }
  setLogicalSize(width, height) {
    this.#logicalSize = { width, height };
    this.canvas.width = width;
    this.canvas.height = height;
    return this;
  }
  render(instances, preserveColor = false, targetView) {
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
    this.device.queue.writeBuffer(this.#sceneBuffer, 0, new Float32Array([this.canvas.width / this.canvas.height, 5, performance.now() / 1e3, 0]));
    const bindGroup = this.device.createBindGroup({ layout: this.#pipeline.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: this.#sceneBuffer } }] });
    const lineBindGroup = this.device.createBindGroup({ layout: this.#linePipeline.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: this.#sceneBuffer } }] });
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{ view: targetView ?? this.#context.getCurrentTexture().createView(), clearValue: { r: 0, g: 0, b: 0, a: 0 }, loadOp: preserveColor ? "load" : "clear", storeOp: "store" }],
      depthStencilAttachment: { view: this.#depth.createView(), depthClearValue: 1, depthLoadOp: "clear", depthStoreOp: "store" }
    });
    if (vertices.length) {
      pass.setPipeline(this.#pipeline);
      pass.setBindGroup(0, bindGroup);
      pass.setVertexBuffer(0, vertexBuffer);
      pass.draw(vertices.length);
    }
    if (edges.length) {
      pass.setPipeline(this.#linePipeline);
      pass.setBindGroup(0, lineBindGroup);
      pass.setVertexBuffer(0, edgeBuffer);
      pass.draw(edges.length);
    }
    pass.end();
    this.device.queue.submit([encoder.finish()]);
    this.#renderLabels(instances);
    this.device.queue.onSubmittedWorkDone().then(() => {
      vertexBuffer.destroy();
      edgeBuffer.destroy();
    });
  }
  destroy(destroyDevice = true) {
    this.#labelLayer.remove();
    this.#depth?.destroy();
    this.#sceneBuffer.destroy();
    if (destroyDevice) this.device.destroy();
  }
  #renderLabels(instances) {
    Object.assign(this.#labelLayer.style, {
      left: `${this.canvas.offsetLeft}px`,
      top: `${this.canvas.offsetTop}px`,
      right: "auto",
      bottom: "auto",
      width: `${this.canvas.clientWidth}px`,
      height: `${this.canvas.clientHeight}px`
    });
    this.#labelLayer.replaceChildren(...instances.flatMap((instance) => {
      if (!instance.label?.text || (instance.opacity ?? 1) <= 0) return [];
      const element = document.createElement("span");
      const scale = instance.scale ?? 1;
      const x = 50 + (instance.x ?? 0) * 40 / (this.canvas.width / this.canvas.height);
      const y = 50 - (instance.y ?? 0) * 40;
      const shapeRadius = scale * this.canvas.clientHeight * 0.2;
      const offset = shapeRadius + (instance.label.offset ?? 8) + (instance.label.fontSize ?? 18) * 0.5;
      const position = instance.label.position ?? "above";
      let tx = 0, ty = 0;
      if (position === "above") ty = -offset;
      if (position === "below") ty = offset;
      if (position === "left") tx = -offset;
      if (position === "right") tx = offset;
      element.textContent = instance.label.text;
      Object.assign(element.style, {
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px))`,
        color: instance.color ?? instance.shape.color,
        fontFamily: instance.label.fontFamily ?? "Segoe UI, sans-serif",
        fontSize: `${instance.label.fontSize ?? 18}px`,
        fontWeight: String(instance.label.fontWeight ?? 600),
        textShadow: `0 0 5px ${instance.color ?? instance.shape.color},0 0 14px ${instance.color ?? instance.shape.color}`,
        whiteSpace: "nowrap",
        opacity: String(instance.opacity ?? 1)
      });
      return [element];
    }));
  }
  #resize() {
    if (this.#logicalSize) {
      const { width: width2, height: height2 } = this.#logicalSize;
      if (this.canvas.width !== width2 || this.canvas.height !== height2 || !this.#depth) {
        this.canvas.width = width2;
        this.canvas.height = height2;
        this.#depth?.destroy();
        this.#depth = this.device.createTexture({ size: [width2, height2], format: "depth24plus", usage: GPUTextureUsage.RENDER_ATTACHMENT });
      }
      return;
    }
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.#depth && this.canvas.width === width && this.canvas.height === height) return;
    this.canvas.width = width;
    this.canvas.height = height;
    this.#depth?.destroy();
    this.#depth = this.device.createTexture({ size: [width, height], format: "depth24plus", usage: GPUTextureUsage.RENDER_ATTACHMENT });
  }
};

// projects/NeonFactory/src/geometric-shape-actor.ts
var NeonShapeDisposal = /* @__PURE__ */ ((NeonShapeDisposal2) => {
  NeonShapeDisposal2["FadeOut"] = "fadeOut";
  NeonShapeDisposal2["Disappear"] = "disappear";
  NeonShapeDisposal2["Explode"] = "explode";
  NeonShapeDisposal2["Burn"] = "burn";
  return NeonShapeDisposal2;
})(NeonShapeDisposal || {});
var NeonShapeActor = class {
  shape;
  x;
  y;
  z;
  velocity;
  scale;
  label;
  color;
  disposal;
  explodeMagnitude;
  entranceDuration;
  entranceMagnitude;
  rotationX = 0;
  rotationY = 0;
  rotationZ = 0;
  disposed = false;
  #disposalProgress = 0;
  #entranceProgress = 1;
  #impactVelocity = { x: 0, y: 0 };
  #impactRotation = { x: 0, y: 0 };
  constructor(options) {
    this.shape = options.shape;
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.z = options.z ?? 0;
    this.velocity = { x: options.velocity?.x ?? 0, y: options.velocity?.y ?? 0 };
    this.scale = options.scale ?? 1;
    this.label = options.label;
    this.color = options.color;
    this.disposal = options.disposal ?? "fadeOut" /* FadeOut */;
    this.explodeMagnitude = options.explodeMagnitude ?? 0.55;
    this.entranceDuration = options.entranceDuration ?? 0.45;
    this.entranceMagnitude = options.entranceMagnitude ?? 0.55;
  }
  moveTo(x, y, z = this.z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  setVelocity(x, y) {
    this.velocity.x = x;
    this.velocity.y = y;
    return this;
  }
  impact({ direction, magnitude }) {
    const length = Math.hypot(direction.x, direction.y) || 1;
    const x = direction.x / length, y = direction.y / length;
    this.#impactVelocity.x += x * magnitude * 0.34;
    this.#impactVelocity.y += y * magnitude * 0.34;
    this.#impactRotation.x += y * magnitude * 0.9;
    this.#impactRotation.y -= x * magnitude * 0.9;
    return this;
  }
  dispose(mode = this.disposal) {
    this.disposal = mode;
    this.#disposalProgress = mode === "disappear" /* Disappear */ ? 1 : 1e-4;
    if (mode === "disappear" /* Disappear */) this.disposed = true;
    return this;
  }
  enter(duration = this.entranceDuration, magnitude = this.entranceMagnitude) {
    this.entranceDuration = Math.max(1e-3, duration);
    this.entranceMagnitude = magnitude;
    this.#entranceProgress = 0;
    return this;
  }
  regenerate() {
    this.disposed = false;
    this.#disposalProgress = 0;
    this.#entranceProgress = 1;
    return this;
  }
  update(deltaSeconds) {
    this.x += (this.velocity.x + this.#impactVelocity.x) * deltaSeconds;
    this.y += (this.velocity.y + this.#impactVelocity.y) * deltaSeconds;
    this.rotationX += this.#impactRotation.x * deltaSeconds;
    this.rotationY += this.#impactRotation.y * deltaSeconds;
    const damping = Math.exp(-7 * deltaSeconds);
    this.#impactVelocity.x *= damping;
    this.#impactVelocity.y *= damping;
    this.#impactRotation.x *= damping;
    this.#impactRotation.y *= damping;
    if (this.#disposalProgress > 0 && !this.disposed) {
      const duration = this.disposal === "explode" /* Explode */ ? 0.85 : this.disposal === "burn" /* Burn */ ? 2.85 : 0.55;
      this.#disposalProgress = Math.min(1, this.#disposalProgress + deltaSeconds / duration);
      if (this.#disposalProgress >= 1) this.disposed = true;
    }
    if (this.#entranceProgress < 1) this.#entranceProgress = Math.min(1, this.#entranceProgress + deltaSeconds / this.entranceDuration);
    return this;
  }
  renderInstance(overrides = {}) {
    const fade = this.disposal === "fadeOut" /* FadeOut */ ? 1 - this.#disposalProgress : 1;
    const instance = {
      shape: this.shape,
      x: this.x,
      y: this.y,
      z: this.z,
      scale: this.scale,
      rotationX: this.rotationX,
      rotationY: this.rotationY,
      rotationZ: this.rotationZ,
      label: this.label,
      color: this.color,
      opacity: this.disposed ? 0 : fade,
      entranceProgress: this.#entranceProgress,
      entranceMagnitude: this.entranceMagnitude,
      explodeProgress: this.disposal === "explode" /* Explode */ ? this.#disposalProgress : 0,
      explodeMagnitude: this.explodeMagnitude,
      ...overrides
    };
    return this.disposal === "burn" /* Burn */ ? this.burnRenderInstance(instance) : instance;
  }
  burnRenderInstance(instance) {
    const progress = Math.max(0, Math.min(1, this.#disposalProgress));
    const heatEnd = 0.08;
    const hotEnd = 0.43;
    const ashEnd = 0.69;
    const fallT = Math.max(0, (progress - ashEnd) / Math.max(1e-3, 1 - ashEnd));
    const coolT = Math.max(0, Math.min(1, (progress - hotEnd) / Math.max(1e-3, ashEnd - hotEnd)));
    const color = mixHex("#ff4a14", "#2b2d2c", coolT);
    const heatT = Math.min(1, progress / heatEnd);
    const glow = (1 - coolT) * (1.4 + heatT * 2.2);
    return {
      ...instance,
      color,
      glow,
      energyIntensity: 0,
      energyCoverage: 0,
      energySpeed: 0,
      energyBleed: 0,
      opacity: (instance.opacity ?? 1) * (1 - fallT * 0.95),
      explodeProgress: 0,
      explodeMagnitude: Math.max(0.18, this.explodeMagnitude * 0.45),
      fallProgress: fallT
    };
  }
};
var hexChannel = (value, index) => {
  const raw = value.replace("#", "");
  return Number.parseInt(raw.slice(index, index + 2), 16);
};
var mixHex = (from, to, progress) => {
  const t = Math.max(0, Math.min(1, progress));
  const channels = [0, 2, 4].map((index) => {
    const value = Math.round(hexChannel(from, index) + (hexChannel(to, index) - hexChannel(from, index)) * t);
    return value.toString(16).padStart(2, "0");
  });
  return `#${channels.join("")}`;
};

// projects/NeonFactory/src/primitive-renderer.ts
var maxPrimitives = 1024;
var floatsPerPrimitive = 20;
var shader2 = (
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
  if (item.texture != 0) {
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
function rgba(hex3) {
  const value = hex3.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) throw new Error(`Expected six-digit hex color, received "${hex3}".`);
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
        clearValue: { r: 6e-3, g: 9e-3, b: 0.025, a: 0 },
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

// projects/NeonFactory/src/cloud-burst.ts
var maxClouds = 96;
var floatsPerCloud = 24;
var defaults = {
  color: "#63e8ff",
  coreColor: "#ffffff",
  x: 0,
  y: 0,
  rotation: 0,
  size: 0.25,
  detail: 5,
  turbulence: 0.75,
  glow: 4,
  coreIntensity: 1.4,
  rimIntensity: 0.85,
  opacity: 1,
  dissipationTime: 0.7,
  dissipationAction: "expandFade",
  driftX: 0,
  driftY: 0,
  seed: 0,
  age: 0
};
var hex2 = (value) => {
  const raw = value.replace("#", "").padEnd(6, "0").slice(0, 6);
  return [0, 2, 4].map((index) => Number.parseInt(raw.slice(index, index + 2), 16) / 255);
};
var deriveNeonCloudCoreColor = (color) => {
  const [r, g, b] = hex2(color);
  const lift = (channel) => Math.round((channel + (1 - channel) * 0.78) * 255).toString(16).padStart(2, "0");
  return `#${lift(r)}${lift(g)}${lift(b)}`;
};
var actionValue = (action) => action === "fade" ? 0 : action === "expandFade" ? 1 : action === "implode" ? 2 : 3;
var shader3 = (
  /* wgsl */
  `
struct Cloud {
  pos: vec2f,
  velocity: vec2f,
  age: f32,
  life: f32,
  size: f32,
  rotation: f32,
  seed: f32,
  action: f32,
  color: vec4f,
  core: vec4f,
  tuning: vec4f,
}
struct Globals {
  aspect: f32,
  time: f32,
  count: f32,
  background: f32,
}
@group(0) @binding(0) var<uniform> globals: Globals;
@group(0) @binding(1) var<storage, read> clouds: array<Cloud>;

fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453123);
}
fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2f(1,0)), u.x), mix(hash(i + vec2f(0,1)), hash(i + vec2f(1,1)), u.x), u.y);
}
fn fbm(p: vec2f, octaves: f32) -> f32 {
  var v = 0.0;
  var a = 0.5;
  var q = p;
  for (var i = 0; i < 7; i++) {
    if (f32(i) >= octaves) { break; }
    v += a * noise(q);
    q = q * 2.03 + vec2f(6.9, 3.7);
    a *= 0.52;
  }
  return v;
}
fn rotate(p: vec2f, a: f32) -> vec2f {
  let c = cos(a);
  let s = sin(a);
  return vec2f(p.x * c - p.y * s, p.x * s + p.y * c);
}
struct Out {
  @builtin(position) position: vec4f,
  @location(0) local: vec2f,
  @location(1) @interpolate(flat) instance: u32,
}
@vertex fn vertexMain(@builtin(vertex_index) vi: u32, @builtin(instance_index) instance: u32) -> Out {
  let corners = array<vec2f, 6>(
    vec2f(-1,-1), vec2f(1,-1), vec2f(-1,1),
    vec2f(-1,1), vec2f(1,-1), vec2f(1,1)
  );
  let c = clouds[instance];
  let lifeT = clamp(c.age / max(c.life, .001), 0.0, 1.0);
  let actionScale = select(1.0 + lifeT * 1.85, 1.0 - lifeT * .62, c.action > 1.5 && c.action < 2.5);
  let radius = max(.001, c.size * actionScale) * 2.35;
  var center = c.pos + c.velocity * c.age;
  center.x *= globals.aspect;
  let local = corners[vi];
  let p = center + local * radius;
  var o: Out;
  o.position = vec4f(p.x / globals.aspect, p.y, 0, 1);
  o.local = local * 2.35;
  o.instance = instance;
  return o;
}
@fragment fn fragmentMain(input: Out) -> @location(0) vec4f {
  let c = clouds[input.instance];
  let lifeT = clamp(c.age / max(c.life, .001), 0.0, 1.0);
  let local = rotate(input.local, -c.rotation - lifeT * .45);
  let r = length(local);
  if (r >= 2.35) { discard; }
  let detail = clamp(c.tuning.x, 1.0, 7.0);
  let turbulence = c.tuning.y;
  let wispy = fbm(local * (1.7 + detail * .16) + vec2f(c.seed, c.seed * .71) + globals.time * vec2f(.16, .09) * turbulence, min(detail, 4.0));
  let core = exp(-r * r * (1.2 + c.tuning.z * .22));
  let rim = exp(-abs(r - .72) * 3.6);
  let spark = pow(max(0.0, sin(wispy * 16.0 + c.seed + globals.time * 9.0)), 14.0) * select(0.0, 1.0, c.action > 2.5);
  let dissipate = pow(1.0 - lifeT, select(1.45, 2.35, c.action > 2.5));
  let rimDissipate = pow(1.0 - lifeT, select(2.7, 3.8, c.action > 2.5));
  let edgeFade = 1.0 - smoothstep(1.75, 2.35, r);
  let density = (core * .72 + rim * .24 * rimDissipate + wispy * .22 + spark * .55) * dissipate * c.tuning.w * edgeFade;
  let hotCore = c.core.rgb * core * c.tuning.z * (1.0 + spark);
  let neonRim = c.color.rgb * (density * (.75 + c.color.a * .08) + rim * rimDissipate * c.color.a * .08);
  let glow = neonRim + hotCore * density;
  return vec4f(glow, clamp(density * .85 + spark * .25, 0.0, 1.0));
}`
);
var NeonCloudBurstActor = class {
  settings;
  age = 0;
  constructor(settings = {}) {
    this.settings = { ...defaults, ...settings, seed: settings.seed ?? Math.random() * 1e3 };
  }
  update(dt) {
    this.age += dt;
    return this.age < this.settings.dissipationTime;
  }
  renderInstance() {
    return { ...this.settings, seed: this.settings.seed };
  }
};
var NeonCloudBurstRenderer = class _NeonCloudBurstRenderer {
  canvas;
  device;
  #context;
  #pipeline;
  #buffer;
  #globals;
  #bind;
  #logicalSize = null;
  constructor(canvas, device, context, format) {
    this.canvas = canvas;
    this.device = device;
    this.#context = context;
    const module = device.createShaderModule({ code: shader3, label: "NeonFactory procedural cloud volume shader" });
    this.#pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: { module, entryPoint: "vertexMain" },
      fragment: { module, entryPoint: "fragmentMain", targets: [{ format, blend: {
        color: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" },
        alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha", operation: "add" }
      } }] },
      primitive: { topology: "triangle-list" }
    });
    this.#globals = device.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.#buffer = device.createBuffer({ size: maxClouds * floatsPerCloud * 4, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST });
    this.#bind = device.createBindGroup({ layout: this.#pipeline.getBindGroupLayout(0), entries: [
      { binding: 0, resource: { buffer: this.#globals } },
      { binding: 1, resource: { buffer: this.#buffer } }
    ] });
  }
  static async create(canvas) {
    if (!navigator.gpu) throw new Error("WebGPU is required for the NeonFactory cloud suite.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonCloudBurstRenderer(canvas, device, context, format);
  }
  setLogicalSize(width, height) {
    this.#logicalSize = { width, height };
    this.canvas.width = width;
    this.canvas.height = height;
    return this;
  }
  render(clouds, timeSeconds = performance.now() / 1e3, preserveColor = false, targetView) {
    this.#resize();
    const packed = new Float32Array(maxClouds * floatsPerCloud);
    clouds.slice(0, maxClouds).forEach((cloud, index) => {
      const c = { ...defaults, ...cloud };
      const color = hex2(c.color), core = hex2(c.coreColor);
      const offset = index * floatsPerCloud;
      packed.set([c.x, c.y, c.driftX, c.driftY, c.age ?? 0, c.dissipationTime, c.size, c.rotation, c.seed, actionValue(c.dissipationAction), 0, 0], offset);
      packed.set([color[0], color[1], color[2], c.glow, core[0], core[1], core[2], c.coreIntensity, c.detail, c.turbulence, c.rimIntensity, c.opacity], offset + 12);
    });
    this.device.queue.writeBuffer(this.#buffer, 0, packed);
    this.device.queue.writeBuffer(this.#globals, 0, new Float32Array([this.canvas.width / this.canvas.height, timeSeconds, Math.min(clouds.length, maxClouds), 0]));
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({ colorAttachments: [{
      view: targetView ?? this.#context.getCurrentTexture().createView(),
      clearValue: { r: 0, g: 0, b: 0, a: 0 },
      loadOp: preserveColor ? "load" : "clear",
      storeOp: "store"
    }] });
    pass.setPipeline(this.#pipeline);
    pass.setBindGroup(0, this.#bind);
    pass.draw(6, Math.min(clouds.length, maxClouds));
    pass.end();
    this.device.queue.submit([encoder.finish()]);
  }
  mapTopDownCloud(cloud, logicalWidth, logicalHeight) {
    const aspect = logicalWidth / logicalHeight;
    return {
      ...cloud,
      x: (cloud.x / logicalWidth - 0.5) * aspect * 2.5,
      y: (0.5 - cloud.y / logicalHeight) * 2.5,
      size: cloud.size / logicalHeight * 2.5,
      driftX: (cloud.driftX ?? 0) / logicalWidth * aspect * 2.5,
      driftY: -(cloud.driftY ?? 0) / logicalHeight * 2.5
    };
  }
  destroy(destroyDevice = true) {
    this.#buffer.destroy();
    this.#globals.destroy();
    if (destroyDevice) this.device.destroy();
  }
  #resize() {
    if (this.#logicalSize) {
      if (this.canvas.width !== this.#logicalSize.width) this.canvas.width = this.#logicalSize.width;
      if (this.canvas.height !== this.#logicalSize.height) this.canvas.height = this.#logicalSize.height;
      return;
    }
    const ratio = Math.min(devicePixelRatio || 1, 2);
    this.canvas.width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    this.canvas.height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
  }
};

// projects/NeonFactory/src/top-down-scene.ts
var NeonTopDownSceneRenderer = class _NeonTopDownSceneRenderer {
  canvas;
  device;
  #primitives;
  #clouds;
  #shapes;
  #width;
  #height;
  #context;
  constructor(canvas, device, context, format, width, height) {
    this.canvas = canvas;
    this.device = device;
    this.#context = context;
    this.#width = width;
    this.#height = height;
    this.#primitives = new NeonPrimitiveRenderer(canvas, device, context, format).setLogicalSize(width, height);
    this.#clouds = new NeonCloudBurstRenderer(canvas, device, context, format).setLogicalSize(width, height);
    this.#shapes = new NeonGeometricShapeRenderer(canvas, device, context, format).setLogicalSize(width, height);
  }
  static async create(canvas, logicalWidth, logicalHeight) {
    if (!navigator.gpu) throw new Error("WebGPU is required for NeonFactory top-down scenes.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonTopDownSceneRenderer(canvas, device, context, format, logicalWidth, logicalHeight);
  }
  render(scene, timeSeconds = performance.now() / 1e3) {
    const target = this.#context.getCurrentTexture().createView();
    this.#primitives.render([...scene.primitives ?? []], timeSeconds, false, target);
    const clouds = scene.clouds ?? [];
    const aspect = this.#width / this.#height;
    const shapes = scene.shapes ?? [];
    if (shapes.length) this.#shapes.render(shapes.map((shape) => ({
      ...shape,
      x: (shape.x / this.#width - 0.5) * aspect * 2.5,
      y: (0.5 - shape.y / this.#height) * 2.5,
      scale: (shape.height ?? shape.size) / this.#height * 2.5,
      scaleX: (shape.scaleX ?? 1) * ((shape.width ?? shape.size) / (shape.height ?? shape.size))
    })), true, target);
    if (clouds.length) this.#clouds.render(clouds.map((cloud) => this.#clouds.mapTopDownCloud(cloud, this.#width, this.#height)), timeSeconds, true);
  }
  destroy() {
    this.#shapes.destroy(false);
    this.#clouds.destroy(false);
    this.device.destroy();
  }
};

// projects/NeonFactory/src/lightning.ts
var defaults2 = {
  chainRange: 520,
  maxJumps: 24,
  branchFanout: 1,
  maxDepth: 2,
  branchDecay: 0.68,
  jaggedness: 45,
  segments: 10,
  movement: 0.55,
  boltWidth: 0.1,
  haloWidth: 8,
  intensity: 3.07,
  glow: 6.2,
  durationMs: 529,
  branchSparks: 0.11,
  sparkVelocity: 150,
  sparkVelocitySpread: 0.55,
  sparkEasePower: 0.44,
  sparkDimPower: 0.6,
  sparkLength: 6,
  sparkWidth: 0.7,
  impactSparks: 26,
  impactSparkVelocity: 154,
  impactSparkRadius: 10,
  color: "#55e7ff",
  secondaryColor: "#ffffff"
};
var random = (seed) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};
var pointKey = (point, index) => String(point.id ?? index);
function resolveNeonLightningChain(origin, targets, tuning = {}) {
  const resolved = { ...defaults2, ...tuning };
  const available = targets.map((target, index) => ({ target, key: pointKey(target, index) }));
  const used = /* @__PURE__ */ new Set();
  const segments = [];
  let frontier = [{ point: origin, depth: 0 }];
  let order = 0;
  while (frontier.length && order < resolved.maxJumps) {
    const nextFrontier = [];
    for (const branch of frontier) {
      if (order >= resolved.maxJumps || branch.depth >= resolved.maxDepth) break;
      const fanout = branch.depth === 0 ? Math.max(1, resolved.branchFanout) : 1;
      const candidates = available.filter((candidate) => !used.has(candidate.key)).map((candidate) => ({
        ...candidate,
        distance: Math.hypot(candidate.target.x - branch.point.x, candidate.target.y - branch.point.y)
      })).filter((candidate) => candidate.distance <= resolved.chainRange).sort((a, b) => a.distance - b.distance).slice(0, fanout);
      for (const candidate of candidates) {
        if (order >= resolved.maxJumps) break;
        used.add(candidate.key);
        segments.push({ from: branch.point, to: candidate.target, depth: branch.depth, order });
        nextFrontier.push({ point: candidate.target, depth: branch.depth + 1 });
        order++;
      }
    }
    frontier = nextFrontier;
  }
  return segments;
}
function neonLightningPrimitives(segments, ageMs, tuning = {}) {
  const resolved = { ...defaults2, ...tuning };
  const life = 1 - Math.min(1, Math.max(0, ageMs / Math.max(1, resolved.durationMs)));
  if (life <= 0) return [];
  const primitives = [];
  for (const segment of segments) {
    const dx = segment.to.x - segment.from.x;
    const dy = segment.to.y - segment.from.y;
    const length = Math.hypot(dx, dy) || 1;
    const nx = -dy / length;
    const ny = dx / length;
    const depthPower = resolved.branchDecay ** segment.depth;
    const segmentCount = Math.max(2, Math.round(resolved.segments));
    const points = [segment.from];
    for (let index = 1; index < segmentCount; index++) {
      const t = index / segmentCount;
      const taper = Math.sin(t * Math.PI);
      const seed = segment.order * 97 + segment.depth * 29 + index * 11 + Math.floor(ageMs * resolved.movement * 0.04);
      const offset = (random(seed) - 0.5) * resolved.jaggedness * taper * depthPower;
      points.push({
        x: segment.from.x + dx * t + nx * offset,
        y: segment.from.y + dy * t + ny * offset
      });
    }
    points.push(segment.to);
    for (let index = 0; index < points.length - 1; index++) {
      const a = points[index];
      const b = points[index + 1];
      const sx = b.x - a.x;
      const sy = b.y - a.y;
      const alpha = life * depthPower * (1 - index / points.length * 0.2);
      const rotation = Math.atan2(-sx, sy);
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: resolved.haloWidth * depthPower,
        height: Math.hypot(sx, sy) / 2,
        color: resolved.color,
        secondaryColor: resolved.secondaryColor,
        glow: resolved.glow * alpha,
        intensity: resolved.intensity * 0.42 * alpha,
        shape: "line",
        rotation
      });
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(1, resolved.boltWidth * depthPower),
        height: Math.hypot(sx, sy) / 2,
        color: resolved.secondaryColor,
        secondaryColor: resolved.color,
        glow: resolved.glow * 1.2 * alpha,
        intensity: resolved.intensity * 1.15 * alpha,
        shape: "line",
        rotation
      });
      if (resolved.branchSparks > 0) {
        const sparkCount = Math.floor(resolved.branchSparks * 5);
        const fractionalSpark = resolved.branchSparks * 5 - sparkCount;
        const totalSparks = sparkCount + (random(segment.order * 131 + index * 17) < fractionalSpark ? 1 : 0);
        for (let spark = 0; spark < totalSparks; spark++) {
          const seed = segment.order * 311 + index * 47 + spark * 19;
          const side = random(seed) > 0.5 ? 1 : -1;
          const spread = (random(seed + 1) - 0.5) * resolved.sparkVelocitySpread;
          const angle = Math.atan2(sy, sx) + side * (Math.PI / 2 + spread);
          const travel = Math.pow(1 - life, resolved.sparkEasePower) * resolved.sparkVelocity * (0.45 + random(seed + 2) * 0.75);
          const fade = alpha * Math.pow(life, resolved.sparkDimPower);
          primitives.push({
            x: (a.x + b.x) / 2 + Math.cos(angle) * travel,
            y: (a.y + b.y) / 2 + Math.sin(angle) * travel,
            width: Math.max(0.7, resolved.sparkWidth * depthPower),
            height: resolved.sparkLength * depthPower * (0.75 + random(seed + 3) * 0.8),
            color: resolved.secondaryColor,
            secondaryColor: resolved.color,
            glow: resolved.glow * fade,
            intensity: resolved.intensity * fade,
            shape: "line",
            rotation: Math.atan2(-Math.cos(angle), Math.sin(angle))
          });
        }
      }
    }
    const impactCount = Math.floor(resolved.impactSparks);
    for (let spark = 0; spark < impactCount; spark++) {
      const seed = segment.order * 401 + spark * 23;
      const angle = Math.PI * 2 * (spark / Math.max(1, impactCount)) + (random(seed) - 0.5) * 0.55;
      const travel = resolved.impactSparkRadius + Math.pow(1 - life, resolved.sparkEasePower) * resolved.impactSparkVelocity * (0.55 + random(seed + 1) * 0.7);
      const fade = life * depthPower * Math.pow(life, resolved.sparkDimPower * 0.65);
      primitives.push({
        x: segment.to.x + Math.cos(angle) * travel,
        y: segment.to.y + Math.sin(angle) * travel,
        width: Math.max(1, resolved.sparkWidth * 1.2 * depthPower),
        height: resolved.sparkLength * 1.55 * depthPower,
        color: resolved.secondaryColor,
        secondaryColor: resolved.color,
        glow: resolved.glow * 1.35 * fade,
        intensity: resolved.intensity * 1.35 * fade,
        shape: "line",
        rotation: Math.atan2(-Math.cos(angle), Math.sin(angle))
      });
    }
  }
  return primitives;
}
var defaultNeonLightningTuning = defaults2;

// projects/NeonFactory/src/lane-runner-scenes.ts
var laneRunnerSceneIds = ["neonHall", "aurora", "crystalForge", "voidGarden", "solarArray"];
var sceneNames = {
  neonHall: "Neon Hall",
  aurora: "Aurora",
  crystalForge: "Crystal Forge",
  voidGarden: "Void Garden",
  solarArray: "Solar Array"
};
var hallBottomWidth = 0.92;
var hallFloorColor = "#05101f";
var hallDeepBlue = "#12356a";
var hallMutedBlue = "#1b4c8d";
var hallMutedCyan = "#2ac4dc";
var hallMutedViolet = "#453079";
var hallAccentPink = "#a7357e";
var hallEnergySpeed = 17e-4;
var standardLaneRunnerPalette = {
  floor: hallFloorColor,
  boundary: hallDeepBlue,
  lane: hallMutedBlue,
  centerLane: hallMutedViolet,
  accent: hallAccentPink,
  laneHighlight: hallMutedCyan
};
var auroraLaneRunnerPalette = {
  floor: "#03110f",
  boundary: "#178c92",
  lane: "#17d7b3",
  centerLane: "#8f56ff",
  accent: "#ff4fc7",
  laneHighlight: "#b9ff6a"
};
var crystalForgeLaneRunnerPalette = {
  floor: "#071018",
  boundary: "#26d7ff",
  lane: "#63f1ff",
  centerLane: "#ff5fd8",
  accent: "#ffb84d",
  laneHighlight: "#f4fbff"
};
var voidGardenLaneRunnerPalette = {
  floor: "#080818",
  boundary: "#6f53ff",
  lane: "#35e8b6",
  centerLane: "#ff4fc7",
  accent: "#b9ff6a",
  laneHighlight: "#9bd7ff"
};
var solarArrayLaneRunnerPalette = {
  floor: "#110c07",
  boundary: "#ff9e38",
  lane: "#ffd45a",
  centerLane: "#26d7ff",
  accent: "#ff4f66",
  laneHighlight: "#fff6b8"
};
function getLaneRunnerSceneName(sceneId) {
  return sceneNames[sceneId];
}
function isLaneRunnerSceneId(value) {
  return laneRunnerSceneIds.includes(value);
}
function createLaneRunnerScene(options) {
  return sceneCreators[options.sceneId](options);
}
var sceneCreators = {
  neonHall: createNeonHall,
  aurora: createAurora,
  crystalForge: (options) => createThemedLaneRunnerScene(options, crystalForgeLaneRunnerPalette, addCrystalForgeDetails),
  voidGarden: (options) => createThemedLaneRunnerScene(options, voidGardenLaneRunnerPalette, addVoidGardenDetails),
  solarArray: (options) => createThemedLaneRunnerScene(options, solarArrayLaneRunnerPalette, addSolarArrayDetails)
};
function createNeonHall(options) {
  const { width, height, timeMs } = options;
  const primitives = [];
  const geometry = laneRunnerPerspective(width, height);
  addStandardLaneRunnerPerspective(primitives, geometry, standardLaneRunnerPalette, timeMs);
  addHallLaneSignals(primitives, geometry, timeMs);
  addHallFloorGlyphs(primitives, geometry, timeMs);
  addHallHorizonDetails(primitives, geometry, timeMs);
  addHallSidePanels(primitives, geometry, timeMs);
  addHallEnergyTraces(primitives, geometry, timeMs);
  return { primitives };
}
function createAurora(options) {
  const { width, height, timeMs } = options;
  const primitives = [];
  const geometry = laneRunnerPerspective(width, height);
  addStandardLaneRunnerPerspective(primitives, geometry, auroraLaneRunnerPalette, timeMs);
  addAuroraLaneSignals(primitives, geometry, timeMs);
  addAuroraGroundFlares(primitives, geometry, timeMs);
  addAuroraHorizonVeils(primitives, geometry, timeMs);
  return { primitives };
}
function createThemedLaneRunnerScene(options, palette, addDetails) {
  const { width, height, timeMs } = options;
  const primitives = [];
  const geometry = laneRunnerPerspective(width, height);
  addStandardLaneRunnerPerspective(primitives, geometry, palette, timeMs);
  addThemedLaneSignals(primitives, geometry, palette, timeMs);
  addDetails(primitives, geometry, timeMs);
  return { primitives };
}
function laneRunnerPerspective(width, height) {
  const vp = { x: width * 0.5, y: -height };
  const bottomY = height * 0.985;
  const bottomHalf = width * hallBottomWidth * 0.5;
  return {
    width,
    height,
    vp,
    leftBottom: { x: width * 0.5 - bottomHalf, y: bottomY },
    rightBottom: { x: width * 0.5 + bottomHalf, y: bottomY },
    leftHorizon: { x: width * 0.5 - bottomHalf, y: vp.y },
    rightHorizon: { x: width * 0.5 + bottomHalf, y: vp.y }
  };
}
function addStandardLaneRunnerPerspective(items, geometry, palette, timeMs) {
  addLaneRunnerFloor(items, geometry.width, geometry.height, palette, timeMs);
  addLaneRunnerRails(items, geometry, palette);
  addLaneRunnerDepthLines(items, geometry, palette, timeMs);
}
function addLaneRunnerFloor(items, width, height, palette, timeMs) {
  const pulse = 0.55 + Math.sin(timeMs * hallEnergySpeed) * 0.2;
  items.push({ x: width / 2, y: height * 0.42, width: width * hallBottomWidth, height: height * 1.08, color: palette.floor, secondaryColor: "#02050d", glow: 0.05, intensity: 0.23, shape: "bolt" });
  items.push({ x: width / 2, y: -height * 0.9, width: width * 0.34, height: 1.4, color: palette.boundary, secondaryColor: palette.laneHighlight, glow: 0.3, intensity: 0.18 + pulse * 0.07, shape: "bolt" });
  items.push({ x: width / 2, y: -height * 0.78, width: width * 0.18, height: 1.2, color: palette.accent, secondaryColor: palette.centerLane, glow: 0.24, intensity: 0.08, shape: "bolt" });
}
function addLaneRunnerRails(items, geometry, palette) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (const [bottom, horizon] of [[leftBottom, leftHorizon], [rightBottom, rightHorizon]]) {
    addGlowingLine(items, bottom, horizon, palette.boundary, 0.48, 6.5);
    addGlowingLine(items, bottom, horizon, palette.laneHighlight, 0.56, 1.3);
  }
  for (let lane = 1; lane <= 3; lane++) {
    const u = lane / 4;
    const start = lerpPoint(leftBottom, rightBottom, u);
    const end = lerpPoint(leftHorizon, rightHorizon, u);
    const color = lane === 2 ? palette.centerLane : palette.lane;
    addGlowingLine(items, start, end, color, lane === 2 ? 0.28 : 0.2, 3.4);
    addGlowingLine(items, start, end, palette.laneHighlight, lane === 2 ? 0.26 : 0.18, 0.9);
  }
}
function addLaneRunnerDepthLines(items, geometry, palette, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let row = 0; row < 15; row++) {
    const t = Math.pow(row / 14, 1.82);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const rowPulse = 0.58 + Math.sin(timeMs / 480 + row * 0.78) * 0.42;
    const surge = Math.max(0, Math.sin(timeMs / 820 - row * 0.72));
    const color = row % 4 === 0 ? palette.laneHighlight : row % 4 === 1 ? palette.lane : row % 4 === 2 ? palette.centerLane : palette.accent;
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
function addAuroraLaneSignals(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let pulseIndex = 0; pulseIndex < 9; pulseIndex++) {
    const travel = (timeMs / 1550 + pulseIndex / 9) % 1;
    const t = Math.pow(travel, 1.48);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const opacity = 0.32 * (1 - travel);
    addGlowingLine(items, left, right, pulseIndex % 2 === 0 ? "#b9ff6a" : "#17d7b3", opacity, 1 + t * 1.7);
  }
}
function addAuroraGroundFlares(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height } = geometry;
  for (let index = 0; index < 18; index++) {
    const depth = 0.08 + index * 29 % 100 / 112;
    const t = Math.min(1, Math.pow(depth, 1.62));
    const laneSide = index % 2 === 0 ? 0.22 : 0.78;
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const point = lerpPoint(left, right, laneSide + Math.sin(index * 1.1 + timeMs / 1800) * 0.04);
    const shimmer = 0.55 + Math.sin(timeMs / 430 + index * 1.3) * 0.35;
    items.push({
      x: point.x,
      y: point.y,
      width: width * (9e-3 + t * 0.012),
      height: height * (0.018 + t * 0.035),
      color: index % 3 === 0 ? "#b9ff6a" : index % 3 === 1 ? "#17d7b3" : "#8f56ff",
      secondaryColor: "#ff4fc7",
      glow: 0.38,
      intensity: (0.08 + t * 0.06) * shimmer,
      shape: index % 4 === 0 ? "diamond" : "bolt",
      rotation: Math.sin(timeMs / 1200 + index) * 0.18
    });
  }
}
function addAuroraHorizonVeils(items, geometry, timeMs) {
  const { vp, width, height } = geometry;
  for (let index = 0; index < 7; index++) {
    const u = (index - 3) / 6;
    const wave = Math.sin(timeMs / 1100 + index * 0.9);
    items.push({
      x: vp.x + u * width * 0.36,
      y: vp.y + height * (0.075 + index * 6e-3),
      width: width * (0.035 + index * 4e-3),
      height: height * (0.12 + Math.abs(wave) * 0.03),
      color: index % 2 === 0 ? "#17d7b3" : "#8f56ff",
      secondaryColor: index % 3 === 0 ? "#b9ff6a" : "#ff4fc7",
      glow: 0.34,
      intensity: 0.045 + Math.abs(wave) * 0.025,
      shape: "line",
      rotation: u * 0.28 + wave * 0.08
    });
  }
}
function addThemedLaneSignals(items, geometry, palette, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let pulseIndex = 0; pulseIndex < 8; pulseIndex++) {
    const travel = (timeMs / 1700 + pulseIndex / 8) % 1;
    const t = Math.pow(travel, 1.5);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    addGlowingLine(items, left, right, pulseIndex % 2 === 0 ? palette.laneHighlight : palette.accent, 0.28 * (1 - travel), 1.1 + t * 1.6);
  }
}
function addCrystalForgeDetails(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 16; index++) {
    const t = Math.pow((index + 1) / 17, 1.55);
    const side = index % 2 === 0 ? 0.14 : 0.86;
    const edge = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side);
    const glint = 0.55 + Math.sin(timeMs / 520 + index * 1.17) * 0.35;
    items.push({
      x: edge.x,
      y: edge.y,
      width: width * (0.012 + t * 0.012),
      height: height * (0.025 + t * 0.06),
      color: index % 3 === 0 ? "#ffb84d" : "#63f1ff",
      secondaryColor: index % 4 === 0 ? "#ff5fd8" : "#f4fbff",
      glow: 0.38,
      intensity: (0.08 + t * 0.055) * glint,
      shape: "diamond",
      rotation: (side < 0.5 ? -0.22 : 0.22) + Math.sin(timeMs / 1400 + index) * 0.08
    });
  }
  addGlowingLine(items, { x: vp.x - width * 0.13, y: vp.y + height * 0.045 }, { x: vp.x + width * 0.13, y: vp.y + height * 0.045 }, "#ffb84d", 0.22, 1.3);
}
function addVoidGardenDetails(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 20; index++) {
    const t = Math.pow(0.08 + index * 23 % 100 / 112, 1.65);
    const side = index % 4 < 2 ? 0.18 : 0.82;
    const center = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side + Math.sin(timeMs / 1900 + index) * 0.035);
    const bloom = 0.5 + Math.sin(timeMs / 760 + index * 0.8) * 0.32;
    items.push({
      x: center.x,
      y: center.y,
      width: width * (6e-3 + t * 0.014),
      height: width * (6e-3 + t * 0.014),
      color: index % 3 === 0 ? "#b9ff6a" : "#35e8b6",
      secondaryColor: index % 2 === 0 ? "#6f53ff" : "#ff4fc7",
      glow: 0.42,
      intensity: (0.07 + t * 0.05) * bloom,
      shape: index % 2 === 0 ? "diamond" : "bolt",
      rotation: Math.sin(timeMs / 1200 + index) * 0.4
    });
  }
  addGlowingLine(items, { x: vp.x - width * 0.18, y: vp.y + height * 0.07 }, { x: vp.x + width * 0.18, y: vp.y + height * 0.07 }, "#35e8b6", 0.18, 1.1);
}
function addSolarArrayDetails(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 18; index++) {
    const t = Math.pow((index + 1) / 19, 1.48);
    const side = index % 2 === 0 ? 0.1 : 0.9;
    const mount = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side);
    const pulse = 0.62 + Math.sin(timeMs / 610 + index * 1.05) * 0.3;
    items.push({
      x: mount.x,
      y: mount.y,
      width: width * (0.018 + t * 0.035),
      height: height * (0.012 + t * 0.024),
      color: index % 3 === 0 ? "#ffd45a" : "#ff9e38",
      secondaryColor: index % 4 === 0 ? "#26d7ff" : "#ff4f66",
      glow: 0.32,
      intensity: (0.08 + t * 0.055) * pulse,
      shape: "bolt",
      rotation: side < 0.5 ? -0.38 : 0.38
    });
  }
  addGlowingLine(items, { x: vp.x - width * 0.11, y: vp.y + height * 0.035 }, { x: vp.x + width * 0.11, y: vp.y + height * 0.035 }, "#fff6b8", 0.24, 1.4);
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

// projects/NeonFactory/src/projectile.ts
var rotationForScreenForwardVector = (x, y) => {
  const length = Math.hypot(x, y) || 1;
  return Math.atan2(x / length, -y / length);
};
var NeonProjectile = class {
  x;
  y;
  velocityX;
  velocityY;
  radius;
  length;
  trailLength;
  trailWidth;
  color;
  trailColor;
  coreColor;
  shape;
  intensity;
  glow;
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.velocityX = options.velocityX ?? 0;
    this.velocityY = options.velocityY ?? -500;
    this.radius = options.radius ?? 3;
    this.length = options.length ?? 9;
    this.trailLength = options.trailLength ?? 16;
    this.trailWidth = options.trailWidth ?? 1.5;
    this.color = options.color;
    this.trailColor = options.trailColor ?? options.color;
    this.coreColor = options.coreColor ?? options.color;
    this.shape = options.shape ?? "dart";
    this.intensity = options.intensity ?? 1;
    this.glow = options.glow ?? 0.75;
  }
  update(deltaSeconds) {
    this.x += this.velocityX * deltaSeconds;
    this.y += this.velocityY * deltaSeconds;
    return this;
  }
  primitives() {
    const split = this.shape === "splitBolt";
    const needle = this.shape === "needle";
    const slug = this.shape === "slug";
    const speed = Math.hypot(this.velocityX, this.velocityY) || 1;
    const directionX = this.velocityX / speed;
    const directionY = this.velocityY / speed;
    const rotation = rotationForScreenForwardVector(this.velocityX, this.velocityY);
    const items = [{
      x: this.x - directionX * this.trailLength * 0.5,
      y: this.y - directionY * this.trailLength * 0.5,
      width: this.trailWidth,
      height: this.trailLength,
      color: this.trailColor,
      secondaryColor: this.color,
      glow: this.glow * 0.6,
      intensity: this.intensity * 0.72,
      shape: "bolt",
      rotation
    }];
    const width = slug ? this.radius * 1.5 : needle ? this.radius * 0.65 : this.radius;
    const height = slug ? this.length * 0.75 : this.length;
    const sideX = -directionY;
    const sideY = directionX;
    const add = (offset) => items.push({ x: this.x + sideX * offset, y: this.y + sideY * offset, width, height, color: this.color, secondaryColor: this.coreColor, glow: this.glow, intensity: this.intensity, shape: needle ? "circle" : "bolt", rotation });
    if (split) {
      add(-this.radius * 0.7);
      add(this.radius * 0.7);
    } else add(0);
    return items;
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

// projects/NeonFactory/src/victory.ts
var NeonVictoryExperience = class {
  startedAt;
  durationMs;
  options;
  constructor(options, startedAt = performance.now()) {
    this.options = options;
    this.startedAt = startedAt;
    this.durationMs = options.durationMs ?? 4200;
  }
  get complete() {
    return performance.now() - this.startedAt >= this.durationMs;
  }
  primitives(now = performance.now()) {
    const elapsed = Math.max(0, now - this.startedAt);
    const progress = Math.min(1, elapsed / this.durationMs);
    const count = this.options.particleCount ?? 90;
    const colors2 = [neonPalette.cyan, neonPalette.pink, neonPalette.gold, neonPalette.green, neonPalette.violet, neonPalette.orange];
    const primitives = [];
    for (let index = 0; index < count; index++) {
      const seed = index * 91.73;
      const delay = index % 12 * 0.035;
      const local = Math.max(0, Math.min(1, progress * 1.35 - delay));
      if (local <= 0) continue;
      const angle = seed % 360 / 180 * Math.PI;
      const speed = 0.22 + index * 37 % 100 / 260;
      const drift = Math.sin(seed) * this.options.width * 0.06 * local;
      const x = this.options.centerX + Math.cos(angle) * this.options.width * speed * local + drift;
      const y = this.options.centerY + Math.sin(angle) * this.options.height * speed * local + this.options.height * 0.42 * local * local;
      const fade = Math.max(0, 1 - local * 0.72);
      const size = 2.5 + index % 5;
      primitives.push({
        x,
        y,
        width: size,
        height: size * (1.8 + index % 3),
        color: colors2[index % colors2.length],
        secondaryColor: colors2[(index + 2) % colors2.length],
        glow: 0.55,
        intensity: fade,
        shape: index % 4 === 0 ? "spark" : "bolt"
      });
    }
    primitives.push({
      x: this.options.centerX,
      y: this.options.centerY,
      width: 80 + progress * 180,
      color: neonPalette.cyan,
      secondaryColor: neonPalette.violet,
      glow: 0.55 * (1 - progress),
      intensity: Math.max(0, 1 - progress),
      shape: "ring"
    });
    return primitives;
  }
};
export {
  NeonCloudBurstActor,
  NeonCloudBurstRenderer,
  NeonGeometricShapeRenderer,
  NeonOrb,
  NeonPrimitiveRenderer,
  NeonProjectile,
  NeonShapeActor,
  NeonShapeDisposal,
  NeonTopDownSceneRenderer,
  NeonVictoryExperience,
  createLaneRunnerScene,
  createTestPage,
  defaultNeonLightningTuning,
  deriveNeonCloudCoreColor,
  getLaneRunnerSceneName,
  getNeonShape,
  glowPresets,
  isLaneRunnerSceneId,
  laneRunnerSceneIds,
  neonLightningPrimitives,
  neonPalette,
  neonShapeCatalog,
  neonShapeEnergyInternalTuning,
  resolveNeonLightningChain,
  setNeonShapeEnergyInternalTuning
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvb3JiLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGVzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXIudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2dlb21ldHJpYy1zaGFwZS1hY3Rvci50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvcHJpbWl0aXZlLXJlbmRlcmVyLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9jbG91ZC1idXJzdC50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdG9wLWRvd24tc2NlbmUudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2xpZ2h0bmluZy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvbGFuZS1ydW5uZXItc2NlbmVzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9wcm9qZWN0aWxlLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90ZXN0LWhhcm5lc3MudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ZpY3RvcnkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IGdsb3dQcmVzZXRzLCBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25PcmJPcHRpb25zIHtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgcmFkaXVzPzogbnVtYmVyO1xuICBjb2xvcj86IHN0cmluZztcbiAgZ2xvdz86IG51bWJlcjtcbiAgYW5pbWF0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uT3JiIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBnbG93OiBudW1iZXI7XG4gIGFuaW1hdGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvbk9yYk9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCA/PyAwLjU7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55ID8/IDAuNTtcbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzID8/IDAuMTI7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgPz8gbmVvblBhbGV0dGUuY3lhbjtcbiAgICB0aGlzLmdsb3cgPSBvcHRpb25zLmdsb3cgPz8gZ2xvd1ByZXNldHMuc3RhbmRhcmQ7XG4gICAgdGhpcy5hbmltYXRlID0gb3B0aW9ucy5hbmltYXRlID8/IHRydWU7XG4gIH1cblxuICB1cGRhdGUob3B0aW9uczogTmVvbk9yYk9wdGlvbnMpOiB0aGlzIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMueCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMueCkpO1xuICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMueSkpO1xuICAgIHRoaXMucmFkaXVzID0gTWF0aC5tYXgoMC4wMSwgTWF0aC5taW4oMC41LCB0aGlzLnJhZGl1cykpO1xuICAgIHRoaXMuZ2xvdyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEuNSwgdGhpcy5nbG93KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVGYW1pbHkgPSBcInBsYXllclwiIHwgXCJodW50ZXJcIiB8IFwiYnJ1aXNlclwiIHwgXCJ0YW5rXCIgfCBcInRyaWNrc3RlclwiIHwgXCJlbGl0ZVwiO1xuZXhwb3J0IHR5cGUgTmVvblJvY2tTdHlsZSA9IFwicGl0Y2hcIiB8IFwicm9sbFwiIHwgXCJ5YXdcIiB8IFwicHVsc2VcIiB8IFwib3JiaXRcIjtcbmV4cG9ydCB0eXBlIE5lb25Qb2ludCA9IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHk7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W107XG4gIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdO1xuICByb2NrOiBOZW9uUm9ja1N0eWxlO1xuICBkZXB0aD86IG51bWJlcjtcbn1cblxuY29uc3QgcmVndWxhciA9IChzaWRlczogbnVtYmVyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMiwgc3ggPSAxLCBzeSA9IDEpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaWRlcyB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAqIDIgLyBzaWRlcztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHN4LCBNYXRoLnNpbihhbmdsZSkgKiBzeV0gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBzdGFyID0gKHBvaW50czogbnVtYmVyLCBpbm5lciA9IC40Miwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwb2ludHMgKiAyIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgcmFkaXVzID0gaSAlIDIgPyBpbm5lciA6IDE7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJIC8gcG9pbnRzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3QgZGlhbW9uZDogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV0sIFstMSwgMF1dO1xuY29uc3QgYXJyb3c6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsuODIsIC42OF0sIFsuMjcsIC40NV0sIFswLCAuOTJdLCBbLS4yNywgLjQ1XSwgWy0uODIsIC42OF1dO1xuY29uc3QgY2hldnJvbjogTmVvblBvaW50W10gPSBbWy0xLCAtLjYyXSwgWzAsIC0uMDVdLCBbMSwgLS42Ml0sIFsuMjgsIC44Ml0sIFswLCAuMzRdLCBbLS4yOCwgLjgyXV07XG5jb25zdCBzcXVhcmU6IE5lb25Qb2ludFtdID0gcmVndWxhcig0LCBNYXRoLlBJIC8gNCk7XG5jb25zdCBjb2xvcnM6IFJlY29yZDxOZW9uU2hhcGVGYW1pbHksIHN0cmluZz4gPSB7XG4gIHBsYXllcjogbmVvblBhbGV0dGUuY3lhbiwgaHVudGVyOiBuZW9uUGFsZXR0ZS5yZWQsIGJydWlzZXI6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgdGFuazogbmVvblBhbGV0dGUuZ29sZCwgdHJpY2tzdGVyOiBcIiM5Y2ZmNTJcIiwgZWxpdGU6IFwiIzcwZGZmZlwiLFxufTtcblxuY29uc3QgbWFrZSA9IChcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHksIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSxcbiAgcm9jazogTmVvblJvY2tTdHlsZSwgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW10sXG4pOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uID0+ICh7IGlkLCBuYW1lLCBmYW1pbHksIHBvaW50cywgaG9sZXMsIHJvY2ssIGNvbG9yOiBjb2xvcnNbZmFtaWx5XSwgZGVwdGg6IGZhbWlseSA9PT0gXCJ0YW5rXCIgPyAuMjIgOiAuMTQgfSk7XG5cbmV4cG9ydCBjb25zdCBuZW9uU2hhcGVDYXRhbG9nOiByZWFkb25seSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uW10gPSBbXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJhcnJvdy1jbGFzc2ljXCIsIFwiQXJyb3cgQ2xhc3NpY1wiLCBhcnJvdywgXCJwaXRjaFwiLCBbYXJyb3cubWFwKChbeCwgeV0pID0+IFt4ICogLjQyLCB5ICogLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImRlbHRhLXNsZWVrXCIsIFwiRGVsdGEgU2xlZWtcIiwgW1swLC0xXSxbLjksLjgyXSxbMCwuNDhdLFstLjksLjgyXV0sIFwicGl0Y2hcIiwgW1tbMCwtLjQ1XSxbLjM1LC40NV0sWzAsLjI4XSxbLS4zNSwuNDVdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Rhci1jb3JlXCIsIFwiU3RhciBDb3JlXCIsIHN0YXIoNCwgLjMyKSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiaGV4LWZpZ2h0ZXJcIiwgXCJIZXggRmlnaHRlclwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LCAtTWF0aC5QSS8yLCAuNDgsIC40OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcIndpbmctc3BsaXRcIiwgXCJXaW5nIFNwbGl0XCIsIFtbLTEsLS44NV0sWy0uMjUsLjFdLFswLC0uMjVdLFsuMjUsLjFdLFsxLC0uODVdLFsuNjYsLjcyXSxbMCwuMzVdLFstLjY2LC43Ml1dLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjE4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInRyaWFkLXBvZFwiLCBcIlRyaWFkIFBvZFwiLCByZWd1bGFyKDMpLCBcInlhd1wiLCBbcmVndWxhcigzLCAtTWF0aC5QSS8yLCAuMzgsIC4zOCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNwaWtlLWxhbmNlXCIsIFwiU3Bpa2UgTGFuY2VcIiwgW1swLC0xXSxbLjQ4LC42NV0sWy4xOCwuNDJdLFswLDFdLFstLjE4LC40Ml0sWy0uNDgsLjY1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1hcmMta2F0YW5hXCIsIFwiU3dvcmQgQXJjIEthdGFuYVwiLCBbWy0uMTYsLTFdLCBbLjE2LC0xXSwgWy4yMiwuMjhdLCBbLjQ4LC42Ml0sIFsuMTgsLjUyXSwgWy4xLDFdLCBbLS4xLDFdLCBbLS4xOCwuNTJdLCBbLS40OCwuNjJdLCBbLS4yMiwuMjhdXSwgXCJwaXRjaFwiLCBbW1stLjA1NSwtLjcyXSwgWy4wNTUsLS43Ml0sIFsuMDU1LC4xOF0sIFstLjA1NSwuMThdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtY2xlYXZlci13aWRlXCIsIFwiU3dvcmQgQ2xlYXZlciBXaWRlXCIsIFtbLS4yOCwtMV0sIFsuMjgsLTFdLCBbLjQ0LC0uNzZdLCBbLjM0LC4zNF0sIFsuNzIsLjU4XSwgWy4yMiwuNTVdLCBbLjE2LDFdLCBbLS4xNiwxXSwgWy0uMjIsLjU1XSwgWy0uNzIsLjU4XSwgWy0uMzQsLjM0XSwgWy0uNDQsLS43Nl1dLCBcInJvbGxcIiwgW1tbLS4xLC0uNjhdLCBbLjEsLS42OF0sIFsuMDgsLjE4XSwgWy0uMDgsLjE4XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLW5lZWRsZS1zYWJyZVwiLCBcIlN3b3JkIE5lZWRsZSBTYWJyZVwiLCBbWzAsLTFdLCBbLjA4LC0uODJdLCBbLjExLC41XSwgWy4zMiwuNzJdLCBbLjA4LC42NF0sIFsuMDUsMV0sIFstLjA1LDFdLCBbLS4wOCwuNjRdLCBbLS4zMiwuNzJdLCBbLS4xMSwuNV0sIFstLjA4LC0uODJdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWd1YXJkZWQtYmxhZGVcIiwgXCJTd29yZCBHdWFyZGVkIEJsYWRlXCIsIFtbLS4xMiwtMV0sIFsuMTIsLTFdLCBbLjE2LC4zNl0sIFsuNjIsLjM2XSwgWy42MiwuNTRdLCBbLjE0LC41Nl0sIFsuMSwxXSwgWy0uMSwxXSwgWy0uMTQsLjU2XSwgWy0uNjIsLjU0XSwgWy0uNjIsLjM2XSwgWy0uMTYsLjM2XV0sIFwieWF3XCIsIFtbWy0uMDQ1LC0uNzJdLCBbLjA0NSwtLjcyXSwgWy4wNDUsLjIyXSwgWy0uMDQ1LC4yMl1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1wcmlzbS1ncmVhdGJsYWRlXCIsIFwiU3dvcmQgUHJpc20gR3JlYXRibGFkZVwiLCBbWzAsLTFdLCBbLjM0LC0uNzRdLCBbLjMsLjI4XSwgWy41NiwuNTJdLCBbLjIsLjQ4XSwgWy4xMiwxXSwgWy0uMTIsMV0sIFstLjIsLjQ4XSwgWy0uNTYsLjUyXSwgWy0uMywuMjhdLCBbLS4zNCwtLjc0XV0sIFwicm9sbFwiLCBbW1stLjA4LC0uNDhdLCBbLjA4LC0uNDhdLCBbLjA4LC4xNl0sIFstLjA4LC4xNl1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJvcmJpdC1kcm9uZVwiLCBcIk9yYml0IERyb25lXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLCAwLCAuNTgsIC41OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNoaWVsZC1yaW5nXCIsIFwiU2hpZWxkIFJpbmdcIiwgcmVndWxhcigzMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMzIsIDAsIC45MSwgLjkxKV0pLFxuXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZGFydFwiLCBcIkRhcnRcIiwgW1stMSwtLjddLFsxLDBdLFstMSwuN10sWy0uNDUsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWtpdGVcIiwgXCJLaXRlXCIsIFtbLTEsLS43NV0sWzEsMF0sWy0xLC43NV0sWy0uNTUsMF1dLCBcInJvbGxcIiwgW3JlZ3VsYXIoMywwLC4zNSwuMzUpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItbmVlZGxlXCIsIFwiTmVlZGxlXCIsIFtbLTEsLS40Ml0sWzEsMF0sWy0xLC40Ml0sWy0uNTUsMF1dLCBcInlhd1wiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci10YWxvblwiLCBcIlRhbG9uXCIsIHN0YXIoMywuMjgpLCBcInJvbGxcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItc2hhcmRcIiwgXCJTaGFyZFwiLCBkaWFtb25kLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXZlZVwiLCBcIlZlZVwiLCBjaGV2cm9uLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWV5ZVwiLCBcIldhdGNoZXJcIiwgcmVndWxhcigzLCBNYXRoLlBJLzIpLCBcInlhd1wiLCBbcmVndWxhcigzLE1hdGguUEkvMiwuNDIsLjQyKV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJ1cnN0XCIsIFwiQnVyc3RcIiwgc3Rhcig4LC4zNSksIFwicHVsc2VcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYm9sdFwiLCBcIkJvbHRcIiwgW1stLjcsLTFdLFsuMTUsLS4zNV0sWy0uMjUsLS4yXSxbLjcsMV0sWy0uMSwuMzJdLFsuMywuMTVdXSwgXCJyb2xsXCIpLFxuXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1mcmFtZVwiLCBcIkZyYW1lXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40OCx5Ki40OF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZW1cIiwgXCJHZW1cIiwgZGlhbW9uZCwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWhleFwiLCBcIkhleCBDb3JlXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvd25cIiwgXCJDcm93blwiLCBbWy0xLC0uNzVdLFstLjUsLS41NV0sWzAsLS44NV0sWy41LC0uNTVdLFsxLC0uNzVdLFsuOCwuOF0sWy0uOCwuOF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm9zc1wiLCBcIkNyb3NzXCIsIFtbLS4zNSwtMV0sWy4zNSwtMV0sWy4zNSwtLjM1XSxbMSwtLjM1XSxbMSwuMzVdLFsuMzUsLjM1XSxbLjM1LDFdLFstLjM1LDFdLFstLjM1LC4zNV0sWy0xLC4zNV0sWy0xLC0uMzVdLFstLjM1LC0uMzVdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1wcmlzbVwiLCBcIlByaXNtXCIsIGRpYW1vbmQsIFwicHVsc2VcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VhclwiLCBcIkdlYXJcIiwgc3Rhcig4LC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXIteFwiLCBcIlggQ29yZVwiLCBbWy0xLC0uNjVdLFstLjY1LC0xXSxbMCwtLjM1XSxbLjY1LC0xXSxbMSwtLjY1XSxbLjM1LDBdLFsxLC42NV0sWy42NSwxXSxbMCwuMzVdLFstLjY1LDFdLFstMSwuNjVdLFstLjM1LDBdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItc2xhYlwiLCBcIlNsYWJcIiwgW1stLjY1LC0xXSxbMSwtMV0sWy42NSwxXSxbLTEsMV1dLCBcInBpdGNoXCIpLFxuXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1oZXhcIiwgXCJIZWF2eSBIZXhcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4zOCwuMzgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1iYXJcIiwgXCJBcm1vciBCYXJcIiwgW1stLjc1LC0xXSxbLjc1LC0xXSxbMSwtLjQ1XSxbLjc1LDFdLFstLjc1LDFdLFstMSwuNDVdXSwgXCJwaXRjaFwiLCBbW1stLjQ4LC0uMThdLFsuNDgsLS4xOF0sWy40OCwuMThdLFstLjQ4LC4xOF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1ibG9ja1wiLCBcIkJsb2NrXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40Mix5Ki40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1vY3RcIiwgXCJPY3RhZ29uXCIsIHJlZ3VsYXIoOCksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstZm9ydFwiLCBcIkZvcnRyZXNzXCIsIHJlZ3VsYXIoNiksIFwicGl0Y2hcIiwgW3JlZ3VsYXIoNiwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1yZWFjdG9yXCIsIFwiUmVhY3RvclwiLCByZWd1bGFyKDEwKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC41NCwuNTQpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1jaXRhZGVsXCIsIFwiQ2l0YWRlbFwiLCBbWy0uNjUsLTFdLFsuNjUsLTFdLFsuNjUsLS43Ml0sWzEsLS43Ml0sWzEsLjcyXSxbLjY1LC43Ml0sWy42NSwxXSxbLS42NSwxXSxbLS42NSwuNzJdLFstMSwuNzJdLFstMSwtLjcyXSxbLS42NSwtLjcyXV0sIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYnVua2VyXCIsIFwiQnVua2VyXCIsIFtbLS43MiwtMV0sWy43MiwtMV0sWzEsLS41OF0sWzEsLjU4XSxbLjcyLDFdLFstLjcyLDFdLFstMSwuNThdLFstMSwtLjU4XV0sIFwicGl0Y2hcIiwgW1tbLS41LC0uMTRdLFsuNSwtLjE0XSxbLjUsLjE0XSxbLS41LC4xNF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1zdW5cIiwgXCJTdW4gVGFua1wiLCByZWd1bGFyKDEyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuMjgsLjI4KV0pLFxuXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1kaWFtb25kXCIsIFwiUGhhc2UgRGlhbW9uZFwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY2hldnJvblwiLCBcIlNsaXBzdHJlYW1cIiwgW1stMSwtLjhdLFstLjIsMF0sWy0xLC44XSxbLS4zNSwuOF0sWy40NSwwXSxbLS4zNSwtLjhdLFsuMjUsLS44XSxbMSwwXSxbLjI1LC44XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1zcXVhcmVcIiwgXCJUaWx0IEJveFwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMzQseSouMzRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY29tcGFzc1wiLCBcIkNvbXBhc3NcIiwgZGlhbW9uZCwgXCJ5YXdcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1leWVcIiwgXCJQaGFzZSBFeWVcIiwgcmVndWxhcigzKSwgXCJwdWxzZVwiLCBbcmVndWxhcig4LDAsLjE4LC4xOCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWhvdXJnbGFzc1wiLCBcIkhvdXJnbGFzc1wiLCBbWy0xLC0xXSxbMSwtMV0sWy4yOCwwXSxbMSwxXSxbLTEsMV0sWy0uMjgsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stbGlua1wiLCBcIkxpbmtcIiwgcmVndWxhcigxMiwwLDEsLjU1KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNjIsLjIyKV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stdm9ydGV4XCIsIFwiVm9ydGV4XCIsIHN0YXIoNywuNTYpLCBcInJvbGxcIiwgW3JlZ3VsYXIoNywwLC4yNSwuMjUpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1nYXRlXCIsIFwiR2hvc3QgR2F0ZVwiLCBzcXVhcmUsIFwicHVsc2VcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjc4LHkqLjc4XSBhcyBjb25zdCldKSxcblxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zdGFyXCIsIFwiTm92YSBTdGFyXCIsIHN0YXIoOCwuNTUpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4zLC4zKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zYXdcIiwgXCJIYWxvIFNhd1wiLCBzdGFyKDEyLC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjQyLC40MildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY3Jvd25cIiwgXCJWb2lkIENyb3duXCIsIHN0YXIoNywuNDgpLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjIseSouMjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1wcmlzbVwiLCBcIlJveWFsIFByaXNtXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjUseSouNV0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLW9yYml0XCIsIFwiT3JiaXQgRXllXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLDAsLjYsLjYpLCByZWd1bGFyKDEyLDAsLjIsLjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNpcmN1aXRcIiwgXCJDaXJjdWl0IExvcmRcIiwgc3Rhcig4LC43NSksIFwieWF3XCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40LHkqLjRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zZW50aW5lbFwiLCBcIlNlbnRpbmVsXCIsIHN0YXIoMTAsLjYyKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC4yMiwuMjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXdpbmdzXCIsIFwiTmlnaHQgV2luZ3NcIiwgW1stMSwtLjhdLFstLjcsLjM1XSxbLS4yNSwuMDVdLFswLC44NV0sWy4yNSwuMDVdLFsuNywuMzVdLFsxLC0uOF0sWy4zNSwtLjM1XSxbMCwtLjA1XSxbLS4zNSwtLjM1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWVtcGVyb3JcIiwgXCJFbXBlcm9yXCIsIHN0YXIoOCwuNDgpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4yNCwuMjQpXSksXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0TmVvblNoYXBlID0gKGlkOiBzdHJpbmcpOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkID0+XG4gIG5lb25TaGFwZUNhdGFsb2cuZmluZChzaGFwZSA9PiBzaGFwZS5pZCA9PT0gaWQpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiwgTmVvblBvaW50IH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uID0gXCJhYm92ZVwiIHwgXCJiZWxvd1wiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVMYWJlbCB7XG4gIHRleHQ6IHN0cmluZztcbiAgcG9zaXRpb24/OiBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogbnVtYmVyO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUluc3RhbmNlIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIGNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgc2NhbGVYPzogbnVtYmVyO1xuICBzY2FsZVk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgcm90YXRpb25ZPzogbnVtYmVyO1xuICByb3RhdGlvblo/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIHNoaWVsZGVkPzogYm9vbGVhbjtcbiAgbGluZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgZW5lcmd5SW50ZW5zaXR5PzogbnVtYmVyO1xuICBlbmVyZ3lDb3ZlcmFnZT86IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ/OiBudW1iZXI7XG4gIGVuZXJneUJsZWVkPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBlbnRyYW5jZVByb2dyZXNzPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZXhwbG9kZVByb2dyZXNzPzogbnVtYmVyO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBmYWxsUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlRW5lcmd5SW50ZXJuYWxUdW5pbmcge1xuICBicmFuY2hDeWNsZVJhdGU6IG51bWJlcjtcbiAgYnJhbmNoQ2hhbmNlU2NhbGU6IG51bWJlcjtcbiAgYWN0aXZlRHVyYXRpb25NaW46IG51bWJlcjtcbiAgYWN0aXZlRHVyYXRpb25NYXg6IG51bWJlcjtcbiAgaGF6ZUR1cmF0aW9uTWluOiBudW1iZXI7XG4gIGhhemVEdXJhdGlvbk1heDogbnVtYmVyO1xuICBicmFuY2hMZW5ndGhNaW46IG51bWJlcjtcbiAgYnJhbmNoTGVuZ3RoTWF4OiBudW1iZXI7XG4gIGJyYW5jaFNlZ21lbnRzTWluOiBudW1iZXI7XG4gIGJyYW5jaFNlZ21lbnRzTWF4OiBudW1iZXI7XG4gIGJyYW5jaFR1cm5NaW5EZWdyZWVzOiBudW1iZXI7XG4gIGJyYW5jaFR1cm5NYXhEZWdyZWVzOiBudW1iZXI7XG4gIGJyYW5jaE5vcm1hbEppdHRlckRlZ3JlZXM6IG51bWJlcjtcbiAgYnJhbmNoV2lkdGhTY2FsZTogbnVtYmVyO1xuICBoYXplV2lkdGhTY2FsZTogbnVtYmVyO1xuICBoYXplT3BhY2l0eTogbnVtYmVyO1xuICBoYXplRHJpZnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUVuZXJneUludGVybmFsVHVuaW5nOiBOZW9uU2hhcGVFbmVyZ3lJbnRlcm5hbFR1bmluZyA9IHtcbiAgYnJhbmNoQ3ljbGVSYXRlOiAyLjYzLFxuICBicmFuY2hDaGFuY2VTY2FsZTogLjQ0LFxuICBhY3RpdmVEdXJhdGlvbk1pbjogLjEsXG4gIGFjdGl2ZUR1cmF0aW9uTWF4OiAuNjYsXG4gIGhhemVEdXJhdGlvbk1pbjogLjIsXG4gIGhhemVEdXJhdGlvbk1heDogMSxcbiAgYnJhbmNoTGVuZ3RoTWluOiAuMDYsXG4gIGJyYW5jaExlbmd0aE1heDogLjM5LFxuICBicmFuY2hTZWdtZW50c01pbjogMixcbiAgYnJhbmNoU2VnbWVudHNNYXg6IDksXG4gIGJyYW5jaFR1cm5NaW5EZWdyZWVzOiAxMCxcbiAgYnJhbmNoVHVybk1heERlZ3JlZXM6IDk0LFxuICBicmFuY2hOb3JtYWxKaXR0ZXJEZWdyZWVzOiAyMCxcbiAgYnJhbmNoV2lkdGhTY2FsZTogLjc0LFxuICBoYXplV2lkdGhTY2FsZTogLjM3LFxuICBoYXplT3BhY2l0eTogMSxcbiAgaGF6ZURyaWZ0OiAwLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5lb25TaGFwZUVuZXJneUludGVybmFsVHVuaW5nKHR1bmluZzogUGFydGlhbDxOZW9uU2hhcGVFbmVyZ3lJbnRlcm5hbFR1bmluZz4pOiB2b2lkIHtcbiAgT2JqZWN0LmFzc2lnbihuZW9uU2hhcGVFbmVyZ3lJbnRlcm5hbFR1bmluZywgdHVuaW5nKTtcbn1cblxudHlwZSBWMyA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbnR5cGUgVmVydGV4ID0ge1xuICBwOiBWMzsgbjogVjM7IGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07IGdsb3c6IG51bWJlcjtcbiAgZWZmZWN0OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBmbG9hdHNQZXJWZXJ0ZXggPSAxNDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBTY2VuZSB7IGFzcGVjdDogZjMyLCBjYW1lcmE6IGYzMiwgdGltZTogZjMyLCBwYWRkaW5nOiBmMzIgfVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5zdHJ1Y3QgSW5wdXQge1xuICBAbG9jYXRpb24oMCkgcG9zaXRpb246IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDMpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDQpIGVmZmVjdDogdmVjNGYsXG59XG5zdHJ1Y3QgT3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBlZmZlY3Q6IHZlYzRmLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKGlucHV0OiBJbnB1dCkgLT4gT3V0cHV0IHtcbiAgbGV0IGRlcHRoID0gc2NlbmUuY2FtZXJhIC0gaW5wdXQucG9zaXRpb24uejtcbiAgdmFyIG91dHB1dDogT3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihpbnB1dC5wb3NpdGlvbi54ICogNCAvIHNjZW5lLmFzcGVjdCwgaW5wdXQucG9zaXRpb24ueSAqIDQsIGRlcHRoICogLjA0NSwgZGVwdGgpO1xuICBvdXRwdXQubm9ybWFsID0gaW5wdXQubm9ybWFsO1xuICBvdXRwdXQuY29sb3IgPSBpbnB1dC5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpbnB1dC5nbG93O1xuICBvdXRwdXQuZWZmZWN0ID0gaW5wdXQuZWZmZWN0O1xuICByZXR1cm4gb3V0cHV0O1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKGlucHV0Lm5vcm1hbCk7XG4gIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtLjQ1LCAtLjcsIDEpKTtcbiAgbGV0IGRpZmZ1c2UgPSAuMTggKyBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKSAqIC44MjtcbiAgbGV0IHJpbSA9IHBvdygxIC0gYWJzKG5vcm1hbC56KSwgMi4yKTtcbiAgbGV0IHNpZGUgPSAxIC0gYWJzKG5vcm1hbC56KTtcbiAgbGV0IHJhcmVTdXJnZSA9IHBvdyhtYXgoLjAsIHNpbihzY2VuZS50aW1lICogaW5wdXQuZWZmZWN0LnogKiAuODIgKyBpbnB1dC5jb2xvci5yICogNy4wKSksIDIyLjApXG4gICAgKiBpbnB1dC5lZmZlY3QueCAqIGlucHV0LmVmZmVjdC55ICogaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBlbmVyZ3kgPSBpbnB1dC5jb2xvciAqIChkaWZmdXNlICogLjEyICsgcmltICogaW5wdXQuZ2xvdyAqIC4zNiArIHNpZGUgKiAuMDggKyByYXJlU3VyZ2UgKiAuNyk7XG4gIHJldHVybiB2ZWM0ZihlbmVyZ3kgKyB2ZWMzZihyYXJlU3VyZ2UgKiAuMTgpLCAuMTIgKyBzaWRlICogLjEyICsgcmFyZVN1cmdlICogLjI4KTtcbn1cbkBmcmFnbWVudCBmbiBsaW5lRnJhZ21lbnQoaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGFsb25nID0gaW5wdXQubm9ybWFsLng7XG4gIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubm9ybWFsLnkpO1xuICBsZXQgcGhhc2UgPSBpbnB1dC5ub3JtYWwuejtcbiAgbGV0IGludGVuc2l0eSA9IGlucHV0LmVmZmVjdC54O1xuICBsZXQgY292ZXJhZ2UgPSBpbnB1dC5lZmZlY3QueTtcbiAgbGV0IHNwZWVkID0gaW5wdXQuZWZmZWN0Lno7XG4gIGxldCBibGVlZCA9IGlucHV0LmVmZmVjdC53O1xuICBsZXQgcHVsc2VBID0gcG93KG1heCguMCwgc2luKGFsb25nICogMzEuMCAtIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDUuNCArIHBoYXNlKSksIDEwLjApO1xuICBsZXQgcHVsc2VCID0gcG93KG1heCguMCwgc2luKGFsb25nICogMTMuMCArIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDMuMSArIHBoYXNlICogMi43KSksIDE4LjApO1xuICBsZXQgbm9pc2UgPSBzaW4oYWxvbmcgKiA3MS4wICsgcGhhc2UgKiA4LjMpICogLjUgKyAuNTtcbiAgbGV0IHRocmVzaG9sZCA9IDEuMCAtIGNvdmVyYWdlO1xuICBsZXQgZWxlY3RyaWNpdHkgPSBzbW9vdGhzdGVwKHRocmVzaG9sZCwgdGhyZXNob2xkICsgLjE4LCBwdWxzZUEgKiAuNjUgKyBwdWxzZUIgKiAuNTUgKyBub2lzZSAqIC4xOCk7XG4gIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCguMDYsIC4yOCwgYWNyb3NzKTtcbiAgbGV0IGhhbG8gPSAxLjAgLSBzbW9vdGhzdGVwKC4xMiwgMS4wLCBhY3Jvc3MpO1xuICBsZXQgc3VyZ2UgPSBlbGVjdHJpY2l0eSAqIGludGVuc2l0eTtcbiAgbGV0IHB1bHNlID0gLjc4ICsgc2luKHNjZW5lLnRpbWUgKiBzcGVlZCAqIDIuMSArIHBoYXNlKSAqIC4xMyArIGVsZWN0cmljaXR5ICogLjI0O1xuICBsZXQgY2xvdWQgPSBoYWxvICogKC4xICsgc3VyZ2UgKiAoLjQyICsgYmxlZWQgKiAuNDQpKTtcbiAgbGV0IGhvdCA9IGlucHV0LmNvbG9yICogKHB1bHNlICsgY2xvdWQgKiAyLjEpICogaW5wdXQuZ2xvdyArIHZlYzNmKGNvcmUgKiBzdXJnZSAqIDEuMzUpO1xuICBsZXQgYWxwaGEgPSAoY29yZSAqICguNzIgKyBwdWxzZSAqIC4yKSArIGNsb3VkICsgaGFsbyAqIGJsZWVkICogKC4xOCArIGVsZWN0cmljaXR5ICogLjYyKSkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBlbnRyYW5jZU9mZnNldCA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgaWYgKGVudHJhbmNlUHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICBjb25zdCBzZWVkID0gTWF0aC5zaW4oaW5kZXggKiA5MS4xNyArIHBvaW50WzBdICogMzcuMiArIHBvaW50WzFdICogNTMuNyArIHogKiAyOS4xKSAqIDQzNzU4LjU0NTM7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZCAtIE1hdGguZmxvb3Ioc2VlZCk7XG4gICAgY29uc3QgYW5nbGUgPSByYW5kb20gKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCByYWRpdXMgPSAoaW5zdGFuY2UuZW50cmFuY2VNYWduaXR1ZGUgPz8gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogKDEgLSBlbnRyYW5jZUVhc2UpICogKC4zNSArIHJhbmRvbSAqIC43NSk7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cywgKHJhbmRvbSAtIC41KSAqIHJhZGl1cyAqIC41NV07XG4gIH07XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleCA9IDApOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZVgsIC1wb2ludFsxXSAqIHNjYWxlWSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgY29uc3QgZSA9IGVudHJhbmNlT2Zmc2V0KHBvaW50LCB6LCBpbmRleCk7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCkgKyBlWzBdLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCkgKyBlWzFdLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCkgKyBlWzJdXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBjb25zdCBhZGQgPSAoYTogVjMsIGI6IFYzLCBjOiBWMywgbm9ybWFsPzogVjMpID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsID8/IG5vcm1hbGl6ZShjcm9zcyhzdWIoYiwgYSksIHN1YihjLCBhKSkpO1xuICAgIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgICBdO1xuICAgIFthLGIsY10uZm9yRWFjaChwID0+IG91dHB1dC5wdXNoKHsgcCwgbiwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UsIGVmZmVjdCB9KSk7XG4gIH07XG4gIGNvbnN0IGZyb250ID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCBkZXB0aCAvIDIsIGluZGV4KSk7XG4gIGNvbnN0IGJhY2sgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIC1kZXB0aCAvIDIsIGluZGV4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCkpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGZyb250Lmxlbmd0aCAtIDE7IGkrKykgYWRkKGZyb250WzBdLCBmcm9udFtpXSwgZnJvbnRbaSArIDFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBiYWNrLmxlbmd0aCAtIDE7IGkrKykgYWRkKGJhY2tbMF0sIGJhY2tbaSArIDFdLCBiYWNrW2ldKTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGg7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW2ldLCBiYWNrW25leHRdKTtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbbmV4dF0sIGZyb250W25leHRdKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGVkZ2VNZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3Qgc2NhbGVYID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVYID8/IDEpO1xuICBjb25zdCBzY2FsZVkgPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVkgPz8gMSk7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCksIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKV07XG4gIH07XG4gIGNvbnN0IGV4cGxvZGUgPSAoYTogVjMsIGI6IFYzLCBpbmRleDogbnVtYmVyKTogW1YzLCBWM10gPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDAsIDEgLSBlbnRyYW5jZUVhc2UpO1xuICAgIGNvbnN0IGZhbGxQcm9ncmVzcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGluc3RhbmNlLmZhbGxQcm9ncmVzcyA/PyAwKSk7XG4gICAgaWYgKCFwcm9ncmVzcyAmJiAhZmFsbFByb2dyZXNzKSByZXR1cm4gW2EsIGJdO1xuICAgIGNvbnN0IG14ID0gKGFbMF0gKyBiWzBdKSAvIDIgLSAoaW5zdGFuY2UueCA/PyAwKSwgbXkgPSAoYVsxXSArIGJbMV0pIC8gMiAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QobXgsIG15KSB8fCAxO1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIGNvbnN0IHNwZWVkID0gbWFnbml0dWRlICogKC40NSArIChNYXRoLnNpbihpbmRleCAqIDkxLjE3KSAqIC41ICsgLjUpICogLjU1KTtcbiAgICBjb25zdCBkcmlmdCA9IHByb2dyZXNzICsgZmFsbFByb2dyZXNzICogLjM1O1xuICAgIGNvbnN0IGR4ID0gbXggLyBsZW5ndGggKiBkcmlmdCAqIHNwZWVkICogLjM1O1xuICAgIGNvbnN0IGR5ID0gbXkgLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkICsgcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqIC4xOCAtIGZhbGxQcm9ncmVzcyAqIGZhbGxQcm9ncmVzcyAqIC41NTtcbiAgICBjb25zdCBhbmdsZSA9IHByb2dyZXNzICogKGluZGV4ICUgMiA/IDEgOiAtMSkgKiAyLjQgKyBmYWxsUHJvZ3Jlc3MgKiAoaW5kZXggJSAyID8gMSA6IC0xKSAqIDEuMzU7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKHA6IFYzKTogVjMgPT4ge1xuICAgICAgY29uc3QgeCA9IHBbMF0gLSAoaW5zdGFuY2UueCA/PyAwKSwgeSA9IHBbMV0gLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICAgIHJldHVybiBbeCAqIE1hdGguY29zKGFuZ2xlKSAtIHkgKiBNYXRoLnNpbihhbmdsZSkgKyAoaW5zdGFuY2UueCA/PyAwKSArIGR4LCB4ICogTWF0aC5zaW4oYW5nbGUpICsgeSAqIE1hdGguY29zKGFuZ2xlKSArIChpbnN0YW5jZS55ID8/IDApICsgZHksIHBbMl1dO1xuICAgIH07XG4gICAgcmV0dXJuIFt0cmFuc2Zvcm0oYSksIHRyYW5zZm9ybShiKV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgbGV0IGRpc3RhbmNlID0gMDtcbiAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gIF07XG4gIGNvbnN0IGFkZExpbmUgPSAoYTogVjMsIGI6IFYzLCBwaGFzZTogbnVtYmVyLCB3aWR0aFNjYWxlID0gMSwgb3BhY2l0eSA9IDEpID0+IHtcbiAgICBbYSwgYl0gPSBleHBsb2RlKGEsIGIsIE1hdGguZmxvb3IoZGlzdGFuY2UgKiAxMDApICsgTWF0aC5mbG9vcihwaGFzZSAqIDEwKSk7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgLjAwMTtcbiAgICBjb25zdCB3aWR0aCA9IChpbnN0YW5jZS5saW5lVGhpY2tuZXNzID8/IDEpICogLjAxOCAqIHdpZHRoU2NhbGU7XG4gICAgY29uc3Qgb3ggPSAtZHkgLyBsZW5ndGggKiB3aWR0aCwgb3kgPSBkeCAvIGxlbmd0aCAqIHdpZHRoO1xuICAgIGNvbnN0IGEwOiBWMyA9IFthWzBdIC0gb3gsIGFbMV0gLSBveSwgYVsyXV0sIGExOiBWMyA9IFthWzBdICsgb3gsIGFbMV0gKyBveSwgYVsyXV07XG4gICAgY29uc3QgYjA6IFYzID0gW2JbMF0gLSBveCwgYlsxXSAtIG95LCBiWzJdXSwgYjE6IFYzID0gW2JbMF0gKyBveCwgYlsxXSArIG95LCBiWzJdXTtcbiAgICBjb25zdCBzdGFydCA9IGRpc3RhbmNlICogMi40LCBlbmQgPSAoZGlzdGFuY2UgKyBsZW5ndGgpICogMi40O1xuICAgIGNvbnN0IHB1c2ggPSAocDogVjMsIGFsb25nOiBudW1iZXIsIGFjcm9zczogbnVtYmVyKSA9PlxuICAgICAgb3V0cHV0LnB1c2goeyBwLCBuOiBbYWxvbmcsIGFjcm9zcywgcGhhc2VdLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiBvcGFjaXR5ICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UgKiAoMSArIE1hdGguc2luKChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiBNYXRoLlBJKSAqIChpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAyLjIpICogKDEgLSAoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogLjcpLCBlZmZlY3QgfSk7XG4gICAgcHVzaChhMCxzdGFydCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjAsZW5kLC0xKTtcbiAgICBwdXNoKGIwLGVuZCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjEsZW5kLDEpO1xuICAgIGRpc3RhbmNlICs9IGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgYWRkTG9vcCA9IChwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLCB6OiBudW1iZXIsIHBoYXNlOiBudW1iZXIpID0+XG4gICAgcG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCB6KSwgbW92ZShwb2ludHNbKGluZGV4ICsgMSkgJSBwb2ludHMubGVuZ3RoXSwgeiksIHBoYXNlICsgaW5kZXggKiAuNzMpKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIGRlcHRoIC8gMiwgLjMpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgLWRlcHRoIC8gMiwgMi4xKTtcbiAgc2hhcGUuaG9sZXM/LmZvckVhY2goKGhvbGUsIGluZGV4KSA9PiB7XG4gICAgYWRkTG9vcChob2xlLCBkZXB0aCAvIDIgKyAuMDAyLCAzLjcgKyBpbmRleCk7XG4gICAgYWRkTG9vcChob2xlLCAtZGVwdGggLyAyIC0gLjAwMiwgNS4yICsgaW5kZXgpO1xuICB9KTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCAtZGVwdGggLyAyKSwgbW92ZShwb2ludCwgZGVwdGggLyAyKSwgNi4xICsgaW5kZXgpKTtcbiAgY29uc3QgdHVuaW5nID0gbmVvblNoYXBlRW5lcmd5SW50ZXJuYWxUdW5pbmc7XG4gIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAgKiAoaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSk7XG4gIGNvbnN0IGJyYW5jaFN0cmVuZ3RoID0gKGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxKSAqIChpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIpO1xuICBjb25zdCByYW5kb20gPSAoc2VlZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnNpbihzZWVkICogMTIuOTg5OCArIHNoYXBlLnBvaW50cy5sZW5ndGggKiA3OC4yMzMpICogNDM3NTguNTQ1MztcbiAgICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgcm90YXRlZCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaWFuczogbnVtYmVyKTogTmVvblBvaW50ID0+IFtcbiAgICB4ICogTWF0aC5jb3MocmFkaWFucykgLSB5ICogTWF0aC5zaW4ocmFkaWFucyksXG4gICAgeCAqIE1hdGguc2luKHJhZGlhbnMpICsgeSAqIE1hdGguY29zKHJhZGlhbnMpLFxuICBdO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY3ljbGUgPSBNYXRoLmZsb29yKHRpbWUgKiB0dW5pbmcuYnJhbmNoQ3ljbGVSYXRlICsgaW5kZXggKiAuNjEpO1xuICAgIGNvbnN0IGFnZSA9IHRpbWUgKiB0dW5pbmcuYnJhbmNoQ3ljbGVSYXRlICsgaW5kZXggKiAuNjEgLSBjeWNsZTtcbiAgICBjb25zdCBzZWVkID0gY3ljbGUgKiAzNy4xICsgaW5kZXggKiAxMS43O1xuICAgIGNvbnN0IGFjdGl2ZUR1cmF0aW9uID0gdHVuaW5nLmFjdGl2ZUR1cmF0aW9uTWluICsgcmFuZG9tKHNlZWQgKyAxKSAqIE1hdGgubWF4KDAsIHR1bmluZy5hY3RpdmVEdXJhdGlvbk1heCAtIHR1bmluZy5hY3RpdmVEdXJhdGlvbk1pbik7XG4gICAgY29uc3QgaGF6ZUR1cmF0aW9uID0gTWF0aC5taW4oMSwgYWN0aXZlRHVyYXRpb24gKyB0dW5pbmcuaGF6ZUR1cmF0aW9uTWluICsgcmFuZG9tKHNlZWQgKyAyKSAqIE1hdGgubWF4KDAsIHR1bmluZy5oYXplRHVyYXRpb25NYXggLSB0dW5pbmcuaGF6ZUR1cmF0aW9uTWluKSk7XG4gICAgY29uc3QgYnJhbmNoQWN0aXZlID0gYWdlIDwgYWN0aXZlRHVyYXRpb247XG4gICAgY29uc3QgaGF6ZUFjdGl2ZSA9IGFnZSA8IGhhemVEdXJhdGlvbjtcbiAgICBpZiAoKCFicmFuY2hBY3RpdmUgJiYgIWhhemVBY3RpdmUpIHx8IHJhbmRvbShzZWVkICsgMykgPiBNYXRoLm1pbiguOSwgYnJhbmNoU3RyZW5ndGggKiB0dW5pbmcuYnJhbmNoQ2hhbmNlU2NhbGUpKSByZXR1cm47XG4gICAgY29uc3QgbmV4dCA9IHNoYXBlLnBvaW50c1soaW5kZXggKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGhdO1xuICAgIGNvbnN0IHQgPSAuMTYgKyByYW5kb20oc2VlZCArIDQpICogLjY4O1xuICAgIGNvbnN0IGJhc2U6IE5lb25Qb2ludCA9IFtwb2ludFswXSArIChuZXh0WzBdIC0gcG9pbnRbMF0pICogdCwgcG9pbnRbMV0gKyAobmV4dFsxXSAtIHBvaW50WzFdKSAqIHRdO1xuICAgIGNvbnN0IHR4ID0gbmV4dFswXSAtIHBvaW50WzBdLCB0eSA9IG5leHRbMV0gLSBwb2ludFsxXSwgdGwgPSBNYXRoLmh5cG90KHR4LCB0eSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSByYW5kb20oc2VlZCArIDUpID4gLjUgPyAxIDogLTE7XG4gICAgY29uc3QgcGVycGVuZGljdWxhcjogTmVvblBvaW50ID0gWy10eSAvIHRsICogZGlyZWN0aW9uLCB0eCAvIHRsICogZGlyZWN0aW9uXTtcbiAgICBjb25zdCBmaXJzdEppdHRlciA9IChyYW5kb20oc2VlZCArIDYpICogdHVuaW5nLmJyYW5jaE5vcm1hbEppdHRlckRlZ3JlZXMpICogTWF0aC5QSSAvIDE4MCAqIChyYW5kb20oc2VlZCArIDcpID4gLjUgPyAxIDogLTEpO1xuICAgIGxldCBoZWFkaW5nID0gcm90YXRlZChwZXJwZW5kaWN1bGFyWzBdLCBwZXJwZW5kaWN1bGFyWzFdLCBmaXJzdEppdHRlcik7XG4gICAgY29uc3Qgc2VnbWVudENvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0dW5pbmcuYnJhbmNoU2VnbWVudHNNaW4gKyByYW5kb20oc2VlZCArIDgpICogTWF0aC5tYXgoMCwgdHVuaW5nLmJyYW5jaFNlZ21lbnRzTWF4IC0gdHVuaW5nLmJyYW5jaFNlZ21lbnRzTWluKSkpO1xuICAgIGNvbnN0IHBvaW50czogTmVvblBvaW50W10gPSBbYmFzZV07XG4gICAgZm9yIChsZXQgc2VnbWVudCA9IDA7IHNlZ21lbnQgPCBzZWdtZW50Q291bnQ7IHNlZ21lbnQrKykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdHVuaW5nLmJyYW5jaExlbmd0aE1pbiArIHJhbmRvbShzZWVkICsgMTAgKyBzZWdtZW50KSAqIE1hdGgubWF4KDAsIHR1bmluZy5icmFuY2hMZW5ndGhNYXggLSB0dW5pbmcuYnJhbmNoTGVuZ3RoTWluKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIHBvaW50cy5wdXNoKFtwcmV2aW91c1swXSArIGhlYWRpbmdbMF0gKiBsZW5ndGgsIHByZXZpb3VzWzFdICsgaGVhZGluZ1sxXSAqIGxlbmd0aF0pO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKHR1bmluZy5icmFuY2hUdXJuTWluRGVncmVlcyArIHJhbmRvbShzZWVkICsgMjAgKyBzZWdtZW50KSAqIE1hdGgubWF4KDAsIHR1bmluZy5icmFuY2hUdXJuTWF4RGVncmVlcyAtIHR1bmluZy5icmFuY2hUdXJuTWluRGVncmVlcykpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGhlYWRpbmcgPSByb3RhdGVkKGhlYWRpbmdbMF0sIGhlYWRpbmdbMV0sIG9mZnNldCAqIChyYW5kb20oc2VlZCArIDMwICsgc2VnbWVudCkgPiAuNSA/IDEgOiAtMSkpO1xuICAgIH1cbiAgICBpZiAoaGF6ZUFjdGl2ZSkge1xuICAgICAgY29uc3QgZmFkZSA9IDEgLSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgLyBNYXRoLm1heCguMDAxLCBoYXplRHVyYXRpb24gLSBhY3RpdmVEdXJhdGlvbik7XG4gICAgICBjb25zdCBkcmlmdCA9IE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAqIHR1bmluZy5oYXplRHJpZnQ7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHBvaW50c1tzZWdtZW50ICsgMV07XG4gICAgICAgIGNvbnN0IGhhemVTdGFydDogTmVvblBvaW50ID0gW3N0YXJ0WzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBzdGFydFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGNvbnN0IGhhemVFbmQ6IE5lb25Qb2ludCA9IFtlbmRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIGVuZFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGFkZExpbmUobW92ZShoYXplU3RhcnQsIGRlcHRoIC8gMiArIC4wMDIpLCBtb3ZlKGhhemVFbmQsIGRlcHRoIC8gMiArIC4wMDIpLCAzMSArIHNlZWQgKyBzZWdtZW50LCB0dW5pbmcuaGF6ZVdpZHRoU2NhbGUsIGZhZGUgKiB0dW5pbmcuaGF6ZU9wYWNpdHkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChicmFuY2hBY3RpdmUpIHtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgYWRkTGluZShtb3ZlKHN0YXJ0LCBkZXB0aCAvIDIgKyAuMDA2KSwgbW92ZShwb2ludHNbc2VnbWVudCArIDFdLCBkZXB0aCAvIDIgKyAuMDA2KSwgMTEgKyBzZWVkICsgc2VnbWVudCwgdHVuaW5nLmJyYW5jaFdpZHRoU2NhbGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjbGluZVBpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNkZXB0aDogR1BVVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAjbGFiZWxMYXllcjogSFRNTERpdkVsZW1lbnQ7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgcGFyZW50ID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCAmJiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0aGlzLiNsYWJlbExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLiNsYWJlbExheWVyLmNsYXNzTmFtZSA9IFwibmVvbi1zaGFwZS1sYWJlbC1sYXllclwiO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwgeyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGluc2V0OlwiMFwiLCBwb2ludGVyRXZlbnRzOlwibm9uZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiIH0pO1xuICAgIHBhcmVudD8uYXBwZW5kKHRoaXMuI2xhYmVsTGF5ZXIpO1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IGV4dHJ1ZGVkIHNoYXBlIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiLCBjdWxsTW9kZTogXCJiYWNrXCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IGZhbHNlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jbGluZVBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwibGluZUZyYWdtZW50XCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgICB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IHRydWUsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IHNoYXBlIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGluc3RhbmNlcy5mbGF0TWFwKG1lc2gpO1xuICAgIGNvbnN0IGVkZ2VzID0gaW5zdGFuY2VzLmZsYXRNYXAoZWRnZU1lc2gpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgY29uc3QgZWRnZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGVkZ2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBkYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGVkZ2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZWRnZURhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGNvbnN0IGVkZ2VCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBlZGdlRGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmZmVyLCAwLCBkYXRhKTtcbiAgICBpZiAoZWRnZURhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihlZGdlQnVmZmVyLCAwLCBlZGdlRGF0YSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCA1LCBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIDBdKSk7XG4gICAgY29uc3QgYmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBsaW5lQmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNsaW5lUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7IHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSwgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLCBzdG9yZU9wOiBcInN0b3JlXCIgfV0sXG4gICAgICBkZXB0aFN0ZW5jaWxBdHRhY2htZW50OiB7IHZpZXc6IHRoaXMuI2RlcHRoIS5jcmVhdGVWaWV3KCksIGRlcHRoQ2xlYXJWYWx1ZTogMSwgZGVwdGhMb2FkT3A6IFwiY2xlYXJcIiwgZGVwdGhTdG9yZU9wOiBcInN0b3JlXCIgfSxcbiAgICB9KTtcbiAgICBpZiAodmVydGljZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBiaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpOyBwYXNzLmRyYXcodmVydGljZXMubGVuZ3RoKTsgfVxuICAgIGlmIChlZGdlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNsaW5lUGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBsaW5lQmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgZWRnZUJ1ZmZlcik7IHBhc3MuZHJhdyhlZGdlcy5sZW5ndGgpOyB9XG4gICAgcGFzcy5lbmQoKTsgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgdGhpcy4jcmVuZGVyTGFiZWxzKGluc3RhbmNlcyk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUub25TdWJtaXR0ZWRXb3JrRG9uZSgpLnRoZW4oKCkgPT4geyB2ZXJ0ZXhCdWZmZXIuZGVzdHJveSgpOyBlZGdlQnVmZmVyLmRlc3Ryb3koKTsgfSk7XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7IHRoaXMuI2xhYmVsTGF5ZXIucmVtb3ZlKCk7IHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7IHRoaXMuI3NjZW5lQnVmZmVyLmRlc3Ryb3koKTsgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTsgfVxuICAjcmVuZGVyTGFiZWxzKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwge1xuICAgICAgbGVmdDogYCR7dGhpcy5jYW52YXMub2Zmc2V0TGVmdH1weGAsXG4gICAgICB0b3A6IGAke3RoaXMuY2FudmFzLm9mZnNldFRvcH1weGAsXG4gICAgICByaWdodDogXCJhdXRvXCIsXG4gICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgd2lkdGg6IGAke3RoaXMuY2FudmFzLmNsaWVudFdpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgICB0aGlzLiNsYWJlbExheWVyLnJlcGxhY2VDaGlsZHJlbiguLi5pbnN0YW5jZXMuZmxhdE1hcChpbnN0YW5jZSA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLmxhYmVsPy50ZXh0IHx8IChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpIDw9IDApIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgICAgIGNvbnN0IHggPSA1MCArIChpbnN0YW5jZS54ID8/IDApICogNDAgLyAodGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgeSA9IDUwIC0gKGluc3RhbmNlLnkgPz8gMCkgKiA0MDtcbiAgICAgIGNvbnN0IHNoYXBlUmFkaXVzID0gc2NhbGUgKiB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiAuMjtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNoYXBlUmFkaXVzICsgKGluc3RhbmNlLmxhYmVsLm9mZnNldCA/PyA4KSArIChpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOCkgKiAuNTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5zdGFuY2UubGFiZWwucG9zaXRpb24gPz8gXCJhYm92ZVwiO1xuICAgICAgbGV0IHR4ID0gMCwgdHkgPSAwO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImFib3ZlXCIpIHR5ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJiZWxvd1wiKSB0eSA9IG9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHR4ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB0eCA9IG9mZnNldDtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnN0YW5jZS5sYWJlbC50ZXh0O1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDpgJHt4fSVgLCB0b3A6YCR7eX0lYCwgdHJhbnNmb3JtOmB0cmFuc2xhdGUoY2FsYygtNTAlICsgJHt0eH1weCksY2FsYygtNTAlICsgJHt0eX1weCkpYCxcbiAgICAgICAgY29sb3I6aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3IsIGZvbnRGYW1pbHk6aW5zdGFuY2UubGFiZWwuZm9udEZhbWlseSA/PyBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIGZvbnRTaXplOmAke2luc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4fXB4YCwgZm9udFdlaWdodDpTdHJpbmcoaW5zdGFuY2UubGFiZWwuZm9udFdlaWdodCA/PyA2MDApLFxuICAgICAgICB0ZXh0U2hhZG93OmAwIDAgNXB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9LDAgMCAxNHB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9YCwgd2hpdGVTcGFjZTpcIm5vd3JhcFwiLFxuICAgICAgICBvcGFjaXR5OlN0cmluZyhpbnN0YW5jZS5vcGFjaXR5ID8/IDEpLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW2VsZW1lbnRdO1xuICAgIH0pKTtcbiAgfVxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLiNsb2dpY2FsU2l6ZTtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQgfHwgIXRoaXMuI2RlcHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLiNkZXB0aCAmJiB0aGlzLmNhbnZhcy53aWR0aCA9PT0gd2lkdGggJiYgdGhpcy5jYW52YXMuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSwgTmVvblNoYXBlTGFiZWwgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGVudW0gTmVvblNoYXBlRGlzcG9zYWwge1xuICBGYWRlT3V0ID0gXCJmYWRlT3V0XCIsXG4gIERpc2FwcGVhciA9IFwiZGlzYXBwZWFyXCIsXG4gIEV4cGxvZGUgPSBcImV4cGxvZGVcIixcbiAgQnVybiA9IFwiYnVyblwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZVZlY3RvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUltcGFjdCB7XG4gIGRpcmVjdGlvbjogTmVvblNoYXBlVmVjdG9yO1xuICBtYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVBY3Rvck9wdGlvbnMge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgdmVsb2NpdHk/OiBQYXJ0aWFsPE5lb25TaGFwZVZlY3Rvcj47XG4gIHNjYWxlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw/OiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbj86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uU2hhcGVBY3RvciB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICB2ZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yO1xuICBzY2FsZTogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw6IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlOiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb246IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU6IG51bWJlcjtcbiAgcm90YXRpb25YID0gMDtcbiAgcm90YXRpb25ZID0gMDtcbiAgcm90YXRpb25aID0gMDtcbiAgZGlzcG9zZWQgPSBmYWxzZTtcbiAgI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAjZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICNpbXBhY3RWZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG4gICNpbXBhY3RSb3RhdGlvbjogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblNoYXBlQWN0b3JPcHRpb25zKSB7XG4gICAgdGhpcy5zaGFwZSA9IG9wdGlvbnMuc2hhcGU7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54ID8/IDA7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55ID8/IDA7XG4gICAgdGhpcy56ID0gb3B0aW9ucy56ID8/IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogb3B0aW9ucy52ZWxvY2l0eT8ueCA/PyAwLCB5OiBvcHRpb25zLnZlbG9jaXR5Py55ID8/IDAgfTtcbiAgICB0aGlzLnNjYWxlID0gb3B0aW9ucy5zY2FsZSA/PyAxO1xuICAgIHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZGlzcG9zYWwgPSBvcHRpb25zLmRpc3Bvc2FsID8/IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQ7XG4gICAgdGhpcy5leHBsb2RlTWFnbml0dWRlID0gb3B0aW9ucy5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBvcHRpb25zLmVudHJhbmNlRHVyYXRpb24gPz8gLjQ1O1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBvcHRpb25zLmVudHJhbmNlTWFnbml0dWRlID8/IC41NTtcbiAgfVxuXG4gIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlciwgeiA9IHRoaXMueik6IHRoaXMge1xuICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRWZWxvY2l0eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IHg7IHRoaXMudmVsb2NpdHkueSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbXBhY3QoeyBkaXJlY3Rpb24sIG1hZ25pdHVkZSB9OiBOZW9uU2hhcGVJbXBhY3QpOiB0aGlzIHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgICBjb25zdCB4ID0gZGlyZWN0aW9uLnggLyBsZW5ndGgsIHkgPSBkaXJlY3Rpb24ueSAvIGxlbmd0aDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICs9IHggKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSArPSB5ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKz0geSAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgLT0geCAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzcG9zZShtb2RlID0gdGhpcy5kaXNwb3NhbCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zYWwgPSBtb2RlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIgPyAxIDogLjAwMDE7XG4gICAgaWYgKG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhcikgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbnRlcihkdXJhdGlvbiA9IHRoaXMuZW50cmFuY2VEdXJhdGlvbiwgbWFnbml0dWRlID0gdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSk6IHRoaXMge1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IE1hdGgubWF4KC4wMDEsIGR1cmF0aW9uKTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gbWFnbml0dWRlO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnZW5lcmF0ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gKHRoaXMudmVsb2NpdHkueCArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LngpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSAodGhpcy52ZWxvY2l0eS55ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblggKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWSArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICogZGVsdGFTZWNvbmRzO1xuICAgIGNvbnN0IGRhbXBpbmcgPSBNYXRoLmV4cCgtNyAqIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICo9IGRhbXBpbmc7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICo9IGRhbXBpbmc7XG4gICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPiAwICYmICF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyAuODUgOiB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5CdXJuID8gMi44NSA6IC41NTtcbiAgICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNkaXNwb3NhbFByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gZHVyYXRpb24pO1xuICAgICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPj0gMSkgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLiNlbnRyYW5jZVByb2dyZXNzIDwgMSkgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyB0aGlzLmVudHJhbmNlRHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICAgIGNvbnN0IGZhZGUgPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0ID8gMSAtIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAxO1xuICAgIGNvbnN0IGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSA9IHtcbiAgICAgIHNoYXBlOiB0aGlzLnNoYXBlLCB4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56LCBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIHJvdGF0aW9uWDogdGhpcy5yb3RhdGlvblgsIHJvdGF0aW9uWTogdGhpcy5yb3RhdGlvblksIHJvdGF0aW9uWjogdGhpcy5yb3RhdGlvblosXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCwgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IHRoaXMuZGlzcG9zZWQgPyAwIDogZmFkZSxcbiAgICAgIGVudHJhbmNlUHJvZ3Jlc3M6IHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MsXG4gICAgICBlbnRyYW5jZU1hZ25pdHVkZTogdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogdGhpcy5leHBsb2RlTWFnbml0dWRlLFxuICAgICAgLi4ub3ZlcnJpZGVzLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkJ1cm4gPyB0aGlzLmJ1cm5SZW5kZXJJbnN0YW5jZShpbnN0YW5jZSkgOiBpbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVyblJlbmRlckluc3RhbmNlKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MpKTtcbiAgICBjb25zdCBoZWF0RW5kID0gLjA4O1xuICAgIGNvbnN0IGhvdEVuZCA9IC40MztcbiAgICBjb25zdCBhc2hFbmQgPSAuNjk7XG4gICAgY29uc3QgZmFsbFQgPSBNYXRoLm1heCgwLCAocHJvZ3Jlc3MgLSBhc2hFbmQpIC8gTWF0aC5tYXgoLjAwMSwgMSAtIGFzaEVuZCkpO1xuICAgIGNvbnN0IGNvb2xUID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKHByb2dyZXNzIC0gaG90RW5kKSAvIE1hdGgubWF4KC4wMDEsIGFzaEVuZCAtIGhvdEVuZCkpKTtcbiAgICBjb25zdCBjb2xvciA9IG1peEhleChcIiNmZjRhMTRcIiwgXCIjMmIyZDJjXCIsIGNvb2xUKTtcbiAgICBjb25zdCBoZWF0VCA9IE1hdGgubWluKDEsIHByb2dyZXNzIC8gaGVhdEVuZCk7XG4gICAgY29uc3QgZ2xvdyA9ICgxIC0gY29vbFQpICogKDEuNCArIGhlYXRUICogMi4yKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW5zdGFuY2UsXG4gICAgICBjb2xvcixcbiAgICAgIGdsb3csXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDAsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogMCxcbiAgICAgIGVuZXJneVNwZWVkOiAwLFxuICAgICAgZW5lcmd5QmxlZWQ6IDAsXG4gICAgICBvcGFjaXR5OiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqICgxIC0gZmFsbFQgKiAuOTUpLFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogTWF0aC5tYXgoLjE4LCB0aGlzLmV4cGxvZGVNYWduaXR1ZGUgKiAuNDUpLFxuICAgICAgZmFsbFByb2dyZXNzOiBmYWxsVCxcbiAgICB9O1xuICB9XG59XG5cbmNvbnN0IGhleENoYW5uZWwgPSAodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpO1xufTtcblxuY29uc3QgbWl4SGV4ID0gKGZyb206IHN0cmluZywgdG86IHN0cmluZywgcHJvZ3Jlc3M6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwcm9ncmVzcykpO1xuICBjb25zdCBjaGFubmVscyA9IFswLCAyLCA0XS5tYXAoaW5kZXggPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5yb3VuZChoZXhDaGFubmVsKGZyb20sIGluZGV4KSArIChoZXhDaGFubmVsKHRvLCBpbmRleCkgLSBoZXhDaGFubmVsKGZyb20sIGluZGV4KSkgKiB0KTtcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfSk7XG4gIHJldHVybiBgIyR7Y2hhbm5lbHMuam9pbihcIlwiKX1gO1xufTtcbiIsICJleHBvcnQgdHlwZSBOZW9uUHJpbWl0aXZlU2hhcGUgPSBcImNpcmNsZVwiIHwgXCJib2x0XCIgfCBcIm9yYlwiIHwgXCJyaW5nXCIgfCBcInNwYXJrXCIgfCBcImRpYW1vbmRcIiB8IFwicGVudGFnb25cIiB8IFwibGluZVwiIHwgXCJhcmNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJpbWl0aXZlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I/OiBzdHJpbmc7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgdGV4dHVyZT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aD86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIGFyY1N0YXJ0PzogbnVtYmVyO1xuICBhcmNFbmQ/OiBudW1iZXI7XG4gIHNoYXBlPzogTmVvblByaW1pdGl2ZVNoYXBlO1xufVxuXG5jb25zdCBtYXhQcmltaXRpdmVzID0gMTAyNDtcbmNvbnN0IGZsb2F0c1BlclByaW1pdGl2ZSA9IDIwO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovIGBcbnN0cnVjdCBTY2VuZSB7IHJlc29sdXRpb246IHZlYzJmLCBjb3VudDogZjMyLCB0aW1lOiBmMzIgfVxuc3RydWN0IFByaW1pdGl2ZSB7XG4gIHBvc2l0aW9uOiB2ZWMyZixcbiAgc2l6ZTogdmVjMmYsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBnbG93OiBmMzIsXG4gIGludGVuc2l0eTogZjMyLFxuICBzaGFwZTogZjMyLFxuICB0ZXh0dXJlOiBmMzIsXG4gIHJpbUludGVuc2l0eTogZjMyLFxuICBzaGFkb3dTdHJlbmd0aDogZjMyLFxuICBwYWRkaW5nOiB2ZWMyZixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBpdGVtczogYXJyYXk8UHJpbWl0aXZlPjtcblxuc3RydWN0IFZlcnRleE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBpbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDQpIHNoYXBlOiBmMzIsXG4gIEBsb2NhdGlvbig1KSBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbig2KSB0ZXh0dXJlOiBmMzIsXG4gIEBsb2NhdGlvbig3KSByaW1JbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDgpIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG59XG5cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZlcnRleDogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gVmVydGV4T3V0cHV0IHtcbiAgdmFyIGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBpdGVtID0gaXRlbXNbaW5zdGFuY2VdO1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZlcnRleF07XG4gIHZhciBwaXhlbE9mZnNldCA9IGxvY2FsICogaXRlbS5zaXplO1xuICBpZiAoaXRlbS50ZXh0dXJlICE9IDApIHtcbiAgICBsZXQgYyA9IGNvcyhpdGVtLnRleHR1cmUpO1xuICAgIGxldCBzID0gc2luKGl0ZW0udGV4dHVyZSk7XG4gICAgcGl4ZWxPZmZzZXQgPSB2ZWMyZihwaXhlbE9mZnNldC54ICogYyAtIHBpeGVsT2Zmc2V0LnkgKiBzLCBwaXhlbE9mZnNldC54ICogcyArIHBpeGVsT2Zmc2V0LnkgKiBjKTtcbiAgfVxuICBsZXQgcGl4ZWwgPSBpdGVtLnBvc2l0aW9uICsgcGl4ZWxPZmZzZXQ7XG4gIHZhciBvdXRwdXQ6IFZlcnRleE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYocGl4ZWwueCAvIHNjZW5lLnJlc29sdXRpb24ueCAqIDIgLSAxLCAxIC0gcGl4ZWwueSAvIHNjZW5lLnJlc29sdXRpb24ueSAqIDIsIDAsIDEpO1xuICBvdXRwdXQubG9jYWwgPSBsb2NhbDtcbiAgb3V0cHV0LmNvbG9yID0gaXRlbS5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpdGVtLmdsb3c7XG4gIG91dHB1dC5pbnRlbnNpdHkgPSBpdGVtLmludGVuc2l0eTtcbiAgb3V0cHV0LnNoYXBlID0gaXRlbS5zaGFwZTtcbiAgb3V0cHV0LnNlY29uZGFyeUNvbG9yID0gaXRlbS5zZWNvbmRhcnlDb2xvcjtcbiAgb3V0cHV0LnRleHR1cmUgPSBpdGVtLnRleHR1cmU7XG4gIG91dHB1dC5yaW1JbnRlbnNpdHkgPSBpdGVtLnJpbUludGVuc2l0eTtcbiAgb3V0cHV0LnNoYWRvd1N0cmVuZ3RoID0gaXRlbS5zaGFkb3dTdHJlbmd0aDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogVmVydGV4T3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBpZiAoaW5wdXQuc2hhcGUgPiA3LjUpIHtcbiAgICBsZXQgcmFkaXVzID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgICBsZXQgYW5nbGUgPSBhdGFuMihpbnB1dC5sb2NhbC55LCBpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYW5nbGUgPCBpbnB1dC5yaW1JbnRlbnNpdHkgfHwgYW5nbGUgPiBpbnB1dC5zaGFkb3dTdHJlbmd0aCB8fCByYWRpdXMgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBsaW5lRGlzdGFuY2UgPSBhYnMocmFkaXVzIC0gMC43OCk7XG4gICAgaWYgKGxpbmVEaXN0YW5jZSA+IDAuMTYpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjAxMiwgMC4wMzgsIGxpbmVEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjAyNSwgMC4xNiwgbGluZURpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBwdWxzZUEgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMjMuMCAtIHNjZW5lLnRpbWUgKiA4LjUpKSwgMTYuMCk7XG4gICAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAxMS4wICsgc2NlbmUudGltZSAqIDUuMyArIDEuNykpLCAyNC4wKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oYW5nbGUgKiA3MS4wICsgc2NlbmUudGltZSAqIDMuMSkgKiAwLjUgKyAwLjU7XG4gICAgbGV0IHN1cmdlID0gc21vb3Roc3RlcCgwLjcyLCAwLjk0LCBwdWxzZUEgKiAwLjcgKyBwdWxzZUIgKiAwLjY1ICsgZ3JhaW4gKiAwLjEyKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC44OCArIHN1cmdlICogMC42NSkgKyBoYWxvICogKDAuMjIgKyBzdXJnZSAqIDAuOSkpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiBzdXJnZSAqIDAuOSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA2LjUpIHtcbiAgICBsZXQgYWxvbmcgPSBpbnB1dC5sb2NhbC55O1xuICAgIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFjcm9zcyA+IDEuMCB8fCBhYnMoYWxvbmcpID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wOCwgMC4yNCwgYWNyb3NzKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMTIsIDEuMCwgYWNyb3NzKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmRGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgwLjcyLCAxLjAsIGFicyhhbG9uZykpO1xuICAgIGxldCB0cmF2ZWwgPSBwb3cobWF4KDAuMCwgc2luKGFsb25nICogMjQuMCAtIHNjZW5lLnRpbWUgKiA4LjAgKyBpbnB1dC50ZXh0dXJlKSksIDE0LjApO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjc1ICsgdHJhdmVsICogMC41KSArIGhhbG8gKiAoMC4yICsgdHJhdmVsICogMC41NSkpICogZW5kRmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogdHJhdmVsICogMC43NSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA1LjUpIHtcbiAgICAvLyBQZW50YWdvbiBTREZcbiAgICAvLyBsb2NhbCBpcyBpbiBbLTEsIDFdIHJhbmdlLiBMZXQncyBmaW5kIHBlbnRhZ29uIGRpc3RhbmNlLlxuICAgIGxldCBweCA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBsZXQgcHkgPSBpbnB1dC5sb2NhbC55O1xuICAgIC8vIFBlbnRhZ29uIGNvbnN0YW50cyBmb3IgdmVydGljZXMvZWRnZXNcbiAgICBsZXQgayA9IHZlYzNmKC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDEuMzc2MzgxOTIpOyAvLyBjb3Mvc2luIG9mIDcyLCBwbHVzIGhlaWdodCBmYWN0b3JcbiAgICAvLyBQcm9qZWN0L01pcnJvciBhY3Jvc3MgdGhlIHN5bW1ldHJ5IGF4ZXMgb2YgcmVndWxhciBwZW50YWdvblxuICAgIHZhciBwID0gdmVjMmYocHgsIHB5KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKC1rLngsIGsueSksIHApLCAwKSAqIHZlYzJmKC1rLngsIGsueSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZihrLngsIGsueSksIHApLCAwKSAqIHZlYzJmKGsueCwgay55KTtcbiAgICBwLnggPSBwLnggLSBjbGFtcChwLngsIC1rLnogKiAwLjUsIGsueiAqIDAuNSk7XG4gICAgbGV0IGQgPSBsZW5ndGgocCAtIHZlYzJmKDAsIDAuNzIpKSAqIHNpZ24ocC55IC0gMC43Mik7XG4gICAgLy8gTWFwIGQgdG8gYSBub3JtYWxpemVkIHJhZGl1cyBzY2FsZVxuICAgIGxldCBzY2FsZUQgPSBkICsgMC4zNTsgLy8gb2Zmc2V0IHBlbnRhZ29uIHRvIGZpdCBib3VuZHMgbmljZWx5XG4gICAgaWYgKHNjYWxlRCA+IDAuOCkgeyBkaXNjYXJkOyB9XG4gICAgXG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjUsIDAuNjUsIHNjYWxlRCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC40NSwgMC41Mywgc2NhbGVEKSAqICgxIC0gc21vb3Roc3RlcCgwLjY1LCAwLjc1LCBzY2FsZUQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKC0wLjIsIDAuNSwgc2NhbGVEKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjU1LCAwLjgsIHNjYWxlRCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zOCArIGJvcmRlciAqIDEuMzU7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS43NSArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjQ1KSAqIGZpbGwgKiAwLjM1O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjQ7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDQuNSkge1xuICAgIGxldCBkID0gYWJzKGlucHV0LmxvY2FsLngpICsgYWJzKGlucHV0LmxvY2FsLnkpO1xuICAgIGlmIChkID4gMS4wOCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjc4LCAwLjkyLCBkKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjcyLCAwLjgyLCBkKSAqICgxIC0gc21vb3Roc3RlcCgwLjkyLCAxLjAyLCBkKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgwLjAsIDAuNzgsIGQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuODIsIDEuMDgsIGQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzUgKyBib3JkZXIgKiAxLjI7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNiArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjUpICogZmlsbCAqIDAuMzg7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMzU7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDEuNSkge1xuICAgIGxldCByMiA9IGRvdChpbnB1dC5sb2NhbCwgaW5wdXQubG9jYWwpO1xuICAgIGlmIChyMiA+IDEpIHsgZGlzY2FyZDsgfVxuICAgIGxldCB6ID0gc3FydChtYXgoMCwgMSAtIHIyKSk7XG4gICAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZSh2ZWMzZihpbnB1dC5sb2NhbC54LCAtaW5wdXQubG9jYWwueSwgeikpO1xuICAgIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtMC41NSwgLTAuNywgMC45KSk7XG4gICAgbGV0IGRpZmZ1c2UgPSBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKTtcbiAgICBsZXQgcmltID0gcG93KDEgLSB6LCAyLjIpICogaW5wdXQucmltSW50ZW5zaXR5O1xuICAgIGxldCBzaGFkb3cgPSBtaXgoMSAtIGlucHV0LnNoYWRvd1N0cmVuZ3RoLCAxLCBzbW9vdGhzdGVwKC0wLjY1LCAwLjQ1LCBkb3Qobm9ybWFsLnh5LCBsaWdodC54eSkpKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oaW5wdXQubG9jYWwueCAqIDIzICsgaW5wdXQubG9jYWwueSAqIDE3KSAqIHNpbihpbnB1dC5sb2NhbC55ICogMzEgLSBpbnB1dC5sb2NhbC54ICogMTEpO1xuICAgIGxldCB0ZXh0dXJlID0gMSArIGdyYWluICogaW5wdXQudGV4dHVyZSAqIDAuMjI7XG4gICAgbGV0IHNwZWN1bGFyID0gcG93KG1heChkb3QocmVmbGVjdCgtbGlnaHQsIG5vcm1hbCksIHZlYzNmKDAsMCwxKSksIDApLCAyOCkgKiAxLjg7XG4gICAgbGV0IGJvZHkgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGRpZmZ1c2UgKiAwLjggKyAwLjIpICogc2hhZG93ICogdGV4dHVyZTtcbiAgICBsZXQgaGFsbyA9IHBvdyhtYXgoMCwgMSAtIGxlbmd0aChpbnB1dC5sb2NhbCkpLCAwLjM1KSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHJnYiA9IGJvZHkgKiAoMC4zOCArIGRpZmZ1c2UgKiAwLjk1KSArIGlucHV0LmNvbG9yLnJnYiAqIHJpbSArIHZlYzNmKHNwZWN1bGFyKSArIGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiAqIGlucHV0LmludGVuc2l0eSwgMSk7XG4gIH1cbiAgdmFyIGRpc3RhbmNlID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgaWYgKGlucHV0LnNoYXBlID4gMy41KSB7XG4gICAgbGV0IGF4aXMgPSBtaW4oYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICAgIGxldCBhcm0gPSAxIC0gc21vb3Roc3RlcCgwLjA0LCAwLjE4LCBheGlzKTtcbiAgICBsZXQgZmFkZSA9IDEgLSBzbW9vdGhzdGVwKDAuMiwgMSwgbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKSk7XG4gICAgbGV0IGVuZXJneSA9IGFybSAqIGZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgYXJtKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAyLjUpIHtcbiAgICBsZXQgcmluZ0Rpc3RhbmNlID0gYWJzKGxlbmd0aChpbnB1dC5sb2NhbCkgLSAwLjYyKTtcbiAgICBsZXQgcmluZyA9IDEgLSBzbW9vdGhzdGVwKDAuMDU1LCAwLjE4LCByaW5nRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMTIsIDAuNDIsIHJpbmdEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5lcmd5ID0gKHJpbmcgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgcmluZykgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAwLjUpIHtcbiAgICBkaXN0YW5jZSA9IG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gIH1cbiAgbGV0IGNvcmUgPSAxIC0gc21vb3Roc3RlcCgwLjM4LCAwLjc2LCBkaXN0YW5jZSk7XG4gIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMywgMSwgZGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gIGxldCBlbmVyZ3kgPSAoY29yZSArIGhhbG8gKiAwLjU1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgbGV0IGNocm9tYXRpY0NvcmUgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIHBvdyhtYXgoY29yZSwgMCksIDIpKTtcbiAgbGV0IHJhdyA9IGNocm9tYXRpY0NvcmUgKiAoY29yZSAqIDEuMDUgKyBoYWxvICogMC40Mik7XG4gIGxldCByZ2IgPSByYXcgLyAodmVjM2YoMSkgKyByYXcgKiAwLjMyKTtcbiAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG59XG5gO1xuXG5mdW5jdGlvbiByZ2JhKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB2YWx1ZSA9IGhleC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgaWYgKCEvXlswLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHNpeC1kaWdpdCBoZXggY29sb3IsIHJlY2VpdmVkIFwiJHtoZXh9XCIuYCk7XG4gIHJldHVybiBbXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDAsIDIpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDIsIDQpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDQsIDYpLCAxNikgLyAyNTUsXG4gICAgMSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25QcmltaXRpdmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNwcmltaXRpdmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7IGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0gfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jcHJpbWl0aXZlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBtYXhQcmltaXRpdmVzICogZmxvYXRzUGVyUHJpbWl0aXZlICogNCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgfSk7XG4gICAgdGhpcy4jYmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfSxcbiAgICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciB9IH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uUHJpbWl0aXZlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNhbnZhcyBjb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10sIHRpbWVTZWNvbmRzID0gMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2aXNpYmxlID0gcHJpbWl0aXZlcy5zbGljZSgwLCBtYXhQcmltaXRpdmVzKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2aXNpYmxlLmxlbmd0aCAqIGZsb2F0c1BlclByaW1pdGl2ZSk7XG4gICAgdmlzaWJsZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJQcmltaXRpdmU7XG4gICAgICBkYXRhLnNldChbXG4gICAgICAgIGl0ZW0ueCwgaXRlbS55LCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCA/PyBpdGVtLndpZHRoLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uY29sb3IpLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uc2Vjb25kYXJ5Q29sb3IgPz8gaXRlbS5jb2xvciksXG4gICAgICAgIGl0ZW0uZ2xvdyA/PyAwLjUsXG4gICAgICAgIGl0ZW0uaW50ZW5zaXR5ID8/IDEsXG4gICAgICAgIGl0ZW0uc2hhcGUgPT09IFwiYXJjXCIgPyA4IDogaXRlbS5zaGFwZSA9PT0gXCJsaW5lXCIgPyA3IDogaXRlbS5zaGFwZSA9PT0gXCJwZW50YWdvblwiID8gNiA6IGl0ZW0uc2hhcGUgPT09IFwiZGlhbW9uZFwiID8gNSA6IGl0ZW0uc2hhcGUgPT09IFwic3BhcmtcIiA/IDQgOiBpdGVtLnNoYXBlID09PSBcInJpbmdcIiA/IDMgOiBpdGVtLnNoYXBlID09PSBcIm9yYlwiID8gMiA6IGl0ZW0uc2hhcGUgPT09IFwiYm9sdFwiID8gMSA6IDAsXG4gICAgICAgIGl0ZW0ucm90YXRpb24gPz8gaXRlbS50ZXh0dXJlID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjU3RhcnQgPz8gaXRlbS5yaW1JbnRlbnNpdHkgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNFbmQgPz8gaXRlbS5zaGFkb3dTdHJlbmd0aCA/PyAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgXSwgb2Zmc2V0KTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdmlzaWJsZS5sZW5ndGgsIHRpbWVTZWNvbmRzXSkpO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jcHJpbWl0aXZlQnVmZmVyLCAwLCBkYXRhKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDAuMDA2LCBnOiAwLjAwOSwgYjogMC4wMjUsIGE6IDAgfSxcbiAgICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgIH1dLFxuICAgIH0pO1xuICAgIGlmICh2aXNpYmxlLmxlbmd0aCkge1xuICAgICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kR3JvdXApO1xuICAgICAgcGFzcy5kcmF3KDYsIHZpc2libGUubGVuZ3RoKTtcbiAgICB9XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uID0gXCJmYWRlXCIgfCBcImV4cGFuZEZhZGVcIiB8IFwiaW1wbG9kZVwiIHwgXCJzcGFya0ZhZGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIGRldGFpbD86IG51bWJlcjtcbiAgdHVyYnVsZW5jZT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgY29yZUludGVuc2l0eT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBkaXNzaXBhdGlvblRpbWU/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uQWN0aW9uPzogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb247XG4gIGRyaWZ0WD86IG51bWJlcjtcbiAgZHJpZnRZPzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyO1xuICBhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25DbG91ZEJ1cnN0IGV4dGVuZHMgT21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcInhcIiB8IFwieVwiIHwgXCJzaXplXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbn1cblxudHlwZSBDbG91ZCA9IFJlcXVpcmVkPE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJjb3JlQ29sb3JcIj4+ICYgeyBjb3JlQ29sb3I6IHN0cmluZzsgYWdlOiBudW1iZXIgfTtcblxuY29uc3QgbWF4Q2xvdWRzID0gOTY7XG5jb25zdCBmbG9hdHNQZXJDbG91ZCA9IDI0O1xuXG5jb25zdCBkZWZhdWx0czogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz4gPSB7XG4gIGNvbG9yOiBcIiM2M2U4ZmZcIixcbiAgY29yZUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRpb246IDAsXG4gIHNpemU6IC4yNSxcbiAgZGV0YWlsOiA1LFxuICB0dXJidWxlbmNlOiAuNzUsXG4gIGdsb3c6IDQsXG4gIGNvcmVJbnRlbnNpdHk6IDEuNCxcbiAgcmltSW50ZW5zaXR5OiAuODUsXG4gIG9wYWNpdHk6IDEsXG4gIGRpc3NpcGF0aW9uVGltZTogLjcsXG4gIGRpc3NpcGF0aW9uQWN0aW9uOiBcImV4cGFuZEZhZGVcIixcbiAgZHJpZnRYOiAwLFxuICBkcmlmdFk6IDAsXG4gIHNlZWQ6IDAsXG4gIGFnZTogMCxcbn07XG5cbmNvbnN0IGhleCA9ICh2YWx1ZTogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgcmF3ID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIikucGFkRW5kKDYsIFwiMFwiKS5zbGljZSgwLCA2KTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuXG5leHBvcnQgY29uc3QgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yID0gKGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBbciwgZywgYl0gPSBoZXgoY29sb3IpO1xuICBjb25zdCBsaWZ0ID0gKGNoYW5uZWw6IG51bWJlcikgPT4gTWF0aC5yb3VuZCgoY2hhbm5lbCArICgxIC0gY2hhbm5lbCkgKiAuNzgpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICByZXR1cm4gYCMke2xpZnQocil9JHtsaWZ0KGcpfSR7bGlmdChiKX1gO1xufTtcblxuY29uc3QgYWN0aW9uVmFsdWUgPSAoYWN0aW9uOiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbik6IG51bWJlciA9PlxuICBhY3Rpb24gPT09IFwiZmFkZVwiID8gMCA6IGFjdGlvbiA9PT0gXCJleHBhbmRGYWRlXCIgPyAxIDogYWN0aW9uID09PSBcImltcGxvZGVcIiA/IDIgOiAzO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IENsb3VkIHtcbiAgcG9zOiB2ZWMyZixcbiAgdmVsb2NpdHk6IHZlYzJmLFxuICBhZ2U6IGYzMixcbiAgbGlmZTogZjMyLFxuICBzaXplOiBmMzIsXG4gIHJvdGF0aW9uOiBmMzIsXG4gIHNlZWQ6IGYzMixcbiAgYWN0aW9uOiBmMzIsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgY29yZTogdmVjNGYsXG4gIHR1bmluZzogdmVjNGYsXG59XG5zdHJ1Y3QgR2xvYmFscyB7XG4gIGFzcGVjdDogZjMyLFxuICB0aW1lOiBmMzIsXG4gIGNvdW50OiBmMzIsXG4gIGJhY2tncm91bmQ6IGYzMixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gZ2xvYmFsczogR2xvYmFscztcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gY2xvdWRzOiBhcnJheTxDbG91ZD47XG5cbmZuIGhhc2gocDogdmVjMmYpIC0+IGYzMiB7XG4gIHJldHVybiBmcmFjdChzaW4oZG90KHAsIHZlYzJmKDEyNy4xLCAzMTEuNykpKSAqIDQzNzU4LjU0NTMxMjMpO1xufVxuZm4gbm9pc2UocDogdmVjMmYpIC0+IGYzMiB7XG4gIGxldCBpID0gZmxvb3IocCk7XG4gIGxldCBmID0gZnJhY3QocCk7XG4gIGxldCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBtaXgobWl4KGhhc2goaSksIGhhc2goaSArIHZlYzJmKDEsMCkpLCB1LngpLCBtaXgoaGFzaChpICsgdmVjMmYoMCwxKSksIGhhc2goaSArIHZlYzJmKDEsMSkpLCB1LngpLCB1LnkpO1xufVxuZm4gZmJtKHA6IHZlYzJmLCBvY3RhdmVzOiBmMzIpIC0+IGYzMiB7XG4gIHZhciB2ID0gMC4wO1xuICB2YXIgYSA9IDAuNTtcbiAgdmFyIHEgPSBwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGlmIChmMzIoaSkgPj0gb2N0YXZlcykgeyBicmVhazsgfVxuICAgIHYgKz0gYSAqIG5vaXNlKHEpO1xuICAgIHEgPSBxICogMi4wMyArIHZlYzJmKDYuOSwgMy43KTtcbiAgICBhICo9IDAuNTI7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5mbiByb3RhdGUocDogdmVjMmYsIGE6IGYzMikgLT4gdmVjMmYge1xuICBsZXQgYyA9IGNvcyhhKTtcbiAgbGV0IHMgPSBzaW4oYSk7XG4gIHJldHVybiB2ZWMyZihwLnggKiBjIC0gcC55ICogcywgcC54ICogcyArIHAueSAqIGMpO1xufVxuc3RydWN0IE91dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBAaW50ZXJwb2xhdGUoZmxhdCkgaW5zdGFuY2U6IHUzMixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZpOiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBPdXQge1xuICBsZXQgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGMgPSBjbG91ZHNbaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBhY3Rpb25TY2FsZSA9IHNlbGVjdCgxLjAgKyBsaWZlVCAqIDEuODUsIDEuMCAtIGxpZmVUICogLjYyLCBjLmFjdGlvbiA+IDEuNSAmJiBjLmFjdGlvbiA8IDIuNSk7XG4gIGxldCByYWRpdXMgPSBtYXgoLjAwMSwgYy5zaXplICogYWN0aW9uU2NhbGUpICogMi4zNTtcbiAgdmFyIGNlbnRlciA9IGMucG9zICsgYy52ZWxvY2l0eSAqIGMuYWdlO1xuICBjZW50ZXIueCAqPSBnbG9iYWxzLmFzcGVjdDtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2aV07XG4gIGxldCBwID0gY2VudGVyICsgbG9jYWwgKiByYWRpdXM7XG4gIHZhciBvOiBPdXQ7XG4gIG8ucG9zaXRpb24gPSB2ZWM0ZihwLnggLyBnbG9iYWxzLmFzcGVjdCwgcC55LCAwLCAxKTtcbiAgby5sb2NhbCA9IGxvY2FsICogMi4zNTtcbiAgby5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICByZXR1cm4gbztcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGMgPSBjbG91ZHNbaW5wdXQuaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBsb2NhbCA9IHJvdGF0ZShpbnB1dC5sb2NhbCwgLWMucm90YXRpb24gLSBsaWZlVCAqIC40NSk7XG4gIGxldCByID0gbGVuZ3RoKGxvY2FsKTtcbiAgaWYgKHIgPj0gMi4zNSkgeyBkaXNjYXJkOyB9XG4gIGxldCBkZXRhaWwgPSBjbGFtcChjLnR1bmluZy54LCAxLjAsIDcuMCk7XG4gIGxldCB0dXJidWxlbmNlID0gYy50dW5pbmcueTtcbiAgbGV0IHdpc3B5ID0gZmJtKGxvY2FsICogKDEuNyArIGRldGFpbCAqIC4xNikgKyB2ZWMyZihjLnNlZWQsIGMuc2VlZCAqIC43MSkgKyBnbG9iYWxzLnRpbWUgKiB2ZWMyZiguMTYsIC4wOSkgKiB0dXJidWxlbmNlLCBtaW4oZGV0YWlsLCA0LjApKTtcbiAgbGV0IGNvcmUgPSBleHAoLXIgKiByICogKDEuMiArIGMudHVuaW5nLnogKiAuMjIpKTtcbiAgbGV0IHJpbSA9IGV4cCgtYWJzKHIgLSAuNzIpICogMy42KTtcbiAgbGV0IHNwYXJrID0gcG93KG1heCgwLjAsIHNpbih3aXNweSAqIDE2LjAgKyBjLnNlZWQgKyBnbG9iYWxzLnRpbWUgKiA5LjApKSwgMTQuMCkgKiBzZWxlY3QoMC4wLCAxLjAsIGMuYWN0aW9uID4gMi41KTtcbiAgbGV0IGRpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDEuNDUsIDIuMzUsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCByaW1EaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgyLjcsIDMuOCwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IGVkZ2VGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgxLjc1LCAyLjM1LCByKTtcbiAgbGV0IGRlbnNpdHkgPSAoY29yZSAqIC43MiArIHJpbSAqIC4yNCAqIHJpbURpc3NpcGF0ZSArIHdpc3B5ICogLjIyICsgc3BhcmsgKiAuNTUpICogZGlzc2lwYXRlICogYy50dW5pbmcudyAqIGVkZ2VGYWRlO1xuICBsZXQgaG90Q29yZSA9IGMuY29yZS5yZ2IgKiBjb3JlICogYy50dW5pbmcueiAqICgxLjAgKyBzcGFyayk7XG4gIGxldCBuZW9uUmltID0gYy5jb2xvci5yZ2IgKiAoZGVuc2l0eSAqICguNzUgKyBjLmNvbG9yLmEgKiAuMDgpICsgcmltICogcmltRGlzc2lwYXRlICogYy5jb2xvci5hICogLjA4KTtcbiAgbGV0IGdsb3cgPSBuZW9uUmltICsgaG90Q29yZSAqIGRlbnNpdHk7XG4gIHJldHVybiB2ZWM0ZihnbG93LCBjbGFtcChkZW5zaXR5ICogLjg1ICsgc3BhcmsgKiAuMjUsIDAuMCwgMS4wKSk7XG59YDtcblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0QWN0b3Ige1xuICBzZXR0aW5nczogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz47XG4gIGFnZSA9IDA7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzID0ge30pIHtcbiAgICB0aGlzLnNldHRpbmdzID0geyAuLi5kZWZhdWx0cywgLi4uc2V0dGluZ3MsIHNlZWQ6IHNldHRpbmdzLnNlZWQgPz8gTWF0aC5yYW5kb20oKSAqIDEwMDAgfTtcbiAgfVxuICB1cGRhdGUoZHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuYWdlICs9IGR0O1xuICAgIHJldHVybiB0aGlzLmFnZSA8IHRoaXMuc2V0dGluZ3MuZGlzc2lwYXRpb25UaW1lO1xuICB9XG4gIHJlbmRlckluc3RhbmNlKCk6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3MsIHNlZWQ6IHRoaXMuc2V0dGluZ3Muc2VlZCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjYnVmZmVyOiBHUFVCdWZmZXI7XG4gICNnbG9iYWxzOiBHUFVCdWZmZXI7XG4gICNiaW5kOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgcHJvY2VkdXJhbCBjbG91ZCB2b2x1bWUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNnbG9iYWxzID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCAqIDQsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYmluZCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW1xuICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2dsb2JhbHMgfSB9LFxuICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2J1ZmZlciB9IH0sXG4gICAgXSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkNsb3VkQnVyc3RSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3RvcnkgY2xvdWQgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihjbG91ZHM6IHJlYWRvbmx5IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3NbXSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgcGFja2VkID0gbmV3IEZsb2F0MzJBcnJheShtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCk7XG4gICAgY2xvdWRzLnNsaWNlKDAsIG1heENsb3VkcykuZm9yRWFjaCgoY2xvdWQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjID0geyAuLi5kZWZhdWx0cywgLi4uY2xvdWQgfTtcbiAgICAgIGNvbnN0IGNvbG9yID0gaGV4KGMuY29sb3IpLCBjb3JlID0gaGV4KGMuY29yZUNvbG9yKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyQ2xvdWQ7XG4gICAgICBwYWNrZWQuc2V0KFtjLngsIGMueSwgYy5kcmlmdFgsIGMuZHJpZnRZLCBjLmFnZSA/PyAwLCBjLmRpc3NpcGF0aW9uVGltZSwgYy5zaXplLCBjLnJvdGF0aW9uLCBjLnNlZWQsIGFjdGlvblZhbHVlKGMuZGlzc2lwYXRpb25BY3Rpb24pLCAwLCAwXSwgb2Zmc2V0KTtcbiAgICAgIHBhY2tlZC5zZXQoW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGMuZ2xvdywgY29yZVswXSwgY29yZVsxXSwgY29yZVsyXSwgYy5jb3JlSW50ZW5zaXR5LCBjLmRldGFpbCwgYy50dXJidWxlbmNlLCBjLnJpbUludGVuc2l0eSwgYy5vcGFjaXR5XSwgb2Zmc2V0ICsgMTIpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2J1ZmZlciwgMCwgcGFja2VkKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNnbG9iYWxzLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgdGltZVNlY29uZHMsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcyksIDBdKSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHsgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LFxuICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgfV0gfSk7XG4gICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZCk7XG4gICAgcGFzcy5kcmF3KDYsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcykpO1xuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICBtYXBUb3BEb3duQ2xvdWQoY2xvdWQ6IE5lb25Ub3BEb3duQ2xvdWRCdXJzdCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIGNvbnN0IGFzcGVjdCA9IGxvZ2ljYWxXaWR0aCAvIGxvZ2ljYWxIZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogKGNsb3VkLnggLyBsb2dpY2FsV2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBjbG91ZC55IC8gbG9naWNhbEhlaWdodCkgKiAyLjUsXG4gICAgICBzaXplOiBjbG91ZC5zaXplIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICAgIGRyaWZ0WDogKGNsb3VkLmRyaWZ0WCA/PyAwKSAvIGxvZ2ljYWxXaWR0aCAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIGRyaWZ0WTogLShjbG91ZC5kcmlmdFkgPz8gMCkgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy4jYnVmZmVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLiNnbG9iYWxzLmRlc3Ryb3koKTtcbiAgICBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgTmVvblByaW1pdGl2ZVJlbmRlcmVyLCB0eXBlIE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyLCB0eXBlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCB9IGZyb20gXCIuL2Nsb3VkLWJ1cnN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TaGFwZSBleHRlbmRzIE9taXQ8TmVvblNoYXBlSW5zdGFuY2UsIFwieFwiIHwgXCJ5XCIgfCBcInNjYWxlXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNjZW5lIHtcbiAgcHJpbWl0aXZlcz86IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXTtcbiAgY2xvdWRzPzogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W107XG4gIHNoYXBlcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVJlbmRlcmVyO1xuICAjY2xvdWRzOiBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyO1xuICAjc2hhcGVzOiBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcjtcbiAgI3dpZHRoOiBudW1iZXI7XG4gICNoZWlnaHQ6IG51bWJlcjtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7IHRoaXMuI3dpZHRoID0gd2lkdGg7IHRoaXMuI2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNwcmltaXRpdmVzID0gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNjbG91ZHMgPSBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNzaGFwZXMgPSBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeSB0b3AtZG93biBzY2VuZXMuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQsIGxvZ2ljYWxXaWR0aCwgbG9naWNhbEhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2NlbmU6IE5lb25Ub3BEb3duU2NlbmUsIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKTtcbiAgICB0aGlzLiNwcmltaXRpdmVzLnJlbmRlcihbLi4uKHNjZW5lLnByaW1pdGl2ZXMgPz8gW10pXSwgdGltZVNlY29uZHMsIGZhbHNlLCB0YXJnZXQpO1xuICAgIGNvbnN0IGNsb3VkcyA9IHNjZW5lLmNsb3VkcyA/PyBbXTtcbiAgICBjb25zdCBhc3BlY3QgPSB0aGlzLiN3aWR0aCAvIHRoaXMuI2hlaWdodDtcbiAgICBjb25zdCBzaGFwZXMgPSBzY2VuZS5zaGFwZXMgPz8gW107XG4gICAgaWYgKHNoYXBlcy5sZW5ndGgpIHRoaXMuI3NoYXBlcy5yZW5kZXIoc2hhcGVzLm1hcChzaGFwZSA9PiAoe1xuICAgICAgLi4uc2hhcGUsXG4gICAgICB4OiAoc2hhcGUueCAvIHRoaXMuI3dpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gc2hhcGUueSAvIHRoaXMuI2hlaWdodCkgKiAyLjUsXG4gICAgICBzY2FsZTogKHNoYXBlLmhlaWdodCA/PyBzaGFwZS5zaXplKSAvIHRoaXMuI2hlaWdodCAqIDIuNSxcbiAgICAgIHNjYWxlWDogKHNoYXBlLnNjYWxlWCA/PyAxKSAqICgoc2hhcGUud2lkdGggPz8gc2hhcGUuc2l6ZSkgLyAoc2hhcGUuaGVpZ2h0ID8/IHNoYXBlLnNpemUpKSxcbiAgICB9KSksIHRydWUsIHRhcmdldCk7XG4gICAgaWYgKGNsb3Vkcy5sZW5ndGgpIHRoaXMuI2Nsb3Vkcy5yZW5kZXIoY2xvdWRzLm1hcChjbG91ZCA9PiB0aGlzLiNjbG91ZHMubWFwVG9wRG93bkNsb3VkKGNsb3VkLCB0aGlzLiN3aWR0aCwgdGhpcy4jaGVpZ2h0KSksIHRpbWVTZWNvbmRzLCB0cnVlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4jc2hhcGVzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuI2Nsb3Vkcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uTGlnaHRuaW5nUG9pbnQge1xuICBpZD86IG51bWJlciB8IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uTGlnaHRuaW5nVHVuaW5nIHtcbiAgY2hhaW5SYW5nZTogbnVtYmVyO1xuICBtYXhKdW1wczogbnVtYmVyO1xuICBicmFuY2hGYW5vdXQ6IG51bWJlcjtcbiAgbWF4RGVwdGg6IG51bWJlcjtcbiAgYnJhbmNoRGVjYXk6IG51bWJlcjtcbiAgamFnZ2VkbmVzczogbnVtYmVyO1xuICBzZWdtZW50czogbnVtYmVyO1xuICBtb3ZlbWVudDogbnVtYmVyO1xuICBib2x0V2lkdGg6IG51bWJlcjtcbiAgaGFsb1dpZHRoOiBudW1iZXI7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgYnJhbmNoU3BhcmtzOiBudW1iZXI7XG4gIHNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgc3BhcmtWZWxvY2l0eVNwcmVhZDogbnVtYmVyO1xuICBzcGFya0Vhc2VQb3dlcjogbnVtYmVyO1xuICBzcGFya0RpbVBvd2VyOiBudW1iZXI7XG4gIHNwYXJrTGVuZ3RoOiBudW1iZXI7XG4gIHNwYXJrV2lkdGg6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtzOiBudW1iZXI7XG4gIGltcGFjdFNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtSYWRpdXM6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uTGlnaHRuaW5nU2VnbWVudCB7XG4gIGZyb206IE5lb25MaWdodG5pbmdQb2ludDtcbiAgdG86IE5lb25MaWdodG5pbmdQb2ludDtcbiAgZGVwdGg6IG51bWJlcjtcbiAgb3JkZXI6IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdHM6IE5lb25MaWdodG5pbmdUdW5pbmcgPSB7XG4gIGNoYWluUmFuZ2U6IDUyMCxcbiAgbWF4SnVtcHM6IDI0LFxuICBicmFuY2hGYW5vdXQ6IDEsXG4gIG1heERlcHRoOiAyLFxuICBicmFuY2hEZWNheTogLjY4LFxuICBqYWdnZWRuZXNzOiA0NSxcbiAgc2VnbWVudHM6IDEwLFxuICBtb3ZlbWVudDogLjU1LFxuICBib2x0V2lkdGg6IC4xLFxuICBoYWxvV2lkdGg6IDgsXG4gIGludGVuc2l0eTogMy4wNyxcbiAgZ2xvdzogNi4yLFxuICBkdXJhdGlvbk1zOiA1MjksXG4gIGJyYW5jaFNwYXJrczogLjExLFxuICBzcGFya1ZlbG9jaXR5OiAxNTAsXG4gIHNwYXJrVmVsb2NpdHlTcHJlYWQ6IC41NSxcbiAgc3BhcmtFYXNlUG93ZXI6IC40NCxcbiAgc3BhcmtEaW1Qb3dlcjogLjYsXG4gIHNwYXJrTGVuZ3RoOiA2LFxuICBzcGFya1dpZHRoOiAuNyxcbiAgaW1wYWN0U3BhcmtzOiAyNixcbiAgaW1wYWN0U3BhcmtWZWxvY2l0eTogMTU0LFxuICBpbXBhY3RTcGFya1JhZGl1czogMTAsXG4gIGNvbG9yOiBcIiM1NWU3ZmZcIixcbiAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxufTtcblxuY29uc3QgcmFuZG9tID0gKHNlZWQ6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTgpICogNDM3NTguNTQ1MztcbiAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XG59O1xuXG5jb25zdCBwb2ludEtleSA9IChwb2ludDogTmVvbkxpZ2h0bmluZ1BvaW50LCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IFN0cmluZyhwb2ludC5pZCA/PyBpbmRleCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTmVvbkxpZ2h0bmluZ0NoYWluKFxuICBvcmlnaW46IE5lb25MaWdodG5pbmdQb2ludCxcbiAgdGFyZ2V0czogcmVhZG9ubHkgTmVvbkxpZ2h0bmluZ1BvaW50W10sXG4gIHR1bmluZzogUGFydGlhbDxOZW9uTGlnaHRuaW5nVHVuaW5nPiA9IHt9LFxuKTogTmVvbkxpZ2h0bmluZ1NlZ21lbnRbXSB7XG4gIGNvbnN0IHJlc29sdmVkID0geyAuLi5kZWZhdWx0cywgLi4udHVuaW5nIH07XG4gIGNvbnN0IGF2YWlsYWJsZSA9IHRhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PiAoeyB0YXJnZXQsIGtleTogcG9pbnRLZXkodGFyZ2V0LCBpbmRleCkgfSkpO1xuICBjb25zdCB1c2VkID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IHNlZ21lbnRzOiBOZW9uTGlnaHRuaW5nU2VnbWVudFtdID0gW107XG4gIGxldCBmcm9udGllcjogQXJyYXk8eyBwb2ludDogTmVvbkxpZ2h0bmluZ1BvaW50OyBkZXB0aDogbnVtYmVyIH0+ID0gW3sgcG9pbnQ6IG9yaWdpbiwgZGVwdGg6IDAgfV07XG4gIGxldCBvcmRlciA9IDA7XG5cbiAgd2hpbGUgKGZyb250aWVyLmxlbmd0aCAmJiBvcmRlciA8IHJlc29sdmVkLm1heEp1bXBzKSB7XG4gICAgY29uc3QgbmV4dEZyb250aWVyOiBBcnJheTx7IHBvaW50OiBOZW9uTGlnaHRuaW5nUG9pbnQ7IGRlcHRoOiBudW1iZXIgfT4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGJyYW5jaCBvZiBmcm9udGllcikge1xuICAgICAgaWYgKG9yZGVyID49IHJlc29sdmVkLm1heEp1bXBzIHx8IGJyYW5jaC5kZXB0aCA+PSByZXNvbHZlZC5tYXhEZXB0aCkgYnJlYWs7XG4gICAgICBjb25zdCBmYW5vdXQgPSBicmFuY2guZGVwdGggPT09IDAgPyBNYXRoLm1heCgxLCByZXNvbHZlZC5icmFuY2hGYW5vdXQpIDogMTtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBhdmFpbGFibGVcbiAgICAgICAgLmZpbHRlcihjYW5kaWRhdGUgPT4gIXVzZWQuaGFzKGNhbmRpZGF0ZS5rZXkpKVxuICAgICAgICAubWFwKGNhbmRpZGF0ZSA9PiAoe1xuICAgICAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgICAgICBkaXN0YW5jZTogTWF0aC5oeXBvdChjYW5kaWRhdGUudGFyZ2V0LnggLSBicmFuY2gucG9pbnQueCwgY2FuZGlkYXRlLnRhcmdldC55IC0gYnJhbmNoLnBvaW50LnkpLFxuICAgICAgICB9KSlcbiAgICAgICAgLmZpbHRlcihjYW5kaWRhdGUgPT4gY2FuZGlkYXRlLmRpc3RhbmNlIDw9IHJlc29sdmVkLmNoYWluUmFuZ2UpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSlcbiAgICAgICAgLnNsaWNlKDAsIGZhbm91dCk7XG4gICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICAgIGlmIChvcmRlciA+PSByZXNvbHZlZC5tYXhKdW1wcykgYnJlYWs7XG4gICAgICAgIHVzZWQuYWRkKGNhbmRpZGF0ZS5rZXkpO1xuICAgICAgICBzZWdtZW50cy5wdXNoKHsgZnJvbTogYnJhbmNoLnBvaW50LCB0bzogY2FuZGlkYXRlLnRhcmdldCwgZGVwdGg6IGJyYW5jaC5kZXB0aCwgb3JkZXIgfSk7XG4gICAgICAgIG5leHRGcm9udGllci5wdXNoKHsgcG9pbnQ6IGNhbmRpZGF0ZS50YXJnZXQsIGRlcHRoOiBicmFuY2guZGVwdGggKyAxIH0pO1xuICAgICAgICBvcmRlcisrO1xuICAgICAgfVxuICAgIH1cbiAgICBmcm9udGllciA9IG5leHRGcm9udGllcjtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lb25MaWdodG5pbmdQcmltaXRpdmVzKFxuICBzZWdtZW50czogcmVhZG9ubHkgTmVvbkxpZ2h0bmluZ1NlZ21lbnRbXSxcbiAgYWdlTXM6IG51bWJlcixcbiAgdHVuaW5nOiBQYXJ0aWFsPE5lb25MaWdodG5pbmdUdW5pbmc+ID0ge30sXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICBjb25zdCByZXNvbHZlZCA9IHsgLi4uZGVmYXVsdHMsIC4uLnR1bmluZyB9O1xuICBjb25zdCBsaWZlID0gMSAtIE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFnZU1zIC8gTWF0aC5tYXgoMSwgcmVzb2x2ZWQuZHVyYXRpb25NcykpKTtcbiAgaWYgKGxpZmUgPD0gMCkgcmV0dXJuIFtdO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygc2VnbWVudHMpIHtcbiAgICBjb25zdCBkeCA9IHNlZ21lbnQudG8ueCAtIHNlZ21lbnQuZnJvbS54O1xuICAgIGNvbnN0IGR5ID0gc2VnbWVudC50by55IC0gc2VnbWVudC5mcm9tLnk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IDE7XG4gICAgY29uc3QgbnggPSAtZHkgLyBsZW5ndGg7XG4gICAgY29uc3QgbnkgPSBkeCAvIGxlbmd0aDtcbiAgICBjb25zdCBkZXB0aFBvd2VyID0gcmVzb2x2ZWQuYnJhbmNoRGVjYXkgKiogc2VnbWVudC5kZXB0aDtcbiAgICBjb25zdCBzZWdtZW50Q291bnQgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHJlc29sdmVkLnNlZ21lbnRzKSk7XG4gICAgY29uc3QgcG9pbnRzOiBOZW9uTGlnaHRuaW5nUG9pbnRbXSA9IFtzZWdtZW50LmZyb21dO1xuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBzZWdtZW50Q291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBpbmRleCAvIHNlZ21lbnRDb3VudDtcbiAgICAgIGNvbnN0IHRhcGVyID0gTWF0aC5zaW4odCAqIE1hdGguUEkpO1xuICAgICAgY29uc3Qgc2VlZCA9IHNlZ21lbnQub3JkZXIgKiA5NyArIHNlZ21lbnQuZGVwdGggKiAyOSArIGluZGV4ICogMTEgKyBNYXRoLmZsb29yKGFnZU1zICogcmVzb2x2ZWQubW92ZW1lbnQgKiAuMDQpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKHJhbmRvbShzZWVkKSAtIC41KSAqIHJlc29sdmVkLmphZ2dlZG5lc3MgKiB0YXBlciAqIGRlcHRoUG93ZXI7XG4gICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHNlZ21lbnQuZnJvbS54ICsgZHggKiB0ICsgbnggKiBvZmZzZXQsXG4gICAgICAgIHk6IHNlZ21lbnQuZnJvbS55ICsgZHkgKiB0ICsgbnkgKiBvZmZzZXQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcG9pbnRzLnB1c2goc2VnbWVudC50byk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9pbnRzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGEgPSBwb2ludHNbaW5kZXhdO1xuICAgICAgY29uc3QgYiA9IHBvaW50c1tpbmRleCArIDFdO1xuICAgICAgY29uc3Qgc3ggPSBiLnggLSBhLng7XG4gICAgICBjb25zdCBzeSA9IGIueSAtIGEueTtcbiAgICAgIGNvbnN0IGFscGhhID0gbGlmZSAqIGRlcHRoUG93ZXIgKiAoMSAtIGluZGV4IC8gcG9pbnRzLmxlbmd0aCAqIC4yKTtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gTWF0aC5hdGFuMigtc3gsIHN5KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICAgICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgICAgICB3aWR0aDogcmVzb2x2ZWQuaGFsb1dpZHRoICogZGVwdGhQb3dlcixcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KHN4LCBzeSkgLyAyLFxuICAgICAgICBjb2xvcjogcmVzb2x2ZWQuY29sb3IsXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiByZXNvbHZlZC5zZWNvbmRhcnlDb2xvcixcbiAgICAgICAgZ2xvdzogcmVzb2x2ZWQuZ2xvdyAqIGFscGhhLFxuICAgICAgICBpbnRlbnNpdHk6IHJlc29sdmVkLmludGVuc2l0eSAqIC40MiAqIGFscGhhLFxuICAgICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICAgIHJvdGF0aW9uLFxuICAgICAgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KDEsIHJlc29sdmVkLmJvbHRXaWR0aCAqIGRlcHRoUG93ZXIpLFxuICAgICAgICBoZWlnaHQ6IE1hdGguaHlwb3Qoc3gsIHN5KSAvIDIsXG4gICAgICAgIGNvbG9yOiByZXNvbHZlZC5zZWNvbmRhcnlDb2xvcixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJlc29sdmVkLmNvbG9yLFxuICAgICAgICBnbG93OiByZXNvbHZlZC5nbG93ICogMS4yICogYWxwaGEsXG4gICAgICAgIGludGVuc2l0eTogcmVzb2x2ZWQuaW50ZW5zaXR5ICogMS4xNSAqIGFscGhhLFxuICAgICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICAgIHJvdGF0aW9uLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzb2x2ZWQuYnJhbmNoU3BhcmtzID4gMCkge1xuICAgICAgICBjb25zdCBzcGFya0NvdW50ID0gTWF0aC5mbG9vcihyZXNvbHZlZC5icmFuY2hTcGFya3MgKiA1KTtcbiAgICAgICAgY29uc3QgZnJhY3Rpb25hbFNwYXJrID0gcmVzb2x2ZWQuYnJhbmNoU3BhcmtzICogNSAtIHNwYXJrQ291bnQ7XG4gICAgICAgIGNvbnN0IHRvdGFsU3BhcmtzID0gc3BhcmtDb3VudCArIChyYW5kb20oc2VnbWVudC5vcmRlciAqIDEzMSArIGluZGV4ICogMTcpIDwgZnJhY3Rpb25hbFNwYXJrID8gMSA6IDApO1xuICAgICAgICBmb3IgKGxldCBzcGFyayA9IDA7IHNwYXJrIDwgdG90YWxTcGFya3M7IHNwYXJrKyspIHtcbiAgICAgICAgICBjb25zdCBzZWVkID0gc2VnbWVudC5vcmRlciAqIDMxMSArIGluZGV4ICogNDcgKyBzcGFyayAqIDE5O1xuICAgICAgICAgIGNvbnN0IHNpZGUgPSByYW5kb20oc2VlZCkgPiAuNSA/IDEgOiAtMTtcbiAgICAgICAgICBjb25zdCBzcHJlYWQgPSAocmFuZG9tKHNlZWQgKyAxKSAtIC41KSAqIHJlc29sdmVkLnNwYXJrVmVsb2NpdHlTcHJlYWQ7XG4gICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHN5LCBzeCkgKyBzaWRlICogKE1hdGguUEkgLyAyICsgc3ByZWFkKTtcbiAgICAgICAgICBjb25zdCB0cmF2ZWwgPSBNYXRoLnBvdygxIC0gbGlmZSwgcmVzb2x2ZWQuc3BhcmtFYXNlUG93ZXIpICogcmVzb2x2ZWQuc3BhcmtWZWxvY2l0eSAqICgwLjQ1ICsgcmFuZG9tKHNlZWQgKyAyKSAqIC43NSk7XG4gICAgICAgICAgY29uc3QgZmFkZSA9IGFscGhhICogTWF0aC5wb3cobGlmZSwgcmVzb2x2ZWQuc3BhcmtEaW1Qb3dlcik7XG4gICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIHg6IChhLnggKyBiLngpIC8gMiArIE1hdGguY29zKGFuZ2xlKSAqIHRyYXZlbCxcbiAgICAgICAgICAgIHk6IChhLnkgKyBiLnkpIC8gMiArIE1hdGguc2luKGFuZ2xlKSAqIHRyYXZlbCxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLm1heCguNywgcmVzb2x2ZWQuc3BhcmtXaWR0aCAqIGRlcHRoUG93ZXIpLFxuICAgICAgICAgICAgaGVpZ2h0OiByZXNvbHZlZC5zcGFya0xlbmd0aCAqIGRlcHRoUG93ZXIgKiAoLjc1ICsgcmFuZG9tKHNlZWQgKyAzKSAqIC44KSxcbiAgICAgICAgICAgIGNvbG9yOiByZXNvbHZlZC5zZWNvbmRhcnlDb2xvcixcbiAgICAgICAgICAgIHNlY29uZGFyeUNvbG9yOiByZXNvbHZlZC5jb2xvcixcbiAgICAgICAgICAgIGdsb3c6IHJlc29sdmVkLmdsb3cgKiBmYWRlLFxuICAgICAgICAgICAgaW50ZW5zaXR5OiByZXNvbHZlZC5pbnRlbnNpdHkgKiBmYWRlLFxuICAgICAgICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLU1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltcGFjdENvdW50ID0gTWF0aC5mbG9vcihyZXNvbHZlZC5pbXBhY3RTcGFya3MpO1xuICAgIGZvciAobGV0IHNwYXJrID0gMDsgc3BhcmsgPCBpbXBhY3RDb3VudDsgc3BhcmsrKykge1xuICAgICAgY29uc3Qgc2VlZCA9IHNlZ21lbnQub3JkZXIgKiA0MDEgKyBzcGFyayAqIDIzO1xuICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLlBJICogMiAqIChzcGFyayAvIE1hdGgubWF4KDEsIGltcGFjdENvdW50KSkgKyAocmFuZG9tKHNlZWQpIC0gLjUpICogLjU1O1xuICAgICAgY29uc3QgdHJhdmVsID0gcmVzb2x2ZWQuaW1wYWN0U3BhcmtSYWRpdXMgKyBNYXRoLnBvdygxIC0gbGlmZSwgcmVzb2x2ZWQuc3BhcmtFYXNlUG93ZXIpICogcmVzb2x2ZWQuaW1wYWN0U3BhcmtWZWxvY2l0eSAqICguNTUgKyByYW5kb20oc2VlZCArIDEpICogLjcpO1xuICAgICAgY29uc3QgZmFkZSA9IGxpZmUgKiBkZXB0aFBvd2VyICogTWF0aC5wb3cobGlmZSwgcmVzb2x2ZWQuc3BhcmtEaW1Qb3dlciAqIC42NSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4OiBzZWdtZW50LnRvLnggKyBNYXRoLmNvcyhhbmdsZSkgKiB0cmF2ZWwsXG4gICAgICAgIHk6IHNlZ21lbnQudG8ueSArIE1hdGguc2luKGFuZ2xlKSAqIHRyYXZlbCxcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KDEsIHJlc29sdmVkLnNwYXJrV2lkdGggKiAxLjIgKiBkZXB0aFBvd2VyKSxcbiAgICAgICAgaGVpZ2h0OiByZXNvbHZlZC5zcGFya0xlbmd0aCAqIDEuNTUgKiBkZXB0aFBvd2VyLFxuICAgICAgICBjb2xvcjogcmVzb2x2ZWQuc2Vjb25kYXJ5Q29sb3IsXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiByZXNvbHZlZC5jb2xvcixcbiAgICAgICAgZ2xvdzogcmVzb2x2ZWQuZ2xvdyAqIDEuMzUgKiBmYWRlLFxuICAgICAgICBpbnRlbnNpdHk6IHJlc29sdmVkLmludGVuc2l0eSAqIDEuMzUgKiBmYWRlLFxuICAgICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1NYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlcztcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHROZW9uTGlnaHRuaW5nVHVuaW5nID0gZGVmYXVsdHM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCIsIFwiYXVyb3JhXCIsIFwiY3J5c3RhbEZvcmdlXCIsIFwidm9pZEdhcmRlblwiLCBcInNvbGFyQXJyYXlcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxuICBhdXJvcmE6IFwiQXVyb3JhXCIsXG4gIGNyeXN0YWxGb3JnZTogXCJDcnlzdGFsIEZvcmdlXCIsXG4gIHZvaWRHYXJkZW46IFwiVm9pZCBHYXJkZW5cIixcbiAgc29sYXJBcnJheTogXCJTb2xhciBBcnJheVwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVQYWxldHRlIHtcbiAgZmxvb3I6IHN0cmluZztcbiAgYm91bmRhcnk6IHN0cmluZztcbiAgbGFuZTogc3RyaW5nO1xuICBjZW50ZXJMYW5lOiBzdHJpbmc7XG4gIGFjY2VudDogc3RyaW5nO1xuICBsYW5lSGlnaGxpZ2h0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBoYWxsRmxvb3JDb2xvcixcbiAgYm91bmRhcnk6IGhhbGxEZWVwQmx1ZSxcbiAgbGFuZTogaGFsbE11dGVkQmx1ZSxcbiAgY2VudGVyTGFuZTogaGFsbE11dGVkVmlvbGV0LFxuICBhY2NlbnQ6IGhhbGxBY2NlbnRQaW5rLFxuICBsYW5lSGlnaGxpZ2h0OiBoYWxsTXV0ZWRDeWFuLFxufTtcblxuY29uc3QgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwMzExMGZcIixcbiAgYm91bmRhcnk6IFwiIzE3OGM5MlwiLFxuICBsYW5lOiBcIiMxN2Q3YjNcIixcbiAgY2VudGVyTGFuZTogXCIjOGY1NmZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZmM3XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2I5ZmY2YVwiLFxufTtcblxuY29uc3QgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwNzEwMThcIixcbiAgYm91bmRhcnk6IFwiIzI2ZDdmZlwiLFxuICBsYW5lOiBcIiM2M2YxZmZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY1ZmQ4XCIsXG4gIGFjY2VudDogXCIjZmZiODRkXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2Y0ZmJmZlwiLFxufTtcblxuY29uc3Qgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDgwODE4XCIsXG4gIGJvdW5kYXJ5OiBcIiM2ZjUzZmZcIixcbiAgbGFuZTogXCIjMzVlOGI2XCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNGZjN1wiLFxuICBhY2NlbnQ6IFwiI2I5ZmY2YVwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiM5YmQ3ZmZcIixcbn07XG5cbmNvbnN0IHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzExMGMwN1wiLFxuICBib3VuZGFyeTogXCIjZmY5ZTM4XCIsXG4gIGxhbmU6IFwiI2ZmZDQ1YVwiLFxuICBjZW50ZXJMYW5lOiBcIiMyNmQ3ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmNjZcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZmZmNmI4XCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgcmV0dXJuIHNjZW5lQ3JlYXRvcnNbb3B0aW9ucy5zY2VuZUlkXShvcHRpb25zKTtcbn1cblxuY29uc3Qgc2NlbmVDcmVhdG9yczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCAob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucykgPT4gTmVvblRvcERvd25TY2VuZT4gPSB7XG4gIG5lb25IYWxsOiBjcmVhdGVOZW9uSGFsbCxcbiAgYXVyb3JhOiBjcmVhdGVBdXJvcmEsXG4gIGNyeXN0YWxGb3JnZTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGUsIGFkZENyeXN0YWxGb3JnZURldGFpbHMpLFxuICB2b2lkR2FyZGVuOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGUsIGFkZFZvaWRHYXJkZW5EZXRhaWxzKSxcbiAgc29sYXJBcnJheTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlLCBhZGRTb2xhckFycmF5RGV0YWlscyksXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXVyb3JhKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUxhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFHcm91bmRGbGFyZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUhvcml6b25WZWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShcbiAgb3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyxcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgYWRkRGV0YWlsczogKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcikgPT4gdm9pZCxcbik6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkVGhlbWVkTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZERldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUoXG4gIGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sXG4gIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICB0aW1lTXM6IG51bWJlcixcbik6IHZvaWQge1xuICBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXMsIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQsIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUpO1xuICBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtczogTmVvblByaW1pdGl2ZVtdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgcHVsc2UgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgKiBoYWxsRW5lcmd5U3BlZWQpICogLjI7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIC40Miwgd2lkdGg6IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoLCBoZWlnaHQ6IGhlaWdodCAqIDEuMDgsIGNvbG9yOiBwYWxldHRlLmZsb29yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC45LCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogcGFsZXR0ZS5ib3VuZGFyeSwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC43OCwgd2lkdGg6IHdpZHRoICogLjE4LCBoZWlnaHQ6IDEuMiwgY29sb3I6IHBhbGV0dGUuYWNjZW50LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5jZW50ZXJMYW5lLCBnbG93OiAuMjQsIGludGVuc2l0eTogLjA4LCBzaGFwZTogXCJib2x0XCIgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSk6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBbYm90dG9tLCBob3Jpem9uXSBvZiBbW2xlZnRCb3R0b20sIGxlZnRIb3Jpem9uXSwgW3JpZ2h0Qm90dG9tLCByaWdodEhvcml6b25dXSBhcyBjb25zdCkge1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUuYm91bmRhcnksIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIC41NiwgMS4zKTtcbiAgfVxuXG4gIGZvciAobGV0IGxhbmUgPSAxOyBsYW5lIDw9IDM7IGxhbmUrKykge1xuICAgIGNvbnN0IHUgPSBsYW5lIC8gNDtcbiAgICBjb25zdCBzdGFydCA9IGxlcnBQb2ludChsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgdSk7XG4gICAgY29uc3QgZW5kID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IGNvbG9yID0gbGFuZSA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUubGFuZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHJvdyAlIDQgPT09IDEgPyBwYWxldHRlLmxhbmUgOiByb3cgJSA0ID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5hY2NlbnQ7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4xNSArIHQgKiAuMjMpICogKC41NSArIHJvd1B1bHNlICogLjQ1KSArIHN1cmdlICogLjA1NSwgMy4xICsgdCAqIDIpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMiArIHQgKiAuMjcpICogKC41MiArIHJvd1B1bHNlICogLjQ4KSArIHN1cmdlICogLjA3LCAuNzUgKyB0ICogLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgNzsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE5MDAgKyBwdWxzZUluZGV4IC8gNykgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNTUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzQgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBoYWxsTXV0ZWRDeWFuLCBvcGFjaXR5LCAxLjEgKyB0ICogMS40KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRmxvb3JHbHlwaHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCByb3dzID0gWzIsIDQsIDYsIDgsIDEwLCAxMl07XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIC41KTtcbiAgICBjb25zdCBzY2FsZSA9IC40NSArIHQgKiAxLjE7XG4gICAgY29uc3QgcHVsc2UgPSAuNDggKyBNYXRoLnNpbih0aW1lTXMgLyA3MjAgKyByb3cgKiAxLjMpICogLjI0O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiA3ICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IDcgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbERlZXBCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJvdyAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4yNCArIHB1bHNlICogLjE2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IGdsb3dQdWxzZSA9IC43NSArIE1hdGguc2luKHRpbWVNcyAvIDY4MCkgKiAuMjU7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIGhhbGxBY2NlbnRQaW5rLCAuMiArIGdsb3dQdWxzZSAqIC4wOCwgMS4xKTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggLSB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkQ3lhbiwgLjE2LCAuODUpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54ICsgd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRWaW9sZXQsIC4xNiwgLjg1KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggKyAuNSkgLyA4O1xuICAgIGNvbnN0IGJhc2UgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3Qgc2lkZUJpYXMgPSBNYXRoLmFicyh1IC0gLjUpICogMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGJhc2UueCxcbiAgICAgIHk6IGJhc2UueSAtIGhlaWdodCAqICguMDE4ICsgc2lkZUJpYXMgKiAuMDE4KSxcbiAgICAgIHdpZHRoOiAxICsgc2lkZUJpYXMgKiAuNyxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyBzaWRlQmlhcyAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbEFjY2VudFBpbmssXG4gICAgICBnbG93OiAuMjQsXG4gICAgICBpbnRlbnNpdHk6IC4wNyArIGdsb3dQdWxzZSAqIC4wMzUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4oaW5kZXggKiAxLjcpICogLjEyLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxTaWRlUGFuZWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBzaWRlIG9mIFswLCAxXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxMCwgMS42OCk7XG4gICAgICBjb25zdCByYWlsID0gc2lkZSA9PT0gMFxuICAgICAgICA/IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdClcbiAgICAgICAgOiBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgICBjb25zdCBvdXR3YXJkID0gc2lkZSA9PT0gMCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaWNrZXIgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA2MDAgKyBpbmRleCAqIDEuNSArIHNpZGUpICogLjI4O1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHg6IHJhaWwueCArIG91dHdhcmQgKiB3aWR0aCAqICguMDM1ICsgdCAqIC4wNiksXG4gICAgICAgIHk6IHJhaWwueSAtIGhlaWdodCAqICguMDE4ICsgdCAqIC4wMTIpLFxuICAgICAgICB3aWR0aDogMS4yICsgdCAqIDEuMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHQgKiAuMDgpLFxuICAgICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkQ3lhbixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgICAgZ2xvdzogLjMsXG4gICAgICAgIGludGVuc2l0eTogKC4wNzUgKyB0ICogLjA2NSkgKiBmbGlja2VyLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEVuZXJneVRyYWNlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjEyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAxMTY7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjcpKTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0ID09PSAwID8gLjE4IDogaW5kZXggJSA0ID09PSAxID8gLjM0IDogaW5kZXggJSA0ID09PSAyID8gLjY2IDogLjgyO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBzaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjcgKyB0aW1lTXMgLyAxNzAwKSAqIC4wMzUpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyAzOTAgKyBpbmRleCAqIDEuMSkgKiAuMzg7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiAuOCArIGluZGV4ICUgMyAqIC41LFxuICAgICAgaGVpZ2h0OiAxMCArIGluZGV4ICUgNSAqIDcsXG4gICAgICBjb2xvcjogaW5kZXggJSA1ID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbE11dGVkQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyAoaW5kZXggJSA0KSAqIC4wMTgpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgOTsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE1NTAgKyBwdWxzZUluZGV4IC8gOSkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNDgpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzIgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMTdkN2IzXCIsIG9wYWNpdHksIDEgKyB0ICogMS43KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFHcm91bmRGbGFyZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4wOCArICgoaW5kZXggKiAyOSkgJSAxMDApIC8gMTEyO1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS42MikpO1xuICAgIGNvbnN0IGxhbmVTaWRlID0gaW5kZXggJSAyID09PSAwID8gLjIyIDogLjc4O1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBsYW5lU2lkZSArIE1hdGguc2luKGluZGV4ICogMS4xICsgdGltZU1zIC8gMTgwMCkgKiAuMDQpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA0MzAgKyBpbmRleCAqIDEuMykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA5ICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IGluZGV4ICUgMyA9PT0gMSA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA2KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjE4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUhvcml6b25WZWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA3OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCAtIDMpIC8gNjtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5zaW4odGltZU1zIC8gMTEwMCArIGluZGV4ICogLjkpO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogdnAueCArIHUgKiB3aWR0aCAqIC4zNixcbiAgICAgIHk6IHZwLnkgKyBoZWlnaHQgKiAoLjA3NSArIGluZGV4ICogLjAwNiksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAzNSArIGluZGV4ICogLjAwNCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMTIgKyBNYXRoLmFicyh3YXZlKSAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMDQ1ICsgTWF0aC5hYnMod2F2ZSkgKiAuMDI1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IHUgKiAuMjggKyB3YXZlICogLjA4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lZExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA4OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTcwMCArIHB1bHNlSW5kZXggLyA4KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcGFsZXR0ZS5hY2NlbnQsIC4yOCAqICgxIC0gdHJhdmVsKSwgMS4xICsgdCAqIDEuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTY7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxNywgMS41NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xNCA6IC44NjtcbiAgICBjb25zdCBlZGdlID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgZ2xpbnQgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA1MjAgKyBpbmRleCAqIDEuMTcpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogZWRnZS54LFxuICAgICAgeTogZWRnZS55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTIgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDI1ICsgdCAqIC4wNiksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZiODRkXCIgOiBcIiM2M2YxZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiNmZjVmZDhcIiA6IFwiI2Y0ZmJmZlwiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogZ2xpbnQsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgICByb3RhdGlvbjogKHNpZGUgPCAuNSA/IC0uMjIgOiAuMjIpICsgTWF0aC5zaW4odGltZU1zIC8gMTQwMCArIGluZGV4KSAqIC4wOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCBcIiNmZmI4NGRcIiwgLjIyLCAxLjMpO1xufVxuXG5mdW5jdGlvbiBhZGRWb2lkR2FyZGVuRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coLjA4ICsgKChpbmRleCAqIDIzKSAlIDEwMCkgLyAxMTIsIDEuNjUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPCAyID8gLjE4IDogLjgyO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUgKyBNYXRoLnNpbih0aW1lTXMgLyAxOTAwICsgaW5kZXgpICogLjAzNSk7XG4gICAgY29uc3QgYmxvb20gPSAuNSArIE1hdGguc2luKHRpbWVNcyAvIDc2MCArIGluZGV4ICogLjgpICogLjMyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgaGVpZ2h0OiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMzVlOGI2XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjNmY1M2ZmXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC40MixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIHQgKiAuMDUpICogYmxvb20sXG4gICAgICBzaGFwZTogaW5kZXggJSAyID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjQsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIFwiIzM1ZThiNlwiLCAuMTgsIDEuMSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNvbGFyQXJyYXlEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE5LCAxLjQ4KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjEgOiAuOTtcbiAgICBjb25zdCBtb3VudCA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IHB1bHNlID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gNjEwICsgaW5kZXggKiAxLjA1KSAqIC4zO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogbW91bnQueCxcbiAgICAgIHk6IG1vdW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTIgKyB0ICogLjAyNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZkNDVhXCIgOiBcIiNmZjllMzhcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiMyNmQ3ZmZcIiA6IFwiI2ZmNGY2NlwiLFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogcHVsc2UsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogc2lkZSA8IC41ID8gLS4zOCA6IC4zOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCBcIiNmZmY2YjhcIiwgLjI0LCAxLjQpO1xufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSA9IFwiZGFydFwiIHwgXCJuZWVkbGVcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJvamVjdGlsZU9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYPzogbnVtYmVyO1xuICB2ZWxvY2l0eVk/OiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgbGVuZ3RoPzogbnVtYmVyO1xuICB0cmFpbExlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxXaWR0aD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICBzaGFwZT86IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbn1cblxuY29uc3Qgcm90YXRpb25Gb3JTY3JlZW5Gb3J3YXJkVmVjdG9yID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMih4IC8gbGVuZ3RoLCAteSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgY2xhc3MgTmVvblByb2plY3RpbGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHZlbG9jaXR5WTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsV2lkdGg6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcjogc3RyaW5nO1xuICBjb3JlQ29sb3I6IHN0cmluZztcbiAgc2hhcGU6IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblByb2plY3RpbGVPcHRpb25zKSB7XG4gICAgdGhpcy54PW9wdGlvbnMueDt0aGlzLnk9b3B0aW9ucy55O3RoaXMudmVsb2NpdHlYPW9wdGlvbnMudmVsb2NpdHlYPz8wO3RoaXMudmVsb2NpdHlZPW9wdGlvbnMudmVsb2NpdHlZPz8tNTAwO1xuICAgIHRoaXMucmFkaXVzPW9wdGlvbnMucmFkaXVzPz8zO3RoaXMubGVuZ3RoPW9wdGlvbnMubGVuZ3RoPz85O3RoaXMudHJhaWxMZW5ndGg9b3B0aW9ucy50cmFpbExlbmd0aD8/MTY7dGhpcy50cmFpbFdpZHRoPW9wdGlvbnMudHJhaWxXaWR0aD8/MS41O1xuICAgIHRoaXMuY29sb3I9b3B0aW9ucy5jb2xvcjt0aGlzLnRyYWlsQ29sb3I9b3B0aW9ucy50cmFpbENvbG9yPz9vcHRpb25zLmNvbG9yO3RoaXMuY29yZUNvbG9yPW9wdGlvbnMuY29yZUNvbG9yPz9vcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuc2hhcGU9b3B0aW9ucy5zaGFwZT8/XCJkYXJ0XCI7dGhpcy5pbnRlbnNpdHk9b3B0aW9ucy5pbnRlbnNpdHk/PzE7dGhpcy5nbG93PW9wdGlvbnMuZ2xvdz8/Ljc1O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlYICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5WSAqIGRlbHRhU2Vjb25kcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc2hhcGUgPT09IFwic3BsaXRCb2x0XCI7XG4gICAgY29uc3QgbmVlZGxlID0gdGhpcy5zaGFwZSA9PT0gXCJuZWVkbGVcIjtcbiAgICBjb25zdCBzbHVnID0gdGhpcy5zaGFwZSA9PT0gXCJzbHVnXCI7XG4gICAgY29uc3Qgc3BlZWQgPSBNYXRoLmh5cG90KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb25YID0gdGhpcy52ZWxvY2l0eVggLyBzcGVlZDtcbiAgICBjb25zdCBkaXJlY3Rpb25ZID0gdGhpcy52ZWxvY2l0eVkgLyBzcGVlZDtcbiAgICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3Rvcih0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpO1xuICAgIGNvbnN0IGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10gPSBbe1xuICAgICAgeDp0aGlzLngtZGlyZWN0aW9uWCp0aGlzLnRyYWlsTGVuZ3RoKi41LHk6dGhpcy55LWRpcmVjdGlvblkqdGhpcy50cmFpbExlbmd0aCouNSxcbiAgICAgIHdpZHRoOnRoaXMudHJhaWxXaWR0aCxoZWlnaHQ6dGhpcy50cmFpbExlbmd0aCxjb2xvcjp0aGlzLnRyYWlsQ29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb2xvcixcbiAgICAgIGdsb3c6dGhpcy5nbG93Ki42LGludGVuc2l0eTp0aGlzLmludGVuc2l0eSouNzIsc2hhcGU6XCJib2x0XCIscm90YXRpb24sXG4gICAgfV07XG4gICAgY29uc3Qgd2lkdGg9c2x1Zz90aGlzLnJhZGl1cyoxLjU6bmVlZGxlP3RoaXMucmFkaXVzKi42NTp0aGlzLnJhZGl1cztcbiAgICBjb25zdCBoZWlnaHQ9c2x1Zz90aGlzLmxlbmd0aCouNzU6dGhpcy5sZW5ndGg7XG4gICAgY29uc3Qgc2lkZVggPSAtZGlyZWN0aW9uWTtcbiAgICBjb25zdCBzaWRlWSA9IGRpcmVjdGlvblg7XG4gICAgY29uc3QgYWRkPShvZmZzZXQ6bnVtYmVyKT0+aXRlbXMucHVzaCh7eDp0aGlzLngrc2lkZVgqb2Zmc2V0LHk6dGhpcy55K3NpZGVZKm9mZnNldCx3aWR0aCxoZWlnaHQsY29sb3I6dGhpcy5jb2xvcixzZWNvbmRhcnlDb2xvcjp0aGlzLmNvcmVDb2xvcixnbG93OnRoaXMuZ2xvdyxpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHksc2hhcGU6bmVlZGxlP1wiY2lyY2xlXCI6XCJib2x0XCIscm90YXRpb259KTtcbiAgICBpZihzcGxpdCl7YWRkKC10aGlzLnJhZGl1cyouNyk7YWRkKHRoaXMucmFkaXVzKi43KX1lbHNlIGFkZCgwKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBUZXN0U3RhdHVzID0gXCJib290aW5nXCIgfCBcInJlYWR5XCIgfCBcInBhc3NlZFwiIHwgXCJmYWlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXN0QXNzZXJ0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzZWQ6IGJvb2xlYW47XG4gIGRldGFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0UGFnZVNuYXBzaG90IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBUZXN0U3RhdHVzO1xuICBhc3NlcnRpb25zOiBUZXN0QXNzZXJ0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0UGFnZTxURHJpdmVyIGV4dGVuZHMgb2JqZWN0PihcbiAgaWQ6IHN0cmluZyxcbiAgZHJpdmVyOiBURHJpdmVyLFxuICBzdGF0dXNFbGVtZW50OiBIVE1MRWxlbWVudCxcbikge1xuICBjb25zdCBzbmFwc2hvdDogVGVzdFBhZ2VTbmFwc2hvdCA9IHsgaWQsIHN0YXR1czogXCJib290aW5nXCIsIGFzc2VydGlvbnM6IFtdIH07XG4gIGNvbnN0IHB1Ymxpc2ggPSAoKSA9PiB7XG4gICAgc3RhdHVzRWxlbWVudC5kYXRhc2V0LnN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c25hcHNob3Quc3RhdHVzLnRvVXBwZXJDYXNlKCl9IFx1MDBCNyAke3NuYXBzaG90LmFzc2VydGlvbnMuZmlsdGVyKGEgPT4gYS5wYXNzZWQpLmxlbmd0aH0vJHtzbmFwc2hvdC5hc3NlcnRpb25zLmxlbmd0aH0gYXNzZXJ0aW9uc2A7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGVzdFN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgfTtcbiAgY29uc3QgYXBpID0ge1xuICAgIC4uLmRyaXZlcixcbiAgICBnZXRTbmFwc2hvdDogKCk6IFRlc3RQYWdlU25hcHNob3QgPT4gc3RydWN0dXJlZENsb25lKHNuYXBzaG90KSxcbiAgICByZWFkeSgpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IFwicmVhZHlcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICAgIGFzc2VydChuYW1lOiBzdHJpbmcsIHBhc3NlZDogYm9vbGVhbiwgZGV0YWlsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5hc3NlcnRpb25zLnB1c2goeyBuYW1lLCBwYXNzZWQsIGRldGFpbCB9KTtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IHNuYXBzaG90LmFzc2VydGlvbnMuZXZlcnkoYXNzZXJ0aW9uID0+IGFzc2VydGlvbi5wYXNzZWQpID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgfTtcbiAgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgbmVvbkZhY3RvcnlUZXN0OiB0eXBlb2YgYXBpIH0pLm5lb25GYWN0b3J5VGVzdCA9IGFwaTtcbiAgcHVibGlzaCgpO1xuICByZXR1cm4gYXBpO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVmljdG9yeU9wdGlvbnMge1xuICBjZW50ZXJYOiBudW1iZXI7XG4gIGNlbnRlclk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBhcnRpY2xlQ291bnQ/OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVmljdG9yeUV4cGVyaWVuY2Uge1xuICByZWFkb25seSBzdGFydGVkQXQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgZHVyYXRpb25NczogbnVtYmVyO1xuICByZWFkb25seSBvcHRpb25zOiBOZW9uVmljdG9yeU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblZpY3RvcnlPcHRpb25zLCBzdGFydGVkQXQgPSBwZXJmb3JtYW5jZS5ub3coKSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdGFydGVkQXQgPSBzdGFydGVkQXQ7XG4gICAgdGhpcy5kdXJhdGlvbk1zID0gb3B0aW9ucy5kdXJhdGlvbk1zID8/IDQyMDA7XG4gIH1cblxuICBnZXQgY29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydGVkQXQgPj0gdGhpcy5kdXJhdGlvbk1zO1xuICB9XG5cbiAgcHJpbWl0aXZlcyhub3cgPSBwZXJmb3JtYW5jZS5ub3coKSk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgY29uc3QgZWxhcHNlZCA9IE1hdGgubWF4KDAsIG5vdyAtIHRoaXMuc3RhcnRlZEF0KTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKDEsIGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uTXMpO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlQ291bnQgPz8gOTA7XG4gICAgY29uc3QgY29sb3JzID0gW25lb25QYWxldHRlLmN5YW4sIG5lb25QYWxldHRlLnBpbmssIG5lb25QYWxldHRlLmdvbGQsIG5lb25QYWxldHRlLmdyZWVuLCBuZW9uUGFsZXR0ZS52aW9sZXQsIG5lb25QYWxldHRlLm9yYW5nZV07XG4gICAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBzZWVkID0gaW5kZXggKiA5MS43MztcbiAgICAgIGNvbnN0IGRlbGF5ID0gKGluZGV4ICUgMTIpICogMC4wMzU7XG4gICAgICBjb25zdCBsb2NhbCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHByb2dyZXNzICogMS4zNSAtIGRlbGF5KSk7XG4gICAgICBpZiAobG9jYWwgPD0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBhbmdsZSA9ICgoc2VlZCAlIDM2MCkgLyAxODApICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IHNwZWVkID0gMC4yMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMjYwO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLnNpbihzZWVkKSAqIHRoaXMub3B0aW9ucy53aWR0aCAqIDAuMDYgKiBsb2NhbDtcbiAgICAgIGNvbnN0IHggPSB0aGlzLm9wdGlvbnMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy53aWR0aCAqIHNwZWVkICogbG9jYWwgKyBkcmlmdDtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLm9wdGlvbnMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5oZWlnaHQgKiBzcGVlZCAqIGxvY2FsICsgdGhpcy5vcHRpb25zLmhlaWdodCAqIDAuNDIgKiBsb2NhbCAqIGxvY2FsO1xuICAgICAgY29uc3QgZmFkZSA9IE1hdGgubWF4KDAsIDEgLSBsb2NhbCAqIDAuNzIpO1xuICAgICAgY29uc3Qgc2l6ZSA9IDIuNSArIChpbmRleCAlIDUpO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgeCwgeSxcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSAqICgxLjggKyBpbmRleCAlIDMpLFxuICAgICAgICBjb2xvcjogY29sb3JzW2luZGV4ICUgY29sb3JzLmxlbmd0aF0sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBjb2xvcnNbKGluZGV4ICsgMikgJSBjb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgZ2xvdzogMC41NSxcbiAgICAgICAgaW50ZW5zaXR5OiBmYWRlLFxuICAgICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJzcGFya1wiIDogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgIHg6IHRoaXMub3B0aW9ucy5jZW50ZXJYLFxuICAgICAgeTogdGhpcy5vcHRpb25zLmNlbnRlclksXG4gICAgICB3aWR0aDogODAgKyBwcm9ncmVzcyAqIDE4MCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZS5jeWFuLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgICAgIGdsb3c6IDAuNTUgKiAoMSAtIHByb2dyZXNzKSxcbiAgICAgIGludGVuc2l0eTogTWF0aC5tYXgoMCwgMSAtIHByb2dyZXNzKSxcbiAgICAgIHNoYXBlOiBcInJpbmdcIixcbiAgICB9KTtcbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFPLElBQU0sY0FBYztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFDWjtBQUlPLElBQU0sY0FBYztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFDWDs7O0FDUE8sSUFBTSxVQUFOLE1BQWM7QUFBQSxFQUNuQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQSxZQUFZLFVBQTBCLENBQUMsR0FBRztBQUN4QyxTQUFLLElBQUksUUFBUSxLQUFLO0FBQ3RCLFNBQUssSUFBSSxRQUFRLEtBQUs7QUFDdEIsU0FBSyxTQUFTLFFBQVEsVUFBVTtBQUNoQyxTQUFLLFFBQVEsUUFBUSxTQUFTLFlBQVk7QUFDMUMsU0FBSyxPQUFPLFFBQVEsUUFBUSxZQUFZO0FBQ3hDLFNBQUssVUFBVSxRQUFRLFdBQVc7QUFBQSxFQUNwQztBQUFBLEVBRUEsT0FBTyxTQUErQjtBQUNwQyxXQUFPLE9BQU8sTUFBTSxPQUFPO0FBQzNCLFNBQUssSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztBQUN4QyxTQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDeEMsU0FBSyxTQUFTLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0FBQ3ZELFNB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LFFBQU0sS0FBSSxHQUFHLENBQUMsT0FBSyxLQUFJLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLFFBQU0sSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ25PLEtBQUssVUFBVSxzQkFBc0Isc0JBQXNCLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRyxDQUFDLE1BQUksRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsS0FBRyxLQUFJLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQzNQLEtBQUssVUFBVSxzQkFBc0Isc0JBQXNCLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsTUFBSSxHQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLEdBQUUsR0FBRyxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsT0FBTztBQUFBLEVBQzNMLEtBQUssVUFBVSx1QkFBdUIsdUJBQXVCLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRyxDQUFDLE1BQUksRUFBRSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQU0sS0FBSSxHQUFHLENBQUMsT0FBSyxLQUFJLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLFFBQU0sSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQzlQLEtBQUssVUFBVSwwQkFBMEIsMEJBQTBCLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsS0FBRyxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLEtBQUcsSUFBRyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFLLEtBQUksR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNwUCxLQUFLLFVBQVUsZUFBZSxlQUFlLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxNQUFLLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDN0YsS0FBSyxVQUFVLGVBQWUsZUFBZSxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBRTdGLEtBQUssVUFBVSxlQUFlLFFBQVEsQ0FBQyxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLEdBQUUsR0FBRSxDQUFDLE9BQUssQ0FBQyxD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RSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDbEYsS0FBSyxXQUFXLGFBQWEsVUFBVSxDQUFDLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxDQUFDLEdBQUcsTUFBTTtBQUFBLEVBQzFKLEtBQUssV0FBVyxnQkFBZ0IsUUFBUSxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsSUFBRyxDQUFDLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFFbEYsS0FBSyxRQUFRLFlBQVksYUFBYSxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQy9FLEtBQUssUUFBUSxZQUFZLGFBQWEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBSyxLQUFJLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDdkosS0FBSyxRQUFRLGNBQWMsU0FBUyxRQUFRLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1MMUIsU0FBUyxLQUFLQyxNQUErQztBQUMzRCxRQUFNLFFBQVFBLEtBQUksUUFBUSxLQUFLLEVBQUU7QUFDakMsTUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUssRUFBRyxPQUFNLElBQUksTUFBTSwyQ0FBMkNBLElBQUcsSUFBSTtBQUNyRyxTQUFPO0FBQUEsSUFDTCxPQUFPLFNBQVMsTUFB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QU0sT0FBTyxRQUFRO0FBQ3JCLFlBQU0sUUFBUyxRQUFRLEtBQU07QUFDN0IsWUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLFdBQVcsT0FBTyxLQUFLLENBQUM7QUFDOUQsVUFBSSxTQUFTLEVBQUc7QUFDaEIsWUFBTSxRQUFVLE9BQU8sTUFBTyxNQUFPLEtBQUs7QUFDMUMsWUFBTSxRQUFRLE9BQVMsUUFBUSxLQUFNLE1BQU87QUFDNUMsWUFBTSxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxRQUFRLFFBQVEsT0FBTztBQUMzRCxZQUFNLElBQUksS0FBSyxRQUFRLFVBQVUsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLFFBQVEsUUFBUSxRQUFRLFFBQVE7QUFDeEYsWUFBTSxJQUFJLEtBQUssUUFBUSxVQUFVLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxRQUFRLFNBQVMsUUFBUSxRQUFRLEtBQUssUUFBUSxTQUFTLE9BQU8sUUFBUTtBQUM5SCxZQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLElBQUk7QUFDekMsWUFBTSxPQUFPLE1BQU8sUUFBUTtBQUM1QixpQkFBVyxLQUFLO0FBQUEsUUFDZDtBQUFBLFFBQUc7QUFBQSxRQUNILE9BQU87QUFBQSxRQUNQLFFBQVEsUUFBUSxNQUFNLFFBQVE7QUFBQSxRQUM5QixPQUFPQSxRQUFPLFFBQVFBLFFBQU8sTUFBTTtBQUFBLFFBQ25DLGdCQUFnQkEsU0FBUSxRQUFRLEtBQUtBLFFBQU8sTUFBTTtBQUFBLFFBQ2xELE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU8sUUFBUSxNQUFNLElBQUksVUFBVTtBQUFBLE1BQ3JDLENBQUM7QUFBQSxJQUNIO0FBQ0EsZUFBVyxLQUFLO0FBQUEsTUFDZCxHQUFHLEtBQUssUUFBUTtBQUFBLE1BQ2hCLEdBQUcsS0FBSyxRQUFRO0FBQUEsTUFDaEIsT0FBTyxLQUFLLFdBQVc7QUFBQSxNQUN2QixPQUFPLFlBQVk7QUFBQSxNQUNuQixnQkFBZ0IsWUFBWTtBQUFBLE1BQzVCLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDbEIsV0FBVyxLQUFLLElBQUksR0FBRyxJQUFJLFFBQVE7QUFBQSxNQUNuQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsV0FBTztBQUFBLEVBQ1Q7QUFDRjsiLAogICJuYW1lcyI6IFsicmFuZG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJOZW9uU2hhcGVEaXNwb3NhbCIsICJzaGFkZXIiLCAiaGV4IiwgImhleCIsICJzaGFkZXIiLCAiZGVmYXVsdHMiLCAiY29sb3JzIl0KfQo=

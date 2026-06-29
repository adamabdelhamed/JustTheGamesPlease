// projects/NeonSwarm/CombatDefinition/CombatTuning.ts
var combatTuning = {
  globalSpeedMultiplier: 1.5
};
if (!Number.isFinite(combatTuning.globalSpeedMultiplier) || combatTuning.globalSpeedMultiplier <= 0) {
  throw new Error("combatTuning: globalSpeedMultiplier must be a positive finite number.");
}

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
  let cloud = halo * (.13 + surge * .52);
  let hot = input.color * (pulse + cloud * 2.1) * input.glow + vec3f(core * surge * 1.35);
  let alpha = (core * (.72 + pulse * .2) + cloud + (1.0 - across) * bleed * electricity * .24) * input.glow;
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
    const random = seed - Math.floor(seed);
    const angle = random * Math.PI * 2;
    const radius = (instance.entranceMagnitude ?? instance.explodeMagnitude ?? 0.55) * (1 - entranceEase) * (0.35 + random * 0.75);
    return [Math.cos(angle) * radius, Math.sin(angle) * radius, (random - 0.5) * radius * 0.55];
  };
  const move = (point, z, index = 0) => {
    const p = rotate([point[0] * scaleX, -point[1] * scaleY, z * scale], rx, ry, rz);
    const e = entranceOffset(point, z, index);
    return [p[0] + (instance.x ?? 0) + e[0], p[1] + (instance.y ?? 0) + e[1], p[2] + (instance.z ?? 0) + e[2]];
  };
  const output = [];
  const add = (a, b, c2, normal) => {
    const n = normal ?? normalize(cross(sub(b, a), sub(c2, a)));
    const effect = [
      instance.energyIntensity ?? 1,
      instance.energyCoverage ?? 0.32,
      instance.energySpeed ?? 1,
      instance.energyBleed ?? 0.35
    ];
    [a, b, c2].forEach((p) => output.push({ p, n, color, glow: (instance.glow ?? 1) * (instance.opacity ?? 1) * entranceEase, effect }));
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
    if (!progress) return [a, b];
    const mx = (a[0] + b[0]) / 2 - (instance.x ?? 0), my = (a[1] + b[1]) / 2 - (instance.y ?? 0);
    const length = Math.hypot(mx, my) || 1;
    const magnitude = instance.explodeMagnitude ?? 0.55;
    const speed = magnitude * (0.45 + (Math.sin(index * 91.17) * 0.5 + 0.5) * 0.55);
    const dx = mx / length * progress * speed, dy = my / length * progress * speed + progress * progress * 0.18;
    const angle = progress * (index % 2 ? 1 : -1) * 2.4;
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
  const time = performance.now() / 1e3 * (instance.energySpeed ?? 1);
  const branchStrength = (instance.energyIntensity ?? 1) * (instance.energyCoverage ?? 0.32);
  const random = (seed) => {
    const value = Math.sin(seed * 12.9898 + shape.points.length * 78.233) * 43758.5453;
    return value - Math.floor(value);
  };
  const rotated = (x, y, radians) => [
    x * Math.cos(radians) - y * Math.sin(radians),
    x * Math.sin(radians) + y * Math.cos(radians)
  ];
  shape.points.forEach((point, index) => {
    const cycle = Math.floor(time * 2.35 + index * 0.61);
    const age = time * 2.35 + index * 0.61 - cycle;
    const seed = cycle * 37.1 + index * 11.7;
    const activeDuration = 0.18 + random(seed + 1) * 0.25;
    const hazeDuration = Math.min(1, activeDuration + 0.28 + random(seed + 2) * 0.22);
    const branchActive = age < activeDuration;
    const hazeActive = age < hazeDuration;
    if (!branchActive && !hazeActive || random(seed + 3) > Math.min(0.78, branchStrength * 0.5)) return;
    const next = shape.points[(index + 1) % shape.points.length];
    const t = 0.16 + random(seed + 4) * 0.68;
    const base = [point[0] + (next[0] - point[0]) * t, point[1] + (next[1] - point[1]) * t];
    const tx = next[0] - point[0], ty = next[1] - point[1], tl = Math.hypot(tx, ty) || 1;
    const direction = random(seed + 5) > 0.5 ? 1 : -1;
    const perpendicular = [-ty / tl * direction, tx / tl * direction];
    const firstJitter = (10 + random(seed + 6) * 10) * Math.PI / 180 * (random(seed + 7) > 0.5 ? 1 : -1);
    let heading = rotated(perpendicular[0], perpendicular[1], firstJitter);
    const segmentCount = 1 + Math.floor(random(seed + 8) * 3);
    const points = [base];
    for (let segment = 0; segment < segmentCount; segment++) {
      const length = 0.055 + random(seed + 10 + segment) * 0.095;
      const previous = points[points.length - 1];
      points.push([previous[0] + heading[0] * length, previous[1] + heading[1] * length]);
      const offset = (20 + random(seed + 20 + segment) * 40) * Math.PI / 180;
      heading = rotated(heading[0], heading[1], offset * (random(seed + 30 + segment) > 0.5 ? 1 : -1));
    }
    if (hazeActive) {
      const fade = 1 - Math.max(0, age - activeDuration) / Math.max(1e-3, hazeDuration - activeDuration);
      const drift = Math.max(0, age - activeDuration) * 0.035;
      points.slice(0, -1).forEach((start, segment) => {
        const end = points[segment + 1];
        const hazeStart = [start[0] + perpendicular[0] * drift, start[1] + perpendicular[1] * drift];
        const hazeEnd = [end[0] + perpendicular[0] * drift, end[1] + perpendicular[1] * drift];
        addLine(move(hazeStart, depth / 2 + 2e-3), move(hazeEnd, depth / 2 + 2e-3), 31 + seed + segment, 1.45 + fade * 0.55, fade * 0.34);
      });
    }
    if (branchActive) {
      points.slice(0, -1).forEach((start, segment) => {
        addLine(move(start, depth / 2 + 6e-3), move(points[segment + 1], depth / 2 + 6e-3), 11 + seed + segment, 0.42);
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
  constructor(canvas2, device, context, format) {
    this.canvas = canvas2;
    this.device = device;
    this.#context = context;
    const parent = canvas2.parentElement;
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
  static async create(canvas2) {
    if (!navigator.gpu) throw new Error("WebGPU is required for the NeonFactory shape suite.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas2.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonGeometricShapeRenderer(canvas2, device, context, format);
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
      const duration = this.disposal === "explode" /* Explode */ ? 0.85 : 0.55;
      this.#disposalProgress = Math.min(1, this.#disposalProgress + deltaSeconds / duration);
      if (this.#disposalProgress >= 1) this.disposed = true;
    }
    if (this.#entranceProgress < 1) this.#entranceProgress = Math.min(1, this.#entranceProgress + deltaSeconds / this.entranceDuration);
    return this;
  }
  renderInstance(overrides = {}) {
    const fade = this.disposal === "fadeOut" /* FadeOut */ ? 1 - this.#disposalProgress : 1;
    return {
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
  }
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
  constructor(canvas2, device, context, format) {
    this.canvas = canvas2;
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
var NeonCloudBurstRenderer = class _NeonCloudBurstRenderer {
  canvas;
  device;
  #context;
  #pipeline;
  #buffer;
  #globals;
  #bind;
  #logicalSize = null;
  constructor(canvas2, device, context, format) {
    this.canvas = canvas2;
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
  static async create(canvas2) {
    if (!navigator.gpu) throw new Error("WebGPU is required for the NeonFactory cloud suite.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas2.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonCloudBurstRenderer(canvas2, device, context, format);
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
      const c2 = { ...defaults, ...cloud };
      const color = hex2(c2.color), core = hex2(c2.coreColor);
      const offset = index * floatsPerCloud;
      packed.set([c2.x, c2.y, c2.driftX, c2.driftY, c2.age ?? 0, c2.dissipationTime, c2.size, c2.rotation, c2.seed, actionValue(c2.dissipationAction), 0, 0], offset);
      packed.set([color[0], color[1], color[2], c2.glow, core[0], core[1], core[2], c2.coreIntensity, c2.detail, c2.turbulence, c2.rimIntensity, c2.opacity], offset + 12);
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
  constructor(canvas2, device, context, format, width, height) {
    this.canvas = canvas2;
    this.device = device;
    this.#context = context;
    this.#width = width;
    this.#height = height;
    this.#primitives = new NeonPrimitiveRenderer(canvas2, device, context, format).setLogicalSize(width, height);
    this.#clouds = new NeonCloudBurstRenderer(canvas2, device, context, format).setLogicalSize(width, height);
    this.#shapes = new NeonGeometricShapeRenderer(canvas2, device, context, format).setLogicalSize(width, height);
  }
  static async create(canvas2, logicalWidth, logicalHeight) {
    if (!navigator.gpu) throw new Error("WebGPU is required for NeonFactory top-down scenes.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas2.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonTopDownSceneRenderer(canvas2, device, context, format, logicalWidth, logicalHeight);
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

// projects/NeonFactory/src/lane-runner-scenes.ts
var laneRunnerSceneIds = ["neonHall", "aurora", "crystalForge", "voidGarden", "solarArray"];
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

// projects/NeonSwarm/CombatDefinition/FamilyDefinition.ts
var FamilyDefinition = class {
  require(condition, message) {
    if (!condition) throw new Error(`${this.familyId}: ${message}`);
  }
};

// projects/NeonSwarm/CombatDefinition/GunFamily.ts
var level = (levelNumber, values) => ({
  level: levelNumber,
  projectileCount: 1,
  burstCount: 1,
  burstIntervalMs: 0,
  spreadDegrees: 0,
  pierce: 0,
  tracerEveryNthShot: 0,
  knockback: 0,
  ...values
});
var GunFamilyDefinition = class extends FamilyDefinition {
  familyId = "gun";
  label = "Gun";
  implementation = {
    autoFires: true,
    targeting: "laneForward",
    projectileModel: "kinematic",
    collisionModel: "circleVsEnemy",
    allowedShotPatterns: ["single", "rapidSingle", "burst", "heavySingle", "pairedSpread"],
    allowedProjectileBehaviors: ["straight", "piercingStraight"]
  };
  members = {
    pulsePistol: {
      label: "Pulse Pistol",
      rarity: "starter",
      unlockPhase: "start",
      shotPattern: "single",
      projectileBehavior: "straight",
      visualIdentity: { silhouette: "tinyBullet", motionLanguage: "cleanSingleShot", projectileShape: "dart", projectileColor: "cyan", trailColor: "deepBlue", coreColor: "cyan", projectileAspect: 2.8, trailWidthScale: 0.65, visualIntensity: 0.9, muzzleEffect: "crispStar", impactEffect: "pinSpark", muzzleDurationMs: 72, impactDurationMs: 105, horizontalJitter: 0 },
      levels: [
        level(1, { fireRatePerSecond: 1.35, damage: 1, projectileSpeed: 540, projectileRadius: 3, trailLength: 14, muzzleFlashScale: 0.65, hitFlashScale: 0.75 }),
        level(2, { fireRatePerSecond: 1.75, damage: 1.15, projectileSpeed: 580, projectileRadius: 3, trailLength: 16, muzzleFlashScale: 0.7, hitFlashScale: 0.8 }),
        level(3, { fireRatePerSecond: 2.15, damage: 1.35, projectileSpeed: 620, projectileRadius: 3.25, trailLength: 18, muzzleFlashScale: 0.75, hitFlashScale: 0.9 }),
        level(4, { fireRatePerSecond: 2.45, damage: 1.5, projectileSpeed: 650, projectileRadius: 3.35, trailLength: 19, muzzleFlashScale: 0.8, hitFlashScale: 0.95 }),
        level(5, { fireRatePerSecond: 2.75, damage: 1.65, projectileSpeed: 680, projectileRadius: 3.5, trailLength: 20, muzzleFlashScale: 0.85, hitFlashScale: 1 })
      ]
    },
    needlerSmg: {
      label: "Needler SMG",
      rarity: "common",
      unlockPhase: "firstBuild",
      shotPattern: "rapidSingle",
      projectileBehavior: "straight",
      visualIdentity: { silhouette: "spraySphere", motionLanguage: "stochasticNeedleSpray", projectileShape: "needle", projectileColor: "green", trailColor: "cyan", coreColor: "green", projectileAspect: 1, trailWidthScale: 0.28, visualIntensity: 0.78, muzzleEffect: "rapidFlicker", impactEffect: "needleScatter", muzzleDurationMs: 46, impactDurationMs: 85, horizontalJitter: 7 },
      levels: [
        level(1, { fireRatePerSecond: 5.25, damage: 0.42, projectileSpeed: 690, projectileRadius: 2, spreadDegrees: 1, trailLength: 10, tracerEveryNthShot: 5, muzzleFlashScale: 0.35, hitFlashScale: 0.45 }),
        level(2, { fireRatePerSecond: 7.25, damage: 0.48, projectileSpeed: 735, projectileRadius: 2, spreadDegrees: 1.5, trailLength: 11, tracerEveryNthShot: 5, muzzleFlashScale: 0.4, hitFlashScale: 0.5 }),
        level(3, { fireRatePerSecond: 9.25, damage: 0.54, projectileSpeed: 780, projectileRadius: 2.15, spreadDegrees: 2, trailLength: 12, tracerEveryNthShot: 4, muzzleFlashScale: 0.45, hitFlashScale: 0.55 }),
        level(4, { fireRatePerSecond: 10.75, damage: 0.59, projectileSpeed: 815, projectileRadius: 2.2, spreadDegrees: 2.25, trailLength: 13, tracerEveryNthShot: 4, muzzleFlashScale: 0.5, hitFlashScale: 0.6 }),
        level(5, { fireRatePerSecond: 12.25, damage: 0.64, projectileSpeed: 850, projectileRadius: 2.25, spreadDegrees: 2.5, trailLength: 14, tracerEveryNthShot: 3, muzzleFlashScale: 0.55, hitFlashScale: 0.65 })
      ]
    },
    burstCarbine: {
      label: "Burst Carbine",
      rarity: "common",
      unlockPhase: "firstBuild",
      shotPattern: "burst",
      projectileBehavior: "straight",
      visualIdentity: { silhouette: "shortTracerBullet", motionLanguage: "groupedVolley", projectileShape: "dart", projectileColor: "gold", trailColor: "orange", coreColor: "gold", projectileAspect: 2.2, trailWidthScale: 0.8, visualIntensity: 1.05, muzzleEffect: "groupedPulse", impactEffect: "burstCross", muzzleDurationMs: 86, impactDurationMs: 120, horizontalJitter: 0 },
      levels: [
        level(1, { fireRatePerSecond: 0.95, damage: 0.75, projectileSpeed: 650, projectileRadius: 2.75, burstCount: 3, burstIntervalMs: 72, spreadDegrees: 0.75, trailLength: 15, muzzleFlashScale: 0.55, hitFlashScale: 0.65 }),
        level(2, { fireRatePerSecond: 1.08, damage: 0.85, projectileSpeed: 690, projectileRadius: 2.85, burstCount: 3, burstIntervalMs: 64, spreadDegrees: 0.75, trailLength: 16, muzzleFlashScale: 0.6, hitFlashScale: 0.7 }),
        level(3, { fireRatePerSecond: 1.15, damage: 0.9, projectileSpeed: 725, projectileRadius: 3, burstCount: 4, burstIntervalMs: 58, spreadDegrees: 1, trailLength: 17, muzzleFlashScale: 0.65, hitFlashScale: 0.75 }),
        level(4, { fireRatePerSecond: 1.28, damage: 1, projectileSpeed: 760, projectileRadius: 3.05, burstCount: 4, burstIntervalMs: 54, spreadDegrees: 1, trailLength: 18, muzzleFlashScale: 0.7, hitFlashScale: 0.82 }),
        level(5, { fireRatePerSecond: 1.38, damage: 1.08, projectileSpeed: 795, projectileRadius: 3.1, burstCount: 5, burstIntervalMs: 50, spreadDegrees: 1.15, trailLength: 19, muzzleFlashScale: 0.78, hitFlashScale: 0.9 })
      ]
    },
    heavyCannon: {
      label: "Heavy Cannon",
      rarity: "uncommon",
      unlockPhase: "pressure",
      shotPattern: "heavySingle",
      projectileBehavior: "piercingStraight",
      visualIdentity: { silhouette: "chunkyBolt", motionLanguage: "slowHeavyPunch", projectileShape: "slug", projectileColor: "orange", trailColor: "red", coreColor: "gold", projectileAspect: 1.35, trailWidthScale: 1.35, visualIntensity: 1.2, muzzleEffect: "shockDiamond", impactEffect: "impactRing", muzzleDurationMs: 135, impactDurationMs: 190, horizontalJitter: 0 },
      levels: [
        level(1, { fireRatePerSecond: 0.72, damage: 2.4, projectileSpeed: 500, projectileRadius: 4.5, pierce: 1, trailLength: 22, impactRadius: 14, knockback: 14, muzzleFlashScale: 1.1, hitFlashScale: 1.25 }),
        level(2, { fireRatePerSecond: 0.82, damage: 3, projectileSpeed: 535, projectileRadius: 4.75, pierce: 1, trailLength: 24, impactRadius: 16, knockback: 18, muzzleFlashScale: 1.2, hitFlashScale: 1.35 }),
        level(3, { fireRatePerSecond: 0.9, damage: 3.6, projectileSpeed: 570, projectileRadius: 5, pierce: 2, trailLength: 26, impactRadius: 18, knockback: 22, muzzleFlashScale: 1.3, hitFlashScale: 1.5 }),
        level(4, { fireRatePerSecond: 0.98, damage: 4.1, projectileSpeed: 600, projectileRadius: 5.2, pierce: 2, trailLength: 28, impactRadius: 20, knockback: 26, muzzleFlashScale: 1.4, hitFlashScale: 1.62 }),
        level(5, { fireRatePerSecond: 1.05, damage: 4.6, projectileSpeed: 630, projectileRadius: 5.4, pierce: 3, trailLength: 30, impactRadius: 22, knockback: 30, muzzleFlashScale: 1.5, hitFlashScale: 1.75 })
      ]
    },
    splitterRifle: {
      label: "Splitter Rifle",
      rarity: "uncommon",
      unlockPhase: "pressure",
      shotPattern: "pairedSpread",
      projectileBehavior: "straight",
      visualIdentity: { silhouette: "pairedBolt", motionLanguage: "currentLaneFork", projectileShape: "splitBolt", projectileColor: "violet", trailColor: "pink", coreColor: "violet", projectileAspect: 3.4, trailWidthScale: 0.55, visualIntensity: 1, muzzleEffect: "twinProngs", impactEffect: "splitRipple", muzzleDurationMs: 95, impactDurationMs: 145, horizontalJitter: 0 },
      levels: [
        level(1, { fireRatePerSecond: 1.15, damage: 0.8, projectileSpeed: 585, projectileRadius: 2.75, collisionRadiusScale: 1.85, projectileCount: 2, spreadDegrees: 2.5, trailLength: 14, muzzleFlashScale: 0.65, hitFlashScale: 0.65 }),
        level(2, { fireRatePerSecond: 1.35, damage: 0.95, projectileSpeed: 625, projectileRadius: 2.85, collisionRadiusScale: 1.85, projectileCount: 2, spreadDegrees: 3, trailLength: 15, muzzleFlashScale: 0.7, hitFlashScale: 0.7 }),
        level(3, { fireRatePerSecond: 1.5, damage: 1, projectileSpeed: 660, projectileRadius: 2.95, collisionRadiusScale: 1.9, projectileCount: 3, spreadDegrees: 5, trailLength: 16, muzzleFlashScale: 0.78, hitFlashScale: 0.75 }),
        level(4, { fireRatePerSecond: 1.7, damage: 1.12, projectileSpeed: 700, projectileRadius: 3.05, collisionRadiusScale: 1.9, projectileCount: 3, spreadDegrees: 5.5, trailLength: 17, muzzleFlashScale: 0.84, hitFlashScale: 0.82 }),
        level(5, { fireRatePerSecond: 1.85, damage: 1.2, projectileSpeed: 735, projectileRadius: 3.1, collisionRadiusScale: 1.95, projectileCount: 4, spreadDegrees: 6.25, trailLength: 18, muzzleFlashScale: 0.92, hitFlashScale: 0.9 })
      ]
    }
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, gun] of Object.entries(this.members)) {
      this.require(this.implementation.allowedShotPatterns.includes(gun.shotPattern), `${id} has an unsupported shot pattern.`);
      this.require(this.implementation.allowedProjectileBehaviors.includes(gun.projectileBehavior), `${id} has an unsupported projectile behavior.`);
      this.require(neonPalette[gun.visualIdentity.projectileColor] !== void 0, `${id} has an unknown projectile color.`);
      this.require(neonPalette[gun.visualIdentity.trailColor] !== void 0, `${id} has an unknown trail color.`);
      this.require(gun.visualIdentity.muzzleDurationMs > 0 && gun.visualIdentity.impactDurationMs > 0, `${id} effect durations must be positive.`);
      this.require(gun.levels.length > 0, `${id} must define levels.`);
      this.require(gun.levels.length === 5, `${id} must define exactly five levels.`);
      for (const tuning of gun.levels) {
        this.require(tuning.fireRatePerSecond > 0, `${id} level ${tuning.level} fire rate must be positive.`);
        this.require(tuning.damage > 0 && tuning.projectileSpeed > 0 && tuning.projectileRadius > 0, `${id} level ${tuning.level} has invalid projectile power.`);
        this.require(tuning.collisionRadiusScale === void 0 || tuning.collisionRadiusScale >= 1, `${id} level ${tuning.level} collision radius scale cannot shrink collision.`);
        this.require(tuning.burstCount >= 1 && tuning.projectileCount >= 1, `${id} level ${tuning.level} has invalid counts.`);
      }
    }
  }
};
var gunFamily = new GunFamilyDefinition();

// projects/NeonSwarm/CombatDefinition/OrbFamily.ts
var OrbFamilyDefinition = class extends FamilyDefinition {
  familyId = "orb";
  label = "Orb Enemy";
  members = {
    basicOrb: {
      label: "Basic Orb",
      health: 1,
      speed: 58,
      radius: 6.25,
      columnSpan: 1,
      contactDamage: 1,
      score: 10,
      baseColor: "pink",
      rimColor: "orange",
      shadowColor: "violet",
      shapeId: "hunter-eye",
      glow: 0.82,
      surfaceTexture: 0.28,
      rimIntensity: 1.25,
      shadowStrength: 0.72,
      hitFlashDurationMs: 90,
      deathFlashScale: 1.8,
      shapeZoom: 3.4,
      impactResistance: 1,
      explosionMagnitude: 0.48,
      spawnEntrance: "scatter",
      spawnSound: "EnemySpawn",
      deathSound: "EnemyDestroyed",
      deathVisual: "cloud"
    },
    glassShield: {
      label: "Glass Shield",
      health: 0.1,
      speed: 58,
      radius: 5.6,
      columnSpan: 1,
      contactDamage: 0.1,
      score: 3,
      baseColor: "pink",
      rimColor: "orange",
      shadowColor: "violet",
      shapeId: "trick-gate",
      glow: 0.62,
      surfaceTexture: 0.12,
      rimIntensity: 0.9,
      shadowStrength: 0.45,
      hitFlashDurationMs: 70,
      deathFlashScale: 1.1,
      shapeZoom: 3.05,
      impactResistance: 0.65,
      explosionMagnitude: 0.25,
      spawnEntrance: "fade",
      spawnSound: null,
      deathSound: "GlassShieldShatter",
      deathVisual: "none"
    },
    winger: {
      label: "Winger",
      health: 1,
      speed: 76,
      radius: 6.25,
      columnSpan: 1,
      contactDamage: 1,
      score: 14,
      baseColor: "pink",
      rimColor: "orange",
      shadowColor: "violet",
      shapeId: "elite-wings",
      glow: 0.86,
      surfaceTexture: 0.22,
      rimIntensity: 1.2,
      shadowStrength: 0.66,
      hitFlashDurationMs: 85,
      deathFlashScale: 1.75,
      shapeZoom: 3.25,
      impactResistance: 1,
      explosionMagnitude: 0.48,
      spawnEntrance: "scatter",
      spawnSound: "EnemySpawn",
      deathSound: "EnemyDestroyed",
      deathVisual: "cloud"
    },
    tank: {
      label: "Tank",
      health: 6,
      speed: 44,
      radius: 16,
      columnSpan: 3,
      contactDamage: 2,
      score: 80,
      baseColor: "pink",
      rimColor: "orange",
      shadowColor: "violet",
      shapeId: "tank-bunker",
      glow: 1.05,
      surfaceTexture: 0.18,
      rimIntensity: 1.45,
      shadowStrength: 0.85,
      hitFlashDurationMs: 130,
      deathFlashScale: 2.7,
      shapeZoom: 4.4,
      impactResistance: 2.1,
      explosionMagnitude: 0.9,
      spawnEntrance: "scatter",
      spawnSound: "Boss",
      deathSound: "BossDestroyed",
      deathVisual: "cloud"
    }
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, orb] of Object.entries(this.members)) {
      this.require(orb.health > 0, `${id} health must be positive.`);
      this.require(orb.speed > 0, `${id} speed must be positive.`);
      this.require(orb.radius > 0, `${id} radius must be positive.`);
      this.require(Number.isInteger(orb.columnSpan) && orb.columnSpan >= 1, `${id} columnSpan must be a positive integer.`);
      this.require(orb.glow >= 0 && orb.rimIntensity >= 0, `${id} visual intensities cannot be negative.`);
      this.require(orb.surfaceTexture >= 0 && orb.surfaceTexture <= 1, `${id} surfaceTexture must be from 0 to 1.`);
    }
  }
};
var orbFamily = new OrbFamilyDefinition();

// projects/NeonSwarm/CombatDefinition/MultiplierFamily.ts
var MultiplierFamilyDefinition = class extends FamilyDefinition {
  familyId = "multiplier";
  label = "Squad Multiplier";
  members = {
    squadPlusOne: {
      label: "+1 Wingmate",
      squadAdded: 1,
      maxSquadSize: 10,
      membersPerRow: 5,
      memberRadius: 5.25,
      spacing: 29,
      pickupColor: "gold",
      coreColor: "cyan",
      pulseRate: 2.2,
      pickupShapeZoom: 3.1
    }
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, item] of Object.entries(this.members)) {
      this.require(item.squadAdded > 0, `${id} must add squad members.`);
      this.require(item.maxSquadSize >= item.membersPerRow, `${id} max squad must fit at least one row.`);
      this.require(item.memberRadius > 0 && item.spacing > item.memberRadius * 2, `${id} member geometry overlaps.`);
      this.require(neonPalette[item.pickupColor] !== void 0, `${id} has an unknown pickup color.`);
    }
  }
};
var multiplierFamily = new MultiplierFamilyDefinition();

// projects/NeonSwarm/CombatDefinition/ShieldFamily.ts
var ShieldFamilyDefinition = class extends FamilyDefinition {
  familyId = "shield";
  label = "Shield";
  members = {
    lightGuard: {
      label: "Light Guard",
      family: "shield",
      rarity: "starter",
      mode: "charge",
      radius: 28,
      maxCharges: 2,
      cooldownSeconds: 8,
      contactDamage: 0,
      pushDistance: 0,
      slowMultiplier: 1,
      color: "cyan",
      orbiterShape: "dot",
      orbiterCount: 4,
      orbiterSpeed: 1,
      orbiterSize: 4.5,
      agentNotes: "Lightweight shield with two points of strength."
    },
    satelliteGuard: {
      label: "Satellite Guard",
      family: "shield",
      rarity: "common",
      mode: "charge",
      radius: 28,
      maxCharges: 4,
      cooldownSeconds: 10,
      contactDamage: 0,
      pushDistance: 0,
      slowMultiplier: 1,
      color: "violet",
      orbiterShape: "dot",
      orbiterCount: 6,
      orbiterSpeed: 0.75,
      orbiterSize: 4.75,
      agentNotes: "Balanced shield with four points of strength."
    },
    hexGuard: {
      label: "Hex Guard",
      family: "shield",
      rarity: "uncommon",
      mode: "charge",
      radius: 30,
      maxCharges: 7,
      cooldownSeconds: 12,
      contactDamage: 0,
      pushDistance: 0,
      slowMultiplier: 1,
      color: "gold",
      orbiterShape: "hex",
      orbiterCount: 8,
      orbiterSpeed: 0.45,
      orbiterSize: 5,
      agentNotes: "Heavy shield with seven points of strength."
    }
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, shield] of Object.entries(this.members)) {
      this.require(shield.mode === "charge", `${id} must use the shared charge behavior.`);
      this.require(shield.radius > 0, `${id} radius must be positive.`);
      this.require(shield.maxCharges > 0, `${id} strength must be positive.`);
      this.require(shield.orbiterCount > 0, `${id} must have orbiters.`);
      this.require(shield.orbiterSpeed >= 0, `${id} orbiterSpeed cannot be negative.`);
      this.require(neonPalette[shield.color] !== void 0, `${id} has an unknown color.`);
    }
  }
};
var shieldFamily = new ShieldFamilyDefinition();

// projects/NeonSwarm/CombatDefinition/SwordFamily.ts
var SwordFamilyDefinition = class extends FamilyDefinition {
  familyId = "sword";
  label = "Sword";
  /**
   * Family-level implementation notes:
   * - Swords are not period-based like guns. They swing only when a valid target
   *   is within range and cooldown is ready. They idle silently otherwise.
   * - One active sword per player (family-scoped exclusivity).
   * - Repeated pickups of the same sword increase that sword's active level.
   * - Can coexist with an active Gun and an active Shield simultaneously.
   * - Targeting is lane-aware via queryNearbyThreats().
   * - The slash animation runs for slashDurationMs milliseconds, then fades.
   * - Damage is applied immediately when the swing starts (not at animation end).
   *
   * Precedence: sword attacks occur after shieldBlock/shieldPulse but before
   * shieldContactDamage and shieldAura. See main.ts nearPlayerEffectOrder.
   */
  members = {
    /**
     * Arc Blade - Core sword. Fast, curved, targets nearest enemy in lane.
     * Short cooldown makes it useful against dense single-lane waves.
     */
    arcBlade: {
      label: "Arc Blade",
      family: "sword",
      rarity: "starter",
      range: 52,
      arcDegrees: 70,
      damage: 1.5,
      cooldownSeconds: 0.55,
      maxTargets: 2,
      targetingMode: "nearestInCurrentLane",
      slashDurationMs: 150,
      color: "cyan",
      slashThickness: 1,
      agentNotes: "Fast and sharp. Curved neon slash. 120-180ms feel. Fading afterimage. Like a whip-like katana arc."
    },
    /**
     * Cleaver - Heavy sword. Slower, but sweeps across every column.
     * Starts with 2 rows of vertical reach and scales to 4 rows at level 5.
     */
    cleaver: {
      label: "Cleaver",
      family: "sword",
      rarity: "common",
      range: 68,
      arcDegrees: 360,
      damage: 2.4,
      damageAtLevel5: 3.4,
      cooldownSeconds: 1.35,
      maxTargets: 12,
      rowReach: { level1: 2, level5: 4 },
      targetingMode: "nearestInEitherLane",
      slashDurationMs: 260,
      color: "orange",
      slashThickness: 1.9,
      agentNotes: "Heavy all-column sweep. Repeated cleaver pickups level it up from 2 rows of reach to 4 rows at level 5, with more total damage per swing."
    }
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, sword] of Object.entries(this.members)) {
      this.require(sword.range > 0, `${id} range must be positive.`);
      this.require(sword.arcDegrees > 0 && sword.arcDegrees <= 360, `${id} arcDegrees must be in (0, 360].`);
      this.require(sword.damage > 0, `${id} damage must be positive.`);
      if (sword.damageAtLevel5 !== void 0) this.require(sword.damageAtLevel5 >= sword.damage, `${id} damageAtLevel5 must be at least damage.`);
      this.require(sword.cooldownSeconds > 0, `${id} cooldownSeconds must be positive.`);
      this.require(sword.maxTargets >= 1, `${id} maxTargets must be at least 1.`);
      if (sword.rowReach) {
        this.require(Number.isInteger(sword.rowReach.level1) && sword.rowReach.level1 >= 1, `${id} rowReach.level1 must be a positive integer.`);
        this.require(Number.isInteger(sword.rowReach.level5) && sword.rowReach.level5 >= sword.rowReach.level1, `${id} rowReach.level5 must be at least level1.`);
      }
      this.require(sword.slashDurationMs > 0, `${id} slashDurationMs must be positive.`);
      this.require(sword.slashThickness > 0, `${id} slashThickness must be positive.`);
      this.require(neonPalette[sword.color] !== void 0, `${id} has an unknown color.`);
    }
  }
};
var swordFamily = new SwordFamilyDefinition();

// projects/NeonSwarm/CombatDefinition/TrackDefinition.ts
var isEnemy = (id) => id.startsWith("enemy.");
var enemyIdFromTrackId = (id) => {
  if (id === "enemy.basic") return "basicOrb";
  if (!id.startsWith("enemy.")) return null;
  const candidate = id.slice("enemy.".length);
  return candidate in orbFamily.members ? candidate : null;
};
function parseTrackRows(track) {
  const rows = track.layout.split(/\r?\n/).map((text, sourceIndex) => ({ text: text.trim(), sourceIndex: sourceIndex + 1 })).filter((row) => row.text.length > 0);
  if (rows.length === 0) throw new Error("Track layout must contain at least one row.");
  return rows;
}
function parseTrackDefinition(track) {
  if (track.balance.enemyHp <= 0) throw new Error("Track balance enemyHp must be greater than zero.");
  if (track.balance.enemySpeed <= 0) throw new Error("Track balance enemySpeed must be greater than zero.");
  for (const [symbol, entry] of Object.entries(track.legend)) {
    if ([...symbol].length !== 1 || /\s|\|/.test(symbol)) {
      throw new Error(`Track legend key "${symbol}" must be one non-whitespace character other than "|".`);
    }
    if (!entry.id) throw new Error(`Track legend symbol "${symbol}" must have an id.`);
    if (entry.speed !== void 0 && entry.speed <= 0) {
      throw new Error(`Track legend symbol "${symbol}" speed must be greater than zero.`);
    }
  }
  const rows = parseTrackRows(track);
  let leftWidth;
  let rightWidth;
  const entities = [];
  rows.forEach((row, rowIndex) => {
    const pipeCount = [...row.text].filter((character) => character === "|").length;
    if (pipeCount !== 1) {
      throw new Error(`Track layout line ${row.sourceIndex} must contain exactly one "|" separator; found ${pipeCount}.`);
    }
    const [left, right] = row.text.split("|").map((side) => side.replace(/\s/g, ""));
    leftWidth ??= left.length;
    rightWidth ??= right.length;
    if (left.length !== leftWidth) {
      throw new Error(`Track layout line ${row.sourceIndex} has left width ${left.length}; expected ${leftWidth}.`);
    }
    if (right.length !== rightWidth) {
      throw new Error(`Track layout line ${row.sourceIndex} has right width ${right.length}; expected ${rightWidth}.`);
    }
    const distanceFromPlayer = rows.length - 1 - rowIndex;
    for (const [side, lane] of [["left", left], ["right", right]]) {
      const occupiedBy = /* @__PURE__ */ new Map();
      [...lane].forEach((symbol, laneIndex) => {
        const entry = track.legend[symbol];
        if (!entry) {
          throw new Error(`Track layout line ${row.sourceIndex} uses symbol "${symbol}" at ${side} lane index ${laneIndex}, but it is missing from the legend.`);
        }
        if (entry.id === "empty") return;
        const enemyId = enemyIdFromTrackId(entry.id);
        const columnSpan = enemyId ? orbFamily.members[enemyId].columnSpan : 1;
        if (laneIndex + columnSpan > lane.length) {
          throw new Error(`Track layout line ${row.sourceIndex} places ${entry.id} at ${side} lane index ${laneIndex}, but it needs ${columnSpan} columns and only ${lane.length - laneIndex} remain.`);
        }
        for (let offset = 0; offset < columnSpan; offset++) {
          const occupied = occupiedBy.get(laneIndex + offset);
          if (occupied) {
            throw new Error(`Track layout line ${row.sourceIndex} places ${entry.id} on ${side} lane index ${laneIndex + offset}, already occupied by ${occupied}.`);
          }
        }
        for (let offset = 0; offset < columnSpan; offset++) occupiedBy.set(laneIndex + offset, entry.id);
        entities.push({
          id: entry.id,
          symbol,
          side,
          laneIndex,
          columnSpan,
          rowIndex,
          distanceFromPlayer,
          speedMultiplier: (entry.speed ?? 1) * (isEnemy(entry.id) ? track.balance.enemySpeed : 1)
        });
      });
    }
  });
  return entities.sort((a, b) => a.distanceFromPlayer - b.distanceFromPlayer || a.rowIndex - b.rowIndex || a.side.localeCompare(b.side) || a.laneIndex - b.laneIndex);
}

// projects/NeonSwarm/CombatDefinition/TrackBuilder.ts
var c = {
  left: { outer: 0, nearOuter: 1, mid: 2, nearInner: 3, inner: 4 },
  right: { inner: 5, nearInner: 6, mid: 7, nearOuter: 8, outer: 9 }
};
var defaultLaneWidth = 5;
var emptySymbol = ".";
var playerSymbol = "M";
var enemyAliases = {
  basic: "enemy.basic",
  basicOrb: "enemy.basicOrb",
  glass: "enemy.glassShield",
  glassShield: "enemy.glassShield",
  winger: "enemy.winger",
  tank: "enemy.tank"
};
var weaponPrefixes = {
  gun: "pickup.weapon.gun.",
  shield: "pickup.weapon.shield.",
  sword: "pickup.weapon.sword."
};
var pickupAliases = {
  "unitMultiplier.2x": "pickup.unitMultiplier.2x",
  "unitMultiplier.squadPlusOne": "pickup.unitMultiplier.2x"
};
var preferredSymbols = {
  "enemy.basic": "E",
  "enemy.basicOrb": "E",
  "enemy.glassShield": "D",
  "enemy.winger": "W",
  "enemy.tank": "T",
  "pickup.weapon.gun.pulsePistol": "G",
  "pickup.weapon.gun.needlerSmg": "N",
  "pickup.weapon.gun.burstCarbine": "B",
  "pickup.weapon.gun.heavyCannon": "H",
  "pickup.weapon.gun.splitterRifle": "R",
  "pickup.weapon.shield.lightGuard": "S",
  "pickup.weapon.shield.satelliteGuard": "V",
  "pickup.weapon.shield.hexGuard": "X",
  "pickup.weapon.sword.arcBlade": "a",
  "pickup.weapon.sword.cleaver": "c",
  "pickup.unitMultiplier.2x": "2"
};
var fallbackSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789!#$%&*+,-/:;<=>?@^_~".split("").filter((symbol) => symbol !== emptySymbol && symbol !== playerSymbol);
function requireInteger(value, label) {
  if (!Number.isInteger(value)) throw new Error(`${label} must be an integer.`);
}
function requirePositiveInteger(value, label) {
  requireInteger(value, label);
  if (value <= 0) throw new Error(`${label} must be greater than zero.`);
}
function normalizeSpeed(speed, label) {
  const value = speed ?? 1;
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${label} speed must be greater than zero.`);
  return value;
}
function normalizeEnemyId(id) {
  if (id.startsWith("enemy.")) return id;
  return enemyAliases[id] ?? `enemy.${id}`;
}
function normalizeWeaponId(id) {
  if (id.startsWith("pickup.weapon.")) return id;
  const dotIndex = id.indexOf(".");
  if (dotIndex <= 0) throw new Error(`Weapon id "${id}" must use family.id shorthand or a canonical pickup.weapon id.`);
  const family = id.slice(0, dotIndex);
  const member = id.slice(dotIndex + 1);
  const prefix = weaponPrefixes[family];
  if (!prefix) throw new Error(`Weapon id "${id}" has unknown weapon family "${family}".`);
  return `${prefix}${member}`;
}
function normalizePickupId(id) {
  if (id.startsWith("pickup.")) return id;
  return pickupAliases[id] ?? `pickup.${id}`;
}
function enemyMemberId(canonicalId) {
  if (canonicalId === "enemy.basic") return "basicOrb";
  if (!canonicalId.startsWith("enemy.")) return null;
  return canonicalId.slice("enemy.".length);
}
function validateCanonicalId(id) {
  const enemyId = enemyMemberId(id);
  if (enemyId) {
    if (!(enemyId in orbFamily.members)) throw new Error(`Unknown enemy id "${id}".`);
    return;
  }
  const validators = [
    ["pickup.weapon.gun.", gunFamily.members, "gun"],
    ["pickup.weapon.shield.", shieldFamily.members, "shield"],
    ["pickup.weapon.sword.", swordFamily.members, "sword"]
  ];
  for (const [prefix, members, label] of validators) {
    if (!id.startsWith(prefix)) continue;
    const memberId = id.slice(prefix.length);
    if (!(memberId in members)) throw new Error(`Unknown ${label} id "${id}".`);
    return;
  }
  if (id === "pickup.unitMultiplier.2x") return;
  if (id.startsWith("pickup.unitMultiplier.")) {
    const memberId = id.slice("pickup.unitMultiplier.".length);
    if (!(memberId in multiplierFamily.members)) throw new Error(`Unknown multiplier id "${id}".`);
    return;
  }
  throw new Error(`Unsupported track entity id "${id}".`);
}
function spanFor(id) {
  const enemyId = enemyMemberId(id);
  return enemyId && enemyId in orbFamily.members ? orbFamily.members[enemyId].columnSpan : 1;
}
var TrackBuilderCore = class {
  constructor(options) {
    this.options = options;
    this.laneWidth = options.laneWidth ?? defaultLaneWidth;
    requirePositiveInteger(this.laneWidth, "Track laneWidth");
    if (this.laneWidth < 3) throw new Error("Track laneWidth must be at least 3.");
    if (!options.label.trim()) throw new Error("Track label is required.");
    if (!options.description.trim()) throw new Error("Track description is required.");
    if (options.balance.enemyHp <= 0) throw new Error("Track balance enemyHp must be greater than zero.");
    if (options.balance.enemySpeed <= 0) throw new Error("Track balance enemySpeed must be greater than zero.");
    this.validateColumn(options.playerStartColumn ?? c.left.mid, "playerStartColumn", 1);
  }
  laneWidth;
  placements = [];
  cursor = 1;
  enemy(id, options) {
    this.place(normalizeEnemyId(id), options, this.cursor, "enemy");
    return this;
  }
  weapon(id, options) {
    this.place(normalizeWeaponId(id), options, this.cursor, "weapon");
    return this;
  }
  pickup(id, options) {
    this.place(normalizePickupId(id), options, this.cursor, "pickup");
    return this;
  }
  advanceRows(rows) {
    requirePositiveInteger(rows, "advanceRows rows");
    this.cursor += rows;
    return this;
  }
  respite(rows) {
    return this.advanceRows(rows);
  }
  section(name, rows, build) {
    if (!name.trim()) throw new Error("Track section name is required.");
    requirePositiveInteger(rows, `Track section "${name}" rows`);
    const section = new TrackSectionBuilderCore(this, name, this.cursor, rows);
    build(section);
    this.cursor += rows;
    return this;
  }
  pressure(rows, build) {
    return this.section("pressure", rows, build);
  }
  rebuild(rows, build) {
    return this.section("rebuild", rows, build);
  }
  line(enemyId, options) {
    this.addLine(this.cursor, normalizeEnemyId(enemyId), options, "line");
    return this;
  }
  alternating(enemyId, options) {
    this.addAlternating(this.cursor, normalizeEnemyId(enemyId), options, "alternating");
    return this;
  }
  wall(enemyId, options) {
    this.addWall(this.cursor, normalizeEnemyId(enemyId), options, "wall");
    return this;
  }
  drip(enemyId, options) {
    this.addDrip(this.cursor, normalizeEnemyId(enemyId), options, "drip");
    return this;
  }
  addSectionEnemy(baseRow, sectionName, rowOffset, id, options) {
    this.place(normalizeEnemyId(id), options, baseRow + rowOffset, `section "${sectionName}" enemy`);
  }
  addSectionWeapon(baseRow, sectionName, rowOffset, id, options) {
    this.place(normalizeWeaponId(id), options, baseRow + rowOffset, `section "${sectionName}" weapon`);
  }
  addSectionPickup(baseRow, sectionName, rowOffset, id, options) {
    this.place(normalizePickupId(id), options, baseRow + rowOffset, `section "${sectionName}" pickup`);
  }
  addLine(baseRow, enemyId, options, label) {
    requirePositiveInteger(options.count, `${label} count`);
    const gap = options.gap ?? 0;
    requireInteger(gap, `${label} gap`);
    if (gap < 0) throw new Error(`${label} gap cannot be negative.`);
    for (let index = 0; index < options.count; index++) {
      this.place(enemyId, { column: options.column, speed: options.speed }, baseRow + index * (gap + 1), label);
    }
  }
  addAlternating(baseRow, enemyId, options, label) {
    requirePositiveInteger(options.count, `${label} count`);
    if (options.columns.length === 0) throw new Error(`${label} columns must include at least one column.`);
    const gap = options.gap ?? 0;
    requireInteger(gap, `${label} gap`);
    if (gap < 0) throw new Error(`${label} gap cannot be negative.`);
    for (let index = 0; index < options.count; index++) {
      const column = options.columns[index % options.columns.length];
      this.place(enemyId, { column, speed: options.speed }, baseRow + index * (gap + 1), label);
    }
  }
  addWall(baseRow, enemyId, options, label) {
    if (options.columns.length === 0) throw new Error(`${label} columns must include at least one column.`);
    for (const column of options.columns) {
      this.place(enemyId, { column, speed: options.speed }, baseRow, label);
    }
  }
  addDrip(baseRow, enemyId, options, label) {
    requirePositiveInteger(options.rows, `${label} rows`);
    requirePositiveInteger(options.every, `${label} every`);
    for (let offset = 0; offset < options.rows; offset += options.every) {
      this.place(enemyId, { column: options.column, speed: options.speed }, baseRow + offset, label);
    }
  }
  build() {
    const playerStartColumn = this.options.playerStartColumn ?? c.left.mid;
    const maxPlacementRow = this.placements.reduce((max, item) => Math.max(max, item.row), 0);
    const rowCount = Math.max(this.cursor, maxPlacementRow + 1, 1);
    const rows = Array.from({ length: rowCount }, () => Array.from({ length: this.laneWidth * 2 }, () => emptySymbol));
    const occupied = Array.from({ length: rowCount }, () => /* @__PURE__ */ new Map());
    const legend = /* @__PURE__ */ new Map();
    legend.set(emptySymbol, { id: "empty", speed: 1 });
    legend.set(playerSymbol, { id: "player.start", speed: 1 });
    const usedSymbols = /* @__PURE__ */ new Set([emptySymbol, playerSymbol]);
    const symbolByEntity = /* @__PURE__ */ new Map();
    const playerCells = this.cellsFor(playerStartColumn, 1);
    for (const cell of playerCells) occupied[0].set(cell.globalColumn, "player.start");
    rows[0][playerStartColumn] = playerSymbol;
    for (const placement of this.placements) {
      const symbol = this.symbolFor(placement, usedSymbols, symbolByEntity);
      legend.set(symbol, { id: placement.id, speed: placement.speed });
      for (const cell of this.cellsFor(placement.column, placement.span)) {
        const existing = occupied[placement.row].get(cell.globalColumn);
        if (existing) {
          throw new Error(`Track placement overlap at row ${placement.row}, column ${cell.globalColumn}. Existing id "${existing}", new id "${placement.id}".`);
        }
        occupied[placement.row].set(cell.globalColumn, placement.id);
      }
      rows[placement.row][placement.column] = symbol;
    }
    const definition = {
      layout: `
${rows.slice().reverse().map((row) => `${row.slice(0, this.laneWidth).join("")} | ${row.slice(this.laneWidth).join("")}`).join("\n")}
`,
      legend: Object.fromEntries([...legend.entries()].map(([symbol, entry]) => [
        symbol,
        entry.speed === 1 ? { id: entry.id } : { id: entry.id, speed: entry.speed }
      ])),
      balance: this.options.balance
    };
    parseTrackDefinition(definition);
    return {
      label: this.options.label,
      description: this.options.description,
      environment: this.options.environment,
      definition
    };
  }
  validateSectionOffset(sectionName, rowOffset, rows) {
    requireInteger(rowOffset, `Track section "${sectionName}" row offset`);
    if (rowOffset < 0 || rowOffset >= rows) {
      throw new Error(`Track section "${sectionName}" row offset ${rowOffset} is outside the 0-${rows - 1} section range.`);
    }
  }
  validateSectionSpan(sectionName, rowOffset, rows, coveredRows) {
    requirePositiveInteger(coveredRows, `Track section "${sectionName}" covered rows`);
    this.validateSectionOffset(sectionName, rowOffset, rows);
    const lastOffset = rowOffset + coveredRows - 1;
    if (lastOffset >= rows) {
      throw new Error(`Track section "${sectionName}" pattern reaches row offset ${lastOffset}, outside the 0-${rows - 1} section range.`);
    }
  }
  place(id, options, row, label) {
    requireInteger(row, `${label} row`);
    if (row < 0) throw new Error(`${label} row cannot be negative.`);
    validateCanonicalId(id);
    const span = spanFor(id);
    this.validateColumn(options.column, `${label} column`, span);
    this.placements.push({
      row,
      column: options.column,
      id,
      speed: normalizeSpeed(options.speed, label),
      span
    });
  }
  validateColumn(column, label, span) {
    requireInteger(column, label);
    const totalWidth = this.laneWidth * 2;
    if (column < 0 || column >= totalWidth) throw new Error(`${label} ${column} is outside the 0-${totalWidth - 1} track range.`);
    const sideColumn = column % this.laneWidth;
    if (sideColumn + span > this.laneWidth) {
      throw new Error(`${label} ${column} cannot fit a ${span}-column entity inside a ${this.laneWidth}-column lane.`);
    }
  }
  cellsFor(column, span) {
    return Array.from({ length: span }, (_, offset) => ({ globalColumn: column + offset }));
  }
  symbolFor(placement, usedSymbols, symbolByEntity) {
    const key = `${placement.id}@${placement.speed}`;
    const existing = symbolByEntity.get(key);
    if (existing) return existing;
    const preferred = preferredSymbols[placement.id];
    const symbol = preferred && !usedSymbols.has(preferred) ? preferred : fallbackSymbols.find((candidate) => !usedSymbols.has(candidate));
    if (!symbol) throw new Error("Track builder ran out of one-character legend symbols.");
    usedSymbols.add(symbol);
    symbolByEntity.set(key, symbol);
    return symbol;
  }
};
var TrackSectionBuilderCore = class {
  constructor(parent, name, baseRow, rows) {
    this.parent = parent;
    this.name = name;
    this.baseRow = baseRow;
    this.rows = rows;
  }
  rowOffset = 0;
  at(rowOffset) {
    this.parent.validateSectionOffset(this.name, rowOffset, this.rows);
    this.rowOffset = rowOffset;
    return this;
  }
  enemy(id, options) {
    this.parent.addSectionEnemy(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }
  weapon(id, options) {
    this.parent.addSectionWeapon(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }
  pickup(id, options) {
    this.parent.addSectionPickup(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }
  line(enemyId, options) {
    const gap = options.gap ?? 0;
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, (options.count - 1) * (gap + 1) + 1);
    this.parent.addLine(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" line`);
    return this;
  }
  alternating(enemyId, options) {
    const gap = options.gap ?? 0;
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, (options.count - 1) * (gap + 1) + 1);
    this.parent.addAlternating(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" alternating`);
    return this;
  }
  wall(enemyId, options) {
    this.parent.addWall(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" wall`);
    return this;
  }
  drip(enemyId, options) {
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, options.rows);
    this.parent.addDrip(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" drip`);
    return this;
  }
};
var trackBuilder = {
  create(options) {
    return new TrackBuilderCore(options);
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/TrackComposer.ts
var targetRowsByTier = {
  1: 105,
  2: 265,
  3: 425
};
var enemyHpByTier = {
  1: 1,
  2: 1,
  3: 1
};
var pick = (items, tier, cycleIndex) => items[Math.min(items.length - 1, tier - 1 + cycleIndex % 2)];
function createContext(builder, tier) {
  let cursor = 1;
  return {
    tier,
    get cursor() {
      return cursor;
    },
    rebuild(rows, build) {
      builder.rebuild(rows, build);
      cursor += rows;
    },
    pressure(rows, build) {
      builder.pressure(rows, build);
      cursor += rows;
    },
    respite(rows) {
      builder.respite(rows);
      cursor += rows;
    }
  };
}
function gunSchoolPressure(section, tier, cycleIndex) {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 22 });
  section.at(22).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 12 });
  if (cycleIndex > 0) section.at(1).drip("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, rows: 34, every: 6 });
  if (cycleIndex > 0) section.at(34).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 8 });
  if (tier >= 2 && cycleIndex > 0) section.at(6).alternating("winger", { columns: [c.right.inner, c.left.inner], count: 8, gap: 3 });
  if (tier >= 3 && cycleIndex > 0) {
    section.at(24).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
    section.at(28).wall("basic", { columns: [c.left.nearInner, c.right.nearInner] });
  }
}
function guardBladePressure(section, tier, cycleIndex) {
  const hasCleaverSetup = tier >= 2 && cycleIndex > 0;
  section.at(0).line("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, count: 18 });
  section.at(18).alternating("basic", { columns: [c.left.mid, c.right.mid], count: hasCleaverSetup ? 12 : 24, gap: hasCleaverSetup ? 1 : void 0 });
  if (cycleIndex > 0) section.at(3).alternating("glassShield", { columns: [c.left.outer, c.right.outer], count: 8, gap: 3 });
  if (cycleIndex > 0) section.at(8).wall("basic", { columns: [c.left.mid, c.right.mid] });
  if (tier >= 2 && cycleIndex > 0) section.at(14).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 6, gap: 3 });
  if (tier >= 3 && cycleIndex > 0) section.at(25).enemy("tank", { column: c.right.inner });
}
function crystalSiegePressure(section, tier, cycleIndex) {
  section.at(0).alternating("glassShield", { columns: [c.left.outer, c.right.outer, c.left.mid, c.right.mid], count: 16 });
  if (cycleIndex > 0) section.at(23).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
  section.at(25).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 23 });
  if (cycleIndex > 0) section.at(4).line("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, count: 18 });
  if (tier >= 2 && cycleIndex > 0) section.at(24).wall("basic", { columns: [c.left.outer, c.left.nearInner, c.right.nearInner, c.right.outer] });
  if (tier >= 3 && cycleIndex > 0) section.at(36).enemy("tank", { column: cycleIndex % 2 === 0 ? c.right.inner : c.left.nearOuter });
}
function swarmBloomPressure(section, tier, cycleIndex) {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 20 });
  section.at(20).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 24 });
  if (cycleIndex > 0) section.at(2).drip("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, rows: 34, every: 6 });
  if (tier >= 2 && cycleIndex > 0) section.at(7).alternating("winger", { columns: [c.left.inner, c.right.inner], count: 7, gap: 3 });
  if (tier >= 2 && cycleIndex > 0) section.at(21).wall("glassShield", { columns: [c.left.nearOuter, c.right.nearOuter] });
  if (tier >= 3 && cycleIndex > 0) section.at(36).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
}
function mirrorArrayPressure(section, tier, cycleIndex) {
  section.at(4).alternating("basic", { columns: [c.left.mid, c.right.mid, c.left.outer, c.right.outer], count: 18 });
  section.at(22).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 24 });
  if (cycleIndex > 0) section.at(0).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter] });
  if (cycleIndex > 0) section.at(6).drip("glassShield", { column: cycleIndex % 2 === 0 ? c.left.nearInner : c.right.nearInner, rows: 32, every: 6 });
  if (tier >= 2 && cycleIndex > 0) section.at(18).alternating("winger", { columns: [c.right.inner, c.left.inner], count: 7, gap: 3 });
  if (tier >= 3 && cycleIndex > 0) section.at(32).wall("tank", { columns: [c.left.nearOuter, c.right.inner] });
}
var themePlans = {
  gunSchool: {
    finalRows: 42,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.pulsePistol", { column: c.left.mid });
        section.at(4).weapon("shield.lightGuard", { column: c.right.mid });
        section.at(7).enemy("basic", { column: c.left.nearOuter });
        section.at(8).enemy("basic", { column: c.right.nearOuter });
        if (context.tier >= 2) section.at(6).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(42, (section) => gunSchoolPressure(section, context.tier, cycleIndex));
      context.rebuild(10, (section) => {
        section.at(0).weapon(pick(["gun.burstCarbine", "gun.needlerSmg", "gun.splitterRifle", "gun.heavyCannon"], context.tier, cycleIndex), { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(2).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
        if (cycleIndex % 3 === 1) section.at(4).weapon("shield.lightGuard", { column: c.left.nearInner });
        section.at(4).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.outer : c.left.outer });
        section.at(6).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter });
        if (cycleIndex % 2 === 0) section.at(7).pickup("unitMultiplier.2x", { column: c.right.nearOuter });
        section.at(8).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.mid : c.right.mid });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.nearOuter : c.left.nearOuter });
      });
      context.respite(context.tier >= 2 ? 4 : 2);
    },
    finish(context, cycleIndex) {
      context.pressure(42, (section) => gunSchoolPressure(section, context.tier, cycleIndex));
    }
  },
  guardBlades: {
    finalRows: 42,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("sword.arcBlade", { column: c.left.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.right.mid });
        if (context.tier >= 2) section.at(6).weapon("shield.satelliteGuard", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(42, (section) => guardBladePressure(section, context.tier, cycleIndex));
      context.rebuild(10, (section) => {
        section.at(0).weapon(pick(["sword.arcBlade", "sword.cleaver", "sword.cleaver"], context.tier, cycleIndex), { column: c.left.mid });
        section.at(3).weapon(pick(["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard"], context.tier, cycleIndex), { column: c.right.mid });
        if (cycleIndex % 2 === 0) section.at(7).pickup("unitMultiplier.2x", { column: c.left.nearInner });
        section.at(8).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(9).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(42, (section) => guardBladePressure(section, context.tier, cycleIndex));
    }
  },
  crystalSiege: {
    finalRows: 48,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.burstCarbine", { column: c.left.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.right.mid });
        section.at(6).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(48, (section) => crystalSiegePressure(section, context.tier, cycleIndex));
      context.rebuild(11, (section) => {
        section.at(0).weapon(pick(["gun.burstCarbine", "gun.heavyCannon", "gun.splitterRifle"], context.tier, cycleIndex), { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(4).weapon(pick(["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard"], context.tier, cycleIndex), { column: c.left.nearOuter });
        if (context.tier >= 2) section.at(7).weapon("sword.cleaver", { column: c.right.nearOuter });
        section.at(9).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(48, (section) => crystalSiegePressure(section, context.tier, cycleIndex));
    }
  },
  swarmBloom: {
    finalRows: 44,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.pulsePistol", { column: c.left.mid });
        section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid });
        section.at(5).weapon("shield.lightGuard", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(44, (section) => swarmBloomPressure(section, context.tier, cycleIndex));
      context.rebuild(12, (section) => {
        section.at(0).pickup("unitMultiplier.2x", { column: cycleIndex % 2 === 0 ? c.left.mid : c.right.mid });
        section.at(3).weapon(pick(["gun.needlerSmg", "sword.arcBlade", "gun.burstCarbine", "shield.satelliteGuard"], context.tier, cycleIndex), { column: c.left.nearOuter });
        section.at(7).weapon(pick(["shield.lightGuard", "sword.cleaver", "shield.hexGuard"], context.tier, cycleIndex), { column: c.right.nearOuter });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter });
        section.at(11).enemy("winger", { column: cycleIndex % 2 === 0 ? c.right.outer : c.left.outer });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(44, (section) => swarmBloomPressure(section, context.tier, cycleIndex));
    }
  },
  mirrorArray: {
    finalRows: 46,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.burstCarbine", { column: c.right.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.left.mid });
        if (context.tier >= 2) section.at(6).weapon("sword.cleaver", { column: c.right.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(46, (section) => mirrorArrayPressure(section, context.tier, cycleIndex));
      context.rebuild(11, (section) => {
        section.at(0).weapon(pick(["gun.splitterRifle", "gun.heavyCannon", "gun.burstCarbine"], context.tier, cycleIndex), { column: c.left.mid });
        section.at(3).weapon(pick(["shield.lightGuard", "sword.cleaver", "shield.hexGuard"], context.tier, cycleIndex), { column: c.right.mid });
        if (cycleIndex % 2 === 0) section.at(8).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.left.nearInner : c.right.nearInner });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(46, (section) => mirrorArrayPressure(section, context.tier, cycleIndex));
    }
  }
};
function composeTrack(options) {
  const builder = trackBuilder.create({
    label: options.label,
    description: options.description,
    environment: { sceneId: options.sceneId },
    balance: { enemyHp: enemyHpByTier[options.tier], enemySpeed: 1 }
  });
  const context = createContext(builder, options.tier);
  const plan = themePlans[options.theme];
  const targetRows = targetRowsByTier[options.tier];
  plan.open(context);
  let cycleIndex = 0;
  while (context.cursor + plan.finalRows < targetRows) {
    plan.cycle(context, cycleIndex);
    cycleIndex++;
  }
  plan.finish(context, cycleIndex);
  return builder.build();
}

// projects/NeonSwarm/CombatDefinition/tracks/Track4.ts
var generatedTrack = composeTrack({
  label: "Skybreak",
  description: "An Aurora opener focused on shields, short sword reads, and patient close-range cleanup.",
  sceneId: "aurora",
  theme: "guardBlades",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track5.ts
var generatedTrack2 = composeTrack({
  label: "Ribbon Storm",
  description: "Aurora pressure expands into alternating shield rebuilds, wider sword choices, and clustered close-range threats.",
  sceneId: "aurora",
  theme: "guardBlades",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track6.ts
var generatedTrack3 = composeTrack({
  label: "Magnetic Dawn",
  description: "The Aurora finale asks for deliberate shield timing and sword selection against long, readable threat waves.",
  sceneId: "aurora",
  theme: "guardBlades",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track7.ts
var generatedTrack4 = composeTrack({
  label: "Prism Ignition",
  description: "A Crystal Forge opener built around burst fire, glass decoys, and early heavy-threat rehearsal.",
  sceneId: "crystalForge",
  theme: "crystalSiege",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track8.ts
var generatedTrack5 = composeTrack({
  label: "Facet Run",
  description: "Crystal Forge density sharpens with heavier guns, sturdier shields, and tank breaks framed by glass decoys.",
  sceneId: "crystalForge",
  theme: "crystalSiege",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track9.ts
var generatedTrack6 = composeTrack({
  label: "Glass Hammer",
  description: "The Crystal Forge finale commits to heavy weapon payoffs, repeated tank lanes, and prismatic decoy pressure.",
  sceneId: "crystalForge",
  theme: "crystalSiege",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track1.ts
var generatedTrack7 = composeTrack({
  label: "First Glow",
  description: "A gun-forward Neon Nebulae opener with clear rebuild shelves and only a few shield safety nets.",
  sceneId: "neonHall",
  theme: "gunSchool",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track2.ts
var generatedTrack8 = composeTrack({
  label: "Drift Lesson",
  description: "A longer Neon Nebulae gun lesson that adds wing pressure, stronger firearm choices, and sparse shield relief.",
  sceneId: "neonHall",
  theme: "gunSchool",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track3.ts
var generatedTrack9 = composeTrack({
  label: "Nebula Gate",
  description: "The Neon Nebulae gun finale layers heavier firearms, tanks, and sustained lane reading without leaning on speed changes.",
  sceneId: "neonHall",
  theme: "gunSchool",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track13.ts
var generatedTrack10 = composeTrack({
  label: "Panel Dawn",
  description: "A Solar Array opener with mirrored reads, split-lane weapon timing, and bright but measured pressure.",
  sceneId: "solarArray",
  theme: "mirrorArray",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track14.ts
var generatedTrack11 = composeTrack({
  label: "Heliostat Rush",
  description: "Solar Array pressure grows through mirrored walls, precision rebuilds, and alternating outer-lane surges.",
  sceneId: "solarArray",
  theme: "mirrorArray",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track15.ts
var generatedTrack12 = composeTrack({
  label: "Mirror Zenith",
  description: "The Solar Array finale mixes mirrored tank breaks, split-fire rebuilds, and long-form precision pressure.",
  sceneId: "solarArray",
  theme: "mirrorArray",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track10.ts
var generatedTrack13 = composeTrack({
  label: "Bloom Signal",
  description: "A Void Garden opener about growing the squad early and sustaining calm cross-lane bloom pressure.",
  sceneId: "voidGarden",
  theme: "swarmBloom",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track11.ts
var generatedTrack14 = composeTrack({
  label: "Root Lattice",
  description: "Void Garden adds denser squad growth windows, split weapon support, and slow-blooming paired pressure.",
  sceneId: "voidGarden",
  theme: "swarmBloom",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track12.ts
var generatedTrack15 = composeTrack({
  label: "Night Orchard",
  description: "The Void Garden finale leans into squad recovery, layered support pickups, and broad organic pressure.",
  sceneId: "voidGarden",
  theme: "swarmBloom",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/index.ts
var tracks = {
  "neon-nebulae-1": generatedTrack7,
  "neon-nebulae-2": generatedTrack8,
  "neon-nebulae-3": generatedTrack9,
  "aurora-1": generatedTrack,
  "aurora-2": generatedTrack2,
  "aurora-3": generatedTrack3,
  "crystal-forge-1": generatedTrack4,
  "crystal-forge-2": generatedTrack5,
  "crystal-forge-3": generatedTrack6,
  "void-garden-1": generatedTrack13,
  "void-garden-2": generatedTrack14,
  "void-garden-3": generatedTrack15,
  "solar-array-1": generatedTrack10,
  "solar-array-2": generatedTrack11,
  "solar-array-3": generatedTrack12
};
var trackFamilies = {
  neonNebulae: {
    label: "Neon Nebulae",
    description: "A learning arc about lanes, pickups, shields, and controlled pressure.",
    environment: { sceneId: "neonHall" },
    trackIds: ["neon-nebulae-1", "neon-nebulae-2", "neon-nebulae-3"]
  },
  aurora: {
    label: "Aurora",
    description: "Dense planetary assaults with brighter recovery windows and sharper threat waves.",
    environment: { sceneId: "aurora" },
    trackIds: ["aurora-1", "aurora-2", "aurora-3"]
  },
  crystalForge: {
    label: "Crystal Forge",
    description: "Prismatic factory lanes with sharp pressure, glass decoys, and heavy crystalline breaks.",
    environment: { sceneId: "crystalForge" },
    trackIds: ["crystal-forge-1", "crystal-forge-2", "crystal-forge-3"]
  },
  voidGarden: {
    label: "Void Garden",
    description: "Bioluminescent night lanes with sparse blooms, decoys, and controlled recovery pockets.",
    environment: { sceneId: "voidGarden" },
    trackIds: ["void-garden-1", "void-garden-2", "void-garden-3"]
  },
  solarArray: {
    label: "Solar Array",
    description: "Bright orbital lanes with mirrored walls, fast outer surges, and decisive heavy tools.",
    environment: { sceneId: "solarArray" },
    trackIds: ["solar-array-1", "solar-array-2", "solar-array-3"]
  }
};

// projects/NeonSwarm/CombatDefinition/TrackFamily.ts
var TrackFamilyDefinition = class extends FamilyDefinition {
  familyId = "track";
  label = "Track";
  members = tracks;
  families = trackFamilies;
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, track] of Object.entries(this.members)) {
      parseTrackDefinition(track.definition);
      this.require(isLaneRunnerSceneId(track.environment.sceneId), `${id} has an unknown scene id.`);
    }
    for (const [id, family] of Object.entries(this.families)) {
      this.require(family.trackIds.length > 0, `${id} must include at least one track.`);
      this.require(isLaneRunnerSceneId(family.environment.sceneId), `${id} has an unknown scene id.`);
      for (const trackId of family.trackIds) {
        this.require(trackId in this.members, `${id} references unknown track "${trackId}".`);
        this.require(this.members[trackId].environment.sceneId === family.environment.sceneId, `${trackId} must use the ${id} scene.`);
      }
    }
  }
};
var trackFamily = new TrackFamilyDefinition();

// projects/NeonSwarm/src/input.ts
function bindSquadInput(container, callbacks) {
  let pointerId = null;
  const applyPointer = (clientX) => {
    const bounds = container.getBoundingClientRect();
    const normalized = Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
    const lane = normalized < 0.5 ? 0 : 1;
    if (lane !== callbacks.lane()) callbacks.setLane(lane);
  };
  addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") callbacks.setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") callbacks.setLane(1);
  });
  container.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (target.closest("button,input,select,a")) return;
    pointerId = event.pointerId;
    container.setPointerCapture?.(pointerId);
    applyPointer(event.clientX);
  });
  container.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) return;
    applyPointer(event.clientX);
  });
  const endPointer = (event) => {
    if (event.pointerId !== pointerId) return;
    pointerId = null;
  };
  container.addEventListener("pointerup", endPointer);
  container.addEventListener("pointercancel", endPointer);
  container.addEventListener("lostpointercapture", () => {
    pointerId = null;
  });
}

// projects/NeonSwarm/src/autoAim.ts
function selectAutoAimOffset(targets, laneCenter, columnOffsets, currentOffset = 0) {
  if (!targets.length) return 0;
  const explicitRows = /* @__PURE__ */ new Map();
  for (const target of targets) {
    if (target.rowId === void 0) continue;
    const row = explicitRows.get(target.rowId) ?? [];
    row.push(target);
    explicitRows.set(target.rowId, row);
  }
  const frontRow = explicitRows.size ? [...explicitRows.values()].sort((left, right) => Math.max(...right.map((t) => t.y)) - Math.max(...left.map((t) => t.y)))[0] : targets.filter((t) => Math.abs(t.y - Math.max(...targets.map((c2) => c2.y))) < 3);
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

// projects/NeonSwarm/src/combat/gunSimulation.ts
var GunSimulation = class {
  projectiles = [];
  effects = [];
  scheduledVolleys = [];
  sequence = 0;
  shotSequence = 0;
  clear() {
    this.projectiles.length = 0;
    this.effects.length = 0;
    this.scheduledVolleys.length = 0;
  }
  fire(gun, level2, lane, origins, now, scale = 1) {
    for (let burstIndex = 0; burstIndex < level2.burstCount; burstIndex++) {
      this.scheduledVolleys.push({
        firesAt: now + burstIndex * level2.burstIntervalMs,
        gun,
        level: level2,
        lane,
        origins: origins.map((origin) => ({ ...origin })),
        scale
      });
    }
  }
  updateFiring(now) {
    let fired = 0;
    const due = this.scheduledVolleys.filter((volley) => volley.firesAt <= now);
    this.scheduledVolleys = this.scheduledVolleys.filter((volley) => volley.firesAt > now);
    for (const volley of due) {
      this.spawnVolley(volley, now);
      fired++;
    }
    return fired;
  }
  updateProjectiles(delta, now, targets, bounds, onHit) {
    for (const projectile of [...this.projectiles]) {
      projectile.x += projectile.vx * delta;
      projectile.y += projectile.vy * delta;
      if (projectile.y < bounds.top || projectile.x < (bounds.left ?? -Infinity) || projectile.x > (bounds.right ?? Infinity)) {
        this.removeProjectile(projectile);
        continue;
      }
      for (const target of targets) {
        if (target.dying || projectile.lane !== target.lane || projectile.hitEnemyIds.has(target.id)) continue;
        const dx = projectile.x - target.x;
        const dy = projectile.y - target.y;
        const hitRadius = projectile.collisionRadius + target.radius;
        if (dx * dx + dy * dy > hitRadius * hitRadius) continue;
        projectile.hitEnemyIds.add(target.id);
        target.health -= projectile.damage;
        target.y -= projectile.knockback;
        this.effects.push({
          kind: "impact",
          style: projectile.impactEffect,
          x: projectile.x,
          y: projectile.y,
          color: projectile.color,
          secondaryColor: projectile.trailColor,
          radius: projectile.radius * projectile.hitFlashScale * 4,
          expiresAt: now + projectile.impactDurationMs,
          duration: projectile.impactDurationMs,
          seed: projectile.id
        });
        onHit(projectile, target);
        if (projectile.pierceRemaining > 0) projectile.pierceRemaining--;
        else this.removeProjectile(projectile);
        if (!this.projectiles.includes(projectile)) break;
      }
    }
    for (const effect of [...this.effects]) {
      if (effect.expiresAt <= now) this.effects.splice(this.effects.indexOf(effect), 1);
    }
  }
  projectilePrimitives() {
    return this.projectiles.flatMap((projectile) => new NeonProjectile({
      x: projectile.x,
      y: projectile.y,
      velocityX: projectile.vx,
      velocityY: projectile.vy,
      radius: projectile.radius,
      length: projectile.radius * projectile.aspect,
      trailLength: projectile.trailLength,
      trailWidth: Math.max(projectile.radius * projectile.trailWidthScale, 1.1),
      color: projectile.color,
      trailColor: projectile.trailColor,
      coreColor: projectile.coreColor,
      shape: projectile.shape,
      intensity: projectile.visualIntensity * (projectile.tracer ? 1.35 : 1),
      glow: projectile.tracer ? 1.4 : 0.72
    }).primitives());
  }
  spawnVolley(volley, now) {
    const { gun, level: level2, lane, origins, scale } = volley;
    for (const origin of origins) {
      const count = Math.max(1, level2.projectileCount);
      for (let index = 0; index < count; index++) {
        const aimAngle = origin.aimX === void 0 || origin.aimY === void 0 ? 0 : Math.atan2(origin.aimX - origin.x, origin.y - origin.aimY);
        const spreadDegrees = count === 1 ? 0 : (index / (count - 1) - 0.5) * level2.spreadDegrees;
        const angle = aimAngle + spreadDegrees * Math.PI / 180;
        const speed = level2.projectileSpeed * scale;
        this.shotSequence++;
        this.projectiles.push({
          id: ++this.sequence,
          lane,
          x: origin.x + (Math.random() * 2 - 1) * gun.visualIdentity.horizontalJitter * scale,
          y: origin.y,
          vx: Math.sin(angle) * speed,
          vy: -Math.cos(angle) * speed,
          radius: level2.projectileRadius * scale,
          collisionRadius: level2.projectileRadius * (level2.collisionRadiusScale ?? 1) * scale,
          damage: level2.damage,
          pierceRemaining: level2.pierce,
          color: neonPalette[gun.visualIdentity.projectileColor],
          trailColor: neonPalette[gun.visualIdentity.trailColor],
          coreColor: neonPalette[gun.visualIdentity.coreColor],
          aspect: gun.visualIdentity.projectileAspect,
          trailWidthScale: gun.visualIdentity.trailWidthScale,
          visualIntensity: gun.visualIdentity.visualIntensity,
          shape: gun.visualIdentity.projectileShape,
          impactEffect: gun.visualIdentity.impactEffect,
          impactDurationMs: gun.visualIdentity.impactDurationMs,
          trailLength: level2.trailLength * scale,
          tracer: level2.tracerEveryNthShot > 0 && this.shotSequence % level2.tracerEveryNthShot === 0,
          knockback: level2.knockback * scale,
          hitFlashScale: level2.hitFlashScale,
          hitEnemyIds: /* @__PURE__ */ new Set()
        });
      }
    }
    this.effects.push({
      kind: "muzzle",
      style: gun.visualIdentity.muzzleEffect,
      x: origins.reduce((sum, origin) => sum + origin.x, 0) / origins.length,
      y: origins[0]?.y ?? 0,
      color: neonPalette[gun.visualIdentity.projectileColor],
      secondaryColor: neonPalette[gun.visualIdentity.trailColor],
      radius: 10 * level2.muzzleFlashScale * scale,
      expiresAt: now + gun.visualIdentity.muzzleDurationMs,
      duration: gun.visualIdentity.muzzleDurationMs,
      seed: this.shotSequence
    });
  }
  removeProjectile(projectile) {
    const index = this.projectiles.indexOf(projectile);
    if (index >= 0) this.projectiles.splice(index, 1);
  }
};

// projects/NeonSwarm/src/combat/independentWeaponSlots.ts
function syncSlotArray(slots, count, create) {
  const target = Math.max(1, Math.floor(count));
  while (slots.length < target) slots.push(create());
  slots.length = target;
}
function advanceCooldownSlots(cooldowns, delta) {
  for (let index = 0; index < cooldowns.length; index++) {
    cooldowns[index] = Math.max(0, cooldowns[index] - delta);
  }
}
function updateActiveSlots(slots, update) {
  for (let index = 0; index < slots.length; index++) {
    const item = slots[index];
    if (item) slots[index] = update(item);
  }
}
function removeClaimedTargets(remaining, selected, getId) {
  const selectedIds = new Set(selected.map(getId));
  return remaining.filter((item) => !selectedIds.has(getId(item)));
}
function selectBestUnclaimed(items, claimedIds, getId, score) {
  let best = null;
  for (const item of items) {
    if (claimedIds.has(getId(item))) continue;
    const value = score(item);
    if (value === null || !Number.isFinite(value)) continue;
    if (!best || value < best.score) best = { item, score: value };
  }
  return best?.item ?? null;
}

// projects/NeonSwarm/src/combat/nearbyThreatQuery.ts
function queryNearbyThreats(enemies, opts) {
  const { origin, lane, range, includeAdjacentLanes = false, maxTargets, excludeIds } = opts;
  const rangeSq = range * range;
  const results = [];
  for (const target of enemies) {
    if (target.dying) continue;
    if (!includeAdjacentLanes && target.lane !== lane) continue;
    if (excludeIds?.has(target.id)) continue;
    const dx = target.x - origin.x;
    const dy = target.y - origin.y;
    const distSq = dx * dx + dy * dy;
    if (distSq > rangeSq) continue;
    results.push({ target, distance: Math.sqrt(distSq) });
  }
  results.sort((a, b) => a.distance - b.distance);
  return maxTargets !== void 0 ? results.slice(0, maxTargets) : results;
}

// projects/NeonSwarm/src/combat/shieldEvaluator.ts
var ShieldState = class {
  shieldId;
  /** Active shield level. Repeated pickups of the same shield increase this up to 5. */
  level;
  /** Remaining charges (charge-based shields). */
  charges;
  /** Seconds until cooldown completes. */
  cooldownLeft;
  /** ms timestamp after which the hit flash is done. */
  hitFlashUntil;
  /** Progress 0→1 of hit flash animation (1 = done). */
  hitFlashProgress;
  /** Active expanding pulse rings (Pulse Core). */
  pulseEffects;
  /** Enemy ids already resolved against this shield, preventing repeat damage per frame. */
  interceptedEnemyIds = /* @__PURE__ */ new Set();
  constructor(shieldId, maxCharges, level2 = 1) {
    this.shieldId = shieldId;
    this.level = Math.min(5, Math.max(1, Math.floor(level2)));
    this.charges = maxCharges;
    this.cooldownLeft = 0;
    this.hitFlashUntil = 0;
    this.hitFlashProgress = 1;
    this.pulseEffects = [];
  }
};
function resolveShieldContact(state, shield, target, shieldX, shieldY, now, scale = 1) {
  const result2 = {
    contacted: false,
    absorbed: false,
    damageAbsorbed: 0,
    enemyDestroyed: false
  };
  if (target.dying || state.interceptedEnemyIds.has(target.id)) return result2;
  const radius = shield.radius * scale + target.radius;
  const dx = target.x - shieldX;
  const dy = target.y - shieldY;
  if (dx * dx + dy * dy > radius * radius) return result2;
  result2.contacted = true;
  state.interceptedEnemyIds.add(target.id);
  if (state.charges <= 0) return result2;
  const absorbed = Math.min(state.charges, target.health);
  state.charges -= absorbed;
  target.health -= absorbed;
  state.hitFlashUntil = now + 280;
  state.hitFlashProgress = 0;
  state.cooldownLeft = shield.cooldownSeconds;
  result2.absorbed = true;
  result2.damageAbsorbed = absorbed;
  result2.enemyDestroyed = target.health <= 0;
  return result2;
}
function tickShield(state, shield, threats, playerX, playerY, now, delta) {
  const result2 = {
    contactDamageEnemyIds: [],
    contactDamageAmount: 0,
    slowEnemyIds: [],
    slowMultiplier: 1,
    absorbedHit: false,
    pushEnemyIds: [],
    pushDistance: 0
  };
  if (state.cooldownLeft > 0) state.cooldownLeft = Math.max(0, state.cooldownLeft - delta);
  for (const pulse of state.pulseEffects) {
    pulse.progress = (now - pulse.startedAt) / pulse.durationMs;
  }
  state.pulseEffects = state.pulseEffects.filter((p) => p.progress < 1);
  if (state.hitFlashUntil > 0) {
    state.hitFlashProgress = Math.min(1, (now - (state.hitFlashUntil - 280)) / 280);
  }
  if (shield.mode === "charge" && state.cooldownLeft === 0 && state.charges < shield.maxCharges) {
    state.charges = shield.maxCharges;
  }
  if (threats.length === 0) return result2;
  if (false) {
    result2.contactDamageAmount = shield.contactDamage;
    for (const { target } of threats) {
      result2.contactDamageEnemyIds.push(target.id);
    }
  }
  if (false) {
    result2.slowMultiplier = shield.slowMultiplier;
    for (const { target } of threats) {
      result2.slowEnemyIds.push(target.id);
    }
  }
  if (false) {
    state.cooldownLeft = shield.cooldownSeconds;
    const pulse = {
      progress: 0,
      startedAt: now,
      durationMs: PULSE_DURATION_MS,
      x: playerX,
      y: playerY,
      maxRadius: shield.radius * 1.8,
      color: ""
      // filled by draw code with neonPalette[shield.color]
    };
    state.pulseEffects.push(pulse);
    result2.pushDistance = shield.pushDistance;
    for (const { target } of threats) {
      result2.pushEnemyIds.push(target.id);
    }
  }
  return result2;
}

// projects/NeonSwarm/src/combat/swordEvaluator.ts
var SwordState = class {
  swordId;
  /** Active sword level. Repeated pickups of the same sword increase this up to 5. */
  level;
  /** Seconds remaining until the sword can swing again. */
  cooldownLeft;
  /** Active slash animation, if any. */
  activeSlash;
  previousSlashSide;
  cooldownLefts;
  activeSlashes;
  previousSlashSides;
  nextSlotLaunchAllowedAt;
  constructor(swordId, level2 = 1) {
    this.swordId = swordId;
    this.level = Math.min(5, Math.max(1, Math.floor(level2)));
    this.cooldownLeft = 0;
    this.activeSlash = null;
    this.previousSlashSide = 1;
    this.cooldownLefts = [0];
    this.activeSlashes = [null];
    this.previousSlashSides = [1];
    this.nextSlotLaunchAllowedAt = 0;
  }
  syncSlots(count) {
    syncSlotArray(this.cooldownLefts, count, () => 0);
    syncSlotArray(this.activeSlashes, count, () => null);
    syncSlotArray(this.previousSlashSides, count, () => 1);
    this.cooldownLeft = Math.min(...this.cooldownLefts);
    this.activeSlash = this.activeSlashes.find(Boolean) ?? null;
    this.previousSlashSide = this.previousSlashSides[0] ?? 1;
  }
};
function selectTargets(threats, mode, maxTargets, rowReach) {
  if (threats.length === 0) return [];
  if (rowReach > 1 && threats[0].target.rowId !== void 0) {
    const centerRow = threats[0].target.rowId;
    const rows = [...new Set(threats.map((threat) => threat.target.rowId).filter((rowId) => rowId !== void 0))].sort((a, b) => Math.abs(a - centerRow) - Math.abs(b - centerRow)).slice(0, rowReach);
    return threats.filter((threat) => threat.target.rowId !== void 0 && rows.includes(threat.target.rowId)).slice(0, maxTargets);
  }
  switch (mode) {
    case "nearestInCurrentLane":
    case "nearestInEitherLane":
      return threats.slice(0, maxTargets);
    case "frontMostThreat":
      return [...threats].sort((a, b) => b.target.y - a.target.y).slice(0, maxTargets);
    case "clusterNearPlayer":
      return threats.slice(0, maxTargets);
    default:
      return threats.slice(0, maxTargets);
  }
}
function swordRowReach(sword, level2) {
  if (!sword.rowReach) return 1;
  const clampedLevel = Math.min(5, Math.max(1, Math.floor(level2)));
  const progress = (clampedLevel - 1) / 4;
  return Math.round(sword.rowReach.level1 + (sword.rowReach.level5 - sword.rowReach.level1) * progress);
}
function swordDamage(sword, level2) {
  if (sword.damageAtLevel5 === void 0) return sword.damage;
  const clampedLevel = Math.min(5, Math.max(1, Math.floor(level2)));
  const progress = (clampedLevel - 1) / 4;
  return sword.damage + (sword.damageAtLevel5 - sword.damage) * progress;
}
function tickSword(state, sword, threats, playerX, playerY, now, delta, color, visualDurationMs = sword.slashDurationMs, swordCount = 1, slotLaunchStaggerMs = 180) {
  const result2 = {
    hitEnemyIds: [],
    hitTargets: [],
    damage: 0,
    swingTriggered: false
  };
  state.syncSlots(swordCount);
  advanceCooldownSlots(state.cooldownLefts, delta);
  updateActiveSlots(state.activeSlashes, (slash) => {
    slash.progress = (now - slash.startedAt) / slash.durationMs;
    return slash.progress >= 1 ? null : slash;
  });
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;
  if (threats.length === 0) return result2;
  let remaining = [...threats];
  const damage = swordDamage(sword, state.level);
  for (let slot = 0; slot < state.cooldownLefts.length && remaining.length > 0; slot++) {
    if (state.cooldownLefts.length > 1 && now < state.nextSlotLaunchAllowedAt) break;
    if (state.cooldownLefts[slot] > 0) continue;
    const selected = selectTargets(remaining, sword.targetingMode, sword.maxTargets, swordRowReach(sword, state.level));
    if (selected.length === 0) continue;
    const side = state.previousSlashSides[slot] === -1 ? 1 : -1;
    state.previousSlashSides[slot] = side;
    state.previousSlashSide = side;
    state.cooldownLefts[slot] = sword.cooldownSeconds;
    if (state.cooldownLefts.length > 1) state.nextSlotLaunchAllowedAt = now + slotLaunchStaggerMs;
    result2.swingTriggered = true;
    result2.damage = damage;
    for (const { target } of selected) {
      result2.hitEnemyIds.push(target.id);
      result2.hitTargets.push({ id: target.id, x: target.x, y: target.y });
    }
    state.activeSlashes[slot] = {
      progress: 0,
      startedAt: now,
      durationMs: visualDurationMs,
      x: playerX,
      y: playerY,
      targetPoints: selected.map(({ target }) => ({ x: target.x, y: target.y })),
      side,
      reach: sword.range * 0.75,
      arcDegrees: sword.arcDegrees,
      color,
      thickness: sword.slashThickness
    };
    remaining = removeClaimedTargets(remaining, selected, ({ target }) => target.id);
  }
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;
  return result2;
}

// projects/NeonSwarm/src/enemyEntranceVisuals.ts
var enemyEntranceProfiles = {
  basicOrb: {
    durationSeconds: 0.48,
    scatterMagnitude: 0.58
  },
  glassShield: {
    durationSeconds: 0.34,
    scatterMagnitude: 0
  },
  winger: {
    durationSeconds: 0.42,
    scatterMagnitude: 0.5
  },
  tank: {
    durationSeconds: 0.72,
    scatterMagnitude: 0.34
  }
};

// projects/NeonSwarm/src/enemyExitVisuals.ts
var basicOrbExitProfile = {
  cloud: true,
  size: 11,
  detail: 6,
  turbulence: 2.72,
  glow: 11,
  coreIntensity: 1.25,
  rimIntensity: 0.8,
  opacity: 0.82,
  dissipationAction: "sparkFade",
  driftX: 0,
  driftY: 0,
  envelope: {
    entrySeconds: 0.16,
    entryPunch: 2.33,
    sustainSeconds: 0.21,
    sustainLevel: 1.2,
    fadeSeconds: 0.29,
    sparkIntensity: 1.21
  }
};
var noCloudExitProfile = {
  ...basicOrbExitProfile,
  cloud: false,
  size: 0
};
var tankExitProfile = {
  ...basicOrbExitProfile,
  size: 15,
  glow: 13
};
var enemyExitProfiles = {
  basicOrb: basicOrbExitProfile,
  glassShield: noCloudExitProfile,
  winger: basicOrbExitProfile,
  tank: tankExitProfile
};
function enemyExitDuration(enemyType) {
  const envelope = enemyExitProfiles[enemyType].envelope;
  return envelope.entrySeconds + envelope.sustainSeconds + envelope.fadeSeconds;
}
function createEnemyExitEffect(options) {
  return {
    enemyType: options.enemyType,
    x: options.x,
    y: options.y,
    color: options.color,
    seed: options.seed ?? Math.random() * 1e3,
    age: 0
  };
}
function updateEnemyExitEffects(effects, deltaSeconds) {
  for (let index = effects.length - 1; index >= 0; index--) {
    const effect = effects[index];
    effect.age += deltaSeconds;
    if (effect.age >= enemyExitDuration(effect.enemyType)) effects.splice(index, 1);
  }
}
function enemyExitCloud(effect) {
  const profile = enemyExitProfiles[effect.enemyType];
  if (!profile.cloud) {
    return {
      color: effect.color,
      coreColor: effect.color,
      x: effect.x,
      y: effect.y,
      size: 0,
      detail: 3,
      turbulence: 0,
      glow: 0,
      coreIntensity: 0,
      rimIntensity: 0,
      opacity: 0,
      dissipationTime: enemyExitDuration(effect.enemyType),
      dissipationAction: "sparkFade",
      seed: effect.seed,
      age: effect.age
    };
  }
  const envelope = profile.envelope;
  const duration = enemyExitDuration(effect.enemyType);
  const entryT = Math.min(1, effect.age / Math.max(1e-3, envelope.entrySeconds));
  const fadeStart = envelope.entrySeconds + envelope.sustainSeconds;
  const fadeT = Math.max(0, Math.min(1, (effect.age - fadeStart) / Math.max(1e-3, envelope.fadeSeconds)));
  const sustain = effect.age >= envelope.entrySeconds && effect.age < fadeStart ? envelope.sustainLevel : 1;
  const entryFlash = 1 + Math.sin(entryT * Math.PI) * envelope.entryPunch;
  const fadeEnergy = 1 - fadeT * 0.62;
  const sparkAccent = 1 + fadeT * envelope.sparkIntensity * 0.22;
  return {
    color: effect.color,
    coreColor: deriveNeonCloudCoreColor(effect.color),
    x: effect.x,
    y: effect.y,
    size: profile.size * (0.48 + entryT * 0.52),
    detail: profile.detail,
    turbulence: profile.turbulence,
    glow: (profile.glow ?? 1) * entryFlash * sustain * fadeEnergy * sparkAccent,
    coreIntensity: (profile.coreIntensity ?? 1) * (1 + envelope.entryPunch * (1 - entryT) * 0.55),
    rimIntensity: (profile.rimIntensity ?? 1) * (1 + fadeT * envelope.sparkIntensity * 0.35),
    opacity: (profile.opacity ?? 1) * (effect.age < fadeStart ? 1 : 1 - fadeT * 0.88),
    dissipationTime: duration,
    dissipationAction: "sparkFade",
    driftX: profile.driftX ?? 0,
    driftY: profile.driftY ?? 0,
    seed: effect.seed,
    age: Math.min(effect.age, duration)
  };
}

// projects/NeonSwarm/src/viewport.ts
var laneRunnerViewport = {
  orientation: "portrait",
  aspectWidth: 9,
  aspectHeight: 16,
  logicalWidth: 450,
  logicalHeight: 800
};
function laneRunnerCameraFocusX(width, targetX) {
  const centerX = width / 2;
  return centerX + (targetX - centerX) * 0.55;
}
function applyPortraitStage(stage, policy) {
  stage.style.setProperty("--stage-aspect", `${policy.aspectWidth} / ${policy.aspectHeight}`);
}
var defaultHelicopterCameraSettings = {
  height: 65,
  lookAngleDegrees: 27,
  followDistance: 20,
  zoom: 0.2,
  horizon: 0.51
};
function projectHelicopterScene(primitives, shapes, clouds, settings, viewport) {
  const projectPoint = projectHelicopterPointFactory(settings, viewport);
  const projectedPrimitives = primitives.map((primitive) => {
    if (primitive.shape === "line") {
      const rotation2 = primitive.rotation ?? 0;
      const halfLength = primitive.height ?? primitive.width;
      const directionX = -Math.sin(rotation2);
      const directionY = Math.cos(rotation2);
      const start = projectPoint(primitive.x - directionX * halfLength, primitive.y - directionY * halfLength);
      const end = projectPoint(primitive.x + directionX * halfLength, primitive.y + directionY * halfLength);
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const scale = (start.scale + end.scale) * 0.5;
      return {
        ...primitive,
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2,
        width: primitive.width * scale,
        height: Math.hypot(dx, dy) / 2,
        rotation: Math.atan2(-dx, dy)
      };
    }
    const point = projectPoint(primitive.x, primitive.y);
    const width = primitive.width * point.scale;
    const height = (primitive.height ?? primitive.width) * point.scale;
    let rotation = primitive.rotation;
    if (rotation !== void 0) {
      const axisLength = Math.max(primitive.height ?? primitive.width, primitive.width, 1);
      const directionX = -Math.sin(rotation);
      const directionY = Math.cos(rotation);
      const end = projectPoint(primitive.x + directionX * axisLength, primitive.y + directionY * axisLength);
      rotation = Math.atan2(point.x - end.x, end.y - point.y);
    }
    return {
      ...primitive,
      x: point.x,
      y: point.y,
      width,
      height,
      rotation
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
  const projectedClouds = clouds.map((cloud) => {
    const point = projectPoint(cloud.x, cloud.y);
    return {
      ...cloud,
      x: point.x,
      y: point.y,
      size: cloud.size * point.scale
    };
  });
  return { primitives: projectedPrimitives, clouds: projectedClouds, shapes: projectedShapes };
}
function projectHelicopterPoint(x, y, settings, viewport) {
  return projectHelicopterPointFactory(settings, viewport)(x, y);
}
function unprojectHelicopterScreenPoint(screenX, screenY, settings, viewport) {
  const fallback = { x: screenX, y: screenY };
  const centerX = viewport.width / 2;
  const focusX = viewport.focusX ?? centerX;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const relativeY = -settings.height;
  const screenRatio = (horizonY - screenY) / focalLength;
  const denominator = sin - screenRatio * cos;
  if (Math.abs(denominator) < 1e-4) return fallback;
  const worldZ = -relativeY * (cos + screenRatio * sin) / denominator;
  const cameraZ = Math.max(20, worldZ * cos - relativeY * sin);
  const scale = focalLength / cameraZ;
  const point = {
    x: focusX + (screenX - centerX) / scale,
    y: viewport.playerY + settings.followDistance - worldZ
  };
  return Number.isFinite(point.x) && Number.isFinite(point.y) && Math.abs(point.x) < 5e3 && Math.abs(point.y) < 5e3 ? point : fallback;
}
function projectHelicopterPointFactory(settings, viewport) {
  const centerX = viewport.width / 2;
  const focusX = viewport.focusX ?? centerX;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const minDepth = 20;
  return (x, y) => {
    const worldX = x - focusX;
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
}

// projects/NeonSwarm/src/enemyCatalog.ts
var enemyIdFromTrackId2 = (id) => {
  if (id === "enemy.basic") return "basicOrb";
  if (!id.startsWith("enemy.")) return null;
  const candidate = id.slice("enemy.".length);
  return candidate in orbFamily.members ? candidate : null;
};
function enemyDefinitionFromTrackId(id) {
  const enemyId = enemyIdFromTrackId2(id);
  return enemyId ? { enemyId, definition: orbFamily.members[enemyId] } : null;
}
function createEnemyActor(enemyId) {
  const definition = orbFamily.members[enemyId];
  const shape = getNeonShape(definition.shapeId);
  if (!shape) throw new Error(`Enemy "${enemyId}" uses missing NeonFactory shape "${definition.shapeId}".`);
  const entrance = enemyEntranceProfiles[enemyId];
  const actor = new NeonShapeActor({
    shape,
    color: neonPalette[definition.baseColor],
    entranceDuration: entrance.durationSeconds,
    entranceMagnitude: entrance.scatterMagnitude
  });
  return actor.enter(entrance.durationSeconds, entrance.scatterMagnitude);
}
function createEnemyDeathEffect(options) {
  const definition = orbFamily.members[options.enemyId];
  if (definition.deathVisual !== "cloud") return null;
  return createEnemyExitEffect({
    enemyType: options.enemyId,
    x: options.x,
    y: options.y,
    color: options.color,
    seed: options.seed
  });
}
function disposeEnemyActor(actor, definition) {
  actor.explodeMagnitude = definition.explosionMagnitude;
  actor.dispose("explode" /* Explode */);
}
function defeatEnemy(enemy, effects, color = neonPalette[orbFamily.members[enemy.enemyId].baseColor]) {
  const definition = orbFamily.members[enemy.enemyId];
  enemy.dying = true;
  if (!enemy.exitEffectSpawned) {
    enemy.exitEffectSpawned = true;
    const effect = createEnemyDeathEffect({
      enemyId: enemy.enemyId,
      x: enemy.x,
      y: enemy.y,
      color,
      seed: enemy.id
    });
    if (effect) effects.push(effect);
  }
  disposeEnemyActor(enemy.actor, definition);
  return definition;
}
function resolveEnemyDamage(options) {
  const definition = orbFamily.members[options.enemy.enemyId];
  if (options.damage) options.enemy.health -= options.damage;
  if (options.impactMagnitude) {
    options.enemy.actor.impact({
      direction: { x: 0, y: 1 },
      magnitude: options.impactMagnitude / definition.impactResistance
    });
  }
  if (options.hitFlashUntil !== void 0) options.enemy.hitFlashUntil = options.hitFlashUntil;
  if (options.enemy.health <= 0) {
    return { killed: true, definition: defeatEnemy(options.enemy, options.effects, options.color) };
  }
  return { killed: false, definition };
}
function enemyHealthBarPrimitives(options) {
  const threshold = options.visibleThreshold ?? orbFamily.members.basicOrb.health;
  if (options.maxHealth <= threshold) return [];
  const ratio = Math.max(0, Math.min(1, options.health / options.maxHealth));
  const y = options.y;
  const width = Math.max(36, options.width);
  const left = options.x - width / 2;
  const filled = Math.max(0, width * ratio);
  return [
    {
      x: options.x,
      y,
      width: 8.8,
      height: width / 2,
      color: "#160817",
      secondaryColor: "#160817",
      glow: 0.08,
      intensity: 0.42,
      shape: "line",
      rotation: Math.PI / 2
    },
    {
      x: left + filled / 2,
      y,
      width: 7.2,
      height: Math.max(1, filled) / 2,
      color: options.color,
      secondaryColor: neonPalette.whiteHot,
      glow: 0.32,
      intensity: 0.78,
      shape: "line",
      rotation: Math.PI / 2
    }
  ];
}
function projectedEnemyHealthBarPrimitives(targets, cameraSettings2, viewport) {
  return targets.flatMap((target) => {
    const definition = orbFamily.members[target.enemyId];
    const point = projectHelicopterPoint(target.x, target.y, cameraSettings2, viewport);
    const projectedSize = target.size * point.scale;
    const scale = target.scale ?? 1;
    return enemyHealthBarPrimitives({
      x: point.x,
      y: point.y - projectedSize * 0.72 - 12,
      width: Math.max(projectedSize * 1.35, definition.radius * 5.2 * scale * point.scale),
      health: target.health,
      maxHealth: target.maxHealth,
      color: neonPalette[definition.baseColor]
    });
  });
}

// projects/NeonSwarm/src/familyVisuals.ts
var emptyScene = () => ({ primitives: [], shapes: [] });
var requiredShape = (id) => {
  const shape = getNeonShape(id);
  if (!shape) throw new Error(`NeonFactory shape "${id}" is required by family visuals.`);
  return shape;
};
var isSafeScenePoint = (point) => Number.isFinite(point.x) && Number.isFinite(point.y) && Math.abs(point.x) < 5e3 && Math.abs(point.y) < 5e3;
function shieldVisuals(options) {
  const scene = emptyScene();
  const {
    definition,
    x,
    y,
    now,
    scale = 1,
    projectScreenOffset,
    hitProgress = 1,
    visible = true
  } = options;
  const strength = Math.max(0, options.strength);
  const initialStrength = Math.max(1, options.initialStrength);
  const impact = Math.max(0, 1 - hitProgress);
  const exploding = strength <= 0 && hitProgress < 1;
  const color = neonPalette[definition.color];
  const radius = definition.radius * scale;
  if (visible || exploding) {
    scene.shapes.push({
      shape: requiredShape("shield-ring"),
      x,
      y,
      size: radius,
      color,
      lineThickness: 0.72,
      glow: 1 + impact * 0.8,
      opacity: 1,
      energyIntensity: 1.15 + impact * 1.5,
      energyCoverage: 0.42 + impact * 0.3,
      energySpeed: 1.15 + impact * 1.2,
      energyBleed: 0.5 + impact * 0.35,
      explodeProgress: exploding ? Math.min(1, hitProgress) : 0,
      explodeMagnitude: 0.9
    });
  }
  if (!visible) return scene;
  const orbiterShape = requiredShape(definition.orbiterShape === "hex" ? "hex-fighter" : "star-core");
  const orbiterCount = Math.ceil(definition.orbiterCount * strength / initialStrength);
  const angleStep = Math.PI * 2 / definition.orbiterCount;
  const baseAngle = now / 1e3 * definition.orbiterSpeed;
  for (let i = 0; i < orbiterCount; i++) {
    const angle = baseAngle + i * angleStep;
    const fallbackOrbiter = { x: x + Math.cos(angle) * radius, y: y + Math.sin(angle) * radius };
    const projectedOrbiter = projectScreenOffset?.(x, y, Math.cos(angle) * radius, Math.sin(angle) * radius);
    const orbiter = projectedOrbiter && isSafeScenePoint(projectedOrbiter) ? projectedOrbiter : fallbackOrbiter;
    scene.shapes.push({
      shape: orbiterShape,
      x: orbiter.x,
      y: orbiter.y,
      size: definition.orbiterSize * 1.8 * scale,
      color,
      rotationZ: angle + now / 1400,
      lineThickness: 0.72,
      glow: 1,
      energyIntensity: 1.1,
      energyCoverage: 0.4,
      energySpeed: 1.25,
      energyBleed: 0.5
    });
  }
  return scene;
}
var defaultSwordVisualTuning = {
  dockSideOffset: 13,
  dockForward: 3,
  strikeDuration: 0.31,
  followThroughDuration: 0.18,
  swingAngle: 2.8,
  arcLift: 14,
  arcRadius: 42,
  trailSegments: 14,
  trailWidth: 2.6,
  trailIntensity: 0.75
};
var completeSwordVisualTuning = (tuning) => ({
  ...defaultSwordVisualTuning,
  ...tuning
});
var swordVisualDurationMs = (tuning) => {
  const resolved = completeSwordVisualTuning(tuning);
  return Math.max(120, (resolved.strikeDuration + resolved.followThroughDuration) * 1e3);
};
function quadraticPoint(from, control, to, t) {
  const inv = 1 - t;
  return {
    x: inv * inv * from.x + 2 * inv * t * control.x + t * t * to.x,
    y: inv * inv * from.y + 2 * inv * t * control.y + t * t * to.y
  };
}
function cubicPoint(from, controlA, controlB, to, t) {
  const inv = 1 - t;
  return {
    x: inv ** 3 * from.x + 3 * inv * inv * t * controlA.x + 3 * inv * t * t * controlB.x + t ** 3 * to.x,
    y: inv ** 3 * from.y + 3 * inv * inv * t * controlA.y + 3 * inv * t * t * controlB.y + t ** 3 * to.y
  };
}
function swordPath(base, target, destinationSide, scale, tuning, crossLane, targetSpan2) {
  const startSide = destinationSide === 1 ? -1 : 1;
  const sweepWidth = crossLane ? targetSpan2 * 0.34 : 0;
  const start = { x: base.x + startSide * (tuning.dockSideOffset * scale + sweepWidth), y: base.y - tuning.dockForward * scale };
  const finish = { x: base.x + destinationSide * (tuning.dockSideOffset * scale + sweepWidth), y: base.y - tuning.dockForward * scale };
  const targetInfluence = Math.max(0, Math.min(1, tuning.arcRadius / 100));
  const apex = {
    x: (start.x + finish.x) / 2 * (1 - targetInfluence) + target.x * targetInfluence + destinationSide * (crossLane ? 12 * scale : 0),
    y: Math.min(start.y, finish.y, target.y) - tuning.arcLift * scale
  };
  const controlA = {
    x: start.x + startSide * tuning.swingAngle * (crossLane ? 18 : 13) * scale,
    y: start.y + 10 * scale
  };
  const controlB = {
    x: apex.x - destinationSide * tuning.swingAngle * (crossLane ? 30 : 22) * scale,
    y: apex.y
  };
  return { start, finish, controlA, controlB };
}
function targetSpan(targets) {
  if (targets.length < 2) return 0;
  const xs = targets.map((target) => target.x);
  return Math.max(...xs) - Math.min(...xs);
}
function sweepTargetFor(targets, side, fallback) {
  if (targets.length === 0) return fallback;
  if (targets.length === 1) return targets[0];
  const sorted = [...targets].sort((a, b) => side === 1 ? a.x - b.x : b.x - a.x);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const span = Math.abs(last.x - first.x);
  return {
    x: last.x + side * Math.min(34, Math.max(14, span * 0.1)),
    y: Math.min(...sorted.map((target) => target.y), (first.y + last.y) / 2)
  };
}
function slashPose(base, target, destinationSide, progress, scale, tuning, crossLane, span) {
  const totalDuration = Math.max(0.01, tuning.strikeDuration + tuning.followThroughDuration);
  const strike = tuning.strikeDuration / totalDuration;
  const path = swordPath(base, target, destinationSide, scale, tuning, crossLane, span);
  const tangentSample = (pathT) => {
    const a = cubicPoint(path.start, path.controlA, path.controlB, path.finish, Math.max(0, pathT - 0.015));
    const b = cubicPoint(path.start, path.controlA, path.controlB, path.finish, Math.min(1, pathT + 0.015));
    return Math.atan2(b.y - a.y, b.x - a.x) - Math.PI / 2;
  };
  if (progress < strike) {
    const t2 = progress / strike;
    const ease2 = t2 * t2 * (3 - 2 * t2);
    const point2 = cubicPoint(path.start, path.controlA, path.controlB, path.finish, ease2);
    return {
      x: point2.x,
      y: point2.y,
      rotation: tangentSample(ease2),
      trailProgress: ease2
    };
  }
  const t = (progress - strike) / Math.max(1e-3, 1 - strike);
  const ease = t * t * (3 - 2 * t);
  const overshoot = {
    x: path.finish.x + destinationSide * 7 * scale,
    y: path.finish.y - 4 * scale
  };
  const point = quadraticPoint(path.finish, overshoot, path.finish, ease);
  return {
    x: point.x,
    y: point.y,
    rotation: tangentSample(1) - destinationSide * (1 - ease) * 0.35,
    trailProgress: 1
  };
}
function swordTrail(slash, scale, origins, tuning) {
  if (slash.progress >= 1) return [];
  const life = 1 - slash.progress;
  const thickness = slash.thickness * scale;
  const primitives = [];
  const targets = slash.targetPoints.length > 0 ? slash.targetPoints : [{ x: slash.x, y: slash.y - slash.reach }];
  const span = targetSpan(targets);
  const crossLane = span > 80 * scale;
  const sweepTarget = sweepTargetFor(targets, slash.side, targets[0]);
  for (const [index, origin] of origins.entries()) {
    const target = targets.length > 1 ? sweepTarget : targets[index % targets.length];
    const segments = tuning.trailSegments;
    const pose = slashPose(origin, target, slash.side, slash.progress, scale, tuning, crossLane, span);
    const travel = pose.trailProgress;
    if (travel <= 0) continue;
    const visibleSegments = Math.max(3, Math.ceil(segments * travel));
    for (let i = 0; i < visibleSegments; i++) {
      const t0 = Math.max(0, travel - (visibleSegments - i) / segments);
      const t1 = Math.min(1, t0 + 0.16);
      const totalDuration = tuning.strikeDuration + tuning.followThroughDuration;
      const strike = tuning.strikeDuration / totalDuration;
      const a = slashPose(origin, target, slash.side, t0 * strike, scale, tuning, crossLane, span);
      const b = slashPose(origin, target, slash.side, t1 * strike, scale, tuning, crossLane, span);
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const age = i / visibleSegments;
      const fade = Math.max(0.18, Math.pow(1 - age, 0.85)) * Math.min(1, life + 0.35);
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(1.6, thickness * (tuning.trailWidth - age * tuning.trailWidth * 0.48)),
        height: Math.hypot(dx, dy) / 2,
        color: slash.color,
        secondaryColor: "#ffffff",
        glow: 1.8 * fade,
        intensity: tuning.trailIntensity * fade,
        shape: "line",
        rotation: Math.atan2(-dx, dy)
      });
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(2.2, thickness * (tuning.trailWidth * 1.35 - age * tuning.trailWidth * 0.55)),
        height: Math.hypot(dx, dy) * 0.72,
        color: slash.color,
        secondaryColor: "#ffffff",
        glow: 1.6 * fade,
        intensity: tuning.trailIntensity * fade,
        shape: "bolt",
        rotation: Math.atan2(-dx, dy)
      });
    }
  }
  return primitives;
}
function swordVisuals(options) {
  const scene = emptyScene();
  if (!options.visible) return scene;
  const { definition, slash, points, scale = 1 } = options;
  const tuning = completeSwordVisualTuning(options.tuning);
  const slashes = options.slashes ?? [slash];
  for (const [index, point] of points.entries()) {
    const slotSlash = slashes[index] ?? null;
    const dockSide = slotSlash?.side ?? options.dockSides?.[index] ?? options.dockSide;
    const targets = slotSlash?.targetPoints ?? [];
    const span = targetSpan(targets);
    const crossLane = span > 80 * scale;
    const sweepTarget = slotSlash ? sweepTargetFor(targets, dockSide, { x: point.x, y: point.y - 30 * scale }) : null;
    const target = targets.length > 1 ? sweepTarget : targets[index % Math.max(1, targets.length)];
    const rest = { x: point.x + dockSide * tuning.dockSideOffset * scale, y: point.y - tuning.dockForward * scale };
    const current = slotSlash && target ? slashPose(point, target, dockSide, slotSlash.progress, scale, tuning, crossLane, span) : {
      x: rest.x,
      y: rest.y,
      rotation: -dockSide * 0.95,
      trailProgress: 0
    };
    scene.shapes.push({
      shape: requiredShape("sword-needle-sabre"),
      x: current.x,
      y: current.y,
      z: 0.02 + index * 1e-3,
      size: Math.min(23, definition.range * 0.34) * scale,
      color: neonPalette[definition.color],
      rotationX: 75 * Math.PI / 180,
      rotationY: 13 * Math.PI / 180,
      rotationZ: 15 * Math.PI / 180 + current.rotation,
      lineThickness: 0.92,
      glow: slotSlash ? 1.65 : 1.08,
      energyIntensity: slotSlash ? 2.25 : 1.2,
      energyCoverage: slotSlash ? 0.72 : 0.42,
      energySpeed: slotSlash ? 2.1 : 1.2,
      energyBleed: slotSlash ? 0.8 : 0.5
    });
  }
  for (const [index, slotSlash] of slashes.entries()) {
    if (!slotSlash) continue;
    const point = points[index];
    if (point) scene.primitives.push(...swordTrail(slotSlash, scale, [point], tuning));
  }
  return scene;
}
function pickupShape(shapeId, options) {
  const { x, y, color, now, scale = 1 } = options;
  return {
    shape: requiredShape(shapeId),
    x: x + Math.sin(now / 420 + y * 0.07) * 4.5 * scale,
    y,
    size: 10 * scale * (1 + Math.sin(now / 600 + y * 0.05) * 0.08),
    color,
    rotationZ: now / 1100,
    lineThickness: 0.76,
    glow: 1.05,
    energyIntensity: 1.25,
    energyCoverage: 0.48,
    energySpeed: 1.35,
    energyBleed: 0.55
  };
}
var shieldPickupVisual = (options) => pickupShape("shield-ring", options);
var swordPickupVisual = (options) => pickupShape("sword-needle-sabre", options);

// projects/NeonSwarm/src/renderOrientation.ts
var degreesToRadians = (degrees) => degrees * Math.PI / 180;
var playerForwardRotation = {
  rotationX: degreesToRadians(-52),
  rotationY: degreesToRadians(-1),
  rotationZ: degreesToRadians(1)
};
var screenForwardYaw = (direction) => {
  const length = Math.hypot(direction.x, direction.y) || 1;
  return Math.atan2(direction.x / length, -direction.y / length);
};
function actorOrientation(role, context) {
  switch (role) {
    case "groundForward": {
      return {
        ...playerForwardRotation,
        rotationX: playerForwardRotation.rotationX + Math.sin(context.now / 650 + (context.phase ?? 0)) * 0.06,
        rotationY: playerForwardRotation.rotationY + (context.facing ? screenForwardYaw(context.facing) : 0)
      };
    }
    case "tumblingBillboard":
      return {
        rotationY: Math.sin(context.now / 700 + (context.phase ?? 0)) * 0.18
      };
    case "screenBillboard":
      return {};
  }
}
function helicopterViewportFor(width, height, playerY, focusX) {
  return { width, height, playerY, focusX };
}
function playerOrientation(camera, viewport, x, y, now, phase = 0) {
  return actorOrientation("groundForward", {
    camera,
    viewport,
    x,
    y,
    now,
    phase,
    facing: { x: 0, y: -1 }
  });
}
function enemyOrientation(camera, viewport, x, y, now, phase = 0) {
  return actorOrientation("tumblingBillboard", {
    camera,
    viewport,
    x,
    y,
    now,
    phase
  });
}
function billboardOrientation(camera, viewport, x, y, now) {
  return actorOrientation("screenBillboard", {
    camera,
    viewport,
    x,
    y,
    now
  });
}

// projects/NeonSwarm/src/sceneEnvironment.ts
var sceneBackgrounds = /* @__PURE__ */ new Map();
var defaultLaneRunnerSceneBackgroundTuning = {
  zoomPercent: 108,
  laneShiftPercent: 30,
  yPercent: 50
};
function laneRunnerScenePrimitives(sceneId, width, height, timeMs) {
  return [...createLaneRunnerScene({ sceneId, width, height, timeMs }).primitives ?? []];
}
function laneRunnerSceneBackgroundUrl(sceneId) {
  const path = location.pathname;
  const marker = "/NeonSwarm/";
  const nestedIndex = path.indexOf(marker);
  if (nestedIndex >= 0) return `${path.slice(0, nestedIndex)}/NeonSwarm/scenes/${sceneId}.png`;
  const pageIndex = path.lastIndexOf("/NeonSwarm.html");
  if (pageIndex >= 0) return `${path.slice(0, pageIndex)}/NeonSwarm/scenes/${sceneId}.png`;
  return `NeonSwarm/scenes/${sceneId}.png`;
}
function applyLaneRunnerSceneBackground(element, sceneId, tuning = defaultLaneRunnerSceneBackgroundTuning, laneOffset = 0) {
  syncLaneRunnerSceneBackgroundPlacement(element, tuning, laneOffset);
  element.style.backgroundRepeat = "no-repeat";
  const path = laneRunnerSceneBackgroundUrl(sceneId);
  const state = sceneBackgrounds.get(path);
  if (state === "loaded") {
    element.style.backgroundImage = `url("${path}")`;
    return;
  }
  element.style.removeProperty("background-image");
  if (state) return;
  sceneBackgrounds.set(path, "loading");
  const image = new Image();
  image.onload = () => {
    sceneBackgrounds.set(path, "loaded");
    element.style.backgroundImage = `url("${path}")`;
  };
  image.onerror = () => {
    sceneBackgrounds.set(path, "missing");
    element.style.removeProperty("background-image");
  };
  image.src = path;
}
function syncLaneRunnerSceneBackgroundPlacement(element, tuning = defaultLaneRunnerSceneBackgroundTuning, laneOffset = 0) {
  const clampedLaneOffset = Math.max(-1, Math.min(1, laneOffset));
  const shift = clampedLaneOffset * tuning.laneShiftPercent;
  element.style.backgroundPosition = `calc(50% + ${shift.toFixed(2)}%) ${tuning.yPercent.toFixed(2)}%`;
  element.style.backgroundSize = `${tuning.zoomPercent.toFixed(2)}% auto`;
}

// projects/NeonSwarm/src/shapeVisuals.ts
var swarmShapes = {
  player: getNeonShape("arrow-classic"),
  enemy: getNeonShape("hunter-eye"),
  multiplier: getNeonShape("bruiser-cross"),
  gunPickup: getNeonShape("hex-fighter")
};
var actorInTopDownScene = (actor, x, y, size, overrides = {}) => ({ ...actor.renderInstance(overrides), x, y, size });
var shapeLabel = (text, position, fontSize, offset = 4) => ({ text, position, fontSize, offset, fontFamily: "Segoe UI, sans-serif", fontWeight: 700 });

// projects/NeonSwarm/src/squad.ts
var SquadModel = class {
  lane = 0;
  count = 1;
  aimOffset = 0;
  x = 0;
  targetX = 0;
  laneShiftStartedAt = 0;
  add(amount) {
    const spec = multiplierFamily.members.squadPlusOne;
    this.count = Math.min(spec.maxSquadSize, this.count + amount);
    return this.count;
  }
  remove(amount = 1) {
    this.count = Math.max(0, this.count - amount);
    return this.count;
  }
  setLane(lane, laneCenter, now) {
    if (lane !== this.lane) {
      this.laneShiftStartedAt = now;
      this.aimOffset = 0;
    }
    this.lane = lane;
    this.targetX = laneCenter(lane) + this.aimOffset;
  }
  autoAim(targetOffset, laneWidth, laneCenter) {
    this.aimOffset += (Math.max(-laneWidth * 0.28, Math.min(laneWidth * 0.28, targetOffset)) - this.aimOffset) * 0.85;
    this.targetX = laneCenter(this.lane) + this.aimOffset;
  }
  update(deltaSeconds) {
    const response = 1 - Math.pow(8e-5, deltaSeconds);
    this.x += (this.targetX - this.x) * response;
  }
  /** X offsets of each column in the front row, relative to squad center. */
  frontRowColumnOffsets(scale) {
    const spec = multiplierFamily.members.squadPlusOne;
    const rowCount = Math.min(spec.membersPerRow, this.count);
    return Array.from(
      { length: rowCount },
      (_, col) => (col - (rowCount - 1) / 2) * spec.spacing * scale
    );
  }
  points(baseY, scale) {
    const spec = multiplierFamily.members.squadPlusOne;
    const points = [];
    for (let index = 0; index < this.count; index++) {
      const row = Math.floor(index / spec.membersPerRow);
      const rowCount = Math.min(spec.membersPerRow, this.count - row * spec.membersPerRow);
      const column = index % spec.membersPerRow;
      points.push({
        x: this.x + (column - (rowCount - 1) / 2) * spec.spacing * scale,
        y: baseY + row * spec.spacing * scale,
        column,
        row
      });
    }
    return points;
  }
};

// projects/NeonSwarm/src/simulation/NeonSwarmSimulation.ts
var gunFireSoundIds = {
  pulsePistol: "Primary",
  needlerSmg: "NeedlerFire",
  burstCarbine: "BurstCarbineFire",
  heavyCannon: "HeavyCannonFire",
  splitterRifle: "SplitterRifleFire"
};
var swordImpactSoundIds = {
  arcBlade: "SwordArcImpact",
  cleaver: "SwordCleaverImpact"
};
var soundAlternativeCounts = {
  Primary: 3,
  EnemyDestroyed: 2,
  EnemyHit: 2,
  EnemySpawn: 2,
  Boss: 1,
  ProjectileHit: 2
};
var maxTrackSpawnLeadSeconds = 18;
var firstTrackRowArrivalSeconds = 2 * combatTuning.globalSpeedMultiplier;
var trackRowTravelSeconds = 0.375 * combatTuning.globalSpeedMultiplier;
var NeonSwarmSimulation = class _NeonSwarmSimulation {
  mode;
  canvas;
  stageElement;
  cameraSettings;
  squad = new SquadModel();
  renderer;
  sound;
  onRunStatus;
  onFinish;
  animationFrame = 0;
  activeTrack = null;
  trackSceneId;
  lastFrame = performance.now();
  combatElapsed = 0;
  combatNow = 0;
  playerLane = 0;
  cooldown = 0;
  gunCooldowns = [];
  entityIdCounter = 0;
  trackEntities = [];
  nextTrackEntity = 0;
  breaches = 0;
  kills = 0;
  enemies = [];
  gunSimulation = new GunSimulation();
  gunPickups = [];
  shieldPickups = [];
  swordPickups = [];
  collectedWeaponLevels = /* @__PURE__ */ new Map();
  multipliers = [];
  enemyExitEffects = [];
  victory = null;
  swordVisualTuning = {};
  pendingSwordDamage = null;
  failureReason = "";
  playerActors = [];
  explodingPlayers = [];
  weaponHudScreenX = null;
  weaponHudTuning = {
    iconScale: 0.22,
    spacing: 63,
    fontSize: 15,
    verticalOffset: 146
  };
  simulationSpeed = 1;
  sceneBackgroundTuning = { ...defaultLaneRunnerSceneBackgroundTuning };
  activeByFamily = {
    gun: null,
    shield: null,
    sword: null
  };
  constructor(renderer, options) {
    this.renderer = renderer;
    this.mode = options.mode;
    this.canvas = options.canvas;
    this.stageElement = options.stageElement;
    this.cameraSettings = options.cameraSettings ?? { ...defaultHelicopterCameraSettings };
    this.sound = options.sound;
    this.onRunStatus = options.onRunStatus;
    this.onFinish = options.onFinish;
    this.trackSceneId = options.sceneId ?? "neonHall";
    this.applySceneBackground();
    this.reset({ silent: true });
  }
  static async create(options) {
    const renderer = await NeonTopDownSceneRenderer.create(options.canvas, laneRunnerViewport.logicalWidth, laneRunnerViewport.logicalHeight);
    return new _NeonSwarmSimulation(renderer, options);
  }
  get now() {
    return this.combatNow;
  }
  get activeTrackRunning() {
    return this.activeTrack !== null;
  }
  laneX(lane) {
    return this.canvas.width * (lane === 0 ? 0.32 : 0.68);
  }
  playerY() {
    return this.canvas.height * 0.82;
  }
  scale() {
    return 1;
  }
  reset(options = {}) {
    this.activeTrack = null;
    this.lastFrame = performance.now();
    this.combatElapsed = 0;
    this.combatNow = 0;
    this.cooldown = 0;
    this.gunCooldowns = [];
    this.nextTrackEntity = 0;
    this.trackEntities = [];
    this.breaches = 0;
    this.kills = 0;
    this.clearStage();
    this.activeByFamily.gun = null;
    this.activeByFamily.shield = null;
    this.activeByFamily.sword = null;
    this.collectedWeaponLevels.clear();
    this.squad.count = 1;
    this.squad.aimOffset = 0;
    this.squad.lane = 0;
    this.squad.x = this.laneX(0);
    this.squad.targetX = this.laneX(0);
    this.playerLane = 0;
    this.weaponHudScreenX = this.weaponHudTargetScreenX(0);
    this.playerActors = [new NeonShapeActor({ shape: swarmShapes.player })];
    this.failureReason = "";
    this.victory = null;
    this.pendingSwordDamage = null;
    if (!options.silent) this.play("MenuOpen");
  }
  clearStage() {
    this.enemies = [];
    this.gunSimulation.clear();
    this.gunPickups = [];
    this.shieldPickups = [];
    this.swordPickups = [];
    this.multipliers = [];
    this.enemyExitEffects = [];
    this.explodingPlayers = [];
    this.victory = null;
    this.pendingSwordDamage = null;
  }
  startTrack(track) {
    this.activeTrack = track;
    this.trackSceneId = track.environment.sceneId;
    this.applySceneBackground();
    this.lastFrame = performance.now();
    this.combatElapsed = 0;
    this.combatNow = 0;
    const allEntities = parseTrackDefinition(track.definition);
    const playerStart = allEntities.find((entity) => entity.id === "player.start");
    const startLane = playerStart?.side === "right" ? 1 : 0;
    this.playerLane = startLane;
    this.activeByFamily.gun = null;
    this.activeByFamily.shield = null;
    this.activeByFamily.sword = null;
    this.collectedWeaponLevels.clear();
    this.cooldown = 0;
    this.gunCooldowns = [];
    this.nextTrackEntity = 0;
    this.trackEntities = allEntities.filter((entity) => entity.id !== "player.start");
    this.breaches = 0;
    this.clearStage();
    this.squad.count = 1;
    this.playerActors = [new NeonShapeActor({ shape: swarmShapes.player })];
    this.squad.aimOffset = 0;
    this.squad.lane = startLane;
    this.squad.x = this.laneX(startLane);
    this.squad.targetX = this.laneX(startLane);
    this.weaponHudScreenX = this.weaponHudTargetScreenX(startLane);
    this.play("TrackStart");
  }
  setScene(sceneId) {
    this.trackSceneId = sceneId;
    this.applySceneBackground();
  }
  setSquadLane(lane, options = {}) {
    if (options.requireActiveTrack && !this.activeTrack) return;
    if (lane !== this.squad.lane) this.play("LaneSwitch");
    this.squad.setLane(lane, (value) => this.laneX(value), this.combatNow);
    this.playerLane = lane;
  }
  equipGun(gunId, level2 = 1) {
    const normalizedLevel = this.normalizeWeaponLevel("gun", gunId, level2);
    this.recordWeaponLevel("gun", gunId, normalizedLevel);
    this.activeByFamily.gun = { id: gunId, level: normalizedLevel };
    this.cooldown = 0;
    this.gunCooldowns = [];
    this.playPickup("PickupGun");
    this.play("WeaponReady");
  }
  equipShield(shieldId) {
    const level2 = this.nextWeaponPickupLevel("shield", shieldId);
    const def = shieldFamily.members[shieldId];
    this.recordWeaponLevel("shield", shieldId, level2);
    this.activeByFamily.shield = new ShieldState(shieldId, def.maxCharges, level2);
    this.playPickup("PickupShield");
    this.play("Shield");
  }
  equipSword(swordId) {
    const level2 = this.nextWeaponPickupLevel("sword", swordId);
    this.recordWeaponLevel("sword", swordId, level2);
    this.activeByFamily.sword = new SwordState(swordId, level2);
    this.playPickup("PickupSword");
    this.play("WeaponReady");
  }
  setSwordVisualTuning(tuning) {
    this.swordVisualTuning = { ...tuning };
  }
  setSimulationSpeed(speed) {
    this.simulationSpeed = Number.isFinite(speed) ? Math.max(0.05, Math.min(2, speed)) : 1;
  }
  addSquadMembers(amount) {
    this.squad.add(amount);
    this.syncPlayerActors();
  }
  spawnEnemy(options) {
    const definition = orbFamily.members[options.enemyId];
    const health = options.health ?? definition.health;
    const id = ++this.entityIdCounter;
    const actor = createEnemyActor(options.enemyId);
    if (options.color) actor.color = options.color;
    this.enemies.push({
      id,
      enemyType: options.enemyId,
      enemyId: options.enemyId,
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 105 * this.scale(),
      health,
      maxHealth: health,
      speedMultiplier: options.speedMultiplier ?? 1,
      rowId: options.rowId ?? id,
      actor,
      dying: false
    });
    if (options.playSound !== false && definition.spawnSound) this.play(definition.spawnSound);
    return id;
  }
  defeatEnemyById(id) {
    const enemy = this.enemies.find((item) => item.id === id);
    if (enemy && !enemy.dying) this.destroyEnemy(enemy);
  }
  spawnGunPickup(options) {
    this.gunPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      gunId: options.gunId,
      requestedLevel: options.level === void 0 ? void 0 : this.normalizeWeaponLevel("gun", options.gunId, options.level),
      speedMultiplier: options.speedMultiplier ?? 1,
      actor: new NeonShapeActor({ shape: swarmShapes.gunPickup })
    });
  }
  spawnShieldPickup(options) {
    this.shieldPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      shieldId: options.shieldId,
      requestedLevel: options.level === void 0 ? void 0 : this.normalizeWeaponLevel("shield", options.shieldId, options.level),
      speedMultiplier: options.speedMultiplier ?? 1
    });
  }
  spawnSwordPickup(options) {
    this.swordPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      swordId: options.swordId,
      requestedLevel: options.level === void 0 ? void 0 : this.normalizeWeaponLevel("sword", options.swordId, options.level),
      speedMultiplier: options.speedMultiplier ?? 1
    });
  }
  spawnMultiplierPickup(options) {
    const multiplierId = options.multiplierId ?? "squadPlusOne";
    this.multipliers.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      multiplierId,
      speedMultiplier: options.speedMultiplier ?? 1,
      actor: new NeonShapeActor({ shape: swarmShapes.multiplier })
    });
  }
  startLoop() {
    this.stopLoop();
    const frame = (now) => {
      this.tick(now);
      this.render(this.combatNow);
      this.animationFrame = requestAnimationFrame(frame);
    };
    this.animationFrame = requestAnimationFrame(frame);
  }
  stopLoop() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
  }
  tick(frameNow) {
    const rawDelta = Math.min(0.05, (frameNow - this.lastFrame) / 1e3);
    this.lastFrame = frameNow;
    const delta = rawDelta * combatTuning.globalSpeedMultiplier * this.simulationSpeed;
    this.combatElapsed += delta;
    this.combatNow = this.combatElapsed * 1e3;
    this.updateWeaponHud(delta);
    for (const item of [...this.explodingPlayers]) {
      item.actor.update(delta);
      if (item.actor.disposed) this.explodingPlayers.splice(this.explodingPlayers.indexOf(item), 1);
    }
    updateEnemyExitEffects(this.enemyExitEffects, delta);
    if (this.mode === "game" && !this.activeTrack) return;
    if (this.activeTrack) this.spawnTrackEntities();
    const gunStatus = this.activeByFamily.gun ? gunFamily.members[this.activeByFamily.gun.id].label : "No weapon";
    const shieldDef = this.activeByFamily.shield ? shieldFamily.members[this.activeByFamily.shield.shieldId] : null;
    const swordDef = this.activeByFamily.sword ? swordFamily.members[this.activeByFamily.sword.swordId] : null;
    if (this.activeTrack) {
      this.onRunStatus?.(`${gunStatus}${shieldDef ? ` \xB7 ${shieldDef.label}` : ""}${swordDef ? ` \xB7 ${swordDef.label}` : ""}`);
    }
    const laneEnemies = this.enemies.filter((enemy) => enemy.lane === this.squad.lane && !enemy.dying);
    const colOffsets = this.squad.frontRowColumnOffsets(this.scale());
    const offset = selectAutoAimOffset(laneEnemies, this.laneX(this.squad.lane), colOffsets, this.squad.aimOffset);
    this.squad.autoAim(offset, this.canvas.width * 0.22, (lane) => this.laneX(lane));
    this.squad.update(delta);
    this.stageElement.dataset.squadLane = String(this.squad.lane);
    this.syncSceneBackgroundPlacement();
    this.syncPlayerActors();
    if (this.activeByFamily.gun) {
      advanceCooldownSlots(this.gunCooldowns, delta);
      this.fire();
      if (this.gunSimulation.updateFiring(this.combatNow) > 0) this.playGunFire(this.activeByFamily.gun.id);
    }
    this.updateProjectiles(delta);
    this.updateNearPlayerEffects(delta, shieldDef, swordDef);
    this.updateEnemies(delta, shieldDef);
    this.updatePickups(delta);
    if (this.activeTrack && this.trackResolved()) this.finish(this.breaches === 0);
  }
  render(now = this.combatNow) {
    const primitives = laneRunnerScenePrimitives(this.trackSceneId, this.canvas.width, this.canvas.height, now);
    const s = this.scale();
    const playerPoints = this.squad.points(this.playerY(), s);
    const helicopterViewport = helicopterViewportFor(this.canvas.width, this.canvas.height, this.playerY(), laneRunnerCameraFocusX(this.canvas.width, this.squad.x));
    for (const point of playerPoints) {
      const smear = Math.min(22 * s, Math.abs(this.squad.targetX - this.squad.x) * 0.45);
      if (smear > 2) {
        primitives.push({
          x: point.x - Math.sign(this.squad.targetX - this.squad.x) * smear * 0.5,
          y: point.y,
          width: smear,
          height: 2.2 * s,
          color: neonPalette.deepBlue,
          secondaryColor: neonPalette.cyan,
          glow: 0.45,
          intensity: 0.5,
          shape: "bolt"
        });
      }
    }
    primitives.push(...this.gunSimulation.projectilePrimitives());
    if (this.victory) primitives.push(...this.victory.primitives(now));
    const shapeInstances = [];
    if (this.activeByFamily.shield) {
      const liveShield = this.activeByFamily.shield;
      const liveDef = shieldFamily.members[liveShield.shieldId];
      const scene = shieldVisuals({
        definition: liveDef,
        strength: liveShield.charges,
        initialStrength: liveDef.maxCharges,
        x: this.squad.x,
        y: this.playerY(),
        now,
        scale: s,
        projectScreenOffset: (x, y, offsetX, offsetY) => {
          const center = projectHelicopterPoint(x, y, this.cameraSettings, helicopterViewport);
          return unprojectHelicopterScreenPoint(center.x + offsetX * center.scale, center.y + offsetY * center.scale, this.cameraSettings, helicopterViewport);
        },
        hitProgress: liveShield.hitFlashProgress
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }
    if (this.activeByFamily.sword) {
      const liveSword = this.activeByFamily.sword;
      const liveDef = swordFamily.members[liveSword.swordId];
      const scene = swordVisuals({
        definition: liveDef,
        slash: liveSword.activeSlash,
        slashes: liveSword.activeSlashes,
        dockSide: liveSword.previousSlashSide,
        dockSides: liveSword.previousSlashSides,
        points: playerPoints,
        tuning: this.swordVisualTuning,
        scale: s,
        visible: true
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }
    for (const pickup of this.shieldPickups) {
      const definition = shieldFamily.members[pickup.shieldId];
      const level2 = this.pickupGrantLevel("shield", pickup.shieldId, pickup.requestedLevel);
      shapeInstances.push({
        ...shieldPickupVisual({
          x: pickup.x,
          y: pickup.y,
          color: neonPalette[definition.color],
          now,
          scale: s
        }),
        label: shapeLabel(`${definition.label}: L${level2}`, "above", 10, 7)
      });
    }
    for (const pickup of this.swordPickups) {
      const definition = swordFamily.members[pickup.swordId];
      const level2 = this.pickupGrantLevel("sword", pickup.swordId, pickup.requestedLevel);
      shapeInstances.push({
        ...swordPickupVisual({
          x: pickup.x,
          y: pickup.y,
          color: neonPalette[definition.color],
          now,
          scale: s
        }),
        label: shapeLabel(`${definition.label}: L${level2}`, "above", 10, 7)
      });
    }
    const playerSize = 14;
    for (const [index, point] of playerPoints.entries()) {
      const actor = this.playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, playerOrientation(this.cameraSettings, helicopterViewport, point.x, point.y, now, index)));
    }
    for (const item of this.explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));
    shapeInstances.push(...this.weaponHudShapes(now, s, helicopterViewport));
    const enemyHealthBars = [];
    for (const enemy of this.enemies) {
      const definition = this.enemyDefinition(enemy);
      const size = 18 * definition.columnSpan;
      enemyHealthBars.push({ enemyId: enemy.enemyId, x: enemy.x, y: enemy.y, health: enemy.health, maxHealth: enemy.maxHealth, size, scale: s });
      shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, size, enemyOrientation(this.cameraSettings, helicopterViewport, enemy.x, enemy.y, now, enemy.rowId)));
    }
    for (const pickup of this.gunPickups) {
      const gun = gunFamily.members[pickup.gunId];
      const level2 = this.pickupGrantLevel("gun", pickup.gunId, pickup.requestedLevel);
      pickup.actor.label = shapeLabel(`${gun.label}: L${level2}`, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 15, billboardOrientation(this.cameraSettings, helicopterViewport, pickup.x, pickup.y, now)));
    }
    for (const pickup of this.multipliers) {
      const spec = multiplierFamily.members[pickup.multiplierId];
      pickup.actor.label = shapeLabel(`${spec.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[spec.pickupColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 16, billboardOrientation(this.cameraSettings, helicopterViewport, pickup.x, pickup.y, now)));
    }
    const projected = projectHelicopterScene(primitives, shapeInstances, this.enemyExitEffects.map(enemyExitCloud), this.cameraSettings, helicopterViewport);
    projected.primitives.push(...projectedEnemyHealthBarPrimitives(enemyHealthBars, this.cameraSettings, helicopterViewport));
    this.renderer.render(projected, now / 1e3);
  }
  snapshot() {
    return {
      mode: this.mode,
      activeTrack: this.activeTrack !== null,
      combatNow: this.combatNow,
      combatElapsed: this.combatElapsed,
      sceneId: this.trackSceneId,
      squad: {
        lane: this.squad.lane,
        count: this.squad.count,
        x: this.squad.x,
        targetX: this.squad.targetX,
        aimOffset: this.squad.aimOffset
      },
      active: {
        gun: this.activeByFamily.gun ? { ...this.activeByFamily.gun } : null,
        shield: this.activeByFamily.shield?.shieldId ?? null,
        shieldLevel: this.activeByFamily.shield?.level ?? null,
        sword: this.activeByFamily.sword ? { id: this.activeByFamily.sword.swordId, level: this.activeByFamily.sword.level } : null
      },
      enemies: this.enemies.map((enemy) => ({
        id: enemy.id,
        enemyId: enemy.enemyId,
        lane: enemy.lane,
        x: enemy.x,
        y: enemy.y,
        health: enemy.health,
        maxHealth: enemy.maxHealth,
        dying: enemy.dying
      })),
      pickups: {
        guns: this.gunPickups.length,
        shields: this.shieldPickups.length,
        swords: this.swordPickups.length,
        multipliers: this.multipliers.length
      },
      kills: this.kills
    };
  }
  destroy() {
    this.stopLoop();
    this.renderer.destroy();
  }
  spawnTrackEntities() {
    if (!this.activeTrack) return;
    while (this.nextTrackEntity < this.trackEntities.length && this.entityArrivalSeconds(this.trackEntities[this.nextTrackEntity]) <= this.combatElapsed + this.spawnLeadSeconds(this.trackEntities[this.nextTrackEntity])) {
      const entity = this.trackEntities[this.nextTrackEntity++];
      const lane = entity.side === "left" ? 0 : 1;
      const enemyDefinitionEntry = enemyDefinitionFromTrackId(entity.id);
      if (enemyDefinitionEntry) {
        const { enemyId, definition } = enemyDefinitionEntry;
        this.enemies.push({
          id: ++this.entityIdCounter,
          enemyType: enemyId,
          enemyId,
          lane,
          x: this.entityX(entity),
          y: this.enemySpawnY(entity),
          health: definition.health * this.activeTrack.definition.balance.enemyHp,
          maxHealth: definition.health * this.activeTrack.definition.balance.enemyHp,
          speedMultiplier: entity.speedMultiplier,
          rowId: entity.rowIndex,
          actor: createEnemyActor(enemyId),
          dying: false
        });
        if (definition.spawnSound) this.play(definition.spawnSound);
      } else if (entity.id.startsWith("pickup.weapon.gun.")) {
        const candidate = entity.id.slice("pickup.weapon.gun.".length);
        if (!(candidate in gunFamily.members)) throw new Error(`Track uses unknown gun id "${entity.id}".`);
        this.spawnGunPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), gunId: candidate, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.shield.")) {
        const candidate = entity.id.slice("pickup.weapon.shield.".length);
        if (!(candidate in shieldFamily.members)) throw new Error(`Track uses unknown shield id "${entity.id}".`);
        this.spawnShieldPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), shieldId: candidate, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.sword.")) {
        const candidate = entity.id.slice("pickup.weapon.sword.".length);
        if (!(candidate in swordFamily.members)) throw new Error(`Track uses unknown sword id "${entity.id}".`);
        this.spawnSwordPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), swordId: candidate, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        this.spawnMultiplierPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), speedMultiplier: entity.speedMultiplier });
      } else {
        throw new Error(`Track entity id "${entity.id}" is not supported by the lane runner.`);
      }
    }
  }
  trackResolved() {
    return this.nextTrackEntity >= this.trackEntities.length && this.enemies.length === 0 && this.gunPickups.length === 0 && this.shieldPickups.length === 0 && this.swordPickups.length === 0 && this.multipliers.length === 0;
  }
  fire() {
    if (!this.activeByFamily.gun) return;
    const { id: gunId, level: gunLevel } = this.activeByFamily.gun;
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find((item) => item.level === gunLevel) ?? gun.levels[0];
    const points = this.squad.points(this.playerY(), this.scale()).map((point) => ({ x: point.x, y: this.playerY() - 20 * this.scale() }));
    this.syncGunCooldowns(points.length);
    const claimedTargetIds = /* @__PURE__ */ new Set();
    const cycleSeconds = 1 / tuning.fireRatePerSecond;
    for (const [index, point] of points.entries()) {
      if (this.gunCooldowns[index] > 0) continue;
      const target = this.selectGunTarget(point.x, claimedTargetIds);
      if (!target) continue;
      claimedTargetIds.add(target.id);
      this.gunSimulation.fire(gun, tuning, this.playerLane, [{ ...point, aimX: target.x, aimY: target.y }], this.combatNow, this.scale());
      this.gunCooldowns[index] = cycleSeconds;
    }
    this.cooldown = this.gunCooldowns.length > 0 ? Math.min(...this.gunCooldowns) : 0;
  }
  syncGunCooldowns(count) {
    syncSlotArray(this.gunCooldowns, count, () => 0);
  }
  selectGunTarget(originX, claimedTargetIds) {
    const nativeReach = 42 * this.scale();
    const assistReach = 96 * this.scale();
    const liveLaneEnemies = this.enemies.filter((enemy) => !enemy.dying && enemy.lane === this.playerLane && enemy.y < this.playerY());
    const nativeTarget = selectBestUnclaimed(
      liveLaneEnemies,
      claimedTargetIds,
      (enemy) => enemy.id,
      (enemy) => this.scoreGunNativeTarget(enemy, originX, nativeReach)
    );
    const pressureTarget = selectBestUnclaimed(
      liveLaneEnemies,
      /* @__PURE__ */ new Set(),
      (enemy) => enemy.id,
      (enemy) => this.scoreGunPressureTarget(enemy, originX, assistReach, claimedTargetIds.has(enemy.id))
    );
    if (!nativeTarget) return pressureTarget;
    if (!pressureTarget) return nativeTarget;
    const nativeDistance = this.playerY() - nativeTarget.y;
    const pressureDistance = this.playerY() - pressureTarget.y;
    return pressureDistance + 80 * this.scale() < nativeDistance ? pressureTarget : nativeTarget;
  }
  scoreGunNativeTarget(enemy, originX, horizontalReach) {
    const dx = Math.abs(enemy.x - originX);
    if (dx > horizontalReach + this.enemyDefinition(enemy).radius * this.scale()) return null;
    const dy = this.playerY() - enemy.y;
    return dx * 1e3 + dy;
  }
  scoreGunPressureTarget(enemy, originX, horizontalReach, alreadyClaimed) {
    const dx = Math.abs(enemy.x - originX);
    if (dx > horizontalReach + this.enemyDefinition(enemy).radius * this.scale()) return null;
    const dy = this.playerY() - enemy.y;
    const columnPressure = this.enemies.filter(
      (other) => !other.dying && other.lane === enemy.lane && other.y < this.playerY() && Math.abs(other.x - enemy.x) <= 18 * this.scale() && Math.abs(other.y - enemy.y) <= 180 * this.scale()
    ).length;
    const claimedPenalty = alreadyClaimed ? 450 : 0;
    const pressureBonus = Math.min(4, columnPressure) * 70 * this.scale();
    return claimedPenalty + dx * 7 + dy - pressureBonus;
  }
  updateProjectiles(delta) {
    this.gunSimulation.updateProjectiles(delta, this.combatNow, this.enemies.map((enemy) => Object.assign(enemy, {
      radius: this.enemyDefinition(enemy).radius * this.scale()
    })), { top: -40 * this.scale(), left: -40, right: this.canvas.width + 40 }, (shot, enemy) => {
      const gameEnemy = enemy;
      const result2 = resolveEnemyDamage({
        enemy: gameEnemy,
        effects: this.enemyExitEffects,
        impactMagnitude: shot.damage + shot.knockback * 0.06,
        color: this.enemyExitColor(gameEnemy)
      });
      if (result2.killed) {
        this.kills++;
        this.play(result2.definition.deathSound);
      } else {
        this.play("ProjectileHit");
        this.play("EnemyHit");
      }
    });
  }
  updateNearPlayerEffects(delta, shieldDef, swordDef) {
    const px = this.squad.x;
    const py = this.playerY();
    if (this.activeByFamily.shield && shieldDef) {
      const shieldState = this.activeByFamily.shield;
      const shieldThreats = queryNearbyThreats(this.enemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: shieldDef.radius * this.scale(),
        includeAdjacentLanes: false,
        purpose: "shield"
      });
      const shieldResult = tickShield(shieldState, shieldDef, shieldThreats, px, py, this.combatNow, delta);
      if (shieldResult.pushEnemyIds.length > 0) {
        for (const enemy of this.enemies) {
          if (!shieldResult.pushEnemyIds.includes(enemy.id)) continue;
          const dx = enemy.x - px;
          const dy = enemy.y - py;
          const dist = Math.hypot(dx, dy) || 1;
          enemy.x += dx / dist * shieldResult.pushDistance * this.scale();
          enemy.y += dy / dist * shieldResult.pushDistance * this.scale();
        }
        this.play("ShieldPulse");
      }
      if (shieldResult.contactDamageEnemyIds.length > 0) {
        for (const enemy of [...this.enemies]) {
          if (enemy.dying || !shieldResult.contactDamageEnemyIds.includes(enemy.id)) continue;
          enemy.health -= shieldResult.contactDamageAmount * delta;
          if (enemy.health <= 0) this.destroyEnemy(enemy);
        }
      }
    }
    if (this.activeByFamily.sword && swordDef) {
      const swordState = this.activeByFamily.sword;
      const swordQueryRange = swordDef.rowReach ? Math.max(this.canvas.width, swordDef.range * this.scale()) : swordDef.range * this.scale();
      const swordThreats = queryNearbyThreats(this.enemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: swordQueryRange,
        includeAdjacentLanes: swordDef.targetingMode === "nearestInEitherLane",
        maxTargets: swordDef.rowReach ? void 0 : swordDef.maxTargets,
        purpose: "sword"
      }).filter((threat) => !swordDef.rowReach || Math.abs(threat.target.y - py) <= swordDef.range * this.scale());
      const swordResult = tickSword(swordState, swordDef, swordThreats, px, py, this.combatNow, delta, neonPalette[swordDef.color], swordVisualDurationMs(this.swordVisualTuning), this.squad.count);
      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        this.applyPendingSwordDamage({ force: true });
        this.play("SwordSwingWhoosh");
        this.pendingSwordDamage = {
          hits: this.scheduleSwordHits(swordResult.hitTargets, swordState.previousSlashSide),
          damage: swordResult.damage,
          color: neonPalette[swordDef.color],
          impactSoundId: swordImpactSoundIds[swordState.swordId]
        };
      }
      this.applyPendingSwordDamage();
    }
  }
  scheduleSwordHits(targets, side) {
    if (targets.length === 0) return [];
    const duration = swordVisualDurationMs(this.swordVisualTuning);
    const xs = targets.map((target) => target.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const span = Math.max(1, maxX - minX);
    const leftToRight = side === 1;
    return targets.map((target) => {
      const laneProgress = leftToRight ? (target.x - minX) / span : (maxX - target.x) / span;
      return {
        enemyId: target.id,
        dueAt: this.combatNow + duration * this.swordStrikeProgress(laneProgress)
      };
    });
  }
  swordStrikeProgress(laneProgress = 0.72) {
    const tuning = this.swordVisualTuning;
    const strike = tuning.strikeDuration ?? 0.31;
    const followThrough = tuning.followThroughDuration ?? 0.18;
    const total = Math.max(0.01, strike + followThrough);
    const clampedLaneProgress = Math.max(0.18, Math.min(0.88, laneProgress));
    return Math.min(0.95, strike * clampedLaneProgress / total);
  }
  applyPendingSwordDamage(options = {}) {
    const pending = this.pendingSwordDamage;
    if (!pending) return;
    const dueHits = options.force ? pending.hits : pending.hits.filter((hit) => this.combatNow >= hit.dueAt);
    if (dueHits.length === 0) return;
    const dueEnemyIds = dueHits.map((hit) => hit.enemyId);
    pending.hits = pending.hits.filter((hit) => !dueEnemyIds.includes(hit.enemyId));
    if (pending.hits.length === 0) this.pendingSwordDamage = null;
    let impacted = false;
    for (const enemy of [...this.enemies]) {
      if (enemy.dying || !dueEnemyIds.includes(enemy.id)) continue;
      impacted = true;
      const result2 = resolveEnemyDamage({
        enemy,
        effects: this.enemyExitEffects,
        damage: pending.damage,
        impactMagnitude: pending.damage,
        color: pending.color
      });
      if (result2.killed) {
        this.kills++;
        this.play(result2.definition.deathSound);
      }
    }
    if (impacted) this.play(pending.impactSoundId);
  }
  updateEnemies(delta, shieldDef) {
    const slowEnemyIds = /* @__PURE__ */ new Set();
    const px = this.squad.x;
    const py = this.playerY();
    for (const enemy of [...this.enemies]) {
      enemy.actor.setVelocity(0, 0).update(delta);
      const effective = slowEnemyIds.has(enemy.id) ? enemy.speedMultiplier * (shieldDef?.slowMultiplier ?? 1) : enemy.speedMultiplier;
      enemy.y += this.enemyDefinition(enemy).speed * effective * this.scale() * delta - enemy.actor.y * this.canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) {
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
        continue;
      }
      if (enemy.dying) continue;
      if (this.activeByFamily.shield && shieldDef) {
        const shieldContact = resolveShieldContact(this.activeByFamily.shield, shieldDef, Object.assign(enemy, {
          radius: this.enemyDefinition(enemy).radius * this.scale()
        }), px, py, this.combatNow, this.scale());
        if (shieldContact.absorbed) {
          if (shieldContact.enemyDestroyed) {
            this.destroyEnemy(enemy);
          } else {
            enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: shieldContact.damageAbsorbed / this.enemyDefinition(enemy).impactResistance });
            this.play("ShieldImpact");
          }
          continue;
        }
      }
      if (this.pendingSwordDamage?.hits.some((hit) => hit.enemyId === enemy.id)) continue;
      const hitIndex = this.squad.points(this.playerY(), this.scale()).findIndex((point) => Math.hypot(point.x - enemy.x, point.y - enemy.y) <= this.enemyDefinition(enemy).radius * 3.2);
      if (hitIndex >= 0) {
        const point = this.squad.points(this.playerY(), this.scale())[hitIndex];
        const actor = this.playerActors[hitIndex] ?? new NeonShapeActor({ shape: swarmShapes.player });
        actor.explodeMagnitude = 0.55;
        actor.dispose("explode" /* Explode */);
        this.explodingPlayers.push({ actor, x: point.x, y: point.y });
        this.playerActors.splice(hitIndex, 1);
        this.squad.remove();
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
        this.play("PlayerDamage");
        this.play("SquadMemberLost");
        if (this.squad.count === 1) this.play("LowHealthWarning");
        if (this.mode === "game" && this.squad.count === 0) {
          this.failureReason = "The entire squad was destroyed on contact.";
          this.finish(false);
          return;
        }
        continue;
      }
      if (enemy.y >= this.playerY()) {
        if (this.mode === "game") {
          this.breaches++;
          this.enemies.splice(this.enemies.indexOf(enemy), 1);
          this.play("EnemyEscaped");
          this.failureReason = "An enemy passed the defense line.";
          this.finish(false);
          return;
        }
        if (enemy.y > this.canvas.height + this.enemyDefinition(enemy).radius * 2) this.enemies.splice(this.enemies.indexOf(enemy), 1);
      }
    }
  }
  updatePickups(delta) {
    for (const pickup of [...this.gunPickups]) {
      pickup.actor.update(delta);
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const level2 = this.pickupGrantLevel("gun", pickup.gunId, pickup.requestedLevel);
        this.recordWeaponLevel("gun", pickup.gunId, level2);
        this.activeByFamily.gun = { id: pickup.gunId, level: level2 };
        this.cooldown = 0;
        this.gunCooldowns = [];
        this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
        this.playPickup("PickupGun");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...this.shieldPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const def = shieldFamily.members[pickup.shieldId];
        const level2 = this.pickupGrantLevel("shield", pickup.shieldId, pickup.requestedLevel);
        this.recordWeaponLevel("shield", pickup.shieldId, level2);
        this.activeByFamily.shield = new ShieldState(pickup.shieldId, def.maxCharges, level2);
        this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
        this.playPickup("PickupShield");
        this.play("Shield");
      } else if (pickup.y > this.canvas.height) this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...this.swordPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const level2 = this.pickupGrantLevel("sword", pickup.swordId, pickup.requestedLevel);
        this.recordWeaponLevel("sword", pickup.swordId, level2);
        this.activeByFamily.sword = new SwordState(pickup.swordId, level2);
        this.swordPickups.splice(this.swordPickups.indexOf(pickup), 1);
        this.playPickup("PickupSword");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.swordPickups.splice(this.swordPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...this.multipliers]) {
      pickup.actor.update(delta);
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        this.squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        this.syncPlayerActors();
        this.multipliers.splice(this.multipliers.indexOf(pickup), 1);
        this.playPickup("PickupMultiplier");
      } else if (pickup.y > this.canvas.height) this.multipliers.splice(this.multipliers.indexOf(pickup), 1);
    }
  }
  finish(won) {
    if (!this.activeTrack) return;
    const title = won ? "FLAWLESS RUN" : "TRACK FAILED";
    const detail = won ? "No enemy touched or escaped past you." : this.failureReason || `${this.breaches} enemy${this.breaches === 1 ? "" : "ies"} breached the defense.`;
    if (won) {
      this.victory = new NeonVictoryExperience({
        centerX: this.canvas.width / 2,
        centerY: this.canvas.height * 0.38,
        width: this.canvas.width,
        height: this.canvas.height,
        particleCount: 120
      });
      this.play("PuzzleComplete");
    } else {
      this.play("GameOver");
    }
    this.activeTrack = null;
    this.onFinish?.({ won, title, detail, breaches: this.breaches });
  }
  syncPlayerActors() {
    while (this.playerActors.length < this.squad.count) this.playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    if (this.playerActors.length > this.squad.count) this.playerActors.length = this.squad.count;
  }
  weaponHudShapes(now, scale, helicopterViewport) {
    const items = [];
    const hudScale = scale * this.weaponHudTuning.iconScale;
    const spacing = this.weaponHudTuning.spacing * scale;
    const entries = [];
    if (this.activeByFamily.gun) {
      const gun = gunFamily.members[this.activeByFamily.gun.id];
      entries.push({ label: `L: ${this.activeByFamily.gun.level}`, color: neonPalette[gun.visualIdentity.projectileColor], kind: "gun" });
    }
    if (this.activeByFamily.shield) {
      const shield = shieldFamily.members[this.activeByFamily.shield.shieldId];
      entries.push({ label: `L: ${this.activeByFamily.shield.level}`, color: neonPalette[shield.color], kind: "shield" });
    }
    if (this.activeByFamily.sword) {
      const sword = swordFamily.members[this.activeByFamily.sword.swordId];
      entries.push({ label: `L: ${this.activeByFamily.sword.level}`, color: neonPalette[sword.color], kind: "sword" });
    }
    const playerScreen = projectHelicopterPoint(this.laneX(this.playerLane), this.playerY(), this.cameraSettings, helicopterViewport);
    const centerScreenX = this.weaponHudScreenX ?? this.weaponHudTargetScreenX(this.playerLane);
    const startScreenX = centerScreenX - (entries.length - 1) * spacing / 2;
    const screenY = playerScreen.y + this.weaponHudTuning.verticalOffset * scale;
    for (const [index, entry] of entries.entries()) {
      const screenX = startScreenX + index * spacing;
      const { x, y } = unprojectHelicopterScreenPoint(screenX, screenY, this.cameraSettings, helicopterViewport);
      const common = { x, y, color: entry.color, now, scale: hudScale };
      const shape = entry.kind === "shield" ? shieldPickupVisual(common) : entry.kind === "sword" ? swordPickupVisual(common) : actorInTopDownScene(new NeonShapeActor({ shape: swarmShapes.gunPickup }), x, y, this.weaponHudTuning.iconScale * 20 * scale);
      items.push({
        ...shape,
        color: entry.color,
        label: shapeLabel(entry.label, "below", this.weaponHudTuning.fontSize, Math.max(2, this.weaponHudTuning.fontSize * 0.7)),
        opacity: 0.68
      });
    }
    return items;
  }
  pickupGrantLevel(family, id, requestedLevel) {
    return requestedLevel === void 0 ? this.nextWeaponPickupLevel(family, id) : this.normalizeWeaponLevel(family, id, requestedLevel);
  }
  nextWeaponPickupLevel(family, id) {
    return this.normalizeWeaponLevel(family, id, (this.collectedWeaponLevels.get(this.weaponLevelKey(family, id)) ?? 0) + 1);
  }
  normalizeWeaponLevel(family, id, level2) {
    const requested = Math.max(1, Math.floor(level2));
    if (family === "gun") {
      const levels = gunFamily.members[id].levels.map((item) => item.level);
      const maxLevel = Math.max(...levels);
      const clamped = Math.min(maxLevel, requested);
      return levels.includes(clamped) ? clamped : levels.reduce((best, candidate) => Math.abs(candidate - clamped) < Math.abs(best - clamped) ? candidate : best, levels[0]);
    }
    return Math.min(5, requested);
  }
  recordWeaponLevel(family, id, level2) {
    const key = this.weaponLevelKey(family, id);
    this.collectedWeaponLevels.set(key, Math.max(this.collectedWeaponLevels.get(key) ?? 0, this.normalizeWeaponLevel(family, id, level2)));
  }
  weaponLevelKey(family, id) {
    return `${family}.${id}`;
  }
  updateWeaponHud(delta) {
    const targetX = this.weaponHudTargetScreenX(this.playerLane);
    if (this.weaponHudScreenX === null) {
      this.weaponHudScreenX = targetX;
      return;
    }
    const response = 1 - Math.pow(6e-4, delta);
    this.weaponHudScreenX += (targetX - this.weaponHudScreenX) * response;
  }
  weaponHudTargetScreenX(lane) {
    const inwardBias = this.canvas.width * 0.12;
    return lane === 0 ? this.canvas.width * 0.32 + inwardBias : this.canvas.width * 0.68 - inwardBias;
  }
  applySceneBackground() {
    applyLaneRunnerSceneBackground(this.stageElement, this.trackSceneId, this.sceneBackgroundTuning, this.sceneBackgroundLaneOffset());
  }
  syncSceneBackgroundPlacement() {
    syncLaneRunnerSceneBackgroundPlacement(this.stageElement, this.sceneBackgroundTuning, this.sceneBackgroundLaneOffset());
  }
  sceneBackgroundLaneOffset() {
    const leftX = this.laneX(0);
    const rightX = this.laneX(1);
    const laneSpan = rightX - leftX || 1;
    return (this.squad.x - leftX) / laneSpan * 2 - 1;
  }
  enemyExitColor(enemy) {
    return enemy.actor.color ?? enemy.actor.shape.color;
  }
  enemyDefinition(enemy) {
    return orbFamily.members[enemy.enemyId];
  }
  destroyEnemy(enemy) {
    const definition = defeatEnemy(enemy, this.enemyExitEffects, this.enemyExitColor(enemy));
    this.kills++;
    this.play(definition.deathSound);
  }
  entityX(entity) {
    return this.laneX(entity.side === "left" ? 0 : 1) + (entity.laneIndex - 2 + (entity.columnSpan - 1) / 2) * 15 * this.scale();
  }
  entitySpeed(entity) {
    return (enemyDefinitionFromTrackId(entity.id)?.definition.speed ?? 72) * entity.speedMultiplier * this.scale();
  }
  enemySpawnY(entity) {
    return this.playerY() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }
  pickupSpawnY(entity) {
    return this.playerY() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }
  spawnLeadSeconds(entity) {
    const arrivalSeconds = this.entityArrivalSeconds(entity);
    return Math.min(maxTrackSpawnLeadSeconds, arrivalSeconds);
  }
  entityArrivalSeconds(entity) {
    return firstTrackRowArrivalSeconds + Math.max(0, entity.distanceFromPlayer - 1) * trackRowTravelSeconds;
  }
  play(id) {
    const alternatives = soundAlternativeCounts[id] ?? 0;
    if (alternatives > 0 && this.sound?.playRotated) this.sound.playRotated(id, alternatives);
    else this.sound?.play(id);
  }
  playGunFire(gunId) {
    this.play(gunFireSoundIds[gunId]);
  }
  playPickup(id) {
    this.play("Pickup");
    this.play(id);
  }
};

// projects/NeonSwarm/src/trackMenuTuning.ts
var trackMenuTuning = {
  logicalWidth: 450,
  safeTop: 20,
  heroHeight: 166,
  familyGap: 18,
  familyHeight: 168,
  familyPaddingX: 18,
  familyPaddingY: 18,
  familyCornerCut: 10,
  titleX: 225,
  titleY: 26,
  trackRowX: 126,
  trackRowY: 96,
  trackNodeSize: 42,
  trackNodeGap: 57,
  hitTargetSize: 72,
  panelLineWidth: 7.8,
  panelInnerLineWidth: 3.6,
  connectorLineWidth: 2.4,
  nodeLineWidth: 1.26,
  idleGlow: 0.95,
  idleEnergy: 1.05,
  hoverGlow: 1.55,
  hoverEnergy: 2.2,
  lockedGlow: 0.28,
  lockedEnergy: 0.34,
  wobblePixels: 3.2,
  wobbleScale: 0.055,
  wobbleRotation: 0.085,
  wobbleSpeed: 1.25,
  scanSpeed: 0.33,
  starCount: 70,
  footerPadding: 32
};

// projects/NeonSwarm/src/trackMenuRenderer.ts
var accents = ["#ff3bd5", "#20eaff", "#9b42ff", "#4b86ff", "#ffb23a", "#70ffd0"];
var trackShapeIds = ["hunter-eye", "bruiser-prism", "elite-star", "trick-vortex", "tank-reactor", "spike-lance"];
var requiredShape2 = (id) => {
  const shape = getNeonShape(id);
  if (!shape) throw new Error(`NeonFactory shape "${id}" is required by the track menu.`);
  return shape;
};
function lineBetween(x1, y1, x2, y2, width, color, intensity, glow) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2,
    width,
    height: Math.hypot(dx, dy) / 2,
    color,
    secondaryColor: "#ffffff",
    glow,
    intensity,
    shape: "line",
    rotation: Math.atan2(-dx, dy)
  };
}
function wobble(seed, time) {
  const phase = time * trackMenuTuning.wobbleSpeed + seed * 1.73;
  return {
    x: Math.sin(phase) * trackMenuTuning.wobblePixels + Math.sin(phase * 0.43 + seed) * trackMenuTuning.wobblePixels * 0.35,
    y: Math.cos(phase * 0.87) * trackMenuTuning.wobblePixels * 0.55,
    scale: 1 + Math.sin(phase * 0.72 + seed) * trackMenuTuning.wobbleScale,
    rotation: Math.sin(phase * 0.58 + seed * 0.31) * trackMenuTuning.wobbleRotation
  };
}
var TrackMenuRenderer = class _TrackMenuRenderer {
  #renderer;
  #canvas;
  #buttonLayer;
  #labelLayer;
  #trackFamily;
  #route;
  #families = [];
  #contentHeight = 800;
  #hoveredTrackId = null;
  #animationFrame = 0;
  #lastWidth = 0;
  constructor(renderer, canvas2, buttonLayer, labelLayer, trackFamily2, route) {
    this.#renderer = renderer;
    this.#canvas = canvas2;
    this.#buttonLayer = buttonLayer;
    this.#labelLayer = labelLayer;
    this.#trackFamily = trackFamily2;
    this.#route = route;
    this.#families = this.#createLayout();
    this.#contentHeight = this.#measureContentHeight();
    this.#syncCssSize();
    this.#syncInteractionLayer();
    this.#syncLabels();
  }
  static async create(options) {
    const contentHeight = _TrackMenuRenderer.measureTrackFamily(options.trackFamily);
    const renderer = await NeonTopDownSceneRenderer.create(options.canvas, trackMenuTuning.logicalWidth, contentHeight);
    return new _TrackMenuRenderer(renderer, options.canvas, options.buttonLayer, options.labelLayer, options.trackFamily, options.route);
  }
  start() {
    const tick = (timeMs) => {
      this.#syncCssSize();
      this.#renderer.render(this.#buildScene(timeMs / 1e3), timeMs / 1e3);
      this.#animationFrame = requestAnimationFrame(tick);
    };
    this.#animationFrame = requestAnimationFrame(tick);
  }
  destroy() {
    cancelAnimationFrame(this.#animationFrame);
    this.#renderer.destroy();
  }
  static measureTrackFamily(trackFamily2) {
    return trackMenuTuning.heroHeight + Object.keys(trackFamily2.families).length * trackMenuTuning.familyHeight + Math.max(0, Object.keys(trackFamily2.families).length - 1) * trackMenuTuning.familyGap + trackMenuTuning.footerPadding;
  }
  #measureContentHeight() {
    return _TrackMenuRenderer.measureTrackFamily(this.#trackFamily);
  }
  #createLayout() {
    return Object.entries(this.#trackFamily.families).map(([familyId, family], familyIndex) => {
      const y = trackMenuTuning.heroHeight + familyIndex * (trackMenuTuning.familyHeight + trackMenuTuning.familyGap);
      const accent = accents[familyIndex % accents.length];
      return {
        familyId,
        label: family.label,
        accent,
        y,
        unlocked: true,
        tracks: family.trackIds.map((trackId, trackIndex) => ({
          trackId,
          label: this.#trackFamily.members[trackId].label,
          index: trackIndex,
          x: trackMenuTuning.trackRowX + trackIndex * (trackMenuTuning.trackNodeSize + trackMenuTuning.trackNodeGap),
          y: y + trackMenuTuning.trackRowY,
          unlocked: true
        }))
      };
    });
  }
  #syncCssSize() {
    const cssWidth = this.#canvas.parentElement?.clientWidth ?? this.#canvas.clientWidth;
    if (cssWidth === this.#lastWidth) return;
    this.#lastWidth = cssWidth;
    const cssHeight = this.#contentHeight / trackMenuTuning.logicalWidth * cssWidth;
    this.#canvas.style.width = "100%";
    this.#canvas.style.height = `${cssHeight}px`;
    this.#buttonLayer.style.height = `${cssHeight}px`;
    this.#labelLayer.style.height = `${cssHeight}px`;
  }
  #logicalToCss(value) {
    return `${value / trackMenuTuning.logicalWidth * 100}%`;
  }
  #syncInteractionLayer() {
    const bounds = this.#families.flatMap((family) => family.tracks.map((track) => ({
      trackId: track.trackId,
      familyLabel: family.label,
      trackLabel: track.label,
      x: track.x,
      y: track.y,
      size: trackMenuTuning.hitTargetSize
    })));
    this.#buttonLayer.replaceChildren(...bounds.map((bound) => {
      const anchor = document.createElement("a");
      anchor.className = "track-menu-hit";
      anchor.href = this.#route(bound.trackId);
      anchor.dataset.track = bound.trackId;
      anchor.setAttribute("aria-label", `${bound.familyLabel}, ${bound.trackLabel}`);
      Object.assign(anchor.style, {
        left: this.#logicalToCss(bound.x - bound.size / 2),
        top: `${(bound.y - bound.size / 2) / this.#contentHeight * 100}%`,
        width: this.#logicalToCss(bound.size),
        height: `${bound.size / this.#contentHeight * 100}%`
      });
      anchor.addEventListener("pointerenter", () => {
        this.#hoveredTrackId = bound.trackId;
      });
      anchor.addEventListener("pointerleave", () => {
        if (this.#hoveredTrackId === bound.trackId) this.#hoveredTrackId = null;
      });
      anchor.addEventListener("focus", () => {
        this.#hoveredTrackId = bound.trackId;
      });
      anchor.addEventListener("blur", () => {
        if (this.#hoveredTrackId === bound.trackId) this.#hoveredTrackId = null;
      });
      return anchor;
    }));
  }
  #syncLabels() {
    const labels = [];
    this.#families.forEach((family) => {
      const familyLabel = document.createElement("section");
      familyLabel.className = "track-menu-family-label";
      familyLabel.setAttribute("aria-hidden", "true");
      familyLabel.innerHTML = `<h2>${family.label}</h2>`;
      Object.assign(familyLabel.style, {
        left: this.#logicalToCss(trackMenuTuning.titleX),
        top: `${(family.y + trackMenuTuning.titleY) / this.#contentHeight * 100}%`
      });
      labels.push(familyLabel);
      family.tracks.forEach((track) => {
        const trackLabel = document.createElement("div");
        trackLabel.className = "track-menu-track-label";
        trackLabel.setAttribute("aria-hidden", "true");
        trackLabel.innerHTML = `<strong>${track.label}</strong>`;
        Object.assign(trackLabel.style, {
          left: this.#logicalToCss(track.x - 43),
          top: `${(track.y + 35) / this.#contentHeight * 100}%`,
          width: this.#logicalToCss(86)
        });
        labels.push(trackLabel);
      });
    });
    this.#labelLayer.replaceChildren(...labels);
  }
  #buildScene(time) {
    const primitives = [];
    const shapes = [];
    this.#addBackground(primitives, time);
    this.#families.forEach((family, familyIndex) => this.#addFamily(family, familyIndex, primitives, shapes, time));
    return { primitives, shapes };
  }
  #addBackground(primitives, time) {
    for (let i = 0; i < trackMenuTuning.starCount; i++) {
      const x = (Math.sin(i * 91.7) * 43758.54 % 1 + 1) % 1 * trackMenuTuning.logicalWidth;
      const y = (Math.sin(i * 37.1 + 4.2) * 18433.17 % 1 + 1) % 1 * this.#contentHeight;
      const pulse = 0.7 + Math.sin(time * (1.1 + i % 5 * 0.13) + i) * 0.3;
      primitives.push({
        x,
        y,
        width: 0.8 + i % 3 * 0.35,
        height: 0.8 + i % 3 * 0.35,
        color: i % 4 === 0 ? "#20eaff" : i % 7 === 0 ? "#ff3bd5" : "#ffffff",
        secondaryColor: "#ffffff",
        glow: 0.7,
        intensity: 0.35 * pulse,
        shape: "circle"
      });
    }
    const gridY = Math.min(this.#contentHeight - 110, 330 + Math.sin(time * 0.27) * 6);
    for (let x = -30; x <= trackMenuTuning.logicalWidth + 30; x += 42) {
      primitives.push(lineBetween(x, gridY, x + 48, this.#contentHeight + 40, 0.9, "#20eaff", 0.13, 0.4));
    }
    for (let y = gridY; y <= this.#contentHeight + 30; y += 42) {
      primitives.push(lineBetween(-20, y, trackMenuTuning.logicalWidth + 20, y + 18, 0.8, "#9b42ff", 0.12, 0.35));
    }
  }
  #addFamily(family, familyIndex, primitives, shapes, time) {
    const x = trackMenuTuning.familyPaddingX;
    const y = family.y;
    const width = trackMenuTuning.logicalWidth - trackMenuTuning.familyPaddingX * 2;
    const height = trackMenuTuning.familyHeight;
    const cut = trackMenuTuning.familyCornerCut;
    const familyHovered = family.tracks.some((track) => track.trackId === this.#hoveredTrackId);
    const intensity = family.unlocked ? familyHovered ? trackMenuTuning.hoverEnergy : trackMenuTuning.idleEnergy : trackMenuTuning.lockedEnergy;
    const glow = family.unlocked ? familyHovered ? trackMenuTuning.hoverGlow : trackMenuTuning.idleGlow : trackMenuTuning.lockedGlow;
    const cornerOverlap = trackMenuTuning.panelLineWidth * 0.42;
    const panelPoints = [
      [x + cut - cornerOverlap, y],
      [x + width - cut + cornerOverlap, y],
      [x + width + cornerOverlap, y + cut - cornerOverlap],
      [x + width + cornerOverlap, y + height - cut + cornerOverlap],
      [x + width - cut + cornerOverlap, y + height],
      [x + cut - cornerOverlap, y + height],
      [x - cornerOverlap, y + height - cut + cornerOverlap],
      [x - cornerOverlap, y + cut - cornerOverlap]
    ];
    panelPoints.forEach((point, index) => {
      const next = panelPoints[(index + 1) % panelPoints.length];
      primitives.push(lineBetween(point[0], point[1], next[0], next[1], trackMenuTuning.panelLineWidth, family.accent, intensity, glow));
    });
    const innerInset = 6;
    const innerPoints = panelPoints.map(([px, py]) => [
      px < x + width / 2 ? px + innerInset : px - innerInset,
      py < y + height / 2 ? py + innerInset : py - innerInset
    ]);
    innerPoints.forEach((point, index) => {
      const next = innerPoints[(index + 1) % innerPoints.length];
      primitives.push(lineBetween(point[0], point[1], next[0], next[1], trackMenuTuning.panelInnerLineWidth, family.accent, intensity * 0.48, glow * 0.7));
    });
    const scan = (time * trackMenuTuning.scanSpeed + familyIndex * 0.23) % 1 * (width + 120) - 60;
    primitives.push(lineBetween(x + scan - 26, y + 8, x + scan + 16, y + height - 8, 2.8, family.accent, 0.42, 0.55));
    const first = family.tracks[0];
    const last = family.tracks[family.tracks.length - 1];
    if (first && last) {
      primitives.push(lineBetween(first.x, first.y, last.x, last.y, trackMenuTuning.connectorLineWidth, family.accent, intensity * 0.82, glow));
    }
    family.tracks.forEach((track) => this.#addTrackNode(family, track, primitives, shapes, time));
  }
  #addTrackNode(family, track, primitives, shapes, time) {
    const hovered = this.#hoveredTrackId === track.trackId;
    const trackHoverEnergy = trackMenuTuning.idleEnergy;
    const trackHoverGlow = trackMenuTuning.idleGlow;
    const energy = track.unlocked ? hovered ? trackHoverEnergy : trackHoverEnergy * 0.4 : trackMenuTuning.lockedEnergy;
    const glow = track.unlocked ? hovered ? trackHoverGlow : trackHoverGlow * 0.4 : trackMenuTuning.lockedGlow;
    const wob = wobble(track.index + family.y * 0.011, time);
    primitives.push({
      x: track.x + wob.x,
      y: track.y + wob.y,
      width: trackMenuTuning.trackNodeSize * 0.66 * wob.scale,
      height: trackMenuTuning.trackNodeSize * 0.66 * wob.scale,
      color: track.unlocked ? family.accent : "#8d96aa",
      secondaryColor: "#ffffff",
      glow,
      intensity: energy * 0.66,
      shape: "diamond",
      rotation: Math.PI / 4 + wob.rotation
    });
    shapes.push({
      shape: requiredShape2(trackShapeIds[(track.index + this.#families.indexOf(family)) % trackShapeIds.length]),
      x: track.x + wob.x,
      y: track.y + wob.y,
      size: trackMenuTuning.trackNodeSize * 0.72 * wob.scale,
      color: track.unlocked ? family.accent : "#8d96aa",
      rotationZ: wob.rotation + time * 0.16,
      lineThickness: trackMenuTuning.nodeLineWidth,
      glow,
      energyIntensity: energy,
      energyCoverage: hovered ? 0.76 : 0.48,
      energySpeed: hovered ? 1.9 : 1.2,
      energyBleed: hovered ? 0.82 : 0.52,
      opacity: track.unlocked ? 1 : 0.5,
      label: {
        text: String(track.index + 1),
        position: "center",
        fontSize: 22,
        fontWeight: 900
      }
    });
  }
};

// projects/NeonSwarm/src/main.ts
var canvas = document.querySelector("#game-canvas");
var trackMenuCanvas = document.querySelector("#track-menu-canvas");
var trackSelect = document.querySelector("#track-select");
var trackList = document.querySelector("#track-list");
var trackMenuLabels = document.querySelector("#track-menu-labels");
var status = document.querySelector("#status");
var runStatus = document.querySelector("#run-status");
var result = document.querySelector("#result");
var resultTitle = document.querySelector("#result-title");
var resultDetail = document.querySelector("#result-detail");
var startDialog = document.querySelector("#start-dialog");
var startDialogFamily = document.querySelector("#start-dialog-family");
var startDialogTitle = document.querySelector("#start-dialog-title");
var startDialogDetail = document.querySelector("#start-dialog-detail");
var confirmTrackStart = document.querySelector("#confirm-track-start");
var cancelTrackStart = document.querySelector("#cancel-track-start");
var error = document.querySelector("#error");
var developerTools = document.querySelector("#developer-tools");
var gameElement = document.querySelector("#game");
var cameraLab = document.querySelector("#camera-lab");
var cameraOutputText = document.querySelector("#camera-output-text");
var urlOptions = window.JustTheGamesPlease?.urlOptions;
var developerMode = urlOptions?.isEnabled("dev") ?? false;
var cameraControlsMode = urlOptions?.isEnabled("cameracontrols") ?? false;
var defaultTrackSceneId = Object.values(trackFamily.families)[0].environment.sceneId;
var pendingTrackId = null;
var musicStarted = false;
developerTools.hidden = !developerMode;
cameraLab.hidden = !cameraControlsMode;
applyPortraitStage(gameElement, laneRunnerViewport);
var cameraSettings = { ...defaultHelicopterCameraSettings };
var cameraSettingsOutput = () => `camera: height=${cameraSettings.height.toFixed(0)}, lookAngleDegrees=${cameraSettings.lookAngleDegrees.toFixed(0)}, followDistance=${cameraSettings.followDistance.toFixed(0)}, zoom=${cameraSettings.zoom.toFixed(2)}, horizon=${cameraSettings.horizon.toFixed(2)}`;
var syncCameraOutput = () => {
  cameraOutputText.value = cameraSettingsOutput();
};
var bindCameraSlider = (id, key) => {
  const input = document.querySelector(id);
  input.value = String(cameraSettings[key]);
  input.addEventListener("input", () => {
    cameraSettings[key] = Number(input.value);
    syncCameraOutput();
  });
};
bindCameraSlider("#camera-height", "height");
bindCameraSlider("#camera-look", "lookAngleDegrees");
bindCameraSlider("#camera-back", "followDistance");
bindCameraSlider("#camera-zoom", "zoom");
bindCameraSlider("#camera-horizon", "horizon");
syncCameraOutput();
document.querySelector("#camera-output").addEventListener("click", async () => {
  const output = cameraSettingsOutput();
  cameraOutputText.value = output;
  if (navigator.clipboard) await navigator.clipboard.writeText(output).catch(() => void 0);
});
try {
  const sim = await NeonSwarmSimulation.create({
    mode: "game",
    canvas,
    stageElement: gameElement,
    cameraSettings,
    sound: window.gameAudio,
    sceneId: defaultTrackSceneId,
    onRunStatus: (value) => {
      runStatus.textContent = value;
    },
    onFinish: (finish) => {
      result.hidden = false;
      resultTitle.textContent = finish.title;
      resultDetail.textContent = finish.detail;
    }
  });
  const trackRoute = (trackId) => `#track/${encodeURIComponent(trackId)}`;
  const trackFamilyForTrack = (trackId) => {
    const families = Object.values(trackFamily.families);
    return families.find((family) => family.trackIds.includes(trackId)) ?? null;
  };
  const startAudioForGesture = () => {
    if (musicStarted) return;
    musicStarted = true;
    const audio = window.gameAudio;
    audio?.playSharedMusic?.(["Music"]);
  };
  const navigateToTracks = () => {
    if (location.hash === "#tracks") {
      resetToTracks();
      return;
    }
    location.hash = "tracks";
  };
  const trackIdFromRoute = () => {
    const prefix = "#track/";
    if (!location.hash.startsWith(prefix)) return null;
    const candidate = decodeURIComponent(location.hash.slice(prefix.length));
    return candidate in trackFamily.members ? candidate : null;
  };
  const trackMenu = await TrackMenuRenderer.create({
    canvas: trackMenuCanvas,
    buttonLayer: trackList,
    labelLayer: trackMenuLabels,
    trackFamily,
    route: trackRoute
  });
  trackMenu.start();
  const resetToTracks = () => {
    sim.reset();
    pendingTrackId = null;
    gameElement.dataset.page = "tracks";
    gameElement.style.removeProperty("background-image");
    result.hidden = true;
    startDialog.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track family, then pick a run.";
    runStatus.textContent = "";
  };
  const prepareTrackStart = (trackId) => {
    pendingTrackId = trackId;
    sim.reset();
    result.hidden = true;
    const track = trackFamily.members[trackId];
    const family = trackFamilyForTrack(trackId);
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    sim.setScene(track.environment.sceneId);
    status.textContent = "Ready?";
    runStatus.textContent = "";
    startDialogFamily.textContent = family ? family.label : "Track";
    startDialogTitle.textContent = track.label;
    startDialogDetail.textContent = "Tap left or right to switch lanes.";
    startDialog.hidden = false;
    confirmTrackStart.focus();
  };
  const startTrack = (trackId) => {
    pendingTrackId = null;
    startDialog.hidden = true;
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap left or right to switch lanes.";
    sim.startTrack(trackFamily.members[trackId]);
  };
  const handleRoute = () => {
    const trackId = trackIdFromRoute();
    if (trackId) prepareTrackStart(trackId);
    else resetToTracks();
  };
  document.querySelector("#back-to-tracks").addEventListener("click", navigateToTracks);
  confirmTrackStart.addEventListener("click", () => {
    if (!pendingTrackId) return;
    startAudioForGesture();
    startTrack(pendingTrackId);
  });
  cancelTrackStart.addEventListener("click", navigateToTracks);
  window.addEventListener("hashchange", handleRoute);
  if (!location.hash) history.replaceState(null, "", "#tracks");
  handleRoute();
  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: (lane) => sim.setSquadLane(lane, { requireActiveTrack: true })
  });
  sim.startLoop();
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90b2tlbnMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2dlb21ldHJpYy1zaGFwZXMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlci50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLWFjdG9yLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9wcmltaXRpdmUtcmVuZGVyZXIudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2Nsb3VkLWJ1cnN0LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90b3AtZG93bi1zY2VuZS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvbGFuZS1ydW5uZXItc2NlbmVzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9wcm9qZWN0aWxlLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy92aWN0b3J5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tCdWlsZGVyLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s2LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazcudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrOC50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMi50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2szLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE0LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE1LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEwLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazExLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEyLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2lucHV0LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvYXV0b0FpbS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9ndW5TaW11bGF0aW9uLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L2luZGVwZW5kZW50V2VhcG9uU2xvdHMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnkudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc2hpZWxkRXZhbHVhdG9yLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L3N3b3JkRXZhbHVhdG9yLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFbnRyYW5jZVZpc3VhbHMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUV4aXRWaXN1YWxzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvdmlld3BvcnQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUNhdGFsb2cudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9mYW1pbHlWaXN1YWxzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zY2VuZUVudmlyb25tZW50LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2hhcGVWaXN1YWxzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc3F1YWQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaW11bGF0aW9uL05lb25Td2FybVNpbXVsYXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy90cmFja01lbnVUdW5pbmcudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy90cmFja01lbnVSZW5kZXJlci50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWFyYy1rYXRhbmFcIiwgXCJTd29yZCBBcmMgS2F0YW5hXCIsIFtbLS4xNiwtMV0sIFsuMTYsLTFdLCBbLjIyLC4yOF0sIFsuNDgsLjYyXSwgWy4xOCwuNTJdLCBbLjEsMV0sIFstLjEsMV0sIFstLjE4LC41Ml0sIFstLjQ4LC42Ml0sIFstLjIyLC4yOF1dLCBcInBpdGNoXCIsIFtbWy0uMDU1LC0uNzJdLCBbLjA1NSwtLjcyXSwgWy4wNTUsLjE4XSwgWy0uMDU1LC4xOF1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1jbGVhdmVyLXdpZGVcIiwgXCJTd29yZCBDbGVhdmVyIFdpZGVcIiwgW1stLjI4LC0xXSwgWy4yOCwtMV0sIFsuNDQsLS43Nl0sIFsuMzQsLjM0XSwgWy43MiwuNThdLCBbLjIyLC41NV0sIFsuMTYsMV0sIFstLjE2LDFdLCBbLS4yMiwuNTVdLCBbLS43MiwuNThdLCBbLS4zNCwuMzRdLCBbLS40NCwtLjc2XV0sIFwicm9sbFwiLCBbW1stLjEsLS42OF0sIFsuMSwtLjY4XSwgWy4wOCwuMThdLCBbLS4wOCwuMThdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtbmVlZGxlLXNhYnJlXCIsIFwiU3dvcmQgTmVlZGxlIFNhYnJlXCIsIFtbMCwtMV0sIFsuMDgsLS44Ml0sIFsuMTEsLjVdLCBbLjMyLC43Ml0sIFsuMDgsLjY0XSwgWy4wNSwxXSwgWy0uMDUsMV0sIFstLjA4LC42NF0sIFstLjMyLC43Ml0sIFstLjExLC41XSwgWy0uMDgsLS44Ml1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtZ3VhcmRlZC1ibGFkZVwiLCBcIlN3b3JkIEd1YXJkZWQgQmxhZGVcIiwgW1stLjEyLC0xXSwgWy4xMiwtMV0sIFsuMTYsLjM2XSwgWy42MiwuMzZdLCBbLjYyLC41NF0sIFsuMTQsLjU2XSwgWy4xLDFdLCBbLS4xLDFdLCBbLS4xNCwuNTZdLCBbLS42MiwuNTRdLCBbLS42MiwuMzZdLCBbLS4xNiwuMzZdXSwgXCJ5YXdcIiwgW1tbLS4wNDUsLS43Ml0sIFsuMDQ1LC0uNzJdLCBbLjA0NSwuMjJdLCBbLS4wNDUsLjIyXV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLXByaXNtLWdyZWF0YmxhZGVcIiwgXCJTd29yZCBQcmlzbSBHcmVhdGJsYWRlXCIsIFtbMCwtMV0sIFsuMzQsLS43NF0sIFsuMywuMjhdLCBbLjU2LC41Ml0sIFsuMiwuNDhdLCBbLjEyLDFdLCBbLS4xMiwxXSwgWy0uMiwuNDhdLCBbLS41NiwuNTJdLCBbLS4zLC4yOF0sIFstLjM0LC0uNzRdXSwgXCJyb2xsXCIsIFtbWy0uMDgsLS40OF0sIFsuMDgsLS40OF0sIFsuMDgsLjE2XSwgWy0uMDgsLjE2XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uLCBOZW9uUG9pbnQgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUxhYmVsUG9zaXRpb24gPSBcImFib3ZlXCIgfCBcImJlbG93XCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUxhYmVsIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbj86IE5lb25TaGFwZUxhYmVsUG9zaXRpb247XG4gIG9mZnNldD86IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW5zdGFuY2Uge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBzY2FsZVg/OiBudW1iZXI7XG4gIHNjYWxlWT86IG51bWJlcjtcbiAgcm90YXRpb25YPzogbnVtYmVyO1xuICByb3RhdGlvblk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWj86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgc2hpZWxkZWQ/OiBib29sZWFuO1xuICBsaW5lVGhpY2tuZXNzPzogbnVtYmVyO1xuICBlbmVyZ3lJbnRlbnNpdHk/OiBudW1iZXI7XG4gIGVuZXJneUNvdmVyYWdlPzogbnVtYmVyO1xuICBlbmVyZ3lTcGVlZD86IG51bWJlcjtcbiAgZW5lcmd5QmxlZWQ/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGVudHJhbmNlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xuICBleHBsb2RlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbnR5cGUgVjMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG50eXBlIFZlcnRleCA9IHtcbiAgcDogVjM7IG46IFYzOyBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdOyBnbG93OiBudW1iZXI7XG4gIGVmZmVjdDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gMTQ7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgU2NlbmUgeyBhc3BlY3Q6IGYzMiwgY2FtZXJhOiBmMzIsIHRpbWU6IGYzMiwgcGFkZGluZzogZjMyIH1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuc3RydWN0IElucHV0IHtcbiAgQGxvY2F0aW9uKDApIHBvc2l0aW9uOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigzKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBlZmZlY3Q6IHZlYzRmLFxufVxuc3RydWN0IE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgZWZmZWN0OiB2ZWM0Zixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihpbnB1dDogSW5wdXQpIC0+IE91dHB1dCB7XG4gIGxldCBkZXB0aCA9IHNjZW5lLmNhbWVyYSAtIGlucHV0LnBvc2l0aW9uLno7XG4gIHZhciBvdXRwdXQ6IE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYoaW5wdXQucG9zaXRpb24ueCAqIDQgLyBzY2VuZS5hc3BlY3QsIGlucHV0LnBvc2l0aW9uLnkgKiA0LCBkZXB0aCAqIC4wNDUsIGRlcHRoKTtcbiAgb3V0cHV0Lm5vcm1hbCA9IGlucHV0Lm5vcm1hbDtcbiAgb3V0cHV0LmNvbG9yID0gaW5wdXQuY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaW5wdXQuZ2xvdztcbiAgb3V0cHV0LmVmZmVjdCA9IGlucHV0LmVmZmVjdDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZShpbnB1dC5ub3JtYWwpO1xuICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLS40NSwgLS43LCAxKSk7XG4gIGxldCBkaWZmdXNlID0gLjE4ICsgbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCkgKiAuODI7XG4gIGxldCByaW0gPSBwb3coMSAtIGFicyhub3JtYWwueiksIDIuMik7XG4gIGxldCBzaWRlID0gMSAtIGFicyhub3JtYWwueik7XG4gIGxldCByYXJlU3VyZ2UgPSBwb3cobWF4KC4wLCBzaW4oc2NlbmUudGltZSAqIGlucHV0LmVmZmVjdC56ICogLjgyICsgaW5wdXQuY29sb3IuciAqIDcuMCkpLCAyMi4wKVxuICAgICogaW5wdXQuZWZmZWN0LnggKiBpbnB1dC5lZmZlY3QueSAqIGlucHV0LmVmZmVjdC53O1xuICBsZXQgZW5lcmd5ID0gaW5wdXQuY29sb3IgKiAoZGlmZnVzZSAqIC4xMiArIHJpbSAqIGlucHV0Lmdsb3cgKiAuMzYgKyBzaWRlICogLjA4ICsgcmFyZVN1cmdlICogLjcpO1xuICByZXR1cm4gdmVjNGYoZW5lcmd5ICsgdmVjM2YocmFyZVN1cmdlICogLjE4KSwgLjEyICsgc2lkZSAqIC4xMiArIHJhcmVTdXJnZSAqIC4yOCk7XG59XG5AZnJhZ21lbnQgZm4gbGluZUZyYWdtZW50KGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBhbG9uZyA9IGlucHV0Lm5vcm1hbC54O1xuICBsZXQgYWNyb3NzID0gYWJzKGlucHV0Lm5vcm1hbC55KTtcbiAgbGV0IHBoYXNlID0gaW5wdXQubm9ybWFsLno7XG4gIGxldCBpbnRlbnNpdHkgPSBpbnB1dC5lZmZlY3QueDtcbiAgbGV0IGNvdmVyYWdlID0gaW5wdXQuZWZmZWN0Lnk7XG4gIGxldCBzcGVlZCA9IGlucHV0LmVmZmVjdC56O1xuICBsZXQgYmxlZWQgPSBpbnB1dC5lZmZlY3QudztcbiAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDMxLjAgLSBzY2VuZS50aW1lICogc3BlZWQgKiA1LjQgKyBwaGFzZSkpLCAxMC4wKTtcbiAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDEzLjAgKyBzY2VuZS50aW1lICogc3BlZWQgKiAzLjEgKyBwaGFzZSAqIDIuNykpLCAxOC4wKTtcbiAgbGV0IG5vaXNlID0gc2luKGFsb25nICogNzEuMCArIHBoYXNlICogOC4zKSAqIC41ICsgLjU7XG4gIGxldCB0aHJlc2hvbGQgPSAxLjAgLSBjb3ZlcmFnZTtcbiAgbGV0IGVsZWN0cmljaXR5ID0gc21vb3Roc3RlcCh0aHJlc2hvbGQsIHRocmVzaG9sZCArIC4xOCwgcHVsc2VBICogLjY1ICsgcHVsc2VCICogLjU1ICsgbm9pc2UgKiAuMTgpO1xuICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoLjA2LCAuMjgsIGFjcm9zcyk7XG4gIGxldCBoYWxvID0gMS4wIC0gc21vb3Roc3RlcCguMTIsIDEuMCwgYWNyb3NzKTtcbiAgbGV0IHN1cmdlID0gZWxlY3RyaWNpdHkgKiBpbnRlbnNpdHk7XG4gIGxldCBwdWxzZSA9IC43OCArIHNpbihzY2VuZS50aW1lICogc3BlZWQgKiAyLjEgKyBwaGFzZSkgKiAuMTMgKyBlbGVjdHJpY2l0eSAqIC4yNDtcbiAgbGV0IGNsb3VkID0gaGFsbyAqICguMTMgKyBzdXJnZSAqIC41Mik7XG4gIGxldCBob3QgPSBpbnB1dC5jb2xvciAqIChwdWxzZSArIGNsb3VkICogMi4xKSAqIGlucHV0Lmdsb3cgKyB2ZWMzZihjb3JlICogc3VyZ2UgKiAxLjM1KTtcbiAgbGV0IGFscGhhID0gKGNvcmUgKiAoLjcyICsgcHVsc2UgKiAuMikgKyBjbG91ZCArICgxLjAgLSBhY3Jvc3MpICogYmxlZWQgKiBlbGVjdHJpY2l0eSAqIC4yNCkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBlbnRyYW5jZU9mZnNldCA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgaWYgKGVudHJhbmNlUHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICBjb25zdCBzZWVkID0gTWF0aC5zaW4oaW5kZXggKiA5MS4xNyArIHBvaW50WzBdICogMzcuMiArIHBvaW50WzFdICogNTMuNyArIHogKiAyOS4xKSAqIDQzNzU4LjU0NTM7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZCAtIE1hdGguZmxvb3Ioc2VlZCk7XG4gICAgY29uc3QgYW5nbGUgPSByYW5kb20gKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCByYWRpdXMgPSAoaW5zdGFuY2UuZW50cmFuY2VNYWduaXR1ZGUgPz8gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogKDEgLSBlbnRyYW5jZUVhc2UpICogKC4zNSArIHJhbmRvbSAqIC43NSk7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cywgKHJhbmRvbSAtIC41KSAqIHJhZGl1cyAqIC41NV07XG4gIH07XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleCA9IDApOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZVgsIC1wb2ludFsxXSAqIHNjYWxlWSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgY29uc3QgZSA9IGVudHJhbmNlT2Zmc2V0KHBvaW50LCB6LCBpbmRleCk7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCkgKyBlWzBdLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCkgKyBlWzFdLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCkgKyBlWzJdXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBjb25zdCBhZGQgPSAoYTogVjMsIGI6IFYzLCBjOiBWMywgbm9ybWFsPzogVjMpID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsID8/IG5vcm1hbGl6ZShjcm9zcyhzdWIoYiwgYSksIHN1YihjLCBhKSkpO1xuICAgIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgICBdO1xuICAgIFthLGIsY10uZm9yRWFjaChwID0+IG91dHB1dC5wdXNoKHsgcCwgbiwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UsIGVmZmVjdCB9KSk7XG4gIH07XG4gIGNvbnN0IGZyb250ID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCBkZXB0aCAvIDIsIGluZGV4KSk7XG4gIGNvbnN0IGJhY2sgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIC1kZXB0aCAvIDIsIGluZGV4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCkpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGZyb250Lmxlbmd0aCAtIDE7IGkrKykgYWRkKGZyb250WzBdLCBmcm9udFtpXSwgZnJvbnRbaSArIDFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBiYWNrLmxlbmd0aCAtIDE7IGkrKykgYWRkKGJhY2tbMF0sIGJhY2tbaSArIDFdLCBiYWNrW2ldKTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGg7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW2ldLCBiYWNrW25leHRdKTtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbbmV4dF0sIGZyb250W25leHRdKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGVkZ2VNZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3Qgc2NhbGVYID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVYID8/IDEpO1xuICBjb25zdCBzY2FsZVkgPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVkgPz8gMSk7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCksIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKV07XG4gIH07XG4gIGNvbnN0IGV4cGxvZGUgPSAoYTogVjMsIGI6IFYzLCBpbmRleDogbnVtYmVyKTogW1YzLCBWM10gPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDAsIDEgLSBlbnRyYW5jZUVhc2UpO1xuICAgIGlmICghcHJvZ3Jlc3MpIHJldHVybiBbYSwgYl07XG4gICAgY29uc3QgbXggPSAoYVswXSArIGJbMF0pIC8gMiAtIChpbnN0YW5jZS54ID8/IDApLCBteSA9IChhWzFdICsgYlsxXSkgLyAyIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChteCwgbXkpIHx8IDE7XG4gICAgY29uc3QgbWFnbml0dWRlID0gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgY29uc3Qgc3BlZWQgPSBtYWduaXR1ZGUgKiAoLjQ1ICsgKE1hdGguc2luKGluZGV4ICogOTEuMTcpICogLjUgKyAuNSkgKiAuNTUpO1xuICAgIGNvbnN0IGR4ID0gbXggLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkLCBkeSA9IG15IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCArIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAuMTg7XG4gICAgY29uc3QgYW5nbGUgPSBwcm9ncmVzcyAqIChpbmRleCAlIDIgPyAxIDogLTEpICogMi40O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IChwOiBWMyk6IFYzID0+IHtcbiAgICAgIGNvbnN0IHggPSBwWzBdIC0gKGluc3RhbmNlLnggPz8gMCksIHkgPSBwWzFdIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgICByZXR1cm4gW3ggKiBNYXRoLmNvcyhhbmdsZSkgLSB5ICogTWF0aC5zaW4oYW5nbGUpICsgKGluc3RhbmNlLnggPz8gMCkgKyBkeCwgeCAqIE1hdGguc2luKGFuZ2xlKSArIHkgKiBNYXRoLmNvcyhhbmdsZSkgKyAoaW5zdGFuY2UueSA/PyAwKSArIGR5LCBwWzJdXTtcbiAgICB9O1xuICAgIHJldHVybiBbdHJhbnNmb3JtKGEpLCB0cmFuc2Zvcm0oYildO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGxldCBkaXN0YW5jZSA9IDA7XG4gIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICBdO1xuICBjb25zdCBhZGRMaW5lID0gKGE6IFYzLCBiOiBWMywgcGhhc2U6IG51bWJlciwgd2lkdGhTY2FsZSA9IDEsIG9wYWNpdHkgPSAxKSA9PiB7XG4gICAgW2EsIGJdID0gZXhwbG9kZShhLCBiLCBNYXRoLmZsb29yKGRpc3RhbmNlICogMTAwKSArIE1hdGguZmxvb3IocGhhc2UgKiAxMCkpO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IC4wMDE7XG4gICAgY29uc3Qgd2lkdGggPSAoaW5zdGFuY2UubGluZVRoaWNrbmVzcyA/PyAxKSAqIC4wMTggKiB3aWR0aFNjYWxlO1xuICAgIGNvbnN0IG94ID0gLWR5IC8gbGVuZ3RoICogd2lkdGgsIG95ID0gZHggLyBsZW5ndGggKiB3aWR0aDtcbiAgICBjb25zdCBhMDogVjMgPSBbYVswXSAtIG94LCBhWzFdIC0gb3ksIGFbMl1dLCBhMTogVjMgPSBbYVswXSArIG94LCBhWzFdICsgb3ksIGFbMl1dO1xuICAgIGNvbnN0IGIwOiBWMyA9IFtiWzBdIC0gb3gsIGJbMV0gLSBveSwgYlsyXV0sIGIxOiBWMyA9IFtiWzBdICsgb3gsIGJbMV0gKyBveSwgYlsyXV07XG4gICAgY29uc3Qgc3RhcnQgPSBkaXN0YW5jZSAqIDIuNCwgZW5kID0gKGRpc3RhbmNlICsgbGVuZ3RoKSAqIDIuNDtcbiAgICBjb25zdCBwdXNoID0gKHA6IFYzLCBhbG9uZzogbnVtYmVyLCBhY3Jvc3M6IG51bWJlcikgPT5cbiAgICAgIG91dHB1dC5wdXNoKHsgcCwgbjogW2Fsb25nLCBhY3Jvc3MsIHBoYXNlXSwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogb3BhY2l0eSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlICogKDEgKyBNYXRoLnNpbigoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogTWF0aC5QSSkgKiAoaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogMi4yKSAqICgxIC0gKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIC43KSwgZWZmZWN0IH0pO1xuICAgIHB1c2goYTAsc3RhcnQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIwLGVuZCwtMSk7XG4gICAgcHVzaChiMCxlbmQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIxLGVuZCwxKTtcbiAgICBkaXN0YW5jZSArPSBsZW5ndGg7XG4gIH07XG4gIGNvbnN0IGFkZExvb3AgPSAocG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSwgejogbnVtYmVyLCBwaGFzZTogbnVtYmVyKSA9PlxuICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgeiksIG1vdmUocG9pbnRzWyhpbmRleCArIDEpICUgcG9pbnRzLmxlbmd0aF0sIHopLCBwaGFzZSArIGluZGV4ICogLjczKSk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCBkZXB0aCAvIDIsIC4zKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIC1kZXB0aCAvIDIsIDIuMSk7XG4gIHNoYXBlLmhvbGVzPy5mb3JFYWNoKChob2xlLCBpbmRleCkgPT4ge1xuICAgIGFkZExvb3AoaG9sZSwgZGVwdGggLyAyICsgLjAwMiwgMy43ICsgaW5kZXgpO1xuICAgIGFkZExvb3AoaG9sZSwgLWRlcHRoIC8gMiAtIC4wMDIsIDUuMiArIGluZGV4KTtcbiAgfSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgLWRlcHRoIC8gMiksIG1vdmUocG9pbnQsIGRlcHRoIC8gMiksIDYuMSArIGluZGV4KSk7XG4gIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAgKiAoaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSk7XG4gIGNvbnN0IGJyYW5jaFN0cmVuZ3RoID0gKGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxKSAqIChpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIpO1xuICBjb25zdCByYW5kb20gPSAoc2VlZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnNpbihzZWVkICogMTIuOTg5OCArIHNoYXBlLnBvaW50cy5sZW5ndGggKiA3OC4yMzMpICogNDM3NTguNTQ1MztcbiAgICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgcm90YXRlZCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaWFuczogbnVtYmVyKTogTmVvblBvaW50ID0+IFtcbiAgICB4ICogTWF0aC5jb3MocmFkaWFucykgLSB5ICogTWF0aC5zaW4ocmFkaWFucyksXG4gICAgeCAqIE1hdGguc2luKHJhZGlhbnMpICsgeSAqIE1hdGguY29zKHJhZGlhbnMpLFxuICBdO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY3ljbGUgPSBNYXRoLmZsb29yKHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEpO1xuICAgIGNvbnN0IGFnZSA9IHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEgLSBjeWNsZTtcbiAgICBjb25zdCBzZWVkID0gY3ljbGUgKiAzNy4xICsgaW5kZXggKiAxMS43O1xuICAgIGNvbnN0IGFjdGl2ZUR1cmF0aW9uID0gLjE4ICsgcmFuZG9tKHNlZWQgKyAxKSAqIC4yNTtcbiAgICBjb25zdCBoYXplRHVyYXRpb24gPSBNYXRoLm1pbigxLCBhY3RpdmVEdXJhdGlvbiArIC4yOCArIHJhbmRvbShzZWVkICsgMikgKiAuMjIpO1xuICAgIGNvbnN0IGJyYW5jaEFjdGl2ZSA9IGFnZSA8IGFjdGl2ZUR1cmF0aW9uO1xuICAgIGNvbnN0IGhhemVBY3RpdmUgPSBhZ2UgPCBoYXplRHVyYXRpb247XG4gICAgaWYgKCghYnJhbmNoQWN0aXZlICYmICFoYXplQWN0aXZlKSB8fCByYW5kb20oc2VlZCArIDMpID4gTWF0aC5taW4oLjc4LCBicmFuY2hTdHJlbmd0aCAqIC41KSkgcmV0dXJuO1xuICAgIGNvbnN0IG5leHQgPSBzaGFwZS5wb2ludHNbKGluZGV4ICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoXTtcbiAgICBjb25zdCB0ID0gLjE2ICsgcmFuZG9tKHNlZWQgKyA0KSAqIC42ODtcbiAgICBjb25zdCBiYXNlOiBOZW9uUG9pbnQgPSBbcG9pbnRbMF0gKyAobmV4dFswXSAtIHBvaW50WzBdKSAqIHQsIHBvaW50WzFdICsgKG5leHRbMV0gLSBwb2ludFsxXSkgKiB0XTtcbiAgICBjb25zdCB0eCA9IG5leHRbMF0gLSBwb2ludFswXSwgdHkgPSBuZXh0WzFdIC0gcG9pbnRbMV0sIHRsID0gTWF0aC5oeXBvdCh0eCwgdHkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcmFuZG9tKHNlZWQgKyA1KSA+IC41ID8gMSA6IC0xO1xuICAgIGNvbnN0IHBlcnBlbmRpY3VsYXI6IE5lb25Qb2ludCA9IFstdHkgLyB0bCAqIGRpcmVjdGlvbiwgdHggLyB0bCAqIGRpcmVjdGlvbl07XG4gICAgY29uc3QgZmlyc3RKaXR0ZXIgPSAoMTAgKyByYW5kb20oc2VlZCArIDYpICogMTApICogTWF0aC5QSSAvIDE4MCAqIChyYW5kb20oc2VlZCArIDcpID4gLjUgPyAxIDogLTEpO1xuICAgIGxldCBoZWFkaW5nID0gcm90YXRlZChwZXJwZW5kaWN1bGFyWzBdLCBwZXJwZW5kaWN1bGFyWzFdLCBmaXJzdEppdHRlcik7XG4gICAgY29uc3Qgc2VnbWVudENvdW50ID0gMSArIE1hdGguZmxvb3IocmFuZG9tKHNlZWQgKyA4KSAqIDMpO1xuICAgIGNvbnN0IHBvaW50czogTmVvblBvaW50W10gPSBbYmFzZV07XG4gICAgZm9yIChsZXQgc2VnbWVudCA9IDA7IHNlZ21lbnQgPCBzZWdtZW50Q291bnQ7IHNlZ21lbnQrKykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gLjA1NSArIHJhbmRvbShzZWVkICsgMTAgKyBzZWdtZW50KSAqIC4wOTU7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBwb2ludHMucHVzaChbcHJldmlvdXNbMF0gKyBoZWFkaW5nWzBdICogbGVuZ3RoLCBwcmV2aW91c1sxXSArIGhlYWRpbmdbMV0gKiBsZW5ndGhdKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICgyMCArIHJhbmRvbShzZWVkICsgMjAgKyBzZWdtZW50KSAqIDQwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICBoZWFkaW5nID0gcm90YXRlZChoZWFkaW5nWzBdLCBoZWFkaW5nWzFdLCBvZmZzZXQgKiAocmFuZG9tKHNlZWQgKyAzMCArIHNlZ21lbnQpID4gLjUgPyAxIDogLTEpKTtcbiAgICB9XG4gICAgaWYgKGhhemVBY3RpdmUpIHtcbiAgICAgIGNvbnN0IGZhZGUgPSAxIC0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pIC8gTWF0aC5tYXgoLjAwMSwgaGF6ZUR1cmF0aW9uIC0gYWN0aXZlRHVyYXRpb24pO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgKiAuMDM1O1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbmQgPSBwb2ludHNbc2VnbWVudCArIDFdO1xuICAgICAgICBjb25zdCBoYXplU3RhcnQ6IE5lb25Qb2ludCA9IFtzdGFydFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgc3RhcnRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBjb25zdCBoYXplRW5kOiBOZW9uUG9pbnQgPSBbZW5kWzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBlbmRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBhZGRMaW5lKG1vdmUoaGF6ZVN0YXJ0LCBkZXB0aCAvIDIgKyAuMDAyKSwgbW92ZShoYXplRW5kLCBkZXB0aCAvIDIgKyAuMDAyKSwgMzEgKyBzZWVkICsgc2VnbWVudCwgMS40NSArIGZhZGUgKiAuNTUsIGZhZGUgKiAuMzQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChicmFuY2hBY3RpdmUpIHtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgYWRkTGluZShtb3ZlKHN0YXJ0LCBkZXB0aCAvIDIgKyAuMDA2KSwgbW92ZShwb2ludHNbc2VnbWVudCArIDFdLCBkZXB0aCAvIDIgKyAuMDA2KSwgMTEgKyBzZWVkICsgc2VnbWVudCwgLjQyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2xpbmVQaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjZGVwdGg6IEdQVVRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgI2xhYmVsTGF5ZXI6IEhUTUxEaXZFbGVtZW50O1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IHBhcmVudCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnQgJiYgZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdGhpcy4jbGFiZWxMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy4jbGFiZWxMYXllci5jbGFzc05hbWUgPSBcIm5lb24tc2hhcGUtbGFiZWwtbGF5ZXJcIjtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHsgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBpbnNldDpcIjBcIiwgcG9pbnRlckV2ZW50czpcIm5vbmVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiB9KTtcbiAgICBwYXJlbnQ/LmFwcGVuZCh0aGlzLiNsYWJlbExheWVyKTtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBleHRydWRlZCBzaGFwZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiwgY3VsbE1vZGU6IFwiYmFja1wiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiBmYWxzZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2xpbmVQaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImxpbmVGcmFnbWVudFwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgICAgfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBzaGFwZSBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10sIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmVydGljZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChtZXNoKTtcbiAgICBjb25zdCBlZGdlcyA9IGluc3RhbmNlcy5mbGF0TWFwKGVkZ2VNZXNoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIGNvbnN0IGVkZ2VEYXRhID0gbmV3IEZsb2F0MzJBcnJheShlZGdlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBlZGdlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGVkZ2VEYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGRhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBjb25zdCBlZGdlQnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZWRnZURhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHZlcnRleEJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgaWYgKGVkZ2VEYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIoZWRnZUJ1ZmZlciwgMCwgZWRnZURhdGEpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgNSwgcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCAwXSkpO1xuICAgIGNvbnN0IGJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgbGluZUJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jbGluZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbeyB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIiwgc3RvcmVPcDogXCJzdG9yZVwiIH1dLFxuICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDogeyB2aWV3OiB0aGlzLiNkZXB0aCEuY3JlYXRlVmlldygpLCBkZXB0aENsZWFyVmFsdWU6IDEsIGRlcHRoTG9hZE9wOiBcImNsZWFyXCIsIGRlcHRoU3RvcmVPcDogXCJzdG9yZVwiIH0sXG4gICAgfSk7XG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgdmVydGV4QnVmZmVyKTsgcGFzcy5kcmF3KHZlcnRpY2VzLmxlbmd0aCk7IH1cbiAgICBpZiAoZWRnZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jbGluZVBpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgbGluZUJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIGVkZ2VCdWZmZXIpOyBwYXNzLmRyYXcoZWRnZXMubGVuZ3RoKTsgfVxuICAgIHBhc3MuZW5kKCk7IHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICAgIHRoaXMuI3JlbmRlckxhYmVscyhpbnN0YW5jZXMpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLm9uU3VibWl0dGVkV29ya0RvbmUoKS50aGVuKCgpID0+IHsgdmVydGV4QnVmZmVyLmRlc3Ryb3koKTsgZWRnZUJ1ZmZlci5kZXN0cm95KCk7IH0pO1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQgeyB0aGlzLiNsYWJlbExheWVyLnJlbW92ZSgpOyB0aGlzLiNkZXB0aD8uZGVzdHJveSgpOyB0aGlzLiNzY2VuZUJ1ZmZlci5kZXN0cm95KCk7IGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7IH1cbiAgI3JlbmRlckxhYmVscyhpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10pOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHtcbiAgICAgIGxlZnQ6IGAke3RoaXMuY2FudmFzLm9mZnNldExlZnR9cHhgLFxuICAgICAgdG9wOiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRUb3B9cHhgLFxuICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgIHdpZHRoOiBgJHt0aGlzLmNhbnZhcy5jbGllbnRXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMuY2FudmFzLmNsaWVudEhlaWdodH1weGAsXG4gICAgfSk7XG4gICAgdGhpcy4jbGFiZWxMYXllci5yZXBsYWNlQ2hpbGRyZW4oLi4uaW5zdGFuY2VzLmZsYXRNYXAoaW5zdGFuY2UgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5sYWJlbD8udGV4dCB8fCAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSA8PSAwKSByZXR1cm4gW107XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gICAgICBjb25zdCB4ID0gNTAgKyAoaW5zdGFuY2UueCA/PyAwKSAqIDQwIC8gKHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHkgPSA1MCAtIChpbnN0YW5jZS55ID8/IDApICogNDA7XG4gICAgICBjb25zdCBzaGFwZVJhZGl1cyA9IHNjYWxlICogdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogLjI7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzaGFwZVJhZGl1cyArIChpbnN0YW5jZS5sYWJlbC5vZmZzZXQgPz8gOCkgKyAoaW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTgpICogLjU7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGluc3RhbmNlLmxhYmVsLnBvc2l0aW9uID8/IFwiYWJvdmVcIjtcbiAgICAgIGxldCB0eCA9IDAsIHR5ID0gMDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJhYm92ZVwiKSB0eSA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYmVsb3dcIikgdHkgPSBvZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibGVmdFwiKSB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwicmlnaHRcIikgdHggPSBvZmZzZXQ7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5zdGFuY2UubGFiZWwudGV4dDtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6YCR7eH0lYCwgdG9wOmAke3l9JWAsIHRyYW5zZm9ybTpgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7dHh9cHgpLGNhbGMoLTUwJSArICR7dHl9cHgpKWAsXG4gICAgICAgIGNvbG9yOmluc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yLCBmb250RmFtaWx5Omluc3RhbmNlLmxhYmVsLmZvbnRGYW1pbHkgPz8gXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBmb250U2l6ZTpgJHtpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOH1weGAsIGZvbnRXZWlnaHQ6U3RyaW5nKGluc3RhbmNlLmxhYmVsLmZvbnRXZWlnaHQgPz8gNjAwKSxcbiAgICAgICAgdGV4dFNoYWRvdzpgMCAwIDVweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfSwwIDAgMTRweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfWAsIHdoaXRlU3BhY2U6XCJub3dyYXBcIixcbiAgICAgICAgb3BhY2l0eTpTdHJpbmcoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtlbGVtZW50XTtcbiAgICB9KSk7XG4gIH1cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy4jbG9naWNhbFNpemU7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0IHx8ICF0aGlzLiNkZXB0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy4jZGVwdGggJiYgdGhpcy5jYW52YXMud2lkdGggPT09IHdpZHRoICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UsIE5lb25TaGFwZUxhYmVsIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBlbnVtIE5lb25TaGFwZURpc3Bvc2FsIHtcbiAgRmFkZU91dCA9IFwiZmFkZU91dFwiLFxuICBEaXNhcHBlYXIgPSBcImRpc2FwcGVhclwiLFxuICBFeHBsb2RlID0gXCJleHBsb2RlXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlVmVjdG9yIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW1wYWN0IHtcbiAgZGlyZWN0aW9uOiBOZW9uU2hhcGVWZWN0b3I7XG4gIG1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUFjdG9yT3B0aW9ucyB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICB2ZWxvY2l0eT86IFBhcnRpYWw8TmVvblNoYXBlVmVjdG9yPjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbD86IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25TaGFwZUFjdG9yIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3I7XG4gIHNjYWxlOiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbDogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU6IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbjogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZTogbnVtYmVyO1xuICByb3RhdGlvblggPSAwO1xuICByb3RhdGlvblkgPSAwO1xuICByb3RhdGlvblogPSAwO1xuICBkaXNwb3NlZCA9IGZhbHNlO1xuICAjZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgI2ltcGFjdFZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcbiAgI2ltcGFjdFJvdGF0aW9uOiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uU2hhcGVBY3Rvck9wdGlvbnMpIHtcbiAgICB0aGlzLnNoYXBlID0gb3B0aW9ucy5zaGFwZTtcbiAgICB0aGlzLnggPSBvcHRpb25zLnggPz8gMDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnkgPz8gMDtcbiAgICB0aGlzLnogPSBvcHRpb25zLnogPz8gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiBvcHRpb25zLnZlbG9jaXR5Py54ID8/IDAsIHk6IG9wdGlvbnMudmVsb2NpdHk/LnkgPz8gMCB9O1xuICAgIHRoaXMuc2NhbGUgPSBvcHRpb25zLnNjYWxlID8/IDE7XG4gICAgdGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG9wdGlvbnMuZGlzcG9zYWwgPz8gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dDtcbiAgICB0aGlzLmV4cGxvZGVNYWduaXR1ZGUgPSBvcHRpb25zLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IG9wdGlvbnMuZW50cmFuY2VEdXJhdGlvbiA/PyAuNDU7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG9wdGlvbnMuZW50cmFuY2VNYWduaXR1ZGUgPz8gLjU1O1xuICB9XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyLCB6ID0gdGhpcy56KTogdGhpcyB7XG4gICAgdGhpcy54ID0geDsgdGhpcy55ID0geTsgdGhpcy56ID0gejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZlbG9jaXR5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0geDsgdGhpcy52ZWxvY2l0eS55ID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltcGFjdCh7IGRpcmVjdGlvbiwgbWFnbml0dWRlIH06IE5lb25TaGFwZUltcGFjdCk6IHRoaXMge1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICAgIGNvbnN0IHggPSBkaXJlY3Rpb24ueCAvIGxlbmd0aCwgeSA9IGRpcmVjdGlvbi55IC8gbGVuZ3RoO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKz0geCAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICs9IHkgKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCArPSB5ICogbWFnbml0dWRlICogLjk7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAtPSB4ICogbWFnbml0dWRlICogLjk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNwb3NlKG1vZGUgPSB0aGlzLmRpc3Bvc2FsKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG1vZGU7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhciA/IDEgOiAuMDAwMTtcbiAgICBpZiAobW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVudGVyKGR1cmF0aW9uID0gdGhpcy5lbnRyYW5jZUR1cmF0aW9uLCBtYWduaXR1ZGUgPSB0aGlzLmVudHJhbmNlTWFnbml0dWRlKTogdGhpcyB7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gTWF0aC5tYXgoLjAwMSwgZHVyYXRpb24pO1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWdlbmVyYXRlKCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSAodGhpcy52ZWxvY2l0eS54ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWCArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25ZICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKiBkZWx0YVNlY29uZHM7XG4gICAgY29uc3QgZGFtcGluZyA9IE1hdGguZXhwKC03ICogZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKj0gZGFtcGluZztcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKj0gZGFtcGluZztcbiAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+IDAgJiYgIXRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IC44NSA6IC41NTtcbiAgICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNkaXNwb3NhbFByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gZHVyYXRpb24pO1xuICAgICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPj0gMSkgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLiNlbnRyYW5jZVByb2dyZXNzIDwgMSkgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyB0aGlzLmVudHJhbmNlRHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICAgIGNvbnN0IGZhZGUgPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0ID8gMSAtIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAxO1xuICAgIHJldHVybiB7XG4gICAgICBzaGFwZTogdGhpcy5zaGFwZSwgeDogdGhpcy54LCB5OiB0aGlzLnksIHo6IHRoaXMueiwgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvblg6IHRoaXMucm90YXRpb25YLCByb3RhdGlvblk6IHRoaXMucm90YXRpb25ZLCByb3RhdGlvblo6IHRoaXMucm90YXRpb25aLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsIGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiB0aGlzLmRpc3Bvc2VkID8gMCA6IGZhZGUsXG4gICAgICBlbnRyYW5jZVByb2dyZXNzOiB0aGlzLiNlbnRyYW5jZVByb2dyZXNzLFxuICAgICAgZW50cmFuY2VNYWduaXR1ZGU6IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IHRoaXMuZXhwbG9kZU1hZ25pdHVkZSxcbiAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICB9O1xuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvblByaW1pdGl2ZVNoYXBlID0gXCJjaXJjbGVcIiB8IFwiYm9sdFwiIHwgXCJvcmJcIiB8IFwicmluZ1wiIHwgXCJzcGFya1wiIHwgXCJkaWFtb25kXCIgfCBcInBlbnRhZ29uXCIgfCBcImxpbmVcIiB8IFwiYXJjXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByaW1pdGl2ZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlY29uZGFyeUNvbG9yPzogc3RyaW5nO1xuICBnbG93PzogbnVtYmVyO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIHRleHR1cmU/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBhcmNTdGFydD86IG51bWJlcjtcbiAgYXJjRW5kPzogbnVtYmVyO1xuICBzaGFwZT86IE5lb25QcmltaXRpdmVTaGFwZTtcbn1cblxuY29uc3QgbWF4UHJpbWl0aXZlcyA9IDEwMjQ7XG5jb25zdCBmbG9hdHNQZXJQcmltaXRpdmUgPSAyMDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqLyBgXG5zdHJ1Y3QgU2NlbmUgeyByZXNvbHV0aW9uOiB2ZWMyZiwgY291bnQ6IGYzMiwgdGltZTogZjMyIH1cbnN0cnVjdCBQcmltaXRpdmUge1xuICBwb3NpdGlvbjogdmVjMmYsXG4gIHNpemU6IHZlYzJmLFxuICBjb2xvcjogdmVjNGYsXG4gIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgZ2xvdzogZjMyLFxuICBpbnRlbnNpdHk6IGYzMixcbiAgc2hhcGU6IGYzMixcbiAgdGV4dHVyZTogZjMyLFxuICByaW1JbnRlbnNpdHk6IGYzMixcbiAgc2hhZG93U3RyZW5ndGg6IGYzMixcbiAgcGFkZGluZzogdmVjMmYsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gaXRlbXM6IGFycmF5PFByaW1pdGl2ZT47XG5cbnN0cnVjdCBWZXJ0ZXhPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgaW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBzaGFwZTogZjMyLFxuICBAbG9jYXRpb24oNSkgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oNikgdGV4dHVyZTogZjMyLFxuICBAbG9jYXRpb24oNykgcmltSW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig4KSBzaGFkb3dTdHJlbmd0aDogZjMyLFxufVxuXG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2ZXJ0ZXg6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IFZlcnRleE91dHB1dCB7XG4gIHZhciBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgaXRlbSA9IGl0ZW1zW2luc3RhbmNlXTtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2ZXJ0ZXhdO1xuICB2YXIgcGl4ZWxPZmZzZXQgPSBsb2NhbCAqIGl0ZW0uc2l6ZTtcbiAgaWYgKGl0ZW0udGV4dHVyZSAhPSAwKSB7XG4gICAgbGV0IGMgPSBjb3MoaXRlbS50ZXh0dXJlKTtcbiAgICBsZXQgcyA9IHNpbihpdGVtLnRleHR1cmUpO1xuICAgIHBpeGVsT2Zmc2V0ID0gdmVjMmYocGl4ZWxPZmZzZXQueCAqIGMgLSBwaXhlbE9mZnNldC55ICogcywgcGl4ZWxPZmZzZXQueCAqIHMgKyBwaXhlbE9mZnNldC55ICogYyk7XG4gIH1cbiAgbGV0IHBpeGVsID0gaXRlbS5wb3NpdGlvbiArIHBpeGVsT2Zmc2V0O1xuICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKHBpeGVsLnggLyBzY2VuZS5yZXNvbHV0aW9uLnggKiAyIC0gMSwgMSAtIHBpeGVsLnkgLyBzY2VuZS5yZXNvbHV0aW9uLnkgKiAyLCAwLCAxKTtcbiAgb3V0cHV0LmxvY2FsID0gbG9jYWw7XG4gIG91dHB1dC5jb2xvciA9IGl0ZW0uY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaXRlbS5nbG93O1xuICBvdXRwdXQuaW50ZW5zaXR5ID0gaXRlbS5pbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFwZSA9IGl0ZW0uc2hhcGU7XG4gIG91dHB1dC5zZWNvbmRhcnlDb2xvciA9IGl0ZW0uc2Vjb25kYXJ5Q29sb3I7XG4gIG91dHB1dC50ZXh0dXJlID0gaXRlbS50ZXh0dXJlO1xuICBvdXRwdXQucmltSW50ZW5zaXR5ID0gaXRlbS5yaW1JbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFkb3dTdHJlbmd0aCA9IGl0ZW0uc2hhZG93U3RyZW5ndGg7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgaWYgKGlucHV0LnNoYXBlID4gNy41KSB7XG4gICAgbGV0IHJhZGl1cyA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gICAgbGV0IGFuZ2xlID0gYXRhbjIoaW5wdXQubG9jYWwueSwgaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFuZ2xlIDwgaW5wdXQucmltSW50ZW5zaXR5IHx8IGFuZ2xlID4gaW5wdXQuc2hhZG93U3RyZW5ndGggfHwgcmFkaXVzID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgbGluZURpc3RhbmNlID0gYWJzKHJhZGl1cyAtIDAuNzgpO1xuICAgIGlmIChsaW5lRGlzdGFuY2UgPiAwLjE2KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTIsIDAuMDM4LCBsaW5lRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4wMjUsIDAuMTYsIGxpbmVEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcHVsc2VBID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDIzLjAgLSBzY2VuZS50aW1lICogOC41KSksIDE2LjApO1xuICAgIGxldCBwdWxzZUIgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMTEuMCArIHNjZW5lLnRpbWUgKiA1LjMgKyAxLjcpKSwgMjQuMCk7XG4gICAgbGV0IGdyYWluID0gc2luKGFuZ2xlICogNzEuMCArIHNjZW5lLnRpbWUgKiAzLjEpICogMC41ICsgMC41O1xuICAgIGxldCBzdXJnZSA9IHNtb290aHN0ZXAoMC43MiwgMC45NCwgcHVsc2VBICogMC43ICsgcHVsc2VCICogMC42NSArIGdyYWluICogMC4xMik7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuODggKyBzdXJnZSAqIDAuNjUpICsgaGFsbyAqICgwLjIyICsgc3VyZ2UgKiAwLjkpKSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogc3VyZ2UgKiAwLjkpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNi41KSB7XG4gICAgbGV0IGFsb25nID0gaW5wdXQubG9jYWwueTtcbiAgICBsZXQgYWNyb3NzID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhY3Jvc3MgPiAxLjAgfHwgYWJzKGFsb25nKSA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDgsIDAuMjQsIGFjcm9zcyk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjEyLCAxLjAsIGFjcm9zcykpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5kRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMC43MiwgMS4wLCBhYnMoYWxvbmcpKTtcbiAgICBsZXQgdHJhdmVsID0gcG93KG1heCgwLjAsIHNpbihhbG9uZyAqIDI0LjAgLSBzY2VuZS50aW1lICogOC4wICsgaW5wdXQudGV4dHVyZSkpLCAxNC4wKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC43NSArIHRyYXZlbCAqIDAuNSkgKyBoYWxvICogKDAuMiArIHRyYXZlbCAqIDAuNTUpKSAqIGVuZEZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHRyYXZlbCAqIDAuNzUpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNS41KSB7XG4gICAgLy8gUGVudGFnb24gU0RGXG4gICAgLy8gbG9jYWwgaXMgaW4gWy0xLCAxXSByYW5nZS4gTGV0J3MgZmluZCBwZW50YWdvbiBkaXN0YW5jZS5cbiAgICBsZXQgcHggPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgbGV0IHB5ID0gaW5wdXQubG9jYWwueTtcbiAgICAvLyBQZW50YWdvbiBjb25zdGFudHMgZm9yIHZlcnRpY2VzL2VkZ2VzXG4gICAgbGV0IGsgPSB2ZWMzZigtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAxLjM3NjM4MTkyKTsgLy8gY29zL3NpbiBvZiA3MiwgcGx1cyBoZWlnaHQgZmFjdG9yXG4gICAgLy8gUHJvamVjdC9NaXJyb3IgYWNyb3NzIHRoZSBzeW1tZXRyeSBheGVzIG9mIHJlZ3VsYXIgcGVudGFnb25cbiAgICB2YXIgcCA9IHZlYzJmKHB4LCBweSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZigtay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZigtay54LCBrLnkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZihrLngsIGsueSk7XG4gICAgcC54ID0gcC54IC0gY2xhbXAocC54LCAtay56ICogMC41LCBrLnogKiAwLjUpO1xuICAgIGxldCBkID0gbGVuZ3RoKHAgLSB2ZWMyZigwLCAwLjcyKSkgKiBzaWduKHAueSAtIDAuNzIpO1xuICAgIC8vIE1hcCBkIHRvIGEgbm9ybWFsaXplZCByYWRpdXMgc2NhbGVcbiAgICBsZXQgc2NhbGVEID0gZCArIDAuMzU7IC8vIG9mZnNldCBwZW50YWdvbiB0byBmaXQgYm91bmRzIG5pY2VseVxuICAgIGlmIChzY2FsZUQgPiAwLjgpIHsgZGlzY2FyZDsgfVxuICAgIFxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC41LCAwLjY1LCBzY2FsZUQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNDUsIDAuNTMsIHNjYWxlRCkgKiAoMSAtIHNtb290aHN0ZXAoMC42NSwgMC43NSwgc2NhbGVEKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgtMC4yLCAwLjUsIHNjYWxlRCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC41NSwgMC44LCBzY2FsZUQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzggKyBib3JkZXIgKiAxLjM1O1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC41KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNzUgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC40NSkgKiBmaWxsICogMC4zNTtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC40O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA0LjUpIHtcbiAgICBsZXQgZCA9IGFicyhpbnB1dC5sb2NhbC54KSArIGFicyhpbnB1dC5sb2NhbC55KTtcbiAgICBpZiAoZCA+IDEuMDgpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC43OCwgMC45MiwgZCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC43MiwgMC44MiwgZCkgKiAoMSAtIHNtb290aHN0ZXAoMC45MiwgMS4wMiwgZCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoMC4wLCAwLjc4LCBkKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjgyLCAxLjA4LCBkKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM1ICsgYm9yZGVyICogMS4yO1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjYgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC41KSAqIGZpbGwgKiAwLjM4O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM1O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAxLjUpIHtcbiAgICBsZXQgcjIgPSBkb3QoaW5wdXQubG9jYWwsIGlucHV0LmxvY2FsKTtcbiAgICBpZiAocjIgPiAxKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgeiA9IHNxcnQobWF4KDAsIDEgLSByMikpO1xuICAgIGxldCBub3JtYWwgPSBub3JtYWxpemUodmVjM2YoaW5wdXQubG9jYWwueCwgLWlucHV0LmxvY2FsLnksIHopKTtcbiAgICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLTAuNTUsIC0wLjcsIDAuOSkpO1xuICAgIGxldCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCk7XG4gICAgbGV0IHJpbSA9IHBvdygxIC0geiwgMi4yKSAqIGlucHV0LnJpbUludGVuc2l0eTtcbiAgICBsZXQgc2hhZG93ID0gbWl4KDEgLSBpbnB1dC5zaGFkb3dTdHJlbmd0aCwgMSwgc21vb3Roc3RlcCgtMC42NSwgMC40NSwgZG90KG5vcm1hbC54eSwgbGlnaHQueHkpKSk7XG4gICAgbGV0IGdyYWluID0gc2luKGlucHV0LmxvY2FsLnggKiAyMyArIGlucHV0LmxvY2FsLnkgKiAxNykgKiBzaW4oaW5wdXQubG9jYWwueSAqIDMxIC0gaW5wdXQubG9jYWwueCAqIDExKTtcbiAgICBsZXQgdGV4dHVyZSA9IDEgKyBncmFpbiAqIGlucHV0LnRleHR1cmUgKiAwLjIyO1xuICAgIGxldCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0LCBub3JtYWwpLCB2ZWMzZigwLDAsMSkpLCAwKSwgMjgpICogMS44O1xuICAgIGxldCBib2R5ID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBkaWZmdXNlICogMC44ICsgMC4yKSAqIHNoYWRvdyAqIHRleHR1cmU7XG4gICAgbGV0IGhhbG8gPSBwb3cobWF4KDAsIDEgLSBsZW5ndGgoaW5wdXQubG9jYWwpKSwgMC4zNSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCByZ2IgPSBib2R5ICogKDAuMzggKyBkaWZmdXNlICogMC45NSkgKyBpbnB1dC5jb2xvci5yZ2IgKiByaW0gKyB2ZWMzZihzcGVjdWxhcikgKyBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IgKiBpbnB1dC5pbnRlbnNpdHksIDEpO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDMuNSkge1xuICAgIGxldCBheGlzID0gbWluKGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgICBsZXQgYXJtID0gMSAtIHNtb290aHN0ZXAoMC4wNCwgMC4xOCwgYXhpcyk7XG4gICAgbGV0IGZhZGUgPSAxIC0gc21vb3Roc3RlcCgwLjIsIDEsIG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSkpO1xuICAgIGxldCBlbmVyZ3kgPSBhcm0gKiBmYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGFybSkgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMi41KSB7XG4gICAgbGV0IHJpbmdEaXN0YW5jZSA9IGFicyhsZW5ndGgoaW5wdXQubG9jYWwpIC0gMC42Mik7XG4gICAgbGV0IHJpbmcgPSAxIC0gc21vb3Roc3RlcCgwLjA1NSwgMC4xOCwgcmluZ0Rpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjEyLCAwLjQyLCByaW5nRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZXJneSA9IChyaW5nICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIHJpbmcpICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMC41KSB7XG4gICAgZGlzdGFuY2UgPSBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICB9XG4gIGxldCBjb3JlID0gMSAtIHNtb290aHN0ZXAoMC4zOCwgMC43NiwgZGlzdGFuY2UpO1xuICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjMsIDEsIGRpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICBsZXQgZW5lcmd5ID0gKGNvcmUgKyBoYWxvICogMC41NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gIGxldCBjaHJvbWF0aWNDb3JlID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBwb3cobWF4KGNvcmUsIDApLCAyKSk7XG4gIGxldCByYXcgPSBjaHJvbWF0aWNDb3JlICogKGNvcmUgKiAxLjA1ICsgaGFsbyAqIDAuNDIpO1xuICBsZXQgcmdiID0gcmF3IC8gKHZlYzNmKDEpICsgcmF3ICogMC4zMik7XG4gIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xufVxuYDtcblxuZnVuY3Rpb24gcmdiYShoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdmFsdWUgPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGlmICghL15bMC05YS1mXXs2fSQvaS50ZXN0KHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzaXgtZGlnaXQgaGV4IGNvbG9yLCByZWNlaXZlZCBcIiR7aGV4fVwiLmApO1xuICByZXR1cm4gW1xuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgwLCAyKSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgyLCA0KSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSg0LCA2KSwgMTYpIC8gMjU1LFxuICAgIDEsXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjcHJpbWl0aXZlQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDogeyBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LCBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9IH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogbWF4UHJpbWl0aXZlcyAqIGZsb2F0c1BlclByaW1pdGl2ZSAqIDQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuICAgIHRoaXMuI2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH0sXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNwcmltaXRpdmVCdWZmZXIgfSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvblByaW1pdGl2ZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5LlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjYW52YXMgY291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIocHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdLCB0aW1lU2Vjb25kcyA9IDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmlzaWJsZSA9IHByaW1pdGl2ZXMuc2xpY2UoMCwgbWF4UHJpbWl0aXZlcyk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmlzaWJsZS5sZW5ndGggKiBmbG9hdHNQZXJQcmltaXRpdmUpO1xuICAgIHZpc2libGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyUHJpbWl0aXZlO1xuICAgICAgZGF0YS5zZXQoW1xuICAgICAgICBpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQgPz8gaXRlbS53aWR0aCxcbiAgICAgICAgLi4ucmdiYShpdGVtLmNvbG9yKSxcbiAgICAgICAgLi4ucmdiYShpdGVtLnNlY29uZGFyeUNvbG9yID8/IGl0ZW0uY29sb3IpLFxuICAgICAgICBpdGVtLmdsb3cgPz8gMC41LFxuICAgICAgICBpdGVtLmludGVuc2l0eSA/PyAxLFxuICAgICAgICBpdGVtLnNoYXBlID09PSBcImFyY1wiID8gOCA6IGl0ZW0uc2hhcGUgPT09IFwibGluZVwiID8gNyA6IGl0ZW0uc2hhcGUgPT09IFwicGVudGFnb25cIiA/IDYgOiBpdGVtLnNoYXBlID09PSBcImRpYW1vbmRcIiA/IDUgOiBpdGVtLnNoYXBlID09PSBcInNwYXJrXCIgPyA0IDogaXRlbS5zaGFwZSA9PT0gXCJyaW5nXCIgPyAzIDogaXRlbS5zaGFwZSA9PT0gXCJvcmJcIiA/IDIgOiBpdGVtLnNoYXBlID09PSBcImJvbHRcIiA/IDEgOiAwLFxuICAgICAgICBpdGVtLnJvdGF0aW9uID8/IGl0ZW0udGV4dHVyZSA/PyAwLFxuICAgICAgICBpdGVtLmFyY1N0YXJ0ID8/IGl0ZW0ucmltSW50ZW5zaXR5ID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjRW5kID8/IGl0ZW0uc2hhZG93U3RyZW5ndGggPz8gMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgIF0sIG9mZnNldCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHZpc2libGUubGVuZ3RoLCB0aW1lU2Vjb25kc10pKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLjAwNiwgZzogMC4wMDksIGI6IDAuMDI1LCBhOiAwIH0sXG4gICAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICB9XSxcbiAgICB9KTtcbiAgICBpZiAodmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZEdyb3VwKTtcbiAgICAgIHBhc3MuZHJhdyg2LCB2aXNpYmxlLmxlbmd0aCk7XG4gICAgfVxuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbiA9IFwiZmFkZVwiIHwgXCJleHBhbmRGYWRlXCIgfCBcImltcGxvZGVcIiB8IFwic3BhcmtGYWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjb3JlQ29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBkZXRhaWw/OiBudW1iZXI7XG4gIHR1cmJ1bGVuY2U/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGNvcmVJbnRlbnNpdHk/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25UaW1lPzogbnVtYmVyO1xuICBkaXNzaXBhdGlvbkFjdGlvbj86IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uO1xuICBkcmlmdFg/OiBudW1iZXI7XG4gIGRyaWZ0WT86IG51bWJlcjtcbiAgc2VlZD86IG51bWJlcjtcbiAgYWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJ4XCIgfCBcInlcIiB8IFwic2l6ZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbnR5cGUgQ2xvdWQgPSBSZXF1aXJlZDxPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwiY29yZUNvbG9yXCI+PiAmIHsgY29yZUNvbG9yOiBzdHJpbmc7IGFnZTogbnVtYmVyIH07XG5cbmNvbnN0IG1heENsb3VkcyA9IDk2O1xuY29uc3QgZmxvYXRzUGVyQ2xvdWQgPSAyNDtcblxuY29uc3QgZGVmYXVsdHM6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+ID0ge1xuICBjb2xvcjogXCIjNjNlOGZmXCIsXG4gIGNvcmVDb2xvcjogXCIjZmZmZmZmXCIsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0aW9uOiAwLFxuICBzaXplOiAuMjUsXG4gIGRldGFpbDogNSxcbiAgdHVyYnVsZW5jZTogLjc1LFxuICBnbG93OiA0LFxuICBjb3JlSW50ZW5zaXR5OiAxLjQsXG4gIHJpbUludGVuc2l0eTogLjg1LFxuICBvcGFjaXR5OiAxLFxuICBkaXNzaXBhdGlvblRpbWU6IC43LFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJleHBhbmRGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBzZWVkOiAwLFxuICBhZ2U6IDAsXG59O1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLnBhZEVuZCg2LCBcIjBcIikuc2xpY2UoMCwgNik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcml2ZU5lb25DbG91ZENvcmVDb2xvciA9IChjb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgW3IsIGcsIGJdID0gaGV4KGNvbG9yKTtcbiAgY29uc3QgbGlmdCA9IChjaGFubmVsOiBudW1iZXIpID0+IE1hdGgucm91bmQoKGNoYW5uZWwgKyAoMSAtIGNoYW5uZWwpICogLjc4KSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAjJHtsaWZ0KHIpfSR7bGlmdChnKX0ke2xpZnQoYil9YDtcbn07XG5cbmNvbnN0IGFjdGlvblZhbHVlID0gKGFjdGlvbjogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24pOiBudW1iZXIgPT5cbiAgYWN0aW9uID09PSBcImZhZGVcIiA/IDAgOiBhY3Rpb24gPT09IFwiZXhwYW5kRmFkZVwiID8gMSA6IGFjdGlvbiA9PT0gXCJpbXBsb2RlXCIgPyAyIDogMztcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBDbG91ZCB7XG4gIHBvczogdmVjMmYsXG4gIHZlbG9jaXR5OiB2ZWMyZixcbiAgYWdlOiBmMzIsXG4gIGxpZmU6IGYzMixcbiAgc2l6ZTogZjMyLFxuICByb3RhdGlvbjogZjMyLFxuICBzZWVkOiBmMzIsXG4gIGFjdGlvbjogZjMyLFxuICBjb2xvcjogdmVjNGYsXG4gIGNvcmU6IHZlYzRmLFxuICB0dW5pbmc6IHZlYzRmLFxufVxuc3RydWN0IEdsb2JhbHMge1xuICBhc3BlY3Q6IGYzMixcbiAgdGltZTogZjMyLFxuICBjb3VudDogZjMyLFxuICBiYWNrZ3JvdW5kOiBmMzIsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IGdsb2JhbHM6IEdsb2JhbHM7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGNsb3VkczogYXJyYXk8Q2xvdWQ+O1xuXG5mbiBoYXNoKHA6IHZlYzJmKSAtPiBmMzIge1xuICByZXR1cm4gZnJhY3Qoc2luKGRvdChwLCB2ZWMyZigxMjcuMSwgMzExLjcpKSkgKiA0Mzc1OC41NDUzMTIzKTtcbn1cbmZuIG5vaXNlKHA6IHZlYzJmKSAtPiBmMzIge1xuICBsZXQgaSA9IGZsb29yKHApO1xuICBsZXQgZiA9IGZyYWN0KHApO1xuICBsZXQgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbWl4KG1peChoYXNoKGkpLCBoYXNoKGkgKyB2ZWMyZigxLDApKSwgdS54KSwgbWl4KGhhc2goaSArIHZlYzJmKDAsMSkpLCBoYXNoKGkgKyB2ZWMyZigxLDEpKSwgdS54KSwgdS55KTtcbn1cbmZuIGZibShwOiB2ZWMyZiwgb2N0YXZlczogZjMyKSAtPiBmMzIge1xuICB2YXIgdiA9IDAuMDtcbiAgdmFyIGEgPSAwLjU7XG4gIHZhciBxID0gcDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBpZiAoZjMyKGkpID49IG9jdGF2ZXMpIHsgYnJlYWs7IH1cbiAgICB2ICs9IGEgKiBub2lzZShxKTtcbiAgICBxID0gcSAqIDIuMDMgKyB2ZWMyZig2LjksIDMuNyk7XG4gICAgYSAqPSAwLjUyO1xuICB9XG4gIHJldHVybiB2O1xufVxuZm4gcm90YXRlKHA6IHZlYzJmLCBhOiBmMzIpIC0+IHZlYzJmIHtcbiAgbGV0IGMgPSBjb3MoYSk7XG4gIGxldCBzID0gc2luKGEpO1xuICByZXR1cm4gdmVjMmYocC54ICogYyAtIHAueSAqIHMsIHAueCAqIHMgKyBwLnkgKiBjKTtcbn1cbnN0cnVjdCBPdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgQGludGVycG9sYXRlKGZsYXQpIGluc3RhbmNlOiB1MzIsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2aTogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gT3V0IHtcbiAgbGV0IGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBjID0gY2xvdWRzW2luc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgYWN0aW9uU2NhbGUgPSBzZWxlY3QoMS4wICsgbGlmZVQgKiAxLjg1LCAxLjAgLSBsaWZlVCAqIC42MiwgYy5hY3Rpb24gPiAxLjUgJiYgYy5hY3Rpb24gPCAyLjUpO1xuICBsZXQgcmFkaXVzID0gbWF4KC4wMDEsIGMuc2l6ZSAqIGFjdGlvblNjYWxlKSAqIDIuMzU7XG4gIHZhciBjZW50ZXIgPSBjLnBvcyArIGMudmVsb2NpdHkgKiBjLmFnZTtcbiAgY2VudGVyLnggKj0gZ2xvYmFscy5hc3BlY3Q7XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmldO1xuICBsZXQgcCA9IGNlbnRlciArIGxvY2FsICogcmFkaXVzO1xuICB2YXIgbzogT3V0O1xuICBvLnBvc2l0aW9uID0gdmVjNGYocC54IC8gZ2xvYmFscy5hc3BlY3QsIHAueSwgMCwgMSk7XG4gIG8ubG9jYWwgPSBsb2NhbCAqIDIuMzU7XG4gIG8uaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgcmV0dXJuIG87XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBjID0gY2xvdWRzW2lucHV0Lmluc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgbG9jYWwgPSByb3RhdGUoaW5wdXQubG9jYWwsIC1jLnJvdGF0aW9uIC0gbGlmZVQgKiAuNDUpO1xuICBsZXQgciA9IGxlbmd0aChsb2NhbCk7XG4gIGlmIChyID49IDIuMzUpIHsgZGlzY2FyZDsgfVxuICBsZXQgZGV0YWlsID0gY2xhbXAoYy50dW5pbmcueCwgMS4wLCA3LjApO1xuICBsZXQgdHVyYnVsZW5jZSA9IGMudHVuaW5nLnk7XG4gIGxldCB3aXNweSA9IGZibShsb2NhbCAqICgxLjcgKyBkZXRhaWwgKiAuMTYpICsgdmVjMmYoYy5zZWVkLCBjLnNlZWQgKiAuNzEpICsgZ2xvYmFscy50aW1lICogdmVjMmYoLjE2LCAuMDkpICogdHVyYnVsZW5jZSwgbWluKGRldGFpbCwgNC4wKSk7XG4gIGxldCBjb3JlID0gZXhwKC1yICogciAqICgxLjIgKyBjLnR1bmluZy56ICogLjIyKSk7XG4gIGxldCByaW0gPSBleHAoLWFicyhyIC0gLjcyKSAqIDMuNik7XG4gIGxldCBzcGFyayA9IHBvdyhtYXgoMC4wLCBzaW4od2lzcHkgKiAxNi4wICsgYy5zZWVkICsgZ2xvYmFscy50aW1lICogOS4wKSksIDE0LjApICogc2VsZWN0KDAuMCwgMS4wLCBjLmFjdGlvbiA+IDIuNSk7XG4gIGxldCBkaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgxLjQ1LCAyLjM1LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgcmltRGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMi43LCAzLjgsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCBlZGdlRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMS43NSwgMi4zNSwgcik7XG4gIGxldCBkZW5zaXR5ID0gKGNvcmUgKiAuNzIgKyByaW0gKiAuMjQgKiByaW1EaXNzaXBhdGUgKyB3aXNweSAqIC4yMiArIHNwYXJrICogLjU1KSAqIGRpc3NpcGF0ZSAqIGMudHVuaW5nLncgKiBlZGdlRmFkZTtcbiAgbGV0IGhvdENvcmUgPSBjLmNvcmUucmdiICogY29yZSAqIGMudHVuaW5nLnogKiAoMS4wICsgc3BhcmspO1xuICBsZXQgbmVvblJpbSA9IGMuY29sb3IucmdiICogKGRlbnNpdHkgKiAoLjc1ICsgYy5jb2xvci5hICogLjA4KSArIHJpbSAqIHJpbURpc3NpcGF0ZSAqIGMuY29sb3IuYSAqIC4wOCk7XG4gIGxldCBnbG93ID0gbmVvblJpbSArIGhvdENvcmUgKiBkZW5zaXR5O1xuICByZXR1cm4gdmVjNGYoZ2xvdywgY2xhbXAoZGVuc2l0eSAqIC44NSArIHNwYXJrICogLjI1LCAwLjAsIDEuMCkpO1xufWA7XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdEFjdG9yIHtcbiAgc2V0dGluZ3M6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+O1xuICBhZ2UgPSAwO1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyA9IHt9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uZGVmYXVsdHMsIC4uLnNldHRpbmdzLCBzZWVkOiBzZXR0aW5ncy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwIH07XG4gIH1cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLmFnZSArPSBkdDtcbiAgICByZXR1cm4gdGhpcy5hZ2UgPCB0aGlzLnNldHRpbmdzLmRpc3NpcGF0aW9uVGltZTtcbiAgfVxuICByZW5kZXJJbnN0YW5jZSgpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnNldHRpbmdzLCBzZWVkOiB0aGlzLnNldHRpbmdzLnNlZWQgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2J1ZmZlcjogR1BVQnVmZmVyO1xuICAjZ2xvYmFsczogR1BVQnVmZmVyO1xuICAjYmluZDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IHByb2NlZHVyYWwgY2xvdWQgdm9sdW1lIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jZ2xvYmFscyA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNidWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogbWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQgKiA0LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2JpbmQgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFtcbiAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNnbG9iYWxzIH0gfSxcbiAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNidWZmZXIgfSB9LFxuICAgIF0gfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IGNsb3VkIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoY2xvdWRzOiByZWFkb25seSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzW10sIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHBhY2tlZCA9IG5ldyBGbG9hdDMyQXJyYXkobWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQpO1xuICAgIGNsb3Vkcy5zbGljZSgwLCBtYXhDbG91ZHMpLmZvckVhY2goKGNsb3VkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYyA9IHsgLi4uZGVmYXVsdHMsIC4uLmNsb3VkIH07XG4gICAgICBjb25zdCBjb2xvciA9IGhleChjLmNvbG9yKSwgY29yZSA9IGhleChjLmNvcmVDb2xvcik7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlckNsb3VkO1xuICAgICAgcGFja2VkLnNldChbYy54LCBjLnksIGMuZHJpZnRYLCBjLmRyaWZ0WSwgYy5hZ2UgPz8gMCwgYy5kaXNzaXBhdGlvblRpbWUsIGMuc2l6ZSwgYy5yb3RhdGlvbiwgYy5zZWVkLCBhY3Rpb25WYWx1ZShjLmRpc3NpcGF0aW9uQWN0aW9uKSwgMCwgMF0sIG9mZnNldCk7XG4gICAgICBwYWNrZWQuc2V0KFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBjLmdsb3csIGNvcmVbMF0sIGNvcmVbMV0sIGNvcmVbMl0sIGMuY29yZUludGVuc2l0eSwgYy5kZXRhaWwsIGMudHVyYnVsZW5jZSwgYy5yaW1JbnRlbnNpdHksIGMub3BhY2l0eV0sIG9mZnNldCArIDEyKTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNidWZmZXIsIDAsIHBhY2tlZCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jZ2xvYmFscywgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIHRpbWVTZWNvbmRzLCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpLCAwXSkpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7IGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSxcbiAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgIH1dIH0pO1xuICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmQpO1xuICAgIHBhc3MuZHJhdyg2LCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpKTtcbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgbWFwVG9wRG93bkNsb3VkKGNsb3VkOiBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICBjb25zdCBhc3BlY3QgPSBsb2dpY2FsV2lkdGggLyBsb2dpY2FsSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IChjbG91ZC54IC8gbG9naWNhbFdpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gY2xvdWQueSAvIGxvZ2ljYWxIZWlnaHQpICogMi41LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgICBkcmlmdFg6IChjbG91ZC5kcmlmdFggPz8gMCkgLyBsb2dpY2FsV2lkdGggKiBhc3BlY3QgKiAyLjUsXG4gICAgICBkcmlmdFk6IC0oY2xvdWQuZHJpZnRZID8/IDApIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuI2J1ZmZlci5kZXN0cm95KCk7XG4gICAgdGhpcy4jZ2xvYmFscy5kZXN0cm95KCk7XG4gICAgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE5lb25QcmltaXRpdmVSZW5kZXJlciwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciwgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgfSBmcm9tIFwiLi9jbG91ZC1idXJzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2hhcGUgZXh0ZW5kcyBPbWl0PE5lb25TaGFwZUluc3RhbmNlLCBcInhcIiB8IFwieVwiIHwgXCJzY2FsZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TY2VuZSB7XG4gIHByaW1pdGl2ZXM/OiByZWFkb25seSBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM/OiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI3ByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVSZW5kZXJlcjtcbiAgI2Nsb3VkczogTmVvbkNsb3VkQnVyc3RSZW5kZXJlcjtcbiAgI3NoYXBlczogTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI7XG4gICN3aWR0aDogbnVtYmVyO1xuICAjaGVpZ2h0OiBudW1iZXI7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0OyB0aGlzLiN3aWR0aCA9IHdpZHRoOyB0aGlzLiNoZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jcHJpbWl0aXZlcyA9IG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jY2xvdWRzID0gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jc2hhcGVzID0gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogUHJvbWlzZTxOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkgdG9wLWRvd24gc2NlbmVzLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0LCBsb2dpY2FsV2lkdGgsIGxvZ2ljYWxIZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNjZW5lOiBOZW9uVG9wRG93blNjZW5lLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy4jcHJpbWl0aXZlcy5yZW5kZXIoWy4uLihzY2VuZS5wcmltaXRpdmVzID8/IFtdKV0sIHRpbWVTZWNvbmRzLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICBjb25zdCBjbG91ZHMgPSBzY2VuZS5jbG91ZHMgPz8gW107XG4gICAgY29uc3QgYXNwZWN0ID0gdGhpcy4jd2lkdGggLyB0aGlzLiNoZWlnaHQ7XG4gICAgY29uc3Qgc2hhcGVzID0gc2NlbmUuc2hhcGVzID8/IFtdO1xuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB0aGlzLiNzaGFwZXMucmVuZGVyKHNoYXBlcy5tYXAoc2hhcGUgPT4gKHtcbiAgICAgIC4uLnNoYXBlLFxuICAgICAgeDogKHNoYXBlLnggLyB0aGlzLiN3aWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIHNoYXBlLnkgLyB0aGlzLiNoZWlnaHQpICogMi41LFxuICAgICAgc2NhbGU6IChzaGFwZS5oZWlnaHQgPz8gc2hhcGUuc2l6ZSkgLyB0aGlzLiNoZWlnaHQgKiAyLjUsXG4gICAgICBzY2FsZVg6IChzaGFwZS5zY2FsZVggPz8gMSkgKiAoKHNoYXBlLndpZHRoID8/IHNoYXBlLnNpemUpIC8gKHNoYXBlLmhlaWdodCA/PyBzaGFwZS5zaXplKSksXG4gICAgfSkpLCB0cnVlLCB0YXJnZXQpO1xuICAgIGlmIChjbG91ZHMubGVuZ3RoKSB0aGlzLiNjbG91ZHMucmVuZGVyKGNsb3Vkcy5tYXAoY2xvdWQgPT4gdGhpcy4jY2xvdWRzLm1hcFRvcERvd25DbG91ZChjbG91ZCwgdGhpcy4jd2lkdGgsIHRoaXMuI2hlaWdodCkpLCB0aW1lU2Vjb25kcywgdHJ1ZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuI3NoYXBlcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLiNjbG91ZHMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCIsIFwiYXVyb3JhXCIsIFwiY3J5c3RhbEZvcmdlXCIsIFwidm9pZEdhcmRlblwiLCBcInNvbGFyQXJyYXlcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxuICBhdXJvcmE6IFwiQXVyb3JhXCIsXG4gIGNyeXN0YWxGb3JnZTogXCJDcnlzdGFsIEZvcmdlXCIsXG4gIHZvaWRHYXJkZW46IFwiVm9pZCBHYXJkZW5cIixcbiAgc29sYXJBcnJheTogXCJTb2xhciBBcnJheVwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVQYWxldHRlIHtcbiAgZmxvb3I6IHN0cmluZztcbiAgYm91bmRhcnk6IHN0cmluZztcbiAgbGFuZTogc3RyaW5nO1xuICBjZW50ZXJMYW5lOiBzdHJpbmc7XG4gIGFjY2VudDogc3RyaW5nO1xuICBsYW5lSGlnaGxpZ2h0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBoYWxsRmxvb3JDb2xvcixcbiAgYm91bmRhcnk6IGhhbGxEZWVwQmx1ZSxcbiAgbGFuZTogaGFsbE11dGVkQmx1ZSxcbiAgY2VudGVyTGFuZTogaGFsbE11dGVkVmlvbGV0LFxuICBhY2NlbnQ6IGhhbGxBY2NlbnRQaW5rLFxuICBsYW5lSGlnaGxpZ2h0OiBoYWxsTXV0ZWRDeWFuLFxufTtcblxuY29uc3QgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwMzExMGZcIixcbiAgYm91bmRhcnk6IFwiIzE3OGM5MlwiLFxuICBsYW5lOiBcIiMxN2Q3YjNcIixcbiAgY2VudGVyTGFuZTogXCIjOGY1NmZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZmM3XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2I5ZmY2YVwiLFxufTtcblxuY29uc3QgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwNzEwMThcIixcbiAgYm91bmRhcnk6IFwiIzI2ZDdmZlwiLFxuICBsYW5lOiBcIiM2M2YxZmZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY1ZmQ4XCIsXG4gIGFjY2VudDogXCIjZmZiODRkXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2Y0ZmJmZlwiLFxufTtcblxuY29uc3Qgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDgwODE4XCIsXG4gIGJvdW5kYXJ5OiBcIiM2ZjUzZmZcIixcbiAgbGFuZTogXCIjMzVlOGI2XCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNGZjN1wiLFxuICBhY2NlbnQ6IFwiI2I5ZmY2YVwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiM5YmQ3ZmZcIixcbn07XG5cbmNvbnN0IHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzExMGMwN1wiLFxuICBib3VuZGFyeTogXCIjZmY5ZTM4XCIsXG4gIGxhbmU6IFwiI2ZmZDQ1YVwiLFxuICBjZW50ZXJMYW5lOiBcIiMyNmQ3ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmNjZcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZmZmNmI4XCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgcmV0dXJuIHNjZW5lQ3JlYXRvcnNbb3B0aW9ucy5zY2VuZUlkXShvcHRpb25zKTtcbn1cblxuY29uc3Qgc2NlbmVDcmVhdG9yczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCAob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucykgPT4gTmVvblRvcERvd25TY2VuZT4gPSB7XG4gIG5lb25IYWxsOiBjcmVhdGVOZW9uSGFsbCxcbiAgYXVyb3JhOiBjcmVhdGVBdXJvcmEsXG4gIGNyeXN0YWxGb3JnZTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGUsIGFkZENyeXN0YWxGb3JnZURldGFpbHMpLFxuICB2b2lkR2FyZGVuOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGUsIGFkZFZvaWRHYXJkZW5EZXRhaWxzKSxcbiAgc29sYXJBcnJheTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlLCBhZGRTb2xhckFycmF5RGV0YWlscyksXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXVyb3JhKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUxhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFHcm91bmRGbGFyZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUhvcml6b25WZWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShcbiAgb3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyxcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgYWRkRGV0YWlsczogKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcikgPT4gdm9pZCxcbik6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkVGhlbWVkTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZERldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUoXG4gIGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sXG4gIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICB0aW1lTXM6IG51bWJlcixcbik6IHZvaWQge1xuICBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXMsIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQsIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUpO1xuICBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtczogTmVvblByaW1pdGl2ZVtdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgcHVsc2UgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgKiBoYWxsRW5lcmd5U3BlZWQpICogLjI7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIC40Miwgd2lkdGg6IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoLCBoZWlnaHQ6IGhlaWdodCAqIDEuMDgsIGNvbG9yOiBwYWxldHRlLmZsb29yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC45LCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogcGFsZXR0ZS5ib3VuZGFyeSwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC43OCwgd2lkdGg6IHdpZHRoICogLjE4LCBoZWlnaHQ6IDEuMiwgY29sb3I6IHBhbGV0dGUuYWNjZW50LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5jZW50ZXJMYW5lLCBnbG93OiAuMjQsIGludGVuc2l0eTogLjA4LCBzaGFwZTogXCJib2x0XCIgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSk6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBbYm90dG9tLCBob3Jpem9uXSBvZiBbW2xlZnRCb3R0b20sIGxlZnRIb3Jpem9uXSwgW3JpZ2h0Qm90dG9tLCByaWdodEhvcml6b25dXSBhcyBjb25zdCkge1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUuYm91bmRhcnksIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIC41NiwgMS4zKTtcbiAgfVxuXG4gIGZvciAobGV0IGxhbmUgPSAxOyBsYW5lIDw9IDM7IGxhbmUrKykge1xuICAgIGNvbnN0IHUgPSBsYW5lIC8gNDtcbiAgICBjb25zdCBzdGFydCA9IGxlcnBQb2ludChsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgdSk7XG4gICAgY29uc3QgZW5kID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IGNvbG9yID0gbGFuZSA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUubGFuZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHJvdyAlIDQgPT09IDEgPyBwYWxldHRlLmxhbmUgOiByb3cgJSA0ID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5hY2NlbnQ7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4xNSArIHQgKiAuMjMpICogKC41NSArIHJvd1B1bHNlICogLjQ1KSArIHN1cmdlICogLjA1NSwgMy4xICsgdCAqIDIpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMiArIHQgKiAuMjcpICogKC41MiArIHJvd1B1bHNlICogLjQ4KSArIHN1cmdlICogLjA3LCAuNzUgKyB0ICogLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgNzsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE5MDAgKyBwdWxzZUluZGV4IC8gNykgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNTUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzQgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBoYWxsTXV0ZWRDeWFuLCBvcGFjaXR5LCAxLjEgKyB0ICogMS40KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRmxvb3JHbHlwaHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCByb3dzID0gWzIsIDQsIDYsIDgsIDEwLCAxMl07XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIC41KTtcbiAgICBjb25zdCBzY2FsZSA9IC40NSArIHQgKiAxLjE7XG4gICAgY29uc3QgcHVsc2UgPSAuNDggKyBNYXRoLnNpbih0aW1lTXMgLyA3MjAgKyByb3cgKiAxLjMpICogLjI0O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiA3ICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IDcgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbERlZXBCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJvdyAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4yNCArIHB1bHNlICogLjE2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IGdsb3dQdWxzZSA9IC43NSArIE1hdGguc2luKHRpbWVNcyAvIDY4MCkgKiAuMjU7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIGhhbGxBY2NlbnRQaW5rLCAuMiArIGdsb3dQdWxzZSAqIC4wOCwgMS4xKTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggLSB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkQ3lhbiwgLjE2LCAuODUpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54ICsgd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRWaW9sZXQsIC4xNiwgLjg1KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggKyAuNSkgLyA4O1xuICAgIGNvbnN0IGJhc2UgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3Qgc2lkZUJpYXMgPSBNYXRoLmFicyh1IC0gLjUpICogMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGJhc2UueCxcbiAgICAgIHk6IGJhc2UueSAtIGhlaWdodCAqICguMDE4ICsgc2lkZUJpYXMgKiAuMDE4KSxcbiAgICAgIHdpZHRoOiAxICsgc2lkZUJpYXMgKiAuNyxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyBzaWRlQmlhcyAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbEFjY2VudFBpbmssXG4gICAgICBnbG93OiAuMjQsXG4gICAgICBpbnRlbnNpdHk6IC4wNyArIGdsb3dQdWxzZSAqIC4wMzUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4oaW5kZXggKiAxLjcpICogLjEyLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxTaWRlUGFuZWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBzaWRlIG9mIFswLCAxXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxMCwgMS42OCk7XG4gICAgICBjb25zdCByYWlsID0gc2lkZSA9PT0gMFxuICAgICAgICA/IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdClcbiAgICAgICAgOiBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgICBjb25zdCBvdXR3YXJkID0gc2lkZSA9PT0gMCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaWNrZXIgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA2MDAgKyBpbmRleCAqIDEuNSArIHNpZGUpICogLjI4O1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHg6IHJhaWwueCArIG91dHdhcmQgKiB3aWR0aCAqICguMDM1ICsgdCAqIC4wNiksXG4gICAgICAgIHk6IHJhaWwueSAtIGhlaWdodCAqICguMDE4ICsgdCAqIC4wMTIpLFxuICAgICAgICB3aWR0aDogMS4yICsgdCAqIDEuMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHQgKiAuMDgpLFxuICAgICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkQ3lhbixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgICAgZ2xvdzogLjMsXG4gICAgICAgIGludGVuc2l0eTogKC4wNzUgKyB0ICogLjA2NSkgKiBmbGlja2VyLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEVuZXJneVRyYWNlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjEyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAxMTY7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjcpKTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0ID09PSAwID8gLjE4IDogaW5kZXggJSA0ID09PSAxID8gLjM0IDogaW5kZXggJSA0ID09PSAyID8gLjY2IDogLjgyO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBzaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjcgKyB0aW1lTXMgLyAxNzAwKSAqIC4wMzUpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyAzOTAgKyBpbmRleCAqIDEuMSkgKiAuMzg7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiAuOCArIGluZGV4ICUgMyAqIC41LFxuICAgICAgaGVpZ2h0OiAxMCArIGluZGV4ICUgNSAqIDcsXG4gICAgICBjb2xvcjogaW5kZXggJSA1ID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbE11dGVkQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyAoaW5kZXggJSA0KSAqIC4wMTgpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgOTsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE1NTAgKyBwdWxzZUluZGV4IC8gOSkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNDgpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzIgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMTdkN2IzXCIsIG9wYWNpdHksIDEgKyB0ICogMS43KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFHcm91bmRGbGFyZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4wOCArICgoaW5kZXggKiAyOSkgJSAxMDApIC8gMTEyO1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS42MikpO1xuICAgIGNvbnN0IGxhbmVTaWRlID0gaW5kZXggJSAyID09PSAwID8gLjIyIDogLjc4O1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBsYW5lU2lkZSArIE1hdGguc2luKGluZGV4ICogMS4xICsgdGltZU1zIC8gMTgwMCkgKiAuMDQpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA0MzAgKyBpbmRleCAqIDEuMykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA5ICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IGluZGV4ICUgMyA9PT0gMSA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA2KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjE4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUhvcml6b25WZWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA3OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCAtIDMpIC8gNjtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5zaW4odGltZU1zIC8gMTEwMCArIGluZGV4ICogLjkpO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogdnAueCArIHUgKiB3aWR0aCAqIC4zNixcbiAgICAgIHk6IHZwLnkgKyBoZWlnaHQgKiAoLjA3NSArIGluZGV4ICogLjAwNiksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAzNSArIGluZGV4ICogLjAwNCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMTIgKyBNYXRoLmFicyh3YXZlKSAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMDQ1ICsgTWF0aC5hYnMod2F2ZSkgKiAuMDI1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IHUgKiAuMjggKyB3YXZlICogLjA4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lZExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA4OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTcwMCArIHB1bHNlSW5kZXggLyA4KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcGFsZXR0ZS5hY2NlbnQsIC4yOCAqICgxIC0gdHJhdmVsKSwgMS4xICsgdCAqIDEuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTY7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxNywgMS41NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xNCA6IC44NjtcbiAgICBjb25zdCBlZGdlID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgZ2xpbnQgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA1MjAgKyBpbmRleCAqIDEuMTcpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogZWRnZS54LFxuICAgICAgeTogZWRnZS55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTIgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDI1ICsgdCAqIC4wNiksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZiODRkXCIgOiBcIiM2M2YxZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiNmZjVmZDhcIiA6IFwiI2Y0ZmJmZlwiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogZ2xpbnQsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgICByb3RhdGlvbjogKHNpZGUgPCAuNSA/IC0uMjIgOiAuMjIpICsgTWF0aC5zaW4odGltZU1zIC8gMTQwMCArIGluZGV4KSAqIC4wOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCBcIiNmZmI4NGRcIiwgLjIyLCAxLjMpO1xufVxuXG5mdW5jdGlvbiBhZGRWb2lkR2FyZGVuRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coLjA4ICsgKChpbmRleCAqIDIzKSAlIDEwMCkgLyAxMTIsIDEuNjUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPCAyID8gLjE4IDogLjgyO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUgKyBNYXRoLnNpbih0aW1lTXMgLyAxOTAwICsgaW5kZXgpICogLjAzNSk7XG4gICAgY29uc3QgYmxvb20gPSAuNSArIE1hdGguc2luKHRpbWVNcyAvIDc2MCArIGluZGV4ICogLjgpICogLjMyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgaGVpZ2h0OiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMzVlOGI2XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjNmY1M2ZmXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC40MixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIHQgKiAuMDUpICogYmxvb20sXG4gICAgICBzaGFwZTogaW5kZXggJSAyID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjQsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIFwiIzM1ZThiNlwiLCAuMTgsIDEuMSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNvbGFyQXJyYXlEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE5LCAxLjQ4KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjEgOiAuOTtcbiAgICBjb25zdCBtb3VudCA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IHB1bHNlID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gNjEwICsgaW5kZXggKiAxLjA1KSAqIC4zO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogbW91bnQueCxcbiAgICAgIHk6IG1vdW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTIgKyB0ICogLjAyNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZkNDVhXCIgOiBcIiNmZjllMzhcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiMyNmQ3ZmZcIiA6IFwiI2ZmNGY2NlwiLFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogcHVsc2UsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogc2lkZSA8IC41ID8gLS4zOCA6IC4zOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCBcIiNmZmY2YjhcIiwgLjI0LCAxLjQpO1xufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSA9IFwiZGFydFwiIHwgXCJuZWVkbGVcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJvamVjdGlsZU9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYPzogbnVtYmVyO1xuICB2ZWxvY2l0eVk/OiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgbGVuZ3RoPzogbnVtYmVyO1xuICB0cmFpbExlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxXaWR0aD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICBzaGFwZT86IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbn1cblxuY29uc3Qgcm90YXRpb25Gb3JTY3JlZW5Gb3J3YXJkVmVjdG9yID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMih4IC8gbGVuZ3RoLCAteSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgY2xhc3MgTmVvblByb2plY3RpbGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHZlbG9jaXR5WTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsV2lkdGg6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcjogc3RyaW5nO1xuICBjb3JlQ29sb3I6IHN0cmluZztcbiAgc2hhcGU6IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblByb2plY3RpbGVPcHRpb25zKSB7XG4gICAgdGhpcy54PW9wdGlvbnMueDt0aGlzLnk9b3B0aW9ucy55O3RoaXMudmVsb2NpdHlYPW9wdGlvbnMudmVsb2NpdHlYPz8wO3RoaXMudmVsb2NpdHlZPW9wdGlvbnMudmVsb2NpdHlZPz8tNTAwO1xuICAgIHRoaXMucmFkaXVzPW9wdGlvbnMucmFkaXVzPz8zO3RoaXMubGVuZ3RoPW9wdGlvbnMubGVuZ3RoPz85O3RoaXMudHJhaWxMZW5ndGg9b3B0aW9ucy50cmFpbExlbmd0aD8/MTY7dGhpcy50cmFpbFdpZHRoPW9wdGlvbnMudHJhaWxXaWR0aD8/MS41O1xuICAgIHRoaXMuY29sb3I9b3B0aW9ucy5jb2xvcjt0aGlzLnRyYWlsQ29sb3I9b3B0aW9ucy50cmFpbENvbG9yPz9vcHRpb25zLmNvbG9yO3RoaXMuY29yZUNvbG9yPW9wdGlvbnMuY29yZUNvbG9yPz9vcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuc2hhcGU9b3B0aW9ucy5zaGFwZT8/XCJkYXJ0XCI7dGhpcy5pbnRlbnNpdHk9b3B0aW9ucy5pbnRlbnNpdHk/PzE7dGhpcy5nbG93PW9wdGlvbnMuZ2xvdz8/Ljc1O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlYICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5WSAqIGRlbHRhU2Vjb25kcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc2hhcGUgPT09IFwic3BsaXRCb2x0XCI7XG4gICAgY29uc3QgbmVlZGxlID0gdGhpcy5zaGFwZSA9PT0gXCJuZWVkbGVcIjtcbiAgICBjb25zdCBzbHVnID0gdGhpcy5zaGFwZSA9PT0gXCJzbHVnXCI7XG4gICAgY29uc3Qgc3BlZWQgPSBNYXRoLmh5cG90KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb25YID0gdGhpcy52ZWxvY2l0eVggLyBzcGVlZDtcbiAgICBjb25zdCBkaXJlY3Rpb25ZID0gdGhpcy52ZWxvY2l0eVkgLyBzcGVlZDtcbiAgICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3Rvcih0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpO1xuICAgIGNvbnN0IGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10gPSBbe1xuICAgICAgeDp0aGlzLngtZGlyZWN0aW9uWCp0aGlzLnRyYWlsTGVuZ3RoKi41LHk6dGhpcy55LWRpcmVjdGlvblkqdGhpcy50cmFpbExlbmd0aCouNSxcbiAgICAgIHdpZHRoOnRoaXMudHJhaWxXaWR0aCxoZWlnaHQ6dGhpcy50cmFpbExlbmd0aCxjb2xvcjp0aGlzLnRyYWlsQ29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb2xvcixcbiAgICAgIGdsb3c6dGhpcy5nbG93Ki42LGludGVuc2l0eTp0aGlzLmludGVuc2l0eSouNzIsc2hhcGU6XCJib2x0XCIscm90YXRpb24sXG4gICAgfV07XG4gICAgY29uc3Qgd2lkdGg9c2x1Zz90aGlzLnJhZGl1cyoxLjU6bmVlZGxlP3RoaXMucmFkaXVzKi42NTp0aGlzLnJhZGl1cztcbiAgICBjb25zdCBoZWlnaHQ9c2x1Zz90aGlzLmxlbmd0aCouNzU6dGhpcy5sZW5ndGg7XG4gICAgY29uc3Qgc2lkZVggPSAtZGlyZWN0aW9uWTtcbiAgICBjb25zdCBzaWRlWSA9IGRpcmVjdGlvblg7XG4gICAgY29uc3QgYWRkPShvZmZzZXQ6bnVtYmVyKT0+aXRlbXMucHVzaCh7eDp0aGlzLngrc2lkZVgqb2Zmc2V0LHk6dGhpcy55K3NpZGVZKm9mZnNldCx3aWR0aCxoZWlnaHQsY29sb3I6dGhpcy5jb2xvcixzZWNvbmRhcnlDb2xvcjp0aGlzLmNvcmVDb2xvcixnbG93OnRoaXMuZ2xvdyxpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHksc2hhcGU6bmVlZGxlP1wiY2lyY2xlXCI6XCJib2x0XCIscm90YXRpb259KTtcbiAgICBpZihzcGxpdCl7YWRkKC10aGlzLnJhZGl1cyouNyk7YWRkKHRoaXMucmFkaXVzKi43KX1lbHNlIGFkZCgwKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblZpY3RvcnlPcHRpb25zIHtcbiAgY2VudGVyWDogbnVtYmVyO1xuICBjZW50ZXJZOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBwYXJ0aWNsZUNvdW50PzogbnVtYmVyO1xuICBkdXJhdGlvbk1zPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblZpY3RvcnlFeHBlcmllbmNlIHtcbiAgcmVhZG9ubHkgc3RhcnRlZEF0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgcmVhZG9ubHkgb3B0aW9uczogTmVvblZpY3RvcnlPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25WaWN0b3J5T3B0aW9ucywgc3RhcnRlZEF0ID0gcGVyZm9ybWFuY2Uubm93KCkpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3RhcnRlZEF0ID0gc3RhcnRlZEF0O1xuICAgIHRoaXMuZHVyYXRpb25NcyA9IG9wdGlvbnMuZHVyYXRpb25NcyA/PyA0MjAwO1xuICB9XG5cbiAgZ2V0IGNvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRlZEF0ID49IHRoaXMuZHVyYXRpb25NcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMobm93ID0gcGVyZm9ybWFuY2Uubm93KCkpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLm1heCgwLCBub3cgLSB0aGlzLnN0YXJ0ZWRBdCk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCBlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbk1zKTtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZUNvdW50ID8/IDkwO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtuZW9uUGFsZXR0ZS5jeWFuLCBuZW9uUGFsZXR0ZS5waW5rLCBuZW9uUGFsZXR0ZS5nb2xkLCBuZW9uUGFsZXR0ZS5ncmVlbiwgbmVvblBhbGV0dGUudmlvbGV0LCBuZW9uUGFsZXR0ZS5vcmFuZ2VdO1xuICAgIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc2VlZCA9IGluZGV4ICogOTEuNzM7XG4gICAgICBjb25zdCBkZWxheSA9IChpbmRleCAlIDEyKSAqIDAuMDM1O1xuICAgICAgY29uc3QgbG9jYWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwcm9ncmVzcyAqIDEuMzUgLSBkZWxheSkpO1xuICAgICAgaWYgKGxvY2FsIDw9IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYW5nbGUgPSAoKHNlZWQgJSAzNjApIC8gMTgwKSAqIE1hdGguUEk7XG4gICAgICBjb25zdCBzcGVlZCA9IDAuMjIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDI2MDtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5zaW4oc2VlZCkgKiB0aGlzLm9wdGlvbnMud2lkdGggKiAwLjA2ICogbG9jYWw7XG4gICAgICBjb25zdCB4ID0gdGhpcy5vcHRpb25zLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLm9wdGlvbnMud2lkdGggKiBzcGVlZCAqIGxvY2FsICsgZHJpZnQ7XG4gICAgICBjb25zdCB5ID0gdGhpcy5vcHRpb25zLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLm9wdGlvbnMuaGVpZ2h0ICogc3BlZWQgKiBsb2NhbCArIHRoaXMub3B0aW9ucy5oZWlnaHQgKiAwLjQyICogbG9jYWwgKiBsb2NhbDtcbiAgICAgIGNvbnN0IGZhZGUgPSBNYXRoLm1heCgwLCAxIC0gbG9jYWwgKiAwLjcyKTtcbiAgICAgIGNvbnN0IHNpemUgPSAyLjUgKyAoaW5kZXggJSA1KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHgsIHksXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUgKiAoMS44ICsgaW5kZXggJSAzKSxcbiAgICAgICAgY29sb3I6IGNvbG9yc1tpbmRleCAlIGNvbG9ycy5sZW5ndGhdLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogY29sb3JzWyhpbmRleCArIDIpICUgY29sb3JzLmxlbmd0aF0sXG4gICAgICAgIGdsb3c6IDAuNTUsXG4gICAgICAgIGludGVuc2l0eTogZmFkZSxcbiAgICAgICAgc2hhcGU6IGluZGV4ICUgNCA9PT0gMCA/IFwic3BhcmtcIiA6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiB0aGlzLm9wdGlvbnMuY2VudGVyWCxcbiAgICAgIHk6IHRoaXMub3B0aW9ucy5jZW50ZXJZLFxuICAgICAgd2lkdGg6IDgwICsgcHJvZ3Jlc3MgKiAxODAsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGUuY3lhbixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gICAgICBnbG93OiAwLjU1ICogKDEgLSBwcm9ncmVzcyksXG4gICAgICBpbnRlbnNpdHk6IE1hdGgubWF4KDAsIDEgLSBwcm9ncmVzcyksXG4gICAgICBzaGFwZTogXCJyaW5nXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cbn1cbiIsICJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFtaWx5RGVmaW5pdGlvbjxUTWVtYmVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGZhbWlseUlkOiBzdHJpbmc7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gIGFic3RyYWN0IHJlYWRvbmx5IG1lbWJlcnM6IFRNZW1iZXJzO1xuXG4gIHByb3RlY3RlZCByZXF1aXJlKGNvbmRpdGlvbjogdW5rbm93biwgbWVzc2FnZTogc3RyaW5nKTogYXNzZXJ0cyBjb25kaXRpb24ge1xuICAgIGlmICghY29uZGl0aW9uKSB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy5mYW1pbHlJZH06ICR7bWVzc2FnZX1gKTtcbiAgfVxuXG4gIGFic3RyYWN0IHZhbGlkYXRlKCk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hvdFBhdHRlcm4gPSBcInNpbmdsZVwiIHwgXCJyYXBpZFNpbmdsZVwiIHwgXCJidXJzdFwiIHwgXCJoZWF2eVNpbmdsZVwiIHwgXCJwYWlyZWRTcHJlYWRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVCZWhhdmlvciA9IFwic3RyYWlnaHRcIiB8IFwicGllcmNpbmdTdHJhaWdodFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZVNoYXBlID0gXCJuZWVkbGVcIiB8IFwiZGFydFwiIHwgXCJzbHVnXCIgfCBcInNwbGl0Qm9sdFwiO1xuZXhwb3J0IHR5cGUgTXV6emxlRWZmZWN0ID0gXCJjcmlzcFN0YXJcIiB8IFwicmFwaWRGbGlja2VyXCIgfCBcImdyb3VwZWRQdWxzZVwiIHwgXCJzaG9ja0RpYW1vbmRcIiB8IFwidHdpblByb25nc1wiO1xuZXhwb3J0IHR5cGUgSW1wYWN0RWZmZWN0ID0gXCJwaW5TcGFya1wiIHwgXCJuZWVkbGVTY2F0dGVyXCIgfCBcImJ1cnN0Q3Jvc3NcIiB8IFwiaW1wYWN0UmluZ1wiIHwgXCJzcGxpdFJpcHBsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1bkxldmVsIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZmlyZVJhdGVQZXJTZWNvbmQ6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHByb2plY3RpbGVTcGVlZDogbnVtYmVyO1xuICBwcm9qZWN0aWxlUmFkaXVzOiBudW1iZXI7XG4gIGNvbGxpc2lvblJhZGl1c1NjYWxlPzogbnVtYmVyO1xuICBwcm9qZWN0aWxlQ291bnQ6IG51bWJlcjtcbiAgYnVyc3RDb3VudDogbnVtYmVyO1xuICBidXJzdEludGVydmFsTXM6IG51bWJlcjtcbiAgc3ByZWFkRGVncmVlczogbnVtYmVyO1xuICBwaWVyY2U6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiBudW1iZXI7XG4gIGltcGFjdFJhZGl1cz86IG51bWJlcjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIG11enpsZUZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0Rmxhc2hTY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1blZpc3VhbElkZW50aXR5IHtcbiAgc2lsaG91ZXR0ZTogc3RyaW5nO1xuICBtb3Rpb25MYW5ndWFnZTogc3RyaW5nO1xuICBwcm9qZWN0aWxlU2hhcGU6IFByb2plY3RpbGVTaGFwZTtcbiAgcHJvamVjdGlsZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICB0cmFpbENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHByb2plY3RpbGVBc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBtdXp6bGVFZmZlY3Q6IE11enpsZUVmZmVjdDtcbiAgaW1wYWN0RWZmZWN0OiBJbXBhY3RFZmZlY3Q7XG4gIG11enpsZUR1cmF0aW9uTXM6IG51bWJlcjtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICBob3Jpem9udGFsSml0dGVyOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5NZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiB8IFwiZmlyc3RCdWlsZFwiIHwgXCJwcmVzc3VyZVwiO1xuICBzaG90UGF0dGVybjogU2hvdFBhdHRlcm47XG4gIHByb2plY3RpbGVCZWhhdmlvcjogUHJvamVjdGlsZUJlaGF2aW9yO1xuICB2aXN1YWxJZGVudGl0eTogR3VuVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgR3VuTGV2ZWxbXTtcbn1cblxuY29uc3QgbGV2ZWwgPSAoXG4gIGxldmVsTnVtYmVyOiBudW1iZXIsXG4gIHZhbHVlczogT21pdDxHdW5MZXZlbCwgXCJsZXZlbFwiIHwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiPiAmXG4gICAgUGFydGlhbDxQaWNrPEd1bkxldmVsLCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCIgfCBcImltcGFjdFJhZGl1c1wiPj4sXG4pOiBHdW5MZXZlbCA9PiAoe1xuICBsZXZlbDogbGV2ZWxOdW1iZXIsXG4gIHByb2plY3RpbGVDb3VudDogMSxcbiAgYnVyc3RDb3VudDogMSxcbiAgYnVyc3RJbnRlcnZhbE1zOiAwLFxuICBzcHJlYWREZWdyZWVzOiAwLFxuICBwaWVyY2U6IDAsXG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogMCxcbiAga25vY2tiYWNrOiAwLFxuICAuLi52YWx1ZXMsXG59KTtcblxuZXhwb3J0IGNsYXNzIEd1bkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImd1blwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiR3VuXCI7XG4gIHJlYWRvbmx5IGltcGxlbWVudGF0aW9uID0ge1xuICAgIGF1dG9GaXJlczogdHJ1ZSxcbiAgICB0YXJnZXRpbmc6IFwibGFuZUZvcndhcmRcIixcbiAgICBwcm9qZWN0aWxlTW9kZWw6IFwia2luZW1hdGljXCIsXG4gICAgY29sbGlzaW9uTW9kZWw6IFwiY2lyY2xlVnNFbmVteVwiLFxuICAgIGFsbG93ZWRTaG90UGF0dGVybnM6IFtcInNpbmdsZVwiLCBcInJhcGlkU2luZ2xlXCIsIFwiYnVyc3RcIiwgXCJoZWF2eVNpbmdsZVwiLCBcInBhaXJlZFNwcmVhZFwiXSBzYXRpc2ZpZXMgU2hvdFBhdHRlcm5bXSxcbiAgICBhbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9yczogW1wic3RyYWlnaHRcIiwgXCJwaWVyY2luZ1N0cmFpZ2h0XCJdIHNhdGlzZmllcyBQcm9qZWN0aWxlQmVoYXZpb3JbXSxcbiAgfSBhcyBjb25zdDtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHB1bHNlUGlzdG9sOiB7XG4gICAgICBsYWJlbDogXCJQdWxzZSBQaXN0b2xcIiwgcmFyaXR5OiBcInN0YXJ0ZXJcIiwgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiwgc2hvdFBhdHRlcm46IFwic2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJ0aW55QnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImNsZWFuU2luZ2xlU2hvdFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiY3lhblwiLCB0cmFpbENvbG9yOiBcImRlZXBCbHVlXCIsIGNvcmVDb2xvcjogXCJjeWFuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuOCwgdHJhaWxXaWR0aFNjYWxlOiAwLjY1LCB2aXN1YWxJbnRlbnNpdHk6IDAuOSwgbXV6emxlRWZmZWN0OiBcImNyaXNwU3RhclwiLCBpbXBhY3RFZmZlY3Q6IFwicGluU3BhcmtcIiwgbXV6emxlRHVyYXRpb25NczogNzIsIGltcGFjdER1cmF0aW9uTXM6IDEwNSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOjEscHJvamVjdGlsZVNwZWVkOjU0MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS43NSxkYW1hZ2U6MS4xNSxwcm9qZWN0aWxlU3BlZWQ6NTgwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljh9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi4xNSxkYW1hZ2U6MS4zNSxwcm9qZWN0aWxlU3BlZWQ6NjIwLHByb2plY3RpbGVSYWRpdXM6My4yNSx0cmFpbExlbmd0aDoxOCxtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi45fSksXG4gICAgICAgIGxldmVsKDQse2ZpcmVSYXRlUGVyU2Vjb25kOjIuNDUsZGFtYWdlOjEuNSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6My4zNSx0cmFpbExlbmd0aDoxOSxtdXp6bGVGbGFzaFNjYWxlOi44LGhpdEZsYXNoU2NhbGU6Ljk1fSksXG4gICAgICAgIGxldmVsKDUse2ZpcmVSYXRlUGVyU2Vjb25kOjIuNzUsZGFtYWdlOjEuNjUscHJvamVjdGlsZVNwZWVkOjY4MCxwcm9qZWN0aWxlUmFkaXVzOjMuNSx0cmFpbExlbmd0aDoyMCxtdXp6bGVGbGFzaFNjYWxlOi44NSxoaXRGbGFzaFNjYWxlOjF9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBuZWVkbGVyU21nOiB7XG4gICAgICBsYWJlbDogXCJOZWVkbGVyIFNNR1wiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwicmFwaWRTaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNwcmF5U3BoZXJlXCIsIG1vdGlvbkxhbmd1YWdlOiBcInN0b2NoYXN0aWNOZWVkbGVTcHJheVwiLCBwcm9qZWN0aWxlU2hhcGU6IFwibmVlZGxlXCIsIHByb2plY3RpbGVDb2xvcjogXCJncmVlblwiLCB0cmFpbENvbG9yOiBcImN5YW5cIiwgY29yZUNvbG9yOiBcImdyZWVuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDEsIHRyYWlsV2lkdGhTY2FsZTogMC4yOCwgdmlzdWFsSW50ZW5zaXR5OiAwLjc4LCBtdXp6bGVFZmZlY3Q6IFwicmFwaWRGbGlja2VyXCIsIGltcGFjdEVmZmVjdDogXCJuZWVkbGVTY2F0dGVyXCIsIG11enpsZUR1cmF0aW9uTXM6IDQ2LCBpbXBhY3REdXJhdGlvbk1zOiA4NSwgaG9yaXpvbnRhbEppdHRlcjogNyB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjUuMjUsZGFtYWdlOi40Mixwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTAsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouMzUsaGl0Rmxhc2hTY2FsZTouNDV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6Ny4yNSxkYW1hZ2U6LjQ4LHByb2plY3RpbGVTcGVlZDo3MzUscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MS41LHRyYWlsTGVuZ3RoOjExLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjQsaGl0Rmxhc2hTY2FsZTouNX0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDo5LjI1LGRhbWFnZTouNTQscHJvamVjdGlsZVNwZWVkOjc4MCxwcm9qZWN0aWxlUmFkaXVzOjIuMTUsc3ByZWFkRGVncmVlczoyLHRyYWlsTGVuZ3RoOjEyLHRyYWNlckV2ZXJ5TnRoU2hvdDo0LG11enpsZUZsYXNoU2NhbGU6LjQ1LGhpdEZsYXNoU2NhbGU6LjU1fSksXG4gICAgICAgIGxldmVsKDQse2ZpcmVSYXRlUGVyU2Vjb25kOjEwLjc1LGRhbWFnZTouNTkscHJvamVjdGlsZVNwZWVkOjgxNSxwcm9qZWN0aWxlUmFkaXVzOjIuMixzcHJlYWREZWdyZWVzOjIuMjUsdHJhaWxMZW5ndGg6MTMsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNSxoaXRGbGFzaFNjYWxlOi42fSksXG4gICAgICAgIGxldmVsKDUse2ZpcmVSYXRlUGVyU2Vjb25kOjEyLjI1LGRhbWFnZTouNjQscHJvamVjdGlsZVNwZWVkOjg1MCxwcm9qZWN0aWxlUmFkaXVzOjIuMjUsc3ByZWFkRGVncmVlczoyLjUsdHJhaWxMZW5ndGg6MTQsdHJhY2VyRXZlcnlOdGhTaG90OjMsbXV6emxlRmxhc2hTY2FsZTouNTUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4yOCxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NzYwLHByb2plY3RpbGVSYWRpdXM6My4wNSxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU0LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxOCxtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6LjgyfSksXG4gICAgICAgIGxldmVsKDUse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzgsZGFtYWdlOjEuMDgscHJvamVjdGlsZVNwZWVkOjc5NSxwcm9qZWN0aWxlUmFkaXVzOjMuMSxidXJzdENvdW50OjUsYnVyc3RJbnRlcnZhbE1zOjUwLHNwcmVhZERlZ3JlZXM6MS4xNSx0cmFpbExlbmd0aDoxOSxtdXp6bGVGbGFzaFNjYWxlOi43OCxoaXRGbGFzaFNjYWxlOi45fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgaGVhdnlDYW5ub246IHtcbiAgICAgIGxhYmVsOiBcIkhlYXZ5IENhbm5vblwiLCByYXJpdHk6IFwidW5jb21tb25cIiwgdW5sb2NrUGhhc2U6IFwicHJlc3N1cmVcIiwgc2hvdFBhdHRlcm46IFwiaGVhdnlTaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInBpZXJjaW5nU3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwiY2h1bmt5Qm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJzbG93SGVhdnlQdW5jaFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwic2x1Z1wiLCBwcm9qZWN0aWxlQ29sb3I6IFwib3JhbmdlXCIsIHRyYWlsQ29sb3I6IFwicmVkXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDEuMzUsIHRyYWlsV2lkdGhTY2FsZTogMS4zNSwgdmlzdWFsSW50ZW5zaXR5OiAxLjIsIG11enpsZUVmZmVjdDogXCJzaG9ja0RpYW1vbmRcIiwgaW1wYWN0RWZmZWN0OiBcImltcGFjdFJpbmdcIiwgbXV6emxlRHVyYXRpb25NczogMTM1LCBpbXBhY3REdXJhdGlvbk1zOiAxOTAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouNzIsZGFtYWdlOjIuNCxwcm9qZWN0aWxlU3BlZWQ6NTAwLHByb2plY3RpbGVSYWRpdXM6NC41LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjIyLGltcGFjdFJhZGl1czoxNCxrbm9ja2JhY2s6MTQsbXV6emxlRmxhc2hTY2FsZToxLjEsaGl0Rmxhc2hTY2FsZToxLjI1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOi44MixkYW1hZ2U6Myxwcm9qZWN0aWxlU3BlZWQ6NTM1LHByb2plY3RpbGVSYWRpdXM6NC43NSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyNCxpbXBhY3RSYWRpdXM6MTYsa25vY2tiYWNrOjE4LG11enpsZUZsYXNoU2NhbGU6MS4yLGhpdEZsYXNoU2NhbGU6MS4zNX0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDouOSxkYW1hZ2U6My42LHByb2plY3RpbGVTcGVlZDo1NzAscHJvamVjdGlsZVJhZGl1czo1LHBpZXJjZToyLHRyYWlsTGVuZ3RoOjI2LGltcGFjdFJhZGl1czoxOCxrbm9ja2JhY2s6MjIsbXV6emxlRmxhc2hTY2FsZToxLjMsaGl0Rmxhc2hTY2FsZToxLjV9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk4LGRhbWFnZTo0LjEscHJvamVjdGlsZVNwZWVkOjYwMCxwcm9qZWN0aWxlUmFkaXVzOjUuMixwaWVyY2U6Mix0cmFpbExlbmd0aDoyOCxpbXBhY3RSYWRpdXM6MjAsa25vY2tiYWNrOjI2LG11enpsZUZsYXNoU2NhbGU6MS40LGhpdEZsYXNoU2NhbGU6MS42Mn0pLFxuICAgICAgICBsZXZlbCg1LHtmaXJlUmF0ZVBlclNlY29uZDoxLjA1LGRhbWFnZTo0LjYscHJvamVjdGlsZVNwZWVkOjYzMCxwcm9qZWN0aWxlUmFkaXVzOjUuNCxwaWVyY2U6Myx0cmFpbExlbmd0aDozMCxpbXBhY3RSYWRpdXM6MjIsa25vY2tiYWNrOjMwLG11enpsZUZsYXNoU2NhbGU6MS41LGhpdEZsYXNoU2NhbGU6MS43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LGNvbGxpc2lvblJhZGl1c1NjYWxlOjEuODUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczoyLjUsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6Ljk1LHByb2plY3RpbGVTcGVlZDo2MjUscHJvamVjdGlsZVJhZGl1czoyLjg1LGNvbGxpc2lvblJhZGl1c1NjYWxlOjEuODUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjUsZGFtYWdlOjEscHJvamVjdGlsZVNwZWVkOjY2MCxwcm9qZWN0aWxlUmFkaXVzOjIuOTUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS45LHByb2plY3RpbGVDb3VudDozLHNwcmVhZERlZ3JlZXM6NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43OCxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDoxLjcsZGFtYWdlOjEuMTIscHJvamVjdGlsZVNwZWVkOjcwMCxwcm9qZWN0aWxlUmFkaXVzOjMuMDUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS45LHByb2plY3RpbGVDb3VudDozLHNwcmVhZERlZ3JlZXM6NS41LHRyYWlsTGVuZ3RoOjE3LG11enpsZUZsYXNoU2NhbGU6Ljg0LGhpdEZsYXNoU2NhbGU6LjgyfSksXG4gICAgICAgIGxldmVsKDUse2ZpcmVSYXRlUGVyU2Vjb25kOjEuODUsZGFtYWdlOjEuMixwcm9qZWN0aWxlU3BlZWQ6NzM1LHByb2plY3RpbGVSYWRpdXM6My4xLGNvbGxpc2lvblJhZGl1c1NjYWxlOjEuOTUscHJvamVjdGlsZUNvdW50OjQsc3ByZWFkRGVncmVlczo2LjI1LHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6LjkyLGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLmxldmVscy5sZW5ndGggPT09IDUsIGAke2lkfSBtdXN0IGRlZmluZSBleGFjdGx5IGZpdmUgbGV2ZWxzLmApO1xuICAgICAgZm9yIChjb25zdCB0dW5pbmcgb2YgZ3VuLmxldmVscykge1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmZpcmVSYXRlUGVyU2Vjb25kID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBmaXJlIHJhdGUgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5kYW1hZ2UgPiAwICYmIHR1bmluZy5wcm9qZWN0aWxlU3BlZWQgPiAwICYmIHR1bmluZy5wcm9qZWN0aWxlUmFkaXVzID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBwcm9qZWN0aWxlIHBvd2VyLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmNvbGxpc2lvblJhZGl1c1NjYWxlID09PSB1bmRlZmluZWQgfHwgdHVuaW5nLmNvbGxpc2lvblJhZGl1c1NjYWxlID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gY29sbGlzaW9uIHJhZGl1cyBzY2FsZSBjYW5ub3Qgc2hyaW5rIGNvbGxpc2lvbi5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5idXJzdENvdW50ID49IDEgJiYgdHVuaW5nLnByb2plY3RpbGVDb3VudCA+PSAxLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIGNvdW50cy5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGd1bkZhbWlseSA9IG5ldyBHdW5GYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBHdW5JZCA9IGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15U3Bhd25FbnRyYW5jZSA9IFwic2NhdHRlclwiIHwgXCJmYWRlXCI7XG5leHBvcnQgdHlwZSBFbmVteURlYXRoVmlzdWFsID0gXCJjbG91ZFwiIHwgXCJub25lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JiTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaGVhbHRoOiBudW1iZXI7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgYmFzZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICByaW1Db2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhZG93Q29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYXBlSWQ6IHN0cmluZztcbiAgZ2xvdzogbnVtYmVyO1xuICBzdXJmYWNlVGV4dHVyZTogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgaGl0Rmxhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGRlYXRoRmxhc2hTY2FsZTogbnVtYmVyO1xuICBzaGFwZVpvb206IG51bWJlcjtcbiAgaW1wYWN0UmVzaXN0YW5jZTogbnVtYmVyO1xuICBleHBsb3Npb25NYWduaXR1ZGU6IG51bWJlcjtcbiAgc3Bhd25FbnRyYW5jZTogRW5lbXlTcGF3bkVudHJhbmNlO1xuICBzcGF3blNvdW5kOiBzdHJpbmcgfCBudWxsO1xuICBkZWF0aFNvdW5kOiBzdHJpbmc7XG4gIGRlYXRoVmlzdWFsOiBFbmVteURlYXRoVmlzdWFsO1xufVxuXG5leHBvcnQgY2xhc3MgT3JiRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwib3JiXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJPcmIgRW5lbXlcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBiYXNpY09yYjoge1xuICAgICAgbGFiZWw6IFwiQmFzaWMgT3JiXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxMCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJodW50ZXItZXllXCIsXG4gICAgICBnbG93OiAwLjgyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IDAuMjgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMjUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogMC43MixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogOTAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuOCxcbiAgICAgIHNoYXBlWm9vbTogMy40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkVuZW15U3Bhd25cIixcbiAgICAgIGRlYXRoU291bmQ6IFwiRW5lbXlEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgICBnbGFzc1NoaWVsZDoge1xuICAgICAgbGFiZWw6IFwiR2xhc3MgU2hpZWxkXCIsXG4gICAgICBoZWFsdGg6IC4xLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA1LjYsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogLjEsXG4gICAgICBzY29yZTogMyxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0cmljay1nYXRlXCIsXG4gICAgICBnbG93OiAuNjIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjEyLFxuICAgICAgcmltSW50ZW5zaXR5OiAwLjksXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjQ1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA3MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS4xLFxuICAgICAgc2hhcGVab29tOiAzLjA1LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogLjY1LFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuMjUsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcImZhZGVcIixcbiAgICAgIHNwYXduU291bmQ6IG51bGwsXG4gICAgICBkZWF0aFNvdW5kOiBcIkdsYXNzU2hpZWxkU2hhdHRlclwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgd2luZ2VyOiB7XG4gICAgICBsYWJlbDogXCJXaW5nZXJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA3NixcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDE0LFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcImVsaXRlLXdpbmdzXCIsXG4gICAgICBnbG93OiAuODYsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjIyLFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjIsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjY2LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA4NSxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS43NSxcbiAgICAgIHNoYXBlWm9vbTogMy4yNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgdGFuazoge1xuICAgICAgbGFiZWw6IFwiVGFua1wiLFxuICAgICAgaGVhbHRoOiA2LFxuICAgICAgc3BlZWQ6IDQ0LFxuICAgICAgcmFkaXVzOiAxNixcbiAgICAgIGNvbHVtblNwYW46IDMsXG4gICAgICBjb250YWN0RGFtYWdlOiAyLFxuICAgICAgc2NvcmU6IDgwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRhbmstYnVua2VyXCIsXG4gICAgICBnbG93OiAxLjA1LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS40NSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuODUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMi43LFxuICAgICAgc2hhcGVab29tOiA0LjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAyLjEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC45LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkJvc3NcIixcbiAgICAgIGRlYXRoU291bmQ6IFwiQm9zc0Rlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKG9yYi5jb2x1bW5TcGFuKSAmJiBvcmIuY29sdW1uU3BhbiA+PSAxLCBgJHtpZH0gY29sdW1uU3BhbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBsZXZlbCA1IGRhbWFnZSBwZXIgaGl0LlxuICAgKlxuICAgKiBMZXZlbCAxIHVzZXMgZGFtYWdlLCBsZXZlbCA1IHVzZXMgZGFtYWdlQXRMZXZlbDUsIGFuZCBpbnRlcm1lZGlhdGUgbGV2ZWxzXG4gICAqIGludGVycG9sYXRlLiBVc2UgdGhpcyB3aGVuIGR1cGxpY2F0ZSBwaWNrdXBzIHNob3VsZCBpbmNyZWFzZSB0b3RhbCBIUFxuICAgKiBjbGVhcmVkIHdpdGhvdXQgY2hhbmdpbmcgcHJveGltaXR5IHJ1bGVzLlxuICAgKi9cbiAgZGFtYWdlQXRMZXZlbDU/OiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gbm90IGZpcmUgb24gYSB0aW1lcjsgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgdmVydGljYWwgcmVhY2ggaW4gYXV0aG9yZWQgdHJhY2sgcm93cy5cbiAgICpcbiAgICogSGVhdnkgc3dlZXBpbmcgc3dvcmRzIGNhbiB1c2UgdGhpcyB3aXRoIHJlcGVhdGVkIHBpY2t1cHM6IGxldmVsIDEgdXNlc1xuICAgKiBsZXZlbDEgcm93cywgbGV2ZWwgNSB1c2VzIGxldmVsNSByb3dzLCBhbmQgaW50ZXJtZWRpYXRlIGxldmVscyBpbnRlcnBvbGF0ZS5cbiAgICogVGhpcyBleHBhbmRzIGFmZmVjdGVkIHJvd3MgYWZ0ZXIgYSBjbG9zZSB0YXJnZXQgaXMgZm91bmQ7IGl0IGRvZXMgbm90XG4gICAqIGxvb3NlbiB0aGUgbmVhci1wbGF5ZXIgcHJveGltaXR5IHRocmVzaG9sZC5cbiAgICovXG4gIHJvd1JlYWNoPzoge1xuICAgIGxldmVsMTogbnVtYmVyO1xuICAgIGxldmVsNTogbnVtYmVyO1xuICB9O1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lOyBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIG5vdCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBSZXBlYXRlZCBwaWNrdXBzIG9mIHRoZSBzYW1lIHN3b3JkIGluY3JlYXNlIHRoYXQgc3dvcmQncyBhY3RpdmUgbGV2ZWwuXG4gICAqIC0gQ2FuIGNvZXhpc3Qgd2l0aCBhbiBhY3RpdmUgR3VuIGFuZCBhbiBhY3RpdmUgU2hpZWxkIHNpbXVsdGFuZW91c2x5LlxuICAgKiAtIFRhcmdldGluZyBpcyBsYW5lLWF3YXJlIHZpYSBxdWVyeU5lYXJieVRocmVhdHMoKS5cbiAgICogLSBUaGUgc2xhc2ggYW5pbWF0aW9uIHJ1bnMgZm9yIHNsYXNoRHVyYXRpb25NcyBtaWxsaXNlY29uZHMsIHRoZW4gZmFkZXMuXG4gICAqIC0gRGFtYWdlIGlzIGFwcGxpZWQgaW1tZWRpYXRlbHkgd2hlbiB0aGUgc3dpbmcgc3RhcnRzIChub3QgYXQgYW5pbWF0aW9uIGVuZCkuXG4gICAqXG4gICAqIFByZWNlZGVuY2U6IHN3b3JkIGF0dGFja3Mgb2NjdXIgYWZ0ZXIgc2hpZWxkQmxvY2svc2hpZWxkUHVsc2UgYnV0IGJlZm9yZVxuICAgKiBzaGllbGRDb250YWN0RGFtYWdlIGFuZCBzaGllbGRBdXJhLiBTZWUgbWFpbi50cyBuZWFyUGxheWVyRWZmZWN0T3JkZXIuXG4gICAqL1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIC8qKlxuICAgICAqIEFyYyBCbGFkZSAtIENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogU2hvcnQgY29vbGRvd24gbWFrZXMgaXQgdXNlZnVsIGFnYWluc3QgZGVuc2Ugc2luZ2xlLWxhbmUgd2F2ZXMuXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC41NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwLTE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgLSBIZWF2eSBzd29yZC4gU2xvd2VyLCBidXQgc3dlZXBzIGFjcm9zcyBldmVyeSBjb2x1bW4uXG4gICAgICogU3RhcnRzIHdpdGggMiByb3dzIG9mIHZlcnRpY2FsIHJlYWNoIGFuZCBzY2FsZXMgdG8gNCByb3dzIGF0IGxldmVsIDUuXG4gICAgICovXG4gICAgY2xlYXZlcjoge1xuICAgICAgbGFiZWw6IFwiQ2xlYXZlclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICByYW5nZTogNjgsXG4gICAgICBhcmNEZWdyZWVzOiAzNjAsXG4gICAgICBkYW1hZ2U6IDIuNCxcbiAgICAgIGRhbWFnZUF0TGV2ZWw1OiAzLjQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMzUsXG4gICAgICBtYXhUYXJnZXRzOiAxMixcbiAgICAgIHJvd1JlYWNoOiB7IGxldmVsMTogMiwgbGV2ZWw1OiA0IH0sXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMjYwLFxuICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS45LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbGwtY29sdW1uIHN3ZWVwLiBSZXBlYXRlZCBjbGVhdmVyIHBpY2t1cHMgbGV2ZWwgaXQgdXAgZnJvbSAyIHJvd3Mgb2YgcmVhY2ggdG8gNCByb3dzIGF0IGxldmVsIDUsIHdpdGggbW9yZSB0b3RhbCBkYW1hZ2UgcGVyIHN3aW5nLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSBhcyBBcnJheTxbc3RyaW5nLCBTd29yZE1lbWJlcl0+KSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQucmFuZ2UgPiAwLCBgJHtpZH0gcmFuZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5hcmNEZWdyZWVzID4gMCAmJiBzd29yZC5hcmNEZWdyZWVzIDw9IDM2MCwgYCR7aWR9IGFyY0RlZ3JlZXMgbXVzdCBiZSBpbiAoMCwgMzYwXS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2UgPiAwLCBgJHtpZH0gZGFtYWdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICBpZiAoc3dvcmQuZGFtYWdlQXRMZXZlbDUgIT09IHVuZGVmaW5lZCkgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ID49IHN3b3JkLmRhbWFnZSwgYCR7aWR9IGRhbWFnZUF0TGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgZGFtYWdlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIGlmIChzd29yZC5yb3dSZWFjaCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDEpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsMSA+PSAxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWwxIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDUpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsNSA+PSBzd29yZC5yb3dSZWFjaC5sZXZlbDEsIGAke2lkfSByb3dSZWFjaC5sZXZlbDUgbXVzdCBiZSBhdCBsZWFzdCBsZXZlbDEuYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGVnZW5kRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0JhbGFuY2Uge1xuICBlbmVteUhwOiBudW1iZXI7XG4gIGVuZW15U3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RlZmluaXRpb24ge1xuICBsYXlvdXQ6IHN0cmluZztcbiAgbGVnZW5kOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBUcmFja0xlZ2VuZEVudHJ5Pj47XG4gIGJhbGFuY2U6IFRyYWNrQmFsYW5jZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja01lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGRlZmluaXRpb246IFRyYWNrRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0ZhbWlseU1lbWJlcjxUcmFja0lkIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIHRyYWNrSWRzOiByZWFkb25seSBUcmFja0lkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkVHJhY2tFbnRpdHkge1xuICBpZDogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG4gIGxhbmVJbmRleDogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIHJvd0luZGV4OiBudW1iZXI7XG4gIGRpc3RhbmNlRnJvbVBsYXllcjogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuY29uc3QgaXNFbmVteSA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PiBpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpO1xuY29uc3QgZW5lbXlJZEZyb21UcmFja0lkID0gKGlkOiBzdHJpbmcpOiBPcmJJZCB8IG51bGwgPT4ge1xuICBpZiAoaWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY2FuZGlkYXRlID0gaWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xuICByZXR1cm4gY2FuZGlkYXRlIGluIG9yYkZhbWlseS5tZW1iZXJzID8gY2FuZGlkYXRlIGFzIE9yYklkIDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlVHJhY2tSb3dzKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgc291cmNlSW5kZXg6IG51bWJlciB9PiB7XG4gIGNvbnN0IHJvd3MgPSB0cmFjay5sYXlvdXRcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKHRleHQsIHNvdXJjZUluZGV4KSA9PiAoeyB0ZXh0OiB0ZXh0LnRyaW0oKSwgc291cmNlSW5kZXg6IHNvdXJjZUluZGV4ICsgMSB9KSlcbiAgICAuZmlsdGVyKHJvdyA9PiByb3cudGV4dC5sZW5ndGggPiAwKTtcblxuICBpZiAocm93cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxheW91dCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJvdy5cIik7XG4gIHJldHVybiByb3dzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IFBhcnNlZFRyYWNrRW50aXR5W10ge1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGZvciAoY29uc3QgW3N5bWJvbCwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKHRyYWNrLmxlZ2VuZCkpIHtcbiAgICBpZiAoWy4uLnN5bWJvbF0ubGVuZ3RoICE9PSAxIHx8IC9cXHN8XFx8Ly50ZXN0KHN5bWJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIGtleSBcIiR7c3ltYm9sfVwiIG11c3QgYmUgb25lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBvdGhlciB0aGFuIFwifFwiLmApO1xuICAgIH1cbiAgICBpZiAoIWVudHJ5LmlkKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBtdXN0IGhhdmUgYW4gaWQuYCk7XG4gICAgaWYgKGVudHJ5LnNwZWVkICE9PSB1bmRlZmluZWQgJiYgZW50cnkuc3BlZWQgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb3dzID0gcGFyc2VUcmFja1Jvd3ModHJhY2spO1xuICBsZXQgbGVmdFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxldCByaWdodFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG5cbiAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgcGlwZUNvdW50ID0gWy4uLnJvdy50ZXh0XS5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3RlciA9PT0gXCJ8XCIpLmxlbmd0aDtcbiAgICBpZiAocGlwZUNvdW50ICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgXCJ8XCIgc2VwYXJhdG9yOyBmb3VuZCAke3BpcGVDb3VudH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHJvdy50ZXh0LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgbGVmdFdpZHRoID8/PSBsZWZ0Lmxlbmd0aDtcbiAgICByaWdodFdpZHRoID8/PSByaWdodC5sZW5ndGg7XG5cbiAgICBpZiAobGVmdC5sZW5ndGggIT09IGxlZnRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIGxlZnQgd2lkdGggJHtsZWZ0Lmxlbmd0aH07IGV4cGVjdGVkICR7bGVmdFdpZHRofS5gKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0Lmxlbmd0aCAhPT0gcmlnaHRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIHJpZ2h0IHdpZHRoICR7cmlnaHQubGVuZ3RofTsgZXhwZWN0ZWQgJHtyaWdodFdpZHRofS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0YW5jZUZyb21QbGF5ZXIgPSByb3dzLmxlbmd0aCAtIDEgLSByb3dJbmRleDtcbiAgICBmb3IgKGNvbnN0IFtzaWRlLCBsYW5lXSBvZiBbW1wibGVmdFwiLCBsZWZ0XSwgW1wicmlnaHRcIiwgcmlnaHRdXSBhcyBjb25zdCkge1xuICAgICAgY29uc3Qgb2NjdXBpZWRCeSA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoZW50cnkuaWQpO1xuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gZW5lbXlJZCA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdLmNvbHVtblNwYW4gOiAxO1xuICAgICAgICBpZiAobGFuZUluZGV4ICsgY29sdW1uU3BhbiA+IGxhbmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBuZWVkcyAke2NvbHVtblNwYW59IGNvbHVtbnMgYW5kIG9ubHkgJHtsYW5lLmxlbmd0aCAtIGxhbmVJbmRleH0gcmVtYWluLmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSB7XG4gICAgICAgICAgY29uc3Qgb2NjdXBpZWQgPSBvY2N1cGllZEJ5LmdldChsYW5lSW5kZXggKyBvZmZzZXQpO1xuICAgICAgICAgIGlmIChvY2N1cGllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IG9uICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleCArIG9mZnNldH0sIGFscmVhZHkgb2NjdXBpZWQgYnkgJHtvY2N1cGllZH0uYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSBvY2N1cGllZEJ5LnNldChsYW5lSW5kZXggKyBvZmZzZXQsIGVudHJ5LmlkKTtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIGNvbHVtblNwYW4sXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZGlzdGFuY2VGcm9tUGxheWVyLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogKGVudHJ5LnNwZWVkID8/IDEpICogKGlzRW5lbXkoZW50cnkuaWQpID8gdHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDogMSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRpZXMuc29ydCgoYSwgYikgPT5cbiAgICBhLmRpc3RhbmNlRnJvbVBsYXllciAtIGIuZGlzdGFuY2VGcm9tUGxheWVyIHx8XG4gICAgYS5yb3dJbmRleCAtIGIucm93SW5kZXggfHxcbiAgICBhLnNpZGUubG9jYWxlQ29tcGFyZShiLnNpZGUpIHx8XG4gICAgYS5sYW5lSW5kZXggLSBiLmxhbmVJbmRleCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgZ3VuRmFtaWx5IH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4vTXVsdGlwbGllckZhbWlseVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5IH0gZnJvbSBcIi4vT3JiRmFtaWx5XCI7XG5pbXBvcnQgeyBzaGllbGRGYW1pbHkgfSBmcm9tIFwiLi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB7IHN3b3JkRmFtaWx5IH0gZnJvbSBcIi4vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uLCB0eXBlIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbi8qKlxuICogR2xvYmFsIDAtYmFzZWQgY29sdW1uIGluZGV4IGFjcm9zcyBib3RoIGxhbmVzLlxuICpcbiAqIEN1cnJlbnQgbGF5b3V0IHNoYXBlOlxuICogLSBjb2x1bW5zIDAtNCBhcmUgdGhlIGxlZnQgbGFuZVxuICogLSBjb2x1bW5zIDUtOSBhcmUgdGhlIHJpZ2h0IGxhbmVcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC0gMiA9IGxlZnQgbGFuZSBtaWRkbGVcbiAqIC0gNyA9IHJpZ2h0IGxhbmUgbWlkZGxlXG4gKi9cbmV4cG9ydCB0eXBlIFRyYWNrQ29sdW1uID0gbnVtYmVyO1xuXG4vKipcbiAqIEZyaWVuZGx5IGNvbHVtbiBjb25zdGFudHMgZm9yIHRoZSBjdXJyZW50IDItbGFuZSAvIDUtY29sdW1uIHRyYWNrIGZvcm1hdC5cbiAqXG4gKiBUaGVzZSBhcmUgb25seSBzdWdhci4gVGhlIGJ1aWxkZXIgc3RpbGwgYWNjZXB0cyByYXcgbnVtYmVycyBmb3IgZmFzdCBhdXRob3JpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tDb2x1bW5zIHtcbiAgcmVhZG9ubHkgbGVmdDoge1xuICAgIHJlYWRvbmx5IG91dGVyOiAwO1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogMTtcbiAgICByZWFkb25seSBtaWQ6IDI7XG4gICAgcmVhZG9ubHkgbmVhcklubmVyOiAzO1xuICAgIHJlYWRvbmx5IGlubmVyOiA0O1xuICB9O1xuICByZWFkb25seSByaWdodDoge1xuICAgIHJlYWRvbmx5IGlubmVyOiA1O1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogNjtcbiAgICByZWFkb25seSBtaWQ6IDc7XG4gICAgcmVhZG9ubHkgbmVhck91dGVyOiA4O1xuICAgIHJlYWRvbmx5IG91dGVyOiA5O1xuICB9O1xufVxuXG4vKipcbiAqIENvbW1vbiBleHBvcnRlZCBjb2x1bW4gY29uc3RhbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqIGJ1aWxkZXIuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KVxuICogYnVpbGRlci53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGM6IFRyYWNrQ29sdW1ucyA9IHtcbiAgbGVmdDogeyBvdXRlcjogMCwgbmVhck91dGVyOiAxLCBtaWQ6IDIsIG5lYXJJbm5lcjogMywgaW5uZXI6IDQgfSxcbiAgcmlnaHQ6IHsgaW5uZXI6IDUsIG5lYXJJbm5lcjogNiwgbWlkOiA3LCBuZWFyT3V0ZXI6IDgsIG91dGVyOiA5IH0sXG59O1xuXG5leHBvcnQgdHlwZSBUcmFja0VuZW15UmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tXZWFwb25SZWYgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBUcmFja1BpY2t1cFJlZiA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1BsYWNlbWVudE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICAvKipcbiAgICogT3B0aW9uYWwgcGVyLXN5bWJvbCBzcGVlZCBtdWx0aXBsaWVyIGVtaXR0ZWQgaW50byB0aGUgdHJhY2sgbGVnZW5kLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFRoZSBkZWZhdWx0IGlzIDEsIGFuZCBmdXR1cmUgdHJhY2sgZWRpdHNcbiAgICogc2hvdWxkIHByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseSBhc2tzIGZvciBzcGVlZCB0dW5pbmcuXG4gICAqIENoYW5naW5nIHRoaXMgdmFsdWUgaXMgYSBzaWduaWZpY2FudCBiYWxhbmNlIGNoYW5nZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGluZU9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyB7XG4gIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW107XG4gIGNvdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbXB0eSByb3dzIGJldHdlZW4gZWFjaCBlbmVteS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMC4gSW4gcHJlc3N1cmUgc2VjdGlvbnMsIG9taXQgdGhpcyB1bmxlc3MgdGhlIGdhcCBpc1xuICAgKiBpbnRlbnRpb25hbDsgcHJlc3N1cmUgc2hvdWxkIG5vcm1hbGx5IHBsYWNlIGVuZW1pZXMgZXZlcnkgcm93LlxuICAgKi9cbiAgZ2FwPzogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgcmVwZWF0ZWQgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrV2FsbE9wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgd2FsbC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRHJpcE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICByb3dzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQbGFjZSBvbmUgZW5lbXkgZXZlcnkgTiByb3dzLlxuICAgKlxuICAgKiBEcmlwIGlzIGludGVudGlvbmFsbHkgc3BhcnNlLiBQcmVmZXIgbGluZS9hbHRlcm5hdGluZyB3aXRob3V0IGEgZ2FwIGZvclxuICAgKiBub3JtYWwgcHJlc3N1cmUsIGFuZCB1c2UgZHJpcCBvbmx5IHdoZW4gdGhlIHNwYXJzZSBjYWRlbmNlIGlzIGRlbGliZXJhdGUuXG4gICAqL1xuICBldmVyeTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgZHJpcCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgYmFsYW5jZToge1xuICAgIGVuZW15SHA6IG51bWJlcjtcbiAgICBlbmVteVNwZWVkOiBudW1iZXI7XG4gIH07XG4gIHBsYXllclN0YXJ0Q29sdW1uPzogVHJhY2tDb2x1bW47XG4gIGxhbmVXaWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXIge1xuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWR2YW5jZVJvd3Mocm93czogbnVtYmVyKTogVHJhY2tCdWlsZGVyO1xuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICAvKipcbiAgICogQWRkIGEgZGFuZ2VyLWZvY3VzZWQgc2VjdGlvbiB3aXRoIGEgZml4ZWQgZHVyYXRpb24uXG4gICAqXG4gICAqIFByZXNzdXJlIHNob3VsZCB1c3VhbGx5IGNvbnRhaW4gZW5lbXkgcGxhY2VtZW50IGV2ZXJ5IHJvdy4gVXNlIGV4cGxpY2l0XG4gICAqIGdhcHMgb3IgZHJpcCBwYXR0ZXJucyBvbmx5IHdoZW4gdGhlIHF1aWV0IHNwYWNlIGlzIGludGVudGlvbmFsLlxuICAgKi9cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBidWlsZCgpOiBUcmFja01lbWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJGYWN0b3J5IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG59XG5cbmludGVyZmFjZSBQbGFjZW1lbnQge1xuICByb3c6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHNwYW46IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdExhbmVXaWR0aCA9IDU7XG5jb25zdCBlbXB0eVN5bWJvbCA9IFwiLlwiO1xuY29uc3QgcGxheWVyU3ltYm9sID0gXCJNXCI7XG5jb25zdCBlbmVteUFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBiYXNpYzogXCJlbmVteS5iYXNpY1wiLFxuICBiYXNpY09yYjogXCJlbmVteS5iYXNpY09yYlwiLFxuICBnbGFzczogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICBnbGFzc1NoaWVsZDogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICB3aW5nZXI6IFwiZW5lbXkud2luZ2VyXCIsXG4gIHRhbms6IFwiZW5lbXkudGFua1wiLFxufTtcbmNvbnN0IHdlYXBvblByZWZpeGVzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgZ3VuOiBcInBpY2t1cC53ZWFwb24uZ3VuLlwiLFxuICBzaGllbGQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIsXG4gIHN3b3JkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsXG59O1xuY29uc3QgcGlja3VwQWxpYXNlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwidW5pdE11bHRpcGxpZXIuMnhcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbiAgXCJ1bml0TXVsdGlwbGllci5zcXVhZFBsdXNPbmVcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbn07XG5jb25zdCBwcmVmZXJyZWRTeW1ib2xzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgXCJlbmVteS5iYXNpY1wiOiBcIkVcIixcbiAgXCJlbmVteS5iYXNpY09yYlwiOiBcIkVcIixcbiAgXCJlbmVteS5nbGFzc1NoaWVsZFwiOiBcIkRcIixcbiAgXCJlbmVteS53aW5nZXJcIjogXCJXXCIsXG4gIFwiZW5lbXkudGFua1wiOiBcIlRcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiOiBcIkdcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5uZWVkbGVyU21nXCI6IFwiTlwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiOiBcIkJcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiOiBcIkhcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5zcGxpdHRlclJpZmxlXCI6IFwiUlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIjogXCJTXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuc2F0ZWxsaXRlR3VhcmRcIjogXCJWXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIjogXCJYXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiOiBcImFcIixcbiAgXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIjogXCJjXCIsXG4gIFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwiMlwiLFxufTtcbmNvbnN0IGZhbGxiYWNrU3ltYm9scyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2Nzg5ISMkJSYqKywtLzo7PD0+P0BeX35cIi5zcGxpdChcIlwiKVxuICAuZmlsdGVyKHN5bWJvbCA9PiBzeW1ib2wgIT09IGVtcHR5U3ltYm9sICYmIHN5bWJvbCAhPT0gcGxheWVyU3ltYm9sKTtcblxuZnVuY3Rpb24gcmVxdWlyZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIU51bWJlci5pc0ludGVnZXIodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgYW4gaW50ZWdlci5gKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih2YWx1ZTogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHJlcXVpcmVJbnRlZ2VyKHZhbHVlLCBsYWJlbCk7XG4gIGlmICh2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNwZWVkKHNwZWVkOiBudW1iZXIgfCB1bmRlZmluZWQsIGxhYmVsOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZSA9IHNwZWVkID8/IDE7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRW5lbXlJZChpZDogVHJhY2tFbmVteVJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBlbmVteUFsaWFzZXNbaWRdID8/IGBlbmVteS4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdlYXBvbklkKGlkOiBUcmFja1dlYXBvblJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5cIikpIHJldHVybiBpZDtcbiAgY29uc3QgZG90SW5kZXggPSBpZC5pbmRleE9mKFwiLlwiKTtcbiAgaWYgKGRvdEluZGV4IDw9IDApIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBtdXN0IHVzZSBmYW1pbHkuaWQgc2hvcnRoYW5kIG9yIGEgY2Fub25pY2FsIHBpY2t1cC53ZWFwb24gaWQuYCk7XG4gIGNvbnN0IGZhbWlseSA9IGlkLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgY29uc3QgbWVtYmVyID0gaWQuc2xpY2UoZG90SW5kZXggKyAxKTtcbiAgY29uc3QgcHJlZml4ID0gd2VhcG9uUHJlZml4ZXNbZmFtaWx5XTtcbiAgaWYgKCFwcmVmaXgpIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBoYXMgdW5rbm93biB3ZWFwb24gZmFtaWx5IFwiJHtmYW1pbHl9XCIuYCk7XG4gIHJldHVybiBgJHtwcmVmaXh9JHttZW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGlja3VwSWQoaWQ6IFRyYWNrUGlja3VwUmVmKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBwaWNrdXBBbGlhc2VzW2lkXSA/PyBgcGlja3VwLiR7aWR9YDtcbn1cblxuZnVuY3Rpb24gZW5lbXlNZW1iZXJJZChjYW5vbmljYWxJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChjYW5vbmljYWxJZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWNhbm9uaWNhbElkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICByZXR1cm4gY2Fub25pY2FsSWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICBpZiAoZW5lbXlJZCkge1xuICAgIGlmICghKGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZW5lbXkgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWxpZGF0b3JzOiByZWFkb25seSBbc3RyaW5nLCBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIHN0cmluZ11bXSA9IFtcbiAgICBbXCJwaWNrdXAud2VhcG9uLmd1bi5cIiwgZ3VuRmFtaWx5Lm1lbWJlcnMsIFwiZ3VuXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLCBzaGllbGRGYW1pbHkubWVtYmVycywgXCJzaGllbGRcIl0sXG4gICAgW1wicGlja3VwLndlYXBvbi5zd29yZC5cIiwgc3dvcmRGYW1pbHkubWVtYmVycywgXCJzd29yZFwiXSxcbiAgXTtcbiAgZm9yIChjb25zdCBbcHJlZml4LCBtZW1iZXJzLCBsYWJlbF0gb2YgdmFsaWRhdG9ycykge1xuICAgIGlmICghaWQuc3RhcnRzV2l0aChwcmVmaXgpKSBjb250aW51ZTtcbiAgICBjb25zdCBtZW1iZXJJZCA9IGlkLnNsaWNlKHByZWZpeC5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gJHtsYWJlbH0gaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHJldHVybjtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShcInBpY2t1cC51bml0TXVsdGlwbGllci5cIi5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtdWx0aXBsaWVyIGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCB0cmFjayBlbnRpdHkgaWQgXCIke2lkfVwiLmApO1xufVxuXG5mdW5jdGlvbiBzcGFuRm9yKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlNZW1iZXJJZChpZCk7XG4gIHJldHVybiBlbmVteUlkICYmIGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkIGFzIGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVyc10uY29sdW1uU3BhbiA6IDE7XG59XG5cbmNsYXNzIFRyYWNrQnVpbGRlckNvcmUge1xuICBwcml2YXRlIHJlYWRvbmx5IGxhbmVXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IHBsYWNlbWVudHM6IFBsYWNlbWVudFtdID0gW107XG4gIHByaXZhdGUgY3Vyc29yID0gMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpIHtcbiAgICB0aGlzLmxhbmVXaWR0aCA9IG9wdGlvbnMubGFuZVdpZHRoID8/IGRlZmF1bHRMYW5lV2lkdGg7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih0aGlzLmxhbmVXaWR0aCwgXCJUcmFjayBsYW5lV2lkdGhcIik7XG4gICAgaWYgKHRoaXMubGFuZVdpZHRoIDwgMykgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFuZVdpZHRoIG11c3QgYmUgYXQgbGVhc3QgMy5cIik7XG4gICAgaWYgKCFvcHRpb25zLmxhYmVsLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFiZWwgaXMgcmVxdWlyZWQuXCIpO1xuICAgIGlmICghb3B0aW9ucy5kZXNjcmlwdGlvbi50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIGlmIChvcHRpb25zLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLnBsYXllclN0YXJ0Q29sdW1uID8/IGMubGVmdC5taWQsIFwicGxheWVyU3RhcnRDb2x1bW5cIiwgMSk7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwiZW5lbXlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVdlYXBvbklkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwid2VhcG9uXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcInBpY2t1cFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkdmFuY2VSb3dzKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIocm93cywgXCJhZHZhbmNlUm93cyByb3dzXCIpO1xuICAgIHRoaXMuY3Vyc29yICs9IHJvd3M7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmFkdmFuY2VSb3dzKHJvd3MpO1xuICB9XG5cbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgaWYgKCFuYW1lLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgc2VjdGlvbiBuYW1lIGlzIHJlcXVpcmVkLlwiKTtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIGBUcmFjayBzZWN0aW9uIFwiJHtuYW1lfVwiIHJvd3NgKTtcbiAgICBjb25zdCBzZWN0aW9uID0gbmV3IFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlKHRoaXMsIG5hbWUsIHRoaXMuY3Vyc29yLCByb3dzKTtcbiAgICBidWlsZChzZWN0aW9uKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicHJlc3N1cmVcIiwgcm93cywgYnVpbGQpO1xuICB9XG5cbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLnNlY3Rpb24oXCJyZWJ1aWxkXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkTGluZSh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJsaW5lXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZEFsdGVybmF0aW5nKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImFsdGVybmF0aW5nXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRXYWxsKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcIndhbGxcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZERyaXAodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwiZHJpcFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFNlY3Rpb25FbmVteShiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGVuZW15YCk7XG4gIH1cblxuICBhZGRTZWN0aW9uV2VhcG9uKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiB3ZWFwb25gKTtcbiAgfVxuXG4gIGFkZFNlY3Rpb25QaWNrdXAoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVBpY2t1cElkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBpY2t1cGApO1xuICB9XG5cbiAgYWRkTGluZShiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICByZXF1aXJlSW50ZWdlcihnYXAsIGAke2xhYmVsfSBnYXBgKTtcbiAgICBpZiAoZ2FwIDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBnYXAgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQWx0ZXJuYXRpbmcoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmNvdW50LCBgJHtsYWJlbH0gY291bnRgKTtcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBjb2x1bW5zIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgY29sdW1uLmApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gb3B0aW9ucy5jb2x1bW5zW2luZGV4ICUgb3B0aW9ucy5jb2x1bW5zLmxlbmd0aF07XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgaW5kZXggKiAoZ2FwICsgMSksIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGRXYWxsKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBvcHRpb25zLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3csIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGREcmlwKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLnJvd3MsIGAke2xhYmVsfSByb3dzYCk7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmV2ZXJ5LCBgJHtsYWJlbH0gZXZlcnlgKTtcbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBvcHRpb25zLnJvd3M7IG9mZnNldCArPSBvcHRpb25zLmV2ZXJ5KSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIG9mZnNldCwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkKCk6IFRyYWNrTWVtYmVyIHtcbiAgICBjb25zdCBwbGF5ZXJTdGFydENvbHVtbiA9IHRoaXMub3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkO1xuICAgIGNvbnN0IG1heFBsYWNlbWVudFJvdyA9IHRoaXMucGxhY2VtZW50cy5yZWR1Y2UoKG1heCwgaXRlbSkgPT4gTWF0aC5tYXgobWF4LCBpdGVtLnJvdyksIDApO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5tYXgodGhpcy5jdXJzb3IsIG1heFBsYWNlbWVudFJvdyArIDEsIDEpO1xuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmxhbmVXaWR0aCAqIDIgfSwgKCkgPT4gZW1wdHlTeW1ib2wpKTtcbiAgICBjb25zdCBvY2N1cGllZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sICgpID0+IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCkpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IG5ldyBNYXA8c3RyaW5nLCB7IGlkOiBzdHJpbmc7IHNwZWVkOiBudW1iZXIgfT4oKTtcbiAgICBsZWdlbmQuc2V0KGVtcHR5U3ltYm9sLCB7IGlkOiBcImVtcHR5XCIsIHNwZWVkOiAxIH0pO1xuICAgIGxlZ2VuZC5zZXQocGxheWVyU3ltYm9sLCB7IGlkOiBcInBsYXllci5zdGFydFwiLCBzcGVlZDogMSB9KTtcbiAgICBjb25zdCB1c2VkU3ltYm9scyA9IG5ldyBTZXQoW2VtcHR5U3ltYm9sLCBwbGF5ZXJTeW1ib2xdKTtcbiAgICBjb25zdCBzeW1ib2xCeUVudGl0eSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgY29uc3QgcGxheWVyQ2VsbHMgPSB0aGlzLmNlbGxzRm9yKHBsYXllclN0YXJ0Q29sdW1uLCAxKTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIG9jY3VwaWVkWzBdLnNldChjZWxsLmdsb2JhbENvbHVtbiwgXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgcm93c1swXVtwbGF5ZXJTdGFydENvbHVtbl0gPSBwbGF5ZXJTeW1ib2w7XG5cbiAgICBmb3IgKGNvbnN0IHBsYWNlbWVudCBvZiB0aGlzLnBsYWNlbWVudHMpIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuc3ltYm9sRm9yKHBsYWNlbWVudCwgdXNlZFN5bWJvbHMsIHN5bWJvbEJ5RW50aXR5KTtcbiAgICAgIGxlZ2VuZC5zZXQoc3ltYm9sLCB7IGlkOiBwbGFjZW1lbnQuaWQsIHNwZWVkOiBwbGFjZW1lbnQuc3BlZWQgfSk7XG4gICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGhpcy5jZWxsc0ZvcihwbGFjZW1lbnQuY29sdW1uLCBwbGFjZW1lbnQuc3BhbikpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvY2N1cGllZFtwbGFjZW1lbnQucm93XS5nZXQoY2VsbC5nbG9iYWxDb2x1bW4pO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHBsYWNlbWVudCBvdmVybGFwIGF0IHJvdyAke3BsYWNlbWVudC5yb3d9LCBjb2x1bW4gJHtjZWxsLmdsb2JhbENvbHVtbn0uIEV4aXN0aW5nIGlkIFwiJHtleGlzdGluZ31cIiwgbmV3IGlkIFwiJHtwbGFjZW1lbnQuaWR9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uc2V0KGNlbGwuZ2xvYmFsQ29sdW1uLCBwbGFjZW1lbnQuaWQpO1xuICAgICAgfVxuICAgICAgcm93c1twbGFjZW1lbnQucm93XVtwbGFjZW1lbnQuY29sdW1uXSA9IHN5bWJvbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0ge1xuICAgICAgbGF5b3V0OiBgXFxuJHtyb3dzLnNsaWNlKCkucmV2ZXJzZSgpLm1hcChyb3cgPT4gYCR7cm93LnNsaWNlKDAsIHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfSB8ICR7cm93LnNsaWNlKHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfWApLmpvaW4oXCJcXG5cIil9XFxuYCxcbiAgICAgIGxlZ2VuZDogT2JqZWN0LmZyb21FbnRyaWVzKFsuLi5sZWdlbmQuZW50cmllcygpXS5tYXAoKFtzeW1ib2wsIGVudHJ5XSkgPT4gW1xuICAgICAgICBzeW1ib2wsXG4gICAgICAgIGVudHJ5LnNwZWVkID09PSAxID8geyBpZDogZW50cnkuaWQgfSA6IHsgaWQ6IGVudHJ5LmlkLCBzcGVlZDogZW50cnkuc3BlZWQgfSxcbiAgICAgIF0pKSxcbiAgICAgIGJhbGFuY2U6IHRoaXMub3B0aW9ucy5iYWxhbmNlLFxuICAgIH07XG4gICAgcGFyc2VUcmFja0RlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLm9wdGlvbnMubGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5vcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgZW52aXJvbm1lbnQ6IHRoaXMub3B0aW9ucy5lbnZpcm9ubWVudCxcbiAgICAgIGRlZmluaXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIHZhbGlkYXRlU2VjdGlvbk9mZnNldChzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93T2Zmc2V0LCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcm93IG9mZnNldGApO1xuICAgIGlmIChyb3dPZmZzZXQgPCAwIHx8IHJvd09mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXQgJHtyb3dPZmZzZXR9IGlzIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25TcGFuKHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCByb3dzOiBudW1iZXIsIGNvdmVyZWRSb3dzOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKGNvdmVyZWRSb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgY292ZXJlZCByb3dzYCk7XG4gICAgdGhpcy52YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWUsIHJvd09mZnNldCwgcm93cyk7XG4gICAgY29uc3QgbGFzdE9mZnNldCA9IHJvd09mZnNldCArIGNvdmVyZWRSb3dzIC0gMTtcbiAgICBpZiAobGFzdE9mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBhdHRlcm4gcmVhY2hlcyByb3cgb2Zmc2V0ICR7bGFzdE9mZnNldH0sIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBsYWNlKGlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucywgcm93OiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihyb3csIGAke2xhYmVsfSByb3dgKTtcbiAgICBpZiAocm93IDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSByb3cgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIHZhbGlkYXRlQ2Fub25pY2FsSWQoaWQpO1xuICAgIGNvbnN0IHNwYW4gPSBzcGFuRm9yKGlkKTtcbiAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKG9wdGlvbnMuY29sdW1uLCBgJHtsYWJlbH0gY29sdW1uYCwgc3Bhbik7XG4gICAgdGhpcy5wbGFjZW1lbnRzLnB1c2goe1xuICAgICAgcm93LFxuICAgICAgY29sdW1uOiBvcHRpb25zLmNvbHVtbixcbiAgICAgIGlkLFxuICAgICAgc3BlZWQ6IG5vcm1hbGl6ZVNwZWVkKG9wdGlvbnMuc3BlZWQsIGxhYmVsKSxcbiAgICAgIHNwYW4sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlQ29sdW1uKGNvbHVtbjogVHJhY2tDb2x1bW4sIGxhYmVsOiBzdHJpbmcsIHNwYW46IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKGNvbHVtbiwgbGFiZWwpO1xuICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmxhbmVXaWR0aCAqIDI7XG4gICAgaWYgKGNvbHVtbiA8IDAgfHwgY29sdW1uID49IHRvdGFsV2lkdGgpIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gJHtjb2x1bW59IGlzIG91dHNpZGUgdGhlIDAtJHt0b3RhbFdpZHRoIC0gMX0gdHJhY2sgcmFuZ2UuYCk7XG4gICAgY29uc3Qgc2lkZUNvbHVtbiA9IGNvbHVtbiAlIHRoaXMubGFuZVdpZHRoO1xuICAgIGlmIChzaWRlQ29sdW1uICsgc3BhbiA+IHRoaXMubGFuZVdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBjYW5ub3QgZml0IGEgJHtzcGFufS1jb2x1bW4gZW50aXR5IGluc2lkZSBhICR7dGhpcy5sYW5lV2lkdGh9LWNvbHVtbiBsYW5lLmApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbHNGb3IoY29sdW1uOiBudW1iZXIsIHNwYW46IG51bWJlcik6IEFycmF5PHsgZ2xvYmFsQ29sdW1uOiBudW1iZXIgfT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzcGFuIH0sIChfLCBvZmZzZXQpID0+ICh7IGdsb2JhbENvbHVtbjogY29sdW1uICsgb2Zmc2V0IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgc3ltYm9sRm9yKHBsYWNlbWVudDogUGxhY2VtZW50LCB1c2VkU3ltYm9sczogU2V0PHN0cmluZz4sIHN5bWJvbEJ5RW50aXR5OiBNYXA8c3RyaW5nLCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgICBjb25zdCBrZXkgPSBgJHtwbGFjZW1lbnQuaWR9QCR7cGxhY2VtZW50LnNwZWVkfWA7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBzeW1ib2xCeUVudGl0eS5nZXQoa2V5KTtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgICBjb25zdCBwcmVmZXJyZWQgPSBwcmVmZXJyZWRTeW1ib2xzW3BsYWNlbWVudC5pZF07XG4gICAgY29uc3Qgc3ltYm9sID0gcHJlZmVycmVkICYmICF1c2VkU3ltYm9scy5oYXMocHJlZmVycmVkKVxuICAgICAgPyBwcmVmZXJyZWRcbiAgICAgIDogZmFsbGJhY2tTeW1ib2xzLmZpbmQoY2FuZGlkYXRlID0+ICF1c2VkU3ltYm9scy5oYXMoY2FuZGlkYXRlKSk7XG4gICAgaWYgKCFzeW1ib2wpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJ1aWxkZXIgcmFuIG91dCBvZiBvbmUtY2hhcmFjdGVyIGxlZ2VuZCBzeW1ib2xzLlwiKTtcbiAgICB1c2VkU3ltYm9scy5hZGQoc3ltYm9sKTtcbiAgICBzeW1ib2xCeUVudGl0eS5zZXQoa2V5LCBzeW1ib2wpO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cbn1cblxuY2xhc3MgVHJhY2tTZWN0aW9uQnVpbGRlckNvcmUgaW1wbGVtZW50cyBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgcHJpdmF0ZSByb3dPZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBUcmFja0J1aWxkZXJDb3JlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVJvdzogbnVtYmVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm93czogbnVtYmVyLFxuICApIHt9XG5cbiAgYXQocm93T2Zmc2V0OiBudW1iZXIpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25PZmZzZXQodGhpcy5uYW1lLCByb3dPZmZzZXQsIHRoaXMucm93cyk7XG4gICAgdGhpcy5yb3dPZmZzZXQgPSByb3dPZmZzZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbkVuZW15KHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbldlYXBvbih0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25QaWNrdXAodGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkTGluZSh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBsaW5lYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIChvcHRpb25zLmNvdW50IC0gMSkgKiAoZ2FwICsgMSkgKyAxKTtcbiAgICB0aGlzLnBhcmVudC5hZGRBbHRlcm5hdGluZyh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBhbHRlcm5hdGluZ2ApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkV2FsbCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiB3YWxsYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgb3B0aW9ucy5yb3dzKTtcbiAgICB0aGlzLnBhcmVudC5hZGREcmlwKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGRyaXBgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tCdWlsZGVyOiBUcmFja0J1aWxkZXJGYWN0b3J5ID0ge1xuICBjcmVhdGUob3B0aW9uczogVHJhY2tCdWlsZGVyT3B0aW9ucyk6IFRyYWNrQnVpbGRlciB7XG4gICAgcmV0dXJuIG5ldyBUcmFja0J1aWxkZXJDb3JlKG9wdGlvbnMpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBjLCB0cmFja0J1aWxkZXIsIHR5cGUgVHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrU2VjdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi4vVHJhY2tCdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBUcmFja1RoZW1lSWQgPSBcImd1blNjaG9vbFwiIHwgXCJndWFyZEJsYWRlc1wiIHwgXCJjcnlzdGFsU2llZ2VcIiB8IFwic3dhcm1CbG9vbVwiIHwgXCJtaXJyb3JBcnJheVwiO1xuZXhwb3J0IHR5cGUgVHJhY2tUaWVyID0gMSB8IDIgfCAzO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2VkVHJhY2tPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHRoZW1lOiBUcmFja1RoZW1lSWQ7XG4gIHRpZXI6IFRyYWNrVGllcjtcbn1cblxuaW50ZXJmYWNlIFRyYWNrQnVpbGRDb250ZXh0IHtcbiAgcmVhZG9ubHkgdGllcjogVHJhY2tUaWVyO1xuICByZWFkb25seSBjdXJzb3I6IG51bWJlcjtcbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdm9pZDtcbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVGhlbWVQbGFuIHtcbiAgZmluYWxSb3dzOiBudW1iZXI7XG4gIG9wZW4oY29udGV4dDogVHJhY2tCdWlsZENvbnRleHQpOiB2b2lkO1xuICBjeWNsZShjb250ZXh0OiBUcmFja0J1aWxkQ29udGV4dCwgY3ljbGVJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgZmluaXNoKGNvbnRleHQ6IFRyYWNrQnVpbGRDb250ZXh0LCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkO1xufVxuXG5jb25zdCB0YXJnZXRSb3dzQnlUaWVyOiBSZWNvcmQ8VHJhY2tUaWVyLCBudW1iZXI+ID0ge1xuICAxOiAxMDUsXG4gIDI6IDI2NSxcbiAgMzogNDI1LFxufTtcblxuY29uc3QgZW5lbXlIcEJ5VGllcjogUmVjb3JkPFRyYWNrVGllciwgbnVtYmVyPiA9IHtcbiAgMTogMSxcbiAgMjogMSxcbiAgMzogMSxcbn07XG5cbmNvbnN0IHBpY2sgPSA8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiBUID0+XG4gIGl0ZW1zW01hdGgubWluKGl0ZW1zLmxlbmd0aCAtIDEsIHRpZXIgLSAxICsgY3ljbGVJbmRleCAlIDIpXTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChidWlsZGVyOiBUcmFja0J1aWxkZXIsIHRpZXI6IFRyYWNrVGllcik6IFRyYWNrQnVpbGRDb250ZXh0IHtcbiAgbGV0IGN1cnNvciA9IDE7XG4gIHJldHVybiB7XG4gICAgdGllcixcbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgcmV0dXJuIGN1cnNvcjtcbiAgICB9LFxuICAgIHJlYnVpbGQocm93cywgYnVpbGQpIHtcbiAgICAgIGJ1aWxkZXIucmVidWlsZChyb3dzLCBidWlsZCk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICAgIHByZXNzdXJlKHJvd3MsIGJ1aWxkKSB7XG4gICAgICBidWlsZGVyLnByZXNzdXJlKHJvd3MsIGJ1aWxkKTtcbiAgICAgIGN1cnNvciArPSByb3dzO1xuICAgIH0sXG4gICAgcmVzcGl0ZShyb3dzKSB7XG4gICAgICBidWlsZGVyLnJlc3BpdGUocm93cyk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMjIgfSk7XG4gIHNlY3Rpb24uYXQoMjIpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDEyIH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMSkuZHJpcChcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgcm93czogMzQsIGV2ZXJ5OiA2IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMzQpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDggfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoNikuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5yaWdodC5pbm5lciwgYy5sZWZ0LmlubmVyXSwgY291bnQ6IDgsIGdhcDogMyB9KTtcbiAgaWYgKHRpZXIgPj0gMyAmJiBjeWNsZUluZGV4ID4gMCkge1xuICAgIHNlY3Rpb24uYXQoMjQpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbiAgICBzZWN0aW9uLmF0KDI4KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXJdIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGd1YXJkQmxhZGVQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBoYXNDbGVhdmVyU2V0dXAgPSB0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDA7XG4gIHNlY3Rpb24uYXQoMCkubGluZShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgY291bnQ6IDE4IH0pO1xuICBzZWN0aW9uLmF0KDE4KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IGhhc0NsZWF2ZXJTZXR1cCA/IDEyIDogMjQsIGdhcDogaGFzQ2xlYXZlclNldHVwID8gMSA6IHVuZGVmaW5lZCB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDMpLmFsdGVybmF0aW5nKFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDgsIGdhcDogMyB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDgpLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0gfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMTQpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA2LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjUpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogYy5yaWdodC5pbm5lciB9KTtcbn1cblxuZnVuY3Rpb24gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlciwgYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMTYgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgyMykuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0LmlubmVyIH0pO1xuICBzZWN0aW9uLmF0KDI1KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAyMyB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDQpLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIGNvdW50OiAxOCB9KTtcbiAgaWYgKHRpZXIgPj0gMiAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgyNCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXIsIGMucmlnaHQub3V0ZXJdIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDM2KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5pbm5lciA6IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG59XG5cbmZ1bmN0aW9uIHN3YXJtQmxvb21QcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMjAgfSk7XG4gIHNlY3Rpb24uYXQoMjApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDI0IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMikuZHJpcChcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgcm93czogMzQsIGV2ZXJ5OiA2IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDcpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5pbm5lciwgYy5yaWdodC5pbm5lcl0sIGNvdW50OiA3LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjEpLndhbGwoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlcl0gfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMzYpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbn1cblxuZnVuY3Rpb24gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDQpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWQsIGMubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAxOCB9KTtcbiAgc2VjdGlvbi5hdCgyMikuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogMjQgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgwKS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdIH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoNikuZHJpcChcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFySW5uZXIgOiBjLnJpZ2h0Lm5lYXJJbm5lciwgcm93czogMzIsIGV2ZXJ5OiA2IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDE4KS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLnJpZ2h0LmlubmVyLCBjLmxlZnQuaW5uZXJdLCBjb3VudDogNywgZ2FwOiAzIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDMyKS53YWxsKFwidGFua1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0LmlubmVyXSB9KTtcbn1cblxuY29uc3QgdGhlbWVQbGFuczogUmVjb3JkPFRyYWNrVGhlbWVJZCwgVGhlbWVQbGFuPiA9IHtcbiAgZ3VuU2Nob29sOiB7XG4gICAgZmluYWxSb3dzOiA0MixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4ucHVsc2VQaXN0b2xcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDcpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIGlmIChjb250ZXh0LnRpZXIgPj0gMikgc2VjdGlvbi5hdCg2KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMCwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5uZWVkbGVyU21nXCIsIFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQubWlkIDogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgyKS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5vdXRlciA6IGMucmlnaHQub3V0ZXIgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMyA9PT0gMSkgc2VjdGlvbi5hdCg0KS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJJbm5lciB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg0KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQub3V0ZXIgOiBjLmxlZnQub3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNikuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMiA9PT0gMCkgc2VjdGlvbi5hdCg3KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubWlkIDogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm5lYXJPdXRlciA6IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZShjb250ZXh0LnRpZXIgPj0gMiA/IDQgOiAyKTtcbiAgICB9LFxuICAgIGZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQyLCBzZWN0aW9uID0+IGd1blNjaG9vbFByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIGd1YXJkQmxhZGVzOiB7XG4gICAgZmluYWxSb3dzOiA0MixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIGlmIChjb250ZXh0LnRpZXIgPj0gMikgc2VjdGlvbi5hdCg2KS53ZWFwb24oXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDIsIHNlY3Rpb24gPT4gZ3VhcmRCbGFkZVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDEwLCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24ocGljayhbXCJzd29yZC5hcmNCbGFkZVwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzd29yZC5jbGVhdmVyXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCBcInNoaWVsZC5oZXhHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBpZiAoY3ljbGVJbmRleCAlIDIgPT09IDApIHNlY3Rpb24uYXQoNykucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFySW5uZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQub3V0ZXIgOiBjLnJpZ2h0Lm91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndWFyZEJsYWRlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgY3J5c3RhbFNpZWdlOiB7XG4gICAgZmluYWxSb3dzOiA0OCxcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4uYnVyc3RDYXJiaW5lXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDMpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg2KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0OCwgc2VjdGlvbiA9PiBjcnlzdGFsU2llZ2VQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImd1bi5zcGxpdHRlclJpZmxlXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNykud2VhcG9uKFwic3dvcmQuY2xlYXZlclwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMTApLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm91dGVyIDogYy5yaWdodC5vdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDgsIHNlY3Rpb24gPT4gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgc3dhcm1CbG9vbToge1xuICAgIGZpbmFsUm93czogNDQsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnB1bHNlUGlzdG9sXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDIpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg1KS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0NCwgc2VjdGlvbiA9PiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTIsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5taWQgOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJndW4ubmVlZGxlclNtZ1wiLCBcInN3b3JkLmFyY0JsYWRlXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNykud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMTApLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDExKS5lbmVteShcIndpbmdlclwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm91dGVyIDogYy5sZWZ0Lm91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0NCwgc2VjdGlvbiA9PiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgbWlycm9yQXJyYXk6IHtcbiAgICBmaW5hbFJvd3M6IDQ2LFxuICAgIG9wZW4oY29udGV4dCkge1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDksIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5idXJzdENhcmJpbmVcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDMpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNikud2VhcG9uKFwic3dvcmQuY2xlYXZlclwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDYsIHNlY3Rpb24gPT4gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJndW4uYnVyc3RDYXJiaW5lXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgaWYgKGN5Y2xlSW5kZXggJSAyID09PSAwKSBzZWN0aW9uLmF0KDgpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFySW5uZXIgOiBjLnJpZ2h0Lm5lYXJJbm5lciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDYsIHNlY3Rpb24gPT4gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFjayhvcHRpb25zOiBDb21wb3NlZFRyYWNrT3B0aW9ucyk6IFRyYWNrTWVtYmVyIHtcbiAgY29uc3QgYnVpbGRlciA9IHRyYWNrQnVpbGRlci5jcmVhdGUoe1xuICAgIGxhYmVsOiBvcHRpb25zLmxhYmVsLFxuICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IG9wdGlvbnMuc2NlbmVJZCB9LFxuICAgIGJhbGFuY2U6IHsgZW5lbXlIcDogZW5lbXlIcEJ5VGllcltvcHRpb25zLnRpZXJdLCBlbmVteVNwZWVkOiAxIH0sXG4gIH0pO1xuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dChidWlsZGVyLCBvcHRpb25zLnRpZXIpO1xuICBjb25zdCBwbGFuID0gdGhlbWVQbGFuc1tvcHRpb25zLnRoZW1lXTtcbiAgY29uc3QgdGFyZ2V0Um93cyA9IHRhcmdldFJvd3NCeVRpZXJbb3B0aW9ucy50aWVyXTtcbiAgcGxhbi5vcGVuKGNvbnRleHQpO1xuICBsZXQgY3ljbGVJbmRleCA9IDA7XG4gIHdoaWxlIChjb250ZXh0LmN1cnNvciArIHBsYW4uZmluYWxSb3dzIDwgdGFyZ2V0Um93cykge1xuICAgIHBsYW4uY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCk7XG4gICAgY3ljbGVJbmRleCsrO1xuICB9XG4gIHBsYW4uZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpO1xuICByZXR1cm4gYnVpbGRlci5idWlsZCgpO1xufVxuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiU2t5YnJlYWtcIixcbiAgZGVzY3JpcHRpb246IFwiQW4gQXVyb3JhIG9wZW5lciBmb2N1c2VkIG9uIHNoaWVsZHMsIHNob3J0IHN3b3JkIHJlYWRzLCBhbmQgcGF0aWVudCBjbG9zZS1yYW5nZSBjbGVhbnVwLlwiLFxuICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJSaWJib24gU3Rvcm1cIixcbiAgZGVzY3JpcHRpb246IFwiQXVyb3JhIHByZXNzdXJlIGV4cGFuZHMgaW50byBhbHRlcm5hdGluZyBzaGllbGQgcmVidWlsZHMsIHdpZGVyIHN3b3JkIGNob2ljZXMsIGFuZCBjbHVzdGVyZWQgY2xvc2UtcmFuZ2UgdGhyZWF0cy5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTWFnbmV0aWMgRGF3blwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgQXVyb3JhIGZpbmFsZSBhc2tzIGZvciBkZWxpYmVyYXRlIHNoaWVsZCB0aW1pbmcgYW5kIHN3b3JkIHNlbGVjdGlvbiBhZ2FpbnN0IGxvbmcsIHJlYWRhYmxlIHRocmVhdCB3YXZlcy5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUHJpc20gSWduaXRpb25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBDcnlzdGFsIEZvcmdlIG9wZW5lciBidWlsdCBhcm91bmQgYnVyc3QgZmlyZSwgZ2xhc3MgZGVjb3lzLCBhbmQgZWFybHkgaGVhdnktdGhyZWF0IHJlaGVhcnNhbC5cIixcbiAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gIHRpZXI6IDEsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkZhY2V0IFJ1blwiLFxuICBkZXNjcmlwdGlvbjogXCJDcnlzdGFsIEZvcmdlIGRlbnNpdHkgc2hhcnBlbnMgd2l0aCBoZWF2aWVyIGd1bnMsIHN0dXJkaWVyIHNoaWVsZHMsIGFuZCB0YW5rIGJyZWFrcyBmcmFtZWQgYnkgZ2xhc3MgZGVjb3lzLlwiLFxuICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiR2xhc3MgSGFtbWVyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBDcnlzdGFsIEZvcmdlIGZpbmFsZSBjb21taXRzIHRvIGhlYXZ5IHdlYXBvbiBwYXlvZmZzLCByZXBlYXRlZCB0YW5rIGxhbmVzLCBhbmQgcHJpc21hdGljIGRlY295IHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiRmlyc3QgR2xvd1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIGd1bi1mb3J3YXJkIE5lb24gTmVidWxhZSBvcGVuZXIgd2l0aCBjbGVhciByZWJ1aWxkIHNoZWx2ZXMgYW5kIG9ubHkgYSBmZXcgc2hpZWxkIHNhZmV0eSBuZXRzLlwiLFxuICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJEcmlmdCBMZXNzb25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBsb25nZXIgTmVvbiBOZWJ1bGFlIGd1biBsZXNzb24gdGhhdCBhZGRzIHdpbmcgcHJlc3N1cmUsIHN0cm9uZ2VyIGZpcmVhcm0gY2hvaWNlcywgYW5kIHNwYXJzZSBzaGllbGQgcmVsaWVmLlwiLFxuICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJOZWJ1bGEgR2F0ZVwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgTmVvbiBOZWJ1bGFlIGd1biBmaW5hbGUgbGF5ZXJzIGhlYXZpZXIgZmlyZWFybXMsIHRhbmtzLCBhbmQgc3VzdGFpbmVkIGxhbmUgcmVhZGluZyB3aXRob3V0IGxlYW5pbmcgb24gc3BlZWQgY2hhbmdlcy5cIixcbiAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUGFuZWwgRGF3blwiLFxuICBkZXNjcmlwdGlvbjogXCJBIFNvbGFyIEFycmF5IG9wZW5lciB3aXRoIG1pcnJvcmVkIHJlYWRzLCBzcGxpdC1sYW5lIHdlYXBvbiB0aW1pbmcsIGFuZCBicmlnaHQgYnV0IG1lYXN1cmVkIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiSGVsaW9zdGF0IFJ1c2hcIixcbiAgZGVzY3JpcHRpb246IFwiU29sYXIgQXJyYXkgcHJlc3N1cmUgZ3Jvd3MgdGhyb3VnaCBtaXJyb3JlZCB3YWxscywgcHJlY2lzaW9uIHJlYnVpbGRzLCBhbmQgYWx0ZXJuYXRpbmcgb3V0ZXItbGFuZSBzdXJnZXMuXCIsXG4gIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJNaXJyb3IgWmVuaXRoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBTb2xhciBBcnJheSBmaW5hbGUgbWl4ZXMgbWlycm9yZWQgdGFuayBicmVha3MsIHNwbGl0LWZpcmUgcmVidWlsZHMsIGFuZCBsb25nLWZvcm0gcHJlY2lzaW9uIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiQmxvb20gU2lnbmFsXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgVm9pZCBHYXJkZW4gb3BlbmVyIGFib3V0IGdyb3dpbmcgdGhlIHNxdWFkIGVhcmx5IGFuZCBzdXN0YWluaW5nIGNhbG0gY3Jvc3MtbGFuZSBibG9vbSBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUm9vdCBMYXR0aWNlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlZvaWQgR2FyZGVuIGFkZHMgZGVuc2VyIHNxdWFkIGdyb3d0aCB3aW5kb3dzLCBzcGxpdCB3ZWFwb24gc3VwcG9ydCwgYW5kIHNsb3ctYmxvb21pbmcgcGFpcmVkIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJOaWdodCBPcmNoYXJkXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBWb2lkIEdhcmRlbiBmaW5hbGUgbGVhbnMgaW50byBzcXVhZCByZWNvdmVyeSwgbGF5ZXJlZCBzdXBwb3J0IHBpY2t1cHMsIGFuZCBicm9hZCBvcmdhbmljIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICB0aWVyOiAzLFxufSk7XG4iLCAiaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2s0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazIgfSBmcm9tIFwiLi9UcmFjazVcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrNlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgY3J5c3RhbEZvcmdlVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2s3XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBjcnlzdGFsRm9yZ2VUcmFjazIgfSBmcm9tIFwiLi9UcmFjazhcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGNyeXN0YWxGb3JnZVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrOVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazEgfSBmcm9tIFwiLi9UcmFjazFcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2syIH0gZnJvbSBcIi4vVHJhY2syXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrM1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgc29sYXJBcnJheVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrMTNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHNvbGFyQXJyYXlUcmFjazIgfSBmcm9tIFwiLi9UcmFjazE0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBzb2xhckFycmF5VHJhY2szIH0gZnJvbSBcIi4vVHJhY2sxNVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgdm9pZEdhcmRlblRyYWNrMSB9IGZyb20gXCIuL1RyYWNrMTBcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHZvaWRHYXJkZW5UcmFjazIgfSBmcm9tIFwiLi9UcmFjazExXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyB2b2lkR2FyZGVuVHJhY2szIH0gZnJvbSBcIi4vVHJhY2sxMlwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja0ZhbWlseU1lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHRyYWNrcyA9IHtcbiAgXCJuZW9uLW5lYnVsYWUtMVwiOiBuZW9uTmVidWxhZVRyYWNrMSxcbiAgXCJuZW9uLW5lYnVsYWUtMlwiOiBuZW9uTmVidWxhZVRyYWNrMixcbiAgXCJuZW9uLW5lYnVsYWUtM1wiOiBuZW9uTmVidWxhZVRyYWNrMyxcbiAgXCJhdXJvcmEtMVwiOiBhdXJvcmFUcmFjazEsXG4gIFwiYXVyb3JhLTJcIjogYXVyb3JhVHJhY2syLFxuICBcImF1cm9yYS0zXCI6IGF1cm9yYVRyYWNrMyxcbiAgXCJjcnlzdGFsLWZvcmdlLTFcIjogY3J5c3RhbEZvcmdlVHJhY2sxLFxuICBcImNyeXN0YWwtZm9yZ2UtMlwiOiBjcnlzdGFsRm9yZ2VUcmFjazIsXG4gIFwiY3J5c3RhbC1mb3JnZS0zXCI6IGNyeXN0YWxGb3JnZVRyYWNrMyxcbiAgXCJ2b2lkLWdhcmRlbi0xXCI6IHZvaWRHYXJkZW5UcmFjazEsXG4gIFwidm9pZC1nYXJkZW4tMlwiOiB2b2lkR2FyZGVuVHJhY2syLFxuICBcInZvaWQtZ2FyZGVuLTNcIjogdm9pZEdhcmRlblRyYWNrMyxcbiAgXCJzb2xhci1hcnJheS0xXCI6IHNvbGFyQXJyYXlUcmFjazEsXG4gIFwic29sYXItYXJyYXktMlwiOiBzb2xhckFycmF5VHJhY2syLFxuICBcInNvbGFyLWFycmF5LTNcIjogc29sYXJBcnJheVRyYWNrMyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlsaWVzID0ge1xuICBuZW9uTmVidWxhZToge1xuICAgIGxhYmVsOiBcIk5lb24gTmVidWxhZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbGVhcm5pbmcgYXJjIGFib3V0IGxhbmVzLCBwaWNrdXBzLCBzaGllbGRzLCBhbmQgY29udHJvbGxlZCBwcmVzc3VyZS5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcIm5lb25IYWxsXCIgfSxcbiAgICB0cmFja0lkczogW1wibmVvbi1uZWJ1bGFlLTFcIiwgXCJuZW9uLW5lYnVsYWUtMlwiLCBcIm5lb24tbmVidWxhZS0zXCJdLFxuICB9LFxuICBhdXJvcmE6IHtcbiAgICBsYWJlbDogXCJBdXJvcmFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZW5zZSBwbGFuZXRhcnkgYXNzYXVsdHMgd2l0aCBicmlnaHRlciByZWNvdmVyeSB3aW5kb3dzIGFuZCBzaGFycGVyIHRocmVhdCB3YXZlcy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcImF1cm9yYVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcImF1cm9yYS0xXCIsIFwiYXVyb3JhLTJcIiwgXCJhdXJvcmEtM1wiXSxcbiAgfSxcbiAgY3J5c3RhbEZvcmdlOiB7XG4gICAgbGFiZWw6IFwiQ3J5c3RhbCBGb3JnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByaXNtYXRpYyBmYWN0b3J5IGxhbmVzIHdpdGggc2hhcnAgcHJlc3N1cmUsIGdsYXNzIGRlY295cywgYW5kIGhlYXZ5IGNyeXN0YWxsaW5lIGJyZWFrcy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcImNyeXN0YWwtZm9yZ2UtMVwiLCBcImNyeXN0YWwtZm9yZ2UtMlwiLCBcImNyeXN0YWwtZm9yZ2UtM1wiXSxcbiAgfSxcbiAgdm9pZEdhcmRlbjoge1xuICAgIGxhYmVsOiBcIlZvaWQgR2FyZGVuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlvbHVtaW5lc2NlbnQgbmlnaHQgbGFuZXMgd2l0aCBzcGFyc2UgYmxvb21zLCBkZWNveXMsIGFuZCBjb250cm9sbGVkIHJlY292ZXJ5IHBvY2tldHMuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIgfSxcbiAgICB0cmFja0lkczogW1widm9pZC1nYXJkZW4tMVwiLCBcInZvaWQtZ2FyZGVuLTJcIiwgXCJ2b2lkLWdhcmRlbi0zXCJdLFxuICB9LFxuICBzb2xhckFycmF5OiB7XG4gICAgbGFiZWw6IFwiU29sYXIgQXJyYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCcmlnaHQgb3JiaXRhbCBsYW5lcyB3aXRoIG1pcnJvcmVkIHdhbGxzLCBmYXN0IG91dGVyIHN1cmdlcywgYW5kIGRlY2lzaXZlIGhlYXZ5IHRvb2xzLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwic29sYXJBcnJheVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcInNvbGFyLWFycmF5LTFcIiwgXCJzb2xhci1hcnJheS0yXCIsIFwic29sYXItYXJyYXktM1wiXSxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrRmFtaWx5TWVtYmVyPGtleW9mIHR5cGVvZiB0cmFja3M+PjtcblxuZXhwb3J0IHtcbiAgYXVyb3JhVHJhY2sxLFxuICBhdXJvcmFUcmFjazIsXG4gIGF1cm9yYVRyYWNrMyxcbiAgY3J5c3RhbEZvcmdlVHJhY2sxLFxuICBjcnlzdGFsRm9yZ2VUcmFjazIsXG4gIGNyeXN0YWxGb3JnZVRyYWNrMyxcbiAgbmVvbk5lYnVsYWVUcmFjazEsXG4gIG5lb25OZWJ1bGFlVHJhY2syLFxuICBuZW9uTmVidWxhZVRyYWNrMyxcbiAgc29sYXJBcnJheVRyYWNrMSxcbiAgc29sYXJBcnJheVRyYWNrMixcbiAgc29sYXJBcnJheVRyYWNrMyxcbiAgdm9pZEdhcmRlblRyYWNrMSxcbiAgdm9pZEdhcmRlblRyYWNrMixcbiAgdm9pZEdhcmRlblRyYWNrMyxcbn07XG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIsIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tGYW1pbGllcywgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcbiAgcmVhZG9ubHkgZmFtaWxpZXMgPSB0cmFja0ZhbWlsaWVzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgdHJhY2tdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaWQsIGZhbWlseV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5mYW1pbGllcykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShmYW1pbHkudHJhY2tJZHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgdHJhY2suYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZChmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICAgIGZvciAoY29uc3QgdHJhY2tJZCBvZiBmYW1pbHkudHJhY2tJZHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrSWQgaW4gdGhpcy5tZW1iZXJzLCBgJHtpZH0gcmVmZXJlbmNlcyB1bmtub3duIHRyYWNrIFwiJHt0cmFja0lkfVwiLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodGhpcy5tZW1iZXJzW3RyYWNrSWRdLmVudmlyb25tZW50LnNjZW5lSWQgPT09IGZhbWlseS5lbnZpcm9ubWVudC5zY2VuZUlkLCBgJHt0cmFja0lkfSBtdXN0IHVzZSB0aGUgJHtpZH0gc2NlbmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlseSA9IG5ldyBUcmFja0ZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFRyYWNrSWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkubWVtYmVycztcbmV4cG9ydCB0eXBlIFRyYWNrRmFtaWx5SWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkuZmFtaWxpZXM7XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTcXVhZElucHV0Q2FsbGJhY2tzIHtcbiAgbGFuZSgpOiAwIHwgMTtcbiAgc2V0TGFuZShsYW5lOiAwIHwgMSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3F1YWRJbnB1dChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgY2FsbGJhY2tzOiBTcXVhZElucHV0Q2FsbGJhY2tzLFxuKTogdm9pZCB7XG4gIGxldCBwb2ludGVySWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdCBhcHBseVBvaW50ZXIgPSAoY2xpZW50WDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYm91bmRzID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xuICAgIGNvbnN0IGxhbmU6IDAgfCAxID0gbm9ybWFsaXplZCA8IC41ID8gMCA6IDE7XG4gICAgaWYgKGxhbmUgIT09IGNhbGxiYWNrcy5sYW5lKCkpIGNhbGxiYWNrcy5zZXRMYW5lKGxhbmUpO1xuICB9O1xuICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJhXCIgfHwgZXZlbnQua2V5ID09PSBcIkFcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIGNhbGxiYWNrcy5zZXRMYW5lKDApO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiZFwiIHx8IGV2ZW50LmtleSA9PT0gXCJEXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikgY2FsbGJhY2tzLnNldExhbmUoMSk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoXCJidXR0b24saW5wdXQsc2VsZWN0LGFcIikpIHJldHVybjtcbiAgICBwb2ludGVySWQgPSBldmVudC5wb2ludGVySWQ7XG4gICAgY29udGFpbmVyLnNldFBvaW50ZXJDYXB0dXJlPy4ocG9pbnRlcklkKTtcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb25zdCBlbmRQb2ludGVyID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBwb2ludGVySWQgPSBudWxsO1xuICB9O1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGVuZFBvaW50ZXIpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvc3Rwb2ludGVyY2FwdHVyZVwiLCAoKSA9PiB7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgfSk7XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBdXRvQWltVGFyZ2V0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJvd0lkPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNxdWFkLWNlbnRlciBhaW0gb2Zmc2V0IChyZWxhdGl2ZSB0byBsYW5lQ2VudGVyKSB0aGF0IGJlc3QgYWxpZ25zXG4gKiBvbmUgb2YgdGhlIHNxdWFkJ3MgZnJvbnQtcm93IGNvbHVtbnMgdG8gdGhlIG5lYXJlc3QgZW5lbXkuXG4gKlxuICogQHBhcmFtIHRhcmdldHMgICAgICAgICBBbGwgbGl2ZSAobm9uLWR5aW5nKSBlbmVtaWVzIGluIHRoZSBjdXJyZW50IGxhbmUuXG4gKiBAcGFyYW0gbGFuZUNlbnRlciAgICAgIFBpeGVsIFggb2YgdGhlIGxhbmUncyBjZW50ZXIuXG4gKiBAcGFyYW0gY29sdW1uT2Zmc2V0cyAgIFggb2Zmc2V0cyBvZiBlYWNoIGZyb250LXJvdyBjb2x1bW4gcmVsYXRpdmUgdG8gc3F1YWQgY2VudGVyLlxuICogQHBhcmFtIGN1cnJlbnRPZmZzZXQgICBDdXJyZW50IHNxdWFkIGFpbSBvZmZzZXQgKHNxdWFkIGNlbnRlciA9IGxhbmVDZW50ZXIgKyBjdXJyZW50T2Zmc2V0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEF1dG9BaW1PZmZzZXQoXG4gIHRhcmdldHM6IHJlYWRvbmx5IEF1dG9BaW1UYXJnZXRbXSxcbiAgbGFuZUNlbnRlcjogbnVtYmVyLFxuICBjb2x1bW5PZmZzZXRzOiByZWFkb25seSBudW1iZXJbXSxcbiAgY3VycmVudE9mZnNldCA9IDAsXG4pOiBudW1iZXIge1xuICBpZiAoIXRhcmdldHMubGVuZ3RoKSByZXR1cm4gMDtcblxuICAvLyBJZGVudGlmeSB0aGUgZnJvbnQgcm93OiBncm91cCB0YXJnZXRzIGJ5IHJvd0lkIChvciB0cmVhdCB1bmdyb3VwZWQgdGFyZ2V0cyBhcyBhIHNpbmdsZSByb3cpLlxuICBjb25zdCBleHBsaWNpdFJvd3MgPSBuZXcgTWFwPG51bWJlciwgQXV0b0FpbVRhcmdldFtdPigpO1xuICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRzKSB7XG4gICAgaWYgKHRhcmdldC5yb3dJZCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICBjb25zdCByb3cgPSBleHBsaWNpdFJvd3MuZ2V0KHRhcmdldC5yb3dJZCkgPz8gW107XG4gICAgcm93LnB1c2godGFyZ2V0KTtcbiAgICBleHBsaWNpdFJvd3Muc2V0KHRhcmdldC5yb3dJZCwgcm93KTtcbiAgfVxuICBjb25zdCBmcm9udFJvdyA9IGV4cGxpY2l0Um93cy5zaXplXG4gICAgPyBbLi4uZXhwbGljaXRSb3dzLnZhbHVlcygpXS5zb3J0KChsZWZ0LCByaWdodCkgPT5cbiAgICAgICAgTWF0aC5tYXgoLi4ucmlnaHQubWFwKHQgPT4gdC55KSkgLSBNYXRoLm1heCguLi5sZWZ0Lm1hcCh0ID0+IHQueSkpKVswXVxuICAgIDogdGFyZ2V0cy5maWx0ZXIodCA9PiBNYXRoLmFicyh0LnkgLSBNYXRoLm1heCguLi50YXJnZXRzLm1hcChjID0+IGMueSkpKSA8IDMpO1xuXG4gIC8vIEZvciBlYWNoIGVuZW15IGluIHRoZSBmcm9udCByb3cgXHUwMEQ3IGVhY2ggc3F1YWQgY29sdW1uLCBjb21wdXRlIHRoZSBzcXVhZC1jZW50ZXJcbiAgLy8gb2Zmc2V0IHRoYXQgd291bGQgcGxhY2UgdGhhdCBjb2x1bW4gZXhhY3RseSBvbiB0aGF0IGVuZW15J3MgWC5cbiAgLy8gUGljayB0aGUgKGVuZW15LCBjb2x1bW4pIHBhaXIgd2hvc2UgcmVxdWlyZWQgb2Zmc2V0IGlzIGNsb3Nlc3QgdG8gdGhlIGN1cnJlbnRcbiAgLy8gb2Zmc2V0IFx1MjAxNCBtaW5pbWlzaW5nIHRoZSBhaW0gbW92ZW1lbnQgbmVlZGVkIHdoaWxlIGd1YXJhbnRlZWluZyBhIGhpdC5cbiAgY29uc3QgY29scyA9IGNvbHVtbk9mZnNldHMubGVuZ3RoID4gMCA/IGNvbHVtbk9mZnNldHMgOiBbMF07XG4gIGxldCBiZXN0T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcbiAgbGV0IGJlc3REaXN0ID0gSW5maW5pdHk7XG5cbiAgZm9yIChjb25zdCBlbmVteSBvZiBmcm9udFJvdykge1xuICAgIGZvciAoY29uc3QgY29sT2Zmc2V0IG9mIGNvbHMpIHtcbiAgICAgIC8vIHNxdWFkQ2VudGVyID0gbGFuZUNlbnRlciArIGFpbU9mZnNldCBcdTIxOTIgY29sdW1uIGxhbmRzIGF0IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgKyBjb2xPZmZzZXRcbiAgICAgIC8vIFdlIHdhbnQgdGhhdCB0byBlcXVhbCBlbmVteS54IFx1MjE5MiBhaW1PZmZzZXQgPSBlbmVteS54IC0gbGFuZUNlbnRlciAtIGNvbE9mZnNldFxuICAgICAgY29uc3QgY2FuZGlkYXRlT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXQ7XG4gICAgICBjb25zdCBkaXN0ID0gTWF0aC5hYnMoY2FuZGlkYXRlT2Zmc2V0IC0gY3VycmVudE9mZnNldCk7XG4gICAgICBpZiAoZGlzdCA8IGJlc3REaXN0KSB7XG4gICAgICAgIGJlc3REaXN0ID0gZGlzdDtcbiAgICAgICAgYmVzdE9mZnNldCA9IGNhbmRpZGF0ZU9mZnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmVzdE9mZnNldDtcbn1cbiIsICJpbXBvcnQge1xuICBOZW9uUHJvamVjdGlsZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uUHJvamVjdGlsZVNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHtcbiAgR3VuTGV2ZWwsXG4gIEd1bk1lbWJlcixcbiAgSW1wYWN0RWZmZWN0LFxuICBNdXp6bGVFZmZlY3QsXG4gIFByb2plY3RpbGVTaGFwZSxcbn0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5Qcm9qZWN0aWxlIHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdng6IG51bWJlcjtcbiAgdnk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbGxpc2lvblJhZGl1czogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcGllcmNlUmVtYWluaW5nOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I6IHN0cmluZztcbiAgY29yZUNvbG9yOiBzdHJpbmc7XG4gIGFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlcjogYm9vbGVhbjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0RW5lbXlJZHM6IFNldDxudW1iZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bkVmZmVjdCB7XG4gIGtpbmQ6IFwibXV6emxlXCIgfCBcImltcGFjdFwiIHwgXCJkZWF0aFwiO1xuICBzdHlsZTogTXV6emxlRWZmZWN0IHwgSW1wYWN0RWZmZWN0IHwgXCJkZWF0aEJsb29tXCI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcjogc3RyaW5nO1xuICByYWRpdXM6IG51bWJlcjtcbiAgZXhwaXJlc0F0OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHNlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5UYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2NoZWR1bGVkVm9sbGV5IHtcbiAgZmlyZXNBdDogbnVtYmVyO1xuICBndW46IEd1bk1lbWJlcjtcbiAgbGV2ZWw6IEd1bkxldmVsO1xuICBsYW5lOiBudW1iZXI7XG4gIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGFpbVg/OiBudW1iZXI7IGFpbVk/OiBudW1iZXIgfVtdO1xuICBzY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgR3VuU2ltdWxhdGlvbiB7XG4gIHJlYWRvbmx5IHByb2plY3RpbGVzOiBHdW5Qcm9qZWN0aWxlW10gPSBbXTtcbiAgcmVhZG9ubHkgZWZmZWN0czogR3VuRWZmZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBzY2hlZHVsZWRWb2xsZXlzOiBTY2hlZHVsZWRWb2xsZXlbXSA9IFtdO1xuICBwcml2YXRlIHNlcXVlbmNlID0gMDtcbiAgcHJpdmF0ZSBzaG90U2VxdWVuY2UgPSAwO1xuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmVmZmVjdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGZpcmUoZ3VuOiBHdW5NZW1iZXIsIGxldmVsOiBHdW5MZXZlbCwgbGFuZTogbnVtYmVyLCBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhaW1YPzogbnVtYmVyOyBhaW1ZPzogbnVtYmVyIH1bXSwgbm93OiBudW1iZXIsIHNjYWxlID0gMSk6IHZvaWQge1xuICAgIGZvciAobGV0IGJ1cnN0SW5kZXggPSAwOyBidXJzdEluZGV4IDwgbGV2ZWwuYnVyc3RDb3VudDsgYnVyc3RJbmRleCsrKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMucHVzaCh7XG4gICAgICAgIGZpcmVzQXQ6IG5vdyArIGJ1cnN0SW5kZXggKiBsZXZlbC5idXJzdEludGVydmFsTXMsXG4gICAgICAgIGd1biwgbGV2ZWwsIGxhbmUsIG9yaWdpbnM6IG9yaWdpbnMubWFwKG9yaWdpbiA9PiAoeyAuLi5vcmlnaW4gfSkpLCBzY2FsZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpcmluZyhub3c6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGZpcmVkID0gMDtcbiAgICBjb25zdCBkdWUgPSB0aGlzLnNjaGVkdWxlZFZvbGxleXMuZmlsdGVyKHZvbGxleSA9PiB2b2xsZXkuZmlyZXNBdCA8PSBub3cpO1xuICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cyA9IHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5maWx0ZXIodm9sbGV5ID0+IHZvbGxleS5maXJlc0F0ID4gbm93KTtcbiAgICBmb3IgKGNvbnN0IHZvbGxleSBvZiBkdWUpIHtcbiAgICAgIHRoaXMuc3Bhd25Wb2xsZXkodm9sbGV5LCBub3cpO1xuICAgICAgZmlyZWQrKztcbiAgICB9XG4gICAgcmV0dXJuIGZpcmVkO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdGlsZXMoXG4gICAgZGVsdGE6IG51bWJlcixcbiAgICBub3c6IG51bWJlcixcbiAgICB0YXJnZXRzOiByZWFkb25seSBHdW5UYXJnZXRbXSxcbiAgICBib3VuZHM6IHsgdG9wOiBudW1iZXI7IGxlZnQ/OiBudW1iZXI7IHJpZ2h0PzogbnVtYmVyIH0sXG4gICAgb25IaXQ6IChwcm9qZWN0aWxlOiBHdW5Qcm9qZWN0aWxlLCB0YXJnZXQ6IEd1blRhcmdldCkgPT4gdm9pZCxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0aWxlIG9mIFsuLi50aGlzLnByb2plY3RpbGVzXSkge1xuICAgICAgcHJvamVjdGlsZS54ICs9IHByb2plY3RpbGUudnggKiBkZWx0YTtcbiAgICAgIHByb2plY3RpbGUueSArPSBwcm9qZWN0aWxlLnZ5ICogZGVsdGE7XG4gICAgICBpZiAocHJvamVjdGlsZS55IDwgYm91bmRzLnRvcCB8fCBwcm9qZWN0aWxlLnggPCAoYm91bmRzLmxlZnQgPz8gLUluZmluaXR5KSB8fCBwcm9qZWN0aWxlLnggPiAoYm91bmRzLnJpZ2h0ID8/IEluZmluaXR5KSkge1xuICAgICAgICB0aGlzLnJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICBpZiAodGFyZ2V0LmR5aW5nIHx8IHByb2plY3RpbGUubGFuZSAhPT0gdGFyZ2V0LmxhbmUgfHwgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5oYXModGFyZ2V0LmlkKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGR4ID0gcHJvamVjdGlsZS54IC0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IGR5ID0gcHJvamVjdGlsZS55IC0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IGhpdFJhZGl1cyA9IHByb2plY3RpbGUuY29sbGlzaW9uUmFkaXVzICsgdGFyZ2V0LnJhZGl1cztcbiAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gaGl0UmFkaXVzICogaGl0UmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5hZGQodGFyZ2V0LmlkKTtcbiAgICAgICAgdGFyZ2V0LmhlYWx0aCAtPSBwcm9qZWN0aWxlLmRhbWFnZTtcbiAgICAgICAgdGFyZ2V0LnkgLT0gcHJvamVjdGlsZS5rbm9ja2JhY2s7XG4gICAgICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgICAgICBraW5kOiBcImltcGFjdFwiLFxuICAgICAgICAgIHN0eWxlOiBwcm9qZWN0aWxlLmltcGFjdEVmZmVjdCxcbiAgICAgICAgICB4OiBwcm9qZWN0aWxlLngsIHk6IHByb2plY3RpbGUueSxcbiAgICAgICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgICAgICByYWRpdXM6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5oaXRGbGFzaFNjYWxlICogNCxcbiAgICAgICAgICBleHBpcmVzQXQ6IG5vdyArIHByb2plY3RpbGUuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICBkdXJhdGlvbjogcHJvamVjdGlsZS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHNlZWQ6IHByb2plY3RpbGUuaWQsXG4gICAgICAgIH0pO1xuICAgICAgICBvbkhpdChwcm9qZWN0aWxlLCB0YXJnZXQpO1xuICAgICAgICBpZiAocHJvamVjdGlsZS5waWVyY2VSZW1haW5pbmcgPiAwKSBwcm9qZWN0aWxlLnBpZXJjZVJlbWFpbmluZy0tO1xuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RpbGVzLmluY2x1ZGVzKHByb2plY3RpbGUpKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlZmZlY3Qgb2YgWy4uLnRoaXMuZWZmZWN0c10pIHtcbiAgICAgIGlmIChlZmZlY3QuZXhwaXJlc0F0IDw9IG5vdykgdGhpcy5lZmZlY3RzLnNwbGljZSh0aGlzLmVmZmVjdHMuaW5kZXhPZihlZmZlY3QpLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcm9qZWN0aWxlUHJpbWl0aXZlcygpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RpbGVzLmZsYXRNYXAocHJvamVjdGlsZSA9PiBuZXcgTmVvblByb2plY3RpbGUoe1xuICAgICAgeDogcHJvamVjdGlsZS54LCB5OiBwcm9qZWN0aWxlLnksXG4gICAgICB2ZWxvY2l0eVg6IHByb2plY3RpbGUudngsIHZlbG9jaXR5WTogcHJvamVjdGlsZS52eSxcbiAgICAgIHJhZGl1czogcHJvamVjdGlsZS5yYWRpdXMsXG4gICAgICBsZW5ndGg6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5hc3BlY3QsXG4gICAgICB0cmFpbExlbmd0aDogcHJvamVjdGlsZS50cmFpbExlbmd0aCxcbiAgICAgIHRyYWlsV2lkdGg6IE1hdGgubWF4KHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS50cmFpbFdpZHRoU2NhbGUsIDEuMSksXG4gICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvcixcbiAgICAgIHRyYWlsQ29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgIGNvcmVDb2xvcjogcHJvamVjdGlsZS5jb3JlQ29sb3IsXG4gICAgICBzaGFwZTogcHJvamVjdGlsZS5zaGFwZSBhcyBOZW9uUHJvamVjdGlsZVNoYXBlLFxuICAgICAgaW50ZW5zaXR5OiBwcm9qZWN0aWxlLnZpc3VhbEludGVuc2l0eSAqIChwcm9qZWN0aWxlLnRyYWNlciA/IDEuMzUgOiAxKSxcbiAgICAgIGdsb3c6IHByb2plY3RpbGUudHJhY2VyID8gMS40IDogLjcyLFxuICAgIH0pLnByaW1pdGl2ZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduVm9sbGV5KHZvbGxleTogU2NoZWR1bGVkVm9sbGV5LCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3VuLCBsZXZlbCwgbGFuZSwgb3JpZ2lucywgc2NhbGUgfSA9IHZvbGxleTtcbiAgICBmb3IgKGNvbnN0IG9yaWdpbiBvZiBvcmlnaW5zKSB7XG4gICAgICBjb25zdCBjb3VudCA9IE1hdGgubWF4KDEsIGxldmVsLnByb2plY3RpbGVDb3VudCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgYWltQW5nbGUgPSBvcmlnaW4uYWltWCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbi5haW1ZID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IDBcbiAgICAgICAgICA6IE1hdGguYXRhbjIob3JpZ2luLmFpbVggLSBvcmlnaW4ueCwgb3JpZ2luLnkgLSBvcmlnaW4uYWltWSk7XG4gICAgICAgIGNvbnN0IHNwcmVhZERlZ3JlZXMgPSBjb3VudCA9PT0gMSA/IDAgOiAoaW5kZXggLyAoY291bnQgLSAxKSAtIC41KSAqIGxldmVsLnNwcmVhZERlZ3JlZXM7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gYWltQW5nbGUgKyBzcHJlYWREZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBsZXZlbC5wcm9qZWN0aWxlU3BlZWQgKiBzY2FsZTtcbiAgICAgICAgdGhpcy5zaG90U2VxdWVuY2UrKztcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKHtcbiAgICAgICAgICBpZDogKyt0aGlzLnNlcXVlbmNlLCBsYW5lLFxuICAgICAgICAgIHg6IG9yaWdpbi54ICsgKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiBndW4udmlzdWFsSWRlbnRpdHkuaG9yaXpvbnRhbEppdHRlciAqIHNjYWxlLFxuICAgICAgICAgIHk6IG9yaWdpbi55LFxuICAgICAgICAgIHZ4OiBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZCxcbiAgICAgICAgICB2eTogLU1hdGguY29zKGFuZ2xlKSAqIHNwZWVkLFxuICAgICAgICAgIHJhZGl1czogbGV2ZWwucHJvamVjdGlsZVJhZGl1cyAqIHNjYWxlLFxuICAgICAgICAgIGNvbGxpc2lvblJhZGl1czogbGV2ZWwucHJvamVjdGlsZVJhZGl1cyAqIChsZXZlbC5jb2xsaXNpb25SYWRpdXNTY2FsZSA/PyAxKSAqIHNjYWxlLFxuICAgICAgICAgIGRhbWFnZTogbGV2ZWwuZGFtYWdlLFxuICAgICAgICAgIHBpZXJjZVJlbWFpbmluZzogbGV2ZWwucGllcmNlLFxuICAgICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgICAgICB0cmFpbENvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICAgICAgY29yZUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkuY29yZUNvbG9yXSxcbiAgICAgICAgICBhc3BlY3Q6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQXNwZWN0LFxuICAgICAgICAgIHRyYWlsV2lkdGhTY2FsZTogZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsV2lkdGhTY2FsZSxcbiAgICAgICAgICB2aXN1YWxJbnRlbnNpdHk6IGd1bi52aXN1YWxJZGVudGl0eS52aXN1YWxJbnRlbnNpdHksXG4gICAgICAgICAgc2hhcGU6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlU2hhcGUsXG4gICAgICAgICAgaW1wYWN0RWZmZWN0OiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RWZmZWN0LFxuICAgICAgICAgIGltcGFjdER1cmF0aW9uTXM6IGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHRyYWlsTGVuZ3RoOiBsZXZlbC50cmFpbExlbmd0aCAqIHNjYWxlLFxuICAgICAgICAgIHRyYWNlcjogbGV2ZWwudHJhY2VyRXZlcnlOdGhTaG90ID4gMCAmJiB0aGlzLnNob3RTZXF1ZW5jZSAlIGxldmVsLnRyYWNlckV2ZXJ5TnRoU2hvdCA9PT0gMCxcbiAgICAgICAgICBrbm9ja2JhY2s6IGxldmVsLmtub2NrYmFjayAqIHNjYWxlLFxuICAgICAgICAgIGhpdEZsYXNoU2NhbGU6IGxldmVsLmhpdEZsYXNoU2NhbGUsXG4gICAgICAgICAgaGl0RW5lbXlJZHM6IG5ldyBTZXQoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgIGtpbmQ6IFwibXV6emxlXCIsIHN0eWxlOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRWZmZWN0LFxuICAgICAgeDogb3JpZ2lucy5yZWR1Y2UoKHN1bSwgb3JpZ2luKSA9PiBzdW0gKyBvcmlnaW4ueCwgMCkgLyBvcmlnaW5zLmxlbmd0aCxcbiAgICAgIHk6IG9yaWdpbnNbMF0/LnkgPz8gMCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICByYWRpdXM6IDEwICogbGV2ZWwubXV6emxlRmxhc2hTY2FsZSAqIHNjYWxlLFxuICAgICAgZXhwaXJlc0F0OiBub3cgKyBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIGR1cmF0aW9uOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIHNlZWQ6IHRoaXMuc2hvdFNlcXVlbmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGU6IEd1blByb2plY3RpbGUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdGlsZXMuaW5kZXhPZihwcm9qZWN0aWxlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkgdGhpcy5wcm9qZWN0aWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHN5bmNTbG90QXJyYXk8VD4oc2xvdHM6IFRbXSwgY291bnQ6IG51bWJlciwgY3JlYXRlOiAoKSA9PiBUKTogdm9pZCB7XG4gIGNvbnN0IHRhcmdldCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IoY291bnQpKTtcbiAgd2hpbGUgKHNsb3RzLmxlbmd0aCA8IHRhcmdldCkgc2xvdHMucHVzaChjcmVhdGUoKSk7XG4gIHNsb3RzLmxlbmd0aCA9IHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkdmFuY2VDb29sZG93blNsb3RzKGNvb2xkb3duczogbnVtYmVyW10sIGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvb2xkb3ducy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb29sZG93bnNbaW5kZXhdID0gTWF0aC5tYXgoMCwgY29vbGRvd25zW2luZGV4XSAtIGRlbHRhKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlU2xvdHM8VD4oc2xvdHM6IEFycmF5PFQgfCBudWxsPiwgdXBkYXRlOiAoaXRlbTogVCkgPT4gVCB8IG51bGwpOiB2b2lkIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNsb3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBzbG90c1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHNsb3RzW2luZGV4XSA9IHVwZGF0ZShpdGVtKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhaW1lZFRhcmdldHM8VD4oXG4gIHJlbWFpbmluZzogcmVhZG9ubHkgVFtdLFxuICBzZWxlY3RlZDogcmVhZG9ubHkgVFtdLFxuICBnZXRJZDogKGl0ZW06IFQpID0+IG51bWJlcixcbik6IFRbXSB7XG4gIGNvbnN0IHNlbGVjdGVkSWRzID0gbmV3IFNldChzZWxlY3RlZC5tYXAoZ2V0SWQpKTtcbiAgcmV0dXJuIHJlbWFpbmluZy5maWx0ZXIoaXRlbSA9PiAhc2VsZWN0ZWRJZHMuaGFzKGdldElkKGl0ZW0pKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RCZXN0VW5jbGFpbWVkPFQ+KFxuICBpdGVtczogcmVhZG9ubHkgVFtdLFxuICBjbGFpbWVkSWRzOiBSZWFkb25seVNldDxudW1iZXI+LFxuICBnZXRJZDogKGl0ZW06IFQpID0+IG51bWJlcixcbiAgc2NvcmU6IChpdGVtOiBUKSA9PiBudW1iZXIgfCBudWxsLFxuKTogVCB8IG51bGwge1xuICBsZXQgYmVzdDogeyBpdGVtOiBUOyBzY29yZTogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgaWYgKGNsYWltZWRJZHMuaGFzKGdldElkKGl0ZW0pKSkgY29udGludWU7XG4gICAgY29uc3QgdmFsdWUgPSBzY29yZShpdGVtKTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIGNvbnRpbnVlO1xuICAgIGlmICghYmVzdCB8fCB2YWx1ZSA8IGJlc3Quc2NvcmUpIGJlc3QgPSB7IGl0ZW0sIHNjb3JlOiB2YWx1ZSB9O1xuICB9XG4gIHJldHVybiBiZXN0Py5pdGVtID8/IG51bGw7XG59XG4iLCAiLyoqXG4gKiBOZWFyYnlUaHJlYXRRdWVyeSBcdTIwMTQgc2hhcmVkIGxhbmUtYXdhcmUgZW5lbXkgcXVlcnkgZm9yIHNoaWVsZCBhbmQgc3dvcmQgZmFtaWxpZXMuXG4gKlxuICogQm90aCBzaGllbGRzIGFuZCBzd29yZHMgb3BlcmF0ZSBuZWFyIHRoZSBwbGF5ZXIsIHNvIHRoZXkgc2hhcmUgdGhpcyBtb2R1bGVcbiAqIHRvIGF2b2lkIGluZGVwZW5kZW50LCBwb3RlbnRpYWxseSBjb25mbGljdGluZyBzY2Fucy5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBpbnRlbnRpb25hbGx5IG1pbmltYWwuIEl0IHByb3ZpZGVzIGVub3VnaCBzdHJ1Y3R1cmUgdG8gYmVcbiAqIGZ1dHVyZS1mcmllbmRseSAob3JpZ2luU2hhcGUgaW5kZXgsIGNvbHVtbi1iYW5kIGF3YXJlbmVzcykgd2l0aG91dFxuICogb3Zlci1idWlsZGluZy4gRXh0ZW5kIHdoZW4gbmVlZGVkIFx1MjAxNCBkbyBub3QgcmVmYWN0b3IgcHJlbWF0dXJlbHkuXG4gKlxuICogTmVhci1wbGF5ZXIgZWZmZWN0IHByZWNlZGVuY2UgKGFwcGxpZWQgYnkgbWFpbi50cyk6XG4gKiAgIDEuIHNoaWVsZEJsb2NrICAgICAgICBcdTIwMTQgY2hhcmdlLWJhc2VkIGhpdCBhYnNvcnB0aW9uXG4gKiAgIDIuIHNoaWVsZFB1bHNlICAgICAgICBcdTIwMTQgZW1lcmdlbmN5IHB1c2hcbiAqICAgMy4gc3dvcmRBdHRhY2sgICAgICAgIFx1MjAxNCBzd29yZCBmYW1pbHlcbiAqICAgNC4gc2hpZWxkQ29udGFjdERhbWFnZSBcdTIwMTQgY29udGFjdCBkYW1hZ2Ugb24gc2hpZWxkIGVkZ2VcbiAqICAgNS4gc2hpZWxkQXVyYSAgICAgICAgIFx1MjAxNCBzbG93L2RlYnVmZiBhdXJhXG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKiBNaW5pbWFsIGVuZW15IGludGVyZmFjZSBleHBlY3RlZCBieSB0aGUgdGhyZWF0IHF1ZXJ5IHN5c3RlbS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0VGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogMCB8IDE7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgIi8qKlxuICogU2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc2hpZWxkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIE9uZSBTaGllbGRTdGF0ZSB0cmFja3MgdGhlIGxpdmUgcnVudGltZSBzdGF0ZSBmb3Igd2hhdGV2ZXIgc2hpZWxkIGlzXG4gKiBjdXJyZW50bHkgZXF1aXBwZWQuIFRoZSB0aWNrU2hpZWxkKCkgZnVuY3Rpb24gZHJpdmVzIGFsbCBiZWhhdmlvcmFsIG1vZGVzXG4gKiAoY2hhcmdlLCBwdWxzZSwgY29udGFjdCwgYXVyYSkgYW5kIHJldHVybnMgYSByZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKlxuICogRGVzaWduIHJ1bGU6IHRoaXMgbW9kdWxlIGRvZXMgbm90IG1vZGlmeSBlbmVteSBhcnJheXMgZGlyZWN0bHkuIEl0IHJldHVybnNcbiAqIGEgU2hpZWxkVGlja1Jlc3VsdCB0aGF0IG1haW4udHMgYXBwbGllcy4gVGhpcyBrZWVwcyB0aGUgc2hpZWxkIHN5c3RlbVxuICogdGVzdGFibGUgYW5kIGNvbXBvc2FibGUgd2l0aCBvdGhlciBuZWFyLXBsYXllciBlZmZlY3RzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgU2hpZWxkSWQsIFNoaWVsZE1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBwdWxzZSBlZmZlY3QgKHZpc3VhbClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVB1bHNlRWZmZWN0IHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBwdWxzZUR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBUaW1lc3RhbXAgd2hlbiB0aGUgcHVsc2Ugd2FzIHRyaWdnZXJlZC4gKi9cbiAgc3RhcnRlZEF0OiBudW1iZXI7XG4gIC8qKiBEdXJhdGlvbiBpbiBtcy4gKi9cbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHRyaWdnZXJlZCkuICovXG4gIHg6IG51bWJlcjtcbiAgLyoqIENlbnRlciB5LiAqL1xuICB5OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhZGl1cyBhdCBwZWFrIGV4cGFuc2lvbi4gKi9cbiAgbWF4UmFkaXVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTaGllbGQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkU3RhdGUge1xuICBzaGllbGRJZDogU2hpZWxkSWQ7XG4gIC8qKiBBY3RpdmUgc2hpZWxkIGxldmVsLiBSZXBlYXRlZCBwaWNrdXBzIG9mIHRoZSBzYW1lIHNoaWVsZCBpbmNyZWFzZSB0aGlzIHVwIHRvIDUuICovXG4gIGxldmVsOiBudW1iZXI7XG4gIC8qKiBSZW1haW5pbmcgY2hhcmdlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpLiAqL1xuICBjaGFyZ2VzOiBudW1iZXI7XG4gIC8qKiBTZWNvbmRzIHVudGlsIGNvb2xkb3duIGNvbXBsZXRlcy4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBtcyB0aW1lc3RhbXAgYWZ0ZXIgd2hpY2ggdGhlIGhpdCBmbGFzaCBpcyBkb25lLiAqL1xuICBoaXRGbGFzaFVudGlsOiBudW1iZXI7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMSBvZiBoaXQgZmxhc2ggYW5pbWF0aW9uICgxID0gZG9uZSkuICovXG4gIGhpdEZsYXNoUHJvZ3Jlc3M6IG51bWJlcjtcbiAgLyoqIEFjdGl2ZSBleHBhbmRpbmcgcHVsc2UgcmluZ3MgKFB1bHNlIENvcmUpLiAqL1xuICBwdWxzZUVmZmVjdHM6IEFjdGl2ZVB1bHNlRWZmZWN0W107XG4gIC8qKiBFbmVteSBpZHMgYWxyZWFkeSByZXNvbHZlZCBhZ2FpbnN0IHRoaXMgc2hpZWxkLCBwcmV2ZW50aW5nIHJlcGVhdCBkYW1hZ2UgcGVyIGZyYW1lLiAqL1xuICByZWFkb25seSBpbnRlcmNlcHRlZEVuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3Ioc2hpZWxkSWQ6IFNoaWVsZElkLCBtYXhDaGFyZ2VzOiBudW1iZXIsIGxldmVsID0gMSkge1xuICAgIHRoaXMuc2hpZWxkSWQgPSBzaGllbGRJZDtcbiAgICB0aGlzLmxldmVsID0gTWF0aC5taW4oNSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihsZXZlbCkpKTtcbiAgICB0aGlzLmNoYXJnZXMgPSBtYXhDaGFyZ2VzO1xuICAgIHRoaXMuY29vbGRvd25MZWZ0ID0gMDtcbiAgICB0aGlzLmhpdEZsYXNoVW50aWwgPSAwO1xuICAgIHRoaXMuaGl0Rmxhc2hQcm9ncmVzcyA9IDE7XG4gICAgdGhpcy5wdWxzZUVmZmVjdHMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZENvbnRhY3RUYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRDb250YWN0UmVzdWx0IHtcbiAgY29udGFjdGVkOiBib29sZWFuO1xuICBhYnNvcmJlZDogYm9vbGVhbjtcbiAgZGFtYWdlQWJzb3JiZWQ6IG51bWJlcjtcbiAgZW5lbXlEZXN0cm95ZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBSZXNvbHZlIG9uZSBnZW9tZXRyaWMgZW5lbXkvc2hpZWxkIGNvbnRhY3QgZXhhY3RseSBvbmNlIGZvciB0aGF0IGVuZW15LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVTaGllbGRDb250YWN0KFxuICBzdGF0ZTogU2hpZWxkU3RhdGUsXG4gIHNoaWVsZDogU2hpZWxkTWVtYmVyLFxuICB0YXJnZXQ6IFNoaWVsZENvbnRhY3RUYXJnZXQsXG4gIHNoaWVsZFg6IG51bWJlcixcbiAgc2hpZWxkWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgc2NhbGUgPSAxLFxuKTogU2hpZWxkQ29udGFjdFJlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU2hpZWxkQ29udGFjdFJlc3VsdCA9IHtcbiAgICBjb250YWN0ZWQ6IGZhbHNlLFxuICAgIGFic29yYmVkOiBmYWxzZSxcbiAgICBkYW1hZ2VBYnNvcmJlZDogMCxcbiAgICBlbmVteURlc3Ryb3llZDogZmFsc2UsXG4gIH07XG4gIGlmICh0YXJnZXQuZHlpbmcgfHwgc3RhdGUuaW50ZXJjZXB0ZWRFbmVteUlkcy5oYXModGFyZ2V0LmlkKSkgcmV0dXJuIHJlc3VsdDtcbiAgY29uc3QgcmFkaXVzID0gc2hpZWxkLnJhZGl1cyAqIHNjYWxlICsgdGFyZ2V0LnJhZGl1cztcbiAgY29uc3QgZHggPSB0YXJnZXQueCAtIHNoaWVsZFg7XG4gIGNvbnN0IGR5ID0gdGFyZ2V0LnkgLSBzaGllbGRZO1xuICBpZiAoZHggKiBkeCArIGR5ICogZHkgPiByYWRpdXMgKiByYWRpdXMpIHJldHVybiByZXN1bHQ7XG5cbiAgcmVzdWx0LmNvbnRhY3RlZCA9IHRydWU7XG4gIHN0YXRlLmludGVyY2VwdGVkRW5lbXlJZHMuYWRkKHRhcmdldC5pZCk7XG4gIGlmIChzdGF0ZS5jaGFyZ2VzIDw9IDApIHJldHVybiByZXN1bHQ7XG5cbiAgY29uc3QgYWJzb3JiZWQgPSBNYXRoLm1pbihzdGF0ZS5jaGFyZ2VzLCB0YXJnZXQuaGVhbHRoKTtcbiAgc3RhdGUuY2hhcmdlcyAtPSBhYnNvcmJlZDtcbiAgdGFyZ2V0LmhlYWx0aCAtPSBhYnNvcmJlZDtcbiAgc3RhdGUuaGl0Rmxhc2hVbnRpbCA9IG5vdyArIDI4MDtcbiAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IDA7XG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gIHJlc3VsdC5hYnNvcmJlZCA9IHRydWU7XG4gIHJlc3VsdC5kYW1hZ2VBYnNvcmJlZCA9IGFic29yYmVkO1xuICByZXN1bHQuZW5lbXlEZXN0cm95ZWQgPSB0YXJnZXQuaGVhbHRoIDw9IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHQgXHUyMDE0IHdoYXQgbWFpbi50cyBzaG91bGQgYXBwbHkgdGhpcyBmcmFtZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBjb250YWN0RGFtYWdlIHRoaXMgZnJhbWUgKGNvbnRhY3Qgc2hpZWxkcykuICovXG4gIGNvbnRhY3REYW1hZ2VFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBBbW91bnQgb2YgY29udGFjdCBkYW1hZ2UgcGVyIGVuZW15LiAqL1xuICBjb250YWN0RGFtYWdlQW1vdW50OiBudW1iZXI7XG4gIC8qKiBFbmVteSBJRHMgdGhhdCBzaG91bGQgaGF2ZSB0aGVpciBzcGVlZCBtdWx0aXBsaWVkIGJ5IHNsb3dNdWx0aXBsaWVyIChhdXJhKS4gKi9cbiAgc2xvd0VuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIEVmZmVjdGl2ZSBzbG93IG11bHRpcGxpZXIgdG8gYXBwbHkuICovXG4gIHNsb3dNdWx0aXBsaWVyOiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgc2hpZWxkIGFic29yYmVkIGEgaGl0IHRoaXMgZnJhbWUgKGNoYXJnZSBjb25zdW1lZCkuXG4gICAqIG1haW4udHMgc2hvdWxkIE5PVCBraWxsL2RhbWFnZSB0aGUgcGxheWVyIGZvciB0aGF0IGNvbGxpc2lvbi5cbiAgICovXG4gIGFic29yYmVkSGl0OiBib29sZWFuO1xuICAvKipcbiAgICogRW5lbXkgSURzIHRvIHB1c2ggYXdheSBmcm9tIHRoZSBwbGF5ZXIgY2VudGVyIChwdWxzZSBzaGllbGQpLlxuICAgKiBtYWluLnRzIHNob3VsZCBhZGQgcHVzaERpc3RhbmNlIHRvIHRoZSBlbmVteSdzIG91dHdhcmQgdmVsb2NpdHkgb3IgcG9zaXRpb24uXG4gICAqL1xuICBwdXNoRW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogUHVzaCBkaXN0YW5jZSBpbiBweC4gKi9cbiAgcHVzaERpc3RhbmNlOiBudW1iZXI7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayBmdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFBVTFNFX0RVUkFUSU9OX01TID0gNjAwO1xuXG4vKipcbiAqIERyaXZlcyB0aGUgc2hpZWxkIGZvciBvbmUgZ2FtZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgICAgICAgTXV0YWJsZSBzaGllbGQgc3RhdGUgdG8gdXBkYXRlLlxuICogQHBhcmFtIHNoaWVsZCAgICAgIEltbXV0YWJsZSBzaGllbGQgZGVmaW5pdGlvbi5cbiAqIEBwYXJhbSB0aHJlYXRzICAgICBOZWFyYnkgdGhyZWF0cyBmcm9tIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIChyYW5nZSA9IHNoaWVsZC5yYWRpdXMpLlxuICogQHBhcmFtIHBsYXllclggICAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4IChmb3IgcHVsc2Ugb3JpZ2luKS5cbiAqIEBwYXJhbSBwbGF5ZXJZICAgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgICBDdXJyZW50IHRpbWVzdGFtcCBpbiBtcy5cbiAqIEBwYXJhbSBkZWx0YSAgICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHJldHVybnMgICAgICAgICAgIEFjdGlvbnMgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU2hpZWxkKFxuICBzdGF0ZTogU2hpZWxkU3RhdGUsXG4gIHNoaWVsZDogU2hpZWxkTWVtYmVyLFxuICB0aHJlYXRzOiByZWFkb25seSBOZWFyYnlUaHJlYXRbXSxcbiAgcGxheWVyWDogbnVtYmVyLFxuICBwbGF5ZXJZOiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBkZWx0YTogbnVtYmVyLFxuKTogU2hpZWxkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU2hpZWxkVGlja1Jlc3VsdCA9IHtcbiAgICBjb250YWN0RGFtYWdlRW5lbXlJZHM6IFtdLFxuICAgIGNvbnRhY3REYW1hZ2VBbW91bnQ6IDAsXG4gICAgc2xvd0VuZW15SWRzOiBbXSxcbiAgICBzbG93TXVsdGlwbGllcjogMS4wLFxuICAgIGFic29yYmVkSGl0OiBmYWxzZSxcbiAgICBwdXNoRW5lbXlJZHM6IFtdLFxuICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgfTtcblxuICAvLyBBZHZhbmNlIGNvb2xkb3duXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwKSBzdGF0ZS5jb29sZG93bkxlZnQgPSBNYXRoLm1heCgwLCBzdGF0ZS5jb29sZG93bkxlZnQgLSBkZWx0YSk7XG5cbiAgLy8gVXBkYXRlIHB1bHNlIHByb2dyZXNzXG4gIGZvciAoY29uc3QgcHVsc2Ugb2Ygc3RhdGUucHVsc2VFZmZlY3RzKSB7XG4gICAgcHVsc2UucHJvZ3Jlc3MgPSAobm93IC0gcHVsc2Uuc3RhcnRlZEF0KSAvIHB1bHNlLmR1cmF0aW9uTXM7XG4gIH1cbiAgc3RhdGUucHVsc2VFZmZlY3RzID0gc3RhdGUucHVsc2VFZmZlY3RzLmZpbHRlcihwID0+IHAucHJvZ3Jlc3MgPCAxKTtcblxuICAvLyBBZHZhbmNlIGhpdCBmbGFzaFxuICBpZiAoc3RhdGUuaGl0Rmxhc2hVbnRpbCA+IDApIHtcbiAgICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gTWF0aC5taW4oMSwgKG5vdyAtIChzdGF0ZS5oaXRGbGFzaFVudGlsIC0gMjgwKSkgLyAyODApO1xuICB9XG5cbiAgLy8gUmVmaWxsIGNoYXJnZXMgd2hlbiBjb29sZG93biBjb21wbGV0ZXMgKGNoYXJnZS1iYXNlZCBzaGllbGRzKVxuICBpZiAoc2hpZWxkLm1vZGUgPT09IFwiY2hhcmdlXCIgJiYgc3RhdGUuY29vbGRvd25MZWZ0ID09PSAwICYmIHN0YXRlLmNoYXJnZXMgPCBzaGllbGQubWF4Q2hhcmdlcykge1xuICAgIHN0YXRlLmNoYXJnZXMgPSBzaGllbGQubWF4Q2hhcmdlcztcbiAgfVxuXG4gIGlmICh0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogY29udGFjdCBcdTIwMTQgZGVhbCBkYW1hZ2UgdG8gZW5lbWllcyB0b3VjaGluZyB0aGUgc2hpZWxkIGVkZ2VcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIHJlc3VsdC5jb250YWN0RGFtYWdlQW1vdW50ID0gc2hpZWxkLmNvbnRhY3REYW1hZ2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5jb250YWN0RGFtYWdlRW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RlOiBhdXJhIFx1MjAxNCBzbG93IGVuZW1pZXMgaW5zaWRlIHJhZGl1c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgcmVzdWx0LnNsb3dNdWx0aXBsaWVyID0gc2hpZWxkLnNsb3dNdWx0aXBsaWVyO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQuc2xvd0VuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogcHVsc2UgXHUyMDE0IGVtaXQgcHVzaCByaW5nIHdoZW4gYW55IGVuZW15IGVudGVycyByYW5nZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8gVHJpZ2dlciBwdWxzZVxuICAgIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gICAgY29uc3QgcHVsc2U6IEFjdGl2ZVB1bHNlRWZmZWN0ID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICAgIGR1cmF0aW9uTXM6IFBVTFNFX0RVUkFUSU9OX01TLFxuICAgICAgeDogcGxheWVyWCxcbiAgICAgIHk6IHBsYXllclksXG4gICAgICBtYXhSYWRpdXM6IHNoaWVsZC5yYWRpdXMgKiAxLjgsXG4gICAgICBjb2xvcjogXCJcIiwgLy8gZmlsbGVkIGJ5IGRyYXcgY29kZSB3aXRoIG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl1cbiAgICB9O1xuICAgIHN0YXRlLnB1bHNlRWZmZWN0cy5wdXNoKHB1bHNlKTtcbiAgICByZXN1bHQucHVzaERpc3RhbmNlID0gc2hpZWxkLnB1c2hEaXN0YW5jZTtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LnB1c2hFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIaXQgYWJzb3JwdGlvbiBcdTIwMTQgY2FsbGVkIGJ5IG1haW4udHMgd2hlbiBhbiBlbmVteSB3b3VsZCB0b3VjaCB0aGUgcGxheWVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGFic29yYiBhIGhpdCB1c2luZyBzaGllbGQgY2hhcmdlcy5cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaGl0IHdhcyBhYnNvcmJlZCAoY2hhcmdlIGNvbnN1bWVkKSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ5QWJzb3JiSGl0KHN0YXRlOiBTaGllbGRTdGF0ZSwgc2hpZWxkOiBTaGllbGRNZW1iZXIsIG5vdzogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChzdGF0ZS5jaGFyZ2VzIDw9IDApIHJldHVybiBmYWxzZTtcbiAgc3RhdGUuY2hhcmdlcyAtPSAxO1xuICBzdGF0ZS5oaXRGbGFzaFVudGlsID0gbm93ICsgMjgwO1xuICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gMDtcbiAgLy8gUmVjaGFyZ2UgYmVnaW5zIGFmdGVyIHRoZSBtb3N0IHJlY2VudCBhYnNvcmJlZCBoaXQuIEtlZXBpbmcgdGhlIGNvb2xkb3duXG4gIC8vIGFjdGl2ZSBwcmV2ZW50cyB0aWNrU2hpZWxkKCkgZnJvbSBpbW1lZGlhdGVseSByZXN0b3JpbmcgYSBwYXJ0aWFsbHlcbiAgLy8gZGVwbGV0ZWQgc2hpZWxkIG9uIHRoZSBuZXh0IGZyYW1lLlxuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiIsICIvKipcbiAqIFN3b3JkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc3dvcmQgc3RhdGUgYW5kIHRpY2sgbG9naWMuXG4gKlxuICogU3dvcmRzIGFyZSBOT1QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhlIHRpY2sgZnVuY3Rpb24gb25seSB0cmlnZ2VycyBhIHN3aW5nXG4gKiB3aGVuIGEgdmFsaWQgdGFyZ2V0IGV4aXN0cyBpbiByYW5nZSBhbmQgdGhlIGNvb2xkb3duIGlzIHJlYWR5LiBJdCBpZGxlcyBzaWxlbnRseVxuICogd2hlbiBubyB0YXJnZXQgaXMgcHJlc2VudC5cbiAqXG4gKiBEZXNpZ24gcnVsZTogc2FtZSBhcyBzaGllbGRFdmFsdWF0b3IgXHUyMDE0IG5vIGRpcmVjdCBlbmVteSBtdXRhdGlvbi4gUmV0dXJucyBhXG4gKiBTd29yZFRpY2tSZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBTd29yZElkLCBTd29yZE1lbWJlciwgU3dvcmRUYXJnZXRpbmdNb2RlIH0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB7IGFkdmFuY2VDb29sZG93blNsb3RzLCByZW1vdmVDbGFpbWVkVGFyZ2V0cywgc3luY1Nsb3RBcnJheSwgdXBkYXRlQWN0aXZlU2xvdHMgfSBmcm9tIFwiLi9pbmRlcGVuZGVudFdlYXBvblNsb3RzXCI7XG5pbXBvcnQgdHlwZSB7IE5lYXJieVRocmVhdCB9IGZyb20gXCIuL25lYXJieVRocmVhdFF1ZXJ5XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWN0aXZlIHNsYXNoIGFuaW1hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlU2xhc2hBbmltYXRpb24ge1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEuIERyaXZlbiBieSAobm93IC0gc3RhcnRlZEF0KSAvIGR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeCAoc25hcHNob3Qgb2YgcGxheWVyIHBvc2l0aW9uIHdoZW4gc3dpbmcgb2NjdXJyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdGFyZ2V0UG9pbnRzOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbiAgc2lkZTogLTEgfCAxO1xuICAvKiogUmVhY2ggb2YgdGhlIGFyYyBpbiBwaXhlbHMuICovXG4gIHJlYWNoOiBudW1iZXI7XG4gIC8qKiBBcmMgd2lkdGggaW4gZGVncmVlcy4gKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogQ29sb3IuICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKiBUaGlja25lc3MgbXVsdGlwbGllci4gKi9cbiAgdGhpY2tuZXNzOiBudW1iZXI7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3dvcmQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRTdGF0ZSB7XG4gIHN3b3JkSWQ6IFN3b3JkSWQ7XG4gIC8qKiBBY3RpdmUgc3dvcmQgbGV2ZWwuIFJlcGVhdGVkIHBpY2t1cHMgb2YgdGhlIHNhbWUgc3dvcmQgaW5jcmVhc2UgdGhpcyB1cCB0byA1LiAqL1xuICBsZXZlbDogbnVtYmVyO1xuICAvKiogU2Vjb25kcyByZW1haW5pbmcgdW50aWwgdGhlIHN3b3JkIGNhbiBzd2luZyBhZ2Fpbi4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgc2xhc2ggYW5pbWF0aW9uLCBpZiBhbnkuICovXG4gIGFjdGl2ZVNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG4gIHByZXZpb3VzU2xhc2hTaWRlOiAtMSB8IDE7XG4gIGNvb2xkb3duTGVmdHM6IG51bWJlcltdO1xuICBhY3RpdmVTbGFzaGVzOiBBcnJheTxBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw+O1xuICBwcmV2aW91c1NsYXNoU2lkZXM6IEFycmF5PC0xIHwgMT47XG4gIG5leHRTbG90TGF1bmNoQWxsb3dlZEF0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc3dvcmRJZDogU3dvcmRJZCwgbGV2ZWwgPSAxKSB7XG4gICAgdGhpcy5zd29yZElkID0gc3dvcmRJZDtcbiAgICB0aGlzLmxldmVsID0gTWF0aC5taW4oNSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihsZXZlbCkpKTtcbiAgICB0aGlzLmNvb2xkb3duTGVmdCA9IDA7XG4gICAgdGhpcy5hY3RpdmVTbGFzaCA9IG51bGw7XG4gICAgdGhpcy5wcmV2aW91c1NsYXNoU2lkZSA9IDE7XG4gICAgdGhpcy5jb29sZG93bkxlZnRzID0gWzBdO1xuICAgIHRoaXMuYWN0aXZlU2xhc2hlcyA9IFtudWxsXTtcbiAgICB0aGlzLnByZXZpb3VzU2xhc2hTaWRlcyA9IFsxXTtcbiAgICB0aGlzLm5leHRTbG90TGF1bmNoQWxsb3dlZEF0ID0gMDtcbiAgfVxuXG4gIHN5bmNTbG90cyhjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgc3luY1Nsb3RBcnJheSh0aGlzLmNvb2xkb3duTGVmdHMsIGNvdW50LCAoKSA9PiAwKTtcbiAgICBzeW5jU2xvdEFycmF5KHRoaXMuYWN0aXZlU2xhc2hlcywgY291bnQsICgpID0+IG51bGwpO1xuICAgIHN5bmNTbG90QXJyYXkodGhpcy5wcmV2aW91c1NsYXNoU2lkZXMsIGNvdW50LCAoKSA9PiAxKTtcbiAgICB0aGlzLmNvb2xkb3duTGVmdCA9IE1hdGgubWluKC4uLnRoaXMuY29vbGRvd25MZWZ0cyk7XG4gICAgdGhpcy5hY3RpdmVTbGFzaCA9IHRoaXMuYWN0aXZlU2xhc2hlcy5maW5kKEJvb2xlYW4pID8/IG51bGw7XG4gICAgdGhpcy5wcmV2aW91c1NsYXNoU2lkZSA9IHRoaXMucHJldmlvdXNTbGFzaFNpZGVzWzBdID8/IDE7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaWNrIHJlc3VsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRUaWNrUmVzdWx0IHtcbiAgLyoqIEVuZW15IElEcyBoaXQgYnkgdGhlIHN3aW5nIHRoaXMgZnJhbWUuIEVtcHR5IGlmIG5vIHN3aW5nIG9jY3VycmVkLiAqL1xuICBoaXRFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBIaXQgdGFyZ2V0cyB3aXRoIHRoZWlyIHBvc2l0aW9ucyBmb3IgZGVsYXllZCB2aXN1YWwvY29udGFjdCB0aW1pbmcuICovXG4gIGhpdFRhcmdldHM6IEFycmF5PHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT47XG4gIC8qKiBEYW1hZ2UgdG8gYXBwbHkgdG8gZWFjaCBoaXQgZW5lbXkuICovXG4gIGRhbWFnZTogbnVtYmVyO1xuICAvKiogV2hldGhlciBhIG5ldyBzbGFzaCB3YXMgdHJpZ2dlcmVkIHRoaXMgZnJhbWUgKGZvciBhdWRpbywgZXRjLikuICovXG4gIHN3aW5nVHJpZ2dlcmVkOiBib29sZWFuO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRhcmdldGluZyBoZWxwZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2VsZWN0VGFyZ2V0cyhcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIG1vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZSxcbiAgbWF4VGFyZ2V0czogbnVtYmVyLFxuICByb3dSZWFjaDogbnVtYmVyLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBpZiAodGhyZWF0cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKHJvd1JlYWNoID4gMSAmJiB0aHJlYXRzWzBdLnRhcmdldC5yb3dJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2VudGVyUm93ID0gdGhyZWF0c1swXS50YXJnZXQucm93SWQ7XG4gICAgY29uc3Qgcm93cyA9IFsuLi5uZXcgU2V0KHRocmVhdHNcbiAgICAgIC5tYXAodGhyZWF0ID0+IHRocmVhdC50YXJnZXQucm93SWQpXG4gICAgICAuZmlsdGVyKHJvd0lkID0+IHJvd0lkICE9PSB1bmRlZmluZWQpKV1cbiAgICAgIC5zb3J0KChhLCBiKSA9PiBNYXRoLmFicyhhIC0gY2VudGVyUm93KSAtIE1hdGguYWJzKGIgLSBjZW50ZXJSb3cpKVxuICAgICAgLnNsaWNlKDAsIHJvd1JlYWNoKTtcbiAgICByZXR1cm4gdGhyZWF0c1xuICAgICAgLmZpbHRlcih0aHJlYXQgPT4gdGhyZWF0LnRhcmdldC5yb3dJZCAhPT0gdW5kZWZpbmVkICYmIHJvd3MuaW5jbHVkZXModGhyZWF0LnRhcmdldC5yb3dJZCkpXG4gICAgICAuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG4gIH1cblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIFwibmVhcmVzdEluQ3VycmVudExhbmVcIjpcbiAgICBjYXNlIFwibmVhcmVzdEluRWl0aGVyTGFuZVwiOlxuICAgICAgLy8gcXVlcnlOZWFyYnlUaHJlYXRzKCkgYWxyZWFkeSByZXR1cm5zIHNvcnRlZCBieSBkaXN0YW5jZVxuICAgICAgcmV0dXJuIHRocmVhdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG5cbiAgICBjYXNlIFwiZnJvbnRNb3N0VGhyZWF0XCI6XG4gICAgICAvLyBIaWdoZXN0IHkgPSBtb3N0IGFkdmFuY2VkIHRvd2FyZCBwbGF5ZXJcbiAgICAgIHJldHVybiBbLi4udGhyZWF0c10uc29ydCgoYSwgYikgPT4gYi50YXJnZXQueSAtIGEudGFyZ2V0LnkpLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgY2FzZSBcImNsdXN0ZXJOZWFyUGxheWVyXCI6XG4gICAgICAvLyBBbHJlYWR5IHNvcnRlZCBieSBkaXN0YW5jZSBcdTIwMTQgdGFrZSBuZWFyZXN0IGNsdXN0ZXJcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN3b3JkUm93UmVhY2goc3dvcmQ6IFN3b3JkTWVtYmVyLCBsZXZlbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKCFzd29yZC5yb3dSZWFjaCkgcmV0dXJuIDE7XG4gIGNvbnN0IGNsYW1wZWRMZXZlbCA9IE1hdGgubWluKDUsIE1hdGgubWF4KDEsIE1hdGguZmxvb3IobGV2ZWwpKSk7XG4gIGNvbnN0IHByb2dyZXNzID0gKGNsYW1wZWRMZXZlbCAtIDEpIC8gNDtcbiAgcmV0dXJuIE1hdGgucm91bmQoc3dvcmQucm93UmVhY2gubGV2ZWwxICsgKHN3b3JkLnJvd1JlYWNoLmxldmVsNSAtIHN3b3JkLnJvd1JlYWNoLmxldmVsMSkgKiBwcm9ncmVzcyk7XG59XG5cbmZ1bmN0aW9uIHN3b3JkRGFtYWdlKHN3b3JkOiBTd29yZE1lbWJlciwgbGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChzd29yZC5kYW1hZ2VBdExldmVsNSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3dvcmQuZGFtYWdlO1xuICBjb25zdCBjbGFtcGVkTGV2ZWwgPSBNYXRoLm1pbig1LCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGxldmVsKSkpO1xuICBjb25zdCBwcm9ncmVzcyA9IChjbGFtcGVkTGV2ZWwgLSAxKSAvIDQ7XG4gIHJldHVybiBzd29yZC5kYW1hZ2UgKyAoc3dvcmQuZGFtYWdlQXRMZXZlbDUgLSBzd29yZC5kYW1hZ2UpICogcHJvZ3Jlc3M7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayBmdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRHJpdmVzIHRoZSBzd29yZCBmb3Igb25lIGdhbWUgZnJhbWUuXG4gKlxuICogQHBhcmFtIHN0YXRlICAgICBNdXRhYmxlIHN3b3JkIHN0YXRlLlxuICogQHBhcmFtIHN3b3JkICAgICBJbW11dGFibGUgc3dvcmQgZGVmaW5pdGlvbi5cbiAqIEBwYXJhbSB0aHJlYXRzICAgTmVhcmJ5IHRocmVhdHMgaW4gcmFuZ2UgZnJvbSBxdWVyeU5lYXJieVRocmVhdHMoKS5cbiAqIEBwYXJhbSBwbGF5ZXJYICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHguXG4gKiBAcGFyYW0gcGxheWVyWSAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB5LlxuICogQHBhcmFtIG5vdyAgICAgICBUaW1lc3RhbXAgaW4gbXMuXG4gKiBAcGFyYW0gZGVsdGEgICAgIEZyYW1lIGRlbHRhIGluIHNlY29uZHMuXG4gKiBAcGFyYW0gY29sb3IgICAgIFJlc29sdmVkIGhleCBjb2xvciAoZnJvbSBuZW9uUGFsZXR0ZVtzd29yZC5jb2xvcl0pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGlja1N3b3JkKFxuICBzdGF0ZTogU3dvcmRTdGF0ZSxcbiAgc3dvcmQ6IFN3b3JkTWVtYmVyLFxuICB0aHJlYXRzOiByZWFkb25seSBOZWFyYnlUaHJlYXRbXSxcbiAgcGxheWVyWDogbnVtYmVyLFxuICBwbGF5ZXJZOiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBkZWx0YTogbnVtYmVyLFxuICBjb2xvcjogc3RyaW5nLFxuICB2aXN1YWxEdXJhdGlvbk1zID0gc3dvcmQuc2xhc2hEdXJhdGlvbk1zLFxuICBzd29yZENvdW50ID0gMSxcbiAgc2xvdExhdW5jaFN0YWdnZXJNcyA9IDE4MCxcbik6IFN3b3JkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU3dvcmRUaWNrUmVzdWx0ID0ge1xuICAgIGhpdEVuZW15SWRzOiBbXSxcbiAgICBoaXRUYXJnZXRzOiBbXSxcbiAgICBkYW1hZ2U6IDAsXG4gICAgc3dpbmdUcmlnZ2VyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIHN0YXRlLnN5bmNTbG90cyhzd29yZENvdW50KTtcblxuICBhZHZhbmNlQ29vbGRvd25TbG90cyhzdGF0ZS5jb29sZG93bkxlZnRzLCBkZWx0YSk7XG4gIHVwZGF0ZUFjdGl2ZVNsb3RzKHN0YXRlLmFjdGl2ZVNsYXNoZXMsIHNsYXNoID0+IHtcbiAgICBzbGFzaC5wcm9ncmVzcyA9IChub3cgLSBzbGFzaC5zdGFydGVkQXQpIC8gc2xhc2guZHVyYXRpb25NcztcbiAgICByZXR1cm4gc2xhc2gucHJvZ3Jlc3MgPj0gMSA/IG51bGwgOiBzbGFzaDtcbiAgfSk7XG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWluKC4uLnN0YXRlLmNvb2xkb3duTGVmdHMpO1xuICBzdGF0ZS5hY3RpdmVTbGFzaCA9IHN0YXRlLmFjdGl2ZVNsYXNoZXMuZmluZChCb29sZWFuKSA/PyBudWxsO1xuXG4gIC8vIFN3b3JkcyBvbmx5IHN3aW5nIHdoZW4gYSB0YXJnZXQgZXhpc3RzIGluIHJhbmdlIEFORCBjb29sZG93biBpcyByZWFkeS5cbiAgLy8gVGhpcyBpcyB0aGUga2V5IGRpZmZlcmVuY2UgZnJvbSBndW5zLCB3aGljaCBmaXJlIG9uIGEgcGVyaW9kIHJlZ2FyZGxlc3MuXG4gIGlmICh0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICBsZXQgcmVtYWluaW5nID0gWy4uLnRocmVhdHNdO1xuICBjb25zdCBkYW1hZ2UgPSBzd29yZERhbWFnZShzd29yZCwgc3RhdGUubGV2ZWwpO1xuICBmb3IgKGxldCBzbG90ID0gMDsgc2xvdCA8IHN0YXRlLmNvb2xkb3duTGVmdHMubGVuZ3RoICYmIHJlbWFpbmluZy5sZW5ndGggPiAwOyBzbG90KyspIHtcbiAgICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0cy5sZW5ndGggPiAxICYmIG5vdyA8IHN0YXRlLm5leHRTbG90TGF1bmNoQWxsb3dlZEF0KSBicmVhaztcbiAgICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0c1tzbG90XSA+IDApIGNvbnRpbnVlO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0VGFyZ2V0cyhyZW1haW5pbmcsIHN3b3JkLnRhcmdldGluZ01vZGUsIHN3b3JkLm1heFRhcmdldHMsIHN3b3JkUm93UmVhY2goc3dvcmQsIHN0YXRlLmxldmVsKSk7XG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG4gICAgY29uc3Qgc2lkZTogLTEgfCAxID0gc3RhdGUucHJldmlvdXNTbGFzaFNpZGVzW3Nsb3RdID09PSAtMSA/IDEgOiAtMTtcbiAgICBzdGF0ZS5wcmV2aW91c1NsYXNoU2lkZXNbc2xvdF0gPSBzaWRlO1xuICAgIHN0YXRlLnByZXZpb3VzU2xhc2hTaWRlID0gc2lkZTtcbiAgICBzdGF0ZS5jb29sZG93bkxlZnRzW3Nsb3RdID0gc3dvcmQuY29vbGRvd25TZWNvbmRzO1xuICAgIGlmIChzdGF0ZS5jb29sZG93bkxlZnRzLmxlbmd0aCA+IDEpIHN0YXRlLm5leHRTbG90TGF1bmNoQWxsb3dlZEF0ID0gbm93ICsgc2xvdExhdW5jaFN0YWdnZXJNcztcbiAgICByZXN1bHQuc3dpbmdUcmlnZ2VyZWQgPSB0cnVlO1xuICAgIHJlc3VsdC5kYW1hZ2UgPSBkYW1hZ2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHNlbGVjdGVkKSB7XG4gICAgICByZXN1bHQuaGl0RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgICAgcmVzdWx0LmhpdFRhcmdldHMucHVzaCh7IGlkOiB0YXJnZXQuaWQsIHg6IHRhcmdldC54LCB5OiB0YXJnZXQueSB9KTtcbiAgICB9XG4gICAgc3RhdGUuYWN0aXZlU2xhc2hlc1tzbG90XSA9IHtcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc3RhcnRlZEF0OiBub3csXG4gICAgICBkdXJhdGlvbk1zOiB2aXN1YWxEdXJhdGlvbk1zLFxuICAgICAgeDogcGxheWVyWCxcbiAgICAgIHk6IHBsYXllclksXG4gICAgICB0YXJnZXRQb2ludHM6IHNlbGVjdGVkLm1hcCgoeyB0YXJnZXQgfSkgPT4gKHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0pKSxcbiAgICAgIHNpZGUsXG4gICAgICByZWFjaDogc3dvcmQucmFuZ2UgKiAwLjc1LFxuICAgICAgYXJjRGVncmVlczogc3dvcmQuYXJjRGVncmVlcyxcbiAgICAgIGNvbG9yLFxuICAgICAgdGhpY2tuZXNzOiBzd29yZC5zbGFzaFRoaWNrbmVzcyxcbiAgICB9O1xuICAgIHJlbWFpbmluZyA9IHJlbW92ZUNsYWltZWRUYXJnZXRzKHJlbWFpbmluZywgc2VsZWN0ZWQsICh7IHRhcmdldCB9KSA9PiB0YXJnZXQuaWQpO1xuICB9XG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWluKC4uLnN0YXRlLmNvb2xkb3duTGVmdHMpO1xuICBzdGF0ZS5hY3RpdmVTbGFzaCA9IHN0YXRlLmFjdGl2ZVNsYXNoZXMuZmluZChCb29sZWFuKSA/PyBudWxsO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBPcmJJZCB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5lbXlFbnRyYW5jZVByb2ZpbGUge1xuICBkdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbiAgc2NhdHRlck1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZW5lbXlFbnRyYW5jZVByb2ZpbGVzOiBSZWNvcmQ8T3JiSWQsIEVuZW15RW50cmFuY2VQcm9maWxlPiA9IHtcbiAgYmFzaWNPcmI6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC40OCxcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAuNTgsXG4gIH0sXG4gIGdsYXNzU2hpZWxkOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuMzQsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogMCxcbiAgfSxcbiAgd2luZ2VyOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuNDIsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogLjUsXG4gIH0sXG4gIHRhbms6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC43MixcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAuMzQsXG4gIH0sXG59O1xuIiwgImltcG9ydCB7XG4gIGRlcml2ZU5lb25DbG91ZENvcmVDb2xvcixcbiAgdHlwZSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLFxuICB0eXBlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IE9yYklkIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgRW5lbXlWaXN1YWxUeXBlID0gT3JiSWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5lbXlFeGl0RW52ZWxvcGUge1xuICBlbnRyeVNlY29uZHM6IG51bWJlcjtcbiAgZW50cnlQdW5jaDogbnVtYmVyO1xuICBzdXN0YWluU2Vjb25kczogbnVtYmVyO1xuICBzdXN0YWluTGV2ZWw6IG51bWJlcjtcbiAgZmFkZVNlY29uZHM6IG51bWJlcjtcbiAgc3BhcmtJbnRlbnNpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUV4aXRDbG91ZFByb2ZpbGUgZXh0ZW5kcyBPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwiYWdlXCIgfCBcImNvbG9yXCIgfCBcImNvcmVDb2xvclwiIHwgXCJ4XCIgfCBcInlcIiB8IFwic2VlZFwiPiB7XG4gIHNpemU6IG51bWJlcjtcbiAgZW52ZWxvcGU6IEVuZW15RXhpdEVudmVsb3BlO1xuICBjbG91ZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVFbmVteUV4aXRFZmZlY3Qge1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ6IG51bWJlcjtcbiAgYWdlOiBudW1iZXI7XG59XG5cbmNvbnN0IGJhc2ljT3JiRXhpdFByb2ZpbGU6IEVuZW15RXhpdENsb3VkUHJvZmlsZSA9IHtcbiAgY2xvdWQ6IHRydWUsXG4gIHNpemU6IDExLFxuICBkZXRhaWw6IDYsXG4gIHR1cmJ1bGVuY2U6IDIuNzIsXG4gIGdsb3c6IDExLFxuICBjb3JlSW50ZW5zaXR5OiAxLjI1LFxuICByaW1JbnRlbnNpdHk6IC44LFxuICBvcGFjaXR5OiAuODIsXG4gIGRpc3NpcGF0aW9uQWN0aW9uOiBcInNwYXJrRmFkZVwiLFxuICBkcmlmdFg6IDAsXG4gIGRyaWZ0WTogMCxcbiAgZW52ZWxvcGU6IHtcbiAgICBlbnRyeVNlY29uZHM6IC4xNixcbiAgICBlbnRyeVB1bmNoOiAyLjMzLFxuICAgIHN1c3RhaW5TZWNvbmRzOiAuMjEsXG4gICAgc3VzdGFpbkxldmVsOiAxLjIsXG4gICAgZmFkZVNlY29uZHM6IC4yOSxcbiAgICBzcGFya0ludGVuc2l0eTogMS4yMSxcbiAgfSxcbn07XG5cbmNvbnN0IG5vQ2xvdWRFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICAuLi5iYXNpY09yYkV4aXRQcm9maWxlLFxuICBjbG91ZDogZmFsc2UsXG4gIHNpemU6IDAsXG59O1xuXG5jb25zdCB0YW5rRXhpdFByb2ZpbGU6IEVuZW15RXhpdENsb3VkUHJvZmlsZSA9IHtcbiAgLi4uYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgc2l6ZTogMTUsXG4gIGdsb3c6IDEzLFxufTtcblxuZXhwb3J0IGNvbnN0IGVuZW15RXhpdFByb2ZpbGVzOiBSZWNvcmQ8RW5lbXlWaXN1YWxUeXBlLCBFbmVteUV4aXRDbG91ZFByb2ZpbGU+ID0ge1xuICBiYXNpY09yYjogYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgZ2xhc3NTaGllbGQ6IG5vQ2xvdWRFeGl0UHJvZmlsZSxcbiAgd2luZ2VyOiBiYXNpY09yYkV4aXRQcm9maWxlLFxuICB0YW5rOiB0YW5rRXhpdFByb2ZpbGUsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlFeGl0RHVyYXRpb24oZW5lbXlUeXBlOiBFbmVteVZpc3VhbFR5cGUpOiBudW1iZXIge1xuICBjb25zdCBlbnZlbG9wZSA9IGVuZW15RXhpdFByb2ZpbGVzW2VuZW15VHlwZV0uZW52ZWxvcGU7XG4gIHJldHVybiBlbnZlbG9wZS5lbnRyeVNlY29uZHMgKyBlbnZlbG9wZS5zdXN0YWluU2Vjb25kcyArIGVudmVsb3BlLmZhZGVTZWNvbmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5lbXlFeGl0RWZmZWN0KG9wdGlvbnM6IHtcbiAgZW5lbXlUeXBlOiBFbmVteVZpc3VhbFR5cGU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWVkPzogbnVtYmVyO1xufSk6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB7XG4gIHJldHVybiB7XG4gICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15VHlwZSxcbiAgICB4OiBvcHRpb25zLngsXG4gICAgeTogb3B0aW9ucy55LFxuICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yLFxuICAgIHNlZWQ6IG9wdGlvbnMuc2VlZCA/PyBNYXRoLnJhbmRvbSgpICogMTAwMCxcbiAgICBhZ2U6IDAsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbmVteUV4aXRFZmZlY3RzKGVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdLCBkZWx0YVNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBpbmRleCA9IGVmZmVjdHMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVmZmVjdCA9IGVmZmVjdHNbaW5kZXhdO1xuICAgIGVmZmVjdC5hZ2UgKz0gZGVsdGFTZWNvbmRzO1xuICAgIGlmIChlZmZlY3QuYWdlID49IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpKSBlZmZlY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15RXhpdENsb3VkKGVmZmVjdDogQWN0aXZlRW5lbXlFeGl0RWZmZWN0KTogTmVvblRvcERvd25DbG91ZEJ1cnN0IHtcbiAgY29uc3QgcHJvZmlsZSA9IGVuZW15RXhpdFByb2ZpbGVzW2VmZmVjdC5lbmVteVR5cGVdO1xuICBpZiAoIXByb2ZpbGUuY2xvdWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IGVmZmVjdC5jb2xvcixcbiAgICAgIGNvcmVDb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgICAgeDogZWZmZWN0LngsXG4gICAgICB5OiBlZmZlY3QueSxcbiAgICAgIHNpemU6IDAsXG4gICAgICBkZXRhaWw6IDMsXG4gICAgICB0dXJidWxlbmNlOiAwLFxuICAgICAgZ2xvdzogMCxcbiAgICAgIGNvcmVJbnRlbnNpdHk6IDAsXG4gICAgICByaW1JbnRlbnNpdHk6IDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgZGlzc2lwYXRpb25UaW1lOiBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKSxcbiAgICAgIGRpc3NpcGF0aW9uQWN0aW9uOiBcInNwYXJrRmFkZVwiLFxuICAgICAgc2VlZDogZWZmZWN0LnNlZWQsXG4gICAgICBhZ2U6IGVmZmVjdC5hZ2UsXG4gICAgfTtcbiAgfVxuICBjb25zdCBlbnZlbG9wZSA9IHByb2ZpbGUuZW52ZWxvcGU7XG4gIGNvbnN0IGR1cmF0aW9uID0gZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSk7XG4gIGNvbnN0IGVudHJ5VCA9IE1hdGgubWluKDEsIGVmZmVjdC5hZ2UgLyBNYXRoLm1heCguMDAxLCBlbnZlbG9wZS5lbnRyeVNlY29uZHMpKTtcbiAgY29uc3QgZmFkZVN0YXJ0ID0gZW52ZWxvcGUuZW50cnlTZWNvbmRzICsgZW52ZWxvcGUuc3VzdGFpblNlY29uZHM7XG4gIGNvbnN0IGZhZGVUID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGVmZmVjdC5hZ2UgLSBmYWRlU3RhcnQpIC8gTWF0aC5tYXgoLjAwMSwgZW52ZWxvcGUuZmFkZVNlY29uZHMpKSk7XG4gIGNvbnN0IHN1c3RhaW4gPSBlZmZlY3QuYWdlID49IGVudmVsb3BlLmVudHJ5U2Vjb25kcyAmJiBlZmZlY3QuYWdlIDwgZmFkZVN0YXJ0ID8gZW52ZWxvcGUuc3VzdGFpbkxldmVsIDogMTtcbiAgY29uc3QgZW50cnlGbGFzaCA9IDEgKyBNYXRoLnNpbihlbnRyeVQgKiBNYXRoLlBJKSAqIGVudmVsb3BlLmVudHJ5UHVuY2g7XG4gIGNvbnN0IGZhZGVFbmVyZ3kgPSAxIC0gZmFkZVQgKiAuNjI7XG4gIGNvbnN0IHNwYXJrQWNjZW50ID0gMSArIGZhZGVUICogZW52ZWxvcGUuc3BhcmtJbnRlbnNpdHkgKiAuMjI7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IGVmZmVjdC5jb2xvcixcbiAgICBjb3JlQ29sb3I6IGRlcml2ZU5lb25DbG91ZENvcmVDb2xvcihlZmZlY3QuY29sb3IpLFxuICAgIHg6IGVmZmVjdC54LFxuICAgIHk6IGVmZmVjdC55LFxuICAgIHNpemU6IHByb2ZpbGUuc2l6ZSAqICguNDggKyBlbnRyeVQgKiAuNTIpLFxuICAgIGRldGFpbDogcHJvZmlsZS5kZXRhaWwsXG4gICAgdHVyYnVsZW5jZTogcHJvZmlsZS50dXJidWxlbmNlLFxuICAgIGdsb3c6IChwcm9maWxlLmdsb3cgPz8gMSkgKiBlbnRyeUZsYXNoICogc3VzdGFpbiAqIGZhZGVFbmVyZ3kgKiBzcGFya0FjY2VudCxcbiAgICBjb3JlSW50ZW5zaXR5OiAocHJvZmlsZS5jb3JlSW50ZW5zaXR5ID8/IDEpICogKDEgKyBlbnZlbG9wZS5lbnRyeVB1bmNoICogKDEgLSBlbnRyeVQpICogLjU1KSxcbiAgICByaW1JbnRlbnNpdHk6IChwcm9maWxlLnJpbUludGVuc2l0eSA/PyAxKSAqICgxICsgZmFkZVQgKiBlbnZlbG9wZS5zcGFya0ludGVuc2l0eSAqIC4zNSksXG4gICAgb3BhY2l0eTogKHByb2ZpbGUub3BhY2l0eSA/PyAxKSAqIChlZmZlY3QuYWdlIDwgZmFkZVN0YXJ0ID8gMSA6IDEgLSBmYWRlVCAqIC44OCksXG4gICAgZGlzc2lwYXRpb25UaW1lOiBkdXJhdGlvbixcbiAgICBkaXNzaXBhdGlvbkFjdGlvbjogXCJzcGFya0ZhZGVcIixcbiAgICBkcmlmdFg6IHByb2ZpbGUuZHJpZnRYID8/IDAsXG4gICAgZHJpZnRZOiBwcm9maWxlLmRyaWZ0WSA/PyAwLFxuICAgIHNlZWQ6IGVmZmVjdC5zZWVkLFxuICAgIGFnZTogTWF0aC5taW4oZWZmZWN0LmFnZSwgZHVyYXRpb24pLFxuICB9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSwgTmVvblRvcERvd25DbG91ZEJ1cnN0LCBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIGFzcGVjdFdpZHRoOiBudW1iZXI7XG4gIGFzcGVjdEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJWaWV3cG9ydFBvbGljeSBleHRlbmRzIFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kge1xuICByZWFkb25seSBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiO1xuICByZWFkb25seSBsb2dpY2FsV2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgbG9naWNhbEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclZpZXdwb3J0OiBMYW5lUnVubmVyVmlld3BvcnRQb2xpY3kgPSB7XG4gIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXG4gIGFzcGVjdFdpZHRoOiA5LFxuICBhc3BlY3RIZWlnaHQ6IDE2LFxuICBsb2dpY2FsV2lkdGg6IDQ1MCxcbiAgbG9naWNhbEhlaWdodDogODAwLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3Mge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbG9va0FuZ2xlRGVncmVlczogbnVtYmVyO1xuICBmb2xsb3dEaXN0YW5jZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGhvcml6b246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0ZWRTY2VuZSB7XG4gIHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXTtcbiAgY2xvdWRzPzogTmVvblRvcERvd25DbG91ZEJ1cnN0W107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJWaWV3cG9ydCB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBwbGF5ZXJZOiBudW1iZXI7XG4gIGZvY3VzWD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJDYW1lcmFGb2N1c1god2lkdGg6IG51bWJlciwgdGFyZ2V0WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbiAgcmV0dXJuIGNlbnRlclggKyAodGFyZ2V0WCAtIGNlbnRlclgpICogLjU1O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQb3J0cmFpdFN0YWdlKHN0YWdlOiBIVE1MRWxlbWVudCwgcG9saWN5OiBQb3J0cmFpdFZpZXdwb3J0UG9saWN5KTogdm9pZCB7XG4gIHN0YWdlLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zdGFnZS1hc3BlY3RcIiwgYCR7cG9saWN5LmFzcGVjdFdpZHRofSAvICR7cG9saWN5LmFzcGVjdEhlaWdodH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YWdlTm9ybWFsaXplZFgoc3RhZ2U6IEhUTUxFbGVtZW50LCBjbGllbnRYOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBib3VuZHMgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChjbGllbnRYIC0gYm91bmRzLmxlZnQpIC8gYm91bmRzLndpZHRoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgPSB7XG4gIGhlaWdodDogNjUsXG4gIGxvb2tBbmdsZURlZ3JlZXM6IDI3LFxuICBmb2xsb3dEaXN0YW5jZTogMjAsXG4gIHpvb206IC4yLFxuICBob3Jpem9uOiAuNTEsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJTY2VuZShcbiAgcHJpbWl0aXZlczogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdLFxuICBzaGFwZXM6IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXSxcbiAgY2xvdWRzOiByZWFkb25seSBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXSxcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IFByb2plY3RlZFNjZW5lIHtcbiAgY29uc3QgcHJvamVjdFBvaW50ID0gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3MsIHZpZXdwb3J0KTtcblxuICBjb25zdCBwcm9qZWN0ZWRQcmltaXRpdmVzID0gcHJpbWl0aXZlcy5tYXAocHJpbWl0aXZlID0+IHtcbiAgICBpZiAocHJpbWl0aXZlLnNoYXBlID09PSBcImxpbmVcIikge1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb24gPz8gMDtcbiAgICAgIGNvbnN0IGhhbGZMZW5ndGggPSBwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aDtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54IC0gZGlyZWN0aW9uWCAqIGhhbGZMZW5ndGgsIHByaW1pdGl2ZS55IC0gZGlyZWN0aW9uWSAqIGhhbGZMZW5ndGgpO1xuICAgICAgY29uc3QgZW5kID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54ICsgZGlyZWN0aW9uWCAqIGhhbGZMZW5ndGgsIHByaW1pdGl2ZS55ICsgZGlyZWN0aW9uWSAqIGhhbGZMZW5ndGgpO1xuICAgICAgY29uc3QgZHggPSBlbmQueCAtIHN0YXJ0Lng7XG4gICAgICBjb25zdCBkeSA9IGVuZC55IC0gc3RhcnQueTtcbiAgICAgIGNvbnN0IHNjYWxlID0gKHN0YXJ0LnNjYWxlICsgZW5kLnNjYWxlKSAqIC41O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJpbWl0aXZlLFxuICAgICAgICB4OiAoc3RhcnQueCArIGVuZC54KSAvIDIsXG4gICAgICAgIHk6IChzdGFydC55ICsgZW5kLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IHByaW1pdGl2ZS53aWR0aCAqIHNjYWxlLFxuICAgICAgICBoZWlnaHQ6IE1hdGguaHlwb3QoZHgsIGR5KSAvIDIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCwgcHJpbWl0aXZlLnkpO1xuICAgIGNvbnN0IHdpZHRoID0gcHJpbWl0aXZlLndpZHRoICogcG9pbnQuc2NhbGU7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoKSAqIHBvaW50LnNjYWxlO1xuICAgIGxldCByb3RhdGlvbiA9IHByaW1pdGl2ZS5yb3RhdGlvbjtcbiAgICBpZiAocm90YXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYXhpc0xlbmd0aCA9IE1hdGgubWF4KHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoLCBwcmltaXRpdmUud2lkdGgsIDEpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWCA9IC1NYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICBjb25zdCBkaXJlY3Rpb25ZID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgY29uc3QgZW5kID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54ICsgZGlyZWN0aW9uWCAqIGF4aXNMZW5ndGgsIHByaW1pdGl2ZS55ICsgZGlyZWN0aW9uWSAqIGF4aXNMZW5ndGgpO1xuICAgICAgcm90YXRpb24gPSBNYXRoLmF0YW4yKHBvaW50LnggLSBlbmQueCwgZW5kLnkgLSBwb2ludC55KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByb3RhdGlvbixcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0ZWRTaGFwZXMgPSBzaGFwZXNcbiAgICAubWFwKHNoYXBlID0+IHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hhcGUsXG4gICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgIHNpemU6IHNoYXBlLnNpemUgKiBwb2ludC5zY2FsZSxcbiAgICAgICAgejogKHNoYXBlLnogPz8gMCkgLSBwb2ludC5kZXB0aCAqIC4wMDA4LFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiAoKGIueiA/PyAwKSAtIChhLnogPz8gMCkpKTtcblxuICBjb25zdCBwcm9qZWN0ZWRDbG91ZHMgPSBjbG91ZHMubWFwKGNsb3VkID0+IHtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChjbG91ZC54LCBjbG91ZC55KTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xvdWQsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHNpemU6IGNsb3VkLnNpemUgKiBwb2ludC5zY2FsZSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzOiBwcm9qZWN0ZWRQcmltaXRpdmVzLCBjbG91ZHM6IHByb2plY3RlZENsb3Vkcywgc2hhcGVzOiBwcm9qZWN0ZWRTaGFwZXMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyUG9pbnQoXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgZGVwdGg6IG51bWJlciB9IHtcbiAgcmV0dXJuIHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCkoeCwgeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnByb2plY3RIZWxpY29wdGVyU2NyZWVuUG9pbnQoXG4gIHNjcmVlblg6IG51bWJlcixcbiAgc2NyZWVuWTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgY29uc3QgZmFsbGJhY2sgPSB7IHg6IHNjcmVlblgsIHk6IHNjcmVlblkgfTtcbiAgY29uc3QgY2VudGVyWCA9IHZpZXdwb3J0LndpZHRoIC8gMjtcbiAgY29uc3QgZm9jdXNYID0gdmlld3BvcnQuZm9jdXNYID8/IGNlbnRlclg7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgY29uc3Qgc2NyZWVuUmF0aW8gPSAoaG9yaXpvblkgLSBzY3JlZW5ZKSAvIGZvY2FsTGVuZ3RoO1xuICBjb25zdCBkZW5vbWluYXRvciA9IHNpbiAtIHNjcmVlblJhdGlvICogY29zO1xuICBpZiAoTWF0aC5hYnMoZGVub21pbmF0b3IpIDwgLjAwMDEpIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3Qgd29ybGRaID0gLXJlbGF0aXZlWSAqIChjb3MgKyBzY3JlZW5SYXRpbyAqIHNpbikgLyBkZW5vbWluYXRvcjtcbiAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KDIwLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICBjb25zdCBzY2FsZSA9IGZvY2FsTGVuZ3RoIC8gY2FtZXJhWjtcbiAgY29uc3QgcG9pbnQgPSB7XG4gICAgeDogZm9jdXNYICsgKHNjcmVlblggLSBjZW50ZXJYKSAvIHNjYWxlLFxuICAgIHk6IHZpZXdwb3J0LnBsYXllclkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZSAtIHdvcmxkWixcbiAgfTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShwb2ludC54KSAmJiBOdW1iZXIuaXNGaW5pdGUocG9pbnQueSkgJiYgTWF0aC5hYnMocG9pbnQueCkgPCA1MDAwICYmIE1hdGguYWJzKHBvaW50LnkpIDwgNTAwMFxuICAgID8gcG9pbnRcbiAgICA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0KSB7XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IGZvY3VzWCA9IHZpZXdwb3J0LmZvY3VzWCA/PyBjZW50ZXJYO1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IG1pbkRlcHRoID0gMjA7XG5cbiAgcmV0dXJuICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3Qgd29ybGRYID0geCAtIGZvY3VzWDtcbiAgICBjb25zdCB3b3JsZFogPSB2aWV3cG9ydC5wbGF5ZXJZIC0geSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlO1xuICAgIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gICAgY29uc3QgY2FtZXJhWSA9IHJlbGF0aXZlWSAqIGNvcyArIHdvcmxkWiAqIHNpbjtcbiAgICBjb25zdCBjYW1lcmFaID0gTWF0aC5tYXgobWluRGVwdGgsIHdvcmxkWiAqIGNvcyAtIHJlbGF0aXZlWSAqIHNpbik7XG4gICAgY29uc3Qgc2NhbGUgPSBmb2NhbExlbmd0aCAvIGNhbWVyYVo7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyB3b3JsZFggKiBzY2FsZSxcbiAgICAgIHk6IGhvcml6b25ZIC0gY2FtZXJhWSAqIHNjYWxlLFxuICAgICAgc2NhbGUsXG4gICAgICBkZXB0aDogY2FtZXJhWixcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29ybGRZRm9yUHJvamVjdGVkWShcbiAgc2NyZWVuWTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogeyBoZWlnaHQ6IG51bWJlcjsgcGxheWVyWTogbnVtYmVyIH0sXG4pOiBudW1iZXIge1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gIGNvbnN0IHNjcmVlblJhdGlvID0gKGhvcml6b25ZIC0gc2NyZWVuWSkgLyBmb2NhbExlbmd0aDtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBzaW4gLSBzY3JlZW5SYXRpbyAqIGNvcztcbiAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IC4wMDAxKSByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIGNvbnN0IHdvcmxkWiA9IC1yZWxhdGl2ZVkgKiAoY29zICsgc2NyZWVuUmF0aW8gKiBzaW4pIC8gZGVub21pbmF0b3I7XG4gIHJldHVybiB2aWV3cG9ydC5wbGF5ZXJZICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2UgLSB3b3JsZFo7XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5LCB0eXBlIE9yYklkLCB0eXBlIE9yYk1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBlbmVteUVudHJhbmNlUHJvZmlsZXMgfSBmcm9tIFwiLi9lbmVteUVudHJhbmNlVmlzdWFsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlFeGl0RWZmZWN0LCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB9IGZyb20gXCIuL2VuZW15RXhpdFZpc3VhbHNcIjtcbmltcG9ydCB7IHByb2plY3RIZWxpY29wdGVyUG9pbnQsIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB0eXBlIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VHJhY2tJZCA9IGBlbmVteS4ke3N0cmluZ31gO1xuXG5leHBvcnQgY29uc3QgZW5lbXlUcmFja0lkID0gKGVuZW15SWQ6IE9yYklkKTogRW5lbXlUcmFja0lkID0+XG4gIGVuZW15SWQgPT09IFwiYmFzaWNPcmJcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2VuZW15SWR9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoaWQ6IHN0cmluZyk6IHsgZW5lbXlJZDogT3JiSWQ7IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHwgbnVsbCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCA/IHsgZW5lbXlJZCwgZGVmaW5pdGlvbjogb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0gfSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQ6IE9yYklkKTogTmVvblNoYXBlQWN0b3Ige1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF07XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGRlZmluaXRpb24uc2hhcGVJZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgRW5lbXkgXCIke2VuZW15SWR9XCIgdXNlcyBtaXNzaW5nIE5lb25GYWN0b3J5IHNoYXBlIFwiJHtkZWZpbml0aW9uLnNoYXBlSWR9XCIuYCk7XG4gIGNvbnN0IGVudHJhbmNlID0gZW5lbXlFbnRyYW5jZVByb2ZpbGVzW2VuZW15SWRdO1xuICBjb25zdCBhY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7XG4gICAgc2hhcGUsXG4gICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcbiAgICBlbnRyYW5jZUR1cmF0aW9uOiBlbnRyYW5jZS5kdXJhdGlvblNlY29uZHMsXG4gICAgZW50cmFuY2VNYWduaXR1ZGU6IGVudHJhbmNlLnNjYXR0ZXJNYWduaXR1ZGUsXG4gIH0pO1xuICByZXR1cm4gYWN0b3IuZW50ZXIoZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLCBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RGVhdGhFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHwgbnVsbCB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15SWRdO1xuICBpZiAoZGVmaW5pdGlvbi5kZWF0aFZpc3VhbCAhPT0gXCJjbG91ZFwiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNyZWF0ZUVuZW15RXhpdEVmZmVjdCh7XG4gICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15SWQsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZUVuZW15QWN0b3IoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBkZWZpbml0aW9uOiBPcmJNZW1iZXIpOiB2b2lkIHtcbiAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IGRlZmluaXRpb24uZXhwbG9zaW9uTWFnbml0dWRlO1xuICBhY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhbWFnZWFibGVFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVhdEVuZW15KFxuICBlbmVteTogRGFtYWdlYWJsZUVuZW15LFxuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSxcbiAgY29sb3I6IHN0cmluZyA9IG5lb25QYWxldHRlW29yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdLmJhc2VDb2xvcl0sXG4pOiBPcmJNZW1iZXIge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gIGVuZW15LmR5aW5nID0gdHJ1ZTtcbiAgaWYgKCFlbmVteS5leGl0RWZmZWN0U3Bhd25lZCkge1xuICAgIGVuZW15LmV4aXRFZmZlY3RTcGF3bmVkID0gdHJ1ZTtcbiAgICBjb25zdCBlZmZlY3QgPSBjcmVhdGVFbmVteURlYXRoRWZmZWN0KHtcbiAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICB4OiBlbmVteS54LFxuICAgICAgeTogZW5lbXkueSxcbiAgICAgIGNvbG9yLFxuICAgICAgc2VlZDogZW5lbXkuaWQsXG4gICAgfSk7XG4gICAgaWYgKGVmZmVjdCkgZWZmZWN0cy5wdXNoKGVmZmVjdCk7XG4gIH1cbiAgZGlzcG9zZUVuZW15QWN0b3IoZW5lbXkuYWN0b3IsIGRlZmluaXRpb24pO1xuICByZXR1cm4gZGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFbmVteURhbWFnZShvcHRpb25zOiB7XG4gIGVuZW15OiBEYW1hZ2VhYmxlRW5lbXk7XG4gIGVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdO1xuICBkYW1hZ2U/OiBudW1iZXI7XG4gIGltcGFjdE1hZ25pdHVkZT86IG51bWJlcjtcbiAgaGl0Rmxhc2hVbnRpbD86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG59KTogeyBraWxsZWQ6IGJvb2xlYW47IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW29wdGlvbnMuZW5lbXkuZW5lbXlJZF07XG4gIGlmIChvcHRpb25zLmRhbWFnZSkgb3B0aW9ucy5lbmVteS5oZWFsdGggLT0gb3B0aW9ucy5kYW1hZ2U7XG4gIGlmIChvcHRpb25zLmltcGFjdE1hZ25pdHVkZSkge1xuICAgIG9wdGlvbnMuZW5lbXkuYWN0b3IuaW1wYWN0KHtcbiAgICAgIGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sXG4gICAgICBtYWduaXR1ZGU6IG9wdGlvbnMuaW1wYWN0TWFnbml0dWRlIC8gZGVmaW5pdGlvbi5pbXBhY3RSZXNpc3RhbmNlLFxuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLmhpdEZsYXNoVW50aWwgIT09IHVuZGVmaW5lZCkgb3B0aW9ucy5lbmVteS5oaXRGbGFzaFVudGlsID0gb3B0aW9ucy5oaXRGbGFzaFVudGlsO1xuICBpZiAob3B0aW9ucy5lbmVteS5oZWFsdGggPD0gMCkge1xuICAgIHJldHVybiB7IGtpbGxlZDogdHJ1ZSwgZGVmaW5pdGlvbjogZGVmZWF0RW5lbXkob3B0aW9ucy5lbmVteSwgb3B0aW9ucy5lZmZlY3RzLCBvcHRpb25zLmNvbG9yKSB9O1xuICB9XG4gIHJldHVybiB7IGtpbGxlZDogZmFsc2UsIGRlZmluaXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhvcHRpb25zOiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHZpc2libGVUaHJlc2hvbGQ/OiBudW1iZXI7XG59KTogTmVvblByaW1pdGl2ZVtdIHtcbiAgY29uc3QgdGhyZXNob2xkID0gb3B0aW9ucy52aXNpYmxlVGhyZXNob2xkID8/IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmhlYWx0aDtcbiAgaWYgKG9wdGlvbnMubWF4SGVhbHRoIDw9IHRocmVzaG9sZCkgcmV0dXJuIFtdO1xuICBjb25zdCByYXRpbyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wdGlvbnMuaGVhbHRoIC8gb3B0aW9ucy5tYXhIZWFsdGgpKTtcbiAgY29uc3QgeSA9IG9wdGlvbnMueTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgzNiwgb3B0aW9ucy53aWR0aCk7XG4gIGNvbnN0IGxlZnQgPSBvcHRpb25zLnggLSB3aWR0aCAvIDI7XG4gIGNvbnN0IGZpbGxlZCA9IE1hdGgubWF4KDAsIHdpZHRoICogcmF0aW8pO1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHg6IG9wdGlvbnMueCxcbiAgICAgIHksXG4gICAgICB3aWR0aDogOC44LFxuICAgICAgaGVpZ2h0OiB3aWR0aCAvIDIsXG4gICAgICBjb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBnbG93OiAuMDgsXG4gICAgICBpbnRlbnNpdHk6IC40MixcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IGxlZnQgKyBmaWxsZWQgLyAyLFxuICAgICAgeSxcbiAgICAgIHdpZHRoOiA3LjIsXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KDEsIGZpbGxlZCkgLyAyLFxuICAgICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6IC43OCxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15SGVhbHRoQmFyVGFyZ2V0IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoXG4gIHRhcmdldHM6IHJlYWRvbmx5IEVuZW15SGVhbHRoQmFyVGFyZ2V0W10sXG4gIGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gdGFyZ2V0cy5mbGF0TWFwKHRhcmdldCA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW3RhcmdldC5lbmVteUlkXTtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnQodGFyZ2V0LngsIHRhcmdldC55LCBjYW1lcmFTZXR0aW5ncywgdmlld3BvcnQpO1xuICAgIGNvbnN0IHByb2plY3RlZFNpemUgPSB0YXJnZXQuc2l6ZSAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IHNjYWxlID0gdGFyZ2V0LnNjYWxlID8/IDE7XG4gICAgcmV0dXJuIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSAtIHByb2plY3RlZFNpemUgKiAuNzIgLSAxMixcbiAgICAgIHdpZHRoOiBNYXRoLm1heChwcm9qZWN0ZWRTaXplICogMS4zNSwgZGVmaW5pdGlvbi5yYWRpdXMgKiA1LjIgKiBzY2FsZSAqIHBvaW50LnNjYWxlKSxcbiAgICAgIGhlYWx0aDogdGFyZ2V0LmhlYWx0aCxcbiAgICAgIG1heEhlYWx0aDogdGFyZ2V0Lm1heEhlYWx0aCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgU2hpZWxkTWVtYmVyLCBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5VmlzdWFsU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5jb25zdCBlbXB0eVNjZW5lID0gKCk6IEZhbWlseVZpc3VhbFNjZW5lID0+ICh7IHByaW1pdGl2ZXM6IFtdLCBzaGFwZXM6IFtdIH0pO1xuY29uc3QgcmVxdWlyZWRTaGFwZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7aWR9XCIgaXMgcmVxdWlyZWQgYnkgZmFtaWx5IHZpc3VhbHMuYCk7XG4gIHJldHVybiBzaGFwZTtcbn07XG5jb25zdCBpc1NhZmVTY2VuZVBvaW50ID0gKHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBib29sZWFuID0+XG4gIE51bWJlci5pc0Zpbml0ZShwb2ludC54KSAmJiBOdW1iZXIuaXNGaW5pdGUocG9pbnQueSkgJiYgTWF0aC5hYnMocG9pbnQueCkgPCA1MDAwICYmIE1hdGguYWJzKHBvaW50LnkpIDwgNTAwMDtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRWaXN1YWxPcHRpb25zIHtcbiAgZGVmaW5pdGlvbjogU2hpZWxkTWVtYmVyO1xuICBzdHJlbmd0aDogbnVtYmVyO1xuICBpbml0aWFsU3RyZW5ndGg6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG5vdzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgcHJvamVjdFNjcmVlbk9mZnNldD86ICh4OiBudW1iZXIsIHk6IG51bWJlciwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIpID0+IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgaGl0UHJvZ3Jlc3M/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpZWxkVmlzdWFscyhvcHRpb25zOiBTaGllbGRWaXN1YWxPcHRpb25zKTogRmFtaWx5VmlzdWFsU2NlbmUge1xuICBjb25zdCBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcbiAgY29uc3Qge1xuICAgIGRlZmluaXRpb24sIHgsIHksIG5vdyxcbiAgICBzY2FsZSA9IDEsXG4gICAgcHJvamVjdFNjcmVlbk9mZnNldCxcbiAgICBoaXRQcm9ncmVzcyA9IDEsXG4gICAgdmlzaWJsZSA9IHRydWUsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBzdHJlbmd0aCA9IE1hdGgubWF4KDAsIG9wdGlvbnMuc3RyZW5ndGgpO1xuICBjb25zdCBpbml0aWFsU3RyZW5ndGggPSBNYXRoLm1heCgxLCBvcHRpb25zLmluaXRpYWxTdHJlbmd0aCk7XG4gIGNvbnN0IGltcGFjdCA9IE1hdGgubWF4KDAsIDEgLSBoaXRQcm9ncmVzcyk7XG4gIGNvbnN0IGV4cGxvZGluZyA9IHN0cmVuZ3RoIDw9IDAgJiYgaGl0UHJvZ3Jlc3MgPCAxO1xuICBjb25zdCBjb2xvciA9IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdO1xuICBjb25zdCByYWRpdXMgPSBkZWZpbml0aW9uLnJhZGl1cyAqIHNjYWxlO1xuXG4gIGlmICh2aXNpYmxlIHx8IGV4cGxvZGluZykge1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic2hpZWxkLXJpbmdcIiksXG4gICAgICB4LCB5LFxuICAgICAgc2l6ZTogcmFkaXVzLFxuICAgICAgY29sb3IsXG4gICAgICBsaW5lVGhpY2tuZXNzOiAuNzIsXG4gICAgICBnbG93OiAxICsgaW1wYWN0ICogLjgsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZW5lcmd5SW50ZW5zaXR5OiAxLjE1ICsgaW1wYWN0ICogMS41LFxuICAgICAgZW5lcmd5Q292ZXJhZ2U6IC40MiArIGltcGFjdCAqIC4zLFxuICAgICAgZW5lcmd5U3BlZWQ6IDEuMTUgKyBpbXBhY3QgKiAxLjIsXG4gICAgICBlbmVyZ3lCbGVlZDogLjUgKyBpbXBhY3QgKiAuMzUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IGV4cGxvZGluZyA/IE1hdGgubWluKDEsIGhpdFByb2dyZXNzKSA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiAuOSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghdmlzaWJsZSkgcmV0dXJuIHNjZW5lO1xuICBjb25zdCBvcmJpdGVyU2hhcGUgPSByZXF1aXJlZFNoYXBlKGRlZmluaXRpb24ub3JiaXRlclNoYXBlID09PSBcImhleFwiID8gXCJoZXgtZmlnaHRlclwiIDogXCJzdGFyLWNvcmVcIik7XG4gIGNvbnN0IG9yYml0ZXJDb3VudCA9IE1hdGguY2VpbChkZWZpbml0aW9uLm9yYml0ZXJDb3VudCAqIHN0cmVuZ3RoIC8gaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgYW5nbGVTdGVwID0gTWF0aC5QSSAqIDIgLyBkZWZpbml0aW9uLm9yYml0ZXJDb3VudDtcbiAgY29uc3QgYmFzZUFuZ2xlID0gbm93IC8gMTAwMCAqIGRlZmluaXRpb24ub3JiaXRlclNwZWVkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yYml0ZXJDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSBiYXNlQW5nbGUgKyBpICogYW5nbGVTdGVwO1xuICAgIGNvbnN0IGZhbGxiYWNrT3JiaXRlciA9IHsgeDogeCArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgeTogeSArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cyB9O1xuICAgIGNvbnN0IHByb2plY3RlZE9yYml0ZXIgPSBwcm9qZWN0U2NyZWVuT2Zmc2V0Py4oeCwgeSwgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMpO1xuICAgIGNvbnN0IG9yYml0ZXIgPSBwcm9qZWN0ZWRPcmJpdGVyICYmIGlzU2FmZVNjZW5lUG9pbnQocHJvamVjdGVkT3JiaXRlcikgPyBwcm9qZWN0ZWRPcmJpdGVyIDogZmFsbGJhY2tPcmJpdGVyO1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiBvcmJpdGVyU2hhcGUsXG4gICAgICB4OiBvcmJpdGVyLngsXG4gICAgICB5OiBvcmJpdGVyLnksXG4gICAgICBzaXplOiBkZWZpbml0aW9uLm9yYml0ZXJTaXplICogMS44ICogc2NhbGUsXG4gICAgICBjb2xvcixcbiAgICAgIHJvdGF0aW9uWjogYW5nbGUgKyBub3cgLyAxNDAwLFxuICAgICAgbGluZVRoaWNrbmVzczogLjcyLFxuICAgICAgZ2xvdzogMSxcbiAgICAgIGVuZXJneUludGVuc2l0eTogMS4xLFxuICAgICAgZW5lcmd5Q292ZXJhZ2U6IC40LFxuICAgICAgZW5lcmd5U3BlZWQ6IDEuMjUsXG4gICAgICBlbmVyZ3lCbGVlZDogLjUsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFN3b3JkTWVtYmVyO1xuICBzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24gfCBudWxsO1xuICBzbGFzaGVzPzogcmVhZG9ubHkgKEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbClbXTtcbiAgZG9ja1NpZGU6IC0xIHwgMTtcbiAgZG9ja1NpZGVzPzogcmVhZG9ubHkgKC0xIHwgMSlbXTtcbiAgcG9pbnRzOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbiAgdHVuaW5nPzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz47XG4gIHNjYWxlPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbFR1bmluZyB7XG4gIGRvY2tTaWRlT2Zmc2V0OiBudW1iZXI7XG4gIGRvY2tGb3J3YXJkOiBudW1iZXI7XG4gIHN0cmlrZUR1cmF0aW9uOiBudW1iZXI7XG4gIGZvbGxvd1Rocm91Z2hEdXJhdGlvbjogbnVtYmVyO1xuICBzd2luZ0FuZ2xlOiBudW1iZXI7XG4gIGFyY0xpZnQ6IG51bWJlcjtcbiAgYXJjUmFkaXVzOiBudW1iZXI7XG4gIHRyYWlsU2VnbWVudHM6IG51bWJlcjtcbiAgdHJhaWxXaWR0aDogbnVtYmVyO1xuICB0cmFpbEludGVuc2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN3b3JkVmlzdWFsVHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyA9IHtcbiAgZG9ja1NpZGVPZmZzZXQ6IDEzLFxuICBkb2NrRm9yd2FyZDogMyxcbiAgc3RyaWtlRHVyYXRpb246IC4zMSxcbiAgZm9sbG93VGhyb3VnaER1cmF0aW9uOiAuMTgsXG4gIHN3aW5nQW5nbGU6IDIuOCxcbiAgYXJjTGlmdDogMTQsXG4gIGFyY1JhZGl1czogNDIsXG4gIHRyYWlsU2VnbWVudHM6IDE0LFxuICB0cmFpbFdpZHRoOiAyLjYsXG4gIHRyYWlsSW50ZW5zaXR5OiAuNzUsXG59O1xuXG5leHBvcnQgY29uc3QgY29tcGxldGVTd29yZFZpc3VhbFR1bmluZyA9ICh0dW5pbmc/OiBQYXJ0aWFsPFN3b3JkVmlzdWFsVHVuaW5nPik6IFN3b3JkVmlzdWFsVHVuaW5nID0+ICh7XG4gIC4uLmRlZmF1bHRTd29yZFZpc3VhbFR1bmluZyxcbiAgLi4udHVuaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzd29yZFZpc3VhbER1cmF0aW9uTXMgPSAodHVuaW5nPzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz4pOiBudW1iZXIgPT4ge1xuICBjb25zdCByZXNvbHZlZCA9IGNvbXBsZXRlU3dvcmRWaXN1YWxUdW5pbmcodHVuaW5nKTtcbiAgcmV0dXJuIE1hdGgubWF4KDEyMCwgKHJlc29sdmVkLnN0cmlrZUR1cmF0aW9uICsgcmVzb2x2ZWQuZm9sbG93VGhyb3VnaER1cmF0aW9uKSAqIDEwMDApO1xufTtcblxuZnVuY3Rpb24gcXVhZHJhdGljUG9pbnQoZnJvbTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb250cm9sOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHRvOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHQ6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGNvbnN0IGludiA9IDEgLSB0O1xuICByZXR1cm4ge1xuICAgIHg6IGludiAqIGludiAqIGZyb20ueCArIDIgKiBpbnYgKiB0ICogY29udHJvbC54ICsgdCAqIHQgKiB0by54LFxuICAgIHk6IGludiAqIGludiAqIGZyb20ueSArIDIgKiBpbnYgKiB0ICogY29udHJvbC55ICsgdCAqIHQgKiB0by55LFxuICB9O1xufVxuXG5mdW5jdGlvbiBjdWJpY1BvaW50KFxuICBmcm9tOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIGNvbnRyb2xBOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIGNvbnRyb2xCOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHRvOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHQ6IG51bWJlcixcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGNvbnN0IGludiA9IDEgLSB0O1xuICByZXR1cm4ge1xuICAgIHg6IGludiAqKiAzICogZnJvbS54ICsgMyAqIGludiAqIGludiAqIHQgKiBjb250cm9sQS54ICsgMyAqIGludiAqIHQgKiB0ICogY29udHJvbEIueCArIHQgKiogMyAqIHRvLngsXG4gICAgeTogaW52ICoqIDMgKiBmcm9tLnkgKyAzICogaW52ICogaW52ICogdCAqIGNvbnRyb2xBLnkgKyAzICogaW52ICogdCAqIHQgKiBjb250cm9sQi55ICsgdCAqKiAzICogdG8ueSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3dvcmRQYXRoKFxuICBiYXNlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHRhcmdldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBkZXN0aW5hdGlvblNpZGU6IC0xIHwgMSxcbiAgc2NhbGU6IG51bWJlcixcbiAgdHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyxcbiAgY3Jvc3NMYW5lOiBib29sZWFuLFxuICB0YXJnZXRTcGFuOiBudW1iZXIsXG4pIHtcbiAgY29uc3Qgc3RhcnRTaWRlOiAtMSB8IDEgPSBkZXN0aW5hdGlvblNpZGUgPT09IDEgPyAtMSA6IDE7XG4gIGNvbnN0IHN3ZWVwV2lkdGggPSBjcm9zc0xhbmUgPyB0YXJnZXRTcGFuICogLjM0IDogMDtcbiAgY29uc3Qgc3RhcnQgPSB7IHg6IGJhc2UueCArIHN0YXJ0U2lkZSAqICh0dW5pbmcuZG9ja1NpZGVPZmZzZXQgKiBzY2FsZSArIHN3ZWVwV2lkdGgpLCB5OiBiYXNlLnkgLSB0dW5pbmcuZG9ja0ZvcndhcmQgKiBzY2FsZSB9O1xuICBjb25zdCBmaW5pc2ggPSB7IHg6IGJhc2UueCArIGRlc3RpbmF0aW9uU2lkZSAqICh0dW5pbmcuZG9ja1NpZGVPZmZzZXQgKiBzY2FsZSArIHN3ZWVwV2lkdGgpLCB5OiBiYXNlLnkgLSB0dW5pbmcuZG9ja0ZvcndhcmQgKiBzY2FsZSB9O1xuICBjb25zdCB0YXJnZXRJbmZsdWVuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0dW5pbmcuYXJjUmFkaXVzIC8gMTAwKSk7XG4gIGNvbnN0IGFwZXggPSB7XG4gICAgeDogKChzdGFydC54ICsgZmluaXNoLngpIC8gMiAqICgxIC0gdGFyZ2V0SW5mbHVlbmNlKSArIHRhcmdldC54ICogdGFyZ2V0SW5mbHVlbmNlKSArIGRlc3RpbmF0aW9uU2lkZSAqIChjcm9zc0xhbmUgPyAxMiAqIHNjYWxlIDogMCksXG4gICAgeTogTWF0aC5taW4oc3RhcnQueSwgZmluaXNoLnksIHRhcmdldC55KSAtIHR1bmluZy5hcmNMaWZ0ICogc2NhbGUsXG4gIH07XG4gIGNvbnN0IGNvbnRyb2xBID0ge1xuICAgIHg6IHN0YXJ0LnggKyBzdGFydFNpZGUgKiB0dW5pbmcuc3dpbmdBbmdsZSAqIChjcm9zc0xhbmUgPyAxOCA6IDEzKSAqIHNjYWxlLFxuICAgIHk6IHN0YXJ0LnkgKyAxMCAqIHNjYWxlLFxuICB9O1xuICBjb25zdCBjb250cm9sQiA9IHtcbiAgICB4OiBhcGV4LnggLSBkZXN0aW5hdGlvblNpZGUgKiB0dW5pbmcuc3dpbmdBbmdsZSAqIChjcm9zc0xhbmUgPyAzMCA6IDIyKSAqIHNjYWxlLFxuICAgIHk6IGFwZXgueSxcbiAgfTtcbiAgcmV0dXJuIHsgc3RhcnQsIGZpbmlzaCwgY29udHJvbEEsIGNvbnRyb2xCIH07XG59XG5cbmZ1bmN0aW9uIHRhcmdldFNwYW4odGFyZ2V0czogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10pOiBudW1iZXIge1xuICBpZiAodGFyZ2V0cy5sZW5ndGggPCAyKSByZXR1cm4gMDtcbiAgY29uc3QgeHMgPSB0YXJnZXRzLm1hcCh0YXJnZXQgPT4gdGFyZ2V0LngpO1xuICByZXR1cm4gTWF0aC5tYXgoLi4ueHMpIC0gTWF0aC5taW4oLi4ueHMpO1xufVxuXG5mdW5jdGlvbiBzd2VlcFRhcmdldEZvcih0YXJnZXRzOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgc2lkZTogLTEgfCAxLCBmYWxsYmFjazogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsbGJhY2s7XG4gIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHRhcmdldHNbMF07XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi50YXJnZXRzXS5zb3J0KChhLCBiKSA9PiBzaWRlID09PSAxID8gYS54IC0gYi54IDogYi54IC0gYS54KTtcbiAgY29uc3QgZmlyc3QgPSBzb3J0ZWRbMF07XG4gIGNvbnN0IGxhc3QgPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdO1xuICBjb25zdCBzcGFuID0gTWF0aC5hYnMobGFzdC54IC0gZmlyc3QueCk7XG4gIHJldHVybiB7XG4gICAgeDogbGFzdC54ICsgc2lkZSAqIE1hdGgubWluKDM0LCBNYXRoLm1heCgxNCwgc3BhbiAqIC4xKSksXG4gICAgeTogTWF0aC5taW4oLi4uc29ydGVkLm1hcCh0YXJnZXQgPT4gdGFyZ2V0LnkpLCAoZmlyc3QueSArIGxhc3QueSkgLyAyKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2xhc2hQb3NlKFxuICBiYXNlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHRhcmdldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBkZXN0aW5hdGlvblNpZGU6IC0xIHwgMSxcbiAgcHJvZ3Jlc3M6IG51bWJlcixcbiAgc2NhbGU6IG51bWJlcixcbiAgdHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyxcbiAgY3Jvc3NMYW5lOiBib29sZWFuLFxuICBzcGFuOiBudW1iZXIsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyByb3RhdGlvbjogbnVtYmVyOyB0cmFpbFByb2dyZXNzOiBudW1iZXIgfSB7XG4gIGNvbnN0IHRvdGFsRHVyYXRpb24gPSBNYXRoLm1heCguMDEsIHR1bmluZy5zdHJpa2VEdXJhdGlvbiArIHR1bmluZy5mb2xsb3dUaHJvdWdoRHVyYXRpb24pO1xuICBjb25zdCBzdHJpa2UgPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uO1xuICBjb25zdCBwYXRoID0gc3dvcmRQYXRoKGJhc2UsIHRhcmdldCwgZGVzdGluYXRpb25TaWRlLCBzY2FsZSwgdHVuaW5nLCBjcm9zc0xhbmUsIHNwYW4pO1xuICBjb25zdCB0YW5nZW50U2FtcGxlID0gKHBhdGhUOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBhID0gY3ViaWNQb2ludChwYXRoLnN0YXJ0LCBwYXRoLmNvbnRyb2xBLCBwYXRoLmNvbnRyb2xCLCBwYXRoLmZpbmlzaCwgTWF0aC5tYXgoMCwgcGF0aFQgLSAuMDE1KSk7XG4gICAgY29uc3QgYiA9IGN1YmljUG9pbnQocGF0aC5zdGFydCwgcGF0aC5jb250cm9sQSwgcGF0aC5jb250cm9sQiwgcGF0aC5maW5pc2gsIE1hdGgubWluKDEsIHBhdGhUICsgLjAxNSkpO1xuICAgIHJldHVybiBNYXRoLmF0YW4yKGIueSAtIGEueSwgYi54IC0gYS54KSAtIE1hdGguUEkgLyAyO1xuICB9O1xuXG4gIGlmIChwcm9ncmVzcyA8IHN0cmlrZSkge1xuICAgIGNvbnN0IHQgPSBwcm9ncmVzcyAvIHN0cmlrZTtcbiAgICBjb25zdCBlYXNlID0gdCAqIHQgKiAoMyAtIDIgKiB0KTtcbiAgICBjb25zdCBwb2ludCA9IGN1YmljUG9pbnQocGF0aC5zdGFydCwgcGF0aC5jb250cm9sQSwgcGF0aC5jb250cm9sQiwgcGF0aC5maW5pc2gsIGVhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHJvdGF0aW9uOiB0YW5nZW50U2FtcGxlKGVhc2UpLFxuICAgICAgdHJhaWxQcm9ncmVzczogZWFzZSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgdCA9IChwcm9ncmVzcyAtIHN0cmlrZSkgLyBNYXRoLm1heCguMDAxLCAxIC0gc3RyaWtlKTtcbiAgY29uc3QgZWFzZSA9IHQgKiB0ICogKDMgLSAyICogdCk7XG4gIGNvbnN0IG92ZXJzaG9vdCA9IHtcbiAgICB4OiBwYXRoLmZpbmlzaC54ICsgZGVzdGluYXRpb25TaWRlICogNyAqIHNjYWxlLFxuICAgIHk6IHBhdGguZmluaXNoLnkgLSA0ICogc2NhbGUsXG4gIH07XG4gIGNvbnN0IHBvaW50ID0gcXVhZHJhdGljUG9pbnQocGF0aC5maW5pc2gsIG92ZXJzaG9vdCwgcGF0aC5maW5pc2gsIGVhc2UpO1xuICByZXR1cm4ge1xuICAgIHg6IHBvaW50LngsXG4gICAgeTogcG9pbnQueSxcbiAgICByb3RhdGlvbjogdGFuZ2VudFNhbXBsZSgxKSAtIGRlc3RpbmF0aW9uU2lkZSAqICgxIC0gZWFzZSkgKiAuMzUsXG4gICAgdHJhaWxQcm9ncmVzczogMSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3dvcmRUcmFpbChzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24sIHNjYWxlOiBudW1iZXIsIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdLCB0dW5pbmc6IFN3b3JkVmlzdWFsVHVuaW5nKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgaWYgKHNsYXNoLnByb2dyZXNzID49IDEpIHJldHVybiBbXTtcbiAgY29uc3QgbGlmZSA9IDEgLSBzbGFzaC5wcm9ncmVzcztcbiAgY29uc3QgdGhpY2tuZXNzID0gc2xhc2gudGhpY2tuZXNzICogc2NhbGU7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCB0YXJnZXRzID0gc2xhc2gudGFyZ2V0UG9pbnRzLmxlbmd0aCA+IDAgPyBzbGFzaC50YXJnZXRQb2ludHMgOiBbeyB4OiBzbGFzaC54LCB5OiBzbGFzaC55IC0gc2xhc2gucmVhY2ggfV07XG4gIGNvbnN0IHNwYW4gPSB0YXJnZXRTcGFuKHRhcmdldHMpO1xuICBjb25zdCBjcm9zc0xhbmUgPSBzcGFuID4gODAgKiBzY2FsZTtcbiAgY29uc3Qgc3dlZXBUYXJnZXQgPSBzd2VlcFRhcmdldEZvcih0YXJnZXRzLCBzbGFzaC5zaWRlLCB0YXJnZXRzWzBdKTtcbiAgZm9yIChjb25zdCBbaW5kZXgsIG9yaWdpbl0gb2Ygb3JpZ2lucy5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRzLmxlbmd0aCA+IDEgPyBzd2VlcFRhcmdldCA6IHRhcmdldHNbaW5kZXggJSB0YXJnZXRzLmxlbmd0aF07XG4gICAgY29uc3Qgc2VnbWVudHMgPSB0dW5pbmcudHJhaWxTZWdtZW50cztcbiAgICBjb25zdCBwb3NlID0gc2xhc2hQb3NlKG9yaWdpbiwgdGFyZ2V0LCBzbGFzaC5zaWRlLCBzbGFzaC5wcm9ncmVzcywgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKTtcbiAgICBjb25zdCB0cmF2ZWwgPSBwb3NlLnRyYWlsUHJvZ3Jlc3M7XG4gICAgaWYgKHRyYXZlbCA8PSAwKSBjb250aW51ZTtcbiAgICBjb25zdCB2aXNpYmxlU2VnbWVudHMgPSBNYXRoLm1heCgzLCBNYXRoLmNlaWwoc2VnbWVudHMgKiB0cmF2ZWwpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc2libGVTZWdtZW50czsgaSsrKSB7XG4gICAgICBjb25zdCB0MCA9IE1hdGgubWF4KDAsIHRyYXZlbCAtICh2aXNpYmxlU2VnbWVudHMgLSBpKSAvIHNlZ21lbnRzKTtcbiAgICAgIGNvbnN0IHQxID0gTWF0aC5taW4oMSwgdDAgKyAuMTYpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHR1bmluZy5zdHJpa2VEdXJhdGlvbiArIHR1bmluZy5mb2xsb3dUaHJvdWdoRHVyYXRpb247XG4gICAgICBjb25zdCBzdHJpa2UgPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uO1xuICAgICAgY29uc3QgYSA9IHNsYXNoUG9zZShvcmlnaW4sIHRhcmdldCwgc2xhc2guc2lkZSwgdDAgKiBzdHJpa2UsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3Bhbik7XG4gICAgICBjb25zdCBiID0gc2xhc2hQb3NlKG9yaWdpbiwgdGFyZ2V0LCBzbGFzaC5zaWRlLCB0MSAqIHN0cmlrZSwgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKTtcbiAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xuICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gICAgICBjb25zdCBhZ2UgPSBpIC8gdmlzaWJsZVNlZ21lbnRzO1xuICAgICAgY29uc3QgZmFkZSA9IE1hdGgubWF4KC4xOCwgTWF0aC5wb3coMSAtIGFnZSwgLjg1KSkgKiBNYXRoLm1pbigxLCBsaWZlICsgLjM1KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICAgICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgICAgICB3aWR0aDogTWF0aC5tYXgoMS42LCB0aGlja25lc3MgKiAodHVuaW5nLnRyYWlsV2lkdGggLSBhZ2UgKiB0dW5pbmcudHJhaWxXaWR0aCAqIC40OCkpLFxuICAgICAgICBoZWlnaHQ6IE1hdGguaHlwb3QoZHgsIGR5KSAvIDIsXG4gICAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBnbG93OiAxLjggKiBmYWRlLFxuICAgICAgICBpbnRlbnNpdHk6IHR1bmluZy50cmFpbEludGVuc2l0eSAqIGZhZGUsXG4gICAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICAgICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgICAgICB3aWR0aDogTWF0aC5tYXgoMi4yLCB0aGlja25lc3MgKiAodHVuaW5nLnRyYWlsV2lkdGggKiAxLjM1IC0gYWdlICogdHVuaW5nLnRyYWlsV2lkdGggKiAuNTUpKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgKiAuNzIsXG4gICAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBnbG93OiAxLjYgKiBmYWRlLFxuICAgICAgICBpbnRlbnNpdHk6IHR1bmluZy50cmFpbEludGVuc2l0eSAqIGZhZGUsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByaW1pdGl2ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd29yZFZpc3VhbHMob3B0aW9uczogU3dvcmRWaXN1YWxPcHRpb25zKTogRmFtaWx5VmlzdWFsU2NlbmUge1xuICBjb25zdCBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcbiAgaWYgKCFvcHRpb25zLnZpc2libGUpIHJldHVybiBzY2VuZTtcbiAgY29uc3QgeyBkZWZpbml0aW9uLCBzbGFzaCwgcG9pbnRzLCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHR1bmluZyA9IGNvbXBsZXRlU3dvcmRWaXN1YWxUdW5pbmcob3B0aW9ucy50dW5pbmcpO1xuICBjb25zdCBzbGFzaGVzID0gb3B0aW9ucy5zbGFzaGVzID8/IFtzbGFzaF07XG4gIGZvciAoY29uc3QgW2luZGV4LCBwb2ludF0gb2YgcG9pbnRzLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHNsb3RTbGFzaCA9IHNsYXNoZXNbaW5kZXhdID8/IG51bGw7XG4gICAgY29uc3QgZG9ja1NpZGUgPSBzbG90U2xhc2g/LnNpZGUgPz8gb3B0aW9ucy5kb2NrU2lkZXM/LltpbmRleF0gPz8gb3B0aW9ucy5kb2NrU2lkZTtcbiAgICBjb25zdCB0YXJnZXRzID0gc2xvdFNsYXNoPy50YXJnZXRQb2ludHMgPz8gW107XG4gICAgY29uc3Qgc3BhbiA9IHRhcmdldFNwYW4odGFyZ2V0cyk7XG4gICAgY29uc3QgY3Jvc3NMYW5lID0gc3BhbiA+IDgwICogc2NhbGU7XG4gICAgY29uc3Qgc3dlZXBUYXJnZXQgPSBzbG90U2xhc2ggPyBzd2VlcFRhcmdldEZvcih0YXJnZXRzLCBkb2NrU2lkZSwgeyB4OiBwb2ludC54LCB5OiBwb2ludC55IC0gMzAgKiBzY2FsZSB9KSA6IG51bGw7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0cy5sZW5ndGggPiAxID8gc3dlZXBUYXJnZXQgOiB0YXJnZXRzW2luZGV4ICUgTWF0aC5tYXgoMSwgdGFyZ2V0cy5sZW5ndGgpXTtcbiAgICBjb25zdCByZXN0ID0geyB4OiBwb2ludC54ICsgZG9ja1NpZGUgKiB0dW5pbmcuZG9ja1NpZGVPZmZzZXQgKiBzY2FsZSwgeTogcG9pbnQueSAtIHR1bmluZy5kb2NrRm9yd2FyZCAqIHNjYWxlIH07XG4gICAgY29uc3QgY3VycmVudCA9IHNsb3RTbGFzaCAmJiB0YXJnZXQgPyBzbGFzaFBvc2UocG9pbnQsIHRhcmdldCwgZG9ja1NpZGUsIHNsb3RTbGFzaC5wcm9ncmVzcywgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKSA6IHtcbiAgICAgIHg6IHJlc3QueCxcbiAgICAgIHk6IHJlc3QueSxcbiAgICAgIHJvdGF0aW9uOiAtZG9ja1NpZGUgKiAuOTUsXG4gICAgICB0cmFpbFByb2dyZXNzOiAwLFxuICAgIH07XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzd29yZC1uZWVkbGUtc2FicmVcIiksXG4gICAgICB4OiBjdXJyZW50LngsXG4gICAgICB5OiBjdXJyZW50LnksXG4gICAgICB6OiAuMDIgKyBpbmRleCAqIC4wMDEsXG4gICAgICBzaXplOiBNYXRoLm1pbigyMywgZGVmaW5pdGlvbi5yYW5nZSAqIC4zNCkgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICAgIHJvdGF0aW9uWDogNzUgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgcm90YXRpb25ZOiAxMyAqIE1hdGguUEkgLyAxODAsXG4gICAgICByb3RhdGlvblo6IDE1ICogTWF0aC5QSSAvIDE4MCArIGN1cnJlbnQucm90YXRpb24sXG4gICAgICBsaW5lVGhpY2tuZXNzOiAuOTIsXG4gICAgICBnbG93OiBzbG90U2xhc2ggPyAxLjY1IDogMS4wOCxcbiAgICAgIGVuZXJneUludGVuc2l0eTogc2xvdFNsYXNoID8gMi4yNSA6IDEuMixcbiAgICAgIGVuZXJneUNvdmVyYWdlOiBzbG90U2xhc2ggPyAuNzIgOiAuNDIsXG4gICAgICBlbmVyZ3lTcGVlZDogc2xvdFNsYXNoID8gMi4xIDogMS4yLFxuICAgICAgZW5lcmd5QmxlZWQ6IHNsb3RTbGFzaCA/IC44IDogLjUsXG4gICAgfSk7XG4gIH1cbiAgZm9yIChjb25zdCBbaW5kZXgsIHNsb3RTbGFzaF0gb2Ygc2xhc2hlcy5lbnRyaWVzKCkpIHtcbiAgICBpZiAoIXNsb3RTbGFzaCkgY29udGludWU7XG4gICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaW5kZXhdO1xuICAgIGlmIChwb2ludCkgc2NlbmUucHJpbWl0aXZlcy5wdXNoKC4uLnN3b3JkVHJhaWwoc2xvdFNsYXNoLCBzY2FsZSwgW3BvaW50XSwgdHVuaW5nKSk7XG4gIH1cbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBTaGFwZShzaGFwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlIHtcbiAgY29uc3QgeyB4LCB5LCBjb2xvciwgbm93LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoc2hhcGVJZCksXG4gICAgeDogeCArIE1hdGguc2luKG5vdyAvIDQyMCArIHkgKiAuMDcpICogNC41ICogc2NhbGUsXG4gICAgeSxcbiAgICBzaXplOiAxMCAqIHNjYWxlICogKDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyB5ICogLjA1KSAqIC4wOCksXG4gICAgY29sb3IsXG4gICAgcm90YXRpb25aOiBub3cgLyAxMTAwLFxuICAgIGxpbmVUaGlja25lc3M6IC43NixcbiAgICBnbG93OiAxLjA1LFxuICAgIGVuZXJneUludGVuc2l0eTogMS4yNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjQ4LFxuICAgIGVuZXJneVNwZWVkOiAxLjM1LFxuICAgIGVuZXJneUJsZWVkOiAuNTUsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzaGllbGQtcmluZ1wiLCBvcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic3dvcmQtbmVlZGxlLXNhYnJlXCIsIG9wdGlvbnMpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBIZWxpY29wdGVyVmlld3BvcnQgfSBmcm9tIFwiLi92aWV3cG9ydFwiO1xuXG5jb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbmNvbnN0IHBsYXllckZvcndhcmRSb3RhdGlvbiA9IHtcbiAgcm90YXRpb25YOiBkZWdyZWVzVG9SYWRpYW5zKC01MiksXG4gIHJvdGF0aW9uWTogZGVncmVlc1RvUmFkaWFucygtMSksXG4gIHJvdGF0aW9uWjogZGVncmVlc1RvUmFkaWFucygxKSxcbn07XG5jb25zdCBzY3JlZW5Gb3J3YXJkWWF3ID0gKGRpcmVjdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gIHJldHVybiBNYXRoLmF0YW4yKGRpcmVjdGlvbi54IC8gbGVuZ3RoLCAtZGlyZWN0aW9uLnkgLyBsZW5ndGgpO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0b3JWaXN1YWxSb2xlID1cbiAgfCBcImdyb3VuZEZvcndhcmRcIlxuICB8IFwic2NyZWVuQmlsbGJvYXJkXCJcbiAgfCBcInR1bWJsaW5nQmlsbGJvYXJkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JPcmllbnRhdGlvbkNvbnRleHQge1xuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncztcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG5vdzogbnVtYmVyO1xuICBwaGFzZT86IG51bWJlcjtcbiAgZmFjaW5nPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0b3JPcmllbnRhdGlvbihyb2xlOiBBY3RvclZpc3VhbFJvbGUsIGNvbnRleHQ6IEFjdG9yT3JpZW50YXRpb25Db250ZXh0KTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICBzd2l0Y2ggKHJvbGUpIHtcbiAgICBjYXNlIFwiZ3JvdW5kRm9yd2FyZFwiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wbGF5ZXJGb3J3YXJkUm90YXRpb24sXG4gICAgICAgIHJvdGF0aW9uWDogcGxheWVyRm9yd2FyZFJvdGF0aW9uLnJvdGF0aW9uWCArIE1hdGguc2luKGNvbnRleHQubm93IC8gNjUwICsgKGNvbnRleHQucGhhc2UgPz8gMCkpICogLjA2LFxuICAgICAgICByb3RhdGlvblk6IHBsYXllckZvcndhcmRSb3RhdGlvbi5yb3RhdGlvblkgKyAoY29udGV4dC5mYWNpbmcgPyBzY3JlZW5Gb3J3YXJkWWF3KGNvbnRleHQuZmFjaW5nKSA6IDApLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBcInR1bWJsaW5nQmlsbGJvYXJkXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3RhdGlvblk6IE1hdGguc2luKGNvbnRleHQubm93IC8gNzAwICsgKGNvbnRleHQucGhhc2UgPz8gMCkpICogLjE4LFxuICAgICAgfTtcbiAgICBjYXNlIFwic2NyZWVuQmlsbGJvYXJkXCI6XG4gICAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlbGljb3B0ZXJWaWV3cG9ydEZvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGxheWVyWTogbnVtYmVyLCBmb2N1c1g/OiBudW1iZXIpOiBIZWxpY29wdGVyVmlld3BvcnQge1xuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBwbGF5ZXJZLCBmb2N1c1ggfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwiZ3JvdW5kRm9yd2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gICAgZmFjaW5nOiB7IHg6IDAsIHk6IC0xIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInR1bWJsaW5nQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWxsYm9hcmRPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJzY3JlZW5CaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVMYW5lUnVubmVyU2NlbmUsIHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQsIHR5cGUgTmVvblByaW1pdGl2ZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG50eXBlIFNjZW5lQmFja2dyb3VuZFN0YXRlID0gXCJtaXNzaW5nXCIgfCBcImxvYWRlZFwiIHwgXCJsb2FkaW5nXCI7XG5cbmNvbnN0IHNjZW5lQmFja2dyb3VuZHMgPSBuZXcgTWFwPHN0cmluZywgU2NlbmVCYWNrZ3JvdW5kU3RhdGU+KCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFR1bmluZyB7XG4gIHpvb21QZXJjZW50OiBudW1iZXI7XG4gIGxhbmVTaGlmdFBlcmNlbnQ6IG51bWJlcjtcbiAgeVBlcmNlbnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVHVuaW5nOiBMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVHVuaW5nID0ge1xuICB6b29tUGVyY2VudDogMTA4LFxuICBsYW5lU2hpZnRQZXJjZW50OiAzMCxcbiAgeVBlcmNlbnQ6IDUwLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXMoXG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgdGltZU1zOiBudW1iZXIsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gWy4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkLCB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSkucHJpbWl0aXZlcyA/PyBbXSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgbWFya2VyID0gXCIvTmVvblN3YXJtL1wiO1xuICBjb25zdCBuZXN0ZWRJbmRleCA9IHBhdGguaW5kZXhPZihtYXJrZXIpO1xuICBpZiAobmVzdGVkSW5kZXggPj0gMCkgcmV0dXJuIGAke3BhdGguc2xpY2UoMCwgbmVzdGVkSW5kZXgpfS9OZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcblxuICBjb25zdCBwYWdlSW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFwiL05lb25Td2FybS5odG1sXCIpO1xuICBpZiAocGFnZUluZGV4ID49IDApIHJldHVybiBgJHtwYXRoLnNsaWNlKDAsIHBhZ2VJbmRleCl9L05lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xuXG4gIHJldHVybiBgTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCxcbiAgdHVuaW5nOiBMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVHVuaW5nID0gZGVmYXVsdExhbmVSdW5uZXJTY2VuZUJhY2tncm91bmRUdW5pbmcsXG4gIGxhbmVPZmZzZXQgPSAwLFxuKTogdm9pZCB7XG4gIHN5bmNMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kUGxhY2VtZW50KGVsZW1lbnQsIHR1bmluZywgbGFuZU9mZnNldCk7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG5cbiAgY29uc3QgcGF0aCA9IGxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmRVcmwoc2NlbmVJZCk7XG4gIGNvbnN0IHN0YXRlID0gc2NlbmVCYWNrZ3JvdW5kcy5nZXQocGF0aCk7XG4gIGlmIChzdGF0ZSA9PT0gXCJsb2FkZWRcIikge1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGF0aH1cIilgO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZ3JvdW5kLWltYWdlXCIpO1xuICBpZiAoc3RhdGUpIHJldHVybjtcblxuICBzY2VuZUJhY2tncm91bmRzLnNldChwYXRoLCBcImxvYWRpbmdcIik7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICBzY2VuZUJhY2tncm91bmRzLnNldChwYXRoLCBcImxvYWRlZFwiKTtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3BhdGh9XCIpYDtcbiAgfTtcbiAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICBzY2VuZUJhY2tncm91bmRzLnNldChwYXRoLCBcIm1pc3NpbmdcIik7XG4gICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIik7XG4gIH07XG4gIGltYWdlLnNyYyA9IHBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jTGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFBsYWNlbWVudChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHR1bmluZzogTGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFR1bmluZyA9IGRlZmF1bHRMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVHVuaW5nLFxuICBsYW5lT2Zmc2V0ID0gMCxcbik6IHZvaWQge1xuICBjb25zdCBjbGFtcGVkTGFuZU9mZnNldCA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBsYW5lT2Zmc2V0KSk7XG4gIGNvbnN0IHNoaWZ0ID0gY2xhbXBlZExhbmVPZmZzZXQgKiB0dW5pbmcubGFuZVNoaWZ0UGVyY2VudDtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgY2FsYyg1MCUgKyAke3NoaWZ0LnRvRml4ZWQoMil9JSkgJHt0dW5pbmcueVBlcmNlbnQudG9GaXhlZCgyKX0lYDtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGAke3R1bmluZy56b29tUGVyY2VudC50b0ZpeGVkKDIpfSUgYXV0b2A7XG59XG4iLCAiaW1wb3J0IHsgZ2V0TmVvblNoYXBlLCBOZW9uU2hhcGVBY3RvciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSwgdHlwZSBOZW9uU2hhcGVMYWJlbCwgdHlwZSBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBjb25zdCBzd2FybVNoYXBlcyA9IHtcbiAgcGxheWVyOiBnZXROZW9uU2hhcGUoXCJhcnJvdy1jbGFzc2ljXCIpISxcbiAgZW5lbXk6IGdldE5lb25TaGFwZShcImh1bnRlci1leWVcIikhLFxuICBtdWx0aXBsaWVyOiBnZXROZW9uU2hhcGUoXCJicnVpc2VyLWNyb3NzXCIpISxcbiAgZ3VuUGlja3VwOiBnZXROZW9uU2hhcGUoXCJoZXgtZmlnaHRlclwiKSEsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgcGl4ZWxzVG9TaGFwZVdvcmxkID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiAoe1xuICB4OiAoeCAvIGNhbnZhcy53aWR0aCAtIC41KSAqIChjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbiAgeTogKC41IC0geSAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxufSk7XG5cbmV4cG9ydCBjb25zdCBwaXhlbFNpemVUb1NoYXBlU2NhbGUgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcGl4ZWxzOiBudW1iZXIpID0+IHBpeGVscyAvIGNhbnZhcy5oZWlnaHQgKiAyLjU7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RvckF0UGl4ZWxzKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHBpeGVsU2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIGNvbnN0IHdvcmxkID0gcGl4ZWxzVG9TaGFwZVdvcmxkKGNhbnZhcywgeCwgeSk7XG4gIGFjdG9yLm1vdmVUbyh3b3JsZC54LCB3b3JsZC55KTtcbiAgYWN0b3Iuc2NhbGUgPSBwaXhlbFNpemVUb1NoYXBlU2NhbGUoY2FudmFzLCBwaXhlbFNpemUpO1xuICByZXR1cm4gYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKTtcbn1cblxudHlwZSBUb3BEb3duU2hhcGVPdmVycmlkZXMgPSBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiAmIFBhcnRpYWw8UGljazxOZW9uVG9wRG93blNoYXBlLCBcIndpZHRoXCIgfCBcImhlaWdodFwiPj47XG5cbmV4cG9ydCBjb25zdCBhY3RvckluVG9wRG93blNjZW5lID0gKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNpemU6IG51bWJlciwgb3ZlcnJpZGVzOiBUb3BEb3duU2hhcGVPdmVycmlkZXMgPSB7fSk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgKHsgLi4uYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKSwgeCwgeSwgc2l6ZSB9KTtcblxuZXhwb3J0IGNvbnN0IHNoYXBlTGFiZWwgPSAodGV4dDogc3RyaW5nLCBwb3NpdGlvbjogTmVvblNoYXBlTGFiZWxbXCJwb3NpdGlvblwiXSwgZm9udFNpemU6IG51bWJlciwgb2Zmc2V0ID0gNCk6IE5lb25TaGFwZUxhYmVsID0+XG4gICh7IHRleHQsIHBvc2l0aW9uLCBmb250U2l6ZSwgb2Zmc2V0LCBmb250RmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsIGZvbnRXZWlnaHQ6IDcwMCB9KTtcbiIsICJpbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNxdWFkUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIHJvdzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3F1YWRNb2RlbCB7XG4gIGxhbmU6IDAgfCAxID0gMDtcbiAgY291bnQgPSAxO1xuICBhaW1PZmZzZXQgPSAwO1xuICB4ID0gMDtcbiAgdGFyZ2V0WCA9IDA7XG4gIGxhbmVTaGlmdFN0YXJ0ZWRBdCA9IDA7XG5cbiAgYWRkKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5taW4oc3BlYy5tYXhTcXVhZFNpemUsIHRoaXMuY291bnQgKyBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgcmVtb3ZlKGFtb3VudCA9IDEpOiBudW1iZXIge1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCB0aGlzLmNvdW50IC0gYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHNldExhbmUobGFuZTogMCB8IDEsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyLCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChsYW5lICE9PSB0aGlzLmxhbmUpIHtcbiAgICAgIHRoaXMubGFuZVNoaWZ0U3RhcnRlZEF0ID0gbm93O1xuICAgICAgLy8gUmVzZXQgYWltIG9mZnNldCBzbyB0aGUgcGxheWVyIHNuYXBzIHRvIHRoZSBjb3JyZWN0IGNvbHVtbiBpbiB0aGUgbmV3IGxhbmUuXG4gICAgICB0aGlzLmFpbU9mZnNldCA9IDA7XG4gICAgfVxuICAgIHRoaXMubGFuZSA9IGxhbmU7XG4gICAgdGhpcy50YXJnZXRYID0gbGFuZUNlbnRlcihsYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgYXV0b0FpbSh0YXJnZXRPZmZzZXQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gSGlnaCBsZXJwIGZhY3RvciAoMC44NSkgc28gYXV0by1haW0gc25hcHMgYWxtb3N0IGluc3RhbnRhbmVvdXNseSBlYWNoIGZyYW1lLlxuICAgIHRoaXMuYWltT2Zmc2V0ICs9IChNYXRoLm1heCgtbGFuZVdpZHRoICogLjI4LCBNYXRoLm1pbihsYW5lV2lkdGggKiAuMjgsIHRhcmdldE9mZnNldCkpIC0gdGhpcy5haW1PZmZzZXQpICogLjg1O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSAxIC0gTWF0aC5wb3coLjAwMDA4LCBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMueCArPSAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAqIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqIFggb2Zmc2V0cyBvZiBlYWNoIGNvbHVtbiBpbiB0aGUgZnJvbnQgcm93LCByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuICovXG4gIGZyb250Um93Q29sdW1uT2Zmc2V0cyhzY2FsZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKF8sIGNvbCkgPT5cbiAgICAgIChjb2wgLSAocm93Q291bnQgLSAxKSAvIDIpICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgKTtcbiAgfVxuXG4gIHBvaW50cyhiYXNlWTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogU3F1YWRQb2ludFtdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCBwb2ludHM6IFNxdWFkUG9pbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50IC0gcm93ICogc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGluZGV4ICUgc3BlYy5tZW1iZXJzUGVyUm93O1xuICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICB4OiB0aGlzLnggKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICB5OiBiYXNlWSArIHJvdyAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgTmVvblNoYXBlQWN0b3IsXG4gIE5lb25TaGFwZURpc3Bvc2FsLFxuICBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIsXG4gIE5lb25WaWN0b3J5RXhwZXJpZW5jZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIGNvbWJhdFR1bmluZyxcbiAgZ3VuRmFtaWx5LFxuICBtdWx0aXBsaWVyRmFtaWx5LFxuICBvcmJGYW1pbHksXG4gIHBhcnNlVHJhY2tEZWZpbml0aW9uLFxuICBzaGllbGRGYW1pbHksXG4gIHN3b3JkRmFtaWx5LFxuICB0eXBlIEd1bklkLFxuICB0eXBlIE11bHRpcGxpZXJJZCxcbiAgdHlwZSBPcmJJZCxcbiAgdHlwZSBQYXJzZWRUcmFja0VudGl0eSxcbiAgdHlwZSBTaGllbGRJZCxcbiAgdHlwZSBTd29yZElkLFxuICB0eXBlIFN3b3JkTWVtYmVyLFxuICB0eXBlIFN3b3JkVGFyZ2V0aW5nTW9kZSxcbiAgdHlwZSBUcmFja01lbWJlcixcbn0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb25cIjtcbmltcG9ydCB7IHNlbGVjdEF1dG9BaW1PZmZzZXQgfSBmcm9tIFwiLi4vYXV0b0FpbVwiO1xuaW1wb3J0IHsgR3VuU2ltdWxhdGlvbiB9IGZyb20gXCIuLi9jb21iYXQvZ3VuU2ltdWxhdGlvblwiO1xuaW1wb3J0IHsgYWR2YW5jZUNvb2xkb3duU2xvdHMsIHNlbGVjdEJlc3RVbmNsYWltZWQsIHN5bmNTbG90QXJyYXkgfSBmcm9tIFwiLi4vY29tYmF0L2luZGVwZW5kZW50V2VhcG9uU2xvdHNcIjtcbmltcG9ydCB7IHF1ZXJ5TmVhcmJ5VGhyZWF0cyB9IGZyb20gXCIuLi9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnlcIjtcbmltcG9ydCB7IHJlc29sdmVTaGllbGRDb250YWN0LCBTaGllbGRTdGF0ZSwgdGlja1NoaWVsZCB9IGZyb20gXCIuLi9jb21iYXQvc2hpZWxkRXZhbHVhdG9yXCI7XG5pbXBvcnQgeyBTd29yZFN0YXRlLCB0aWNrU3dvcmQgfSBmcm9tIFwiLi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVFbmVteUFjdG9yLCBkZWZlYXRFbmVteSwgZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQsIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcywgcmVzb2x2ZUVuZW15RGFtYWdlIH0gZnJvbSBcIi4uL2VuZW15Q2F0YWxvZ1wiO1xuaW1wb3J0IHsgZW5lbXlFeGl0Q2xvdWQsIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHMsIHR5cGUgQWN0aXZlRW5lbXlFeGl0RWZmZWN0LCB0eXBlIEVuZW15VmlzdWFsVHlwZSB9IGZyb20gXCIuLi9lbmVteUV4aXRWaXN1YWxzXCI7XG5pbXBvcnQgeyBzaGllbGRQaWNrdXBWaXN1YWwsIHNoaWVsZFZpc3VhbHMsIHN3b3JkUGlja3VwVmlzdWFsLCBzd29yZFZpc3VhbER1cmF0aW9uTXMsIHN3b3JkVmlzdWFscyB9IGZyb20gXCIuLi9mYW1pbHlWaXN1YWxzXCI7XG5pbXBvcnQgdHlwZSB7IFN3b3JkVmlzdWFsVHVuaW5nIH0gZnJvbSBcIi4uL2ZhbWlseVZpc3VhbHNcIjtcbmltcG9ydCB7IGJpbGxib2FyZE9yaWVudGF0aW9uLCBlbmVteU9yaWVudGF0aW9uLCBoZWxpY29wdGVyVmlld3BvcnRGb3IsIHBsYXllck9yaWVudGF0aW9uIH0gZnJvbSBcIi4uL3JlbmRlck9yaWVudGF0aW9uXCI7XG5pbXBvcnQge1xuICBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQsXG4gIGRlZmF1bHRMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVHVuaW5nLFxuICBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzLFxuICBzeW5jTGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFBsYWNlbWVudCxcbiAgdHlwZSBMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVHVuaW5nLFxufSBmcm9tIFwiLi4vc2NlbmVFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgYWN0b3JJblRvcERvd25TY2VuZSwgc2hhcGVMYWJlbCwgc3dhcm1TaGFwZXMgfSBmcm9tIFwiLi4vc2hhcGVWaXN1YWxzXCI7XG5pbXBvcnQgeyBTcXVhZE1vZGVsIH0gZnJvbSBcIi4uL3NxdWFkXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYLFxuICBsYW5lUnVubmVyVmlld3BvcnQsXG4gIHByb2plY3RIZWxpY29wdGVyU2NlbmUsXG4gIHByb2plY3RIZWxpY29wdGVyUG9pbnQsXG4gIHVucHJvamVjdEhlbGljb3B0ZXJTY3JlZW5Qb2ludCxcbiAgdHlwZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG59IGZyb20gXCIuLi92aWV3cG9ydFwiO1xuXG50eXBlIExhbmUgPSAwIHwgMTtcbnR5cGUgTGV2ZWxXZWFwb25GYW1pbHkgPSBcImd1blwiIHwgXCJzaGllbGRcIiB8IFwic3dvcmRcIjtcbnR5cGUgTGV2ZWxXZWFwb25JZCA9IEd1bklkIHwgU2hpZWxkSWQgfCBTd29yZElkO1xuXG5leHBvcnQgdHlwZSBOZW9uU3dhcm1TaW11bGF0aW9uTW9kZSA9IFwiZ2FtZVwiIHwgXCJsYWJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1Tb3VuZCB7XG4gIHBsYXkoaWQ6IHN0cmluZyk6IHZvaWQ7XG4gIHBsYXlSb3RhdGVkPyhpZDogc3RyaW5nLCBhbHRlcm5hdGl2ZXM6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtU2ltdWxhdGlvbk9wdGlvbnMge1xuICBtb2RlOiBOZW9uU3dhcm1TaW11bGF0aW9uTW9kZTtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgc3RhZ2VFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY2FtZXJhU2V0dGluZ3M/OiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHNvdW5kPzogTmVvblN3YXJtU291bmQ7XG4gIHNjZW5lSWQ/OiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgb25SdW5TdGF0dXM/OiAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uRmluaXNoPzogKHJlc3VsdDogTmVvblN3YXJtRmluaXNoUmVzdWx0KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Td2FybUZpbmlzaFJlc3VsdCB7XG4gIHdvbjogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGV0YWlsOiBzdHJpbmc7XG4gIGJyZWFjaGVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtU25hcHNob3Qge1xuICBtb2RlOiBOZW9uU3dhcm1TaW11bGF0aW9uTW9kZTtcbiAgYWN0aXZlVHJhY2s6IGJvb2xlYW47XG4gIGNvbWJhdE5vdzogbnVtYmVyO1xuICBjb21iYXRFbGFwc2VkOiBudW1iZXI7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICBzcXVhZDoge1xuICAgIGxhbmU6IExhbmU7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgdGFyZ2V0WDogbnVtYmVyO1xuICAgIGFpbU9mZnNldDogbnVtYmVyO1xuICB9O1xuICBhY3RpdmU6IHtcbiAgICBndW46IHsgaWQ6IEd1bklkOyBsZXZlbDogbnVtYmVyIH0gfCBudWxsO1xuICAgIHNoaWVsZDogU2hpZWxkSWQgfCBudWxsO1xuICAgIHNoaWVsZExldmVsOiBudW1iZXIgfCBudWxsO1xuICAgIHN3b3JkOiB7IGlkOiBTd29yZElkOyBsZXZlbDogbnVtYmVyIH0gfCBudWxsO1xuICB9O1xuICBlbmVtaWVzOiBBcnJheTx7IGlkOiBudW1iZXI7IGVuZW15SWQ6IE9yYklkOyBsYW5lOiBMYW5lOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaGVhbHRoOiBudW1iZXI7IG1heEhlYWx0aDogbnVtYmVyOyBkeWluZzogYm9vbGVhbiB9PjtcbiAgcGlja3Vwczoge1xuICAgIGd1bnM6IG51bWJlcjtcbiAgICBzaGllbGRzOiBudW1iZXI7XG4gICAgc3dvcmRzOiBudW1iZXI7XG4gICAgbXVsdGlwbGllcnM6IG51bWJlcjtcbiAgfTtcbiAga2lsbHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFdlYXBvbkh1ZFR1bmluZyB7XG4gIGljb25TY2FsZTogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIHZlcnRpY2FsT2Zmc2V0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICBlbmVteUlkOiBPcmJJZDtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBtYXhIZWFsdGg6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG4gIHJvd0lkOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEd1blBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBndW5JZDogR3VuSWQ7XG4gIHJlcXVlc3RlZExldmVsPzogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xufVxuXG5pbnRlcmZhY2UgU2hpZWxkUGlja3VwIHtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNoaWVsZElkOiBTaGllbGRJZDtcbiAgcmVxdWVzdGVkTGV2ZWw/OiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgU3dvcmRQaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc3dvcmRJZDogU3dvcmRJZDtcbiAgcmVxdWVzdGVkTGV2ZWw/OiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTXVsdGlwbGllclBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBtdWx0aXBsaWVySWQ6IE11bHRpcGxpZXJJZDtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3Rvcjtcbn1cblxuaW50ZXJmYWNlIFBlbmRpbmdTd29yZERhbWFnZSB7XG4gIGhpdHM6IEFycmF5PHsgZW5lbXlJZDogbnVtYmVyOyBkdWVBdDogbnVtYmVyIH0+O1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgaW1wYWN0U291bmRJZDogc3RyaW5nO1xufVxuXG5jb25zdCBndW5GaXJlU291bmRJZHM6IFJlY29yZDxHdW5JZCwgc3RyaW5nPiA9IHtcbiAgcHVsc2VQaXN0b2w6IFwiUHJpbWFyeVwiLFxuICBuZWVkbGVyU21nOiBcIk5lZWRsZXJGaXJlXCIsXG4gIGJ1cnN0Q2FyYmluZTogXCJCdXJzdENhcmJpbmVGaXJlXCIsXG4gIGhlYXZ5Q2Fubm9uOiBcIkhlYXZ5Q2Fubm9uRmlyZVwiLFxuICBzcGxpdHRlclJpZmxlOiBcIlNwbGl0dGVyUmlmbGVGaXJlXCIsXG59O1xuXG5jb25zdCBzd29yZEltcGFjdFNvdW5kSWRzOiBSZWNvcmQ8U3dvcmRJZCwgc3RyaW5nPiA9IHtcbiAgYXJjQmxhZGU6IFwiU3dvcmRBcmNJbXBhY3RcIixcbiAgY2xlYXZlcjogXCJTd29yZENsZWF2ZXJJbXBhY3RcIixcbn07XG5cbmNvbnN0IHNvdW5kQWx0ZXJuYXRpdmVDb3VudHM6IFBhcnRpYWw8UmVjb3JkPHN0cmluZywgbnVtYmVyPj4gPSB7XG4gIFByaW1hcnk6IDMsXG4gIEVuZW15RGVzdHJveWVkOiAyLFxuICBFbmVteUhpdDogMixcbiAgRW5lbXlTcGF3bjogMixcbiAgQm9zczogMSxcbiAgUHJvamVjdGlsZUhpdDogMixcbn07XG5jb25zdCBtYXhUcmFja1NwYXduTGVhZFNlY29uZHMgPSAxODtcbmNvbnN0IGZpcnN0VHJhY2tSb3dBcnJpdmFsU2Vjb25kcyA9IDIgKiBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyO1xuY29uc3QgdHJhY2tSb3dUcmF2ZWxTZWNvbmRzID0gLjM3NSAqIGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXI7XG5cbmV4cG9ydCBjbGFzcyBOZW9uU3dhcm1TaW11bGF0aW9uIHtcbiAgcmVhZG9ubHkgbW9kZTogTmVvblN3YXJtU2ltdWxhdGlvbk1vZGU7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IHN0YWdlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHJlYWRvbmx5IHNxdWFkID0gbmV3IFNxdWFkTW9kZWwoKTtcblxuICBwcml2YXRlIHJlbmRlcmVyOiBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI7XG4gIHByaXZhdGUgc291bmQ/OiBOZW9uU3dhcm1Tb3VuZDtcbiAgcHJpdmF0ZSBvblJ1blN0YXR1cz86IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvbkZpbmlzaD86IChyZXN1bHQ6IE5lb25Td2FybUZpbmlzaFJlc3VsdCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZSA9IDA7XG4gIHByaXZhdGUgYWN0aXZlVHJhY2s6IFRyYWNrTWVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdHJhY2tTY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgcHJpdmF0ZSBsYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgcHJpdmF0ZSBjb21iYXRFbGFwc2VkID0gMDtcbiAgcHJpdmF0ZSBjb21iYXROb3cgPSAwO1xuICBwcml2YXRlIHBsYXllckxhbmU6IExhbmUgPSAwO1xuICBwcml2YXRlIGNvb2xkb3duID0gMDtcbiAgcHJpdmF0ZSBndW5Db29sZG93bnM6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgZW50aXR5SWRDb3VudGVyID0gMDtcbiAgcHJpdmF0ZSB0cmFja0VudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG4gIHByaXZhdGUgbmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgcHJpdmF0ZSBicmVhY2hlcyA9IDA7XG4gIHByaXZhdGUga2lsbHMgPSAwO1xuICBwcml2YXRlIGVuZW1pZXM6IEVuZW15W10gPSBbXTtcbiAgcHJpdmF0ZSBndW5TaW11bGF0aW9uID0gbmV3IEd1blNpbXVsYXRpb24oKTtcbiAgcHJpdmF0ZSBndW5QaWNrdXBzOiBHdW5QaWNrdXBbXSA9IFtdO1xuICBwcml2YXRlIHNoaWVsZFBpY2t1cHM6IFNoaWVsZFBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgc3dvcmRQaWNrdXBzOiBTd29yZFBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgY29sbGVjdGVkV2VhcG9uTGV2ZWxzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBtdWx0aXBsaWVyczogTXVsdGlwbGllclBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgZW5lbXlFeGl0RWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSB2aWN0b3J5OiBOZW9uVmljdG9yeUV4cGVyaWVuY2UgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzd29yZFZpc3VhbFR1bmluZzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz4gPSB7fTtcbiAgcHJpdmF0ZSBwZW5kaW5nU3dvcmREYW1hZ2U6IFBlbmRpbmdTd29yZERhbWFnZSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGZhaWx1cmVSZWFzb24gPSBcIlwiO1xuICBwcml2YXRlIHBsYXllckFjdG9yczogTmVvblNoYXBlQWN0b3JbXSA9IFtdO1xuICBwcml2YXRlIGV4cGxvZGluZ1BsYXllcnM6IEFycmF5PHsgYWN0b3I6IE5lb25TaGFwZUFjdG9yOyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiA9IFtdO1xuICBwcml2YXRlIHdlYXBvbkh1ZFNjcmVlblg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHdlYXBvbkh1ZFR1bmluZzogV2VhcG9uSHVkVHVuaW5nID0ge1xuICAgIGljb25TY2FsZTogLjIyLFxuICAgIHNwYWNpbmc6IDYzLFxuICAgIGZvbnRTaXplOiAxNSxcbiAgICB2ZXJ0aWNhbE9mZnNldDogMTQ2LFxuICB9O1xuICBwcml2YXRlIHNpbXVsYXRpb25TcGVlZCA9IDE7XG4gIHByaXZhdGUgc2NlbmVCYWNrZ3JvdW5kVHVuaW5nOiBMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVHVuaW5nID0geyAuLi5kZWZhdWx0TGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFR1bmluZyB9O1xuICBwcml2YXRlIGFjdGl2ZUJ5RmFtaWx5OiB7XG4gICAgZ3VuOiB7IGlkOiBHdW5JZDsgbGV2ZWw6IG51bWJlciB9IHwgbnVsbDtcbiAgICBzaGllbGQ6IFNoaWVsZFN0YXRlIHwgbnVsbDtcbiAgICBzd29yZDogU3dvcmRTdGF0ZSB8IG51bGw7XG4gIH0gPSB7XG4gICAgZ3VuOiBudWxsLFxuICAgIHNoaWVsZDogbnVsbCxcbiAgICBzd29yZDogbnVsbCxcbiAgfTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIsIG9wdGlvbnM6IE5lb25Td2FybVNpbXVsYXRpb25PcHRpb25zKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZTtcbiAgICB0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuICAgIHRoaXMuc3RhZ2VFbGVtZW50ID0gb3B0aW9ucy5zdGFnZUVsZW1lbnQ7XG4gICAgdGhpcy5jYW1lcmFTZXR0aW5ncyA9IG9wdGlvbnMuY2FtZXJhU2V0dGluZ3MgPz8geyAuLi5kZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzIH07XG4gICAgdGhpcy5zb3VuZCA9IG9wdGlvbnMuc291bmQ7XG4gICAgdGhpcy5vblJ1blN0YXR1cyA9IG9wdGlvbnMub25SdW5TdGF0dXM7XG4gICAgdGhpcy5vbkZpbmlzaCA9IG9wdGlvbnMub25GaW5pc2g7XG4gICAgdGhpcy50cmFja1NjZW5lSWQgPSBvcHRpb25zLnNjZW5lSWQgPz8gXCJuZW9uSGFsbFwiO1xuICAgIHRoaXMuYXBwbHlTY2VuZUJhY2tncm91bmQoKTtcbiAgICB0aGlzLnJlc2V0KHsgc2lsZW50OiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShvcHRpb25zOiBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucyk6IFByb21pc2U8TmVvblN3YXJtU2ltdWxhdGlvbj4ge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLmNyZWF0ZShvcHRpb25zLmNhbnZhcywgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxXaWR0aCwgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxIZWlnaHQpO1xuICAgIHJldHVybiBuZXcgTmVvblN3YXJtU2ltdWxhdGlvbihyZW5kZXJlciwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXQgbm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmF0Tm93O1xuICB9XG5cbiAgZ2V0IGFjdGl2ZVRyYWNrUnVubmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUcmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIGxhbmVYKGxhbmU6IExhbmUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aCAqIChsYW5lID09PSAwID8gLjMyIDogLjY4KTtcbiAgfVxuXG4gIHBsYXllclkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjgyO1xuICB9XG5cbiAgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJlc2V0KG9wdGlvbnM6IHsgc2lsZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRyYWNrID0gbnVsbDtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuY29tYmF0RWxhcHNlZCA9IDA7XG4gICAgdGhpcy5jb21iYXROb3cgPSAwO1xuICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgIHRoaXMuZ3VuQ29vbGRvd25zID0gW107XG4gICAgdGhpcy5uZXh0VHJhY2tFbnRpdHkgPSAwO1xuICAgIHRoaXMudHJhY2tFbnRpdGllcyA9IFtdO1xuICAgIHRoaXMuYnJlYWNoZXMgPSAwO1xuICAgIHRoaXMua2lsbHMgPSAwO1xuICAgIHRoaXMuY2xlYXJTdGFnZSgpO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG51bGw7XG4gICAgdGhpcy5jb2xsZWN0ZWRXZWFwb25MZXZlbHMuY2xlYXIoKTtcbiAgICB0aGlzLnNxdWFkLmNvdW50ID0gMTtcbiAgICB0aGlzLnNxdWFkLmFpbU9mZnNldCA9IDA7XG4gICAgdGhpcy5zcXVhZC5sYW5lID0gMDtcbiAgICB0aGlzLnNxdWFkLnggPSB0aGlzLmxhbmVYKDApO1xuICAgIHRoaXMuc3F1YWQudGFyZ2V0WCA9IHRoaXMubGFuZVgoMCk7XG4gICAgdGhpcy5wbGF5ZXJMYW5lID0gMDtcbiAgICB0aGlzLndlYXBvbkh1ZFNjcmVlblggPSB0aGlzLndlYXBvbkh1ZFRhcmdldFNjcmVlblgoMCk7XG4gICAgdGhpcy5wbGF5ZXJBY3RvcnMgPSBbbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KV07XG4gICAgdGhpcy5mYWlsdXJlUmVhc29uID0gXCJcIjtcbiAgICB0aGlzLnZpY3RvcnkgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlID0gbnVsbDtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLnBsYXkoXCJNZW51T3BlblwiKTtcbiAgfVxuXG4gIGNsZWFyU3RhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgdGhpcy5ndW5TaW11bGF0aW9uLmNsZWFyKCk7XG4gICAgdGhpcy5ndW5QaWNrdXBzID0gW107XG4gICAgdGhpcy5zaGllbGRQaWNrdXBzID0gW107XG4gICAgdGhpcy5zd29yZFBpY2t1cHMgPSBbXTtcbiAgICB0aGlzLm11bHRpcGxpZXJzID0gW107XG4gICAgdGhpcy5lbmVteUV4aXRFZmZlY3RzID0gW107XG4gICAgdGhpcy5leHBsb2RpbmdQbGF5ZXJzID0gW107XG4gICAgdGhpcy52aWN0b3J5ID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmdTd29yZERhbWFnZSA9IG51bGw7XG4gIH1cblxuICBzdGFydFRyYWNrKHRyYWNrOiBUcmFja01lbWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVHJhY2sgPSB0cmFjaztcbiAgICB0aGlzLnRyYWNrU2NlbmVJZCA9IHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQ7XG4gICAgdGhpcy5hcHBseVNjZW5lQmFja2dyb3VuZCgpO1xuICAgIHRoaXMubGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkID0gMDtcbiAgICB0aGlzLmNvbWJhdE5vdyA9IDA7XG4gICAgY29uc3QgYWxsRW50aXRpZXMgPSBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICBjb25zdCBwbGF5ZXJTdGFydCA9IGFsbEVudGl0aWVzLmZpbmQoZW50aXR5ID0+IGVudGl0eS5pZCA9PT0gXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgY29uc3Qgc3RhcnRMYW5lOiBMYW5lID0gcGxheWVyU3RhcnQ/LnNpZGUgPT09IFwicmlnaHRcIiA/IDEgOiAwO1xuICAgIHRoaXMucGxheWVyTGFuZSA9IHN0YXJ0TGFuZTtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBudWxsO1xuICAgIHRoaXMuY29sbGVjdGVkV2VhcG9uTGV2ZWxzLmNsZWFyKCk7XG4gICAgdGhpcy5jb29sZG93biA9IDA7XG4gICAgdGhpcy5ndW5Db29sZG93bnMgPSBbXTtcbiAgICB0aGlzLm5leHRUcmFja0VudGl0eSA9IDA7XG4gICAgdGhpcy50cmFja0VudGl0aWVzID0gYWxsRW50aXRpZXMuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuaWQgIT09IFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIHRoaXMuYnJlYWNoZXMgPSAwO1xuICAgIHRoaXMuY2xlYXJTdGFnZSgpO1xuICAgIHRoaXMuc3F1YWQuY291bnQgPSAxO1xuICAgIHRoaXMucGxheWVyQWN0b3JzID0gW25ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSldO1xuICAgIHRoaXMuc3F1YWQuYWltT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnNxdWFkLmxhbmUgPSBzdGFydExhbmU7XG4gICAgdGhpcy5zcXVhZC54ID0gdGhpcy5sYW5lWChzdGFydExhbmUpO1xuICAgIHRoaXMuc3F1YWQudGFyZ2V0WCA9IHRoaXMubGFuZVgoc3RhcnRMYW5lKTtcbiAgICB0aGlzLndlYXBvbkh1ZFNjcmVlblggPSB0aGlzLndlYXBvbkh1ZFRhcmdldFNjcmVlblgoc3RhcnRMYW5lKTtcbiAgICB0aGlzLnBsYXkoXCJUcmFja1N0YXJ0XCIpO1xuICB9XG5cbiAgc2V0U2NlbmUoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiB2b2lkIHtcbiAgICB0aGlzLnRyYWNrU2NlbmVJZCA9IHNjZW5lSWQ7XG4gICAgdGhpcy5hcHBseVNjZW5lQmFja2dyb3VuZCgpO1xuICB9XG5cbiAgc2V0U3F1YWRMYW5lKGxhbmU6IExhbmUsIG9wdGlvbnM6IHsgcmVxdWlyZUFjdGl2ZVRyYWNrPzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlQWN0aXZlVHJhY2sgJiYgIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICBpZiAobGFuZSAhPT0gdGhpcy5zcXVhZC5sYW5lKSB0aGlzLnBsYXkoXCJMYW5lU3dpdGNoXCIpO1xuICAgIHRoaXMuc3F1YWQuc2V0TGFuZShsYW5lLCB2YWx1ZSA9PiB0aGlzLmxhbmVYKHZhbHVlKSwgdGhpcy5jb21iYXROb3cpO1xuICAgIHRoaXMucGxheWVyTGFuZSA9IGxhbmU7XG4gIH1cblxuICBlcXVpcEd1bihndW5JZDogR3VuSWQsIGxldmVsID0gMSk6IHZvaWQge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRMZXZlbCA9IHRoaXMubm9ybWFsaXplV2VhcG9uTGV2ZWwoXCJndW5cIiwgZ3VuSWQsIGxldmVsKTtcbiAgICB0aGlzLnJlY29yZFdlYXBvbkxldmVsKFwiZ3VuXCIsIGd1bklkLCBub3JtYWxpemVkTGV2ZWwpO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0geyBpZDogZ3VuSWQsIGxldmVsOiBub3JtYWxpemVkTGV2ZWwgfTtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLmd1bkNvb2xkb3ducyA9IFtdO1xuICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cEd1blwiKTtcbiAgICB0aGlzLnBsYXkoXCJXZWFwb25SZWFkeVwiKTtcbiAgfVxuXG4gIGVxdWlwU2hpZWxkKHNoaWVsZElkOiBTaGllbGRJZCk6IHZvaWQge1xuICAgIGNvbnN0IGxldmVsID0gdGhpcy5uZXh0V2VhcG9uUGlja3VwTGV2ZWwoXCJzaGllbGRcIiwgc2hpZWxkSWQpO1xuICAgIGNvbnN0IGRlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW3NoaWVsZElkXTtcbiAgICB0aGlzLnJlY29yZFdlYXBvbkxldmVsKFwic2hpZWxkXCIsIHNoaWVsZElkLCBsZXZlbCk7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBuZXcgU2hpZWxkU3RhdGUoc2hpZWxkSWQsIGRlZi5tYXhDaGFyZ2VzLCBsZXZlbCk7XG4gICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwU2hpZWxkXCIpO1xuICAgIHRoaXMucGxheShcIlNoaWVsZFwiKTtcbiAgfVxuXG4gIGVxdWlwU3dvcmQoc3dvcmRJZDogU3dvcmRJZCk6IHZvaWQge1xuICAgIGNvbnN0IGxldmVsID0gdGhpcy5uZXh0V2VhcG9uUGlja3VwTGV2ZWwoXCJzd29yZFwiLCBzd29yZElkKTtcbiAgICB0aGlzLnJlY29yZFdlYXBvbkxldmVsKFwic3dvcmRcIiwgc3dvcmRJZCwgbGV2ZWwpO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBuZXcgU3dvcmRTdGF0ZShzd29yZElkLCBsZXZlbCk7XG4gICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwU3dvcmRcIik7XG4gICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gIH1cblxuICBzZXRTd29yZFZpc3VhbFR1bmluZyh0dW5pbmc6IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+KTogdm9pZCB7XG4gICAgdGhpcy5zd29yZFZpc3VhbFR1bmluZyA9IHsgLi4udHVuaW5nIH07XG4gIH1cblxuICBzZXRTaW11bGF0aW9uU3BlZWQoc3BlZWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2ltdWxhdGlvblNwZWVkID0gTnVtYmVyLmlzRmluaXRlKHNwZWVkKSA/IE1hdGgubWF4KC4wNSwgTWF0aC5taW4oMiwgc3BlZWQpKSA6IDE7XG4gIH1cblxuICBhZGRTcXVhZE1lbWJlcnMoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNxdWFkLmFkZChhbW91bnQpO1xuICAgIHRoaXMuc3luY1BsYXllckFjdG9ycygpO1xuICB9XG5cbiAgc3Bhd25FbmVteShvcHRpb25zOiB7IGVuZW15SWQ6IE9yYklkOyBsYW5lOiBMYW5lOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBoZWFsdGg/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlcjsgcm93SWQ/OiBudW1iZXI7IHBsYXlTb3VuZD86IGJvb2xlYW47IGNvbG9yPzogc3RyaW5nIH0pOiBudW1iZXIge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15SWRdO1xuICAgIGNvbnN0IGhlYWx0aCA9IG9wdGlvbnMuaGVhbHRoID8/IGRlZmluaXRpb24uaGVhbHRoO1xuICAgIGNvbnN0IGlkID0gKyt0aGlzLmVudGl0eUlkQ291bnRlcjtcbiAgICBjb25zdCBhY3RvciA9IGNyZWF0ZUVuZW15QWN0b3Iob3B0aW9ucy5lbmVteUlkKTtcbiAgICBpZiAob3B0aW9ucy5jb2xvcikgYWN0b3IuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZW5lbWllcy5wdXNoKHtcbiAgICAgIGlkLFxuICAgICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15SWQsXG4gICAgICBlbmVteUlkOiBvcHRpb25zLmVuZW15SWQsXG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEwNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIGhlYWx0aCxcbiAgICAgIG1heEhlYWx0aDogaGVhbHRoLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgcm93SWQ6IG9wdGlvbnMucm93SWQgPz8gaWQsXG4gICAgICBhY3RvcixcbiAgICAgIGR5aW5nOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy5wbGF5U291bmQgIT09IGZhbHNlICYmIGRlZmluaXRpb24uc3Bhd25Tb3VuZCkgdGhpcy5wbGF5KGRlZmluaXRpb24uc3Bhd25Tb3VuZCk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgZGVmZWF0RW5lbXlCeUlkKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIGlmIChlbmVteSAmJiAhZW5lbXkuZHlpbmcpIHRoaXMuZGVzdHJveUVuZW15KGVuZW15KTtcbiAgfVxuXG4gIHNwYXduR3VuUGlja3VwKG9wdGlvbnM6IHsgZ3VuSWQ6IEd1bklkOyBsYW5lOiBMYW5lOyBsZXZlbD86IG51bWJlcjsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLmd1blBpY2t1cHMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIGd1bklkOiBvcHRpb25zLmd1bklkLFxuICAgICAgcmVxdWVzdGVkTGV2ZWw6IG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHRoaXMubm9ybWFsaXplV2VhcG9uTGV2ZWwoXCJndW5cIiwgb3B0aW9ucy5ndW5JZCwgb3B0aW9ucy5sZXZlbCksXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmd1blBpY2t1cCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHNwYXduU2hpZWxkUGlja3VwKG9wdGlvbnM6IHsgc2hpZWxkSWQ6IFNoaWVsZElkOyBsYW5lOiBMYW5lOyBsZXZlbD86IG51bWJlcjsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNoaWVsZFBpY2t1cHMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIHNoaWVsZElkOiBvcHRpb25zLnNoaWVsZElkLFxuICAgICAgcmVxdWVzdGVkTGV2ZWw6IG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHRoaXMubm9ybWFsaXplV2VhcG9uTGV2ZWwoXCJzaGllbGRcIiwgb3B0aW9ucy5zaGllbGRJZCwgb3B0aW9ucy5sZXZlbCksXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgfSk7XG4gIH1cblxuICBzcGF3blN3b3JkUGlja3VwKG9wdGlvbnM6IHsgc3dvcmRJZDogU3dvcmRJZDsgbGFuZTogTGFuZTsgbGV2ZWw/OiBudW1iZXI7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy5zd29yZFBpY2t1cHMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIHN3b3JkSWQ6IG9wdGlvbnMuc3dvcmRJZCxcbiAgICAgIHJlcXVlc3RlZExldmVsOiBvcHRpb25zLmxldmVsID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB0aGlzLm5vcm1hbGl6ZVdlYXBvbkxldmVsKFwic3dvcmRcIiwgb3B0aW9ucy5zd29yZElkLCBvcHRpb25zLmxldmVsKSxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICB9KTtcbiAgfVxuXG4gIHNwYXduTXVsdGlwbGllclBpY2t1cChvcHRpb25zOiB7IGxhbmU6IExhbmU7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlcjsgbXVsdGlwbGllcklkPzogTXVsdGlwbGllcklkIH0pOiB2b2lkIHtcbiAgICBjb25zdCBtdWx0aXBsaWVySWQgPSBvcHRpb25zLm11bHRpcGxpZXJJZCA/PyBcInNxdWFkUGx1c09uZVwiO1xuICAgIHRoaXMubXVsdGlwbGllcnMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIG11bHRpcGxpZXJJZCxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgIGFjdG9yOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMubXVsdGlwbGllciB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0TG9vcCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wKCk7XG4gICAgY29uc3QgZnJhbWUgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMudGljayhub3cpO1xuICAgICAgdGhpcy5yZW5kZXIodGhpcy5jb21iYXROb3cpO1xuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgfTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIHN0b3BMb29wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcbiAgfVxuXG4gIHRpY2soZnJhbWVOb3c6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJhd0RlbHRhID0gTWF0aC5taW4oLjA1LCAoZnJhbWVOb3cgLSB0aGlzLmxhc3RGcmFtZSkgLyAxMDAwKTtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IGZyYW1lTm93O1xuICAgIGNvbnN0IGRlbHRhID0gcmF3RGVsdGEgKiBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyICogdGhpcy5zaW11bGF0aW9uU3BlZWQ7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkICs9IGRlbHRhO1xuICAgIHRoaXMuY29tYmF0Tm93ID0gdGhpcy5jb21iYXRFbGFwc2VkICogMTAwMDtcbiAgICB0aGlzLnVwZGF0ZVdlYXBvbkh1ZChkZWx0YSk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIFsuLi50aGlzLmV4cGxvZGluZ1BsYXllcnNdKSB7XG4gICAgICBpdGVtLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBpZiAoaXRlbS5hY3Rvci5kaXNwb3NlZCkgdGhpcy5leHBsb2RpbmdQbGF5ZXJzLnNwbGljZSh0aGlzLmV4cGxvZGluZ1BsYXllcnMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuICAgIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHModGhpcy5lbmVteUV4aXRFZmZlY3RzLCBkZWx0YSk7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBcImdhbWVcIiAmJiAhdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIGlmICh0aGlzLmFjdGl2ZVRyYWNrKSB0aGlzLnNwYXduVHJhY2tFbnRpdGllcygpO1xuXG4gICAgY29uc3QgZ3VuU3RhdHVzID0gdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPyBndW5GYW1pbHkubWVtYmVyc1t0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bi5pZF0ubGFiZWwgOiBcIk5vIHdlYXBvblwiO1xuICAgIGNvbnN0IHNoaWVsZERlZiA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID8gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQuc2hpZWxkSWRdIDogbnVsbDtcbiAgICBjb25zdCBzd29yZERlZiA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPyBzd29yZEZhbWlseS5tZW1iZXJzW3RoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQuc3dvcmRJZF0gOiBudWxsO1xuICAgIGlmICh0aGlzLmFjdGl2ZVRyYWNrKSB7XG4gICAgICB0aGlzLm9uUnVuU3RhdHVzPy4oYCR7Z3VuU3RhdHVzfSR7c2hpZWxkRGVmID8gYCBcdTAwQjcgJHtzaGllbGREZWYubGFiZWx9YCA6IFwiXCJ9JHtzd29yZERlZiA/IGAgXHUwMEI3ICR7c3dvcmREZWYubGFiZWx9YCA6IFwiXCJ9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFuZUVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15LmxhbmUgPT09IHRoaXMuc3F1YWQubGFuZSAmJiAhZW5lbXkuZHlpbmcpO1xuICAgIGNvbnN0IGNvbE9mZnNldHMgPSB0aGlzLnNxdWFkLmZyb250Um93Q29sdW1uT2Zmc2V0cyh0aGlzLnNjYWxlKCkpO1xuICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdEF1dG9BaW1PZmZzZXQobGFuZUVuZW1pZXMsIHRoaXMubGFuZVgodGhpcy5zcXVhZC5sYW5lKSwgY29sT2Zmc2V0cywgdGhpcy5zcXVhZC5haW1PZmZzZXQpO1xuICAgIHRoaXMuc3F1YWQuYXV0b0FpbShvZmZzZXQsIHRoaXMuY2FudmFzLndpZHRoICogLjIyLCBsYW5lID0+IHRoaXMubGFuZVgobGFuZSkpO1xuICAgIHRoaXMuc3F1YWQudXBkYXRlKGRlbHRhKTtcbiAgICB0aGlzLnN0YWdlRWxlbWVudC5kYXRhc2V0LnNxdWFkTGFuZSA9IFN0cmluZyh0aGlzLnNxdWFkLmxhbmUpO1xuICAgIHRoaXMuc3luY1NjZW5lQmFja2dyb3VuZFBsYWNlbWVudCgpO1xuICAgIHRoaXMuc3luY1BsYXllckFjdG9ycygpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuKSB7XG4gICAgICBhZHZhbmNlQ29vbGRvd25TbG90cyh0aGlzLmd1bkNvb2xkb3ducywgZGVsdGEpO1xuICAgICAgdGhpcy5maXJlKCk7XG4gICAgICBpZiAodGhpcy5ndW5TaW11bGF0aW9uLnVwZGF0ZUZpcmluZyh0aGlzLmNvbWJhdE5vdykgPiAwKSB0aGlzLnBsYXlHdW5GaXJlKHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuLmlkKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVByb2plY3RpbGVzKGRlbHRhKTtcbiAgICB0aGlzLnVwZGF0ZU5lYXJQbGF5ZXJFZmZlY3RzKGRlbHRhLCBzaGllbGREZWYsIHN3b3JkRGVmKTtcbiAgICB0aGlzLnVwZGF0ZUVuZW1pZXMoZGVsdGEsIHNoaWVsZERlZik7XG4gICAgdGhpcy51cGRhdGVQaWNrdXBzKGRlbHRhKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVRyYWNrICYmIHRoaXMudHJhY2tSZXNvbHZlZCgpKSB0aGlzLmZpbmlzaCh0aGlzLmJyZWFjaGVzID09PSAwKTtcbiAgfVxuXG4gIHJlbmRlcihub3cgPSB0aGlzLmNvbWJhdE5vdyk6IHZvaWQge1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzKHRoaXMudHJhY2tTY2VuZUlkLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCBub3cpO1xuICAgIGNvbnN0IHMgPSB0aGlzLnNjYWxlKCk7XG4gICAgY29uc3QgcGxheWVyUG9pbnRzID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHMpO1xuICAgIGNvbnN0IGhlbGljb3B0ZXJWaWV3cG9ydCA9IGhlbGljb3B0ZXJWaWV3cG9ydEZvcih0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLnBsYXllclkoKSwgbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5zcXVhZC54KSk7XG5cbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHBsYXllclBvaW50cykge1xuICAgICAgY29uc3Qgc21lYXIgPSBNYXRoLm1pbigyMiAqIHMsIE1hdGguYWJzKHRoaXMuc3F1YWQudGFyZ2V0WCAtIHRoaXMuc3F1YWQueCkgKiAuNDUpO1xuICAgICAgaWYgKHNtZWFyID4gMikge1xuICAgICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICAgIHg6IHBvaW50LnggLSBNYXRoLnNpZ24odGhpcy5zcXVhZC50YXJnZXRYIC0gdGhpcy5zcXVhZC54KSAqIHNtZWFyICogLjUsXG4gICAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgICB3aWR0aDogc21lYXIsXG4gICAgICAgICAgaGVpZ2h0OiAyLjIgKiBzLFxuICAgICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZS5kZWVwQmx1ZSxcbiAgICAgICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUuY3lhbixcbiAgICAgICAgICBnbG93OiAuNDUsXG4gICAgICAgICAgaW50ZW5zaXR5OiAuNSxcbiAgICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaW1pdGl2ZXMucHVzaCguLi50aGlzLmd1blNpbXVsYXRpb24ucHJvamVjdGlsZVByaW1pdGl2ZXMoKSk7XG4gICAgaWYgKHRoaXMudmljdG9yeSkgcHJpbWl0aXZlcy5wdXNoKC4uLnRoaXMudmljdG9yeS5wcmltaXRpdmVzKG5vdykpO1xuXG4gICAgY29uc3Qgc2hhcGVJbnN0YW5jZXM6IE5lb25Ub3BEb3duU2hhcGVbXSA9IFtdO1xuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCkge1xuICAgICAgY29uc3QgbGl2ZVNoaWVsZCA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkO1xuICAgICAgY29uc3QgbGl2ZURlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW2xpdmVTaGllbGQuc2hpZWxkSWRdO1xuICAgICAgY29uc3Qgc2NlbmUgPSBzaGllbGRWaXN1YWxzKHtcbiAgICAgICAgZGVmaW5pdGlvbjogbGl2ZURlZixcbiAgICAgICAgc3RyZW5ndGg6IGxpdmVTaGllbGQuY2hhcmdlcyxcbiAgICAgICAgaW5pdGlhbFN0cmVuZ3RoOiBsaXZlRGVmLm1heENoYXJnZXMsXG4gICAgICAgIHg6IHRoaXMuc3F1YWQueCxcbiAgICAgICAgeTogdGhpcy5wbGF5ZXJZKCksXG4gICAgICAgIG5vdyxcbiAgICAgICAgc2NhbGU6IHMsXG4gICAgICAgIHByb2plY3RTY3JlZW5PZmZzZXQ6ICh4LCB5LCBvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VudGVyID0gcHJvamVjdEhlbGljb3B0ZXJQb2ludCh4LCB5LCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpO1xuICAgICAgICAgIHJldHVybiB1bnByb2plY3RIZWxpY29wdGVyU2NyZWVuUG9pbnQoY2VudGVyLnggKyBvZmZzZXRYICogY2VudGVyLnNjYWxlLCBjZW50ZXIueSArIG9mZnNldFkgKiBjZW50ZXIuc2NhbGUsIHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdFByb2dyZXNzOiBsaXZlU2hpZWxkLmhpdEZsYXNoUHJvZ3Jlc3MsXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCguLi5zY2VuZS5wcmltaXRpdmVzKTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goLi4uc2NlbmUuc2hhcGVzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQpIHtcbiAgICAgIGNvbnN0IGxpdmVTd29yZCA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQ7XG4gICAgICBjb25zdCBsaXZlRGVmID0gc3dvcmRGYW1pbHkubWVtYmVyc1tsaXZlU3dvcmQuc3dvcmRJZF07XG4gICAgICBjb25zdCBzY2VuZSA9IHN3b3JkVmlzdWFscyh7XG4gICAgICAgIGRlZmluaXRpb246IGxpdmVEZWYsXG4gICAgICAgIHNsYXNoOiBsaXZlU3dvcmQuYWN0aXZlU2xhc2gsXG4gICAgICAgIHNsYXNoZXM6IGxpdmVTd29yZC5hY3RpdmVTbGFzaGVzLFxuICAgICAgICBkb2NrU2lkZTogbGl2ZVN3b3JkLnByZXZpb3VzU2xhc2hTaWRlLFxuICAgICAgICBkb2NrU2lkZXM6IGxpdmVTd29yZC5wcmV2aW91c1NsYXNoU2lkZXMsXG4gICAgICAgIHBvaW50czogcGxheWVyUG9pbnRzLFxuICAgICAgICB0dW5pbmc6IHRoaXMuc3dvcmRWaXN1YWxUdW5pbmcsXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goLi4uc2NlbmUucHJpbWl0aXZlcyk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKC4uLnNjZW5lLnNoYXBlcyk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgdGhpcy5zaGllbGRQaWNrdXBzKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnNoaWVsZElkXTtcbiAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5waWNrdXBHcmFudExldmVsKFwic2hpZWxkXCIsIHBpY2t1cC5zaGllbGRJZCwgcGlja3VwLnJlcXVlc3RlZExldmVsKTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goe1xuICAgICAgICAuLi5zaGllbGRQaWNrdXBWaXN1YWwoe1xuICAgICAgICB4OiBwaWNrdXAueCxcbiAgICAgICAgeTogcGlja3VwLnksXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICAgICAgbm93LFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgICAgfSksXG4gICAgICAgIGxhYmVsOiBzaGFwZUxhYmVsKGAke2RlZmluaXRpb24ubGFiZWx9OiBMJHtsZXZlbH1gLCBcImFib3ZlXCIsIDEwLCA3KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLnN3b3JkUGlja3Vwcykge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnN3b3JkSWRdO1xuICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLnBpY2t1cEdyYW50TGV2ZWwoXCJzd29yZFwiLCBwaWNrdXAuc3dvcmRJZCwgcGlja3VwLnJlcXVlc3RlZExldmVsKTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goe1xuICAgICAgICAuLi5zd29yZFBpY2t1cFZpc3VhbCh7XG4gICAgICAgIHg6IHBpY2t1cC54LFxuICAgICAgICB5OiBwaWNrdXAueSxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgICAgICBub3csXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgICB9KSxcbiAgICAgICAgbGFiZWw6IHNoYXBlTGFiZWwoYCR7ZGVmaW5pdGlvbi5sYWJlbH06IEwke2xldmVsfWAsIFwiYWJvdmVcIiwgMTAsIDcpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyU2l6ZSA9IDE0O1xuICAgIGZvciAoY29uc3QgW2luZGV4LCBwb2ludF0gb2YgcGxheWVyUG9pbnRzLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgYWN0b3IgPSB0aGlzLnBsYXllckFjdG9yc1tpbmRleF0gPz8gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShhY3RvciwgcG9pbnQueCwgcG9pbnQueSwgcGxheWVyU2l6ZSwgcGxheWVyT3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBwb2ludC54LCBwb2ludC55LCBub3csIGluZGV4KSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5leHBsb2RpbmdQbGF5ZXJzKSBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoaXRlbS5hY3RvciwgaXRlbS54LCBpdGVtLnksIHBsYXllclNpemUpKTtcbiAgICBzaGFwZUluc3RhbmNlcy5wdXNoKC4uLnRoaXMud2VhcG9uSHVkU2hhcGVzKG5vdywgcywgaGVsaWNvcHRlclZpZXdwb3J0KSk7XG5cbiAgICBjb25zdCBlbmVteUhlYWx0aEJhcnM6IFBhcmFtZXRlcnM8dHlwZW9mIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcz5bMF1bbnVtYmVyXVtdID0gW107XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiB0aGlzLmVuZW1pZXMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSk7XG4gICAgICBjb25zdCBzaXplID0gMTggKiBkZWZpbml0aW9uLmNvbHVtblNwYW47XG4gICAgICBlbmVteUhlYWx0aEJhcnMucHVzaCh7IGVuZW15SWQ6IGVuZW15LmVuZW15SWQsIHg6IGVuZW15LngsIHk6IGVuZW15LnksIGhlYWx0aDogZW5lbXkuaGVhbHRoLCBtYXhIZWFsdGg6IGVuZW15Lm1heEhlYWx0aCwgc2l6ZSwgc2NhbGU6IHMgfSk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoZW5lbXkuYWN0b3IsIGVuZW15LngsIGVuZW15LnksIHNpemUsIGVuZW15T3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBlbmVteS54LCBlbmVteS55LCBub3csIGVuZW15LnJvd0lkKSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLmd1blBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGd1biA9IGd1bkZhbWlseS5tZW1iZXJzW3BpY2t1cC5ndW5JZF07XG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMucGlja3VwR3JhbnRMZXZlbChcImd1blwiLCBwaWNrdXAuZ3VuSWQsIHBpY2t1cC5yZXF1ZXN0ZWRMZXZlbCk7XG4gICAgICBwaWNrdXAuYWN0b3IubGFiZWwgPSBzaGFwZUxhYmVsKGAke2d1bi5sYWJlbH06IEwke2xldmVsfWAsIFwiYWJvdmVcIiwgMTAsIDcpO1xuICAgICAgcGlja3VwLmFjdG9yLmNvbG9yID0gbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGlja3VwLmFjdG9yLCBwaWNrdXAueCwgcGlja3VwLnksIDE1LCBiaWxsYm9hcmRPcmllbnRhdGlvbih0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHBpY2t1cC54LCBwaWNrdXAueSwgbm93KSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLm11bHRpcGxpZXJzKSB7XG4gICAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzW3BpY2t1cC5tdWx0aXBsaWVySWRdO1xuICAgICAgcGlja3VwLmFjdG9yLmxhYmVsID0gc2hhcGVMYWJlbChgJHtzcGVjLnNxdWFkQWRkZWQgKyAxfXhgLCBcImNlbnRlclwiLCAxMSwgMCk7XG4gICAgICBwaWNrdXAuYWN0b3IuY29sb3IgPSBuZW9uUGFsZXR0ZVtzcGVjLnBpY2t1cENvbG9yXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShwaWNrdXAuYWN0b3IsIHBpY2t1cC54LCBwaWNrdXAueSwgMTYsIGJpbGxib2FyZE9yaWVudGF0aW9uKHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgcGlja3VwLngsIHBpY2t1cC55LCBub3cpKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdEhlbGljb3B0ZXJTY2VuZShwcmltaXRpdmVzLCBzaGFwZUluc3RhbmNlcywgdGhpcy5lbmVteUV4aXRFZmZlY3RzLm1hcChlbmVteUV4aXRDbG91ZCksIHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCk7XG4gICAgcHJvamVjdGVkLnByaW1pdGl2ZXMucHVzaCguLi5wcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoZW5lbXlIZWFsdGhCYXJzLCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihwcm9qZWN0ZWQsIG5vdyAvIDEwMDApO1xuICB9XG5cbiAgc25hcHNob3QoKTogTmVvblN3YXJtU25hcHNob3Qge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBhY3RpdmVUcmFjazogdGhpcy5hY3RpdmVUcmFjayAhPT0gbnVsbCxcbiAgICAgIGNvbWJhdE5vdzogdGhpcy5jb21iYXROb3csXG4gICAgICBjb21iYXRFbGFwc2VkOiB0aGlzLmNvbWJhdEVsYXBzZWQsXG4gICAgICBzY2VuZUlkOiB0aGlzLnRyYWNrU2NlbmVJZCxcbiAgICAgIHNxdWFkOiB7XG4gICAgICAgIGxhbmU6IHRoaXMuc3F1YWQubGFuZSxcbiAgICAgICAgY291bnQ6IHRoaXMuc3F1YWQuY291bnQsXG4gICAgICAgIHg6IHRoaXMuc3F1YWQueCxcbiAgICAgICAgdGFyZ2V0WDogdGhpcy5zcXVhZC50YXJnZXRYLFxuICAgICAgICBhaW1PZmZzZXQ6IHRoaXMuc3F1YWQuYWltT2Zmc2V0LFxuICAgICAgfSxcbiAgICAgIGFjdGl2ZToge1xuICAgICAgICBndW46IHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID8geyAuLi50aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biB9IDogbnVsbCxcbiAgICAgICAgc2hpZWxkOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZD8uc2hpZWxkSWQgPz8gbnVsbCxcbiAgICAgICAgc2hpZWxkTGV2ZWw6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkPy5sZXZlbCA/PyBudWxsLFxuICAgICAgICBzd29yZDogdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA/IHsgaWQ6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQuc3dvcmRJZCwgbGV2ZWw6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQubGV2ZWwgfSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgZW5lbWllczogdGhpcy5lbmVtaWVzLm1hcChlbmVteSA9PiAoe1xuICAgICAgICBpZDogZW5lbXkuaWQsXG4gICAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICAgIGxhbmU6IGVuZW15LmxhbmUsXG4gICAgICAgIHg6IGVuZW15LngsXG4gICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgIGhlYWx0aDogZW5lbXkuaGVhbHRoLFxuICAgICAgICBtYXhIZWFsdGg6IGVuZW15Lm1heEhlYWx0aCxcbiAgICAgICAgZHlpbmc6IGVuZW15LmR5aW5nLFxuICAgICAgfSkpLFxuICAgICAgcGlja3Vwczoge1xuICAgICAgICBndW5zOiB0aGlzLmd1blBpY2t1cHMubGVuZ3RoLFxuICAgICAgICBzaGllbGRzOiB0aGlzLnNoaWVsZFBpY2t1cHMubGVuZ3RoLFxuICAgICAgICBzd29yZHM6IHRoaXMuc3dvcmRQaWNrdXBzLmxlbmd0aCxcbiAgICAgICAgbXVsdGlwbGllcnM6IHRoaXMubXVsdGlwbGllcnMubGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIGtpbGxzOiB0aGlzLmtpbGxzLFxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcExvb3AoKTtcbiAgICB0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Bhd25UcmFja0VudGl0aWVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIHdoaWxlIChcbiAgICAgIHRoaXMubmV4dFRyYWNrRW50aXR5IDwgdGhpcy50cmFja0VudGl0aWVzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5lbnRpdHlBcnJpdmFsU2Vjb25kcyh0aGlzLnRyYWNrRW50aXRpZXNbdGhpcy5uZXh0VHJhY2tFbnRpdHldKSA8PSB0aGlzLmNvbWJhdEVsYXBzZWQgKyB0aGlzLnNwYXduTGVhZFNlY29uZHModGhpcy50cmFja0VudGl0aWVzW3RoaXMubmV4dFRyYWNrRW50aXR5XSlcbiAgICApIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMudHJhY2tFbnRpdGllc1t0aGlzLm5leHRUcmFja0VudGl0eSsrXTtcbiAgICAgIGNvbnN0IGxhbmU6IExhbmUgPSBlbnRpdHkuc2lkZSA9PT0gXCJsZWZ0XCIgPyAwIDogMTtcbiAgICAgIGNvbnN0IGVuZW15RGVmaW5pdGlvbkVudHJ5ID0gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoZW50aXR5LmlkKTtcbiAgICAgIGlmIChlbmVteURlZmluaXRpb25FbnRyeSkge1xuICAgICAgICBjb25zdCB7IGVuZW15SWQsIGRlZmluaXRpb24gfSA9IGVuZW15RGVmaW5pdGlvbkVudHJ5O1xuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh7XG4gICAgICAgICAgaWQ6ICsrdGhpcy5lbnRpdHlJZENvdW50ZXIsXG4gICAgICAgICAgZW5lbXlUeXBlOiBlbmVteUlkLFxuICAgICAgICAgIGVuZW15SWQsXG4gICAgICAgICAgbGFuZSxcbiAgICAgICAgICB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSxcbiAgICAgICAgICB5OiB0aGlzLmVuZW15U3Bhd25ZKGVudGl0eSksXG4gICAgICAgICAgaGVhbHRoOiBkZWZpbml0aW9uLmhlYWx0aCAqIHRoaXMuYWN0aXZlVHJhY2suZGVmaW5pdGlvbi5iYWxhbmNlLmVuZW15SHAsXG4gICAgICAgICAgbWF4SGVhbHRoOiBkZWZpbml0aW9uLmhlYWx0aCAqIHRoaXMuYWN0aXZlVHJhY2suZGVmaW5pdGlvbi5iYWxhbmNlLmVuZW15SHAsXG4gICAgICAgICAgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyLFxuICAgICAgICAgIHJvd0lkOiBlbnRpdHkucm93SW5kZXgsXG4gICAgICAgICAgYWN0b3I6IGNyZWF0ZUVuZW15QWN0b3IoZW5lbXlJZCksXG4gICAgICAgICAgZHlpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24uc3Bhd25Tb3VuZCkgdGhpcy5wbGF5KGRlZmluaXRpb24uc3Bhd25Tb3VuZCk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5ndW4uXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uZ3VuLlwiLmxlbmd0aCk7XG4gICAgICAgIGlmICghKGNhbmRpZGF0ZSBpbiBndW5GYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgdXNlcyB1bmtub3duIGd1biBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICB0aGlzLnNwYXduR3VuUGlja3VwKHsgbGFuZSwgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksIHk6IHRoaXMucGlja3VwU3Bhd25ZKGVudGl0eSksIGd1bklkOiBjYW5kaWRhdGUgYXMgR3VuSWQsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gZW50aXR5LmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIubGVuZ3RoKTtcbiAgICAgICAgaWYgKCEoY2FuZGlkYXRlIGluIHNoaWVsZEZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayB1c2VzIHVua25vd24gc2hpZWxkIGlkIFwiJHtlbnRpdHkuaWR9XCIuYCk7XG4gICAgICAgIHRoaXMuc3Bhd25TaGllbGRQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoZW50aXR5KSwgc2hpZWxkSWQ6IGNhbmRpZGF0ZSBhcyBTaGllbGRJZCwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIubGVuZ3RoKTtcbiAgICAgICAgaWYgKCEoY2FuZGlkYXRlIGluIHN3b3JkRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBzd29yZCBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICB0aGlzLnNwYXduU3dvcmRQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoZW50aXR5KSwgc3dvcmRJZDogY2FuZGlkYXRlIGFzIFN3b3JkSWQsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSB7XG4gICAgICAgIHRoaXMuc3Bhd25NdWx0aXBsaWVyUGlja3VwKHsgbGFuZSwgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksIHk6IHRoaXMucGlja3VwU3Bhd25ZKGVudGl0eSksIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgZW50aXR5IGlkIFwiJHtlbnRpdHkuaWR9XCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgbGFuZSBydW5uZXIuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFja1Jlc29sdmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5leHRUcmFja0VudGl0eSA+PSB0aGlzLnRyYWNrRW50aXRpZXMubGVuZ3RoXG4gICAgICAmJiB0aGlzLmVuZW1pZXMubGVuZ3RoID09PSAwXG4gICAgICAmJiB0aGlzLmd1blBpY2t1cHMubGVuZ3RoID09PSAwXG4gICAgICAmJiB0aGlzLnNoaWVsZFBpY2t1cHMubGVuZ3RoID09PSAwXG4gICAgICAmJiB0aGlzLnN3b3JkUGlja3Vwcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMubXVsdGlwbGllcnMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXJlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4pIHJldHVybjtcbiAgICBjb25zdCB7IGlkOiBndW5JZCwgbGV2ZWw6IGd1bkxldmVsIH0gPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bjtcbiAgICBjb25zdCBndW4gPSBndW5GYW1pbHkubWVtYmVyc1tndW5JZF07XG4gICAgY29uc3QgdHVuaW5nID0gZ3VuLmxldmVscy5maW5kKGl0ZW0gPT4gaXRlbS5sZXZlbCA9PT0gZ3VuTGV2ZWwpID8/IGd1bi5sZXZlbHNbMF07XG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHRoaXMuc2NhbGUoKSkubWFwKHBvaW50ID0+ICh7IHg6IHBvaW50LngsIHk6IHRoaXMucGxheWVyWSgpIC0gMjAgKiB0aGlzLnNjYWxlKCkgfSkpO1xuICAgIHRoaXMuc3luY0d1bkNvb2xkb3ducyhwb2ludHMubGVuZ3RoKTtcbiAgICBjb25zdCBjbGFpbWVkVGFyZ2V0SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgY29uc3QgY3ljbGVTZWNvbmRzID0gMSAvIHR1bmluZy5maXJlUmF0ZVBlclNlY29uZDtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmICh0aGlzLmd1bkNvb2xkb3duc1tpbmRleF0gPiAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2VsZWN0R3VuVGFyZ2V0KHBvaW50LngsIGNsYWltZWRUYXJnZXRJZHMpO1xuICAgICAgaWYgKCF0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgY2xhaW1lZFRhcmdldElkcy5hZGQodGFyZ2V0LmlkKTtcbiAgICAgIHRoaXMuZ3VuU2ltdWxhdGlvbi5maXJlKGd1biwgdHVuaW5nLCB0aGlzLnBsYXllckxhbmUsIFt7IC4uLnBvaW50LCBhaW1YOiB0YXJnZXQueCwgYWltWTogdGFyZ2V0LnkgfV0sIHRoaXMuY29tYmF0Tm93LCB0aGlzLnNjYWxlKCkpO1xuICAgICAgdGhpcy5ndW5Db29sZG93bnNbaW5kZXhdID0gY3ljbGVTZWNvbmRzO1xuICAgIH1cbiAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5ndW5Db29sZG93bnMubGVuZ3RoID4gMCA/IE1hdGgubWluKC4uLnRoaXMuZ3VuQ29vbGRvd25zKSA6IDA7XG4gIH1cblxuICBwcml2YXRlIHN5bmNHdW5Db29sZG93bnMoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHN5bmNTbG90QXJyYXkodGhpcy5ndW5Db29sZG93bnMsIGNvdW50LCAoKSA9PiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0R3VuVGFyZ2V0KG9yaWdpblg6IG51bWJlciwgY2xhaW1lZFRhcmdldElkczogUmVhZG9ubHlTZXQ8bnVtYmVyPik6IEVuZW15IHwgbnVsbCB7XG4gICAgY29uc3QgbmF0aXZlUmVhY2ggPSA0MiAqIHRoaXMuc2NhbGUoKTtcbiAgICBjb25zdCBhc3Npc3RSZWFjaCA9IDk2ICogdGhpcy5zY2FsZSgpO1xuICAgIGNvbnN0IGxpdmVMYW5lRW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoZW5lbXkgPT4gIWVuZW15LmR5aW5nICYmIGVuZW15LmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSAmJiBlbmVteS55IDwgdGhpcy5wbGF5ZXJZKCkpO1xuICAgIGNvbnN0IG5hdGl2ZVRhcmdldCA9IHNlbGVjdEJlc3RVbmNsYWltZWQoXG4gICAgICBsaXZlTGFuZUVuZW1pZXMsXG4gICAgICBjbGFpbWVkVGFyZ2V0SWRzLFxuICAgICAgZW5lbXkgPT4gZW5lbXkuaWQsXG4gICAgICBlbmVteSA9PiB0aGlzLnNjb3JlR3VuTmF0aXZlVGFyZ2V0KGVuZW15LCBvcmlnaW5YLCBuYXRpdmVSZWFjaCksXG4gICAgKTtcbiAgICBjb25zdCBwcmVzc3VyZVRhcmdldCA9IHNlbGVjdEJlc3RVbmNsYWltZWQoXG4gICAgICBsaXZlTGFuZUVuZW1pZXMsXG4gICAgICBuZXcgU2V0KCksXG4gICAgICBlbmVteSA9PiBlbmVteS5pZCxcbiAgICAgIGVuZW15ID0+IHRoaXMuc2NvcmVHdW5QcmVzc3VyZVRhcmdldChlbmVteSwgb3JpZ2luWCwgYXNzaXN0UmVhY2gsIGNsYWltZWRUYXJnZXRJZHMuaGFzKGVuZW15LmlkKSksXG4gICAgKTtcbiAgICBpZiAoIW5hdGl2ZVRhcmdldCkgcmV0dXJuIHByZXNzdXJlVGFyZ2V0O1xuICAgIGlmICghcHJlc3N1cmVUYXJnZXQpIHJldHVybiBuYXRpdmVUYXJnZXQ7XG5cbiAgICBjb25zdCBuYXRpdmVEaXN0YW5jZSA9IHRoaXMucGxheWVyWSgpIC0gbmF0aXZlVGFyZ2V0Lnk7XG4gICAgY29uc3QgcHJlc3N1cmVEaXN0YW5jZSA9IHRoaXMucGxheWVyWSgpIC0gcHJlc3N1cmVUYXJnZXQueTtcbiAgICByZXR1cm4gcHJlc3N1cmVEaXN0YW5jZSArIDgwICogdGhpcy5zY2FsZSgpIDwgbmF0aXZlRGlzdGFuY2UgPyBwcmVzc3VyZVRhcmdldCA6IG5hdGl2ZVRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgc2NvcmVHdW5OYXRpdmVUYXJnZXQoZW5lbXk6IEVuZW15LCBvcmlnaW5YOiBudW1iZXIsIGhvcml6b250YWxSZWFjaDogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgZHggPSBNYXRoLmFicyhlbmVteS54IC0gb3JpZ2luWCk7XG4gICAgaWYgKGR4ID4gaG9yaXpvbnRhbFJlYWNoICsgdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZHkgPSB0aGlzLnBsYXllclkoKSAtIGVuZW15Lnk7XG4gICAgcmV0dXJuIGR4ICogMTAwMCArIGR5O1xuICB9XG5cbiAgcHJpdmF0ZSBzY29yZUd1blByZXNzdXJlVGFyZ2V0KGVuZW15OiBFbmVteSwgb3JpZ2luWDogbnVtYmVyLCBob3Jpem9udGFsUmVhY2g6IG51bWJlciwgYWxyZWFkeUNsYWltZWQ6IGJvb2xlYW4pOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBkeCA9IE1hdGguYWJzKGVuZW15LnggLSBvcmlnaW5YKTtcbiAgICBpZiAoZHggPiBob3Jpem9udGFsUmVhY2ggKyB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogdGhpcy5zY2FsZSgpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBkeSA9IHRoaXMucGxheWVyWSgpIC0gZW5lbXkueTtcbiAgICBjb25zdCBjb2x1bW5QcmVzc3VyZSA9IHRoaXMuZW5lbWllcy5maWx0ZXIob3RoZXIgPT5cbiAgICAgICFvdGhlci5keWluZyAmJlxuICAgICAgb3RoZXIubGFuZSA9PT0gZW5lbXkubGFuZSAmJlxuICAgICAgb3RoZXIueSA8IHRoaXMucGxheWVyWSgpICYmXG4gICAgICBNYXRoLmFicyhvdGhlci54IC0gZW5lbXkueCkgPD0gMTggKiB0aGlzLnNjYWxlKCkgJiZcbiAgICAgIE1hdGguYWJzKG90aGVyLnkgLSBlbmVteS55KSA8PSAxODAgKiB0aGlzLnNjYWxlKClcbiAgICApLmxlbmd0aDtcbiAgICBjb25zdCBjbGFpbWVkUGVuYWx0eSA9IGFscmVhZHlDbGFpbWVkID8gNDUwIDogMDtcbiAgICBjb25zdCBwcmVzc3VyZUJvbnVzID0gTWF0aC5taW4oNCwgY29sdW1uUHJlc3N1cmUpICogNzAgKiB0aGlzLnNjYWxlKCk7XG4gICAgcmV0dXJuIGNsYWltZWRQZW5hbHR5ICsgZHggKiA3ICsgZHkgLSBwcmVzc3VyZUJvbnVzO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQcm9qZWN0aWxlcyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5ndW5TaW11bGF0aW9uLnVwZGF0ZVByb2plY3RpbGVzKGRlbHRhLCB0aGlzLmNvbWJhdE5vdywgdGhpcy5lbmVtaWVzLm1hcChlbmVteSA9PiBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICByYWRpdXM6IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5yYWRpdXMgKiB0aGlzLnNjYWxlKCksXG4gICAgfSkpLCB7IHRvcDogLTQwICogdGhpcy5zY2FsZSgpLCBsZWZ0OiAtNDAsIHJpZ2h0OiB0aGlzLmNhbnZhcy53aWR0aCArIDQwIH0sIChzaG90LCBlbmVteSkgPT4ge1xuICAgICAgY29uc3QgZ2FtZUVuZW15ID0gZW5lbXkgYXMgRW5lbXkgJiB7IHJhZGl1czogbnVtYmVyIH07XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNvbHZlRW5lbXlEYW1hZ2Uoe1xuICAgICAgICBlbmVteTogZ2FtZUVuZW15LFxuICAgICAgICBlZmZlY3RzOiB0aGlzLmVuZW15RXhpdEVmZmVjdHMsXG4gICAgICAgIGltcGFjdE1hZ25pdHVkZTogc2hvdC5kYW1hZ2UgKyBzaG90Lmtub2NrYmFjayAqIC4wNixcbiAgICAgICAgY29sb3I6IHRoaXMuZW5lbXlFeGl0Q29sb3IoZ2FtZUVuZW15KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdC5raWxsZWQpIHtcbiAgICAgICAgdGhpcy5raWxscysrO1xuICAgICAgICB0aGlzLnBsYXkocmVzdWx0LmRlZmluaXRpb24uZGVhdGhTb3VuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXkoXCJQcm9qZWN0aWxlSGl0XCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJFbmVteUhpdFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTmVhclBsYXllckVmZmVjdHMoZGVsdGE6IG51bWJlciwgc2hpZWxkRGVmOiAodHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzKVtTaGllbGRJZF0gfCBudWxsLCBzd29yZERlZjogU3dvcmRNZW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcHggPSB0aGlzLnNxdWFkLng7XG4gICAgY29uc3QgcHkgPSB0aGlzLnBsYXllclkoKTtcbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgJiYgc2hpZWxkRGVmKSB7XG4gICAgICBjb25zdCBzaGllbGRTdGF0ZSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkO1xuICAgICAgY29uc3Qgc2hpZWxkVGhyZWF0cyA9IHF1ZXJ5TmVhcmJ5VGhyZWF0cyh0aGlzLmVuZW1pZXMsIHtcbiAgICAgICAgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LFxuICAgICAgICBsYW5lOiB0aGlzLnBsYXllckxhbmUsXG4gICAgICAgIHJhbmdlOiBzaGllbGREZWYucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogZmFsc2UsXG4gICAgICAgIHB1cnBvc2U6IFwic2hpZWxkXCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2hpZWxkUmVzdWx0ID0gdGlja1NoaWVsZChzaGllbGRTdGF0ZSwgc2hpZWxkRGVmLCBzaGllbGRUaHJlYXRzLCBweCwgcHksIHRoaXMuY29tYmF0Tm93LCBkZWx0YSk7XG4gICAgICBpZiAoc2hpZWxkUmVzdWx0LnB1c2hFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW5lbXkgb2YgdGhpcy5lbmVtaWVzKSB7XG4gICAgICAgICAgaWYgKCFzaGllbGRSZXN1bHQucHVzaEVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICAgICAgY29uc3QgZHggPSBlbmVteS54IC0gcHg7XG4gICAgICAgICAgY29uc3QgZHkgPSBlbmVteS55IC0gcHk7XG4gICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAxO1xuICAgICAgICAgIGVuZW15LnggKz0gKGR4IC8gZGlzdCkgKiBzaGllbGRSZXN1bHQucHVzaERpc3RhbmNlICogdGhpcy5zY2FsZSgpO1xuICAgICAgICAgIGVuZW15LnkgKz0gKGR5IC8gZGlzdCkgKiBzaGllbGRSZXN1bHQucHVzaERpc3RhbmNlICogdGhpcy5zY2FsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheShcIlNoaWVsZFB1bHNlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlRW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICAgICAgaWYgKGVuZW15LmR5aW5nIHx8ICFzaGllbGRSZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICAgICAgZW5lbXkuaGVhbHRoIC09IHNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlQW1vdW50ICogZGVsdGE7XG4gICAgICAgICAgaWYgKGVuZW15LmhlYWx0aCA8PSAwKSB0aGlzLmRlc3Ryb3lFbmVteShlbmVteSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCAmJiBzd29yZERlZikge1xuICAgICAgY29uc3Qgc3dvcmRTdGF0ZSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQ7XG4gICAgICBjb25zdCBzd29yZFF1ZXJ5UmFuZ2UgPSBzd29yZERlZi5yb3dSZWFjaFxuICAgICAgICA/IE1hdGgubWF4KHRoaXMuY2FudmFzLndpZHRoLCBzd29yZERlZi5yYW5nZSAqIHRoaXMuc2NhbGUoKSlcbiAgICAgICAgOiBzd29yZERlZi5yYW5nZSAqIHRoaXMuc2NhbGUoKTtcbiAgICAgIGNvbnN0IHN3b3JkVGhyZWF0cyA9IHF1ZXJ5TmVhcmJ5VGhyZWF0cyh0aGlzLmVuZW1pZXMsIHtcbiAgICAgICAgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LFxuICAgICAgICBsYW5lOiB0aGlzLnBsYXllckxhbmUsXG4gICAgICAgIHJhbmdlOiBzd29yZFF1ZXJ5UmFuZ2UsXG4gICAgICAgIGluY2x1ZGVBZGphY2VudExhbmVzOiAoc3dvcmREZWYudGFyZ2V0aW5nTW9kZSBhcyBTd29yZFRhcmdldGluZ01vZGUpID09PSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgICAgbWF4VGFyZ2V0czogc3dvcmREZWYucm93UmVhY2ggPyB1bmRlZmluZWQgOiBzd29yZERlZi5tYXhUYXJnZXRzLFxuICAgICAgICBwdXJwb3NlOiBcInN3b3JkXCIsXG4gICAgICB9KS5maWx0ZXIodGhyZWF0ID0+ICFzd29yZERlZi5yb3dSZWFjaCB8fCBNYXRoLmFicyh0aHJlYXQudGFyZ2V0LnkgLSBweSkgPD0gc3dvcmREZWYucmFuZ2UgKiB0aGlzLnNjYWxlKCkpO1xuICAgICAgY29uc3Qgc3dvcmRSZXN1bHQgPSB0aWNrU3dvcmQoc3dvcmRTdGF0ZSwgc3dvcmREZWYsIHN3b3JkVGhyZWF0cywgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgZGVsdGEsIG5lb25QYWxldHRlW3N3b3JkRGVmLmNvbG9yXSwgc3dvcmRWaXN1YWxEdXJhdGlvbk1zKHRoaXMuc3dvcmRWaXN1YWxUdW5pbmcpLCB0aGlzLnNxdWFkLmNvdW50KTtcbiAgICAgIGlmIChzd29yZFJlc3VsdC5zd2luZ1RyaWdnZXJlZCAmJiBzd29yZFJlc3VsdC5oaXRFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYXBwbHlQZW5kaW5nU3dvcmREYW1hZ2UoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wbGF5KFwiU3dvcmRTd2luZ1dob29zaFwiKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nU3dvcmREYW1hZ2UgPSB7XG4gICAgICAgICAgaGl0czogdGhpcy5zY2hlZHVsZVN3b3JkSGl0cyhzd29yZFJlc3VsdC5oaXRUYXJnZXRzLCBzd29yZFN0YXRlLnByZXZpb3VzU2xhc2hTaWRlKSxcbiAgICAgICAgICBkYW1hZ2U6IHN3b3JkUmVzdWx0LmRhbWFnZSxcbiAgICAgICAgICBjb2xvcjogbmVvblBhbGV0dGVbc3dvcmREZWYuY29sb3JdLFxuICAgICAgICAgIGltcGFjdFNvdW5kSWQ6IHN3b3JkSW1wYWN0U291bmRJZHNbc3dvcmRTdGF0ZS5zd29yZElkXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwbHlQZW5kaW5nU3dvcmREYW1hZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlU3dvcmRIaXRzKHRhcmdldHM6IEFycmF5PHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4sIHNpZGU6IC0xIHwgMSk6IEFycmF5PHsgZW5lbXlJZDogbnVtYmVyOyBkdWVBdDogbnVtYmVyIH0+IHtcbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHN3b3JkVmlzdWFsRHVyYXRpb25Ncyh0aGlzLnN3b3JkVmlzdWFsVHVuaW5nKTtcbiAgICBjb25zdCB4cyA9IHRhcmdldHMubWFwKHRhcmdldCA9PiB0YXJnZXQueCk7XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLnhzKTtcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4ueHMpO1xuICAgIGNvbnN0IHNwYW4gPSBNYXRoLm1heCgxLCBtYXhYIC0gbWluWCk7XG4gICAgY29uc3QgbGVmdFRvUmlnaHQgPSBzaWRlID09PSAxO1xuICAgIHJldHVybiB0YXJnZXRzLm1hcCh0YXJnZXQgPT4ge1xuICAgICAgY29uc3QgbGFuZVByb2dyZXNzID0gbGVmdFRvUmlnaHRcbiAgICAgICAgPyAodGFyZ2V0LnggLSBtaW5YKSAvIHNwYW5cbiAgICAgICAgOiAobWF4WCAtIHRhcmdldC54KSAvIHNwYW47XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmVteUlkOiB0YXJnZXQuaWQsXG4gICAgICAgIGR1ZUF0OiB0aGlzLmNvbWJhdE5vdyArIGR1cmF0aW9uICogdGhpcy5zd29yZFN0cmlrZVByb2dyZXNzKGxhbmVQcm9ncmVzcyksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzd29yZFN0cmlrZVByb2dyZXNzKGxhbmVQcm9ncmVzcyA9IC43Mik6IG51bWJlciB7XG4gICAgY29uc3QgdHVuaW5nID0gdGhpcy5zd29yZFZpc3VhbFR1bmluZztcbiAgICBjb25zdCBzdHJpa2UgPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gPz8gLjMxO1xuICAgIGNvbnN0IGZvbGxvd1Rocm91Z2ggPSB0dW5pbmcuZm9sbG93VGhyb3VnaER1cmF0aW9uID8/IC4xODtcbiAgICBjb25zdCB0b3RhbCA9IE1hdGgubWF4KC4wMSwgc3RyaWtlICsgZm9sbG93VGhyb3VnaCk7XG4gICAgY29uc3QgY2xhbXBlZExhbmVQcm9ncmVzcyA9IE1hdGgubWF4KC4xOCwgTWF0aC5taW4oLjg4LCBsYW5lUHJvZ3Jlc3MpKTtcbiAgICByZXR1cm4gTWF0aC5taW4oLjk1LCAoc3RyaWtlICogY2xhbXBlZExhbmVQcm9ncmVzcykgLyB0b3RhbCk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UGVuZGluZ1N3b3JkRGFtYWdlKG9wdGlvbnM6IHsgZm9yY2U/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xuICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLnBlbmRpbmdTd29yZERhbWFnZTtcbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybjtcbiAgICBjb25zdCBkdWVIaXRzID0gb3B0aW9ucy5mb3JjZVxuICAgICAgPyBwZW5kaW5nLmhpdHNcbiAgICAgIDogcGVuZGluZy5oaXRzLmZpbHRlcihoaXQgPT4gdGhpcy5jb21iYXROb3cgPj0gaGl0LmR1ZUF0KTtcbiAgICBpZiAoZHVlSGl0cy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBkdWVFbmVteUlkcyA9IGR1ZUhpdHMubWFwKGhpdCA9PiBoaXQuZW5lbXlJZCk7XG4gICAgcGVuZGluZy5oaXRzID0gcGVuZGluZy5oaXRzLmZpbHRlcihoaXQgPT4gIWR1ZUVuZW15SWRzLmluY2x1ZGVzKGhpdC5lbmVteUlkKSk7XG4gICAgaWYgKHBlbmRpbmcuaGl0cy5sZW5ndGggPT09IDApIHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlID0gbnVsbDtcbiAgICBsZXQgaW1wYWN0ZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICBpZiAoZW5lbXkuZHlpbmcgfHwgIWR1ZUVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNvbHZlRW5lbXlEYW1hZ2Uoe1xuICAgICAgICBlbmVteSxcbiAgICAgICAgZWZmZWN0czogdGhpcy5lbmVteUV4aXRFZmZlY3RzLFxuICAgICAgICBkYW1hZ2U6IHBlbmRpbmcuZGFtYWdlLFxuICAgICAgICBpbXBhY3RNYWduaXR1ZGU6IHBlbmRpbmcuZGFtYWdlLFxuICAgICAgICBjb2xvcjogcGVuZGluZy5jb2xvcixcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdC5raWxsZWQpIHtcbiAgICAgICAgdGhpcy5raWxscysrO1xuICAgICAgICB0aGlzLnBsYXkocmVzdWx0LmRlZmluaXRpb24uZGVhdGhTb3VuZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbXBhY3RlZCkgdGhpcy5wbGF5KHBlbmRpbmcuaW1wYWN0U291bmRJZCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVuZW1pZXMoZGVsdGE6IG51bWJlciwgc2hpZWxkRGVmOiAodHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzKVtTaGllbGRJZF0gfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3Qgc2xvd0VuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgY29uc3QgcHggPSB0aGlzLnNxdWFkLng7XG4gICAgY29uc3QgcHkgPSB0aGlzLnBsYXllclkoKTtcbiAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICBlbmVteS5hY3Rvci5zZXRWZWxvY2l0eSgwLCAwKS51cGRhdGUoZGVsdGEpO1xuICAgICAgY29uc3QgZWZmZWN0aXZlID0gc2xvd0VuZW15SWRzLmhhcyhlbmVteS5pZClcbiAgICAgICAgPyBlbmVteS5zcGVlZE11bHRpcGxpZXIgKiAoc2hpZWxkRGVmPy5zbG93TXVsdGlwbGllciA/PyAxKVxuICAgICAgICA6IGVuZW15LnNwZWVkTXVsdGlwbGllcjtcbiAgICAgIGVuZW15LnkgKz0gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnNwZWVkICogZWZmZWN0aXZlICogdGhpcy5zY2FsZSgpICogZGVsdGEgLSBlbmVteS5hY3Rvci55ICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gMi41O1xuICAgICAgZW5lbXkuYWN0b3IubW92ZVRvKDAsIDApO1xuICAgICAgaWYgKGVuZW15LmR5aW5nICYmIGVuZW15LmFjdG9yLmRpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoZW5lbXkuZHlpbmcpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgJiYgc2hpZWxkRGVmKSB7XG4gICAgICAgIGNvbnN0IHNoaWVsZENvbnRhY3QgPSByZXNvbHZlU2hpZWxkQ29udGFjdCh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCwgc2hpZWxkRGVmLCBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICAgICAgcmFkaXVzOiB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgICAgICB9KSwgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgdGhpcy5zY2FsZSgpKTtcbiAgICAgICAgaWYgKHNoaWVsZENvbnRhY3QuYWJzb3JiZWQpIHtcbiAgICAgICAgICBpZiAoc2hpZWxkQ29udGFjdC5lbmVteURlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95RW5lbXkoZW5lbXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmVteS5hY3Rvci5pbXBhY3QoeyBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LCBtYWduaXR1ZGU6IHNoaWVsZENvbnRhY3QuZGFtYWdlQWJzb3JiZWQgLyB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkuaW1wYWN0UmVzaXN0YW5jZSB9KTtcbiAgICAgICAgICAgIHRoaXMucGxheShcIlNoaWVsZEltcGFjdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlPy5oaXRzLnNvbWUoaGl0ID0+IGhpdC5lbmVteUlkID09PSBlbmVteS5pZCkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBoaXRJbmRleCA9IHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCB0aGlzLnNjYWxlKCkpLmZpbmRJbmRleChwb2ludCA9PiBNYXRoLmh5cG90KHBvaW50LnggLSBlbmVteS54LCBwb2ludC55IC0gZW5lbXkueSkgPD0gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIDMuMik7XG4gICAgICBpZiAoaGl0SW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCB0aGlzLnNjYWxlKCkpW2hpdEluZGV4XTtcbiAgICAgICAgY29uc3QgYWN0b3IgPSB0aGlzLnBsYXllckFjdG9yc1toaXRJbmRleF0gPz8gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcbiAgICAgICAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IC41NTtcbiAgICAgICAgYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgICAgdGhpcy5leHBsb2RpbmdQbGF5ZXJzLnB1c2goeyBhY3RvciwgeDogcG9pbnQueCwgeTogcG9pbnQueSB9KTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBY3RvcnMuc3BsaWNlKGhpdEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zcXVhZC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICB0aGlzLnBsYXkoXCJQbGF5ZXJEYW1hZ2VcIik7XG4gICAgICAgIHRoaXMucGxheShcIlNxdWFkTWVtYmVyTG9zdFwiKTtcbiAgICAgICAgaWYgKHRoaXMuc3F1YWQuY291bnQgPT09IDEpIHRoaXMucGxheShcIkxvd0hlYWx0aFdhcm5pbmdcIik7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZ2FtZVwiICYmIHRoaXMuc3F1YWQuY291bnQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZWFzb24gPSBcIlRoZSBlbnRpcmUgc3F1YWQgd2FzIGRlc3Ryb3llZCBvbiBjb250YWN0LlwiO1xuICAgICAgICAgIHRoaXMuZmluaXNoKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmVteS55ID49IHRoaXMucGxheWVyWSgpKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZ2FtZVwiKSB7XG4gICAgICAgICAgdGhpcy5icmVhY2hlcysrO1xuICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgICB0aGlzLnBsYXkoXCJFbmVteUVzY2FwZWRcIik7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVhc29uID0gXCJBbiBlbmVteSBwYXNzZWQgdGhlIGRlZmVuc2UgbGluZS5cIjtcbiAgICAgICAgICB0aGlzLmZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmVteS55ID4gdGhpcy5jYW52YXMuaGVpZ2h0ICsgdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIDIpIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBpY2t1cHMoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLmd1blBpY2t1cHNdKSB7XG4gICAgICBwaWNrdXAuYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHRoaXMucGxheWVyWSgpIC0gMTUgKiB0aGlzLnNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRoaXMucGlja3VwR3JhbnRMZXZlbChcImd1blwiLCBwaWNrdXAuZ3VuSWQsIHBpY2t1cC5yZXF1ZXN0ZWRMZXZlbCk7XG4gICAgICAgIHRoaXMucmVjb3JkV2VhcG9uTGV2ZWwoXCJndW5cIiwgcGlja3VwLmd1bklkLCBsZXZlbCk7XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0geyBpZDogcGlja3VwLmd1bklkLCBsZXZlbCB9O1xuICAgICAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICAgICAgdGhpcy5ndW5Db29sZG93bnMgPSBbXTtcbiAgICAgICAgdGhpcy5ndW5QaWNrdXBzLnNwbGljZSh0aGlzLmd1blBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwR3VuXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJXZWFwb25SZWFkeVwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMuZ3VuUGlja3Vwcy5zcGxpY2UodGhpcy5ndW5QaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnRoaXMuc2hpZWxkUGlja3Vwc10pIHtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHRoaXMucGxheWVyWSgpIC0gMTUgKiB0aGlzLnNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSkge1xuICAgICAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1twaWNrdXAuc2hpZWxkSWRdO1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRoaXMucGlja3VwR3JhbnRMZXZlbChcInNoaWVsZFwiLCBwaWNrdXAuc2hpZWxkSWQsIHBpY2t1cC5yZXF1ZXN0ZWRMZXZlbCk7XG4gICAgICAgIHRoaXMucmVjb3JkV2VhcG9uTGV2ZWwoXCJzaGllbGRcIiwgcGlja3VwLnNoaWVsZElkLCBsZXZlbCk7XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbmV3IFNoaWVsZFN0YXRlKHBpY2t1cC5zaGllbGRJZCwgZGVmLm1heENoYXJnZXMsIGxldmVsKTtcbiAgICAgICAgdGhpcy5zaGllbGRQaWNrdXBzLnNwbGljZSh0aGlzLnNoaWVsZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwU2hpZWxkXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJTaGllbGRcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLnNoaWVsZFBpY2t1cHMuc3BsaWNlKHRoaXMuc2hpZWxkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLnN3b3JkUGlja3Vwc10pIHtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHRoaXMucGxheWVyWSgpIC0gMTUgKiB0aGlzLnNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRoaXMucGlja3VwR3JhbnRMZXZlbChcInN3b3JkXCIsIHBpY2t1cC5zd29yZElkLCBwaWNrdXAucmVxdWVzdGVkTGV2ZWwpO1xuICAgICAgICB0aGlzLnJlY29yZFdlYXBvbkxldmVsKFwic3dvcmRcIiwgcGlja3VwLnN3b3JkSWQsIGxldmVsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG5ldyBTd29yZFN0YXRlKHBpY2t1cC5zd29yZElkLCBsZXZlbCk7XG4gICAgICAgIHRoaXMuc3dvcmRQaWNrdXBzLnNwbGljZSh0aGlzLnN3b3JkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTd29yZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLnN3b3JkUGlja3Vwcy5zcGxpY2UodGhpcy5zd29yZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5tdWx0aXBsaWVyc10pIHtcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIHRoaXMuc3F1YWQuYWRkKG11bHRpcGxpZXJGYW1pbHkubWVtYmVyc1twaWNrdXAubXVsdGlwbGllcklkXS5zcXVhZEFkZGVkKTtcbiAgICAgICAgdGhpcy5zeW5jUGxheWVyQWN0b3JzKCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGllcnMuc3BsaWNlKHRoaXMubXVsdGlwbGllcnMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwTXVsdGlwbGllclwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMubXVsdGlwbGllcnMuc3BsaWNlKHRoaXMubXVsdGlwbGllcnMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmlzaCh3b246IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICBjb25zdCB0aXRsZSA9IHdvbiA/IFwiRkxBV0xFU1MgUlVOXCIgOiBcIlRSQUNLIEZBSUxFRFwiO1xuICAgIGNvbnN0IGRldGFpbCA9IHdvbiA/IFwiTm8gZW5lbXkgdG91Y2hlZCBvciBlc2NhcGVkIHBhc3QgeW91LlwiIDogdGhpcy5mYWlsdXJlUmVhc29uIHx8IGAke3RoaXMuYnJlYWNoZXN9IGVuZW15JHt0aGlzLmJyZWFjaGVzID09PSAxID8gXCJcIiA6IFwiaWVzXCJ9IGJyZWFjaGVkIHRoZSBkZWZlbnNlLmA7XG4gICAgaWYgKHdvbikge1xuICAgICAgdGhpcy52aWN0b3J5ID0gbmV3IE5lb25WaWN0b3J5RXhwZXJpZW5jZSh7XG4gICAgICAgIGNlbnRlclg6IHRoaXMuY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgY2VudGVyWTogdGhpcy5jYW52YXMuaGVpZ2h0ICogLjM4LFxuICAgICAgICB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBwYXJ0aWNsZUNvdW50OiAxMjAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheShcIlB1enpsZUNvbXBsZXRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoXCJHYW1lT3ZlclwiKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVUcmFjayA9IG51bGw7XG4gICAgdGhpcy5vbkZpbmlzaD8uKHsgd29uLCB0aXRsZSwgZGV0YWlsLCBicmVhY2hlczogdGhpcy5icmVhY2hlcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1BsYXllckFjdG9ycygpOiB2b2lkIHtcbiAgICB3aGlsZSAodGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoIDwgdGhpcy5zcXVhZC5jb3VudCkgdGhpcy5wbGF5ZXJBY3RvcnMucHVzaChuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pKTtcbiAgICBpZiAodGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoID4gdGhpcy5zcXVhZC5jb3VudCkgdGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoID0gdGhpcy5zcXVhZC5jb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgd2VhcG9uSHVkU2hhcGVzKG5vdzogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBoZWxpY29wdGVyVmlld3BvcnQ6IFJldHVyblR5cGU8dHlwZW9mIGhlbGljb3B0ZXJWaWV3cG9ydEZvcj4pOiBOZW9uVG9wRG93blNoYXBlW10ge1xuICAgIGNvbnN0IGl0ZW1zOiBOZW9uVG9wRG93blNoYXBlW10gPSBbXTtcbiAgICBjb25zdCBodWRTY2FsZSA9IHNjYWxlICogdGhpcy53ZWFwb25IdWRUdW5pbmcuaWNvblNjYWxlO1xuICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLndlYXBvbkh1ZFR1bmluZy5zcGFjaW5nICogc2NhbGU7XG4gICAgY29uc3QgZW50cmllczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyBraW5kOiBcImd1blwiIHwgXCJzaGllbGRcIiB8IFwic3dvcmRcIiB9PiA9IFtdO1xuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bikge1xuICAgICAgY29uc3QgZ3VuID0gZ3VuRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4uaWRdO1xuICAgICAgZW50cmllcy5wdXNoKHsgbGFiZWw6IGBMOiAke3RoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuLmxldmVsfWAsIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSwga2luZDogXCJndW5cIiB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkKSB7XG4gICAgICBjb25zdCBzaGllbGQgPSBzaGllbGRGYW1pbHkubWVtYmVyc1t0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZC5zaGllbGRJZF07XG4gICAgICBlbnRyaWVzLnB1c2goeyBsYWJlbDogYEw6ICR7dGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQubGV2ZWx9YCwgY29sb3I6IG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0sIGtpbmQ6IFwic2hpZWxkXCIgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkKSB7XG4gICAgICBjb25zdCBzd29yZCA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZC5zd29yZElkXTtcbiAgICAgIGVudHJpZXMucHVzaCh7IGxhYmVsOiBgTDogJHt0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkLmxldmVsfWAsIGNvbG9yOiBuZW9uUGFsZXR0ZVtzd29yZC5jb2xvcl0sIGtpbmQ6IFwic3dvcmRcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgcGxheWVyU2NyZWVuID0gcHJvamVjdEhlbGljb3B0ZXJQb2ludCh0aGlzLmxhbmVYKHRoaXMucGxheWVyTGFuZSksIHRoaXMucGxheWVyWSgpLCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpO1xuICAgIGNvbnN0IGNlbnRlclNjcmVlblggPSB0aGlzLndlYXBvbkh1ZFNjcmVlblggPz8gdGhpcy53ZWFwb25IdWRUYXJnZXRTY3JlZW5YKHRoaXMucGxheWVyTGFuZSk7XG4gICAgY29uc3Qgc3RhcnRTY3JlZW5YID0gY2VudGVyU2NyZWVuWCAtIChlbnRyaWVzLmxlbmd0aCAtIDEpICogc3BhY2luZyAvIDI7XG4gICAgY29uc3Qgc2NyZWVuWSA9IHBsYXllclNjcmVlbi55ICsgdGhpcy53ZWFwb25IdWRUdW5pbmcudmVydGljYWxPZmZzZXQgKiBzY2FsZTtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgZW50cnldIG9mIGVudHJpZXMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBzY3JlZW5YID0gc3RhcnRTY3JlZW5YICsgaW5kZXggKiBzcGFjaW5nO1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSB1bnByb2plY3RIZWxpY29wdGVyU2NyZWVuUG9pbnQoc2NyZWVuWCwgc2NyZWVuWSwgdGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KTtcbiAgICAgIGNvbnN0IGNvbW1vbiA9IHsgeCwgeSwgY29sb3I6IGVudHJ5LmNvbG9yLCBub3csIHNjYWxlOiBodWRTY2FsZSB9O1xuICAgICAgY29uc3Qgc2hhcGUgPSBlbnRyeS5raW5kID09PSBcInNoaWVsZFwiXG4gICAgICAgID8gc2hpZWxkUGlja3VwVmlzdWFsKGNvbW1vbilcbiAgICAgICAgOiBlbnRyeS5raW5kID09PSBcInN3b3JkXCJcbiAgICAgICAgICA/IHN3b3JkUGlja3VwVmlzdWFsKGNvbW1vbilcbiAgICAgICAgICA6IGFjdG9ySW5Ub3BEb3duU2NlbmUobmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmd1blBpY2t1cCB9KSwgeCwgeSwgdGhpcy53ZWFwb25IdWRUdW5pbmcuaWNvblNjYWxlICogMjAgKiBzY2FsZSk7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgLi4uc2hhcGUsXG4gICAgICAgIGNvbG9yOiBlbnRyeS5jb2xvcixcbiAgICAgICAgbGFiZWw6IHNoYXBlTGFiZWwoZW50cnkubGFiZWwsIFwiYmVsb3dcIiwgdGhpcy53ZWFwb25IdWRUdW5pbmcuZm9udFNpemUsIE1hdGgubWF4KDIsIHRoaXMud2VhcG9uSHVkVHVuaW5nLmZvbnRTaXplICogLjcpKSxcbiAgICAgICAgb3BhY2l0eTogLjY4LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHByaXZhdGUgcGlja3VwR3JhbnRMZXZlbChmYW1pbHk6IExldmVsV2VhcG9uRmFtaWx5LCBpZDogTGV2ZWxXZWFwb25JZCwgcmVxdWVzdGVkTGV2ZWw/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiByZXF1ZXN0ZWRMZXZlbCA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRoaXMubmV4dFdlYXBvblBpY2t1cExldmVsKGZhbWlseSwgaWQpXG4gICAgICA6IHRoaXMubm9ybWFsaXplV2VhcG9uTGV2ZWwoZmFtaWx5LCBpZCwgcmVxdWVzdGVkTGV2ZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0V2VhcG9uUGlja3VwTGV2ZWwoZmFtaWx5OiBMZXZlbFdlYXBvbkZhbWlseSwgaWQ6IExldmVsV2VhcG9uSWQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZVdlYXBvbkxldmVsKGZhbWlseSwgaWQsICh0aGlzLmNvbGxlY3RlZFdlYXBvbkxldmVscy5nZXQodGhpcy53ZWFwb25MZXZlbEtleShmYW1pbHksIGlkKSkgPz8gMCkgKyAxKTtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplV2VhcG9uTGV2ZWwoZmFtaWx5OiBMZXZlbFdlYXBvbkZhbWlseSwgaWQ6IExldmVsV2VhcG9uSWQsIGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlcXVlc3RlZCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IobGV2ZWwpKTtcbiAgICBpZiAoZmFtaWx5ID09PSBcImd1blwiKSB7XG4gICAgICBjb25zdCBsZXZlbHMgPSBndW5GYW1pbHkubWVtYmVyc1tpZCBhcyBHdW5JZF0ubGV2ZWxzLm1hcChpdGVtID0+IGl0ZW0ubGV2ZWwpO1xuICAgICAgY29uc3QgbWF4TGV2ZWwgPSBNYXRoLm1heCguLi5sZXZlbHMpO1xuICAgICAgY29uc3QgY2xhbXBlZCA9IE1hdGgubWluKG1heExldmVsLCByZXF1ZXN0ZWQpO1xuICAgICAgcmV0dXJuIGxldmVscy5pbmNsdWRlcyhjbGFtcGVkKSA/IGNsYW1wZWQgOiBsZXZlbHMucmVkdWNlKChiZXN0LCBjYW5kaWRhdGUpID0+XG4gICAgICAgIE1hdGguYWJzKGNhbmRpZGF0ZSAtIGNsYW1wZWQpIDwgTWF0aC5hYnMoYmVzdCAtIGNsYW1wZWQpID8gY2FuZGlkYXRlIDogYmVzdCwgbGV2ZWxzWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgubWluKDUsIHJlcXVlc3RlZCk7XG4gIH1cblxuICBwcml2YXRlIHJlY29yZFdlYXBvbkxldmVsKGZhbWlseTogTGV2ZWxXZWFwb25GYW1pbHksIGlkOiBMZXZlbFdlYXBvbklkLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy53ZWFwb25MZXZlbEtleShmYW1pbHksIGlkKTtcbiAgICB0aGlzLmNvbGxlY3RlZFdlYXBvbkxldmVscy5zZXQoa2V5LCBNYXRoLm1heCh0aGlzLmNvbGxlY3RlZFdlYXBvbkxldmVscy5nZXQoa2V5KSA/PyAwLCB0aGlzLm5vcm1hbGl6ZVdlYXBvbkxldmVsKGZhbWlseSwgaWQsIGxldmVsKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB3ZWFwb25MZXZlbEtleShmYW1pbHk6IExldmVsV2VhcG9uRmFtaWx5LCBpZDogTGV2ZWxXZWFwb25JZCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2ZhbWlseX0uJHtpZH1gO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVXZWFwb25IdWQoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldFggPSB0aGlzLndlYXBvbkh1ZFRhcmdldFNjcmVlblgodGhpcy5wbGF5ZXJMYW5lKTtcbiAgICBpZiAodGhpcy53ZWFwb25IdWRTY3JlZW5YID09PSBudWxsKSB7XG4gICAgICB0aGlzLndlYXBvbkh1ZFNjcmVlblggPSB0YXJnZXRYO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IDEgLSBNYXRoLnBvdyguMDAwNiwgZGVsdGEpO1xuICAgIHRoaXMud2VhcG9uSHVkU2NyZWVuWCArPSAodGFyZ2V0WCAtIHRoaXMud2VhcG9uSHVkU2NyZWVuWCkgKiByZXNwb25zZTtcbiAgfVxuXG4gIHByaXZhdGUgd2VhcG9uSHVkVGFyZ2V0U2NyZWVuWChsYW5lOiBMYW5lKTogbnVtYmVyIHtcbiAgICBjb25zdCBpbndhcmRCaWFzID0gdGhpcy5jYW52YXMud2lkdGggKiAuMTI7XG4gICAgcmV0dXJuIGxhbmUgPT09IDBcbiAgICAgID8gdGhpcy5jYW52YXMud2lkdGggKiAuMzIgKyBpbndhcmRCaWFzXG4gICAgICA6IHRoaXMuY2FudmFzLndpZHRoICogLjY4IC0gaW53YXJkQmlhcztcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlTY2VuZUJhY2tncm91bmQoKTogdm9pZCB7XG4gICAgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kKHRoaXMuc3RhZ2VFbGVtZW50LCB0aGlzLnRyYWNrU2NlbmVJZCwgdGhpcy5zY2VuZUJhY2tncm91bmRUdW5pbmcsIHRoaXMuc2NlbmVCYWNrZ3JvdW5kTGFuZU9mZnNldCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1NjZW5lQmFja2dyb3VuZFBsYWNlbWVudCgpOiB2b2lkIHtcbiAgICBzeW5jTGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFBsYWNlbWVudCh0aGlzLnN0YWdlRWxlbWVudCwgdGhpcy5zY2VuZUJhY2tncm91bmRUdW5pbmcsIHRoaXMuc2NlbmVCYWNrZ3JvdW5kTGFuZU9mZnNldCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2NlbmVCYWNrZ3JvdW5kTGFuZU9mZnNldCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGxlZnRYID0gdGhpcy5sYW5lWCgwKTtcbiAgICBjb25zdCByaWdodFggPSB0aGlzLmxhbmVYKDEpO1xuICAgIGNvbnN0IGxhbmVTcGFuID0gcmlnaHRYIC0gbGVmdFggfHwgMTtcbiAgICByZXR1cm4gKCh0aGlzLnNxdWFkLnggLSBsZWZ0WCkgLyBsYW5lU3BhbikgKiAyIC0gMTtcbiAgfVxuXG4gIHByaXZhdGUgZW5lbXlFeGl0Q29sb3IoZW5lbXk6IEVuZW15KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5lbXkuYWN0b3IuY29sb3IgPz8gZW5lbXkuYWN0b3Iuc2hhcGUuY29sb3I7XG4gIH1cblxuICBwcml2YXRlIGVuZW15RGVmaW5pdGlvbihlbmVteTogRW5lbXkpOiAodHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzKVtPcmJJZF0ge1xuICAgIHJldHVybiBvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUVuZW15KGVuZW15OiBFbmVteSk6IHZvaWQge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZlYXRFbmVteShlbmVteSwgdGhpcy5lbmVteUV4aXRFZmZlY3RzLCB0aGlzLmVuZW15RXhpdENvbG9yKGVuZW15KSk7XG4gICAgdGhpcy5raWxscysrO1xuICAgIHRoaXMucGxheShkZWZpbml0aW9uLmRlYXRoU291bmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlYKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmxhbmVYKGVudGl0eS5zaWRlID09PSBcImxlZnRcIiA/IDAgOiAxKSArIChlbnRpdHkubGFuZUluZGV4IC0gMiArIChlbnRpdHkuY29sdW1uU3BhbiAtIDEpIC8gMikgKiAxNSAqIHRoaXMuc2NhbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5U3BlZWQoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIChlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZChlbnRpdHkuaWQpPy5kZWZpbml0aW9uLnNwZWVkID8/IDcyKSAqIGVudGl0eS5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGVuZW15U3Bhd25ZKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBsYXllclkoKSAtIHRoaXMuZW50aXR5U3BlZWQoZW50aXR5KSAqIHRoaXMuc3Bhd25MZWFkU2Vjb25kcyhlbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwaWNrdXBTcGF3blkoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyWSgpIC0gdGhpcy5lbnRpdHlTcGVlZChlbnRpdHkpICogdGhpcy5zcGF3bkxlYWRTZWNvbmRzKGVudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduTGVhZFNlY29uZHMoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgY29uc3QgYXJyaXZhbFNlY29uZHMgPSB0aGlzLmVudGl0eUFycml2YWxTZWNvbmRzKGVudGl0eSk7XG4gICAgcmV0dXJuIE1hdGgubWluKG1heFRyYWNrU3Bhd25MZWFkU2Vjb25kcywgYXJyaXZhbFNlY29uZHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlBcnJpdmFsU2Vjb25kcyhlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gZmlyc3RUcmFja1Jvd0Fycml2YWxTZWNvbmRzICsgTWF0aC5tYXgoMCwgZW50aXR5LmRpc3RhbmNlRnJvbVBsYXllciAtIDEpICogdHJhY2tSb3dUcmF2ZWxTZWNvbmRzO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBhbHRlcm5hdGl2ZXMgPSBzb3VuZEFsdGVybmF0aXZlQ291bnRzW2lkXSA/PyAwO1xuICAgIGlmIChhbHRlcm5hdGl2ZXMgPiAwICYmIHRoaXMuc291bmQ/LnBsYXlSb3RhdGVkKSB0aGlzLnNvdW5kLnBsYXlSb3RhdGVkKGlkLCBhbHRlcm5hdGl2ZXMpO1xuICAgIGVsc2UgdGhpcy5zb3VuZD8ucGxheShpZCk7XG4gIH1cblxuICBwcml2YXRlIHBsYXlHdW5GaXJlKGd1bklkOiBHdW5JZCk6IHZvaWQge1xuICAgIHRoaXMucGxheShndW5GaXJlU291bmRJZHNbZ3VuSWRdKTtcbiAgfVxuXG4gIHByaXZhdGUgcGxheVBpY2t1cChpZDogXCJQaWNrdXBHdW5cIiB8IFwiUGlja3VwU2hpZWxkXCIgfCBcIlBpY2t1cFN3b3JkXCIgfCBcIlBpY2t1cE11bHRpcGxpZXJcIik6IHZvaWQge1xuICAgIHRoaXMucGxheShcIlBpY2t1cFwiKTtcbiAgICB0aGlzLnBsYXkoaWQpO1xuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IHRyYWNrTWVudVR1bmluZyA9IHtcbiAgbG9naWNhbFdpZHRoOiA0NTAsXG4gIHNhZmVUb3A6IDIwLFxuICBoZXJvSGVpZ2h0OiAxNjYsXG4gIGZhbWlseUdhcDogMTgsXG4gIGZhbWlseUhlaWdodDogMTY4LFxuICBmYW1pbHlQYWRkaW5nWDogMTgsXG4gIGZhbWlseVBhZGRpbmdZOiAxOCxcbiAgZmFtaWx5Q29ybmVyQ3V0OiAxMCxcbiAgdGl0bGVYOiAyMjUsXG4gIHRpdGxlWTogMjYsXG4gIHRyYWNrUm93WDogMTI2LFxuICB0cmFja1Jvd1k6IDk2LFxuICB0cmFja05vZGVTaXplOiA0MixcbiAgdHJhY2tOb2RlR2FwOiA1NyxcbiAgaGl0VGFyZ2V0U2l6ZTogNzIsXG4gIHBhbmVsTGluZVdpZHRoOiA3LjgsXG4gIHBhbmVsSW5uZXJMaW5lV2lkdGg6IDMuNixcbiAgY29ubmVjdG9yTGluZVdpZHRoOiAyLjQsXG4gIG5vZGVMaW5lV2lkdGg6IDEuMjYsXG4gIGlkbGVHbG93OiAwLjk1LFxuICBpZGxlRW5lcmd5OiAxLjA1LFxuICBob3Zlckdsb3c6IDEuNTUsXG4gIGhvdmVyRW5lcmd5OiAyLjIsXG4gIGxvY2tlZEdsb3c6IDAuMjgsXG4gIGxvY2tlZEVuZXJneTogMC4zNCxcbiAgd29iYmxlUGl4ZWxzOiAzLjIsXG4gIHdvYmJsZVNjYWxlOiAwLjA1NSxcbiAgd29iYmxlUm90YXRpb246IDAuMDg1LFxuICB3b2JibGVTcGVlZDogMS4yNSxcbiAgc2NhblNwZWVkOiAwLjMzLFxuICBzdGFyQ291bnQ6IDcwLFxuICBmb290ZXJQYWRkaW5nOiAzMixcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlEZWZpbml0aW9uLCBUcmFja0ZhbWlseUlkLCBUcmFja0ZhbWlseU1lbWJlciwgVHJhY2tJZCB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyB0cmFja01lbnVUdW5pbmcgYXMgdHVuZSB9IGZyb20gXCIuL3RyYWNrTWVudVR1bmluZ1wiO1xuXG50eXBlIFRyYWNrUm91dGUgPSAodHJhY2tJZDogVHJhY2tJZCkgPT4gc3RyaW5nO1xuXG5pbnRlcmZhY2UgVHJhY2tCdXR0b25Cb3VuZHMge1xuICB0cmFja0lkOiBUcmFja0lkO1xuICBmYW1pbHlMYWJlbDogc3RyaW5nO1xuICB0cmFja0xhYmVsOiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUcmFja0ZhbWlseVZpc3VhbCB7XG4gIGZhbWlseUlkOiBUcmFja0ZhbWlseUlkO1xuICBsYWJlbDogc3RyaW5nO1xuICBhY2NlbnQ6IHN0cmluZztcbiAgeTogbnVtYmVyO1xuICB1bmxvY2tlZDogYm9vbGVhbjtcbiAgdHJhY2tzOiBUcmFja1Zpc3VhbFtdO1xufVxuXG5pbnRlcmZhY2UgVHJhY2tWaXN1YWwge1xuICB0cmFja0lkOiBUcmFja0lkO1xuICBsYWJlbDogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdW5sb2NrZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGFjY2VudHMgPSBbXCIjZmYzYmQ1XCIsIFwiIzIwZWFmZlwiLCBcIiM5YjQyZmZcIiwgXCIjNGI4NmZmXCIsIFwiI2ZmYjIzYVwiLCBcIiM3MGZmZDBcIl0gYXMgY29uc3Q7XG5jb25zdCB0cmFja1NoYXBlSWRzID0gW1wiaHVudGVyLWV5ZVwiLCBcImJydWlzZXItcHJpc21cIiwgXCJlbGl0ZS1zdGFyXCIsIFwidHJpY2stdm9ydGV4XCIsIFwidGFuay1yZWFjdG9yXCIsIFwic3Bpa2UtbGFuY2VcIl0gYXMgY29uc3Q7XG5cbmNvbnN0IHJlcXVpcmVkU2hhcGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShpZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgTmVvbkZhY3Rvcnkgc2hhcGUgXCIke2lkfVwiIGlzIHJlcXVpcmVkIGJ5IHRoZSB0cmFjayBtZW51LmApO1xuICByZXR1cm4gc2hhcGU7XG59O1xuXG5mdW5jdGlvbiBsaW5lQmV0d2Vlbih4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBpbnRlbnNpdHk6IG51bWJlciwgZ2xvdzogbnVtYmVyKTogTmVvblByaW1pdGl2ZSB7XG4gIGNvbnN0IGR4ID0geDIgLSB4MTtcbiAgY29uc3QgZHkgPSB5MiAtIHkxO1xuICByZXR1cm4ge1xuICAgIHg6ICh4MSArIHgyKSAvIDIsXG4gICAgeTogKHkxICsgeTIpIC8gMixcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQ6IE1hdGguaHlwb3QoZHgsIGR5KSAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIGdsb3csXG4gICAgaW50ZW5zaXR5LFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gd29iYmxlKHNlZWQ6IG51bWJlciwgdGltZTogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgcm90YXRpb246IG51bWJlciB9IHtcbiAgY29uc3QgcGhhc2UgPSB0aW1lICogdHVuZS53b2JibGVTcGVlZCArIHNlZWQgKiAxLjczO1xuICByZXR1cm4ge1xuICAgIHg6IE1hdGguc2luKHBoYXNlKSAqIHR1bmUud29iYmxlUGl4ZWxzICsgTWF0aC5zaW4ocGhhc2UgKiAuNDMgKyBzZWVkKSAqIHR1bmUud29iYmxlUGl4ZWxzICogLjM1LFxuICAgIHk6IE1hdGguY29zKHBoYXNlICogLjg3KSAqIHR1bmUud29iYmxlUGl4ZWxzICogLjU1LFxuICAgIHNjYWxlOiAxICsgTWF0aC5zaW4ocGhhc2UgKiAuNzIgKyBzZWVkKSAqIHR1bmUud29iYmxlU2NhbGUsXG4gICAgcm90YXRpb246IE1hdGguc2luKHBoYXNlICogLjU4ICsgc2VlZCAqIC4zMSkgKiB0dW5lLndvYmJsZVJvdGF0aW9uLFxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tNZW51UmVuZGVyZXIge1xuICAjcmVuZGVyZXI6IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcjtcbiAgI2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICNidXR0b25MYXllcjogSFRNTEVsZW1lbnQ7XG4gICNsYWJlbExheWVyOiBIVE1MRWxlbWVudDtcbiAgI3RyYWNrRmFtaWx5OiBUcmFja0ZhbWlseURlZmluaXRpb247XG4gICNyb3V0ZTogVHJhY2tSb3V0ZTtcbiAgI2ZhbWlsaWVzOiBUcmFja0ZhbWlseVZpc3VhbFtdID0gW107XG4gICNjb250ZW50SGVpZ2h0ID0gODAwO1xuICAjaG92ZXJlZFRyYWNrSWQ6IFRyYWNrSWQgfCBudWxsID0gbnVsbDtcbiAgI2FuaW1hdGlvbkZyYW1lID0gMDtcbiAgI2xhc3RXaWR0aCA9IDA7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlcjogTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLFxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgYnV0dG9uTGF5ZXI6IEhUTUxFbGVtZW50LFxuICAgIGxhYmVsTGF5ZXI6IEhUTUxFbGVtZW50LFxuICAgIHRyYWNrRmFtaWx5OiBUcmFja0ZhbWlseURlZmluaXRpb24sXG4gICAgcm91dGU6IFRyYWNrUm91dGUsXG4gICkge1xuICAgIHRoaXMuI3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy4jY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuI2J1dHRvbkxheWVyID0gYnV0dG9uTGF5ZXI7XG4gICAgdGhpcy4jbGFiZWxMYXllciA9IGxhYmVsTGF5ZXI7XG4gICAgdGhpcy4jdHJhY2tGYW1pbHkgPSB0cmFja0ZhbWlseTtcbiAgICB0aGlzLiNyb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMuI2ZhbWlsaWVzID0gdGhpcy4jY3JlYXRlTGF5b3V0KCk7XG4gICAgdGhpcy4jY29udGVudEhlaWdodCA9IHRoaXMuI21lYXN1cmVDb250ZW50SGVpZ2h0KCk7XG4gICAgdGhpcy4jc3luY0Nzc1NpemUoKTtcbiAgICB0aGlzLiNzeW5jSW50ZXJhY3Rpb25MYXllcigpO1xuICAgIHRoaXMuI3N5bmNMYWJlbHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUob3B0aW9uczoge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgYnV0dG9uTGF5ZXI6IEhUTUxFbGVtZW50O1xuICAgIGxhYmVsTGF5ZXI6IEhUTUxFbGVtZW50O1xuICAgIHRyYWNrRmFtaWx5OiBUcmFja0ZhbWlseURlZmluaXRpb247XG4gICAgcm91dGU6IFRyYWNrUm91dGU7XG4gIH0pOiBQcm9taXNlPFRyYWNrTWVudVJlbmRlcmVyPiB7XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IFRyYWNrTWVudVJlbmRlcmVyLm1lYXN1cmVUcmFja0ZhbWlseShvcHRpb25zLnRyYWNrRmFtaWx5KTtcbiAgICBjb25zdCByZW5kZXJlciA9IGF3YWl0IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlci5jcmVhdGUob3B0aW9ucy5jYW52YXMsIHR1bmUubG9naWNhbFdpZHRoLCBjb250ZW50SGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IFRyYWNrTWVudVJlbmRlcmVyKHJlbmRlcmVyLCBvcHRpb25zLmNhbnZhcywgb3B0aW9ucy5idXR0b25MYXllciwgb3B0aW9ucy5sYWJlbExheWVyLCBvcHRpb25zLnRyYWNrRmFtaWx5LCBvcHRpb25zLnJvdXRlKTtcbiAgfVxuXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHRpY2sgPSAodGltZU1zOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuI3N5bmNDc3NTaXplKCk7XG4gICAgICB0aGlzLiNyZW5kZXJlci5yZW5kZXIodGhpcy4jYnVpbGRTY2VuZSh0aW1lTXMgLyAxMDAwKSwgdGltZU1zIC8gMTAwMCk7XG4gICAgICB0aGlzLiNhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICB9O1xuICAgIHRoaXMuI2FuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLiNhbmltYXRpb25GcmFtZSk7XG4gICAgdGhpcy4jcmVuZGVyZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgc3RhdGljIG1lYXN1cmVUcmFja0ZhbWlseSh0cmFja0ZhbWlseTogVHJhY2tGYW1pbHlEZWZpbml0aW9uKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHVuZS5oZXJvSGVpZ2h0XG4gICAgICArIE9iamVjdC5rZXlzKHRyYWNrRmFtaWx5LmZhbWlsaWVzKS5sZW5ndGggKiB0dW5lLmZhbWlseUhlaWdodFxuICAgICAgKyBNYXRoLm1heCgwLCBPYmplY3Qua2V5cyh0cmFja0ZhbWlseS5mYW1pbGllcykubGVuZ3RoIC0gMSkgKiB0dW5lLmZhbWlseUdhcFxuICAgICAgKyB0dW5lLmZvb3RlclBhZGRpbmc7XG4gIH1cblxuICAjbWVhc3VyZUNvbnRlbnRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gVHJhY2tNZW51UmVuZGVyZXIubWVhc3VyZVRyYWNrRmFtaWx5KHRoaXMuI3RyYWNrRmFtaWx5KTtcbiAgfVxuXG4gICNjcmVhdGVMYXlvdXQoKTogVHJhY2tGYW1pbHlWaXN1YWxbXSB7XG4gICAgcmV0dXJuIChPYmplY3QuZW50cmllcyh0aGlzLiN0cmFja0ZhbWlseS5mYW1pbGllcykgYXMgW1RyYWNrRmFtaWx5SWQsIFRyYWNrRmFtaWx5TWVtYmVyPFRyYWNrSWQ+XVtdKVxuICAgICAgLm1hcCgoW2ZhbWlseUlkLCBmYW1pbHldLCBmYW1pbHlJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB5ID0gdHVuZS5oZXJvSGVpZ2h0ICsgZmFtaWx5SW5kZXggKiAodHVuZS5mYW1pbHlIZWlnaHQgKyB0dW5lLmZhbWlseUdhcCk7XG4gICAgICAgIGNvbnN0IGFjY2VudCA9IGFjY2VudHNbZmFtaWx5SW5kZXggJSBhY2NlbnRzLmxlbmd0aF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmFtaWx5SWQsXG4gICAgICAgICAgbGFiZWw6IGZhbWlseS5sYWJlbCxcbiAgICAgICAgICBhY2NlbnQsXG4gICAgICAgICAgeSxcbiAgICAgICAgICB1bmxvY2tlZDogdHJ1ZSxcbiAgICAgICAgICB0cmFja3M6IGZhbWlseS50cmFja0lkcy5tYXAoKHRyYWNrSWQsIHRyYWNrSW5kZXgpID0+ICh7XG4gICAgICAgICAgICB0cmFja0lkLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuI3RyYWNrRmFtaWx5Lm1lbWJlcnNbdHJhY2tJZF0ubGFiZWwsXG4gICAgICAgICAgICBpbmRleDogdHJhY2tJbmRleCxcbiAgICAgICAgICAgIHg6IHR1bmUudHJhY2tSb3dYICsgdHJhY2tJbmRleCAqICh0dW5lLnRyYWNrTm9kZVNpemUgKyB0dW5lLnRyYWNrTm9kZUdhcCksXG4gICAgICAgICAgICB5OiB5ICsgdHVuZS50cmFja1Jvd1ksXG4gICAgICAgICAgICB1bmxvY2tlZDogdHJ1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfVxuXG4gICNzeW5jQ3NzU2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjc3NXaWR0aCA9IHRoaXMuI2NhbnZhcy5wYXJlbnRFbGVtZW50Py5jbGllbnRXaWR0aCA/PyB0aGlzLiNjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgaWYgKGNzc1dpZHRoID09PSB0aGlzLiNsYXN0V2lkdGgpIHJldHVybjtcbiAgICB0aGlzLiNsYXN0V2lkdGggPSBjc3NXaWR0aDtcbiAgICBjb25zdCBjc3NIZWlnaHQgPSB0aGlzLiNjb250ZW50SGVpZ2h0IC8gdHVuZS5sb2dpY2FsV2lkdGggKiBjc3NXaWR0aDtcbiAgICB0aGlzLiNjYW52YXMuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICB0aGlzLiNjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7Y3NzSGVpZ2h0fXB4YDtcbiAgICB0aGlzLiNidXR0b25MYXllci5zdHlsZS5oZWlnaHQgPSBgJHtjc3NIZWlnaHR9cHhgO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7Y3NzSGVpZ2h0fXB4YDtcbiAgfVxuXG4gICNsb2dpY2FsVG9Dc3ModmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdHVuZS5sb2dpY2FsV2lkdGggKiAxMDB9JWA7XG4gIH1cblxuICAjc3luY0ludGVyYWN0aW9uTGF5ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy4jZmFtaWxpZXMuZmxhdE1hcChmYW1pbHkgPT4gZmFtaWx5LnRyYWNrcy5tYXAodHJhY2sgPT4gKHtcbiAgICAgIHRyYWNrSWQ6IHRyYWNrLnRyYWNrSWQsXG4gICAgICBmYW1pbHlMYWJlbDogZmFtaWx5LmxhYmVsLFxuICAgICAgdHJhY2tMYWJlbDogdHJhY2subGFiZWwsXG4gICAgICB4OiB0cmFjay54LFxuICAgICAgeTogdHJhY2sueSxcbiAgICAgIHNpemU6IHR1bmUuaGl0VGFyZ2V0U2l6ZSxcbiAgICB9IHNhdGlzZmllcyBUcmFja0J1dHRvbkJvdW5kcykpKTtcblxuICAgIHRoaXMuI2J1dHRvbkxheWVyLnJlcGxhY2VDaGlsZHJlbiguLi5ib3VuZHMubWFwKGJvdW5kID0+IHtcbiAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9IFwidHJhY2stbWVudS1oaXRcIjtcbiAgICAgIGFuY2hvci5ocmVmID0gdGhpcy4jcm91dGUoYm91bmQudHJhY2tJZCk7XG4gICAgICBhbmNob3IuZGF0YXNldC50cmFjayA9IGJvdW5kLnRyYWNrSWQ7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBgJHtib3VuZC5mYW1pbHlMYWJlbH0sICR7Ym91bmQudHJhY2tMYWJlbH1gKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oYW5jaG9yLnN0eWxlLCB7XG4gICAgICAgIGxlZnQ6IHRoaXMuI2xvZ2ljYWxUb0Nzcyhib3VuZC54IC0gYm91bmQuc2l6ZSAvIDIpLFxuICAgICAgICB0b3A6IGAkeyhib3VuZC55IC0gYm91bmQuc2l6ZSAvIDIpIC8gdGhpcy4jY29udGVudEhlaWdodCAqIDEwMH0lYCxcbiAgICAgICAgd2lkdGg6IHRoaXMuI2xvZ2ljYWxUb0Nzcyhib3VuZC5zaXplKSxcbiAgICAgICAgaGVpZ2h0OiBgJHtib3VuZC5zaXplIC8gdGhpcy4jY29udGVudEhlaWdodCAqIDEwMH0lYCxcbiAgICAgIH0pO1xuICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZW50ZXJcIiwgKCkgPT4geyB0aGlzLiNob3ZlcmVkVHJhY2tJZCA9IGJvdW5kLnRyYWNrSWQ7IH0pO1xuICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybGVhdmVcIiwgKCkgPT4geyBpZiAodGhpcy4jaG92ZXJlZFRyYWNrSWQgPT09IGJvdW5kLnRyYWNrSWQpIHRoaXMuI2hvdmVyZWRUcmFja0lkID0gbnVsbDsgfSk7XG4gICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHsgdGhpcy4jaG92ZXJlZFRyYWNrSWQgPSBib3VuZC50cmFja0lkOyB9KTtcbiAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7IGlmICh0aGlzLiNob3ZlcmVkVHJhY2tJZCA9PT0gYm91bmQudHJhY2tJZCkgdGhpcy4jaG92ZXJlZFRyYWNrSWQgPSBudWxsOyB9KTtcbiAgICAgIHJldHVybiBhbmNob3I7XG4gICAgfSkpO1xuICB9XG5cbiAgI3N5bmNMYWJlbHMoKTogdm9pZCB7XG4gICAgY29uc3QgbGFiZWxzOiBIVE1MRWxlbWVudFtdID0gW107XG4gICAgdGhpcy4jZmFtaWxpZXMuZm9yRWFjaChmYW1pbHkgPT4ge1xuICAgICAgY29uc3QgZmFtaWx5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgIGZhbWlseUxhYmVsLmNsYXNzTmFtZSA9IFwidHJhY2stbWVudS1mYW1pbHktbGFiZWxcIjtcbiAgICAgIGZhbWlseUxhYmVsLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgIGZhbWlseUxhYmVsLmlubmVySFRNTCA9IGA8aDI+JHtmYW1pbHkubGFiZWx9PC9oMj5gO1xuICAgICAgT2JqZWN0LmFzc2lnbihmYW1pbHlMYWJlbC5zdHlsZSwge1xuICAgICAgICBsZWZ0OiB0aGlzLiNsb2dpY2FsVG9Dc3ModHVuZS50aXRsZVgpLFxuICAgICAgICB0b3A6IGAkeyhmYW1pbHkueSArIHR1bmUudGl0bGVZKSAvIHRoaXMuI2NvbnRlbnRIZWlnaHQgKiAxMDB9JWAsXG4gICAgICB9KTtcbiAgICAgIGxhYmVscy5wdXNoKGZhbWlseUxhYmVsKTtcblxuICAgICAgZmFtaWx5LnRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgICAgY29uc3QgdHJhY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyYWNrTGFiZWwuY2xhc3NOYW1lID0gXCJ0cmFjay1tZW51LXRyYWNrLWxhYmVsXCI7XG4gICAgICAgIHRyYWNrTGFiZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICB0cmFja0xhYmVsLmlubmVySFRNTCA9IGA8c3Ryb25nPiR7dHJhY2subGFiZWx9PC9zdHJvbmc+YDtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0cmFja0xhYmVsLnN0eWxlLCB7XG4gICAgICAgICAgbGVmdDogdGhpcy4jbG9naWNhbFRvQ3NzKHRyYWNrLnggLSA0MyksXG4gICAgICAgICAgdG9wOiBgJHsodHJhY2sueSArIDM1KSAvIHRoaXMuI2NvbnRlbnRIZWlnaHQgKiAxMDB9JWAsXG4gICAgICAgICAgd2lkdGg6IHRoaXMuI2xvZ2ljYWxUb0Nzcyg4NiksXG4gICAgICAgIH0pO1xuICAgICAgICBsYWJlbHMucHVzaCh0cmFja0xhYmVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIucmVwbGFjZUNoaWxkcmVuKC4uLmxhYmVscyk7XG4gIH1cblxuICAjYnVpbGRTY2VuZSh0aW1lOiBudW1iZXIpOiB7IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXTsgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW10gfSB7XG4gICAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gICAgY29uc3Qgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW10gPSBbXTtcbiAgICB0aGlzLiNhZGRCYWNrZ3JvdW5kKHByaW1pdGl2ZXMsIHRpbWUpO1xuICAgIHRoaXMuI2ZhbWlsaWVzLmZvckVhY2goKGZhbWlseSwgZmFtaWx5SW5kZXgpID0+IHRoaXMuI2FkZEZhbWlseShmYW1pbHksIGZhbWlseUluZGV4LCBwcmltaXRpdmVzLCBzaGFwZXMsIHRpbWUpKTtcbiAgICByZXR1cm4geyBwcmltaXRpdmVzLCBzaGFwZXMgfTtcbiAgfVxuXG4gICNhZGRCYWNrZ3JvdW5kKHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSwgdGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0dW5lLnN0YXJDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gKE1hdGguc2luKGkgKiA5MS43KSAqIDQzNzU4LjU0ICUgMSArIDEpICUgMSAqIHR1bmUubG9naWNhbFdpZHRoO1xuICAgICAgY29uc3QgeSA9IChNYXRoLnNpbihpICogMzcuMSArIDQuMikgKiAxODQzMy4xNyAlIDEgKyAxKSAlIDEgKiB0aGlzLiNjb250ZW50SGVpZ2h0O1xuICAgICAgY29uc3QgcHVsc2UgPSAuNyArIE1hdGguc2luKHRpbWUgKiAoMS4xICsgaSAlIDUgKiAuMTMpICsgaSkgKiAuMztcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHgsIHksXG4gICAgICAgIHdpZHRoOiAuOCArIGkgJSAzICogLjM1LFxuICAgICAgICBoZWlnaHQ6IC44ICsgaSAlIDMgKiAuMzUsXG4gICAgICAgIGNvbG9yOiBpICUgNCA9PT0gMCA/IFwiIzIwZWFmZlwiIDogaSAlIDcgPT09IDAgPyBcIiNmZjNiZDVcIiA6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGdsb3c6IC43LFxuICAgICAgICBpbnRlbnNpdHk6IC4zNSAqIHB1bHNlLFxuICAgICAgICBzaGFwZTogXCJjaXJjbGVcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBncmlkWSA9IE1hdGgubWluKHRoaXMuI2NvbnRlbnRIZWlnaHQgLSAxMTAsIDMzMCArIE1hdGguc2luKHRpbWUgKiAuMjcpICogNik7XG4gICAgZm9yIChsZXQgeCA9IC0zMDsgeCA8PSB0dW5lLmxvZ2ljYWxXaWR0aCArIDMwOyB4ICs9IDQyKSB7XG4gICAgICBwcmltaXRpdmVzLnB1c2gobGluZUJldHdlZW4oeCwgZ3JpZFksIHggKyA0OCwgdGhpcy4jY29udGVudEhlaWdodCArIDQwLCAuOSwgXCIjMjBlYWZmXCIsIC4xMywgLjQpKTtcbiAgICB9XG4gICAgZm9yIChsZXQgeSA9IGdyaWRZOyB5IDw9IHRoaXMuI2NvbnRlbnRIZWlnaHQgKyAzMDsgeSArPSA0Mikge1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKGxpbmVCZXR3ZWVuKC0yMCwgeSwgdHVuZS5sb2dpY2FsV2lkdGggKyAyMCwgeSArIDE4LCAuOCwgXCIjOWI0MmZmXCIsIC4xMiwgLjM1KSk7XG4gICAgfVxuICB9XG5cbiAgI2FkZEZhbWlseShmYW1pbHk6IFRyYWNrRmFtaWx5VmlzdWFsLCBmYW1pbHlJbmRleDogbnVtYmVyLCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10sIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdLCB0aW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB4ID0gdHVuZS5mYW1pbHlQYWRkaW5nWDtcbiAgICBjb25zdCB5ID0gZmFtaWx5Lnk7XG4gICAgY29uc3Qgd2lkdGggPSB0dW5lLmxvZ2ljYWxXaWR0aCAtIHR1bmUuZmFtaWx5UGFkZGluZ1ggKiAyO1xuICAgIGNvbnN0IGhlaWdodCA9IHR1bmUuZmFtaWx5SGVpZ2h0O1xuICAgIGNvbnN0IGN1dCA9IHR1bmUuZmFtaWx5Q29ybmVyQ3V0O1xuICAgIGNvbnN0IGZhbWlseUhvdmVyZWQgPSBmYW1pbHkudHJhY2tzLnNvbWUodHJhY2sgPT4gdHJhY2sudHJhY2tJZCA9PT0gdGhpcy4jaG92ZXJlZFRyYWNrSWQpO1xuICAgIGNvbnN0IGludGVuc2l0eSA9IGZhbWlseS51bmxvY2tlZCA/IChmYW1pbHlIb3ZlcmVkID8gdHVuZS5ob3ZlckVuZXJneSA6IHR1bmUuaWRsZUVuZXJneSkgOiB0dW5lLmxvY2tlZEVuZXJneTtcbiAgICBjb25zdCBnbG93ID0gZmFtaWx5LnVubG9ja2VkID8gKGZhbWlseUhvdmVyZWQgPyB0dW5lLmhvdmVyR2xvdyA6IHR1bmUuaWRsZUdsb3cpIDogdHVuZS5sb2NrZWRHbG93O1xuICAgIGNvbnN0IGNvcm5lck92ZXJsYXAgPSB0dW5lLnBhbmVsTGluZVdpZHRoICogLjQyO1xuICAgIGNvbnN0IHBhbmVsUG9pbnRzOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXG4gICAgICBbeCArIGN1dCAtIGNvcm5lck92ZXJsYXAsIHldLCBbeCArIHdpZHRoIC0gY3V0ICsgY29ybmVyT3ZlcmxhcCwgeV0sIFt4ICsgd2lkdGggKyBjb3JuZXJPdmVybGFwLCB5ICsgY3V0IC0gY29ybmVyT3ZlcmxhcF0sXG4gICAgICBbeCArIHdpZHRoICsgY29ybmVyT3ZlcmxhcCwgeSArIGhlaWdodCAtIGN1dCArIGNvcm5lck92ZXJsYXBdLCBbeCArIHdpZHRoIC0gY3V0ICsgY29ybmVyT3ZlcmxhcCwgeSArIGhlaWdodF0sXG4gICAgICBbeCArIGN1dCAtIGNvcm5lck92ZXJsYXAsIHkgKyBoZWlnaHRdLCBbeCAtIGNvcm5lck92ZXJsYXAsIHkgKyBoZWlnaHQgLSBjdXQgKyBjb3JuZXJPdmVybGFwXSwgW3ggLSBjb3JuZXJPdmVybGFwLCB5ICsgY3V0IC0gY29ybmVyT3ZlcmxhcF0sXG4gICAgXTtcbiAgICBwYW5lbFBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG5leHQgPSBwYW5lbFBvaW50c1soaW5kZXggKyAxKSAlIHBhbmVsUG9pbnRzLmxlbmd0aF07XG4gICAgICBwcmltaXRpdmVzLnB1c2gobGluZUJldHdlZW4ocG9pbnRbMF0sIHBvaW50WzFdLCBuZXh0WzBdLCBuZXh0WzFdLCB0dW5lLnBhbmVsTGluZVdpZHRoLCBmYW1pbHkuYWNjZW50LCBpbnRlbnNpdHksIGdsb3cpKTtcbiAgICB9KTtcbiAgICBjb25zdCBpbm5lckluc2V0ID0gNjtcbiAgICBjb25zdCBpbm5lclBvaW50cyA9IHBhbmVsUG9pbnRzLm1hcCgoW3B4LCBweV0pID0+IFtcbiAgICAgIHB4IDwgeCArIHdpZHRoIC8gMiA/IHB4ICsgaW5uZXJJbnNldCA6IHB4IC0gaW5uZXJJbnNldCxcbiAgICAgIHB5IDwgeSArIGhlaWdodCAvIDIgPyBweSArIGlubmVySW5zZXQgOiBweSAtIGlubmVySW5zZXQsXG4gICAgXSBhcyBbbnVtYmVyLCBudW1iZXJdKTtcbiAgICBpbm5lclBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG5leHQgPSBpbm5lclBvaW50c1soaW5kZXggKyAxKSAlIGlubmVyUG9pbnRzLmxlbmd0aF07XG4gICAgICBwcmltaXRpdmVzLnB1c2gobGluZUJldHdlZW4ocG9pbnRbMF0sIHBvaW50WzFdLCBuZXh0WzBdLCBuZXh0WzFdLCB0dW5lLnBhbmVsSW5uZXJMaW5lV2lkdGgsIGZhbWlseS5hY2NlbnQsIGludGVuc2l0eSAqIC40OCwgZ2xvdyAqIC43KSk7XG4gICAgfSk7XG4gICAgY29uc3Qgc2NhbiA9ICgodGltZSAqIHR1bmUuc2NhblNwZWVkICsgZmFtaWx5SW5kZXggKiAuMjMpICUgMSkgKiAod2lkdGggKyAxMjApIC0gNjA7XG4gICAgcHJpbWl0aXZlcy5wdXNoKGxpbmVCZXR3ZWVuKHggKyBzY2FuIC0gMjYsIHkgKyA4LCB4ICsgc2NhbiArIDE2LCB5ICsgaGVpZ2h0IC0gOCwgMi44LCBmYW1pbHkuYWNjZW50LCAuNDIsIC41NSkpO1xuXG4gICAgY29uc3QgZmlyc3QgPSBmYW1pbHkudHJhY2tzWzBdO1xuICAgIGNvbnN0IGxhc3QgPSBmYW1pbHkudHJhY2tzW2ZhbWlseS50cmFja3MubGVuZ3RoIC0gMV07XG4gICAgaWYgKGZpcnN0ICYmIGxhc3QpIHtcbiAgICAgIHByaW1pdGl2ZXMucHVzaChsaW5lQmV0d2VlbihmaXJzdC54LCBmaXJzdC55LCBsYXN0LngsIGxhc3QueSwgdHVuZS5jb25uZWN0b3JMaW5lV2lkdGgsIGZhbWlseS5hY2NlbnQsIGludGVuc2l0eSAqIC44MiwgZ2xvdykpO1xuICAgIH1cbiAgICBmYW1pbHkudHJhY2tzLmZvckVhY2godHJhY2sgPT4gdGhpcy4jYWRkVHJhY2tOb2RlKGZhbWlseSwgdHJhY2ssIHByaW1pdGl2ZXMsIHNoYXBlcywgdGltZSkpO1xuICB9XG5cbiAgI2FkZFRyYWNrTm9kZShmYW1pbHk6IFRyYWNrRmFtaWx5VmlzdWFsLCB0cmFjazogVHJhY2tWaXN1YWwsIHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSwgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW10sIHRpbWU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGhvdmVyZWQgPSB0aGlzLiNob3ZlcmVkVHJhY2tJZCA9PT0gdHJhY2sudHJhY2tJZDtcbiAgICBjb25zdCB0cmFja0hvdmVyRW5lcmd5ID0gdHVuZS5pZGxlRW5lcmd5O1xuICAgIGNvbnN0IHRyYWNrSG92ZXJHbG93ID0gdHVuZS5pZGxlR2xvdztcbiAgICBjb25zdCBlbmVyZ3kgPSB0cmFjay51bmxvY2tlZCA/IChob3ZlcmVkID8gdHJhY2tIb3ZlckVuZXJneSA6IHRyYWNrSG92ZXJFbmVyZ3kgKiAuNCkgOiB0dW5lLmxvY2tlZEVuZXJneTtcbiAgICBjb25zdCBnbG93ID0gdHJhY2sudW5sb2NrZWQgPyAoaG92ZXJlZCA/IHRyYWNrSG92ZXJHbG93IDogdHJhY2tIb3Zlckdsb3cgKiAuNCkgOiB0dW5lLmxvY2tlZEdsb3c7XG4gICAgY29uc3Qgd29iID0gd29iYmxlKHRyYWNrLmluZGV4ICsgZmFtaWx5LnkgKiAuMDExLCB0aW1lKTtcbiAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgeDogdHJhY2sueCArIHdvYi54LFxuICAgICAgeTogdHJhY2sueSArIHdvYi55LFxuICAgICAgd2lkdGg6IHR1bmUudHJhY2tOb2RlU2l6ZSAqIC42NiAqIHdvYi5zY2FsZSxcbiAgICAgIGhlaWdodDogdHVuZS50cmFja05vZGVTaXplICogLjY2ICogd29iLnNjYWxlLFxuICAgICAgY29sb3I6IHRyYWNrLnVubG9ja2VkID8gZmFtaWx5LmFjY2VudCA6IFwiIzhkOTZhYVwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgZ2xvdyxcbiAgICAgIGludGVuc2l0eTogZW5lcmd5ICogLjY2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgICAgcm90YXRpb246IE1hdGguUEkgLyA0ICsgd29iLnJvdGF0aW9uLFxuICAgIH0pO1xuICAgIHNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKHRyYWNrU2hhcGVJZHNbKHRyYWNrLmluZGV4ICsgdGhpcy4jZmFtaWxpZXMuaW5kZXhPZihmYW1pbHkpKSAlIHRyYWNrU2hhcGVJZHMubGVuZ3RoXSksXG4gICAgICB4OiB0cmFjay54ICsgd29iLngsXG4gICAgICB5OiB0cmFjay55ICsgd29iLnksXG4gICAgICBzaXplOiB0dW5lLnRyYWNrTm9kZVNpemUgKiAuNzIgKiB3b2Iuc2NhbGUsXG4gICAgICBjb2xvcjogdHJhY2sudW5sb2NrZWQgPyBmYW1pbHkuYWNjZW50IDogXCIjOGQ5NmFhXCIsXG4gICAgICByb3RhdGlvblo6IHdvYi5yb3RhdGlvbiArIHRpbWUgKiAuMTYsXG4gICAgICBsaW5lVGhpY2tuZXNzOiB0dW5lLm5vZGVMaW5lV2lkdGgsXG4gICAgICBnbG93LFxuICAgICAgZW5lcmd5SW50ZW5zaXR5OiBlbmVyZ3ksXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogaG92ZXJlZCA/IC43NiA6IC40OCxcbiAgICAgIGVuZXJneVNwZWVkOiBob3ZlcmVkID8gMS45IDogMS4yLFxuICAgICAgZW5lcmd5QmxlZWQ6IGhvdmVyZWQgPyAuODIgOiAuNTIsXG4gICAgICBvcGFjaXR5OiB0cmFjay51bmxvY2tlZCA/IDEgOiAuNSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHRleHQ6IFN0cmluZyh0cmFjay5pbmRleCArIDEpLFxuICAgICAgICBwb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICBmb250V2VpZ2h0OiA5MDAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdHJhY2tGYW1pbHksIHR5cGUgVHJhY2tGYW1pbHlJZCwgdHlwZSBUcmFja0lkIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcbmltcG9ydCB7IGJpbmRTcXVhZElucHV0IH0gZnJvbSBcIi4vaW5wdXRcIjtcbmltcG9ydCB7IE5lb25Td2FybVNpbXVsYXRpb24gfSBmcm9tIFwiLi9zaW11bGF0aW9uL05lb25Td2FybVNpbXVsYXRpb25cIjtcbmltcG9ydCB7IFRyYWNrTWVudVJlbmRlcmVyIH0gZnJvbSBcIi4vdHJhY2tNZW51UmVuZGVyZXJcIjtcbmltcG9ydCB7IGFwcGx5UG9ydHJhaXRTdGFnZSwgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgbGFuZVJ1bm5lclZpZXdwb3J0LCB0eXBlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KFwiI2dhbWUtY2FudmFzXCIpITtcbmNvbnN0IHRyYWNrTWVudUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KFwiI3RyYWNrLW1lbnUtY2FudmFzXCIpITtcbmNvbnN0IHRyYWNrU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjdHJhY2stc2VsZWN0XCIpITtcbmNvbnN0IHRyYWNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3RyYWNrLWxpc3RcIikhO1xuY29uc3QgdHJhY2tNZW51TGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjdHJhY2stbWVudS1sYWJlbHNcIikhO1xuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjc3RhdHVzXCIpITtcbmNvbnN0IHJ1blN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3J1bi1zdGF0dXNcIikhO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjcmVzdWx0XCIpITtcbmNvbnN0IHJlc3VsdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjcmVzdWx0LXRpdGxlXCIpITtcbmNvbnN0IHJlc3VsdERldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdC1kZXRhaWxcIikhO1xuY29uc3Qgc3RhcnREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzdGFydC1kaWFsb2dcIikhO1xuY29uc3Qgc3RhcnREaWFsb2dGYW1pbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzdGFydC1kaWFsb2ctZmFtaWx5XCIpITtcbmNvbnN0IHN0YXJ0RGlhbG9nVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzdGFydC1kaWFsb2ctdGl0bGVcIikhO1xuY29uc3Qgc3RhcnREaWFsb2dEZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzdGFydC1kaWFsb2ctZGV0YWlsXCIpITtcbmNvbnN0IGNvbmZpcm1UcmFja1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjY29uZmlybS10cmFjay1zdGFydFwiKSE7XG5jb25zdCBjYW5jZWxUcmFja1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjY2FuY2VsLXRyYWNrLXN0YXJ0XCIpITtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZXJyb3JcIikhO1xuY29uc3QgZGV2ZWxvcGVyVG9vbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNkZXZlbG9wZXItdG9vbHNcIikhO1xuY29uc3QgZ2FtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNnYW1lXCIpITtcbmNvbnN0IGNhbWVyYUxhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2NhbWVyYS1sYWJcIikhO1xuY29uc3QgY2FtZXJhT3V0cHV0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KFwiI2NhbWVyYS1vdXRwdXQtdGV4dFwiKSE7XG5jb25zdCB1cmxPcHRpb25zID0gd2luZG93Lkp1c3RUaGVHYW1lc1BsZWFzZT8udXJsT3B0aW9ucztcbmNvbnN0IGRldmVsb3Blck1vZGUgPSB1cmxPcHRpb25zPy5pc0VuYWJsZWQoXCJkZXZcIikgPz8gZmFsc2U7XG5jb25zdCBjYW1lcmFDb250cm9sc01vZGUgPSB1cmxPcHRpb25zPy5pc0VuYWJsZWQoXCJjYW1lcmFjb250cm9sc1wiKSA/PyBmYWxzZTtcbmNvbnN0IGRlZmF1bHRUcmFja1NjZW5lSWQgPSBPYmplY3QudmFsdWVzKHRyYWNrRmFtaWx5LmZhbWlsaWVzKVswXS5lbnZpcm9ubWVudC5zY2VuZUlkO1xubGV0IHBlbmRpbmdUcmFja0lkOiBUcmFja0lkIHwgbnVsbCA9IG51bGw7XG5sZXQgbXVzaWNTdGFydGVkID0gZmFsc2U7XG5cbmRldmVsb3BlclRvb2xzLmhpZGRlbiA9ICFkZXZlbG9wZXJNb2RlO1xuY2FtZXJhTGFiLmhpZGRlbiA9ICFjYW1lcmFDb250cm9sc01vZGU7XG5hcHBseVBvcnRyYWl0U3RhZ2UoZ2FtZUVsZW1lbnQsIGxhbmVSdW5uZXJWaWV3cG9ydCk7XG5cbmNvbnN0IGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgfTtcbmNvbnN0IGNhbWVyYVNldHRpbmdzT3V0cHV0ID0gKCk6IHN0cmluZyA9PlxuICBgY2FtZXJhOiBoZWlnaHQ9JHtjYW1lcmFTZXR0aW5ncy5oZWlnaHQudG9GaXhlZCgwKX0sIGxvb2tBbmdsZURlZ3JlZXM9JHtjYW1lcmFTZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzLnRvRml4ZWQoMCl9LCBmb2xsb3dEaXN0YW5jZT0ke2NhbWVyYVNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlLnRvRml4ZWQoMCl9LCB6b29tPSR7Y2FtZXJhU2V0dGluZ3Muem9vbS50b0ZpeGVkKDIpfSwgaG9yaXpvbj0ke2NhbWVyYVNldHRpbmdzLmhvcml6b24udG9GaXhlZCgyKX1gO1xuY29uc3Qgc3luY0NhbWVyYU91dHB1dCA9ICgpOiB2b2lkID0+IHtcbiAgY2FtZXJhT3V0cHV0VGV4dC52YWx1ZSA9IGNhbWVyYVNldHRpbmdzT3V0cHV0KCk7XG59O1xuY29uc3QgYmluZENhbWVyYVNsaWRlciA9IChpZDogc3RyaW5nLCBrZXk6IGtleW9mIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyk6IHZvaWQgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oaWQpITtcbiAgaW5wdXQudmFsdWUgPSBTdHJpbmcoY2FtZXJhU2V0dGluZ3Nba2V5XSk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgY2FtZXJhU2V0dGluZ3Nba2V5XSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XG4gICAgc3luY0NhbWVyYU91dHB1dCgpO1xuICB9KTtcbn07XG5iaW5kQ2FtZXJhU2xpZGVyKFwiI2NhbWVyYS1oZWlnaHRcIiwgXCJoZWlnaHRcIik7XG5iaW5kQ2FtZXJhU2xpZGVyKFwiI2NhbWVyYS1sb29rXCIsIFwibG9va0FuZ2xlRGVncmVlc1wiKTtcbmJpbmRDYW1lcmFTbGlkZXIoXCIjY2FtZXJhLWJhY2tcIiwgXCJmb2xsb3dEaXN0YW5jZVwiKTtcbmJpbmRDYW1lcmFTbGlkZXIoXCIjY2FtZXJhLXpvb21cIiwgXCJ6b29tXCIpO1xuYmluZENhbWVyYVNsaWRlcihcIiNjYW1lcmEtaG9yaXpvblwiLCBcImhvcml6b25cIik7XG5zeW5jQ2FtZXJhT3V0cHV0KCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjYW1lcmEtb3V0cHV0XCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBvdXRwdXQgPSBjYW1lcmFTZXR0aW5nc091dHB1dCgpO1xuICBjYW1lcmFPdXRwdXRUZXh0LnZhbHVlID0gb3V0cHV0O1xuICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQob3V0cHV0KS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xufSk7XG5cbnRyeSB7XG4gIGNvbnN0IHNpbSA9IGF3YWl0IE5lb25Td2FybVNpbXVsYXRpb24uY3JlYXRlKHtcbiAgICBtb2RlOiBcImdhbWVcIixcbiAgICBjYW52YXMsXG4gICAgc3RhZ2VFbGVtZW50OiBnYW1lRWxlbWVudCxcbiAgICBjYW1lcmFTZXR0aW5ncyxcbiAgICBzb3VuZDogd2luZG93LmdhbWVBdWRpbyxcbiAgICBzY2VuZUlkOiBkZWZhdWx0VHJhY2tTY2VuZUlkLFxuICAgIG9uUnVuU3RhdHVzOiB2YWx1ZSA9PiB7XG4gICAgICBydW5TdGF0dXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9LFxuICAgIG9uRmluaXNoOiBmaW5pc2ggPT4ge1xuICAgICAgcmVzdWx0LmhpZGRlbiA9IGZhbHNlO1xuICAgICAgcmVzdWx0VGl0bGUudGV4dENvbnRlbnQgPSBmaW5pc2gudGl0bGU7XG4gICAgICByZXN1bHREZXRhaWwudGV4dENvbnRlbnQgPSBmaW5pc2guZGV0YWlsO1xuICAgIH0sXG4gIH0pO1xuICBjb25zdCB0cmFja1JvdXRlID0gKHRyYWNrSWQ6IFRyYWNrSWQpOiBzdHJpbmcgPT4gYCN0cmFjay8ke2VuY29kZVVSSUNvbXBvbmVudCh0cmFja0lkKX1gO1xuICBjb25zdCB0cmFja0ZhbWlseUZvclRyYWNrID0gKHRyYWNrSWQ6IFRyYWNrSWQpOiAodHlwZW9mIHRyYWNrRmFtaWx5LmZhbWlsaWVzKVtUcmFja0ZhbWlseUlkXSB8IG51bGwgPT4ge1xuICAgIGNvbnN0IGZhbWlsaWVzID0gT2JqZWN0LnZhbHVlcyh0cmFja0ZhbWlseS5mYW1pbGllcykgYXMgQXJyYXk8KHR5cGVvZiB0cmFja0ZhbWlseS5mYW1pbGllcylbVHJhY2tGYW1pbHlJZF0gJiB7IHRyYWNrSWRzOiByZWFkb25seSBUcmFja0lkW10gfT47XG4gICAgcmV0dXJuIGZhbWlsaWVzLmZpbmQoZmFtaWx5ID0+IGZhbWlseS50cmFja0lkcy5pbmNsdWRlcyh0cmFja0lkKSkgPz8gbnVsbDtcbiAgfTtcbiAgY29uc3Qgc3RhcnRBdWRpb0Zvckdlc3R1cmUgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKG11c2ljU3RhcnRlZCkgcmV0dXJuO1xuICAgIG11c2ljU3RhcnRlZCA9IHRydWU7XG4gICAgY29uc3QgYXVkaW8gPSB3aW5kb3cuZ2FtZUF1ZGlvIGFzICh0eXBlb2Ygd2luZG93LmdhbWVBdWRpbyAmIHsgcGxheVNoYXJlZE11c2ljPzogKGlkczogc3RyaW5nW10pID0+IHZvaWQgfSk7XG4gICAgYXVkaW8/LnBsYXlTaGFyZWRNdXNpYz8uKFtcIk11c2ljXCJdKTtcbiAgfTtcbiAgY29uc3QgbmF2aWdhdGVUb1RyYWNrcyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAobG9jYXRpb24uaGFzaCA9PT0gXCIjdHJhY2tzXCIpIHtcbiAgICAgIHJlc2V0VG9UcmFja3MoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9jYXRpb24uaGFzaCA9IFwidHJhY2tzXCI7XG4gIH07XG4gIGNvbnN0IHRyYWNrSWRGcm9tUm91dGUgPSAoKTogVHJhY2tJZCB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHByZWZpeCA9IFwiI3RyYWNrL1wiO1xuICAgIGlmICghbG9jYXRpb24uaGFzaC5zdGFydHNXaXRoKHByZWZpeCkpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoLnNsaWNlKHByZWZpeC5sZW5ndGgpKTtcbiAgICByZXR1cm4gY2FuZGlkYXRlIGluIHRyYWNrRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgVHJhY2tJZCA6IG51bGw7XG4gIH07XG4gIGNvbnN0IHRyYWNrTWVudSA9IGF3YWl0IFRyYWNrTWVudVJlbmRlcmVyLmNyZWF0ZSh7XG4gICAgY2FudmFzOiB0cmFja01lbnVDYW52YXMsXG4gICAgYnV0dG9uTGF5ZXI6IHRyYWNrTGlzdCxcbiAgICBsYWJlbExheWVyOiB0cmFja01lbnVMYWJlbHMsXG4gICAgdHJhY2tGYW1pbHksXG4gICAgcm91dGU6IHRyYWNrUm91dGUsXG4gIH0pO1xuICB0cmFja01lbnUuc3RhcnQoKTtcblxuICBjb25zdCByZXNldFRvVHJhY2tzID0gKCk6IHZvaWQgPT4ge1xuICAgIHNpbS5yZXNldCgpO1xuICAgIHBlbmRpbmdUcmFja0lkID0gbnVsbDtcbiAgICBnYW1lRWxlbWVudC5kYXRhc2V0LnBhZ2UgPSBcInRyYWNrc1wiO1xuICAgIGdhbWVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgICByZXN1bHQuaGlkZGVuID0gdHJ1ZTtcbiAgICBzdGFydERpYWxvZy5oaWRkZW4gPSB0cnVlO1xuICAgIHRyYWNrU2VsZWN0LmhpZGRlbiA9IGZhbHNlO1xuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgdHJhY2sgZmFtaWx5LCB0aGVuIHBpY2sgYSBydW4uXCI7XG4gICAgcnVuU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBwcmVwYXJlVHJhY2tTdGFydCA9ICh0cmFja0lkOiBUcmFja0lkKTogdm9pZCA9PiB7XG4gICAgcGVuZGluZ1RyYWNrSWQgPSB0cmFja0lkO1xuICAgIHNpbS5yZXNldCgpO1xuICAgIHJlc3VsdC5oaWRkZW4gPSB0cnVlO1xuICAgIGNvbnN0IHRyYWNrID0gdHJhY2tGYW1pbHkubWVtYmVyc1t0cmFja0lkXTtcbiAgICBjb25zdCBmYW1pbHkgPSB0cmFja0ZhbWlseUZvclRyYWNrKHRyYWNrSWQpO1xuICAgIGdhbWVFbGVtZW50LmRhdGFzZXQucGFnZSA9IFwiZ2FtZVwiO1xuICAgIHRyYWNrU2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgc2ltLnNldFNjZW5lKHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQpO1xuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IFwiUmVhZHk/XCI7XG4gICAgcnVuU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBzdGFydERpYWxvZ0ZhbWlseS50ZXh0Q29udGVudCA9IGZhbWlseSA/IGZhbWlseS5sYWJlbCA6IFwiVHJhY2tcIjtcbiAgICBzdGFydERpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gdHJhY2subGFiZWw7XG4gICAgc3RhcnREaWFsb2dEZXRhaWwudGV4dENvbnRlbnQgPSBcIlRhcCBsZWZ0IG9yIHJpZ2h0IHRvIHN3aXRjaCBsYW5lcy5cIjtcbiAgICBzdGFydERpYWxvZy5oaWRkZW4gPSBmYWxzZTtcbiAgICBjb25maXJtVHJhY2tTdGFydC5mb2N1cygpO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0VHJhY2sgPSAodHJhY2tJZDogVHJhY2tJZCk6IHZvaWQgPT4ge1xuICAgIHBlbmRpbmdUcmFja0lkID0gbnVsbDtcbiAgICBzdGFydERpYWxvZy5oaWRkZW4gPSB0cnVlO1xuICAgIGdhbWVFbGVtZW50LmRhdGFzZXQucGFnZSA9IFwiZ2FtZVwiO1xuICAgIHRyYWNrU2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgcmVzdWx0LmhpZGRlbiA9IHRydWU7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJUYXAgbGVmdCBvciByaWdodCB0byBzd2l0Y2ggbGFuZXMuXCI7XG4gICAgc2ltLnN0YXJ0VHJhY2sodHJhY2tGYW1pbHkubWVtYmVyc1t0cmFja0lkXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUm91dGUgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdHJhY2tJZCA9IHRyYWNrSWRGcm9tUm91dGUoKTtcbiAgICBpZiAodHJhY2tJZCkgcHJlcGFyZVRyYWNrU3RhcnQodHJhY2tJZCk7XG4gICAgZWxzZSByZXNldFRvVHJhY2tzKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYmFjay10by10cmFja3NcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZpZ2F0ZVRvVHJhY2tzKTtcbiAgY29uZmlybVRyYWNrU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXBlbmRpbmdUcmFja0lkKSByZXR1cm47XG4gICAgc3RhcnRBdWRpb0Zvckdlc3R1cmUoKTtcbiAgICBzdGFydFRyYWNrKHBlbmRpbmdUcmFja0lkKTtcbiAgfSk7XG4gIGNhbmNlbFRyYWNrU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdmlnYXRlVG9UcmFja3MpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgaGFuZGxlUm91dGUpO1xuICBpZiAoIWxvY2F0aW9uLmhhc2gpIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIFwiI3RyYWNrc1wiKTtcbiAgaGFuZGxlUm91dGUoKTtcblxuICBiaW5kU3F1YWRJbnB1dChnYW1lRWxlbWVudCwge1xuICAgIGxhbmU6ICgpID0+IHNpbS5zbmFwc2hvdCgpLnNxdWFkLmxhbmUsXG4gICAgc2V0TGFuZTogbGFuZSA9PiBzaW0uc2V0U3F1YWRMYW5lKGxhbmUsIHsgcmVxdWlyZUFjdGl2ZVRyYWNrOiB0cnVlIH0pLFxuICB9KTtcblxuICBzaW0uc3RhcnRMb29wKCk7XG59IGNhdGNoIChjYXVzZSkge1xuICBlcnJvci5oaWRkZW4gPSBmYWxzZTtcbiAgZXJyb3IudGV4dENvbnRlbnQgPSBjYXVzZSBpbnN0YW5jZW9mIEVycm9yID8gY2F1c2UubWVzc2FnZSA6IFN0cmluZyhjYXVzZSk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgSnVzdFRoZUdhbWVzUGxlYXNlPzoge1xuICAgICAgdXJsT3B0aW9ucz86IHtcbiAgICAgICAgaXNFbmFibGVkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICB9O1xuICAgIH07XG4gICAgZ2FtZUF1ZGlvPzoge1xuICAgICAgcGxheShpZDogc3RyaW5nKTogdm9pZDtcbiAgICAgIHBsYXlSb3RhdGVkKGlkOiBzdHJpbmcsIGFsdGVybmF0aXZlczogbnVtYmVyKTogdm9pZDtcbiAgICB9O1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBUU8sSUFBTSxlQUFlO0FBQUEsRUFDMUIsdUJBQXVCO0FBQ3pCO0FBRUEsSUFBSSxDQUFDLE9BQU8sU0FBUyxhQUFhLHFCQUFxQixLQUFLLGFBQWEseUJBQXlCLEdBQUc7QUFDbkcsUUFBTSxJQUFJLE1BQU0sdUVBQXVFO0FBQ3pGOzs7QUNkTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLE1BQ3BFLE1BQU0sS0FBSyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3RDLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7QUFDM0MsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEQsQ0FBQztBQUVILElBQU0sT0FBTyxDQUFDLFFBQWdCLFFBQVEsTUFBSyxXQUFXLENBQUMsS0FBSyxLQUFLLE1BQy9ELE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDM0MsUUFBTSxTQUFTLElBQUks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QyxPQUFLLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMzUCxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLE1BQUksR0FBRSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxHQUFFLEdBQUcsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUMzTCxLQUFLLFVBQVUsdUJBQXVCLHVCQUF1QixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFNLEtBQUksR0FBRyxDQUFDLE9BQUssS0FBSSxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxRQUFNLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUM5UCxLQUFLLFVBQVUsMEJBQTBCLDBCQUEwQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLEtBQUcsSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE9BQUssSUFB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QyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBRWxGLEtB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUwxQixTQUFTLEtBQUtDLE1BQStDO0FBQzNELFFBQU0sUUFBUUEsS0FBSSxRQUFRLEtBQUssRUFBRTtBQUNqQyxNQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBSyxFQUFHLE9BQU0sSUFBSSxN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QUFNQyxrQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxrQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxrQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxtQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxtQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxtQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxtQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxtQkFBaUIsYUFBYTtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUixDQUFDOzs7QUNOTSxJQUFNQyxtQkFBaUIs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V0FBTyxTQUFTO0FBQ2hCLFdBQU8sY0FBYztBQUNyQixRQUFJLFdBQVcsWUFBWSxRQUFRLE9BQU8sQ0FBQztBQUFBLEVBQzdDO0FBRUEsUUFBTSxjQUFjLE1BQVk7QUFDOUIsVUFBTSxVQUFVLGlCQUFpQjtBQUNqQyxRQUFJLFFBQVMsbUJBQWtCLE9BQU87QUFBQSxRQUNqQyxlQUFjO0FBQUEsRUFDckI7QUFFQSxXQUFTLGNBQWlDLGlCQUFpQixFQUFHLGlCQUFpQixTQUFTLGdCQUFnQjtBQUN4RyxvQkFBa0IsaUJBQWlCLFNBQVMsTUFBTTtBQUNoRCxRQUFJLENBQUMsZUFBZ0I7QUFDckIseUJBQXFCO0FBQ3JCLGVBQVcsY0FBYztBQUFBLEVBQzNCLENBQUM7QUFDRCxtQkFBaUIsaUJBQWlCLFNBQVMsZ0JBQWdCO0FBQzNELFNBQU8saUJBQWlCLGNBQWMsV0FBVztBQUNqRCxNQUFJLENBQUMsU0FBUyxLQUFNLFNBQVEsYUFBYSxNQUFNLElBQUksU0FBUztBQUM1RCxjQUFZO0FBRVosaUJBQWUsYUFBYTtBQUFBLElBQzFCLE1BQU0sTUFBTSxJQUFJLFNBQVMsRUFBRSxNQUFNO0FBQUEsSUFDakMsU0FBUyxVQUFRLElBQUksYUFBYSxNQUFNLEVBQUUsb0JBQW9CLEtBQUssQ0FBQztBQUFBLEVBQ3RFLENBQUM7QUFFRCxNQUFJLFVBQVU7QUFDaEIsU0FBUyxPQUFPO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxjQUFjLGlCQUFpQixRQUFRLE1BQU0sVUFBVSxPQUFPLEtBQUs7QUFDM0U7IiwKICAibmFtZXMiOiBbImMiLCAiY2FudmFzIiwgIndpZHRoIiwgImhlaWdodCIsICJzaGFkZXIiLCAiaGV4IiwgImNhbnZhcyIsICJoZXgiLCAic2hhZGVyIiwgImNhbnZhcyIsICJzaGFkZXIiLCAiYyIsICJoZXgiLCAiY2FudmFzIiwgImNvbG9ycyIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJjIiwgImxldmVsIiwgImxldmVsIiwgInJlc3VsdCIsICJyZXN1bHQiLCAibGV2ZWwiLCAicmVzdWx0IiwgInJvdGF0aW9uIiwgImVuZW15SWRGcm9tVHJhY2tJZCIsICJjYW1lcmFTZXR0aW5ncyIsICJ0YXJnZXRTcGFuIiwgInQiLCAiZWFzZSIsICJwb2ludCIsICJsZXZlbCIsICJyZXN1bHQiLCAicmVxdWlyZWRTaGFwZSIsICJjYW52YXMiLCAidHJhY2tGYW1pbHkiXQp9Cg==

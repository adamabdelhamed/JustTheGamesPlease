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
        level(3, { fireRatePerSecond: 2.15, damage: 1.35, projectileSpeed: 620, projectileRadius: 3.25, trailLength: 18, muzzleFlashScale: 0.75, hitFlashScale: 0.9 })
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
        level(3, { fireRatePerSecond: 9.25, damage: 0.54, projectileSpeed: 780, projectileRadius: 2.15, spreadDegrees: 2, trailLength: 12, tracerEveryNthShot: 4, muzzleFlashScale: 0.45, hitFlashScale: 0.55 })
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
        level(3, { fireRatePerSecond: 1.15, damage: 0.9, projectileSpeed: 725, projectileRadius: 3, burstCount: 4, burstIntervalMs: 58, spreadDegrees: 1, trailLength: 17, muzzleFlashScale: 0.65, hitFlashScale: 0.75 })
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
        level(3, { fireRatePerSecond: 0.9, damage: 3.6, projectileSpeed: 570, projectileRadius: 5, pierce: 2, trailLength: 26, impactRadius: 18, knockback: 22, muzzleFlashScale: 1.3, hitFlashScale: 1.5 })
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
        level(1, { fireRatePerSecond: 1.15, damage: 0.8, projectileSpeed: 585, projectileRadius: 2.75, projectileCount: 2, spreadDegrees: 2.5, trailLength: 14, muzzleFlashScale: 0.65, hitFlashScale: 0.65 }),
        level(2, { fireRatePerSecond: 1.35, damage: 0.95, projectileSpeed: 625, projectileRadius: 2.85, projectileCount: 2, spreadDegrees: 3, trailLength: 15, muzzleFlashScale: 0.7, hitFlashScale: 0.7 }),
        level(3, { fireRatePerSecond: 1.55, damage: 1.05, projectileSpeed: 665, projectileRadius: 3, projectileCount: 2, spreadDegrees: 3.5, trailLength: 16, muzzleFlashScale: 0.75, hitFlashScale: 0.75 })
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
      for (const tuning of gun.levels) {
        this.require(tuning.fireRatePerSecond > 0, `${id} level ${tuning.level} fire rate must be positive.`);
        this.require(tuning.damage > 0 && tuning.projectileSpeed > 0 && tuning.projectileRadius > 0, `${id} level ${tuning.level} has invalid projectile power.`);
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
  2: 1.08,
  3: 1.16
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
        const hitRadius = projectile.radius + target.radius;
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
        const angleDegrees = count === 1 ? 0 : (index / (count - 1) - 0.5) * level2.spreadDegrees;
        const angle = angleDegrees * Math.PI / 180;
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
  constructor(shieldId, maxCharges) {
    this.shieldId = shieldId;
    this.charges = maxCharges;
    this.cooldownLeft = 0;
    this.hitFlashUntil = 0;
    this.hitFlashProgress = 1;
    this.pulseEffects = [];
  }
};
function resolveShieldContact(state, shield, target, shieldX, shieldY, now, scale = 1) {
  const result = {
    contacted: false,
    absorbed: false,
    damageAbsorbed: 0,
    enemyDestroyed: false
  };
  if (target.dying || state.interceptedEnemyIds.has(target.id)) return result;
  const radius = shield.radius * scale + target.radius;
  const dx = target.x - shieldX;
  const dy = target.y - shieldY;
  if (dx * dx + dy * dy > radius * radius) return result;
  result.contacted = true;
  state.interceptedEnemyIds.add(target.id);
  if (state.charges <= 0) return result;
  const absorbed = Math.min(state.charges, target.health);
  state.charges -= absorbed;
  target.health -= absorbed;
  state.hitFlashUntil = now + 280;
  state.hitFlashProgress = 0;
  state.cooldownLeft = shield.cooldownSeconds;
  result.absorbed = true;
  result.damageAbsorbed = absorbed;
  result.enemyDestroyed = target.health <= 0;
  return result;
}
function tickShield(state, shield, threats, playerX, playerY, now, delta) {
  const result = {
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
  if (threats.length === 0) return result;
  if (false) {
    result.contactDamageAmount = shield.contactDamage;
    for (const { target } of threats) {
      result.contactDamageEnemyIds.push(target.id);
    }
  }
  if (false) {
    result.slowMultiplier = shield.slowMultiplier;
    for (const { target } of threats) {
      result.slowEnemyIds.push(target.id);
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
    result.pushDistance = shield.pushDistance;
    for (const { target } of threats) {
      result.pushEnemyIds.push(target.id);
    }
  }
  return result;
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
    const target = Math.max(1, Math.floor(count));
    while (this.cooldownLefts.length < target) this.cooldownLefts.push(0);
    while (this.activeSlashes.length < target) this.activeSlashes.push(null);
    while (this.previousSlashSides.length < target) this.previousSlashSides.push(1);
    this.cooldownLefts.length = target;
    this.activeSlashes.length = target;
    this.previousSlashSides.length = target;
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
  const result = {
    hitEnemyIds: [],
    hitTargets: [],
    damage: 0,
    swingTriggered: false
  };
  state.syncSlots(swordCount);
  for (let slot = 0; slot < state.cooldownLefts.length; slot++) {
    if (state.cooldownLefts[slot] > 0) state.cooldownLefts[slot] = Math.max(0, state.cooldownLefts[slot] - delta);
    const slash = state.activeSlashes[slot];
    if (slash) {
      slash.progress = (now - slash.startedAt) / slash.durationMs;
      if (slash.progress >= 1) state.activeSlashes[slot] = null;
    }
  }
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;
  if (threats.length === 0) return result;
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
    result.swingTriggered = true;
    result.damage = damage;
    for (const { target } of selected) {
      result.hitEnemyIds.push(target.id);
      result.hitTargets.push({ id: target.id, x: target.x, y: target.y });
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
    const selectedIds = new Set(selected.map(({ target }) => target.id));
    remaining = remaining.filter(({ target }) => !selectedIds.has(target.id));
  }
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;
  return result;
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
function projectedEnemyHealthBarPrimitives(targets, cameraSettings, viewport) {
  return targets.flatMap((target) => {
    const definition = orbFamily.members[target.enemyId];
    const point = projectHelicopterPoint(target.x, target.y, cameraSettings, viewport);
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
function applyLaneRunnerSceneBackground(element, sceneId) {
  element.style.backgroundPosition = "center";
  element.style.backgroundSize = "cover";
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
  multipliers = [];
  enemyExitEffects = [];
  victory = null;
  swordVisualTuning = {};
  pendingSwordDamage = null;
  failureReason = "";
  playerActors = [];
  explodingPlayers = [];
  simulationSpeed = 1;
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
    this.nextTrackEntity = 0;
    this.trackEntities = [];
    this.breaches = 0;
    this.kills = 0;
    this.clearStage();
    this.activeByFamily.gun = null;
    this.activeByFamily.shield = null;
    this.activeByFamily.sword = null;
    this.squad.count = 1;
    this.squad.aimOffset = 0;
    this.squad.lane = 0;
    this.squad.x = this.laneX(0);
    this.squad.targetX = this.laneX(0);
    this.playerLane = 0;
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
    this.cooldown = 0;
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
    this.activeByFamily.gun = { id: gunId, level: level2 };
    this.cooldown = 0;
    this.playPickup("PickupGun");
    this.play("WeaponReady");
  }
  equipShield(shieldId) {
    const def = shieldFamily.members[shieldId];
    this.activeByFamily.shield = new ShieldState(shieldId, def.maxCharges);
    this.playPickup("PickupShield");
    this.play("Shield");
  }
  equipSword(swordId) {
    const current = this.activeByFamily.sword;
    this.activeByFamily.sword = new SwordState(swordId, current?.swordId === swordId ? current.level + 1 : 1);
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
      level: options.level ?? 1,
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
      speedMultiplier: options.speedMultiplier ?? 1
    });
  }
  spawnSwordPickup(options) {
    this.swordPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      swordId: options.swordId,
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
    this.syncPlayerActors();
    if (this.activeByFamily.gun) {
      this.cooldown -= delta;
      if (this.cooldown <= 0) this.fire();
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
      shapeInstances.push(shieldPickupVisual({
        x: pickup.x,
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s
      }));
    }
    for (const pickup of this.swordPickups) {
      const definition = swordFamily.members[pickup.swordId];
      shapeInstances.push(swordPickupVisual({
        x: pickup.x,
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s
      }));
    }
    const playerSize = 14;
    for (const [index, point] of playerPoints.entries()) {
      const actor = this.playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, playerOrientation(this.cameraSettings, helicopterViewport, point.x, point.y, now, index)));
    }
    for (const item of this.explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));
    const enemyHealthBars = [];
    for (const enemy of this.enemies) {
      const definition = this.enemyDefinition(enemy);
      const size = 18 * definition.columnSpan;
      enemyHealthBars.push({ enemyId: enemy.enemyId, x: enemy.x, y: enemy.y, health: enemy.health, maxHealth: enemy.maxHealth, size, scale: s });
      shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, size, enemyOrientation(this.cameraSettings, helicopterViewport, enemy.x, enemy.y, now, enemy.rowId)));
    }
    for (const pickup of this.gunPickups) {
      const gun = gunFamily.members[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
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
        this.spawnGunPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), gunId: candidate, level: 1, speedMultiplier: entity.speedMultiplier });
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
    this.gunSimulation.fire(gun, tuning, this.playerLane, points, this.combatNow, this.scale());
    this.cooldown += 1 / tuning.fireRatePerSecond;
    this.playGunFire(gunId);
  }
  updateProjectiles(delta) {
    this.gunSimulation.updateProjectiles(delta, this.combatNow, this.enemies.map((enemy) => Object.assign(enemy, {
      radius: this.enemyDefinition(enemy).radius * this.scale()
    })), { top: -40 * this.scale(), left: -40, right: this.canvas.width + 40 }, (shot, enemy) => {
      const gameEnemy = enemy;
      const result = resolveEnemyDamage({
        enemy: gameEnemy,
        effects: this.enemyExitEffects,
        impactMagnitude: shot.damage + shot.knockback * 0.06,
        color: this.enemyExitColor(gameEnemy)
      });
      if (result.killed) {
        this.kills++;
        this.play(result.definition.deathSound);
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
      const result = resolveEnemyDamage({
        enemy,
        effects: this.enemyExitEffects,
        damage: pending.damage,
        impactMagnitude: pending.damage,
        color: pending.color
      });
      if (result.killed) {
        this.kills++;
        this.play(result.definition.deathSound);
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
        this.activeByFamily.gun = { id: pickup.gunId, level: pickup.level };
        this.cooldown = 0;
        this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
        this.playPickup("PickupGun");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...this.shieldPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const def = shieldFamily.members[pickup.shieldId];
        this.activeByFamily.shield = new ShieldState(pickup.shieldId, def.maxCharges);
        this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
        this.playPickup("PickupShield");
        this.play("Shield");
      } else if (pickup.y > this.canvas.height) this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...this.swordPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const current = this.activeByFamily.sword;
        this.activeByFamily.sword = new SwordState(pickup.swordId, current?.swordId === pickup.swordId ? current.level + 1 : 1);
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
  applySceneBackground() {
    applyLaneRunnerSceneBackground(this.stageElement, this.trackSceneId);
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

// projects/NeonSwarm/test-pages/gun-family/manual.ts
var canvas = document.querySelector("#game-canvas");
var error = document.querySelector("#error");
var gunSelect = document.querySelector("#gun-select");
var levelSelect = document.querySelector("#level-select");
var enemySelect = document.querySelector("#enemy-select");
var weaponReadout = document.querySelector("#weapon-readout");
var scoreReadout = document.querySelector("#score-readout");
var specReadout = document.querySelector("#spec-readout");
var formationSize = document.querySelector("#formation-size");
var formationRows = document.querySelector("#formation-rows");
var gameElement = document.querySelector("#game");
var audioId = (id) => `../../../../audio/${id}`;
applyPortraitStage(gameElement, laneRunnerViewport);
try {
  const sim = await NeonSwarmSimulation.create({
    mode: "lab",
    canvas,
    stageElement: gameElement,
    sound: {
      play: (id) => window.gameAudio?.play(audioId(id)),
      playRotated: (id, alternatives) => window.gameAudio?.playRotated(audioId(id), alternatives)
    }
  });
  for (const [id, gun] of Object.entries(gunFamily.members)) gunSelect.add(new Option(gun.label, id));
  for (const [id, enemy] of Object.entries(orbFamily.members)) enemySelect.add(new Option(enemy.label, id));
  gunSelect.value = "pulsePistol";
  enemySelect.value = "basicOrb";
  const selectedGun = () => gunSelect.value;
  const selectedLevel = () => Number(levelSelect.value);
  const selectedEnemy = () => enemySelect.value;
  const updateReadout = () => {
    const gun = gunFamily.members[selectedGun()];
    const level2 = gun.levels.find((item) => item.level === selectedLevel()) ?? gun.levels[0];
    const enemy = orbFamily.members[selectedEnemy()];
    const snapshot = sim.snapshot();
    weaponReadout.textContent = `${gun.label} \xB7 L${level2.level}`;
    scoreReadout.textContent = `Kills ${snapshot.kills}`;
    specReadout.innerHTML = [
      ["Pattern", gun.shotPattern],
      ["Fire rate", `${level2.fireRatePerSecond}/s`],
      ["Damage", String(level2.damage)],
      ["Speed", String(level2.projectileSpeed)],
      ["Radius", String(level2.projectileRadius)],
      ["Burst", String(level2.burstCount)],
      ["Pierce", String(level2.pierce)],
      ["Enemy", enemy.label],
      ["Enemy HP", String(enemy.health)],
      ["Enemy speed", String(enemy.speed)],
      ["Squad", String(snapshot.squad.count)]
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  const equip = () => {
    sim.equipGun(selectedGun(), selectedLevel());
    updateReadout();
  };
  const spawnEnemy = (lane, x = sim.laneX(lane), y = 105, rowId) => {
    sim.spawnEnemy({ enemyId: selectedEnemy(), lane, x, y, rowId });
  };
  document.querySelectorAll("[data-spawn-enemy]").forEach((button) => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy)));
  });
  document.querySelectorAll("[data-spawn-pickup]").forEach((button) => {
    button.addEventListener("click", () => sim.spawnGunPickup({ gunId: selectedGun(), level: selectedLevel(), lane: Number(button.dataset.spawnPickup) }));
  });
  document.querySelectorAll("[data-spawn-formation]").forEach((button) => {
    button.addEventListener("click", () => {
      const lane = Number(button.dataset.spawnFormation);
      const count = Number(formationSize.value);
      const rows = Number(formationRows.value);
      const perRow = Math.ceil(count / rows);
      let remaining = count;
      for (let row = 0; row < rows; row++) {
        const rowId = performance.now() + row;
        const rowCount = Math.min(perRow, remaining);
        for (let column = 0; column < rowCount; column++) {
          spawnEnemy(lane, sim.laneX(lane) + (column - (rowCount - 1) / 2) * 15, 105 - row * 24, rowId);
        }
        remaining -= rowCount;
      }
    });
  });
  document.querySelectorAll("[data-spawn-multiplier]").forEach((button) => {
    button.addEventListener("click", () => sim.spawnMultiplierPickup({ lane: Number(button.dataset.spawnMultiplier), multiplierId: "squadPlusOne" }));
  });
  document.querySelector("#spawn-wave").addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    window.setTimeout(() => spawnEnemy(0), 450);
    window.setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector("#clear-stage").addEventListener("click", () => sim.clearStage());
  gunSelect.addEventListener("change", equip);
  levelSelect.addEventListener("change", equip);
  enemySelect.addEventListener("change", updateReadout);
  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: (lane) => sim.setSquadLane(lane)
  });
  sim.equipGun("pulsePistol", 1);
  spawnEnemy(0);
  spawnEnemy(1);
  sim.startLoop();
  window.setInterval(updateReadout, 200);
  updateReadout();
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90b2tlbnMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2dlb21ldHJpYy1zaGFwZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLWFjdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9wcmltaXRpdmUtcmVuZGVyZXIudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2Nsb3VkLWJ1cnN0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90b3AtZG93bi1zY2VuZS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvbGFuZS1ydW5uZXItc2NlbmVzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9wcm9qZWN0aWxlLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy92aWN0b3J5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tCdWlsZGVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s2LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrOC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2szLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE1LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEwLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazExLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2lucHV0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvYXV0b0FpbS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9ndW5TaW11bGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L3NoaWVsZEV2YWx1YXRvci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9zd29yZEV2YWx1YXRvci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2VuZW15RW50cmFuY2VWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFeGl0VmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3ZpZXdwb3J0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlDYXRhbG9nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZmFtaWx5VmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3JlbmRlck9yaWVudGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2NlbmVFbnZpcm9ubWVudC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NoYXBlVmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NxdWFkLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2ltdWxhdGlvbi9OZW9uU3dhcm1TaW11bGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS90ZXN0LXBhZ2VzL2d1bi1mYW1pbHkvbWFudWFsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgaW50ZXJmYWNlIENvbWJhdFR1bmluZyB7XG4gIC8qKlxuICAgKiBNdWx0aXBsaWVzIHRoZSB3aG9sZSBjb21iYXQgc2ltdWxhdGlvbiBwYWNlIHdoaWxlIHByZXNlcnZpbmcgcmVsYXRpdmVcbiAgICogdGltaW5nIGJldHdlZW4gbW92ZW1lbnQsIGNvb2xkb3ducywgcHJvamVjdGlsZXMsIGFuZCBhdXRob3JlZCB0cmFjayBiZWF0cy5cbiAgICovXG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgY29tYmF0VHVuaW5nID0ge1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IDEuNSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIENvbWJhdFR1bmluZztcblxuaWYgKCFOdW1iZXIuaXNGaW5pdGUoY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllcikgfHwgY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllciA8PSAwKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvbWJhdFR1bmluZzogZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIG11c3QgYmUgYSBwb3NpdGl2ZSBmaW5pdGUgbnVtYmVyLlwiKTtcbn1cbiIsICJleHBvcnQgY29uc3QgbmVvblBhbGV0dGUgPSB7XG4gIGN5YW46IFwiIzU1ZTdmZlwiLFxuICBwaW5rOiBcIiNmZjRmOWFcIixcbiAgZ3JlZW46IFwiIzdmZmZjMlwiLFxuICBnb2xkOiBcIiNmZmQ0NWNcIixcbiAgdmlvbGV0OiBcIiNhOTg3ZmZcIixcbiAgb3JhbmdlOiBcIiNmZjhhNDVcIixcbiAgcmVkOiBcIiNmZjU1NzdcIixcbiAgZGVlcEJsdWU6IFwiIzI4N2RmZlwiLFxuICB3aGl0ZUhvdDogXCIjZjRmYmZmXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBOZW9uQ29sb3JOYW1lID0ga2V5b2YgdHlwZW9mIG5lb25QYWxldHRlO1xuXG5leHBvcnQgY29uc3QgZ2xvd1ByZXNldHMgPSB7XG4gIHNvZnQ6IDAuMzgsXG4gIHN0YW5kYXJkOiAwLjY1LFxuICBpbnRlbnNlOiAxLFxufSBhcyBjb25zdDtcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVGYW1pbHkgPSBcInBsYXllclwiIHwgXCJodW50ZXJcIiB8IFwiYnJ1aXNlclwiIHwgXCJ0YW5rXCIgfCBcInRyaWNrc3RlclwiIHwgXCJlbGl0ZVwiO1xuZXhwb3J0IHR5cGUgTmVvblJvY2tTdHlsZSA9IFwicGl0Y2hcIiB8IFwicm9sbFwiIHwgXCJ5YXdcIiB8IFwicHVsc2VcIiB8IFwib3JiaXRcIjtcbmV4cG9ydCB0eXBlIE5lb25Qb2ludCA9IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHk7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W107XG4gIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdO1xuICByb2NrOiBOZW9uUm9ja1N0eWxlO1xuICBkZXB0aD86IG51bWJlcjtcbn1cblxuY29uc3QgcmVndWxhciA9IChzaWRlczogbnVtYmVyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMiwgc3ggPSAxLCBzeSA9IDEpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaWRlcyB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAqIDIgLyBzaWRlcztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHN4LCBNYXRoLnNpbihhbmdsZSkgKiBzeV0gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBzdGFyID0gKHBvaW50czogbnVtYmVyLCBpbm5lciA9IC40Miwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwb2ludHMgKiAyIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgcmFkaXVzID0gaSAlIDIgPyBpbm5lciA6IDE7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJIC8gcG9pbnRzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3QgZGlhbW9uZDogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV0sIFstMSwgMF1dO1xuY29uc3QgYXJyb3c6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsuODIsIC42OF0sIFsuMjcsIC40NV0sIFswLCAuOTJdLCBbLS4yNywgLjQ1XSwgWy0uODIsIC42OF1dO1xuY29uc3QgY2hldnJvbjogTmVvblBvaW50W10gPSBbWy0xLCAtLjYyXSwgWzAsIC0uMDVdLCBbMSwgLS42Ml0sIFsuMjgsIC44Ml0sIFswLCAuMzRdLCBbLS4yOCwgLjgyXV07XG5jb25zdCBzcXVhcmU6IE5lb25Qb2ludFtdID0gcmVndWxhcig0LCBNYXRoLlBJIC8gNCk7XG5jb25zdCBjb2xvcnM6IFJlY29yZDxOZW9uU2hhcGVGYW1pbHksIHN0cmluZz4gPSB7XG4gIHBsYXllcjogbmVvblBhbGV0dGUuY3lhbiwgaHVudGVyOiBuZW9uUGFsZXR0ZS5yZWQsIGJydWlzZXI6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgdGFuazogbmVvblBhbGV0dGUuZ29sZCwgdHJpY2tzdGVyOiBcIiM5Y2ZmNTJcIiwgZWxpdGU6IFwiIzcwZGZmZlwiLFxufTtcblxuY29uc3QgbWFrZSA9IChcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHksIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSxcbiAgcm9jazogTmVvblJvY2tTdHlsZSwgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW10sXG4pOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uID0+ICh7IGlkLCBuYW1lLCBmYW1pbHksIHBvaW50cywgaG9sZXMsIHJvY2ssIGNvbG9yOiBjb2xvcnNbZmFtaWx5XSwgZGVwdGg6IGZhbWlseSA9PT0gXCJ0YW5rXCIgPyAuMjIgOiAuMTQgfSk7XG5cbmV4cG9ydCBjb25zdCBuZW9uU2hhcGVDYXRhbG9nOiByZWFkb25seSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uW10gPSBbXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJhcnJvdy1jbGFzc2ljXCIsIFwiQXJyb3cgQ2xhc3NpY1wiLCBhcnJvdywgXCJwaXRjaFwiLCBbYXJyb3cubWFwKChbeCwgeV0pID0+IFt4ICogLjQyLCB5ICogLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImRlbHRhLXNsZWVrXCIsIFwiRGVsdGEgU2xlZWtcIiwgW1swLC0xXSxbLjksLjgyXSxbMCwuNDhdLFstLjksLjgyXV0sIFwicGl0Y2hcIiwgW1tbMCwtLjQ1XSxbLjM1LC40NV0sWzAsLjI4XSxbLS4zNSwuNDVdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Rhci1jb3JlXCIsIFwiU3RhciBDb3JlXCIsIHN0YXIoNCwgLjMyKSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiaGV4LWZpZ2h0ZXJcIiwgXCJIZXggRmlnaHRlclwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LCAtTWF0aC5QSS8yLCAuNDgsIC40OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcIndpbmctc3BsaXRcIiwgXCJXaW5nIFNwbGl0XCIsIFtbLTEsLS44NV0sWy0uMjUsLjFdLFswLC0uMjVdLFsuMjUsLjFdLFsxLC0uODVdLFsuNjYsLjcyXSxbMCwuMzVdLFstLjY2LC43Ml1dLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjE4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInRyaWFkLXBvZFwiLCBcIlRyaWFkIFBvZFwiLCByZWd1bGFyKDMpLCBcInlhd1wiLCBbcmVndWxhcigzLCAtTWF0aC5QSS8yLCAuMzgsIC4zOCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNwaWtlLWxhbmNlXCIsIFwiU3Bpa2UgTGFuY2VcIiwgW1swLC0xXSxbLjQ4LC42NV0sWy4xOCwuNDJdLFswLDFdLFstLjE4LC40Ml0sWy0uNDgsLjY1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1hcmMta2F0YW5hXCIsIFwiU3dvcmQgQXJjIEthdGFuYVwiLCBbWy0uMTYsLTFdLCBbLjE2LC0xXSwgWy4yMiwuMjhdLCBbLjQ4LC42Ml0sIFsuMTgsLjUyXSwgWy4xLDFdLCBbLS4xLDFdLCBbLS4xOCwuNTJdLCBbLS40OCwuNjJdLCBbLS4yMiwuMjhdXSwgXCJwaXRjaFwiLCBbW1stLjA1NSwtLjcyXSwgWy4wNTUsLS43Ml0sIFsuMDU1LC4xOF0sIFstLjA1NSwuMThdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtY2xlYXZlci13aWRlXCIsIFwiU3dvcmQgQ2xlYXZlciBXaWRlXCIsIFtbLS4yOCwtMV0sIFsuMjgsLTFdLCBbLjQ0LC0uNzZdLCBbLjM0LC4zNF0sIFsuNzIsLjU4XSwgWy4yMiwuNTVdLCBbLjE2LDFdLCBbLS4xNiwxXSwgWy0uMjIsLjU1XSwgWy0uNzIsLjU4XSwgWy0uMzQsLjM0XSwgWy0uNDQsLS43Nl1dLCBcInJvbGxcIiwgW1tbLS4xLC0uNjhdLCBbLjEsLS42OF0sIFsuMDgsLjE4XSwgWy0uMDgsLjE4XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLW5lZWRsZS1zYWJyZVwiLCBcIlN3b3JkIE5lZWRsZSBTYWJyZVwiLCBbWzAsLTFdLCBbLjA4LC0uODJdLCBbLjExLC41XSwgWy4zMiwuNzJdLCBbLjA4LC42NF0sIFsuMDUsMV0sIFstLjA1LDFdLCBbLS4wOCwuNjRdLCBbLS4zMiwuNzJdLCBbLS4xMSwuNV0sIFstLjA4LC0uODJdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWd1YXJkZWQtYmxhZGVcIiwgXCJTd29yZCBHdWFyZGVkIEJsYWRlXCIsIFtbLS4xMiwtMV0sIFsuMTIsLTFdLCBbLjE2LC4zNl0sIFsuNjIsLjM2XSwgWy42MiwuNTRdLCBbLjE0LC41Nl0sIFsuMSwxXSwgWy0uMSwxXSwgWy0uMTQsLjU2XSwgWy0uNjIsLjU0XSwgWy0uNjIsLjM2XSwgWy0uMTYsLjM2XV0sIFwieWF3XCIsIFtbWy0uMDQ1LC0uNzJdLCBbLjA0NSwtLjcyXSwgWy4wNDUsLjIyXSwgWy0uMDQ1LC4yMl1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1wcmlzbS1ncmVhdGJsYWRlXCIsIFwiU3dvcmQgUHJpc20gR3JlYXRibGFkZVwiLCBbWzAsLTFdLCBbLjM0LC0uNzRdLCBbLjMsLjI4XSwgWy41NiwuNTJdLCBbLjIsLjQ4XSwgWy4xMiwxXSwgWy0uMTIsMV0sIFstLjIsLjQ4XSwgWy0uNTYsLjUyXSwgWy0uMywuMjhdLCBbLS4zNCwtLjc0XV0sIFwicm9sbFwiLCBbW1stLjA4LC0uNDhdLCBbLjA4LC0uNDhdLCBbLjA4LC4xNl0sIFstLjA4LC4xNl1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJvcmJpdC1kcm9uZVwiLCBcIk9yYml0IERyb25lXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLCAwLCAuNTgsIC41OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNoaWVsZC1yaW5nXCIsIFwiU2hpZWxkIFJpbmdcIiwgcmVndWxhcigzMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMzIsIDAsIC45MSwgLjkxKV0pLFxuXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZGFydFwiLCBcIkRhcnRcIiwgW1stMSwtLjddLFsxLDBdLFstMSwuN10sWy0uNDUsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWtpdGVcIiwgXCJLaXRlXCIsIFtbLTEsLS43NV0sWzEsMF0sWy0xLC43NV0sWy0uNTUsMF1dLCBcInJvbGxcIiwgW3JlZ3VsYXIoMywwLC4zNSwuMzUpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItbmVlZGxlXCIsIFwiTmVlZGxlXCIsIFtbLTEsLS40Ml0sWzEsMF0sWy0xLC40Ml0sWy0uNTUsMF1dLCBcInlhd1wiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci10YWxvblwiLCBcIlRhbG9uXCIsIHN0YXIoMywuMjgpLCBcInJvbGxcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItc2hhcmRcIiwgXCJTaGFyZFwiLCBkaWFtb25kLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXZlZVwiLCBcIlZlZVwiLCBjaGV2cm9uLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWV5ZVwiLCBcIldhdGNoZXJcIiwgcmVndWxhcigzLCBNYXRoLlBJLzIpLCBcInlhd1wiLCBbcmVndWxhcigzLE1hdGguUEkvMiwuNDIsLjQyKV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJ1cnN0XCIsIFwiQnVyc3RcIiwgc3Rhcig4LC4zNSksIFwicHVsc2VcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYm9sdFwiLCBcIkJvbHRcIiwgW1stLjcsLTFdLFsuMTUsLS4zNV0sWy0uMjUsLS4yXSxbLjcsMV0sWy0uMSwuMzJdLFsuMywuMTVdXSwgXCJyb2xsXCIpLFxuXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1mcmFtZVwiLCBcIkZyYW1lXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40OCx5Ki40OF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZW1cIiwgXCJHZW1cIiwgZGlhbW9uZCwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWhleFwiLCBcIkhleCBDb3JlXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvd25cIiwgXCJDcm93blwiLCBbWy0xLC0uNzVdLFstLjUsLS41NV0sWzAsLS44NV0sWy41LC0uNTVdLFsxLC0uNzVdLFsuOCwuOF0sWy0uOCwuOF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm9zc1wiLCBcIkNyb3NzXCIsIFtbLS4zNSwtMV0sWy4zNSwtMV0sWy4zNSwtLjM1XSxbMSwtLjM1XSxbMSwuMzVdLFsuMzUsLjM1XSxbLjM1LDFdLFstLjM1LDFdLFstLjM1LC4zNV0sWy0xLC4zNV0sWy0xLC0uMzVdLFstLjM1LC0uMzVdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1wcmlzbVwiLCBcIlByaXNtXCIsIGRpYW1vbmQsIFwicHVsc2VcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VhclwiLCBcIkdlYXJcIiwgc3Rhcig4LC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXIteFwiLCBcIlggQ29yZVwiLCBbWy0xLC0uNjVdLFstLjY1LC0xXSxbMCwtLjM1XSxbLjY1LC0xXSxbMSwtLjY1XSxbLjM1LDBdLFsxLC42NV0sWy42NSwxXSxbMCwuMzVdLFstLjY1LDFdLFstMSwuNjVdLFstLjM1LDBdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItc2xhYlwiLCBcIlNsYWJcIiwgW1stLjY1LC0xXSxbMSwtMV0sWy42NSwxXSxbLTEsMV1dLCBcInBpdGNoXCIpLFxuXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1oZXhcIiwgXCJIZWF2eSBIZXhcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4zOCwuMzgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1iYXJcIiwgXCJBcm1vciBCYXJcIiwgW1stLjc1LC0xXSxbLjc1LC0xXSxbMSwtLjQ1XSxbLjc1LDFdLFstLjc1LDFdLFstMSwuNDVdXSwgXCJwaXRjaFwiLCBbW1stLjQ4LC0uMThdLFsuNDgsLS4xOF0sWy40OCwuMThdLFstLjQ4LC4xOF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1ibG9ja1wiLCBcIkJsb2NrXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40Mix5Ki40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1vY3RcIiwgXCJPY3RhZ29uXCIsIHJlZ3VsYXIoOCksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstZm9ydFwiLCBcIkZvcnRyZXNzXCIsIHJlZ3VsYXIoNiksIFwicGl0Y2hcIiwgW3JlZ3VsYXIoNiwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1yZWFjdG9yXCIsIFwiUmVhY3RvclwiLCByZWd1bGFyKDEwKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC41NCwuNTQpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1jaXRhZGVsXCIsIFwiQ2l0YWRlbFwiLCBbWy0uNjUsLTFdLFsuNjUsLTFdLFsuNjUsLS43Ml0sWzEsLS43Ml0sWzEsLjcyXSxbLjY1LC43Ml0sWy42NSwxXSxbLS42NSwxXSxbLS42NSwuNzJdLFstMSwuNzJdLFstMSwtLjcyXSxbLS42NSwtLjcyXV0sIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYnVua2VyXCIsIFwiQnVua2VyXCIsIFtbLS43MiwtMV0sWy43MiwtMV0sWzEsLS41OF0sWzEsLjU4XSxbLjcyLDFdLFstLjcyLDFdLFstMSwuNThdLFstMSwtLjU4XV0sIFwicGl0Y2hcIiwgW1tbLS41LC0uMTRdLFsuNSwtLjE0XSxbLjUsLjE0XSxbLS41LC4xNF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1zdW5cIiwgXCJTdW4gVGFua1wiLCByZWd1bGFyKDEyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuMjgsLjI4KV0pLFxuXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1kaWFtb25kXCIsIFwiUGhhc2UgRGlhbW9uZFwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY2hldnJvblwiLCBcIlNsaXBzdHJlYW1cIiwgW1stMSwtLjhdLFstLjIsMF0sWy0xLC44XSxbLS4zNSwuOF0sWy40NSwwXSxbLS4zNSwtLjhdLFsuMjUsLS44XSxbMSwwXSxbLjI1LC44XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1zcXVhcmVcIiwgXCJUaWx0IEJveFwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMzQseSouMzRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY29tcGFzc1wiLCBcIkNvbXBhc3NcIiwgZGlhbW9uZCwgXCJ5YXdcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1leWVcIiwgXCJQaGFzZSBFeWVcIiwgcmVndWxhcigzKSwgXCJwdWxzZVwiLCBbcmVndWxhcig4LDAsLjE4LC4xOCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWhvdXJnbGFzc1wiLCBcIkhvdXJnbGFzc1wiLCBbWy0xLC0xXSxbMSwtMV0sWy4yOCwwXSxbMSwxXSxbLTEsMV0sWy0uMjgsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stbGlua1wiLCBcIkxpbmtcIiwgcmVndWxhcigxMiwwLDEsLjU1KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNjIsLjIyKV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stdm9ydGV4XCIsIFwiVm9ydGV4XCIsIHN0YXIoNywuNTYpLCBcInJvbGxcIiwgW3JlZ3VsYXIoNywwLC4yNSwuMjUpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1nYXRlXCIsIFwiR2hvc3QgR2F0ZVwiLCBzcXVhcmUsIFwicHVsc2VcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjc4LHkqLjc4XSBhcyBjb25zdCldKSxcblxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zdGFyXCIsIFwiTm92YSBTdGFyXCIsIHN0YXIoOCwuNTUpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4zLC4zKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zYXdcIiwgXCJIYWxvIFNhd1wiLCBzdGFyKDEyLC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjQyLC40MildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY3Jvd25cIiwgXCJWb2lkIENyb3duXCIsIHN0YXIoNywuNDgpLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjIseSouMjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1wcmlzbVwiLCBcIlJveWFsIFByaXNtXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjUseSouNV0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLW9yYml0XCIsIFwiT3JiaXQgRXllXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLDAsLjYsLjYpLCByZWd1bGFyKDEyLDAsLjIsLjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNpcmN1aXRcIiwgXCJDaXJjdWl0IExvcmRcIiwgc3Rhcig4LC43NSksIFwieWF3XCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40LHkqLjRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zZW50aW5lbFwiLCBcIlNlbnRpbmVsXCIsIHN0YXIoMTAsLjYyKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC4yMiwuMjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXdpbmdzXCIsIFwiTmlnaHQgV2luZ3NcIiwgW1stMSwtLjhdLFstLjcsLjM1XSxbLS4yNSwuMDVdLFswLC44NV0sWy4yNSwuMDVdLFsuNywuMzVdLFsxLC0uOF0sWy4zNSwtLjM1XSxbMCwtLjA1XSxbLS4zNSwtLjM1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWVtcGVyb3JcIiwgXCJFbXBlcm9yXCIsIHN0YXIoOCwuNDgpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4yNCwuMjQpXSksXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0TmVvblNoYXBlID0gKGlkOiBzdHJpbmcpOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkID0+XG4gIG5lb25TaGFwZUNhdGFsb2cuZmluZChzaGFwZSA9PiBzaGFwZS5pZCA9PT0gaWQpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiwgTmVvblBvaW50IH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uID0gXCJhYm92ZVwiIHwgXCJiZWxvd1wiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVMYWJlbCB7XG4gIHRleHQ6IHN0cmluZztcbiAgcG9zaXRpb24/OiBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogbnVtYmVyO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUluc3RhbmNlIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIGNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgc2NhbGVYPzogbnVtYmVyO1xuICBzY2FsZVk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgcm90YXRpb25ZPzogbnVtYmVyO1xuICByb3RhdGlvblo/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIHNoaWVsZGVkPzogYm9vbGVhbjtcbiAgbGluZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgZW5lcmd5SW50ZW5zaXR5PzogbnVtYmVyO1xuICBlbmVyZ3lDb3ZlcmFnZT86IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ/OiBudW1iZXI7XG4gIGVuZXJneUJsZWVkPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBlbnRyYW5jZVByb2dyZXNzPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZXhwbG9kZVByb2dyZXNzPzogbnVtYmVyO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xufVxuXG50eXBlIFYzID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xudHlwZSBWZXJ0ZXggPSB7XG4gIHA6IFYzOyBuOiBWMzsgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTsgZ2xvdzogbnVtYmVyO1xuICBlZmZlY3Q6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IGZsb2F0c1BlclZlcnRleCA9IDE0O1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IFNjZW5lIHsgYXNwZWN0OiBmMzIsIGNhbWVyYTogZjMyLCB0aW1lOiBmMzIsIHBhZGRpbmc6IGYzMiB9XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbnN0cnVjdCBJbnB1dCB7XG4gIEBsb2NhdGlvbigwKSBwb3NpdGlvbjogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMykgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oNCkgZWZmZWN0OiB2ZWM0Zixcbn1cbnN0cnVjdCBPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGVmZmVjdDogdmVjNGYsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oaW5wdXQ6IElucHV0KSAtPiBPdXRwdXQge1xuICBsZXQgZGVwdGggPSBzY2VuZS5jYW1lcmEgLSBpbnB1dC5wb3NpdGlvbi56O1xuICB2YXIgb3V0cHV0OiBPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKGlucHV0LnBvc2l0aW9uLnggKiA0IC8gc2NlbmUuYXNwZWN0LCBpbnB1dC5wb3NpdGlvbi55ICogNCwgZGVwdGggKiAuMDQ1LCBkZXB0aCk7XG4gIG91dHB1dC5ub3JtYWwgPSBpbnB1dC5ub3JtYWw7XG4gIG91dHB1dC5jb2xvciA9IGlucHV0LmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGlucHV0Lmdsb3c7XG4gIG91dHB1dC5lZmZlY3QgPSBpbnB1dC5lZmZlY3Q7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBub3JtYWwgPSBub3JtYWxpemUoaW5wdXQubm9ybWFsKTtcbiAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0uNDUsIC0uNywgMSkpO1xuICBsZXQgZGlmZnVzZSA9IC4xOCArIG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApICogLjgyO1xuICBsZXQgcmltID0gcG93KDEgLSBhYnMobm9ybWFsLnopLCAyLjIpO1xuICBsZXQgc2lkZSA9IDEgLSBhYnMobm9ybWFsLnopO1xuICBsZXQgcmFyZVN1cmdlID0gcG93KG1heCguMCwgc2luKHNjZW5lLnRpbWUgKiBpbnB1dC5lZmZlY3QueiAqIC44MiArIGlucHV0LmNvbG9yLnIgKiA3LjApKSwgMjIuMClcbiAgICAqIGlucHV0LmVmZmVjdC54ICogaW5wdXQuZWZmZWN0LnkgKiBpbnB1dC5lZmZlY3QudztcbiAgbGV0IGVuZXJneSA9IGlucHV0LmNvbG9yICogKGRpZmZ1c2UgKiAuMTIgKyByaW0gKiBpbnB1dC5nbG93ICogLjM2ICsgc2lkZSAqIC4wOCArIHJhcmVTdXJnZSAqIC43KTtcbiAgcmV0dXJuIHZlYzRmKGVuZXJneSArIHZlYzNmKHJhcmVTdXJnZSAqIC4xOCksIC4xMiArIHNpZGUgKiAuMTIgKyByYXJlU3VyZ2UgKiAuMjgpO1xufVxuQGZyYWdtZW50IGZuIGxpbmVGcmFnbWVudChpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYWxvbmcgPSBpbnB1dC5ub3JtYWwueDtcbiAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5ub3JtYWwueSk7XG4gIGxldCBwaGFzZSA9IGlucHV0Lm5vcm1hbC56O1xuICBsZXQgaW50ZW5zaXR5ID0gaW5wdXQuZWZmZWN0Lng7XG4gIGxldCBjb3ZlcmFnZSA9IGlucHV0LmVmZmVjdC55O1xuICBsZXQgc3BlZWQgPSBpbnB1dC5lZmZlY3QuejtcbiAgbGV0IGJsZWVkID0gaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBwdWxzZUEgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAzMS4wIC0gc2NlbmUudGltZSAqIHNwZWVkICogNS40ICsgcGhhc2UpKSwgMTAuMCk7XG4gIGxldCBwdWxzZUIgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAxMy4wICsgc2NlbmUudGltZSAqIHNwZWVkICogMy4xICsgcGhhc2UgKiAyLjcpKSwgMTguMCk7XG4gIGxldCBub2lzZSA9IHNpbihhbG9uZyAqIDcxLjAgKyBwaGFzZSAqIDguMykgKiAuNSArIC41O1xuICBsZXQgdGhyZXNob2xkID0gMS4wIC0gY292ZXJhZ2U7XG4gIGxldCBlbGVjdHJpY2l0eSA9IHNtb290aHN0ZXAodGhyZXNob2xkLCB0aHJlc2hvbGQgKyAuMTgsIHB1bHNlQSAqIC42NSArIHB1bHNlQiAqIC41NSArIG5vaXNlICogLjE4KTtcbiAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKC4wNiwgLjI4LCBhY3Jvc3MpO1xuICBsZXQgaGFsbyA9IDEuMCAtIHNtb290aHN0ZXAoLjEyLCAxLjAsIGFjcm9zcyk7XG4gIGxldCBzdXJnZSA9IGVsZWN0cmljaXR5ICogaW50ZW5zaXR5O1xuICBsZXQgcHVsc2UgPSAuNzggKyBzaW4oc2NlbmUudGltZSAqIHNwZWVkICogMi4xICsgcGhhc2UpICogLjEzICsgZWxlY3RyaWNpdHkgKiAuMjQ7XG4gIGxldCBjbG91ZCA9IGhhbG8gKiAoLjEzICsgc3VyZ2UgKiAuNTIpO1xuICBsZXQgaG90ID0gaW5wdXQuY29sb3IgKiAocHVsc2UgKyBjbG91ZCAqIDIuMSkgKiBpbnB1dC5nbG93ICsgdmVjM2YoY29yZSAqIHN1cmdlICogMS4zNSk7XG4gIGxldCBhbHBoYSA9IChjb3JlICogKC43MiArIHB1bHNlICogLjIpICsgY2xvdWQgKyAoMS4wIC0gYWNyb3NzKSAqIGJsZWVkICogZWxlY3RyaWNpdHkgKiAuMjQpICogaW5wdXQuZ2xvdztcbiAgcmV0dXJuIHZlYzRmKGhvdCwgY2xhbXAoYWxwaGEsIDAuMCwgMS4wKSk7XG59YDtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3Qgc3ViID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcbmNvbnN0IGNyb3NzID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzFdKmJbMl0tYVsyXSpiWzFdLCBhWzJdKmJbMF0tYVswXSpiWzJdLCBhWzBdKmJbMV0tYVsxXSpiWzBdXTtcbmNvbnN0IG5vcm1hbGl6ZSA9ICh2OiBWMyk6IFYzID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCguLi52KSB8fCAxO1xuICByZXR1cm4gW3ZbMF0gLyBsZW5ndGgsIHZbMV0gLyBsZW5ndGgsIHZbMl0gLyBsZW5ndGhdO1xufTtcbmNvbnN0IHJvdGF0ZSA9IChbeCwgeSwgel06IFYzLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCByejogbnVtYmVyKTogVjMgPT4ge1xuICBsZXQgYSA9IHkgKiBNYXRoLmNvcyhyeCkgLSB6ICogTWF0aC5zaW4ocngpLCBiID0geSAqIE1hdGguc2luKHJ4KSArIHogKiBNYXRoLmNvcyhyeCk7IHkgPSBhOyB6ID0gYjtcbiAgYSA9IHggKiBNYXRoLmNvcyhyeSkgKyB6ICogTWF0aC5zaW4ocnkpOyBiID0gLXggKiBNYXRoLnNpbihyeSkgKyB6ICogTWF0aC5jb3MocnkpOyB4ID0gYTsgeiA9IGI7XG4gIHJldHVybiBbeCAqIE1hdGguY29zKHJ6KSAtIHkgKiBNYXRoLnNpbihyeiksIHggKiBNYXRoLnNpbihyeikgKyB5ICogTWF0aC5jb3MocnopLCB6XTtcbn07XG5cbmZ1bmN0aW9uIG1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCBzY2FsZVggPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVggPz8gMSk7XG4gIGNvbnN0IHNjYWxlWSA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWSA/PyAxKTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgZW50cmFuY2VQcm9ncmVzcyA9IGluc3RhbmNlLmVudHJhbmNlUHJvZ3Jlc3MgPz8gMTtcbiAgY29uc3QgZW50cmFuY2VFYXNlID0gZW50cmFuY2VQcm9ncmVzcyAqIGVudHJhbmNlUHJvZ3Jlc3MgKiAoMyAtIDIgKiBlbnRyYW5jZVByb2dyZXNzKTtcbiAgY29uc3QgZW50cmFuY2VPZmZzZXQgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleDogbnVtYmVyKTogVjMgPT4ge1xuICAgIGlmIChlbnRyYW5jZVByb2dyZXNzID49IDEpIHJldHVybiBbMCwgMCwgMF07XG4gICAgY29uc3Qgc2VlZCA9IE1hdGguc2luKGluZGV4ICogOTEuMTcgKyBwb2ludFswXSAqIDM3LjIgKyBwb2ludFsxXSAqIDUzLjcgKyB6ICogMjkuMSkgKiA0Mzc1OC41NDUzO1xuICAgIGNvbnN0IHJhbmRvbSA9IHNlZWQgLSBNYXRoLmZsb29yKHNlZWQpO1xuICAgIGNvbnN0IGFuZ2xlID0gcmFuZG9tICogTWF0aC5QSSAqIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKGluc3RhbmNlLmVudHJhbmNlTWFnbml0dWRlID8/IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqICgxIC0gZW50cmFuY2VFYXNlKSAqICguMzUgKyByYW5kb20gKiAuNzUpO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsIChyYW5kb20gLSAuNSkgKiByYWRpdXMgKiAuNTVdO1xuICB9O1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlciwgaW5kZXggPSAwKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIGNvbnN0IGUgPSBlbnRyYW5jZU9mZnNldChwb2ludCwgeiwgaW5kZXgpO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApICsgZVswXSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApICsgZVsxXSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApICsgZVsyXV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgY29uc3QgYWRkID0gKGE6IFYzLCBiOiBWMywgYzogVjMsIG5vcm1hbD86IFYzKSA9PiB7XG4gICAgY29uc3QgbiA9IG5vcm1hbCA/PyBub3JtYWxpemUoY3Jvc3Moc3ViKGIsIGEpLCBzdWIoYywgYSkpKTtcbiAgICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gICAgXTtcbiAgICBbYSxiLGNdLmZvckVhY2gocCA9PiBvdXRwdXQucHVzaCh7IHAsIG4sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlLCBlZmZlY3QgfSkpO1xuICB9O1xuICBjb25zdCBmcm9udCA9IHNoYXBlLnBvaW50cy5tYXAoKHBvaW50LCBpbmRleCkgPT4gbW92ZShwb2ludCwgZGVwdGggLyAyLCBpbmRleCkpO1xuICBjb25zdCBiYWNrID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCAtZGVwdGggLyAyLCBpbmRleCArIHNoYXBlLnBvaW50cy5sZW5ndGgpKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBmcm9udC5sZW5ndGggLSAxOyBpKyspIGFkZChmcm9udFswXSwgZnJvbnRbaV0sIGZyb250W2kgKyAxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYmFjay5sZW5ndGggLSAxOyBpKyspIGFkZChiYWNrWzBdLCBiYWNrW2kgKyAxXSwgYmFja1tpXSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IChpICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tpXSwgYmFja1tuZXh0XSk7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW25leHRdLCBmcm9udFtuZXh0XSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBlZGdlTWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlcik6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlWCwgLXBvaW50WzFdICogc2NhbGVZLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCldO1xuICB9O1xuICBjb25zdCBleHBsb2RlID0gKGE6IFYzLCBiOiBWMywgaW5kZXg6IG51bWJlcik6IFtWMywgVjNdID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwLCAxIC0gZW50cmFuY2VFYXNlKTtcbiAgICBpZiAoIXByb2dyZXNzKSByZXR1cm4gW2EsIGJdO1xuICAgIGNvbnN0IG14ID0gKGFbMF0gKyBiWzBdKSAvIDIgLSAoaW5zdGFuY2UueCA/PyAwKSwgbXkgPSAoYVsxXSArIGJbMV0pIC8gMiAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QobXgsIG15KSB8fCAxO1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIGNvbnN0IHNwZWVkID0gbWFnbml0dWRlICogKC40NSArIChNYXRoLnNpbihpbmRleCAqIDkxLjE3KSAqIC41ICsgLjUpICogLjU1KTtcbiAgICBjb25zdCBkeCA9IG14IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCwgZHkgPSBteSAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQgKyBwcm9ncmVzcyAqIHByb2dyZXNzICogLjE4O1xuICAgIGNvbnN0IGFuZ2xlID0gcHJvZ3Jlc3MgKiAoaW5kZXggJSAyID8gMSA6IC0xKSAqIDIuNDtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAocDogVjMpOiBWMyA9PiB7XG4gICAgICBjb25zdCB4ID0gcFswXSAtIChpbnN0YW5jZS54ID8/IDApLCB5ID0gcFsxXSAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgICAgcmV0dXJuIFt4ICogTWF0aC5jb3MoYW5nbGUpIC0geSAqIE1hdGguc2luKGFuZ2xlKSArIChpbnN0YW5jZS54ID8/IDApICsgZHgsIHggKiBNYXRoLnNpbihhbmdsZSkgKyB5ICogTWF0aC5jb3MoYW5nbGUpICsgKGluc3RhbmNlLnkgPz8gMCkgKyBkeSwgcFsyXV07XG4gICAgfTtcbiAgICByZXR1cm4gW3RyYW5zZm9ybShhKSwgdHJhbnNmb3JtKGIpXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBsZXQgZGlzdGFuY2UgPSAwO1xuICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgXTtcbiAgY29uc3QgYWRkTGluZSA9IChhOiBWMywgYjogVjMsIHBoYXNlOiBudW1iZXIsIHdpZHRoU2NhbGUgPSAxLCBvcGFjaXR5ID0gMSkgPT4ge1xuICAgIFthLCBiXSA9IGV4cGxvZGUoYSwgYiwgTWF0aC5mbG9vcihkaXN0YW5jZSAqIDEwMCkgKyBNYXRoLmZsb29yKHBoYXNlICogMTApKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAuMDAxO1xuICAgIGNvbnN0IHdpZHRoID0gKGluc3RhbmNlLmxpbmVUaGlja25lc3MgPz8gMSkgKiAuMDE4ICogd2lkdGhTY2FsZTtcbiAgICBjb25zdCBveCA9IC1keSAvIGxlbmd0aCAqIHdpZHRoLCBveSA9IGR4IC8gbGVuZ3RoICogd2lkdGg7XG4gICAgY29uc3QgYTA6IFYzID0gW2FbMF0gLSBveCwgYVsxXSAtIG95LCBhWzJdXSwgYTE6IFYzID0gW2FbMF0gKyBveCwgYVsxXSArIG95LCBhWzJdXTtcbiAgICBjb25zdCBiMDogVjMgPSBbYlswXSAtIG94LCBiWzFdIC0gb3ksIGJbMl1dLCBiMTogVjMgPSBbYlswXSArIG94LCBiWzFdICsgb3ksIGJbMl1dO1xuICAgIGNvbnN0IHN0YXJ0ID0gZGlzdGFuY2UgKiAyLjQsIGVuZCA9IChkaXN0YW5jZSArIGxlbmd0aCkgKiAyLjQ7XG4gICAgY29uc3QgcHVzaCA9IChwOiBWMywgYWxvbmc6IG51bWJlciwgYWNyb3NzOiBudW1iZXIpID0+XG4gICAgICBvdXRwdXQucHVzaCh7IHAsIG46IFthbG9uZywgYWNyb3NzLCBwaGFzZV0sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIG9wYWNpdHkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqIGVudHJhbmNlRWFzZSAqICgxICsgTWF0aC5zaW4oKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIE1hdGguUEkpICogKGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqIDIuMikgKiAoMSAtIChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiAuNyksIGVmZmVjdCB9KTtcbiAgICBwdXNoKGEwLHN0YXJ0LC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMCxlbmQsLTEpO1xuICAgIHB1c2goYjAsZW5kLC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMSxlbmQsMSk7XG4gICAgZGlzdGFuY2UgKz0gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBhZGRMb29wID0gKHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sIHo6IG51bWJlciwgcGhhc2U6IG51bWJlcikgPT5cbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIHopLCBtb3ZlKHBvaW50c1soaW5kZXggKyAxKSAlIHBvaW50cy5sZW5ndGhdLCB6KSwgcGhhc2UgKyBpbmRleCAqIC43MykpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgZGVwdGggLyAyLCAuMyk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCAtZGVwdGggLyAyLCAyLjEpO1xuICBzaGFwZS5ob2xlcz8uZm9yRWFjaCgoaG9sZSwgaW5kZXgpID0+IHtcbiAgICBhZGRMb29wKGhvbGUsIGRlcHRoIC8gMiArIC4wMDIsIDMuNyArIGluZGV4KTtcbiAgICBhZGRMb29wKGhvbGUsIC1kZXB0aCAvIDIgLSAuMDAyLCA1LjIgKyBpbmRleCk7XG4gIH0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIC1kZXB0aCAvIDIpLCBtb3ZlKHBvaW50LCBkZXB0aCAvIDIpLCA2LjEgKyBpbmRleCkpO1xuICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwICogKGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEpO1xuICBjb25zdCBicmFuY2hTdHJlbmd0aCA9IChpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSkgKiAoaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyKTtcbiAgY29uc3QgcmFuZG9tID0gKHNlZWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTggKyBzaGFwZS5wb2ludHMubGVuZ3RoICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XG4gICAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGlhbnM6IG51bWJlcik6IE5lb25Qb2ludCA9PiBbXG4gICAgeCAqIE1hdGguY29zKHJhZGlhbnMpIC0geSAqIE1hdGguc2luKHJhZGlhbnMpLFxuICAgIHggKiBNYXRoLnNpbihyYWRpYW5zKSArIHkgKiBNYXRoLmNvcyhyYWRpYW5zKSxcbiAgXTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlID0gTWF0aC5mbG9vcih0aW1lICogMi4zNSArIGluZGV4ICogLjYxKTtcbiAgICBjb25zdCBhZ2UgPSB0aW1lICogMi4zNSArIGluZGV4ICogLjYxIC0gY3ljbGU7XG4gICAgY29uc3Qgc2VlZCA9IGN5Y2xlICogMzcuMSArIGluZGV4ICogMTEuNztcbiAgICBjb25zdCBhY3RpdmVEdXJhdGlvbiA9IC4xOCArIHJhbmRvbShzZWVkICsgMSkgKiAuMjU7XG4gICAgY29uc3QgaGF6ZUR1cmF0aW9uID0gTWF0aC5taW4oMSwgYWN0aXZlRHVyYXRpb24gKyAuMjggKyByYW5kb20oc2VlZCArIDIpICogLjIyKTtcbiAgICBjb25zdCBicmFuY2hBY3RpdmUgPSBhZ2UgPCBhY3RpdmVEdXJhdGlvbjtcbiAgICBjb25zdCBoYXplQWN0aXZlID0gYWdlIDwgaGF6ZUR1cmF0aW9uO1xuICAgIGlmICgoIWJyYW5jaEFjdGl2ZSAmJiAhaGF6ZUFjdGl2ZSkgfHwgcmFuZG9tKHNlZWQgKyAzKSA+IE1hdGgubWluKC43OCwgYnJhbmNoU3RyZW5ndGggKiAuNSkpIHJldHVybjtcbiAgICBjb25zdCBuZXh0ID0gc2hhcGUucG9pbnRzWyhpbmRleCArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aF07XG4gICAgY29uc3QgdCA9IC4xNiArIHJhbmRvbShzZWVkICsgNCkgKiAuNjg7XG4gICAgY29uc3QgYmFzZTogTmVvblBvaW50ID0gW3BvaW50WzBdICsgKG5leHRbMF0gLSBwb2ludFswXSkgKiB0LCBwb2ludFsxXSArIChuZXh0WzFdIC0gcG9pbnRbMV0pICogdF07XG4gICAgY29uc3QgdHggPSBuZXh0WzBdIC0gcG9pbnRbMF0sIHR5ID0gbmV4dFsxXSAtIHBvaW50WzFdLCB0bCA9IE1hdGguaHlwb3QodHgsIHR5KSB8fCAxO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJhbmRvbShzZWVkICsgNSkgPiAuNSA/IDEgOiAtMTtcbiAgICBjb25zdCBwZXJwZW5kaWN1bGFyOiBOZW9uUG9pbnQgPSBbLXR5IC8gdGwgKiBkaXJlY3Rpb24sIHR4IC8gdGwgKiBkaXJlY3Rpb25dO1xuICAgIGNvbnN0IGZpcnN0Sml0dGVyID0gKDEwICsgcmFuZG9tKHNlZWQgKyA2KSAqIDEwKSAqIE1hdGguUEkgLyAxODAgKiAocmFuZG9tKHNlZWQgKyA3KSA+IC41ID8gMSA6IC0xKTtcbiAgICBsZXQgaGVhZGluZyA9IHJvdGF0ZWQocGVycGVuZGljdWxhclswXSwgcGVycGVuZGljdWxhclsxXSwgZmlyc3RKaXR0ZXIpO1xuICAgIGNvbnN0IHNlZ21lbnRDb3VudCA9IDEgKyBNYXRoLmZsb29yKHJhbmRvbShzZWVkICsgOCkgKiAzKTtcbiAgICBjb25zdCBwb2ludHM6IE5lb25Qb2ludFtdID0gW2Jhc2VdO1xuICAgIGZvciAobGV0IHNlZ21lbnQgPSAwOyBzZWdtZW50IDwgc2VnbWVudENvdW50OyBzZWdtZW50KyspIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IC4wNTUgKyByYW5kb20oc2VlZCArIDEwICsgc2VnbWVudCkgKiAuMDk1O1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzWzBdICsgaGVhZGluZ1swXSAqIGxlbmd0aCwgcHJldmlvdXNbMV0gKyBoZWFkaW5nWzFdICogbGVuZ3RoXSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoMjAgKyByYW5kb20oc2VlZCArIDIwICsgc2VnbWVudCkgKiA0MCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaGVhZGluZyA9IHJvdGF0ZWQoaGVhZGluZ1swXSwgaGVhZGluZ1sxXSwgb2Zmc2V0ICogKHJhbmRvbShzZWVkICsgMzAgKyBzZWdtZW50KSA+IC41ID8gMSA6IC0xKSk7XG4gICAgfVxuICAgIGlmIChoYXplQWN0aXZlKSB7XG4gICAgICBjb25zdCBmYWRlID0gMSAtIE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAvIE1hdGgubWF4KC4wMDEsIGhhemVEdXJhdGlvbiAtIGFjdGl2ZUR1cmF0aW9uKTtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pICogLjAzNTtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZW5kID0gcG9pbnRzW3NlZ21lbnQgKyAxXTtcbiAgICAgICAgY29uc3QgaGF6ZVN0YXJ0OiBOZW9uUG9pbnQgPSBbc3RhcnRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIHN0YXJ0WzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgY29uc3QgaGF6ZUVuZDogTmVvblBvaW50ID0gW2VuZFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgZW5kWzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgYWRkTGluZShtb3ZlKGhhemVTdGFydCwgZGVwdGggLyAyICsgLjAwMiksIG1vdmUoaGF6ZUVuZCwgZGVwdGggLyAyICsgLjAwMiksIDMxICsgc2VlZCArIHNlZ21lbnQsIDEuNDUgKyBmYWRlICogLjU1LCBmYWRlICogLjM0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYnJhbmNoQWN0aXZlKSB7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGFkZExpbmUobW92ZShzdGFydCwgZGVwdGggLyAyICsgLjAwNiksIG1vdmUocG9pbnRzW3NlZ21lbnQgKyAxXSwgZGVwdGggLyAyICsgLjAwNiksIDExICsgc2VlZCArIHNlZ21lbnQsIC40Mik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgY2xhc3MgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNsaW5lUGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2RlcHRoOiBHUFVUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICNsYWJlbExheWVyOiBIVE1MRGl2RWxlbWVudDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50ICYmIGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIuY2xhc3NOYW1lID0gXCJuZW9uLXNoYXBlLWxhYmVsLWxheWVyXCI7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaW5zZXQ6XCIwXCIsIHBvaW50ZXJFdmVudHM6XCJub25lXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIgfSk7XG4gICAgcGFyZW50Py5hcHBlbmQodGhpcy4jbGFiZWxMYXllcik7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgZXh0cnVkZWQgc2hhcGUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIsIGN1bGxNb2RlOiBcImJhY2tcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogZmFsc2UsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNsaW5lUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJsaW5lRnJhZ21lbnRcIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICAgIH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3Rvcnkgc2hhcGUgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZlcnRpY2VzID0gaW5zdGFuY2VzLmZsYXRNYXAobWVzaCk7XG4gICAgY29uc3QgZWRnZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChlZGdlTWVzaCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICBjb25zdCBlZGdlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZWRnZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGRhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgZWRnZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBlZGdlRGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBkYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgY29uc3QgZWRnZUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGVkZ2VEYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGlmIChlZGdlRGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGVkZ2VCdWZmZXIsIDAsIGVkZ2VEYXRhKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIDUsIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgMF0pKTtcbiAgICBjb25zdCBiaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGxpbmVCaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI2xpbmVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3sgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLCBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsIHN0b3JlT3A6IFwic3RvcmVcIiB9XSxcbiAgICAgIGRlcHRoU3RlbmNpbEF0dGFjaG1lbnQ6IHsgdmlldzogdGhpcy4jZGVwdGghLmNyZWF0ZVZpZXcoKSwgZGVwdGhDbGVhclZhbHVlOiAxLCBkZXB0aExvYWRPcDogXCJjbGVhclwiLCBkZXB0aFN0b3JlT3A6IFwic3RvcmVcIiB9LFxuICAgIH0pO1xuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIHZlcnRleEJ1ZmZlcik7IHBhc3MuZHJhdyh2ZXJ0aWNlcy5sZW5ndGgpOyB9XG4gICAgaWYgKGVkZ2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI2xpbmVQaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGxpbmVCaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCBlZGdlQnVmZmVyKTsgcGFzcy5kcmF3KGVkZ2VzLmxlbmd0aCk7IH1cbiAgICBwYXNzLmVuZCgpOyB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgICB0aGlzLiNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkudGhlbigoKSA9PiB7IHZlcnRleEJ1ZmZlci5kZXN0cm95KCk7IGVkZ2VCdWZmZXIuZGVzdHJveSgpOyB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHsgdGhpcy4jbGFiZWxMYXllci5yZW1vdmUoKTsgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTsgdGhpcy4jc2NlbmVCdWZmZXIuZGVzdHJveSgpOyBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpOyB9XG4gICNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7XG4gICAgICBsZWZ0OiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0fXB4YCxcbiAgICAgIHRvcDogYCR7dGhpcy5jYW52YXMub2Zmc2V0VG9wfXB4YCxcbiAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICB3aWR0aDogYCR7dGhpcy5jYW52YXMuY2xpZW50V2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHR9cHhgLFxuICAgIH0pO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIucmVwbGFjZUNoaWxkcmVuKC4uLmluc3RhbmNlcy5mbGF0TWFwKGluc3RhbmNlID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2UubGFiZWw/LnRleHQgfHwgKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgPD0gMCkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICAgICAgY29uc3QgeCA9IDUwICsgKGluc3RhbmNlLnggPz8gMCkgKiA0MCAvICh0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCB5ID0gNTAgLSAoaW5zdGFuY2UueSA/PyAwKSAqIDQwO1xuICAgICAgY29uc3Qgc2hhcGVSYWRpdXMgPSBzY2FsZSAqIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIC4yO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2hhcGVSYWRpdXMgKyAoaW5zdGFuY2UubGFiZWwub2Zmc2V0ID8/IDgpICsgKGluc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4KSAqIC41O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnN0YW5jZS5sYWJlbC5wb3NpdGlvbiA/PyBcImFib3ZlXCI7XG4gICAgICBsZXQgdHggPSAwLCB0eSA9IDA7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYWJvdmVcIikgdHkgPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImJlbG93XCIpIHR5ID0gb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImxlZnRcIikgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHR4ID0gb2Zmc2V0O1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGluc3RhbmNlLmxhYmVsLnRleHQ7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OmAke3h9JWAsIHRvcDpgJHt5fSVgLCB0cmFuc2Zvcm06YHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3R4fXB4KSxjYWxjKC01MCUgKyAke3R5fXB4KSlgLFxuICAgICAgICBjb2xvcjppbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvciwgZm9udEZhbWlseTppbnN0YW5jZS5sYWJlbC5mb250RmFtaWx5ID8/IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFNpemU6YCR7aW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTh9cHhgLCBmb250V2VpZ2h0OlN0cmluZyhpbnN0YW5jZS5sYWJlbC5mb250V2VpZ2h0ID8/IDYwMCksXG4gICAgICAgIHRleHRTaGFkb3c6YDAgMCA1cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn0sMCAwIDE0cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn1gLCB3aGl0ZVNwYWNlOlwibm93cmFwXCIsXG4gICAgICAgIG9wYWNpdHk6U3RyaW5nKGluc3RhbmNlLm9wYWNpdHkgPz8gMSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbZWxlbWVudF07XG4gICAgfSkpO1xuICB9XG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuI2xvZ2ljYWxTaXplO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCB8fCAhdGhpcy4jZGVwdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuI2RlcHRoICYmIHRoaXMuY2FudmFzLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlLCBOZW9uU2hhcGVMYWJlbCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgZW51bSBOZW9uU2hhcGVEaXNwb3NhbCB7XG4gIEZhZGVPdXQgPSBcImZhZGVPdXRcIixcbiAgRGlzYXBwZWFyID0gXCJkaXNhcHBlYXJcIixcbiAgRXhwbG9kZSA9IFwiZXhwbG9kZVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZVZlY3RvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUltcGFjdCB7XG4gIGRpcmVjdGlvbjogTmVvblNoYXBlVmVjdG9yO1xuICBtYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVBY3Rvck9wdGlvbnMge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgdmVsb2NpdHk/OiBQYXJ0aWFsPE5lb25TaGFwZVZlY3Rvcj47XG4gIHNjYWxlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw/OiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbj86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uU2hhcGVBY3RvciB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICB2ZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yO1xuICBzY2FsZTogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw6IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlOiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb246IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU6IG51bWJlcjtcbiAgcm90YXRpb25YID0gMDtcbiAgcm90YXRpb25ZID0gMDtcbiAgcm90YXRpb25aID0gMDtcbiAgZGlzcG9zZWQgPSBmYWxzZTtcbiAgI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAjZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICNpbXBhY3RWZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG4gICNpbXBhY3RSb3RhdGlvbjogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblNoYXBlQWN0b3JPcHRpb25zKSB7XG4gICAgdGhpcy5zaGFwZSA9IG9wdGlvbnMuc2hhcGU7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54ID8/IDA7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55ID8/IDA7XG4gICAgdGhpcy56ID0gb3B0aW9ucy56ID8/IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogb3B0aW9ucy52ZWxvY2l0eT8ueCA/PyAwLCB5OiBvcHRpb25zLnZlbG9jaXR5Py55ID8/IDAgfTtcbiAgICB0aGlzLnNjYWxlID0gb3B0aW9ucy5zY2FsZSA/PyAxO1xuICAgIHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZGlzcG9zYWwgPSBvcHRpb25zLmRpc3Bvc2FsID8/IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQ7XG4gICAgdGhpcy5leHBsb2RlTWFnbml0dWRlID0gb3B0aW9ucy5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBvcHRpb25zLmVudHJhbmNlRHVyYXRpb24gPz8gLjQ1O1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBvcHRpb25zLmVudHJhbmNlTWFnbml0dWRlID8/IC41NTtcbiAgfVxuXG4gIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlciwgeiA9IHRoaXMueik6IHRoaXMge1xuICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRWZWxvY2l0eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IHg7IHRoaXMudmVsb2NpdHkueSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbXBhY3QoeyBkaXJlY3Rpb24sIG1hZ25pdHVkZSB9OiBOZW9uU2hhcGVJbXBhY3QpOiB0aGlzIHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgICBjb25zdCB4ID0gZGlyZWN0aW9uLnggLyBsZW5ndGgsIHkgPSBkaXJlY3Rpb24ueSAvIGxlbmd0aDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICs9IHggKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSArPSB5ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKz0geSAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgLT0geCAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzcG9zZShtb2RlID0gdGhpcy5kaXNwb3NhbCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zYWwgPSBtb2RlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIgPyAxIDogLjAwMDE7XG4gICAgaWYgKG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhcikgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbnRlcihkdXJhdGlvbiA9IHRoaXMuZW50cmFuY2VEdXJhdGlvbiwgbWFnbml0dWRlID0gdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSk6IHRoaXMge1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IE1hdGgubWF4KC4wMDEsIGR1cmF0aW9uKTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gbWFnbml0dWRlO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnZW5lcmF0ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gKHRoaXMudmVsb2NpdHkueCArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LngpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSAodGhpcy52ZWxvY2l0eS55ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblggKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWSArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICogZGVsdGFTZWNvbmRzO1xuICAgIGNvbnN0IGRhbXBpbmcgPSBNYXRoLmV4cCgtNyAqIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICo9IGRhbXBpbmc7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICo9IGRhbXBpbmc7XG4gICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPiAwICYmICF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyAuODUgOiAuNTU7XG4gICAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIGR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID49IDEpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy4jZW50cmFuY2VQcm9ncmVzcyA8IDEpIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNlbnRyYW5jZVByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gdGhpcy5lbnRyYW5jZUR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckluc3RhbmNlKG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgICBjb25zdCBmYWRlID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dCA/IDEgLSB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMTtcbiAgICByZXR1cm4ge1xuICAgICAgc2hhcGU6IHRoaXMuc2hhcGUsIHg6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnosIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgcm90YXRpb25YOiB0aGlzLnJvdGF0aW9uWCwgcm90YXRpb25ZOiB0aGlzLnJvdGF0aW9uWSwgcm90YXRpb25aOiB0aGlzLnJvdGF0aW9uWixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLCBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogdGhpcy5kaXNwb3NlZCA/IDAgOiBmYWRlLFxuICAgICAgZW50cmFuY2VQcm9ncmVzczogdGhpcy4jZW50cmFuY2VQcm9ncmVzcyxcbiAgICAgIGVudHJhbmNlTWFnbml0dWRlOiB0aGlzLmVudHJhbmNlTWFnbml0dWRlLFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiB0aGlzLmV4cGxvZGVNYWduaXR1ZGUsXG4gICAgICAuLi5vdmVycmlkZXMsXG4gICAgfTtcbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25QcmltaXRpdmVTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImJvbHRcIiB8IFwib3JiXCIgfCBcInJpbmdcIiB8IFwic3BhcmtcIiB8IFwiZGlhbW9uZFwiIHwgXCJwZW50YWdvblwiIHwgXCJsaW5lXCIgfCBcImFyY1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25QcmltaXRpdmUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcj86IHN0cmluZztcbiAgZ2xvdz86IG51bWJlcjtcbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICB0ZXh0dXJlPzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoPzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgYXJjU3RhcnQ/OiBudW1iZXI7XG4gIGFyY0VuZD86IG51bWJlcjtcbiAgc2hhcGU/OiBOZW9uUHJpbWl0aXZlU2hhcGU7XG59XG5cbmNvbnN0IG1heFByaW1pdGl2ZXMgPSAxMDI0O1xuY29uc3QgZmxvYXRzUGVyUHJpbWl0aXZlID0gMjA7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi8gYFxuc3RydWN0IFNjZW5lIHsgcmVzb2x1dGlvbjogdmVjMmYsIGNvdW50OiBmMzIsIHRpbWU6IGYzMiB9XG5zdHJ1Y3QgUHJpbWl0aXZlIHtcbiAgcG9zaXRpb246IHZlYzJmLFxuICBzaXplOiB2ZWMyZixcbiAgY29sb3I6IHZlYzRmLFxuICBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIGdsb3c6IGYzMixcbiAgaW50ZW5zaXR5OiBmMzIsXG4gIHNoYXBlOiBmMzIsXG4gIHRleHR1cmU6IGYzMixcbiAgcmltSW50ZW5zaXR5OiBmMzIsXG4gIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG4gIHBhZGRpbmc6IHZlYzJmLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGl0ZW1zOiBhcnJheTxQcmltaXRpdmU+O1xuXG5zdHJ1Y3QgVmVydGV4T3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oNCkgc2hhcGU6IGYzMixcbiAgQGxvY2F0aW9uKDUpIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDYpIHRleHR1cmU6IGYzMixcbiAgQGxvY2F0aW9uKDcpIHJpbUludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oOCkgc2hhZG93U3RyZW5ndGg6IGYzMixcbn1cblxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmVydGV4OiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBWZXJ0ZXhPdXRwdXQge1xuICB2YXIgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGl0ZW0gPSBpdGVtc1tpbnN0YW5jZV07XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmVydGV4XTtcbiAgdmFyIHBpeGVsT2Zmc2V0ID0gbG9jYWwgKiBpdGVtLnNpemU7XG4gIGlmIChpdGVtLnRleHR1cmUgIT0gMCkge1xuICAgIGxldCBjID0gY29zKGl0ZW0udGV4dHVyZSk7XG4gICAgbGV0IHMgPSBzaW4oaXRlbS50ZXh0dXJlKTtcbiAgICBwaXhlbE9mZnNldCA9IHZlYzJmKHBpeGVsT2Zmc2V0LnggKiBjIC0gcGl4ZWxPZmZzZXQueSAqIHMsIHBpeGVsT2Zmc2V0LnggKiBzICsgcGl4ZWxPZmZzZXQueSAqIGMpO1xuICB9XG4gIGxldCBwaXhlbCA9IGl0ZW0ucG9zaXRpb24gKyBwaXhlbE9mZnNldDtcbiAgdmFyIG91dHB1dDogVmVydGV4T3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihwaXhlbC54IC8gc2NlbmUucmVzb2x1dGlvbi54ICogMiAtIDEsIDEgLSBwaXhlbC55IC8gc2NlbmUucmVzb2x1dGlvbi55ICogMiwgMCwgMSk7XG4gIG91dHB1dC5sb2NhbCA9IGxvY2FsO1xuICBvdXRwdXQuY29sb3IgPSBpdGVtLmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGl0ZW0uZ2xvdztcbiAgb3V0cHV0LmludGVuc2l0eSA9IGl0ZW0uaW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhcGUgPSBpdGVtLnNoYXBlO1xuICBvdXRwdXQuc2Vjb25kYXJ5Q29sb3IgPSBpdGVtLnNlY29uZGFyeUNvbG9yO1xuICBvdXRwdXQudGV4dHVyZSA9IGl0ZW0udGV4dHVyZTtcbiAgb3V0cHV0LnJpbUludGVuc2l0eSA9IGl0ZW0ucmltSW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhZG93U3RyZW5ndGggPSBpdGVtLnNoYWRvd1N0cmVuZ3RoO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBWZXJ0ZXhPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDcuNSkge1xuICAgIGxldCByYWRpdXMgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICAgIGxldCBhbmdsZSA9IGF0YW4yKGlucHV0LmxvY2FsLnksIGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhbmdsZSA8IGlucHV0LnJpbUludGVuc2l0eSB8fCBhbmdsZSA+IGlucHV0LnNoYWRvd1N0cmVuZ3RoIHx8IHJhZGl1cyA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGxpbmVEaXN0YW5jZSA9IGFicyhyYWRpdXMgLSAwLjc4KTtcbiAgICBpZiAobGluZURpc3RhbmNlID4gMC4xNikgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDEyLCAwLjAzOCwgbGluZURpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMDI1LCAwLjE2LCBsaW5lRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAyMy4wIC0gc2NlbmUudGltZSAqIDguNSkpLCAxNi4wKTtcbiAgICBsZXQgcHVsc2VCID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDExLjAgKyBzY2VuZS50aW1lICogNS4zICsgMS43KSksIDI0LjApO1xuICAgIGxldCBncmFpbiA9IHNpbihhbmdsZSAqIDcxLjAgKyBzY2VuZS50aW1lICogMy4xKSAqIDAuNSArIDAuNTtcbiAgICBsZXQgc3VyZ2UgPSBzbW9vdGhzdGVwKDAuNzIsIDAuOTQsIHB1bHNlQSAqIDAuNyArIHB1bHNlQiAqIDAuNjUgKyBncmFpbiAqIDAuMTIpO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjg4ICsgc3VyZ2UgKiAwLjY1KSArIGhhbG8gKiAoMC4yMiArIHN1cmdlICogMC45KSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHN1cmdlICogMC45KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDYuNSkge1xuICAgIGxldCBhbG9uZyA9IGlucHV0LmxvY2FsLnk7XG4gICAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYWNyb3NzID4gMS4wIHx8IGFicyhhbG9uZykgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjA4LCAwLjI0LCBhY3Jvc3MpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4xMiwgMS4wLCBhY3Jvc3MpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZEZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuNzIsIDEuMCwgYWJzKGFsb25nKSk7XG4gICAgbGV0IHRyYXZlbCA9IHBvdyhtYXgoMC4wLCBzaW4oYWxvbmcgKiAyNC4wIC0gc2NlbmUudGltZSAqIDguMCArIGlucHV0LnRleHR1cmUpKSwgMTQuMCk7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuNzUgKyB0cmF2ZWwgKiAwLjUpICsgaGFsbyAqICgwLjIgKyB0cmF2ZWwgKiAwLjU1KSkgKiBlbmRGYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiB0cmF2ZWwgKiAwLjc1KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDUuNSkge1xuICAgIC8vIFBlbnRhZ29uIFNERlxuICAgIC8vIGxvY2FsIGlzIGluIFstMSwgMV0gcmFuZ2UuIExldCdzIGZpbmQgcGVudGFnb24gZGlzdGFuY2UuXG4gICAgbGV0IHB4ID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGxldCBweSA9IGlucHV0LmxvY2FsLnk7XG4gICAgLy8gUGVudGFnb24gY29uc3RhbnRzIGZvciB2ZXJ0aWNlcy9lZGdlc1xuICAgIGxldCBrID0gdmVjM2YoLTAuODA5MDE2OTk0LCAwLjU4Nzc4NTI1MiwgMS4zNzYzODE5Mik7IC8vIGNvcy9zaW4gb2YgNzIsIHBsdXMgaGVpZ2h0IGZhY3RvclxuICAgIC8vIFByb2plY3QvTWlycm9yIGFjcm9zcyB0aGUgc3ltbWV0cnkgYXhlcyBvZiByZWd1bGFyIHBlbnRhZ29uXG4gICAgdmFyIHAgPSB2ZWMyZihweCwgcHkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoLWsueCwgay55KSwgcCksIDApICogdmVjMmYoLWsueCwgay55KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKGsueCwgay55KSwgcCksIDApICogdmVjMmYoay54LCBrLnkpO1xuICAgIHAueCA9IHAueCAtIGNsYW1wKHAueCwgLWsueiAqIDAuNSwgay56ICogMC41KTtcbiAgICBsZXQgZCA9IGxlbmd0aChwIC0gdmVjMmYoMCwgMC43MikpICogc2lnbihwLnkgLSAwLjcyKTtcbiAgICAvLyBNYXAgZCB0byBhIG5vcm1hbGl6ZWQgcmFkaXVzIHNjYWxlXG4gICAgbGV0IHNjYWxlRCA9IGQgKyAwLjM1OyAvLyBvZmZzZXQgcGVudGFnb24gdG8gZml0IGJvdW5kcyBuaWNlbHlcbiAgICBpZiAoc2NhbGVEID4gMC44KSB7IGRpc2NhcmQ7IH1cbiAgICBcbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNSwgMC42NSwgc2NhbGVEKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjQ1LCAwLjUzLCBzY2FsZUQpICogKDEgLSBzbW9vdGhzdGVwKDAuNjUsIDAuNzUsIHNjYWxlRCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoLTAuMiwgMC41LCBzY2FsZUQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuNTUsIDAuOCwgc2NhbGVEKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM4ICsgYm9yZGVyICogMS4zNTtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjc1ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNDUpICogZmlsbCAqIDAuMzU7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuNDtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNC41KSB7XG4gICAgbGV0IGQgPSBhYnMoaW5wdXQubG9jYWwueCkgKyBhYnMoaW5wdXQubG9jYWwueSk7XG4gICAgaWYgKGQgPiAxLjA4KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNzgsIDAuOTIsIGQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNzIsIDAuODIsIGQpICogKDEgLSBzbW9vdGhzdGVwKDAuOTIsIDEuMDIsIGQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKDAuMCwgMC43OCwgZCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC44MiwgMS4wOCwgZCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zNSArIGJvcmRlciAqIDEuMjtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS42ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNSkgKiBmaWxsICogMC4zODtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zNTtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMS41KSB7XG4gICAgbGV0IHIyID0gZG90KGlucHV0LmxvY2FsLCBpbnB1dC5sb2NhbCk7XG4gICAgaWYgKHIyID4gMSkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IHogPSBzcXJ0KG1heCgwLCAxIC0gcjIpKTtcbiAgICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKHZlYzNmKGlucHV0LmxvY2FsLngsIC1pbnB1dC5sb2NhbC55LCB6KSk7XG4gICAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0wLjU1LCAtMC43LCAwLjkpKTtcbiAgICBsZXQgZGlmZnVzZSA9IG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApO1xuICAgIGxldCByaW0gPSBwb3coMSAtIHosIDIuMikgKiBpbnB1dC5yaW1JbnRlbnNpdHk7XG4gICAgbGV0IHNoYWRvdyA9IG1peCgxIC0gaW5wdXQuc2hhZG93U3RyZW5ndGgsIDEsIHNtb290aHN0ZXAoLTAuNjUsIDAuNDUsIGRvdChub3JtYWwueHksIGxpZ2h0Lnh5KSkpO1xuICAgIGxldCBncmFpbiA9IHNpbihpbnB1dC5sb2NhbC54ICogMjMgKyBpbnB1dC5sb2NhbC55ICogMTcpICogc2luKGlucHV0LmxvY2FsLnkgKiAzMSAtIGlucHV0LmxvY2FsLnggKiAxMSk7XG4gICAgbGV0IHRleHR1cmUgPSAxICsgZ3JhaW4gKiBpbnB1dC50ZXh0dXJlICogMC4yMjtcbiAgICBsZXQgc3BlY3VsYXIgPSBwb3cobWF4KGRvdChyZWZsZWN0KC1saWdodCwgbm9ybWFsKSwgdmVjM2YoMCwwLDEpKSwgMCksIDI4KSAqIDEuODtcbiAgICBsZXQgYm9keSA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZGlmZnVzZSAqIDAuOCArIDAuMikgKiBzaGFkb3cgKiB0ZXh0dXJlO1xuICAgIGxldCBoYWxvID0gcG93KG1heCgwLCAxIC0gbGVuZ3RoKGlucHV0LmxvY2FsKSksIDAuMzUpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcmdiID0gYm9keSAqICgwLjM4ICsgZGlmZnVzZSAqIDAuOTUpICsgaW5wdXQuY29sb3IucmdiICogcmltICsgdmVjM2Yoc3BlY3VsYXIpICsgaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMztcbiAgICByZXR1cm4gdmVjNGYocmdiICogaW5wdXQuaW50ZW5zaXR5LCAxKTtcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICBpZiAoaW5wdXQuc2hhcGUgPiAzLjUpIHtcbiAgICBsZXQgYXhpcyA9IG1pbihhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gICAgbGV0IGFybSA9IDEgLSBzbW9vdGhzdGVwKDAuMDQsIDAuMTgsIGF4aXMpO1xuICAgIGxldCBmYWRlID0gMSAtIHNtb290aHN0ZXAoMC4yLCAxLCBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpKTtcbiAgICBsZXQgZW5lcmd5ID0gYXJtICogZmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBhcm0pICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDIuNSkge1xuICAgIGxldCByaW5nRGlzdGFuY2UgPSBhYnMobGVuZ3RoKGlucHV0LmxvY2FsKSAtIDAuNjIpO1xuICAgIGxldCByaW5nID0gMSAtIHNtb290aHN0ZXAoMC4wNTUsIDAuMTgsIHJpbmdEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4xMiwgMC40MiwgcmluZ0Rpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmVyZ3kgPSAocmluZyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCByaW5nKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDAuNSkge1xuICAgIGRpc3RhbmNlID0gbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgfVxuICBsZXQgY29yZSA9IDEgLSBzbW9vdGhzdGVwKDAuMzgsIDAuNzYsIGRpc3RhbmNlKTtcbiAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4zLCAxLCBkaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgbGV0IGVuZXJneSA9IChjb3JlICsgaGFsbyAqIDAuNTUpICogaW5wdXQuaW50ZW5zaXR5O1xuICBsZXQgY2hyb21hdGljQ29yZSA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgcG93KG1heChjb3JlLCAwKSwgMikpO1xuICBsZXQgcmF3ID0gY2hyb21hdGljQ29yZSAqIChjb3JlICogMS4wNSArIGhhbG8gKiAwLjQyKTtcbiAgbGV0IHJnYiA9IHJhdyAvICh2ZWMzZigxKSArIHJhdyAqIDAuMzIpO1xuICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbn1cbmA7XG5cbmZ1bmN0aW9uIHJnYmEoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHZhbHVlID0gaGV4LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICBpZiAoIS9eWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgc2l4LWRpZ2l0IGhleCBjb2xvciwgcmVjZWl2ZWQgXCIke2hleH1cIi5gKTtcbiAgcmV0dXJuIFtcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMCwgMiksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMiwgNCksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoNCwgNiksIDE2KSAvIDI1NSxcbiAgICAxLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblByaW1pdGl2ZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI3ByaW1pdGl2ZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjYmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgIHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHsgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSwgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNwcmltaXRpdmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IG1heFByaW1pdGl2ZXMgKiBmbG9hdHNQZXJQcmltaXRpdmUgKiA0LFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcbiAgICB0aGlzLiNiaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9LFxuICAgICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jcHJpbWl0aXZlQnVmZmVyIH0gfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25QcmltaXRpdmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2FudmFzIGNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSwgdGltZVNlY29uZHMgPSAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZpc2libGUgPSBwcmltaXRpdmVzLnNsaWNlKDAsIG1heFByaW1pdGl2ZXMpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZpc2libGUubGVuZ3RoICogZmxvYXRzUGVyUHJpbWl0aXZlKTtcbiAgICB2aXNpYmxlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlclByaW1pdGl2ZTtcbiAgICAgIGRhdGEuc2V0KFtcbiAgICAgICAgaXRlbS54LCBpdGVtLnksIGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0ID8/IGl0ZW0ud2lkdGgsXG4gICAgICAgIC4uLnJnYmEoaXRlbS5jb2xvciksXG4gICAgICAgIC4uLnJnYmEoaXRlbS5zZWNvbmRhcnlDb2xvciA/PyBpdGVtLmNvbG9yKSxcbiAgICAgICAgaXRlbS5nbG93ID8/IDAuNSxcbiAgICAgICAgaXRlbS5pbnRlbnNpdHkgPz8gMSxcbiAgICAgICAgaXRlbS5zaGFwZSA9PT0gXCJhcmNcIiA/IDggOiBpdGVtLnNoYXBlID09PSBcImxpbmVcIiA/IDcgOiBpdGVtLnNoYXBlID09PSBcInBlbnRhZ29uXCIgPyA2IDogaXRlbS5zaGFwZSA9PT0gXCJkaWFtb25kXCIgPyA1IDogaXRlbS5zaGFwZSA9PT0gXCJzcGFya1wiID8gNCA6IGl0ZW0uc2hhcGUgPT09IFwicmluZ1wiID8gMyA6IGl0ZW0uc2hhcGUgPT09IFwib3JiXCIgPyAyIDogaXRlbS5zaGFwZSA9PT0gXCJib2x0XCIgPyAxIDogMCxcbiAgICAgICAgaXRlbS5yb3RhdGlvbiA/PyBpdGVtLnRleHR1cmUgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNTdGFydCA/PyBpdGVtLnJpbUludGVuc2l0eSA/PyAwLFxuICAgICAgICBpdGVtLmFyY0VuZCA/PyBpdGVtLnNoYWRvd1N0cmVuZ3RoID8/IDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICBdLCBvZmZzZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB2aXNpYmxlLmxlbmd0aCwgdGltZVNlY29uZHNdKSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNwcmltaXRpdmVCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICAgIGNsZWFyVmFsdWU6IHsgcjogMC4wMDYsIGc6IDAuMDA5LCBiOiAwLjAyNSwgYTogMCB9LFxuICAgICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgaWYgKHZpc2libGUubGVuZ3RoKSB7XG4gICAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmRHcm91cCk7XG4gICAgICBwYXNzLmRyYXcoNiwgdmlzaWJsZS5sZW5ndGgpO1xuICAgIH1cbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24gPSBcImZhZGVcIiB8IFwiZXhwYW5kRmFkZVwiIHwgXCJpbXBsb2RlXCIgfCBcInNwYXJrRmFkZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICBjb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgZGV0YWlsPzogbnVtYmVyO1xuICB0dXJidWxlbmNlPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBjb3JlSW50ZW5zaXR5PzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uVGltZT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25BY3Rpb24/OiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbjtcbiAgZHJpZnRYPzogbnVtYmVyO1xuICBkcmlmdFk/OiBudW1iZXI7XG4gIHNlZWQ/OiBudW1iZXI7XG4gIGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgZXh0ZW5kcyBPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwieFwiIHwgXCJ5XCIgfCBcInNpemVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xufVxuXG50eXBlIENsb3VkID0gUmVxdWlyZWQ8T21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcImNvcmVDb2xvclwiPj4gJiB7IGNvcmVDb2xvcjogc3RyaW5nOyBhZ2U6IG51bWJlciB9O1xuXG5jb25zdCBtYXhDbG91ZHMgPSA5NjtcbmNvbnN0IGZsb2F0c1BlckNsb3VkID0gMjQ7XG5cbmNvbnN0IGRlZmF1bHRzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPiA9IHtcbiAgY29sb3I6IFwiIzYzZThmZlwiLFxuICBjb3JlQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGlvbjogMCxcbiAgc2l6ZTogLjI1LFxuICBkZXRhaWw6IDUsXG4gIHR1cmJ1bGVuY2U6IC43NSxcbiAgZ2xvdzogNCxcbiAgY29yZUludGVuc2l0eTogMS40LFxuICByaW1JbnRlbnNpdHk6IC44NSxcbiAgb3BhY2l0eTogMSxcbiAgZGlzc2lwYXRpb25UaW1lOiAuNyxcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwiZXhwYW5kRmFkZVwiLFxuICBkcmlmdFg6IDAsXG4gIGRyaWZ0WTogMCxcbiAgc2VlZDogMCxcbiAgYWdlOiAwLFxufTtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKS5wYWRFbmQoNiwgXCIwXCIpLnNsaWNlKDAsIDYpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IgPSAoY29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IFtyLCBnLCBiXSA9IGhleChjb2xvcik7XG4gIGNvbnN0IGxpZnQgPSAoY2hhbm5lbDogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKChjaGFubmVsICsgKDEgLSBjaGFubmVsKSAqIC43OCkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIHJldHVybiBgIyR7bGlmdChyKX0ke2xpZnQoZyl9JHtsaWZ0KGIpfWA7XG59O1xuXG5jb25zdCBhY3Rpb25WYWx1ZSA9IChhY3Rpb246IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uKTogbnVtYmVyID0+XG4gIGFjdGlvbiA9PT0gXCJmYWRlXCIgPyAwIDogYWN0aW9uID09PSBcImV4cGFuZEZhZGVcIiA/IDEgOiBhY3Rpb24gPT09IFwiaW1wbG9kZVwiID8gMiA6IDM7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgQ2xvdWQge1xuICBwb3M6IHZlYzJmLFxuICB2ZWxvY2l0eTogdmVjMmYsXG4gIGFnZTogZjMyLFxuICBsaWZlOiBmMzIsXG4gIHNpemU6IGYzMixcbiAgcm90YXRpb246IGYzMixcbiAgc2VlZDogZjMyLFxuICBhY3Rpb246IGYzMixcbiAgY29sb3I6IHZlYzRmLFxuICBjb3JlOiB2ZWM0ZixcbiAgdHVuaW5nOiB2ZWM0Zixcbn1cbnN0cnVjdCBHbG9iYWxzIHtcbiAgYXNwZWN0OiBmMzIsXG4gIHRpbWU6IGYzMixcbiAgY291bnQ6IGYzMixcbiAgYmFja2dyb3VuZDogZjMyLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBnbG9iYWxzOiBHbG9iYWxzO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBjbG91ZHM6IGFycmF5PENsb3VkPjtcblxuZm4gaGFzaChwOiB2ZWMyZikgLT4gZjMyIHtcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3QocCwgdmVjMmYoMTI3LjEsIDMxMS43KSkpICogNDM3NTguNTQ1MzEyMyk7XG59XG5mbiBub2lzZShwOiB2ZWMyZikgLT4gZjMyIHtcbiAgbGV0IGkgPSBmbG9vcihwKTtcbiAgbGV0IGYgPSBmcmFjdChwKTtcbiAgbGV0IHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgcmV0dXJuIG1peChtaXgoaGFzaChpKSwgaGFzaChpICsgdmVjMmYoMSwwKSksIHUueCksIG1peChoYXNoKGkgKyB2ZWMyZigwLDEpKSwgaGFzaChpICsgdmVjMmYoMSwxKSksIHUueCksIHUueSk7XG59XG5mbiBmYm0ocDogdmVjMmYsIG9jdGF2ZXM6IGYzMikgLT4gZjMyIHtcbiAgdmFyIHYgPSAwLjA7XG4gIHZhciBhID0gMC41O1xuICB2YXIgcSA9IHA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgaWYgKGYzMihpKSA+PSBvY3RhdmVzKSB7IGJyZWFrOyB9XG4gICAgdiArPSBhICogbm9pc2UocSk7XG4gICAgcSA9IHEgKiAyLjAzICsgdmVjMmYoNi45LCAzLjcpO1xuICAgIGEgKj0gMC41MjtcbiAgfVxuICByZXR1cm4gdjtcbn1cbmZuIHJvdGF0ZShwOiB2ZWMyZiwgYTogZjMyKSAtPiB2ZWMyZiB7XG4gIGxldCBjID0gY29zKGEpO1xuICBsZXQgcyA9IHNpbihhKTtcbiAgcmV0dXJuIHZlYzJmKHAueCAqIGMgLSBwLnkgKiBzLCBwLnggKiBzICsgcC55ICogYyk7XG59XG5zdHJ1Y3QgT3V0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIEBpbnRlcnBvbGF0ZShmbGF0KSBpbnN0YW5jZTogdTMyLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmk6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IE91dCB7XG4gIGxldCBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgYyA9IGNsb3Vkc1tpbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGFjdGlvblNjYWxlID0gc2VsZWN0KDEuMCArIGxpZmVUICogMS44NSwgMS4wIC0gbGlmZVQgKiAuNjIsIGMuYWN0aW9uID4gMS41ICYmIGMuYWN0aW9uIDwgMi41KTtcbiAgbGV0IHJhZGl1cyA9IG1heCguMDAxLCBjLnNpemUgKiBhY3Rpb25TY2FsZSkgKiAyLjM1O1xuICB2YXIgY2VudGVyID0gYy5wb3MgKyBjLnZlbG9jaXR5ICogYy5hZ2U7XG4gIGNlbnRlci54ICo9IGdsb2JhbHMuYXNwZWN0O1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZpXTtcbiAgbGV0IHAgPSBjZW50ZXIgKyBsb2NhbCAqIHJhZGl1cztcbiAgdmFyIG86IE91dDtcbiAgby5wb3NpdGlvbiA9IHZlYzRmKHAueCAvIGdsb2JhbHMuYXNwZWN0LCBwLnksIDAsIDEpO1xuICBvLmxvY2FsID0gbG9jYWwgKiAyLjM1O1xuICBvLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIHJldHVybiBvO1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYyA9IGNsb3Vkc1tpbnB1dC5pbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGxvY2FsID0gcm90YXRlKGlucHV0LmxvY2FsLCAtYy5yb3RhdGlvbiAtIGxpZmVUICogLjQ1KTtcbiAgbGV0IHIgPSBsZW5ndGgobG9jYWwpO1xuICBpZiAociA+PSAyLjM1KSB7IGRpc2NhcmQ7IH1cbiAgbGV0IGRldGFpbCA9IGNsYW1wKGMudHVuaW5nLngsIDEuMCwgNy4wKTtcbiAgbGV0IHR1cmJ1bGVuY2UgPSBjLnR1bmluZy55O1xuICBsZXQgd2lzcHkgPSBmYm0obG9jYWwgKiAoMS43ICsgZGV0YWlsICogLjE2KSArIHZlYzJmKGMuc2VlZCwgYy5zZWVkICogLjcxKSArIGdsb2JhbHMudGltZSAqIHZlYzJmKC4xNiwgLjA5KSAqIHR1cmJ1bGVuY2UsIG1pbihkZXRhaWwsIDQuMCkpO1xuICBsZXQgY29yZSA9IGV4cCgtciAqIHIgKiAoMS4yICsgYy50dW5pbmcueiAqIC4yMikpO1xuICBsZXQgcmltID0gZXhwKC1hYnMociAtIC43MikgKiAzLjYpO1xuICBsZXQgc3BhcmsgPSBwb3cobWF4KDAuMCwgc2luKHdpc3B5ICogMTYuMCArIGMuc2VlZCArIGdsb2JhbHMudGltZSAqIDkuMCkpLCAxNC4wKSAqIHNlbGVjdCgwLjAsIDEuMCwgYy5hY3Rpb24gPiAyLjUpO1xuICBsZXQgZGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMS40NSwgMi4zNSwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IHJpbURpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDIuNywgMy44LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgZWRnZUZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDEuNzUsIDIuMzUsIHIpO1xuICBsZXQgZGVuc2l0eSA9IChjb3JlICogLjcyICsgcmltICogLjI0ICogcmltRGlzc2lwYXRlICsgd2lzcHkgKiAuMjIgKyBzcGFyayAqIC41NSkgKiBkaXNzaXBhdGUgKiBjLnR1bmluZy53ICogZWRnZUZhZGU7XG4gIGxldCBob3RDb3JlID0gYy5jb3JlLnJnYiAqIGNvcmUgKiBjLnR1bmluZy56ICogKDEuMCArIHNwYXJrKTtcbiAgbGV0IG5lb25SaW0gPSBjLmNvbG9yLnJnYiAqIChkZW5zaXR5ICogKC43NSArIGMuY29sb3IuYSAqIC4wOCkgKyByaW0gKiByaW1EaXNzaXBhdGUgKiBjLmNvbG9yLmEgKiAuMDgpO1xuICBsZXQgZ2xvdyA9IG5lb25SaW0gKyBob3RDb3JlICogZGVuc2l0eTtcbiAgcmV0dXJuIHZlYzRmKGdsb3csIGNsYW1wKGRlbnNpdHkgKiAuODUgKyBzcGFyayAqIC4yNSwgMC4wLCAxLjApKTtcbn1gO1xuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RBY3RvciB7XG4gIHNldHRpbmdzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPjtcbiAgYWdlID0gMDtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MgPSB7fSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRzLCAuLi5zZXR0aW5ncywgc2VlZDogc2V0dGluZ3Muc2VlZCA/PyBNYXRoLnJhbmRvbSgpICogMTAwMCB9O1xuICB9XG4gIHVwZGF0ZShkdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy5hZ2UgKz0gZHQ7XG4gICAgcmV0dXJuIHRoaXMuYWdlIDwgdGhpcy5zZXR0aW5ncy5kaXNzaXBhdGlvblRpbWU7XG4gIH1cbiAgcmVuZGVySW5zdGFuY2UoKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5zZXR0aW5ncywgc2VlZDogdGhpcy5zZXR0aW5ncy5zZWVkIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNidWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2dsb2JhbHM6IEdQVUJ1ZmZlcjtcbiAgI2JpbmQ6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBwcm9jZWR1cmFsIGNsb3VkIHZvbHVtZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2dsb2JhbHMgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkICogNCwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNiaW5kID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbXG4gICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jZ2xvYmFscyB9IH0sXG4gICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jYnVmZmVyIH0gfSxcbiAgICBdIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBjbG91ZCBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGNsb3VkczogcmVhZG9ubHkgTmVvbkNsb3VkQnVyc3RTZXR0aW5nc1tdLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCBwYWNrZWQgPSBuZXcgRmxvYXQzMkFycmF5KG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkKTtcbiAgICBjbG91ZHMuc2xpY2UoMCwgbWF4Q2xvdWRzKS5mb3JFYWNoKChjbG91ZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGMgPSB7IC4uLmRlZmF1bHRzLCAuLi5jbG91ZCB9O1xuICAgICAgY29uc3QgY29sb3IgPSBoZXgoYy5jb2xvciksIGNvcmUgPSBoZXgoYy5jb3JlQ29sb3IpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJDbG91ZDtcbiAgICAgIHBhY2tlZC5zZXQoW2MueCwgYy55LCBjLmRyaWZ0WCwgYy5kcmlmdFksIGMuYWdlID8/IDAsIGMuZGlzc2lwYXRpb25UaW1lLCBjLnNpemUsIGMucm90YXRpb24sIGMuc2VlZCwgYWN0aW9uVmFsdWUoYy5kaXNzaXBhdGlvbkFjdGlvbiksIDAsIDBdLCBvZmZzZXQpO1xuICAgICAgcGFja2VkLnNldChbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgYy5nbG93LCBjb3JlWzBdLCBjb3JlWzFdLCBjb3JlWzJdLCBjLmNvcmVJbnRlbnNpdHksIGMuZGV0YWlsLCBjLnR1cmJ1bGVuY2UsIGMucmltSW50ZW5zaXR5LCBjLm9wYWNpdHldLCBvZmZzZXQgKyAxMik7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jYnVmZmVyLCAwLCBwYWNrZWQpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2dsb2JhbHMsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCB0aW1lU2Vjb25kcywgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSwgMF0pKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3MoeyBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sXG4gICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICB9XSB9KTtcbiAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kKTtcbiAgICBwYXNzLmRyYXcoNiwgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSk7XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gIG1hcFRvcERvd25DbG91ZChjbG91ZDogTmVvblRvcERvd25DbG91ZEJ1cnN0LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgY29uc3QgYXNwZWN0ID0gbG9naWNhbFdpZHRoIC8gbG9naWNhbEhlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xvdWQsXG4gICAgICB4OiAoY2xvdWQueCAvIGxvZ2ljYWxXaWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIGNsb3VkLnkgLyBsb2dpY2FsSGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNpemU6IGNsb3VkLnNpemUgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgICAgZHJpZnRYOiAoY2xvdWQuZHJpZnRYID8/IDApIC8gbG9naWNhbFdpZHRoICogYXNwZWN0ICogMi41LFxuICAgICAgZHJpZnRZOiAtKGNsb3VkLmRyaWZ0WSA/PyAwKSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLiNidWZmZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuI2dsb2JhbHMuZGVzdHJveSgpO1xuICAgIGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIsIHR5cGUgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIsIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0IH0gZnJvbSBcIi4vY2xvdWQtYnVyc3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNoYXBlIGV4dGVuZHMgT21pdDxOZW9uU2hhcGVJbnN0YW5jZSwgXCJ4XCIgfCBcInlcIiB8IFwic2NhbGVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2NlbmUge1xuICBwcmltaXRpdmVzPzogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiByZWFkb25seSBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzPzogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlUmVuZGVyZXI7XG4gICNjbG91ZHM6IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI7XG4gICNzaGFwZXM6IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyO1xuICAjd2lkdGg6IG51bWJlcjtcbiAgI2hlaWdodDogbnVtYmVyO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDsgdGhpcy4jd2lkdGggPSB3aWR0aDsgdGhpcy4jaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMgPSBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI2Nsb3VkcyA9IG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI3NoYXBlcyA9IG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IFByb21pc2U8TmVvblRvcERvd25TY2VuZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5IHRvcC1kb3duIHNjZW5lcy5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCwgbG9naWNhbFdpZHRoLCBsb2dpY2FsSGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzY2VuZTogTmVvblRvcERvd25TY2VuZSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDApOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpO1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMucmVuZGVyKFsuLi4oc2NlbmUucHJpbWl0aXZlcyA/PyBbXSldLCB0aW1lU2Vjb25kcywgZmFsc2UsIHRhcmdldCk7XG4gICAgY29uc3QgY2xvdWRzID0gc2NlbmUuY2xvdWRzID8/IFtdO1xuICAgIGNvbnN0IGFzcGVjdCA9IHRoaXMuI3dpZHRoIC8gdGhpcy4jaGVpZ2h0O1xuICAgIGNvbnN0IHNoYXBlcyA9IHNjZW5lLnNoYXBlcyA/PyBbXTtcbiAgICBpZiAoc2hhcGVzLmxlbmd0aCkgdGhpcy4jc2hhcGVzLnJlbmRlcihzaGFwZXMubWFwKHNoYXBlID0+ICh7XG4gICAgICAuLi5zaGFwZSxcbiAgICAgIHg6IChzaGFwZS54IC8gdGhpcy4jd2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBzaGFwZS55IC8gdGhpcy4jaGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNjYWxlOiAoc2hhcGUuaGVpZ2h0ID8/IHNoYXBlLnNpemUpIC8gdGhpcy4jaGVpZ2h0ICogMi41LFxuICAgICAgc2NhbGVYOiAoc2hhcGUuc2NhbGVYID8/IDEpICogKChzaGFwZS53aWR0aCA/PyBzaGFwZS5zaXplKSAvIChzaGFwZS5oZWlnaHQgPz8gc2hhcGUuc2l6ZSkpLFxuICAgIH0pKSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgICBpZiAoY2xvdWRzLmxlbmd0aCkgdGhpcy4jY2xvdWRzLnJlbmRlcihjbG91ZHMubWFwKGNsb3VkID0+IHRoaXMuI2Nsb3Vkcy5tYXBUb3BEb3duQ2xvdWQoY2xvdWQsIHRoaXMuI3dpZHRoLCB0aGlzLiNoZWlnaHQpKSwgdGltZVNlY29uZHMsIHRydWUpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiNzaGFwZXMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy4jY2xvdWRzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB0eXBlIHsgTmVvblRvcERvd25TY2VuZSB9IGZyb20gXCIuL3RvcC1kb3duLXNjZW5lXCI7XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyU2NlbmVJZHMgPSBbXCJuZW9uSGFsbFwiLCBcImF1cm9yYVwiLCBcImNyeXN0YWxGb3JnZVwiLCBcInZvaWRHYXJkZW5cIiwgXCJzb2xhckFycmF5XCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCA9IHR5cGVvZiBsYW5lUnVubmVyU2NlbmVJZHNbbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVPcHRpb25zIHtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB0aW1lTXM6IG51bWJlcjtcbn1cblxuY29uc3Qgc2NlbmVOYW1lczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCBzdHJpbmc+ID0ge1xuICBuZW9uSGFsbDogXCJOZW9uIEhhbGxcIixcbiAgYXVyb3JhOiBcIkF1cm9yYVwiLFxuICBjcnlzdGFsRm9yZ2U6IFwiQ3J5c3RhbCBGb3JnZVwiLFxuICB2b2lkR2FyZGVuOiBcIlZvaWQgR2FyZGVuXCIsXG4gIHNvbGFyQXJyYXk6IFwiU29sYXIgQXJyYXlcIixcbn07XG5cbmNvbnN0IGhhbGxCb3R0b21XaWR0aCA9IDAuOTI7XG5jb25zdCBoYWxsRmxvb3JDb2xvciA9IFwiIzA1MTAxZlwiO1xuY29uc3QgaGFsbERlZXBCbHVlID0gXCIjMTIzNTZhXCI7XG5jb25zdCBoYWxsTXV0ZWRCbHVlID0gXCIjMWI0YzhkXCI7XG5jb25zdCBoYWxsTXV0ZWRDeWFuID0gXCIjMmFjNGRjXCI7XG5jb25zdCBoYWxsTXV0ZWRWaW9sZXQgPSBcIiM0NTMwNzlcIjtcbmNvbnN0IGhhbGxBY2NlbnRQaW5rID0gXCIjYTczNTdlXCI7XG5jb25zdCBoYWxsRW5lcmd5U3BlZWQgPSAwLjAwMTc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSB7XG4gIGZsb29yOiBzdHJpbmc7XG4gIGJvdW5kYXJ5OiBzdHJpbmc7XG4gIGxhbmU6IHN0cmluZztcbiAgY2VudGVyTGFuZTogc3RyaW5nO1xuICBhY2NlbnQ6IHN0cmluZztcbiAgbGFuZUhpZ2hsaWdodDogc3RyaW5nO1xufVxuXG5jb25zdCBzdGFuZGFyZExhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogaGFsbEZsb29yQ29sb3IsXG4gIGJvdW5kYXJ5OiBoYWxsRGVlcEJsdWUsXG4gIGxhbmU6IGhhbGxNdXRlZEJsdWUsXG4gIGNlbnRlckxhbmU6IGhhbGxNdXRlZFZpb2xldCxcbiAgYWNjZW50OiBoYWxsQWNjZW50UGluayxcbiAgbGFuZUhpZ2hsaWdodDogaGFsbE11dGVkQ3lhbixcbn07XG5cbmNvbnN0IGF1cm9yYUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDMxMTBmXCIsXG4gIGJvdW5kYXJ5OiBcIiMxNzhjOTJcIixcbiAgbGFuZTogXCIjMTdkN2IzXCIsXG4gIGNlbnRlckxhbmU6IFwiIzhmNTZmZlwiLFxuICBhY2NlbnQ6IFwiI2ZmNGZjN1wiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNiOWZmNmFcIixcbn07XG5cbmNvbnN0IGNyeXN0YWxGb3JnZUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDcxMDE4XCIsXG4gIGJvdW5kYXJ5OiBcIiMyNmQ3ZmZcIixcbiAgbGFuZTogXCIjNjNmMWZmXCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNWZkOFwiLFxuICBhY2NlbnQ6IFwiI2ZmYjg0ZFwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNmNGZiZmZcIixcbn07XG5cbmNvbnN0IHZvaWRHYXJkZW5MYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzA4MDgxOFwiLFxuICBib3VuZGFyeTogXCIjNmY1M2ZmXCIsXG4gIGxhbmU6IFwiIzM1ZThiNlwiLFxuICBjZW50ZXJMYW5lOiBcIiNmZjRmYzdcIixcbiAgYWNjZW50OiBcIiNiOWZmNmFcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjOWJkN2ZmXCIsXG59O1xuXG5jb25zdCBzb2xhckFycmF5TGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMxMTBjMDdcIixcbiAgYm91bmRhcnk6IFwiI2ZmOWUzOFwiLFxuICBsYW5lOiBcIiNmZmQ0NWFcIixcbiAgY2VudGVyTGFuZTogXCIjMjZkN2ZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZjY2XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2ZmZjZiOFwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmVSdW5uZXJTY2VuZU5hbWUoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiBzdHJpbmcge1xuICByZXR1cm4gc2NlbmVOYW1lc1tzY2VuZUlkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGFuZVJ1bm5lclNjZW5lSWQodmFsdWU6IHN0cmluZyk6IHZhbHVlIGlzIExhbmVSdW5uZXJTY2VuZUlkIHtcbiAgcmV0dXJuIChsYW5lUnVubmVyU2NlbmVJZHMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmVSdW5uZXJTY2VuZShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIHJldHVybiBzY2VuZUNyZWF0b3JzW29wdGlvbnMuc2NlbmVJZF0ob3B0aW9ucyk7XG59XG5cbmNvbnN0IHNjZW5lQ3JlYXRvcnM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpID0+IE5lb25Ub3BEb3duU2NlbmU+ID0ge1xuICBuZW9uSGFsbDogY3JlYXRlTmVvbkhhbGwsXG4gIGF1cm9yYTogY3JlYXRlQXVyb3JhLFxuICBjcnlzdGFsRm9yZ2U6IG9wdGlvbnMgPT4gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnMsIGNyeXN0YWxGb3JnZUxhbmVSdW5uZXJQYWxldHRlLCBhZGRDcnlzdGFsRm9yZ2VEZXRhaWxzKSxcbiAgdm9pZEdhcmRlbjogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlLCBhZGRWb2lkR2FyZGVuRGV0YWlscyksXG4gIHNvbGFyQXJyYXk6IG9wdGlvbnMgPT4gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnMsIHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZSwgYWRkU29sYXJBcnJheURldGFpbHMpLFxufTtcblxuZnVuY3Rpb24gY3JlYXRlTmVvbkhhbGwob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBzdGFuZGFyZExhbmVSdW5uZXJQYWxldHRlLCB0aW1lTXMpO1xuICBhZGRIYWxsTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxGbG9vckdseXBocyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEhvcml6b25EZXRhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsU2lkZVBhbmVscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEVuZXJneVRyYWNlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF1cm9yYShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIGF1cm9yYUxhbmVSdW5uZXJQYWxldHRlLCB0aW1lTXMpO1xuICBhZGRBdXJvcmFMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhR3JvdW5kRmxhcmVzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFIb3Jpem9uVmVpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUoXG4gIG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMsXG4gIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsXG4gIGFkZERldGFpbHM6IChpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpID0+IHZvaWQsXG4pOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZFRoZW1lZExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGREZXRhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICBjb25zdCB2cCA9IHsgeDogd2lkdGggKiAuNSwgeTogLWhlaWdodCB9O1xuICBjb25zdCBib3R0b21ZID0gaGVpZ2h0ICogLjk4NTtcbiAgY29uc3QgYm90dG9tSGFsZiA9IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoICogLjU7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHZwLFxuICAgIGxlZnRCb3R0b206IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICByaWdodEJvdHRvbTogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIGxlZnRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gICAgcmlnaHRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKFxuICBpdGVtczogTmVvblByaW1pdGl2ZVtdLFxuICBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPixcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgdGltZU1zOiBudW1iZXIsXG4pOiB2b2lkIHtcbiAgYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGRMYW5lUnVubmVyUmFpbHMoaXRlbXMsIGdlb21ldHJ5LCBwYWxldHRlKTtcbiAgYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHB1bHNlID0gLjU1ICsgTWF0aC5zaW4odGltZU1zICogaGFsbEVuZXJneVNwZWVkKSAqIC4yO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgKiAuNDIsIHdpZHRoOiB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgKiAxLjA4LCBjb2xvcjogcGFsZXR0ZS5mbG9vciwgc2Vjb25kYXJ5Q29sb3I6IFwiIzAyMDUwZFwiLCBnbG93OiAuMDUsIGludGVuc2l0eTogLjIzLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuOSwgd2lkdGg6IHdpZHRoICogLjM0LCBoZWlnaHQ6IDEuNCwgY29sb3I6IHBhbGV0dGUuYm91bmRhcnksIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGdsb3c6IC4zLCBpbnRlbnNpdHk6IC4xOCArIHB1bHNlICogLjA3LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuNzgsIHdpZHRoOiB3aWR0aCAqIC4xOCwgaGVpZ2h0OiAxLjIsIGNvbG9yOiBwYWxldHRlLmFjY2VudCwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUuY2VudGVyTGFuZSwgZ2xvdzogLjI0LCBpbnRlbnNpdHk6IC4wOCwgc2hhcGU6IFwiYm9sdFwiIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyUmFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3QgW2JvdHRvbSwgaG9yaXpvbl0gb2YgW1tsZWZ0Qm90dG9tLCBsZWZ0SG9yaXpvbl0sIFtyaWdodEJvdHRvbSwgcmlnaHRIb3Jpem9uXV0gYXMgY29uc3QpIHtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmJvdW5kYXJ5LCAuNDgsIDYuNSk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCAuNTYsIDEuMyk7XG4gIH1cblxuICBmb3IgKGxldCBsYW5lID0gMTsgbGFuZSA8PSAzOyBsYW5lKyspIHtcbiAgICBjb25zdCB1ID0gbGFuZSAvIDQ7XG4gICAgY29uc3Qgc3RhcnQgPSBsZXJwUG9pbnQobGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIHUpO1xuICAgIGNvbnN0IGVuZCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBjb2xvciA9IGxhbmUgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmxhbmU7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIGNvbG9yLCBsYW5lID09PSAyID8gLjI4IDogLjIsIDMuNCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgbGFuZSA9PT0gMiA/IC4yNiA6IC4xOCwgLjkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTU7IHJvdysrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByb3dQdWxzZSA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDQ4MCArIHJvdyAqIC43OCkgKiAuNDI7XG4gICAgY29uc3Qgc3VyZ2UgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lTXMgLyA4MjAgLSByb3cgKiAuNzIpKTtcbiAgICBjb25zdCBjb2xvciA9IHJvdyAlIDQgPT09IDAgPyBwYWxldHRlLmxhbmVIaWdobGlnaHQgOiByb3cgJSA0ID09PSAxID8gcGFsZXR0ZS5sYW5lIDogcm93ICUgNCA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUuYWNjZW50O1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMTUgKyB0ICogLjIzKSAqICguNTUgKyByb3dQdWxzZSAqIC40NSkgKyBzdXJnZSAqIC4wNTUsIDMuMSArIHQgKiAyKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjIgKyB0ICogLjI3KSAqICguNTIgKyByb3dQdWxzZSAqIC40OCkgKyBzdXJnZSAqIC4wNywgLjc1ICsgdCAqIC42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDc7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxOTAwICsgcHVsc2VJbmRleCAvIDcpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjU1KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjM0ICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgaGFsbE11dGVkQ3lhbiwgb3BhY2l0eSwgMS4xICsgdCAqIDEuNCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEZsb29yR2x5cGhzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3Qgcm93cyA9IFsyLCA0LCA2LCA4LCAxMCwgMTJdO1xuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBjZW50ZXIgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCAuNSk7XG4gICAgY29uc3Qgc2NhbGUgPSAuNDUgKyB0ICogMS4xO1xuICAgIGNvbnN0IHB1bHNlID0gLjQ4ICsgTWF0aC5zaW4odGltZU1zIC8gNzIwICsgcm93ICogMS4zKSAqIC4yNDtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGNlbnRlci54LFxuICAgICAgeTogY2VudGVyLnksXG4gICAgICB3aWR0aDogNyAqIHNjYWxlLFxuICAgICAgaGVpZ2h0OiA3ICogc2NhbGUsXG4gICAgICBjb2xvcjogcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxEZWVwQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiByb3cgJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMjQgKyBwdWxzZSAqIC4xNixcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsSG9yaXpvbkRldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQsIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCBnbG93UHVsc2UgPSAuNzUgKyBNYXRoLnNpbih0aW1lTXMgLyA2ODApICogLjI1O1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIHsgeDogdnAueCArIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCBoYWxsQWNjZW50UGluaywgLjIgKyBnbG93UHVsc2UgKiAuMDgsIDEuMSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54IC0gd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZEN5YW4sIC4xNiwgLjg1KTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCArIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkVmlvbGV0LCAuMTYsIC44NSk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4ICsgLjUpIC8gODtcbiAgICBjb25zdCBiYXNlID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IHNpZGVCaWFzID0gTWF0aC5hYnModSAtIC41KSAqIDI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBiYXNlLngsXG4gICAgICB5OiBiYXNlLnkgLSBoZWlnaHQgKiAoLjAxOCArIHNpZGVCaWFzICogLjAxOCksXG4gICAgICB3aWR0aDogMSArIHNpZGVCaWFzICogLjcsXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgc2lkZUJpYXMgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxBY2NlbnRQaW5rLFxuICAgICAgZ2xvdzogLjI0LFxuICAgICAgaW50ZW5zaXR5OiAuMDcgKyBnbG93UHVsc2UgKiAuMDM1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKGluZGV4ICogMS43KSAqIC4xMixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsU2lkZVBhbmVscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3Qgc2lkZSBvZiBbMCwgMV0pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTAsIDEuNjgpO1xuICAgICAgY29uc3QgcmFpbCA9IHNpZGUgPT09IDBcbiAgICAgICAgPyBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpXG4gICAgICAgIDogbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgICAgY29uc3Qgb3V0d2FyZCA9IHNpZGUgPT09IDAgPyAtMSA6IDE7XG4gICAgICBjb25zdCBmbGlja2VyID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNjAwICsgaW5kZXggKiAxLjUgKyBzaWRlKSAqIC4yODtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB4OiByYWlsLnggKyBvdXR3YXJkICogd2lkdGggKiAoLjAzNSArIHQgKiAuMDYpLFxuICAgICAgICB5OiByYWlsLnkgLSBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDEyKSxcbiAgICAgICAgd2lkdGg6IDEuMiArIHQgKiAxLjIsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyB0ICogLjA4KSxcbiAgICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICAgIGdsb3c6IC4zLFxuICAgICAgICBpbnRlbnNpdHk6ICguMDc1ICsgdCAqIC4wNjUpICogZmxpY2tlcixcbiAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxFbmVyZ3lUcmFjZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4xMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMTE2O1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS43KSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA9PT0gMCA/IC4xOCA6IGluZGV4ICUgNCA9PT0gMSA/IC4zNCA6IGluZGV4ICUgNCA9PT0gMiA/IC42NiA6IC44MjtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgc2lkZSArIE1hdGguc2luKGluZGV4ICogMS43ICsgdGltZU1zIC8gMTcwMCkgKiAuMDM1KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gMzkwICsgaW5kZXggKiAxLjEpICogLjM4O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogLjggKyBpbmRleCAlIDMgKiAuNSxcbiAgICAgIGhlaWdodDogMTAgKyBpbmRleCAlIDUgKiA3LFxuICAgICAgY29sb3I6IGluZGV4ICUgNSA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxNdXRlZEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgKGluZGV4ICUgNCkgKiAuMDE4KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDk7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxNTUwICsgcHVsc2VJbmRleCAvIDkpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjQ4KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjMyICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgcHVsc2VJbmRleCAlIDIgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiIzE3ZDdiM1wiLCBvcGFjaXR5LCAxICsgdCAqIDEuNyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhR3JvdW5kRmxhcmVzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMDggKyAoKGluZGV4ICogMjkpICUgMTAwKSAvIDExMjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNjIpKTtcbiAgICBjb25zdCBsYW5lU2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4yMiA6IC43ODtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgbGFuZVNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuMSArIHRpbWVNcyAvIDE4MDApICogLjA0KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjU1ICsgTWF0aC5zaW4odGltZU1zIC8gNDMwICsgaW5kZXggKiAxLjMpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAwOSArIHQgKiAuMDEyKSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTggKyB0ICogLjAzNSksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBpbmRleCAlIDMgPT09IDEgPyBcIiMxN2Q3YjNcIiA6IFwiIzhmNTZmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNikgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IGluZGV4ICUgNCA9PT0gMCA/IFwiZGlhbW9uZFwiIDogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4odGltZU1zIC8gMTIwMCArIGluZGV4KSAqIC4xOCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFIb3Jpem9uVmVpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNzsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggLSAzKSAvIDY7XG4gICAgY29uc3Qgd2F2ZSA9IE1hdGguc2luKHRpbWVNcyAvIDExMDAgKyBpbmRleCAqIC45KTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHZwLnggKyB1ICogd2lkdGggKiAuMzYsXG4gICAgICB5OiB2cC55ICsgaGVpZ2h0ICogKC4wNzUgKyBpbmRleCAqIC4wMDYpLFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMzUgKyBpbmRleCAqIC4wMDQpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjEyICsgTWF0aC5hYnMod2F2ZSkgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjA0NSArIE1hdGguYWJzKHdhdmUpICogLjAyNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiB1ICogLjI4ICsgd2F2ZSAqIC4wOCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUaGVtZWRMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgODsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE3MDAgKyBwdWxzZUluZGV4IC8gOCkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHBhbGV0dGUuYWNjZW50LCAuMjggKiAoMSAtIHRyYXZlbCksIDEuMSArIHQgKiAxLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENyeXN0YWxGb3JnZURldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQsIHZwIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE2OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTcsIDEuNTUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMTQgOiAuODY7XG4gICAgY29uc3QgZWRnZSA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IGdsaW50ID0gLjU1ICsgTWF0aC5zaW4odGltZU1zIC8gNTIwICsgaW5kZXggKiAxLjE3KSAqIC4zNTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGVkZ2UueCxcbiAgICAgIHk6IGVkZ2UueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDEyICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAyNSArIHQgKiAuMDYpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2ZmYjg0ZFwiIDogXCIjNjNmMWZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSA0ID09PSAwID8gXCIjZmY1ZmQ4XCIgOiBcIiNmNGZiZmZcIixcbiAgICAgIGdsb3c6IC4zOCxcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDU1KSAqIGdsaW50LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgICAgcm90YXRpb246IChzaWRlIDwgLjUgPyAtLjIyIDogLjIyKSArIE1hdGguc2luKHRpbWVNcyAvIDE0MDAgKyBpbmRleCkgKiAuMDgsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMywgeTogdnAueSArIGhlaWdodCAqIC4wNDUgfSwgXCIjZmZiODRkXCIsIC4yMiwgMS4zKTtcbn1cblxuZnVuY3Rpb24gYWRkVm9pZEdhcmRlbkRldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQsIHZwIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KC4wOCArICgoaW5kZXggKiAyMykgJSAxMDApIC8gMTEyLCAxLjY1KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0IDwgMiA/IC4xOCA6IC44MjtcbiAgICBjb25zdCBjZW50ZXIgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCBzaWRlICsgTWF0aC5zaW4odGltZU1zIC8gMTkwMCArIGluZGV4KSAqIC4wMzUpO1xuICAgIGNvbnN0IGJsb29tID0gLjUgKyBNYXRoLnNpbih0aW1lTXMgLyA3NjAgKyBpbmRleCAqIC44KSAqIC4zMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGNlbnRlci54LFxuICAgICAgeTogY2VudGVyLnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAwNiArIHQgKiAuMDE0KSxcbiAgICAgIGhlaWdodDogd2lkdGggKiAoLjAwNiArIHQgKiAuMDE0KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiIzM1ZThiNlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IFwiIzZmNTNmZlwiIDogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuNDIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyB0ICogLjA1KSAqIGJsb29tLFxuICAgICAgc2hhcGU6IGluZGV4ICUgMiA9PT0gMCA/IFwiZGlhbW9uZFwiIDogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4odGltZU1zIC8gMTIwMCArIGluZGV4KSAqIC40LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xOCwgeTogdnAueSArIGhlaWdodCAqIC4wNyB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xOCwgeTogdnAueSArIGhlaWdodCAqIC4wNyB9LCBcIiMzNWU4YjZcIiwgLjE4LCAxLjEpO1xufVxuXG5mdW5jdGlvbiBhZGRTb2xhckFycmF5RGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxOSwgMS40OCk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xIDogLjk7XG4gICAgY29uc3QgbW91bnQgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCBzaWRlKTtcbiAgICBjb25zdCBwdWxzZSA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDYxMCArIGluZGV4ICogMS4wNSkgKiAuMztcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IG1vdW50LngsXG4gICAgICB5OiBtb3VudC55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTggKyB0ICogLjAzNSksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDEyICsgdCAqIC4wMjQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2ZmZDQ1YVwiIDogXCIjZmY5ZTM4XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSA0ID09PSAwID8gXCIjMjZkN2ZmXCIgOiBcIiNmZjRmNjZcIixcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDU1KSAqIHB1bHNlLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IHNpZGUgPCAuNSA/IC0uMzggOiAuMzgsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMSwgeTogdnAueSArIGhlaWdodCAqIC4wMzUgfSwgXCIjZmZmNmI4XCIsIC4yNCwgMS40KTtcbn1cblxuZnVuY3Rpb24gYWRkR2xvd2luZ0xpbmUoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGNvbG9yOiBzdHJpbmcsIGFscGhhOiBudW1iZXIsIHRoaWNrbmVzczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGR4ID0gYi54IC0gYS54O1xuICBjb25zdCBkeSA9IGIueSAtIGEueTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBpdGVtcy5wdXNoKHtcbiAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgIHdpZHRoOiB0aGlja25lc3MsXG4gICAgaGVpZ2h0OiBsZW5ndGggLyAyLFxuICAgIGNvbG9yLFxuICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS53aGl0ZUhvdCxcbiAgICBnbG93OiAuMzIsXG4gICAgaW50ZW5zaXR5OiBhbHBoYSxcbiAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsZXJwUG9pbnQoYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHQ6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIHJldHVybiB7IHg6IGEueCArIChiLnggLSBhLngpICogdCwgeTogYS55ICsgKGIueSAtIGEueSkgKiB0IH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25Qcm9qZWN0aWxlU2hhcGUgPSBcImRhcnRcIiB8IFwibmVlZGxlXCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByb2plY3RpbGVPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WD86IG51bWJlcjtcbiAgdmVsb2NpdHlZPzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGxlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg/OiBudW1iZXI7XG4gIHRyYWlsV2lkdGg/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgc2hhcGU/OiBOZW9uUHJvamVjdGlsZVNoYXBlO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3RvciA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoeCwgeSkgfHwgMTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeCAvIGxlbmd0aCwgLXkgLyBsZW5ndGgpO1xufTtcblxuZXhwb3J0IGNsYXNzIE5lb25Qcm9qZWN0aWxlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WDogbnVtYmVyO1xuICB2ZWxvY2l0eVk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGxlbmd0aDogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFpbFdpZHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I6IHN0cmluZztcbiAgY29yZUNvbG9yOiBzdHJpbmc7XG4gIHNoYXBlOiBOZW9uUHJvamVjdGlsZVNoYXBlO1xuICBpbnRlbnNpdHk6IG51bWJlcjtcbiAgZ2xvdzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25Qcm9qZWN0aWxlT3B0aW9ucykge1xuICAgIHRoaXMueD1vcHRpb25zLng7dGhpcy55PW9wdGlvbnMueTt0aGlzLnZlbG9jaXR5WD1vcHRpb25zLnZlbG9jaXR5WD8/MDt0aGlzLnZlbG9jaXR5WT1vcHRpb25zLnZlbG9jaXR5WT8/LTUwMDtcbiAgICB0aGlzLnJhZGl1cz1vcHRpb25zLnJhZGl1cz8/Mzt0aGlzLmxlbmd0aD1vcHRpb25zLmxlbmd0aD8/OTt0aGlzLnRyYWlsTGVuZ3RoPW9wdGlvbnMudHJhaWxMZW5ndGg/PzE2O3RoaXMudHJhaWxXaWR0aD1vcHRpb25zLnRyYWlsV2lkdGg/PzEuNTtcbiAgICB0aGlzLmNvbG9yPW9wdGlvbnMuY29sb3I7dGhpcy50cmFpbENvbG9yPW9wdGlvbnMudHJhaWxDb2xvcj8/b3B0aW9ucy5jb2xvcjt0aGlzLmNvcmVDb2xvcj1vcHRpb25zLmNvcmVDb2xvcj8/b3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLnNoYXBlPW9wdGlvbnMuc2hhcGU/P1wiZGFydFwiO3RoaXMuaW50ZW5zaXR5PW9wdGlvbnMuaW50ZW5zaXR5Pz8xO3RoaXMuZ2xvdz1vcHRpb25zLmdsb3c/Py43NTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5WCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eVkgKiBkZWx0YVNlY29uZHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcmltaXRpdmVzKCk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgY29uc3Qgc3BsaXQgPSB0aGlzLnNoYXBlID09PSBcInNwbGl0Qm9sdFwiO1xuICAgIGNvbnN0IG5lZWRsZSA9IHRoaXMuc2hhcGUgPT09IFwibmVlZGxlXCI7XG4gICAgY29uc3Qgc2x1ZyA9IHRoaXMuc2hhcGUgPT09IFwic2x1Z1wiO1xuICAgIGNvbnN0IHNwZWVkID0gTWF0aC5oeXBvdCh0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uWCA9IHRoaXMudmVsb2NpdHlYIC8gc3BlZWQ7XG4gICAgY29uc3QgZGlyZWN0aW9uWSA9IHRoaXMudmVsb2NpdHlZIC8gc3BlZWQ7XG4gICAgY29uc3Qgcm90YXRpb24gPSByb3RhdGlvbkZvclNjcmVlbkZvcndhcmRWZWN0b3IodGhpcy52ZWxvY2l0eVgsIHRoaXMudmVsb2NpdHlZKTtcbiAgICBjb25zdCBpdGVtczogTmVvblByaW1pdGl2ZVtdID0gW3tcbiAgICAgIHg6dGhpcy54LWRpcmVjdGlvblgqdGhpcy50cmFpbExlbmd0aCouNSx5OnRoaXMueS1kaXJlY3Rpb25ZKnRoaXMudHJhaWxMZW5ndGgqLjUsXG4gICAgICB3aWR0aDp0aGlzLnRyYWlsV2lkdGgsaGVpZ2h0OnRoaXMudHJhaWxMZW5ndGgsY29sb3I6dGhpcy50cmFpbENvbG9yLHNlY29uZGFyeUNvbG9yOnRoaXMuY29sb3IsXG4gICAgICBnbG93OnRoaXMuZ2xvdyouNixpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHkqLjcyLHNoYXBlOlwiYm9sdFwiLHJvdGF0aW9uLFxuICAgIH1dO1xuICAgIGNvbnN0IHdpZHRoPXNsdWc/dGhpcy5yYWRpdXMqMS41Om5lZWRsZT90aGlzLnJhZGl1cyouNjU6dGhpcy5yYWRpdXM7XG4gICAgY29uc3QgaGVpZ2h0PXNsdWc/dGhpcy5sZW5ndGgqLjc1OnRoaXMubGVuZ3RoO1xuICAgIGNvbnN0IHNpZGVYID0gLWRpcmVjdGlvblk7XG4gICAgY29uc3Qgc2lkZVkgPSBkaXJlY3Rpb25YO1xuICAgIGNvbnN0IGFkZD0ob2Zmc2V0Om51bWJlcik9Pml0ZW1zLnB1c2goe3g6dGhpcy54K3NpZGVYKm9mZnNldCx5OnRoaXMueStzaWRlWSpvZmZzZXQsd2lkdGgsaGVpZ2h0LGNvbG9yOnRoaXMuY29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb3JlQ29sb3IsZ2xvdzp0aGlzLmdsb3csaW50ZW5zaXR5OnRoaXMuaW50ZW5zaXR5LHNoYXBlOm5lZWRsZT9cImNpcmNsZVwiOlwiYm9sdFwiLHJvdGF0aW9ufSk7XG4gICAgaWYoc3BsaXQpe2FkZCgtdGhpcy5yYWRpdXMqLjcpO2FkZCh0aGlzLnJhZGl1cyouNyl9ZWxzZSBhZGQoMCk7XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25WaWN0b3J5T3B0aW9ucyB7XG4gIGNlbnRlclg6IG51bWJlcjtcbiAgY2VudGVyWTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcGFydGljbGVDb3VudD86IG51bWJlcjtcbiAgZHVyYXRpb25Ncz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25WaWN0b3J5RXhwZXJpZW5jZSB7XG4gIHJlYWRvbmx5IHN0YXJ0ZWRBdDogbnVtYmVyO1xuICByZWFkb25seSBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IE5lb25WaWN0b3J5T3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uVmljdG9yeU9wdGlvbnMsIHN0YXJ0ZWRBdCA9IHBlcmZvcm1hbmNlLm5vdygpKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN0YXJ0ZWRBdCA9IHN0YXJ0ZWRBdDtcbiAgICB0aGlzLmR1cmF0aW9uTXMgPSBvcHRpb25zLmR1cmF0aW9uTXMgPz8gNDIwMDtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0ZWRBdCA+PSB0aGlzLmR1cmF0aW9uTXM7XG4gIH1cblxuICBwcmltaXRpdmVzKG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICBjb25zdCBlbGFwc2VkID0gTWF0aC5tYXgoMCwgbm93IC0gdGhpcy5zdGFydGVkQXQpO1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oMSwgZWxhcHNlZCAvIHRoaXMuZHVyYXRpb25Ncyk7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLm9wdGlvbnMucGFydGljbGVDb3VudCA/PyA5MDtcbiAgICBjb25zdCBjb2xvcnMgPSBbbmVvblBhbGV0dGUuY3lhbiwgbmVvblBhbGV0dGUucGluaywgbmVvblBhbGV0dGUuZ29sZCwgbmVvblBhbGV0dGUuZ3JlZW4sIG5lb25QYWxldHRlLnZpb2xldCwgbmVvblBhbGV0dGUub3JhbmdlXTtcbiAgICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHNlZWQgPSBpbmRleCAqIDkxLjczO1xuICAgICAgY29uc3QgZGVsYXkgPSAoaW5kZXggJSAxMikgKiAwLjAzNTtcbiAgICAgIGNvbnN0IGxvY2FsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcHJvZ3Jlc3MgKiAxLjM1IC0gZGVsYXkpKTtcbiAgICAgIGlmIChsb2NhbCA8PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKChzZWVkICUgMzYwKSAvIDE4MCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3Qgc3BlZWQgPSAwLjIyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAyNjA7XG4gICAgICBjb25zdCBkcmlmdCA9IE1hdGguc2luKHNlZWQpICogdGhpcy5vcHRpb25zLndpZHRoICogMC4wNiAqIGxvY2FsO1xuICAgICAgY29uc3QgeCA9IHRoaXMub3B0aW9ucy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogdGhpcy5vcHRpb25zLndpZHRoICogc3BlZWQgKiBsb2NhbCArIGRyaWZ0O1xuICAgICAgY29uc3QgeSA9IHRoaXMub3B0aW9ucy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogdGhpcy5vcHRpb25zLmhlaWdodCAqIHNwZWVkICogbG9jYWwgKyB0aGlzLm9wdGlvbnMuaGVpZ2h0ICogMC40MiAqIGxvY2FsICogbG9jYWw7XG4gICAgICBjb25zdCBmYWRlID0gTWF0aC5tYXgoMCwgMSAtIGxvY2FsICogMC43Mik7XG4gICAgICBjb25zdCBzaXplID0gMi41ICsgKGluZGV4ICUgNSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4LCB5LFxuICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogKDEuOCArIGluZGV4ICUgMyksXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbaW5kZXggJSBjb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGNvbG9yc1soaW5kZXggKyAyKSAlIGNvbG9ycy5sZW5ndGhdLFxuICAgICAgICBnbG93OiAwLjU1LFxuICAgICAgICBpbnRlbnNpdHk6IGZhZGUsXG4gICAgICAgIHNoYXBlOiBpbmRleCAlIDQgPT09IDAgPyBcInNwYXJrXCIgOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgeDogdGhpcy5vcHRpb25zLmNlbnRlclgsXG4gICAgICB5OiB0aGlzLm9wdGlvbnMuY2VudGVyWSxcbiAgICAgIHdpZHRoOiA4MCArIHByb2dyZXNzICogMTgwLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlLmN5YW4sXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICAgICAgZ2xvdzogMC41NSAqICgxIC0gcHJvZ3Jlc3MpLFxuICAgICAgaW50ZW5zaXR5OiBNYXRoLm1heCgwLCAxIC0gcHJvZ3Jlc3MpLFxuICAgICAgc2hhcGU6IFwicmluZ1wiLFxuICAgIH0pO1xuICAgIHJldHVybiBwcmltaXRpdmVzO1xuICB9XG59XG4iLCAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhbWlseURlZmluaXRpb248VE1lbWJlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICBhYnN0cmFjdCByZWFkb25seSBmYW1pbHlJZDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBtZW1iZXJzOiBUTWVtYmVycztcblxuICBwcm90ZWN0ZWQgcmVxdWlyZShjb25kaXRpb246IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZyk6IGFzc2VydHMgY29uZGl0aW9uIHtcbiAgICBpZiAoIWNvbmRpdGlvbikgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMuZmFtaWx5SWR9OiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBhYnN0cmFjdCB2YWxpZGF0ZSgpOiB2b2lkO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNob3RQYXR0ZXJuID0gXCJzaW5nbGVcIiB8IFwicmFwaWRTaW5nbGVcIiB8IFwiYnVyc3RcIiB8IFwiaGVhdnlTaW5nbGVcIiB8IFwicGFpcmVkU3ByZWFkXCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlQmVoYXZpb3IgPSBcInN0cmFpZ2h0XCIgfCBcInBpZXJjaW5nU3RyYWlnaHRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVTaGFwZSA9IFwibmVlZGxlXCIgfCBcImRhcnRcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcbmV4cG9ydCB0eXBlIE11enpsZUVmZmVjdCA9IFwiY3Jpc3BTdGFyXCIgfCBcInJhcGlkRmxpY2tlclwiIHwgXCJncm91cGVkUHVsc2VcIiB8IFwic2hvY2tEaWFtb25kXCIgfCBcInR3aW5Qcm9uZ3NcIjtcbmV4cG9ydCB0eXBlIEltcGFjdEVmZmVjdCA9IFwicGluU3BhcmtcIiB8IFwibmVlZGxlU2NhdHRlclwiIHwgXCJidXJzdENyb3NzXCIgfCBcImltcGFjdFJpbmdcIiB8IFwic3BsaXRSaXBwbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5MZXZlbCB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGZpcmVSYXRlUGVyU2Vjb25kOiBudW1iZXI7XG4gIGRhbWFnZTogbnVtYmVyO1xuICBwcm9qZWN0aWxlU3BlZWQ6IG51bWJlcjtcbiAgcHJvamVjdGlsZVJhZGl1czogbnVtYmVyO1xuICBwcm9qZWN0aWxlQ291bnQ6IG51bWJlcjtcbiAgYnVyc3RDb3VudDogbnVtYmVyO1xuICBidXJzdEludGVydmFsTXM6IG51bWJlcjtcbiAgc3ByZWFkRGVncmVlczogbnVtYmVyO1xuICBwaWVyY2U6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiBudW1iZXI7XG4gIGltcGFjdFJhZGl1cz86IG51bWJlcjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIG11enpsZUZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0Rmxhc2hTY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1blZpc3VhbElkZW50aXR5IHtcbiAgc2lsaG91ZXR0ZTogc3RyaW5nO1xuICBtb3Rpb25MYW5ndWFnZTogc3RyaW5nO1xuICBwcm9qZWN0aWxlU2hhcGU6IFByb2plY3RpbGVTaGFwZTtcbiAgcHJvamVjdGlsZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICB0cmFpbENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHByb2plY3RpbGVBc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBtdXp6bGVFZmZlY3Q6IE11enpsZUVmZmVjdDtcbiAgaW1wYWN0RWZmZWN0OiBJbXBhY3RFZmZlY3Q7XG4gIG11enpsZUR1cmF0aW9uTXM6IG51bWJlcjtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICBob3Jpem9udGFsSml0dGVyOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5NZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiB8IFwiZmlyc3RCdWlsZFwiIHwgXCJwcmVzc3VyZVwiO1xuICBzaG90UGF0dGVybjogU2hvdFBhdHRlcm47XG4gIHByb2plY3RpbGVCZWhhdmlvcjogUHJvamVjdGlsZUJlaGF2aW9yO1xuICB2aXN1YWxJZGVudGl0eTogR3VuVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgR3VuTGV2ZWxbXTtcbn1cblxuY29uc3QgbGV2ZWwgPSAoXG4gIGxldmVsTnVtYmVyOiBudW1iZXIsXG4gIHZhbHVlczogT21pdDxHdW5MZXZlbCwgXCJsZXZlbFwiIHwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiPiAmXG4gICAgUGFydGlhbDxQaWNrPEd1bkxldmVsLCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCIgfCBcImltcGFjdFJhZGl1c1wiPj4sXG4pOiBHdW5MZXZlbCA9PiAoe1xuICBsZXZlbDogbGV2ZWxOdW1iZXIsXG4gIHByb2plY3RpbGVDb3VudDogMSxcbiAgYnVyc3RDb3VudDogMSxcbiAgYnVyc3RJbnRlcnZhbE1zOiAwLFxuICBzcHJlYWREZWdyZWVzOiAwLFxuICBwaWVyY2U6IDAsXG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogMCxcbiAga25vY2tiYWNrOiAwLFxuICAuLi52YWx1ZXMsXG59KTtcblxuZXhwb3J0IGNsYXNzIEd1bkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImd1blwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiR3VuXCI7XG4gIHJlYWRvbmx5IGltcGxlbWVudGF0aW9uID0ge1xuICAgIGF1dG9GaXJlczogdHJ1ZSxcbiAgICB0YXJnZXRpbmc6IFwibGFuZUZvcndhcmRcIixcbiAgICBwcm9qZWN0aWxlTW9kZWw6IFwia2luZW1hdGljXCIsXG4gICAgY29sbGlzaW9uTW9kZWw6IFwiY2lyY2xlVnNFbmVteVwiLFxuICAgIGFsbG93ZWRTaG90UGF0dGVybnM6IFtcInNpbmdsZVwiLCBcInJhcGlkU2luZ2xlXCIsIFwiYnVyc3RcIiwgXCJoZWF2eVNpbmdsZVwiLCBcInBhaXJlZFNwcmVhZFwiXSBzYXRpc2ZpZXMgU2hvdFBhdHRlcm5bXSxcbiAgICBhbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9yczogW1wic3RyYWlnaHRcIiwgXCJwaWVyY2luZ1N0cmFpZ2h0XCJdIHNhdGlzZmllcyBQcm9qZWN0aWxlQmVoYXZpb3JbXSxcbiAgfSBhcyBjb25zdDtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHB1bHNlUGlzdG9sOiB7XG4gICAgICBsYWJlbDogXCJQdWxzZSBQaXN0b2xcIiwgcmFyaXR5OiBcInN0YXJ0ZXJcIiwgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiwgc2hvdFBhdHRlcm46IFwic2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJ0aW55QnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImNsZWFuU2luZ2xlU2hvdFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiY3lhblwiLCB0cmFpbENvbG9yOiBcImRlZXBCbHVlXCIsIGNvcmVDb2xvcjogXCJjeWFuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuOCwgdHJhaWxXaWR0aFNjYWxlOiAwLjY1LCB2aXN1YWxJbnRlbnNpdHk6IDAuOSwgbXV6emxlRWZmZWN0OiBcImNyaXNwU3RhclwiLCBpbXBhY3RFZmZlY3Q6IFwicGluU3BhcmtcIiwgbXV6emxlRHVyYXRpb25NczogNzIsIGltcGFjdER1cmF0aW9uTXM6IDEwNSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOjEscHJvamVjdGlsZVNwZWVkOjU0MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS43NSxkYW1hZ2U6MS4xNSxwcm9qZWN0aWxlU3BlZWQ6NTgwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljh9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi4xNSxkYW1hZ2U6MS4zNSxwcm9qZWN0aWxlU3BlZWQ6NjIwLHByb2plY3RpbGVSYWRpdXM6My4yNSx0cmFpbExlbmd0aDoxOCxtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi45fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgbmVlZGxlclNtZzoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlciBTTUdcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcInJhcGlkU2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzcHJheVNwaGVyZVwiLCBtb3Rpb25MYW5ndWFnZTogXCJzdG9jaGFzdGljTmVlZGxlU3ByYXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcIm5lZWRsZVwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ3JlZW5cIiwgdHJhaWxDb2xvcjogXCJjeWFuXCIsIGNvcmVDb2xvcjogXCJncmVlblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLCB0cmFpbFdpZHRoU2NhbGU6IDAuMjgsIHZpc3VhbEludGVuc2l0eTogMC43OCwgbXV6emxlRWZmZWN0OiBcInJhcGlkRmxpY2tlclwiLCBpbXBhY3RFZmZlY3Q6IFwibmVlZGxlU2NhdHRlclwiLCBtdXp6bGVEdXJhdGlvbk1zOiA0NiwgaW1wYWN0RHVyYXRpb25NczogODUsIGhvcml6b250YWxKaXR0ZXI6IDcgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDo1LjI1LGRhbWFnZTouNDIscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjEwLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjM1LGhpdEZsYXNoU2NhbGU6LjQ1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjcuMjUsZGFtYWdlOi40OCxwcm9qZWN0aWxlU3BlZWQ6NzM1LHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEuNSx0cmFpbExlbmd0aDoxMSx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi40LGhpdEZsYXNoU2NhbGU6LjV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6OS4yNSxkYW1hZ2U6LjU0LHByb2plY3RpbGVTcGVlZDo3ODAscHJvamVjdGlsZVJhZGl1czoyLjE1LHNwcmVhZERlZ3JlZXM6Mix0cmFpbExlbmd0aDoxMix0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi40NSxoaXRGbGFzaFNjYWxlOi41NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1cnN0Q2FyYmluZToge1xuICAgICAgbGFiZWw6IFwiQnVyc3QgQ2FyYmluZVwiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwiYnVyc3RcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNob3J0VHJhY2VyQnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImdyb3VwZWRWb2xsZXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdvbGRcIiwgdHJhaWxDb2xvcjogXCJvcmFuZ2VcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMi4yLCB0cmFpbFdpZHRoU2NhbGU6IDAuOCwgdmlzdWFsSW50ZW5zaXR5OiAxLjA1LCBtdXp6bGVFZmZlY3Q6IFwiZ3JvdXBlZFB1bHNlXCIsIGltcGFjdEVmZmVjdDogXCJidXJzdENyb3NzXCIsIG11enpsZUR1cmF0aW9uTXM6IDg2LCBpbXBhY3REdXJhdGlvbk1zOiAxMjAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouOTUsZGFtYWdlOi43NSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6Mi43NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjcyLHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDgsZGFtYWdlOi44NSxwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6Mi44NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjY0LHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjYsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOSxwcm9qZWN0aWxlU3BlZWQ6NzI1LHByb2plY3RpbGVSYWRpdXM6MyxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU4LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGhlYXZ5Q2Fubm9uOiB7XG4gICAgICBsYWJlbDogXCJIZWF2eSBDYW5ub25cIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcImhlYXZ5U2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJwaWVyY2luZ1N0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcImNodW5reUJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic2xvd0hlYXZ5UHVuY2hcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNsdWdcIiwgcHJvamVjdGlsZUNvbG9yOiBcIm9yYW5nZVwiLCB0cmFpbENvbG9yOiBcInJlZFwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLjM1LCB0cmFpbFdpZHRoU2NhbGU6IDEuMzUsIHZpc3VhbEludGVuc2l0eTogMS4yLCBtdXp6bGVFZmZlY3Q6IFwic2hvY2tEaWFtb25kXCIsIGltcGFjdEVmZmVjdDogXCJpbXBhY3RSaW5nXCIsIG11enpsZUR1cmF0aW9uTXM6IDEzNSwgaW1wYWN0RHVyYXRpb25NczogMTkwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjcyLGRhbWFnZToyLjQscHJvamVjdGlsZVNwZWVkOjUwMCxwcm9qZWN0aWxlUmFkaXVzOjQuNSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyMixpbXBhY3RSYWRpdXM6MTQsa25vY2tiYWNrOjE0LG11enpsZUZsYXNoU2NhbGU6MS4xLGhpdEZsYXNoU2NhbGU6MS4yNX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDouODIsZGFtYWdlOjMscHJvamVjdGlsZVNwZWVkOjUzNSxwcm9qZWN0aWxlUmFkaXVzOjQuNzUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjQsaW1wYWN0UmFkaXVzOjE2LGtub2NrYmFjazoxOCxtdXp6bGVGbGFzaFNjYWxlOjEuMixoaXRGbGFzaFNjYWxlOjEuMzV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjksZGFtYWdlOjMuNixwcm9qZWN0aWxlU3BlZWQ6NTcwLHByb2plY3RpbGVSYWRpdXM6NSxwaWVyY2U6Mix0cmFpbExlbmd0aDoyNixpbXBhY3RSYWRpdXM6MTgsa25vY2tiYWNrOjIyLG11enpsZUZsYXNoU2NhbGU6MS4zLGhpdEZsYXNoU2NhbGU6MS41fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc3BsaXR0ZXJSaWZsZToge1xuICAgICAgbGFiZWw6IFwiU3BsaXR0ZXIgUmlmbGVcIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcInBhaXJlZFNwcmVhZFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwicGFpcmVkQm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjdXJyZW50TGFuZUZvcmtcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNwbGl0Qm9sdFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwidmlvbGV0XCIsIHRyYWlsQ29sb3I6IFwicGlua1wiLCBjb3JlQ29sb3I6IFwidmlvbGV0XCIsIHByb2plY3RpbGVBc3BlY3Q6IDMuNCwgdHJhaWxXaWR0aFNjYWxlOiAwLjU1LCB2aXN1YWxJbnRlbnNpdHk6IDEsIG11enpsZUVmZmVjdDogXCJ0d2luUHJvbmdzXCIsIGltcGFjdEVmZmVjdDogXCJzcGxpdFJpcHBsZVwiLCBtdXp6bGVEdXJhdGlvbk1zOiA5NSwgaW1wYWN0RHVyYXRpb25NczogMTQ1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjgscHJvamVjdGlsZVNwZWVkOjU4NSxwcm9qZWN0aWxlUmFkaXVzOjIuNzUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczoyLjUsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6Ljk1LHByb2plY3RpbGVTcGVlZDo2MjUscHJvamVjdGlsZVJhZGl1czoyLjg1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Myx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS41NSxkYW1hZ2U6MS4wNSxwcm9qZWN0aWxlU3BlZWQ6NjY1LHByb2plY3RpbGVSYWRpdXM6Myxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMuNSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGd1bl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFNob3RQYXR0ZXJucy5pbmNsdWRlcyhndW4uc2hvdFBhdHRlcm4pLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHNob3QgcGF0dGVybi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzLmluY2x1ZGVzKGd1bi5wcm9qZWN0aWxlQmVoYXZpb3IpLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHByb2plY3RpbGUgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHByb2plY3RpbGUgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biB0cmFpbCBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyA+IDAgJiYgZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZWZmZWN0IGR1cmF0aW9ucyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgZGVmaW5lIGxldmVscy5gKTtcbiAgICAgIGZvciAoY29uc3QgdHVuaW5nIG9mIGd1bi5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5maXJlUmF0ZVBlclNlY29uZCA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gZmlyZSByYXRlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVNwZWVkID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVJhZGl1cyA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgcHJvamVjdGlsZSBwb3dlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5idXJzdENvdW50ID49IDEgJiYgdHVuaW5nLnByb2plY3RpbGVDb3VudCA+PSAxLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIGNvdW50cy5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGd1bkZhbWlseSA9IG5ldyBHdW5GYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBHdW5JZCA9IGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15U3Bhd25FbnRyYW5jZSA9IFwic2NhdHRlclwiIHwgXCJmYWRlXCI7XG5leHBvcnQgdHlwZSBFbmVteURlYXRoVmlzdWFsID0gXCJjbG91ZFwiIHwgXCJub25lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JiTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaGVhbHRoOiBudW1iZXI7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgYmFzZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICByaW1Db2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhZG93Q29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYXBlSWQ6IHN0cmluZztcbiAgZ2xvdzogbnVtYmVyO1xuICBzdXJmYWNlVGV4dHVyZTogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgaGl0Rmxhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGRlYXRoRmxhc2hTY2FsZTogbnVtYmVyO1xuICBzaGFwZVpvb206IG51bWJlcjtcbiAgaW1wYWN0UmVzaXN0YW5jZTogbnVtYmVyO1xuICBleHBsb3Npb25NYWduaXR1ZGU6IG51bWJlcjtcbiAgc3Bhd25FbnRyYW5jZTogRW5lbXlTcGF3bkVudHJhbmNlO1xuICBzcGF3blNvdW5kOiBzdHJpbmcgfCBudWxsO1xuICBkZWF0aFNvdW5kOiBzdHJpbmc7XG4gIGRlYXRoVmlzdWFsOiBFbmVteURlYXRoVmlzdWFsO1xufVxuXG5leHBvcnQgY2xhc3MgT3JiRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwib3JiXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJPcmIgRW5lbXlcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBiYXNpY09yYjoge1xuICAgICAgbGFiZWw6IFwiQmFzaWMgT3JiXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxMCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJodW50ZXItZXllXCIsXG4gICAgICBnbG93OiAwLjgyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IDAuMjgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMjUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogMC43MixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogOTAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuOCxcbiAgICAgIHNoYXBlWm9vbTogMy40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkVuZW15U3Bhd25cIixcbiAgICAgIGRlYXRoU291bmQ6IFwiRW5lbXlEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgICBnbGFzc1NoaWVsZDoge1xuICAgICAgbGFiZWw6IFwiR2xhc3MgU2hpZWxkXCIsXG4gICAgICBoZWFsdGg6IC4xLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA1LjYsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogLjEsXG4gICAgICBzY29yZTogMyxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0cmljay1nYXRlXCIsXG4gICAgICBnbG93OiAuNjIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjEyLFxuICAgICAgcmltSW50ZW5zaXR5OiAwLjksXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjQ1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA3MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS4xLFxuICAgICAgc2hhcGVab29tOiAzLjA1LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogLjY1LFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuMjUsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcImZhZGVcIixcbiAgICAgIHNwYXduU291bmQ6IG51bGwsXG4gICAgICBkZWF0aFNvdW5kOiBcIkdsYXNzU2hpZWxkU2hhdHRlclwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgd2luZ2VyOiB7XG4gICAgICBsYWJlbDogXCJXaW5nZXJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA3NixcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDE0LFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcImVsaXRlLXdpbmdzXCIsXG4gICAgICBnbG93OiAuODYsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjIyLFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjIsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjY2LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA4NSxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS43NSxcbiAgICAgIHNoYXBlWm9vbTogMy4yNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgdGFuazoge1xuICAgICAgbGFiZWw6IFwiVGFua1wiLFxuICAgICAgaGVhbHRoOiA2LFxuICAgICAgc3BlZWQ6IDQ0LFxuICAgICAgcmFkaXVzOiAxNixcbiAgICAgIGNvbHVtblNwYW46IDMsXG4gICAgICBjb250YWN0RGFtYWdlOiAyLFxuICAgICAgc2NvcmU6IDgwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRhbmstYnVua2VyXCIsXG4gICAgICBnbG93OiAxLjA1LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS40NSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuODUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMi43LFxuICAgICAgc2hhcGVab29tOiA0LjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAyLjEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC45LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkJvc3NcIixcbiAgICAgIGRlYXRoU291bmQ6IFwiQm9zc0Rlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKG9yYi5jb2x1bW5TcGFuKSAmJiBvcmIuY29sdW1uU3BhbiA+PSAxLCBgJHtpZH0gY29sdW1uU3BhbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBsZXZlbCA1IGRhbWFnZSBwZXIgaGl0LlxuICAgKlxuICAgKiBMZXZlbCAxIHVzZXMgZGFtYWdlLCBsZXZlbCA1IHVzZXMgZGFtYWdlQXRMZXZlbDUsIGFuZCBpbnRlcm1lZGlhdGUgbGV2ZWxzXG4gICAqIGludGVycG9sYXRlLiBVc2UgdGhpcyB3aGVuIGR1cGxpY2F0ZSBwaWNrdXBzIHNob3VsZCBpbmNyZWFzZSB0b3RhbCBIUFxuICAgKiBjbGVhcmVkIHdpdGhvdXQgY2hhbmdpbmcgcHJveGltaXR5IHJ1bGVzLlxuICAgKi9cbiAgZGFtYWdlQXRMZXZlbDU/OiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gbm90IGZpcmUgb24gYSB0aW1lcjsgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgdmVydGljYWwgcmVhY2ggaW4gYXV0aG9yZWQgdHJhY2sgcm93cy5cbiAgICpcbiAgICogSGVhdnkgc3dlZXBpbmcgc3dvcmRzIGNhbiB1c2UgdGhpcyB3aXRoIHJlcGVhdGVkIHBpY2t1cHM6IGxldmVsIDEgdXNlc1xuICAgKiBsZXZlbDEgcm93cywgbGV2ZWwgNSB1c2VzIGxldmVsNSByb3dzLCBhbmQgaW50ZXJtZWRpYXRlIGxldmVscyBpbnRlcnBvbGF0ZS5cbiAgICogVGhpcyBleHBhbmRzIGFmZmVjdGVkIHJvd3MgYWZ0ZXIgYSBjbG9zZSB0YXJnZXQgaXMgZm91bmQ7IGl0IGRvZXMgbm90XG4gICAqIGxvb3NlbiB0aGUgbmVhci1wbGF5ZXIgcHJveGltaXR5IHRocmVzaG9sZC5cbiAgICovXG4gIHJvd1JlYWNoPzoge1xuICAgIGxldmVsMTogbnVtYmVyO1xuICAgIGxldmVsNTogbnVtYmVyO1xuICB9O1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lOyBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIG5vdCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBSZXBlYXRlZCBwaWNrdXBzIG9mIHRoZSBzYW1lIHN3b3JkIGluY3JlYXNlIHRoYXQgc3dvcmQncyBhY3RpdmUgbGV2ZWwuXG4gICAqIC0gQ2FuIGNvZXhpc3Qgd2l0aCBhbiBhY3RpdmUgR3VuIGFuZCBhbiBhY3RpdmUgU2hpZWxkIHNpbXVsdGFuZW91c2x5LlxuICAgKiAtIFRhcmdldGluZyBpcyBsYW5lLWF3YXJlIHZpYSBxdWVyeU5lYXJieVRocmVhdHMoKS5cbiAgICogLSBUaGUgc2xhc2ggYW5pbWF0aW9uIHJ1bnMgZm9yIHNsYXNoRHVyYXRpb25NcyBtaWxsaXNlY29uZHMsIHRoZW4gZmFkZXMuXG4gICAqIC0gRGFtYWdlIGlzIGFwcGxpZWQgaW1tZWRpYXRlbHkgd2hlbiB0aGUgc3dpbmcgc3RhcnRzIChub3QgYXQgYW5pbWF0aW9uIGVuZCkuXG4gICAqXG4gICAqIFByZWNlZGVuY2U6IHN3b3JkIGF0dGFja3Mgb2NjdXIgYWZ0ZXIgc2hpZWxkQmxvY2svc2hpZWxkUHVsc2UgYnV0IGJlZm9yZVxuICAgKiBzaGllbGRDb250YWN0RGFtYWdlIGFuZCBzaGllbGRBdXJhLiBTZWUgbWFpbi50cyBuZWFyUGxheWVyRWZmZWN0T3JkZXIuXG4gICAqL1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIC8qKlxuICAgICAqIEFyYyBCbGFkZSAtIENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogU2hvcnQgY29vbGRvd24gbWFrZXMgaXQgdXNlZnVsIGFnYWluc3QgZGVuc2Ugc2luZ2xlLWxhbmUgd2F2ZXMuXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC41NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwLTE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgLSBIZWF2eSBzd29yZC4gU2xvd2VyLCBidXQgc3dlZXBzIGFjcm9zcyBldmVyeSBjb2x1bW4uXG4gICAgICogU3RhcnRzIHdpdGggMiByb3dzIG9mIHZlcnRpY2FsIHJlYWNoIGFuZCBzY2FsZXMgdG8gNCByb3dzIGF0IGxldmVsIDUuXG4gICAgICovXG4gICAgY2xlYXZlcjoge1xuICAgICAgbGFiZWw6IFwiQ2xlYXZlclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICByYW5nZTogNjgsXG4gICAgICBhcmNEZWdyZWVzOiAzNjAsXG4gICAgICBkYW1hZ2U6IDIuNCxcbiAgICAgIGRhbWFnZUF0TGV2ZWw1OiAzLjQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMzUsXG4gICAgICBtYXhUYXJnZXRzOiAxMixcbiAgICAgIHJvd1JlYWNoOiB7IGxldmVsMTogMiwgbGV2ZWw1OiA0IH0sXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMjYwLFxuICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS45LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbGwtY29sdW1uIHN3ZWVwLiBSZXBlYXRlZCBjbGVhdmVyIHBpY2t1cHMgbGV2ZWwgaXQgdXAgZnJvbSAyIHJvd3Mgb2YgcmVhY2ggdG8gNCByb3dzIGF0IGxldmVsIDUsIHdpdGggbW9yZSB0b3RhbCBkYW1hZ2UgcGVyIHN3aW5nLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSBhcyBBcnJheTxbc3RyaW5nLCBTd29yZE1lbWJlcl0+KSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQucmFuZ2UgPiAwLCBgJHtpZH0gcmFuZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5hcmNEZWdyZWVzID4gMCAmJiBzd29yZC5hcmNEZWdyZWVzIDw9IDM2MCwgYCR7aWR9IGFyY0RlZ3JlZXMgbXVzdCBiZSBpbiAoMCwgMzYwXS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2UgPiAwLCBgJHtpZH0gZGFtYWdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICBpZiAoc3dvcmQuZGFtYWdlQXRMZXZlbDUgIT09IHVuZGVmaW5lZCkgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ID49IHN3b3JkLmRhbWFnZSwgYCR7aWR9IGRhbWFnZUF0TGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgZGFtYWdlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIGlmIChzd29yZC5yb3dSZWFjaCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDEpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsMSA+PSAxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWwxIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDUpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsNSA+PSBzd29yZC5yb3dSZWFjaC5sZXZlbDEsIGAke2lkfSByb3dSZWFjaC5sZXZlbDUgbXVzdCBiZSBhdCBsZWFzdCBsZXZlbDEuYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGVnZW5kRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0JhbGFuY2Uge1xuICBlbmVteUhwOiBudW1iZXI7XG4gIGVuZW15U3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RlZmluaXRpb24ge1xuICBsYXlvdXQ6IHN0cmluZztcbiAgbGVnZW5kOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBUcmFja0xlZ2VuZEVudHJ5Pj47XG4gIGJhbGFuY2U6IFRyYWNrQmFsYW5jZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja01lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGRlZmluaXRpb246IFRyYWNrRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0ZhbWlseU1lbWJlcjxUcmFja0lkIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIHRyYWNrSWRzOiByZWFkb25seSBUcmFja0lkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkVHJhY2tFbnRpdHkge1xuICBpZDogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG4gIGxhbmVJbmRleDogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIHJvd0luZGV4OiBudW1iZXI7XG4gIGRpc3RhbmNlRnJvbVBsYXllcjogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuY29uc3QgaXNFbmVteSA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PiBpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpO1xuY29uc3QgZW5lbXlJZEZyb21UcmFja0lkID0gKGlkOiBzdHJpbmcpOiBPcmJJZCB8IG51bGwgPT4ge1xuICBpZiAoaWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY2FuZGlkYXRlID0gaWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xuICByZXR1cm4gY2FuZGlkYXRlIGluIG9yYkZhbWlseS5tZW1iZXJzID8gY2FuZGlkYXRlIGFzIE9yYklkIDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlVHJhY2tSb3dzKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgc291cmNlSW5kZXg6IG51bWJlciB9PiB7XG4gIGNvbnN0IHJvd3MgPSB0cmFjay5sYXlvdXRcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKHRleHQsIHNvdXJjZUluZGV4KSA9PiAoeyB0ZXh0OiB0ZXh0LnRyaW0oKSwgc291cmNlSW5kZXg6IHNvdXJjZUluZGV4ICsgMSB9KSlcbiAgICAuZmlsdGVyKHJvdyA9PiByb3cudGV4dC5sZW5ndGggPiAwKTtcblxuICBpZiAocm93cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxheW91dCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJvdy5cIik7XG4gIHJldHVybiByb3dzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IFBhcnNlZFRyYWNrRW50aXR5W10ge1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGZvciAoY29uc3QgW3N5bWJvbCwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKHRyYWNrLmxlZ2VuZCkpIHtcbiAgICBpZiAoWy4uLnN5bWJvbF0ubGVuZ3RoICE9PSAxIHx8IC9cXHN8XFx8Ly50ZXN0KHN5bWJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIGtleSBcIiR7c3ltYm9sfVwiIG11c3QgYmUgb25lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBvdGhlciB0aGFuIFwifFwiLmApO1xuICAgIH1cbiAgICBpZiAoIWVudHJ5LmlkKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBtdXN0IGhhdmUgYW4gaWQuYCk7XG4gICAgaWYgKGVudHJ5LnNwZWVkICE9PSB1bmRlZmluZWQgJiYgZW50cnkuc3BlZWQgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb3dzID0gcGFyc2VUcmFja1Jvd3ModHJhY2spO1xuICBsZXQgbGVmdFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxldCByaWdodFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG5cbiAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgcGlwZUNvdW50ID0gWy4uLnJvdy50ZXh0XS5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3RlciA9PT0gXCJ8XCIpLmxlbmd0aDtcbiAgICBpZiAocGlwZUNvdW50ICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgXCJ8XCIgc2VwYXJhdG9yOyBmb3VuZCAke3BpcGVDb3VudH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHJvdy50ZXh0LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgbGVmdFdpZHRoID8/PSBsZWZ0Lmxlbmd0aDtcbiAgICByaWdodFdpZHRoID8/PSByaWdodC5sZW5ndGg7XG5cbiAgICBpZiAobGVmdC5sZW5ndGggIT09IGxlZnRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIGxlZnQgd2lkdGggJHtsZWZ0Lmxlbmd0aH07IGV4cGVjdGVkICR7bGVmdFdpZHRofS5gKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0Lmxlbmd0aCAhPT0gcmlnaHRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIHJpZ2h0IHdpZHRoICR7cmlnaHQubGVuZ3RofTsgZXhwZWN0ZWQgJHtyaWdodFdpZHRofS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0YW5jZUZyb21QbGF5ZXIgPSByb3dzLmxlbmd0aCAtIDEgLSByb3dJbmRleDtcbiAgICBmb3IgKGNvbnN0IFtzaWRlLCBsYW5lXSBvZiBbW1wibGVmdFwiLCBsZWZ0XSwgW1wicmlnaHRcIiwgcmlnaHRdXSBhcyBjb25zdCkge1xuICAgICAgY29uc3Qgb2NjdXBpZWRCeSA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoZW50cnkuaWQpO1xuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gZW5lbXlJZCA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdLmNvbHVtblNwYW4gOiAxO1xuICAgICAgICBpZiAobGFuZUluZGV4ICsgY29sdW1uU3BhbiA+IGxhbmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBuZWVkcyAke2NvbHVtblNwYW59IGNvbHVtbnMgYW5kIG9ubHkgJHtsYW5lLmxlbmd0aCAtIGxhbmVJbmRleH0gcmVtYWluLmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSB7XG4gICAgICAgICAgY29uc3Qgb2NjdXBpZWQgPSBvY2N1cGllZEJ5LmdldChsYW5lSW5kZXggKyBvZmZzZXQpO1xuICAgICAgICAgIGlmIChvY2N1cGllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IG9uICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleCArIG9mZnNldH0sIGFscmVhZHkgb2NjdXBpZWQgYnkgJHtvY2N1cGllZH0uYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSBvY2N1cGllZEJ5LnNldChsYW5lSW5kZXggKyBvZmZzZXQsIGVudHJ5LmlkKTtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIGNvbHVtblNwYW4sXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZGlzdGFuY2VGcm9tUGxheWVyLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogKGVudHJ5LnNwZWVkID8/IDEpICogKGlzRW5lbXkoZW50cnkuaWQpID8gdHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDogMSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRpZXMuc29ydCgoYSwgYikgPT5cbiAgICBhLmRpc3RhbmNlRnJvbVBsYXllciAtIGIuZGlzdGFuY2VGcm9tUGxheWVyIHx8XG4gICAgYS5yb3dJbmRleCAtIGIucm93SW5kZXggfHxcbiAgICBhLnNpZGUubG9jYWxlQ29tcGFyZShiLnNpZGUpIHx8XG4gICAgYS5sYW5lSW5kZXggLSBiLmxhbmVJbmRleCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgZ3VuRmFtaWx5IH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4vTXVsdGlwbGllckZhbWlseVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5IH0gZnJvbSBcIi4vT3JiRmFtaWx5XCI7XG5pbXBvcnQgeyBzaGllbGRGYW1pbHkgfSBmcm9tIFwiLi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB7IHN3b3JkRmFtaWx5IH0gZnJvbSBcIi4vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uLCB0eXBlIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbi8qKlxuICogR2xvYmFsIDAtYmFzZWQgY29sdW1uIGluZGV4IGFjcm9zcyBib3RoIGxhbmVzLlxuICpcbiAqIEN1cnJlbnQgbGF5b3V0IHNoYXBlOlxuICogLSBjb2x1bW5zIDAtNCBhcmUgdGhlIGxlZnQgbGFuZVxuICogLSBjb2x1bW5zIDUtOSBhcmUgdGhlIHJpZ2h0IGxhbmVcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC0gMiA9IGxlZnQgbGFuZSBtaWRkbGVcbiAqIC0gNyA9IHJpZ2h0IGxhbmUgbWlkZGxlXG4gKi9cbmV4cG9ydCB0eXBlIFRyYWNrQ29sdW1uID0gbnVtYmVyO1xuXG4vKipcbiAqIEZyaWVuZGx5IGNvbHVtbiBjb25zdGFudHMgZm9yIHRoZSBjdXJyZW50IDItbGFuZSAvIDUtY29sdW1uIHRyYWNrIGZvcm1hdC5cbiAqXG4gKiBUaGVzZSBhcmUgb25seSBzdWdhci4gVGhlIGJ1aWxkZXIgc3RpbGwgYWNjZXB0cyByYXcgbnVtYmVycyBmb3IgZmFzdCBhdXRob3JpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tDb2x1bW5zIHtcbiAgcmVhZG9ubHkgbGVmdDoge1xuICAgIHJlYWRvbmx5IG91dGVyOiAwO1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogMTtcbiAgICByZWFkb25seSBtaWQ6IDI7XG4gICAgcmVhZG9ubHkgbmVhcklubmVyOiAzO1xuICAgIHJlYWRvbmx5IGlubmVyOiA0O1xuICB9O1xuICByZWFkb25seSByaWdodDoge1xuICAgIHJlYWRvbmx5IGlubmVyOiA1O1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogNjtcbiAgICByZWFkb25seSBtaWQ6IDc7XG4gICAgcmVhZG9ubHkgbmVhck91dGVyOiA4O1xuICAgIHJlYWRvbmx5IG91dGVyOiA5O1xuICB9O1xufVxuXG4vKipcbiAqIENvbW1vbiBleHBvcnRlZCBjb2x1bW4gY29uc3RhbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqIGJ1aWxkZXIuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KVxuICogYnVpbGRlci53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGM6IFRyYWNrQ29sdW1ucyA9IHtcbiAgbGVmdDogeyBvdXRlcjogMCwgbmVhck91dGVyOiAxLCBtaWQ6IDIsIG5lYXJJbm5lcjogMywgaW5uZXI6IDQgfSxcbiAgcmlnaHQ6IHsgaW5uZXI6IDUsIG5lYXJJbm5lcjogNiwgbWlkOiA3LCBuZWFyT3V0ZXI6IDgsIG91dGVyOiA5IH0sXG59O1xuXG5leHBvcnQgdHlwZSBUcmFja0VuZW15UmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tXZWFwb25SZWYgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBUcmFja1BpY2t1cFJlZiA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1BsYWNlbWVudE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICAvKipcbiAgICogT3B0aW9uYWwgcGVyLXN5bWJvbCBzcGVlZCBtdWx0aXBsaWVyIGVtaXR0ZWQgaW50byB0aGUgdHJhY2sgbGVnZW5kLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFRoZSBkZWZhdWx0IGlzIDEsIGFuZCBmdXR1cmUgdHJhY2sgZWRpdHNcbiAgICogc2hvdWxkIHByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseSBhc2tzIGZvciBzcGVlZCB0dW5pbmcuXG4gICAqIENoYW5naW5nIHRoaXMgdmFsdWUgaXMgYSBzaWduaWZpY2FudCBiYWxhbmNlIGNoYW5nZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGluZU9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyB7XG4gIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW107XG4gIGNvdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbXB0eSByb3dzIGJldHdlZW4gZWFjaCBlbmVteS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMC4gSW4gcHJlc3N1cmUgc2VjdGlvbnMsIG9taXQgdGhpcyB1bmxlc3MgdGhlIGdhcCBpc1xuICAgKiBpbnRlbnRpb25hbDsgcHJlc3N1cmUgc2hvdWxkIG5vcm1hbGx5IHBsYWNlIGVuZW1pZXMgZXZlcnkgcm93LlxuICAgKi9cbiAgZ2FwPzogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgcmVwZWF0ZWQgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrV2FsbE9wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgd2FsbC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRHJpcE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICByb3dzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQbGFjZSBvbmUgZW5lbXkgZXZlcnkgTiByb3dzLlxuICAgKlxuICAgKiBEcmlwIGlzIGludGVudGlvbmFsbHkgc3BhcnNlLiBQcmVmZXIgbGluZS9hbHRlcm5hdGluZyB3aXRob3V0IGEgZ2FwIGZvclxuICAgKiBub3JtYWwgcHJlc3N1cmUsIGFuZCB1c2UgZHJpcCBvbmx5IHdoZW4gdGhlIHNwYXJzZSBjYWRlbmNlIGlzIGRlbGliZXJhdGUuXG4gICAqL1xuICBldmVyeTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgZHJpcCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgYmFsYW5jZToge1xuICAgIGVuZW15SHA6IG51bWJlcjtcbiAgICBlbmVteVNwZWVkOiBudW1iZXI7XG4gIH07XG4gIHBsYXllclN0YXJ0Q29sdW1uPzogVHJhY2tDb2x1bW47XG4gIGxhbmVXaWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXIge1xuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWR2YW5jZVJvd3Mocm93czogbnVtYmVyKTogVHJhY2tCdWlsZGVyO1xuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICAvKipcbiAgICogQWRkIGEgZGFuZ2VyLWZvY3VzZWQgc2VjdGlvbiB3aXRoIGEgZml4ZWQgZHVyYXRpb24uXG4gICAqXG4gICAqIFByZXNzdXJlIHNob3VsZCB1c3VhbGx5IGNvbnRhaW4gZW5lbXkgcGxhY2VtZW50IGV2ZXJ5IHJvdy4gVXNlIGV4cGxpY2l0XG4gICAqIGdhcHMgb3IgZHJpcCBwYXR0ZXJucyBvbmx5IHdoZW4gdGhlIHF1aWV0IHNwYWNlIGlzIGludGVudGlvbmFsLlxuICAgKi9cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBidWlsZCgpOiBUcmFja01lbWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJGYWN0b3J5IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG59XG5cbmludGVyZmFjZSBQbGFjZW1lbnQge1xuICByb3c6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHNwYW46IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdExhbmVXaWR0aCA9IDU7XG5jb25zdCBlbXB0eVN5bWJvbCA9IFwiLlwiO1xuY29uc3QgcGxheWVyU3ltYm9sID0gXCJNXCI7XG5jb25zdCBlbmVteUFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBiYXNpYzogXCJlbmVteS5iYXNpY1wiLFxuICBiYXNpY09yYjogXCJlbmVteS5iYXNpY09yYlwiLFxuICBnbGFzczogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICBnbGFzc1NoaWVsZDogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICB3aW5nZXI6IFwiZW5lbXkud2luZ2VyXCIsXG4gIHRhbms6IFwiZW5lbXkudGFua1wiLFxufTtcbmNvbnN0IHdlYXBvblByZWZpeGVzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgZ3VuOiBcInBpY2t1cC53ZWFwb24uZ3VuLlwiLFxuICBzaGllbGQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIsXG4gIHN3b3JkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsXG59O1xuY29uc3QgcGlja3VwQWxpYXNlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwidW5pdE11bHRpcGxpZXIuMnhcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbiAgXCJ1bml0TXVsdGlwbGllci5zcXVhZFBsdXNPbmVcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbn07XG5jb25zdCBwcmVmZXJyZWRTeW1ib2xzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgXCJlbmVteS5iYXNpY1wiOiBcIkVcIixcbiAgXCJlbmVteS5iYXNpY09yYlwiOiBcIkVcIixcbiAgXCJlbmVteS5nbGFzc1NoaWVsZFwiOiBcIkRcIixcbiAgXCJlbmVteS53aW5nZXJcIjogXCJXXCIsXG4gIFwiZW5lbXkudGFua1wiOiBcIlRcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiOiBcIkdcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5uZWVkbGVyU21nXCI6IFwiTlwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiOiBcIkJcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiOiBcIkhcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5zcGxpdHRlclJpZmxlXCI6IFwiUlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIjogXCJTXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuc2F0ZWxsaXRlR3VhcmRcIjogXCJWXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIjogXCJYXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiOiBcImFcIixcbiAgXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIjogXCJjXCIsXG4gIFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwiMlwiLFxufTtcbmNvbnN0IGZhbGxiYWNrU3ltYm9scyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2Nzg5ISMkJSYqKywtLzo7PD0+P0BeX35cIi5zcGxpdChcIlwiKVxuICAuZmlsdGVyKHN5bWJvbCA9PiBzeW1ib2wgIT09IGVtcHR5U3ltYm9sICYmIHN5bWJvbCAhPT0gcGxheWVyU3ltYm9sKTtcblxuZnVuY3Rpb24gcmVxdWlyZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIU51bWJlci5pc0ludGVnZXIodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgYW4gaW50ZWdlci5gKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih2YWx1ZTogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHJlcXVpcmVJbnRlZ2VyKHZhbHVlLCBsYWJlbCk7XG4gIGlmICh2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNwZWVkKHNwZWVkOiBudW1iZXIgfCB1bmRlZmluZWQsIGxhYmVsOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZSA9IHNwZWVkID8/IDE7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRW5lbXlJZChpZDogVHJhY2tFbmVteVJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBlbmVteUFsaWFzZXNbaWRdID8/IGBlbmVteS4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdlYXBvbklkKGlkOiBUcmFja1dlYXBvblJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5cIikpIHJldHVybiBpZDtcbiAgY29uc3QgZG90SW5kZXggPSBpZC5pbmRleE9mKFwiLlwiKTtcbiAgaWYgKGRvdEluZGV4IDw9IDApIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBtdXN0IHVzZSBmYW1pbHkuaWQgc2hvcnRoYW5kIG9yIGEgY2Fub25pY2FsIHBpY2t1cC53ZWFwb24gaWQuYCk7XG4gIGNvbnN0IGZhbWlseSA9IGlkLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgY29uc3QgbWVtYmVyID0gaWQuc2xpY2UoZG90SW5kZXggKyAxKTtcbiAgY29uc3QgcHJlZml4ID0gd2VhcG9uUHJlZml4ZXNbZmFtaWx5XTtcbiAgaWYgKCFwcmVmaXgpIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBoYXMgdW5rbm93biB3ZWFwb24gZmFtaWx5IFwiJHtmYW1pbHl9XCIuYCk7XG4gIHJldHVybiBgJHtwcmVmaXh9JHttZW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGlja3VwSWQoaWQ6IFRyYWNrUGlja3VwUmVmKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBwaWNrdXBBbGlhc2VzW2lkXSA/PyBgcGlja3VwLiR7aWR9YDtcbn1cblxuZnVuY3Rpb24gZW5lbXlNZW1iZXJJZChjYW5vbmljYWxJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChjYW5vbmljYWxJZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWNhbm9uaWNhbElkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICByZXR1cm4gY2Fub25pY2FsSWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICBpZiAoZW5lbXlJZCkge1xuICAgIGlmICghKGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZW5lbXkgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWxpZGF0b3JzOiByZWFkb25seSBbc3RyaW5nLCBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIHN0cmluZ11bXSA9IFtcbiAgICBbXCJwaWNrdXAud2VhcG9uLmd1bi5cIiwgZ3VuRmFtaWx5Lm1lbWJlcnMsIFwiZ3VuXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLCBzaGllbGRGYW1pbHkubWVtYmVycywgXCJzaGllbGRcIl0sXG4gICAgW1wicGlja3VwLndlYXBvbi5zd29yZC5cIiwgc3dvcmRGYW1pbHkubWVtYmVycywgXCJzd29yZFwiXSxcbiAgXTtcbiAgZm9yIChjb25zdCBbcHJlZml4LCBtZW1iZXJzLCBsYWJlbF0gb2YgdmFsaWRhdG9ycykge1xuICAgIGlmICghaWQuc3RhcnRzV2l0aChwcmVmaXgpKSBjb250aW51ZTtcbiAgICBjb25zdCBtZW1iZXJJZCA9IGlkLnNsaWNlKHByZWZpeC5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gJHtsYWJlbH0gaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHJldHVybjtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShcInBpY2t1cC51bml0TXVsdGlwbGllci5cIi5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtdWx0aXBsaWVyIGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCB0cmFjayBlbnRpdHkgaWQgXCIke2lkfVwiLmApO1xufVxuXG5mdW5jdGlvbiBzcGFuRm9yKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlNZW1iZXJJZChpZCk7XG4gIHJldHVybiBlbmVteUlkICYmIGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkIGFzIGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVyc10uY29sdW1uU3BhbiA6IDE7XG59XG5cbmNsYXNzIFRyYWNrQnVpbGRlckNvcmUge1xuICBwcml2YXRlIHJlYWRvbmx5IGxhbmVXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IHBsYWNlbWVudHM6IFBsYWNlbWVudFtdID0gW107XG4gIHByaXZhdGUgY3Vyc29yID0gMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpIHtcbiAgICB0aGlzLmxhbmVXaWR0aCA9IG9wdGlvbnMubGFuZVdpZHRoID8/IGRlZmF1bHRMYW5lV2lkdGg7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih0aGlzLmxhbmVXaWR0aCwgXCJUcmFjayBsYW5lV2lkdGhcIik7XG4gICAgaWYgKHRoaXMubGFuZVdpZHRoIDwgMykgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFuZVdpZHRoIG11c3QgYmUgYXQgbGVhc3QgMy5cIik7XG4gICAgaWYgKCFvcHRpb25zLmxhYmVsLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFiZWwgaXMgcmVxdWlyZWQuXCIpO1xuICAgIGlmICghb3B0aW9ucy5kZXNjcmlwdGlvbi50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIGlmIChvcHRpb25zLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLnBsYXllclN0YXJ0Q29sdW1uID8/IGMubGVmdC5taWQsIFwicGxheWVyU3RhcnRDb2x1bW5cIiwgMSk7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwiZW5lbXlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVdlYXBvbklkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwid2VhcG9uXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcInBpY2t1cFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkdmFuY2VSb3dzKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIocm93cywgXCJhZHZhbmNlUm93cyByb3dzXCIpO1xuICAgIHRoaXMuY3Vyc29yICs9IHJvd3M7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmFkdmFuY2VSb3dzKHJvd3MpO1xuICB9XG5cbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgaWYgKCFuYW1lLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgc2VjdGlvbiBuYW1lIGlzIHJlcXVpcmVkLlwiKTtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIGBUcmFjayBzZWN0aW9uIFwiJHtuYW1lfVwiIHJvd3NgKTtcbiAgICBjb25zdCBzZWN0aW9uID0gbmV3IFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlKHRoaXMsIG5hbWUsIHRoaXMuY3Vyc29yLCByb3dzKTtcbiAgICBidWlsZChzZWN0aW9uKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicHJlc3N1cmVcIiwgcm93cywgYnVpbGQpO1xuICB9XG5cbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLnNlY3Rpb24oXCJyZWJ1aWxkXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkTGluZSh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJsaW5lXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZEFsdGVybmF0aW5nKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImFsdGVybmF0aW5nXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRXYWxsKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcIndhbGxcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZERyaXAodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwiZHJpcFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFNlY3Rpb25FbmVteShiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGVuZW15YCk7XG4gIH1cblxuICBhZGRTZWN0aW9uV2VhcG9uKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiB3ZWFwb25gKTtcbiAgfVxuXG4gIGFkZFNlY3Rpb25QaWNrdXAoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVBpY2t1cElkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBpY2t1cGApO1xuICB9XG5cbiAgYWRkTGluZShiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICByZXF1aXJlSW50ZWdlcihnYXAsIGAke2xhYmVsfSBnYXBgKTtcbiAgICBpZiAoZ2FwIDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBnYXAgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQWx0ZXJuYXRpbmcoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmNvdW50LCBgJHtsYWJlbH0gY291bnRgKTtcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBjb2x1bW5zIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgY29sdW1uLmApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gb3B0aW9ucy5jb2x1bW5zW2luZGV4ICUgb3B0aW9ucy5jb2x1bW5zLmxlbmd0aF07XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgaW5kZXggKiAoZ2FwICsgMSksIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGRXYWxsKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBvcHRpb25zLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3csIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGREcmlwKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLnJvd3MsIGAke2xhYmVsfSByb3dzYCk7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmV2ZXJ5LCBgJHtsYWJlbH0gZXZlcnlgKTtcbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBvcHRpb25zLnJvd3M7IG9mZnNldCArPSBvcHRpb25zLmV2ZXJ5KSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIG9mZnNldCwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkKCk6IFRyYWNrTWVtYmVyIHtcbiAgICBjb25zdCBwbGF5ZXJTdGFydENvbHVtbiA9IHRoaXMub3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkO1xuICAgIGNvbnN0IG1heFBsYWNlbWVudFJvdyA9IHRoaXMucGxhY2VtZW50cy5yZWR1Y2UoKG1heCwgaXRlbSkgPT4gTWF0aC5tYXgobWF4LCBpdGVtLnJvdyksIDApO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5tYXgodGhpcy5jdXJzb3IsIG1heFBsYWNlbWVudFJvdyArIDEsIDEpO1xuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmxhbmVXaWR0aCAqIDIgfSwgKCkgPT4gZW1wdHlTeW1ib2wpKTtcbiAgICBjb25zdCBvY2N1cGllZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sICgpID0+IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCkpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IG5ldyBNYXA8c3RyaW5nLCB7IGlkOiBzdHJpbmc7IHNwZWVkOiBudW1iZXIgfT4oKTtcbiAgICBsZWdlbmQuc2V0KGVtcHR5U3ltYm9sLCB7IGlkOiBcImVtcHR5XCIsIHNwZWVkOiAxIH0pO1xuICAgIGxlZ2VuZC5zZXQocGxheWVyU3ltYm9sLCB7IGlkOiBcInBsYXllci5zdGFydFwiLCBzcGVlZDogMSB9KTtcbiAgICBjb25zdCB1c2VkU3ltYm9scyA9IG5ldyBTZXQoW2VtcHR5U3ltYm9sLCBwbGF5ZXJTeW1ib2xdKTtcbiAgICBjb25zdCBzeW1ib2xCeUVudGl0eSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgY29uc3QgcGxheWVyQ2VsbHMgPSB0aGlzLmNlbGxzRm9yKHBsYXllclN0YXJ0Q29sdW1uLCAxKTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIG9jY3VwaWVkWzBdLnNldChjZWxsLmdsb2JhbENvbHVtbiwgXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgcm93c1swXVtwbGF5ZXJTdGFydENvbHVtbl0gPSBwbGF5ZXJTeW1ib2w7XG5cbiAgICBmb3IgKGNvbnN0IHBsYWNlbWVudCBvZiB0aGlzLnBsYWNlbWVudHMpIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuc3ltYm9sRm9yKHBsYWNlbWVudCwgdXNlZFN5bWJvbHMsIHN5bWJvbEJ5RW50aXR5KTtcbiAgICAgIGxlZ2VuZC5zZXQoc3ltYm9sLCB7IGlkOiBwbGFjZW1lbnQuaWQsIHNwZWVkOiBwbGFjZW1lbnQuc3BlZWQgfSk7XG4gICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGhpcy5jZWxsc0ZvcihwbGFjZW1lbnQuY29sdW1uLCBwbGFjZW1lbnQuc3BhbikpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvY2N1cGllZFtwbGFjZW1lbnQucm93XS5nZXQoY2VsbC5nbG9iYWxDb2x1bW4pO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHBsYWNlbWVudCBvdmVybGFwIGF0IHJvdyAke3BsYWNlbWVudC5yb3d9LCBjb2x1bW4gJHtjZWxsLmdsb2JhbENvbHVtbn0uIEV4aXN0aW5nIGlkIFwiJHtleGlzdGluZ31cIiwgbmV3IGlkIFwiJHtwbGFjZW1lbnQuaWR9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uc2V0KGNlbGwuZ2xvYmFsQ29sdW1uLCBwbGFjZW1lbnQuaWQpO1xuICAgICAgfVxuICAgICAgcm93c1twbGFjZW1lbnQucm93XVtwbGFjZW1lbnQuY29sdW1uXSA9IHN5bWJvbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0ge1xuICAgICAgbGF5b3V0OiBgXFxuJHtyb3dzLnNsaWNlKCkucmV2ZXJzZSgpLm1hcChyb3cgPT4gYCR7cm93LnNsaWNlKDAsIHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfSB8ICR7cm93LnNsaWNlKHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfWApLmpvaW4oXCJcXG5cIil9XFxuYCxcbiAgICAgIGxlZ2VuZDogT2JqZWN0LmZyb21FbnRyaWVzKFsuLi5sZWdlbmQuZW50cmllcygpXS5tYXAoKFtzeW1ib2wsIGVudHJ5XSkgPT4gW1xuICAgICAgICBzeW1ib2wsXG4gICAgICAgIGVudHJ5LnNwZWVkID09PSAxID8geyBpZDogZW50cnkuaWQgfSA6IHsgaWQ6IGVudHJ5LmlkLCBzcGVlZDogZW50cnkuc3BlZWQgfSxcbiAgICAgIF0pKSxcbiAgICAgIGJhbGFuY2U6IHRoaXMub3B0aW9ucy5iYWxhbmNlLFxuICAgIH07XG4gICAgcGFyc2VUcmFja0RlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLm9wdGlvbnMubGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5vcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgZW52aXJvbm1lbnQ6IHRoaXMub3B0aW9ucy5lbnZpcm9ubWVudCxcbiAgICAgIGRlZmluaXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIHZhbGlkYXRlU2VjdGlvbk9mZnNldChzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93T2Zmc2V0LCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcm93IG9mZnNldGApO1xuICAgIGlmIChyb3dPZmZzZXQgPCAwIHx8IHJvd09mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXQgJHtyb3dPZmZzZXR9IGlzIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25TcGFuKHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCByb3dzOiBudW1iZXIsIGNvdmVyZWRSb3dzOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKGNvdmVyZWRSb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgY292ZXJlZCByb3dzYCk7XG4gICAgdGhpcy52YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWUsIHJvd09mZnNldCwgcm93cyk7XG4gICAgY29uc3QgbGFzdE9mZnNldCA9IHJvd09mZnNldCArIGNvdmVyZWRSb3dzIC0gMTtcbiAgICBpZiAobGFzdE9mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBhdHRlcm4gcmVhY2hlcyByb3cgb2Zmc2V0ICR7bGFzdE9mZnNldH0sIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBsYWNlKGlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucywgcm93OiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihyb3csIGAke2xhYmVsfSByb3dgKTtcbiAgICBpZiAocm93IDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSByb3cgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIHZhbGlkYXRlQ2Fub25pY2FsSWQoaWQpO1xuICAgIGNvbnN0IHNwYW4gPSBzcGFuRm9yKGlkKTtcbiAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKG9wdGlvbnMuY29sdW1uLCBgJHtsYWJlbH0gY29sdW1uYCwgc3Bhbik7XG4gICAgdGhpcy5wbGFjZW1lbnRzLnB1c2goe1xuICAgICAgcm93LFxuICAgICAgY29sdW1uOiBvcHRpb25zLmNvbHVtbixcbiAgICAgIGlkLFxuICAgICAgc3BlZWQ6IG5vcm1hbGl6ZVNwZWVkKG9wdGlvbnMuc3BlZWQsIGxhYmVsKSxcbiAgICAgIHNwYW4sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlQ29sdW1uKGNvbHVtbjogVHJhY2tDb2x1bW4sIGxhYmVsOiBzdHJpbmcsIHNwYW46IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKGNvbHVtbiwgbGFiZWwpO1xuICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmxhbmVXaWR0aCAqIDI7XG4gICAgaWYgKGNvbHVtbiA8IDAgfHwgY29sdW1uID49IHRvdGFsV2lkdGgpIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gJHtjb2x1bW59IGlzIG91dHNpZGUgdGhlIDAtJHt0b3RhbFdpZHRoIC0gMX0gdHJhY2sgcmFuZ2UuYCk7XG4gICAgY29uc3Qgc2lkZUNvbHVtbiA9IGNvbHVtbiAlIHRoaXMubGFuZVdpZHRoO1xuICAgIGlmIChzaWRlQ29sdW1uICsgc3BhbiA+IHRoaXMubGFuZVdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBjYW5ub3QgZml0IGEgJHtzcGFufS1jb2x1bW4gZW50aXR5IGluc2lkZSBhICR7dGhpcy5sYW5lV2lkdGh9LWNvbHVtbiBsYW5lLmApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbHNGb3IoY29sdW1uOiBudW1iZXIsIHNwYW46IG51bWJlcik6IEFycmF5PHsgZ2xvYmFsQ29sdW1uOiBudW1iZXIgfT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzcGFuIH0sIChfLCBvZmZzZXQpID0+ICh7IGdsb2JhbENvbHVtbjogY29sdW1uICsgb2Zmc2V0IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgc3ltYm9sRm9yKHBsYWNlbWVudDogUGxhY2VtZW50LCB1c2VkU3ltYm9sczogU2V0PHN0cmluZz4sIHN5bWJvbEJ5RW50aXR5OiBNYXA8c3RyaW5nLCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgICBjb25zdCBrZXkgPSBgJHtwbGFjZW1lbnQuaWR9QCR7cGxhY2VtZW50LnNwZWVkfWA7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBzeW1ib2xCeUVudGl0eS5nZXQoa2V5KTtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgICBjb25zdCBwcmVmZXJyZWQgPSBwcmVmZXJyZWRTeW1ib2xzW3BsYWNlbWVudC5pZF07XG4gICAgY29uc3Qgc3ltYm9sID0gcHJlZmVycmVkICYmICF1c2VkU3ltYm9scy5oYXMocHJlZmVycmVkKVxuICAgICAgPyBwcmVmZXJyZWRcbiAgICAgIDogZmFsbGJhY2tTeW1ib2xzLmZpbmQoY2FuZGlkYXRlID0+ICF1c2VkU3ltYm9scy5oYXMoY2FuZGlkYXRlKSk7XG4gICAgaWYgKCFzeW1ib2wpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJ1aWxkZXIgcmFuIG91dCBvZiBvbmUtY2hhcmFjdGVyIGxlZ2VuZCBzeW1ib2xzLlwiKTtcbiAgICB1c2VkU3ltYm9scy5hZGQoc3ltYm9sKTtcbiAgICBzeW1ib2xCeUVudGl0eS5zZXQoa2V5LCBzeW1ib2wpO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cbn1cblxuY2xhc3MgVHJhY2tTZWN0aW9uQnVpbGRlckNvcmUgaW1wbGVtZW50cyBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgcHJpdmF0ZSByb3dPZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBUcmFja0J1aWxkZXJDb3JlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVJvdzogbnVtYmVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm93czogbnVtYmVyLFxuICApIHt9XG5cbiAgYXQocm93T2Zmc2V0OiBudW1iZXIpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25PZmZzZXQodGhpcy5uYW1lLCByb3dPZmZzZXQsIHRoaXMucm93cyk7XG4gICAgdGhpcy5yb3dPZmZzZXQgPSByb3dPZmZzZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbkVuZW15KHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbldlYXBvbih0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25QaWNrdXAodGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkTGluZSh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBsaW5lYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIChvcHRpb25zLmNvdW50IC0gMSkgKiAoZ2FwICsgMSkgKyAxKTtcbiAgICB0aGlzLnBhcmVudC5hZGRBbHRlcm5hdGluZyh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBhbHRlcm5hdGluZ2ApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkV2FsbCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiB3YWxsYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgb3B0aW9ucy5yb3dzKTtcbiAgICB0aGlzLnBhcmVudC5hZGREcmlwKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGRyaXBgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tCdWlsZGVyOiBUcmFja0J1aWxkZXJGYWN0b3J5ID0ge1xuICBjcmVhdGUob3B0aW9uczogVHJhY2tCdWlsZGVyT3B0aW9ucyk6IFRyYWNrQnVpbGRlciB7XG4gICAgcmV0dXJuIG5ldyBUcmFja0J1aWxkZXJDb3JlKG9wdGlvbnMpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBjLCB0cmFja0J1aWxkZXIsIHR5cGUgVHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrU2VjdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi4vVHJhY2tCdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBUcmFja1RoZW1lSWQgPSBcImd1blNjaG9vbFwiIHwgXCJndWFyZEJsYWRlc1wiIHwgXCJjcnlzdGFsU2llZ2VcIiB8IFwic3dhcm1CbG9vbVwiIHwgXCJtaXJyb3JBcnJheVwiO1xuZXhwb3J0IHR5cGUgVHJhY2tUaWVyID0gMSB8IDIgfCAzO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2VkVHJhY2tPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHRoZW1lOiBUcmFja1RoZW1lSWQ7XG4gIHRpZXI6IFRyYWNrVGllcjtcbn1cblxuaW50ZXJmYWNlIFRyYWNrQnVpbGRDb250ZXh0IHtcbiAgcmVhZG9ubHkgdGllcjogVHJhY2tUaWVyO1xuICByZWFkb25seSBjdXJzb3I6IG51bWJlcjtcbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdm9pZDtcbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVGhlbWVQbGFuIHtcbiAgZmluYWxSb3dzOiBudW1iZXI7XG4gIG9wZW4oY29udGV4dDogVHJhY2tCdWlsZENvbnRleHQpOiB2b2lkO1xuICBjeWNsZShjb250ZXh0OiBUcmFja0J1aWxkQ29udGV4dCwgY3ljbGVJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgZmluaXNoKGNvbnRleHQ6IFRyYWNrQnVpbGRDb250ZXh0LCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkO1xufVxuXG5jb25zdCB0YXJnZXRSb3dzQnlUaWVyOiBSZWNvcmQ8VHJhY2tUaWVyLCBudW1iZXI+ID0ge1xuICAxOiAxMDUsXG4gIDI6IDI2NSxcbiAgMzogNDI1LFxufTtcblxuY29uc3QgZW5lbXlIcEJ5VGllcjogUmVjb3JkPFRyYWNrVGllciwgbnVtYmVyPiA9IHtcbiAgMTogMSxcbiAgMjogMS4wOCxcbiAgMzogMS4xNixcbn07XG5cbmNvbnN0IHBpY2sgPSA8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiBUID0+XG4gIGl0ZW1zW01hdGgubWluKGl0ZW1zLmxlbmd0aCAtIDEsIHRpZXIgLSAxICsgY3ljbGVJbmRleCAlIDIpXTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChidWlsZGVyOiBUcmFja0J1aWxkZXIsIHRpZXI6IFRyYWNrVGllcik6IFRyYWNrQnVpbGRDb250ZXh0IHtcbiAgbGV0IGN1cnNvciA9IDE7XG4gIHJldHVybiB7XG4gICAgdGllcixcbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgcmV0dXJuIGN1cnNvcjtcbiAgICB9LFxuICAgIHJlYnVpbGQocm93cywgYnVpbGQpIHtcbiAgICAgIGJ1aWxkZXIucmVidWlsZChyb3dzLCBidWlsZCk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICAgIHByZXNzdXJlKHJvd3MsIGJ1aWxkKSB7XG4gICAgICBidWlsZGVyLnByZXNzdXJlKHJvd3MsIGJ1aWxkKTtcbiAgICAgIGN1cnNvciArPSByb3dzO1xuICAgIH0sXG4gICAgcmVzcGl0ZShyb3dzKSB7XG4gICAgICBidWlsZGVyLnJlc3BpdGUocm93cyk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMjIgfSk7XG4gIHNlY3Rpb24uYXQoMjIpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDEyIH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMSkuZHJpcChcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgcm93czogMzQsIGV2ZXJ5OiA2IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMzQpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDggfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoNikuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5yaWdodC5pbm5lciwgYy5sZWZ0LmlubmVyXSwgY291bnQ6IDgsIGdhcDogMyB9KTtcbiAgaWYgKHRpZXIgPj0gMyAmJiBjeWNsZUluZGV4ID4gMCkge1xuICAgIHNlY3Rpb24uYXQoMjQpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbiAgICBzZWN0aW9uLmF0KDI4KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXJdIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGd1YXJkQmxhZGVQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBoYXNDbGVhdmVyU2V0dXAgPSB0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDA7XG4gIHNlY3Rpb24uYXQoMCkubGluZShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgY291bnQ6IDE4IH0pO1xuICBzZWN0aW9uLmF0KDE4KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IGhhc0NsZWF2ZXJTZXR1cCA/IDEyIDogMjQsIGdhcDogaGFzQ2xlYXZlclNldHVwID8gMSA6IHVuZGVmaW5lZCB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDMpLmFsdGVybmF0aW5nKFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDgsIGdhcDogMyB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDgpLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0gfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMTQpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA2LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjUpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogYy5yaWdodC5pbm5lciB9KTtcbn1cblxuZnVuY3Rpb24gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlciwgYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMTYgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgyMykuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0LmlubmVyIH0pO1xuICBzZWN0aW9uLmF0KDI1KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAyMyB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDQpLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIGNvdW50OiAxOCB9KTtcbiAgaWYgKHRpZXIgPj0gMiAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgyNCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXIsIGMucmlnaHQub3V0ZXJdIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDM2KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5pbm5lciA6IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG59XG5cbmZ1bmN0aW9uIHN3YXJtQmxvb21QcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMjAgfSk7XG4gIHNlY3Rpb24uYXQoMjApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDI0IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMikuZHJpcChcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgcm93czogMzQsIGV2ZXJ5OiA2IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDcpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5pbm5lciwgYy5yaWdodC5pbm5lcl0sIGNvdW50OiA3LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjEpLndhbGwoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlcl0gfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMzYpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbn1cblxuZnVuY3Rpb24gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDQpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWQsIGMubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAxOCB9KTtcbiAgc2VjdGlvbi5hdCgyMikuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogMjQgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgwKS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdIH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoNikuZHJpcChcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFySW5uZXIgOiBjLnJpZ2h0Lm5lYXJJbm5lciwgcm93czogMzIsIGV2ZXJ5OiA2IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDE4KS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLnJpZ2h0LmlubmVyLCBjLmxlZnQuaW5uZXJdLCBjb3VudDogNywgZ2FwOiAzIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDMyKS53YWxsKFwidGFua1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0LmlubmVyXSB9KTtcbn1cblxuY29uc3QgdGhlbWVQbGFuczogUmVjb3JkPFRyYWNrVGhlbWVJZCwgVGhlbWVQbGFuPiA9IHtcbiAgZ3VuU2Nob29sOiB7XG4gICAgZmluYWxSb3dzOiA0MixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4ucHVsc2VQaXN0b2xcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDcpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIGlmIChjb250ZXh0LnRpZXIgPj0gMikgc2VjdGlvbi5hdCg2KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMCwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5uZWVkbGVyU21nXCIsIFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQubWlkIDogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgyKS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5vdXRlciA6IGMucmlnaHQub3V0ZXIgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMyA9PT0gMSkgc2VjdGlvbi5hdCg0KS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJJbm5lciB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg0KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQub3V0ZXIgOiBjLmxlZnQub3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNikuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMiA9PT0gMCkgc2VjdGlvbi5hdCg3KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubWlkIDogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm5lYXJPdXRlciA6IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZShjb250ZXh0LnRpZXIgPj0gMiA/IDQgOiAyKTtcbiAgICB9LFxuICAgIGZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQyLCBzZWN0aW9uID0+IGd1blNjaG9vbFByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIGd1YXJkQmxhZGVzOiB7XG4gICAgZmluYWxSb3dzOiA0MixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIGlmIChjb250ZXh0LnRpZXIgPj0gMikgc2VjdGlvbi5hdCg2KS53ZWFwb24oXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDIsIHNlY3Rpb24gPT4gZ3VhcmRCbGFkZVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDEwLCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24ocGljayhbXCJzd29yZC5hcmNCbGFkZVwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzd29yZC5jbGVhdmVyXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCBcInNoaWVsZC5oZXhHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBpZiAoY3ljbGVJbmRleCAlIDIgPT09IDApIHNlY3Rpb24uYXQoNykucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFySW5uZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQub3V0ZXIgOiBjLnJpZ2h0Lm91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndWFyZEJsYWRlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgY3J5c3RhbFNpZWdlOiB7XG4gICAgZmluYWxSb3dzOiA0OCxcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4uYnVyc3RDYXJiaW5lXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDMpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg2KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0OCwgc2VjdGlvbiA9PiBjcnlzdGFsU2llZ2VQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImd1bi5zcGxpdHRlclJpZmxlXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNykud2VhcG9uKFwic3dvcmQuY2xlYXZlclwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMTApLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm91dGVyIDogYy5yaWdodC5vdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDgsIHNlY3Rpb24gPT4gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgc3dhcm1CbG9vbToge1xuICAgIGZpbmFsUm93czogNDQsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnB1bHNlUGlzdG9sXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDIpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg1KS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0NCwgc2VjdGlvbiA9PiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTIsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5taWQgOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJndW4ubmVlZGxlclNtZ1wiLCBcInN3b3JkLmFyY0JsYWRlXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNykud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMTApLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDExKS5lbmVteShcIndpbmdlclwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm91dGVyIDogYy5sZWZ0Lm91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0NCwgc2VjdGlvbiA9PiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgbWlycm9yQXJyYXk6IHtcbiAgICBmaW5hbFJvd3M6IDQ2LFxuICAgIG9wZW4oY29udGV4dCkge1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDksIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5idXJzdENhcmJpbmVcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDMpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNikud2VhcG9uKFwic3dvcmQuY2xlYXZlclwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDYsIHNlY3Rpb24gPT4gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJndW4uYnVyc3RDYXJiaW5lXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgaWYgKGN5Y2xlSW5kZXggJSAyID09PSAwKSBzZWN0aW9uLmF0KDgpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFySW5uZXIgOiBjLnJpZ2h0Lm5lYXJJbm5lciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDYsIHNlY3Rpb24gPT4gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFjayhvcHRpb25zOiBDb21wb3NlZFRyYWNrT3B0aW9ucyk6IFRyYWNrTWVtYmVyIHtcbiAgY29uc3QgYnVpbGRlciA9IHRyYWNrQnVpbGRlci5jcmVhdGUoe1xuICAgIGxhYmVsOiBvcHRpb25zLmxhYmVsLFxuICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IG9wdGlvbnMuc2NlbmVJZCB9LFxuICAgIGJhbGFuY2U6IHsgZW5lbXlIcDogZW5lbXlIcEJ5VGllcltvcHRpb25zLnRpZXJdLCBlbmVteVNwZWVkOiAxIH0sXG4gIH0pO1xuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dChidWlsZGVyLCBvcHRpb25zLnRpZXIpO1xuICBjb25zdCBwbGFuID0gdGhlbWVQbGFuc1tvcHRpb25zLnRoZW1lXTtcbiAgY29uc3QgdGFyZ2V0Um93cyA9IHRhcmdldFJvd3NCeVRpZXJbb3B0aW9ucy50aWVyXTtcbiAgcGxhbi5vcGVuKGNvbnRleHQpO1xuICBsZXQgY3ljbGVJbmRleCA9IDA7XG4gIHdoaWxlIChjb250ZXh0LmN1cnNvciArIHBsYW4uZmluYWxSb3dzIDwgdGFyZ2V0Um93cykge1xuICAgIHBsYW4uY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCk7XG4gICAgY3ljbGVJbmRleCsrO1xuICB9XG4gIHBsYW4uZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpO1xuICByZXR1cm4gYnVpbGRlci5idWlsZCgpO1xufVxuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiU2t5YnJlYWtcIixcbiAgZGVzY3JpcHRpb246IFwiQW4gQXVyb3JhIG9wZW5lciBmb2N1c2VkIG9uIHNoaWVsZHMsIHNob3J0IHN3b3JkIHJlYWRzLCBhbmQgcGF0aWVudCBjbG9zZS1yYW5nZSBjbGVhbnVwLlwiLFxuICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJSaWJib24gU3Rvcm1cIixcbiAgZGVzY3JpcHRpb246IFwiQXVyb3JhIHByZXNzdXJlIGV4cGFuZHMgaW50byBhbHRlcm5hdGluZyBzaGllbGQgcmVidWlsZHMsIHdpZGVyIHN3b3JkIGNob2ljZXMsIGFuZCBjbHVzdGVyZWQgY2xvc2UtcmFuZ2UgdGhyZWF0cy5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTWFnbmV0aWMgRGF3blwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgQXVyb3JhIGZpbmFsZSBhc2tzIGZvciBkZWxpYmVyYXRlIHNoaWVsZCB0aW1pbmcgYW5kIHN3b3JkIHNlbGVjdGlvbiBhZ2FpbnN0IGxvbmcsIHJlYWRhYmxlIHRocmVhdCB3YXZlcy5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUHJpc20gSWduaXRpb25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBDcnlzdGFsIEZvcmdlIG9wZW5lciBidWlsdCBhcm91bmQgYnVyc3QgZmlyZSwgZ2xhc3MgZGVjb3lzLCBhbmQgZWFybHkgaGVhdnktdGhyZWF0IHJlaGVhcnNhbC5cIixcbiAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gIHRpZXI6IDEsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkZhY2V0IFJ1blwiLFxuICBkZXNjcmlwdGlvbjogXCJDcnlzdGFsIEZvcmdlIGRlbnNpdHkgc2hhcnBlbnMgd2l0aCBoZWF2aWVyIGd1bnMsIHN0dXJkaWVyIHNoaWVsZHMsIGFuZCB0YW5rIGJyZWFrcyBmcmFtZWQgYnkgZ2xhc3MgZGVjb3lzLlwiLFxuICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiR2xhc3MgSGFtbWVyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBDcnlzdGFsIEZvcmdlIGZpbmFsZSBjb21taXRzIHRvIGhlYXZ5IHdlYXBvbiBwYXlvZmZzLCByZXBlYXRlZCB0YW5rIGxhbmVzLCBhbmQgcHJpc21hdGljIGRlY295IHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiRmlyc3QgR2xvd1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIGd1bi1mb3J3YXJkIE5lb24gTmVidWxhZSBvcGVuZXIgd2l0aCBjbGVhciByZWJ1aWxkIHNoZWx2ZXMgYW5kIG9ubHkgYSBmZXcgc2hpZWxkIHNhZmV0eSBuZXRzLlwiLFxuICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJEcmlmdCBMZXNzb25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBsb25nZXIgTmVvbiBOZWJ1bGFlIGd1biBsZXNzb24gdGhhdCBhZGRzIHdpbmcgcHJlc3N1cmUsIHN0cm9uZ2VyIGZpcmVhcm0gY2hvaWNlcywgYW5kIHNwYXJzZSBzaGllbGQgcmVsaWVmLlwiLFxuICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJOZWJ1bGEgR2F0ZVwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgTmVvbiBOZWJ1bGFlIGd1biBmaW5hbGUgbGF5ZXJzIGhlYXZpZXIgZmlyZWFybXMsIHRhbmtzLCBhbmQgc3VzdGFpbmVkIGxhbmUgcmVhZGluZyB3aXRob3V0IGxlYW5pbmcgb24gc3BlZWQgY2hhbmdlcy5cIixcbiAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUGFuZWwgRGF3blwiLFxuICBkZXNjcmlwdGlvbjogXCJBIFNvbGFyIEFycmF5IG9wZW5lciB3aXRoIG1pcnJvcmVkIHJlYWRzLCBzcGxpdC1sYW5lIHdlYXBvbiB0aW1pbmcsIGFuZCBicmlnaHQgYnV0IG1lYXN1cmVkIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiSGVsaW9zdGF0IFJ1c2hcIixcbiAgZGVzY3JpcHRpb246IFwiU29sYXIgQXJyYXkgcHJlc3N1cmUgZ3Jvd3MgdGhyb3VnaCBtaXJyb3JlZCB3YWxscywgcHJlY2lzaW9uIHJlYnVpbGRzLCBhbmQgYWx0ZXJuYXRpbmcgb3V0ZXItbGFuZSBzdXJnZXMuXCIsXG4gIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJNaXJyb3IgWmVuaXRoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBTb2xhciBBcnJheSBmaW5hbGUgbWl4ZXMgbWlycm9yZWQgdGFuayBicmVha3MsIHNwbGl0LWZpcmUgcmVidWlsZHMsIGFuZCBsb25nLWZvcm0gcHJlY2lzaW9uIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiQmxvb20gU2lnbmFsXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgVm9pZCBHYXJkZW4gb3BlbmVyIGFib3V0IGdyb3dpbmcgdGhlIHNxdWFkIGVhcmx5IGFuZCBzdXN0YWluaW5nIGNhbG0gY3Jvc3MtbGFuZSBibG9vbSBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUm9vdCBMYXR0aWNlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlZvaWQgR2FyZGVuIGFkZHMgZGVuc2VyIHNxdWFkIGdyb3d0aCB3aW5kb3dzLCBzcGxpdCB3ZWFwb24gc3VwcG9ydCwgYW5kIHNsb3ctYmxvb21pbmcgcGFpcmVkIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJOaWdodCBPcmNoYXJkXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBWb2lkIEdhcmRlbiBmaW5hbGUgbGVhbnMgaW50byBzcXVhZCByZWNvdmVyeSwgbGF5ZXJlZCBzdXBwb3J0IHBpY2t1cHMsIGFuZCBicm9hZCBvcmdhbmljIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICB0aWVyOiAzLFxufSk7XG4iLCAiaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2s0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazIgfSBmcm9tIFwiLi9UcmFjazVcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrNlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgY3J5c3RhbEZvcmdlVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2s3XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBjcnlzdGFsRm9yZ2VUcmFjazIgfSBmcm9tIFwiLi9UcmFjazhcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGNyeXN0YWxGb3JnZVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrOVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazEgfSBmcm9tIFwiLi9UcmFjazFcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2syIH0gZnJvbSBcIi4vVHJhY2syXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrM1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgc29sYXJBcnJheVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrMTNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHNvbGFyQXJyYXlUcmFjazIgfSBmcm9tIFwiLi9UcmFjazE0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBzb2xhckFycmF5VHJhY2szIH0gZnJvbSBcIi4vVHJhY2sxNVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgdm9pZEdhcmRlblRyYWNrMSB9IGZyb20gXCIuL1RyYWNrMTBcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHZvaWRHYXJkZW5UcmFjazIgfSBmcm9tIFwiLi9UcmFjazExXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyB2b2lkR2FyZGVuVHJhY2szIH0gZnJvbSBcIi4vVHJhY2sxMlwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja0ZhbWlseU1lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHRyYWNrcyA9IHtcbiAgXCJuZW9uLW5lYnVsYWUtMVwiOiBuZW9uTmVidWxhZVRyYWNrMSxcbiAgXCJuZW9uLW5lYnVsYWUtMlwiOiBuZW9uTmVidWxhZVRyYWNrMixcbiAgXCJuZW9uLW5lYnVsYWUtM1wiOiBuZW9uTmVidWxhZVRyYWNrMyxcbiAgXCJhdXJvcmEtMVwiOiBhdXJvcmFUcmFjazEsXG4gIFwiYXVyb3JhLTJcIjogYXVyb3JhVHJhY2syLFxuICBcImF1cm9yYS0zXCI6IGF1cm9yYVRyYWNrMyxcbiAgXCJjcnlzdGFsLWZvcmdlLTFcIjogY3J5c3RhbEZvcmdlVHJhY2sxLFxuICBcImNyeXN0YWwtZm9yZ2UtMlwiOiBjcnlzdGFsRm9yZ2VUcmFjazIsXG4gIFwiY3J5c3RhbC1mb3JnZS0zXCI6IGNyeXN0YWxGb3JnZVRyYWNrMyxcbiAgXCJ2b2lkLWdhcmRlbi0xXCI6IHZvaWRHYXJkZW5UcmFjazEsXG4gIFwidm9pZC1nYXJkZW4tMlwiOiB2b2lkR2FyZGVuVHJhY2syLFxuICBcInZvaWQtZ2FyZGVuLTNcIjogdm9pZEdhcmRlblRyYWNrMyxcbiAgXCJzb2xhci1hcnJheS0xXCI6IHNvbGFyQXJyYXlUcmFjazEsXG4gIFwic29sYXItYXJyYXktMlwiOiBzb2xhckFycmF5VHJhY2syLFxuICBcInNvbGFyLWFycmF5LTNcIjogc29sYXJBcnJheVRyYWNrMyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlsaWVzID0ge1xuICBuZW9uTmVidWxhZToge1xuICAgIGxhYmVsOiBcIk5lb24gTmVidWxhZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbGVhcm5pbmcgYXJjIGFib3V0IGxhbmVzLCBwaWNrdXBzLCBzaGllbGRzLCBhbmQgY29udHJvbGxlZCBwcmVzc3VyZS5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcIm5lb25IYWxsXCIgfSxcbiAgICB0cmFja0lkczogW1wibmVvbi1uZWJ1bGFlLTFcIiwgXCJuZW9uLW5lYnVsYWUtMlwiLCBcIm5lb24tbmVidWxhZS0zXCJdLFxuICB9LFxuICBhdXJvcmE6IHtcbiAgICBsYWJlbDogXCJBdXJvcmFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZW5zZSBwbGFuZXRhcnkgYXNzYXVsdHMgd2l0aCBicmlnaHRlciByZWNvdmVyeSB3aW5kb3dzIGFuZCBzaGFycGVyIHRocmVhdCB3YXZlcy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcImF1cm9yYVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcImF1cm9yYS0xXCIsIFwiYXVyb3JhLTJcIiwgXCJhdXJvcmEtM1wiXSxcbiAgfSxcbiAgY3J5c3RhbEZvcmdlOiB7XG4gICAgbGFiZWw6IFwiQ3J5c3RhbCBGb3JnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByaXNtYXRpYyBmYWN0b3J5IGxhbmVzIHdpdGggc2hhcnAgcHJlc3N1cmUsIGdsYXNzIGRlY295cywgYW5kIGhlYXZ5IGNyeXN0YWxsaW5lIGJyZWFrcy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcImNyeXN0YWwtZm9yZ2UtMVwiLCBcImNyeXN0YWwtZm9yZ2UtMlwiLCBcImNyeXN0YWwtZm9yZ2UtM1wiXSxcbiAgfSxcbiAgdm9pZEdhcmRlbjoge1xuICAgIGxhYmVsOiBcIlZvaWQgR2FyZGVuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlvbHVtaW5lc2NlbnQgbmlnaHQgbGFuZXMgd2l0aCBzcGFyc2UgYmxvb21zLCBkZWNveXMsIGFuZCBjb250cm9sbGVkIHJlY292ZXJ5IHBvY2tldHMuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIgfSxcbiAgICB0cmFja0lkczogW1widm9pZC1nYXJkZW4tMVwiLCBcInZvaWQtZ2FyZGVuLTJcIiwgXCJ2b2lkLWdhcmRlbi0zXCJdLFxuICB9LFxuICBzb2xhckFycmF5OiB7XG4gICAgbGFiZWw6IFwiU29sYXIgQXJyYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCcmlnaHQgb3JiaXRhbCBsYW5lcyB3aXRoIG1pcnJvcmVkIHdhbGxzLCBmYXN0IG91dGVyIHN1cmdlcywgYW5kIGRlY2lzaXZlIGhlYXZ5IHRvb2xzLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwic29sYXJBcnJheVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcInNvbGFyLWFycmF5LTFcIiwgXCJzb2xhci1hcnJheS0yXCIsIFwic29sYXItYXJyYXktM1wiXSxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrRmFtaWx5TWVtYmVyPGtleW9mIHR5cGVvZiB0cmFja3M+PjtcblxuZXhwb3J0IHtcbiAgYXVyb3JhVHJhY2sxLFxuICBhdXJvcmFUcmFjazIsXG4gIGF1cm9yYVRyYWNrMyxcbiAgY3J5c3RhbEZvcmdlVHJhY2sxLFxuICBjcnlzdGFsRm9yZ2VUcmFjazIsXG4gIGNyeXN0YWxGb3JnZVRyYWNrMyxcbiAgbmVvbk5lYnVsYWVUcmFjazEsXG4gIG5lb25OZWJ1bGFlVHJhY2syLFxuICBuZW9uTmVidWxhZVRyYWNrMyxcbiAgc29sYXJBcnJheVRyYWNrMSxcbiAgc29sYXJBcnJheVRyYWNrMixcbiAgc29sYXJBcnJheVRyYWNrMyxcbiAgdm9pZEdhcmRlblRyYWNrMSxcbiAgdm9pZEdhcmRlblRyYWNrMixcbiAgdm9pZEdhcmRlblRyYWNrMyxcbn07XG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIsIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tGYW1pbGllcywgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcbiAgcmVhZG9ubHkgZmFtaWxpZXMgPSB0cmFja0ZhbWlsaWVzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgdHJhY2tdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaWQsIGZhbWlseV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5mYW1pbGllcykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShmYW1pbHkudHJhY2tJZHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgdHJhY2suYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZChmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICAgIGZvciAoY29uc3QgdHJhY2tJZCBvZiBmYW1pbHkudHJhY2tJZHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrSWQgaW4gdGhpcy5tZW1iZXJzLCBgJHtpZH0gcmVmZXJlbmNlcyB1bmtub3duIHRyYWNrIFwiJHt0cmFja0lkfVwiLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodGhpcy5tZW1iZXJzW3RyYWNrSWRdLmVudmlyb25tZW50LnNjZW5lSWQgPT09IGZhbWlseS5lbnZpcm9ubWVudC5zY2VuZUlkLCBgJHt0cmFja0lkfSBtdXN0IHVzZSB0aGUgJHtpZH0gc2NlbmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlseSA9IG5ldyBUcmFja0ZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFRyYWNrSWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkubWVtYmVycztcbmV4cG9ydCB0eXBlIFRyYWNrRmFtaWx5SWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkuZmFtaWxpZXM7XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTcXVhZElucHV0Q2FsbGJhY2tzIHtcbiAgbGFuZSgpOiAwIHwgMTtcbiAgc2V0TGFuZShsYW5lOiAwIHwgMSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3F1YWRJbnB1dChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgY2FsbGJhY2tzOiBTcXVhZElucHV0Q2FsbGJhY2tzLFxuKTogdm9pZCB7XG4gIGxldCBwb2ludGVySWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdCBhcHBseVBvaW50ZXIgPSAoY2xpZW50WDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYm91bmRzID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xuICAgIGNvbnN0IGxhbmU6IDAgfCAxID0gbm9ybWFsaXplZCA8IC41ID8gMCA6IDE7XG4gICAgaWYgKGxhbmUgIT09IGNhbGxiYWNrcy5sYW5lKCkpIGNhbGxiYWNrcy5zZXRMYW5lKGxhbmUpO1xuICB9O1xuICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJhXCIgfHwgZXZlbnQua2V5ID09PSBcIkFcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIGNhbGxiYWNrcy5zZXRMYW5lKDApO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiZFwiIHx8IGV2ZW50LmtleSA9PT0gXCJEXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikgY2FsbGJhY2tzLnNldExhbmUoMSk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoXCJidXR0b24saW5wdXQsc2VsZWN0LGFcIikpIHJldHVybjtcbiAgICBwb2ludGVySWQgPSBldmVudC5wb2ludGVySWQ7XG4gICAgY29udGFpbmVyLnNldFBvaW50ZXJDYXB0dXJlPy4ocG9pbnRlcklkKTtcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb25zdCBlbmRQb2ludGVyID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBwb2ludGVySWQgPSBudWxsO1xuICB9O1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGVuZFBvaW50ZXIpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvc3Rwb2ludGVyY2FwdHVyZVwiLCAoKSA9PiB7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgfSk7XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBdXRvQWltVGFyZ2V0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJvd0lkPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNxdWFkLWNlbnRlciBhaW0gb2Zmc2V0IChyZWxhdGl2ZSB0byBsYW5lQ2VudGVyKSB0aGF0IGJlc3QgYWxpZ25zXG4gKiBvbmUgb2YgdGhlIHNxdWFkJ3MgZnJvbnQtcm93IGNvbHVtbnMgdG8gdGhlIG5lYXJlc3QgZW5lbXkuXG4gKlxuICogQHBhcmFtIHRhcmdldHMgICAgICAgICBBbGwgbGl2ZSAobm9uLWR5aW5nKSBlbmVtaWVzIGluIHRoZSBjdXJyZW50IGxhbmUuXG4gKiBAcGFyYW0gbGFuZUNlbnRlciAgICAgIFBpeGVsIFggb2YgdGhlIGxhbmUncyBjZW50ZXIuXG4gKiBAcGFyYW0gY29sdW1uT2Zmc2V0cyAgIFggb2Zmc2V0cyBvZiBlYWNoIGZyb250LXJvdyBjb2x1bW4gcmVsYXRpdmUgdG8gc3F1YWQgY2VudGVyLlxuICogQHBhcmFtIGN1cnJlbnRPZmZzZXQgICBDdXJyZW50IHNxdWFkIGFpbSBvZmZzZXQgKHNxdWFkIGNlbnRlciA9IGxhbmVDZW50ZXIgKyBjdXJyZW50T2Zmc2V0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEF1dG9BaW1PZmZzZXQoXG4gIHRhcmdldHM6IHJlYWRvbmx5IEF1dG9BaW1UYXJnZXRbXSxcbiAgbGFuZUNlbnRlcjogbnVtYmVyLFxuICBjb2x1bW5PZmZzZXRzOiByZWFkb25seSBudW1iZXJbXSxcbiAgY3VycmVudE9mZnNldCA9IDAsXG4pOiBudW1iZXIge1xuICBpZiAoIXRhcmdldHMubGVuZ3RoKSByZXR1cm4gMDtcblxuICAvLyBJZGVudGlmeSB0aGUgZnJvbnQgcm93OiBncm91cCB0YXJnZXRzIGJ5IHJvd0lkIChvciB0cmVhdCB1bmdyb3VwZWQgdGFyZ2V0cyBhcyBhIHNpbmdsZSByb3cpLlxuICBjb25zdCBleHBsaWNpdFJvd3MgPSBuZXcgTWFwPG51bWJlciwgQXV0b0FpbVRhcmdldFtdPigpO1xuICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRzKSB7XG4gICAgaWYgKHRhcmdldC5yb3dJZCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICBjb25zdCByb3cgPSBleHBsaWNpdFJvd3MuZ2V0KHRhcmdldC5yb3dJZCkgPz8gW107XG4gICAgcm93LnB1c2godGFyZ2V0KTtcbiAgICBleHBsaWNpdFJvd3Muc2V0KHRhcmdldC5yb3dJZCwgcm93KTtcbiAgfVxuICBjb25zdCBmcm9udFJvdyA9IGV4cGxpY2l0Um93cy5zaXplXG4gICAgPyBbLi4uZXhwbGljaXRSb3dzLnZhbHVlcygpXS5zb3J0KChsZWZ0LCByaWdodCkgPT5cbiAgICAgICAgTWF0aC5tYXgoLi4ucmlnaHQubWFwKHQgPT4gdC55KSkgLSBNYXRoLm1heCguLi5sZWZ0Lm1hcCh0ID0+IHQueSkpKVswXVxuICAgIDogdGFyZ2V0cy5maWx0ZXIodCA9PiBNYXRoLmFicyh0LnkgLSBNYXRoLm1heCguLi50YXJnZXRzLm1hcChjID0+IGMueSkpKSA8IDMpO1xuXG4gIC8vIEZvciBlYWNoIGVuZW15IGluIHRoZSBmcm9udCByb3cgXHUwMEQ3IGVhY2ggc3F1YWQgY29sdW1uLCBjb21wdXRlIHRoZSBzcXVhZC1jZW50ZXJcbiAgLy8gb2Zmc2V0IHRoYXQgd291bGQgcGxhY2UgdGhhdCBjb2x1bW4gZXhhY3RseSBvbiB0aGF0IGVuZW15J3MgWC5cbiAgLy8gUGljayB0aGUgKGVuZW15LCBjb2x1bW4pIHBhaXIgd2hvc2UgcmVxdWlyZWQgb2Zmc2V0IGlzIGNsb3Nlc3QgdG8gdGhlIGN1cnJlbnRcbiAgLy8gb2Zmc2V0IFx1MjAxNCBtaW5pbWlzaW5nIHRoZSBhaW0gbW92ZW1lbnQgbmVlZGVkIHdoaWxlIGd1YXJhbnRlZWluZyBhIGhpdC5cbiAgY29uc3QgY29scyA9IGNvbHVtbk9mZnNldHMubGVuZ3RoID4gMCA/IGNvbHVtbk9mZnNldHMgOiBbMF07XG4gIGxldCBiZXN0T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcbiAgbGV0IGJlc3REaXN0ID0gSW5maW5pdHk7XG5cbiAgZm9yIChjb25zdCBlbmVteSBvZiBmcm9udFJvdykge1xuICAgIGZvciAoY29uc3QgY29sT2Zmc2V0IG9mIGNvbHMpIHtcbiAgICAgIC8vIHNxdWFkQ2VudGVyID0gbGFuZUNlbnRlciArIGFpbU9mZnNldCBcdTIxOTIgY29sdW1uIGxhbmRzIGF0IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgKyBjb2xPZmZzZXRcbiAgICAgIC8vIFdlIHdhbnQgdGhhdCB0byBlcXVhbCBlbmVteS54IFx1MjE5MiBhaW1PZmZzZXQgPSBlbmVteS54IC0gbGFuZUNlbnRlciAtIGNvbE9mZnNldFxuICAgICAgY29uc3QgY2FuZGlkYXRlT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXQ7XG4gICAgICBjb25zdCBkaXN0ID0gTWF0aC5hYnMoY2FuZGlkYXRlT2Zmc2V0IC0gY3VycmVudE9mZnNldCk7XG4gICAgICBpZiAoZGlzdCA8IGJlc3REaXN0KSB7XG4gICAgICAgIGJlc3REaXN0ID0gZGlzdDtcbiAgICAgICAgYmVzdE9mZnNldCA9IGNhbmRpZGF0ZU9mZnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmVzdE9mZnNldDtcbn1cbiIsICJpbXBvcnQge1xuICBOZW9uUHJvamVjdGlsZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uUHJvamVjdGlsZVNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHtcbiAgR3VuTGV2ZWwsXG4gIEd1bk1lbWJlcixcbiAgSW1wYWN0RWZmZWN0LFxuICBNdXp6bGVFZmZlY3QsXG4gIFByb2plY3RpbGVTaGFwZSxcbn0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5Qcm9qZWN0aWxlIHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdng6IG51bWJlcjtcbiAgdnk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGRhbWFnZTogbnVtYmVyO1xuICBwaWVyY2VSZW1haW5pbmc6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcjogc3RyaW5nO1xuICBjb3JlQ29sb3I6IHN0cmluZztcbiAgYXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhcGU6IFByb2plY3RpbGVTaGFwZTtcbiAgaW1wYWN0RWZmZWN0OiBJbXBhY3RFZmZlY3Q7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhY2VyOiBib29sZWFuO1xuICBrbm9ja2JhY2s6IG51bWJlcjtcbiAgaGl0Rmxhc2hTY2FsZTogbnVtYmVyO1xuICBoaXRFbmVteUlkczogU2V0PG51bWJlcj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuRWZmZWN0IHtcbiAga2luZDogXCJtdXp6bGVcIiB8IFwiaW1wYWN0XCIgfCBcImRlYXRoXCI7XG4gIHN0eWxlOiBNdXp6bGVFZmZlY3QgfCBJbXBhY3RFZmZlY3QgfCBcImRlYXRoQmxvb21cIjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlY29uZGFyeUNvbG9yOiBzdHJpbmc7XG4gIHJhZGl1czogbnVtYmVyO1xuICBleHBpcmVzQXQ6IG51bWJlcjtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgc2VlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1blRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY2hlZHVsZWRWb2xsZXkge1xuICBmaXJlc0F0OiBudW1iZXI7XG4gIGd1bjogR3VuTWVtYmVyO1xuICBsZXZlbDogR3VuTGV2ZWw7XG4gIGxhbmU6IG51bWJlcjtcbiAgb3JpZ2luczogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XG4gIHNjYWxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHdW5TaW11bGF0aW9uIHtcbiAgcmVhZG9ubHkgcHJvamVjdGlsZXM6IEd1blByb2plY3RpbGVbXSA9IFtdO1xuICByZWFkb25seSBlZmZlY3RzOiBHdW5FZmZlY3RbXSA9IFtdO1xuICBwcml2YXRlIHNjaGVkdWxlZFZvbGxleXM6IFNjaGVkdWxlZFZvbGxleVtdID0gW107XG4gIHByaXZhdGUgc2VxdWVuY2UgPSAwO1xuICBwcml2YXRlIHNob3RTZXF1ZW5jZSA9IDA7XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0aWxlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuZWZmZWN0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5sZW5ndGggPSAwO1xuICB9XG5cbiAgZmlyZShndW46IEd1bk1lbWJlciwgbGV2ZWw6IEd1bkxldmVsLCBsYW5lOiBudW1iZXIsIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdLCBub3c6IG51bWJlciwgc2NhbGUgPSAxKTogdm9pZCB7XG4gICAgZm9yIChsZXQgYnVyc3RJbmRleCA9IDA7IGJ1cnN0SW5kZXggPCBsZXZlbC5idXJzdENvdW50OyBidXJzdEluZGV4KyspIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5wdXNoKHtcbiAgICAgICAgZmlyZXNBdDogbm93ICsgYnVyc3RJbmRleCAqIGxldmVsLmJ1cnN0SW50ZXJ2YWxNcyxcbiAgICAgICAgZ3VuLCBsZXZlbCwgbGFuZSwgb3JpZ2luczogb3JpZ2lucy5tYXAob3JpZ2luID0+ICh7IC4uLm9yaWdpbiB9KSksIHNjYWxlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlyaW5nKG5vdzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyZWQgPSAwO1xuICAgIGNvbnN0IGR1ZSA9IHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5maWx0ZXIodm9sbGV5ID0+IHZvbGxleS5maXJlc0F0IDw9IG5vdyk7XG4gICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzID0gdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmZpbHRlcih2b2xsZXkgPT4gdm9sbGV5LmZpcmVzQXQgPiBub3cpO1xuICAgIGZvciAoY29uc3Qgdm9sbGV5IG9mIGR1ZSkge1xuICAgICAgdGhpcy5zcGF3blZvbGxleSh2b2xsZXksIG5vdyk7XG4gICAgICBmaXJlZCsrO1xuICAgIH1cbiAgICByZXR1cm4gZmlyZWQ7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0aWxlcyhcbiAgICBkZWx0YTogbnVtYmVyLFxuICAgIG5vdzogbnVtYmVyLFxuICAgIHRhcmdldHM6IHJlYWRvbmx5IEd1blRhcmdldFtdLFxuICAgIGJvdW5kczogeyB0b3A6IG51bWJlcjsgbGVmdD86IG51bWJlcjsgcmlnaHQ/OiBudW1iZXIgfSxcbiAgICBvbkhpdDogKHByb2plY3RpbGU6IEd1blByb2plY3RpbGUsIHRhcmdldDogR3VuVGFyZ2V0KSA9PiB2b2lkLFxuICApOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3RpbGUgb2YgWy4uLnRoaXMucHJvamVjdGlsZXNdKSB7XG4gICAgICBwcm9qZWN0aWxlLnggKz0gcHJvamVjdGlsZS52eCAqIGRlbHRhO1xuICAgICAgcHJvamVjdGlsZS55ICs9IHByb2plY3RpbGUudnkgKiBkZWx0YTtcbiAgICAgIGlmIChwcm9qZWN0aWxlLnkgPCBib3VuZHMudG9wIHx8IHByb2plY3RpbGUueCA8IChib3VuZHMubGVmdCA/PyAtSW5maW5pdHkpIHx8IHByb2plY3RpbGUueCA+IChib3VuZHMucmlnaHQgPz8gSW5maW5pdHkpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRzKSB7XG4gICAgICAgIGlmICh0YXJnZXQuZHlpbmcgfHwgcHJvamVjdGlsZS5sYW5lICE9PSB0YXJnZXQubGFuZSB8fCBwcm9qZWN0aWxlLmhpdEVuZW15SWRzLmhhcyh0YXJnZXQuaWQpKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZHggPSBwcm9qZWN0aWxlLnggLSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgZHkgPSBwcm9qZWN0aWxlLnkgLSB0YXJnZXQueTtcbiAgICAgICAgY29uc3QgaGl0UmFkaXVzID0gcHJvamVjdGlsZS5yYWRpdXMgKyB0YXJnZXQucmFkaXVzO1xuICAgICAgICBpZiAoZHggKiBkeCArIGR5ICogZHkgPiBoaXRSYWRpdXMgKiBoaXRSYWRpdXMpIGNvbnRpbnVlO1xuICAgICAgICBwcm9qZWN0aWxlLmhpdEVuZW15SWRzLmFkZCh0YXJnZXQuaWQpO1xuICAgICAgICB0YXJnZXQuaGVhbHRoIC09IHByb2plY3RpbGUuZGFtYWdlO1xuICAgICAgICB0YXJnZXQueSAtPSBwcm9qZWN0aWxlLmtub2NrYmFjaztcbiAgICAgICAgdGhpcy5lZmZlY3RzLnB1c2goe1xuICAgICAgICAgIGtpbmQ6IFwiaW1wYWN0XCIsXG4gICAgICAgICAgc3R5bGU6IHByb2plY3RpbGUuaW1wYWN0RWZmZWN0LFxuICAgICAgICAgIHg6IHByb2plY3RpbGUueCwgeTogcHJvamVjdGlsZS55LFxuICAgICAgICAgIGNvbG9yOiBwcm9qZWN0aWxlLmNvbG9yLCBzZWNvbmRhcnlDb2xvcjogcHJvamVjdGlsZS50cmFpbENvbG9yLFxuICAgICAgICAgIHJhZGl1czogcHJvamVjdGlsZS5yYWRpdXMgKiBwcm9qZWN0aWxlLmhpdEZsYXNoU2NhbGUgKiA0LFxuICAgICAgICAgIGV4cGlyZXNBdDogbm93ICsgcHJvamVjdGlsZS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIGR1cmF0aW9uOiBwcm9qZWN0aWxlLmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgc2VlZDogcHJvamVjdGlsZS5pZCxcbiAgICAgICAgfSk7XG4gICAgICAgIG9uSGl0KHByb2plY3RpbGUsIHRhcmdldCk7XG4gICAgICAgIGlmIChwcm9qZWN0aWxlLnBpZXJjZVJlbWFpbmluZyA+IDApIHByb2plY3RpbGUucGllcmNlUmVtYWluaW5nLS07XG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGUpO1xuICAgICAgICBpZiAoIXRoaXMucHJvamVjdGlsZXMuaW5jbHVkZXMocHJvamVjdGlsZSkpIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVmZmVjdCBvZiBbLi4udGhpcy5lZmZlY3RzXSkge1xuICAgICAgaWYgKGVmZmVjdC5leHBpcmVzQXQgPD0gbm93KSB0aGlzLmVmZmVjdHMuc3BsaWNlKHRoaXMuZWZmZWN0cy5pbmRleE9mKGVmZmVjdCksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByb2plY3RpbGVQcmltaXRpdmVzKCk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlsZXMuZmxhdE1hcChwcm9qZWN0aWxlID0+IG5ldyBOZW9uUHJvamVjdGlsZSh7XG4gICAgICB4OiBwcm9qZWN0aWxlLngsIHk6IHByb2plY3RpbGUueSxcbiAgICAgIHZlbG9jaXR5WDogcHJvamVjdGlsZS52eCwgdmVsb2NpdHlZOiBwcm9qZWN0aWxlLnZ5LFxuICAgICAgcmFkaXVzOiBwcm9qZWN0aWxlLnJhZGl1cyxcbiAgICAgIGxlbmd0aDogcHJvamVjdGlsZS5yYWRpdXMgKiBwcm9qZWN0aWxlLmFzcGVjdCxcbiAgICAgIHRyYWlsTGVuZ3RoOiBwcm9qZWN0aWxlLnRyYWlsTGVuZ3RoLFxuICAgICAgdHJhaWxXaWR0aDogTWF0aC5tYXgocHJvamVjdGlsZS5yYWRpdXMgKiBwcm9qZWN0aWxlLnRyYWlsV2lkdGhTY2FsZSwgMS4xKSxcbiAgICAgIGNvbG9yOiBwcm9qZWN0aWxlLmNvbG9yLFxuICAgICAgdHJhaWxDb2xvcjogcHJvamVjdGlsZS50cmFpbENvbG9yLFxuICAgICAgY29yZUNvbG9yOiBwcm9qZWN0aWxlLmNvcmVDb2xvcixcbiAgICAgIHNoYXBlOiBwcm9qZWN0aWxlLnNoYXBlIGFzIE5lb25Qcm9qZWN0aWxlU2hhcGUsXG4gICAgICBpbnRlbnNpdHk6IHByb2plY3RpbGUudmlzdWFsSW50ZW5zaXR5ICogKHByb2plY3RpbGUudHJhY2VyID8gMS4zNSA6IDEpLFxuICAgICAgZ2xvdzogcHJvamVjdGlsZS50cmFjZXIgPyAxLjQgOiAuNzIsXG4gICAgfSkucHJpbWl0aXZlcygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Bhd25Wb2xsZXkodm9sbGV5OiBTY2hlZHVsZWRWb2xsZXksIG5vdzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBndW4sIGxldmVsLCBsYW5lLCBvcmlnaW5zLCBzY2FsZSB9ID0gdm9sbGV5O1xuICAgIGZvciAoY29uc3Qgb3JpZ2luIG9mIG9yaWdpbnMpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgbGV2ZWwucHJvamVjdGlsZUNvdW50KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBhbmdsZURlZ3JlZXMgPSBjb3VudCA9PT0gMSA/IDAgOiAoaW5kZXggLyAoY291bnQgLSAxKSAtIC41KSAqIGxldmVsLnNwcmVhZERlZ3JlZXM7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gYW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBsZXZlbC5wcm9qZWN0aWxlU3BlZWQgKiBzY2FsZTtcbiAgICAgICAgdGhpcy5zaG90U2VxdWVuY2UrKztcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKHtcbiAgICAgICAgICBpZDogKyt0aGlzLnNlcXVlbmNlLCBsYW5lLFxuICAgICAgICAgIHg6IG9yaWdpbi54ICsgKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiBndW4udmlzdWFsSWRlbnRpdHkuaG9yaXpvbnRhbEppdHRlciAqIHNjYWxlLFxuICAgICAgICAgIHk6IG9yaWdpbi55LFxuICAgICAgICAgIHZ4OiBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZCxcbiAgICAgICAgICB2eTogLU1hdGguY29zKGFuZ2xlKSAqIHNwZWVkLFxuICAgICAgICAgIHJhZGl1czogbGV2ZWwucHJvamVjdGlsZVJhZGl1cyAqIHNjYWxlLFxuICAgICAgICAgIGRhbWFnZTogbGV2ZWwuZGFtYWdlLFxuICAgICAgICAgIHBpZXJjZVJlbWFpbmluZzogbGV2ZWwucGllcmNlLFxuICAgICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgICAgICB0cmFpbENvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICAgICAgY29yZUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkuY29yZUNvbG9yXSxcbiAgICAgICAgICBhc3BlY3Q6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQXNwZWN0LFxuICAgICAgICAgIHRyYWlsV2lkdGhTY2FsZTogZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsV2lkdGhTY2FsZSxcbiAgICAgICAgICB2aXN1YWxJbnRlbnNpdHk6IGd1bi52aXN1YWxJZGVudGl0eS52aXN1YWxJbnRlbnNpdHksXG4gICAgICAgICAgc2hhcGU6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlU2hhcGUsXG4gICAgICAgICAgaW1wYWN0RWZmZWN0OiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RWZmZWN0LFxuICAgICAgICAgIGltcGFjdER1cmF0aW9uTXM6IGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHRyYWlsTGVuZ3RoOiBsZXZlbC50cmFpbExlbmd0aCAqIHNjYWxlLFxuICAgICAgICAgIHRyYWNlcjogbGV2ZWwudHJhY2VyRXZlcnlOdGhTaG90ID4gMCAmJiB0aGlzLnNob3RTZXF1ZW5jZSAlIGxldmVsLnRyYWNlckV2ZXJ5TnRoU2hvdCA9PT0gMCxcbiAgICAgICAgICBrbm9ja2JhY2s6IGxldmVsLmtub2NrYmFjayAqIHNjYWxlLFxuICAgICAgICAgIGhpdEZsYXNoU2NhbGU6IGxldmVsLmhpdEZsYXNoU2NhbGUsXG4gICAgICAgICAgaGl0RW5lbXlJZHM6IG5ldyBTZXQoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgIGtpbmQ6IFwibXV6emxlXCIsIHN0eWxlOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRWZmZWN0LFxuICAgICAgeDogb3JpZ2lucy5yZWR1Y2UoKHN1bSwgb3JpZ2luKSA9PiBzdW0gKyBvcmlnaW4ueCwgMCkgLyBvcmlnaW5zLmxlbmd0aCxcbiAgICAgIHk6IG9yaWdpbnNbMF0/LnkgPz8gMCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICByYWRpdXM6IDEwICogbGV2ZWwubXV6emxlRmxhc2hTY2FsZSAqIHNjYWxlLFxuICAgICAgZXhwaXJlc0F0OiBub3cgKyBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIGR1cmF0aW9uOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIHNlZWQ6IHRoaXMuc2hvdFNlcXVlbmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGU6IEd1blByb2plY3RpbGUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdGlsZXMuaW5kZXhPZihwcm9qZWN0aWxlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkgdGhpcy5wcm9qZWN0aWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCAiLyoqXG4gKiBOZWFyYnlUaHJlYXRRdWVyeSBcdTIwMTQgc2hhcmVkIGxhbmUtYXdhcmUgZW5lbXkgcXVlcnkgZm9yIHNoaWVsZCBhbmQgc3dvcmQgZmFtaWxpZXMuXG4gKlxuICogQm90aCBzaGllbGRzIGFuZCBzd29yZHMgb3BlcmF0ZSBuZWFyIHRoZSBwbGF5ZXIsIHNvIHRoZXkgc2hhcmUgdGhpcyBtb2R1bGVcbiAqIHRvIGF2b2lkIGluZGVwZW5kZW50LCBwb3RlbnRpYWxseSBjb25mbGljdGluZyBzY2Fucy5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBpbnRlbnRpb25hbGx5IG1pbmltYWwuIEl0IHByb3ZpZGVzIGVub3VnaCBzdHJ1Y3R1cmUgdG8gYmVcbiAqIGZ1dHVyZS1mcmllbmRseSAob3JpZ2luU2hhcGUgaW5kZXgsIGNvbHVtbi1iYW5kIGF3YXJlbmVzcykgd2l0aG91dFxuICogb3Zlci1idWlsZGluZy4gRXh0ZW5kIHdoZW4gbmVlZGVkIFx1MjAxNCBkbyBub3QgcmVmYWN0b3IgcHJlbWF0dXJlbHkuXG4gKlxuICogTmVhci1wbGF5ZXIgZWZmZWN0IHByZWNlZGVuY2UgKGFwcGxpZWQgYnkgbWFpbi50cyk6XG4gKiAgIDEuIHNoaWVsZEJsb2NrICAgICAgICBcdTIwMTQgY2hhcmdlLWJhc2VkIGhpdCBhYnNvcnB0aW9uXG4gKiAgIDIuIHNoaWVsZFB1bHNlICAgICAgICBcdTIwMTQgZW1lcmdlbmN5IHB1c2hcbiAqICAgMy4gc3dvcmRBdHRhY2sgICAgICAgIFx1MjAxNCBzd29yZCBmYW1pbHlcbiAqICAgNC4gc2hpZWxkQ29udGFjdERhbWFnZSBcdTIwMTQgY29udGFjdCBkYW1hZ2Ugb24gc2hpZWxkIGVkZ2VcbiAqICAgNS4gc2hpZWxkQXVyYSAgICAgICAgIFx1MjAxNCBzbG93L2RlYnVmZiBhdXJhXG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKiBNaW5pbWFsIGVuZW15IGludGVyZmFjZSBleHBlY3RlZCBieSB0aGUgdGhyZWF0IHF1ZXJ5IHN5c3RlbS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0VGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogMCB8IDE7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgIi8qKlxuICogU2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc2hpZWxkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIE9uZSBTaGllbGRTdGF0ZSB0cmFja3MgdGhlIGxpdmUgcnVudGltZSBzdGF0ZSBmb3Igd2hhdGV2ZXIgc2hpZWxkIGlzXG4gKiBjdXJyZW50bHkgZXF1aXBwZWQuIFRoZSB0aWNrU2hpZWxkKCkgZnVuY3Rpb24gZHJpdmVzIGFsbCBiZWhhdmlvcmFsIG1vZGVzXG4gKiAoY2hhcmdlLCBwdWxzZSwgY29udGFjdCwgYXVyYSkgYW5kIHJldHVybnMgYSByZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKlxuICogRGVzaWduIHJ1bGU6IHRoaXMgbW9kdWxlIGRvZXMgbm90IG1vZGlmeSBlbmVteSBhcnJheXMgZGlyZWN0bHkuIEl0IHJldHVybnNcbiAqIGEgU2hpZWxkVGlja1Jlc3VsdCB0aGF0IG1haW4udHMgYXBwbGllcy4gVGhpcyBrZWVwcyB0aGUgc2hpZWxkIHN5c3RlbVxuICogdGVzdGFibGUgYW5kIGNvbXBvc2FibGUgd2l0aCBvdGhlciBuZWFyLXBsYXllciBlZmZlY3RzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgU2hpZWxkSWQsIFNoaWVsZE1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBwdWxzZSBlZmZlY3QgKHZpc3VhbClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVB1bHNlRWZmZWN0IHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBwdWxzZUR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBUaW1lc3RhbXAgd2hlbiB0aGUgcHVsc2Ugd2FzIHRyaWdnZXJlZC4gKi9cbiAgc3RhcnRlZEF0OiBudW1iZXI7XG4gIC8qKiBEdXJhdGlvbiBpbiBtcy4gKi9cbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHRyaWdnZXJlZCkuICovXG4gIHg6IG51bWJlcjtcbiAgLyoqIENlbnRlciB5LiAqL1xuICB5OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhZGl1cyBhdCBwZWFrIGV4cGFuc2lvbi4gKi9cbiAgbWF4UmFkaXVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTaGllbGQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkU3RhdGUge1xuICBzaGllbGRJZDogU2hpZWxkSWQ7XG4gIC8qKiBSZW1haW5pbmcgY2hhcmdlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpLiAqL1xuICBjaGFyZ2VzOiBudW1iZXI7XG4gIC8qKiBTZWNvbmRzIHVudGlsIGNvb2xkb3duIGNvbXBsZXRlcy4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBtcyB0aW1lc3RhbXAgYWZ0ZXIgd2hpY2ggdGhlIGhpdCBmbGFzaCBpcyBkb25lLiAqL1xuICBoaXRGbGFzaFVudGlsOiBudW1iZXI7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMSBvZiBoaXQgZmxhc2ggYW5pbWF0aW9uICgxID0gZG9uZSkuICovXG4gIGhpdEZsYXNoUHJvZ3Jlc3M6IG51bWJlcjtcbiAgLyoqIEFjdGl2ZSBleHBhbmRpbmcgcHVsc2UgcmluZ3MgKFB1bHNlIENvcmUpLiAqL1xuICBwdWxzZUVmZmVjdHM6IEFjdGl2ZVB1bHNlRWZmZWN0W107XG4gIC8qKiBFbmVteSBpZHMgYWxyZWFkeSByZXNvbHZlZCBhZ2FpbnN0IHRoaXMgc2hpZWxkLCBwcmV2ZW50aW5nIHJlcGVhdCBkYW1hZ2UgcGVyIGZyYW1lLiAqL1xuICByZWFkb25seSBpbnRlcmNlcHRlZEVuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3Ioc2hpZWxkSWQ6IFNoaWVsZElkLCBtYXhDaGFyZ2VzOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoaWVsZElkID0gc2hpZWxkSWQ7XG4gICAgdGhpcy5jaGFyZ2VzID0gbWF4Q2hhcmdlcztcbiAgICB0aGlzLmNvb2xkb3duTGVmdCA9IDA7XG4gICAgdGhpcy5oaXRGbGFzaFVudGlsID0gMDtcbiAgICB0aGlzLmhpdEZsYXNoUHJvZ3Jlc3MgPSAxO1xuICAgIHRoaXMucHVsc2VFZmZlY3RzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRDb250YWN0VGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkQ29udGFjdFJlc3VsdCB7XG4gIGNvbnRhY3RlZDogYm9vbGVhbjtcbiAgYWJzb3JiZWQ6IGJvb2xlYW47XG4gIGRhbWFnZUFic29yYmVkOiBudW1iZXI7XG4gIGVuZW15RGVzdHJveWVkOiBib29sZWFuO1xufVxuXG4vKiogUmVzb2x2ZSBvbmUgZ2VvbWV0cmljIGVuZW15L3NoaWVsZCBjb250YWN0IGV4YWN0bHkgb25jZSBmb3IgdGhhdCBlbmVteS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlU2hpZWxkQ29udGFjdChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGFyZ2V0OiBTaGllbGRDb250YWN0VGFyZ2V0LFxuICBzaGllbGRYOiBudW1iZXIsXG4gIHNoaWVsZFk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHNjYWxlID0gMSxcbik6IFNoaWVsZENvbnRhY3RSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZENvbnRhY3RSZXN1bHQgPSB7XG4gICAgY29udGFjdGVkOiBmYWxzZSxcbiAgICBhYnNvcmJlZDogZmFsc2UsXG4gICAgZGFtYWdlQWJzb3JiZWQ6IDAsXG4gICAgZW5lbXlEZXN0cm95ZWQ6IGZhbHNlLFxuICB9O1xuICBpZiAodGFyZ2V0LmR5aW5nIHx8IHN0YXRlLmludGVyY2VwdGVkRW5lbXlJZHMuaGFzKHRhcmdldC5pZCkpIHJldHVybiByZXN1bHQ7XG4gIGNvbnN0IHJhZGl1cyA9IHNoaWVsZC5yYWRpdXMgKiBzY2FsZSArIHRhcmdldC5yYWRpdXM7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBzaGllbGRYO1xuICBjb25zdCBkeSA9IHRhcmdldC55IC0gc2hpZWxkWTtcbiAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gcmFkaXVzICogcmFkaXVzKSByZXR1cm4gcmVzdWx0O1xuXG4gIHJlc3VsdC5jb250YWN0ZWQgPSB0cnVlO1xuICBzdGF0ZS5pbnRlcmNlcHRlZEVuZW15SWRzLmFkZCh0YXJnZXQuaWQpO1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIGNvbnN0IGFic29yYmVkID0gTWF0aC5taW4oc3RhdGUuY2hhcmdlcywgdGFyZ2V0LmhlYWx0aCk7XG4gIHN0YXRlLmNoYXJnZXMgLT0gYWJzb3JiZWQ7XG4gIHRhcmdldC5oZWFsdGggLT0gYWJzb3JiZWQ7XG4gIHN0YXRlLmhpdEZsYXNoVW50aWwgPSBub3cgKyAyODA7XG4gIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSAwO1xuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICByZXN1bHQuYWJzb3JiZWQgPSB0cnVlO1xuICByZXN1bHQuZGFtYWdlQWJzb3JiZWQgPSBhYnNvcmJlZDtcbiAgcmVzdWx0LmVuZW15RGVzdHJveWVkID0gdGFyZ2V0LmhlYWx0aCA8PSAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgcmVzdWx0IFx1MjAxNCB3aGF0IG1haW4udHMgc2hvdWxkIGFwcGx5IHRoaXMgZnJhbWVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZFRpY2tSZXN1bHQge1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIHJlY2VpdmUgY29udGFjdERhbWFnZSB0aGlzIGZyYW1lIChjb250YWN0IHNoaWVsZHMpLiAqL1xuICBjb250YWN0RGFtYWdlRW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogQW1vdW50IG9mIGNvbnRhY3QgZGFtYWdlIHBlciBlbmVteS4gKi9cbiAgY29udGFjdERhbWFnZUFtb3VudDogbnVtYmVyO1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIGhhdmUgdGhlaXIgc3BlZWQgbXVsdGlwbGllZCBieSBzbG93TXVsdGlwbGllciAoYXVyYSkuICovXG4gIHNsb3dFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBFZmZlY3RpdmUgc2xvdyBtdWx0aXBsaWVyIHRvIGFwcGx5LiAqL1xuICBzbG93TXVsdGlwbGllcjogbnVtYmVyO1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHNoaWVsZCBhYnNvcmJlZCBhIGhpdCB0aGlzIGZyYW1lIChjaGFyZ2UgY29uc3VtZWQpLlxuICAgKiBtYWluLnRzIHNob3VsZCBOT1Qga2lsbC9kYW1hZ2UgdGhlIHBsYXllciBmb3IgdGhhdCBjb2xsaXNpb24uXG4gICAqL1xuICBhYnNvcmJlZEhpdDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuZW15IElEcyB0byBwdXNoIGF3YXkgZnJvbSB0aGUgcGxheWVyIGNlbnRlciAocHVsc2Ugc2hpZWxkKS5cbiAgICogbWFpbi50cyBzaG91bGQgYWRkIHB1c2hEaXN0YW5jZSB0byB0aGUgZW5lbXkncyBvdXR3YXJkIHZlbG9jaXR5IG9yIHBvc2l0aW9uLlxuICAgKi9cbiAgcHVzaEVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIFB1c2ggZGlzdGFuY2UgaW4gcHguICovXG4gIHB1c2hEaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBQVUxTRV9EVVJBVElPTl9NUyA9IDYwMDtcblxuLyoqXG4gKiBEcml2ZXMgdGhlIHNoaWVsZCBmb3Igb25lIGdhbWUgZnJhbWUuXG4gKlxuICogQHBhcmFtIHN0YXRlICAgICAgIE11dGFibGUgc2hpZWxkIHN0YXRlIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSBzaGllbGQgICAgICBJbW11dGFibGUgc2hpZWxkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgICAgTmVhcmJ5IHRocmVhdHMgZnJvbSBxdWVyeU5lYXJieVRocmVhdHMoKSAocmFuZ2UgPSBzaGllbGQucmFkaXVzKS5cbiAqIEBwYXJhbSBwbGF5ZXJYICAgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeCAoZm9yIHB1bHNlIG9yaWdpbikuXG4gKiBAcGFyYW0gcGxheWVyWSAgICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHkuXG4gKiBAcGFyYW0gbm93ICAgICAgICAgQ3VycmVudCB0aW1lc3RhbXAgaW4gbXMuXG4gKiBAcGFyYW0gZGVsdGEgICAgICAgRnJhbWUgZGVsdGEgaW4gc2Vjb25kcy5cbiAqIEByZXR1cm5zICAgICAgICAgICBBY3Rpb25zIGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGlja1NoaWVsZChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbik6IFNoaWVsZFRpY2tSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZFRpY2tSZXN1bHQgPSB7XG4gICAgY29udGFjdERhbWFnZUVuZW15SWRzOiBbXSxcbiAgICBjb250YWN0RGFtYWdlQW1vdW50OiAwLFxuICAgIHNsb3dFbmVteUlkczogW10sXG4gICAgc2xvd011bHRpcGxpZXI6IDEuMCxcbiAgICBhYnNvcmJlZEhpdDogZmFsc2UsXG4gICAgcHVzaEVuZW15SWRzOiBbXSxcbiAgICBwdXNoRGlzdGFuY2U6IDAsXG4gIH07XG5cbiAgLy8gQWR2YW5jZSBjb29sZG93blxuICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0ID4gMCkgc3RhdGUuY29vbGRvd25MZWZ0ID0gTWF0aC5tYXgoMCwgc3RhdGUuY29vbGRvd25MZWZ0IC0gZGVsdGEpO1xuXG4gIC8vIFVwZGF0ZSBwdWxzZSBwcm9ncmVzc1xuICBmb3IgKGNvbnN0IHB1bHNlIG9mIHN0YXRlLnB1bHNlRWZmZWN0cykge1xuICAgIHB1bHNlLnByb2dyZXNzID0gKG5vdyAtIHB1bHNlLnN0YXJ0ZWRBdCkgLyBwdWxzZS5kdXJhdGlvbk1zO1xuICB9XG4gIHN0YXRlLnB1bHNlRWZmZWN0cyA9IHN0YXRlLnB1bHNlRWZmZWN0cy5maWx0ZXIocCA9PiBwLnByb2dyZXNzIDwgMSk7XG5cbiAgLy8gQWR2YW5jZSBoaXQgZmxhc2hcbiAgaWYgKHN0YXRlLmhpdEZsYXNoVW50aWwgPiAwKSB7XG4gICAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IE1hdGgubWluKDEsIChub3cgLSAoc3RhdGUuaGl0Rmxhc2hVbnRpbCAtIDI4MCkpIC8gMjgwKTtcbiAgfVxuXG4gIC8vIFJlZmlsbCBjaGFyZ2VzIHdoZW4gY29vbGRvd24gY29tcGxldGVzIChjaGFyZ2UtYmFzZWQgc2hpZWxkcylcbiAgaWYgKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiICYmIHN0YXRlLmNvb2xkb3duTGVmdCA9PT0gMCAmJiBzdGF0ZS5jaGFyZ2VzIDwgc2hpZWxkLm1heENoYXJnZXMpIHtcbiAgICBzdGF0ZS5jaGFyZ2VzID0gc2hpZWxkLm1heENoYXJnZXM7XG4gIH1cblxuICBpZiAodGhyZWF0cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IGNvbnRhY3QgXHUyMDE0IGRlYWwgZGFtYWdlIHRvIGVuZW1pZXMgdG91Y2hpbmcgdGhlIHNoaWVsZCBlZGdlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICByZXN1bHQuY29udGFjdERhbWFnZUFtb3VudCA9IHNoaWVsZC5jb250YWN0RGFtYWdlO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogYXVyYSBcdTIwMTQgc2xvdyBlbmVtaWVzIGluc2lkZSByYWRpdXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIHJlc3VsdC5zbG93TXVsdGlwbGllciA9IHNoaWVsZC5zbG93TXVsdGlwbGllcjtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LnNsb3dFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IHB1bHNlIFx1MjAxNCBlbWl0IHB1c2ggcmluZyB3aGVuIGFueSBlbmVteSBlbnRlcnMgcmFuZ2VcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIC8vIFRyaWdnZXIgcHVsc2VcbiAgICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICAgIGNvbnN0IHB1bHNlOiBBY3RpdmVQdWxzZUVmZmVjdCA9IHtcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc3RhcnRlZEF0OiBub3csXG4gICAgICBkdXJhdGlvbk1zOiBQVUxTRV9EVVJBVElPTl9NUyxcbiAgICAgIHg6IHBsYXllclgsXG4gICAgICB5OiBwbGF5ZXJZLFxuICAgICAgbWF4UmFkaXVzOiBzaGllbGQucmFkaXVzICogMS44LFxuICAgICAgY29sb3I6IFwiXCIsIC8vIGZpbGxlZCBieSBkcmF3IGNvZGUgd2l0aCBuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdXG4gICAgfTtcbiAgICBzdGF0ZS5wdWxzZUVmZmVjdHMucHVzaChwdWxzZSk7XG4gICAgcmVzdWx0LnB1c2hEaXN0YW5jZSA9IHNoaWVsZC5wdXNoRGlzdGFuY2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5wdXNoRW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGl0IGFic29ycHRpb24gXHUyMDE0IGNhbGxlZCBieSBtYWluLnRzIHdoZW4gYW4gZW5lbXkgd291bGQgdG91Y2ggdGhlIHBsYXllclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQXR0ZW1wdCB0byBhYnNvcmIgYSBoaXQgdXNpbmcgc2hpZWxkIGNoYXJnZXMuXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhpdCB3YXMgYWJzb3JiZWQgKGNoYXJnZSBjb25zdW1lZCksIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyeUFic29yYkhpdChzdGF0ZTogU2hpZWxkU3RhdGUsIHNoaWVsZDogU2hpZWxkTWVtYmVyLCBub3c6IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gZmFsc2U7XG4gIHN0YXRlLmNoYXJnZXMgLT0gMTtcbiAgc3RhdGUuaGl0Rmxhc2hVbnRpbCA9IG5vdyArIDI4MDtcbiAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IDA7XG4gIC8vIFJlY2hhcmdlIGJlZ2lucyBhZnRlciB0aGUgbW9zdCByZWNlbnQgYWJzb3JiZWQgaGl0LiBLZWVwaW5nIHRoZSBjb29sZG93blxuICAvLyBhY3RpdmUgcHJldmVudHMgdGlja1NoaWVsZCgpIGZyb20gaW1tZWRpYXRlbHkgcmVzdG9yaW5nIGEgcGFydGlhbGx5XG4gIC8vIGRlcGxldGVkIHNoaWVsZCBvbiB0aGUgbmV4dCBmcmFtZS5cbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgcmV0dXJuIHRydWU7XG59XG4iLCAiLyoqXG4gKiBTd29yZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHN3b3JkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZSB0aWNrIGZ1bmN0aW9uIG9ubHkgdHJpZ2dlcnMgYSBzd2luZ1xuICogd2hlbiBhIHZhbGlkIHRhcmdldCBleGlzdHMgaW4gcmFuZ2UgYW5kIHRoZSBjb29sZG93biBpcyByZWFkeS4gSXQgaWRsZXMgc2lsZW50bHlcbiAqIHdoZW4gbm8gdGFyZ2V0IGlzIHByZXNlbnQuXG4gKlxuICogRGVzaWduIHJ1bGU6IHNhbWUgYXMgc2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBubyBkaXJlY3QgZW5lbXkgbXV0YXRpb24uIFJldHVybnMgYVxuICogU3dvcmRUaWNrUmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5cbmltcG9ydCB0eXBlIHsgU3dvcmRJZCwgU3dvcmRNZW1iZXIsIFN3b3JkVGFyZ2V0aW5nTW9kZSB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgdHlwZSB7IE5lYXJieVRocmVhdCB9IGZyb20gXCIuL25lYXJieVRocmVhdFF1ZXJ5XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWN0aXZlIHNsYXNoIGFuaW1hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlU2xhc2hBbmltYXRpb24ge1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEuIERyaXZlbiBieSAobm93IC0gc3RhcnRlZEF0KSAvIGR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeCAoc25hcHNob3Qgb2YgcGxheWVyIHBvc2l0aW9uIHdoZW4gc3dpbmcgb2NjdXJyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdGFyZ2V0UG9pbnRzOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbiAgc2lkZTogLTEgfCAxO1xuICAvKiogUmVhY2ggb2YgdGhlIGFyYyBpbiBwaXhlbHMuICovXG4gIHJlYWNoOiBudW1iZXI7XG4gIC8qKiBBcmMgd2lkdGggaW4gZGVncmVlcy4gKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogQ29sb3IuICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKiBUaGlja25lc3MgbXVsdGlwbGllci4gKi9cbiAgdGhpY2tuZXNzOiBudW1iZXI7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3dvcmQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRTdGF0ZSB7XG4gIHN3b3JkSWQ6IFN3b3JkSWQ7XG4gIC8qKiBBY3RpdmUgc3dvcmQgbGV2ZWwuIFJlcGVhdGVkIHBpY2t1cHMgb2YgdGhlIHNhbWUgc3dvcmQgaW5jcmVhc2UgdGhpcyB1cCB0byA1LiAqL1xuICBsZXZlbDogbnVtYmVyO1xuICAvKiogU2Vjb25kcyByZW1haW5pbmcgdW50aWwgdGhlIHN3b3JkIGNhbiBzd2luZyBhZ2Fpbi4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgc2xhc2ggYW5pbWF0aW9uLCBpZiBhbnkuICovXG4gIGFjdGl2ZVNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG4gIHByZXZpb3VzU2xhc2hTaWRlOiAtMSB8IDE7XG4gIGNvb2xkb3duTGVmdHM6IG51bWJlcltdO1xuICBhY3RpdmVTbGFzaGVzOiBBcnJheTxBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw+O1xuICBwcmV2aW91c1NsYXNoU2lkZXM6IEFycmF5PC0xIHwgMT47XG4gIG5leHRTbG90TGF1bmNoQWxsb3dlZEF0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc3dvcmRJZDogU3dvcmRJZCwgbGV2ZWwgPSAxKSB7XG4gICAgdGhpcy5zd29yZElkID0gc3dvcmRJZDtcbiAgICB0aGlzLmxldmVsID0gTWF0aC5taW4oNSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihsZXZlbCkpKTtcbiAgICB0aGlzLmNvb2xkb3duTGVmdCA9IDA7XG4gICAgdGhpcy5hY3RpdmVTbGFzaCA9IG51bGw7XG4gICAgdGhpcy5wcmV2aW91c1NsYXNoU2lkZSA9IDE7XG4gICAgdGhpcy5jb29sZG93bkxlZnRzID0gWzBdO1xuICAgIHRoaXMuYWN0aXZlU2xhc2hlcyA9IFtudWxsXTtcbiAgICB0aGlzLnByZXZpb3VzU2xhc2hTaWRlcyA9IFsxXTtcbiAgICB0aGlzLm5leHRTbG90TGF1bmNoQWxsb3dlZEF0ID0gMDtcbiAgfVxuXG4gIHN5bmNTbG90cyhjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihjb3VudCkpO1xuICAgIHdoaWxlICh0aGlzLmNvb2xkb3duTGVmdHMubGVuZ3RoIDwgdGFyZ2V0KSB0aGlzLmNvb2xkb3duTGVmdHMucHVzaCgwKTtcbiAgICB3aGlsZSAodGhpcy5hY3RpdmVTbGFzaGVzLmxlbmd0aCA8IHRhcmdldCkgdGhpcy5hY3RpdmVTbGFzaGVzLnB1c2gobnVsbCk7XG4gICAgd2hpbGUgKHRoaXMucHJldmlvdXNTbGFzaFNpZGVzLmxlbmd0aCA8IHRhcmdldCkgdGhpcy5wcmV2aW91c1NsYXNoU2lkZXMucHVzaCgxKTtcbiAgICB0aGlzLmNvb2xkb3duTGVmdHMubGVuZ3RoID0gdGFyZ2V0O1xuICAgIHRoaXMuYWN0aXZlU2xhc2hlcy5sZW5ndGggPSB0YXJnZXQ7XG4gICAgdGhpcy5wcmV2aW91c1NsYXNoU2lkZXMubGVuZ3RoID0gdGFyZ2V0O1xuICAgIHRoaXMuY29vbGRvd25MZWZ0ID0gTWF0aC5taW4oLi4udGhpcy5jb29sZG93bkxlZnRzKTtcbiAgICB0aGlzLmFjdGl2ZVNsYXNoID0gdGhpcy5hY3RpdmVTbGFzaGVzLmZpbmQoQm9vbGVhbikgPz8gbnVsbDtcbiAgICB0aGlzLnByZXZpb3VzU2xhc2hTaWRlID0gdGhpcy5wcmV2aW91c1NsYXNoU2lkZXNbMF0gPz8gMTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgcmVzdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFRpY2tSZXN1bHQge1xuICAvKiogRW5lbXkgSURzIGhpdCBieSB0aGUgc3dpbmcgdGhpcyBmcmFtZS4gRW1wdHkgaWYgbm8gc3dpbmcgb2NjdXJyZWQuICovXG4gIGhpdEVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIEhpdCB0YXJnZXRzIHdpdGggdGhlaXIgcG9zaXRpb25zIGZvciBkZWxheWVkIHZpc3VhbC9jb250YWN0IHRpbWluZy4gKi9cbiAgaGl0VGFyZ2V0czogQXJyYXk8eyBpZDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9PjtcbiAgLyoqIERhbWFnZSB0byBhcHBseSB0byBlYWNoIGhpdCBlbmVteS4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIGEgbmV3IHNsYXNoIHdhcyB0cmlnZ2VyZWQgdGhpcyBmcmFtZSAoZm9yIGF1ZGlvLCBldGMuKS4gKi9cbiAgc3dpbmdUcmlnZ2VyZWQ6IGJvb2xlYW47XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGFyZ2V0aW5nIGhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzZWxlY3RUYXJnZXRzKFxuICB0aHJlYXRzOiByZWFkb25seSBOZWFyYnlUaHJlYXRbXSxcbiAgbW9kZTogU3dvcmRUYXJnZXRpbmdNb2RlLFxuICBtYXhUYXJnZXRzOiBudW1iZXIsXG4gIHJvd1JlYWNoOiBudW1iZXIsXG4pOiBOZWFyYnlUaHJlYXRbXSB7XG4gIGlmICh0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBpZiAocm93UmVhY2ggPiAxICYmIHRocmVhdHNbMF0udGFyZ2V0LnJvd0lkICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjZW50ZXJSb3cgPSB0aHJlYXRzWzBdLnRhcmdldC5yb3dJZDtcbiAgICBjb25zdCByb3dzID0gWy4uLm5ldyBTZXQodGhyZWF0c1xuICAgICAgLm1hcCh0aHJlYXQgPT4gdGhyZWF0LnRhcmdldC5yb3dJZClcbiAgICAgIC5maWx0ZXIocm93SWQgPT4gcm93SWQgIT09IHVuZGVmaW5lZCkpXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IE1hdGguYWJzKGEgLSBjZW50ZXJSb3cpIC0gTWF0aC5hYnMoYiAtIGNlbnRlclJvdykpXG4gICAgICAuc2xpY2UoMCwgcm93UmVhY2gpO1xuICAgIHJldHVybiB0aHJlYXRzXG4gICAgICAuZmlsdGVyKHRocmVhdCA9PiB0aHJlYXQudGFyZ2V0LnJvd0lkICE9PSB1bmRlZmluZWQgJiYgcm93cy5pbmNsdWRlcyh0aHJlYXQudGFyZ2V0LnJvd0lkKSlcbiAgICAgIC5zbGljZSgwLCBtYXhUYXJnZXRzKTtcbiAgfVxuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiOlxuICAgIGNhc2UgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCI6XG4gICAgICAvLyBxdWVyeU5lYXJieVRocmVhdHMoKSBhbHJlYWR5IHJldHVybnMgc29ydGVkIGJ5IGRpc3RhbmNlXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJmcm9udE1vc3RUaHJlYXRcIjpcbiAgICAgIC8vIEhpZ2hlc3QgeSA9IG1vc3QgYWR2YW5jZWQgdG93YXJkIHBsYXllclxuICAgICAgcmV0dXJuIFsuLi50aHJlYXRzXS5zb3J0KChhLCBiKSA9PiBiLnRhcmdldC55IC0gYS50YXJnZXQueSkuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG5cbiAgICBjYXNlIFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjpcbiAgICAgIC8vIEFscmVhZHkgc29ydGVkIGJ5IGRpc3RhbmNlIFx1MjAxNCB0YWtlIG5lYXJlc3QgY2x1c3RlclxuICAgICAgcmV0dXJuIHRocmVhdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRocmVhdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3dvcmRSb3dSZWFjaChzd29yZDogU3dvcmRNZW1iZXIsIGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoIXN3b3JkLnJvd1JlYWNoKSByZXR1cm4gMTtcbiAgY29uc3QgY2xhbXBlZExldmVsID0gTWF0aC5taW4oNSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihsZXZlbCkpKTtcbiAgY29uc3QgcHJvZ3Jlc3MgPSAoY2xhbXBlZExldmVsIC0gMSkgLyA0O1xuICByZXR1cm4gTWF0aC5yb3VuZChzd29yZC5yb3dSZWFjaC5sZXZlbDEgKyAoc3dvcmQucm93UmVhY2gubGV2ZWw1IC0gc3dvcmQucm93UmVhY2gubGV2ZWwxKSAqIHByb2dyZXNzKTtcbn1cblxuZnVuY3Rpb24gc3dvcmREYW1hZ2Uoc3dvcmQ6IFN3b3JkTWVtYmVyLCBsZXZlbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ID09PSB1bmRlZmluZWQpIHJldHVybiBzd29yZC5kYW1hZ2U7XG4gIGNvbnN0IGNsYW1wZWRMZXZlbCA9IE1hdGgubWluKDUsIE1hdGgubWF4KDEsIE1hdGguZmxvb3IobGV2ZWwpKSk7XG4gIGNvbnN0IHByb2dyZXNzID0gKGNsYW1wZWRMZXZlbCAtIDEpIC8gNDtcbiAgcmV0dXJuIHN3b3JkLmRhbWFnZSArIChzd29yZC5kYW1hZ2VBdExldmVsNSAtIHN3b3JkLmRhbWFnZSkgKiBwcm9ncmVzcztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaWNrIGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBEcml2ZXMgdGhlIHN3b3JkIGZvciBvbmUgZ2FtZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgICAgIE11dGFibGUgc3dvcmQgc3RhdGUuXG4gKiBAcGFyYW0gc3dvcmQgICAgIEltbXV0YWJsZSBzd29yZCBkZWZpbml0aW9uLlxuICogQHBhcmFtIHRocmVhdHMgICBOZWFyYnkgdGhyZWF0cyBpbiByYW5nZSBmcm9tIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpLlxuICogQHBhcmFtIHBsYXllclggICBDdXJyZW50IHBsYXllciBjZW50ZXIgeC5cbiAqIEBwYXJhbSBwbGF5ZXJZICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHkuXG4gKiBAcGFyYW0gbm93ICAgICAgIFRpbWVzdGFtcCBpbiBtcy5cbiAqIEBwYXJhbSBkZWx0YSAgICAgRnJhbWUgZGVsdGEgaW4gc2Vjb25kcy5cbiAqIEBwYXJhbSBjb2xvciAgICAgUmVzb2x2ZWQgaGV4IGNvbG9yIChmcm9tIG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU3dvcmQoXG4gIHN0YXRlOiBTd29yZFN0YXRlLFxuICBzd29yZDogU3dvcmRNZW1iZXIsXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBwbGF5ZXJYOiBudW1iZXIsXG4gIHBsYXllclk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIGRlbHRhOiBudW1iZXIsXG4gIGNvbG9yOiBzdHJpbmcsXG4gIHZpc3VhbER1cmF0aW9uTXMgPSBzd29yZC5zbGFzaER1cmF0aW9uTXMsXG4gIHN3b3JkQ291bnQgPSAxLFxuICBzbG90TGF1bmNoU3RhZ2dlck1zID0gMTgwLFxuKTogU3dvcmRUaWNrUmVzdWx0IHtcbiAgY29uc3QgcmVzdWx0OiBTd29yZFRpY2tSZXN1bHQgPSB7XG4gICAgaGl0RW5lbXlJZHM6IFtdLFxuICAgIGhpdFRhcmdldHM6IFtdLFxuICAgIGRhbWFnZTogMCxcbiAgICBzd2luZ1RyaWdnZXJlZDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGUuc3luY1Nsb3RzKHN3b3JkQ291bnQpO1xuXG4gIGZvciAobGV0IHNsb3QgPSAwOyBzbG90IDwgc3RhdGUuY29vbGRvd25MZWZ0cy5sZW5ndGg7IHNsb3QrKykge1xuICAgIGlmIChzdGF0ZS5jb29sZG93bkxlZnRzW3Nsb3RdID4gMCkgc3RhdGUuY29vbGRvd25MZWZ0c1tzbG90XSA9IE1hdGgubWF4KDAsIHN0YXRlLmNvb2xkb3duTGVmdHNbc2xvdF0gLSBkZWx0YSk7XG4gICAgY29uc3Qgc2xhc2ggPSBzdGF0ZS5hY3RpdmVTbGFzaGVzW3Nsb3RdO1xuICAgIGlmIChzbGFzaCkge1xuICAgICAgc2xhc2gucHJvZ3Jlc3MgPSAobm93IC0gc2xhc2guc3RhcnRlZEF0KSAvIHNsYXNoLmR1cmF0aW9uTXM7XG4gICAgICBpZiAoc2xhc2gucHJvZ3Jlc3MgPj0gMSkgc3RhdGUuYWN0aXZlU2xhc2hlc1tzbG90XSA9IG51bGw7XG4gICAgfVxuICB9XG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWluKC4uLnN0YXRlLmNvb2xkb3duTGVmdHMpO1xuICBzdGF0ZS5hY3RpdmVTbGFzaCA9IHN0YXRlLmFjdGl2ZVNsYXNoZXMuZmluZChCb29sZWFuKSA/PyBudWxsO1xuXG4gIC8vIFN3b3JkcyBvbmx5IHN3aW5nIHdoZW4gYSB0YXJnZXQgZXhpc3RzIGluIHJhbmdlIEFORCBjb29sZG93biBpcyByZWFkeS5cbiAgLy8gVGhpcyBpcyB0aGUga2V5IGRpZmZlcmVuY2UgZnJvbSBndW5zLCB3aGljaCBmaXJlIG9uIGEgcGVyaW9kIHJlZ2FyZGxlc3MuXG4gIGlmICh0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICBsZXQgcmVtYWluaW5nID0gWy4uLnRocmVhdHNdO1xuICBjb25zdCBkYW1hZ2UgPSBzd29yZERhbWFnZShzd29yZCwgc3RhdGUubGV2ZWwpO1xuICBmb3IgKGxldCBzbG90ID0gMDsgc2xvdCA8IHN0YXRlLmNvb2xkb3duTGVmdHMubGVuZ3RoICYmIHJlbWFpbmluZy5sZW5ndGggPiAwOyBzbG90KyspIHtcbiAgICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0cy5sZW5ndGggPiAxICYmIG5vdyA8IHN0YXRlLm5leHRTbG90TGF1bmNoQWxsb3dlZEF0KSBicmVhaztcbiAgICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0c1tzbG90XSA+IDApIGNvbnRpbnVlO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0VGFyZ2V0cyhyZW1haW5pbmcsIHN3b3JkLnRhcmdldGluZ01vZGUsIHN3b3JkLm1heFRhcmdldHMsIHN3b3JkUm93UmVhY2goc3dvcmQsIHN0YXRlLmxldmVsKSk7XG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG4gICAgY29uc3Qgc2lkZTogLTEgfCAxID0gc3RhdGUucHJldmlvdXNTbGFzaFNpZGVzW3Nsb3RdID09PSAtMSA/IDEgOiAtMTtcbiAgICBzdGF0ZS5wcmV2aW91c1NsYXNoU2lkZXNbc2xvdF0gPSBzaWRlO1xuICAgIHN0YXRlLnByZXZpb3VzU2xhc2hTaWRlID0gc2lkZTtcbiAgICBzdGF0ZS5jb29sZG93bkxlZnRzW3Nsb3RdID0gc3dvcmQuY29vbGRvd25TZWNvbmRzO1xuICAgIGlmIChzdGF0ZS5jb29sZG93bkxlZnRzLmxlbmd0aCA+IDEpIHN0YXRlLm5leHRTbG90TGF1bmNoQWxsb3dlZEF0ID0gbm93ICsgc2xvdExhdW5jaFN0YWdnZXJNcztcbiAgICByZXN1bHQuc3dpbmdUcmlnZ2VyZWQgPSB0cnVlO1xuICAgIHJlc3VsdC5kYW1hZ2UgPSBkYW1hZ2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHNlbGVjdGVkKSB7XG4gICAgICByZXN1bHQuaGl0RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgICAgcmVzdWx0LmhpdFRhcmdldHMucHVzaCh7IGlkOiB0YXJnZXQuaWQsIHg6IHRhcmdldC54LCB5OiB0YXJnZXQueSB9KTtcbiAgICB9XG4gICAgc3RhdGUuYWN0aXZlU2xhc2hlc1tzbG90XSA9IHtcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc3RhcnRlZEF0OiBub3csXG4gICAgICBkdXJhdGlvbk1zOiB2aXN1YWxEdXJhdGlvbk1zLFxuICAgICAgeDogcGxheWVyWCxcbiAgICAgIHk6IHBsYXllclksXG4gICAgICB0YXJnZXRQb2ludHM6IHNlbGVjdGVkLm1hcCgoeyB0YXJnZXQgfSkgPT4gKHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0pKSxcbiAgICAgIHNpZGUsXG4gICAgICByZWFjaDogc3dvcmQucmFuZ2UgKiAwLjc1LFxuICAgICAgYXJjRGVncmVlczogc3dvcmQuYXJjRGVncmVlcyxcbiAgICAgIGNvbG9yLFxuICAgICAgdGhpY2tuZXNzOiBzd29yZC5zbGFzaFRoaWNrbmVzcyxcbiAgICB9O1xuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gbmV3IFNldChzZWxlY3RlZC5tYXAoKHsgdGFyZ2V0IH0pID0+IHRhcmdldC5pZCkpO1xuICAgIHJlbWFpbmluZyA9IHJlbWFpbmluZy5maWx0ZXIoKHsgdGFyZ2V0IH0pID0+ICFzZWxlY3RlZElkcy5oYXModGFyZ2V0LmlkKSk7XG4gIH1cbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gTWF0aC5taW4oLi4uc3RhdGUuY29vbGRvd25MZWZ0cyk7XG4gIHN0YXRlLmFjdGl2ZVNsYXNoID0gc3RhdGUuYWN0aXZlU2xhc2hlcy5maW5kKEJvb2xlYW4pID8/IG51bGw7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE9yYklkIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUVudHJhbmNlUHJvZmlsZSB7XG4gIGR1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xuICBzY2F0dGVyTWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBlbmVteUVudHJhbmNlUHJvZmlsZXM6IFJlY29yZDxPcmJJZCwgRW5lbXlFbnRyYW5jZVByb2ZpbGU+ID0ge1xuICBiYXNpY09yYjoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjQ4LFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC41OCxcbiAgfSxcbiAgZ2xhc3NTaGllbGQ6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC4zNCxcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAwLFxuICB9LFxuICB3aW5nZXI6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC40MixcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAuNSxcbiAgfSxcbiAgdGFuazoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjcyLFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC4zNCxcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHtcbiAgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yLFxuICB0eXBlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsXG4gIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0LFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVZpc3VhbFR5cGUgPSBPcmJJZDtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUV4aXRFbnZlbG9wZSB7XG4gIGVudHJ5U2Vjb25kczogbnVtYmVyO1xuICBlbnRyeVB1bmNoOiBudW1iZXI7XG4gIHN1c3RhaW5TZWNvbmRzOiBudW1iZXI7XG4gIHN1c3RhaW5MZXZlbDogbnVtYmVyO1xuICBmYWRlU2Vjb25kczogbnVtYmVyO1xuICBzcGFya0ludGVuc2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdENsb3VkUHJvZmlsZSBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJhZ2VcIiB8IFwiY29sb3JcIiB8IFwiY29yZUNvbG9yXCIgfCBcInhcIiB8IFwieVwiIHwgXCJzZWVkXCI+IHtcbiAgc2l6ZTogbnVtYmVyO1xuICBlbnZlbG9wZTogRW5lbXlFeGl0RW52ZWxvcGU7XG4gIGNsb3VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZDogbnVtYmVyO1xuICBhZ2U6IG51bWJlcjtcbn1cblxuY29uc3QgYmFzaWNPcmJFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICBjbG91ZDogdHJ1ZSxcbiAgc2l6ZTogMTEsXG4gIGRldGFpbDogNixcbiAgdHVyYnVsZW5jZTogMi43MixcbiAgZ2xvdzogMTEsXG4gIGNvcmVJbnRlbnNpdHk6IDEuMjUsXG4gIHJpbUludGVuc2l0eTogLjgsXG4gIG9wYWNpdHk6IC44MixcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBlbnZlbG9wZToge1xuICAgIGVudHJ5U2Vjb25kczogLjE2LFxuICAgIGVudHJ5UHVuY2g6IDIuMzMsXG4gICAgc3VzdGFpblNlY29uZHM6IC4yMSxcbiAgICBzdXN0YWluTGV2ZWw6IDEuMixcbiAgICBmYWRlU2Vjb25kczogLjI5LFxuICAgIHNwYXJrSW50ZW5zaXR5OiAxLjIxLFxuICB9LFxufTtcblxuY29uc3Qgbm9DbG91ZEV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGNsb3VkOiBmYWxzZSxcbiAgc2l6ZTogMCxcbn07XG5cbmNvbnN0IHRhbmtFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICAuLi5iYXNpY09yYkV4aXRQcm9maWxlLFxuICBzaXplOiAxNSxcbiAgZ2xvdzogMTMsXG59O1xuXG5leHBvcnQgY29uc3QgZW5lbXlFeGl0UHJvZmlsZXM6IFJlY29yZDxFbmVteVZpc3VhbFR5cGUsIEVuZW15RXhpdENsb3VkUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiBiYXNpY09yYkV4aXRQcm9maWxlLFxuICBnbGFzc1NoaWVsZDogbm9DbG91ZEV4aXRQcm9maWxlLFxuICB3aW5nZXI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHRhbms6IHRhbmtFeGl0UHJvZmlsZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXREdXJhdGlvbihlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZSk6IG51bWJlciB7XG4gIGNvbnN0IGVudmVsb3BlID0gZW5lbXlFeGl0UHJvZmlsZXNbZW5lbXlUeXBlXS5lbnZlbG9wZTtcbiAgcmV0dXJuIGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzICsgZW52ZWxvcGUuZmFkZVNlY29uZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgcmV0dXJuIHtcbiAgICBlbmVteVR5cGU6IG9wdGlvbnMuZW5lbXlUeXBlLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwLFxuICAgIGFnZTogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHMoZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sIGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGluZGV4ID0gZWZmZWN0cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWZmZWN0ID0gZWZmZWN0c1tpbmRleF07XG4gICAgZWZmZWN0LmFnZSArPSBkZWx0YVNlY29uZHM7XG4gICAgaWYgKGVmZmVjdC5hZ2UgPj0gZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSkpIGVmZmVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlFeGl0Q2xvdWQoZWZmZWN0OiBBY3RpdmVFbmVteUV4aXRFZmZlY3QpOiBOZW9uVG9wRG93bkNsb3VkQnVyc3Qge1xuICBjb25zdCBwcm9maWxlID0gZW5lbXlFeGl0UHJvZmlsZXNbZWZmZWN0LmVuZW15VHlwZV07XG4gIGlmICghcHJvZmlsZS5jbG91ZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgICAgY29yZUNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICB4OiBlZmZlY3QueCxcbiAgICAgIHk6IGVmZmVjdC55LFxuICAgICAgc2l6ZTogMCxcbiAgICAgIGRldGFpbDogMyxcbiAgICAgIHR1cmJ1bGVuY2U6IDAsXG4gICAgICBnbG93OiAwLFxuICAgICAgY29yZUludGVuc2l0eTogMCxcbiAgICAgIHJpbUludGVuc2l0eTogMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkaXNzaXBhdGlvblRpbWU6IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpLFxuICAgICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICAgIGFnZTogZWZmZWN0LmFnZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IGVudmVsb3BlID0gcHJvZmlsZS5lbnZlbG9wZTtcbiAgY29uc3QgZHVyYXRpb24gPSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKTtcbiAgY29uc3QgZW50cnlUID0gTWF0aC5taW4oMSwgZWZmZWN0LmFnZSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmVudHJ5U2Vjb25kcykpO1xuICBjb25zdCBmYWRlU3RhcnQgPSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgKyBlbnZlbG9wZS5zdXN0YWluU2Vjb25kcztcbiAgY29uc3QgZmFkZVQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZWZmZWN0LmFnZSAtIGZhZGVTdGFydCkgLyBNYXRoLm1heCguMDAxLCBlbnZlbG9wZS5mYWRlU2Vjb25kcykpKTtcbiAgY29uc3Qgc3VzdGFpbiA9IGVmZmVjdC5hZ2UgPj0gZW52ZWxvcGUuZW50cnlTZWNvbmRzICYmIGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyBlbnZlbG9wZS5zdXN0YWluTGV2ZWwgOiAxO1xuICBjb25zdCBlbnRyeUZsYXNoID0gMSArIE1hdGguc2luKGVudHJ5VCAqIE1hdGguUEkpICogZW52ZWxvcGUuZW50cnlQdW5jaDtcbiAgY29uc3QgZmFkZUVuZXJneSA9IDEgLSBmYWRlVCAqIC42MjtcbiAgY29uc3Qgc3BhcmtBY2NlbnQgPSAxICsgZmFkZVQgKiBlbnZlbG9wZS5zcGFya0ludGVuc2l0eSAqIC4yMjtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgIGNvcmVDb2xvcjogZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yKGVmZmVjdC5jb2xvciksXG4gICAgeDogZWZmZWN0LngsXG4gICAgeTogZWZmZWN0LnksXG4gICAgc2l6ZTogcHJvZmlsZS5zaXplICogKC40OCArIGVudHJ5VCAqIC41MiksXG4gICAgZGV0YWlsOiBwcm9maWxlLmRldGFpbCxcbiAgICB0dXJidWxlbmNlOiBwcm9maWxlLnR1cmJ1bGVuY2UsXG4gICAgZ2xvdzogKHByb2ZpbGUuZ2xvdyA/PyAxKSAqIGVudHJ5Rmxhc2ggKiBzdXN0YWluICogZmFkZUVuZXJneSAqIHNwYXJrQWNjZW50LFxuICAgIGNvcmVJbnRlbnNpdHk6IChwcm9maWxlLmNvcmVJbnRlbnNpdHkgPz8gMSkgKiAoMSArIGVudmVsb3BlLmVudHJ5UHVuY2ggKiAoMSAtIGVudHJ5VCkgKiAuNTUpLFxuICAgIHJpbUludGVuc2l0eTogKHByb2ZpbGUucmltSW50ZW5zaXR5ID8/IDEpICogKDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjM1KSxcbiAgICBvcGFjaXR5OiAocHJvZmlsZS5vcGFjaXR5ID8/IDEpICogKGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyAxIDogMSAtIGZhZGVUICogLjg4KSxcbiAgICBkaXNzaXBhdGlvblRpbWU6IGR1cmF0aW9uLFxuICAgIGRpc3NpcGF0aW9uQWN0aW9uOiBcInNwYXJrRmFkZVwiLFxuICAgIGRyaWZ0WDogcHJvZmlsZS5kcmlmdFggPz8gMCxcbiAgICBkcmlmdFk6IHByb2ZpbGUuZHJpZnRZID8/IDAsXG4gICAgc2VlZDogZWZmZWN0LnNlZWQsXG4gICAgYWdlOiBNYXRoLm1pbihlZmZlY3QuYWdlLCBkdXJhdGlvbiksXG4gIH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlLCBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0cmFpdFZpZXdwb3J0UG9saWN5IHtcbiAgYXNwZWN0V2lkdGg6IG51bWJlcjtcbiAgYXNwZWN0SGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclZpZXdwb3J0UG9saWN5IGV4dGVuZHMgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIHJlYWRvbmx5IG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCI7XG4gIHJlYWRvbmx5IGxvZ2ljYWxXaWR0aDogbnVtYmVyO1xuICByZWFkb25seSBsb2dpY2FsSGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyVmlld3BvcnQ6IExhbmVSdW5uZXJWaWV3cG9ydFBvbGljeSA9IHtcbiAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcbiAgYXNwZWN0V2lkdGg6IDksXG4gIGFzcGVjdEhlaWdodDogMTYsXG4gIGxvZ2ljYWxXaWR0aDogNDUwLFxuICBsb2dpY2FsSGVpZ2h0OiA4MDAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RlZFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBsYXllclk6IG51bWJlcjtcbiAgZm9jdXNYPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCh3aWR0aDogbnVtYmVyLCB0YXJnZXRYOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuICByZXR1cm4gY2VudGVyWCArICh0YXJnZXRYIC0gY2VudGVyWCkgKiAuNTU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBvcnRyYWl0U3RhZ2Uoc3RhZ2U6IEhUTUxFbGVtZW50LCBwb2xpY3k6IFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kpOiB2b2lkIHtcbiAgc3RhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCItLXN0YWdlLWFzcGVjdFwiLCBgJHtwb2xpY3kuYXNwZWN0V2lkdGh9IC8gJHtwb2xpY3kuYXNwZWN0SGVpZ2h0fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhZ2VOb3JtYWxpemVkWChzdGFnZTogSFRNTEVsZW1lbnQsIGNsaWVudFg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGJvdW5kcyA9IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGNsaWVudFggLSBib3VuZHMubGVmdCkgLyBib3VuZHMud2lkdGgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyA9IHtcbiAgaGVpZ2h0OiA2NSxcbiAgbG9va0FuZ2xlRGVncmVlczogMjcsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyMCxcbiAgem9vbTogLjIsXG4gIGhvcml6b246IC41MSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclNjZW5lKFxuICBwcmltaXRpdmVzOiByZWFkb25seSBOZW9uUHJpbWl0aXZlW10sXG4gIHNoYXBlczogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdLFxuICBjbG91ZHM6IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogUHJvamVjdGVkU2NlbmUge1xuICBjb25zdCBwcm9qZWN0UG9pbnQgPSBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpO1xuXG4gIGNvbnN0IHByb2plY3RlZFByaW1pdGl2ZXMgPSBwcmltaXRpdmVzLm1hcChwcmltaXRpdmUgPT4ge1xuICAgIGlmIChwcmltaXRpdmUuc2hhcGUgPT09IFwibGluZVwiKSB7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IHByaW1pdGl2ZS5yb3RhdGlvbiA/PyAwO1xuICAgICAgY29uc3QgaGFsZkxlbmd0aCA9IHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWCA9IC1NYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICBjb25zdCBkaXJlY3Rpb25ZID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgY29uc3Qgc3RhcnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggLSBkaXJlY3Rpb25YICogaGFsZkxlbmd0aCwgcHJpbWl0aXZlLnkgLSBkaXJlY3Rpb25ZICogaGFsZkxlbmd0aCk7XG4gICAgICBjb25zdCBlbmQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggKyBkaXJlY3Rpb25YICogaGFsZkxlbmd0aCwgcHJpbWl0aXZlLnkgKyBkaXJlY3Rpb25ZICogaGFsZkxlbmd0aCk7XG4gICAgICBjb25zdCBkeCA9IGVuZC54IC0gc3RhcnQueDtcbiAgICAgIGNvbnN0IGR5ID0gZW5kLnkgLSBzdGFydC55O1xuICAgICAgY29uc3Qgc2NhbGUgPSAoc3RhcnQuc2NhbGUgKyBlbmQuc2NhbGUpICogLjU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmltaXRpdmUsXG4gICAgICAgIHg6IChzdGFydC54ICsgZW5kLngpIC8gMixcbiAgICAgICAgeTogKHN0YXJ0LnkgKyBlbmQueSkgLyAyLFxuICAgICAgICB3aWR0aDogcHJpbWl0aXZlLndpZHRoICogc2NhbGUsXG4gICAgICAgIGhlaWdodDogTWF0aC5oeXBvdChkeCwgZHkpIC8gMixcbiAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54LCBwcmltaXRpdmUueSk7XG4gICAgY29uc3Qgd2lkdGggPSBwcmltaXRpdmUud2lkdGggKiBwb2ludC5zY2FsZTtcbiAgICBjb25zdCBoZWlnaHQgPSAocHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGgpICogcG9pbnQuc2NhbGU7XG4gICAgbGV0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uO1xuICAgIGlmIChyb3RhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBheGlzTGVuZ3RoID0gTWF0aC5tYXgocHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGgsIHByaW1pdGl2ZS53aWR0aCwgMSk7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBlbmQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggKyBkaXJlY3Rpb25YICogYXhpc0xlbmd0aCwgcHJpbWl0aXZlLnkgKyBkaXJlY3Rpb25ZICogYXhpc0xlbmd0aCk7XG4gICAgICByb3RhdGlvbiA9IE1hdGguYXRhbjIocG9pbnQueCAtIGVuZC54LCBlbmQueSAtIHBvaW50LnkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJpbWl0aXZlLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJvdGF0aW9uLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RlZFNoYXBlcyA9IHNoYXBlc1xuICAgIC5tYXAoc2hhcGUgPT4ge1xuICAgICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zaGFwZSxcbiAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgc2l6ZTogc2hhcGUuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgICAgICB6OiAoc2hhcGUueiA/PyAwKSAtIHBvaW50LmRlcHRoICogLjAwMDgsXG4gICAgICB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi56ID8/IDApIC0gKGEueiA/PyAwKSkpO1xuXG4gIGNvbnN0IHByb2plY3RlZENsb3VkcyA9IGNsb3Vkcy5tYXAoY2xvdWQgPT4ge1xuICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KGNsb3VkLngsIGNsb3VkLnkpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXM6IHByb2plY3RlZFByaW1pdGl2ZXMsIGNsb3VkczogcHJvamVjdGVkQ2xvdWRzLCBzaGFwZXM6IHByb2plY3RlZFNoYXBlcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJQb2ludChcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0ge1xuICByZXR1cm4gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3MsIHZpZXdwb3J0KSh4LCB5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucHJvamVjdEhlbGljb3B0ZXJTY3JlZW5Qb2ludChcbiAgc2NyZWVuWDogbnVtYmVyLFxuICBzY3JlZW5ZOiBudW1iZXIsXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICBjb25zdCBmYWxsYmFjayA9IHsgeDogc2NyZWVuWCwgeTogc2NyZWVuWSB9O1xuICBjb25zdCBjZW50ZXJYID0gdmlld3BvcnQud2lkdGggLyAyO1xuICBjb25zdCBmb2N1c1ggPSB2aWV3cG9ydC5mb2N1c1ggPz8gY2VudGVyWDtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICBjb25zdCBzY3JlZW5SYXRpbyA9IChob3Jpem9uWSAtIHNjcmVlblkpIC8gZm9jYWxMZW5ndGg7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gc2luIC0gc2NyZWVuUmF0aW8gKiBjb3M7XG4gIGlmIChNYXRoLmFicyhkZW5vbWluYXRvcikgPCAuMDAwMSkgcmV0dXJuIGZhbGxiYWNrO1xuICBjb25zdCB3b3JsZFogPSAtcmVsYXRpdmVZICogKGNvcyArIHNjcmVlblJhdGlvICogc2luKSAvIGRlbm9taW5hdG9yO1xuICBjb25zdCBjYW1lcmFaID0gTWF0aC5tYXgoMjAsIHdvcmxkWiAqIGNvcyAtIHJlbGF0aXZlWSAqIHNpbik7XG4gIGNvbnN0IHNjYWxlID0gZm9jYWxMZW5ndGggLyBjYW1lcmFaO1xuICBjb25zdCBwb2ludCA9IHtcbiAgICB4OiBmb2N1c1ggKyAoc2NyZWVuWCAtIGNlbnRlclgpIC8gc2NhbGUsXG4gICAgeTogdmlld3BvcnQucGxheWVyWSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlIC0gd29ybGRaLFxuICB9O1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHBvaW50LngpICYmIE51bWJlci5pc0Zpbml0ZShwb2ludC55KSAmJiBNYXRoLmFicyhwb2ludC54KSA8IDUwMDAgJiYgTWF0aC5hYnMocG9pbnQueSkgPCA1MDAwXG4gICAgPyBwb2ludFxuICAgIDogZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQpIHtcbiAgY29uc3QgY2VudGVyWCA9IHZpZXdwb3J0LndpZHRoIC8gMjtcbiAgY29uc3QgZm9jdXNYID0gdmlld3BvcnQuZm9jdXNYID8/IGNlbnRlclg7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgbWluRGVwdGggPSAyMDtcblxuICByZXR1cm4gKHg6IG51bWJlciwgeTogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgZGVwdGg6IG51bWJlciB9ID0+IHtcbiAgICBjb25zdCB3b3JsZFggPSB4IC0gZm9jdXNYO1xuICAgIGNvbnN0IHdvcmxkWiA9IHZpZXdwb3J0LnBsYXllclkgLSB5ICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2U7XG4gICAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgICBjb25zdCBjYW1lcmFZID0gcmVsYXRpdmVZICogY29zICsgd29ybGRaICogc2luO1xuICAgIGNvbnN0IGNhbWVyYVogPSBNYXRoLm1heChtaW5EZXB0aCwgd29ybGRaICogY29zIC0gcmVsYXRpdmVZICogc2luKTtcbiAgICBjb25zdCBzY2FsZSA9IGZvY2FsTGVuZ3RoIC8gY2FtZXJhWjtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY2VudGVyWCArIHdvcmxkWCAqIHNjYWxlLFxuICAgICAgeTogaG9yaXpvblkgLSBjYW1lcmFZICogc2NhbGUsXG4gICAgICBzY2FsZSxcbiAgICAgIGRlcHRoOiBjYW1lcmFaLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3JsZFlGb3JQcm9qZWN0ZWRZKFxuICBzY3JlZW5ZOiBudW1iZXIsXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiB7IGhlaWdodDogbnVtYmVyOyBwbGF5ZXJZOiBudW1iZXIgfSxcbik6IG51bWJlciB7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgY29uc3Qgc2NyZWVuUmF0aW8gPSAoaG9yaXpvblkgLSBzY3JlZW5ZKSAvIGZvY2FsTGVuZ3RoO1xuICBjb25zdCBkZW5vbWluYXRvciA9IHNpbiAtIHNjcmVlblJhdGlvICogY29zO1xuICBpZiAoTWF0aC5hYnMoZGVub21pbmF0b3IpIDwgLjAwMDEpIHJldHVybiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgY29uc3Qgd29ybGRaID0gLXJlbGF0aXZlWSAqIChjb3MgKyBzY3JlZW5SYXRpbyAqIHNpbikgLyBkZW5vbWluYXRvcjtcbiAgcmV0dXJuIHZpZXdwb3J0LnBsYXllclkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZSAtIHdvcmxkWjtcbn1cbiIsICJpbXBvcnQge1xuICBnZXROZW9uU2hhcGUsXG4gIE5lb25TaGFwZUFjdG9yLFxuICBOZW9uU2hhcGVEaXNwb3NhbCxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQsIHR5cGUgT3JiTWVtYmVyIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcbmltcG9ydCB7IGVuZW15RW50cmFuY2VQcm9maWxlcyB9IGZyb20gXCIuL2VuZW15RW50cmFuY2VWaXN1YWxzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbmVteUV4aXRFZmZlY3QsIHR5cGUgQWN0aXZlRW5lbXlFeGl0RWZmZWN0IH0gZnJvbSBcIi4vZW5lbXlFeGl0VmlzdWFsc1wiO1xuaW1wb3J0IHsgcHJvamVjdEhlbGljb3B0ZXJQb2ludCwgdHlwZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIHR5cGUgSGVsaWNvcHRlclZpZXdwb3J0IH0gZnJvbSBcIi4vdmlld3BvcnRcIjtcblxuZXhwb3J0IHR5cGUgRW5lbXlUcmFja0lkID0gYGVuZW15LiR7c3RyaW5nfWA7XG5cbmV4cG9ydCBjb25zdCBlbmVteVRyYWNrSWQgPSAoZW5lbXlJZDogT3JiSWQpOiBFbmVteVRyYWNrSWQgPT5cbiAgZW5lbXlJZCA9PT0gXCJiYXNpY09yYlwiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7ZW5lbXlJZH1gO1xuXG5leHBvcnQgY29uc3QgZW5lbXlJZEZyb21UcmFja0lkID0gKGlkOiBzdHJpbmcpOiBPcmJJZCB8IG51bGwgPT4ge1xuICBpZiAoaWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY2FuZGlkYXRlID0gaWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xuICByZXR1cm4gY2FuZGlkYXRlIGluIG9yYkZhbWlseS5tZW1iZXJzID8gY2FuZGlkYXRlIGFzIE9yYklkIDogbnVsbDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZChpZDogc3RyaW5nKTogeyBlbmVteUlkOiBPcmJJZDsgZGVmaW5pdGlvbjogT3JiTWVtYmVyIH0gfCBudWxsIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15SWRGcm9tVHJhY2tJZChpZCk7XG4gIHJldHVybiBlbmVteUlkID8geyBlbmVteUlkLCBkZWZpbml0aW9uOiBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkXSB9IDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15QWN0b3IoZW5lbXlJZDogT3JiSWQpOiBOZW9uU2hhcGVBY3RvciB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkXTtcbiAgY29uc3Qgc2hhcGUgPSBnZXROZW9uU2hhcGUoZGVmaW5pdGlvbi5zaGFwZUlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBFbmVteSBcIiR7ZW5lbXlJZH1cIiB1c2VzIG1pc3NpbmcgTmVvbkZhY3Rvcnkgc2hhcGUgXCIke2RlZmluaXRpb24uc2hhcGVJZH1cIi5gKTtcbiAgY29uc3QgZW50cmFuY2UgPSBlbmVteUVudHJhbmNlUHJvZmlsZXNbZW5lbXlJZF07XG4gIGNvbnN0IGFjdG9yID0gbmV3IE5lb25TaGFwZUFjdG9yKHtcbiAgICBzaGFwZSxcbiAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5iYXNlQ29sb3JdLFxuICAgIGVudHJhbmNlRHVyYXRpb246IGVudHJhbmNlLmR1cmF0aW9uU2Vjb25kcyxcbiAgICBlbnRyYW5jZU1hZ25pdHVkZTogZW50cmFuY2Uuc2NhdHRlck1hZ25pdHVkZSxcbiAgfSk7XG4gIHJldHVybiBhY3Rvci5lbnRlcihlbnRyYW5jZS5kdXJhdGlvblNlY29uZHMsIGVudHJhbmNlLnNjYXR0ZXJNYWduaXR1ZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5lbXlEZWF0aEVmZmVjdChvcHRpb25zOiB7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZD86IG51bWJlcjtcbn0pOiBBY3RpdmVFbmVteUV4aXRFZmZlY3QgfCBudWxsIHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW29wdGlvbnMuZW5lbXlJZF07XG4gIGlmIChkZWZpbml0aW9uLmRlYXRoVmlzdWFsICE9PSBcImNsb3VkXCIpIHJldHVybiBudWxsO1xuICByZXR1cm4gY3JlYXRlRW5lbXlFeGl0RWZmZWN0KHtcbiAgICBlbmVteVR5cGU6IG9wdGlvbnMuZW5lbXlJZCxcbiAgICB4OiBvcHRpb25zLngsXG4gICAgeTogb3B0aW9ucy55LFxuICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yLFxuICAgIHNlZWQ6IG9wdGlvbnMuc2VlZCxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwb3NlRW5lbXlBY3RvcihhY3RvcjogTmVvblNoYXBlQWN0b3IsIGRlZmluaXRpb246IE9yYk1lbWJlcik6IHZvaWQge1xuICBhY3Rvci5leHBsb2RlTWFnbml0dWRlID0gZGVmaW5pdGlvbi5leHBsb3Npb25NYWduaXR1ZGU7XG4gIGFjdG9yLmRpc3Bvc2UoTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFtYWdlYWJsZUVuZW15IHtcbiAgaWQ6IG51bWJlcjtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xuICBkeWluZzogYm9vbGVhbjtcbiAgaGl0Rmxhc2hVbnRpbD86IG51bWJlcjtcbiAgZXhpdEVmZmVjdFNwYXduZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmZWF0RW5lbXkoXG4gIGVuZW15OiBEYW1hZ2VhYmxlRW5lbXksXG4gIGVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdLFxuICBjb2xvcjogc3RyaW5nID0gbmVvblBhbGV0dGVbb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF0uYmFzZUNvbG9yXSxcbik6IE9yYk1lbWJlciB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXTtcbiAgZW5lbXkuZHlpbmcgPSB0cnVlO1xuICBpZiAoIWVuZW15LmV4aXRFZmZlY3RTcGF3bmVkKSB7XG4gICAgZW5lbXkuZXhpdEVmZmVjdFNwYXduZWQgPSB0cnVlO1xuICAgIGNvbnN0IGVmZmVjdCA9IGNyZWF0ZUVuZW15RGVhdGhFZmZlY3Qoe1xuICAgICAgZW5lbXlJZDogZW5lbXkuZW5lbXlJZCxcbiAgICAgIHg6IGVuZW15LngsXG4gICAgICB5OiBlbmVteS55LFxuICAgICAgY29sb3IsXG4gICAgICBzZWVkOiBlbmVteS5pZCxcbiAgICB9KTtcbiAgICBpZiAoZWZmZWN0KSBlZmZlY3RzLnB1c2goZWZmZWN0KTtcbiAgfVxuICBkaXNwb3NlRW5lbXlBY3RvcihlbmVteS5hY3RvciwgZGVmaW5pdGlvbik7XG4gIHJldHVybiBkZWZpbml0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUVuZW15RGFtYWdlKG9wdGlvbnM6IHtcbiAgZW5lbXk6IERhbWFnZWFibGVFbmVteTtcbiAgZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W107XG4gIGRhbWFnZT86IG51bWJlcjtcbiAgaW1wYWN0TWFnbml0dWRlPzogbnVtYmVyO1xuICBoaXRGbGFzaFVudGlsPzogbnVtYmVyO1xuICBjb2xvcj86IHN0cmluZztcbn0pOiB7IGtpbGxlZDogYm9vbGVhbjsgZGVmaW5pdGlvbjogT3JiTWVtYmVyIH0ge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbb3B0aW9ucy5lbmVteS5lbmVteUlkXTtcbiAgaWYgKG9wdGlvbnMuZGFtYWdlKSBvcHRpb25zLmVuZW15LmhlYWx0aCAtPSBvcHRpb25zLmRhbWFnZTtcbiAgaWYgKG9wdGlvbnMuaW1wYWN0TWFnbml0dWRlKSB7XG4gICAgb3B0aW9ucy5lbmVteS5hY3Rvci5pbXBhY3Qoe1xuICAgICAgZGlyZWN0aW9uOiB7IHg6IDAsIHk6IDEgfSxcbiAgICAgIG1hZ25pdHVkZTogb3B0aW9ucy5pbXBhY3RNYWduaXR1ZGUgLyBkZWZpbml0aW9uLmltcGFjdFJlc2lzdGFuY2UsXG4gICAgfSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGl0Rmxhc2hVbnRpbCAhPT0gdW5kZWZpbmVkKSBvcHRpb25zLmVuZW15LmhpdEZsYXNoVW50aWwgPSBvcHRpb25zLmhpdEZsYXNoVW50aWw7XG4gIGlmIChvcHRpb25zLmVuZW15LmhlYWx0aCA8PSAwKSB7XG4gICAgcmV0dXJuIHsga2lsbGVkOiB0cnVlLCBkZWZpbml0aW9uOiBkZWZlYXRFbmVteShvcHRpb25zLmVuZW15LCBvcHRpb25zLmVmZmVjdHMsIG9wdGlvbnMuY29sb3IpIH07XG4gIH1cbiAgcmV0dXJuIHsga2lsbGVkOiBmYWxzZSwgZGVmaW5pdGlvbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKG9wdGlvbnM6IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBtYXhIZWFsdGg6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdmlzaWJsZVRocmVzaG9sZD86IG51bWJlcjtcbn0pOiBOZW9uUHJpbWl0aXZlW10ge1xuICBjb25zdCB0aHJlc2hvbGQgPSBvcHRpb25zLnZpc2libGVUaHJlc2hvbGQgPz8gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmIuaGVhbHRoO1xuICBpZiAob3B0aW9ucy5tYXhIZWFsdGggPD0gdGhyZXNob2xkKSByZXR1cm4gW107XG4gIGNvbnN0IHJhdGlvID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb3B0aW9ucy5oZWFsdGggLyBvcHRpb25zLm1heEhlYWx0aCkpO1xuICBjb25zdCB5ID0gb3B0aW9ucy55O1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDM2LCBvcHRpb25zLndpZHRoKTtcbiAgY29uc3QgbGVmdCA9IG9wdGlvbnMueCAtIHdpZHRoIC8gMjtcbiAgY29uc3QgZmlsbGVkID0gTWF0aC5tYXgoMCwgd2lkdGggKiByYXRpbyk7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgeDogb3B0aW9ucy54LFxuICAgICAgeSxcbiAgICAgIHdpZHRoOiA4LjgsXG4gICAgICBoZWlnaHQ6IHdpZHRoIC8gMixcbiAgICAgIGNvbG9yOiBcIiMxNjA4MTdcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiMxNjA4MTdcIixcbiAgICAgIGdsb3c6IC4wOCxcbiAgICAgIGludGVuc2l0eTogLjQyLFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IE1hdGguUEkgLyAyLFxuICAgIH0sXG4gICAge1xuICAgICAgeDogbGVmdCArIGZpbGxlZCAvIDIsXG4gICAgICB5LFxuICAgICAgd2lkdGg6IDcuMixcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoMSwgZmlsbGVkKSAvIDIsXG4gICAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS53aGl0ZUhvdCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogLjc4LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IE1hdGguUEkgLyAyLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5lbXlIZWFsdGhCYXJUYXJnZXQge1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBtYXhIZWFsdGg6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhcbiAgdGFyZ2V0czogcmVhZG9ubHkgRW5lbXlIZWFsdGhCYXJUYXJnZXRbXSxcbiAgY2FtZXJhU2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IE5lb25QcmltaXRpdmVbXSB7XG4gIHJldHVybiB0YXJnZXRzLmZsYXRNYXAodGFyZ2V0ID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbdGFyZ2V0LmVuZW15SWRdO1xuICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdEhlbGljb3B0ZXJQb2ludCh0YXJnZXQueCwgdGFyZ2V0LnksIGNhbWVyYVNldHRpbmdzLCB2aWV3cG9ydCk7XG4gICAgY29uc3QgcHJvamVjdGVkU2l6ZSA9IHRhcmdldC5zaXplICogcG9pbnQuc2NhbGU7XG4gICAgY29uc3Qgc2NhbGUgPSB0YXJnZXQuc2NhbGUgPz8gMTtcbiAgICByZXR1cm4gZW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55IC0gcHJvamVjdGVkU2l6ZSAqIC43MiAtIDEyLFxuICAgICAgd2lkdGg6IE1hdGgubWF4KHByb2plY3RlZFNpemUgKiAxLjM1LCBkZWZpbml0aW9uLnJhZGl1cyAqIDUuMiAqIHNjYWxlICogcG9pbnQuc2NhbGUpLFxuICAgICAgaGVhbHRoOiB0YXJnZXQuaGVhbHRoLFxuICAgICAgbWF4SGVhbHRoOiB0YXJnZXQubWF4SGVhbHRoLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxuICB0eXBlIE5lb25Ub3BEb3duU2hhcGUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBTaGllbGRNZW1iZXIsIFN3b3JkTWVtYmVyIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZlU2xhc2hBbmltYXRpb24gfSBmcm9tIFwiLi9jb21iYXQvc3dvcmRFdmFsdWF0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGYW1pbHlWaXN1YWxTY2VuZSB7XG4gIHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmNvbnN0IGVtcHR5U2NlbmUgPSAoKTogRmFtaWx5VmlzdWFsU2NlbmUgPT4gKHsgcHJpbWl0aXZlczogW10sIHNoYXBlczogW10gfSk7XG5jb25zdCByZXF1aXJlZFNoYXBlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2hhcGUgPSBnZXROZW9uU2hhcGUoaWQpO1xuICBpZiAoIXNoYXBlKSB0aHJvdyBuZXcgRXJyb3IoYE5lb25GYWN0b3J5IHNoYXBlIFwiJHtpZH1cIiBpcyByZXF1aXJlZCBieSBmYW1pbHkgdmlzdWFscy5gKTtcbiAgcmV0dXJuIHNoYXBlO1xufTtcbmNvbnN0IGlzU2FmZVNjZW5lUG9pbnQgPSAocG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IGJvb2xlYW4gPT5cbiAgTnVtYmVyLmlzRmluaXRlKHBvaW50LngpICYmIE51bWJlci5pc0Zpbml0ZShwb2ludC55KSAmJiBNYXRoLmFicyhwb2ludC54KSA8IDUwMDAgJiYgTWF0aC5hYnMocG9pbnQueSkgPCA1MDAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTaGllbGRNZW1iZXI7XG4gIHN0cmVuZ3RoOiBudW1iZXI7XG4gIGluaXRpYWxTdHJlbmd0aDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBwcm9qZWN0U2NyZWVuT2Zmc2V0PzogKHg6IG51bWJlciwgeTogbnVtYmVyLCBvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlcikgPT4geyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBoaXRQcm9ncmVzcz86IG51bWJlcjtcbiAgdmlzaWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGllbGRWaXN1YWxzKG9wdGlvbnM6IFNoaWVsZFZpc3VhbE9wdGlvbnMpOiBGYW1pbHlWaXN1YWxTY2VuZSB7XG4gIGNvbnN0IHNjZW5lID0gZW1wdHlTY2VuZSgpO1xuICBjb25zdCB7XG4gICAgZGVmaW5pdGlvbiwgeCwgeSwgbm93LFxuICAgIHNjYWxlID0gMSxcbiAgICBwcm9qZWN0U2NyZWVuT2Zmc2V0LFxuICAgIGhpdFByb2dyZXNzID0gMSxcbiAgICB2aXNpYmxlID0gdHJ1ZSxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0cmVuZ3RoID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5zdHJlbmd0aCk7XG4gIGNvbnN0IGluaXRpYWxTdHJlbmd0aCA9IE1hdGgubWF4KDEsIG9wdGlvbnMuaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgaW1wYWN0ID0gTWF0aC5tYXgoMCwgMSAtIGhpdFByb2dyZXNzKTtcbiAgY29uc3QgZXhwbG9kaW5nID0gc3RyZW5ndGggPD0gMCAmJiBoaXRQcm9ncmVzcyA8IDE7XG4gIGNvbnN0IGNvbG9yID0gbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl07XG4gIGNvbnN0IHJhZGl1cyA9IGRlZmluaXRpb24ucmFkaXVzICogc2NhbGU7XG5cbiAgaWYgKHZpc2libGUgfHwgZXhwbG9kaW5nKSB7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzaGllbGQtcmluZ1wiKSxcbiAgICAgIHgsIHksXG4gICAgICBzaXplOiByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEgKyBpbXBhY3QgKiAuOCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMTUgKyBpbXBhY3QgKiAxLjUsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQyICsgaW1wYWN0ICogLjMsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4xNSArIGltcGFjdCAqIDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiAuNSArIGltcGFjdCAqIC4zNSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogZXhwbG9kaW5nID8gTWF0aC5taW4oMSwgaGl0UHJvZ3Jlc3MpIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IC45LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IG9yYml0ZXJTaGFwZSA9IHJlcXVpcmVkU2hhcGUoZGVmaW5pdGlvbi5vcmJpdGVyU2hhcGUgPT09IFwiaGV4XCIgPyBcImhleC1maWdodGVyXCIgOiBcInN0YXItY29yZVwiKTtcbiAgY29uc3Qgb3JiaXRlckNvdW50ID0gTWF0aC5jZWlsKGRlZmluaXRpb24ub3JiaXRlckNvdW50ICogc3RyZW5ndGggLyBpbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJICogMiAvIGRlZmluaXRpb24ub3JiaXRlckNvdW50O1xuICBjb25zdCBiYXNlQW5nbGUgPSBub3cgLyAxMDAwICogZGVmaW5pdGlvbi5vcmJpdGVyU3BlZWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JiaXRlckNvdW50OyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9IGJhc2VBbmdsZSArIGkgKiBhbmdsZVN0ZXA7XG4gICAgY29uc3QgZmFsbGJhY2tPcmJpdGVyID0geyB4OiB4ICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCB5OiB5ICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzIH07XG4gICAgY29uc3QgcHJvamVjdGVkT3JiaXRlciA9IHByb2plY3RTY3JlZW5PZmZzZXQ/Lih4LCB5LCBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cyk7XG4gICAgY29uc3Qgb3JiaXRlciA9IHByb2plY3RlZE9yYml0ZXIgJiYgaXNTYWZlU2NlbmVQb2ludChwcm9qZWN0ZWRPcmJpdGVyKSA/IHByb2plY3RlZE9yYml0ZXIgOiBmYWxsYmFja09yYml0ZXI7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IG9yYml0ZXJTaGFwZSxcbiAgICAgIHg6IG9yYml0ZXIueCxcbiAgICAgIHk6IG9yYml0ZXIueSxcbiAgICAgIHNpemU6IGRlZmluaXRpb24ub3JiaXRlclNpemUgKiAxLjggKiBzY2FsZSxcbiAgICAgIGNvbG9yLFxuICAgICAgcm90YXRpb25aOiBhbmdsZSArIG5vdyAvIDE0MDAsXG4gICAgICBsaW5lVGhpY2tuZXNzOiAuNzIsXG4gICAgICBnbG93OiAxLFxuICAgICAgZW5lcmd5SW50ZW5zaXR5OiAxLjEsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4yNSxcbiAgICAgIGVuZXJneUJsZWVkOiAuNSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2NlbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRWaXN1YWxPcHRpb25zIHtcbiAgZGVmaW5pdGlvbjogU3dvcmRNZW1iZXI7XG4gIHNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG4gIHNsYXNoZXM/OiByZWFkb25seSAoQWN0aXZlU2xhc2hBbmltYXRpb24gfCBudWxsKVtdO1xuICBkb2NrU2lkZTogLTEgfCAxO1xuICBkb2NrU2lkZXM/OiByZWFkb25seSAoLTEgfCAxKVtdO1xuICBwb2ludHM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdO1xuICB0dW5pbmc/OiBQYXJ0aWFsPFN3b3JkVmlzdWFsVHVuaW5nPjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVmlzdWFsVHVuaW5nIHtcbiAgZG9ja1NpZGVPZmZzZXQ6IG51bWJlcjtcbiAgZG9ja0ZvcndhcmQ6IG51bWJlcjtcbiAgc3RyaWtlRHVyYXRpb246IG51bWJlcjtcbiAgZm9sbG93VGhyb3VnaER1cmF0aW9uOiBudW1iZXI7XG4gIHN3aW5nQW5nbGU6IG51bWJlcjtcbiAgYXJjTGlmdDogbnVtYmVyO1xuICBhcmNSYWRpdXM6IG51bWJlcjtcbiAgdHJhaWxTZWdtZW50czogbnVtYmVyO1xuICB0cmFpbFdpZHRoOiBudW1iZXI7XG4gIHRyYWlsSW50ZW5zaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3dvcmRWaXN1YWxUdW5pbmc6IFN3b3JkVmlzdWFsVHVuaW5nID0ge1xuICBkb2NrU2lkZU9mZnNldDogMTMsXG4gIGRvY2tGb3J3YXJkOiAzLFxuICBzdHJpa2VEdXJhdGlvbjogLjMxLFxuICBmb2xsb3dUaHJvdWdoRHVyYXRpb246IC4xOCxcbiAgc3dpbmdBbmdsZTogMi44LFxuICBhcmNMaWZ0OiAxNCxcbiAgYXJjUmFkaXVzOiA0MixcbiAgdHJhaWxTZWdtZW50czogMTQsXG4gIHRyYWlsV2lkdGg6IDIuNixcbiAgdHJhaWxJbnRlbnNpdHk6IC43NSxcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wbGV0ZVN3b3JkVmlzdWFsVHVuaW5nID0gKHR1bmluZz86IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+KTogU3dvcmRWaXN1YWxUdW5pbmcgPT4gKHtcbiAgLi4uZGVmYXVsdFN3b3JkVmlzdWFsVHVuaW5nLFxuICAuLi50dW5pbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkVmlzdWFsRHVyYXRpb25NcyA9ICh0dW5pbmc/OiBQYXJ0aWFsPFN3b3JkVmlzdWFsVHVuaW5nPik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHJlc29sdmVkID0gY29tcGxldGVTd29yZFZpc3VhbFR1bmluZyh0dW5pbmcpO1xuICByZXR1cm4gTWF0aC5tYXgoMTIwLCAocmVzb2x2ZWQuc3RyaWtlRHVyYXRpb24gKyByZXNvbHZlZC5mb2xsb3dUaHJvdWdoRHVyYXRpb24pICogMTAwMCk7XG59O1xuXG5mdW5jdGlvbiBxdWFkcmF0aWNQb2ludChmcm9tOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGNvbnRyb2w6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdG86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgY29uc3QgaW52ID0gMSAtIHQ7XG4gIHJldHVybiB7XG4gICAgeDogaW52ICogaW52ICogZnJvbS54ICsgMiAqIGludiAqIHQgKiBjb250cm9sLnggKyB0ICogdCAqIHRvLngsXG4gICAgeTogaW52ICogaW52ICogZnJvbS55ICsgMiAqIGludiAqIHQgKiBjb250cm9sLnkgKyB0ICogdCAqIHRvLnksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGN1YmljUG9pbnQoXG4gIGZyb206IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgY29udHJvbEE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgY29udHJvbEI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgdG86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgdDogbnVtYmVyLFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgY29uc3QgaW52ID0gMSAtIHQ7XG4gIHJldHVybiB7XG4gICAgeDogaW52ICoqIDMgKiBmcm9tLnggKyAzICogaW52ICogaW52ICogdCAqIGNvbnRyb2xBLnggKyAzICogaW52ICogdCAqIHQgKiBjb250cm9sQi54ICsgdCAqKiAzICogdG8ueCxcbiAgICB5OiBpbnYgKiogMyAqIGZyb20ueSArIDMgKiBpbnYgKiBpbnYgKiB0ICogY29udHJvbEEueSArIDMgKiBpbnYgKiB0ICogdCAqIGNvbnRyb2xCLnkgKyB0ICoqIDMgKiB0by55LFxuICB9O1xufVxuXG5mdW5jdGlvbiBzd29yZFBhdGgoXG4gIGJhc2U6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgdGFyZ2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIGRlc3RpbmF0aW9uU2lkZTogLTEgfCAxLFxuICBzY2FsZTogbnVtYmVyLFxuICB0dW5pbmc6IFN3b3JkVmlzdWFsVHVuaW5nLFxuICBjcm9zc0xhbmU6IGJvb2xlYW4sXG4gIHRhcmdldFNwYW46IG51bWJlcixcbikge1xuICBjb25zdCBzdGFydFNpZGU6IC0xIHwgMSA9IGRlc3RpbmF0aW9uU2lkZSA9PT0gMSA/IC0xIDogMTtcbiAgY29uc3Qgc3dlZXBXaWR0aCA9IGNyb3NzTGFuZSA/IHRhcmdldFNwYW4gKiAuMzQgOiAwO1xuICBjb25zdCBzdGFydCA9IHsgeDogYmFzZS54ICsgc3RhcnRTaWRlICogKHR1bmluZy5kb2NrU2lkZU9mZnNldCAqIHNjYWxlICsgc3dlZXBXaWR0aCksIHk6IGJhc2UueSAtIHR1bmluZy5kb2NrRm9yd2FyZCAqIHNjYWxlIH07XG4gIGNvbnN0IGZpbmlzaCA9IHsgeDogYmFzZS54ICsgZGVzdGluYXRpb25TaWRlICogKHR1bmluZy5kb2NrU2lkZU9mZnNldCAqIHNjYWxlICsgc3dlZXBXaWR0aCksIHk6IGJhc2UueSAtIHR1bmluZy5kb2NrRm9yd2FyZCAqIHNjYWxlIH07XG4gIGNvbnN0IHRhcmdldEluZmx1ZW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHR1bmluZy5hcmNSYWRpdXMgLyAxMDApKTtcbiAgY29uc3QgYXBleCA9IHtcbiAgICB4OiAoKHN0YXJ0LnggKyBmaW5pc2gueCkgLyAyICogKDEgLSB0YXJnZXRJbmZsdWVuY2UpICsgdGFyZ2V0LnggKiB0YXJnZXRJbmZsdWVuY2UpICsgZGVzdGluYXRpb25TaWRlICogKGNyb3NzTGFuZSA/IDEyICogc2NhbGUgOiAwKSxcbiAgICB5OiBNYXRoLm1pbihzdGFydC55LCBmaW5pc2gueSwgdGFyZ2V0LnkpIC0gdHVuaW5nLmFyY0xpZnQgKiBzY2FsZSxcbiAgfTtcbiAgY29uc3QgY29udHJvbEEgPSB7XG4gICAgeDogc3RhcnQueCArIHN0YXJ0U2lkZSAqIHR1bmluZy5zd2luZ0FuZ2xlICogKGNyb3NzTGFuZSA/IDE4IDogMTMpICogc2NhbGUsXG4gICAgeTogc3RhcnQueSArIDEwICogc2NhbGUsXG4gIH07XG4gIGNvbnN0IGNvbnRyb2xCID0ge1xuICAgIHg6IGFwZXgueCAtIGRlc3RpbmF0aW9uU2lkZSAqIHR1bmluZy5zd2luZ0FuZ2xlICogKGNyb3NzTGFuZSA/IDMwIDogMjIpICogc2NhbGUsXG4gICAgeTogYXBleC55LFxuICB9O1xuICByZXR1cm4geyBzdGFydCwgZmluaXNoLCBjb250cm9sQSwgY29udHJvbEIgfTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0U3Bhbih0YXJnZXRzOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSk6IG51bWJlciB7XG4gIGlmICh0YXJnZXRzLmxlbmd0aCA8IDIpIHJldHVybiAwO1xuICBjb25zdCB4cyA9IHRhcmdldHMubWFwKHRhcmdldCA9PiB0YXJnZXQueCk7XG4gIHJldHVybiBNYXRoLm1heCguLi54cykgLSBNYXRoLm1pbiguLi54cyk7XG59XG5cbmZ1bmN0aW9uIHN3ZWVwVGFyZ2V0Rm9yKHRhcmdldHM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdLCBzaWRlOiAtMSB8IDEsIGZhbGxiYWNrOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxKSByZXR1cm4gdGFyZ2V0c1swXTtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnRhcmdldHNdLnNvcnQoKGEsIGIpID0+IHNpZGUgPT09IDEgPyBhLnggLSBiLnggOiBiLnggLSBhLngpO1xuICBjb25zdCBmaXJzdCA9IHNvcnRlZFswXTtcbiAgY29uc3QgbGFzdCA9IHNvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHNwYW4gPSBNYXRoLmFicyhsYXN0LnggLSBmaXJzdC54KTtcbiAgcmV0dXJuIHtcbiAgICB4OiBsYXN0LnggKyBzaWRlICogTWF0aC5taW4oMzQsIE1hdGgubWF4KDE0LCBzcGFuICogLjEpKSxcbiAgICB5OiBNYXRoLm1pbiguLi5zb3J0ZWQubWFwKHRhcmdldCA9PiB0YXJnZXQueSksIChmaXJzdC55ICsgbGFzdC55KSAvIDIpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzbGFzaFBvc2UoXG4gIGJhc2U6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgdGFyZ2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIGRlc3RpbmF0aW9uU2lkZTogLTEgfCAxLFxuICBwcm9ncmVzczogbnVtYmVyLFxuICBzY2FsZTogbnVtYmVyLFxuICB0dW5pbmc6IFN3b3JkVmlzdWFsVHVuaW5nLFxuICBjcm9zc0xhbmU6IGJvb2xlYW4sXG4gIHNwYW46IG51bWJlcixcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHJvdGF0aW9uOiBudW1iZXI7IHRyYWlsUHJvZ3Jlc3M6IG51bWJlciB9IHtcbiAgY29uc3QgdG90YWxEdXJhdGlvbiA9IE1hdGgubWF4KC4wMSwgdHVuaW5nLnN0cmlrZUR1cmF0aW9uICsgdHVuaW5nLmZvbGxvd1Rocm91Z2hEdXJhdGlvbik7XG4gIGNvbnN0IHN0cmlrZSA9IHR1bmluZy5zdHJpa2VEdXJhdGlvbiAvIHRvdGFsRHVyYXRpb247XG4gIGNvbnN0IHBhdGggPSBzd29yZFBhdGgoYmFzZSwgdGFyZ2V0LCBkZXN0aW5hdGlvblNpZGUsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3Bhbik7XG4gIGNvbnN0IHRhbmdlbnRTYW1wbGUgPSAocGF0aFQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGEgPSBjdWJpY1BvaW50KHBhdGguc3RhcnQsIHBhdGguY29udHJvbEEsIHBhdGguY29udHJvbEIsIHBhdGguZmluaXNoLCBNYXRoLm1heCgwLCBwYXRoVCAtIC4wMTUpKTtcbiAgICBjb25zdCBiID0gY3ViaWNQb2ludChwYXRoLnN0YXJ0LCBwYXRoLmNvbnRyb2xBLCBwYXRoLmNvbnRyb2xCLCBwYXRoLmZpbmlzaCwgTWF0aC5taW4oMSwgcGF0aFQgKyAuMDE1KSk7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIoYi55IC0gYS55LCBiLnggLSBhLngpIC0gTWF0aC5QSSAvIDI7XG4gIH07XG5cbiAgaWYgKHByb2dyZXNzIDwgc3RyaWtlKSB7XG4gICAgY29uc3QgdCA9IHByb2dyZXNzIC8gc3RyaWtlO1xuICAgIGNvbnN0IGVhc2UgPSB0ICogdCAqICgzIC0gMiAqIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gY3ViaWNQb2ludChwYXRoLnN0YXJ0LCBwYXRoLmNvbnRyb2xBLCBwYXRoLmNvbnRyb2xCLCBwYXRoLmZpbmlzaCwgZWFzZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgcm90YXRpb246IHRhbmdlbnRTYW1wbGUoZWFzZSksXG4gICAgICB0cmFpbFByb2dyZXNzOiBlYXNlLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB0ID0gKHByb2dyZXNzIC0gc3RyaWtlKSAvIE1hdGgubWF4KC4wMDEsIDEgLSBzdHJpa2UpO1xuICBjb25zdCBlYXNlID0gdCAqIHQgKiAoMyAtIDIgKiB0KTtcbiAgY29uc3Qgb3ZlcnNob290ID0ge1xuICAgIHg6IHBhdGguZmluaXNoLnggKyBkZXN0aW5hdGlvblNpZGUgKiA3ICogc2NhbGUsXG4gICAgeTogcGF0aC5maW5pc2gueSAtIDQgKiBzY2FsZSxcbiAgfTtcbiAgY29uc3QgcG9pbnQgPSBxdWFkcmF0aWNQb2ludChwYXRoLmZpbmlzaCwgb3ZlcnNob290LCBwYXRoLmZpbmlzaCwgZWFzZSk7XG4gIHJldHVybiB7XG4gICAgeDogcG9pbnQueCxcbiAgICB5OiBwb2ludC55LFxuICAgIHJvdGF0aW9uOiB0YW5nZW50U2FtcGxlKDEpIC0gZGVzdGluYXRpb25TaWRlICogKDEgLSBlYXNlKSAqIC4zNSxcbiAgICB0cmFpbFByb2dyZXNzOiAxLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzd29yZFRyYWlsKHNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiwgc2NhbGU6IG51bWJlciwgb3JpZ2luczogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIHR1bmluZzogU3dvcmRWaXN1YWxUdW5pbmcpOiBOZW9uUHJpbWl0aXZlW10ge1xuICBpZiAoc2xhc2gucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFtdO1xuICBjb25zdCBsaWZlID0gMSAtIHNsYXNoLnByb2dyZXNzO1xuICBjb25zdCB0aGlja25lc3MgPSBzbGFzaC50aGlja25lc3MgKiBzY2FsZTtcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IHRhcmdldHMgPSBzbGFzaC50YXJnZXRQb2ludHMubGVuZ3RoID4gMCA/IHNsYXNoLnRhcmdldFBvaW50cyA6IFt7IHg6IHNsYXNoLngsIHk6IHNsYXNoLnkgLSBzbGFzaC5yZWFjaCB9XTtcbiAgY29uc3Qgc3BhbiA9IHRhcmdldFNwYW4odGFyZ2V0cyk7XG4gIGNvbnN0IGNyb3NzTGFuZSA9IHNwYW4gPiA4MCAqIHNjYWxlO1xuICBjb25zdCBzd2VlcFRhcmdldCA9IHN3ZWVwVGFyZ2V0Rm9yKHRhcmdldHMsIHNsYXNoLnNpZGUsIHRhcmdldHNbMF0pO1xuICBmb3IgKGNvbnN0IFtpbmRleCwgb3JpZ2luXSBvZiBvcmlnaW5zLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldHMubGVuZ3RoID4gMSA/IHN3ZWVwVGFyZ2V0IDogdGFyZ2V0c1tpbmRleCAlIHRhcmdldHMubGVuZ3RoXTtcbiAgICBjb25zdCBzZWdtZW50cyA9IHR1bmluZy50cmFpbFNlZ21lbnRzO1xuICAgIGNvbnN0IHBvc2UgPSBzbGFzaFBvc2Uob3JpZ2luLCB0YXJnZXQsIHNsYXNoLnNpZGUsIHNsYXNoLnByb2dyZXNzLCBzY2FsZSwgdHVuaW5nLCBjcm9zc0xhbmUsIHNwYW4pO1xuICAgIGNvbnN0IHRyYXZlbCA9IHBvc2UudHJhaWxQcm9ncmVzcztcbiAgICBpZiAodHJhdmVsIDw9IDApIGNvbnRpbnVlO1xuICAgIGNvbnN0IHZpc2libGVTZWdtZW50cyA9IE1hdGgubWF4KDMsIE1hdGguY2VpbChzZWdtZW50cyAqIHRyYXZlbCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlzaWJsZVNlZ21lbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHQwID0gTWF0aC5tYXgoMCwgdHJhdmVsIC0gKHZpc2libGVTZWdtZW50cyAtIGkpIC8gc2VnbWVudHMpO1xuICAgICAgY29uc3QgdDEgPSBNYXRoLm1pbigxLCB0MCArIC4xNik7XG4gICAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gdHVuaW5nLnN0cmlrZUR1cmF0aW9uICsgdHVuaW5nLmZvbGxvd1Rocm91Z2hEdXJhdGlvbjtcbiAgICAgIGNvbnN0IHN0cmlrZSA9IHR1bmluZy5zdHJpa2VEdXJhdGlvbiAvIHRvdGFsRHVyYXRpb247XG4gICAgICBjb25zdCBhID0gc2xhc2hQb3NlKG9yaWdpbiwgdGFyZ2V0LCBzbGFzaC5zaWRlLCB0MCAqIHN0cmlrZSwgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKTtcbiAgICAgIGNvbnN0IGIgPSBzbGFzaFBvc2Uob3JpZ2luLCB0YXJnZXQsIHNsYXNoLnNpZGUsIHQxICogc3RyaWtlLCBzY2FsZSwgdHVuaW5nLCBjcm9zc0xhbmUsIHNwYW4pO1xuICAgICAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gICAgICBjb25zdCBkeSA9IGIueSAtIGEueTtcbiAgICAgIGNvbnN0IGFnZSA9IGkgLyB2aXNpYmxlU2VnbWVudHM7XG4gICAgICBjb25zdCBmYWRlID0gTWF0aC5tYXgoLjE4LCBNYXRoLnBvdygxIC0gYWdlLCAuODUpKSAqIE1hdGgubWluKDEsIGxpZmUgKyAuMzUpO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgICAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBNYXRoLm1heCgxLjYsIHRoaWNrbmVzcyAqICh0dW5pbmcudHJhaWxXaWR0aCAtIGFnZSAqIHR1bmluZy50cmFpbFdpZHRoICogLjQ4KSksXG4gICAgICAgIGhlaWdodDogTWF0aC5oeXBvdChkeCwgZHkpIC8gMixcbiAgICAgICAgY29sb3I6IHNsYXNoLmNvbG9yLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGdsb3c6IDEuOCAqIGZhZGUsXG4gICAgICAgIGludGVuc2l0eTogdHVuaW5nLnRyYWlsSW50ZW5zaXR5ICogZmFkZSxcbiAgICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH0pO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgICAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBNYXRoLm1heCgyLjIsIHRoaWNrbmVzcyAqICh0dW5pbmcudHJhaWxXaWR0aCAqIDEuMzUgLSBhZ2UgKiB0dW5pbmcudHJhaWxXaWR0aCAqIC41NSkpLFxuICAgICAgICBoZWlnaHQ6IE1hdGguaHlwb3QoZHgsIGR5KSAqIC43MixcbiAgICAgICAgY29sb3I6IHNsYXNoLmNvbG9yLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGdsb3c6IDEuNiAqIGZhZGUsXG4gICAgICAgIGludGVuc2l0eTogdHVuaW5nLnRyYWlsSW50ZW5zaXR5ICogZmFkZSxcbiAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJpbWl0aXZlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3b3JkVmlzdWFscyhvcHRpb25zOiBTd29yZFZpc3VhbE9wdGlvbnMpOiBGYW1pbHlWaXN1YWxTY2VuZSB7XG4gIGNvbnN0IHNjZW5lID0gZW1wdHlTY2VuZSgpO1xuICBpZiAoIW9wdGlvbnMudmlzaWJsZSkgcmV0dXJuIHNjZW5lO1xuICBjb25zdCB7IGRlZmluaXRpb24sIHNsYXNoLCBwb2ludHMsIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgY29uc3QgdHVuaW5nID0gY29tcGxldGVTd29yZFZpc3VhbFR1bmluZyhvcHRpb25zLnR1bmluZyk7XG4gIGNvbnN0IHNsYXNoZXMgPSBvcHRpb25zLnNsYXNoZXMgPz8gW3NsYXNoXTtcbiAgZm9yIChjb25zdCBbaW5kZXgsIHBvaW50XSBvZiBwb2ludHMuZW50cmllcygpKSB7XG4gICAgY29uc3Qgc2xvdFNsYXNoID0gc2xhc2hlc1tpbmRleF0gPz8gbnVsbDtcbiAgICBjb25zdCBkb2NrU2lkZSA9IHNsb3RTbGFzaD8uc2lkZSA/PyBvcHRpb25zLmRvY2tTaWRlcz8uW2luZGV4XSA/PyBvcHRpb25zLmRvY2tTaWRlO1xuICAgIGNvbnN0IHRhcmdldHMgPSBzbG90U2xhc2g/LnRhcmdldFBvaW50cyA/PyBbXTtcbiAgICBjb25zdCBzcGFuID0gdGFyZ2V0U3Bhbih0YXJnZXRzKTtcbiAgICBjb25zdCBjcm9zc0xhbmUgPSBzcGFuID4gODAgKiBzY2FsZTtcbiAgICBjb25zdCBzd2VlcFRhcmdldCA9IHNsb3RTbGFzaCA/IHN3ZWVwVGFyZ2V0Rm9yKHRhcmdldHMsIGRvY2tTaWRlLCB7IHg6IHBvaW50LngsIHk6IHBvaW50LnkgLSAzMCAqIHNjYWxlIH0pIDogbnVsbDtcbiAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRzLmxlbmd0aCA+IDEgPyBzd2VlcFRhcmdldCA6IHRhcmdldHNbaW5kZXggJSBNYXRoLm1heCgxLCB0YXJnZXRzLmxlbmd0aCldO1xuICAgIGNvbnN0IHJlc3QgPSB7IHg6IHBvaW50LnggKyBkb2NrU2lkZSAqIHR1bmluZy5kb2NrU2lkZU9mZnNldCAqIHNjYWxlLCB5OiBwb2ludC55IC0gdHVuaW5nLmRvY2tGb3J3YXJkICogc2NhbGUgfTtcbiAgICBjb25zdCBjdXJyZW50ID0gc2xvdFNsYXNoICYmIHRhcmdldCA/IHNsYXNoUG9zZShwb2ludCwgdGFyZ2V0LCBkb2NrU2lkZSwgc2xvdFNsYXNoLnByb2dyZXNzLCBzY2FsZSwgdHVuaW5nLCBjcm9zc0xhbmUsIHNwYW4pIDoge1xuICAgICAgeDogcmVzdC54LFxuICAgICAgeTogcmVzdC55LFxuICAgICAgcm90YXRpb246IC1kb2NrU2lkZSAqIC45NSxcbiAgICAgIHRyYWlsUHJvZ3Jlc3M6IDAsXG4gICAgfTtcbiAgICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgICBzaGFwZTogcmVxdWlyZWRTaGFwZShcInN3b3JkLW5lZWRsZS1zYWJyZVwiKSxcbiAgICAgIHg6IGN1cnJlbnQueCxcbiAgICAgIHk6IGN1cnJlbnQueSxcbiAgICAgIHo6IC4wMiArIGluZGV4ICogLjAwMSxcbiAgICAgIHNpemU6IE1hdGgubWluKDIzLCBkZWZpbml0aW9uLnJhbmdlICogLjM0KSAqIHNjYWxlLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgICAgcm90YXRpb25YOiA3NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICByb3RhdGlvblk6IDEzICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIHJvdGF0aW9uWjogMTUgKiBNYXRoLlBJIC8gMTgwICsgY3VycmVudC5yb3RhdGlvbixcbiAgICAgIGxpbmVUaGlja25lc3M6IC45MixcbiAgICAgIGdsb3c6IHNsb3RTbGFzaCA/IDEuNjUgOiAxLjA4LFxuICAgICAgZW5lcmd5SW50ZW5zaXR5OiBzbG90U2xhc2ggPyAyLjI1IDogMS4yLFxuICAgICAgZW5lcmd5Q292ZXJhZ2U6IHNsb3RTbGFzaCA/IC43MiA6IC40MixcbiAgICAgIGVuZXJneVNwZWVkOiBzbG90U2xhc2ggPyAyLjEgOiAxLjIsXG4gICAgICBlbmVyZ3lCbGVlZDogc2xvdFNsYXNoID8gLjggOiAuNSxcbiAgICB9KTtcbiAgfVxuICBmb3IgKGNvbnN0IFtpbmRleCwgc2xvdFNsYXNoXSBvZiBzbGFzaGVzLmVudHJpZXMoKSkge1xuICAgIGlmICghc2xvdFNsYXNoKSBjb250aW51ZTtcbiAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpbmRleF07XG4gICAgaWYgKHBvaW50KSBzY2VuZS5wcmltaXRpdmVzLnB1c2goLi4uc3dvcmRUcmFpbChzbG90U2xhc2gsIHNjYWxlLCBbcG9pbnRdLCB0dW5pbmcpKTtcbiAgfVxuICByZXR1cm4gc2NlbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBpY2t1cFNoYXBlKHNoYXBlSWQ6IHN0cmluZywgb3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUge1xuICBjb25zdCB7IHgsIHksIGNvbG9yLCBub3csIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgcmV0dXJuIHtcbiAgICBzaGFwZTogcmVxdWlyZWRTaGFwZShzaGFwZUlkKSxcbiAgICB4OiB4ICsgTWF0aC5zaW4obm93IC8gNDIwICsgeSAqIC4wNykgKiA0LjUgKiBzY2FsZSxcbiAgICB5LFxuICAgIHNpemU6IDEwICogc2NhbGUgKiAoMSArIE1hdGguc2luKG5vdyAvIDYwMCArIHkgKiAuMDUpICogLjA4KSxcbiAgICBjb2xvcixcbiAgICByb3RhdGlvblo6IG5vdyAvIDExMDAsXG4gICAgbGluZVRoaWNrbmVzczogLjc2LFxuICAgIGdsb3c6IDEuMDUsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiAxLjI1LFxuICAgIGVuZXJneUNvdmVyYWdlOiAuNDgsXG4gICAgZW5lcmd5U3BlZWQ6IDEuMzUsXG4gICAgZW5lcmd5QmxlZWQ6IC41NSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHNoaWVsZFBpY2t1cFZpc3VhbCA9IChvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSA9PlxuICBwaWNrdXBTaGFwZShcInNoaWVsZC1yaW5nXCIsIG9wdGlvbnMpO1xuXG5leHBvcnQgY29uc3Qgc3dvcmRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzd29yZC1uZWVkbGUtc2FicmVcIiwgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlczogbnVtYmVyKTogbnVtYmVyID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuY29uc3QgcGxheWVyRm9yd2FyZFJvdGF0aW9uID0ge1xuICByb3RhdGlvblg6IGRlZ3JlZXNUb1JhZGlhbnMoLTUyKSxcbiAgcm90YXRpb25ZOiBkZWdyZWVzVG9SYWRpYW5zKC0xKSxcbiAgcm90YXRpb25aOiBkZWdyZWVzVG9SYWRpYW5zKDEpLFxufTtcbmNvbnN0IHNjcmVlbkZvcndhcmRZYXcgPSAoZGlyZWN0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBudW1iZXIgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoZGlyZWN0aW9uLnggLyBsZW5ndGgsIC1kaXJlY3Rpb24ueSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgdHlwZSBBY3RvclZpc3VhbFJvbGUgPVxuICB8IFwiZ3JvdW5kRm9yd2FyZFwiXG4gIHwgXCJzY3JlZW5CaWxsYm9hcmRcIlxuICB8IFwidHVtYmxpbmdCaWxsYm9hcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCB7XG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbm93OiBudW1iZXI7XG4gIHBoYXNlPzogbnVtYmVyO1xuICBmYWNpbmc/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rvck9yaWVudGF0aW9uKHJvbGU6IEFjdG9yVmlzdWFsUm9sZSwgY29udGV4dDogQWN0b3JPcmllbnRhdGlvbkNvbnRleHQpOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHN3aXRjaCAocm9sZSkge1xuICAgIGNhc2UgXCJncm91bmRGb3J3YXJkXCI6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBsYXllckZvcndhcmRSb3RhdGlvbixcbiAgICAgICAgcm90YXRpb25YOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25YICsgTWF0aC5zaW4oY29udGV4dC5ub3cgLyA2NTAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMDYsXG4gICAgICAgIHJvdGF0aW9uWTogcGxheWVyRm9yd2FyZFJvdGF0aW9uLnJvdGF0aW9uWSArIChjb250ZXh0LmZhY2luZyA/IHNjcmVlbkZvcndhcmRZYXcoY29udGV4dC5mYWNpbmcpIDogMCksXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFwidHVtYmxpbmdCaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdGF0aW9uWTogTWF0aC5zaW4oY29udGV4dC5ub3cgLyA3MDAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMTgsXG4gICAgICB9O1xuICAgIGNhc2UgXCJzY3JlZW5CaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVsaWNvcHRlclZpZXdwb3J0Rm9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwbGF5ZXJZOiBudW1iZXIsIGZvY3VzWD86IG51bWJlcik6IEhlbGljb3B0ZXJWaWV3cG9ydCB7XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIHBsYXllclksIGZvY3VzWCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyT3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHBoYXNlID0gMCxcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJncm91bmRGb3J3YXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgICBmYWNpbmc6IHsgeDogMCwgeTogLTEgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteU9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwidHVtYmxpbmdCaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICAgIHBoYXNlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbGxib2FyZE9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInNjcmVlbkJpbGxib2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSwgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbnR5cGUgU2NlbmVCYWNrZ3JvdW5kU3RhdGUgPSBcIm1pc3NpbmdcIiB8IFwibG9hZGVkXCIgfCBcImxvYWRpbmdcIjtcblxuY29uc3Qgc2NlbmVCYWNrZ3JvdW5kcyA9IG5ldyBNYXA8c3RyaW5nLCBTY2VuZUJhY2tncm91bmRTdGF0ZT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXMoXG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgdGltZU1zOiBudW1iZXIsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gWy4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkLCB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSkucHJpbWl0aXZlcyA/PyBbXSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgbWFya2VyID0gXCIvTmVvblN3YXJtL1wiO1xuICBjb25zdCBuZXN0ZWRJbmRleCA9IHBhdGguaW5kZXhPZihtYXJrZXIpO1xuICBpZiAobmVzdGVkSW5kZXggPj0gMCkgcmV0dXJuIGAke3BhdGguc2xpY2UoMCwgbmVzdGVkSW5kZXgpfS9OZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcblxuICBjb25zdCBwYWdlSW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFwiL05lb25Td2FybS5odG1sXCIpO1xuICBpZiAocGFnZUluZGV4ID49IDApIHJldHVybiBgJHtwYXRoLnNsaWNlKDAsIHBhZ2VJbmRleCl9L05lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xuXG4gIHJldHVybiBgTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogdm9pZCB7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcblxuICBjb25zdCBwYXRoID0gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkKTtcbiAgY29uc3Qgc3RhdGUgPSBzY2VuZUJhY2tncm91bmRzLmdldChwYXRoKTtcbiAgaWYgKHN0YXRlID09PSBcImxvYWRlZFwiKSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtwYXRofVwiKWA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIik7XG4gIGlmIChzdGF0ZSkgcmV0dXJuO1xuXG4gIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGluZ1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGVkXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGF0aH1cIilgO1xuICB9O1xuICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibWlzc2luZ1wiKTtcbiAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgfTtcbiAgaW1hZ2Uuc3JjID0gcGF0aDtcbn1cbiIsICJpbXBvcnQgeyBnZXROZW9uU2hhcGUsIE5lb25TaGFwZUFjdG9yLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlLCB0eXBlIE5lb25TaGFwZUxhYmVsLCB0eXBlIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHN3YXJtU2hhcGVzID0ge1xuICBwbGF5ZXI6IGdldE5lb25TaGFwZShcImFycm93LWNsYXNzaWNcIikhLFxuICBlbmVteTogZ2V0TmVvblNoYXBlKFwiaHVudGVyLWV5ZVwiKSEsXG4gIG11bHRpcGxpZXI6IGdldE5lb25TaGFwZShcImJydWlzZXItY3Jvc3NcIikhLFxuICBndW5QaWNrdXA6IGdldE5lb25TaGFwZShcImhleC1maWdodGVyXCIpISxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwaXhlbHNUb1NoYXBlV29ybGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+ICh7XG4gIHg6ICh4IC8gY2FudmFzLndpZHRoIC0gLjUpICogKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxuICB5OiAoLjUgLSB5IC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwaXhlbHM6IG51bWJlcikgPT4gcGl4ZWxzIC8gY2FudmFzLmhlaWdodCAqIDIuNTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yQXRQaXhlbHMoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgcGl4ZWxTaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgY29uc3Qgd29ybGQgPSBwaXhlbHNUb1NoYXBlV29ybGQoY2FudmFzLCB4LCB5KTtcbiAgYWN0b3IubW92ZVRvKHdvcmxkLngsIHdvcmxkLnkpO1xuICBhY3Rvci5zY2FsZSA9IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZShjYW52YXMsIHBpeGVsU2l6ZSk7XG4gIHJldHVybiBhY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpO1xufVxuXG50eXBlIFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ICYgUGFydGlhbDxQaWNrPE5lb25Ub3BEb3duU2hhcGUsIFwid2lkdGhcIiB8IFwiaGVpZ2h0XCI+PjtcblxuZXhwb3J0IGNvbnN0IGFjdG9ySW5Ub3BEb3duU2NlbmUgPSAoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IHt9KTogTmVvblRvcERvd25TaGFwZSA9PlxuICAoeyAuLi5hY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpLCB4LCB5LCBzaXplIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hhcGVMYWJlbCA9ICh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uOiBOZW9uU2hhcGVMYWJlbFtcInBvc2l0aW9uXCJdLCBmb250U2l6ZTogbnVtYmVyLCBvZmZzZXQgPSA0KTogTmVvblNoYXBlTGFiZWwgPT5cbiAgKHsgdGV4dCwgcG9zaXRpb24sIGZvbnRTaXplLCBvZmZzZXQsIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIiwgZm9udFdlaWdodDogNzAwIH0pO1xuIiwgImltcG9ydCB7IG11bHRpcGxpZXJGYW1pbHkgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3F1YWRQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2x1bW46IG51bWJlcjtcbiAgcm93OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTcXVhZE1vZGVsIHtcbiAgbGFuZTogMCB8IDEgPSAwO1xuICBjb3VudCA9IDE7XG4gIGFpbU9mZnNldCA9IDA7XG4gIHggPSAwO1xuICB0YXJnZXRYID0gMDtcbiAgbGFuZVNoaWZ0U3RhcnRlZEF0ID0gMDtcblxuICBhZGQoYW1vdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1pbihzcGVjLm1heFNxdWFkU2l6ZSwgdGhpcy5jb3VudCArIGFtb3VudCk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICByZW1vdmUoYW1vdW50ID0gMSk6IG51bWJlciB7XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KDAsIHRoaXMuY291bnQgLSBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgc2V0TGFuZShsYW5lOiAwIHwgMSwgbGFuZUNlbnRlcjogKGxhbmU6IDAgfCAxKSA9PiBudW1iZXIsIG5vdzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGxhbmUgIT09IHRoaXMubGFuZSkge1xuICAgICAgdGhpcy5sYW5lU2hpZnRTdGFydGVkQXQgPSBub3c7XG4gICAgICAvLyBSZXNldCBhaW0gb2Zmc2V0IHNvIHRoZSBwbGF5ZXIgc25hcHMgdG8gdGhlIGNvcnJlY3QgY29sdW1uIGluIHRoZSBuZXcgbGFuZS5cbiAgICAgIHRoaXMuYWltT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5sYW5lID0gbGFuZTtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKGxhbmUpICsgdGhpcy5haW1PZmZzZXQ7XG4gIH1cblxuICBhdXRvQWltKHRhcmdldE9mZnNldDogbnVtYmVyLCBsYW5lV2lkdGg6IG51bWJlciwgbGFuZUNlbnRlcjogKGxhbmU6IDAgfCAxKSA9PiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBIaWdoIGxlcnAgZmFjdG9yICgwLjg1KSBzbyBhdXRvLWFpbSBzbmFwcyBhbG1vc3QgaW5zdGFudGFuZW91c2x5IGVhY2ggZnJhbWUuXG4gICAgdGhpcy5haW1PZmZzZXQgKz0gKE1hdGgubWF4KC1sYW5lV2lkdGggKiAuMjgsIE1hdGgubWluKGxhbmVXaWR0aCAqIC4yOCwgdGFyZ2V0T2Zmc2V0KSkgLSB0aGlzLmFpbU9mZnNldCkgKiAuODU7XG4gICAgdGhpcy50YXJnZXRYID0gbGFuZUNlbnRlcih0aGlzLmxhbmUpICsgdGhpcy5haW1PZmZzZXQ7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCByZXNwb25zZSA9IDEgLSBNYXRoLnBvdyguMDAwMDgsIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy54ICs9ICh0aGlzLnRhcmdldFggLSB0aGlzLngpICogcmVzcG9uc2U7XG4gIH1cblxuICAvKiogWCBvZmZzZXRzIG9mIGVhY2ggY29sdW1uIGluIHRoZSBmcm9udCByb3csIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci4gKi9cbiAgZnJvbnRSb3dDb2x1bW5PZmZzZXRzKHNjYWxlOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgY29uc3Qgcm93Q291bnQgPSBNYXRoLm1pbihzcGVjLm1lbWJlcnNQZXJSb3csIHRoaXMuY291bnQpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoXywgY29sKSA9PlxuICAgICAgKGNvbCAtIChyb3dDb3VudCAtIDEpIC8gMikgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICApO1xuICB9XG5cbiAgcG9pbnRzKGJhc2VZOiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBTcXVhZFBvaW50W10ge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIGNvbnN0IHBvaW50czogU3F1YWRQb2ludFtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyBzcGVjLm1lbWJlcnNQZXJSb3cpO1xuICAgICAgY29uc3Qgcm93Q291bnQgPSBNYXRoLm1pbihzcGVjLm1lbWJlcnNQZXJSb3csIHRoaXMuY291bnQgLSByb3cgKiBzcGVjLm1lbWJlcnNQZXJSb3cpO1xuICAgICAgY29uc3QgY29sdW1uID0gaW5kZXggJSBzcGVjLm1lbWJlcnNQZXJSb3c7XG4gICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHRoaXMueCArIChjb2x1bW4gLSAocm93Q291bnQgLSAxKSAvIDIpICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgICAgIHk6IGJhc2VZICsgcm93ICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgcm93LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsXG4gIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcixcbiAgTmVvblZpY3RvcnlFeHBlcmllbmNlLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxuICB0eXBlIE5lb25Ub3BEb3duU2hhcGUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHtcbiAgY29tYmF0VHVuaW5nLFxuICBndW5GYW1pbHksXG4gIG11bHRpcGxpZXJGYW1pbHksXG4gIG9yYkZhbWlseSxcbiAgcGFyc2VUcmFja0RlZmluaXRpb24sXG4gIHNoaWVsZEZhbWlseSxcbiAgc3dvcmRGYW1pbHksXG4gIHR5cGUgR3VuSWQsXG4gIHR5cGUgTXVsdGlwbGllcklkLFxuICB0eXBlIE9yYklkLFxuICB0eXBlIFBhcnNlZFRyYWNrRW50aXR5LFxuICB0eXBlIFNoaWVsZElkLFxuICB0eXBlIFN3b3JkSWQsXG4gIHR5cGUgU3dvcmRNZW1iZXIsXG4gIHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlLFxuICB0eXBlIFRyYWNrTWVtYmVyLFxufSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgc2VsZWN0QXV0b0FpbU9mZnNldCB9IGZyb20gXCIuLi9hdXRvQWltXCI7XG5pbXBvcnQgeyBHdW5TaW11bGF0aW9uIH0gZnJvbSBcIi4uL2NvbWJhdC9ndW5TaW11bGF0aW9uXCI7XG5pbXBvcnQgeyBxdWVyeU5lYXJieVRocmVhdHMgfSBmcm9tIFwiLi4vY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5XCI7XG5pbXBvcnQgeyByZXNvbHZlU2hpZWxkQ29udGFjdCwgU2hpZWxkU3RhdGUsIHRpY2tTaGllbGQgfSBmcm9tIFwiLi4vY29tYmF0L3NoaWVsZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgU3dvcmRTdGF0ZSwgdGlja1N3b3JkIH0gZnJvbSBcIi4uL2NvbWJhdC9zd29yZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlBY3RvciwgZGVmZWF0RW5lbXksIGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkLCBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMsIHJlc29sdmVFbmVteURhbWFnZSB9IGZyb20gXCIuLi9lbmVteUNhdGFsb2dcIjtcbmltcG9ydCB7IGVuZW15RXhpdENsb3VkLCB1cGRhdGVFbmVteUV4aXRFZmZlY3RzLCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCwgdHlwZSBFbmVteVZpc3VhbFR5cGUgfSBmcm9tIFwiLi4vZW5lbXlFeGl0VmlzdWFsc1wiO1xuaW1wb3J0IHsgc2hpZWxkUGlja3VwVmlzdWFsLCBzaGllbGRWaXN1YWxzLCBzd29yZFBpY2t1cFZpc3VhbCwgc3dvcmRWaXN1YWxEdXJhdGlvbk1zLCBzd29yZFZpc3VhbHMgfSBmcm9tIFwiLi4vZmFtaWx5VmlzdWFsc1wiO1xuaW1wb3J0IHR5cGUgeyBTd29yZFZpc3VhbFR1bmluZyB9IGZyb20gXCIuLi9mYW1pbHlWaXN1YWxzXCI7XG5pbXBvcnQgeyBiaWxsYm9hcmRPcmllbnRhdGlvbiwgZW5lbXlPcmllbnRhdGlvbiwgaGVsaWNvcHRlclZpZXdwb3J0Rm9yLCBwbGF5ZXJPcmllbnRhdGlvbiB9IGZyb20gXCIuLi9yZW5kZXJPcmllbnRhdGlvblwiO1xuaW1wb3J0IHsgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kLCBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzIH0gZnJvbSBcIi4uL3NjZW5lRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IGFjdG9ySW5Ub3BEb3duU2NlbmUsIHNoYXBlTGFiZWwsIHN3YXJtU2hhcGVzIH0gZnJvbSBcIi4uL3NoYXBlVmlzdWFsc1wiO1xuaW1wb3J0IHsgU3F1YWRNb2RlbCB9IGZyb20gXCIuLi9zcXVhZFwiO1xuaW1wb3J0IHtcbiAgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCxcbiAgbGFuZVJ1bm5lclZpZXdwb3J0LFxuICBwcm9qZWN0SGVsaWNvcHRlclNjZW5lLFxuICBwcm9qZWN0SGVsaWNvcHRlclBvaW50LFxuICB1bnByb2plY3RIZWxpY29wdGVyU2NyZWVuUG9pbnQsXG4gIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxufSBmcm9tIFwiLi4vdmlld3BvcnRcIjtcblxudHlwZSBMYW5lID0gMCB8IDE7XG5cbmV4cG9ydCB0eXBlIE5lb25Td2FybVNpbXVsYXRpb25Nb2RlID0gXCJnYW1lXCIgfCBcImxhYlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Td2FybVNvdW5kIHtcbiAgcGxheShpZDogc3RyaW5nKTogdm9pZDtcbiAgcGxheVJvdGF0ZWQ/KGlkOiBzdHJpbmcsIGFsdGVybmF0aXZlczogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucyB7XG4gIG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBzdGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjYW1lcmFTZXR0aW5ncz86IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncztcbiAgc291bmQ/OiBOZW9uU3dhcm1Tb3VuZDtcbiAgc2NlbmVJZD86IExhbmVSdW5uZXJTY2VuZUlkO1xuICBvblJ1blN0YXR1cz86IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcbiAgb25GaW5pc2g/OiAocmVzdWx0OiBOZW9uU3dhcm1GaW5pc2hSZXN1bHQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtRmluaXNoUmVzdWx0IHtcbiAgd29uOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXRhaWw6IHN0cmluZztcbiAgYnJlYWNoZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1TbmFwc2hvdCB7XG4gIG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICBhY3RpdmVUcmFjazogYm9vbGVhbjtcbiAgY29tYmF0Tm93OiBudW1iZXI7XG4gIGNvbWJhdEVsYXBzZWQ6IG51bWJlcjtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHNxdWFkOiB7XG4gICAgbGFuZTogTGFuZTtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB0YXJnZXRYOiBudW1iZXI7XG4gICAgYWltT2Zmc2V0OiBudW1iZXI7XG4gIH07XG4gIGFjdGl2ZToge1xuICAgIGd1bjogeyBpZDogR3VuSWQ7IGxldmVsOiBudW1iZXIgfSB8IG51bGw7XG4gICAgc2hpZWxkOiBTaGllbGRJZCB8IG51bGw7XG4gICAgc3dvcmQ6IHsgaWQ6IFN3b3JkSWQ7IGxldmVsOiBudW1iZXIgfSB8IG51bGw7XG4gIH07XG4gIGVuZW1pZXM6IEFycmF5PHsgaWQ6IG51bWJlcjsgZW5lbXlJZDogT3JiSWQ7IGxhbmU6IExhbmU7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBoZWFsdGg6IG51bWJlcjsgbWF4SGVhbHRoOiBudW1iZXI7IGR5aW5nOiBib29sZWFuIH0+O1xuICBwaWNrdXBzOiB7XG4gICAgZ3VuczogbnVtYmVyO1xuICAgIHNoaWVsZHM6IG51bWJlcjtcbiAgICBzd29yZHM6IG51bWJlcjtcbiAgICBtdWx0aXBsaWVyczogbnVtYmVyO1xuICB9O1xuICBraWxsczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRW5lbXkge1xuICBpZDogbnVtYmVyO1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xuICByb3dJZDogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG4gIGR5aW5nOiBib29sZWFuO1xuICBleGl0RWZmZWN0U3Bhd25lZD86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBHdW5QaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZ3VuSWQ6IEd1bklkO1xuICBsZXZlbDogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xufVxuXG5pbnRlcmZhY2UgU2hpZWxkUGlja3VwIHtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNoaWVsZElkOiBTaGllbGRJZDtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBTd29yZFBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzd29yZElkOiBTd29yZElkO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIE11bHRpcGxpZXJQaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbXVsdGlwbGllcklkOiBNdWx0aXBsaWVySWQ7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG59XG5cbmludGVyZmFjZSBQZW5kaW5nU3dvcmREYW1hZ2Uge1xuICBoaXRzOiBBcnJheTx7IGVuZW15SWQ6IG51bWJlcjsgZHVlQXQ6IG51bWJlciB9PjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGltcGFjdFNvdW5kSWQ6IHN0cmluZztcbn1cblxuY29uc3QgZ3VuRmlyZVNvdW5kSWRzOiBSZWNvcmQ8R3VuSWQsIHN0cmluZz4gPSB7XG4gIHB1bHNlUGlzdG9sOiBcIlByaW1hcnlcIixcbiAgbmVlZGxlclNtZzogXCJOZWVkbGVyRmlyZVwiLFxuICBidXJzdENhcmJpbmU6IFwiQnVyc3RDYXJiaW5lRmlyZVwiLFxuICBoZWF2eUNhbm5vbjogXCJIZWF2eUNhbm5vbkZpcmVcIixcbiAgc3BsaXR0ZXJSaWZsZTogXCJTcGxpdHRlclJpZmxlRmlyZVwiLFxufTtcblxuY29uc3Qgc3dvcmRJbXBhY3RTb3VuZElkczogUmVjb3JkPFN3b3JkSWQsIHN0cmluZz4gPSB7XG4gIGFyY0JsYWRlOiBcIlN3b3JkQXJjSW1wYWN0XCIsXG4gIGNsZWF2ZXI6IFwiU3dvcmRDbGVhdmVySW1wYWN0XCIsXG59O1xuXG5jb25zdCBzb3VuZEFsdGVybmF0aXZlQ291bnRzOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+ID0ge1xuICBQcmltYXJ5OiAzLFxuICBFbmVteURlc3Ryb3llZDogMixcbiAgRW5lbXlIaXQ6IDIsXG4gIEVuZW15U3Bhd246IDIsXG4gIEJvc3M6IDEsXG4gIFByb2plY3RpbGVIaXQ6IDIsXG59O1xuY29uc3QgbWF4VHJhY2tTcGF3bkxlYWRTZWNvbmRzID0gMTg7XG5jb25zdCBmaXJzdFRyYWNrUm93QXJyaXZhbFNlY29uZHMgPSAyICogY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllcjtcbmNvbnN0IHRyYWNrUm93VHJhdmVsU2Vjb25kcyA9IC4zNzUgKiBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyO1xuXG5leHBvcnQgY2xhc3MgTmVvblN3YXJtU2ltdWxhdGlvbiB7XG4gIHJlYWRvbmx5IG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBzdGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSBjYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICByZWFkb25seSBzcXVhZCA9IG5ldyBTcXVhZE1vZGVsKCk7XG5cbiAgcHJpdmF0ZSByZW5kZXJlcjogTmVvblRvcERvd25TY2VuZVJlbmRlcmVyO1xuICBwcml2YXRlIHNvdW5kPzogTmVvblN3YXJtU291bmQ7XG4gIHByaXZhdGUgb25SdW5TdGF0dXM/OiAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHByaXZhdGUgb25GaW5pc2g/OiAocmVzdWx0OiBOZW9uU3dhcm1GaW5pc2hSZXN1bHQpID0+IHZvaWQ7XG4gIHByaXZhdGUgYW5pbWF0aW9uRnJhbWUgPSAwO1xuICBwcml2YXRlIGFjdGl2ZVRyYWNrOiBUcmFja01lbWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHRyYWNrU2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHByaXZhdGUgbGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHByaXZhdGUgY29tYmF0RWxhcHNlZCA9IDA7XG4gIHByaXZhdGUgY29tYmF0Tm93ID0gMDtcbiAgcHJpdmF0ZSBwbGF5ZXJMYW5lOiBMYW5lID0gMDtcbiAgcHJpdmF0ZSBjb29sZG93biA9IDA7XG4gIHByaXZhdGUgZW50aXR5SWRDb3VudGVyID0gMDtcbiAgcHJpdmF0ZSB0cmFja0VudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG4gIHByaXZhdGUgbmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgcHJpdmF0ZSBicmVhY2hlcyA9IDA7XG4gIHByaXZhdGUga2lsbHMgPSAwO1xuICBwcml2YXRlIGVuZW1pZXM6IEVuZW15W10gPSBbXTtcbiAgcHJpdmF0ZSBndW5TaW11bGF0aW9uID0gbmV3IEd1blNpbXVsYXRpb24oKTtcbiAgcHJpdmF0ZSBndW5QaWNrdXBzOiBHdW5QaWNrdXBbXSA9IFtdO1xuICBwcml2YXRlIHNoaWVsZFBpY2t1cHM6IFNoaWVsZFBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgc3dvcmRQaWNrdXBzOiBTd29yZFBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgbXVsdGlwbGllcnM6IE11bHRpcGxpZXJQaWNrdXBbXSA9IFtdO1xuICBwcml2YXRlIGVuZW15RXhpdEVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdID0gW107XG4gIHByaXZhdGUgdmljdG9yeTogTmVvblZpY3RvcnlFeHBlcmllbmNlIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3dvcmRWaXN1YWxUdW5pbmc6IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+ID0ge307XG4gIHByaXZhdGUgcGVuZGluZ1N3b3JkRGFtYWdlOiBQZW5kaW5nU3dvcmREYW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBmYWlsdXJlUmVhc29uID0gXCJcIjtcbiAgcHJpdmF0ZSBwbGF5ZXJBY3RvcnM6IE5lb25TaGFwZUFjdG9yW10gPSBbXTtcbiAgcHJpdmF0ZSBleHBsb2RpbmdQbGF5ZXJzOiBBcnJheTx7IGFjdG9yOiBOZW9uU2hhcGVBY3RvcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4gPSBbXTtcbiAgcHJpdmF0ZSBzaW11bGF0aW9uU3BlZWQgPSAxO1xuICBwcml2YXRlIGFjdGl2ZUJ5RmFtaWx5OiB7XG4gICAgZ3VuOiB7IGlkOiBHdW5JZDsgbGV2ZWw6IG51bWJlciB9IHwgbnVsbDtcbiAgICBzaGllbGQ6IFNoaWVsZFN0YXRlIHwgbnVsbDtcbiAgICBzd29yZDogU3dvcmRTdGF0ZSB8IG51bGw7XG4gIH0gPSB7XG4gICAgZ3VuOiBudWxsLFxuICAgIHNoaWVsZDogbnVsbCxcbiAgICBzd29yZDogbnVsbCxcbiAgfTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIsIG9wdGlvbnM6IE5lb25Td2FybVNpbXVsYXRpb25PcHRpb25zKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZTtcbiAgICB0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuICAgIHRoaXMuc3RhZ2VFbGVtZW50ID0gb3B0aW9ucy5zdGFnZUVsZW1lbnQ7XG4gICAgdGhpcy5jYW1lcmFTZXR0aW5ncyA9IG9wdGlvbnMuY2FtZXJhU2V0dGluZ3MgPz8geyAuLi5kZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzIH07XG4gICAgdGhpcy5zb3VuZCA9IG9wdGlvbnMuc291bmQ7XG4gICAgdGhpcy5vblJ1blN0YXR1cyA9IG9wdGlvbnMub25SdW5TdGF0dXM7XG4gICAgdGhpcy5vbkZpbmlzaCA9IG9wdGlvbnMub25GaW5pc2g7XG4gICAgdGhpcy50cmFja1NjZW5lSWQgPSBvcHRpb25zLnNjZW5lSWQgPz8gXCJuZW9uSGFsbFwiO1xuICAgIHRoaXMuYXBwbHlTY2VuZUJhY2tncm91bmQoKTtcbiAgICB0aGlzLnJlc2V0KHsgc2lsZW50OiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShvcHRpb25zOiBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucyk6IFByb21pc2U8TmVvblN3YXJtU2ltdWxhdGlvbj4ge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLmNyZWF0ZShvcHRpb25zLmNhbnZhcywgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxXaWR0aCwgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxIZWlnaHQpO1xuICAgIHJldHVybiBuZXcgTmVvblN3YXJtU2ltdWxhdGlvbihyZW5kZXJlciwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXQgbm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmF0Tm93O1xuICB9XG5cbiAgZ2V0IGFjdGl2ZVRyYWNrUnVubmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUcmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIGxhbmVYKGxhbmU6IExhbmUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aCAqIChsYW5lID09PSAwID8gLjMyIDogLjY4KTtcbiAgfVxuXG4gIHBsYXllclkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjgyO1xuICB9XG5cbiAgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJlc2V0KG9wdGlvbnM6IHsgc2lsZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRyYWNrID0gbnVsbDtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuY29tYmF0RWxhcHNlZCA9IDA7XG4gICAgdGhpcy5jb21iYXROb3cgPSAwO1xuICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgIHRoaXMubmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgICB0aGlzLnRyYWNrRW50aXRpZXMgPSBbXTtcbiAgICB0aGlzLmJyZWFjaGVzID0gMDtcbiAgICB0aGlzLmtpbGxzID0gMDtcbiAgICB0aGlzLmNsZWFyU3RhZ2UoKTtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBudWxsO1xuICAgIHRoaXMuc3F1YWQuY291bnQgPSAxO1xuICAgIHRoaXMuc3F1YWQuYWltT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnNxdWFkLmxhbmUgPSAwO1xuICAgIHRoaXMuc3F1YWQueCA9IHRoaXMubGFuZVgoMCk7XG4gICAgdGhpcy5zcXVhZC50YXJnZXRYID0gdGhpcy5sYW5lWCgwKTtcbiAgICB0aGlzLnBsYXllckxhbmUgPSAwO1xuICAgIHRoaXMucGxheWVyQWN0b3JzID0gW25ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSldO1xuICAgIHRoaXMuZmFpbHVyZVJlYXNvbiA9IFwiXCI7XG4gICAgdGhpcy52aWN0b3J5ID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmdTd29yZERhbWFnZSA9IG51bGw7XG4gICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5wbGF5KFwiTWVudU9wZW5cIik7XG4gIH1cblxuICBjbGVhclN0YWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgIHRoaXMuZ3VuU2ltdWxhdGlvbi5jbGVhcigpO1xuICAgIHRoaXMuZ3VuUGlja3VwcyA9IFtdO1xuICAgIHRoaXMuc2hpZWxkUGlja3VwcyA9IFtdO1xuICAgIHRoaXMuc3dvcmRQaWNrdXBzID0gW107XG4gICAgdGhpcy5tdWx0aXBsaWVycyA9IFtdO1xuICAgIHRoaXMuZW5lbXlFeGl0RWZmZWN0cyA9IFtdO1xuICAgIHRoaXMuZXhwbG9kaW5nUGxheWVycyA9IFtdO1xuICAgIHRoaXMudmljdG9yeSA9IG51bGw7XG4gICAgdGhpcy5wZW5kaW5nU3dvcmREYW1hZ2UgPSBudWxsO1xuICB9XG5cbiAgc3RhcnRUcmFjayh0cmFjazogVHJhY2tNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRyYWNrID0gdHJhY2s7XG4gICAgdGhpcy50cmFja1NjZW5lSWQgPSB0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkO1xuICAgIHRoaXMuYXBwbHlTY2VuZUJhY2tncm91bmQoKTtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuY29tYmF0RWxhcHNlZCA9IDA7XG4gICAgdGhpcy5jb21iYXROb3cgPSAwO1xuICAgIGNvbnN0IGFsbEVudGl0aWVzID0gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgY29uc3QgcGxheWVyU3RhcnQgPSBhbGxFbnRpdGllcy5maW5kKGVudGl0eSA9PiBlbnRpdHkuaWQgPT09IFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIGNvbnN0IHN0YXJ0TGFuZTogTGFuZSA9IHBsYXllclN0YXJ0Py5zaWRlID09PSBcInJpZ2h0XCIgPyAxIDogMDtcbiAgICB0aGlzLnBsYXllckxhbmUgPSBzdGFydExhbmU7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkID0gbnVsbDtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLm5leHRUcmFja0VudGl0eSA9IDA7XG4gICAgdGhpcy50cmFja0VudGl0aWVzID0gYWxsRW50aXRpZXMuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuaWQgIT09IFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIHRoaXMuYnJlYWNoZXMgPSAwO1xuICAgIHRoaXMuY2xlYXJTdGFnZSgpO1xuICAgIHRoaXMuc3F1YWQuY291bnQgPSAxO1xuICAgIHRoaXMucGxheWVyQWN0b3JzID0gW25ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSldO1xuICAgIHRoaXMuc3F1YWQuYWltT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnNxdWFkLmxhbmUgPSBzdGFydExhbmU7XG4gICAgdGhpcy5zcXVhZC54ID0gdGhpcy5sYW5lWChzdGFydExhbmUpO1xuICAgIHRoaXMuc3F1YWQudGFyZ2V0WCA9IHRoaXMubGFuZVgoc3RhcnRMYW5lKTtcbiAgICB0aGlzLnBsYXkoXCJUcmFja1N0YXJ0XCIpO1xuICB9XG5cbiAgc2V0U2NlbmUoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiB2b2lkIHtcbiAgICB0aGlzLnRyYWNrU2NlbmVJZCA9IHNjZW5lSWQ7XG4gICAgdGhpcy5hcHBseVNjZW5lQmFja2dyb3VuZCgpO1xuICB9XG5cbiAgc2V0U3F1YWRMYW5lKGxhbmU6IExhbmUsIG9wdGlvbnM6IHsgcmVxdWlyZUFjdGl2ZVRyYWNrPzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlQWN0aXZlVHJhY2sgJiYgIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICBpZiAobGFuZSAhPT0gdGhpcy5zcXVhZC5sYW5lKSB0aGlzLnBsYXkoXCJMYW5lU3dpdGNoXCIpO1xuICAgIHRoaXMuc3F1YWQuc2V0TGFuZShsYW5lLCB2YWx1ZSA9PiB0aGlzLmxhbmVYKHZhbHVlKSwgdGhpcy5jb21iYXROb3cpO1xuICAgIHRoaXMucGxheWVyTGFuZSA9IGxhbmU7XG4gIH1cblxuICBlcXVpcEd1bihndW5JZDogR3VuSWQsIGxldmVsID0gMSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0geyBpZDogZ3VuSWQsIGxldmVsIH07XG4gICAgdGhpcy5jb29sZG93biA9IDA7XG4gICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwR3VuXCIpO1xuICAgIHRoaXMucGxheShcIldlYXBvblJlYWR5XCIpO1xuICB9XG5cbiAgZXF1aXBTaGllbGQoc2hpZWxkSWQ6IFNoaWVsZElkKTogdm9pZCB7XG4gICAgY29uc3QgZGVmID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbc2hpZWxkSWRdO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbmV3IFNoaWVsZFN0YXRlKHNoaWVsZElkLCBkZWYubWF4Q2hhcmdlcyk7XG4gICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwU2hpZWxkXCIpO1xuICAgIHRoaXMucGxheShcIlNoaWVsZFwiKTtcbiAgfVxuXG4gIGVxdWlwU3dvcmQoc3dvcmRJZDogU3dvcmRJZCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBuZXcgU3dvcmRTdGF0ZShzd29yZElkLCBjdXJyZW50Py5zd29yZElkID09PSBzd29yZElkID8gY3VycmVudC5sZXZlbCArIDEgOiAxKTtcbiAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTd29yZFwiKTtcbiAgICB0aGlzLnBsYXkoXCJXZWFwb25SZWFkeVwiKTtcbiAgfVxuXG4gIHNldFN3b3JkVmlzdWFsVHVuaW5nKHR1bmluZzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLnN3b3JkVmlzdWFsVHVuaW5nID0geyAuLi50dW5pbmcgfTtcbiAgfVxuXG4gIHNldFNpbXVsYXRpb25TcGVlZChzcGVlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zaW11bGF0aW9uU3BlZWQgPSBOdW1iZXIuaXNGaW5pdGUoc3BlZWQpID8gTWF0aC5tYXgoLjA1LCBNYXRoLm1pbigyLCBzcGVlZCkpIDogMTtcbiAgfVxuXG4gIGFkZFNxdWFkTWVtYmVycyhhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3F1YWQuYWRkKGFtb3VudCk7XG4gICAgdGhpcy5zeW5jUGxheWVyQWN0b3JzKCk7XG4gIH1cblxuICBzcGF3bkVuZW15KG9wdGlvbnM6IHsgZW5lbXlJZDogT3JiSWQ7IGxhbmU6IExhbmU7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IGhlYWx0aD86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyOyByb3dJZD86IG51bWJlcjsgcGxheVNvdW5kPzogYm9vbGVhbjsgY29sb3I/OiBzdHJpbmcgfSk6IG51bWJlciB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW29wdGlvbnMuZW5lbXlJZF07XG4gICAgY29uc3QgaGVhbHRoID0gb3B0aW9ucy5oZWFsdGggPz8gZGVmaW5pdGlvbi5oZWFsdGg7XG4gICAgY29uc3QgaWQgPSArK3RoaXMuZW50aXR5SWRDb3VudGVyO1xuICAgIGNvbnN0IGFjdG9yID0gY3JlYXRlRW5lbXlBY3RvcihvcHRpb25zLmVuZW15SWQpO1xuICAgIGlmIChvcHRpb25zLmNvbG9yKSBhY3Rvci5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5lbmVtaWVzLnB1c2goe1xuICAgICAgaWQsXG4gICAgICBlbmVteVR5cGU6IG9wdGlvbnMuZW5lbXlJZCxcbiAgICAgIGVuZW15SWQ6IG9wdGlvbnMuZW5lbXlJZCxcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTA1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgaGVhbHRoLFxuICAgICAgbWF4SGVhbHRoOiBoZWFsdGgsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICByb3dJZDogb3B0aW9ucy5yb3dJZCA/PyBpZCxcbiAgICAgIGFjdG9yLFxuICAgICAgZHlpbmc6IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChvcHRpb25zLnBsYXlTb3VuZCAhPT0gZmFsc2UgJiYgZGVmaW5pdGlvbi5zcGF3blNvdW5kKSB0aGlzLnBsYXkoZGVmaW5pdGlvbi5zcGF3blNvdW5kKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICBkZWZlYXRFbmVteUJ5SWQoaWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG4gICAgaWYgKGVuZW15ICYmICFlbmVteS5keWluZykgdGhpcy5kZXN0cm95RW5lbXkoZW5lbXkpO1xuICB9XG5cbiAgc3Bhd25HdW5QaWNrdXAob3B0aW9uczogeyBndW5JZDogR3VuSWQ7IGxhbmU6IExhbmU7IGxldmVsPzogbnVtYmVyOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMuZ3VuUGlja3Vwcy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgZ3VuSWQ6IG9wdGlvbnMuZ3VuSWQsXG4gICAgICBsZXZlbDogb3B0aW9ucy5sZXZlbCA/PyAxLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5ndW5QaWNrdXAgfSksXG4gICAgfSk7XG4gIH1cblxuICBzcGF3blNoaWVsZFBpY2t1cChvcHRpb25zOiB7IHNoaWVsZElkOiBTaGllbGRJZDsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNoaWVsZFBpY2t1cHMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIHNoaWVsZElkOiBvcHRpb25zLnNoaWVsZElkLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgIH0pO1xuICB9XG5cbiAgc3Bhd25Td29yZFBpY2t1cChvcHRpb25zOiB7IHN3b3JkSWQ6IFN3b3JkSWQ7IGxhbmU6IExhbmU7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy5zd29yZFBpY2t1cHMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIHN3b3JkSWQ6IG9wdGlvbnMuc3dvcmRJZCxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICB9KTtcbiAgfVxuXG4gIHNwYXduTXVsdGlwbGllclBpY2t1cChvcHRpb25zOiB7IGxhbmU6IExhbmU7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlcjsgbXVsdGlwbGllcklkPzogTXVsdGlwbGllcklkIH0pOiB2b2lkIHtcbiAgICBjb25zdCBtdWx0aXBsaWVySWQgPSBvcHRpb25zLm11bHRpcGxpZXJJZCA/PyBcInNxdWFkUGx1c09uZVwiO1xuICAgIHRoaXMubXVsdGlwbGllcnMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIG11bHRpcGxpZXJJZCxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgIGFjdG9yOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMubXVsdGlwbGllciB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0TG9vcCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wKCk7XG4gICAgY29uc3QgZnJhbWUgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMudGljayhub3cpO1xuICAgICAgdGhpcy5yZW5kZXIodGhpcy5jb21iYXROb3cpO1xuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgfTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIHN0b3BMb29wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcbiAgfVxuXG4gIHRpY2soZnJhbWVOb3c6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJhd0RlbHRhID0gTWF0aC5taW4oLjA1LCAoZnJhbWVOb3cgLSB0aGlzLmxhc3RGcmFtZSkgLyAxMDAwKTtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IGZyYW1lTm93O1xuICAgIGNvbnN0IGRlbHRhID0gcmF3RGVsdGEgKiBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyICogdGhpcy5zaW11bGF0aW9uU3BlZWQ7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkICs9IGRlbHRhO1xuICAgIHRoaXMuY29tYmF0Tm93ID0gdGhpcy5jb21iYXRFbGFwc2VkICogMTAwMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgWy4uLnRoaXMuZXhwbG9kaW5nUGxheWVyc10pIHtcbiAgICAgIGl0ZW0uYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIGlmIChpdGVtLmFjdG9yLmRpc3Bvc2VkKSB0aGlzLmV4cGxvZGluZ1BsYXllcnMuc3BsaWNlKHRoaXMuZXhwbG9kaW5nUGxheWVycy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG4gICAgdXBkYXRlRW5lbXlFeGl0RWZmZWN0cyh0aGlzLmVuZW15RXhpdEVmZmVjdHMsIGRlbHRhKTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZ2FtZVwiICYmICF0aGlzLmFjdGl2ZVRyYWNrKSByZXR1cm47XG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2spIHRoaXMuc3Bhd25UcmFja0VudGl0aWVzKCk7XG5cbiAgICBjb25zdCBndW5TdGF0dXMgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA/IGd1bkZhbWlseS5tZW1iZXJzW3RoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuLmlkXS5sYWJlbCA6IFwiTm8gd2VhcG9uXCI7XG4gICAgY29uc3Qgc2hpZWxkRGVmID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPyBzaGllbGRGYW1pbHkubWVtYmVyc1t0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZC5zaGllbGRJZF0gOiBudWxsO1xuICAgIGNvbnN0IHN3b3JkRGVmID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA/IHN3b3JkRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZC5zd29yZElkXSA6IG51bGw7XG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2spIHtcbiAgICAgIHRoaXMub25SdW5TdGF0dXM/LihgJHtndW5TdGF0dXN9JHtzaGllbGREZWYgPyBgIFx1MDBCNyAke3NoaWVsZERlZi5sYWJlbH1gIDogXCJcIn0ke3N3b3JkRGVmID8gYCBcdTAwQjcgJHtzd29yZERlZi5sYWJlbH1gIDogXCJcIn1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5lRW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoZW5lbXkgPT4gZW5lbXkubGFuZSA9PT0gdGhpcy5zcXVhZC5sYW5lICYmICFlbmVteS5keWluZyk7XG4gICAgY29uc3QgY29sT2Zmc2V0cyA9IHRoaXMuc3F1YWQuZnJvbnRSb3dDb2x1bW5PZmZzZXRzKHRoaXMuc2NhbGUoKSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChsYW5lRW5lbWllcywgdGhpcy5sYW5lWCh0aGlzLnNxdWFkLmxhbmUpLCBjb2xPZmZzZXRzLCB0aGlzLnNxdWFkLmFpbU9mZnNldCk7XG4gICAgdGhpcy5zcXVhZC5hdXRvQWltKG9mZnNldCwgdGhpcy5jYW52YXMud2lkdGggKiAuMjIsIGxhbmUgPT4gdGhpcy5sYW5lWChsYW5lKSk7XG4gICAgdGhpcy5zcXVhZC51cGRhdGUoZGVsdGEpO1xuICAgIHRoaXMuc3RhZ2VFbGVtZW50LmRhdGFzZXQuc3F1YWRMYW5lID0gU3RyaW5nKHRoaXMuc3F1YWQubGFuZSk7XG4gICAgdGhpcy5zeW5jUGxheWVyQWN0b3JzKCk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5ndW4pIHtcbiAgICAgIHRoaXMuY29vbGRvd24gLT0gZGVsdGE7XG4gICAgICBpZiAodGhpcy5jb29sZG93biA8PSAwKSB0aGlzLmZpcmUoKTtcbiAgICAgIGlmICh0aGlzLmd1blNpbXVsYXRpb24udXBkYXRlRmlyaW5nKHRoaXMuY29tYmF0Tm93KSA+IDApIHRoaXMucGxheUd1bkZpcmUodGhpcy5hY3RpdmVCeUZhbWlseS5ndW4uaWQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUHJvamVjdGlsZXMoZGVsdGEpO1xuICAgIHRoaXMudXBkYXRlTmVhclBsYXllckVmZmVjdHMoZGVsdGEsIHNoaWVsZERlZiwgc3dvcmREZWYpO1xuICAgIHRoaXMudXBkYXRlRW5lbWllcyhkZWx0YSwgc2hpZWxkRGVmKTtcbiAgICB0aGlzLnVwZGF0ZVBpY2t1cHMoZGVsdGEpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2sgJiYgdGhpcy50cmFja1Jlc29sdmVkKCkpIHRoaXMuZmluaXNoKHRoaXMuYnJlYWNoZXMgPT09IDApO1xuICB9XG5cbiAgcmVuZGVyKG5vdyA9IHRoaXMuY29tYmF0Tm93KTogdm9pZCB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXModGhpcy50cmFja1NjZW5lSWQsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIG5vdyk7XG4gICAgY29uc3QgcyA9IHRoaXMuc2NhbGUoKTtcbiAgICBjb25zdCBwbGF5ZXJQb2ludHMgPSB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgcyk7XG4gICAgY29uc3QgaGVsaWNvcHRlclZpZXdwb3J0ID0gaGVsaWNvcHRlclZpZXdwb3J0Rm9yKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMucGxheWVyWSgpLCBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLnNxdWFkLngpKTtcblxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgcGxheWVyUG9pbnRzKSB7XG4gICAgICBjb25zdCBzbWVhciA9IE1hdGgubWluKDIyICogcywgTWF0aC5hYnModGhpcy5zcXVhZC50YXJnZXRYIC0gdGhpcy5zcXVhZC54KSAqIC40NSk7XG4gICAgICBpZiAoc21lYXIgPiAyKSB7XG4gICAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgICAgeDogcG9pbnQueCAtIE1hdGguc2lnbih0aGlzLnNxdWFkLnRhcmdldFggLSB0aGlzLnNxdWFkLngpICogc21lYXIgKiAuNSxcbiAgICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICAgIHdpZHRoOiBzbWVhcixcbiAgICAgICAgICBoZWlnaHQ6IDIuMiAqIHMsXG4gICAgICAgICAgY29sb3I6IG5lb25QYWxldHRlLmRlZXBCbHVlLFxuICAgICAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS5jeWFuLFxuICAgICAgICAgIGdsb3c6IC40NSxcbiAgICAgICAgICBpbnRlbnNpdHk6IC41LFxuICAgICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWl0aXZlcy5wdXNoKC4uLnRoaXMuZ3VuU2ltdWxhdGlvbi5wcm9qZWN0aWxlUHJpbWl0aXZlcygpKTtcbiAgICBpZiAodGhpcy52aWN0b3J5KSBwcmltaXRpdmVzLnB1c2goLi4udGhpcy52aWN0b3J5LnByaW1pdGl2ZXMobm93KSk7XG5cbiAgICBjb25zdCBzaGFwZUluc3RhbmNlczogTmVvblRvcERvd25TaGFwZVtdID0gW107XG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkKSB7XG4gICAgICBjb25zdCBsaXZlU2hpZWxkID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQ7XG4gICAgICBjb25zdCBsaXZlRGVmID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbbGl2ZVNoaWVsZC5zaGllbGRJZF07XG4gICAgICBjb25zdCBzY2VuZSA9IHNoaWVsZFZpc3VhbHMoe1xuICAgICAgICBkZWZpbml0aW9uOiBsaXZlRGVmLFxuICAgICAgICBzdHJlbmd0aDogbGl2ZVNoaWVsZC5jaGFyZ2VzLFxuICAgICAgICBpbml0aWFsU3RyZW5ndGg6IGxpdmVEZWYubWF4Q2hhcmdlcyxcbiAgICAgICAgeDogdGhpcy5zcXVhZC54LFxuICAgICAgICB5OiB0aGlzLnBsYXllclkoKSxcbiAgICAgICAgbm93LFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgICAgcHJvamVjdFNjcmVlbk9mZnNldDogKHgsIHksIG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICAgICAgICBjb25zdCBjZW50ZXIgPSBwcm9qZWN0SGVsaWNvcHRlclBvaW50KHgsIHksIHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCk7XG4gICAgICAgICAgcmV0dXJuIHVucHJvamVjdEhlbGljb3B0ZXJTY3JlZW5Qb2ludChjZW50ZXIueCArIG9mZnNldFggKiBjZW50ZXIuc2NhbGUsIGNlbnRlci55ICsgb2Zmc2V0WSAqIGNlbnRlci5zY2FsZSwgdGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGl0UHJvZ3Jlc3M6IGxpdmVTaGllbGQuaGl0Rmxhc2hQcm9ncmVzcyxcbiAgICAgIH0pO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKC4uLnNjZW5lLnByaW1pdGl2ZXMpO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaCguLi5zY2VuZS5zaGFwZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCkge1xuICAgICAgY29uc3QgbGl2ZVN3b3JkID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZDtcbiAgICAgIGNvbnN0IGxpdmVEZWYgPSBzd29yZEZhbWlseS5tZW1iZXJzW2xpdmVTd29yZC5zd29yZElkXTtcbiAgICAgIGNvbnN0IHNjZW5lID0gc3dvcmRWaXN1YWxzKHtcbiAgICAgICAgZGVmaW5pdGlvbjogbGl2ZURlZixcbiAgICAgICAgc2xhc2g6IGxpdmVTd29yZC5hY3RpdmVTbGFzaCxcbiAgICAgICAgc2xhc2hlczogbGl2ZVN3b3JkLmFjdGl2ZVNsYXNoZXMsXG4gICAgICAgIGRvY2tTaWRlOiBsaXZlU3dvcmQucHJldmlvdXNTbGFzaFNpZGUsXG4gICAgICAgIGRvY2tTaWRlczogbGl2ZVN3b3JkLnByZXZpb3VzU2xhc2hTaWRlcyxcbiAgICAgICAgcG9pbnRzOiBwbGF5ZXJQb2ludHMsXG4gICAgICAgIHR1bmluZzogdGhpcy5zd29yZFZpc3VhbFR1bmluZyxcbiAgICAgICAgc2NhbGU6IHMsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCguLi5zY2VuZS5wcmltaXRpdmVzKTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goLi4uc2NlbmUuc2hhcGVzKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLnNoaWVsZFBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBzaGllbGRGYW1pbHkubWVtYmVyc1twaWNrdXAuc2hpZWxkSWRdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChzaGllbGRQaWNrdXBWaXN1YWwoe1xuICAgICAgICB4OiBwaWNrdXAueCxcbiAgICAgICAgeTogcGlja3VwLnksXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICAgICAgbm93LFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgdGhpcy5zd29yZFBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBzd29yZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zd29yZElkXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goc3dvcmRQaWNrdXBWaXN1YWwoe1xuICAgICAgICB4OiBwaWNrdXAueCxcbiAgICAgICAgeTogcGlja3VwLnksXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICAgICAgbm93LFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJTaXplID0gMTQ7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHBvaW50XSBvZiBwbGF5ZXJQb2ludHMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBhY3RvciA9IHRoaXMucGxheWVyQWN0b3JzW2luZGV4XSA/PyBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGFjdG9yLCBwb2ludC54LCBwb2ludC55LCBwbGF5ZXJTaXplLCBwbGF5ZXJPcmllbnRhdGlvbih0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHBvaW50LngsIHBvaW50LnksIG5vdywgaW5kZXgpKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmV4cGxvZGluZ1BsYXllcnMpIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShpdGVtLmFjdG9yLCBpdGVtLngsIGl0ZW0ueSwgcGxheWVyU2l6ZSkpO1xuXG4gICAgY29uc3QgZW5lbXlIZWFsdGhCYXJzOiBQYXJhbWV0ZXJzPHR5cGVvZiBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXM+WzBdW251bWJlcl1bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZW5lbXkgb2YgdGhpcy5lbmVtaWVzKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpO1xuICAgICAgY29uc3Qgc2l6ZSA9IDE4ICogZGVmaW5pdGlvbi5jb2x1bW5TcGFuO1xuICAgICAgZW5lbXlIZWFsdGhCYXJzLnB1c2goeyBlbmVteUlkOiBlbmVteS5lbmVteUlkLCB4OiBlbmVteS54LCB5OiBlbmVteS55LCBoZWFsdGg6IGVuZW15LmhlYWx0aCwgbWF4SGVhbHRoOiBlbmVteS5tYXhIZWFsdGgsIHNpemUsIHNjYWxlOiBzIH0pO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGVuZW15LmFjdG9yLCBlbmVteS54LCBlbmVteS55LCBzaXplLCBlbmVteU9yaWVudGF0aW9uKHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgZW5lbXkueCwgZW5lbXkueSwgbm93LCBlbmVteS5yb3dJZCkpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgdGhpcy5ndW5QaWNrdXBzKSB7XG4gICAgICBjb25zdCBndW4gPSBndW5GYW1pbHkubWVtYmVyc1twaWNrdXAuZ3VuSWRdO1xuICAgICAgcGlja3VwLmFjdG9yLmxhYmVsID0gc2hhcGVMYWJlbChndW4ubGFiZWwsIFwiYWJvdmVcIiwgMTAsIDcpO1xuICAgICAgcGlja3VwLmFjdG9yLmNvbG9yID0gbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGlja3VwLmFjdG9yLCBwaWNrdXAueCwgcGlja3VwLnksIDE1LCBiaWxsYm9hcmRPcmllbnRhdGlvbih0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHBpY2t1cC54LCBwaWNrdXAueSwgbm93KSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLm11bHRpcGxpZXJzKSB7XG4gICAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzW3BpY2t1cC5tdWx0aXBsaWVySWRdO1xuICAgICAgcGlja3VwLmFjdG9yLmxhYmVsID0gc2hhcGVMYWJlbChgJHtzcGVjLnNxdWFkQWRkZWQgKyAxfXhgLCBcImNlbnRlclwiLCAxMSwgMCk7XG4gICAgICBwaWNrdXAuYWN0b3IuY29sb3IgPSBuZW9uUGFsZXR0ZVtzcGVjLnBpY2t1cENvbG9yXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShwaWNrdXAuYWN0b3IsIHBpY2t1cC54LCBwaWNrdXAueSwgMTYsIGJpbGxib2FyZE9yaWVudGF0aW9uKHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgcGlja3VwLngsIHBpY2t1cC55LCBub3cpKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdEhlbGljb3B0ZXJTY2VuZShwcmltaXRpdmVzLCBzaGFwZUluc3RhbmNlcywgdGhpcy5lbmVteUV4aXRFZmZlY3RzLm1hcChlbmVteUV4aXRDbG91ZCksIHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCk7XG4gICAgcHJvamVjdGVkLnByaW1pdGl2ZXMucHVzaCguLi5wcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoZW5lbXlIZWFsdGhCYXJzLCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihwcm9qZWN0ZWQsIG5vdyAvIDEwMDApO1xuICB9XG5cbiAgc25hcHNob3QoKTogTmVvblN3YXJtU25hcHNob3Qge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBhY3RpdmVUcmFjazogdGhpcy5hY3RpdmVUcmFjayAhPT0gbnVsbCxcbiAgICAgIGNvbWJhdE5vdzogdGhpcy5jb21iYXROb3csXG4gICAgICBjb21iYXRFbGFwc2VkOiB0aGlzLmNvbWJhdEVsYXBzZWQsXG4gICAgICBzY2VuZUlkOiB0aGlzLnRyYWNrU2NlbmVJZCxcbiAgICAgIHNxdWFkOiB7XG4gICAgICAgIGxhbmU6IHRoaXMuc3F1YWQubGFuZSxcbiAgICAgICAgY291bnQ6IHRoaXMuc3F1YWQuY291bnQsXG4gICAgICAgIHg6IHRoaXMuc3F1YWQueCxcbiAgICAgICAgdGFyZ2V0WDogdGhpcy5zcXVhZC50YXJnZXRYLFxuICAgICAgICBhaW1PZmZzZXQ6IHRoaXMuc3F1YWQuYWltT2Zmc2V0LFxuICAgICAgfSxcbiAgICAgIGFjdGl2ZToge1xuICAgICAgICBndW46IHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID8geyAuLi50aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biB9IDogbnVsbCxcbiAgICAgICAgc2hpZWxkOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZD8uc2hpZWxkSWQgPz8gbnVsbCxcbiAgICAgICAgc3dvcmQ6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPyB7IGlkOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkLnN3b3JkSWQsIGxldmVsOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkLmxldmVsIH0gOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGVuZW1pZXM6IHRoaXMuZW5lbWllcy5tYXAoZW5lbXkgPT4gKHtcbiAgICAgICAgaWQ6IGVuZW15LmlkLFxuICAgICAgICBlbmVteUlkOiBlbmVteS5lbmVteUlkLFxuICAgICAgICBsYW5lOiBlbmVteS5sYW5lLFxuICAgICAgICB4OiBlbmVteS54LFxuICAgICAgICB5OiBlbmVteS55LFxuICAgICAgICBoZWFsdGg6IGVuZW15LmhlYWx0aCxcbiAgICAgICAgbWF4SGVhbHRoOiBlbmVteS5tYXhIZWFsdGgsXG4gICAgICAgIGR5aW5nOiBlbmVteS5keWluZyxcbiAgICAgIH0pKSxcbiAgICAgIHBpY2t1cHM6IHtcbiAgICAgICAgZ3VuczogdGhpcy5ndW5QaWNrdXBzLmxlbmd0aCxcbiAgICAgICAgc2hpZWxkczogdGhpcy5zaGllbGRQaWNrdXBzLmxlbmd0aCxcbiAgICAgICAgc3dvcmRzOiB0aGlzLnN3b3JkUGlja3Vwcy5sZW5ndGgsXG4gICAgICAgIG11bHRpcGxpZXJzOiB0aGlzLm11bHRpcGxpZXJzLmxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBraWxsczogdGhpcy5raWxscyxcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wKCk7XG4gICAgdGhpcy5yZW5kZXJlci5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduVHJhY2tFbnRpdGllcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICB3aGlsZSAoXG4gICAgICB0aGlzLm5leHRUcmFja0VudGl0eSA8IHRoaXMudHJhY2tFbnRpdGllcy5sZW5ndGggJiZcbiAgICAgIHRoaXMuZW50aXR5QXJyaXZhbFNlY29uZHModGhpcy50cmFja0VudGl0aWVzW3RoaXMubmV4dFRyYWNrRW50aXR5XSkgPD0gdGhpcy5jb21iYXRFbGFwc2VkICsgdGhpcy5zcGF3bkxlYWRTZWNvbmRzKHRoaXMudHJhY2tFbnRpdGllc1t0aGlzLm5leHRUcmFja0VudGl0eV0pXG4gICAgKSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLnRyYWNrRW50aXRpZXNbdGhpcy5uZXh0VHJhY2tFbnRpdHkrK107XG4gICAgICBjb25zdCBsYW5lOiBMYW5lID0gZW50aXR5LnNpZGUgPT09IFwibGVmdFwiID8gMCA6IDE7XG4gICAgICBjb25zdCBlbmVteURlZmluaXRpb25FbnRyeSA9IGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGVudGl0eS5pZCk7XG4gICAgICBpZiAoZW5lbXlEZWZpbml0aW9uRW50cnkpIHtcbiAgICAgICAgY29uc3QgeyBlbmVteUlkLCBkZWZpbml0aW9uIH0gPSBlbmVteURlZmluaXRpb25FbnRyeTtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goe1xuICAgICAgICAgIGlkOiArK3RoaXMuZW50aXR5SWRDb3VudGVyLFxuICAgICAgICAgIGVuZW15VHlwZTogZW5lbXlJZCxcbiAgICAgICAgICBlbmVteUlkLFxuICAgICAgICAgIGxhbmUsXG4gICAgICAgICAgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksXG4gICAgICAgICAgeTogdGhpcy5lbmVteVNwYXduWShlbnRpdHkpLFxuICAgICAgICAgIGhlYWx0aDogZGVmaW5pdGlvbi5oZWFsdGggKiB0aGlzLmFjdGl2ZVRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLFxuICAgICAgICAgIG1heEhlYWx0aDogZGVmaW5pdGlvbi5oZWFsdGggKiB0aGlzLmFjdGl2ZVRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllcixcbiAgICAgICAgICByb3dJZDogZW50aXR5LnJvd0luZGV4LFxuICAgICAgICAgIGFjdG9yOiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQpLFxuICAgICAgICAgIGR5aW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLnNwYXduU291bmQpIHRoaXMucGxheShkZWZpbml0aW9uLnNwYXduU291bmQpO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uZ3VuLlwiKSkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBlbnRpdHkuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmd1bi5cIi5sZW5ndGgpO1xuICAgICAgICBpZiAoIShjYW5kaWRhdGUgaW4gZ3VuRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBndW4gaWQgXCIke2VudGl0eS5pZH1cIi5gKTtcbiAgICAgICAgdGhpcy5zcGF3bkd1blBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWShlbnRpdHkpLCBndW5JZDogY2FuZGlkYXRlIGFzIEd1bklkLCBsZXZlbDogMSwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiKSkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBlbnRpdHkuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIi5sZW5ndGgpO1xuICAgICAgICBpZiAoIShjYW5kaWRhdGUgaW4gc2hpZWxkRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBzaGllbGQgaWQgXCIke2VudGl0eS5pZH1cIi5gKTtcbiAgICAgICAgdGhpcy5zcGF3blNoaWVsZFBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWShlbnRpdHkpLCBzaGllbGRJZDogY2FuZGlkYXRlIGFzIFNoaWVsZElkLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zd29yZC5cIikpIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gZW50aXR5LmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5zd29yZC5cIi5sZW5ndGgpO1xuICAgICAgICBpZiAoIShjYW5kaWRhdGUgaW4gc3dvcmRGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgdXNlcyB1bmtub3duIHN3b3JkIGlkIFwiJHtlbnRpdHkuaWR9XCIuYCk7XG4gICAgICAgIHRoaXMuc3Bhd25Td29yZFBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWShlbnRpdHkpLCBzd29yZElkOiBjYW5kaWRhdGUgYXMgU3dvcmRJZCwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHtcbiAgICAgICAgdGhpcy5zcGF3bk11bHRpcGxpZXJQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoZW50aXR5KSwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBlbnRpdHkgaWQgXCIke2VudGl0eS5pZH1cIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBsYW5lIHJ1bm5lci5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYWNrUmVzb2x2ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFRyYWNrRW50aXR5ID49IHRoaXMudHJhY2tFbnRpdGllcy5sZW5ndGhcbiAgICAgICYmIHRoaXMuZW5lbWllcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMuZ3VuUGlja3Vwcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMuc2hpZWxkUGlja3Vwcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMuc3dvcmRQaWNrdXBzLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgdGhpcy5tdWx0aXBsaWVycy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBwcml2YXRlIGZpcmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bikgcmV0dXJuO1xuICAgIGNvbnN0IHsgaWQ6IGd1bklkLCBsZXZlbDogZ3VuTGV2ZWwgfSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuO1xuICAgIGNvbnN0IGd1biA9IGd1bkZhbWlseS5tZW1iZXJzW2d1bklkXTtcbiAgICBjb25zdCB0dW5pbmcgPSBndW4ubGV2ZWxzLmZpbmQoaXRlbSA9PiBpdGVtLmxldmVsID09PSBndW5MZXZlbCkgPz8gZ3VuLmxldmVsc1swXTtcbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgdGhpcy5zY2FsZSgpKS5tYXAocG9pbnQgPT4gKHsgeDogcG9pbnQueCwgeTogdGhpcy5wbGF5ZXJZKCkgLSAyMCAqIHRoaXMuc2NhbGUoKSB9KSk7XG4gICAgdGhpcy5ndW5TaW11bGF0aW9uLmZpcmUoZ3VuLCB0dW5pbmcsIHRoaXMucGxheWVyTGFuZSwgcG9pbnRzLCB0aGlzLmNvbWJhdE5vdywgdGhpcy5zY2FsZSgpKTtcbiAgICB0aGlzLmNvb2xkb3duICs9IDEgLyB0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQ7XG4gICAgdGhpcy5wbGF5R3VuRmlyZShndW5JZCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb2plY3RpbGVzKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmd1blNpbXVsYXRpb24udXBkYXRlUHJvamVjdGlsZXMoZGVsdGEsIHRoaXMuY29tYmF0Tm93LCB0aGlzLmVuZW1pZXMubWFwKGVuZW15ID0+IE9iamVjdC5hc3NpZ24oZW5lbXksIHtcbiAgICAgIHJhZGl1czogdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSxcbiAgICB9KSksIHsgdG9wOiAtNDAgKiB0aGlzLnNjYWxlKCksIGxlZnQ6IC00MCwgcmlnaHQ6IHRoaXMuY2FudmFzLndpZHRoICsgNDAgfSwgKHNob3QsIGVuZW15KSA9PiB7XG4gICAgICBjb25zdCBnYW1lRW5lbXkgPSBlbmVteSBhcyBFbmVteSAmIHsgcmFkaXVzOiBudW1iZXIgfTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc29sdmVFbmVteURhbWFnZSh7XG4gICAgICAgIGVuZW15OiBnYW1lRW5lbXksXG4gICAgICAgIGVmZmVjdHM6IHRoaXMuZW5lbXlFeGl0RWZmZWN0cyxcbiAgICAgICAgaW1wYWN0TWFnbml0dWRlOiBzaG90LmRhbWFnZSArIHNob3Qua25vY2tiYWNrICogLjA2LFxuICAgICAgICBjb2xvcjogdGhpcy5lbmVteUV4aXRDb2xvcihnYW1lRW5lbXkpLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0LmtpbGxlZCkge1xuICAgICAgICB0aGlzLmtpbGxzKys7XG4gICAgICAgIHRoaXMucGxheShyZXN1bHQuZGVmaW5pdGlvbi5kZWF0aFNvdW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheShcIlByb2plY3RpbGVIaXRcIik7XG4gICAgICAgIHRoaXMucGxheShcIkVuZW15SGl0XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVOZWFyUGxheWVyRWZmZWN0cyhkZWx0YTogbnVtYmVyLCBzaGllbGREZWY6ICh0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnMpW1NoaWVsZElkXSB8IG51bGwsIHN3b3JkRGVmOiBTd29yZE1lbWJlciB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCBweCA9IHRoaXMuc3F1YWQueDtcbiAgICBjb25zdCBweSA9IHRoaXMucGxheWVyWSgpO1xuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCAmJiBzaGllbGREZWYpIHtcbiAgICAgIGNvbnN0IHNoaWVsZFN0YXRlID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQ7XG4gICAgICBjb25zdCBzaGllbGRUaHJlYXRzID0gcXVlcnlOZWFyYnlUaHJlYXRzKHRoaXMuZW5lbWllcywge1xuICAgICAgICBvcmlnaW46IHsgeDogcHgsIHk6IHB5IH0sXG4gICAgICAgIGxhbmU6IHRoaXMucGxheWVyTGFuZSxcbiAgICAgICAgcmFuZ2U6IHNoaWVsZERlZi5yYWRpdXMgKiB0aGlzLnNjYWxlKCksXG4gICAgICAgIGluY2x1ZGVBZGphY2VudExhbmVzOiBmYWxzZSxcbiAgICAgICAgcHVycG9zZTogXCJzaGllbGRcIixcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzaGllbGRSZXN1bHQgPSB0aWNrU2hpZWxkKHNoaWVsZFN0YXRlLCBzaGllbGREZWYsIHNoaWVsZFRocmVhdHMsIHB4LCBweSwgdGhpcy5jb21iYXROb3csIGRlbHRhKTtcbiAgICAgIGlmIChzaGllbGRSZXN1bHQucHVzaEVuZW15SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBlbmVteSBvZiB0aGlzLmVuZW1pZXMpIHtcbiAgICAgICAgICBpZiAoIXNoaWVsZFJlc3VsdC5wdXNoRW5lbXlJZHMuaW5jbHVkZXMoZW5lbXkuaWQpKSBjb250aW51ZTtcbiAgICAgICAgICBjb25zdCBkeCA9IGVuZW15LnggLSBweDtcbiAgICAgICAgICBjb25zdCBkeSA9IGVuZW15LnkgLSBweTtcbiAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IDE7XG4gICAgICAgICAgZW5lbXkueCArPSAoZHggLyBkaXN0KSAqIHNoaWVsZFJlc3VsdC5wdXNoRGlzdGFuY2UgKiB0aGlzLnNjYWxlKCk7XG4gICAgICAgICAgZW5lbXkueSArPSAoZHkgLyBkaXN0KSAqIHNoaWVsZFJlc3VsdC5wdXNoRGlzdGFuY2UgKiB0aGlzLnNjYWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5KFwiU2hpZWxkUHVsc2VcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpZWxkUmVzdWx0LmNvbnRhY3REYW1hZ2VFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW5lbXkgb2YgWy4uLnRoaXMuZW5lbWllc10pIHtcbiAgICAgICAgICBpZiAoZW5lbXkuZHlpbmcgfHwgIXNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlRW5lbXlJZHMuaW5jbHVkZXMoZW5lbXkuaWQpKSBjb250aW51ZTtcbiAgICAgICAgICBlbmVteS5oZWFsdGggLT0gc2hpZWxkUmVzdWx0LmNvbnRhY3REYW1hZ2VBbW91bnQgKiBkZWx0YTtcbiAgICAgICAgICBpZiAoZW5lbXkuaGVhbHRoIDw9IDApIHRoaXMuZGVzdHJveUVuZW15KGVuZW15KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkICYmIHN3b3JkRGVmKSB7XG4gICAgICBjb25zdCBzd29yZFN0YXRlID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZDtcbiAgICAgIGNvbnN0IHN3b3JkUXVlcnlSYW5nZSA9IHN3b3JkRGVmLnJvd1JlYWNoXG4gICAgICAgID8gTWF0aC5tYXgodGhpcy5jYW52YXMud2lkdGgsIHN3b3JkRGVmLnJhbmdlICogdGhpcy5zY2FsZSgpKVxuICAgICAgICA6IHN3b3JkRGVmLnJhbmdlICogdGhpcy5zY2FsZSgpO1xuICAgICAgY29uc3Qgc3dvcmRUaHJlYXRzID0gcXVlcnlOZWFyYnlUaHJlYXRzKHRoaXMuZW5lbWllcywge1xuICAgICAgICBvcmlnaW46IHsgeDogcHgsIHk6IHB5IH0sXG4gICAgICAgIGxhbmU6IHRoaXMucGxheWVyTGFuZSxcbiAgICAgICAgcmFuZ2U6IHN3b3JkUXVlcnlSYW5nZSxcbiAgICAgICAgaW5jbHVkZUFkamFjZW50TGFuZXM6IChzd29yZERlZi50YXJnZXRpbmdNb2RlIGFzIFN3b3JkVGFyZ2V0aW5nTW9kZSkgPT09IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiLFxuICAgICAgICBtYXhUYXJnZXRzOiBzd29yZERlZi5yb3dSZWFjaCA/IHVuZGVmaW5lZCA6IHN3b3JkRGVmLm1heFRhcmdldHMsXG4gICAgICAgIHB1cnBvc2U6IFwic3dvcmRcIixcbiAgICAgIH0pLmZpbHRlcih0aHJlYXQgPT4gIXN3b3JkRGVmLnJvd1JlYWNoIHx8IE1hdGguYWJzKHRocmVhdC50YXJnZXQueSAtIHB5KSA8PSBzd29yZERlZi5yYW5nZSAqIHRoaXMuc2NhbGUoKSk7XG4gICAgICBjb25zdCBzd29yZFJlc3VsdCA9IHRpY2tTd29yZChzd29yZFN0YXRlLCBzd29yZERlZiwgc3dvcmRUaHJlYXRzLCBweCwgcHksIHRoaXMuY29tYmF0Tm93LCBkZWx0YSwgbmVvblBhbGV0dGVbc3dvcmREZWYuY29sb3JdLCBzd29yZFZpc3VhbER1cmF0aW9uTXModGhpcy5zd29yZFZpc3VhbFR1bmluZyksIHRoaXMuc3F1YWQuY291bnQpO1xuICAgICAgaWYgKHN3b3JkUmVzdWx0LnN3aW5nVHJpZ2dlcmVkICYmIHN3b3JkUmVzdWx0LmhpdEVuZW15SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5hcHBseVBlbmRpbmdTd29yZERhbWFnZSh7IGZvcmNlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnBsYXkoXCJTd29yZFN3aW5nV2hvb3NoXCIpO1xuICAgICAgICB0aGlzLnBlbmRpbmdTd29yZERhbWFnZSA9IHtcbiAgICAgICAgICBoaXRzOiB0aGlzLnNjaGVkdWxlU3dvcmRIaXRzKHN3b3JkUmVzdWx0LmhpdFRhcmdldHMsIHN3b3JkU3RhdGUucHJldmlvdXNTbGFzaFNpZGUpLFxuICAgICAgICAgIGRhbWFnZTogc3dvcmRSZXN1bHQuZGFtYWdlLFxuICAgICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtzd29yZERlZi5jb2xvcl0sXG4gICAgICAgICAgaW1wYWN0U291bmRJZDogc3dvcmRJbXBhY3RTb3VuZElkc1tzd29yZFN0YXRlLnN3b3JkSWRdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5hcHBseVBlbmRpbmdTd29yZERhbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2NoZWR1bGVTd29yZEhpdHModGFyZ2V0czogQXJyYXk8eyBpZDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9Piwgc2lkZTogLTEgfCAxKTogQXJyYXk8eyBlbmVteUlkOiBudW1iZXI7IGR1ZUF0OiBudW1iZXIgfT4ge1xuICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gc3dvcmRWaXN1YWxEdXJhdGlvbk1zKHRoaXMuc3dvcmRWaXN1YWxUdW5pbmcpO1xuICAgIGNvbnN0IHhzID0gdGFyZ2V0cy5tYXAodGFyZ2V0ID0+IHRhcmdldC54KTtcbiAgICBjb25zdCBtaW5YID0gTWF0aC5taW4oLi4ueHMpO1xuICAgIGNvbnN0IG1heFggPSBNYXRoLm1heCguLi54cyk7XG4gICAgY29uc3Qgc3BhbiA9IE1hdGgubWF4KDEsIG1heFggLSBtaW5YKTtcbiAgICBjb25zdCBsZWZ0VG9SaWdodCA9IHNpZGUgPT09IDE7XG4gICAgcmV0dXJuIHRhcmdldHMubWFwKHRhcmdldCA9PiB7XG4gICAgICBjb25zdCBsYW5lUHJvZ3Jlc3MgPSBsZWZ0VG9SaWdodFxuICAgICAgICA/ICh0YXJnZXQueCAtIG1pblgpIC8gc3BhblxuICAgICAgICA6IChtYXhYIC0gdGFyZ2V0LngpIC8gc3BhbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZW15SWQ6IHRhcmdldC5pZCxcbiAgICAgICAgZHVlQXQ6IHRoaXMuY29tYmF0Tm93ICsgZHVyYXRpb24gKiB0aGlzLnN3b3JkU3RyaWtlUHJvZ3Jlc3MobGFuZVByb2dyZXNzKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN3b3JkU3RyaWtlUHJvZ3Jlc3MobGFuZVByb2dyZXNzID0gLjcyKTogbnVtYmVyIHtcbiAgICBjb25zdCB0dW5pbmcgPSB0aGlzLnN3b3JkVmlzdWFsVHVuaW5nO1xuICAgIGNvbnN0IHN0cmlrZSA9IHR1bmluZy5zdHJpa2VEdXJhdGlvbiA/PyAuMzE7XG4gICAgY29uc3QgZm9sbG93VGhyb3VnaCA9IHR1bmluZy5mb2xsb3dUaHJvdWdoRHVyYXRpb24gPz8gLjE4O1xuICAgIGNvbnN0IHRvdGFsID0gTWF0aC5tYXgoLjAxLCBzdHJpa2UgKyBmb2xsb3dUaHJvdWdoKTtcbiAgICBjb25zdCBjbGFtcGVkTGFuZVByb2dyZXNzID0gTWF0aC5tYXgoLjE4LCBNYXRoLm1pbiguODgsIGxhbmVQcm9ncmVzcykpO1xuICAgIHJldHVybiBNYXRoLm1pbiguOTUsIChzdHJpa2UgKiBjbGFtcGVkTGFuZVByb2dyZXNzKSAvIHRvdGFsKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlQZW5kaW5nU3dvcmREYW1hZ2Uob3B0aW9uczogeyBmb3JjZT86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XG4gICAgY29uc3QgcGVuZGluZyA9IHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlO1xuICAgIGlmICghcGVuZGluZykgcmV0dXJuO1xuICAgIGNvbnN0IGR1ZUhpdHMgPSBvcHRpb25zLmZvcmNlXG4gICAgICA/IHBlbmRpbmcuaGl0c1xuICAgICAgOiBwZW5kaW5nLmhpdHMuZmlsdGVyKGhpdCA9PiB0aGlzLmNvbWJhdE5vdyA+PSBoaXQuZHVlQXQpO1xuICAgIGlmIChkdWVIaXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGR1ZUVuZW15SWRzID0gZHVlSGl0cy5tYXAoaGl0ID0+IGhpdC5lbmVteUlkKTtcbiAgICBwZW5kaW5nLmhpdHMgPSBwZW5kaW5nLmhpdHMuZmlsdGVyKGhpdCA9PiAhZHVlRW5lbXlJZHMuaW5jbHVkZXMoaGl0LmVuZW15SWQpKTtcbiAgICBpZiAocGVuZGluZy5oaXRzLmxlbmd0aCA9PT0gMCkgdGhpcy5wZW5kaW5nU3dvcmREYW1hZ2UgPSBudWxsO1xuICAgIGxldCBpbXBhY3RlZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgZW5lbXkgb2YgWy4uLnRoaXMuZW5lbWllc10pIHtcbiAgICAgIGlmIChlbmVteS5keWluZyB8fCAhZHVlRW5lbXlJZHMuaW5jbHVkZXMoZW5lbXkuaWQpKSBjb250aW51ZTtcbiAgICAgIGltcGFjdGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc29sdmVFbmVteURhbWFnZSh7XG4gICAgICAgIGVuZW15LFxuICAgICAgICBlZmZlY3RzOiB0aGlzLmVuZW15RXhpdEVmZmVjdHMsXG4gICAgICAgIGRhbWFnZTogcGVuZGluZy5kYW1hZ2UsXG4gICAgICAgIGltcGFjdE1hZ25pdHVkZTogcGVuZGluZy5kYW1hZ2UsXG4gICAgICAgIGNvbG9yOiBwZW5kaW5nLmNvbG9yLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0LmtpbGxlZCkge1xuICAgICAgICB0aGlzLmtpbGxzKys7XG4gICAgICAgIHRoaXMucGxheShyZXN1bHQuZGVmaW5pdGlvbi5kZWF0aFNvdW5kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGltcGFjdGVkKSB0aGlzLnBsYXkocGVuZGluZy5pbXBhY3RTb3VuZElkKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRW5lbWllcyhkZWx0YTogbnVtYmVyLCBzaGllbGREZWY6ICh0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnMpW1NoaWVsZElkXSB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCBzbG93RW5lbXlJZHMgPSBuZXcgU2V0PG51bWJlcj4oKTtcbiAgICBjb25zdCBweCA9IHRoaXMuc3F1YWQueDtcbiAgICBjb25zdCBweSA9IHRoaXMucGxheWVyWSgpO1xuICAgIGZvciAoY29uc3QgZW5lbXkgb2YgWy4uLnRoaXMuZW5lbWllc10pIHtcbiAgICAgIGVuZW15LmFjdG9yLnNldFZlbG9jaXR5KDAsIDApLnVwZGF0ZShkZWx0YSk7XG4gICAgICBjb25zdCBlZmZlY3RpdmUgPSBzbG93RW5lbXlJZHMuaGFzKGVuZW15LmlkKVxuICAgICAgICA/IGVuZW15LnNwZWVkTXVsdGlwbGllciAqIChzaGllbGREZWY/LnNsb3dNdWx0aXBsaWVyID8/IDEpXG4gICAgICAgIDogZW5lbXkuc3BlZWRNdWx0aXBsaWVyO1xuICAgICAgZW5lbXkueSArPSB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkuc3BlZWQgKiBlZmZlY3RpdmUgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YSAtIGVuZW15LmFjdG9yLnkgKiB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLjU7XG4gICAgICBlbmVteS5hY3Rvci5tb3ZlVG8oMCwgMCk7XG4gICAgICBpZiAoZW5lbXkuZHlpbmcgJiYgZW5lbXkuYWN0b3IuZGlzcG9zZWQpIHtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmVteS5keWluZykgY29udGludWU7XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCAmJiBzaGllbGREZWYpIHtcbiAgICAgICAgY29uc3Qgc2hpZWxkQ29udGFjdCA9IHJlc29sdmVTaGllbGRDb250YWN0KHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkLCBzaGllbGREZWYsIE9iamVjdC5hc3NpZ24oZW5lbXksIHtcbiAgICAgICAgICByYWRpdXM6IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5yYWRpdXMgKiB0aGlzLnNjYWxlKCksXG4gICAgICAgIH0pLCBweCwgcHksIHRoaXMuY29tYmF0Tm93LCB0aGlzLnNjYWxlKCkpO1xuICAgICAgICBpZiAoc2hpZWxkQ29udGFjdC5hYnNvcmJlZCkge1xuICAgICAgICAgIGlmIChzaGllbGRDb250YWN0LmVuZW15RGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lFbmVteShlbmVteSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZW15LmFjdG9yLmltcGFjdCh7IGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sIG1hZ25pdHVkZTogc2hpZWxkQ29udGFjdC5kYW1hZ2VBYnNvcmJlZCAvIHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5pbXBhY3RSZXNpc3RhbmNlIH0pO1xuICAgICAgICAgICAgdGhpcy5wbGF5KFwiU2hpZWxkSW1wYWN0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wZW5kaW5nU3dvcmREYW1hZ2U/LmhpdHMuc29tZShoaXQgPT4gaGl0LmVuZW15SWQgPT09IGVuZW15LmlkKSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGhpdEluZGV4ID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHRoaXMuc2NhbGUoKSkuZmluZEluZGV4KHBvaW50ID0+IE1hdGguaHlwb3QocG9pbnQueCAtIGVuZW15LngsIHBvaW50LnkgLSBlbmVteS55KSA8PSB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogMy4yKTtcbiAgICAgIGlmIChoaXRJbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHRoaXMuc2NhbGUoKSlbaGl0SW5kZXhdO1xuICAgICAgICBjb25zdCBhY3RvciA9IHRoaXMucGxheWVyQWN0b3JzW2hpdEluZGV4XSA/PyBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pO1xuICAgICAgICBhY3Rvci5leHBsb2RlTWFnbml0dWRlID0gLjU1O1xuICAgICAgICBhY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xuICAgICAgICB0aGlzLmV4cGxvZGluZ1BsYXllcnMucHVzaCh7IGFjdG9yLCB4OiBwb2ludC54LCB5OiBwb2ludC55IH0pO1xuICAgICAgICB0aGlzLnBsYXllckFjdG9ycy5zcGxpY2UoaGl0SW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNxdWFkLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgIHRoaXMucGxheShcIlBsYXllckRhbWFnZVwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiU3F1YWRNZW1iZXJMb3N0XCIpO1xuICAgICAgICBpZiAodGhpcy5zcXVhZC5jb3VudCA9PT0gMSkgdGhpcy5wbGF5KFwiTG93SGVhbHRoV2FybmluZ1wiKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJnYW1lXCIgJiYgdGhpcy5zcXVhZC5jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlYXNvbiA9IFwiVGhlIGVudGlyZSBzcXVhZCB3YXMgZGVzdHJveWVkIG9uIGNvbnRhY3QuXCI7XG4gICAgICAgICAgdGhpcy5maW5pc2goZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZW15LnkgPj0gdGhpcy5wbGF5ZXJZKCkpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJnYW1lXCIpIHtcbiAgICAgICAgICB0aGlzLmJyZWFjaGVzKys7XG4gICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICAgIHRoaXMucGxheShcIkVuZW15RXNjYXBlZFwiKTtcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZWFzb24gPSBcIkFuIGVuZW15IHBhc3NlZCB0aGUgZGVmZW5zZSBsaW5lLlwiO1xuICAgICAgICAgIHRoaXMuZmluaXNoKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZW15LnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQgKyB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogMikgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGlja3VwcyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnRoaXMuZ3VuUGlja3Vwc10pIHtcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0geyBpZDogcGlja3VwLmd1bklkLCBsZXZlbDogcGlja3VwLmxldmVsIH07XG4gICAgICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgICAgICB0aGlzLmd1blBpY2t1cHMuc3BsaWNlKHRoaXMuZ3VuUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBHdW5cIik7XG4gICAgICAgIHRoaXMucGxheShcIldlYXBvblJlYWR5XCIpO1xuICAgICAgfSBlbHNlIGlmIChwaWNrdXAueSA+IHRoaXMuY2FudmFzLmhlaWdodCkgdGhpcy5ndW5QaWNrdXBzLnNwbGljZSh0aGlzLmd1blBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5zaGllbGRQaWNrdXBzXSkge1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIGNvbnN0IGRlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zaGllbGRJZF07XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbmV3IFNoaWVsZFN0YXRlKHBpY2t1cC5zaGllbGRJZCwgZGVmLm1heENoYXJnZXMpO1xuICAgICAgICB0aGlzLnNoaWVsZFBpY2t1cHMuc3BsaWNlKHRoaXMuc2hpZWxkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTaGllbGRcIik7XG4gICAgICAgIHRoaXMucGxheShcIlNoaWVsZFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMuc2hpZWxkUGlja3Vwcy5zcGxpY2UodGhpcy5zaGllbGRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnRoaXMuc3dvcmRQaWNrdXBzXSkge1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkO1xuICAgICAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkID0gbmV3IFN3b3JkU3RhdGUocGlja3VwLnN3b3JkSWQsIGN1cnJlbnQ/LnN3b3JkSWQgPT09IHBpY2t1cC5zd29yZElkID8gY3VycmVudC5sZXZlbCArIDEgOiAxKTtcbiAgICAgICAgdGhpcy5zd29yZFBpY2t1cHMuc3BsaWNlKHRoaXMuc3dvcmRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFN3b3JkXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJXZWFwb25SZWFkeVwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMuc3dvcmRQaWNrdXBzLnNwbGljZSh0aGlzLnN3b3JkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLm11bHRpcGxpZXJzXSkge1xuICAgICAgcGlja3VwLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgdGhpcy5zcXVhZC5hZGQobXVsdGlwbGllckZhbWlseS5tZW1iZXJzW3BpY2t1cC5tdWx0aXBsaWVySWRdLnNxdWFkQWRkZWQpO1xuICAgICAgICB0aGlzLnN5bmNQbGF5ZXJBY3RvcnMoKTtcbiAgICAgICAgdGhpcy5tdWx0aXBsaWVycy5zcGxpY2UodGhpcy5tdWx0aXBsaWVycy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBNdWx0aXBsaWVyXCIpO1xuICAgICAgfSBlbHNlIGlmIChwaWNrdXAueSA+IHRoaXMuY2FudmFzLmhlaWdodCkgdGhpcy5tdWx0aXBsaWVycy5zcGxpY2UodGhpcy5tdWx0aXBsaWVycy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluaXNoKHdvbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIGNvbnN0IHRpdGxlID0gd29uID8gXCJGTEFXTEVTUyBSVU5cIiA6IFwiVFJBQ0sgRkFJTEVEXCI7XG4gICAgY29uc3QgZGV0YWlsID0gd29uID8gXCJObyBlbmVteSB0b3VjaGVkIG9yIGVzY2FwZWQgcGFzdCB5b3UuXCIgOiB0aGlzLmZhaWx1cmVSZWFzb24gfHwgYCR7dGhpcy5icmVhY2hlc30gZW5lbXkke3RoaXMuYnJlYWNoZXMgPT09IDEgPyBcIlwiIDogXCJpZXNcIn0gYnJlYWNoZWQgdGhlIGRlZmVuc2UuYDtcbiAgICBpZiAod29uKSB7XG4gICAgICB0aGlzLnZpY3RvcnkgPSBuZXcgTmVvblZpY3RvcnlFeHBlcmllbmNlKHtcbiAgICAgICAgY2VudGVyWDogdGhpcy5jYW52YXMud2lkdGggLyAyLFxuICAgICAgICBjZW50ZXJZOiB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuMzgsXG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHBhcnRpY2xlQ291bnQ6IDEyMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wbGF5KFwiUHV6emxlQ29tcGxldGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheShcIkdhbWVPdmVyXCIpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZVRyYWNrID0gbnVsbDtcbiAgICB0aGlzLm9uRmluaXNoPy4oeyB3b24sIHRpdGxlLCBkZXRhaWwsIGJyZWFjaGVzOiB0aGlzLmJyZWFjaGVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jUGxheWVyQWN0b3JzKCk6IHZvaWQge1xuICAgIHdoaWxlICh0aGlzLnBsYXllckFjdG9ycy5sZW5ndGggPCB0aGlzLnNxdWFkLmNvdW50KSB0aGlzLnBsYXllckFjdG9ycy5wdXNoKG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSkpO1xuICAgIGlmICh0aGlzLnBsYXllckFjdG9ycy5sZW5ndGggPiB0aGlzLnNxdWFkLmNvdW50KSB0aGlzLnBsYXllckFjdG9ycy5sZW5ndGggPSB0aGlzLnNxdWFkLmNvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVNjZW5lQmFja2dyb3VuZCgpOiB2b2lkIHtcbiAgICBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQodGhpcy5zdGFnZUVsZW1lbnQsIHRoaXMudHJhY2tTY2VuZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5lbXlFeGl0Q29sb3IoZW5lbXk6IEVuZW15KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5lbXkuYWN0b3IuY29sb3IgPz8gZW5lbXkuYWN0b3Iuc2hhcGUuY29sb3I7XG4gIH1cblxuICBwcml2YXRlIGVuZW15RGVmaW5pdGlvbihlbmVteTogRW5lbXkpOiAodHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzKVtPcmJJZF0ge1xuICAgIHJldHVybiBvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUVuZW15KGVuZW15OiBFbmVteSk6IHZvaWQge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZlYXRFbmVteShlbmVteSwgdGhpcy5lbmVteUV4aXRFZmZlY3RzLCB0aGlzLmVuZW15RXhpdENvbG9yKGVuZW15KSk7XG4gICAgdGhpcy5raWxscysrO1xuICAgIHRoaXMucGxheShkZWZpbml0aW9uLmRlYXRoU291bmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlYKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmxhbmVYKGVudGl0eS5zaWRlID09PSBcImxlZnRcIiA/IDAgOiAxKSArIChlbnRpdHkubGFuZUluZGV4IC0gMiArIChlbnRpdHkuY29sdW1uU3BhbiAtIDEpIC8gMikgKiAxNSAqIHRoaXMuc2NhbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5U3BlZWQoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIChlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZChlbnRpdHkuaWQpPy5kZWZpbml0aW9uLnNwZWVkID8/IDcyKSAqIGVudGl0eS5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGVuZW15U3Bhd25ZKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBsYXllclkoKSAtIHRoaXMuZW50aXR5U3BlZWQoZW50aXR5KSAqIHRoaXMuc3Bhd25MZWFkU2Vjb25kcyhlbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwaWNrdXBTcGF3blkoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyWSgpIC0gdGhpcy5lbnRpdHlTcGVlZChlbnRpdHkpICogdGhpcy5zcGF3bkxlYWRTZWNvbmRzKGVudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduTGVhZFNlY29uZHMoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgY29uc3QgYXJyaXZhbFNlY29uZHMgPSB0aGlzLmVudGl0eUFycml2YWxTZWNvbmRzKGVudGl0eSk7XG4gICAgcmV0dXJuIE1hdGgubWluKG1heFRyYWNrU3Bhd25MZWFkU2Vjb25kcywgYXJyaXZhbFNlY29uZHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlBcnJpdmFsU2Vjb25kcyhlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gZmlyc3RUcmFja1Jvd0Fycml2YWxTZWNvbmRzICsgTWF0aC5tYXgoMCwgZW50aXR5LmRpc3RhbmNlRnJvbVBsYXllciAtIDEpICogdHJhY2tSb3dUcmF2ZWxTZWNvbmRzO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBhbHRlcm5hdGl2ZXMgPSBzb3VuZEFsdGVybmF0aXZlQ291bnRzW2lkXSA/PyAwO1xuICAgIGlmIChhbHRlcm5hdGl2ZXMgPiAwICYmIHRoaXMuc291bmQ/LnBsYXlSb3RhdGVkKSB0aGlzLnNvdW5kLnBsYXlSb3RhdGVkKGlkLCBhbHRlcm5hdGl2ZXMpO1xuICAgIGVsc2UgdGhpcy5zb3VuZD8ucGxheShpZCk7XG4gIH1cblxuICBwcml2YXRlIHBsYXlHdW5GaXJlKGd1bklkOiBHdW5JZCk6IHZvaWQge1xuICAgIHRoaXMucGxheShndW5GaXJlU291bmRJZHNbZ3VuSWRdKTtcbiAgfVxuXG4gIHByaXZhdGUgcGxheVBpY2t1cChpZDogXCJQaWNrdXBHdW5cIiB8IFwiUGlja3VwU2hpZWxkXCIgfCBcIlBpY2t1cFN3b3JkXCIgfCBcIlBpY2t1cE11bHRpcGxpZXJcIik6IHZvaWQge1xuICAgIHRoaXMucGxheShcIlBpY2t1cFwiKTtcbiAgICB0aGlzLnBsYXkoaWQpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ3VuRmFtaWx5LCBtdWx0aXBsaWVyRmFtaWx5LCBvcmJGYW1pbHksIHR5cGUgR3VuSWQsIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgYmluZFNxdWFkSW5wdXQgfSBmcm9tIFwiLi4vLi4vc3JjL2lucHV0XCI7XG5pbXBvcnQgeyBOZW9uU3dhcm1TaW11bGF0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9zaW11bGF0aW9uL05lb25Td2FybVNpbXVsYXRpb25cIjtcbmltcG9ydCB7IGFwcGx5UG9ydHJhaXRTdGFnZSwgbGFuZVJ1bm5lclZpZXdwb3J0IH0gZnJvbSBcIi4uLy4uL3NyYy92aWV3cG9ydFwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PihcIiNnYW1lLWNhbnZhc1wiKSE7XG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2Vycm9yXCIpITtcbmNvbnN0IGd1blNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI2d1bi1zZWxlY3RcIikhO1xuY29uc3QgbGV2ZWxTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiNsZXZlbC1zZWxlY3RcIikhO1xuY29uc3QgZW5lbXlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiNlbmVteS1zZWxlY3RcIikhO1xuY29uc3Qgd2VhcG9uUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3dlYXBvbi1yZWFkb3V0XCIpITtcbmNvbnN0IHNjb3JlUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Njb3JlLXJlYWRvdXRcIikhO1xuY29uc3Qgc3BlY1JlYWRvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzcGVjLXJlYWRvdXRcIikhO1xuY29uc3QgZm9ybWF0aW9uU2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjZm9ybWF0aW9uLXNpemVcIikhO1xuY29uc3QgZm9ybWF0aW9uUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI2Zvcm1hdGlvbi1yb3dzXCIpITtcbmNvbnN0IGdhbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZ2FtZVwiKSE7XG5jb25zdCBhdWRpb0lkID0gKGlkOiBzdHJpbmcpOiBzdHJpbmcgPT4gYC4uLy4uLy4uLy4uL2F1ZGlvLyR7aWR9YDtcblxuYXBwbHlQb3J0cmFpdFN0YWdlKGdhbWVFbGVtZW50LCBsYW5lUnVubmVyVmlld3BvcnQpO1xuXG50cnkge1xuICBjb25zdCBzaW0gPSBhd2FpdCBOZW9uU3dhcm1TaW11bGF0aW9uLmNyZWF0ZSh7XG4gICAgbW9kZTogXCJsYWJcIixcbiAgICBjYW52YXMsXG4gICAgc3RhZ2VFbGVtZW50OiBnYW1lRWxlbWVudCxcbiAgICBzb3VuZDoge1xuICAgICAgcGxheTogaWQgPT4gd2luZG93LmdhbWVBdWRpbz8ucGxheShhdWRpb0lkKGlkKSksXG4gICAgICBwbGF5Um90YXRlZDogKGlkLCBhbHRlcm5hdGl2ZXMpID0+IHdpbmRvdy5nYW1lQXVkaW8/LnBsYXlSb3RhdGVkKGF1ZGlvSWQoaWQpLCBhbHRlcm5hdGl2ZXMpLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKGd1bkZhbWlseS5tZW1iZXJzKSkgZ3VuU2VsZWN0LmFkZChuZXcgT3B0aW9uKGd1bi5sYWJlbCwgaWQpKTtcbiAgZm9yIChjb25zdCBbaWQsIGVuZW15XSBvZiBPYmplY3QuZW50cmllcyhvcmJGYW1pbHkubWVtYmVycykpIGVuZW15U2VsZWN0LmFkZChuZXcgT3B0aW9uKGVuZW15LmxhYmVsLCBpZCkpO1xuICBndW5TZWxlY3QudmFsdWUgPSBcInB1bHNlUGlzdG9sXCI7XG4gIGVuZW15U2VsZWN0LnZhbHVlID0gXCJiYXNpY09yYlwiO1xuXG4gIGNvbnN0IHNlbGVjdGVkR3VuID0gKCk6IEd1bklkID0+IGd1blNlbGVjdC52YWx1ZSBhcyBHdW5JZDtcbiAgY29uc3Qgc2VsZWN0ZWRMZXZlbCA9ICgpOiBudW1iZXIgPT4gTnVtYmVyKGxldmVsU2VsZWN0LnZhbHVlKTtcbiAgY29uc3Qgc2VsZWN0ZWRFbmVteSA9ICgpOiBPcmJJZCA9PiBlbmVteVNlbGVjdC52YWx1ZSBhcyBPcmJJZDtcbiAgY29uc3QgdXBkYXRlUmVhZG91dCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBndW4gPSBndW5GYW1pbHkubWVtYmVyc1tzZWxlY3RlZEd1bigpXTtcbiAgICBjb25zdCBsZXZlbCA9IGd1bi5sZXZlbHMuZmluZChpdGVtID0+IGl0ZW0ubGV2ZWwgPT09IHNlbGVjdGVkTGV2ZWwoKSkgPz8gZ3VuLmxldmVsc1swXTtcbiAgICBjb25zdCBlbmVteSA9IG9yYkZhbWlseS5tZW1iZXJzW3NlbGVjdGVkRW5lbXkoKV07XG4gICAgY29uc3Qgc25hcHNob3QgPSBzaW0uc25hcHNob3QoKTtcbiAgICB3ZWFwb25SZWFkb3V0LnRleHRDb250ZW50ID0gYCR7Z3VuLmxhYmVsfSBcdTAwQjcgTCR7bGV2ZWwubGV2ZWx9YDtcbiAgICBzY29yZVJlYWRvdXQudGV4dENvbnRlbnQgPSBgS2lsbHMgJHtzbmFwc2hvdC5raWxsc31gO1xuICAgIHNwZWNSZWFkb3V0LmlubmVySFRNTCA9IFtcbiAgICAgIFtcIlBhdHRlcm5cIiwgZ3VuLnNob3RQYXR0ZXJuXSxcbiAgICAgIFtcIkZpcmUgcmF0ZVwiLCBgJHtsZXZlbC5maXJlUmF0ZVBlclNlY29uZH0vc2BdLFxuICAgICAgW1wiRGFtYWdlXCIsIFN0cmluZyhsZXZlbC5kYW1hZ2UpXSxcbiAgICAgIFtcIlNwZWVkXCIsIFN0cmluZyhsZXZlbC5wcm9qZWN0aWxlU3BlZWQpXSxcbiAgICAgIFtcIlJhZGl1c1wiLCBTdHJpbmcobGV2ZWwucHJvamVjdGlsZVJhZGl1cyldLFxuICAgICAgW1wiQnVyc3RcIiwgU3RyaW5nKGxldmVsLmJ1cnN0Q291bnQpXSxcbiAgICAgIFtcIlBpZXJjZVwiLCBTdHJpbmcobGV2ZWwucGllcmNlKV0sXG4gICAgICBbXCJFbmVteVwiLCBlbmVteS5sYWJlbF0sXG4gICAgICBbXCJFbmVteSBIUFwiLCBTdHJpbmcoZW5lbXkuaGVhbHRoKV0sXG4gICAgICBbXCJFbmVteSBzcGVlZFwiLCBTdHJpbmcoZW5lbXkuc3BlZWQpXSxcbiAgICAgIFtcIlNxdWFkXCIsIFN0cmluZyhzbmFwc2hvdC5zcXVhZC5jb3VudCldLFxuICAgIF0ubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgPGR0PiR7bmFtZX08L2R0PjxkZD4ke3ZhbHVlfTwvZGQ+YCkuam9pbihcIlwiKTtcbiAgfTtcblxuICBjb25zdCBlcXVpcCA9ICgpOiB2b2lkID0+IHtcbiAgICBzaW0uZXF1aXBHdW4oc2VsZWN0ZWRHdW4oKSwgc2VsZWN0ZWRMZXZlbCgpKTtcbiAgICB1cGRhdGVSZWFkb3V0KCk7XG4gIH07XG4gIGNvbnN0IHNwYXduRW5lbXkgPSAobGFuZTogMCB8IDEsIHggPSBzaW0ubGFuZVgobGFuZSksIHkgPSAxMDUsIHJvd0lkPzogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgc2ltLnNwYXduRW5lbXkoeyBlbmVteUlkOiBzZWxlY3RlZEVuZW15KCksIGxhbmUsIHgsIHksIHJvd0lkIH0pO1xuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tZW5lbXldXCIpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNwYXduRW5lbXkoTnVtYmVyKGJ1dHRvbi5kYXRhc2V0LnNwYXduRW5lbXkpIGFzIDAgfCAxKSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIltkYXRhLXNwYXduLXBpY2t1cF1cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2ltLnNwYXduR3VuUGlja3VwKHsgZ3VuSWQ6IHNlbGVjdGVkR3VuKCksIGxldmVsOiBzZWxlY3RlZExldmVsKCksIGxhbmU6IE51bWJlcihidXR0b24uZGF0YXNldC5zcGF3blBpY2t1cCkgYXMgMCB8IDEgfSkpO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQnV0dG9uRWxlbWVudD4oXCJbZGF0YS1zcGF3bi1mb3JtYXRpb25dXCIpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxhbmUgPSBOdW1iZXIoYnV0dG9uLmRhdGFzZXQuc3Bhd25Gb3JtYXRpb24pIGFzIDAgfCAxO1xuICAgICAgY29uc3QgY291bnQgPSBOdW1iZXIoZm9ybWF0aW9uU2l6ZS52YWx1ZSk7XG4gICAgICBjb25zdCByb3dzID0gTnVtYmVyKGZvcm1hdGlvblJvd3MudmFsdWUpO1xuICAgICAgY29uc3QgcGVyUm93ID0gTWF0aC5jZWlsKGNvdW50IC8gcm93cyk7XG4gICAgICBsZXQgcmVtYWluaW5nID0gY291bnQ7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICBjb25zdCByb3dJZCA9IHBlcmZvcm1hbmNlLm5vdygpICsgcm93O1xuICAgICAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHBlclJvdywgcmVtYWluaW5nKTtcbiAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgcm93Q291bnQ7IGNvbHVtbisrKSB7XG4gICAgICAgICAgc3Bhd25FbmVteShsYW5lLCBzaW0ubGFuZVgobGFuZSkgKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIDE1LCAxMDUgLSByb3cgKiAyNCwgcm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbWFpbmluZyAtPSByb3dDb3VudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tbXVsdGlwbGllcl1cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2ltLnNwYXduTXVsdGlwbGllclBpY2t1cCh7IGxhbmU6IE51bWJlcihidXR0b24uZGF0YXNldC5zcGF3bk11bHRpcGxpZXIpIGFzIDAgfCAxLCBtdWx0aXBsaWVySWQ6IFwic3F1YWRQbHVzT25lXCIgfSkpO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjc3Bhd24td2F2ZVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzcGF3bkVuZW15KDApO1xuICAgIHNwYXduRW5lbXkoMSk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc3Bhd25FbmVteSgwKSwgNDUwKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzcGF3bkVuZW15KDEpLCA3MDApO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjY2xlYXItc3RhZ2VcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaW0uY2xlYXJTdGFnZSgpKTtcbiAgZ3VuU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXF1aXApO1xuICBsZXZlbFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGVxdWlwKTtcbiAgZW5lbXlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVSZWFkb3V0KTtcblxuICBiaW5kU3F1YWRJbnB1dChnYW1lRWxlbWVudCwge1xuICAgIGxhbmU6ICgpID0+IHNpbS5zbmFwc2hvdCgpLnNxdWFkLmxhbmUsXG4gICAgc2V0TGFuZTogbGFuZSA9PiBzaW0uc2V0U3F1YWRMYW5lKGxhbmUpLFxuICB9KTtcblxuICBzaW0uZXF1aXBHdW4oXCJwdWxzZVBpc3RvbFwiLCAxKTtcbiAgc3Bhd25FbmVteSgwKTtcbiAgc3Bhd25FbmVteSgxKTtcbiAgc2ltLnN0YXJ0TG9vcCgpO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwodXBkYXRlUmVhZG91dCwgMjAwKTtcbiAgdXBkYXRlUmVhZG91dCgpO1xufSBjYXRjaCAoY2F1c2UpIHtcbiAgZXJyb3IuaGlkZGVuID0gZmFsc2U7XG4gIGVycm9yLnRleHRDb250ZW50ID0gY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlLm1lc3NhZ2UgOiBTdHJpbmcoY2F1c2UpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGdhbWVBdWRpbz86IHtcbiAgICAgIHBsYXkoaWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgICBwbGF5Um90YXRlZChpZDogc3RyaW5nLCBhbHRlcm5hdGl2ZXM6IG51bWJlcik6IHZvaWQ7XG4gICAgfTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVFPLElBQU0sZUFBZTtBQUFBLEVBQzFCLHVCQUF1QjtBQUN6QjtBQUVBLElBQUksQ0FBQyxPQUFPLFNBQVMsYUFBYSxxQkFBcUIsS0FBSyxhQUFhLHlCQUF5QixHQUFHO0FBQ25HLFFBQU0sSUFBSSxNQUFNLHVFQUF1RTtBQUN6Rjs7O0FDZE8sSUFBTSxjQUFjO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUNaOzs7QUNPQSxJQUFNLFVBQVUsQ0FBQyxPQUFlLFdBQVcsQ0FBQyxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxNQUNwRSxNQUFNLEtBQUssRUFBRSxRQUFRLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUN0QyxRQUFNLFFBQVEsV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzNDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3BELENBQUM7QUFFSCxJQUFNLE9BQU8s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T0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxLQUFHLEtBQUksR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDM1AsS0FBSyxVQUFVLHNCQUFzQixzQkFBc0IsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxNQUFJLEdBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssR0FBRSxHQUFHLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDM0wsS0FBSyxVQUFVLHVCQUF1Qix1QkFBdUIsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFHLENBQUMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBTSxLQUFJLEdBQUcsQ0FBQyxPQUFLLEtBQUksR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsUUFBTSxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDOVAsS0FBSyxVQUFVLDBCQUEwQiwwQkFBMEIsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxLQUFHLElBQUcs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RyxLQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLEtBQUcsR0FBRSxHQUFFLENBQUMsTUFBSSxHQUFFLENBQUMsR0FBRyxNQUFNO0FBQUEsRUFDckgsS0FBSyxXQUFXLGlCQUFpQixTQUFTLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxLQUFLO0FBQUEsRUFDdEssS0FBSyxXQUFXLGlCQUFpQixTQUFTLFNBQVMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLEtBQUcsSUFBRSxHQUFFLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDeEcsS0FBSyxXQUFXLGdCQUFnQixRQUFRLEtBQUssR0FBRSxJQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNsRixLQUFLLFdBQVcsYUFBYSxVQUFVLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsT0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNO0FBQUEsRUFDMUosS0FBSyxXQUFXLGdC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LENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RSxJQUFNLFFBQVEsQ0FBQyxHQUFPLE1BQWMsQ0FBQyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRyxJQUFNLFlBQVksQ0FBQyxNQUFjO0FBQy9CLFFBQU0sU0FBUyxLQUFLLE1BQU0sR0FBRyxDQUFDLEtBQUs7QUFDbkMsU0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsSUFBSSxNQUFNO0FBQ3JEO0FBQ0EsSUFBTSxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFPLElBQVksSUFBWSxPQUFtQjtBQUN4RSxNQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQUcsTUFBSTtBQUFHLE1BQUk7QUFDakcsTUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUFHLE1BQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUFHLE1BQUk7QUFBRyxNQUFJO0FBQzlGLFNBQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcs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QztBQUFBO0FBQUEsRUFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsbUJBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsbUJBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FB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QU0sVUFBVSxPQUFPLEtBQUs7QUFDM0U7IiwKICAibmFtZXMiOiBbImMiLCAiY2FudmFzIiwgIndpZHRoIiwgImhlaWdodCIsICJzaGFkZXIiLCAiaGV4IiwgImNhbnZhcyIsICJoZXgiLCAic2hhZGVyIiwgImNhbnZhcyIsICJzaGFkZXIiLCAiYyIsICJoZXgiLCAiY2FudmFzIiwgImNvbG9ycyIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJjIiwgImxldmVsIiwgImxldmVsIiwgInJvdGF0aW9uIiwgImVuZW15SWRGcm9tVHJhY2tJZCIsICJ0YXJnZXRTcGFuIiwgInQiLCAiZWFzZSIsICJwb2ludCIsICJsZXZlbCIsICJsZXZlbCJdCn0K

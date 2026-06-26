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
    const p = rotate([point[0] * scale, -point[1] * scale, z * scale], rx, ry, rz);
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
  const rx = instance.rotationX ?? 0, ry = instance.rotationY ?? 0, rz = instance.rotationZ ?? 0;
  const entranceProgress = instance.entranceProgress ?? 1;
  const entranceEase = entranceProgress * entranceProgress * (3 - 2 * entranceProgress);
  const move = (point, z) => {
    const p = rotate([point[0] * scale, -point[1] * scale, z * scale], rx, ry, rz);
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
      scale: shape.size / this.#height * 2.5
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
var laneRunnerSceneIds = ["neonHall"];
var hallBottomWidth = 0.92;
var hallFloorColor = "#05101f";
var hallDeepBlue = "#12356a";
var hallMutedBlue = "#1b4c8d";
var hallMutedCyan = "#2ac4dc";
var hallMutedViolet = "#453079";
var hallAccentPink = "#a7357e";
var hallEnergySpeed = 17e-4;
function isLaneRunnerSceneId(value) {
  return laneRunnerSceneIds.includes(value);
}
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
function addHallBase(items, width, height, timeMs) {
  const pulse = 0.55 + Math.sin(timeMs * hallEnergySpeed) * 0.2;
  items.push({ x: width / 2, y: height * 0.42, width: width * hallBottomWidth, height: height * 1.08, color: hallFloorColor, secondaryColor: "#02050d", glow: 0.05, intensity: 0.23, shape: "bolt" });
  items.push({ x: width / 2, y: -height * 0.9, width: width * 0.34, height: 1.4, color: hallDeepBlue, secondaryColor: hallMutedCyan, glow: 0.3, intensity: 0.18 + pulse * 0.07, shape: "bolt" });
  items.push({ x: width / 2, y: -height * 0.78, width: width * 0.18, height: 1.2, color: hallAccentPink, secondaryColor: hallMutedViolet, glow: 0.24, intensity: 0.08, shape: "bolt" });
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

// projects/NeonSwarm/CombatDefinition/CombatTuning.ts
var combatTuning = {
  globalSpeedMultiplier: 1.5
};
if (!Number.isFinite(combatTuning.globalSpeedMultiplier) || combatTuning.globalSpeedMultiplier <= 0) {
  throw new Error("combatTuning: globalSpeedMultiplier must be a positive finite number.");
}

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
      contactDamage: 1,
      score: 10,
      baseColor: "pink",
      rimColor: "orange",
      shadowColor: "violet",
      glow: 0.82,
      surfaceTexture: 0.28,
      rimIntensity: 1.25,
      shadowStrength: 0.72,
      hitFlashDurationMs: 90,
      deathFlashScale: 1.8,
      shapeZoom: 3.4,
      impactResistance: 1,
      explosionMagnitude: 0.48
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
      this.require(orb.glow >= 0 && orb.rimIntensity >= 0, `${id} visual intensities cannot be negative.`);
      this.require(orb.surfaceTexture >= 0 && orb.surfaceTexture <= 1, `${id} surfaceTexture must be from 0 to 1.`);
    }
  }
};
var orbFamily = new OrbFamilyDefinition();

// projects/NeonSwarm/CombatDefinition/TrackDefinition.ts
var isEnemy = (id) => id.startsWith("enemy.");
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
  const rows = track.layout.split(/\r?\n/).map((text, sourceIndex) => ({ text: text.trim(), sourceIndex: sourceIndex + 1 })).filter((row) => row.text.length > 0);
  if (rows.length === 0) throw new Error("Track layout must contain at least one row.");
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
      [...lane].forEach((symbol, laneIndex) => {
        const entry = track.legend[symbol];
        if (!entry) {
          throw new Error(`Track layout line ${row.sourceIndex} uses symbol "${symbol}" at ${side} lane index ${laneIndex}, but it is missing from the legend.`);
        }
        if (entry.id === "empty") return;
        entities.push({
          id: entry.id,
          symbol,
          side,
          laneIndex,
          rowIndex,
          distanceFromPlayer,
          speedMultiplier: (entry.speed ?? 1) * (isEnemy(entry.id) ? track.balance.enemySpeed : 1)
        });
      });
    }
  });
  return entities.sort((a, b) => a.distanceFromPlayer - b.distanceFromPlayer || a.rowIndex - b.rowIndex || a.side.localeCompare(b.side) || a.laneIndex - b.laneIndex);
}

// projects/NeonSwarm/CombatDefinition/tracks/Track1.ts
var generatedTrack = {
  label: "Level 1: First Glow",
  description: "A gentle onboarding run: early tension, a quick power-up beat, then easy escalating waves for a first-time player.",
  durationSeconds: 25,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800
  },
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
..E.. | .....
..... | ..E..
.E... | .....
..... | .....
..G.. | .....
..... | ..2..
..... | .....
..E.. | ..E..
..... | .....
.S... | .....
..... | .....
.E.E. | .....
..... | ..E..
..a.. | .....
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
..P.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 0.75 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.85 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1.5
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track2.ts
var generatedTrack2 = {
  label: "Level 2: Neon Wake",
  description: "The second onboarding run: a slightly denser opening, early recovery pickups, and a gentle finale that teaches the player to trust their growing squad.",
  durationSeconds: 30,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800
  },
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
..E.. | ..E..
..... | .....
.E.E. | .....
..... | ..E..
..... | .....
..2.. | .....
..... | ..G..
..... | .....
..E.. | ..E..
..... | .....
.S... | .....
..... | .....
.E.E. | ..E..
..... | .....
..a.. | .....
..... | .....
.E.E. | .E.E.
..... | .....
..I.. | .....
..... | .....
..E.. | ..E..
.E.E. | .....
..... | .E.E.
..E.. | ..E..
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..P.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 0.75 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.85 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.85 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 0.95
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track3.ts
var generatedTrack3 = {
  label: "Level 3: Prism Pressure",
  description: "The third onboarding run stretches the player\u2019s endurance with longer pacing, safer upgrade windows, and denser but still forgiving enemy patterns.",
  durationSeconds: 60,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800
  },
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
..E.. | .....
..... | ..E..
.E... | .....
..... | .....
..G.. | .....
..... | ..2..
..... | .....
..E.. | ..E..
..... | .....
.S... | .....
..... | .....
.E.E. | .....
..... | ..E..
..a.. | .....
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
..I.. | .....
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
.E.E. | .E.E.
..... | .....
..2.. | .....
..... | .....
..E.. | ..E..
.E.E. | .....
..... | .E.E.
..E.. | ..E..
..... | .....
....b | .....
..... | .....
.E.E. | ..E..
..E.. | .....
..... | .E.E.
.E.E. | ..E..
..... | .....
..J.. | .....
..... | .....
.E.E. | .E.E.
..E.. | .....
..... | ..E..
.E.E. | ..E..
..... | .....
..S.. | .....
..... | .....
.E.E. | .E.E.
..E.. | ..E..
..... | .....
.E.E. | ..E..
..... | .E.E.
..E.. | .....
..... | .....
..E.. | .E.E.
..P.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 0.75 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.85 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.9 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.85 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.9 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track4.ts
var generatedTrack4 = {
  label: "Level 4: Violet Surge",
  description: "The fourth run doubles the endurance test again, adding denser waves, bigger pickup timing decisions, and higher-tier tools while staying readable and fair.",
  durationSeconds: 120,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800
  },
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
..E.. | .....
..... | ..E..
.E... | .....
..... | .E...
..G.. | .....
..... | ..2..
..... | .....
..E.. | ..E..
..... | .....
S.... | .....
..... | .....
.E.E. | .....
..... | ..E..
..a.. | .....
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
..I.. | .....
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
.E.E. | .E.E.
..... | .....
..2.. | .....
..... | .....
..E.. | ..E..
.E.E. | .....
..... | .E.E.
..E.. | ..E..
..... | .....
....b | .....
..... | .....
.E.E. | ..E..
..E.. | .....
..... | .E.E.
.E.E. | ..E..
..... | .....
..J.. | .....
..... | .....
.E.E. | .E.E.
..E.. | .....
..... | ..E..
.E.E. | ..E..
..... | .....
..S.. | .....
..... | .....
.E.E. | .E.E.
..E.. | ..E..
..... | .....
.E.E. | ..E..
..... | .E.E.
..E.. | .....
..... | .....
..E.. | .E.E.
..... | .....
..... | ..K..
..... | .....
.E.E. | .E.E.
..E.. | ..E..
..... | .....
..2.. | .....
..... | .....
EEE.. | .....
..... | ..EEE
.E.E. | .E.E.
..... | .....
..X.. | .....
..... | .....
..E.. | ..E..
.E.E. | .....
..... | .E.E.
..E.. | ..E..
..... | .....
....c | .....
..... | .....
.E.E. | .E.E.
..E.. | ..E..
..... | .....
EEE.. | ..E..
..... | ..EEE
.E.E. | .....
..... | .E.E.
..E.. | ..E..
..... | .....
..2.. | .....
..... | .....
.E.E. | .E.E.
..E.. | .....
..... | ..E..
EEE.. | .E.E.
..... | .....
..J.. | .....
..... | .....
.E.E. | .E.E.
..E.. | ..E..
..... | .....
.E.E. | ..EEE
..... | .....
..X.. | .....
..... | .....
EEE.. | ..E..
..... | .E.E.
.E.E. | .E.E.
..... | .....
..E.. | ..E..
.E.E. | .....
..... | .E.E.
..E.. | ..E..
..... | .....
.E.E. | .E.E.
..E.. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
..P.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 0.75 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.85 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.9 },
      "K": { id: "pickup.weapon.gun.splitterRifle", speed: 0.95 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.95 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.85 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.9 },
      "c": { id: "pickup.weapon.sword.needleRapier", speed: 0.95 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1.05
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/index.ts
var tracks = {
  "track1": generatedTrack,
  "track2": generatedTrack2,
  "track3": generatedTrack3,
  "track4": generatedTrack4
};

// projects/NeonSwarm/CombatDefinition/TrackFamily.ts
var TrackFamilyDefinition = class extends FamilyDefinition {
  familyId = "track";
  label = "Track";
  members = tracks;
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, track] of Object.entries(this.members)) {
      this.require(track.durationSeconds > 0, `${id} duration must be positive.`);
      this.require(track.viewport.orientation === "portrait" && track.viewport.aspectHeight > track.viewport.aspectWidth, `${id} must use its declared portrait viewport.`);
      this.require(track.viewport.logicalWidth > 0 && track.viewport.logicalHeight > 0, `${id} logical viewport must be positive.`);
      parseTrackDefinition(track.definition);
      this.require(isLaneRunnerSceneId(track.environment.sceneId), `${id} has an unknown scene id.`);
    }
  }
};
var trackFamily = new TrackFamilyDefinition();

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
   * - Swords are NOT period-based like guns. They swing only when a valid target
   *   is within range and cooldown is ready. They idle silently otherwise.
   * - One active sword per player (family-scoped exclusivity).
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
     * Arc Blade — Core sword. Fast, curved, targets nearest enemy in lane.
     * Hits 1–2 enemies depending on arc overlap. Short cooldown.
     */
    arcBlade: {
      label: "Arc Blade",
      family: "sword",
      rarity: "starter",
      range: 52,
      arcDegrees: 70,
      damage: 1.5,
      cooldownSeconds: 0.85,
      maxTargets: 2,
      targetingMode: "nearestInCurrentLane",
      slashDurationMs: 150,
      color: "cyan",
      slashThickness: 1,
      agentNotes: "Fast and sharp. Curved neon slash. 120\u2013180ms feel. Fading afterimage. Like a whip-like katana arc."
    },
    /**
     * Cleaver — Heavy sword. Slower but hits multiple clustered enemies.
     * Wide arc, thicker slash. Better against tight groups than fast singles.
     */
    cleaver: {
      label: "Cleaver",
      family: "sword",
      rarity: "common",
      range: 56,
      arcDegrees: 110,
      damage: 2.8,
      cooldownSeconds: 1.8,
      maxTargets: 4,
      targetingMode: "clusterNearPlayer",
      slashDurationMs: 220,
      color: "orange",
      slashThickness: 1.65,
      agentNotes: "Heavy and wide. Thicker arc. Stronger impact flash. Geometric and procedural \u2014 not a bullet."
    },
    /**
     * Needle Rapier — Precision sword. Long reach, narrow arc, single target.
     * Prioritizes the most dangerous (front-most) enemy.
     */
    needleRapier: {
      label: "Needle Rapier",
      family: "sword",
      rarity: "uncommon",
      range: 70,
      arcDegrees: 30,
      damage: 2.2,
      cooldownSeconds: 1.1,
      maxTargets: 1,
      targetingMode: "frontMostThreat",
      slashDurationMs: 130,
      color: "green",
      slashThickness: 0.55,
      agentNotes: "Elegant and precise. Thin stabbing line. Not a gun shot \u2014 it must feel melee. Single target priority."
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
      this.require(sword.cooldownSeconds > 0, `${id} cooldownSeconds must be positive.`);
      this.require(sword.maxTargets >= 1, `${id} maxTargets must be at least 1.`);
      this.require(sword.slashDurationMs > 0, `${id} slashDurationMs must be positive.`);
      this.require(sword.slashThickness > 0, `${id} slashThickness must be positive.`);
      this.require(neonPalette[sword.color] !== void 0, `${id} has an unknown color.`);
    }
  }
};
var swordFamily = new SwordFamilyDefinition();

// projects/NeonSwarm/src/input.ts
function bindSquadInput(container, joystick, callbacks) {
  let pointerId = null;
  let pointerStartedX = 0;
  let pointerMoved = false;
  const applyPointer = (clientX) => {
    const bounds = container.getBoundingClientRect();
    const normalized = Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
    const lane = normalized < 0.5 ? 0 : 1;
    if (lane !== callbacks.lane()) callbacks.setLane(lane);
    const laneStart = lane === 0 ? 0 : 0.5;
    const withinLane = (normalized - laneStart) / 0.5;
    callbacks.setAim((withinLane - 0.5) * 2);
  };
  addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") callbacks.setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") callbacks.setLane(1);
  });
  container.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (target.closest(joystick) || target.closest("button,input,select,a")) return;
    pointerId = event.pointerId;
    pointerStartedX = event.clientX;
    pointerMoved = false;
    container.setPointerCapture?.(pointerId);
    applyPointer(event.clientX);
  });
  container.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) return;
    pointerMoved ||= Math.abs(event.clientX - pointerStartedX) > 3;
    applyPointer(event.clientX);
  });
  const endPointer = (event) => {
    if (event.pointerId !== pointerId) return;
    if (!pointerMoved) applyPointer(event.clientX);
    pointerId = null;
    callbacks.releaseAim();
  };
  container.addEventListener("pointerup", endPointer);
  container.addEventListener("pointercancel", endPointer);
  container.addEventListener("lostpointercapture", () => {
    pointerId = null;
    callbacks.releaseAim();
  });
  if (matchMedia("(pointer: coarse)").matches) {
    const element = container.querySelector(joystick);
    const knob = element?.querySelector(".stick-knob");
    let joystickPointer = null;
    const applyJoystick = (event) => {
      if (!element) return;
      const bounds = element.getBoundingClientRect();
      const radius = bounds.width / 2;
      const raw = (event.clientX - (bounds.left + radius)) / radius;
      const x = Math.max(-1, Math.min(1, raw));
      if (knob) knob.style.transform = `translate(calc(-50% + ${x * radius * 0.62}px),-50%)`;
      const magnitude = Math.abs(x);
      if (magnitude >= 0.95) {
        const requested = x < 0 ? 0 : 1;
        if (requested !== callbacks.lane()) callbacks.setLane(requested);
        callbacks.setAim(0);
      } else if (magnitude <= 0.5) callbacks.setAim(x / 0.5);
      else callbacks.setAim(Math.sign(x));
    };
    element?.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      joystickPointer = event.pointerId;
      element.setPointerCapture(event.pointerId);
      applyJoystick(event);
    });
    element?.addEventListener("pointermove", (event) => {
      if (event.pointerId === joystickPointer) applyJoystick(event);
    });
    const endJoystick = (event) => {
      if (event.pointerId !== joystickPointer) return;
      joystickPointer = null;
      if (knob) knob.style.transform = "translate(-50%,-50%)";
      callbacks.releaseAim();
    };
    element?.addEventListener("pointerup", endJoystick);
    element?.addEventListener("pointercancel", endJoystick);
  }
}

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
  setAim(normalized, laneWidth, laneCenter) {
    this.aimOffset = Math.max(-1, Math.min(1, normalized)) * laneWidth * 0.28;
    this.targetX = laneCenter(this.lane) + this.aimOffset;
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
function applyPortraitStage(stage, policy) {
  stage.style.setProperty("--stage-aspect", `${policy.aspectWidth} / ${policy.aspectHeight}`);
}
var defaultHelicopterCameraSettings = {
  height: 170,
  lookAngleDegrees: 20,
  followDistance: 255,
  zoom: 0.73,
  horizon: 0.54
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
function projectHelicopterPointFactory(settings, viewport) {
  const centerX = viewport.width / 2;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const minDepth = 20;
  return (x, y) => {
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
}

// projects/NeonSwarm/src/shapeVisuals.ts
var swarmShapes = {
  player: getNeonShape("arrow-classic"),
  enemy: getNeonShape("hunter-eye"),
  multiplier: getNeonShape("bruiser-cross"),
  gunPickup: getNeonShape("hex-fighter")
};
var actorInTopDownScene = (actor, x, y, size, overrides = {}) => ({ ...actor.renderInstance(overrides), x, y, size });

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
function helicopterViewportFor(width, height, playerY) {
  return { width, height, playerY };
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

// projects/NeonSwarm/src/familyVisuals.ts
var emptyScene = () => ({ primitives: [], shapes: [] });
var requiredShape = (id) => {
  const shape = getNeonShape(id);
  if (!shape) throw new Error(`NeonFactory shape "${id}" is required by family visuals.`);
  return shape;
};
function shieldVisuals(options) {
  const scene = emptyScene();
  const {
    definition,
    x,
    y,
    now,
    scale = 1,
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
    scene.shapes.push({
      shape: orbiterShape,
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
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

// projects/NeonSwarm/test-pages/shield-family/manual.ts
var canvas = document.querySelector("#game-canvas");
var error = document.querySelector("#error");
var shieldSelect = document.querySelector("#shield-select");
var weaponReadout = document.querySelector("#weapon-readout");
var scoreReadout = document.querySelector("#score-readout");
var specReadout = document.querySelector("#spec-readout");
var enemyHpInput = document.querySelector("#enemy-hp");
var shieldStrengthReadout = document.querySelector("#shield-strength");
var gameElement = document.querySelector("#game");
applyPortraitStage(gameElement, { aspectWidth: 9, aspectHeight: 16 });
var audioId = (id) => `../../../../audio/${id}`;
var playSfx = (id) => window.gameAudio?.play(audioId(id));
var playEnemyDestroyed = () => window.gameAudio?.playRotated(audioId("EnemyDestroyed"), 2);
try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 450, 800);
  const orb = orbFamily.members.basicOrb;
  const enemies = [];
  const pickups = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let playerLane = 0;
  let activeShieldId = "lightGuard";
  let shieldState = new ShieldState(activeShieldId, shieldFamily.members[activeShieldId].maxCharges);
  let entitySequence = 0;
  let kills = 0;
  let lastFrame = performance.now();
  let playerAlive = true;
  let restartAt = 0;
  let playerActor = new NeonShapeActor({ shape: swarmShapes.player });
  let initialShieldStrength = shieldFamily.members[activeShieldId].maxCharges;
  let shieldStrength = initialShieldStrength;
  const laneX = (lane) => canvas.width * (lane === 0 ? 0.32 : 0.68);
  const playerY = () => canvas.height * 0.82;
  const scale = () => 1;
  for (const [id, shield] of Object.entries(shieldFamily.members)) {
    shieldSelect.add(new Option(shield.label, id));
  }
  shieldSelect.value = activeShieldId;
  const equip = (id) => {
    activeShieldId = id;
    const def = shieldFamily.members[id];
    shieldState = new ShieldState(id, def.maxCharges);
    initialShieldStrength = def.mode === "charge" ? def.maxCharges : 0;
    shieldStrength = initialShieldStrength;
    shieldSelect.value = id;
    playSfx("PickupShield");
    playSfx("Shield");
    updateReadout();
  };
  const updateReadout = () => {
    const def = shieldFamily.members[activeShieldId];
    weaponReadout.textContent = `${def.label}`;
    scoreReadout.textContent = `Kills ${kills}`;
    const chargesText = def.maxCharges > 0 ? `${Math.ceil(shieldStrength)}/${def.maxCharges}` : "\u2014";
    shieldStrengthReadout.textContent = `${shieldStrength.toFixed(2)} / ${initialShieldStrength.toFixed(2)}`;
    specReadout.innerHTML = [
      ["Radius", String(def.radius)],
      ["Strength", chargesText],
      ["Cooldown", `${def.cooldownSeconds}s`],
      ["Orbiters", `${def.orbiterCount} \xD7 ${def.orbiterShape}`]
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  squad.x = laneX(0);
  squad.targetX = laneX(0);
  const spawnEnemy = (lane) => {
    const requestedHp = Number.parseFloat(enemyHpInput.value);
    const health = Number.isFinite(requestedHp) && requestedHp > 0 ? requestedHp : orb.health;
    enemies.push({ id: ++entitySequence, lane, x: laneX(lane), y: 105, health, rowId: ++entitySequence, actor: new NeonShapeActor({ shape: swarmShapes.enemy }), dying: false });
  };
  const spawnPickup = (lane) => {
    pickups.push({ shieldId: shieldSelect.value, lane, y: 135 });
  };
  const restartSimulation = () => {
    enemies.length = 0;
    pickups.length = 0;
    playerAlive = true;
    restartAt = 0;
    playerActor = new NeonShapeActor({ shape: swarmShapes.player });
    equip(activeShieldId);
    spawnEnemy(0);
    spawnEnemy(1);
  };
  const killPlayer = (now) => {
    if (!playerAlive) return;
    playerAlive = false;
    restartAt = now + 900;
    playerActor.explodeMagnitude = 0.8;
    playerActor.dispose("explode" /* Explode */);
    weaponReadout.textContent = "Shield broken";
    playSfx("ShieldBreak");
  };
  document.querySelectorAll("[data-spawn-enemy]").forEach((b) => b.addEventListener("click", () => spawnEnemy(Number(b.dataset.spawnEnemy))));
  document.querySelectorAll("[data-spawn-pickup]").forEach((b) => b.addEventListener("click", () => spawnPickup(Number(b.dataset.spawnPickup))));
  document.querySelector("#spawn-wave").addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    setTimeout(() => spawnEnemy(0), 450);
    setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector("#clear-stage").addEventListener("click", () => {
    enemies.length = pickups.length = 0;
  });
  shieldSelect.addEventListener("change", () => equip(shieldSelect.value));
  bindSquadInput(gameElement, "#joystick", {
    lane: () => squad.lane,
    setLane: (lane) => {
      playerLane = lane;
      squad.setLane(lane, laneX, performance.now());
      aimControl.laneSelected();
    },
    setAim: (value) => {
      squad.setAim(value, canvas.width * 0.22, laneX);
      aimControl.aimChanged();
    },
    releaseAim: () => {
      aimControl.aimReleased();
    }
  });
  const update = (now) => {
    const delta = Math.min((now - lastFrame) / 1e3, 0.05);
    lastFrame = now;
    playerActor.update(delta);
    if (!playerAlive) {
      if (shieldState.hitFlashUntil > 0) {
        shieldState.hitFlashProgress = Math.min(1, (now - (shieldState.hitFlashUntil - 280)) / 280);
      }
      for (const e of enemies) e.actor.update(delta);
      if (now >= restartAt) restartSimulation();
      return;
    }
    if (!aimControl.manual) {
      const laneEnemies = enemies.filter((e) => e.lane === squad.lane && !e.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * 0.22, laneX);
    }
    squad.update(delta);
    const px = squad.x;
    const py = playerY();
    const def = shieldFamily.members[activeShieldId];
    const threats = queryNearbyThreats(enemies, { origin: { x: px, y: py }, lane: playerLane, range: def.radius + orb.radius, purpose: "shield" });
    tickShield(shieldState, def, [], px, py, now, delta);
    for (const e of [...enemies]) {
      e.actor.update(delta);
      e.y += orb.speed * delta - e.actor.y * canvas.height / 2.5;
      e.actor.moveTo(0, 0);
      if (e.dying && e.actor.disposed) {
        enemies.splice(enemies.indexOf(e), 1);
        continue;
      }
      if (e.dying) continue;
      const contact = resolveShieldContact(shieldState, def, Object.assign(e, { radius: orb.radius }), px, py, now);
      if (contact.absorbed) {
        shieldStrength = shieldState.charges;
        updateReadout();
        if (contact.enemyDestroyed) {
          e.dying = true;
          e.actor.explodeMagnitude = orb.explosionMagnitude;
          e.actor.dispose("explode" /* Explode */);
          kills++;
          updateReadout();
          playEnemyDestroyed();
          continue;
        }
        playSfx("ShieldImpact");
      }
      const pts = squad.points(playerY(), scale());
      const hit = pts.findIndex((pt) => Math.hypot(pt.x - e.x, pt.y - e.y) <= orb.radius * 3.2);
      if (hit >= 0) {
        if (!e.dying) {
          shieldStrength = 0;
          shieldState.charges = 0;
          shieldState.hitFlashUntil = now + 280;
          shieldState.hitFlashProgress = 0;
          killPlayer(now);
        }
        continue;
      }
      if (e.y > canvas.height + orb.radius * 2) enemies.splice(enemies.indexOf(e), 1);
    }
    for (const p of [...pickups]) {
      p.y += 62 * delta;
      if (p.y >= playerY() - 12 && p.lane === playerLane) {
        equip(p.shieldId);
        pickups.splice(pickups.indexOf(p), 1);
      } else if (p.y > canvas.height + 30) pickups.splice(pickups.indexOf(p), 1);
    }
  };
  const draw = (now) => {
    const s = scale();
    const primitives = [
      ...createLaneRunnerScene({ sceneId: "neonHall", width: canvas.width, height: canvas.height, timeMs: now }).primitives ?? []
    ];
    const def = shieldFamily.members[activeShieldId];
    const shieldColor = neonPalette[def.color];
    const px = squad.x;
    const py = playerY();
    const shapes = [];
    const shieldScene = shieldVisuals({
      definition: def,
      strength: shieldStrength,
      initialStrength: initialShieldStrength,
      x: px,
      y: py,
      now,
      scale: s,
      hitProgress: shieldState.hitFlashProgress,
      visible: playerAlive
    });
    primitives.push(...shieldScene.primitives);
    shapes.push(...shieldScene.shapes);
    for (const pickup of pickups) {
      const pickupDef = shieldFamily.members[pickup.shieldId];
      shapes.push(shieldPickupVisual({
        x: laneX(pickup.lane),
        y: pickup.y,
        color: neonPalette[pickupDef.color],
        now,
        scale: s
      }));
    }
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY());
    shapes.push(actorInTopDownScene(playerActor, squad.x, playerY(), 14, playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, squad.x, playerY(), now)));
    for (const e of enemies) shapes.push(actorInTopDownScene(e.actor, e.x, e.y, 18, enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, e.x, e.y, now, e.rowId)));
    renderer.render(projectHelicopterScene(primitives, shapes, [], defaultHelicopterCameraSettings, helicopterViewport), now / 1e3);
  };
  const frame = (now) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
  equip(activeShieldId);
  spawnEnemy(0);
  spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2syLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9pbnB1dC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NxdWFkLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvYXV0b0FpbS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3ZpZXdwb3J0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2hhcGVWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc2hpZWxkRXZhbHVhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZmFtaWx5VmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vdGVzdC1wYWdlcy9zaGllbGQtZmFtaWx5L21hbnVhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24sIE5lb25Qb2ludCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlTGFiZWxQb3NpdGlvbiA9IFwiYWJvdmVcIiB8IFwiYmVsb3dcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlTGFiZWwge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogTmVvblNoYXBlTGFiZWxQb3NpdGlvbjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICBjb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgcm90YXRpb25ZPzogbnVtYmVyO1xuICByb3RhdGlvblo/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIHNoaWVsZGVkPzogYm9vbGVhbjtcbiAgbGluZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgZW5lcmd5SW50ZW5zaXR5PzogbnVtYmVyO1xuICBlbmVyZ3lDb3ZlcmFnZT86IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ/OiBudW1iZXI7XG4gIGVuZXJneUJsZWVkPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBlbnRyYW5jZVByb2dyZXNzPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZXhwbG9kZVByb2dyZXNzPzogbnVtYmVyO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xufVxuXG50eXBlIFYzID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xudHlwZSBWZXJ0ZXggPSB7XG4gIHA6IFYzOyBuOiBWMzsgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTsgZ2xvdzogbnVtYmVyO1xuICBlZmZlY3Q6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IGZsb2F0c1BlclZlcnRleCA9IDE0O1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IFNjZW5lIHsgYXNwZWN0OiBmMzIsIGNhbWVyYTogZjMyLCB0aW1lOiBmMzIsIHBhZGRpbmc6IGYzMiB9XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbnN0cnVjdCBJbnB1dCB7XG4gIEBsb2NhdGlvbigwKSBwb3NpdGlvbjogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMykgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oNCkgZWZmZWN0OiB2ZWM0Zixcbn1cbnN0cnVjdCBPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGVmZmVjdDogdmVjNGYsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oaW5wdXQ6IElucHV0KSAtPiBPdXRwdXQge1xuICBsZXQgZGVwdGggPSBzY2VuZS5jYW1lcmEgLSBpbnB1dC5wb3NpdGlvbi56O1xuICB2YXIgb3V0cHV0OiBPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKGlucHV0LnBvc2l0aW9uLnggKiA0IC8gc2NlbmUuYXNwZWN0LCBpbnB1dC5wb3NpdGlvbi55ICogNCwgZGVwdGggKiAuMDQ1LCBkZXB0aCk7XG4gIG91dHB1dC5ub3JtYWwgPSBpbnB1dC5ub3JtYWw7XG4gIG91dHB1dC5jb2xvciA9IGlucHV0LmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGlucHV0Lmdsb3c7XG4gIG91dHB1dC5lZmZlY3QgPSBpbnB1dC5lZmZlY3Q7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBub3JtYWwgPSBub3JtYWxpemUoaW5wdXQubm9ybWFsKTtcbiAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0uNDUsIC0uNywgMSkpO1xuICBsZXQgZGlmZnVzZSA9IC4xOCArIG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApICogLjgyO1xuICBsZXQgcmltID0gcG93KDEgLSBhYnMobm9ybWFsLnopLCAyLjIpO1xuICBsZXQgc2lkZSA9IDEgLSBhYnMobm9ybWFsLnopO1xuICBsZXQgcmFyZVN1cmdlID0gcG93KG1heCguMCwgc2luKHNjZW5lLnRpbWUgKiBpbnB1dC5lZmZlY3QueiAqIC44MiArIGlucHV0LmNvbG9yLnIgKiA3LjApKSwgMjIuMClcbiAgICAqIGlucHV0LmVmZmVjdC54ICogaW5wdXQuZWZmZWN0LnkgKiBpbnB1dC5lZmZlY3QudztcbiAgbGV0IGVuZXJneSA9IGlucHV0LmNvbG9yICogKGRpZmZ1c2UgKiAuMTIgKyByaW0gKiBpbnB1dC5nbG93ICogLjM2ICsgc2lkZSAqIC4wOCArIHJhcmVTdXJnZSAqIC43KTtcbiAgcmV0dXJuIHZlYzRmKGVuZXJneSArIHZlYzNmKHJhcmVTdXJnZSAqIC4xOCksIC4xMiArIHNpZGUgKiAuMTIgKyByYXJlU3VyZ2UgKiAuMjgpO1xufVxuQGZyYWdtZW50IGZuIGxpbmVGcmFnbWVudChpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYWxvbmcgPSBpbnB1dC5ub3JtYWwueDtcbiAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5ub3JtYWwueSk7XG4gIGxldCBwaGFzZSA9IGlucHV0Lm5vcm1hbC56O1xuICBsZXQgaW50ZW5zaXR5ID0gaW5wdXQuZWZmZWN0Lng7XG4gIGxldCBjb3ZlcmFnZSA9IGlucHV0LmVmZmVjdC55O1xuICBsZXQgc3BlZWQgPSBpbnB1dC5lZmZlY3QuejtcbiAgbGV0IGJsZWVkID0gaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBwdWxzZUEgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAzMS4wIC0gc2NlbmUudGltZSAqIHNwZWVkICogNS40ICsgcGhhc2UpKSwgMTAuMCk7XG4gIGxldCBwdWxzZUIgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAxMy4wICsgc2NlbmUudGltZSAqIHNwZWVkICogMy4xICsgcGhhc2UgKiAyLjcpKSwgMTguMCk7XG4gIGxldCBub2lzZSA9IHNpbihhbG9uZyAqIDcxLjAgKyBwaGFzZSAqIDguMykgKiAuNSArIC41O1xuICBsZXQgdGhyZXNob2xkID0gMS4wIC0gY292ZXJhZ2U7XG4gIGxldCBlbGVjdHJpY2l0eSA9IHNtb290aHN0ZXAodGhyZXNob2xkLCB0aHJlc2hvbGQgKyAuMTgsIHB1bHNlQSAqIC42NSArIHB1bHNlQiAqIC41NSArIG5vaXNlICogLjE4KTtcbiAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKC4wNiwgLjI4LCBhY3Jvc3MpO1xuICBsZXQgaGFsbyA9IDEuMCAtIHNtb290aHN0ZXAoLjEyLCAxLjAsIGFjcm9zcyk7XG4gIGxldCBzdXJnZSA9IGVsZWN0cmljaXR5ICogaW50ZW5zaXR5O1xuICBsZXQgcHVsc2UgPSAuNzggKyBzaW4oc2NlbmUudGltZSAqIHNwZWVkICogMi4xICsgcGhhc2UpICogLjEzICsgZWxlY3RyaWNpdHkgKiAuMjQ7XG4gIGxldCBjbG91ZCA9IGhhbG8gKiAoLjEzICsgc3VyZ2UgKiAuNTIpO1xuICBsZXQgaG90ID0gaW5wdXQuY29sb3IgKiAocHVsc2UgKyBjbG91ZCAqIDIuMSkgKiBpbnB1dC5nbG93ICsgdmVjM2YoY29yZSAqIHN1cmdlICogMS4zNSk7XG4gIGxldCBhbHBoYSA9IChjb3JlICogKC43MiArIHB1bHNlICogLjIpICsgY2xvdWQgKyAoMS4wIC0gYWNyb3NzKSAqIGJsZWVkICogZWxlY3RyaWNpdHkgKiAuMjQpICogaW5wdXQuZ2xvdztcbiAgcmV0dXJuIHZlYzRmKGhvdCwgY2xhbXAoYWxwaGEsIDAuMCwgMS4wKSk7XG59YDtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3Qgc3ViID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcbmNvbnN0IGNyb3NzID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzFdKmJbMl0tYVsyXSpiWzFdLCBhWzJdKmJbMF0tYVswXSpiWzJdLCBhWzBdKmJbMV0tYVsxXSpiWzBdXTtcbmNvbnN0IG5vcm1hbGl6ZSA9ICh2OiBWMyk6IFYzID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCguLi52KSB8fCAxO1xuICByZXR1cm4gW3ZbMF0gLyBsZW5ndGgsIHZbMV0gLyBsZW5ndGgsIHZbMl0gLyBsZW5ndGhdO1xufTtcbmNvbnN0IHJvdGF0ZSA9IChbeCwgeSwgel06IFYzLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCByejogbnVtYmVyKTogVjMgPT4ge1xuICBsZXQgYSA9IHkgKiBNYXRoLmNvcyhyeCkgLSB6ICogTWF0aC5zaW4ocngpLCBiID0geSAqIE1hdGguc2luKHJ4KSArIHogKiBNYXRoLmNvcyhyeCk7IHkgPSBhOyB6ID0gYjtcbiAgYSA9IHggKiBNYXRoLmNvcyhyeSkgKyB6ICogTWF0aC5zaW4ocnkpOyBiID0gLXggKiBNYXRoLnNpbihyeSkgKyB6ICogTWF0aC5jb3MocnkpOyB4ID0gYTsgeiA9IGI7XG4gIHJldHVybiBbeCAqIE1hdGguY29zKHJ6KSAtIHkgKiBNYXRoLnNpbihyeiksIHggKiBNYXRoLnNpbihyeikgKyB5ICogTWF0aC5jb3MocnopLCB6XTtcbn07XG5cbmZ1bmN0aW9uIG1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBlbnRyYW5jZU9mZnNldCA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgaWYgKGVudHJhbmNlUHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICBjb25zdCBzZWVkID0gTWF0aC5zaW4oaW5kZXggKiA5MS4xNyArIHBvaW50WzBdICogMzcuMiArIHBvaW50WzFdICogNTMuNyArIHogKiAyOS4xKSAqIDQzNzU4LjU0NTM7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZCAtIE1hdGguZmxvb3Ioc2VlZCk7XG4gICAgY29uc3QgYW5nbGUgPSByYW5kb20gKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCByYWRpdXMgPSAoaW5zdGFuY2UuZW50cmFuY2VNYWduaXR1ZGUgPz8gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogKDEgLSBlbnRyYW5jZUVhc2UpICogKC4zNSArIHJhbmRvbSAqIC43NSk7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cywgKHJhbmRvbSAtIC41KSAqIHJhZGl1cyAqIC41NV07XG4gIH07XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleCA9IDApOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZSwgLXBvaW50WzFdICogc2NhbGUsIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIGNvbnN0IGUgPSBlbnRyYW5jZU9mZnNldChwb2ludCwgeiwgaW5kZXgpO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApICsgZVswXSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApICsgZVsxXSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApICsgZVsyXV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgY29uc3QgYWRkID0gKGE6IFYzLCBiOiBWMywgYzogVjMsIG5vcm1hbD86IFYzKSA9PiB7XG4gICAgY29uc3QgbiA9IG5vcm1hbCA/PyBub3JtYWxpemUoY3Jvc3Moc3ViKGIsIGEpLCBzdWIoYywgYSkpKTtcbiAgICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gICAgXTtcbiAgICBbYSxiLGNdLmZvckVhY2gocCA9PiBvdXRwdXQucHVzaCh7IHAsIG4sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlLCBlZmZlY3QgfSkpO1xuICB9O1xuICBjb25zdCBmcm9udCA9IHNoYXBlLnBvaW50cy5tYXAoKHBvaW50LCBpbmRleCkgPT4gbW92ZShwb2ludCwgZGVwdGggLyAyLCBpbmRleCkpO1xuICBjb25zdCBiYWNrID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCAtZGVwdGggLyAyLCBpbmRleCArIHNoYXBlLnBvaW50cy5sZW5ndGgpKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBmcm9udC5sZW5ndGggLSAxOyBpKyspIGFkZChmcm9udFswXSwgZnJvbnRbaV0sIGZyb250W2kgKyAxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYmFjay5sZW5ndGggLSAxOyBpKyspIGFkZChiYWNrWzBdLCBiYWNrW2kgKyAxXSwgYmFja1tpXSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IChpICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tpXSwgYmFja1tuZXh0XSk7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW25leHRdLCBmcm9udFtuZXh0XSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBlZGdlTWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGUsIC1wb2ludFsxXSAqIHNjYWxlLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCldO1xuICB9O1xuICBjb25zdCBleHBsb2RlID0gKGE6IFYzLCBiOiBWMywgaW5kZXg6IG51bWJlcik6IFtWMywgVjNdID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwLCAxIC0gZW50cmFuY2VFYXNlKTtcbiAgICBpZiAoIXByb2dyZXNzKSByZXR1cm4gW2EsIGJdO1xuICAgIGNvbnN0IG14ID0gKGFbMF0gKyBiWzBdKSAvIDIgLSAoaW5zdGFuY2UueCA/PyAwKSwgbXkgPSAoYVsxXSArIGJbMV0pIC8gMiAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QobXgsIG15KSB8fCAxO1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIGNvbnN0IHNwZWVkID0gbWFnbml0dWRlICogKC40NSArIChNYXRoLnNpbihpbmRleCAqIDkxLjE3KSAqIC41ICsgLjUpICogLjU1KTtcbiAgICBjb25zdCBkeCA9IG14IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCwgZHkgPSBteSAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQgKyBwcm9ncmVzcyAqIHByb2dyZXNzICogLjE4O1xuICAgIGNvbnN0IGFuZ2xlID0gcHJvZ3Jlc3MgKiAoaW5kZXggJSAyID8gMSA6IC0xKSAqIDIuNDtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAocDogVjMpOiBWMyA9PiB7XG4gICAgICBjb25zdCB4ID0gcFswXSAtIChpbnN0YW5jZS54ID8/IDApLCB5ID0gcFsxXSAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgICAgcmV0dXJuIFt4ICogTWF0aC5jb3MoYW5nbGUpIC0geSAqIE1hdGguc2luKGFuZ2xlKSArIChpbnN0YW5jZS54ID8/IDApICsgZHgsIHggKiBNYXRoLnNpbihhbmdsZSkgKyB5ICogTWF0aC5jb3MoYW5nbGUpICsgKGluc3RhbmNlLnkgPz8gMCkgKyBkeSwgcFsyXV07XG4gICAgfTtcbiAgICByZXR1cm4gW3RyYW5zZm9ybShhKSwgdHJhbnNmb3JtKGIpXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBsZXQgZGlzdGFuY2UgPSAwO1xuICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgXTtcbiAgY29uc3QgYWRkTGluZSA9IChhOiBWMywgYjogVjMsIHBoYXNlOiBudW1iZXIsIHdpZHRoU2NhbGUgPSAxLCBvcGFjaXR5ID0gMSkgPT4ge1xuICAgIFthLCBiXSA9IGV4cGxvZGUoYSwgYiwgTWF0aC5mbG9vcihkaXN0YW5jZSAqIDEwMCkgKyBNYXRoLmZsb29yKHBoYXNlICogMTApKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAuMDAxO1xuICAgIGNvbnN0IHdpZHRoID0gKGluc3RhbmNlLmxpbmVUaGlja25lc3MgPz8gMSkgKiAuMDE4ICogd2lkdGhTY2FsZTtcbiAgICBjb25zdCBveCA9IC1keSAvIGxlbmd0aCAqIHdpZHRoLCBveSA9IGR4IC8gbGVuZ3RoICogd2lkdGg7XG4gICAgY29uc3QgYTA6IFYzID0gW2FbMF0gLSBveCwgYVsxXSAtIG95LCBhWzJdXSwgYTE6IFYzID0gW2FbMF0gKyBveCwgYVsxXSArIG95LCBhWzJdXTtcbiAgICBjb25zdCBiMDogVjMgPSBbYlswXSAtIG94LCBiWzFdIC0gb3ksIGJbMl1dLCBiMTogVjMgPSBbYlswXSArIG94LCBiWzFdICsgb3ksIGJbMl1dO1xuICAgIGNvbnN0IHN0YXJ0ID0gZGlzdGFuY2UgKiAyLjQsIGVuZCA9IChkaXN0YW5jZSArIGxlbmd0aCkgKiAyLjQ7XG4gICAgY29uc3QgcHVzaCA9IChwOiBWMywgYWxvbmc6IG51bWJlciwgYWNyb3NzOiBudW1iZXIpID0+XG4gICAgICBvdXRwdXQucHVzaCh7IHAsIG46IFthbG9uZywgYWNyb3NzLCBwaGFzZV0sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIG9wYWNpdHkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqIGVudHJhbmNlRWFzZSAqICgxICsgTWF0aC5zaW4oKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIE1hdGguUEkpICogKGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqIDIuMikgKiAoMSAtIChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiAuNyksIGVmZmVjdCB9KTtcbiAgICBwdXNoKGEwLHN0YXJ0LC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMCxlbmQsLTEpO1xuICAgIHB1c2goYjAsZW5kLC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMSxlbmQsMSk7XG4gICAgZGlzdGFuY2UgKz0gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBhZGRMb29wID0gKHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sIHo6IG51bWJlciwgcGhhc2U6IG51bWJlcikgPT5cbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIHopLCBtb3ZlKHBvaW50c1soaW5kZXggKyAxKSAlIHBvaW50cy5sZW5ndGhdLCB6KSwgcGhhc2UgKyBpbmRleCAqIC43MykpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgZGVwdGggLyAyLCAuMyk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCAtZGVwdGggLyAyLCAyLjEpO1xuICBzaGFwZS5ob2xlcz8uZm9yRWFjaCgoaG9sZSwgaW5kZXgpID0+IHtcbiAgICBhZGRMb29wKGhvbGUsIGRlcHRoIC8gMiArIC4wMDIsIDMuNyArIGluZGV4KTtcbiAgICBhZGRMb29wKGhvbGUsIC1kZXB0aCAvIDIgLSAuMDAyLCA1LjIgKyBpbmRleCk7XG4gIH0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIC1kZXB0aCAvIDIpLCBtb3ZlKHBvaW50LCBkZXB0aCAvIDIpLCA2LjEgKyBpbmRleCkpO1xuICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwICogKGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEpO1xuICBjb25zdCBicmFuY2hTdHJlbmd0aCA9IChpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSkgKiAoaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyKTtcbiAgY29uc3QgcmFuZG9tID0gKHNlZWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTggKyBzaGFwZS5wb2ludHMubGVuZ3RoICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XG4gICAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGlhbnM6IG51bWJlcik6IE5lb25Qb2ludCA9PiBbXG4gICAgeCAqIE1hdGguY29zKHJhZGlhbnMpIC0geSAqIE1hdGguc2luKHJhZGlhbnMpLFxuICAgIHggKiBNYXRoLnNpbihyYWRpYW5zKSArIHkgKiBNYXRoLmNvcyhyYWRpYW5zKSxcbiAgXTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlID0gTWF0aC5mbG9vcih0aW1lICogMi4zNSArIGluZGV4ICogLjYxKTtcbiAgICBjb25zdCBhZ2UgPSB0aW1lICogMi4zNSArIGluZGV4ICogLjYxIC0gY3ljbGU7XG4gICAgY29uc3Qgc2VlZCA9IGN5Y2xlICogMzcuMSArIGluZGV4ICogMTEuNztcbiAgICBjb25zdCBhY3RpdmVEdXJhdGlvbiA9IC4xOCArIHJhbmRvbShzZWVkICsgMSkgKiAuMjU7XG4gICAgY29uc3QgaGF6ZUR1cmF0aW9uID0gTWF0aC5taW4oMSwgYWN0aXZlRHVyYXRpb24gKyAuMjggKyByYW5kb20oc2VlZCArIDIpICogLjIyKTtcbiAgICBjb25zdCBicmFuY2hBY3RpdmUgPSBhZ2UgPCBhY3RpdmVEdXJhdGlvbjtcbiAgICBjb25zdCBoYXplQWN0aXZlID0gYWdlIDwgaGF6ZUR1cmF0aW9uO1xuICAgIGlmICgoIWJyYW5jaEFjdGl2ZSAmJiAhaGF6ZUFjdGl2ZSkgfHwgcmFuZG9tKHNlZWQgKyAzKSA+IE1hdGgubWluKC43OCwgYnJhbmNoU3RyZW5ndGggKiAuNSkpIHJldHVybjtcbiAgICBjb25zdCBuZXh0ID0gc2hhcGUucG9pbnRzWyhpbmRleCArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aF07XG4gICAgY29uc3QgdCA9IC4xNiArIHJhbmRvbShzZWVkICsgNCkgKiAuNjg7XG4gICAgY29uc3QgYmFzZTogTmVvblBvaW50ID0gW3BvaW50WzBdICsgKG5leHRbMF0gLSBwb2ludFswXSkgKiB0LCBwb2ludFsxXSArIChuZXh0WzFdIC0gcG9pbnRbMV0pICogdF07XG4gICAgY29uc3QgdHggPSBuZXh0WzBdIC0gcG9pbnRbMF0sIHR5ID0gbmV4dFsxXSAtIHBvaW50WzFdLCB0bCA9IE1hdGguaHlwb3QodHgsIHR5KSB8fCAxO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJhbmRvbShzZWVkICsgNSkgPiAuNSA/IDEgOiAtMTtcbiAgICBjb25zdCBwZXJwZW5kaWN1bGFyOiBOZW9uUG9pbnQgPSBbLXR5IC8gdGwgKiBkaXJlY3Rpb24sIHR4IC8gdGwgKiBkaXJlY3Rpb25dO1xuICAgIGNvbnN0IGZpcnN0Sml0dGVyID0gKDEwICsgcmFuZG9tKHNlZWQgKyA2KSAqIDEwKSAqIE1hdGguUEkgLyAxODAgKiAocmFuZG9tKHNlZWQgKyA3KSA+IC41ID8gMSA6IC0xKTtcbiAgICBsZXQgaGVhZGluZyA9IHJvdGF0ZWQocGVycGVuZGljdWxhclswXSwgcGVycGVuZGljdWxhclsxXSwgZmlyc3RKaXR0ZXIpO1xuICAgIGNvbnN0IHNlZ21lbnRDb3VudCA9IDEgKyBNYXRoLmZsb29yKHJhbmRvbShzZWVkICsgOCkgKiAzKTtcbiAgICBjb25zdCBwb2ludHM6IE5lb25Qb2ludFtdID0gW2Jhc2VdO1xuICAgIGZvciAobGV0IHNlZ21lbnQgPSAwOyBzZWdtZW50IDwgc2VnbWVudENvdW50OyBzZWdtZW50KyspIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IC4wNTUgKyByYW5kb20oc2VlZCArIDEwICsgc2VnbWVudCkgKiAuMDk1O1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzWzBdICsgaGVhZGluZ1swXSAqIGxlbmd0aCwgcHJldmlvdXNbMV0gKyBoZWFkaW5nWzFdICogbGVuZ3RoXSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoMjAgKyByYW5kb20oc2VlZCArIDIwICsgc2VnbWVudCkgKiA0MCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaGVhZGluZyA9IHJvdGF0ZWQoaGVhZGluZ1swXSwgaGVhZGluZ1sxXSwgb2Zmc2V0ICogKHJhbmRvbShzZWVkICsgMzAgKyBzZWdtZW50KSA+IC41ID8gMSA6IC0xKSk7XG4gICAgfVxuICAgIGlmIChoYXplQWN0aXZlKSB7XG4gICAgICBjb25zdCBmYWRlID0gMSAtIE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAvIE1hdGgubWF4KC4wMDEsIGhhemVEdXJhdGlvbiAtIGFjdGl2ZUR1cmF0aW9uKTtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pICogLjAzNTtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZW5kID0gcG9pbnRzW3NlZ21lbnQgKyAxXTtcbiAgICAgICAgY29uc3QgaGF6ZVN0YXJ0OiBOZW9uUG9pbnQgPSBbc3RhcnRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIHN0YXJ0WzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgY29uc3QgaGF6ZUVuZDogTmVvblBvaW50ID0gW2VuZFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgZW5kWzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgYWRkTGluZShtb3ZlKGhhemVTdGFydCwgZGVwdGggLyAyICsgLjAwMiksIG1vdmUoaGF6ZUVuZCwgZGVwdGggLyAyICsgLjAwMiksIDMxICsgc2VlZCArIHNlZ21lbnQsIDEuNDUgKyBmYWRlICogLjU1LCBmYWRlICogLjM0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYnJhbmNoQWN0aXZlKSB7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGFkZExpbmUobW92ZShzdGFydCwgZGVwdGggLyAyICsgLjAwNiksIG1vdmUocG9pbnRzW3NlZ21lbnQgKyAxXSwgZGVwdGggLyAyICsgLjAwNiksIDExICsgc2VlZCArIHNlZ21lbnQsIC40Mik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgY2xhc3MgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNsaW5lUGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2RlcHRoOiBHUFVUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICNsYWJlbExheWVyOiBIVE1MRGl2RWxlbWVudDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50ICYmIGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIuY2xhc3NOYW1lID0gXCJuZW9uLXNoYXBlLWxhYmVsLWxheWVyXCI7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaW5zZXQ6XCIwXCIsIHBvaW50ZXJFdmVudHM6XCJub25lXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIgfSk7XG4gICAgcGFyZW50Py5hcHBlbmQodGhpcy4jbGFiZWxMYXllcik7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgZXh0cnVkZWQgc2hhcGUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIsIGN1bGxNb2RlOiBcImJhY2tcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogZmFsc2UsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNsaW5lUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJsaW5lRnJhZ21lbnRcIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICAgIH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3Rvcnkgc2hhcGUgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZlcnRpY2VzID0gaW5zdGFuY2VzLmZsYXRNYXAobWVzaCk7XG4gICAgY29uc3QgZWRnZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChlZGdlTWVzaCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICBjb25zdCBlZGdlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZWRnZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGRhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgZWRnZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBlZGdlRGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBkYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgY29uc3QgZWRnZUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGVkZ2VEYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGlmIChlZGdlRGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGVkZ2VCdWZmZXIsIDAsIGVkZ2VEYXRhKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIDUsIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgMF0pKTtcbiAgICBjb25zdCBiaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGxpbmVCaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI2xpbmVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3sgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLCBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsIHN0b3JlT3A6IFwic3RvcmVcIiB9XSxcbiAgICAgIGRlcHRoU3RlbmNpbEF0dGFjaG1lbnQ6IHsgdmlldzogdGhpcy4jZGVwdGghLmNyZWF0ZVZpZXcoKSwgZGVwdGhDbGVhclZhbHVlOiAxLCBkZXB0aExvYWRPcDogXCJjbGVhclwiLCBkZXB0aFN0b3JlT3A6IFwic3RvcmVcIiB9LFxuICAgIH0pO1xuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIHZlcnRleEJ1ZmZlcik7IHBhc3MuZHJhdyh2ZXJ0aWNlcy5sZW5ndGgpOyB9XG4gICAgaWYgKGVkZ2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI2xpbmVQaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGxpbmVCaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCBlZGdlQnVmZmVyKTsgcGFzcy5kcmF3KGVkZ2VzLmxlbmd0aCk7IH1cbiAgICBwYXNzLmVuZCgpOyB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgICB0aGlzLiNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkudGhlbigoKSA9PiB7IHZlcnRleEJ1ZmZlci5kZXN0cm95KCk7IGVkZ2VCdWZmZXIuZGVzdHJveSgpOyB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHsgdGhpcy4jbGFiZWxMYXllci5yZW1vdmUoKTsgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTsgdGhpcy4jc2NlbmVCdWZmZXIuZGVzdHJveSgpOyBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpOyB9XG4gICNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7XG4gICAgICBsZWZ0OiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0fXB4YCxcbiAgICAgIHRvcDogYCR7dGhpcy5jYW52YXMub2Zmc2V0VG9wfXB4YCxcbiAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICB3aWR0aDogYCR7dGhpcy5jYW52YXMuY2xpZW50V2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHR9cHhgLFxuICAgIH0pO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIucmVwbGFjZUNoaWxkcmVuKC4uLmluc3RhbmNlcy5mbGF0TWFwKGluc3RhbmNlID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2UubGFiZWw/LnRleHQgfHwgKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgPD0gMCkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICAgICAgY29uc3QgeCA9IDUwICsgKGluc3RhbmNlLnggPz8gMCkgKiA0MCAvICh0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCB5ID0gNTAgLSAoaW5zdGFuY2UueSA/PyAwKSAqIDQwO1xuICAgICAgY29uc3Qgc2hhcGVSYWRpdXMgPSBzY2FsZSAqIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIC4yO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2hhcGVSYWRpdXMgKyAoaW5zdGFuY2UubGFiZWwub2Zmc2V0ID8/IDgpICsgKGluc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4KSAqIC41O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnN0YW5jZS5sYWJlbC5wb3NpdGlvbiA/PyBcImFib3ZlXCI7XG4gICAgICBsZXQgdHggPSAwLCB0eSA9IDA7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYWJvdmVcIikgdHkgPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImJlbG93XCIpIHR5ID0gb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImxlZnRcIikgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHR4ID0gb2Zmc2V0O1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGluc3RhbmNlLmxhYmVsLnRleHQ7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OmAke3h9JWAsIHRvcDpgJHt5fSVgLCB0cmFuc2Zvcm06YHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3R4fXB4KSxjYWxjKC01MCUgKyAke3R5fXB4KSlgLFxuICAgICAgICBjb2xvcjppbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvciwgZm9udEZhbWlseTppbnN0YW5jZS5sYWJlbC5mb250RmFtaWx5ID8/IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFNpemU6YCR7aW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTh9cHhgLCBmb250V2VpZ2h0OlN0cmluZyhpbnN0YW5jZS5sYWJlbC5mb250V2VpZ2h0ID8/IDYwMCksXG4gICAgICAgIHRleHRTaGFkb3c6YDAgMCA1cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn0sMCAwIDE0cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn1gLCB3aGl0ZVNwYWNlOlwibm93cmFwXCIsXG4gICAgICAgIG9wYWNpdHk6U3RyaW5nKGluc3RhbmNlLm9wYWNpdHkgPz8gMSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbZWxlbWVudF07XG4gICAgfSkpO1xuICB9XG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuI2xvZ2ljYWxTaXplO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCB8fCAhdGhpcy4jZGVwdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuI2RlcHRoICYmIHRoaXMuY2FudmFzLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlLCBOZW9uU2hhcGVMYWJlbCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgZW51bSBOZW9uU2hhcGVEaXNwb3NhbCB7XG4gIEZhZGVPdXQgPSBcImZhZGVPdXRcIixcbiAgRGlzYXBwZWFyID0gXCJkaXNhcHBlYXJcIixcbiAgRXhwbG9kZSA9IFwiZXhwbG9kZVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZVZlY3RvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUltcGFjdCB7XG4gIGRpcmVjdGlvbjogTmVvblNoYXBlVmVjdG9yO1xuICBtYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVBY3Rvck9wdGlvbnMge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgdmVsb2NpdHk/OiBQYXJ0aWFsPE5lb25TaGFwZVZlY3Rvcj47XG4gIHNjYWxlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw/OiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbj86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uU2hhcGVBY3RvciB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICB2ZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yO1xuICBzY2FsZTogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw6IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlOiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb246IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU6IG51bWJlcjtcbiAgcm90YXRpb25YID0gMDtcbiAgcm90YXRpb25ZID0gMDtcbiAgcm90YXRpb25aID0gMDtcbiAgZGlzcG9zZWQgPSBmYWxzZTtcbiAgI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAjZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICNpbXBhY3RWZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG4gICNpbXBhY3RSb3RhdGlvbjogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblNoYXBlQWN0b3JPcHRpb25zKSB7XG4gICAgdGhpcy5zaGFwZSA9IG9wdGlvbnMuc2hhcGU7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54ID8/IDA7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55ID8/IDA7XG4gICAgdGhpcy56ID0gb3B0aW9ucy56ID8/IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogb3B0aW9ucy52ZWxvY2l0eT8ueCA/PyAwLCB5OiBvcHRpb25zLnZlbG9jaXR5Py55ID8/IDAgfTtcbiAgICB0aGlzLnNjYWxlID0gb3B0aW9ucy5zY2FsZSA/PyAxO1xuICAgIHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZGlzcG9zYWwgPSBvcHRpb25zLmRpc3Bvc2FsID8/IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQ7XG4gICAgdGhpcy5leHBsb2RlTWFnbml0dWRlID0gb3B0aW9ucy5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBvcHRpb25zLmVudHJhbmNlRHVyYXRpb24gPz8gLjQ1O1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBvcHRpb25zLmVudHJhbmNlTWFnbml0dWRlID8/IC41NTtcbiAgfVxuXG4gIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlciwgeiA9IHRoaXMueik6IHRoaXMge1xuICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRWZWxvY2l0eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IHg7IHRoaXMudmVsb2NpdHkueSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbXBhY3QoeyBkaXJlY3Rpb24sIG1hZ25pdHVkZSB9OiBOZW9uU2hhcGVJbXBhY3QpOiB0aGlzIHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgICBjb25zdCB4ID0gZGlyZWN0aW9uLnggLyBsZW5ndGgsIHkgPSBkaXJlY3Rpb24ueSAvIGxlbmd0aDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICs9IHggKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSArPSB5ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKz0geSAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgLT0geCAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzcG9zZShtb2RlID0gdGhpcy5kaXNwb3NhbCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zYWwgPSBtb2RlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIgPyAxIDogLjAwMDE7XG4gICAgaWYgKG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhcikgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbnRlcihkdXJhdGlvbiA9IHRoaXMuZW50cmFuY2VEdXJhdGlvbiwgbWFnbml0dWRlID0gdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSk6IHRoaXMge1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IE1hdGgubWF4KC4wMDEsIGR1cmF0aW9uKTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gbWFnbml0dWRlO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnZW5lcmF0ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gKHRoaXMudmVsb2NpdHkueCArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LngpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSAodGhpcy52ZWxvY2l0eS55ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblggKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWSArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICogZGVsdGFTZWNvbmRzO1xuICAgIGNvbnN0IGRhbXBpbmcgPSBNYXRoLmV4cCgtNyAqIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICo9IGRhbXBpbmc7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICo9IGRhbXBpbmc7XG4gICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPiAwICYmICF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyAuODUgOiAuNTU7XG4gICAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIGR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID49IDEpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy4jZW50cmFuY2VQcm9ncmVzcyA8IDEpIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNlbnRyYW5jZVByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gdGhpcy5lbnRyYW5jZUR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckluc3RhbmNlKG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgICBjb25zdCBmYWRlID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dCA/IDEgLSB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMTtcbiAgICByZXR1cm4ge1xuICAgICAgc2hhcGU6IHRoaXMuc2hhcGUsIHg6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnosIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgcm90YXRpb25YOiB0aGlzLnJvdGF0aW9uWCwgcm90YXRpb25ZOiB0aGlzLnJvdGF0aW9uWSwgcm90YXRpb25aOiB0aGlzLnJvdGF0aW9uWixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLCBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogdGhpcy5kaXNwb3NlZCA/IDAgOiBmYWRlLFxuICAgICAgZW50cmFuY2VQcm9ncmVzczogdGhpcy4jZW50cmFuY2VQcm9ncmVzcyxcbiAgICAgIGVudHJhbmNlTWFnbml0dWRlOiB0aGlzLmVudHJhbmNlTWFnbml0dWRlLFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiB0aGlzLmV4cGxvZGVNYWduaXR1ZGUsXG4gICAgICAuLi5vdmVycmlkZXMsXG4gICAgfTtcbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25QcmltaXRpdmVTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImJvbHRcIiB8IFwib3JiXCIgfCBcInJpbmdcIiB8IFwic3BhcmtcIiB8IFwiZGlhbW9uZFwiIHwgXCJwZW50YWdvblwiIHwgXCJsaW5lXCIgfCBcImFyY1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25QcmltaXRpdmUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcj86IHN0cmluZztcbiAgZ2xvdz86IG51bWJlcjtcbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICB0ZXh0dXJlPzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoPzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgYXJjU3RhcnQ/OiBudW1iZXI7XG4gIGFyY0VuZD86IG51bWJlcjtcbiAgc2hhcGU/OiBOZW9uUHJpbWl0aXZlU2hhcGU7XG59XG5cbmNvbnN0IG1heFByaW1pdGl2ZXMgPSAxMDI0O1xuY29uc3QgZmxvYXRzUGVyUHJpbWl0aXZlID0gMjA7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi8gYFxuc3RydWN0IFNjZW5lIHsgcmVzb2x1dGlvbjogdmVjMmYsIGNvdW50OiBmMzIsIHRpbWU6IGYzMiB9XG5zdHJ1Y3QgUHJpbWl0aXZlIHtcbiAgcG9zaXRpb246IHZlYzJmLFxuICBzaXplOiB2ZWMyZixcbiAgY29sb3I6IHZlYzRmLFxuICBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIGdsb3c6IGYzMixcbiAgaW50ZW5zaXR5OiBmMzIsXG4gIHNoYXBlOiBmMzIsXG4gIHRleHR1cmU6IGYzMixcbiAgcmltSW50ZW5zaXR5OiBmMzIsXG4gIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG4gIHBhZGRpbmc6IHZlYzJmLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGl0ZW1zOiBhcnJheTxQcmltaXRpdmU+O1xuXG5zdHJ1Y3QgVmVydGV4T3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oNCkgc2hhcGU6IGYzMixcbiAgQGxvY2F0aW9uKDUpIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDYpIHRleHR1cmU6IGYzMixcbiAgQGxvY2F0aW9uKDcpIHJpbUludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oOCkgc2hhZG93U3RyZW5ndGg6IGYzMixcbn1cblxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmVydGV4OiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBWZXJ0ZXhPdXRwdXQge1xuICB2YXIgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGl0ZW0gPSBpdGVtc1tpbnN0YW5jZV07XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmVydGV4XTtcbiAgdmFyIHBpeGVsT2Zmc2V0ID0gbG9jYWwgKiBpdGVtLnNpemU7XG4gIGlmIChpdGVtLnRleHR1cmUgIT0gMCkge1xuICAgIGxldCBjID0gY29zKGl0ZW0udGV4dHVyZSk7XG4gICAgbGV0IHMgPSBzaW4oaXRlbS50ZXh0dXJlKTtcbiAgICBwaXhlbE9mZnNldCA9IHZlYzJmKHBpeGVsT2Zmc2V0LnggKiBjIC0gcGl4ZWxPZmZzZXQueSAqIHMsIHBpeGVsT2Zmc2V0LnggKiBzICsgcGl4ZWxPZmZzZXQueSAqIGMpO1xuICB9XG4gIGxldCBwaXhlbCA9IGl0ZW0ucG9zaXRpb24gKyBwaXhlbE9mZnNldDtcbiAgdmFyIG91dHB1dDogVmVydGV4T3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihwaXhlbC54IC8gc2NlbmUucmVzb2x1dGlvbi54ICogMiAtIDEsIDEgLSBwaXhlbC55IC8gc2NlbmUucmVzb2x1dGlvbi55ICogMiwgMCwgMSk7XG4gIG91dHB1dC5sb2NhbCA9IGxvY2FsO1xuICBvdXRwdXQuY29sb3IgPSBpdGVtLmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGl0ZW0uZ2xvdztcbiAgb3V0cHV0LmludGVuc2l0eSA9IGl0ZW0uaW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhcGUgPSBpdGVtLnNoYXBlO1xuICBvdXRwdXQuc2Vjb25kYXJ5Q29sb3IgPSBpdGVtLnNlY29uZGFyeUNvbG9yO1xuICBvdXRwdXQudGV4dHVyZSA9IGl0ZW0udGV4dHVyZTtcbiAgb3V0cHV0LnJpbUludGVuc2l0eSA9IGl0ZW0ucmltSW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhZG93U3RyZW5ndGggPSBpdGVtLnNoYWRvd1N0cmVuZ3RoO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBWZXJ0ZXhPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDcuNSkge1xuICAgIGxldCByYWRpdXMgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICAgIGxldCBhbmdsZSA9IGF0YW4yKGlucHV0LmxvY2FsLnksIGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhbmdsZSA8IGlucHV0LnJpbUludGVuc2l0eSB8fCBhbmdsZSA+IGlucHV0LnNoYWRvd1N0cmVuZ3RoIHx8IHJhZGl1cyA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGxpbmVEaXN0YW5jZSA9IGFicyhyYWRpdXMgLSAwLjc4KTtcbiAgICBpZiAobGluZURpc3RhbmNlID4gMC4xNikgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDEyLCAwLjAzOCwgbGluZURpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMDI1LCAwLjE2LCBsaW5lRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAyMy4wIC0gc2NlbmUudGltZSAqIDguNSkpLCAxNi4wKTtcbiAgICBsZXQgcHVsc2VCID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDExLjAgKyBzY2VuZS50aW1lICogNS4zICsgMS43KSksIDI0LjApO1xuICAgIGxldCBncmFpbiA9IHNpbihhbmdsZSAqIDcxLjAgKyBzY2VuZS50aW1lICogMy4xKSAqIDAuNSArIDAuNTtcbiAgICBsZXQgc3VyZ2UgPSBzbW9vdGhzdGVwKDAuNzIsIDAuOTQsIHB1bHNlQSAqIDAuNyArIHB1bHNlQiAqIDAuNjUgKyBncmFpbiAqIDAuMTIpO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjg4ICsgc3VyZ2UgKiAwLjY1KSArIGhhbG8gKiAoMC4yMiArIHN1cmdlICogMC45KSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHN1cmdlICogMC45KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDYuNSkge1xuICAgIGxldCBhbG9uZyA9IGlucHV0LmxvY2FsLnk7XG4gICAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYWNyb3NzID4gMS4wIHx8IGFicyhhbG9uZykgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjA4LCAwLjI0LCBhY3Jvc3MpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4xMiwgMS4wLCBhY3Jvc3MpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZEZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuNzIsIDEuMCwgYWJzKGFsb25nKSk7XG4gICAgbGV0IHRyYXZlbCA9IHBvdyhtYXgoMC4wLCBzaW4oYWxvbmcgKiAyNC4wIC0gc2NlbmUudGltZSAqIDguMCArIGlucHV0LnRleHR1cmUpKSwgMTQuMCk7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuNzUgKyB0cmF2ZWwgKiAwLjUpICsgaGFsbyAqICgwLjIgKyB0cmF2ZWwgKiAwLjU1KSkgKiBlbmRGYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiB0cmF2ZWwgKiAwLjc1KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDUuNSkge1xuICAgIC8vIFBlbnRhZ29uIFNERlxuICAgIC8vIGxvY2FsIGlzIGluIFstMSwgMV0gcmFuZ2UuIExldCdzIGZpbmQgcGVudGFnb24gZGlzdGFuY2UuXG4gICAgbGV0IHB4ID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGxldCBweSA9IGlucHV0LmxvY2FsLnk7XG4gICAgLy8gUGVudGFnb24gY29uc3RhbnRzIGZvciB2ZXJ0aWNlcy9lZGdlc1xuICAgIGxldCBrID0gdmVjM2YoLTAuODA5MDE2OTk0LCAwLjU4Nzc4NTI1MiwgMS4zNzYzODE5Mik7IC8vIGNvcy9zaW4gb2YgNzIsIHBsdXMgaGVpZ2h0IGZhY3RvclxuICAgIC8vIFByb2plY3QvTWlycm9yIGFjcm9zcyB0aGUgc3ltbWV0cnkgYXhlcyBvZiByZWd1bGFyIHBlbnRhZ29uXG4gICAgdmFyIHAgPSB2ZWMyZihweCwgcHkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoLWsueCwgay55KSwgcCksIDApICogdmVjMmYoLWsueCwgay55KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKGsueCwgay55KSwgcCksIDApICogdmVjMmYoay54LCBrLnkpO1xuICAgIHAueCA9IHAueCAtIGNsYW1wKHAueCwgLWsueiAqIDAuNSwgay56ICogMC41KTtcbiAgICBsZXQgZCA9IGxlbmd0aChwIC0gdmVjMmYoMCwgMC43MikpICogc2lnbihwLnkgLSAwLjcyKTtcbiAgICAvLyBNYXAgZCB0byBhIG5vcm1hbGl6ZWQgcmFkaXVzIHNjYWxlXG4gICAgbGV0IHNjYWxlRCA9IGQgKyAwLjM1OyAvLyBvZmZzZXQgcGVudGFnb24gdG8gZml0IGJvdW5kcyBuaWNlbHlcbiAgICBpZiAoc2NhbGVEID4gMC44KSB7IGRpc2NhcmQ7IH1cbiAgICBcbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNSwgMC42NSwgc2NhbGVEKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjQ1LCAwLjUzLCBzY2FsZUQpICogKDEgLSBzbW9vdGhzdGVwKDAuNjUsIDAuNzUsIHNjYWxlRCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoLTAuMiwgMC41LCBzY2FsZUQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuNTUsIDAuOCwgc2NhbGVEKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM4ICsgYm9yZGVyICogMS4zNTtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjc1ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNDUpICogZmlsbCAqIDAuMzU7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuNDtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNC41KSB7XG4gICAgbGV0IGQgPSBhYnMoaW5wdXQubG9jYWwueCkgKyBhYnMoaW5wdXQubG9jYWwueSk7XG4gICAgaWYgKGQgPiAxLjA4KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNzgsIDAuOTIsIGQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNzIsIDAuODIsIGQpICogKDEgLSBzbW9vdGhzdGVwKDAuOTIsIDEuMDIsIGQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKDAuMCwgMC43OCwgZCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC44MiwgMS4wOCwgZCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zNSArIGJvcmRlciAqIDEuMjtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS42ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNSkgKiBmaWxsICogMC4zODtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zNTtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMS41KSB7XG4gICAgbGV0IHIyID0gZG90KGlucHV0LmxvY2FsLCBpbnB1dC5sb2NhbCk7XG4gICAgaWYgKHIyID4gMSkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IHogPSBzcXJ0KG1heCgwLCAxIC0gcjIpKTtcbiAgICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKHZlYzNmKGlucHV0LmxvY2FsLngsIC1pbnB1dC5sb2NhbC55LCB6KSk7XG4gICAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0wLjU1LCAtMC43LCAwLjkpKTtcbiAgICBsZXQgZGlmZnVzZSA9IG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApO1xuICAgIGxldCByaW0gPSBwb3coMSAtIHosIDIuMikgKiBpbnB1dC5yaW1JbnRlbnNpdHk7XG4gICAgbGV0IHNoYWRvdyA9IG1peCgxIC0gaW5wdXQuc2hhZG93U3RyZW5ndGgsIDEsIHNtb290aHN0ZXAoLTAuNjUsIDAuNDUsIGRvdChub3JtYWwueHksIGxpZ2h0Lnh5KSkpO1xuICAgIGxldCBncmFpbiA9IHNpbihpbnB1dC5sb2NhbC54ICogMjMgKyBpbnB1dC5sb2NhbC55ICogMTcpICogc2luKGlucHV0LmxvY2FsLnkgKiAzMSAtIGlucHV0LmxvY2FsLnggKiAxMSk7XG4gICAgbGV0IHRleHR1cmUgPSAxICsgZ3JhaW4gKiBpbnB1dC50ZXh0dXJlICogMC4yMjtcbiAgICBsZXQgc3BlY3VsYXIgPSBwb3cobWF4KGRvdChyZWZsZWN0KC1saWdodCwgbm9ybWFsKSwgdmVjM2YoMCwwLDEpKSwgMCksIDI4KSAqIDEuODtcbiAgICBsZXQgYm9keSA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZGlmZnVzZSAqIDAuOCArIDAuMikgKiBzaGFkb3cgKiB0ZXh0dXJlO1xuICAgIGxldCBoYWxvID0gcG93KG1heCgwLCAxIC0gbGVuZ3RoKGlucHV0LmxvY2FsKSksIDAuMzUpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcmdiID0gYm9keSAqICgwLjM4ICsgZGlmZnVzZSAqIDAuOTUpICsgaW5wdXQuY29sb3IucmdiICogcmltICsgdmVjM2Yoc3BlY3VsYXIpICsgaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMztcbiAgICByZXR1cm4gdmVjNGYocmdiICogaW5wdXQuaW50ZW5zaXR5LCAxKTtcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICBpZiAoaW5wdXQuc2hhcGUgPiAzLjUpIHtcbiAgICBsZXQgYXhpcyA9IG1pbihhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gICAgbGV0IGFybSA9IDEgLSBzbW9vdGhzdGVwKDAuMDQsIDAuMTgsIGF4aXMpO1xuICAgIGxldCBmYWRlID0gMSAtIHNtb290aHN0ZXAoMC4yLCAxLCBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpKTtcbiAgICBsZXQgZW5lcmd5ID0gYXJtICogZmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBhcm0pICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDIuNSkge1xuICAgIGxldCByaW5nRGlzdGFuY2UgPSBhYnMobGVuZ3RoKGlucHV0LmxvY2FsKSAtIDAuNjIpO1xuICAgIGxldCByaW5nID0gMSAtIHNtb290aHN0ZXAoMC4wNTUsIDAuMTgsIHJpbmdEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4xMiwgMC40MiwgcmluZ0Rpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmVyZ3kgPSAocmluZyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCByaW5nKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDAuNSkge1xuICAgIGRpc3RhbmNlID0gbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgfVxuICBsZXQgY29yZSA9IDEgLSBzbW9vdGhzdGVwKDAuMzgsIDAuNzYsIGRpc3RhbmNlKTtcbiAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4zLCAxLCBkaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgbGV0IGVuZXJneSA9IChjb3JlICsgaGFsbyAqIDAuNTUpICogaW5wdXQuaW50ZW5zaXR5O1xuICBsZXQgY2hyb21hdGljQ29yZSA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgcG93KG1heChjb3JlLCAwKSwgMikpO1xuICBsZXQgcmF3ID0gY2hyb21hdGljQ29yZSAqIChjb3JlICogMS4wNSArIGhhbG8gKiAwLjQyKTtcbiAgbGV0IHJnYiA9IHJhdyAvICh2ZWMzZigxKSArIHJhdyAqIDAuMzIpO1xuICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbn1cbmA7XG5cbmZ1bmN0aW9uIHJnYmEoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHZhbHVlID0gaGV4LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICBpZiAoIS9eWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgc2l4LWRpZ2l0IGhleCBjb2xvciwgcmVjZWl2ZWQgXCIke2hleH1cIi5gKTtcbiAgcmV0dXJuIFtcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMCwgMiksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMiwgNCksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoNCwgNiksIDE2KSAvIDI1NSxcbiAgICAxLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblByaW1pdGl2ZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI3ByaW1pdGl2ZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjYmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgIHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHsgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSwgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNwcmltaXRpdmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IG1heFByaW1pdGl2ZXMgKiBmbG9hdHNQZXJQcmltaXRpdmUgKiA0LFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcbiAgICB0aGlzLiNiaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9LFxuICAgICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jcHJpbWl0aXZlQnVmZmVyIH0gfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25QcmltaXRpdmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2FudmFzIGNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSwgdGltZVNlY29uZHMgPSAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZpc2libGUgPSBwcmltaXRpdmVzLnNsaWNlKDAsIG1heFByaW1pdGl2ZXMpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZpc2libGUubGVuZ3RoICogZmxvYXRzUGVyUHJpbWl0aXZlKTtcbiAgICB2aXNpYmxlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlclByaW1pdGl2ZTtcbiAgICAgIGRhdGEuc2V0KFtcbiAgICAgICAgaXRlbS54LCBpdGVtLnksIGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0ID8/IGl0ZW0ud2lkdGgsXG4gICAgICAgIC4uLnJnYmEoaXRlbS5jb2xvciksXG4gICAgICAgIC4uLnJnYmEoaXRlbS5zZWNvbmRhcnlDb2xvciA/PyBpdGVtLmNvbG9yKSxcbiAgICAgICAgaXRlbS5nbG93ID8/IDAuNSxcbiAgICAgICAgaXRlbS5pbnRlbnNpdHkgPz8gMSxcbiAgICAgICAgaXRlbS5zaGFwZSA9PT0gXCJhcmNcIiA/IDggOiBpdGVtLnNoYXBlID09PSBcImxpbmVcIiA/IDcgOiBpdGVtLnNoYXBlID09PSBcInBlbnRhZ29uXCIgPyA2IDogaXRlbS5zaGFwZSA9PT0gXCJkaWFtb25kXCIgPyA1IDogaXRlbS5zaGFwZSA9PT0gXCJzcGFya1wiID8gNCA6IGl0ZW0uc2hhcGUgPT09IFwicmluZ1wiID8gMyA6IGl0ZW0uc2hhcGUgPT09IFwib3JiXCIgPyAyIDogaXRlbS5zaGFwZSA9PT0gXCJib2x0XCIgPyAxIDogMCxcbiAgICAgICAgaXRlbS5yb3RhdGlvbiA/PyBpdGVtLnRleHR1cmUgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNTdGFydCA/PyBpdGVtLnJpbUludGVuc2l0eSA/PyAwLFxuICAgICAgICBpdGVtLmFyY0VuZCA/PyBpdGVtLnNoYWRvd1N0cmVuZ3RoID8/IDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICBdLCBvZmZzZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB2aXNpYmxlLmxlbmd0aCwgdGltZVNlY29uZHNdKSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNwcmltaXRpdmVCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICAgIGNsZWFyVmFsdWU6IHsgcjogMC4wMDYsIGc6IDAuMDA5LCBiOiAwLjAyNSwgYTogMSB9LFxuICAgICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgaWYgKHZpc2libGUubGVuZ3RoKSB7XG4gICAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmRHcm91cCk7XG4gICAgICBwYXNzLmRyYXcoNiwgdmlzaWJsZS5sZW5ndGgpO1xuICAgIH1cbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24gPSBcImZhZGVcIiB8IFwiZXhwYW5kRmFkZVwiIHwgXCJpbXBsb2RlXCIgfCBcInNwYXJrRmFkZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICBjb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgZGV0YWlsPzogbnVtYmVyO1xuICB0dXJidWxlbmNlPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBjb3JlSW50ZW5zaXR5PzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uVGltZT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25BY3Rpb24/OiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbjtcbiAgZHJpZnRYPzogbnVtYmVyO1xuICBkcmlmdFk/OiBudW1iZXI7XG4gIHNlZWQ/OiBudW1iZXI7XG4gIGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgZXh0ZW5kcyBPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwieFwiIHwgXCJ5XCIgfCBcInNpemVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xufVxuXG50eXBlIENsb3VkID0gUmVxdWlyZWQ8T21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcImNvcmVDb2xvclwiPj4gJiB7IGNvcmVDb2xvcjogc3RyaW5nOyBhZ2U6IG51bWJlciB9O1xuXG5jb25zdCBtYXhDbG91ZHMgPSA5NjtcbmNvbnN0IGZsb2F0c1BlckNsb3VkID0gMjQ7XG5cbmNvbnN0IGRlZmF1bHRzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPiA9IHtcbiAgY29sb3I6IFwiIzYzZThmZlwiLFxuICBjb3JlQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGlvbjogMCxcbiAgc2l6ZTogLjI1LFxuICBkZXRhaWw6IDUsXG4gIHR1cmJ1bGVuY2U6IC43NSxcbiAgZ2xvdzogNCxcbiAgY29yZUludGVuc2l0eTogMS40LFxuICByaW1JbnRlbnNpdHk6IC44NSxcbiAgb3BhY2l0eTogMSxcbiAgZGlzc2lwYXRpb25UaW1lOiAuNyxcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwiZXhwYW5kRmFkZVwiLFxuICBkcmlmdFg6IDAsXG4gIGRyaWZ0WTogMCxcbiAgc2VlZDogMCxcbiAgYWdlOiAwLFxufTtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKS5wYWRFbmQoNiwgXCIwXCIpLnNsaWNlKDAsIDYpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IgPSAoY29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IFtyLCBnLCBiXSA9IGhleChjb2xvcik7XG4gIGNvbnN0IGxpZnQgPSAoY2hhbm5lbDogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKChjaGFubmVsICsgKDEgLSBjaGFubmVsKSAqIC43OCkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIHJldHVybiBgIyR7bGlmdChyKX0ke2xpZnQoZyl9JHtsaWZ0KGIpfWA7XG59O1xuXG5jb25zdCBhY3Rpb25WYWx1ZSA9IChhY3Rpb246IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uKTogbnVtYmVyID0+XG4gIGFjdGlvbiA9PT0gXCJmYWRlXCIgPyAwIDogYWN0aW9uID09PSBcImV4cGFuZEZhZGVcIiA/IDEgOiBhY3Rpb24gPT09IFwiaW1wbG9kZVwiID8gMiA6IDM7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgQ2xvdWQge1xuICBwb3M6IHZlYzJmLFxuICB2ZWxvY2l0eTogdmVjMmYsXG4gIGFnZTogZjMyLFxuICBsaWZlOiBmMzIsXG4gIHNpemU6IGYzMixcbiAgcm90YXRpb246IGYzMixcbiAgc2VlZDogZjMyLFxuICBhY3Rpb246IGYzMixcbiAgY29sb3I6IHZlYzRmLFxuICBjb3JlOiB2ZWM0ZixcbiAgdHVuaW5nOiB2ZWM0Zixcbn1cbnN0cnVjdCBHbG9iYWxzIHtcbiAgYXNwZWN0OiBmMzIsXG4gIHRpbWU6IGYzMixcbiAgY291bnQ6IGYzMixcbiAgYmFja2dyb3VuZDogZjMyLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBnbG9iYWxzOiBHbG9iYWxzO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBjbG91ZHM6IGFycmF5PENsb3VkPjtcblxuZm4gaGFzaChwOiB2ZWMyZikgLT4gZjMyIHtcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3QocCwgdmVjMmYoMTI3LjEsIDMxMS43KSkpICogNDM3NTguNTQ1MzEyMyk7XG59XG5mbiBub2lzZShwOiB2ZWMyZikgLT4gZjMyIHtcbiAgbGV0IGkgPSBmbG9vcihwKTtcbiAgbGV0IGYgPSBmcmFjdChwKTtcbiAgbGV0IHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgcmV0dXJuIG1peChtaXgoaGFzaChpKSwgaGFzaChpICsgdmVjMmYoMSwwKSksIHUueCksIG1peChoYXNoKGkgKyB2ZWMyZigwLDEpKSwgaGFzaChpICsgdmVjMmYoMSwxKSksIHUueCksIHUueSk7XG59XG5mbiBmYm0ocDogdmVjMmYsIG9jdGF2ZXM6IGYzMikgLT4gZjMyIHtcbiAgdmFyIHYgPSAwLjA7XG4gIHZhciBhID0gMC41O1xuICB2YXIgcSA9IHA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgaWYgKGYzMihpKSA+PSBvY3RhdmVzKSB7IGJyZWFrOyB9XG4gICAgdiArPSBhICogbm9pc2UocSk7XG4gICAgcSA9IHEgKiAyLjAzICsgdmVjMmYoNi45LCAzLjcpO1xuICAgIGEgKj0gMC41MjtcbiAgfVxuICByZXR1cm4gdjtcbn1cbmZuIHJvdGF0ZShwOiB2ZWMyZiwgYTogZjMyKSAtPiB2ZWMyZiB7XG4gIGxldCBjID0gY29zKGEpO1xuICBsZXQgcyA9IHNpbihhKTtcbiAgcmV0dXJuIHZlYzJmKHAueCAqIGMgLSBwLnkgKiBzLCBwLnggKiBzICsgcC55ICogYyk7XG59XG5zdHJ1Y3QgT3V0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIEBpbnRlcnBvbGF0ZShmbGF0KSBpbnN0YW5jZTogdTMyLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmk6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IE91dCB7XG4gIGxldCBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgYyA9IGNsb3Vkc1tpbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGFjdGlvblNjYWxlID0gc2VsZWN0KDEuMCArIGxpZmVUICogMS44NSwgMS4wIC0gbGlmZVQgKiAuNjIsIGMuYWN0aW9uID4gMS41ICYmIGMuYWN0aW9uIDwgMi41KTtcbiAgbGV0IHJhZGl1cyA9IG1heCguMDAxLCBjLnNpemUgKiBhY3Rpb25TY2FsZSkgKiAyLjM1O1xuICB2YXIgY2VudGVyID0gYy5wb3MgKyBjLnZlbG9jaXR5ICogYy5hZ2U7XG4gIGNlbnRlci54ICo9IGdsb2JhbHMuYXNwZWN0O1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZpXTtcbiAgbGV0IHAgPSBjZW50ZXIgKyBsb2NhbCAqIHJhZGl1cztcbiAgdmFyIG86IE91dDtcbiAgby5wb3NpdGlvbiA9IHZlYzRmKHAueCAvIGdsb2JhbHMuYXNwZWN0LCBwLnksIDAsIDEpO1xuICBvLmxvY2FsID0gbG9jYWwgKiAyLjM1O1xuICBvLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIHJldHVybiBvO1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYyA9IGNsb3Vkc1tpbnB1dC5pbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGxvY2FsID0gcm90YXRlKGlucHV0LmxvY2FsLCAtYy5yb3RhdGlvbiAtIGxpZmVUICogLjQ1KTtcbiAgbGV0IHIgPSBsZW5ndGgobG9jYWwpO1xuICBpZiAociA+PSAyLjM1KSB7IGRpc2NhcmQ7IH1cbiAgbGV0IGRldGFpbCA9IGNsYW1wKGMudHVuaW5nLngsIDEuMCwgNy4wKTtcbiAgbGV0IHR1cmJ1bGVuY2UgPSBjLnR1bmluZy55O1xuICBsZXQgd2lzcHkgPSBmYm0obG9jYWwgKiAoMS43ICsgZGV0YWlsICogLjE2KSArIHZlYzJmKGMuc2VlZCwgYy5zZWVkICogLjcxKSArIGdsb2JhbHMudGltZSAqIHZlYzJmKC4xNiwgLjA5KSAqIHR1cmJ1bGVuY2UsIG1pbihkZXRhaWwsIDQuMCkpO1xuICBsZXQgY29yZSA9IGV4cCgtciAqIHIgKiAoMS4yICsgYy50dW5pbmcueiAqIC4yMikpO1xuICBsZXQgcmltID0gZXhwKC1hYnMociAtIC43MikgKiAzLjYpO1xuICBsZXQgc3BhcmsgPSBwb3cobWF4KDAuMCwgc2luKHdpc3B5ICogMTYuMCArIGMuc2VlZCArIGdsb2JhbHMudGltZSAqIDkuMCkpLCAxNC4wKSAqIHNlbGVjdCgwLjAsIDEuMCwgYy5hY3Rpb24gPiAyLjUpO1xuICBsZXQgZGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMS40NSwgMi4zNSwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IHJpbURpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDIuNywgMy44LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgZWRnZUZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDEuNzUsIDIuMzUsIHIpO1xuICBsZXQgZGVuc2l0eSA9IChjb3JlICogLjcyICsgcmltICogLjI0ICogcmltRGlzc2lwYXRlICsgd2lzcHkgKiAuMjIgKyBzcGFyayAqIC41NSkgKiBkaXNzaXBhdGUgKiBjLnR1bmluZy53ICogZWRnZUZhZGU7XG4gIGxldCBob3RDb3JlID0gYy5jb3JlLnJnYiAqIGNvcmUgKiBjLnR1bmluZy56ICogKDEuMCArIHNwYXJrKTtcbiAgbGV0IG5lb25SaW0gPSBjLmNvbG9yLnJnYiAqIChkZW5zaXR5ICogKC43NSArIGMuY29sb3IuYSAqIC4wOCkgKyByaW0gKiByaW1EaXNzaXBhdGUgKiBjLmNvbG9yLmEgKiAuMDgpO1xuICBsZXQgZ2xvdyA9IG5lb25SaW0gKyBob3RDb3JlICogZGVuc2l0eTtcbiAgcmV0dXJuIHZlYzRmKGdsb3csIGNsYW1wKGRlbnNpdHkgKiAuODUgKyBzcGFyayAqIC4yNSwgMC4wLCAxLjApKTtcbn1gO1xuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RBY3RvciB7XG4gIHNldHRpbmdzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPjtcbiAgYWdlID0gMDtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MgPSB7fSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRzLCAuLi5zZXR0aW5ncywgc2VlZDogc2V0dGluZ3Muc2VlZCA/PyBNYXRoLnJhbmRvbSgpICogMTAwMCB9O1xuICB9XG4gIHVwZGF0ZShkdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy5hZ2UgKz0gZHQ7XG4gICAgcmV0dXJuIHRoaXMuYWdlIDwgdGhpcy5zZXR0aW5ncy5kaXNzaXBhdGlvblRpbWU7XG4gIH1cbiAgcmVuZGVySW5zdGFuY2UoKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5zZXR0aW5ncywgc2VlZDogdGhpcy5zZXR0aW5ncy5zZWVkIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNidWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2dsb2JhbHM6IEdQVUJ1ZmZlcjtcbiAgI2JpbmQ6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBwcm9jZWR1cmFsIGNsb3VkIHZvbHVtZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2dsb2JhbHMgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkICogNCwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNiaW5kID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbXG4gICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jZ2xvYmFscyB9IH0sXG4gICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jYnVmZmVyIH0gfSxcbiAgICBdIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBjbG91ZCBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGNsb3VkczogcmVhZG9ubHkgTmVvbkNsb3VkQnVyc3RTZXR0aW5nc1tdLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCBwYWNrZWQgPSBuZXcgRmxvYXQzMkFycmF5KG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkKTtcbiAgICBjbG91ZHMuc2xpY2UoMCwgbWF4Q2xvdWRzKS5mb3JFYWNoKChjbG91ZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGMgPSB7IC4uLmRlZmF1bHRzLCAuLi5jbG91ZCB9O1xuICAgICAgY29uc3QgY29sb3IgPSBoZXgoYy5jb2xvciksIGNvcmUgPSBoZXgoYy5jb3JlQ29sb3IpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJDbG91ZDtcbiAgICAgIHBhY2tlZC5zZXQoW2MueCwgYy55LCBjLmRyaWZ0WCwgYy5kcmlmdFksIGMuYWdlID8/IDAsIGMuZGlzc2lwYXRpb25UaW1lLCBjLnNpemUsIGMucm90YXRpb24sIGMuc2VlZCwgYWN0aW9uVmFsdWUoYy5kaXNzaXBhdGlvbkFjdGlvbiksIDAsIDBdLCBvZmZzZXQpO1xuICAgICAgcGFja2VkLnNldChbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgYy5nbG93LCBjb3JlWzBdLCBjb3JlWzFdLCBjb3JlWzJdLCBjLmNvcmVJbnRlbnNpdHksIGMuZGV0YWlsLCBjLnR1cmJ1bGVuY2UsIGMucmltSW50ZW5zaXR5LCBjLm9wYWNpdHldLCBvZmZzZXQgKyAxMik7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jYnVmZmVyLCAwLCBwYWNrZWQpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2dsb2JhbHMsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCB0aW1lU2Vjb25kcywgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSwgMF0pKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3MoeyBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sXG4gICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICB9XSB9KTtcbiAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kKTtcbiAgICBwYXNzLmRyYXcoNiwgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSk7XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gIG1hcFRvcERvd25DbG91ZChjbG91ZDogTmVvblRvcERvd25DbG91ZEJ1cnN0LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgY29uc3QgYXNwZWN0ID0gbG9naWNhbFdpZHRoIC8gbG9naWNhbEhlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xvdWQsXG4gICAgICB4OiAoY2xvdWQueCAvIGxvZ2ljYWxXaWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIGNsb3VkLnkgLyBsb2dpY2FsSGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNpemU6IGNsb3VkLnNpemUgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgICAgZHJpZnRYOiAoY2xvdWQuZHJpZnRYID8/IDApIC8gbG9naWNhbFdpZHRoICogYXNwZWN0ICogMi41LFxuICAgICAgZHJpZnRZOiAtKGNsb3VkLmRyaWZ0WSA/PyAwKSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLiNidWZmZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuI2dsb2JhbHMuZGVzdHJveSgpO1xuICAgIGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIsIHR5cGUgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIsIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0IH0gZnJvbSBcIi4vY2xvdWQtYnVyc3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNoYXBlIGV4dGVuZHMgT21pdDxOZW9uU2hhcGVJbnN0YW5jZSwgXCJ4XCIgfCBcInlcIiB8IFwic2NhbGVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2NlbmUge1xuICBwcmltaXRpdmVzPzogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiByZWFkb25seSBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzPzogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlUmVuZGVyZXI7XG4gICNjbG91ZHM6IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI7XG4gICNzaGFwZXM6IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyO1xuICAjd2lkdGg6IG51bWJlcjtcbiAgI2hlaWdodDogbnVtYmVyO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDsgdGhpcy4jd2lkdGggPSB3aWR0aDsgdGhpcy4jaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMgPSBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI2Nsb3VkcyA9IG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI3NoYXBlcyA9IG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IFByb21pc2U8TmVvblRvcERvd25TY2VuZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5IHRvcC1kb3duIHNjZW5lcy5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCwgbG9naWNhbFdpZHRoLCBsb2dpY2FsSGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzY2VuZTogTmVvblRvcERvd25TY2VuZSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDApOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpO1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMucmVuZGVyKFsuLi4oc2NlbmUucHJpbWl0aXZlcyA/PyBbXSldLCB0aW1lU2Vjb25kcywgZmFsc2UsIHRhcmdldCk7XG4gICAgY29uc3QgY2xvdWRzID0gc2NlbmUuY2xvdWRzID8/IFtdO1xuICAgIGNvbnN0IGFzcGVjdCA9IHRoaXMuI3dpZHRoIC8gdGhpcy4jaGVpZ2h0O1xuICAgIGNvbnN0IHNoYXBlcyA9IHNjZW5lLnNoYXBlcyA/PyBbXTtcbiAgICBpZiAoc2hhcGVzLmxlbmd0aCkgdGhpcy4jc2hhcGVzLnJlbmRlcihzaGFwZXMubWFwKHNoYXBlID0+ICh7XG4gICAgICAuLi5zaGFwZSxcbiAgICAgIHg6IChzaGFwZS54IC8gdGhpcy4jd2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBzaGFwZS55IC8gdGhpcy4jaGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNjYWxlOiBzaGFwZS5zaXplIC8gdGhpcy4jaGVpZ2h0ICogMi41LFxuICAgIH0pKSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgICBpZiAoY2xvdWRzLmxlbmd0aCkgdGhpcy4jY2xvdWRzLnJlbmRlcihjbG91ZHMubWFwKGNsb3VkID0+IHRoaXMuI2Nsb3Vkcy5tYXBUb3BEb3duQ2xvdWQoY2xvdWQsIHRoaXMuI3dpZHRoLCB0aGlzLiNoZWlnaHQpKSwgdGltZVNlY29uZHMsIHRydWUpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiNzaGFwZXMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy4jY2xvdWRzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB0eXBlIHsgTmVvblRvcERvd25TY2VuZSB9IGZyb20gXCIuL3RvcC1kb3duLXNjZW5lXCI7XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyU2NlbmVJZHMgPSBbXCJuZW9uSGFsbFwiXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQgPSB0eXBlb2YgbGFuZVJ1bm5lclNjZW5lSWRzW251bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyB7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdGltZU1zOiBudW1iZXI7XG59XG5cbmNvbnN0IHNjZW5lTmFtZXM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgc3RyaW5nPiA9IHtcbiAgbmVvbkhhbGw6IFwiTmVvbiBIYWxsXCIsXG59O1xuXG5jb25zdCBoYWxsQm90dG9tV2lkdGggPSAwLjkyO1xuY29uc3QgaGFsbEZsb29yQ29sb3IgPSBcIiMwNTEwMWZcIjtcbmNvbnN0IGhhbGxEZWVwQmx1ZSA9IFwiIzEyMzU2YVwiO1xuY29uc3QgaGFsbE11dGVkQmx1ZSA9IFwiIzFiNGM4ZFwiO1xuY29uc3QgaGFsbE11dGVkQ3lhbiA9IFwiIzJhYzRkY1wiO1xuY29uc3QgaGFsbE11dGVkVmlvbGV0ID0gXCIjNDUzMDc5XCI7XG5jb25zdCBoYWxsQWNjZW50UGluayA9IFwiI2E3MzU3ZVwiO1xuY29uc3QgaGFsbEVuZXJneVNwZWVkID0gMC4wMDE3O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgc3dpdGNoIChvcHRpb25zLnNjZW5lSWQpIHtcbiAgICBjYXNlIFwibmVvbkhhbGxcIjpcbiAgICAgIHJldHVybiBjcmVhdGVOZW9uSGFsbChvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBoYWxsR2VvbWV0cnkod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkSGFsbEJhc2UocHJpbWl0aXZlcywgd2lkdGgsIGhlaWdodCwgdGltZU1zKTtcbiAgYWRkSGFsbFJhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5KTtcbiAgYWRkSGFsbENyb3NzYmFycyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRmxvb3JHbHlwaHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbFNpZGVQYW5lbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxFbmVyZ3lUcmFjZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBoYWxsR2VvbWV0cnkod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IC1oZWlnaHQgfTtcbiAgY29uc3QgYm90dG9tWSA9IGhlaWdodCAqIC45ODU7XG4gIGNvbnN0IGJvdHRvbUhhbGYgPSB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCAqIC41O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2cCxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICBsZWZ0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRIYWxsQmFzZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgcHVsc2UgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgKiBoYWxsRW5lcmd5U3BlZWQpICogLjI7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIC40Miwgd2lkdGg6IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoLCBoZWlnaHQ6IGhlaWdodCAqIDEuMDgsIGNvbG9yOiBoYWxsRmxvb3JDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IFwiIzAyMDUwZFwiLCBnbG93OiAuMDUsIGludGVuc2l0eTogLjIzLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuOSwgd2lkdGg6IHdpZHRoICogLjM0LCBoZWlnaHQ6IDEuNCwgY29sb3I6IGhhbGxEZWVwQmx1ZSwgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZEN5YW4sIGdsb3c6IC4zLCBpbnRlbnNpdHk6IC4xOCArIHB1bHNlICogLjA3LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuNzgsIHdpZHRoOiB3aWR0aCAqIC4xOCwgaGVpZ2h0OiAxLjIsIGNvbG9yOiBoYWxsQWNjZW50UGluaywgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCwgZ2xvdzogLjI0LCBpbnRlbnNpdHk6IC4wOCwgc2hhcGU6IFwiYm9sdFwiIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRIYWxsUmFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4pOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3QgW2JvdHRvbSwgaG9yaXpvbl0gb2YgW1tsZWZ0Qm90dG9tLCBsZWZ0SG9yaXpvbl0sIFtyaWdodEJvdHRvbSwgcmlnaHRIb3Jpem9uXV0gYXMgY29uc3QpIHtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBoYWxsRGVlcEJsdWUsIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBoYWxsTXV0ZWRDeWFuLCAuNTYsIDEuMyk7XG4gIH1cblxuICBmb3IgKGxldCBsYW5lID0gMTsgbGFuZSA8PSAzOyBsYW5lKyspIHtcbiAgICBjb25zdCB1ID0gbGFuZSAvIDQ7XG4gICAgY29uc3Qgc3RhcnQgPSBsZXJwUG9pbnQobGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIHUpO1xuICAgIGNvbnN0IGVuZCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBjb2xvciA9IGxhbmUgPT09IDIgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsTXV0ZWRCbHVlO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBjb2xvciwgbGFuZSA9PT0gMiA/IC4yOCA6IC4yLCAzLjQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBoYWxsTXV0ZWRDeWFuLCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbENyb3NzYmFycyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDE1OyByb3crKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgcm93UHVsc2UgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA0ODAgKyByb3cgKiAuNzgpICogLjQyO1xuICAgIGNvbnN0IHN1cmdlID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZU1zIC8gODIwIC0gcm93ICogLjcyKSk7XG4gICAgY29uc3QgY29sb3IgPSByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IHJvdyAlIDQgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogcm93ICUgNCA9PT0gMiA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxBY2NlbnRQaW5rO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMTUgKyB0ICogLjIzKSAqICguNTUgKyByb3dQdWxzZSAqIC40NSkgKyBzdXJnZSAqIC4wNTUsIDMuMSArIHQgKiAyKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjIgKyB0ICogLjI3KSAqICguNTIgKyByb3dQdWxzZSAqIC40OCkgKyBzdXJnZSAqIC4wNywgLjc1ICsgdCAqIC42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDc7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxOTAwICsgcHVsc2VJbmRleCAvIDcpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjU1KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjM0ICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgaGFsbE11dGVkQ3lhbiwgb3BhY2l0eSwgMS4xICsgdCAqIDEuNCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEZsb29yR2x5cGhzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3Qgcm93cyA9IFsyLCA0LCA2LCA4LCAxMCwgMTJdO1xuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBjZW50ZXIgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCAuNSk7XG4gICAgY29uc3Qgc2NhbGUgPSAuNDUgKyB0ICogMS4xO1xuICAgIGNvbnN0IHB1bHNlID0gLjQ4ICsgTWF0aC5zaW4odGltZU1zIC8gNzIwICsgcm93ICogMS4zKSAqIC4yNDtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGNlbnRlci54LFxuICAgICAgeTogY2VudGVyLnksXG4gICAgICB3aWR0aDogNyAqIHNjYWxlLFxuICAgICAgaGVpZ2h0OiA3ICogc2NhbGUsXG4gICAgICBjb2xvcjogcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxEZWVwQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiByb3cgJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMjQgKyBwdWxzZSAqIC4xNixcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsSG9yaXpvbkRldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQsIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCBnbG93UHVsc2UgPSAuNzUgKyBNYXRoLnNpbih0aW1lTXMgLyA2ODApICogLjI1O1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIHsgeDogdnAueCArIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCBoYWxsQWNjZW50UGluaywgLjIgKyBnbG93UHVsc2UgKiAuMDgsIDEuMSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54IC0gd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZEN5YW4sIC4xNiwgLjg1KTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCArIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkVmlvbGV0LCAuMTYsIC44NSk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4ICsgLjUpIC8gODtcbiAgICBjb25zdCBiYXNlID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IHNpZGVCaWFzID0gTWF0aC5hYnModSAtIC41KSAqIDI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBiYXNlLngsXG4gICAgICB5OiBiYXNlLnkgLSBoZWlnaHQgKiAoLjAxOCArIHNpZGVCaWFzICogLjAxOCksXG4gICAgICB3aWR0aDogMSArIHNpZGVCaWFzICogLjcsXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgc2lkZUJpYXMgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxBY2NlbnRQaW5rLFxuICAgICAgZ2xvdzogLjI0LFxuICAgICAgaW50ZW5zaXR5OiAuMDcgKyBnbG93UHVsc2UgKiAuMDM1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKGluZGV4ICogMS43KSAqIC4xMixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsU2lkZVBhbmVscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3Qgc2lkZSBvZiBbMCwgMV0pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTAsIDEuNjgpO1xuICAgICAgY29uc3QgcmFpbCA9IHNpZGUgPT09IDBcbiAgICAgICAgPyBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpXG4gICAgICAgIDogbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgICAgY29uc3Qgb3V0d2FyZCA9IHNpZGUgPT09IDAgPyAtMSA6IDE7XG4gICAgICBjb25zdCBmbGlja2VyID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNjAwICsgaW5kZXggKiAxLjUgKyBzaWRlKSAqIC4yODtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB4OiByYWlsLnggKyBvdXR3YXJkICogd2lkdGggKiAoLjAzNSArIHQgKiAuMDYpLFxuICAgICAgICB5OiByYWlsLnkgLSBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDEyKSxcbiAgICAgICAgd2lkdGg6IDEuMiArIHQgKiAxLjIsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyB0ICogLjA4KSxcbiAgICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICAgIGdsb3c6IC4zLFxuICAgICAgICBpbnRlbnNpdHk6ICguMDc1ICsgdCAqIC4wNjUpICogZmxpY2tlcixcbiAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxFbmVyZ3lUcmFjZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4xMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMTE2O1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS43KSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA9PT0gMCA/IC4xOCA6IGluZGV4ICUgNCA9PT0gMSA/IC4zNCA6IGluZGV4ICUgNCA9PT0gMiA/IC42NiA6IC44MjtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgc2lkZSArIE1hdGguc2luKGluZGV4ICogMS43ICsgdGltZU1zIC8gMTcwMCkgKiAuMDM1KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gMzkwICsgaW5kZXggKiAxLjEpICogLjM4O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogLjggKyBpbmRleCAlIDMgKiAuNSxcbiAgICAgIGhlaWdodDogMTAgKyBpbmRleCAlIDUgKiA3LFxuICAgICAgY29sb3I6IGluZGV4ICUgNSA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxNdXRlZEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgKGluZGV4ICUgNCkgKiAuMDE4KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkR2xvd2luZ0xpbmUoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGNvbG9yOiBzdHJpbmcsIGFscGhhOiBudW1iZXIsIHRoaWNrbmVzczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGR4ID0gYi54IC0gYS54O1xuICBjb25zdCBkeSA9IGIueSAtIGEueTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBpdGVtcy5wdXNoKHtcbiAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgIHdpZHRoOiB0aGlja25lc3MsXG4gICAgaGVpZ2h0OiBsZW5ndGggLyAyLFxuICAgIGNvbG9yLFxuICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS53aGl0ZUhvdCxcbiAgICBnbG93OiAuMzIsXG4gICAgaW50ZW5zaXR5OiBhbHBoYSxcbiAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsZXJwUG9pbnQoYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHQ6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIHJldHVybiB7IHg6IGEueCArIChiLnggLSBhLngpICogdCwgeTogYS55ICsgKGIueSAtIGEueSkgKiB0IH07XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBDb21iYXRUdW5pbmcge1xuICAvKipcbiAgICogTXVsdGlwbGllcyB0aGUgd2hvbGUgY29tYmF0IHNpbXVsYXRpb24gcGFjZSB3aGlsZSBwcmVzZXJ2aW5nIHJlbGF0aXZlXG4gICAqIHRpbWluZyBiZXR3ZWVuIG1vdmVtZW50LCBjb29sZG93bnMsIHByb2plY3RpbGVzLCBhbmQgYXV0aG9yZWQgdHJhY2sgYmVhdHMuXG4gICAqL1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbWJhdFR1bmluZyA9IHtcbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiAxLjUsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBDb21iYXRUdW5pbmc7XG5cbmlmICghTnVtYmVyLmlzRmluaXRlKGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIpIHx8IGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIgPD0gMCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb21iYXRUdW5pbmc6IGdsb2JhbFNwZWVkTXVsdGlwbGllciBtdXN0IGJlIGEgcG9zaXRpdmUgZmluaXRlIG51bWJlci5cIik7XG59XG4iLCAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhbWlseURlZmluaXRpb248VE1lbWJlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICBhYnN0cmFjdCByZWFkb25seSBmYW1pbHlJZDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBtZW1iZXJzOiBUTWVtYmVycztcblxuICBwcm90ZWN0ZWQgcmVxdWlyZShjb25kaXRpb246IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZyk6IGFzc2VydHMgY29uZGl0aW9uIHtcbiAgICBpZiAoIWNvbmRpdGlvbikgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMuZmFtaWx5SWR9OiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBhYnN0cmFjdCB2YWxpZGF0ZSgpOiB2b2lkO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNob3RQYXR0ZXJuID0gXCJzaW5nbGVcIiB8IFwicmFwaWRTaW5nbGVcIiB8IFwiYnVyc3RcIiB8IFwiaGVhdnlTaW5nbGVcIiB8IFwicGFpcmVkU3ByZWFkXCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlQmVoYXZpb3IgPSBcInN0cmFpZ2h0XCIgfCBcInBpZXJjaW5nU3RyYWlnaHRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVTaGFwZSA9IFwibmVlZGxlXCIgfCBcImRhcnRcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcbmV4cG9ydCB0eXBlIE11enpsZUVmZmVjdCA9IFwiY3Jpc3BTdGFyXCIgfCBcInJhcGlkRmxpY2tlclwiIHwgXCJncm91cGVkUHVsc2VcIiB8IFwic2hvY2tEaWFtb25kXCIgfCBcInR3aW5Qcm9uZ3NcIjtcbmV4cG9ydCB0eXBlIEltcGFjdEVmZmVjdCA9IFwicGluU3BhcmtcIiB8IFwibmVlZGxlU2NhdHRlclwiIHwgXCJidXJzdENyb3NzXCIgfCBcImltcGFjdFJpbmdcIiB8IFwic3BsaXRSaXBwbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5MZXZlbCB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGZpcmVSYXRlUGVyU2Vjb25kOiBudW1iZXI7XG4gIGRhbWFnZTogbnVtYmVyO1xuICBwcm9qZWN0aWxlU3BlZWQ6IG51bWJlcjtcbiAgcHJvamVjdGlsZVJhZGl1czogbnVtYmVyO1xuICBwcm9qZWN0aWxlQ291bnQ6IG51bWJlcjtcbiAgYnVyc3RDb3VudDogbnVtYmVyO1xuICBidXJzdEludGVydmFsTXM6IG51bWJlcjtcbiAgc3ByZWFkRGVncmVlczogbnVtYmVyO1xuICBwaWVyY2U6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiBudW1iZXI7XG4gIGltcGFjdFJhZGl1cz86IG51bWJlcjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIG11enpsZUZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0Rmxhc2hTY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1blZpc3VhbElkZW50aXR5IHtcbiAgc2lsaG91ZXR0ZTogc3RyaW5nO1xuICBtb3Rpb25MYW5ndWFnZTogc3RyaW5nO1xuICBwcm9qZWN0aWxlU2hhcGU6IFByb2plY3RpbGVTaGFwZTtcbiAgcHJvamVjdGlsZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICB0cmFpbENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHByb2plY3RpbGVBc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBtdXp6bGVFZmZlY3Q6IE11enpsZUVmZmVjdDtcbiAgaW1wYWN0RWZmZWN0OiBJbXBhY3RFZmZlY3Q7XG4gIG11enpsZUR1cmF0aW9uTXM6IG51bWJlcjtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICBob3Jpem9udGFsSml0dGVyOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5NZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiB8IFwiZmlyc3RCdWlsZFwiIHwgXCJwcmVzc3VyZVwiO1xuICBzaG90UGF0dGVybjogU2hvdFBhdHRlcm47XG4gIHByb2plY3RpbGVCZWhhdmlvcjogUHJvamVjdGlsZUJlaGF2aW9yO1xuICB2aXN1YWxJZGVudGl0eTogR3VuVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgR3VuTGV2ZWxbXTtcbn1cblxuY29uc3QgbGV2ZWwgPSAoXG4gIGxldmVsTnVtYmVyOiBudW1iZXIsXG4gIHZhbHVlczogT21pdDxHdW5MZXZlbCwgXCJsZXZlbFwiIHwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiPiAmXG4gICAgUGFydGlhbDxQaWNrPEd1bkxldmVsLCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCIgfCBcImltcGFjdFJhZGl1c1wiPj4sXG4pOiBHdW5MZXZlbCA9PiAoe1xuICBsZXZlbDogbGV2ZWxOdW1iZXIsXG4gIHByb2plY3RpbGVDb3VudDogMSxcbiAgYnVyc3RDb3VudDogMSxcbiAgYnVyc3RJbnRlcnZhbE1zOiAwLFxuICBzcHJlYWREZWdyZWVzOiAwLFxuICBwaWVyY2U6IDAsXG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogMCxcbiAga25vY2tiYWNrOiAwLFxuICAuLi52YWx1ZXMsXG59KTtcblxuZXhwb3J0IGNsYXNzIEd1bkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImd1blwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiR3VuXCI7XG4gIHJlYWRvbmx5IGltcGxlbWVudGF0aW9uID0ge1xuICAgIGF1dG9GaXJlczogdHJ1ZSxcbiAgICB0YXJnZXRpbmc6IFwibGFuZUZvcndhcmRcIixcbiAgICBwcm9qZWN0aWxlTW9kZWw6IFwia2luZW1hdGljXCIsXG4gICAgY29sbGlzaW9uTW9kZWw6IFwiY2lyY2xlVnNFbmVteVwiLFxuICAgIGFsbG93ZWRTaG90UGF0dGVybnM6IFtcInNpbmdsZVwiLCBcInJhcGlkU2luZ2xlXCIsIFwiYnVyc3RcIiwgXCJoZWF2eVNpbmdsZVwiLCBcInBhaXJlZFNwcmVhZFwiXSBzYXRpc2ZpZXMgU2hvdFBhdHRlcm5bXSxcbiAgICBhbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9yczogW1wic3RyYWlnaHRcIiwgXCJwaWVyY2luZ1N0cmFpZ2h0XCJdIHNhdGlzZmllcyBQcm9qZWN0aWxlQmVoYXZpb3JbXSxcbiAgfSBhcyBjb25zdDtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHB1bHNlUGlzdG9sOiB7XG4gICAgICBsYWJlbDogXCJQdWxzZSBQaXN0b2xcIiwgcmFyaXR5OiBcInN0YXJ0ZXJcIiwgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiwgc2hvdFBhdHRlcm46IFwic2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJ0aW55QnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImNsZWFuU2luZ2xlU2hvdFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiY3lhblwiLCB0cmFpbENvbG9yOiBcImRlZXBCbHVlXCIsIGNvcmVDb2xvcjogXCJjeWFuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuOCwgdHJhaWxXaWR0aFNjYWxlOiAwLjY1LCB2aXN1YWxJbnRlbnNpdHk6IDAuOSwgbXV6emxlRWZmZWN0OiBcImNyaXNwU3RhclwiLCBpbXBhY3RFZmZlY3Q6IFwicGluU3BhcmtcIiwgbXV6emxlRHVyYXRpb25NczogNzIsIGltcGFjdER1cmF0aW9uTXM6IDEwNSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOjEscHJvamVjdGlsZVNwZWVkOjU0MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS43NSxkYW1hZ2U6MS4xNSxwcm9qZWN0aWxlU3BlZWQ6NTgwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljh9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi4xNSxkYW1hZ2U6MS4zNSxwcm9qZWN0aWxlU3BlZWQ6NjIwLHByb2plY3RpbGVSYWRpdXM6My4yNSx0cmFpbExlbmd0aDoxOCxtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi45fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgbmVlZGxlclNtZzoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlciBTTUdcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcInJhcGlkU2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzcHJheVNwaGVyZVwiLCBtb3Rpb25MYW5ndWFnZTogXCJzdG9jaGFzdGljTmVlZGxlU3ByYXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcIm5lZWRsZVwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ3JlZW5cIiwgdHJhaWxDb2xvcjogXCJjeWFuXCIsIGNvcmVDb2xvcjogXCJncmVlblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLCB0cmFpbFdpZHRoU2NhbGU6IDAuMjgsIHZpc3VhbEludGVuc2l0eTogMC43OCwgbXV6emxlRWZmZWN0OiBcInJhcGlkRmxpY2tlclwiLCBpbXBhY3RFZmZlY3Q6IFwibmVlZGxlU2NhdHRlclwiLCBtdXp6bGVEdXJhdGlvbk1zOiA0NiwgaW1wYWN0RHVyYXRpb25NczogODUsIGhvcml6b250YWxKaXR0ZXI6IDcgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDo1LjI1LGRhbWFnZTouNDIscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjEwLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjM1LGhpdEZsYXNoU2NhbGU6LjQ1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjcuMjUsZGFtYWdlOi40OCxwcm9qZWN0aWxlU3BlZWQ6NzM1LHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEuNSx0cmFpbExlbmd0aDoxMSx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi40LGhpdEZsYXNoU2NhbGU6LjV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6OS4yNSxkYW1hZ2U6LjU0LHByb2plY3RpbGVTcGVlZDo3ODAscHJvamVjdGlsZVJhZGl1czoyLjE1LHNwcmVhZERlZ3JlZXM6Mix0cmFpbExlbmd0aDoxMix0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi40NSxoaXRGbGFzaFNjYWxlOi41NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1cnN0Q2FyYmluZToge1xuICAgICAgbGFiZWw6IFwiQnVyc3QgQ2FyYmluZVwiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwiYnVyc3RcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNob3J0VHJhY2VyQnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImdyb3VwZWRWb2xsZXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdvbGRcIiwgdHJhaWxDb2xvcjogXCJvcmFuZ2VcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMi4yLCB0cmFpbFdpZHRoU2NhbGU6IDAuOCwgdmlzdWFsSW50ZW5zaXR5OiAxLjA1LCBtdXp6bGVFZmZlY3Q6IFwiZ3JvdXBlZFB1bHNlXCIsIGltcGFjdEVmZmVjdDogXCJidXJzdENyb3NzXCIsIG11enpsZUR1cmF0aW9uTXM6IDg2LCBpbXBhY3REdXJhdGlvbk1zOiAxMjAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouOTUsZGFtYWdlOi43NSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6Mi43NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjcyLHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDgsZGFtYWdlOi44NSxwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6Mi44NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjY0LHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjYsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOSxwcm9qZWN0aWxlU3BlZWQ6NzI1LHByb2plY3RpbGVSYWRpdXM6MyxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU4LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGhlYXZ5Q2Fubm9uOiB7XG4gICAgICBsYWJlbDogXCJIZWF2eSBDYW5ub25cIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcImhlYXZ5U2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJwaWVyY2luZ1N0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcImNodW5reUJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic2xvd0hlYXZ5UHVuY2hcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNsdWdcIiwgcHJvamVjdGlsZUNvbG9yOiBcIm9yYW5nZVwiLCB0cmFpbENvbG9yOiBcInJlZFwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLjM1LCB0cmFpbFdpZHRoU2NhbGU6IDEuMzUsIHZpc3VhbEludGVuc2l0eTogMS4yLCBtdXp6bGVFZmZlY3Q6IFwic2hvY2tEaWFtb25kXCIsIGltcGFjdEVmZmVjdDogXCJpbXBhY3RSaW5nXCIsIG11enpsZUR1cmF0aW9uTXM6IDEzNSwgaW1wYWN0RHVyYXRpb25NczogMTkwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjcyLGRhbWFnZToyLjQscHJvamVjdGlsZVNwZWVkOjUwMCxwcm9qZWN0aWxlUmFkaXVzOjQuNSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyMixpbXBhY3RSYWRpdXM6MTQsa25vY2tiYWNrOjE0LG11enpsZUZsYXNoU2NhbGU6MS4xLGhpdEZsYXNoU2NhbGU6MS4yNX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDouODIsZGFtYWdlOjMscHJvamVjdGlsZVNwZWVkOjUzNSxwcm9qZWN0aWxlUmFkaXVzOjQuNzUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjQsaW1wYWN0UmFkaXVzOjE2LGtub2NrYmFjazoxOCxtdXp6bGVGbGFzaFNjYWxlOjEuMixoaXRGbGFzaFNjYWxlOjEuMzV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjksZGFtYWdlOjMuNixwcm9qZWN0aWxlU3BlZWQ6NTcwLHByb2plY3RpbGVSYWRpdXM6NSxwaWVyY2U6Mix0cmFpbExlbmd0aDoyNixpbXBhY3RSYWRpdXM6MTgsa25vY2tiYWNrOjIyLG11enpsZUZsYXNoU2NhbGU6MS4zLGhpdEZsYXNoU2NhbGU6MS41fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc3BsaXR0ZXJSaWZsZToge1xuICAgICAgbGFiZWw6IFwiU3BsaXR0ZXIgUmlmbGVcIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcInBhaXJlZFNwcmVhZFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwicGFpcmVkQm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjdXJyZW50TGFuZUZvcmtcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNwbGl0Qm9sdFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwidmlvbGV0XCIsIHRyYWlsQ29sb3I6IFwicGlua1wiLCBjb3JlQ29sb3I6IFwidmlvbGV0XCIsIHByb2plY3RpbGVBc3BlY3Q6IDMuNCwgdHJhaWxXaWR0aFNjYWxlOiAwLjU1LCB2aXN1YWxJbnRlbnNpdHk6IDEsIG11enpsZUVmZmVjdDogXCJ0d2luUHJvbmdzXCIsIGltcGFjdEVmZmVjdDogXCJzcGxpdFJpcHBsZVwiLCBtdXp6bGVEdXJhdGlvbk1zOiA5NSwgaW1wYWN0RHVyYXRpb25NczogMTQ1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjgscHJvamVjdGlsZVNwZWVkOjU4NSxwcm9qZWN0aWxlUmFkaXVzOjIuNzUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczoyLjUsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6Ljk1LHByb2plY3RpbGVTcGVlZDo2MjUscHJvamVjdGlsZVJhZGl1czoyLjg1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Myx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS41NSxkYW1hZ2U6MS4wNSxwcm9qZWN0aWxlU3BlZWQ6NjY1LHByb2plY3RpbGVSYWRpdXM6Myxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMuNSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGd1bl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFNob3RQYXR0ZXJucy5pbmNsdWRlcyhndW4uc2hvdFBhdHRlcm4pLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHNob3QgcGF0dGVybi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzLmluY2x1ZGVzKGd1bi5wcm9qZWN0aWxlQmVoYXZpb3IpLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHByb2plY3RpbGUgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHByb2plY3RpbGUgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biB0cmFpbCBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyA+IDAgJiYgZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZWZmZWN0IGR1cmF0aW9ucyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgZGVmaW5lIGxldmVscy5gKTtcbiAgICAgIGZvciAoY29uc3QgdHVuaW5nIG9mIGd1bi5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5maXJlUmF0ZVBlclNlY29uZCA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gZmlyZSByYXRlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVNwZWVkID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVJhZGl1cyA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgcHJvamVjdGlsZSBwb3dlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5idXJzdENvdW50ID49IDEgJiYgdHVuaW5nLnByb2plY3RpbGVDb3VudCA+PSAxLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIGNvdW50cy5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGd1bkZhbWlseSA9IG5ldyBHdW5GYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBHdW5JZCA9IGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JiTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaGVhbHRoOiBudW1iZXI7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBnbG93OiBudW1iZXI7XG4gIHN1cmZhY2VUZXh0dXJlOiBudW1iZXI7XG4gIHJpbUludGVuc2l0eTogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuICBoaXRGbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgZGVhdGhGbGFzaFNjYWxlOiBudW1iZXI7XG4gIHNoYXBlWm9vbTogbnVtYmVyO1xuICBpbXBhY3RSZXNpc3RhbmNlOiBudW1iZXI7XG4gIGV4cGxvc2lvbk1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgT3JiRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwib3JiXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJPcmIgRW5lbXlcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBiYXNpY09yYjoge1xuICAgICAgbGFiZWw6IFwiQmFzaWMgT3JiXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDEwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBnbG93OiAwLjgyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IDAuMjgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMjUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogMC43MixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogOTAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuOCxcbiAgICAgIHNoYXBlWm9vbTogMy40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgb3JiXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmhlYWx0aCA+IDAsIGAke2lkfSBoZWFsdGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuc3BlZWQgPiAwLCBgJHtpZH0gc3BlZWQgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIucmFkaXVzID4gMCwgYCR7aWR9IHJhZGl1cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5nbG93ID49IDAgJiYgb3JiLnJpbUludGVuc2l0eSA+PSAwLCBgJHtpZH0gdmlzdWFsIGludGVuc2l0aWVzIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuc3VyZmFjZVRleHR1cmUgPj0gMCAmJiBvcmIuc3VyZmFjZVRleHR1cmUgPD0gMSwgYCR7aWR9IHN1cmZhY2VUZXh0dXJlIG11c3QgYmUgZnJvbSAwIHRvIDEuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvcmJGYW1pbHkgPSBuZXcgT3JiRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgT3JiSWQgPSBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBHdW5JZCB9IGZyb20gXCIuL0d1bkZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGVnZW5kRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0JhbGFuY2Uge1xuICBlbmVteUhwOiBudW1iZXI7XG4gIGVuZW15U3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RlZmluaXRpb24ge1xuICBsYXlvdXQ6IHN0cmluZztcbiAgbGVnZW5kOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBUcmFja0xlZ2VuZEVudHJ5Pj47XG4gIGJhbGFuY2U6IFRyYWNrQmFsYW5jZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja01lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGR1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xuICBzdGFydGluZ0d1bjogR3VuSWQ7XG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEgfCAyIHwgMztcbiAgdmlld3BvcnQ6IHtcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiO1xuICAgIGFzcGVjdFdpZHRoOiBudW1iZXI7XG4gICAgYXNwZWN0SGVpZ2h0OiBudW1iZXI7XG4gICAgbG9naWNhbFdpZHRoOiBudW1iZXI7XG4gICAgbG9naWNhbEhlaWdodDogbnVtYmVyO1xuICB9O1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBkZWZpbml0aW9uOiBUcmFja0RlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkVHJhY2tFbnRpdHkge1xuICBpZDogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG4gIGxhbmVJbmRleDogbnVtYmVyO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBkaXN0YW5jZUZyb21QbGF5ZXI6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzRW5lbXkgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHRyYWNrLmxheW91dFxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcCgodGV4dCwgc291cmNlSW5kZXgpID0+ICh7IHRleHQ6IHRleHQudHJpbSgpLCBzb3VyY2VJbmRleDogc291cmNlSW5kZXggKyAxIH0pKVxuICAgIC5maWx0ZXIocm93ID0+IHJvdy50ZXh0Lmxlbmd0aCA+IDApO1xuXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGF5b3V0IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgcm93LlwiKTtcblxuICBsZXQgbGVmdFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxldCByaWdodFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG5cbiAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgcGlwZUNvdW50ID0gWy4uLnJvdy50ZXh0XS5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3RlciA9PT0gXCJ8XCIpLmxlbmd0aDtcbiAgICBpZiAocGlwZUNvdW50ICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgXCJ8XCIgc2VwYXJhdG9yOyBmb3VuZCAke3BpcGVDb3VudH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHJvdy50ZXh0LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgbGVmdFdpZHRoID8/PSBsZWZ0Lmxlbmd0aDtcbiAgICByaWdodFdpZHRoID8/PSByaWdodC5sZW5ndGg7XG5cbiAgICBpZiAobGVmdC5sZW5ndGggIT09IGxlZnRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIGxlZnQgd2lkdGggJHtsZWZ0Lmxlbmd0aH07IGV4cGVjdGVkICR7bGVmdFdpZHRofS5gKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0Lmxlbmd0aCAhPT0gcmlnaHRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIHJpZ2h0IHdpZHRoICR7cmlnaHQubGVuZ3RofTsgZXhwZWN0ZWQgJHtyaWdodFdpZHRofS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0YW5jZUZyb21QbGF5ZXIgPSByb3dzLmxlbmd0aCAtIDEgLSByb3dJbmRleDtcbiAgICBmb3IgKGNvbnN0IFtzaWRlLCBsYW5lXSBvZiBbW1wibGVmdFwiLCBsZWZ0XSwgW1wicmlnaHRcIiwgcmlnaHRdXSBhcyBjb25zdCkge1xuICAgICAgWy4uLmxhbmVdLmZvckVhY2goKHN5bWJvbCwgbGFuZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdHJhY2subGVnZW5kW3N5bWJvbF07XG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSB1c2VzIHN5bWJvbCBcIiR7c3ltYm9sfVwiIGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBpcyBtaXNzaW5nIGZyb20gdGhlIGxlZ2VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuaWQgPT09IFwiZW1wdHlcIikgcmV0dXJuO1xuXG4gICAgICAgIGVudGl0aWVzLnB1c2goe1xuICAgICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgc2lkZSxcbiAgICAgICAgICBsYW5lSW5kZXgsXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZGlzdGFuY2VGcm9tUGxheWVyLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogKGVudHJ5LnNwZWVkID8/IDEpICogKGlzRW5lbXkoZW50cnkuaWQpID8gdHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDogMSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRpZXMuc29ydCgoYSwgYikgPT5cbiAgICBhLmRpc3RhbmNlRnJvbVBsYXllciAtIGIuZGlzdGFuY2VGcm9tUGxheWVyIHx8XG4gICAgYS5yb3dJbmRleCAtIGIucm93SW5kZXggfHxcbiAgICBhLnNpZGUubG9jYWxlQ29tcGFyZShiLnNpZGUpIHx8XG4gICAgYS5sYW5lSW5kZXggLSBiLmxhbmVJbmRleCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMTogRmlyc3QgR2xvd1wiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIkEgZ2VudGxlIG9uYm9hcmRpbmcgcnVuOiBlYXJseSB0ZW5zaW9uLCBhIHF1aWNrIHBvd2VyLXVwIGJlYXQsIHRoZW4gZWFzeSBlc2NhbGF0aW5nIHdhdmVzIGZvciBhIGZpcnN0LXRpbWUgcGxheWVyLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMjUsXHJcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcclxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgYXNwZWN0V2lkdGg6IDksXHJcbiAgICBhc3BlY3RIZWlnaHQ6IDE2LFxyXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXHJcbiAgICBsb2dpY2FsSGVpZ2h0OiA4MDAsXHJcbiAgfSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uMi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5TLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAwLjc1IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XHJcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCAyOiBOZW9uIFdha2VcIixcclxuICBkZXNjcmlwdGlvbjogXCJUaGUgc2Vjb25kIG9uYm9hcmRpbmcgcnVuOiBhIHNsaWdodGx5IGRlbnNlciBvcGVuaW5nLCBlYXJseSByZWNvdmVyeSBwaWNrdXBzLCBhbmQgYSBnZW50bGUgZmluYWxlIHRoYXQgdGVhY2hlcyB0aGUgcGxheWVyIHRvIHRydXN0IHRoZWlyIGdyb3dpbmcgc3F1YWQuXCIsXHJcbiAgZHVyYXRpb25TZWNvbmRzOiAzMCxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkcuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5JLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAwLjc1IH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgfSxcclxuICAgIGJhbGFuY2U6IHtcclxuICAgICAgZW5lbXlIcDogMS4wLFxyXG4gICAgICBlbmVteVNwZWVkOiAwLjk1LFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCAzOiBQcmlzbSBQcmVzc3VyZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSB0aGlyZCBvbmJvYXJkaW5nIHJ1biBzdHJldGNoZXMgdGhlIHBsYXllclx1MjAxOXMgZW5kdXJhbmNlIHdpdGggbG9uZ2VyIHBhY2luZywgc2FmZXIgdXBncmFkZSB3aW5kb3dzLCBhbmQgZGVuc2VyIGJ1dCBzdGlsbCBmb3JnaXZpbmcgZW5lbXkgcGF0dGVybnMuXCIsXHJcbiAgZHVyYXRpb25TZWNvbmRzOiA2MCxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4yLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLlMuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5TLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAwLjc1IH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC45IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiYlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiLCBzcGVlZDogMC45IH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEuMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgNDogVmlvbGV0IFN1cmdlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIGZvdXJ0aCBydW4gZG91YmxlcyB0aGUgZW5kdXJhbmNlIHRlc3QgYWdhaW4sIGFkZGluZyBkZW5zZXIgd2F2ZXMsIGJpZ2dlciBwaWNrdXAgdGltaW5nIGRlY2lzaW9ucywgYW5kIGhpZ2hlci10aWVyIHRvb2xzIHdoaWxlIHN0YXlpbmcgcmVhZGFibGUgYW5kIGZhaXIuXCIsXHJcbiAgZHVyYXRpb25TZWNvbmRzOiAxMjAsXHJcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcclxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgYXNwZWN0V2lkdGg6IDksXHJcbiAgICBhc3BlY3RIZWlnaHQ6IDE2LFxyXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXHJcbiAgICBsb2dpY2FsSGVpZ2h0OiA4MDAsXHJcbiAgfSxcclxuICBlbnZpcm9ubWVudDoge1xyXG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxyXG4gIH0sXHJcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuRS4uLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4yLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuUy4uLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5TLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5LLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuRUVFLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRUVFXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlguLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi5jIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG5FRUUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi5FRUVcclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuRUVFLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRUVFXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5YLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbkVFRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAwLjc1IH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC45IH0sXHJcbiAgICAgIFwiS1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiWFwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCIsIHNwZWVkOiAwLjk1IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJjXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5uZWVkbGVSYXBpZXJcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS4wNSxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XHJcbiIsICJpbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayB9IGZyb20gXCIuL1RyYWNrMVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgZ2VuZXJhdGVkVHJhY2syIH0gZnJvbSBcIi4vVHJhY2syXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBnZW5lcmF0ZWRUcmFjazMgfSBmcm9tIFwiLi9UcmFjazNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGdlbmVyYXRlZFRyYWNrNCB9IGZyb20gXCIuL1RyYWNrNFwiO1xuLy8gUmVnaXN0ZXIgYSB0cmFjayBieSBpbXBvcnRpbmcgaXQgYW5kIGFkZGluZyBvbmUgZW50cnkgaGVyZS5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSB7XG4gXG4gIFwidHJhY2sxXCI6IGdlbmVyYXRlZFRyYWNrLFxuICBcInRyYWNrMlwiOiBnZW5lcmF0ZWRUcmFjazIsXG4gIFwidHJhY2szXCI6IGdlbmVyYXRlZFRyYWNrMyxcbiAgXCJ0cmFjazRcIjogZ2VuZXJhdGVkVHJhY2s0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHsgZ2VuZXJhdGVkVHJhY2ssIGdlbmVyYXRlZFRyYWNrMiwgZ2VuZXJhdGVkVHJhY2szLCBnZW5lcmF0ZWRUcmFjazQgfTsgXG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyB0cmFja3MgfSBmcm9tIFwiLi90cmFja3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJ0cmFja1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiVHJhY2tcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHRyYWNrcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2suZHVyYXRpb25TZWNvbmRzID4gMCwgYCR7aWR9IGR1cmF0aW9uIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2sudmlld3BvcnQub3JpZW50YXRpb24gPT09IFwicG9ydHJhaXRcIiAmJiB0cmFjay52aWV3cG9ydC5hc3BlY3RIZWlnaHQgPiB0cmFjay52aWV3cG9ydC5hc3BlY3RXaWR0aCwgYCR7aWR9IG11c3QgdXNlIGl0cyBkZWNsYXJlZCBwb3J0cmFpdCB2aWV3cG9ydC5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0cmFjay52aWV3cG9ydC5sb2dpY2FsV2lkdGggPiAwICYmIHRyYWNrLnZpZXdwb3J0LmxvZ2ljYWxIZWlnaHQgPiAwLCBgJHtpZH0gbG9naWNhbCB2aWV3cG9ydCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZCh0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aXBsaWVyTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3F1YWRBZGRlZDogbnVtYmVyO1xuICBtYXhTcXVhZFNpemU6IG51bWJlcjtcbiAgbWVtYmVyc1BlclJvdzogbnVtYmVyO1xuICBtZW1iZXJSYWRpdXM6IG51bWJlcjtcbiAgc3BhY2luZzogbnVtYmVyO1xuICBwaWNrdXBDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwdWxzZVJhdGU6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNxdWFkIE11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBzcXVhZFBsdXNPbmU6IHtcbiAgICAgIGxhYmVsOiBcIisxIFdpbmdtYXRlXCIsXG4gICAgICBzcXVhZEFkZGVkOiAxLFxuICAgICAgbWF4U3F1YWRTaXplOiAxMCxcbiAgICAgIG1lbWJlcnNQZXJSb3c6IDUsXG4gICAgICBtZW1iZXJSYWRpdXM6IDUuMjUsXG4gICAgICBzcGFjaW5nOiAyOSxcbiAgICAgIHBpY2t1cENvbG9yOiBcImdvbGRcIixcbiAgICAgIGNvcmVDb2xvcjogXCJjeWFuXCIsXG4gICAgICBwdWxzZVJhdGU6IDIuMixcbiAgICAgIHBpY2t1cFNoYXBlWm9vbTogMy4xLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLnNxdWFkQWRkZWQgPiAwLCBgJHtpZH0gbXVzdCBhZGQgc3F1YWQgbWVtYmVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1heFNxdWFkU2l6ZSA+PSBpdGVtLm1lbWJlcnNQZXJSb3csIGAke2lkfSBtYXggc3F1YWQgbXVzdCBmaXQgYXQgbGVhc3Qgb25lIHJvdy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1lbWJlclJhZGl1cyA+IDAgJiYgaXRlbS5zcGFjaW5nID4gaXRlbS5tZW1iZXJSYWRpdXMgKiAyLCBgJHtpZH0gbWVtYmVyIGdlb21ldHJ5IG92ZXJsYXBzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2l0ZW0ucGlja3VwQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwaWNrdXAgY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsaWVyRmFtaWx5ID0gbmV3IE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBNdWx0aXBsaWVySWQgPSBrZXlvZiB0eXBlb2YgbXVsdGlwbGllckZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNoaWVsZE9yYml0ZXJTaGFwZSA9IFwiZG90XCIgfCBcImhleFwiO1xuZXhwb3J0IHR5cGUgU2hpZWxkTW9kZSA9IFwiY2hhcmdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInNoaWVsZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgbW9kZTogU2hpZWxkTW9kZTtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKiBCYXNpYyBzaGllbGQgc3RyZW5ndGguIEVuZW15IEhQIGlzIHN1YnRyYWN0ZWQgZnJvbSB0aGlzIHZhbHVlLiAqL1xuICBtYXhDaGFyZ2VzOiBudW1iZXI7XG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiAwO1xuICBwdXNoRGlzdGFuY2U6IDA7XG4gIHNsb3dNdWx0aXBsaWVyOiAxO1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgb3JiaXRlclNoYXBlOiBTaGllbGRPcmJpdGVyU2hhcGU7XG4gIG9yYml0ZXJDb3VudDogbnVtYmVyO1xuICBvcmJpdGVyU3BlZWQ6IG51bWJlcjtcbiAgb3JiaXRlclNpemU6IG51bWJlcjtcbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNoaWVsZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInNoaWVsZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU2hpZWxkXCI7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBsaWdodEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJMaWdodCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogOCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMSxcbiAgICAgIG9yYml0ZXJTaXplOiA0LjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkxpZ2h0d2VpZ2h0IHNoaWVsZCB3aXRoIHR3byBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBzYXRlbGxpdGVHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiU2F0ZWxsaXRlIEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEwLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDYsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNzUsXG4gICAgICBvcmJpdGVyU2l6ZTogNC43NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiQmFsYW5jZWQgc2hpZWxkIHdpdGggZm91ciBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBoZXhHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiSGV4IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgbWF4Q2hhcmdlczogNyxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTIsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJnb2xkXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiaGV4XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDgsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNDUsXG4gICAgICBvcmJpdGVyU2l6ZTogNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgc2hpZWxkIHdpdGggc2V2ZW4gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc2hpZWxkXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1vZGUgPT09IFwiY2hhcmdlXCIsIGAke2lkfSBtdXN0IHVzZSB0aGUgc2hhcmVkIGNoYXJnZSBiZWhhdmlvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQucmFkaXVzID4gMCwgYCR7aWR9IHJhZGl1cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tYXhDaGFyZ2VzID4gMCwgYCR7aWR9IHN0cmVuZ3RoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJDb3VudCA+IDAsIGAke2lkfSBtdXN0IGhhdmUgb3JiaXRlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJTcGVlZCA+PSAwLCBgJHtpZH0gb3JiaXRlclNwZWVkIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoaWVsZEZhbWlseSA9IG5ldyBTaGllbGRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTaGllbGRJZCA9IGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBIb3cgdGhlIHN3b3JkIHNlbGVjdHMgdGFyZ2V0cyBmcm9tIHRoZSBuZWFyYnkgdGhyZWF0IHBvb2wuXG4gKiBBbGwgbW9kZXMgYXJlIGxhbmUtYXdhcmUgdmlhIHRoZSBOZWFyYnlUaHJlYXRRdWVyeSBtb2R1bGUuXG4gKi9cbmV4cG9ydCB0eXBlIFN3b3JkVGFyZ2V0aW5nTW9kZSA9XG4gIHwgXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiICAgLy8gY2xvc2VzdCBlbmVteSBpbiB0aGUgcGxheWVyJ3MgYWN0aXZlIGxhbmVcbiAgfCBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIiAgICAvLyBjbG9zZXN0IGVuZW15IHJlZ2FyZGxlc3Mgb2YgbGFuZVxuICB8IFwiZnJvbnRNb3N0VGhyZWF0XCIgICAgICAgIC8vIGZhcnRoZXN0LWFkdmFuY2VkIChoaWdoZXN0IHkpIGVuZW15IGluIHJhbmdlXG4gIHwgXCJjbHVzdGVyTmVhclBsYXllclwiOyAgICAgLy8gcGlja3MgdXAgdG8gbWF4VGFyZ2V0cyBlbmVtaWVzIHdpdGhpbiByZWFjaFxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInN3b3JkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICAvKipcbiAgICogQXR0YWNrIHJhbmdlIGluIHBpeGVscyAoYXQgc2NhbGUgMSkuXG4gICAqIFN3b3JkIG9ubHkgc3dpbmdzIHdoZW4gYW4gZW5lbXkgZW50ZXJzIHRoaXMgcmFkaXVzLlxuICAgKi9cbiAgcmFuZ2U6IG51bWJlcjtcbiAgLyoqXG4gICAqIEFuZ3VsYXIgd2lkdGggb2YgdGhlIHNsYXNoIGFyYyBpbiBkZWdyZWVzLlxuICAgKiBXaWRlciA9IGhlYXZpZXIsIGhpdHMgbW9yZSBlbmVtaWVzIHBlciBzd2luZy5cbiAgICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIERhbWFnZSBwZXIgaGl0LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIENvb2xkb3duIGJldHdlZW4gc3dpbmdzIGluIHNlY29uZHMuIFN3b3JkcyBkbyBOT1QgZmlyZSBvbiBhIHRpbWVyIFx1MjAxNCBvbmx5IHdoZW4gYSB0YXJnZXQgZXhpc3RzLiAqL1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgLyoqIE1heGltdW0gdGFyZ2V0cyBoaXQgcGVyIHN3aW5nLiAqL1xuICBtYXhUYXJnZXRzOiBudW1iZXI7XG4gIC8qKiBMYW5lLWF3YXJlIHRhcmdldCBzZWxlY3Rpb24gbW9kZS4gKi9cbiAgdGFyZ2V0aW5nTW9kZTogU3dvcmRUYXJnZXRpbmdNb2RlO1xuICAvKiogVmlzdWFsIHNsYXNoIGFyYyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuICovXG4gIHNsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogUHJpbWFyeSBzbGFzaCBjb2xvci4gKi9cbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIC8qKiBWaXN1YWwgdGhpY2tuZXNzIG11bHRpcGxpZXIgZm9yIHRoZSBzaGFyZWQgc3dvcmQgdHJhaWwuIDEuMCA9IGRlZmF1bHQuICovXG4gIHNsYXNoVGhpY2tuZXNzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBkZXNpZ24gbm90ZXMuIE5vdCB1c2VkIGJ5IHJ1bnRpbWUgXHUyMDE0IGRvY3VtZW50cyBpbnRlbnQgZm9yIGZ1dHVyZSBhZ2VudHMuXG4gICAqL1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZhbWlseSBkZWZpbml0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzd29yZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3dvcmRcIjtcblxuICAvKipcbiAgICogRmFtaWx5LWxldmVsIGltcGxlbWVudGF0aW9uIG5vdGVzOlxuICAgKiAtIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZXkgc3dpbmcgb25seSB3aGVuIGEgdmFsaWQgdGFyZ2V0XG4gICAqICAgaXMgd2l0aGluIHJhbmdlIGFuZCBjb29sZG93biBpcyByZWFkeS4gVGhleSBpZGxlIHNpbGVudGx5IG90aGVyd2lzZS5cbiAgICogLSBPbmUgYWN0aXZlIHN3b3JkIHBlciBwbGF5ZXIgKGZhbWlseS1zY29wZWQgZXhjbHVzaXZpdHkpLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgXHUyMDE0IENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogSGl0cyAxXHUyMDEzMiBlbmVtaWVzIGRlcGVuZGluZyBvbiBhcmMgb3ZlcmxhcC4gU2hvcnQgY29vbGRvd24uXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC44NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwXHUyMDEzMTgwbXMgZmVlbC4gRmFkaW5nIGFmdGVyaW1hZ2UuIExpa2UgYSB3aGlwLWxpa2Uga2F0YW5hIGFyYy5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXZlciBcdTIwMTQgSGVhdnkgc3dvcmQuIFNsb3dlciBidXQgaGl0cyBtdWx0aXBsZSBjbHVzdGVyZWQgZW5lbWllcy5cbiAgICAgKiBXaWRlIGFyYywgdGhpY2tlciBzbGFzaC4gQmV0dGVyIGFnYWluc3QgdGlnaHQgZ3JvdXBzIHRoYW4gZmFzdCBzaW5nbGVzLlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDU2LFxuICAgICAgYXJjRGVncmVlczogMTEwLFxuICAgICAgZGFtYWdlOiAyLjgsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuOCxcbiAgICAgIG1heFRhcmdldHM6IDQsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImNsdXN0ZXJOZWFyUGxheWVyXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDIyMCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuNjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IGFuZCB3aWRlLiBUaGlja2VyIGFyYy4gU3Ryb25nZXIgaW1wYWN0IGZsYXNoLiBHZW9tZXRyaWMgYW5kIHByb2NlZHVyYWwgXHUyMDE0IG5vdCBhIGJ1bGxldC5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmVlZGxlIFJhcGllciBcdTIwMTQgUHJlY2lzaW9uIHN3b3JkLiBMb25nIHJlYWNoLCBuYXJyb3cgYXJjLCBzaW5nbGUgdGFyZ2V0LlxuICAgICAqIFByaW9yaXRpemVzIHRoZSBtb3N0IGRhbmdlcm91cyAoZnJvbnQtbW9zdCkgZW5lbXkuXG4gICAgICovXG4gICAgbmVlZGxlUmFwaWVyOiB7XG4gICAgICBsYWJlbDogXCJOZWVkbGUgUmFwaWVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDcwLFxuICAgICAgYXJjRGVncmVlczogMzAsXG4gICAgICBkYW1hZ2U6IDIuMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMS4xLFxuICAgICAgbWF4VGFyZ2V0czogMSxcbiAgICAgIHRhcmdldGluZ01vZGU6IFwiZnJvbnRNb3N0VGhyZWF0XCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMC41NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRWxlZ2FudCBhbmQgcHJlY2lzZS4gVGhpbiBzdGFiYmluZyBsaW5lLiBOb3QgYSBndW4gc2hvdCBcdTIwMTQgaXQgbXVzdCBmZWVsIG1lbGVlLiBTaW5nbGUgdGFyZ2V0IHByaW9yaXR5LlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gc2xhc2hEdXJhdGlvbk1zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hUaGlja25lc3MgPiAwLCBgJHtpZH0gc2xhc2hUaGlja25lc3MgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzd29yZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3dvcmRGYW1pbHkgPSBuZXcgU3dvcmRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTd29yZElkID0ga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTcXVhZElucHV0Q2FsbGJhY2tzIHtcbiAgbGFuZSgpOiAwIHwgMTtcbiAgc2V0TGFuZShsYW5lOiAwIHwgMSk6IHZvaWQ7XG4gIHNldEFpbSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcbiAgcmVsZWFzZUFpbSgpOiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZFNxdWFkSW5wdXQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGpveXN0aWNrOiBzdHJpbmcsXG4gIGNhbGxiYWNrczogU3F1YWRJbnB1dENhbGxiYWNrcyxcbik6IHZvaWQge1xuICBsZXQgcG9pbnRlcklkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgbGV0IHBvaW50ZXJTdGFydGVkWCA9IDA7XG4gIGxldCBwb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgY29uc3QgYXBwbHlQb2ludGVyID0gKGNsaWVudFg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJvdW5kcyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBub3JtYWxpemVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGNsaWVudFggLSBib3VuZHMubGVmdCkgLyBib3VuZHMud2lkdGgpKTtcbiAgICBjb25zdCBsYW5lOiAwIHwgMSA9IG5vcm1hbGl6ZWQgPCAuNSA/IDAgOiAxO1xuICAgIGlmIChsYW5lICE9PSBjYWxsYmFja3MubGFuZSgpKSBjYWxsYmFja3Muc2V0TGFuZShsYW5lKTtcbiAgICBjb25zdCBsYW5lU3RhcnQgPSBsYW5lID09PSAwID8gMCA6IC41O1xuICAgIGNvbnN0IHdpdGhpbkxhbmUgPSAobm9ybWFsaXplZCAtIGxhbmVTdGFydCkgLyAuNTtcbiAgICBjYWxsYmFja3Muc2V0QWltKCh3aXRoaW5MYW5lIC0gLjUpICogMik7XG4gIH07XG4gIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcImFcIiB8fCBldmVudC5rZXkgPT09IFwiQVwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikgY2FsbGJhY2tzLnNldExhbmUoMCk7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJkXCIgfHwgZXZlbnQua2V5ID09PSBcIkRcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSBjYWxsYmFja3Muc2V0TGFuZSgxKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChqb3lzdGljaykgfHwgdGFyZ2V0LmNsb3Nlc3QoXCJidXR0b24saW5wdXQsc2VsZWN0LGFcIikpIHJldHVybjtcbiAgICBwb2ludGVySWQgPSBldmVudC5wb2ludGVySWQ7XG4gICAgcG9pbnRlclN0YXJ0ZWRYID0gZXZlbnQuY2xpZW50WDtcbiAgICBwb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgICBjb250YWluZXIuc2V0UG9pbnRlckNhcHR1cmU/Lihwb2ludGVySWQpO1xuICAgIGFwcGx5UG9pbnRlcihldmVudC5jbGllbnRYKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IHBvaW50ZXJJZCkgcmV0dXJuO1xuICAgIHBvaW50ZXJNb3ZlZCB8fD0gTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHBvaW50ZXJTdGFydGVkWCkgPiAzO1xuICAgIGFwcGx5UG9pbnRlcihldmVudC5jbGllbnRYKTtcbiAgfSk7XG4gIGNvbnN0IGVuZFBvaW50ZXIgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IHBvaW50ZXJJZCkgcmV0dXJuO1xuICAgIGlmICghcG9pbnRlck1vdmVkKSBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICB9O1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGVuZFBvaW50ZXIpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvc3Rwb2ludGVyY2FwdHVyZVwiLCAoKSA9PiB7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICB9KTtcbiAgaWYgKG1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50Pihqb3lzdGljayk7XG4gICAgY29uc3Qga25vYiA9IGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLnN0aWNrLWtub2JcIik7XG4gICAgbGV0IGpveXN0aWNrUG9pbnRlcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgYXBwbHlKb3lzdGljayA9IChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCByYWRpdXMgPSBib3VuZHMud2lkdGggLyAyO1xuICAgICAgY29uc3QgcmF3ID0gKGV2ZW50LmNsaWVudFggLSAoYm91bmRzLmxlZnQgKyByYWRpdXMpKSAvIHJhZGl1cztcbiAgICAgIGNvbnN0IHggPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgcmF3KSk7XG4gICAgICBpZiAoa25vYikga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7eCAqIHJhZGl1cyAqIC42Mn1weCksLTUwJSlgO1xuICAgICAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5hYnMoeCk7XG4gICAgICBpZiAobWFnbml0dWRlID49IC45NSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWQ6IDAgfCAxID0geCA8IDAgPyAwIDogMTtcbiAgICAgICAgaWYgKHJlcXVlc3RlZCAhPT0gY2FsbGJhY2tzLmxhbmUoKSkgY2FsbGJhY2tzLnNldExhbmUocmVxdWVzdGVkKTtcbiAgICAgICAgY2FsbGJhY2tzLnNldEFpbSgwKTtcbiAgICAgIH0gZWxzZSBpZiAobWFnbml0dWRlIDw9IC41KSBjYWxsYmFja3Muc2V0QWltKHggLyAuNSk7XG4gICAgICBlbHNlIGNhbGxiYWNrcy5zZXRBaW0oTWF0aC5zaWduKHgpKTtcbiAgICB9O1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBldmVudCA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGpveXN0aWNrUG9pbnRlciA9IGV2ZW50LnBvaW50ZXJJZDtcbiAgICAgIGVsZW1lbnQuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtcbiAgICAgIGFwcGx5Sm95c3RpY2soZXZlbnQpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQucG9pbnRlcklkID09PSBqb3lzdGlja1BvaW50ZXIpIGFwcGx5Sm95c3RpY2soZXZlbnQpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZEpveXN0aWNrID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IGpveXN0aWNrUG9pbnRlcikgcmV0dXJuO1xuICAgICAgam95c3RpY2tQb2ludGVyID0gbnVsbDtcbiAgICAgIGlmIChrbm9iKSBrbm9iLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsLTUwJSlcIjtcbiAgICAgIGNhbGxiYWNrcy5yZWxlYXNlQWltKCk7XG4gICAgfTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGVuZEpveXN0aWNrKTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBlbmRKb3lzdGljayk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNxdWFkUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIHJvdzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3F1YWRNb2RlbCB7XG4gIGxhbmU6IDAgfCAxID0gMDtcbiAgY291bnQgPSAxO1xuICBhaW1PZmZzZXQgPSAwO1xuICB4ID0gMDtcbiAgdGFyZ2V0WCA9IDA7XG4gIGxhbmVTaGlmdFN0YXJ0ZWRBdCA9IDA7XG5cbiAgYWRkKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5taW4oc3BlYy5tYXhTcXVhZFNpemUsIHRoaXMuY291bnQgKyBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgcmVtb3ZlKGFtb3VudCA9IDEpOiBudW1iZXIge1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCB0aGlzLmNvdW50IC0gYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHNldExhbmUobGFuZTogMCB8IDEsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyLCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChsYW5lICE9PSB0aGlzLmxhbmUpIHtcbiAgICAgIHRoaXMubGFuZVNoaWZ0U3RhcnRlZEF0ID0gbm93O1xuICAgICAgLy8gUmVzZXQgYWltIG9mZnNldCBzbyB0aGUgcGxheWVyIHNuYXBzIHRvIHRoZSBjb3JyZWN0IGNvbHVtbiBpbiB0aGUgbmV3IGxhbmUuXG4gICAgICB0aGlzLmFpbU9mZnNldCA9IDA7XG4gICAgfVxuICAgIHRoaXMubGFuZSA9IGxhbmU7XG4gICAgdGhpcy50YXJnZXRYID0gbGFuZUNlbnRlcihsYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgc2V0QWltKG5vcm1hbGl6ZWQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5haW1PZmZzZXQgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgbm9ybWFsaXplZCkpICogbGFuZVdpZHRoICogLjI4O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgYXV0b0FpbSh0YXJnZXRPZmZzZXQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gSGlnaCBsZXJwIGZhY3RvciAoMC44NSkgc28gYXV0by1haW0gc25hcHMgYWxtb3N0IGluc3RhbnRhbmVvdXNseSBlYWNoIGZyYW1lLlxuICAgIHRoaXMuYWltT2Zmc2V0ICs9IChNYXRoLm1heCgtbGFuZVdpZHRoICogLjI4LCBNYXRoLm1pbihsYW5lV2lkdGggKiAuMjgsIHRhcmdldE9mZnNldCkpIC0gdGhpcy5haW1PZmZzZXQpICogLjg1O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSAxIC0gTWF0aC5wb3coLjAwMDA4LCBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMueCArPSAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAqIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqIFggb2Zmc2V0cyBvZiBlYWNoIGNvbHVtbiBpbiB0aGUgZnJvbnQgcm93LCByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuICovXG4gIGZyb250Um93Q29sdW1uT2Zmc2V0cyhzY2FsZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKF8sIGNvbCkgPT5cbiAgICAgIChjb2wgLSAocm93Q291bnQgLSAxKSAvIDIpICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgKTtcbiAgfVxuXG4gIHBvaW50cyhiYXNlWTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogU3F1YWRQb2ludFtdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCBwb2ludHM6IFNxdWFkUG9pbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50IC0gcm93ICogc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGluZGV4ICUgc3BlYy5tZW1iZXJzUGVyUm93O1xuICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICB4OiB0aGlzLnggKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICB5OiBiYXNlWSArIHJvdyAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBdXRvQWltVGFyZ2V0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJvd0lkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b0FpbUNvbnRyb2xTdGF0ZSB7XG4gIG1hbnVhbCA9IGZhbHNlO1xuXG4gIGxhbmVTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAvLyBMYW5lIGNoYW5nZXMgYXJlIG5hdmlnYXRpb24sIG5vdCBwZXJzaXN0ZW50IG1hbnVhbCBhaW1pbmcuXG4gIH1cblxuICBhaW1DaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgfVxuXG4gIGFpbVJlbGVhc2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhZC1jZW50ZXIgYWltIG9mZnNldCAocmVsYXRpdmUgdG8gbGFuZUNlbnRlcikgdGhhdCBiZXN0IGFsaWduc1xuICogb25lIG9mIHRoZSBzcXVhZCdzIGZyb250LXJvdyBjb2x1bW5zIHRvIHRoZSBuZWFyZXN0IGVuZW15LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRzICAgICAgICAgQWxsIGxpdmUgKG5vbi1keWluZykgZW5lbWllcyBpbiB0aGUgY3VycmVudCBsYW5lLlxuICogQHBhcmFtIGxhbmVDZW50ZXIgICAgICBQaXhlbCBYIG9mIHRoZSBsYW5lJ3MgY2VudGVyLlxuICogQHBhcmFtIGNvbHVtbk9mZnNldHMgICBYIG9mZnNldHMgb2YgZWFjaCBmcm9udC1yb3cgY29sdW1uIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci5cbiAqIEBwYXJhbSBjdXJyZW50T2Zmc2V0ICAgQ3VycmVudCBzcXVhZCBhaW0gb2Zmc2V0IChzcXVhZCBjZW50ZXIgPSBsYW5lQ2VudGVyICsgY3VycmVudE9mZnNldCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBdXRvQWltT2Zmc2V0KFxuICB0YXJnZXRzOiByZWFkb25seSBBdXRvQWltVGFyZ2V0W10sXG4gIGxhbmVDZW50ZXI6IG51bWJlcixcbiAgY29sdW1uT2Zmc2V0czogcmVhZG9ubHkgbnVtYmVyW10sXG4gIGN1cnJlbnRPZmZzZXQgPSAwLFxuKTogbnVtYmVyIHtcbiAgaWYgKCF0YXJnZXRzLmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgLy8gSWRlbnRpZnkgdGhlIGZyb250IHJvdzogZ3JvdXAgdGFyZ2V0cyBieSByb3dJZCAob3IgdHJlYXQgdW5ncm91cGVkIHRhcmdldHMgYXMgYSBzaW5nbGUgcm93KS5cbiAgY29uc3QgZXhwbGljaXRSb3dzID0gbmV3IE1hcDxudW1iZXIsIEF1dG9BaW1UYXJnZXRbXT4oKTtcbiAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgIGlmICh0YXJnZXQucm93SWQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3Qgcm93ID0gZXhwbGljaXRSb3dzLmdldCh0YXJnZXQucm93SWQpID8/IFtdO1xuICAgIHJvdy5wdXNoKHRhcmdldCk7XG4gICAgZXhwbGljaXRSb3dzLnNldCh0YXJnZXQucm93SWQsIHJvdyk7XG4gIH1cbiAgY29uc3QgZnJvbnRSb3cgPSBleHBsaWNpdFJvd3Muc2l6ZVxuICAgID8gWy4uLmV4cGxpY2l0Um93cy52YWx1ZXMoKV0uc29ydCgobGVmdCwgcmlnaHQpID0+XG4gICAgICAgIE1hdGgubWF4KC4uLnJpZ2h0Lm1hcCh0ID0+IHQueSkpIC0gTWF0aC5tYXgoLi4ubGVmdC5tYXAodCA9PiB0LnkpKSlbMF1cbiAgICA6IHRhcmdldHMuZmlsdGVyKHQgPT4gTWF0aC5hYnModC55IC0gTWF0aC5tYXgoLi4udGFyZ2V0cy5tYXAoYyA9PiBjLnkpKSkgPCAzKTtcblxuICAvLyBGb3IgZWFjaCBlbmVteSBpbiB0aGUgZnJvbnQgcm93IFx1MDBENyBlYWNoIHNxdWFkIGNvbHVtbiwgY29tcHV0ZSB0aGUgc3F1YWQtY2VudGVyXG4gIC8vIG9mZnNldCB0aGF0IHdvdWxkIHBsYWNlIHRoYXQgY29sdW1uIGV4YWN0bHkgb24gdGhhdCBlbmVteSdzIFguXG4gIC8vIFBpY2sgdGhlIChlbmVteSwgY29sdW1uKSBwYWlyIHdob3NlIHJlcXVpcmVkIG9mZnNldCBpcyBjbG9zZXN0IHRvIHRoZSBjdXJyZW50XG4gIC8vIG9mZnNldCBcdTIwMTQgbWluaW1pc2luZyB0aGUgYWltIG1vdmVtZW50IG5lZWRlZCB3aGlsZSBndWFyYW50ZWVpbmcgYSBoaXQuXG4gIGNvbnN0IGNvbHMgPSBjb2x1bW5PZmZzZXRzLmxlbmd0aCA+IDAgPyBjb2x1bW5PZmZzZXRzIDogWzBdO1xuICBsZXQgYmVzdE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG4gIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZnJvbnRSb3cpIHtcbiAgICBmb3IgKGNvbnN0IGNvbE9mZnNldCBvZiBjb2xzKSB7XG4gICAgICAvLyBzcXVhZENlbnRlciA9IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgXHUyMTkyIGNvbHVtbiBsYW5kcyBhdCBsYW5lQ2VudGVyICsgYWltT2Zmc2V0ICsgY29sT2Zmc2V0XG4gICAgICAvLyBXZSB3YW50IHRoYXQgdG8gZXF1YWwgZW5lbXkueCBcdTIxOTIgYWltT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXRcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0O1xuICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGNhbmRpZGF0ZU9mZnNldCAtIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdCkge1xuICAgICAgICBiZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIGJlc3RPZmZzZXQgPSBjYW5kaWRhdGVPZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RPZmZzZXQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlLCBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0cmFpdFZpZXdwb3J0UG9saWN5IHtcbiAgYXNwZWN0V2lkdGg6IG51bWJlcjtcbiAgYXNwZWN0SGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzIHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxvb2tBbmdsZURlZ3JlZXM6IG51bWJlcjtcbiAgZm9sbG93RGlzdGFuY2U6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBob3Jpem9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdGVkU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyVmlld3BvcnQge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcGxheWVyWTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQb3J0cmFpdFN0YWdlKHN0YWdlOiBIVE1MRWxlbWVudCwgcG9saWN5OiBQb3J0cmFpdFZpZXdwb3J0UG9saWN5KTogdm9pZCB7XG4gIHN0YWdlLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zdGFnZS1hc3BlY3RcIiwgYCR7cG9saWN5LmFzcGVjdFdpZHRofSAvICR7cG9saWN5LmFzcGVjdEhlaWdodH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YWdlTm9ybWFsaXplZFgoc3RhZ2U6IEhUTUxFbGVtZW50LCBjbGllbnRYOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBib3VuZHMgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChjbGllbnRYIC0gYm91bmRzLmxlZnQpIC8gYm91bmRzLndpZHRoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgPSB7XG4gIGhlaWdodDogMTcwLFxuICBsb29rQW5nbGVEZWdyZWVzOiAyMCxcbiAgZm9sbG93RGlzdGFuY2U6IDI1NSxcbiAgem9vbTogLjczLFxuICBob3Jpem9uOiAuNTQsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJTY2VuZShcbiAgcHJpbWl0aXZlczogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdLFxuICBzaGFwZXM6IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXSxcbiAgY2xvdWRzOiByZWFkb25seSBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXSxcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IFByb2plY3RlZFNjZW5lIHtcbiAgY29uc3QgcHJvamVjdFBvaW50ID0gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3MsIHZpZXdwb3J0KTtcblxuICBjb25zdCBwcm9qZWN0ZWRQcmltaXRpdmVzID0gcHJpbWl0aXZlcy5tYXAocHJpbWl0aXZlID0+IHtcbiAgICBpZiAocHJpbWl0aXZlLnNoYXBlID09PSBcImxpbmVcIikge1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb24gPz8gMDtcbiAgICAgIGNvbnN0IGhhbGZMZW5ndGggPSBwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aDtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54IC0gZGlyZWN0aW9uWCAqIGhhbGZMZW5ndGgsIHByaW1pdGl2ZS55IC0gZGlyZWN0aW9uWSAqIGhhbGZMZW5ndGgpO1xuICAgICAgY29uc3QgZW5kID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54ICsgZGlyZWN0aW9uWCAqIGhhbGZMZW5ndGgsIHByaW1pdGl2ZS55ICsgZGlyZWN0aW9uWSAqIGhhbGZMZW5ndGgpO1xuICAgICAgY29uc3QgZHggPSBlbmQueCAtIHN0YXJ0Lng7XG4gICAgICBjb25zdCBkeSA9IGVuZC55IC0gc3RhcnQueTtcbiAgICAgIGNvbnN0IHNjYWxlID0gKHN0YXJ0LnNjYWxlICsgZW5kLnNjYWxlKSAqIC41O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJpbWl0aXZlLFxuICAgICAgICB4OiAoc3RhcnQueCArIGVuZC54KSAvIDIsXG4gICAgICAgIHk6IChzdGFydC55ICsgZW5kLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IHByaW1pdGl2ZS53aWR0aCAqIHNjYWxlLFxuICAgICAgICBoZWlnaHQ6IE1hdGguaHlwb3QoZHgsIGR5KSAvIDIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCwgcHJpbWl0aXZlLnkpO1xuICAgIGNvbnN0IHdpZHRoID0gcHJpbWl0aXZlLndpZHRoICogcG9pbnQuc2NhbGU7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoKSAqIHBvaW50LnNjYWxlO1xuICAgIGxldCByb3RhdGlvbiA9IHByaW1pdGl2ZS5yb3RhdGlvbjtcbiAgICBpZiAocm90YXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYXhpc0xlbmd0aCA9IE1hdGgubWF4KHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoLCBwcmltaXRpdmUud2lkdGgsIDEpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWCA9IC1NYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICBjb25zdCBkaXJlY3Rpb25ZID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgY29uc3QgZW5kID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54ICsgZGlyZWN0aW9uWCAqIGF4aXNMZW5ndGgsIHByaW1pdGl2ZS55ICsgZGlyZWN0aW9uWSAqIGF4aXNMZW5ndGgpO1xuICAgICAgcm90YXRpb24gPSBNYXRoLmF0YW4yKHBvaW50LnggLSBlbmQueCwgZW5kLnkgLSBwb2ludC55KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByb3RhdGlvbixcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0ZWRTaGFwZXMgPSBzaGFwZXNcbiAgICAubWFwKHNoYXBlID0+IHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hhcGUsXG4gICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgIHNpemU6IHNoYXBlLnNpemUgKiBwb2ludC5zY2FsZSxcbiAgICAgICAgejogKHNoYXBlLnogPz8gMCkgLSBwb2ludC5kZXB0aCAqIC4wMDA4LFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiAoKGIueiA/PyAwKSAtIChhLnogPz8gMCkpKTtcblxuICBjb25zdCBwcm9qZWN0ZWRDbG91ZHMgPSBjbG91ZHMubWFwKGNsb3VkID0+IHtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChjbG91ZC54LCBjbG91ZC55KTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xvdWQsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHNpemU6IGNsb3VkLnNpemUgKiBwb2ludC5zY2FsZSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzOiBwcm9qZWN0ZWRQcmltaXRpdmVzLCBjbG91ZHM6IHByb2plY3RlZENsb3Vkcywgc2hhcGVzOiBwcm9qZWN0ZWRTaGFwZXMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyUG9pbnQoXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgZGVwdGg6IG51bWJlciB9IHtcbiAgcmV0dXJuIHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCkoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQpIHtcbiAgY29uc3QgY2VudGVyWCA9IHZpZXdwb3J0LndpZHRoIC8gMjtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIHJldHVybiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHdvcmxkWCA9IHggLSBjZW50ZXJYO1xuICAgIGNvbnN0IHdvcmxkWiA9IHZpZXdwb3J0LnBsYXllclkgLSB5ICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2U7XG4gICAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgICBjb25zdCBjYW1lcmFZID0gcmVsYXRpdmVZICogY29zICsgd29ybGRaICogc2luO1xuICAgIGNvbnN0IGNhbWVyYVogPSBNYXRoLm1heChtaW5EZXB0aCwgd29ybGRaICogY29zIC0gcmVsYXRpdmVZICogc2luKTtcbiAgICBjb25zdCBzY2FsZSA9IGZvY2FsTGVuZ3RoIC8gY2FtZXJhWjtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY2VudGVyWCArIHdvcmxkWCAqIHNjYWxlLFxuICAgICAgeTogaG9yaXpvblkgLSBjYW1lcmFZICogc2NhbGUsXG4gICAgICBzY2FsZSxcbiAgICAgIGRlcHRoOiBjYW1lcmFaLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3JsZFlGb3JQcm9qZWN0ZWRZKFxuICBzY3JlZW5ZOiBudW1iZXIsXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiB7IGhlaWdodDogbnVtYmVyOyBwbGF5ZXJZOiBudW1iZXIgfSxcbik6IG51bWJlciB7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgY29uc3Qgc2NyZWVuUmF0aW8gPSAoaG9yaXpvblkgLSBzY3JlZW5ZKSAvIGZvY2FsTGVuZ3RoO1xuICBjb25zdCBkZW5vbWluYXRvciA9IHNpbiAtIHNjcmVlblJhdGlvICogY29zO1xuICBpZiAoTWF0aC5hYnMoZGVub21pbmF0b3IpIDwgLjAwMDEpIHJldHVybiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgY29uc3Qgd29ybGRaID0gLXJlbGF0aXZlWSAqIChjb3MgKyBzY3JlZW5SYXRpbyAqIHNpbikgLyBkZW5vbWluYXRvcjtcbiAgcmV0dXJuIHZpZXdwb3J0LnBsYXllclkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZSAtIHdvcmxkWjtcbn1cbiIsICJpbXBvcnQgeyBnZXROZW9uU2hhcGUsIE5lb25TaGFwZUFjdG9yLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlLCB0eXBlIE5lb25TaGFwZUxhYmVsLCB0eXBlIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHN3YXJtU2hhcGVzID0ge1xuICBwbGF5ZXI6IGdldE5lb25TaGFwZShcImFycm93LWNsYXNzaWNcIikhLFxuICBlbmVteTogZ2V0TmVvblNoYXBlKFwiaHVudGVyLWV5ZVwiKSEsXG4gIG11bHRpcGxpZXI6IGdldE5lb25TaGFwZShcImJydWlzZXItY3Jvc3NcIikhLFxuICBndW5QaWNrdXA6IGdldE5lb25TaGFwZShcImhleC1maWdodGVyXCIpISxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwaXhlbHNUb1NoYXBlV29ybGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+ICh7XG4gIHg6ICh4IC8gY2FudmFzLndpZHRoIC0gLjUpICogKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxuICB5OiAoLjUgLSB5IC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwaXhlbHM6IG51bWJlcikgPT4gcGl4ZWxzIC8gY2FudmFzLmhlaWdodCAqIDIuNTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yQXRQaXhlbHMoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgcGl4ZWxTaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgY29uc3Qgd29ybGQgPSBwaXhlbHNUb1NoYXBlV29ybGQoY2FudmFzLCB4LCB5KTtcbiAgYWN0b3IubW92ZVRvKHdvcmxkLngsIHdvcmxkLnkpO1xuICBhY3Rvci5zY2FsZSA9IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZShjYW52YXMsIHBpeGVsU2l6ZSk7XG4gIHJldHVybiBhY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpO1xufVxuXG5leHBvcnQgY29uc3QgYWN0b3JJblRvcERvd25TY2VuZSA9IChhY3RvcjogTmVvblNoYXBlQWN0b3IsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgKHsgLi4uYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKSwgeCwgeSwgc2l6ZSB9KTtcblxuZXhwb3J0IGNvbnN0IHNoYXBlTGFiZWwgPSAodGV4dDogc3RyaW5nLCBwb3NpdGlvbjogTmVvblNoYXBlTGFiZWxbXCJwb3NpdGlvblwiXSwgZm9udFNpemU6IG51bWJlciwgb2Zmc2V0ID0gNCk6IE5lb25TaGFwZUxhYmVsID0+XG4gICh7IHRleHQsIHBvc2l0aW9uLCBmb250U2l6ZSwgb2Zmc2V0LCBmb250RmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsIGZvbnRXZWlnaHQ6IDcwMCB9KTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgSGVsaWNvcHRlclZpZXdwb3J0IH0gZnJvbSBcIi4vdmlld3BvcnRcIjtcblxuY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5jb25zdCBwbGF5ZXJGb3J3YXJkUm90YXRpb24gPSB7XG4gIHJvdGF0aW9uWDogZGVncmVlc1RvUmFkaWFucygtNTIpLFxuICByb3RhdGlvblk6IGRlZ3JlZXNUb1JhZGlhbnMoLTEpLFxuICByb3RhdGlvblo6IGRlZ3JlZXNUb1JhZGlhbnMoMSksXG59O1xuY29uc3Qgc2NyZWVuRm9yd2FyZFlhdyA9IChkaXJlY3Rpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMihkaXJlY3Rpb24ueCAvIGxlbmd0aCwgLWRpcmVjdGlvbi55IC8gbGVuZ3RoKTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdG9yVmlzdWFsUm9sZSA9XG4gIHwgXCJncm91bmRGb3J3YXJkXCJcbiAgfCBcInNjcmVlbkJpbGxib2FyZFwiXG4gIHwgXCJ0dW1ibGluZ0JpbGxib2FyZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yT3JpZW50YXRpb25Db250ZXh0IHtcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgcGhhc2U/OiBudW1iZXI7XG4gIGZhY2luZz86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yT3JpZW50YXRpb24ocm9sZTogQWN0b3JWaXN1YWxSb2xlLCBjb250ZXh0OiBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCk6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgc3dpdGNoIChyb2xlKSB7XG4gICAgY2FzZSBcImdyb3VuZEZvcndhcmRcIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGxheWVyRm9yd2FyZFJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblg6IHBsYXllckZvcndhcmRSb3RhdGlvbi5yb3RhdGlvblggKyBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDY1MCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4wNixcbiAgICAgICAgcm90YXRpb25ZOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25ZICsgKGNvbnRleHQuZmFjaW5nID8gc2NyZWVuRm9yd2FyZFlhdyhjb250ZXh0LmZhY2luZykgOiAwKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgXCJ0dW1ibGluZ0JpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDcwMCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4xOCxcbiAgICAgIH07XG4gICAgY2FzZSBcInNjcmVlbkJpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWxpY29wdGVyVmlld3BvcnRGb3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBsYXllclk6IG51bWJlcik6IEhlbGljb3B0ZXJWaWV3cG9ydCB7XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIHBsYXllclkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwiZ3JvdW5kRm9yd2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gICAgZmFjaW5nOiB7IHg6IDAsIHk6IC0xIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInR1bWJsaW5nQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWxsYm9hcmRPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJzY3JlZW5CaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICB9KTtcbn1cbiIsICIvKipcbiAqIFNoaWVsZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHNoaWVsZCBzdGF0ZSBhbmQgdGljayBsb2dpYy5cbiAqXG4gKiBPbmUgU2hpZWxkU3RhdGUgdHJhY2tzIHRoZSBsaXZlIHJ1bnRpbWUgc3RhdGUgZm9yIHdoYXRldmVyIHNoaWVsZCBpc1xuICogY3VycmVudGx5IGVxdWlwcGVkLiBUaGUgdGlja1NoaWVsZCgpIGZ1bmN0aW9uIGRyaXZlcyBhbGwgYmVoYXZpb3JhbCBtb2Rlc1xuICogKGNoYXJnZSwgcHVsc2UsIGNvbnRhY3QsIGF1cmEpIGFuZCByZXR1cm5zIGEgcmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICpcbiAqIERlc2lnbiBydWxlOiB0aGlzIG1vZHVsZSBkb2VzIG5vdCBtb2RpZnkgZW5lbXkgYXJyYXlzIGRpcmVjdGx5LiBJdCByZXR1cm5zXG4gKiBhIFNoaWVsZFRpY2tSZXN1bHQgdGhhdCBtYWluLnRzIGFwcGxpZXMuIFRoaXMga2VlcHMgdGhlIHNoaWVsZCBzeXN0ZW1cbiAqIHRlc3RhYmxlIGFuZCBjb21wb3NhYmxlIHdpdGggb3RoZXIgbmVhci1wbGF5ZXIgZWZmZWN0cy5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNoaWVsZElkLCBTaGllbGRNZW1iZXIgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB0eXBlIHsgTmVhcmJ5VGhyZWF0IH0gZnJvbSBcIi4vbmVhcmJ5VGhyZWF0UXVlcnlcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBY3RpdmUgcHVsc2UgZWZmZWN0ICh2aXN1YWwpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVQdWxzZUVmZmVjdCB7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMS4gRHJpdmVuIGJ5IChub3cgLSBzdGFydGVkQXQpIC8gcHVsc2VEdXJhdGlvbk1zLiAqL1xuICBwcm9ncmVzczogbnVtYmVyO1xuICAvKiogVGltZXN0YW1wIHdoZW4gdGhlIHB1bHNlIHdhcyB0cmlnZ2VyZWQuICovXG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICAvKiogRHVyYXRpb24gaW4gbXMuICovXG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIENlbnRlciB4IChzbmFwc2hvdCBvZiBwbGF5ZXIgcG9zaXRpb24gd2hlbiB0cmlnZ2VyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeS4gKi9cbiAgeTogbnVtYmVyO1xuICAvKiogTWF4aW11bSByYWRpdXMgYXQgcGVhayBleHBhbnNpb24uICovXG4gIG1heFJhZGl1czogbnVtYmVyO1xuICAvKiogQ29sb3IuICovXG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2hpZWxkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFNoaWVsZFN0YXRlIHtcbiAgc2hpZWxkSWQ6IFNoaWVsZElkO1xuICAvKiogUmVtYWluaW5nIGNoYXJnZXMgKGNoYXJnZS1iYXNlZCBzaGllbGRzKS4gKi9cbiAgY2hhcmdlczogbnVtYmVyO1xuICAvKiogU2Vjb25kcyB1bnRpbCBjb29sZG93biBjb21wbGV0ZXMuICovXG4gIGNvb2xkb3duTGVmdDogbnVtYmVyO1xuICAvKiogbXMgdGltZXN0YW1wIGFmdGVyIHdoaWNoIHRoZSBoaXQgZmxhc2ggaXMgZG9uZS4gKi9cbiAgaGl0Rmxhc2hVbnRpbDogbnVtYmVyO1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEgb2YgaGl0IGZsYXNoIGFuaW1hdGlvbiAoMSA9IGRvbmUpLiAqL1xuICBoaXRGbGFzaFByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgZXhwYW5kaW5nIHB1bHNlIHJpbmdzIChQdWxzZSBDb3JlKS4gKi9cbiAgcHVsc2VFZmZlY3RzOiBBY3RpdmVQdWxzZUVmZmVjdFtdO1xuICAvKiogRW5lbXkgaWRzIGFscmVhZHkgcmVzb2x2ZWQgYWdhaW5zdCB0aGlzIHNoaWVsZCwgcHJldmVudGluZyByZXBlYXQgZGFtYWdlIHBlciBmcmFtZS4gKi9cbiAgcmVhZG9ubHkgaW50ZXJjZXB0ZWRFbmVteUlkcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKHNoaWVsZElkOiBTaGllbGRJZCwgbWF4Q2hhcmdlczogbnVtYmVyKSB7XG4gICAgdGhpcy5zaGllbGRJZCA9IHNoaWVsZElkO1xuICAgIHRoaXMuY2hhcmdlcyA9IG1heENoYXJnZXM7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSAwO1xuICAgIHRoaXMuaGl0Rmxhc2hVbnRpbCA9IDA7XG4gICAgdGhpcy5oaXRGbGFzaFByb2dyZXNzID0gMTtcbiAgICB0aGlzLnB1bHNlRWZmZWN0cyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkQ29udGFjdFRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZENvbnRhY3RSZXN1bHQge1xuICBjb250YWN0ZWQ6IGJvb2xlYW47XG4gIGFic29yYmVkOiBib29sZWFuO1xuICBkYW1hZ2VBYnNvcmJlZDogbnVtYmVyO1xuICBlbmVteURlc3Ryb3llZDogYm9vbGVhbjtcbn1cblxuLyoqIFJlc29sdmUgb25lIGdlb21ldHJpYyBlbmVteS9zaGllbGQgY29udGFjdCBleGFjdGx5IG9uY2UgZm9yIHRoYXQgZW5lbXkuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVNoaWVsZENvbnRhY3QoXG4gIHN0YXRlOiBTaGllbGRTdGF0ZSxcbiAgc2hpZWxkOiBTaGllbGRNZW1iZXIsXG4gIHRhcmdldDogU2hpZWxkQ29udGFjdFRhcmdldCxcbiAgc2hpZWxkWDogbnVtYmVyLFxuICBzaGllbGRZOiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBzY2FsZSA9IDEsXG4pOiBTaGllbGRDb250YWN0UmVzdWx0IHtcbiAgY29uc3QgcmVzdWx0OiBTaGllbGRDb250YWN0UmVzdWx0ID0ge1xuICAgIGNvbnRhY3RlZDogZmFsc2UsXG4gICAgYWJzb3JiZWQ6IGZhbHNlLFxuICAgIGRhbWFnZUFic29yYmVkOiAwLFxuICAgIGVuZW15RGVzdHJveWVkOiBmYWxzZSxcbiAgfTtcbiAgaWYgKHRhcmdldC5keWluZyB8fCBzdGF0ZS5pbnRlcmNlcHRlZEVuZW15SWRzLmhhcyh0YXJnZXQuaWQpKSByZXR1cm4gcmVzdWx0O1xuICBjb25zdCByYWRpdXMgPSBzaGllbGQucmFkaXVzICogc2NhbGUgKyB0YXJnZXQucmFkaXVzO1xuICBjb25zdCBkeCA9IHRhcmdldC54IC0gc2hpZWxkWDtcbiAgY29uc3QgZHkgPSB0YXJnZXQueSAtIHNoaWVsZFk7XG4gIGlmIChkeCAqIGR4ICsgZHkgKiBkeSA+IHJhZGl1cyAqIHJhZGl1cykgcmV0dXJuIHJlc3VsdDtcblxuICByZXN1bHQuY29udGFjdGVkID0gdHJ1ZTtcbiAgc3RhdGUuaW50ZXJjZXB0ZWRFbmVteUlkcy5hZGQodGFyZ2V0LmlkKTtcbiAgaWYgKHN0YXRlLmNoYXJnZXMgPD0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICBjb25zdCBhYnNvcmJlZCA9IE1hdGgubWluKHN0YXRlLmNoYXJnZXMsIHRhcmdldC5oZWFsdGgpO1xuICBzdGF0ZS5jaGFyZ2VzIC09IGFic29yYmVkO1xuICB0YXJnZXQuaGVhbHRoIC09IGFic29yYmVkO1xuICBzdGF0ZS5oaXRGbGFzaFVudGlsID0gbm93ICsgMjgwO1xuICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gMDtcbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgcmVzdWx0LmFic29yYmVkID0gdHJ1ZTtcbiAgcmVzdWx0LmRhbWFnZUFic29yYmVkID0gYWJzb3JiZWQ7XG4gIHJlc3VsdC5lbmVteURlc3Ryb3llZCA9IHRhcmdldC5oZWFsdGggPD0gMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaWNrIHJlc3VsdCBcdTIwMTQgd2hhdCBtYWluLnRzIHNob3VsZCBhcHBseSB0aGlzIGZyYW1lXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRUaWNrUmVzdWx0IHtcbiAgLyoqIEVuZW15IElEcyB0aGF0IHNob3VsZCByZWNlaXZlIGNvbnRhY3REYW1hZ2UgdGhpcyBmcmFtZSAoY29udGFjdCBzaGllbGRzKS4gKi9cbiAgY29udGFjdERhbWFnZUVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIEFtb3VudCBvZiBjb250YWN0IGRhbWFnZSBwZXIgZW5lbXkuICovXG4gIGNvbnRhY3REYW1hZ2VBbW91bnQ6IG51bWJlcjtcbiAgLyoqIEVuZW15IElEcyB0aGF0IHNob3VsZCBoYXZlIHRoZWlyIHNwZWVkIG11bHRpcGxpZWQgYnkgc2xvd011bHRpcGxpZXIgKGF1cmEpLiAqL1xuICBzbG93RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogRWZmZWN0aXZlIHNsb3cgbXVsdGlwbGllciB0byBhcHBseS4gKi9cbiAgc2xvd011bHRpcGxpZXI6IG51bWJlcjtcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBzaGllbGQgYWJzb3JiZWQgYSBoaXQgdGhpcyBmcmFtZSAoY2hhcmdlIGNvbnN1bWVkKS5cbiAgICogbWFpbi50cyBzaG91bGQgTk9UIGtpbGwvZGFtYWdlIHRoZSBwbGF5ZXIgZm9yIHRoYXQgY29sbGlzaW9uLlxuICAgKi9cbiAgYWJzb3JiZWRIaXQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdG8gcHVzaCBhd2F5IGZyb20gdGhlIHBsYXllciBjZW50ZXIgKHB1bHNlIHNoaWVsZCkuXG4gICAqIG1haW4udHMgc2hvdWxkIGFkZCBwdXNoRGlzdGFuY2UgdG8gdGhlIGVuZW15J3Mgb3V0d2FyZCB2ZWxvY2l0eSBvciBwb3NpdGlvbi5cbiAgICovXG4gIHB1c2hFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBQdXNoIGRpc3RhbmNlIGluIHB4LiAqL1xuICBwdXNoRGlzdGFuY2U6IG51bWJlcjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaWNrIGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgUFVMU0VfRFVSQVRJT05fTVMgPSA2MDA7XG5cbi8qKlxuICogRHJpdmVzIHRoZSBzaGllbGQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgICBNdXRhYmxlIHNoaWVsZCBzdGF0ZSB0byB1cGRhdGUuXG4gKiBAcGFyYW0gc2hpZWxkICAgICAgSW1tdXRhYmxlIHNoaWVsZCBkZWZpbml0aW9uLlxuICogQHBhcmFtIHRocmVhdHMgICAgIE5lYXJieSB0aHJlYXRzIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkgKHJhbmdlID0gc2hpZWxkLnJhZGl1cykuXG4gKiBAcGFyYW0gcGxheWVyWCAgICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHggKGZvciBwdWxzZSBvcmlnaW4pLlxuICogQHBhcmFtIHBsYXllclkgICAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB5LlxuICogQHBhcmFtIG5vdyAgICAgICAgIEN1cnJlbnQgdGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICAgIEZyYW1lIGRlbHRhIGluIHNlY29uZHMuXG4gKiBAcmV0dXJucyAgICAgICAgICAgQWN0aW9ucyBmb3IgbWFpbi50cyB0byBhcHBseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTaGllbGQoXG4gIHN0YXRlOiBTaGllbGRTdGF0ZSxcbiAgc2hpZWxkOiBTaGllbGRNZW1iZXIsXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBwbGF5ZXJYOiBudW1iZXIsXG4gIHBsYXllclk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIGRlbHRhOiBudW1iZXIsXG4pOiBTaGllbGRUaWNrUmVzdWx0IHtcbiAgY29uc3QgcmVzdWx0OiBTaGllbGRUaWNrUmVzdWx0ID0ge1xuICAgIGNvbnRhY3REYW1hZ2VFbmVteUlkczogW10sXG4gICAgY29udGFjdERhbWFnZUFtb3VudDogMCxcbiAgICBzbG93RW5lbXlJZHM6IFtdLFxuICAgIHNsb3dNdWx0aXBsaWVyOiAxLjAsXG4gICAgYWJzb3JiZWRIaXQ6IGZhbHNlLFxuICAgIHB1c2hFbmVteUlkczogW10sXG4gICAgcHVzaERpc3RhbmNlOiAwLFxuICB9O1xuXG4gIC8vIEFkdmFuY2UgY29vbGRvd25cbiAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdCA+IDApIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWF4KDAsIHN0YXRlLmNvb2xkb3duTGVmdCAtIGRlbHRhKTtcblxuICAvLyBVcGRhdGUgcHVsc2UgcHJvZ3Jlc3NcbiAgZm9yIChjb25zdCBwdWxzZSBvZiBzdGF0ZS5wdWxzZUVmZmVjdHMpIHtcbiAgICBwdWxzZS5wcm9ncmVzcyA9IChub3cgLSBwdWxzZS5zdGFydGVkQXQpIC8gcHVsc2UuZHVyYXRpb25NcztcbiAgfVxuICBzdGF0ZS5wdWxzZUVmZmVjdHMgPSBzdGF0ZS5wdWxzZUVmZmVjdHMuZmlsdGVyKHAgPT4gcC5wcm9ncmVzcyA8IDEpO1xuXG4gIC8vIEFkdmFuY2UgaGl0IGZsYXNoXG4gIGlmIChzdGF0ZS5oaXRGbGFzaFVudGlsID4gMCkge1xuICAgIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCAobm93IC0gKHN0YXRlLmhpdEZsYXNoVW50aWwgLSAyODApKSAvIDI4MCk7XG4gIH1cblxuICAvLyBSZWZpbGwgY2hhcmdlcyB3aGVuIGNvb2xkb3duIGNvbXBsZXRlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpXG4gIGlmIChzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiAmJiBzdGF0ZS5jb29sZG93bkxlZnQgPT09IDAgJiYgc3RhdGUuY2hhcmdlcyA8IHNoaWVsZC5tYXhDaGFyZ2VzKSB7XG4gICAgc3RhdGUuY2hhcmdlcyA9IHNoaWVsZC5tYXhDaGFyZ2VzO1xuICB9XG5cbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RlOiBjb250YWN0IFx1MjAxNCBkZWFsIGRhbWFnZSB0byBlbmVtaWVzIHRvdWNoaW5nIHRoZSBzaGllbGQgZWRnZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgcmVzdWx0LmNvbnRhY3REYW1hZ2VBbW91bnQgPSBzaGllbGQuY29udGFjdERhbWFnZTtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LmNvbnRhY3REYW1hZ2VFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IGF1cmEgXHUyMDE0IHNsb3cgZW5lbWllcyBpbnNpZGUgcmFkaXVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICByZXN1bHQuc2xvd011bHRpcGxpZXIgPSBzaGllbGQuc2xvd011bHRpcGxpZXI7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5zbG93RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RlOiBwdWxzZSBcdTIwMTQgZW1pdCBwdXNoIHJpbmcgd2hlbiBhbnkgZW5lbXkgZW50ZXJzIHJhbmdlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICAvLyBUcmlnZ2VyIHB1bHNlXG4gICAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgICBjb25zdCBwdWxzZTogQWN0aXZlUHVsc2VFZmZlY3QgPSB7XG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIHN0YXJ0ZWRBdDogbm93LFxuICAgICAgZHVyYXRpb25NczogUFVMU0VfRFVSQVRJT05fTVMsXG4gICAgICB4OiBwbGF5ZXJYLFxuICAgICAgeTogcGxheWVyWSxcbiAgICAgIG1heFJhZGl1czogc2hpZWxkLnJhZGl1cyAqIDEuOCxcbiAgICAgIGNvbG9yOiBcIlwiLCAvLyBmaWxsZWQgYnkgZHJhdyBjb2RlIHdpdGggbmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXVxuICAgIH07XG4gICAgc3RhdGUucHVsc2VFZmZlY3RzLnB1c2gocHVsc2UpO1xuICAgIHJlc3VsdC5wdXNoRGlzdGFuY2UgPSBzaGllbGQucHVzaERpc3RhbmNlO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQucHVzaEVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhpdCBhYnNvcnB0aW9uIFx1MjAxNCBjYWxsZWQgYnkgbWFpbi50cyB3aGVuIGFuIGVuZW15IHdvdWxkIHRvdWNoIHRoZSBwbGF5ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYWJzb3JiIGEgaGl0IHVzaW5nIHNoaWVsZCBjaGFyZ2VzLlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBoaXQgd2FzIGFic29yYmVkIChjaGFyZ2UgY29uc3VtZWQpLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnlBYnNvcmJIaXQoc3RhdGU6IFNoaWVsZFN0YXRlLCBzaGllbGQ6IFNoaWVsZE1lbWJlciwgbm93OiBudW1iZXIpOiBib29sZWFuIHtcbiAgaWYgKHN0YXRlLmNoYXJnZXMgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICBzdGF0ZS5jaGFyZ2VzIC09IDE7XG4gIHN0YXRlLmhpdEZsYXNoVW50aWwgPSBub3cgKyAyODA7XG4gIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSAwO1xuICAvLyBSZWNoYXJnZSBiZWdpbnMgYWZ0ZXIgdGhlIG1vc3QgcmVjZW50IGFic29yYmVkIGhpdC4gS2VlcGluZyB0aGUgY29vbGRvd25cbiAgLy8gYWN0aXZlIHByZXZlbnRzIHRpY2tTaGllbGQoKSBmcm9tIGltbWVkaWF0ZWx5IHJlc3RvcmluZyBhIHBhcnRpYWxseVxuICAvLyBkZXBsZXRlZCBzaGllbGQgb24gdGhlIG5leHQgZnJhbWUuXG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gIHJldHVybiB0cnVlO1xufVxuIiwgIi8qKlxuICogTmVhcmJ5VGhyZWF0UXVlcnkgXHUyMDE0IHNoYXJlZCBsYW5lLWF3YXJlIGVuZW15IHF1ZXJ5IGZvciBzaGllbGQgYW5kIHN3b3JkIGZhbWlsaWVzLlxuICpcbiAqIEJvdGggc2hpZWxkcyBhbmQgc3dvcmRzIG9wZXJhdGUgbmVhciB0aGUgcGxheWVyLCBzbyB0aGV5IHNoYXJlIHRoaXMgbW9kdWxlXG4gKiB0byBhdm9pZCBpbmRlcGVuZGVudCwgcG90ZW50aWFsbHkgY29uZmxpY3Rpbmcgc2NhbnMuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgaW50ZW50aW9uYWxseSBtaW5pbWFsLiBJdCBwcm92aWRlcyBlbm91Z2ggc3RydWN0dXJlIHRvIGJlXG4gKiBmdXR1cmUtZnJpZW5kbHkgKG9yaWdpblNoYXBlIGluZGV4LCBjb2x1bW4tYmFuZCBhd2FyZW5lc3MpIHdpdGhvdXRcbiAqIG92ZXItYnVpbGRpbmcuIEV4dGVuZCB3aGVuIG5lZWRlZCBcdTIwMTQgZG8gbm90IHJlZmFjdG9yIHByZW1hdHVyZWx5LlxuICpcbiAqIE5lYXItcGxheWVyIGVmZmVjdCBwcmVjZWRlbmNlIChhcHBsaWVkIGJ5IG1haW4udHMpOlxuICogICAxLiBzaGllbGRCbG9jayAgICAgICAgXHUyMDE0IGNoYXJnZS1iYXNlZCBoaXQgYWJzb3JwdGlvblxuICogICAyLiBzaGllbGRQdWxzZSAgICAgICAgXHUyMDE0IGVtZXJnZW5jeSBwdXNoXG4gKiAgIDMuIHN3b3JkQXR0YWNrICAgICAgICBcdTIwMTQgc3dvcmQgZmFtaWx5XG4gKiAgIDQuIHNoaWVsZENvbnRhY3REYW1hZ2UgXHUyMDE0IGNvbnRhY3QgZGFtYWdlIG9uIHNoaWVsZCBlZGdlXG4gKiAgIDUuIHNoaWVsZEF1cmEgICAgICAgICBcdTIwMTQgc2xvdy9kZWJ1ZmYgYXVyYVxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogTWluaW1hbCBlbmVteSBpbnRlcmZhY2UgZXhwZWN0ZWQgYnkgdGhlIHRocmVhdCBxdWVyeSBzeXN0ZW0uICovXG5leHBvcnQgaW50ZXJmYWNlIFRocmVhdFRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IDAgfCAxO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgU2hpZWxkTWVtYmVyLCBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5VmlzdWFsU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5jb25zdCBlbXB0eVNjZW5lID0gKCk6IEZhbWlseVZpc3VhbFNjZW5lID0+ICh7IHByaW1pdGl2ZXM6IFtdLCBzaGFwZXM6IFtdIH0pO1xuY29uc3QgcmVxdWlyZWRTaGFwZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7aWR9XCIgaXMgcmVxdWlyZWQgYnkgZmFtaWx5IHZpc3VhbHMuYCk7XG4gIHJldHVybiBzaGFwZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFNoaWVsZE1lbWJlcjtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgaW5pdGlhbFN0cmVuZ3RoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGhpdFByb2dyZXNzPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWVsZFZpc3VhbHMob3B0aW9uczogU2hpZWxkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGNvbnN0IHtcbiAgICBkZWZpbml0aW9uLCB4LCB5LCBub3csXG4gICAgc2NhbGUgPSAxLFxuICAgIGhpdFByb2dyZXNzID0gMSxcbiAgICB2aXNpYmxlID0gdHJ1ZSxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0cmVuZ3RoID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5zdHJlbmd0aCk7XG4gIGNvbnN0IGluaXRpYWxTdHJlbmd0aCA9IE1hdGgubWF4KDEsIG9wdGlvbnMuaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgaW1wYWN0ID0gTWF0aC5tYXgoMCwgMSAtIGhpdFByb2dyZXNzKTtcbiAgY29uc3QgZXhwbG9kaW5nID0gc3RyZW5ndGggPD0gMCAmJiBoaXRQcm9ncmVzcyA8IDE7XG4gIGNvbnN0IGNvbG9yID0gbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl07XG4gIGNvbnN0IHJhZGl1cyA9IGRlZmluaXRpb24ucmFkaXVzICogc2NhbGU7XG5cbiAgaWYgKHZpc2libGUgfHwgZXhwbG9kaW5nKSB7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzaGllbGQtcmluZ1wiKSxcbiAgICAgIHgsIHksXG4gICAgICBzaXplOiByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEgKyBpbXBhY3QgKiAuOCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMTUgKyBpbXBhY3QgKiAxLjUsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQyICsgaW1wYWN0ICogLjMsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4xNSArIGltcGFjdCAqIDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiAuNSArIGltcGFjdCAqIC4zNSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogZXhwbG9kaW5nID8gTWF0aC5taW4oMSwgaGl0UHJvZ3Jlc3MpIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IC45LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IG9yYml0ZXJTaGFwZSA9IHJlcXVpcmVkU2hhcGUoZGVmaW5pdGlvbi5vcmJpdGVyU2hhcGUgPT09IFwiaGV4XCIgPyBcImhleC1maWdodGVyXCIgOiBcInN0YXItY29yZVwiKTtcbiAgY29uc3Qgb3JiaXRlckNvdW50ID0gTWF0aC5jZWlsKGRlZmluaXRpb24ub3JiaXRlckNvdW50ICogc3RyZW5ndGggLyBpbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJICogMiAvIGRlZmluaXRpb24ub3JiaXRlckNvdW50O1xuICBjb25zdCBiYXNlQW5nbGUgPSBub3cgLyAxMDAwICogZGVmaW5pdGlvbi5vcmJpdGVyU3BlZWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JiaXRlckNvdW50OyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9IGJhc2VBbmdsZSArIGkgKiBhbmdsZVN0ZXA7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IG9yYml0ZXJTaGFwZSxcbiAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICB5OiB5ICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxuICAgICAgc2l6ZTogZGVmaW5pdGlvbi5vcmJpdGVyU2l6ZSAqIDEuOCAqIHNjYWxlLFxuICAgICAgY29sb3IsXG4gICAgICByb3RhdGlvblo6IGFuZ2xlICsgbm93IC8gMTQwMCxcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNCxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjI1LFxuICAgICAgZW5lcmd5QmxlZWQ6IC41LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTd29yZE1lbWJlcjtcbiAgc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3dvcmRUcmFpbChzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24sIHNjYWxlOiBudW1iZXIpOiBOZW9uUHJpbWl0aXZlW10ge1xuICBpZiAoc2xhc2gucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFtdO1xuICBjb25zdCBsaWZlID0gMSAtIHNsYXNoLnByb2dyZXNzO1xuICBjb25zdCByYWRpdXMgPSBzbGFzaC5yZWFjaCAqIHNjYWxlO1xuICBjb25zdCBoYWxmQXJjID0gc2xhc2guYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IGhlYWRpbmcgPSAtTWF0aC5QSSAvIDI7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDE7XG4gIGNvbnN0IGJsYWRlQW5nbGUgPSBoZWFkaW5nIC0gaGFsZkFyYyArIHN3ZWVwICogaGFsZkFyYyAqIDI7XG4gIGNvbnN0IHRyYWlsTGVuZ3RoID0gaGFsZkFyYyAqICguNTUgKyBsaWZlICogLjc1KTtcbiAgY29uc3QgdGhpY2tuZXNzID0gc2xhc2gudGhpY2tuZXNzICogc2NhbGU7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkrKykge1xuICAgIGNvbnN0IGFnZSA9IGkgLyAxMDtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGgubWF4KGhlYWRpbmcgLSBoYWxmQXJjLCBibGFkZUFuZ2xlIC0gdHJhaWxMZW5ndGggKiBhZ2UpO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gcmFkaXVzICogKC43MiArIE1hdGguc2luKGFnZSAqIE1hdGguUEkpICogLjA4KTtcbiAgICBjb25zdCBmYWRlID0gTWF0aC5wb3coMSAtIGFnZSwgMS4zNSkgKiBsaWZlO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBzbGFzaC54ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB5OiBzbGFzaC55ICsgTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB3aWR0aDogTWF0aC5tYXgoLjgsIHRoaWNrbmVzcyAqICgyLjQgLSBhZ2UgKiAxLjU1KSksXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqICguMjQgLSBhZ2UgKiAuMSksXG4gICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICBnbG93OiAxLjE1ICogZmFkZSxcbiAgICAgIGludGVuc2l0eTogMS40NSAqIGZhZGUsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogYW5nbGUgKyBNYXRoLlBJIC8gMixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGxlYWRpbmdYID0gc2xhc2gueCArIE1hdGguY29zKGJsYWRlQW5nbGUpICogcmFkaXVzICogLjgyO1xuICBjb25zdCBsZWFkaW5nWSA9IHNsYXNoLnkgKyBNYXRoLnNpbihibGFkZUFuZ2xlKSAqIHJhZGl1cyAqIC44MjtcbiAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICB4OiBsZWFkaW5nWCwgeTogbGVhZGluZ1ksXG4gICAgd2lkdGg6IE1hdGgubWF4KDEuMiwgdGhpY2tuZXNzICogMi44KSxcbiAgICBoZWlnaHQ6IHJhZGl1cyAqIC4zMixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IHNsYXNoLmNvbG9yLFxuICAgIGdsb3c6IDEuNCAqIGxpZmUsXG4gICAgaW50ZW5zaXR5OiAxLjcgKiBsaWZlLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogYmxhZGVBbmdsZSArIE1hdGguUEkgLyAyLFxuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcgJiYgc2xhc2gucHJvZ3Jlc3MgPCAuNzsgaSsrKSB7XG4gICAgY29uc3Qgc3ByZWFkID0gKGkgLSAzKSAqIC4xMztcbiAgICBjb25zdCBzcGFya0xpZmUgPSBsaWZlICogKDEgLSBNYXRoLmFicyhpIC0gMykgKiAuMDgpO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBsZWFkaW5nWCArIE1hdGguY29zKGJsYWRlQW5nbGUgKyBzcHJlYWQpICogcmFkaXVzICogKC4wNCArIGkgKiAuMDEyKSxcbiAgICAgIHk6IGxlYWRpbmdZICsgTWF0aC5zaW4oYmxhZGVBbmdsZSArIHNwcmVhZCkgKiByYWRpdXMgKiAoLjA0ICsgaSAqIC4wMTIpLFxuICAgICAgd2lkdGg6IE1hdGgubWF4KC43LCB0aGlja25lc3MgKiAuNzUpLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAoLjA4ICsgaSAlIDMgKiAuMDI1KSxcbiAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGdsb3c6IDEuMSAqIHNwYXJrTGlmZSxcbiAgICAgIGludGVuc2l0eTogMS4yNSAqIHNwYXJrTGlmZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBibGFkZUFuZ2xlICsgc3ByZWFkLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dvcmRWaXN1YWxzKG9wdGlvbnM6IFN3b3JkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGlmICghb3B0aW9ucy52aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IHsgZGVmaW5pdGlvbiwgc2xhc2gsIHgsIHksIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaGFsZkFyYyA9IGRlZmluaXRpb24uYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2ggPyAoc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDEpIDogLjU7XG4gIGNvbnN0IHN3b3JkQW5nbGUgPSAtTWF0aC5QSSAvIDIgLSBoYWxmQXJjICsgc3dlZXAgKiBoYWxmQXJjICogMjtcbiAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic3Bpa2UtbGFuY2VcIiksXG4gICAgeCwgeSxcbiAgICBzaXplOiBNYXRoLm1pbigxNywgZGVmaW5pdGlvbi5yYW5nZSAqIC4yOCkgKiBzY2FsZSxcbiAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgcm90YXRpb25aOiBzd29yZEFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gICAgbGluZVRoaWNrbmVzczogLjgyLFxuICAgIGdsb3c6IHNsYXNoID8gMS4zNSA6IDEsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiBzbGFzaCA/IDEuOCA6IDEuMTUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IHNsYXNoID8gLjcyIDogLjQyLFxuICAgIGVuZXJneVNwZWVkOiBzbGFzaCA/IDIuMSA6IDEuMixcbiAgICBlbmVyZ3lCbGVlZDogc2xhc2ggPyAuOCA6IC41LFxuICB9KTtcbiAgaWYgKHNsYXNoKSBzY2VuZS5wcmltaXRpdmVzLnB1c2goLi4uc3dvcmRUcmFpbChzbGFzaCwgc2NhbGUpKTtcbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBTaGFwZShzaGFwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlIHtcbiAgY29uc3QgeyB4LCB5LCBjb2xvciwgbm93LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoc2hhcGVJZCksXG4gICAgeDogeCArIE1hdGguc2luKG5vdyAvIDQyMCArIHkgKiAuMDcpICogNC41ICogc2NhbGUsXG4gICAgeSxcbiAgICBzaXplOiAxMCAqIHNjYWxlICogKDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyB5ICogLjA1KSAqIC4wOCksXG4gICAgY29sb3IsXG4gICAgcm90YXRpb25aOiBub3cgLyAxMTAwLFxuICAgIGxpbmVUaGlja25lc3M6IC43NixcbiAgICBnbG93OiAxLjA1LFxuICAgIGVuZXJneUludGVuc2l0eTogMS4yNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjQ4LFxuICAgIGVuZXJneVNwZWVkOiAxLjM1LFxuICAgIGVuZXJneUJsZWVkOiAuNTUsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzaGllbGQtcmluZ1wiLCBvcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic3Bpa2UtbGFuY2VcIiwgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHtcbiAgY3JlYXRlTGFuZVJ1bm5lclNjZW5lLFxuICBOZW9uU2hhcGVBY3RvciwgTmVvblNoYXBlRGlzcG9zYWwsIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcixcbiAgbmVvblBhbGV0dGUsIHR5cGUgTmVvblByaW1pdGl2ZSwgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIHNoaWVsZEZhbWlseSwgb3JiRmFtaWx5LFxuICB0eXBlIFNoaWVsZElkLFxufSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgYmluZFNxdWFkSW5wdXQgfSBmcm9tIFwiLi4vLi4vc3JjL2lucHV0XCI7XG5pbXBvcnQgeyBTcXVhZE1vZGVsIH0gZnJvbSBcIi4uLy4uL3NyYy9zcXVhZFwiO1xuaW1wb3J0IHsgQXV0b0FpbUNvbnRyb2xTdGF0ZSwgc2VsZWN0QXV0b0FpbU9mZnNldCB9IGZyb20gXCIuLi8uLi9zcmMvYXV0b0FpbVwiO1xuaW1wb3J0IHsgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgYXBwbHlQb3J0cmFpdFN0YWdlLCBwcm9qZWN0SGVsaWNvcHRlclNjZW5lIH0gZnJvbSBcIi4uLy4uL3NyYy92aWV3cG9ydFwiO1xuaW1wb3J0IHsgYWN0b3JJblRvcERvd25TY2VuZSwgc2hhcGVMYWJlbCwgc3dhcm1TaGFwZXMgfSBmcm9tIFwiLi4vLi4vc3JjL3NoYXBlVmlzdWFsc1wiO1xuaW1wb3J0IHsgZW5lbXlPcmllbnRhdGlvbiwgaGVsaWNvcHRlclZpZXdwb3J0Rm9yLCBwbGF5ZXJPcmllbnRhdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvcmVuZGVyT3JpZW50YXRpb25cIjtcbmltcG9ydCB7IHJlc29sdmVTaGllbGRDb250YWN0LCBTaGllbGRTdGF0ZSwgdGlja1NoaWVsZCB9IGZyb20gXCIuLi8uLi9zcmMvY29tYmF0L3NoaWVsZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgcXVlcnlOZWFyYnlUaHJlYXRzIH0gZnJvbSBcIi4uLy4uL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnlcIjtcbmltcG9ydCB7IHNoaWVsZFBpY2t1cFZpc3VhbCwgc2hpZWxkVmlzdWFscyB9IGZyb20gXCIuLi8uLi9zcmMvZmFtaWx5VmlzdWFsc1wiO1xuXG5pbnRlcmZhY2UgRW5lbXkge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiAwIHwgMTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICByb3dJZDogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2hpZWxkUGlja3VwIHtcbiAgc2hpZWxkSWQ6IFNoaWVsZElkO1xuICBsYW5lOiAwIHwgMTtcbiAgeTogbnVtYmVyO1xufVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PihcIiNnYW1lLWNhbnZhc1wiKSE7XG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2Vycm9yXCIpITtcbmNvbnN0IHNoaWVsZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3NoaWVsZC1zZWxlY3RcIikhO1xuY29uc3Qgd2VhcG9uUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3dlYXBvbi1yZWFkb3V0XCIpITtcbmNvbnN0IHNjb3JlUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Njb3JlLXJlYWRvdXRcIikhO1xuY29uc3Qgc3BlY1JlYWRvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzcGVjLXJlYWRvdXRcIikhO1xuY29uc3QgZW5lbXlIcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNlbmVteS1ocFwiKSE7XG5jb25zdCBzaGllbGRTdHJlbmd0aFJlYWRvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzaGllbGQtc3RyZW5ndGhcIikhO1xuY29uc3QgZ2FtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNnYW1lXCIpITtcbmFwcGx5UG9ydHJhaXRTdGFnZShnYW1lRWxlbWVudCwgeyBhc3BlY3RXaWR0aDogOSwgYXNwZWN0SGVpZ2h0OiAxNiB9KTtcbmNvbnN0IGF1ZGlvSWQgPSAoaWQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLi4vLi4vLi4vLi4vYXVkaW8vJHtpZH1gO1xuY29uc3QgcGxheVNmeCA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5KGF1ZGlvSWQoaWQpKTtcbmNvbnN0IHBsYXlFbmVteURlc3Ryb3llZCA9ICgpOiB2b2lkID0+IHdpbmRvdy5nYW1lQXVkaW8/LnBsYXlSb3RhdGVkKGF1ZGlvSWQoXCJFbmVteURlc3Ryb3llZFwiKSwgMik7XG5cbnRyeSB7XG4gIGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLmNyZWF0ZShjYW52YXMsIDQ1MCwgODAwKTtcbiAgY29uc3Qgb3JiID0gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmI7XG4gIGNvbnN0IGVuZW1pZXM6IEVuZW15W10gPSBbXTtcbiAgY29uc3QgcGlja3VwczogU2hpZWxkUGlja3VwW10gPSBbXTtcbiAgY29uc3Qgc3F1YWQgPSBuZXcgU3F1YWRNb2RlbCgpO1xuICBjb25zdCBhaW1Db250cm9sID0gbmV3IEF1dG9BaW1Db250cm9sU3RhdGUoKTtcbiAgbGV0IHBsYXllckxhbmUgPSAwO1xuICBsZXQgYWN0aXZlU2hpZWxkSWQ6IFNoaWVsZElkID0gXCJsaWdodEd1YXJkXCI7XG4gIGxldCBzaGllbGRTdGF0ZSA9IG5ldyBTaGllbGRTdGF0ZShhY3RpdmVTaGllbGRJZCwgc2hpZWxkRmFtaWx5Lm1lbWJlcnNbYWN0aXZlU2hpZWxkSWRdLm1heENoYXJnZXMpO1xuICBsZXQgZW50aXR5U2VxdWVuY2UgPSAwO1xuICBsZXQga2lsbHMgPSAwO1xuICBsZXQgbGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBwbGF5ZXJBbGl2ZSA9IHRydWU7XG4gIGxldCByZXN0YXJ0QXQgPSAwO1xuICBsZXQgcGxheWVyQWN0b3IgPSBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pO1xuICBsZXQgaW5pdGlhbFNoaWVsZFN0cmVuZ3RoOiBudW1iZXIgPSBzaGllbGRGYW1pbHkubWVtYmVyc1thY3RpdmVTaGllbGRJZF0ubWF4Q2hhcmdlcztcbiAgbGV0IHNoaWVsZFN0cmVuZ3RoOiBudW1iZXIgPSBpbml0aWFsU2hpZWxkU3RyZW5ndGg7XG5cbiAgY29uc3QgbGFuZVggPSAobGFuZTogbnVtYmVyKSA9PiBjYW52YXMud2lkdGggKiAobGFuZSA9PT0gMCA/IDAuMzIgOiAwLjY4KTtcbiAgY29uc3QgcGxheWVyWSA9ICgpID0+IGNhbnZhcy5oZWlnaHQgKiAwLjgyO1xuICBjb25zdCBzY2FsZSA9ICgpID0+IDE7XG5cbiAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXMoc2hpZWxkRmFtaWx5Lm1lbWJlcnMpKSB7XG4gICAgc2hpZWxkU2VsZWN0LmFkZChuZXcgT3B0aW9uKHNoaWVsZC5sYWJlbCwgaWQpKTtcbiAgfVxuICBzaGllbGRTZWxlY3QudmFsdWUgPSBhY3RpdmVTaGllbGRJZDtcblxuICBjb25zdCBlcXVpcCA9IChpZDogU2hpZWxkSWQpID0+IHtcbiAgICBhY3RpdmVTaGllbGRJZCA9IGlkO1xuICAgIGNvbnN0IGRlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW2lkXTtcbiAgICBzaGllbGRTdGF0ZSA9IG5ldyBTaGllbGRTdGF0ZShpZCwgZGVmLm1heENoYXJnZXMpO1xuICAgIGluaXRpYWxTaGllbGRTdHJlbmd0aCA9IGRlZi5tb2RlID09PSBcImNoYXJnZVwiID8gZGVmLm1heENoYXJnZXMgOiAwO1xuICAgIHNoaWVsZFN0cmVuZ3RoID0gaW5pdGlhbFNoaWVsZFN0cmVuZ3RoO1xuICAgIHNoaWVsZFNlbGVjdC52YWx1ZSA9IGlkO1xuICAgIHBsYXlTZngoXCJQaWNrdXBTaGllbGRcIik7XG4gICAgcGxheVNmeChcIlNoaWVsZFwiKTtcbiAgICB1cGRhdGVSZWFkb3V0KCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUmVhZG91dCA9ICgpID0+IHtcbiAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1thY3RpdmVTaGllbGRJZF07XG4gICAgd2VhcG9uUmVhZG91dC50ZXh0Q29udGVudCA9IGAke2RlZi5sYWJlbH1gO1xuICAgIHNjb3JlUmVhZG91dC50ZXh0Q29udGVudCA9IGBLaWxscyAke2tpbGxzfWA7XG4gICAgY29uc3QgY2hhcmdlc1RleHQgPSBkZWYubWF4Q2hhcmdlcyA+IDAgPyBgJHtNYXRoLmNlaWwoc2hpZWxkU3RyZW5ndGgpfS8ke2RlZi5tYXhDaGFyZ2VzfWAgOiBcIlx1MjAxNFwiO1xuICAgIHNoaWVsZFN0cmVuZ3RoUmVhZG91dC50ZXh0Q29udGVudCA9IGAke3NoaWVsZFN0cmVuZ3RoLnRvRml4ZWQoMil9IC8gJHtpbml0aWFsU2hpZWxkU3RyZW5ndGgudG9GaXhlZCgyKX1gO1xuICAgIHNwZWNSZWFkb3V0LmlubmVySFRNTCA9IFtcbiAgICAgIFtcIlJhZGl1c1wiLCBTdHJpbmcoZGVmLnJhZGl1cyldLFxuICAgICAgW1wiU3RyZW5ndGhcIiwgY2hhcmdlc1RleHRdLFxuICAgICAgW1wiQ29vbGRvd25cIiwgYCR7ZGVmLmNvb2xkb3duU2Vjb25kc31zYF0sXG4gICAgICBbXCJPcmJpdGVyc1wiLCBgJHtkZWYub3JiaXRlckNvdW50fSBcdTAwRDcgJHtkZWYub3JiaXRlclNoYXBlfWBdLFxuICAgIF0ubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgPGR0PiR7bmFtZX08L2R0PjxkZD4ke3ZhbHVlfTwvZGQ+YCkuam9pbihcIlwiKTtcbiAgfTtcblxuICBzcXVhZC54ID0gbGFuZVgoMCk7XG4gIHNxdWFkLnRhcmdldFggPSBsYW5lWCgwKTtcblxuICBjb25zdCBzcGF3bkVuZW15ID0gKGxhbmU6IDAgfCAxKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmVxdWVzdGVkSHAgPSBOdW1iZXIucGFyc2VGbG9hdChlbmVteUhwSW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IGhlYWx0aCA9IE51bWJlci5pc0Zpbml0ZShyZXF1ZXN0ZWRIcCkgJiYgcmVxdWVzdGVkSHAgPiAwID8gcmVxdWVzdGVkSHAgOiBvcmIuaGVhbHRoO1xuICAgIGVuZW1pZXMucHVzaCh7IGlkOiArK2VudGl0eVNlcXVlbmNlLCBsYW5lLCB4OiBsYW5lWChsYW5lKSwgeTogMTA1LCBoZWFsdGgsIHJvd0lkOiArK2VudGl0eVNlcXVlbmNlLCBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmVuZW15IH0pLCBkeWluZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Bhd25QaWNrdXAgPSAobGFuZTogMCB8IDEpOiB2b2lkID0+IHtcbiAgICBwaWNrdXBzLnB1c2goeyBzaGllbGRJZDogc2hpZWxkU2VsZWN0LnZhbHVlIGFzIFNoaWVsZElkLCBsYW5lLCB5OiAxMzUgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVzdGFydFNpbXVsYXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgZW5lbWllcy5sZW5ndGggPSAwO1xuICAgIHBpY2t1cHMubGVuZ3RoID0gMDtcbiAgICBwbGF5ZXJBbGl2ZSA9IHRydWU7XG4gICAgcmVzdGFydEF0ID0gMDtcbiAgICBwbGF5ZXJBY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSk7XG4gICAgZXF1aXAoYWN0aXZlU2hpZWxkSWQpO1xuICAgIHNwYXduRW5lbXkoMCk7XG4gICAgc3Bhd25FbmVteSgxKTtcbiAgfTtcblxuICBjb25zdCBraWxsUGxheWVyID0gKG5vdzogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgaWYgKCFwbGF5ZXJBbGl2ZSkgcmV0dXJuO1xuICAgIHBsYXllckFsaXZlID0gZmFsc2U7XG4gICAgcmVzdGFydEF0ID0gbm93ICsgOTAwO1xuICAgIHBsYXllckFjdG9yLmV4cGxvZGVNYWduaXR1ZGUgPSAwLjg7XG4gICAgcGxheWVyQWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICB3ZWFwb25SZWFkb3V0LnRleHRDb250ZW50ID0gXCJTaGllbGQgYnJva2VuXCI7XG4gICAgcGxheVNmeChcIlNoaWVsZEJyZWFrXCIpO1xuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tZW5lbXldXCIpLmZvckVhY2goYiA9PiBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzcGF3bkVuZW15KE51bWJlcihiLmRhdGFzZXQuc3Bhd25FbmVteSkgYXMgMCB8IDEpKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tcGlja3VwXVwiKS5mb3JFYWNoKGIgPT4gYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3Bhd25QaWNrdXAoTnVtYmVyKGIuZGF0YXNldC5zcGF3blBpY2t1cCkgYXMgMCB8IDEpKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI3NwYXduLXdhdmVcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3Bhd25FbmVteSgwKTsgc3Bhd25FbmVteSgxKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNwYXduRW5lbXkoMCksIDQ1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzcGF3bkVuZW15KDEpLCA3MDApO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjY2xlYXItc3RhZ2VcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZW5lbWllcy5sZW5ndGggPSBwaWNrdXBzLmxlbmd0aCA9IDA7XG4gIH0pO1xuICBzaGllbGRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBlcXVpcChzaGllbGRTZWxlY3QudmFsdWUgYXMgU2hpZWxkSWQpKTtcblxuICBiaW5kU3F1YWRJbnB1dChnYW1lRWxlbWVudCwgXCIjam95c3RpY2tcIiwge1xuICAgIGxhbmU6ICgpID0+IHNxdWFkLmxhbmUsXG4gICAgc2V0TGFuZTogbGFuZSA9PiB7IHBsYXllckxhbmUgPSBsYW5lOyBzcXVhZC5zZXRMYW5lKGxhbmUsIGxhbmVYLCBwZXJmb3JtYW5jZS5ub3coKSk7IGFpbUNvbnRyb2wubGFuZVNlbGVjdGVkKCk7IH0sXG4gICAgc2V0QWltOiB2YWx1ZSA9PiB7IHNxdWFkLnNldEFpbSh2YWx1ZSwgY2FudmFzLndpZHRoICogLjIyLCBsYW5lWCk7IGFpbUNvbnRyb2wuYWltQ2hhbmdlZCgpOyB9LFxuICAgIHJlbGVhc2VBaW06ICgpID0+IHsgYWltQ29udHJvbC5haW1SZWxlYXNlZCgpOyB9LFxuICB9KTtcblxuICBjb25zdCB1cGRhdGUgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IE1hdGgubWluKChub3cgLSBsYXN0RnJhbWUpIC8gMTAwMCwgMC4wNSk7XG4gICAgbGFzdEZyYW1lID0gbm93O1xuICAgIHBsYXllckFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgaWYgKCFwbGF5ZXJBbGl2ZSkge1xuICAgICAgaWYgKHNoaWVsZFN0YXRlLmhpdEZsYXNoVW50aWwgPiAwKSB7XG4gICAgICAgIHNoaWVsZFN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCAobm93IC0gKHNoaWVsZFN0YXRlLmhpdEZsYXNoVW50aWwgLSAyODApKSAvIDI4MCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbWllcykgZS5hY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgICAgaWYgKG5vdyA+PSByZXN0YXJ0QXQpIHJlc3RhcnRTaW11bGF0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXV0byBhaW1cbiAgICBpZiAoIWFpbUNvbnRyb2wubWFudWFsKSB7XG4gICAgICBjb25zdCBsYW5lRW5lbWllcyA9IGVuZW1pZXMuZmlsdGVyKGUgPT4gZS5sYW5lID09PSBzcXVhZC5sYW5lICYmICFlLmR5aW5nKTtcbiAgICAgIGNvbnN0IGNvbE9mZnNldHMgPSBzcXVhZC5mcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGUoKSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGxhbmVFbmVtaWVzLCBsYW5lWChzcXVhZC5sYW5lKSwgY29sT2Zmc2V0cywgc3F1YWQuYWltT2Zmc2V0KTtcbiAgICAgIHNxdWFkLmF1dG9BaW0ob2Zmc2V0LCBjYW52YXMud2lkdGggKiAuMjIsIGxhbmVYKTtcbiAgICB9XG4gICAgc3F1YWQudXBkYXRlKGRlbHRhKTtcblxuICAgIC8vIFNoaWVsZCB0aWNrXG4gICAgY29uc3QgcHggPSBzcXVhZC54O1xuICAgIGNvbnN0IHB5ID0gcGxheWVyWSgpO1xuICAgIGNvbnN0IGRlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW2FjdGl2ZVNoaWVsZElkXTtcbiAgICBjb25zdCB0aHJlYXRzID0gcXVlcnlOZWFyYnlUaHJlYXRzKGVuZW1pZXMsIHsgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LCBsYW5lOiBwbGF5ZXJMYW5lIGFzIDAgfCAxLCByYW5nZTogZGVmLnJhZGl1cyArIG9yYi5yYWRpdXMsIHB1cnBvc2U6IFwic2hpZWxkXCIgfSk7XG4gICAgdGlja1NoaWVsZChzaGllbGRTdGF0ZSwgZGVmLCBbXSwgcHgsIHB5LCBub3csIGRlbHRhKTtcblxuICAgIC8vIEVuZW15IG1vdmVtZW50ICsgcGxheWVyIGNvbnRhY3RcbiAgICBmb3IgKGNvbnN0IGUgb2YgWy4uLmVuZW1pZXNdKSB7XG4gICAgICBlLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBlLnkgKz0gb3JiLnNwZWVkICogZGVsdGEgLSBlLmFjdG9yLnkgKiBjYW52YXMuaGVpZ2h0IC8gMi41O1xuICAgICAgZS5hY3Rvci5tb3ZlVG8oMCwgMCk7XG4gICAgICBpZiAoZS5keWluZyAmJiBlLmFjdG9yLmRpc3Bvc2VkKSB7IGVuZW1pZXMuc3BsaWNlKGVuZW1pZXMuaW5kZXhPZihlKSwgMSk7IGNvbnRpbnVlOyB9XG4gICAgICBpZiAoZS5keWluZykgY29udGludWU7XG4gICAgICBjb25zdCBjb250YWN0ID0gcmVzb2x2ZVNoaWVsZENvbnRhY3Qoc2hpZWxkU3RhdGUsIGRlZiwgT2JqZWN0LmFzc2lnbihlLCB7IHJhZGl1czogb3JiLnJhZGl1cyB9KSwgcHgsIHB5LCBub3cpO1xuICAgICAgaWYgKGNvbnRhY3QuYWJzb3JiZWQpIHtcbiAgICAgICAgc2hpZWxkU3RyZW5ndGggPSBzaGllbGRTdGF0ZS5jaGFyZ2VzO1xuICAgICAgICB1cGRhdGVSZWFkb3V0KCk7XG4gICAgICAgIGlmIChjb250YWN0LmVuZW15RGVzdHJveWVkKSB7XG4gICAgICAgICAgZS5keWluZyA9IHRydWU7XG4gICAgICAgICAgZS5hY3Rvci5leHBsb2RlTWFnbml0dWRlID0gb3JiLmV4cGxvc2lvbk1hZ25pdHVkZTtcbiAgICAgICAgICBlLmFjdG9yLmRpc3Bvc2UoTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSk7XG4gICAgICAgICAga2lsbHMrKztcbiAgICAgICAgICB1cGRhdGVSZWFkb3V0KCk7XG4gICAgICAgICAgcGxheUVuZW15RGVzdHJveWVkKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcGxheVNmeChcIlNoaWVsZEltcGFjdFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHB0cyA9IHNxdWFkLnBvaW50cyhwbGF5ZXJZKCksIHNjYWxlKCkpO1xuICAgICAgY29uc3QgaGl0ID0gcHRzLmZpbmRJbmRleChwdCA9PiBNYXRoLmh5cG90KHB0LnggLSBlLngsIHB0LnkgLSBlLnkpIDw9IG9yYi5yYWRpdXMgKiAzLjIpO1xuICAgICAgaWYgKGhpdCA+PSAwKSB7XG4gICAgICAgIGlmICghZS5keWluZykge1xuICAgICAgICAgIHNoaWVsZFN0cmVuZ3RoID0gMDtcbiAgICAgICAgICBzaGllbGRTdGF0ZS5jaGFyZ2VzID0gMDtcbiAgICAgICAgICBzaGllbGRTdGF0ZS5oaXRGbGFzaFVudGlsID0gbm93ICsgMjgwO1xuICAgICAgICAgIHNoaWVsZFN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgIGtpbGxQbGF5ZXIobm93KTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnkgPiBjYW52YXMuaGVpZ2h0ICsgb3JiLnJhZGl1cyAqIDIpIGVuZW1pZXMuc3BsaWNlKGVuZW1pZXMuaW5kZXhPZihlKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gUGlja3Vwc1xuICAgIGZvciAoY29uc3QgcCBvZiBbLi4ucGlja3Vwc10pIHtcbiAgICAgIHAueSArPSA2MiAqIGRlbHRhO1xuICAgICAgaWYgKHAueSA+PSBwbGF5ZXJZKCkgLSAxMiAmJiBwLmxhbmUgPT09IHBsYXllckxhbmUpIHtcbiAgICAgICAgZXF1aXAocC5zaGllbGRJZCk7IHBpY2t1cHMuc3BsaWNlKHBpY2t1cHMuaW5kZXhPZihwKSwgMSk7XG4gICAgICB9IGVsc2UgaWYgKHAueSA+IGNhbnZhcy5oZWlnaHQgKyAzMCkgcGlja3Vwcy5zcGxpY2UocGlja3Vwcy5pbmRleE9mKHApLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhdyA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHMgPSBzY2FsZSgpO1xuICAgIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtcbiAgICAgIC4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkOiBcIm5lb25IYWxsXCIsIHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCwgdGltZU1zOiBub3cgfSkucHJpbWl0aXZlcyA/PyBbXSksXG4gICAgXTtcblxuICAgIC8vIFNoaWVsZCByZW5kZXJpbmdcbiAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1thY3RpdmVTaGllbGRJZF07XG4gICAgY29uc3Qgc2hpZWxkQ29sb3IgPSBuZW9uUGFsZXR0ZVtkZWYuY29sb3JdO1xuICAgIGNvbnN0IHB4ID0gc3F1YWQueDtcbiAgICBjb25zdCBweSA9IHBsYXllclkoKTtcbiAgICBjb25zdCBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXSA9IFtdO1xuICAgIGNvbnN0IHNoaWVsZFNjZW5lID0gc2hpZWxkVmlzdWFscyh7XG4gICAgICBkZWZpbml0aW9uOiBkZWYsXG4gICAgICBzdHJlbmd0aDogc2hpZWxkU3RyZW5ndGgsXG4gICAgICBpbml0aWFsU3RyZW5ndGg6IGluaXRpYWxTaGllbGRTdHJlbmd0aCxcbiAgICAgIHg6IHB4LCB5OiBweSwgbm93LCBzY2FsZTogcyxcbiAgICAgIGhpdFByb2dyZXNzOiBzaGllbGRTdGF0ZS5oaXRGbGFzaFByb2dyZXNzLFxuICAgICAgdmlzaWJsZTogcGxheWVyQWxpdmUsXG4gICAgfSk7XG4gICAgcHJpbWl0aXZlcy5wdXNoKC4uLnNoaWVsZFNjZW5lLnByaW1pdGl2ZXMpO1xuICAgIHNoYXBlcy5wdXNoKC4uLnNoaWVsZFNjZW5lLnNoYXBlcyk7XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgcGlja3Vwcykge1xuICAgICAgY29uc3QgcGlja3VwRGVmID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnNoaWVsZElkXTtcbiAgICAgIHNoYXBlcy5wdXNoKHNoaWVsZFBpY2t1cFZpc3VhbCh7XG4gICAgICAgIHg6IGxhbmVYKHBpY2t1cC5sYW5lKSwgeTogcGlja3VwLnksXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtwaWNrdXBEZWYuY29sb3JdLFxuICAgICAgICBub3csIHNjYWxlOiBzLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBjb25zdCBoZWxpY29wdGVyVmlld3BvcnQgPSBoZWxpY29wdGVyVmlld3BvcnRGb3IoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBwbGF5ZXJZKCkpO1xuICAgIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGxheWVyQWN0b3IsIHNxdWFkLngsIHBsYXllclkoKSwgMTQsIHBsYXllck9yaWVudGF0aW9uKGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgc3F1YWQueCwgcGxheWVyWSgpLCBub3cpKSk7XG4gICAgZm9yIChjb25zdCBlIG9mIGVuZW1pZXMpIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoZS5hY3RvciwgZS54LCBlLnksIDE4LCBlbmVteU9yaWVudGF0aW9uKGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgZS54LCBlLnksIG5vdywgZS5yb3dJZCkpKTtcbiAgcmVuZGVyZXIucmVuZGVyKHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVzLCBbXSwgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KSwgbm93IC8gMTAwMCk7XG4gIH07XG5cbiAgY29uc3QgZnJhbWUgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHsgdXBkYXRlKG5vdyk7IGRyYXcobm93KTsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTsgfTtcbiAgZXF1aXAoYWN0aXZlU2hpZWxkSWQpO1xuICBzcGF3bkVuZW15KDApOyBzcGF3bkVuZW15KDEpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xufSBjYXRjaCAoY2F1c2UpIHtcbiAgZXJyb3IuaGlkZGVuID0gZmFsc2U7XG4gIGVycm9yLnRleHRDb250ZW50ID0gY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlLm1lc3NhZ2UgOiBTdHJpbmcoY2F1c2UpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBnYW1lQXVkaW8/OiB7IHBsYXkoaWQ6IHN0cmluZyk6IHZvaWQ7IHBsYXlSb3RhdGVkKGlkOiBzdHJpbmcsIG46IG51bWJlcik6IHZvaWQgfTsgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFP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QUFNLENBQUMsSUFBRSxLQUFHLElBQUUsR0FBRSxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQzdHLEtBQUssVUFBVSxlQUFlLGVBQWUsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBRyxHQUFHLE1BQUssSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNsRyxLQUFLLFVBQVUsY0FBYyxjQUFjLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLEdBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQU0sQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDbEwsS0FBSyxVQUFVLGFBQWEsYUFBYSxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxLQUFHLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQzlGLEtBQUssVUFBVSxlQUFlLGVBQWUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxPQUFLLElBQUcsQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUM5RyxLQUFLLFVBQVUsZUFBZSxlQUFlLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxNQUFLLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDN0YsS0FBSyxVQUFVLGVBQWUsZUFBZSxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBRTdG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T0FBTyx1QkFBdUIsWUFBWSxRQUFRLENBQUMsR0FBRyxpQ0FBaUMsa0JBQWtCLEdBQUcsTUFBTSxHQUFJO0FBQUEsRUFDL0g7QUFFQSxRQUFNLFFBQVEsQ0FBQyxRQUFzQjtBQUFFLFdBQU8sR0FBRztBQUFHLFNBQUssR0FBRztBQUFHLDBCQUFzQixLQUFLO0FBQUEsRUFBRztBQUM3RixRQUFNLGNBQWM7QUFDcEIsYUFBVyxDQUFDO0FBQUcsYUFBVyxDQUFDO0FBQzNCLHdCQUFzQixLQUFLO0FBQzdCLFNBQVMsT0FBTztBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sY0FBYyxpQkFBaUIsUUFBUSxNQUFNLFVBQVUsT0FBTyxLQUFLO0FBQzNFOyIsCiAgIm5hbWVzIjogWyJjYW52YXMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgInNoYWRlciIsICJoZXgiLCAiY2FudmFzIiwgImhleCIsICJzaGFkZXIiLCAiY2FudmFzIiwgInNoYWRlciIsICJoZXgiLCAiY2FudmFzIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgInJvdGF0aW9uIl0KfQo=

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

// projects/NeonSwarm/src/combat/swordEvaluator.ts
var SwordState = class {
  swordId;
  /** Seconds remaining until the sword can swing again. */
  cooldownLeft;
  /** Active slash animation, if any. */
  activeSlash;
  constructor(swordId) {
    this.swordId = swordId;
    this.cooldownLeft = 0;
    this.activeSlash = null;
  }
};
function selectTargets(threats, mode, maxTargets) {
  if (threats.length === 0) return [];
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
function tickSword(state, sword, threats, playerX, playerY, now, delta, color) {
  const result = {
    hitEnemyIds: [],
    damage: 0,
    swingTriggered: false
  };
  if (state.cooldownLeft > 0) state.cooldownLeft = Math.max(0, state.cooldownLeft - delta);
  if (state.activeSlash) {
    state.activeSlash.progress = (now - state.activeSlash.startedAt) / state.activeSlash.durationMs;
    if (state.activeSlash.progress >= 1) state.activeSlash = null;
  }
  if (state.cooldownLeft > 0 || threats.length === 0) return result;
  const selected = selectTargets(threats, sword.targetingMode, sword.maxTargets);
  if (selected.length === 0) return result;
  state.cooldownLeft = sword.cooldownSeconds;
  result.swingTriggered = true;
  result.damage = sword.damage;
  for (const { target } of selected) result.hitEnemyIds.push(target.id);
  state.activeSlash = {
    progress: 0,
    startedAt: now,
    durationMs: sword.slashDurationMs,
    x: playerX,
    y: playerY,
    reach: sword.range * 0.75,
    // Arc reach is a fraction of detection range
    arcDegrees: sword.arcDegrees,
    color,
    thickness: sword.slashThickness
  };
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
function swordTrail(slash, scale) {
  if (slash.progress >= 1) return [];
  const life = 1 - slash.progress;
  const radius = slash.reach * scale;
  const halfArc = slash.arcDegrees * Math.PI / 360;
  const heading = -Math.PI / 2;
  const sweep = slash.progress < 0.62 ? 1 - Math.pow(1 - slash.progress / 0.62, 3) : 1;
  const bladeAngle = heading - halfArc + sweep * halfArc * 2;
  const trailLength = halfArc * (0.55 + life * 0.75);
  const thickness = slash.thickness * scale;
  const primitives = [];
  for (let i = 0; i < 11; i++) {
    const age = i / 10;
    const angle = Math.max(heading - halfArc, bladeAngle - trailLength * age);
    const distance = radius * (0.72 + Math.sin(age * Math.PI) * 0.08);
    const fade = Math.pow(1 - age, 1.35) * life;
    primitives.push({
      x: slash.x + Math.cos(angle) * distance,
      y: slash.y + Math.sin(angle) * distance,
      width: Math.max(0.8, thickness * (2.4 - age * 1.55)),
      height: radius * (0.24 - age * 0.1),
      color: slash.color,
      secondaryColor: "#ffffff",
      glow: 1.15 * fade,
      intensity: 1.45 * fade,
      shape: "bolt",
      rotation: angle + Math.PI / 2
    });
  }
  const leadingX = slash.x + Math.cos(bladeAngle) * radius * 0.82;
  const leadingY = slash.y + Math.sin(bladeAngle) * radius * 0.82;
  primitives.push({
    x: leadingX,
    y: leadingY,
    width: Math.max(1.2, thickness * 2.8),
    height: radius * 0.32,
    color: "#ffffff",
    secondaryColor: slash.color,
    glow: 1.4 * life,
    intensity: 1.7 * life,
    shape: "line",
    rotation: bladeAngle + Math.PI / 2
  });
  for (let i = 0; i < 7 && slash.progress < 0.7; i++) {
    const spread = (i - 3) * 0.13;
    const sparkLife = life * (1 - Math.abs(i - 3) * 0.08);
    primitives.push({
      x: leadingX + Math.cos(bladeAngle + spread) * radius * (0.04 + i * 0.012),
      y: leadingY + Math.sin(bladeAngle + spread) * radius * (0.04 + i * 0.012),
      width: Math.max(0.7, thickness * 0.75),
      height: radius * (0.08 + i % 3 * 0.025),
      color: slash.color,
      secondaryColor: "#ffffff",
      glow: 1.1 * sparkLife,
      intensity: 1.25 * sparkLife,
      shape: "bolt",
      rotation: bladeAngle + spread
    });
  }
  return primitives;
}
function swordVisuals(options) {
  const scene = emptyScene();
  if (!options.visible) return scene;
  const { definition, slash, x, y, scale = 1 } = options;
  const halfArc = definition.arcDegrees * Math.PI / 360;
  const sweep = slash ? slash.progress < 0.62 ? 1 - Math.pow(1 - slash.progress / 0.62, 3) : 1 : 0.5;
  const swordAngle = -Math.PI / 2 - halfArc + sweep * halfArc * 2;
  scene.shapes.push({
    shape: requiredShape("spike-lance"),
    x,
    y,
    size: Math.min(17, definition.range * 0.28) * scale,
    color: neonPalette[definition.color],
    rotationZ: swordAngle + Math.PI / 2,
    lineThickness: 0.82,
    glow: slash ? 1.35 : 1,
    energyIntensity: slash ? 1.8 : 1.15,
    energyCoverage: slash ? 0.72 : 0.42,
    energySpeed: slash ? 2.1 : 1.2,
    energyBleed: slash ? 0.8 : 0.5
  });
  if (slash) scene.primitives.push(...swordTrail(slash, scale));
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
var swordPickupVisual = (options) => pickupShape("spike-lance", options);

// projects/NeonSwarm/test-pages/sword-family/manual.ts
var canvas = document.querySelector("#game-canvas");
var error = document.querySelector("#error");
var swordSelect = document.querySelector("#sword-select");
var weaponReadout = document.querySelector("#weapon-readout");
var scoreReadout = document.querySelector("#score-readout");
var specReadout = document.querySelector("#spec-readout");
var gameElement = document.querySelector("#game");
applyPortraitStage(gameElement, { aspectWidth: 9, aspectHeight: 16 });
var audioId = (id) => `../../../../audio/${id}`;
var playSfx = (id) => window.gameAudio?.play(audioId(id));
var playEnemyDestroyed = () => window.gameAudio?.playRotated(audioId("EnemyDestroyed"), 2);
var swordSwingSoundIds = {
  arcBlade: "SwordSwing",
  cleaver: "SwordHeavySwing",
  needleRapier: "SwordStab"
};
try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 450, 800);
  const orb = orbFamily.members.basicOrb;
  const enemies = [];
  const pickups = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let playerLane = 0;
  let activeSwordId = "arcBlade";
  let swordState = new SwordState(activeSwordId);
  let entitySequence = 0;
  let kills = 0;
  let lastFrame = performance.now();
  let playerAlive = true;
  let restartAt = 0;
  let playerActor = new NeonShapeActor({ shape: swarmShapes.player });
  const laneX = (lane) => canvas.width * (lane === 0 ? 0.32 : 0.68);
  const playerY = () => canvas.height * 0.82;
  const scale = () => 1;
  for (const [id, sword] of Object.entries(swordFamily.members)) {
    swordSelect.add(new Option(sword.label, id));
  }
  swordSelect.value = activeSwordId;
  const equip = (id) => {
    activeSwordId = id;
    swordState = new SwordState(id);
    swordSelect.value = id;
    playSfx("PickupSword");
    updateReadout();
  };
  const updateReadout = () => {
    const def = swordFamily.members[activeSwordId];
    weaponReadout.textContent = def.label;
    scoreReadout.textContent = `Kills ${kills}`;
    const cdLeft = swordState.cooldownLeft.toFixed(2);
    specReadout.innerHTML = [
      ["Range", `${def.range}px`],
      ["Arc", `${def.arcDegrees}\xB0`],
      ["Damage", String(def.damage)],
      ["Cooldown", `${def.cooldownSeconds}s`],
      ["Cooldown left", `${cdLeft}s`],
      ["Max targets", String(def.maxTargets)],
      ["Targeting", def.targetingMode],
      ["Slash duration", `${def.slashDurationMs}ms`]
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  squad.x = laneX(0);
  squad.targetX = laneX(0);
  const spawnEnemy = (lane) => {
    enemies.push({ id: ++entitySequence, lane, x: laneX(lane), y: 105, health: orb.health, rowId: ++entitySequence, actor: new NeonShapeActor({ shape: swarmShapes.enemy }), dying: false });
  };
  const spawnPickup = (lane) => {
    pickups.push({ swordId: swordSelect.value, lane, y: 135 });
  };
  const restartSimulation = () => {
    enemies.length = 0;
    pickups.length = 0;
    playerAlive = true;
    restartAt = 0;
    playerActor = new NeonShapeActor({ shape: swarmShapes.player });
    equip(activeSwordId);
    spawnEnemy(0);
    spawnEnemy(1);
  };
  const killPlayer = (now) => {
    if (!playerAlive) return;
    playerAlive = false;
    restartAt = now + 900;
    playerActor.explodeMagnitude = 0.8;
    playerActor.dispose("explode" /* Explode */);
    weaponReadout.textContent = "Player defeated";
    playSfx("SwordHit");
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
  swordSelect.addEventListener("change", () => equip(swordSelect.value));
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
    const def = swordFamily.members[activeSwordId];
    const threats = queryNearbyThreats(enemies, {
      origin: { x: px, y: py },
      lane: playerLane,
      range: def.range,
      includeAdjacentLanes: def.targetingMode === "nearestInEitherLane",
      maxTargets: def.maxTargets,
      purpose: "sword"
    });
    const swordResult = tickSword(swordState, def, threats, px, py, now, delta, neonPalette[def.color]);
    if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
      playSfx(swordSwingSoundIds[activeSwordId]);
      for (const e of [...enemies]) {
        if (e.dying || !swordResult.hitEnemyIds.includes(e.id)) continue;
        e.health -= swordResult.damage;
        e.actor.impact({ direction: { x: 0, y: 1 }, magnitude: swordResult.damage / orb.impactResistance });
        if (e.health <= 0) {
          e.dying = true;
          e.actor.explodeMagnitude = orb.explosionMagnitude;
          e.actor.dispose("explode" /* Explode */);
          kills++;
          updateReadout();
          playEnemyDestroyed();
        }
      }
    }
    for (const e of [...enemies]) {
      e.actor.update(delta);
      e.y += orb.speed * delta - e.actor.y * canvas.height / 2.5;
      e.actor.moveTo(0, 0);
      if (e.dying && e.actor.disposed) {
        enemies.splice(enemies.indexOf(e), 1);
        continue;
      }
      if (!e.dying && Math.hypot(e.x - squad.x, e.y - playerY()) <= orb.radius * 3.2) {
        killPlayer(now);
      }
    }
    for (const p of [...pickups]) {
      p.y += 62 * delta;
      if (p.y >= playerY() - 12 && p.lane === playerLane) {
        equip(p.swordId);
        pickups.splice(pickups.indexOf(p), 1);
      } else if (p.y > canvas.height + 30) pickups.splice(pickups.indexOf(p), 1);
    }
    updateReadout();
  };
  const draw = (now) => {
    const s = scale();
    const primitives = [
      ...createLaneRunnerScene({ sceneId: "neonHall", width: canvas.width, height: canvas.height, timeMs: now }).primitives ?? []
    ];
    const px = squad.x;
    const py = playerY();
    const def = swordFamily.members[activeSwordId];
    const swordColor = neonPalette[def.color];
    const shapes = [];
    const swordScene = swordVisuals({
      definition: def,
      slash: swordState.activeSlash,
      x: px,
      y: py,
      scale: s,
      visible: playerAlive
    });
    primitives.push(...swordScene.primitives);
    shapes.push(...swordScene.shapes);
    for (const pickup of pickups) {
      const pickupDef = swordFamily.members[pickup.swordId];
      shapes.push(swordPickupVisual({
        x: laneX(pickup.lane),
        y: pickup.y,
        color: neonPalette[pickupDef.color],
        now,
        scale: s
      }));
    }
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY());
    shapes.push(actorInTopDownScene(playerActor, squad.x, py, 14, playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, squad.x, py, now)));
    for (const e of enemies) shapes.push(actorInTopDownScene(e.actor, e.x, e.y, 18, enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, e.x, e.y, now, e.rowId)));
    renderer.render(projectHelicopterScene(primitives, shapes, [], defaultHelicopterCameraSettings, helicopterViewport), now / 1e3);
  };
  const frame = (now) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
  equip(activeSwordId);
  spawnEnemy(0);
  spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2syLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9pbnB1dC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NxdWFkLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvYXV0b0FpbS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3ZpZXdwb3J0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2hhcGVWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc3dvcmRFdmFsdWF0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9mYW1pbHlWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS90ZXN0LXBhZ2VzL3N3b3JkLWZhbWlseS9tYW51YWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uLCBOZW9uUG9pbnQgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUxhYmVsUG9zaXRpb24gPSBcImFib3ZlXCIgfCBcImJlbG93XCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUxhYmVsIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbj86IE5lb25TaGFwZUxhYmVsUG9zaXRpb247XG4gIG9mZnNldD86IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW5zdGFuY2Uge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICByb3RhdGlvblg/OiBudW1iZXI7XG4gIHJvdGF0aW9uWT86IG51bWJlcjtcbiAgcm90YXRpb25aPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBzaGllbGRlZD86IGJvb2xlYW47XG4gIGxpbmVUaGlja25lc3M/OiBudW1iZXI7XG4gIGVuZXJneUludGVuc2l0eT86IG51bWJlcjtcbiAgZW5lcmd5Q292ZXJhZ2U/OiBudW1iZXI7XG4gIGVuZXJneVNwZWVkPzogbnVtYmVyO1xuICBlbmVyZ3lCbGVlZD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZW50cmFuY2VQcm9ncmVzcz86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGV4cGxvZGVQcm9ncmVzcz86IG51bWJlcjtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbn1cblxudHlwZSBWMyA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbnR5cGUgVmVydGV4ID0ge1xuICBwOiBWMzsgbjogVjM7IGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07IGdsb3c6IG51bWJlcjtcbiAgZWZmZWN0OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBmbG9hdHNQZXJWZXJ0ZXggPSAxNDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBTY2VuZSB7IGFzcGVjdDogZjMyLCBjYW1lcmE6IGYzMiwgdGltZTogZjMyLCBwYWRkaW5nOiBmMzIgfVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5zdHJ1Y3QgSW5wdXQge1xuICBAbG9jYXRpb24oMCkgcG9zaXRpb246IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDMpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDQpIGVmZmVjdDogdmVjNGYsXG59XG5zdHJ1Y3QgT3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBlZmZlY3Q6IHZlYzRmLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKGlucHV0OiBJbnB1dCkgLT4gT3V0cHV0IHtcbiAgbGV0IGRlcHRoID0gc2NlbmUuY2FtZXJhIC0gaW5wdXQucG9zaXRpb24uejtcbiAgdmFyIG91dHB1dDogT3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihpbnB1dC5wb3NpdGlvbi54ICogNCAvIHNjZW5lLmFzcGVjdCwgaW5wdXQucG9zaXRpb24ueSAqIDQsIGRlcHRoICogLjA0NSwgZGVwdGgpO1xuICBvdXRwdXQubm9ybWFsID0gaW5wdXQubm9ybWFsO1xuICBvdXRwdXQuY29sb3IgPSBpbnB1dC5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpbnB1dC5nbG93O1xuICBvdXRwdXQuZWZmZWN0ID0gaW5wdXQuZWZmZWN0O1xuICByZXR1cm4gb3V0cHV0O1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKGlucHV0Lm5vcm1hbCk7XG4gIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtLjQ1LCAtLjcsIDEpKTtcbiAgbGV0IGRpZmZ1c2UgPSAuMTggKyBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKSAqIC44MjtcbiAgbGV0IHJpbSA9IHBvdygxIC0gYWJzKG5vcm1hbC56KSwgMi4yKTtcbiAgbGV0IHNpZGUgPSAxIC0gYWJzKG5vcm1hbC56KTtcbiAgbGV0IHJhcmVTdXJnZSA9IHBvdyhtYXgoLjAsIHNpbihzY2VuZS50aW1lICogaW5wdXQuZWZmZWN0LnogKiAuODIgKyBpbnB1dC5jb2xvci5yICogNy4wKSksIDIyLjApXG4gICAgKiBpbnB1dC5lZmZlY3QueCAqIGlucHV0LmVmZmVjdC55ICogaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBlbmVyZ3kgPSBpbnB1dC5jb2xvciAqIChkaWZmdXNlICogLjEyICsgcmltICogaW5wdXQuZ2xvdyAqIC4zNiArIHNpZGUgKiAuMDggKyByYXJlU3VyZ2UgKiAuNyk7XG4gIHJldHVybiB2ZWM0ZihlbmVyZ3kgKyB2ZWMzZihyYXJlU3VyZ2UgKiAuMTgpLCAuMTIgKyBzaWRlICogLjEyICsgcmFyZVN1cmdlICogLjI4KTtcbn1cbkBmcmFnbWVudCBmbiBsaW5lRnJhZ21lbnQoaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGFsb25nID0gaW5wdXQubm9ybWFsLng7XG4gIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubm9ybWFsLnkpO1xuICBsZXQgcGhhc2UgPSBpbnB1dC5ub3JtYWwuejtcbiAgbGV0IGludGVuc2l0eSA9IGlucHV0LmVmZmVjdC54O1xuICBsZXQgY292ZXJhZ2UgPSBpbnB1dC5lZmZlY3QueTtcbiAgbGV0IHNwZWVkID0gaW5wdXQuZWZmZWN0Lno7XG4gIGxldCBibGVlZCA9IGlucHV0LmVmZmVjdC53O1xuICBsZXQgcHVsc2VBID0gcG93KG1heCguMCwgc2luKGFsb25nICogMzEuMCAtIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDUuNCArIHBoYXNlKSksIDEwLjApO1xuICBsZXQgcHVsc2VCID0gcG93KG1heCguMCwgc2luKGFsb25nICogMTMuMCArIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDMuMSArIHBoYXNlICogMi43KSksIDE4LjApO1xuICBsZXQgbm9pc2UgPSBzaW4oYWxvbmcgKiA3MS4wICsgcGhhc2UgKiA4LjMpICogLjUgKyAuNTtcbiAgbGV0IHRocmVzaG9sZCA9IDEuMCAtIGNvdmVyYWdlO1xuICBsZXQgZWxlY3RyaWNpdHkgPSBzbW9vdGhzdGVwKHRocmVzaG9sZCwgdGhyZXNob2xkICsgLjE4LCBwdWxzZUEgKiAuNjUgKyBwdWxzZUIgKiAuNTUgKyBub2lzZSAqIC4xOCk7XG4gIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCguMDYsIC4yOCwgYWNyb3NzKTtcbiAgbGV0IGhhbG8gPSAxLjAgLSBzbW9vdGhzdGVwKC4xMiwgMS4wLCBhY3Jvc3MpO1xuICBsZXQgc3VyZ2UgPSBlbGVjdHJpY2l0eSAqIGludGVuc2l0eTtcbiAgbGV0IHB1bHNlID0gLjc4ICsgc2luKHNjZW5lLnRpbWUgKiBzcGVlZCAqIDIuMSArIHBoYXNlKSAqIC4xMyArIGVsZWN0cmljaXR5ICogLjI0O1xuICBsZXQgY2xvdWQgPSBoYWxvICogKC4xMyArIHN1cmdlICogLjUyKTtcbiAgbGV0IGhvdCA9IGlucHV0LmNvbG9yICogKHB1bHNlICsgY2xvdWQgKiAyLjEpICogaW5wdXQuZ2xvdyArIHZlYzNmKGNvcmUgKiBzdXJnZSAqIDEuMzUpO1xuICBsZXQgYWxwaGEgPSAoY29yZSAqICguNzIgKyBwdWxzZSAqIC4yKSArIGNsb3VkICsgKDEuMCAtIGFjcm9zcykgKiBibGVlZCAqIGVsZWN0cmljaXR5ICogLjI0KSAqIGlucHV0Lmdsb3c7XG4gIHJldHVybiB2ZWM0Zihob3QsIGNsYW1wKGFscGhhLCAwLjAsIDEuMCkpO1xufWA7XG5cbmNvbnN0IGhleCA9ICh2YWx1ZTogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgcmF3ID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IHN1YiA9IChhOiBWMywgYjogVjMpOiBWMyA9PiBbYVswXSAtIGJbMF0sIGFbMV0gLSBiWzFdLCBhWzJdIC0gYlsyXV07XG5jb25zdCBjcm9zcyA9IChhOiBWMywgYjogVjMpOiBWMyA9PiBbYVsxXSpiWzJdLWFbMl0qYlsxXSwgYVsyXSpiWzBdLWFbMF0qYlsyXSwgYVswXSpiWzFdLWFbMV0qYlswXV07XG5jb25zdCBub3JtYWxpemUgPSAodjogVjMpOiBWMyA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoLi4udikgfHwgMTtcbiAgcmV0dXJuIFt2WzBdIC8gbGVuZ3RoLCB2WzFdIC8gbGVuZ3RoLCB2WzJdIC8gbGVuZ3RoXTtcbn07XG5jb25zdCByb3RhdGUgPSAoW3gsIHksIHpdOiBWMywgcng6IG51bWJlciwgcnk6IG51bWJlciwgcno6IG51bWJlcik6IFYzID0+IHtcbiAgbGV0IGEgPSB5ICogTWF0aC5jb3MocngpIC0geiAqIE1hdGguc2luKHJ4KSwgYiA9IHkgKiBNYXRoLnNpbihyeCkgKyB6ICogTWF0aC5jb3MocngpOyB5ID0gYTsgeiA9IGI7XG4gIGEgPSB4ICogTWF0aC5jb3MocnkpICsgeiAqIE1hdGguc2luKHJ5KTsgYiA9IC14ICogTWF0aC5zaW4ocnkpICsgeiAqIE1hdGguY29zKHJ5KTsgeCA9IGE7IHogPSBiO1xuICByZXR1cm4gW3ggKiBNYXRoLmNvcyhyeikgLSB5ICogTWF0aC5zaW4ocnopLCB4ICogTWF0aC5zaW4ocnopICsgeSAqIE1hdGguY29zKHJ6KSwgel07XG59O1xuXG5mdW5jdGlvbiBtZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgZW50cmFuY2VQcm9ncmVzcyA9IGluc3RhbmNlLmVudHJhbmNlUHJvZ3Jlc3MgPz8gMTtcbiAgY29uc3QgZW50cmFuY2VFYXNlID0gZW50cmFuY2VQcm9ncmVzcyAqIGVudHJhbmNlUHJvZ3Jlc3MgKiAoMyAtIDIgKiBlbnRyYW5jZVByb2dyZXNzKTtcbiAgY29uc3QgZW50cmFuY2VPZmZzZXQgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleDogbnVtYmVyKTogVjMgPT4ge1xuICAgIGlmIChlbnRyYW5jZVByb2dyZXNzID49IDEpIHJldHVybiBbMCwgMCwgMF07XG4gICAgY29uc3Qgc2VlZCA9IE1hdGguc2luKGluZGV4ICogOTEuMTcgKyBwb2ludFswXSAqIDM3LjIgKyBwb2ludFsxXSAqIDUzLjcgKyB6ICogMjkuMSkgKiA0Mzc1OC41NDUzO1xuICAgIGNvbnN0IHJhbmRvbSA9IHNlZWQgLSBNYXRoLmZsb29yKHNlZWQpO1xuICAgIGNvbnN0IGFuZ2xlID0gcmFuZG9tICogTWF0aC5QSSAqIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKGluc3RhbmNlLmVudHJhbmNlTWFnbml0dWRlID8/IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqICgxIC0gZW50cmFuY2VFYXNlKSAqICguMzUgKyByYW5kb20gKiAuNzUpO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsIChyYW5kb20gLSAuNSkgKiByYWRpdXMgKiAuNTVdO1xuICB9O1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlciwgaW5kZXggPSAwKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGUsIC1wb2ludFsxXSAqIHNjYWxlLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICBjb25zdCBlID0gZW50cmFuY2VPZmZzZXQocG9pbnQsIHosIGluZGV4KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSArIGVbMF0sIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSArIGVbMV0sIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKSArIGVbMl1dO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGNvbnN0IGFkZCA9IChhOiBWMywgYjogVjMsIGM6IFYzLCBub3JtYWw/OiBWMykgPT4ge1xuICAgIGNvbnN0IG4gPSBub3JtYWwgPz8gbm9ybWFsaXplKGNyb3NzKHN1YihiLCBhKSwgc3ViKGMsIGEpKSk7XG4gICAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICAgIF07XG4gICAgW2EsYixjXS5mb3JFYWNoKHAgPT4gb3V0cHV0LnB1c2goeyBwLCBuLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqIGVudHJhbmNlRWFzZSwgZWZmZWN0IH0pKTtcbiAgfTtcbiAgY29uc3QgZnJvbnQgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIGRlcHRoIC8gMiwgaW5kZXgpKTtcbiAgY29uc3QgYmFjayA9IHNoYXBlLnBvaW50cy5tYXAoKHBvaW50LCBpbmRleCkgPT4gbW92ZShwb2ludCwgLWRlcHRoIC8gMiwgaW5kZXggKyBzaGFwZS5wb2ludHMubGVuZ3RoKSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnQubGVuZ3RoIC0gMTsgaSsrKSBhZGQoZnJvbnRbMF0sIGZyb250W2ldLCBmcm9udFtpICsgMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGJhY2subGVuZ3RoIC0gMTsgaSsrKSBhZGQoYmFja1swXSwgYmFja1tpICsgMV0sIGJhY2tbaV0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSAoaSArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aDtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbaV0sIGJhY2tbbmV4dF0pO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tuZXh0XSwgZnJvbnRbbmV4dF0pO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gZWRnZU1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlcik6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlLCAtcG9pbnRbMV0gKiBzY2FsZSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCksIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApXTtcbiAgfTtcbiAgY29uc3QgZXhwbG9kZSA9IChhOiBWMywgYjogVjMsIGluZGV4OiBudW1iZXIpOiBbVjMsIFYzXSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCwgMSAtIGVudHJhbmNlRWFzZSk7XG4gICAgaWYgKCFwcm9ncmVzcykgcmV0dXJuIFthLCBiXTtcbiAgICBjb25zdCBteCA9IChhWzBdICsgYlswXSkgLyAyIC0gKGluc3RhbmNlLnggPz8gMCksIG15ID0gKGFbMV0gKyBiWzFdKSAvIDIgLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KG14LCBteSkgfHwgMTtcbiAgICBjb25zdCBtYWduaXR1ZGUgPSBpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICBjb25zdCBzcGVlZCA9IG1hZ25pdHVkZSAqICguNDUgKyAoTWF0aC5zaW4oaW5kZXggKiA5MS4xNykgKiAuNSArIC41KSAqIC41NSk7XG4gICAgY29uc3QgZHggPSBteCAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQsIGR5ID0gbXkgLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkICsgcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqIC4xODtcbiAgICBjb25zdCBhbmdsZSA9IHByb2dyZXNzICogKGluZGV4ICUgMiA/IDEgOiAtMSkgKiAyLjQ7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKHA6IFYzKTogVjMgPT4ge1xuICAgICAgY29uc3QgeCA9IHBbMF0gLSAoaW5zdGFuY2UueCA/PyAwKSwgeSA9IHBbMV0gLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICAgIHJldHVybiBbeCAqIE1hdGguY29zKGFuZ2xlKSAtIHkgKiBNYXRoLnNpbihhbmdsZSkgKyAoaW5zdGFuY2UueCA/PyAwKSArIGR4LCB4ICogTWF0aC5zaW4oYW5nbGUpICsgeSAqIE1hdGguY29zKGFuZ2xlKSArIChpbnN0YW5jZS55ID8/IDApICsgZHksIHBbMl1dO1xuICAgIH07XG4gICAgcmV0dXJuIFt0cmFuc2Zvcm0oYSksIHRyYW5zZm9ybShiKV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgbGV0IGRpc3RhbmNlID0gMDtcbiAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gIF07XG4gIGNvbnN0IGFkZExpbmUgPSAoYTogVjMsIGI6IFYzLCBwaGFzZTogbnVtYmVyLCB3aWR0aFNjYWxlID0gMSwgb3BhY2l0eSA9IDEpID0+IHtcbiAgICBbYSwgYl0gPSBleHBsb2RlKGEsIGIsIE1hdGguZmxvb3IoZGlzdGFuY2UgKiAxMDApICsgTWF0aC5mbG9vcihwaGFzZSAqIDEwKSk7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgLjAwMTtcbiAgICBjb25zdCB3aWR0aCA9IChpbnN0YW5jZS5saW5lVGhpY2tuZXNzID8/IDEpICogLjAxOCAqIHdpZHRoU2NhbGU7XG4gICAgY29uc3Qgb3ggPSAtZHkgLyBsZW5ndGggKiB3aWR0aCwgb3kgPSBkeCAvIGxlbmd0aCAqIHdpZHRoO1xuICAgIGNvbnN0IGEwOiBWMyA9IFthWzBdIC0gb3gsIGFbMV0gLSBveSwgYVsyXV0sIGExOiBWMyA9IFthWzBdICsgb3gsIGFbMV0gKyBveSwgYVsyXV07XG4gICAgY29uc3QgYjA6IFYzID0gW2JbMF0gLSBveCwgYlsxXSAtIG95LCBiWzJdXSwgYjE6IFYzID0gW2JbMF0gKyBveCwgYlsxXSArIG95LCBiWzJdXTtcbiAgICBjb25zdCBzdGFydCA9IGRpc3RhbmNlICogMi40LCBlbmQgPSAoZGlzdGFuY2UgKyBsZW5ndGgpICogMi40O1xuICAgIGNvbnN0IHB1c2ggPSAocDogVjMsIGFsb25nOiBudW1iZXIsIGFjcm9zczogbnVtYmVyKSA9PlxuICAgICAgb3V0cHV0LnB1c2goeyBwLCBuOiBbYWxvbmcsIGFjcm9zcywgcGhhc2VdLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiBvcGFjaXR5ICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UgKiAoMSArIE1hdGguc2luKChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiBNYXRoLlBJKSAqIChpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAyLjIpICogKDEgLSAoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogLjcpLCBlZmZlY3QgfSk7XG4gICAgcHVzaChhMCxzdGFydCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjAsZW5kLC0xKTtcbiAgICBwdXNoKGIwLGVuZCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjEsZW5kLDEpO1xuICAgIGRpc3RhbmNlICs9IGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgYWRkTG9vcCA9IChwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLCB6OiBudW1iZXIsIHBoYXNlOiBudW1iZXIpID0+XG4gICAgcG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCB6KSwgbW92ZShwb2ludHNbKGluZGV4ICsgMSkgJSBwb2ludHMubGVuZ3RoXSwgeiksIHBoYXNlICsgaW5kZXggKiAuNzMpKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIGRlcHRoIC8gMiwgLjMpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgLWRlcHRoIC8gMiwgMi4xKTtcbiAgc2hhcGUuaG9sZXM/LmZvckVhY2goKGhvbGUsIGluZGV4KSA9PiB7XG4gICAgYWRkTG9vcChob2xlLCBkZXB0aCAvIDIgKyAuMDAyLCAzLjcgKyBpbmRleCk7XG4gICAgYWRkTG9vcChob2xlLCAtZGVwdGggLyAyIC0gLjAwMiwgNS4yICsgaW5kZXgpO1xuICB9KTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCAtZGVwdGggLyAyKSwgbW92ZShwb2ludCwgZGVwdGggLyAyKSwgNi4xICsgaW5kZXgpKTtcbiAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCAqIChpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxKTtcbiAgY29uc3QgYnJhbmNoU3RyZW5ndGggPSAoaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEpICogKGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMik7XG4gIGNvbnN0IHJhbmRvbSA9IChzZWVkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hdGguc2luKHNlZWQgKiAxMi45ODk4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCAqIDc4LjIzMykgKiA0Mzc1OC41NDUzO1xuICAgIHJldHVybiB2YWx1ZSAtIE1hdGguZmxvb3IodmFsdWUpO1xuICB9O1xuICBjb25zdCByb3RhdGVkID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpYW5zOiBudW1iZXIpOiBOZW9uUG9pbnQgPT4gW1xuICAgIHggKiBNYXRoLmNvcyhyYWRpYW5zKSAtIHkgKiBNYXRoLnNpbihyYWRpYW5zKSxcbiAgICB4ICogTWF0aC5zaW4ocmFkaWFucykgKyB5ICogTWF0aC5jb3MocmFkaWFucyksXG4gIF07XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjeWNsZSA9IE1hdGguZmxvb3IodGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSk7XG4gICAgY29uc3QgYWdlID0gdGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSAtIGN5Y2xlO1xuICAgIGNvbnN0IHNlZWQgPSBjeWNsZSAqIDM3LjEgKyBpbmRleCAqIDExLjc7XG4gICAgY29uc3QgYWN0aXZlRHVyYXRpb24gPSAuMTggKyByYW5kb20oc2VlZCArIDEpICogLjI1O1xuICAgIGNvbnN0IGhhemVEdXJhdGlvbiA9IE1hdGgubWluKDEsIGFjdGl2ZUR1cmF0aW9uICsgLjI4ICsgcmFuZG9tKHNlZWQgKyAyKSAqIC4yMik7XG4gICAgY29uc3QgYnJhbmNoQWN0aXZlID0gYWdlIDwgYWN0aXZlRHVyYXRpb247XG4gICAgY29uc3QgaGF6ZUFjdGl2ZSA9IGFnZSA8IGhhemVEdXJhdGlvbjtcbiAgICBpZiAoKCFicmFuY2hBY3RpdmUgJiYgIWhhemVBY3RpdmUpIHx8IHJhbmRvbShzZWVkICsgMykgPiBNYXRoLm1pbiguNzgsIGJyYW5jaFN0cmVuZ3RoICogLjUpKSByZXR1cm47XG4gICAgY29uc3QgbmV4dCA9IHNoYXBlLnBvaW50c1soaW5kZXggKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGhdO1xuICAgIGNvbnN0IHQgPSAuMTYgKyByYW5kb20oc2VlZCArIDQpICogLjY4O1xuICAgIGNvbnN0IGJhc2U6IE5lb25Qb2ludCA9IFtwb2ludFswXSArIChuZXh0WzBdIC0gcG9pbnRbMF0pICogdCwgcG9pbnRbMV0gKyAobmV4dFsxXSAtIHBvaW50WzFdKSAqIHRdO1xuICAgIGNvbnN0IHR4ID0gbmV4dFswXSAtIHBvaW50WzBdLCB0eSA9IG5leHRbMV0gLSBwb2ludFsxXSwgdGwgPSBNYXRoLmh5cG90KHR4LCB0eSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSByYW5kb20oc2VlZCArIDUpID4gLjUgPyAxIDogLTE7XG4gICAgY29uc3QgcGVycGVuZGljdWxhcjogTmVvblBvaW50ID0gWy10eSAvIHRsICogZGlyZWN0aW9uLCB0eCAvIHRsICogZGlyZWN0aW9uXTtcbiAgICBjb25zdCBmaXJzdEppdHRlciA9ICgxMCArIHJhbmRvbShzZWVkICsgNikgKiAxMCkgKiBNYXRoLlBJIC8gMTgwICogKHJhbmRvbShzZWVkICsgNykgPiAuNSA/IDEgOiAtMSk7XG4gICAgbGV0IGhlYWRpbmcgPSByb3RhdGVkKHBlcnBlbmRpY3VsYXJbMF0sIHBlcnBlbmRpY3VsYXJbMV0sIGZpcnN0Sml0dGVyKTtcbiAgICBjb25zdCBzZWdtZW50Q291bnQgPSAxICsgTWF0aC5mbG9vcihyYW5kb20oc2VlZCArIDgpICogMyk7XG4gICAgY29uc3QgcG9pbnRzOiBOZW9uUG9pbnRbXSA9IFtiYXNlXTtcbiAgICBmb3IgKGxldCBzZWdtZW50ID0gMDsgc2VnbWVudCA8IHNlZ21lbnRDb3VudDsgc2VnbWVudCsrKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSAuMDU1ICsgcmFuZG9tKHNlZWQgKyAxMCArIHNlZ21lbnQpICogLjA5NTtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIHBvaW50cy5wdXNoKFtwcmV2aW91c1swXSArIGhlYWRpbmdbMF0gKiBsZW5ndGgsIHByZXZpb3VzWzFdICsgaGVhZGluZ1sxXSAqIGxlbmd0aF0pO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKDIwICsgcmFuZG9tKHNlZWQgKyAyMCArIHNlZ21lbnQpICogNDApICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGhlYWRpbmcgPSByb3RhdGVkKGhlYWRpbmdbMF0sIGhlYWRpbmdbMV0sIG9mZnNldCAqIChyYW5kb20oc2VlZCArIDMwICsgc2VnbWVudCkgPiAuNSA/IDEgOiAtMSkpO1xuICAgIH1cbiAgICBpZiAoaGF6ZUFjdGl2ZSkge1xuICAgICAgY29uc3QgZmFkZSA9IDEgLSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgLyBNYXRoLm1heCguMDAxLCBoYXplRHVyYXRpb24gLSBhY3RpdmVEdXJhdGlvbik7XG4gICAgICBjb25zdCBkcmlmdCA9IE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAqIC4wMzU7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHBvaW50c1tzZWdtZW50ICsgMV07XG4gICAgICAgIGNvbnN0IGhhemVTdGFydDogTmVvblBvaW50ID0gW3N0YXJ0WzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBzdGFydFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGNvbnN0IGhhemVFbmQ6IE5lb25Qb2ludCA9IFtlbmRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIGVuZFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGFkZExpbmUobW92ZShoYXplU3RhcnQsIGRlcHRoIC8gMiArIC4wMDIpLCBtb3ZlKGhhemVFbmQsIGRlcHRoIC8gMiArIC4wMDIpLCAzMSArIHNlZWQgKyBzZWdtZW50LCAxLjQ1ICsgZmFkZSAqIC41NSwgZmFkZSAqIC4zNCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJyYW5jaEFjdGl2ZSkge1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBhZGRMaW5lKG1vdmUoc3RhcnQsIGRlcHRoIC8gMiArIC4wMDYpLCBtb3ZlKHBvaW50c1tzZWdtZW50ICsgMV0sIGRlcHRoIC8gMiArIC4wMDYpLCAxMSArIHNlZWQgKyBzZWdtZW50LCAuNDIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjbGluZVBpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNkZXB0aDogR1BVVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAjbGFiZWxMYXllcjogSFRNTERpdkVsZW1lbnQ7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgcGFyZW50ID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCAmJiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0aGlzLiNsYWJlbExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLiNsYWJlbExheWVyLmNsYXNzTmFtZSA9IFwibmVvbi1zaGFwZS1sYWJlbC1sYXllclwiO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwgeyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGluc2V0OlwiMFwiLCBwb2ludGVyRXZlbnRzOlwibm9uZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiIH0pO1xuICAgIHBhcmVudD8uYXBwZW5kKHRoaXMuI2xhYmVsTGF5ZXIpO1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IGV4dHJ1ZGVkIHNoYXBlIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiLCBjdWxsTW9kZTogXCJiYWNrXCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IGZhbHNlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jbGluZVBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwibGluZUZyYWdtZW50XCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgICB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IHRydWUsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IHNoYXBlIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGluc3RhbmNlcy5mbGF0TWFwKG1lc2gpO1xuICAgIGNvbnN0IGVkZ2VzID0gaW5zdGFuY2VzLmZsYXRNYXAoZWRnZU1lc2gpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgY29uc3QgZWRnZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGVkZ2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBkYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGVkZ2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZWRnZURhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGNvbnN0IGVkZ2VCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBlZGdlRGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmZmVyLCAwLCBkYXRhKTtcbiAgICBpZiAoZWRnZURhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihlZGdlQnVmZmVyLCAwLCBlZGdlRGF0YSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCA1LCBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIDBdKSk7XG4gICAgY29uc3QgYmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBsaW5lQmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNsaW5lUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7IHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSwgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLCBzdG9yZU9wOiBcInN0b3JlXCIgfV0sXG4gICAgICBkZXB0aFN0ZW5jaWxBdHRhY2htZW50OiB7IHZpZXc6IHRoaXMuI2RlcHRoIS5jcmVhdGVWaWV3KCksIGRlcHRoQ2xlYXJWYWx1ZTogMSwgZGVwdGhMb2FkT3A6IFwiY2xlYXJcIiwgZGVwdGhTdG9yZU9wOiBcInN0b3JlXCIgfSxcbiAgICB9KTtcbiAgICBpZiAodmVydGljZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBiaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpOyBwYXNzLmRyYXcodmVydGljZXMubGVuZ3RoKTsgfVxuICAgIGlmIChlZGdlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNsaW5lUGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBsaW5lQmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgZWRnZUJ1ZmZlcik7IHBhc3MuZHJhdyhlZGdlcy5sZW5ndGgpOyB9XG4gICAgcGFzcy5lbmQoKTsgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgdGhpcy4jcmVuZGVyTGFiZWxzKGluc3RhbmNlcyk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUub25TdWJtaXR0ZWRXb3JrRG9uZSgpLnRoZW4oKCkgPT4geyB2ZXJ0ZXhCdWZmZXIuZGVzdHJveSgpOyBlZGdlQnVmZmVyLmRlc3Ryb3koKTsgfSk7XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7IHRoaXMuI2xhYmVsTGF5ZXIucmVtb3ZlKCk7IHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7IHRoaXMuI3NjZW5lQnVmZmVyLmRlc3Ryb3koKTsgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTsgfVxuICAjcmVuZGVyTGFiZWxzKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwge1xuICAgICAgbGVmdDogYCR7dGhpcy5jYW52YXMub2Zmc2V0TGVmdH1weGAsXG4gICAgICB0b3A6IGAke3RoaXMuY2FudmFzLm9mZnNldFRvcH1weGAsXG4gICAgICByaWdodDogXCJhdXRvXCIsXG4gICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgd2lkdGg6IGAke3RoaXMuY2FudmFzLmNsaWVudFdpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgICB0aGlzLiNsYWJlbExheWVyLnJlcGxhY2VDaGlsZHJlbiguLi5pbnN0YW5jZXMuZmxhdE1hcChpbnN0YW5jZSA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLmxhYmVsPy50ZXh0IHx8IChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpIDw9IDApIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgICAgIGNvbnN0IHggPSA1MCArIChpbnN0YW5jZS54ID8/IDApICogNDAgLyAodGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgeSA9IDUwIC0gKGluc3RhbmNlLnkgPz8gMCkgKiA0MDtcbiAgICAgIGNvbnN0IHNoYXBlUmFkaXVzID0gc2NhbGUgKiB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiAuMjtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNoYXBlUmFkaXVzICsgKGluc3RhbmNlLmxhYmVsLm9mZnNldCA/PyA4KSArIChpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOCkgKiAuNTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5zdGFuY2UubGFiZWwucG9zaXRpb24gPz8gXCJhYm92ZVwiO1xuICAgICAgbGV0IHR4ID0gMCwgdHkgPSAwO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImFib3ZlXCIpIHR5ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJiZWxvd1wiKSB0eSA9IG9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHR4ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB0eCA9IG9mZnNldDtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnN0YW5jZS5sYWJlbC50ZXh0O1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDpgJHt4fSVgLCB0b3A6YCR7eX0lYCwgdHJhbnNmb3JtOmB0cmFuc2xhdGUoY2FsYygtNTAlICsgJHt0eH1weCksY2FsYygtNTAlICsgJHt0eX1weCkpYCxcbiAgICAgICAgY29sb3I6aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3IsIGZvbnRGYW1pbHk6aW5zdGFuY2UubGFiZWwuZm9udEZhbWlseSA/PyBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIGZvbnRTaXplOmAke2luc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4fXB4YCwgZm9udFdlaWdodDpTdHJpbmcoaW5zdGFuY2UubGFiZWwuZm9udFdlaWdodCA/PyA2MDApLFxuICAgICAgICB0ZXh0U2hhZG93OmAwIDAgNXB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9LDAgMCAxNHB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9YCwgd2hpdGVTcGFjZTpcIm5vd3JhcFwiLFxuICAgICAgICBvcGFjaXR5OlN0cmluZyhpbnN0YW5jZS5vcGFjaXR5ID8/IDEpLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW2VsZW1lbnRdO1xuICAgIH0pKTtcbiAgfVxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLiNsb2dpY2FsU2l6ZTtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQgfHwgIXRoaXMuI2RlcHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLiNkZXB0aCAmJiB0aGlzLmNhbnZhcy53aWR0aCA9PT0gd2lkdGggJiYgdGhpcy5jYW52YXMuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSwgTmVvblNoYXBlTGFiZWwgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGVudW0gTmVvblNoYXBlRGlzcG9zYWwge1xuICBGYWRlT3V0ID0gXCJmYWRlT3V0XCIsXG4gIERpc2FwcGVhciA9IFwiZGlzYXBwZWFyXCIsXG4gIEV4cGxvZGUgPSBcImV4cGxvZGVcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVWZWN0b3Ige1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbXBhY3Qge1xuICBkaXJlY3Rpb246IE5lb25TaGFwZVZlY3RvcjtcbiAgbWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlQWN0b3JPcHRpb25zIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHZlbG9jaXR5PzogUGFydGlhbDxOZW9uU2hhcGVWZWN0b3I+O1xuICBzY2FsZT86IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc3Bvc2FsPzogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb24/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblNoYXBlQWN0b3Ige1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHo6IG51bWJlcjtcbiAgdmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc3Bvc2FsOiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZTogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uOiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlOiBudW1iZXI7XG4gIHJvdGF0aW9uWCA9IDA7XG4gIHJvdGF0aW9uWSA9IDA7XG4gIHJvdGF0aW9uWiA9IDA7XG4gIGRpc3Bvc2VkID0gZmFsc2U7XG4gICNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgI2VudHJhbmNlUHJvZ3Jlc3MgPSAxO1xuICAjaW1wYWN0VmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuICAjaW1wYWN0Um90YXRpb246IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25TaGFwZUFjdG9yT3B0aW9ucykge1xuICAgIHRoaXMuc2hhcGUgPSBvcHRpb25zLnNoYXBlO1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCA/PyAwO1xuICAgIHRoaXMueSA9IG9wdGlvbnMueSA/PyAwO1xuICAgIHRoaXMueiA9IG9wdGlvbnMueiA/PyAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IG9wdGlvbnMudmVsb2NpdHk/LnggPz8gMCwgeTogb3B0aW9ucy52ZWxvY2l0eT8ueSA/PyAwIH07XG4gICAgdGhpcy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgPz8gMTtcbiAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmRpc3Bvc2FsID0gb3B0aW9ucy5kaXNwb3NhbCA/PyBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0O1xuICAgIHRoaXMuZXhwbG9kZU1hZ25pdHVkZSA9IG9wdGlvbnMuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gb3B0aW9ucy5lbnRyYW5jZUR1cmF0aW9uID8/IC40NTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gb3B0aW9ucy5lbnRyYW5jZU1hZ25pdHVkZSA/PyAuNTU7XG4gIH1cblxuICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIsIHogPSB0aGlzLnopOiB0aGlzIHtcbiAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VmVsb2NpdHkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSB4OyB0aGlzLnZlbG9jaXR5LnkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1wYWN0KHsgZGlyZWN0aW9uLCBtYWduaXR1ZGUgfTogTmVvblNoYXBlSW1wYWN0KTogdGhpcyB7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gICAgY29uc3QgeCA9IGRpcmVjdGlvbi54IC8gbGVuZ3RoLCB5ID0gZGlyZWN0aW9uLnkgLyBsZW5ndGg7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCArPSB4ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKz0geSAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICs9IHkgKiBtYWduaXR1ZGUgKiAuOTtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi55IC09IHggKiBtYWduaXR1ZGUgKiAuOTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRpc3Bvc2UobW9kZSA9IHRoaXMuZGlzcG9zYWwpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2FsID0gbW9kZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gbW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyID8gMSA6IC4wMDAxO1xuICAgIGlmIChtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW50ZXIoZHVyYXRpb24gPSB0aGlzLmVudHJhbmNlRHVyYXRpb24sIG1hZ25pdHVkZSA9IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUpOiB0aGlzIHtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBNYXRoLm1heCguMDAxLCBkdXJhdGlvbik7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG1hZ25pdHVkZTtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZ2VuZXJhdGUoKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9ICh0aGlzLnZlbG9jaXR5LnggKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS54KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnkgKz0gKHRoaXMudmVsb2NpdHkueSArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25YICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblkgKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqIGRlbHRhU2Vjb25kcztcbiAgICBjb25zdCBkYW1waW5nID0gTWF0aC5leHAoLTcgKiBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSAqPSBkYW1waW5nO1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqPSBkYW1waW5nO1xuICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID4gMCAmJiAhdGhpcy5kaXNwb3NlZCkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gLjg1IDogLjU1O1xuICAgICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyBkdXJhdGlvbik7XG4gICAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+PSAxKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPCAxKSB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIHRoaXMuZW50cmFuY2VEdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJJbnN0YW5jZShvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gICAgY29uc3QgZmFkZSA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQgPyAxIC0gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYXBlOiB0aGlzLnNoYXBlLCB4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56LCBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIHJvdGF0aW9uWDogdGhpcy5yb3RhdGlvblgsIHJvdGF0aW9uWTogdGhpcy5yb3RhdGlvblksIHJvdGF0aW9uWjogdGhpcy5yb3RhdGlvblosXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCwgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IHRoaXMuZGlzcG9zZWQgPyAwIDogZmFkZSxcbiAgICAgIGVudHJhbmNlUHJvZ3Jlc3M6IHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MsXG4gICAgICBlbnRyYW5jZU1hZ25pdHVkZTogdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogdGhpcy5leHBsb2RlTWFnbml0dWRlLFxuICAgICAgLi4ub3ZlcnJpZGVzLFxuICAgIH07XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uUHJpbWl0aXZlU2hhcGUgPSBcImNpcmNsZVwiIHwgXCJib2x0XCIgfCBcIm9yYlwiIHwgXCJyaW5nXCIgfCBcInNwYXJrXCIgfCBcImRpYW1vbmRcIiB8IFwicGVudGFnb25cIiB8IFwibGluZVwiIHwgXCJhcmNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJpbWl0aXZlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I/OiBzdHJpbmc7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgdGV4dHVyZT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aD86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIGFyY1N0YXJ0PzogbnVtYmVyO1xuICBhcmNFbmQ/OiBudW1iZXI7XG4gIHNoYXBlPzogTmVvblByaW1pdGl2ZVNoYXBlO1xufVxuXG5jb25zdCBtYXhQcmltaXRpdmVzID0gMTAyNDtcbmNvbnN0IGZsb2F0c1BlclByaW1pdGl2ZSA9IDIwO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovIGBcbnN0cnVjdCBTY2VuZSB7IHJlc29sdXRpb246IHZlYzJmLCBjb3VudDogZjMyLCB0aW1lOiBmMzIgfVxuc3RydWN0IFByaW1pdGl2ZSB7XG4gIHBvc2l0aW9uOiB2ZWMyZixcbiAgc2l6ZTogdmVjMmYsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBnbG93OiBmMzIsXG4gIGludGVuc2l0eTogZjMyLFxuICBzaGFwZTogZjMyLFxuICB0ZXh0dXJlOiBmMzIsXG4gIHJpbUludGVuc2l0eTogZjMyLFxuICBzaGFkb3dTdHJlbmd0aDogZjMyLFxuICBwYWRkaW5nOiB2ZWMyZixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBpdGVtczogYXJyYXk8UHJpbWl0aXZlPjtcblxuc3RydWN0IFZlcnRleE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBpbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDQpIHNoYXBlOiBmMzIsXG4gIEBsb2NhdGlvbig1KSBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbig2KSB0ZXh0dXJlOiBmMzIsXG4gIEBsb2NhdGlvbig3KSByaW1JbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDgpIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG59XG5cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZlcnRleDogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gVmVydGV4T3V0cHV0IHtcbiAgdmFyIGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBpdGVtID0gaXRlbXNbaW5zdGFuY2VdO1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZlcnRleF07XG4gIHZhciBwaXhlbE9mZnNldCA9IGxvY2FsICogaXRlbS5zaXplO1xuICBpZiAoaXRlbS50ZXh0dXJlICE9IDApIHtcbiAgICBsZXQgYyA9IGNvcyhpdGVtLnRleHR1cmUpO1xuICAgIGxldCBzID0gc2luKGl0ZW0udGV4dHVyZSk7XG4gICAgcGl4ZWxPZmZzZXQgPSB2ZWMyZihwaXhlbE9mZnNldC54ICogYyAtIHBpeGVsT2Zmc2V0LnkgKiBzLCBwaXhlbE9mZnNldC54ICogcyArIHBpeGVsT2Zmc2V0LnkgKiBjKTtcbiAgfVxuICBsZXQgcGl4ZWwgPSBpdGVtLnBvc2l0aW9uICsgcGl4ZWxPZmZzZXQ7XG4gIHZhciBvdXRwdXQ6IFZlcnRleE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYocGl4ZWwueCAvIHNjZW5lLnJlc29sdXRpb24ueCAqIDIgLSAxLCAxIC0gcGl4ZWwueSAvIHNjZW5lLnJlc29sdXRpb24ueSAqIDIsIDAsIDEpO1xuICBvdXRwdXQubG9jYWwgPSBsb2NhbDtcbiAgb3V0cHV0LmNvbG9yID0gaXRlbS5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpdGVtLmdsb3c7XG4gIG91dHB1dC5pbnRlbnNpdHkgPSBpdGVtLmludGVuc2l0eTtcbiAgb3V0cHV0LnNoYXBlID0gaXRlbS5zaGFwZTtcbiAgb3V0cHV0LnNlY29uZGFyeUNvbG9yID0gaXRlbS5zZWNvbmRhcnlDb2xvcjtcbiAgb3V0cHV0LnRleHR1cmUgPSBpdGVtLnRleHR1cmU7XG4gIG91dHB1dC5yaW1JbnRlbnNpdHkgPSBpdGVtLnJpbUludGVuc2l0eTtcbiAgb3V0cHV0LnNoYWRvd1N0cmVuZ3RoID0gaXRlbS5zaGFkb3dTdHJlbmd0aDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogVmVydGV4T3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBpZiAoaW5wdXQuc2hhcGUgPiA3LjUpIHtcbiAgICBsZXQgcmFkaXVzID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgICBsZXQgYW5nbGUgPSBhdGFuMihpbnB1dC5sb2NhbC55LCBpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYW5nbGUgPCBpbnB1dC5yaW1JbnRlbnNpdHkgfHwgYW5nbGUgPiBpbnB1dC5zaGFkb3dTdHJlbmd0aCB8fCByYWRpdXMgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBsaW5lRGlzdGFuY2UgPSBhYnMocmFkaXVzIC0gMC43OCk7XG4gICAgaWYgKGxpbmVEaXN0YW5jZSA+IDAuMTYpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjAxMiwgMC4wMzgsIGxpbmVEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjAyNSwgMC4xNiwgbGluZURpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBwdWxzZUEgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMjMuMCAtIHNjZW5lLnRpbWUgKiA4LjUpKSwgMTYuMCk7XG4gICAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAxMS4wICsgc2NlbmUudGltZSAqIDUuMyArIDEuNykpLCAyNC4wKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oYW5nbGUgKiA3MS4wICsgc2NlbmUudGltZSAqIDMuMSkgKiAwLjUgKyAwLjU7XG4gICAgbGV0IHN1cmdlID0gc21vb3Roc3RlcCgwLjcyLCAwLjk0LCBwdWxzZUEgKiAwLjcgKyBwdWxzZUIgKiAwLjY1ICsgZ3JhaW4gKiAwLjEyKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC44OCArIHN1cmdlICogMC42NSkgKyBoYWxvICogKDAuMjIgKyBzdXJnZSAqIDAuOSkpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiBzdXJnZSAqIDAuOSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA2LjUpIHtcbiAgICBsZXQgYWxvbmcgPSBpbnB1dC5sb2NhbC55O1xuICAgIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFjcm9zcyA+IDEuMCB8fCBhYnMoYWxvbmcpID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wOCwgMC4yNCwgYWNyb3NzKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMTIsIDEuMCwgYWNyb3NzKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmRGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgwLjcyLCAxLjAsIGFicyhhbG9uZykpO1xuICAgIGxldCB0cmF2ZWwgPSBwb3cobWF4KDAuMCwgc2luKGFsb25nICogMjQuMCAtIHNjZW5lLnRpbWUgKiA4LjAgKyBpbnB1dC50ZXh0dXJlKSksIDE0LjApO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjc1ICsgdHJhdmVsICogMC41KSArIGhhbG8gKiAoMC4yICsgdHJhdmVsICogMC41NSkpICogZW5kRmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogdHJhdmVsICogMC43NSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA1LjUpIHtcbiAgICAvLyBQZW50YWdvbiBTREZcbiAgICAvLyBsb2NhbCBpcyBpbiBbLTEsIDFdIHJhbmdlLiBMZXQncyBmaW5kIHBlbnRhZ29uIGRpc3RhbmNlLlxuICAgIGxldCBweCA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBsZXQgcHkgPSBpbnB1dC5sb2NhbC55O1xuICAgIC8vIFBlbnRhZ29uIGNvbnN0YW50cyBmb3IgdmVydGljZXMvZWRnZXNcbiAgICBsZXQgayA9IHZlYzNmKC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDEuMzc2MzgxOTIpOyAvLyBjb3Mvc2luIG9mIDcyLCBwbHVzIGhlaWdodCBmYWN0b3JcbiAgICAvLyBQcm9qZWN0L01pcnJvciBhY3Jvc3MgdGhlIHN5bW1ldHJ5IGF4ZXMgb2YgcmVndWxhciBwZW50YWdvblxuICAgIHZhciBwID0gdmVjMmYocHgsIHB5KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKC1rLngsIGsueSksIHApLCAwKSAqIHZlYzJmKC1rLngsIGsueSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZihrLngsIGsueSksIHApLCAwKSAqIHZlYzJmKGsueCwgay55KTtcbiAgICBwLnggPSBwLnggLSBjbGFtcChwLngsIC1rLnogKiAwLjUsIGsueiAqIDAuNSk7XG4gICAgbGV0IGQgPSBsZW5ndGgocCAtIHZlYzJmKDAsIDAuNzIpKSAqIHNpZ24ocC55IC0gMC43Mik7XG4gICAgLy8gTWFwIGQgdG8gYSBub3JtYWxpemVkIHJhZGl1cyBzY2FsZVxuICAgIGxldCBzY2FsZUQgPSBkICsgMC4zNTsgLy8gb2Zmc2V0IHBlbnRhZ29uIHRvIGZpdCBib3VuZHMgbmljZWx5XG4gICAgaWYgKHNjYWxlRCA+IDAuOCkgeyBkaXNjYXJkOyB9XG4gICAgXG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjUsIDAuNjUsIHNjYWxlRCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC40NSwgMC41Mywgc2NhbGVEKSAqICgxIC0gc21vb3Roc3RlcCgwLjY1LCAwLjc1LCBzY2FsZUQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKC0wLjIsIDAuNSwgc2NhbGVEKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjU1LCAwLjgsIHNjYWxlRCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zOCArIGJvcmRlciAqIDEuMzU7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS43NSArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjQ1KSAqIGZpbGwgKiAwLjM1O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjQ7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDQuNSkge1xuICAgIGxldCBkID0gYWJzKGlucHV0LmxvY2FsLngpICsgYWJzKGlucHV0LmxvY2FsLnkpO1xuICAgIGlmIChkID4gMS4wOCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjc4LCAwLjkyLCBkKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjcyLCAwLjgyLCBkKSAqICgxIC0gc21vb3Roc3RlcCgwLjkyLCAxLjAyLCBkKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgwLjAsIDAuNzgsIGQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuODIsIDEuMDgsIGQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzUgKyBib3JkZXIgKiAxLjI7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNiArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjUpICogZmlsbCAqIDAuMzg7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMzU7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDEuNSkge1xuICAgIGxldCByMiA9IGRvdChpbnB1dC5sb2NhbCwgaW5wdXQubG9jYWwpO1xuICAgIGlmIChyMiA+IDEpIHsgZGlzY2FyZDsgfVxuICAgIGxldCB6ID0gc3FydChtYXgoMCwgMSAtIHIyKSk7XG4gICAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZSh2ZWMzZihpbnB1dC5sb2NhbC54LCAtaW5wdXQubG9jYWwueSwgeikpO1xuICAgIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtMC41NSwgLTAuNywgMC45KSk7XG4gICAgbGV0IGRpZmZ1c2UgPSBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKTtcbiAgICBsZXQgcmltID0gcG93KDEgLSB6LCAyLjIpICogaW5wdXQucmltSW50ZW5zaXR5O1xuICAgIGxldCBzaGFkb3cgPSBtaXgoMSAtIGlucHV0LnNoYWRvd1N0cmVuZ3RoLCAxLCBzbW9vdGhzdGVwKC0wLjY1LCAwLjQ1LCBkb3Qobm9ybWFsLnh5LCBsaWdodC54eSkpKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oaW5wdXQubG9jYWwueCAqIDIzICsgaW5wdXQubG9jYWwueSAqIDE3KSAqIHNpbihpbnB1dC5sb2NhbC55ICogMzEgLSBpbnB1dC5sb2NhbC54ICogMTEpO1xuICAgIGxldCB0ZXh0dXJlID0gMSArIGdyYWluICogaW5wdXQudGV4dHVyZSAqIDAuMjI7XG4gICAgbGV0IHNwZWN1bGFyID0gcG93KG1heChkb3QocmVmbGVjdCgtbGlnaHQsIG5vcm1hbCksIHZlYzNmKDAsMCwxKSksIDApLCAyOCkgKiAxLjg7XG4gICAgbGV0IGJvZHkgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGRpZmZ1c2UgKiAwLjggKyAwLjIpICogc2hhZG93ICogdGV4dHVyZTtcbiAgICBsZXQgaGFsbyA9IHBvdyhtYXgoMCwgMSAtIGxlbmd0aChpbnB1dC5sb2NhbCkpLCAwLjM1KSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHJnYiA9IGJvZHkgKiAoMC4zOCArIGRpZmZ1c2UgKiAwLjk1KSArIGlucHV0LmNvbG9yLnJnYiAqIHJpbSArIHZlYzNmKHNwZWN1bGFyKSArIGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiAqIGlucHV0LmludGVuc2l0eSwgMSk7XG4gIH1cbiAgdmFyIGRpc3RhbmNlID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgaWYgKGlucHV0LnNoYXBlID4gMy41KSB7XG4gICAgbGV0IGF4aXMgPSBtaW4oYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICAgIGxldCBhcm0gPSAxIC0gc21vb3Roc3RlcCgwLjA0LCAwLjE4LCBheGlzKTtcbiAgICBsZXQgZmFkZSA9IDEgLSBzbW9vdGhzdGVwKDAuMiwgMSwgbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKSk7XG4gICAgbGV0IGVuZXJneSA9IGFybSAqIGZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgYXJtKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAyLjUpIHtcbiAgICBsZXQgcmluZ0Rpc3RhbmNlID0gYWJzKGxlbmd0aChpbnB1dC5sb2NhbCkgLSAwLjYyKTtcbiAgICBsZXQgcmluZyA9IDEgLSBzbW9vdGhzdGVwKDAuMDU1LCAwLjE4LCByaW5nRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMTIsIDAuNDIsIHJpbmdEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5lcmd5ID0gKHJpbmcgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgcmluZykgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAwLjUpIHtcbiAgICBkaXN0YW5jZSA9IG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gIH1cbiAgbGV0IGNvcmUgPSAxIC0gc21vb3Roc3RlcCgwLjM4LCAwLjc2LCBkaXN0YW5jZSk7XG4gIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMywgMSwgZGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gIGxldCBlbmVyZ3kgPSAoY29yZSArIGhhbG8gKiAwLjU1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgbGV0IGNocm9tYXRpY0NvcmUgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIHBvdyhtYXgoY29yZSwgMCksIDIpKTtcbiAgbGV0IHJhdyA9IGNocm9tYXRpY0NvcmUgKiAoY29yZSAqIDEuMDUgKyBoYWxvICogMC40Mik7XG4gIGxldCByZ2IgPSByYXcgLyAodmVjM2YoMSkgKyByYXcgKiAwLjMyKTtcbiAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG59XG5gO1xuXG5mdW5jdGlvbiByZ2JhKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB2YWx1ZSA9IGhleC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgaWYgKCEvXlswLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHNpeC1kaWdpdCBoZXggY29sb3IsIHJlY2VpdmVkIFwiJHtoZXh9XCIuYCk7XG4gIHJldHVybiBbXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDAsIDIpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDIsIDQpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDQsIDYpLCAxNikgLyAyNTUsXG4gICAgMSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25QcmltaXRpdmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNwcmltaXRpdmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7IGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0gfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jcHJpbWl0aXZlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBtYXhQcmltaXRpdmVzICogZmxvYXRzUGVyUHJpbWl0aXZlICogNCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgfSk7XG4gICAgdGhpcy4jYmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfSxcbiAgICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciB9IH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uUHJpbWl0aXZlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNhbnZhcyBjb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10sIHRpbWVTZWNvbmRzID0gMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2aXNpYmxlID0gcHJpbWl0aXZlcy5zbGljZSgwLCBtYXhQcmltaXRpdmVzKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2aXNpYmxlLmxlbmd0aCAqIGZsb2F0c1BlclByaW1pdGl2ZSk7XG4gICAgdmlzaWJsZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJQcmltaXRpdmU7XG4gICAgICBkYXRhLnNldChbXG4gICAgICAgIGl0ZW0ueCwgaXRlbS55LCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCA/PyBpdGVtLndpZHRoLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uY29sb3IpLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uc2Vjb25kYXJ5Q29sb3IgPz8gaXRlbS5jb2xvciksXG4gICAgICAgIGl0ZW0uZ2xvdyA/PyAwLjUsXG4gICAgICAgIGl0ZW0uaW50ZW5zaXR5ID8/IDEsXG4gICAgICAgIGl0ZW0uc2hhcGUgPT09IFwiYXJjXCIgPyA4IDogaXRlbS5zaGFwZSA9PT0gXCJsaW5lXCIgPyA3IDogaXRlbS5zaGFwZSA9PT0gXCJwZW50YWdvblwiID8gNiA6IGl0ZW0uc2hhcGUgPT09IFwiZGlhbW9uZFwiID8gNSA6IGl0ZW0uc2hhcGUgPT09IFwic3BhcmtcIiA/IDQgOiBpdGVtLnNoYXBlID09PSBcInJpbmdcIiA/IDMgOiBpdGVtLnNoYXBlID09PSBcIm9yYlwiID8gMiA6IGl0ZW0uc2hhcGUgPT09IFwiYm9sdFwiID8gMSA6IDAsXG4gICAgICAgIGl0ZW0ucm90YXRpb24gPz8gaXRlbS50ZXh0dXJlID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjU3RhcnQgPz8gaXRlbS5yaW1JbnRlbnNpdHkgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNFbmQgPz8gaXRlbS5zaGFkb3dTdHJlbmd0aCA/PyAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgXSwgb2Zmc2V0KTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdmlzaWJsZS5sZW5ndGgsIHRpbWVTZWNvbmRzXSkpO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jcHJpbWl0aXZlQnVmZmVyLCAwLCBkYXRhKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDAuMDA2LCBnOiAwLjAwOSwgYjogMC4wMjUsIGE6IDEgfSxcbiAgICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgIH1dLFxuICAgIH0pO1xuICAgIGlmICh2aXNpYmxlLmxlbmd0aCkge1xuICAgICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kR3JvdXApO1xuICAgICAgcGFzcy5kcmF3KDYsIHZpc2libGUubGVuZ3RoKTtcbiAgICB9XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uID0gXCJmYWRlXCIgfCBcImV4cGFuZEZhZGVcIiB8IFwiaW1wbG9kZVwiIHwgXCJzcGFya0ZhZGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIGRldGFpbD86IG51bWJlcjtcbiAgdHVyYnVsZW5jZT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgY29yZUludGVuc2l0eT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBkaXNzaXBhdGlvblRpbWU/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uQWN0aW9uPzogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb247XG4gIGRyaWZ0WD86IG51bWJlcjtcbiAgZHJpZnRZPzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyO1xuICBhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25DbG91ZEJ1cnN0IGV4dGVuZHMgT21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcInhcIiB8IFwieVwiIHwgXCJzaXplXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbn1cblxudHlwZSBDbG91ZCA9IFJlcXVpcmVkPE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJjb3JlQ29sb3JcIj4+ICYgeyBjb3JlQ29sb3I6IHN0cmluZzsgYWdlOiBudW1iZXIgfTtcblxuY29uc3QgbWF4Q2xvdWRzID0gOTY7XG5jb25zdCBmbG9hdHNQZXJDbG91ZCA9IDI0O1xuXG5jb25zdCBkZWZhdWx0czogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz4gPSB7XG4gIGNvbG9yOiBcIiM2M2U4ZmZcIixcbiAgY29yZUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRpb246IDAsXG4gIHNpemU6IC4yNSxcbiAgZGV0YWlsOiA1LFxuICB0dXJidWxlbmNlOiAuNzUsXG4gIGdsb3c6IDQsXG4gIGNvcmVJbnRlbnNpdHk6IDEuNCxcbiAgcmltSW50ZW5zaXR5OiAuODUsXG4gIG9wYWNpdHk6IDEsXG4gIGRpc3NpcGF0aW9uVGltZTogLjcsXG4gIGRpc3NpcGF0aW9uQWN0aW9uOiBcImV4cGFuZEZhZGVcIixcbiAgZHJpZnRYOiAwLFxuICBkcmlmdFk6IDAsXG4gIHNlZWQ6IDAsXG4gIGFnZTogMCxcbn07XG5cbmNvbnN0IGhleCA9ICh2YWx1ZTogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgcmF3ID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIikucGFkRW5kKDYsIFwiMFwiKS5zbGljZSgwLCA2KTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuXG5leHBvcnQgY29uc3QgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yID0gKGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBbciwgZywgYl0gPSBoZXgoY29sb3IpO1xuICBjb25zdCBsaWZ0ID0gKGNoYW5uZWw6IG51bWJlcikgPT4gTWF0aC5yb3VuZCgoY2hhbm5lbCArICgxIC0gY2hhbm5lbCkgKiAuNzgpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICByZXR1cm4gYCMke2xpZnQocil9JHtsaWZ0KGcpfSR7bGlmdChiKX1gO1xufTtcblxuY29uc3QgYWN0aW9uVmFsdWUgPSAoYWN0aW9uOiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbik6IG51bWJlciA9PlxuICBhY3Rpb24gPT09IFwiZmFkZVwiID8gMCA6IGFjdGlvbiA9PT0gXCJleHBhbmRGYWRlXCIgPyAxIDogYWN0aW9uID09PSBcImltcGxvZGVcIiA/IDIgOiAzO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IENsb3VkIHtcbiAgcG9zOiB2ZWMyZixcbiAgdmVsb2NpdHk6IHZlYzJmLFxuICBhZ2U6IGYzMixcbiAgbGlmZTogZjMyLFxuICBzaXplOiBmMzIsXG4gIHJvdGF0aW9uOiBmMzIsXG4gIHNlZWQ6IGYzMixcbiAgYWN0aW9uOiBmMzIsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgY29yZTogdmVjNGYsXG4gIHR1bmluZzogdmVjNGYsXG59XG5zdHJ1Y3QgR2xvYmFscyB7XG4gIGFzcGVjdDogZjMyLFxuICB0aW1lOiBmMzIsXG4gIGNvdW50OiBmMzIsXG4gIGJhY2tncm91bmQ6IGYzMixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gZ2xvYmFsczogR2xvYmFscztcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gY2xvdWRzOiBhcnJheTxDbG91ZD47XG5cbmZuIGhhc2gocDogdmVjMmYpIC0+IGYzMiB7XG4gIHJldHVybiBmcmFjdChzaW4oZG90KHAsIHZlYzJmKDEyNy4xLCAzMTEuNykpKSAqIDQzNzU4LjU0NTMxMjMpO1xufVxuZm4gbm9pc2UocDogdmVjMmYpIC0+IGYzMiB7XG4gIGxldCBpID0gZmxvb3IocCk7XG4gIGxldCBmID0gZnJhY3QocCk7XG4gIGxldCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBtaXgobWl4KGhhc2goaSksIGhhc2goaSArIHZlYzJmKDEsMCkpLCB1LngpLCBtaXgoaGFzaChpICsgdmVjMmYoMCwxKSksIGhhc2goaSArIHZlYzJmKDEsMSkpLCB1LngpLCB1LnkpO1xufVxuZm4gZmJtKHA6IHZlYzJmLCBvY3RhdmVzOiBmMzIpIC0+IGYzMiB7XG4gIHZhciB2ID0gMC4wO1xuICB2YXIgYSA9IDAuNTtcbiAgdmFyIHEgPSBwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGlmIChmMzIoaSkgPj0gb2N0YXZlcykgeyBicmVhazsgfVxuICAgIHYgKz0gYSAqIG5vaXNlKHEpO1xuICAgIHEgPSBxICogMi4wMyArIHZlYzJmKDYuOSwgMy43KTtcbiAgICBhICo9IDAuNTI7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5mbiByb3RhdGUocDogdmVjMmYsIGE6IGYzMikgLT4gdmVjMmYge1xuICBsZXQgYyA9IGNvcyhhKTtcbiAgbGV0IHMgPSBzaW4oYSk7XG4gIHJldHVybiB2ZWMyZihwLnggKiBjIC0gcC55ICogcywgcC54ICogcyArIHAueSAqIGMpO1xufVxuc3RydWN0IE91dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBAaW50ZXJwb2xhdGUoZmxhdCkgaW5zdGFuY2U6IHUzMixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZpOiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBPdXQge1xuICBsZXQgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGMgPSBjbG91ZHNbaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBhY3Rpb25TY2FsZSA9IHNlbGVjdCgxLjAgKyBsaWZlVCAqIDEuODUsIDEuMCAtIGxpZmVUICogLjYyLCBjLmFjdGlvbiA+IDEuNSAmJiBjLmFjdGlvbiA8IDIuNSk7XG4gIGxldCByYWRpdXMgPSBtYXgoLjAwMSwgYy5zaXplICogYWN0aW9uU2NhbGUpICogMi4zNTtcbiAgdmFyIGNlbnRlciA9IGMucG9zICsgYy52ZWxvY2l0eSAqIGMuYWdlO1xuICBjZW50ZXIueCAqPSBnbG9iYWxzLmFzcGVjdDtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2aV07XG4gIGxldCBwID0gY2VudGVyICsgbG9jYWwgKiByYWRpdXM7XG4gIHZhciBvOiBPdXQ7XG4gIG8ucG9zaXRpb24gPSB2ZWM0ZihwLnggLyBnbG9iYWxzLmFzcGVjdCwgcC55LCAwLCAxKTtcbiAgby5sb2NhbCA9IGxvY2FsICogMi4zNTtcbiAgby5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICByZXR1cm4gbztcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGMgPSBjbG91ZHNbaW5wdXQuaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBsb2NhbCA9IHJvdGF0ZShpbnB1dC5sb2NhbCwgLWMucm90YXRpb24gLSBsaWZlVCAqIC40NSk7XG4gIGxldCByID0gbGVuZ3RoKGxvY2FsKTtcbiAgaWYgKHIgPj0gMi4zNSkgeyBkaXNjYXJkOyB9XG4gIGxldCBkZXRhaWwgPSBjbGFtcChjLnR1bmluZy54LCAxLjAsIDcuMCk7XG4gIGxldCB0dXJidWxlbmNlID0gYy50dW5pbmcueTtcbiAgbGV0IHdpc3B5ID0gZmJtKGxvY2FsICogKDEuNyArIGRldGFpbCAqIC4xNikgKyB2ZWMyZihjLnNlZWQsIGMuc2VlZCAqIC43MSkgKyBnbG9iYWxzLnRpbWUgKiB2ZWMyZiguMTYsIC4wOSkgKiB0dXJidWxlbmNlLCBtaW4oZGV0YWlsLCA0LjApKTtcbiAgbGV0IGNvcmUgPSBleHAoLXIgKiByICogKDEuMiArIGMudHVuaW5nLnogKiAuMjIpKTtcbiAgbGV0IHJpbSA9IGV4cCgtYWJzKHIgLSAuNzIpICogMy42KTtcbiAgbGV0IHNwYXJrID0gcG93KG1heCgwLjAsIHNpbih3aXNweSAqIDE2LjAgKyBjLnNlZWQgKyBnbG9iYWxzLnRpbWUgKiA5LjApKSwgMTQuMCkgKiBzZWxlY3QoMC4wLCAxLjAsIGMuYWN0aW9uID4gMi41KTtcbiAgbGV0IGRpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDEuNDUsIDIuMzUsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCByaW1EaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgyLjcsIDMuOCwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IGVkZ2VGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgxLjc1LCAyLjM1LCByKTtcbiAgbGV0IGRlbnNpdHkgPSAoY29yZSAqIC43MiArIHJpbSAqIC4yNCAqIHJpbURpc3NpcGF0ZSArIHdpc3B5ICogLjIyICsgc3BhcmsgKiAuNTUpICogZGlzc2lwYXRlICogYy50dW5pbmcudyAqIGVkZ2VGYWRlO1xuICBsZXQgaG90Q29yZSA9IGMuY29yZS5yZ2IgKiBjb3JlICogYy50dW5pbmcueiAqICgxLjAgKyBzcGFyayk7XG4gIGxldCBuZW9uUmltID0gYy5jb2xvci5yZ2IgKiAoZGVuc2l0eSAqICguNzUgKyBjLmNvbG9yLmEgKiAuMDgpICsgcmltICogcmltRGlzc2lwYXRlICogYy5jb2xvci5hICogLjA4KTtcbiAgbGV0IGdsb3cgPSBuZW9uUmltICsgaG90Q29yZSAqIGRlbnNpdHk7XG4gIHJldHVybiB2ZWM0ZihnbG93LCBjbGFtcChkZW5zaXR5ICogLjg1ICsgc3BhcmsgKiAuMjUsIDAuMCwgMS4wKSk7XG59YDtcblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0QWN0b3Ige1xuICBzZXR0aW5nczogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz47XG4gIGFnZSA9IDA7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzID0ge30pIHtcbiAgICB0aGlzLnNldHRpbmdzID0geyAuLi5kZWZhdWx0cywgLi4uc2V0dGluZ3MsIHNlZWQ6IHNldHRpbmdzLnNlZWQgPz8gTWF0aC5yYW5kb20oKSAqIDEwMDAgfTtcbiAgfVxuICB1cGRhdGUoZHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuYWdlICs9IGR0O1xuICAgIHJldHVybiB0aGlzLmFnZSA8IHRoaXMuc2V0dGluZ3MuZGlzc2lwYXRpb25UaW1lO1xuICB9XG4gIHJlbmRlckluc3RhbmNlKCk6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3MsIHNlZWQ6IHRoaXMuc2V0dGluZ3Muc2VlZCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjYnVmZmVyOiBHUFVCdWZmZXI7XG4gICNnbG9iYWxzOiBHUFVCdWZmZXI7XG4gICNiaW5kOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgcHJvY2VkdXJhbCBjbG91ZCB2b2x1bWUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNnbG9iYWxzID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCAqIDQsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYmluZCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW1xuICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2dsb2JhbHMgfSB9LFxuICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2J1ZmZlciB9IH0sXG4gICAgXSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkNsb3VkQnVyc3RSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3RvcnkgY2xvdWQgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihjbG91ZHM6IHJlYWRvbmx5IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3NbXSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgcGFja2VkID0gbmV3IEZsb2F0MzJBcnJheShtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCk7XG4gICAgY2xvdWRzLnNsaWNlKDAsIG1heENsb3VkcykuZm9yRWFjaCgoY2xvdWQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjID0geyAuLi5kZWZhdWx0cywgLi4uY2xvdWQgfTtcbiAgICAgIGNvbnN0IGNvbG9yID0gaGV4KGMuY29sb3IpLCBjb3JlID0gaGV4KGMuY29yZUNvbG9yKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyQ2xvdWQ7XG4gICAgICBwYWNrZWQuc2V0KFtjLngsIGMueSwgYy5kcmlmdFgsIGMuZHJpZnRZLCBjLmFnZSA/PyAwLCBjLmRpc3NpcGF0aW9uVGltZSwgYy5zaXplLCBjLnJvdGF0aW9uLCBjLnNlZWQsIGFjdGlvblZhbHVlKGMuZGlzc2lwYXRpb25BY3Rpb24pLCAwLCAwXSwgb2Zmc2V0KTtcbiAgICAgIHBhY2tlZC5zZXQoW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGMuZ2xvdywgY29yZVswXSwgY29yZVsxXSwgY29yZVsyXSwgYy5jb3JlSW50ZW5zaXR5LCBjLmRldGFpbCwgYy50dXJidWxlbmNlLCBjLnJpbUludGVuc2l0eSwgYy5vcGFjaXR5XSwgb2Zmc2V0ICsgMTIpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2J1ZmZlciwgMCwgcGFja2VkKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNnbG9iYWxzLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgdGltZVNlY29uZHMsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcyksIDBdKSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHsgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LFxuICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgfV0gfSk7XG4gICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZCk7XG4gICAgcGFzcy5kcmF3KDYsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcykpO1xuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICBtYXBUb3BEb3duQ2xvdWQoY2xvdWQ6IE5lb25Ub3BEb3duQ2xvdWRCdXJzdCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIGNvbnN0IGFzcGVjdCA9IGxvZ2ljYWxXaWR0aCAvIGxvZ2ljYWxIZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogKGNsb3VkLnggLyBsb2dpY2FsV2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBjbG91ZC55IC8gbG9naWNhbEhlaWdodCkgKiAyLjUsXG4gICAgICBzaXplOiBjbG91ZC5zaXplIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICAgIGRyaWZ0WDogKGNsb3VkLmRyaWZ0WCA/PyAwKSAvIGxvZ2ljYWxXaWR0aCAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIGRyaWZ0WTogLShjbG91ZC5kcmlmdFkgPz8gMCkgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy4jYnVmZmVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLiNnbG9iYWxzLmRlc3Ryb3koKTtcbiAgICBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgTmVvblByaW1pdGl2ZVJlbmRlcmVyLCB0eXBlIE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyLCB0eXBlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCB9IGZyb20gXCIuL2Nsb3VkLWJ1cnN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TaGFwZSBleHRlbmRzIE9taXQ8TmVvblNoYXBlSW5zdGFuY2UsIFwieFwiIHwgXCJ5XCIgfCBcInNjYWxlXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNjZW5lIHtcbiAgcHJpbWl0aXZlcz86IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXTtcbiAgY2xvdWRzPzogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W107XG4gIHNoYXBlcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVJlbmRlcmVyO1xuICAjY2xvdWRzOiBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyO1xuICAjc2hhcGVzOiBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcjtcbiAgI3dpZHRoOiBudW1iZXI7XG4gICNoZWlnaHQ6IG51bWJlcjtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7IHRoaXMuI3dpZHRoID0gd2lkdGg7IHRoaXMuI2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNwcmltaXRpdmVzID0gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNjbG91ZHMgPSBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNzaGFwZXMgPSBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeSB0b3AtZG93biBzY2VuZXMuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQsIGxvZ2ljYWxXaWR0aCwgbG9naWNhbEhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2NlbmU6IE5lb25Ub3BEb3duU2NlbmUsIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKTtcbiAgICB0aGlzLiNwcmltaXRpdmVzLnJlbmRlcihbLi4uKHNjZW5lLnByaW1pdGl2ZXMgPz8gW10pXSwgdGltZVNlY29uZHMsIGZhbHNlLCB0YXJnZXQpO1xuICAgIGNvbnN0IGNsb3VkcyA9IHNjZW5lLmNsb3VkcyA/PyBbXTtcbiAgICBjb25zdCBhc3BlY3QgPSB0aGlzLiN3aWR0aCAvIHRoaXMuI2hlaWdodDtcbiAgICBjb25zdCBzaGFwZXMgPSBzY2VuZS5zaGFwZXMgPz8gW107XG4gICAgaWYgKHNoYXBlcy5sZW5ndGgpIHRoaXMuI3NoYXBlcy5yZW5kZXIoc2hhcGVzLm1hcChzaGFwZSA9PiAoe1xuICAgICAgLi4uc2hhcGUsXG4gICAgICB4OiAoc2hhcGUueCAvIHRoaXMuI3dpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gc2hhcGUueSAvIHRoaXMuI2hlaWdodCkgKiAyLjUsXG4gICAgICBzY2FsZTogc2hhcGUuc2l6ZSAvIHRoaXMuI2hlaWdodCAqIDIuNSxcbiAgICB9KSksIHRydWUsIHRhcmdldCk7XG4gICAgaWYgKGNsb3Vkcy5sZW5ndGgpIHRoaXMuI2Nsb3Vkcy5yZW5kZXIoY2xvdWRzLm1hcChjbG91ZCA9PiB0aGlzLiNjbG91ZHMubWFwVG9wRG93bkNsb3VkKGNsb3VkLCB0aGlzLiN3aWR0aCwgdGhpcy4jaGVpZ2h0KSksIHRpbWVTZWNvbmRzLCB0cnVlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4jc2hhcGVzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuI2Nsb3Vkcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25Ub3BEb3duU2NlbmUgfSBmcm9tIFwiLi90b3AtZG93bi1zY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclNjZW5lSWRzID0gW1wibmVvbkhhbGxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmVSdW5uZXJTY2VuZU5hbWUoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiBzdHJpbmcge1xuICByZXR1cm4gc2NlbmVOYW1lc1tzY2VuZUlkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGFuZVJ1bm5lclNjZW5lSWQodmFsdWU6IHN0cmluZyk6IHZhbHVlIGlzIExhbmVSdW5uZXJTY2VuZUlkIHtcbiAgcmV0dXJuIChsYW5lUnVubmVyU2NlbmVJZHMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmVSdW5uZXJTY2VuZShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIHN3aXRjaCAob3B0aW9ucy5zY2VuZUlkKSB7XG4gICAgY2FzZSBcIm5lb25IYWxsXCI6XG4gICAgICByZXR1cm4gY3JlYXRlTmVvbkhhbGwob3B0aW9ucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmVvbkhhbGwob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gaGFsbEdlb21ldHJ5KHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZEhhbGxCYXNlKHByaW1pdGl2ZXMsIHdpZHRoLCBoZWlnaHQsIHRpbWVNcyk7XG4gIGFkZEhhbGxSYWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSk7XG4gIGFkZEhhbGxDcm9zc2JhcnMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gaGFsbEdlb21ldHJ5KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkSGFsbEJhc2UoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHB1bHNlID0gLjU1ICsgTWF0aC5zaW4odGltZU1zICogaGFsbEVuZXJneVNwZWVkKSAqIC4yO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgKiAuNDIsIHdpZHRoOiB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgKiAxLjA4LCBjb2xvcjogaGFsbEZsb29yQ29sb3IsIHNlY29uZGFyeUNvbG9yOiBcIiMwMjA1MGRcIiwgZ2xvdzogLjA1LCBpbnRlbnNpdHk6IC4yMywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBoYWxsRGVlcEJsdWUsIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRDeWFuLCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjc4LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogaGFsbEFjY2VudFBpbmssIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFsbFJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+KTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbERlZXBCbHVlLCAuNDgsIDYuNSk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbE11dGVkQ3lhbiwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbE11dGVkQmx1ZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgaGFsbE11dGVkQ3lhbiwgbGFuZSA9PT0gMiA/IC4yNiA6IC4xOCwgLjkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxDcm9zc2JhcnMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiByb3cgJSA0ID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IHJvdyAlIDQgPT09IDIgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsQWNjZW50UGluaztcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogbnVtYmVyO1xuICBzY29yZTogbnVtYmVyO1xuICBiYXNlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHJpbUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFkb3dDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgZ2xvdzogbnVtYmVyO1xuICBzdXJmYWNlVGV4dHVyZTogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgaGl0Rmxhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGRlYXRoRmxhc2hTY2FsZTogbnVtYmVyO1xuICBzaGFwZVpvb206IG51bWJlcjtcbiAgaW1wYWN0UmVzaXN0YW5jZTogbnVtYmVyO1xuICBleHBsb3Npb25NYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxMCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgR3VuSWQgfSBmcm9tIFwiLi9HdW5GYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbiAgc3RhcnRpbmdHdW46IEd1bklkO1xuICBzdGFydGluZ0d1bkxldmVsOiAxIHwgMiB8IDM7XG4gIHZpZXdwb3J0OiB7XG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIjtcbiAgICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICAgIGFzcGVjdEhlaWdodDogbnVtYmVyO1xuICAgIGxvZ2ljYWxXaWR0aDogbnVtYmVyO1xuICAgIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgZGVmaW5pdGlvbjogVHJhY2tEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgZGlzdGFuY2VGcm9tUGxheWVyOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5jb25zdCBpc0VuZW15ID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IGlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjazogVHJhY2tEZWZpbml0aW9uKTogUGFyc2VkVHJhY2tFbnRpdHlbXSB7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlTcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgZm9yIChjb25zdCBbc3ltYm9sLCBlbnRyeV0gb2YgT2JqZWN0LmVudHJpZXModHJhY2subGVnZW5kKSkge1xuICAgIGlmIChbLi4uc3ltYm9sXS5sZW5ndGggIT09IDEgfHwgL1xcc3xcXHwvLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQga2V5IFwiJHtzeW1ib2x9XCIgbXVzdCBiZSBvbmUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIG90aGVyIHRoYW4gXCJ8XCIuYCk7XG4gICAgfVxuICAgIGlmICghZW50cnkuaWQpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIG11c3QgaGF2ZSBhbiBpZC5gKTtcbiAgICBpZiAoZW50cnkuc3BlZWQgIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5zcGVlZCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvd3MgPSB0cmFjay5sYXlvdXRcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKHRleHQsIHNvdXJjZUluZGV4KSA9PiAoeyB0ZXh0OiB0ZXh0LnRyaW0oKSwgc291cmNlSW5kZXg6IHNvdXJjZUluZGV4ICsgMSB9KSlcbiAgICAuZmlsdGVyKHJvdyA9PiByb3cudGV4dC5sZW5ndGggPiAwKTtcblxuICBpZiAocm93cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxheW91dCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJvdy5cIik7XG5cbiAgbGV0IGxlZnRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgcmlnaHRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuXG4gIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBpcGVDb3VudCA9IFsuLi5yb3cudGV4dF0uZmlsdGVyKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgPT09IFwifFwiKS5sZW5ndGg7XG4gICAgaWYgKHBpcGVDb3VudCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gbXVzdCBjb250YWluIGV4YWN0bHkgb25lIFwifFwiIHNlcGFyYXRvcjsgZm91bmQgJHtwaXBlQ291bnR9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSByb3cudGV4dC5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIGxlZnRXaWR0aCA/Pz0gbGVmdC5sZW5ndGg7XG4gICAgcmlnaHRXaWR0aCA/Pz0gcmlnaHQubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSBsZWZ0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyBsZWZ0IHdpZHRoICR7bGVmdC5sZW5ndGh9OyBleHBlY3RlZCAke2xlZnRXaWR0aH0uYCk7XG4gICAgfVxuICAgIGlmIChyaWdodC5sZW5ndGggIT09IHJpZ2h0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyByaWdodCB3aWR0aCAke3JpZ2h0Lmxlbmd0aH07IGV4cGVjdGVkICR7cmlnaHRXaWR0aH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzdGFuY2VGcm9tUGxheWVyID0gcm93cy5sZW5ndGggLSAxIC0gcm93SW5kZXg7XG4gICAgZm9yIChjb25zdCBbc2lkZSwgbGFuZV0gb2YgW1tcImxlZnRcIiwgbGVmdF0sIFtcInJpZ2h0XCIsIHJpZ2h0XV0gYXMgY29uc3QpIHtcbiAgICAgIFsuLi5sYW5lXS5mb3JFYWNoKChzeW1ib2wsIGxhbmVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHRyYWNrLmxlZ2VuZFtzeW1ib2xdO1xuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gdXNlcyBzeW1ib2wgXCIke3N5bWJvbH1cIiBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgaXMgbWlzc2luZyBmcm9tIHRoZSBsZWdlbmQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LmlkID09PSBcImVtcHR5XCIpIHJldHVybjtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGRpc3RhbmNlRnJvbVBsYXllcixcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IChlbnRyeS5zcGVlZCA/PyAxKSAqIChpc0VuZW15KGVudHJ5LmlkKSA/IHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA6IDEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+XG4gICAgYS5kaXN0YW5jZUZyb21QbGF5ZXIgLSBiLmRpc3RhbmNlRnJvbVBsYXllciB8fFxuICAgIGEucm93SW5kZXggLSBiLnJvd0luZGV4IHx8XG4gICAgYS5zaWRlLmxvY2FsZUNvbXBhcmUoYi5zaWRlKSB8fFxuICAgIGEubGFuZUluZGV4IC0gYi5sYW5lSW5kZXgpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDE6IEZpcnN0IEdsb3dcIixcclxuICBkZXNjcmlwdGlvbjogXCJBIGdlbnRsZSBvbmJvYXJkaW5nIHJ1bjogZWFybHkgdGVuc2lvbiwgYSBxdWljayBwb3dlci11cCBiZWF0LCB0aGVuIGVhc3kgZXNjYWxhdGluZyB3YXZlcyBmb3IgYSBmaXJzdC10aW1lIHBsYXllci5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDI1LFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMC43NSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgfSxcclxuICAgIGJhbGFuY2U6IHtcclxuICAgICAgZW5lbXlIcDogMS4wLFxyXG4gICAgICBlbmVteVNwZWVkOiAxLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xyXG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMjogTmVvbiBXYWtlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHNlY29uZCBvbmJvYXJkaW5nIHJ1bjogYSBzbGlnaHRseSBkZW5zZXIgb3BlbmluZywgZWFybHkgcmVjb3ZlcnkgcGlja3VwcywgYW5kIGEgZ2VudGxlIGZpbmFsZSB0aGF0IHRlYWNoZXMgdGhlIHBsYXllciB0byB0cnVzdCB0aGVpciBncm93aW5nIHNxdWFkLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMzAsXHJcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcclxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgYXNwZWN0V2lkdGg6IDksXHJcbiAgICBhc3BlY3RIZWlnaHQ6IDE2LFxyXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXHJcbiAgICBsb2dpY2FsSGVpZ2h0OiA4MDAsXHJcbiAgfSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5HLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLlMuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMC43NSB9LFxyXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMC45NSxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMzogUHJpc20gUHJlc3N1cmVcIixcclxuICBkZXNjcmlwdGlvbjogXCJUaGUgdGhpcmQgb25ib2FyZGluZyBydW4gc3RyZXRjaGVzIHRoZSBwbGF5ZXJcdTIwMTlzIGVuZHVyYW5jZSB3aXRoIGxvbmdlciBwYWNpbmcsIHNhZmVyIHVwZ3JhZGUgd2luZG93cywgYW5kIGRlbnNlciBidXQgc3RpbGwgZm9yZ2l2aW5nIGVuZW15IHBhdHRlcm5zLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogNjAsXHJcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcclxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgYXNwZWN0V2lkdGg6IDksXHJcbiAgICBhc3BlY3RIZWlnaHQ6IDE2LFxyXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXHJcbiAgICBsb2dpY2FsSGVpZ2h0OiA4MDAsXHJcbiAgfSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uMi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5TLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5JLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4uLmIgfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uUy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMC43NSB9LFxyXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJKXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcImJcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgfSxcclxuICAgIGJhbGFuY2U6IHtcclxuICAgICAgZW5lbXlIcDogMS4wLFxyXG4gICAgICBlbmVteVNwZWVkOiAxLjAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDQ6IFZpb2xldCBTdXJnZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBmb3VydGggcnVuIGRvdWJsZXMgdGhlIGVuZHVyYW5jZSB0ZXN0IGFnYWluLCBhZGRpbmcgZGVuc2VyIHdhdmVzLCBiaWdnZXIgcGlja3VwIHRpbWluZyBkZWNpc2lvbnMsIGFuZCBoaWdoZXItdGllciB0b29scyB3aGlsZSBzdGF5aW5nIHJlYWRhYmxlIGFuZCBmYWlyLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMTIwLFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXHJcbiAgZW52aXJvbm1lbnQ6IHtcclxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcclxuICB9LFxyXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuLi5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uMi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcblMuLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5JLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4uLmIgfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uUy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uSy4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbkVFRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkVFRVxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5YLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYyB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuRUVFLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uRUVFXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbkVFRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkVFRVxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uWC4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG5FRUUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMC43NSB9LFxyXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJKXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgICBcIktcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5zcGxpdHRlclJpZmxlXCIsIHNwZWVkOiAwLjk1IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcIlhcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5oZXhHdWFyZFwiLCBzcGVlZDogMC45NSB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiYlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiLCBzcGVlZDogMC45IH0sXHJcbiAgICAgIFwiY1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQubmVlZGxlUmFwaWVyXCIsIHNwZWVkOiAwLjk1IH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEuMDUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xyXG4iLCAiaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgfSBmcm9tIFwiLi9UcmFjazFcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGdlbmVyYXRlZFRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgZ2VuZXJhdGVkVHJhY2szIH0gZnJvbSBcIi4vVHJhY2szXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBnZW5lcmF0ZWRUcmFjazQgfSBmcm9tIFwiLi9UcmFjazRcIjtcbi8vIFJlZ2lzdGVyIGEgdHJhY2sgYnkgaW1wb3J0aW5nIGl0IGFuZCBhZGRpbmcgb25lIGVudHJ5IGhlcmUuXG5leHBvcnQgY29uc3QgdHJhY2tzID0ge1xuIFxuICBcInRyYWNrMVwiOiBnZW5lcmF0ZWRUcmFjayxcbiAgXCJ0cmFjazJcIjogZ2VuZXJhdGVkVHJhY2syLFxuICBcInRyYWNrM1wiOiBnZW5lcmF0ZWRUcmFjazMsXG4gIFwidHJhY2s0XCI6IGdlbmVyYXRlZFRyYWNrNCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB7IGdlbmVyYXRlZFRyYWNrLCBnZW5lcmF0ZWRUcmFjazIsIGdlbmVyYXRlZFRyYWNrMywgZ2VuZXJhdGVkVHJhY2s0IH07IFxuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCB0cmFja10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLmR1cmF0aW9uU2Vjb25kcyA+IDAsIGAke2lkfSBkdXJhdGlvbiBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLnZpZXdwb3J0Lm9yaWVudGF0aW9uID09PSBcInBvcnRyYWl0XCIgJiYgdHJhY2sudmlld3BvcnQuYXNwZWN0SGVpZ2h0ID4gdHJhY2sudmlld3BvcnQuYXNwZWN0V2lkdGgsIGAke2lkfSBtdXN0IHVzZSBpdHMgZGVjbGFyZWQgcG9ydHJhaXQgdmlld3BvcnQuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2sudmlld3BvcnQubG9naWNhbFdpZHRoID4gMCAmJiB0cmFjay52aWV3cG9ydC5sb2dpY2FsSGVpZ2h0ID4gMCwgYCR7aWR9IGxvZ2ljYWwgdmlld3BvcnQgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWx5ID0gbmV3IFRyYWNrRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgVHJhY2tJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gTk9UIGZpcmUgb24gYSB0aW1lciBcdTIwMTQgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lIFx1MjAxNCBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIE5PVCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBDYW4gY29leGlzdCB3aXRoIGFuIGFjdGl2ZSBHdW4gYW5kIGFuIGFjdGl2ZSBTaGllbGQgc2ltdWx0YW5lb3VzbHkuXG4gICAqIC0gVGFyZ2V0aW5nIGlzIGxhbmUtYXdhcmUgdmlhIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpLlxuICAgKiAtIFRoZSBzbGFzaCBhbmltYXRpb24gcnVucyBmb3Igc2xhc2hEdXJhdGlvbk1zIG1pbGxpc2Vjb25kcywgdGhlbiBmYWRlcy5cbiAgICogLSBEYW1hZ2UgaXMgYXBwbGllZCBpbW1lZGlhdGVseSB3aGVuIHRoZSBzd2luZyBzdGFydHMgKG5vdCBhdCBhbmltYXRpb24gZW5kKS5cbiAgICpcbiAgICogUHJlY2VkZW5jZTogc3dvcmQgYXR0YWNrcyBvY2N1ciBhZnRlciBzaGllbGRCbG9jay9zaGllbGRQdWxzZSBidXQgYmVmb3JlXG4gICAqIHNoaWVsZENvbnRhY3REYW1hZ2UgYW5kIHNoaWVsZEF1cmEuIFNlZSBtYWluLnRzIG5lYXJQbGF5ZXJFZmZlY3RPcmRlci5cbiAgICovXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgLyoqXG4gICAgICogQXJjIEJsYWRlIFx1MjAxNCBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIEhpdHMgMVx1MjAxMzIgZW5lbWllcyBkZXBlbmRpbmcgb24gYXJjIG92ZXJsYXAuIFNob3J0IGNvb2xkb3duLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuODUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMFx1MjAxMzE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgXHUyMDE0IEhlYXZ5IHN3b3JkLiBTbG93ZXIgYnV0IGhpdHMgbXVsdGlwbGUgY2x1c3RlcmVkIGVuZW1pZXMuXG4gICAgICogV2lkZSBhcmMsIHRoaWNrZXIgc2xhc2guIEJldHRlciBhZ2FpbnN0IHRpZ2h0IGdyb3VwcyB0aGFuIGZhc3Qgc2luZ2xlcy5cbiAgICAgKi9cbiAgICBjbGVhdmVyOiB7XG4gICAgICBsYWJlbDogXCJDbGVhdmVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIHJhbmdlOiA1NixcbiAgICAgIGFyY0RlZ3JlZXM6IDExMCxcbiAgICAgIGRhbWFnZTogMi44LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjgsXG4gICAgICBtYXhUYXJnZXRzOiA0LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJjbHVzdGVyTmVhclBsYXllclwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAyMjAsXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjY1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbmQgd2lkZS4gVGhpY2tlciBhcmMuIFN0cm9uZ2VyIGltcGFjdCBmbGFzaC4gR2VvbWV0cmljIGFuZCBwcm9jZWR1cmFsIFx1MjAxNCBub3QgYSBidWxsZXQuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE5lZWRsZSBSYXBpZXIgXHUyMDE0IFByZWNpc2lvbiBzd29yZC4gTG9uZyByZWFjaCwgbmFycm93IGFyYywgc2luZ2xlIHRhcmdldC5cbiAgICAgKiBQcmlvcml0aXplcyB0aGUgbW9zdCBkYW5nZXJvdXMgKGZyb250LW1vc3QpIGVuZW15LlxuICAgICAqL1xuICAgIG5lZWRsZVJhcGllcjoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlIFJhcGllclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIHJhbmdlOiA3MCxcbiAgICAgIGFyY0RlZ3JlZXM6IDMwLFxuICAgICAgZGFtYWdlOiAyLjIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMSxcbiAgICAgIG1heFRhcmdldHM6IDEsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImZyb250TW9zdFRocmVhdFwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDAuNTUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkVsZWdhbnQgYW5kIHByZWNpc2UuIFRoaW4gc3RhYmJpbmcgbGluZS4gTm90IGEgZ3VuIHNob3QgXHUyMDE0IGl0IG11c3QgZmVlbCBtZWxlZS4gU2luZ2xlIHRhcmdldCBwcmlvcml0eS5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5yYW5nZSA+IDAsIGAke2lkfSByYW5nZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmFyY0RlZ3JlZXMgPiAwICYmIHN3b3JkLmFyY0RlZ3JlZXMgPD0gMzYwLCBgJHtpZH0gYXJjRGVncmVlcyBtdXN0IGJlIGluICgwLCAzNjBdLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZSA+IDAsIGAke2lkfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImV4cG9ydCBpbnRlcmZhY2UgU3F1YWRJbnB1dENhbGxiYWNrcyB7XG4gIGxhbmUoKTogMCB8IDE7XG4gIHNldExhbmUobGFuZTogMCB8IDEpOiB2b2lkO1xuICBzZXRBaW0odmFsdWU6IG51bWJlcik6IHZvaWQ7XG4gIHJlbGVhc2VBaW0oKTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTcXVhZElucHV0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBqb3lzdGljazogc3RyaW5nLFxuICBjYWxsYmFja3M6IFNxdWFkSW5wdXRDYWxsYmFja3MsXG4pOiB2b2lkIHtcbiAgbGV0IHBvaW50ZXJJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxldCBwb2ludGVyU3RhcnRlZFggPSAwO1xuICBsZXQgcG9pbnRlck1vdmVkID0gZmFsc2U7XG4gIGNvbnN0IGFwcGx5UG9pbnRlciA9IChjbGllbnRYOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBib3VuZHMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChjbGllbnRYIC0gYm91bmRzLmxlZnQpIC8gYm91bmRzLndpZHRoKSk7XG4gICAgY29uc3QgbGFuZTogMCB8IDEgPSBub3JtYWxpemVkIDwgLjUgPyAwIDogMTtcbiAgICBpZiAobGFuZSAhPT0gY2FsbGJhY2tzLmxhbmUoKSkgY2FsbGJhY2tzLnNldExhbmUobGFuZSk7XG4gICAgY29uc3QgbGFuZVN0YXJ0ID0gbGFuZSA9PT0gMCA/IDAgOiAuNTtcbiAgICBjb25zdCB3aXRoaW5MYW5lID0gKG5vcm1hbGl6ZWQgLSBsYW5lU3RhcnQpIC8gLjU7XG4gICAgY2FsbGJhY2tzLnNldEFpbSgod2l0aGluTGFuZSAtIC41KSAqIDIpO1xuICB9O1xuICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJhXCIgfHwgZXZlbnQua2V5ID09PSBcIkFcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIGNhbGxiYWNrcy5zZXRMYW5lKDApO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiZFwiIHx8IGV2ZW50LmtleSA9PT0gXCJEXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikgY2FsbGJhY2tzLnNldExhbmUoMSk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3Qoam95c3RpY2spIHx8IHRhcmdldC5jbG9zZXN0KFwiYnV0dG9uLGlucHV0LHNlbGVjdCxhXCIpKSByZXR1cm47XG4gICAgcG9pbnRlcklkID0gZXZlbnQucG9pbnRlcklkO1xuICAgIHBvaW50ZXJTdGFydGVkWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgcG9pbnRlck1vdmVkID0gZmFsc2U7XG4gICAgY29udGFpbmVyLnNldFBvaW50ZXJDYXB0dXJlPy4ocG9pbnRlcklkKTtcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBwb2ludGVyTW92ZWQgfHw9IE1hdGguYWJzKGV2ZW50LmNsaWVudFggLSBwb2ludGVyU3RhcnRlZFgpID4gMztcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb25zdCBlbmRQb2ludGVyID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBpZiAoIXBvaW50ZXJNb3ZlZCkgYXBwbHlQb2ludGVyKGV2ZW50LmNsaWVudFgpO1xuICAgIHBvaW50ZXJJZCA9IG51bGw7XG4gICAgY2FsbGJhY2tzLnJlbGVhc2VBaW0oKTtcbiAgfTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgZW5kUG9pbnRlcik7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb3N0cG9pbnRlcmNhcHR1cmVcIiwgKCkgPT4ge1xuICAgIHBvaW50ZXJJZCA9IG51bGw7XG4gICAgY2FsbGJhY2tzLnJlbGVhc2VBaW0oKTtcbiAgfSk7XG4gIGlmIChtYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oam95c3RpY2spO1xuICAgIGNvbnN0IGtub2IgPSBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi5zdGljay1rbm9iXCIpO1xuICAgIGxldCBqb3lzdGlja1BvaW50ZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGFwcGx5Sm95c3RpY2sgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICBjb25zdCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcmFkaXVzID0gYm91bmRzLndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IHJhdyA9IChldmVudC5jbGllbnRYIC0gKGJvdW5kcy5sZWZ0ICsgcmFkaXVzKSkgLyByYWRpdXM7XG4gICAgICBjb25zdCB4ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHJhdykpO1xuICAgICAgaWYgKGtub2IpIGtub2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3ggKiByYWRpdXMgKiAuNjJ9cHgpLC01MCUpYDtcbiAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguYWJzKHgpO1xuICAgICAgaWYgKG1hZ25pdHVkZSA+PSAuOTUpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkOiAwIHwgMSA9IHggPCAwID8gMCA6IDE7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWQgIT09IGNhbGxiYWNrcy5sYW5lKCkpIGNhbGxiYWNrcy5zZXRMYW5lKHJlcXVlc3RlZCk7XG4gICAgICAgIGNhbGxiYWNrcy5zZXRBaW0oMCk7XG4gICAgICB9IGVsc2UgaWYgKG1hZ25pdHVkZSA8PSAuNSkgY2FsbGJhY2tzLnNldEFpbSh4IC8gLjUpO1xuICAgICAgZWxzZSBjYWxsYmFja3Muc2V0QWltKE1hdGguc2lnbih4KSk7XG4gICAgfTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBqb3lzdGlja1BvaW50ZXIgPSBldmVudC5wb2ludGVySWQ7XG4gICAgICBlbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG4gICAgICBhcHBseUpveXN0aWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnBvaW50ZXJJZCA9PT0gam95c3RpY2tQb2ludGVyKSBhcHBseUpveXN0aWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgICBjb25zdCBlbmRKb3lzdGljayA9IChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBqb3lzdGlja1BvaW50ZXIpIHJldHVybjtcbiAgICAgIGpveXN0aWNrUG9pbnRlciA9IG51bGw7XG4gICAgICBpZiAoa25vYikga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLC01MCUpXCI7XG4gICAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICAgIH07XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRKb3lzdGljayk7XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgZW5kSm95c3RpY2spO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uL011bHRpcGxpZXJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcXVhZFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICByb3c6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFkTW9kZWwge1xuICBsYW5lOiAwIHwgMSA9IDA7XG4gIGNvdW50ID0gMTtcbiAgYWltT2Zmc2V0ID0gMDtcbiAgeCA9IDA7XG4gIHRhcmdldFggPSAwO1xuICBsYW5lU2hpZnRTdGFydGVkQXQgPSAwO1xuXG4gIGFkZChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWluKHNwZWMubWF4U3F1YWRTaXplLCB0aGlzLmNvdW50ICsgYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHJlbW92ZShhbW91bnQgPSAxKTogbnVtYmVyIHtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoMCwgdGhpcy5jb3VudCAtIGFtb3VudCk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBzZXRMYW5lKGxhbmU6IDAgfCAxLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlciwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobGFuZSAhPT0gdGhpcy5sYW5lKSB7XG4gICAgICB0aGlzLmxhbmVTaGlmdFN0YXJ0ZWRBdCA9IG5vdztcbiAgICAgIC8vIFJlc2V0IGFpbSBvZmZzZXQgc28gdGhlIHBsYXllciBzbmFwcyB0byB0aGUgY29ycmVjdCBjb2x1bW4gaW4gdGhlIG5ldyBsYW5lLlxuICAgICAgdGhpcy5haW1PZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLmxhbmUgPSBsYW5lO1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIobGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHNldEFpbShub3JtYWxpemVkOiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWltT2Zmc2V0ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIG5vcm1hbGl6ZWQpKSAqIGxhbmVXaWR0aCAqIC4yODtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIGF1dG9BaW0odGFyZ2V0T2Zmc2V0OiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIC8vIEhpZ2ggbGVycCBmYWN0b3IgKDAuODUpIHNvIGF1dG8tYWltIHNuYXBzIGFsbW9zdCBpbnN0YW50YW5lb3VzbHkgZWFjaCBmcmFtZS5cbiAgICB0aGlzLmFpbU9mZnNldCArPSAoTWF0aC5tYXgoLWxhbmVXaWR0aCAqIC4yOCwgTWF0aC5taW4obGFuZVdpZHRoICogLjI4LCB0YXJnZXRPZmZzZXQpKSAtIHRoaXMuYWltT2Zmc2V0KSAqIC44NTtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gMSAtIE1hdGgucG93KC4wMDAwOCwgZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLnggKz0gKHRoaXMudGFyZ2V0WCAtIHRoaXMueCkgKiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKiBYIG9mZnNldHMgb2YgZWFjaCBjb2x1bW4gaW4gdGhlIGZyb250IHJvdywgcmVsYXRpdmUgdG8gc3F1YWQgY2VudGVyLiAqL1xuICBmcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sIChfLCBjb2wpID0+XG4gICAgICAoY29sIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICk7XG4gIH1cblxuICBwb2ludHMoYmFzZVk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFNxdWFkUG9pbnRbXSB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgY29uc3QgcG9pbnRzOiBTcXVhZFBvaW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCAtIHJvdyAqIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpbmRleCAlIHNwZWMubWVtYmVyc1BlclJvdztcbiAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgeDogdGhpcy54ICsgKGNvbHVtbiAtIChyb3dDb3VudCAtIDEpIC8gMikgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgeTogYmFzZVkgKyByb3cgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQXV0b0FpbVRhcmdldCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9BaW1Db250cm9sU3RhdGUge1xuICBtYW51YWwgPSBmYWxzZTtcblxuICBsYW5lU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgLy8gTGFuZSBjaGFuZ2VzIGFyZSBuYXZpZ2F0aW9uLCBub3QgcGVyc2lzdGVudCBtYW51YWwgYWltaW5nLlxuICB9XG5cbiAgYWltQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gIH1cblxuICBhaW1SZWxlYXNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YWQtY2VudGVyIGFpbSBvZmZzZXQgKHJlbGF0aXZlIHRvIGxhbmVDZW50ZXIpIHRoYXQgYmVzdCBhbGlnbnNcbiAqIG9uZSBvZiB0aGUgc3F1YWQncyBmcm9udC1yb3cgY29sdW1ucyB0byB0aGUgbmVhcmVzdCBlbmVteS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0cyAgICAgICAgIEFsbCBsaXZlIChub24tZHlpbmcpIGVuZW1pZXMgaW4gdGhlIGN1cnJlbnQgbGFuZS5cbiAqIEBwYXJhbSBsYW5lQ2VudGVyICAgICAgUGl4ZWwgWCBvZiB0aGUgbGFuZSdzIGNlbnRlci5cbiAqIEBwYXJhbSBjb2x1bW5PZmZzZXRzICAgWCBvZmZzZXRzIG9mIGVhY2ggZnJvbnQtcm93IGNvbHVtbiByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuXG4gKiBAcGFyYW0gY3VycmVudE9mZnNldCAgIEN1cnJlbnQgc3F1YWQgYWltIG9mZnNldCAoc3F1YWQgY2VudGVyID0gbGFuZUNlbnRlciArIGN1cnJlbnRPZmZzZXQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QXV0b0FpbU9mZnNldChcbiAgdGFyZ2V0czogcmVhZG9ubHkgQXV0b0FpbVRhcmdldFtdLFxuICBsYW5lQ2VudGVyOiBudW1iZXIsXG4gIGNvbHVtbk9mZnNldHM6IHJlYWRvbmx5IG51bWJlcltdLFxuICBjdXJyZW50T2Zmc2V0ID0gMCxcbik6IG51bWJlciB7XG4gIGlmICghdGFyZ2V0cy5sZW5ndGgpIHJldHVybiAwO1xuXG4gIC8vIElkZW50aWZ5IHRoZSBmcm9udCByb3c6IGdyb3VwIHRhcmdldHMgYnkgcm93SWQgKG9yIHRyZWF0IHVuZ3JvdXBlZCB0YXJnZXRzIGFzIGEgc2luZ2xlIHJvdykuXG4gIGNvbnN0IGV4cGxpY2l0Um93cyA9IG5ldyBNYXA8bnVtYmVyLCBBdXRvQWltVGFyZ2V0W10+KCk7XG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0LnJvd0lkID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJvdyA9IGV4cGxpY2l0Um93cy5nZXQodGFyZ2V0LnJvd0lkKSA/PyBbXTtcbiAgICByb3cucHVzaCh0YXJnZXQpO1xuICAgIGV4cGxpY2l0Um93cy5zZXQodGFyZ2V0LnJvd0lkLCByb3cpO1xuICB9XG4gIGNvbnN0IGZyb250Um93ID0gZXhwbGljaXRSb3dzLnNpemVcbiAgICA/IFsuLi5leHBsaWNpdFJvd3MudmFsdWVzKCldLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PlxuICAgICAgICBNYXRoLm1heCguLi5yaWdodC5tYXAodCA9PiB0LnkpKSAtIE1hdGgubWF4KC4uLmxlZnQubWFwKHQgPT4gdC55KSkpWzBdXG4gICAgOiB0YXJnZXRzLmZpbHRlcih0ID0+IE1hdGguYWJzKHQueSAtIE1hdGgubWF4KC4uLnRhcmdldHMubWFwKGMgPT4gYy55KSkpIDwgMyk7XG5cbiAgLy8gRm9yIGVhY2ggZW5lbXkgaW4gdGhlIGZyb250IHJvdyBcdTAwRDcgZWFjaCBzcXVhZCBjb2x1bW4sIGNvbXB1dGUgdGhlIHNxdWFkLWNlbnRlclxuICAvLyBvZmZzZXQgdGhhdCB3b3VsZCBwbGFjZSB0aGF0IGNvbHVtbiBleGFjdGx5IG9uIHRoYXQgZW5lbXkncyBYLlxuICAvLyBQaWNrIHRoZSAoZW5lbXksIGNvbHVtbikgcGFpciB3aG9zZSByZXF1aXJlZCBvZmZzZXQgaXMgY2xvc2VzdCB0byB0aGUgY3VycmVudFxuICAvLyBvZmZzZXQgXHUyMDE0IG1pbmltaXNpbmcgdGhlIGFpbSBtb3ZlbWVudCBuZWVkZWQgd2hpbGUgZ3VhcmFudGVlaW5nIGEgaGl0LlxuICBjb25zdCBjb2xzID0gY29sdW1uT2Zmc2V0cy5sZW5ndGggPiAwID8gY29sdW1uT2Zmc2V0cyA6IFswXTtcbiAgbGV0IGJlc3RPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IGVuZW15IG9mIGZyb250Um93KSB7XG4gICAgZm9yIChjb25zdCBjb2xPZmZzZXQgb2YgY29scykge1xuICAgICAgLy8gc3F1YWRDZW50ZXIgPSBsYW5lQ2VudGVyICsgYWltT2Zmc2V0IFx1MjE5MiBjb2x1bW4gbGFuZHMgYXQgbGFuZUNlbnRlciArIGFpbU9mZnNldCArIGNvbE9mZnNldFxuICAgICAgLy8gV2Ugd2FudCB0aGF0IHRvIGVxdWFsIGVuZW15LnggXHUyMTkyIGFpbU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0XG4gICAgICBjb25zdCBjYW5kaWRhdGVPZmZzZXQgPSBlbmVteS54IC0gbGFuZUNlbnRlciAtIGNvbE9mZnNldDtcbiAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhjYW5kaWRhdGVPZmZzZXQgLSBjdXJyZW50T2Zmc2V0KTtcbiAgICAgIGlmIChkaXN0IDwgYmVzdERpc3QpIHtcbiAgICAgICAgYmVzdERpc3QgPSBkaXN0O1xuICAgICAgICBiZXN0T2Zmc2V0ID0gY2FuZGlkYXRlT2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiZXN0T2Zmc2V0O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSwgTmVvblRvcERvd25DbG91ZEJ1cnN0LCBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIGFzcGVjdFdpZHRoOiBudW1iZXI7XG4gIGFzcGVjdEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RlZFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBsYXllclk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDE3MCxcbiAgbG9va0FuZ2xlRGVncmVlczogMjAsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyNTUsXG4gIHpvb206IC43MyxcbiAgaG9yaXpvbjogLjU0LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIGNsb3VkczogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBQcm9qZWN0ZWRTY2VuZSB7XG4gIGNvbnN0IHByb2plY3RQb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCk7XG5cbiAgY29uc3QgcHJvamVjdGVkUHJpbWl0aXZlcyA9IHByaW1pdGl2ZXMubWFwKHByaW1pdGl2ZSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZS5zaGFwZSA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uID8/IDA7XG4gICAgICBjb25zdCBoYWxmTGVuZ3RoID0gcHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGg7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBzdGFydCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCAtIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSAtIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgY29uc3QgZHkgPSBlbmQueSAtIHN0YXJ0Lnk7XG4gICAgICBjb25zdCBzY2FsZSA9IChzdGFydC5zY2FsZSArIGVuZC5zY2FsZSkgKiAuNTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgICAgeDogKHN0YXJ0LnggKyBlbmQueCkgLyAyLFxuICAgICAgICB5OiAoc3RhcnQueSArIGVuZC55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBwcmltaXRpdmUud2lkdGggKiBzY2FsZSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLngsIHByaW1pdGl2ZS55KTtcbiAgICBjb25zdCB3aWR0aCA9IHByaW1pdGl2ZS53aWR0aCAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IGhlaWdodCA9IChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCkgKiBwb2ludC5zY2FsZTtcbiAgICBsZXQgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb247XG4gICAgaWYgKHJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGF4aXNMZW5ndGggPSBNYXRoLm1heChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCwgcHJpbWl0aXZlLndpZHRoLCAxKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBheGlzTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBheGlzTGVuZ3RoKTtcbiAgICAgIHJvdGF0aW9uID0gTWF0aC5hdGFuMihwb2ludC54IC0gZW5kLngsIGVuZC55IC0gcG9pbnQueSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcm90YXRpb24sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdGVkU2hhcGVzID0gc2hhcGVzXG4gICAgLm1hcChzaGFwZSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNoYXBlLFxuICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICBzaXplOiBzaGFwZS5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgICAgIHo6IChzaGFwZS56ID8/IDApIC0gcG9pbnQuZGVwdGggKiAuMDAwOCxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gKChiLnogPz8gMCkgLSAoYS56ID8/IDApKSk7XG5cbiAgY29uc3QgcHJvamVjdGVkQ2xvdWRzID0gY2xvdWRzLm1hcChjbG91ZCA9PiB7XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoY2xvdWQueCwgY2xvdWQueSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICBzaXplOiBjbG91ZC5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlczogcHJvamVjdGVkUHJpbWl0aXZlcywgY2xvdWRzOiBwcm9qZWN0ZWRDbG91ZHMsIHNoYXBlczogcHJvamVjdGVkU2hhcGVzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50KFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSB7XG4gIHJldHVybiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0KSB7XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgbWluRGVwdGggPSAyMDtcblxuICByZXR1cm4gKHg6IG51bWJlciwgeTogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgZGVwdGg6IG51bWJlciB9ID0+IHtcbiAgICBjb25zdCB3b3JsZFggPSB4IC0gY2VudGVyWDtcbiAgICBjb25zdCB3b3JsZFogPSB2aWV3cG9ydC5wbGF5ZXJZIC0geSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlO1xuICAgIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gICAgY29uc3QgY2FtZXJhWSA9IHJlbGF0aXZlWSAqIGNvcyArIHdvcmxkWiAqIHNpbjtcbiAgICBjb25zdCBjYW1lcmFaID0gTWF0aC5tYXgobWluRGVwdGgsIHdvcmxkWiAqIGNvcyAtIHJlbGF0aXZlWSAqIHNpbik7XG4gICAgY29uc3Qgc2NhbGUgPSBmb2NhbExlbmd0aCAvIGNhbWVyYVo7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyB3b3JsZFggKiBzY2FsZSxcbiAgICAgIHk6IGhvcml6b25ZIC0gY2FtZXJhWSAqIHNjYWxlLFxuICAgICAgc2NhbGUsXG4gICAgICBkZXB0aDogY2FtZXJhWixcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29ybGRZRm9yUHJvamVjdGVkWShcbiAgc2NyZWVuWTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogeyBoZWlnaHQ6IG51bWJlcjsgcGxheWVyWTogbnVtYmVyIH0sXG4pOiBudW1iZXIge1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gIGNvbnN0IHNjcmVlblJhdGlvID0gKGhvcml6b25ZIC0gc2NyZWVuWSkgLyBmb2NhbExlbmd0aDtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBzaW4gLSBzY3JlZW5SYXRpbyAqIGNvcztcbiAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IC4wMDAxKSByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIGNvbnN0IHdvcmxkWiA9IC1yZWxhdGl2ZVkgKiAoY29zICsgc2NyZWVuUmF0aW8gKiBzaW4pIC8gZGVub21pbmF0b3I7XG4gIHJldHVybiB2aWV3cG9ydC5wbGF5ZXJZICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2UgLSB3b3JsZFo7XG59XG4iLCAiaW1wb3J0IHsgZ2V0TmVvblNoYXBlLCBOZW9uU2hhcGVBY3RvciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSwgdHlwZSBOZW9uU2hhcGVMYWJlbCwgdHlwZSBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBjb25zdCBzd2FybVNoYXBlcyA9IHtcbiAgcGxheWVyOiBnZXROZW9uU2hhcGUoXCJhcnJvdy1jbGFzc2ljXCIpISxcbiAgZW5lbXk6IGdldE5lb25TaGFwZShcImh1bnRlci1leWVcIikhLFxuICBtdWx0aXBsaWVyOiBnZXROZW9uU2hhcGUoXCJicnVpc2VyLWNyb3NzXCIpISxcbiAgZ3VuUGlja3VwOiBnZXROZW9uU2hhcGUoXCJoZXgtZmlnaHRlclwiKSEsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgcGl4ZWxzVG9TaGFwZVdvcmxkID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiAoe1xuICB4OiAoeCAvIGNhbnZhcy53aWR0aCAtIC41KSAqIChjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbiAgeTogKC41IC0geSAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxufSk7XG5cbmV4cG9ydCBjb25zdCBwaXhlbFNpemVUb1NoYXBlU2NhbGUgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcGl4ZWxzOiBudW1iZXIpID0+IHBpeGVscyAvIGNhbnZhcy5oZWlnaHQgKiAyLjU7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RvckF0UGl4ZWxzKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHBpeGVsU2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIGNvbnN0IHdvcmxkID0gcGl4ZWxzVG9TaGFwZVdvcmxkKGNhbnZhcywgeCwgeSk7XG4gIGFjdG9yLm1vdmVUbyh3b3JsZC54LCB3b3JsZC55KTtcbiAgYWN0b3Iuc2NhbGUgPSBwaXhlbFNpemVUb1NoYXBlU2NhbGUoY2FudmFzLCBwaXhlbFNpemUpO1xuICByZXR1cm4gYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdG9ySW5Ub3BEb3duU2NlbmUgPSAoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uVG9wRG93blNoYXBlID0+XG4gICh7IC4uLmFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyksIHgsIHksIHNpemUgfSk7XG5cbmV4cG9ydCBjb25zdCBzaGFwZUxhYmVsID0gKHRleHQ6IHN0cmluZywgcG9zaXRpb246IE5lb25TaGFwZUxhYmVsW1wicG9zaXRpb25cIl0sIGZvbnRTaXplOiBudW1iZXIsIG9mZnNldCA9IDQpOiBOZW9uU2hhcGVMYWJlbCA9PlxuICAoeyB0ZXh0LCBwb3NpdGlvbiwgZm9udFNpemUsIG9mZnNldCwgZm9udEZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLCBmb250V2VpZ2h0OiA3MDAgfSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlczogbnVtYmVyKTogbnVtYmVyID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuY29uc3QgcGxheWVyRm9yd2FyZFJvdGF0aW9uID0ge1xuICByb3RhdGlvblg6IGRlZ3JlZXNUb1JhZGlhbnMoLTUyKSxcbiAgcm90YXRpb25ZOiBkZWdyZWVzVG9SYWRpYW5zKC0xKSxcbiAgcm90YXRpb25aOiBkZWdyZWVzVG9SYWRpYW5zKDEpLFxufTtcbmNvbnN0IHNjcmVlbkZvcndhcmRZYXcgPSAoZGlyZWN0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBudW1iZXIgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoZGlyZWN0aW9uLnggLyBsZW5ndGgsIC1kaXJlY3Rpb24ueSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgdHlwZSBBY3RvclZpc3VhbFJvbGUgPVxuICB8IFwiZ3JvdW5kRm9yd2FyZFwiXG4gIHwgXCJzY3JlZW5CaWxsYm9hcmRcIlxuICB8IFwidHVtYmxpbmdCaWxsYm9hcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCB7XG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbm93OiBudW1iZXI7XG4gIHBoYXNlPzogbnVtYmVyO1xuICBmYWNpbmc/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rvck9yaWVudGF0aW9uKHJvbGU6IEFjdG9yVmlzdWFsUm9sZSwgY29udGV4dDogQWN0b3JPcmllbnRhdGlvbkNvbnRleHQpOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHN3aXRjaCAocm9sZSkge1xuICAgIGNhc2UgXCJncm91bmRGb3J3YXJkXCI6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBsYXllckZvcndhcmRSb3RhdGlvbixcbiAgICAgICAgcm90YXRpb25YOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25YICsgTWF0aC5zaW4oY29udGV4dC5ub3cgLyA2NTAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMDYsXG4gICAgICAgIHJvdGF0aW9uWTogcGxheWVyRm9yd2FyZFJvdGF0aW9uLnJvdGF0aW9uWSArIChjb250ZXh0LmZhY2luZyA/IHNjcmVlbkZvcndhcmRZYXcoY29udGV4dC5mYWNpbmcpIDogMCksXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFwidHVtYmxpbmdCaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdGF0aW9uWTogTWF0aC5zaW4oY29udGV4dC5ub3cgLyA3MDAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMTgsXG4gICAgICB9O1xuICAgIGNhc2UgXCJzY3JlZW5CaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVsaWNvcHRlclZpZXdwb3J0Rm9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwbGF5ZXJZOiBudW1iZXIpOiBIZWxpY29wdGVyVmlld3BvcnQge1xuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBwbGF5ZXJZIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcImdyb3VuZEZvcndhcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICAgIHBoYXNlLFxuICAgIGZhY2luZzogeyB4OiAwLCB5OiAtMSB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15T3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHBoYXNlID0gMCxcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJ0dW1ibGluZ0JpbGxib2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmlsbGJvYXJkT3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwic2NyZWVuQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgfSk7XG59XG4iLCAiLyoqXG4gKiBTd29yZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHN3b3JkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZSB0aWNrIGZ1bmN0aW9uIG9ubHkgdHJpZ2dlcnMgYSBzd2luZ1xuICogd2hlbiBhIHZhbGlkIHRhcmdldCBleGlzdHMgaW4gcmFuZ2UgYW5kIHRoZSBjb29sZG93biBpcyByZWFkeS4gSXQgaWRsZXMgc2lsZW50bHlcbiAqIHdoZW4gbm8gdGFyZ2V0IGlzIHByZXNlbnQuXG4gKlxuICogRGVzaWduIHJ1bGU6IHNhbWUgYXMgc2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBubyBkaXJlY3QgZW5lbXkgbXV0YXRpb24uIFJldHVybnMgYVxuICogU3dvcmRUaWNrUmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5cbmltcG9ydCB0eXBlIHsgU3dvcmRJZCwgU3dvcmRNZW1iZXIsIFN3b3JkVGFyZ2V0aW5nTW9kZSB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgdHlwZSB7IE5lYXJieVRocmVhdCB9IGZyb20gXCIuL25lYXJieVRocmVhdFF1ZXJ5XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWN0aXZlIHNsYXNoIGFuaW1hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlU2xhc2hBbmltYXRpb24ge1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEuIERyaXZlbiBieSAobm93IC0gc3RhcnRlZEF0KSAvIGR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeCAoc25hcHNob3Qgb2YgcGxheWVyIHBvc2l0aW9uIHdoZW4gc3dpbmcgb2NjdXJyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgLyoqIFJlYWNoIG9mIHRoZSBhcmMgaW4gcGl4ZWxzLiAqL1xuICByZWFjaDogbnVtYmVyO1xuICAvKiogQXJjIHdpZHRoIGluIGRlZ3JlZXMuICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIENvbG9yLiAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKiogVGhpY2tuZXNzIG11bHRpcGxpZXIuICovXG4gIHRoaWNrbmVzczogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFN3b3JkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkU3RhdGUge1xuICBzd29yZElkOiBTd29yZElkO1xuICAvKiogU2Vjb25kcyByZW1haW5pbmcgdW50aWwgdGhlIHN3b3JkIGNhbiBzd2luZyBhZ2Fpbi4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgc2xhc2ggYW5pbWF0aW9uLCBpZiBhbnkuICovXG4gIGFjdGl2ZVNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc3dvcmRJZDogU3dvcmRJZCkge1xuICAgIHRoaXMuc3dvcmRJZCA9IHN3b3JkSWQ7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSAwO1xuICAgIHRoaXMuYWN0aXZlU2xhc2ggPSBudWxsO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgaGl0IGJ5IHRoZSBzd2luZyB0aGlzIGZyYW1lLiBFbXB0eSBpZiBubyBzd2luZyBvY2N1cnJlZC4gKi9cbiAgaGl0RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogRGFtYWdlIHRvIGFwcGx5IHRvIGVhY2ggaGl0IGVuZW15LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgYSBuZXcgc2xhc2ggd2FzIHRyaWdnZXJlZCB0aGlzIGZyYW1lIChmb3IgYXVkaW8sIGV0Yy4pLiAqL1xuICBzd2luZ1RyaWdnZXJlZDogYm9vbGVhbjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUYXJnZXRpbmcgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldHMoXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBtb2RlOiBTd29yZFRhcmdldGluZ01vZGUsXG4gIG1heFRhcmdldHM6IG51bWJlcixcbik6IE5lYXJieVRocmVhdFtdIHtcbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCI6XG4gICAgY2FzZSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIjpcbiAgICAgIC8vIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIGFscmVhZHkgcmV0dXJucyBzb3J0ZWQgYnkgZGlzdGFuY2VcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgY2FzZSBcImZyb250TW9zdFRocmVhdFwiOlxuICAgICAgLy8gSGlnaGVzdCB5ID0gbW9zdCBhZHZhbmNlZCB0b3dhcmQgcGxheWVyXG4gICAgICByZXR1cm4gWy4uLnRocmVhdHNdLnNvcnQoKGEsIGIpID0+IGIudGFyZ2V0LnkgLSBhLnRhcmdldC55KS5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJjbHVzdGVyTmVhclBsYXllclwiOlxuICAgICAgLy8gQWxyZWFkeSBzb3J0ZWQgYnkgZGlzdGFuY2UgXHUyMDE0IHRha2UgbmVhcmVzdCBjbHVzdGVyXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIERyaXZlcyB0aGUgc3dvcmQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgTXV0YWJsZSBzd29yZCBzdGF0ZS5cbiAqIEBwYXJhbSBzd29yZCAgICAgSW1tdXRhYmxlIHN3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgIE5lYXJieSB0aHJlYXRzIGluIHJhbmdlIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gKiBAcGFyYW0gcGxheWVyWCAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4LlxuICogQHBhcmFtIHBsYXllclkgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgVGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIGNvbG9yICAgICBSZXNvbHZlZCBoZXggY29sb3IgKGZyb20gbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTd29yZChcbiAgc3RhdGU6IFN3b3JkU3RhdGUsXG4gIHN3b3JkOiBTd29yZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbik6IFN3b3JkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU3dvcmRUaWNrUmVzdWx0ID0ge1xuICAgIGhpdEVuZW15SWRzOiBbXSxcbiAgICBkYW1hZ2U6IDAsXG4gICAgc3dpbmdUcmlnZ2VyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIC8vIEFkdmFuY2UgY29vbGRvd25cbiAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdCA+IDApIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWF4KDAsIHN0YXRlLmNvb2xkb3duTGVmdCAtIGRlbHRhKTtcblxuICAvLyBBZHZhbmNlIGFjdGl2ZSBzbGFzaCBhbmltYXRpb25cbiAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoKSB7XG4gICAgc3RhdGUuYWN0aXZlU2xhc2gucHJvZ3Jlc3MgPSAobm93IC0gc3RhdGUuYWN0aXZlU2xhc2guc3RhcnRlZEF0KSAvIHN0YXRlLmFjdGl2ZVNsYXNoLmR1cmF0aW9uTXM7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoLnByb2dyZXNzID49IDEpIHN0YXRlLmFjdGl2ZVNsYXNoID0gbnVsbDtcbiAgfVxuXG4gIC8vIFN3b3JkcyBvbmx5IHN3aW5nIHdoZW4gYSB0YXJnZXQgZXhpc3RzIGluIHJhbmdlIEFORCBjb29sZG93biBpcyByZWFkeS5cbiAgLy8gVGhpcyBpcyB0aGUga2V5IGRpZmZlcmVuY2UgZnJvbSBndW5zLCB3aGljaCBmaXJlIG9uIGEgcGVyaW9kIHJlZ2FyZGxlc3MuXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwIHx8IHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIFNlbGVjdCB0YXJnZXRzXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0VGFyZ2V0cyh0aHJlYXRzLCBzd29yZC50YXJnZXRpbmdNb2RlLCBzd29yZC5tYXhUYXJnZXRzKTtcbiAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBUcmlnZ2VyIHN3aW5nXG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHN3b3JkLmNvb2xkb3duU2Vjb25kcztcbiAgcmVzdWx0LnN3aW5nVHJpZ2dlcmVkID0gdHJ1ZTtcbiAgcmVzdWx0LmRhbWFnZSA9IHN3b3JkLmRhbWFnZTtcbiAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHNlbGVjdGVkKSByZXN1bHQuaGl0RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuXG4gIC8vIFN0YXJ0IHNsYXNoIGFuaW1hdGlvblxuICBzdGF0ZS5hY3RpdmVTbGFzaCA9IHtcbiAgICBwcm9ncmVzczogMCxcbiAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICBkdXJhdGlvbk1zOiBzd29yZC5zbGFzaER1cmF0aW9uTXMsXG4gICAgeDogcGxheWVyWCxcbiAgICB5OiBwbGF5ZXJZLFxuICAgIHJlYWNoOiBzd29yZC5yYW5nZSAqIDAuNzUsIC8vIEFyYyByZWFjaCBpcyBhIGZyYWN0aW9uIG9mIGRldGVjdGlvbiByYW5nZVxuICAgIGFyY0RlZ3JlZXM6IHN3b3JkLmFyY0RlZ3JlZXMsXG4gICAgY29sb3IsXG4gICAgdGhpY2tuZXNzOiBzd29yZC5zbGFzaFRoaWNrbmVzcyxcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwgIi8qKlxuICogTmVhcmJ5VGhyZWF0UXVlcnkgXHUyMDE0IHNoYXJlZCBsYW5lLWF3YXJlIGVuZW15IHF1ZXJ5IGZvciBzaGllbGQgYW5kIHN3b3JkIGZhbWlsaWVzLlxuICpcbiAqIEJvdGggc2hpZWxkcyBhbmQgc3dvcmRzIG9wZXJhdGUgbmVhciB0aGUgcGxheWVyLCBzbyB0aGV5IHNoYXJlIHRoaXMgbW9kdWxlXG4gKiB0byBhdm9pZCBpbmRlcGVuZGVudCwgcG90ZW50aWFsbHkgY29uZmxpY3Rpbmcgc2NhbnMuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgaW50ZW50aW9uYWxseSBtaW5pbWFsLiBJdCBwcm92aWRlcyBlbm91Z2ggc3RydWN0dXJlIHRvIGJlXG4gKiBmdXR1cmUtZnJpZW5kbHkgKG9yaWdpblNoYXBlIGluZGV4LCBjb2x1bW4tYmFuZCBhd2FyZW5lc3MpIHdpdGhvdXRcbiAqIG92ZXItYnVpbGRpbmcuIEV4dGVuZCB3aGVuIG5lZWRlZCBcdTIwMTQgZG8gbm90IHJlZmFjdG9yIHByZW1hdHVyZWx5LlxuICpcbiAqIE5lYXItcGxheWVyIGVmZmVjdCBwcmVjZWRlbmNlIChhcHBsaWVkIGJ5IG1haW4udHMpOlxuICogICAxLiBzaGllbGRCbG9jayAgICAgICAgXHUyMDE0IGNoYXJnZS1iYXNlZCBoaXQgYWJzb3JwdGlvblxuICogICAyLiBzaGllbGRQdWxzZSAgICAgICAgXHUyMDE0IGVtZXJnZW5jeSBwdXNoXG4gKiAgIDMuIHN3b3JkQXR0YWNrICAgICAgICBcdTIwMTQgc3dvcmQgZmFtaWx5XG4gKiAgIDQuIHNoaWVsZENvbnRhY3REYW1hZ2UgXHUyMDE0IGNvbnRhY3QgZGFtYWdlIG9uIHNoaWVsZCBlZGdlXG4gKiAgIDUuIHNoaWVsZEF1cmEgICAgICAgICBcdTIwMTQgc2xvdy9kZWJ1ZmYgYXVyYVxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogTWluaW1hbCBlbmVteSBpbnRlcmZhY2UgZXhwZWN0ZWQgYnkgdGhlIHRocmVhdCBxdWVyeSBzeXN0ZW0uICovXG5leHBvcnQgaW50ZXJmYWNlIFRocmVhdFRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IDAgfCAxO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgU2hpZWxkTWVtYmVyLCBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5VmlzdWFsU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5jb25zdCBlbXB0eVNjZW5lID0gKCk6IEZhbWlseVZpc3VhbFNjZW5lID0+ICh7IHByaW1pdGl2ZXM6IFtdLCBzaGFwZXM6IFtdIH0pO1xuY29uc3QgcmVxdWlyZWRTaGFwZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7aWR9XCIgaXMgcmVxdWlyZWQgYnkgZmFtaWx5IHZpc3VhbHMuYCk7XG4gIHJldHVybiBzaGFwZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFNoaWVsZE1lbWJlcjtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgaW5pdGlhbFN0cmVuZ3RoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGhpdFByb2dyZXNzPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWVsZFZpc3VhbHMob3B0aW9uczogU2hpZWxkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGNvbnN0IHtcbiAgICBkZWZpbml0aW9uLCB4LCB5LCBub3csXG4gICAgc2NhbGUgPSAxLFxuICAgIGhpdFByb2dyZXNzID0gMSxcbiAgICB2aXNpYmxlID0gdHJ1ZSxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0cmVuZ3RoID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5zdHJlbmd0aCk7XG4gIGNvbnN0IGluaXRpYWxTdHJlbmd0aCA9IE1hdGgubWF4KDEsIG9wdGlvbnMuaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgaW1wYWN0ID0gTWF0aC5tYXgoMCwgMSAtIGhpdFByb2dyZXNzKTtcbiAgY29uc3QgZXhwbG9kaW5nID0gc3RyZW5ndGggPD0gMCAmJiBoaXRQcm9ncmVzcyA8IDE7XG4gIGNvbnN0IGNvbG9yID0gbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl07XG4gIGNvbnN0IHJhZGl1cyA9IGRlZmluaXRpb24ucmFkaXVzICogc2NhbGU7XG5cbiAgaWYgKHZpc2libGUgfHwgZXhwbG9kaW5nKSB7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzaGllbGQtcmluZ1wiKSxcbiAgICAgIHgsIHksXG4gICAgICBzaXplOiByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEgKyBpbXBhY3QgKiAuOCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMTUgKyBpbXBhY3QgKiAxLjUsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQyICsgaW1wYWN0ICogLjMsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4xNSArIGltcGFjdCAqIDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiAuNSArIGltcGFjdCAqIC4zNSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogZXhwbG9kaW5nID8gTWF0aC5taW4oMSwgaGl0UHJvZ3Jlc3MpIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IC45LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IG9yYml0ZXJTaGFwZSA9IHJlcXVpcmVkU2hhcGUoZGVmaW5pdGlvbi5vcmJpdGVyU2hhcGUgPT09IFwiaGV4XCIgPyBcImhleC1maWdodGVyXCIgOiBcInN0YXItY29yZVwiKTtcbiAgY29uc3Qgb3JiaXRlckNvdW50ID0gTWF0aC5jZWlsKGRlZmluaXRpb24ub3JiaXRlckNvdW50ICogc3RyZW5ndGggLyBpbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJICogMiAvIGRlZmluaXRpb24ub3JiaXRlckNvdW50O1xuICBjb25zdCBiYXNlQW5nbGUgPSBub3cgLyAxMDAwICogZGVmaW5pdGlvbi5vcmJpdGVyU3BlZWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JiaXRlckNvdW50OyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9IGJhc2VBbmdsZSArIGkgKiBhbmdsZVN0ZXA7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IG9yYml0ZXJTaGFwZSxcbiAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICB5OiB5ICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxuICAgICAgc2l6ZTogZGVmaW5pdGlvbi5vcmJpdGVyU2l6ZSAqIDEuOCAqIHNjYWxlLFxuICAgICAgY29sb3IsXG4gICAgICByb3RhdGlvblo6IGFuZ2xlICsgbm93IC8gMTQwMCxcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNCxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjI1LFxuICAgICAgZW5lcmd5QmxlZWQ6IC41LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTd29yZE1lbWJlcjtcbiAgc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3dvcmRUcmFpbChzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24sIHNjYWxlOiBudW1iZXIpOiBOZW9uUHJpbWl0aXZlW10ge1xuICBpZiAoc2xhc2gucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFtdO1xuICBjb25zdCBsaWZlID0gMSAtIHNsYXNoLnByb2dyZXNzO1xuICBjb25zdCByYWRpdXMgPSBzbGFzaC5yZWFjaCAqIHNjYWxlO1xuICBjb25zdCBoYWxmQXJjID0gc2xhc2guYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IGhlYWRpbmcgPSAtTWF0aC5QSSAvIDI7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDE7XG4gIGNvbnN0IGJsYWRlQW5nbGUgPSBoZWFkaW5nIC0gaGFsZkFyYyArIHN3ZWVwICogaGFsZkFyYyAqIDI7XG4gIGNvbnN0IHRyYWlsTGVuZ3RoID0gaGFsZkFyYyAqICguNTUgKyBsaWZlICogLjc1KTtcbiAgY29uc3QgdGhpY2tuZXNzID0gc2xhc2gudGhpY2tuZXNzICogc2NhbGU7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkrKykge1xuICAgIGNvbnN0IGFnZSA9IGkgLyAxMDtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGgubWF4KGhlYWRpbmcgLSBoYWxmQXJjLCBibGFkZUFuZ2xlIC0gdHJhaWxMZW5ndGggKiBhZ2UpO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gcmFkaXVzICogKC43MiArIE1hdGguc2luKGFnZSAqIE1hdGguUEkpICogLjA4KTtcbiAgICBjb25zdCBmYWRlID0gTWF0aC5wb3coMSAtIGFnZSwgMS4zNSkgKiBsaWZlO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBzbGFzaC54ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB5OiBzbGFzaC55ICsgTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB3aWR0aDogTWF0aC5tYXgoLjgsIHRoaWNrbmVzcyAqICgyLjQgLSBhZ2UgKiAxLjU1KSksXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqICguMjQgLSBhZ2UgKiAuMSksXG4gICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICBnbG93OiAxLjE1ICogZmFkZSxcbiAgICAgIGludGVuc2l0eTogMS40NSAqIGZhZGUsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogYW5nbGUgKyBNYXRoLlBJIC8gMixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGxlYWRpbmdYID0gc2xhc2gueCArIE1hdGguY29zKGJsYWRlQW5nbGUpICogcmFkaXVzICogLjgyO1xuICBjb25zdCBsZWFkaW5nWSA9IHNsYXNoLnkgKyBNYXRoLnNpbihibGFkZUFuZ2xlKSAqIHJhZGl1cyAqIC44MjtcbiAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICB4OiBsZWFkaW5nWCwgeTogbGVhZGluZ1ksXG4gICAgd2lkdGg6IE1hdGgubWF4KDEuMiwgdGhpY2tuZXNzICogMi44KSxcbiAgICBoZWlnaHQ6IHJhZGl1cyAqIC4zMixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IHNsYXNoLmNvbG9yLFxuICAgIGdsb3c6IDEuNCAqIGxpZmUsXG4gICAgaW50ZW5zaXR5OiAxLjcgKiBsaWZlLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogYmxhZGVBbmdsZSArIE1hdGguUEkgLyAyLFxuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcgJiYgc2xhc2gucHJvZ3Jlc3MgPCAuNzsgaSsrKSB7XG4gICAgY29uc3Qgc3ByZWFkID0gKGkgLSAzKSAqIC4xMztcbiAgICBjb25zdCBzcGFya0xpZmUgPSBsaWZlICogKDEgLSBNYXRoLmFicyhpIC0gMykgKiAuMDgpO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBsZWFkaW5nWCArIE1hdGguY29zKGJsYWRlQW5nbGUgKyBzcHJlYWQpICogcmFkaXVzICogKC4wNCArIGkgKiAuMDEyKSxcbiAgICAgIHk6IGxlYWRpbmdZICsgTWF0aC5zaW4oYmxhZGVBbmdsZSArIHNwcmVhZCkgKiByYWRpdXMgKiAoLjA0ICsgaSAqIC4wMTIpLFxuICAgICAgd2lkdGg6IE1hdGgubWF4KC43LCB0aGlja25lc3MgKiAuNzUpLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAoLjA4ICsgaSAlIDMgKiAuMDI1KSxcbiAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGdsb3c6IDEuMSAqIHNwYXJrTGlmZSxcbiAgICAgIGludGVuc2l0eTogMS4yNSAqIHNwYXJrTGlmZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBibGFkZUFuZ2xlICsgc3ByZWFkLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dvcmRWaXN1YWxzKG9wdGlvbnM6IFN3b3JkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGlmICghb3B0aW9ucy52aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IHsgZGVmaW5pdGlvbiwgc2xhc2gsIHgsIHksIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaGFsZkFyYyA9IGRlZmluaXRpb24uYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2ggPyAoc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDEpIDogLjU7XG4gIGNvbnN0IHN3b3JkQW5nbGUgPSAtTWF0aC5QSSAvIDIgLSBoYWxmQXJjICsgc3dlZXAgKiBoYWxmQXJjICogMjtcbiAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic3Bpa2UtbGFuY2VcIiksXG4gICAgeCwgeSxcbiAgICBzaXplOiBNYXRoLm1pbigxNywgZGVmaW5pdGlvbi5yYW5nZSAqIC4yOCkgKiBzY2FsZSxcbiAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgcm90YXRpb25aOiBzd29yZEFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gICAgbGluZVRoaWNrbmVzczogLjgyLFxuICAgIGdsb3c6IHNsYXNoID8gMS4zNSA6IDEsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiBzbGFzaCA/IDEuOCA6IDEuMTUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IHNsYXNoID8gLjcyIDogLjQyLFxuICAgIGVuZXJneVNwZWVkOiBzbGFzaCA/IDIuMSA6IDEuMixcbiAgICBlbmVyZ3lCbGVlZDogc2xhc2ggPyAuOCA6IC41LFxuICB9KTtcbiAgaWYgKHNsYXNoKSBzY2VuZS5wcmltaXRpdmVzLnB1c2goLi4uc3dvcmRUcmFpbChzbGFzaCwgc2NhbGUpKTtcbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBTaGFwZShzaGFwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlIHtcbiAgY29uc3QgeyB4LCB5LCBjb2xvciwgbm93LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoc2hhcGVJZCksXG4gICAgeDogeCArIE1hdGguc2luKG5vdyAvIDQyMCArIHkgKiAuMDcpICogNC41ICogc2NhbGUsXG4gICAgeSxcbiAgICBzaXplOiAxMCAqIHNjYWxlICogKDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyB5ICogLjA1KSAqIC4wOCksXG4gICAgY29sb3IsXG4gICAgcm90YXRpb25aOiBub3cgLyAxMTAwLFxuICAgIGxpbmVUaGlja25lc3M6IC43NixcbiAgICBnbG93OiAxLjA1LFxuICAgIGVuZXJneUludGVuc2l0eTogMS4yNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjQ4LFxuICAgIGVuZXJneVNwZWVkOiAxLjM1LFxuICAgIGVuZXJneUJsZWVkOiAuNTUsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzaGllbGQtcmluZ1wiLCBvcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic3Bpa2UtbGFuY2VcIiwgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHtcbiAgY3JlYXRlTGFuZVJ1bm5lclNjZW5lLFxuICBOZW9uU2hhcGVBY3RvciwgTmVvblNoYXBlRGlzcG9zYWwsIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcixcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSwgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIHN3b3JkRmFtaWx5LCBvcmJGYW1pbHksXG4gIHR5cGUgU3dvcmRJZCwgdHlwZSBTd29yZFRhcmdldGluZ01vZGUsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBiaW5kU3F1YWRJbnB1dCB9IGZyb20gXCIuLi8uLi9zcmMvaW5wdXRcIjtcbmltcG9ydCB7IFNxdWFkTW9kZWwgfSBmcm9tIFwiLi4vLi4vc3JjL3NxdWFkXCI7XG5pbXBvcnQgeyBBdXRvQWltQ29udHJvbFN0YXRlLCBzZWxlY3RBdXRvQWltT2Zmc2V0IH0gZnJvbSBcIi4uLy4uL3NyYy9hdXRvQWltXCI7XG5pbXBvcnQgeyBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBhcHBseVBvcnRyYWl0U3RhZ2UsIHByb2plY3RIZWxpY29wdGVyU2NlbmUgfSBmcm9tIFwiLi4vLi4vc3JjL3ZpZXdwb3J0XCI7XG5pbXBvcnQgeyBhY3RvckluVG9wRG93blNjZW5lLCBzaGFwZUxhYmVsLCBzd2FybVNoYXBlcyB9IGZyb20gXCIuLi8uLi9zcmMvc2hhcGVWaXN1YWxzXCI7XG5pbXBvcnQgeyBlbmVteU9yaWVudGF0aW9uLCBoZWxpY29wdGVyVmlld3BvcnRGb3IsIHBsYXllck9yaWVudGF0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9yZW5kZXJPcmllbnRhdGlvblwiO1xuaW1wb3J0IHsgU3dvcmRTdGF0ZSwgdGlja1N3b3JkIH0gZnJvbSBcIi4uLy4uL3NyYy9jb21iYXQvc3dvcmRFdmFsdWF0b3JcIjtcbmltcG9ydCB7IHF1ZXJ5TmVhcmJ5VGhyZWF0cyB9IGZyb20gXCIuLi8uLi9zcmMvY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5XCI7XG5pbXBvcnQgeyBzd29yZFBpY2t1cFZpc3VhbCwgc3dvcmRWaXN1YWxzIH0gZnJvbSBcIi4uLy4uL3NyYy9mYW1pbHlWaXN1YWxzXCI7XG5cbmludGVyZmFjZSBFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IDAgfCAxO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIHJvd0lkOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTd29yZFBpY2t1cCB7XG4gIHN3b3JkSWQ6IFN3b3JkSWQ7XG4gIGxhbmU6IDAgfCAxO1xuICB5OiBudW1iZXI7XG59XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KFwiI2dhbWUtY2FudmFzXCIpITtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZXJyb3JcIikhO1xuY29uc3Qgc3dvcmRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiNzd29yZC1zZWxlY3RcIikhO1xuY29uc3Qgd2VhcG9uUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3dlYXBvbi1yZWFkb3V0XCIpITtcbmNvbnN0IHNjb3JlUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Njb3JlLXJlYWRvdXRcIikhO1xuY29uc3Qgc3BlY1JlYWRvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzcGVjLXJlYWRvdXRcIikhO1xuY29uc3QgZ2FtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNnYW1lXCIpITtcbmFwcGx5UG9ydHJhaXRTdGFnZShnYW1lRWxlbWVudCwgeyBhc3BlY3RXaWR0aDogOSwgYXNwZWN0SGVpZ2h0OiAxNiB9KTtcbmNvbnN0IGF1ZGlvSWQgPSAoaWQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLi4vLi4vLi4vLi4vYXVkaW8vJHtpZH1gO1xuY29uc3QgcGxheVNmeCA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5KGF1ZGlvSWQoaWQpKTtcbmNvbnN0IHBsYXlFbmVteURlc3Ryb3llZCA9ICgpOiB2b2lkID0+IHdpbmRvdy5nYW1lQXVkaW8/LnBsYXlSb3RhdGVkKGF1ZGlvSWQoXCJFbmVteURlc3Ryb3llZFwiKSwgMik7XG5jb25zdCBzd29yZFN3aW5nU291bmRJZHM6IFJlY29yZDxTd29yZElkLCBzdHJpbmc+ID0ge1xuICBhcmNCbGFkZTogXCJTd29yZFN3aW5nXCIsXG4gIGNsZWF2ZXI6IFwiU3dvcmRIZWF2eVN3aW5nXCIsXG4gIG5lZWRsZVJhcGllcjogXCJTd29yZFN0YWJcIixcbn07XG5cbnRyeSB7XG4gIGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLmNyZWF0ZShjYW52YXMsIDQ1MCwgODAwKTtcbiAgY29uc3Qgb3JiID0gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmI7XG4gIGNvbnN0IGVuZW1pZXM6IEVuZW15W10gPSBbXTtcbiAgY29uc3QgcGlja3VwczogU3dvcmRQaWNrdXBbXSA9IFtdO1xuICBjb25zdCBzcXVhZCA9IG5ldyBTcXVhZE1vZGVsKCk7XG4gIGNvbnN0IGFpbUNvbnRyb2wgPSBuZXcgQXV0b0FpbUNvbnRyb2xTdGF0ZSgpO1xuICBsZXQgcGxheWVyTGFuZSA9IDA7XG4gIGxldCBhY3RpdmVTd29yZElkOiBTd29yZElkID0gXCJhcmNCbGFkZVwiO1xuICBsZXQgc3dvcmRTdGF0ZSA9IG5ldyBTd29yZFN0YXRlKGFjdGl2ZVN3b3JkSWQpO1xuICBsZXQgZW50aXR5U2VxdWVuY2UgPSAwO1xuICBsZXQga2lsbHMgPSAwO1xuICBsZXQgbGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBwbGF5ZXJBbGl2ZSA9IHRydWU7XG4gIGxldCByZXN0YXJ0QXQgPSAwO1xuICBsZXQgcGxheWVyQWN0b3IgPSBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pO1xuXG4gIGNvbnN0IGxhbmVYID0gKGxhbmU6IG51bWJlcikgPT4gY2FudmFzLndpZHRoICogKGxhbmUgPT09IDAgPyAwLjMyIDogMC42OCk7XG4gIGNvbnN0IHBsYXllclkgPSAoKSA9PiBjYW52YXMuaGVpZ2h0ICogMC44MjtcbiAgY29uc3Qgc2NhbGUgPSAoKSA9PiAxO1xuXG4gIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoc3dvcmRGYW1pbHkubWVtYmVycykpIHtcbiAgICBzd29yZFNlbGVjdC5hZGQobmV3IE9wdGlvbihzd29yZC5sYWJlbCwgaWQpKTtcbiAgfVxuICBzd29yZFNlbGVjdC52YWx1ZSA9IGFjdGl2ZVN3b3JkSWQ7XG5cbiAgY29uc3QgZXF1aXAgPSAoaWQ6IFN3b3JkSWQpID0+IHtcbiAgICBhY3RpdmVTd29yZElkID0gaWQ7XG4gICAgc3dvcmRTdGF0ZSA9IG5ldyBTd29yZFN0YXRlKGlkKTtcbiAgICBzd29yZFNlbGVjdC52YWx1ZSA9IGlkO1xuICAgIHBsYXlTZngoXCJQaWNrdXBTd29yZFwiKTtcbiAgICB1cGRhdGVSZWFkb3V0KCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUmVhZG91dCA9ICgpID0+IHtcbiAgICBjb25zdCBkZWYgPSBzd29yZEZhbWlseS5tZW1iZXJzW2FjdGl2ZVN3b3JkSWRdO1xuICAgIHdlYXBvblJlYWRvdXQudGV4dENvbnRlbnQgPSBkZWYubGFiZWw7XG4gICAgc2NvcmVSZWFkb3V0LnRleHRDb250ZW50ID0gYEtpbGxzICR7a2lsbHN9YDtcbiAgICBjb25zdCBjZExlZnQgPSBzd29yZFN0YXRlLmNvb2xkb3duTGVmdC50b0ZpeGVkKDIpO1xuICAgIHNwZWNSZWFkb3V0LmlubmVySFRNTCA9IFtcbiAgICAgIFtcIlJhbmdlXCIsIGAke2RlZi5yYW5nZX1weGBdLFxuICAgICAgW1wiQXJjXCIsIGAke2RlZi5hcmNEZWdyZWVzfVx1MDBCMGBdLFxuICAgICAgW1wiRGFtYWdlXCIsIFN0cmluZyhkZWYuZGFtYWdlKV0sXG4gICAgICBbXCJDb29sZG93blwiLCBgJHtkZWYuY29vbGRvd25TZWNvbmRzfXNgXSxcbiAgICAgIFtcIkNvb2xkb3duIGxlZnRcIiwgYCR7Y2RMZWZ0fXNgXSxcbiAgICAgIFtcIk1heCB0YXJnZXRzXCIsIFN0cmluZyhkZWYubWF4VGFyZ2V0cyldLFxuICAgICAgW1wiVGFyZ2V0aW5nXCIsIGRlZi50YXJnZXRpbmdNb2RlXSxcbiAgICAgIFtcIlNsYXNoIGR1cmF0aW9uXCIsIGAke2RlZi5zbGFzaER1cmF0aW9uTXN9bXNgXSxcbiAgICBdLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYDxkdD4ke25hbWV9PC9kdD48ZGQ+JHt2YWx1ZX08L2RkPmApLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgc3F1YWQueCA9IGxhbmVYKDApO1xuICBzcXVhZC50YXJnZXRYID0gbGFuZVgoMCk7XG5cbiAgY29uc3Qgc3Bhd25FbmVteSA9IChsYW5lOiAwIHwgMSk6IHZvaWQgPT4ge1xuICAgIGVuZW1pZXMucHVzaCh7IGlkOiArK2VudGl0eVNlcXVlbmNlLCBsYW5lLCB4OiBsYW5lWChsYW5lKSwgeTogMTA1LCBoZWFsdGg6IG9yYi5oZWFsdGgsIHJvd0lkOiArK2VudGl0eVNlcXVlbmNlLCBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmVuZW15IH0pLCBkeWluZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Bhd25QaWNrdXAgPSAobGFuZTogMCB8IDEpOiB2b2lkID0+IHtcbiAgICBwaWNrdXBzLnB1c2goeyBzd29yZElkOiBzd29yZFNlbGVjdC52YWx1ZSBhcyBTd29yZElkLCBsYW5lLCB5OiAxMzUgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVzdGFydFNpbXVsYXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgZW5lbWllcy5sZW5ndGggPSAwO1xuICAgIHBpY2t1cHMubGVuZ3RoID0gMDtcbiAgICBwbGF5ZXJBbGl2ZSA9IHRydWU7XG4gICAgcmVzdGFydEF0ID0gMDtcbiAgICBwbGF5ZXJBY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSk7XG4gICAgZXF1aXAoYWN0aXZlU3dvcmRJZCk7XG4gICAgc3Bhd25FbmVteSgwKTtcbiAgICBzcGF3bkVuZW15KDEpO1xuICB9O1xuXG4gIGNvbnN0IGtpbGxQbGF5ZXIgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBpZiAoIXBsYXllckFsaXZlKSByZXR1cm47XG4gICAgcGxheWVyQWxpdmUgPSBmYWxzZTtcbiAgICByZXN0YXJ0QXQgPSBub3cgKyA5MDA7XG4gICAgcGxheWVyQWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IDAuODtcbiAgICBwbGF5ZXJBY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xuICAgIHdlYXBvblJlYWRvdXQudGV4dENvbnRlbnQgPSBcIlBsYXllciBkZWZlYXRlZFwiO1xuICAgIHBsYXlTZngoXCJTd29yZEhpdFwiKTtcbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIltkYXRhLXNwYXduLWVuZW15XVwiKS5mb3JFYWNoKGIgPT4gYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3Bhd25FbmVteShOdW1iZXIoYi5kYXRhc2V0LnNwYXduRW5lbXkpIGFzIDAgfCAxKSkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIltkYXRhLXNwYXduLXBpY2t1cF1cIikuZm9yRWFjaChiID0+IGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNwYXduUGlja3VwKE51bWJlcihiLmRhdGFzZXQuc3Bhd25QaWNrdXApIGFzIDAgfCAxKSkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNzcGF3bi13YXZlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNwYXduRW5lbXkoMCk7IHNwYXduRW5lbXkoMSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzcGF3bkVuZW15KDApLCA0NTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc3Bhd25FbmVteSgxKSwgNzAwKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2NsZWFyLXN0YWdlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVuZW1pZXMubGVuZ3RoID0gcGlja3Vwcy5sZW5ndGggPSAwO1xuICB9KTtcbiAgc3dvcmRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBlcXVpcChzd29yZFNlbGVjdC52YWx1ZSBhcyBTd29yZElkKSk7XG5cbiAgYmluZFNxdWFkSW5wdXQoZ2FtZUVsZW1lbnQsIFwiI2pveXN0aWNrXCIsIHtcbiAgICBsYW5lOiAoKSA9PiBzcXVhZC5sYW5lLFxuICAgIHNldExhbmU6IGxhbmUgPT4geyBwbGF5ZXJMYW5lID0gbGFuZTsgc3F1YWQuc2V0TGFuZShsYW5lLCBsYW5lWCwgcGVyZm9ybWFuY2Uubm93KCkpOyBhaW1Db250cm9sLmxhbmVTZWxlY3RlZCgpOyB9LFxuICAgIHNldEFpbTogdmFsdWUgPT4geyBzcXVhZC5zZXRBaW0odmFsdWUsIGNhbnZhcy53aWR0aCAqIC4yMiwgbGFuZVgpOyBhaW1Db250cm9sLmFpbUNoYW5nZWQoKTsgfSxcbiAgICByZWxlYXNlQWltOiAoKSA9PiB7IGFpbUNvbnRyb2wuYWltUmVsZWFzZWQoKTsgfSxcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlID0gKG5vdzogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSBNYXRoLm1pbigobm93IC0gbGFzdEZyYW1lKSAvIDEwMDAsIDAuMDUpO1xuICAgIGxhc3RGcmFtZSA9IG5vdztcbiAgICBwbGF5ZXJBY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgIGlmICghcGxheWVyQWxpdmUpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVtaWVzKSBlLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBpZiAobm93ID49IHJlc3RhcnRBdCkgcmVzdGFydFNpbXVsYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWFpbUNvbnRyb2wubWFudWFsKSB7XG4gICAgICBjb25zdCBsYW5lRW5lbWllcyA9IGVuZW1pZXMuZmlsdGVyKGUgPT4gZS5sYW5lID09PSBzcXVhZC5sYW5lICYmICFlLmR5aW5nKTtcbiAgICAgIGNvbnN0IGNvbE9mZnNldHMgPSBzcXVhZC5mcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGUoKSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGxhbmVFbmVtaWVzLCBsYW5lWChzcXVhZC5sYW5lKSwgY29sT2Zmc2V0cywgc3F1YWQuYWltT2Zmc2V0KTtcbiAgICAgIHNxdWFkLmF1dG9BaW0ob2Zmc2V0LCBjYW52YXMud2lkdGggKiAuMjIsIGxhbmVYKTtcbiAgICB9XG4gICAgc3F1YWQudXBkYXRlKGRlbHRhKTtcblxuICAgIC8vIFN3b3JkIHRpY2sgXHUyMDE0IHN3aW5ncyBvbmx5IHdoZW4gZW5lbWllcyBhcmUgaW4gcmFuZ2VcbiAgICBjb25zdCBweCA9IHNxdWFkLng7XG4gICAgY29uc3QgcHkgPSBwbGF5ZXJZKCk7XG4gICAgY29uc3QgZGVmID0gc3dvcmRGYW1pbHkubWVtYmVyc1thY3RpdmVTd29yZElkXTtcbiAgICBjb25zdCB0aHJlYXRzID0gcXVlcnlOZWFyYnlUaHJlYXRzKGVuZW1pZXMsIHtcbiAgICAgIG9yaWdpbjogeyB4OiBweCwgeTogcHkgfSxcbiAgICAgIGxhbmU6IHBsYXllckxhbmUgYXMgMCB8IDEsXG4gICAgICByYW5nZTogZGVmLnJhbmdlLFxuICAgICAgaW5jbHVkZUFkamFjZW50TGFuZXM6IChkZWYudGFyZ2V0aW5nTW9kZSBhcyBTd29yZFRhcmdldGluZ01vZGUpID09PSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgIG1heFRhcmdldHM6IGRlZi5tYXhUYXJnZXRzLFxuICAgICAgcHVycG9zZTogXCJzd29yZFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3dvcmRSZXN1bHQgPSB0aWNrU3dvcmQoc3dvcmRTdGF0ZSwgZGVmLCB0aHJlYXRzLCBweCwgcHksIG5vdywgZGVsdGEsIG5lb25QYWxldHRlW2RlZi5jb2xvcl0pO1xuXG4gICAgaWYgKHN3b3JkUmVzdWx0LnN3aW5nVHJpZ2dlcmVkICYmIHN3b3JkUmVzdWx0LmhpdEVuZW15SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHBsYXlTZngoc3dvcmRTd2luZ1NvdW5kSWRzW2FjdGl2ZVN3b3JkSWRdKTtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBbLi4uZW5lbWllc10pIHtcbiAgICAgICAgaWYgKGUuZHlpbmcgfHwgIXN3b3JkUmVzdWx0LmhpdEVuZW15SWRzLmluY2x1ZGVzKGUuaWQpKSBjb250aW51ZTtcbiAgICAgICAgZS5oZWFsdGggLT0gc3dvcmRSZXN1bHQuZGFtYWdlO1xuICAgICAgICBlLmFjdG9yLmltcGFjdCh7IGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sIG1hZ25pdHVkZTogc3dvcmRSZXN1bHQuZGFtYWdlIC8gb3JiLmltcGFjdFJlc2lzdGFuY2UgfSk7XG4gICAgICAgIGlmIChlLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgZS5keWluZyA9IHRydWU7IGUuYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IG9yYi5leHBsb3Npb25NYWduaXR1ZGU7XG4gICAgICAgICAgZS5hY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xuICAgICAgICAgIGtpbGxzKys7IHVwZGF0ZVJlYWRvdXQoKTsgcGxheUVuZW15RGVzdHJveWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbmVteSBtb3ZlbWVudFxuICAgIGZvciAoY29uc3QgZSBvZiBbLi4uZW5lbWllc10pIHtcbiAgICAgIGUuYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIGUueSArPSBvcmIuc3BlZWQgKiBkZWx0YSAtIGUuYWN0b3IueSAqIGNhbnZhcy5oZWlnaHQgLyAyLjU7XG4gICAgICBlLmFjdG9yLm1vdmVUbygwLCAwKTtcbiAgICAgIGlmIChlLmR5aW5nICYmIGUuYWN0b3IuZGlzcG9zZWQpIHsgZW5lbWllcy5zcGxpY2UoZW5lbWllcy5pbmRleE9mKGUpLCAxKTsgY29udGludWU7IH1cbiAgICAgIGlmICghZS5keWluZyAmJiBNYXRoLmh5cG90KGUueCAtIHNxdWFkLngsIGUueSAtIHBsYXllclkoKSkgPD0gb3JiLnJhZGl1cyAqIDMuMikge1xuICAgICAgICBraWxsUGxheWVyKG5vdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGlja3Vwc1xuICAgIGZvciAoY29uc3QgcCBvZiBbLi4ucGlja3Vwc10pIHtcbiAgICAgIHAueSArPSA2MiAqIGRlbHRhO1xuICAgICAgaWYgKHAueSA+PSBwbGF5ZXJZKCkgLSAxMiAmJiBwLmxhbmUgPT09IHBsYXllckxhbmUpIHtcbiAgICAgICAgZXF1aXAocC5zd29yZElkKTsgcGlja3Vwcy5zcGxpY2UocGlja3Vwcy5pbmRleE9mKHApLCAxKTtcbiAgICAgIH0gZWxzZSBpZiAocC55ID4gY2FudmFzLmhlaWdodCArIDMwKSBwaWNrdXBzLnNwbGljZShwaWNrdXBzLmluZGV4T2YocCksIDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZVJlYWRvdXQoKTtcbiAgfTtcblxuICBjb25zdCBkcmF3ID0gKG5vdzogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcyA9IHNjYWxlKCk7XG4gICAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW1xuICAgICAgLi4uKGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSh7IHNjZW5lSWQ6IFwibmVvbkhhbGxcIiwgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LCB0aW1lTXM6IG5vdyB9KS5wcmltaXRpdmVzID8/IFtdKSxcbiAgICBdO1xuICAgIGNvbnN0IHB4ID0gc3F1YWQueDtcbiAgICBjb25zdCBweSA9IHBsYXllclkoKTtcblxuICAgIGNvbnN0IGRlZiA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbYWN0aXZlU3dvcmRJZF07XG4gICAgY29uc3Qgc3dvcmRDb2xvciA9IG5lb25QYWxldHRlW2RlZi5jb2xvcl07XG4gICAgY29uc3Qgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW10gPSBbXTtcbiAgICBjb25zdCBzd29yZFNjZW5lID0gc3dvcmRWaXN1YWxzKHtcbiAgICAgIGRlZmluaXRpb246IGRlZixcbiAgICAgIHNsYXNoOiBzd29yZFN0YXRlLmFjdGl2ZVNsYXNoLFxuICAgICAgeDogcHgsIHk6IHB5LCBzY2FsZTogcyxcbiAgICAgIHZpc2libGU6IHBsYXllckFsaXZlLFxuICAgIH0pO1xuICAgIHByaW1pdGl2ZXMucHVzaCguLi5zd29yZFNjZW5lLnByaW1pdGl2ZXMpO1xuICAgIHNoYXBlcy5wdXNoKC4uLnN3b3JkU2NlbmUuc2hhcGVzKTtcbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBwaWNrdXBzKSB7XG4gICAgICBjb25zdCBwaWNrdXBEZWYgPSBzd29yZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zd29yZElkXTtcbiAgICAgIHNoYXBlcy5wdXNoKHN3b3JkUGlja3VwVmlzdWFsKHtcbiAgICAgICAgeDogbGFuZVgocGlja3VwLmxhbmUpLCB5OiBwaWNrdXAueSxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW3BpY2t1cERlZi5jb2xvcl0sXG4gICAgICAgIG5vdywgc2NhbGU6IHMsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGNvbnN0IGhlbGljb3B0ZXJWaWV3cG9ydCA9IGhlbGljb3B0ZXJWaWV3cG9ydEZvcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHBsYXllclkoKSk7XG4gICAgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShwbGF5ZXJBY3Rvciwgc3F1YWQueCwgcHksIDE0LCBwbGF5ZXJPcmllbnRhdGlvbihkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHNxdWFkLngsIHB5LCBub3cpKSk7XG4gICAgZm9yIChjb25zdCBlIG9mIGVuZW1pZXMpIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoZS5hY3RvciwgZS54LCBlLnksIDE4LCBlbmVteU9yaWVudGF0aW9uKGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgZS54LCBlLnksIG5vdywgZS5yb3dJZCkpKTtcbiAgcmVuZGVyZXIucmVuZGVyKHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVzLCBbXSwgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KSwgbm93IC8gMTAwMCk7XG4gIH07XG5cbiAgY29uc3QgZnJhbWUgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHsgdXBkYXRlKG5vdyk7IGRyYXcobm93KTsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTsgfTtcbiAgZXF1aXAoYWN0aXZlU3dvcmRJZCk7XG4gIHNwYXduRW5lbXkoMCk7IHNwYXduRW5lbXkoMSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG59IGNhdGNoIChjYXVzZSkge1xuICBlcnJvci5oaWRkZW4gPSBmYWxzZTtcbiAgZXJyb3IudGV4dENvbnRlbnQgPSBjYXVzZSBpbnN0YW5jZW9mIEVycm9yID8gY2F1c2UubWVzc2FnZSA6IFN0cmluZyhjYXVzZSk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IGdhbWVBdWRpbz86IHsgcGxheShpZDogc3RyaW5nKTogdm9pZDsgcGxheVJvdGF0ZWQoaWQ6IHN0cmluZywgbjogbnVtYmVyKTogdm9pZCB9OyB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQU8sSUFBTSxjQUFjO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUNaOzs7QUNPQSxJQUFNLFVBQVUsQ0FBQyxPQUFlLFdBQVcsQ0FBQyxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxNQUNwRSxNQUFNLEtBQUssRUFBRSxRQUFRLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUN0QyxRQUFNLFFBQVEsV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzNDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FB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LEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBRyxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNyRixLQUFLLFFBQVEsZ0JBQWdCLFdBQVcsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ3BOLEtBQUssUUFBUSxlQUFlLFVBQVUsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsS0FBRyxLQUFJLEdBQUUsQ0FBQyxLQUFHLElBQUcsR0FBRSxDQUFDLE1BQUksSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3JLLEtBQUssUUFBUSxZQUFZLFlBQVksUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBRyxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUVoRixLQUFLLGFBQWEsaUJBQWlCLGlCQUFpQixTQUFTLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUwxQixTQUFTLEtBQUtDLE1BQStDO0FB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QkFBa0I7QUFBQSxRQUM1QixHQUFHLE1BQU0sT0FBTyxJQUFJO0FBQUEsUUFBRyxHQUFHLE9BQU87QUFBQSxRQUNqQyxPQUFPLFlBQVksVUFBVSxLQUFLO0FBQUEsUUFDbEM7QUFBQSxRQUFLLE9BQU87QUFBQSxNQUNkLENBQUMsQ0FBQztBQUFBLElBQ0o7QUFDQSxVQUFNLHFCQUFxQixzQkFBc0IsT0FBTyxPQUFPLE9BQU8sUUFBUSxRQUFRLENBQUM7QUFDdkYsV0FBTyxLQUFLLG9CQUFvQixhQUFhLE1BQU0sR0FBRyxJQUFJLElBQUksa0JBQWtCLGlDQUFpQyxvQkFBb0IsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7QUFDdkosZUFBVyxLQUFLLFFBQVMsUUFBTyxLQUFLLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLGlCQUFpQixpQ0FBaUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hMLGFBQVMsT0FBTyx1QkFBdUIsWUFBWSxRQUFRLENBQUMsR0FBRyxpQ0FBaUMsa0JBQWtCLEdBQUcsTUFBTSxHQUFJO0FBQUEsRUFDL0g7QUFFQSxRQUFNLFFBQVEsQ0FBQyxRQUFzQjtBQUFFLFdBQU8sR0FBRztBQUFHLFNBQUssR0FBRztBQUFHLDBCQUFzQixLQUFLO0FBQUEsRUFBRztBQUM3RixRQUFNLGFBQWE7QUFDbkIsYUFBVyxDQUFDO0FBQUcsYUFBVyxDQUFDO0FBQzNCLHdCQUFzQixLQUFLO0FBQzdCLFNBQVMsT0FBTztBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sY0FBYyxpQkFBaUIsUUFBUSxNQUFNLFVBQVUsT0FBTyxLQUFLO0FBQzNFOyIsCiAgIm5hbWVzIjogWyJjYW52YXMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgInNoYWRlciIsICJoZXgiLCAiY2FudmFzIiwgImhleCIsICJzaGFkZXIiLCAiY2FudmFzIiwgInNoYWRlciIsICJoZXgiLCAiY2FudmFzIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgInJvdGF0aW9uIl0KfQo=

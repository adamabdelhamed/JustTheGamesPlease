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
var laneRunnerSceneIds = ["neonHall", "aurora"];
var sceneNames = {
  neonHall: "Neon Hall",
  aurora: "Aurora"
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
function getLaneRunnerSceneName(sceneId) {
  return sceneNames[sceneId];
}
function isLaneRunnerSceneId(value) {
  return laneRunnerSceneIds.includes(value);
}
function createLaneRunnerScene(options) {
  switch (options.sceneId) {
    case "aurora":
      return createAurora(options);
    case "neonHall":
      return createNeonHall(options);
  }
}
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

// projects/NeonSwarm/CombatDefinition/TrackDefinition.ts
var isEnemy = (id) => id.startsWith("enemy.");
var enemyIdFromTrackId = (id) => {
  if (id === "enemy.basic") return "basicOrb";
  if (!id.startsWith("enemy.")) return null;
  const candidate = id.slice("enemy.".length);
  return candidate in orbFamily.members ? candidate : null;
};
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

// projects/NeonSwarm/CombatDefinition/tracks/Track4.ts
var generatedTrack = {
  label: "Skybreak",
  description: "The Aurora opener is busier than the tutorial arc, but gives a nearby shield and burst weapon before the first squeeze.",
  durationSeconds: 44,
  startingGun: "pulsePistol",
  startingGunLevel: 2,
  environment: {
    sceneId: "aurora"
  },
  definition: {
    layout: `
..... | .....
.E.E. | .E.E.
..... | .....
..W.. | ..E..
..E.. | ..W..
..... | .....
..2.. | .....
..... | .....
.E... | ...E.
..E.. | ..E..
..... | .....
..a.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..W.. | .....
..... | ..W..
..... | .....
..I.. | .....
..... | .....
.E... | ..E..
..... | .....
..S.. | .....
..... | .....
..E.. | ..E..
.E... | .....
..... | ...E.
..... | .....
..2.. | .....
..... | .....
..E.. | ..E..
..... | .....
..I.. | .....
..... | .....
..S.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.9 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.82 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.9 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.78 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1.08
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track5.ts
var generatedTrack2 = {
  label: "Ribbon Storm",
  description: "Aurora pressure comes in waves: flankers, glass decoys, a tank break, then a heavy weapon payoff.",
  durationSeconds: 62,
  startingGun: "burstCarbine",
  startingGunLevel: 1,
  environment: {
    sceneId: "aurora"
  },
  definition: {
    layout: `
..... | .....
.E.E. | .E.E.
..W.. | .....
..... | ..W..
..... | .....
..X.. | .....
..... | .....
.P.E. | .E.P.
..... | .....
..W.. | ..E..
..E.. | ..W..
..... | .....
..J.. | .....
..... | .....
.E.E. | .E.E.
..... | .....
..T.. | .....
..... | .....
..2.. | .....
..... | .....
.E... | ...E.
..W.. | ..W..
..... | .....
..b.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..P.. | ..E..
..E.. | ..P..
..... | .....
..K.. | .....
..... | .....
..W.. | ..W..
.E... | ...E.
..... | .....
..S.. | .....
..... | .....
..E.. | ..E..
..... | .....
..I.. | .....
..... | .....
..S.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "T": { id: "enemy.tank" },
      "P": { id: "enemy.glassShield" },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.92 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.88 },
      "K": { id: "pickup.weapon.gun.splitterRifle", speed: 0.92 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.86 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.86 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.78 }
    },
    balance: {
      enemyHp: 1.04,
      enemySpeed: 1.12
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track6.ts
var generatedTrack3 = {
  label: "Magnetic Dawn",
  description: "A dense Aurora finale with hard surges, deliberate safe shelves, and top-tier tools before the biggest waves.",
  durationSeconds: 78,
  startingGun: "burstCarbine",
  startingGunLevel: 2,
  environment: {
    sceneId: "aurora"
  },
  definition: {
    layout: `
..T.. | ..T..
.E.E. | .E.E.
..W.. | ..W..
..... | .....
..T.. | .....
..... | ..T..
..... | .....
..X.. | .....
..... | .....
.P.E. | .E.P.
..W.. | ..W..
..... | .....
..K.. | .....
..... | .....
.E.E. | .E.E.
..W.. | .....
..... | ..W..
..... | .....
..2.. | .....
..... | .....
..T.. | .....
..... | .....
..b.. | .....
..... | .....
.E.E. | .E.E.
..P.. | ..P..
..W.. | ..E..
..E.. | ..W..
..... | .....
..J.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..W.. | ..W..
..... | .....
..X.. | .....
..... | .....
..T.. | .....
..... | ..E..
.E.E. | .E.E.
..... | .....
..c.. | .....
..... | .....
..W.. | ..W..
.E.E. | .E.E.
..... | .....
..2.. | .....
..... | .....
.P.E. | .E.P.
..W.. | ..W..
..... | .....
..K.. | .....
..... | .....
..E.. | ..E..
..... | .....
..S.. | .....
..... | .....
..I.. | .....
..... | .....
..X.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "T": { id: "enemy.tank" },
      "P": { id: "enemy.glassShield" },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.92 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.86 },
      "K": { id: "pickup.weapon.gun.splitterRifle", speed: 0.9 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.78 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.84 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.84 },
      "c": { id: "pickup.weapon.sword.needleRapier", speed: 0.86 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.76 }
    },
    balance: {
      enemyHp: 1.08,
      enemySpeed: 1.16
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track1.ts
var generatedTrack4 = {
  label: "First Glow",
  description: "A short teaching run with a weapon in reach, one lane at a time, then a calm two-lane finish.",
  durationSeconds: 28,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
..E.. | .....
..... | .....
..... | ..E..
..... | .....
..2.. | .....
..... | .....
..E.. | .....
..... | ..E..
..... | .....
..S.. | .....
..... | .....
.E... | .....
..... | ...E.
..... | .....
..a.. | .....
..... | .....
..E.. | ..E..
..... | .....
.E... | ...E.
..... | .....
..G.. | .....
..... | .....
..E.. | .....
..... | ..E..
..... | .....
..G.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.15 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.92 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.95 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.9 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 0.92
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track2.ts
var generatedTrack5 = {
  label: "Drift Lesson",
  description: "Alternating lanes introduce aim pressure, with a shield pocket before the first paired wave.",
  durationSeconds: 36,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
..E.. | ..E..
..... | .....
.E... | ...E.
..... | .....
..2.. | .....
..... | .....
..E.. | ..E..
..... | .....
..I.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..... | .....
..S.. | .....
..... | .....
..E.. | ..E..
.E... | .....
..... | ...E.
..... | .....
..a.. | .....
..... | .....
.E.E. | .E...
..... | ...E.
..... | .....
..E.. | ..E..
..... | .....
..G.. | .....
..... | .....
.E... | .....
..... | ..E..
..... | .....
..S.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.1 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.88 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.86 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.9 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.82 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track3.ts
var generatedTrack6 = {
  label: "Nebula Gate",
  description: "The learning finale adds fast flankers and a single tank, with clear recovery shelves between pressure waves.",
  durationSeconds: 52,
  startingGun: "pulsePistol",
  startingGunLevel: 2,
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
.E.E. | .E.E.
..... | .....
..W.. | .....
..... | ..W..
..... | .....
..J.. | .....
..... | .....
.E... | ...E.
..E.. | ..E..
..... | .....
..X.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..W.. | .....
..... | ..W..
..... | .....
..2.. | .....
..... | .....
..T.. | .....
..... | ..E..
.E... | .....
..... | .....
..b.. | .....
..... | .....
.E.E. | .E.E.
..... | .....
..W.. | ..E..
..E.. | ..W..
..... | .....
..I.. | .....
..... | .....
.E... | ...E.
..... | .....
..S.. | .....
..... | .....
..E.. | ..E..
..... | .....
..G.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "T": { id: "enemy.tank" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.15 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.88 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.9 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.85 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.9 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.92 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.9 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.82 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1.04
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/index.ts
var tracks = {
  "neon-nebulae-1": generatedTrack4,
  "neon-nebulae-2": generatedTrack5,
  "neon-nebulae-3": generatedTrack6,
  "aurora-1": generatedTrack,
  "aurora-2": generatedTrack2,
  "aurora-3": generatedTrack3
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
      this.require(track.durationSeconds > 0, `${id} duration must be positive.`);
      this.require(track.startingGun in gunFamily.members, `${id} has an unknown starting gun.`);
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
  const result2 = {
    hitEnemyIds: [],
    damage: 0,
    swingTriggered: false
  };
  if (state.cooldownLeft > 0) state.cooldownLeft = Math.max(0, state.cooldownLeft - delta);
  if (state.activeSlash) {
    state.activeSlash.progress = (now - state.activeSlash.startedAt) / state.activeSlash.durationMs;
    if (state.activeSlash.progress >= 1) state.activeSlash = null;
  }
  if (state.cooldownLeft > 0 || threats.length === 0) return result2;
  const selected = selectTargets(threats, sword.targetingMode, sword.maxTargets);
  if (selected.length === 0) return result2;
  state.cooldownLeft = sword.cooldownSeconds;
  result2.swingTriggered = true;
  result2.damage = sword.damage;
  for (const { target } of selected) result2.hitEnemyIds.push(target.id);
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
function worldYForProjectedY(screenY, settings, viewport) {
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const relativeY = -settings.height;
  const screenRatio = (horizonY - screenY) / focalLength;
  const denominator = sin - screenRatio * cos;
  if (Math.abs(denominator) < 1e-4) return Number.NEGATIVE_INFINITY;
  const worldZ = -relativeY * (cos + screenRatio * sin) / denominator;
  return viewport.playerY + settings.followDistance - worldZ;
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
var shieldPickupVisual = (options) => pickupShape("shield-ring", options);
var swordPickupVisual = (options) => pickupShape("spike-lance", options);

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

// projects/NeonSwarm/src/simulation/NeonSwarmSimulation.ts
var gunFireSoundIds = {
  pulsePistol: "Primary",
  needlerSmg: "NeedlerFire",
  burstCarbine: "BurstCarbineFire",
  heavyCannon: "HeavyCannonFire",
  splitterRifle: "SplitterRifleFire"
};
var swordSwingSoundIds = {
  arcBlade: "SwordSwing",
  cleaver: "SwordHeavySwing",
  needleRapier: "SwordStab"
};
var soundAlternativeCounts = {
  Primary: 3,
  EnemyDestroyed: 2,
  EnemyHit: 2,
  EnemySpawn: 2,
  Boss: 1,
  ProjectileHit: 2
};
var NeonSwarmSimulation = class _NeonSwarmSimulation {
  mode;
  canvas;
  stageElement;
  cameraSettings;
  squad = new SquadModel();
  aimControl = new AutoAimControlState();
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
  failureReason = "";
  playerActors = [];
  explodingPlayers = [];
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
    this.aimControl.laneSelected();
  }
  setSquadAim(value, options = {}) {
    if (options.requireActiveTrack && !this.activeTrack) return;
    this.squad.setAim(value, this.canvas.width * 0.22, (lane) => this.laneX(lane));
    this.aimControl.aimChanged();
  }
  releaseAim() {
    this.aimControl.aimReleased();
    this.play("AimRelease");
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
    this.activeByFamily.sword = new SwordState(swordId);
    this.playPickup("PickupSword");
    this.play("WeaponReady");
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
    const delta = rawDelta * combatTuning.globalSpeedMultiplier;
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
      this.onRunStatus?.(`${gunStatus}${shieldDef ? ` \xB7 ${shieldDef.label}` : ""}${swordDef ? ` \xB7 ${swordDef.label}` : ""} \xB7 ${Math.max(0, this.activeTrack.durationSeconds - this.combatElapsed).toFixed(1)}s`);
    }
    if (!this.aimControl.manual) {
      const laneEnemies = this.enemies.filter((enemy) => enemy.lane === this.squad.lane && !enemy.dying);
      const colOffsets = this.squad.frontRowColumnOffsets(this.scale());
      const offset = selectAutoAimOffset(laneEnemies, this.laneX(this.squad.lane), colOffsets, this.squad.aimOffset);
      this.squad.autoAim(offset, this.canvas.width * 0.22, (lane) => this.laneX(lane));
    }
    this.squad.update(delta);
    this.stageElement.dataset.squadLane = String(this.squad.lane);
    this.stageElement.dataset.squadAim = this.squad.aimOffset.toFixed(2);
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
    if (this.activeTrack && this.combatElapsed >= this.activeTrack.durationSeconds && this.enemies.length === 0) this.finish(this.breaches === 0);
  }
  render(now = this.combatNow) {
    const primitives = laneRunnerScenePrimitives(this.trackSceneId, this.canvas.width, this.canvas.height, now);
    const s = this.scale();
    for (const point of this.squad.points(this.playerY(), s)) {
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
        x: this.squad.x,
        y: this.playerY(),
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
    const helicopterViewport = helicopterViewportFor(this.canvas.width, this.canvas.height, this.playerY(), laneRunnerCameraFocusX(this.canvas.width, this.squad.x));
    const playerSize = 14;
    for (const [index, point] of this.squad.points(this.playerY(), s).entries()) {
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
        sword: this.activeByFamily.sword?.swordId ?? null
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
    while (this.nextTrackEntity < this.trackEntities.length && this.trackEntities[this.nextTrackEntity].distanceFromPlayer <= this.combatElapsed + this.spawnLeadSeconds(this.trackEntities[this.nextTrackEntity])) {
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
        this.spawnGunPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(120, entity), gunId: candidate, level: 1, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.shield.")) {
        const candidate = entity.id.slice("pickup.weapon.shield.".length);
        if (!(candidate in shieldFamily.members)) throw new Error(`Track uses unknown shield id "${entity.id}".`);
        this.spawnShieldPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(120, entity), shieldId: candidate, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.sword.")) {
        const candidate = entity.id.slice("pickup.weapon.sword.".length);
        if (!(candidate in swordFamily.members)) throw new Error(`Track uses unknown sword id "${entity.id}".`);
        this.spawnSwordPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(120, entity), swordId: candidate, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        this.spawnMultiplierPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(125, entity), speedMultiplier: entity.speedMultiplier });
      } else {
        throw new Error(`Track entity id "${entity.id}" is not supported by the lane runner.`);
      }
    }
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
      const swordThreats = queryNearbyThreats(this.enemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: swordDef.range * this.scale(),
        includeAdjacentLanes: swordDef.targetingMode === "nearestInEitherLane",
        maxTargets: swordDef.maxTargets,
        purpose: "sword"
      });
      const swordResult = tickSword(swordState, swordDef, swordThreats, px, py, this.combatNow, delta, neonPalette[swordDef.color]);
      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        this.playSwordSwing(swordState.swordId);
        for (const enemy of [...this.enemies]) {
          if (enemy.dying || !swordResult.hitEnemyIds.includes(enemy.id)) continue;
          const result2 = resolveEnemyDamage({
            enemy,
            effects: this.enemyExitEffects,
            damage: swordResult.damage,
            impactMagnitude: swordResult.damage,
            color: this.enemyExitColor(enemy)
          });
          if (result2.killed) {
            this.kills++;
            this.play(result2.definition.deathSound);
          } else this.play("SwordHit");
        }
      }
    }
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
        this.activeByFamily.sword = new SwordState(pickup.swordId);
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
  entityBaseY(entity) {
    return entity.id === "pickup.unitMultiplier.2x" ? 125 : entity.id.startsWith("pickup.") ? 120 : 110;
  }
  entitySpeed(entity) {
    return (enemyDefinitionFromTrackId(entity.id)?.definition.speed ?? 72) * entity.speedMultiplier * this.scale();
  }
  visualSpawnY() {
    return worldYForProjectedY(this.canvas.height * 0.14, this.cameraSettings, { height: this.canvas.height, playerY: this.playerY() });
  }
  enemySpawnY(entity) {
    return this.entityBaseY(entity) * this.scale() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }
  pickupSpawnY(baseY, entity) {
    return baseY * this.scale() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }
  spawnLeadSeconds(entity) {
    return Math.min(entity.distanceFromPlayer, Math.max(0, (this.entityBaseY(entity) * this.scale() - this.visualSpawnY()) / this.entitySpeed(entity)));
  }
  play(id) {
    const alternatives = soundAlternativeCounts[id] ?? 0;
    if (alternatives > 0 && this.sound?.playRotated) this.sound.playRotated(id, alternatives);
    else this.sound?.play(id);
  }
  playGunFire(gunId) {
    this.play(gunFireSoundIds[gunId]);
  }
  playSwordSwing(swordId) {
    this.play(swordSwingSoundIds[swordId]);
  }
  playPickup(id) {
    this.play("Pickup");
    this.play(id);
  }
};

// projects/NeonSwarm/src/main.ts
var canvas = document.querySelector("#game-canvas");
var trackSelect = document.querySelector("#track-select");
var trackList = document.querySelector("#track-list");
var status = document.querySelector("#status");
var runStatus = document.querySelector("#run-status");
var result = document.querySelector("#result");
var resultTitle = document.querySelector("#result-title");
var resultDetail = document.querySelector("#result-detail");
var error = document.querySelector("#error");
var developerTools = document.querySelector("#developer-tools");
var gameElement = document.querySelector("#game");
var cameraLab = document.querySelector("#camera-lab");
var cameraOutputText = document.querySelector("#camera-output-text");
var urlOptions = window.JustTheGamesPlease?.urlOptions;
var developerMode = urlOptions?.isEnabled("dev") ?? false;
var cameraControlsMode = developerMode || (urlOptions?.isEnabled("cameracontrols") ?? false);
var defaultTrackSceneId = Object.values(trackFamily.families)[0].environment.sceneId;
var trackShapeIdsByFamily = {
  neonNebulae: ["hunter-eye", "bruiser-prism", "elite-star"],
  aurora: ["trick-vortex", "elite-wings", "tank-reactor"]
};
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
  const shapeMarkup = (shape, index, count) => {
    const scale = 22 - index * 2;
    const x = 45 + (index - (count - 1) / 2) * 21;
    const y = 18 + Math.sin(index) * 2;
    const points = shape.points.map(([px, py]) => `${(x + px * scale * 0.42).toFixed(1)},${(y + py * scale * 0.42).toFixed(1)}`).join(" ");
    const hole = shape.holes?.[0]?.map(([px, py]) => `${(x + px * scale * 0.24).toFixed(1)},${(y + py * scale * 0.24).toFixed(1)}`).join(" ");
    const colorClass = index % 3;
    return `<g class="track-glyph__shape track-glyph__shape--${colorClass}"><polygon points="${points}"></polygon>${hole ? `<polygon class="track-glyph__hole" points="${hole}"></polygon>` : ""}</g>`;
  };
  const trackGlyphMarkup = (familyId, trackIndex) => {
    const shapeIds = trackShapeIdsByFamily[familyId].slice(0, trackIndex + 1);
    const shapes = shapeIds.map((id) => getNeonShape(id)).filter((shape) => shape !== void 0);
    return `
      <svg class="track-glyph" viewBox="0 0 90 38" aria-hidden="true">
        <line x1="18" y1="33" x2="72" y2="33"></line>
        ${shapes.map((shape, index) => shapeMarkup(shape, index, shapes.length)).join("")}
      </svg>`;
  };
  const renderTrackFamilies = () => {
    trackList.innerHTML = Object.entries(trackFamily.families).map(([familyId, family]) => `
      <section class="track-family" aria-label="${family.label}">
        <div class="track-family__header">
          <div>
            <span class="track-family__scene">${getLaneRunnerSceneName(family.environment.sceneId)}</span>
            <h3>${family.label}</h3>
          </div>
        </div>
        <div class="track-family__row">
          ${family.trackIds.map((trackId, trackIndex) => {
      const track = trackFamily.members[trackId];
      return `
              <a class="track-card" href="${trackRoute(trackId)}" data-track="${trackId}">
                ${trackGlyphMarkup(familyId, trackIndex)}
                <strong>${track.label}</strong>
                <b>${track.durationSeconds}s</b>
              </a>`;
    }).join("")}
        </div>
      </section>`).join("");
  };
  const resetToTracks = () => {
    sim.reset();
    gameElement.dataset.page = "tracks";
    gameElement.style.removeProperty("background-image");
    result.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track family, then pick a run.";
    runStatus.textContent = "";
  };
  const startTrack = (trackId) => {
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap a side to switch lanes. Small joystick motion aims; full motion crosses lanes.";
    sim.startTrack(trackFamily.members[trackId]);
  };
  const handleRoute = () => {
    const trackId = trackIdFromRoute();
    if (trackId) startTrack(trackId);
    else resetToTracks();
  };
  renderTrackFamilies();
  document.querySelector("#back-to-tracks").addEventListener("click", navigateToTracks);
  window.addEventListener("hashchange", handleRoute);
  if (!location.hash) history.replaceState(null, "", "#tracks");
  handleRoute();
  bindSquadInput(gameElement, "#joystick", {
    lane: () => sim.snapshot().squad.lane,
    setLane: (lane) => sim.setSquadLane(lane, { requireActiveTrack: true }),
    setAim: (value) => sim.setSquadAim(value, { requireActiveTrack: true }),
    releaseAim: () => sim.releaseAim()
  });
  sim.startLoop();
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Byb2plY3RpbGUudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ZpY3RvcnkudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNC50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s1LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazYudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2syLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL2luZGV4LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL011bHRpcGxpZXJGYW1pbHkudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU2hpZWxkRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvaW5wdXQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9hdXRvQWltLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L2d1blNpbXVsYXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnkudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc2hpZWxkRXZhbHVhdG9yLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L3N3b3JkRXZhbHVhdG9yLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFbnRyYW5jZVZpc3VhbHMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUV4aXRWaXN1YWxzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvdmlld3BvcnQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUNhdGFsb2cudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9mYW1pbHlWaXN1YWxzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zY2VuZUVudmlyb25tZW50LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2hhcGVWaXN1YWxzLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc3F1YWQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaW11bGF0aW9uL05lb25Td2FybVNpbXVsYXRpb24udHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9tYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgbmVvblBhbGV0dGUgPSB7XG4gIGN5YW46IFwiIzU1ZTdmZlwiLFxuICBwaW5rOiBcIiNmZjRmOWFcIixcbiAgZ3JlZW46IFwiIzdmZmZjMlwiLFxuICBnb2xkOiBcIiNmZmQ0NWNcIixcbiAgdmlvbGV0OiBcIiNhOTg3ZmZcIixcbiAgb3JhbmdlOiBcIiNmZjhhNDVcIixcbiAgcmVkOiBcIiNmZjU1NzdcIixcbiAgZGVlcEJsdWU6IFwiIzI4N2RmZlwiLFxuICB3aGl0ZUhvdDogXCIjZjRmYmZmXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBOZW9uQ29sb3JOYW1lID0ga2V5b2YgdHlwZW9mIG5lb25QYWxldHRlO1xuXG5leHBvcnQgY29uc3QgZ2xvd1ByZXNldHMgPSB7XG4gIHNvZnQ6IDAuMzgsXG4gIHN0YW5kYXJkOiAwLjY1LFxuICBpbnRlbnNlOiAxLFxufSBhcyBjb25zdDtcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVGYW1pbHkgPSBcInBsYXllclwiIHwgXCJodW50ZXJcIiB8IFwiYnJ1aXNlclwiIHwgXCJ0YW5rXCIgfCBcInRyaWNrc3RlclwiIHwgXCJlbGl0ZVwiO1xuZXhwb3J0IHR5cGUgTmVvblJvY2tTdHlsZSA9IFwicGl0Y2hcIiB8IFwicm9sbFwiIHwgXCJ5YXdcIiB8IFwicHVsc2VcIiB8IFwib3JiaXRcIjtcbmV4cG9ydCB0eXBlIE5lb25Qb2ludCA9IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHk7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W107XG4gIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdO1xuICByb2NrOiBOZW9uUm9ja1N0eWxlO1xuICBkZXB0aD86IG51bWJlcjtcbn1cblxuY29uc3QgcmVndWxhciA9IChzaWRlczogbnVtYmVyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMiwgc3ggPSAxLCBzeSA9IDEpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaWRlcyB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAqIDIgLyBzaWRlcztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHN4LCBNYXRoLnNpbihhbmdsZSkgKiBzeV0gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBzdGFyID0gKHBvaW50czogbnVtYmVyLCBpbm5lciA9IC40Miwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwb2ludHMgKiAyIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgcmFkaXVzID0gaSAlIDIgPyBpbm5lciA6IDE7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJIC8gcG9pbnRzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3QgZGlhbW9uZDogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV0sIFstMSwgMF1dO1xuY29uc3QgYXJyb3c6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsuODIsIC42OF0sIFsuMjcsIC40NV0sIFswLCAuOTJdLCBbLS4yNywgLjQ1XSwgWy0uODIsIC42OF1dO1xuY29uc3QgY2hldnJvbjogTmVvblBvaW50W10gPSBbWy0xLCAtLjYyXSwgWzAsIC0uMDVdLCBbMSwgLS42Ml0sIFsuMjgsIC44Ml0sIFswLCAuMzRdLCBbLS4yOCwgLjgyXV07XG5jb25zdCBzcXVhcmU6IE5lb25Qb2ludFtdID0gcmVndWxhcig0LCBNYXRoLlBJIC8gNCk7XG5jb25zdCBjb2xvcnM6IFJlY29yZDxOZW9uU2hhcGVGYW1pbHksIHN0cmluZz4gPSB7XG4gIHBsYXllcjogbmVvblBhbGV0dGUuY3lhbiwgaHVudGVyOiBuZW9uUGFsZXR0ZS5yZWQsIGJydWlzZXI6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgdGFuazogbmVvblBhbGV0dGUuZ29sZCwgdHJpY2tzdGVyOiBcIiM5Y2ZmNTJcIiwgZWxpdGU6IFwiIzcwZGZmZlwiLFxufTtcblxuY29uc3QgbWFrZSA9IChcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHksIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSxcbiAgcm9jazogTmVvblJvY2tTdHlsZSwgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW10sXG4pOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uID0+ICh7IGlkLCBuYW1lLCBmYW1pbHksIHBvaW50cywgaG9sZXMsIHJvY2ssIGNvbG9yOiBjb2xvcnNbZmFtaWx5XSwgZGVwdGg6IGZhbWlseSA9PT0gXCJ0YW5rXCIgPyAuMjIgOiAuMTQgfSk7XG5cbmV4cG9ydCBjb25zdCBuZW9uU2hhcGVDYXRhbG9nOiByZWFkb25seSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uW10gPSBbXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJhcnJvdy1jbGFzc2ljXCIsIFwiQXJyb3cgQ2xhc3NpY1wiLCBhcnJvdywgXCJwaXRjaFwiLCBbYXJyb3cubWFwKChbeCwgeV0pID0+IFt4ICogLjQyLCB5ICogLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImRlbHRhLXNsZWVrXCIsIFwiRGVsdGEgU2xlZWtcIiwgW1swLC0xXSxbLjksLjgyXSxbMCwuNDhdLFstLjksLjgyXV0sIFwicGl0Y2hcIiwgW1tbMCwtLjQ1XSxbLjM1LC40NV0sWzAsLjI4XSxbLS4zNSwuNDVdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Rhci1jb3JlXCIsIFwiU3RhciBDb3JlXCIsIHN0YXIoNCwgLjMyKSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiaGV4LWZpZ2h0ZXJcIiwgXCJIZXggRmlnaHRlclwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LCAtTWF0aC5QSS8yLCAuNDgsIC40OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcIndpbmctc3BsaXRcIiwgXCJXaW5nIFNwbGl0XCIsIFtbLTEsLS44NV0sWy0uMjUsLjFdLFswLC0uMjVdLFsuMjUsLjFdLFsxLC0uODVdLFsuNjYsLjcyXSxbMCwuMzVdLFstLjY2LC43Ml1dLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjE4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInRyaWFkLXBvZFwiLCBcIlRyaWFkIFBvZFwiLCByZWd1bGFyKDMpLCBcInlhd1wiLCBbcmVndWxhcigzLCAtTWF0aC5QSS8yLCAuMzgsIC4zOCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNwaWtlLWxhbmNlXCIsIFwiU3Bpa2UgTGFuY2VcIiwgW1swLC0xXSxbLjQ4LC42NV0sWy4xOCwuNDJdLFswLDFdLFstLjE4LC40Ml0sWy0uNDgsLjY1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJvcmJpdC1kcm9uZVwiLCBcIk9yYml0IERyb25lXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLCAwLCAuNTgsIC41OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNoaWVsZC1yaW5nXCIsIFwiU2hpZWxkIFJpbmdcIiwgcmVndWxhcigzMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMzIsIDAsIC45MSwgLjkxKV0pLFxuXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZGFydFwiLCBcIkRhcnRcIiwgW1stMSwtLjddLFsxLDBdLFstMSwuN10sWy0uNDUsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWtpdGVcIiwgXCJLaXRlXCIsIFtbLTEsLS43NV0sWzEsMF0sWy0xLC43NV0sWy0uNTUsMF1dLCBcInJvbGxcIiwgW3JlZ3VsYXIoMywwLC4zNSwuMzUpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItbmVlZGxlXCIsIFwiTmVlZGxlXCIsIFtbLTEsLS40Ml0sWzEsMF0sWy0xLC40Ml0sWy0uNTUsMF1dLCBcInlhd1wiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci10YWxvblwiLCBcIlRhbG9uXCIsIHN0YXIoMywuMjgpLCBcInJvbGxcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItc2hhcmRcIiwgXCJTaGFyZFwiLCBkaWFtb25kLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXZlZVwiLCBcIlZlZVwiLCBjaGV2cm9uLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWV5ZVwiLCBcIldhdGNoZXJcIiwgcmVndWxhcigzLCBNYXRoLlBJLzIpLCBcInlhd1wiLCBbcmVndWxhcigzLE1hdGguUEkvMiwuNDIsLjQyKV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJ1cnN0XCIsIFwiQnVyc3RcIiwgc3Rhcig4LC4zNSksIFwicHVsc2VcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYm9sdFwiLCBcIkJvbHRcIiwgW1stLjcsLTFdLFsuMTUsLS4zNV0sWy0uMjUsLS4yXSxbLjcsMV0sWy0uMSwuMzJdLFsuMywuMTVdXSwgXCJyb2xsXCIpLFxuXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1mcmFtZVwiLCBcIkZyYW1lXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40OCx5Ki40OF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZW1cIiwgXCJHZW1cIiwgZGlhbW9uZCwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWhleFwiLCBcIkhleCBDb3JlXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvd25cIiwgXCJDcm93blwiLCBbWy0xLC0uNzVdLFstLjUsLS41NV0sWzAsLS44NV0sWy41LC0uNTVdLFsxLC0uNzVdLFsuOCwuOF0sWy0uOCwuOF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm9zc1wiLCBcIkNyb3NzXCIsIFtbLS4zNSwtMV0sWy4zNSwtMV0sWy4zNSwtLjM1XSxbMSwtLjM1XSxbMSwuMzVdLFsuMzUsLjM1XSxbLjM1LDFdLFstLjM1LDFdLFstLjM1LC4zNV0sWy0xLC4zNV0sWy0xLC0uMzVdLFstLjM1LC0uMzVdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1wcmlzbVwiLCBcIlByaXNtXCIsIGRpYW1vbmQsIFwicHVsc2VcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VhclwiLCBcIkdlYXJcIiwgc3Rhcig4LC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXIteFwiLCBcIlggQ29yZVwiLCBbWy0xLC0uNjVdLFstLjY1LC0xXSxbMCwtLjM1XSxbLjY1LC0xXSxbMSwtLjY1XSxbLjM1LDBdLFsxLC42NV0sWy42NSwxXSxbMCwuMzVdLFstLjY1LDFdLFstMSwuNjVdLFstLjM1LDBdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItc2xhYlwiLCBcIlNsYWJcIiwgW1stLjY1LC0xXSxbMSwtMV0sWy42NSwxXSxbLTEsMV1dLCBcInBpdGNoXCIpLFxuXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1oZXhcIiwgXCJIZWF2eSBIZXhcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4zOCwuMzgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1iYXJcIiwgXCJBcm1vciBCYXJcIiwgW1stLjc1LC0xXSxbLjc1LC0xXSxbMSwtLjQ1XSxbLjc1LDFdLFstLjc1LDFdLFstMSwuNDVdXSwgXCJwaXRjaFwiLCBbW1stLjQ4LC0uMThdLFsuNDgsLS4xOF0sWy40OCwuMThdLFstLjQ4LC4xOF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1ibG9ja1wiLCBcIkJsb2NrXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40Mix5Ki40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1vY3RcIiwgXCJPY3RhZ29uXCIsIHJlZ3VsYXIoOCksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstZm9ydFwiLCBcIkZvcnRyZXNzXCIsIHJlZ3VsYXIoNiksIFwicGl0Y2hcIiwgW3JlZ3VsYXIoNiwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1yZWFjdG9yXCIsIFwiUmVhY3RvclwiLCByZWd1bGFyKDEwKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC41NCwuNTQpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1jaXRhZGVsXCIsIFwiQ2l0YWRlbFwiLCBbWy0uNjUsLTFdLFsuNjUsLTFdLFsuNjUsLS43Ml0sWzEsLS43Ml0sWzEsLjcyXSxbLjY1LC43Ml0sWy42NSwxXSxbLS42NSwxXSxbLS42NSwuNzJdLFstMSwuNzJdLFstMSwtLjcyXSxbLS42NSwtLjcyXV0sIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYnVua2VyXCIsIFwiQnVua2VyXCIsIFtbLS43MiwtMV0sWy43MiwtMV0sWzEsLS41OF0sWzEsLjU4XSxbLjcyLDFdLFstLjcyLDFdLFstMSwuNThdLFstMSwtLjU4XV0sIFwicGl0Y2hcIiwgW1tbLS41LC0uMTRdLFsuNSwtLjE0XSxbLjUsLjE0XSxbLS41LC4xNF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1zdW5cIiwgXCJTdW4gVGFua1wiLCByZWd1bGFyKDEyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuMjgsLjI4KV0pLFxuXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1kaWFtb25kXCIsIFwiUGhhc2UgRGlhbW9uZFwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY2hldnJvblwiLCBcIlNsaXBzdHJlYW1cIiwgW1stMSwtLjhdLFstLjIsMF0sWy0xLC44XSxbLS4zNSwuOF0sWy40NSwwXSxbLS4zNSwtLjhdLFsuMjUsLS44XSxbMSwwXSxbLjI1LC44XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1zcXVhcmVcIiwgXCJUaWx0IEJveFwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMzQseSouMzRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY29tcGFzc1wiLCBcIkNvbXBhc3NcIiwgZGlhbW9uZCwgXCJ5YXdcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1leWVcIiwgXCJQaGFzZSBFeWVcIiwgcmVndWxhcigzKSwgXCJwdWxzZVwiLCBbcmVndWxhcig4LDAsLjE4LC4xOCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWhvdXJnbGFzc1wiLCBcIkhvdXJnbGFzc1wiLCBbWy0xLC0xXSxbMSwtMV0sWy4yOCwwXSxbMSwxXSxbLTEsMV0sWy0uMjgsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stbGlua1wiLCBcIkxpbmtcIiwgcmVndWxhcigxMiwwLDEsLjU1KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNjIsLjIyKV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stdm9ydGV4XCIsIFwiVm9ydGV4XCIsIHN0YXIoNywuNTYpLCBcInJvbGxcIiwgW3JlZ3VsYXIoNywwLC4yNSwuMjUpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1nYXRlXCIsIFwiR2hvc3QgR2F0ZVwiLCBzcXVhcmUsIFwicHVsc2VcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjc4LHkqLjc4XSBhcyBjb25zdCldKSxcblxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zdGFyXCIsIFwiTm92YSBTdGFyXCIsIHN0YXIoOCwuNTUpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4zLC4zKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zYXdcIiwgXCJIYWxvIFNhd1wiLCBzdGFyKDEyLC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjQyLC40MildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY3Jvd25cIiwgXCJWb2lkIENyb3duXCIsIHN0YXIoNywuNDgpLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjIseSouMjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1wcmlzbVwiLCBcIlJveWFsIFByaXNtXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjUseSouNV0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLW9yYml0XCIsIFwiT3JiaXQgRXllXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLDAsLjYsLjYpLCByZWd1bGFyKDEyLDAsLjIsLjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNpcmN1aXRcIiwgXCJDaXJjdWl0IExvcmRcIiwgc3Rhcig4LC43NSksIFwieWF3XCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40LHkqLjRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zZW50aW5lbFwiLCBcIlNlbnRpbmVsXCIsIHN0YXIoMTAsLjYyKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC4yMiwuMjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXdpbmdzXCIsIFwiTmlnaHQgV2luZ3NcIiwgW1stMSwtLjhdLFstLjcsLjM1XSxbLS4yNSwuMDVdLFswLC44NV0sWy4yNSwuMDVdLFsuNywuMzVdLFsxLC0uOF0sWy4zNSwtLjM1XSxbMCwtLjA1XSxbLS4zNSwtLjM1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWVtcGVyb3JcIiwgXCJFbXBlcm9yXCIsIHN0YXIoOCwuNDgpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4yNCwuMjQpXSksXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0TmVvblNoYXBlID0gKGlkOiBzdHJpbmcpOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkID0+XG4gIG5lb25TaGFwZUNhdGFsb2cuZmluZChzaGFwZSA9PiBzaGFwZS5pZCA9PT0gaWQpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiwgTmVvblBvaW50IH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uID0gXCJhYm92ZVwiIHwgXCJiZWxvd1wiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVMYWJlbCB7XG4gIHRleHQ6IHN0cmluZztcbiAgcG9zaXRpb24/OiBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogbnVtYmVyO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUluc3RhbmNlIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIGNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgc2NhbGVYPzogbnVtYmVyO1xuICBzY2FsZVk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgcm90YXRpb25ZPzogbnVtYmVyO1xuICByb3RhdGlvblo/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIHNoaWVsZGVkPzogYm9vbGVhbjtcbiAgbGluZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgZW5lcmd5SW50ZW5zaXR5PzogbnVtYmVyO1xuICBlbmVyZ3lDb3ZlcmFnZT86IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ/OiBudW1iZXI7XG4gIGVuZXJneUJsZWVkPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBlbnRyYW5jZVByb2dyZXNzPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZXhwbG9kZVByb2dyZXNzPzogbnVtYmVyO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xufVxuXG50eXBlIFYzID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xudHlwZSBWZXJ0ZXggPSB7XG4gIHA6IFYzOyBuOiBWMzsgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTsgZ2xvdzogbnVtYmVyO1xuICBlZmZlY3Q6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IGZsb2F0c1BlclZlcnRleCA9IDE0O1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IFNjZW5lIHsgYXNwZWN0OiBmMzIsIGNhbWVyYTogZjMyLCB0aW1lOiBmMzIsIHBhZGRpbmc6IGYzMiB9XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbnN0cnVjdCBJbnB1dCB7XG4gIEBsb2NhdGlvbigwKSBwb3NpdGlvbjogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMykgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oNCkgZWZmZWN0OiB2ZWM0Zixcbn1cbnN0cnVjdCBPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGVmZmVjdDogdmVjNGYsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oaW5wdXQ6IElucHV0KSAtPiBPdXRwdXQge1xuICBsZXQgZGVwdGggPSBzY2VuZS5jYW1lcmEgLSBpbnB1dC5wb3NpdGlvbi56O1xuICB2YXIgb3V0cHV0OiBPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKGlucHV0LnBvc2l0aW9uLnggKiA0IC8gc2NlbmUuYXNwZWN0LCBpbnB1dC5wb3NpdGlvbi55ICogNCwgZGVwdGggKiAuMDQ1LCBkZXB0aCk7XG4gIG91dHB1dC5ub3JtYWwgPSBpbnB1dC5ub3JtYWw7XG4gIG91dHB1dC5jb2xvciA9IGlucHV0LmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGlucHV0Lmdsb3c7XG4gIG91dHB1dC5lZmZlY3QgPSBpbnB1dC5lZmZlY3Q7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBub3JtYWwgPSBub3JtYWxpemUoaW5wdXQubm9ybWFsKTtcbiAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0uNDUsIC0uNywgMSkpO1xuICBsZXQgZGlmZnVzZSA9IC4xOCArIG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApICogLjgyO1xuICBsZXQgcmltID0gcG93KDEgLSBhYnMobm9ybWFsLnopLCAyLjIpO1xuICBsZXQgc2lkZSA9IDEgLSBhYnMobm9ybWFsLnopO1xuICBsZXQgcmFyZVN1cmdlID0gcG93KG1heCguMCwgc2luKHNjZW5lLnRpbWUgKiBpbnB1dC5lZmZlY3QueiAqIC44MiArIGlucHV0LmNvbG9yLnIgKiA3LjApKSwgMjIuMClcbiAgICAqIGlucHV0LmVmZmVjdC54ICogaW5wdXQuZWZmZWN0LnkgKiBpbnB1dC5lZmZlY3QudztcbiAgbGV0IGVuZXJneSA9IGlucHV0LmNvbG9yICogKGRpZmZ1c2UgKiAuMTIgKyByaW0gKiBpbnB1dC5nbG93ICogLjM2ICsgc2lkZSAqIC4wOCArIHJhcmVTdXJnZSAqIC43KTtcbiAgcmV0dXJuIHZlYzRmKGVuZXJneSArIHZlYzNmKHJhcmVTdXJnZSAqIC4xOCksIC4xMiArIHNpZGUgKiAuMTIgKyByYXJlU3VyZ2UgKiAuMjgpO1xufVxuQGZyYWdtZW50IGZuIGxpbmVGcmFnbWVudChpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYWxvbmcgPSBpbnB1dC5ub3JtYWwueDtcbiAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5ub3JtYWwueSk7XG4gIGxldCBwaGFzZSA9IGlucHV0Lm5vcm1hbC56O1xuICBsZXQgaW50ZW5zaXR5ID0gaW5wdXQuZWZmZWN0Lng7XG4gIGxldCBjb3ZlcmFnZSA9IGlucHV0LmVmZmVjdC55O1xuICBsZXQgc3BlZWQgPSBpbnB1dC5lZmZlY3QuejtcbiAgbGV0IGJsZWVkID0gaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBwdWxzZUEgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAzMS4wIC0gc2NlbmUudGltZSAqIHNwZWVkICogNS40ICsgcGhhc2UpKSwgMTAuMCk7XG4gIGxldCBwdWxzZUIgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAxMy4wICsgc2NlbmUudGltZSAqIHNwZWVkICogMy4xICsgcGhhc2UgKiAyLjcpKSwgMTguMCk7XG4gIGxldCBub2lzZSA9IHNpbihhbG9uZyAqIDcxLjAgKyBwaGFzZSAqIDguMykgKiAuNSArIC41O1xuICBsZXQgdGhyZXNob2xkID0gMS4wIC0gY292ZXJhZ2U7XG4gIGxldCBlbGVjdHJpY2l0eSA9IHNtb290aHN0ZXAodGhyZXNob2xkLCB0aHJlc2hvbGQgKyAuMTgsIHB1bHNlQSAqIC42NSArIHB1bHNlQiAqIC41NSArIG5vaXNlICogLjE4KTtcbiAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKC4wNiwgLjI4LCBhY3Jvc3MpO1xuICBsZXQgaGFsbyA9IDEuMCAtIHNtb290aHN0ZXAoLjEyLCAxLjAsIGFjcm9zcyk7XG4gIGxldCBzdXJnZSA9IGVsZWN0cmljaXR5ICogaW50ZW5zaXR5O1xuICBsZXQgcHVsc2UgPSAuNzggKyBzaW4oc2NlbmUudGltZSAqIHNwZWVkICogMi4xICsgcGhhc2UpICogLjEzICsgZWxlY3RyaWNpdHkgKiAuMjQ7XG4gIGxldCBjbG91ZCA9IGhhbG8gKiAoLjEzICsgc3VyZ2UgKiAuNTIpO1xuICBsZXQgaG90ID0gaW5wdXQuY29sb3IgKiAocHVsc2UgKyBjbG91ZCAqIDIuMSkgKiBpbnB1dC5nbG93ICsgdmVjM2YoY29yZSAqIHN1cmdlICogMS4zNSk7XG4gIGxldCBhbHBoYSA9IChjb3JlICogKC43MiArIHB1bHNlICogLjIpICsgY2xvdWQgKyAoMS4wIC0gYWNyb3NzKSAqIGJsZWVkICogZWxlY3RyaWNpdHkgKiAuMjQpICogaW5wdXQuZ2xvdztcbiAgcmV0dXJuIHZlYzRmKGhvdCwgY2xhbXAoYWxwaGEsIDAuMCwgMS4wKSk7XG59YDtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3Qgc3ViID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcbmNvbnN0IGNyb3NzID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzFdKmJbMl0tYVsyXSpiWzFdLCBhWzJdKmJbMF0tYVswXSpiWzJdLCBhWzBdKmJbMV0tYVsxXSpiWzBdXTtcbmNvbnN0IG5vcm1hbGl6ZSA9ICh2OiBWMyk6IFYzID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCguLi52KSB8fCAxO1xuICByZXR1cm4gW3ZbMF0gLyBsZW5ndGgsIHZbMV0gLyBsZW5ndGgsIHZbMl0gLyBsZW5ndGhdO1xufTtcbmNvbnN0IHJvdGF0ZSA9IChbeCwgeSwgel06IFYzLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCByejogbnVtYmVyKTogVjMgPT4ge1xuICBsZXQgYSA9IHkgKiBNYXRoLmNvcyhyeCkgLSB6ICogTWF0aC5zaW4ocngpLCBiID0geSAqIE1hdGguc2luKHJ4KSArIHogKiBNYXRoLmNvcyhyeCk7IHkgPSBhOyB6ID0gYjtcbiAgYSA9IHggKiBNYXRoLmNvcyhyeSkgKyB6ICogTWF0aC5zaW4ocnkpOyBiID0gLXggKiBNYXRoLnNpbihyeSkgKyB6ICogTWF0aC5jb3MocnkpOyB4ID0gYTsgeiA9IGI7XG4gIHJldHVybiBbeCAqIE1hdGguY29zKHJ6KSAtIHkgKiBNYXRoLnNpbihyeiksIHggKiBNYXRoLnNpbihyeikgKyB5ICogTWF0aC5jb3MocnopLCB6XTtcbn07XG5cbmZ1bmN0aW9uIG1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCBzY2FsZVggPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVggPz8gMSk7XG4gIGNvbnN0IHNjYWxlWSA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWSA/PyAxKTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgZW50cmFuY2VQcm9ncmVzcyA9IGluc3RhbmNlLmVudHJhbmNlUHJvZ3Jlc3MgPz8gMTtcbiAgY29uc3QgZW50cmFuY2VFYXNlID0gZW50cmFuY2VQcm9ncmVzcyAqIGVudHJhbmNlUHJvZ3Jlc3MgKiAoMyAtIDIgKiBlbnRyYW5jZVByb2dyZXNzKTtcbiAgY29uc3QgZW50cmFuY2VPZmZzZXQgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleDogbnVtYmVyKTogVjMgPT4ge1xuICAgIGlmIChlbnRyYW5jZVByb2dyZXNzID49IDEpIHJldHVybiBbMCwgMCwgMF07XG4gICAgY29uc3Qgc2VlZCA9IE1hdGguc2luKGluZGV4ICogOTEuMTcgKyBwb2ludFswXSAqIDM3LjIgKyBwb2ludFsxXSAqIDUzLjcgKyB6ICogMjkuMSkgKiA0Mzc1OC41NDUzO1xuICAgIGNvbnN0IHJhbmRvbSA9IHNlZWQgLSBNYXRoLmZsb29yKHNlZWQpO1xuICAgIGNvbnN0IGFuZ2xlID0gcmFuZG9tICogTWF0aC5QSSAqIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKGluc3RhbmNlLmVudHJhbmNlTWFnbml0dWRlID8/IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqICgxIC0gZW50cmFuY2VFYXNlKSAqICguMzUgKyByYW5kb20gKiAuNzUpO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsIChyYW5kb20gLSAuNSkgKiByYWRpdXMgKiAuNTVdO1xuICB9O1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlciwgaW5kZXggPSAwKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIGNvbnN0IGUgPSBlbnRyYW5jZU9mZnNldChwb2ludCwgeiwgaW5kZXgpO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApICsgZVswXSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApICsgZVsxXSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApICsgZVsyXV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgY29uc3QgYWRkID0gKGE6IFYzLCBiOiBWMywgYzogVjMsIG5vcm1hbD86IFYzKSA9PiB7XG4gICAgY29uc3QgbiA9IG5vcm1hbCA/PyBub3JtYWxpemUoY3Jvc3Moc3ViKGIsIGEpLCBzdWIoYywgYSkpKTtcbiAgICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gICAgXTtcbiAgICBbYSxiLGNdLmZvckVhY2gocCA9PiBvdXRwdXQucHVzaCh7IHAsIG4sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlLCBlZmZlY3QgfSkpO1xuICB9O1xuICBjb25zdCBmcm9udCA9IHNoYXBlLnBvaW50cy5tYXAoKHBvaW50LCBpbmRleCkgPT4gbW92ZShwb2ludCwgZGVwdGggLyAyLCBpbmRleCkpO1xuICBjb25zdCBiYWNrID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCAtZGVwdGggLyAyLCBpbmRleCArIHNoYXBlLnBvaW50cy5sZW5ndGgpKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBmcm9udC5sZW5ndGggLSAxOyBpKyspIGFkZChmcm9udFswXSwgZnJvbnRbaV0sIGZyb250W2kgKyAxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYmFjay5sZW5ndGggLSAxOyBpKyspIGFkZChiYWNrWzBdLCBiYWNrW2kgKyAxXSwgYmFja1tpXSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IChpICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tpXSwgYmFja1tuZXh0XSk7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW25leHRdLCBmcm9udFtuZXh0XSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBlZGdlTWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlcik6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlWCwgLXBvaW50WzFdICogc2NhbGVZLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCldO1xuICB9O1xuICBjb25zdCBleHBsb2RlID0gKGE6IFYzLCBiOiBWMywgaW5kZXg6IG51bWJlcik6IFtWMywgVjNdID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwLCAxIC0gZW50cmFuY2VFYXNlKTtcbiAgICBpZiAoIXByb2dyZXNzKSByZXR1cm4gW2EsIGJdO1xuICAgIGNvbnN0IG14ID0gKGFbMF0gKyBiWzBdKSAvIDIgLSAoaW5zdGFuY2UueCA/PyAwKSwgbXkgPSAoYVsxXSArIGJbMV0pIC8gMiAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QobXgsIG15KSB8fCAxO1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIGNvbnN0IHNwZWVkID0gbWFnbml0dWRlICogKC40NSArIChNYXRoLnNpbihpbmRleCAqIDkxLjE3KSAqIC41ICsgLjUpICogLjU1KTtcbiAgICBjb25zdCBkeCA9IG14IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCwgZHkgPSBteSAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQgKyBwcm9ncmVzcyAqIHByb2dyZXNzICogLjE4O1xuICAgIGNvbnN0IGFuZ2xlID0gcHJvZ3Jlc3MgKiAoaW5kZXggJSAyID8gMSA6IC0xKSAqIDIuNDtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAocDogVjMpOiBWMyA9PiB7XG4gICAgICBjb25zdCB4ID0gcFswXSAtIChpbnN0YW5jZS54ID8/IDApLCB5ID0gcFsxXSAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgICAgcmV0dXJuIFt4ICogTWF0aC5jb3MoYW5nbGUpIC0geSAqIE1hdGguc2luKGFuZ2xlKSArIChpbnN0YW5jZS54ID8/IDApICsgZHgsIHggKiBNYXRoLnNpbihhbmdsZSkgKyB5ICogTWF0aC5jb3MoYW5nbGUpICsgKGluc3RhbmNlLnkgPz8gMCkgKyBkeSwgcFsyXV07XG4gICAgfTtcbiAgICByZXR1cm4gW3RyYW5zZm9ybShhKSwgdHJhbnNmb3JtKGIpXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBsZXQgZGlzdGFuY2UgPSAwO1xuICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgXTtcbiAgY29uc3QgYWRkTGluZSA9IChhOiBWMywgYjogVjMsIHBoYXNlOiBudW1iZXIsIHdpZHRoU2NhbGUgPSAxLCBvcGFjaXR5ID0gMSkgPT4ge1xuICAgIFthLCBiXSA9IGV4cGxvZGUoYSwgYiwgTWF0aC5mbG9vcihkaXN0YW5jZSAqIDEwMCkgKyBNYXRoLmZsb29yKHBoYXNlICogMTApKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAuMDAxO1xuICAgIGNvbnN0IHdpZHRoID0gKGluc3RhbmNlLmxpbmVUaGlja25lc3MgPz8gMSkgKiAuMDE4ICogd2lkdGhTY2FsZTtcbiAgICBjb25zdCBveCA9IC1keSAvIGxlbmd0aCAqIHdpZHRoLCBveSA9IGR4IC8gbGVuZ3RoICogd2lkdGg7XG4gICAgY29uc3QgYTA6IFYzID0gW2FbMF0gLSBveCwgYVsxXSAtIG95LCBhWzJdXSwgYTE6IFYzID0gW2FbMF0gKyBveCwgYVsxXSArIG95LCBhWzJdXTtcbiAgICBjb25zdCBiMDogVjMgPSBbYlswXSAtIG94LCBiWzFdIC0gb3ksIGJbMl1dLCBiMTogVjMgPSBbYlswXSArIG94LCBiWzFdICsgb3ksIGJbMl1dO1xuICAgIGNvbnN0IHN0YXJ0ID0gZGlzdGFuY2UgKiAyLjQsIGVuZCA9IChkaXN0YW5jZSArIGxlbmd0aCkgKiAyLjQ7XG4gICAgY29uc3QgcHVzaCA9IChwOiBWMywgYWxvbmc6IG51bWJlciwgYWNyb3NzOiBudW1iZXIpID0+XG4gICAgICBvdXRwdXQucHVzaCh7IHAsIG46IFthbG9uZywgYWNyb3NzLCBwaGFzZV0sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIG9wYWNpdHkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqIGVudHJhbmNlRWFzZSAqICgxICsgTWF0aC5zaW4oKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIE1hdGguUEkpICogKGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqIDIuMikgKiAoMSAtIChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiAuNyksIGVmZmVjdCB9KTtcbiAgICBwdXNoKGEwLHN0YXJ0LC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMCxlbmQsLTEpO1xuICAgIHB1c2goYjAsZW5kLC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMSxlbmQsMSk7XG4gICAgZGlzdGFuY2UgKz0gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBhZGRMb29wID0gKHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sIHo6IG51bWJlciwgcGhhc2U6IG51bWJlcikgPT5cbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIHopLCBtb3ZlKHBvaW50c1soaW5kZXggKyAxKSAlIHBvaW50cy5sZW5ndGhdLCB6KSwgcGhhc2UgKyBpbmRleCAqIC43MykpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgZGVwdGggLyAyLCAuMyk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCAtZGVwdGggLyAyLCAyLjEpO1xuICBzaGFwZS5ob2xlcz8uZm9yRWFjaCgoaG9sZSwgaW5kZXgpID0+IHtcbiAgICBhZGRMb29wKGhvbGUsIGRlcHRoIC8gMiArIC4wMDIsIDMuNyArIGluZGV4KTtcbiAgICBhZGRMb29wKGhvbGUsIC1kZXB0aCAvIDIgLSAuMDAyLCA1LjIgKyBpbmRleCk7XG4gIH0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIC1kZXB0aCAvIDIpLCBtb3ZlKHBvaW50LCBkZXB0aCAvIDIpLCA2LjEgKyBpbmRleCkpO1xuICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwICogKGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEpO1xuICBjb25zdCBicmFuY2hTdHJlbmd0aCA9IChpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSkgKiAoaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyKTtcbiAgY29uc3QgcmFuZG9tID0gKHNlZWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTggKyBzaGFwZS5wb2ludHMubGVuZ3RoICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XG4gICAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGlhbnM6IG51bWJlcik6IE5lb25Qb2ludCA9PiBbXG4gICAgeCAqIE1hdGguY29zKHJhZGlhbnMpIC0geSAqIE1hdGguc2luKHJhZGlhbnMpLFxuICAgIHggKiBNYXRoLnNpbihyYWRpYW5zKSArIHkgKiBNYXRoLmNvcyhyYWRpYW5zKSxcbiAgXTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlID0gTWF0aC5mbG9vcih0aW1lICogMi4zNSArIGluZGV4ICogLjYxKTtcbiAgICBjb25zdCBhZ2UgPSB0aW1lICogMi4zNSArIGluZGV4ICogLjYxIC0gY3ljbGU7XG4gICAgY29uc3Qgc2VlZCA9IGN5Y2xlICogMzcuMSArIGluZGV4ICogMTEuNztcbiAgICBjb25zdCBhY3RpdmVEdXJhdGlvbiA9IC4xOCArIHJhbmRvbShzZWVkICsgMSkgKiAuMjU7XG4gICAgY29uc3QgaGF6ZUR1cmF0aW9uID0gTWF0aC5taW4oMSwgYWN0aXZlRHVyYXRpb24gKyAuMjggKyByYW5kb20oc2VlZCArIDIpICogLjIyKTtcbiAgICBjb25zdCBicmFuY2hBY3RpdmUgPSBhZ2UgPCBhY3RpdmVEdXJhdGlvbjtcbiAgICBjb25zdCBoYXplQWN0aXZlID0gYWdlIDwgaGF6ZUR1cmF0aW9uO1xuICAgIGlmICgoIWJyYW5jaEFjdGl2ZSAmJiAhaGF6ZUFjdGl2ZSkgfHwgcmFuZG9tKHNlZWQgKyAzKSA+IE1hdGgubWluKC43OCwgYnJhbmNoU3RyZW5ndGggKiAuNSkpIHJldHVybjtcbiAgICBjb25zdCBuZXh0ID0gc2hhcGUucG9pbnRzWyhpbmRleCArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aF07XG4gICAgY29uc3QgdCA9IC4xNiArIHJhbmRvbShzZWVkICsgNCkgKiAuNjg7XG4gICAgY29uc3QgYmFzZTogTmVvblBvaW50ID0gW3BvaW50WzBdICsgKG5leHRbMF0gLSBwb2ludFswXSkgKiB0LCBwb2ludFsxXSArIChuZXh0WzFdIC0gcG9pbnRbMV0pICogdF07XG4gICAgY29uc3QgdHggPSBuZXh0WzBdIC0gcG9pbnRbMF0sIHR5ID0gbmV4dFsxXSAtIHBvaW50WzFdLCB0bCA9IE1hdGguaHlwb3QodHgsIHR5KSB8fCAxO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJhbmRvbShzZWVkICsgNSkgPiAuNSA/IDEgOiAtMTtcbiAgICBjb25zdCBwZXJwZW5kaWN1bGFyOiBOZW9uUG9pbnQgPSBbLXR5IC8gdGwgKiBkaXJlY3Rpb24sIHR4IC8gdGwgKiBkaXJlY3Rpb25dO1xuICAgIGNvbnN0IGZpcnN0Sml0dGVyID0gKDEwICsgcmFuZG9tKHNlZWQgKyA2KSAqIDEwKSAqIE1hdGguUEkgLyAxODAgKiAocmFuZG9tKHNlZWQgKyA3KSA+IC41ID8gMSA6IC0xKTtcbiAgICBsZXQgaGVhZGluZyA9IHJvdGF0ZWQocGVycGVuZGljdWxhclswXSwgcGVycGVuZGljdWxhclsxXSwgZmlyc3RKaXR0ZXIpO1xuICAgIGNvbnN0IHNlZ21lbnRDb3VudCA9IDEgKyBNYXRoLmZsb29yKHJhbmRvbShzZWVkICsgOCkgKiAzKTtcbiAgICBjb25zdCBwb2ludHM6IE5lb25Qb2ludFtdID0gW2Jhc2VdO1xuICAgIGZvciAobGV0IHNlZ21lbnQgPSAwOyBzZWdtZW50IDwgc2VnbWVudENvdW50OyBzZWdtZW50KyspIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IC4wNTUgKyByYW5kb20oc2VlZCArIDEwICsgc2VnbWVudCkgKiAuMDk1O1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzWzBdICsgaGVhZGluZ1swXSAqIGxlbmd0aCwgcHJldmlvdXNbMV0gKyBoZWFkaW5nWzFdICogbGVuZ3RoXSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoMjAgKyByYW5kb20oc2VlZCArIDIwICsgc2VnbWVudCkgKiA0MCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaGVhZGluZyA9IHJvdGF0ZWQoaGVhZGluZ1swXSwgaGVhZGluZ1sxXSwgb2Zmc2V0ICogKHJhbmRvbShzZWVkICsgMzAgKyBzZWdtZW50KSA+IC41ID8gMSA6IC0xKSk7XG4gICAgfVxuICAgIGlmIChoYXplQWN0aXZlKSB7XG4gICAgICBjb25zdCBmYWRlID0gMSAtIE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAvIE1hdGgubWF4KC4wMDEsIGhhemVEdXJhdGlvbiAtIGFjdGl2ZUR1cmF0aW9uKTtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pICogLjAzNTtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZW5kID0gcG9pbnRzW3NlZ21lbnQgKyAxXTtcbiAgICAgICAgY29uc3QgaGF6ZVN0YXJ0OiBOZW9uUG9pbnQgPSBbc3RhcnRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIHN0YXJ0WzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgY29uc3QgaGF6ZUVuZDogTmVvblBvaW50ID0gW2VuZFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgZW5kWzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgYWRkTGluZShtb3ZlKGhhemVTdGFydCwgZGVwdGggLyAyICsgLjAwMiksIG1vdmUoaGF6ZUVuZCwgZGVwdGggLyAyICsgLjAwMiksIDMxICsgc2VlZCArIHNlZ21lbnQsIDEuNDUgKyBmYWRlICogLjU1LCBmYWRlICogLjM0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYnJhbmNoQWN0aXZlKSB7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGFkZExpbmUobW92ZShzdGFydCwgZGVwdGggLyAyICsgLjAwNiksIG1vdmUocG9pbnRzW3NlZ21lbnQgKyAxXSwgZGVwdGggLyAyICsgLjAwNiksIDExICsgc2VlZCArIHNlZ21lbnQsIC40Mik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgY2xhc3MgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNsaW5lUGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2RlcHRoOiBHUFVUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICNsYWJlbExheWVyOiBIVE1MRGl2RWxlbWVudDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50ICYmIGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIuY2xhc3NOYW1lID0gXCJuZW9uLXNoYXBlLWxhYmVsLWxheWVyXCI7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaW5zZXQ6XCIwXCIsIHBvaW50ZXJFdmVudHM6XCJub25lXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIgfSk7XG4gICAgcGFyZW50Py5hcHBlbmQodGhpcy4jbGFiZWxMYXllcik7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgZXh0cnVkZWQgc2hhcGUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIsIGN1bGxNb2RlOiBcImJhY2tcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogZmFsc2UsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNsaW5lUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJsaW5lRnJhZ21lbnRcIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICAgIH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3Rvcnkgc2hhcGUgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZlcnRpY2VzID0gaW5zdGFuY2VzLmZsYXRNYXAobWVzaCk7XG4gICAgY29uc3QgZWRnZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChlZGdlTWVzaCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICBjb25zdCBlZGdlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZWRnZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGRhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgZWRnZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBlZGdlRGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBkYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgY29uc3QgZWRnZUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGVkZ2VEYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGlmIChlZGdlRGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGVkZ2VCdWZmZXIsIDAsIGVkZ2VEYXRhKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIDUsIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgMF0pKTtcbiAgICBjb25zdCBiaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGxpbmVCaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI2xpbmVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3sgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLCBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsIHN0b3JlT3A6IFwic3RvcmVcIiB9XSxcbiAgICAgIGRlcHRoU3RlbmNpbEF0dGFjaG1lbnQ6IHsgdmlldzogdGhpcy4jZGVwdGghLmNyZWF0ZVZpZXcoKSwgZGVwdGhDbGVhclZhbHVlOiAxLCBkZXB0aExvYWRPcDogXCJjbGVhclwiLCBkZXB0aFN0b3JlT3A6IFwic3RvcmVcIiB9LFxuICAgIH0pO1xuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIHZlcnRleEJ1ZmZlcik7IHBhc3MuZHJhdyh2ZXJ0aWNlcy5sZW5ndGgpOyB9XG4gICAgaWYgKGVkZ2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI2xpbmVQaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGxpbmVCaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCBlZGdlQnVmZmVyKTsgcGFzcy5kcmF3KGVkZ2VzLmxlbmd0aCk7IH1cbiAgICBwYXNzLmVuZCgpOyB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgICB0aGlzLiNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkudGhlbigoKSA9PiB7IHZlcnRleEJ1ZmZlci5kZXN0cm95KCk7IGVkZ2VCdWZmZXIuZGVzdHJveSgpOyB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHsgdGhpcy4jbGFiZWxMYXllci5yZW1vdmUoKTsgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTsgdGhpcy4jc2NlbmVCdWZmZXIuZGVzdHJveSgpOyBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpOyB9XG4gICNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7XG4gICAgICBsZWZ0OiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0fXB4YCxcbiAgICAgIHRvcDogYCR7dGhpcy5jYW52YXMub2Zmc2V0VG9wfXB4YCxcbiAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICB3aWR0aDogYCR7dGhpcy5jYW52YXMuY2xpZW50V2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHR9cHhgLFxuICAgIH0pO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIucmVwbGFjZUNoaWxkcmVuKC4uLmluc3RhbmNlcy5mbGF0TWFwKGluc3RhbmNlID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2UubGFiZWw/LnRleHQgfHwgKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgPD0gMCkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICAgICAgY29uc3QgeCA9IDUwICsgKGluc3RhbmNlLnggPz8gMCkgKiA0MCAvICh0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCB5ID0gNTAgLSAoaW5zdGFuY2UueSA/PyAwKSAqIDQwO1xuICAgICAgY29uc3Qgc2hhcGVSYWRpdXMgPSBzY2FsZSAqIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIC4yO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2hhcGVSYWRpdXMgKyAoaW5zdGFuY2UubGFiZWwub2Zmc2V0ID8/IDgpICsgKGluc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4KSAqIC41O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnN0YW5jZS5sYWJlbC5wb3NpdGlvbiA/PyBcImFib3ZlXCI7XG4gICAgICBsZXQgdHggPSAwLCB0eSA9IDA7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYWJvdmVcIikgdHkgPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImJlbG93XCIpIHR5ID0gb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImxlZnRcIikgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHR4ID0gb2Zmc2V0O1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGluc3RhbmNlLmxhYmVsLnRleHQ7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OmAke3h9JWAsIHRvcDpgJHt5fSVgLCB0cmFuc2Zvcm06YHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3R4fXB4KSxjYWxjKC01MCUgKyAke3R5fXB4KSlgLFxuICAgICAgICBjb2xvcjppbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvciwgZm9udEZhbWlseTppbnN0YW5jZS5sYWJlbC5mb250RmFtaWx5ID8/IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFNpemU6YCR7aW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTh9cHhgLCBmb250V2VpZ2h0OlN0cmluZyhpbnN0YW5jZS5sYWJlbC5mb250V2VpZ2h0ID8/IDYwMCksXG4gICAgICAgIHRleHRTaGFkb3c6YDAgMCA1cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn0sMCAwIDE0cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn1gLCB3aGl0ZVNwYWNlOlwibm93cmFwXCIsXG4gICAgICAgIG9wYWNpdHk6U3RyaW5nKGluc3RhbmNlLm9wYWNpdHkgPz8gMSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbZWxlbWVudF07XG4gICAgfSkpO1xuICB9XG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuI2xvZ2ljYWxTaXplO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCB8fCAhdGhpcy4jZGVwdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuI2RlcHRoICYmIHRoaXMuY2FudmFzLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlLCBOZW9uU2hhcGVMYWJlbCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgZW51bSBOZW9uU2hhcGVEaXNwb3NhbCB7XG4gIEZhZGVPdXQgPSBcImZhZGVPdXRcIixcbiAgRGlzYXBwZWFyID0gXCJkaXNhcHBlYXJcIixcbiAgRXhwbG9kZSA9IFwiZXhwbG9kZVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZVZlY3RvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUltcGFjdCB7XG4gIGRpcmVjdGlvbjogTmVvblNoYXBlVmVjdG9yO1xuICBtYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVBY3Rvck9wdGlvbnMge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgdmVsb2NpdHk/OiBQYXJ0aWFsPE5lb25TaGFwZVZlY3Rvcj47XG4gIHNjYWxlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw/OiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbj86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uU2hhcGVBY3RvciB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICB2ZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yO1xuICBzY2FsZTogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw6IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlOiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb246IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU6IG51bWJlcjtcbiAgcm90YXRpb25YID0gMDtcbiAgcm90YXRpb25ZID0gMDtcbiAgcm90YXRpb25aID0gMDtcbiAgZGlzcG9zZWQgPSBmYWxzZTtcbiAgI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAjZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICNpbXBhY3RWZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG4gICNpbXBhY3RSb3RhdGlvbjogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblNoYXBlQWN0b3JPcHRpb25zKSB7XG4gICAgdGhpcy5zaGFwZSA9IG9wdGlvbnMuc2hhcGU7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54ID8/IDA7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55ID8/IDA7XG4gICAgdGhpcy56ID0gb3B0aW9ucy56ID8/IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogb3B0aW9ucy52ZWxvY2l0eT8ueCA/PyAwLCB5OiBvcHRpb25zLnZlbG9jaXR5Py55ID8/IDAgfTtcbiAgICB0aGlzLnNjYWxlID0gb3B0aW9ucy5zY2FsZSA/PyAxO1xuICAgIHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZGlzcG9zYWwgPSBvcHRpb25zLmRpc3Bvc2FsID8/IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQ7XG4gICAgdGhpcy5leHBsb2RlTWFnbml0dWRlID0gb3B0aW9ucy5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBvcHRpb25zLmVudHJhbmNlRHVyYXRpb24gPz8gLjQ1O1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBvcHRpb25zLmVudHJhbmNlTWFnbml0dWRlID8/IC41NTtcbiAgfVxuXG4gIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlciwgeiA9IHRoaXMueik6IHRoaXMge1xuICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRWZWxvY2l0eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IHg7IHRoaXMudmVsb2NpdHkueSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbXBhY3QoeyBkaXJlY3Rpb24sIG1hZ25pdHVkZSB9OiBOZW9uU2hhcGVJbXBhY3QpOiB0aGlzIHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgICBjb25zdCB4ID0gZGlyZWN0aW9uLnggLyBsZW5ndGgsIHkgPSBkaXJlY3Rpb24ueSAvIGxlbmd0aDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICs9IHggKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSArPSB5ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKz0geSAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgLT0geCAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzcG9zZShtb2RlID0gdGhpcy5kaXNwb3NhbCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zYWwgPSBtb2RlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIgPyAxIDogLjAwMDE7XG4gICAgaWYgKG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhcikgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbnRlcihkdXJhdGlvbiA9IHRoaXMuZW50cmFuY2VEdXJhdGlvbiwgbWFnbml0dWRlID0gdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSk6IHRoaXMge1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IE1hdGgubWF4KC4wMDEsIGR1cmF0aW9uKTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gbWFnbml0dWRlO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnZW5lcmF0ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gKHRoaXMudmVsb2NpdHkueCArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LngpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSAodGhpcy52ZWxvY2l0eS55ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblggKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWSArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICogZGVsdGFTZWNvbmRzO1xuICAgIGNvbnN0IGRhbXBpbmcgPSBNYXRoLmV4cCgtNyAqIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICo9IGRhbXBpbmc7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICo9IGRhbXBpbmc7XG4gICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPiAwICYmICF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyAuODUgOiAuNTU7XG4gICAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIGR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID49IDEpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy4jZW50cmFuY2VQcm9ncmVzcyA8IDEpIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNlbnRyYW5jZVByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gdGhpcy5lbnRyYW5jZUR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckluc3RhbmNlKG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgICBjb25zdCBmYWRlID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dCA/IDEgLSB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMTtcbiAgICByZXR1cm4ge1xuICAgICAgc2hhcGU6IHRoaXMuc2hhcGUsIHg6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnosIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgcm90YXRpb25YOiB0aGlzLnJvdGF0aW9uWCwgcm90YXRpb25ZOiB0aGlzLnJvdGF0aW9uWSwgcm90YXRpb25aOiB0aGlzLnJvdGF0aW9uWixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLCBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogdGhpcy5kaXNwb3NlZCA/IDAgOiBmYWRlLFxuICAgICAgZW50cmFuY2VQcm9ncmVzczogdGhpcy4jZW50cmFuY2VQcm9ncmVzcyxcbiAgICAgIGVudHJhbmNlTWFnbml0dWRlOiB0aGlzLmVudHJhbmNlTWFnbml0dWRlLFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiB0aGlzLmV4cGxvZGVNYWduaXR1ZGUsXG4gICAgICAuLi5vdmVycmlkZXMsXG4gICAgfTtcbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25QcmltaXRpdmVTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImJvbHRcIiB8IFwib3JiXCIgfCBcInJpbmdcIiB8IFwic3BhcmtcIiB8IFwiZGlhbW9uZFwiIHwgXCJwZW50YWdvblwiIHwgXCJsaW5lXCIgfCBcImFyY1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25QcmltaXRpdmUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcj86IHN0cmluZztcbiAgZ2xvdz86IG51bWJlcjtcbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICB0ZXh0dXJlPzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoPzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgYXJjU3RhcnQ/OiBudW1iZXI7XG4gIGFyY0VuZD86IG51bWJlcjtcbiAgc2hhcGU/OiBOZW9uUHJpbWl0aXZlU2hhcGU7XG59XG5cbmNvbnN0IG1heFByaW1pdGl2ZXMgPSAxMDI0O1xuY29uc3QgZmxvYXRzUGVyUHJpbWl0aXZlID0gMjA7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi8gYFxuc3RydWN0IFNjZW5lIHsgcmVzb2x1dGlvbjogdmVjMmYsIGNvdW50OiBmMzIsIHRpbWU6IGYzMiB9XG5zdHJ1Y3QgUHJpbWl0aXZlIHtcbiAgcG9zaXRpb246IHZlYzJmLFxuICBzaXplOiB2ZWMyZixcbiAgY29sb3I6IHZlYzRmLFxuICBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIGdsb3c6IGYzMixcbiAgaW50ZW5zaXR5OiBmMzIsXG4gIHNoYXBlOiBmMzIsXG4gIHRleHR1cmU6IGYzMixcbiAgcmltSW50ZW5zaXR5OiBmMzIsXG4gIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG4gIHBhZGRpbmc6IHZlYzJmLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGl0ZW1zOiBhcnJheTxQcmltaXRpdmU+O1xuXG5zdHJ1Y3QgVmVydGV4T3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oNCkgc2hhcGU6IGYzMixcbiAgQGxvY2F0aW9uKDUpIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDYpIHRleHR1cmU6IGYzMixcbiAgQGxvY2F0aW9uKDcpIHJpbUludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oOCkgc2hhZG93U3RyZW5ndGg6IGYzMixcbn1cblxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmVydGV4OiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBWZXJ0ZXhPdXRwdXQge1xuICB2YXIgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGl0ZW0gPSBpdGVtc1tpbnN0YW5jZV07XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmVydGV4XTtcbiAgdmFyIHBpeGVsT2Zmc2V0ID0gbG9jYWwgKiBpdGVtLnNpemU7XG4gIGlmIChpdGVtLnRleHR1cmUgIT0gMCkge1xuICAgIGxldCBjID0gY29zKGl0ZW0udGV4dHVyZSk7XG4gICAgbGV0IHMgPSBzaW4oaXRlbS50ZXh0dXJlKTtcbiAgICBwaXhlbE9mZnNldCA9IHZlYzJmKHBpeGVsT2Zmc2V0LnggKiBjIC0gcGl4ZWxPZmZzZXQueSAqIHMsIHBpeGVsT2Zmc2V0LnggKiBzICsgcGl4ZWxPZmZzZXQueSAqIGMpO1xuICB9XG4gIGxldCBwaXhlbCA9IGl0ZW0ucG9zaXRpb24gKyBwaXhlbE9mZnNldDtcbiAgdmFyIG91dHB1dDogVmVydGV4T3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihwaXhlbC54IC8gc2NlbmUucmVzb2x1dGlvbi54ICogMiAtIDEsIDEgLSBwaXhlbC55IC8gc2NlbmUucmVzb2x1dGlvbi55ICogMiwgMCwgMSk7XG4gIG91dHB1dC5sb2NhbCA9IGxvY2FsO1xuICBvdXRwdXQuY29sb3IgPSBpdGVtLmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGl0ZW0uZ2xvdztcbiAgb3V0cHV0LmludGVuc2l0eSA9IGl0ZW0uaW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhcGUgPSBpdGVtLnNoYXBlO1xuICBvdXRwdXQuc2Vjb25kYXJ5Q29sb3IgPSBpdGVtLnNlY29uZGFyeUNvbG9yO1xuICBvdXRwdXQudGV4dHVyZSA9IGl0ZW0udGV4dHVyZTtcbiAgb3V0cHV0LnJpbUludGVuc2l0eSA9IGl0ZW0ucmltSW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhZG93U3RyZW5ndGggPSBpdGVtLnNoYWRvd1N0cmVuZ3RoO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBWZXJ0ZXhPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDcuNSkge1xuICAgIGxldCByYWRpdXMgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICAgIGxldCBhbmdsZSA9IGF0YW4yKGlucHV0LmxvY2FsLnksIGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhbmdsZSA8IGlucHV0LnJpbUludGVuc2l0eSB8fCBhbmdsZSA+IGlucHV0LnNoYWRvd1N0cmVuZ3RoIHx8IHJhZGl1cyA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGxpbmVEaXN0YW5jZSA9IGFicyhyYWRpdXMgLSAwLjc4KTtcbiAgICBpZiAobGluZURpc3RhbmNlID4gMC4xNikgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDEyLCAwLjAzOCwgbGluZURpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMDI1LCAwLjE2LCBsaW5lRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAyMy4wIC0gc2NlbmUudGltZSAqIDguNSkpLCAxNi4wKTtcbiAgICBsZXQgcHVsc2VCID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDExLjAgKyBzY2VuZS50aW1lICogNS4zICsgMS43KSksIDI0LjApO1xuICAgIGxldCBncmFpbiA9IHNpbihhbmdsZSAqIDcxLjAgKyBzY2VuZS50aW1lICogMy4xKSAqIDAuNSArIDAuNTtcbiAgICBsZXQgc3VyZ2UgPSBzbW9vdGhzdGVwKDAuNzIsIDAuOTQsIHB1bHNlQSAqIDAuNyArIHB1bHNlQiAqIDAuNjUgKyBncmFpbiAqIDAuMTIpO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjg4ICsgc3VyZ2UgKiAwLjY1KSArIGhhbG8gKiAoMC4yMiArIHN1cmdlICogMC45KSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHN1cmdlICogMC45KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDYuNSkge1xuICAgIGxldCBhbG9uZyA9IGlucHV0LmxvY2FsLnk7XG4gICAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYWNyb3NzID4gMS4wIHx8IGFicyhhbG9uZykgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjA4LCAwLjI0LCBhY3Jvc3MpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4xMiwgMS4wLCBhY3Jvc3MpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZEZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuNzIsIDEuMCwgYWJzKGFsb25nKSk7XG4gICAgbGV0IHRyYXZlbCA9IHBvdyhtYXgoMC4wLCBzaW4oYWxvbmcgKiAyNC4wIC0gc2NlbmUudGltZSAqIDguMCArIGlucHV0LnRleHR1cmUpKSwgMTQuMCk7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuNzUgKyB0cmF2ZWwgKiAwLjUpICsgaGFsbyAqICgwLjIgKyB0cmF2ZWwgKiAwLjU1KSkgKiBlbmRGYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiB0cmF2ZWwgKiAwLjc1KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDUuNSkge1xuICAgIC8vIFBlbnRhZ29uIFNERlxuICAgIC8vIGxvY2FsIGlzIGluIFstMSwgMV0gcmFuZ2UuIExldCdzIGZpbmQgcGVudGFnb24gZGlzdGFuY2UuXG4gICAgbGV0IHB4ID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGxldCBweSA9IGlucHV0LmxvY2FsLnk7XG4gICAgLy8gUGVudGFnb24gY29uc3RhbnRzIGZvciB2ZXJ0aWNlcy9lZGdlc1xuICAgIGxldCBrID0gdmVjM2YoLTAuODA5MDE2OTk0LCAwLjU4Nzc4NTI1MiwgMS4zNzYzODE5Mik7IC8vIGNvcy9zaW4gb2YgNzIsIHBsdXMgaGVpZ2h0IGZhY3RvclxuICAgIC8vIFByb2plY3QvTWlycm9yIGFjcm9zcyB0aGUgc3ltbWV0cnkgYXhlcyBvZiByZWd1bGFyIHBlbnRhZ29uXG4gICAgdmFyIHAgPSB2ZWMyZihweCwgcHkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoLWsueCwgay55KSwgcCksIDApICogdmVjMmYoLWsueCwgay55KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKGsueCwgay55KSwgcCksIDApICogdmVjMmYoay54LCBrLnkpO1xuICAgIHAueCA9IHAueCAtIGNsYW1wKHAueCwgLWsueiAqIDAuNSwgay56ICogMC41KTtcbiAgICBsZXQgZCA9IGxlbmd0aChwIC0gdmVjMmYoMCwgMC43MikpICogc2lnbihwLnkgLSAwLjcyKTtcbiAgICAvLyBNYXAgZCB0byBhIG5vcm1hbGl6ZWQgcmFkaXVzIHNjYWxlXG4gICAgbGV0IHNjYWxlRCA9IGQgKyAwLjM1OyAvLyBvZmZzZXQgcGVudGFnb24gdG8gZml0IGJvdW5kcyBuaWNlbHlcbiAgICBpZiAoc2NhbGVEID4gMC44KSB7IGRpc2NhcmQ7IH1cbiAgICBcbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNSwgMC42NSwgc2NhbGVEKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjQ1LCAwLjUzLCBzY2FsZUQpICogKDEgLSBzbW9vdGhzdGVwKDAuNjUsIDAuNzUsIHNjYWxlRCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoLTAuMiwgMC41LCBzY2FsZUQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuNTUsIDAuOCwgc2NhbGVEKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM4ICsgYm9yZGVyICogMS4zNTtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjc1ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNDUpICogZmlsbCAqIDAuMzU7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuNDtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNC41KSB7XG4gICAgbGV0IGQgPSBhYnMoaW5wdXQubG9jYWwueCkgKyBhYnMoaW5wdXQubG9jYWwueSk7XG4gICAgaWYgKGQgPiAxLjA4KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNzgsIDAuOTIsIGQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNzIsIDAuODIsIGQpICogKDEgLSBzbW9vdGhzdGVwKDAuOTIsIDEuMDIsIGQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKDAuMCwgMC43OCwgZCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC44MiwgMS4wOCwgZCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zNSArIGJvcmRlciAqIDEuMjtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS42ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNSkgKiBmaWxsICogMC4zODtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zNTtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMS41KSB7XG4gICAgbGV0IHIyID0gZG90KGlucHV0LmxvY2FsLCBpbnB1dC5sb2NhbCk7XG4gICAgaWYgKHIyID4gMSkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IHogPSBzcXJ0KG1heCgwLCAxIC0gcjIpKTtcbiAgICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKHZlYzNmKGlucHV0LmxvY2FsLngsIC1pbnB1dC5sb2NhbC55LCB6KSk7XG4gICAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0wLjU1LCAtMC43LCAwLjkpKTtcbiAgICBsZXQgZGlmZnVzZSA9IG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApO1xuICAgIGxldCByaW0gPSBwb3coMSAtIHosIDIuMikgKiBpbnB1dC5yaW1JbnRlbnNpdHk7XG4gICAgbGV0IHNoYWRvdyA9IG1peCgxIC0gaW5wdXQuc2hhZG93U3RyZW5ndGgsIDEsIHNtb290aHN0ZXAoLTAuNjUsIDAuNDUsIGRvdChub3JtYWwueHksIGxpZ2h0Lnh5KSkpO1xuICAgIGxldCBncmFpbiA9IHNpbihpbnB1dC5sb2NhbC54ICogMjMgKyBpbnB1dC5sb2NhbC55ICogMTcpICogc2luKGlucHV0LmxvY2FsLnkgKiAzMSAtIGlucHV0LmxvY2FsLnggKiAxMSk7XG4gICAgbGV0IHRleHR1cmUgPSAxICsgZ3JhaW4gKiBpbnB1dC50ZXh0dXJlICogMC4yMjtcbiAgICBsZXQgc3BlY3VsYXIgPSBwb3cobWF4KGRvdChyZWZsZWN0KC1saWdodCwgbm9ybWFsKSwgdmVjM2YoMCwwLDEpKSwgMCksIDI4KSAqIDEuODtcbiAgICBsZXQgYm9keSA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZGlmZnVzZSAqIDAuOCArIDAuMikgKiBzaGFkb3cgKiB0ZXh0dXJlO1xuICAgIGxldCBoYWxvID0gcG93KG1heCgwLCAxIC0gbGVuZ3RoKGlucHV0LmxvY2FsKSksIDAuMzUpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcmdiID0gYm9keSAqICgwLjM4ICsgZGlmZnVzZSAqIDAuOTUpICsgaW5wdXQuY29sb3IucmdiICogcmltICsgdmVjM2Yoc3BlY3VsYXIpICsgaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMztcbiAgICByZXR1cm4gdmVjNGYocmdiICogaW5wdXQuaW50ZW5zaXR5LCAxKTtcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICBpZiAoaW5wdXQuc2hhcGUgPiAzLjUpIHtcbiAgICBsZXQgYXhpcyA9IG1pbihhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gICAgbGV0IGFybSA9IDEgLSBzbW9vdGhzdGVwKDAuMDQsIDAuMTgsIGF4aXMpO1xuICAgIGxldCBmYWRlID0gMSAtIHNtb290aHN0ZXAoMC4yLCAxLCBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpKTtcbiAgICBsZXQgZW5lcmd5ID0gYXJtICogZmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBhcm0pICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDIuNSkge1xuICAgIGxldCByaW5nRGlzdGFuY2UgPSBhYnMobGVuZ3RoKGlucHV0LmxvY2FsKSAtIDAuNjIpO1xuICAgIGxldCByaW5nID0gMSAtIHNtb290aHN0ZXAoMC4wNTUsIDAuMTgsIHJpbmdEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4xMiwgMC40MiwgcmluZ0Rpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmVyZ3kgPSAocmluZyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCByaW5nKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDAuNSkge1xuICAgIGRpc3RhbmNlID0gbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgfVxuICBsZXQgY29yZSA9IDEgLSBzbW9vdGhzdGVwKDAuMzgsIDAuNzYsIGRpc3RhbmNlKTtcbiAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4zLCAxLCBkaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgbGV0IGVuZXJneSA9IChjb3JlICsgaGFsbyAqIDAuNTUpICogaW5wdXQuaW50ZW5zaXR5O1xuICBsZXQgY2hyb21hdGljQ29yZSA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgcG93KG1heChjb3JlLCAwKSwgMikpO1xuICBsZXQgcmF3ID0gY2hyb21hdGljQ29yZSAqIChjb3JlICogMS4wNSArIGhhbG8gKiAwLjQyKTtcbiAgbGV0IHJnYiA9IHJhdyAvICh2ZWMzZigxKSArIHJhdyAqIDAuMzIpO1xuICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbn1cbmA7XG5cbmZ1bmN0aW9uIHJnYmEoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHZhbHVlID0gaGV4LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICBpZiAoIS9eWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgc2l4LWRpZ2l0IGhleCBjb2xvciwgcmVjZWl2ZWQgXCIke2hleH1cIi5gKTtcbiAgcmV0dXJuIFtcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMCwgMiksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMiwgNCksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoNCwgNiksIDE2KSAvIDI1NSxcbiAgICAxLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblByaW1pdGl2ZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI3ByaW1pdGl2ZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjYmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgIHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHsgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSwgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNwcmltaXRpdmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IG1heFByaW1pdGl2ZXMgKiBmbG9hdHNQZXJQcmltaXRpdmUgKiA0LFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcbiAgICB0aGlzLiNiaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9LFxuICAgICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jcHJpbWl0aXZlQnVmZmVyIH0gfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25QcmltaXRpdmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2FudmFzIGNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSwgdGltZVNlY29uZHMgPSAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZpc2libGUgPSBwcmltaXRpdmVzLnNsaWNlKDAsIG1heFByaW1pdGl2ZXMpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZpc2libGUubGVuZ3RoICogZmxvYXRzUGVyUHJpbWl0aXZlKTtcbiAgICB2aXNpYmxlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlclByaW1pdGl2ZTtcbiAgICAgIGRhdGEuc2V0KFtcbiAgICAgICAgaXRlbS54LCBpdGVtLnksIGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0ID8/IGl0ZW0ud2lkdGgsXG4gICAgICAgIC4uLnJnYmEoaXRlbS5jb2xvciksXG4gICAgICAgIC4uLnJnYmEoaXRlbS5zZWNvbmRhcnlDb2xvciA/PyBpdGVtLmNvbG9yKSxcbiAgICAgICAgaXRlbS5nbG93ID8/IDAuNSxcbiAgICAgICAgaXRlbS5pbnRlbnNpdHkgPz8gMSxcbiAgICAgICAgaXRlbS5zaGFwZSA9PT0gXCJhcmNcIiA/IDggOiBpdGVtLnNoYXBlID09PSBcImxpbmVcIiA/IDcgOiBpdGVtLnNoYXBlID09PSBcInBlbnRhZ29uXCIgPyA2IDogaXRlbS5zaGFwZSA9PT0gXCJkaWFtb25kXCIgPyA1IDogaXRlbS5zaGFwZSA9PT0gXCJzcGFya1wiID8gNCA6IGl0ZW0uc2hhcGUgPT09IFwicmluZ1wiID8gMyA6IGl0ZW0uc2hhcGUgPT09IFwib3JiXCIgPyAyIDogaXRlbS5zaGFwZSA9PT0gXCJib2x0XCIgPyAxIDogMCxcbiAgICAgICAgaXRlbS5yb3RhdGlvbiA/PyBpdGVtLnRleHR1cmUgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNTdGFydCA/PyBpdGVtLnJpbUludGVuc2l0eSA/PyAwLFxuICAgICAgICBpdGVtLmFyY0VuZCA/PyBpdGVtLnNoYWRvd1N0cmVuZ3RoID8/IDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICBdLCBvZmZzZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB2aXNpYmxlLmxlbmd0aCwgdGltZVNlY29uZHNdKSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNwcmltaXRpdmVCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICAgIGNsZWFyVmFsdWU6IHsgcjogMC4wMDYsIGc6IDAuMDA5LCBiOiAwLjAyNSwgYTogMCB9LFxuICAgICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgaWYgKHZpc2libGUubGVuZ3RoKSB7XG4gICAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmRHcm91cCk7XG4gICAgICBwYXNzLmRyYXcoNiwgdmlzaWJsZS5sZW5ndGgpO1xuICAgIH1cbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24gPSBcImZhZGVcIiB8IFwiZXhwYW5kRmFkZVwiIHwgXCJpbXBsb2RlXCIgfCBcInNwYXJrRmFkZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICBjb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgZGV0YWlsPzogbnVtYmVyO1xuICB0dXJidWxlbmNlPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBjb3JlSW50ZW5zaXR5PzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uVGltZT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25BY3Rpb24/OiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbjtcbiAgZHJpZnRYPzogbnVtYmVyO1xuICBkcmlmdFk/OiBudW1iZXI7XG4gIHNlZWQ/OiBudW1iZXI7XG4gIGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgZXh0ZW5kcyBPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwieFwiIHwgXCJ5XCIgfCBcInNpemVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xufVxuXG50eXBlIENsb3VkID0gUmVxdWlyZWQ8T21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcImNvcmVDb2xvclwiPj4gJiB7IGNvcmVDb2xvcjogc3RyaW5nOyBhZ2U6IG51bWJlciB9O1xuXG5jb25zdCBtYXhDbG91ZHMgPSA5NjtcbmNvbnN0IGZsb2F0c1BlckNsb3VkID0gMjQ7XG5cbmNvbnN0IGRlZmF1bHRzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPiA9IHtcbiAgY29sb3I6IFwiIzYzZThmZlwiLFxuICBjb3JlQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGlvbjogMCxcbiAgc2l6ZTogLjI1LFxuICBkZXRhaWw6IDUsXG4gIHR1cmJ1bGVuY2U6IC43NSxcbiAgZ2xvdzogNCxcbiAgY29yZUludGVuc2l0eTogMS40LFxuICByaW1JbnRlbnNpdHk6IC44NSxcbiAgb3BhY2l0eTogMSxcbiAgZGlzc2lwYXRpb25UaW1lOiAuNyxcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwiZXhwYW5kRmFkZVwiLFxuICBkcmlmdFg6IDAsXG4gIGRyaWZ0WTogMCxcbiAgc2VlZDogMCxcbiAgYWdlOiAwLFxufTtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKS5wYWRFbmQoNiwgXCIwXCIpLnNsaWNlKDAsIDYpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IgPSAoY29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IFtyLCBnLCBiXSA9IGhleChjb2xvcik7XG4gIGNvbnN0IGxpZnQgPSAoY2hhbm5lbDogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKChjaGFubmVsICsgKDEgLSBjaGFubmVsKSAqIC43OCkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIHJldHVybiBgIyR7bGlmdChyKX0ke2xpZnQoZyl9JHtsaWZ0KGIpfWA7XG59O1xuXG5jb25zdCBhY3Rpb25WYWx1ZSA9IChhY3Rpb246IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uKTogbnVtYmVyID0+XG4gIGFjdGlvbiA9PT0gXCJmYWRlXCIgPyAwIDogYWN0aW9uID09PSBcImV4cGFuZEZhZGVcIiA/IDEgOiBhY3Rpb24gPT09IFwiaW1wbG9kZVwiID8gMiA6IDM7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgQ2xvdWQge1xuICBwb3M6IHZlYzJmLFxuICB2ZWxvY2l0eTogdmVjMmYsXG4gIGFnZTogZjMyLFxuICBsaWZlOiBmMzIsXG4gIHNpemU6IGYzMixcbiAgcm90YXRpb246IGYzMixcbiAgc2VlZDogZjMyLFxuICBhY3Rpb246IGYzMixcbiAgY29sb3I6IHZlYzRmLFxuICBjb3JlOiB2ZWM0ZixcbiAgdHVuaW5nOiB2ZWM0Zixcbn1cbnN0cnVjdCBHbG9iYWxzIHtcbiAgYXNwZWN0OiBmMzIsXG4gIHRpbWU6IGYzMixcbiAgY291bnQ6IGYzMixcbiAgYmFja2dyb3VuZDogZjMyLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBnbG9iYWxzOiBHbG9iYWxzO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBjbG91ZHM6IGFycmF5PENsb3VkPjtcblxuZm4gaGFzaChwOiB2ZWMyZikgLT4gZjMyIHtcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3QocCwgdmVjMmYoMTI3LjEsIDMxMS43KSkpICogNDM3NTguNTQ1MzEyMyk7XG59XG5mbiBub2lzZShwOiB2ZWMyZikgLT4gZjMyIHtcbiAgbGV0IGkgPSBmbG9vcihwKTtcbiAgbGV0IGYgPSBmcmFjdChwKTtcbiAgbGV0IHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgcmV0dXJuIG1peChtaXgoaGFzaChpKSwgaGFzaChpICsgdmVjMmYoMSwwKSksIHUueCksIG1peChoYXNoKGkgKyB2ZWMyZigwLDEpKSwgaGFzaChpICsgdmVjMmYoMSwxKSksIHUueCksIHUueSk7XG59XG5mbiBmYm0ocDogdmVjMmYsIG9jdGF2ZXM6IGYzMikgLT4gZjMyIHtcbiAgdmFyIHYgPSAwLjA7XG4gIHZhciBhID0gMC41O1xuICB2YXIgcSA9IHA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgaWYgKGYzMihpKSA+PSBvY3RhdmVzKSB7IGJyZWFrOyB9XG4gICAgdiArPSBhICogbm9pc2UocSk7XG4gICAgcSA9IHEgKiAyLjAzICsgdmVjMmYoNi45LCAzLjcpO1xuICAgIGEgKj0gMC41MjtcbiAgfVxuICByZXR1cm4gdjtcbn1cbmZuIHJvdGF0ZShwOiB2ZWMyZiwgYTogZjMyKSAtPiB2ZWMyZiB7XG4gIGxldCBjID0gY29zKGEpO1xuICBsZXQgcyA9IHNpbihhKTtcbiAgcmV0dXJuIHZlYzJmKHAueCAqIGMgLSBwLnkgKiBzLCBwLnggKiBzICsgcC55ICogYyk7XG59XG5zdHJ1Y3QgT3V0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIEBpbnRlcnBvbGF0ZShmbGF0KSBpbnN0YW5jZTogdTMyLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmk6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IE91dCB7XG4gIGxldCBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgYyA9IGNsb3Vkc1tpbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGFjdGlvblNjYWxlID0gc2VsZWN0KDEuMCArIGxpZmVUICogMS44NSwgMS4wIC0gbGlmZVQgKiAuNjIsIGMuYWN0aW9uID4gMS41ICYmIGMuYWN0aW9uIDwgMi41KTtcbiAgbGV0IHJhZGl1cyA9IG1heCguMDAxLCBjLnNpemUgKiBhY3Rpb25TY2FsZSkgKiAyLjM1O1xuICB2YXIgY2VudGVyID0gYy5wb3MgKyBjLnZlbG9jaXR5ICogYy5hZ2U7XG4gIGNlbnRlci54ICo9IGdsb2JhbHMuYXNwZWN0O1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZpXTtcbiAgbGV0IHAgPSBjZW50ZXIgKyBsb2NhbCAqIHJhZGl1cztcbiAgdmFyIG86IE91dDtcbiAgby5wb3NpdGlvbiA9IHZlYzRmKHAueCAvIGdsb2JhbHMuYXNwZWN0LCBwLnksIDAsIDEpO1xuICBvLmxvY2FsID0gbG9jYWwgKiAyLjM1O1xuICBvLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIHJldHVybiBvO1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYyA9IGNsb3Vkc1tpbnB1dC5pbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGxvY2FsID0gcm90YXRlKGlucHV0LmxvY2FsLCAtYy5yb3RhdGlvbiAtIGxpZmVUICogLjQ1KTtcbiAgbGV0IHIgPSBsZW5ndGgobG9jYWwpO1xuICBpZiAociA+PSAyLjM1KSB7IGRpc2NhcmQ7IH1cbiAgbGV0IGRldGFpbCA9IGNsYW1wKGMudHVuaW5nLngsIDEuMCwgNy4wKTtcbiAgbGV0IHR1cmJ1bGVuY2UgPSBjLnR1bmluZy55O1xuICBsZXQgd2lzcHkgPSBmYm0obG9jYWwgKiAoMS43ICsgZGV0YWlsICogLjE2KSArIHZlYzJmKGMuc2VlZCwgYy5zZWVkICogLjcxKSArIGdsb2JhbHMudGltZSAqIHZlYzJmKC4xNiwgLjA5KSAqIHR1cmJ1bGVuY2UsIG1pbihkZXRhaWwsIDQuMCkpO1xuICBsZXQgY29yZSA9IGV4cCgtciAqIHIgKiAoMS4yICsgYy50dW5pbmcueiAqIC4yMikpO1xuICBsZXQgcmltID0gZXhwKC1hYnMociAtIC43MikgKiAzLjYpO1xuICBsZXQgc3BhcmsgPSBwb3cobWF4KDAuMCwgc2luKHdpc3B5ICogMTYuMCArIGMuc2VlZCArIGdsb2JhbHMudGltZSAqIDkuMCkpLCAxNC4wKSAqIHNlbGVjdCgwLjAsIDEuMCwgYy5hY3Rpb24gPiAyLjUpO1xuICBsZXQgZGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMS40NSwgMi4zNSwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IHJpbURpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDIuNywgMy44LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgZWRnZUZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDEuNzUsIDIuMzUsIHIpO1xuICBsZXQgZGVuc2l0eSA9IChjb3JlICogLjcyICsgcmltICogLjI0ICogcmltRGlzc2lwYXRlICsgd2lzcHkgKiAuMjIgKyBzcGFyayAqIC41NSkgKiBkaXNzaXBhdGUgKiBjLnR1bmluZy53ICogZWRnZUZhZGU7XG4gIGxldCBob3RDb3JlID0gYy5jb3JlLnJnYiAqIGNvcmUgKiBjLnR1bmluZy56ICogKDEuMCArIHNwYXJrKTtcbiAgbGV0IG5lb25SaW0gPSBjLmNvbG9yLnJnYiAqIChkZW5zaXR5ICogKC43NSArIGMuY29sb3IuYSAqIC4wOCkgKyByaW0gKiByaW1EaXNzaXBhdGUgKiBjLmNvbG9yLmEgKiAuMDgpO1xuICBsZXQgZ2xvdyA9IG5lb25SaW0gKyBob3RDb3JlICogZGVuc2l0eTtcbiAgcmV0dXJuIHZlYzRmKGdsb3csIGNsYW1wKGRlbnNpdHkgKiAuODUgKyBzcGFyayAqIC4yNSwgMC4wLCAxLjApKTtcbn1gO1xuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RBY3RvciB7XG4gIHNldHRpbmdzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPjtcbiAgYWdlID0gMDtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MgPSB7fSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRzLCAuLi5zZXR0aW5ncywgc2VlZDogc2V0dGluZ3Muc2VlZCA/PyBNYXRoLnJhbmRvbSgpICogMTAwMCB9O1xuICB9XG4gIHVwZGF0ZShkdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy5hZ2UgKz0gZHQ7XG4gICAgcmV0dXJuIHRoaXMuYWdlIDwgdGhpcy5zZXR0aW5ncy5kaXNzaXBhdGlvblRpbWU7XG4gIH1cbiAgcmVuZGVySW5zdGFuY2UoKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5zZXR0aW5ncywgc2VlZDogdGhpcy5zZXR0aW5ncy5zZWVkIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNidWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2dsb2JhbHM6IEdQVUJ1ZmZlcjtcbiAgI2JpbmQ6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBwcm9jZWR1cmFsIGNsb3VkIHZvbHVtZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2dsb2JhbHMgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkICogNCwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNiaW5kID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbXG4gICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jZ2xvYmFscyB9IH0sXG4gICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jYnVmZmVyIH0gfSxcbiAgICBdIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBjbG91ZCBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGNsb3VkczogcmVhZG9ubHkgTmVvbkNsb3VkQnVyc3RTZXR0aW5nc1tdLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCBwYWNrZWQgPSBuZXcgRmxvYXQzMkFycmF5KG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkKTtcbiAgICBjbG91ZHMuc2xpY2UoMCwgbWF4Q2xvdWRzKS5mb3JFYWNoKChjbG91ZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGMgPSB7IC4uLmRlZmF1bHRzLCAuLi5jbG91ZCB9O1xuICAgICAgY29uc3QgY29sb3IgPSBoZXgoYy5jb2xvciksIGNvcmUgPSBoZXgoYy5jb3JlQ29sb3IpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJDbG91ZDtcbiAgICAgIHBhY2tlZC5zZXQoW2MueCwgYy55LCBjLmRyaWZ0WCwgYy5kcmlmdFksIGMuYWdlID8/IDAsIGMuZGlzc2lwYXRpb25UaW1lLCBjLnNpemUsIGMucm90YXRpb24sIGMuc2VlZCwgYWN0aW9uVmFsdWUoYy5kaXNzaXBhdGlvbkFjdGlvbiksIDAsIDBdLCBvZmZzZXQpO1xuICAgICAgcGFja2VkLnNldChbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgYy5nbG93LCBjb3JlWzBdLCBjb3JlWzFdLCBjb3JlWzJdLCBjLmNvcmVJbnRlbnNpdHksIGMuZGV0YWlsLCBjLnR1cmJ1bGVuY2UsIGMucmltSW50ZW5zaXR5LCBjLm9wYWNpdHldLCBvZmZzZXQgKyAxMik7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jYnVmZmVyLCAwLCBwYWNrZWQpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2dsb2JhbHMsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCB0aW1lU2Vjb25kcywgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSwgMF0pKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3MoeyBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sXG4gICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICB9XSB9KTtcbiAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kKTtcbiAgICBwYXNzLmRyYXcoNiwgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSk7XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gIG1hcFRvcERvd25DbG91ZChjbG91ZDogTmVvblRvcERvd25DbG91ZEJ1cnN0LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgY29uc3QgYXNwZWN0ID0gbG9naWNhbFdpZHRoIC8gbG9naWNhbEhlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xvdWQsXG4gICAgICB4OiAoY2xvdWQueCAvIGxvZ2ljYWxXaWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIGNsb3VkLnkgLyBsb2dpY2FsSGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNpemU6IGNsb3VkLnNpemUgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgICAgZHJpZnRYOiAoY2xvdWQuZHJpZnRYID8/IDApIC8gbG9naWNhbFdpZHRoICogYXNwZWN0ICogMi41LFxuICAgICAgZHJpZnRZOiAtKGNsb3VkLmRyaWZ0WSA/PyAwKSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLiNidWZmZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuI2dsb2JhbHMuZGVzdHJveSgpO1xuICAgIGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIsIHR5cGUgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIsIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0IH0gZnJvbSBcIi4vY2xvdWQtYnVyc3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNoYXBlIGV4dGVuZHMgT21pdDxOZW9uU2hhcGVJbnN0YW5jZSwgXCJ4XCIgfCBcInlcIiB8IFwic2NhbGVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2NlbmUge1xuICBwcmltaXRpdmVzPzogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiByZWFkb25seSBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzPzogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlUmVuZGVyZXI7XG4gICNjbG91ZHM6IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI7XG4gICNzaGFwZXM6IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyO1xuICAjd2lkdGg6IG51bWJlcjtcbiAgI2hlaWdodDogbnVtYmVyO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDsgdGhpcy4jd2lkdGggPSB3aWR0aDsgdGhpcy4jaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMgPSBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI2Nsb3VkcyA9IG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI3NoYXBlcyA9IG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IFByb21pc2U8TmVvblRvcERvd25TY2VuZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5IHRvcC1kb3duIHNjZW5lcy5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCwgbG9naWNhbFdpZHRoLCBsb2dpY2FsSGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzY2VuZTogTmVvblRvcERvd25TY2VuZSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDApOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpO1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMucmVuZGVyKFsuLi4oc2NlbmUucHJpbWl0aXZlcyA/PyBbXSldLCB0aW1lU2Vjb25kcywgZmFsc2UsIHRhcmdldCk7XG4gICAgY29uc3QgY2xvdWRzID0gc2NlbmUuY2xvdWRzID8/IFtdO1xuICAgIGNvbnN0IGFzcGVjdCA9IHRoaXMuI3dpZHRoIC8gdGhpcy4jaGVpZ2h0O1xuICAgIGNvbnN0IHNoYXBlcyA9IHNjZW5lLnNoYXBlcyA/PyBbXTtcbiAgICBpZiAoc2hhcGVzLmxlbmd0aCkgdGhpcy4jc2hhcGVzLnJlbmRlcihzaGFwZXMubWFwKHNoYXBlID0+ICh7XG4gICAgICAuLi5zaGFwZSxcbiAgICAgIHg6IChzaGFwZS54IC8gdGhpcy4jd2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBzaGFwZS55IC8gdGhpcy4jaGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNjYWxlOiAoc2hhcGUuaGVpZ2h0ID8/IHNoYXBlLnNpemUpIC8gdGhpcy4jaGVpZ2h0ICogMi41LFxuICAgICAgc2NhbGVYOiAoc2hhcGUuc2NhbGVYID8/IDEpICogKChzaGFwZS53aWR0aCA/PyBzaGFwZS5zaXplKSAvIChzaGFwZS5oZWlnaHQgPz8gc2hhcGUuc2l6ZSkpLFxuICAgIH0pKSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgICBpZiAoY2xvdWRzLmxlbmd0aCkgdGhpcy4jY2xvdWRzLnJlbmRlcihjbG91ZHMubWFwKGNsb3VkID0+IHRoaXMuI2Nsb3Vkcy5tYXBUb3BEb3duQ2xvdWQoY2xvdWQsIHRoaXMuI3dpZHRoLCB0aGlzLiNoZWlnaHQpKSwgdGltZVNlY29uZHMsIHRydWUpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiNzaGFwZXMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy4jY2xvdWRzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB0eXBlIHsgTmVvblRvcERvd25TY2VuZSB9IGZyb20gXCIuL3RvcC1kb3duLXNjZW5lXCI7XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyU2NlbmVJZHMgPSBbXCJuZW9uSGFsbFwiLCBcImF1cm9yYVwiXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQgPSB0eXBlb2YgbGFuZVJ1bm5lclNjZW5lSWRzW251bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyB7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdGltZU1zOiBudW1iZXI7XG59XG5cbmNvbnN0IHNjZW5lTmFtZXM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgc3RyaW5nPiA9IHtcbiAgbmVvbkhhbGw6IFwiTmVvbiBIYWxsXCIsXG4gIGF1cm9yYTogXCJBdXJvcmFcIixcbn07XG5cbmNvbnN0IGhhbGxCb3R0b21XaWR0aCA9IDAuOTI7XG5jb25zdCBoYWxsRmxvb3JDb2xvciA9IFwiIzA1MTAxZlwiO1xuY29uc3QgaGFsbERlZXBCbHVlID0gXCIjMTIzNTZhXCI7XG5jb25zdCBoYWxsTXV0ZWRCbHVlID0gXCIjMWI0YzhkXCI7XG5jb25zdCBoYWxsTXV0ZWRDeWFuID0gXCIjMmFjNGRjXCI7XG5jb25zdCBoYWxsTXV0ZWRWaW9sZXQgPSBcIiM0NTMwNzlcIjtcbmNvbnN0IGhhbGxBY2NlbnRQaW5rID0gXCIjYTczNTdlXCI7XG5jb25zdCBoYWxsRW5lcmd5U3BlZWQgPSAwLjAwMTc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSB7XG4gIGZsb29yOiBzdHJpbmc7XG4gIGJvdW5kYXJ5OiBzdHJpbmc7XG4gIGxhbmU6IHN0cmluZztcbiAgY2VudGVyTGFuZTogc3RyaW5nO1xuICBhY2NlbnQ6IHN0cmluZztcbiAgbGFuZUhpZ2hsaWdodDogc3RyaW5nO1xufVxuXG5jb25zdCBzdGFuZGFyZExhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogaGFsbEZsb29yQ29sb3IsXG4gIGJvdW5kYXJ5OiBoYWxsRGVlcEJsdWUsXG4gIGxhbmU6IGhhbGxNdXRlZEJsdWUsXG4gIGNlbnRlckxhbmU6IGhhbGxNdXRlZFZpb2xldCxcbiAgYWNjZW50OiBoYWxsQWNjZW50UGluayxcbiAgbGFuZUhpZ2hsaWdodDogaGFsbE11dGVkQ3lhbixcbn07XG5cbmNvbnN0IGF1cm9yYUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDMxMTBmXCIsXG4gIGJvdW5kYXJ5OiBcIiMxNzhjOTJcIixcbiAgbGFuZTogXCIjMTdkN2IzXCIsXG4gIGNlbnRlckxhbmU6IFwiIzhmNTZmZlwiLFxuICBhY2NlbnQ6IFwiI2ZmNGZjN1wiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNiOWZmNmFcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNjZW5lTmFtZXNbc2NlbmVJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmVSdW5uZXJTY2VuZUlkKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBMYW5lUnVubmVyU2NlbmVJZCB7XG4gIHJldHVybiAobGFuZVJ1bm5lclNjZW5lSWRzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5lUnVubmVyU2NlbmUob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBzd2l0Y2ggKG9wdGlvbnMuc2NlbmVJZCkge1xuICAgIGNhc2UgXCJhdXJvcmFcIjpcbiAgICAgIHJldHVybiBjcmVhdGVBdXJvcmEob3B0aW9ucyk7XG4gICAgY2FzZSBcIm5lb25IYWxsXCI6XG4gICAgICByZXR1cm4gY3JlYXRlTmVvbkhhbGwob3B0aW9ucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmVvbkhhbGwob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBzdGFuZGFyZExhbmVSdW5uZXJQYWxldHRlLCB0aW1lTXMpO1xuICBhZGRIYWxsTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxGbG9vckdseXBocyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEhvcml6b25EZXRhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsU2lkZVBhbmVscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEVuZXJneVRyYWNlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF1cm9yYShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIGF1cm9yYUxhbmVSdW5uZXJQYWxldHRlLCB0aW1lTXMpO1xuICBhZGRBdXJvcmFMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhR3JvdW5kRmxhcmVzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFIb3Jpem9uVmVpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IC1oZWlnaHQgfTtcbiAgY29uc3QgYm90dG9tWSA9IGhlaWdodCAqIC45ODU7XG4gIGNvbnN0IGJvdHRvbUhhbGYgPSB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCAqIC41O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2cCxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICBsZWZ0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShcbiAgaXRlbXM6IE5lb25QcmltaXRpdmVbXSxcbiAgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sXG4gIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsXG4gIHRpbWVNczogbnVtYmVyLFxuKTogdm9pZCB7XG4gIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtcywgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSk7XG4gIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQyLCB3aWR0aDogd2lkdGggKiBoYWxsQm90dG9tV2lkdGgsIGhlaWdodDogaGVpZ2h0ICogMS4wOCwgY29sb3I6IHBhbGV0dGUuZmxvb3IsIHNlY29uZGFyeUNvbG9yOiBcIiMwMjA1MGRcIiwgZ2xvdzogLjA1LCBpbnRlbnNpdHk6IC4yMywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBwYWxldHRlLmJvdW5kYXJ5LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjc4LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogcGFsZXR0ZS5hY2NlbnQsIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmNlbnRlckxhbmUsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5ib3VuZGFyeSwgLjQ4LCA2LjUpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5sYW5lO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBjb2xvciwgbGFuZSA9PT0gMiA/IC4yOCA6IC4yLCAzLjQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGxhbmUgPT09IDIgPyAuMjYgOiAuMTgsIC45KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDE1OyByb3crKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgcm93UHVsc2UgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA0ODAgKyByb3cgKiAuNzgpICogLjQyO1xuICAgIGNvbnN0IHN1cmdlID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZU1zIC8gODIwIC0gcm93ICogLjcyKSk7XG4gICAgY29uc3QgY29sb3IgPSByb3cgJSA0ID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcm93ICUgNCA9PT0gMSA/IHBhbGV0dGUubGFuZSA6IHJvdyAlIDQgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmFjY2VudDtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUxhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA5OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTU1MCArIHB1bHNlSW5kZXggLyA5KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS40OCk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zMiAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiMxN2Q3YjNcIiwgb3BhY2l0eSwgMSArIHQgKiAxLjcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUdyb3VuZEZsYXJlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjA4ICsgKChpbmRleCAqIDI5KSAlIDEwMCkgLyAxMTI7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjYyKSk7XG4gICAgY29uc3QgbGFuZVNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMjIgOiAuNzg7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIGxhbmVTaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjEgKyB0aW1lTXMgLyAxODAwKSAqIC4wNCk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC41NSArIE1hdGguc2luKHRpbWVNcyAvIDQzMCArIGluZGV4ICogMS4zKSAqIC4zNTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMDkgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDE4ICsgdCAqIC4wMzUpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogaW5kZXggJSAzID09PSAxID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC4zOCxcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDYpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBpbmRleCAlIDQgPT09IDAgPyBcImRpYW1vbmRcIiA6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKHRpbWVNcyAvIDEyMDAgKyBpbmRleCkgKiAuMTgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhSG9yaXpvblZlaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4IC0gMykgLyA2O1xuICAgIGNvbnN0IHdhdmUgPSBNYXRoLnNpbih0aW1lTXMgLyAxMTAwICsgaW5kZXggKiAuOSk7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiB2cC54ICsgdSAqIHdpZHRoICogLjM2LFxuICAgICAgeTogdnAueSArIGhlaWdodCAqICguMDc1ICsgaW5kZXggKiAuMDA2KSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDM1ICsgaW5kZXggKiAuMDA0KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4xMiArIE1hdGguYWJzKHdhdmUpICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcIiMxN2Q3YjNcIiA6IFwiIzhmNTZmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4wNDUgKyBNYXRoLmFicyh3YXZlKSAqIC4wMjUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogdSAqIC4yOCArIHdhdmUgKiAuMDgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkR2xvd2luZ0xpbmUoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGNvbG9yOiBzdHJpbmcsIGFscGhhOiBudW1iZXIsIHRoaWNrbmVzczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGR4ID0gYi54IC0gYS54O1xuICBjb25zdCBkeSA9IGIueSAtIGEueTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBpdGVtcy5wdXNoKHtcbiAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgIHdpZHRoOiB0aGlja25lc3MsXG4gICAgaGVpZ2h0OiBsZW5ndGggLyAyLFxuICAgIGNvbG9yLFxuICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS53aGl0ZUhvdCxcbiAgICBnbG93OiAuMzIsXG4gICAgaW50ZW5zaXR5OiBhbHBoYSxcbiAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsZXJwUG9pbnQoYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHQ6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIHJldHVybiB7IHg6IGEueCArIChiLnggLSBhLngpICogdCwgeTogYS55ICsgKGIueSAtIGEueSkgKiB0IH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25Qcm9qZWN0aWxlU2hhcGUgPSBcImRhcnRcIiB8IFwibmVlZGxlXCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByb2plY3RpbGVPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WD86IG51bWJlcjtcbiAgdmVsb2NpdHlZPzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGxlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg/OiBudW1iZXI7XG4gIHRyYWlsV2lkdGg/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgc2hhcGU/OiBOZW9uUHJvamVjdGlsZVNoYXBlO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3RvciA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoeCwgeSkgfHwgMTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeCAvIGxlbmd0aCwgLXkgLyBsZW5ndGgpO1xufTtcblxuZXhwb3J0IGNsYXNzIE5lb25Qcm9qZWN0aWxlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WDogbnVtYmVyO1xuICB2ZWxvY2l0eVk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGxlbmd0aDogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFpbFdpZHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I6IHN0cmluZztcbiAgY29yZUNvbG9yOiBzdHJpbmc7XG4gIHNoYXBlOiBOZW9uUHJvamVjdGlsZVNoYXBlO1xuICBpbnRlbnNpdHk6IG51bWJlcjtcbiAgZ2xvdzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25Qcm9qZWN0aWxlT3B0aW9ucykge1xuICAgIHRoaXMueD1vcHRpb25zLng7dGhpcy55PW9wdGlvbnMueTt0aGlzLnZlbG9jaXR5WD1vcHRpb25zLnZlbG9jaXR5WD8/MDt0aGlzLnZlbG9jaXR5WT1vcHRpb25zLnZlbG9jaXR5WT8/LTUwMDtcbiAgICB0aGlzLnJhZGl1cz1vcHRpb25zLnJhZGl1cz8/Mzt0aGlzLmxlbmd0aD1vcHRpb25zLmxlbmd0aD8/OTt0aGlzLnRyYWlsTGVuZ3RoPW9wdGlvbnMudHJhaWxMZW5ndGg/PzE2O3RoaXMudHJhaWxXaWR0aD1vcHRpb25zLnRyYWlsV2lkdGg/PzEuNTtcbiAgICB0aGlzLmNvbG9yPW9wdGlvbnMuY29sb3I7dGhpcy50cmFpbENvbG9yPW9wdGlvbnMudHJhaWxDb2xvcj8/b3B0aW9ucy5jb2xvcjt0aGlzLmNvcmVDb2xvcj1vcHRpb25zLmNvcmVDb2xvcj8/b3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLnNoYXBlPW9wdGlvbnMuc2hhcGU/P1wiZGFydFwiO3RoaXMuaW50ZW5zaXR5PW9wdGlvbnMuaW50ZW5zaXR5Pz8xO3RoaXMuZ2xvdz1vcHRpb25zLmdsb3c/Py43NTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5WCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eVkgKiBkZWx0YVNlY29uZHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcmltaXRpdmVzKCk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgY29uc3Qgc3BsaXQgPSB0aGlzLnNoYXBlID09PSBcInNwbGl0Qm9sdFwiO1xuICAgIGNvbnN0IG5lZWRsZSA9IHRoaXMuc2hhcGUgPT09IFwibmVlZGxlXCI7XG4gICAgY29uc3Qgc2x1ZyA9IHRoaXMuc2hhcGUgPT09IFwic2x1Z1wiO1xuICAgIGNvbnN0IHNwZWVkID0gTWF0aC5oeXBvdCh0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uWCA9IHRoaXMudmVsb2NpdHlYIC8gc3BlZWQ7XG4gICAgY29uc3QgZGlyZWN0aW9uWSA9IHRoaXMudmVsb2NpdHlZIC8gc3BlZWQ7XG4gICAgY29uc3Qgcm90YXRpb24gPSByb3RhdGlvbkZvclNjcmVlbkZvcndhcmRWZWN0b3IodGhpcy52ZWxvY2l0eVgsIHRoaXMudmVsb2NpdHlZKTtcbiAgICBjb25zdCBpdGVtczogTmVvblByaW1pdGl2ZVtdID0gW3tcbiAgICAgIHg6dGhpcy54LWRpcmVjdGlvblgqdGhpcy50cmFpbExlbmd0aCouNSx5OnRoaXMueS1kaXJlY3Rpb25ZKnRoaXMudHJhaWxMZW5ndGgqLjUsXG4gICAgICB3aWR0aDp0aGlzLnRyYWlsV2lkdGgsaGVpZ2h0OnRoaXMudHJhaWxMZW5ndGgsY29sb3I6dGhpcy50cmFpbENvbG9yLHNlY29uZGFyeUNvbG9yOnRoaXMuY29sb3IsXG4gICAgICBnbG93OnRoaXMuZ2xvdyouNixpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHkqLjcyLHNoYXBlOlwiYm9sdFwiLHJvdGF0aW9uLFxuICAgIH1dO1xuICAgIGNvbnN0IHdpZHRoPXNsdWc/dGhpcy5yYWRpdXMqMS41Om5lZWRsZT90aGlzLnJhZGl1cyouNjU6dGhpcy5yYWRpdXM7XG4gICAgY29uc3QgaGVpZ2h0PXNsdWc/dGhpcy5sZW5ndGgqLjc1OnRoaXMubGVuZ3RoO1xuICAgIGNvbnN0IHNpZGVYID0gLWRpcmVjdGlvblk7XG4gICAgY29uc3Qgc2lkZVkgPSBkaXJlY3Rpb25YO1xuICAgIGNvbnN0IGFkZD0ob2Zmc2V0Om51bWJlcik9Pml0ZW1zLnB1c2goe3g6dGhpcy54K3NpZGVYKm9mZnNldCx5OnRoaXMueStzaWRlWSpvZmZzZXQsd2lkdGgsaGVpZ2h0LGNvbG9yOnRoaXMuY29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb3JlQ29sb3IsZ2xvdzp0aGlzLmdsb3csaW50ZW5zaXR5OnRoaXMuaW50ZW5zaXR5LHNoYXBlOm5lZWRsZT9cImNpcmNsZVwiOlwiYm9sdFwiLHJvdGF0aW9ufSk7XG4gICAgaWYoc3BsaXQpe2FkZCgtdGhpcy5yYWRpdXMqLjcpO2FkZCh0aGlzLnJhZGl1cyouNyl9ZWxzZSBhZGQoMCk7XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25WaWN0b3J5T3B0aW9ucyB7XG4gIGNlbnRlclg6IG51bWJlcjtcbiAgY2VudGVyWTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcGFydGljbGVDb3VudD86IG51bWJlcjtcbiAgZHVyYXRpb25Ncz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25WaWN0b3J5RXhwZXJpZW5jZSB7XG4gIHJlYWRvbmx5IHN0YXJ0ZWRBdDogbnVtYmVyO1xuICByZWFkb25seSBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IE5lb25WaWN0b3J5T3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uVmljdG9yeU9wdGlvbnMsIHN0YXJ0ZWRBdCA9IHBlcmZvcm1hbmNlLm5vdygpKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN0YXJ0ZWRBdCA9IHN0YXJ0ZWRBdDtcbiAgICB0aGlzLmR1cmF0aW9uTXMgPSBvcHRpb25zLmR1cmF0aW9uTXMgPz8gNDIwMDtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0ZWRBdCA+PSB0aGlzLmR1cmF0aW9uTXM7XG4gIH1cblxuICBwcmltaXRpdmVzKG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICBjb25zdCBlbGFwc2VkID0gTWF0aC5tYXgoMCwgbm93IC0gdGhpcy5zdGFydGVkQXQpO1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oMSwgZWxhcHNlZCAvIHRoaXMuZHVyYXRpb25Ncyk7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLm9wdGlvbnMucGFydGljbGVDb3VudCA/PyA5MDtcbiAgICBjb25zdCBjb2xvcnMgPSBbbmVvblBhbGV0dGUuY3lhbiwgbmVvblBhbGV0dGUucGluaywgbmVvblBhbGV0dGUuZ29sZCwgbmVvblBhbGV0dGUuZ3JlZW4sIG5lb25QYWxldHRlLnZpb2xldCwgbmVvblBhbGV0dGUub3JhbmdlXTtcbiAgICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHNlZWQgPSBpbmRleCAqIDkxLjczO1xuICAgICAgY29uc3QgZGVsYXkgPSAoaW5kZXggJSAxMikgKiAwLjAzNTtcbiAgICAgIGNvbnN0IGxvY2FsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcHJvZ3Jlc3MgKiAxLjM1IC0gZGVsYXkpKTtcbiAgICAgIGlmIChsb2NhbCA8PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKChzZWVkICUgMzYwKSAvIDE4MCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3Qgc3BlZWQgPSAwLjIyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAyNjA7XG4gICAgICBjb25zdCBkcmlmdCA9IE1hdGguc2luKHNlZWQpICogdGhpcy5vcHRpb25zLndpZHRoICogMC4wNiAqIGxvY2FsO1xuICAgICAgY29uc3QgeCA9IHRoaXMub3B0aW9ucy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogdGhpcy5vcHRpb25zLndpZHRoICogc3BlZWQgKiBsb2NhbCArIGRyaWZ0O1xuICAgICAgY29uc3QgeSA9IHRoaXMub3B0aW9ucy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogdGhpcy5vcHRpb25zLmhlaWdodCAqIHNwZWVkICogbG9jYWwgKyB0aGlzLm9wdGlvbnMuaGVpZ2h0ICogMC40MiAqIGxvY2FsICogbG9jYWw7XG4gICAgICBjb25zdCBmYWRlID0gTWF0aC5tYXgoMCwgMSAtIGxvY2FsICogMC43Mik7XG4gICAgICBjb25zdCBzaXplID0gMi41ICsgKGluZGV4ICUgNSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4LCB5LFxuICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBzaXplICogKDEuOCArIGluZGV4ICUgMyksXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbaW5kZXggJSBjb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGNvbG9yc1soaW5kZXggKyAyKSAlIGNvbG9ycy5sZW5ndGhdLFxuICAgICAgICBnbG93OiAwLjU1LFxuICAgICAgICBpbnRlbnNpdHk6IGZhZGUsXG4gICAgICAgIHNoYXBlOiBpbmRleCAlIDQgPT09IDAgPyBcInNwYXJrXCIgOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgeDogdGhpcy5vcHRpb25zLmNlbnRlclgsXG4gICAgICB5OiB0aGlzLm9wdGlvbnMuY2VudGVyWSxcbiAgICAgIHdpZHRoOiA4MCArIHByb2dyZXNzICogMTgwLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlLmN5YW4sXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICAgICAgZ2xvdzogMC41NSAqICgxIC0gcHJvZ3Jlc3MpLFxuICAgICAgaW50ZW5zaXR5OiBNYXRoLm1heCgwLCAxIC0gcHJvZ3Jlc3MpLFxuICAgICAgc2hhcGU6IFwicmluZ1wiLFxuICAgIH0pO1xuICAgIHJldHVybiBwcmltaXRpdmVzO1xuICB9XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBDb21iYXRUdW5pbmcge1xuICAvKipcbiAgICogTXVsdGlwbGllcyB0aGUgd2hvbGUgY29tYmF0IHNpbXVsYXRpb24gcGFjZSB3aGlsZSBwcmVzZXJ2aW5nIHJlbGF0aXZlXG4gICAqIHRpbWluZyBiZXR3ZWVuIG1vdmVtZW50LCBjb29sZG93bnMsIHByb2plY3RpbGVzLCBhbmQgYXV0aG9yZWQgdHJhY2sgYmVhdHMuXG4gICAqL1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbWJhdFR1bmluZyA9IHtcbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiAxLjUsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBDb21iYXRUdW5pbmc7XG5cbmlmICghTnVtYmVyLmlzRmluaXRlKGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIpIHx8IGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIgPD0gMCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb21iYXRUdW5pbmc6IGdsb2JhbFNwZWVkTXVsdGlwbGllciBtdXN0IGJlIGEgcG9zaXRpdmUgZmluaXRlIG51bWJlci5cIik7XG59XG4iLCAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhbWlseURlZmluaXRpb248VE1lbWJlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICBhYnN0cmFjdCByZWFkb25seSBmYW1pbHlJZDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBtZW1iZXJzOiBUTWVtYmVycztcblxuICBwcm90ZWN0ZWQgcmVxdWlyZShjb25kaXRpb246IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZyk6IGFzc2VydHMgY29uZGl0aW9uIHtcbiAgICBpZiAoIWNvbmRpdGlvbikgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMuZmFtaWx5SWR9OiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBhYnN0cmFjdCB2YWxpZGF0ZSgpOiB2b2lkO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNob3RQYXR0ZXJuID0gXCJzaW5nbGVcIiB8IFwicmFwaWRTaW5nbGVcIiB8IFwiYnVyc3RcIiB8IFwiaGVhdnlTaW5nbGVcIiB8IFwicGFpcmVkU3ByZWFkXCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlQmVoYXZpb3IgPSBcInN0cmFpZ2h0XCIgfCBcInBpZXJjaW5nU3RyYWlnaHRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVTaGFwZSA9IFwibmVlZGxlXCIgfCBcImRhcnRcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcbmV4cG9ydCB0eXBlIE11enpsZUVmZmVjdCA9IFwiY3Jpc3BTdGFyXCIgfCBcInJhcGlkRmxpY2tlclwiIHwgXCJncm91cGVkUHVsc2VcIiB8IFwic2hvY2tEaWFtb25kXCIgfCBcInR3aW5Qcm9uZ3NcIjtcbmV4cG9ydCB0eXBlIEltcGFjdEVmZmVjdCA9IFwicGluU3BhcmtcIiB8IFwibmVlZGxlU2NhdHRlclwiIHwgXCJidXJzdENyb3NzXCIgfCBcImltcGFjdFJpbmdcIiB8IFwic3BsaXRSaXBwbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5MZXZlbCB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGZpcmVSYXRlUGVyU2Vjb25kOiBudW1iZXI7XG4gIGRhbWFnZTogbnVtYmVyO1xuICBwcm9qZWN0aWxlU3BlZWQ6IG51bWJlcjtcbiAgcHJvamVjdGlsZVJhZGl1czogbnVtYmVyO1xuICBwcm9qZWN0aWxlQ291bnQ6IG51bWJlcjtcbiAgYnVyc3RDb3VudDogbnVtYmVyO1xuICBidXJzdEludGVydmFsTXM6IG51bWJlcjtcbiAgc3ByZWFkRGVncmVlczogbnVtYmVyO1xuICBwaWVyY2U6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiBudW1iZXI7XG4gIGltcGFjdFJhZGl1cz86IG51bWJlcjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIG11enpsZUZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0Rmxhc2hTY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1blZpc3VhbElkZW50aXR5IHtcbiAgc2lsaG91ZXR0ZTogc3RyaW5nO1xuICBtb3Rpb25MYW5ndWFnZTogc3RyaW5nO1xuICBwcm9qZWN0aWxlU2hhcGU6IFByb2plY3RpbGVTaGFwZTtcbiAgcHJvamVjdGlsZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICB0cmFpbENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHByb2plY3RpbGVBc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBtdXp6bGVFZmZlY3Q6IE11enpsZUVmZmVjdDtcbiAgaW1wYWN0RWZmZWN0OiBJbXBhY3RFZmZlY3Q7XG4gIG11enpsZUR1cmF0aW9uTXM6IG51bWJlcjtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICBob3Jpem9udGFsSml0dGVyOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5NZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiB8IFwiZmlyc3RCdWlsZFwiIHwgXCJwcmVzc3VyZVwiO1xuICBzaG90UGF0dGVybjogU2hvdFBhdHRlcm47XG4gIHByb2plY3RpbGVCZWhhdmlvcjogUHJvamVjdGlsZUJlaGF2aW9yO1xuICB2aXN1YWxJZGVudGl0eTogR3VuVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgR3VuTGV2ZWxbXTtcbn1cblxuY29uc3QgbGV2ZWwgPSAoXG4gIGxldmVsTnVtYmVyOiBudW1iZXIsXG4gIHZhbHVlczogT21pdDxHdW5MZXZlbCwgXCJsZXZlbFwiIHwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiPiAmXG4gICAgUGFydGlhbDxQaWNrPEd1bkxldmVsLCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCIgfCBcImltcGFjdFJhZGl1c1wiPj4sXG4pOiBHdW5MZXZlbCA9PiAoe1xuICBsZXZlbDogbGV2ZWxOdW1iZXIsXG4gIHByb2plY3RpbGVDb3VudDogMSxcbiAgYnVyc3RDb3VudDogMSxcbiAgYnVyc3RJbnRlcnZhbE1zOiAwLFxuICBzcHJlYWREZWdyZWVzOiAwLFxuICBwaWVyY2U6IDAsXG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogMCxcbiAga25vY2tiYWNrOiAwLFxuICAuLi52YWx1ZXMsXG59KTtcblxuZXhwb3J0IGNsYXNzIEd1bkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImd1blwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiR3VuXCI7XG4gIHJlYWRvbmx5IGltcGxlbWVudGF0aW9uID0ge1xuICAgIGF1dG9GaXJlczogdHJ1ZSxcbiAgICB0YXJnZXRpbmc6IFwibGFuZUZvcndhcmRcIixcbiAgICBwcm9qZWN0aWxlTW9kZWw6IFwia2luZW1hdGljXCIsXG4gICAgY29sbGlzaW9uTW9kZWw6IFwiY2lyY2xlVnNFbmVteVwiLFxuICAgIGFsbG93ZWRTaG90UGF0dGVybnM6IFtcInNpbmdsZVwiLCBcInJhcGlkU2luZ2xlXCIsIFwiYnVyc3RcIiwgXCJoZWF2eVNpbmdsZVwiLCBcInBhaXJlZFNwcmVhZFwiXSBzYXRpc2ZpZXMgU2hvdFBhdHRlcm5bXSxcbiAgICBhbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9yczogW1wic3RyYWlnaHRcIiwgXCJwaWVyY2luZ1N0cmFpZ2h0XCJdIHNhdGlzZmllcyBQcm9qZWN0aWxlQmVoYXZpb3JbXSxcbiAgfSBhcyBjb25zdDtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHB1bHNlUGlzdG9sOiB7XG4gICAgICBsYWJlbDogXCJQdWxzZSBQaXN0b2xcIiwgcmFyaXR5OiBcInN0YXJ0ZXJcIiwgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiwgc2hvdFBhdHRlcm46IFwic2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJ0aW55QnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImNsZWFuU2luZ2xlU2hvdFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiY3lhblwiLCB0cmFpbENvbG9yOiBcImRlZXBCbHVlXCIsIGNvcmVDb2xvcjogXCJjeWFuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuOCwgdHJhaWxXaWR0aFNjYWxlOiAwLjY1LCB2aXN1YWxJbnRlbnNpdHk6IDAuOSwgbXV6emxlRWZmZWN0OiBcImNyaXNwU3RhclwiLCBpbXBhY3RFZmZlY3Q6IFwicGluU3BhcmtcIiwgbXV6emxlRHVyYXRpb25NczogNzIsIGltcGFjdER1cmF0aW9uTXM6IDEwNSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOjEscHJvamVjdGlsZVNwZWVkOjU0MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS43NSxkYW1hZ2U6MS4xNSxwcm9qZWN0aWxlU3BlZWQ6NTgwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljh9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi4xNSxkYW1hZ2U6MS4zNSxwcm9qZWN0aWxlU3BlZWQ6NjIwLHByb2plY3RpbGVSYWRpdXM6My4yNSx0cmFpbExlbmd0aDoxOCxtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi45fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgbmVlZGxlclNtZzoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlciBTTUdcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcInJhcGlkU2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzcHJheVNwaGVyZVwiLCBtb3Rpb25MYW5ndWFnZTogXCJzdG9jaGFzdGljTmVlZGxlU3ByYXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcIm5lZWRsZVwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ3JlZW5cIiwgdHJhaWxDb2xvcjogXCJjeWFuXCIsIGNvcmVDb2xvcjogXCJncmVlblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLCB0cmFpbFdpZHRoU2NhbGU6IDAuMjgsIHZpc3VhbEludGVuc2l0eTogMC43OCwgbXV6emxlRWZmZWN0OiBcInJhcGlkRmxpY2tlclwiLCBpbXBhY3RFZmZlY3Q6IFwibmVlZGxlU2NhdHRlclwiLCBtdXp6bGVEdXJhdGlvbk1zOiA0NiwgaW1wYWN0RHVyYXRpb25NczogODUsIGhvcml6b250YWxKaXR0ZXI6IDcgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDo1LjI1LGRhbWFnZTouNDIscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjEwLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjM1LGhpdEZsYXNoU2NhbGU6LjQ1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjcuMjUsZGFtYWdlOi40OCxwcm9qZWN0aWxlU3BlZWQ6NzM1LHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEuNSx0cmFpbExlbmd0aDoxMSx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi40LGhpdEZsYXNoU2NhbGU6LjV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6OS4yNSxkYW1hZ2U6LjU0LHByb2plY3RpbGVTcGVlZDo3ODAscHJvamVjdGlsZVJhZGl1czoyLjE1LHNwcmVhZERlZ3JlZXM6Mix0cmFpbExlbmd0aDoxMix0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi40NSxoaXRGbGFzaFNjYWxlOi41NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1cnN0Q2FyYmluZToge1xuICAgICAgbGFiZWw6IFwiQnVyc3QgQ2FyYmluZVwiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwiYnVyc3RcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNob3J0VHJhY2VyQnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImdyb3VwZWRWb2xsZXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdvbGRcIiwgdHJhaWxDb2xvcjogXCJvcmFuZ2VcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMi4yLCB0cmFpbFdpZHRoU2NhbGU6IDAuOCwgdmlzdWFsSW50ZW5zaXR5OiAxLjA1LCBtdXp6bGVFZmZlY3Q6IFwiZ3JvdXBlZFB1bHNlXCIsIGltcGFjdEVmZmVjdDogXCJidXJzdENyb3NzXCIsIG11enpsZUR1cmF0aW9uTXM6IDg2LCBpbXBhY3REdXJhdGlvbk1zOiAxMjAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouOTUsZGFtYWdlOi43NSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6Mi43NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjcyLHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDgsZGFtYWdlOi44NSxwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6Mi44NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjY0LHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjYsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOSxwcm9qZWN0aWxlU3BlZWQ6NzI1LHByb2plY3RpbGVSYWRpdXM6MyxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU4LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGhlYXZ5Q2Fubm9uOiB7XG4gICAgICBsYWJlbDogXCJIZWF2eSBDYW5ub25cIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcImhlYXZ5U2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJwaWVyY2luZ1N0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcImNodW5reUJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic2xvd0hlYXZ5UHVuY2hcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNsdWdcIiwgcHJvamVjdGlsZUNvbG9yOiBcIm9yYW5nZVwiLCB0cmFpbENvbG9yOiBcInJlZFwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLjM1LCB0cmFpbFdpZHRoU2NhbGU6IDEuMzUsIHZpc3VhbEludGVuc2l0eTogMS4yLCBtdXp6bGVFZmZlY3Q6IFwic2hvY2tEaWFtb25kXCIsIGltcGFjdEVmZmVjdDogXCJpbXBhY3RSaW5nXCIsIG11enpsZUR1cmF0aW9uTXM6IDEzNSwgaW1wYWN0RHVyYXRpb25NczogMTkwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjcyLGRhbWFnZToyLjQscHJvamVjdGlsZVNwZWVkOjUwMCxwcm9qZWN0aWxlUmFkaXVzOjQuNSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyMixpbXBhY3RSYWRpdXM6MTQsa25vY2tiYWNrOjE0LG11enpsZUZsYXNoU2NhbGU6MS4xLGhpdEZsYXNoU2NhbGU6MS4yNX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDouODIsZGFtYWdlOjMscHJvamVjdGlsZVNwZWVkOjUzNSxwcm9qZWN0aWxlUmFkaXVzOjQuNzUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjQsaW1wYWN0UmFkaXVzOjE2LGtub2NrYmFjazoxOCxtdXp6bGVGbGFzaFNjYWxlOjEuMixoaXRGbGFzaFNjYWxlOjEuMzV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjksZGFtYWdlOjMuNixwcm9qZWN0aWxlU3BlZWQ6NTcwLHByb2plY3RpbGVSYWRpdXM6NSxwaWVyY2U6Mix0cmFpbExlbmd0aDoyNixpbXBhY3RSYWRpdXM6MTgsa25vY2tiYWNrOjIyLG11enpsZUZsYXNoU2NhbGU6MS4zLGhpdEZsYXNoU2NhbGU6MS41fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc3BsaXR0ZXJSaWZsZToge1xuICAgICAgbGFiZWw6IFwiU3BsaXR0ZXIgUmlmbGVcIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcInBhaXJlZFNwcmVhZFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwicGFpcmVkQm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjdXJyZW50TGFuZUZvcmtcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNwbGl0Qm9sdFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwidmlvbGV0XCIsIHRyYWlsQ29sb3I6IFwicGlua1wiLCBjb3JlQ29sb3I6IFwidmlvbGV0XCIsIHByb2plY3RpbGVBc3BlY3Q6IDMuNCwgdHJhaWxXaWR0aFNjYWxlOiAwLjU1LCB2aXN1YWxJbnRlbnNpdHk6IDEsIG11enpsZUVmZmVjdDogXCJ0d2luUHJvbmdzXCIsIGltcGFjdEVmZmVjdDogXCJzcGxpdFJpcHBsZVwiLCBtdXp6bGVEdXJhdGlvbk1zOiA5NSwgaW1wYWN0RHVyYXRpb25NczogMTQ1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjgscHJvamVjdGlsZVNwZWVkOjU4NSxwcm9qZWN0aWxlUmFkaXVzOjIuNzUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczoyLjUsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6Ljk1LHByb2plY3RpbGVTcGVlZDo2MjUscHJvamVjdGlsZVJhZGl1czoyLjg1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Myx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS41NSxkYW1hZ2U6MS4wNSxwcm9qZWN0aWxlU3BlZWQ6NjY1LHByb2plY3RpbGVSYWRpdXM6Myxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMuNSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGd1bl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFNob3RQYXR0ZXJucy5pbmNsdWRlcyhndW4uc2hvdFBhdHRlcm4pLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHNob3QgcGF0dGVybi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzLmluY2x1ZGVzKGd1bi5wcm9qZWN0aWxlQmVoYXZpb3IpLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHByb2plY3RpbGUgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHByb2plY3RpbGUgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biB0cmFpbCBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyA+IDAgJiYgZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZWZmZWN0IGR1cmF0aW9ucyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgZGVmaW5lIGxldmVscy5gKTtcbiAgICAgIGZvciAoY29uc3QgdHVuaW5nIG9mIGd1bi5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5maXJlUmF0ZVBlclNlY29uZCA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gZmlyZSByYXRlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVNwZWVkID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVJhZGl1cyA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgcHJvamVjdGlsZSBwb3dlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5idXJzdENvdW50ID49IDEgJiYgdHVuaW5nLnByb2plY3RpbGVDb3VudCA+PSAxLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIGNvdW50cy5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGd1bkZhbWlseSA9IG5ldyBHdW5GYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBHdW5JZCA9IGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15U3Bhd25FbnRyYW5jZSA9IFwic2NhdHRlclwiIHwgXCJmYWRlXCI7XG5leHBvcnQgdHlwZSBFbmVteURlYXRoVmlzdWFsID0gXCJjbG91ZFwiIHwgXCJub25lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JiTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaGVhbHRoOiBudW1iZXI7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgYmFzZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICByaW1Db2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhZG93Q29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYXBlSWQ6IHN0cmluZztcbiAgZ2xvdzogbnVtYmVyO1xuICBzdXJmYWNlVGV4dHVyZTogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgaGl0Rmxhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGRlYXRoRmxhc2hTY2FsZTogbnVtYmVyO1xuICBzaGFwZVpvb206IG51bWJlcjtcbiAgaW1wYWN0UmVzaXN0YW5jZTogbnVtYmVyO1xuICBleHBsb3Npb25NYWduaXR1ZGU6IG51bWJlcjtcbiAgc3Bhd25FbnRyYW5jZTogRW5lbXlTcGF3bkVudHJhbmNlO1xuICBzcGF3blNvdW5kOiBzdHJpbmcgfCBudWxsO1xuICBkZWF0aFNvdW5kOiBzdHJpbmc7XG4gIGRlYXRoVmlzdWFsOiBFbmVteURlYXRoVmlzdWFsO1xufVxuXG5leHBvcnQgY2xhc3MgT3JiRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwib3JiXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJPcmIgRW5lbXlcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBiYXNpY09yYjoge1xuICAgICAgbGFiZWw6IFwiQmFzaWMgT3JiXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxMCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJodW50ZXItZXllXCIsXG4gICAgICBnbG93OiAwLjgyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IDAuMjgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMjUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogMC43MixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogOTAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuOCxcbiAgICAgIHNoYXBlWm9vbTogMy40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkVuZW15U3Bhd25cIixcbiAgICAgIGRlYXRoU291bmQ6IFwiRW5lbXlEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgICBnbGFzc1NoaWVsZDoge1xuICAgICAgbGFiZWw6IFwiR2xhc3MgU2hpZWxkXCIsXG4gICAgICBoZWFsdGg6IC4xLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA1LjYsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogLjEsXG4gICAgICBzY29yZTogMyxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0cmljay1nYXRlXCIsXG4gICAgICBnbG93OiAuNjIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjEyLFxuICAgICAgcmltSW50ZW5zaXR5OiAwLjksXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjQ1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA3MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS4xLFxuICAgICAgc2hhcGVab29tOiAzLjA1LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogLjY1LFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuMjUsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcImZhZGVcIixcbiAgICAgIHNwYXduU291bmQ6IG51bGwsXG4gICAgICBkZWF0aFNvdW5kOiBcIkdsYXNzU2hpZWxkU2hhdHRlclwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgd2luZ2VyOiB7XG4gICAgICBsYWJlbDogXCJXaW5nZXJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA3NixcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDE0LFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcImVsaXRlLXdpbmdzXCIsXG4gICAgICBnbG93OiAuODYsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjIyLFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjIsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjY2LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA4NSxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS43NSxcbiAgICAgIHNoYXBlWm9vbTogMy4yNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgdGFuazoge1xuICAgICAgbGFiZWw6IFwiVGFua1wiLFxuICAgICAgaGVhbHRoOiA2LFxuICAgICAgc3BlZWQ6IDQ0LFxuICAgICAgcmFkaXVzOiAxNixcbiAgICAgIGNvbHVtblNwYW46IDMsXG4gICAgICBjb250YWN0RGFtYWdlOiAyLFxuICAgICAgc2NvcmU6IDgwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRhbmstYnVua2VyXCIsXG4gICAgICBnbG93OiAxLjA1LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS40NSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuODUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMi43LFxuICAgICAgc2hhcGVab29tOiA0LjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAyLjEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC45LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkJvc3NcIixcbiAgICAgIGRlYXRoU291bmQ6IFwiQm9zc0Rlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKG9yYi5jb2x1bW5TcGFuKSAmJiBvcmIuY29sdW1uU3BhbiA+PSAxLCBgJHtpZH0gY29sdW1uU3BhbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgR3VuSWQgfSBmcm9tIFwiLi9HdW5GYW1pbHlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGVnZW5kRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0JhbGFuY2Uge1xuICBlbmVteUhwOiBudW1iZXI7XG4gIGVuZW15U3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RlZmluaXRpb24ge1xuICBsYXlvdXQ6IHN0cmluZztcbiAgbGVnZW5kOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBUcmFja0xlZ2VuZEVudHJ5Pj47XG4gIGJhbGFuY2U6IFRyYWNrQmFsYW5jZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja01lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGR1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xuICBzdGFydGluZ0d1bjogR3VuSWQ7XG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEgfCAyIHwgMztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgZGVmaW5pdGlvbjogVHJhY2tEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRmFtaWx5TWVtYmVyPFRyYWNrSWQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgdHJhY2tJZHM6IHJlYWRvbmx5IFRyYWNrSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFja0VudGl0eSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgbGFuZUluZGV4OiBudW1iZXI7XG4gIGNvbHVtblNwYW46IG51bWJlcjtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgZGlzdGFuY2VGcm9tUGxheWVyOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5jb25zdCBpc0VuZW15ID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IGlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIik7XG5jb25zdCBlbmVteUlkRnJvbVRyYWNrSWQgPSAoaWQ6IHN0cmluZyk6IE9yYklkIHwgbnVsbCA9PiB7XG4gIGlmIChpZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBjYW5kaWRhdGUgPSBpZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG4gIHJldHVybiBjYW5kaWRhdGUgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgT3JiSWQgOiBudWxsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHRyYWNrLmxheW91dFxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcCgodGV4dCwgc291cmNlSW5kZXgpID0+ICh7IHRleHQ6IHRleHQudHJpbSgpLCBzb3VyY2VJbmRleDogc291cmNlSW5kZXggKyAxIH0pKVxuICAgIC5maWx0ZXIocm93ID0+IHJvdy50ZXh0Lmxlbmd0aCA+IDApO1xuXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGF5b3V0IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgcm93LlwiKTtcblxuICBsZXQgbGVmdFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxldCByaWdodFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG5cbiAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgcGlwZUNvdW50ID0gWy4uLnJvdy50ZXh0XS5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3RlciA9PT0gXCJ8XCIpLmxlbmd0aDtcbiAgICBpZiAocGlwZUNvdW50ICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgXCJ8XCIgc2VwYXJhdG9yOyBmb3VuZCAke3BpcGVDb3VudH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHJvdy50ZXh0LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgbGVmdFdpZHRoID8/PSBsZWZ0Lmxlbmd0aDtcbiAgICByaWdodFdpZHRoID8/PSByaWdodC5sZW5ndGg7XG5cbiAgICBpZiAobGVmdC5sZW5ndGggIT09IGxlZnRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIGxlZnQgd2lkdGggJHtsZWZ0Lmxlbmd0aH07IGV4cGVjdGVkICR7bGVmdFdpZHRofS5gKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0Lmxlbmd0aCAhPT0gcmlnaHRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIHJpZ2h0IHdpZHRoICR7cmlnaHQubGVuZ3RofTsgZXhwZWN0ZWQgJHtyaWdodFdpZHRofS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0YW5jZUZyb21QbGF5ZXIgPSByb3dzLmxlbmd0aCAtIDEgLSByb3dJbmRleDtcbiAgICBmb3IgKGNvbnN0IFtzaWRlLCBsYW5lXSBvZiBbW1wibGVmdFwiLCBsZWZ0XSwgW1wicmlnaHRcIiwgcmlnaHRdXSBhcyBjb25zdCkge1xuICAgICAgY29uc3Qgb2NjdXBpZWRCeSA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoZW50cnkuaWQpO1xuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gZW5lbXlJZCA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdLmNvbHVtblNwYW4gOiAxO1xuICAgICAgICBpZiAobGFuZUluZGV4ICsgY29sdW1uU3BhbiA+IGxhbmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBuZWVkcyAke2NvbHVtblNwYW59IGNvbHVtbnMgYW5kIG9ubHkgJHtsYW5lLmxlbmd0aCAtIGxhbmVJbmRleH0gcmVtYWluLmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSB7XG4gICAgICAgICAgY29uc3Qgb2NjdXBpZWQgPSBvY2N1cGllZEJ5LmdldChsYW5lSW5kZXggKyBvZmZzZXQpO1xuICAgICAgICAgIGlmIChvY2N1cGllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IG9uICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleCArIG9mZnNldH0sIGFscmVhZHkgb2NjdXBpZWQgYnkgJHtvY2N1cGllZH0uYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSBvY2N1cGllZEJ5LnNldChsYW5lSW5kZXggKyBvZmZzZXQsIGVudHJ5LmlkKTtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIGNvbHVtblNwYW4sXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZGlzdGFuY2VGcm9tUGxheWVyLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogKGVudHJ5LnNwZWVkID8/IDEpICogKGlzRW5lbXkoZW50cnkuaWQpID8gdHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDogMSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRpZXMuc29ydCgoYSwgYikgPT5cbiAgICBhLmRpc3RhbmNlRnJvbVBsYXllciAtIGIuZGlzdGFuY2VGcm9tUGxheWVyIHx8XG4gICAgYS5yb3dJbmRleCAtIGIucm93SW5kZXggfHxcbiAgICBhLnNpZGUubG9jYWxlQ29tcGFyZShiLnNpZGUpIHx8XG4gICAgYS5sYW5lSW5kZXggLSBiLmxhbmVJbmRleCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcbiAgbGFiZWw6IFwiU2t5YnJlYWtcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIEF1cm9yYSBvcGVuZXIgaXMgYnVzaWVyIHRoYW4gdGhlIHR1dG9yaWFsIGFyYywgYnV0IGdpdmVzIGEgbmVhcmJ5IHNoaWVsZCBhbmQgYnVyc3Qgd2VhcG9uIGJlZm9yZSB0aGUgZmlyc3Qgc3F1ZWV6ZS5cIixcbiAgZHVyYXRpb25TZWNvbmRzOiA0NCxcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcbiAgc3RhcnRpbmdHdW5MZXZlbDogMixcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBgXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlcuLiB8IC4uRS4uXG4uLkUuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uLkUuXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLmEuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC4uLi4uXG4uLi4uLiB8IC5FLkUuXG4uLlcuLiB8IC4uLi4uXG4uLi4uLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uRS4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLkUuXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLk0uLiB8IC4uLi4uXG5gLFxuICAgIGxlZ2VuZDoge1xuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxuICAgICAgXCJNXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcbiAgICAgIFwiV1wiOiB7IGlkOiBcImVuZW15LndpbmdlclwiIH0sXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuOSB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44MiB9LFxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuNzggfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEsXG4gICAgICBlbmVteVNwZWVkOiAxLjA4LFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJSaWJib24gU3Rvcm1cIixcbiAgZGVzY3JpcHRpb246IFwiQXVyb3JhIHByZXNzdXJlIGNvbWVzIGluIHdhdmVzOiBmbGFua2VycywgZ2xhc3MgZGVjb3lzLCBhIHRhbmsgYnJlYWssIHRoZW4gYSBoZWF2eSB3ZWFwb24gcGF5b2ZmLlwiLFxuICBkdXJhdGlvblNlY29uZHM6IDYyLFxuICBzdGFydGluZ0d1bjogXCJidXJzdENhcmJpbmVcIixcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBgXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLlcuLiB8IC4uLi4uXG4uLi4uLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLlguLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uUC5FLiB8IC5FLlAuXG4uLi4uLiB8IC4uLi4uXG4uLlcuLiB8IC4uRS4uXG4uLkUuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLkouLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlQuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uLkUuXG4uLlcuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLmIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC4uLi4uXG4uLi4uLiB8IC5FLkUuXG4uLlAuLiB8IC4uRS4uXG4uLkUuLiB8IC4uUC4uXG4uLi4uLiB8IC4uLi4uXG4uLksuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlcuLiB8IC4uVy4uXG4uRS4uLiB8IC4uLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLk0uLiB8IC4uLi4uXG5gLFxuICAgIGxlZ2VuZDoge1xuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxuICAgICAgXCJNXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcbiAgICAgIFwiV1wiOiB7IGlkOiBcImVuZW15LndpbmdlclwiIH0sXG4gICAgICBcIlRcIjogeyBpZDogXCJlbmVteS50YW5rXCIgfSxcbiAgICAgIFwiUFwiOiB7IGlkOiBcImVuZW15LmdsYXNzU2hpZWxkXCIgfSxcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC45MiB9LFxuICAgICAgXCJKXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIiwgc3BlZWQ6IDAuODggfSxcbiAgICAgIFwiS1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIiwgc3BlZWQ6IDAuOTIgfSxcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxuICAgICAgXCJYXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIiwgc3BlZWQ6IDAuODYgfSxcbiAgICAgIFwiYlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiLCBzcGVlZDogMC44NiB9LFxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjc4IH0sXG4gICAgfSxcbiAgICBiYWxhbmNlOiB7XG4gICAgICBlbmVteUhwOiAxLjA0LFxuICAgICAgZW5lbXlTcGVlZDogMS4xMixcbiAgICB9LFxuICB9LFxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcbiAgbGFiZWw6IFwiTWFnbmV0aWMgRGF3blwiLFxuICBkZXNjcmlwdGlvbjogXCJBIGRlbnNlIEF1cm9yYSBmaW5hbGUgd2l0aCBoYXJkIHN1cmdlcywgZGVsaWJlcmF0ZSBzYWZlIHNoZWx2ZXMsIGFuZCB0b3AtdGllciB0b29scyBiZWZvcmUgdGhlIGJpZ2dlc3Qgd2F2ZXMuXCIsXG4gIGR1cmF0aW9uU2Vjb25kczogNzgsXG4gIHN0YXJ0aW5nR3VuOiBcImJ1cnN0Q2FyYmluZVwiLFxuICBzdGFydGluZ0d1bkxldmVsOiAyLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBsYXlvdXQ6IGBcbi4uVC4uIHwgLi5ULi5cbi5FLkUuIHwgLkUuRS5cbi4uVy4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uVC4uIHwgLi4uLi5cbi4uLi4uIHwgLi5ULi5cbi4uLi4uIHwgLi4uLi5cbi4uWC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5QLkUuIHwgLkUuUC5cbi4uVy4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uVy4uIHwgLi4uLi5cbi4uLi4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uVC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uYi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uUC4uIHwgLi5QLi5cbi4uVy4uIHwgLi5FLi5cbi4uRS4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLi4uLi5cbi4uLi4uIHwgLkUuRS5cbi4uVy4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uWC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uVC4uIHwgLi4uLi5cbi4uLi4uIHwgLi5FLi5cbi5FLkUuIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uYy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uVy4uIHwgLi5XLi5cbi5FLkUuIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5QLkUuIHwgLkUuUC5cbi4uVy4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uSS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uWC4uIHwgLi4uLi5cbi4uTS4uIHwgLi4uLi5cbmAsXG4gICAgbGVnZW5kOiB7XG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXG4gICAgICBcIk1cIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxuICAgICAgXCJXXCI6IHsgaWQ6IFwiZW5lbXkud2luZ2VyXCIgfSxcbiAgICAgIFwiVFwiOiB7IGlkOiBcImVuZW15LnRhbmtcIiB9LFxuICAgICAgXCJQXCI6IHsgaWQ6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIiB9LFxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjkyIH0sXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC44NiB9LFxuICAgICAgXCJLXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjc4IH0sXG4gICAgICBcIlhcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5oZXhHdWFyZFwiLCBzcGVlZDogMC44NCB9LFxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjg0IH0sXG4gICAgICBcImNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLm5lZWRsZVJhcGllclwiLCBzcGVlZDogMC44NiB9LFxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjc2IH0sXG4gICAgfSxcbiAgICBiYWxhbmNlOiB7XG4gICAgICBlbmVteUhwOiAxLjA4LFxuICAgICAgZW5lbXlTcGVlZDogMS4xNixcbiAgICB9LFxuICB9LFxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcbiAgbGFiZWw6IFwiRmlyc3QgR2xvd1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIHNob3J0IHRlYWNoaW5nIHJ1biB3aXRoIGEgd2VhcG9uIGluIHJlYWNoLCBvbmUgbGFuZSBhdCBhIHRpbWUsIHRoZW4gYSBjYWxtIHR3by1sYW5lIGZpbmlzaC5cIixcbiAgZHVyYXRpb25TZWNvbmRzOiAyOCxcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBsYXlvdXQ6IGBcbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uRS5cbi4uLi4uIHwgLi4uLi5cbi4uYS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uRS5cbi4uLi4uIHwgLi4uLi5cbi4uRy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uRy4uIHwgLi4uLi5cbi4uTS4uIHwgLi4uLi5cbmAsXG4gICAgbGVnZW5kOiB7XG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXG4gICAgICBcIk1cIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDEuMTUgfSxcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOTIgfSxcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuOTUgfSxcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC45IH0sXG4gICAgfSxcbiAgICBiYWxhbmNlOiB7XG4gICAgICBlbmVteUhwOiAxLFxuICAgICAgZW5lbXlTcGVlZDogMC45MixcbiAgICB9LFxuICB9LFxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcbiAgbGFiZWw6IFwiRHJpZnQgTGVzc29uXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFsdGVybmF0aW5nIGxhbmVzIGludHJvZHVjZSBhaW0gcHJlc3N1cmUsIHdpdGggYSBzaGllbGQgcG9ja2V0IGJlZm9yZSB0aGUgZmlyc3QgcGFpcmVkIHdhdmUuXCIsXG4gIGR1cmF0aW9uU2Vjb25kczogMzYsXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBgXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uLkUuXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC4uLi4uXG4uLi4uLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uRS4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLkUuXG4uLi4uLiB8IC4uLi4uXG4uLmEuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLi4uXG4uLi4uLiB8IC4uLkUuXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLkcuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLk0uLiB8IC4uLi4uXG5gLFxuICAgIGxlZ2VuZDoge1xuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxuICAgICAgXCJNXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAxLjEgfSxcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44OCB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44NiB9LFxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuODIgfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEsXG4gICAgICBlbmVteVNwZWVkOiAxLFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJOZWJ1bGEgR2F0ZVwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgbGVhcm5pbmcgZmluYWxlIGFkZHMgZmFzdCBmbGFua2VycyBhbmQgYSBzaW5nbGUgdGFuaywgd2l0aCBjbGVhciByZWNvdmVyeSBzaGVsdmVzIGJldHdlZW4gcHJlc3N1cmUgd2F2ZXMuXCIsXG4gIGR1cmF0aW9uU2Vjb25kczogNTIsXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDIsXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBgXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlcuLiB8IC4uLi4uXG4uLi4uLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLkouLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uLkUuXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLlguLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC4uLi4uXG4uLi4uLiB8IC5FLkUuXG4uLlcuLiB8IC4uLi4uXG4uLi4uLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlQuLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uRS4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLmIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlcuLiB8IC4uRS4uXG4uLkUuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLkcuLiB8IC4uLi4uXG4uLk0uLiB8IC4uLi4uXG5gLFxuICAgIGxlZ2VuZDoge1xuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxuICAgICAgXCJNXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcbiAgICAgIFwiV1wiOiB7IGlkOiBcImVuZW15LndpbmdlclwiIH0sXG4gICAgICBcIlRcIjogeyBpZDogXCJlbmVteS50YW5rXCIgfSxcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAxLjE1IH0sXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODggfSxcbiAgICAgIFwiSlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCIsIHNwZWVkOiAwLjkgfSxcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuODUgfSxcbiAgICAgIFwiWFwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCIsIHNwZWVkOiAwLjkgfSxcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuOTIgfSxcbiAgICAgIFwiYlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuODIgfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEsXG4gICAgICBlbmVteVNwZWVkOiAxLjA0LFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazEgfSBmcm9tIFwiLi9UcmFjazRcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMiB9IGZyb20gXCIuL1RyYWNrNVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2szIH0gZnJvbSBcIi4vVHJhY2s2XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrMVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazIgfSBmcm9tIFwiLi9UcmFjazJcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2szIH0gZnJvbSBcIi4vVHJhY2szXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrRmFtaWx5TWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgdHJhY2tzID0ge1xuICBcIm5lb24tbmVidWxhZS0xXCI6IG5lb25OZWJ1bGFlVHJhY2sxLFxuICBcIm5lb24tbmVidWxhZS0yXCI6IG5lb25OZWJ1bGFlVHJhY2syLFxuICBcIm5lb24tbmVidWxhZS0zXCI6IG5lb25OZWJ1bGFlVHJhY2szLFxuICBcImF1cm9yYS0xXCI6IGF1cm9yYVRyYWNrMSxcbiAgXCJhdXJvcmEtMlwiOiBhdXJvcmFUcmFjazIsXG4gIFwiYXVyb3JhLTNcIjogYXVyb3JhVHJhY2szLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWxpZXMgPSB7XG4gIG5lb25OZWJ1bGFlOiB7XG4gICAgbGFiZWw6IFwiTmVvbiBOZWJ1bGFlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBsZWFybmluZyBhcmMgYWJvdXQgbGFuZXMsIHBpY2t1cHMsIHNoaWVsZHMsIGFuZCBjb250cm9sbGVkIHByZXNzdXJlLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwibmVvbkhhbGxcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJuZW9uLW5lYnVsYWUtMVwiLCBcIm5lb24tbmVidWxhZS0yXCIsIFwibmVvbi1uZWJ1bGFlLTNcIl0sXG4gIH0sXG4gIGF1cm9yYToge1xuICAgIGxhYmVsOiBcIkF1cm9yYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlbnNlIHBsYW5ldGFyeSBhc3NhdWx0cyB3aXRoIGJyaWdodGVyIHJlY292ZXJ5IHdpbmRvd3MgYW5kIHNoYXJwZXIgdGhyZWF0IHdhdmVzLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwiYXVyb3JhXCIgfSxcbiAgICB0cmFja0lkczogW1wiYXVyb3JhLTFcIiwgXCJhdXJvcmEtMlwiLCBcImF1cm9yYS0zXCJdLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlNZW1iZXI8a2V5b2YgdHlwZW9mIHRyYWNrcz4+O1xuXG5leHBvcnQgeyBhdXJvcmFUcmFjazEsIGF1cm9yYVRyYWNrMiwgYXVyb3JhVHJhY2szLCBuZW9uTmVidWxhZVRyYWNrMSwgbmVvbk5lYnVsYWVUcmFjazIsIG5lb25OZWJ1bGFlVHJhY2szIH07XG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB7IGd1bkZhbWlseSB9IGZyb20gXCIuL0d1bkZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja0ZhbWlseU1lbWJlciwgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyB0cmFja0ZhbWlsaWVzLCB0cmFja3MgfSBmcm9tIFwiLi90cmFja3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJ0cmFja1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiVHJhY2tcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHRyYWNrcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+O1xuICByZWFkb25seSBmYW1pbGllcyA9IHRyYWNrRmFtaWxpZXMgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrRmFtaWx5TWVtYmVyPGtleW9mIHR5cGVvZiB0cmFja3M+PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCB0cmFja10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLmR1cmF0aW9uU2Vjb25kcyA+IDAsIGAke2lkfSBkdXJhdGlvbiBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLnN0YXJ0aW5nR3VuIGluIGd1bkZhbWlseS5tZW1iZXJzLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc3RhcnRpbmcgZ3VuLmApO1xuICAgICAgcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZCh0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtpZCwgZmFtaWx5XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmZhbWlsaWVzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGZhbWlseS50cmFja0lkcy5sZW5ndGggPiAwLCBgJHtpZH0gbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSB0cmFjay5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpc0xhbmVSdW5uZXJTY2VuZUlkKGZhbWlseS5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgICAgZm9yIChjb25zdCB0cmFja0lkIG9mIGZhbWlseS50cmFja0lkcykge1xuICAgICAgICB0aGlzLnJlcXVpcmUodHJhY2tJZCBpbiB0aGlzLm1lbWJlcnMsIGAke2lkfSByZWZlcmVuY2VzIHVua25vd24gdHJhY2sgXCIke3RyYWNrSWR9XCIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0aGlzLm1lbWJlcnNbdHJhY2tJZF0uZW52aXJvbm1lbnQuc2NlbmVJZCA9PT0gZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQsIGAke3RyYWNrSWR9IG11c3QgdXNlIHRoZSAke2lkfSBzY2VuZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWx5ID0gbmV3IFRyYWNrRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgVHJhY2tJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5tZW1iZXJzO1xuZXhwb3J0IHR5cGUgVHJhY2tGYW1pbHlJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5mYW1pbGllcztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpcGxpZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBzcXVhZEFkZGVkOiBudW1iZXI7XG4gIG1heFNxdWFkU2l6ZTogbnVtYmVyO1xuICBtZW1iZXJzUGVyUm93OiBudW1iZXI7XG4gIG1lbWJlclJhZGl1czogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIHBpY2t1cENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHB1bHNlUmF0ZTogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb206IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibXVsdGlwbGllclwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3F1YWQgTXVsdGlwbGllclwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHNxdWFkUGx1c09uZToge1xuICAgICAgbGFiZWw6IFwiKzEgV2luZ21hdGVcIixcbiAgICAgIHNxdWFkQWRkZWQ6IDEsXG4gICAgICBtYXhTcXVhZFNpemU6IDEwLFxuICAgICAgbWVtYmVyc1BlclJvdzogNSxcbiAgICAgIG1lbWJlclJhZGl1czogNS4yNSxcbiAgICAgIHNwYWNpbmc6IDI5LFxuICAgICAgcGlja3VwQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgY29yZUNvbG9yOiBcImN5YW5cIixcbiAgICAgIHB1bHNlUmF0ZTogMi4yLFxuICAgICAgcGlja3VwU2hhcGVab29tOiAzLjEsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uc3F1YWRBZGRlZCA+IDAsIGAke2lkfSBtdXN0IGFkZCBzcXVhZCBtZW1iZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWF4U3F1YWRTaXplID49IGl0ZW0ubWVtYmVyc1BlclJvdywgYCR7aWR9IG1heCBzcXVhZCBtdXN0IGZpdCBhdCBsZWFzdCBvbmUgcm93LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWVtYmVyUmFkaXVzID4gMCAmJiBpdGVtLnNwYWNpbmcgPiBpdGVtLm1lbWJlclJhZGl1cyAqIDIsIGAke2lkfSBtZW1iZXIgZ2VvbWV0cnkgb3ZlcmxhcHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpZXJGYW1pbHkgPSBuZXcgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE11bHRpcGxpZXJJZCA9IGtleW9mIHR5cGVvZiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hpZWxkT3JiaXRlclNoYXBlID0gXCJkb3RcIiB8IFwiaGV4XCI7XG5leHBvcnQgdHlwZSBTaGllbGRNb2RlID0gXCJjaGFyZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic2hpZWxkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICBtb2RlOiBTaGllbGRNb2RlO1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqIEJhc2ljIHNoaWVsZCBzdHJlbmd0aC4gRW5lbXkgSFAgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgdmFsdWUuICovXG4gIG1heENoYXJnZXM6IG51bWJlcjtcbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IDA7XG4gIHB1c2hEaXN0YW5jZTogMDtcbiAgc2xvd011bHRpcGxpZXI6IDE7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBvcmJpdGVyU2hhcGU6IFNoaWVsZE9yYml0ZXJTaGFwZTtcbiAgb3JiaXRlckNvdW50OiBudW1iZXI7XG4gIG9yYml0ZXJTcGVlZDogbnVtYmVyO1xuICBvcmJpdGVyU2l6ZTogbnVtYmVyO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hpZWxkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaGllbGRcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGxpZ2h0R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkxpZ2h0IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiAyLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiA4LFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA0LFxuICAgICAgb3JiaXRlclNwZWVkOiAxLFxuICAgICAgb3JiaXRlclNpemU6IDQuNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiTGlnaHR3ZWlnaHQgc2hpZWxkIHdpdGggdHdvIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIHNhdGVsbGl0ZUd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJTYXRlbGxpdGUgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTAsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNixcbiAgICAgIG9yYml0ZXJTcGVlZDogMC43NSxcbiAgICAgIG9yYml0ZXJTaXplOiA0Ljc1LFxuICAgICAgYWdlbnROb3RlczogXCJCYWxhbmNlZCBzaGllbGQgd2l0aCBmb3VyIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIGhleEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJIZXggR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBtYXhDaGFyZ2VzOiA3LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMixcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJoZXhcIixcbiAgICAgIG9yYml0ZXJDb3VudDogOCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMC40NSxcbiAgICAgIG9yYml0ZXJTaXplOiA1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBzaGllbGQgd2l0aCBzZXZlbiBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzaGllbGRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiwgYCR7aWR9IG11c3QgdXNlIHRoZSBzaGFyZWQgY2hhcmdlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1heENoYXJnZXMgPiAwLCBgJHtpZH0gc3RyZW5ndGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlckNvdW50ID4gMCwgYCR7aWR9IG11c3QgaGF2ZSBvcmJpdGVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlclNwZWVkID49IDAsIGAke2lkfSBvcmJpdGVyU3BlZWQgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkRmFtaWx5ID0gbmV3IFNoaWVsZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNoaWVsZElkID0ga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEhvdyB0aGUgc3dvcmQgc2VsZWN0cyB0YXJnZXRzIGZyb20gdGhlIG5lYXJieSB0aHJlYXQgcG9vbC5cbiAqIEFsbCBtb2RlcyBhcmUgbGFuZS1hd2FyZSB2aWEgdGhlIE5lYXJieVRocmVhdFF1ZXJ5IG1vZHVsZS5cbiAqL1xuZXhwb3J0IHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlID1cbiAgfCBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIgICAvLyBjbG9zZXN0IGVuZW15IGluIHRoZSBwbGF5ZXIncyBhY3RpdmUgbGFuZVxuICB8IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiICAgIC8vIGNsb3Nlc3QgZW5lbXkgcmVnYXJkbGVzcyBvZiBsYW5lXG4gIHwgXCJmcm9udE1vc3RUaHJlYXRcIiAgICAgICAgLy8gZmFydGhlc3QtYWR2YW5jZWQgKGhpZ2hlc3QgeSkgZW5lbXkgaW4gcmFuZ2VcbiAgfCBcImNsdXN0ZXJOZWFyUGxheWVyXCI7ICAgICAvLyBwaWNrcyB1cCB0byBtYXhUYXJnZXRzIGVuZW1pZXMgd2l0aGluIHJlYWNoXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic3dvcmRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIC8qKlxuICAgKiBBdHRhY2sgcmFuZ2UgaW4gcGl4ZWxzIChhdCBzY2FsZSAxKS5cbiAgICogU3dvcmQgb25seSBzd2luZ3Mgd2hlbiBhbiBlbmVteSBlbnRlcnMgdGhpcyByYWRpdXMuXG4gICAqL1xuICByYW5nZTogbnVtYmVyO1xuICAvKipcbiAgICogQW5ndWxhciB3aWR0aCBvZiB0aGUgc2xhc2ggYXJjIGluIGRlZ3JlZXMuXG4gICAqIFdpZGVyID0gaGVhdmllciwgaGl0cyBtb3JlIGVuZW1pZXMgcGVyIHN3aW5nLlxuICAgKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogRGFtYWdlIHBlciBoaXQuICovXG4gIGRhbWFnZTogbnVtYmVyO1xuICAvKiogQ29vbGRvd24gYmV0d2VlbiBzd2luZ3MgaW4gc2Vjb25kcy4gU3dvcmRzIGRvIE5PVCBmaXJlIG9uIGEgdGltZXIgXHUyMDE0IG9ubHkgd2hlbiBhIHRhcmdldCBleGlzdHMuICovXG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICAvKiogTWF4aW11bSB0YXJnZXRzIGhpdCBwZXIgc3dpbmcuICovXG4gIG1heFRhcmdldHM6IG51bWJlcjtcbiAgLyoqIExhbmUtYXdhcmUgdGFyZ2V0IHNlbGVjdGlvbiBtb2RlLiAqL1xuICB0YXJnZXRpbmdNb2RlOiBTd29yZFRhcmdldGluZ01vZGU7XG4gIC8qKiBWaXN1YWwgc2xhc2ggYXJjIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy4gKi9cbiAgc2xhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBQcmltYXJ5IHNsYXNoIGNvbG9yLiAqL1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgLyoqIFZpc3VhbCB0aGlja25lc3MgbXVsdGlwbGllciBmb3IgdGhlIHNoYXJlZCBzd29yZCB0cmFpbC4gMS4wID0gZGVmYXVsdC4gKi9cbiAgc2xhc2hUaGlja25lc3M6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRlc2lnbiBub3Rlcy4gTm90IHVzZWQgYnkgcnVudGltZSBcdTIwMTQgZG9jdW1lbnRzIGludGVudCBmb3IgZnV0dXJlIGFnZW50cy5cbiAgICovXG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRmFtaWx5IGRlZmluaXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInN3b3JkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTd29yZFwiO1xuXG4gIC8qKlxuICAgKiBGYW1pbHktbGV2ZWwgaW1wbGVtZW50YXRpb24gbm90ZXM6XG4gICAqIC0gU3dvcmRzIGFyZSBOT1QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhleSBzd2luZyBvbmx5IHdoZW4gYSB2YWxpZCB0YXJnZXRcbiAgICogICBpcyB3aXRoaW4gcmFuZ2UgYW5kIGNvb2xkb3duIGlzIHJlYWR5LiBUaGV5IGlkbGUgc2lsZW50bHkgb3RoZXJ3aXNlLlxuICAgKiAtIE9uZSBhY3RpdmUgc3dvcmQgcGVyIHBsYXllciAoZmFtaWx5LXNjb3BlZCBleGNsdXNpdml0eSkuXG4gICAqIC0gQ2FuIGNvZXhpc3Qgd2l0aCBhbiBhY3RpdmUgR3VuIGFuZCBhbiBhY3RpdmUgU2hpZWxkIHNpbXVsdGFuZW91c2x5LlxuICAgKiAtIFRhcmdldGluZyBpcyBsYW5lLWF3YXJlIHZpYSBxdWVyeU5lYXJieVRocmVhdHMoKS5cbiAgICogLSBUaGUgc2xhc2ggYW5pbWF0aW9uIHJ1bnMgZm9yIHNsYXNoRHVyYXRpb25NcyBtaWxsaXNlY29uZHMsIHRoZW4gZmFkZXMuXG4gICAqIC0gRGFtYWdlIGlzIGFwcGxpZWQgaW1tZWRpYXRlbHkgd2hlbiB0aGUgc3dpbmcgc3RhcnRzIChub3QgYXQgYW5pbWF0aW9uIGVuZCkuXG4gICAqXG4gICAqIFByZWNlZGVuY2U6IHN3b3JkIGF0dGFja3Mgb2NjdXIgYWZ0ZXIgc2hpZWxkQmxvY2svc2hpZWxkUHVsc2UgYnV0IGJlZm9yZVxuICAgKiBzaGllbGRDb250YWN0RGFtYWdlIGFuZCBzaGllbGRBdXJhLiBTZWUgbWFpbi50cyBuZWFyUGxheWVyRWZmZWN0T3JkZXIuXG4gICAqL1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIC8qKlxuICAgICAqIEFyYyBCbGFkZSBcdTIwMTQgQ29yZSBzd29yZC4gRmFzdCwgY3VydmVkLCB0YXJnZXRzIG5lYXJlc3QgZW5lbXkgaW4gbGFuZS5cbiAgICAgKiBIaXRzIDFcdTIwMTMyIGVuZW1pZXMgZGVwZW5kaW5nIG9uIGFyYyBvdmVybGFwLiBTaG9ydCBjb29sZG93bi5cbiAgICAgKi9cbiAgICBhcmNCbGFkZToge1xuICAgICAgbGFiZWw6IFwiQXJjIEJsYWRlXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICByYW5nZTogNTIsXG4gICAgICBhcmNEZWdyZWVzOiA3MCxcbiAgICAgIGRhbWFnZTogMS41LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAwLjg1LFxuICAgICAgbWF4VGFyZ2V0czogMixcbiAgICAgIHRhcmdldGluZ01vZGU6IFwibmVhcmVzdEluQ3VycmVudExhbmVcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMTUwLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuMCxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRmFzdCBhbmQgc2hhcnAuIEN1cnZlZCBuZW9uIHNsYXNoLiAxMjBcdTIwMTMxODBtcyBmZWVsLiBGYWRpbmcgYWZ0ZXJpbWFnZS4gTGlrZSBhIHdoaXAtbGlrZSBrYXRhbmEgYXJjLlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhdmVyIFx1MjAxNCBIZWF2eSBzd29yZC4gU2xvd2VyIGJ1dCBoaXRzIG11bHRpcGxlIGNsdXN0ZXJlZCBlbmVtaWVzLlxuICAgICAqIFdpZGUgYXJjLCB0aGlja2VyIHNsYXNoLiBCZXR0ZXIgYWdhaW5zdCB0aWdodCBncm91cHMgdGhhbiBmYXN0IHNpbmdsZXMuXG4gICAgICovXG4gICAgY2xlYXZlcjoge1xuICAgICAgbGFiZWw6IFwiQ2xlYXZlclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICByYW5nZTogNTYsXG4gICAgICBhcmNEZWdyZWVzOiAxMTAsXG4gICAgICBkYW1hZ2U6IDIuOCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMS44LFxuICAgICAgbWF4VGFyZ2V0czogNCxcbiAgICAgIHRhcmdldGluZ01vZGU6IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMjIwLFxuICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS42NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgYW5kIHdpZGUuIFRoaWNrZXIgYXJjLiBTdHJvbmdlciBpbXBhY3QgZmxhc2guIEdlb21ldHJpYyBhbmQgcHJvY2VkdXJhbCBcdTIwMTQgbm90IGEgYnVsbGV0LlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBOZWVkbGUgUmFwaWVyIFx1MjAxNCBQcmVjaXNpb24gc3dvcmQuIExvbmcgcmVhY2gsIG5hcnJvdyBhcmMsIHNpbmdsZSB0YXJnZXQuXG4gICAgICogUHJpb3JpdGl6ZXMgdGhlIG1vc3QgZGFuZ2Vyb3VzIChmcm9udC1tb3N0KSBlbmVteS5cbiAgICAgKi9cbiAgICBuZWVkbGVSYXBpZXI6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZSBSYXBpZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICByYW5nZTogNzAsXG4gICAgICBhcmNEZWdyZWVzOiAzMCxcbiAgICAgIGRhbWFnZTogMi4yLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjEsXG4gICAgICBtYXhUYXJnZXRzOiAxLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJmcm9udE1vc3RUaHJlYXRcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMTMwLFxuICAgICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAwLjU1LFxuICAgICAgYWdlbnROb3RlczogXCJFbGVnYW50IGFuZCBwcmVjaXNlLiBUaGluIHN0YWJiaW5nIGxpbmUuIE5vdCBhIGd1biBzaG90IFx1MjAxNCBpdCBtdXN0IGZlZWwgbWVsZWUuIFNpbmdsZSB0YXJnZXQgcHJpb3JpdHkuXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHN3b3JkXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQucmFuZ2UgPiAwLCBgJHtpZH0gcmFuZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5hcmNEZWdyZWVzID4gMCAmJiBzd29yZC5hcmNEZWdyZWVzIDw9IDM2MCwgYCR7aWR9IGFyY0RlZ3JlZXMgbXVzdCBiZSBpbiAoMCwgMzYwXS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2UgPiAwLCBgJHtpZH0gZGFtYWdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuY29vbGRvd25TZWNvbmRzID4gMCwgYCR7aWR9IGNvb2xkb3duU2Vjb25kcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLm1heFRhcmdldHMgPj0gMSwgYCR7aWR9IG1heFRhcmdldHMgbXVzdCBiZSBhdCBsZWFzdCAxLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoRHVyYXRpb25NcyA+IDAsIGAke2lkfSBzbGFzaER1cmF0aW9uTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaFRoaWNrbmVzcyA+IDAsIGAke2lkfSBzbGFzaFRoaWNrbmVzcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzd29yZEZhbWlseSA9IG5ldyBTd29yZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFN3b3JkSWQgPSBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycztcbiIsICJleHBvcnQgaW50ZXJmYWNlIFNxdWFkSW5wdXRDYWxsYmFja3Mge1xuICBsYW5lKCk6IDAgfCAxO1xuICBzZXRMYW5lKGxhbmU6IDAgfCAxKTogdm9pZDtcbiAgc2V0QWltKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuICByZWxlYXNlQWltKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3F1YWRJbnB1dChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgam95c3RpY2s6IHN0cmluZyxcbiAgY2FsbGJhY2tzOiBTcXVhZElucHV0Q2FsbGJhY2tzLFxuKTogdm9pZCB7XG4gIGxldCBwb2ludGVySWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBsZXQgcG9pbnRlclN0YXJ0ZWRYID0gMDtcbiAgbGV0IHBvaW50ZXJNb3ZlZCA9IGZhbHNlO1xuICBjb25zdCBhcHBseVBvaW50ZXIgPSAoY2xpZW50WDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYm91bmRzID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xuICAgIGNvbnN0IGxhbmU6IDAgfCAxID0gbm9ybWFsaXplZCA8IC41ID8gMCA6IDE7XG4gICAgaWYgKGxhbmUgIT09IGNhbGxiYWNrcy5sYW5lKCkpIGNhbGxiYWNrcy5zZXRMYW5lKGxhbmUpO1xuICAgIGNvbnN0IGxhbmVTdGFydCA9IGxhbmUgPT09IDAgPyAwIDogLjU7XG4gICAgY29uc3Qgd2l0aGluTGFuZSA9IChub3JtYWxpemVkIC0gbGFuZVN0YXJ0KSAvIC41O1xuICAgIGNhbGxiYWNrcy5zZXRBaW0oKHdpdGhpbkxhbmUgLSAuNSkgKiAyKTtcbiAgfTtcbiAgYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiYVwiIHx8IGV2ZW50LmtleSA9PT0gXCJBXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSBjYWxsYmFja3Muc2V0TGFuZSgwKTtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcImRcIiB8fCBldmVudC5rZXkgPT09IFwiRFwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIGNhbGxiYWNrcy5zZXRMYW5lKDEpO1xuICB9KTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KGpveXN0aWNrKSB8fCB0YXJnZXQuY2xvc2VzdChcImJ1dHRvbixpbnB1dCxzZWxlY3QsYVwiKSkgcmV0dXJuO1xuICAgIHBvaW50ZXJJZCA9IGV2ZW50LnBvaW50ZXJJZDtcbiAgICBwb2ludGVyU3RhcnRlZFggPSBldmVudC5jbGllbnRYO1xuICAgIHBvaW50ZXJNb3ZlZCA9IGZhbHNlO1xuICAgIGNvbnRhaW5lci5zZXRQb2ludGVyQ2FwdHVyZT8uKHBvaW50ZXJJZCk7XG4gICAgYXBwbHlQb2ludGVyKGV2ZW50LmNsaWVudFgpO1xuICB9KTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnBvaW50ZXJJZCAhPT0gcG9pbnRlcklkKSByZXR1cm47XG4gICAgcG9pbnRlck1vdmVkIHx8PSBNYXRoLmFicyhldmVudC5jbGllbnRYIC0gcG9pbnRlclN0YXJ0ZWRYKSA+IDM7XG4gICAgYXBwbHlQb2ludGVyKGV2ZW50LmNsaWVudFgpO1xuICB9KTtcbiAgY29uc3QgZW5kUG9pbnRlciA9IChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LnBvaW50ZXJJZCAhPT0gcG9pbnRlcklkKSByZXR1cm47XG4gICAgaWYgKCFwb2ludGVyTW92ZWQpIGFwcGx5UG9pbnRlcihldmVudC5jbGllbnRYKTtcbiAgICBwb2ludGVySWQgPSBudWxsO1xuICAgIGNhbGxiYWNrcy5yZWxlYXNlQWltKCk7XG4gIH07XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGVuZFBvaW50ZXIpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgZW5kUG9pbnRlcik7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibG9zdHBvaW50ZXJjYXB0dXJlXCIsICgpID0+IHtcbiAgICBwb2ludGVySWQgPSBudWxsO1xuICAgIGNhbGxiYWNrcy5yZWxlYXNlQWltKCk7XG4gIH0pO1xuICBpZiAobWF0Y2hNZWRpYShcIihwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KGpveXN0aWNrKTtcbiAgICBjb25zdCBrbm9iID0gZWxlbWVudD8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIuc3RpY2sta25vYlwiKTtcbiAgICBsZXQgam95c3RpY2tQb2ludGVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBhcHBseUpveXN0aWNrID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICAgICAgY29uc3QgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHJhZGl1cyA9IGJvdW5kcy53aWR0aCAvIDI7XG4gICAgICBjb25zdCByYXcgPSAoZXZlbnQuY2xpZW50WCAtIChib3VuZHMubGVmdCArIHJhZGl1cykpIC8gcmFkaXVzO1xuICAgICAgY29uc3QgeCA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCByYXcpKTtcbiAgICAgIGlmIChrbm9iKSBrbm9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoY2FsYygtNTAlICsgJHt4ICogcmFkaXVzICogLjYyfXB4KSwtNTAlKWA7XG4gICAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLmFicyh4KTtcbiAgICAgIGlmIChtYWduaXR1ZGUgPj0gLjk1KSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZDogMCB8IDEgPSB4IDwgMCA/IDAgOiAxO1xuICAgICAgICBpZiAocmVxdWVzdGVkICE9PSBjYWxsYmFja3MubGFuZSgpKSBjYWxsYmFja3Muc2V0TGFuZShyZXF1ZXN0ZWQpO1xuICAgICAgICBjYWxsYmFja3Muc2V0QWltKDApO1xuICAgICAgfSBlbHNlIGlmIChtYWduaXR1ZGUgPD0gLjUpIGNhbGxiYWNrcy5zZXRBaW0oeCAvIC41KTtcbiAgICAgIGVsc2UgY2FsbGJhY2tzLnNldEFpbShNYXRoLnNpZ24oeCkpO1xuICAgIH07XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgam95c3RpY2tQb2ludGVyID0gZXZlbnQucG9pbnRlcklkO1xuICAgICAgZWxlbWVudC5zZXRQb2ludGVyQ2FwdHVyZShldmVudC5wb2ludGVySWQpO1xuICAgICAgYXBwbHlKb3lzdGljayhldmVudCk7XG4gICAgfSk7XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5wb2ludGVySWQgPT09IGpveXN0aWNrUG9pbnRlcikgYXBwbHlKb3lzdGljayhldmVudCk7XG4gICAgfSk7XG4gICAgY29uc3QgZW5kSm95c3RpY2sgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnBvaW50ZXJJZCAhPT0gam95c3RpY2tQb2ludGVyKSByZXR1cm47XG4gICAgICBqb3lzdGlja1BvaW50ZXIgPSBudWxsO1xuICAgICAgaWYgKGtub2IpIGtub2Iuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwtNTAlKVwiO1xuICAgICAgY2FsbGJhY2tzLnJlbGVhc2VBaW0oKTtcbiAgICB9O1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgZW5kSm95c3RpY2spO1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGVuZEpveXN0aWNrKTtcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQXV0b0FpbVRhcmdldCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9BaW1Db250cm9sU3RhdGUge1xuICBtYW51YWwgPSBmYWxzZTtcblxuICBsYW5lU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgLy8gTGFuZSBjaGFuZ2VzIGFyZSBuYXZpZ2F0aW9uLCBub3QgcGVyc2lzdGVudCBtYW51YWwgYWltaW5nLlxuICB9XG5cbiAgYWltQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gIH1cblxuICBhaW1SZWxlYXNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YWQtY2VudGVyIGFpbSBvZmZzZXQgKHJlbGF0aXZlIHRvIGxhbmVDZW50ZXIpIHRoYXQgYmVzdCBhbGlnbnNcbiAqIG9uZSBvZiB0aGUgc3F1YWQncyBmcm9udC1yb3cgY29sdW1ucyB0byB0aGUgbmVhcmVzdCBlbmVteS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0cyAgICAgICAgIEFsbCBsaXZlIChub24tZHlpbmcpIGVuZW1pZXMgaW4gdGhlIGN1cnJlbnQgbGFuZS5cbiAqIEBwYXJhbSBsYW5lQ2VudGVyICAgICAgUGl4ZWwgWCBvZiB0aGUgbGFuZSdzIGNlbnRlci5cbiAqIEBwYXJhbSBjb2x1bW5PZmZzZXRzICAgWCBvZmZzZXRzIG9mIGVhY2ggZnJvbnQtcm93IGNvbHVtbiByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuXG4gKiBAcGFyYW0gY3VycmVudE9mZnNldCAgIEN1cnJlbnQgc3F1YWQgYWltIG9mZnNldCAoc3F1YWQgY2VudGVyID0gbGFuZUNlbnRlciArIGN1cnJlbnRPZmZzZXQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QXV0b0FpbU9mZnNldChcbiAgdGFyZ2V0czogcmVhZG9ubHkgQXV0b0FpbVRhcmdldFtdLFxuICBsYW5lQ2VudGVyOiBudW1iZXIsXG4gIGNvbHVtbk9mZnNldHM6IHJlYWRvbmx5IG51bWJlcltdLFxuICBjdXJyZW50T2Zmc2V0ID0gMCxcbik6IG51bWJlciB7XG4gIGlmICghdGFyZ2V0cy5sZW5ndGgpIHJldHVybiAwO1xuXG4gIC8vIElkZW50aWZ5IHRoZSBmcm9udCByb3c6IGdyb3VwIHRhcmdldHMgYnkgcm93SWQgKG9yIHRyZWF0IHVuZ3JvdXBlZCB0YXJnZXRzIGFzIGEgc2luZ2xlIHJvdykuXG4gIGNvbnN0IGV4cGxpY2l0Um93cyA9IG5ldyBNYXA8bnVtYmVyLCBBdXRvQWltVGFyZ2V0W10+KCk7XG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0LnJvd0lkID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJvdyA9IGV4cGxpY2l0Um93cy5nZXQodGFyZ2V0LnJvd0lkKSA/PyBbXTtcbiAgICByb3cucHVzaCh0YXJnZXQpO1xuICAgIGV4cGxpY2l0Um93cy5zZXQodGFyZ2V0LnJvd0lkLCByb3cpO1xuICB9XG4gIGNvbnN0IGZyb250Um93ID0gZXhwbGljaXRSb3dzLnNpemVcbiAgICA/IFsuLi5leHBsaWNpdFJvd3MudmFsdWVzKCldLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PlxuICAgICAgICBNYXRoLm1heCguLi5yaWdodC5tYXAodCA9PiB0LnkpKSAtIE1hdGgubWF4KC4uLmxlZnQubWFwKHQgPT4gdC55KSkpWzBdXG4gICAgOiB0YXJnZXRzLmZpbHRlcih0ID0+IE1hdGguYWJzKHQueSAtIE1hdGgubWF4KC4uLnRhcmdldHMubWFwKGMgPT4gYy55KSkpIDwgMyk7XG5cbiAgLy8gRm9yIGVhY2ggZW5lbXkgaW4gdGhlIGZyb250IHJvdyBcdTAwRDcgZWFjaCBzcXVhZCBjb2x1bW4sIGNvbXB1dGUgdGhlIHNxdWFkLWNlbnRlclxuICAvLyBvZmZzZXQgdGhhdCB3b3VsZCBwbGFjZSB0aGF0IGNvbHVtbiBleGFjdGx5IG9uIHRoYXQgZW5lbXkncyBYLlxuICAvLyBQaWNrIHRoZSAoZW5lbXksIGNvbHVtbikgcGFpciB3aG9zZSByZXF1aXJlZCBvZmZzZXQgaXMgY2xvc2VzdCB0byB0aGUgY3VycmVudFxuICAvLyBvZmZzZXQgXHUyMDE0IG1pbmltaXNpbmcgdGhlIGFpbSBtb3ZlbWVudCBuZWVkZWQgd2hpbGUgZ3VhcmFudGVlaW5nIGEgaGl0LlxuICBjb25zdCBjb2xzID0gY29sdW1uT2Zmc2V0cy5sZW5ndGggPiAwID8gY29sdW1uT2Zmc2V0cyA6IFswXTtcbiAgbGV0IGJlc3RPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IGVuZW15IG9mIGZyb250Um93KSB7XG4gICAgZm9yIChjb25zdCBjb2xPZmZzZXQgb2YgY29scykge1xuICAgICAgLy8gc3F1YWRDZW50ZXIgPSBsYW5lQ2VudGVyICsgYWltT2Zmc2V0IFx1MjE5MiBjb2x1bW4gbGFuZHMgYXQgbGFuZUNlbnRlciArIGFpbU9mZnNldCArIGNvbE9mZnNldFxuICAgICAgLy8gV2Ugd2FudCB0aGF0IHRvIGVxdWFsIGVuZW15LnggXHUyMTkyIGFpbU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0XG4gICAgICBjb25zdCBjYW5kaWRhdGVPZmZzZXQgPSBlbmVteS54IC0gbGFuZUNlbnRlciAtIGNvbE9mZnNldDtcbiAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhjYW5kaWRhdGVPZmZzZXQgLSBjdXJyZW50T2Zmc2V0KTtcbiAgICAgIGlmIChkaXN0IDwgYmVzdERpc3QpIHtcbiAgICAgICAgYmVzdERpc3QgPSBkaXN0O1xuICAgICAgICBiZXN0T2Zmc2V0ID0gY2FuZGlkYXRlT2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiZXN0T2Zmc2V0O1xufVxuIiwgImltcG9ydCB7XG4gIE5lb25Qcm9qZWN0aWxlLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxuICB0eXBlIE5lb25Qcm9qZWN0aWxlU2hhcGUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUge1xuICBHdW5MZXZlbCxcbiAgR3VuTWVtYmVyLFxuICBJbXBhY3RFZmZlY3QsXG4gIE11enpsZUVmZmVjdCxcbiAgUHJvamVjdGlsZVNoYXBlLFxufSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1blByb2plY3RpbGUge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2eDogbnVtYmVyO1xuICB2eTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHBpZXJjZVJlbWFpbmluZzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB0cmFpbENvbG9yOiBzdHJpbmc7XG4gIGNvcmVDb2xvcjogc3RyaW5nO1xuICBhc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBzaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXI6IGJvb2xlYW47XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEVuZW15SWRzOiBTZXQ8bnVtYmVyPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5FZmZlY3Qge1xuICBraW5kOiBcIm11enpsZVwiIHwgXCJpbXBhY3RcIiB8IFwiZGVhdGhcIjtcbiAgc3R5bGU6IE11enpsZUVmZmVjdCB8IEltcGFjdEVmZmVjdCB8IFwiZGVhdGhCbG9vbVwiO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I6IHN0cmluZztcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGV4cGlyZXNBdDogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBzZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFNjaGVkdWxlZFZvbGxleSB7XG4gIGZpcmVzQXQ6IG51bWJlcjtcbiAgZ3VuOiBHdW5NZW1iZXI7XG4gIGxldmVsOiBHdW5MZXZlbDtcbiAgbGFuZTogbnVtYmVyO1xuICBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbiAgc2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEd1blNpbXVsYXRpb24ge1xuICByZWFkb25seSBwcm9qZWN0aWxlczogR3VuUHJvamVjdGlsZVtdID0gW107XG4gIHJlYWRvbmx5IGVmZmVjdHM6IEd1bkVmZmVjdFtdID0gW107XG4gIHByaXZhdGUgc2NoZWR1bGVkVm9sbGV5czogU2NoZWR1bGVkVm9sbGV5W10gPSBbXTtcbiAgcHJpdmF0ZSBzZXF1ZW5jZSA9IDA7XG4gIHByaXZhdGUgc2hvdFNlcXVlbmNlID0gMDtcblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5lZmZlY3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBmaXJlKGd1bjogR3VuTWVtYmVyLCBsZXZlbDogR3VuTGV2ZWwsIGxhbmU6IG51bWJlciwgb3JpZ2luczogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIG5vdzogbnVtYmVyLCBzY2FsZSA9IDEpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBidXJzdEluZGV4ID0gMDsgYnVyc3RJbmRleCA8IGxldmVsLmJ1cnN0Q291bnQ7IGJ1cnN0SW5kZXgrKykge1xuICAgICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzLnB1c2goe1xuICAgICAgICBmaXJlc0F0OiBub3cgKyBidXJzdEluZGV4ICogbGV2ZWwuYnVyc3RJbnRlcnZhbE1zLFxuICAgICAgICBndW4sIGxldmVsLCBsYW5lLCBvcmlnaW5zOiBvcmlnaW5zLm1hcChvcmlnaW4gPT4gKHsgLi4ub3JpZ2luIH0pKSwgc2NhbGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaXJpbmcobm93OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBmaXJlZCA9IDA7XG4gICAgY29uc3QgZHVlID0gdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmZpbHRlcih2b2xsZXkgPT4gdm9sbGV5LmZpcmVzQXQgPD0gbm93KTtcbiAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMgPSB0aGlzLnNjaGVkdWxlZFZvbGxleXMuZmlsdGVyKHZvbGxleSA9PiB2b2xsZXkuZmlyZXNBdCA+IG5vdyk7XG4gICAgZm9yIChjb25zdCB2b2xsZXkgb2YgZHVlKSB7XG4gICAgICB0aGlzLnNwYXduVm9sbGV5KHZvbGxleSwgbm93KTtcbiAgICAgIGZpcmVkKys7XG4gICAgfVxuICAgIHJldHVybiBmaXJlZDtcbiAgfVxuXG4gIHVwZGF0ZVByb2plY3RpbGVzKFxuICAgIGRlbHRhOiBudW1iZXIsXG4gICAgbm93OiBudW1iZXIsXG4gICAgdGFyZ2V0czogcmVhZG9ubHkgR3VuVGFyZ2V0W10sXG4gICAgYm91bmRzOiB7IHRvcDogbnVtYmVyOyBsZWZ0PzogbnVtYmVyOyByaWdodD86IG51bWJlciB9LFxuICAgIG9uSGl0OiAocHJvamVjdGlsZTogR3VuUHJvamVjdGlsZSwgdGFyZ2V0OiBHdW5UYXJnZXQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJvamVjdGlsZSBvZiBbLi4udGhpcy5wcm9qZWN0aWxlc10pIHtcbiAgICAgIHByb2plY3RpbGUueCArPSBwcm9qZWN0aWxlLnZ4ICogZGVsdGE7XG4gICAgICBwcm9qZWN0aWxlLnkgKz0gcHJvamVjdGlsZS52eSAqIGRlbHRhO1xuICAgICAgaWYgKHByb2plY3RpbGUueSA8IGJvdW5kcy50b3AgfHwgcHJvamVjdGlsZS54IDwgKGJvdW5kcy5sZWZ0ID8/IC1JbmZpbml0eSkgfHwgcHJvamVjdGlsZS54ID4gKGJvdW5kcy5yaWdodCA/PyBJbmZpbml0eSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgaWYgKHRhcmdldC5keWluZyB8fCBwcm9qZWN0aWxlLmxhbmUgIT09IHRhcmdldC5sYW5lIHx8IHByb2plY3RpbGUuaGl0RW5lbXlJZHMuaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkeCA9IHByb2plY3RpbGUueCAtIHRhcmdldC54O1xuICAgICAgICBjb25zdCBkeSA9IHByb2plY3RpbGUueSAtIHRhcmdldC55O1xuICAgICAgICBjb25zdCBoaXRSYWRpdXMgPSBwcm9qZWN0aWxlLnJhZGl1cyArIHRhcmdldC5yYWRpdXM7XG4gICAgICAgIGlmIChkeCAqIGR4ICsgZHkgKiBkeSA+IGhpdFJhZGl1cyAqIGhpdFJhZGl1cykgY29udGludWU7XG4gICAgICAgIHByb2plY3RpbGUuaGl0RW5lbXlJZHMuYWRkKHRhcmdldC5pZCk7XG4gICAgICAgIHRhcmdldC5oZWFsdGggLT0gcHJvamVjdGlsZS5kYW1hZ2U7XG4gICAgICAgIHRhcmdldC55IC09IHByb2plY3RpbGUua25vY2tiYWNrO1xuICAgICAgICB0aGlzLmVmZmVjdHMucHVzaCh7XG4gICAgICAgICAga2luZDogXCJpbXBhY3RcIixcbiAgICAgICAgICBzdHlsZTogcHJvamVjdGlsZS5pbXBhY3RFZmZlY3QsXG4gICAgICAgICAgeDogcHJvamVjdGlsZS54LCB5OiBwcm9qZWN0aWxlLnksXG4gICAgICAgICAgY29sb3I6IHByb2plY3RpbGUuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBwcm9qZWN0aWxlLnRyYWlsQ29sb3IsXG4gICAgICAgICAgcmFkaXVzOiBwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUuaGl0Rmxhc2hTY2FsZSAqIDQsXG4gICAgICAgICAgZXhwaXJlc0F0OiBub3cgKyBwcm9qZWN0aWxlLmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgZHVyYXRpb246IHByb2plY3RpbGUuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICBzZWVkOiBwcm9qZWN0aWxlLmlkLFxuICAgICAgICB9KTtcbiAgICAgICAgb25IaXQocHJvamVjdGlsZSwgdGFyZ2V0KTtcbiAgICAgICAgaWYgKHByb2plY3RpbGUucGllcmNlUmVtYWluaW5nID4gMCkgcHJvamVjdGlsZS5waWVyY2VSZW1haW5pbmctLTtcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZSk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0aWxlcy5pbmNsdWRlcyhwcm9qZWN0aWxlKSkgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgZWZmZWN0IG9mIFsuLi50aGlzLmVmZmVjdHNdKSB7XG4gICAgICBpZiAoZWZmZWN0LmV4cGlyZXNBdCA8PSBub3cpIHRoaXMuZWZmZWN0cy5zcGxpY2UodGhpcy5lZmZlY3RzLmluZGV4T2YoZWZmZWN0KSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJvamVjdGlsZVByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aWxlcy5mbGF0TWFwKHByb2plY3RpbGUgPT4gbmV3IE5lb25Qcm9qZWN0aWxlKHtcbiAgICAgIHg6IHByb2plY3RpbGUueCwgeTogcHJvamVjdGlsZS55LFxuICAgICAgdmVsb2NpdHlYOiBwcm9qZWN0aWxlLnZ4LCB2ZWxvY2l0eVk6IHByb2plY3RpbGUudnksXG4gICAgICByYWRpdXM6IHByb2plY3RpbGUucmFkaXVzLFxuICAgICAgbGVuZ3RoOiBwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUuYXNwZWN0LFxuICAgICAgdHJhaWxMZW5ndGg6IHByb2plY3RpbGUudHJhaWxMZW5ndGgsXG4gICAgICB0cmFpbFdpZHRoOiBNYXRoLm1heChwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUudHJhaWxXaWR0aFNjYWxlLCAxLjEpLFxuICAgICAgY29sb3I6IHByb2plY3RpbGUuY29sb3IsXG4gICAgICB0cmFpbENvbG9yOiBwcm9qZWN0aWxlLnRyYWlsQ29sb3IsXG4gICAgICBjb3JlQ29sb3I6IHByb2plY3RpbGUuY29yZUNvbG9yLFxuICAgICAgc2hhcGU6IHByb2plY3RpbGUuc2hhcGUgYXMgTmVvblByb2plY3RpbGVTaGFwZSxcbiAgICAgIGludGVuc2l0eTogcHJvamVjdGlsZS52aXN1YWxJbnRlbnNpdHkgKiAocHJvamVjdGlsZS50cmFjZXIgPyAxLjM1IDogMSksXG4gICAgICBnbG93OiBwcm9qZWN0aWxlLnRyYWNlciA/IDEuNCA6IC43MixcbiAgICB9KS5wcmltaXRpdmVzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGF3blZvbGxleSh2b2xsZXk6IFNjaGVkdWxlZFZvbGxleSwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGd1biwgbGV2ZWwsIGxhbmUsIG9yaWdpbnMsIHNjYWxlIH0gPSB2b2xsZXk7XG4gICAgZm9yIChjb25zdCBvcmlnaW4gb2Ygb3JpZ2lucykge1xuICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1heCgxLCBsZXZlbC5wcm9qZWN0aWxlQ291bnQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlRGVncmVlcyA9IGNvdW50ID09PSAxID8gMCA6IChpbmRleCAvIChjb3VudCAtIDEpIC0gLjUpICogbGV2ZWwuc3ByZWFkRGVncmVlcztcbiAgICAgICAgY29uc3QgYW5nbGUgPSBhbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGxldmVsLnByb2plY3RpbGVTcGVlZCAqIHNjYWxlO1xuICAgICAgICB0aGlzLnNob3RTZXF1ZW5jZSsrO1xuICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2goe1xuICAgICAgICAgIGlkOiArK3RoaXMuc2VxdWVuY2UsIGxhbmUsXG4gICAgICAgICAgeDogb3JpZ2luLnggKyAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIGd1bi52aXN1YWxJZGVudGl0eS5ob3Jpem9udGFsSml0dGVyICogc2NhbGUsXG4gICAgICAgICAgeTogb3JpZ2luLnksXG4gICAgICAgICAgdng6IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkLFxuICAgICAgICAgIHZ5OiAtTWF0aC5jb3MoYW5nbGUpICogc3BlZWQsXG4gICAgICAgICAgcmFkaXVzOiBsZXZlbC5wcm9qZWN0aWxlUmFkaXVzICogc2NhbGUsXG4gICAgICAgICAgZGFtYWdlOiBsZXZlbC5kYW1hZ2UsXG4gICAgICAgICAgcGllcmNlUmVtYWluaW5nOiBsZXZlbC5waWVyY2UsXG4gICAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdLFxuICAgICAgICAgIHRyYWlsQ29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSxcbiAgICAgICAgICBjb3JlQ29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5jb3JlQ29sb3JdLFxuICAgICAgICAgIGFzcGVjdDogZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVBc3BlY3QsXG4gICAgICAgICAgdHJhaWxXaWR0aFNjYWxlOiBndW4udmlzdWFsSWRlbnRpdHkudHJhaWxXaWR0aFNjYWxlLFxuICAgICAgICAgIHZpc3VhbEludGVuc2l0eTogZ3VuLnZpc3VhbElkZW50aXR5LnZpc3VhbEludGVuc2l0eSxcbiAgICAgICAgICBzaGFwZTogZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVTaGFwZSxcbiAgICAgICAgICBpbXBhY3RFZmZlY3Q6IGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3RFZmZlY3QsXG4gICAgICAgICAgaW1wYWN0RHVyYXRpb25NczogZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgdHJhaWxMZW5ndGg6IGxldmVsLnRyYWlsTGVuZ3RoICogc2NhbGUsXG4gICAgICAgICAgdHJhY2VyOiBsZXZlbC50cmFjZXJFdmVyeU50aFNob3QgPiAwICYmIHRoaXMuc2hvdFNlcXVlbmNlICUgbGV2ZWwudHJhY2VyRXZlcnlOdGhTaG90ID09PSAwLFxuICAgICAgICAgIGtub2NrYmFjazogbGV2ZWwua25vY2tiYWNrICogc2NhbGUsXG4gICAgICAgICAgaGl0Rmxhc2hTY2FsZTogbGV2ZWwuaGl0Rmxhc2hTY2FsZSxcbiAgICAgICAgICBoaXRFbmVteUlkczogbmV3IFNldCgpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lZmZlY3RzLnB1c2goe1xuICAgICAga2luZDogXCJtdXp6bGVcIiwgc3R5bGU6IGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVFZmZlY3QsXG4gICAgICB4OiBvcmlnaW5zLnJlZHVjZSgoc3VtLCBvcmlnaW4pID0+IHN1bSArIG9yaWdpbi54LCAwKSAvIG9yaWdpbnMubGVuZ3RoLFxuICAgICAgeTogb3JpZ2luc1swXT8ueSA/PyAwLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSxcbiAgICAgIHJhZGl1czogMTAgKiBsZXZlbC5tdXp6bGVGbGFzaFNjYWxlICogc2NhbGUsXG4gICAgICBleHBpcmVzQXQ6IG5vdyArIGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zLFxuICAgICAgZHVyYXRpb246IGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zLFxuICAgICAgc2VlZDogdGhpcy5zaG90U2VxdWVuY2UsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZTogR3VuUHJvamVjdGlsZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0aWxlcy5pbmRleE9mKHByb2plY3RpbGUpO1xuICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLnByb2plY3RpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsICIvKipcbiAqIE5lYXJieVRocmVhdFF1ZXJ5IFx1MjAxNCBzaGFyZWQgbGFuZS1hd2FyZSBlbmVteSBxdWVyeSBmb3Igc2hpZWxkIGFuZCBzd29yZCBmYW1pbGllcy5cbiAqXG4gKiBCb3RoIHNoaWVsZHMgYW5kIHN3b3JkcyBvcGVyYXRlIG5lYXIgdGhlIHBsYXllciwgc28gdGhleSBzaGFyZSB0aGlzIG1vZHVsZVxuICogdG8gYXZvaWQgaW5kZXBlbmRlbnQsIHBvdGVudGlhbGx5IGNvbmZsaWN0aW5nIHNjYW5zLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIGludGVudGlvbmFsbHkgbWluaW1hbC4gSXQgcHJvdmlkZXMgZW5vdWdoIHN0cnVjdHVyZSB0byBiZVxuICogZnV0dXJlLWZyaWVuZGx5IChvcmlnaW5TaGFwZSBpbmRleCwgY29sdW1uLWJhbmQgYXdhcmVuZXNzKSB3aXRob3V0XG4gKiBvdmVyLWJ1aWxkaW5nLiBFeHRlbmQgd2hlbiBuZWVkZWQgXHUyMDE0IGRvIG5vdCByZWZhY3RvciBwcmVtYXR1cmVseS5cbiAqXG4gKiBOZWFyLXBsYXllciBlZmZlY3QgcHJlY2VkZW5jZSAoYXBwbGllZCBieSBtYWluLnRzKTpcbiAqICAgMS4gc2hpZWxkQmxvY2sgICAgICAgIFx1MjAxNCBjaGFyZ2UtYmFzZWQgaGl0IGFic29ycHRpb25cbiAqICAgMi4gc2hpZWxkUHVsc2UgICAgICAgIFx1MjAxNCBlbWVyZ2VuY3kgcHVzaFxuICogICAzLiBzd29yZEF0dGFjayAgICAgICAgXHUyMDE0IHN3b3JkIGZhbWlseVxuICogICA0LiBzaGllbGRDb250YWN0RGFtYWdlIFx1MjAxNCBjb250YWN0IGRhbWFnZSBvbiBzaGllbGQgZWRnZVxuICogICA1LiBzaGllbGRBdXJhICAgICAgICAgXHUyMDE0IHNsb3cvZGVidWZmIGF1cmFcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqIE1pbmltYWwgZW5lbXkgaW50ZXJmYWNlIGV4cGVjdGVkIGJ5IHRoZSB0aHJlYXQgcXVlcnkgc3lzdGVtLiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaHJlYXRUYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiAwIHwgMTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRocmVhdFF1ZXJ5T3B0aW9ucyB7XG4gIC8qKiBQbGF5ZXIvc2hpZWxkL3N3b3JkIG9yaWdpbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMuICovXG4gIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICAvKiogUGxheWVyJ3MgY3VycmVudCBsYW5lLiAqL1xuICBsYW5lOiAwIHwgMTtcbiAgLyoqIE1heCBjaXJjdWxhciBkaXN0YW5jZSB0byBpbmNsdWRlLiAqL1xuICByYW5nZTogbnVtYmVyO1xuICAvKiogV2hldGhlciB0byBhbHNvIGluY2x1ZGUgZW5lbWllcyBpbiB0aGUgYWRqYWNlbnQgbGFuZS4gRGVmYXVsdHMgdG8gZmFsc2UuICovXG4gIGluY2x1ZGVBZGphY2VudExhbmVzPzogYm9vbGVhbjtcbiAgLyoqIExpbWl0IHRoZSBudW1iZXIgb2YgcmV0dXJuZWQgdGhyZWF0cy4gRGVmYXVsdHMgdG8gdW5saW1pdGVkLiAqL1xuICBtYXhUYXJnZXRzPzogbnVtYmVyO1xuICAvKipcbiAgICogRW5lbXkgSURzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gY2xhaW1lZCBieSBhIGhpZ2hlci1wcmlvcml0eSBlZmZlY3RcbiAgICogdGhpcyBmcmFtZSBhbmQgc2hvdWxkIG5vdCBiZSBkb3VibGUtY291bnRlZC5cbiAgICogRnV0dXJlIHVzZSBcdTIwMTQgY3VycmVudGx5IGVuZW1pZXMgY2FuIGJlIGFmZmVjdGVkIGJ5IG11bHRpcGxlIHN5c3RlbXMgcGVyXG4gICAqIGZyYW1lLCBidXQgdGhpcyBzZXQgcHJvdmlkZXMgdGhlIGhvb2sgdG8gY2hhbmdlIHRoYXQuXG4gICAqL1xuICBleGNsdWRlSWRzPzogUmVhZG9ubHlTZXQ8bnVtYmVyPjtcbiAgLyoqXG4gICAqIFB1cnBvc2UgYW5ub3RhdGlvbi4gTG9nZ2VkIGluIGRldiBidWlsZHMuIE5vdCB1c2VkIGZvciBmaWx0ZXJpbmcgeWV0LlxuICAgKiBGdXR1cmU6IGNvdWxkIGRyaXZlIHBlci1mYW1pbHkgdGFyZ2V0aW5nIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgcHVycG9zZTogXCJzaGllbGRcIiB8IFwic3dvcmRcIiB8IFwiYXVyYVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lYXJieVRocmVhdCB7XG4gIHRhcmdldDogVGhyZWF0VGFyZ2V0O1xuICAvKiogRXVjbGlkZWFuIGRpc3RhbmNlIGZyb20gb3JpZ2luIHRvIGVuZW15IGNlbnRlci4gKi9cbiAgZGlzdGFuY2U6IG51bWJlcjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBRdWVyeSBmdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUmV0dXJucyBsaXZlIGVuZW1pZXMgc29ydGVkIGJ5IGRpc3RhbmNlIChuZWFyZXN0IGZpcnN0KSB0aGF0IGZhbGwgd2l0aGluXG4gKiB0aGUgZ2l2ZW4gcmFuZ2UgYW5kIGxhbmUgcG9saWN5LlxuICpcbiAqIEVuZW1pZXMgdGhhdCBhcmUgZHlpbmcgYXJlIGFsd2F5cyBleGNsdWRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5TmVhcmJ5VGhyZWF0cyhcbiAgZW5lbWllczogcmVhZG9ubHkgVGhyZWF0VGFyZ2V0W10sXG4gIG9wdHM6IFRocmVhdFF1ZXJ5T3B0aW9ucyxcbik6IE5lYXJieVRocmVhdFtdIHtcbiAgY29uc3QgeyBvcmlnaW4sIGxhbmUsIHJhbmdlLCBpbmNsdWRlQWRqYWNlbnRMYW5lcyA9IGZhbHNlLCBtYXhUYXJnZXRzLCBleGNsdWRlSWRzIH0gPSBvcHRzO1xuICBjb25zdCByYW5nZVNxID0gcmFuZ2UgKiByYW5nZTtcbiAgY29uc3QgcmVzdWx0czogTmVhcmJ5VGhyZWF0W10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHRhcmdldCBvZiBlbmVtaWVzKSB7XG4gICAgaWYgKHRhcmdldC5keWluZykgY29udGludWU7XG4gICAgaWYgKCFpbmNsdWRlQWRqYWNlbnRMYW5lcyAmJiB0YXJnZXQubGFuZSAhPT0gbGFuZSkgY29udGludWU7XG4gICAgaWYgKGV4Y2x1ZGVJZHM/Lmhhcyh0YXJnZXQuaWQpKSBjb250aW51ZTtcbiAgICBjb25zdCBkeCA9IHRhcmdldC54IC0gb3JpZ2luLng7XG4gICAgY29uc3QgZHkgPSB0YXJnZXQueSAtIG9yaWdpbi55O1xuICAgIGNvbnN0IGRpc3RTcSA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgIGlmIChkaXN0U3EgPiByYW5nZVNxKSBjb250aW51ZTtcbiAgICByZXN1bHRzLnB1c2goeyB0YXJnZXQsIGRpc3RhbmNlOiBNYXRoLnNxcnQoZGlzdFNxKSB9KTtcbiAgfVxuXG4gIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gYS5kaXN0YW5jZSAtIGIuZGlzdGFuY2UpO1xuXG4gIHJldHVybiBtYXhUYXJnZXRzICE9PSB1bmRlZmluZWQgPyByZXN1bHRzLnNsaWNlKDAsIG1heFRhcmdldHMpIDogcmVzdWx0cztcbn1cbiIsICIvKipcbiAqIFNoaWVsZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHNoaWVsZCBzdGF0ZSBhbmQgdGljayBsb2dpYy5cbiAqXG4gKiBPbmUgU2hpZWxkU3RhdGUgdHJhY2tzIHRoZSBsaXZlIHJ1bnRpbWUgc3RhdGUgZm9yIHdoYXRldmVyIHNoaWVsZCBpc1xuICogY3VycmVudGx5IGVxdWlwcGVkLiBUaGUgdGlja1NoaWVsZCgpIGZ1bmN0aW9uIGRyaXZlcyBhbGwgYmVoYXZpb3JhbCBtb2Rlc1xuICogKGNoYXJnZSwgcHVsc2UsIGNvbnRhY3QsIGF1cmEpIGFuZCByZXR1cm5zIGEgcmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICpcbiAqIERlc2lnbiBydWxlOiB0aGlzIG1vZHVsZSBkb2VzIG5vdCBtb2RpZnkgZW5lbXkgYXJyYXlzIGRpcmVjdGx5LiBJdCByZXR1cm5zXG4gKiBhIFNoaWVsZFRpY2tSZXN1bHQgdGhhdCBtYWluLnRzIGFwcGxpZXMuIFRoaXMga2VlcHMgdGhlIHNoaWVsZCBzeXN0ZW1cbiAqIHRlc3RhYmxlIGFuZCBjb21wb3NhYmxlIHdpdGggb3RoZXIgbmVhci1wbGF5ZXIgZWZmZWN0cy5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNoaWVsZElkLCBTaGllbGRNZW1iZXIgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB0eXBlIHsgTmVhcmJ5VGhyZWF0IH0gZnJvbSBcIi4vbmVhcmJ5VGhyZWF0UXVlcnlcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBY3RpdmUgcHVsc2UgZWZmZWN0ICh2aXN1YWwpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVQdWxzZUVmZmVjdCB7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMS4gRHJpdmVuIGJ5IChub3cgLSBzdGFydGVkQXQpIC8gcHVsc2VEdXJhdGlvbk1zLiAqL1xuICBwcm9ncmVzczogbnVtYmVyO1xuICAvKiogVGltZXN0YW1wIHdoZW4gdGhlIHB1bHNlIHdhcyB0cmlnZ2VyZWQuICovXG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICAvKiogRHVyYXRpb24gaW4gbXMuICovXG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIENlbnRlciB4IChzbmFwc2hvdCBvZiBwbGF5ZXIgcG9zaXRpb24gd2hlbiB0cmlnZ2VyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeS4gKi9cbiAgeTogbnVtYmVyO1xuICAvKiogTWF4aW11bSByYWRpdXMgYXQgcGVhayBleHBhbnNpb24uICovXG4gIG1heFJhZGl1czogbnVtYmVyO1xuICAvKiogQ29sb3IuICovXG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2hpZWxkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFNoaWVsZFN0YXRlIHtcbiAgc2hpZWxkSWQ6IFNoaWVsZElkO1xuICAvKiogUmVtYWluaW5nIGNoYXJnZXMgKGNoYXJnZS1iYXNlZCBzaGllbGRzKS4gKi9cbiAgY2hhcmdlczogbnVtYmVyO1xuICAvKiogU2Vjb25kcyB1bnRpbCBjb29sZG93biBjb21wbGV0ZXMuICovXG4gIGNvb2xkb3duTGVmdDogbnVtYmVyO1xuICAvKiogbXMgdGltZXN0YW1wIGFmdGVyIHdoaWNoIHRoZSBoaXQgZmxhc2ggaXMgZG9uZS4gKi9cbiAgaGl0Rmxhc2hVbnRpbDogbnVtYmVyO1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEgb2YgaGl0IGZsYXNoIGFuaW1hdGlvbiAoMSA9IGRvbmUpLiAqL1xuICBoaXRGbGFzaFByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgZXhwYW5kaW5nIHB1bHNlIHJpbmdzIChQdWxzZSBDb3JlKS4gKi9cbiAgcHVsc2VFZmZlY3RzOiBBY3RpdmVQdWxzZUVmZmVjdFtdO1xuICAvKiogRW5lbXkgaWRzIGFscmVhZHkgcmVzb2x2ZWQgYWdhaW5zdCB0aGlzIHNoaWVsZCwgcHJldmVudGluZyByZXBlYXQgZGFtYWdlIHBlciBmcmFtZS4gKi9cbiAgcmVhZG9ubHkgaW50ZXJjZXB0ZWRFbmVteUlkcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKHNoaWVsZElkOiBTaGllbGRJZCwgbWF4Q2hhcmdlczogbnVtYmVyKSB7XG4gICAgdGhpcy5zaGllbGRJZCA9IHNoaWVsZElkO1xuICAgIHRoaXMuY2hhcmdlcyA9IG1heENoYXJnZXM7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSAwO1xuICAgIHRoaXMuaGl0Rmxhc2hVbnRpbCA9IDA7XG4gICAgdGhpcy5oaXRGbGFzaFByb2dyZXNzID0gMTtcbiAgICB0aGlzLnB1bHNlRWZmZWN0cyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkQ29udGFjdFRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZENvbnRhY3RSZXN1bHQge1xuICBjb250YWN0ZWQ6IGJvb2xlYW47XG4gIGFic29yYmVkOiBib29sZWFuO1xuICBkYW1hZ2VBYnNvcmJlZDogbnVtYmVyO1xuICBlbmVteURlc3Ryb3llZDogYm9vbGVhbjtcbn1cblxuLyoqIFJlc29sdmUgb25lIGdlb21ldHJpYyBlbmVteS9zaGllbGQgY29udGFjdCBleGFjdGx5IG9uY2UgZm9yIHRoYXQgZW5lbXkuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVNoaWVsZENvbnRhY3QoXG4gIHN0YXRlOiBTaGllbGRTdGF0ZSxcbiAgc2hpZWxkOiBTaGllbGRNZW1iZXIsXG4gIHRhcmdldDogU2hpZWxkQ29udGFjdFRhcmdldCxcbiAgc2hpZWxkWDogbnVtYmVyLFxuICBzaGllbGRZOiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBzY2FsZSA9IDEsXG4pOiBTaGllbGRDb250YWN0UmVzdWx0IHtcbiAgY29uc3QgcmVzdWx0OiBTaGllbGRDb250YWN0UmVzdWx0ID0ge1xuICAgIGNvbnRhY3RlZDogZmFsc2UsXG4gICAgYWJzb3JiZWQ6IGZhbHNlLFxuICAgIGRhbWFnZUFic29yYmVkOiAwLFxuICAgIGVuZW15RGVzdHJveWVkOiBmYWxzZSxcbiAgfTtcbiAgaWYgKHRhcmdldC5keWluZyB8fCBzdGF0ZS5pbnRlcmNlcHRlZEVuZW15SWRzLmhhcyh0YXJnZXQuaWQpKSByZXR1cm4gcmVzdWx0O1xuICBjb25zdCByYWRpdXMgPSBzaGllbGQucmFkaXVzICogc2NhbGUgKyB0YXJnZXQucmFkaXVzO1xuICBjb25zdCBkeCA9IHRhcmdldC54IC0gc2hpZWxkWDtcbiAgY29uc3QgZHkgPSB0YXJnZXQueSAtIHNoaWVsZFk7XG4gIGlmIChkeCAqIGR4ICsgZHkgKiBkeSA+IHJhZGl1cyAqIHJhZGl1cykgcmV0dXJuIHJlc3VsdDtcblxuICByZXN1bHQuY29udGFjdGVkID0gdHJ1ZTtcbiAgc3RhdGUuaW50ZXJjZXB0ZWRFbmVteUlkcy5hZGQodGFyZ2V0LmlkKTtcbiAgaWYgKHN0YXRlLmNoYXJnZXMgPD0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICBjb25zdCBhYnNvcmJlZCA9IE1hdGgubWluKHN0YXRlLmNoYXJnZXMsIHRhcmdldC5oZWFsdGgpO1xuICBzdGF0ZS5jaGFyZ2VzIC09IGFic29yYmVkO1xuICB0YXJnZXQuaGVhbHRoIC09IGFic29yYmVkO1xuICBzdGF0ZS5oaXRGbGFzaFVudGlsID0gbm93ICsgMjgwO1xuICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gMDtcbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgcmVzdWx0LmFic29yYmVkID0gdHJ1ZTtcbiAgcmVzdWx0LmRhbWFnZUFic29yYmVkID0gYWJzb3JiZWQ7XG4gIHJlc3VsdC5lbmVteURlc3Ryb3llZCA9IHRhcmdldC5oZWFsdGggPD0gMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaWNrIHJlc3VsdCBcdTIwMTQgd2hhdCBtYWluLnRzIHNob3VsZCBhcHBseSB0aGlzIGZyYW1lXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRUaWNrUmVzdWx0IHtcbiAgLyoqIEVuZW15IElEcyB0aGF0IHNob3VsZCByZWNlaXZlIGNvbnRhY3REYW1hZ2UgdGhpcyBmcmFtZSAoY29udGFjdCBzaGllbGRzKS4gKi9cbiAgY29udGFjdERhbWFnZUVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIEFtb3VudCBvZiBjb250YWN0IGRhbWFnZSBwZXIgZW5lbXkuICovXG4gIGNvbnRhY3REYW1hZ2VBbW91bnQ6IG51bWJlcjtcbiAgLyoqIEVuZW15IElEcyB0aGF0IHNob3VsZCBoYXZlIHRoZWlyIHNwZWVkIG11bHRpcGxpZWQgYnkgc2xvd011bHRpcGxpZXIgKGF1cmEpLiAqL1xuICBzbG93RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogRWZmZWN0aXZlIHNsb3cgbXVsdGlwbGllciB0byBhcHBseS4gKi9cbiAgc2xvd011bHRpcGxpZXI6IG51bWJlcjtcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBzaGllbGQgYWJzb3JiZWQgYSBoaXQgdGhpcyBmcmFtZSAoY2hhcmdlIGNvbnN1bWVkKS5cbiAgICogbWFpbi50cyBzaG91bGQgTk9UIGtpbGwvZGFtYWdlIHRoZSBwbGF5ZXIgZm9yIHRoYXQgY29sbGlzaW9uLlxuICAgKi9cbiAgYWJzb3JiZWRIaXQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdG8gcHVzaCBhd2F5IGZyb20gdGhlIHBsYXllciBjZW50ZXIgKHB1bHNlIHNoaWVsZCkuXG4gICAqIG1haW4udHMgc2hvdWxkIGFkZCBwdXNoRGlzdGFuY2UgdG8gdGhlIGVuZW15J3Mgb3V0d2FyZCB2ZWxvY2l0eSBvciBwb3NpdGlvbi5cbiAgICovXG4gIHB1c2hFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBQdXNoIGRpc3RhbmNlIGluIHB4LiAqL1xuICBwdXNoRGlzdGFuY2U6IG51bWJlcjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaWNrIGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgUFVMU0VfRFVSQVRJT05fTVMgPSA2MDA7XG5cbi8qKlxuICogRHJpdmVzIHRoZSBzaGllbGQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgICBNdXRhYmxlIHNoaWVsZCBzdGF0ZSB0byB1cGRhdGUuXG4gKiBAcGFyYW0gc2hpZWxkICAgICAgSW1tdXRhYmxlIHNoaWVsZCBkZWZpbml0aW9uLlxuICogQHBhcmFtIHRocmVhdHMgICAgIE5lYXJieSB0aHJlYXRzIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkgKHJhbmdlID0gc2hpZWxkLnJhZGl1cykuXG4gKiBAcGFyYW0gcGxheWVyWCAgICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHggKGZvciBwdWxzZSBvcmlnaW4pLlxuICogQHBhcmFtIHBsYXllclkgICAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB5LlxuICogQHBhcmFtIG5vdyAgICAgICAgIEN1cnJlbnQgdGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICAgIEZyYW1lIGRlbHRhIGluIHNlY29uZHMuXG4gKiBAcmV0dXJucyAgICAgICAgICAgQWN0aW9ucyBmb3IgbWFpbi50cyB0byBhcHBseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTaGllbGQoXG4gIHN0YXRlOiBTaGllbGRTdGF0ZSxcbiAgc2hpZWxkOiBTaGllbGRNZW1iZXIsXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBwbGF5ZXJYOiBudW1iZXIsXG4gIHBsYXllclk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIGRlbHRhOiBudW1iZXIsXG4pOiBTaGllbGRUaWNrUmVzdWx0IHtcbiAgY29uc3QgcmVzdWx0OiBTaGllbGRUaWNrUmVzdWx0ID0ge1xuICAgIGNvbnRhY3REYW1hZ2VFbmVteUlkczogW10sXG4gICAgY29udGFjdERhbWFnZUFtb3VudDogMCxcbiAgICBzbG93RW5lbXlJZHM6IFtdLFxuICAgIHNsb3dNdWx0aXBsaWVyOiAxLjAsXG4gICAgYWJzb3JiZWRIaXQ6IGZhbHNlLFxuICAgIHB1c2hFbmVteUlkczogW10sXG4gICAgcHVzaERpc3RhbmNlOiAwLFxuICB9O1xuXG4gIC8vIEFkdmFuY2UgY29vbGRvd25cbiAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdCA+IDApIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWF4KDAsIHN0YXRlLmNvb2xkb3duTGVmdCAtIGRlbHRhKTtcblxuICAvLyBVcGRhdGUgcHVsc2UgcHJvZ3Jlc3NcbiAgZm9yIChjb25zdCBwdWxzZSBvZiBzdGF0ZS5wdWxzZUVmZmVjdHMpIHtcbiAgICBwdWxzZS5wcm9ncmVzcyA9IChub3cgLSBwdWxzZS5zdGFydGVkQXQpIC8gcHVsc2UuZHVyYXRpb25NcztcbiAgfVxuICBzdGF0ZS5wdWxzZUVmZmVjdHMgPSBzdGF0ZS5wdWxzZUVmZmVjdHMuZmlsdGVyKHAgPT4gcC5wcm9ncmVzcyA8IDEpO1xuXG4gIC8vIEFkdmFuY2UgaGl0IGZsYXNoXG4gIGlmIChzdGF0ZS5oaXRGbGFzaFVudGlsID4gMCkge1xuICAgIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCAobm93IC0gKHN0YXRlLmhpdEZsYXNoVW50aWwgLSAyODApKSAvIDI4MCk7XG4gIH1cblxuICAvLyBSZWZpbGwgY2hhcmdlcyB3aGVuIGNvb2xkb3duIGNvbXBsZXRlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpXG4gIGlmIChzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiAmJiBzdGF0ZS5jb29sZG93bkxlZnQgPT09IDAgJiYgc3RhdGUuY2hhcmdlcyA8IHNoaWVsZC5tYXhDaGFyZ2VzKSB7XG4gICAgc3RhdGUuY2hhcmdlcyA9IHNoaWVsZC5tYXhDaGFyZ2VzO1xuICB9XG5cbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RlOiBjb250YWN0IFx1MjAxNCBkZWFsIGRhbWFnZSB0byBlbmVtaWVzIHRvdWNoaW5nIHRoZSBzaGllbGQgZWRnZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgcmVzdWx0LmNvbnRhY3REYW1hZ2VBbW91bnQgPSBzaGllbGQuY29udGFjdERhbWFnZTtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LmNvbnRhY3REYW1hZ2VFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IGF1cmEgXHUyMDE0IHNsb3cgZW5lbWllcyBpbnNpZGUgcmFkaXVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICByZXN1bHQuc2xvd011bHRpcGxpZXIgPSBzaGllbGQuc2xvd011bHRpcGxpZXI7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5zbG93RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RlOiBwdWxzZSBcdTIwMTQgZW1pdCBwdXNoIHJpbmcgd2hlbiBhbnkgZW5lbXkgZW50ZXJzIHJhbmdlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICAvLyBUcmlnZ2VyIHB1bHNlXG4gICAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgICBjb25zdCBwdWxzZTogQWN0aXZlUHVsc2VFZmZlY3QgPSB7XG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIHN0YXJ0ZWRBdDogbm93LFxuICAgICAgZHVyYXRpb25NczogUFVMU0VfRFVSQVRJT05fTVMsXG4gICAgICB4OiBwbGF5ZXJYLFxuICAgICAgeTogcGxheWVyWSxcbiAgICAgIG1heFJhZGl1czogc2hpZWxkLnJhZGl1cyAqIDEuOCxcbiAgICAgIGNvbG9yOiBcIlwiLCAvLyBmaWxsZWQgYnkgZHJhdyBjb2RlIHdpdGggbmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXVxuICAgIH07XG4gICAgc3RhdGUucHVsc2VFZmZlY3RzLnB1c2gocHVsc2UpO1xuICAgIHJlc3VsdC5wdXNoRGlzdGFuY2UgPSBzaGllbGQucHVzaERpc3RhbmNlO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQucHVzaEVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhpdCBhYnNvcnB0aW9uIFx1MjAxNCBjYWxsZWQgYnkgbWFpbi50cyB3aGVuIGFuIGVuZW15IHdvdWxkIHRvdWNoIHRoZSBwbGF5ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYWJzb3JiIGEgaGl0IHVzaW5nIHNoaWVsZCBjaGFyZ2VzLlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBoaXQgd2FzIGFic29yYmVkIChjaGFyZ2UgY29uc3VtZWQpLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnlBYnNvcmJIaXQoc3RhdGU6IFNoaWVsZFN0YXRlLCBzaGllbGQ6IFNoaWVsZE1lbWJlciwgbm93OiBudW1iZXIpOiBib29sZWFuIHtcbiAgaWYgKHN0YXRlLmNoYXJnZXMgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICBzdGF0ZS5jaGFyZ2VzIC09IDE7XG4gIHN0YXRlLmhpdEZsYXNoVW50aWwgPSBub3cgKyAyODA7XG4gIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSAwO1xuICAvLyBSZWNoYXJnZSBiZWdpbnMgYWZ0ZXIgdGhlIG1vc3QgcmVjZW50IGFic29yYmVkIGhpdC4gS2VlcGluZyB0aGUgY29vbGRvd25cbiAgLy8gYWN0aXZlIHByZXZlbnRzIHRpY2tTaGllbGQoKSBmcm9tIGltbWVkaWF0ZWx5IHJlc3RvcmluZyBhIHBhcnRpYWxseVxuICAvLyBkZXBsZXRlZCBzaGllbGQgb24gdGhlIG5leHQgZnJhbWUuXG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gIHJldHVybiB0cnVlO1xufVxuIiwgIi8qKlxuICogU3dvcmRFdmFsdWF0b3IgXHUyMDE0IHBlci1mcmFtZSBzd29yZCBzdGF0ZSBhbmQgdGljayBsb2dpYy5cbiAqXG4gKiBTd29yZHMgYXJlIE5PVCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGUgdGljayBmdW5jdGlvbiBvbmx5IHRyaWdnZXJzIGEgc3dpbmdcbiAqIHdoZW4gYSB2YWxpZCB0YXJnZXQgZXhpc3RzIGluIHJhbmdlIGFuZCB0aGUgY29vbGRvd24gaXMgcmVhZHkuIEl0IGlkbGVzIHNpbGVudGx5XG4gKiB3aGVuIG5vIHRhcmdldCBpcyBwcmVzZW50LlxuICpcbiAqIERlc2lnbiBydWxlOiBzYW1lIGFzIHNoaWVsZEV2YWx1YXRvciBcdTIwMTQgbm8gZGlyZWN0IGVuZW15IG11dGF0aW9uLiBSZXR1cm5zIGFcbiAqIFN3b3JkVGlja1Jlc3VsdCBmb3IgbWFpbi50cyB0byBhcHBseS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFN3b3JkSWQsIFN3b3JkTWVtYmVyLCBTd29yZFRhcmdldGluZ01vZGUgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBzbGFzaCBhbmltYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBkdXJhdGlvbk1zLiAqL1xuICBwcm9ncmVzczogbnVtYmVyO1xuICBzdGFydGVkQXQ6IG51bWJlcjtcbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHN3aW5nIG9jY3VycmVkKS4gKi9cbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIC8qKiBSZWFjaCBvZiB0aGUgYXJjIGluIHBpeGVscy4gKi9cbiAgcmVhY2g6IG51bWJlcjtcbiAgLyoqIEFyYyB3aWR0aCBpbiBkZWdyZWVzLiAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqIFRoaWNrbmVzcyBtdWx0aXBsaWVyLiAqL1xuICB0aGlja25lc3M6IG51bWJlcjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTd29yZCBzdGF0ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZFN0YXRlIHtcbiAgc3dvcmRJZDogU3dvcmRJZDtcbiAgLyoqIFNlY29uZHMgcmVtYWluaW5nIHVudGlsIHRoZSBzd29yZCBjYW4gc3dpbmcgYWdhaW4uICovXG4gIGNvb2xkb3duTGVmdDogbnVtYmVyO1xuICAvKiogQWN0aXZlIHNsYXNoIGFuaW1hdGlvbiwgaWYgYW55LiAqL1xuICBhY3RpdmVTbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24gfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHN3b3JkSWQ6IFN3b3JkSWQpIHtcbiAgICB0aGlzLnN3b3JkSWQgPSBzd29yZElkO1xuICAgIHRoaXMuY29vbGRvd25MZWZ0ID0gMDtcbiAgICB0aGlzLmFjdGl2ZVNsYXNoID0gbnVsbDtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgcmVzdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFRpY2tSZXN1bHQge1xuICAvKiogRW5lbXkgSURzIGhpdCBieSB0aGUgc3dpbmcgdGhpcyBmcmFtZS4gRW1wdHkgaWYgbm8gc3dpbmcgb2NjdXJyZWQuICovXG4gIGhpdEVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIERhbWFnZSB0byBhcHBseSB0byBlYWNoIGhpdCBlbmVteS4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIGEgbmV3IHNsYXNoIHdhcyB0cmlnZ2VyZWQgdGhpcyBmcmFtZSAoZm9yIGF1ZGlvLCBldGMuKS4gKi9cbiAgc3dpbmdUcmlnZ2VyZWQ6IGJvb2xlYW47XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGFyZ2V0aW5nIGhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzZWxlY3RUYXJnZXRzKFxuICB0aHJlYXRzOiByZWFkb25seSBOZWFyYnlUaHJlYXRbXSxcbiAgbW9kZTogU3dvcmRUYXJnZXRpbmdNb2RlLFxuICBtYXhUYXJnZXRzOiBudW1iZXIsXG4pOiBOZWFyYnlUaHJlYXRbXSB7XG4gIGlmICh0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiOlxuICAgIGNhc2UgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCI6XG4gICAgICAvLyBxdWVyeU5lYXJieVRocmVhdHMoKSBhbHJlYWR5IHJldHVybnMgc29ydGVkIGJ5IGRpc3RhbmNlXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJmcm9udE1vc3RUaHJlYXRcIjpcbiAgICAgIC8vIEhpZ2hlc3QgeSA9IG1vc3QgYWR2YW5jZWQgdG93YXJkIHBsYXllclxuICAgICAgcmV0dXJuIFsuLi50aHJlYXRzXS5zb3J0KChhLCBiKSA9PiBiLnRhcmdldC55IC0gYS50YXJnZXQueSkuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG5cbiAgICBjYXNlIFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjpcbiAgICAgIC8vIEFscmVhZHkgc29ydGVkIGJ5IGRpc3RhbmNlIFx1MjAxNCB0YWtlIG5lYXJlc3QgY2x1c3RlclxuICAgICAgcmV0dXJuIHRocmVhdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRocmVhdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cyk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaWNrIGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBEcml2ZXMgdGhlIHN3b3JkIGZvciBvbmUgZ2FtZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgICAgIE11dGFibGUgc3dvcmQgc3RhdGUuXG4gKiBAcGFyYW0gc3dvcmQgICAgIEltbXV0YWJsZSBzd29yZCBkZWZpbml0aW9uLlxuICogQHBhcmFtIHRocmVhdHMgICBOZWFyYnkgdGhyZWF0cyBpbiByYW5nZSBmcm9tIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpLlxuICogQHBhcmFtIHBsYXllclggICBDdXJyZW50IHBsYXllciBjZW50ZXIgeC5cbiAqIEBwYXJhbSBwbGF5ZXJZICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHkuXG4gKiBAcGFyYW0gbm93ICAgICAgIFRpbWVzdGFtcCBpbiBtcy5cbiAqIEBwYXJhbSBkZWx0YSAgICAgRnJhbWUgZGVsdGEgaW4gc2Vjb25kcy5cbiAqIEBwYXJhbSBjb2xvciAgICAgUmVzb2x2ZWQgaGV4IGNvbG9yIChmcm9tIG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU3dvcmQoXG4gIHN0YXRlOiBTd29yZFN0YXRlLFxuICBzd29yZDogU3dvcmRNZW1iZXIsXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBwbGF5ZXJYOiBudW1iZXIsXG4gIHBsYXllclk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIGRlbHRhOiBudW1iZXIsXG4gIGNvbG9yOiBzdHJpbmcsXG4pOiBTd29yZFRpY2tSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFN3b3JkVGlja1Jlc3VsdCA9IHtcbiAgICBoaXRFbmVteUlkczogW10sXG4gICAgZGFtYWdlOiAwLFxuICAgIHN3aW5nVHJpZ2dlcmVkOiBmYWxzZSxcbiAgfTtcblxuICAvLyBBZHZhbmNlIGNvb2xkb3duXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwKSBzdGF0ZS5jb29sZG93bkxlZnQgPSBNYXRoLm1heCgwLCBzdGF0ZS5jb29sZG93bkxlZnQgLSBkZWx0YSk7XG5cbiAgLy8gQWR2YW5jZSBhY3RpdmUgc2xhc2ggYW5pbWF0aW9uXG4gIGlmIChzdGF0ZS5hY3RpdmVTbGFzaCkge1xuICAgIHN0YXRlLmFjdGl2ZVNsYXNoLnByb2dyZXNzID0gKG5vdyAtIHN0YXRlLmFjdGl2ZVNsYXNoLnN0YXJ0ZWRBdCkgLyBzdGF0ZS5hY3RpdmVTbGFzaC5kdXJhdGlvbk1zO1xuICAgIGlmIChzdGF0ZS5hY3RpdmVTbGFzaC5wcm9ncmVzcyA+PSAxKSBzdGF0ZS5hY3RpdmVTbGFzaCA9IG51bGw7XG4gIH1cblxuICAvLyBTd29yZHMgb25seSBzd2luZyB3aGVuIGEgdGFyZ2V0IGV4aXN0cyBpbiByYW5nZSBBTkQgY29vbGRvd24gaXMgcmVhZHkuXG4gIC8vIFRoaXMgaXMgdGhlIGtleSBkaWZmZXJlbmNlIGZyb20gZ3Vucywgd2hpY2ggZmlyZSBvbiBhIHBlcmlvZCByZWdhcmRsZXNzLlxuICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0ID4gMCB8fCB0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBTZWxlY3QgdGFyZ2V0c1xuICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdFRhcmdldHModGhyZWF0cywgc3dvcmQudGFyZ2V0aW5nTW9kZSwgc3dvcmQubWF4VGFyZ2V0cyk7XG4gIGlmIChzZWxlY3RlZC5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgLy8gVHJpZ2dlciBzd2luZ1xuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzd29yZC5jb29sZG93blNlY29uZHM7XG4gIHJlc3VsdC5zd2luZ1RyaWdnZXJlZCA9IHRydWU7XG4gIHJlc3VsdC5kYW1hZ2UgPSBzd29yZC5kYW1hZ2U7XG4gIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiBzZWxlY3RlZCkgcmVzdWx0LmhpdEVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcblxuICAvLyBTdGFydCBzbGFzaCBhbmltYXRpb25cbiAgc3RhdGUuYWN0aXZlU2xhc2ggPSB7XG4gICAgcHJvZ3Jlc3M6IDAsXG4gICAgc3RhcnRlZEF0OiBub3csXG4gICAgZHVyYXRpb25Nczogc3dvcmQuc2xhc2hEdXJhdGlvbk1zLFxuICAgIHg6IHBsYXllclgsXG4gICAgeTogcGxheWVyWSxcbiAgICByZWFjaDogc3dvcmQucmFuZ2UgKiAwLjc1LCAvLyBBcmMgcmVhY2ggaXMgYSBmcmFjdGlvbiBvZiBkZXRlY3Rpb24gcmFuZ2VcbiAgICBhcmNEZWdyZWVzOiBzd29yZC5hcmNEZWdyZWVzLFxuICAgIGNvbG9yLFxuICAgIHRoaWNrbmVzczogc3dvcmQuc2xhc2hUaGlja25lc3MsXG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE9yYklkIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUVudHJhbmNlUHJvZmlsZSB7XG4gIGR1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xuICBzY2F0dGVyTWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBlbmVteUVudHJhbmNlUHJvZmlsZXM6IFJlY29yZDxPcmJJZCwgRW5lbXlFbnRyYW5jZVByb2ZpbGU+ID0ge1xuICBiYXNpY09yYjoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjQ4LFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC41OCxcbiAgfSxcbiAgZ2xhc3NTaGllbGQ6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC4zNCxcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAwLFxuICB9LFxuICB3aW5nZXI6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC40MixcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAuNSxcbiAgfSxcbiAgdGFuazoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjcyLFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC4zNCxcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHtcbiAgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yLFxuICB0eXBlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsXG4gIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0LFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVZpc3VhbFR5cGUgPSBPcmJJZDtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUV4aXRFbnZlbG9wZSB7XG4gIGVudHJ5U2Vjb25kczogbnVtYmVyO1xuICBlbnRyeVB1bmNoOiBudW1iZXI7XG4gIHN1c3RhaW5TZWNvbmRzOiBudW1iZXI7XG4gIHN1c3RhaW5MZXZlbDogbnVtYmVyO1xuICBmYWRlU2Vjb25kczogbnVtYmVyO1xuICBzcGFya0ludGVuc2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdENsb3VkUHJvZmlsZSBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJhZ2VcIiB8IFwiY29sb3JcIiB8IFwiY29yZUNvbG9yXCIgfCBcInhcIiB8IFwieVwiIHwgXCJzZWVkXCI+IHtcbiAgc2l6ZTogbnVtYmVyO1xuICBlbnZlbG9wZTogRW5lbXlFeGl0RW52ZWxvcGU7XG4gIGNsb3VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZDogbnVtYmVyO1xuICBhZ2U6IG51bWJlcjtcbn1cblxuY29uc3QgYmFzaWNPcmJFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICBjbG91ZDogdHJ1ZSxcbiAgc2l6ZTogMTEsXG4gIGRldGFpbDogNixcbiAgdHVyYnVsZW5jZTogMi43MixcbiAgZ2xvdzogMTEsXG4gIGNvcmVJbnRlbnNpdHk6IDEuMjUsXG4gIHJpbUludGVuc2l0eTogLjgsXG4gIG9wYWNpdHk6IC44MixcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBlbnZlbG9wZToge1xuICAgIGVudHJ5U2Vjb25kczogLjE2LFxuICAgIGVudHJ5UHVuY2g6IDIuMzMsXG4gICAgc3VzdGFpblNlY29uZHM6IC4yMSxcbiAgICBzdXN0YWluTGV2ZWw6IDEuMixcbiAgICBmYWRlU2Vjb25kczogLjI5LFxuICAgIHNwYXJrSW50ZW5zaXR5OiAxLjIxLFxuICB9LFxufTtcblxuY29uc3Qgbm9DbG91ZEV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGNsb3VkOiBmYWxzZSxcbiAgc2l6ZTogMCxcbn07XG5cbmNvbnN0IHRhbmtFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICAuLi5iYXNpY09yYkV4aXRQcm9maWxlLFxuICBzaXplOiAxNSxcbiAgZ2xvdzogMTMsXG59O1xuXG5leHBvcnQgY29uc3QgZW5lbXlFeGl0UHJvZmlsZXM6IFJlY29yZDxFbmVteVZpc3VhbFR5cGUsIEVuZW15RXhpdENsb3VkUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiBiYXNpY09yYkV4aXRQcm9maWxlLFxuICBnbGFzc1NoaWVsZDogbm9DbG91ZEV4aXRQcm9maWxlLFxuICB3aW5nZXI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHRhbms6IHRhbmtFeGl0UHJvZmlsZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXREdXJhdGlvbihlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZSk6IG51bWJlciB7XG4gIGNvbnN0IGVudmVsb3BlID0gZW5lbXlFeGl0UHJvZmlsZXNbZW5lbXlUeXBlXS5lbnZlbG9wZTtcbiAgcmV0dXJuIGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzICsgZW52ZWxvcGUuZmFkZVNlY29uZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgcmV0dXJuIHtcbiAgICBlbmVteVR5cGU6IG9wdGlvbnMuZW5lbXlUeXBlLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwLFxuICAgIGFnZTogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHMoZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sIGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGluZGV4ID0gZWZmZWN0cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWZmZWN0ID0gZWZmZWN0c1tpbmRleF07XG4gICAgZWZmZWN0LmFnZSArPSBkZWx0YVNlY29uZHM7XG4gICAgaWYgKGVmZmVjdC5hZ2UgPj0gZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSkpIGVmZmVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlFeGl0Q2xvdWQoZWZmZWN0OiBBY3RpdmVFbmVteUV4aXRFZmZlY3QpOiBOZW9uVG9wRG93bkNsb3VkQnVyc3Qge1xuICBjb25zdCBwcm9maWxlID0gZW5lbXlFeGl0UHJvZmlsZXNbZWZmZWN0LmVuZW15VHlwZV07XG4gIGlmICghcHJvZmlsZS5jbG91ZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgICAgY29yZUNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICB4OiBlZmZlY3QueCxcbiAgICAgIHk6IGVmZmVjdC55LFxuICAgICAgc2l6ZTogMCxcbiAgICAgIGRldGFpbDogMyxcbiAgICAgIHR1cmJ1bGVuY2U6IDAsXG4gICAgICBnbG93OiAwLFxuICAgICAgY29yZUludGVuc2l0eTogMCxcbiAgICAgIHJpbUludGVuc2l0eTogMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkaXNzaXBhdGlvblRpbWU6IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpLFxuICAgICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICAgIGFnZTogZWZmZWN0LmFnZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IGVudmVsb3BlID0gcHJvZmlsZS5lbnZlbG9wZTtcbiAgY29uc3QgZHVyYXRpb24gPSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKTtcbiAgY29uc3QgZW50cnlUID0gTWF0aC5taW4oMSwgZWZmZWN0LmFnZSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmVudHJ5U2Vjb25kcykpO1xuICBjb25zdCBmYWRlU3RhcnQgPSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgKyBlbnZlbG9wZS5zdXN0YWluU2Vjb25kcztcbiAgY29uc3QgZmFkZVQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZWZmZWN0LmFnZSAtIGZhZGVTdGFydCkgLyBNYXRoLm1heCguMDAxLCBlbnZlbG9wZS5mYWRlU2Vjb25kcykpKTtcbiAgY29uc3Qgc3VzdGFpbiA9IGVmZmVjdC5hZ2UgPj0gZW52ZWxvcGUuZW50cnlTZWNvbmRzICYmIGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyBlbnZlbG9wZS5zdXN0YWluTGV2ZWwgOiAxO1xuICBjb25zdCBlbnRyeUZsYXNoID0gMSArIE1hdGguc2luKGVudHJ5VCAqIE1hdGguUEkpICogZW52ZWxvcGUuZW50cnlQdW5jaDtcbiAgY29uc3QgZmFkZUVuZXJneSA9IDEgLSBmYWRlVCAqIC42MjtcbiAgY29uc3Qgc3BhcmtBY2NlbnQgPSAxICsgZmFkZVQgKiBlbnZlbG9wZS5zcGFya0ludGVuc2l0eSAqIC4yMjtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgIGNvcmVDb2xvcjogZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yKGVmZmVjdC5jb2xvciksXG4gICAgeDogZWZmZWN0LngsXG4gICAgeTogZWZmZWN0LnksXG4gICAgc2l6ZTogcHJvZmlsZS5zaXplICogKC40OCArIGVudHJ5VCAqIC41MiksXG4gICAgZGV0YWlsOiBwcm9maWxlLmRldGFpbCxcbiAgICB0dXJidWxlbmNlOiBwcm9maWxlLnR1cmJ1bGVuY2UsXG4gICAgZ2xvdzogKHByb2ZpbGUuZ2xvdyA/PyAxKSAqIGVudHJ5Rmxhc2ggKiBzdXN0YWluICogZmFkZUVuZXJneSAqIHNwYXJrQWNjZW50LFxuICAgIGNvcmVJbnRlbnNpdHk6IChwcm9maWxlLmNvcmVJbnRlbnNpdHkgPz8gMSkgKiAoMSArIGVudmVsb3BlLmVudHJ5UHVuY2ggKiAoMSAtIGVudHJ5VCkgKiAuNTUpLFxuICAgIHJpbUludGVuc2l0eTogKHByb2ZpbGUucmltSW50ZW5zaXR5ID8/IDEpICogKDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjM1KSxcbiAgICBvcGFjaXR5OiAocHJvZmlsZS5vcGFjaXR5ID8/IDEpICogKGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyAxIDogMSAtIGZhZGVUICogLjg4KSxcbiAgICBkaXNzaXBhdGlvblRpbWU6IGR1cmF0aW9uLFxuICAgIGRpc3NpcGF0aW9uQWN0aW9uOiBcInNwYXJrRmFkZVwiLFxuICAgIGRyaWZ0WDogcHJvZmlsZS5kcmlmdFggPz8gMCxcbiAgICBkcmlmdFk6IHByb2ZpbGUuZHJpZnRZID8/IDAsXG4gICAgc2VlZDogZWZmZWN0LnNlZWQsXG4gICAgYWdlOiBNYXRoLm1pbihlZmZlY3QuYWdlLCBkdXJhdGlvbiksXG4gIH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlLCBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0cmFpdFZpZXdwb3J0UG9saWN5IHtcbiAgYXNwZWN0V2lkdGg6IG51bWJlcjtcbiAgYXNwZWN0SGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclZpZXdwb3J0UG9saWN5IGV4dGVuZHMgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIHJlYWRvbmx5IG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCI7XG4gIHJlYWRvbmx5IGxvZ2ljYWxXaWR0aDogbnVtYmVyO1xuICByZWFkb25seSBsb2dpY2FsSGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyVmlld3BvcnQ6IExhbmVSdW5uZXJWaWV3cG9ydFBvbGljeSA9IHtcbiAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcbiAgYXNwZWN0V2lkdGg6IDksXG4gIGFzcGVjdEhlaWdodDogMTYsXG4gIGxvZ2ljYWxXaWR0aDogNDUwLFxuICBsb2dpY2FsSGVpZ2h0OiA4MDAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RlZFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBsYXllclk6IG51bWJlcjtcbiAgZm9jdXNYPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCh3aWR0aDogbnVtYmVyLCB0YXJnZXRYOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuICByZXR1cm4gY2VudGVyWCArICh0YXJnZXRYIC0gY2VudGVyWCkgKiAuNTU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBvcnRyYWl0U3RhZ2Uoc3RhZ2U6IEhUTUxFbGVtZW50LCBwb2xpY3k6IFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kpOiB2b2lkIHtcbiAgc3RhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCItLXN0YWdlLWFzcGVjdFwiLCBgJHtwb2xpY3kuYXNwZWN0V2lkdGh9IC8gJHtwb2xpY3kuYXNwZWN0SGVpZ2h0fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhZ2VOb3JtYWxpemVkWChzdGFnZTogSFRNTEVsZW1lbnQsIGNsaWVudFg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGJvdW5kcyA9IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGNsaWVudFggLSBib3VuZHMubGVmdCkgLyBib3VuZHMud2lkdGgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyA9IHtcbiAgaGVpZ2h0OiA2NSxcbiAgbG9va0FuZ2xlRGVncmVlczogMjcsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyMCxcbiAgem9vbTogLjIsXG4gIGhvcml6b246IC41MSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclNjZW5lKFxuICBwcmltaXRpdmVzOiByZWFkb25seSBOZW9uUHJpbWl0aXZlW10sXG4gIHNoYXBlczogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdLFxuICBjbG91ZHM6IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogUHJvamVjdGVkU2NlbmUge1xuICBjb25zdCBwcm9qZWN0UG9pbnQgPSBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpO1xuXG4gIGNvbnN0IHByb2plY3RlZFByaW1pdGl2ZXMgPSBwcmltaXRpdmVzLm1hcChwcmltaXRpdmUgPT4ge1xuICAgIGlmIChwcmltaXRpdmUuc2hhcGUgPT09IFwibGluZVwiKSB7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IHByaW1pdGl2ZS5yb3RhdGlvbiA/PyAwO1xuICAgICAgY29uc3QgaGFsZkxlbmd0aCA9IHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWCA9IC1NYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICBjb25zdCBkaXJlY3Rpb25ZID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgY29uc3Qgc3RhcnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggLSBkaXJlY3Rpb25YICogaGFsZkxlbmd0aCwgcHJpbWl0aXZlLnkgLSBkaXJlY3Rpb25ZICogaGFsZkxlbmd0aCk7XG4gICAgICBjb25zdCBlbmQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggKyBkaXJlY3Rpb25YICogaGFsZkxlbmd0aCwgcHJpbWl0aXZlLnkgKyBkaXJlY3Rpb25ZICogaGFsZkxlbmd0aCk7XG4gICAgICBjb25zdCBkeCA9IGVuZC54IC0gc3RhcnQueDtcbiAgICAgIGNvbnN0IGR5ID0gZW5kLnkgLSBzdGFydC55O1xuICAgICAgY29uc3Qgc2NhbGUgPSAoc3RhcnQuc2NhbGUgKyBlbmQuc2NhbGUpICogLjU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmltaXRpdmUsXG4gICAgICAgIHg6IChzdGFydC54ICsgZW5kLngpIC8gMixcbiAgICAgICAgeTogKHN0YXJ0LnkgKyBlbmQueSkgLyAyLFxuICAgICAgICB3aWR0aDogcHJpbWl0aXZlLndpZHRoICogc2NhbGUsXG4gICAgICAgIGhlaWdodDogTWF0aC5oeXBvdChkeCwgZHkpIC8gMixcbiAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54LCBwcmltaXRpdmUueSk7XG4gICAgY29uc3Qgd2lkdGggPSBwcmltaXRpdmUud2lkdGggKiBwb2ludC5zY2FsZTtcbiAgICBjb25zdCBoZWlnaHQgPSAocHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGgpICogcG9pbnQuc2NhbGU7XG4gICAgbGV0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uO1xuICAgIGlmIChyb3RhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBheGlzTGVuZ3RoID0gTWF0aC5tYXgocHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGgsIHByaW1pdGl2ZS53aWR0aCwgMSk7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBlbmQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggKyBkaXJlY3Rpb25YICogYXhpc0xlbmd0aCwgcHJpbWl0aXZlLnkgKyBkaXJlY3Rpb25ZICogYXhpc0xlbmd0aCk7XG4gICAgICByb3RhdGlvbiA9IE1hdGguYXRhbjIocG9pbnQueCAtIGVuZC54LCBlbmQueSAtIHBvaW50LnkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJpbWl0aXZlLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJvdGF0aW9uLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RlZFNoYXBlcyA9IHNoYXBlc1xuICAgIC5tYXAoc2hhcGUgPT4ge1xuICAgICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zaGFwZSxcbiAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgc2l6ZTogc2hhcGUuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgICAgICB6OiAoc2hhcGUueiA/PyAwKSAtIHBvaW50LmRlcHRoICogLjAwMDgsXG4gICAgICB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi56ID8/IDApIC0gKGEueiA/PyAwKSkpO1xuXG4gIGNvbnN0IHByb2plY3RlZENsb3VkcyA9IGNsb3Vkcy5tYXAoY2xvdWQgPT4ge1xuICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KGNsb3VkLngsIGNsb3VkLnkpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXM6IHByb2plY3RlZFByaW1pdGl2ZXMsIGNsb3VkczogcHJvamVjdGVkQ2xvdWRzLCBzaGFwZXM6IHByb2plY3RlZFNoYXBlcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJQb2ludChcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0ge1xuICByZXR1cm4gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3MsIHZpZXdwb3J0KSh4LCB5KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCkge1xuICBjb25zdCBjZW50ZXJYID0gdmlld3BvcnQud2lkdGggLyAyO1xuICBjb25zdCBmb2N1c1ggPSB2aWV3cG9ydC5mb2N1c1ggPz8gY2VudGVyWDtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIHJldHVybiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHdvcmxkWCA9IHggLSBmb2N1c1g7XG4gICAgY29uc3Qgd29ybGRaID0gdmlld3BvcnQucGxheWVyWSAtIHkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZTtcbiAgICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICAgIGNvbnN0IGNhbWVyYVkgPSByZWxhdGl2ZVkgKiBjb3MgKyB3b3JsZFogKiBzaW47XG4gICAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KG1pbkRlcHRoLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICAgIGNvbnN0IHNjYWxlID0gZm9jYWxMZW5ndGggLyBjYW1lcmFaO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjZW50ZXJYICsgd29ybGRYICogc2NhbGUsXG4gICAgICB5OiBob3Jpem9uWSAtIGNhbWVyYVkgKiBzY2FsZSxcbiAgICAgIHNjYWxlLFxuICAgICAgZGVwdGg6IGNhbWVyYVosXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmxkWUZvclByb2plY3RlZFkoXG4gIHNjcmVlblk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IHsgaGVpZ2h0OiBudW1iZXI7IHBsYXllclk6IG51bWJlciB9LFxuKTogbnVtYmVyIHtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICBjb25zdCBzY3JlZW5SYXRpbyA9IChob3Jpem9uWSAtIHNjcmVlblkpIC8gZm9jYWxMZW5ndGg7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gc2luIC0gc2NyZWVuUmF0aW8gKiBjb3M7XG4gIGlmIChNYXRoLmFicyhkZW5vbWluYXRvcikgPCAuMDAwMSkgcmV0dXJuIE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICBjb25zdCB3b3JsZFogPSAtcmVsYXRpdmVZICogKGNvcyArIHNjcmVlblJhdGlvICogc2luKSAvIGRlbm9taW5hdG9yO1xuICByZXR1cm4gdmlld3BvcnQucGxheWVyWSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlIC0gd29ybGRaO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgTmVvblNoYXBlQWN0b3IsXG4gIE5lb25TaGFwZURpc3Bvc2FsLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCwgdHlwZSBPcmJNZW1iZXIgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgZW5lbXlFbnRyYW5jZVByb2ZpbGVzIH0gZnJvbSBcIi4vZW5lbXlFbnRyYW5jZVZpc3VhbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUVuZW15RXhpdEVmZmVjdCwgdHlwZSBBY3RpdmVFbmVteUV4aXRFZmZlY3QgfSBmcm9tIFwiLi9lbmVteUV4aXRWaXN1YWxzXCI7XG5pbXBvcnQgeyBwcm9qZWN0SGVsaWNvcHRlclBvaW50LCB0eXBlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgdHlwZSBIZWxpY29wdGVyVmlld3BvcnQgfSBmcm9tIFwiLi92aWV3cG9ydFwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVRyYWNrSWQgPSBgZW5lbXkuJHtzdHJpbmd9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15VHJhY2tJZCA9IChlbmVteUlkOiBPcmJJZCk6IEVuZW15VHJhY2tJZCA9PlxuICBlbmVteUlkID09PSBcImJhc2ljT3JiXCIgPyBcImVuZW15LmJhc2ljXCIgOiBgZW5lbXkuJHtlbmVteUlkfWA7XG5cbmV4cG9ydCBjb25zdCBlbmVteUlkRnJvbVRyYWNrSWQgPSAoaWQ6IHN0cmluZyk6IE9yYklkIHwgbnVsbCA9PiB7XG4gIGlmIChpZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBjYW5kaWRhdGUgPSBpZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG4gIHJldHVybiBjYW5kaWRhdGUgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgT3JiSWQgOiBudWxsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGlkOiBzdHJpbmcpOiB7IGVuZW15SWQ6IE9yYklkOyBkZWZpbml0aW9uOiBPcmJNZW1iZXIgfSB8IG51bGwge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGlkKTtcbiAgcmV0dXJuIGVuZW15SWQgPyB7IGVuZW15SWQsIGRlZmluaXRpb246IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdIH0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5lbXlBY3RvcihlbmVteUlkOiBPcmJJZCk6IE5lb25TaGFwZUFjdG9yIHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdO1xuICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShkZWZpbml0aW9uLnNoYXBlSWQpO1xuICBpZiAoIXNoYXBlKSB0aHJvdyBuZXcgRXJyb3IoYEVuZW15IFwiJHtlbmVteUlkfVwiIHVzZXMgbWlzc2luZyBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7ZGVmaW5pdGlvbi5zaGFwZUlkfVwiLmApO1xuICBjb25zdCBlbnRyYW5jZSA9IGVuZW15RW50cmFuY2VQcm9maWxlc1tlbmVteUlkXTtcbiAgY29uc3QgYWN0b3IgPSBuZXcgTmVvblNoYXBlQWN0b3Ioe1xuICAgIHNoYXBlLFxuICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgZW50cmFuY2VEdXJhdGlvbjogZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLFxuICAgIGVudHJhbmNlTWFnbml0dWRlOiBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlLFxuICB9KTtcbiAgcmV0dXJuIGFjdG9yLmVudGVyKGVudHJhbmNlLmR1cmF0aW9uU2Vjb25kcywgZW50cmFuY2Uuc2NhdHRlck1hZ25pdHVkZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteURlYXRoRWZmZWN0KG9wdGlvbnM6IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWVkPzogbnVtYmVyO1xufSk6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB8IG51bGwge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbb3B0aW9ucy5lbmVteUlkXTtcbiAgaWYgKGRlZmluaXRpb24uZGVhdGhWaXN1YWwgIT09IFwiY2xvdWRcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qoe1xuICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteUlkLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3Bvc2VFbmVteUFjdG9yKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgZGVmaW5pdGlvbjogT3JiTWVtYmVyKTogdm9pZCB7XG4gIGFjdG9yLmV4cGxvZGVNYWduaXR1ZGUgPSBkZWZpbml0aW9uLmV4cGxvc2lvbk1hZ25pdHVkZTtcbiAgYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYW1hZ2VhYmxlRW5lbXkge1xuICBpZDogbnVtYmVyO1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG4gIGR5aW5nOiBib29sZWFuO1xuICBoaXRGbGFzaFVudGlsPzogbnVtYmVyO1xuICBleGl0RWZmZWN0U3Bhd25lZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlYXRFbmVteShcbiAgZW5lbXk6IERhbWFnZWFibGVFbmVteSxcbiAgZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sXG4gIGNvbG9yOiBzdHJpbmcgPSBuZW9uUGFsZXR0ZVtvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXS5iYXNlQ29sb3JdLFxuKTogT3JiTWVtYmVyIHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdO1xuICBlbmVteS5keWluZyA9IHRydWU7XG4gIGlmICghZW5lbXkuZXhpdEVmZmVjdFNwYXduZWQpIHtcbiAgICBlbmVteS5leGl0RWZmZWN0U3Bhd25lZCA9IHRydWU7XG4gICAgY29uc3QgZWZmZWN0ID0gY3JlYXRlRW5lbXlEZWF0aEVmZmVjdCh7XG4gICAgICBlbmVteUlkOiBlbmVteS5lbmVteUlkLFxuICAgICAgeDogZW5lbXkueCxcbiAgICAgIHk6IGVuZW15LnksXG4gICAgICBjb2xvcixcbiAgICAgIHNlZWQ6IGVuZW15LmlkLFxuICAgIH0pO1xuICAgIGlmIChlZmZlY3QpIGVmZmVjdHMucHVzaChlZmZlY3QpO1xuICB9XG4gIGRpc3Bvc2VFbmVteUFjdG9yKGVuZW15LmFjdG9yLCBkZWZpbml0aW9uKTtcbiAgcmV0dXJuIGRlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRW5lbXlEYW1hZ2Uob3B0aW9uczoge1xuICBlbmVteTogRGFtYWdlYWJsZUVuZW15O1xuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXTtcbiAgZGFtYWdlPzogbnVtYmVyO1xuICBpbXBhY3RNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGNvbG9yPzogc3RyaW5nO1xufSk6IHsga2lsbGVkOiBib29sZWFuOyBkZWZpbml0aW9uOiBPcmJNZW1iZXIgfSB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15LmVuZW15SWRdO1xuICBpZiAob3B0aW9ucy5kYW1hZ2UpIG9wdGlvbnMuZW5lbXkuaGVhbHRoIC09IG9wdGlvbnMuZGFtYWdlO1xuICBpZiAob3B0aW9ucy5pbXBhY3RNYWduaXR1ZGUpIHtcbiAgICBvcHRpb25zLmVuZW15LmFjdG9yLmltcGFjdCh7XG4gICAgICBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LFxuICAgICAgbWFnbml0dWRlOiBvcHRpb25zLmltcGFjdE1hZ25pdHVkZSAvIGRlZmluaXRpb24uaW1wYWN0UmVzaXN0YW5jZSxcbiAgICB9KTtcbiAgfVxuICBpZiAob3B0aW9ucy5oaXRGbGFzaFVudGlsICE9PSB1bmRlZmluZWQpIG9wdGlvbnMuZW5lbXkuaGl0Rmxhc2hVbnRpbCA9IG9wdGlvbnMuaGl0Rmxhc2hVbnRpbDtcbiAgaWYgKG9wdGlvbnMuZW5lbXkuaGVhbHRoIDw9IDApIHtcbiAgICByZXR1cm4geyBraWxsZWQ6IHRydWUsIGRlZmluaXRpb246IGRlZmVhdEVuZW15KG9wdGlvbnMuZW5lbXksIG9wdGlvbnMuZWZmZWN0cywgb3B0aW9ucy5jb2xvcikgfTtcbiAgfVxuICByZXR1cm4geyBraWxsZWQ6IGZhbHNlLCBkZWZpbml0aW9uIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUhlYWx0aEJhclByaW1pdGl2ZXMob3B0aW9uczoge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB2aXNpYmxlVGhyZXNob2xkPzogbnVtYmVyO1xufSk6IE5lb25QcmltaXRpdmVbXSB7XG4gIGNvbnN0IHRocmVzaG9sZCA9IG9wdGlvbnMudmlzaWJsZVRocmVzaG9sZCA/PyBvcmJGYW1pbHkubWVtYmVycy5iYXNpY09yYi5oZWFsdGg7XG4gIGlmIChvcHRpb25zLm1heEhlYWx0aCA8PSB0aHJlc2hvbGQpIHJldHVybiBbXTtcbiAgY29uc3QgcmF0aW8gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvcHRpb25zLmhlYWx0aCAvIG9wdGlvbnMubWF4SGVhbHRoKSk7XG4gIGNvbnN0IHkgPSBvcHRpb25zLnk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMzYsIG9wdGlvbnMud2lkdGgpO1xuICBjb25zdCBsZWZ0ID0gb3B0aW9ucy54IC0gd2lkdGggLyAyO1xuICBjb25zdCBmaWxsZWQgPSBNYXRoLm1heCgwLCB3aWR0aCAqIHJhdGlvKTtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB4OiBvcHRpb25zLngsXG4gICAgICB5LFxuICAgICAgd2lkdGg6IDguOCxcbiAgICAgIGhlaWdodDogd2lkdGggLyAyLFxuICAgICAgY29sb3I6IFwiIzE2MDgxN1wiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiIzE2MDgxN1wiLFxuICAgICAgZ2xvdzogLjA4LFxuICAgICAgaW50ZW5zaXR5OiAuNDIsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5QSSAvIDIsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBsZWZ0ICsgZmlsbGVkIC8gMixcbiAgICAgIHksXG4gICAgICB3aWR0aDogNy4yLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBmaWxsZWQpIC8gMixcbiAgICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAuNzgsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5QSSAvIDIsXG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUhlYWx0aEJhclRhcmdldCB7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKFxuICB0YXJnZXRzOiByZWFkb25seSBFbmVteUhlYWx0aEJhclRhcmdldFtdLFxuICBjYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgcmV0dXJuIHRhcmdldHMuZmxhdE1hcCh0YXJnZXQgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1t0YXJnZXQuZW5lbXlJZF07XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0SGVsaWNvcHRlclBvaW50KHRhcmdldC54LCB0YXJnZXQueSwgY2FtZXJhU2V0dGluZ3MsIHZpZXdwb3J0KTtcbiAgICBjb25zdCBwcm9qZWN0ZWRTaXplID0gdGFyZ2V0LnNpemUgKiBwb2ludC5zY2FsZTtcbiAgICBjb25zdCBzY2FsZSA9IHRhcmdldC5zY2FsZSA/PyAxO1xuICAgIHJldHVybiBlbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnkgLSBwcm9qZWN0ZWRTaXplICogLjcyIC0gMTIsXG4gICAgICB3aWR0aDogTWF0aC5tYXgocHJvamVjdGVkU2l6ZSAqIDEuMzUsIGRlZmluaXRpb24ucmFkaXVzICogNS4yICogc2NhbGUgKiBwb2ludC5zY2FsZSksXG4gICAgICBoZWFsdGg6IHRhcmdldC5oZWFsdGgsXG4gICAgICBtYXhIZWFsdGg6IHRhcmdldC5tYXhIZWFsdGgsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5iYXNlQ29sb3JdLFxuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBnZXROZW9uU2hhcGUsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblRvcERvd25TaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IFNoaWVsZE1lbWJlciwgU3dvcmRNZW1iZXIgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBBY3RpdmVTbGFzaEFuaW1hdGlvbiB9IGZyb20gXCIuL2NvbWJhdC9zd29yZEV2YWx1YXRvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuY29uc3QgZW1wdHlTY2VuZSA9ICgpOiBGYW1pbHlWaXN1YWxTY2VuZSA9PiAoeyBwcmltaXRpdmVzOiBbXSwgc2hhcGVzOiBbXSB9KTtcbmNvbnN0IHJlcXVpcmVkU2hhcGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShpZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgTmVvbkZhY3Rvcnkgc2hhcGUgXCIke2lkfVwiIGlzIHJlcXVpcmVkIGJ5IGZhbWlseSB2aXN1YWxzLmApO1xuICByZXR1cm4gc2hhcGU7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTaGllbGRNZW1iZXI7XG4gIHN0cmVuZ3RoOiBudW1iZXI7XG4gIGluaXRpYWxTdHJlbmd0aDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBoaXRQcm9ncmVzcz86IG51bWJlcjtcbiAgdmlzaWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGllbGRWaXN1YWxzKG9wdGlvbnM6IFNoaWVsZFZpc3VhbE9wdGlvbnMpOiBGYW1pbHlWaXN1YWxTY2VuZSB7XG4gIGNvbnN0IHNjZW5lID0gZW1wdHlTY2VuZSgpO1xuICBjb25zdCB7XG4gICAgZGVmaW5pdGlvbiwgeCwgeSwgbm93LFxuICAgIHNjYWxlID0gMSxcbiAgICBoaXRQcm9ncmVzcyA9IDEsXG4gICAgdmlzaWJsZSA9IHRydWUsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBzdHJlbmd0aCA9IE1hdGgubWF4KDAsIG9wdGlvbnMuc3RyZW5ndGgpO1xuICBjb25zdCBpbml0aWFsU3RyZW5ndGggPSBNYXRoLm1heCgxLCBvcHRpb25zLmluaXRpYWxTdHJlbmd0aCk7XG4gIGNvbnN0IGltcGFjdCA9IE1hdGgubWF4KDAsIDEgLSBoaXRQcm9ncmVzcyk7XG4gIGNvbnN0IGV4cGxvZGluZyA9IHN0cmVuZ3RoIDw9IDAgJiYgaGl0UHJvZ3Jlc3MgPCAxO1xuICBjb25zdCBjb2xvciA9IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdO1xuICBjb25zdCByYWRpdXMgPSBkZWZpbml0aW9uLnJhZGl1cyAqIHNjYWxlO1xuXG4gIGlmICh2aXNpYmxlIHx8IGV4cGxvZGluZykge1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic2hpZWxkLXJpbmdcIiksXG4gICAgICB4LCB5LFxuICAgICAgc2l6ZTogcmFkaXVzLFxuICAgICAgY29sb3IsXG4gICAgICBsaW5lVGhpY2tuZXNzOiAuNzIsXG4gICAgICBnbG93OiAxICsgaW1wYWN0ICogLjgsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZW5lcmd5SW50ZW5zaXR5OiAxLjE1ICsgaW1wYWN0ICogMS41LFxuICAgICAgZW5lcmd5Q292ZXJhZ2U6IC40MiArIGltcGFjdCAqIC4zLFxuICAgICAgZW5lcmd5U3BlZWQ6IDEuMTUgKyBpbXBhY3QgKiAxLjIsXG4gICAgICBlbmVyZ3lCbGVlZDogLjUgKyBpbXBhY3QgKiAuMzUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IGV4cGxvZGluZyA/IE1hdGgubWluKDEsIGhpdFByb2dyZXNzKSA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiAuOSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghdmlzaWJsZSkgcmV0dXJuIHNjZW5lO1xuICBjb25zdCBvcmJpdGVyU2hhcGUgPSByZXF1aXJlZFNoYXBlKGRlZmluaXRpb24ub3JiaXRlclNoYXBlID09PSBcImhleFwiID8gXCJoZXgtZmlnaHRlclwiIDogXCJzdGFyLWNvcmVcIik7XG4gIGNvbnN0IG9yYml0ZXJDb3VudCA9IE1hdGguY2VpbChkZWZpbml0aW9uLm9yYml0ZXJDb3VudCAqIHN0cmVuZ3RoIC8gaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgYW5nbGVTdGVwID0gTWF0aC5QSSAqIDIgLyBkZWZpbml0aW9uLm9yYml0ZXJDb3VudDtcbiAgY29uc3QgYmFzZUFuZ2xlID0gbm93IC8gMTAwMCAqIGRlZmluaXRpb24ub3JiaXRlclNwZWVkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yYml0ZXJDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSBiYXNlQW5nbGUgKyBpICogYW5nbGVTdGVwO1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiBvcmJpdGVyU2hhcGUsXG4gICAgICB4OiB4ICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgICAgeTogeSArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgIHNpemU6IGRlZmluaXRpb24ub3JiaXRlclNpemUgKiAxLjggKiBzY2FsZSxcbiAgICAgIGNvbG9yLFxuICAgICAgcm90YXRpb25aOiBhbmdsZSArIG5vdyAvIDE0MDAsXG4gICAgICBsaW5lVGhpY2tuZXNzOiAuNzIsXG4gICAgICBnbG93OiAxLFxuICAgICAgZW5lcmd5SW50ZW5zaXR5OiAxLjEsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4yNSxcbiAgICAgIGVuZXJneUJsZWVkOiAuNSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2NlbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRWaXN1YWxPcHRpb25zIHtcbiAgZGVmaW5pdGlvbjogU3dvcmRNZW1iZXI7XG4gIHNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgdmlzaWJsZT86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHN3b3JkVHJhaWwoc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uLCBzY2FsZTogbnVtYmVyKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgaWYgKHNsYXNoLnByb2dyZXNzID49IDEpIHJldHVybiBbXTtcbiAgY29uc3QgbGlmZSA9IDEgLSBzbGFzaC5wcm9ncmVzcztcbiAgY29uc3QgcmFkaXVzID0gc2xhc2gucmVhY2ggKiBzY2FsZTtcbiAgY29uc3QgaGFsZkFyYyA9IHNsYXNoLmFyY0RlZ3JlZXMgKiBNYXRoLlBJIC8gMzYwO1xuICBjb25zdCBoZWFkaW5nID0gLU1hdGguUEkgLyAyO1xuICBjb25zdCBzd2VlcCA9IHNsYXNoLnByb2dyZXNzIDwgLjYyID8gMSAtIE1hdGgucG93KDEgLSBzbGFzaC5wcm9ncmVzcyAvIC42MiwgMykgOiAxO1xuICBjb25zdCBibGFkZUFuZ2xlID0gaGVhZGluZyAtIGhhbGZBcmMgKyBzd2VlcCAqIGhhbGZBcmMgKiAyO1xuICBjb25zdCB0cmFpbExlbmd0aCA9IGhhbGZBcmMgKiAoLjU1ICsgbGlmZSAqIC43NSk7XG4gIGNvbnN0IHRoaWNrbmVzcyA9IHNsYXNoLnRoaWNrbmVzcyAqIHNjYWxlO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICBjb25zdCBhZ2UgPSBpIC8gMTA7XG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLm1heChoZWFkaW5nIC0gaGFsZkFyYywgYmxhZGVBbmdsZSAtIHRyYWlsTGVuZ3RoICogYWdlKTtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHJhZGl1cyAqICguNzIgKyBNYXRoLnNpbihhZ2UgKiBNYXRoLlBJKSAqIC4wOCk7XG4gICAgY29uc3QgZmFkZSA9IE1hdGgucG93KDEgLSBhZ2UsIDEuMzUpICogbGlmZTtcbiAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgeDogc2xhc2gueCArIE1hdGguY29zKGFuZ2xlKSAqIGRpc3RhbmNlLFxuICAgICAgeTogc2xhc2gueSArIE1hdGguc2luKGFuZ2xlKSAqIGRpc3RhbmNlLFxuICAgICAgd2lkdGg6IE1hdGgubWF4KC44LCB0aGlja25lc3MgKiAoMi40IC0gYWdlICogMS41NSkpLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAoLjI0IC0gYWdlICogLjEpLFxuICAgICAgY29sb3I6IHNsYXNoLmNvbG9yLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgZ2xvdzogMS4xNSAqIGZhZGUsXG4gICAgICBpbnRlbnNpdHk6IDEuNDUgKiBmYWRlLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IGFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBsZWFkaW5nWCA9IHNsYXNoLnggKyBNYXRoLmNvcyhibGFkZUFuZ2xlKSAqIHJhZGl1cyAqIC44MjtcbiAgY29uc3QgbGVhZGluZ1kgPSBzbGFzaC55ICsgTWF0aC5zaW4oYmxhZGVBbmdsZSkgKiByYWRpdXMgKiAuODI7XG4gIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgeDogbGVhZGluZ1gsIHk6IGxlYWRpbmdZLFxuICAgIHdpZHRoOiBNYXRoLm1heCgxLjIsIHRoaWNrbmVzcyAqIDIuOCksXG4gICAgaGVpZ2h0OiByYWRpdXMgKiAuMzIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIHNlY29uZGFyeUNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICBnbG93OiAxLjQgKiBsaWZlLFxuICAgIGludGVuc2l0eTogMS43ICogbGlmZSxcbiAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgcm90YXRpb246IGJsYWRlQW5nbGUgKyBNYXRoLlBJIC8gMixcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3ICYmIHNsYXNoLnByb2dyZXNzIDwgLjc7IGkrKykge1xuICAgIGNvbnN0IHNwcmVhZCA9IChpIC0gMykgKiAuMTM7XG4gICAgY29uc3Qgc3BhcmtMaWZlID0gbGlmZSAqICgxIC0gTWF0aC5hYnMoaSAtIDMpICogLjA4KTtcbiAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgeDogbGVhZGluZ1ggKyBNYXRoLmNvcyhibGFkZUFuZ2xlICsgc3ByZWFkKSAqIHJhZGl1cyAqICguMDQgKyBpICogLjAxMiksXG4gICAgICB5OiBsZWFkaW5nWSArIE1hdGguc2luKGJsYWRlQW5nbGUgKyBzcHJlYWQpICogcmFkaXVzICogKC4wNCArIGkgKiAuMDEyKSxcbiAgICAgIHdpZHRoOiBNYXRoLm1heCguNywgdGhpY2tuZXNzICogLjc1KSxcbiAgICAgIGhlaWdodDogcmFkaXVzICogKC4wOCArIGkgJSAzICogLjAyNSksXG4gICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICBnbG93OiAxLjEgKiBzcGFya0xpZmUsXG4gICAgICBpbnRlbnNpdHk6IDEuMjUgKiBzcGFya0xpZmUsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogYmxhZGVBbmdsZSArIHNwcmVhZCxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcHJpbWl0aXZlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3b3JkVmlzdWFscyhvcHRpb25zOiBTd29yZFZpc3VhbE9wdGlvbnMpOiBGYW1pbHlWaXN1YWxTY2VuZSB7XG4gIGNvbnN0IHNjZW5lID0gZW1wdHlTY2VuZSgpO1xuICBpZiAoIW9wdGlvbnMudmlzaWJsZSkgcmV0dXJuIHNjZW5lO1xuICBjb25zdCB7IGRlZmluaXRpb24sIHNsYXNoLCB4LCB5LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGhhbGZBcmMgPSBkZWZpbml0aW9uLmFyY0RlZ3JlZXMgKiBNYXRoLlBJIC8gMzYwO1xuICBjb25zdCBzd2VlcCA9IHNsYXNoID8gKHNsYXNoLnByb2dyZXNzIDwgLjYyID8gMSAtIE1hdGgucG93KDEgLSBzbGFzaC5wcm9ncmVzcyAvIC42MiwgMykgOiAxKSA6IC41O1xuICBjb25zdCBzd29yZEFuZ2xlID0gLU1hdGguUEkgLyAyIC0gaGFsZkFyYyArIHN3ZWVwICogaGFsZkFyYyAqIDI7XG4gIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICBzaGFwZTogcmVxdWlyZWRTaGFwZShcInNwaWtlLWxhbmNlXCIpLFxuICAgIHgsIHksXG4gICAgc2l6ZTogTWF0aC5taW4oMTcsIGRlZmluaXRpb24ucmFuZ2UgKiAuMjgpICogc2NhbGUsXG4gICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgIHJvdGF0aW9uWjogc3dvcmRBbmdsZSArIE1hdGguUEkgLyAyLFxuICAgIGxpbmVUaGlja25lc3M6IC44MixcbiAgICBnbG93OiBzbGFzaCA/IDEuMzUgOiAxLFxuICAgIGVuZXJneUludGVuc2l0eTogc2xhc2ggPyAxLjggOiAxLjE1LFxuICAgIGVuZXJneUNvdmVyYWdlOiBzbGFzaCA/IC43MiA6IC40MixcbiAgICBlbmVyZ3lTcGVlZDogc2xhc2ggPyAyLjEgOiAxLjIsXG4gICAgZW5lcmd5QmxlZWQ6IHNsYXNoID8gLjggOiAuNSxcbiAgfSk7XG4gIGlmIChzbGFzaCkgc2NlbmUucHJpbWl0aXZlcy5wdXNoKC4uLnN3b3JkVHJhaWwoc2xhc2gsIHNjYWxlKSk7XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIG5vdzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGlja3VwU2hhcGUoc2hhcGVJZDogc3RyaW5nLCBvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSB7XG4gIGNvbnN0IHsgeCwgeSwgY29sb3IsIG5vdywgc2NhbGUgPSAxIH0gPSBvcHRpb25zO1xuICByZXR1cm4ge1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKHNoYXBlSWQpLFxuICAgIHg6IHggKyBNYXRoLnNpbihub3cgLyA0MjAgKyB5ICogLjA3KSAqIDQuNSAqIHNjYWxlLFxuICAgIHksXG4gICAgc2l6ZTogMTAgKiBzY2FsZSAqICgxICsgTWF0aC5zaW4obm93IC8gNjAwICsgeSAqIC4wNSkgKiAuMDgpLFxuICAgIGNvbG9yLFxuICAgIHJvdGF0aW9uWjogbm93IC8gMTEwMCxcbiAgICBsaW5lVGhpY2tuZXNzOiAuNzYsXG4gICAgZ2xvdzogMS4wNSxcbiAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMjUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IC40OCxcbiAgICBlbmVyZ3lTcGVlZDogMS4zNSxcbiAgICBlbmVyZ3lCbGVlZDogLjU1LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic2hpZWxkLXJpbmdcIiwgb3B0aW9ucyk7XG5cbmV4cG9ydCBjb25zdCBzd29yZFBpY2t1cFZpc3VhbCA9IChvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSA9PlxuICBwaWNrdXBTaGFwZShcInNwaWtlLWxhbmNlXCIsIG9wdGlvbnMpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBIZWxpY29wdGVyVmlld3BvcnQgfSBmcm9tIFwiLi92aWV3cG9ydFwiO1xuXG5jb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbmNvbnN0IHBsYXllckZvcndhcmRSb3RhdGlvbiA9IHtcbiAgcm90YXRpb25YOiBkZWdyZWVzVG9SYWRpYW5zKC01MiksXG4gIHJvdGF0aW9uWTogZGVncmVlc1RvUmFkaWFucygtMSksXG4gIHJvdGF0aW9uWjogZGVncmVlc1RvUmFkaWFucygxKSxcbn07XG5jb25zdCBzY3JlZW5Gb3J3YXJkWWF3ID0gKGRpcmVjdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gIHJldHVybiBNYXRoLmF0YW4yKGRpcmVjdGlvbi54IC8gbGVuZ3RoLCAtZGlyZWN0aW9uLnkgLyBsZW5ndGgpO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0b3JWaXN1YWxSb2xlID1cbiAgfCBcImdyb3VuZEZvcndhcmRcIlxuICB8IFwic2NyZWVuQmlsbGJvYXJkXCJcbiAgfCBcInR1bWJsaW5nQmlsbGJvYXJkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JPcmllbnRhdGlvbkNvbnRleHQge1xuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncztcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG5vdzogbnVtYmVyO1xuICBwaGFzZT86IG51bWJlcjtcbiAgZmFjaW5nPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0b3JPcmllbnRhdGlvbihyb2xlOiBBY3RvclZpc3VhbFJvbGUsIGNvbnRleHQ6IEFjdG9yT3JpZW50YXRpb25Db250ZXh0KTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICBzd2l0Y2ggKHJvbGUpIHtcbiAgICBjYXNlIFwiZ3JvdW5kRm9yd2FyZFwiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wbGF5ZXJGb3J3YXJkUm90YXRpb24sXG4gICAgICAgIHJvdGF0aW9uWDogcGxheWVyRm9yd2FyZFJvdGF0aW9uLnJvdGF0aW9uWCArIE1hdGguc2luKGNvbnRleHQubm93IC8gNjUwICsgKGNvbnRleHQucGhhc2UgPz8gMCkpICogLjA2LFxuICAgICAgICByb3RhdGlvblk6IHBsYXllckZvcndhcmRSb3RhdGlvbi5yb3RhdGlvblkgKyAoY29udGV4dC5mYWNpbmcgPyBzY3JlZW5Gb3J3YXJkWWF3KGNvbnRleHQuZmFjaW5nKSA6IDApLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBcInR1bWJsaW5nQmlsbGJvYXJkXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3RhdGlvblk6IE1hdGguc2luKGNvbnRleHQubm93IC8gNzAwICsgKGNvbnRleHQucGhhc2UgPz8gMCkpICogLjE4LFxuICAgICAgfTtcbiAgICBjYXNlIFwic2NyZWVuQmlsbGJvYXJkXCI6XG4gICAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlbGljb3B0ZXJWaWV3cG9ydEZvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGxheWVyWTogbnVtYmVyLCBmb2N1c1g/OiBudW1iZXIpOiBIZWxpY29wdGVyVmlld3BvcnQge1xuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBwbGF5ZXJZLCBmb2N1c1ggfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwiZ3JvdW5kRm9yd2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gICAgZmFjaW5nOiB7IHg6IDAsIHk6IC0xIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInR1bWJsaW5nQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWxsYm9hcmRPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJzY3JlZW5CaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVMYW5lUnVubmVyU2NlbmUsIHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQsIHR5cGUgTmVvblByaW1pdGl2ZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG50eXBlIFNjZW5lQmFja2dyb3VuZFN0YXRlID0gXCJtaXNzaW5nXCIgfCBcImxvYWRlZFwiIHwgXCJsb2FkaW5nXCI7XG5cbmNvbnN0IHNjZW5lQmFja2dyb3VuZHMgPSBuZXcgTWFwPHN0cmluZywgU2NlbmVCYWNrZ3JvdW5kU3RhdGU+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzKFxuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHRpbWVNczogbnVtYmVyLFxuKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgcmV0dXJuIFsuLi4oY3JlYXRlTGFuZVJ1bm5lclNjZW5lKHsgc2NlbmVJZCwgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0pLnByaW1pdGl2ZXMgPz8gW10pXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmRVcmwoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiBzdHJpbmcge1xuICBjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGNvbnN0IG1hcmtlciA9IFwiL05lb25Td2FybS9cIjtcbiAgY29uc3QgbmVzdGVkSW5kZXggPSBwYXRoLmluZGV4T2YobWFya2VyKTtcbiAgaWYgKG5lc3RlZEluZGV4ID49IDApIHJldHVybiBgJHtwYXRoLnNsaWNlKDAsIG5lc3RlZEluZGV4KX0vTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG5cbiAgY29uc3QgcGFnZUluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZihcIi9OZW9uU3dhcm0uaHRtbFwiKTtcbiAgaWYgKHBhZ2VJbmRleCA+PSAwKSByZXR1cm4gYCR7cGF0aC5zbGljZSgwLCBwYWdlSW5kZXgpfS9OZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcblxuICByZXR1cm4gYE5lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHZvaWQge1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG5cbiAgY29uc3QgcGF0aCA9IGxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmRVcmwoc2NlbmVJZCk7XG4gIGNvbnN0IHN0YXRlID0gc2NlbmVCYWNrZ3JvdW5kcy5nZXQocGF0aCk7XG4gIGlmIChzdGF0ZSA9PT0gXCJsb2FkZWRcIikge1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGF0aH1cIilgO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZ3JvdW5kLWltYWdlXCIpO1xuICBpZiAoc3RhdGUpIHJldHVybjtcblxuICBzY2VuZUJhY2tncm91bmRzLnNldChwYXRoLCBcImxvYWRpbmdcIik7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICBzY2VuZUJhY2tncm91bmRzLnNldChwYXRoLCBcImxvYWRlZFwiKTtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3BhdGh9XCIpYDtcbiAgfTtcbiAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICBzY2VuZUJhY2tncm91bmRzLnNldChwYXRoLCBcIm1pc3NpbmdcIik7XG4gICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIik7XG4gIH07XG4gIGltYWdlLnNyYyA9IHBhdGg7XG59XG4iLCAiaW1wb3J0IHsgZ2V0TmVvblNoYXBlLCBOZW9uU2hhcGVBY3RvciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSwgdHlwZSBOZW9uU2hhcGVMYWJlbCwgdHlwZSBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBjb25zdCBzd2FybVNoYXBlcyA9IHtcbiAgcGxheWVyOiBnZXROZW9uU2hhcGUoXCJhcnJvdy1jbGFzc2ljXCIpISxcbiAgZW5lbXk6IGdldE5lb25TaGFwZShcImh1bnRlci1leWVcIikhLFxuICBtdWx0aXBsaWVyOiBnZXROZW9uU2hhcGUoXCJicnVpc2VyLWNyb3NzXCIpISxcbiAgZ3VuUGlja3VwOiBnZXROZW9uU2hhcGUoXCJoZXgtZmlnaHRlclwiKSEsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgcGl4ZWxzVG9TaGFwZVdvcmxkID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiAoe1xuICB4OiAoeCAvIGNhbnZhcy53aWR0aCAtIC41KSAqIChjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbiAgeTogKC41IC0geSAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxufSk7XG5cbmV4cG9ydCBjb25zdCBwaXhlbFNpemVUb1NoYXBlU2NhbGUgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcGl4ZWxzOiBudW1iZXIpID0+IHBpeGVscyAvIGNhbnZhcy5oZWlnaHQgKiAyLjU7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RvckF0UGl4ZWxzKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHBpeGVsU2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIGNvbnN0IHdvcmxkID0gcGl4ZWxzVG9TaGFwZVdvcmxkKGNhbnZhcywgeCwgeSk7XG4gIGFjdG9yLm1vdmVUbyh3b3JsZC54LCB3b3JsZC55KTtcbiAgYWN0b3Iuc2NhbGUgPSBwaXhlbFNpemVUb1NoYXBlU2NhbGUoY2FudmFzLCBwaXhlbFNpemUpO1xuICByZXR1cm4gYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKTtcbn1cblxudHlwZSBUb3BEb3duU2hhcGVPdmVycmlkZXMgPSBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiAmIFBhcnRpYWw8UGljazxOZW9uVG9wRG93blNoYXBlLCBcIndpZHRoXCIgfCBcImhlaWdodFwiPj47XG5cbmV4cG9ydCBjb25zdCBhY3RvckluVG9wRG93blNjZW5lID0gKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNpemU6IG51bWJlciwgb3ZlcnJpZGVzOiBUb3BEb3duU2hhcGVPdmVycmlkZXMgPSB7fSk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgKHsgLi4uYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKSwgeCwgeSwgc2l6ZSB9KTtcblxuZXhwb3J0IGNvbnN0IHNoYXBlTGFiZWwgPSAodGV4dDogc3RyaW5nLCBwb3NpdGlvbjogTmVvblNoYXBlTGFiZWxbXCJwb3NpdGlvblwiXSwgZm9udFNpemU6IG51bWJlciwgb2Zmc2V0ID0gNCk6IE5lb25TaGFwZUxhYmVsID0+XG4gICh7IHRleHQsIHBvc2l0aW9uLCBmb250U2l6ZSwgb2Zmc2V0LCBmb250RmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsIGZvbnRXZWlnaHQ6IDcwMCB9KTtcbiIsICJpbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNxdWFkUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIHJvdzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3F1YWRNb2RlbCB7XG4gIGxhbmU6IDAgfCAxID0gMDtcbiAgY291bnQgPSAxO1xuICBhaW1PZmZzZXQgPSAwO1xuICB4ID0gMDtcbiAgdGFyZ2V0WCA9IDA7XG4gIGxhbmVTaGlmdFN0YXJ0ZWRBdCA9IDA7XG5cbiAgYWRkKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5taW4oc3BlYy5tYXhTcXVhZFNpemUsIHRoaXMuY291bnQgKyBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgcmVtb3ZlKGFtb3VudCA9IDEpOiBudW1iZXIge1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCB0aGlzLmNvdW50IC0gYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHNldExhbmUobGFuZTogMCB8IDEsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyLCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChsYW5lICE9PSB0aGlzLmxhbmUpIHtcbiAgICAgIHRoaXMubGFuZVNoaWZ0U3RhcnRlZEF0ID0gbm93O1xuICAgICAgLy8gUmVzZXQgYWltIG9mZnNldCBzbyB0aGUgcGxheWVyIHNuYXBzIHRvIHRoZSBjb3JyZWN0IGNvbHVtbiBpbiB0aGUgbmV3IGxhbmUuXG4gICAgICB0aGlzLmFpbU9mZnNldCA9IDA7XG4gICAgfVxuICAgIHRoaXMubGFuZSA9IGxhbmU7XG4gICAgdGhpcy50YXJnZXRYID0gbGFuZUNlbnRlcihsYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgc2V0QWltKG5vcm1hbGl6ZWQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5haW1PZmZzZXQgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgbm9ybWFsaXplZCkpICogbGFuZVdpZHRoICogLjI4O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgYXV0b0FpbSh0YXJnZXRPZmZzZXQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gSGlnaCBsZXJwIGZhY3RvciAoMC44NSkgc28gYXV0by1haW0gc25hcHMgYWxtb3N0IGluc3RhbnRhbmVvdXNseSBlYWNoIGZyYW1lLlxuICAgIHRoaXMuYWltT2Zmc2V0ICs9IChNYXRoLm1heCgtbGFuZVdpZHRoICogLjI4LCBNYXRoLm1pbihsYW5lV2lkdGggKiAuMjgsIHRhcmdldE9mZnNldCkpIC0gdGhpcy5haW1PZmZzZXQpICogLjg1O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSAxIC0gTWF0aC5wb3coLjAwMDA4LCBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMueCArPSAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAqIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqIFggb2Zmc2V0cyBvZiBlYWNoIGNvbHVtbiBpbiB0aGUgZnJvbnQgcm93LCByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuICovXG4gIGZyb250Um93Q29sdW1uT2Zmc2V0cyhzY2FsZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKF8sIGNvbCkgPT5cbiAgICAgIChjb2wgLSAocm93Q291bnQgLSAxKSAvIDIpICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgKTtcbiAgfVxuXG4gIHBvaW50cyhiYXNlWTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogU3F1YWRQb2ludFtdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCBwb2ludHM6IFNxdWFkUG9pbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50IC0gcm93ICogc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGluZGV4ICUgc3BlYy5tZW1iZXJzUGVyUm93O1xuICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICB4OiB0aGlzLnggKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICB5OiBiYXNlWSArIHJvdyAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgTmVvblNoYXBlQWN0b3IsXG4gIE5lb25TaGFwZURpc3Bvc2FsLFxuICBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIsXG4gIE5lb25WaWN0b3J5RXhwZXJpZW5jZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIGNvbWJhdFR1bmluZyxcbiAgZ3VuRmFtaWx5LFxuICBtdWx0aXBsaWVyRmFtaWx5LFxuICBvcmJGYW1pbHksXG4gIHBhcnNlVHJhY2tEZWZpbml0aW9uLFxuICBzaGllbGRGYW1pbHksXG4gIHN3b3JkRmFtaWx5LFxuICB0eXBlIEd1bklkLFxuICB0eXBlIE11bHRpcGxpZXJJZCxcbiAgdHlwZSBPcmJJZCxcbiAgdHlwZSBQYXJzZWRUcmFja0VudGl0eSxcbiAgdHlwZSBTaGllbGRJZCxcbiAgdHlwZSBTd29yZElkLFxuICB0eXBlIFN3b3JkVGFyZ2V0aW5nTW9kZSxcbiAgdHlwZSBUcmFja01lbWJlcixcbn0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb25cIjtcbmltcG9ydCB7IEF1dG9BaW1Db250cm9sU3RhdGUsIHNlbGVjdEF1dG9BaW1PZmZzZXQgfSBmcm9tIFwiLi4vYXV0b0FpbVwiO1xuaW1wb3J0IHsgR3VuU2ltdWxhdGlvbiB9IGZyb20gXCIuLi9jb21iYXQvZ3VuU2ltdWxhdGlvblwiO1xuaW1wb3J0IHsgcXVlcnlOZWFyYnlUaHJlYXRzIH0gZnJvbSBcIi4uL2NvbWJhdC9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuaW1wb3J0IHsgcmVzb2x2ZVNoaWVsZENvbnRhY3QsIFNoaWVsZFN0YXRlLCB0aWNrU2hpZWxkIH0gZnJvbSBcIi4uL2NvbWJhdC9zaGllbGRFdmFsdWF0b3JcIjtcbmltcG9ydCB7IFN3b3JkU3RhdGUsIHRpY2tTd29yZCB9IGZyb20gXCIuLi9jb21iYXQvc3dvcmRFdmFsdWF0b3JcIjtcbmltcG9ydCB7IGNyZWF0ZUVuZW15QWN0b3IsIGRlZmVhdEVuZW15LCBlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZCwgcHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzLCByZXNvbHZlRW5lbXlEYW1hZ2UgfSBmcm9tIFwiLi4vZW5lbXlDYXRhbG9nXCI7XG5pbXBvcnQgeyBlbmVteUV4aXRDbG91ZCwgdXBkYXRlRW5lbXlFeGl0RWZmZWN0cywgdHlwZSBBY3RpdmVFbmVteUV4aXRFZmZlY3QsIHR5cGUgRW5lbXlWaXN1YWxUeXBlIH0gZnJvbSBcIi4uL2VuZW15RXhpdFZpc3VhbHNcIjtcbmltcG9ydCB7IHNoaWVsZFBpY2t1cFZpc3VhbCwgc2hpZWxkVmlzdWFscywgc3dvcmRQaWNrdXBWaXN1YWwsIHN3b3JkVmlzdWFscyB9IGZyb20gXCIuLi9mYW1pbHlWaXN1YWxzXCI7XG5pbXBvcnQgeyBiaWxsYm9hcmRPcmllbnRhdGlvbiwgZW5lbXlPcmllbnRhdGlvbiwgaGVsaWNvcHRlclZpZXdwb3J0Rm9yLCBwbGF5ZXJPcmllbnRhdGlvbiB9IGZyb20gXCIuLi9yZW5kZXJPcmllbnRhdGlvblwiO1xuaW1wb3J0IHsgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kLCBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzIH0gZnJvbSBcIi4uL3NjZW5lRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IGFjdG9ySW5Ub3BEb3duU2NlbmUsIHNoYXBlTGFiZWwsIHN3YXJtU2hhcGVzIH0gZnJvbSBcIi4uL3NoYXBlVmlzdWFsc1wiO1xuaW1wb3J0IHsgU3F1YWRNb2RlbCB9IGZyb20gXCIuLi9zcXVhZFwiO1xuaW1wb3J0IHtcbiAgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCxcbiAgbGFuZVJ1bm5lclZpZXdwb3J0LFxuICBwcm9qZWN0SGVsaWNvcHRlclNjZW5lLFxuICB3b3JsZFlGb3JQcm9qZWN0ZWRZLFxuICB0eXBlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbn0gZnJvbSBcIi4uL3ZpZXdwb3J0XCI7XG5cbnR5cGUgTGFuZSA9IDAgfCAxO1xuXG5leHBvcnQgdHlwZSBOZW9uU3dhcm1TaW11bGF0aW9uTW9kZSA9IFwiZ2FtZVwiIHwgXCJsYWJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1Tb3VuZCB7XG4gIHBsYXkoaWQ6IHN0cmluZyk6IHZvaWQ7XG4gIHBsYXlSb3RhdGVkPyhpZDogc3RyaW5nLCBhbHRlcm5hdGl2ZXM6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtU2ltdWxhdGlvbk9wdGlvbnMge1xuICBtb2RlOiBOZW9uU3dhcm1TaW11bGF0aW9uTW9kZTtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgc3RhZ2VFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY2FtZXJhU2V0dGluZ3M/OiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHNvdW5kPzogTmVvblN3YXJtU291bmQ7XG4gIHNjZW5lSWQ/OiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgb25SdW5TdGF0dXM/OiAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uRmluaXNoPzogKHJlc3VsdDogTmVvblN3YXJtRmluaXNoUmVzdWx0KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Td2FybUZpbmlzaFJlc3VsdCB7XG4gIHdvbjogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGV0YWlsOiBzdHJpbmc7XG4gIGJyZWFjaGVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtU25hcHNob3Qge1xuICBtb2RlOiBOZW9uU3dhcm1TaW11bGF0aW9uTW9kZTtcbiAgYWN0aXZlVHJhY2s6IGJvb2xlYW47XG4gIGNvbWJhdE5vdzogbnVtYmVyO1xuICBjb21iYXRFbGFwc2VkOiBudW1iZXI7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICBzcXVhZDoge1xuICAgIGxhbmU6IExhbmU7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgdGFyZ2V0WDogbnVtYmVyO1xuICAgIGFpbU9mZnNldDogbnVtYmVyO1xuICB9O1xuICBhY3RpdmU6IHtcbiAgICBndW46IHsgaWQ6IEd1bklkOyBsZXZlbDogbnVtYmVyIH0gfCBudWxsO1xuICAgIHNoaWVsZDogU2hpZWxkSWQgfCBudWxsO1xuICAgIHN3b3JkOiBTd29yZElkIHwgbnVsbDtcbiAgfTtcbiAgZW5lbWllczogQXJyYXk8eyBpZDogbnVtYmVyOyBlbmVteUlkOiBPcmJJZDsgbGFuZTogTGFuZTsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGhlYWx0aDogbnVtYmVyOyBtYXhIZWFsdGg6IG51bWJlcjsgZHlpbmc6IGJvb2xlYW4gfT47XG4gIHBpY2t1cHM6IHtcbiAgICBndW5zOiBudW1iZXI7XG4gICAgc2hpZWxkczogbnVtYmVyO1xuICAgIHN3b3JkczogbnVtYmVyO1xuICAgIG11bHRpcGxpZXJzOiBudW1iZXI7XG4gIH07XG4gIGtpbGxzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICBlbmVteUlkOiBPcmJJZDtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBtYXhIZWFsdGg6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG4gIHJvd0lkOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEd1blBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBndW5JZDogR3VuSWQ7XG4gIGxldmVsOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG59XG5cbmludGVyZmFjZSBTaGllbGRQaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2hpZWxkSWQ6IFNoaWVsZElkO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFN3b3JkUGlja3VwIHtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHN3b3JkSWQ6IFN3b3JkSWQ7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTXVsdGlwbGllclBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBtdWx0aXBsaWVySWQ6IE11bHRpcGxpZXJJZDtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3Rvcjtcbn1cblxuY29uc3QgZ3VuRmlyZVNvdW5kSWRzOiBSZWNvcmQ8R3VuSWQsIHN0cmluZz4gPSB7XG4gIHB1bHNlUGlzdG9sOiBcIlByaW1hcnlcIixcbiAgbmVlZGxlclNtZzogXCJOZWVkbGVyRmlyZVwiLFxuICBidXJzdENhcmJpbmU6IFwiQnVyc3RDYXJiaW5lRmlyZVwiLFxuICBoZWF2eUNhbm5vbjogXCJIZWF2eUNhbm5vbkZpcmVcIixcbiAgc3BsaXR0ZXJSaWZsZTogXCJTcGxpdHRlclJpZmxlRmlyZVwiLFxufTtcblxuY29uc3Qgc3dvcmRTd2luZ1NvdW5kSWRzOiBSZWNvcmQ8U3dvcmRJZCwgc3RyaW5nPiA9IHtcbiAgYXJjQmxhZGU6IFwiU3dvcmRTd2luZ1wiLFxuICBjbGVhdmVyOiBcIlN3b3JkSGVhdnlTd2luZ1wiLFxuICBuZWVkbGVSYXBpZXI6IFwiU3dvcmRTdGFiXCIsXG59O1xuXG5jb25zdCBzb3VuZEFsdGVybmF0aXZlQ291bnRzOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+ID0ge1xuICBQcmltYXJ5OiAzLFxuICBFbmVteURlc3Ryb3llZDogMixcbiAgRW5lbXlIaXQ6IDIsXG4gIEVuZW15U3Bhd246IDIsXG4gIEJvc3M6IDEsXG4gIFByb2plY3RpbGVIaXQ6IDIsXG59O1xuXG5leHBvcnQgY2xhc3MgTmVvblN3YXJtU2ltdWxhdGlvbiB7XG4gIHJlYWRvbmx5IG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBzdGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSBjYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICByZWFkb25seSBzcXVhZCA9IG5ldyBTcXVhZE1vZGVsKCk7XG4gIHJlYWRvbmx5IGFpbUNvbnRyb2wgPSBuZXcgQXV0b0FpbUNvbnRyb2xTdGF0ZSgpO1xuXG4gIHByaXZhdGUgcmVuZGVyZXI6IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcjtcbiAgcHJpdmF0ZSBzb3VuZD86IE5lb25Td2FybVNvdW5kO1xuICBwcml2YXRlIG9uUnVuU3RhdHVzPzogKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xuICBwcml2YXRlIG9uRmluaXNoPzogKHJlc3VsdDogTmVvblN3YXJtRmluaXNoUmVzdWx0KSA9PiB2b2lkO1xuICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lID0gMDtcbiAgcHJpdmF0ZSBhY3RpdmVUcmFjazogVHJhY2tNZW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSB0cmFja1NjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICBwcml2YXRlIGxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBwcml2YXRlIGNvbWJhdEVsYXBzZWQgPSAwO1xuICBwcml2YXRlIGNvbWJhdE5vdyA9IDA7XG4gIHByaXZhdGUgcGxheWVyTGFuZTogTGFuZSA9IDA7XG4gIHByaXZhdGUgY29vbGRvd24gPSAwO1xuICBwcml2YXRlIGVudGl0eUlkQ291bnRlciA9IDA7XG4gIHByaXZhdGUgdHJhY2tFbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuICBwcml2YXRlIG5leHRUcmFja0VudGl0eSA9IDA7XG4gIHByaXZhdGUgYnJlYWNoZXMgPSAwO1xuICBwcml2YXRlIGtpbGxzID0gMDtcbiAgcHJpdmF0ZSBlbmVtaWVzOiBFbmVteVtdID0gW107XG4gIHByaXZhdGUgZ3VuU2ltdWxhdGlvbiA9IG5ldyBHdW5TaW11bGF0aW9uKCk7XG4gIHByaXZhdGUgZ3VuUGlja3VwczogR3VuUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBzaGllbGRQaWNrdXBzOiBTaGllbGRQaWNrdXBbXSA9IFtdO1xuICBwcml2YXRlIHN3b3JkUGlja3VwczogU3dvcmRQaWNrdXBbXSA9IFtdO1xuICBwcml2YXRlIG11bHRpcGxpZXJzOiBNdWx0aXBsaWVyUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBlbmVteUV4aXRFZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSA9IFtdO1xuICBwcml2YXRlIHZpY3Rvcnk6IE5lb25WaWN0b3J5RXhwZXJpZW5jZSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGZhaWx1cmVSZWFzb24gPSBcIlwiO1xuICBwcml2YXRlIHBsYXllckFjdG9yczogTmVvblNoYXBlQWN0b3JbXSA9IFtdO1xuICBwcml2YXRlIGV4cGxvZGluZ1BsYXllcnM6IEFycmF5PHsgYWN0b3I6IE5lb25TaGFwZUFjdG9yOyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiA9IFtdO1xuICBwcml2YXRlIGFjdGl2ZUJ5RmFtaWx5OiB7XG4gICAgZ3VuOiB7IGlkOiBHdW5JZDsgbGV2ZWw6IG51bWJlciB9IHwgbnVsbDtcbiAgICBzaGllbGQ6IFNoaWVsZFN0YXRlIHwgbnVsbDtcbiAgICBzd29yZDogU3dvcmRTdGF0ZSB8IG51bGw7XG4gIH0gPSB7XG4gICAgZ3VuOiBudWxsLFxuICAgIHNoaWVsZDogbnVsbCxcbiAgICBzd29yZDogbnVsbCxcbiAgfTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIsIG9wdGlvbnM6IE5lb25Td2FybVNpbXVsYXRpb25PcHRpb25zKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZTtcbiAgICB0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuICAgIHRoaXMuc3RhZ2VFbGVtZW50ID0gb3B0aW9ucy5zdGFnZUVsZW1lbnQ7XG4gICAgdGhpcy5jYW1lcmFTZXR0aW5ncyA9IG9wdGlvbnMuY2FtZXJhU2V0dGluZ3MgPz8geyAuLi5kZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzIH07XG4gICAgdGhpcy5zb3VuZCA9IG9wdGlvbnMuc291bmQ7XG4gICAgdGhpcy5vblJ1blN0YXR1cyA9IG9wdGlvbnMub25SdW5TdGF0dXM7XG4gICAgdGhpcy5vbkZpbmlzaCA9IG9wdGlvbnMub25GaW5pc2g7XG4gICAgdGhpcy50cmFja1NjZW5lSWQgPSBvcHRpb25zLnNjZW5lSWQgPz8gXCJuZW9uSGFsbFwiO1xuICAgIHRoaXMuYXBwbHlTY2VuZUJhY2tncm91bmQoKTtcbiAgICB0aGlzLnJlc2V0KHsgc2lsZW50OiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShvcHRpb25zOiBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucyk6IFByb21pc2U8TmVvblN3YXJtU2ltdWxhdGlvbj4ge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLmNyZWF0ZShvcHRpb25zLmNhbnZhcywgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxXaWR0aCwgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxIZWlnaHQpO1xuICAgIHJldHVybiBuZXcgTmVvblN3YXJtU2ltdWxhdGlvbihyZW5kZXJlciwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXQgbm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmF0Tm93O1xuICB9XG5cbiAgZ2V0IGFjdGl2ZVRyYWNrUnVubmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUcmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIGxhbmVYKGxhbmU6IExhbmUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aCAqIChsYW5lID09PSAwID8gLjMyIDogLjY4KTtcbiAgfVxuXG4gIHBsYXllclkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjgyO1xuICB9XG5cbiAgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJlc2V0KG9wdGlvbnM6IHsgc2lsZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRyYWNrID0gbnVsbDtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuY29tYmF0RWxhcHNlZCA9IDA7XG4gICAgdGhpcy5jb21iYXROb3cgPSAwO1xuICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgIHRoaXMubmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgICB0aGlzLnRyYWNrRW50aXRpZXMgPSBbXTtcbiAgICB0aGlzLmJyZWFjaGVzID0gMDtcbiAgICB0aGlzLmtpbGxzID0gMDtcbiAgICB0aGlzLmNsZWFyU3RhZ2UoKTtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBudWxsO1xuICAgIHRoaXMuc3F1YWQuY291bnQgPSAxO1xuICAgIHRoaXMuc3F1YWQuYWltT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnNxdWFkLmxhbmUgPSAwO1xuICAgIHRoaXMuc3F1YWQueCA9IHRoaXMubGFuZVgoMCk7XG4gICAgdGhpcy5zcXVhZC50YXJnZXRYID0gdGhpcy5sYW5lWCgwKTtcbiAgICB0aGlzLnBsYXllckxhbmUgPSAwO1xuICAgIHRoaXMucGxheWVyQWN0b3JzID0gW25ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSldO1xuICAgIHRoaXMuZmFpbHVyZVJlYXNvbiA9IFwiXCI7XG4gICAgdGhpcy52aWN0b3J5ID0gbnVsbDtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLnBsYXkoXCJNZW51T3BlblwiKTtcbiAgfVxuXG4gIGNsZWFyU3RhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgdGhpcy5ndW5TaW11bGF0aW9uLmNsZWFyKCk7XG4gICAgdGhpcy5ndW5QaWNrdXBzID0gW107XG4gICAgdGhpcy5zaGllbGRQaWNrdXBzID0gW107XG4gICAgdGhpcy5zd29yZFBpY2t1cHMgPSBbXTtcbiAgICB0aGlzLm11bHRpcGxpZXJzID0gW107XG4gICAgdGhpcy5lbmVteUV4aXRFZmZlY3RzID0gW107XG4gICAgdGhpcy5leHBsb2RpbmdQbGF5ZXJzID0gW107XG4gICAgdGhpcy52aWN0b3J5ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXJ0VHJhY2sodHJhY2s6IFRyYWNrTWVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUcmFjayA9IHRyYWNrO1xuICAgIHRoaXMudHJhY2tTY2VuZUlkID0gdHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZDtcbiAgICB0aGlzLmFwcGx5U2NlbmVCYWNrZ3JvdW5kKCk7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmNvbWJhdEVsYXBzZWQgPSAwO1xuICAgIHRoaXMuY29tYmF0Tm93ID0gMDtcbiAgICBjb25zdCBhbGxFbnRpdGllcyA9IHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgIGNvbnN0IHBsYXllclN0YXJ0ID0gYWxsRW50aXRpZXMuZmluZChlbnRpdHkgPT4gZW50aXR5LmlkID09PSBcInBsYXllci5zdGFydFwiKTtcbiAgICBjb25zdCBzdGFydExhbmU6IExhbmUgPSBwbGF5ZXJTdGFydD8uc2lkZSA9PT0gXCJyaWdodFwiID8gMSA6IDA7XG4gICAgdGhpcy5wbGF5ZXJMYW5lID0gc3RhcnRMYW5lO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG51bGw7XG4gICAgdGhpcy5jb29sZG93biA9IDA7XG4gICAgdGhpcy5uZXh0VHJhY2tFbnRpdHkgPSAwO1xuICAgIHRoaXMudHJhY2tFbnRpdGllcyA9IGFsbEVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5LmlkICE9PSBcInBsYXllci5zdGFydFwiKTtcbiAgICB0aGlzLmJyZWFjaGVzID0gMDtcbiAgICB0aGlzLmNsZWFyU3RhZ2UoKTtcbiAgICB0aGlzLnNxdWFkLmNvdW50ID0gMTtcbiAgICB0aGlzLnBsYXllckFjdG9ycyA9IFtuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pXTtcbiAgICB0aGlzLnNxdWFkLmFpbU9mZnNldCA9IDA7XG4gICAgdGhpcy5zcXVhZC5sYW5lID0gc3RhcnRMYW5lO1xuICAgIHRoaXMuc3F1YWQueCA9IHRoaXMubGFuZVgoc3RhcnRMYW5lKTtcbiAgICB0aGlzLnNxdWFkLnRhcmdldFggPSB0aGlzLmxhbmVYKHN0YXJ0TGFuZSk7XG4gICAgdGhpcy5wbGF5KFwiVHJhY2tTdGFydFwiKTtcbiAgfVxuXG4gIHNldFNjZW5lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogdm9pZCB7XG4gICAgdGhpcy50cmFja1NjZW5lSWQgPSBzY2VuZUlkO1xuICAgIHRoaXMuYXBwbHlTY2VuZUJhY2tncm91bmQoKTtcbiAgfVxuXG4gIHNldFNxdWFkTGFuZShsYW5lOiBMYW5lLCBvcHRpb25zOiB7IHJlcXVpcmVBY3RpdmVUcmFjaz86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbnMucmVxdWlyZUFjdGl2ZVRyYWNrICYmICF0aGlzLmFjdGl2ZVRyYWNrKSByZXR1cm47XG4gICAgaWYgKGxhbmUgIT09IHRoaXMuc3F1YWQubGFuZSkgdGhpcy5wbGF5KFwiTGFuZVN3aXRjaFwiKTtcbiAgICB0aGlzLnNxdWFkLnNldExhbmUobGFuZSwgdmFsdWUgPT4gdGhpcy5sYW5lWCh2YWx1ZSksIHRoaXMuY29tYmF0Tm93KTtcbiAgICB0aGlzLnBsYXllckxhbmUgPSBsYW5lO1xuICAgIHRoaXMuYWltQ29udHJvbC5sYW5lU2VsZWN0ZWQoKTtcbiAgfVxuXG4gIHNldFNxdWFkQWltKHZhbHVlOiBudW1iZXIsIG9wdGlvbnM6IHsgcmVxdWlyZUFjdGl2ZVRyYWNrPzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlQWN0aXZlVHJhY2sgJiYgIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICB0aGlzLnNxdWFkLnNldEFpbSh2YWx1ZSwgdGhpcy5jYW52YXMud2lkdGggKiAuMjIsIGxhbmUgPT4gdGhpcy5sYW5lWChsYW5lKSk7XG4gICAgdGhpcy5haW1Db250cm9sLmFpbUNoYW5nZWQoKTtcbiAgfVxuXG4gIHJlbGVhc2VBaW0oKTogdm9pZCB7XG4gICAgdGhpcy5haW1Db250cm9sLmFpbVJlbGVhc2VkKCk7XG4gICAgdGhpcy5wbGF5KFwiQWltUmVsZWFzZVwiKTtcbiAgfVxuXG4gIGVxdWlwR3VuKGd1bklkOiBHdW5JZCwgbGV2ZWwgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSB7IGlkOiBndW5JZCwgbGV2ZWwgfTtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBHdW5cIik7XG4gICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gIH1cblxuICBlcXVpcFNoaWVsZChzaGllbGRJZDogU2hpZWxkSWQpOiB2b2lkIHtcbiAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tzaGllbGRJZF07XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBuZXcgU2hpZWxkU3RhdGUoc2hpZWxkSWQsIGRlZi5tYXhDaGFyZ2VzKTtcbiAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTaGllbGRcIik7XG4gICAgdGhpcy5wbGF5KFwiU2hpZWxkXCIpO1xuICB9XG5cbiAgZXF1aXBTd29yZChzd29yZElkOiBTd29yZElkKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG5ldyBTd29yZFN0YXRlKHN3b3JkSWQpO1xuICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFN3b3JkXCIpO1xuICAgIHRoaXMucGxheShcIldlYXBvblJlYWR5XCIpO1xuICB9XG5cbiAgYWRkU3F1YWRNZW1iZXJzKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zcXVhZC5hZGQoYW1vdW50KTtcbiAgICB0aGlzLnN5bmNQbGF5ZXJBY3RvcnMoKTtcbiAgfVxuXG4gIHNwYXduRW5lbXkob3B0aW9uczogeyBlbmVteUlkOiBPcmJJZDsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgaGVhbHRoPzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXI7IHJvd0lkPzogbnVtYmVyOyBwbGF5U291bmQ/OiBib29sZWFuOyBjb2xvcj86IHN0cmluZyB9KTogbnVtYmVyIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbb3B0aW9ucy5lbmVteUlkXTtcbiAgICBjb25zdCBoZWFsdGggPSBvcHRpb25zLmhlYWx0aCA/PyBkZWZpbml0aW9uLmhlYWx0aDtcbiAgICBjb25zdCBpZCA9ICsrdGhpcy5lbnRpdHlJZENvdW50ZXI7XG4gICAgY29uc3QgYWN0b3IgPSBjcmVhdGVFbmVteUFjdG9yKG9wdGlvbnMuZW5lbXlJZCk7XG4gICAgaWYgKG9wdGlvbnMuY29sb3IpIGFjdG9yLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmVuZW1pZXMucHVzaCh7XG4gICAgICBpZCxcbiAgICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteUlkLFxuICAgICAgZW5lbXlJZDogb3B0aW9ucy5lbmVteUlkLFxuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMDUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBoZWFsdGgsXG4gICAgICBtYXhIZWFsdGg6IGhlYWx0aCxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgIHJvd0lkOiBvcHRpb25zLnJvd0lkID8/IGlkLFxuICAgICAgYWN0b3IsXG4gICAgICBkeWluZzogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMucGxheVNvdW5kICE9PSBmYWxzZSAmJiBkZWZpbml0aW9uLnNwYXduU291bmQpIHRoaXMucGxheShkZWZpbml0aW9uLnNwYXduU291bmQpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIGRlZmVhdEVuZW15QnlJZChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZW5lbXkgPSB0aGlzLmVuZW1pZXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICBpZiAoZW5lbXkgJiYgIWVuZW15LmR5aW5nKSB0aGlzLmRlc3Ryb3lFbmVteShlbmVteSk7XG4gIH1cblxuICBzcGF3bkd1blBpY2t1cChvcHRpb25zOiB7IGd1bklkOiBHdW5JZDsgbGFuZTogTGFuZTsgbGV2ZWw/OiBudW1iZXI7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy5ndW5QaWNrdXBzLnB1c2goe1xuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMzUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBndW5JZDogb3B0aW9ucy5ndW5JZCxcbiAgICAgIGxldmVsOiBvcHRpb25zLmxldmVsID8/IDEsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmd1blBpY2t1cCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHNwYXduU2hpZWxkUGlja3VwKG9wdGlvbnM6IHsgc2hpZWxkSWQ6IFNoaWVsZElkOyBsYW5lOiBMYW5lOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMuc2hpZWxkUGlja3Vwcy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgc2hpZWxkSWQ6IG9wdGlvbnMuc2hpZWxkSWQsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgfSk7XG4gIH1cblxuICBzcGF3blN3b3JkUGlja3VwKG9wdGlvbnM6IHsgc3dvcmRJZDogU3dvcmRJZDsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnN3b3JkUGlja3Vwcy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgc3dvcmRJZDogb3B0aW9ucy5zd29yZElkLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgIH0pO1xuICB9XG5cbiAgc3Bhd25NdWx0aXBsaWVyUGlja3VwKG9wdGlvbnM6IHsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyOyBtdWx0aXBsaWVySWQ/OiBNdWx0aXBsaWVySWQgfSk6IHZvaWQge1xuICAgIGNvbnN0IG11bHRpcGxpZXJJZCA9IG9wdGlvbnMubXVsdGlwbGllcklkID8/IFwic3F1YWRQbHVzT25lXCI7XG4gICAgdGhpcy5tdWx0aXBsaWVycy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgbXVsdGlwbGllcklkLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5tdWx0aXBsaWVyIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhcnRMb29wKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcExvb3AoKTtcbiAgICBjb25zdCBmcmFtZSA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgdGhpcy50aWNrKG5vdyk7XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNvbWJhdE5vdyk7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICB9O1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgc3RvcExvb3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWUpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xuICB9XG5cbiAgdGljayhmcmFtZU5vdzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmF3RGVsdGEgPSBNYXRoLm1pbiguMDUsIChmcmFtZU5vdyAtIHRoaXMubGFzdEZyYW1lKSAvIDEwMDApO1xuICAgIHRoaXMubGFzdEZyYW1lID0gZnJhbWVOb3c7XG4gICAgY29uc3QgZGVsdGEgPSByYXdEZWx0YSAqIGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXI7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkICs9IGRlbHRhO1xuICAgIHRoaXMuY29tYmF0Tm93ID0gdGhpcy5jb21iYXRFbGFwc2VkICogMTAwMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgWy4uLnRoaXMuZXhwbG9kaW5nUGxheWVyc10pIHtcbiAgICAgIGl0ZW0uYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIGlmIChpdGVtLmFjdG9yLmRpc3Bvc2VkKSB0aGlzLmV4cGxvZGluZ1BsYXllcnMuc3BsaWNlKHRoaXMuZXhwbG9kaW5nUGxheWVycy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG4gICAgdXBkYXRlRW5lbXlFeGl0RWZmZWN0cyh0aGlzLmVuZW15RXhpdEVmZmVjdHMsIGRlbHRhKTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZ2FtZVwiICYmICF0aGlzLmFjdGl2ZVRyYWNrKSByZXR1cm47XG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2spIHRoaXMuc3Bhd25UcmFja0VudGl0aWVzKCk7XG5cbiAgICBjb25zdCBndW5TdGF0dXMgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA/IGd1bkZhbWlseS5tZW1iZXJzW3RoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuLmlkXS5sYWJlbCA6IFwiTm8gd2VhcG9uXCI7XG4gICAgY29uc3Qgc2hpZWxkRGVmID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPyBzaGllbGRGYW1pbHkubWVtYmVyc1t0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZC5zaGllbGRJZF0gOiBudWxsO1xuICAgIGNvbnN0IHN3b3JkRGVmID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA/IHN3b3JkRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZC5zd29yZElkXSA6IG51bGw7XG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2spIHtcbiAgICAgIHRoaXMub25SdW5TdGF0dXM/LihgJHtndW5TdGF0dXN9JHtzaGllbGREZWYgPyBgIFx1MDBCNyAke3NoaWVsZERlZi5sYWJlbH1gIDogXCJcIn0ke3N3b3JkRGVmID8gYCBcdTAwQjcgJHtzd29yZERlZi5sYWJlbH1gIDogXCJcIn0gXHUwMEI3ICR7TWF0aC5tYXgoMCwgdGhpcy5hY3RpdmVUcmFjay5kdXJhdGlvblNlY29uZHMgLSB0aGlzLmNvbWJhdEVsYXBzZWQpLnRvRml4ZWQoMSl9c2ApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5haW1Db250cm9sLm1hbnVhbCkge1xuICAgICAgY29uc3QgbGFuZUVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15LmxhbmUgPT09IHRoaXMuc3F1YWQubGFuZSAmJiAhZW5lbXkuZHlpbmcpO1xuICAgICAgY29uc3QgY29sT2Zmc2V0cyA9IHRoaXMuc3F1YWQuZnJvbnRSb3dDb2x1bW5PZmZzZXRzKHRoaXMuc2NhbGUoKSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGxhbmVFbmVtaWVzLCB0aGlzLmxhbmVYKHRoaXMuc3F1YWQubGFuZSksIGNvbE9mZnNldHMsIHRoaXMuc3F1YWQuYWltT2Zmc2V0KTtcbiAgICAgIHRoaXMuc3F1YWQuYXV0b0FpbShvZmZzZXQsIHRoaXMuY2FudmFzLndpZHRoICogLjIyLCBsYW5lID0+IHRoaXMubGFuZVgobGFuZSkpO1xuICAgIH1cbiAgICB0aGlzLnNxdWFkLnVwZGF0ZShkZWx0YSk7XG4gICAgdGhpcy5zdGFnZUVsZW1lbnQuZGF0YXNldC5zcXVhZExhbmUgPSBTdHJpbmcodGhpcy5zcXVhZC5sYW5lKTtcbiAgICB0aGlzLnN0YWdlRWxlbWVudC5kYXRhc2V0LnNxdWFkQWltID0gdGhpcy5zcXVhZC5haW1PZmZzZXQudG9GaXhlZCgyKTtcbiAgICB0aGlzLnN5bmNQbGF5ZXJBY3RvcnMoKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bikge1xuICAgICAgdGhpcy5jb29sZG93biAtPSBkZWx0YTtcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duIDw9IDApIHRoaXMuZmlyZSgpO1xuICAgICAgaWYgKHRoaXMuZ3VuU2ltdWxhdGlvbi51cGRhdGVGaXJpbmcodGhpcy5jb21iYXROb3cpID4gMCkgdGhpcy5wbGF5R3VuRmlyZSh0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bi5pZCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aWxlcyhkZWx0YSk7XG4gICAgdGhpcy51cGRhdGVOZWFyUGxheWVyRWZmZWN0cyhkZWx0YSwgc2hpZWxkRGVmLCBzd29yZERlZik7XG4gICAgdGhpcy51cGRhdGVFbmVtaWVzKGRlbHRhLCBzaGllbGREZWYpO1xuICAgIHRoaXMudXBkYXRlUGlja3VwcyhkZWx0YSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVUcmFjayAmJiB0aGlzLmNvbWJhdEVsYXBzZWQgPj0gdGhpcy5hY3RpdmVUcmFjay5kdXJhdGlvblNlY29uZHMgJiYgdGhpcy5lbmVtaWVzLmxlbmd0aCA9PT0gMCkgdGhpcy5maW5pc2godGhpcy5icmVhY2hlcyA9PT0gMCk7XG4gIH1cblxuICByZW5kZXIobm93ID0gdGhpcy5jb21iYXROb3cpOiB2b2lkIHtcbiAgICBjb25zdCBwcmltaXRpdmVzID0gbGFuZVJ1bm5lclNjZW5lUHJpbWl0aXZlcyh0aGlzLnRyYWNrU2NlbmVJZCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgbm93KTtcbiAgICBjb25zdCBzID0gdGhpcy5zY2FsZSgpO1xuXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgcykpIHtcbiAgICAgIGNvbnN0IHNtZWFyID0gTWF0aC5taW4oMjIgKiBzLCBNYXRoLmFicyh0aGlzLnNxdWFkLnRhcmdldFggLSB0aGlzLnNxdWFkLngpICogLjQ1KTtcbiAgICAgIGlmIChzbWVhciA+IDIpIHtcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgICB4OiBwb2ludC54IC0gTWF0aC5zaWduKHRoaXMuc3F1YWQudGFyZ2V0WCAtIHRoaXMuc3F1YWQueCkgKiBzbWVhciAqIC41LFxuICAgICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgICAgd2lkdGg6IHNtZWFyLFxuICAgICAgICAgIGhlaWdodDogMi4yICogcyxcbiAgICAgICAgICBjb2xvcjogbmVvblBhbGV0dGUuZGVlcEJsdWUsXG4gICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLmN5YW4sXG4gICAgICAgICAgZ2xvdzogLjQ1LFxuICAgICAgICAgIGludGVuc2l0eTogLjUsXG4gICAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmltaXRpdmVzLnB1c2goLi4udGhpcy5ndW5TaW11bGF0aW9uLnByb2plY3RpbGVQcmltaXRpdmVzKCkpO1xuICAgIGlmICh0aGlzLnZpY3RvcnkpIHByaW1pdGl2ZXMucHVzaCguLi50aGlzLnZpY3RvcnkucHJpbWl0aXZlcyhub3cpKTtcblxuICAgIGNvbnN0IHNoYXBlSW5zdGFuY2VzOiBOZW9uVG9wRG93blNoYXBlW10gPSBbXTtcbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQpIHtcbiAgICAgIGNvbnN0IGxpdmVTaGllbGQgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZDtcbiAgICAgIGNvbnN0IGxpdmVEZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tsaXZlU2hpZWxkLnNoaWVsZElkXTtcbiAgICAgIGNvbnN0IHNjZW5lID0gc2hpZWxkVmlzdWFscyh7XG4gICAgICAgIGRlZmluaXRpb246IGxpdmVEZWYsXG4gICAgICAgIHN0cmVuZ3RoOiBsaXZlU2hpZWxkLmNoYXJnZXMsXG4gICAgICAgIGluaXRpYWxTdHJlbmd0aDogbGl2ZURlZi5tYXhDaGFyZ2VzLFxuICAgICAgICB4OiB0aGlzLnNxdWFkLngsXG4gICAgICAgIHk6IHRoaXMucGxheWVyWSgpLFxuICAgICAgICBub3csXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgICBoaXRQcm9ncmVzczogbGl2ZVNoaWVsZC5oaXRGbGFzaFByb2dyZXNzLFxuICAgICAgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goLi4uc2NlbmUucHJpbWl0aXZlcyk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKC4uLnNjZW5lLnNoYXBlcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkKSB7XG4gICAgICBjb25zdCBsaXZlU3dvcmQgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkO1xuICAgICAgY29uc3QgbGl2ZURlZiA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbbGl2ZVN3b3JkLnN3b3JkSWRdO1xuICAgICAgY29uc3Qgc2NlbmUgPSBzd29yZFZpc3VhbHMoe1xuICAgICAgICBkZWZpbml0aW9uOiBsaXZlRGVmLFxuICAgICAgICBzbGFzaDogbGl2ZVN3b3JkLmFjdGl2ZVNsYXNoLFxuICAgICAgICB4OiB0aGlzLnNxdWFkLngsXG4gICAgICAgIHk6IHRoaXMucGxheWVyWSgpLFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKC4uLnNjZW5lLnByaW1pdGl2ZXMpO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaCguLi5zY2VuZS5zaGFwZXMpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHRoaXMuc2hpZWxkUGlja3Vwcykge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zaGllbGRJZF07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKHNoaWVsZFBpY2t1cFZpc3VhbCh7XG4gICAgICAgIHg6IHBpY2t1cC54LFxuICAgICAgICB5OiBwaWNrdXAueSxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgICAgICBub3csXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLnN3b3JkUGlja3Vwcykge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnN3b3JkSWRdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChzd29yZFBpY2t1cFZpc3VhbCh7XG4gICAgICAgIHg6IHBpY2t1cC54LFxuICAgICAgICB5OiBwaWNrdXAueSxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgICAgICBub3csXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlbGljb3B0ZXJWaWV3cG9ydCA9IGhlbGljb3B0ZXJWaWV3cG9ydEZvcih0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLnBsYXllclkoKSwgbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5zcXVhZC54KSk7XG4gICAgY29uc3QgcGxheWVyU2l6ZSA9IDE0O1xuICAgIGZvciAoY29uc3QgW2luZGV4LCBwb2ludF0gb2YgdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHMpLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgYWN0b3IgPSB0aGlzLnBsYXllckFjdG9yc1tpbmRleF0gPz8gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShhY3RvciwgcG9pbnQueCwgcG9pbnQueSwgcGxheWVyU2l6ZSwgcGxheWVyT3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBwb2ludC54LCBwb2ludC55LCBub3csIGluZGV4KSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5leHBsb2RpbmdQbGF5ZXJzKSBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoaXRlbS5hY3RvciwgaXRlbS54LCBpdGVtLnksIHBsYXllclNpemUpKTtcblxuICAgIGNvbnN0IGVuZW15SGVhbHRoQmFyczogUGFyYW1ldGVyczx0eXBlb2YgcHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzPlswXVtudW1iZXJdW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVuZW15IG9mIHRoaXMuZW5lbWllcykge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KTtcbiAgICAgIGNvbnN0IHNpemUgPSAxOCAqIGRlZmluaXRpb24uY29sdW1uU3BhbjtcbiAgICAgIGVuZW15SGVhbHRoQmFycy5wdXNoKHsgZW5lbXlJZDogZW5lbXkuZW5lbXlJZCwgeDogZW5lbXkueCwgeTogZW5lbXkueSwgaGVhbHRoOiBlbmVteS5oZWFsdGgsIG1heEhlYWx0aDogZW5lbXkubWF4SGVhbHRoLCBzaXplLCBzY2FsZTogcyB9KTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShlbmVteS5hY3RvciwgZW5lbXkueCwgZW5lbXkueSwgc2l6ZSwgZW5lbXlPcmllbnRhdGlvbih0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIGVuZW15LngsIGVuZW15LnksIG5vdywgZW5lbXkucm93SWQpKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHRoaXMuZ3VuUGlja3Vwcykge1xuICAgICAgY29uc3QgZ3VuID0gZ3VuRmFtaWx5Lm1lbWJlcnNbcGlja3VwLmd1bklkXTtcbiAgICAgIHBpY2t1cC5hY3Rvci5sYWJlbCA9IHNoYXBlTGFiZWwoZ3VuLmxhYmVsLCBcImFib3ZlXCIsIDEwLCA3KTtcbiAgICAgIHBpY2t1cC5hY3Rvci5jb2xvciA9IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKHBpY2t1cC5hY3RvciwgcGlja3VwLngsIHBpY2t1cC55LCAxNSwgYmlsbGJvYXJkT3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBwaWNrdXAueCwgcGlja3VwLnksIG5vdykpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgdGhpcy5tdWx0aXBsaWVycykge1xuICAgICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVyc1twaWNrdXAubXVsdGlwbGllcklkXTtcbiAgICAgIHBpY2t1cC5hY3Rvci5sYWJlbCA9IHNoYXBlTGFiZWwoYCR7c3BlYy5zcXVhZEFkZGVkICsgMX14YCwgXCJjZW50ZXJcIiwgMTEsIDApO1xuICAgICAgcGlja3VwLmFjdG9yLmNvbG9yID0gbmVvblBhbGV0dGVbc3BlYy5waWNrdXBDb2xvcl07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGlja3VwLmFjdG9yLCBwaWNrdXAueCwgcGlja3VwLnksIDE2LCBiaWxsYm9hcmRPcmllbnRhdGlvbih0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHBpY2t1cC54LCBwaWNrdXAueSwgbm93KSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVJbnN0YW5jZXMsIHRoaXMuZW5lbXlFeGl0RWZmZWN0cy5tYXAoZW5lbXlFeGl0Q2xvdWQpLCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpO1xuICAgIHByb2plY3RlZC5wcmltaXRpdmVzLnB1c2goLi4ucHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKGVuZW15SGVhbHRoQmFycywgdGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KSk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIocHJvamVjdGVkLCBub3cgLyAxMDAwKTtcbiAgfVxuXG4gIHNuYXBzaG90KCk6IE5lb25Td2FybVNuYXBzaG90IHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgYWN0aXZlVHJhY2s6IHRoaXMuYWN0aXZlVHJhY2sgIT09IG51bGwsXG4gICAgICBjb21iYXROb3c6IHRoaXMuY29tYmF0Tm93LFxuICAgICAgY29tYmF0RWxhcHNlZDogdGhpcy5jb21iYXRFbGFwc2VkLFxuICAgICAgc2NlbmVJZDogdGhpcy50cmFja1NjZW5lSWQsXG4gICAgICBzcXVhZDoge1xuICAgICAgICBsYW5lOiB0aGlzLnNxdWFkLmxhbmUsXG4gICAgICAgIGNvdW50OiB0aGlzLnNxdWFkLmNvdW50LFxuICAgICAgICB4OiB0aGlzLnNxdWFkLngsXG4gICAgICAgIHRhcmdldFg6IHRoaXMuc3F1YWQudGFyZ2V0WCxcbiAgICAgICAgYWltT2Zmc2V0OiB0aGlzLnNxdWFkLmFpbU9mZnNldCxcbiAgICAgIH0sXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgZ3VuOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA/IHsgLi4udGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gfSA6IG51bGwsXG4gICAgICAgIHNoaWVsZDogdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQ/LnNoaWVsZElkID8/IG51bGwsXG4gICAgICAgIHN3b3JkOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkPy5zd29yZElkID8/IG51bGwsXG4gICAgICB9LFxuICAgICAgZW5lbWllczogdGhpcy5lbmVtaWVzLm1hcChlbmVteSA9PiAoe1xuICAgICAgICBpZDogZW5lbXkuaWQsXG4gICAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICAgIGxhbmU6IGVuZW15LmxhbmUsXG4gICAgICAgIHg6IGVuZW15LngsXG4gICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgIGhlYWx0aDogZW5lbXkuaGVhbHRoLFxuICAgICAgICBtYXhIZWFsdGg6IGVuZW15Lm1heEhlYWx0aCxcbiAgICAgICAgZHlpbmc6IGVuZW15LmR5aW5nLFxuICAgICAgfSkpLFxuICAgICAgcGlja3Vwczoge1xuICAgICAgICBndW5zOiB0aGlzLmd1blBpY2t1cHMubGVuZ3RoLFxuICAgICAgICBzaGllbGRzOiB0aGlzLnNoaWVsZFBpY2t1cHMubGVuZ3RoLFxuICAgICAgICBzd29yZHM6IHRoaXMuc3dvcmRQaWNrdXBzLmxlbmd0aCxcbiAgICAgICAgbXVsdGlwbGllcnM6IHRoaXMubXVsdGlwbGllcnMubGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIGtpbGxzOiB0aGlzLmtpbGxzLFxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcExvb3AoKTtcbiAgICB0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Bhd25UcmFja0VudGl0aWVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIHdoaWxlIChcbiAgICAgIHRoaXMubmV4dFRyYWNrRW50aXR5IDwgdGhpcy50cmFja0VudGl0aWVzLmxlbmd0aCAmJlxuICAgICAgdGhpcy50cmFja0VudGl0aWVzW3RoaXMubmV4dFRyYWNrRW50aXR5XS5kaXN0YW5jZUZyb21QbGF5ZXIgPD0gdGhpcy5jb21iYXRFbGFwc2VkICsgdGhpcy5zcGF3bkxlYWRTZWNvbmRzKHRoaXMudHJhY2tFbnRpdGllc1t0aGlzLm5leHRUcmFja0VudGl0eV0pXG4gICAgKSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLnRyYWNrRW50aXRpZXNbdGhpcy5uZXh0VHJhY2tFbnRpdHkrK107XG4gICAgICBjb25zdCBsYW5lOiBMYW5lID0gZW50aXR5LnNpZGUgPT09IFwibGVmdFwiID8gMCA6IDE7XG4gICAgICBjb25zdCBlbmVteURlZmluaXRpb25FbnRyeSA9IGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGVudGl0eS5pZCk7XG4gICAgICBpZiAoZW5lbXlEZWZpbml0aW9uRW50cnkpIHtcbiAgICAgICAgY29uc3QgeyBlbmVteUlkLCBkZWZpbml0aW9uIH0gPSBlbmVteURlZmluaXRpb25FbnRyeTtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goe1xuICAgICAgICAgIGlkOiArK3RoaXMuZW50aXR5SWRDb3VudGVyLFxuICAgICAgICAgIGVuZW15VHlwZTogZW5lbXlJZCxcbiAgICAgICAgICBlbmVteUlkLFxuICAgICAgICAgIGxhbmUsXG4gICAgICAgICAgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksXG4gICAgICAgICAgeTogdGhpcy5lbmVteVNwYXduWShlbnRpdHkpLFxuICAgICAgICAgIGhlYWx0aDogZGVmaW5pdGlvbi5oZWFsdGggKiB0aGlzLmFjdGl2ZVRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLFxuICAgICAgICAgIG1heEhlYWx0aDogZGVmaW5pdGlvbi5oZWFsdGggKiB0aGlzLmFjdGl2ZVRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllcixcbiAgICAgICAgICByb3dJZDogZW50aXR5LnJvd0luZGV4LFxuICAgICAgICAgIGFjdG9yOiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQpLFxuICAgICAgICAgIGR5aW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLnNwYXduU291bmQpIHRoaXMucGxheShkZWZpbml0aW9uLnNwYXduU291bmQpO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uZ3VuLlwiKSkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBlbnRpdHkuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmd1bi5cIi5sZW5ndGgpO1xuICAgICAgICBpZiAoIShjYW5kaWRhdGUgaW4gZ3VuRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBndW4gaWQgXCIke2VudGl0eS5pZH1cIi5gKTtcbiAgICAgICAgdGhpcy5zcGF3bkd1blBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWSgxMjAsIGVudGl0eSksIGd1bklkOiBjYW5kaWRhdGUgYXMgR3VuSWQsIGxldmVsOiAxLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLmxlbmd0aCk7XG4gICAgICAgIGlmICghKGNhbmRpZGF0ZSBpbiBzaGllbGRGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgdXNlcyB1bmtub3duIHNoaWVsZCBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICB0aGlzLnNwYXduU2hpZWxkUGlja3VwKHsgbGFuZSwgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksIHk6IHRoaXMucGlja3VwU3Bhd25ZKDEyMCwgZW50aXR5KSwgc2hpZWxkSWQ6IGNhbmRpZGF0ZSBhcyBTaGllbGRJZCwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIubGVuZ3RoKTtcbiAgICAgICAgaWYgKCEoY2FuZGlkYXRlIGluIHN3b3JkRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBzd29yZCBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICB0aGlzLnNwYXduU3dvcmRQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoMTIwLCBlbnRpdHkpLCBzd29yZElkOiBjYW5kaWRhdGUgYXMgU3dvcmRJZCwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHtcbiAgICAgICAgdGhpcy5zcGF3bk11bHRpcGxpZXJQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoMTI1LCBlbnRpdHkpLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGVudGl0eSBpZCBcIiR7ZW50aXR5LmlkfVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGxhbmUgcnVubmVyLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlyZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuKSByZXR1cm47XG4gICAgY29uc3QgeyBpZDogZ3VuSWQsIGxldmVsOiBndW5MZXZlbCB9ID0gdGhpcy5hY3RpdmVCeUZhbWlseS5ndW47XG4gICAgY29uc3QgZ3VuID0gZ3VuRmFtaWx5Lm1lbWJlcnNbZ3VuSWRdO1xuICAgIGNvbnN0IHR1bmluZyA9IGd1bi5sZXZlbHMuZmluZChpdGVtID0+IGl0ZW0ubGV2ZWwgPT09IGd1bkxldmVsKSA/PyBndW4ubGV2ZWxzWzBdO1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCB0aGlzLnNjYWxlKCkpLm1hcChwb2ludCA9PiAoeyB4OiBwb2ludC54LCB5OiB0aGlzLnBsYXllclkoKSAtIDIwICogdGhpcy5zY2FsZSgpIH0pKTtcbiAgICB0aGlzLmd1blNpbXVsYXRpb24uZmlyZShndW4sIHR1bmluZywgdGhpcy5wbGF5ZXJMYW5lLCBwb2ludHMsIHRoaXMuY29tYmF0Tm93LCB0aGlzLnNjYWxlKCkpO1xuICAgIHRoaXMuY29vbGRvd24gKz0gMSAvIHR1bmluZy5maXJlUmF0ZVBlclNlY29uZDtcbiAgICB0aGlzLnBsYXlHdW5GaXJlKGd1bklkKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvamVjdGlsZXMoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ3VuU2ltdWxhdGlvbi51cGRhdGVQcm9qZWN0aWxlcyhkZWx0YSwgdGhpcy5jb21iYXROb3csIHRoaXMuZW5lbWllcy5tYXAoZW5lbXkgPT4gT2JqZWN0LmFzc2lnbihlbmVteSwge1xuICAgICAgcmFkaXVzOiB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgIH0pKSwgeyB0b3A6IC00MCAqIHRoaXMuc2NhbGUoKSwgbGVmdDogLTQwLCByaWdodDogdGhpcy5jYW52YXMud2lkdGggKyA0MCB9LCAoc2hvdCwgZW5lbXkpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVFbmVteSA9IGVuZW15IGFzIEVuZW15ICYgeyByYWRpdXM6IG51bWJlciB9O1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzb2x2ZUVuZW15RGFtYWdlKHtcbiAgICAgICAgZW5lbXk6IGdhbWVFbmVteSxcbiAgICAgICAgZWZmZWN0czogdGhpcy5lbmVteUV4aXRFZmZlY3RzLFxuICAgICAgICBpbXBhY3RNYWduaXR1ZGU6IHNob3QuZGFtYWdlICsgc2hvdC5rbm9ja2JhY2sgKiAuMDYsXG4gICAgICAgIGNvbG9yOiB0aGlzLmVuZW15RXhpdENvbG9yKGdhbWVFbmVteSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQua2lsbGVkKSB7XG4gICAgICAgIHRoaXMua2lsbHMrKztcbiAgICAgICAgdGhpcy5wbGF5KHJlc3VsdC5kZWZpbml0aW9uLmRlYXRoU291bmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5KFwiUHJvamVjdGlsZUhpdFwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiRW5lbXlIaXRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU5lYXJQbGF5ZXJFZmZlY3RzKGRlbHRhOiBudW1iZXIsIHNoaWVsZERlZjogKHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycylbU2hpZWxkSWRdIHwgbnVsbCwgc3dvcmREZWY6ICh0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycylbU3dvcmRJZF0gfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcHggPSB0aGlzLnNxdWFkLng7XG4gICAgY29uc3QgcHkgPSB0aGlzLnBsYXllclkoKTtcbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgJiYgc2hpZWxkRGVmKSB7XG4gICAgICBjb25zdCBzaGllbGRTdGF0ZSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkO1xuICAgICAgY29uc3Qgc2hpZWxkVGhyZWF0cyA9IHF1ZXJ5TmVhcmJ5VGhyZWF0cyh0aGlzLmVuZW1pZXMsIHtcbiAgICAgICAgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LFxuICAgICAgICBsYW5lOiB0aGlzLnBsYXllckxhbmUsXG4gICAgICAgIHJhbmdlOiBzaGllbGREZWYucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogZmFsc2UsXG4gICAgICAgIHB1cnBvc2U6IFwic2hpZWxkXCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2hpZWxkUmVzdWx0ID0gdGlja1NoaWVsZChzaGllbGRTdGF0ZSwgc2hpZWxkRGVmLCBzaGllbGRUaHJlYXRzLCBweCwgcHksIHRoaXMuY29tYmF0Tm93LCBkZWx0YSk7XG4gICAgICBpZiAoc2hpZWxkUmVzdWx0LnB1c2hFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW5lbXkgb2YgdGhpcy5lbmVtaWVzKSB7XG4gICAgICAgICAgaWYgKCFzaGllbGRSZXN1bHQucHVzaEVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICAgICAgY29uc3QgZHggPSBlbmVteS54IC0gcHg7XG4gICAgICAgICAgY29uc3QgZHkgPSBlbmVteS55IC0gcHk7XG4gICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAxO1xuICAgICAgICAgIGVuZW15LnggKz0gKGR4IC8gZGlzdCkgKiBzaGllbGRSZXN1bHQucHVzaERpc3RhbmNlICogdGhpcy5zY2FsZSgpO1xuICAgICAgICAgIGVuZW15LnkgKz0gKGR5IC8gZGlzdCkgKiBzaGllbGRSZXN1bHQucHVzaERpc3RhbmNlICogdGhpcy5zY2FsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheShcIlNoaWVsZFB1bHNlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlRW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICAgICAgaWYgKGVuZW15LmR5aW5nIHx8ICFzaGllbGRSZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICAgICAgZW5lbXkuaGVhbHRoIC09IHNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlQW1vdW50ICogZGVsdGE7XG4gICAgICAgICAgaWYgKGVuZW15LmhlYWx0aCA8PSAwKSB0aGlzLmRlc3Ryb3lFbmVteShlbmVteSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCAmJiBzd29yZERlZikge1xuICAgICAgY29uc3Qgc3dvcmRTdGF0ZSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQ7XG4gICAgICBjb25zdCBzd29yZFRocmVhdHMgPSBxdWVyeU5lYXJieVRocmVhdHModGhpcy5lbmVtaWVzLCB7XG4gICAgICAgIG9yaWdpbjogeyB4OiBweCwgeTogcHkgfSxcbiAgICAgICAgbGFuZTogdGhpcy5wbGF5ZXJMYW5lLFxuICAgICAgICByYW5nZTogc3dvcmREZWYucmFuZ2UgKiB0aGlzLnNjYWxlKCksXG4gICAgICAgIGluY2x1ZGVBZGphY2VudExhbmVzOiAoc3dvcmREZWYudGFyZ2V0aW5nTW9kZSBhcyBTd29yZFRhcmdldGluZ01vZGUpID09PSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgICAgbWF4VGFyZ2V0czogc3dvcmREZWYubWF4VGFyZ2V0cyxcbiAgICAgICAgcHVycG9zZTogXCJzd29yZFwiLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBzd29yZFJlc3VsdCA9IHRpY2tTd29yZChzd29yZFN0YXRlLCBzd29yZERlZiwgc3dvcmRUaHJlYXRzLCBweCwgcHksIHRoaXMuY29tYmF0Tm93LCBkZWx0YSwgbmVvblBhbGV0dGVbc3dvcmREZWYuY29sb3JdKTtcbiAgICAgIGlmIChzd29yZFJlc3VsdC5zd2luZ1RyaWdnZXJlZCAmJiBzd29yZFJlc3VsdC5oaXRFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGxheVN3b3JkU3dpbmcoc3dvcmRTdGF0ZS5zd29yZElkKTtcbiAgICAgICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4udGhpcy5lbmVtaWVzXSkge1xuICAgICAgICAgIGlmIChlbmVteS5keWluZyB8fCAhc3dvcmRSZXN1bHQuaGl0RW5lbXlJZHMuaW5jbHVkZXMoZW5lbXkuaWQpKSBjb250aW51ZTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNvbHZlRW5lbXlEYW1hZ2Uoe1xuICAgICAgICAgICAgZW5lbXksXG4gICAgICAgICAgICBlZmZlY3RzOiB0aGlzLmVuZW15RXhpdEVmZmVjdHMsXG4gICAgICAgICAgICBkYW1hZ2U6IHN3b3JkUmVzdWx0LmRhbWFnZSxcbiAgICAgICAgICAgIGltcGFjdE1hZ25pdHVkZTogc3dvcmRSZXN1bHQuZGFtYWdlLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuZW5lbXlFeGl0Q29sb3IoZW5lbXkpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZXN1bHQua2lsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLmtpbGxzKys7XG4gICAgICAgICAgICB0aGlzLnBsYXkocmVzdWx0LmRlZmluaXRpb24uZGVhdGhTb3VuZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgdGhpcy5wbGF5KFwiU3dvcmRIaXRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVuZW1pZXMoZGVsdGE6IG51bWJlciwgc2hpZWxkRGVmOiAodHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzKVtTaGllbGRJZF0gfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3Qgc2xvd0VuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgY29uc3QgcHggPSB0aGlzLnNxdWFkLng7XG4gICAgY29uc3QgcHkgPSB0aGlzLnBsYXllclkoKTtcbiAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICBlbmVteS5hY3Rvci5zZXRWZWxvY2l0eSgwLCAwKS51cGRhdGUoZGVsdGEpO1xuICAgICAgY29uc3QgZWZmZWN0aXZlID0gc2xvd0VuZW15SWRzLmhhcyhlbmVteS5pZClcbiAgICAgICAgPyBlbmVteS5zcGVlZE11bHRpcGxpZXIgKiAoc2hpZWxkRGVmPy5zbG93TXVsdGlwbGllciA/PyAxKVxuICAgICAgICA6IGVuZW15LnNwZWVkTXVsdGlwbGllcjtcbiAgICAgIGVuZW15LnkgKz0gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnNwZWVkICogZWZmZWN0aXZlICogdGhpcy5zY2FsZSgpICogZGVsdGEgLSBlbmVteS5hY3Rvci55ICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gMi41O1xuICAgICAgZW5lbXkuYWN0b3IubW92ZVRvKDAsIDApO1xuICAgICAgaWYgKGVuZW15LmR5aW5nICYmIGVuZW15LmFjdG9yLmRpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoZW5lbXkuZHlpbmcpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgJiYgc2hpZWxkRGVmKSB7XG4gICAgICAgIGNvbnN0IHNoaWVsZENvbnRhY3QgPSByZXNvbHZlU2hpZWxkQ29udGFjdCh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCwgc2hpZWxkRGVmLCBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICAgICAgcmFkaXVzOiB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgICAgICB9KSwgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgdGhpcy5zY2FsZSgpKTtcbiAgICAgICAgaWYgKHNoaWVsZENvbnRhY3QuYWJzb3JiZWQpIHtcbiAgICAgICAgICBpZiAoc2hpZWxkQ29udGFjdC5lbmVteURlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95RW5lbXkoZW5lbXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmVteS5hY3Rvci5pbXBhY3QoeyBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LCBtYWduaXR1ZGU6IHNoaWVsZENvbnRhY3QuZGFtYWdlQWJzb3JiZWQgLyB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkuaW1wYWN0UmVzaXN0YW5jZSB9KTtcbiAgICAgICAgICAgIHRoaXMucGxheShcIlNoaWVsZEltcGFjdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgaGl0SW5kZXggPSB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgdGhpcy5zY2FsZSgpKS5maW5kSW5kZXgocG9pbnQgPT4gTWF0aC5oeXBvdChwb2ludC54IC0gZW5lbXkueCwgcG9pbnQueSAtIGVuZW15LnkpIDw9IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5yYWRpdXMgKiAzLjIpO1xuICAgICAgaWYgKGhpdEluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgdGhpcy5zY2FsZSgpKVtoaXRJbmRleF07XG4gICAgICAgIGNvbnN0IGFjdG9yID0gdGhpcy5wbGF5ZXJBY3RvcnNbaGl0SW5kZXhdID8/IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSk7XG4gICAgICAgIGFjdG9yLmV4cGxvZGVNYWduaXR1ZGUgPSAuNTU7XG4gICAgICAgIGFjdG9yLmRpc3Bvc2UoTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSk7XG4gICAgICAgIHRoaXMuZXhwbG9kaW5nUGxheWVycy5wdXNoKHsgYWN0b3IsIHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSk7XG4gICAgICAgIHRoaXMucGxheWVyQWN0b3JzLnNwbGljZShoaXRJbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc3F1YWQucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiUGxheWVyRGFtYWdlXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJTcXVhZE1lbWJlckxvc3RcIik7XG4gICAgICAgIGlmICh0aGlzLnNxdWFkLmNvdW50ID09PSAxKSB0aGlzLnBsYXkoXCJMb3dIZWFsdGhXYXJuaW5nXCIpO1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBcImdhbWVcIiAmJiB0aGlzLnNxdWFkLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVhc29uID0gXCJUaGUgZW50aXJlIHNxdWFkIHdhcyBkZXN0cm95ZWQgb24gY29udGFjdC5cIjtcbiAgICAgICAgICB0aGlzLmZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5lbXkueSA+PSB0aGlzLnBsYXllclkoKSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBcImdhbWVcIikge1xuICAgICAgICAgIHRoaXMuYnJlYWNoZXMrKztcbiAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgICAgdGhpcy5wbGF5KFwiRW5lbXlFc2NhcGVkXCIpO1xuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlYXNvbiA9IFwiQW4gZW5lbXkgcGFzc2VkIHRoZSBkZWZlbnNlIGxpbmUuXCI7XG4gICAgICAgICAgdGhpcy5maW5pc2goZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5lbXkueSA+IHRoaXMuY2FudmFzLmhlaWdodCArIHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5yYWRpdXMgKiAyKSB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQaWNrdXBzKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5ndW5QaWNrdXBzXSkge1xuICAgICAgcGlja3VwLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSB7IGlkOiBwaWNrdXAuZ3VuSWQsIGxldmVsOiBwaWNrdXAubGV2ZWwgfTtcbiAgICAgICAgdGhpcy5jb29sZG93biA9IDA7XG4gICAgICAgIHRoaXMuZ3VuUGlja3Vwcy5zcGxpY2UodGhpcy5ndW5QaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cEd1blwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLmd1blBpY2t1cHMuc3BsaWNlKHRoaXMuZ3VuUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLnNoaWVsZFBpY2t1cHNdKSB7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgY29uc3QgZGVmID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnNoaWVsZElkXTtcbiAgICAgICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBuZXcgU2hpZWxkU3RhdGUocGlja3VwLnNoaWVsZElkLCBkZWYubWF4Q2hhcmdlcyk7XG4gICAgICAgIHRoaXMuc2hpZWxkUGlja3Vwcy5zcGxpY2UodGhpcy5zaGllbGRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFNoaWVsZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiU2hpZWxkXCIpO1xuICAgICAgfSBlbHNlIGlmIChwaWNrdXAueSA+IHRoaXMuY2FudmFzLmhlaWdodCkgdGhpcy5zaGllbGRQaWNrdXBzLnNwbGljZSh0aGlzLnNoaWVsZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5zd29yZFBpY2t1cHNdKSB7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG5ldyBTd29yZFN0YXRlKHBpY2t1cC5zd29yZElkKTtcbiAgICAgICAgdGhpcy5zd29yZFBpY2t1cHMuc3BsaWNlKHRoaXMuc3dvcmRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFN3b3JkXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJXZWFwb25SZWFkeVwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMuc3dvcmRQaWNrdXBzLnNwbGljZSh0aGlzLnN3b3JkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLm11bHRpcGxpZXJzXSkge1xuICAgICAgcGlja3VwLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgdGhpcy5zcXVhZC5hZGQobXVsdGlwbGllckZhbWlseS5tZW1iZXJzW3BpY2t1cC5tdWx0aXBsaWVySWRdLnNxdWFkQWRkZWQpO1xuICAgICAgICB0aGlzLnN5bmNQbGF5ZXJBY3RvcnMoKTtcbiAgICAgICAgdGhpcy5tdWx0aXBsaWVycy5zcGxpY2UodGhpcy5tdWx0aXBsaWVycy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBNdWx0aXBsaWVyXCIpO1xuICAgICAgfSBlbHNlIGlmIChwaWNrdXAueSA+IHRoaXMuY2FudmFzLmhlaWdodCkgdGhpcy5tdWx0aXBsaWVycy5zcGxpY2UodGhpcy5tdWx0aXBsaWVycy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluaXNoKHdvbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIGNvbnN0IHRpdGxlID0gd29uID8gXCJGTEFXTEVTUyBSVU5cIiA6IFwiVFJBQ0sgRkFJTEVEXCI7XG4gICAgY29uc3QgZGV0YWlsID0gd29uID8gXCJObyBlbmVteSB0b3VjaGVkIG9yIGVzY2FwZWQgcGFzdCB5b3UuXCIgOiB0aGlzLmZhaWx1cmVSZWFzb24gfHwgYCR7dGhpcy5icmVhY2hlc30gZW5lbXkke3RoaXMuYnJlYWNoZXMgPT09IDEgPyBcIlwiIDogXCJpZXNcIn0gYnJlYWNoZWQgdGhlIGRlZmVuc2UuYDtcbiAgICBpZiAod29uKSB7XG4gICAgICB0aGlzLnZpY3RvcnkgPSBuZXcgTmVvblZpY3RvcnlFeHBlcmllbmNlKHtcbiAgICAgICAgY2VudGVyWDogdGhpcy5jYW52YXMud2lkdGggLyAyLFxuICAgICAgICBjZW50ZXJZOiB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuMzgsXG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHBhcnRpY2xlQ291bnQ6IDEyMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wbGF5KFwiUHV6emxlQ29tcGxldGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheShcIkdhbWVPdmVyXCIpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZVRyYWNrID0gbnVsbDtcbiAgICB0aGlzLm9uRmluaXNoPy4oeyB3b24sIHRpdGxlLCBkZXRhaWwsIGJyZWFjaGVzOiB0aGlzLmJyZWFjaGVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jUGxheWVyQWN0b3JzKCk6IHZvaWQge1xuICAgIHdoaWxlICh0aGlzLnBsYXllckFjdG9ycy5sZW5ndGggPCB0aGlzLnNxdWFkLmNvdW50KSB0aGlzLnBsYXllckFjdG9ycy5wdXNoKG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSkpO1xuICAgIGlmICh0aGlzLnBsYXllckFjdG9ycy5sZW5ndGggPiB0aGlzLnNxdWFkLmNvdW50KSB0aGlzLnBsYXllckFjdG9ycy5sZW5ndGggPSB0aGlzLnNxdWFkLmNvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVNjZW5lQmFja2dyb3VuZCgpOiB2b2lkIHtcbiAgICBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQodGhpcy5zdGFnZUVsZW1lbnQsIHRoaXMudHJhY2tTY2VuZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5lbXlFeGl0Q29sb3IoZW5lbXk6IEVuZW15KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5lbXkuYWN0b3IuY29sb3IgPz8gZW5lbXkuYWN0b3Iuc2hhcGUuY29sb3I7XG4gIH1cblxuICBwcml2YXRlIGVuZW15RGVmaW5pdGlvbihlbmVteTogRW5lbXkpOiAodHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzKVtPcmJJZF0ge1xuICAgIHJldHVybiBvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUVuZW15KGVuZW15OiBFbmVteSk6IHZvaWQge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZlYXRFbmVteShlbmVteSwgdGhpcy5lbmVteUV4aXRFZmZlY3RzLCB0aGlzLmVuZW15RXhpdENvbG9yKGVuZW15KSk7XG4gICAgdGhpcy5raWxscysrO1xuICAgIHRoaXMucGxheShkZWZpbml0aW9uLmRlYXRoU291bmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlYKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmxhbmVYKGVudGl0eS5zaWRlID09PSBcImxlZnRcIiA/IDAgOiAxKSArIChlbnRpdHkubGFuZUluZGV4IC0gMiArIChlbnRpdHkuY29sdW1uU3BhbiAtIDEpIC8gMikgKiAxNSAqIHRoaXMuc2NhbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5QmFzZVkoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGVudGl0eS5pZCA9PT0gXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiA/IDEyNSA6IGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLlwiKSA/IDEyMCA6IDExMDtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5U3BlZWQoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIChlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZChlbnRpdHkuaWQpPy5kZWZpbml0aW9uLnNwZWVkID8/IDcyKSAqIGVudGl0eS5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCk7XG4gIH1cblxuICBwcml2YXRlIHZpc3VhbFNwYXduWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB3b3JsZFlGb3JQcm9qZWN0ZWRZKHRoaXMuY2FudmFzLmhlaWdodCAqIC4xNCwgdGhpcy5jYW1lcmFTZXR0aW5ncywgeyBoZWlnaHQ6IHRoaXMuY2FudmFzLmhlaWdodCwgcGxheWVyWTogdGhpcy5wbGF5ZXJZKCkgfSk7XG4gIH1cblxuICBwcml2YXRlIGVuZW15U3Bhd25ZKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVudGl0eUJhc2VZKGVudGl0eSkgKiB0aGlzLnNjYWxlKCkgLSB0aGlzLmVudGl0eVNwZWVkKGVudGl0eSkgKiB0aGlzLnNwYXduTGVhZFNlY29uZHMoZW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgcGlja3VwU3Bhd25ZKGJhc2VZOiBudW1iZXIsIGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiBiYXNlWSAqIHRoaXMuc2NhbGUoKSAtIHRoaXMuZW50aXR5U3BlZWQoZW50aXR5KSAqIHRoaXMuc3Bhd25MZWFkU2Vjb25kcyhlbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGF3bkxlYWRTZWNvbmRzKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbihlbnRpdHkuZGlzdGFuY2VGcm9tUGxheWVyLCBNYXRoLm1heCgwLCAodGhpcy5lbnRpdHlCYXNlWShlbnRpdHkpICogdGhpcy5zY2FsZSgpIC0gdGhpcy52aXN1YWxTcGF3blkoKSkgLyB0aGlzLmVudGl0eVNwZWVkKGVudGl0eSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGxheShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgYWx0ZXJuYXRpdmVzID0gc291bmRBbHRlcm5hdGl2ZUNvdW50c1tpZF0gPz8gMDtcbiAgICBpZiAoYWx0ZXJuYXRpdmVzID4gMCAmJiB0aGlzLnNvdW5kPy5wbGF5Um90YXRlZCkgdGhpcy5zb3VuZC5wbGF5Um90YXRlZChpZCwgYWx0ZXJuYXRpdmVzKTtcbiAgICBlbHNlIHRoaXMuc291bmQ/LnBsYXkoaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5R3VuRmlyZShndW5JZDogR3VuSWQpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoZ3VuRmlyZVNvdW5kSWRzW2d1bklkXSk7XG4gIH1cblxuICBwcml2YXRlIHBsYXlTd29yZFN3aW5nKHN3b3JkSWQ6IFN3b3JkSWQpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoc3dvcmRTd2luZ1NvdW5kSWRzW3N3b3JkSWRdKTtcbiAgfVxuXG4gIHByaXZhdGUgcGxheVBpY2t1cChpZDogXCJQaWNrdXBHdW5cIiB8IFwiUGlja3VwU2hpZWxkXCIgfCBcIlBpY2t1cFN3b3JkXCIgfCBcIlBpY2t1cE11bHRpcGxpZXJcIik6IHZvaWQge1xuICAgIHRoaXMucGxheShcIlBpY2t1cFwiKTtcbiAgICB0aGlzLnBsYXkoaWQpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZSwgZ2V0TmVvblNoYXBlLCB0eXBlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IHRyYWNrRmFtaWx5LCB0eXBlIFRyYWNrRmFtaWx5SWQsIHR5cGUgVHJhY2tJZCB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBiaW5kU3F1YWRJbnB1dCB9IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgeyBOZW9uU3dhcm1TaW11bGF0aW9uIH0gZnJvbSBcIi4vc2ltdWxhdGlvbi9OZW9uU3dhcm1TaW11bGF0aW9uXCI7XG5pbXBvcnQgeyBhcHBseVBvcnRyYWl0U3RhZ2UsIGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGxhbmVSdW5uZXJWaWV3cG9ydCwgdHlwZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgfSBmcm9tIFwiLi92aWV3cG9ydFwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PihcIiNnYW1lLWNhbnZhc1wiKSE7XG5jb25zdCB0cmFja1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3RyYWNrLXNlbGVjdFwiKSE7XG5jb25zdCB0cmFja0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiN0cmFjay1saXN0XCIpITtcbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3N0YXR1c1wiKSE7XG5jb25zdCBydW5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNydW4tc3RhdHVzXCIpITtcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdFwiKSE7XG5jb25zdCByZXN1bHRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdC10aXRsZVwiKSE7XG5jb25zdCByZXN1bHREZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXN1bHQtZGV0YWlsXCIpITtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZXJyb3JcIikhO1xuY29uc3QgZGV2ZWxvcGVyVG9vbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNkZXZlbG9wZXItdG9vbHNcIikhO1xuY29uc3QgZ2FtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNnYW1lXCIpITtcbmNvbnN0IGNhbWVyYUxhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2NhbWVyYS1sYWJcIikhO1xuY29uc3QgY2FtZXJhT3V0cHV0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KFwiI2NhbWVyYS1vdXRwdXQtdGV4dFwiKSE7XG5jb25zdCB1cmxPcHRpb25zID0gd2luZG93Lkp1c3RUaGVHYW1lc1BsZWFzZT8udXJsT3B0aW9ucztcbmNvbnN0IGRldmVsb3Blck1vZGUgPSB1cmxPcHRpb25zPy5pc0VuYWJsZWQoXCJkZXZcIikgPz8gZmFsc2U7XG5jb25zdCBjYW1lcmFDb250cm9sc01vZGUgPSBkZXZlbG9wZXJNb2RlIHx8ICh1cmxPcHRpb25zPy5pc0VuYWJsZWQoXCJjYW1lcmFjb250cm9sc1wiKSA/PyBmYWxzZSk7XG5jb25zdCBkZWZhdWx0VHJhY2tTY2VuZUlkID0gT2JqZWN0LnZhbHVlcyh0cmFja0ZhbWlseS5mYW1pbGllcylbMF0uZW52aXJvbm1lbnQuc2NlbmVJZDtcbmNvbnN0IHRyYWNrU2hhcGVJZHNCeUZhbWlseTogUmVjb3JkPFRyYWNrRmFtaWx5SWQsIHJlYWRvbmx5IHN0cmluZ1tdPiA9IHtcbiAgbmVvbk5lYnVsYWU6IFtcImh1bnRlci1leWVcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiZWxpdGUtc3RhclwiXSxcbiAgYXVyb3JhOiBbXCJ0cmljay12b3J0ZXhcIiwgXCJlbGl0ZS13aW5nc1wiLCBcInRhbmstcmVhY3RvclwiXSxcbn07XG5cbmRldmVsb3BlclRvb2xzLmhpZGRlbiA9ICFkZXZlbG9wZXJNb2RlO1xuY2FtZXJhTGFiLmhpZGRlbiA9ICFjYW1lcmFDb250cm9sc01vZGU7XG5hcHBseVBvcnRyYWl0U3RhZ2UoZ2FtZUVsZW1lbnQsIGxhbmVSdW5uZXJWaWV3cG9ydCk7XG5cbmNvbnN0IGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgfTtcbmNvbnN0IGNhbWVyYVNldHRpbmdzT3V0cHV0ID0gKCk6IHN0cmluZyA9PlxuICBgY2FtZXJhOiBoZWlnaHQ9JHtjYW1lcmFTZXR0aW5ncy5oZWlnaHQudG9GaXhlZCgwKX0sIGxvb2tBbmdsZURlZ3JlZXM9JHtjYW1lcmFTZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzLnRvRml4ZWQoMCl9LCBmb2xsb3dEaXN0YW5jZT0ke2NhbWVyYVNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlLnRvRml4ZWQoMCl9LCB6b29tPSR7Y2FtZXJhU2V0dGluZ3Muem9vbS50b0ZpeGVkKDIpfSwgaG9yaXpvbj0ke2NhbWVyYVNldHRpbmdzLmhvcml6b24udG9GaXhlZCgyKX1gO1xuY29uc3Qgc3luY0NhbWVyYU91dHB1dCA9ICgpOiB2b2lkID0+IHtcbiAgY2FtZXJhT3V0cHV0VGV4dC52YWx1ZSA9IGNhbWVyYVNldHRpbmdzT3V0cHV0KCk7XG59O1xuY29uc3QgYmluZENhbWVyYVNsaWRlciA9IChpZDogc3RyaW5nLCBrZXk6IGtleW9mIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyk6IHZvaWQgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oaWQpITtcbiAgaW5wdXQudmFsdWUgPSBTdHJpbmcoY2FtZXJhU2V0dGluZ3Nba2V5XSk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgY2FtZXJhU2V0dGluZ3Nba2V5XSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XG4gICAgc3luY0NhbWVyYU91dHB1dCgpO1xuICB9KTtcbn07XG5iaW5kQ2FtZXJhU2xpZGVyKFwiI2NhbWVyYS1oZWlnaHRcIiwgXCJoZWlnaHRcIik7XG5iaW5kQ2FtZXJhU2xpZGVyKFwiI2NhbWVyYS1sb29rXCIsIFwibG9va0FuZ2xlRGVncmVlc1wiKTtcbmJpbmRDYW1lcmFTbGlkZXIoXCIjY2FtZXJhLWJhY2tcIiwgXCJmb2xsb3dEaXN0YW5jZVwiKTtcbmJpbmRDYW1lcmFTbGlkZXIoXCIjY2FtZXJhLXpvb21cIiwgXCJ6b29tXCIpO1xuYmluZENhbWVyYVNsaWRlcihcIiNjYW1lcmEtaG9yaXpvblwiLCBcImhvcml6b25cIik7XG5zeW5jQ2FtZXJhT3V0cHV0KCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjYW1lcmEtb3V0cHV0XCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBvdXRwdXQgPSBjYW1lcmFTZXR0aW5nc091dHB1dCgpO1xuICBjYW1lcmFPdXRwdXRUZXh0LnZhbHVlID0gb3V0cHV0O1xuICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQob3V0cHV0KS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xufSk7XG5cbnRyeSB7XG4gIGNvbnN0IHNpbSA9IGF3YWl0IE5lb25Td2FybVNpbXVsYXRpb24uY3JlYXRlKHtcbiAgICBtb2RlOiBcImdhbWVcIixcbiAgICBjYW52YXMsXG4gICAgc3RhZ2VFbGVtZW50OiBnYW1lRWxlbWVudCxcbiAgICBjYW1lcmFTZXR0aW5ncyxcbiAgICBzb3VuZDogd2luZG93LmdhbWVBdWRpbyxcbiAgICBzY2VuZUlkOiBkZWZhdWx0VHJhY2tTY2VuZUlkLFxuICAgIG9uUnVuU3RhdHVzOiB2YWx1ZSA9PiB7XG4gICAgICBydW5TdGF0dXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9LFxuICAgIG9uRmluaXNoOiBmaW5pc2ggPT4ge1xuICAgICAgcmVzdWx0LmhpZGRlbiA9IGZhbHNlO1xuICAgICAgcmVzdWx0VGl0bGUudGV4dENvbnRlbnQgPSBmaW5pc2gudGl0bGU7XG4gICAgICByZXN1bHREZXRhaWwudGV4dENvbnRlbnQgPSBmaW5pc2guZGV0YWlsO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHRyYWNrUm91dGUgPSAodHJhY2tJZDogVHJhY2tJZCk6IHN0cmluZyA9PiBgI3RyYWNrLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHRyYWNrSWQpfWA7XG4gIGNvbnN0IG5hdmlnYXRlVG9UcmFja3MgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGxvY2F0aW9uLmhhc2ggPT09IFwiI3RyYWNrc1wiKSB7XG4gICAgICByZXNldFRvVHJhY2tzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvY2F0aW9uLmhhc2ggPSBcInRyYWNrc1wiO1xuICB9O1xuICBjb25zdCB0cmFja0lkRnJvbVJvdXRlID0gKCk6IFRyYWNrSWQgfCBudWxsID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSBcIiN0cmFjay9cIjtcbiAgICBpZiAoIWxvY2F0aW9uLmhhc2guc3RhcnRzV2l0aChwcmVmaXgpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBkZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaGFzaC5zbGljZShwcmVmaXgubGVuZ3RoKSk7XG4gICAgcmV0dXJuIGNhbmRpZGF0ZSBpbiB0cmFja0ZhbWlseS5tZW1iZXJzID8gY2FuZGlkYXRlIGFzIFRyYWNrSWQgOiBudWxsO1xuICB9O1xuICBjb25zdCBzaGFwZU1hcmt1cCA9IChzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiwgaW5kZXg6IG51bWJlciwgY291bnQ6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSAyMiAtIGluZGV4ICogMjtcbiAgICBjb25zdCB4ID0gNDUgKyAoaW5kZXggLSAoY291bnQgLSAxKSAvIDIpICogMjE7XG4gICAgY29uc3QgeSA9IDE4ICsgTWF0aC5zaW4oaW5kZXgpICogMjtcbiAgICBjb25zdCBwb2ludHMgPSBzaGFwZS5wb2ludHMubWFwKChbcHgsIHB5XSkgPT4gYCR7KHggKyBweCAqIHNjYWxlICogLjQyKS50b0ZpeGVkKDEpfSwkeyh5ICsgcHkgKiBzY2FsZSAqIC40MikudG9GaXhlZCgxKX1gKS5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBob2xlID0gc2hhcGUuaG9sZXM/LlswXT8ubWFwKChbcHgsIHB5XSkgPT4gYCR7KHggKyBweCAqIHNjYWxlICogLjI0KS50b0ZpeGVkKDEpfSwkeyh5ICsgcHkgKiBzY2FsZSAqIC4yNCkudG9GaXhlZCgxKX1gKS5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBjb2xvckNsYXNzID0gaW5kZXggJSAzO1xuICAgIHJldHVybiBgPGcgY2xhc3M9XCJ0cmFjay1nbHlwaF9fc2hhcGUgdHJhY2stZ2x5cGhfX3NoYXBlLS0ke2NvbG9yQ2xhc3N9XCI+PHBvbHlnb24gcG9pbnRzPVwiJHtwb2ludHN9XCI+PC9wb2x5Z29uPiR7aG9sZSA/IGA8cG9seWdvbiBjbGFzcz1cInRyYWNrLWdseXBoX19ob2xlXCIgcG9pbnRzPVwiJHtob2xlfVwiPjwvcG9seWdvbj5gIDogXCJcIn08L2c+YDtcbiAgfTtcbiAgY29uc3QgdHJhY2tHbHlwaE1hcmt1cCA9IChmYW1pbHlJZDogVHJhY2tGYW1pbHlJZCwgdHJhY2tJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBzaGFwZUlkcyA9IHRyYWNrU2hhcGVJZHNCeUZhbWlseVtmYW1pbHlJZF0uc2xpY2UoMCwgdHJhY2tJbmRleCArIDEpO1xuICAgIGNvbnN0IHNoYXBlcyA9IHNoYXBlSWRzLm1hcChpZCA9PiBnZXROZW9uU2hhcGUoaWQpKS5maWx0ZXIoKHNoYXBlKTogc2hhcGUgaXMgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiBzaGFwZSAhPT0gdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gYFxuICAgICAgPHN2ZyBjbGFzcz1cInRyYWNrLWdseXBoXCIgdmlld0JveD1cIjAgMCA5MCAzOFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8bGluZSB4MT1cIjE4XCIgeTE9XCIzM1wiIHgyPVwiNzJcIiB5Mj1cIjMzXCI+PC9saW5lPlxuICAgICAgICAke3NoYXBlcy5tYXAoKHNoYXBlLCBpbmRleCkgPT4gc2hhcGVNYXJrdXAoc2hhcGUsIGluZGV4LCBzaGFwZXMubGVuZ3RoKSkuam9pbihcIlwiKX1cbiAgICAgIDwvc3ZnPmA7XG4gIH07XG4gIGNvbnN0IHJlbmRlclRyYWNrRmFtaWxpZXMgPSAoKTogdm9pZCA9PiB7XG4gICAgdHJhY2tMaXN0LmlubmVySFRNTCA9IE9iamVjdC5lbnRyaWVzKHRyYWNrRmFtaWx5LmZhbWlsaWVzKS5tYXAoKFtmYW1pbHlJZCwgZmFtaWx5XSkgPT4gYFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0cmFjay1mYW1pbHlcIiBhcmlhLWxhYmVsPVwiJHtmYW1pbHkubGFiZWx9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFjay1mYW1pbHlfX2hlYWRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyYWNrLWZhbWlseV9fc2NlbmVcIj4ke2dldExhbmVSdW5uZXJTY2VuZU5hbWUoZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxoMz4ke2ZhbWlseS5sYWJlbH08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRyYWNrLWZhbWlseV9fcm93XCI+XG4gICAgICAgICAgJHtmYW1pbHkudHJhY2tJZHMubWFwKCh0cmFja0lkLCB0cmFja0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IHRyYWNrRmFtaWx5Lm1lbWJlcnNbdHJhY2tJZF07XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cInRyYWNrLWNhcmRcIiBocmVmPVwiJHt0cmFja1JvdXRlKHRyYWNrSWQpfVwiIGRhdGEtdHJhY2s9XCIke3RyYWNrSWR9XCI+XG4gICAgICAgICAgICAgICAgJHt0cmFja0dseXBoTWFya3VwKGZhbWlseUlkIGFzIFRyYWNrRmFtaWx5SWQsIHRyYWNrSW5kZXgpfVxuICAgICAgICAgICAgICAgIDxzdHJvbmc+JHt0cmFjay5sYWJlbH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8Yj4ke3RyYWNrLmR1cmF0aW9uU2Vjb25kc31zPC9iPlxuICAgICAgICAgICAgICA8L2E+YDtcbiAgICAgICAgICB9KS5qb2luKFwiXCIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5gKS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0VG9UcmFja3MgPSAoKTogdm9pZCA9PiB7XG4gICAgc2ltLnJlc2V0KCk7XG4gICAgZ2FtZUVsZW1lbnQuZGF0YXNldC5wYWdlID0gXCJ0cmFja3NcIjtcbiAgICBnYW1lRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIik7XG4gICAgcmVzdWx0LmhpZGRlbiA9IHRydWU7XG4gICAgdHJhY2tTZWxlY3QuaGlkZGVuID0gZmFsc2U7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSB0cmFjayBmYW1pbHksIHRoZW4gcGljayBhIHJ1bi5cIjtcbiAgICBydW5TdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0VHJhY2sgPSAodHJhY2tJZDogVHJhY2tJZCk6IHZvaWQgPT4ge1xuICAgIGdhbWVFbGVtZW50LmRhdGFzZXQucGFnZSA9IFwiZ2FtZVwiO1xuICAgIHRyYWNrU2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgcmVzdWx0LmhpZGRlbiA9IHRydWU7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJUYXAgYSBzaWRlIHRvIHN3aXRjaCBsYW5lcy4gU21hbGwgam95c3RpY2sgbW90aW9uIGFpbXM7IGZ1bGwgbW90aW9uIGNyb3NzZXMgbGFuZXMuXCI7XG4gICAgc2ltLnN0YXJ0VHJhY2sodHJhY2tGYW1pbHkubWVtYmVyc1t0cmFja0lkXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUm91dGUgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdHJhY2tJZCA9IHRyYWNrSWRGcm9tUm91dGUoKTtcbiAgICBpZiAodHJhY2tJZCkgc3RhcnRUcmFjayh0cmFja0lkKTtcbiAgICBlbHNlIHJlc2V0VG9UcmFja3MoKTtcbiAgfTtcblxuICByZW5kZXJUcmFja0ZhbWlsaWVzKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2JhY2stdG8tdHJhY2tzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2aWdhdGVUb1RyYWNrcyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBoYW5kbGVSb3V0ZSk7XG4gIGlmICghbG9jYXRpb24uaGFzaCkgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgXCIjdHJhY2tzXCIpO1xuICBoYW5kbGVSb3V0ZSgpO1xuXG4gIGJpbmRTcXVhZElucHV0KGdhbWVFbGVtZW50LCBcIiNqb3lzdGlja1wiLCB7XG4gICAgbGFuZTogKCkgPT4gc2ltLnNuYXBzaG90KCkuc3F1YWQubGFuZSxcbiAgICBzZXRMYW5lOiBsYW5lID0+IHNpbS5zZXRTcXVhZExhbmUobGFuZSwgeyByZXF1aXJlQWN0aXZlVHJhY2s6IHRydWUgfSksXG4gICAgc2V0QWltOiB2YWx1ZSA9PiBzaW0uc2V0U3F1YWRBaW0odmFsdWUsIHsgcmVxdWlyZUFjdGl2ZVRyYWNrOiB0cnVlIH0pLFxuICAgIHJlbGVhc2VBaW06ICgpID0+IHNpbS5yZWxlYXNlQWltKCksXG4gIH0pO1xuXG4gIHNpbS5zdGFydExvb3AoKTtcbn0gY2F0Y2ggKGNhdXNlKSB7XG4gIGVycm9yLmhpZGRlbiA9IGZhbHNlO1xuICBlcnJvci50ZXh0Q29udGVudCA9IGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZS5tZXNzYWdlIDogU3RyaW5nKGNhdXNlKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBKdXN0VGhlR2FtZXNQbGVhc2U/OiB7XG4gICAgICB1cmxPcHRpb25zPzoge1xuICAgICAgICBpc0VuYWJsZWQobmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgIH07XG4gICAgfTtcbiAgICBnYW1lQXVkaW8/OiB7XG4gICAgICBwbGF5KGlkOiBzdHJpbmcpOiB2b2lkO1xuICAgICAgcGxheVJvdGF0ZWQoaWQ6IHN0cmluZywgYWx0ZXJuYXRpdmVzOiBudW1iZXIpOiB2b2lkO1xuICAgIH07XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLE1BQ3BFLE1BQU0sS0FBSyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3RDLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7QUFDM0MsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEQsQ0FBQztBQUVILElBQU0sT0FBTyxDQUFDLFFBQWdCLFFBQVEsTUFBSyxXQUFXLENBQUMsS0FBSyxLQUFLLE1BQy9ELE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDM0MsUUFBTSxTQUFTLElBQUksSUFBSSxRQUFRO0FBQy9CLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLO0FBQ3ZDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNO0FBQzVELENBQUM7QUFFSCxJQUFNLFVBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FB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SUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBRWxGLEtBQUssUUFBUSxZQUFZLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUMvRSxLQUFLLFFBQVEsWUFBWSxhQUFhLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FB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cUJBQ2hCLE1BQU0sZUFBZTtBQUFBO0FBQUEsSUFFaEMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQUE7QUFBQSxpQkFFSixFQUFFLEtBQUssRUFBRTtBQUFBLEVBQ3hCO0FBRUEsUUFBTSxnQkFBZ0IsTUFBWTtBQUNoQyxRQUFJLE1BQU07QUFDVixnQkFBWSxRQUFRLE9BQU87QUFDM0IsZ0JBQVksTUFBTSxlQUFlLGtCQUFrQjtBQUNuRCxXQUFPLFNBQVM7QUFDaEIsZ0JBQVksU0FBUztBQUNyQixXQUFPLGNBQWM7QUFDckIsY0FBVSxjQUFjO0FBQUEsRUFDMUI7QUFFQSxRQUFNLGFBQWEsQ0FBQyxZQUEyQjtBQUM3QyxnQkFBWSxRQUFRLE9BQU87QUFDM0IsZ0JBQVksU0FBUztBQUNyQixXQUFPLFNBQVM7QUFDaEIsV0FBTyxjQUFjO0FBQ3JCLFFBQUksV0FBVyxZQUFZLFFBQVEsT0FBTyxDQUFDO0FBQUEsRUFDN0M7QUFFQSxRQUFNLGNBQWMsTUFBWTtBQUM5QixVQUFNLFVBQVUsaUJBQWlCO0FBQ2pDLFFBQUksUUFBUyxZQUFXLE9BQU87QUFBQSxRQUMxQixlQUFjO0FBQUEsRUFDckI7QUFFQSxzQkFBb0I7QUFDcEIsV0FBUyxjQUFpQyxpQkFBaUIsRUFBRyxpQkFBaUIsU0FBUyxnQkFBZ0I7QUFDeEcsU0FBTyxpQkFBaUIsY0FBYyxXQUFXO0FBQ2pELE1BQUksQ0FBQyxTQUFTLEtBQU0sU0FBUSxhQUFhLE1BQU0sSUFBSSxTQUFTO0FBQzVELGNBQVk7QUFFWixpQkFBZSxhQUFhLGFBQWE7QUFBQSxJQUN2QyxNQUFNLE1BQU0sSUFBSSxTQUFTLEVBQUUsTUFBTTtBQUFBLElBQ2pDLFNBQVMsVUFBUSxJQUFJLGFBQWEsTUFBTSxFQUFFLG9CQUFvQixLQUFLLENBQUM7QUFBQSxJQUNwRSxRQUFRLFdBQVMsSUFBSSxZQUFZLE9BQU8sRUFBRSxvQkFBb0IsS0FBSyxDQUFDO0FBQUEsSUFDcEUsWUFBWSxNQUFNLElBQUksV0FBVztBQUFBLEVBQ25DLENBQUM7QUFFRCxNQUFJLFVBQVU7QUFDaEIsU0FBUyxPQUFPO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxjQUFjLGlCQUFpQixRQUFRLE1BQU0sVUFBVSxPQUFPLEtBQUs7QUFDM0U7IiwKICAibmFtZXMiOiBbImNhbnZhcyIsICJ3aWR0aCIsICJoZWlnaHQiLCAic2hhZGVyIiwgImhleCIsICJjYW52YXMiLCAiaGV4IiwgInNoYWRlciIsICJjYW52YXMiLCAic2hhZGVyIiwgImhleCIsICJjYW52YXMiLCAiY29sb3JzIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImxldmVsIiwgInJlc3VsdCIsICJyZXN1bHQiLCAicmVzdWx0IiwgInJvdGF0aW9uIiwgImVuZW15SWRGcm9tVHJhY2tJZCIsICJjYW1lcmFTZXR0aW5ncyIsICJsZXZlbCIsICJyZXN1bHQiXQp9Cg==

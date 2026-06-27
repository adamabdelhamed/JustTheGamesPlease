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
var laneRunnerSceneIds = ["neonHall"];
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
  const geometry = laneRunnerPerspective(width, height);
  addStandardLaneRunnerPerspective(primitives, geometry, standardLaneRunnerPalette, timeMs);
  addHallLaneSignals(primitives, geometry, timeMs);
  addHallFloorGlyphs(primitives, geometry, timeMs);
  addHallHorizonDetails(primitives, geometry, timeMs);
  addHallSidePanels(primitives, geometry, timeMs);
  addHallEnergyTraces(primitives, geometry, timeMs);
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

// projects/NeonSwarm/CombatDefinition/tracks/Track1.ts
var generatedTrack = {
  label: "Level 1: First Glow",
  description: "A gentle onboarding run: early tension, a quick power-up beat, then easy escalating waves for a first-time player.",
  durationSeconds: 25,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
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
.E... | ..E..
..... | .....
..... | ...E.
..G.. | .....
..P.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 1 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 1 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 1 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1
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
...E. | ..E..
..... | ...E.
..G.. | .....
..P.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.1 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.85 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.85 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1
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
.E... | ..E..
..... | ...E.
..E.. | .....
..... | ...b.
..G.. | .....
..P.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1 },
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
W.a.. | ....W
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
..I.. | ..T..
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
.E.E. | .E.E.
..... | .....
..2.. | .....
W.... | ....W
..E.. | ..E..
.E.E. | .....
..... | .E.E.
..E.. | ..E..
..... | .....
....b | .....
..T.. | .....
WE.E. | ..E.W
..E.. | .....
..... | .E.E.
.E.E. | ..E..
..... | .....
..J.. | .....
..... | .....
.E.E. | .E.E.
..E.. | ...P.
..... | ..EP.
.E.E. | ..EP.
..... | ...P.
..S.. | ...P.
..... | ...P.
.E.E. | .E.E.
..E.. | ..E..
..... | .....
.E.E. | ..E..
.P... | .E.E.
.PE.. | .....
.P... | .....
.PE.. | .E.E.
.P... | .....
.P... | ..K..
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
..E.. | .E.E.
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
.EE.. | ..E..
..... | .E.E.
.E... | .E...
..... | .....
..E.. | ..E..
...E. | .....
..H.. | ...E.
..E.. | ..E..
..... | .....
.E... | ...E.
..E.. | ..E..
..E.. | ..L..
..S.. | ..K..
..b.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.2 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "W": { id: "enemy.winger" },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.85 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.85 },
      "T": { id: "enemy.tank" },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.9 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.9 },
      "P": { id: "enemy.glassShield" },
      "K": { id: "pickup.weapon.gun.splitterRifle", speed: 0.95 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.95 },
      "c": { id: "pickup.weapon.sword.needleRapier", speed: 0.95 },
      "H": { id: "pickup.weapon.gun.needlerSmg" },
      "L": { id: "pickup.weapon.sword.cleaver" },
      "M": { id: "player.start" }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1
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

// projects/NeonSwarm/src/shapeVisuals.ts
var swarmShapes = {
  player: getNeonShape("arrow-classic"),
  enemy: getNeonShape("hunter-eye"),
  multiplier: getNeonShape("bruiser-cross"),
  gunPickup: getNeonShape("hex-fighter")
};
var actorInTopDownScene = (actor, x, y, size, overrides = {}) => ({ ...actor.renderInstance(overrides), x, y, size });
var shapeLabel = (text, position, fontSize, offset = 4) => ({ text, position, fontSize, offset, fontFamily: "Segoe UI, sans-serif", fontWeight: 700 });

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

// projects/NeonSwarm/src/enemyCatalog.ts
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
var shapeZoom = document.querySelector("#shape-zoom");
var gameElement = document.querySelector("#game");
applyPortraitStage(gameElement, laneRunnerViewport);
applyLaneRunnerSceneBackground(gameElement, "neonHall");
var audioId = (id) => `../../../../audio/${id}`;
var playSfx = (id) => window.gameAudio?.play(audioId(id));
var playRotatedSfx = (id, alternatives) => window.gameAudio?.playRotated(audioId(id), alternatives);
try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, laneRunnerViewport.logicalWidth, laneRunnerViewport.logicalHeight);
  const guns = gunFamily.members;
  const enemies = [];
  const gunSimulation = new GunSimulation();
  const projectiles = gunSimulation.projectiles;
  const pickups = [];
  const effects = gunSimulation.effects;
  const enemyExitEffects = [];
  const multipliers = [];
  const squad = new SquadModel();
  let playerLane = 0;
  const aimControl = new AutoAimControlState();
  let equippedGunId = "pulsePistol";
  let equippedLevel = 1;
  let cooldown = 0;
  let shotSequence = 0;
  let entitySequence = 0;
  let kills = 0;
  let lastFrame = performance.now();
  let recoil = 0;
  const pseudoRandom = (seed) => {
    const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return value - Math.floor(value);
  };
  const laneX = (lane) => canvas.width * (lane === 0 ? 0.32 : 0.68);
  const playerY = () => canvas.height * 0.82;
  const scale = () => 1;
  const playEnemySpawnSound = (id) => {
    if (!id) return;
    if (id === "Boss") playRotatedSfx("Boss", 1);
    else playSfx(id);
  };
  for (const [id, gun] of Object.entries(guns)) {
    gunSelect.add(new Option(gun.label, id));
  }
  gunSelect.value = equippedGunId;
  for (const [id, enemy] of Object.entries(orbFamily.members)) {
    enemySelect.add(new Option(enemy.label, id));
  }
  enemySelect.value = "basicOrb";
  const selectedLevel = () => {
    const levels = guns[equippedGunId].levels;
    return levels.find((level2) => level2.level === equippedLevel) ?? levels[0];
  };
  const updateReadout = () => {
    const gun = guns[equippedGunId];
    const level2 = selectedLevel();
    const enemy = orbFamily.members[enemySelect.value];
    weaponReadout.textContent = `${gun.label} \xB7 L${level2.level}`;
    scoreReadout.textContent = `Kills ${kills}`;
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
      ["Enemy speed", String(enemy.speed)]
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  const equip = (gunId, level2) => {
    equippedGunId = gunId;
    equippedLevel = level2;
    cooldown = 0;
    gunSelect.value = gunId;
    levelSelect.value = String(level2);
    playSfx("Pickup");
    updateReadout();
  };
  squad.x = laneX(0);
  squad.targetX = laneX(0);
  const spawnEnemy = (lane, x = laneX(lane), y = 105 * scale(), rowId = ++entitySequence) => {
    const enemyId = enemySelect.value;
    const definition = orbFamily.members[enemyId];
    const maxHealth = definition.health;
    enemies.push({ id: ++entitySequence, lane, enemyId, x, y, health: maxHealth, maxHealth, hitFlashUntil: 0, rowId, actor: createEnemyActor(enemyId), dying: false });
    playEnemySpawnSound(definition.spawnSound);
  };
  const spawnPickup = (lane) => {
    pickups.push({ gunId: gunSelect.value, level: Number(levelSelect.value), lane, y: 135 * scale(), actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }) });
  };
  document.querySelectorAll("[data-spawn-enemy]").forEach((button) => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy)));
  });
  document.querySelectorAll("[data-spawn-pickup]").forEach((button) => {
    button.addEventListener("click", () => spawnPickup(Number(button.dataset.spawnPickup)));
  });
  document.querySelectorAll("[data-spawn-formation]").forEach((button) => {
    button.addEventListener("click", () => {
      const lane = Number(button.dataset.spawnFormation);
      const count = Number(formationSize.value);
      const rows = Number(formationRows.value);
      const perRow = Math.ceil(count / rows);
      let remaining = count;
      for (let row = 0; row < rows; row++) {
        const rowId = ++entitySequence;
        const rowCount = Math.min(perRow, remaining);
        for (let column = 0; column < rowCount; column++) {
          spawnEnemy(lane, laneX(lane) + (column - (rowCount - 1) / 2) * 15 * scale(), (105 - row * 24) * scale(), rowId);
        }
        remaining -= rowCount;
      }
    });
  });
  document.querySelectorAll("[data-spawn-multiplier]").forEach((button) => {
    button.addEventListener("click", () => multipliers.push({ lane: Number(button.dataset.spawnMultiplier), y: 135 * scale(), actor: new NeonShapeActor({ shape: swarmShapes.multiplier }) }));
  });
  document.querySelector("#spawn-wave").addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    setTimeout(() => spawnEnemy(0), 450);
    setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector("#clear-stage").addEventListener("click", () => {
    enemies.length = projectiles.length = pickups.length = effects.length = multipliers.length = enemyExitEffects.length = 0;
  });
  bindSquadInput(document.querySelector("#game"), "#joystick", {
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
  const fireVolley = (gun, level2) => {
    gunSimulation.fire(gun, level2, playerLane, squad.points(playerY(), scale()).map((point) => ({
      x: point.x,
      y: playerY() - 22 * scale()
    })), performance.now(), scale());
    recoil = level2.muzzleFlashScale * 7 * scale();
  };
  const fire = (gun, level2) => {
    fireVolley(gun, level2);
  };
  const hitEnemy = (projectile, enemy, now) => {
    const definition = orbFamily.members[enemy.enemyId];
    const result = resolveEnemyDamage({
      enemy,
      effects: enemyExitEffects,
      impactMagnitude: projectile.damage + projectile.knockback * 0.06,
      hitFlashUntil: now + definition.hitFlashDurationMs,
      color: neonPalette[definition.baseColor]
    });
    if (result.killed) {
      kills += 1;
      playSfx(result.definition.deathSound);
      updateReadout();
    } else {
      playSfx("Hit");
    }
  };
  const update = (now) => {
    const delta = Math.min((now - lastFrame) / 1e3, 0.05);
    lastFrame = now;
    updateEnemyExitEffects(enemyExitEffects, delta);
    const gun = guns[equippedGunId];
    const level2 = selectedLevel();
    cooldown -= delta;
    if (cooldown <= 0) {
      fire(gun, level2);
      cooldown += 1 / level2.fireRatePerSecond;
    }
    if (gunSimulation.updateFiring(now) > 0) playRotatedSfx("Primary", 3);
    recoil *= Math.pow(1e-3, delta);
    if (!aimControl.manual) {
      const laneEnemies = enemies.filter((enemy) => enemy.lane === squad.lane && !enemy.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * 0.22, laneX);
    }
    squad.update(delta);
    gameElement.dataset.squadLane = String(squad.lane);
    gameElement.dataset.squadAim = squad.aimOffset.toFixed(2);
    gunSimulation.updateProjectiles(
      delta,
      now,
      enemies.map((enemy) => Object.assign(enemy, {
        radius: orbFamily.members[enemy.enemyId].radius * scale()
      })),
      { top: -40 * scale(), left: -40, right: canvas.width + 40 },
      (projectile, target) => hitEnemy(projectile, target, now)
    );
    for (const enemy of [...enemies]) {
      enemy.actor.update(delta);
      enemy.y += orbFamily.members[enemy.enemyId].speed * scale() * delta - enemy.actor.y * canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) {
        enemies.splice(enemies.indexOf(enemy), 1);
        continue;
      }
      if (!enemy.dying && enemy.y >= playerY()) enemies.splice(enemies.indexOf(enemy), 1);
    }
    for (const pickup of [...pickups]) {
      pickup.actor.update(delta);
      pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        equip(pickup.gunId, pickup.level);
        pickups.splice(pickups.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height + 30 * scale()) {
        pickups.splice(pickups.indexOf(pickup), 1);
      }
    }
    for (const pickup of [...multipliers]) {
      pickup.actor.update(delta);
      pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members.squadPlusOne.squadAdded);
        multipliers.splice(multipliers.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }
  };
  const draw = (now) => {
    const s = scale();
    const primitives = [
      ...laneRunnerScenePrimitives("neonHall", canvas.width, canvas.height, now)
    ];
    for (const point of squad.points(playerY() + recoil, s)) void point;
    primitives.push(...gunSimulation.projectilePrimitives());
    if (false) for (const enemy of enemies) {
      const definition = orbFamily.members[enemy.enemyId];
      primitives.push({
        x: enemy.x + definition.radius * 0.35 * s,
        y: enemy.y + definition.radius * 1.12 * s,
        width: definition.radius * 0.9 * s,
        height: definition.radius * 0.28 * s,
        color: neonPalette[definition.shadowColor],
        glow: 0.18,
        intensity: 0.3,
        shape: "circle"
      });
      primitives.push({
        x: enemy.x,
        y: enemy.y,
        width: definition.radius * s,
        color: enemy.hitFlashUntil > now ? neonPalette.whiteHot : neonPalette[definition.rimColor],
        secondaryColor: neonPalette[definition.baseColor],
        glow: definition.glow,
        texture: definition.surfaceTexture,
        rimIntensity: definition.rimIntensity,
        shadowStrength: definition.shadowStrength,
        intensity: enemy.hitFlashUntil > now ? 1.55 : 1,
        shape: "orb"
      });
    }
    if (false) for (const pickup of multipliers) {
      const spec = multiplierFamily.members.squadPlusOne;
      const pColor = neonPalette[spec.pickupColor];
      const tColor = neonPalette[spec.coreColor];
      const px = laneX(pickup.lane);
      const wobble = Math.sin(now / 420 + pickup.y * 0.07) * 4.5 * s;
      const wx = px + wobble;
      const pulse = 1 + Math.sin(now / 600 + pickup.y * 0.05) * 0.08;
      primitives.push({ x: wx, y: pickup.y, width: 28 * s * pulse, color: pColor, secondaryColor: tColor, glow: 0.95, intensity: 0.25, shape: "circle" });
      primitives.push({ x: wx, y: pickup.y, width: 19 * s * pulse, color: pColor, secondaryColor: tColor, glow: 0.9, intensity: 1.1, shape: "pentagon" });
      primitives.push({ x: wx - 3.5 * s, y: pickup.y, width: 1 * s, height: 6 * s, color: pColor, secondaryColor: tColor, glow: 0.6, intensity: 1.15, shape: "bolt" });
      primitives.push({ x: wx - 3.5 * s, y: pickup.y, width: 6 * s, height: 1 * s, color: pColor, secondaryColor: tColor, glow: 0.6, intensity: 1.15, shape: "bolt" });
      primitives.push({ x: wx + 2.5 * s, y: pickup.y, width: 1.4 * s, height: 7 * s, color: pColor, secondaryColor: tColor, glow: 0.75, intensity: 1.2, shape: "bolt" });
      primitives.push({ x: wx + 1.2 * s, y: pickup.y - 2.5 * s, width: 1.5 * s, height: 1 * s, color: pColor, secondaryColor: tColor, glow: 0.6, intensity: 1.15, shape: "bolt" });
      for (let sp = 0; sp < 3; sp++) {
        const angle = now / 900 + sp * 2.09 + pickup.y;
        const dist = (10 + sp * 3.5) * s * pulse;
        primitives.push({ x: wx + Math.cos(angle) * dist, y: pickup.y + Math.sin(angle) * dist * 0.7, width: 1.4 * s, color: pColor, glow: 0.95, intensity: 0.6 + Math.sin(now / 300 + sp) * 0.25, shape: "circle" });
      }
    }
    if (false) for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      const pickupColor = neonPalette[gun.visualIdentity.projectileColor];
      const trailColor = neonPalette[gun.visualIdentity.trailColor];
      const px = laneX(pickup.lane);
      const wobble = Math.sin(now / 420 + pickup.y * 0.07) * 4.5 * s;
      const wx = px + wobble;
      const pulse = 1 + Math.sin(now / 600 + pickup.y * 0.05) * 0.08;
      primitives.push({ x: wx, y: pickup.y, width: 28 * s * pulse, color: pickupColor, secondaryColor: trailColor, glow: 0.9, intensity: 0.22, shape: "circle" });
      primitives.push({ x: wx, y: pickup.y, width: 18 * s * pulse, color: pickupColor, secondaryColor: trailColor, glow: 0.85, intensity: 1.05, shape: "diamond" });
      const iconShape = gun.visualIdentity.projectileShape;
      if (iconShape === "needle") {
        for (let n = -1; n <= 1; n++) primitives.push({ x: wx + n * 3.2 * s, y: pickup.y, width: 1.2 * s, height: 8 * s, color: pickupColor, secondaryColor: trailColor, glow: 0.6, intensity: 1.1, shape: "bolt" });
      } else if (iconShape === "slug") {
        primitives.push({ x: wx, y: pickup.y, width: 3.5 * s, height: 9 * s, color: pickupColor, secondaryColor: trailColor, glow: 0.7, intensity: 1.15, shape: "bolt" });
      } else if (iconShape === "splitBolt") {
        primitives.push({ x: wx - 2.5 * s, y: pickup.y - 1 * s, width: 1.5 * s, height: 8 * s, color: pickupColor, secondaryColor: trailColor, glow: 0.6, intensity: 1.1, shape: "bolt" });
        primitives.push({ x: wx + 2.5 * s, y: pickup.y - 1 * s, width: 1.5 * s, height: 8 * s, color: pickupColor, secondaryColor: trailColor, glow: 0.6, intensity: 1.1, shape: "bolt" });
      } else {
        primitives.push({ x: wx, y: pickup.y - 1 * s, width: 2 * s, height: 9 * s, color: pickupColor, secondaryColor: trailColor, glow: 0.65, intensity: 1.1, shape: "bolt" });
      }
      for (let sp = 0; sp < 3; sp++) {
        const angle = now / 900 + sp * 2.09 + pickup.y;
        const dist = (9 + sp * 3) * s * pulse;
        primitives.push({ x: wx + Math.cos(angle) * dist, y: pickup.y + Math.sin(angle) * dist * 0.7, width: 1.4 * s, color: pickupColor, glow: 0.9, intensity: 0.55 + Math.sin(now / 300 + sp) * 0.25, shape: "circle" });
      }
    }
    for (const effect of effects) {
      const life = Math.max(0, (effect.expiresAt - now) / effect.duration);
      const progress = 1 - life;
      const size = effect.radius * (1 + progress * 1.35);
      if (effect.kind === "muzzle") {
        if (effect.style === "crispStar") {
          primitives.push({ x: effect.x, y: effect.y - size * 0.28, width: size * 0.85, height: size * 1.65, color: effect.color, secondaryColor: effect.secondaryColor, glow: 0.7 * life, intensity: 1.1 * life, shape: "spark" });
        } else if (effect.style === "rapidFlicker") {
          const jitter = (pseudoRandom(effect.seed) * 2 - 1) * size * 0.35;
          primitives.push({ x: effect.x + jitter, y: effect.y - size * 0.2, width: size * 0.52, height: size * 0.9, color: effect.color, secondaryColor: effect.secondaryColor, glow: 0.55, intensity: life, shape: "circle" });
        } else if (effect.style === "groupedPulse") {
          primitives.push({ x: effect.x, y: effect.y, width: size, color: effect.color, secondaryColor: effect.secondaryColor, glow: 0.75 * life, intensity: life, shape: "ring" });
          primitives.push({ x: effect.x, y: effect.y - size * 0.25, width: size * 0.65, height: size * 1.4, color: effect.secondaryColor, secondaryColor: effect.color, glow: 0.5, intensity: life, shape: "spark" });
        } else if (effect.style === "shockDiamond") {
          primitives.push({ x: effect.x, y: effect.y - size * 0.35, width: size * 0.95, height: size * 1.65, color: effect.color, secondaryColor: effect.secondaryColor, glow: 0.9, intensity: 1.15 * life, shape: "bolt" });
          primitives.push({ x: effect.x, y: effect.y, width: size * 1.2, color: effect.secondaryColor, secondaryColor: effect.color, glow: 0.55, intensity: 0.75 * life, shape: "ring" });
        } else {
          primitives.push({ x: effect.x - size * 0.35, y: effect.y - size * 0.2, width: size * 0.38, height: size * 1.5, color: effect.color, secondaryColor: effect.secondaryColor, glow: 0.65, intensity: life, shape: "bolt" });
          primitives.push({ x: effect.x + size * 0.35, y: effect.y - size * 0.2, width: size * 0.38, height: size * 1.5, color: effect.secondaryColor, secondaryColor: effect.color, glow: 0.65, intensity: life, shape: "bolt" });
        }
      } else if (effect.kind === "impact") {
        if (effect.style === "impactRing" || effect.style === "splitRipple") {
          primitives.push({ x: effect.x, y: effect.y, width: size, color: effect.color, secondaryColor: effect.secondaryColor, glow: 0.72 * life, intensity: life, shape: "ring" });
          if (effect.style === "splitRipple") primitives.push({ x: effect.x, y: effect.y, width: size * 0.62, color: effect.secondaryColor, secondaryColor: effect.color, glow: 0.48, intensity: life, shape: "ring" });
        }
        const sparkCount = effect.style === "needleScatter" ? 3 : effect.style === "burstCross" ? 2 : 1;
        for (let index = 0; index < sparkCount; index++) {
          const offset = (index - (sparkCount - 1) / 2) * size * 0.36;
          primitives.push({ x: effect.x + offset, y: effect.y, width: size * 0.62, height: size * (effect.style === "needleScatter" ? 1.35 : 0.9), color: index % 2 ? effect.secondaryColor : effect.color, secondaryColor: effect.color, glow: 0.55 * life, intensity: life, shape: "spark" });
        }
      } else {
        primitives.push({ x: effect.x, y: effect.y, width: size, color: effect.color, secondaryColor: effect.secondaryColor, glow: life, intensity: life, shape: "ring" });
        primitives.push({ x: effect.x, y: effect.y, width: size * 0.7, color: effect.secondaryColor, secondaryColor: effect.color, glow: life, intensity: life, shape: "spark" });
      }
    }
    const zoom = +shapeZoom.value / 100;
    const shapes = [];
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY(), laneRunnerCameraFocusX(canvas.width, squad.x));
    for (const [index, point] of squad.points(playerY() + recoil, s).entries()) {
      shapes.push(actorInTopDownScene(new NeonShapeActor({ shape: swarmShapes.player }), point.x, point.y, 14 * zoom, playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, point.x, point.y, now, index)));
    }
    const enemyHealthBars = [];
    for (const enemy of enemies) {
      const definition = orbFamily.members[enemy.enemyId];
      const size = 18 * definition.columnSpan * zoom;
      enemyHealthBars.push({ enemyId: enemy.enemyId, x: enemy.x, y: enemy.y, health: enemy.health, maxHealth: enemy.maxHealth, size, scale: s });
      shapes.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, size, enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, enemy.x, enemy.y, now, enemy.rowId)));
    }
    for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapes.push(actorInTopDownScene(pickup.actor, laneX(pickup.lane), pickup.y, 15 * zoom, billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, laneX(pickup.lane), pickup.y, now)));
    }
    for (const pickup of multipliers) {
      pickup.actor.label = shapeLabel(`${multiplierFamily.members.squadPlusOne.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[multiplierFamily.members.squadPlusOne.pickupColor];
      shapes.push(actorInTopDownScene(pickup.actor, laneX(pickup.lane), pickup.y, 16 * zoom, billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, laneX(pickup.lane), pickup.y, now)));
    }
    const projected = projectHelicopterScene(primitives, shapes, enemyExitEffects.map(enemyExitCloud), defaultHelicopterCameraSettings, helicopterViewport);
    projected.primitives.push(...projectedEnemyHealthBarPrimitives(enemyHealthBars, defaultHelicopterCameraSettings, helicopterViewport));
    renderer.render(projected, now / 1e3);
  };
  const frame = (now) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
  equip(equippedGunId, equippedLevel);
  enemySelect.addEventListener("change", updateReadout);
  spawnEnemy(0);
  spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Byb2plY3RpbGUudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2syLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9pbnB1dC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NxdWFkLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvYXV0b0FpbS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3ZpZXdwb3J0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2hhcGVWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvZ3VuU2ltdWxhdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2VuZW15RW50cmFuY2VWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFeGl0VmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2VuZW15Q2F0YWxvZy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NjZW5lRW52aXJvbm1lbnQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3Rlc3QtcGFnZXMvZ3VuLWZhbWlseS9tYW51YWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uLCBOZW9uUG9pbnQgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUxhYmVsUG9zaXRpb24gPSBcImFib3ZlXCIgfCBcImJlbG93XCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUxhYmVsIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbj86IE5lb25TaGFwZUxhYmVsUG9zaXRpb247XG4gIG9mZnNldD86IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW5zdGFuY2Uge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBzY2FsZVg/OiBudW1iZXI7XG4gIHNjYWxlWT86IG51bWJlcjtcbiAgcm90YXRpb25YPzogbnVtYmVyO1xuICByb3RhdGlvblk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWj86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgc2hpZWxkZWQ/OiBib29sZWFuO1xuICBsaW5lVGhpY2tuZXNzPzogbnVtYmVyO1xuICBlbmVyZ3lJbnRlbnNpdHk/OiBudW1iZXI7XG4gIGVuZXJneUNvdmVyYWdlPzogbnVtYmVyO1xuICBlbmVyZ3lTcGVlZD86IG51bWJlcjtcbiAgZW5lcmd5QmxlZWQ/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGVudHJhbmNlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xuICBleHBsb2RlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbnR5cGUgVjMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG50eXBlIFZlcnRleCA9IHtcbiAgcDogVjM7IG46IFYzOyBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdOyBnbG93OiBudW1iZXI7XG4gIGVmZmVjdDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gMTQ7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgU2NlbmUgeyBhc3BlY3Q6IGYzMiwgY2FtZXJhOiBmMzIsIHRpbWU6IGYzMiwgcGFkZGluZzogZjMyIH1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuc3RydWN0IElucHV0IHtcbiAgQGxvY2F0aW9uKDApIHBvc2l0aW9uOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigzKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBlZmZlY3Q6IHZlYzRmLFxufVxuc3RydWN0IE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgZWZmZWN0OiB2ZWM0Zixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihpbnB1dDogSW5wdXQpIC0+IE91dHB1dCB7XG4gIGxldCBkZXB0aCA9IHNjZW5lLmNhbWVyYSAtIGlucHV0LnBvc2l0aW9uLno7XG4gIHZhciBvdXRwdXQ6IE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYoaW5wdXQucG9zaXRpb24ueCAqIDQgLyBzY2VuZS5hc3BlY3QsIGlucHV0LnBvc2l0aW9uLnkgKiA0LCBkZXB0aCAqIC4wNDUsIGRlcHRoKTtcbiAgb3V0cHV0Lm5vcm1hbCA9IGlucHV0Lm5vcm1hbDtcbiAgb3V0cHV0LmNvbG9yID0gaW5wdXQuY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaW5wdXQuZ2xvdztcbiAgb3V0cHV0LmVmZmVjdCA9IGlucHV0LmVmZmVjdDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZShpbnB1dC5ub3JtYWwpO1xuICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLS40NSwgLS43LCAxKSk7XG4gIGxldCBkaWZmdXNlID0gLjE4ICsgbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCkgKiAuODI7XG4gIGxldCByaW0gPSBwb3coMSAtIGFicyhub3JtYWwueiksIDIuMik7XG4gIGxldCBzaWRlID0gMSAtIGFicyhub3JtYWwueik7XG4gIGxldCByYXJlU3VyZ2UgPSBwb3cobWF4KC4wLCBzaW4oc2NlbmUudGltZSAqIGlucHV0LmVmZmVjdC56ICogLjgyICsgaW5wdXQuY29sb3IuciAqIDcuMCkpLCAyMi4wKVxuICAgICogaW5wdXQuZWZmZWN0LnggKiBpbnB1dC5lZmZlY3QueSAqIGlucHV0LmVmZmVjdC53O1xuICBsZXQgZW5lcmd5ID0gaW5wdXQuY29sb3IgKiAoZGlmZnVzZSAqIC4xMiArIHJpbSAqIGlucHV0Lmdsb3cgKiAuMzYgKyBzaWRlICogLjA4ICsgcmFyZVN1cmdlICogLjcpO1xuICByZXR1cm4gdmVjNGYoZW5lcmd5ICsgdmVjM2YocmFyZVN1cmdlICogLjE4KSwgLjEyICsgc2lkZSAqIC4xMiArIHJhcmVTdXJnZSAqIC4yOCk7XG59XG5AZnJhZ21lbnQgZm4gbGluZUZyYWdtZW50KGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBhbG9uZyA9IGlucHV0Lm5vcm1hbC54O1xuICBsZXQgYWNyb3NzID0gYWJzKGlucHV0Lm5vcm1hbC55KTtcbiAgbGV0IHBoYXNlID0gaW5wdXQubm9ybWFsLno7XG4gIGxldCBpbnRlbnNpdHkgPSBpbnB1dC5lZmZlY3QueDtcbiAgbGV0IGNvdmVyYWdlID0gaW5wdXQuZWZmZWN0Lnk7XG4gIGxldCBzcGVlZCA9IGlucHV0LmVmZmVjdC56O1xuICBsZXQgYmxlZWQgPSBpbnB1dC5lZmZlY3QudztcbiAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDMxLjAgLSBzY2VuZS50aW1lICogc3BlZWQgKiA1LjQgKyBwaGFzZSkpLCAxMC4wKTtcbiAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDEzLjAgKyBzY2VuZS50aW1lICogc3BlZWQgKiAzLjEgKyBwaGFzZSAqIDIuNykpLCAxOC4wKTtcbiAgbGV0IG5vaXNlID0gc2luKGFsb25nICogNzEuMCArIHBoYXNlICogOC4zKSAqIC41ICsgLjU7XG4gIGxldCB0aHJlc2hvbGQgPSAxLjAgLSBjb3ZlcmFnZTtcbiAgbGV0IGVsZWN0cmljaXR5ID0gc21vb3Roc3RlcCh0aHJlc2hvbGQsIHRocmVzaG9sZCArIC4xOCwgcHVsc2VBICogLjY1ICsgcHVsc2VCICogLjU1ICsgbm9pc2UgKiAuMTgpO1xuICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoLjA2LCAuMjgsIGFjcm9zcyk7XG4gIGxldCBoYWxvID0gMS4wIC0gc21vb3Roc3RlcCguMTIsIDEuMCwgYWNyb3NzKTtcbiAgbGV0IHN1cmdlID0gZWxlY3RyaWNpdHkgKiBpbnRlbnNpdHk7XG4gIGxldCBwdWxzZSA9IC43OCArIHNpbihzY2VuZS50aW1lICogc3BlZWQgKiAyLjEgKyBwaGFzZSkgKiAuMTMgKyBlbGVjdHJpY2l0eSAqIC4yNDtcbiAgbGV0IGNsb3VkID0gaGFsbyAqICguMTMgKyBzdXJnZSAqIC41Mik7XG4gIGxldCBob3QgPSBpbnB1dC5jb2xvciAqIChwdWxzZSArIGNsb3VkICogMi4xKSAqIGlucHV0Lmdsb3cgKyB2ZWMzZihjb3JlICogc3VyZ2UgKiAxLjM1KTtcbiAgbGV0IGFscGhhID0gKGNvcmUgKiAoLjcyICsgcHVsc2UgKiAuMikgKyBjbG91ZCArICgxLjAgLSBhY3Jvc3MpICogYmxlZWQgKiBlbGVjdHJpY2l0eSAqIC4yNCkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBlbnRyYW5jZU9mZnNldCA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgaWYgKGVudHJhbmNlUHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICBjb25zdCBzZWVkID0gTWF0aC5zaW4oaW5kZXggKiA5MS4xNyArIHBvaW50WzBdICogMzcuMiArIHBvaW50WzFdICogNTMuNyArIHogKiAyOS4xKSAqIDQzNzU4LjU0NTM7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZCAtIE1hdGguZmxvb3Ioc2VlZCk7XG4gICAgY29uc3QgYW5nbGUgPSByYW5kb20gKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCByYWRpdXMgPSAoaW5zdGFuY2UuZW50cmFuY2VNYWduaXR1ZGUgPz8gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogKDEgLSBlbnRyYW5jZUVhc2UpICogKC4zNSArIHJhbmRvbSAqIC43NSk7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cywgKHJhbmRvbSAtIC41KSAqIHJhZGl1cyAqIC41NV07XG4gIH07XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleCA9IDApOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZVgsIC1wb2ludFsxXSAqIHNjYWxlWSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgY29uc3QgZSA9IGVudHJhbmNlT2Zmc2V0KHBvaW50LCB6LCBpbmRleCk7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCkgKyBlWzBdLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCkgKyBlWzFdLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCkgKyBlWzJdXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBjb25zdCBhZGQgPSAoYTogVjMsIGI6IFYzLCBjOiBWMywgbm9ybWFsPzogVjMpID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsID8/IG5vcm1hbGl6ZShjcm9zcyhzdWIoYiwgYSksIHN1YihjLCBhKSkpO1xuICAgIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgICBdO1xuICAgIFthLGIsY10uZm9yRWFjaChwID0+IG91dHB1dC5wdXNoKHsgcCwgbiwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UsIGVmZmVjdCB9KSk7XG4gIH07XG4gIGNvbnN0IGZyb250ID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCBkZXB0aCAvIDIsIGluZGV4KSk7XG4gIGNvbnN0IGJhY2sgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIC1kZXB0aCAvIDIsIGluZGV4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCkpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGZyb250Lmxlbmd0aCAtIDE7IGkrKykgYWRkKGZyb250WzBdLCBmcm9udFtpXSwgZnJvbnRbaSArIDFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBiYWNrLmxlbmd0aCAtIDE7IGkrKykgYWRkKGJhY2tbMF0sIGJhY2tbaSArIDFdLCBiYWNrW2ldKTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGg7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW2ldLCBiYWNrW25leHRdKTtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbbmV4dF0sIGZyb250W25leHRdKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGVkZ2VNZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3Qgc2NhbGVYID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVYID8/IDEpO1xuICBjb25zdCBzY2FsZVkgPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVkgPz8gMSk7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCksIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKV07XG4gIH07XG4gIGNvbnN0IGV4cGxvZGUgPSAoYTogVjMsIGI6IFYzLCBpbmRleDogbnVtYmVyKTogW1YzLCBWM10gPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDAsIDEgLSBlbnRyYW5jZUVhc2UpO1xuICAgIGlmICghcHJvZ3Jlc3MpIHJldHVybiBbYSwgYl07XG4gICAgY29uc3QgbXggPSAoYVswXSArIGJbMF0pIC8gMiAtIChpbnN0YW5jZS54ID8/IDApLCBteSA9IChhWzFdICsgYlsxXSkgLyAyIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChteCwgbXkpIHx8IDE7XG4gICAgY29uc3QgbWFnbml0dWRlID0gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgY29uc3Qgc3BlZWQgPSBtYWduaXR1ZGUgKiAoLjQ1ICsgKE1hdGguc2luKGluZGV4ICogOTEuMTcpICogLjUgKyAuNSkgKiAuNTUpO1xuICAgIGNvbnN0IGR4ID0gbXggLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkLCBkeSA9IG15IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCArIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAuMTg7XG4gICAgY29uc3QgYW5nbGUgPSBwcm9ncmVzcyAqIChpbmRleCAlIDIgPyAxIDogLTEpICogMi40O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IChwOiBWMyk6IFYzID0+IHtcbiAgICAgIGNvbnN0IHggPSBwWzBdIC0gKGluc3RhbmNlLnggPz8gMCksIHkgPSBwWzFdIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgICByZXR1cm4gW3ggKiBNYXRoLmNvcyhhbmdsZSkgLSB5ICogTWF0aC5zaW4oYW5nbGUpICsgKGluc3RhbmNlLnggPz8gMCkgKyBkeCwgeCAqIE1hdGguc2luKGFuZ2xlKSArIHkgKiBNYXRoLmNvcyhhbmdsZSkgKyAoaW5zdGFuY2UueSA/PyAwKSArIGR5LCBwWzJdXTtcbiAgICB9O1xuICAgIHJldHVybiBbdHJhbnNmb3JtKGEpLCB0cmFuc2Zvcm0oYildO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGxldCBkaXN0YW5jZSA9IDA7XG4gIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICBdO1xuICBjb25zdCBhZGRMaW5lID0gKGE6IFYzLCBiOiBWMywgcGhhc2U6IG51bWJlciwgd2lkdGhTY2FsZSA9IDEsIG9wYWNpdHkgPSAxKSA9PiB7XG4gICAgW2EsIGJdID0gZXhwbG9kZShhLCBiLCBNYXRoLmZsb29yKGRpc3RhbmNlICogMTAwKSArIE1hdGguZmxvb3IocGhhc2UgKiAxMCkpO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IC4wMDE7XG4gICAgY29uc3Qgd2lkdGggPSAoaW5zdGFuY2UubGluZVRoaWNrbmVzcyA/PyAxKSAqIC4wMTggKiB3aWR0aFNjYWxlO1xuICAgIGNvbnN0IG94ID0gLWR5IC8gbGVuZ3RoICogd2lkdGgsIG95ID0gZHggLyBsZW5ndGggKiB3aWR0aDtcbiAgICBjb25zdCBhMDogVjMgPSBbYVswXSAtIG94LCBhWzFdIC0gb3ksIGFbMl1dLCBhMTogVjMgPSBbYVswXSArIG94LCBhWzFdICsgb3ksIGFbMl1dO1xuICAgIGNvbnN0IGIwOiBWMyA9IFtiWzBdIC0gb3gsIGJbMV0gLSBveSwgYlsyXV0sIGIxOiBWMyA9IFtiWzBdICsgb3gsIGJbMV0gKyBveSwgYlsyXV07XG4gICAgY29uc3Qgc3RhcnQgPSBkaXN0YW5jZSAqIDIuNCwgZW5kID0gKGRpc3RhbmNlICsgbGVuZ3RoKSAqIDIuNDtcbiAgICBjb25zdCBwdXNoID0gKHA6IFYzLCBhbG9uZzogbnVtYmVyLCBhY3Jvc3M6IG51bWJlcikgPT5cbiAgICAgIG91dHB1dC5wdXNoKHsgcCwgbjogW2Fsb25nLCBhY3Jvc3MsIHBoYXNlXSwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogb3BhY2l0eSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlICogKDEgKyBNYXRoLnNpbigoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogTWF0aC5QSSkgKiAoaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogMi4yKSAqICgxIC0gKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIC43KSwgZWZmZWN0IH0pO1xuICAgIHB1c2goYTAsc3RhcnQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIwLGVuZCwtMSk7XG4gICAgcHVzaChiMCxlbmQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIxLGVuZCwxKTtcbiAgICBkaXN0YW5jZSArPSBsZW5ndGg7XG4gIH07XG4gIGNvbnN0IGFkZExvb3AgPSAocG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSwgejogbnVtYmVyLCBwaGFzZTogbnVtYmVyKSA9PlxuICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgeiksIG1vdmUocG9pbnRzWyhpbmRleCArIDEpICUgcG9pbnRzLmxlbmd0aF0sIHopLCBwaGFzZSArIGluZGV4ICogLjczKSk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCBkZXB0aCAvIDIsIC4zKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIC1kZXB0aCAvIDIsIDIuMSk7XG4gIHNoYXBlLmhvbGVzPy5mb3JFYWNoKChob2xlLCBpbmRleCkgPT4ge1xuICAgIGFkZExvb3AoaG9sZSwgZGVwdGggLyAyICsgLjAwMiwgMy43ICsgaW5kZXgpO1xuICAgIGFkZExvb3AoaG9sZSwgLWRlcHRoIC8gMiAtIC4wMDIsIDUuMiArIGluZGV4KTtcbiAgfSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgLWRlcHRoIC8gMiksIG1vdmUocG9pbnQsIGRlcHRoIC8gMiksIDYuMSArIGluZGV4KSk7XG4gIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAgKiAoaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSk7XG4gIGNvbnN0IGJyYW5jaFN0cmVuZ3RoID0gKGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxKSAqIChpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIpO1xuICBjb25zdCByYW5kb20gPSAoc2VlZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnNpbihzZWVkICogMTIuOTg5OCArIHNoYXBlLnBvaW50cy5sZW5ndGggKiA3OC4yMzMpICogNDM3NTguNTQ1MztcbiAgICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgcm90YXRlZCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaWFuczogbnVtYmVyKTogTmVvblBvaW50ID0+IFtcbiAgICB4ICogTWF0aC5jb3MocmFkaWFucykgLSB5ICogTWF0aC5zaW4ocmFkaWFucyksXG4gICAgeCAqIE1hdGguc2luKHJhZGlhbnMpICsgeSAqIE1hdGguY29zKHJhZGlhbnMpLFxuICBdO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY3ljbGUgPSBNYXRoLmZsb29yKHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEpO1xuICAgIGNvbnN0IGFnZSA9IHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEgLSBjeWNsZTtcbiAgICBjb25zdCBzZWVkID0gY3ljbGUgKiAzNy4xICsgaW5kZXggKiAxMS43O1xuICAgIGNvbnN0IGFjdGl2ZUR1cmF0aW9uID0gLjE4ICsgcmFuZG9tKHNlZWQgKyAxKSAqIC4yNTtcbiAgICBjb25zdCBoYXplRHVyYXRpb24gPSBNYXRoLm1pbigxLCBhY3RpdmVEdXJhdGlvbiArIC4yOCArIHJhbmRvbShzZWVkICsgMikgKiAuMjIpO1xuICAgIGNvbnN0IGJyYW5jaEFjdGl2ZSA9IGFnZSA8IGFjdGl2ZUR1cmF0aW9uO1xuICAgIGNvbnN0IGhhemVBY3RpdmUgPSBhZ2UgPCBoYXplRHVyYXRpb247XG4gICAgaWYgKCghYnJhbmNoQWN0aXZlICYmICFoYXplQWN0aXZlKSB8fCByYW5kb20oc2VlZCArIDMpID4gTWF0aC5taW4oLjc4LCBicmFuY2hTdHJlbmd0aCAqIC41KSkgcmV0dXJuO1xuICAgIGNvbnN0IG5leHQgPSBzaGFwZS5wb2ludHNbKGluZGV4ICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoXTtcbiAgICBjb25zdCB0ID0gLjE2ICsgcmFuZG9tKHNlZWQgKyA0KSAqIC42ODtcbiAgICBjb25zdCBiYXNlOiBOZW9uUG9pbnQgPSBbcG9pbnRbMF0gKyAobmV4dFswXSAtIHBvaW50WzBdKSAqIHQsIHBvaW50WzFdICsgKG5leHRbMV0gLSBwb2ludFsxXSkgKiB0XTtcbiAgICBjb25zdCB0eCA9IG5leHRbMF0gLSBwb2ludFswXSwgdHkgPSBuZXh0WzFdIC0gcG9pbnRbMV0sIHRsID0gTWF0aC5oeXBvdCh0eCwgdHkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcmFuZG9tKHNlZWQgKyA1KSA+IC41ID8gMSA6IC0xO1xuICAgIGNvbnN0IHBlcnBlbmRpY3VsYXI6IE5lb25Qb2ludCA9IFstdHkgLyB0bCAqIGRpcmVjdGlvbiwgdHggLyB0bCAqIGRpcmVjdGlvbl07XG4gICAgY29uc3QgZmlyc3RKaXR0ZXIgPSAoMTAgKyByYW5kb20oc2VlZCArIDYpICogMTApICogTWF0aC5QSSAvIDE4MCAqIChyYW5kb20oc2VlZCArIDcpID4gLjUgPyAxIDogLTEpO1xuICAgIGxldCBoZWFkaW5nID0gcm90YXRlZChwZXJwZW5kaWN1bGFyWzBdLCBwZXJwZW5kaWN1bGFyWzFdLCBmaXJzdEppdHRlcik7XG4gICAgY29uc3Qgc2VnbWVudENvdW50ID0gMSArIE1hdGguZmxvb3IocmFuZG9tKHNlZWQgKyA4KSAqIDMpO1xuICAgIGNvbnN0IHBvaW50czogTmVvblBvaW50W10gPSBbYmFzZV07XG4gICAgZm9yIChsZXQgc2VnbWVudCA9IDA7IHNlZ21lbnQgPCBzZWdtZW50Q291bnQ7IHNlZ21lbnQrKykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gLjA1NSArIHJhbmRvbShzZWVkICsgMTAgKyBzZWdtZW50KSAqIC4wOTU7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBwb2ludHMucHVzaChbcHJldmlvdXNbMF0gKyBoZWFkaW5nWzBdICogbGVuZ3RoLCBwcmV2aW91c1sxXSArIGhlYWRpbmdbMV0gKiBsZW5ndGhdKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICgyMCArIHJhbmRvbShzZWVkICsgMjAgKyBzZWdtZW50KSAqIDQwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICBoZWFkaW5nID0gcm90YXRlZChoZWFkaW5nWzBdLCBoZWFkaW5nWzFdLCBvZmZzZXQgKiAocmFuZG9tKHNlZWQgKyAzMCArIHNlZ21lbnQpID4gLjUgPyAxIDogLTEpKTtcbiAgICB9XG4gICAgaWYgKGhhemVBY3RpdmUpIHtcbiAgICAgIGNvbnN0IGZhZGUgPSAxIC0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pIC8gTWF0aC5tYXgoLjAwMSwgaGF6ZUR1cmF0aW9uIC0gYWN0aXZlRHVyYXRpb24pO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgKiAuMDM1O1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbmQgPSBwb2ludHNbc2VnbWVudCArIDFdO1xuICAgICAgICBjb25zdCBoYXplU3RhcnQ6IE5lb25Qb2ludCA9IFtzdGFydFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgc3RhcnRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBjb25zdCBoYXplRW5kOiBOZW9uUG9pbnQgPSBbZW5kWzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBlbmRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBhZGRMaW5lKG1vdmUoaGF6ZVN0YXJ0LCBkZXB0aCAvIDIgKyAuMDAyKSwgbW92ZShoYXplRW5kLCBkZXB0aCAvIDIgKyAuMDAyKSwgMzEgKyBzZWVkICsgc2VnbWVudCwgMS40NSArIGZhZGUgKiAuNTUsIGZhZGUgKiAuMzQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChicmFuY2hBY3RpdmUpIHtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgYWRkTGluZShtb3ZlKHN0YXJ0LCBkZXB0aCAvIDIgKyAuMDA2KSwgbW92ZShwb2ludHNbc2VnbWVudCArIDFdLCBkZXB0aCAvIDIgKyAuMDA2KSwgMTEgKyBzZWVkICsgc2VnbWVudCwgLjQyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2xpbmVQaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjZGVwdGg6IEdQVVRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgI2xhYmVsTGF5ZXI6IEhUTUxEaXZFbGVtZW50O1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IHBhcmVudCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnQgJiYgZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdGhpcy4jbGFiZWxMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy4jbGFiZWxMYXllci5jbGFzc05hbWUgPSBcIm5lb24tc2hhcGUtbGFiZWwtbGF5ZXJcIjtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHsgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBpbnNldDpcIjBcIiwgcG9pbnRlckV2ZW50czpcIm5vbmVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiB9KTtcbiAgICBwYXJlbnQ/LmFwcGVuZCh0aGlzLiNsYWJlbExheWVyKTtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBleHRydWRlZCBzaGFwZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiwgY3VsbE1vZGU6IFwiYmFja1wiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiBmYWxzZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2xpbmVQaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImxpbmVGcmFnbWVudFwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgICAgfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBzaGFwZSBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10sIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmVydGljZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChtZXNoKTtcbiAgICBjb25zdCBlZGdlcyA9IGluc3RhbmNlcy5mbGF0TWFwKGVkZ2VNZXNoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIGNvbnN0IGVkZ2VEYXRhID0gbmV3IEZsb2F0MzJBcnJheShlZGdlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBlZGdlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGVkZ2VEYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGRhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBjb25zdCBlZGdlQnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZWRnZURhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHZlcnRleEJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgaWYgKGVkZ2VEYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIoZWRnZUJ1ZmZlciwgMCwgZWRnZURhdGEpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgNSwgcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCAwXSkpO1xuICAgIGNvbnN0IGJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgbGluZUJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jbGluZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbeyB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIiwgc3RvcmVPcDogXCJzdG9yZVwiIH1dLFxuICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDogeyB2aWV3OiB0aGlzLiNkZXB0aCEuY3JlYXRlVmlldygpLCBkZXB0aENsZWFyVmFsdWU6IDEsIGRlcHRoTG9hZE9wOiBcImNsZWFyXCIsIGRlcHRoU3RvcmVPcDogXCJzdG9yZVwiIH0sXG4gICAgfSk7XG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgdmVydGV4QnVmZmVyKTsgcGFzcy5kcmF3KHZlcnRpY2VzLmxlbmd0aCk7IH1cbiAgICBpZiAoZWRnZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jbGluZVBpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgbGluZUJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIGVkZ2VCdWZmZXIpOyBwYXNzLmRyYXcoZWRnZXMubGVuZ3RoKTsgfVxuICAgIHBhc3MuZW5kKCk7IHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICAgIHRoaXMuI3JlbmRlckxhYmVscyhpbnN0YW5jZXMpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLm9uU3VibWl0dGVkV29ya0RvbmUoKS50aGVuKCgpID0+IHsgdmVydGV4QnVmZmVyLmRlc3Ryb3koKTsgZWRnZUJ1ZmZlci5kZXN0cm95KCk7IH0pO1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQgeyB0aGlzLiNsYWJlbExheWVyLnJlbW92ZSgpOyB0aGlzLiNkZXB0aD8uZGVzdHJveSgpOyB0aGlzLiNzY2VuZUJ1ZmZlci5kZXN0cm95KCk7IGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7IH1cbiAgI3JlbmRlckxhYmVscyhpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10pOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHtcbiAgICAgIGxlZnQ6IGAke3RoaXMuY2FudmFzLm9mZnNldExlZnR9cHhgLFxuICAgICAgdG9wOiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRUb3B9cHhgLFxuICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgIHdpZHRoOiBgJHt0aGlzLmNhbnZhcy5jbGllbnRXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMuY2FudmFzLmNsaWVudEhlaWdodH1weGAsXG4gICAgfSk7XG4gICAgdGhpcy4jbGFiZWxMYXllci5yZXBsYWNlQ2hpbGRyZW4oLi4uaW5zdGFuY2VzLmZsYXRNYXAoaW5zdGFuY2UgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5sYWJlbD8udGV4dCB8fCAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSA8PSAwKSByZXR1cm4gW107XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gICAgICBjb25zdCB4ID0gNTAgKyAoaW5zdGFuY2UueCA/PyAwKSAqIDQwIC8gKHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHkgPSA1MCAtIChpbnN0YW5jZS55ID8/IDApICogNDA7XG4gICAgICBjb25zdCBzaGFwZVJhZGl1cyA9IHNjYWxlICogdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogLjI7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzaGFwZVJhZGl1cyArIChpbnN0YW5jZS5sYWJlbC5vZmZzZXQgPz8gOCkgKyAoaW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTgpICogLjU7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGluc3RhbmNlLmxhYmVsLnBvc2l0aW9uID8/IFwiYWJvdmVcIjtcbiAgICAgIGxldCB0eCA9IDAsIHR5ID0gMDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJhYm92ZVwiKSB0eSA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYmVsb3dcIikgdHkgPSBvZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibGVmdFwiKSB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwicmlnaHRcIikgdHggPSBvZmZzZXQ7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5zdGFuY2UubGFiZWwudGV4dDtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6YCR7eH0lYCwgdG9wOmAke3l9JWAsIHRyYW5zZm9ybTpgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7dHh9cHgpLGNhbGMoLTUwJSArICR7dHl9cHgpKWAsXG4gICAgICAgIGNvbG9yOmluc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yLCBmb250RmFtaWx5Omluc3RhbmNlLmxhYmVsLmZvbnRGYW1pbHkgPz8gXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBmb250U2l6ZTpgJHtpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOH1weGAsIGZvbnRXZWlnaHQ6U3RyaW5nKGluc3RhbmNlLmxhYmVsLmZvbnRXZWlnaHQgPz8gNjAwKSxcbiAgICAgICAgdGV4dFNoYWRvdzpgMCAwIDVweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfSwwIDAgMTRweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfWAsIHdoaXRlU3BhY2U6XCJub3dyYXBcIixcbiAgICAgICAgb3BhY2l0eTpTdHJpbmcoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtlbGVtZW50XTtcbiAgICB9KSk7XG4gIH1cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy4jbG9naWNhbFNpemU7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0IHx8ICF0aGlzLiNkZXB0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy4jZGVwdGggJiYgdGhpcy5jYW52YXMud2lkdGggPT09IHdpZHRoICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UsIE5lb25TaGFwZUxhYmVsIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBlbnVtIE5lb25TaGFwZURpc3Bvc2FsIHtcbiAgRmFkZU91dCA9IFwiZmFkZU91dFwiLFxuICBEaXNhcHBlYXIgPSBcImRpc2FwcGVhclwiLFxuICBFeHBsb2RlID0gXCJleHBsb2RlXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlVmVjdG9yIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW1wYWN0IHtcbiAgZGlyZWN0aW9uOiBOZW9uU2hhcGVWZWN0b3I7XG4gIG1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUFjdG9yT3B0aW9ucyB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICB2ZWxvY2l0eT86IFBhcnRpYWw8TmVvblNoYXBlVmVjdG9yPjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbD86IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25TaGFwZUFjdG9yIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3I7XG4gIHNjYWxlOiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbDogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU6IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbjogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZTogbnVtYmVyO1xuICByb3RhdGlvblggPSAwO1xuICByb3RhdGlvblkgPSAwO1xuICByb3RhdGlvblogPSAwO1xuICBkaXNwb3NlZCA9IGZhbHNlO1xuICAjZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgI2ltcGFjdFZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcbiAgI2ltcGFjdFJvdGF0aW9uOiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uU2hhcGVBY3Rvck9wdGlvbnMpIHtcbiAgICB0aGlzLnNoYXBlID0gb3B0aW9ucy5zaGFwZTtcbiAgICB0aGlzLnggPSBvcHRpb25zLnggPz8gMDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnkgPz8gMDtcbiAgICB0aGlzLnogPSBvcHRpb25zLnogPz8gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiBvcHRpb25zLnZlbG9jaXR5Py54ID8/IDAsIHk6IG9wdGlvbnMudmVsb2NpdHk/LnkgPz8gMCB9O1xuICAgIHRoaXMuc2NhbGUgPSBvcHRpb25zLnNjYWxlID8/IDE7XG4gICAgdGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG9wdGlvbnMuZGlzcG9zYWwgPz8gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dDtcbiAgICB0aGlzLmV4cGxvZGVNYWduaXR1ZGUgPSBvcHRpb25zLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IG9wdGlvbnMuZW50cmFuY2VEdXJhdGlvbiA/PyAuNDU7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG9wdGlvbnMuZW50cmFuY2VNYWduaXR1ZGUgPz8gLjU1O1xuICB9XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyLCB6ID0gdGhpcy56KTogdGhpcyB7XG4gICAgdGhpcy54ID0geDsgdGhpcy55ID0geTsgdGhpcy56ID0gejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZlbG9jaXR5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0geDsgdGhpcy52ZWxvY2l0eS55ID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltcGFjdCh7IGRpcmVjdGlvbiwgbWFnbml0dWRlIH06IE5lb25TaGFwZUltcGFjdCk6IHRoaXMge1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICAgIGNvbnN0IHggPSBkaXJlY3Rpb24ueCAvIGxlbmd0aCwgeSA9IGRpcmVjdGlvbi55IC8gbGVuZ3RoO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKz0geCAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICs9IHkgKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCArPSB5ICogbWFnbml0dWRlICogLjk7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAtPSB4ICogbWFnbml0dWRlICogLjk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNwb3NlKG1vZGUgPSB0aGlzLmRpc3Bvc2FsKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG1vZGU7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhciA/IDEgOiAuMDAwMTtcbiAgICBpZiAobW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVudGVyKGR1cmF0aW9uID0gdGhpcy5lbnRyYW5jZUR1cmF0aW9uLCBtYWduaXR1ZGUgPSB0aGlzLmVudHJhbmNlTWFnbml0dWRlKTogdGhpcyB7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gTWF0aC5tYXgoLjAwMSwgZHVyYXRpb24pO1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWdlbmVyYXRlKCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSAodGhpcy52ZWxvY2l0eS54ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWCArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25ZICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKiBkZWx0YVNlY29uZHM7XG4gICAgY29uc3QgZGFtcGluZyA9IE1hdGguZXhwKC03ICogZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKj0gZGFtcGluZztcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKj0gZGFtcGluZztcbiAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+IDAgJiYgIXRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IC44NSA6IC41NTtcbiAgICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNkaXNwb3NhbFByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gZHVyYXRpb24pO1xuICAgICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPj0gMSkgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLiNlbnRyYW5jZVByb2dyZXNzIDwgMSkgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyB0aGlzLmVudHJhbmNlRHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICAgIGNvbnN0IGZhZGUgPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0ID8gMSAtIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAxO1xuICAgIHJldHVybiB7XG4gICAgICBzaGFwZTogdGhpcy5zaGFwZSwgeDogdGhpcy54LCB5OiB0aGlzLnksIHo6IHRoaXMueiwgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvblg6IHRoaXMucm90YXRpb25YLCByb3RhdGlvblk6IHRoaXMucm90YXRpb25ZLCByb3RhdGlvblo6IHRoaXMucm90YXRpb25aLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsIGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiB0aGlzLmRpc3Bvc2VkID8gMCA6IGZhZGUsXG4gICAgICBlbnRyYW5jZVByb2dyZXNzOiB0aGlzLiNlbnRyYW5jZVByb2dyZXNzLFxuICAgICAgZW50cmFuY2VNYWduaXR1ZGU6IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IHRoaXMuZXhwbG9kZU1hZ25pdHVkZSxcbiAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICB9O1xuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvblByaW1pdGl2ZVNoYXBlID0gXCJjaXJjbGVcIiB8IFwiYm9sdFwiIHwgXCJvcmJcIiB8IFwicmluZ1wiIHwgXCJzcGFya1wiIHwgXCJkaWFtb25kXCIgfCBcInBlbnRhZ29uXCIgfCBcImxpbmVcIiB8IFwiYXJjXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByaW1pdGl2ZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlY29uZGFyeUNvbG9yPzogc3RyaW5nO1xuICBnbG93PzogbnVtYmVyO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIHRleHR1cmU/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBhcmNTdGFydD86IG51bWJlcjtcbiAgYXJjRW5kPzogbnVtYmVyO1xuICBzaGFwZT86IE5lb25QcmltaXRpdmVTaGFwZTtcbn1cblxuY29uc3QgbWF4UHJpbWl0aXZlcyA9IDEwMjQ7XG5jb25zdCBmbG9hdHNQZXJQcmltaXRpdmUgPSAyMDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqLyBgXG5zdHJ1Y3QgU2NlbmUgeyByZXNvbHV0aW9uOiB2ZWMyZiwgY291bnQ6IGYzMiwgdGltZTogZjMyIH1cbnN0cnVjdCBQcmltaXRpdmUge1xuICBwb3NpdGlvbjogdmVjMmYsXG4gIHNpemU6IHZlYzJmLFxuICBjb2xvcjogdmVjNGYsXG4gIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgZ2xvdzogZjMyLFxuICBpbnRlbnNpdHk6IGYzMixcbiAgc2hhcGU6IGYzMixcbiAgdGV4dHVyZTogZjMyLFxuICByaW1JbnRlbnNpdHk6IGYzMixcbiAgc2hhZG93U3RyZW5ndGg6IGYzMixcbiAgcGFkZGluZzogdmVjMmYsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gaXRlbXM6IGFycmF5PFByaW1pdGl2ZT47XG5cbnN0cnVjdCBWZXJ0ZXhPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgaW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBzaGFwZTogZjMyLFxuICBAbG9jYXRpb24oNSkgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oNikgdGV4dHVyZTogZjMyLFxuICBAbG9jYXRpb24oNykgcmltSW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig4KSBzaGFkb3dTdHJlbmd0aDogZjMyLFxufVxuXG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2ZXJ0ZXg6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IFZlcnRleE91dHB1dCB7XG4gIHZhciBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgaXRlbSA9IGl0ZW1zW2luc3RhbmNlXTtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2ZXJ0ZXhdO1xuICB2YXIgcGl4ZWxPZmZzZXQgPSBsb2NhbCAqIGl0ZW0uc2l6ZTtcbiAgaWYgKGl0ZW0udGV4dHVyZSAhPSAwKSB7XG4gICAgbGV0IGMgPSBjb3MoaXRlbS50ZXh0dXJlKTtcbiAgICBsZXQgcyA9IHNpbihpdGVtLnRleHR1cmUpO1xuICAgIHBpeGVsT2Zmc2V0ID0gdmVjMmYocGl4ZWxPZmZzZXQueCAqIGMgLSBwaXhlbE9mZnNldC55ICogcywgcGl4ZWxPZmZzZXQueCAqIHMgKyBwaXhlbE9mZnNldC55ICogYyk7XG4gIH1cbiAgbGV0IHBpeGVsID0gaXRlbS5wb3NpdGlvbiArIHBpeGVsT2Zmc2V0O1xuICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKHBpeGVsLnggLyBzY2VuZS5yZXNvbHV0aW9uLnggKiAyIC0gMSwgMSAtIHBpeGVsLnkgLyBzY2VuZS5yZXNvbHV0aW9uLnkgKiAyLCAwLCAxKTtcbiAgb3V0cHV0LmxvY2FsID0gbG9jYWw7XG4gIG91dHB1dC5jb2xvciA9IGl0ZW0uY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaXRlbS5nbG93O1xuICBvdXRwdXQuaW50ZW5zaXR5ID0gaXRlbS5pbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFwZSA9IGl0ZW0uc2hhcGU7XG4gIG91dHB1dC5zZWNvbmRhcnlDb2xvciA9IGl0ZW0uc2Vjb25kYXJ5Q29sb3I7XG4gIG91dHB1dC50ZXh0dXJlID0gaXRlbS50ZXh0dXJlO1xuICBvdXRwdXQucmltSW50ZW5zaXR5ID0gaXRlbS5yaW1JbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFkb3dTdHJlbmd0aCA9IGl0ZW0uc2hhZG93U3RyZW5ndGg7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgaWYgKGlucHV0LnNoYXBlID4gNy41KSB7XG4gICAgbGV0IHJhZGl1cyA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gICAgbGV0IGFuZ2xlID0gYXRhbjIoaW5wdXQubG9jYWwueSwgaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFuZ2xlIDwgaW5wdXQucmltSW50ZW5zaXR5IHx8IGFuZ2xlID4gaW5wdXQuc2hhZG93U3RyZW5ndGggfHwgcmFkaXVzID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgbGluZURpc3RhbmNlID0gYWJzKHJhZGl1cyAtIDAuNzgpO1xuICAgIGlmIChsaW5lRGlzdGFuY2UgPiAwLjE2KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTIsIDAuMDM4LCBsaW5lRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4wMjUsIDAuMTYsIGxpbmVEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcHVsc2VBID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDIzLjAgLSBzY2VuZS50aW1lICogOC41KSksIDE2LjApO1xuICAgIGxldCBwdWxzZUIgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMTEuMCArIHNjZW5lLnRpbWUgKiA1LjMgKyAxLjcpKSwgMjQuMCk7XG4gICAgbGV0IGdyYWluID0gc2luKGFuZ2xlICogNzEuMCArIHNjZW5lLnRpbWUgKiAzLjEpICogMC41ICsgMC41O1xuICAgIGxldCBzdXJnZSA9IHNtb290aHN0ZXAoMC43MiwgMC45NCwgcHVsc2VBICogMC43ICsgcHVsc2VCICogMC42NSArIGdyYWluICogMC4xMik7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuODggKyBzdXJnZSAqIDAuNjUpICsgaGFsbyAqICgwLjIyICsgc3VyZ2UgKiAwLjkpKSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogc3VyZ2UgKiAwLjkpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNi41KSB7XG4gICAgbGV0IGFsb25nID0gaW5wdXQubG9jYWwueTtcbiAgICBsZXQgYWNyb3NzID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhY3Jvc3MgPiAxLjAgfHwgYWJzKGFsb25nKSA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDgsIDAuMjQsIGFjcm9zcyk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjEyLCAxLjAsIGFjcm9zcykpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5kRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMC43MiwgMS4wLCBhYnMoYWxvbmcpKTtcbiAgICBsZXQgdHJhdmVsID0gcG93KG1heCgwLjAsIHNpbihhbG9uZyAqIDI0LjAgLSBzY2VuZS50aW1lICogOC4wICsgaW5wdXQudGV4dHVyZSkpLCAxNC4wKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC43NSArIHRyYXZlbCAqIDAuNSkgKyBoYWxvICogKDAuMiArIHRyYXZlbCAqIDAuNTUpKSAqIGVuZEZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHRyYXZlbCAqIDAuNzUpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNS41KSB7XG4gICAgLy8gUGVudGFnb24gU0RGXG4gICAgLy8gbG9jYWwgaXMgaW4gWy0xLCAxXSByYW5nZS4gTGV0J3MgZmluZCBwZW50YWdvbiBkaXN0YW5jZS5cbiAgICBsZXQgcHggPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgbGV0IHB5ID0gaW5wdXQubG9jYWwueTtcbiAgICAvLyBQZW50YWdvbiBjb25zdGFudHMgZm9yIHZlcnRpY2VzL2VkZ2VzXG4gICAgbGV0IGsgPSB2ZWMzZigtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAxLjM3NjM4MTkyKTsgLy8gY29zL3NpbiBvZiA3MiwgcGx1cyBoZWlnaHQgZmFjdG9yXG4gICAgLy8gUHJvamVjdC9NaXJyb3IgYWNyb3NzIHRoZSBzeW1tZXRyeSBheGVzIG9mIHJlZ3VsYXIgcGVudGFnb25cbiAgICB2YXIgcCA9IHZlYzJmKHB4LCBweSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZigtay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZigtay54LCBrLnkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZihrLngsIGsueSk7XG4gICAgcC54ID0gcC54IC0gY2xhbXAocC54LCAtay56ICogMC41LCBrLnogKiAwLjUpO1xuICAgIGxldCBkID0gbGVuZ3RoKHAgLSB2ZWMyZigwLCAwLjcyKSkgKiBzaWduKHAueSAtIDAuNzIpO1xuICAgIC8vIE1hcCBkIHRvIGEgbm9ybWFsaXplZCByYWRpdXMgc2NhbGVcbiAgICBsZXQgc2NhbGVEID0gZCArIDAuMzU7IC8vIG9mZnNldCBwZW50YWdvbiB0byBmaXQgYm91bmRzIG5pY2VseVxuICAgIGlmIChzY2FsZUQgPiAwLjgpIHsgZGlzY2FyZDsgfVxuICAgIFxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC41LCAwLjY1LCBzY2FsZUQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNDUsIDAuNTMsIHNjYWxlRCkgKiAoMSAtIHNtb290aHN0ZXAoMC42NSwgMC43NSwgc2NhbGVEKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgtMC4yLCAwLjUsIHNjYWxlRCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC41NSwgMC44LCBzY2FsZUQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzggKyBib3JkZXIgKiAxLjM1O1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC41KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNzUgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC40NSkgKiBmaWxsICogMC4zNTtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC40O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA0LjUpIHtcbiAgICBsZXQgZCA9IGFicyhpbnB1dC5sb2NhbC54KSArIGFicyhpbnB1dC5sb2NhbC55KTtcbiAgICBpZiAoZCA+IDEuMDgpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC43OCwgMC45MiwgZCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC43MiwgMC44MiwgZCkgKiAoMSAtIHNtb290aHN0ZXAoMC45MiwgMS4wMiwgZCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoMC4wLCAwLjc4LCBkKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjgyLCAxLjA4LCBkKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM1ICsgYm9yZGVyICogMS4yO1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjYgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC41KSAqIGZpbGwgKiAwLjM4O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM1O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAxLjUpIHtcbiAgICBsZXQgcjIgPSBkb3QoaW5wdXQubG9jYWwsIGlucHV0LmxvY2FsKTtcbiAgICBpZiAocjIgPiAxKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgeiA9IHNxcnQobWF4KDAsIDEgLSByMikpO1xuICAgIGxldCBub3JtYWwgPSBub3JtYWxpemUodmVjM2YoaW5wdXQubG9jYWwueCwgLWlucHV0LmxvY2FsLnksIHopKTtcbiAgICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLTAuNTUsIC0wLjcsIDAuOSkpO1xuICAgIGxldCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCk7XG4gICAgbGV0IHJpbSA9IHBvdygxIC0geiwgMi4yKSAqIGlucHV0LnJpbUludGVuc2l0eTtcbiAgICBsZXQgc2hhZG93ID0gbWl4KDEgLSBpbnB1dC5zaGFkb3dTdHJlbmd0aCwgMSwgc21vb3Roc3RlcCgtMC42NSwgMC40NSwgZG90KG5vcm1hbC54eSwgbGlnaHQueHkpKSk7XG4gICAgbGV0IGdyYWluID0gc2luKGlucHV0LmxvY2FsLnggKiAyMyArIGlucHV0LmxvY2FsLnkgKiAxNykgKiBzaW4oaW5wdXQubG9jYWwueSAqIDMxIC0gaW5wdXQubG9jYWwueCAqIDExKTtcbiAgICBsZXQgdGV4dHVyZSA9IDEgKyBncmFpbiAqIGlucHV0LnRleHR1cmUgKiAwLjIyO1xuICAgIGxldCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0LCBub3JtYWwpLCB2ZWMzZigwLDAsMSkpLCAwKSwgMjgpICogMS44O1xuICAgIGxldCBib2R5ID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBkaWZmdXNlICogMC44ICsgMC4yKSAqIHNoYWRvdyAqIHRleHR1cmU7XG4gICAgbGV0IGhhbG8gPSBwb3cobWF4KDAsIDEgLSBsZW5ndGgoaW5wdXQubG9jYWwpKSwgMC4zNSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCByZ2IgPSBib2R5ICogKDAuMzggKyBkaWZmdXNlICogMC45NSkgKyBpbnB1dC5jb2xvci5yZ2IgKiByaW0gKyB2ZWMzZihzcGVjdWxhcikgKyBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IgKiBpbnB1dC5pbnRlbnNpdHksIDEpO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDMuNSkge1xuICAgIGxldCBheGlzID0gbWluKGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgICBsZXQgYXJtID0gMSAtIHNtb290aHN0ZXAoMC4wNCwgMC4xOCwgYXhpcyk7XG4gICAgbGV0IGZhZGUgPSAxIC0gc21vb3Roc3RlcCgwLjIsIDEsIG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSkpO1xuICAgIGxldCBlbmVyZ3kgPSBhcm0gKiBmYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGFybSkgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMi41KSB7XG4gICAgbGV0IHJpbmdEaXN0YW5jZSA9IGFicyhsZW5ndGgoaW5wdXQubG9jYWwpIC0gMC42Mik7XG4gICAgbGV0IHJpbmcgPSAxIC0gc21vb3Roc3RlcCgwLjA1NSwgMC4xOCwgcmluZ0Rpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjEyLCAwLjQyLCByaW5nRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZXJneSA9IChyaW5nICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIHJpbmcpICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMC41KSB7XG4gICAgZGlzdGFuY2UgPSBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICB9XG4gIGxldCBjb3JlID0gMSAtIHNtb290aHN0ZXAoMC4zOCwgMC43NiwgZGlzdGFuY2UpO1xuICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjMsIDEsIGRpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICBsZXQgZW5lcmd5ID0gKGNvcmUgKyBoYWxvICogMC41NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gIGxldCBjaHJvbWF0aWNDb3JlID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBwb3cobWF4KGNvcmUsIDApLCAyKSk7XG4gIGxldCByYXcgPSBjaHJvbWF0aWNDb3JlICogKGNvcmUgKiAxLjA1ICsgaGFsbyAqIDAuNDIpO1xuICBsZXQgcmdiID0gcmF3IC8gKHZlYzNmKDEpICsgcmF3ICogMC4zMik7XG4gIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xufVxuYDtcblxuZnVuY3Rpb24gcmdiYShoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdmFsdWUgPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGlmICghL15bMC05YS1mXXs2fSQvaS50ZXN0KHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzaXgtZGlnaXQgaGV4IGNvbG9yLCByZWNlaXZlZCBcIiR7aGV4fVwiLmApO1xuICByZXR1cm4gW1xuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgwLCAyKSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgyLCA0KSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSg0LCA2KSwgMTYpIC8gMjU1LFxuICAgIDEsXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjcHJpbWl0aXZlQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDogeyBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LCBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9IH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogbWF4UHJpbWl0aXZlcyAqIGZsb2F0c1BlclByaW1pdGl2ZSAqIDQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuICAgIHRoaXMuI2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH0sXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNwcmltaXRpdmVCdWZmZXIgfSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvblByaW1pdGl2ZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5LlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjYW52YXMgY291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIocHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdLCB0aW1lU2Vjb25kcyA9IDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmlzaWJsZSA9IHByaW1pdGl2ZXMuc2xpY2UoMCwgbWF4UHJpbWl0aXZlcyk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmlzaWJsZS5sZW5ndGggKiBmbG9hdHNQZXJQcmltaXRpdmUpO1xuICAgIHZpc2libGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyUHJpbWl0aXZlO1xuICAgICAgZGF0YS5zZXQoW1xuICAgICAgICBpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQgPz8gaXRlbS53aWR0aCxcbiAgICAgICAgLi4ucmdiYShpdGVtLmNvbG9yKSxcbiAgICAgICAgLi4ucmdiYShpdGVtLnNlY29uZGFyeUNvbG9yID8/IGl0ZW0uY29sb3IpLFxuICAgICAgICBpdGVtLmdsb3cgPz8gMC41LFxuICAgICAgICBpdGVtLmludGVuc2l0eSA/PyAxLFxuICAgICAgICBpdGVtLnNoYXBlID09PSBcImFyY1wiID8gOCA6IGl0ZW0uc2hhcGUgPT09IFwibGluZVwiID8gNyA6IGl0ZW0uc2hhcGUgPT09IFwicGVudGFnb25cIiA/IDYgOiBpdGVtLnNoYXBlID09PSBcImRpYW1vbmRcIiA/IDUgOiBpdGVtLnNoYXBlID09PSBcInNwYXJrXCIgPyA0IDogaXRlbS5zaGFwZSA9PT0gXCJyaW5nXCIgPyAzIDogaXRlbS5zaGFwZSA9PT0gXCJvcmJcIiA/IDIgOiBpdGVtLnNoYXBlID09PSBcImJvbHRcIiA/IDEgOiAwLFxuICAgICAgICBpdGVtLnJvdGF0aW9uID8/IGl0ZW0udGV4dHVyZSA/PyAwLFxuICAgICAgICBpdGVtLmFyY1N0YXJ0ID8/IGl0ZW0ucmltSW50ZW5zaXR5ID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjRW5kID8/IGl0ZW0uc2hhZG93U3RyZW5ndGggPz8gMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgIF0sIG9mZnNldCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHZpc2libGUubGVuZ3RoLCB0aW1lU2Vjb25kc10pKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLjAwNiwgZzogMC4wMDksIGI6IDAuMDI1LCBhOiAwIH0sXG4gICAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICB9XSxcbiAgICB9KTtcbiAgICBpZiAodmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZEdyb3VwKTtcbiAgICAgIHBhc3MuZHJhdyg2LCB2aXNpYmxlLmxlbmd0aCk7XG4gICAgfVxuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbiA9IFwiZmFkZVwiIHwgXCJleHBhbmRGYWRlXCIgfCBcImltcGxvZGVcIiB8IFwic3BhcmtGYWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjb3JlQ29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBkZXRhaWw/OiBudW1iZXI7XG4gIHR1cmJ1bGVuY2U/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGNvcmVJbnRlbnNpdHk/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25UaW1lPzogbnVtYmVyO1xuICBkaXNzaXBhdGlvbkFjdGlvbj86IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uO1xuICBkcmlmdFg/OiBudW1iZXI7XG4gIGRyaWZ0WT86IG51bWJlcjtcbiAgc2VlZD86IG51bWJlcjtcbiAgYWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJ4XCIgfCBcInlcIiB8IFwic2l6ZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbnR5cGUgQ2xvdWQgPSBSZXF1aXJlZDxPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwiY29yZUNvbG9yXCI+PiAmIHsgY29yZUNvbG9yOiBzdHJpbmc7IGFnZTogbnVtYmVyIH07XG5cbmNvbnN0IG1heENsb3VkcyA9IDk2O1xuY29uc3QgZmxvYXRzUGVyQ2xvdWQgPSAyNDtcblxuY29uc3QgZGVmYXVsdHM6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+ID0ge1xuICBjb2xvcjogXCIjNjNlOGZmXCIsXG4gIGNvcmVDb2xvcjogXCIjZmZmZmZmXCIsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0aW9uOiAwLFxuICBzaXplOiAuMjUsXG4gIGRldGFpbDogNSxcbiAgdHVyYnVsZW5jZTogLjc1LFxuICBnbG93OiA0LFxuICBjb3JlSW50ZW5zaXR5OiAxLjQsXG4gIHJpbUludGVuc2l0eTogLjg1LFxuICBvcGFjaXR5OiAxLFxuICBkaXNzaXBhdGlvblRpbWU6IC43LFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJleHBhbmRGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBzZWVkOiAwLFxuICBhZ2U6IDAsXG59O1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLnBhZEVuZCg2LCBcIjBcIikuc2xpY2UoMCwgNik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcml2ZU5lb25DbG91ZENvcmVDb2xvciA9IChjb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgW3IsIGcsIGJdID0gaGV4KGNvbG9yKTtcbiAgY29uc3QgbGlmdCA9IChjaGFubmVsOiBudW1iZXIpID0+IE1hdGgucm91bmQoKGNoYW5uZWwgKyAoMSAtIGNoYW5uZWwpICogLjc4KSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAjJHtsaWZ0KHIpfSR7bGlmdChnKX0ke2xpZnQoYil9YDtcbn07XG5cbmNvbnN0IGFjdGlvblZhbHVlID0gKGFjdGlvbjogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24pOiBudW1iZXIgPT5cbiAgYWN0aW9uID09PSBcImZhZGVcIiA/IDAgOiBhY3Rpb24gPT09IFwiZXhwYW5kRmFkZVwiID8gMSA6IGFjdGlvbiA9PT0gXCJpbXBsb2RlXCIgPyAyIDogMztcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBDbG91ZCB7XG4gIHBvczogdmVjMmYsXG4gIHZlbG9jaXR5OiB2ZWMyZixcbiAgYWdlOiBmMzIsXG4gIGxpZmU6IGYzMixcbiAgc2l6ZTogZjMyLFxuICByb3RhdGlvbjogZjMyLFxuICBzZWVkOiBmMzIsXG4gIGFjdGlvbjogZjMyLFxuICBjb2xvcjogdmVjNGYsXG4gIGNvcmU6IHZlYzRmLFxuICB0dW5pbmc6IHZlYzRmLFxufVxuc3RydWN0IEdsb2JhbHMge1xuICBhc3BlY3Q6IGYzMixcbiAgdGltZTogZjMyLFxuICBjb3VudDogZjMyLFxuICBiYWNrZ3JvdW5kOiBmMzIsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IGdsb2JhbHM6IEdsb2JhbHM7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGNsb3VkczogYXJyYXk8Q2xvdWQ+O1xuXG5mbiBoYXNoKHA6IHZlYzJmKSAtPiBmMzIge1xuICByZXR1cm4gZnJhY3Qoc2luKGRvdChwLCB2ZWMyZigxMjcuMSwgMzExLjcpKSkgKiA0Mzc1OC41NDUzMTIzKTtcbn1cbmZuIG5vaXNlKHA6IHZlYzJmKSAtPiBmMzIge1xuICBsZXQgaSA9IGZsb29yKHApO1xuICBsZXQgZiA9IGZyYWN0KHApO1xuICBsZXQgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbWl4KG1peChoYXNoKGkpLCBoYXNoKGkgKyB2ZWMyZigxLDApKSwgdS54KSwgbWl4KGhhc2goaSArIHZlYzJmKDAsMSkpLCBoYXNoKGkgKyB2ZWMyZigxLDEpKSwgdS54KSwgdS55KTtcbn1cbmZuIGZibShwOiB2ZWMyZiwgb2N0YXZlczogZjMyKSAtPiBmMzIge1xuICB2YXIgdiA9IDAuMDtcbiAgdmFyIGEgPSAwLjU7XG4gIHZhciBxID0gcDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBpZiAoZjMyKGkpID49IG9jdGF2ZXMpIHsgYnJlYWs7IH1cbiAgICB2ICs9IGEgKiBub2lzZShxKTtcbiAgICBxID0gcSAqIDIuMDMgKyB2ZWMyZig2LjksIDMuNyk7XG4gICAgYSAqPSAwLjUyO1xuICB9XG4gIHJldHVybiB2O1xufVxuZm4gcm90YXRlKHA6IHZlYzJmLCBhOiBmMzIpIC0+IHZlYzJmIHtcbiAgbGV0IGMgPSBjb3MoYSk7XG4gIGxldCBzID0gc2luKGEpO1xuICByZXR1cm4gdmVjMmYocC54ICogYyAtIHAueSAqIHMsIHAueCAqIHMgKyBwLnkgKiBjKTtcbn1cbnN0cnVjdCBPdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgQGludGVycG9sYXRlKGZsYXQpIGluc3RhbmNlOiB1MzIsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2aTogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gT3V0IHtcbiAgbGV0IGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBjID0gY2xvdWRzW2luc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgYWN0aW9uU2NhbGUgPSBzZWxlY3QoMS4wICsgbGlmZVQgKiAxLjg1LCAxLjAgLSBsaWZlVCAqIC42MiwgYy5hY3Rpb24gPiAxLjUgJiYgYy5hY3Rpb24gPCAyLjUpO1xuICBsZXQgcmFkaXVzID0gbWF4KC4wMDEsIGMuc2l6ZSAqIGFjdGlvblNjYWxlKSAqIDIuMzU7XG4gIHZhciBjZW50ZXIgPSBjLnBvcyArIGMudmVsb2NpdHkgKiBjLmFnZTtcbiAgY2VudGVyLnggKj0gZ2xvYmFscy5hc3BlY3Q7XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmldO1xuICBsZXQgcCA9IGNlbnRlciArIGxvY2FsICogcmFkaXVzO1xuICB2YXIgbzogT3V0O1xuICBvLnBvc2l0aW9uID0gdmVjNGYocC54IC8gZ2xvYmFscy5hc3BlY3QsIHAueSwgMCwgMSk7XG4gIG8ubG9jYWwgPSBsb2NhbCAqIDIuMzU7XG4gIG8uaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgcmV0dXJuIG87XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBjID0gY2xvdWRzW2lucHV0Lmluc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgbG9jYWwgPSByb3RhdGUoaW5wdXQubG9jYWwsIC1jLnJvdGF0aW9uIC0gbGlmZVQgKiAuNDUpO1xuICBsZXQgciA9IGxlbmd0aChsb2NhbCk7XG4gIGlmIChyID49IDIuMzUpIHsgZGlzY2FyZDsgfVxuICBsZXQgZGV0YWlsID0gY2xhbXAoYy50dW5pbmcueCwgMS4wLCA3LjApO1xuICBsZXQgdHVyYnVsZW5jZSA9IGMudHVuaW5nLnk7XG4gIGxldCB3aXNweSA9IGZibShsb2NhbCAqICgxLjcgKyBkZXRhaWwgKiAuMTYpICsgdmVjMmYoYy5zZWVkLCBjLnNlZWQgKiAuNzEpICsgZ2xvYmFscy50aW1lICogdmVjMmYoLjE2LCAuMDkpICogdHVyYnVsZW5jZSwgbWluKGRldGFpbCwgNC4wKSk7XG4gIGxldCBjb3JlID0gZXhwKC1yICogciAqICgxLjIgKyBjLnR1bmluZy56ICogLjIyKSk7XG4gIGxldCByaW0gPSBleHAoLWFicyhyIC0gLjcyKSAqIDMuNik7XG4gIGxldCBzcGFyayA9IHBvdyhtYXgoMC4wLCBzaW4od2lzcHkgKiAxNi4wICsgYy5zZWVkICsgZ2xvYmFscy50aW1lICogOS4wKSksIDE0LjApICogc2VsZWN0KDAuMCwgMS4wLCBjLmFjdGlvbiA+IDIuNSk7XG4gIGxldCBkaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgxLjQ1LCAyLjM1LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgcmltRGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMi43LCAzLjgsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCBlZGdlRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMS43NSwgMi4zNSwgcik7XG4gIGxldCBkZW5zaXR5ID0gKGNvcmUgKiAuNzIgKyByaW0gKiAuMjQgKiByaW1EaXNzaXBhdGUgKyB3aXNweSAqIC4yMiArIHNwYXJrICogLjU1KSAqIGRpc3NpcGF0ZSAqIGMudHVuaW5nLncgKiBlZGdlRmFkZTtcbiAgbGV0IGhvdENvcmUgPSBjLmNvcmUucmdiICogY29yZSAqIGMudHVuaW5nLnogKiAoMS4wICsgc3BhcmspO1xuICBsZXQgbmVvblJpbSA9IGMuY29sb3IucmdiICogKGRlbnNpdHkgKiAoLjc1ICsgYy5jb2xvci5hICogLjA4KSArIHJpbSAqIHJpbURpc3NpcGF0ZSAqIGMuY29sb3IuYSAqIC4wOCk7XG4gIGxldCBnbG93ID0gbmVvblJpbSArIGhvdENvcmUgKiBkZW5zaXR5O1xuICByZXR1cm4gdmVjNGYoZ2xvdywgY2xhbXAoZGVuc2l0eSAqIC44NSArIHNwYXJrICogLjI1LCAwLjAsIDEuMCkpO1xufWA7XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdEFjdG9yIHtcbiAgc2V0dGluZ3M6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+O1xuICBhZ2UgPSAwO1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyA9IHt9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uZGVmYXVsdHMsIC4uLnNldHRpbmdzLCBzZWVkOiBzZXR0aW5ncy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwIH07XG4gIH1cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLmFnZSArPSBkdDtcbiAgICByZXR1cm4gdGhpcy5hZ2UgPCB0aGlzLnNldHRpbmdzLmRpc3NpcGF0aW9uVGltZTtcbiAgfVxuICByZW5kZXJJbnN0YW5jZSgpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnNldHRpbmdzLCBzZWVkOiB0aGlzLnNldHRpbmdzLnNlZWQgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2J1ZmZlcjogR1BVQnVmZmVyO1xuICAjZ2xvYmFsczogR1BVQnVmZmVyO1xuICAjYmluZDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IHByb2NlZHVyYWwgY2xvdWQgdm9sdW1lIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jZ2xvYmFscyA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNidWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogbWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQgKiA0LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2JpbmQgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFtcbiAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNnbG9iYWxzIH0gfSxcbiAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNidWZmZXIgfSB9LFxuICAgIF0gfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IGNsb3VkIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoY2xvdWRzOiByZWFkb25seSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzW10sIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHBhY2tlZCA9IG5ldyBGbG9hdDMyQXJyYXkobWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQpO1xuICAgIGNsb3Vkcy5zbGljZSgwLCBtYXhDbG91ZHMpLmZvckVhY2goKGNsb3VkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYyA9IHsgLi4uZGVmYXVsdHMsIC4uLmNsb3VkIH07XG4gICAgICBjb25zdCBjb2xvciA9IGhleChjLmNvbG9yKSwgY29yZSA9IGhleChjLmNvcmVDb2xvcik7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlckNsb3VkO1xuICAgICAgcGFja2VkLnNldChbYy54LCBjLnksIGMuZHJpZnRYLCBjLmRyaWZ0WSwgYy5hZ2UgPz8gMCwgYy5kaXNzaXBhdGlvblRpbWUsIGMuc2l6ZSwgYy5yb3RhdGlvbiwgYy5zZWVkLCBhY3Rpb25WYWx1ZShjLmRpc3NpcGF0aW9uQWN0aW9uKSwgMCwgMF0sIG9mZnNldCk7XG4gICAgICBwYWNrZWQuc2V0KFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBjLmdsb3csIGNvcmVbMF0sIGNvcmVbMV0sIGNvcmVbMl0sIGMuY29yZUludGVuc2l0eSwgYy5kZXRhaWwsIGMudHVyYnVsZW5jZSwgYy5yaW1JbnRlbnNpdHksIGMub3BhY2l0eV0sIG9mZnNldCArIDEyKTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNidWZmZXIsIDAsIHBhY2tlZCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jZ2xvYmFscywgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIHRpbWVTZWNvbmRzLCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpLCAwXSkpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7IGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSxcbiAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgIH1dIH0pO1xuICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmQpO1xuICAgIHBhc3MuZHJhdyg2LCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpKTtcbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgbWFwVG9wRG93bkNsb3VkKGNsb3VkOiBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICBjb25zdCBhc3BlY3QgPSBsb2dpY2FsV2lkdGggLyBsb2dpY2FsSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IChjbG91ZC54IC8gbG9naWNhbFdpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gY2xvdWQueSAvIGxvZ2ljYWxIZWlnaHQpICogMi41LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgICBkcmlmdFg6IChjbG91ZC5kcmlmdFggPz8gMCkgLyBsb2dpY2FsV2lkdGggKiBhc3BlY3QgKiAyLjUsXG4gICAgICBkcmlmdFk6IC0oY2xvdWQuZHJpZnRZID8/IDApIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuI2J1ZmZlci5kZXN0cm95KCk7XG4gICAgdGhpcy4jZ2xvYmFscy5kZXN0cm95KCk7XG4gICAgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE5lb25QcmltaXRpdmVSZW5kZXJlciwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciwgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgfSBmcm9tIFwiLi9jbG91ZC1idXJzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2hhcGUgZXh0ZW5kcyBPbWl0PE5lb25TaGFwZUluc3RhbmNlLCBcInhcIiB8IFwieVwiIHwgXCJzY2FsZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TY2VuZSB7XG4gIHByaW1pdGl2ZXM/OiByZWFkb25seSBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM/OiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI3ByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVSZW5kZXJlcjtcbiAgI2Nsb3VkczogTmVvbkNsb3VkQnVyc3RSZW5kZXJlcjtcbiAgI3NoYXBlczogTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI7XG4gICN3aWR0aDogbnVtYmVyO1xuICAjaGVpZ2h0OiBudW1iZXI7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0OyB0aGlzLiN3aWR0aCA9IHdpZHRoOyB0aGlzLiNoZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jcHJpbWl0aXZlcyA9IG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jY2xvdWRzID0gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jc2hhcGVzID0gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogUHJvbWlzZTxOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkgdG9wLWRvd24gc2NlbmVzLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0LCBsb2dpY2FsV2lkdGgsIGxvZ2ljYWxIZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNjZW5lOiBOZW9uVG9wRG93blNjZW5lLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy4jcHJpbWl0aXZlcy5yZW5kZXIoWy4uLihzY2VuZS5wcmltaXRpdmVzID8/IFtdKV0sIHRpbWVTZWNvbmRzLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICBjb25zdCBjbG91ZHMgPSBzY2VuZS5jbG91ZHMgPz8gW107XG4gICAgY29uc3QgYXNwZWN0ID0gdGhpcy4jd2lkdGggLyB0aGlzLiNoZWlnaHQ7XG4gICAgY29uc3Qgc2hhcGVzID0gc2NlbmUuc2hhcGVzID8/IFtdO1xuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB0aGlzLiNzaGFwZXMucmVuZGVyKHNoYXBlcy5tYXAoc2hhcGUgPT4gKHtcbiAgICAgIC4uLnNoYXBlLFxuICAgICAgeDogKHNoYXBlLnggLyB0aGlzLiN3aWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIHNoYXBlLnkgLyB0aGlzLiNoZWlnaHQpICogMi41LFxuICAgICAgc2NhbGU6IChzaGFwZS5oZWlnaHQgPz8gc2hhcGUuc2l6ZSkgLyB0aGlzLiNoZWlnaHQgKiAyLjUsXG4gICAgICBzY2FsZVg6IChzaGFwZS5zY2FsZVggPz8gMSkgKiAoKHNoYXBlLndpZHRoID8/IHNoYXBlLnNpemUpIC8gKHNoYXBlLmhlaWdodCA/PyBzaGFwZS5zaXplKSksXG4gICAgfSkpLCB0cnVlLCB0YXJnZXQpO1xuICAgIGlmIChjbG91ZHMubGVuZ3RoKSB0aGlzLiNjbG91ZHMucmVuZGVyKGNsb3Vkcy5tYXAoY2xvdWQgPT4gdGhpcy4jY2xvdWRzLm1hcFRvcERvd25DbG91ZChjbG91ZCwgdGhpcy4jd2lkdGgsIHRoaXMuI2hlaWdodCkpLCB0aW1lU2Vjb25kcywgdHJ1ZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuI3NoYXBlcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLiNjbG91ZHMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCA9IHR5cGVvZiBsYW5lUnVubmVyU2NlbmVJZHNbbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVPcHRpb25zIHtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB0aW1lTXM6IG51bWJlcjtcbn1cblxuY29uc3Qgc2NlbmVOYW1lczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCBzdHJpbmc+ID0ge1xuICBuZW9uSGFsbDogXCJOZW9uIEhhbGxcIixcbn07XG5cbmNvbnN0IGhhbGxCb3R0b21XaWR0aCA9IDAuOTI7XG5jb25zdCBoYWxsRmxvb3JDb2xvciA9IFwiIzA1MTAxZlwiO1xuY29uc3QgaGFsbERlZXBCbHVlID0gXCIjMTIzNTZhXCI7XG5jb25zdCBoYWxsTXV0ZWRCbHVlID0gXCIjMWI0YzhkXCI7XG5jb25zdCBoYWxsTXV0ZWRDeWFuID0gXCIjMmFjNGRjXCI7XG5jb25zdCBoYWxsTXV0ZWRWaW9sZXQgPSBcIiM0NTMwNzlcIjtcbmNvbnN0IGhhbGxBY2NlbnRQaW5rID0gXCIjYTczNTdlXCI7XG5jb25zdCBoYWxsRW5lcmd5U3BlZWQgPSAwLjAwMTc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSB7XG4gIGZsb29yOiBzdHJpbmc7XG4gIGJvdW5kYXJ5OiBzdHJpbmc7XG4gIGxhbmU6IHN0cmluZztcbiAgY2VudGVyTGFuZTogc3RyaW5nO1xuICBhY2NlbnQ6IHN0cmluZztcbiAgbGFuZUhpZ2hsaWdodDogc3RyaW5nO1xufVxuXG5jb25zdCBzdGFuZGFyZExhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogaGFsbEZsb29yQ29sb3IsXG4gIGJvdW5kYXJ5OiBoYWxsRGVlcEJsdWUsXG4gIGxhbmU6IGhhbGxNdXRlZEJsdWUsXG4gIGNlbnRlckxhbmU6IGhhbGxNdXRlZFZpb2xldCxcbiAgYWNjZW50OiBoYWxsQWNjZW50UGluayxcbiAgbGFuZUhpZ2hsaWdodDogaGFsbE11dGVkQ3lhbixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNjZW5lTmFtZXNbc2NlbmVJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmVSdW5uZXJTY2VuZUlkKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBMYW5lUnVubmVyU2NlbmVJZCB7XG4gIHJldHVybiAobGFuZVJ1bm5lclNjZW5lSWRzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5lUnVubmVyU2NlbmUob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBzd2l0Y2ggKG9wdGlvbnMuc2NlbmVJZCkge1xuICAgIGNhc2UgXCJuZW9uSGFsbFwiOlxuICAgICAgcmV0dXJuIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgc3RhbmRhcmRMYW5lUnVubmVyUGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkSGFsbExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRmxvb3JHbHlwaHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbFNpZGVQYW5lbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxFbmVyZ3lUcmFjZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IC1oZWlnaHQgfTtcbiAgY29uc3QgYm90dG9tWSA9IGhlaWdodCAqIC45ODU7XG4gIGNvbnN0IGJvdHRvbUhhbGYgPSB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCAqIC41O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2cCxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICBsZWZ0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShcbiAgaXRlbXM6IE5lb25QcmltaXRpdmVbXSxcbiAgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sXG4gIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsXG4gIHRpbWVNczogbnVtYmVyLFxuKTogdm9pZCB7XG4gIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtcywgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSk7XG4gIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQyLCB3aWR0aDogd2lkdGggKiBoYWxsQm90dG9tV2lkdGgsIGhlaWdodDogaGVpZ2h0ICogMS4wOCwgY29sb3I6IHBhbGV0dGUuZmxvb3IsIHNlY29uZGFyeUNvbG9yOiBcIiMwMjA1MGRcIiwgZ2xvdzogLjA1LCBpbnRlbnNpdHk6IC4yMywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBwYWxldHRlLmJvdW5kYXJ5LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjc4LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogcGFsZXR0ZS5hY2NlbnQsIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmNlbnRlckxhbmUsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5ib3VuZGFyeSwgLjQ4LCA2LjUpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5sYW5lO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBjb2xvciwgbGFuZSA9PT0gMiA/IC4yOCA6IC4yLCAzLjQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGxhbmUgPT09IDIgPyAuMjYgOiAuMTgsIC45KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDE1OyByb3crKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgcm93UHVsc2UgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA0ODAgKyByb3cgKiAuNzgpICogLjQyO1xuICAgIGNvbnN0IHN1cmdlID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZU1zIC8gODIwIC0gcm93ICogLjcyKSk7XG4gICAgY29uc3QgY29sb3IgPSByb3cgJSA0ID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcm93ICUgNCA9PT0gMSA/IHBhbGV0dGUubGFuZSA6IHJvdyAlIDQgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmFjY2VudDtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgdHlwZSBOZW9uUHJvamVjdGlsZVNoYXBlID0gXCJkYXJ0XCIgfCBcIm5lZWRsZVwiIHwgXCJzbHVnXCIgfCBcInNwbGl0Qm9sdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Qcm9qZWN0aWxlT3B0aW9ucyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2ZWxvY2l0eVg/OiBudW1iZXI7XG4gIHZlbG9jaXR5WT86IG51bWJlcjtcbiAgcmFkaXVzPzogbnVtYmVyO1xuICBsZW5ndGg/OiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoPzogbnVtYmVyO1xuICB0cmFpbFdpZHRoPzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB0cmFpbENvbG9yPzogc3RyaW5nO1xuICBjb3JlQ29sb3I/OiBzdHJpbmc7XG4gIHNoYXBlPzogTmVvblByb2plY3RpbGVTaGFwZTtcbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xufVxuXG5jb25zdCByb3RhdGlvbkZvclNjcmVlbkZvcndhcmRWZWN0b3IgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KHgsIHkpIHx8IDE7XG4gIHJldHVybiBNYXRoLmF0YW4yKHggLyBsZW5ndGgsIC15IC8gbGVuZ3RoKTtcbn07XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJvamVjdGlsZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2ZWxvY2l0eVg6IG51bWJlcjtcbiAgdmVsb2NpdHlZOiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhaWxXaWR0aDogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB0cmFpbENvbG9yOiBzdHJpbmc7XG4gIGNvcmVDb2xvcjogc3RyaW5nO1xuICBzaGFwZTogTmVvblByb2plY3RpbGVTaGFwZTtcbiAgaW50ZW5zaXR5OiBudW1iZXI7XG4gIGdsb3c6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uUHJvamVjdGlsZU9wdGlvbnMpIHtcbiAgICB0aGlzLng9b3B0aW9ucy54O3RoaXMueT1vcHRpb25zLnk7dGhpcy52ZWxvY2l0eVg9b3B0aW9ucy52ZWxvY2l0eVg/PzA7dGhpcy52ZWxvY2l0eVk9b3B0aW9ucy52ZWxvY2l0eVk/Py01MDA7XG4gICAgdGhpcy5yYWRpdXM9b3B0aW9ucy5yYWRpdXM/PzM7dGhpcy5sZW5ndGg9b3B0aW9ucy5sZW5ndGg/Pzk7dGhpcy50cmFpbExlbmd0aD1vcHRpb25zLnRyYWlsTGVuZ3RoPz8xNjt0aGlzLnRyYWlsV2lkdGg9b3B0aW9ucy50cmFpbFdpZHRoPz8xLjU7XG4gICAgdGhpcy5jb2xvcj1vcHRpb25zLmNvbG9yO3RoaXMudHJhaWxDb2xvcj1vcHRpb25zLnRyYWlsQ29sb3I/P29wdGlvbnMuY29sb3I7dGhpcy5jb3JlQ29sb3I9b3B0aW9ucy5jb3JlQ29sb3I/P29wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5zaGFwZT1vcHRpb25zLnNoYXBlPz9cImRhcnRcIjt0aGlzLmludGVuc2l0eT1vcHRpb25zLmludGVuc2l0eT8/MTt0aGlzLmdsb3c9b3B0aW9ucy5nbG93Pz8uNzU7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eVggKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHlZICogZGVsdGFTZWNvbmRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpbWl0aXZlcygpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIGNvbnN0IHNwbGl0ID0gdGhpcy5zaGFwZSA9PT0gXCJzcGxpdEJvbHRcIjtcbiAgICBjb25zdCBuZWVkbGUgPSB0aGlzLnNoYXBlID09PSBcIm5lZWRsZVwiO1xuICAgIGNvbnN0IHNsdWcgPSB0aGlzLnNoYXBlID09PSBcInNsdWdcIjtcbiAgICBjb25zdCBzcGVlZCA9IE1hdGguaHlwb3QodGhpcy52ZWxvY2l0eVgsIHRoaXMudmVsb2NpdHlZKSB8fCAxO1xuICAgIGNvbnN0IGRpcmVjdGlvblggPSB0aGlzLnZlbG9jaXR5WCAvIHNwZWVkO1xuICAgIGNvbnN0IGRpcmVjdGlvblkgPSB0aGlzLnZlbG9jaXR5WSAvIHNwZWVkO1xuICAgIGNvbnN0IHJvdGF0aW9uID0gcm90YXRpb25Gb3JTY3JlZW5Gb3J3YXJkVmVjdG9yKHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSk7XG4gICAgY29uc3QgaXRlbXM6IE5lb25QcmltaXRpdmVbXSA9IFt7XG4gICAgICB4OnRoaXMueC1kaXJlY3Rpb25YKnRoaXMudHJhaWxMZW5ndGgqLjUseTp0aGlzLnktZGlyZWN0aW9uWSp0aGlzLnRyYWlsTGVuZ3RoKi41LFxuICAgICAgd2lkdGg6dGhpcy50cmFpbFdpZHRoLGhlaWdodDp0aGlzLnRyYWlsTGVuZ3RoLGNvbG9yOnRoaXMudHJhaWxDb2xvcixzZWNvbmRhcnlDb2xvcjp0aGlzLmNvbG9yLFxuICAgICAgZ2xvdzp0aGlzLmdsb3cqLjYsaW50ZW5zaXR5OnRoaXMuaW50ZW5zaXR5Ki43MixzaGFwZTpcImJvbHRcIixyb3RhdGlvbixcbiAgICB9XTtcbiAgICBjb25zdCB3aWR0aD1zbHVnP3RoaXMucmFkaXVzKjEuNTpuZWVkbGU/dGhpcy5yYWRpdXMqLjY1OnRoaXMucmFkaXVzO1xuICAgIGNvbnN0IGhlaWdodD1zbHVnP3RoaXMubGVuZ3RoKi43NTp0aGlzLmxlbmd0aDtcbiAgICBjb25zdCBzaWRlWCA9IC1kaXJlY3Rpb25ZO1xuICAgIGNvbnN0IHNpZGVZID0gZGlyZWN0aW9uWDtcbiAgICBjb25zdCBhZGQ9KG9mZnNldDpudW1iZXIpPT5pdGVtcy5wdXNoKHt4OnRoaXMueCtzaWRlWCpvZmZzZXQseTp0aGlzLnkrc2lkZVkqb2Zmc2V0LHdpZHRoLGhlaWdodCxjb2xvcjp0aGlzLmNvbG9yLHNlY29uZGFyeUNvbG9yOnRoaXMuY29yZUNvbG9yLGdsb3c6dGhpcy5nbG93LGludGVuc2l0eTp0aGlzLmludGVuc2l0eSxzaGFwZTpuZWVkbGU/XCJjaXJjbGVcIjpcImJvbHRcIixyb3RhdGlvbn0pO1xuICAgIGlmKHNwbGl0KXthZGQoLXRoaXMucmFkaXVzKi43KTthZGQodGhpcy5yYWRpdXMqLjcpfWVsc2UgYWRkKDApO1xuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVNwYXduRW50cmFuY2UgPSBcInNjYXR0ZXJcIiB8IFwiZmFkZVwiO1xuZXhwb3J0IHR5cGUgRW5lbXlEZWF0aFZpc3VhbCA9IFwiY2xvdWRcIiB8IFwibm9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFwZUlkOiBzdHJpbmc7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG4gIHNwYXduRW50cmFuY2U6IEVuZW15U3Bhd25FbnRyYW5jZTtcbiAgc3Bhd25Tb3VuZDogc3RyaW5nIHwgbnVsbDtcbiAgZGVhdGhTb3VuZDogc3RyaW5nO1xuICBkZWF0aFZpc3VhbDogRW5lbXlEZWF0aFZpc3VhbDtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiaHVudGVyLWV5ZVwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgZ2xhc3NTaGllbGQ6IHtcbiAgICAgIGxhYmVsOiBcIkdsYXNzIFNoaWVsZFwiLFxuICAgICAgaGVhbHRoOiAuMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNS42LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IC4xLFxuICAgICAgc2NvcmU6IDMsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidHJpY2stZ2F0ZVwiLFxuICAgICAgZ2xvdzogLjYyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xMixcbiAgICAgIHJpbUludGVuc2l0eTogMC45LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC40NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogNzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuMSxcbiAgICAgIHNoYXBlWm9vbTogMy4wNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IC42NSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjI1LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJmYWRlXCIsXG4gICAgICBzcGF3blNvdW5kOiBudWxsLFxuICAgICAgZGVhdGhTb3VuZDogXCJHbGFzc1NoaWVsZFNoYXR0ZXJcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHdpbmdlcjoge1xuICAgICAgbGFiZWw6IFwiV2luZ2VyXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNzYsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxNCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJlbGl0ZS13aW5nc1wiLFxuICAgICAgZ2xvdzogLjg2LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4yMixcbiAgICAgIHJpbUludGVuc2l0eTogMS4yLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC42NixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogODUsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuNzUsXG4gICAgICBzaGFwZVpvb206IDMuMjUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIHRhbms6IHtcbiAgICAgIGxhYmVsOiBcIlRhbmtcIixcbiAgICAgIGhlYWx0aDogNixcbiAgICAgIHNwZWVkOiA0NCxcbiAgICAgIHJhZGl1czogMTYsXG4gICAgICBjb2x1bW5TcGFuOiAzLFxuICAgICAgY29udGFjdERhbWFnZTogMixcbiAgICAgIHNjb3JlOiA4MCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0YW5rLWJ1bmtlclwiLFxuICAgICAgZ2xvdzogMS4wNSxcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuNDUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjg1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDIuNyxcbiAgICAgIHNoYXBlWm9vbTogNC40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMi4xLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuOSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJCb3NzXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkJvc3NEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihvcmIuY29sdW1uU3BhbikgJiYgb3JiLmNvbHVtblNwYW4gPj0gMSwgYCR7aWR9IGNvbHVtblNwYW4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEd1bklkIH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbiAgc3RhcnRpbmdHdW46IEd1bklkO1xuICBzdGFydGluZ0d1bkxldmVsOiAxIHwgMiB8IDM7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGRlZmluaXRpb246IFRyYWNrRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFja0VudGl0eSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgbGFuZUluZGV4OiBudW1iZXI7XG4gIGNvbHVtblNwYW46IG51bWJlcjtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgZGlzdGFuY2VGcm9tUGxheWVyOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5jb25zdCBpc0VuZW15ID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IGlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIik7XG5jb25zdCBlbmVteUlkRnJvbVRyYWNrSWQgPSAoaWQ6IHN0cmluZyk6IE9yYklkIHwgbnVsbCA9PiB7XG4gIGlmIChpZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBjYW5kaWRhdGUgPSBpZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG4gIHJldHVybiBjYW5kaWRhdGUgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgT3JiSWQgOiBudWxsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHRyYWNrLmxheW91dFxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcCgodGV4dCwgc291cmNlSW5kZXgpID0+ICh7IHRleHQ6IHRleHQudHJpbSgpLCBzb3VyY2VJbmRleDogc291cmNlSW5kZXggKyAxIH0pKVxuICAgIC5maWx0ZXIocm93ID0+IHJvdy50ZXh0Lmxlbmd0aCA+IDApO1xuXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGF5b3V0IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgcm93LlwiKTtcblxuICBsZXQgbGVmdFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxldCByaWdodFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG5cbiAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgcGlwZUNvdW50ID0gWy4uLnJvdy50ZXh0XS5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3RlciA9PT0gXCJ8XCIpLmxlbmd0aDtcbiAgICBpZiAocGlwZUNvdW50ICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgXCJ8XCIgc2VwYXJhdG9yOyBmb3VuZCAke3BpcGVDb3VudH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHJvdy50ZXh0LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgbGVmdFdpZHRoID8/PSBsZWZ0Lmxlbmd0aDtcbiAgICByaWdodFdpZHRoID8/PSByaWdodC5sZW5ndGg7XG5cbiAgICBpZiAobGVmdC5sZW5ndGggIT09IGxlZnRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIGxlZnQgd2lkdGggJHtsZWZ0Lmxlbmd0aH07IGV4cGVjdGVkICR7bGVmdFdpZHRofS5gKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0Lmxlbmd0aCAhPT0gcmlnaHRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIHJpZ2h0IHdpZHRoICR7cmlnaHQubGVuZ3RofTsgZXhwZWN0ZWQgJHtyaWdodFdpZHRofS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0YW5jZUZyb21QbGF5ZXIgPSByb3dzLmxlbmd0aCAtIDEgLSByb3dJbmRleDtcbiAgICBmb3IgKGNvbnN0IFtzaWRlLCBsYW5lXSBvZiBbW1wibGVmdFwiLCBsZWZ0XSwgW1wicmlnaHRcIiwgcmlnaHRdXSBhcyBjb25zdCkge1xuICAgICAgY29uc3Qgb2NjdXBpZWRCeSA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoZW50cnkuaWQpO1xuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gZW5lbXlJZCA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdLmNvbHVtblNwYW4gOiAxO1xuICAgICAgICBpZiAobGFuZUluZGV4ICsgY29sdW1uU3BhbiA+IGxhbmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBuZWVkcyAke2NvbHVtblNwYW59IGNvbHVtbnMgYW5kIG9ubHkgJHtsYW5lLmxlbmd0aCAtIGxhbmVJbmRleH0gcmVtYWluLmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSB7XG4gICAgICAgICAgY29uc3Qgb2NjdXBpZWQgPSBvY2N1cGllZEJ5LmdldChsYW5lSW5kZXggKyBvZmZzZXQpO1xuICAgICAgICAgIGlmIChvY2N1cGllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IG9uICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleCArIG9mZnNldH0sIGFscmVhZHkgb2NjdXBpZWQgYnkgJHtvY2N1cGllZH0uYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSBvY2N1cGllZEJ5LnNldChsYW5lSW5kZXggKyBvZmZzZXQsIGVudHJ5LmlkKTtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIGNvbHVtblNwYW4sXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZGlzdGFuY2VGcm9tUGxheWVyLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogKGVudHJ5LnNwZWVkID8/IDEpICogKGlzRW5lbXkoZW50cnkuaWQpID8gdHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDogMSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRpZXMuc29ydCgoYSwgYikgPT5cbiAgICBhLmRpc3RhbmNlRnJvbVBsYXllciAtIGIuZGlzdGFuY2VGcm9tUGxheWVyIHx8XG4gICAgYS5yb3dJbmRleCAtIGIucm93SW5kZXggfHxcbiAgICBhLnNpZGUubG9jYWxlQ29tcGFyZShiLnNpZGUpIHx8XG4gICAgYS5sYW5lSW5kZXggLSBiLmxhbmVJbmRleCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMTogRmlyc3QgR2xvd1wiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIkEgZ2VudGxlIG9uYm9hcmRpbmcgcnVuOiBlYXJseSB0ZW5zaW9uLCBhIHF1aWNrIHBvd2VyLXVwIGJlYXQsIHRoZW4gZWFzeSBlc2NhbGF0aW5nIHdhdmVzIGZvciBhIGZpcnN0LXRpbWUgcGxheWVyLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMjUsXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLi4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLkUuXHJcbi4uRy4uIHwgLi4uLi5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAxIH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDEgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAxIH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xyXG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMjogTmVvbiBXYWtlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHNlY29uZCBvbmJvYXJkaW5nIHJ1bjogYSBzbGlnaHRseSBkZW5zZXIgb3BlbmluZywgZWFybHkgcmVjb3ZlcnkgcGlja3VwcywgYW5kIGEgZ2VudGxlIGZpbmFsZSB0aGF0IHRlYWNoZXMgdGhlIHBsYXllciB0byB0cnVzdCB0aGVpciBncm93aW5nIHNxdWFkLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMzAsXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRy4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5TLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi5FLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDEuMSB9LFxyXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS4wLFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcclxuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDM6IFByaXNtIFByZXNzdXJlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHRoaXJkIG9uYm9hcmRpbmcgcnVuIHN0cmV0Y2hlcyB0aGUgcGxheWVyXHUyMDE5cyBlbmR1cmFuY2Ugd2l0aCBsb25nZXIgcGFjaW5nLCBzYWZlciB1cGdyYWRlIHdpbmRvd3MsIGFuZCBkZW5zZXIgYnV0IHN0aWxsIGZvcmdpdmluZyBlbmVteSBwYXR0ZXJucy5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDYwLFxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4yLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLlMuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5TLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLi4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uYi5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAxIH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC45IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiYlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiLCBzcGVlZDogMC45IH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEuMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XHJcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCA0OiBWaW9sZXQgU3VyZ2VcIixcclxuICBkZXNjcmlwdGlvbjogXCJUaGUgZm91cnRoIHJ1biBkb3VibGVzIHRoZSBlbmR1cmFuY2UgdGVzdCBhZ2FpbiwgYWRkaW5nIGRlbnNlciB3YXZlcywgYmlnZ2VyIHBpY2t1cCB0aW1pbmcgZGVjaXNpb25zLCBhbmQgaGlnaGVyLXRpZXIgdG9vbHMgd2hpbGUgc3RheWluZyByZWFkYWJsZSBhbmQgZmFpci5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDEyMCxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgZW52aXJvbm1lbnQ6IHtcclxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcclxuICB9LFxyXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuLi5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uMi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcblMuLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuVy5hLi4gfCAuLi4uV1xyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5JLi4gfCAuLlQuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuVy4uLi4gfCAuLi4uV1xyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4uLmIgfCAuLi4uLlxyXG4uLlQuLiB8IC4uLi4uXHJcbldFLkUuIHwgLi5FLldcclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLlAuXHJcbi4uLi4uIHwgLi5FUC5cclxuLkUuRS4gfCAuLkVQLlxyXG4uLi4uLiB8IC4uLlAuXHJcbi4uUy4uIHwgLi4uUC5cclxuLi4uLi4gfCAuLi5QLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi5QLi4uIHwgLkUuRS5cclxuLlBFLi4gfCAuLi4uLlxyXG4uUC4uLiB8IC4uLi4uXHJcbi5QRS4uIHwgLkUuRS5cclxuLlAuLi4gfCAuLi4uLlxyXG4uUC4uLiB8IC4uSy4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbkVFRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkVFRVxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5YLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYyB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuRUVFLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uRUVFXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkVFRVxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uWC4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRUUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuLi4gfCAuRS4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uRS4gfCAuLi4uLlxyXG4uLkguLiB8IC4uLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS4uLiB8IC4uLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi5FLi4gfCAuLkwuLlxyXG4uLlMuLiB8IC4uSy4uXHJcbi4uYi4uIHwgLi4uLi5cclxuLi5NLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMS4yIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcIldcIjogeyBpZDogXCJlbmVteS53aW5nZXJcIiB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIlRcIjogeyBpZDogXCJlbmVteS50YW5rXCIgfSxcclxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJKXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJlbmVteS5nbGFzc1NoaWVsZFwiIH0sXHJcbiAgICAgIFwiS1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJYXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJjXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5uZWVkbGVSYXBpZXJcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJIXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ubmVlZGxlclNtZ1wiIH0sXHJcbiAgICAgIFwiTFwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiIH0sXHJcbiAgICAgIFwiTVwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xyXG4iLCAiaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgfSBmcm9tIFwiLi9UcmFjazFcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGdlbmVyYXRlZFRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgZ2VuZXJhdGVkVHJhY2szIH0gZnJvbSBcIi4vVHJhY2szXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBnZW5lcmF0ZWRUcmFjazQgfSBmcm9tIFwiLi9UcmFjazRcIjtcbi8vIFJlZ2lzdGVyIGEgdHJhY2sgYnkgaW1wb3J0aW5nIGl0IGFuZCBhZGRpbmcgb25lIGVudHJ5IGhlcmUuXG5leHBvcnQgY29uc3QgdHJhY2tzID0ge1xuIFxuICBcInRyYWNrMVwiOiBnZW5lcmF0ZWRUcmFjayxcbiAgXCJ0cmFjazJcIjogZ2VuZXJhdGVkVHJhY2syLFxuICBcInRyYWNrM1wiOiBnZW5lcmF0ZWRUcmFjazMsXG4gIFwidHJhY2s0XCI6IGdlbmVyYXRlZFRyYWNrNCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB7IGdlbmVyYXRlZFRyYWNrLCBnZW5lcmF0ZWRUcmFjazIsIGdlbmVyYXRlZFRyYWNrMywgZ2VuZXJhdGVkVHJhY2s0IH07IFxuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCB0cmFja10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLmR1cmF0aW9uU2Vjb25kcyA+IDAsIGAke2lkfSBkdXJhdGlvbiBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZCh0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aXBsaWVyTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3F1YWRBZGRlZDogbnVtYmVyO1xuICBtYXhTcXVhZFNpemU6IG51bWJlcjtcbiAgbWVtYmVyc1BlclJvdzogbnVtYmVyO1xuICBtZW1iZXJSYWRpdXM6IG51bWJlcjtcbiAgc3BhY2luZzogbnVtYmVyO1xuICBwaWNrdXBDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwdWxzZVJhdGU6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNxdWFkIE11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBzcXVhZFBsdXNPbmU6IHtcbiAgICAgIGxhYmVsOiBcIisxIFdpbmdtYXRlXCIsXG4gICAgICBzcXVhZEFkZGVkOiAxLFxuICAgICAgbWF4U3F1YWRTaXplOiAxMCxcbiAgICAgIG1lbWJlcnNQZXJSb3c6IDUsXG4gICAgICBtZW1iZXJSYWRpdXM6IDUuMjUsXG4gICAgICBzcGFjaW5nOiAyOSxcbiAgICAgIHBpY2t1cENvbG9yOiBcImdvbGRcIixcbiAgICAgIGNvcmVDb2xvcjogXCJjeWFuXCIsXG4gICAgICBwdWxzZVJhdGU6IDIuMixcbiAgICAgIHBpY2t1cFNoYXBlWm9vbTogMy4xLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLnNxdWFkQWRkZWQgPiAwLCBgJHtpZH0gbXVzdCBhZGQgc3F1YWQgbWVtYmVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1heFNxdWFkU2l6ZSA+PSBpdGVtLm1lbWJlcnNQZXJSb3csIGAke2lkfSBtYXggc3F1YWQgbXVzdCBmaXQgYXQgbGVhc3Qgb25lIHJvdy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1lbWJlclJhZGl1cyA+IDAgJiYgaXRlbS5zcGFjaW5nID4gaXRlbS5tZW1iZXJSYWRpdXMgKiAyLCBgJHtpZH0gbWVtYmVyIGdlb21ldHJ5IG92ZXJsYXBzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2l0ZW0ucGlja3VwQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwaWNrdXAgY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsaWVyRmFtaWx5ID0gbmV3IE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBNdWx0aXBsaWVySWQgPSBrZXlvZiB0eXBlb2YgbXVsdGlwbGllckZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNoaWVsZE9yYml0ZXJTaGFwZSA9IFwiZG90XCIgfCBcImhleFwiO1xuZXhwb3J0IHR5cGUgU2hpZWxkTW9kZSA9IFwiY2hhcmdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInNoaWVsZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgbW9kZTogU2hpZWxkTW9kZTtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKiBCYXNpYyBzaGllbGQgc3RyZW5ndGguIEVuZW15IEhQIGlzIHN1YnRyYWN0ZWQgZnJvbSB0aGlzIHZhbHVlLiAqL1xuICBtYXhDaGFyZ2VzOiBudW1iZXI7XG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiAwO1xuICBwdXNoRGlzdGFuY2U6IDA7XG4gIHNsb3dNdWx0aXBsaWVyOiAxO1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgb3JiaXRlclNoYXBlOiBTaGllbGRPcmJpdGVyU2hhcGU7XG4gIG9yYml0ZXJDb3VudDogbnVtYmVyO1xuICBvcmJpdGVyU3BlZWQ6IG51bWJlcjtcbiAgb3JiaXRlclNpemU6IG51bWJlcjtcbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNoaWVsZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInNoaWVsZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU2hpZWxkXCI7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBsaWdodEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJMaWdodCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogOCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMSxcbiAgICAgIG9yYml0ZXJTaXplOiA0LjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkxpZ2h0d2VpZ2h0IHNoaWVsZCB3aXRoIHR3byBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBzYXRlbGxpdGVHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiU2F0ZWxsaXRlIEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEwLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDYsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNzUsXG4gICAgICBvcmJpdGVyU2l6ZTogNC43NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiQmFsYW5jZWQgc2hpZWxkIHdpdGggZm91ciBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBoZXhHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiSGV4IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgbWF4Q2hhcmdlczogNyxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTIsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJnb2xkXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiaGV4XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDgsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNDUsXG4gICAgICBvcmJpdGVyU2l6ZTogNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgc2hpZWxkIHdpdGggc2V2ZW4gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc2hpZWxkXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1vZGUgPT09IFwiY2hhcmdlXCIsIGAke2lkfSBtdXN0IHVzZSB0aGUgc2hhcmVkIGNoYXJnZSBiZWhhdmlvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQucmFkaXVzID4gMCwgYCR7aWR9IHJhZGl1cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tYXhDaGFyZ2VzID4gMCwgYCR7aWR9IHN0cmVuZ3RoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJDb3VudCA+IDAsIGAke2lkfSBtdXN0IGhhdmUgb3JiaXRlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJTcGVlZCA+PSAwLCBgJHtpZH0gb3JiaXRlclNwZWVkIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoaWVsZEZhbWlseSA9IG5ldyBTaGllbGRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTaGllbGRJZCA9IGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBIb3cgdGhlIHN3b3JkIHNlbGVjdHMgdGFyZ2V0cyBmcm9tIHRoZSBuZWFyYnkgdGhyZWF0IHBvb2wuXG4gKiBBbGwgbW9kZXMgYXJlIGxhbmUtYXdhcmUgdmlhIHRoZSBOZWFyYnlUaHJlYXRRdWVyeSBtb2R1bGUuXG4gKi9cbmV4cG9ydCB0eXBlIFN3b3JkVGFyZ2V0aW5nTW9kZSA9XG4gIHwgXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiICAgLy8gY2xvc2VzdCBlbmVteSBpbiB0aGUgcGxheWVyJ3MgYWN0aXZlIGxhbmVcbiAgfCBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIiAgICAvLyBjbG9zZXN0IGVuZW15IHJlZ2FyZGxlc3Mgb2YgbGFuZVxuICB8IFwiZnJvbnRNb3N0VGhyZWF0XCIgICAgICAgIC8vIGZhcnRoZXN0LWFkdmFuY2VkIChoaWdoZXN0IHkpIGVuZW15IGluIHJhbmdlXG4gIHwgXCJjbHVzdGVyTmVhclBsYXllclwiOyAgICAgLy8gcGlja3MgdXAgdG8gbWF4VGFyZ2V0cyBlbmVtaWVzIHdpdGhpbiByZWFjaFxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInN3b3JkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICAvKipcbiAgICogQXR0YWNrIHJhbmdlIGluIHBpeGVscyAoYXQgc2NhbGUgMSkuXG4gICAqIFN3b3JkIG9ubHkgc3dpbmdzIHdoZW4gYW4gZW5lbXkgZW50ZXJzIHRoaXMgcmFkaXVzLlxuICAgKi9cbiAgcmFuZ2U6IG51bWJlcjtcbiAgLyoqXG4gICAqIEFuZ3VsYXIgd2lkdGggb2YgdGhlIHNsYXNoIGFyYyBpbiBkZWdyZWVzLlxuICAgKiBXaWRlciA9IGhlYXZpZXIsIGhpdHMgbW9yZSBlbmVtaWVzIHBlciBzd2luZy5cbiAgICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIERhbWFnZSBwZXIgaGl0LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIENvb2xkb3duIGJldHdlZW4gc3dpbmdzIGluIHNlY29uZHMuIFN3b3JkcyBkbyBOT1QgZmlyZSBvbiBhIHRpbWVyIFx1MjAxNCBvbmx5IHdoZW4gYSB0YXJnZXQgZXhpc3RzLiAqL1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgLyoqIE1heGltdW0gdGFyZ2V0cyBoaXQgcGVyIHN3aW5nLiAqL1xuICBtYXhUYXJnZXRzOiBudW1iZXI7XG4gIC8qKiBMYW5lLWF3YXJlIHRhcmdldCBzZWxlY3Rpb24gbW9kZS4gKi9cbiAgdGFyZ2V0aW5nTW9kZTogU3dvcmRUYXJnZXRpbmdNb2RlO1xuICAvKiogVmlzdWFsIHNsYXNoIGFyYyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuICovXG4gIHNsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogUHJpbWFyeSBzbGFzaCBjb2xvci4gKi9cbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIC8qKiBWaXN1YWwgdGhpY2tuZXNzIG11bHRpcGxpZXIgZm9yIHRoZSBzaGFyZWQgc3dvcmQgdHJhaWwuIDEuMCA9IGRlZmF1bHQuICovXG4gIHNsYXNoVGhpY2tuZXNzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBkZXNpZ24gbm90ZXMuIE5vdCB1c2VkIGJ5IHJ1bnRpbWUgXHUyMDE0IGRvY3VtZW50cyBpbnRlbnQgZm9yIGZ1dHVyZSBhZ2VudHMuXG4gICAqL1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZhbWlseSBkZWZpbml0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzd29yZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3dvcmRcIjtcblxuICAvKipcbiAgICogRmFtaWx5LWxldmVsIGltcGxlbWVudGF0aW9uIG5vdGVzOlxuICAgKiAtIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZXkgc3dpbmcgb25seSB3aGVuIGEgdmFsaWQgdGFyZ2V0XG4gICAqICAgaXMgd2l0aGluIHJhbmdlIGFuZCBjb29sZG93biBpcyByZWFkeS4gVGhleSBpZGxlIHNpbGVudGx5IG90aGVyd2lzZS5cbiAgICogLSBPbmUgYWN0aXZlIHN3b3JkIHBlciBwbGF5ZXIgKGZhbWlseS1zY29wZWQgZXhjbHVzaXZpdHkpLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgXHUyMDE0IENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogSGl0cyAxXHUyMDEzMiBlbmVtaWVzIGRlcGVuZGluZyBvbiBhcmMgb3ZlcmxhcC4gU2hvcnQgY29vbGRvd24uXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC44NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwXHUyMDEzMTgwbXMgZmVlbC4gRmFkaW5nIGFmdGVyaW1hZ2UuIExpa2UgYSB3aGlwLWxpa2Uga2F0YW5hIGFyYy5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXZlciBcdTIwMTQgSGVhdnkgc3dvcmQuIFNsb3dlciBidXQgaGl0cyBtdWx0aXBsZSBjbHVzdGVyZWQgZW5lbWllcy5cbiAgICAgKiBXaWRlIGFyYywgdGhpY2tlciBzbGFzaC4gQmV0dGVyIGFnYWluc3QgdGlnaHQgZ3JvdXBzIHRoYW4gZmFzdCBzaW5nbGVzLlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDU2LFxuICAgICAgYXJjRGVncmVlczogMTEwLFxuICAgICAgZGFtYWdlOiAyLjgsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuOCxcbiAgICAgIG1heFRhcmdldHM6IDQsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImNsdXN0ZXJOZWFyUGxheWVyXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDIyMCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuNjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IGFuZCB3aWRlLiBUaGlja2VyIGFyYy4gU3Ryb25nZXIgaW1wYWN0IGZsYXNoLiBHZW9tZXRyaWMgYW5kIHByb2NlZHVyYWwgXHUyMDE0IG5vdCBhIGJ1bGxldC5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmVlZGxlIFJhcGllciBcdTIwMTQgUHJlY2lzaW9uIHN3b3JkLiBMb25nIHJlYWNoLCBuYXJyb3cgYXJjLCBzaW5nbGUgdGFyZ2V0LlxuICAgICAqIFByaW9yaXRpemVzIHRoZSBtb3N0IGRhbmdlcm91cyAoZnJvbnQtbW9zdCkgZW5lbXkuXG4gICAgICovXG4gICAgbmVlZGxlUmFwaWVyOiB7XG4gICAgICBsYWJlbDogXCJOZWVkbGUgUmFwaWVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDcwLFxuICAgICAgYXJjRGVncmVlczogMzAsXG4gICAgICBkYW1hZ2U6IDIuMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMS4xLFxuICAgICAgbWF4VGFyZ2V0czogMSxcbiAgICAgIHRhcmdldGluZ01vZGU6IFwiZnJvbnRNb3N0VGhyZWF0XCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMC41NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRWxlZ2FudCBhbmQgcHJlY2lzZS4gVGhpbiBzdGFiYmluZyBsaW5lLiBOb3QgYSBndW4gc2hvdCBcdTIwMTQgaXQgbXVzdCBmZWVsIG1lbGVlLiBTaW5nbGUgdGFyZ2V0IHByaW9yaXR5LlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gc2xhc2hEdXJhdGlvbk1zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hUaGlja25lc3MgPiAwLCBgJHtpZH0gc2xhc2hUaGlja25lc3MgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzd29yZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3dvcmRGYW1pbHkgPSBuZXcgU3dvcmRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTd29yZElkID0ga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTcXVhZElucHV0Q2FsbGJhY2tzIHtcbiAgbGFuZSgpOiAwIHwgMTtcbiAgc2V0TGFuZShsYW5lOiAwIHwgMSk6IHZvaWQ7XG4gIHNldEFpbSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcbiAgcmVsZWFzZUFpbSgpOiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZFNxdWFkSW5wdXQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGpveXN0aWNrOiBzdHJpbmcsXG4gIGNhbGxiYWNrczogU3F1YWRJbnB1dENhbGxiYWNrcyxcbik6IHZvaWQge1xuICBsZXQgcG9pbnRlcklkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgbGV0IHBvaW50ZXJTdGFydGVkWCA9IDA7XG4gIGxldCBwb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgY29uc3QgYXBwbHlQb2ludGVyID0gKGNsaWVudFg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJvdW5kcyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBub3JtYWxpemVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGNsaWVudFggLSBib3VuZHMubGVmdCkgLyBib3VuZHMud2lkdGgpKTtcbiAgICBjb25zdCBsYW5lOiAwIHwgMSA9IG5vcm1hbGl6ZWQgPCAuNSA/IDAgOiAxO1xuICAgIGlmIChsYW5lICE9PSBjYWxsYmFja3MubGFuZSgpKSBjYWxsYmFja3Muc2V0TGFuZShsYW5lKTtcbiAgICBjb25zdCBsYW5lU3RhcnQgPSBsYW5lID09PSAwID8gMCA6IC41O1xuICAgIGNvbnN0IHdpdGhpbkxhbmUgPSAobm9ybWFsaXplZCAtIGxhbmVTdGFydCkgLyAuNTtcbiAgICBjYWxsYmFja3Muc2V0QWltKCh3aXRoaW5MYW5lIC0gLjUpICogMik7XG4gIH07XG4gIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcImFcIiB8fCBldmVudC5rZXkgPT09IFwiQVwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikgY2FsbGJhY2tzLnNldExhbmUoMCk7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJkXCIgfHwgZXZlbnQua2V5ID09PSBcIkRcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSBjYWxsYmFja3Muc2V0TGFuZSgxKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChqb3lzdGljaykgfHwgdGFyZ2V0LmNsb3Nlc3QoXCJidXR0b24saW5wdXQsc2VsZWN0LGFcIikpIHJldHVybjtcbiAgICBwb2ludGVySWQgPSBldmVudC5wb2ludGVySWQ7XG4gICAgcG9pbnRlclN0YXJ0ZWRYID0gZXZlbnQuY2xpZW50WDtcbiAgICBwb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgICBjb250YWluZXIuc2V0UG9pbnRlckNhcHR1cmU/Lihwb2ludGVySWQpO1xuICAgIGFwcGx5UG9pbnRlcihldmVudC5jbGllbnRYKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IHBvaW50ZXJJZCkgcmV0dXJuO1xuICAgIHBvaW50ZXJNb3ZlZCB8fD0gTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHBvaW50ZXJTdGFydGVkWCkgPiAzO1xuICAgIGFwcGx5UG9pbnRlcihldmVudC5jbGllbnRYKTtcbiAgfSk7XG4gIGNvbnN0IGVuZFBvaW50ZXIgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IHBvaW50ZXJJZCkgcmV0dXJuO1xuICAgIGlmICghcG9pbnRlck1vdmVkKSBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICB9O1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGVuZFBvaW50ZXIpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvc3Rwb2ludGVyY2FwdHVyZVwiLCAoKSA9PiB7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICB9KTtcbiAgaWYgKG1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50Pihqb3lzdGljayk7XG4gICAgY29uc3Qga25vYiA9IGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLnN0aWNrLWtub2JcIik7XG4gICAgbGV0IGpveXN0aWNrUG9pbnRlcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgYXBwbHlKb3lzdGljayA9IChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCByYWRpdXMgPSBib3VuZHMud2lkdGggLyAyO1xuICAgICAgY29uc3QgcmF3ID0gKGV2ZW50LmNsaWVudFggLSAoYm91bmRzLmxlZnQgKyByYWRpdXMpKSAvIHJhZGl1cztcbiAgICAgIGNvbnN0IHggPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgcmF3KSk7XG4gICAgICBpZiAoa25vYikga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7eCAqIHJhZGl1cyAqIC42Mn1weCksLTUwJSlgO1xuICAgICAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5hYnMoeCk7XG4gICAgICBpZiAobWFnbml0dWRlID49IC45NSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWQ6IDAgfCAxID0geCA8IDAgPyAwIDogMTtcbiAgICAgICAgaWYgKHJlcXVlc3RlZCAhPT0gY2FsbGJhY2tzLmxhbmUoKSkgY2FsbGJhY2tzLnNldExhbmUocmVxdWVzdGVkKTtcbiAgICAgICAgY2FsbGJhY2tzLnNldEFpbSgwKTtcbiAgICAgIH0gZWxzZSBpZiAobWFnbml0dWRlIDw9IC41KSBjYWxsYmFja3Muc2V0QWltKHggLyAuNSk7XG4gICAgICBlbHNlIGNhbGxiYWNrcy5zZXRBaW0oTWF0aC5zaWduKHgpKTtcbiAgICB9O1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBldmVudCA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGpveXN0aWNrUG9pbnRlciA9IGV2ZW50LnBvaW50ZXJJZDtcbiAgICAgIGVsZW1lbnQuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtcbiAgICAgIGFwcGx5Sm95c3RpY2soZXZlbnQpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQucG9pbnRlcklkID09PSBqb3lzdGlja1BvaW50ZXIpIGFwcGx5Sm95c3RpY2soZXZlbnQpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZEpveXN0aWNrID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IGpveXN0aWNrUG9pbnRlcikgcmV0dXJuO1xuICAgICAgam95c3RpY2tQb2ludGVyID0gbnVsbDtcbiAgICAgIGlmIChrbm9iKSBrbm9iLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsLTUwJSlcIjtcbiAgICAgIGNhbGxiYWNrcy5yZWxlYXNlQWltKCk7XG4gICAgfTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGVuZEpveXN0aWNrKTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBlbmRKb3lzdGljayk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNxdWFkUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIHJvdzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3F1YWRNb2RlbCB7XG4gIGxhbmU6IDAgfCAxID0gMDtcbiAgY291bnQgPSAxO1xuICBhaW1PZmZzZXQgPSAwO1xuICB4ID0gMDtcbiAgdGFyZ2V0WCA9IDA7XG4gIGxhbmVTaGlmdFN0YXJ0ZWRBdCA9IDA7XG5cbiAgYWRkKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5taW4oc3BlYy5tYXhTcXVhZFNpemUsIHRoaXMuY291bnQgKyBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgcmVtb3ZlKGFtb3VudCA9IDEpOiBudW1iZXIge1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCB0aGlzLmNvdW50IC0gYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHNldExhbmUobGFuZTogMCB8IDEsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyLCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChsYW5lICE9PSB0aGlzLmxhbmUpIHtcbiAgICAgIHRoaXMubGFuZVNoaWZ0U3RhcnRlZEF0ID0gbm93O1xuICAgICAgLy8gUmVzZXQgYWltIG9mZnNldCBzbyB0aGUgcGxheWVyIHNuYXBzIHRvIHRoZSBjb3JyZWN0IGNvbHVtbiBpbiB0aGUgbmV3IGxhbmUuXG4gICAgICB0aGlzLmFpbU9mZnNldCA9IDA7XG4gICAgfVxuICAgIHRoaXMubGFuZSA9IGxhbmU7XG4gICAgdGhpcy50YXJnZXRYID0gbGFuZUNlbnRlcihsYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgc2V0QWltKG5vcm1hbGl6ZWQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5haW1PZmZzZXQgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgbm9ybWFsaXplZCkpICogbGFuZVdpZHRoICogLjI4O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgYXV0b0FpbSh0YXJnZXRPZmZzZXQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gSGlnaCBsZXJwIGZhY3RvciAoMC44NSkgc28gYXV0by1haW0gc25hcHMgYWxtb3N0IGluc3RhbnRhbmVvdXNseSBlYWNoIGZyYW1lLlxuICAgIHRoaXMuYWltT2Zmc2V0ICs9IChNYXRoLm1heCgtbGFuZVdpZHRoICogLjI4LCBNYXRoLm1pbihsYW5lV2lkdGggKiAuMjgsIHRhcmdldE9mZnNldCkpIC0gdGhpcy5haW1PZmZzZXQpICogLjg1O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSAxIC0gTWF0aC5wb3coLjAwMDA4LCBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMueCArPSAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAqIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqIFggb2Zmc2V0cyBvZiBlYWNoIGNvbHVtbiBpbiB0aGUgZnJvbnQgcm93LCByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuICovXG4gIGZyb250Um93Q29sdW1uT2Zmc2V0cyhzY2FsZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKF8sIGNvbCkgPT5cbiAgICAgIChjb2wgLSAocm93Q291bnQgLSAxKSAvIDIpICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgKTtcbiAgfVxuXG4gIHBvaW50cyhiYXNlWTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogU3F1YWRQb2ludFtdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCBwb2ludHM6IFNxdWFkUG9pbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50IC0gcm93ICogc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGluZGV4ICUgc3BlYy5tZW1iZXJzUGVyUm93O1xuICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICB4OiB0aGlzLnggKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICB5OiBiYXNlWSArIHJvdyAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBdXRvQWltVGFyZ2V0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJvd0lkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b0FpbUNvbnRyb2xTdGF0ZSB7XG4gIG1hbnVhbCA9IGZhbHNlO1xuXG4gIGxhbmVTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAvLyBMYW5lIGNoYW5nZXMgYXJlIG5hdmlnYXRpb24sIG5vdCBwZXJzaXN0ZW50IG1hbnVhbCBhaW1pbmcuXG4gIH1cblxuICBhaW1DaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgfVxuXG4gIGFpbVJlbGVhc2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhZC1jZW50ZXIgYWltIG9mZnNldCAocmVsYXRpdmUgdG8gbGFuZUNlbnRlcikgdGhhdCBiZXN0IGFsaWduc1xuICogb25lIG9mIHRoZSBzcXVhZCdzIGZyb250LXJvdyBjb2x1bW5zIHRvIHRoZSBuZWFyZXN0IGVuZW15LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRzICAgICAgICAgQWxsIGxpdmUgKG5vbi1keWluZykgZW5lbWllcyBpbiB0aGUgY3VycmVudCBsYW5lLlxuICogQHBhcmFtIGxhbmVDZW50ZXIgICAgICBQaXhlbCBYIG9mIHRoZSBsYW5lJ3MgY2VudGVyLlxuICogQHBhcmFtIGNvbHVtbk9mZnNldHMgICBYIG9mZnNldHMgb2YgZWFjaCBmcm9udC1yb3cgY29sdW1uIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci5cbiAqIEBwYXJhbSBjdXJyZW50T2Zmc2V0ICAgQ3VycmVudCBzcXVhZCBhaW0gb2Zmc2V0IChzcXVhZCBjZW50ZXIgPSBsYW5lQ2VudGVyICsgY3VycmVudE9mZnNldCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBdXRvQWltT2Zmc2V0KFxuICB0YXJnZXRzOiByZWFkb25seSBBdXRvQWltVGFyZ2V0W10sXG4gIGxhbmVDZW50ZXI6IG51bWJlcixcbiAgY29sdW1uT2Zmc2V0czogcmVhZG9ubHkgbnVtYmVyW10sXG4gIGN1cnJlbnRPZmZzZXQgPSAwLFxuKTogbnVtYmVyIHtcbiAgaWYgKCF0YXJnZXRzLmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgLy8gSWRlbnRpZnkgdGhlIGZyb250IHJvdzogZ3JvdXAgdGFyZ2V0cyBieSByb3dJZCAob3IgdHJlYXQgdW5ncm91cGVkIHRhcmdldHMgYXMgYSBzaW5nbGUgcm93KS5cbiAgY29uc3QgZXhwbGljaXRSb3dzID0gbmV3IE1hcDxudW1iZXIsIEF1dG9BaW1UYXJnZXRbXT4oKTtcbiAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgIGlmICh0YXJnZXQucm93SWQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3Qgcm93ID0gZXhwbGljaXRSb3dzLmdldCh0YXJnZXQucm93SWQpID8/IFtdO1xuICAgIHJvdy5wdXNoKHRhcmdldCk7XG4gICAgZXhwbGljaXRSb3dzLnNldCh0YXJnZXQucm93SWQsIHJvdyk7XG4gIH1cbiAgY29uc3QgZnJvbnRSb3cgPSBleHBsaWNpdFJvd3Muc2l6ZVxuICAgID8gWy4uLmV4cGxpY2l0Um93cy52YWx1ZXMoKV0uc29ydCgobGVmdCwgcmlnaHQpID0+XG4gICAgICAgIE1hdGgubWF4KC4uLnJpZ2h0Lm1hcCh0ID0+IHQueSkpIC0gTWF0aC5tYXgoLi4ubGVmdC5tYXAodCA9PiB0LnkpKSlbMF1cbiAgICA6IHRhcmdldHMuZmlsdGVyKHQgPT4gTWF0aC5hYnModC55IC0gTWF0aC5tYXgoLi4udGFyZ2V0cy5tYXAoYyA9PiBjLnkpKSkgPCAzKTtcblxuICAvLyBGb3IgZWFjaCBlbmVteSBpbiB0aGUgZnJvbnQgcm93IFx1MDBENyBlYWNoIHNxdWFkIGNvbHVtbiwgY29tcHV0ZSB0aGUgc3F1YWQtY2VudGVyXG4gIC8vIG9mZnNldCB0aGF0IHdvdWxkIHBsYWNlIHRoYXQgY29sdW1uIGV4YWN0bHkgb24gdGhhdCBlbmVteSdzIFguXG4gIC8vIFBpY2sgdGhlIChlbmVteSwgY29sdW1uKSBwYWlyIHdob3NlIHJlcXVpcmVkIG9mZnNldCBpcyBjbG9zZXN0IHRvIHRoZSBjdXJyZW50XG4gIC8vIG9mZnNldCBcdTIwMTQgbWluaW1pc2luZyB0aGUgYWltIG1vdmVtZW50IG5lZWRlZCB3aGlsZSBndWFyYW50ZWVpbmcgYSBoaXQuXG4gIGNvbnN0IGNvbHMgPSBjb2x1bW5PZmZzZXRzLmxlbmd0aCA+IDAgPyBjb2x1bW5PZmZzZXRzIDogWzBdO1xuICBsZXQgYmVzdE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG4gIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZnJvbnRSb3cpIHtcbiAgICBmb3IgKGNvbnN0IGNvbE9mZnNldCBvZiBjb2xzKSB7XG4gICAgICAvLyBzcXVhZENlbnRlciA9IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgXHUyMTkyIGNvbHVtbiBsYW5kcyBhdCBsYW5lQ2VudGVyICsgYWltT2Zmc2V0ICsgY29sT2Zmc2V0XG4gICAgICAvLyBXZSB3YW50IHRoYXQgdG8gZXF1YWwgZW5lbXkueCBcdTIxOTIgYWltT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXRcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0O1xuICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGNhbmRpZGF0ZU9mZnNldCAtIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdCkge1xuICAgICAgICBiZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIGJlc3RPZmZzZXQgPSBjYW5kaWRhdGVPZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RPZmZzZXQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlLCBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0cmFpdFZpZXdwb3J0UG9saWN5IHtcbiAgYXNwZWN0V2lkdGg6IG51bWJlcjtcbiAgYXNwZWN0SGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclZpZXdwb3J0UG9saWN5IGV4dGVuZHMgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIHJlYWRvbmx5IG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCI7XG4gIHJlYWRvbmx5IGxvZ2ljYWxXaWR0aDogbnVtYmVyO1xuICByZWFkb25seSBsb2dpY2FsSGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyVmlld3BvcnQ6IExhbmVSdW5uZXJWaWV3cG9ydFBvbGljeSA9IHtcbiAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcbiAgYXNwZWN0V2lkdGg6IDksXG4gIGFzcGVjdEhlaWdodDogMTYsXG4gIGxvZ2ljYWxXaWR0aDogNDUwLFxuICBsb2dpY2FsSGVpZ2h0OiA4MDAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RlZFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBsYXllclk6IG51bWJlcjtcbiAgZm9jdXNYPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCh3aWR0aDogbnVtYmVyLCB0YXJnZXRYOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuICByZXR1cm4gY2VudGVyWCArICh0YXJnZXRYIC0gY2VudGVyWCkgKiAuNTU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBvcnRyYWl0U3RhZ2Uoc3RhZ2U6IEhUTUxFbGVtZW50LCBwb2xpY3k6IFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kpOiB2b2lkIHtcbiAgc3RhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCItLXN0YWdlLWFzcGVjdFwiLCBgJHtwb2xpY3kuYXNwZWN0V2lkdGh9IC8gJHtwb2xpY3kuYXNwZWN0SGVpZ2h0fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhZ2VOb3JtYWxpemVkWChzdGFnZTogSFRNTEVsZW1lbnQsIGNsaWVudFg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGJvdW5kcyA9IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGNsaWVudFggLSBib3VuZHMubGVmdCkgLyBib3VuZHMud2lkdGgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyA9IHtcbiAgaGVpZ2h0OiA2NSxcbiAgbG9va0FuZ2xlRGVncmVlczogMjcsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyMCxcbiAgem9vbTogLjIsXG4gIGhvcml6b246IC41MSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclNjZW5lKFxuICBwcmltaXRpdmVzOiByZWFkb25seSBOZW9uUHJpbWl0aXZlW10sXG4gIHNoYXBlczogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdLFxuICBjbG91ZHM6IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogUHJvamVjdGVkU2NlbmUge1xuICBjb25zdCBwcm9qZWN0UG9pbnQgPSBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpO1xuXG4gIGNvbnN0IHByb2plY3RlZFByaW1pdGl2ZXMgPSBwcmltaXRpdmVzLm1hcChwcmltaXRpdmUgPT4ge1xuICAgIGlmIChwcmltaXRpdmUuc2hhcGUgPT09IFwibGluZVwiKSB7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IHByaW1pdGl2ZS5yb3RhdGlvbiA/PyAwO1xuICAgICAgY29uc3QgaGFsZkxlbmd0aCA9IHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWCA9IC1NYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICBjb25zdCBkaXJlY3Rpb25ZID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgY29uc3Qgc3RhcnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggLSBkaXJlY3Rpb25YICogaGFsZkxlbmd0aCwgcHJpbWl0aXZlLnkgLSBkaXJlY3Rpb25ZICogaGFsZkxlbmd0aCk7XG4gICAgICBjb25zdCBlbmQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggKyBkaXJlY3Rpb25YICogaGFsZkxlbmd0aCwgcHJpbWl0aXZlLnkgKyBkaXJlY3Rpb25ZICogaGFsZkxlbmd0aCk7XG4gICAgICBjb25zdCBkeCA9IGVuZC54IC0gc3RhcnQueDtcbiAgICAgIGNvbnN0IGR5ID0gZW5kLnkgLSBzdGFydC55O1xuICAgICAgY29uc3Qgc2NhbGUgPSAoc3RhcnQuc2NhbGUgKyBlbmQuc2NhbGUpICogLjU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmltaXRpdmUsXG4gICAgICAgIHg6IChzdGFydC54ICsgZW5kLngpIC8gMixcbiAgICAgICAgeTogKHN0YXJ0LnkgKyBlbmQueSkgLyAyLFxuICAgICAgICB3aWR0aDogcHJpbWl0aXZlLndpZHRoICogc2NhbGUsXG4gICAgICAgIGhlaWdodDogTWF0aC5oeXBvdChkeCwgZHkpIC8gMixcbiAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54LCBwcmltaXRpdmUueSk7XG4gICAgY29uc3Qgd2lkdGggPSBwcmltaXRpdmUud2lkdGggKiBwb2ludC5zY2FsZTtcbiAgICBjb25zdCBoZWlnaHQgPSAocHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGgpICogcG9pbnQuc2NhbGU7XG4gICAgbGV0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uO1xuICAgIGlmIChyb3RhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBheGlzTGVuZ3RoID0gTWF0aC5tYXgocHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGgsIHByaW1pdGl2ZS53aWR0aCwgMSk7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBlbmQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLnggKyBkaXJlY3Rpb25YICogYXhpc0xlbmd0aCwgcHJpbWl0aXZlLnkgKyBkaXJlY3Rpb25ZICogYXhpc0xlbmd0aCk7XG4gICAgICByb3RhdGlvbiA9IE1hdGguYXRhbjIocG9pbnQueCAtIGVuZC54LCBlbmQueSAtIHBvaW50LnkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJpbWl0aXZlLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJvdGF0aW9uLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RlZFNoYXBlcyA9IHNoYXBlc1xuICAgIC5tYXAoc2hhcGUgPT4ge1xuICAgICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zaGFwZSxcbiAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgc2l6ZTogc2hhcGUuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgICAgICB6OiAoc2hhcGUueiA/PyAwKSAtIHBvaW50LmRlcHRoICogLjAwMDgsXG4gICAgICB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi56ID8/IDApIC0gKGEueiA/PyAwKSkpO1xuXG4gIGNvbnN0IHByb2plY3RlZENsb3VkcyA9IGNsb3Vkcy5tYXAoY2xvdWQgPT4ge1xuICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KGNsb3VkLngsIGNsb3VkLnkpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXM6IHByb2plY3RlZFByaW1pdGl2ZXMsIGNsb3VkczogcHJvamVjdGVkQ2xvdWRzLCBzaGFwZXM6IHByb2plY3RlZFNoYXBlcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJQb2ludChcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0ge1xuICByZXR1cm4gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3MsIHZpZXdwb3J0KSh4LCB5KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCkge1xuICBjb25zdCBjZW50ZXJYID0gdmlld3BvcnQud2lkdGggLyAyO1xuICBjb25zdCBmb2N1c1ggPSB2aWV3cG9ydC5mb2N1c1ggPz8gY2VudGVyWDtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIHJldHVybiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHdvcmxkWCA9IHggLSBmb2N1c1g7XG4gICAgY29uc3Qgd29ybGRaID0gdmlld3BvcnQucGxheWVyWSAtIHkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZTtcbiAgICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICAgIGNvbnN0IGNhbWVyYVkgPSByZWxhdGl2ZVkgKiBjb3MgKyB3b3JsZFogKiBzaW47XG4gICAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KG1pbkRlcHRoLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICAgIGNvbnN0IHNjYWxlID0gZm9jYWxMZW5ndGggLyBjYW1lcmFaO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjZW50ZXJYICsgd29ybGRYICogc2NhbGUsXG4gICAgICB5OiBob3Jpem9uWSAtIGNhbWVyYVkgKiBzY2FsZSxcbiAgICAgIHNjYWxlLFxuICAgICAgZGVwdGg6IGNhbWVyYVosXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmxkWUZvclByb2plY3RlZFkoXG4gIHNjcmVlblk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IHsgaGVpZ2h0OiBudW1iZXI7IHBsYXllclk6IG51bWJlciB9LFxuKTogbnVtYmVyIHtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICBjb25zdCBzY3JlZW5SYXRpbyA9IChob3Jpem9uWSAtIHNjcmVlblkpIC8gZm9jYWxMZW5ndGg7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gc2luIC0gc2NyZWVuUmF0aW8gKiBjb3M7XG4gIGlmIChNYXRoLmFicyhkZW5vbWluYXRvcikgPCAuMDAwMSkgcmV0dXJuIE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICBjb25zdCB3b3JsZFogPSAtcmVsYXRpdmVZICogKGNvcyArIHNjcmVlblJhdGlvICogc2luKSAvIGRlbm9taW5hdG9yO1xuICByZXR1cm4gdmlld3BvcnQucGxheWVyWSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlIC0gd29ybGRaO1xufVxuIiwgImltcG9ydCB7IGdldE5lb25TaGFwZSwgTmVvblNoYXBlQWN0b3IsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UsIHR5cGUgTmVvblNoYXBlTGFiZWwsIHR5cGUgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3Qgc3dhcm1TaGFwZXMgPSB7XG4gIHBsYXllcjogZ2V0TmVvblNoYXBlKFwiYXJyb3ctY2xhc3NpY1wiKSEsXG4gIGVuZW15OiBnZXROZW9uU2hhcGUoXCJodW50ZXItZXllXCIpISxcbiAgbXVsdGlwbGllcjogZ2V0TmVvblNoYXBlKFwiYnJ1aXNlci1jcm9zc1wiKSEsXG4gIGd1blBpY2t1cDogZ2V0TmVvblNoYXBlKFwiaGV4LWZpZ2h0ZXJcIikhLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHBpeGVsc1RvU2hhcGVXb3JsZCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gKHtcbiAgeDogKHggLyBjYW52YXMud2lkdGggLSAuNSkgKiAoY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG4gIHk6ICguNSAtIHkgLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcGl4ZWxTaXplVG9TaGFwZVNjYWxlID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHBpeGVsczogbnVtYmVyKSA9PiBwaXhlbHMgLyBjYW52YXMuaGVpZ2h0ICogMi41O1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0b3JBdFBpeGVscyhhY3RvcjogTmVvblNoYXBlQWN0b3IsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBwaXhlbFNpemU6IG51bWJlciwgb3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICBjb25zdCB3b3JsZCA9IHBpeGVsc1RvU2hhcGVXb3JsZChjYW52YXMsIHgsIHkpO1xuICBhY3Rvci5tb3ZlVG8od29ybGQueCwgd29ybGQueSk7XG4gIGFjdG9yLnNjYWxlID0gcGl4ZWxTaXplVG9TaGFwZVNjYWxlKGNhbnZhcywgcGl4ZWxTaXplKTtcbiAgcmV0dXJuIGFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyk7XG59XG5cbnR5cGUgVG9wRG93blNoYXBlT3ZlcnJpZGVzID0gUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gJiBQYXJ0aWFsPFBpY2s8TmVvblRvcERvd25TaGFwZSwgXCJ3aWR0aFwiIHwgXCJoZWlnaHRcIj4+O1xuXG5leHBvcnQgY29uc3QgYWN0b3JJblRvcERvd25TY2VuZSA9IChhY3RvcjogTmVvblNoYXBlQWN0b3IsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIG92ZXJyaWRlczogVG9wRG93blNoYXBlT3ZlcnJpZGVzID0ge30pOiBOZW9uVG9wRG93blNoYXBlID0+XG4gICh7IC4uLmFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyksIHgsIHksIHNpemUgfSk7XG5cbmV4cG9ydCBjb25zdCBzaGFwZUxhYmVsID0gKHRleHQ6IHN0cmluZywgcG9zaXRpb246IE5lb25TaGFwZUxhYmVsW1wicG9zaXRpb25cIl0sIGZvbnRTaXplOiBudW1iZXIsIG9mZnNldCA9IDQpOiBOZW9uU2hhcGVMYWJlbCA9PlxuICAoeyB0ZXh0LCBwb3NpdGlvbiwgZm9udFNpemUsIG9mZnNldCwgZm9udEZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLCBmb250V2VpZ2h0OiA3MDAgfSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlczogbnVtYmVyKTogbnVtYmVyID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuY29uc3QgcGxheWVyRm9yd2FyZFJvdGF0aW9uID0ge1xuICByb3RhdGlvblg6IGRlZ3JlZXNUb1JhZGlhbnMoLTUyKSxcbiAgcm90YXRpb25ZOiBkZWdyZWVzVG9SYWRpYW5zKC0xKSxcbiAgcm90YXRpb25aOiBkZWdyZWVzVG9SYWRpYW5zKDEpLFxufTtcbmNvbnN0IHNjcmVlbkZvcndhcmRZYXcgPSAoZGlyZWN0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBudW1iZXIgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoZGlyZWN0aW9uLnggLyBsZW5ndGgsIC1kaXJlY3Rpb24ueSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgdHlwZSBBY3RvclZpc3VhbFJvbGUgPVxuICB8IFwiZ3JvdW5kRm9yd2FyZFwiXG4gIHwgXCJzY3JlZW5CaWxsYm9hcmRcIlxuICB8IFwidHVtYmxpbmdCaWxsYm9hcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCB7XG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbm93OiBudW1iZXI7XG4gIHBoYXNlPzogbnVtYmVyO1xuICBmYWNpbmc/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rvck9yaWVudGF0aW9uKHJvbGU6IEFjdG9yVmlzdWFsUm9sZSwgY29udGV4dDogQWN0b3JPcmllbnRhdGlvbkNvbnRleHQpOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHN3aXRjaCAocm9sZSkge1xuICAgIGNhc2UgXCJncm91bmRGb3J3YXJkXCI6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBsYXllckZvcndhcmRSb3RhdGlvbixcbiAgICAgICAgcm90YXRpb25YOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25YICsgTWF0aC5zaW4oY29udGV4dC5ub3cgLyA2NTAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMDYsXG4gICAgICAgIHJvdGF0aW9uWTogcGxheWVyRm9yd2FyZFJvdGF0aW9uLnJvdGF0aW9uWSArIChjb250ZXh0LmZhY2luZyA/IHNjcmVlbkZvcndhcmRZYXcoY29udGV4dC5mYWNpbmcpIDogMCksXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFwidHVtYmxpbmdCaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdGF0aW9uWTogTWF0aC5zaW4oY29udGV4dC5ub3cgLyA3MDAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMTgsXG4gICAgICB9O1xuICAgIGNhc2UgXCJzY3JlZW5CaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVsaWNvcHRlclZpZXdwb3J0Rm9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwbGF5ZXJZOiBudW1iZXIsIGZvY3VzWD86IG51bWJlcik6IEhlbGljb3B0ZXJWaWV3cG9ydCB7XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIHBsYXllclksIGZvY3VzWCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyT3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHBoYXNlID0gMCxcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJncm91bmRGb3J3YXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgICBmYWNpbmc6IHsgeDogMCwgeTogLTEgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteU9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwidHVtYmxpbmdCaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICAgIHBoYXNlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbGxib2FyZE9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInNjcmVlbkJpbGxib2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIE5lb25Qcm9qZWN0aWxlLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxuICB0eXBlIE5lb25Qcm9qZWN0aWxlU2hhcGUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUge1xuICBHdW5MZXZlbCxcbiAgR3VuTWVtYmVyLFxuICBJbXBhY3RFZmZlY3QsXG4gIE11enpsZUVmZmVjdCxcbiAgUHJvamVjdGlsZVNoYXBlLFxufSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1blByb2plY3RpbGUge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2eDogbnVtYmVyO1xuICB2eTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHBpZXJjZVJlbWFpbmluZzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB0cmFpbENvbG9yOiBzdHJpbmc7XG4gIGNvcmVDb2xvcjogc3RyaW5nO1xuICBhc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBzaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXI6IGJvb2xlYW47XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEVuZW15SWRzOiBTZXQ8bnVtYmVyPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5FZmZlY3Qge1xuICBraW5kOiBcIm11enpsZVwiIHwgXCJpbXBhY3RcIiB8IFwiZGVhdGhcIjtcbiAgc3R5bGU6IE11enpsZUVmZmVjdCB8IEltcGFjdEVmZmVjdCB8IFwiZGVhdGhCbG9vbVwiO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I6IHN0cmluZztcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGV4cGlyZXNBdDogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBzZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFNjaGVkdWxlZFZvbGxleSB7XG4gIGZpcmVzQXQ6IG51bWJlcjtcbiAgZ3VuOiBHdW5NZW1iZXI7XG4gIGxldmVsOiBHdW5MZXZlbDtcbiAgbGFuZTogbnVtYmVyO1xuICBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbiAgc2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEd1blNpbXVsYXRpb24ge1xuICByZWFkb25seSBwcm9qZWN0aWxlczogR3VuUHJvamVjdGlsZVtdID0gW107XG4gIHJlYWRvbmx5IGVmZmVjdHM6IEd1bkVmZmVjdFtdID0gW107XG4gIHByaXZhdGUgc2NoZWR1bGVkVm9sbGV5czogU2NoZWR1bGVkVm9sbGV5W10gPSBbXTtcbiAgcHJpdmF0ZSBzZXF1ZW5jZSA9IDA7XG4gIHByaXZhdGUgc2hvdFNlcXVlbmNlID0gMDtcblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5lZmZlY3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBmaXJlKGd1bjogR3VuTWVtYmVyLCBsZXZlbDogR3VuTGV2ZWwsIGxhbmU6IG51bWJlciwgb3JpZ2luczogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIG5vdzogbnVtYmVyLCBzY2FsZSA9IDEpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBidXJzdEluZGV4ID0gMDsgYnVyc3RJbmRleCA8IGxldmVsLmJ1cnN0Q291bnQ7IGJ1cnN0SW5kZXgrKykge1xuICAgICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzLnB1c2goe1xuICAgICAgICBmaXJlc0F0OiBub3cgKyBidXJzdEluZGV4ICogbGV2ZWwuYnVyc3RJbnRlcnZhbE1zLFxuICAgICAgICBndW4sIGxldmVsLCBsYW5lLCBvcmlnaW5zOiBvcmlnaW5zLm1hcChvcmlnaW4gPT4gKHsgLi4ub3JpZ2luIH0pKSwgc2NhbGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaXJpbmcobm93OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBmaXJlZCA9IDA7XG4gICAgY29uc3QgZHVlID0gdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmZpbHRlcih2b2xsZXkgPT4gdm9sbGV5LmZpcmVzQXQgPD0gbm93KTtcbiAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMgPSB0aGlzLnNjaGVkdWxlZFZvbGxleXMuZmlsdGVyKHZvbGxleSA9PiB2b2xsZXkuZmlyZXNBdCA+IG5vdyk7XG4gICAgZm9yIChjb25zdCB2b2xsZXkgb2YgZHVlKSB7XG4gICAgICB0aGlzLnNwYXduVm9sbGV5KHZvbGxleSwgbm93KTtcbiAgICAgIGZpcmVkKys7XG4gICAgfVxuICAgIHJldHVybiBmaXJlZDtcbiAgfVxuXG4gIHVwZGF0ZVByb2plY3RpbGVzKFxuICAgIGRlbHRhOiBudW1iZXIsXG4gICAgbm93OiBudW1iZXIsXG4gICAgdGFyZ2V0czogcmVhZG9ubHkgR3VuVGFyZ2V0W10sXG4gICAgYm91bmRzOiB7IHRvcDogbnVtYmVyOyBsZWZ0PzogbnVtYmVyOyByaWdodD86IG51bWJlciB9LFxuICAgIG9uSGl0OiAocHJvamVjdGlsZTogR3VuUHJvamVjdGlsZSwgdGFyZ2V0OiBHdW5UYXJnZXQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJvamVjdGlsZSBvZiBbLi4udGhpcy5wcm9qZWN0aWxlc10pIHtcbiAgICAgIHByb2plY3RpbGUueCArPSBwcm9qZWN0aWxlLnZ4ICogZGVsdGE7XG4gICAgICBwcm9qZWN0aWxlLnkgKz0gcHJvamVjdGlsZS52eSAqIGRlbHRhO1xuICAgICAgaWYgKHByb2plY3RpbGUueSA8IGJvdW5kcy50b3AgfHwgcHJvamVjdGlsZS54IDwgKGJvdW5kcy5sZWZ0ID8/IC1JbmZpbml0eSkgfHwgcHJvamVjdGlsZS54ID4gKGJvdW5kcy5yaWdodCA/PyBJbmZpbml0eSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgaWYgKHRhcmdldC5keWluZyB8fCBwcm9qZWN0aWxlLmxhbmUgIT09IHRhcmdldC5sYW5lIHx8IHByb2plY3RpbGUuaGl0RW5lbXlJZHMuaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkeCA9IHByb2plY3RpbGUueCAtIHRhcmdldC54O1xuICAgICAgICBjb25zdCBkeSA9IHByb2plY3RpbGUueSAtIHRhcmdldC55O1xuICAgICAgICBjb25zdCBoaXRSYWRpdXMgPSBwcm9qZWN0aWxlLnJhZGl1cyArIHRhcmdldC5yYWRpdXM7XG4gICAgICAgIGlmIChkeCAqIGR4ICsgZHkgKiBkeSA+IGhpdFJhZGl1cyAqIGhpdFJhZGl1cykgY29udGludWU7XG4gICAgICAgIHByb2plY3RpbGUuaGl0RW5lbXlJZHMuYWRkKHRhcmdldC5pZCk7XG4gICAgICAgIHRhcmdldC5oZWFsdGggLT0gcHJvamVjdGlsZS5kYW1hZ2U7XG4gICAgICAgIHRhcmdldC55IC09IHByb2plY3RpbGUua25vY2tiYWNrO1xuICAgICAgICB0aGlzLmVmZmVjdHMucHVzaCh7XG4gICAgICAgICAga2luZDogXCJpbXBhY3RcIixcbiAgICAgICAgICBzdHlsZTogcHJvamVjdGlsZS5pbXBhY3RFZmZlY3QsXG4gICAgICAgICAgeDogcHJvamVjdGlsZS54LCB5OiBwcm9qZWN0aWxlLnksXG4gICAgICAgICAgY29sb3I6IHByb2plY3RpbGUuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBwcm9qZWN0aWxlLnRyYWlsQ29sb3IsXG4gICAgICAgICAgcmFkaXVzOiBwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUuaGl0Rmxhc2hTY2FsZSAqIDQsXG4gICAgICAgICAgZXhwaXJlc0F0OiBub3cgKyBwcm9qZWN0aWxlLmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgZHVyYXRpb246IHByb2plY3RpbGUuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICBzZWVkOiBwcm9qZWN0aWxlLmlkLFxuICAgICAgICB9KTtcbiAgICAgICAgb25IaXQocHJvamVjdGlsZSwgdGFyZ2V0KTtcbiAgICAgICAgaWYgKHByb2plY3RpbGUucGllcmNlUmVtYWluaW5nID4gMCkgcHJvamVjdGlsZS5waWVyY2VSZW1haW5pbmctLTtcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZSk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0aWxlcy5pbmNsdWRlcyhwcm9qZWN0aWxlKSkgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgZWZmZWN0IG9mIFsuLi50aGlzLmVmZmVjdHNdKSB7XG4gICAgICBpZiAoZWZmZWN0LmV4cGlyZXNBdCA8PSBub3cpIHRoaXMuZWZmZWN0cy5zcGxpY2UodGhpcy5lZmZlY3RzLmluZGV4T2YoZWZmZWN0KSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJvamVjdGlsZVByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aWxlcy5mbGF0TWFwKHByb2plY3RpbGUgPT4gbmV3IE5lb25Qcm9qZWN0aWxlKHtcbiAgICAgIHg6IHByb2plY3RpbGUueCwgeTogcHJvamVjdGlsZS55LFxuICAgICAgdmVsb2NpdHlYOiBwcm9qZWN0aWxlLnZ4LCB2ZWxvY2l0eVk6IHByb2plY3RpbGUudnksXG4gICAgICByYWRpdXM6IHByb2plY3RpbGUucmFkaXVzLFxuICAgICAgbGVuZ3RoOiBwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUuYXNwZWN0LFxuICAgICAgdHJhaWxMZW5ndGg6IHByb2plY3RpbGUudHJhaWxMZW5ndGgsXG4gICAgICB0cmFpbFdpZHRoOiBNYXRoLm1heChwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUudHJhaWxXaWR0aFNjYWxlLCAxLjEpLFxuICAgICAgY29sb3I6IHByb2plY3RpbGUuY29sb3IsXG4gICAgICB0cmFpbENvbG9yOiBwcm9qZWN0aWxlLnRyYWlsQ29sb3IsXG4gICAgICBjb3JlQ29sb3I6IHByb2plY3RpbGUuY29yZUNvbG9yLFxuICAgICAgc2hhcGU6IHByb2plY3RpbGUuc2hhcGUgYXMgTmVvblByb2plY3RpbGVTaGFwZSxcbiAgICAgIGludGVuc2l0eTogcHJvamVjdGlsZS52aXN1YWxJbnRlbnNpdHkgKiAocHJvamVjdGlsZS50cmFjZXIgPyAxLjM1IDogMSksXG4gICAgICBnbG93OiBwcm9qZWN0aWxlLnRyYWNlciA/IDEuNCA6IC43MixcbiAgICB9KS5wcmltaXRpdmVzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGF3blZvbGxleSh2b2xsZXk6IFNjaGVkdWxlZFZvbGxleSwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGd1biwgbGV2ZWwsIGxhbmUsIG9yaWdpbnMsIHNjYWxlIH0gPSB2b2xsZXk7XG4gICAgZm9yIChjb25zdCBvcmlnaW4gb2Ygb3JpZ2lucykge1xuICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1heCgxLCBsZXZlbC5wcm9qZWN0aWxlQ291bnQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlRGVncmVlcyA9IGNvdW50ID09PSAxID8gMCA6IChpbmRleCAvIChjb3VudCAtIDEpIC0gLjUpICogbGV2ZWwuc3ByZWFkRGVncmVlcztcbiAgICAgICAgY29uc3QgYW5nbGUgPSBhbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGxldmVsLnByb2plY3RpbGVTcGVlZCAqIHNjYWxlO1xuICAgICAgICB0aGlzLnNob3RTZXF1ZW5jZSsrO1xuICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2goe1xuICAgICAgICAgIGlkOiArK3RoaXMuc2VxdWVuY2UsIGxhbmUsXG4gICAgICAgICAgeDogb3JpZ2luLnggKyAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIGd1bi52aXN1YWxJZGVudGl0eS5ob3Jpem9udGFsSml0dGVyICogc2NhbGUsXG4gICAgICAgICAgeTogb3JpZ2luLnksXG4gICAgICAgICAgdng6IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkLFxuICAgICAgICAgIHZ5OiAtTWF0aC5jb3MoYW5nbGUpICogc3BlZWQsXG4gICAgICAgICAgcmFkaXVzOiBsZXZlbC5wcm9qZWN0aWxlUmFkaXVzICogc2NhbGUsXG4gICAgICAgICAgZGFtYWdlOiBsZXZlbC5kYW1hZ2UsXG4gICAgICAgICAgcGllcmNlUmVtYWluaW5nOiBsZXZlbC5waWVyY2UsXG4gICAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdLFxuICAgICAgICAgIHRyYWlsQ29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSxcbiAgICAgICAgICBjb3JlQ29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5jb3JlQ29sb3JdLFxuICAgICAgICAgIGFzcGVjdDogZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVBc3BlY3QsXG4gICAgICAgICAgdHJhaWxXaWR0aFNjYWxlOiBndW4udmlzdWFsSWRlbnRpdHkudHJhaWxXaWR0aFNjYWxlLFxuICAgICAgICAgIHZpc3VhbEludGVuc2l0eTogZ3VuLnZpc3VhbElkZW50aXR5LnZpc3VhbEludGVuc2l0eSxcbiAgICAgICAgICBzaGFwZTogZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVTaGFwZSxcbiAgICAgICAgICBpbXBhY3RFZmZlY3Q6IGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3RFZmZlY3QsXG4gICAgICAgICAgaW1wYWN0RHVyYXRpb25NczogZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgdHJhaWxMZW5ndGg6IGxldmVsLnRyYWlsTGVuZ3RoICogc2NhbGUsXG4gICAgICAgICAgdHJhY2VyOiBsZXZlbC50cmFjZXJFdmVyeU50aFNob3QgPiAwICYmIHRoaXMuc2hvdFNlcXVlbmNlICUgbGV2ZWwudHJhY2VyRXZlcnlOdGhTaG90ID09PSAwLFxuICAgICAgICAgIGtub2NrYmFjazogbGV2ZWwua25vY2tiYWNrICogc2NhbGUsXG4gICAgICAgICAgaGl0Rmxhc2hTY2FsZTogbGV2ZWwuaGl0Rmxhc2hTY2FsZSxcbiAgICAgICAgICBoaXRFbmVteUlkczogbmV3IFNldCgpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lZmZlY3RzLnB1c2goe1xuICAgICAga2luZDogXCJtdXp6bGVcIiwgc3R5bGU6IGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVFZmZlY3QsXG4gICAgICB4OiBvcmlnaW5zLnJlZHVjZSgoc3VtLCBvcmlnaW4pID0+IHN1bSArIG9yaWdpbi54LCAwKSAvIG9yaWdpbnMubGVuZ3RoLFxuICAgICAgeTogb3JpZ2luc1swXT8ueSA/PyAwLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSxcbiAgICAgIHJhZGl1czogMTAgKiBsZXZlbC5tdXp6bGVGbGFzaFNjYWxlICogc2NhbGUsXG4gICAgICBleHBpcmVzQXQ6IG5vdyArIGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zLFxuICAgICAgZHVyYXRpb246IGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zLFxuICAgICAgc2VlZDogdGhpcy5zaG90U2VxdWVuY2UsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZTogR3VuUHJvamVjdGlsZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0aWxlcy5pbmRleE9mKHByb2plY3RpbGUpO1xuICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLnByb2plY3RpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE9yYklkIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUVudHJhbmNlUHJvZmlsZSB7XG4gIGR1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xuICBzY2F0dGVyTWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBlbmVteUVudHJhbmNlUHJvZmlsZXM6IFJlY29yZDxPcmJJZCwgRW5lbXlFbnRyYW5jZVByb2ZpbGU+ID0ge1xuICBiYXNpY09yYjoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjQ4LFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC41OCxcbiAgfSxcbiAgZ2xhc3NTaGllbGQ6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC4zNCxcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAwLFxuICB9LFxuICB3aW5nZXI6IHtcbiAgICBkdXJhdGlvblNlY29uZHM6IC40MixcbiAgICBzY2F0dGVyTWFnbml0dWRlOiAuNSxcbiAgfSxcbiAgdGFuazoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjcyLFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC4zNCxcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHtcbiAgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yLFxuICB0eXBlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsXG4gIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0LFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVZpc3VhbFR5cGUgPSBPcmJJZDtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUV4aXRFbnZlbG9wZSB7XG4gIGVudHJ5U2Vjb25kczogbnVtYmVyO1xuICBlbnRyeVB1bmNoOiBudW1iZXI7XG4gIHN1c3RhaW5TZWNvbmRzOiBudW1iZXI7XG4gIHN1c3RhaW5MZXZlbDogbnVtYmVyO1xuICBmYWRlU2Vjb25kczogbnVtYmVyO1xuICBzcGFya0ludGVuc2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdENsb3VkUHJvZmlsZSBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJhZ2VcIiB8IFwiY29sb3JcIiB8IFwiY29yZUNvbG9yXCIgfCBcInhcIiB8IFwieVwiIHwgXCJzZWVkXCI+IHtcbiAgc2l6ZTogbnVtYmVyO1xuICBlbnZlbG9wZTogRW5lbXlFeGl0RW52ZWxvcGU7XG4gIGNsb3VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZDogbnVtYmVyO1xuICBhZ2U6IG51bWJlcjtcbn1cblxuY29uc3QgYmFzaWNPcmJFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICBjbG91ZDogdHJ1ZSxcbiAgc2l6ZTogMTEsXG4gIGRldGFpbDogNixcbiAgdHVyYnVsZW5jZTogMi43MixcbiAgZ2xvdzogMTEsXG4gIGNvcmVJbnRlbnNpdHk6IDEuMjUsXG4gIHJpbUludGVuc2l0eTogLjgsXG4gIG9wYWNpdHk6IC44MixcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBlbnZlbG9wZToge1xuICAgIGVudHJ5U2Vjb25kczogLjE2LFxuICAgIGVudHJ5UHVuY2g6IDIuMzMsXG4gICAgc3VzdGFpblNlY29uZHM6IC4yMSxcbiAgICBzdXN0YWluTGV2ZWw6IDEuMixcbiAgICBmYWRlU2Vjb25kczogLjI5LFxuICAgIHNwYXJrSW50ZW5zaXR5OiAxLjIxLFxuICB9LFxufTtcblxuY29uc3Qgbm9DbG91ZEV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGNsb3VkOiBmYWxzZSxcbiAgc2l6ZTogMCxcbn07XG5cbmNvbnN0IHRhbmtFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICAuLi5iYXNpY09yYkV4aXRQcm9maWxlLFxuICBzaXplOiAxNSxcbiAgZ2xvdzogMTMsXG59O1xuXG5leHBvcnQgY29uc3QgZW5lbXlFeGl0UHJvZmlsZXM6IFJlY29yZDxFbmVteVZpc3VhbFR5cGUsIEVuZW15RXhpdENsb3VkUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiBiYXNpY09yYkV4aXRQcm9maWxlLFxuICBnbGFzc1NoaWVsZDogbm9DbG91ZEV4aXRQcm9maWxlLFxuICB3aW5nZXI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHRhbms6IHRhbmtFeGl0UHJvZmlsZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXREdXJhdGlvbihlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZSk6IG51bWJlciB7XG4gIGNvbnN0IGVudmVsb3BlID0gZW5lbXlFeGl0UHJvZmlsZXNbZW5lbXlUeXBlXS5lbnZlbG9wZTtcbiAgcmV0dXJuIGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzICsgZW52ZWxvcGUuZmFkZVNlY29uZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgcmV0dXJuIHtcbiAgICBlbmVteVR5cGU6IG9wdGlvbnMuZW5lbXlUeXBlLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwLFxuICAgIGFnZTogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHMoZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sIGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGluZGV4ID0gZWZmZWN0cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWZmZWN0ID0gZWZmZWN0c1tpbmRleF07XG4gICAgZWZmZWN0LmFnZSArPSBkZWx0YVNlY29uZHM7XG4gICAgaWYgKGVmZmVjdC5hZ2UgPj0gZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSkpIGVmZmVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlFeGl0Q2xvdWQoZWZmZWN0OiBBY3RpdmVFbmVteUV4aXRFZmZlY3QpOiBOZW9uVG9wRG93bkNsb3VkQnVyc3Qge1xuICBjb25zdCBwcm9maWxlID0gZW5lbXlFeGl0UHJvZmlsZXNbZWZmZWN0LmVuZW15VHlwZV07XG4gIGlmICghcHJvZmlsZS5jbG91ZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgICAgY29yZUNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICB4OiBlZmZlY3QueCxcbiAgICAgIHk6IGVmZmVjdC55LFxuICAgICAgc2l6ZTogMCxcbiAgICAgIGRldGFpbDogMyxcbiAgICAgIHR1cmJ1bGVuY2U6IDAsXG4gICAgICBnbG93OiAwLFxuICAgICAgY29yZUludGVuc2l0eTogMCxcbiAgICAgIHJpbUludGVuc2l0eTogMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkaXNzaXBhdGlvblRpbWU6IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpLFxuICAgICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICAgIGFnZTogZWZmZWN0LmFnZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IGVudmVsb3BlID0gcHJvZmlsZS5lbnZlbG9wZTtcbiAgY29uc3QgZHVyYXRpb24gPSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKTtcbiAgY29uc3QgZW50cnlUID0gTWF0aC5taW4oMSwgZWZmZWN0LmFnZSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmVudHJ5U2Vjb25kcykpO1xuICBjb25zdCBmYWRlU3RhcnQgPSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgKyBlbnZlbG9wZS5zdXN0YWluU2Vjb25kcztcbiAgY29uc3QgZmFkZVQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZWZmZWN0LmFnZSAtIGZhZGVTdGFydCkgLyBNYXRoLm1heCguMDAxLCBlbnZlbG9wZS5mYWRlU2Vjb25kcykpKTtcbiAgY29uc3Qgc3VzdGFpbiA9IGVmZmVjdC5hZ2UgPj0gZW52ZWxvcGUuZW50cnlTZWNvbmRzICYmIGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyBlbnZlbG9wZS5zdXN0YWluTGV2ZWwgOiAxO1xuICBjb25zdCBlbnRyeUZsYXNoID0gMSArIE1hdGguc2luKGVudHJ5VCAqIE1hdGguUEkpICogZW52ZWxvcGUuZW50cnlQdW5jaDtcbiAgY29uc3QgZmFkZUVuZXJneSA9IDEgLSBmYWRlVCAqIC42MjtcbiAgY29uc3Qgc3BhcmtBY2NlbnQgPSAxICsgZmFkZVQgKiBlbnZlbG9wZS5zcGFya0ludGVuc2l0eSAqIC4yMjtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgIGNvcmVDb2xvcjogZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yKGVmZmVjdC5jb2xvciksXG4gICAgeDogZWZmZWN0LngsXG4gICAgeTogZWZmZWN0LnksXG4gICAgc2l6ZTogcHJvZmlsZS5zaXplICogKC40OCArIGVudHJ5VCAqIC41MiksXG4gICAgZGV0YWlsOiBwcm9maWxlLmRldGFpbCxcbiAgICB0dXJidWxlbmNlOiBwcm9maWxlLnR1cmJ1bGVuY2UsXG4gICAgZ2xvdzogKHByb2ZpbGUuZ2xvdyA/PyAxKSAqIGVudHJ5Rmxhc2ggKiBzdXN0YWluICogZmFkZUVuZXJneSAqIHNwYXJrQWNjZW50LFxuICAgIGNvcmVJbnRlbnNpdHk6IChwcm9maWxlLmNvcmVJbnRlbnNpdHkgPz8gMSkgKiAoMSArIGVudmVsb3BlLmVudHJ5UHVuY2ggKiAoMSAtIGVudHJ5VCkgKiAuNTUpLFxuICAgIHJpbUludGVuc2l0eTogKHByb2ZpbGUucmltSW50ZW5zaXR5ID8/IDEpICogKDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjM1KSxcbiAgICBvcGFjaXR5OiAocHJvZmlsZS5vcGFjaXR5ID8/IDEpICogKGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyAxIDogMSAtIGZhZGVUICogLjg4KSxcbiAgICBkaXNzaXBhdGlvblRpbWU6IGR1cmF0aW9uLFxuICAgIGRpc3NpcGF0aW9uQWN0aW9uOiBcInNwYXJrRmFkZVwiLFxuICAgIGRyaWZ0WDogcHJvZmlsZS5kcmlmdFggPz8gMCxcbiAgICBkcmlmdFk6IHByb2ZpbGUuZHJpZnRZID8/IDAsXG4gICAgc2VlZDogZWZmZWN0LnNlZWQsXG4gICAgYWdlOiBNYXRoLm1pbihlZmZlY3QuYWdlLCBkdXJhdGlvbiksXG4gIH07XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5LCB0eXBlIE9yYklkLCB0eXBlIE9yYk1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBlbmVteUVudHJhbmNlUHJvZmlsZXMgfSBmcm9tIFwiLi9lbmVteUVudHJhbmNlVmlzdWFsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlFeGl0RWZmZWN0LCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB9IGZyb20gXCIuL2VuZW15RXhpdFZpc3VhbHNcIjtcbmltcG9ydCB7IHByb2plY3RIZWxpY29wdGVyUG9pbnQsIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB0eXBlIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VHJhY2tJZCA9IGBlbmVteS4ke3N0cmluZ31gO1xuXG5leHBvcnQgY29uc3QgZW5lbXlUcmFja0lkID0gKGVuZW15SWQ6IE9yYklkKTogRW5lbXlUcmFja0lkID0+XG4gIGVuZW15SWQgPT09IFwiYmFzaWNPcmJcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2VuZW15SWR9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoaWQ6IHN0cmluZyk6IHsgZW5lbXlJZDogT3JiSWQ7IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHwgbnVsbCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCA/IHsgZW5lbXlJZCwgZGVmaW5pdGlvbjogb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0gfSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQ6IE9yYklkKTogTmVvblNoYXBlQWN0b3Ige1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF07XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGRlZmluaXRpb24uc2hhcGVJZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgRW5lbXkgXCIke2VuZW15SWR9XCIgdXNlcyBtaXNzaW5nIE5lb25GYWN0b3J5IHNoYXBlIFwiJHtkZWZpbml0aW9uLnNoYXBlSWR9XCIuYCk7XG4gIGNvbnN0IGVudHJhbmNlID0gZW5lbXlFbnRyYW5jZVByb2ZpbGVzW2VuZW15SWRdO1xuICBjb25zdCBhY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7XG4gICAgc2hhcGUsXG4gICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcbiAgICBlbnRyYW5jZUR1cmF0aW9uOiBlbnRyYW5jZS5kdXJhdGlvblNlY29uZHMsXG4gICAgZW50cmFuY2VNYWduaXR1ZGU6IGVudHJhbmNlLnNjYXR0ZXJNYWduaXR1ZGUsXG4gIH0pO1xuICByZXR1cm4gYWN0b3IuZW50ZXIoZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLCBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RGVhdGhFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHwgbnVsbCB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15SWRdO1xuICBpZiAoZGVmaW5pdGlvbi5kZWF0aFZpc3VhbCAhPT0gXCJjbG91ZFwiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNyZWF0ZUVuZW15RXhpdEVmZmVjdCh7XG4gICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15SWQsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZUVuZW15QWN0b3IoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBkZWZpbml0aW9uOiBPcmJNZW1iZXIpOiB2b2lkIHtcbiAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IGRlZmluaXRpb24uZXhwbG9zaW9uTWFnbml0dWRlO1xuICBhY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhbWFnZWFibGVFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVhdEVuZW15KFxuICBlbmVteTogRGFtYWdlYWJsZUVuZW15LFxuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSxcbiAgY29sb3I6IHN0cmluZyA9IG5lb25QYWxldHRlW29yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdLmJhc2VDb2xvcl0sXG4pOiBPcmJNZW1iZXIge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gIGVuZW15LmR5aW5nID0gdHJ1ZTtcbiAgaWYgKCFlbmVteS5leGl0RWZmZWN0U3Bhd25lZCkge1xuICAgIGVuZW15LmV4aXRFZmZlY3RTcGF3bmVkID0gdHJ1ZTtcbiAgICBjb25zdCBlZmZlY3QgPSBjcmVhdGVFbmVteURlYXRoRWZmZWN0KHtcbiAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICB4OiBlbmVteS54LFxuICAgICAgeTogZW5lbXkueSxcbiAgICAgIGNvbG9yLFxuICAgICAgc2VlZDogZW5lbXkuaWQsXG4gICAgfSk7XG4gICAgaWYgKGVmZmVjdCkgZWZmZWN0cy5wdXNoKGVmZmVjdCk7XG4gIH1cbiAgZGlzcG9zZUVuZW15QWN0b3IoZW5lbXkuYWN0b3IsIGRlZmluaXRpb24pO1xuICByZXR1cm4gZGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFbmVteURhbWFnZShvcHRpb25zOiB7XG4gIGVuZW15OiBEYW1hZ2VhYmxlRW5lbXk7XG4gIGVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdO1xuICBkYW1hZ2U/OiBudW1iZXI7XG4gIGltcGFjdE1hZ25pdHVkZT86IG51bWJlcjtcbiAgaGl0Rmxhc2hVbnRpbD86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG59KTogeyBraWxsZWQ6IGJvb2xlYW47IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW29wdGlvbnMuZW5lbXkuZW5lbXlJZF07XG4gIGlmIChvcHRpb25zLmRhbWFnZSkgb3B0aW9ucy5lbmVteS5oZWFsdGggLT0gb3B0aW9ucy5kYW1hZ2U7XG4gIGlmIChvcHRpb25zLmltcGFjdE1hZ25pdHVkZSkge1xuICAgIG9wdGlvbnMuZW5lbXkuYWN0b3IuaW1wYWN0KHtcbiAgICAgIGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sXG4gICAgICBtYWduaXR1ZGU6IG9wdGlvbnMuaW1wYWN0TWFnbml0dWRlIC8gZGVmaW5pdGlvbi5pbXBhY3RSZXNpc3RhbmNlLFxuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLmhpdEZsYXNoVW50aWwgIT09IHVuZGVmaW5lZCkgb3B0aW9ucy5lbmVteS5oaXRGbGFzaFVudGlsID0gb3B0aW9ucy5oaXRGbGFzaFVudGlsO1xuICBpZiAob3B0aW9ucy5lbmVteS5oZWFsdGggPD0gMCkge1xuICAgIHJldHVybiB7IGtpbGxlZDogdHJ1ZSwgZGVmaW5pdGlvbjogZGVmZWF0RW5lbXkob3B0aW9ucy5lbmVteSwgb3B0aW9ucy5lZmZlY3RzLCBvcHRpb25zLmNvbG9yKSB9O1xuICB9XG4gIHJldHVybiB7IGtpbGxlZDogZmFsc2UsIGRlZmluaXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhvcHRpb25zOiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHZpc2libGVUaHJlc2hvbGQ/OiBudW1iZXI7XG59KTogTmVvblByaW1pdGl2ZVtdIHtcbiAgY29uc3QgdGhyZXNob2xkID0gb3B0aW9ucy52aXNpYmxlVGhyZXNob2xkID8/IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmhlYWx0aDtcbiAgaWYgKG9wdGlvbnMubWF4SGVhbHRoIDw9IHRocmVzaG9sZCkgcmV0dXJuIFtdO1xuICBjb25zdCByYXRpbyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wdGlvbnMuaGVhbHRoIC8gb3B0aW9ucy5tYXhIZWFsdGgpKTtcbiAgY29uc3QgeSA9IG9wdGlvbnMueTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgzNiwgb3B0aW9ucy53aWR0aCk7XG4gIGNvbnN0IGxlZnQgPSBvcHRpb25zLnggLSB3aWR0aCAvIDI7XG4gIGNvbnN0IGZpbGxlZCA9IE1hdGgubWF4KDAsIHdpZHRoICogcmF0aW8pO1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHg6IG9wdGlvbnMueCxcbiAgICAgIHksXG4gICAgICB3aWR0aDogOC44LFxuICAgICAgaGVpZ2h0OiB3aWR0aCAvIDIsXG4gICAgICBjb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBnbG93OiAuMDgsXG4gICAgICBpbnRlbnNpdHk6IC40MixcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IGxlZnQgKyBmaWxsZWQgLyAyLFxuICAgICAgeSxcbiAgICAgIHdpZHRoOiA3LjIsXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KDEsIGZpbGxlZCkgLyAyLFxuICAgICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6IC43OCxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15SGVhbHRoQmFyVGFyZ2V0IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoXG4gIHRhcmdldHM6IHJlYWRvbmx5IEVuZW15SGVhbHRoQmFyVGFyZ2V0W10sXG4gIGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gdGFyZ2V0cy5mbGF0TWFwKHRhcmdldCA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW3RhcmdldC5lbmVteUlkXTtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnQodGFyZ2V0LngsIHRhcmdldC55LCBjYW1lcmFTZXR0aW5ncywgdmlld3BvcnQpO1xuICAgIGNvbnN0IHByb2plY3RlZFNpemUgPSB0YXJnZXQuc2l6ZSAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IHNjYWxlID0gdGFyZ2V0LnNjYWxlID8/IDE7XG4gICAgcmV0dXJuIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSAtIHByb2plY3RlZFNpemUgKiAuNzIgLSAxMixcbiAgICAgIHdpZHRoOiBNYXRoLm1heChwcm9qZWN0ZWRTaXplICogMS4zNSwgZGVmaW5pdGlvbi5yYWRpdXMgKiA1LjIgKiBzY2FsZSAqIHBvaW50LnNjYWxlKSxcbiAgICAgIGhlYWx0aDogdGFyZ2V0LmhlYWx0aCxcbiAgICAgIG1heEhlYWx0aDogdGFyZ2V0Lm1heEhlYWx0aCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSwgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbnR5cGUgU2NlbmVCYWNrZ3JvdW5kU3RhdGUgPSBcIm1pc3NpbmdcIiB8IFwibG9hZGVkXCIgfCBcImxvYWRpbmdcIjtcblxuY29uc3Qgc2NlbmVCYWNrZ3JvdW5kcyA9IG5ldyBNYXA8c3RyaW5nLCBTY2VuZUJhY2tncm91bmRTdGF0ZT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXMoXG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgdGltZU1zOiBudW1iZXIsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gWy4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkLCB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSkucHJpbWl0aXZlcyA/PyBbXSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgbWFya2VyID0gXCIvTmVvblN3YXJtL1wiO1xuICBjb25zdCBuZXN0ZWRJbmRleCA9IHBhdGguaW5kZXhPZihtYXJrZXIpO1xuICBpZiAobmVzdGVkSW5kZXggPj0gMCkgcmV0dXJuIGAke3BhdGguc2xpY2UoMCwgbmVzdGVkSW5kZXgpfS9OZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcblxuICBjb25zdCBwYWdlSW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFwiL05lb25Td2FybS5odG1sXCIpO1xuICBpZiAocGFnZUluZGV4ID49IDApIHJldHVybiBgJHtwYXRoLnNsaWNlKDAsIHBhZ2VJbmRleCl9L05lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xuXG4gIHJldHVybiBgTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogdm9pZCB7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcblxuICBjb25zdCBwYXRoID0gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkKTtcbiAgY29uc3Qgc3RhdGUgPSBzY2VuZUJhY2tncm91bmRzLmdldChwYXRoKTtcbiAgaWYgKHN0YXRlID09PSBcImxvYWRlZFwiKSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtwYXRofVwiKWA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIik7XG4gIGlmIChzdGF0ZSkgcmV0dXJuO1xuXG4gIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGluZ1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGVkXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGF0aH1cIilgO1xuICB9O1xuICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibWlzc2luZ1wiKTtcbiAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgfTtcbiAgaW1hZ2Uuc3JjID0gcGF0aDtcbn1cbiIsICJpbXBvcnQgeyBOZW9uU2hhcGVBY3RvciwgTmVvblNoYXBlRGlzcG9zYWwsIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciwgbmVvblBhbGV0dGUsIHR5cGUgTmVvblByaW1pdGl2ZSwgdHlwZSBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBndW5GYW1pbHksIG11bHRpcGxpZXJGYW1pbHksIG9yYkZhbWlseSwgdHlwZSBHdW5MZXZlbCwgdHlwZSBHdW5NZW1iZXIsIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBiaW5kU3F1YWRJbnB1dCB9IGZyb20gXCIuLi8uLi9zcmMvaW5wdXRcIjtcclxuaW1wb3J0IHsgU3F1YWRNb2RlbCB9IGZyb20gXCIuLi8uLi9zcmMvc3F1YWRcIjtcclxuaW1wb3J0IHsgQXV0b0FpbUNvbnRyb2xTdGF0ZSwgc2VsZWN0QXV0b0FpbU9mZnNldCB9IGZyb20gXCIuLi8uLi9zcmMvYXV0b0FpbVwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBhcHBseVBvcnRyYWl0U3RhZ2UsIGxhbmVSdW5uZXJDYW1lcmFGb2N1c1gsIGxhbmVSdW5uZXJWaWV3cG9ydCwgcHJvamVjdEhlbGljb3B0ZXJTY2VuZSB9IGZyb20gXCIuLi8uLi9zcmMvdmlld3BvcnRcIjtcbmltcG9ydCB7IGFjdG9ySW5Ub3BEb3duU2NlbmUsIHNoYXBlTGFiZWwsIHN3YXJtU2hhcGVzIH0gZnJvbSBcIi4uLy4uL3NyYy9zaGFwZVZpc3VhbHNcIjtcclxuaW1wb3J0IHsgYmlsbGJvYXJkT3JpZW50YXRpb24sIGVuZW15T3JpZW50YXRpb24sIGhlbGljb3B0ZXJWaWV3cG9ydEZvciwgcGxheWVyT3JpZW50YXRpb24gfSBmcm9tIFwiLi4vLi4vc3JjL3JlbmRlck9yaWVudGF0aW9uXCI7XHJcbmltcG9ydCB7IEd1blNpbXVsYXRpb24gfSBmcm9tIFwiLi4vLi4vc3JjL2NvbWJhdC9ndW5TaW11bGF0aW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVuZW15QWN0b3IsIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcywgcmVzb2x2ZUVuZW15RGFtYWdlIH0gZnJvbSBcIi4uLy4uL3NyYy9lbmVteUNhdGFsb2dcIjtcbmltcG9ydCB7IGVuZW15RXhpdENsb3VkLCB1cGRhdGVFbmVteUV4aXRFZmZlY3RzLCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB9IGZyb20gXCIuLi8uLi9zcmMvZW5lbXlFeGl0VmlzdWFsc1wiO1xuaW1wb3J0IHsgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kLCBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzIH0gZnJvbSBcIi4uLy4uL3NyYy9zY2VuZUVudmlyb25tZW50XCI7XG5cclxuaW50ZXJmYWNlIEVuZW15IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGxhbmU6IG51bWJlcjtcclxuICBlbmVteUlkOiBPcmJJZDtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIGhlYWx0aDogbnVtYmVyO1xyXG4gIG1heEhlYWx0aDogbnVtYmVyO1xyXG4gIGhpdEZsYXNoVW50aWw6IG51bWJlcjtcclxuICByb3dJZDogbnVtYmVyO1xyXG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcclxuICBkeWluZzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBpY2t1cCB7XHJcbiAgZ3VuSWQ6IHN0cmluZztcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGxhbmU6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTXVsdGlwbGllclBpY2t1cCB7IGxhbmU6IG51bWJlcjsgeTogbnVtYmVyOyBhY3RvcjogTmVvblNoYXBlQWN0b3IgfVxyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oXCIjZ2FtZS1jYW52YXNcIikhO1xyXG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2Vycm9yXCIpITtcclxuY29uc3QgZ3VuU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjZ3VuLXNlbGVjdFwiKSE7XHJcbmNvbnN0IGxldmVsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjbGV2ZWwtc2VsZWN0XCIpITtcclxuY29uc3QgZW5lbXlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiNlbmVteS1zZWxlY3RcIikhO1xyXG5jb25zdCB3ZWFwb25SZWFkb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjd2VhcG9uLXJlYWRvdXRcIikhO1xyXG5jb25zdCBzY29yZVJlYWRvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzY29yZS1yZWFkb3V0XCIpITtcclxuY29uc3Qgc3BlY1JlYWRvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzcGVjLXJlYWRvdXRcIikhO1xyXG5jb25zdCBmb3JtYXRpb25TaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNmb3JtYXRpb24tc2l6ZVwiKSE7XHJcbmNvbnN0IGZvcm1hdGlvblJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiNmb3JtYXRpb24tcm93c1wiKSE7XHJcbmNvbnN0IHNoYXBlWm9vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjc2hhcGUtem9vbVwiKSE7XG5jb25zdCBnYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2dhbWVcIikhO1xuYXBwbHlQb3J0cmFpdFN0YWdlKGdhbWVFbGVtZW50LCBsYW5lUnVubmVyVmlld3BvcnQpO1xuYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kKGdhbWVFbGVtZW50LCBcIm5lb25IYWxsXCIpO1xuY29uc3QgYXVkaW9JZCA9IChpZDogc3RyaW5nKTogc3RyaW5nID0+IGAuLi8uLi8uLi8uLi9hdWRpby8ke2lkfWA7XG5jb25zdCBwbGF5U2Z4ID0gKGlkOiBzdHJpbmcpOiB2b2lkID0+IHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoYXVkaW9JZChpZCkpO1xuY29uc3QgcGxheVJvdGF0ZWRTZnggPSAoaWQ6IHN0cmluZywgYWx0ZXJuYXRpdmVzOiBudW1iZXIpOiB2b2lkID0+IHdpbmRvdy5nYW1lQXVkaW8/LnBsYXlSb3RhdGVkKGF1ZGlvSWQoaWQpLCBhbHRlcm5hdGl2ZXMpO1xuXHJcbnRyeSB7XHJcbiAgY29uc3QgcmVuZGVyZXIgPSBhd2FpdCBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIuY3JlYXRlKGNhbnZhcywgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxXaWR0aCwgbGFuZVJ1bm5lclZpZXdwb3J0LmxvZ2ljYWxIZWlnaHQpO1xuICBjb25zdCBndW5zOiBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+ID0gZ3VuRmFtaWx5Lm1lbWJlcnM7XHJcbiAgY29uc3QgZW5lbWllczogRW5lbXlbXSA9IFtdO1xyXG4gIGNvbnN0IGd1blNpbXVsYXRpb24gPSBuZXcgR3VuU2ltdWxhdGlvbigpO1xyXG4gIGNvbnN0IHByb2plY3RpbGVzID0gZ3VuU2ltdWxhdGlvbi5wcm9qZWN0aWxlcztcclxuICBjb25zdCBwaWNrdXBzOiBQaWNrdXBbXSA9IFtdO1xyXG4gIGNvbnN0IGVmZmVjdHMgPSBndW5TaW11bGF0aW9uLmVmZmVjdHM7XHJcbiAgY29uc3QgZW5lbXlFeGl0RWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10gPSBbXTtcclxuICBjb25zdCBtdWx0aXBsaWVyczogTXVsdGlwbGllclBpY2t1cFtdID0gW107XHJcbiAgY29uc3Qgc3F1YWQgPSBuZXcgU3F1YWRNb2RlbCgpO1xyXG4gIGxldCBwbGF5ZXJMYW5lID0gMDtcclxuICBjb25zdCBhaW1Db250cm9sID0gbmV3IEF1dG9BaW1Db250cm9sU3RhdGUoKTtcclxuICBsZXQgZXF1aXBwZWRHdW5JZCA9IFwicHVsc2VQaXN0b2xcIjtcclxuICBsZXQgZXF1aXBwZWRMZXZlbCA9IDE7XHJcbiAgbGV0IGNvb2xkb3duID0gMDtcclxuICBsZXQgc2hvdFNlcXVlbmNlID0gMDtcclxuICBsZXQgZW50aXR5U2VxdWVuY2UgPSAwO1xyXG4gIGxldCBraWxscyA9IDA7XHJcbiAgbGV0IGxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gIGxldCByZWNvaWwgPSAwO1xyXG4gIGNvbnN0IHBzZXVkb1JhbmRvbSA9IChzZWVkOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnNpbihzZWVkICogMTIuOTg5OCArIDc4LjIzMykgKiA0Mzc1OC41NDUzO1xyXG4gICAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGFuZVggPSAobGFuZTogbnVtYmVyKSA9PiBjYW52YXMud2lkdGggKiAobGFuZSA9PT0gMCA/IDAuMzIgOiAwLjY4KTtcclxuICBjb25zdCBwbGF5ZXJZID0gKCkgPT4gY2FudmFzLmhlaWdodCAqIDAuODI7XHJcbiAgY29uc3Qgc2NhbGUgPSAoKSA9PiAxO1xyXG4gIGNvbnN0IHBsYXlFbmVteVNwYXduU291bmQgPSAoaWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkID0+IHtcbiAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgaWYgKGlkID09PSBcIkJvc3NcIikgcGxheVJvdGF0ZWRTZngoXCJCb3NzXCIsIDEpO1xuICAgIGVsc2UgcGxheVNmeChpZCk7XG4gIH07XG5cclxuICBmb3IgKGNvbnN0IFtpZCwgZ3VuXSBvZiBPYmplY3QuZW50cmllcyhndW5zKSkge1xyXG4gICAgZ3VuU2VsZWN0LmFkZChuZXcgT3B0aW9uKGd1bi5sYWJlbCwgaWQpKTtcclxuICB9XHJcbiAgZ3VuU2VsZWN0LnZhbHVlID0gZXF1aXBwZWRHdW5JZDtcclxuICBmb3IgKGNvbnN0IFtpZCwgZW5lbXldIG9mIE9iamVjdC5lbnRyaWVzKG9yYkZhbWlseS5tZW1iZXJzKSkge1xyXG4gICAgZW5lbXlTZWxlY3QuYWRkKG5ldyBPcHRpb24oZW5lbXkubGFiZWwsIGlkKSk7XHJcbiAgfVxyXG4gIGVuZW15U2VsZWN0LnZhbHVlID0gXCJiYXNpY09yYlwiO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZExldmVsID0gKCk6IEd1bkxldmVsID0+IHtcclxuICAgIGNvbnN0IGxldmVscyA9IGd1bnNbZXF1aXBwZWRHdW5JZF0ubGV2ZWxzO1xyXG4gICAgcmV0dXJuIGxldmVscy5maW5kKGxldmVsID0+IGxldmVsLmxldmVsID09PSBlcXVpcHBlZExldmVsKSA/PyBsZXZlbHNbMF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUmVhZG91dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGd1biA9IGd1bnNbZXF1aXBwZWRHdW5JZF07XHJcbiAgICBjb25zdCBsZXZlbCA9IHNlbGVjdGVkTGV2ZWwoKTtcclxuICAgIGNvbnN0IGVuZW15ID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlTZWxlY3QudmFsdWUgYXMgT3JiSWRdO1xyXG4gICAgd2VhcG9uUmVhZG91dC50ZXh0Q29udGVudCA9IGAke2d1bi5sYWJlbH0gXHUwMEI3IEwke2xldmVsLmxldmVsfWA7XHJcbiAgICBzY29yZVJlYWRvdXQudGV4dENvbnRlbnQgPSBgS2lsbHMgJHtraWxsc31gO1xyXG4gICAgc3BlY1JlYWRvdXQuaW5uZXJIVE1MID0gW1xyXG4gICAgICBbXCJQYXR0ZXJuXCIsIGd1bi5zaG90UGF0dGVybl0sXHJcbiAgICAgIFtcIkZpcmUgcmF0ZVwiLCBgJHtsZXZlbC5maXJlUmF0ZVBlclNlY29uZH0vc2BdLFxyXG4gICAgICBbXCJEYW1hZ2VcIiwgU3RyaW5nKGxldmVsLmRhbWFnZSldLFxyXG4gICAgICBbXCJTcGVlZFwiLCBTdHJpbmcobGV2ZWwucHJvamVjdGlsZVNwZWVkKV0sXHJcbiAgICAgIFtcIlJhZGl1c1wiLCBTdHJpbmcobGV2ZWwucHJvamVjdGlsZVJhZGl1cyldLFxyXG4gICAgICBbXCJCdXJzdFwiLCBTdHJpbmcobGV2ZWwuYnVyc3RDb3VudCldLFxyXG4gICAgICBbXCJQaWVyY2VcIiwgU3RyaW5nKGxldmVsLnBpZXJjZSldLFxyXG4gICAgICBbXCJFbmVteVwiLCBlbmVteS5sYWJlbF0sXHJcbiAgICAgIFtcIkVuZW15IEhQXCIsIFN0cmluZyhlbmVteS5oZWFsdGgpXSxcclxuICAgICAgW1wiRW5lbXkgc3BlZWRcIiwgU3RyaW5nKGVuZW15LnNwZWVkKV0sXHJcbiAgICBdLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYDxkdD4ke25hbWV9PC9kdD48ZGQ+JHt2YWx1ZX08L2RkPmApLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZXF1aXAgPSAoZ3VuSWQ6IHN0cmluZywgbGV2ZWw6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgZXF1aXBwZWRHdW5JZCA9IGd1bklkO1xyXG4gICAgZXF1aXBwZWRMZXZlbCA9IGxldmVsO1xyXG4gICAgY29vbGRvd24gPSAwO1xyXG4gICAgZ3VuU2VsZWN0LnZhbHVlID0gZ3VuSWQ7XHJcbiAgICBsZXZlbFNlbGVjdC52YWx1ZSA9IFN0cmluZyhsZXZlbCk7XHJcbiAgICBwbGF5U2Z4KFwiUGlja3VwXCIpO1xuICAgIHVwZGF0ZVJlYWRvdXQoKTtcclxuICB9O1xyXG5cclxuICBzcXVhZC54ID0gbGFuZVgoMCk7XHJcbiAgc3F1YWQudGFyZ2V0WCA9IGxhbmVYKDApO1xyXG5cclxuICBjb25zdCBzcGF3bkVuZW15ID0gKGxhbmU6IG51bWJlciwgeCA9IGxhbmVYKGxhbmUpLCB5ID0gMTA1ICogc2NhbGUoKSwgcm93SWQgPSArK2VudGl0eVNlcXVlbmNlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBlbmVteUlkID0gZW5lbXlTZWxlY3QudmFsdWUgYXMgT3JiSWQ7XHJcbiAgICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF07XHJcbiAgICBjb25zdCBtYXhIZWFsdGggPSBkZWZpbml0aW9uLmhlYWx0aDtcclxuICAgIGVuZW1pZXMucHVzaCh7IGlkOiArK2VudGl0eVNlcXVlbmNlLCBsYW5lLCBlbmVteUlkLCB4LCB5LCBoZWFsdGg6IG1heEhlYWx0aCwgbWF4SGVhbHRoLCBoaXRGbGFzaFVudGlsOiAwLCByb3dJZCwgYWN0b3I6IGNyZWF0ZUVuZW15QWN0b3IoZW5lbXlJZCksIGR5aW5nOiBmYWxzZSB9KTtcclxuICAgIHBsYXlFbmVteVNwYXduU291bmQoZGVmaW5pdGlvbi5zcGF3blNvdW5kKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzcGF3blBpY2t1cCA9IChsYW5lOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgIHBpY2t1cHMucHVzaCh7IGd1bklkOiBndW5TZWxlY3QudmFsdWUsIGxldmVsOiBOdW1iZXIobGV2ZWxTZWxlY3QudmFsdWUpLCBsYW5lLCB5OiAxMzUgKiBzY2FsZSgpLCBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmd1blBpY2t1cCB9KSB9KTtcclxuICB9O1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIltkYXRhLXNwYXduLWVuZW15XVwiKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNwYXduRW5lbXkoTnVtYmVyKGJ1dHRvbi5kYXRhc2V0LnNwYXduRW5lbXkpKSk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQnV0dG9uRWxlbWVudD4oXCJbZGF0YS1zcGF3bi1waWNrdXBdXCIpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3Bhd25QaWNrdXAoTnVtYmVyKGJ1dHRvbi5kYXRhc2V0LnNwYXduUGlja3VwKSkpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tZm9ybWF0aW9uXVwiKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgbGFuZSA9IE51bWJlcihidXR0b24uZGF0YXNldC5zcGF3bkZvcm1hdGlvbik7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gTnVtYmVyKGZvcm1hdGlvblNpemUudmFsdWUpO1xyXG4gICAgICBjb25zdCByb3dzID0gTnVtYmVyKGZvcm1hdGlvblJvd3MudmFsdWUpO1xyXG4gICAgICBjb25zdCBwZXJSb3cgPSBNYXRoLmNlaWwoY291bnQgLyByb3dzKTtcclxuICAgICAgbGV0IHJlbWFpbmluZyA9IGNvdW50O1xyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xyXG4gICAgICAgIGNvbnN0IHJvd0lkID0gKytlbnRpdHlTZXF1ZW5jZTtcclxuICAgICAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHBlclJvdywgcmVtYWluaW5nKTtcclxuICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCByb3dDb3VudDsgY29sdW1uKyspIHtcclxuICAgICAgICAgIHNwYXduRW5lbXkobGFuZSwgbGFuZVgobGFuZSkgKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIDE1ICogc2NhbGUoKSwgKDEwNSAtIHJvdyAqIDI0KSAqIHNjYWxlKCksIHJvd0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtYWluaW5nIC09IHJvd0NvdW50O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIltkYXRhLXNwYXduLW11bHRpcGxpZXJdXCIpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbXVsdGlwbGllcnMucHVzaCh7IGxhbmU6IE51bWJlcihidXR0b24uZGF0YXNldC5zcGF3bk11bHRpcGxpZXIpLCB5OiAxMzUgKiBzY2FsZSgpLCBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLm11bHRpcGxpZXIgfSkgfSkpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI3NwYXduLXdhdmVcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzcGF3bkVuZW15KDApO1xyXG4gICAgc3Bhd25FbmVteSgxKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc3Bhd25FbmVteSgwKSwgNDUwKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc3Bhd25FbmVteSgxKSwgNzAwKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjbGVhci1zdGFnZVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGVuZW1pZXMubGVuZ3RoID0gcHJvamVjdGlsZXMubGVuZ3RoID0gcGlja3Vwcy5sZW5ndGggPSBlZmZlY3RzLmxlbmd0aCA9IG11bHRpcGxpZXJzLmxlbmd0aCA9IGVuZW15RXhpdEVmZmVjdHMubGVuZ3RoID0gMDtcclxuICB9KTtcclxuXHJcbiAgYmluZFNxdWFkSW5wdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZ2FtZVwiKSEsIFwiI2pveXN0aWNrXCIsIHtcclxuICAgIGxhbmU6ICgpID0+IHNxdWFkLmxhbmUsXHJcbiAgICBzZXRMYW5lOiBsYW5lID0+IHtcclxuICAgICAgcGxheWVyTGFuZSA9IGxhbmU7XHJcbiAgICAgIHNxdWFkLnNldExhbmUobGFuZSwgbGFuZVgsIHBlcmZvcm1hbmNlLm5vdygpKTtcclxuICAgICAgYWltQ29udHJvbC5sYW5lU2VsZWN0ZWQoKTtcclxuICAgIH0sXHJcbiAgICBzZXRBaW06IHZhbHVlID0+IHtcclxuICAgICAgc3F1YWQuc2V0QWltKHZhbHVlLCBjYW52YXMud2lkdGggKiAuMjIsIGxhbmVYKTtcclxuICAgICAgYWltQ29udHJvbC5haW1DaGFuZ2VkKCk7XHJcbiAgICB9LFxyXG4gICAgcmVsZWFzZUFpbTogKCkgPT4geyBhaW1Db250cm9sLmFpbVJlbGVhc2VkKCk7IH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZpcmVWb2xsZXkgPSAoZ3VuOiBHdW5NZW1iZXIsIGxldmVsOiBHdW5MZXZlbCk6IHZvaWQgPT4ge1xyXG4gICAgZ3VuU2ltdWxhdGlvbi5maXJlKGd1biwgbGV2ZWwsIHBsYXllckxhbmUsIHNxdWFkLnBvaW50cyhwbGF5ZXJZKCksIHNjYWxlKCkpLm1hcChwb2ludCA9PiAoe1xyXG4gICAgICB4OiBwb2ludC54LCB5OiBwbGF5ZXJZKCkgLSAyMiAqIHNjYWxlKCksXHJcbiAgICB9KSksIHBlcmZvcm1hbmNlLm5vdygpLCBzY2FsZSgpKTtcclxuICAgIHJlY29pbCA9IGxldmVsLm11enpsZUZsYXNoU2NhbGUgKiA3ICogc2NhbGUoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaXJlID0gKGd1bjogR3VuTWVtYmVyLCBsZXZlbDogR3VuTGV2ZWwpOiB2b2lkID0+IHtcclxuICAgIGZpcmVWb2xsZXkoZ3VuLCBsZXZlbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGl0RW5lbXkgPSAocHJvamVjdGlsZTogdHlwZW9mIHByb2plY3RpbGVzW251bWJlcl0sIGVuZW15OiBFbmVteSwgbm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gICAgY29uc3QgcmVzdWx0ID0gcmVzb2x2ZUVuZW15RGFtYWdlKHtcbiAgICAgIGVuZW15LFxuICAgICAgZWZmZWN0czogZW5lbXlFeGl0RWZmZWN0cyxcbiAgICAgIGltcGFjdE1hZ25pdHVkZTogcHJvamVjdGlsZS5kYW1hZ2UgKyBwcm9qZWN0aWxlLmtub2NrYmFjayAqIC4wNixcbiAgICAgIGhpdEZsYXNoVW50aWw6IG5vdyArIGRlZmluaXRpb24uaGl0Rmxhc2hEdXJhdGlvbk1zLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmtpbGxlZCkge1xuICAgICAga2lsbHMgKz0gMTtcbiAgICAgIHBsYXlTZngocmVzdWx0LmRlZmluaXRpb24uZGVhdGhTb3VuZCk7XG4gICAgICB1cGRhdGVSZWFkb3V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXlTZngoXCJIaXRcIik7XG4gICAgfVxuICB9O1xuXHJcbiAgY29uc3QgdXBkYXRlID0gKG5vdzogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBkZWx0YSA9IE1hdGgubWluKChub3cgLSBsYXN0RnJhbWUpIC8gMTAwMCwgMC4wNSk7XHJcbiAgICBsYXN0RnJhbWUgPSBub3c7XHJcbiAgICB1cGRhdGVFbmVteUV4aXRFZmZlY3RzKGVuZW15RXhpdEVmZmVjdHMsIGRlbHRhKTtcclxuICAgIGNvbnN0IGd1biA9IGd1bnNbZXF1aXBwZWRHdW5JZF07XHJcbiAgICBjb25zdCBsZXZlbCA9IHNlbGVjdGVkTGV2ZWwoKTtcclxuICAgIGNvb2xkb3duIC09IGRlbHRhO1xyXG4gICAgaWYgKGNvb2xkb3duIDw9IDApIHtcclxuICAgICAgZmlyZShndW4sIGxldmVsKTtcclxuICAgICAgY29vbGRvd24gKz0gMSAvIGxldmVsLmZpcmVSYXRlUGVyU2Vjb25kO1xyXG4gICAgfVxyXG4gICAgaWYgKGd1blNpbXVsYXRpb24udXBkYXRlRmlyaW5nKG5vdykgPiAwKSBwbGF5Um90YXRlZFNmeChcIlByaW1hcnlcIiwgMyk7XG4gICAgcmVjb2lsICo9IE1hdGgucG93KDAuMDAxLCBkZWx0YSk7XHJcbiAgICBpZiAoIWFpbUNvbnRyb2wubWFudWFsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmVFbmVtaWVzID0gZW5lbWllcy5maWx0ZXIoZW5lbXkgPT4gZW5lbXkubGFuZSA9PT0gc3F1YWQubGFuZSAmJiAhZW5lbXkuZHlpbmcpO1xyXG4gICAgICBjb25zdCBjb2xPZmZzZXRzID0gc3F1YWQuZnJvbnRSb3dDb2x1bW5PZmZzZXRzKHNjYWxlKCkpO1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGxhbmVFbmVtaWVzLCBsYW5lWChzcXVhZC5sYW5lKSwgY29sT2Zmc2V0cywgc3F1YWQuYWltT2Zmc2V0KTtcclxuICAgICAgc3F1YWQuYXV0b0FpbShvZmZzZXQsIGNhbnZhcy53aWR0aCAqIC4yMiwgbGFuZVgpO1xyXG4gICAgfVxyXG4gICAgc3F1YWQudXBkYXRlKGRlbHRhKTtcclxuICAgIGdhbWVFbGVtZW50LmRhdGFzZXQuc3F1YWRMYW5lID0gU3RyaW5nKHNxdWFkLmxhbmUpO1xyXG4gICAgZ2FtZUVsZW1lbnQuZGF0YXNldC5zcXVhZEFpbSA9IHNxdWFkLmFpbU9mZnNldC50b0ZpeGVkKDIpO1xyXG5cclxuICAgIGd1blNpbXVsYXRpb24udXBkYXRlUHJvamVjdGlsZXMoZGVsdGEsIG5vdywgZW5lbWllcy5tYXAoZW5lbXkgPT4gT2JqZWN0LmFzc2lnbihlbmVteSwge1xyXG4gICAgICByYWRpdXM6IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdLnJhZGl1cyAqIHNjYWxlKCksXHJcbiAgICB9KSksIHsgdG9wOiAtNDAgKiBzY2FsZSgpLCBsZWZ0OiAtNDAsIHJpZ2h0OiBjYW52YXMud2lkdGggKyA0MCB9LFxyXG4gICAgKHByb2plY3RpbGUsIHRhcmdldCkgPT4gaGl0RW5lbXkocHJvamVjdGlsZSwgdGFyZ2V0IGFzIHVua25vd24gYXMgRW5lbXksIG5vdykpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZW5lbXkgb2YgWy4uLmVuZW1pZXNdKSB7XHJcbiAgICAgIGVuZW15LmFjdG9yLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgIGVuZW15LnkgKz0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF0uc3BlZWQgKiBzY2FsZSgpICogZGVsdGEgLSBlbmVteS5hY3Rvci55ICogY2FudmFzLmhlaWdodCAvIDIuNTtcclxuICAgICAgZW5lbXkuYWN0b3IubW92ZVRvKDAsIDApO1xyXG4gICAgICBpZiAoZW5lbXkuZHlpbmcgJiYgZW5lbXkuYWN0b3IuZGlzcG9zZWQpIHsgZW5lbWllcy5zcGxpY2UoZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7IGNvbnRpbnVlOyB9XHJcbiAgICAgIGlmICghZW5lbXkuZHlpbmcgJiYgZW5lbXkueSA+PSBwbGF5ZXJZKCkpIGVuZW1pZXMuc3BsaWNlKGVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnBpY2t1cHNdKSB7XHJcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpOyBwaWNrdXAueSArPSA2MiAqIHNjYWxlKCkgKiBkZWx0YTtcclxuICAgICAgaWYgKHBpY2t1cC55ID49IHBsYXllclkoKSAtIDEyICogc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gcGxheWVyTGFuZSkge1xyXG4gICAgICAgIGVxdWlwKHBpY2t1cC5ndW5JZCwgcGlja3VwLmxldmVsKTtcclxuICAgICAgICBwaWNrdXBzLnNwbGljZShwaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiBjYW52YXMuaGVpZ2h0ICsgMzAgKiBzY2FsZSgpKSB7XHJcbiAgICAgICAgcGlja3Vwcy5zcGxpY2UocGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4ubXVsdGlwbGllcnNdKSB7XHJcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpOyBwaWNrdXAueSArPSA2MiAqIHNjYWxlKCkgKiBkZWx0YTtcclxuICAgICAgaWYgKHBpY2t1cC55ID49IHBsYXllclkoKSAtIDEyICogc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gcGxheWVyTGFuZSkge1xyXG4gICAgICAgIHNxdWFkLmFkZChtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lLnNxdWFkQWRkZWQpO1xyXG4gICAgICAgIG11bHRpcGxpZXJzLnNwbGljZShtdWx0aXBsaWVycy5pbmRleE9mKHBpY2t1cCksIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gY2FudmFzLmhlaWdodCkgbXVsdGlwbGllcnMuc3BsaWNlKG11bHRpcGxpZXJzLmluZGV4T2YocGlja3VwKSwgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJhdyA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgcyA9IHNjYWxlKCk7XHJcbiAgICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXG4gICAgICAuLi5sYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzKFwibmVvbkhhbGxcIiwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBub3cpLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBzcXVhZC5wb2ludHMocGxheWVyWSgpICsgcmVjb2lsLCBzKSkgdm9pZCBwb2ludDtcclxuICAgIHByaW1pdGl2ZXMucHVzaCguLi5ndW5TaW11bGF0aW9uLnByb2plY3RpbGVQcmltaXRpdmVzKCkpO1xyXG4gICAgaWYgKGZhbHNlKSBmb3IgKGNvbnN0IGVuZW15IG9mIGVuZW1pZXMpIHtcclxuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdO1xyXG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xyXG4gICAgICAgIHg6IGVuZW15LnggKyBkZWZpbml0aW9uLnJhZGl1cyAqIC4zNSAqIHMsXHJcbiAgICAgICAgeTogZW5lbXkueSArIGRlZmluaXRpb24ucmFkaXVzICogMS4xMiAqIHMsXHJcbiAgICAgICAgd2lkdGg6IGRlZmluaXRpb24ucmFkaXVzICogLjkgKiBzLFxyXG4gICAgICAgIGhlaWdodDogZGVmaW5pdGlvbi5yYWRpdXMgKiAuMjggKiBzLFxyXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLnNoYWRvd0NvbG9yXSxcclxuICAgICAgICBnbG93OiAuMTgsXHJcbiAgICAgICAgaW50ZW5zaXR5OiAuMyxcclxuICAgICAgICBzaGFwZTogXCJjaXJjbGVcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XHJcbiAgICAgICAgeDogZW5lbXkueCwgeTogZW5lbXkueSwgd2lkdGg6IGRlZmluaXRpb24ucmFkaXVzICogcyxcclxuICAgICAgICBjb2xvcjogZW5lbXkuaGl0Rmxhc2hVbnRpbCA+IG5vdyA/IG5lb25QYWxldHRlLndoaXRlSG90IDogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5yaW1Db2xvcl0sXHJcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcclxuICAgICAgICBnbG93OiBkZWZpbml0aW9uLmdsb3csXHJcbiAgICAgICAgdGV4dHVyZTogZGVmaW5pdGlvbi5zdXJmYWNlVGV4dHVyZSxcclxuICAgICAgICByaW1JbnRlbnNpdHk6IGRlZmluaXRpb24ucmltSW50ZW5zaXR5LFxyXG4gICAgICAgIHNoYWRvd1N0cmVuZ3RoOiBkZWZpbml0aW9uLnNoYWRvd1N0cmVuZ3RoLFxyXG4gICAgICAgIGludGVuc2l0eTogZW5lbXkuaGl0Rmxhc2hVbnRpbCA+IG5vdyA/IDEuNTUgOiAxLFxyXG4gICAgICAgIHNoYXBlOiBcIm9yYlwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChmYWxzZSkgZm9yIChjb25zdCBwaWNrdXAgb2YgbXVsdGlwbGllcnMpIHtcclxuICAgICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XHJcbiAgICAgIGNvbnN0IHBDb2xvciA9IG5lb25QYWxldHRlW3NwZWMucGlja3VwQ29sb3JdO1xyXG4gICAgICBjb25zdCB0Q29sb3IgPSBuZW9uUGFsZXR0ZVtzcGVjLmNvcmVDb2xvcl07XHJcbiAgICAgIGNvbnN0IHB4ID0gbGFuZVgocGlja3VwLmxhbmUpO1xyXG4gICAgICAvLyBXb2JibGUgJiBzY2FsZSBwdWxzZSBtYXRjaGluZyB3ZWFwb24gcGlja3VwIHN0eWxlXHJcbiAgICAgIGNvbnN0IHdvYmJsZSA9IE1hdGguc2luKG5vdyAvIDQyMCArIHBpY2t1cC55ICogMC4wNykgKiA0LjUgKiBzO1xyXG4gICAgICBjb25zdCB3eCA9IHB4ICsgd29iYmxlO1xyXG4gICAgICBjb25zdCBwdWxzZSA9IDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyBwaWNrdXAueSAqIDAuMDUpICogMC4wODtcclxuXHJcbiAgICAgIC8vIE91dGVyIGJsb29tIGhhbG8gKGRpZmZlcmVudCBzaXplL2dsb3cgZm9yIGRpc3RpbmN0aW9uKVxyXG4gICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCwgeTogcGlja3VwLnksIHdpZHRoOiAyOCAqIHMgKiBwdWxzZSwgY29sb3I6IHBDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHRDb2xvciwgZ2xvdzogLjk1LCBpbnRlbnNpdHk6IC4yNSwgc2hhcGU6IFwiY2lyY2xlXCIgfSk7XHJcbiAgICAgIC8vIFBlbnRhZ29uIGdsYXNzeSBwYW5lbCAobmVvbiBlZGdlcylcclxuICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3gsIHk6IHBpY2t1cC55LCB3aWR0aDogMTkgKiBzICogcHVsc2UsIGNvbG9yOiBwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0Q29sb3IsIGdsb3c6IC45LCBpbnRlbnNpdHk6IDEuMSwgc2hhcGU6IFwicGVudGFnb25cIiB9KTtcclxuXHJcbiAgICAgIC8vIElubmVyIGdseXBoIGZvciBcIisxXCIgKHVzaW5nIHNpbXBsZSBsaW5lcy9zcGFyayBmb3IgKyBhbmQgYm9sdC9saW5lIGZvciAxKVxyXG4gICAgICAvLyBEcmF3IHRoZSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBiYXJzIG9mIFwiK1wiXHJcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IHd4IC0gMy41ICogcywgeTogcGlja3VwLnksIHdpZHRoOiAxLjAgKiBzLCBoZWlnaHQ6IDYuMCAqIHMsIGNvbG9yOiBwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0Q29sb3IsIGdsb3c6IC42LCBpbnRlbnNpdHk6IDEuMTUsIHNoYXBlOiBcImJvbHRcIiB9KTtcclxuICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggLSAzLjUgKiBzLCB5OiBwaWNrdXAueSwgd2lkdGg6IDYuMCAqIHMsIGhlaWdodDogMS4wICogcywgY29sb3I6IHBDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHRDb2xvciwgZ2xvdzogLjYsIGludGVuc2l0eTogMS4xNSwgc2hhcGU6IFwiYm9sdFwiIH0pO1xyXG4gICAgICAvLyBEcmF3IHRoZSBcIjFcIiAodGhpY2sgdmVydGljYWwgbGluZSB3aXRoIGEgc21hbGwgbm90Y2gpXHJcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IHd4ICsgMi41ICogcywgeTogcGlja3VwLnksIHdpZHRoOiAxLjQgKiBzLCBoZWlnaHQ6IDcuMCAqIHMsIGNvbG9yOiBwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0Q29sb3IsIGdsb3c6IC43NSwgaW50ZW5zaXR5OiAxLjIsIHNoYXBlOiBcImJvbHRcIiB9KTtcclxuICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggKyAxLjIgKiBzLCB5OiBwaWNrdXAueSAtIDIuNSAqIHMsIHdpZHRoOiAxLjUgKiBzLCBoZWlnaHQ6IDEuMCAqIHMsIGNvbG9yOiBwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0Q29sb3IsIGdsb3c6IC42LCBpbnRlbnNpdHk6IDEuMTUsIHNoYXBlOiBcImJvbHRcIiB9KTtcclxuXHJcbiAgICAgIC8vIFNwYXJrbGUgcGFydGljbGVzXHJcbiAgICAgIGZvciAobGV0IHNwID0gMDsgc3AgPCAzOyBzcCsrKSB7XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBub3cgLyA5MDAgKyBzcCAqIDIuMDkgKyBwaWNrdXAueTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gKDEwICsgc3AgKiAzLjUpICogcyAqIHB1bHNlO1xyXG4gICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IHd4ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdCwgeTogcGlja3VwLnkgKyBNYXRoLnNpbihhbmdsZSkgKiBkaXN0ICogMC43LCB3aWR0aDogMS40ICogcywgY29sb3I6IHBDb2xvciwgZ2xvdzogLjk1LCBpbnRlbnNpdHk6IC42ICsgTWF0aC5zaW4obm93IC8gMzAwICsgc3ApICogLjI1LCBzaGFwZTogXCJjaXJjbGVcIiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZhbHNlKSBmb3IgKGNvbnN0IHBpY2t1cCBvZiBwaWNrdXBzKSB7XHJcbiAgICAgIGNvbnN0IGd1biA9IGd1bnNbcGlja3VwLmd1bklkXTtcclxuICAgICAgY29uc3QgcGlja3VwQ29sb3IgPSBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXTtcclxuICAgICAgY29uc3QgdHJhaWxDb2xvciA9IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXTtcclxuICAgICAgY29uc3QgcHggPSBsYW5lWChwaWNrdXAubGFuZSk7XHJcbiAgICAgIC8vIFdvYmJsZTogZ2VudGxlIFx1MDBCMTE1XHUwMEIwIHJvY2tpbmcgXHUyMTkyIGhvcml6b250YWwgb2Zmc2V0XHJcbiAgICAgIGNvbnN0IHdvYmJsZSA9IE1hdGguc2luKG5vdyAvIDQyMCArIHBpY2t1cC55ICogMC4wNykgKiA0LjUgKiBzO1xyXG4gICAgICBjb25zdCB3eCA9IHB4ICsgd29iYmxlO1xyXG4gICAgICAvLyBTY2FsZSBwdWxzZVxyXG4gICAgICBjb25zdCBwdWxzZSA9IDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyBwaWNrdXAueSAqIDAuMDUpICogMC4wODtcclxuICAgICAgLy8gT3V0ZXIgYmxvb20gaGFsb1xyXG4gICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCwgeTogcGlja3VwLnksIHdpZHRoOiAyOCAqIHMgKiBwdWxzZSwgY29sb3I6IHBpY2t1cENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdHJhaWxDb2xvciwgZ2xvdzogLjksIGludGVuc2l0eTogLjIyLCBzaGFwZTogXCJjaXJjbGVcIiB9KTtcclxuICAgICAgLy8gRGlhbW9uZCBnbGFzc3kgcGFuZWwgKG5lb24gZWRnZXMpXHJcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IHd4LCB5OiBwaWNrdXAueSwgd2lkdGg6IDE4ICogcyAqIHB1bHNlLCBjb2xvcjogcGlja3VwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0cmFpbENvbG9yLCBnbG93OiAuODUsIGludGVuc2l0eTogMS4wNSwgc2hhcGU6IFwiZGlhbW9uZFwiIH0pO1xyXG4gICAgICAvLyBJbm5lciB3ZWFwb24gaWNvbiAoc2lsaG91ZXR0ZSB2YXJpZXMgcGVyIHByb2plY3RpbGUgc2hhcGUpXHJcbiAgICAgIGNvbnN0IGljb25TaGFwZSA9IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlU2hhcGU7XHJcbiAgICAgIGlmIChpY29uU2hhcGUgPT09IFwibmVlZGxlXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBuID0gLTE7IG4gPD0gMTsgbisrKSBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCArIG4gKiAzLjIgKiBzLCB5OiBwaWNrdXAueSwgd2lkdGg6IDEuMiAqIHMsIGhlaWdodDogOCAqIHMsIGNvbG9yOiBwaWNrdXBDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHRyYWlsQ29sb3IsIGdsb3c6IC42LCBpbnRlbnNpdHk6IDEuMSwgc2hhcGU6IFwiYm9sdFwiIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGljb25TaGFwZSA9PT0gXCJzbHVnXCIpIHtcclxuICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCwgeTogcGlja3VwLnksIHdpZHRoOiAzLjUgKiBzLCBoZWlnaHQ6IDkgKiBzLCBjb2xvcjogcGlja3VwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0cmFpbENvbG9yLCBnbG93OiAuNywgaW50ZW5zaXR5OiAxLjE1LCBzaGFwZTogXCJib2x0XCIgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaWNvblNoYXBlID09PSBcInNwbGl0Qm9sdFwiKSB7XHJcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggLSAyLjUgKiBzLCB5OiBwaWNrdXAueSAtIDEgKiBzLCB3aWR0aDogMS41ICogcywgaGVpZ2h0OiA4ICogcywgY29sb3I6IHBpY2t1cENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdHJhaWxDb2xvciwgZ2xvdzogLjYsIGludGVuc2l0eTogMS4xLCBzaGFwZTogXCJib2x0XCIgfSk7XHJcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggKyAyLjUgKiBzLCB5OiBwaWNrdXAueSAtIDEgKiBzLCB3aWR0aDogMS41ICogcywgaGVpZ2h0OiA4ICogcywgY29sb3I6IHBpY2t1cENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdHJhaWxDb2xvciwgZ2xvdzogLjYsIGludGVuc2l0eTogMS4xLCBzaGFwZTogXCJib2x0XCIgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3gsIHk6IHBpY2t1cC55IC0gMSAqIHMsIHdpZHRoOiAyICogcywgaGVpZ2h0OiA5ICogcywgY29sb3I6IHBpY2t1cENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdHJhaWxDb2xvciwgZ2xvdzogLjY1LCBpbnRlbnNpdHk6IDEuMSwgc2hhcGU6IFwiYm9sdFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFNwYXJrbGUgcGFydGljbGVzXHJcbiAgICAgIGZvciAobGV0IHNwID0gMDsgc3AgPCAzOyBzcCsrKSB7XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBub3cgLyA5MDAgKyBzcCAqIDIuMDkgKyBwaWNrdXAueTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gKDkgKyBzcCAqIDMpICogcyAqIHB1bHNlO1xyXG4gICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IHd4ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdCwgeTogcGlja3VwLnkgKyBNYXRoLnNpbihhbmdsZSkgKiBkaXN0ICogMC43LCB3aWR0aDogMS40ICogcywgY29sb3I6IHBpY2t1cENvbG9yLCBnbG93OiAuOSwgaW50ZW5zaXR5OiAuNTUgKyBNYXRoLnNpbihub3cgLyAzMDAgKyBzcCkgKiAuMjUsIHNoYXBlOiBcImNpcmNsZVwiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGVmZmVjdCBvZiBlZmZlY3RzKSB7XHJcbiAgICAgIGNvbnN0IGxpZmUgPSBNYXRoLm1heCgwLCAoZWZmZWN0LmV4cGlyZXNBdCAtIG5vdykgLyBlZmZlY3QuZHVyYXRpb24pO1xyXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IDEgLSBsaWZlO1xyXG4gICAgICBjb25zdCBzaXplID0gZWZmZWN0LnJhZGl1cyAqICgxICsgcHJvZ3Jlc3MgKiAxLjM1KTtcclxuICAgICAgaWYgKGVmZmVjdC5raW5kID09PSBcIm11enpsZVwiKSB7XHJcbiAgICAgICAgaWYgKGVmZmVjdC5zdHlsZSA9PT0gXCJjcmlzcFN0YXJcIikge1xyXG4gICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55IC0gc2l6ZSAqIC4yOCwgd2lkdGg6IHNpemUgKiAuODUsIGhlaWdodDogc2l6ZSAqIDEuNjUsIGNvbG9yOiBlZmZlY3QuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IsIGdsb3c6IC43ICogbGlmZSwgaW50ZW5zaXR5OiAxLjEgKiBsaWZlLCBzaGFwZTogXCJzcGFya1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWZmZWN0LnN0eWxlID09PSBcInJhcGlkRmxpY2tlclwiKSB7XHJcbiAgICAgICAgICBjb25zdCBqaXR0ZXIgPSAocHNldWRvUmFuZG9tKGVmZmVjdC5zZWVkKSAqIDIgLSAxKSAqIHNpemUgKiAuMzU7XHJcbiAgICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCArIGppdHRlciwgeTogZWZmZWN0LnkgLSBzaXplICogLjIsIHdpZHRoOiBzaXplICogLjUyLCBoZWlnaHQ6IHNpemUgKiAuOSwgY29sb3I6IGVmZmVjdC5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgZ2xvdzogLjU1LCBpbnRlbnNpdHk6IGxpZmUsIHNoYXBlOiBcImNpcmNsZVwiIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWZmZWN0LnN0eWxlID09PSBcImdyb3VwZWRQdWxzZVwiKSB7XHJcbiAgICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCwgeTogZWZmZWN0LnksIHdpZHRoOiBzaXplLCBjb2xvcjogZWZmZWN0LmNvbG9yLCBzZWNvbmRhcnlDb2xvcjogZWZmZWN0LnNlY29uZGFyeUNvbG9yLCBnbG93OiAuNzUgKiBsaWZlLCBpbnRlbnNpdHk6IGxpZmUsIHNoYXBlOiBcInJpbmdcIiB9KTtcclxuICAgICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54LCB5OiBlZmZlY3QueSAtIHNpemUgKiAuMjUsIHdpZHRoOiBzaXplICogLjY1LCBoZWlnaHQ6IHNpemUgKiAxLjQsIGNvbG9yOiBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3QuY29sb3IsIGdsb3c6IC41LCBpbnRlbnNpdHk6IGxpZmUsIHNoYXBlOiBcInNwYXJrXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlZmZlY3Quc3R5bGUgPT09IFwic2hvY2tEaWFtb25kXCIpIHtcclxuICAgICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54LCB5OiBlZmZlY3QueSAtIHNpemUgKiAuMzUsIHdpZHRoOiBzaXplICogLjk1LCBoZWlnaHQ6IHNpemUgKiAxLjY1LCBjb2xvcjogZWZmZWN0LmNvbG9yLCBzZWNvbmRhcnlDb2xvcjogZWZmZWN0LnNlY29uZGFyeUNvbG9yLCBnbG93OiAuOSwgaW50ZW5zaXR5OiAxLjE1ICogbGlmZSwgc2hhcGU6IFwiYm9sdFwiIH0pO1xyXG4gICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55LCB3aWR0aDogc2l6ZSAqIDEuMiwgY29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5jb2xvciwgZ2xvdzogLjU1LCBpbnRlbnNpdHk6IC43NSAqIGxpZmUsIHNoYXBlOiBcInJpbmdcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LnggLSBzaXplICogLjM1LCB5OiBlZmZlY3QueSAtIHNpemUgKiAuMiwgd2lkdGg6IHNpemUgKiAuMzgsIGhlaWdodDogc2l6ZSAqIDEuNSwgY29sb3I6IGVmZmVjdC5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgZ2xvdzogLjY1LCBpbnRlbnNpdHk6IGxpZmUsIHNoYXBlOiBcImJvbHRcIiB9KTtcclxuICAgICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54ICsgc2l6ZSAqIC4zNSwgeTogZWZmZWN0LnkgLSBzaXplICogLjIsIHdpZHRoOiBzaXplICogLjM4LCBoZWlnaHQ6IHNpemUgKiAxLjUsIGNvbG9yOiBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3QuY29sb3IsIGdsb3c6IC42NSwgaW50ZW5zaXR5OiBsaWZlLCBzaGFwZTogXCJib2x0XCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGVmZmVjdC5raW5kID09PSBcImltcGFjdFwiKSB7XHJcbiAgICAgICAgaWYgKGVmZmVjdC5zdHlsZSA9PT0gXCJpbXBhY3RSaW5nXCIgfHwgZWZmZWN0LnN0eWxlID09PSBcInNwbGl0UmlwcGxlXCIpIHtcclxuICAgICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54LCB5OiBlZmZlY3QueSwgd2lkdGg6IHNpemUsIGNvbG9yOiBlZmZlY3QuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IsIGdsb3c6IC43MiAqIGxpZmUsIGludGVuc2l0eTogbGlmZSwgc2hhcGU6IFwicmluZ1wiIH0pO1xyXG4gICAgICAgICAgaWYgKGVmZmVjdC5zdHlsZSA9PT0gXCJzcGxpdFJpcHBsZVwiKSBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCwgeTogZWZmZWN0LnksIHdpZHRoOiBzaXplICogLjYyLCBjb2xvcjogZWZmZWN0LnNlY29uZGFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvcjogZWZmZWN0LmNvbG9yLCBnbG93OiAuNDgsIGludGVuc2l0eTogbGlmZSwgc2hhcGU6IFwicmluZ1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcGFya0NvdW50ID0gZWZmZWN0LnN0eWxlID09PSBcIm5lZWRsZVNjYXR0ZXJcIiA/IDMgOiBlZmZlY3Quc3R5bGUgPT09IFwiYnVyc3RDcm9zc1wiID8gMiA6IDE7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNwYXJrQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChpbmRleCAtIChzcGFya0NvdW50IC0gMSkgLyAyKSAqIHNpemUgKiAuMzY7XHJcbiAgICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCArIG9mZnNldCwgeTogZWZmZWN0LnksIHdpZHRoOiBzaXplICogLjYyLCBoZWlnaHQ6IHNpemUgKiAoZWZmZWN0LnN0eWxlID09PSBcIm5lZWRsZVNjYXR0ZXJcIiA/IDEuMzUgOiAuOSksIGNvbG9yOiBpbmRleCAlIDIgPyBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IgOiBlZmZlY3QuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3QuY29sb3IsIGdsb3c6IC41NSAqIGxpZmUsIGludGVuc2l0eTogbGlmZSwgc2hhcGU6IFwic3BhcmtcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55LCB3aWR0aDogc2l6ZSwgY29sb3I6IGVmZmVjdC5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgZ2xvdzogbGlmZSwgaW50ZW5zaXR5OiBsaWZlLCBzaGFwZTogXCJyaW5nXCIgfSk7XHJcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55LCB3aWR0aDogc2l6ZSAqIC43LCBjb2xvcjogZWZmZWN0LnNlY29uZGFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvcjogZWZmZWN0LmNvbG9yLCBnbG93OiBsaWZlLCBpbnRlbnNpdHk6IGxpZmUsIHNoYXBlOiBcInNwYXJrXCIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgem9vbSA9ICtzaGFwZVpvb20udmFsdWUgLyAxMDA7XHJcbiAgICBjb25zdCBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXSA9IFtdO1xyXG4gICAgY29uc3QgaGVsaWNvcHRlclZpZXdwb3J0ID0gaGVsaWNvcHRlclZpZXdwb3J0Rm9yKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgcGxheWVyWSgpLCBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYKGNhbnZhcy53aWR0aCwgc3F1YWQueCkpO1xuICAgIGZvciAoY29uc3QgW2luZGV4LCBwb2ludF0gb2Ygc3F1YWQucG9pbnRzKHBsYXllclkoKSArIHJlY29pbCwgcykuZW50cmllcygpKSB7XHJcbiAgICAgIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUobmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KSwgcG9pbnQueCwgcG9pbnQueSwgMTQgKiB6b29tLCBwbGF5ZXJPcmllbnRhdGlvbihkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHBvaW50LngsIHBvaW50LnksIG5vdywgaW5kZXgpKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbmVteUhlYWx0aEJhcnM6IFBhcmFtZXRlcnM8dHlwZW9mIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcz5bMF1bbnVtYmVyXVtdID0gW107XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiBlbmVtaWVzKSB7XHJcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXTtcclxuICAgICAgY29uc3Qgc2l6ZSA9IDE4ICogZGVmaW5pdGlvbi5jb2x1bW5TcGFuICogem9vbTtcclxuICAgICAgZW5lbXlIZWFsdGhCYXJzLnB1c2goeyBlbmVteUlkOiBlbmVteS5lbmVteUlkLCB4OiBlbmVteS54LCB5OiBlbmVteS55LCBoZWFsdGg6IGVuZW15LmhlYWx0aCwgbWF4SGVhbHRoOiBlbmVteS5tYXhIZWFsdGgsIHNpemUsIHNjYWxlOiBzIH0pO1xuICAgICAgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShlbmVteS5hY3RvciwgZW5lbXkueCwgZW5lbXkueSwgc2l6ZSwgZW5lbXlPcmllbnRhdGlvbihkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIGVuZW15LngsIGVuZW15LnksIG5vdywgZW5lbXkucm93SWQpKSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBwaWNrdXBzKSB7XHJcbiAgICAgIGNvbnN0IGd1biA9IGd1bnNbcGlja3VwLmd1bklkXTtcclxuICAgICAgcGlja3VwLmFjdG9yLmxhYmVsID0gc2hhcGVMYWJlbChndW4ubGFiZWwsIFwiYWJvdmVcIiwgMTAsIDcpO1xyXG4gICAgICBwaWNrdXAuYWN0b3IuY29sb3IgPSBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXTtcclxuICAgICAgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShwaWNrdXAuYWN0b3IsIGxhbmVYKHBpY2t1cC5sYW5lKSwgcGlja3VwLnksIDE1ICogem9vbSwgYmlsbGJvYXJkT3JpZW50YXRpb24oZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBsYW5lWChwaWNrdXAubGFuZSksIHBpY2t1cC55LCBub3cpKSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBtdWx0aXBsaWVycykge1xyXG4gICAgICBwaWNrdXAuYWN0b3IubGFiZWwgPSBzaGFwZUxhYmVsKGAke211bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmUuc3F1YWRBZGRlZCArIDF9eGAsIFwiY2VudGVyXCIsIDExLCAwKTtcclxuICAgICAgcGlja3VwLmFjdG9yLmNvbG9yID0gbmVvblBhbGV0dGVbbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZS5waWNrdXBDb2xvcl07XHJcbiAgICAgIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGlja3VwLmFjdG9yLCBsYW5lWChwaWNrdXAubGFuZSksIHBpY2t1cC55LCAxNiAqIHpvb20sIGJpbGxib2FyZE9yaWVudGF0aW9uKGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgbGFuZVgocGlja3VwLmxhbmUpLCBwaWNrdXAueSwgbm93KSkpO1xyXG4gICAgfVxyXG4gIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVzLCBlbmVteUV4aXRFZmZlY3RzLm1hcChlbmVteUV4aXRDbG91ZCksIGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCk7XG4gIHByb2plY3RlZC5wcmltaXRpdmVzLnB1c2goLi4ucHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKGVuZW15SGVhbHRoQmFycywgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KSk7XG4gIHJlbmRlcmVyLnJlbmRlcihwcm9qZWN0ZWQsIG5vdyAvIDEwMDApO1xuICB9O1xyXG5cclxuICBjb25zdCBmcmFtZSA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgdXBkYXRlKG5vdyk7XHJcbiAgICBkcmF3KG5vdyk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xyXG4gIH07XHJcblxyXG4gIGVxdWlwKGVxdWlwcGVkR3VuSWQsIGVxdWlwcGVkTGV2ZWwpO1xyXG4gIGVuZW15U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlUmVhZG91dCk7XHJcbiAgc3Bhd25FbmVteSgwKTtcclxuICBzcGF3bkVuZW15KDEpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XHJcbn0gY2F0Y2ggKGNhdXNlKSB7XHJcbiAgZXJyb3IuaGlkZGVuID0gZmFsc2U7XHJcbiAgZXJyb3IudGV4dENvbnRlbnQgPSBjYXVzZSBpbnN0YW5jZW9mIEVycm9yID8gY2F1c2UubWVzc2FnZSA6IFN0cmluZyhjYXVzZSk7XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIGdhbWVBdWRpbz86IHtcclxuICAgICAgcGxheShpZDogc3RyaW5nKTogdm9pZDtcclxuICAgICAgcGxheVJvdGF0ZWQoaWQ6IHN0cmluZywgYWx0ZXJuYXRpdmVzOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFPLElBQU0sY0FBYztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFDWjs7O0FDT0EsSUFBTSxVQUFVLENBQUMsT0FBZSxXQUFXLENBQUMsS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssTUFDcEUsTUFBTSxLQUFLLEVBQUUsUUFBUSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDdEMsUUFBTSxRQUFRLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSTtBQUMzQyxTQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRTtBQUNwRCxDQUFDO0FBRUgsSUFBTSxPQUFPLENBQUMsUUFBZ0IsUUFBUSxNQUFLLFdBQVcsQ0FBQyxLQUFLLEtBQUssTUFDL0QsTUFBTSxLQUFLLEVBQUUs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtTDFCLFNBQVMsS0FBS0MsTUFBK0M7QUFDM0QsUUFBTSxRQUFRQSxLQUFJLFFBQVEsS0FBSyxFQUFFO0FBQ2pDLE1BQUksQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLEVBQUcsT0FBTSxJQUFJLE1BQU0sMkNBQTJDQSxJQUFHLElBQUk7QUFDckcsU0FBTztBQUFBLElBQ0wsT0FBTyxTQUFTLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUk7QUFBQSxJQUN6QyxPQUFPLFNBQVMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSTtBQUFBLElBQ3pDLE9BQU8sU0FBUyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLHdCQUFOLE1BQU0sdUJBQXNCO0FBQUEsRUFDeEI7QUFBQSxFQUNBO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLGVBQXlEO0FBQUEsRUFFekQsWUFBWUMsU0FBMkIsUUFBbUIsU0FBMkIsUUFBMEI7QUFDN0csU0FBSyxTQUFTQTtBQUNkLFNBQUssU0FBUztBQUNkLFNBQUssV0FBVztBQUNoQixVQUFNLFNBQVMsT0FBTyxtQkFBbUIsRUFBRSxNQUFNRixRQUFPLENBQUM7QUFDekQsU0FBSyxZQUFZLE9BQU8scUJBQXFCO0FBQUEsTUFDM0MsUUFBUTtBQUFBLE1BQ1IsUUFBUSxFQUFFLFFBQVEsWUFBWSxhQUFhO0FBQUEsTUFDM0MsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBLFlBQVk7QUFBQSxRQUNaLFNBQVMsQ0FBQyxFQUFFLFFBQVEsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLGFBQWEsV0FBVyxNQUFNLEdBQUcsT0FBTyxFQUFFLFdBQVcsT0FBTyxXQUFXLE1BQU0sRUFBRSxFQUFFLENBQUM7QUFBQSxNQUNySTtBQUFBLE1BQ0EsV0FBVyxFQUFFLFVBQVUsZ0JBQWdCO0FBQUEsSUFDekMsQ0FBQztBQUNELFNBQUssZUFBZSxPQUFPLGFBQWEsRUFBRSxNQUFNLElBQUksT0FBTyxlQUFlLFVBQVUsZUFBZSxTQUFTLENBQUM7QUFDN0csU0FBSyxtQkFBbUIsT0FBTyxhQUFhO0FBQUEsTUFDMUMsTUFBTSxnQkFBZ0IscUJBQXFCO0FBQUEsTUFDM0MsT0FBTyxlQUFlLFVBQVUsZUFBZTtBQUFBLElBQ2pELENBQUM7QUFDRCxTQUFLLGFBQWEsT0FBTyxnQkFBZ0I7QUFBQSxNQUN2QyxRQUFRLEtBQUssVUFBVSxtQkFBbUIsQ0FBQztBQUFBLE1BQzNDLFNBQVM7QUFBQSxRQUNQLEVBQUUsU0FBUyxHQUFHLFVBQVUsRUFBRSxRQUFRLEtBQUssYUFBYSxFQUFFO0FBQUEsUUFDdEQsRUFBRSxTQUFTLEdBQUcsVUFBVSxFQUFFLFFBQVEsS0FBSyxpQkFBaUIsRUFBRTtBQUFBLE1BQzVEO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsYUFBYSxPQUFPRSxTQUEyRDtBQUM3RSxRQUFJLENBQUMsVUFBVSxJQUFLLE9BQU0sSUFBSSxNQUFNLHFDQUFxQztBQUN6RSxVQUFNLFVBQVUsTUFBTSxVQUFVLElBQUksZUFBZTtBQUNuRCxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSx5Q0FBeUM7QUFDdkUsVUFBTSxTQUFTLE1BQU0sUUFBUSxjQUFjO0FBQzNDLFVBQU0sVUFBVUEsUUFBTyxXQUFXLFFBQVE7QUFDMUMsUUFBSSxDQUFDLFFBQVMsT0FBTSxJQUFJLE1BQU0sK0NBQStDO0FBQzdFLFVBQU0sU0FBUyxVQUFVLElBQUkseUJBQXlCO0FBQ3RELFlBQVEsVUFBVSxFQUFFLFFBQVEsUUFBUSxXQUFXLGdCQUFnQixDQUFDO0FBQ2hFLFdBQU8sSUFBSSx1QkFBc0JBLFNBQVEsUUFBUSxTQUFTLE1BQU07QUFBQSxFQUNsRTtBQUFBLEVBRUEsZUFBZSxPQUFlLFFBQXNCO0FBQ2xELFNBQUssZUFBZSxFQUFFLE9BQU8sT0FBTztBQUNwQyxTQUFLLE9BQU8sUUFBUTtBQUNwQixTQUFLLE9BQU8sU0FBUztBQUNyQixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxZQUE2QixjQUFjLEdBQUcsZ0JBQWdCLE9BQU8sWUFBbUM7QUFDN0csU0FBSyxRQUFRO0FBQ2IsVUFBTSxVQUFVLFdBQVcsTUFBTSxHQUFHLGFBQWE7QUFDakQsVUFBTSxPQUFPLElBQUksYUFBYSxRQUFRLFNBQVMsa0JBQWtCO0FBQ2pFLFlBQVEsUUFBUSxDQUFDLE1BQU0sVUFBVTtBQUMvQixZQUFNLFNBQVMsUUFBUTtBQUN2QixXQUFLLElBQUk7QUFBQSxRQUNQLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFPLEtBQUssVUFBVSxLQUFLO0FBQUEsUUFDaEQsR0FBRyxLQUFLLEtBQUssS0FBSztBQUFBLFFBQ2xCLEdBQUcsS0FBSyxLQUFLLGtCQUFrQixLQUFLLEtBQUs7QUFBQSxRQUN6QyxLQUFLLFFBQVE7QUFBQSxRQUNiLEtBQUssYUFBYTtBQUFBLFFBQ2xCLEtBQUssVUFBVSxRQUFRLElBQUksS0FBSyxVQUFVLFNBQVMsSUFBSSxLQUFLLFVBQVUsYUFBYSxJQUFJLEtBQUssVUFBVSxZQUFZLElBQUksS0FBSyxVQUFVLFVBQVUsSUFBSSxLQUFLLFVBQVUsU0FBUyxJQUFJLEtBQUssVUFBVSxRQUFRLElBQUksS0FBSyxVQUFVLFNBQVMsSUFBSTtBQUFBLFFBQ3RPLEtBQUssWUFBWSxLQUFLLFdBQVc7QUFBQSxRQUNqQyxLQUFLLFlBQVksS0FBSyxnQkFBZ0I7QUFBQSxRQUN0QyxLQUFLLFVBQVUsS0FBSyxrQkFBa0I7QUFBQSxRQUN0QztBQUFBLFFBQ0E7QUFBQSxNQUNGLEdBQUcsTUFBTTtBQUFBLElBQ1gsQ0FBQztBQUNELFNBQUssT0FBTyxNQUFNLFlBQVksS0FBSyxjQUFjLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxPQUFPLE9BQU8sS0FBSyxPQUFPLFFBQVEsUUFBUSxRQUFRLFdBQVcsQ0FBQyxDQUFDO0FBQzFJLFFBQUksS0FBSyxPQUFRLE1BQUssT0FBTyxNQUFNLFlBQVksS0FBSyxrQkFBa0IsR0FBRyxJQUFJO0FBQzdFLFVBQU0sVUFBVSxLQUFLLE9BQU8scUJBQXFCO0FBQ2pELFVBQU0sT0FBTyxRQUFRLGdCQUFnQjtBQUFBLE1BQ25DLGtCQUFrQixDQUFDO0FBQUEsUUFDakIsTUFBTSxjQUFjLEtBQUssU0FBUyxrQkFBa0IsRUFBRSxXQUFXO0FBQUEsUUFDakUsWUFBWSxFQUFFLEdBQUcsTUFBTyxHQUFHLE1BQU8sR0FBRyxPQUFPLEdBQUcsRUFBRTtBQUFBLFFBQ2pELFFBQVEsZ0JBQWdCLFNBQVM7QUFBQSxRQUNqQyxTQUFTO0FBQUEsTUFDWCxDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQ0QsUUFBSSxRQUFRLFFBQVE7QUFDbEIsV0FBSyxZQUFZLEtBQUssU0FBUztBQUMvQixXQUFLLGFBQWEsR0FBRyxLQUFLLFVBQVU7QUFDcEMsV0FBSyxLQUFLLEdBQUcsUUFBUSxNQUFNO0FBQUEsSUFDN0I7QUFDQSxTQUFLLElBQUk7QUFDVCxTQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQzdDO0FBQUEsRUFFQSxVQUFnQjtBQUNkLFFBQUksS0FBSyxjQUFjO0FBQ3JCLFVBQUksS0FBSyxPQUFPLFVBQVUsS0FBSyxhQUFhLE1BQU8sTUFBSyxPQUFPLFFBQVEsS0FBSyxhQUFhO0FBQ3pGLFVBQUksS0FBSyxPQUFPLFdBQVcsS0FBSyxhQUFhLE9BQVEsTUFBSyxPQUFPLFNBQVMsS0FBSyxhQUFhO0FBQzVGO0FBQUEsSUFDRjtBQUNBLFVBQU0sUUFBUSxLQUFLLElBQUksb0JBQW9CLEdBQUcsQ0FBQztBQUMvQyxVQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssT0FBTyxjQUFjLEtBQUssQ0FBQztBQUNyRSxVQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssT0FBTyxlQUFlLEtBQUssQ0FBQztBQUN2RSxRQUFJLEtBQUssT0FBTyxVQUFVLFNBQVMsS0FBSyxPQUFPLFdBQVcsUUFBUTtBQUNoRSxXQUFLLE9BQU8sUUFBUTtBQUNwQixXQUFLLE9BQU8sU0FBUztBQUFBLElBQ3ZCO0FBQUEsRUFDRjtBQUNGOzs7QUN0U0EsSUFBTSxZQUFZO0FBQ2xCLElBQU0saUJBQWlCO0FBRXZCLElBQU0sV0FBNkM7QUFBQSxFQUNqRCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFDSCxVQUFVO0FBQUEsRUFDVixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxTQUFTO0FBQUEsRUFDVCxpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixLQUFLO0FBQ1A7QUFFQSxJQUFNQyxPQUFNLENBQUMsVUFBNEM7QUFDdkQsUUFBTSxNQUFNLE1BQU0sUUFBUSxLQUFLLEVBQUUsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQzVELFNBQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksV0FBUyxPQUFPLFNBQVMsSUFBSSxNQUFNLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUc7QUFDdEY7QUFFTyxJQUFNLDJCQUEyQixDQUFDLFVBQTBCO0FBQ2pFLFFBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJQSxLQUFJLEtBQUs7QUFDM0IsUUFBTSxPQUFPLENBQUMsWUFBb0IsS0FBSyxPQUFPLFdBQVcsSUFBSSxXQUFXLFFBQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ2hILFNBQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDeEM7QUFFQSxJQUFNLGNBQWMsQ0FBQyxXQUNuQixXQUFXLFNBQVMsSUFBSSxXQUFXLGVBQWUsSUFBSSxXQUFXLFlBQVksSUFBSTtBQUVuRixJQUFNQztBQUFBO0FBQUEsRUFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThHbEIsSUFBTSx5QkFBTixNQUFNLHdCQUF1QjtBQUFBLEVBQ3pCO0FBQUEsRUFDQTtBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxlQUF5RDtBQUFBLEVBRXpELFlBQVlDLFNBQTJCLFFBQW1CLFNBQTJCLFFBQTBCO0FBQzdHLFNBQUssU0FBU0E7QUFBUSxTQUFLLFNBQVM7QUFBUSxTQUFLLFdBQVc7QUFDNUQsVUFBTSxTQUFTLE9BQU8sbUJBQW1CLEVBQUUsTUFBTUMsU0FBUSxPQUFPLDZDQUE2QyxDQUFDO0FBQzlHLFNBQUssWUFBWSxPQUFPLHFCQUFxQjtBQUFBLE1BQzNDLFFBQVE7QUFBQSxNQUNSLFFBQVEsRUFBRSxRQUFRLFlBQVksYUFBYTtBQUFBLE1BQzNDLFVBQVUsRUFBRSxRQUFRLFlBQVksZ0JBQWdCLFNBQVMsQ0FBQyxFQUFFLFFBQVEsT0FBTztBQUFBLFFBQ3pFLE9BQU8sRUFBRSxXQUFXLE9BQU8sV0FBVyx1QkFBdUIsV0FBVyxNQUFNO0FBQUEsUUFDOUUsT0FBTyxFQUFFLFdBQVcsT0FBTyxXQUFXLHVCQUF1QixXQUFXLE1BQU07QUFBQSxNQUNoRixFQUFFLENBQUMsRUFBRTtBQUFBLE1BQ0wsV0FBVyxFQUFFLFVBQVUsZ0JBQWdCO0FBQUEsSUFDekMsQ0FBQztBQUNELFNBQUssV0FBVyxPQUFPLGFBQWEsRUFBRSxNQUFNLElBQUksT0FBTyxlQUFlLFVBQVUsZUFBZSxTQUFTLENBQUM7QUFDekcsU0FBSyxVQUFVLE9BQU8sYUFBYSxFQUFFLE1BQU0sWUFBWSxpQkFBaUIsR0FBRyxPQUFPLGVBQWUsVUFBVSxlQUFlLFNBQVMsQ0FBQztBQUNwSSxTQUFLLFFBQVEsT0FBTyxnQkFBZ0IsRUFBRSxRQUFRLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxHQUFHLFNBQVM7QUFBQSxNQUMzRixFQUFFLFNBQVMsR0FBRyxVQUFVLEVBQUUsUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUFBLE1BQ2xELEVBQUUsU0FBUyxHQUFHLFVBQVUsRUFBRSxRQUFRLEtBQUssUUFBUSxFQUFFO0FBQUEsSUFDbkQsRUFBRSxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBRUEsYUFBYSxPQUFPRCxTQUE0RDtBQUM5RSxRQUFJLENBQUMsVUFBVSxJQUFLLE9BQU0sSUFBSSxNQUFNLHFEQUFxRDtBQUN6RixVQUFNLFVBQVUsTUFBTSxVQUFVLElBQUksZUFBZTtBQUNuRCxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSx5Q0FBeUM7QUFDdkUsVUFBTSxTQUFTLE1BQU0sUUFBUSxjQUFjO0FBQzNDLFVBQU0sVUFBVUEsUUFBTyxXQUFXLFFBQVE7QUFDMUMsUUFBSSxDQUFDLFFBQVMsT0FBTSxJQUFJLE1BQU0sMkNBQTJDO0FBQ3pFLFVBQU0sU0FBUyxVQUFVLElBQUkseUJBQXlCO0FBQ3RELFlBQVEsVUFBVSxFQUFFLFFBQVEsUUFBUSxXQUFXLGdCQUFnQixDQUFDO0FBQ2hFLFdBQU8sSUFBSSx3QkFBdUJBLFNBQVEsUUFBUSxTQUFTLE1BQU07QUFBQSxFQUNuRTtBQUFBLEVBRUEsZUFBZSxPQUFlLFFBQXNCO0FBQ2xELFNBQUssZUFBZSxFQUFFLE9BQU8sT0FBTztBQUNwQyxTQUFLLE9BQU8sUUFBUTtBQUNwQixTQUFLLE9BQU8sU0FBUztBQUNyQixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxRQUEyQyxjQUFjLFlBQVksSUFBSSxJQUFJLEtBQU0sZ0JBQWdCLE9BQU8sWUFBbUM7QUFDbEosU0FBSyxRQUFRO0FBQ2IsVUFBTSxTQUFTLElBQUksYUFBYSxZQUFZLGNBQWM7QUFDMUQsV0FBTyxNQUFNLEdBQUcsU0FBUyxFQUFFLFFBQVEsQ0FBQyxPQUFPLFVBQVU7QUFDbkQsWUFBTSxJQUFJLEVBQUUsR0FBRyxVQUFVLEdBQUcsTUFBTTtBQUNsQyxZQUFNLFFBQVFFLEtBQUksRUFBRSxLQUFLLEdBQUcsT0FBT0EsS0FBSSxFQUFFLFNBQVM7QUFDbEQsWUFBTSxTQUFTLFFBQVE7QUFDdkIsYUFBTyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksRUFBRSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3BKLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxPQUFPLEdBQUcsU0FBUyxFQUFFO0FBQUEsSUFDL0osQ0FBQztBQUNELFNBQUssT0FBTyxNQUFNLFlBQVksS0FBSyxTQUFTLEdBQUcsTUFBTTtBQUNyRCxTQUFLLE9BQU8sTUFBTSxZQUFZLEtBQUssVUFBVSxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxRQUFRLGFBQWEsS0FBSyxJQUFJLE9BQU8sUUFBUSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUosVUFBTSxVQUFVLEtBQUssT0FBTyxxQkFBcUI7QUFDakQsVUFBTSxPQUFPLFFBQVEsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7QUFBQSxNQUN4RCxNQUFNLGNBQWMsS0FBSyxTQUFTLGtCQUFrQixFQUFFLFdBQVc7QUFBQSxNQUNqRSxZQUFZLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsTUFDckMsUUFBUSxnQkFBZ0IsU0FBUztBQUFBLE1BQ2pDLFNBQVM7QUFBQSxJQUNYLENBQUMsRUFBRSxDQUFDO0FBQ0osU0FBSyxZQUFZLEtBQUssU0FBUztBQUMvQixTQUFLLGFBQWEsR0FBRyxLQUFLLEtBQUs7QUFDL0IsU0FBSyxLQUFLLEdBQUcsS0FBSyxJQUFJLE9BQU8sUUFBUSxTQUFTLENBQUM7QUFDL0MsU0FBSyxJQUFJO0FBQ1QsU0FBSyxPQUFPLE1BQU0sT0FBTyxDQUFDLFFBQVEsT0FBTyxDQUFDLENBQUM7QUFBQSxFQUM3QztBQUFBLEVBRUEsZ0JBQWdCLE9BQThCLGNBQXNCLGVBQStDO0FBQ2pILFVBQU0sU0FBUyxlQUFlO0FBQzlCLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILElBQUksTUFBTSxJQUFJLGVBQWUsT0FBTSxTQUFTO0FBQUEsTUFDNUMsSUFBSSxNQUFLLE1BQU0sSUFBSSxpQkFBaUI7QUFBQSxNQUNwQyxNQUFNLE1BQU0sT0FBTyxnQkFBZ0I7QUFBQSxNQUNuQyxTQUFTLE1BQU0sVUFBVSxLQUFLLGVBQWUsU0FBUztBQUFBLE1BQ3RELFFBQVEsRUFBRSxNQUFNLFVBQVUsS0FBSyxnQkFBZ0I7QUFBQSxJQUNqRDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFFBQVEsZ0JBQWdCLE1BQVk7QUFDbEMsU0FBSyxRQUFRLFFBQVE7QUFDckIsU0FBSyxTQUFTLFFBQVE7QUFDdEIsUUFBSSxjQUFlLE1BQUssT0FBTyxRQUFRO0FBQUEsRUFDekM7QUFBQSxFQUVBLFVBQWdCO0FBQ2QsUUFBSSxLQUFLLGNBQWM7QUFDckIsVUFBSSxLQUFLLE9BQU8sVUFBVSxLQUFLLGFBQWEsTUFBTyxNQUFLLE9BQU8sUUFBUSxLQUFLLGFBQWE7QUFDekYsVUFBSSxLQUFLLE9BQU8sV0FBVyxLQUFLLGFBQWEsT0FBUSxNQUFLLE9BQU8sU0FBUyxLQUFLLGFBQWE7QUFDNUY7QUFBQSxJQUNGO0FBQ0EsVUFBTSxRQUFRLEtBQUssSUFBSSxvQkFBb0IsR0FBRyxDQUFDO0FBQy9DLFNBQUssT0FBTyxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxLQUFLLE9BQU8sY0FBYyxLQUFLLENBQUM7QUFDM0UsU0FBSyxPQUFPLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssT0FBTyxlQUFlLEtBQUssQ0FBQztBQUFBLEVBQy9FO0FBQ0Y7OztBQ3hRTyxJQUFNLDJCQUFOLE1BQU0sMEJBQXlCO0FBQUEsRUFDM0I7QUFBQSxFQUNBO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFUSxZQUFZQyxTQUEyQixRQUFtQixTQUEyQixRQUEwQixPQUFlLFFBQWdCO0FBQ3BKLFNBQUssU0FBU0E7QUFBUSxTQUFLLFNBQVM7QUFBUSxTQUFLLFdBQVc7QUFBUyxTQUFLLFNBQVM7QUFBTyxTQUFLLFVBQVU7QUFDekcsU0FBSyxjQUFjLElBQUksc0JBQXNCQSxTQUFRLFFBQVEsU0FBUyxNQUFNLEVBQUUsZUFBZSxPQUFPLE1BQU07QUFDMUcsU0FBSyxVQUFVLElBQUksdUJBQXVCQSxTQUFRLFFBQVEsU0FBUyxNQUFNLEVBQUUsZUFBZSxPQUFPLE1BQU07QUFDdkcsU0FBSyxVQUFVLElBQUksMkJBQTJCQSxTQUFRLFFBQVEsU0FBUyxNQUFNLEVBQUUsZUFBZSxPQUFPLE1BQU07QUFBQSxFQUM3RztBQUFBLEVBRUEsYUFBYSxPQUFPQSxTQUEyQixjQUFzQixlQUEwRDtBQUM3SCxRQUFJLENBQUMsVUFBVSxJQUFLLE9BQU0sSUFBSSxNQUFNLHFEQUFxRDtBQUN6RixVQUFNLFVBQVUsTUFBTSxVQUFVLElBQUksZUFBZTtBQUNuRCxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSx5Q0FBeUM7QUFDdkUsVUFBTSxTQUFTLE1BQU0sUUFBUSxjQUFjO0FBQzNDLFVBQU0sVUFBVUEsUUFBTyxXQUFXLFFBQVE7QUFDMUMsUUFBSSxDQUFDLFFBQVMsT0FBTSxJQUFJLE1BQU0sMkNBQTJDO0FBQ3pFLFVBQU0sU0FBUyxVQUFVLElBQUkseUJBQXlCO0FBQ3RELFlBQVEsVUFBVSxFQUFFLFFBQVEsUUFBUSxXQUFXLGdCQUFnQixDQUFDO0FBQ2hFLFdBQU8sSUFBSSwwQkFBeUJBLFNBQVEsUUFBUSxTQUFTLFFBQVEsY0FBYyxhQUFhO0FBQUEsRUFDbEc7QUFBQSxFQUVBLE9BQU8sT0FBeUIsY0FBYyxZQUFZLElBQUksSUFBSSxLQUFZO0FBQzVFLFVBQU0sU0FBUyxLQUFLLFNBQVMsa0JBQWtCLEVBQUUsV0FBVztBQUM1RCxTQUFLLFlBQVksT0FBTyxDQUFDLEdBQUksTUFBTSxjQUFjLENBQUMsQ0FBRSxHQUFHLGFBQWEsT0FBTyxNQUFNO0FBQ2pGLFVBQU0sU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxVQUFNLFNBQVMsS0FBSyxTQUFTLEtBQUs7QUFDbEMsVUFBTSxTQUFTLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLFFBQUksT0FBTyxPQUFRLE1BQUssUUFBUSxPQUFPLE9BQU8sSUFBSSxZQUFVO0FBQUEsTUFDMUQsR0FBRztBQUFBLE1BQ0gsSUFBSSxNQUFNLElBQUksS0FBSyxTQUFTLE9BQU0sU0FBUztBQUFBLE1BQzNDLElBQUksTUFBSyxNQUFNLElBQUksS0FBSyxXQUFXO0FBQUEsTUFDbkMsUUFBUSxNQUFNLFVBQVUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQ3JELFNBQVMsTUFBTSxVQUFVLE9BQU8sTUFBTSxTQUFTLE1BQU0sU0FBUyxNQUFNLFVBQVUsTUFBTTtBQUFBLElBQ3RGLEVBQUUsR0FBRyxNQUFNLE1BQU07QUFDakIsUUFBSSxPQUFPLE9BQVEsTUFBSyxRQUFRLE9BQU8sT0FBTyxJQUFJLFdBQVMsS0FBSyxRQUFRLGdCQUFnQixPQUFPLEtBQUssUUFBUSxLQUFLLE9BQU8sQ0FBQyxHQUFHLGFBQWEsSUFBSTtBQUFBLEVBQy9JO0FBQUEsRUFFQSxVQUFnQjtBQUNkLFNBQUssUUFBUSxRQUFRLEtBQUs7QUFDMUIsU0FBSyxRQUFRLFFBQVEsS0FBSztBQUMxQixTQUFLLE9BQU8sUUFBUTtBQUFBLEVBQ3RCO0FBQ0Y7OztBQ2hFTyxJQUFNLHFCQUFxQixDQUFDLFVBQVU7QUFlN0MsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxlQUFlO0FBQ3JCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sa0JBQWtCO0FBV3hCLElBQU0sNEJBQW9EO0FBQUEsRUFDeEQsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUNqQjtBQU1PLFNBQVMsb0JBQW9CLE9BQTJDO0FBQzdFLFNBQVEsbUJBQXlDLFNBQVMsS0FBSztBQUNqRTtBQUVPLFNBQVMsc0JBQXNCLFNBQW1EO0FBQ3ZGLFVBQVEsUUFBUSxTQUFTO0FBQUEsSUFDdkIsS0FBSztBQUNILGFBQU8sZUFBZSxPQUFPO0FBQUEsRUFDakM7QUFDRjtBQUVBLFNBQVMsZUFBZSxTQUFtRDtBQUN6RSxRQUFNLEVBQUUsT0FBTyxRQUFRLE9BQU8sSUFBSTtBQUNsQyxRQUFNLGFBQThCLENBQUM7QUFDckMsUUFBTSxXQUFXLHNCQUFzQixPQUFPLE1BQU07QUFFcEQsbUNBQWlDLFlBQVksVUFBVSwyQkFBMkIsTUFBTTtBQUN4RixxQkFBbUIsWUFBWSxVQUFVLE1BQU07QUFDL0MscUJBQW1CLFlBQVksVUFBVSxNQUFNO0FBQy9DLHdCQUFzQixZQUFZLFVBQVUsTUFBTTtBQUNsRCxvQkFBa0IsWUFBWSxVQUFVLE1BQU07QUFDOUMsc0JBQW9CLFlBQVksVUFBVSxNQUFNO0FBRWhELFNBQU8sRUFBRSxXQUFXO0FBQ3RCO0FBRUEsU0FBUyxzQkFBc0IsT0FBZSxRQUFnQjtBQUM1RCxRQUFNLEtBQUssRUFBRSxHQUFHLFFBQVEsS0FBSSxHQUFHLENBQUMsT0FBTztBQUN2QyxRQUFNLFVBQVUsU0FBUztBQUN6QixRQUFNLGFBQWEsUUFBUSxrQkFBa0I7QUFDN0MsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsWUFBWSxFQUFFLEdBQUcsUUFBUSxNQUFLLFlBQVksR0FBRyxRQUFRO0FBQUEsSUFDckQsYUFBYSxFQUFFLEdBQUcsUUFBUSxNQUFLLFlBQVksR0FBRyxRQUFRO0FBQUEsSUFDdEQsYUFBYSxFQUFFLEdBQUcsUUFBUSxNQUFLLFlBQVksR0FBRyxHQUFHLEVBQUU7QUFBQSxJQUNuRCxjQUFjLEVBQUUsR0FBRyxRQUFRLE1BQUssWUFBWSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQ3REO0FBQ0Y7QUFFQSxTQUFTLGlDQUNQLE9BQ0EsVUFDQSxTQUNBLFFBQ007QUFDTixxQkFBbUIsT0FBTyxTQUFTLE9BQU8sU0FBUyxRQUFRLFNBQVMsTUFBTTtBQUMxRSxxQkFBbUIsT0FBTyxVQUFVLE9BQU87QUFDM0MsMEJBQXdCLE9BQU8sVUFBVSxTQUFTLE1BQU07QUFDMUQ7QUFFQSxTQUFTLG1CQUFtQixPQUF3QixPQUFlLFFBQWdCLFNBQWlDLFFBQXNCO0FBQ3hJLFFBQU0sUUFBUSxPQUFNLEtBQUssSUFBSSxTQUFTLGVBQWUsSUFBSTtBQUN6RCxRQUFNLEtBQUssRUFBRSxHQUFHLFFBQVEsR0FBRyxHQUFHLFNBQVMsTUFBSyxPQUFPLFFBQVEsaUJBQWlCLFFBQVEsU0FBUyxNQUFNLE9BQU8sUUFBUSxPQUFPLGdCQUFnQixXQUFXLE1BQU0sTUFBSyxXQUFXLE1BQUssT0FBTyxPQUFPLENBQUM7QUFDOUwsUUFBTSxLQUFLLEVBQUUsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsS0FBSSxPQUFPLFFBQVEsTUFBSyxRQUFRLEtBQUssT0FBTyxRQUFRLFVBQVUsZ0JBQWdCLFFBQVEsZUFBZSxNQUFNLEtBQUksV0FBVyxPQUFNLFFBQVEsTUFBSyxPQUFPLE9BQU8sQ0FBQztBQUNwTSxRQUFNLEtBQUssRUFBRSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsU0FBUyxNQUFLLE9BQU8sUUFBUSxNQUFLLFFBQVEsS0FBSyxPQUFPLFFBQVEsUUFBUSxnQkFBZ0IsUUFBUSxZQUFZLE1BQU0sTUFBSyxXQUFXLE1BQUssT0FBTyxPQUFPLENBQUM7QUFDckw7QUFFQSxTQUFTLG1CQUFtQixPQUF3QixVQUFvRCxTQUF1QztBQUM3SSxRQUFNLEVBQUUsWUFBWSxhQUFhLGFBQWEsYUFBYSxJQUFJO0FBQy9ELGFBQVcsQ0FBQyxRQUFRLE9BQU8sS0FBSyxDQUFDLENBQUMsWUFBWSxXQUFXLEdBQUcsQ0FBQyxhQUFhLFlBQVksQ0FBQyxHQUFZO0FBQ2pHLG1CQUFlLE9BQU8sUUFBUSxTQUFTLFFBQVEsVUFBVSxNQUFLLEdBQUc7QUFDakUsbUJBQWUsT0FBTyxRQUFRLFNBQVMsUUFBUSxlQUFlLE1BQUssR0FBRztBQUFBLEVBQ3hFO0FBRUEsV0FBUyxPQUFPLEdBQUcsUUFBUSxHQUFHLFFBQVE7QUFDcEMsVUFBTSxJQUFJLE9BQU87QUFDakIsVUFBTSxRQUFRLFVBQVUsWUFBWSxhQUFhLENBQUM7QUFDbEQsVUFBTSxNQUFNLFVBQVUsYUFBYSxjQUFjLENBQUM7QUFDbEQsVUFBTSxRQUFRLFNBQVMsSUFBSSxRQUFRLGFBQWEsUUFBUTtBQUN4RCxtQkFBZSxPQUFPLE9BQU8sS0FBSyxPQUFPLFNBQVMsSUFBSSxPQUFNLEtBQUksR0FBRztBQUNuRSxtQkFBZSxPQUFPLE9BQU8sS0FBSyxRQUFRLGVBQWUsU0FBUyxJQUFJLE9BQU0sTUFBSyxHQUFFO0FBQUEsRUFDckY7QUFDRjtBQUVBLFNBQVMsd0JBQXdCLE9BQXdCLFVBQW9ELFNBQWlDLFFBQXNCO0FBQ2xLLFFBQU0sRUFBRSxZQUFZLGFBQWEsYUFBYSxhQUFhLElBQUk7QUFDL0QsV0FBUyxNQUFNLEdBQUcsTUFBTSxJQUFJLE9BQU87QUFDakMsVUFBTSxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSTtBQUNqQyxVQUFNLE9BQU8sVUFBVSxhQUFhLFlBQVksQ0FBQztBQUNqRCxVQUFNLFFBQVEsVUFBVSxjQUFjLGFBQWEsQ0FBQztBQUNwRCxVQUFNLFdBQVcsT0FBTSxLQUFLLElBQUksU0FBUyxNQUFNLE1BQU0sSUFBRyxJQUFJO0FBQzVELFVBQU0sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksU0FBUyxNQUFNLE1BQU0sSUFBRyxDQUFDO0FBQzVELFVBQU0sUUFBUSxNQUFNLE1BQU0sSUFBSSxRQUFRLGdCQUFnQixNQUFNLE1BQU0sSUFBSSxRQUFRLE9BQU8sTUFBTSxNQUFNLElBQUksUUFBUSxhQUFhLFFBQVE7QUFDbEksbUJBQWUsT0FBTyxNQUFNLE9BQU8sUUFBUSxPQUFNLElBQUksU0FBUSxPQUFNLFdBQVcsUUFBTyxRQUFRLE9BQU0sTUFBTSxJQUFJLENBQUM7QUFDOUcsbUJBQWUsT0FBTyxNQUFNLE9BQU8sUUFBUSxNQUFLLElBQUksU0FBUSxPQUFNLFdBQVcsUUFBTyxRQUFRLE1BQUssT0FBTSxJQUFJLEdBQUU7QUFBQSxFQUMvRztBQUNGO0FBRUEsU0FBUyxtQkFBbUIsT0FBd0IsVUFBb0QsUUFBc0I7QUFDNUgsUUFBTSxFQUFFLFlBQVksYUFBYSxhQUFhLGFBQWEsSUFBSTtBQUMvRCxXQUFTLGFBQWEsR0FBRyxhQUFhLEdBQUcsY0FBYztBQUNyRCxVQUFNLFVBQVUsU0FBUyxPQUFPLGFBQWEsS0FBSztBQUNsRCxVQUFNLElBQUksS0FBSyxJQUFJLFFBQVEsSUFBSTtBQUMvQixVQUFNLE9BQU8sVUFBVSxhQUFhLFlBQVksQ0FBQztBQUNqRCxVQUFNLFFBQVEsVUFBVSxjQUFjLGFBQWEsQ0FBQztBQUNwRCxVQUFNLFVBQVUsUUFBTyxJQUFJO0FBQzNCLG1CQUFlLE9BQU8sTUFBTSxPQUFPLGVBQWUsU0FBUyxNQUFNLElBQUksR0FBRztBQUFBLEVBQzFFO0FBQ0Y7QUFFQSxTQUFTLG1CQUFtQixPQUF3QixVQUFvRCxRQUFzQjtBQUM1SCxRQUFNLEVBQUUsWUFBWSxhQUFhLGFBQWEsYUFBYSxJQUFJO0FBQy9ELFFBQU0sT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFO0FBQ2hDLGFBQVcsT0FBTyxNQUFNO0FBQ3RCLFVBQU0sSUFBSSxLQUFLLElBQUksTUFBTSxJQUFJLElBQUk7QUFDakMsVUFBTSxTQUFTLFVBQVUsVUFBVSxhQUFhLFlBQVksQ0FBQyxHQUFHLFVBQVUsY0FBYyxhQUFhLENBQUMsR0FBRyxHQUFFO0FBQzNHLFVBQU0sUUFBUSxPQUFNLElBQUk7QUFDeEIsVUFBTSxRQUFRLE9BQU0sS0FBSyxJQUFJLFNBQVMsTUFBTSxNQUFNLEdBQUcsSUFBSTtBQUN6RCxVQUFNLEtBQUs7QUFBQSxNQUNULEdBQUcsT0FBTztBQUFBLE1BQ1YsR0FBRyxPQUFPO0FBQUEsTUFDVixPQUFPLElBQUk7QUFBQSxNQUNYLFFBQVEsSUFBSTtBQUFBLE1BQ1osT0FBTyxNQUFNLE1BQU0sSUFBSSxrQkFBa0I7QUFBQSxNQUN6QyxnQkFBZ0IsTUFBTSxNQUFNLElBQUksaUJBQWlCO0FBQUEsTUFDakQsTUFBTTtBQUFBLE1BQ04sV0FBVyxPQUFNLFFBQVE7QUFBQSxNQUN6QixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBRUEsU0FBUyxzQkFBc0IsT0FBd0IsVUFBb0QsUUFBc0I7QUFDL0gsUUFBTSxFQUFFLElBQUksT0FBTyxRQUFRLGFBQWEsYUFBYSxJQUFJO0FBQ3pELFFBQU0sWUFBWSxPQUFNLEtBQUssSUFBSSxTQUFTLEdBQUcsSUFBSTtBQUNqRCxpQkFBZSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksUUFBUSxNQUFLLEdBQUcsR0FBRyxJQUFJLFNBQVMsTUFBSyxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksUUFBUSxNQUFLLEdBQUcsR0FBRyxJQUFJLFNBQVMsTUFBSyxHQUFHLGdCQUFnQixNQUFLLFlBQVksTUFBSyxHQUFHO0FBQ3ZLLGlCQUFlLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxRQUFRLE1BQUssR0FBRyxHQUFHLElBQUksU0FBUyxNQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxRQUFRLE1BQUssR0FBRyxHQUFHLElBQUksU0FBUyxNQUFLLEdBQUcsZUFBZSxNQUFLLElBQUc7QUFDckosaUJBQWUsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLFFBQVEsTUFBSyxHQUFHLEdBQUcsSUFBSSxTQUFTLE1BQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLFFBQVEsTUFBSyxHQUFHLEdBQUcsSUFBSSxTQUFTLE1BQUssR0FBRyxpQkFBaUIsTUFBSyxJQUFHO0FBRXZKLFdBQVMsUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTO0FBQ3RDLFVBQU0sS0FBSyxRQUFRLE9BQU07QUFDekIsVUFBTSxPQUFPLFVBQVUsYUFBYSxjQUFjLENBQUM7QUFDbkQsVUFBTSxXQUFXLEtBQUssSUFBSSxJQUFJLEdBQUUsSUFBSTtBQUNwQyxVQUFNLEtBQUs7QUFBQSxNQUNULEdBQUcsS0FBSztBQUFBLE1BQ1IsR0FBRyxLQUFLLElBQUksVUFBVSxRQUFPLFdBQVc7QUFBQSxNQUN4QyxPQUFPLElBQUksV0FBVztBQUFBLE1BQ3RCLFFBQVEsVUFBVSxRQUFPLFdBQVc7QUFBQSxNQUNwQyxPQUFPLFFBQVEsTUFBTSxJQUFJLGdCQUFnQjtBQUFBLE1BQ3pDLGdCQUFnQixRQUFRLE1BQU0sSUFBSSxnQkFBZ0I7QUFBQSxNQUNsRCxNQUFNO0FBQUEsTUFDTixXQUFXLE9BQU0sWUFBWTtBQUFBLE1BQzdCLE9BQU87QUFBQSxNQUNQLFVBQVUsS0FBSyxJQUFJLFFBQVEsR0FBRyxJQUFJO0FBQUEsSUFDcEMsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVBLFNBQVMsa0JBQWtCLE9BQXdCLFVBQW9ELFFBQXNCO0FBQzNILFFBQU0sRUFBRSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sT0FBTyxJQUFJO0FBQzlFLGFBQVcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQ3pCLGFBQVMsUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTO0FBQ3RDLFlBQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxLQUFLLElBQUksSUFBSTtBQUN6QyxZQUFNLE9BQU8sU0FBUyxJQUNsQixVQUFVLGFBQWEsWUFBWSxDQUFDLElBQ3BDLFVBQVUsY0FBYyxhQUFhLENBQUM7QUFDMUMsWUFBTSxVQUFVLFNBQVMsSUFBSSxLQUFLO0FBQ2xDLFlBQU0sVUFBVSxPQUFNLEtBQUssSUFBSSxTQUFTLE1BQU0sUUFBUSxNQUFNLElBQUksSUFBSTtBQUNwRSxZQUFNLEtBQUs7QUFBQSxRQUNULEdBQUcsS0FBSyxJQUFJLFVBQVUsU0FBUyxRQUFPLElBQUk7QUFBQSxRQUMxQyxHQUFHLEtBQUssSUFBSSxVQUFVLFFBQU8sSUFBSTtBQUFBLFFBQ2pDLE9BQU8sTUFBTSxJQUFJO0FBQUEsUUFDakIsUUFBUSxVQUFVLFFBQU8sSUFBSTtBQUFBLFFBQzdCLE9BQU8sUUFBUSxNQUFNLElBQUksaUJBQWlCLFFBQVEsTUFBTSxJQUFJLGdCQUFnQjtBQUFBLFFBQzVFLGdCQUFnQjtBQUFBLFFBQ2hCLE1BQU07QUFBQSxRQUNOLFlBQVksUUFBTyxJQUFJLFNBQVE7QUFBQSxRQUMvQixPQUFPO0FBQUEsTUFDVCxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsb0JBQW9CLE9BQXdCLFVBQW9ELFFBQXNCO0FBQzdILFFBQU0sRUFBRSxZQUFZLGFBQWEsYUFBYSxhQUFhLElBQUk7QUFDL0QsV0FBUyxRQUFRLEdBQUcsUUFBUSxJQUFJLFNBQVM7QUFDdkMsVUFBTSxRQUFRLE9BQVEsUUFBUSxLQUFNLE1BQU87QUFDM0MsVUFBTSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUMxQyxVQUFNLE9BQU8sUUFBUSxNQUFNLElBQUksT0FBTSxRQUFRLE1BQU0sSUFBSSxPQUFNLFFBQVEsTUFBTSxJQUFJLE9BQU07QUFDckYsVUFBTSxPQUFPLFVBQVUsYUFBYSxZQUFZLENBQUM7QUFDakQsVUFBTSxRQUFRLFVBQVUsY0FBYyxhQUFhLENBQUM7QUFDcEQsVUFBTSxRQUFRLFVBQVUsTUFBTSxPQUFPLE9BQU8sS0FBSyxJQUFJLFFBQVEsTUFBTSxTQUFTLElBQUksSUFBSSxLQUFJO0FBQ3hGLFVBQU0sVUFBVSxPQUFNLEtBQUssSUFBSSxTQUFTLE1BQU0sUUFBUSxHQUFHLElBQUk7QUFDN0QsVUFBTSxLQUFLO0FBQUEsTUFDVCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1QsT0FBTyxNQUFLLFFBQVEsSUFBSTtBQUFBLE1BQ3hCLFFBQVEsS0FBSyxRQUFRLElBQUk7QUFBQSxNQUN6QixPQUFPLFFBQVEsTUFBTSxJQUFJLGlCQUFpQixRQUFRLE1BQU0sSUFBSSxnQkFBZ0I7QUFBQSxNQUM1RSxnQkFBZ0I7QUFBQSxNQUNoQixNQUFNO0FBQUEsTUFDTixZQUFZLE9BQU8sUUFBUSxJQUFLLFNBQVE7QUFBQSxNQUN4QyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBRUEsU0FBUyxlQUFlLE9BQXdCLEdBQTZCLEdBQTZCLE9BQWUsT0FBZSxXQUF5QjtBQUMvSixRQUFNLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDbkIsUUFBTSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ25CLFFBQU0sU0FBUyxLQUFLLE1BQU0sSUFBSSxFQUFFO0FBQ2hDLFFBQU0sS0FBSztBQUFBLElBQ1QsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUEsSUFDakIsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUEsSUFDakIsT0FBTztBQUFBLElBQ1AsUUFBUSxTQUFTO0FBQUEsSUFDakI7QUFBQSxJQUNBLGdCQUFnQixZQUFZO0FBQUEsSUFDNUIsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLElBQ1AsVUFBVSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFBQSxFQUM5QixDQUFDO0FBQ0g7QUFFQSxTQUFTLFVBQVUsR0FBNkIsR0FBNkIsR0FBcUM7QUFDaEgsU0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDOUQ7OztBQ3hQQSxJQUFNLGlDQUFpQyxDQUFDLEdBQVcsTUFBc0I7QUFDdkUsUUFBTSxTQUFTLEtBQUssTUFBTSxHQUFHLENBQUMsS0FBSztBQUNuQyxTQUFPLEtBQUssTUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLE1BQU07QUFDM0M7QUFFTyxJQUFNLGlCQUFOLE1BQXFCO0FBQUEsRUFDMUI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQSxZQUFZLFNBQWdDO0FBQzFDLFNBQUssSUFBRSxRQUFRO0FBQUUsU0FBSyxJQUFFLFFBQVE7QUFBRSxTQUFLLFlBQVUsUUFBUSxhQUFXO0FBQUUsU0FBSyxZQUFVLFFBQVEsYUFBVztBQUN4RyxTQUFLLFNBQU8sUUFBUSxVQUFRO0FBQUUsU0FBSyxTQUFPLFFBQVEsVUFBUTtBQUFFLFNBQUssY0FBWSxRQUFRLGVBQWE7QUFBRyxTQUFLLGFBQVcsUUFBUSxjQUFZO0FBQ3pJLFNBQUssUUFBTSxRQUFRO0FBQU0sU0FBSyxhQUFXLFFBQVEsY0FBWSxRQUFRO0FBQU0sU0FBSyxZQUFVLFFBQVEsYUFBVyxRQUFRO0FBQ3JILFNBQUssUUFBTSxRQUFRLFNBQU87QUFBTyxTQUFLLFlBQVUsUUFBUSxhQUFXO0FBQUUsU0FBSyxPQUFLLFFBQVEsUUFBTTtBQUFBLEVBQy9GO0FBQUEsRUFFQSxPQUFPLGNBQTRCO0FBQ2pDLFNBQUssS0FBSyxLQUFLLFlBQVk7QUFDM0IsU0FBSyxLQUFLLEtBQUssWUFBWTtBQUMzQixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsYUFBOEI7QUFDNUIsVUFBTSxRQUFRLEtBQUssVUFBVTtBQUM3QixVQUFNLFNBQVMsS0FBSyxVQUFVO0FBQzlCLFVBQU0sT0FBTyxLQUFLLFVBQVU7QUFDNUIsVUFBTSxRQUFRLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUs7QUFDNUQsVUFBTSxhQUFhLEtBQUssWUFBWTtBQUNwQyxVQUFNLGFBQWEsS0FBSyxZQUFZO0FBQ3BDLFVBQU0sV0FBVywrQkFBK0IsS0FBSyxXQUFXLEtBQUssU0FBUztBQUM5RSxVQUFNLFFBQXlCLENBQUM7QUFBQSxNQUM5QixHQUFFLEtBQUssSUFBRSxhQUFXLEtBQUssY0FBWTtBQUFBLE1BQUcsR0FBRSxLQUFLLElBQUUsYUFBVyxLQUFLLGNBQVk7QUFBQSxNQUM3RSxPQUFNLEtBQUs7QUFBQSxNQUFXLFFBQU8sS0FBSztBQUFBLE1BQVksT0FBTSxLQUFLO0FBQUEsTUFBVyxnQkFBZSxLQUFLO0FBQUEsTUFDeEYsTUFBSyxLQUFLLE9BQUs7QUFBQSxNQUFHLFdBQVUsS0FBSyxZQUFVO0FBQUEsTUFBSSxPQUFNO0FBQUEsTUFBTztBQUFBLElBQzlELENBQUM7QUFDRCxVQUFNLFFBQU0sT0FBSyxLQUFLLFNBQU8sTUFBSSxTQUFPLEtBQUssU0FBTyxPQUFJLEtBQUs7QUFDN0QsVUFBTSxTQUFPLE9BQUssS0FBSyxTQUFPLE9BQUksS0FBSztBQUN2QyxVQUFNLFFBQVEsQ0FBQztBQUNmLFVBQU0sUUFBUTtBQUNkLFVBQU0sTUFBSSxDQUFDLFdBQWdCLE1BQU0sS0FBSyxFQUFDLEdBQUUsS0FBSyxJQUFFLFFBQU0sUUFBTyxHQUFFLEtBQUssSUFBRSxRQUFNLFFBQU8sT0FBTSxRQUFPLE9BQU0sS0FBSyxPQUFNLGdCQUFlLEtBQUssV0FBVSxNQUFLLEtBQUssTUFBSyxXQUFVLEtBQUssV0FBVSxPQUFNLFNBQU8sV0FBUyxRQUFPLFNBQVEsQ0FBQztBQUM3TixRQUFHLE9BQU07QUFBQyxVQUFJLENBQUMsS0FBSyxTQUFPLEdBQUU7QUFBRSxVQUFJLEtBQUssU0FBTyxHQUFFO0FBQUEsSUFBQyxNQUFNLEtBQUksQ0FBQztBQUM3RCxXQUFPO0FBQUEsRUFDVDtBQUNGOzs7QUNwRU8sSUFBTSxlQUFlO0FBQUEsRUFDMUIsdUJBQXVCO0FBQ3pCO0FBRUEsSUFBSSxDQUFDLE9BQU8sU0FBUyxhQUFhLHFCQUFxQixLQUFLLGFBQWEseUJBQXlCLEdBQUc7QUFDbkcsUUFBTSxJQUFJLE1BQU0sdUVBQXVFO0FBQ3pGOzs7QUNkTyxJQUFlLG1CQUFmLE1BQTBFO0FBQUEsRUFLckUsUUFBUSxXQUFvQixTQUFvQztBQUN4RSxRQUFJLENBQUMsVUFBVyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssUUFBUSxLQUFLLE9BQU8sRUFBRTtBQUFBLEVBQ2hFO0FBR0Y7OztBQzhDQSxJQUFNLFFBQVEsQ0FDWixhQUNBLFlBRWM7QUFBQSxFQUNkLE9BQU87QUFBQSxFQUNQLGlCQUFpQjtBQUFBLEVBQ2pCLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFFBQVE7QUFBQSxFQUNSLG9CQUFvQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLEdBQUc7QUFDTDtBQUVPLElBQU0sc0JBQU4sY0FBa0MsaUJBQTRDO0FBQUEsRUFDMUUsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsaUJBQWlCO0FBQUEsSUFDeEIsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsaUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCO0FBQUEsSUFDaEIscUJBQXFCLENBQUMsVUFBVSxlQUFlLFNBQVMsZUFBZSxjQUFjO0FBQUEsSUFDckYsNEJBQTRCLENBQUMsWUFBWSxrQkFBa0I7QUFBQSxFQUM3RDtBQUFBLEVBRVMsVUFBVTtBQUFBLElBQ2pCLGFBQWE7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUFnQixRQUFRO0FBQUEsTUFBVyxhQUFhO0FBQUEsTUFBUyxhQUFhO0FBQUEsTUFBVSxvQkFBb0I7QUFBQSxNQUMzRyxnQkFBZ0IsRUFBRSxZQUFZLGNBQWMsZ0JBQWdCLG1CQUFtQixpQkFBaUIsUUFBUSxpQkFBaUIsUUFBUSxZQUFZLFlBQVksV0FBVyxRQUFRLGtCQUFrQixLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixLQUFLLGNBQWMsYUFBYSxjQUFjLFlBQVksa0JBQWtCLElBQUksa0JBQWtCLEtBQUssa0JBQWtCLEVBQUU7QUFBQSxNQUN0VyxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLEdBQUUsaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDdEksTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFLLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLGFBQVksSUFBRyxrQkFBaUIsS0FBRyxlQUFjLElBQUUsQ0FBQztBQUFBLFFBQ3ZJLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSyxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxJQUFFLENBQUM7QUFBQSxNQUM3STtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUFlLFFBQVE7QUFBQSxNQUFVLGFBQWE7QUFBQSxNQUFjLGFBQWE7QUFBQSxNQUFlLG9CQUFvQjtBQUFBLE1BQ25ILGdCQUFnQixFQUFFLFlBQVksZUFBZSxnQkFBZ0IseUJBQXlCLGlCQUFpQixVQUFVLGlCQUFpQixTQUFTLFlBQVksUUFBUSxXQUFXLFNBQVMsa0JBQWtCLEdBQUcsaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sY0FBYyxnQkFBZ0IsY0FBYyxpQkFBaUIsa0JBQWtCLElBQUksa0JBQWtCLElBQUksa0JBQWtCLEVBQUU7QUFBQSxNQUNuWCxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUksaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsZUFBYyxHQUFFLGFBQVksSUFBRyxvQkFBbUIsR0FBRSxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLFFBQzdLLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxlQUFjLEtBQUksYUFBWSxJQUFHLG9CQUFtQixHQUFFLGtCQUFpQixLQUFHLGVBQWMsSUFBRSxDQUFDO0FBQUEsUUFDN0ssTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLGVBQWMsR0FBRSxhQUFZLElBQUcsb0JBQW1CLEdBQUUsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxNQUNsTDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUFpQixRQUFRO0FBQUEsTUFBVSxhQUFhO0FBQUEsTUFBYyxhQUFhO0FBQUEsTUFBUyxvQkFBb0I7QUFBQSxNQUMvRyxnQkFBZ0IsRUFBRSxZQUFZLHFCQUFxQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixRQUFRLGlCQUFpQixRQUFRLFlBQVksVUFBVSxXQUFXLFFBQVEsa0JBQWtCLEtBQUssaUJBQWlCLEtBQUssaUJBQWlCLE1BQU0sY0FBYyxnQkFBZ0IsY0FBYyxjQUFjLGtCQUFrQixJQUFJLGtCQUFrQixLQUFLLGtCQUFrQixFQUFFO0FBQUEsTUFDOVcsUUFBUTtBQUFBLFFBQ04sTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUksUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLE1BQUksYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDNUwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLE1BQUksYUFBWSxJQUFHLGtCQUFpQixLQUFHLGVBQWMsSUFBRSxDQUFDO0FBQUEsUUFDM0wsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxLQUFHLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsTUFDekw7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFBZ0IsUUFBUTtBQUFBLE1BQVksYUFBYTtBQUFBLE1BQVksYUFBYTtBQUFBLE1BQWUsb0JBQW9CO0FBQUEsTUFDcEgsZ0JBQWdCLEVBQUUsWUFBWSxjQUFjLGdCQUFnQixrQkFBa0IsaUJBQWlCLFFBQVEsaUJBQWlCLFVBQVUsWUFBWSxPQUFPLFdBQVcsUUFBUSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsS0FBSyxjQUFjLGdCQUFnQixjQUFjLGNBQWMsa0JBQWtCLEtBQUssa0JBQWtCLEtBQUssa0JBQWtCLEVBQUU7QUFBQSxNQUN6VyxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSSxRQUFPLEtBQUksaUJBQWdCLEtBQUksa0JBQWlCLEtBQUksUUFBTyxHQUFFLGFBQVksSUFBRyxjQUFhLElBQUcsV0FBVSxJQUFHLGtCQUFpQixLQUFJLGVBQWMsS0FBSSxDQUFDO0FBQUEsUUFDaEwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUksUUFBTyxHQUFFLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLFFBQU8sR0FBRSxhQUFZLElBQUcsY0FBYSxJQUFHLFdBQVUsSUFBRyxrQkFBaUIsS0FBSSxlQUFjLEtBQUksQ0FBQztBQUFBLFFBQy9LLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixLQUFHLFFBQU8sS0FBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxRQUFPLEdBQUUsYUFBWSxJQUFHLGNBQWEsSUFBRyxXQUFVLElBQUcsa0JBQWlCLEtBQUksZUFBYyxJQUFHLENBQUM7QUFBQSxNQUM5SztBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUFrQixRQUFRO0FBQUEsTUFBWSxhQUFhO0FBQUEsTUFBWSxhQUFhO0FBQUEsTUFBZ0Isb0JBQW9CO0FBQUEsTUFDdkgsZ0JBQWdCLEVBQUUsWUFBWSxjQUFjLGdCQUFnQixtQkFBbUIsaUJBQWlCLGFBQWEsaUJBQWlCLFVBQVUsWUFBWSxRQUFRLFdBQVcsVUFBVSxrQkFBa0IsS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsR0FBRyxjQUFjLGNBQWMsY0FBYyxlQUFlLGtCQUFrQixJQUFJLGtCQUFrQixLQUFLLGtCQUFrQixFQUFFO0FBQUEsTUFDN1csUUFBUTtBQUFBLFFBQ04sTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxLQUFHLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLGlCQUFnQixHQUFFLGVBQWMsS0FBSSxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxRQUM5SyxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUksaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssaUJBQWdCLEdBQUUsZUFBYyxHQUFFLGFBQVksSUFBRyxrQkFBaUIsS0FBRyxlQUFjLElBQUUsQ0FBQztBQUFBLFFBQzNLLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSyxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxpQkFBZ0IsR0FBRSxlQUFjLEtBQUksYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsTUFDL0s7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3BELFdBQUssUUFBUSxLQUFLLGVBQWUsb0JBQW9CLFNBQVMsSUFBSSxXQUFXLEdBQUcsR0FBRyxFQUFFLG1DQUFtQztBQUN4SCxXQUFLLFFBQVEsS0FBSyxlQUFlLDJCQUEyQixTQUFTLElBQUksa0JBQWtCLEdBQUcsR0FBRyxFQUFFLDBDQUEwQztBQUM3SSxXQUFLLFFBQVEsWUFBWSxJQUFJLGVBQWUsZUFBZSxNQUFNLFFBQVcsR0FBRyxFQUFFLG1DQUFtQztBQUNwSCxXQUFLLFFBQVEsWUFBWSxJQUFJLGVBQWUsVUFBVSxNQUFNLFFBQVcsR0FBRyxFQUFFLDhCQUE4QjtBQUMxRyxXQUFLLFFBQVEsSUFBSSxlQUFlLG1CQUFtQixLQUFLLElBQUksZUFBZSxtQkFBbUIsR0FBRyxHQUFHLEVBQUUscUNBQXFDO0FBQzNJLFdBQUssUUFBUSxJQUFJLE9BQU8sU0FBUyxHQUFHLEdBQUcsRUFBRSxzQkFBc0I7QUFDL0QsaUJBQVcsVUFBVSxJQUFJLFFBQVE7QUFDL0IsYUFBSyxRQUFRLE9BQU8sb0JBQW9CLEdBQUcsR0FBRyxFQUFFLFVBQVUsT0FBTyxLQUFLLDhCQUE4QjtBQUNwRyxhQUFLLFFBQVEsT0FBTyxTQUFTLEtBQUssT0FBTyxrQkFBa0IsS0FBSyxPQUFPLG1CQUFtQixHQUFHLEdBQUcsRUFBRSxVQUFVLE9BQU8sS0FBSyxnQ0FBZ0M7QUFDeEosYUFBSyxRQUFRLE9BQU8sY0FBYyxLQUFLLE9BQU8sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLFVBQVUsT0FBTyxLQUFLLHNCQUFzQjtBQUFBLE1BQ3ZIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sWUFBWSxJQUFJLG9CQUFvQjs7O0FDekgxQyxJQUFNLHNCQUFOLGNBQWtDLGlCQUE0QztBQUFBLEVBQzFFLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxJQUNqQixVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixpQkFBaUI7QUFBQSxNQUNqQixXQUFXO0FBQUEsTUFDWCxrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxNQUNwQixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsb0JBQW9CO0FBQUEsTUFDcEIsaUJBQWlCO0FBQUEsTUFDakIsV0FBVztBQUFBLE1BQ1gsa0JBQWtCO0FBQUEsTUFDbEIsb0JBQW9CO0FBQUEsTUFDcEIsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLG9CQUFvQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLE1BQ2pCLFdBQVc7QUFBQSxNQUNYLGtCQUFrQjtBQUFBLE1BQ2xCLG9CQUFvQjtBQUFBLE1BQ3BCLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixpQkFBaUI7QUFBQSxNQUNqQixXQUFXO0FBQUEsTUFDWCxrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxNQUNwQixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksR0FBRyxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUNwRCxXQUFLLFFBQVEsSUFBSSxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUM3RCxXQUFLLFFBQVEsSUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFLDBCQUEwQjtBQUMzRCxXQUFLLFFBQVEsSUFBSSxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUM3RCxXQUFLLFFBQVEsT0FBTyxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksY0FBYyxHQUFHLEdBQUcsRUFBRSx5Q0FBeUM7QUFDcEgsV0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxFQUFFLHlDQUF5QztBQUNuRyxXQUFLLFFBQVEsSUFBSSxrQkFBa0IsS0FBSyxJQUFJLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxzQ0FBc0M7QUFBQSxJQUM5RztBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sWUFBWSxJQUFJLG9CQUFvQjs7O0FDckhqRCxJQUFNLFVBQVUsQ0FBQyxPQUF3QixHQUFHLFdBQVcsUUFBUTtBQUMvRCxJQUFNLHFCQUFxQixDQUFDLE9BQTZCO0FBQ3ZELE1BQUksT0FBTyxjQUFlLFFBQU87QUFDakMsTUFBSSxDQUFDLEdBQUcsV0FBVyxRQUFRLEVBQUcsUUFBTztBQUNyQyxRQUFNLFlBQVksR0FBRyxNQUFNLFNBQVMsTUFBTTtBQUMxQyxTQUFPLGFBQWEsVUFBVSxVQUFVLFlBQXFCO0FBQy9EO0FBRU8sU0FBUyxxQkFBcUIsT0FBNkM7QUFDaEYsTUFBSSxNQUFNLFFBQVEsV0FBVyxFQUFHLE9BQU0sSUFBSSxNQUFNLGtEQUFrRDtBQUNsRyxNQUFJLE1BQU0sUUFBUSxjQUFjLEVBQUcsT0FBTSxJQUFJLE1BQU0scURBQXFEO0FBQ3hHLGFBQVcsQ0FBQyxRQUFRLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDMUQsUUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLFdBQVcsS0FBSyxRQUFRLEtBQUssTUFBTSxHQUFHO0FBQ3BELFlBQU0sSUFBSSxNQUFNLHFCQUFxQixNQUFNLHdEQUF3RDtBQUFBLElBQ3JHO0FBQ0EsUUFBSSxDQUFDLE1BQU0sR0FBSSxPQUFNLElBQUksTUFBTSx3QkFBd0IsTUFBTSxvQkFBb0I7QUFDakYsUUFBSSxNQUFNLFVBQVUsVUFBYSxNQUFNLFNBQVMsR0FBRztBQUNqRCxZQUFNLElBQUksTUFBTSx3QkFBd0IsTUFBTSxvQ0FBb0M7QUFBQSxJQUNwRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE9BQU8sTUFBTSxPQUNoQixNQUFNLE9BQU8sRUFDYixJQUFJLENBQUMsTUFBTSxpQkFBaUIsRUFBRSxNQUFNLEtBQUssS0FBSyxHQUFHLGFBQWEsY0FBYyxFQUFFLEVBQUUsRUFDaEYsT0FBTyxTQUFPLElBQUksS0FBSyxTQUFTLENBQUM7QUFFcEMsTUFBSSxLQUFLLFdBQVcsRUFBRyxPQUFNLElBQUksTUFBTSw2Q0FBNkM7QUFFcEYsTUFBSTtBQUNKLE1BQUk7QUFDSixRQUFNLFdBQWdDLENBQUM7QUFFdkMsT0FBSyxRQUFRLENBQUMsS0FBSyxhQUFhO0FBQzlCLFVBQU0sWUFBWSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsT0FBTyxlQUFhLGNBQWMsR0FBRyxFQUFFO0FBQ3ZFLFFBQUksY0FBYyxHQUFHO0FBQ25CLFlBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsa0RBQWtELFNBQVMsR0FBRztBQUFBLElBQ3BIO0FBRUEsVUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxNQUFNLEdBQUcsRUFBRSxJQUFJLFVBQVEsS0FBSyxRQUFRLE9BQU8sRUFBRSxDQUFDO0FBQzdFLGtCQUFjLEtBQUs7QUFDbkIsbUJBQWUsTUFBTTtBQUVyQixRQUFJLEtBQUssV0FBVyxXQUFXO0FBQzdCLFlBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsbUJBQW1CLEtBQUssTUFBTSxjQUFjLFNBQVMsR0FBRztBQUFBLElBQzlHO0FBQ0EsUUFBSSxNQUFNLFdBQVcsWUFBWTtBQUMvQixZQUFNLElBQUksTUFBTSxxQkFBcUIsSUFBSSxXQUFXLG9CQUFvQixNQUFNLE1BQU0sY0FBYyxVQUFVLEdBQUc7QUFBQSxJQUNqSDtBQUVBLFVBQU0scUJBQXFCLEtBQUssU0FBUyxJQUFJO0FBQzdDLGVBQVcsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLEtBQUssQ0FBQyxHQUFZO0FBQ3RFLFlBQU0sYUFBYSxvQkFBSSxJQUFvQjtBQUMzQyxPQUFDLEdBQUcsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLGNBQWM7QUFDdkMsY0FBTSxRQUFRLE1BQU0sT0FBTyxNQUFNO0FBQ2pDLFlBQUksQ0FBQyxPQUFPO0FBQ1YsZ0JBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsaUJBQWlCLE1BQU0sUUFBUSxJQUFJLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxRQUN2SjtBQUNBLFlBQUksTUFBTSxPQUFPLFFBQVM7QUFDMUIsY0FBTSxVQUFVLG1CQUFtQixNQUFNLEVBQUU7QUFDM0MsY0FBTSxhQUFhLFVBQVUsVUFBVSxRQUFRLE9BQU8sRUFBRSxhQUFhO0FBQ3JFLFlBQUksWUFBWSxhQUFhLEtBQUssUUFBUTtBQUN4QyxnQkFBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksV0FBVyxXQUFXLE1BQU0sRUFBRSxPQUFPLElBQUksZUFBZSxTQUFTLGtCQUFrQixVQUFVLHFCQUFxQixLQUFLLFNBQVMsU0FBUyxVQUFVO0FBQUEsUUFDOUw7QUFDQSxpQkFBUyxTQUFTLEdBQUcsU0FBUyxZQUFZLFVBQVU7QUFDbEQsZ0JBQU0sV0FBVyxXQUFXLElBQUksWUFBWSxNQUFNO0FBQ2xELGNBQUksVUFBVTtBQUNaLGtCQUFNLElBQUksTUFBTSxxQkFBcUIsSUFBSSxXQUFXLFdBQVcsTUFBTSxFQUFFLE9BQU8sSUFBSSxlQUFlLFlBQVksTUFBTSx5QkFBeUIsUUFBUSxHQUFHO0FBQUEsVUFDeko7QUFBQSxRQUNGO0FBQ0EsaUJBQVMsU0FBUyxHQUFHLFNBQVMsWUFBWSxTQUFVLFlBQVcsSUFBSSxZQUFZLFFBQVEsTUFBTSxFQUFFO0FBRS9GLGlCQUFTLEtBQUs7QUFBQSxVQUNaLElBQUksTUFBTTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0Esa0JBQWtCLE1BQU0sU0FBUyxNQUFNLFFBQVEsTUFBTSxFQUFFLElBQUksTUFBTSxRQUFRLGFBQWE7QUFBQSxRQUN4RixDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0YsQ0FBQztBQUVELFNBQU8sU0FBUyxLQUFLLENBQUMsR0FBRyxNQUN2QixFQUFFLHFCQUFxQixFQUFFLHNCQUN6QixFQUFFLFdBQVcsRUFBRSxZQUNmLEVBQUUsS0FBSyxjQUFjLEVBQUUsSUFBSSxLQUMzQixFQUFFLFlBQVksRUFBRSxTQUFTO0FBQzdCOzs7QUNuSU8sSUFBTSxpQkFBOEI7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixrQkFBa0I7QUFBQSxFQUNsQixhQUFhO0FBQUEsSUFDWCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTJCUixRQUFRO0FBQUEsTUFDTixLQUFLLEVBQUUsSUFBSSxRQUFRO0FBQUEsTUFDbkIsS0FBSyxFQUFFLElBQUksZUFBZTtBQUFBLE1BQzFCLEtBQUssRUFBRSxJQUFJLGNBQWM7QUFBQSxNQUN6QixLQUFLLEVBQUUsSUFBSSxpQ0FBaUMsT0FBTyxFQUFFO0FBQUEsTUFDckQsS0FBSyxFQUFFLElBQUksbUNBQW1DLE9BQU8sRUFBRTtBQUFBLE1BQ3ZELEtBQUssRUFBRSxJQUFJLGdDQUFnQyxPQUFPLEVBQUU7QUFBQSxNQUNwRCxLQUFLLEVBQUUsSUFBSSw0QkFBNEIsT0FBTyxFQUFFO0FBQUEsSUFDbEQ7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGOzs7QUNuRE8sSUFBTUMsa0JBQThCO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2Isa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLElBQ1gsU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZ0NSLFFBQVE7QUFBQSxNQUNOLEtBQUssRUFBRSxJQUFJLFFBQVE7QUFBQSxNQUNuQixLQUFLLEVBQUUsSUFBSSxlQUFlO0FBQUEsTUFDMUIsS0FBSyxFQUFFLElBQUksY0FBYztBQUFBLE1BQ3pCLEtBQUssRUFBRSxJQUFJLDRCQUE0QixPQUFPLElBQUk7QUFBQSxNQUNsRCxLQUFLLEVBQUUsSUFBSSxpQ0FBaUMsT0FBTyxJQUFJO0FBQUEsTUFDdkQsS0FBSyxFQUFFLElBQUksa0NBQWtDLE9BQU8sS0FBSztBQUFBLE1BQ3pELEtBQUssRUFBRSxJQUFJLG1DQUFtQyxPQUFPLElBQUk7QUFBQSxNQUN6RCxLQUFLLEVBQUUsSUFBSSxnQ0FBZ0MsT0FBTyxLQUFLO0FBQUEsSUFDekQ7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGOzs7QUN6RE8sSUFBTUMsa0JBQThCO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2Isa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLElBQ1gsU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOERSLFFBQVE7QUFBQSxNQUNOLEtBQUssRUFBRSxJQUFJLFFBQVE7QUFBQSxNQUNuQixLQUFLLEVBQUUsSUFBSSxlQUFlO0FBQUEsTUFDMUIsS0FBSyxFQUFFLElBQUksY0FBYztBQUFBLE1BQ3pCLEtBQUssRUFBRSxJQUFJLDRCQUE0QixPQUFPLElBQUk7QUFBQSxNQUNsRCxLQUFLLEVBQUUsSUFBSSxpQ0FBaUMsT0FBTyxFQUFFO0FBQUEsTUFDckQsS0FBSyxFQUFFLElBQUksa0NBQWtDLE9BQU8sS0FBSztBQUFBLE1BQ3pELEtBQUssRUFBRSxJQUFJLGlDQUFpQyxPQUFPLElBQUk7QUFBQSxNQUN2RCxLQUFLLEVBQUUsSUFBSSxtQ0FBbUMsT0FBTyxJQUFJO0FBQUEsTUFDekQsS0FBSyxFQUFFLElBQUksZ0NBQWdDLE9BQU8sS0FBSztBQUFBLE1BQ3ZELEtBQUssRUFBRSxJQUFJLCtCQUErQixPQUFPLElBQUk7QUFBQSxJQUN2RDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQ0Y7OztBQ3pGTyxJQUFNQyxrQkFBOEI7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixrQkFBa0I7QUFBQSxFQUNsQixhQUFhO0FBQUEsSUFDWCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEwSFIsUUFBUTtBQUFBLE1BQ04sS0FBSyxFQUFFLElBQUksUUFBUTtBQUFBLE1BQ25CLEtBQUssRUFBRSxJQUFJLGNBQWM7QUFBQSxNQUN6QixLQUFLLEVBQUUsSUFBSSxpQ0FBaUMsT0FBTyxJQUFJO0FBQUEsTUFDdkQsS0FBSyxFQUFFLElBQUksNEJBQTRCLE9BQU8sSUFBSTtBQUFBLE1BQ2xELEtBQUssRUFBRSxJQUFJLG1DQUFtQyxPQUFPLElBQUk7QUFBQSxNQUN6RCxLQUFLLEVBQUUsSUFBSSxlQUFlO0FBQUEsTUFDMUIsS0FBSyxFQUFFLElBQUksZ0NBQWdDLE9BQU8sS0FBSztBQUFBLE1BQ3ZELEtBQUssRUFBRSxJQUFJLGtDQUFrQyxPQUFPLEtBQUs7QUFBQSxNQUN6RCxLQUFLLEVBQUUsSUFBSSxhQUFhO0FBQUEsTUFDeEIsS0FBSyxFQUFFLElBQUksK0JBQStCLE9BQU8sSUFBSTtBQUFBLE1BQ3JELEtBQUssRUFBRSxJQUFJLGlDQUFpQyxPQUFPLElBQUk7QUFBQSxNQUN2RCxLQUFLLEVBQUUsSUFBSSxvQkFBb0I7QUFBQSxNQUMvQixLQUFLLEVBQUUsSUFBSSxtQ0FBbUMsT0FBTyxLQUFLO0FBQUEsTUFDMUQsS0FBSyxFQUFFLElBQUksaUNBQWlDLE9BQU8sS0FBSztBQUFBLE1BQ3hELEtBQUssRUFBRSxJQUFJLG9DQUFvQyxPQUFPLEtBQUs7QUFBQSxNQUMzRCxLQUFLLEVBQUUsSUFBSSwrQkFBK0I7QUFBQSxNQUMxQyxLQUFLLEVBQUUsSUFBSSw4QkFBOEI7QUFBQSxNQUN6QyxLQUFLLEVBQUUsSUFBSSxlQUFlO0FBQUEsSUFDNUI7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGOzs7QUMxSk8sSUFBTSxTQUFTO0FBQUEsRUFFcEIsVUFBVTtBQUFBLEVBQ1YsVUFBVUM7QUFBQSxFQUNWLFVBQVVBO0FBQUEsRUFDVixVQUFVQTtBQUNaOzs7QUNMTyxJQUFNLHdCQUFOLGNBQW9DLGlCQUE4QztBQUFBLEVBQzlFLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUVuQixjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDdEQsV0FBSyxRQUFRLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLDZCQUE2QjtBQUMxRSwyQkFBcUIsTUFBTSxVQUFVO0FBQ3JDLFdBQUssUUFBUSxvQkFBb0IsTUFBTSxZQUFZLE9BQU8sR0FBRyxHQUFHLEVBQUUsMkJBQTJCO0FBQUEsSUFDL0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLGNBQWMsSUFBSSxzQkFBc0I7OztBQ1Q5QyxJQUFNLDZCQUFOLGNBQXlDLGlCQUFtRDtBQUFBLEVBQ3hGLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxJQUNqQixjQUFjO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksSUFBSSxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUNyRCxXQUFLLFFBQVEsS0FBSyxhQUFhLEdBQUcsR0FBRyxFQUFFLDBCQUEwQjtBQUNqRSxXQUFLLFFBQVEsS0FBSyxnQkFBZ0IsS0FBSyxlQUFlLEdBQUcsRUFBRSx1Q0FBdUM7QUFDbEcsV0FBSyxRQUFRLEtBQUssZUFBZSxLQUFLLEtBQUssVUFBVSxLQUFLLGVBQWUsR0FBRyxHQUFHLEVBQUUsNEJBQTRCO0FBQzdHLFdBQUssUUFBUSxZQUFZLEtBQUssV0FBVyxNQUFNLFFBQVcsR0FBRyxFQUFFLCtCQUErQjtBQUFBLElBQ2hHO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxtQkFBbUIsSUFBSSwyQkFBMkI7OztBQ3ZCeEQsSUFBTSx5QkFBTixjQUFxQyxpQkFBK0M7QUFBQSxFQUNoRixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFFUixVQUFVO0FBQUEsSUFDakIsWUFBWTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osaUJBQWlCO0FBQUEsTUFDakIsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osaUJBQWlCO0FBQUEsTUFDakIsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxNQUFNLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3ZELFdBQUssUUFBUSxPQUFPLFNBQVMsVUFBVSxHQUFHLEVBQUUsdUNBQXVDO0FBQ25GLFdBQUssUUFBUSxPQUFPLFNBQVMsR0FBRyxHQUFHLEVBQUUsMkJBQTJCO0FBQ2hFLFdBQUssUUFBUSxPQUFPLGFBQWEsR0FBRyxHQUFHLEVBQUUsNkJBQTZCO0FBQ3RFLFdBQUssUUFBUSxPQUFPLGVBQWUsR0FBRyxHQUFHLEVBQUUsc0JBQXNCO0FBQ2pFLFdBQUssUUFBUSxPQUFPLGdCQUFnQixHQUFHLEdBQUcsRUFBRSxtQ0FBbUM7QUFDL0UsV0FBSyxRQUFRLFlBQVksT0FBTyxLQUFLLE1BQU0sUUFBVyxHQUFHLEVBQUUsd0JBQXdCO0FBQUEsSUFDckY7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLGVBQWUsSUFBSSx1QkFBdUI7OztBQ2pEaEQsSUFBTSx3QkFBTixjQUFvQyxpQkFBOEM7QUFBQSxFQUM5RSxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWVSLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS2pCLFVBQVU7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1BLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1BLGNBQWM7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3RELFdBQUssUUFBUSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsMEJBQTBCO0FBQzdELFdBQUssUUFBUSxNQUFNLGFBQWEsS0FBSyxNQUFNLGNBQWMsS0FBSyxHQUFHLEVBQUUsa0NBQWtDO0FBQ3JHLFdBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsMkJBQTJCO0FBQy9ELFdBQUssUUFBUSxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxvQ0FBb0M7QUFDakYsV0FBSyxRQUFRLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRSxpQ0FBaUM7QUFDMUUsV0FBSyxRQUFRLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLG9DQUFvQztBQUNqRixXQUFLLFFBQVEsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUUsbUNBQW1DO0FBQy9FLFdBQUssUUFBUSxZQUFZLE1BQU0sS0FBSyxNQUFNLFFBQVcsR0FBRyxFQUFFLHdCQUF3QjtBQUFBLElBQ3BGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxjQUFjLElBQUksc0JBQXNCOzs7QUNsSjlDLFNBQVMsZUFDZCxXQUNBLFVBQ0EsV0FDTTtBQUNOLE1BQUksWUFBMkI7QUFDL0IsTUFBSSxrQkFBa0I7QUFDdEIsTUFBSSxlQUFlO0FBQ25CLFFBQU0sZUFBZSxDQUFDLFlBQTBCO0FBQzlDLFVBQU0sU0FBUyxVQUFVLHNCQUFzQjtBQUMvQyxVQUFNLGFBQWEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksVUFBVSxPQUFPLFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDbEYsVUFBTSxPQUFjLGFBQWEsTUFBSyxJQUFJO0FBQzFDLFFBQUksU0FBUyxVQUFVLEtBQUssRUFBRyxXQUFVLFFBQVEsSUFBSTtBQUNyRCxVQUFNLFlBQVksU0FBUyxJQUFJLElBQUk7QUFDbkMsVUFBTSxjQUFjLGFBQWEsYUFBYTtBQUM5QyxjQUFVLFFBQVEsYUFBYSxPQUFNLENBQUM7QUFBQSxFQUN4QztBQUNBLG1CQUFpQixXQUFXLFdBQVM7QUFDbkMsUUFBSSxNQUFNLFFBQVEsT0FBTyxNQUFNLFFBQVEsT0FBTyxNQUFNLFFBQVEsWUFBYSxXQUFVLFFBQVEsQ0FBQztBQUM1RixRQUFJLE1BQU0sUUFBUSxPQUFPLE1BQU0sUUFBUSxPQUFPLE1BQU0sUUFBUSxhQUFjLFdBQVUsUUFBUSxDQUFDO0FBQUEsRUFDL0YsQ0FBQztBQUNELFlBQVUsaUJBQWlCLGVBQWUsV0FBUztBQUNqRCxVQUFNLFNBQVMsTUFBTTtBQUNyQixRQUFJLE9BQU8sUUFBUSxRQUFRLEtBQUssT0FBTyxRQUFRLHVCQUF1QixFQUFHO0FBQ3pFLGdCQUFZLE1BQU07QUFDbEIsc0JBQWtCLE1BQU07QUFDeEIsbUJBQWU7QUFDZixjQUFVLG9CQUFvQixTQUFTO0FBQ3ZDLGlCQUFhLE1BQU0sT0FBTztBQUFBLEVBQzVCLENBQUM7QUFDRCxZQUFVLGlCQUFpQixlQUFlLFdBQVM7QUFDakQsUUFBSSxNQUFNLGNBQWMsVUFBVztBQUNuQyxxQkFBaUIsS0FBSyxJQUFJLE1BQU0sVUFBVSxlQUFlLElBQUk7QUFDN0QsaUJBQWEsTUFBTSxPQUFPO0FBQUEsRUFDNUIsQ0FBQztBQUNELFFBQU0sYUFBYSxDQUFDLFVBQThCO0FBQ2hELFFBQUksTUFBTSxjQUFjLFVBQVc7QUFDbkMsUUFBSSxDQUFDLGFBQWMsY0FBYSxNQUFNLE9BQU87QUFDN0MsZ0JBQVk7QUFDWixjQUFVLFdBQVc7QUFBQSxFQUN2QjtBQUNBLFlBQVUsaUJBQWlCLGFBQWEsVUFBVTtBQUNsRCxZQUFVLGlCQUFpQixpQkFBaUIsVUFBVTtBQUN0RCxZQUFVLGlCQUFpQixzQkFBc0IsTUFBTTtBQUNyRCxnQkFBWTtBQUNaLGNBQVUsV0FBVztBQUFBLEVBQ3ZCLENBQUM7QUFDRCxNQUFJLFdBQVcsbUJBQW1CLEVBQUUsU0FBUztBQUMzQyxVQUFNLFVBQVUsVUFBVSxjQUEyQixRQUFRO0FBQzdELFVBQU0sT0FBTyxTQUFTLGNBQTJCLGFBQWE7QUFDOUQsUUFBSSxrQkFBaUM7QUFDckMsVUFBTSxnQkFBZ0IsQ0FBQyxVQUE4QjtBQUNuRCxVQUFJLENBQUMsUUFBUztBQUNkLFlBQU0sU0FBUyxRQUFRLHNCQUFzQjtBQUM3QyxZQUFNLFNBQVMsT0FBTyxRQUFRO0FBQzlCLFlBQU0sT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVc7QUFDdkQsWUFBTSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUN2QyxVQUFJLEtBQU0sTUFBSyxNQUFNLFlBQVkseUJBQXlCLElBQUksU0FBUyxJQUFHO0FBQzFFLFlBQU0sWUFBWSxLQUFLLElBQUksQ0FBQztBQUM1QixVQUFJLGFBQWEsTUFBSztBQUNwQixjQUFNLFlBQW1CLElBQUksSUFBSSxJQUFJO0FBQ3JDLFlBQUksY0FBYyxVQUFVLEtBQUssRUFBRyxXQUFVLFFBQVEsU0FBUztBQUMvRCxrQkFBVSxPQUFPLENBQUM7QUFBQSxNQUNwQixXQUFXLGFBQWEsSUFBSSxXQUFVLE9BQU8sSUFBSSxHQUFFO0FBQUEsVUFDOUMsV0FBVSxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUM7QUFBQSxJQUNwQztBQUNBLGFBQVMsaUJBQWlCLGVBQWUsV0FBUztBQUNoRCxZQUFNLGdCQUFnQjtBQUN0Qix3QkFBa0IsTUFBTTtBQUN4QixjQUFRLGtCQUFrQixNQUFNLFNBQVM7QUFDekMsb0JBQWMsS0FBSztBQUFBLElBQ3JCLENBQUM7QUFDRCxhQUFTLGlCQUFpQixlQUFlLFdBQVM7QUFDaEQsVUFBSSxNQUFNLGNBQWMsZ0JBQWlCLGVBQWMsS0FBSztBQUFBLElBQzlELENBQUM7QUFDRCxVQUFNLGNBQWMsQ0FBQyxVQUE4QjtBQUNqRCxVQUFJLE1BQU0sY0FBYyxnQkFBaUI7QUFDekMsd0JBQWtCO0FBQ2xCLFVBQUksS0FBTSxNQUFLLE1BQU0sWUFBWTtBQUNqQyxnQkFBVSxXQUFXO0FBQUEsSUFDdkI7QUFDQSxhQUFTLGlCQUFpQixhQUFhLFdBQVc7QUFDbEQsYUFBUyxpQkFBaUIsaUJBQWlCLFdBQVc7QUFBQSxFQUN4RDtBQUNGOzs7QUNsRk8sSUFBTSxhQUFOLE1BQWlCO0FBQUEsRUFDdEIsT0FBYztBQUFBLEVBQ2QsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osSUFBSTtBQUFBLEVBQ0osVUFBVTtBQUFBLEVBQ1YscUJBQXFCO0FBQUEsRUFFckIsSUFBSSxRQUF3QjtBQUMxQixVQUFNLE9BQU8saUJBQWlCLFFBQVE7QUFDdEMsU0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLGNBQWMsS0FBSyxRQUFRLE1BQU07QUFDNUQsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBLEVBRUEsT0FBTyxTQUFTLEdBQVc7QUFDekIsU0FBSyxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssUUFBUSxNQUFNO0FBQzVDLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUVBLFFBQVEsTUFBYSxZQUFxQyxLQUFtQjtBQUMzRSxRQUFJLFNBQVMsS0FBSyxNQUFNO0FBQ3RCLFdBQUsscUJBQXFCO0FBRTFCLFdBQUssWUFBWTtBQUFBLElBQ25CO0FBQ0EsU0FBSyxPQUFPO0FBQ1osU0FBSyxVQUFVLFdBQVcsSUFBSSxJQUFJLEtBQUs7QUFBQSxFQUN6QztBQUFBLEVBRUEsT0FBTyxZQUFvQixXQUFtQixZQUEyQztBQUN2RixTQUFLLFlBQVksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksWUFBWTtBQUNyRSxTQUFLLFVBQVUsV0FBVyxLQUFLLElBQUksSUFBSSxLQUFLO0FBQUEsRUFDOUM7QUFBQSxFQUVBLFFBQVEsY0FBc0IsV0FBbUIsWUFBMkM7QUFFMUYsU0FBSyxjQUFjLEtBQUssSUFBSSxDQUFDLFlBQVksTUFBSyxLQUFLLElBQUksWUFBWSxNQUFLLFlBQVksQ0FBQyxJQUFJLEtBQUssYUFBYTtBQUMzRyxTQUFLLFVBQVUsV0FBVyxLQUFLLElBQUksSUFBSSxLQUFLO0FBQUEsRUFDOUM7QUFBQSxFQUVBLE9BQU8sY0FBNEI7QUFDakMsVUFBTSxXQUFXLElBQUksS0FBSyxJQUFJLE1BQVEsWUFBWTtBQUNsRCxTQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSztBQUFBLEVBQ3RDO0FBQUE7QUFBQSxFQUdBLHNCQUFzQixPQUF5QjtBQUM3QyxVQUFNLE9BQU8saUJBQWlCLFFBQVE7QUFDdEMsVUFBTSxXQUFXLEtBQUssSUFBSSxLQUFLLGVBQWUsS0FBSyxLQUFLO0FBQ3hELFdBQU8sTUFBTTtBQUFBLE1BQUssRUFBRSxRQUFRLFNBQVM7QUFBQSxNQUFHLENBQUMsR0FBRyxTQUN6QyxPQUFPLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVTtBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUFBLEVBRUEsT0FBTyxPQUFlLE9BQTZCO0FBQ2pELFVBQU0sT0FBTyxpQkFBaUIsUUFBUTtBQUN0QyxVQUFNLFNBQXVCLENBQUM7QUFDOUIsYUFBUyxRQUFRLEdBQUcsUUFBUSxLQUFLLE9BQU8sU0FBUztBQUMvQyxZQUFNLE1BQU0sS0FBSyxNQUFNLFFBQVEsS0FBSyxhQUFhO0FBQ2pELFlBQU0sV0FBVyxLQUFLLElBQUksS0FBSyxlQUFlLEtBQUssUUFBUSxNQUFNLEtBQUssYUFBYTtBQUNuRixZQUFNLFNBQVMsUUFBUSxLQUFLO0FBQzVCLGFBQU8sS0FBSztBQUFBLFFBQ1YsR0FBRyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVU7QUFBQSxRQUMzRCxHQUFHLFFBQVEsTUFBTSxLQUFLLFVBQVU7QUFBQSxRQUNoQztBQUFBLFFBQ0E7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFDRjs7O0FDekVPLElBQU0sc0JBQU4sTUFBMEI7QUFBQSxFQUMvQixTQUFTO0FBQUEsRUFFVCxlQUFxQjtBQUFBLEVBRXJCO0FBQUEsRUFFQSxhQUFtQjtBQUNqQixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsY0FBb0I7QUFDbEIsU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFDRjtBQVdPLFNBQVMsb0JBQ2QsU0FDQSxZQUNBLGVBQ0EsZ0JBQWdCLEdBQ1I7QUFDUixNQUFJLENBQUMsUUFBUSxPQUFRLFFBQU87QUFHNUIsUUFBTSxlQUFlLG9CQUFJLElBQTZCO0FBQ3RELGFBQVcsVUFBVSxTQUFTO0FBQzVCLFFBQUksT0FBTyxVQUFVLE9BQVc7QUFDaEMsVUFBTSxNQUFNLGFBQWEsSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDO0FBQy9DLFFBQUksS0FBSyxNQUFNO0FBQ2YsaUJBQWEsSUFBSSxPQUFPLE9BQU8sR0FBRztBQUFBLEVBQ3BDO0FBQ0EsUUFBTSxXQUFXLGFBQWEsT0FDMUIsQ0FBQyxHQUFHLGFBQWEsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sVUFDckMsS0FBSyxJQUFJLEdBQUcsTUFBTSxJQUFJLE9BQUssRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksT0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUN2RSxRQUFRLE9BQU8sT0FBSyxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxHQUFHLFFBQVEsSUFBSSxPQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBTTlFLFFBQU0sT0FBTyxjQUFjLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFELE1BQUksYUFBYTtBQUNqQixNQUFJLFdBQVc7QUFFZixhQUFXLFNBQVMsVUFBVTtBQUM1QixlQUFXLGFBQWEsTUFBTTtBQUc1QixZQUFNLGtCQUFrQixNQUFNLElBQUksYUFBYTtBQUMvQyxZQUFNLE9BQU8sS0FBSyxJQUFJLGtCQUFrQixhQUFhO0FBQ3JELFVBQUksT0FBTyxVQUFVO0FBQ25CLG1CQUFXO0FBQ1gscUJBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxTQUFPO0FBQ1Q7OztBQzdETyxJQUFNLHFCQUErQztBQUFBLEVBQzFELGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFDakI7QUF1Qk8sU0FBUyx1QkFBdUIsT0FBZSxTQUF5QjtBQUM3RSxRQUFNLFVBQVUsUUFBUTtBQUN4QixTQUFPLFdBQVcsVUFBVSxXQUFXO0FBQ3pDO0FBRU8sU0FBUyxtQkFBbUIsT0FBb0IsUUFBc0M7QUFDM0YsUUFBTSxNQUFNLFlBQVksa0JBQWtCLEdBQUcsT0FBTyxXQUFXLE1BQU0sT0FBTyxZQUFZLEVBQUU7QUFDNUY7QUFPTyxJQUFNLGtDQUE0RDtBQUFBLEVBQ3ZFLFFBQVE7QUFBQSxFQUNSLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWDtBQUVPLFNBQVMsdUJBQ2QsWUFDQSxRQUNBLFFBQ0EsVUFDQSxVQUNnQjtBQUNoQixRQUFNLGVBQWUsOEJBQThCLFVBQVUsUUFBUTtBQUVyRSxRQUFNLHNCQUFzQixXQUFXLElBQUksZUFBYTtBQUN0RCxRQUFJLFVBQVUsVUFBVSxRQUFRO0FBQzlCLFlBQU1DLFlBQVcsVUFBVSxZQUFZO0FBQ3ZDLFlBQU0sYUFBYSxVQUFVLFVBQVUsVUFBVTtBQUNqRCxZQUFNLGFBQWEsQ0FBQyxLQUFLLElBQUlBLFNBQVE7QUFDckMsWUFBTSxhQUFhLEtBQUssSUFBSUEsU0FBUTtBQUNwQyxZQUFNLFFBQVEsYUFBYSxVQUFVLElBQUksYUFBYSxZQUFZLFVBQVUsSUFBSSxhQUFhLFVBQVU7QUFDdkcsWUFBTSxNQUFNLGFBQWEsVUFBVSxJQUFJLGFBQWEsWUFBWSxVQUFVLElBQUksYUFBYSxVQUFVO0FBQ3JHLFlBQU0sS0FBSyxJQUFJLElBQUksTUFBTTtBQUN6QixZQUFNLEtBQUssSUFBSSxJQUFJLE1BQU07QUFDekIsWUFBTSxTQUFTLE1BQU0sUUFBUSxJQUFJLFNBQVM7QUFDMUMsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsSUFBSSxNQUFNLElBQUksSUFBSSxLQUFLO0FBQUEsUUFDdkIsSUFBSSxNQUFNLElBQUksSUFBSSxLQUFLO0FBQUEsUUFDdkIsT0FBTyxVQUFVLFFBQVE7QUFBQSxRQUN6QixRQUFRLEtBQUssTUFBTSxJQUFJLEVBQUUsSUFBSTtBQUFBLFFBQzdCLFVBQVUsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDOUI7QUFBQSxJQUNGO0FBRUEsVUFBTSxRQUFRLGFBQWEsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUNuRCxVQUFNLFFBQVEsVUFBVSxRQUFRLE1BQU07QUFDdEMsVUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFNBQVMsTUFBTTtBQUM3RCxRQUFJLFdBQVcsVUFBVTtBQUN6QixRQUFJLGFBQWEsUUFBVztBQUMxQixZQUFNLGFBQWEsS0FBSyxJQUFJLFVBQVUsVUFBVSxVQUFVLE9BQU8sVUFBVSxPQUFPLENBQUM7QUFDbkYsWUFBTSxhQUFhLENBQUMsS0FBSyxJQUFJLFFBQVE7QUFDckMsWUFBTSxhQUFhLEtBQUssSUFBSSxRQUFRO0FBQ3BDLFlBQU0sTUFBTSxhQUFhLFVBQVUsSUFBSSxhQUFhLFlBQVksVUFBVSxJQUFJLGFBQWEsVUFBVTtBQUNyRyxpQkFBVyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO0FBQUEsSUFDeEQ7QUFDQSxXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFFRCxRQUFNLGtCQUFrQixPQUNyQixJQUFJLFdBQVM7QUFDWixVQUFNLFFBQVEsYUFBYSxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNDLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILEdBQUcsTUFBTTtBQUFBLE1BQ1QsR0FBRyxNQUFNO0FBQUEsTUFDVCxNQUFNLE1BQU0sT0FBTyxNQUFNO0FBQUEsTUFDekIsSUFBSSxNQUFNLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFBQSxJQUNwQztBQUFBLEVBQ0YsQ0FBQyxFQUNBLEtBQUssQ0FBQyxHQUFHLE9BQVEsRUFBRSxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUc7QUFFM0MsUUFBTSxrQkFBa0IsT0FBTyxJQUFJLFdBQVM7QUFDMUMsVUFBTSxRQUFRLGFBQWEsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQyxXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1QsTUFBTSxNQUFNLE9BQU8sTUFBTTtBQUFBLElBQzNCO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTyxFQUFFLFlBQVkscUJBQXFCLFFBQVEsaUJBQWlCLFFBQVEsZ0JBQWdCO0FBQzdGO0FBRU8sU0FBUyx1QkFDZCxHQUNBLEdBQ0EsVUFDQSxVQUN3RDtBQUN4RCxTQUFPLDhCQUE4QixVQUFVLFFBQVEsRUFBRSxHQUFHLENBQUM7QUFDL0Q7QUFFQSxTQUFTLDhCQUE4QixVQUFvQyxVQUE4QjtBQUN2RyxRQUFNLFVBQVUsU0FBUyxRQUFRO0FBQ2pDLFFBQU0sU0FBUyxTQUFTLFVBQVU7QUFDbEMsUUFBTSxRQUFRLFNBQVMsbUJBQW1CLEtBQUssS0FBSztBQUNwRCxRQUFNLE1BQU0sS0FBSyxJQUFJLEtBQUs7QUFDMUIsUUFBTSxNQUFNLEtBQUssSUFBSSxLQUFLO0FBQzFCLFFBQU0sY0FBYyxTQUFTLFNBQVMsU0FBUztBQUMvQyxRQUFNLFdBQVcsU0FBUyxTQUFTLFNBQVM7QUFDNUMsUUFBTSxXQUFXO0FBRWpCLFNBQU8sQ0FBQyxHQUFXLE1BQXNFO0FBQ3ZGLFVBQU0sU0FBUyxJQUFJO0FBQ25CLFVBQU0sU0FBUyxTQUFTLFVBQVUsSUFBSSxTQUFTO0FBQy9DLFVBQU0sWUFBWSxDQUFDLFNBQVM7QUFDNUIsVUFBTSxVQUFVLFlBQVksTUFBTSxTQUFTO0FBQzNDLFVBQU0sVUFBVSxLQUFLLElBQUksVUFBVSxTQUFTLE1BQU0sWUFBWSxHQUFHO0FBQ2pFLFVBQU0sUUFBUSxjQUFjO0FBQzVCLFdBQU87QUFBQSxNQUNMLEdBQUcsVUFBVSxTQUFTO0FBQUEsTUFDdEIsR0FBRyxXQUFXLFVBQVU7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7OztBQzVLTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixRQUFRLGFBQWEsZUFBZTtBQUFBLEVBQ3BDLE9BQU8sYUFBYSxZQUFZO0FBQUEsRUFDaEMsWUFBWSxhQUFhLGVBQWU7QUFBQSxFQUN4QyxXQUFXLGFBQWEsYUFBYTtBQUN2QztBQWtCTyxJQUFNLHNCQUFzQixDQUFDLE9BQXVCLEdBQVcsR0FBVyxNQUFjLFlBQW1DLENBQUMsT0FDaEksRUFBRSxHQUFHLE1BQU0sZUFBZSxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUs7QUFFN0MsSUFBTSxhQUFhLENBQUMsTUFBYyxVQUFzQyxVQUFrQixTQUFTLE9BQ3ZHLEVBQUUsTUFBTSxVQUFVLFVBQVUsUUFBUSxZQUFZLHdCQUF3QixZQUFZLElBQUk7OztBQzFCM0YsSUFBTSxtQkFBbUIsQ0FBQyxZQUE0QixVQUFVLEtBQUssS0FBSztBQUMxRSxJQUFNLHdCQUF3QjtBQUFBLEVBQzVCLFdBQVcsaUJBQWlCLEdBQUc7QUFBQSxFQUMvQixXQUFXLGlCQUFpQixFQUFFO0FBQUEsRUFDOUIsV0FBVyxpQkFBaUIsQ0FBQztBQUMvQjtBQUNBLElBQU0sbUJBQW1CLENBQUMsY0FBZ0Q7QUFDeEUsUUFBTSxTQUFTLEtBQUssTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUs7QUFDdkQsU0FBTyxLQUFLLE1BQU0sVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksTUFBTTtBQUMvRDtBQWlCTyxTQUFTLGlCQUFpQixNQUF1QixTQUE4RDtBQUNwSCxVQUFRLE1BQU07QUFBQSxJQUNaLEtBQUssaUJBQWlCO0FBQ3BCLGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFdBQVcsc0JBQXNCLFlBQVksS0FBSyxJQUFJLFFBQVEsTUFBTSxPQUFPLFFBQVEsU0FBUyxFQUFFLElBQUk7QUFBQSxRQUNsRyxXQUFXLHNCQUFzQixhQUFhLFFBQVEsU0FBUyxpQkFBaUIsUUFBUSxNQUFNLElBQUk7QUFBQSxNQUNwRztBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFDSCxhQUFPO0FBQUEsUUFDTCxXQUFXLEtBQUssSUFBSSxRQUFRLE1BQU0sT0FBTyxRQUFRLFNBQVMsRUFBRSxJQUFJO0FBQUEsTUFDbEU7QUFBQSxJQUNGLEtBQUs7QUFDSCxhQUFPLENBQUM7QUFBQSxFQUNaO0FBQ0Y7QUFFTyxTQUFTLHNCQUFzQixPQUFlLFFBQWdCLFNBQWlCLFFBQXFDO0FBQ3pILFNBQU8sRUFBRSxPQUFPLFFBQVEsU0FBUyxPQUFPO0FBQzFDO0FBRU8sU0FBUyxrQkFDZCxRQUNBLFVBQ0EsR0FDQSxHQUNBLEtBQ0EsUUFBUSxHQUNvQjtBQUM1QixTQUFPLGlCQUFpQixpQkFBaUI7QUFBQSxJQUN2QztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUFBLEVBQ3hCLENBQUM7QUFDSDtBQUVPLFNBQVMsaUJBQ2QsUUFDQSxVQUNBLEdBQ0EsR0FDQSxLQUNBLFFBQVEsR0FDb0I7QUFDNUIsU0FBTyxpQkFBaUIscUJBQXFCO0FBQUEsSUFDM0M7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRU8sU0FBUyxxQkFDZCxRQUNBLFVBQ0EsR0FDQSxHQUNBLEtBQzRCO0FBQzVCLFNBQU8saUJBQWlCLG1CQUFtQjtBQUFBLElBQ3pDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QUM5Qk8sSUFBTSxnQkFBTixNQUFvQjtBQUFBLEVBQ2hCLGNBQStCLENBQUM7QUFBQSxFQUNoQyxVQUF1QixDQUFDO0FBQUEsRUFDekIsbUJBQXNDLENBQUM7QUFBQSxFQUN2QyxXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFFdkIsUUFBYztBQUNaLFNBQUssWUFBWSxTQUFTO0FBQzFCLFNBQUssUUFBUSxTQUFTO0FBQ3RCLFNBQUssaUJBQWlCLFNBQVM7QUFBQSxFQUNqQztBQUFBLEVBRUEsS0FBSyxLQUFnQkMsUUFBaUIsTUFBYyxTQUE4QyxLQUFhLFFBQVEsR0FBUztBQUM5SCxhQUFTLGFBQWEsR0FBRyxhQUFhQSxPQUFNLFlBQVksY0FBYztBQUNwRSxXQUFLLGlCQUFpQixLQUFLO0FBQUEsUUFDekIsU0FBUyxNQUFNLGFBQWFBLE9BQU07QUFBQSxRQUNsQztBQUFBLFFBQUssT0FBQUE7QUFBQSxRQUFPO0FBQUEsUUFBTSxTQUFTLFFBQVEsSUFBSSxhQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUU7QUFBQSxRQUFHO0FBQUEsTUFDckUsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFFQSxhQUFhLEtBQXFCO0FBQ2hDLFFBQUksUUFBUTtBQUNaLFVBQU0sTUFBTSxLQUFLLGlCQUFpQixPQUFPLFlBQVUsT0FBTyxXQUFXLEdBQUc7QUFDeEUsU0FBSyxtQkFBbUIsS0FBSyxpQkFBaUIsT0FBTyxZQUFVLE9BQU8sVUFBVSxHQUFHO0FBQ25GLGVBQVcsVUFBVSxLQUFLO0FBQ3hCLFdBQUssWUFBWSxRQUFRLEdBQUc7QUFDNUI7QUFBQSxJQUNGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLGtCQUNFLE9BQ0EsS0FDQSxTQUNBLFFBQ0EsT0FDTTtBQUNOLGVBQVcsY0FBYyxDQUFDLEdBQUcsS0FBSyxXQUFXLEdBQUc7QUFDOUMsaUJBQVcsS0FBSyxXQUFXLEtBQUs7QUFDaEMsaUJBQVcsS0FBSyxXQUFXLEtBQUs7QUFDaEMsVUFBSSxXQUFXLElBQUksT0FBTyxPQUFPLFdBQVcsS0FBSyxPQUFPLFFBQVEsY0FBYyxXQUFXLEtBQUssT0FBTyxTQUFTLFdBQVc7QUFDdkgsYUFBSyxpQkFBaUIsVUFBVTtBQUNoQztBQUFBLE1BQ0Y7QUFDQSxpQkFBVyxVQUFVLFNBQVM7QUFDNUIsWUFBSSxPQUFPLFNBQVMsV0FBVyxTQUFTLE9BQU8sUUFBUSxXQUFXLFlBQVksSUFBSSxPQUFPLEVBQUUsRUFBRztBQUM5RixjQUFNLEtBQUssV0FBVyxJQUFJLE9BQU87QUFDakMsY0FBTSxLQUFLLFdBQVcsSUFBSSxPQUFPO0FBQ2pDLGNBQU0sWUFBWSxXQUFXLFNBQVMsT0FBTztBQUM3QyxZQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxVQUFXO0FBQy9DLG1CQUFXLFlBQVksSUFBSSxPQUFPLEVBQUU7QUFDcEMsZUFBTyxVQUFVLFdBQVc7QUFDNUIsZUFBTyxLQUFLLFdBQVc7QUFDdkIsYUFBSyxRQUFRLEtBQUs7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixPQUFPLFdBQVc7QUFBQSxVQUNsQixHQUFHLFdBQVc7QUFBQSxVQUFHLEdBQUcsV0FBVztBQUFBLFVBQy9CLE9BQU8sV0FBVztBQUFBLFVBQU8sZ0JBQWdCLFdBQVc7QUFBQSxVQUNwRCxRQUFRLFdBQVcsU0FBUyxXQUFXLGdCQUFnQjtBQUFBLFVBQ3ZELFdBQVcsTUFBTSxXQUFXO0FBQUEsVUFDNUIsVUFBVSxXQUFXO0FBQUEsVUFDckIsTUFBTSxXQUFXO0FBQUEsUUFDbkIsQ0FBQztBQUNELGNBQU0sWUFBWSxNQUFNO0FBQ3hCLFlBQUksV0FBVyxrQkFBa0IsRUFBRyxZQUFXO0FBQUEsWUFDMUMsTUFBSyxpQkFBaUIsVUFBVTtBQUNyQyxZQUFJLENBQUMsS0FBSyxZQUFZLFNBQVMsVUFBVSxFQUFHO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQ0EsZUFBVyxVQUFVLENBQUMsR0FBRyxLQUFLLE9BQU8sR0FBRztBQUN0QyxVQUFJLE9BQU8sYUFBYSxJQUFLLE1BQUssUUFBUSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQUEsSUFDbEY7QUFBQSxFQUNGO0FBQUEsRUFFQSx1QkFBd0M7QUFDdEMsV0FBTyxLQUFLLFlBQVksUUFBUSxnQkFBYyxJQUFJLGVBQWU7QUFBQSxNQUMvRCxHQUFHLFdBQVc7QUFBQSxNQUFHLEdBQUcsV0FBVztBQUFBLE1BQy9CLFdBQVcsV0FBVztBQUFBLE1BQUksV0FBVyxXQUFXO0FBQUEsTUFDaEQsUUFBUSxXQUFXO0FBQUEsTUFDbkIsUUFBUSxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQ3ZDLGFBQWEsV0FBVztBQUFBLE1BQ3hCLFlBQVksS0FBSyxJQUFJLFdBQVcsU0FBUyxXQUFXLGlCQUFpQixHQUFHO0FBQUEsTUFDeEUsT0FBTyxXQUFXO0FBQUEsTUFDbEIsWUFBWSxXQUFXO0FBQUEsTUFDdkIsV0FBVyxXQUFXO0FBQUEsTUFDdEIsT0FBTyxXQUFXO0FBQUEsTUFDbEIsV0FBVyxXQUFXLG1CQUFtQixXQUFXLFNBQVMsT0FBTztBQUFBLE1BQ3BFLE1BQU0sV0FBVyxTQUFTLE1BQU07QUFBQSxJQUNsQyxDQUFDLEVBQUUsV0FBVyxDQUFDO0FBQUEsRUFDakI7QUFBQSxFQUVRLFlBQVksUUFBeUIsS0FBbUI7QUFDOUQsVUFBTSxFQUFFLEtBQUssT0FBQUEsUUFBTyxNQUFNLFNBQVMsTUFBTSxJQUFJO0FBQzdDLGVBQVcsVUFBVSxTQUFTO0FBQzVCLFlBQU0sUUFBUSxLQUFLLElBQUksR0FBR0EsT0FBTSxlQUFlO0FBQy9DLGVBQVMsUUFBUSxHQUFHLFFBQVEsT0FBTyxTQUFTO0FBQzFDLGNBQU0sZUFBZSxVQUFVLElBQUksS0FBSyxTQUFTLFFBQVEsS0FBSyxPQUFNQSxPQUFNO0FBQzFFLGNBQU0sUUFBUSxlQUFlLEtBQUssS0FBSztBQUN2QyxjQUFNLFFBQVFBLE9BQU0sa0JBQWtCO0FBQ3RDLGFBQUs7QUFDTCxhQUFLLFlBQVksS0FBSztBQUFBLFVBQ3BCLElBQUksRUFBRSxLQUFLO0FBQUEsVUFBVTtBQUFBLFVBQ3JCLEdBQUcsT0FBTyxLQUFLLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLGVBQWUsbUJBQW1CO0FBQUEsVUFDOUUsR0FBRyxPQUFPO0FBQUEsVUFDVixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUk7QUFBQSxVQUN0QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSTtBQUFBLFVBQ3ZCLFFBQVFBLE9BQU0sbUJBQW1CO0FBQUEsVUFDakMsUUFBUUEsT0FBTTtBQUFBLFVBQ2QsaUJBQWlCQSxPQUFNO0FBQUEsVUFDdkIsT0FBTyxZQUFZLElBQUksZUFBZSxlQUFlO0FBQUEsVUFDckQsWUFBWSxZQUFZLElBQUksZUFBZSxVQUFVO0FBQUEsVUFDckQsV0FBVyxZQUFZLElBQUksZUFBZSxTQUFTO0FBQUEsVUFDbkQsUUFBUSxJQUFJLGVBQWU7QUFBQSxVQUMzQixpQkFBaUIsSUFBSSxlQUFlO0FBQUEsVUFDcEMsaUJBQWlCLElBQUksZUFBZTtBQUFBLFVBQ3BDLE9BQU8sSUFBSSxlQUFlO0FBQUEsVUFDMUIsY0FBYyxJQUFJLGVBQWU7QUFBQSxVQUNqQyxrQkFBa0IsSUFBSSxlQUFlO0FBQUEsVUFDckMsYUFBYUEsT0FBTSxjQUFjO0FBQUEsVUFDakMsUUFBUUEsT0FBTSxxQkFBcUIsS0FBSyxLQUFLLGVBQWVBLE9BQU0sdUJBQXVCO0FBQUEsVUFDekYsV0FBV0EsT0FBTSxZQUFZO0FBQUEsVUFDN0IsZUFBZUEsT0FBTTtBQUFBLFVBQ3JCLGFBQWEsb0JBQUksSUFBSTtBQUFBLFFBQ3ZCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUNBLFNBQUssUUFBUSxLQUFLO0FBQUEsTUFDaEIsTUFBTTtBQUFBLE1BQVUsT0FBTyxJQUFJLGVBQWU7QUFBQSxNQUMxQyxHQUFHLFFBQVEsT0FBTyxDQUFDLEtBQUssV0FBVyxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksUUFBUTtBQUFBLE1BQ2hFLEdBQUcsUUFBUSxDQUFDLEdBQUcsS0FBSztBQUFBLE1BQ3BCLE9BQU8sWUFBWSxJQUFJLGVBQWUsZUFBZTtBQUFBLE1BQ3JELGdCQUFnQixZQUFZLElBQUksZUFBZSxVQUFVO0FBQUEsTUFDekQsUUFBUSxLQUFLQSxPQUFNLG1CQUFtQjtBQUFBLE1BQ3RDLFdBQVcsTUFBTSxJQUFJLGVBQWU7QUFBQSxNQUNwQyxVQUFVLElBQUksZUFBZTtBQUFBLE1BQzdCLE1BQU0sS0FBSztBQUFBLElBQ2IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVRLGlCQUFpQixZQUFpQztBQUN4RCxVQUFNLFFBQVEsS0FBSyxZQUFZLFFBQVEsVUFBVTtBQUNqRCxRQUFJLFNBQVMsRUFBRyxNQUFLLFlBQVksT0FBTyxPQUFPLENBQUM7QUFBQSxFQUNsRDtBQUNGOzs7QUNuTk8sSUFBTSx3QkFBNkQ7QUFBQSxFQUN4RSxVQUFVO0FBQUEsSUFDUixpQkFBaUI7QUFBQSxJQUNqQixrQkFBa0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsaUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGlCQUFpQjtBQUFBLElBQ2pCLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixpQkFBaUI7QUFBQSxJQUNqQixrQkFBa0I7QUFBQSxFQUNwQjtBQUNGOzs7QUNTQSxJQUFNLHNCQUE2QztBQUFBLEVBQ2pELE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLFNBQVM7QUFBQSxFQUNULG1CQUFtQjtBQUFBLEVBQ25CLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLFlBQVk7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLElBQ2hCLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxJQUNiLGdCQUFnQjtBQUFBLEVBQ2xCO0FBQ0Y7QUFFQSxJQUFNLHFCQUE0QztBQUFBLEVBQ2hELEdBQUc7QUFBQSxFQUNILE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUjtBQUVBLElBQU0sa0JBQXlDO0FBQUEsRUFDN0MsR0FBRztBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUNSO0FBRU8sSUFBTSxvQkFBb0U7QUFBQSxFQUMvRSxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixNQUFNO0FBQ1I7QUFFTyxTQUFTLGtCQUFrQixXQUFvQztBQUNwRSxRQUFNLFdBQVcsa0JBQWtCLFNBQVMsRUFBRTtBQUM5QyxTQUFPLFNBQVMsZUFBZSxTQUFTLGlCQUFpQixTQUFTO0FBQ3BFO0FBRU8sU0FBUyxzQkFBc0IsU0FNWjtBQUN4QixTQUFPO0FBQUEsSUFDTCxXQUFXLFFBQVE7QUFBQSxJQUNuQixHQUFHLFFBQVE7QUFBQSxJQUNYLEdBQUcsUUFBUTtBQUFBLElBQ1gsT0FBTyxRQUFRO0FBQUEsSUFDZixNQUFNLFFBQVEsUUFBUSxLQUFLLE9BQU8sSUFBSTtBQUFBLElBQ3RDLEtBQUs7QUFBQSxFQUNQO0FBQ0Y7QUFFTyxTQUFTLHVCQUF1QixTQUFrQyxjQUE0QjtBQUNuRyxXQUFTLFFBQVEsUUFBUSxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDeEQsVUFBTSxTQUFTLFFBQVEsS0FBSztBQUM1QixXQUFPLE9BQU87QUFDZCxRQUFJLE9BQU8sT0FBTyxrQkFBa0IsT0FBTyxTQUFTLEVBQUcsU0FBUSxPQUFPLE9BQU8sQ0FBQztBQUFBLEVBQ2hGO0FBQ0Y7QUFFTyxTQUFTLGVBQWUsUUFBc0Q7QUFDbkYsUUFBTSxVQUFVLGtCQUFrQixPQUFPLFNBQVM7QUFDbEQsTUFBSSxDQUFDLFFBQVEsT0FBTztBQUNsQixXQUFPO0FBQUEsTUFDTCxPQUFPLE9BQU87QUFBQSxNQUNkLFdBQVcsT0FBTztBQUFBLE1BQ2xCLEdBQUcsT0FBTztBQUFBLE1BQ1YsR0FBRyxPQUFPO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxpQkFBaUIsa0JBQWtCLE9BQU8sU0FBUztBQUFBLE1BQ25ELG1CQUFtQjtBQUFBLE1BQ25CLE1BQU0sT0FBTztBQUFBLE1BQ2IsS0FBSyxPQUFPO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFdBQVcsUUFBUTtBQUN6QixRQUFNLFdBQVcsa0JBQWtCLE9BQU8sU0FBUztBQUNuRCxRQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsT0FBTyxNQUFNLEtBQUssSUFBSSxNQUFNLFNBQVMsWUFBWSxDQUFDO0FBQzdFLFFBQU0sWUFBWSxTQUFTLGVBQWUsU0FBUztBQUNuRCxRQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLGFBQWEsS0FBSyxJQUFJLE1BQU0sU0FBUyxXQUFXLENBQUMsQ0FBQztBQUN0RyxRQUFNLFVBQVUsT0FBTyxPQUFPLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTSxZQUFZLFNBQVMsZUFBZTtBQUN4RyxRQUFNLGFBQWEsSUFBSSxLQUFLLElBQUksU0FBUyxLQUFLLEVBQUUsSUFBSSxTQUFTO0FBQzdELFFBQU0sYUFBYSxJQUFJLFFBQVE7QUFDL0IsUUFBTSxjQUFjLElBQUksUUFBUSxTQUFTLGlCQUFpQjtBQUMxRCxTQUFPO0FBQUEsSUFDTCxPQUFPLE9BQU87QUFBQSxJQUNkLFdBQVcseUJBQXlCLE9BQU8sS0FBSztBQUFBLElBQ2hELEdBQUcsT0FBTztBQUFBLElBQ1YsR0FBRyxPQUFPO0FBQUEsSUFDVixNQUFNLFFBQVEsUUFBUSxPQUFNLFNBQVM7QUFBQSxJQUNyQyxRQUFRLFFBQVE7QUFBQSxJQUNoQixZQUFZLFFBQVE7QUFBQSxJQUNwQixPQUFPLFFBQVEsUUFBUSxLQUFLLGFBQWEsVUFBVSxhQUFhO0FBQUEsSUFDaEUsZ0JBQWdCLFFBQVEsaUJBQWlCLE1BQU0sSUFBSSxTQUFTLGNBQWMsSUFBSSxVQUFVO0FBQUEsSUFDeEYsZUFBZSxRQUFRLGdCQUFnQixNQUFNLElBQUksUUFBUSxTQUFTLGlCQUFpQjtBQUFBLElBQ25GLFVBQVUsUUFBUSxXQUFXLE1BQU0sT0FBTyxNQUFNLFlBQVksSUFBSSxJQUFJLFFBQVE7QUFBQSxJQUM1RSxpQkFBaUI7QUFBQSxJQUNqQixtQkFBbUI7QUFBQSxJQUNuQixRQUFRLFFBQVEsVUFBVTtBQUFBLElBQzFCLFFBQVEsUUFBUSxVQUFVO0FBQUEsSUFDMUIsTUFBTSxPQUFPO0FBQUEsSUFDYixLQUFLLEtBQUssSUFBSSxPQUFPLEtBQUssUUFBUTtBQUFBLEVBQ3BDO0FBQ0Y7OztBQzVITyxTQUFTLGlCQUFpQixTQUFnQztBQUMvRCxRQUFNLGFBQWEsVUFBVSxRQUFRLE9BQU87QUFDNUMsUUFBTSxRQUFRLGFBQWEsV0FBVyxPQUFPO0FBQzdDLE1BQUksQ0FBQyxNQUFPLE9BQU0sSUFBSSxNQUFNLFVBQVUsT0FBTyxxQ0FBcUMsV0FBVyxPQUFPLElBQUk7QUFDeEcsUUFBTSxXQUFXLHNCQUFzQixPQUFPO0FBQzlDLFFBQU0sUUFBUSxJQUFJLGVBQWU7QUFBQSxJQUMvQjtBQUFBLElBQ0EsT0FBTyxZQUFZLFdBQVcsU0FBUztBQUFBLElBQ3ZDLGtCQUFrQixTQUFTO0FBQUEsSUFDM0IsbUJBQW1CLFNBQVM7QUFBQSxFQUM5QixDQUFDO0FBQ0QsU0FBTyxNQUFNLE1BQU0sU0FBUyxpQkFBaUIsU0FBUyxnQkFBZ0I7QUFDeEU7QUFFTyxTQUFTLHVCQUF1QixTQU1OO0FBQy9CLFFBQU0sYUFBYSxVQUFVLFFBQVEsUUFBUSxPQUFPO0FBQ3BELE1BQUksV0FBVyxnQkFBZ0IsUUFBUyxRQUFPO0FBQy9DLFNBQU8sc0JBQXNCO0FBQUEsSUFDM0IsV0FBVyxRQUFRO0FBQUEsSUFDbkIsR0FBRyxRQUFRO0FBQUEsSUFDWCxHQUFHLFFBQVE7QUFBQSxJQUNYLE9BQU8sUUFBUTtBQUFBLElBQ2YsTUFBTSxRQUFRO0FBQUEsRUFDaEIsQ0FBQztBQUNIO0FBRU8sU0FBUyxrQkFBa0IsT0FBdUIsWUFBNkI7QUFDcEYsUUFBTSxtQkFBbUIsV0FBVztBQUNwQyxRQUFNLCtCQUFpQztBQUN6QztBQWNPLFNBQVMsWUFDZCxPQUNBLFNBQ0EsUUFBZ0IsWUFBWSxVQUFVLFFBQVEsTUFBTSxPQUFPLEVBQUUsU0FBUyxHQUMzRDtBQUNYLFFBQU0sYUFBYSxVQUFVLFFBQVEsTUFBTSxPQUFPO0FBQ2xELFFBQU0sUUFBUTtBQUNkLE1BQUksQ0FBQyxNQUFNLG1CQUFtQjtBQUM1QixVQUFNLG9CQUFvQjtBQUMxQixVQUFNLFNBQVMsdUJBQXVCO0FBQUEsTUFDcEMsU0FBUyxNQUFNO0FBQUEsTUFDZixHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1Q7QUFBQSxNQUNBLE1BQU0sTUFBTTtBQUFBLElBQ2QsQ0FBQztBQUNELFFBQUksT0FBUSxTQUFRLEtBQUssTUFBTTtBQUFBLEVBQ2pDO0FBQ0Esb0JBQWtCLE1BQU0sT0FBTyxVQUFVO0FBQ3pDLFNBQU87QUFDVDtBQUVPLFNBQVMsbUJBQW1CLFNBT1k7QUFDN0MsUUFBTSxhQUFhLFVBQVUsUUFBUSxRQUFRLE1BQU0sT0FBTztBQUMxRCxNQUFJLFFBQVEsT0FBUSxTQUFRLE1BQU0sVUFBVSxRQUFRO0FBQ3BELE1BQUksUUFBUSxpQkFBaUI7QUFDM0IsWUFBUSxNQUFNLE1BQU0sT0FBTztBQUFBLE1BQ3pCLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsTUFDeEIsV0FBVyxRQUFRLGtCQUFrQixXQUFXO0FBQUEsSUFDbEQsQ0FBQztBQUFBLEVBQ0g7QUFDQSxNQUFJLFFBQVEsa0JBQWtCLE9BQVcsU0FBUSxNQUFNLGdCQUFnQixRQUFRO0FBQy9FLE1BQUksUUFBUSxNQUFNLFVBQVUsR0FBRztBQUM3QixXQUFPLEVBQUUsUUFBUSxNQUFNLFlBQVksWUFBWSxRQUFRLE9BQU8sUUFBUSxTQUFTLFFBQVEsS0FBSyxFQUFFO0FBQUEsRUFDaEc7QUFDQSxTQUFPLEVBQUUsUUFBUSxPQUFPLFdBQVc7QUFDckM7QUFFTyxTQUFTLHlCQUF5QixTQVFyQjtBQUNsQixRQUFNLFlBQVksUUFBUSxvQkFBb0IsVUFBVSxRQUFRLFNBQVM7QUFDekUsTUFBSSxRQUFRLGFBQWEsVUFBVyxRQUFPLENBQUM7QUFDNUMsUUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLFFBQVEsU0FBUyxRQUFRLFNBQVMsQ0FBQztBQUN6RSxRQUFNLElBQUksUUFBUTtBQUNsQixRQUFNLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ3hDLFFBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUNqQyxRQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsUUFBUSxLQUFLO0FBQ3hDLFNBQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxHQUFHLFFBQVE7QUFBQSxNQUNYO0FBQUEsTUFDQSxPQUFPO0FBQUEsTUFDUCxRQUFRLFFBQVE7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxVQUFVLEtBQUssS0FBSztBQUFBLElBQ3RCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsR0FBRyxPQUFPLFNBQVM7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsT0FBTztBQUFBLE1BQ1AsUUFBUSxLQUFLLElBQUksR0FBRyxNQUFNLElBQUk7QUFBQSxNQUM5QixPQUFPLFFBQVE7QUFBQSxNQUNmLGdCQUFnQixZQUFZO0FBQUEsTUFDNUIsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsVUFBVSxLQUFLLEtBQUs7QUFBQSxJQUN0QjtBQUFBLEVBQ0Y7QUFDRjtBQVlPLFNBQVMsa0NBQ2QsU0FDQSxnQkFDQSxVQUNpQjtBQUNqQixTQUFPLFFBQVEsUUFBUSxZQUFVO0FBQy9CLFVBQU0sYUFBYSxVQUFVLFFBQVEsT0FBTyxPQUFPO0FBQ25ELFVBQU0sUUFBUSx1QkFBdUIsT0FBTyxHQUFHLE9BQU8sR0FBRyxnQkFBZ0IsUUFBUTtBQUNqRixVQUFNLGdCQUFnQixPQUFPLE9BQU8sTUFBTTtBQUMxQyxVQUFNLFFBQVEsT0FBTyxTQUFTO0FBQzlCLFdBQU8seUJBQXlCO0FBQUEsTUFDOUIsR0FBRyxNQUFNO0FBQUEsTUFDVCxHQUFHLE1BQU0sSUFBSSxnQkFBZ0IsT0FBTTtBQUFBLE1BQ25DLE9BQU8sS0FBSyxJQUFJLGdCQUFnQixNQUFNLFdBQVcsU0FBUyxNQUFNLFFBQVEsTUFBTSxLQUFLO0FBQUEsTUFDbkYsUUFBUSxPQUFPO0FBQUEsTUFDZixXQUFXLE9BQU87QUFBQSxNQUNsQixPQUFPLFlBQVksV0FBVyxTQUFTO0FBQUEsSUFDekMsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNIOzs7QUNoTUEsSUFBTSxtQkFBbUIsb0JBQUksSUFBa0M7QUFFeEQsU0FBUywwQkFDZCxTQUNBLE9BQ0EsUUFDQSxRQUNpQjtBQUNqQixTQUFPLENBQUMsR0FBSSxzQkFBc0IsRUFBRSxTQUFTLE9BQU8sUUFBUSxPQUFPLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBRTtBQUN6RjtBQUVPLFNBQVMsNkJBQTZCLFNBQW9DO0FBQy9FLFFBQU0sT0FBTyxTQUFTO0FBQ3RCLFFBQU0sU0FBUztBQUNmLFFBQU0sY0FBYyxLQUFLLFFBQVEsTUFBTTtBQUN2QyxNQUFJLGVBQWUsRUFBRyxRQUFPLEdBQUcsS0FBSyxNQUFNLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixPQUFPO0FBRXRGLFFBQU0sWUFBWSxLQUFLLFlBQVksaUJBQWlCO0FBQ3BELE1BQUksYUFBYSxFQUFHLFFBQU8sR0FBRyxLQUFLLE1BQU0sR0FBRyxTQUFTLENBQUMscUJBQXFCLE9BQU87QUFFbEYsU0FBTyxvQkFBb0IsT0FBTztBQUNwQztBQUVPLFNBQVMsK0JBQStCLFNBQXNCLFNBQWtDO0FBQ3JHLFVBQVEsTUFBTSxxQkFBcUI7QUFDbkMsVUFBUSxNQUFNLGlCQUFpQjtBQUMvQixVQUFRLE1BQU0sbUJBQW1CO0FBRWpDLFFBQU0sT0FBTyw2QkFBNkIsT0FBTztBQUNqRCxRQUFNLFFBQVEsaUJBQWlCLElBQUksSUFBSTtBQUN2QyxNQUFJLFVBQVUsVUFBVTtBQUN0QixZQUFRLE1BQU0sa0JBQWtCLFFBQVEsSUFBSTtBQUM1QztBQUFBLEVBQ0Y7QUFFQSxVQUFRLE1BQU0sZUFBZSxrQkFBa0I7QUFDL0MsTUFBSSxNQUFPO0FBRVgsbUJBQWlCLElBQUksTUFBTSxTQUFTO0FBQ3BDLFFBQU0sUUFBUSxJQUFJLE1BQU07QUFDeEIsUUFBTSxTQUFTLE1BQU07QUFDbkIscUJBQWlCLElBQUksTUFBTSxRQUFRO0FBQ25DLFlBQVEsTUFBTSxrQkFBa0IsUUFBUSxJQUFJO0FBQUEsRUFDOUM7QUFDQSxRQUFNLFVBQVUsTUFBTTtBQUNwQixxQkFBaUIsSUFBSSxNQUFNLFNBQVM7QUFDcEMsWUFBUSxNQUFNLGVBQWUsa0JBQWtCO0FBQUEsRUFDakQ7QUFDQSxRQUFNLE1BQU07QUFDZDs7O0FDaEJBLElBQU0sU0FBUyxTQUFTLGNBQWlDLGNBQWM7QUFDdkUsSUFBTSxRQUFRLFNBQVMsY0FBMkIsUUFBUTtBQUMxRCxJQUFNLFlBQVksU0FBUyxjQUFpQyxhQUFhO0FBQ3pFLElBQU0sY0FBYyxTQUFTLGNBQWlDLGVBQWU7QUFDN0UsSUFBTSxjQUFjLFNBQVMsY0FBaUMsZUFBZTtBQUM3RSxJQUFNLGdCQUFnQixTQUFTLGNBQTJCLGlCQUFpQjtBQUMzRSxJQUFNLGVBQWUsU0FBUyxjQUEyQixnQkFBZ0I7QUFDekUsSUFBTSxjQUFjLFNBQVMsY0FBMkIsZUFBZTtBQUN2RSxJQUFNLGdCQUFnQixTQUFTLGNBQWdDLGlCQUFpQjtBQUNoRixJQUFNLGdCQUFnQixTQUFTLGNBQWlDLGlCQUFpQjtBQUNqRixJQUFNLFlBQVksU0FBUyxjQUFnQyxhQUFhO0FBQ3hFLElBQU0sY0FBYyxTQUFTLGNBQTJCLE9BQU87QUFDL0QsbUJBQW1CLGFBQWEsa0JBQWtCO0FBQ2xELCtCQUErQixhQUFhLFVBQVU7QUFDdEQsSUFBTSxVQUFVLENBQUMsT0FBdUIscUJBQXFCLEVBQUU7QUFDL0QsSUFBTSxVQUFVLENBQUMsT0FBcUIsT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFLENBQUM7QUFDeEUsSUFBTSxpQkFBaUIsQ0FBQyxJQUFZLGlCQUErQixPQUFPLFdBQVcsWUFBWSxRQUFRLEVBQUUsR0FBRyxZQUFZO0FBRTFILElBQUk7QUFDRixRQUFNLFdBQVcsTUFBTSx5QkFBeUIsT0FBTyxRQUFRLG1CQUFtQixjQUFjLG1CQUFtQixhQUFhO0FBQ2hJLFFBQU0sT0FBa0MsVUFBVTtBQUNsRCxRQUFNLFVBQW1CLENBQUM7QUFDMUIsUUFBTSxnQkFBZ0IsSUFBSSxjQUFjO0FBQ3hDLFFBQU0sY0FBYyxjQUFjO0FBQ2xDLFFBQU0sVUFBb0IsQ0FBQztBQUMzQixRQUFNLFVBQVUsY0FBYztBQUM5QixRQUFNLG1CQUE0QyxDQUFDO0FBQ25ELFFBQU0sY0FBa0MsQ0FBQztBQUN6QyxRQUFNLFFBQVEsSUFBSSxXQUFXO0FBQzdCLE1BQUksYUFBYTtBQUNqQixRQUFNLGFBQWEsSUFBSSxvQkFBb0I7QUFDM0MsTUFBSSxnQkFBZ0I7QUFDcEIsTUFBSSxnQkFBZ0I7QUFDcEIsTUFBSSxXQUFXO0FBQ2YsTUFBSSxlQUFlO0FBQ25CLE1BQUksaUJBQWlCO0FBQ3JCLE1BQUksUUFBUTtBQUNaLE1BQUksWUFBWSxZQUFZLElBQUk7QUFDaEMsTUFBSSxTQUFTO0FBQ2IsUUFBTSxlQUFlLENBQUMsU0FBeUI7QUFDN0MsVUFBTSxRQUFRLEtBQUssSUFBSSxPQUFPLFVBQVUsTUFBTSxJQUFJO0FBQ2xELFdBQU8sUUFBUSxLQUFLLE1BQU0sS0FBSztBQUFBLEVBQ2pDO0FBRUEsUUFBTSxRQUFRLENBQUMsU0FBaUIsT0FBTyxTQUFTLFNBQVMsSUFBSSxPQUFPO0FBQ3BFLFFBQU0sVUFBVSxNQUFNLE9BQU8sU0FBUztBQUN0QyxRQUFNLFFBQVEsTUFBTTtBQUNwQixRQUFNLHNCQUFzQixDQUFDLE9BQTRCO0FBQ3ZELFFBQUksQ0FBQyxHQUFJO0FBQ1QsUUFBSSxPQUFPLE9BQVEsZ0JBQWUsUUFBUSxDQUFDO0FBQUEsUUFDdEMsU0FBUSxFQUFFO0FBQUEsRUFDakI7QUFFQSxhQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssT0FBTyxRQUFRLElBQUksR0FBRztBQUM1QyxjQUFVLElBQUksSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7QUFBQSxFQUN6QztBQUNBLFlBQVUsUUFBUTtBQUNsQixhQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssT0FBTyxRQUFRLFVBQVUsT0FBTyxHQUFHO0FBQzNELGdCQUFZLElBQUksSUFBSSxPQUFPLE1BQU0sT0FBTyxFQUFFLENBQUM7QUFBQSxFQUM3QztBQUNBLGNBQVksUUFBUTtBQUVwQixRQUFNLGdCQUFnQixNQUFnQjtBQUNwQyxVQUFNLFNBQVMsS0FBSyxhQUFhLEVBQUU7QUFDbkMsV0FBTyxPQUFPLEtBQUssQ0FBQUMsV0FBU0EsT0FBTSxVQUFVLGFBQWEsS0FBSyxPQUFPLENBQUM7QUFBQSxFQUN4RTtBQUVBLFFBQU0sZ0JBQWdCLE1BQVk7QUFDaEMsVUFBTSxNQUFNLEtBQUssYUFBYTtBQUM5QixVQUFNQSxTQUFRLGNBQWM7QUFDNUIsVUFBTSxRQUFRLFVBQVUsUUFBUSxZQUFZLEtBQWM7QUFDMUQsa0JBQWMsY0FBYyxHQUFHLElBQUksS0FBSyxVQUFPQSxPQUFNLEtBQUs7QUFDMUQsaUJBQWEsY0FBYyxTQUFTLEtBQUs7QUFDekMsZ0JBQVksWUFBWTtBQUFBLE1BQ3RCLENBQUMsV0FBVyxJQUFJLFdBQVc7QUFBQSxNQUMzQixDQUFDLGFBQWEsR0FBR0EsT0FBTSxpQkFBaUIsSUFBSTtBQUFBLE1BQzVDLENBQUMsVUFBVSxPQUFPQSxPQUFNLE1BQU0sQ0FBQztBQUFBLE1BQy9CLENBQUMsU0FBUyxPQUFPQSxPQUFNLGVBQWUsQ0FBQztBQUFBLE1BQ3ZDLENBQUMsVUFBVSxPQUFPQSxPQUFNLGdCQUFnQixDQUFDO0FBQUEsTUFDekMsQ0FBQyxTQUFTLE9BQU9BLE9BQU0sVUFBVSxDQUFDO0FBQUEsTUFDbEMsQ0FBQyxVQUFVLE9BQU9BLE9BQU0sTUFBTSxDQUFDO0FBQUEsTUFDL0IsQ0FBQyxTQUFTLE1BQU0sS0FBSztBQUFBLE1BQ3JCLENBQUMsWUFBWSxPQUFPLE1BQU0sTUFBTSxDQUFDO0FBQUEsTUFDakMsQ0FBQyxlQUFlLE9BQU8sTUFBTSxLQUFLLENBQUM7QUFBQSxJQUNyQyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLE9BQU8sSUFBSSxZQUFZLEtBQUssT0FBTyxFQUFFLEtBQUssRUFBRTtBQUFBLEVBQ3ZFO0FBRUEsUUFBTSxRQUFRLENBQUMsT0FBZUEsV0FBd0I7QUFDcEQsb0JBQWdCO0FBQ2hCLG9CQUFnQkE7QUFDaEIsZUFBVztBQUNYLGNBQVUsUUFBUTtBQUNsQixnQkFBWSxRQUFRLE9BQU9BLE1BQUs7QUFDaEMsWUFBUSxRQUFRO0FBQ2hCLGtCQUFjO0FBQUEsRUFDaEI7QUFFQSxRQUFNLElBQUksTUFBTSxDQUFDO0FBQ2pCLFFBQU0sVUFBVSxNQUFNLENBQUM7QUFFdkIsUUFBTSxhQUFhLENBQUMsTUFBYyxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxNQUFNLEdBQUcsUUFBUSxFQUFFLG1CQUF5QjtBQUN2RyxVQUFNLFVBQVUsWUFBWTtBQUM1QixVQUFNLGFBQWEsVUFBVSxRQUFRLE9BQU87QUFDNUMsVUFBTSxZQUFZLFdBQVc7QUFDN0IsWUFBUSxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixNQUFNLFNBQVMsR0FBRyxHQUFHLFFBQVEsV0FBVyxXQUFXLGVBQWUsR0FBRyxPQUFPLE9BQU8saUJBQWlCLE9BQU8sR0FBRyxPQUFPLE1BQU0sQ0FBQztBQUNqSyx3QkFBb0IsV0FBVyxVQUFVO0FBQUEsRUFDM0M7QUFFQSxRQUFNLGNBQWMsQ0FBQyxTQUF1QjtBQUMxQyxZQUFRLEtBQUssRUFBRSxPQUFPLFVBQVUsT0FBTyxPQUFPLE9BQU8sWUFBWSxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sTUFBTSxHQUFHLE9BQU8sSUFBSSxlQUFlLEVBQUUsT0FBTyxZQUFZLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFBQSxFQUNoSztBQUVBLFdBQVMsaUJBQW9DLG9CQUFvQixFQUFFLFFBQVEsWUFBVTtBQUNuRixXQUFPLGlCQUFpQixTQUFTLE1BQU0sV0FBVyxPQUFPLE9BQU8sUUFBUSxVQUFVLENBQUMsQ0FBQztBQUFBLEVBQ3RGLENBQUM7QUFDRCxXQUFTLGlCQUFvQyxxQkFBcUIsRUFBRSxRQUFRLFlBQVU7QUFDcEYsV0FBTyxpQkFBaUIsU0FBUyxNQUFNLFlBQVksT0FBTyxPQUFPLFFBQVEsV0FBVyxDQUFDLENBQUM7QUFBQSxFQUN4RixDQUFDO0FBQ0QsV0FBUyxpQkFBb0Msd0JBQXdCLEVBQUUsUUFBUSxZQUFVO0FBQ3ZGLFdBQU8saUJBQWlCLFNBQVMsTUFBTTtBQUNyQyxZQUFNLE9BQU8sT0FBTyxPQUFPLFFBQVEsY0FBYztBQUNqRCxZQUFNLFFBQVEsT0FBTyxjQUFjLEtBQUs7QUFDeEMsWUFBTSxPQUFPLE9BQU8sY0FBYyxLQUFLO0FBQ3ZDLFlBQU0sU0FBUyxLQUFLLEtBQUssUUFBUSxJQUFJO0FBQ3JDLFVBQUksWUFBWTtBQUNoQixlQUFTLE1BQU0sR0FBRyxNQUFNLE1BQU0sT0FBTztBQUNuQyxjQUFNLFFBQVEsRUFBRTtBQUNoQixjQUFNLFdBQVcsS0FBSyxJQUFJLFFBQVEsU0FBUztBQUMzQyxpQkFBUyxTQUFTLEdBQUcsU0FBUyxVQUFVLFVBQVU7QUFDaEQscUJBQVcsTUFBTSxNQUFNLElBQUksS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxJQUFJLE1BQU0sTUFBTSxNQUFNLE1BQU0sR0FBRyxLQUFLO0FBQUEsUUFDaEg7QUFDQSxxQkFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNILENBQUM7QUFDRCxXQUFTLGlCQUFvQyx5QkFBeUIsRUFBRSxRQUFRLFlBQVU7QUFDeEYsV0FBTyxpQkFBaUIsU0FBUyxNQUFNLFlBQVksS0FBSyxFQUFFLE1BQU0sT0FBTyxPQUFPLFFBQVEsZUFBZSxHQUFHLEdBQUcsTUFBTSxNQUFNLEdBQUcsT0FBTyxJQUFJLGVBQWUsRUFBRSxPQUFPLFlBQVksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDM0wsQ0FBQztBQUNELFdBQVMsY0FBaUMsYUFBYSxFQUFHLGlCQUFpQixTQUFTLE1BQU07QUFDeEYsZUFBVyxDQUFDO0FBQ1osZUFBVyxDQUFDO0FBQ1osZUFBVyxNQUFNLFdBQVcsQ0FBQyxHQUFHLEdBQUc7QUFDbkMsZUFBVyxNQUFNLFdBQVcsQ0FBQyxHQUFHLEdBQUc7QUFBQSxFQUNyQyxDQUFDO0FBQ0QsV0FBUyxjQUFpQyxjQUFjLEVBQUcsaUJBQWlCLFNBQVMsTUFBTTtBQUN6RixZQUFRLFNBQVMsWUFBWSxTQUFTLFFBQVEsU0FBUyxRQUFRLFNBQVMsWUFBWSxTQUFTLGlCQUFpQixTQUFTO0FBQUEsRUFDekgsQ0FBQztBQUVELGlCQUFlLFNBQVMsY0FBMkIsT0FBTyxHQUFJLGFBQWE7QUFBQSxJQUN6RSxNQUFNLE1BQU0sTUFBTTtBQUFBLElBQ2xCLFNBQVMsVUFBUTtBQUNmLG1CQUFhO0FBQ2IsWUFBTSxRQUFRLE1BQU0sT0FBTyxZQUFZLElBQUksQ0FBQztBQUM1QyxpQkFBVyxhQUFhO0FBQUEsSUFDMUI7QUFBQSxJQUNBLFFBQVEsV0FBUztBQUNmLFlBQU0sT0FBTyxPQUFPLE9BQU8sUUFBUSxNQUFLLEtBQUs7QUFDN0MsaUJBQVcsV0FBVztBQUFBLElBQ3hCO0FBQUEsSUFDQSxZQUFZLE1BQU07QUFBRSxpQkFBVyxZQUFZO0FBQUEsSUFBRztBQUFBLEVBQ2hELENBQUM7QUFFRCxRQUFNLGFBQWEsQ0FBQyxLQUFnQkEsV0FBMEI7QUFDNUQsa0JBQWMsS0FBSyxLQUFLQSxRQUFPLFlBQVksTUFBTSxPQUFPLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLFlBQVU7QUFBQSxNQUN4RixHQUFHLE1BQU07QUFBQSxNQUFHLEdBQUcsUUFBUSxJQUFJLEtBQUssTUFBTTtBQUFBLElBQ3hDLEVBQUUsR0FBRyxZQUFZLElBQUksR0FBRyxNQUFNLENBQUM7QUFDL0IsYUFBU0EsT0FBTSxtQkFBbUIsSUFBSSxNQUFNO0FBQUEsRUFDOUM7QUFFQSxRQUFNLE9BQU8sQ0FBQyxLQUFnQkEsV0FBMEI7QUFDdEQsZUFBVyxLQUFLQSxNQUFLO0FBQUEsRUFDdkI7QUFFQSxRQUFNLFdBQVcsQ0FBQyxZQUF3QyxPQUFjLFFBQXNCO0FBQzVGLFVBQU0sYUFBYSxVQUFVLFFBQVEsTUFBTSxPQUFPO0FBQ2xELFVBQU0sU0FBUyxtQkFBbUI7QUFBQSxNQUNoQztBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsaUJBQWlCLFdBQVcsU0FBUyxXQUFXLFlBQVk7QUFBQSxNQUM1RCxlQUFlLE1BQU0sV0FBVztBQUFBLE1BQ2hDLE9BQU8sWUFBWSxXQUFXLFNBQVM7QUFBQSxJQUN6QyxDQUFDO0FBQ0QsUUFBSSxPQUFPLFFBQVE7QUFDakIsZUFBUztBQUNULGNBQVEsT0FBTyxXQUFXLFVBQVU7QUFDcEMsb0JBQWM7QUFBQSxJQUNoQixPQUFPO0FBQ0wsY0FBUSxLQUFLO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFNBQVMsQ0FBQyxRQUFzQjtBQUNwQyxVQUFNLFFBQVEsS0FBSyxLQUFLLE1BQU0sYUFBYSxLQUFNLElBQUk7QUFDckQsZ0JBQVk7QUFDWiwyQkFBdUIsa0JBQWtCLEtBQUs7QUFDOUMsVUFBTSxNQUFNLEtBQUssYUFBYTtBQUM5QixVQUFNQSxTQUFRLGNBQWM7QUFDNUIsZ0JBQVk7QUFDWixRQUFJLFlBQVksR0FBRztBQUNqQixXQUFLLEtBQUtBLE1BQUs7QUFDZixrQkFBWSxJQUFJQSxPQUFNO0FBQUEsSUFDeEI7QUFDQSxRQUFJLGNBQWMsYUFBYSxHQUFHLElBQUksRUFBRyxnQkFBZSxXQUFXLENBQUM7QUFDcEUsY0FBVSxLQUFLLElBQUksTUFBTyxLQUFLO0FBQy9CLFFBQUksQ0FBQyxXQUFXLFFBQVE7QUFDdEIsWUFBTSxjQUFjLFFBQVEsT0FBTyxXQUFTLE1BQU0sU0FBUyxNQUFNLFFBQVEsQ0FBQyxNQUFNLEtBQUs7QUFDckYsWUFBTSxhQUFhLE1BQU0sc0JBQXNCLE1BQU0sQ0FBQztBQUN0RCxZQUFNLFNBQVMsb0JBQW9CLGFBQWEsTUFBTSxNQUFNLElBQUksR0FBRyxZQUFZLE1BQU0sU0FBUztBQUM5RixZQUFNLFFBQVEsUUFBUSxPQUFPLFFBQVEsTUFBSyxLQUFLO0FBQUEsSUFDakQ7QUFDQSxVQUFNLE9BQU8sS0FBSztBQUNsQixnQkFBWSxRQUFRLFlBQVksT0FBTyxNQUFNLElBQUk7QUFDakQsZ0JBQVksUUFBUSxXQUFXLE1BQU0sVUFBVSxRQUFRLENBQUM7QUFFeEQsa0JBQWM7QUFBQSxNQUFrQjtBQUFBLE1BQU87QUFBQSxNQUFLLFFBQVEsSUFBSSxXQUFTLE9BQU8sT0FBTyxPQUFPO0FBQUEsUUFDcEYsUUFBUSxVQUFVLFFBQVEsTUFBTSxPQUFPLEVBQUUsU0FBUyxNQUFNO0FBQUEsTUFDMUQsQ0FBQyxDQUFDO0FBQUEsTUFBRyxFQUFFLEtBQUssTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLE9BQU8sT0FBTyxRQUFRLEdBQUc7QUFBQSxNQUMvRCxDQUFDLFlBQVksV0FBVyxTQUFTLFlBQVksUUFBNEIsR0FBRztBQUFBLElBQUM7QUFFN0UsZUFBVyxTQUFTLENBQUMsR0FBRyxPQUFPLEdBQUc7QUFDaEMsWUFBTSxNQUFNLE9BQU8sS0FBSztBQUN4QixZQUFNLEtBQUssVUFBVSxRQUFRLE1BQU0sT0FBTyxFQUFFLFFBQVEsTUFBTSxJQUFJLFFBQVEsTUFBTSxNQUFNLElBQUksT0FBTyxTQUFTO0FBQ3RHLFlBQU0sTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUN2QixVQUFJLE1BQU0sU0FBUyxNQUFNLE1BQU0sVUFBVTtBQUFFLGdCQUFRLE9BQU8sUUFBUSxRQUFRLEtBQUssR0FBRyxDQUFDO0FBQUc7QUFBQSxNQUFVO0FBQ2hHLFVBQUksQ0FBQyxNQUFNLFNBQVMsTUFBTSxLQUFLLFFBQVEsRUFBRyxTQUFRLE9BQU8sUUFBUSxRQUFRLEtBQUssR0FBRyxDQUFDO0FBQUEsSUFDcEY7QUFDQSxlQUFXLFVBQVUsQ0FBQyxHQUFHLE9BQU8sR0FBRztBQUNqQyxhQUFPLE1BQU0sT0FBTyxLQUFLO0FBQUcsYUFBTyxLQUFLLEtBQUssTUFBTSxJQUFJO0FBQ3ZELFVBQUksT0FBTyxLQUFLLFFBQVEsSUFBSSxLQUFLLE1BQU0sS0FBSyxPQUFPLFNBQVMsWUFBWTtBQUN0RSxjQUFNLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFDaEMsZ0JBQVEsT0FBTyxRQUFRLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxNQUMzQyxXQUFXLE9BQU8sSUFBSSxPQUFPLFNBQVMsS0FBSyxNQUFNLEdBQUc7QUFDbEQsZ0JBQVEsT0FBTyxRQUFRLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxNQUMzQztBQUFBLElBQ0Y7QUFDQSxlQUFXLFVBQVUsQ0FBQyxHQUFHLFdBQVcsR0FBRztBQUNyQyxhQUFPLE1BQU0sT0FBTyxLQUFLO0FBQUcsYUFBTyxLQUFLLEtBQUssTUFBTSxJQUFJO0FBQ3ZELFVBQUksT0FBTyxLQUFLLFFBQVEsSUFBSSxLQUFLLE1BQU0sS0FBSyxPQUFPLFNBQVMsWUFBWTtBQUN0RSxjQUFNLElBQUksaUJBQWlCLFFBQVEsYUFBYSxVQUFVO0FBQzFELG9CQUFZLE9BQU8sWUFBWSxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQUEsTUFDbkQsV0FBVyxPQUFPLElBQUksT0FBTyxPQUFRLGFBQVksT0FBTyxZQUFZLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxJQUN4RjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE9BQU8sQ0FBQyxRQUFzQjtBQUNsQyxVQUFNLElBQUksTUFBTTtBQUNoQixVQUFNLGFBQThCO0FBQUEsTUFDbEMsR0FBRywwQkFBMEIsWUFBWSxPQUFPLE9BQU8sT0FBTyxRQUFRLEdBQUc7QUFBQSxJQUMzRTtBQUNBLGVBQVcsU0FBUyxNQUFNLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUFHLE1BQUs7QUFDOUQsZUFBVyxLQUFLLEdBQUcsY0FBYyxxQkFBcUIsQ0FBQztBQUN2RCxRQUFJLE1BQU8sWUFBVyxTQUFTLFNBQVM7QUFDdEMsWUFBTSxhQUFhLFVBQVUsUUFBUSxNQUFNLE9BQU87QUFDbEQsaUJBQVcsS0FBSztBQUFBLFFBQ2QsR0FBRyxNQUFNLElBQUksV0FBVyxTQUFTLE9BQU07QUFBQSxRQUN2QyxHQUFHLE1BQU0sSUFBSSxXQUFXLFNBQVMsT0FBTztBQUFBLFFBQ3hDLE9BQU8sV0FBVyxTQUFTLE1BQUs7QUFBQSxRQUNoQyxRQUFRLFdBQVcsU0FBUyxPQUFNO0FBQUEsUUFDbEMsT0FBTyxZQUFZLFdBQVcsV0FBVztBQUFBLFFBQ3pDLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxNQUNULENBQUM7QUFDRCxpQkFBVyxLQUFLO0FBQUEsUUFDZCxHQUFHLE1BQU07QUFBQSxRQUFHLEdBQUcsTUFBTTtBQUFBLFFBQUcsT0FBTyxXQUFXLFNBQVM7QUFBQSxRQUNuRCxPQUFPLE1BQU0sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRO0FBQUEsUUFDekYsZ0JBQWdCLFlBQVksV0FBVyxTQUFTO0FBQUEsUUFDaEQsTUFBTSxXQUFXO0FBQUEsUUFDakIsU0FBUyxXQUFXO0FBQUEsUUFDcEIsY0FBYyxXQUFXO0FBQUEsUUFDekIsZ0JBQWdCLFdBQVc7QUFBQSxRQUMzQixXQUFXLE1BQU0sZ0JBQWdCLE1BQU0sT0FBTztBQUFBLFFBQzlDLE9BQU87QUFBQSxNQUNULENBQUM7QUFBQSxJQUNIO0FBQ0EsUUFBSSxNQUFPLFlBQVcsVUFBVSxhQUFhO0FBQzNDLFlBQU0sT0FBTyxpQkFBaUIsUUFBUTtBQUN0QyxZQUFNLFNBQVMsWUFBWSxLQUFLLFdBQVc7QUFDM0MsWUFBTSxTQUFTLFlBQVksS0FBSyxTQUFTO0FBQ3pDLFlBQU0sS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUU1QixZQUFNLFNBQVMsS0FBSyxJQUFJLE1BQU0sTUFBTSxPQUFPLElBQUksSUFBSSxJQUFJLE1BQU07QUFDN0QsWUFBTSxLQUFLLEtBQUs7QUFDaEIsWUFBTSxRQUFRLElBQUksS0FBSyxJQUFJLE1BQU0sTUFBTSxPQUFPLElBQUksSUFBSSxJQUFJO0FBRzFELGlCQUFXLEtBQUssRUFBRSxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLFFBQVEsZ0JBQWdCLFFBQVEsTUFBTSxNQUFLLFdBQVcsTUFBSyxPQUFPLFNBQVMsQ0FBQztBQUVoSixpQkFBVyxLQUFLLEVBQUUsR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxRQUFRLGdCQUFnQixRQUFRLE1BQU0sS0FBSSxXQUFXLEtBQUssT0FBTyxXQUFXLENBQUM7QUFJakosaUJBQVcsS0FBSyxFQUFFLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxJQUFNLEdBQUcsUUFBUSxJQUFNLEdBQUcsT0FBTyxRQUFRLGdCQUFnQixRQUFRLE1BQU0sS0FBSSxXQUFXLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFDbEssaUJBQVcsS0FBSyxFQUFFLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxJQUFNLEdBQUcsUUFBUSxJQUFNLEdBQUcsT0FBTyxRQUFRLGdCQUFnQixRQUFRLE1BQU0sS0FBSSxXQUFXLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFFbEssaUJBQVcsS0FBSyxFQUFFLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxNQUFNLEdBQUcsUUFBUSxJQUFNLEdBQUcsT0FBTyxRQUFRLGdCQUFnQixRQUFRLE1BQU0sTUFBSyxXQUFXLEtBQUssT0FBTyxPQUFPLENBQUM7QUFDbEssaUJBQVcsS0FBSyxFQUFFLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksTUFBTSxHQUFHLE9BQU8sTUFBTSxHQUFHLFFBQVEsSUFBTSxHQUFHLE9BQU8sUUFBUSxnQkFBZ0IsUUFBUSxNQUFNLEtBQUksV0FBVyxNQUFNLE9BQU8sT0FBTyxDQUFDO0FBRzVLLGVBQVMsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzdCLGNBQU0sUUFBUSxNQUFNLE1BQU0sS0FBSyxPQUFPLE9BQU87QUFDN0MsY0FBTSxRQUFRLEtBQUssS0FBSyxPQUFPLElBQUk7QUFDbkMsbUJBQVcsS0FBSyxFQUFFLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sR0FBRyxPQUFPLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssT0FBTyxNQUFNLEdBQUcsT0FBTyxRQUFRLE1BQU0sTUFBSyxXQUFXLE1BQUssS0FBSyxJQUFJLE1BQU0sTUFBTSxFQUFFLElBQUksTUFBSyxPQUFPLFNBQVMsQ0FBQztBQUFBLE1BQzNNO0FBQUEsSUFDRjtBQUNBLFFBQUksTUFBTyxZQUFXLFVBQVUsU0FBUztBQUN2QyxZQUFNLE1BQU0sS0FBSyxPQUFPLEtBQUs7QUFDN0IsWUFBTSxjQUFjLFlBQVksSUFBSSxlQUFlLGVBQWU7QUFDbEUsWUFBTSxhQUFhLFlBQVksSUFBSSxlQUFlLFVBQVU7QUFDNUQsWUFBTSxLQUFLLE1BQU0sT0FBTyxJQUFJO0FBRTVCLFlBQU0sU0FBUyxLQUFLLElBQUksTUFBTSxNQUFNLE9BQU8sSUFBSSxJQUFJLElBQUksTUFBTTtBQUM3RCxZQUFNLEtBQUssS0FBSztBQUVoQixZQUFNLFFBQVEsSUFBSSxLQUFLLElBQUksTUFBTSxNQUFNLE9BQU8sSUFBSSxJQUFJLElBQUk7QUFFMUQsaUJBQVcsS0FBSyxFQUFFLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sYUFBYSxnQkFBZ0IsWUFBWSxNQUFNLEtBQUksV0FBVyxNQUFLLE9BQU8sU0FBUyxDQUFDO0FBRXhKLGlCQUFXLEtBQUssRUFBRSxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLGFBQWEsZ0JBQWdCLFlBQVksTUFBTSxNQUFLLFdBQVcsTUFBTSxPQUFPLFVBQVUsQ0FBQztBQUUzSixZQUFNLFlBQVksSUFBSSxlQUFlO0FBQ3JDLFVBQUksY0FBYyxVQUFVO0FBQzFCLGlCQUFTLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSyxZQUFXLEtBQUssRUFBRSxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxNQUFNLEdBQUcsUUFBUSxJQUFJLEdBQUcsT0FBTyxhQUFhLGdCQUFnQixZQUFZLE1BQU0sS0FBSSxXQUFXLEtBQUssT0FBTyxPQUFPLENBQUM7QUFBQSxNQUM1TSxXQUFXLGNBQWMsUUFBUTtBQUMvQixtQkFBVyxLQUFLLEVBQUUsR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sTUFBTSxHQUFHLFFBQVEsSUFBSSxHQUFHLE9BQU8sYUFBYSxnQkFBZ0IsWUFBWSxNQUFNLEtBQUksV0FBVyxNQUFNLE9BQU8sT0FBTyxDQUFDO0FBQUEsTUFDakssV0FBVyxjQUFjLGFBQWE7QUFDcEMsbUJBQVcsS0FBSyxFQUFFLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksSUFBSSxHQUFHLE9BQU8sTUFBTSxHQUFHLFFBQVEsSUFBSSxHQUFHLE9BQU8sYUFBYSxnQkFBZ0IsWUFBWSxNQUFNLEtBQUksV0FBVyxLQUFLLE9BQU8sT0FBTyxDQUFDO0FBQ2hMLG1CQUFXLEtBQUssRUFBRSxHQUFHLEtBQUssTUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sR0FBRyxRQUFRLElBQUksR0FBRyxPQUFPLGFBQWEsZ0JBQWdCLFlBQVksTUFBTSxLQUFJLFdBQVcsS0FBSyxPQUFPLE9BQU8sQ0FBQztBQUFBLE1BQ2xMLE9BQU87QUFDTCxtQkFBVyxLQUFLLEVBQUUsR0FBRyxJQUFJLEdBQUcsT0FBTyxJQUFJLElBQUksR0FBRyxPQUFPLElBQUksR0FBRyxRQUFRLElBQUksR0FBRyxPQUFPLGFBQWEsZ0JBQWdCLFlBQVksTUFBTSxNQUFLLFdBQVcsS0FBSyxPQUFPLE9BQU8sQ0FBQztBQUFBLE1BQ3ZLO0FBRUEsZUFBUyxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDN0IsY0FBTSxRQUFRLE1BQU0sTUFBTSxLQUFLLE9BQU8sT0FBTztBQUM3QyxjQUFNLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSTtBQUNoQyxtQkFBVyxLQUFLLEVBQUUsR0FBRyxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxHQUFHLE9BQU8sSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxPQUFPLE1BQU0sR0FBRyxPQUFPLGFBQWEsTUFBTSxLQUFJLFdBQVcsT0FBTSxLQUFLLElBQUksTUFBTSxNQUFNLEVBQUUsSUFBSSxNQUFLLE9BQU8sU0FBUyxDQUFDO0FBQUEsTUFDaE47QUFBQSxJQUNGO0FBQ0EsZUFBVyxVQUFVLFNBQVM7QUFDNUIsWUFBTSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sWUFBWSxPQUFPLE9BQU8sUUFBUTtBQUNuRSxZQUFNLFdBQVcsSUFBSTtBQUNyQixZQUFNLE9BQU8sT0FBTyxVQUFVLElBQUksV0FBVztBQUM3QyxVQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLFlBQUksT0FBTyxVQUFVLGFBQWE7QUFDaEMscUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxJQUFJLE9BQU8sTUFBSyxPQUFPLE9BQU8sTUFBSyxRQUFRLE9BQU8sTUFBTSxPQUFPLE9BQU8sT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsTUFBTSxNQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sT0FBTyxRQUFRLENBQUM7QUFBQSxRQUN2TixXQUFXLE9BQU8sVUFBVSxnQkFBZ0I7QUFDMUMsZ0JBQU0sVUFBVSxhQUFhLE9BQU8sSUFBSSxJQUFJLElBQUksS0FBSyxPQUFPO0FBQzVELHFCQUFXLEtBQUssRUFBRSxHQUFHLE9BQU8sSUFBSSxRQUFRLEdBQUcsT0FBTyxJQUFJLE9BQU8sS0FBSSxPQUFPLE9BQU8sTUFBSyxRQUFRLE9BQU8sS0FBSSxPQUFPLE9BQU8sT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsTUFBTSxNQUFLLFdBQVcsTUFBTSxPQUFPLFNBQVMsQ0FBQztBQUFBLFFBQ2xOLFdBQVcsT0FBTyxVQUFVLGdCQUFnQjtBQUMxQyxxQkFBVyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxNQUFNLE9BQU8sT0FBTyxPQUFPLGdCQUFnQixPQUFPLGdCQUFnQixNQUFNLE9BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFDdksscUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxJQUFJLE9BQU8sTUFBSyxPQUFPLE9BQU8sTUFBSyxRQUFRLE9BQU8sS0FBSyxPQUFPLE9BQU8sZ0JBQWdCLGdCQUFnQixPQUFPLE9BQU8sTUFBTSxLQUFJLFdBQVcsTUFBTSxPQUFPLFFBQVEsQ0FBQztBQUFBLFFBQ3pNLFdBQVcsT0FBTyxVQUFVLGdCQUFnQjtBQUMxQyxxQkFBVyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxPQUFPLElBQUksT0FBTyxNQUFLLE9BQU8sT0FBTyxNQUFLLFFBQVEsT0FBTyxNQUFNLE9BQU8sT0FBTyxPQUFPLGdCQUFnQixPQUFPLGdCQUFnQixNQUFNLEtBQUksV0FBVyxPQUFPLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFDOU0scUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxHQUFHLE9BQU8sT0FBTyxLQUFLLE9BQU8sT0FBTyxnQkFBZ0IsZ0JBQWdCLE9BQU8sT0FBTyxNQUFNLE1BQUssV0FBVyxPQUFNLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFBQSxRQUM5SyxPQUFPO0FBQ0wscUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxJQUFJLE9BQU8sTUFBSyxHQUFHLE9BQU8sSUFBSSxPQUFPLEtBQUksT0FBTyxPQUFPLE1BQUssUUFBUSxPQUFPLEtBQUssT0FBTyxPQUFPLE9BQU8sZ0JBQWdCLE9BQU8sZ0JBQWdCLE1BQU0sTUFBSyxXQUFXLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFDbk4scUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxJQUFJLE9BQU8sTUFBSyxHQUFHLE9BQU8sSUFBSSxPQUFPLEtBQUksT0FBTyxPQUFPLE1BQUssUUFBUSxPQUFPLEtBQUssT0FBTyxPQUFPLGdCQUFnQixnQkFBZ0IsT0FBTyxPQUFPLE1BQU0sTUFBSyxXQUFXLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFBQSxRQUNyTjtBQUFBLE1BQ0YsV0FBVyxPQUFPLFNBQVMsVUFBVTtBQUNuQyxZQUFJLE9BQU8sVUFBVSxnQkFBZ0IsT0FBTyxVQUFVLGVBQWU7QUFDbkUscUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxHQUFHLE9BQU8sTUFBTSxPQUFPLE9BQU8sT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsTUFBTSxPQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sT0FBTyxDQUFDO0FBQ3ZLLGNBQUksT0FBTyxVQUFVLGNBQWUsWUFBVyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxPQUFPLE1BQUssT0FBTyxPQUFPLGdCQUFnQixnQkFBZ0IsT0FBTyxPQUFPLE1BQU0sTUFBSyxXQUFXLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFBQSxRQUM1TTtBQUNBLGNBQU0sYUFBYSxPQUFPLFVBQVUsa0JBQWtCLElBQUksT0FBTyxVQUFVLGVBQWUsSUFBSTtBQUM5RixpQkFBUyxRQUFRLEdBQUcsUUFBUSxZQUFZLFNBQVM7QUFDL0MsZ0JBQU0sVUFBVSxTQUFTLGFBQWEsS0FBSyxLQUFLLE9BQU87QUFDdkQscUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxJQUFJLFFBQVEsR0FBRyxPQUFPLEdBQUcsT0FBTyxPQUFPLE1BQUssUUFBUSxRQUFRLE9BQU8sVUFBVSxrQkFBa0IsT0FBTyxNQUFLLE9BQU8sUUFBUSxJQUFJLE9BQU8saUJBQWlCLE9BQU8sT0FBTyxnQkFBZ0IsT0FBTyxPQUFPLE1BQU0sT0FBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFFBQVEsQ0FBQztBQUFBLFFBQ25SO0FBQUEsTUFDRixPQUFPO0FBQ0wsbUJBQVcsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxHQUFHLE9BQU8sTUFBTSxPQUFPLE9BQU8sT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE9BQU8sQ0FBQztBQUNqSyxtQkFBVyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxPQUFPLEtBQUksT0FBTyxPQUFPLGdCQUFnQixnQkFBZ0IsT0FBTyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxRQUFRLENBQUM7QUFBQSxNQUN6SztBQUFBLElBQ0Y7QUFFQSxVQUFNLE9BQU8sQ0FBQyxVQUFVLFFBQVE7QUFDaEMsVUFBTSxTQUE2QixDQUFDO0FBQ3BDLFVBQU0scUJBQXFCLHNCQUFzQixPQUFPLE9BQU8sT0FBTyxRQUFRLFFBQVEsR0FBRyx1QkFBdUIsT0FBTyxPQUFPLE1BQU0sQ0FBQyxDQUFDO0FBQ3RJLGVBQVcsQ0FBQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUFFLFFBQVEsR0FBRztBQUMxRSxhQUFPLEtBQUssb0JBQW9CLElBQUksZUFBZSxFQUFFLE9BQU8sWUFBWSxPQUFPLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssTUFBTSxrQkFBa0IsaUNBQWlDLG9CQUFvQixNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7QUFBQSxJQUN2TjtBQUNBLFVBQU0sa0JBQXFGLENBQUM7QUFDNUYsZUFBVyxTQUFTLFNBQVM7QUFDM0IsWUFBTSxhQUFhLFVBQVUsUUFBUSxNQUFNLE9BQU87QUFDbEQsWUFBTSxPQUFPLEtBQUssV0FBVyxhQUFhO0FBQzFDLHNCQUFnQixLQUFLLEVBQUUsU0FBUyxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsUUFBUSxNQUFNLFFBQVEsV0FBVyxNQUFNLFdBQVcsTUFBTSxPQUFPLEVBQUUsQ0FBQztBQUN6SSxhQUFPLEtBQUssb0JBQW9CLE1BQU0sT0FBTyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0saUJBQWlCLGlDQUFpQyxvQkFBb0IsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFBQSxJQUNqTDtBQUNBLGVBQVcsVUFBVSxTQUFTO0FBQzVCLFlBQU0sTUFBTSxLQUFLLE9BQU8sS0FBSztBQUM3QixhQUFPLE1BQU0sUUFBUSxXQUFXLElBQUksT0FBTyxTQUFTLElBQUksQ0FBQztBQUN6RCxhQUFPLE1BQU0sUUFBUSxZQUFZLElBQUksZUFBZSxlQUFlO0FBQ25FLGFBQU8sS0FBSyxvQkFBb0IsT0FBTyxPQUFPLE1BQU0sT0FBTyxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssTUFBTSxxQkFBcUIsaUNBQWlDLG9CQUFvQixNQUFNLE9BQU8sSUFBSSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUFBLElBQ3RNO0FBQ0EsZUFBVyxVQUFVLGFBQWE7QUFDaEMsYUFBTyxNQUFNLFFBQVEsV0FBVyxHQUFHLGlCQUFpQixRQUFRLGFBQWEsYUFBYSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUM7QUFDM0csYUFBTyxNQUFNLFFBQVEsWUFBWSxpQkFBaUIsUUFBUSxhQUFhLFdBQVc7QUFDbEYsYUFBTyxLQUFLLG9CQUFvQixPQUFPLE9BQU8sTUFBTSxPQUFPLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxNQUFNLHFCQUFxQixpQ0FBaUMsb0JBQW9CLE1BQU0sT0FBTyxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFDdE07QUFDRixVQUFNLFlBQVksdUJBQXVCLFlBQVksUUFBUSxpQkFBaUIsSUFBSSxjQUFjLEdBQUcsaUNBQWlDLGtCQUFrQjtBQUN0SixjQUFVLFdBQVcsS0FBSyxHQUFHLGtDQUFrQyxpQkFBaUIsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BJLGFBQVMsT0FBTyxXQUFXLE1BQU0sR0FBSTtBQUFBLEVBQ3JDO0FBRUEsUUFBTSxRQUFRLENBQUMsUUFBc0I7QUFDbkMsV0FBTyxHQUFHO0FBQ1YsU0FBSyxHQUFHO0FBQ1IsMEJBQXNCLEtBQUs7QUFBQSxFQUM3QjtBQUVBLFFBQU0sZUFBZSxhQUFhO0FBQ2xDLGNBQVksaUJBQWlCLFVBQVUsYUFBYTtBQUNwRCxhQUFXLENBQUM7QUFDWixhQUFXLENBQUM7QUFDWix3QkFBc0IsS0FBSztBQUM3QixTQUFTLE9BQU87QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLGNBQWMsaUJBQWlCLFFBQVEsTUFBTSxVQUFVLE9BQU8sS0FBSztBQUMzRTsiLAogICJuYW1lcyI6IFsiY2FudmFzIiwgIndpZHRoIiwgImhlaWdodCIsICJzaGFkZXIiLCAiaGV4IiwgImNhbnZhcyIsICJoZXgiLCAic2hhZGVyIiwgImNhbnZhcyIsICJzaGFkZXIiLCAiaGV4IiwgImNhbnZhcyIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJyb3RhdGlvbiIsICJsZXZlbCIsICJsZXZlbCJdCn0K

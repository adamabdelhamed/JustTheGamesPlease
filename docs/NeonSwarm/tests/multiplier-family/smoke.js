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

// projects/NeonSwarm/CombatDefinition/tracks/Track4.ts
var generatedTrack = {
  label: "Skybreak",
  description: "The Aurora opener is busier than the tutorial arc, but gives a nearby shield and burst weapon before the first squeeze.",
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
..E.. | .....
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
..... | .....
..... | .....
...E. | .....
..... | .....
..P.. | ..E..
..E.. | ..P..
..... | ..P..
..K.. | ..P..
..... | ..P..
..W.. | ..P..
..... | .....
..... | .....
..S.. | .....
..... | .....
..E.. | .....
..... | .....
..b.. | .....
..S.. | .....
..J.. | .....
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
..E.. | .....
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
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..E.. | .....
..... | .....
..... | ..E..
..... | .....
..... | .....
..... | .....
..E.. | .....
..... | ..E..
..E.. | .....
..... | .....
..... | ..E..
..... | .....
..... | .....
..... | .....
..E.. | .....
..... | ..E..
..... | .....
..... | ..E..
..... | ..E..
..... | .....
..... | ...E.
..2.. | .....
..a.. | .....
..... | .....
..E.. | .....
..E.. | .....
.E... | .....
..... | .....
..... | .....
..... | .....
..E.. | ..S..
..... | .....
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
..... | ..E..
.E.E. | .....
..... | .....
..... | .....
..E.. | .....
..... | .....
..G.. | .....
..... | .....
.E... | .....
..... | .....
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
..T.. | ..W..
..... | .....
..2.. | .....
..... | .....
..... | .....
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
.E.E. | .....
..... | .....
..S.. | .....
..... | .....
..E.. | .....
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
  const results2 = [];
  for (const target of enemies) {
    if (target.dying) continue;
    if (!includeAdjacentLanes && target.lane !== lane) continue;
    if (excludeIds?.has(target.id)) continue;
    const dx = target.x - origin.x;
    const dy = target.y - origin.y;
    const distSq = dx * dx + dy * dy;
    if (distSq > rangeSq) continue;
    results2.push({ target, distance: Math.sqrt(distSq) });
  }
  results2.sort((a, b) => a.distance - b.distance);
  return maxTargets !== void 0 ? results2.slice(0, maxTargets) : results2;
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
          const result = resolveEnemyDamage({
            enemy,
            effects: this.enemyExitEffects,
            damage: swordResult.damage,
            impactMagnitude: swordResult.damage,
            color: this.enemyExitColor(enemy)
          });
          if (result.killed) {
            this.kills++;
            this.play(result.definition.deathSound);
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
  playSwordSwing(swordId) {
    this.play(swordSwingSoundIds[swordId]);
  }
  playPickup(id) {
    this.play("Pickup");
    this.play(id);
  }
};

// projects/NeonSwarm/test-pages/multiplier-family/smoke.ts
var status = document.querySelector("#test-status");
var results = document.querySelector("#results");
var run = () => {
  const squad = new SquadModel();
  const spec = multiplierFamily.members.squadPlusOne;
  const initial = squad.count;
  squad.add(spec.squadAdded);
  const afterPickup = squad.count;
  for (let index = 0; index < 20; index++) squad.add(spec.squadAdded);
  const capped = squad.count;
  squad.x = 200;
  const points = squad.points(400, 1);
  const firstRow = points.filter((point) => point.row === 0);
  const uniqueColumns = new Set(firstRow.map((point) => point.x)).size;
  return {
    initial,
    afterPickup,
    capped,
    points,
    firstRow,
    uniqueColumns,
    simultaneousTargets: Math.min(firstRow.length, 5)
  };
};
var test = createTestPage("neon-swarm-multiplier-family-smoke", { suite: "smoke", run }, status);
test.ready();
var outcome = run();
var assertions = [
  ["Pickup adds one wingmate", outcome.afterPickup === outcome.initial + 1],
  ["Squad respects ten-member cap", outcome.capped === multiplierFamily.members.squadPlusOne.maxSquadSize],
  ["Formation creates two five-member rows", outcome.points.length === 10 && outcome.firstRow.length === 5],
  ["First row has five distinct firing columns", outcome.uniqueColumns === 5],
  ["Five-member squad can cover five enemy positions", outcome.simultaneousTargets === 5]
];
results.innerHTML = assertions.map(([name, passed], index) => `
  <li data-passed="${passed}" data-index="${index}">
    <strong>${name}</strong>
    <span>${passed ? "PASS" : "FAIL"}</span>
  </li>`).join("");
results.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => void startSimulation(Number(item.getAttribute("data-index"))));
});
for (const [name, passed] of assertions) test.assert(name, passed);
var pageContainer = document.getElementById("page-container");
var simulatorPanel = document.getElementById("simulator-panel");
var closeSimBtn = document.getElementById("close-sim");
var replayBtn = document.getElementById("replay-btn");
var pauseBtn = document.getElementById("pause-btn");
var simStatusText = document.getElementById("sim-status");
var simTitle = document.getElementById("sim-title");
var simDetails = document.getElementById("sim-details");
var canvas = document.getElementById("game-canvas");
var stage = document.getElementById("canvas-container") ?? simulatorPanel;
var sim = null;
var activeScenarioIdx = 0;
var isPaused = false;
async function ensureSimulation() {
  sim ??= await NeonSwarmSimulation.create({ mode: "lab", canvas, stageElement: stage });
  return sim;
}
async function startSimulation(index) {
  activeScenarioIdx = index;
  pageContainer.classList.add("simulator-active");
  simulatorPanel.removeAttribute("hidden");
  simTitle.textContent = assertions[index][0];
  await ensureSimulation();
  resetSimulation();
}
function resetSimulation() {
  if (!sim) return;
  sim.stopLoop();
  sim.reset({ silent: true });
  sim.setSquadLane(0);
  if (activeScenarioIdx === 0) {
    sim.spawnMultiplierPickup({ lane: 0, y: 100 });
  } else if (activeScenarioIdx === 1) {
    for (let index = 0; index < 12; index++) sim.spawnMultiplierPickup({ lane: 0, y: 120 - index * 28, speedMultiplier: 2 });
  } else if (activeScenarioIdx === 2) {
    sim.addSquadMembers(9);
  } else {
    sim.addSquadMembers(4);
    for (let index = 0; index < 5; index++) {
      sim.spawnEnemy({ enemyId: "basicOrb", lane: 0, x: sim.laneX(0) + (index - 2) * 30, y: 210, health: 99, playSound: false });
    }
  }
  isPaused = false;
  pauseBtn.textContent = "Pause";
  simStatusText.textContent = "PASSED";
  simStatusText.className = "sim-status";
  updateDetails();
  sim.startLoop();
}
function updateDetails() {
  if (!sim) return;
  const snapshot = sim.snapshot();
  simDetails.innerHTML = `
    <dt>Scenario</dt><dd>${assertions[activeScenarioIdx][0]}</dd>
    <dt>Squad Size</dt><dd>${snapshot.squad.count} wingmates</dd>
    <dt>Time Elapsed</dt><dd>${snapshot.combatNow.toFixed(0)} ms</dd>
    <dt>Status</dt><dd>Shared runtime replay</dd>
  `;
}
window.setInterval(updateDetails, 150);
closeSimBtn.addEventListener("click", () => {
  sim?.stopLoop();
  pageContainer.classList.remove("simulator-active");
  simulatorPanel.setAttribute("hidden", "true");
});
replayBtn.addEventListener("click", resetSimulation);
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
  if (isPaused) sim?.stopLoop();
  else sim?.startLoop();
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Byb2plY3RpbGUudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rlc3QtaGFybmVzcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdmljdG9yeS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Db21iYXRUdW5pbmcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vRmFtaWx5RGVmaW5pdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9HdW5GYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vT3JiRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrRGVmaW5pdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazUudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2sxLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazIudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9hdXRvQWltLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L2d1blNpbXVsYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc2hpZWxkRXZhbHVhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L3N3b3JkRXZhbHVhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFbnRyYW5jZVZpc3VhbHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUV4aXRWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvdmlld3BvcnQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUNhdGFsb2cudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9mYW1pbHlWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zY2VuZUVudmlyb25tZW50LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2hhcGVWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc3F1YWQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaW11bGF0aW9uL05lb25Td2FybVNpbXVsYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3Rlc3QtcGFnZXMvbXVsdGlwbGllci1mYW1pbHkvc21va2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uLCBOZW9uUG9pbnQgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUxhYmVsUG9zaXRpb24gPSBcImFib3ZlXCIgfCBcImJlbG93XCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUxhYmVsIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbj86IE5lb25TaGFwZUxhYmVsUG9zaXRpb247XG4gIG9mZnNldD86IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW5zdGFuY2Uge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBzY2FsZVg/OiBudW1iZXI7XG4gIHNjYWxlWT86IG51bWJlcjtcbiAgcm90YXRpb25YPzogbnVtYmVyO1xuICByb3RhdGlvblk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWj86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgc2hpZWxkZWQ/OiBib29sZWFuO1xuICBsaW5lVGhpY2tuZXNzPzogbnVtYmVyO1xuICBlbmVyZ3lJbnRlbnNpdHk/OiBudW1iZXI7XG4gIGVuZXJneUNvdmVyYWdlPzogbnVtYmVyO1xuICBlbmVyZ3lTcGVlZD86IG51bWJlcjtcbiAgZW5lcmd5QmxlZWQ/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGVudHJhbmNlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xuICBleHBsb2RlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbnR5cGUgVjMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG50eXBlIFZlcnRleCA9IHtcbiAgcDogVjM7IG46IFYzOyBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdOyBnbG93OiBudW1iZXI7XG4gIGVmZmVjdDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gMTQ7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgU2NlbmUgeyBhc3BlY3Q6IGYzMiwgY2FtZXJhOiBmMzIsIHRpbWU6IGYzMiwgcGFkZGluZzogZjMyIH1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuc3RydWN0IElucHV0IHtcbiAgQGxvY2F0aW9uKDApIHBvc2l0aW9uOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigzKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBlZmZlY3Q6IHZlYzRmLFxufVxuc3RydWN0IE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgZWZmZWN0OiB2ZWM0Zixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihpbnB1dDogSW5wdXQpIC0+IE91dHB1dCB7XG4gIGxldCBkZXB0aCA9IHNjZW5lLmNhbWVyYSAtIGlucHV0LnBvc2l0aW9uLno7XG4gIHZhciBvdXRwdXQ6IE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYoaW5wdXQucG9zaXRpb24ueCAqIDQgLyBzY2VuZS5hc3BlY3QsIGlucHV0LnBvc2l0aW9uLnkgKiA0LCBkZXB0aCAqIC4wNDUsIGRlcHRoKTtcbiAgb3V0cHV0Lm5vcm1hbCA9IGlucHV0Lm5vcm1hbDtcbiAgb3V0cHV0LmNvbG9yID0gaW5wdXQuY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaW5wdXQuZ2xvdztcbiAgb3V0cHV0LmVmZmVjdCA9IGlucHV0LmVmZmVjdDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZShpbnB1dC5ub3JtYWwpO1xuICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLS40NSwgLS43LCAxKSk7XG4gIGxldCBkaWZmdXNlID0gLjE4ICsgbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCkgKiAuODI7XG4gIGxldCByaW0gPSBwb3coMSAtIGFicyhub3JtYWwueiksIDIuMik7XG4gIGxldCBzaWRlID0gMSAtIGFicyhub3JtYWwueik7XG4gIGxldCByYXJlU3VyZ2UgPSBwb3cobWF4KC4wLCBzaW4oc2NlbmUudGltZSAqIGlucHV0LmVmZmVjdC56ICogLjgyICsgaW5wdXQuY29sb3IuciAqIDcuMCkpLCAyMi4wKVxuICAgICogaW5wdXQuZWZmZWN0LnggKiBpbnB1dC5lZmZlY3QueSAqIGlucHV0LmVmZmVjdC53O1xuICBsZXQgZW5lcmd5ID0gaW5wdXQuY29sb3IgKiAoZGlmZnVzZSAqIC4xMiArIHJpbSAqIGlucHV0Lmdsb3cgKiAuMzYgKyBzaWRlICogLjA4ICsgcmFyZVN1cmdlICogLjcpO1xuICByZXR1cm4gdmVjNGYoZW5lcmd5ICsgdmVjM2YocmFyZVN1cmdlICogLjE4KSwgLjEyICsgc2lkZSAqIC4xMiArIHJhcmVTdXJnZSAqIC4yOCk7XG59XG5AZnJhZ21lbnQgZm4gbGluZUZyYWdtZW50KGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBhbG9uZyA9IGlucHV0Lm5vcm1hbC54O1xuICBsZXQgYWNyb3NzID0gYWJzKGlucHV0Lm5vcm1hbC55KTtcbiAgbGV0IHBoYXNlID0gaW5wdXQubm9ybWFsLno7XG4gIGxldCBpbnRlbnNpdHkgPSBpbnB1dC5lZmZlY3QueDtcbiAgbGV0IGNvdmVyYWdlID0gaW5wdXQuZWZmZWN0Lnk7XG4gIGxldCBzcGVlZCA9IGlucHV0LmVmZmVjdC56O1xuICBsZXQgYmxlZWQgPSBpbnB1dC5lZmZlY3QudztcbiAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDMxLjAgLSBzY2VuZS50aW1lICogc3BlZWQgKiA1LjQgKyBwaGFzZSkpLCAxMC4wKTtcbiAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDEzLjAgKyBzY2VuZS50aW1lICogc3BlZWQgKiAzLjEgKyBwaGFzZSAqIDIuNykpLCAxOC4wKTtcbiAgbGV0IG5vaXNlID0gc2luKGFsb25nICogNzEuMCArIHBoYXNlICogOC4zKSAqIC41ICsgLjU7XG4gIGxldCB0aHJlc2hvbGQgPSAxLjAgLSBjb3ZlcmFnZTtcbiAgbGV0IGVsZWN0cmljaXR5ID0gc21vb3Roc3RlcCh0aHJlc2hvbGQsIHRocmVzaG9sZCArIC4xOCwgcHVsc2VBICogLjY1ICsgcHVsc2VCICogLjU1ICsgbm9pc2UgKiAuMTgpO1xuICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoLjA2LCAuMjgsIGFjcm9zcyk7XG4gIGxldCBoYWxvID0gMS4wIC0gc21vb3Roc3RlcCguMTIsIDEuMCwgYWNyb3NzKTtcbiAgbGV0IHN1cmdlID0gZWxlY3RyaWNpdHkgKiBpbnRlbnNpdHk7XG4gIGxldCBwdWxzZSA9IC43OCArIHNpbihzY2VuZS50aW1lICogc3BlZWQgKiAyLjEgKyBwaGFzZSkgKiAuMTMgKyBlbGVjdHJpY2l0eSAqIC4yNDtcbiAgbGV0IGNsb3VkID0gaGFsbyAqICguMTMgKyBzdXJnZSAqIC41Mik7XG4gIGxldCBob3QgPSBpbnB1dC5jb2xvciAqIChwdWxzZSArIGNsb3VkICogMi4xKSAqIGlucHV0Lmdsb3cgKyB2ZWMzZihjb3JlICogc3VyZ2UgKiAxLjM1KTtcbiAgbGV0IGFscGhhID0gKGNvcmUgKiAoLjcyICsgcHVsc2UgKiAuMikgKyBjbG91ZCArICgxLjAgLSBhY3Jvc3MpICogYmxlZWQgKiBlbGVjdHJpY2l0eSAqIC4yNCkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBlbnRyYW5jZU9mZnNldCA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgaWYgKGVudHJhbmNlUHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICBjb25zdCBzZWVkID0gTWF0aC5zaW4oaW5kZXggKiA5MS4xNyArIHBvaW50WzBdICogMzcuMiArIHBvaW50WzFdICogNTMuNyArIHogKiAyOS4xKSAqIDQzNzU4LjU0NTM7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZCAtIE1hdGguZmxvb3Ioc2VlZCk7XG4gICAgY29uc3QgYW5nbGUgPSByYW5kb20gKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCByYWRpdXMgPSAoaW5zdGFuY2UuZW50cmFuY2VNYWduaXR1ZGUgPz8gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogKDEgLSBlbnRyYW5jZUVhc2UpICogKC4zNSArIHJhbmRvbSAqIC43NSk7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cywgKHJhbmRvbSAtIC41KSAqIHJhZGl1cyAqIC41NV07XG4gIH07XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleCA9IDApOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZVgsIC1wb2ludFsxXSAqIHNjYWxlWSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgY29uc3QgZSA9IGVudHJhbmNlT2Zmc2V0KHBvaW50LCB6LCBpbmRleCk7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCkgKyBlWzBdLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCkgKyBlWzFdLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCkgKyBlWzJdXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBjb25zdCBhZGQgPSAoYTogVjMsIGI6IFYzLCBjOiBWMywgbm9ybWFsPzogVjMpID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsID8/IG5vcm1hbGl6ZShjcm9zcyhzdWIoYiwgYSksIHN1YihjLCBhKSkpO1xuICAgIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgICBdO1xuICAgIFthLGIsY10uZm9yRWFjaChwID0+IG91dHB1dC5wdXNoKHsgcCwgbiwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UsIGVmZmVjdCB9KSk7XG4gIH07XG4gIGNvbnN0IGZyb250ID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCBkZXB0aCAvIDIsIGluZGV4KSk7XG4gIGNvbnN0IGJhY2sgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIC1kZXB0aCAvIDIsIGluZGV4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCkpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGZyb250Lmxlbmd0aCAtIDE7IGkrKykgYWRkKGZyb250WzBdLCBmcm9udFtpXSwgZnJvbnRbaSArIDFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBiYWNrLmxlbmd0aCAtIDE7IGkrKykgYWRkKGJhY2tbMF0sIGJhY2tbaSArIDFdLCBiYWNrW2ldKTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGg7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW2ldLCBiYWNrW25leHRdKTtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbbmV4dF0sIGZyb250W25leHRdKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGVkZ2VNZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3Qgc2NhbGVYID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVYID8/IDEpO1xuICBjb25zdCBzY2FsZVkgPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVkgPz8gMSk7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCksIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKV07XG4gIH07XG4gIGNvbnN0IGV4cGxvZGUgPSAoYTogVjMsIGI6IFYzLCBpbmRleDogbnVtYmVyKTogW1YzLCBWM10gPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDAsIDEgLSBlbnRyYW5jZUVhc2UpO1xuICAgIGlmICghcHJvZ3Jlc3MpIHJldHVybiBbYSwgYl07XG4gICAgY29uc3QgbXggPSAoYVswXSArIGJbMF0pIC8gMiAtIChpbnN0YW5jZS54ID8/IDApLCBteSA9IChhWzFdICsgYlsxXSkgLyAyIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChteCwgbXkpIHx8IDE7XG4gICAgY29uc3QgbWFnbml0dWRlID0gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgY29uc3Qgc3BlZWQgPSBtYWduaXR1ZGUgKiAoLjQ1ICsgKE1hdGguc2luKGluZGV4ICogOTEuMTcpICogLjUgKyAuNSkgKiAuNTUpO1xuICAgIGNvbnN0IGR4ID0gbXggLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkLCBkeSA9IG15IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCArIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAuMTg7XG4gICAgY29uc3QgYW5nbGUgPSBwcm9ncmVzcyAqIChpbmRleCAlIDIgPyAxIDogLTEpICogMi40O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IChwOiBWMyk6IFYzID0+IHtcbiAgICAgIGNvbnN0IHggPSBwWzBdIC0gKGluc3RhbmNlLnggPz8gMCksIHkgPSBwWzFdIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgICByZXR1cm4gW3ggKiBNYXRoLmNvcyhhbmdsZSkgLSB5ICogTWF0aC5zaW4oYW5nbGUpICsgKGluc3RhbmNlLnggPz8gMCkgKyBkeCwgeCAqIE1hdGguc2luKGFuZ2xlKSArIHkgKiBNYXRoLmNvcyhhbmdsZSkgKyAoaW5zdGFuY2UueSA/PyAwKSArIGR5LCBwWzJdXTtcbiAgICB9O1xuICAgIHJldHVybiBbdHJhbnNmb3JtKGEpLCB0cmFuc2Zvcm0oYildO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGxldCBkaXN0YW5jZSA9IDA7XG4gIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICBdO1xuICBjb25zdCBhZGRMaW5lID0gKGE6IFYzLCBiOiBWMywgcGhhc2U6IG51bWJlciwgd2lkdGhTY2FsZSA9IDEsIG9wYWNpdHkgPSAxKSA9PiB7XG4gICAgW2EsIGJdID0gZXhwbG9kZShhLCBiLCBNYXRoLmZsb29yKGRpc3RhbmNlICogMTAwKSArIE1hdGguZmxvb3IocGhhc2UgKiAxMCkpO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IC4wMDE7XG4gICAgY29uc3Qgd2lkdGggPSAoaW5zdGFuY2UubGluZVRoaWNrbmVzcyA/PyAxKSAqIC4wMTggKiB3aWR0aFNjYWxlO1xuICAgIGNvbnN0IG94ID0gLWR5IC8gbGVuZ3RoICogd2lkdGgsIG95ID0gZHggLyBsZW5ndGggKiB3aWR0aDtcbiAgICBjb25zdCBhMDogVjMgPSBbYVswXSAtIG94LCBhWzFdIC0gb3ksIGFbMl1dLCBhMTogVjMgPSBbYVswXSArIG94LCBhWzFdICsgb3ksIGFbMl1dO1xuICAgIGNvbnN0IGIwOiBWMyA9IFtiWzBdIC0gb3gsIGJbMV0gLSBveSwgYlsyXV0sIGIxOiBWMyA9IFtiWzBdICsgb3gsIGJbMV0gKyBveSwgYlsyXV07XG4gICAgY29uc3Qgc3RhcnQgPSBkaXN0YW5jZSAqIDIuNCwgZW5kID0gKGRpc3RhbmNlICsgbGVuZ3RoKSAqIDIuNDtcbiAgICBjb25zdCBwdXNoID0gKHA6IFYzLCBhbG9uZzogbnVtYmVyLCBhY3Jvc3M6IG51bWJlcikgPT5cbiAgICAgIG91dHB1dC5wdXNoKHsgcCwgbjogW2Fsb25nLCBhY3Jvc3MsIHBoYXNlXSwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogb3BhY2l0eSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlICogKDEgKyBNYXRoLnNpbigoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogTWF0aC5QSSkgKiAoaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogMi4yKSAqICgxIC0gKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIC43KSwgZWZmZWN0IH0pO1xuICAgIHB1c2goYTAsc3RhcnQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIwLGVuZCwtMSk7XG4gICAgcHVzaChiMCxlbmQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIxLGVuZCwxKTtcbiAgICBkaXN0YW5jZSArPSBsZW5ndGg7XG4gIH07XG4gIGNvbnN0IGFkZExvb3AgPSAocG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSwgejogbnVtYmVyLCBwaGFzZTogbnVtYmVyKSA9PlxuICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgeiksIG1vdmUocG9pbnRzWyhpbmRleCArIDEpICUgcG9pbnRzLmxlbmd0aF0sIHopLCBwaGFzZSArIGluZGV4ICogLjczKSk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCBkZXB0aCAvIDIsIC4zKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIC1kZXB0aCAvIDIsIDIuMSk7XG4gIHNoYXBlLmhvbGVzPy5mb3JFYWNoKChob2xlLCBpbmRleCkgPT4ge1xuICAgIGFkZExvb3AoaG9sZSwgZGVwdGggLyAyICsgLjAwMiwgMy43ICsgaW5kZXgpO1xuICAgIGFkZExvb3AoaG9sZSwgLWRlcHRoIC8gMiAtIC4wMDIsIDUuMiArIGluZGV4KTtcbiAgfSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgLWRlcHRoIC8gMiksIG1vdmUocG9pbnQsIGRlcHRoIC8gMiksIDYuMSArIGluZGV4KSk7XG4gIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAgKiAoaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSk7XG4gIGNvbnN0IGJyYW5jaFN0cmVuZ3RoID0gKGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxKSAqIChpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIpO1xuICBjb25zdCByYW5kb20gPSAoc2VlZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnNpbihzZWVkICogMTIuOTg5OCArIHNoYXBlLnBvaW50cy5sZW5ndGggKiA3OC4yMzMpICogNDM3NTguNTQ1MztcbiAgICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgcm90YXRlZCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaWFuczogbnVtYmVyKTogTmVvblBvaW50ID0+IFtcbiAgICB4ICogTWF0aC5jb3MocmFkaWFucykgLSB5ICogTWF0aC5zaW4ocmFkaWFucyksXG4gICAgeCAqIE1hdGguc2luKHJhZGlhbnMpICsgeSAqIE1hdGguY29zKHJhZGlhbnMpLFxuICBdO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY3ljbGUgPSBNYXRoLmZsb29yKHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEpO1xuICAgIGNvbnN0IGFnZSA9IHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEgLSBjeWNsZTtcbiAgICBjb25zdCBzZWVkID0gY3ljbGUgKiAzNy4xICsgaW5kZXggKiAxMS43O1xuICAgIGNvbnN0IGFjdGl2ZUR1cmF0aW9uID0gLjE4ICsgcmFuZG9tKHNlZWQgKyAxKSAqIC4yNTtcbiAgICBjb25zdCBoYXplRHVyYXRpb24gPSBNYXRoLm1pbigxLCBhY3RpdmVEdXJhdGlvbiArIC4yOCArIHJhbmRvbShzZWVkICsgMikgKiAuMjIpO1xuICAgIGNvbnN0IGJyYW5jaEFjdGl2ZSA9IGFnZSA8IGFjdGl2ZUR1cmF0aW9uO1xuICAgIGNvbnN0IGhhemVBY3RpdmUgPSBhZ2UgPCBoYXplRHVyYXRpb247XG4gICAgaWYgKCghYnJhbmNoQWN0aXZlICYmICFoYXplQWN0aXZlKSB8fCByYW5kb20oc2VlZCArIDMpID4gTWF0aC5taW4oLjc4LCBicmFuY2hTdHJlbmd0aCAqIC41KSkgcmV0dXJuO1xuICAgIGNvbnN0IG5leHQgPSBzaGFwZS5wb2ludHNbKGluZGV4ICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoXTtcbiAgICBjb25zdCB0ID0gLjE2ICsgcmFuZG9tKHNlZWQgKyA0KSAqIC42ODtcbiAgICBjb25zdCBiYXNlOiBOZW9uUG9pbnQgPSBbcG9pbnRbMF0gKyAobmV4dFswXSAtIHBvaW50WzBdKSAqIHQsIHBvaW50WzFdICsgKG5leHRbMV0gLSBwb2ludFsxXSkgKiB0XTtcbiAgICBjb25zdCB0eCA9IG5leHRbMF0gLSBwb2ludFswXSwgdHkgPSBuZXh0WzFdIC0gcG9pbnRbMV0sIHRsID0gTWF0aC5oeXBvdCh0eCwgdHkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcmFuZG9tKHNlZWQgKyA1KSA+IC41ID8gMSA6IC0xO1xuICAgIGNvbnN0IHBlcnBlbmRpY3VsYXI6IE5lb25Qb2ludCA9IFstdHkgLyB0bCAqIGRpcmVjdGlvbiwgdHggLyB0bCAqIGRpcmVjdGlvbl07XG4gICAgY29uc3QgZmlyc3RKaXR0ZXIgPSAoMTAgKyByYW5kb20oc2VlZCArIDYpICogMTApICogTWF0aC5QSSAvIDE4MCAqIChyYW5kb20oc2VlZCArIDcpID4gLjUgPyAxIDogLTEpO1xuICAgIGxldCBoZWFkaW5nID0gcm90YXRlZChwZXJwZW5kaWN1bGFyWzBdLCBwZXJwZW5kaWN1bGFyWzFdLCBmaXJzdEppdHRlcik7XG4gICAgY29uc3Qgc2VnbWVudENvdW50ID0gMSArIE1hdGguZmxvb3IocmFuZG9tKHNlZWQgKyA4KSAqIDMpO1xuICAgIGNvbnN0IHBvaW50czogTmVvblBvaW50W10gPSBbYmFzZV07XG4gICAgZm9yIChsZXQgc2VnbWVudCA9IDA7IHNlZ21lbnQgPCBzZWdtZW50Q291bnQ7IHNlZ21lbnQrKykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gLjA1NSArIHJhbmRvbShzZWVkICsgMTAgKyBzZWdtZW50KSAqIC4wOTU7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBwb2ludHMucHVzaChbcHJldmlvdXNbMF0gKyBoZWFkaW5nWzBdICogbGVuZ3RoLCBwcmV2aW91c1sxXSArIGhlYWRpbmdbMV0gKiBsZW5ndGhdKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICgyMCArIHJhbmRvbShzZWVkICsgMjAgKyBzZWdtZW50KSAqIDQwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICBoZWFkaW5nID0gcm90YXRlZChoZWFkaW5nWzBdLCBoZWFkaW5nWzFdLCBvZmZzZXQgKiAocmFuZG9tKHNlZWQgKyAzMCArIHNlZ21lbnQpID4gLjUgPyAxIDogLTEpKTtcbiAgICB9XG4gICAgaWYgKGhhemVBY3RpdmUpIHtcbiAgICAgIGNvbnN0IGZhZGUgPSAxIC0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pIC8gTWF0aC5tYXgoLjAwMSwgaGF6ZUR1cmF0aW9uIC0gYWN0aXZlRHVyYXRpb24pO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgKiAuMDM1O1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbmQgPSBwb2ludHNbc2VnbWVudCArIDFdO1xuICAgICAgICBjb25zdCBoYXplU3RhcnQ6IE5lb25Qb2ludCA9IFtzdGFydFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgc3RhcnRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBjb25zdCBoYXplRW5kOiBOZW9uUG9pbnQgPSBbZW5kWzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBlbmRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBhZGRMaW5lKG1vdmUoaGF6ZVN0YXJ0LCBkZXB0aCAvIDIgKyAuMDAyKSwgbW92ZShoYXplRW5kLCBkZXB0aCAvIDIgKyAuMDAyKSwgMzEgKyBzZWVkICsgc2VnbWVudCwgMS40NSArIGZhZGUgKiAuNTUsIGZhZGUgKiAuMzQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChicmFuY2hBY3RpdmUpIHtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgYWRkTGluZShtb3ZlKHN0YXJ0LCBkZXB0aCAvIDIgKyAuMDA2KSwgbW92ZShwb2ludHNbc2VnbWVudCArIDFdLCBkZXB0aCAvIDIgKyAuMDA2KSwgMTEgKyBzZWVkICsgc2VnbWVudCwgLjQyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2xpbmVQaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjZGVwdGg6IEdQVVRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgI2xhYmVsTGF5ZXI6IEhUTUxEaXZFbGVtZW50O1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IHBhcmVudCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnQgJiYgZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdGhpcy4jbGFiZWxMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy4jbGFiZWxMYXllci5jbGFzc05hbWUgPSBcIm5lb24tc2hhcGUtbGFiZWwtbGF5ZXJcIjtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHsgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBpbnNldDpcIjBcIiwgcG9pbnRlckV2ZW50czpcIm5vbmVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiB9KTtcbiAgICBwYXJlbnQ/LmFwcGVuZCh0aGlzLiNsYWJlbExheWVyKTtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBleHRydWRlZCBzaGFwZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiwgY3VsbE1vZGU6IFwiYmFja1wiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiBmYWxzZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2xpbmVQaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImxpbmVGcmFnbWVudFwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgICAgfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBzaGFwZSBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10sIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmVydGljZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChtZXNoKTtcbiAgICBjb25zdCBlZGdlcyA9IGluc3RhbmNlcy5mbGF0TWFwKGVkZ2VNZXNoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIGNvbnN0IGVkZ2VEYXRhID0gbmV3IEZsb2F0MzJBcnJheShlZGdlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBlZGdlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGVkZ2VEYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGRhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBjb25zdCBlZGdlQnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZWRnZURhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHZlcnRleEJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgaWYgKGVkZ2VEYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIoZWRnZUJ1ZmZlciwgMCwgZWRnZURhdGEpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgNSwgcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCAwXSkpO1xuICAgIGNvbnN0IGJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgbGluZUJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jbGluZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbeyB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIiwgc3RvcmVPcDogXCJzdG9yZVwiIH1dLFxuICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDogeyB2aWV3OiB0aGlzLiNkZXB0aCEuY3JlYXRlVmlldygpLCBkZXB0aENsZWFyVmFsdWU6IDEsIGRlcHRoTG9hZE9wOiBcImNsZWFyXCIsIGRlcHRoU3RvcmVPcDogXCJzdG9yZVwiIH0sXG4gICAgfSk7XG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgdmVydGV4QnVmZmVyKTsgcGFzcy5kcmF3KHZlcnRpY2VzLmxlbmd0aCk7IH1cbiAgICBpZiAoZWRnZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jbGluZVBpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgbGluZUJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIGVkZ2VCdWZmZXIpOyBwYXNzLmRyYXcoZWRnZXMubGVuZ3RoKTsgfVxuICAgIHBhc3MuZW5kKCk7IHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICAgIHRoaXMuI3JlbmRlckxhYmVscyhpbnN0YW5jZXMpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLm9uU3VibWl0dGVkV29ya0RvbmUoKS50aGVuKCgpID0+IHsgdmVydGV4QnVmZmVyLmRlc3Ryb3koKTsgZWRnZUJ1ZmZlci5kZXN0cm95KCk7IH0pO1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQgeyB0aGlzLiNsYWJlbExheWVyLnJlbW92ZSgpOyB0aGlzLiNkZXB0aD8uZGVzdHJveSgpOyB0aGlzLiNzY2VuZUJ1ZmZlci5kZXN0cm95KCk7IGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7IH1cbiAgI3JlbmRlckxhYmVscyhpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10pOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHtcbiAgICAgIGxlZnQ6IGAke3RoaXMuY2FudmFzLm9mZnNldExlZnR9cHhgLFxuICAgICAgdG9wOiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRUb3B9cHhgLFxuICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgIHdpZHRoOiBgJHt0aGlzLmNhbnZhcy5jbGllbnRXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMuY2FudmFzLmNsaWVudEhlaWdodH1weGAsXG4gICAgfSk7XG4gICAgdGhpcy4jbGFiZWxMYXllci5yZXBsYWNlQ2hpbGRyZW4oLi4uaW5zdGFuY2VzLmZsYXRNYXAoaW5zdGFuY2UgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5sYWJlbD8udGV4dCB8fCAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSA8PSAwKSByZXR1cm4gW107XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gICAgICBjb25zdCB4ID0gNTAgKyAoaW5zdGFuY2UueCA/PyAwKSAqIDQwIC8gKHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHkgPSA1MCAtIChpbnN0YW5jZS55ID8/IDApICogNDA7XG4gICAgICBjb25zdCBzaGFwZVJhZGl1cyA9IHNjYWxlICogdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogLjI7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzaGFwZVJhZGl1cyArIChpbnN0YW5jZS5sYWJlbC5vZmZzZXQgPz8gOCkgKyAoaW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTgpICogLjU7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGluc3RhbmNlLmxhYmVsLnBvc2l0aW9uID8/IFwiYWJvdmVcIjtcbiAgICAgIGxldCB0eCA9IDAsIHR5ID0gMDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJhYm92ZVwiKSB0eSA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYmVsb3dcIikgdHkgPSBvZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibGVmdFwiKSB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwicmlnaHRcIikgdHggPSBvZmZzZXQ7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5zdGFuY2UubGFiZWwudGV4dDtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6YCR7eH0lYCwgdG9wOmAke3l9JWAsIHRyYW5zZm9ybTpgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7dHh9cHgpLGNhbGMoLTUwJSArICR7dHl9cHgpKWAsXG4gICAgICAgIGNvbG9yOmluc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yLCBmb250RmFtaWx5Omluc3RhbmNlLmxhYmVsLmZvbnRGYW1pbHkgPz8gXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBmb250U2l6ZTpgJHtpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOH1weGAsIGZvbnRXZWlnaHQ6U3RyaW5nKGluc3RhbmNlLmxhYmVsLmZvbnRXZWlnaHQgPz8gNjAwKSxcbiAgICAgICAgdGV4dFNoYWRvdzpgMCAwIDVweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfSwwIDAgMTRweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfWAsIHdoaXRlU3BhY2U6XCJub3dyYXBcIixcbiAgICAgICAgb3BhY2l0eTpTdHJpbmcoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtlbGVtZW50XTtcbiAgICB9KSk7XG4gIH1cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy4jbG9naWNhbFNpemU7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0IHx8ICF0aGlzLiNkZXB0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy4jZGVwdGggJiYgdGhpcy5jYW52YXMud2lkdGggPT09IHdpZHRoICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UsIE5lb25TaGFwZUxhYmVsIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBlbnVtIE5lb25TaGFwZURpc3Bvc2FsIHtcbiAgRmFkZU91dCA9IFwiZmFkZU91dFwiLFxuICBEaXNhcHBlYXIgPSBcImRpc2FwcGVhclwiLFxuICBFeHBsb2RlID0gXCJleHBsb2RlXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlVmVjdG9yIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW1wYWN0IHtcbiAgZGlyZWN0aW9uOiBOZW9uU2hhcGVWZWN0b3I7XG4gIG1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUFjdG9yT3B0aW9ucyB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICB2ZWxvY2l0eT86IFBhcnRpYWw8TmVvblNoYXBlVmVjdG9yPjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbD86IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25TaGFwZUFjdG9yIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3I7XG4gIHNjYWxlOiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbDogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU6IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbjogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZTogbnVtYmVyO1xuICByb3RhdGlvblggPSAwO1xuICByb3RhdGlvblkgPSAwO1xuICByb3RhdGlvblogPSAwO1xuICBkaXNwb3NlZCA9IGZhbHNlO1xuICAjZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgI2ltcGFjdFZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcbiAgI2ltcGFjdFJvdGF0aW9uOiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uU2hhcGVBY3Rvck9wdGlvbnMpIHtcbiAgICB0aGlzLnNoYXBlID0gb3B0aW9ucy5zaGFwZTtcbiAgICB0aGlzLnggPSBvcHRpb25zLnggPz8gMDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnkgPz8gMDtcbiAgICB0aGlzLnogPSBvcHRpb25zLnogPz8gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiBvcHRpb25zLnZlbG9jaXR5Py54ID8/IDAsIHk6IG9wdGlvbnMudmVsb2NpdHk/LnkgPz8gMCB9O1xuICAgIHRoaXMuc2NhbGUgPSBvcHRpb25zLnNjYWxlID8/IDE7XG4gICAgdGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG9wdGlvbnMuZGlzcG9zYWwgPz8gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dDtcbiAgICB0aGlzLmV4cGxvZGVNYWduaXR1ZGUgPSBvcHRpb25zLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IG9wdGlvbnMuZW50cmFuY2VEdXJhdGlvbiA/PyAuNDU7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG9wdGlvbnMuZW50cmFuY2VNYWduaXR1ZGUgPz8gLjU1O1xuICB9XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyLCB6ID0gdGhpcy56KTogdGhpcyB7XG4gICAgdGhpcy54ID0geDsgdGhpcy55ID0geTsgdGhpcy56ID0gejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZlbG9jaXR5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0geDsgdGhpcy52ZWxvY2l0eS55ID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltcGFjdCh7IGRpcmVjdGlvbiwgbWFnbml0dWRlIH06IE5lb25TaGFwZUltcGFjdCk6IHRoaXMge1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICAgIGNvbnN0IHggPSBkaXJlY3Rpb24ueCAvIGxlbmd0aCwgeSA9IGRpcmVjdGlvbi55IC8gbGVuZ3RoO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKz0geCAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICs9IHkgKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCArPSB5ICogbWFnbml0dWRlICogLjk7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAtPSB4ICogbWFnbml0dWRlICogLjk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNwb3NlKG1vZGUgPSB0aGlzLmRpc3Bvc2FsKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG1vZGU7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhciA/IDEgOiAuMDAwMTtcbiAgICBpZiAobW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVudGVyKGR1cmF0aW9uID0gdGhpcy5lbnRyYW5jZUR1cmF0aW9uLCBtYWduaXR1ZGUgPSB0aGlzLmVudHJhbmNlTWFnbml0dWRlKTogdGhpcyB7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gTWF0aC5tYXgoLjAwMSwgZHVyYXRpb24pO1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWdlbmVyYXRlKCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSAodGhpcy52ZWxvY2l0eS54ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWCArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25ZICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKiBkZWx0YVNlY29uZHM7XG4gICAgY29uc3QgZGFtcGluZyA9IE1hdGguZXhwKC03ICogZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKj0gZGFtcGluZztcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKj0gZGFtcGluZztcbiAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+IDAgJiYgIXRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IC44NSA6IC41NTtcbiAgICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNkaXNwb3NhbFByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gZHVyYXRpb24pO1xuICAgICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPj0gMSkgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLiNlbnRyYW5jZVByb2dyZXNzIDwgMSkgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyB0aGlzLmVudHJhbmNlRHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICAgIGNvbnN0IGZhZGUgPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0ID8gMSAtIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAxO1xuICAgIHJldHVybiB7XG4gICAgICBzaGFwZTogdGhpcy5zaGFwZSwgeDogdGhpcy54LCB5OiB0aGlzLnksIHo6IHRoaXMueiwgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvblg6IHRoaXMucm90YXRpb25YLCByb3RhdGlvblk6IHRoaXMucm90YXRpb25ZLCByb3RhdGlvblo6IHRoaXMucm90YXRpb25aLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsIGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiB0aGlzLmRpc3Bvc2VkID8gMCA6IGZhZGUsXG4gICAgICBlbnRyYW5jZVByb2dyZXNzOiB0aGlzLiNlbnRyYW5jZVByb2dyZXNzLFxuICAgICAgZW50cmFuY2VNYWduaXR1ZGU6IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IHRoaXMuZXhwbG9kZU1hZ25pdHVkZSxcbiAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICB9O1xuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvblByaW1pdGl2ZVNoYXBlID0gXCJjaXJjbGVcIiB8IFwiYm9sdFwiIHwgXCJvcmJcIiB8IFwicmluZ1wiIHwgXCJzcGFya1wiIHwgXCJkaWFtb25kXCIgfCBcInBlbnRhZ29uXCIgfCBcImxpbmVcIiB8IFwiYXJjXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByaW1pdGl2ZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlY29uZGFyeUNvbG9yPzogc3RyaW5nO1xuICBnbG93PzogbnVtYmVyO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIHRleHR1cmU/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBhcmNTdGFydD86IG51bWJlcjtcbiAgYXJjRW5kPzogbnVtYmVyO1xuICBzaGFwZT86IE5lb25QcmltaXRpdmVTaGFwZTtcbn1cblxuY29uc3QgbWF4UHJpbWl0aXZlcyA9IDEwMjQ7XG5jb25zdCBmbG9hdHNQZXJQcmltaXRpdmUgPSAyMDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqLyBgXG5zdHJ1Y3QgU2NlbmUgeyByZXNvbHV0aW9uOiB2ZWMyZiwgY291bnQ6IGYzMiwgdGltZTogZjMyIH1cbnN0cnVjdCBQcmltaXRpdmUge1xuICBwb3NpdGlvbjogdmVjMmYsXG4gIHNpemU6IHZlYzJmLFxuICBjb2xvcjogdmVjNGYsXG4gIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgZ2xvdzogZjMyLFxuICBpbnRlbnNpdHk6IGYzMixcbiAgc2hhcGU6IGYzMixcbiAgdGV4dHVyZTogZjMyLFxuICByaW1JbnRlbnNpdHk6IGYzMixcbiAgc2hhZG93U3RyZW5ndGg6IGYzMixcbiAgcGFkZGluZzogdmVjMmYsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gaXRlbXM6IGFycmF5PFByaW1pdGl2ZT47XG5cbnN0cnVjdCBWZXJ0ZXhPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgaW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBzaGFwZTogZjMyLFxuICBAbG9jYXRpb24oNSkgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oNikgdGV4dHVyZTogZjMyLFxuICBAbG9jYXRpb24oNykgcmltSW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig4KSBzaGFkb3dTdHJlbmd0aDogZjMyLFxufVxuXG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2ZXJ0ZXg6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IFZlcnRleE91dHB1dCB7XG4gIHZhciBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgaXRlbSA9IGl0ZW1zW2luc3RhbmNlXTtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2ZXJ0ZXhdO1xuICB2YXIgcGl4ZWxPZmZzZXQgPSBsb2NhbCAqIGl0ZW0uc2l6ZTtcbiAgaWYgKGl0ZW0udGV4dHVyZSAhPSAwKSB7XG4gICAgbGV0IGMgPSBjb3MoaXRlbS50ZXh0dXJlKTtcbiAgICBsZXQgcyA9IHNpbihpdGVtLnRleHR1cmUpO1xuICAgIHBpeGVsT2Zmc2V0ID0gdmVjMmYocGl4ZWxPZmZzZXQueCAqIGMgLSBwaXhlbE9mZnNldC55ICogcywgcGl4ZWxPZmZzZXQueCAqIHMgKyBwaXhlbE9mZnNldC55ICogYyk7XG4gIH1cbiAgbGV0IHBpeGVsID0gaXRlbS5wb3NpdGlvbiArIHBpeGVsT2Zmc2V0O1xuICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKHBpeGVsLnggLyBzY2VuZS5yZXNvbHV0aW9uLnggKiAyIC0gMSwgMSAtIHBpeGVsLnkgLyBzY2VuZS5yZXNvbHV0aW9uLnkgKiAyLCAwLCAxKTtcbiAgb3V0cHV0LmxvY2FsID0gbG9jYWw7XG4gIG91dHB1dC5jb2xvciA9IGl0ZW0uY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaXRlbS5nbG93O1xuICBvdXRwdXQuaW50ZW5zaXR5ID0gaXRlbS5pbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFwZSA9IGl0ZW0uc2hhcGU7XG4gIG91dHB1dC5zZWNvbmRhcnlDb2xvciA9IGl0ZW0uc2Vjb25kYXJ5Q29sb3I7XG4gIG91dHB1dC50ZXh0dXJlID0gaXRlbS50ZXh0dXJlO1xuICBvdXRwdXQucmltSW50ZW5zaXR5ID0gaXRlbS5yaW1JbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFkb3dTdHJlbmd0aCA9IGl0ZW0uc2hhZG93U3RyZW5ndGg7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgaWYgKGlucHV0LnNoYXBlID4gNy41KSB7XG4gICAgbGV0IHJhZGl1cyA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gICAgbGV0IGFuZ2xlID0gYXRhbjIoaW5wdXQubG9jYWwueSwgaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFuZ2xlIDwgaW5wdXQucmltSW50ZW5zaXR5IHx8IGFuZ2xlID4gaW5wdXQuc2hhZG93U3RyZW5ndGggfHwgcmFkaXVzID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgbGluZURpc3RhbmNlID0gYWJzKHJhZGl1cyAtIDAuNzgpO1xuICAgIGlmIChsaW5lRGlzdGFuY2UgPiAwLjE2KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTIsIDAuMDM4LCBsaW5lRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4wMjUsIDAuMTYsIGxpbmVEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcHVsc2VBID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDIzLjAgLSBzY2VuZS50aW1lICogOC41KSksIDE2LjApO1xuICAgIGxldCBwdWxzZUIgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMTEuMCArIHNjZW5lLnRpbWUgKiA1LjMgKyAxLjcpKSwgMjQuMCk7XG4gICAgbGV0IGdyYWluID0gc2luKGFuZ2xlICogNzEuMCArIHNjZW5lLnRpbWUgKiAzLjEpICogMC41ICsgMC41O1xuICAgIGxldCBzdXJnZSA9IHNtb290aHN0ZXAoMC43MiwgMC45NCwgcHVsc2VBICogMC43ICsgcHVsc2VCICogMC42NSArIGdyYWluICogMC4xMik7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuODggKyBzdXJnZSAqIDAuNjUpICsgaGFsbyAqICgwLjIyICsgc3VyZ2UgKiAwLjkpKSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogc3VyZ2UgKiAwLjkpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNi41KSB7XG4gICAgbGV0IGFsb25nID0gaW5wdXQubG9jYWwueTtcbiAgICBsZXQgYWNyb3NzID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhY3Jvc3MgPiAxLjAgfHwgYWJzKGFsb25nKSA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDgsIDAuMjQsIGFjcm9zcyk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjEyLCAxLjAsIGFjcm9zcykpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5kRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMC43MiwgMS4wLCBhYnMoYWxvbmcpKTtcbiAgICBsZXQgdHJhdmVsID0gcG93KG1heCgwLjAsIHNpbihhbG9uZyAqIDI0LjAgLSBzY2VuZS50aW1lICogOC4wICsgaW5wdXQudGV4dHVyZSkpLCAxNC4wKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC43NSArIHRyYXZlbCAqIDAuNSkgKyBoYWxvICogKDAuMiArIHRyYXZlbCAqIDAuNTUpKSAqIGVuZEZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHRyYXZlbCAqIDAuNzUpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNS41KSB7XG4gICAgLy8gUGVudGFnb24gU0RGXG4gICAgLy8gbG9jYWwgaXMgaW4gWy0xLCAxXSByYW5nZS4gTGV0J3MgZmluZCBwZW50YWdvbiBkaXN0YW5jZS5cbiAgICBsZXQgcHggPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgbGV0IHB5ID0gaW5wdXQubG9jYWwueTtcbiAgICAvLyBQZW50YWdvbiBjb25zdGFudHMgZm9yIHZlcnRpY2VzL2VkZ2VzXG4gICAgbGV0IGsgPSB2ZWMzZigtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAxLjM3NjM4MTkyKTsgLy8gY29zL3NpbiBvZiA3MiwgcGx1cyBoZWlnaHQgZmFjdG9yXG4gICAgLy8gUHJvamVjdC9NaXJyb3IgYWNyb3NzIHRoZSBzeW1tZXRyeSBheGVzIG9mIHJlZ3VsYXIgcGVudGFnb25cbiAgICB2YXIgcCA9IHZlYzJmKHB4LCBweSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZigtay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZigtay54LCBrLnkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZihrLngsIGsueSk7XG4gICAgcC54ID0gcC54IC0gY2xhbXAocC54LCAtay56ICogMC41LCBrLnogKiAwLjUpO1xuICAgIGxldCBkID0gbGVuZ3RoKHAgLSB2ZWMyZigwLCAwLjcyKSkgKiBzaWduKHAueSAtIDAuNzIpO1xuICAgIC8vIE1hcCBkIHRvIGEgbm9ybWFsaXplZCByYWRpdXMgc2NhbGVcbiAgICBsZXQgc2NhbGVEID0gZCArIDAuMzU7IC8vIG9mZnNldCBwZW50YWdvbiB0byBmaXQgYm91bmRzIG5pY2VseVxuICAgIGlmIChzY2FsZUQgPiAwLjgpIHsgZGlzY2FyZDsgfVxuICAgIFxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC41LCAwLjY1LCBzY2FsZUQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNDUsIDAuNTMsIHNjYWxlRCkgKiAoMSAtIHNtb290aHN0ZXAoMC42NSwgMC43NSwgc2NhbGVEKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgtMC4yLCAwLjUsIHNjYWxlRCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC41NSwgMC44LCBzY2FsZUQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzggKyBib3JkZXIgKiAxLjM1O1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC41KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNzUgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC40NSkgKiBmaWxsICogMC4zNTtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC40O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA0LjUpIHtcbiAgICBsZXQgZCA9IGFicyhpbnB1dC5sb2NhbC54KSArIGFicyhpbnB1dC5sb2NhbC55KTtcbiAgICBpZiAoZCA+IDEuMDgpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC43OCwgMC45MiwgZCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC43MiwgMC44MiwgZCkgKiAoMSAtIHNtb290aHN0ZXAoMC45MiwgMS4wMiwgZCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoMC4wLCAwLjc4LCBkKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjgyLCAxLjA4LCBkKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM1ICsgYm9yZGVyICogMS4yO1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjYgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC41KSAqIGZpbGwgKiAwLjM4O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM1O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAxLjUpIHtcbiAgICBsZXQgcjIgPSBkb3QoaW5wdXQubG9jYWwsIGlucHV0LmxvY2FsKTtcbiAgICBpZiAocjIgPiAxKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgeiA9IHNxcnQobWF4KDAsIDEgLSByMikpO1xuICAgIGxldCBub3JtYWwgPSBub3JtYWxpemUodmVjM2YoaW5wdXQubG9jYWwueCwgLWlucHV0LmxvY2FsLnksIHopKTtcbiAgICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLTAuNTUsIC0wLjcsIDAuOSkpO1xuICAgIGxldCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCk7XG4gICAgbGV0IHJpbSA9IHBvdygxIC0geiwgMi4yKSAqIGlucHV0LnJpbUludGVuc2l0eTtcbiAgICBsZXQgc2hhZG93ID0gbWl4KDEgLSBpbnB1dC5zaGFkb3dTdHJlbmd0aCwgMSwgc21vb3Roc3RlcCgtMC42NSwgMC40NSwgZG90KG5vcm1hbC54eSwgbGlnaHQueHkpKSk7XG4gICAgbGV0IGdyYWluID0gc2luKGlucHV0LmxvY2FsLnggKiAyMyArIGlucHV0LmxvY2FsLnkgKiAxNykgKiBzaW4oaW5wdXQubG9jYWwueSAqIDMxIC0gaW5wdXQubG9jYWwueCAqIDExKTtcbiAgICBsZXQgdGV4dHVyZSA9IDEgKyBncmFpbiAqIGlucHV0LnRleHR1cmUgKiAwLjIyO1xuICAgIGxldCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0LCBub3JtYWwpLCB2ZWMzZigwLDAsMSkpLCAwKSwgMjgpICogMS44O1xuICAgIGxldCBib2R5ID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBkaWZmdXNlICogMC44ICsgMC4yKSAqIHNoYWRvdyAqIHRleHR1cmU7XG4gICAgbGV0IGhhbG8gPSBwb3cobWF4KDAsIDEgLSBsZW5ndGgoaW5wdXQubG9jYWwpKSwgMC4zNSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCByZ2IgPSBib2R5ICogKDAuMzggKyBkaWZmdXNlICogMC45NSkgKyBpbnB1dC5jb2xvci5yZ2IgKiByaW0gKyB2ZWMzZihzcGVjdWxhcikgKyBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IgKiBpbnB1dC5pbnRlbnNpdHksIDEpO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDMuNSkge1xuICAgIGxldCBheGlzID0gbWluKGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgICBsZXQgYXJtID0gMSAtIHNtb290aHN0ZXAoMC4wNCwgMC4xOCwgYXhpcyk7XG4gICAgbGV0IGZhZGUgPSAxIC0gc21vb3Roc3RlcCgwLjIsIDEsIG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSkpO1xuICAgIGxldCBlbmVyZ3kgPSBhcm0gKiBmYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGFybSkgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMi41KSB7XG4gICAgbGV0IHJpbmdEaXN0YW5jZSA9IGFicyhsZW5ndGgoaW5wdXQubG9jYWwpIC0gMC42Mik7XG4gICAgbGV0IHJpbmcgPSAxIC0gc21vb3Roc3RlcCgwLjA1NSwgMC4xOCwgcmluZ0Rpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjEyLCAwLjQyLCByaW5nRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZXJneSA9IChyaW5nICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIHJpbmcpICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMC41KSB7XG4gICAgZGlzdGFuY2UgPSBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICB9XG4gIGxldCBjb3JlID0gMSAtIHNtb290aHN0ZXAoMC4zOCwgMC43NiwgZGlzdGFuY2UpO1xuICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjMsIDEsIGRpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICBsZXQgZW5lcmd5ID0gKGNvcmUgKyBoYWxvICogMC41NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gIGxldCBjaHJvbWF0aWNDb3JlID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBwb3cobWF4KGNvcmUsIDApLCAyKSk7XG4gIGxldCByYXcgPSBjaHJvbWF0aWNDb3JlICogKGNvcmUgKiAxLjA1ICsgaGFsbyAqIDAuNDIpO1xuICBsZXQgcmdiID0gcmF3IC8gKHZlYzNmKDEpICsgcmF3ICogMC4zMik7XG4gIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xufVxuYDtcblxuZnVuY3Rpb24gcmdiYShoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdmFsdWUgPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGlmICghL15bMC05YS1mXXs2fSQvaS50ZXN0KHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzaXgtZGlnaXQgaGV4IGNvbG9yLCByZWNlaXZlZCBcIiR7aGV4fVwiLmApO1xuICByZXR1cm4gW1xuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgwLCAyKSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgyLCA0KSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSg0LCA2KSwgMTYpIC8gMjU1LFxuICAgIDEsXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjcHJpbWl0aXZlQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDogeyBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LCBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9IH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogbWF4UHJpbWl0aXZlcyAqIGZsb2F0c1BlclByaW1pdGl2ZSAqIDQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuICAgIHRoaXMuI2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH0sXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNwcmltaXRpdmVCdWZmZXIgfSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvblByaW1pdGl2ZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5LlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjYW52YXMgY291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIocHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdLCB0aW1lU2Vjb25kcyA9IDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmlzaWJsZSA9IHByaW1pdGl2ZXMuc2xpY2UoMCwgbWF4UHJpbWl0aXZlcyk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmlzaWJsZS5sZW5ndGggKiBmbG9hdHNQZXJQcmltaXRpdmUpO1xuICAgIHZpc2libGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyUHJpbWl0aXZlO1xuICAgICAgZGF0YS5zZXQoW1xuICAgICAgICBpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQgPz8gaXRlbS53aWR0aCxcbiAgICAgICAgLi4ucmdiYShpdGVtLmNvbG9yKSxcbiAgICAgICAgLi4ucmdiYShpdGVtLnNlY29uZGFyeUNvbG9yID8/IGl0ZW0uY29sb3IpLFxuICAgICAgICBpdGVtLmdsb3cgPz8gMC41LFxuICAgICAgICBpdGVtLmludGVuc2l0eSA/PyAxLFxuICAgICAgICBpdGVtLnNoYXBlID09PSBcImFyY1wiID8gOCA6IGl0ZW0uc2hhcGUgPT09IFwibGluZVwiID8gNyA6IGl0ZW0uc2hhcGUgPT09IFwicGVudGFnb25cIiA/IDYgOiBpdGVtLnNoYXBlID09PSBcImRpYW1vbmRcIiA/IDUgOiBpdGVtLnNoYXBlID09PSBcInNwYXJrXCIgPyA0IDogaXRlbS5zaGFwZSA9PT0gXCJyaW5nXCIgPyAzIDogaXRlbS5zaGFwZSA9PT0gXCJvcmJcIiA/IDIgOiBpdGVtLnNoYXBlID09PSBcImJvbHRcIiA/IDEgOiAwLFxuICAgICAgICBpdGVtLnJvdGF0aW9uID8/IGl0ZW0udGV4dHVyZSA/PyAwLFxuICAgICAgICBpdGVtLmFyY1N0YXJ0ID8/IGl0ZW0ucmltSW50ZW5zaXR5ID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjRW5kID8/IGl0ZW0uc2hhZG93U3RyZW5ndGggPz8gMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgIF0sIG9mZnNldCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHZpc2libGUubGVuZ3RoLCB0aW1lU2Vjb25kc10pKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLjAwNiwgZzogMC4wMDksIGI6IDAuMDI1LCBhOiAwIH0sXG4gICAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICB9XSxcbiAgICB9KTtcbiAgICBpZiAodmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZEdyb3VwKTtcbiAgICAgIHBhc3MuZHJhdyg2LCB2aXNpYmxlLmxlbmd0aCk7XG4gICAgfVxuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbiA9IFwiZmFkZVwiIHwgXCJleHBhbmRGYWRlXCIgfCBcImltcGxvZGVcIiB8IFwic3BhcmtGYWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjb3JlQ29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBkZXRhaWw/OiBudW1iZXI7XG4gIHR1cmJ1bGVuY2U/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGNvcmVJbnRlbnNpdHk/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25UaW1lPzogbnVtYmVyO1xuICBkaXNzaXBhdGlvbkFjdGlvbj86IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uO1xuICBkcmlmdFg/OiBudW1iZXI7XG4gIGRyaWZ0WT86IG51bWJlcjtcbiAgc2VlZD86IG51bWJlcjtcbiAgYWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJ4XCIgfCBcInlcIiB8IFwic2l6ZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbnR5cGUgQ2xvdWQgPSBSZXF1aXJlZDxPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwiY29yZUNvbG9yXCI+PiAmIHsgY29yZUNvbG9yOiBzdHJpbmc7IGFnZTogbnVtYmVyIH07XG5cbmNvbnN0IG1heENsb3VkcyA9IDk2O1xuY29uc3QgZmxvYXRzUGVyQ2xvdWQgPSAyNDtcblxuY29uc3QgZGVmYXVsdHM6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+ID0ge1xuICBjb2xvcjogXCIjNjNlOGZmXCIsXG4gIGNvcmVDb2xvcjogXCIjZmZmZmZmXCIsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0aW9uOiAwLFxuICBzaXplOiAuMjUsXG4gIGRldGFpbDogNSxcbiAgdHVyYnVsZW5jZTogLjc1LFxuICBnbG93OiA0LFxuICBjb3JlSW50ZW5zaXR5OiAxLjQsXG4gIHJpbUludGVuc2l0eTogLjg1LFxuICBvcGFjaXR5OiAxLFxuICBkaXNzaXBhdGlvblRpbWU6IC43LFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJleHBhbmRGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBzZWVkOiAwLFxuICBhZ2U6IDAsXG59O1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLnBhZEVuZCg2LCBcIjBcIikuc2xpY2UoMCwgNik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcml2ZU5lb25DbG91ZENvcmVDb2xvciA9IChjb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgW3IsIGcsIGJdID0gaGV4KGNvbG9yKTtcbiAgY29uc3QgbGlmdCA9IChjaGFubmVsOiBudW1iZXIpID0+IE1hdGgucm91bmQoKGNoYW5uZWwgKyAoMSAtIGNoYW5uZWwpICogLjc4KSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAjJHtsaWZ0KHIpfSR7bGlmdChnKX0ke2xpZnQoYil9YDtcbn07XG5cbmNvbnN0IGFjdGlvblZhbHVlID0gKGFjdGlvbjogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24pOiBudW1iZXIgPT5cbiAgYWN0aW9uID09PSBcImZhZGVcIiA/IDAgOiBhY3Rpb24gPT09IFwiZXhwYW5kRmFkZVwiID8gMSA6IGFjdGlvbiA9PT0gXCJpbXBsb2RlXCIgPyAyIDogMztcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBDbG91ZCB7XG4gIHBvczogdmVjMmYsXG4gIHZlbG9jaXR5OiB2ZWMyZixcbiAgYWdlOiBmMzIsXG4gIGxpZmU6IGYzMixcbiAgc2l6ZTogZjMyLFxuICByb3RhdGlvbjogZjMyLFxuICBzZWVkOiBmMzIsXG4gIGFjdGlvbjogZjMyLFxuICBjb2xvcjogdmVjNGYsXG4gIGNvcmU6IHZlYzRmLFxuICB0dW5pbmc6IHZlYzRmLFxufVxuc3RydWN0IEdsb2JhbHMge1xuICBhc3BlY3Q6IGYzMixcbiAgdGltZTogZjMyLFxuICBjb3VudDogZjMyLFxuICBiYWNrZ3JvdW5kOiBmMzIsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IGdsb2JhbHM6IEdsb2JhbHM7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGNsb3VkczogYXJyYXk8Q2xvdWQ+O1xuXG5mbiBoYXNoKHA6IHZlYzJmKSAtPiBmMzIge1xuICByZXR1cm4gZnJhY3Qoc2luKGRvdChwLCB2ZWMyZigxMjcuMSwgMzExLjcpKSkgKiA0Mzc1OC41NDUzMTIzKTtcbn1cbmZuIG5vaXNlKHA6IHZlYzJmKSAtPiBmMzIge1xuICBsZXQgaSA9IGZsb29yKHApO1xuICBsZXQgZiA9IGZyYWN0KHApO1xuICBsZXQgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbWl4KG1peChoYXNoKGkpLCBoYXNoKGkgKyB2ZWMyZigxLDApKSwgdS54KSwgbWl4KGhhc2goaSArIHZlYzJmKDAsMSkpLCBoYXNoKGkgKyB2ZWMyZigxLDEpKSwgdS54KSwgdS55KTtcbn1cbmZuIGZibShwOiB2ZWMyZiwgb2N0YXZlczogZjMyKSAtPiBmMzIge1xuICB2YXIgdiA9IDAuMDtcbiAgdmFyIGEgPSAwLjU7XG4gIHZhciBxID0gcDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBpZiAoZjMyKGkpID49IG9jdGF2ZXMpIHsgYnJlYWs7IH1cbiAgICB2ICs9IGEgKiBub2lzZShxKTtcbiAgICBxID0gcSAqIDIuMDMgKyB2ZWMyZig2LjksIDMuNyk7XG4gICAgYSAqPSAwLjUyO1xuICB9XG4gIHJldHVybiB2O1xufVxuZm4gcm90YXRlKHA6IHZlYzJmLCBhOiBmMzIpIC0+IHZlYzJmIHtcbiAgbGV0IGMgPSBjb3MoYSk7XG4gIGxldCBzID0gc2luKGEpO1xuICByZXR1cm4gdmVjMmYocC54ICogYyAtIHAueSAqIHMsIHAueCAqIHMgKyBwLnkgKiBjKTtcbn1cbnN0cnVjdCBPdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgQGludGVycG9sYXRlKGZsYXQpIGluc3RhbmNlOiB1MzIsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2aTogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gT3V0IHtcbiAgbGV0IGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBjID0gY2xvdWRzW2luc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgYWN0aW9uU2NhbGUgPSBzZWxlY3QoMS4wICsgbGlmZVQgKiAxLjg1LCAxLjAgLSBsaWZlVCAqIC42MiwgYy5hY3Rpb24gPiAxLjUgJiYgYy5hY3Rpb24gPCAyLjUpO1xuICBsZXQgcmFkaXVzID0gbWF4KC4wMDEsIGMuc2l6ZSAqIGFjdGlvblNjYWxlKSAqIDIuMzU7XG4gIHZhciBjZW50ZXIgPSBjLnBvcyArIGMudmVsb2NpdHkgKiBjLmFnZTtcbiAgY2VudGVyLnggKj0gZ2xvYmFscy5hc3BlY3Q7XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmldO1xuICBsZXQgcCA9IGNlbnRlciArIGxvY2FsICogcmFkaXVzO1xuICB2YXIgbzogT3V0O1xuICBvLnBvc2l0aW9uID0gdmVjNGYocC54IC8gZ2xvYmFscy5hc3BlY3QsIHAueSwgMCwgMSk7XG4gIG8ubG9jYWwgPSBsb2NhbCAqIDIuMzU7XG4gIG8uaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgcmV0dXJuIG87XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBjID0gY2xvdWRzW2lucHV0Lmluc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgbG9jYWwgPSByb3RhdGUoaW5wdXQubG9jYWwsIC1jLnJvdGF0aW9uIC0gbGlmZVQgKiAuNDUpO1xuICBsZXQgciA9IGxlbmd0aChsb2NhbCk7XG4gIGlmIChyID49IDIuMzUpIHsgZGlzY2FyZDsgfVxuICBsZXQgZGV0YWlsID0gY2xhbXAoYy50dW5pbmcueCwgMS4wLCA3LjApO1xuICBsZXQgdHVyYnVsZW5jZSA9IGMudHVuaW5nLnk7XG4gIGxldCB3aXNweSA9IGZibShsb2NhbCAqICgxLjcgKyBkZXRhaWwgKiAuMTYpICsgdmVjMmYoYy5zZWVkLCBjLnNlZWQgKiAuNzEpICsgZ2xvYmFscy50aW1lICogdmVjMmYoLjE2LCAuMDkpICogdHVyYnVsZW5jZSwgbWluKGRldGFpbCwgNC4wKSk7XG4gIGxldCBjb3JlID0gZXhwKC1yICogciAqICgxLjIgKyBjLnR1bmluZy56ICogLjIyKSk7XG4gIGxldCByaW0gPSBleHAoLWFicyhyIC0gLjcyKSAqIDMuNik7XG4gIGxldCBzcGFyayA9IHBvdyhtYXgoMC4wLCBzaW4od2lzcHkgKiAxNi4wICsgYy5zZWVkICsgZ2xvYmFscy50aW1lICogOS4wKSksIDE0LjApICogc2VsZWN0KDAuMCwgMS4wLCBjLmFjdGlvbiA+IDIuNSk7XG4gIGxldCBkaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgxLjQ1LCAyLjM1LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgcmltRGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMi43LCAzLjgsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCBlZGdlRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMS43NSwgMi4zNSwgcik7XG4gIGxldCBkZW5zaXR5ID0gKGNvcmUgKiAuNzIgKyByaW0gKiAuMjQgKiByaW1EaXNzaXBhdGUgKyB3aXNweSAqIC4yMiArIHNwYXJrICogLjU1KSAqIGRpc3NpcGF0ZSAqIGMudHVuaW5nLncgKiBlZGdlRmFkZTtcbiAgbGV0IGhvdENvcmUgPSBjLmNvcmUucmdiICogY29yZSAqIGMudHVuaW5nLnogKiAoMS4wICsgc3BhcmspO1xuICBsZXQgbmVvblJpbSA9IGMuY29sb3IucmdiICogKGRlbnNpdHkgKiAoLjc1ICsgYy5jb2xvci5hICogLjA4KSArIHJpbSAqIHJpbURpc3NpcGF0ZSAqIGMuY29sb3IuYSAqIC4wOCk7XG4gIGxldCBnbG93ID0gbmVvblJpbSArIGhvdENvcmUgKiBkZW5zaXR5O1xuICByZXR1cm4gdmVjNGYoZ2xvdywgY2xhbXAoZGVuc2l0eSAqIC44NSArIHNwYXJrICogLjI1LCAwLjAsIDEuMCkpO1xufWA7XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdEFjdG9yIHtcbiAgc2V0dGluZ3M6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+O1xuICBhZ2UgPSAwO1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyA9IHt9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uZGVmYXVsdHMsIC4uLnNldHRpbmdzLCBzZWVkOiBzZXR0aW5ncy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwIH07XG4gIH1cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLmFnZSArPSBkdDtcbiAgICByZXR1cm4gdGhpcy5hZ2UgPCB0aGlzLnNldHRpbmdzLmRpc3NpcGF0aW9uVGltZTtcbiAgfVxuICByZW5kZXJJbnN0YW5jZSgpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnNldHRpbmdzLCBzZWVkOiB0aGlzLnNldHRpbmdzLnNlZWQgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2J1ZmZlcjogR1BVQnVmZmVyO1xuICAjZ2xvYmFsczogR1BVQnVmZmVyO1xuICAjYmluZDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IHByb2NlZHVyYWwgY2xvdWQgdm9sdW1lIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jZ2xvYmFscyA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNidWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogbWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQgKiA0LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2JpbmQgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFtcbiAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNnbG9iYWxzIH0gfSxcbiAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNidWZmZXIgfSB9LFxuICAgIF0gfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IGNsb3VkIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoY2xvdWRzOiByZWFkb25seSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzW10sIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHBhY2tlZCA9IG5ldyBGbG9hdDMyQXJyYXkobWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQpO1xuICAgIGNsb3Vkcy5zbGljZSgwLCBtYXhDbG91ZHMpLmZvckVhY2goKGNsb3VkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYyA9IHsgLi4uZGVmYXVsdHMsIC4uLmNsb3VkIH07XG4gICAgICBjb25zdCBjb2xvciA9IGhleChjLmNvbG9yKSwgY29yZSA9IGhleChjLmNvcmVDb2xvcik7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlckNsb3VkO1xuICAgICAgcGFja2VkLnNldChbYy54LCBjLnksIGMuZHJpZnRYLCBjLmRyaWZ0WSwgYy5hZ2UgPz8gMCwgYy5kaXNzaXBhdGlvblRpbWUsIGMuc2l6ZSwgYy5yb3RhdGlvbiwgYy5zZWVkLCBhY3Rpb25WYWx1ZShjLmRpc3NpcGF0aW9uQWN0aW9uKSwgMCwgMF0sIG9mZnNldCk7XG4gICAgICBwYWNrZWQuc2V0KFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBjLmdsb3csIGNvcmVbMF0sIGNvcmVbMV0sIGNvcmVbMl0sIGMuY29yZUludGVuc2l0eSwgYy5kZXRhaWwsIGMudHVyYnVsZW5jZSwgYy5yaW1JbnRlbnNpdHksIGMub3BhY2l0eV0sIG9mZnNldCArIDEyKTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNidWZmZXIsIDAsIHBhY2tlZCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jZ2xvYmFscywgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIHRpbWVTZWNvbmRzLCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpLCAwXSkpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7IGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSxcbiAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgIH1dIH0pO1xuICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmQpO1xuICAgIHBhc3MuZHJhdyg2LCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpKTtcbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgbWFwVG9wRG93bkNsb3VkKGNsb3VkOiBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICBjb25zdCBhc3BlY3QgPSBsb2dpY2FsV2lkdGggLyBsb2dpY2FsSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IChjbG91ZC54IC8gbG9naWNhbFdpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gY2xvdWQueSAvIGxvZ2ljYWxIZWlnaHQpICogMi41LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgICBkcmlmdFg6IChjbG91ZC5kcmlmdFggPz8gMCkgLyBsb2dpY2FsV2lkdGggKiBhc3BlY3QgKiAyLjUsXG4gICAgICBkcmlmdFk6IC0oY2xvdWQuZHJpZnRZID8/IDApIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuI2J1ZmZlci5kZXN0cm95KCk7XG4gICAgdGhpcy4jZ2xvYmFscy5kZXN0cm95KCk7XG4gICAgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE5lb25QcmltaXRpdmVSZW5kZXJlciwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciwgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgfSBmcm9tIFwiLi9jbG91ZC1idXJzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2hhcGUgZXh0ZW5kcyBPbWl0PE5lb25TaGFwZUluc3RhbmNlLCBcInhcIiB8IFwieVwiIHwgXCJzY2FsZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TY2VuZSB7XG4gIHByaW1pdGl2ZXM/OiByZWFkb25seSBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM/OiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI3ByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVSZW5kZXJlcjtcbiAgI2Nsb3VkczogTmVvbkNsb3VkQnVyc3RSZW5kZXJlcjtcbiAgI3NoYXBlczogTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI7XG4gICN3aWR0aDogbnVtYmVyO1xuICAjaGVpZ2h0OiBudW1iZXI7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0OyB0aGlzLiN3aWR0aCA9IHdpZHRoOyB0aGlzLiNoZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jcHJpbWl0aXZlcyA9IG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jY2xvdWRzID0gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jc2hhcGVzID0gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogUHJvbWlzZTxOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkgdG9wLWRvd24gc2NlbmVzLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0LCBsb2dpY2FsV2lkdGgsIGxvZ2ljYWxIZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNjZW5lOiBOZW9uVG9wRG93blNjZW5lLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy4jcHJpbWl0aXZlcy5yZW5kZXIoWy4uLihzY2VuZS5wcmltaXRpdmVzID8/IFtdKV0sIHRpbWVTZWNvbmRzLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICBjb25zdCBjbG91ZHMgPSBzY2VuZS5jbG91ZHMgPz8gW107XG4gICAgY29uc3QgYXNwZWN0ID0gdGhpcy4jd2lkdGggLyB0aGlzLiNoZWlnaHQ7XG4gICAgY29uc3Qgc2hhcGVzID0gc2NlbmUuc2hhcGVzID8/IFtdO1xuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB0aGlzLiNzaGFwZXMucmVuZGVyKHNoYXBlcy5tYXAoc2hhcGUgPT4gKHtcbiAgICAgIC4uLnNoYXBlLFxuICAgICAgeDogKHNoYXBlLnggLyB0aGlzLiN3aWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIHNoYXBlLnkgLyB0aGlzLiNoZWlnaHQpICogMi41LFxuICAgICAgc2NhbGU6IChzaGFwZS5oZWlnaHQgPz8gc2hhcGUuc2l6ZSkgLyB0aGlzLiNoZWlnaHQgKiAyLjUsXG4gICAgICBzY2FsZVg6IChzaGFwZS5zY2FsZVggPz8gMSkgKiAoKHNoYXBlLndpZHRoID8/IHNoYXBlLnNpemUpIC8gKHNoYXBlLmhlaWdodCA/PyBzaGFwZS5zaXplKSksXG4gICAgfSkpLCB0cnVlLCB0YXJnZXQpO1xuICAgIGlmIChjbG91ZHMubGVuZ3RoKSB0aGlzLiNjbG91ZHMucmVuZGVyKGNsb3Vkcy5tYXAoY2xvdWQgPT4gdGhpcy4jY2xvdWRzLm1hcFRvcERvd25DbG91ZChjbG91ZCwgdGhpcy4jd2lkdGgsIHRoaXMuI2hlaWdodCkpLCB0aW1lU2Vjb25kcywgdHJ1ZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuI3NoYXBlcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLiNjbG91ZHMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCIsIFwiYXVyb3JhXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCA9IHR5cGVvZiBsYW5lUnVubmVyU2NlbmVJZHNbbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVPcHRpb25zIHtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB0aW1lTXM6IG51bWJlcjtcbn1cblxuY29uc3Qgc2NlbmVOYW1lczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCBzdHJpbmc+ID0ge1xuICBuZW9uSGFsbDogXCJOZW9uIEhhbGxcIixcbiAgYXVyb3JhOiBcIkF1cm9yYVwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVQYWxldHRlIHtcbiAgZmxvb3I6IHN0cmluZztcbiAgYm91bmRhcnk6IHN0cmluZztcbiAgbGFuZTogc3RyaW5nO1xuICBjZW50ZXJMYW5lOiBzdHJpbmc7XG4gIGFjY2VudDogc3RyaW5nO1xuICBsYW5lSGlnaGxpZ2h0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBoYWxsRmxvb3JDb2xvcixcbiAgYm91bmRhcnk6IGhhbGxEZWVwQmx1ZSxcbiAgbGFuZTogaGFsbE11dGVkQmx1ZSxcbiAgY2VudGVyTGFuZTogaGFsbE11dGVkVmlvbGV0LFxuICBhY2NlbnQ6IGhhbGxBY2NlbnRQaW5rLFxuICBsYW5lSGlnaGxpZ2h0OiBoYWxsTXV0ZWRDeWFuLFxufTtcblxuY29uc3QgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwMzExMGZcIixcbiAgYm91bmRhcnk6IFwiIzE3OGM5MlwiLFxuICBsYW5lOiBcIiMxN2Q3YjNcIixcbiAgY2VudGVyTGFuZTogXCIjOGY1NmZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZmM3XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2I5ZmY2YVwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmVSdW5uZXJTY2VuZU5hbWUoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiBzdHJpbmcge1xuICByZXR1cm4gc2NlbmVOYW1lc1tzY2VuZUlkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGFuZVJ1bm5lclNjZW5lSWQodmFsdWU6IHN0cmluZyk6IHZhbHVlIGlzIExhbmVSdW5uZXJTY2VuZUlkIHtcbiAgcmV0dXJuIChsYW5lUnVubmVyU2NlbmVJZHMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmVSdW5uZXJTY2VuZShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIHN3aXRjaCAob3B0aW9ucy5zY2VuZUlkKSB7XG4gICAgY2FzZSBcImF1cm9yYVwiOlxuICAgICAgcmV0dXJuIGNyZWF0ZUF1cm9yYShvcHRpb25zKTtcbiAgICBjYXNlIFwibmVvbkhhbGxcIjpcbiAgICAgIHJldHVybiBjcmVhdGVOZW9uSGFsbChvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXVyb3JhKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUxhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFHcm91bmRGbGFyZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUhvcml6b25WZWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICBjb25zdCB2cCA9IHsgeDogd2lkdGggKiAuNSwgeTogLWhlaWdodCB9O1xuICBjb25zdCBib3R0b21ZID0gaGVpZ2h0ICogLjk4NTtcbiAgY29uc3QgYm90dG9tSGFsZiA9IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoICogLjU7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHZwLFxuICAgIGxlZnRCb3R0b206IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICByaWdodEJvdHRvbTogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIGxlZnRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gICAgcmlnaHRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKFxuICBpdGVtczogTmVvblByaW1pdGl2ZVtdLFxuICBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPixcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgdGltZU1zOiBudW1iZXIsXG4pOiB2b2lkIHtcbiAgYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGRMYW5lUnVubmVyUmFpbHMoaXRlbXMsIGdlb21ldHJ5LCBwYWxldHRlKTtcbiAgYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHB1bHNlID0gLjU1ICsgTWF0aC5zaW4odGltZU1zICogaGFsbEVuZXJneVNwZWVkKSAqIC4yO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgKiAuNDIsIHdpZHRoOiB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgKiAxLjA4LCBjb2xvcjogcGFsZXR0ZS5mbG9vciwgc2Vjb25kYXJ5Q29sb3I6IFwiIzAyMDUwZFwiLCBnbG93OiAuMDUsIGludGVuc2l0eTogLjIzLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuOSwgd2lkdGg6IHdpZHRoICogLjM0LCBoZWlnaHQ6IDEuNCwgY29sb3I6IHBhbGV0dGUuYm91bmRhcnksIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGdsb3c6IC4zLCBpbnRlbnNpdHk6IC4xOCArIHB1bHNlICogLjA3LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuNzgsIHdpZHRoOiB3aWR0aCAqIC4xOCwgaGVpZ2h0OiAxLjIsIGNvbG9yOiBwYWxldHRlLmFjY2VudCwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUuY2VudGVyTGFuZSwgZ2xvdzogLjI0LCBpbnRlbnNpdHk6IC4wOCwgc2hhcGU6IFwiYm9sdFwiIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyUmFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3QgW2JvdHRvbSwgaG9yaXpvbl0gb2YgW1tsZWZ0Qm90dG9tLCBsZWZ0SG9yaXpvbl0sIFtyaWdodEJvdHRvbSwgcmlnaHRIb3Jpem9uXV0gYXMgY29uc3QpIHtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmJvdW5kYXJ5LCAuNDgsIDYuNSk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCAuNTYsIDEuMyk7XG4gIH1cblxuICBmb3IgKGxldCBsYW5lID0gMTsgbGFuZSA8PSAzOyBsYW5lKyspIHtcbiAgICBjb25zdCB1ID0gbGFuZSAvIDQ7XG4gICAgY29uc3Qgc3RhcnQgPSBsZXJwUG9pbnQobGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIHUpO1xuICAgIGNvbnN0IGVuZCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBjb2xvciA9IGxhbmUgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmxhbmU7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIGNvbG9yLCBsYW5lID09PSAyID8gLjI4IDogLjIsIDMuNCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgbGFuZSA9PT0gMiA/IC4yNiA6IC4xOCwgLjkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTU7IHJvdysrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByb3dQdWxzZSA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDQ4MCArIHJvdyAqIC43OCkgKiAuNDI7XG4gICAgY29uc3Qgc3VyZ2UgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lTXMgLyA4MjAgLSByb3cgKiAuNzIpKTtcbiAgICBjb25zdCBjb2xvciA9IHJvdyAlIDQgPT09IDAgPyBwYWxldHRlLmxhbmVIaWdobGlnaHQgOiByb3cgJSA0ID09PSAxID8gcGFsZXR0ZS5sYW5lIDogcm93ICUgNCA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUuYWNjZW50O1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMTUgKyB0ICogLjIzKSAqICguNTUgKyByb3dQdWxzZSAqIC40NSkgKyBzdXJnZSAqIC4wNTUsIDMuMSArIHQgKiAyKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjIgKyB0ICogLjI3KSAqICguNTIgKyByb3dQdWxzZSAqIC40OCkgKyBzdXJnZSAqIC4wNywgLjc1ICsgdCAqIC42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDc7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxOTAwICsgcHVsc2VJbmRleCAvIDcpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjU1KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjM0ICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgaGFsbE11dGVkQ3lhbiwgb3BhY2l0eSwgMS4xICsgdCAqIDEuNCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEZsb29yR2x5cGhzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3Qgcm93cyA9IFsyLCA0LCA2LCA4LCAxMCwgMTJdO1xuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBjZW50ZXIgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCAuNSk7XG4gICAgY29uc3Qgc2NhbGUgPSAuNDUgKyB0ICogMS4xO1xuICAgIGNvbnN0IHB1bHNlID0gLjQ4ICsgTWF0aC5zaW4odGltZU1zIC8gNzIwICsgcm93ICogMS4zKSAqIC4yNDtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGNlbnRlci54LFxuICAgICAgeTogY2VudGVyLnksXG4gICAgICB3aWR0aDogNyAqIHNjYWxlLFxuICAgICAgaGVpZ2h0OiA3ICogc2NhbGUsXG4gICAgICBjb2xvcjogcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxEZWVwQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiByb3cgJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMjQgKyBwdWxzZSAqIC4xNixcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsSG9yaXpvbkRldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQsIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCBnbG93UHVsc2UgPSAuNzUgKyBNYXRoLnNpbih0aW1lTXMgLyA2ODApICogLjI1O1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIHsgeDogdnAueCArIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCBoYWxsQWNjZW50UGluaywgLjIgKyBnbG93UHVsc2UgKiAuMDgsIDEuMSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54IC0gd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZEN5YW4sIC4xNiwgLjg1KTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCArIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkVmlvbGV0LCAuMTYsIC44NSk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4ICsgLjUpIC8gODtcbiAgICBjb25zdCBiYXNlID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IHNpZGVCaWFzID0gTWF0aC5hYnModSAtIC41KSAqIDI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBiYXNlLngsXG4gICAgICB5OiBiYXNlLnkgLSBoZWlnaHQgKiAoLjAxOCArIHNpZGVCaWFzICogLjAxOCksXG4gICAgICB3aWR0aDogMSArIHNpZGVCaWFzICogLjcsXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgc2lkZUJpYXMgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxBY2NlbnRQaW5rLFxuICAgICAgZ2xvdzogLjI0LFxuICAgICAgaW50ZW5zaXR5OiAuMDcgKyBnbG93UHVsc2UgKiAuMDM1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKGluZGV4ICogMS43KSAqIC4xMixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsU2lkZVBhbmVscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3Qgc2lkZSBvZiBbMCwgMV0pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTAsIDEuNjgpO1xuICAgICAgY29uc3QgcmFpbCA9IHNpZGUgPT09IDBcbiAgICAgICAgPyBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpXG4gICAgICAgIDogbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgICAgY29uc3Qgb3V0d2FyZCA9IHNpZGUgPT09IDAgPyAtMSA6IDE7XG4gICAgICBjb25zdCBmbGlja2VyID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNjAwICsgaW5kZXggKiAxLjUgKyBzaWRlKSAqIC4yODtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB4OiByYWlsLnggKyBvdXR3YXJkICogd2lkdGggKiAoLjAzNSArIHQgKiAuMDYpLFxuICAgICAgICB5OiByYWlsLnkgLSBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDEyKSxcbiAgICAgICAgd2lkdGg6IDEuMiArIHQgKiAxLjIsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyB0ICogLjA4KSxcbiAgICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICAgIGdsb3c6IC4zLFxuICAgICAgICBpbnRlbnNpdHk6ICguMDc1ICsgdCAqIC4wNjUpICogZmxpY2tlcixcbiAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxFbmVyZ3lUcmFjZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4xMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMTE2O1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS43KSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA9PT0gMCA/IC4xOCA6IGluZGV4ICUgNCA9PT0gMSA/IC4zNCA6IGluZGV4ICUgNCA9PT0gMiA/IC42NiA6IC44MjtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgc2lkZSArIE1hdGguc2luKGluZGV4ICogMS43ICsgdGltZU1zIC8gMTcwMCkgKiAuMDM1KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gMzkwICsgaW5kZXggKiAxLjEpICogLjM4O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogLjggKyBpbmRleCAlIDMgKiAuNSxcbiAgICAgIGhlaWdodDogMTAgKyBpbmRleCAlIDUgKiA3LFxuICAgICAgY29sb3I6IGluZGV4ICUgNSA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxNdXRlZEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgKGluZGV4ICUgNCkgKiAuMDE4KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDk7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxNTUwICsgcHVsc2VJbmRleCAvIDkpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjQ4KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjMyICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgcHVsc2VJbmRleCAlIDIgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiIzE3ZDdiM1wiLCBvcGFjaXR5LCAxICsgdCAqIDEuNyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhR3JvdW5kRmxhcmVzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMDggKyAoKGluZGV4ICogMjkpICUgMTAwKSAvIDExMjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNjIpKTtcbiAgICBjb25zdCBsYW5lU2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4yMiA6IC43ODtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgbGFuZVNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuMSArIHRpbWVNcyAvIDE4MDApICogLjA0KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjU1ICsgTWF0aC5zaW4odGltZU1zIC8gNDMwICsgaW5kZXggKiAxLjMpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAwOSArIHQgKiAuMDEyKSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTggKyB0ICogLjAzNSksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBpbmRleCAlIDMgPT09IDEgPyBcIiMxN2Q3YjNcIiA6IFwiIzhmNTZmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNikgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IGluZGV4ICUgNCA9PT0gMCA/IFwiZGlhbW9uZFwiIDogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4odGltZU1zIC8gMTIwMCArIGluZGV4KSAqIC4xOCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFIb3Jpem9uVmVpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNzsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggLSAzKSAvIDY7XG4gICAgY29uc3Qgd2F2ZSA9IE1hdGguc2luKHRpbWVNcyAvIDExMDAgKyBpbmRleCAqIC45KTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHZwLnggKyB1ICogd2lkdGggKiAuMzYsXG4gICAgICB5OiB2cC55ICsgaGVpZ2h0ICogKC4wNzUgKyBpbmRleCAqIC4wMDYpLFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMzUgKyBpbmRleCAqIC4wMDQpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjEyICsgTWF0aC5hYnMod2F2ZSkgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjA0NSArIE1hdGguYWJzKHdhdmUpICogLjAyNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiB1ICogLjI4ICsgd2F2ZSAqIC4wOCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSA9IFwiZGFydFwiIHwgXCJuZWVkbGVcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJvamVjdGlsZU9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYPzogbnVtYmVyO1xuICB2ZWxvY2l0eVk/OiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgbGVuZ3RoPzogbnVtYmVyO1xuICB0cmFpbExlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxXaWR0aD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICBzaGFwZT86IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbn1cblxuY29uc3Qgcm90YXRpb25Gb3JTY3JlZW5Gb3J3YXJkVmVjdG9yID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMih4IC8gbGVuZ3RoLCAteSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgY2xhc3MgTmVvblByb2plY3RpbGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHZlbG9jaXR5WTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsV2lkdGg6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcjogc3RyaW5nO1xuICBjb3JlQ29sb3I6IHN0cmluZztcbiAgc2hhcGU6IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblByb2plY3RpbGVPcHRpb25zKSB7XG4gICAgdGhpcy54PW9wdGlvbnMueDt0aGlzLnk9b3B0aW9ucy55O3RoaXMudmVsb2NpdHlYPW9wdGlvbnMudmVsb2NpdHlYPz8wO3RoaXMudmVsb2NpdHlZPW9wdGlvbnMudmVsb2NpdHlZPz8tNTAwO1xuICAgIHRoaXMucmFkaXVzPW9wdGlvbnMucmFkaXVzPz8zO3RoaXMubGVuZ3RoPW9wdGlvbnMubGVuZ3RoPz85O3RoaXMudHJhaWxMZW5ndGg9b3B0aW9ucy50cmFpbExlbmd0aD8/MTY7dGhpcy50cmFpbFdpZHRoPW9wdGlvbnMudHJhaWxXaWR0aD8/MS41O1xuICAgIHRoaXMuY29sb3I9b3B0aW9ucy5jb2xvcjt0aGlzLnRyYWlsQ29sb3I9b3B0aW9ucy50cmFpbENvbG9yPz9vcHRpb25zLmNvbG9yO3RoaXMuY29yZUNvbG9yPW9wdGlvbnMuY29yZUNvbG9yPz9vcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuc2hhcGU9b3B0aW9ucy5zaGFwZT8/XCJkYXJ0XCI7dGhpcy5pbnRlbnNpdHk9b3B0aW9ucy5pbnRlbnNpdHk/PzE7dGhpcy5nbG93PW9wdGlvbnMuZ2xvdz8/Ljc1O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlYICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5WSAqIGRlbHRhU2Vjb25kcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc2hhcGUgPT09IFwic3BsaXRCb2x0XCI7XG4gICAgY29uc3QgbmVlZGxlID0gdGhpcy5zaGFwZSA9PT0gXCJuZWVkbGVcIjtcbiAgICBjb25zdCBzbHVnID0gdGhpcy5zaGFwZSA9PT0gXCJzbHVnXCI7XG4gICAgY29uc3Qgc3BlZWQgPSBNYXRoLmh5cG90KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb25YID0gdGhpcy52ZWxvY2l0eVggLyBzcGVlZDtcbiAgICBjb25zdCBkaXJlY3Rpb25ZID0gdGhpcy52ZWxvY2l0eVkgLyBzcGVlZDtcbiAgICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3Rvcih0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpO1xuICAgIGNvbnN0IGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10gPSBbe1xuICAgICAgeDp0aGlzLngtZGlyZWN0aW9uWCp0aGlzLnRyYWlsTGVuZ3RoKi41LHk6dGhpcy55LWRpcmVjdGlvblkqdGhpcy50cmFpbExlbmd0aCouNSxcbiAgICAgIHdpZHRoOnRoaXMudHJhaWxXaWR0aCxoZWlnaHQ6dGhpcy50cmFpbExlbmd0aCxjb2xvcjp0aGlzLnRyYWlsQ29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb2xvcixcbiAgICAgIGdsb3c6dGhpcy5nbG93Ki42LGludGVuc2l0eTp0aGlzLmludGVuc2l0eSouNzIsc2hhcGU6XCJib2x0XCIscm90YXRpb24sXG4gICAgfV07XG4gICAgY29uc3Qgd2lkdGg9c2x1Zz90aGlzLnJhZGl1cyoxLjU6bmVlZGxlP3RoaXMucmFkaXVzKi42NTp0aGlzLnJhZGl1cztcbiAgICBjb25zdCBoZWlnaHQ9c2x1Zz90aGlzLmxlbmd0aCouNzU6dGhpcy5sZW5ndGg7XG4gICAgY29uc3Qgc2lkZVggPSAtZGlyZWN0aW9uWTtcbiAgICBjb25zdCBzaWRlWSA9IGRpcmVjdGlvblg7XG4gICAgY29uc3QgYWRkPShvZmZzZXQ6bnVtYmVyKT0+aXRlbXMucHVzaCh7eDp0aGlzLngrc2lkZVgqb2Zmc2V0LHk6dGhpcy55K3NpZGVZKm9mZnNldCx3aWR0aCxoZWlnaHQsY29sb3I6dGhpcy5jb2xvcixzZWNvbmRhcnlDb2xvcjp0aGlzLmNvcmVDb2xvcixnbG93OnRoaXMuZ2xvdyxpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHksc2hhcGU6bmVlZGxlP1wiY2lyY2xlXCI6XCJib2x0XCIscm90YXRpb259KTtcbiAgICBpZihzcGxpdCl7YWRkKC10aGlzLnJhZGl1cyouNyk7YWRkKHRoaXMucmFkaXVzKi43KX1lbHNlIGFkZCgwKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBUZXN0U3RhdHVzID0gXCJib290aW5nXCIgfCBcInJlYWR5XCIgfCBcInBhc3NlZFwiIHwgXCJmYWlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXN0QXNzZXJ0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzZWQ6IGJvb2xlYW47XG4gIGRldGFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0UGFnZVNuYXBzaG90IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBUZXN0U3RhdHVzO1xuICBhc3NlcnRpb25zOiBUZXN0QXNzZXJ0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0UGFnZTxURHJpdmVyIGV4dGVuZHMgb2JqZWN0PihcbiAgaWQ6IHN0cmluZyxcbiAgZHJpdmVyOiBURHJpdmVyLFxuICBzdGF0dXNFbGVtZW50OiBIVE1MRWxlbWVudCxcbikge1xuICBjb25zdCBzbmFwc2hvdDogVGVzdFBhZ2VTbmFwc2hvdCA9IHsgaWQsIHN0YXR1czogXCJib290aW5nXCIsIGFzc2VydGlvbnM6IFtdIH07XG4gIGNvbnN0IHB1Ymxpc2ggPSAoKSA9PiB7XG4gICAgc3RhdHVzRWxlbWVudC5kYXRhc2V0LnN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c25hcHNob3Quc3RhdHVzLnRvVXBwZXJDYXNlKCl9IFx1MDBCNyAke3NuYXBzaG90LmFzc2VydGlvbnMuZmlsdGVyKGEgPT4gYS5wYXNzZWQpLmxlbmd0aH0vJHtzbmFwc2hvdC5hc3NlcnRpb25zLmxlbmd0aH0gYXNzZXJ0aW9uc2A7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGVzdFN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgfTtcbiAgY29uc3QgYXBpID0ge1xuICAgIC4uLmRyaXZlcixcbiAgICBnZXRTbmFwc2hvdDogKCk6IFRlc3RQYWdlU25hcHNob3QgPT4gc3RydWN0dXJlZENsb25lKHNuYXBzaG90KSxcbiAgICByZWFkeSgpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IFwicmVhZHlcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICAgIGFzc2VydChuYW1lOiBzdHJpbmcsIHBhc3NlZDogYm9vbGVhbiwgZGV0YWlsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5hc3NlcnRpb25zLnB1c2goeyBuYW1lLCBwYXNzZWQsIGRldGFpbCB9KTtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IHNuYXBzaG90LmFzc2VydGlvbnMuZXZlcnkoYXNzZXJ0aW9uID0+IGFzc2VydGlvbi5wYXNzZWQpID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgfTtcbiAgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgbmVvbkZhY3RvcnlUZXN0OiB0eXBlb2YgYXBpIH0pLm5lb25GYWN0b3J5VGVzdCA9IGFwaTtcbiAgcHVibGlzaCgpO1xuICByZXR1cm4gYXBpO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVmljdG9yeU9wdGlvbnMge1xuICBjZW50ZXJYOiBudW1iZXI7XG4gIGNlbnRlclk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBhcnRpY2xlQ291bnQ/OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVmljdG9yeUV4cGVyaWVuY2Uge1xuICByZWFkb25seSBzdGFydGVkQXQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgZHVyYXRpb25NczogbnVtYmVyO1xuICByZWFkb25seSBvcHRpb25zOiBOZW9uVmljdG9yeU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblZpY3RvcnlPcHRpb25zLCBzdGFydGVkQXQgPSBwZXJmb3JtYW5jZS5ub3coKSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdGFydGVkQXQgPSBzdGFydGVkQXQ7XG4gICAgdGhpcy5kdXJhdGlvbk1zID0gb3B0aW9ucy5kdXJhdGlvbk1zID8/IDQyMDA7XG4gIH1cblxuICBnZXQgY29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydGVkQXQgPj0gdGhpcy5kdXJhdGlvbk1zO1xuICB9XG5cbiAgcHJpbWl0aXZlcyhub3cgPSBwZXJmb3JtYW5jZS5ub3coKSk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgY29uc3QgZWxhcHNlZCA9IE1hdGgubWF4KDAsIG5vdyAtIHRoaXMuc3RhcnRlZEF0KTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKDEsIGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uTXMpO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlQ291bnQgPz8gOTA7XG4gICAgY29uc3QgY29sb3JzID0gW25lb25QYWxldHRlLmN5YW4sIG5lb25QYWxldHRlLnBpbmssIG5lb25QYWxldHRlLmdvbGQsIG5lb25QYWxldHRlLmdyZWVuLCBuZW9uUGFsZXR0ZS52aW9sZXQsIG5lb25QYWxldHRlLm9yYW5nZV07XG4gICAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBzZWVkID0gaW5kZXggKiA5MS43MztcbiAgICAgIGNvbnN0IGRlbGF5ID0gKGluZGV4ICUgMTIpICogMC4wMzU7XG4gICAgICBjb25zdCBsb2NhbCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHByb2dyZXNzICogMS4zNSAtIGRlbGF5KSk7XG4gICAgICBpZiAobG9jYWwgPD0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBhbmdsZSA9ICgoc2VlZCAlIDM2MCkgLyAxODApICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IHNwZWVkID0gMC4yMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMjYwO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLnNpbihzZWVkKSAqIHRoaXMub3B0aW9ucy53aWR0aCAqIDAuMDYgKiBsb2NhbDtcbiAgICAgIGNvbnN0IHggPSB0aGlzLm9wdGlvbnMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy53aWR0aCAqIHNwZWVkICogbG9jYWwgKyBkcmlmdDtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLm9wdGlvbnMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5oZWlnaHQgKiBzcGVlZCAqIGxvY2FsICsgdGhpcy5vcHRpb25zLmhlaWdodCAqIDAuNDIgKiBsb2NhbCAqIGxvY2FsO1xuICAgICAgY29uc3QgZmFkZSA9IE1hdGgubWF4KDAsIDEgLSBsb2NhbCAqIDAuNzIpO1xuICAgICAgY29uc3Qgc2l6ZSA9IDIuNSArIChpbmRleCAlIDUpO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgeCwgeSxcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSAqICgxLjggKyBpbmRleCAlIDMpLFxuICAgICAgICBjb2xvcjogY29sb3JzW2luZGV4ICUgY29sb3JzLmxlbmd0aF0sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBjb2xvcnNbKGluZGV4ICsgMikgJSBjb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgZ2xvdzogMC41NSxcbiAgICAgICAgaW50ZW5zaXR5OiBmYWRlLFxuICAgICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJzcGFya1wiIDogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgIHg6IHRoaXMub3B0aW9ucy5jZW50ZXJYLFxuICAgICAgeTogdGhpcy5vcHRpb25zLmNlbnRlclksXG4gICAgICB3aWR0aDogODAgKyBwcm9ncmVzcyAqIDE4MCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZS5jeWFuLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgICAgIGdsb3c6IDAuNTUgKiAoMSAtIHByb2dyZXNzKSxcbiAgICAgIGludGVuc2l0eTogTWF0aC5tYXgoMCwgMSAtIHByb2dyZXNzKSxcbiAgICAgIHNoYXBlOiBcInJpbmdcIixcbiAgICB9KTtcbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVNwYXduRW50cmFuY2UgPSBcInNjYXR0ZXJcIiB8IFwiZmFkZVwiO1xuZXhwb3J0IHR5cGUgRW5lbXlEZWF0aFZpc3VhbCA9IFwiY2xvdWRcIiB8IFwibm9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFwZUlkOiBzdHJpbmc7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG4gIHNwYXduRW50cmFuY2U6IEVuZW15U3Bhd25FbnRyYW5jZTtcbiAgc3Bhd25Tb3VuZDogc3RyaW5nIHwgbnVsbDtcbiAgZGVhdGhTb3VuZDogc3RyaW5nO1xuICBkZWF0aFZpc3VhbDogRW5lbXlEZWF0aFZpc3VhbDtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiaHVudGVyLWV5ZVwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgZ2xhc3NTaGllbGQ6IHtcbiAgICAgIGxhYmVsOiBcIkdsYXNzIFNoaWVsZFwiLFxuICAgICAgaGVhbHRoOiAuMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNS42LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IC4xLFxuICAgICAgc2NvcmU6IDMsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidHJpY2stZ2F0ZVwiLFxuICAgICAgZ2xvdzogLjYyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xMixcbiAgICAgIHJpbUludGVuc2l0eTogMC45LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC40NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogNzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuMSxcbiAgICAgIHNoYXBlWm9vbTogMy4wNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IC42NSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjI1LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJmYWRlXCIsXG4gICAgICBzcGF3blNvdW5kOiBudWxsLFxuICAgICAgZGVhdGhTb3VuZDogXCJHbGFzc1NoaWVsZFNoYXR0ZXJcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHdpbmdlcjoge1xuICAgICAgbGFiZWw6IFwiV2luZ2VyXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNzYsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxNCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJlbGl0ZS13aW5nc1wiLFxuICAgICAgZ2xvdzogLjg2LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4yMixcbiAgICAgIHJpbUludGVuc2l0eTogMS4yLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC42NixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogODUsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuNzUsXG4gICAgICBzaGFwZVpvb206IDMuMjUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIHRhbms6IHtcbiAgICAgIGxhYmVsOiBcIlRhbmtcIixcbiAgICAgIGhlYWx0aDogNixcbiAgICAgIHNwZWVkOiA0NCxcbiAgICAgIHJhZGl1czogMTYsXG4gICAgICBjb2x1bW5TcGFuOiAzLFxuICAgICAgY29udGFjdERhbWFnZTogMixcbiAgICAgIHNjb3JlOiA4MCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0YW5rLWJ1bmtlclwiLFxuICAgICAgZ2xvdzogMS4wNSxcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuNDUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjg1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDIuNyxcbiAgICAgIHNoYXBlWm9vbTogNC40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMi4xLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuOSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJCb3NzXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkJvc3NEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihvcmIuY29sdW1uU3BhbikgJiYgb3JiLmNvbHVtblNwYW4gPj0gMSwgYCR7aWR9IGNvbHVtblNwYW4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEd1bklkIH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzdGFydGluZ0d1bjogR3VuSWQ7XG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEgfCAyIHwgMztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgZGVmaW5pdGlvbjogVHJhY2tEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRmFtaWx5TWVtYmVyPFRyYWNrSWQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgdHJhY2tJZHM6IHJlYWRvbmx5IFRyYWNrSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFja0VudGl0eSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgbGFuZUluZGV4OiBudW1iZXI7XG4gIGNvbHVtblNwYW46IG51bWJlcjtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgZGlzdGFuY2VGcm9tUGxheWVyOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5jb25zdCBpc0VuZW15ID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IGlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIik7XG5jb25zdCBlbmVteUlkRnJvbVRyYWNrSWQgPSAoaWQ6IHN0cmluZyk6IE9yYklkIHwgbnVsbCA9PiB7XG4gIGlmIChpZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBjYW5kaWRhdGUgPSBpZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG4gIHJldHVybiBjYW5kaWRhdGUgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgT3JiSWQgOiBudWxsO1xufTtcblxuZnVuY3Rpb24gcGFyc2VUcmFja1Jvd3ModHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBzb3VyY2VJbmRleDogbnVtYmVyIH0+IHtcbiAgY29uc3Qgcm93cyA9IHRyYWNrLmxheW91dFxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcCgodGV4dCwgc291cmNlSW5kZXgpID0+ICh7IHRleHQ6IHRleHQudHJpbSgpLCBzb3VyY2VJbmRleDogc291cmNlSW5kZXggKyAxIH0pKVxuICAgIC5maWx0ZXIocm93ID0+IHJvdy50ZXh0Lmxlbmd0aCA+IDApO1xuXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGF5b3V0IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgcm93LlwiKTtcbiAgcmV0dXJuIHJvd3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjazogVHJhY2tEZWZpbml0aW9uKTogUGFyc2VkVHJhY2tFbnRpdHlbXSB7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlTcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgZm9yIChjb25zdCBbc3ltYm9sLCBlbnRyeV0gb2YgT2JqZWN0LmVudHJpZXModHJhY2subGVnZW5kKSkge1xuICAgIGlmIChbLi4uc3ltYm9sXS5sZW5ndGggIT09IDEgfHwgL1xcc3xcXHwvLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQga2V5IFwiJHtzeW1ib2x9XCIgbXVzdCBiZSBvbmUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIG90aGVyIHRoYW4gXCJ8XCIuYCk7XG4gICAgfVxuICAgIGlmICghZW50cnkuaWQpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIG11c3QgaGF2ZSBhbiBpZC5gKTtcbiAgICBpZiAoZW50cnkuc3BlZWQgIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5zcGVlZCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvd3MgPSBwYXJzZVRyYWNrUm93cyh0cmFjayk7XG4gIGxldCBsZWZ0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGV0IHJpZ2h0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcblxuICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBwaXBlQ291bnQgPSBbLi4ucm93LnRleHRdLmZpbHRlcihjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyID09PSBcInxcIikubGVuZ3RoO1xuICAgIGlmIChwaXBlQ291bnQgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IG11c3QgY29udGFpbiBleGFjdGx5IG9uZSBcInxcIiBzZXBhcmF0b3I7IGZvdW5kICR7cGlwZUNvdW50fS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gcm93LnRleHQuc3BsaXQoXCJ8XCIpLm1hcChzaWRlID0+IHNpZGUucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgICBsZWZ0V2lkdGggPz89IGxlZnQubGVuZ3RoO1xuICAgIHJpZ2h0V2lkdGggPz89IHJpZ2h0Lmxlbmd0aDtcblxuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gbGVmdFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgbGVmdCB3aWR0aCAke2xlZnQubGVuZ3RofTsgZXhwZWN0ZWQgJHtsZWZ0V2lkdGh9LmApO1xuICAgIH1cbiAgICBpZiAocmlnaHQubGVuZ3RoICE9PSByaWdodFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgcmlnaHQgd2lkdGggJHtyaWdodC5sZW5ndGh9OyBleHBlY3RlZCAke3JpZ2h0V2lkdGh9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3RhbmNlRnJvbVBsYXllciA9IHJvd3MubGVuZ3RoIC0gMSAtIHJvd0luZGV4O1xuICAgIGZvciAoY29uc3QgW3NpZGUsIGxhbmVdIG9mIFtbXCJsZWZ0XCIsIGxlZnRdLCBbXCJyaWdodFwiLCByaWdodF1dIGFzIGNvbnN0KSB7XG4gICAgICBjb25zdCBvY2N1cGllZEJ5ID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICAgIFsuLi5sYW5lXS5mb3JFYWNoKChzeW1ib2wsIGxhbmVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHRyYWNrLmxlZ2VuZFtzeW1ib2xdO1xuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gdXNlcyBzeW1ib2wgXCIke3N5bWJvbH1cIiBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgaXMgbWlzc2luZyBmcm9tIHRoZSBsZWdlbmQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LmlkID09PSBcImVtcHR5XCIpIHJldHVybjtcbiAgICAgICAgY29uc3QgZW5lbXlJZCA9IGVuZW15SWRGcm9tVHJhY2tJZChlbnRyeS5pZCk7XG4gICAgICAgIGNvbnN0IGNvbHVtblNwYW4gPSBlbmVteUlkID8gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0uY29sdW1uU3BhbiA6IDE7XG4gICAgICAgIGlmIChsYW5lSW5kZXggKyBjb2x1bW5TcGFuID4gbGFuZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBwbGFjZXMgJHtlbnRyeS5pZH0gYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IG5lZWRzICR7Y29sdW1uU3Bhbn0gY29sdW1ucyBhbmQgb25seSAke2xhbmUubGVuZ3RoIC0gbGFuZUluZGV4fSByZW1haW4uYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgY29sdW1uU3Bhbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgICBjb25zdCBvY2N1cGllZCA9IG9jY3VwaWVkQnkuZ2V0KGxhbmVJbmRleCArIG9mZnNldCk7XG4gICAgICAgICAgaWYgKG9jY3VwaWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBwbGFjZXMgJHtlbnRyeS5pZH0gb24gJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4ICsgb2Zmc2V0fSwgYWxyZWFkeSBvY2N1cGllZCBieSAke29jY3VwaWVkfS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgY29sdW1uU3Bhbjsgb2Zmc2V0KyspIG9jY3VwaWVkQnkuc2V0KGxhbmVJbmRleCArIG9mZnNldCwgZW50cnkuaWQpO1xuXG4gICAgICAgIGVudGl0aWVzLnB1c2goe1xuICAgICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgc2lkZSxcbiAgICAgICAgICBsYW5lSW5kZXgsXG4gICAgICAgICAgY29sdW1uU3BhbixcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBkaXN0YW5jZUZyb21QbGF5ZXIsXG4gICAgICAgICAgc3BlZWRNdWx0aXBsaWVyOiAoZW50cnkuc3BlZWQgPz8gMSkgKiAoaXNFbmVteShlbnRyeS5pZCkgPyB0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgOiAxKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbnRpdGllcy5zb3J0KChhLCBiKSA9PlxuICAgIGEuZGlzdGFuY2VGcm9tUGxheWVyIC0gYi5kaXN0YW5jZUZyb21QbGF5ZXIgfHxcbiAgICBhLnJvd0luZGV4IC0gYi5yb3dJbmRleCB8fFxuICAgIGEuc2lkZS5sb2NhbGVDb21wYXJlKGIuc2lkZSkgfHxcbiAgICBhLmxhbmVJbmRleCAtIGIubGFuZUluZGV4KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJTa3licmVha1wiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgQXVyb3JhIG9wZW5lciBpcyBidXNpZXIgdGhhbiB0aGUgdHV0b3JpYWwgYXJjLCBidXQgZ2l2ZXMgYSBuZWFyYnkgc2hpZWxkIGFuZCBidXJzdCB3ZWFwb24gYmVmb3JlIHRoZSBmaXJzdCBzcXVlZXplLlwiLFxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxuICBzdGFydGluZ0d1bkxldmVsOiAyLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBsYXlvdXQ6IGBcbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uVy4uIHwgLi5FLi5cbi4uRS4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uRS5cbi4uRS4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uYS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLi4uLi5cbi4uLi4uIHwgLkUuRS5cbi4uVy4uIHwgLi4uLi5cbi4uLi4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi5FLi5cbi5FLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uRS5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uSS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uTS4uIHwgLi4uLi5cbmAsXG4gICAgbGVnZW5kOiB7XG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXG4gICAgICBcIk1cIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxuICAgICAgXCJXXCI6IHsgaWQ6IFwiZW5lbXkud2luZ2VyXCIgfSxcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjgyIH0sXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjkgfSxcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC43OCB9LFxuICAgIH0sXG4gICAgYmFsYW5jZToge1xuICAgICAgZW5lbXlIcDogMSxcbiAgICAgIGVuZW15U3BlZWQ6IDEuMDgsXG4gICAgfSxcbiAgfSxcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XG4gIGxhYmVsOiBcIlJpYmJvbiBTdG9ybVwiLFxuICBkZXNjcmlwdGlvbjogXCJBdXJvcmEgcHJlc3N1cmUgY29tZXMgaW4gd2F2ZXM6IGZsYW5rZXJzLCBnbGFzcyBkZWNveXMsIGEgdGFuayBicmVhaywgdGhlbiBhIGhlYXZ5IHdlYXBvbiBwYXlvZmYuXCIsXG4gIHN0YXJ0aW5nR3VuOiBcImJ1cnN0Q2FyYmluZVwiLFxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBsYXlvdXQ6IGBcbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uVy4uIHwgLi4uLi5cbi4uLi4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uWC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5QLkUuIHwgLkUuUC5cbi4uLi4uIHwgLi4uLi5cbi4uVy4uIHwgLi5FLi5cbi4uRS4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uVC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uRS5cbi4uVy4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLkUuIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uUC4uIHwgLi5FLi5cbi4uRS4uIHwgLi5QLi5cbi4uLi4uIHwgLi5QLi5cbi4uSy4uIHwgLi5QLi5cbi4uLi4uIHwgLi5QLi5cbi4uVy4uIHwgLi5QLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uYi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uSi4uIHwgLi4uLi5cbi4uTS4uIHwgLi4uLi5cbmAsXG4gICAgbGVnZW5kOiB7XG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXG4gICAgICBcIk1cIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxuICAgICAgXCJXXCI6IHsgaWQ6IFwiZW5lbXkud2luZ2VyXCIgfSxcbiAgICAgIFwiVFwiOiB7IGlkOiBcImVuZW15LnRhbmtcIiB9LFxuICAgICAgXCJQXCI6IHsgaWQ6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIiB9LFxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjkyIH0sXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC44OCB9LFxuICAgICAgXCJLXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiLCBzcGVlZDogMC45MiB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXG4gICAgICBcIlhcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5oZXhHdWFyZFwiLCBzcGVlZDogMC44NiB9LFxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjg2IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuNzggfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEuMDQsXG4gICAgICBlbmVteVNwZWVkOiAxLjEyLFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJNYWduZXRpYyBEYXduXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgZGVuc2UgQXVyb3JhIGZpbmFsZSB3aXRoIGhhcmQgc3VyZ2VzLCBkZWxpYmVyYXRlIHNhZmUgc2hlbHZlcywgYW5kIHRvcC10aWVyIHRvb2xzIGJlZm9yZSB0aGUgYmlnZ2VzdCB3YXZlcy5cIixcbiAgc3RhcnRpbmdHdW46IFwiYnVyc3RDYXJiaW5lXCIsXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDIsXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xuICAgIGxheW91dDogYFxuLi5ULi4gfCAuLlQuLlxuLkUuRS4gfCAuRS5FLlxuLi5XLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi5ULi4gfCAuLi4uLlxuLi4uLi4gfCAuLlQuLlxuLi4uLi4gfCAuLi4uLlxuLi5YLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLlAuRS4gfCAuRS5QLlxuLi5XLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi5LLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuRS5FLlxuLi5XLi4gfCAuLi4uLlxuLi4uLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi4yLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5ULi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5iLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuRS5FLlxuLi5QLi4gfCAuLlAuLlxuLi5XLi4gfCAuLkUuLlxuLi5FLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi5KLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuLi4uLlxuLi4uLi4gfCAuRS5FLlxuLi5XLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi5YLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5ULi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLkUuRS4gfCAuRS5FLlxuLi4uLi4gfCAuLi4uLlxuLi5jLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5XLi4gfCAuLlcuLlxuLkUuRS4gfCAuRS5FLlxuLi4uLi4gfCAuLi4uLlxuLi4yLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLlAuRS4gfCAuRS5QLlxuLi5XLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi5LLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5TLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5JLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5YLi4gfCAuLi4uLlxuLi5NLi4gfCAuLi4uLlxuYCxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcbiAgICAgIFwiTVwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXG4gICAgICBcIldcIjogeyBpZDogXCJlbmVteS53aW5nZXJcIiB9LFxuICAgICAgXCJUXCI6IHsgaWQ6IFwiZW5lbXkudGFua1wiIH0sXG4gICAgICBcIlBcIjogeyBpZDogXCJlbmVteS5nbGFzc1NoaWVsZFwiIH0sXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuOTIgfSxcbiAgICAgIFwiSlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCIsIHNwZWVkOiAwLjg2IH0sXG4gICAgICBcIktcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5zcGxpdHRlclJpZmxlXCIsIHNwZWVkOiAwLjkgfSxcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuNzggfSxcbiAgICAgIFwiWFwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCIsIHNwZWVkOiAwLjg0IH0sXG4gICAgICBcImJcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIiwgc3BlZWQ6IDAuODQgfSxcbiAgICAgIFwiY1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQubmVlZGxlUmFwaWVyXCIsIHNwZWVkOiAwLjg2IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuNzYgfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEuMDgsXG4gICAgICBlbmVteVNwZWVkOiAxLjE2LFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJGaXJzdCBHbG93XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgc2hvcnQgdGVhY2hpbmcgcnVuIHdpdGggYSB3ZWFwb24gaW4gcmVhY2gsIG9uZSBsYW5lIGF0IGEgdGltZSwgdGhlbiBhIGNhbG0gdHdvLWxhbmUgZmluaXNoLlwiLFxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xuICAgIGxheW91dDogYFxuLi5FLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLi5FLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLi4uLi4gfCAuLkUuLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi5FLlxuLi4yLi4gfCAuLi4uLlxuLi5hLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLi4uLlxuLi5FLi4gfCAuLi4uLlxuLkUuLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLlMuLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5HLi4gfCAuLi4uLlxuLi5NLi4gfCAuLi4uLlxuYCxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcbiAgICAgIFwiTVwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMS4xNSB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC45MiB9LFxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC45NSB9LFxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjkgfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEsXG4gICAgICBlbmVteVNwZWVkOiAwLjkyLFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJEcmlmdCBMZXNzb25cIixcbiAgZGVzY3JpcHRpb246IFwiQWx0ZXJuYXRpbmcgbGFuZXMgaW50cm9kdWNlIGFpbSBwcmVzc3VyZSwgd2l0aCBhIHNoaWVsZCBwb2NrZXQgYmVmb3JlIHRoZSBmaXJzdCBwYWlyZWQgd2F2ZS5cIixcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBsYXlvdXQ6IGBcbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uRS5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uSS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLi4uLi5cbi4uLi4uIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi5FLi5cbi5FLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uRS5cbi4uLi4uIHwgLi4uLi5cbi4uYS4uIHwgLi4uLi5cbi4uLi4uIHwgLi5FLi5cbi5FLkUuIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uTS4uIHwgLi4uLi5cbmAsXG4gICAgbGVnZW5kOiB7XG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXG4gICAgICBcIk1cIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDEuMSB9LFxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg4IH0sXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjg2IH0sXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjkgfSxcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44MiB9LFxuICAgIH0sXG4gICAgYmFsYW5jZToge1xuICAgICAgZW5lbXlIcDogMSxcbiAgICAgIGVuZW15U3BlZWQ6IDEsXG4gICAgfSxcbiAgfSxcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XG4gIGxhYmVsOiBcIk5lYnVsYSBHYXRlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBsZWFybmluZyBmaW5hbGUgYWRkcyBmYXN0IGZsYW5rZXJzIGFuZCBhIHNpbmdsZSB0YW5rLCB3aXRoIGNsZWFyIHJlY292ZXJ5IHNoZWx2ZXMgYmV0d2VlbiBwcmVzc3VyZSB3YXZlcy5cIixcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcbiAgc3RhcnRpbmdHdW5MZXZlbDogMixcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBsYXlvdXQ6IGBcbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uVy4uIHwgLi4uLi5cbi4uLi4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uRS5cbi4uRS4uIHwgLi5FLi5cbi4uLi4uIHwgLi4uLi5cbi4uWC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLi4uLi5cbi4uLi4uIHwgLkUuRS5cbi4uVy4uIHwgLi4uLi5cbi4uVC4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi5FLi5cbi5FLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uYi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uVy4uIHwgLi5FLi5cbi4uRS4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRy4uIHwgLi4uLi5cbi4uTS4uIHwgLi4uLi5cbmAsXG4gICAgbGVnZW5kOiB7XG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXG4gICAgICBcIk1cIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxuICAgICAgXCJXXCI6IHsgaWQ6IFwiZW5lbXkud2luZ2VyXCIgfSxcbiAgICAgIFwiVFwiOiB7IGlkOiBcImVuZW15LnRhbmtcIiB9LFxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDEuMTUgfSxcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44OCB9LFxuICAgICAgXCJKXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIiwgc3BlZWQ6IDAuOSB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44NSB9LFxuICAgICAgXCJYXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIiwgc3BlZWQ6IDAuOSB9LFxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC45MiB9LFxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44MiB9LFxuICAgIH0sXG4gICAgYmFsYW5jZToge1xuICAgICAgZW5lbXlIcDogMSxcbiAgICAgIGVuZW15U3BlZWQ6IDEuMDQsXG4gICAgfSxcbiAgfSxcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrNFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2syIH0gZnJvbSBcIi4vVHJhY2s1XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazMgfSBmcm9tIFwiLi9UcmFjazZcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2sxXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazMgfSBmcm9tIFwiLi9UcmFjazNcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSB7XG4gIFwibmVvbi1uZWJ1bGFlLTFcIjogbmVvbk5lYnVsYWVUcmFjazEsXG4gIFwibmVvbi1uZWJ1bGFlLTJcIjogbmVvbk5lYnVsYWVUcmFjazIsXG4gIFwibmVvbi1uZWJ1bGFlLTNcIjogbmVvbk5lYnVsYWVUcmFjazMsXG4gIFwiYXVyb3JhLTFcIjogYXVyb3JhVHJhY2sxLFxuICBcImF1cm9yYS0yXCI6IGF1cm9yYVRyYWNrMixcbiAgXCJhdXJvcmEtM1wiOiBhdXJvcmFUcmFjazMsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbGllcyA9IHtcbiAgbmVvbk5lYnVsYWU6IHtcbiAgICBsYWJlbDogXCJOZW9uIE5lYnVsYWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxlYXJuaW5nIGFyYyBhYm91dCBsYW5lcywgcGlja3Vwcywgc2hpZWxkcywgYW5kIGNvbnRyb2xsZWQgcHJlc3N1cmUuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJuZW9uSGFsbFwiIH0sXG4gICAgdHJhY2tJZHM6IFtcIm5lb24tbmVidWxhZS0xXCIsIFwibmVvbi1uZWJ1bGFlLTJcIiwgXCJuZW9uLW5lYnVsYWUtM1wiXSxcbiAgfSxcbiAgYXVyb3JhOiB7XG4gICAgbGFiZWw6IFwiQXVyb3JhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVuc2UgcGxhbmV0YXJ5IGFzc2F1bHRzIHdpdGggYnJpZ2h0ZXIgcmVjb3Zlcnkgd2luZG93cyBhbmQgc2hhcnBlciB0aHJlYXQgd2F2ZXMuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJhdXJvcmFcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJhdXJvcmEtMVwiLCBcImF1cm9yYS0yXCIsIFwiYXVyb3JhLTNcIl0sXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbmV4cG9ydCB7IGF1cm9yYVRyYWNrMSwgYXVyb3JhVHJhY2syLCBhdXJvcmFUcmFjazMsIG5lb25OZWJ1bGFlVHJhY2sxLCBuZW9uTmVidWxhZVRyYWNrMiwgbmVvbk5lYnVsYWVUcmFjazMgfTtcbiIsICJpbXBvcnQgeyBpc0xhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgZ3VuRmFtaWx5IH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrRmFtaWx5TWVtYmVyLCBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcGFyc2VUcmFja0RlZmluaXRpb24gfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHRyYWNrRmFtaWxpZXMsIHRyYWNrcyB9IGZyb20gXCIuL3RyYWNrc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInRyYWNrXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJUcmFja1wiO1xuICByZWFkb25seSBtZW1iZXJzID0gdHJhY2tzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj47XG4gIHJlYWRvbmx5IGZhbWlsaWVzID0gdHJhY2tGYW1pbGllcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlNZW1iZXI8a2V5b2YgdHlwZW9mIHRyYWNrcz4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2suc3RhcnRpbmdHdW4gaW4gZ3VuRmFtaWx5Lm1lbWJlcnMsIGAke2lkfSBoYXMgYW4gdW5rbm93biBzdGFydGluZyBndW4uYCk7XG4gICAgICBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICAgIHRoaXMucmVxdWlyZShpc0xhbmVSdW5uZXJTY2VuZUlkKHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2lkLCBmYW1pbHldIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmFtaWxpZXMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoZmFtaWx5LnRyYWNrSWRzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIHRyYWNrLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQoZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgICBmb3IgKGNvbnN0IHRyYWNrSWQgb2YgZmFtaWx5LnRyYWNrSWRzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0cmFja0lkIGluIHRoaXMubWVtYmVycywgYCR7aWR9IHJlZmVyZW5jZXMgdW5rbm93biB0cmFjayBcIiR7dHJhY2tJZH1cIi5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRoaXMubWVtYmVyc1t0cmFja0lkXS5lbnZpcm9ubWVudC5zY2VuZUlkID09PSBmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCwgYCR7dHJhY2tJZH0gbXVzdCB1c2UgdGhlICR7aWR9IHNjZW5lLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG5leHBvcnQgdHlwZSBUcmFja0ZhbWlseUlkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5LmZhbWlsaWVzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gTk9UIGZpcmUgb24gYSB0aW1lciBcdTIwMTQgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lIFx1MjAxNCBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIE5PVCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBDYW4gY29leGlzdCB3aXRoIGFuIGFjdGl2ZSBHdW4gYW5kIGFuIGFjdGl2ZSBTaGllbGQgc2ltdWx0YW5lb3VzbHkuXG4gICAqIC0gVGFyZ2V0aW5nIGlzIGxhbmUtYXdhcmUgdmlhIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpLlxuICAgKiAtIFRoZSBzbGFzaCBhbmltYXRpb24gcnVucyBmb3Igc2xhc2hEdXJhdGlvbk1zIG1pbGxpc2Vjb25kcywgdGhlbiBmYWRlcy5cbiAgICogLSBEYW1hZ2UgaXMgYXBwbGllZCBpbW1lZGlhdGVseSB3aGVuIHRoZSBzd2luZyBzdGFydHMgKG5vdCBhdCBhbmltYXRpb24gZW5kKS5cbiAgICpcbiAgICogUHJlY2VkZW5jZTogc3dvcmQgYXR0YWNrcyBvY2N1ciBhZnRlciBzaGllbGRCbG9jay9zaGllbGRQdWxzZSBidXQgYmVmb3JlXG4gICAqIHNoaWVsZENvbnRhY3REYW1hZ2UgYW5kIHNoaWVsZEF1cmEuIFNlZSBtYWluLnRzIG5lYXJQbGF5ZXJFZmZlY3RPcmRlci5cbiAgICovXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgLyoqXG4gICAgICogQXJjIEJsYWRlIFx1MjAxNCBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIEhpdHMgMVx1MjAxMzIgZW5lbWllcyBkZXBlbmRpbmcgb24gYXJjIG92ZXJsYXAuIFNob3J0IGNvb2xkb3duLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuODUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMFx1MjAxMzE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgXHUyMDE0IEhlYXZ5IHN3b3JkLiBTbG93ZXIgYnV0IGhpdHMgbXVsdGlwbGUgY2x1c3RlcmVkIGVuZW1pZXMuXG4gICAgICogV2lkZSBhcmMsIHRoaWNrZXIgc2xhc2guIEJldHRlciBhZ2FpbnN0IHRpZ2h0IGdyb3VwcyB0aGFuIGZhc3Qgc2luZ2xlcy5cbiAgICAgKi9cbiAgICBjbGVhdmVyOiB7XG4gICAgICBsYWJlbDogXCJDbGVhdmVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIHJhbmdlOiA1NixcbiAgICAgIGFyY0RlZ3JlZXM6IDExMCxcbiAgICAgIGRhbWFnZTogMi44LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjgsXG4gICAgICBtYXhUYXJnZXRzOiA0LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJjbHVzdGVyTmVhclBsYXllclwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAyMjAsXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjY1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbmQgd2lkZS4gVGhpY2tlciBhcmMuIFN0cm9uZ2VyIGltcGFjdCBmbGFzaC4gR2VvbWV0cmljIGFuZCBwcm9jZWR1cmFsIFx1MjAxNCBub3QgYSBidWxsZXQuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE5lZWRsZSBSYXBpZXIgXHUyMDE0IFByZWNpc2lvbiBzd29yZC4gTG9uZyByZWFjaCwgbmFycm93IGFyYywgc2luZ2xlIHRhcmdldC5cbiAgICAgKiBQcmlvcml0aXplcyB0aGUgbW9zdCBkYW5nZXJvdXMgKGZyb250LW1vc3QpIGVuZW15LlxuICAgICAqL1xuICAgIG5lZWRsZVJhcGllcjoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlIFJhcGllclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIHJhbmdlOiA3MCxcbiAgICAgIGFyY0RlZ3JlZXM6IDMwLFxuICAgICAgZGFtYWdlOiAyLjIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMSxcbiAgICAgIG1heFRhcmdldHM6IDEsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImZyb250TW9zdFRocmVhdFwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDAuNTUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkVsZWdhbnQgYW5kIHByZWNpc2UuIFRoaW4gc3RhYmJpbmcgbGluZS4gTm90IGEgZ3VuIHNob3QgXHUyMDE0IGl0IG11c3QgZmVlbCBtZWxlZS4gU2luZ2xlIHRhcmdldCBwcmlvcml0eS5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5yYW5nZSA+IDAsIGAke2lkfSByYW5nZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmFyY0RlZ3JlZXMgPiAwICYmIHN3b3JkLmFyY0RlZ3JlZXMgPD0gMzYwLCBgJHtpZH0gYXJjRGVncmVlcyBtdXN0IGJlIGluICgwLCAzNjBdLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZSA+IDAsIGAke2lkfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImV4cG9ydCBpbnRlcmZhY2UgQXV0b0FpbVRhcmdldCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhZC1jZW50ZXIgYWltIG9mZnNldCAocmVsYXRpdmUgdG8gbGFuZUNlbnRlcikgdGhhdCBiZXN0IGFsaWduc1xuICogb25lIG9mIHRoZSBzcXVhZCdzIGZyb250LXJvdyBjb2x1bW5zIHRvIHRoZSBuZWFyZXN0IGVuZW15LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRzICAgICAgICAgQWxsIGxpdmUgKG5vbi1keWluZykgZW5lbWllcyBpbiB0aGUgY3VycmVudCBsYW5lLlxuICogQHBhcmFtIGxhbmVDZW50ZXIgICAgICBQaXhlbCBYIG9mIHRoZSBsYW5lJ3MgY2VudGVyLlxuICogQHBhcmFtIGNvbHVtbk9mZnNldHMgICBYIG9mZnNldHMgb2YgZWFjaCBmcm9udC1yb3cgY29sdW1uIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci5cbiAqIEBwYXJhbSBjdXJyZW50T2Zmc2V0ICAgQ3VycmVudCBzcXVhZCBhaW0gb2Zmc2V0IChzcXVhZCBjZW50ZXIgPSBsYW5lQ2VudGVyICsgY3VycmVudE9mZnNldCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBdXRvQWltT2Zmc2V0KFxuICB0YXJnZXRzOiByZWFkb25seSBBdXRvQWltVGFyZ2V0W10sXG4gIGxhbmVDZW50ZXI6IG51bWJlcixcbiAgY29sdW1uT2Zmc2V0czogcmVhZG9ubHkgbnVtYmVyW10sXG4gIGN1cnJlbnRPZmZzZXQgPSAwLFxuKTogbnVtYmVyIHtcbiAgaWYgKCF0YXJnZXRzLmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgLy8gSWRlbnRpZnkgdGhlIGZyb250IHJvdzogZ3JvdXAgdGFyZ2V0cyBieSByb3dJZCAob3IgdHJlYXQgdW5ncm91cGVkIHRhcmdldHMgYXMgYSBzaW5nbGUgcm93KS5cbiAgY29uc3QgZXhwbGljaXRSb3dzID0gbmV3IE1hcDxudW1iZXIsIEF1dG9BaW1UYXJnZXRbXT4oKTtcbiAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgIGlmICh0YXJnZXQucm93SWQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3Qgcm93ID0gZXhwbGljaXRSb3dzLmdldCh0YXJnZXQucm93SWQpID8/IFtdO1xuICAgIHJvdy5wdXNoKHRhcmdldCk7XG4gICAgZXhwbGljaXRSb3dzLnNldCh0YXJnZXQucm93SWQsIHJvdyk7XG4gIH1cbiAgY29uc3QgZnJvbnRSb3cgPSBleHBsaWNpdFJvd3Muc2l6ZVxuICAgID8gWy4uLmV4cGxpY2l0Um93cy52YWx1ZXMoKV0uc29ydCgobGVmdCwgcmlnaHQpID0+XG4gICAgICAgIE1hdGgubWF4KC4uLnJpZ2h0Lm1hcCh0ID0+IHQueSkpIC0gTWF0aC5tYXgoLi4ubGVmdC5tYXAodCA9PiB0LnkpKSlbMF1cbiAgICA6IHRhcmdldHMuZmlsdGVyKHQgPT4gTWF0aC5hYnModC55IC0gTWF0aC5tYXgoLi4udGFyZ2V0cy5tYXAoYyA9PiBjLnkpKSkgPCAzKTtcblxuICAvLyBGb3IgZWFjaCBlbmVteSBpbiB0aGUgZnJvbnQgcm93IFx1MDBENyBlYWNoIHNxdWFkIGNvbHVtbiwgY29tcHV0ZSB0aGUgc3F1YWQtY2VudGVyXG4gIC8vIG9mZnNldCB0aGF0IHdvdWxkIHBsYWNlIHRoYXQgY29sdW1uIGV4YWN0bHkgb24gdGhhdCBlbmVteSdzIFguXG4gIC8vIFBpY2sgdGhlIChlbmVteSwgY29sdW1uKSBwYWlyIHdob3NlIHJlcXVpcmVkIG9mZnNldCBpcyBjbG9zZXN0IHRvIHRoZSBjdXJyZW50XG4gIC8vIG9mZnNldCBcdTIwMTQgbWluaW1pc2luZyB0aGUgYWltIG1vdmVtZW50IG5lZWRlZCB3aGlsZSBndWFyYW50ZWVpbmcgYSBoaXQuXG4gIGNvbnN0IGNvbHMgPSBjb2x1bW5PZmZzZXRzLmxlbmd0aCA+IDAgPyBjb2x1bW5PZmZzZXRzIDogWzBdO1xuICBsZXQgYmVzdE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG4gIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZnJvbnRSb3cpIHtcbiAgICBmb3IgKGNvbnN0IGNvbE9mZnNldCBvZiBjb2xzKSB7XG4gICAgICAvLyBzcXVhZENlbnRlciA9IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgXHUyMTkyIGNvbHVtbiBsYW5kcyBhdCBsYW5lQ2VudGVyICsgYWltT2Zmc2V0ICsgY29sT2Zmc2V0XG4gICAgICAvLyBXZSB3YW50IHRoYXQgdG8gZXF1YWwgZW5lbXkueCBcdTIxOTIgYWltT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXRcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0O1xuICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGNhbmRpZGF0ZU9mZnNldCAtIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdCkge1xuICAgICAgICBiZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIGJlc3RPZmZzZXQgPSBjYW5kaWRhdGVPZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RPZmZzZXQ7XG59XG4iLCAiaW1wb3J0IHtcbiAgTmVvblByb2plY3RpbGUsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7XG4gIEd1bkxldmVsLFxuICBHdW5NZW1iZXIsXG4gIEltcGFjdEVmZmVjdCxcbiAgTXV6emxlRWZmZWN0LFxuICBQcm9qZWN0aWxlU2hhcGUsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuUHJvamVjdGlsZSB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZ4OiBudW1iZXI7XG4gIHZ5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcGllcmNlUmVtYWluaW5nOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I6IHN0cmluZztcbiAgY29yZUNvbG9yOiBzdHJpbmc7XG4gIGFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlcjogYm9vbGVhbjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0RW5lbXlJZHM6IFNldDxudW1iZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bkVmZmVjdCB7XG4gIGtpbmQ6IFwibXV6emxlXCIgfCBcImltcGFjdFwiIHwgXCJkZWF0aFwiO1xuICBzdHlsZTogTXV6emxlRWZmZWN0IHwgSW1wYWN0RWZmZWN0IHwgXCJkZWF0aEJsb29tXCI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcjogc3RyaW5nO1xuICByYWRpdXM6IG51bWJlcjtcbiAgZXhwaXJlc0F0OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHNlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5UYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2NoZWR1bGVkVm9sbGV5IHtcbiAgZmlyZXNBdDogbnVtYmVyO1xuICBndW46IEd1bk1lbWJlcjtcbiAgbGV2ZWw6IEd1bkxldmVsO1xuICBsYW5lOiBudW1iZXI7XG4gIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdO1xuICBzY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgR3VuU2ltdWxhdGlvbiB7XG4gIHJlYWRvbmx5IHByb2plY3RpbGVzOiBHdW5Qcm9qZWN0aWxlW10gPSBbXTtcbiAgcmVhZG9ubHkgZWZmZWN0czogR3VuRWZmZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBzY2hlZHVsZWRWb2xsZXlzOiBTY2hlZHVsZWRWb2xsZXlbXSA9IFtdO1xuICBwcml2YXRlIHNlcXVlbmNlID0gMDtcbiAgcHJpdmF0ZSBzaG90U2VxdWVuY2UgPSAwO1xuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmVmZmVjdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGZpcmUoZ3VuOiBHdW5NZW1iZXIsIGxldmVsOiBHdW5MZXZlbCwgbGFuZTogbnVtYmVyLCBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgbm93OiBudW1iZXIsIHNjYWxlID0gMSk6IHZvaWQge1xuICAgIGZvciAobGV0IGJ1cnN0SW5kZXggPSAwOyBidXJzdEluZGV4IDwgbGV2ZWwuYnVyc3RDb3VudDsgYnVyc3RJbmRleCsrKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMucHVzaCh7XG4gICAgICAgIGZpcmVzQXQ6IG5vdyArIGJ1cnN0SW5kZXggKiBsZXZlbC5idXJzdEludGVydmFsTXMsXG4gICAgICAgIGd1biwgbGV2ZWwsIGxhbmUsIG9yaWdpbnM6IG9yaWdpbnMubWFwKG9yaWdpbiA9PiAoeyAuLi5vcmlnaW4gfSkpLCBzY2FsZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpcmluZyhub3c6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGZpcmVkID0gMDtcbiAgICBjb25zdCBkdWUgPSB0aGlzLnNjaGVkdWxlZFZvbGxleXMuZmlsdGVyKHZvbGxleSA9PiB2b2xsZXkuZmlyZXNBdCA8PSBub3cpO1xuICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cyA9IHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5maWx0ZXIodm9sbGV5ID0+IHZvbGxleS5maXJlc0F0ID4gbm93KTtcbiAgICBmb3IgKGNvbnN0IHZvbGxleSBvZiBkdWUpIHtcbiAgICAgIHRoaXMuc3Bhd25Wb2xsZXkodm9sbGV5LCBub3cpO1xuICAgICAgZmlyZWQrKztcbiAgICB9XG4gICAgcmV0dXJuIGZpcmVkO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdGlsZXMoXG4gICAgZGVsdGE6IG51bWJlcixcbiAgICBub3c6IG51bWJlcixcbiAgICB0YXJnZXRzOiByZWFkb25seSBHdW5UYXJnZXRbXSxcbiAgICBib3VuZHM6IHsgdG9wOiBudW1iZXI7IGxlZnQ/OiBudW1iZXI7IHJpZ2h0PzogbnVtYmVyIH0sXG4gICAgb25IaXQ6IChwcm9qZWN0aWxlOiBHdW5Qcm9qZWN0aWxlLCB0YXJnZXQ6IEd1blRhcmdldCkgPT4gdm9pZCxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0aWxlIG9mIFsuLi50aGlzLnByb2plY3RpbGVzXSkge1xuICAgICAgcHJvamVjdGlsZS54ICs9IHByb2plY3RpbGUudnggKiBkZWx0YTtcbiAgICAgIHByb2plY3RpbGUueSArPSBwcm9qZWN0aWxlLnZ5ICogZGVsdGE7XG4gICAgICBpZiAocHJvamVjdGlsZS55IDwgYm91bmRzLnRvcCB8fCBwcm9qZWN0aWxlLnggPCAoYm91bmRzLmxlZnQgPz8gLUluZmluaXR5KSB8fCBwcm9qZWN0aWxlLnggPiAoYm91bmRzLnJpZ2h0ID8/IEluZmluaXR5KSkge1xuICAgICAgICB0aGlzLnJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICBpZiAodGFyZ2V0LmR5aW5nIHx8IHByb2plY3RpbGUubGFuZSAhPT0gdGFyZ2V0LmxhbmUgfHwgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5oYXModGFyZ2V0LmlkKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGR4ID0gcHJvamVjdGlsZS54IC0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IGR5ID0gcHJvamVjdGlsZS55IC0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IGhpdFJhZGl1cyA9IHByb2plY3RpbGUucmFkaXVzICsgdGFyZ2V0LnJhZGl1cztcbiAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gaGl0UmFkaXVzICogaGl0UmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5hZGQodGFyZ2V0LmlkKTtcbiAgICAgICAgdGFyZ2V0LmhlYWx0aCAtPSBwcm9qZWN0aWxlLmRhbWFnZTtcbiAgICAgICAgdGFyZ2V0LnkgLT0gcHJvamVjdGlsZS5rbm9ja2JhY2s7XG4gICAgICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgICAgICBraW5kOiBcImltcGFjdFwiLFxuICAgICAgICAgIHN0eWxlOiBwcm9qZWN0aWxlLmltcGFjdEVmZmVjdCxcbiAgICAgICAgICB4OiBwcm9qZWN0aWxlLngsIHk6IHByb2plY3RpbGUueSxcbiAgICAgICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgICAgICByYWRpdXM6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5oaXRGbGFzaFNjYWxlICogNCxcbiAgICAgICAgICBleHBpcmVzQXQ6IG5vdyArIHByb2plY3RpbGUuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICBkdXJhdGlvbjogcHJvamVjdGlsZS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHNlZWQ6IHByb2plY3RpbGUuaWQsXG4gICAgICAgIH0pO1xuICAgICAgICBvbkhpdChwcm9qZWN0aWxlLCB0YXJnZXQpO1xuICAgICAgICBpZiAocHJvamVjdGlsZS5waWVyY2VSZW1haW5pbmcgPiAwKSBwcm9qZWN0aWxlLnBpZXJjZVJlbWFpbmluZy0tO1xuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RpbGVzLmluY2x1ZGVzKHByb2plY3RpbGUpKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlZmZlY3Qgb2YgWy4uLnRoaXMuZWZmZWN0c10pIHtcbiAgICAgIGlmIChlZmZlY3QuZXhwaXJlc0F0IDw9IG5vdykgdGhpcy5lZmZlY3RzLnNwbGljZSh0aGlzLmVmZmVjdHMuaW5kZXhPZihlZmZlY3QpLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcm9qZWN0aWxlUHJpbWl0aXZlcygpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RpbGVzLmZsYXRNYXAocHJvamVjdGlsZSA9PiBuZXcgTmVvblByb2plY3RpbGUoe1xuICAgICAgeDogcHJvamVjdGlsZS54LCB5OiBwcm9qZWN0aWxlLnksXG4gICAgICB2ZWxvY2l0eVg6IHByb2plY3RpbGUudngsIHZlbG9jaXR5WTogcHJvamVjdGlsZS52eSxcbiAgICAgIHJhZGl1czogcHJvamVjdGlsZS5yYWRpdXMsXG4gICAgICBsZW5ndGg6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5hc3BlY3QsXG4gICAgICB0cmFpbExlbmd0aDogcHJvamVjdGlsZS50cmFpbExlbmd0aCxcbiAgICAgIHRyYWlsV2lkdGg6IE1hdGgubWF4KHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS50cmFpbFdpZHRoU2NhbGUsIDEuMSksXG4gICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvcixcbiAgICAgIHRyYWlsQ29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgIGNvcmVDb2xvcjogcHJvamVjdGlsZS5jb3JlQ29sb3IsXG4gICAgICBzaGFwZTogcHJvamVjdGlsZS5zaGFwZSBhcyBOZW9uUHJvamVjdGlsZVNoYXBlLFxuICAgICAgaW50ZW5zaXR5OiBwcm9qZWN0aWxlLnZpc3VhbEludGVuc2l0eSAqIChwcm9qZWN0aWxlLnRyYWNlciA/IDEuMzUgOiAxKSxcbiAgICAgIGdsb3c6IHByb2plY3RpbGUudHJhY2VyID8gMS40IDogLjcyLFxuICAgIH0pLnByaW1pdGl2ZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduVm9sbGV5KHZvbGxleTogU2NoZWR1bGVkVm9sbGV5LCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3VuLCBsZXZlbCwgbGFuZSwgb3JpZ2lucywgc2NhbGUgfSA9IHZvbGxleTtcbiAgICBmb3IgKGNvbnN0IG9yaWdpbiBvZiBvcmlnaW5zKSB7XG4gICAgICBjb25zdCBjb3VudCA9IE1hdGgubWF4KDEsIGxldmVsLnByb2plY3RpbGVDb3VudCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgYW5nbGVEZWdyZWVzID0gY291bnQgPT09IDEgPyAwIDogKGluZGV4IC8gKGNvdW50IC0gMSkgLSAuNSkgKiBsZXZlbC5zcHJlYWREZWdyZWVzO1xuICAgICAgICBjb25zdCBhbmdsZSA9IGFuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gbGV2ZWwucHJvamVjdGlsZVNwZWVkICogc2NhbGU7XG4gICAgICAgIHRoaXMuc2hvdFNlcXVlbmNlKys7XG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6ICsrdGhpcy5zZXF1ZW5jZSwgbGFuZSxcbiAgICAgICAgICB4OiBvcmlnaW4ueCArIChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogZ3VuLnZpc3VhbElkZW50aXR5Lmhvcml6b250YWxKaXR0ZXIgKiBzY2FsZSxcbiAgICAgICAgICB5OiBvcmlnaW4ueSxcbiAgICAgICAgICB2eDogTWF0aC5zaW4oYW5nbGUpICogc3BlZWQsXG4gICAgICAgICAgdnk6IC1NYXRoLmNvcyhhbmdsZSkgKiBzcGVlZCxcbiAgICAgICAgICByYWRpdXM6IGxldmVsLnByb2plY3RpbGVSYWRpdXMgKiBzY2FsZSxcbiAgICAgICAgICBkYW1hZ2U6IGxldmVsLmRhbWFnZSxcbiAgICAgICAgICBwaWVyY2VSZW1haW5pbmc6IGxldmVsLnBpZXJjZSxcbiAgICAgICAgICBjb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0sXG4gICAgICAgICAgdHJhaWxDb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdLFxuICAgICAgICAgIGNvcmVDb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LmNvcmVDb2xvcl0sXG4gICAgICAgICAgYXNwZWN0OiBndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUFzcGVjdCxcbiAgICAgICAgICB0cmFpbFdpZHRoU2NhbGU6IGd1bi52aXN1YWxJZGVudGl0eS50cmFpbFdpZHRoU2NhbGUsXG4gICAgICAgICAgdmlzdWFsSW50ZW5zaXR5OiBndW4udmlzdWFsSWRlbnRpdHkudmlzdWFsSW50ZW5zaXR5LFxuICAgICAgICAgIHNoYXBlOiBndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZVNoYXBlLFxuICAgICAgICAgIGltcGFjdEVmZmVjdDogZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdEVmZmVjdCxcbiAgICAgICAgICBpbXBhY3REdXJhdGlvbk1zOiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICB0cmFpbExlbmd0aDogbGV2ZWwudHJhaWxMZW5ndGggKiBzY2FsZSxcbiAgICAgICAgICB0cmFjZXI6IGxldmVsLnRyYWNlckV2ZXJ5TnRoU2hvdCA+IDAgJiYgdGhpcy5zaG90U2VxdWVuY2UgJSBsZXZlbC50cmFjZXJFdmVyeU50aFNob3QgPT09IDAsXG4gICAgICAgICAga25vY2tiYWNrOiBsZXZlbC5rbm9ja2JhY2sgKiBzY2FsZSxcbiAgICAgICAgICBoaXRGbGFzaFNjYWxlOiBsZXZlbC5oaXRGbGFzaFNjYWxlLFxuICAgICAgICAgIGhpdEVuZW15SWRzOiBuZXcgU2V0KCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVmZmVjdHMucHVzaCh7XG4gICAgICBraW5kOiBcIm11enpsZVwiLCBzdHlsZTogZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUVmZmVjdCxcbiAgICAgIHg6IG9yaWdpbnMucmVkdWNlKChzdW0sIG9yaWdpbikgPT4gc3VtICsgb3JpZ2luLngsIDApIC8gb3JpZ2lucy5sZW5ndGgsXG4gICAgICB5OiBvcmlnaW5zWzBdPy55ID8/IDAsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0sXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdLFxuICAgICAgcmFkaXVzOiAxMCAqIGxldmVsLm11enpsZUZsYXNoU2NhbGUgKiBzY2FsZSxcbiAgICAgIGV4cGlyZXNBdDogbm93ICsgZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMsXG4gICAgICBkdXJhdGlvbjogZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMsXG4gICAgICBzZWVkOiB0aGlzLnNob3RTZXF1ZW5jZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlOiBHdW5Qcm9qZWN0aWxlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RpbGVzLmluZGV4T2YocHJvamVjdGlsZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHRoaXMucHJvamVjdGlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIiwgIi8qKlxuICogTmVhcmJ5VGhyZWF0UXVlcnkgXHUyMDE0IHNoYXJlZCBsYW5lLWF3YXJlIGVuZW15IHF1ZXJ5IGZvciBzaGllbGQgYW5kIHN3b3JkIGZhbWlsaWVzLlxuICpcbiAqIEJvdGggc2hpZWxkcyBhbmQgc3dvcmRzIG9wZXJhdGUgbmVhciB0aGUgcGxheWVyLCBzbyB0aGV5IHNoYXJlIHRoaXMgbW9kdWxlXG4gKiB0byBhdm9pZCBpbmRlcGVuZGVudCwgcG90ZW50aWFsbHkgY29uZmxpY3Rpbmcgc2NhbnMuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgaW50ZW50aW9uYWxseSBtaW5pbWFsLiBJdCBwcm92aWRlcyBlbm91Z2ggc3RydWN0dXJlIHRvIGJlXG4gKiBmdXR1cmUtZnJpZW5kbHkgKG9yaWdpblNoYXBlIGluZGV4LCBjb2x1bW4tYmFuZCBhd2FyZW5lc3MpIHdpdGhvdXRcbiAqIG92ZXItYnVpbGRpbmcuIEV4dGVuZCB3aGVuIG5lZWRlZCBcdTIwMTQgZG8gbm90IHJlZmFjdG9yIHByZW1hdHVyZWx5LlxuICpcbiAqIE5lYXItcGxheWVyIGVmZmVjdCBwcmVjZWRlbmNlIChhcHBsaWVkIGJ5IG1haW4udHMpOlxuICogICAxLiBzaGllbGRCbG9jayAgICAgICAgXHUyMDE0IGNoYXJnZS1iYXNlZCBoaXQgYWJzb3JwdGlvblxuICogICAyLiBzaGllbGRQdWxzZSAgICAgICAgXHUyMDE0IGVtZXJnZW5jeSBwdXNoXG4gKiAgIDMuIHN3b3JkQXR0YWNrICAgICAgICBcdTIwMTQgc3dvcmQgZmFtaWx5XG4gKiAgIDQuIHNoaWVsZENvbnRhY3REYW1hZ2UgXHUyMDE0IGNvbnRhY3QgZGFtYWdlIG9uIHNoaWVsZCBlZGdlXG4gKiAgIDUuIHNoaWVsZEF1cmEgICAgICAgICBcdTIwMTQgc2xvdy9kZWJ1ZmYgYXVyYVxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogTWluaW1hbCBlbmVteSBpbnRlcmZhY2UgZXhwZWN0ZWQgYnkgdGhlIHRocmVhdCBxdWVyeSBzeXN0ZW0uICovXG5leHBvcnQgaW50ZXJmYWNlIFRocmVhdFRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IDAgfCAxO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgIi8qKlxuICogU2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc2hpZWxkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIE9uZSBTaGllbGRTdGF0ZSB0cmFja3MgdGhlIGxpdmUgcnVudGltZSBzdGF0ZSBmb3Igd2hhdGV2ZXIgc2hpZWxkIGlzXG4gKiBjdXJyZW50bHkgZXF1aXBwZWQuIFRoZSB0aWNrU2hpZWxkKCkgZnVuY3Rpb24gZHJpdmVzIGFsbCBiZWhhdmlvcmFsIG1vZGVzXG4gKiAoY2hhcmdlLCBwdWxzZSwgY29udGFjdCwgYXVyYSkgYW5kIHJldHVybnMgYSByZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKlxuICogRGVzaWduIHJ1bGU6IHRoaXMgbW9kdWxlIGRvZXMgbm90IG1vZGlmeSBlbmVteSBhcnJheXMgZGlyZWN0bHkuIEl0IHJldHVybnNcbiAqIGEgU2hpZWxkVGlja1Jlc3VsdCB0aGF0IG1haW4udHMgYXBwbGllcy4gVGhpcyBrZWVwcyB0aGUgc2hpZWxkIHN5c3RlbVxuICogdGVzdGFibGUgYW5kIGNvbXBvc2FibGUgd2l0aCBvdGhlciBuZWFyLXBsYXllciBlZmZlY3RzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgU2hpZWxkSWQsIFNoaWVsZE1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBwdWxzZSBlZmZlY3QgKHZpc3VhbClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVB1bHNlRWZmZWN0IHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBwdWxzZUR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBUaW1lc3RhbXAgd2hlbiB0aGUgcHVsc2Ugd2FzIHRyaWdnZXJlZC4gKi9cbiAgc3RhcnRlZEF0OiBudW1iZXI7XG4gIC8qKiBEdXJhdGlvbiBpbiBtcy4gKi9cbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHRyaWdnZXJlZCkuICovXG4gIHg6IG51bWJlcjtcbiAgLyoqIENlbnRlciB5LiAqL1xuICB5OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhZGl1cyBhdCBwZWFrIGV4cGFuc2lvbi4gKi9cbiAgbWF4UmFkaXVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTaGllbGQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkU3RhdGUge1xuICBzaGllbGRJZDogU2hpZWxkSWQ7XG4gIC8qKiBSZW1haW5pbmcgY2hhcmdlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpLiAqL1xuICBjaGFyZ2VzOiBudW1iZXI7XG4gIC8qKiBTZWNvbmRzIHVudGlsIGNvb2xkb3duIGNvbXBsZXRlcy4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBtcyB0aW1lc3RhbXAgYWZ0ZXIgd2hpY2ggdGhlIGhpdCBmbGFzaCBpcyBkb25lLiAqL1xuICBoaXRGbGFzaFVudGlsOiBudW1iZXI7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMSBvZiBoaXQgZmxhc2ggYW5pbWF0aW9uICgxID0gZG9uZSkuICovXG4gIGhpdEZsYXNoUHJvZ3Jlc3M6IG51bWJlcjtcbiAgLyoqIEFjdGl2ZSBleHBhbmRpbmcgcHVsc2UgcmluZ3MgKFB1bHNlIENvcmUpLiAqL1xuICBwdWxzZUVmZmVjdHM6IEFjdGl2ZVB1bHNlRWZmZWN0W107XG4gIC8qKiBFbmVteSBpZHMgYWxyZWFkeSByZXNvbHZlZCBhZ2FpbnN0IHRoaXMgc2hpZWxkLCBwcmV2ZW50aW5nIHJlcGVhdCBkYW1hZ2UgcGVyIGZyYW1lLiAqL1xuICByZWFkb25seSBpbnRlcmNlcHRlZEVuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3Ioc2hpZWxkSWQ6IFNoaWVsZElkLCBtYXhDaGFyZ2VzOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoaWVsZElkID0gc2hpZWxkSWQ7XG4gICAgdGhpcy5jaGFyZ2VzID0gbWF4Q2hhcmdlcztcbiAgICB0aGlzLmNvb2xkb3duTGVmdCA9IDA7XG4gICAgdGhpcy5oaXRGbGFzaFVudGlsID0gMDtcbiAgICB0aGlzLmhpdEZsYXNoUHJvZ3Jlc3MgPSAxO1xuICAgIHRoaXMucHVsc2VFZmZlY3RzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRDb250YWN0VGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkQ29udGFjdFJlc3VsdCB7XG4gIGNvbnRhY3RlZDogYm9vbGVhbjtcbiAgYWJzb3JiZWQ6IGJvb2xlYW47XG4gIGRhbWFnZUFic29yYmVkOiBudW1iZXI7XG4gIGVuZW15RGVzdHJveWVkOiBib29sZWFuO1xufVxuXG4vKiogUmVzb2x2ZSBvbmUgZ2VvbWV0cmljIGVuZW15L3NoaWVsZCBjb250YWN0IGV4YWN0bHkgb25jZSBmb3IgdGhhdCBlbmVteS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlU2hpZWxkQ29udGFjdChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGFyZ2V0OiBTaGllbGRDb250YWN0VGFyZ2V0LFxuICBzaGllbGRYOiBudW1iZXIsXG4gIHNoaWVsZFk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHNjYWxlID0gMSxcbik6IFNoaWVsZENvbnRhY3RSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZENvbnRhY3RSZXN1bHQgPSB7XG4gICAgY29udGFjdGVkOiBmYWxzZSxcbiAgICBhYnNvcmJlZDogZmFsc2UsXG4gICAgZGFtYWdlQWJzb3JiZWQ6IDAsXG4gICAgZW5lbXlEZXN0cm95ZWQ6IGZhbHNlLFxuICB9O1xuICBpZiAodGFyZ2V0LmR5aW5nIHx8IHN0YXRlLmludGVyY2VwdGVkRW5lbXlJZHMuaGFzKHRhcmdldC5pZCkpIHJldHVybiByZXN1bHQ7XG4gIGNvbnN0IHJhZGl1cyA9IHNoaWVsZC5yYWRpdXMgKiBzY2FsZSArIHRhcmdldC5yYWRpdXM7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBzaGllbGRYO1xuICBjb25zdCBkeSA9IHRhcmdldC55IC0gc2hpZWxkWTtcbiAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gcmFkaXVzICogcmFkaXVzKSByZXR1cm4gcmVzdWx0O1xuXG4gIHJlc3VsdC5jb250YWN0ZWQgPSB0cnVlO1xuICBzdGF0ZS5pbnRlcmNlcHRlZEVuZW15SWRzLmFkZCh0YXJnZXQuaWQpO1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIGNvbnN0IGFic29yYmVkID0gTWF0aC5taW4oc3RhdGUuY2hhcmdlcywgdGFyZ2V0LmhlYWx0aCk7XG4gIHN0YXRlLmNoYXJnZXMgLT0gYWJzb3JiZWQ7XG4gIHRhcmdldC5oZWFsdGggLT0gYWJzb3JiZWQ7XG4gIHN0YXRlLmhpdEZsYXNoVW50aWwgPSBub3cgKyAyODA7XG4gIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSAwO1xuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICByZXN1bHQuYWJzb3JiZWQgPSB0cnVlO1xuICByZXN1bHQuZGFtYWdlQWJzb3JiZWQgPSBhYnNvcmJlZDtcbiAgcmVzdWx0LmVuZW15RGVzdHJveWVkID0gdGFyZ2V0LmhlYWx0aCA8PSAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgcmVzdWx0IFx1MjAxNCB3aGF0IG1haW4udHMgc2hvdWxkIGFwcGx5IHRoaXMgZnJhbWVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZFRpY2tSZXN1bHQge1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIHJlY2VpdmUgY29udGFjdERhbWFnZSB0aGlzIGZyYW1lIChjb250YWN0IHNoaWVsZHMpLiAqL1xuICBjb250YWN0RGFtYWdlRW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogQW1vdW50IG9mIGNvbnRhY3QgZGFtYWdlIHBlciBlbmVteS4gKi9cbiAgY29udGFjdERhbWFnZUFtb3VudDogbnVtYmVyO1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIGhhdmUgdGhlaXIgc3BlZWQgbXVsdGlwbGllZCBieSBzbG93TXVsdGlwbGllciAoYXVyYSkuICovXG4gIHNsb3dFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBFZmZlY3RpdmUgc2xvdyBtdWx0aXBsaWVyIHRvIGFwcGx5LiAqL1xuICBzbG93TXVsdGlwbGllcjogbnVtYmVyO1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHNoaWVsZCBhYnNvcmJlZCBhIGhpdCB0aGlzIGZyYW1lIChjaGFyZ2UgY29uc3VtZWQpLlxuICAgKiBtYWluLnRzIHNob3VsZCBOT1Qga2lsbC9kYW1hZ2UgdGhlIHBsYXllciBmb3IgdGhhdCBjb2xsaXNpb24uXG4gICAqL1xuICBhYnNvcmJlZEhpdDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuZW15IElEcyB0byBwdXNoIGF3YXkgZnJvbSB0aGUgcGxheWVyIGNlbnRlciAocHVsc2Ugc2hpZWxkKS5cbiAgICogbWFpbi50cyBzaG91bGQgYWRkIHB1c2hEaXN0YW5jZSB0byB0aGUgZW5lbXkncyBvdXR3YXJkIHZlbG9jaXR5IG9yIHBvc2l0aW9uLlxuICAgKi9cbiAgcHVzaEVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIFB1c2ggZGlzdGFuY2UgaW4gcHguICovXG4gIHB1c2hEaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBQVUxTRV9EVVJBVElPTl9NUyA9IDYwMDtcblxuLyoqXG4gKiBEcml2ZXMgdGhlIHNoaWVsZCBmb3Igb25lIGdhbWUgZnJhbWUuXG4gKlxuICogQHBhcmFtIHN0YXRlICAgICAgIE11dGFibGUgc2hpZWxkIHN0YXRlIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSBzaGllbGQgICAgICBJbW11dGFibGUgc2hpZWxkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgICAgTmVhcmJ5IHRocmVhdHMgZnJvbSBxdWVyeU5lYXJieVRocmVhdHMoKSAocmFuZ2UgPSBzaGllbGQucmFkaXVzKS5cbiAqIEBwYXJhbSBwbGF5ZXJYICAgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeCAoZm9yIHB1bHNlIG9yaWdpbikuXG4gKiBAcGFyYW0gcGxheWVyWSAgICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHkuXG4gKiBAcGFyYW0gbm93ICAgICAgICAgQ3VycmVudCB0aW1lc3RhbXAgaW4gbXMuXG4gKiBAcGFyYW0gZGVsdGEgICAgICAgRnJhbWUgZGVsdGEgaW4gc2Vjb25kcy5cbiAqIEByZXR1cm5zICAgICAgICAgICBBY3Rpb25zIGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGlja1NoaWVsZChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbik6IFNoaWVsZFRpY2tSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZFRpY2tSZXN1bHQgPSB7XG4gICAgY29udGFjdERhbWFnZUVuZW15SWRzOiBbXSxcbiAgICBjb250YWN0RGFtYWdlQW1vdW50OiAwLFxuICAgIHNsb3dFbmVteUlkczogW10sXG4gICAgc2xvd011bHRpcGxpZXI6IDEuMCxcbiAgICBhYnNvcmJlZEhpdDogZmFsc2UsXG4gICAgcHVzaEVuZW15SWRzOiBbXSxcbiAgICBwdXNoRGlzdGFuY2U6IDAsXG4gIH07XG5cbiAgLy8gQWR2YW5jZSBjb29sZG93blxuICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0ID4gMCkgc3RhdGUuY29vbGRvd25MZWZ0ID0gTWF0aC5tYXgoMCwgc3RhdGUuY29vbGRvd25MZWZ0IC0gZGVsdGEpO1xuXG4gIC8vIFVwZGF0ZSBwdWxzZSBwcm9ncmVzc1xuICBmb3IgKGNvbnN0IHB1bHNlIG9mIHN0YXRlLnB1bHNlRWZmZWN0cykge1xuICAgIHB1bHNlLnByb2dyZXNzID0gKG5vdyAtIHB1bHNlLnN0YXJ0ZWRBdCkgLyBwdWxzZS5kdXJhdGlvbk1zO1xuICB9XG4gIHN0YXRlLnB1bHNlRWZmZWN0cyA9IHN0YXRlLnB1bHNlRWZmZWN0cy5maWx0ZXIocCA9PiBwLnByb2dyZXNzIDwgMSk7XG5cbiAgLy8gQWR2YW5jZSBoaXQgZmxhc2hcbiAgaWYgKHN0YXRlLmhpdEZsYXNoVW50aWwgPiAwKSB7XG4gICAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IE1hdGgubWluKDEsIChub3cgLSAoc3RhdGUuaGl0Rmxhc2hVbnRpbCAtIDI4MCkpIC8gMjgwKTtcbiAgfVxuXG4gIC8vIFJlZmlsbCBjaGFyZ2VzIHdoZW4gY29vbGRvd24gY29tcGxldGVzIChjaGFyZ2UtYmFzZWQgc2hpZWxkcylcbiAgaWYgKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiICYmIHN0YXRlLmNvb2xkb3duTGVmdCA9PT0gMCAmJiBzdGF0ZS5jaGFyZ2VzIDwgc2hpZWxkLm1heENoYXJnZXMpIHtcbiAgICBzdGF0ZS5jaGFyZ2VzID0gc2hpZWxkLm1heENoYXJnZXM7XG4gIH1cblxuICBpZiAodGhyZWF0cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IGNvbnRhY3QgXHUyMDE0IGRlYWwgZGFtYWdlIHRvIGVuZW1pZXMgdG91Y2hpbmcgdGhlIHNoaWVsZCBlZGdlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICByZXN1bHQuY29udGFjdERhbWFnZUFtb3VudCA9IHNoaWVsZC5jb250YWN0RGFtYWdlO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogYXVyYSBcdTIwMTQgc2xvdyBlbmVtaWVzIGluc2lkZSByYWRpdXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIHJlc3VsdC5zbG93TXVsdGlwbGllciA9IHNoaWVsZC5zbG93TXVsdGlwbGllcjtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LnNsb3dFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IHB1bHNlIFx1MjAxNCBlbWl0IHB1c2ggcmluZyB3aGVuIGFueSBlbmVteSBlbnRlcnMgcmFuZ2VcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIC8vIFRyaWdnZXIgcHVsc2VcbiAgICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICAgIGNvbnN0IHB1bHNlOiBBY3RpdmVQdWxzZUVmZmVjdCA9IHtcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc3RhcnRlZEF0OiBub3csXG4gICAgICBkdXJhdGlvbk1zOiBQVUxTRV9EVVJBVElPTl9NUyxcbiAgICAgIHg6IHBsYXllclgsXG4gICAgICB5OiBwbGF5ZXJZLFxuICAgICAgbWF4UmFkaXVzOiBzaGllbGQucmFkaXVzICogMS44LFxuICAgICAgY29sb3I6IFwiXCIsIC8vIGZpbGxlZCBieSBkcmF3IGNvZGUgd2l0aCBuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdXG4gICAgfTtcbiAgICBzdGF0ZS5wdWxzZUVmZmVjdHMucHVzaChwdWxzZSk7XG4gICAgcmVzdWx0LnB1c2hEaXN0YW5jZSA9IHNoaWVsZC5wdXNoRGlzdGFuY2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5wdXNoRW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGl0IGFic29ycHRpb24gXHUyMDE0IGNhbGxlZCBieSBtYWluLnRzIHdoZW4gYW4gZW5lbXkgd291bGQgdG91Y2ggdGhlIHBsYXllclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQXR0ZW1wdCB0byBhYnNvcmIgYSBoaXQgdXNpbmcgc2hpZWxkIGNoYXJnZXMuXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhpdCB3YXMgYWJzb3JiZWQgKGNoYXJnZSBjb25zdW1lZCksIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyeUFic29yYkhpdChzdGF0ZTogU2hpZWxkU3RhdGUsIHNoaWVsZDogU2hpZWxkTWVtYmVyLCBub3c6IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gZmFsc2U7XG4gIHN0YXRlLmNoYXJnZXMgLT0gMTtcbiAgc3RhdGUuaGl0Rmxhc2hVbnRpbCA9IG5vdyArIDI4MDtcbiAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IDA7XG4gIC8vIFJlY2hhcmdlIGJlZ2lucyBhZnRlciB0aGUgbW9zdCByZWNlbnQgYWJzb3JiZWQgaGl0LiBLZWVwaW5nIHRoZSBjb29sZG93blxuICAvLyBhY3RpdmUgcHJldmVudHMgdGlja1NoaWVsZCgpIGZyb20gaW1tZWRpYXRlbHkgcmVzdG9yaW5nIGEgcGFydGlhbGx5XG4gIC8vIGRlcGxldGVkIHNoaWVsZCBvbiB0aGUgbmV4dCBmcmFtZS5cbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgcmV0dXJuIHRydWU7XG59XG4iLCAiLyoqXG4gKiBTd29yZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHN3b3JkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZSB0aWNrIGZ1bmN0aW9uIG9ubHkgdHJpZ2dlcnMgYSBzd2luZ1xuICogd2hlbiBhIHZhbGlkIHRhcmdldCBleGlzdHMgaW4gcmFuZ2UgYW5kIHRoZSBjb29sZG93biBpcyByZWFkeS4gSXQgaWRsZXMgc2lsZW50bHlcbiAqIHdoZW4gbm8gdGFyZ2V0IGlzIHByZXNlbnQuXG4gKlxuICogRGVzaWduIHJ1bGU6IHNhbWUgYXMgc2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBubyBkaXJlY3QgZW5lbXkgbXV0YXRpb24uIFJldHVybnMgYVxuICogU3dvcmRUaWNrUmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5cbmltcG9ydCB0eXBlIHsgU3dvcmRJZCwgU3dvcmRNZW1iZXIsIFN3b3JkVGFyZ2V0aW5nTW9kZSB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgdHlwZSB7IE5lYXJieVRocmVhdCB9IGZyb20gXCIuL25lYXJieVRocmVhdFF1ZXJ5XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWN0aXZlIHNsYXNoIGFuaW1hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlU2xhc2hBbmltYXRpb24ge1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEuIERyaXZlbiBieSAobm93IC0gc3RhcnRlZEF0KSAvIGR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeCAoc25hcHNob3Qgb2YgcGxheWVyIHBvc2l0aW9uIHdoZW4gc3dpbmcgb2NjdXJyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgLyoqIFJlYWNoIG9mIHRoZSBhcmMgaW4gcGl4ZWxzLiAqL1xuICByZWFjaDogbnVtYmVyO1xuICAvKiogQXJjIHdpZHRoIGluIGRlZ3JlZXMuICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIENvbG9yLiAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKiogVGhpY2tuZXNzIG11bHRpcGxpZXIuICovXG4gIHRoaWNrbmVzczogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFN3b3JkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkU3RhdGUge1xuICBzd29yZElkOiBTd29yZElkO1xuICAvKiogU2Vjb25kcyByZW1haW5pbmcgdW50aWwgdGhlIHN3b3JkIGNhbiBzd2luZyBhZ2Fpbi4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgc2xhc2ggYW5pbWF0aW9uLCBpZiBhbnkuICovXG4gIGFjdGl2ZVNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc3dvcmRJZDogU3dvcmRJZCkge1xuICAgIHRoaXMuc3dvcmRJZCA9IHN3b3JkSWQ7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSAwO1xuICAgIHRoaXMuYWN0aXZlU2xhc2ggPSBudWxsO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgaGl0IGJ5IHRoZSBzd2luZyB0aGlzIGZyYW1lLiBFbXB0eSBpZiBubyBzd2luZyBvY2N1cnJlZC4gKi9cbiAgaGl0RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogRGFtYWdlIHRvIGFwcGx5IHRvIGVhY2ggaGl0IGVuZW15LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgYSBuZXcgc2xhc2ggd2FzIHRyaWdnZXJlZCB0aGlzIGZyYW1lIChmb3IgYXVkaW8sIGV0Yy4pLiAqL1xuICBzd2luZ1RyaWdnZXJlZDogYm9vbGVhbjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUYXJnZXRpbmcgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldHMoXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBtb2RlOiBTd29yZFRhcmdldGluZ01vZGUsXG4gIG1heFRhcmdldHM6IG51bWJlcixcbik6IE5lYXJieVRocmVhdFtdIHtcbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCI6XG4gICAgY2FzZSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIjpcbiAgICAgIC8vIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIGFscmVhZHkgcmV0dXJucyBzb3J0ZWQgYnkgZGlzdGFuY2VcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgY2FzZSBcImZyb250TW9zdFRocmVhdFwiOlxuICAgICAgLy8gSGlnaGVzdCB5ID0gbW9zdCBhZHZhbmNlZCB0b3dhcmQgcGxheWVyXG4gICAgICByZXR1cm4gWy4uLnRocmVhdHNdLnNvcnQoKGEsIGIpID0+IGIudGFyZ2V0LnkgLSBhLnRhcmdldC55KS5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJjbHVzdGVyTmVhclBsYXllclwiOlxuICAgICAgLy8gQWxyZWFkeSBzb3J0ZWQgYnkgZGlzdGFuY2UgXHUyMDE0IHRha2UgbmVhcmVzdCBjbHVzdGVyXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIERyaXZlcyB0aGUgc3dvcmQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgTXV0YWJsZSBzd29yZCBzdGF0ZS5cbiAqIEBwYXJhbSBzd29yZCAgICAgSW1tdXRhYmxlIHN3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgIE5lYXJieSB0aHJlYXRzIGluIHJhbmdlIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gKiBAcGFyYW0gcGxheWVyWCAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4LlxuICogQHBhcmFtIHBsYXllclkgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgVGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIGNvbG9yICAgICBSZXNvbHZlZCBoZXggY29sb3IgKGZyb20gbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTd29yZChcbiAgc3RhdGU6IFN3b3JkU3RhdGUsXG4gIHN3b3JkOiBTd29yZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbik6IFN3b3JkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU3dvcmRUaWNrUmVzdWx0ID0ge1xuICAgIGhpdEVuZW15SWRzOiBbXSxcbiAgICBkYW1hZ2U6IDAsXG4gICAgc3dpbmdUcmlnZ2VyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIC8vIEFkdmFuY2UgY29vbGRvd25cbiAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdCA+IDApIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWF4KDAsIHN0YXRlLmNvb2xkb3duTGVmdCAtIGRlbHRhKTtcblxuICAvLyBBZHZhbmNlIGFjdGl2ZSBzbGFzaCBhbmltYXRpb25cbiAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoKSB7XG4gICAgc3RhdGUuYWN0aXZlU2xhc2gucHJvZ3Jlc3MgPSAobm93IC0gc3RhdGUuYWN0aXZlU2xhc2guc3RhcnRlZEF0KSAvIHN0YXRlLmFjdGl2ZVNsYXNoLmR1cmF0aW9uTXM7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoLnByb2dyZXNzID49IDEpIHN0YXRlLmFjdGl2ZVNsYXNoID0gbnVsbDtcbiAgfVxuXG4gIC8vIFN3b3JkcyBvbmx5IHN3aW5nIHdoZW4gYSB0YXJnZXQgZXhpc3RzIGluIHJhbmdlIEFORCBjb29sZG93biBpcyByZWFkeS5cbiAgLy8gVGhpcyBpcyB0aGUga2V5IGRpZmZlcmVuY2UgZnJvbSBndW5zLCB3aGljaCBmaXJlIG9uIGEgcGVyaW9kIHJlZ2FyZGxlc3MuXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwIHx8IHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIFNlbGVjdCB0YXJnZXRzXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0VGFyZ2V0cyh0aHJlYXRzLCBzd29yZC50YXJnZXRpbmdNb2RlLCBzd29yZC5tYXhUYXJnZXRzKTtcbiAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBUcmlnZ2VyIHN3aW5nXG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHN3b3JkLmNvb2xkb3duU2Vjb25kcztcbiAgcmVzdWx0LnN3aW5nVHJpZ2dlcmVkID0gdHJ1ZTtcbiAgcmVzdWx0LmRhbWFnZSA9IHN3b3JkLmRhbWFnZTtcbiAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHNlbGVjdGVkKSByZXN1bHQuaGl0RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuXG4gIC8vIFN0YXJ0IHNsYXNoIGFuaW1hdGlvblxuICBzdGF0ZS5hY3RpdmVTbGFzaCA9IHtcbiAgICBwcm9ncmVzczogMCxcbiAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICBkdXJhdGlvbk1zOiBzd29yZC5zbGFzaER1cmF0aW9uTXMsXG4gICAgeDogcGxheWVyWCxcbiAgICB5OiBwbGF5ZXJZLFxuICAgIHJlYWNoOiBzd29yZC5yYW5nZSAqIDAuNzUsIC8vIEFyYyByZWFjaCBpcyBhIGZyYWN0aW9uIG9mIGRldGVjdGlvbiByYW5nZVxuICAgIGFyY0RlZ3JlZXM6IHN3b3JkLmFyY0RlZ3JlZXMsXG4gICAgY29sb3IsXG4gICAgdGhpY2tuZXNzOiBzd29yZC5zbGFzaFRoaWNrbmVzcyxcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwgImltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RW50cmFuY2VQcm9maWxlIHtcbiAgZHVyYXRpb25TZWNvbmRzOiBudW1iZXI7XG4gIHNjYXR0ZXJNYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGVuZW15RW50cmFuY2VQcm9maWxlczogUmVjb3JkPE9yYklkLCBFbmVteUVudHJhbmNlUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuNDgsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogLjU4LFxuICB9LFxuICBnbGFzc1NoaWVsZDoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjM0LFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IDAsXG4gIH0sXG4gIHdpbmdlcjoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjQyLFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC41LFxuICB9LFxuICB0YW5rOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuNzIsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogLjM0LFxuICB9LFxufTtcbiIsICJpbXBvcnQge1xuICBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IsXG4gIHR5cGUgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyxcbiAgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBPcmJJZCB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VmlzdWFsVHlwZSA9IE9yYklkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdEVudmVsb3BlIHtcbiAgZW50cnlTZWNvbmRzOiBudW1iZXI7XG4gIGVudHJ5UHVuY2g6IG51bWJlcjtcbiAgc3VzdGFpblNlY29uZHM6IG51bWJlcjtcbiAgc3VzdGFpbkxldmVsOiBudW1iZXI7XG4gIGZhZGVTZWNvbmRzOiBudW1iZXI7XG4gIHNwYXJrSW50ZW5zaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5lbXlFeGl0Q2xvdWRQcm9maWxlIGV4dGVuZHMgT21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcImFnZVwiIHwgXCJjb2xvclwiIHwgXCJjb3JlQ29sb3JcIiB8IFwieFwiIHwgXCJ5XCIgfCBcInNlZWRcIj4ge1xuICBzaXplOiBudW1iZXI7XG4gIGVudmVsb3BlOiBFbmVteUV4aXRFbnZlbG9wZTtcbiAgY2xvdWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgZW5lbXlUeXBlOiBFbmVteVZpc3VhbFR5cGU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWVkOiBudW1iZXI7XG4gIGFnZTogbnVtYmVyO1xufVxuXG5jb25zdCBiYXNpY09yYkV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIGNsb3VkOiB0cnVlLFxuICBzaXplOiAxMSxcbiAgZGV0YWlsOiA2LFxuICB0dXJidWxlbmNlOiAyLjcyLFxuICBnbG93OiAxMSxcbiAgY29yZUludGVuc2l0eTogMS4yNSxcbiAgcmltSW50ZW5zaXR5OiAuOCxcbiAgb3BhY2l0eTogLjgyLFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJzcGFya0ZhZGVcIixcbiAgZHJpZnRYOiAwLFxuICBkcmlmdFk6IDAsXG4gIGVudmVsb3BlOiB7XG4gICAgZW50cnlTZWNvbmRzOiAuMTYsXG4gICAgZW50cnlQdW5jaDogMi4zMyxcbiAgICBzdXN0YWluU2Vjb25kczogLjIxLFxuICAgIHN1c3RhaW5MZXZlbDogMS4yLFxuICAgIGZhZGVTZWNvbmRzOiAuMjksXG4gICAgc3BhcmtJbnRlbnNpdHk6IDEuMjEsXG4gIH0sXG59O1xuXG5jb25zdCBub0Nsb3VkRXhpdFByb2ZpbGU6IEVuZW15RXhpdENsb3VkUHJvZmlsZSA9IHtcbiAgLi4uYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgY2xvdWQ6IGZhbHNlLFxuICBzaXplOiAwLFxufTtcblxuY29uc3QgdGFua0V4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHNpemU6IDE1LFxuICBnbG93OiAxMyxcbn07XG5cbmV4cG9ydCBjb25zdCBlbmVteUV4aXRQcm9maWxlczogUmVjb3JkPEVuZW15VmlzdWFsVHlwZSwgRW5lbXlFeGl0Q2xvdWRQcm9maWxlPiA9IHtcbiAgYmFzaWNPcmI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGdsYXNzU2hpZWxkOiBub0Nsb3VkRXhpdFByb2ZpbGUsXG4gIHdpbmdlcjogYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgdGFuazogdGFua0V4aXRQcm9maWxlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15RXhpdER1cmF0aW9uKGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlKTogbnVtYmVyIHtcbiAgY29uc3QgZW52ZWxvcGUgPSBlbmVteUV4aXRQcm9maWxlc1tlbmVteVR5cGVdLmVudmVsb3BlO1xuICByZXR1cm4gZW52ZWxvcGUuZW50cnlTZWNvbmRzICsgZW52ZWxvcGUuc3VzdGFpblNlY29uZHMgKyBlbnZlbG9wZS5mYWRlU2Vjb25kcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RXhpdEVmZmVjdChvcHRpb25zOiB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZD86IG51bWJlcjtcbn0pOiBBY3RpdmVFbmVteUV4aXRFZmZlY3Qge1xuICByZXR1cm4ge1xuICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteVR5cGUsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQgPz8gTWF0aC5yYW5kb20oKSAqIDEwMDAsXG4gICAgYWdlOiAwLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRW5lbXlFeGl0RWZmZWN0cyhlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSwgZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgaW5kZXggPSBlZmZlY3RzLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlZmZlY3QgPSBlZmZlY3RzW2luZGV4XTtcbiAgICBlZmZlY3QuYWdlICs9IGRlbHRhU2Vjb25kcztcbiAgICBpZiAoZWZmZWN0LmFnZSA+PSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKSkgZWZmZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXRDbG91ZChlZmZlY3Q6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdCk6IE5lb25Ub3BEb3duQ2xvdWRCdXJzdCB7XG4gIGNvbnN0IHByb2ZpbGUgPSBlbmVteUV4aXRQcm9maWxlc1tlZmZlY3QuZW5lbXlUeXBlXTtcbiAgaWYgKCFwcm9maWxlLmNsb3VkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICBjb3JlQ29sb3I6IGVmZmVjdC5jb2xvcixcbiAgICAgIHg6IGVmZmVjdC54LFxuICAgICAgeTogZWZmZWN0LnksXG4gICAgICBzaXplOiAwLFxuICAgICAgZGV0YWlsOiAzLFxuICAgICAgdHVyYnVsZW5jZTogMCxcbiAgICAgIGdsb3c6IDAsXG4gICAgICBjb3JlSW50ZW5zaXR5OiAwLFxuICAgICAgcmltSW50ZW5zaXR5OiAwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGRpc3NpcGF0aW9uVGltZTogZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSksXG4gICAgICBkaXNzaXBhdGlvbkFjdGlvbjogXCJzcGFya0ZhZGVcIixcbiAgICAgIHNlZWQ6IGVmZmVjdC5zZWVkLFxuICAgICAgYWdlOiBlZmZlY3QuYWdlLFxuICAgIH07XG4gIH1cbiAgY29uc3QgZW52ZWxvcGUgPSBwcm9maWxlLmVudmVsb3BlO1xuICBjb25zdCBkdXJhdGlvbiA9IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpO1xuICBjb25zdCBlbnRyeVQgPSBNYXRoLm1pbigxLCBlZmZlY3QuYWdlIC8gTWF0aC5tYXgoLjAwMSwgZW52ZWxvcGUuZW50cnlTZWNvbmRzKSk7XG4gIGNvbnN0IGZhZGVTdGFydCA9IGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzO1xuICBjb25zdCBmYWRlVCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChlZmZlY3QuYWdlIC0gZmFkZVN0YXJ0KSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmZhZGVTZWNvbmRzKSkpO1xuICBjb25zdCBzdXN0YWluID0gZWZmZWN0LmFnZSA+PSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgJiYgZWZmZWN0LmFnZSA8IGZhZGVTdGFydCA/IGVudmVsb3BlLnN1c3RhaW5MZXZlbCA6IDE7XG4gIGNvbnN0IGVudHJ5Rmxhc2ggPSAxICsgTWF0aC5zaW4oZW50cnlUICogTWF0aC5QSSkgKiBlbnZlbG9wZS5lbnRyeVB1bmNoO1xuICBjb25zdCBmYWRlRW5lcmd5ID0gMSAtIGZhZGVUICogLjYyO1xuICBjb25zdCBzcGFya0FjY2VudCA9IDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjIyO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgY29yZUNvbG9yOiBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IoZWZmZWN0LmNvbG9yKSxcbiAgICB4OiBlZmZlY3QueCxcbiAgICB5OiBlZmZlY3QueSxcbiAgICBzaXplOiBwcm9maWxlLnNpemUgKiAoLjQ4ICsgZW50cnlUICogLjUyKSxcbiAgICBkZXRhaWw6IHByb2ZpbGUuZGV0YWlsLFxuICAgIHR1cmJ1bGVuY2U6IHByb2ZpbGUudHVyYnVsZW5jZSxcbiAgICBnbG93OiAocHJvZmlsZS5nbG93ID8/IDEpICogZW50cnlGbGFzaCAqIHN1c3RhaW4gKiBmYWRlRW5lcmd5ICogc3BhcmtBY2NlbnQsXG4gICAgY29yZUludGVuc2l0eTogKHByb2ZpbGUuY29yZUludGVuc2l0eSA/PyAxKSAqICgxICsgZW52ZWxvcGUuZW50cnlQdW5jaCAqICgxIC0gZW50cnlUKSAqIC41NSksXG4gICAgcmltSW50ZW5zaXR5OiAocHJvZmlsZS5yaW1JbnRlbnNpdHkgPz8gMSkgKiAoMSArIGZhZGVUICogZW52ZWxvcGUuc3BhcmtJbnRlbnNpdHkgKiAuMzUpLFxuICAgIG9wYWNpdHk6IChwcm9maWxlLm9wYWNpdHkgPz8gMSkgKiAoZWZmZWN0LmFnZSA8IGZhZGVTdGFydCA/IDEgOiAxIC0gZmFkZVQgKiAuODgpLFxuICAgIGRpc3NpcGF0aW9uVGltZTogZHVyYXRpb24sXG4gICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgZHJpZnRYOiBwcm9maWxlLmRyaWZ0WCA/PyAwLFxuICAgIGRyaWZ0WTogcHJvZmlsZS5kcmlmdFkgPz8gMCxcbiAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICBhZ2U6IE1hdGgubWluKGVmZmVjdC5hZ2UsIGR1cmF0aW9uKSxcbiAgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUsIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCwgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kge1xuICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICBhc3BlY3RIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyVmlld3BvcnRQb2xpY3kgZXh0ZW5kcyBQb3J0cmFpdFZpZXdwb3J0UG9saWN5IHtcbiAgcmVhZG9ubHkgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIjtcbiAgcmVhZG9ubHkgbG9naWNhbFdpZHRoOiBudW1iZXI7XG4gIHJlYWRvbmx5IGxvZ2ljYWxIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJWaWV3cG9ydDogTGFuZVJ1bm5lclZpZXdwb3J0UG9saWN5ID0ge1xuICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxuICBhc3BlY3RXaWR0aDogOSxcbiAgYXNwZWN0SGVpZ2h0OiAxNixcbiAgbG9naWNhbFdpZHRoOiA0NTAsXG4gIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzIHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxvb2tBbmdsZURlZ3JlZXM6IG51bWJlcjtcbiAgZm9sbG93RGlzdGFuY2U6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBob3Jpem9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdGVkU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyVmlld3BvcnQge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcGxheWVyWTogbnVtYmVyO1xuICBmb2N1c1g/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYKHdpZHRoOiBudW1iZXIsIHRhcmdldFg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gIHJldHVybiBjZW50ZXJYICsgKHRhcmdldFggLSBjZW50ZXJYKSAqIC41NTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDY1LFxuICBsb29rQW5nbGVEZWdyZWVzOiAyNyxcbiAgZm9sbG93RGlzdGFuY2U6IDIwLFxuICB6b29tOiAuMixcbiAgaG9yaXpvbjogLjUxLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIGNsb3VkczogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBQcm9qZWN0ZWRTY2VuZSB7XG4gIGNvbnN0IHByb2plY3RQb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCk7XG5cbiAgY29uc3QgcHJvamVjdGVkUHJpbWl0aXZlcyA9IHByaW1pdGl2ZXMubWFwKHByaW1pdGl2ZSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZS5zaGFwZSA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uID8/IDA7XG4gICAgICBjb25zdCBoYWxmTGVuZ3RoID0gcHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGg7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBzdGFydCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCAtIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSAtIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgY29uc3QgZHkgPSBlbmQueSAtIHN0YXJ0Lnk7XG4gICAgICBjb25zdCBzY2FsZSA9IChzdGFydC5zY2FsZSArIGVuZC5zY2FsZSkgKiAuNTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgICAgeDogKHN0YXJ0LnggKyBlbmQueCkgLyAyLFxuICAgICAgICB5OiAoc3RhcnQueSArIGVuZC55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBwcmltaXRpdmUud2lkdGggKiBzY2FsZSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLngsIHByaW1pdGl2ZS55KTtcbiAgICBjb25zdCB3aWR0aCA9IHByaW1pdGl2ZS53aWR0aCAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IGhlaWdodCA9IChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCkgKiBwb2ludC5zY2FsZTtcbiAgICBsZXQgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb247XG4gICAgaWYgKHJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGF4aXNMZW5ndGggPSBNYXRoLm1heChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCwgcHJpbWl0aXZlLndpZHRoLCAxKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBheGlzTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBheGlzTGVuZ3RoKTtcbiAgICAgIHJvdGF0aW9uID0gTWF0aC5hdGFuMihwb2ludC54IC0gZW5kLngsIGVuZC55IC0gcG9pbnQueSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcm90YXRpb24sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdGVkU2hhcGVzID0gc2hhcGVzXG4gICAgLm1hcChzaGFwZSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNoYXBlLFxuICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICBzaXplOiBzaGFwZS5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgICAgIHo6IChzaGFwZS56ID8/IDApIC0gcG9pbnQuZGVwdGggKiAuMDAwOCxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gKChiLnogPz8gMCkgLSAoYS56ID8/IDApKSk7XG5cbiAgY29uc3QgcHJvamVjdGVkQ2xvdWRzID0gY2xvdWRzLm1hcChjbG91ZCA9PiB7XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoY2xvdWQueCwgY2xvdWQueSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICBzaXplOiBjbG91ZC5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlczogcHJvamVjdGVkUHJpbWl0aXZlcywgY2xvdWRzOiBwcm9qZWN0ZWRDbG91ZHMsIHNoYXBlczogcHJvamVjdGVkU2hhcGVzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50KFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSB7XG4gIHJldHVybiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0KSB7XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IGZvY3VzWCA9IHZpZXdwb3J0LmZvY3VzWCA/PyBjZW50ZXJYO1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IG1pbkRlcHRoID0gMjA7XG5cbiAgcmV0dXJuICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3Qgd29ybGRYID0geCAtIGZvY3VzWDtcbiAgICBjb25zdCB3b3JsZFogPSB2aWV3cG9ydC5wbGF5ZXJZIC0geSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlO1xuICAgIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gICAgY29uc3QgY2FtZXJhWSA9IHJlbGF0aXZlWSAqIGNvcyArIHdvcmxkWiAqIHNpbjtcbiAgICBjb25zdCBjYW1lcmFaID0gTWF0aC5tYXgobWluRGVwdGgsIHdvcmxkWiAqIGNvcyAtIHJlbGF0aXZlWSAqIHNpbik7XG4gICAgY29uc3Qgc2NhbGUgPSBmb2NhbExlbmd0aCAvIGNhbWVyYVo7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyB3b3JsZFggKiBzY2FsZSxcbiAgICAgIHk6IGhvcml6b25ZIC0gY2FtZXJhWSAqIHNjYWxlLFxuICAgICAgc2NhbGUsXG4gICAgICBkZXB0aDogY2FtZXJhWixcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29ybGRZRm9yUHJvamVjdGVkWShcbiAgc2NyZWVuWTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogeyBoZWlnaHQ6IG51bWJlcjsgcGxheWVyWTogbnVtYmVyIH0sXG4pOiBudW1iZXIge1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gIGNvbnN0IHNjcmVlblJhdGlvID0gKGhvcml6b25ZIC0gc2NyZWVuWSkgLyBmb2NhbExlbmd0aDtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBzaW4gLSBzY3JlZW5SYXRpbyAqIGNvcztcbiAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IC4wMDAxKSByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIGNvbnN0IHdvcmxkWiA9IC1yZWxhdGl2ZVkgKiAoY29zICsgc2NyZWVuUmF0aW8gKiBzaW4pIC8gZGVub21pbmF0b3I7XG4gIHJldHVybiB2aWV3cG9ydC5wbGF5ZXJZICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2UgLSB3b3JsZFo7XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5LCB0eXBlIE9yYklkLCB0eXBlIE9yYk1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBlbmVteUVudHJhbmNlUHJvZmlsZXMgfSBmcm9tIFwiLi9lbmVteUVudHJhbmNlVmlzdWFsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlFeGl0RWZmZWN0LCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB9IGZyb20gXCIuL2VuZW15RXhpdFZpc3VhbHNcIjtcbmltcG9ydCB7IHByb2plY3RIZWxpY29wdGVyUG9pbnQsIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB0eXBlIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VHJhY2tJZCA9IGBlbmVteS4ke3N0cmluZ31gO1xuXG5leHBvcnQgY29uc3QgZW5lbXlUcmFja0lkID0gKGVuZW15SWQ6IE9yYklkKTogRW5lbXlUcmFja0lkID0+XG4gIGVuZW15SWQgPT09IFwiYmFzaWNPcmJcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2VuZW15SWR9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoaWQ6IHN0cmluZyk6IHsgZW5lbXlJZDogT3JiSWQ7IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHwgbnVsbCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCA/IHsgZW5lbXlJZCwgZGVmaW5pdGlvbjogb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0gfSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQ6IE9yYklkKTogTmVvblNoYXBlQWN0b3Ige1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF07XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGRlZmluaXRpb24uc2hhcGVJZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgRW5lbXkgXCIke2VuZW15SWR9XCIgdXNlcyBtaXNzaW5nIE5lb25GYWN0b3J5IHNoYXBlIFwiJHtkZWZpbml0aW9uLnNoYXBlSWR9XCIuYCk7XG4gIGNvbnN0IGVudHJhbmNlID0gZW5lbXlFbnRyYW5jZVByb2ZpbGVzW2VuZW15SWRdO1xuICBjb25zdCBhY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7XG4gICAgc2hhcGUsXG4gICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcbiAgICBlbnRyYW5jZUR1cmF0aW9uOiBlbnRyYW5jZS5kdXJhdGlvblNlY29uZHMsXG4gICAgZW50cmFuY2VNYWduaXR1ZGU6IGVudHJhbmNlLnNjYXR0ZXJNYWduaXR1ZGUsXG4gIH0pO1xuICByZXR1cm4gYWN0b3IuZW50ZXIoZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLCBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RGVhdGhFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHwgbnVsbCB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15SWRdO1xuICBpZiAoZGVmaW5pdGlvbi5kZWF0aFZpc3VhbCAhPT0gXCJjbG91ZFwiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNyZWF0ZUVuZW15RXhpdEVmZmVjdCh7XG4gICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15SWQsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZUVuZW15QWN0b3IoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBkZWZpbml0aW9uOiBPcmJNZW1iZXIpOiB2b2lkIHtcbiAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IGRlZmluaXRpb24uZXhwbG9zaW9uTWFnbml0dWRlO1xuICBhY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhbWFnZWFibGVFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVhdEVuZW15KFxuICBlbmVteTogRGFtYWdlYWJsZUVuZW15LFxuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSxcbiAgY29sb3I6IHN0cmluZyA9IG5lb25QYWxldHRlW29yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdLmJhc2VDb2xvcl0sXG4pOiBPcmJNZW1iZXIge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gIGVuZW15LmR5aW5nID0gdHJ1ZTtcbiAgaWYgKCFlbmVteS5leGl0RWZmZWN0U3Bhd25lZCkge1xuICAgIGVuZW15LmV4aXRFZmZlY3RTcGF3bmVkID0gdHJ1ZTtcbiAgICBjb25zdCBlZmZlY3QgPSBjcmVhdGVFbmVteURlYXRoRWZmZWN0KHtcbiAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICB4OiBlbmVteS54LFxuICAgICAgeTogZW5lbXkueSxcbiAgICAgIGNvbG9yLFxuICAgICAgc2VlZDogZW5lbXkuaWQsXG4gICAgfSk7XG4gICAgaWYgKGVmZmVjdCkgZWZmZWN0cy5wdXNoKGVmZmVjdCk7XG4gIH1cbiAgZGlzcG9zZUVuZW15QWN0b3IoZW5lbXkuYWN0b3IsIGRlZmluaXRpb24pO1xuICByZXR1cm4gZGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFbmVteURhbWFnZShvcHRpb25zOiB7XG4gIGVuZW15OiBEYW1hZ2VhYmxlRW5lbXk7XG4gIGVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdO1xuICBkYW1hZ2U/OiBudW1iZXI7XG4gIGltcGFjdE1hZ25pdHVkZT86IG51bWJlcjtcbiAgaGl0Rmxhc2hVbnRpbD86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG59KTogeyBraWxsZWQ6IGJvb2xlYW47IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW29wdGlvbnMuZW5lbXkuZW5lbXlJZF07XG4gIGlmIChvcHRpb25zLmRhbWFnZSkgb3B0aW9ucy5lbmVteS5oZWFsdGggLT0gb3B0aW9ucy5kYW1hZ2U7XG4gIGlmIChvcHRpb25zLmltcGFjdE1hZ25pdHVkZSkge1xuICAgIG9wdGlvbnMuZW5lbXkuYWN0b3IuaW1wYWN0KHtcbiAgICAgIGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sXG4gICAgICBtYWduaXR1ZGU6IG9wdGlvbnMuaW1wYWN0TWFnbml0dWRlIC8gZGVmaW5pdGlvbi5pbXBhY3RSZXNpc3RhbmNlLFxuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLmhpdEZsYXNoVW50aWwgIT09IHVuZGVmaW5lZCkgb3B0aW9ucy5lbmVteS5oaXRGbGFzaFVudGlsID0gb3B0aW9ucy5oaXRGbGFzaFVudGlsO1xuICBpZiAob3B0aW9ucy5lbmVteS5oZWFsdGggPD0gMCkge1xuICAgIHJldHVybiB7IGtpbGxlZDogdHJ1ZSwgZGVmaW5pdGlvbjogZGVmZWF0RW5lbXkob3B0aW9ucy5lbmVteSwgb3B0aW9ucy5lZmZlY3RzLCBvcHRpb25zLmNvbG9yKSB9O1xuICB9XG4gIHJldHVybiB7IGtpbGxlZDogZmFsc2UsIGRlZmluaXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhvcHRpb25zOiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHZpc2libGVUaHJlc2hvbGQ/OiBudW1iZXI7XG59KTogTmVvblByaW1pdGl2ZVtdIHtcbiAgY29uc3QgdGhyZXNob2xkID0gb3B0aW9ucy52aXNpYmxlVGhyZXNob2xkID8/IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmhlYWx0aDtcbiAgaWYgKG9wdGlvbnMubWF4SGVhbHRoIDw9IHRocmVzaG9sZCkgcmV0dXJuIFtdO1xuICBjb25zdCByYXRpbyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wdGlvbnMuaGVhbHRoIC8gb3B0aW9ucy5tYXhIZWFsdGgpKTtcbiAgY29uc3QgeSA9IG9wdGlvbnMueTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgzNiwgb3B0aW9ucy53aWR0aCk7XG4gIGNvbnN0IGxlZnQgPSBvcHRpb25zLnggLSB3aWR0aCAvIDI7XG4gIGNvbnN0IGZpbGxlZCA9IE1hdGgubWF4KDAsIHdpZHRoICogcmF0aW8pO1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHg6IG9wdGlvbnMueCxcbiAgICAgIHksXG4gICAgICB3aWR0aDogOC44LFxuICAgICAgaGVpZ2h0OiB3aWR0aCAvIDIsXG4gICAgICBjb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBnbG93OiAuMDgsXG4gICAgICBpbnRlbnNpdHk6IC40MixcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IGxlZnQgKyBmaWxsZWQgLyAyLFxuICAgICAgeSxcbiAgICAgIHdpZHRoOiA3LjIsXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KDEsIGZpbGxlZCkgLyAyLFxuICAgICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6IC43OCxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15SGVhbHRoQmFyVGFyZ2V0IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoXG4gIHRhcmdldHM6IHJlYWRvbmx5IEVuZW15SGVhbHRoQmFyVGFyZ2V0W10sXG4gIGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gdGFyZ2V0cy5mbGF0TWFwKHRhcmdldCA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW3RhcmdldC5lbmVteUlkXTtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnQodGFyZ2V0LngsIHRhcmdldC55LCBjYW1lcmFTZXR0aW5ncywgdmlld3BvcnQpO1xuICAgIGNvbnN0IHByb2plY3RlZFNpemUgPSB0YXJnZXQuc2l6ZSAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IHNjYWxlID0gdGFyZ2V0LnNjYWxlID8/IDE7XG4gICAgcmV0dXJuIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSAtIHByb2plY3RlZFNpemUgKiAuNzIgLSAxMixcbiAgICAgIHdpZHRoOiBNYXRoLm1heChwcm9qZWN0ZWRTaXplICogMS4zNSwgZGVmaW5pdGlvbi5yYWRpdXMgKiA1LjIgKiBzY2FsZSAqIHBvaW50LnNjYWxlKSxcbiAgICAgIGhlYWx0aDogdGFyZ2V0LmhlYWx0aCxcbiAgICAgIG1heEhlYWx0aDogdGFyZ2V0Lm1heEhlYWx0aCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgU2hpZWxkTWVtYmVyLCBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5VmlzdWFsU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5jb25zdCBlbXB0eVNjZW5lID0gKCk6IEZhbWlseVZpc3VhbFNjZW5lID0+ICh7IHByaW1pdGl2ZXM6IFtdLCBzaGFwZXM6IFtdIH0pO1xuY29uc3QgcmVxdWlyZWRTaGFwZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7aWR9XCIgaXMgcmVxdWlyZWQgYnkgZmFtaWx5IHZpc3VhbHMuYCk7XG4gIHJldHVybiBzaGFwZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFNoaWVsZE1lbWJlcjtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgaW5pdGlhbFN0cmVuZ3RoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGhpdFByb2dyZXNzPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWVsZFZpc3VhbHMob3B0aW9uczogU2hpZWxkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGNvbnN0IHtcbiAgICBkZWZpbml0aW9uLCB4LCB5LCBub3csXG4gICAgc2NhbGUgPSAxLFxuICAgIGhpdFByb2dyZXNzID0gMSxcbiAgICB2aXNpYmxlID0gdHJ1ZSxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0cmVuZ3RoID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5zdHJlbmd0aCk7XG4gIGNvbnN0IGluaXRpYWxTdHJlbmd0aCA9IE1hdGgubWF4KDEsIG9wdGlvbnMuaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgaW1wYWN0ID0gTWF0aC5tYXgoMCwgMSAtIGhpdFByb2dyZXNzKTtcbiAgY29uc3QgZXhwbG9kaW5nID0gc3RyZW5ndGggPD0gMCAmJiBoaXRQcm9ncmVzcyA8IDE7XG4gIGNvbnN0IGNvbG9yID0gbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl07XG4gIGNvbnN0IHJhZGl1cyA9IGRlZmluaXRpb24ucmFkaXVzICogc2NhbGU7XG5cbiAgaWYgKHZpc2libGUgfHwgZXhwbG9kaW5nKSB7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzaGllbGQtcmluZ1wiKSxcbiAgICAgIHgsIHksXG4gICAgICBzaXplOiByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEgKyBpbXBhY3QgKiAuOCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMTUgKyBpbXBhY3QgKiAxLjUsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQyICsgaW1wYWN0ICogLjMsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4xNSArIGltcGFjdCAqIDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiAuNSArIGltcGFjdCAqIC4zNSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogZXhwbG9kaW5nID8gTWF0aC5taW4oMSwgaGl0UHJvZ3Jlc3MpIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IC45LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IG9yYml0ZXJTaGFwZSA9IHJlcXVpcmVkU2hhcGUoZGVmaW5pdGlvbi5vcmJpdGVyU2hhcGUgPT09IFwiaGV4XCIgPyBcImhleC1maWdodGVyXCIgOiBcInN0YXItY29yZVwiKTtcbiAgY29uc3Qgb3JiaXRlckNvdW50ID0gTWF0aC5jZWlsKGRlZmluaXRpb24ub3JiaXRlckNvdW50ICogc3RyZW5ndGggLyBpbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJICogMiAvIGRlZmluaXRpb24ub3JiaXRlckNvdW50O1xuICBjb25zdCBiYXNlQW5nbGUgPSBub3cgLyAxMDAwICogZGVmaW5pdGlvbi5vcmJpdGVyU3BlZWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JiaXRlckNvdW50OyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9IGJhc2VBbmdsZSArIGkgKiBhbmdsZVN0ZXA7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IG9yYml0ZXJTaGFwZSxcbiAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICB5OiB5ICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxuICAgICAgc2l6ZTogZGVmaW5pdGlvbi5vcmJpdGVyU2l6ZSAqIDEuOCAqIHNjYWxlLFxuICAgICAgY29sb3IsXG4gICAgICByb3RhdGlvblo6IGFuZ2xlICsgbm93IC8gMTQwMCxcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNCxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjI1LFxuICAgICAgZW5lcmd5QmxlZWQ6IC41LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTd29yZE1lbWJlcjtcbiAgc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3dvcmRUcmFpbChzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24sIHNjYWxlOiBudW1iZXIpOiBOZW9uUHJpbWl0aXZlW10ge1xuICBpZiAoc2xhc2gucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFtdO1xuICBjb25zdCBsaWZlID0gMSAtIHNsYXNoLnByb2dyZXNzO1xuICBjb25zdCByYWRpdXMgPSBzbGFzaC5yZWFjaCAqIHNjYWxlO1xuICBjb25zdCBoYWxmQXJjID0gc2xhc2guYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IGhlYWRpbmcgPSAtTWF0aC5QSSAvIDI7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDE7XG4gIGNvbnN0IGJsYWRlQW5nbGUgPSBoZWFkaW5nIC0gaGFsZkFyYyArIHN3ZWVwICogaGFsZkFyYyAqIDI7XG4gIGNvbnN0IHRyYWlsTGVuZ3RoID0gaGFsZkFyYyAqICguNTUgKyBsaWZlICogLjc1KTtcbiAgY29uc3QgdGhpY2tuZXNzID0gc2xhc2gudGhpY2tuZXNzICogc2NhbGU7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkrKykge1xuICAgIGNvbnN0IGFnZSA9IGkgLyAxMDtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGgubWF4KGhlYWRpbmcgLSBoYWxmQXJjLCBibGFkZUFuZ2xlIC0gdHJhaWxMZW5ndGggKiBhZ2UpO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gcmFkaXVzICogKC43MiArIE1hdGguc2luKGFnZSAqIE1hdGguUEkpICogLjA4KTtcbiAgICBjb25zdCBmYWRlID0gTWF0aC5wb3coMSAtIGFnZSwgMS4zNSkgKiBsaWZlO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBzbGFzaC54ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB5OiBzbGFzaC55ICsgTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB3aWR0aDogTWF0aC5tYXgoLjgsIHRoaWNrbmVzcyAqICgyLjQgLSBhZ2UgKiAxLjU1KSksXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqICguMjQgLSBhZ2UgKiAuMSksXG4gICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICBnbG93OiAxLjE1ICogZmFkZSxcbiAgICAgIGludGVuc2l0eTogMS40NSAqIGZhZGUsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogYW5nbGUgKyBNYXRoLlBJIC8gMixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGxlYWRpbmdYID0gc2xhc2gueCArIE1hdGguY29zKGJsYWRlQW5nbGUpICogcmFkaXVzICogLjgyO1xuICBjb25zdCBsZWFkaW5nWSA9IHNsYXNoLnkgKyBNYXRoLnNpbihibGFkZUFuZ2xlKSAqIHJhZGl1cyAqIC44MjtcbiAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICB4OiBsZWFkaW5nWCwgeTogbGVhZGluZ1ksXG4gICAgd2lkdGg6IE1hdGgubWF4KDEuMiwgdGhpY2tuZXNzICogMi44KSxcbiAgICBoZWlnaHQ6IHJhZGl1cyAqIC4zMixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IHNsYXNoLmNvbG9yLFxuICAgIGdsb3c6IDEuNCAqIGxpZmUsXG4gICAgaW50ZW5zaXR5OiAxLjcgKiBsaWZlLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogYmxhZGVBbmdsZSArIE1hdGguUEkgLyAyLFxuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcgJiYgc2xhc2gucHJvZ3Jlc3MgPCAuNzsgaSsrKSB7XG4gICAgY29uc3Qgc3ByZWFkID0gKGkgLSAzKSAqIC4xMztcbiAgICBjb25zdCBzcGFya0xpZmUgPSBsaWZlICogKDEgLSBNYXRoLmFicyhpIC0gMykgKiAuMDgpO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBsZWFkaW5nWCArIE1hdGguY29zKGJsYWRlQW5nbGUgKyBzcHJlYWQpICogcmFkaXVzICogKC4wNCArIGkgKiAuMDEyKSxcbiAgICAgIHk6IGxlYWRpbmdZICsgTWF0aC5zaW4oYmxhZGVBbmdsZSArIHNwcmVhZCkgKiByYWRpdXMgKiAoLjA0ICsgaSAqIC4wMTIpLFxuICAgICAgd2lkdGg6IE1hdGgubWF4KC43LCB0aGlja25lc3MgKiAuNzUpLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAoLjA4ICsgaSAlIDMgKiAuMDI1KSxcbiAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGdsb3c6IDEuMSAqIHNwYXJrTGlmZSxcbiAgICAgIGludGVuc2l0eTogMS4yNSAqIHNwYXJrTGlmZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBibGFkZUFuZ2xlICsgc3ByZWFkLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dvcmRWaXN1YWxzKG9wdGlvbnM6IFN3b3JkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGlmICghb3B0aW9ucy52aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IHsgZGVmaW5pdGlvbiwgc2xhc2gsIHgsIHksIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaGFsZkFyYyA9IGRlZmluaXRpb24uYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2ggPyAoc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDEpIDogLjU7XG4gIGNvbnN0IHN3b3JkQW5nbGUgPSAtTWF0aC5QSSAvIDIgLSBoYWxmQXJjICsgc3dlZXAgKiBoYWxmQXJjICogMjtcbiAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic3Bpa2UtbGFuY2VcIiksXG4gICAgeCwgeSxcbiAgICBzaXplOiBNYXRoLm1pbigxNywgZGVmaW5pdGlvbi5yYW5nZSAqIC4yOCkgKiBzY2FsZSxcbiAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgcm90YXRpb25aOiBzd29yZEFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gICAgbGluZVRoaWNrbmVzczogLjgyLFxuICAgIGdsb3c6IHNsYXNoID8gMS4zNSA6IDEsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiBzbGFzaCA/IDEuOCA6IDEuMTUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IHNsYXNoID8gLjcyIDogLjQyLFxuICAgIGVuZXJneVNwZWVkOiBzbGFzaCA/IDIuMSA6IDEuMixcbiAgICBlbmVyZ3lCbGVlZDogc2xhc2ggPyAuOCA6IC41LFxuICB9KTtcbiAgaWYgKHNsYXNoKSBzY2VuZS5wcmltaXRpdmVzLnB1c2goLi4uc3dvcmRUcmFpbChzbGFzaCwgc2NhbGUpKTtcbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBTaGFwZShzaGFwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlIHtcbiAgY29uc3QgeyB4LCB5LCBjb2xvciwgbm93LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoc2hhcGVJZCksXG4gICAgeDogeCArIE1hdGguc2luKG5vdyAvIDQyMCArIHkgKiAuMDcpICogNC41ICogc2NhbGUsXG4gICAgeSxcbiAgICBzaXplOiAxMCAqIHNjYWxlICogKDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyB5ICogLjA1KSAqIC4wOCksXG4gICAgY29sb3IsXG4gICAgcm90YXRpb25aOiBub3cgLyAxMTAwLFxuICAgIGxpbmVUaGlja25lc3M6IC43NixcbiAgICBnbG93OiAxLjA1LFxuICAgIGVuZXJneUludGVuc2l0eTogMS4yNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjQ4LFxuICAgIGVuZXJneVNwZWVkOiAxLjM1LFxuICAgIGVuZXJneUJsZWVkOiAuNTUsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzaGllbGQtcmluZ1wiLCBvcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic3Bpa2UtbGFuY2VcIiwgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlczogbnVtYmVyKTogbnVtYmVyID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuY29uc3QgcGxheWVyRm9yd2FyZFJvdGF0aW9uID0ge1xuICByb3RhdGlvblg6IGRlZ3JlZXNUb1JhZGlhbnMoLTUyKSxcbiAgcm90YXRpb25ZOiBkZWdyZWVzVG9SYWRpYW5zKC0xKSxcbiAgcm90YXRpb25aOiBkZWdyZWVzVG9SYWRpYW5zKDEpLFxufTtcbmNvbnN0IHNjcmVlbkZvcndhcmRZYXcgPSAoZGlyZWN0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBudW1iZXIgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoZGlyZWN0aW9uLnggLyBsZW5ndGgsIC1kaXJlY3Rpb24ueSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgdHlwZSBBY3RvclZpc3VhbFJvbGUgPVxuICB8IFwiZ3JvdW5kRm9yd2FyZFwiXG4gIHwgXCJzY3JlZW5CaWxsYm9hcmRcIlxuICB8IFwidHVtYmxpbmdCaWxsYm9hcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCB7XG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbm93OiBudW1iZXI7XG4gIHBoYXNlPzogbnVtYmVyO1xuICBmYWNpbmc/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rvck9yaWVudGF0aW9uKHJvbGU6IEFjdG9yVmlzdWFsUm9sZSwgY29udGV4dDogQWN0b3JPcmllbnRhdGlvbkNvbnRleHQpOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHN3aXRjaCAocm9sZSkge1xuICAgIGNhc2UgXCJncm91bmRGb3J3YXJkXCI6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBsYXllckZvcndhcmRSb3RhdGlvbixcbiAgICAgICAgcm90YXRpb25YOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25YICsgTWF0aC5zaW4oY29udGV4dC5ub3cgLyA2NTAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMDYsXG4gICAgICAgIHJvdGF0aW9uWTogcGxheWVyRm9yd2FyZFJvdGF0aW9uLnJvdGF0aW9uWSArIChjb250ZXh0LmZhY2luZyA/IHNjcmVlbkZvcndhcmRZYXcoY29udGV4dC5mYWNpbmcpIDogMCksXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFwidHVtYmxpbmdCaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdGF0aW9uWTogTWF0aC5zaW4oY29udGV4dC5ub3cgLyA3MDAgKyAoY29udGV4dC5waGFzZSA/PyAwKSkgKiAuMTgsXG4gICAgICB9O1xuICAgIGNhc2UgXCJzY3JlZW5CaWxsYm9hcmRcIjpcbiAgICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVsaWNvcHRlclZpZXdwb3J0Rm9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwbGF5ZXJZOiBudW1iZXIsIGZvY3VzWD86IG51bWJlcik6IEhlbGljb3B0ZXJWaWV3cG9ydCB7XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIHBsYXllclksIGZvY3VzWCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyT3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHBoYXNlID0gMCxcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJncm91bmRGb3J3YXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgICBmYWNpbmc6IHsgeDogMCwgeTogLTEgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteU9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwidHVtYmxpbmdCaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICAgIHBoYXNlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbGxib2FyZE9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInNjcmVlbkJpbGxib2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSwgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbnR5cGUgU2NlbmVCYWNrZ3JvdW5kU3RhdGUgPSBcIm1pc3NpbmdcIiB8IFwibG9hZGVkXCIgfCBcImxvYWRpbmdcIjtcblxuY29uc3Qgc2NlbmVCYWNrZ3JvdW5kcyA9IG5ldyBNYXA8c3RyaW5nLCBTY2VuZUJhY2tncm91bmRTdGF0ZT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXMoXG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgdGltZU1zOiBudW1iZXIsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gWy4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkLCB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSkucHJpbWl0aXZlcyA/PyBbXSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgbWFya2VyID0gXCIvTmVvblN3YXJtL1wiO1xuICBjb25zdCBuZXN0ZWRJbmRleCA9IHBhdGguaW5kZXhPZihtYXJrZXIpO1xuICBpZiAobmVzdGVkSW5kZXggPj0gMCkgcmV0dXJuIGAke3BhdGguc2xpY2UoMCwgbmVzdGVkSW5kZXgpfS9OZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcblxuICBjb25zdCBwYWdlSW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFwiL05lb25Td2FybS5odG1sXCIpO1xuICBpZiAocGFnZUluZGV4ID49IDApIHJldHVybiBgJHtwYXRoLnNsaWNlKDAsIHBhZ2VJbmRleCl9L05lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xuXG4gIHJldHVybiBgTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogdm9pZCB7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcblxuICBjb25zdCBwYXRoID0gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkKTtcbiAgY29uc3Qgc3RhdGUgPSBzY2VuZUJhY2tncm91bmRzLmdldChwYXRoKTtcbiAgaWYgKHN0YXRlID09PSBcImxvYWRlZFwiKSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtwYXRofVwiKWA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIik7XG4gIGlmIChzdGF0ZSkgcmV0dXJuO1xuXG4gIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGluZ1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGVkXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGF0aH1cIilgO1xuICB9O1xuICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibWlzc2luZ1wiKTtcbiAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgfTtcbiAgaW1hZ2Uuc3JjID0gcGF0aDtcbn1cbiIsICJpbXBvcnQgeyBnZXROZW9uU2hhcGUsIE5lb25TaGFwZUFjdG9yLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlLCB0eXBlIE5lb25TaGFwZUxhYmVsLCB0eXBlIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHN3YXJtU2hhcGVzID0ge1xuICBwbGF5ZXI6IGdldE5lb25TaGFwZShcImFycm93LWNsYXNzaWNcIikhLFxuICBlbmVteTogZ2V0TmVvblNoYXBlKFwiaHVudGVyLWV5ZVwiKSEsXG4gIG11bHRpcGxpZXI6IGdldE5lb25TaGFwZShcImJydWlzZXItY3Jvc3NcIikhLFxuICBndW5QaWNrdXA6IGdldE5lb25TaGFwZShcImhleC1maWdodGVyXCIpISxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwaXhlbHNUb1NoYXBlV29ybGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+ICh7XG4gIHg6ICh4IC8gY2FudmFzLndpZHRoIC0gLjUpICogKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxuICB5OiAoLjUgLSB5IC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwaXhlbHM6IG51bWJlcikgPT4gcGl4ZWxzIC8gY2FudmFzLmhlaWdodCAqIDIuNTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yQXRQaXhlbHMoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgcGl4ZWxTaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgY29uc3Qgd29ybGQgPSBwaXhlbHNUb1NoYXBlV29ybGQoY2FudmFzLCB4LCB5KTtcbiAgYWN0b3IubW92ZVRvKHdvcmxkLngsIHdvcmxkLnkpO1xuICBhY3Rvci5zY2FsZSA9IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZShjYW52YXMsIHBpeGVsU2l6ZSk7XG4gIHJldHVybiBhY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpO1xufVxuXG50eXBlIFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ICYgUGFydGlhbDxQaWNrPE5lb25Ub3BEb3duU2hhcGUsIFwid2lkdGhcIiB8IFwiaGVpZ2h0XCI+PjtcblxuZXhwb3J0IGNvbnN0IGFjdG9ySW5Ub3BEb3duU2NlbmUgPSAoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IHt9KTogTmVvblRvcERvd25TaGFwZSA9PlxuICAoeyAuLi5hY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpLCB4LCB5LCBzaXplIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hhcGVMYWJlbCA9ICh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uOiBOZW9uU2hhcGVMYWJlbFtcInBvc2l0aW9uXCJdLCBmb250U2l6ZTogbnVtYmVyLCBvZmZzZXQgPSA0KTogTmVvblNoYXBlTGFiZWwgPT5cbiAgKHsgdGV4dCwgcG9zaXRpb24sIGZvbnRTaXplLCBvZmZzZXQsIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIiwgZm9udFdlaWdodDogNzAwIH0pO1xuIiwgImltcG9ydCB7IG11bHRpcGxpZXJGYW1pbHkgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3F1YWRQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2x1bW46IG51bWJlcjtcbiAgcm93OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTcXVhZE1vZGVsIHtcbiAgbGFuZTogMCB8IDEgPSAwO1xuICBjb3VudCA9IDE7XG4gIGFpbU9mZnNldCA9IDA7XG4gIHggPSAwO1xuICB0YXJnZXRYID0gMDtcbiAgbGFuZVNoaWZ0U3RhcnRlZEF0ID0gMDtcblxuICBhZGQoYW1vdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1pbihzcGVjLm1heFNxdWFkU2l6ZSwgdGhpcy5jb3VudCArIGFtb3VudCk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICByZW1vdmUoYW1vdW50ID0gMSk6IG51bWJlciB7XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KDAsIHRoaXMuY291bnQgLSBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgc2V0TGFuZShsYW5lOiAwIHwgMSwgbGFuZUNlbnRlcjogKGxhbmU6IDAgfCAxKSA9PiBudW1iZXIsIG5vdzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGxhbmUgIT09IHRoaXMubGFuZSkge1xuICAgICAgdGhpcy5sYW5lU2hpZnRTdGFydGVkQXQgPSBub3c7XG4gICAgICAvLyBSZXNldCBhaW0gb2Zmc2V0IHNvIHRoZSBwbGF5ZXIgc25hcHMgdG8gdGhlIGNvcnJlY3QgY29sdW1uIGluIHRoZSBuZXcgbGFuZS5cbiAgICAgIHRoaXMuYWltT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5sYW5lID0gbGFuZTtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKGxhbmUpICsgdGhpcy5haW1PZmZzZXQ7XG4gIH1cblxuICBhdXRvQWltKHRhcmdldE9mZnNldDogbnVtYmVyLCBsYW5lV2lkdGg6IG51bWJlciwgbGFuZUNlbnRlcjogKGxhbmU6IDAgfCAxKSA9PiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBIaWdoIGxlcnAgZmFjdG9yICgwLjg1KSBzbyBhdXRvLWFpbSBzbmFwcyBhbG1vc3QgaW5zdGFudGFuZW91c2x5IGVhY2ggZnJhbWUuXG4gICAgdGhpcy5haW1PZmZzZXQgKz0gKE1hdGgubWF4KC1sYW5lV2lkdGggKiAuMjgsIE1hdGgubWluKGxhbmVXaWR0aCAqIC4yOCwgdGFyZ2V0T2Zmc2V0KSkgLSB0aGlzLmFpbU9mZnNldCkgKiAuODU7XG4gICAgdGhpcy50YXJnZXRYID0gbGFuZUNlbnRlcih0aGlzLmxhbmUpICsgdGhpcy5haW1PZmZzZXQ7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCByZXNwb25zZSA9IDEgLSBNYXRoLnBvdyguMDAwMDgsIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy54ICs9ICh0aGlzLnRhcmdldFggLSB0aGlzLngpICogcmVzcG9uc2U7XG4gIH1cblxuICAvKiogWCBvZmZzZXRzIG9mIGVhY2ggY29sdW1uIGluIHRoZSBmcm9udCByb3csIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci4gKi9cbiAgZnJvbnRSb3dDb2x1bW5PZmZzZXRzKHNjYWxlOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgY29uc3Qgcm93Q291bnQgPSBNYXRoLm1pbihzcGVjLm1lbWJlcnNQZXJSb3csIHRoaXMuY291bnQpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoXywgY29sKSA9PlxuICAgICAgKGNvbCAtIChyb3dDb3VudCAtIDEpIC8gMikgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICApO1xuICB9XG5cbiAgcG9pbnRzKGJhc2VZOiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBTcXVhZFBvaW50W10ge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIGNvbnN0IHBvaW50czogU3F1YWRQb2ludFtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyBzcGVjLm1lbWJlcnNQZXJSb3cpO1xuICAgICAgY29uc3Qgcm93Q291bnQgPSBNYXRoLm1pbihzcGVjLm1lbWJlcnNQZXJSb3csIHRoaXMuY291bnQgLSByb3cgKiBzcGVjLm1lbWJlcnNQZXJSb3cpO1xuICAgICAgY29uc3QgY29sdW1uID0gaW5kZXggJSBzcGVjLm1lbWJlcnNQZXJSb3c7XG4gICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHRoaXMueCArIChjb2x1bW4gLSAocm93Q291bnQgLSAxKSAvIDIpICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgICAgIHk6IGJhc2VZICsgcm93ICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgcm93LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsXG4gIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcixcbiAgTmVvblZpY3RvcnlFeHBlcmllbmNlLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxuICB0eXBlIE5lb25Ub3BEb3duU2hhcGUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHtcbiAgY29tYmF0VHVuaW5nLFxuICBndW5GYW1pbHksXG4gIG11bHRpcGxpZXJGYW1pbHksXG4gIG9yYkZhbWlseSxcbiAgcGFyc2VUcmFja0RlZmluaXRpb24sXG4gIHNoaWVsZEZhbWlseSxcbiAgc3dvcmRGYW1pbHksXG4gIHR5cGUgR3VuSWQsXG4gIHR5cGUgTXVsdGlwbGllcklkLFxuICB0eXBlIE9yYklkLFxuICB0eXBlIFBhcnNlZFRyYWNrRW50aXR5LFxuICB0eXBlIFNoaWVsZElkLFxuICB0eXBlIFN3b3JkSWQsXG4gIHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlLFxuICB0eXBlIFRyYWNrTWVtYmVyLFxufSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgc2VsZWN0QXV0b0FpbU9mZnNldCB9IGZyb20gXCIuLi9hdXRvQWltXCI7XG5pbXBvcnQgeyBHdW5TaW11bGF0aW9uIH0gZnJvbSBcIi4uL2NvbWJhdC9ndW5TaW11bGF0aW9uXCI7XG5pbXBvcnQgeyBxdWVyeU5lYXJieVRocmVhdHMgfSBmcm9tIFwiLi4vY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5XCI7XG5pbXBvcnQgeyByZXNvbHZlU2hpZWxkQ29udGFjdCwgU2hpZWxkU3RhdGUsIHRpY2tTaGllbGQgfSBmcm9tIFwiLi4vY29tYmF0L3NoaWVsZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgU3dvcmRTdGF0ZSwgdGlja1N3b3JkIH0gZnJvbSBcIi4uL2NvbWJhdC9zd29yZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlBY3RvciwgZGVmZWF0RW5lbXksIGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkLCBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMsIHJlc29sdmVFbmVteURhbWFnZSB9IGZyb20gXCIuLi9lbmVteUNhdGFsb2dcIjtcbmltcG9ydCB7IGVuZW15RXhpdENsb3VkLCB1cGRhdGVFbmVteUV4aXRFZmZlY3RzLCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCwgdHlwZSBFbmVteVZpc3VhbFR5cGUgfSBmcm9tIFwiLi4vZW5lbXlFeGl0VmlzdWFsc1wiO1xuaW1wb3J0IHsgc2hpZWxkUGlja3VwVmlzdWFsLCBzaGllbGRWaXN1YWxzLCBzd29yZFBpY2t1cFZpc3VhbCwgc3dvcmRWaXN1YWxzIH0gZnJvbSBcIi4uL2ZhbWlseVZpc3VhbHNcIjtcbmltcG9ydCB7IGJpbGxib2FyZE9yaWVudGF0aW9uLCBlbmVteU9yaWVudGF0aW9uLCBoZWxpY29wdGVyVmlld3BvcnRGb3IsIHBsYXllck9yaWVudGF0aW9uIH0gZnJvbSBcIi4uL3JlbmRlck9yaWVudGF0aW9uXCI7XG5pbXBvcnQgeyBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQsIGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXMgfSBmcm9tIFwiLi4vc2NlbmVFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgYWN0b3JJblRvcERvd25TY2VuZSwgc2hhcGVMYWJlbCwgc3dhcm1TaGFwZXMgfSBmcm9tIFwiLi4vc2hhcGVWaXN1YWxzXCI7XG5pbXBvcnQgeyBTcXVhZE1vZGVsIH0gZnJvbSBcIi4uL3NxdWFkXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYLFxuICBsYW5lUnVubmVyVmlld3BvcnQsXG4gIHByb2plY3RIZWxpY29wdGVyU2NlbmUsXG4gIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxufSBmcm9tIFwiLi4vdmlld3BvcnRcIjtcblxudHlwZSBMYW5lID0gMCB8IDE7XG5cbmV4cG9ydCB0eXBlIE5lb25Td2FybVNpbXVsYXRpb25Nb2RlID0gXCJnYW1lXCIgfCBcImxhYlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Td2FybVNvdW5kIHtcbiAgcGxheShpZDogc3RyaW5nKTogdm9pZDtcbiAgcGxheVJvdGF0ZWQ/KGlkOiBzdHJpbmcsIGFsdGVybmF0aXZlczogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucyB7XG4gIG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBzdGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjYW1lcmFTZXR0aW5ncz86IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncztcbiAgc291bmQ/OiBOZW9uU3dhcm1Tb3VuZDtcbiAgc2NlbmVJZD86IExhbmVSdW5uZXJTY2VuZUlkO1xuICBvblJ1blN0YXR1cz86IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcbiAgb25GaW5pc2g/OiAocmVzdWx0OiBOZW9uU3dhcm1GaW5pc2hSZXN1bHQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtRmluaXNoUmVzdWx0IHtcbiAgd29uOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXRhaWw6IHN0cmluZztcbiAgYnJlYWNoZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1TbmFwc2hvdCB7XG4gIG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICBhY3RpdmVUcmFjazogYm9vbGVhbjtcbiAgY29tYmF0Tm93OiBudW1iZXI7XG4gIGNvbWJhdEVsYXBzZWQ6IG51bWJlcjtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHNxdWFkOiB7XG4gICAgbGFuZTogTGFuZTtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB0YXJnZXRYOiBudW1iZXI7XG4gICAgYWltT2Zmc2V0OiBudW1iZXI7XG4gIH07XG4gIGFjdGl2ZToge1xuICAgIGd1bjogeyBpZDogR3VuSWQ7IGxldmVsOiBudW1iZXIgfSB8IG51bGw7XG4gICAgc2hpZWxkOiBTaGllbGRJZCB8IG51bGw7XG4gICAgc3dvcmQ6IFN3b3JkSWQgfCBudWxsO1xuICB9O1xuICBlbmVtaWVzOiBBcnJheTx7IGlkOiBudW1iZXI7IGVuZW15SWQ6IE9yYklkOyBsYW5lOiBMYW5lOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaGVhbHRoOiBudW1iZXI7IG1heEhlYWx0aDogbnVtYmVyOyBkeWluZzogYm9vbGVhbiB9PjtcbiAgcGlja3Vwczoge1xuICAgIGd1bnM6IG51bWJlcjtcbiAgICBzaGllbGRzOiBudW1iZXI7XG4gICAgc3dvcmRzOiBudW1iZXI7XG4gICAgbXVsdGlwbGllcnM6IG51bWJlcjtcbiAgfTtcbiAga2lsbHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEVuZW15IHtcbiAgaWQ6IG51bWJlcjtcbiAgZW5lbXlUeXBlOiBFbmVteVZpc3VhbFR5cGU7XG4gIGVuZW15SWQ6IE9yYklkO1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbiAgcm93SWQ6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xuICBkeWluZzogYm9vbGVhbjtcbiAgZXhpdEVmZmVjdFNwYXduZWQ/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgR3VuUGlja3VwIHtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGd1bklkOiBHdW5JZDtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3Rvcjtcbn1cblxuaW50ZXJmYWNlIFNoaWVsZFBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaGllbGRJZDogU2hpZWxkSWQ7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgU3dvcmRQaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc3dvcmRJZDogU3dvcmRJZDtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBNdWx0aXBsaWVyUGlja3VwIHtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG11bHRpcGxpZXJJZDogTXVsdGlwbGllcklkO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xufVxuXG5jb25zdCBndW5GaXJlU291bmRJZHM6IFJlY29yZDxHdW5JZCwgc3RyaW5nPiA9IHtcbiAgcHVsc2VQaXN0b2w6IFwiUHJpbWFyeVwiLFxuICBuZWVkbGVyU21nOiBcIk5lZWRsZXJGaXJlXCIsXG4gIGJ1cnN0Q2FyYmluZTogXCJCdXJzdENhcmJpbmVGaXJlXCIsXG4gIGhlYXZ5Q2Fubm9uOiBcIkhlYXZ5Q2Fubm9uRmlyZVwiLFxuICBzcGxpdHRlclJpZmxlOiBcIlNwbGl0dGVyUmlmbGVGaXJlXCIsXG59O1xuXG5jb25zdCBzd29yZFN3aW5nU291bmRJZHM6IFJlY29yZDxTd29yZElkLCBzdHJpbmc+ID0ge1xuICBhcmNCbGFkZTogXCJTd29yZFN3aW5nXCIsXG4gIGNsZWF2ZXI6IFwiU3dvcmRIZWF2eVN3aW5nXCIsXG4gIG5lZWRsZVJhcGllcjogXCJTd29yZFN0YWJcIixcbn07XG5cbmNvbnN0IHNvdW5kQWx0ZXJuYXRpdmVDb3VudHM6IFBhcnRpYWw8UmVjb3JkPHN0cmluZywgbnVtYmVyPj4gPSB7XG4gIFByaW1hcnk6IDMsXG4gIEVuZW15RGVzdHJveWVkOiAyLFxuICBFbmVteUhpdDogMixcbiAgRW5lbXlTcGF3bjogMixcbiAgQm9zczogMSxcbiAgUHJvamVjdGlsZUhpdDogMixcbn07XG5jb25zdCBtYXhUcmFja1NwYXduTGVhZFNlY29uZHMgPSAxODtcbmNvbnN0IGZpcnN0VHJhY2tSb3dBcnJpdmFsU2Vjb25kcyA9IDIgKiBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyO1xuY29uc3QgdHJhY2tSb3dUcmF2ZWxTZWNvbmRzID0gLjM3NSAqIGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXI7XG5cbmV4cG9ydCBjbGFzcyBOZW9uU3dhcm1TaW11bGF0aW9uIHtcbiAgcmVhZG9ubHkgbW9kZTogTmVvblN3YXJtU2ltdWxhdGlvbk1vZGU7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IHN0YWdlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHJlYWRvbmx5IHNxdWFkID0gbmV3IFNxdWFkTW9kZWwoKTtcblxuICBwcml2YXRlIHJlbmRlcmVyOiBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI7XG4gIHByaXZhdGUgc291bmQ/OiBOZW9uU3dhcm1Tb3VuZDtcbiAgcHJpdmF0ZSBvblJ1blN0YXR1cz86IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvbkZpbmlzaD86IChyZXN1bHQ6IE5lb25Td2FybUZpbmlzaFJlc3VsdCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZSA9IDA7XG4gIHByaXZhdGUgYWN0aXZlVHJhY2s6IFRyYWNrTWVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdHJhY2tTY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgcHJpdmF0ZSBsYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgcHJpdmF0ZSBjb21iYXRFbGFwc2VkID0gMDtcbiAgcHJpdmF0ZSBjb21iYXROb3cgPSAwO1xuICBwcml2YXRlIHBsYXllckxhbmU6IExhbmUgPSAwO1xuICBwcml2YXRlIGNvb2xkb3duID0gMDtcbiAgcHJpdmF0ZSBlbnRpdHlJZENvdW50ZXIgPSAwO1xuICBwcml2YXRlIHRyYWNrRW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcbiAgcHJpdmF0ZSBuZXh0VHJhY2tFbnRpdHkgPSAwO1xuICBwcml2YXRlIGJyZWFjaGVzID0gMDtcbiAgcHJpdmF0ZSBraWxscyA9IDA7XG4gIHByaXZhdGUgZW5lbWllczogRW5lbXlbXSA9IFtdO1xuICBwcml2YXRlIGd1blNpbXVsYXRpb24gPSBuZXcgR3VuU2ltdWxhdGlvbigpO1xuICBwcml2YXRlIGd1blBpY2t1cHM6IEd1blBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgc2hpZWxkUGlja3VwczogU2hpZWxkUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBzd29yZFBpY2t1cHM6IFN3b3JkUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBtdWx0aXBsaWVyczogTXVsdGlwbGllclBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgZW5lbXlFeGl0RWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSB2aWN0b3J5OiBOZW9uVmljdG9yeUV4cGVyaWVuY2UgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBmYWlsdXJlUmVhc29uID0gXCJcIjtcbiAgcHJpdmF0ZSBwbGF5ZXJBY3RvcnM6IE5lb25TaGFwZUFjdG9yW10gPSBbXTtcbiAgcHJpdmF0ZSBleHBsb2RpbmdQbGF5ZXJzOiBBcnJheTx7IGFjdG9yOiBOZW9uU2hhcGVBY3RvcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4gPSBbXTtcbiAgcHJpdmF0ZSBhY3RpdmVCeUZhbWlseToge1xuICAgIGd1bjogeyBpZDogR3VuSWQ7IGxldmVsOiBudW1iZXIgfSB8IG51bGw7XG4gICAgc2hpZWxkOiBTaGllbGRTdGF0ZSB8IG51bGw7XG4gICAgc3dvcmQ6IFN3b3JkU3RhdGUgfCBudWxsO1xuICB9ID0ge1xuICAgIGd1bjogbnVsbCxcbiAgICBzaGllbGQ6IG51bGwsXG4gICAgc3dvcmQ6IG51bGwsXG4gIH07XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihyZW5kZXJlcjogTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLCBvcHRpb25zOiBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucykge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGU7XG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcbiAgICB0aGlzLnN0YWdlRWxlbWVudCA9IG9wdGlvbnMuc3RhZ2VFbGVtZW50O1xuICAgIHRoaXMuY2FtZXJhU2V0dGluZ3MgPSBvcHRpb25zLmNhbWVyYVNldHRpbmdzID8/IHsgLi4uZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB9O1xuICAgIHRoaXMuc291bmQgPSBvcHRpb25zLnNvdW5kO1xuICAgIHRoaXMub25SdW5TdGF0dXMgPSBvcHRpb25zLm9uUnVuU3RhdHVzO1xuICAgIHRoaXMub25GaW5pc2ggPSBvcHRpb25zLm9uRmluaXNoO1xuICAgIHRoaXMudHJhY2tTY2VuZUlkID0gb3B0aW9ucy5zY2VuZUlkID8/IFwibmVvbkhhbGxcIjtcbiAgICB0aGlzLmFwcGx5U2NlbmVCYWNrZ3JvdW5kKCk7XG4gICAgdGhpcy5yZXNldCh7IHNpbGVudDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUob3B0aW9uczogTmVvblN3YXJtU2ltdWxhdGlvbk9wdGlvbnMpOiBQcm9taXNlPE5lb25Td2FybVNpbXVsYXRpb24+IHtcbiAgICBjb25zdCByZW5kZXJlciA9IGF3YWl0IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlci5jcmVhdGUob3B0aW9ucy5jYW52YXMsIGxhbmVSdW5uZXJWaWV3cG9ydC5sb2dpY2FsV2lkdGgsIGxhbmVSdW5uZXJWaWV3cG9ydC5sb2dpY2FsSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IE5lb25Td2FybVNpbXVsYXRpb24ocmVuZGVyZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0IG5vdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbWJhdE5vdztcbiAgfVxuXG4gIGdldCBhY3RpdmVUcmFja1J1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVHJhY2sgIT09IG51bGw7XG4gIH1cblxuICBsYW5lWChsYW5lOiBMYW5lKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGggKiAobGFuZSA9PT0gMCA/IC4zMiA6IC42OCk7XG4gIH1cblxuICBwbGF5ZXJZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodCAqIC44MjtcbiAgfVxuXG4gIHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXNldChvcHRpb25zOiB7IHNpbGVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUcmFjayA9IG51bGw7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmNvbWJhdEVsYXBzZWQgPSAwO1xuICAgIHRoaXMuY29tYmF0Tm93ID0gMDtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLm5leHRUcmFja0VudGl0eSA9IDA7XG4gICAgdGhpcy50cmFja0VudGl0aWVzID0gW107XG4gICAgdGhpcy5icmVhY2hlcyA9IDA7XG4gICAgdGhpcy5raWxscyA9IDA7XG4gICAgdGhpcy5jbGVhclN0YWdlKCk7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkID0gbnVsbDtcbiAgICB0aGlzLnNxdWFkLmNvdW50ID0gMTtcbiAgICB0aGlzLnNxdWFkLmFpbU9mZnNldCA9IDA7XG4gICAgdGhpcy5zcXVhZC5sYW5lID0gMDtcbiAgICB0aGlzLnNxdWFkLnggPSB0aGlzLmxhbmVYKDApO1xuICAgIHRoaXMuc3F1YWQudGFyZ2V0WCA9IHRoaXMubGFuZVgoMCk7XG4gICAgdGhpcy5wbGF5ZXJMYW5lID0gMDtcbiAgICB0aGlzLnBsYXllckFjdG9ycyA9IFtuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pXTtcbiAgICB0aGlzLmZhaWx1cmVSZWFzb24gPSBcIlwiO1xuICAgIHRoaXMudmljdG9yeSA9IG51bGw7XG4gICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5wbGF5KFwiTWVudU9wZW5cIik7XG4gIH1cblxuICBjbGVhclN0YWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgIHRoaXMuZ3VuU2ltdWxhdGlvbi5jbGVhcigpO1xuICAgIHRoaXMuZ3VuUGlja3VwcyA9IFtdO1xuICAgIHRoaXMuc2hpZWxkUGlja3VwcyA9IFtdO1xuICAgIHRoaXMuc3dvcmRQaWNrdXBzID0gW107XG4gICAgdGhpcy5tdWx0aXBsaWVycyA9IFtdO1xuICAgIHRoaXMuZW5lbXlFeGl0RWZmZWN0cyA9IFtdO1xuICAgIHRoaXMuZXhwbG9kaW5nUGxheWVycyA9IFtdO1xuICAgIHRoaXMudmljdG9yeSA9IG51bGw7XG4gIH1cblxuICBzdGFydFRyYWNrKHRyYWNrOiBUcmFja01lbWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVHJhY2sgPSB0cmFjaztcbiAgICB0aGlzLnRyYWNrU2NlbmVJZCA9IHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQ7XG4gICAgdGhpcy5hcHBseVNjZW5lQmFja2dyb3VuZCgpO1xuICAgIHRoaXMubGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkID0gMDtcbiAgICB0aGlzLmNvbWJhdE5vdyA9IDA7XG4gICAgY29uc3QgYWxsRW50aXRpZXMgPSBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICBjb25zdCBwbGF5ZXJTdGFydCA9IGFsbEVudGl0aWVzLmZpbmQoZW50aXR5ID0+IGVudGl0eS5pZCA9PT0gXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgY29uc3Qgc3RhcnRMYW5lOiBMYW5lID0gcGxheWVyU3RhcnQ/LnNpZGUgPT09IFwicmlnaHRcIiA/IDEgOiAwO1xuICAgIHRoaXMucGxheWVyTGFuZSA9IHN0YXJ0TGFuZTtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBudWxsO1xuICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgIHRoaXMubmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgICB0aGlzLnRyYWNrRW50aXRpZXMgPSBhbGxFbnRpdGllcy5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS5pZCAhPT0gXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgdGhpcy5icmVhY2hlcyA9IDA7XG4gICAgdGhpcy5jbGVhclN0YWdlKCk7XG4gICAgdGhpcy5zcXVhZC5jb3VudCA9IDE7XG4gICAgdGhpcy5wbGF5ZXJBY3RvcnMgPSBbbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KV07XG4gICAgdGhpcy5zcXVhZC5haW1PZmZzZXQgPSAwO1xuICAgIHRoaXMuc3F1YWQubGFuZSA9IHN0YXJ0TGFuZTtcbiAgICB0aGlzLnNxdWFkLnggPSB0aGlzLmxhbmVYKHN0YXJ0TGFuZSk7XG4gICAgdGhpcy5zcXVhZC50YXJnZXRYID0gdGhpcy5sYW5lWChzdGFydExhbmUpO1xuICAgIHRoaXMucGxheShcIlRyYWNrU3RhcnRcIik7XG4gIH1cblxuICBzZXRTY2VuZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHZvaWQge1xuICAgIHRoaXMudHJhY2tTY2VuZUlkID0gc2NlbmVJZDtcbiAgICB0aGlzLmFwcGx5U2NlbmVCYWNrZ3JvdW5kKCk7XG4gIH1cblxuICBzZXRTcXVhZExhbmUobGFuZTogTGFuZSwgb3B0aW9uczogeyByZXF1aXJlQWN0aXZlVHJhY2s/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLnJlcXVpcmVBY3RpdmVUcmFjayAmJiAhdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIGlmIChsYW5lICE9PSB0aGlzLnNxdWFkLmxhbmUpIHRoaXMucGxheShcIkxhbmVTd2l0Y2hcIik7XG4gICAgdGhpcy5zcXVhZC5zZXRMYW5lKGxhbmUsIHZhbHVlID0+IHRoaXMubGFuZVgodmFsdWUpLCB0aGlzLmNvbWJhdE5vdyk7XG4gICAgdGhpcy5wbGF5ZXJMYW5lID0gbGFuZTtcbiAgfVxuXG4gIGVxdWlwR3VuKGd1bklkOiBHdW5JZCwgbGV2ZWwgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSB7IGlkOiBndW5JZCwgbGV2ZWwgfTtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBHdW5cIik7XG4gICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gIH1cblxuICBlcXVpcFNoaWVsZChzaGllbGRJZDogU2hpZWxkSWQpOiB2b2lkIHtcbiAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tzaGllbGRJZF07XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBuZXcgU2hpZWxkU3RhdGUoc2hpZWxkSWQsIGRlZi5tYXhDaGFyZ2VzKTtcbiAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTaGllbGRcIik7XG4gICAgdGhpcy5wbGF5KFwiU2hpZWxkXCIpO1xuICB9XG5cbiAgZXF1aXBTd29yZChzd29yZElkOiBTd29yZElkKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG5ldyBTd29yZFN0YXRlKHN3b3JkSWQpO1xuICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFN3b3JkXCIpO1xuICAgIHRoaXMucGxheShcIldlYXBvblJlYWR5XCIpO1xuICB9XG5cbiAgYWRkU3F1YWRNZW1iZXJzKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zcXVhZC5hZGQoYW1vdW50KTtcbiAgICB0aGlzLnN5bmNQbGF5ZXJBY3RvcnMoKTtcbiAgfVxuXG4gIHNwYXduRW5lbXkob3B0aW9uczogeyBlbmVteUlkOiBPcmJJZDsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgaGVhbHRoPzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXI7IHJvd0lkPzogbnVtYmVyOyBwbGF5U291bmQ/OiBib29sZWFuOyBjb2xvcj86IHN0cmluZyB9KTogbnVtYmVyIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbb3B0aW9ucy5lbmVteUlkXTtcbiAgICBjb25zdCBoZWFsdGggPSBvcHRpb25zLmhlYWx0aCA/PyBkZWZpbml0aW9uLmhlYWx0aDtcbiAgICBjb25zdCBpZCA9ICsrdGhpcy5lbnRpdHlJZENvdW50ZXI7XG4gICAgY29uc3QgYWN0b3IgPSBjcmVhdGVFbmVteUFjdG9yKG9wdGlvbnMuZW5lbXlJZCk7XG4gICAgaWYgKG9wdGlvbnMuY29sb3IpIGFjdG9yLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmVuZW1pZXMucHVzaCh7XG4gICAgICBpZCxcbiAgICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteUlkLFxuICAgICAgZW5lbXlJZDogb3B0aW9ucy5lbmVteUlkLFxuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMDUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBoZWFsdGgsXG4gICAgICBtYXhIZWFsdGg6IGhlYWx0aCxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgIHJvd0lkOiBvcHRpb25zLnJvd0lkID8/IGlkLFxuICAgICAgYWN0b3IsXG4gICAgICBkeWluZzogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMucGxheVNvdW5kICE9PSBmYWxzZSAmJiBkZWZpbml0aW9uLnNwYXduU291bmQpIHRoaXMucGxheShkZWZpbml0aW9uLnNwYXduU291bmQpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIGRlZmVhdEVuZW15QnlJZChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZW5lbXkgPSB0aGlzLmVuZW1pZXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICBpZiAoZW5lbXkgJiYgIWVuZW15LmR5aW5nKSB0aGlzLmRlc3Ryb3lFbmVteShlbmVteSk7XG4gIH1cblxuICBzcGF3bkd1blBpY2t1cChvcHRpb25zOiB7IGd1bklkOiBHdW5JZDsgbGFuZTogTGFuZTsgbGV2ZWw/OiBudW1iZXI7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy5ndW5QaWNrdXBzLnB1c2goe1xuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMzUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBndW5JZDogb3B0aW9ucy5ndW5JZCxcbiAgICAgIGxldmVsOiBvcHRpb25zLmxldmVsID8/IDEsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmd1blBpY2t1cCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHNwYXduU2hpZWxkUGlja3VwKG9wdGlvbnM6IHsgc2hpZWxkSWQ6IFNoaWVsZElkOyBsYW5lOiBMYW5lOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMuc2hpZWxkUGlja3Vwcy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgc2hpZWxkSWQ6IG9wdGlvbnMuc2hpZWxkSWQsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgfSk7XG4gIH1cblxuICBzcGF3blN3b3JkUGlja3VwKG9wdGlvbnM6IHsgc3dvcmRJZDogU3dvcmRJZDsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnN3b3JkUGlja3Vwcy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgc3dvcmRJZDogb3B0aW9ucy5zd29yZElkLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgIH0pO1xuICB9XG5cbiAgc3Bhd25NdWx0aXBsaWVyUGlja3VwKG9wdGlvbnM6IHsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyOyBtdWx0aXBsaWVySWQ/OiBNdWx0aXBsaWVySWQgfSk6IHZvaWQge1xuICAgIGNvbnN0IG11bHRpcGxpZXJJZCA9IG9wdGlvbnMubXVsdGlwbGllcklkID8/IFwic3F1YWRQbHVzT25lXCI7XG4gICAgdGhpcy5tdWx0aXBsaWVycy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgbXVsdGlwbGllcklkLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5tdWx0aXBsaWVyIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhcnRMb29wKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcExvb3AoKTtcbiAgICBjb25zdCBmcmFtZSA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgdGhpcy50aWNrKG5vdyk7XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNvbWJhdE5vdyk7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICB9O1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgc3RvcExvb3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWUpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xuICB9XG5cbiAgdGljayhmcmFtZU5vdzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmF3RGVsdGEgPSBNYXRoLm1pbiguMDUsIChmcmFtZU5vdyAtIHRoaXMubGFzdEZyYW1lKSAvIDEwMDApO1xuICAgIHRoaXMubGFzdEZyYW1lID0gZnJhbWVOb3c7XG4gICAgY29uc3QgZGVsdGEgPSByYXdEZWx0YSAqIGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXI7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkICs9IGRlbHRhO1xuICAgIHRoaXMuY29tYmF0Tm93ID0gdGhpcy5jb21iYXRFbGFwc2VkICogMTAwMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgWy4uLnRoaXMuZXhwbG9kaW5nUGxheWVyc10pIHtcbiAgICAgIGl0ZW0uYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIGlmIChpdGVtLmFjdG9yLmRpc3Bvc2VkKSB0aGlzLmV4cGxvZGluZ1BsYXllcnMuc3BsaWNlKHRoaXMuZXhwbG9kaW5nUGxheWVycy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG4gICAgdXBkYXRlRW5lbXlFeGl0RWZmZWN0cyh0aGlzLmVuZW15RXhpdEVmZmVjdHMsIGRlbHRhKTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZ2FtZVwiICYmICF0aGlzLmFjdGl2ZVRyYWNrKSByZXR1cm47XG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2spIHRoaXMuc3Bhd25UcmFja0VudGl0aWVzKCk7XG5cbiAgICBjb25zdCBndW5TdGF0dXMgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA/IGd1bkZhbWlseS5tZW1iZXJzW3RoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuLmlkXS5sYWJlbCA6IFwiTm8gd2VhcG9uXCI7XG4gICAgY29uc3Qgc2hpZWxkRGVmID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPyBzaGllbGRGYW1pbHkubWVtYmVyc1t0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZC5zaGllbGRJZF0gOiBudWxsO1xuICAgIGNvbnN0IHN3b3JkRGVmID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA/IHN3b3JkRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZC5zd29yZElkXSA6IG51bGw7XG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2spIHtcbiAgICAgIHRoaXMub25SdW5TdGF0dXM/LihgJHtndW5TdGF0dXN9JHtzaGllbGREZWYgPyBgIFx1MDBCNyAke3NoaWVsZERlZi5sYWJlbH1gIDogXCJcIn0ke3N3b3JkRGVmID8gYCBcdTAwQjcgJHtzd29yZERlZi5sYWJlbH1gIDogXCJcIn1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5lRW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoZW5lbXkgPT4gZW5lbXkubGFuZSA9PT0gdGhpcy5zcXVhZC5sYW5lICYmICFlbmVteS5keWluZyk7XG4gICAgY29uc3QgY29sT2Zmc2V0cyA9IHRoaXMuc3F1YWQuZnJvbnRSb3dDb2x1bW5PZmZzZXRzKHRoaXMuc2NhbGUoKSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChsYW5lRW5lbWllcywgdGhpcy5sYW5lWCh0aGlzLnNxdWFkLmxhbmUpLCBjb2xPZmZzZXRzLCB0aGlzLnNxdWFkLmFpbU9mZnNldCk7XG4gICAgdGhpcy5zcXVhZC5hdXRvQWltKG9mZnNldCwgdGhpcy5jYW52YXMud2lkdGggKiAuMjIsIGxhbmUgPT4gdGhpcy5sYW5lWChsYW5lKSk7XG4gICAgdGhpcy5zcXVhZC51cGRhdGUoZGVsdGEpO1xuICAgIHRoaXMuc3RhZ2VFbGVtZW50LmRhdGFzZXQuc3F1YWRMYW5lID0gU3RyaW5nKHRoaXMuc3F1YWQubGFuZSk7XG4gICAgdGhpcy5zeW5jUGxheWVyQWN0b3JzKCk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5ndW4pIHtcbiAgICAgIHRoaXMuY29vbGRvd24gLT0gZGVsdGE7XG4gICAgICBpZiAodGhpcy5jb29sZG93biA8PSAwKSB0aGlzLmZpcmUoKTtcbiAgICAgIGlmICh0aGlzLmd1blNpbXVsYXRpb24udXBkYXRlRmlyaW5nKHRoaXMuY29tYmF0Tm93KSA+IDApIHRoaXMucGxheUd1bkZpcmUodGhpcy5hY3RpdmVCeUZhbWlseS5ndW4uaWQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUHJvamVjdGlsZXMoZGVsdGEpO1xuICAgIHRoaXMudXBkYXRlTmVhclBsYXllckVmZmVjdHMoZGVsdGEsIHNoaWVsZERlZiwgc3dvcmREZWYpO1xuICAgIHRoaXMudXBkYXRlRW5lbWllcyhkZWx0YSwgc2hpZWxkRGVmKTtcbiAgICB0aGlzLnVwZGF0ZVBpY2t1cHMoZGVsdGEpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlVHJhY2sgJiYgdGhpcy50cmFja1Jlc29sdmVkKCkpIHRoaXMuZmluaXNoKHRoaXMuYnJlYWNoZXMgPT09IDApO1xuICB9XG5cbiAgcmVuZGVyKG5vdyA9IHRoaXMuY29tYmF0Tm93KTogdm9pZCB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXModGhpcy50cmFja1NjZW5lSWQsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIG5vdyk7XG4gICAgY29uc3QgcyA9IHRoaXMuc2NhbGUoKTtcblxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHMpKSB7XG4gICAgICBjb25zdCBzbWVhciA9IE1hdGgubWluKDIyICogcywgTWF0aC5hYnModGhpcy5zcXVhZC50YXJnZXRYIC0gdGhpcy5zcXVhZC54KSAqIC40NSk7XG4gICAgICBpZiAoc21lYXIgPiAyKSB7XG4gICAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgICAgeDogcG9pbnQueCAtIE1hdGguc2lnbih0aGlzLnNxdWFkLnRhcmdldFggLSB0aGlzLnNxdWFkLngpICogc21lYXIgKiAuNSxcbiAgICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICAgIHdpZHRoOiBzbWVhcixcbiAgICAgICAgICBoZWlnaHQ6IDIuMiAqIHMsXG4gICAgICAgICAgY29sb3I6IG5lb25QYWxldHRlLmRlZXBCbHVlLFxuICAgICAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS5jeWFuLFxuICAgICAgICAgIGdsb3c6IC40NSxcbiAgICAgICAgICBpbnRlbnNpdHk6IC41LFxuICAgICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWl0aXZlcy5wdXNoKC4uLnRoaXMuZ3VuU2ltdWxhdGlvbi5wcm9qZWN0aWxlUHJpbWl0aXZlcygpKTtcbiAgICBpZiAodGhpcy52aWN0b3J5KSBwcmltaXRpdmVzLnB1c2goLi4udGhpcy52aWN0b3J5LnByaW1pdGl2ZXMobm93KSk7XG5cbiAgICBjb25zdCBzaGFwZUluc3RhbmNlczogTmVvblRvcERvd25TaGFwZVtdID0gW107XG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkKSB7XG4gICAgICBjb25zdCBsaXZlU2hpZWxkID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQ7XG4gICAgICBjb25zdCBsaXZlRGVmID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbbGl2ZVNoaWVsZC5zaGllbGRJZF07XG4gICAgICBjb25zdCBzY2VuZSA9IHNoaWVsZFZpc3VhbHMoe1xuICAgICAgICBkZWZpbml0aW9uOiBsaXZlRGVmLFxuICAgICAgICBzdHJlbmd0aDogbGl2ZVNoaWVsZC5jaGFyZ2VzLFxuICAgICAgICBpbml0aWFsU3RyZW5ndGg6IGxpdmVEZWYubWF4Q2hhcmdlcyxcbiAgICAgICAgeDogdGhpcy5zcXVhZC54LFxuICAgICAgICB5OiB0aGlzLnBsYXllclkoKSxcbiAgICAgICAgbm93LFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgICAgaGl0UHJvZ3Jlc3M6IGxpdmVTaGllbGQuaGl0Rmxhc2hQcm9ncmVzcyxcbiAgICAgIH0pO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKC4uLnNjZW5lLnByaW1pdGl2ZXMpO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaCguLi5zY2VuZS5zaGFwZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCkge1xuICAgICAgY29uc3QgbGl2ZVN3b3JkID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZDtcbiAgICAgIGNvbnN0IGxpdmVEZWYgPSBzd29yZEZhbWlseS5tZW1iZXJzW2xpdmVTd29yZC5zd29yZElkXTtcbiAgICAgIGNvbnN0IHNjZW5lID0gc3dvcmRWaXN1YWxzKHtcbiAgICAgICAgZGVmaW5pdGlvbjogbGl2ZURlZixcbiAgICAgICAgc2xhc2g6IGxpdmVTd29yZC5hY3RpdmVTbGFzaCxcbiAgICAgICAgeDogdGhpcy5zcXVhZC54LFxuICAgICAgICB5OiB0aGlzLnBsYXllclkoKSxcbiAgICAgICAgc2NhbGU6IHMsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCguLi5zY2VuZS5wcmltaXRpdmVzKTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goLi4uc2NlbmUuc2hhcGVzKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLnNoaWVsZFBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBzaGllbGRGYW1pbHkubWVtYmVyc1twaWNrdXAuc2hpZWxkSWRdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChzaGllbGRQaWNrdXBWaXN1YWwoe1xuICAgICAgICB4OiBwaWNrdXAueCxcbiAgICAgICAgeTogcGlja3VwLnksXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICAgICAgbm93LFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgdGhpcy5zd29yZFBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBzd29yZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zd29yZElkXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goc3dvcmRQaWNrdXBWaXN1YWwoe1xuICAgICAgICB4OiBwaWNrdXAueCxcbiAgICAgICAgeTogcGlja3VwLnksXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICAgICAgbm93LFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWxpY29wdGVyVmlld3BvcnQgPSBoZWxpY29wdGVyVmlld3BvcnRGb3IodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5wbGF5ZXJZKCksIGxhbmVSdW5uZXJDYW1lcmFGb2N1c1godGhpcy5jYW52YXMud2lkdGgsIHRoaXMuc3F1YWQueCkpO1xuICAgIGNvbnN0IHBsYXllclNpemUgPSAxNDtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCBzKS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGFjdG9yID0gdGhpcy5wbGF5ZXJBY3RvcnNbaW5kZXhdID8/IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoYWN0b3IsIHBvaW50LngsIHBvaW50LnksIHBsYXllclNpemUsIHBsYXllck9yaWVudGF0aW9uKHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgcG9pbnQueCwgcG9pbnQueSwgbm93LCBpbmRleCkpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZXhwbG9kaW5nUGxheWVycykgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGl0ZW0uYWN0b3IsIGl0ZW0ueCwgaXRlbS55LCBwbGF5ZXJTaXplKSk7XG5cbiAgICBjb25zdCBlbmVteUhlYWx0aEJhcnM6IFBhcmFtZXRlcnM8dHlwZW9mIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcz5bMF1bbnVtYmVyXVtdID0gW107XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiB0aGlzLmVuZW1pZXMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSk7XG4gICAgICBjb25zdCBzaXplID0gMTggKiBkZWZpbml0aW9uLmNvbHVtblNwYW47XG4gICAgICBlbmVteUhlYWx0aEJhcnMucHVzaCh7IGVuZW15SWQ6IGVuZW15LmVuZW15SWQsIHg6IGVuZW15LngsIHk6IGVuZW15LnksIGhlYWx0aDogZW5lbXkuaGVhbHRoLCBtYXhIZWFsdGg6IGVuZW15Lm1heEhlYWx0aCwgc2l6ZSwgc2NhbGU6IHMgfSk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoZW5lbXkuYWN0b3IsIGVuZW15LngsIGVuZW15LnksIHNpemUsIGVuZW15T3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBlbmVteS54LCBlbmVteS55LCBub3csIGVuZW15LnJvd0lkKSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLmd1blBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGd1biA9IGd1bkZhbWlseS5tZW1iZXJzW3BpY2t1cC5ndW5JZF07XG4gICAgICBwaWNrdXAuYWN0b3IubGFiZWwgPSBzaGFwZUxhYmVsKGd1bi5sYWJlbCwgXCJhYm92ZVwiLCAxMCwgNyk7XG4gICAgICBwaWNrdXAuYWN0b3IuY29sb3IgPSBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShwaWNrdXAuYWN0b3IsIHBpY2t1cC54LCBwaWNrdXAueSwgMTUsIGJpbGxib2FyZE9yaWVudGF0aW9uKHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgcGlja3VwLngsIHBpY2t1cC55LCBub3cpKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHRoaXMubXVsdGlwbGllcnMpIHtcbiAgICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnNbcGlja3VwLm11bHRpcGxpZXJJZF07XG4gICAgICBwaWNrdXAuYWN0b3IubGFiZWwgPSBzaGFwZUxhYmVsKGAke3NwZWMuc3F1YWRBZGRlZCArIDF9eGAsIFwiY2VudGVyXCIsIDExLCAwKTtcbiAgICAgIHBpY2t1cC5hY3Rvci5jb2xvciA9IG5lb25QYWxldHRlW3NwZWMucGlja3VwQ29sb3JdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKHBpY2t1cC5hY3RvciwgcGlja3VwLngsIHBpY2t1cC55LCAxNiwgYmlsbGJvYXJkT3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBwaWNrdXAueCwgcGlja3VwLnksIG5vdykpKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0SGVsaWNvcHRlclNjZW5lKHByaW1pdGl2ZXMsIHNoYXBlSW5zdGFuY2VzLCB0aGlzLmVuZW15RXhpdEVmZmVjdHMubWFwKGVuZW15RXhpdENsb3VkKSwgdGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KTtcbiAgICBwcm9qZWN0ZWQucHJpbWl0aXZlcy5wdXNoKC4uLnByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhlbmVteUhlYWx0aEJhcnMsIHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCkpO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHByb2plY3RlZCwgbm93IC8gMTAwMCk7XG4gIH1cblxuICBzbmFwc2hvdCgpOiBOZW9uU3dhcm1TbmFwc2hvdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgIGFjdGl2ZVRyYWNrOiB0aGlzLmFjdGl2ZVRyYWNrICE9PSBudWxsLFxuICAgICAgY29tYmF0Tm93OiB0aGlzLmNvbWJhdE5vdyxcbiAgICAgIGNvbWJhdEVsYXBzZWQ6IHRoaXMuY29tYmF0RWxhcHNlZCxcbiAgICAgIHNjZW5lSWQ6IHRoaXMudHJhY2tTY2VuZUlkLFxuICAgICAgc3F1YWQ6IHtcbiAgICAgICAgbGFuZTogdGhpcy5zcXVhZC5sYW5lLFxuICAgICAgICBjb3VudDogdGhpcy5zcXVhZC5jb3VudCxcbiAgICAgICAgeDogdGhpcy5zcXVhZC54LFxuICAgICAgICB0YXJnZXRYOiB0aGlzLnNxdWFkLnRhcmdldFgsXG4gICAgICAgIGFpbU9mZnNldDogdGhpcy5zcXVhZC5haW1PZmZzZXQsXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiB7XG4gICAgICAgIGd1bjogdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPyB7IC4uLnRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuIH0gOiBudWxsLFxuICAgICAgICBzaGllbGQ6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkPy5zaGllbGRJZCA/PyBudWxsLFxuICAgICAgICBzd29yZDogdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZD8uc3dvcmRJZCA/PyBudWxsLFxuICAgICAgfSxcbiAgICAgIGVuZW1pZXM6IHRoaXMuZW5lbWllcy5tYXAoZW5lbXkgPT4gKHtcbiAgICAgICAgaWQ6IGVuZW15LmlkLFxuICAgICAgICBlbmVteUlkOiBlbmVteS5lbmVteUlkLFxuICAgICAgICBsYW5lOiBlbmVteS5sYW5lLFxuICAgICAgICB4OiBlbmVteS54LFxuICAgICAgICB5OiBlbmVteS55LFxuICAgICAgICBoZWFsdGg6IGVuZW15LmhlYWx0aCxcbiAgICAgICAgbWF4SGVhbHRoOiBlbmVteS5tYXhIZWFsdGgsXG4gICAgICAgIGR5aW5nOiBlbmVteS5keWluZyxcbiAgICAgIH0pKSxcbiAgICAgIHBpY2t1cHM6IHtcbiAgICAgICAgZ3VuczogdGhpcy5ndW5QaWNrdXBzLmxlbmd0aCxcbiAgICAgICAgc2hpZWxkczogdGhpcy5zaGllbGRQaWNrdXBzLmxlbmd0aCxcbiAgICAgICAgc3dvcmRzOiB0aGlzLnN3b3JkUGlja3Vwcy5sZW5ndGgsXG4gICAgICAgIG11bHRpcGxpZXJzOiB0aGlzLm11bHRpcGxpZXJzLmxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBraWxsczogdGhpcy5raWxscyxcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wKCk7XG4gICAgdGhpcy5yZW5kZXJlci5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduVHJhY2tFbnRpdGllcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICB3aGlsZSAoXG4gICAgICB0aGlzLm5leHRUcmFja0VudGl0eSA8IHRoaXMudHJhY2tFbnRpdGllcy5sZW5ndGggJiZcbiAgICAgIHRoaXMuZW50aXR5QXJyaXZhbFNlY29uZHModGhpcy50cmFja0VudGl0aWVzW3RoaXMubmV4dFRyYWNrRW50aXR5XSkgPD0gdGhpcy5jb21iYXRFbGFwc2VkICsgdGhpcy5zcGF3bkxlYWRTZWNvbmRzKHRoaXMudHJhY2tFbnRpdGllc1t0aGlzLm5leHRUcmFja0VudGl0eV0pXG4gICAgKSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLnRyYWNrRW50aXRpZXNbdGhpcy5uZXh0VHJhY2tFbnRpdHkrK107XG4gICAgICBjb25zdCBsYW5lOiBMYW5lID0gZW50aXR5LnNpZGUgPT09IFwibGVmdFwiID8gMCA6IDE7XG4gICAgICBjb25zdCBlbmVteURlZmluaXRpb25FbnRyeSA9IGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGVudGl0eS5pZCk7XG4gICAgICBpZiAoZW5lbXlEZWZpbml0aW9uRW50cnkpIHtcbiAgICAgICAgY29uc3QgeyBlbmVteUlkLCBkZWZpbml0aW9uIH0gPSBlbmVteURlZmluaXRpb25FbnRyeTtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goe1xuICAgICAgICAgIGlkOiArK3RoaXMuZW50aXR5SWRDb3VudGVyLFxuICAgICAgICAgIGVuZW15VHlwZTogZW5lbXlJZCxcbiAgICAgICAgICBlbmVteUlkLFxuICAgICAgICAgIGxhbmUsXG4gICAgICAgICAgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksXG4gICAgICAgICAgeTogdGhpcy5lbmVteVNwYXduWShlbnRpdHkpLFxuICAgICAgICAgIGhlYWx0aDogZGVmaW5pdGlvbi5oZWFsdGggKiB0aGlzLmFjdGl2ZVRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLFxuICAgICAgICAgIG1heEhlYWx0aDogZGVmaW5pdGlvbi5oZWFsdGggKiB0aGlzLmFjdGl2ZVRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllcixcbiAgICAgICAgICByb3dJZDogZW50aXR5LnJvd0luZGV4LFxuICAgICAgICAgIGFjdG9yOiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQpLFxuICAgICAgICAgIGR5aW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLnNwYXduU291bmQpIHRoaXMucGxheShkZWZpbml0aW9uLnNwYXduU291bmQpO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uZ3VuLlwiKSkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBlbnRpdHkuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmd1bi5cIi5sZW5ndGgpO1xuICAgICAgICBpZiAoIShjYW5kaWRhdGUgaW4gZ3VuRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBndW4gaWQgXCIke2VudGl0eS5pZH1cIi5gKTtcbiAgICAgICAgdGhpcy5zcGF3bkd1blBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWShlbnRpdHkpLCBndW5JZDogY2FuZGlkYXRlIGFzIEd1bklkLCBsZXZlbDogMSwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiKSkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBlbnRpdHkuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIi5sZW5ndGgpO1xuICAgICAgICBpZiAoIShjYW5kaWRhdGUgaW4gc2hpZWxkRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBzaGllbGQgaWQgXCIke2VudGl0eS5pZH1cIi5gKTtcbiAgICAgICAgdGhpcy5zcGF3blNoaWVsZFBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWShlbnRpdHkpLCBzaGllbGRJZDogY2FuZGlkYXRlIGFzIFNoaWVsZElkLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zd29yZC5cIikpIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gZW50aXR5LmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5zd29yZC5cIi5sZW5ndGgpO1xuICAgICAgICBpZiAoIShjYW5kaWRhdGUgaW4gc3dvcmRGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgdXNlcyB1bmtub3duIHN3b3JkIGlkIFwiJHtlbnRpdHkuaWR9XCIuYCk7XG4gICAgICAgIHRoaXMuc3Bhd25Td29yZFBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWShlbnRpdHkpLCBzd29yZElkOiBjYW5kaWRhdGUgYXMgU3dvcmRJZCwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHtcbiAgICAgICAgdGhpcy5zcGF3bk11bHRpcGxpZXJQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoZW50aXR5KSwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBlbnRpdHkgaWQgXCIke2VudGl0eS5pZH1cIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBsYW5lIHJ1bm5lci5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYWNrUmVzb2x2ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFRyYWNrRW50aXR5ID49IHRoaXMudHJhY2tFbnRpdGllcy5sZW5ndGhcbiAgICAgICYmIHRoaXMuZW5lbWllcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMuZ3VuUGlja3Vwcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMuc2hpZWxkUGlja3Vwcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMuc3dvcmRQaWNrdXBzLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgdGhpcy5tdWx0aXBsaWVycy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBwcml2YXRlIGZpcmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bikgcmV0dXJuO1xuICAgIGNvbnN0IHsgaWQ6IGd1bklkLCBsZXZlbDogZ3VuTGV2ZWwgfSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuO1xuICAgIGNvbnN0IGd1biA9IGd1bkZhbWlseS5tZW1iZXJzW2d1bklkXTtcbiAgICBjb25zdCB0dW5pbmcgPSBndW4ubGV2ZWxzLmZpbmQoaXRlbSA9PiBpdGVtLmxldmVsID09PSBndW5MZXZlbCkgPz8gZ3VuLmxldmVsc1swXTtcbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgdGhpcy5zY2FsZSgpKS5tYXAocG9pbnQgPT4gKHsgeDogcG9pbnQueCwgeTogdGhpcy5wbGF5ZXJZKCkgLSAyMCAqIHRoaXMuc2NhbGUoKSB9KSk7XG4gICAgdGhpcy5ndW5TaW11bGF0aW9uLmZpcmUoZ3VuLCB0dW5pbmcsIHRoaXMucGxheWVyTGFuZSwgcG9pbnRzLCB0aGlzLmNvbWJhdE5vdywgdGhpcy5zY2FsZSgpKTtcbiAgICB0aGlzLmNvb2xkb3duICs9IDEgLyB0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQ7XG4gICAgdGhpcy5wbGF5R3VuRmlyZShndW5JZCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb2plY3RpbGVzKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmd1blNpbXVsYXRpb24udXBkYXRlUHJvamVjdGlsZXMoZGVsdGEsIHRoaXMuY29tYmF0Tm93LCB0aGlzLmVuZW1pZXMubWFwKGVuZW15ID0+IE9iamVjdC5hc3NpZ24oZW5lbXksIHtcbiAgICAgIHJhZGl1czogdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSxcbiAgICB9KSksIHsgdG9wOiAtNDAgKiB0aGlzLnNjYWxlKCksIGxlZnQ6IC00MCwgcmlnaHQ6IHRoaXMuY2FudmFzLndpZHRoICsgNDAgfSwgKHNob3QsIGVuZW15KSA9PiB7XG4gICAgICBjb25zdCBnYW1lRW5lbXkgPSBlbmVteSBhcyBFbmVteSAmIHsgcmFkaXVzOiBudW1iZXIgfTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc29sdmVFbmVteURhbWFnZSh7XG4gICAgICAgIGVuZW15OiBnYW1lRW5lbXksXG4gICAgICAgIGVmZmVjdHM6IHRoaXMuZW5lbXlFeGl0RWZmZWN0cyxcbiAgICAgICAgaW1wYWN0TWFnbml0dWRlOiBzaG90LmRhbWFnZSArIHNob3Qua25vY2tiYWNrICogLjA2LFxuICAgICAgICBjb2xvcjogdGhpcy5lbmVteUV4aXRDb2xvcihnYW1lRW5lbXkpLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0LmtpbGxlZCkge1xuICAgICAgICB0aGlzLmtpbGxzKys7XG4gICAgICAgIHRoaXMucGxheShyZXN1bHQuZGVmaW5pdGlvbi5kZWF0aFNvdW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheShcIlByb2plY3RpbGVIaXRcIik7XG4gICAgICAgIHRoaXMucGxheShcIkVuZW15SGl0XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVOZWFyUGxheWVyRWZmZWN0cyhkZWx0YTogbnVtYmVyLCBzaGllbGREZWY6ICh0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnMpW1NoaWVsZElkXSB8IG51bGwsIHN3b3JkRGVmOiAodHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnMpW1N3b3JkSWRdIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHB4ID0gdGhpcy5zcXVhZC54O1xuICAgIGNvbnN0IHB5ID0gdGhpcy5wbGF5ZXJZKCk7XG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkICYmIHNoaWVsZERlZikge1xuICAgICAgY29uc3Qgc2hpZWxkU3RhdGUgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZDtcbiAgICAgIGNvbnN0IHNoaWVsZFRocmVhdHMgPSBxdWVyeU5lYXJieVRocmVhdHModGhpcy5lbmVtaWVzLCB7XG4gICAgICAgIG9yaWdpbjogeyB4OiBweCwgeTogcHkgfSxcbiAgICAgICAgbGFuZTogdGhpcy5wbGF5ZXJMYW5lLFxuICAgICAgICByYW5nZTogc2hpZWxkRGVmLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSxcbiAgICAgICAgaW5jbHVkZUFkamFjZW50TGFuZXM6IGZhbHNlLFxuICAgICAgICBwdXJwb3NlOiBcInNoaWVsZFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNoaWVsZFJlc3VsdCA9IHRpY2tTaGllbGQoc2hpZWxkU3RhdGUsIHNoaWVsZERlZiwgc2hpZWxkVGhyZWF0cywgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgZGVsdGEpO1xuICAgICAgaWYgKHNoaWVsZFJlc3VsdC5wdXNoRW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVuZW15IG9mIHRoaXMuZW5lbWllcykge1xuICAgICAgICAgIGlmICghc2hpZWxkUmVzdWx0LnB1c2hFbmVteUlkcy5pbmNsdWRlcyhlbmVteS5pZCkpIGNvbnRpbnVlO1xuICAgICAgICAgIGNvbnN0IGR4ID0gZW5lbXkueCAtIHB4O1xuICAgICAgICAgIGNvbnN0IGR5ID0gZW5lbXkueSAtIHB5O1xuICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgMTtcbiAgICAgICAgICBlbmVteS54ICs9IChkeCAvIGRpc3QpICogc2hpZWxkUmVzdWx0LnB1c2hEaXN0YW5jZSAqIHRoaXMuc2NhbGUoKTtcbiAgICAgICAgICBlbmVteS55ICs9IChkeSAvIGRpc3QpICogc2hpZWxkUmVzdWx0LnB1c2hEaXN0YW5jZSAqIHRoaXMuc2NhbGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXkoXCJTaGllbGRQdWxzZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGllbGRSZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4udGhpcy5lbmVtaWVzXSkge1xuICAgICAgICAgIGlmIChlbmVteS5keWluZyB8fCAhc2hpZWxkUmVzdWx0LmNvbnRhY3REYW1hZ2VFbmVteUlkcy5pbmNsdWRlcyhlbmVteS5pZCkpIGNvbnRpbnVlO1xuICAgICAgICAgIGVuZW15LmhlYWx0aCAtPSBzaGllbGRSZXN1bHQuY29udGFjdERhbWFnZUFtb3VudCAqIGRlbHRhO1xuICAgICAgICAgIGlmIChlbmVteS5oZWFsdGggPD0gMCkgdGhpcy5kZXN0cm95RW5lbXkoZW5lbXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgJiYgc3dvcmREZWYpIHtcbiAgICAgIGNvbnN0IHN3b3JkU3RhdGUgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkO1xuICAgICAgY29uc3Qgc3dvcmRUaHJlYXRzID0gcXVlcnlOZWFyYnlUaHJlYXRzKHRoaXMuZW5lbWllcywge1xuICAgICAgICBvcmlnaW46IHsgeDogcHgsIHk6IHB5IH0sXG4gICAgICAgIGxhbmU6IHRoaXMucGxheWVyTGFuZSxcbiAgICAgICAgcmFuZ2U6IHN3b3JkRGVmLnJhbmdlICogdGhpcy5zY2FsZSgpLFxuICAgICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogKHN3b3JkRGVmLnRhcmdldGluZ01vZGUgYXMgU3dvcmRUYXJnZXRpbmdNb2RlKSA9PT0gXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIsXG4gICAgICAgIG1heFRhcmdldHM6IHN3b3JkRGVmLm1heFRhcmdldHMsXG4gICAgICAgIHB1cnBvc2U6IFwic3dvcmRcIixcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3dvcmRSZXN1bHQgPSB0aWNrU3dvcmQoc3dvcmRTdGF0ZSwgc3dvcmREZWYsIHN3b3JkVGhyZWF0cywgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgZGVsdGEsIG5lb25QYWxldHRlW3N3b3JkRGVmLmNvbG9yXSk7XG4gICAgICBpZiAoc3dvcmRSZXN1bHQuc3dpbmdUcmlnZ2VyZWQgJiYgc3dvcmRSZXN1bHQuaGl0RW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBsYXlTd29yZFN3aW5nKHN3b3JkU3RhdGUuc3dvcmRJZCk7XG4gICAgICAgIGZvciAoY29uc3QgZW5lbXkgb2YgWy4uLnRoaXMuZW5lbWllc10pIHtcbiAgICAgICAgICBpZiAoZW5lbXkuZHlpbmcgfHwgIXN3b3JkUmVzdWx0LmhpdEVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzb2x2ZUVuZW15RGFtYWdlKHtcbiAgICAgICAgICAgIGVuZW15LFxuICAgICAgICAgICAgZWZmZWN0czogdGhpcy5lbmVteUV4aXRFZmZlY3RzLFxuICAgICAgICAgICAgZGFtYWdlOiBzd29yZFJlc3VsdC5kYW1hZ2UsXG4gICAgICAgICAgICBpbXBhY3RNYWduaXR1ZGU6IHN3b3JkUmVzdWx0LmRhbWFnZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmVuZW15RXhpdENvbG9yKGVuZW15KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVzdWx0LmtpbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5raWxscysrO1xuICAgICAgICAgICAgdGhpcy5wbGF5KHJlc3VsdC5kZWZpbml0aW9uLmRlYXRoU291bmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHRoaXMucGxheShcIlN3b3JkSGl0XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFbmVtaWVzKGRlbHRhOiBudW1iZXIsIHNoaWVsZERlZjogKHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycylbU2hpZWxkSWRdIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHNsb3dFbmVteUlkcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICAgIGNvbnN0IHB4ID0gdGhpcy5zcXVhZC54O1xuICAgIGNvbnN0IHB5ID0gdGhpcy5wbGF5ZXJZKCk7XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4udGhpcy5lbmVtaWVzXSkge1xuICAgICAgZW5lbXkuYWN0b3Iuc2V0VmVsb2NpdHkoMCwgMCkudXBkYXRlKGRlbHRhKTtcbiAgICAgIGNvbnN0IGVmZmVjdGl2ZSA9IHNsb3dFbmVteUlkcy5oYXMoZW5lbXkuaWQpXG4gICAgICAgID8gZW5lbXkuc3BlZWRNdWx0aXBsaWVyICogKHNoaWVsZERlZj8uc2xvd011bHRpcGxpZXIgPz8gMSlcbiAgICAgICAgOiBlbmVteS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICBlbmVteS55ICs9IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5zcGVlZCAqIGVmZmVjdGl2ZSAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhIC0gZW5lbXkuYWN0b3IueSAqIHRoaXMuY2FudmFzLmhlaWdodCAvIDIuNTtcbiAgICAgIGVuZW15LmFjdG9yLm1vdmVUbygwLCAwKTtcbiAgICAgIGlmIChlbmVteS5keWluZyAmJiBlbmVteS5hY3Rvci5kaXNwb3NlZCkge1xuICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGVuZW15LmR5aW5nKSBjb250aW51ZTtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkICYmIHNoaWVsZERlZikge1xuICAgICAgICBjb25zdCBzaGllbGRDb250YWN0ID0gcmVzb2x2ZVNoaWVsZENvbnRhY3QodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQsIHNoaWVsZERlZiwgT2JqZWN0LmFzc2lnbihlbmVteSwge1xuICAgICAgICAgIHJhZGl1czogdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSxcbiAgICAgICAgfSksIHB4LCBweSwgdGhpcy5jb21iYXROb3csIHRoaXMuc2NhbGUoKSk7XG4gICAgICAgIGlmIChzaGllbGRDb250YWN0LmFic29yYmVkKSB7XG4gICAgICAgICAgaWYgKHNoaWVsZENvbnRhY3QuZW5lbXlEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUVuZW15KGVuZW15KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5lbXkuYWN0b3IuaW1wYWN0KHsgZGlyZWN0aW9uOiB7IHg6IDAsIHk6IDEgfSwgbWFnbml0dWRlOiBzaGllbGRDb250YWN0LmRhbWFnZUFic29yYmVkIC8gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLmltcGFjdFJlc2lzdGFuY2UgfSk7XG4gICAgICAgICAgICB0aGlzLnBsYXkoXCJTaGllbGRJbXBhY3RcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpdEluZGV4ID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHRoaXMuc2NhbGUoKSkuZmluZEluZGV4KHBvaW50ID0+IE1hdGguaHlwb3QocG9pbnQueCAtIGVuZW15LngsIHBvaW50LnkgLSBlbmVteS55KSA8PSB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogMy4yKTtcbiAgICAgIGlmIChoaXRJbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHRoaXMuc2NhbGUoKSlbaGl0SW5kZXhdO1xuICAgICAgICBjb25zdCBhY3RvciA9IHRoaXMucGxheWVyQWN0b3JzW2hpdEluZGV4XSA/PyBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pO1xuICAgICAgICBhY3Rvci5leHBsb2RlTWFnbml0dWRlID0gLjU1O1xuICAgICAgICBhY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xuICAgICAgICB0aGlzLmV4cGxvZGluZ1BsYXllcnMucHVzaCh7IGFjdG9yLCB4OiBwb2ludC54LCB5OiBwb2ludC55IH0pO1xuICAgICAgICB0aGlzLnBsYXllckFjdG9ycy5zcGxpY2UoaGl0SW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNxdWFkLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgIHRoaXMucGxheShcIlBsYXllckRhbWFnZVwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiU3F1YWRNZW1iZXJMb3N0XCIpO1xuICAgICAgICBpZiAodGhpcy5zcXVhZC5jb3VudCA9PT0gMSkgdGhpcy5wbGF5KFwiTG93SGVhbHRoV2FybmluZ1wiKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJnYW1lXCIgJiYgdGhpcy5zcXVhZC5jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlYXNvbiA9IFwiVGhlIGVudGlyZSBzcXVhZCB3YXMgZGVzdHJveWVkIG9uIGNvbnRhY3QuXCI7XG4gICAgICAgICAgdGhpcy5maW5pc2goZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZW15LnkgPj0gdGhpcy5wbGF5ZXJZKCkpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJnYW1lXCIpIHtcbiAgICAgICAgICB0aGlzLmJyZWFjaGVzKys7XG4gICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICAgIHRoaXMucGxheShcIkVuZW15RXNjYXBlZFwiKTtcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZWFzb24gPSBcIkFuIGVuZW15IHBhc3NlZCB0aGUgZGVmZW5zZSBsaW5lLlwiO1xuICAgICAgICAgIHRoaXMuZmluaXNoKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZW15LnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQgKyB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogMikgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGlja3VwcyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnRoaXMuZ3VuUGlja3Vwc10pIHtcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0geyBpZDogcGlja3VwLmd1bklkLCBsZXZlbDogcGlja3VwLmxldmVsIH07XG4gICAgICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgICAgICB0aGlzLmd1blBpY2t1cHMuc3BsaWNlKHRoaXMuZ3VuUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBHdW5cIik7XG4gICAgICAgIHRoaXMucGxheShcIldlYXBvblJlYWR5XCIpO1xuICAgICAgfSBlbHNlIGlmIChwaWNrdXAueSA+IHRoaXMuY2FudmFzLmhlaWdodCkgdGhpcy5ndW5QaWNrdXBzLnNwbGljZSh0aGlzLmd1blBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5zaGllbGRQaWNrdXBzXSkge1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIGNvbnN0IGRlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zaGllbGRJZF07XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbmV3IFNoaWVsZFN0YXRlKHBpY2t1cC5zaGllbGRJZCwgZGVmLm1heENoYXJnZXMpO1xuICAgICAgICB0aGlzLnNoaWVsZFBpY2t1cHMuc3BsaWNlKHRoaXMuc2hpZWxkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTaGllbGRcIik7XG4gICAgICAgIHRoaXMucGxheShcIlNoaWVsZFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMuc2hpZWxkUGlja3Vwcy5zcGxpY2UodGhpcy5zaGllbGRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnRoaXMuc3dvcmRQaWNrdXBzXSkge1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBuZXcgU3dvcmRTdGF0ZShwaWNrdXAuc3dvcmRJZCk7XG4gICAgICAgIHRoaXMuc3dvcmRQaWNrdXBzLnNwbGljZSh0aGlzLnN3b3JkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTd29yZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLnN3b3JkUGlja3Vwcy5zcGxpY2UodGhpcy5zd29yZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5tdWx0aXBsaWVyc10pIHtcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIHRoaXMuc3F1YWQuYWRkKG11bHRpcGxpZXJGYW1pbHkubWVtYmVyc1twaWNrdXAubXVsdGlwbGllcklkXS5zcXVhZEFkZGVkKTtcbiAgICAgICAgdGhpcy5zeW5jUGxheWVyQWN0b3JzKCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGllcnMuc3BsaWNlKHRoaXMubXVsdGlwbGllcnMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwTXVsdGlwbGllclwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMubXVsdGlwbGllcnMuc3BsaWNlKHRoaXMubXVsdGlwbGllcnMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmlzaCh3b246IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICBjb25zdCB0aXRsZSA9IHdvbiA/IFwiRkxBV0xFU1MgUlVOXCIgOiBcIlRSQUNLIEZBSUxFRFwiO1xuICAgIGNvbnN0IGRldGFpbCA9IHdvbiA/IFwiTm8gZW5lbXkgdG91Y2hlZCBvciBlc2NhcGVkIHBhc3QgeW91LlwiIDogdGhpcy5mYWlsdXJlUmVhc29uIHx8IGAke3RoaXMuYnJlYWNoZXN9IGVuZW15JHt0aGlzLmJyZWFjaGVzID09PSAxID8gXCJcIiA6IFwiaWVzXCJ9IGJyZWFjaGVkIHRoZSBkZWZlbnNlLmA7XG4gICAgaWYgKHdvbikge1xuICAgICAgdGhpcy52aWN0b3J5ID0gbmV3IE5lb25WaWN0b3J5RXhwZXJpZW5jZSh7XG4gICAgICAgIGNlbnRlclg6IHRoaXMuY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgY2VudGVyWTogdGhpcy5jYW52YXMuaGVpZ2h0ICogLjM4LFxuICAgICAgICB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBwYXJ0aWNsZUNvdW50OiAxMjAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheShcIlB1enpsZUNvbXBsZXRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoXCJHYW1lT3ZlclwiKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVUcmFjayA9IG51bGw7XG4gICAgdGhpcy5vbkZpbmlzaD8uKHsgd29uLCB0aXRsZSwgZGV0YWlsLCBicmVhY2hlczogdGhpcy5icmVhY2hlcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1BsYXllckFjdG9ycygpOiB2b2lkIHtcbiAgICB3aGlsZSAodGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoIDwgdGhpcy5zcXVhZC5jb3VudCkgdGhpcy5wbGF5ZXJBY3RvcnMucHVzaChuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pKTtcbiAgICBpZiAodGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoID4gdGhpcy5zcXVhZC5jb3VudCkgdGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoID0gdGhpcy5zcXVhZC5jb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlTY2VuZUJhY2tncm91bmQoKTogdm9pZCB7XG4gICAgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kKHRoaXMuc3RhZ2VFbGVtZW50LCB0aGlzLnRyYWNrU2NlbmVJZCk7XG4gIH1cblxuICBwcml2YXRlIGVuZW15RXhpdENvbG9yKGVuZW15OiBFbmVteSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVuZW15LmFjdG9yLmNvbG9yID8/IGVuZW15LmFjdG9yLnNoYXBlLmNvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmVteURlZmluaXRpb24oZW5lbXk6IEVuZW15KTogKHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycylbT3JiSWRdIHtcbiAgICByZXR1cm4gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lFbmVteShlbmVteTogRW5lbXkpOiB2b2lkIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gZGVmZWF0RW5lbXkoZW5lbXksIHRoaXMuZW5lbXlFeGl0RWZmZWN0cywgdGhpcy5lbmVteUV4aXRDb2xvcihlbmVteSkpO1xuICAgIHRoaXMua2lsbHMrKztcbiAgICB0aGlzLnBsYXkoZGVmaW5pdGlvbi5kZWF0aFNvdW5kKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5WChlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5sYW5lWChlbnRpdHkuc2lkZSA9PT0gXCJsZWZ0XCIgPyAwIDogMSkgKyAoZW50aXR5LmxhbmVJbmRleCAtIDIgKyAoZW50aXR5LmNvbHVtblNwYW4gLSAxKSAvIDIpICogMTUgKiB0aGlzLnNjYWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGVudGl0eVNwZWVkKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiAoZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoZW50aXR5LmlkKT8uZGVmaW5pdGlvbi5zcGVlZCA/PyA3MikgKiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmVteVNwYXduWShlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJZKCkgLSB0aGlzLmVudGl0eVNwZWVkKGVudGl0eSkgKiB0aGlzLnNwYXduTGVhZFNlY29uZHMoZW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgcGlja3VwU3Bhd25ZKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBsYXllclkoKSAtIHRoaXMuZW50aXR5U3BlZWQoZW50aXR5KSAqIHRoaXMuc3Bhd25MZWFkU2Vjb25kcyhlbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGF3bkxlYWRTZWNvbmRzKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIGNvbnN0IGFycml2YWxTZWNvbmRzID0gdGhpcy5lbnRpdHlBcnJpdmFsU2Vjb25kcyhlbnRpdHkpO1xuICAgIHJldHVybiBNYXRoLm1pbihtYXhUcmFja1NwYXduTGVhZFNlY29uZHMsIGFycml2YWxTZWNvbmRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5QXJyaXZhbFNlY29uZHMoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGZpcnN0VHJhY2tSb3dBcnJpdmFsU2Vjb25kcyArIE1hdGgubWF4KDAsIGVudGl0eS5kaXN0YW5jZUZyb21QbGF5ZXIgLSAxKSAqIHRyYWNrUm93VHJhdmVsU2Vjb25kcztcbiAgfVxuXG4gIHByaXZhdGUgcGxheShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgYWx0ZXJuYXRpdmVzID0gc291bmRBbHRlcm5hdGl2ZUNvdW50c1tpZF0gPz8gMDtcbiAgICBpZiAoYWx0ZXJuYXRpdmVzID4gMCAmJiB0aGlzLnNvdW5kPy5wbGF5Um90YXRlZCkgdGhpcy5zb3VuZC5wbGF5Um90YXRlZChpZCwgYWx0ZXJuYXRpdmVzKTtcbiAgICBlbHNlIHRoaXMuc291bmQ/LnBsYXkoaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5R3VuRmlyZShndW5JZDogR3VuSWQpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoZ3VuRmlyZVNvdW5kSWRzW2d1bklkXSk7XG4gIH1cblxuICBwcml2YXRlIHBsYXlTd29yZFN3aW5nKHN3b3JkSWQ6IFN3b3JkSWQpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoc3dvcmRTd2luZ1NvdW5kSWRzW3N3b3JkSWRdKTtcbiAgfVxuXG4gIHByaXZhdGUgcGxheVBpY2t1cChpZDogXCJQaWNrdXBHdW5cIiB8IFwiUGlja3VwU2hpZWxkXCIgfCBcIlBpY2t1cFN3b3JkXCIgfCBcIlBpY2t1cE11bHRpcGxpZXJcIik6IHZvaWQge1xuICAgIHRoaXMucGxheShcIlBpY2t1cFwiKTtcbiAgICB0aGlzLnBsYXkoaWQpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGVzdFBhZ2UgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG11bHRpcGxpZXJGYW1pbHkgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgTmVvblN3YXJtU2ltdWxhdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvc2ltdWxhdGlvbi9OZW9uU3dhcm1TaW11bGF0aW9uXCI7XG5pbXBvcnQgeyBTcXVhZE1vZGVsIH0gZnJvbSBcIi4uLy4uL3NyYy9zcXVhZFwiO1xuXG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxPdXRwdXRFbGVtZW50PihcIiN0ZXN0LXN0YXR1c1wiKSE7XG5jb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MT0xpc3RFbGVtZW50PihcIiNyZXN1bHRzXCIpITtcbmNvbnN0IHJ1biA9ICgpID0+IHtcbiAgY29uc3Qgc3F1YWQgPSBuZXcgU3F1YWRNb2RlbCgpO1xuICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgY29uc3QgaW5pdGlhbCA9IHNxdWFkLmNvdW50O1xuICBzcXVhZC5hZGQoc3BlYy5zcXVhZEFkZGVkKTtcbiAgY29uc3QgYWZ0ZXJQaWNrdXAgPSBzcXVhZC5jb3VudDtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSBzcXVhZC5hZGQoc3BlYy5zcXVhZEFkZGVkKTtcbiAgY29uc3QgY2FwcGVkID0gc3F1YWQuY291bnQ7XG4gIHNxdWFkLnggPSAyMDA7XG4gIGNvbnN0IHBvaW50cyA9IHNxdWFkLnBvaW50cyg0MDAsIDEpO1xuICBjb25zdCBmaXJzdFJvdyA9IHBvaW50cy5maWx0ZXIocG9pbnQgPT4gcG9pbnQucm93ID09PSAwKTtcbiAgY29uc3QgdW5pcXVlQ29sdW1ucyA9IG5ldyBTZXQoZmlyc3RSb3cubWFwKHBvaW50ID0+IHBvaW50LngpKS5zaXplO1xuICByZXR1cm4ge1xuICAgIGluaXRpYWwsXG4gICAgYWZ0ZXJQaWNrdXAsXG4gICAgY2FwcGVkLFxuICAgIHBvaW50cyxcbiAgICBmaXJzdFJvdyxcbiAgICB1bmlxdWVDb2x1bW5zLFxuICAgIHNpbXVsdGFuZW91c1RhcmdldHM6IE1hdGgubWluKGZpcnN0Um93Lmxlbmd0aCwgNSksXG4gIH07XG59O1xuXG5jb25zdCB0ZXN0ID0gY3JlYXRlVGVzdFBhZ2UoXCJuZW9uLXN3YXJtLW11bHRpcGxpZXItZmFtaWx5LXNtb2tlXCIsIHsgc3VpdGU6IFwic21va2VcIiwgcnVuIH0sIHN0YXR1cyk7XG50ZXN0LnJlYWR5KCk7XG5jb25zdCBvdXRjb21lID0gcnVuKCk7XG5jb25zdCBhc3NlcnRpb25zID0gW1xuICBbXCJQaWNrdXAgYWRkcyBvbmUgd2luZ21hdGVcIiwgb3V0Y29tZS5hZnRlclBpY2t1cCA9PT0gb3V0Y29tZS5pbml0aWFsICsgMV0sXG4gIFtcIlNxdWFkIHJlc3BlY3RzIHRlbi1tZW1iZXIgY2FwXCIsIG91dGNvbWUuY2FwcGVkID09PSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lLm1heFNxdWFkU2l6ZV0sXG4gIFtcIkZvcm1hdGlvbiBjcmVhdGVzIHR3byBmaXZlLW1lbWJlciByb3dzXCIsIG91dGNvbWUucG9pbnRzLmxlbmd0aCA9PT0gMTAgJiYgb3V0Y29tZS5maXJzdFJvdy5sZW5ndGggPT09IDVdLFxuICBbXCJGaXJzdCByb3cgaGFzIGZpdmUgZGlzdGluY3QgZmlyaW5nIGNvbHVtbnNcIiwgb3V0Y29tZS51bmlxdWVDb2x1bW5zID09PSA1XSxcbiAgW1wiRml2ZS1tZW1iZXIgc3F1YWQgY2FuIGNvdmVyIGZpdmUgZW5lbXkgcG9zaXRpb25zXCIsIG91dGNvbWUuc2ltdWx0YW5lb3VzVGFyZ2V0cyA9PT0gNV0sXG5dIGFzIGNvbnN0O1xuXG5yZXN1bHRzLmlubmVySFRNTCA9IGFzc2VydGlvbnMubWFwKChbbmFtZSwgcGFzc2VkXSwgaW5kZXgpID0+IGBcbiAgPGxpIGRhdGEtcGFzc2VkPVwiJHtwYXNzZWR9XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XG4gICAgPHN0cm9uZz4ke25hbWV9PC9zdHJvbmc+XG4gICAgPHNwYW4+JHtwYXNzZWQgPyBcIlBBU1NcIiA6IFwiRkFJTFwifTwvc3Bhbj5cbiAgPC9saT5gKS5qb2luKFwiXCIpO1xucmVzdWx0cy5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIikuZm9yRWFjaChpdGVtID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCBzdGFydFNpbXVsYXRpb24oTnVtYmVyKGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkpKTtcbn0pO1xuZm9yIChjb25zdCBbbmFtZSwgcGFzc2VkXSBvZiBhc3NlcnRpb25zKSB0ZXN0LmFzc2VydChuYW1lLCBwYXNzZWQpO1xuXG5jb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLWNvbnRhaW5lclwiKSE7XG5jb25zdCBzaW11bGF0b3JQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltdWxhdG9yLXBhbmVsXCIpITtcbmNvbnN0IGNsb3NlU2ltQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1zaW1cIikhO1xuY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBsYXktYnRuXCIpITtcbmNvbnN0IHBhdXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZS1idG5cIikhO1xuY29uc3Qgc2ltU3RhdHVzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXN0YXR1c1wiKSE7XG5jb25zdCBzaW1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXRpdGxlXCIpITtcbmNvbnN0IHNpbURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbS1kZXRhaWxzXCIpITtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWNvbnRhaW5lclwiKSA/PyBzaW11bGF0b3JQYW5lbDtcblxubGV0IHNpbTogTmVvblN3YXJtU2ltdWxhdGlvbiB8IG51bGwgPSBudWxsO1xubGV0IGFjdGl2ZVNjZW5hcmlvSWR4ID0gMDtcbmxldCBpc1BhdXNlZCA9IGZhbHNlO1xuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVTaW11bGF0aW9uKCk6IFByb21pc2U8TmVvblN3YXJtU2ltdWxhdGlvbj4ge1xuICBzaW0gPz89IGF3YWl0IE5lb25Td2FybVNpbXVsYXRpb24uY3JlYXRlKHsgbW9kZTogXCJsYWJcIiwgY2FudmFzLCBzdGFnZUVsZW1lbnQ6IHN0YWdlIH0pO1xuICByZXR1cm4gc2ltO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFNpbXVsYXRpb24oaW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhY3RpdmVTY2VuYXJpb0lkeCA9IGluZGV4O1xuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaW11bGF0b3ItYWN0aXZlXCIpO1xuICBzaW11bGF0b3JQYW5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gIHNpbVRpdGxlLnRleHRDb250ZW50ID0gYXNzZXJ0aW9uc1tpbmRleF1bMF07XG4gIGF3YWl0IGVuc3VyZVNpbXVsYXRpb24oKTtcbiAgcmVzZXRTaW11bGF0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2ltdWxhdGlvbigpOiB2b2lkIHtcbiAgaWYgKCFzaW0pIHJldHVybjtcbiAgc2ltLnN0b3BMb29wKCk7XG4gIHNpbS5yZXNldCh7IHNpbGVudDogdHJ1ZSB9KTtcbiAgc2ltLnNldFNxdWFkTGFuZSgwKTtcbiAgaWYgKGFjdGl2ZVNjZW5hcmlvSWR4ID09PSAwKSB7XG4gICAgc2ltLnNwYXduTXVsdGlwbGllclBpY2t1cCh7IGxhbmU6IDAsIHk6IDEwMCB9KTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMjsgaW5kZXgrKykgc2ltLnNwYXduTXVsdGlwbGllclBpY2t1cCh7IGxhbmU6IDAsIHk6IDEyMCAtIGluZGV4ICogMjgsIHNwZWVkTXVsdGlwbGllcjogMiB9KTtcbiAgfSBlbHNlIGlmIChhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMikge1xuICAgIHNpbS5hZGRTcXVhZE1lbWJlcnMoOSk7XG4gIH0gZWxzZSB7XG4gICAgc2ltLmFkZFNxdWFkTWVtYmVycyg0KTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNTsgaW5kZXgrKykge1xuICAgICAgc2ltLnNwYXduRW5lbXkoeyBlbmVteUlkOiBcImJhc2ljT3JiXCIsIGxhbmU6IDAsIHg6IHNpbS5sYW5lWCgwKSArIChpbmRleCAtIDIpICogMzAsIHk6IDIxMCwgaGVhbHRoOiA5OSwgcGxheVNvdW5kOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgaXNQYXVzZWQgPSBmYWxzZTtcbiAgcGF1c2VCdG4udGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XG4gIHNpbVN0YXR1c1RleHQudGV4dENvbnRlbnQgPSBcIlBBU1NFRFwiO1xuICBzaW1TdGF0dXNUZXh0LmNsYXNzTmFtZSA9IFwic2ltLXN0YXR1c1wiO1xuICB1cGRhdGVEZXRhaWxzKCk7XG4gIHNpbS5zdGFydExvb3AoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGV0YWlscygpOiB2b2lkIHtcbiAgaWYgKCFzaW0pIHJldHVybjtcbiAgY29uc3Qgc25hcHNob3QgPSBzaW0uc25hcHNob3QoKTtcbiAgc2ltRGV0YWlscy5pbm5lckhUTUwgPSBgXG4gICAgPGR0PlNjZW5hcmlvPC9kdD48ZGQ+JHthc3NlcnRpb25zW2FjdGl2ZVNjZW5hcmlvSWR4XVswXX08L2RkPlxuICAgIDxkdD5TcXVhZCBTaXplPC9kdD48ZGQ+JHtzbmFwc2hvdC5zcXVhZC5jb3VudH0gd2luZ21hdGVzPC9kZD5cbiAgICA8ZHQ+VGltZSBFbGFwc2VkPC9kdD48ZGQ+JHtzbmFwc2hvdC5jb21iYXROb3cudG9GaXhlZCgwKX0gbXM8L2RkPlxuICAgIDxkdD5TdGF0dXM8L2R0PjxkZD5TaGFyZWQgcnVudGltZSByZXBsYXk8L2RkPlxuICBgO1xufVxuXG53aW5kb3cuc2V0SW50ZXJ2YWwodXBkYXRlRGV0YWlscywgMTUwKTtcbmNsb3NlU2ltQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNpbT8uc3RvcExvb3AoKTtcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2ltdWxhdG9yLWFjdGl2ZVwiKTtcbiAgc2ltdWxhdG9yUGFuZWwuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbn0pO1xucmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldFNpbXVsYXRpb24pO1xucGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaXNQYXVzZWQgPSAhaXNQYXVzZWQ7XG4gIHBhdXNlQnRuLnRleHRDb250ZW50ID0gaXNQYXVzZWQgPyBcIlJlc3VtZVwiIDogXCJQYXVzZVwiO1xuICBpZiAoaXNQYXVzZWQpIHNpbT8uc3RvcExvb3AoKTtcbiAgZWxzZSBzaW0/LnN0YXJ0TG9vcCgpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQU8sSUFBTSxjQUFjO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUNaOzs7QUNPQSxJQUFNLFVBQVUsQ0FBQyxPQUFlLFdBQVcsQ0FBQyxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxNQUNwRSxNQUFNLEtBQUssRUFBRSxRQUFRLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUN0QyxRQUFNLFFBQVEsV0FB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S0FBSyxhQUFhLDBCQUE0QixLQUFLLG9CQUFvQjtBQUFBLE1BQ3hGLGtCQUFrQixLQUFLO0FBQUEsTUFDdkIsR0FBRztBQUFBLElBQ0w7QUFBQSxFQUNGO0FBQ0Y7OztBQzFIQSxJQUFNLGdCQUFnQjtBQUN0QixJQUFNLHFCQUFxQjtBQUUzQixJQUFNQztBQUFBO0FBQUEsRUFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUksV0FBVyxNQUFNLENBQUM7QUFBQSxJQUMzSDtBQUFBLEVBQ0Y7QUFDQSxhQUFXO0FBQ1gsV0FBUyxjQUFjO0FBQ3ZCLGdCQUFjLGNBQWM7QUFDNUIsZ0JBQWMsWUFBWTtBQUMxQixnQkFBYztBQUNkLE1BQUksVUFBVTtBQUNoQjtBQUVBLFNBQVMsZ0JBQXNCO0FBQzdCLE1BQUksQ0FBQyxJQUFLO0FBQ1YsUUFBTSxXQUFXLElBQUksU0FBUztBQUM5QixhQUFXLFlBQVk7QUFBQSwyQkFDRSxXQUFXLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUFBLDZCQUM5QixTQUFTLE1BQU0sS0FBSztBQUFBLCtCQUNsQixTQUFTLFVBQVUsUUFBUSxDQUFDLENBQUM7QUFBQTtBQUFBO0FBRzVEO0FBRUEsT0FBTyxZQUFZLGVBQWUsR0FBRztBQUNyQyxZQUFZLGlCQUFpQixTQUFTLE1BQU07QUFDMUMsT0FBSyxTQUFTO0FBQ2QsZ0JBQWMsVUFBVSxPQUFPLGtCQUFrQjtBQUNqRCxpQkFBZSxhQUFhLFVBQVUsTUFBTTtBQUM5QyxDQUFDO0FBQ0QsVUFBVSxpQkFBaUIsU0FBUyxlQUFlO0FBQ25ELFNBQVMsaUJBQWlCLFNBQVMsTUFBTTtBQUN2QyxhQUFXLENBQUM7QUFDWixXQUFTLGNBQWMsV0FBVyxXQUFXO0FBQzdDLE1BQUksU0FBVSxNQUFLLFNBQVM7QUFBQSxNQUN2QixNQUFLLFVBQVU7QUFDdEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiY2FudmFzIiwgIndpZHRoIiwgImhlaWdodCIsICJzaGFkZXIiLCAiaGV4IiwgImNhbnZhcyIsICJoZXgiLCAic2hhZGVyIiwgImNhbnZhcyIsICJzaGFkZXIiLCAiaGV4IiwgImNhbnZhcyIsICJjb2xvcnMiLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAibGV2ZWwiLCAicmVzdWx0cyIsICJyb3RhdGlvbiIsICJlbmVteUlkRnJvbVRyYWNrSWQiLCAibGV2ZWwiXQp9Cg==

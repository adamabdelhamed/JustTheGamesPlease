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

// projects/NeonFactory/src/lane-runner-scenes.ts
var laneRunnerSceneIds = ["neonHall"];
var sceneNames = {
  neonHall: "Neon Hall"
};
function getLaneRunnerSceneName(sceneId2) {
  return sceneNames[sceneId2];
}
function isLaneRunnerSceneId(value) {
  return laneRunnerSceneIds.includes(value);
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
..E.. | ..P..
..S.. | ..K..
..b.. | .....
..L.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.2 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.85 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.85 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.9 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.9 },
      "K": { id: "pickup.weapon.gun.splitterRifle", speed: 0.95 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.95 },
      "c": { id: "pickup.weapon.sword.needleRapier", speed: 0.95 },
      "H": { id: "pickup.weapon.gun.needlerSmg" },
      "P": { id: "pickup.weapon.sword.cleaver" },
      "L": { id: "player.start" }
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

// projects/NeonSwarm/src/familyVisuals.ts
var requiredShape = (id) => {
  const shape = getNeonShape(id);
  if (!shape) throw new Error(`NeonFactory shape "${id}" is required by family visuals.`);
  return shape;
};
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
function billboardOrientation(camera, viewport, x, y, now) {
  return actorOrientation("screenBillboard", {
    camera,
    viewport,
    x,
    y,
    now
  });
}

// projects/NeonSwarm/src/shapeVisuals.ts
var swarmShapes = {
  player: getNeonShape("arrow-classic"),
  enemy: getNeonShape("hunter-eye"),
  multiplier: getNeonShape("bruiser-cross"),
  gunPickup: getNeonShape("hex-fighter")
};
var actorInTopDownScene = (actor, x, y, size, overrides = {}) => ({ ...actor.renderInstance(overrides), x, y, size });

// projects/NeonSwarm/src/viewport.ts
var defaultHelicopterCameraSettings = {
  height: 170,
  lookAngleDegrees: 20,
  followDistance: 255,
  zoom: 0.73,
  horizon: 0.54
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

// projects/NeonSwarm/src/enemyCatalog.ts
var enemyTrackId = (enemyId) => enemyId === "basicOrb" ? "enemy.basic" : `enemy.${enemyId}`;
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

// projects/NeonSwarm/test-pages/track-editor/track-editor.ts
var developer = window.JustTheGamesPlease?.urlOptions?.isEnabled("dev") ?? false;
document.querySelector("#editor").hidden = !developer;
document.querySelector("#dev-required").hidden = developer;
var laneWidth = 5;
var defaultRowCount = 25;
var empty = { id: "empty", label: "Empty", symbol: ".", family: "System" };
var playerStart = { id: "player.start", label: "Player Start", symbol: "P", family: "System" };
var paletteItems = [
  empty,
  playerStart,
  ...Object.entries(orbFamily.members).map(([id, enemy], index) => ({
    id: enemyTrackId(id),
    label: enemy.label,
    symbol: "EGWTABCDEFGHIJKLMNOPQRSTUVWXYZ"[index],
    family: "Enemies"
  })),
  ...Object.entries(gunFamily.members).map(([id, gun], index) => ({
    id: `pickup.weapon.gun.${id}`,
    label: gun.label,
    symbol: "GHIJKLMNOQRSTUVWXYZ"[index],
    family: "Guns"
  })),
  ...Object.entries(shieldFamily.members).map(([id, shield], index) => ({
    id: `pickup.weapon.shield.${id}`,
    label: shield.label,
    symbol: "SHX"[index],
    family: "Shields"
  })),
  ...Object.entries(swordFamily.members).map(([id, sword], index) => ({
    id: `pickup.weapon.sword.${id}`,
    label: sword.label,
    symbol: "abc"[index],
    family: "Swords"
  })),
  { id: "pickup.unitMultiplier.2x", label: "2x Squad", symbol: "2", family: "Items" }
];
var paletteById = new Map(paletteItems.map((item) => [item.id, item]));
var paletteFamilies = ["System", "Enemies", "Guns", "Shields", "Swords", "Items"];
var blankCell = () => ({ ...empty, speed: 1 });
var occupiedCell = (owner) => ({
  ...empty,
  id: "__occupied",
  label: "Occupied",
  symbol: "",
  family: "System",
  speed: 1,
  occupiedBy: owner
});
var blankRow = () => Array.from({ length: 2 }, () => Array.from({ length: laneWidth }, blankCell));
var cells = Array.from({ length: defaultRowCount }, blankRow);
var selected = { row: cells.length - 1, side: 0, column: 0 };
var selectedItem = empty;
var toolRevision = 0;
var selectionToolRevision = toolRevision;
var exportVariableName = "newTrack";
var exportDurationSeconds = defaultRowCount;
var loadedLegendOrder = null;
var grid = document.querySelector("#track-grid");
var gridPanel = document.querySelector(".grid-panel");
var palette = document.querySelector("#palette");
var speedInput = document.querySelector("#entity-speed");
var selectionReadout = document.querySelector("#selection");
var trackSource = document.querySelector("#track-source");
var sceneSelect = document.querySelector("#scene-select");
var gridContent = document.querySelector("#grid-content");
var laneHeadings = document.querySelector(".lane-headings");
var nearLabel = document.querySelector(".near-label");
var gridCanvas = document.querySelector("#grid-canvas");
var gridRenderError = document.querySelector("#grid-render-error");
var input = (selector) => document.querySelector(selector);
var cellAt = (selection) => grid.querySelector(`[data-row="${selection.row}"][data-side="${selection.side}"][data-column="${selection.column}"]`);
function rowCount() {
  return cells.length;
}
function normalizeSelection() {
  if (selected && selected.row >= rowCount()) selected.row = rowCount() - 1;
  if (selected && selected.row < 0) selected = rowCount() > 0 ? { row: 0, side: 0, column: 0 } : null;
}
function updateSelection() {
  normalizeSelection();
  grid.querySelectorAll(".cell.selected").forEach((cell) => cell.classList.remove("selected"));
  grid.querySelectorAll(".track-row.selected-row").forEach((row) => row.classList.remove("selected-row"));
  if (!selected) {
    selectionReadout.textContent = "Selected: none";
    return;
  }
  cellAt(selected)?.classList.add("selected");
  grid.querySelector(`[data-track-row="${selected.row}"]`)?.classList.add("selected-row");
  const distance = rowCount() - 1 - selected.row;
  selectionReadout.textContent = `Selected: row ${distance + 1} from player, ${selected.side === 0 ? "left" : "right"} lane, column ${selected.column + 1}`;
}
function renderCell(selection) {
  const value = cells[selection.row][selection.side][selection.column];
  const button = cellAt(selection);
  if (!button) return;
  button.textContent = value.symbol;
  button.dataset.id = value.id;
  button.title = value.occupiedBy ? `Occupied by ${cells[value.occupiedBy.row][value.occupiedBy.side][value.occupiedBy.column].label}` : `${value.label}${value.speed === 1 ? "" : ` - ${value.speed}x speed`}`;
}
function renderGrid() {
  grid.textContent = "";
  for (let row = 0; row < rowCount(); row++) {
    const rowElement = document.createElement("div");
    rowElement.className = "track-row";
    rowElement.dataset.trackRow = String(row);
    rowElement.innerHTML = `<span class="row-number">${rowCount() - row}</span>`;
    for (let side = 0; side < 2; side++) {
      if (side === 1) rowElement.insertAdjacentHTML("beforeend", `<span class="divider">|</span>`);
      for (let column = 0; column < laneWidth; column++) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "cell";
        button.dataset.row = String(row);
        button.dataset.side = String(side);
        button.dataset.column = String(column);
        button.setAttribute("aria-label", `Row ${rowCount() - row}, ${side === 0 ? "left" : "right"} lane, column ${column + 1}`);
        button.addEventListener("click", () => selectCell({ row, side, column }));
        button.addEventListener("dblclick", () => {
          selected = { row, side, column };
          selectionToolRevision = toolRevision;
          placeSelected();
        });
        rowElement.append(button);
      }
    }
    grid.append(rowElement);
  }
  for (let row = 0; row < rowCount(); row++) {
    for (let side = 0; side < 2; side++) {
      for (let column = 0; column < laneWidth; column++) renderCell({ row, side, column });
    }
  }
  updateSelection();
}
function selectCell(candidate) {
  const sameCell = selected?.row === candidate.row && selected.side === candidate.side && selected.column === candidate.column;
  if (sameCell && selectionToolRevision === toolRevision) {
    selected = null;
    updateSelection();
    return;
  }
  selected = candidate;
  if (sameCell && selectionToolRevision !== toolRevision) placeSelected();
  selectionToolRevision = toolRevision;
  updateSelection();
}
function placeSelected(item = selectedItem) {
  if (!selected) return;
  clearEntityAt(selected);
  const span = enemyDefinitionFromTrackId(item.id)?.definition.columnSpan ?? 1;
  if (selected.column + span > laneWidth) {
    selectionReadout.textContent = `${item.label} needs ${span} columns. Select column ${laneWidth - span + 1} or earlier.`;
    renderGrid();
    return;
  }
  for (let column = selected.column; column < selected.column + span; column++) {
    clearEntityAt({ ...selected, column });
  }
  const speed = Number(speedInput.value);
  cells[selected.row][selected.side][selected.column] = {
    ...item,
    speed: Number.isFinite(speed) && speed > 0 ? speed : 1
  };
  for (let column = selected.column + 1; column < selected.column + span; column++) {
    cells[selected.row][selected.side][column] = occupiedCell(selected);
  }
  renderGrid();
  loadedLegendOrder = null;
}
function eraseSelected() {
  if (!selected) return;
  clearEntityAt(selected);
  renderGrid();
  loadedLegendOrder = null;
}
function clearEntityAt(selection) {
  const cell = cells[selection.row][selection.side][selection.column];
  const owner = cell.occupiedBy ?? selection;
  const ownerCell = cells[owner.row][owner.side][owner.column];
  const span = enemyDefinitionFromTrackId(ownerCell.id)?.definition.columnSpan ?? 1;
  for (let column = owner.column; column < Math.min(laneWidth, owner.column + span); column++) {
    const candidate = cells[owner.row][owner.side][column];
    if (column === owner.column || candidate.occupiedBy?.row === owner.row && candidate.occupiedBy.side === owner.side && candidate.occupiedBy.column === owner.column) {
      cells[owner.row][owner.side][column] = blankCell();
    }
  }
}
function renderPalette() {
  palette.textContent = "";
  for (const family of paletteFamilies) {
    const details = document.createElement("details");
    details.open = family === "System" || family === "Enemies" || family === "Guns";
    details.className = "palette-family";
    details.innerHTML = `<summary>${family}</summary>`;
    const group = document.createElement("div");
    group.className = "palette-items";
    for (const item of paletteItems.filter((candidate) => candidate.family === family)) {
      const button = document.createElement("button");
      button.type = "button";
      button.title = item.id;
      button.innerHTML = `<span class="symbol">${item.symbol}</span><span>${item.label}</span>`;
      button.addEventListener("click", () => {
        selectedItem = item;
        toolRevision++;
        palette.querySelectorAll("button").forEach((candidate) => candidate.classList.toggle("selected", candidate === button));
      });
      group.append(button);
    }
    details.append(group);
    palette.append(details);
  }
  palette.querySelector("button").classList.add("selected");
}
function insertRow(offset) {
  const index = selected ? selected.row + offset : rowCount();
  cells.splice(index, 0, blankRow());
  selected = { row: index, side: selected?.side ?? 0, column: selected?.column ?? 0 };
  exportDurationSeconds = rowCount();
  loadedLegendOrder = null;
  renderGrid();
}
function deleteSelectedRow() {
  if (!selected || rowCount() <= 1) return;
  cells.splice(selected.row, 1);
  selected.row = Math.min(selected.row, rowCount() - 1);
  exportDurationSeconds = rowCount();
  loadedLegendOrder = null;
  renderGrid();
}
function clearGrid() {
  cells = cells.map(() => blankRow());
  loadedLegendOrder = null;
  renderGrid();
}
function sceneId() {
  return isLaneRunnerSceneId(sceneSelect.value) ? sceneSelect.value : "neonHall";
}
function loadTrack(track, exportName) {
  exportVariableName = "generatedTrack";
  exportDurationSeconds = track.durationSeconds;
  loadedLegendOrder = Object.keys(track.definition.legend);
  input("#export-name").value = exportVariableName;
  input("#display-name").value = track.label;
  input("#description").value = track.description;
  input("#enemy-hp").value = Number.isInteger(track.definition.balance.enemyHp) ? track.definition.balance.enemyHp.toFixed(1) : String(track.definition.balance.enemyHp);
  input("#enemy-speed").value = String(track.definition.balance.enemySpeed);
  sceneSelect.value = track.environment.sceneId;
  const parsedRows = track.definition.layout.split(/\r?\n/).map((row) => row.trim()).filter(Boolean);
  cells = parsedRows.map((row) => {
    const [left = "", right = ""] = row.split("|").map((side) => side.replace(/\s/g, ""));
    return [left, right].map(
      (side) => Array.from({ length: laneWidth }, (_, column) => {
        const symbol = side[column] ?? ".";
        const entry = track.definition.legend[symbol] ?? track.definition.legend["."] ?? { id: "empty" };
        const paletteItem = paletteById.get(entry.id) ?? { id: entry.id, label: entry.id, symbol, family: "Items" };
        return { ...paletteItem, symbol, speed: entry.speed ?? 1 };
      })
    );
  });
  for (let row = 0; row < cells.length; row++) {
    for (let side = 0; side < 2; side = side + 1) {
      for (let column = 0; column < laneWidth; column++) {
        const span = enemyDefinitionFromTrackId(cells[row][side][column].id)?.definition.columnSpan ?? 1;
        if (span <= 1) continue;
        if (column + span > laneWidth) continue;
        for (let offset = 1; offset < span; offset++) cells[row][side][column + offset] = occupiedCell({ row, side, column });
      }
    }
  }
  selected = { row: rowCount() - 1, side: 0, column: 0 };
  renderGrid();
}
function renderTrackSources() {
  trackSource.innerHTML = `<option value="">New blank track</option>` + Object.entries(trackFamily.members).map(([id, track]) => `<option value="${id}">${track.label}</option>`).join("");
  trackSource.addEventListener("change", () => {
    const id = trackSource.value;
    if (!id) {
      cells = Array.from({ length: defaultRowCount }, blankRow);
      exportVariableName = "newTrack";
      exportDurationSeconds = defaultRowCount;
      loadedLegendOrder = null;
      input("#export-name").value = "newTrack";
      input("#display-name").value = "New Track";
      input("#description").value = "A hand-authored Neon Swarm track.";
      input("#enemy-hp").value = "1";
      input("#enemy-speed").value = "1";
      sceneSelect.value = "neonHall";
      selected = { row: rowCount() - 1, side: 0, column: 0 };
      renderGrid();
      return;
    }
    loadTrack(trackFamily.members[id], id);
  });
}
function renderSceneOptions() {
  sceneSelect.innerHTML = laneRunnerSceneIds.map((id) => `<option value="${id}">${getLaneRunnerSceneName(id)}</option>`).join("");
  sceneSelect.value = "neonHall";
}
var quoted = (value) => JSON.stringify(value);
var safeIdentifier = (value) => {
  const cleaned = value.replace(/[^a-zA-Z0-9_$]/g, "");
  return /^[a-zA-Z_$]/.test(cleaned) ? cleaned : `track${cleaned}`;
};
function exportSource() {
  const exportName = safeIdentifier(input("#export-name").value || exportVariableName || "newTrack");
  const symbols = ".PEGHIJKLMNOQRSTUVWXYZABCDEFGHIJKLMNOQRSTUVWXYZ23456789".split("");
  const entries = /* @__PURE__ */ new Map();
  const usedSymbols = /* @__PURE__ */ new Set();
  entries.set("empty@1", { symbol: ".", value: blankCell() });
  usedSymbols.add(".");
  const symbolFor = (value) => {
    if (value.id === "__occupied") return ".";
    const key = `${value.id}@${value.speed}`;
    const existing = entries.get(key);
    if (existing) return existing.symbol;
    const preferred = value.symbol.length === 1 && !/\s|\|/.test(value.symbol) && !usedSymbols.has(value.symbol) ? value.symbol : void 0;
    const symbol = preferred ?? symbols.find((candidate) => !usedSymbols.has(candidate));
    if (!symbol) throw new Error("This track uses more distinct entity/speed combinations than the one-character layout can represent.");
    usedSymbols.add(symbol);
    entries.set(key, { symbol, value });
    return symbol;
  };
  const layout = cells.map((row) => `${row[0].map(symbolFor).join("")} | ${row[1].map(symbolFor).join("")}`).join("\n");
  const orderedEntries = [...entries.values()].sort((a, b) => {
    if (!loadedLegendOrder) return 0;
    const aIndex = loadedLegendOrder.indexOf(a.symbol);
    const bIndex = loadedLegendOrder.indexOf(b.symbol);
    return (aIndex < 0 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex < 0 ? Number.MAX_SAFE_INTEGER : bIndex);
  });
  const legend = orderedEntries.map(
    ({ symbol, value }) => `      ${quoted(symbol)}: { id: ${quoted(value.id)}${value.speed === 1 ? "" : `, speed: ${value.speed}`} },`
  ).join("\n");
  const hp = input("#enemy-hp").value || "1";
  const speed = input("#enemy-speed").value || "1";
  return {
    fileName: `${exportName}.ts`,
    source: `import type { TrackMember } from "../TrackDefinition";

export const ${exportName}: TrackMember = {
  label: ${quoted(input("#display-name").value)},
  description: ${quoted(input("#description").value)},
  durationSeconds: ${exportDurationSeconds},
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800,
  },
  environment: {
    sceneId: ${quoted(sceneId())},
  },
  definition: {
    layout: \`
${layout}
\`,
    legend: {
${legend}
    },
    balance: {
      enemyHp: ${hp},
      enemySpeed: ${speed},
    },
  },
} satisfies TrackMember;
`
  };
}
function syncGridCanvasSize() {
  const origin = gridContent.getBoundingClientRect();
  const bounds = [laneHeadings, grid, nearLabel].map((element) => element.getBoundingClientRect());
  const width = Math.max(1, Math.ceil(Math.max(...bounds.map((bound) => bound.right - origin.left))));
  const height = Math.max(1, Math.ceil(gridPanel.clientHeight));
  gridCanvas.width = width;
  gridCanvas.height = height;
  gridCanvas.style.width = `${width}px`;
  gridCanvas.style.height = `${height}px`;
  gridCanvas.style.transform = `translateY(${gridPanel.scrollTop}px)`;
  return { width, height };
}
function gridShapes(now) {
  const actors = {
    player: new NeonShapeActor({ shape: swarmShapes.player }),
    gun: new NeonShapeActor({ shape: swarmShapes.gunPickup }),
    multiplier: new NeonShapeActor({ shape: swarmShapes.multiplier })
  };
  const enemyActors = /* @__PURE__ */ new Map();
  const canvasBounds = gridCanvas.getBoundingClientRect();
  const panelBounds = gridPanel.getBoundingClientRect();
  const viewport = { width: gridCanvas.width, height: gridCanvas.height, playerY: gridCanvas.height };
  const helicopterViewport = helicopterViewportFor(viewport.width, viewport.height, viewport.playerY);
  const shapes = [];
  const cellTuning = {
    opacity: 1,
    lineThickness: 0.48,
    glow: 0.52,
    energyIntensity: 0.7,
    energyCoverage: 0.24,
    energySpeed: 0.6,
    energyBleed: 0.12
  };
  for (let row = 0; row < rowCount(); row++) {
    for (let side = 0; side < 2; side = side + 1) {
      for (let column = 0; column < laneWidth; column++) {
        const value = cells[row][side][column];
        if (value.id === "empty" || value.id === "__occupied") continue;
        const button = cellAt({ row, side, column });
        if (!button) continue;
        const bounds = button.getBoundingClientRect();
        if (bounds.bottom < panelBounds.top || bounds.top > panelBounds.bottom) continue;
        const enemyDef = enemyDefinitionFromTrackId(value.id)?.definition;
        const span = enemyDef?.columnSpan ?? 1;
        const lastButton = span > 1 ? cellAt({ row, side, column: Math.min(laneWidth - 1, column + span - 1) }) : button;
        const lastBounds = lastButton?.getBoundingClientRect() ?? bounds;
        const spanWidth = lastBounds.right - bounds.left;
        const x = (span > 1 ? bounds.left + bounds.width / 2 : bounds.left + spanWidth / 2) - canvasBounds.left;
        const y = bounds.top - canvasBounds.top + bounds.height / 2;
        const cellSize = Math.min(bounds.width, bounds.height) * 0.3;
        const size = enemyDef ? bounds.height * 0.34 : cellSize;
        if (value.id === "player.start") {
          shapes.push(actorInTopDownScene(actors.player, x, y, size, {
            ...playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now, column),
            ...cellTuning
          }));
        } else if (enemyDef) {
          let actor = enemyActors.get(value.id);
          if (!actor) {
            const shape = getNeonShape(enemyDef.shapeId);
            if (!shape) continue;
            actor = new NeonShapeActor({ shape, color: neonPalette[enemyDef.baseColor] });
            enemyActors.set(value.id, actor);
          }
          actor.color = neonPalette[enemyDef.baseColor];
          shapes.push(actorInTopDownScene(actor, x, y, size, {
            ...enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now, row),
            ...cellTuning,
            ...span > 1 ? { width: Math.min(spanWidth * 0.58, size * span * 1.8), height: size } : {}
          }));
        } else if (value.id.startsWith("pickup.weapon.gun.")) {
          const gunId = value.id.slice("pickup.weapon.gun.".length);
          const gun = gunFamily.members[gunId];
          actors.gun.color = gun ? neonPalette[gun.visualIdentity.projectileColor] : neonPalette.cyan;
          shapes.push(actorInTopDownScene(actors.gun, x, y, size, {
            ...billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now),
            ...cellTuning
          }));
        } else if (value.id.startsWith("pickup.weapon.shield.")) {
          const shieldId = value.id.slice("pickup.weapon.shield.".length);
          const shield = shieldFamily.members[shieldId];
          shapes.push({
            ...shieldPickupVisual({ x, y, now, color: shield ? neonPalette[shield.color] : neonPalette.cyan }),
            ...cellTuning,
            x,
            y,
            size
          });
        } else if (value.id.startsWith("pickup.weapon.sword.")) {
          const swordId = value.id.slice("pickup.weapon.sword.".length);
          const sword = swordFamily.members[swordId];
          shapes.push({
            ...swordPickupVisual({ x, y, now, color: sword ? neonPalette[sword.color] : neonPalette.pink }),
            ...cellTuning,
            x,
            y,
            size
          });
        } else if (value.id === "pickup.unitMultiplier.2x") {
          actors.multiplier.color = neonPalette[multiplierFamily.members.squadPlusOne.pickupColor];
          shapes.push(actorInTopDownScene(actors.multiplier, x, y, size, {
            ...billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now),
            ...cellTuning
          }));
        }
      }
    }
  }
  return shapes;
}
async function startGridRenderer() {
  let renderer = null;
  let rendererSize = { width: 0, height: 0 };
  let rendererRequest = null;
  try {
    let frame = 0;
    const ensureRenderer = async () => {
      const size = syncGridCanvasSize();
      if (renderer && rendererSize.width === size.width && rendererSize.height === size.height) return renderer;
      if (!rendererRequest) {
        renderer?.destroy();
        rendererRequest = NeonTopDownSceneRenderer.create(gridCanvas, size.width, size.height).then((created) => {
          renderer = created;
          rendererSize = size;
          return created;
        }).finally(() => {
          rendererRequest = null;
        });
      }
      return rendererRequest;
    };
    const render = (now) => {
      void ensureRenderer().then((activeRenderer) => {
        if (!activeRenderer) return;
        activeRenderer.render({ shapes: gridShapes(now) }, now / 1e3);
      }).catch((cause) => {
        gridRenderError.hidden = false;
        gridRenderError.textContent = cause instanceof Error ? cause.message : String(cause);
      });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    addEventListener("pagehide", () => {
      cancelAnimationFrame(frame);
      renderer?.destroy();
    }, { once: true });
  } catch (cause) {
    gridRenderError.hidden = false;
    gridRenderError.textContent = cause instanceof Error ? cause.message : String(cause);
  }
}
renderSceneOptions();
renderTrackSources();
renderPalette();
renderGrid();
document.querySelector("#place-cell").addEventListener("click", () => placeSelected());
document.querySelector("#erase-cell").addEventListener("click", eraseSelected);
document.querySelector("#insert-row-far").addEventListener("click", () => insertRow(0));
document.querySelector("#insert-row-near").addEventListener("click", () => insertRow(1));
document.querySelector("#delete-row").addEventListener("click", deleteSelectedRow);
document.querySelector("#clear-grid").addEventListener("click", clearGrid);
document.querySelector("#export-track").addEventListener("click", () => {
  const exported = exportSource();
  const url = URL.createObjectURL(new Blob([exported.source], { type: "text/typescript" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = exported.fileName;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
  document.querySelector("#export-status").textContent = `Generated ${exported.fileName}. Add it to CombatDefinition/tracks and register it in tracks/index.ts.`;
});
void startGridRenderer();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2syLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9mYW1pbHlWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaGFwZVZpc3VhbHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy92aWV3cG9ydC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2VuZW15RXhpdFZpc3VhbHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUNhdGFsb2cudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3Rlc3QtcGFnZXMvdHJhY2stZWRpdG9yL3RyYWNrLWVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24sIE5lb25Qb2ludCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlTGFiZWxQb3NpdGlvbiA9IFwiYWJvdmVcIiB8IFwiYmVsb3dcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlTGFiZWwge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogTmVvblNoYXBlTGFiZWxQb3NpdGlvbjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICBjb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHNjYWxlWD86IG51bWJlcjtcbiAgc2NhbGVZPzogbnVtYmVyO1xuICByb3RhdGlvblg/OiBudW1iZXI7XG4gIHJvdGF0aW9uWT86IG51bWJlcjtcbiAgcm90YXRpb25aPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBzaGllbGRlZD86IGJvb2xlYW47XG4gIGxpbmVUaGlja25lc3M/OiBudW1iZXI7XG4gIGVuZXJneUludGVuc2l0eT86IG51bWJlcjtcbiAgZW5lcmd5Q292ZXJhZ2U/OiBudW1iZXI7XG4gIGVuZXJneVNwZWVkPzogbnVtYmVyO1xuICBlbmVyZ3lCbGVlZD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZW50cmFuY2VQcm9ncmVzcz86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGV4cGxvZGVQcm9ncmVzcz86IG51bWJlcjtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbn1cblxudHlwZSBWMyA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbnR5cGUgVmVydGV4ID0ge1xuICBwOiBWMzsgbjogVjM7IGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07IGdsb3c6IG51bWJlcjtcbiAgZWZmZWN0OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBmbG9hdHNQZXJWZXJ0ZXggPSAxNDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBTY2VuZSB7IGFzcGVjdDogZjMyLCBjYW1lcmE6IGYzMiwgdGltZTogZjMyLCBwYWRkaW5nOiBmMzIgfVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5zdHJ1Y3QgSW5wdXQge1xuICBAbG9jYXRpb24oMCkgcG9zaXRpb246IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDMpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDQpIGVmZmVjdDogdmVjNGYsXG59XG5zdHJ1Y3QgT3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBlZmZlY3Q6IHZlYzRmLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKGlucHV0OiBJbnB1dCkgLT4gT3V0cHV0IHtcbiAgbGV0IGRlcHRoID0gc2NlbmUuY2FtZXJhIC0gaW5wdXQucG9zaXRpb24uejtcbiAgdmFyIG91dHB1dDogT3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihpbnB1dC5wb3NpdGlvbi54ICogNCAvIHNjZW5lLmFzcGVjdCwgaW5wdXQucG9zaXRpb24ueSAqIDQsIGRlcHRoICogLjA0NSwgZGVwdGgpO1xuICBvdXRwdXQubm9ybWFsID0gaW5wdXQubm9ybWFsO1xuICBvdXRwdXQuY29sb3IgPSBpbnB1dC5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpbnB1dC5nbG93O1xuICBvdXRwdXQuZWZmZWN0ID0gaW5wdXQuZWZmZWN0O1xuICByZXR1cm4gb3V0cHV0O1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKGlucHV0Lm5vcm1hbCk7XG4gIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtLjQ1LCAtLjcsIDEpKTtcbiAgbGV0IGRpZmZ1c2UgPSAuMTggKyBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKSAqIC44MjtcbiAgbGV0IHJpbSA9IHBvdygxIC0gYWJzKG5vcm1hbC56KSwgMi4yKTtcbiAgbGV0IHNpZGUgPSAxIC0gYWJzKG5vcm1hbC56KTtcbiAgbGV0IHJhcmVTdXJnZSA9IHBvdyhtYXgoLjAsIHNpbihzY2VuZS50aW1lICogaW5wdXQuZWZmZWN0LnogKiAuODIgKyBpbnB1dC5jb2xvci5yICogNy4wKSksIDIyLjApXG4gICAgKiBpbnB1dC5lZmZlY3QueCAqIGlucHV0LmVmZmVjdC55ICogaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBlbmVyZ3kgPSBpbnB1dC5jb2xvciAqIChkaWZmdXNlICogLjEyICsgcmltICogaW5wdXQuZ2xvdyAqIC4zNiArIHNpZGUgKiAuMDggKyByYXJlU3VyZ2UgKiAuNyk7XG4gIHJldHVybiB2ZWM0ZihlbmVyZ3kgKyB2ZWMzZihyYXJlU3VyZ2UgKiAuMTgpLCAuMTIgKyBzaWRlICogLjEyICsgcmFyZVN1cmdlICogLjI4KTtcbn1cbkBmcmFnbWVudCBmbiBsaW5lRnJhZ21lbnQoaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGFsb25nID0gaW5wdXQubm9ybWFsLng7XG4gIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubm9ybWFsLnkpO1xuICBsZXQgcGhhc2UgPSBpbnB1dC5ub3JtYWwuejtcbiAgbGV0IGludGVuc2l0eSA9IGlucHV0LmVmZmVjdC54O1xuICBsZXQgY292ZXJhZ2UgPSBpbnB1dC5lZmZlY3QueTtcbiAgbGV0IHNwZWVkID0gaW5wdXQuZWZmZWN0Lno7XG4gIGxldCBibGVlZCA9IGlucHV0LmVmZmVjdC53O1xuICBsZXQgcHVsc2VBID0gcG93KG1heCguMCwgc2luKGFsb25nICogMzEuMCAtIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDUuNCArIHBoYXNlKSksIDEwLjApO1xuICBsZXQgcHVsc2VCID0gcG93KG1heCguMCwgc2luKGFsb25nICogMTMuMCArIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDMuMSArIHBoYXNlICogMi43KSksIDE4LjApO1xuICBsZXQgbm9pc2UgPSBzaW4oYWxvbmcgKiA3MS4wICsgcGhhc2UgKiA4LjMpICogLjUgKyAuNTtcbiAgbGV0IHRocmVzaG9sZCA9IDEuMCAtIGNvdmVyYWdlO1xuICBsZXQgZWxlY3RyaWNpdHkgPSBzbW9vdGhzdGVwKHRocmVzaG9sZCwgdGhyZXNob2xkICsgLjE4LCBwdWxzZUEgKiAuNjUgKyBwdWxzZUIgKiAuNTUgKyBub2lzZSAqIC4xOCk7XG4gIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCguMDYsIC4yOCwgYWNyb3NzKTtcbiAgbGV0IGhhbG8gPSAxLjAgLSBzbW9vdGhzdGVwKC4xMiwgMS4wLCBhY3Jvc3MpO1xuICBsZXQgc3VyZ2UgPSBlbGVjdHJpY2l0eSAqIGludGVuc2l0eTtcbiAgbGV0IHB1bHNlID0gLjc4ICsgc2luKHNjZW5lLnRpbWUgKiBzcGVlZCAqIDIuMSArIHBoYXNlKSAqIC4xMyArIGVsZWN0cmljaXR5ICogLjI0O1xuICBsZXQgY2xvdWQgPSBoYWxvICogKC4xMyArIHN1cmdlICogLjUyKTtcbiAgbGV0IGhvdCA9IGlucHV0LmNvbG9yICogKHB1bHNlICsgY2xvdWQgKiAyLjEpICogaW5wdXQuZ2xvdyArIHZlYzNmKGNvcmUgKiBzdXJnZSAqIDEuMzUpO1xuICBsZXQgYWxwaGEgPSAoY29yZSAqICguNzIgKyBwdWxzZSAqIC4yKSArIGNsb3VkICsgKDEuMCAtIGFjcm9zcykgKiBibGVlZCAqIGVsZWN0cmljaXR5ICogLjI0KSAqIGlucHV0Lmdsb3c7XG4gIHJldHVybiB2ZWM0Zihob3QsIGNsYW1wKGFscGhhLCAwLjAsIDEuMCkpO1xufWA7XG5cbmNvbnN0IGhleCA9ICh2YWx1ZTogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgcmF3ID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IHN1YiA9IChhOiBWMywgYjogVjMpOiBWMyA9PiBbYVswXSAtIGJbMF0sIGFbMV0gLSBiWzFdLCBhWzJdIC0gYlsyXV07XG5jb25zdCBjcm9zcyA9IChhOiBWMywgYjogVjMpOiBWMyA9PiBbYVsxXSpiWzJdLWFbMl0qYlsxXSwgYVsyXSpiWzBdLWFbMF0qYlsyXSwgYVswXSpiWzFdLWFbMV0qYlswXV07XG5jb25zdCBub3JtYWxpemUgPSAodjogVjMpOiBWMyA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoLi4udikgfHwgMTtcbiAgcmV0dXJuIFt2WzBdIC8gbGVuZ3RoLCB2WzFdIC8gbGVuZ3RoLCB2WzJdIC8gbGVuZ3RoXTtcbn07XG5jb25zdCByb3RhdGUgPSAoW3gsIHksIHpdOiBWMywgcng6IG51bWJlciwgcnk6IG51bWJlciwgcno6IG51bWJlcik6IFYzID0+IHtcbiAgbGV0IGEgPSB5ICogTWF0aC5jb3MocngpIC0geiAqIE1hdGguc2luKHJ4KSwgYiA9IHkgKiBNYXRoLnNpbihyeCkgKyB6ICogTWF0aC5jb3MocngpOyB5ID0gYTsgeiA9IGI7XG4gIGEgPSB4ICogTWF0aC5jb3MocnkpICsgeiAqIE1hdGguc2luKHJ5KTsgYiA9IC14ICogTWF0aC5zaW4ocnkpICsgeiAqIE1hdGguY29zKHJ5KTsgeCA9IGE7IHogPSBiO1xuICByZXR1cm4gW3ggKiBNYXRoLmNvcyhyeikgLSB5ICogTWF0aC5zaW4ocnopLCB4ICogTWF0aC5zaW4ocnopICsgeSAqIE1hdGguY29zKHJ6KSwgel07XG59O1xuXG5mdW5jdGlvbiBtZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3Qgc2NhbGVYID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVYID8/IDEpO1xuICBjb25zdCBzY2FsZVkgPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVkgPz8gMSk7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IGVudHJhbmNlT2Zmc2V0ID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IFYzID0+IHtcbiAgICBpZiAoZW50cmFuY2VQcm9ncmVzcyA+PSAxKSByZXR1cm4gWzAsIDAsIDBdO1xuICAgIGNvbnN0IHNlZWQgPSBNYXRoLnNpbihpbmRleCAqIDkxLjE3ICsgcG9pbnRbMF0gKiAzNy4yICsgcG9pbnRbMV0gKiA1My43ICsgeiAqIDI5LjEpICogNDM3NTguNTQ1MztcbiAgICBjb25zdCByYW5kb20gPSBzZWVkIC0gTWF0aC5mbG9vcihzZWVkKTtcbiAgICBjb25zdCBhbmdsZSA9IHJhbmRvbSAqIE1hdGguUEkgKiAyO1xuICAgIGNvbnN0IHJhZGl1cyA9IChpbnN0YW5jZS5lbnRyYW5jZU1hZ25pdHVkZSA/PyBpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAoMSAtIGVudHJhbmNlRWFzZSkgKiAoLjM1ICsgcmFuZG9tICogLjc1KTtcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLCAocmFuZG9tIC0gLjUpICogcmFkaXVzICogLjU1XTtcbiAgfTtcbiAgY29uc3QgbW92ZSA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4ID0gMCk6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlWCwgLXBvaW50WzFdICogc2NhbGVZLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICBjb25zdCBlID0gZW50cmFuY2VPZmZzZXQocG9pbnQsIHosIGluZGV4KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSArIGVbMF0sIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSArIGVbMV0sIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKSArIGVbMl1dO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGNvbnN0IGFkZCA9IChhOiBWMywgYjogVjMsIGM6IFYzLCBub3JtYWw/OiBWMykgPT4ge1xuICAgIGNvbnN0IG4gPSBub3JtYWwgPz8gbm9ybWFsaXplKGNyb3NzKHN1YihiLCBhKSwgc3ViKGMsIGEpKSk7XG4gICAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICAgIF07XG4gICAgW2EsYixjXS5mb3JFYWNoKHAgPT4gb3V0cHV0LnB1c2goeyBwLCBuLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqIGVudHJhbmNlRWFzZSwgZWZmZWN0IH0pKTtcbiAgfTtcbiAgY29uc3QgZnJvbnQgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIGRlcHRoIC8gMiwgaW5kZXgpKTtcbiAgY29uc3QgYmFjayA9IHNoYXBlLnBvaW50cy5tYXAoKHBvaW50LCBpbmRleCkgPT4gbW92ZShwb2ludCwgLWRlcHRoIC8gMiwgaW5kZXggKyBzaGFwZS5wb2ludHMubGVuZ3RoKSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnQubGVuZ3RoIC0gMTsgaSsrKSBhZGQoZnJvbnRbMF0sIGZyb250W2ldLCBmcm9udFtpICsgMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGJhY2subGVuZ3RoIC0gMTsgaSsrKSBhZGQoYmFja1swXSwgYmFja1tpICsgMV0sIGJhY2tbaV0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSAoaSArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aDtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbaV0sIGJhY2tbbmV4dF0pO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tuZXh0XSwgZnJvbnRbbmV4dF0pO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gZWRnZU1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCBzY2FsZVggPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVggPz8gMSk7XG4gIGNvbnN0IHNjYWxlWSA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWSA/PyAxKTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgZW50cmFuY2VQcm9ncmVzcyA9IGluc3RhbmNlLmVudHJhbmNlUHJvZ3Jlc3MgPz8gMTtcbiAgY29uc3QgZW50cmFuY2VFYXNlID0gZW50cmFuY2VQcm9ncmVzcyAqIGVudHJhbmNlUHJvZ3Jlc3MgKiAoMyAtIDIgKiBlbnRyYW5jZVByb2dyZXNzKTtcbiAgY29uc3QgbW92ZSA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZVgsIC1wb2ludFsxXSAqIHNjYWxlWSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCksIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApXTtcbiAgfTtcbiAgY29uc3QgZXhwbG9kZSA9IChhOiBWMywgYjogVjMsIGluZGV4OiBudW1iZXIpOiBbVjMsIFYzXSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCwgMSAtIGVudHJhbmNlRWFzZSk7XG4gICAgaWYgKCFwcm9ncmVzcykgcmV0dXJuIFthLCBiXTtcbiAgICBjb25zdCBteCA9IChhWzBdICsgYlswXSkgLyAyIC0gKGluc3RhbmNlLnggPz8gMCksIG15ID0gKGFbMV0gKyBiWzFdKSAvIDIgLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KG14LCBteSkgfHwgMTtcbiAgICBjb25zdCBtYWduaXR1ZGUgPSBpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICBjb25zdCBzcGVlZCA9IG1hZ25pdHVkZSAqICguNDUgKyAoTWF0aC5zaW4oaW5kZXggKiA5MS4xNykgKiAuNSArIC41KSAqIC41NSk7XG4gICAgY29uc3QgZHggPSBteCAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQsIGR5ID0gbXkgLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkICsgcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqIC4xODtcbiAgICBjb25zdCBhbmdsZSA9IHByb2dyZXNzICogKGluZGV4ICUgMiA/IDEgOiAtMSkgKiAyLjQ7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKHA6IFYzKTogVjMgPT4ge1xuICAgICAgY29uc3QgeCA9IHBbMF0gLSAoaW5zdGFuY2UueCA/PyAwKSwgeSA9IHBbMV0gLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICAgIHJldHVybiBbeCAqIE1hdGguY29zKGFuZ2xlKSAtIHkgKiBNYXRoLnNpbihhbmdsZSkgKyAoaW5zdGFuY2UueCA/PyAwKSArIGR4LCB4ICogTWF0aC5zaW4oYW5nbGUpICsgeSAqIE1hdGguY29zKGFuZ2xlKSArIChpbnN0YW5jZS55ID8/IDApICsgZHksIHBbMl1dO1xuICAgIH07XG4gICAgcmV0dXJuIFt0cmFuc2Zvcm0oYSksIHRyYW5zZm9ybShiKV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgbGV0IGRpc3RhbmNlID0gMDtcbiAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gIF07XG4gIGNvbnN0IGFkZExpbmUgPSAoYTogVjMsIGI6IFYzLCBwaGFzZTogbnVtYmVyLCB3aWR0aFNjYWxlID0gMSwgb3BhY2l0eSA9IDEpID0+IHtcbiAgICBbYSwgYl0gPSBleHBsb2RlKGEsIGIsIE1hdGguZmxvb3IoZGlzdGFuY2UgKiAxMDApICsgTWF0aC5mbG9vcihwaGFzZSAqIDEwKSk7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgLjAwMTtcbiAgICBjb25zdCB3aWR0aCA9IChpbnN0YW5jZS5saW5lVGhpY2tuZXNzID8/IDEpICogLjAxOCAqIHdpZHRoU2NhbGU7XG4gICAgY29uc3Qgb3ggPSAtZHkgLyBsZW5ndGggKiB3aWR0aCwgb3kgPSBkeCAvIGxlbmd0aCAqIHdpZHRoO1xuICAgIGNvbnN0IGEwOiBWMyA9IFthWzBdIC0gb3gsIGFbMV0gLSBveSwgYVsyXV0sIGExOiBWMyA9IFthWzBdICsgb3gsIGFbMV0gKyBveSwgYVsyXV07XG4gICAgY29uc3QgYjA6IFYzID0gW2JbMF0gLSBveCwgYlsxXSAtIG95LCBiWzJdXSwgYjE6IFYzID0gW2JbMF0gKyBveCwgYlsxXSArIG95LCBiWzJdXTtcbiAgICBjb25zdCBzdGFydCA9IGRpc3RhbmNlICogMi40LCBlbmQgPSAoZGlzdGFuY2UgKyBsZW5ndGgpICogMi40O1xuICAgIGNvbnN0IHB1c2ggPSAocDogVjMsIGFsb25nOiBudW1iZXIsIGFjcm9zczogbnVtYmVyKSA9PlxuICAgICAgb3V0cHV0LnB1c2goeyBwLCBuOiBbYWxvbmcsIGFjcm9zcywgcGhhc2VdLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiBvcGFjaXR5ICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UgKiAoMSArIE1hdGguc2luKChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiBNYXRoLlBJKSAqIChpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAyLjIpICogKDEgLSAoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogLjcpLCBlZmZlY3QgfSk7XG4gICAgcHVzaChhMCxzdGFydCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjAsZW5kLC0xKTtcbiAgICBwdXNoKGIwLGVuZCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjEsZW5kLDEpO1xuICAgIGRpc3RhbmNlICs9IGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgYWRkTG9vcCA9IChwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLCB6OiBudW1iZXIsIHBoYXNlOiBudW1iZXIpID0+XG4gICAgcG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCB6KSwgbW92ZShwb2ludHNbKGluZGV4ICsgMSkgJSBwb2ludHMubGVuZ3RoXSwgeiksIHBoYXNlICsgaW5kZXggKiAuNzMpKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIGRlcHRoIC8gMiwgLjMpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgLWRlcHRoIC8gMiwgMi4xKTtcbiAgc2hhcGUuaG9sZXM/LmZvckVhY2goKGhvbGUsIGluZGV4KSA9PiB7XG4gICAgYWRkTG9vcChob2xlLCBkZXB0aCAvIDIgKyAuMDAyLCAzLjcgKyBpbmRleCk7XG4gICAgYWRkTG9vcChob2xlLCAtZGVwdGggLyAyIC0gLjAwMiwgNS4yICsgaW5kZXgpO1xuICB9KTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCAtZGVwdGggLyAyKSwgbW92ZShwb2ludCwgZGVwdGggLyAyKSwgNi4xICsgaW5kZXgpKTtcbiAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCAqIChpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxKTtcbiAgY29uc3QgYnJhbmNoU3RyZW5ndGggPSAoaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEpICogKGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMik7XG4gIGNvbnN0IHJhbmRvbSA9IChzZWVkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hdGguc2luKHNlZWQgKiAxMi45ODk4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCAqIDc4LjIzMykgKiA0Mzc1OC41NDUzO1xuICAgIHJldHVybiB2YWx1ZSAtIE1hdGguZmxvb3IodmFsdWUpO1xuICB9O1xuICBjb25zdCByb3RhdGVkID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpYW5zOiBudW1iZXIpOiBOZW9uUG9pbnQgPT4gW1xuICAgIHggKiBNYXRoLmNvcyhyYWRpYW5zKSAtIHkgKiBNYXRoLnNpbihyYWRpYW5zKSxcbiAgICB4ICogTWF0aC5zaW4ocmFkaWFucykgKyB5ICogTWF0aC5jb3MocmFkaWFucyksXG4gIF07XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjeWNsZSA9IE1hdGguZmxvb3IodGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSk7XG4gICAgY29uc3QgYWdlID0gdGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSAtIGN5Y2xlO1xuICAgIGNvbnN0IHNlZWQgPSBjeWNsZSAqIDM3LjEgKyBpbmRleCAqIDExLjc7XG4gICAgY29uc3QgYWN0aXZlRHVyYXRpb24gPSAuMTggKyByYW5kb20oc2VlZCArIDEpICogLjI1O1xuICAgIGNvbnN0IGhhemVEdXJhdGlvbiA9IE1hdGgubWluKDEsIGFjdGl2ZUR1cmF0aW9uICsgLjI4ICsgcmFuZG9tKHNlZWQgKyAyKSAqIC4yMik7XG4gICAgY29uc3QgYnJhbmNoQWN0aXZlID0gYWdlIDwgYWN0aXZlRHVyYXRpb247XG4gICAgY29uc3QgaGF6ZUFjdGl2ZSA9IGFnZSA8IGhhemVEdXJhdGlvbjtcbiAgICBpZiAoKCFicmFuY2hBY3RpdmUgJiYgIWhhemVBY3RpdmUpIHx8IHJhbmRvbShzZWVkICsgMykgPiBNYXRoLm1pbiguNzgsIGJyYW5jaFN0cmVuZ3RoICogLjUpKSByZXR1cm47XG4gICAgY29uc3QgbmV4dCA9IHNoYXBlLnBvaW50c1soaW5kZXggKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGhdO1xuICAgIGNvbnN0IHQgPSAuMTYgKyByYW5kb20oc2VlZCArIDQpICogLjY4O1xuICAgIGNvbnN0IGJhc2U6IE5lb25Qb2ludCA9IFtwb2ludFswXSArIChuZXh0WzBdIC0gcG9pbnRbMF0pICogdCwgcG9pbnRbMV0gKyAobmV4dFsxXSAtIHBvaW50WzFdKSAqIHRdO1xuICAgIGNvbnN0IHR4ID0gbmV4dFswXSAtIHBvaW50WzBdLCB0eSA9IG5leHRbMV0gLSBwb2ludFsxXSwgdGwgPSBNYXRoLmh5cG90KHR4LCB0eSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSByYW5kb20oc2VlZCArIDUpID4gLjUgPyAxIDogLTE7XG4gICAgY29uc3QgcGVycGVuZGljdWxhcjogTmVvblBvaW50ID0gWy10eSAvIHRsICogZGlyZWN0aW9uLCB0eCAvIHRsICogZGlyZWN0aW9uXTtcbiAgICBjb25zdCBmaXJzdEppdHRlciA9ICgxMCArIHJhbmRvbShzZWVkICsgNikgKiAxMCkgKiBNYXRoLlBJIC8gMTgwICogKHJhbmRvbShzZWVkICsgNykgPiAuNSA/IDEgOiAtMSk7XG4gICAgbGV0IGhlYWRpbmcgPSByb3RhdGVkKHBlcnBlbmRpY3VsYXJbMF0sIHBlcnBlbmRpY3VsYXJbMV0sIGZpcnN0Sml0dGVyKTtcbiAgICBjb25zdCBzZWdtZW50Q291bnQgPSAxICsgTWF0aC5mbG9vcihyYW5kb20oc2VlZCArIDgpICogMyk7XG4gICAgY29uc3QgcG9pbnRzOiBOZW9uUG9pbnRbXSA9IFtiYXNlXTtcbiAgICBmb3IgKGxldCBzZWdtZW50ID0gMDsgc2VnbWVudCA8IHNlZ21lbnRDb3VudDsgc2VnbWVudCsrKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSAuMDU1ICsgcmFuZG9tKHNlZWQgKyAxMCArIHNlZ21lbnQpICogLjA5NTtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIHBvaW50cy5wdXNoKFtwcmV2aW91c1swXSArIGhlYWRpbmdbMF0gKiBsZW5ndGgsIHByZXZpb3VzWzFdICsgaGVhZGluZ1sxXSAqIGxlbmd0aF0pO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKDIwICsgcmFuZG9tKHNlZWQgKyAyMCArIHNlZ21lbnQpICogNDApICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGhlYWRpbmcgPSByb3RhdGVkKGhlYWRpbmdbMF0sIGhlYWRpbmdbMV0sIG9mZnNldCAqIChyYW5kb20oc2VlZCArIDMwICsgc2VnbWVudCkgPiAuNSA/IDEgOiAtMSkpO1xuICAgIH1cbiAgICBpZiAoaGF6ZUFjdGl2ZSkge1xuICAgICAgY29uc3QgZmFkZSA9IDEgLSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgLyBNYXRoLm1heCguMDAxLCBoYXplRHVyYXRpb24gLSBhY3RpdmVEdXJhdGlvbik7XG4gICAgICBjb25zdCBkcmlmdCA9IE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAqIC4wMzU7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHBvaW50c1tzZWdtZW50ICsgMV07XG4gICAgICAgIGNvbnN0IGhhemVTdGFydDogTmVvblBvaW50ID0gW3N0YXJ0WzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBzdGFydFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGNvbnN0IGhhemVFbmQ6IE5lb25Qb2ludCA9IFtlbmRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIGVuZFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGFkZExpbmUobW92ZShoYXplU3RhcnQsIGRlcHRoIC8gMiArIC4wMDIpLCBtb3ZlKGhhemVFbmQsIGRlcHRoIC8gMiArIC4wMDIpLCAzMSArIHNlZWQgKyBzZWdtZW50LCAxLjQ1ICsgZmFkZSAqIC41NSwgZmFkZSAqIC4zNCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJyYW5jaEFjdGl2ZSkge1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBhZGRMaW5lKG1vdmUoc3RhcnQsIGRlcHRoIC8gMiArIC4wMDYpLCBtb3ZlKHBvaW50c1tzZWdtZW50ICsgMV0sIGRlcHRoIC8gMiArIC4wMDYpLCAxMSArIHNlZWQgKyBzZWdtZW50LCAuNDIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjbGluZVBpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNkZXB0aDogR1BVVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAjbGFiZWxMYXllcjogSFRNTERpdkVsZW1lbnQ7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgcGFyZW50ID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCAmJiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0aGlzLiNsYWJlbExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLiNsYWJlbExheWVyLmNsYXNzTmFtZSA9IFwibmVvbi1zaGFwZS1sYWJlbC1sYXllclwiO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwgeyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGluc2V0OlwiMFwiLCBwb2ludGVyRXZlbnRzOlwibm9uZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiIH0pO1xuICAgIHBhcmVudD8uYXBwZW5kKHRoaXMuI2xhYmVsTGF5ZXIpO1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IGV4dHJ1ZGVkIHNoYXBlIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiLCBjdWxsTW9kZTogXCJiYWNrXCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IGZhbHNlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jbGluZVBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwibGluZUZyYWdtZW50XCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgICB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IHRydWUsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IHNoYXBlIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGluc3RhbmNlcy5mbGF0TWFwKG1lc2gpO1xuICAgIGNvbnN0IGVkZ2VzID0gaW5zdGFuY2VzLmZsYXRNYXAoZWRnZU1lc2gpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgY29uc3QgZWRnZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGVkZ2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBkYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGVkZ2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZWRnZURhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGNvbnN0IGVkZ2VCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBlZGdlRGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmZmVyLCAwLCBkYXRhKTtcbiAgICBpZiAoZWRnZURhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihlZGdlQnVmZmVyLCAwLCBlZGdlRGF0YSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCA1LCBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIDBdKSk7XG4gICAgY29uc3QgYmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBsaW5lQmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNsaW5lUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7IHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSwgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLCBzdG9yZU9wOiBcInN0b3JlXCIgfV0sXG4gICAgICBkZXB0aFN0ZW5jaWxBdHRhY2htZW50OiB7IHZpZXc6IHRoaXMuI2RlcHRoIS5jcmVhdGVWaWV3KCksIGRlcHRoQ2xlYXJWYWx1ZTogMSwgZGVwdGhMb2FkT3A6IFwiY2xlYXJcIiwgZGVwdGhTdG9yZU9wOiBcInN0b3JlXCIgfSxcbiAgICB9KTtcbiAgICBpZiAodmVydGljZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBiaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpOyBwYXNzLmRyYXcodmVydGljZXMubGVuZ3RoKTsgfVxuICAgIGlmIChlZGdlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNsaW5lUGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBsaW5lQmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgZWRnZUJ1ZmZlcik7IHBhc3MuZHJhdyhlZGdlcy5sZW5ndGgpOyB9XG4gICAgcGFzcy5lbmQoKTsgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgdGhpcy4jcmVuZGVyTGFiZWxzKGluc3RhbmNlcyk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUub25TdWJtaXR0ZWRXb3JrRG9uZSgpLnRoZW4oKCkgPT4geyB2ZXJ0ZXhCdWZmZXIuZGVzdHJveSgpOyBlZGdlQnVmZmVyLmRlc3Ryb3koKTsgfSk7XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7IHRoaXMuI2xhYmVsTGF5ZXIucmVtb3ZlKCk7IHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7IHRoaXMuI3NjZW5lQnVmZmVyLmRlc3Ryb3koKTsgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTsgfVxuICAjcmVuZGVyTGFiZWxzKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwge1xuICAgICAgbGVmdDogYCR7dGhpcy5jYW52YXMub2Zmc2V0TGVmdH1weGAsXG4gICAgICB0b3A6IGAke3RoaXMuY2FudmFzLm9mZnNldFRvcH1weGAsXG4gICAgICByaWdodDogXCJhdXRvXCIsXG4gICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgd2lkdGg6IGAke3RoaXMuY2FudmFzLmNsaWVudFdpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgICB0aGlzLiNsYWJlbExheWVyLnJlcGxhY2VDaGlsZHJlbiguLi5pbnN0YW5jZXMuZmxhdE1hcChpbnN0YW5jZSA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLmxhYmVsPy50ZXh0IHx8IChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpIDw9IDApIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgICAgIGNvbnN0IHggPSA1MCArIChpbnN0YW5jZS54ID8/IDApICogNDAgLyAodGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgeSA9IDUwIC0gKGluc3RhbmNlLnkgPz8gMCkgKiA0MDtcbiAgICAgIGNvbnN0IHNoYXBlUmFkaXVzID0gc2NhbGUgKiB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiAuMjtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNoYXBlUmFkaXVzICsgKGluc3RhbmNlLmxhYmVsLm9mZnNldCA/PyA4KSArIChpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOCkgKiAuNTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5zdGFuY2UubGFiZWwucG9zaXRpb24gPz8gXCJhYm92ZVwiO1xuICAgICAgbGV0IHR4ID0gMCwgdHkgPSAwO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImFib3ZlXCIpIHR5ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJiZWxvd1wiKSB0eSA9IG9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHR4ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB0eCA9IG9mZnNldDtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnN0YW5jZS5sYWJlbC50ZXh0O1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDpgJHt4fSVgLCB0b3A6YCR7eX0lYCwgdHJhbnNmb3JtOmB0cmFuc2xhdGUoY2FsYygtNTAlICsgJHt0eH1weCksY2FsYygtNTAlICsgJHt0eX1weCkpYCxcbiAgICAgICAgY29sb3I6aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3IsIGZvbnRGYW1pbHk6aW5zdGFuY2UubGFiZWwuZm9udEZhbWlseSA/PyBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIGZvbnRTaXplOmAke2luc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4fXB4YCwgZm9udFdlaWdodDpTdHJpbmcoaW5zdGFuY2UubGFiZWwuZm9udFdlaWdodCA/PyA2MDApLFxuICAgICAgICB0ZXh0U2hhZG93OmAwIDAgNXB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9LDAgMCAxNHB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9YCwgd2hpdGVTcGFjZTpcIm5vd3JhcFwiLFxuICAgICAgICBvcGFjaXR5OlN0cmluZyhpbnN0YW5jZS5vcGFjaXR5ID8/IDEpLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW2VsZW1lbnRdO1xuICAgIH0pKTtcbiAgfVxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLiNsb2dpY2FsU2l6ZTtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQgfHwgIXRoaXMuI2RlcHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLiNkZXB0aCAmJiB0aGlzLmNhbnZhcy53aWR0aCA9PT0gd2lkdGggJiYgdGhpcy5jYW52YXMuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSwgTmVvblNoYXBlTGFiZWwgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGVudW0gTmVvblNoYXBlRGlzcG9zYWwge1xuICBGYWRlT3V0ID0gXCJmYWRlT3V0XCIsXG4gIERpc2FwcGVhciA9IFwiZGlzYXBwZWFyXCIsXG4gIEV4cGxvZGUgPSBcImV4cGxvZGVcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVWZWN0b3Ige1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbXBhY3Qge1xuICBkaXJlY3Rpb246IE5lb25TaGFwZVZlY3RvcjtcbiAgbWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlQWN0b3JPcHRpb25zIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHZlbG9jaXR5PzogUGFydGlhbDxOZW9uU2hhcGVWZWN0b3I+O1xuICBzY2FsZT86IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc3Bvc2FsPzogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb24/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblNoYXBlQWN0b3Ige1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHo6IG51bWJlcjtcbiAgdmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc3Bvc2FsOiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZTogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uOiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlOiBudW1iZXI7XG4gIHJvdGF0aW9uWCA9IDA7XG4gIHJvdGF0aW9uWSA9IDA7XG4gIHJvdGF0aW9uWiA9IDA7XG4gIGRpc3Bvc2VkID0gZmFsc2U7XG4gICNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgI2VudHJhbmNlUHJvZ3Jlc3MgPSAxO1xuICAjaW1wYWN0VmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuICAjaW1wYWN0Um90YXRpb246IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25TaGFwZUFjdG9yT3B0aW9ucykge1xuICAgIHRoaXMuc2hhcGUgPSBvcHRpb25zLnNoYXBlO1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCA/PyAwO1xuICAgIHRoaXMueSA9IG9wdGlvbnMueSA/PyAwO1xuICAgIHRoaXMueiA9IG9wdGlvbnMueiA/PyAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IG9wdGlvbnMudmVsb2NpdHk/LnggPz8gMCwgeTogb3B0aW9ucy52ZWxvY2l0eT8ueSA/PyAwIH07XG4gICAgdGhpcy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgPz8gMTtcbiAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmRpc3Bvc2FsID0gb3B0aW9ucy5kaXNwb3NhbCA/PyBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0O1xuICAgIHRoaXMuZXhwbG9kZU1hZ25pdHVkZSA9IG9wdGlvbnMuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gb3B0aW9ucy5lbnRyYW5jZUR1cmF0aW9uID8/IC40NTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gb3B0aW9ucy5lbnRyYW5jZU1hZ25pdHVkZSA/PyAuNTU7XG4gIH1cblxuICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIsIHogPSB0aGlzLnopOiB0aGlzIHtcbiAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VmVsb2NpdHkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSB4OyB0aGlzLnZlbG9jaXR5LnkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1wYWN0KHsgZGlyZWN0aW9uLCBtYWduaXR1ZGUgfTogTmVvblNoYXBlSW1wYWN0KTogdGhpcyB7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gICAgY29uc3QgeCA9IGRpcmVjdGlvbi54IC8gbGVuZ3RoLCB5ID0gZGlyZWN0aW9uLnkgLyBsZW5ndGg7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCArPSB4ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKz0geSAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICs9IHkgKiBtYWduaXR1ZGUgKiAuOTtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi55IC09IHggKiBtYWduaXR1ZGUgKiAuOTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRpc3Bvc2UobW9kZSA9IHRoaXMuZGlzcG9zYWwpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2FsID0gbW9kZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gbW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyID8gMSA6IC4wMDAxO1xuICAgIGlmIChtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW50ZXIoZHVyYXRpb24gPSB0aGlzLmVudHJhbmNlRHVyYXRpb24sIG1hZ25pdHVkZSA9IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUpOiB0aGlzIHtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBNYXRoLm1heCguMDAxLCBkdXJhdGlvbik7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG1hZ25pdHVkZTtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZ2VuZXJhdGUoKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9ICh0aGlzLnZlbG9jaXR5LnggKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS54KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnkgKz0gKHRoaXMudmVsb2NpdHkueSArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25YICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblkgKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqIGRlbHRhU2Vjb25kcztcbiAgICBjb25zdCBkYW1waW5nID0gTWF0aC5leHAoLTcgKiBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSAqPSBkYW1waW5nO1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqPSBkYW1waW5nO1xuICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID4gMCAmJiAhdGhpcy5kaXNwb3NlZCkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gLjg1IDogLjU1O1xuICAgICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyBkdXJhdGlvbik7XG4gICAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+PSAxKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPCAxKSB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIHRoaXMuZW50cmFuY2VEdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJJbnN0YW5jZShvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gICAgY29uc3QgZmFkZSA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQgPyAxIC0gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYXBlOiB0aGlzLnNoYXBlLCB4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56LCBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIHJvdGF0aW9uWDogdGhpcy5yb3RhdGlvblgsIHJvdGF0aW9uWTogdGhpcy5yb3RhdGlvblksIHJvdGF0aW9uWjogdGhpcy5yb3RhdGlvblosXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCwgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IHRoaXMuZGlzcG9zZWQgPyAwIDogZmFkZSxcbiAgICAgIGVudHJhbmNlUHJvZ3Jlc3M6IHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MsXG4gICAgICBlbnRyYW5jZU1hZ25pdHVkZTogdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogdGhpcy5leHBsb2RlTWFnbml0dWRlLFxuICAgICAgLi4ub3ZlcnJpZGVzLFxuICAgIH07XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uUHJpbWl0aXZlU2hhcGUgPSBcImNpcmNsZVwiIHwgXCJib2x0XCIgfCBcIm9yYlwiIHwgXCJyaW5nXCIgfCBcInNwYXJrXCIgfCBcImRpYW1vbmRcIiB8IFwicGVudGFnb25cIiB8IFwibGluZVwiIHwgXCJhcmNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJpbWl0aXZlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I/OiBzdHJpbmc7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgdGV4dHVyZT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aD86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIGFyY1N0YXJ0PzogbnVtYmVyO1xuICBhcmNFbmQ/OiBudW1iZXI7XG4gIHNoYXBlPzogTmVvblByaW1pdGl2ZVNoYXBlO1xufVxuXG5jb25zdCBtYXhQcmltaXRpdmVzID0gMTAyNDtcbmNvbnN0IGZsb2F0c1BlclByaW1pdGl2ZSA9IDIwO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovIGBcbnN0cnVjdCBTY2VuZSB7IHJlc29sdXRpb246IHZlYzJmLCBjb3VudDogZjMyLCB0aW1lOiBmMzIgfVxuc3RydWN0IFByaW1pdGl2ZSB7XG4gIHBvc2l0aW9uOiB2ZWMyZixcbiAgc2l6ZTogdmVjMmYsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBnbG93OiBmMzIsXG4gIGludGVuc2l0eTogZjMyLFxuICBzaGFwZTogZjMyLFxuICB0ZXh0dXJlOiBmMzIsXG4gIHJpbUludGVuc2l0eTogZjMyLFxuICBzaGFkb3dTdHJlbmd0aDogZjMyLFxuICBwYWRkaW5nOiB2ZWMyZixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBpdGVtczogYXJyYXk8UHJpbWl0aXZlPjtcblxuc3RydWN0IFZlcnRleE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBpbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDQpIHNoYXBlOiBmMzIsXG4gIEBsb2NhdGlvbig1KSBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbig2KSB0ZXh0dXJlOiBmMzIsXG4gIEBsb2NhdGlvbig3KSByaW1JbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDgpIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG59XG5cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZlcnRleDogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gVmVydGV4T3V0cHV0IHtcbiAgdmFyIGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBpdGVtID0gaXRlbXNbaW5zdGFuY2VdO1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZlcnRleF07XG4gIHZhciBwaXhlbE9mZnNldCA9IGxvY2FsICogaXRlbS5zaXplO1xuICBpZiAoaXRlbS50ZXh0dXJlICE9IDApIHtcbiAgICBsZXQgYyA9IGNvcyhpdGVtLnRleHR1cmUpO1xuICAgIGxldCBzID0gc2luKGl0ZW0udGV4dHVyZSk7XG4gICAgcGl4ZWxPZmZzZXQgPSB2ZWMyZihwaXhlbE9mZnNldC54ICogYyAtIHBpeGVsT2Zmc2V0LnkgKiBzLCBwaXhlbE9mZnNldC54ICogcyArIHBpeGVsT2Zmc2V0LnkgKiBjKTtcbiAgfVxuICBsZXQgcGl4ZWwgPSBpdGVtLnBvc2l0aW9uICsgcGl4ZWxPZmZzZXQ7XG4gIHZhciBvdXRwdXQ6IFZlcnRleE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYocGl4ZWwueCAvIHNjZW5lLnJlc29sdXRpb24ueCAqIDIgLSAxLCAxIC0gcGl4ZWwueSAvIHNjZW5lLnJlc29sdXRpb24ueSAqIDIsIDAsIDEpO1xuICBvdXRwdXQubG9jYWwgPSBsb2NhbDtcbiAgb3V0cHV0LmNvbG9yID0gaXRlbS5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpdGVtLmdsb3c7XG4gIG91dHB1dC5pbnRlbnNpdHkgPSBpdGVtLmludGVuc2l0eTtcbiAgb3V0cHV0LnNoYXBlID0gaXRlbS5zaGFwZTtcbiAgb3V0cHV0LnNlY29uZGFyeUNvbG9yID0gaXRlbS5zZWNvbmRhcnlDb2xvcjtcbiAgb3V0cHV0LnRleHR1cmUgPSBpdGVtLnRleHR1cmU7XG4gIG91dHB1dC5yaW1JbnRlbnNpdHkgPSBpdGVtLnJpbUludGVuc2l0eTtcbiAgb3V0cHV0LnNoYWRvd1N0cmVuZ3RoID0gaXRlbS5zaGFkb3dTdHJlbmd0aDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogVmVydGV4T3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBpZiAoaW5wdXQuc2hhcGUgPiA3LjUpIHtcbiAgICBsZXQgcmFkaXVzID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgICBsZXQgYW5nbGUgPSBhdGFuMihpbnB1dC5sb2NhbC55LCBpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYW5nbGUgPCBpbnB1dC5yaW1JbnRlbnNpdHkgfHwgYW5nbGUgPiBpbnB1dC5zaGFkb3dTdHJlbmd0aCB8fCByYWRpdXMgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBsaW5lRGlzdGFuY2UgPSBhYnMocmFkaXVzIC0gMC43OCk7XG4gICAgaWYgKGxpbmVEaXN0YW5jZSA+IDAuMTYpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjAxMiwgMC4wMzgsIGxpbmVEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjAyNSwgMC4xNiwgbGluZURpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBwdWxzZUEgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMjMuMCAtIHNjZW5lLnRpbWUgKiA4LjUpKSwgMTYuMCk7XG4gICAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAxMS4wICsgc2NlbmUudGltZSAqIDUuMyArIDEuNykpLCAyNC4wKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oYW5nbGUgKiA3MS4wICsgc2NlbmUudGltZSAqIDMuMSkgKiAwLjUgKyAwLjU7XG4gICAgbGV0IHN1cmdlID0gc21vb3Roc3RlcCgwLjcyLCAwLjk0LCBwdWxzZUEgKiAwLjcgKyBwdWxzZUIgKiAwLjY1ICsgZ3JhaW4gKiAwLjEyKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC44OCArIHN1cmdlICogMC42NSkgKyBoYWxvICogKDAuMjIgKyBzdXJnZSAqIDAuOSkpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiBzdXJnZSAqIDAuOSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA2LjUpIHtcbiAgICBsZXQgYWxvbmcgPSBpbnB1dC5sb2NhbC55O1xuICAgIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFjcm9zcyA+IDEuMCB8fCBhYnMoYWxvbmcpID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wOCwgMC4yNCwgYWNyb3NzKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMTIsIDEuMCwgYWNyb3NzKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmRGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgwLjcyLCAxLjAsIGFicyhhbG9uZykpO1xuICAgIGxldCB0cmF2ZWwgPSBwb3cobWF4KDAuMCwgc2luKGFsb25nICogMjQuMCAtIHNjZW5lLnRpbWUgKiA4LjAgKyBpbnB1dC50ZXh0dXJlKSksIDE0LjApO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjc1ICsgdHJhdmVsICogMC41KSArIGhhbG8gKiAoMC4yICsgdHJhdmVsICogMC41NSkpICogZW5kRmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogdHJhdmVsICogMC43NSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA1LjUpIHtcbiAgICAvLyBQZW50YWdvbiBTREZcbiAgICAvLyBsb2NhbCBpcyBpbiBbLTEsIDFdIHJhbmdlLiBMZXQncyBmaW5kIHBlbnRhZ29uIGRpc3RhbmNlLlxuICAgIGxldCBweCA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBsZXQgcHkgPSBpbnB1dC5sb2NhbC55O1xuICAgIC8vIFBlbnRhZ29uIGNvbnN0YW50cyBmb3IgdmVydGljZXMvZWRnZXNcbiAgICBsZXQgayA9IHZlYzNmKC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDEuMzc2MzgxOTIpOyAvLyBjb3Mvc2luIG9mIDcyLCBwbHVzIGhlaWdodCBmYWN0b3JcbiAgICAvLyBQcm9qZWN0L01pcnJvciBhY3Jvc3MgdGhlIHN5bW1ldHJ5IGF4ZXMgb2YgcmVndWxhciBwZW50YWdvblxuICAgIHZhciBwID0gdmVjMmYocHgsIHB5KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKC1rLngsIGsueSksIHApLCAwKSAqIHZlYzJmKC1rLngsIGsueSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZihrLngsIGsueSksIHApLCAwKSAqIHZlYzJmKGsueCwgay55KTtcbiAgICBwLnggPSBwLnggLSBjbGFtcChwLngsIC1rLnogKiAwLjUsIGsueiAqIDAuNSk7XG4gICAgbGV0IGQgPSBsZW5ndGgocCAtIHZlYzJmKDAsIDAuNzIpKSAqIHNpZ24ocC55IC0gMC43Mik7XG4gICAgLy8gTWFwIGQgdG8gYSBub3JtYWxpemVkIHJhZGl1cyBzY2FsZVxuICAgIGxldCBzY2FsZUQgPSBkICsgMC4zNTsgLy8gb2Zmc2V0IHBlbnRhZ29uIHRvIGZpdCBib3VuZHMgbmljZWx5XG4gICAgaWYgKHNjYWxlRCA+IDAuOCkgeyBkaXNjYXJkOyB9XG4gICAgXG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjUsIDAuNjUsIHNjYWxlRCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC40NSwgMC41Mywgc2NhbGVEKSAqICgxIC0gc21vb3Roc3RlcCgwLjY1LCAwLjc1LCBzY2FsZUQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKC0wLjIsIDAuNSwgc2NhbGVEKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjU1LCAwLjgsIHNjYWxlRCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zOCArIGJvcmRlciAqIDEuMzU7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS43NSArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjQ1KSAqIGZpbGwgKiAwLjM1O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjQ7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDQuNSkge1xuICAgIGxldCBkID0gYWJzKGlucHV0LmxvY2FsLngpICsgYWJzKGlucHV0LmxvY2FsLnkpO1xuICAgIGlmIChkID4gMS4wOCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjc4LCAwLjkyLCBkKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjcyLCAwLjgyLCBkKSAqICgxIC0gc21vb3Roc3RlcCgwLjkyLCAxLjAyLCBkKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgwLjAsIDAuNzgsIGQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuODIsIDEuMDgsIGQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzUgKyBib3JkZXIgKiAxLjI7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNiArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjUpICogZmlsbCAqIDAuMzg7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMzU7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDEuNSkge1xuICAgIGxldCByMiA9IGRvdChpbnB1dC5sb2NhbCwgaW5wdXQubG9jYWwpO1xuICAgIGlmIChyMiA+IDEpIHsgZGlzY2FyZDsgfVxuICAgIGxldCB6ID0gc3FydChtYXgoMCwgMSAtIHIyKSk7XG4gICAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZSh2ZWMzZihpbnB1dC5sb2NhbC54LCAtaW5wdXQubG9jYWwueSwgeikpO1xuICAgIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtMC41NSwgLTAuNywgMC45KSk7XG4gICAgbGV0IGRpZmZ1c2UgPSBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKTtcbiAgICBsZXQgcmltID0gcG93KDEgLSB6LCAyLjIpICogaW5wdXQucmltSW50ZW5zaXR5O1xuICAgIGxldCBzaGFkb3cgPSBtaXgoMSAtIGlucHV0LnNoYWRvd1N0cmVuZ3RoLCAxLCBzbW9vdGhzdGVwKC0wLjY1LCAwLjQ1LCBkb3Qobm9ybWFsLnh5LCBsaWdodC54eSkpKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oaW5wdXQubG9jYWwueCAqIDIzICsgaW5wdXQubG9jYWwueSAqIDE3KSAqIHNpbihpbnB1dC5sb2NhbC55ICogMzEgLSBpbnB1dC5sb2NhbC54ICogMTEpO1xuICAgIGxldCB0ZXh0dXJlID0gMSArIGdyYWluICogaW5wdXQudGV4dHVyZSAqIDAuMjI7XG4gICAgbGV0IHNwZWN1bGFyID0gcG93KG1heChkb3QocmVmbGVjdCgtbGlnaHQsIG5vcm1hbCksIHZlYzNmKDAsMCwxKSksIDApLCAyOCkgKiAxLjg7XG4gICAgbGV0IGJvZHkgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGRpZmZ1c2UgKiAwLjggKyAwLjIpICogc2hhZG93ICogdGV4dHVyZTtcbiAgICBsZXQgaGFsbyA9IHBvdyhtYXgoMCwgMSAtIGxlbmd0aChpbnB1dC5sb2NhbCkpLCAwLjM1KSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHJnYiA9IGJvZHkgKiAoMC4zOCArIGRpZmZ1c2UgKiAwLjk1KSArIGlucHV0LmNvbG9yLnJnYiAqIHJpbSArIHZlYzNmKHNwZWN1bGFyKSArIGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiAqIGlucHV0LmludGVuc2l0eSwgMSk7XG4gIH1cbiAgdmFyIGRpc3RhbmNlID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgaWYgKGlucHV0LnNoYXBlID4gMy41KSB7XG4gICAgbGV0IGF4aXMgPSBtaW4oYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICAgIGxldCBhcm0gPSAxIC0gc21vb3Roc3RlcCgwLjA0LCAwLjE4LCBheGlzKTtcbiAgICBsZXQgZmFkZSA9IDEgLSBzbW9vdGhzdGVwKDAuMiwgMSwgbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKSk7XG4gICAgbGV0IGVuZXJneSA9IGFybSAqIGZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgYXJtKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAyLjUpIHtcbiAgICBsZXQgcmluZ0Rpc3RhbmNlID0gYWJzKGxlbmd0aChpbnB1dC5sb2NhbCkgLSAwLjYyKTtcbiAgICBsZXQgcmluZyA9IDEgLSBzbW9vdGhzdGVwKDAuMDU1LCAwLjE4LCByaW5nRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMTIsIDAuNDIsIHJpbmdEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5lcmd5ID0gKHJpbmcgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgcmluZykgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAwLjUpIHtcbiAgICBkaXN0YW5jZSA9IG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gIH1cbiAgbGV0IGNvcmUgPSAxIC0gc21vb3Roc3RlcCgwLjM4LCAwLjc2LCBkaXN0YW5jZSk7XG4gIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMywgMSwgZGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gIGxldCBlbmVyZ3kgPSAoY29yZSArIGhhbG8gKiAwLjU1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgbGV0IGNocm9tYXRpY0NvcmUgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIHBvdyhtYXgoY29yZSwgMCksIDIpKTtcbiAgbGV0IHJhdyA9IGNocm9tYXRpY0NvcmUgKiAoY29yZSAqIDEuMDUgKyBoYWxvICogMC40Mik7XG4gIGxldCByZ2IgPSByYXcgLyAodmVjM2YoMSkgKyByYXcgKiAwLjMyKTtcbiAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG59XG5gO1xuXG5mdW5jdGlvbiByZ2JhKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB2YWx1ZSA9IGhleC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgaWYgKCEvXlswLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHNpeC1kaWdpdCBoZXggY29sb3IsIHJlY2VpdmVkIFwiJHtoZXh9XCIuYCk7XG4gIHJldHVybiBbXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDAsIDIpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDIsIDQpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDQsIDYpLCAxNikgLyAyNTUsXG4gICAgMSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25QcmltaXRpdmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNwcmltaXRpdmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7IGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0gfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jcHJpbWl0aXZlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBtYXhQcmltaXRpdmVzICogZmxvYXRzUGVyUHJpbWl0aXZlICogNCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgfSk7XG4gICAgdGhpcy4jYmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfSxcbiAgICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciB9IH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uUHJpbWl0aXZlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNhbnZhcyBjb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10sIHRpbWVTZWNvbmRzID0gMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2aXNpYmxlID0gcHJpbWl0aXZlcy5zbGljZSgwLCBtYXhQcmltaXRpdmVzKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2aXNpYmxlLmxlbmd0aCAqIGZsb2F0c1BlclByaW1pdGl2ZSk7XG4gICAgdmlzaWJsZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJQcmltaXRpdmU7XG4gICAgICBkYXRhLnNldChbXG4gICAgICAgIGl0ZW0ueCwgaXRlbS55LCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCA/PyBpdGVtLndpZHRoLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uY29sb3IpLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uc2Vjb25kYXJ5Q29sb3IgPz8gaXRlbS5jb2xvciksXG4gICAgICAgIGl0ZW0uZ2xvdyA/PyAwLjUsXG4gICAgICAgIGl0ZW0uaW50ZW5zaXR5ID8/IDEsXG4gICAgICAgIGl0ZW0uc2hhcGUgPT09IFwiYXJjXCIgPyA4IDogaXRlbS5zaGFwZSA9PT0gXCJsaW5lXCIgPyA3IDogaXRlbS5zaGFwZSA9PT0gXCJwZW50YWdvblwiID8gNiA6IGl0ZW0uc2hhcGUgPT09IFwiZGlhbW9uZFwiID8gNSA6IGl0ZW0uc2hhcGUgPT09IFwic3BhcmtcIiA/IDQgOiBpdGVtLnNoYXBlID09PSBcInJpbmdcIiA/IDMgOiBpdGVtLnNoYXBlID09PSBcIm9yYlwiID8gMiA6IGl0ZW0uc2hhcGUgPT09IFwiYm9sdFwiID8gMSA6IDAsXG4gICAgICAgIGl0ZW0ucm90YXRpb24gPz8gaXRlbS50ZXh0dXJlID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjU3RhcnQgPz8gaXRlbS5yaW1JbnRlbnNpdHkgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNFbmQgPz8gaXRlbS5zaGFkb3dTdHJlbmd0aCA/PyAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgXSwgb2Zmc2V0KTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdmlzaWJsZS5sZW5ndGgsIHRpbWVTZWNvbmRzXSkpO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jcHJpbWl0aXZlQnVmZmVyLCAwLCBkYXRhKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDAuMDA2LCBnOiAwLjAwOSwgYjogMC4wMjUsIGE6IDEgfSxcbiAgICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgIH1dLFxuICAgIH0pO1xuICAgIGlmICh2aXNpYmxlLmxlbmd0aCkge1xuICAgICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kR3JvdXApO1xuICAgICAgcGFzcy5kcmF3KDYsIHZpc2libGUubGVuZ3RoKTtcbiAgICB9XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uID0gXCJmYWRlXCIgfCBcImV4cGFuZEZhZGVcIiB8IFwiaW1wbG9kZVwiIHwgXCJzcGFya0ZhZGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIGRldGFpbD86IG51bWJlcjtcbiAgdHVyYnVsZW5jZT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgY29yZUludGVuc2l0eT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBkaXNzaXBhdGlvblRpbWU/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uQWN0aW9uPzogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb247XG4gIGRyaWZ0WD86IG51bWJlcjtcbiAgZHJpZnRZPzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyO1xuICBhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25DbG91ZEJ1cnN0IGV4dGVuZHMgT21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcInhcIiB8IFwieVwiIHwgXCJzaXplXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbn1cblxudHlwZSBDbG91ZCA9IFJlcXVpcmVkPE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJjb3JlQ29sb3JcIj4+ICYgeyBjb3JlQ29sb3I6IHN0cmluZzsgYWdlOiBudW1iZXIgfTtcblxuY29uc3QgbWF4Q2xvdWRzID0gOTY7XG5jb25zdCBmbG9hdHNQZXJDbG91ZCA9IDI0O1xuXG5jb25zdCBkZWZhdWx0czogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz4gPSB7XG4gIGNvbG9yOiBcIiM2M2U4ZmZcIixcbiAgY29yZUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRpb246IDAsXG4gIHNpemU6IC4yNSxcbiAgZGV0YWlsOiA1LFxuICB0dXJidWxlbmNlOiAuNzUsXG4gIGdsb3c6IDQsXG4gIGNvcmVJbnRlbnNpdHk6IDEuNCxcbiAgcmltSW50ZW5zaXR5OiAuODUsXG4gIG9wYWNpdHk6IDEsXG4gIGRpc3NpcGF0aW9uVGltZTogLjcsXG4gIGRpc3NpcGF0aW9uQWN0aW9uOiBcImV4cGFuZEZhZGVcIixcbiAgZHJpZnRYOiAwLFxuICBkcmlmdFk6IDAsXG4gIHNlZWQ6IDAsXG4gIGFnZTogMCxcbn07XG5cbmNvbnN0IGhleCA9ICh2YWx1ZTogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgcmF3ID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIikucGFkRW5kKDYsIFwiMFwiKS5zbGljZSgwLCA2KTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuXG5leHBvcnQgY29uc3QgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yID0gKGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBbciwgZywgYl0gPSBoZXgoY29sb3IpO1xuICBjb25zdCBsaWZ0ID0gKGNoYW5uZWw6IG51bWJlcikgPT4gTWF0aC5yb3VuZCgoY2hhbm5lbCArICgxIC0gY2hhbm5lbCkgKiAuNzgpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICByZXR1cm4gYCMke2xpZnQocil9JHtsaWZ0KGcpfSR7bGlmdChiKX1gO1xufTtcblxuY29uc3QgYWN0aW9uVmFsdWUgPSAoYWN0aW9uOiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbik6IG51bWJlciA9PlxuICBhY3Rpb24gPT09IFwiZmFkZVwiID8gMCA6IGFjdGlvbiA9PT0gXCJleHBhbmRGYWRlXCIgPyAxIDogYWN0aW9uID09PSBcImltcGxvZGVcIiA/IDIgOiAzO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IENsb3VkIHtcbiAgcG9zOiB2ZWMyZixcbiAgdmVsb2NpdHk6IHZlYzJmLFxuICBhZ2U6IGYzMixcbiAgbGlmZTogZjMyLFxuICBzaXplOiBmMzIsXG4gIHJvdGF0aW9uOiBmMzIsXG4gIHNlZWQ6IGYzMixcbiAgYWN0aW9uOiBmMzIsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgY29yZTogdmVjNGYsXG4gIHR1bmluZzogdmVjNGYsXG59XG5zdHJ1Y3QgR2xvYmFscyB7XG4gIGFzcGVjdDogZjMyLFxuICB0aW1lOiBmMzIsXG4gIGNvdW50OiBmMzIsXG4gIGJhY2tncm91bmQ6IGYzMixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gZ2xvYmFsczogR2xvYmFscztcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gY2xvdWRzOiBhcnJheTxDbG91ZD47XG5cbmZuIGhhc2gocDogdmVjMmYpIC0+IGYzMiB7XG4gIHJldHVybiBmcmFjdChzaW4oZG90KHAsIHZlYzJmKDEyNy4xLCAzMTEuNykpKSAqIDQzNzU4LjU0NTMxMjMpO1xufVxuZm4gbm9pc2UocDogdmVjMmYpIC0+IGYzMiB7XG4gIGxldCBpID0gZmxvb3IocCk7XG4gIGxldCBmID0gZnJhY3QocCk7XG4gIGxldCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBtaXgobWl4KGhhc2goaSksIGhhc2goaSArIHZlYzJmKDEsMCkpLCB1LngpLCBtaXgoaGFzaChpICsgdmVjMmYoMCwxKSksIGhhc2goaSArIHZlYzJmKDEsMSkpLCB1LngpLCB1LnkpO1xufVxuZm4gZmJtKHA6IHZlYzJmLCBvY3RhdmVzOiBmMzIpIC0+IGYzMiB7XG4gIHZhciB2ID0gMC4wO1xuICB2YXIgYSA9IDAuNTtcbiAgdmFyIHEgPSBwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGlmIChmMzIoaSkgPj0gb2N0YXZlcykgeyBicmVhazsgfVxuICAgIHYgKz0gYSAqIG5vaXNlKHEpO1xuICAgIHEgPSBxICogMi4wMyArIHZlYzJmKDYuOSwgMy43KTtcbiAgICBhICo9IDAuNTI7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5mbiByb3RhdGUocDogdmVjMmYsIGE6IGYzMikgLT4gdmVjMmYge1xuICBsZXQgYyA9IGNvcyhhKTtcbiAgbGV0IHMgPSBzaW4oYSk7XG4gIHJldHVybiB2ZWMyZihwLnggKiBjIC0gcC55ICogcywgcC54ICogcyArIHAueSAqIGMpO1xufVxuc3RydWN0IE91dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBAaW50ZXJwb2xhdGUoZmxhdCkgaW5zdGFuY2U6IHUzMixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZpOiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBPdXQge1xuICBsZXQgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGMgPSBjbG91ZHNbaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBhY3Rpb25TY2FsZSA9IHNlbGVjdCgxLjAgKyBsaWZlVCAqIDEuODUsIDEuMCAtIGxpZmVUICogLjYyLCBjLmFjdGlvbiA+IDEuNSAmJiBjLmFjdGlvbiA8IDIuNSk7XG4gIGxldCByYWRpdXMgPSBtYXgoLjAwMSwgYy5zaXplICogYWN0aW9uU2NhbGUpICogMi4zNTtcbiAgdmFyIGNlbnRlciA9IGMucG9zICsgYy52ZWxvY2l0eSAqIGMuYWdlO1xuICBjZW50ZXIueCAqPSBnbG9iYWxzLmFzcGVjdDtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2aV07XG4gIGxldCBwID0gY2VudGVyICsgbG9jYWwgKiByYWRpdXM7XG4gIHZhciBvOiBPdXQ7XG4gIG8ucG9zaXRpb24gPSB2ZWM0ZihwLnggLyBnbG9iYWxzLmFzcGVjdCwgcC55LCAwLCAxKTtcbiAgby5sb2NhbCA9IGxvY2FsICogMi4zNTtcbiAgby5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICByZXR1cm4gbztcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGMgPSBjbG91ZHNbaW5wdXQuaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBsb2NhbCA9IHJvdGF0ZShpbnB1dC5sb2NhbCwgLWMucm90YXRpb24gLSBsaWZlVCAqIC40NSk7XG4gIGxldCByID0gbGVuZ3RoKGxvY2FsKTtcbiAgaWYgKHIgPj0gMi4zNSkgeyBkaXNjYXJkOyB9XG4gIGxldCBkZXRhaWwgPSBjbGFtcChjLnR1bmluZy54LCAxLjAsIDcuMCk7XG4gIGxldCB0dXJidWxlbmNlID0gYy50dW5pbmcueTtcbiAgbGV0IHdpc3B5ID0gZmJtKGxvY2FsICogKDEuNyArIGRldGFpbCAqIC4xNikgKyB2ZWMyZihjLnNlZWQsIGMuc2VlZCAqIC43MSkgKyBnbG9iYWxzLnRpbWUgKiB2ZWMyZiguMTYsIC4wOSkgKiB0dXJidWxlbmNlLCBtaW4oZGV0YWlsLCA0LjApKTtcbiAgbGV0IGNvcmUgPSBleHAoLXIgKiByICogKDEuMiArIGMudHVuaW5nLnogKiAuMjIpKTtcbiAgbGV0IHJpbSA9IGV4cCgtYWJzKHIgLSAuNzIpICogMy42KTtcbiAgbGV0IHNwYXJrID0gcG93KG1heCgwLjAsIHNpbih3aXNweSAqIDE2LjAgKyBjLnNlZWQgKyBnbG9iYWxzLnRpbWUgKiA5LjApKSwgMTQuMCkgKiBzZWxlY3QoMC4wLCAxLjAsIGMuYWN0aW9uID4gMi41KTtcbiAgbGV0IGRpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDEuNDUsIDIuMzUsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCByaW1EaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgyLjcsIDMuOCwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IGVkZ2VGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgxLjc1LCAyLjM1LCByKTtcbiAgbGV0IGRlbnNpdHkgPSAoY29yZSAqIC43MiArIHJpbSAqIC4yNCAqIHJpbURpc3NpcGF0ZSArIHdpc3B5ICogLjIyICsgc3BhcmsgKiAuNTUpICogZGlzc2lwYXRlICogYy50dW5pbmcudyAqIGVkZ2VGYWRlO1xuICBsZXQgaG90Q29yZSA9IGMuY29yZS5yZ2IgKiBjb3JlICogYy50dW5pbmcueiAqICgxLjAgKyBzcGFyayk7XG4gIGxldCBuZW9uUmltID0gYy5jb2xvci5yZ2IgKiAoZGVuc2l0eSAqICguNzUgKyBjLmNvbG9yLmEgKiAuMDgpICsgcmltICogcmltRGlzc2lwYXRlICogYy5jb2xvci5hICogLjA4KTtcbiAgbGV0IGdsb3cgPSBuZW9uUmltICsgaG90Q29yZSAqIGRlbnNpdHk7XG4gIHJldHVybiB2ZWM0ZihnbG93LCBjbGFtcChkZW5zaXR5ICogLjg1ICsgc3BhcmsgKiAuMjUsIDAuMCwgMS4wKSk7XG59YDtcblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0QWN0b3Ige1xuICBzZXR0aW5nczogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz47XG4gIGFnZSA9IDA7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzID0ge30pIHtcbiAgICB0aGlzLnNldHRpbmdzID0geyAuLi5kZWZhdWx0cywgLi4uc2V0dGluZ3MsIHNlZWQ6IHNldHRpbmdzLnNlZWQgPz8gTWF0aC5yYW5kb20oKSAqIDEwMDAgfTtcbiAgfVxuICB1cGRhdGUoZHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuYWdlICs9IGR0O1xuICAgIHJldHVybiB0aGlzLmFnZSA8IHRoaXMuc2V0dGluZ3MuZGlzc2lwYXRpb25UaW1lO1xuICB9XG4gIHJlbmRlckluc3RhbmNlKCk6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3MsIHNlZWQ6IHRoaXMuc2V0dGluZ3Muc2VlZCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjYnVmZmVyOiBHUFVCdWZmZXI7XG4gICNnbG9iYWxzOiBHUFVCdWZmZXI7XG4gICNiaW5kOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgcHJvY2VkdXJhbCBjbG91ZCB2b2x1bWUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNnbG9iYWxzID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCAqIDQsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYmluZCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW1xuICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2dsb2JhbHMgfSB9LFxuICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2J1ZmZlciB9IH0sXG4gICAgXSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkNsb3VkQnVyc3RSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3RvcnkgY2xvdWQgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihjbG91ZHM6IHJlYWRvbmx5IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3NbXSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgcGFja2VkID0gbmV3IEZsb2F0MzJBcnJheShtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCk7XG4gICAgY2xvdWRzLnNsaWNlKDAsIG1heENsb3VkcykuZm9yRWFjaCgoY2xvdWQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjID0geyAuLi5kZWZhdWx0cywgLi4uY2xvdWQgfTtcbiAgICAgIGNvbnN0IGNvbG9yID0gaGV4KGMuY29sb3IpLCBjb3JlID0gaGV4KGMuY29yZUNvbG9yKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyQ2xvdWQ7XG4gICAgICBwYWNrZWQuc2V0KFtjLngsIGMueSwgYy5kcmlmdFgsIGMuZHJpZnRZLCBjLmFnZSA/PyAwLCBjLmRpc3NpcGF0aW9uVGltZSwgYy5zaXplLCBjLnJvdGF0aW9uLCBjLnNlZWQsIGFjdGlvblZhbHVlKGMuZGlzc2lwYXRpb25BY3Rpb24pLCAwLCAwXSwgb2Zmc2V0KTtcbiAgICAgIHBhY2tlZC5zZXQoW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGMuZ2xvdywgY29yZVswXSwgY29yZVsxXSwgY29yZVsyXSwgYy5jb3JlSW50ZW5zaXR5LCBjLmRldGFpbCwgYy50dXJidWxlbmNlLCBjLnJpbUludGVuc2l0eSwgYy5vcGFjaXR5XSwgb2Zmc2V0ICsgMTIpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2J1ZmZlciwgMCwgcGFja2VkKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNnbG9iYWxzLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgdGltZVNlY29uZHMsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcyksIDBdKSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHsgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LFxuICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgfV0gfSk7XG4gICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZCk7XG4gICAgcGFzcy5kcmF3KDYsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcykpO1xuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICBtYXBUb3BEb3duQ2xvdWQoY2xvdWQ6IE5lb25Ub3BEb3duQ2xvdWRCdXJzdCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIGNvbnN0IGFzcGVjdCA9IGxvZ2ljYWxXaWR0aCAvIGxvZ2ljYWxIZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogKGNsb3VkLnggLyBsb2dpY2FsV2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBjbG91ZC55IC8gbG9naWNhbEhlaWdodCkgKiAyLjUsXG4gICAgICBzaXplOiBjbG91ZC5zaXplIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICAgIGRyaWZ0WDogKGNsb3VkLmRyaWZ0WCA/PyAwKSAvIGxvZ2ljYWxXaWR0aCAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIGRyaWZ0WTogLShjbG91ZC5kcmlmdFkgPz8gMCkgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy4jYnVmZmVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLiNnbG9iYWxzLmRlc3Ryb3koKTtcbiAgICBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgTmVvblByaW1pdGl2ZVJlbmRlcmVyLCB0eXBlIE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyLCB0eXBlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCB9IGZyb20gXCIuL2Nsb3VkLWJ1cnN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TaGFwZSBleHRlbmRzIE9taXQ8TmVvblNoYXBlSW5zdGFuY2UsIFwieFwiIHwgXCJ5XCIgfCBcInNjYWxlXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNjZW5lIHtcbiAgcHJpbWl0aXZlcz86IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXTtcbiAgY2xvdWRzPzogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W107XG4gIHNoYXBlcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVJlbmRlcmVyO1xuICAjY2xvdWRzOiBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyO1xuICAjc2hhcGVzOiBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcjtcbiAgI3dpZHRoOiBudW1iZXI7XG4gICNoZWlnaHQ6IG51bWJlcjtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7IHRoaXMuI3dpZHRoID0gd2lkdGg7IHRoaXMuI2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNwcmltaXRpdmVzID0gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNjbG91ZHMgPSBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNzaGFwZXMgPSBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeSB0b3AtZG93biBzY2VuZXMuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQsIGxvZ2ljYWxXaWR0aCwgbG9naWNhbEhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2NlbmU6IE5lb25Ub3BEb3duU2NlbmUsIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKTtcbiAgICB0aGlzLiNwcmltaXRpdmVzLnJlbmRlcihbLi4uKHNjZW5lLnByaW1pdGl2ZXMgPz8gW10pXSwgdGltZVNlY29uZHMsIGZhbHNlLCB0YXJnZXQpO1xuICAgIGNvbnN0IGNsb3VkcyA9IHNjZW5lLmNsb3VkcyA/PyBbXTtcbiAgICBjb25zdCBhc3BlY3QgPSB0aGlzLiN3aWR0aCAvIHRoaXMuI2hlaWdodDtcbiAgICBjb25zdCBzaGFwZXMgPSBzY2VuZS5zaGFwZXMgPz8gW107XG4gICAgaWYgKHNoYXBlcy5sZW5ndGgpIHRoaXMuI3NoYXBlcy5yZW5kZXIoc2hhcGVzLm1hcChzaGFwZSA9PiAoe1xuICAgICAgLi4uc2hhcGUsXG4gICAgICB4OiAoc2hhcGUueCAvIHRoaXMuI3dpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gc2hhcGUueSAvIHRoaXMuI2hlaWdodCkgKiAyLjUsXG4gICAgICBzY2FsZTogKHNoYXBlLmhlaWdodCA/PyBzaGFwZS5zaXplKSAvIHRoaXMuI2hlaWdodCAqIDIuNSxcbiAgICAgIHNjYWxlWDogKHNoYXBlLnNjYWxlWCA/PyAxKSAqICgoc2hhcGUud2lkdGggPz8gc2hhcGUuc2l6ZSkgLyAoc2hhcGUuaGVpZ2h0ID8/IHNoYXBlLnNpemUpKSxcbiAgICB9KSksIHRydWUsIHRhcmdldCk7XG4gICAgaWYgKGNsb3Vkcy5sZW5ndGgpIHRoaXMuI2Nsb3Vkcy5yZW5kZXIoY2xvdWRzLm1hcChjbG91ZCA9PiB0aGlzLiNjbG91ZHMubWFwVG9wRG93bkNsb3VkKGNsb3VkLCB0aGlzLiN3aWR0aCwgdGhpcy4jaGVpZ2h0KSksIHRpbWVTZWNvbmRzLCB0cnVlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4jc2hhcGVzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuI2Nsb3Vkcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25Ub3BEb3duU2NlbmUgfSBmcm9tIFwiLi90b3AtZG93bi1zY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclNjZW5lSWRzID0gW1wibmVvbkhhbGxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmVSdW5uZXJTY2VuZU5hbWUoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiBzdHJpbmcge1xuICByZXR1cm4gc2NlbmVOYW1lc1tzY2VuZUlkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGFuZVJ1bm5lclNjZW5lSWQodmFsdWU6IHN0cmluZyk6IHZhbHVlIGlzIExhbmVSdW5uZXJTY2VuZUlkIHtcbiAgcmV0dXJuIChsYW5lUnVubmVyU2NlbmVJZHMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmVSdW5uZXJTY2VuZShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIHN3aXRjaCAob3B0aW9ucy5zY2VuZUlkKSB7XG4gICAgY2FzZSBcIm5lb25IYWxsXCI6XG4gICAgICByZXR1cm4gY3JlYXRlTmVvbkhhbGwob3B0aW9ucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmVvbkhhbGwob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gaGFsbEdlb21ldHJ5KHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZEhhbGxCYXNlKHByaW1pdGl2ZXMsIHdpZHRoLCBoZWlnaHQsIHRpbWVNcyk7XG4gIGFkZEhhbGxSYWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSk7XG4gIGFkZEhhbGxDcm9zc2JhcnMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gaGFsbEdlb21ldHJ5KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkSGFsbEJhc2UoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHB1bHNlID0gLjU1ICsgTWF0aC5zaW4odGltZU1zICogaGFsbEVuZXJneVNwZWVkKSAqIC4yO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgKiAuNDIsIHdpZHRoOiB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgKiAxLjA4LCBjb2xvcjogaGFsbEZsb29yQ29sb3IsIHNlY29uZGFyeUNvbG9yOiBcIiMwMjA1MGRcIiwgZ2xvdzogLjA1LCBpbnRlbnNpdHk6IC4yMywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBoYWxsRGVlcEJsdWUsIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRDeWFuLCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjc4LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogaGFsbEFjY2VudFBpbmssIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFsbFJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+KTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbERlZXBCbHVlLCAuNDgsIDYuNSk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbE11dGVkQ3lhbiwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbE11dGVkQmx1ZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgaGFsbE11dGVkQ3lhbiwgbGFuZSA9PT0gMiA/IC4yNiA6IC4xOCwgLjkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxDcm9zc2JhcnMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiByb3cgJSA0ID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IHJvdyAlIDQgPT09IDIgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsQWNjZW50UGluaztcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVNwYXduRW50cmFuY2UgPSBcInNjYXR0ZXJcIiB8IFwiZmFkZVwiO1xuZXhwb3J0IHR5cGUgRW5lbXlEZWF0aFZpc3VhbCA9IFwiY2xvdWRcIiB8IFwibm9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFwZUlkOiBzdHJpbmc7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG4gIHNwYXduRW50cmFuY2U6IEVuZW15U3Bhd25FbnRyYW5jZTtcbiAgc3Bhd25Tb3VuZDogc3RyaW5nIHwgbnVsbDtcbiAgZGVhdGhTb3VuZDogc3RyaW5nO1xuICBkZWF0aFZpc3VhbDogRW5lbXlEZWF0aFZpc3VhbDtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiaHVudGVyLWV5ZVwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgZ2xhc3NTaGllbGQ6IHtcbiAgICAgIGxhYmVsOiBcIkdsYXNzIFNoaWVsZFwiLFxuICAgICAgaGVhbHRoOiAuMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNS42LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IC4xLFxuICAgICAgc2NvcmU6IDMsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidHJpY2stZ2F0ZVwiLFxuICAgICAgZ2xvdzogLjYyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xMixcbiAgICAgIHJpbUludGVuc2l0eTogMC45LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC40NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogNzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuMSxcbiAgICAgIHNoYXBlWm9vbTogMy4wNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IC42NSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjI1LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJmYWRlXCIsXG4gICAgICBzcGF3blNvdW5kOiBudWxsLFxuICAgICAgZGVhdGhTb3VuZDogXCJHbGFzc1NoaWVsZFNoYXR0ZXJcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHdpbmdlcjoge1xuICAgICAgbGFiZWw6IFwiV2luZ2VyXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNzYsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxNCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJlbGl0ZS13aW5nc1wiLFxuICAgICAgZ2xvdzogLjg2LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4yMixcbiAgICAgIHJpbUludGVuc2l0eTogMS4yLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC42NixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogODUsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuNzUsXG4gICAgICBzaGFwZVpvb206IDMuMjUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIHRhbms6IHtcbiAgICAgIGxhYmVsOiBcIlRhbmtcIixcbiAgICAgIGhlYWx0aDogNixcbiAgICAgIHNwZWVkOiA0NCxcbiAgICAgIHJhZGl1czogMTYsXG4gICAgICBjb2x1bW5TcGFuOiAzLFxuICAgICAgY29udGFjdERhbWFnZTogMixcbiAgICAgIHNjb3JlOiA4MCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0YW5rLWJ1bmtlclwiLFxuICAgICAgZ2xvdzogMS4wNSxcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuNDUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjg1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDIuNyxcbiAgICAgIHNoYXBlWm9vbTogNC40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMi4xLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuOSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJCb3NzXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkJvc3NEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihvcmIuY29sdW1uU3BhbikgJiYgb3JiLmNvbHVtblNwYW4gPj0gMSwgYCR7aWR9IGNvbHVtblNwYW4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEd1bklkIH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbiAgc3RhcnRpbmdHdW46IEd1bklkO1xuICBzdGFydGluZ0d1bkxldmVsOiAxIHwgMiB8IDM7XG4gIHZpZXdwb3J0OiB7XG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIjtcbiAgICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICAgIGFzcGVjdEhlaWdodDogbnVtYmVyO1xuICAgIGxvZ2ljYWxXaWR0aDogbnVtYmVyO1xuICAgIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgZGVmaW5pdGlvbjogVHJhY2tEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBkaXN0YW5jZUZyb21QbGF5ZXI6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzRW5lbXkgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKTtcbmNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IFBhcnNlZFRyYWNrRW50aXR5W10ge1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGZvciAoY29uc3QgW3N5bWJvbCwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKHRyYWNrLmxlZ2VuZCkpIHtcbiAgICBpZiAoWy4uLnN5bWJvbF0ubGVuZ3RoICE9PSAxIHx8IC9cXHN8XFx8Ly50ZXN0KHN5bWJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIGtleSBcIiR7c3ltYm9sfVwiIG11c3QgYmUgb25lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBvdGhlciB0aGFuIFwifFwiLmApO1xuICAgIH1cbiAgICBpZiAoIWVudHJ5LmlkKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBtdXN0IGhhdmUgYW4gaWQuYCk7XG4gICAgaWYgKGVudHJ5LnNwZWVkICE9PSB1bmRlZmluZWQgJiYgZW50cnkuc3BlZWQgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuXG4gIGxldCBsZWZ0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGV0IHJpZ2h0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcblxuICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBwaXBlQ291bnQgPSBbLi4ucm93LnRleHRdLmZpbHRlcihjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyID09PSBcInxcIikubGVuZ3RoO1xuICAgIGlmIChwaXBlQ291bnQgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IG11c3QgY29udGFpbiBleGFjdGx5IG9uZSBcInxcIiBzZXBhcmF0b3I7IGZvdW5kICR7cGlwZUNvdW50fS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gcm93LnRleHQuc3BsaXQoXCJ8XCIpLm1hcChzaWRlID0+IHNpZGUucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgICBsZWZ0V2lkdGggPz89IGxlZnQubGVuZ3RoO1xuICAgIHJpZ2h0V2lkdGggPz89IHJpZ2h0Lmxlbmd0aDtcblxuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gbGVmdFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgbGVmdCB3aWR0aCAke2xlZnQubGVuZ3RofTsgZXhwZWN0ZWQgJHtsZWZ0V2lkdGh9LmApO1xuICAgIH1cbiAgICBpZiAocmlnaHQubGVuZ3RoICE9PSByaWdodFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgcmlnaHQgd2lkdGggJHtyaWdodC5sZW5ndGh9OyBleHBlY3RlZCAke3JpZ2h0V2lkdGh9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3RhbmNlRnJvbVBsYXllciA9IHJvd3MubGVuZ3RoIC0gMSAtIHJvd0luZGV4O1xuICAgIGZvciAoY29uc3QgW3NpZGUsIGxhbmVdIG9mIFtbXCJsZWZ0XCIsIGxlZnRdLCBbXCJyaWdodFwiLCByaWdodF1dIGFzIGNvbnN0KSB7XG4gICAgICBjb25zdCBvY2N1cGllZEJ5ID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICAgIFsuLi5sYW5lXS5mb3JFYWNoKChzeW1ib2wsIGxhbmVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHRyYWNrLmxlZ2VuZFtzeW1ib2xdO1xuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gdXNlcyBzeW1ib2wgXCIke3N5bWJvbH1cIiBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgaXMgbWlzc2luZyBmcm9tIHRoZSBsZWdlbmQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LmlkID09PSBcImVtcHR5XCIpIHJldHVybjtcbiAgICAgICAgY29uc3QgZW5lbXlJZCA9IGVuZW15SWRGcm9tVHJhY2tJZChlbnRyeS5pZCk7XG4gICAgICAgIGNvbnN0IGNvbHVtblNwYW4gPSBlbmVteUlkID8gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0uY29sdW1uU3BhbiA6IDE7XG4gICAgICAgIGlmIChsYW5lSW5kZXggKyBjb2x1bW5TcGFuID4gbGFuZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBwbGFjZXMgJHtlbnRyeS5pZH0gYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IG5lZWRzICR7Y29sdW1uU3Bhbn0gY29sdW1ucyBhbmQgb25seSAke2xhbmUubGVuZ3RoIC0gbGFuZUluZGV4fSByZW1haW4uYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgY29sdW1uU3Bhbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgICBjb25zdCBvY2N1cGllZCA9IG9jY3VwaWVkQnkuZ2V0KGxhbmVJbmRleCArIG9mZnNldCk7XG4gICAgICAgICAgaWYgKG9jY3VwaWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBwbGFjZXMgJHtlbnRyeS5pZH0gb24gJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4ICsgb2Zmc2V0fSwgYWxyZWFkeSBvY2N1cGllZCBieSAke29jY3VwaWVkfS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgY29sdW1uU3Bhbjsgb2Zmc2V0KyspIG9jY3VwaWVkQnkuc2V0KGxhbmVJbmRleCArIG9mZnNldCwgZW50cnkuaWQpO1xuXG4gICAgICAgIGVudGl0aWVzLnB1c2goe1xuICAgICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgc2lkZSxcbiAgICAgICAgICBsYW5lSW5kZXgsXG4gICAgICAgICAgY29sdW1uU3BhbixcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBkaXN0YW5jZUZyb21QbGF5ZXIsXG4gICAgICAgICAgc3BlZWRNdWx0aXBsaWVyOiAoZW50cnkuc3BlZWQgPz8gMSkgKiAoaXNFbmVteShlbnRyeS5pZCkgPyB0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgOiAxKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbnRpdGllcy5zb3J0KChhLCBiKSA9PlxuICAgIGEuZGlzdGFuY2VGcm9tUGxheWVyIC0gYi5kaXN0YW5jZUZyb21QbGF5ZXIgfHxcbiAgICBhLnJvd0luZGV4IC0gYi5yb3dJbmRleCB8fFxuICAgIGEuc2lkZS5sb2NhbGVDb21wYXJlKGIuc2lkZSkgfHxcbiAgICBhLmxhbmVJbmRleCAtIGIubGFuZUluZGV4KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCAxOiBGaXJzdCBHbG93XCIsXHJcbiAgZGVzY3JpcHRpb246IFwiQSBnZW50bGUgb25ib2FyZGluZyBydW46IGVhcmx5IHRlbnNpb24sIGEgcXVpY2sgcG93ZXItdXAgYmVhdCwgdGhlbiBlYXN5IGVzY2FsYXRpbmcgd2F2ZXMgZm9yIGEgZmlyc3QtdGltZSBwbGF5ZXIuXCIsXHJcbiAgZHVyYXRpb25TZWNvbmRzOiAyNSxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxyXG4gIGVudmlyb25tZW50OiB7XHJcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXHJcbiAgfSxcclxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLi4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLkUuXHJcbi4uRy4uIHwgLi4uLi5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAxIH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDEgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAxIH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xyXG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMjogTmVvbiBXYWtlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHNlY29uZCBvbmJvYXJkaW5nIHJ1bjogYSBzbGlnaHRseSBkZW5zZXIgb3BlbmluZywgZWFybHkgcmVjb3ZlcnkgcGlja3VwcywgYW5kIGEgZ2VudGxlIGZpbmFsZSB0aGF0IHRlYWNoZXMgdGhlIHBsYXllciB0byB0cnVzdCB0aGVpciBncm93aW5nIHNxdWFkLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMzAsXHJcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcclxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgYXNwZWN0V2lkdGg6IDksXHJcbiAgICBhc3BlY3RIZWlnaHQ6IDE2LFxyXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXHJcbiAgICBsb2dpY2FsSGVpZ2h0OiA4MDAsXHJcbiAgfSxcclxuICBlbnZpcm9ubWVudDoge1xyXG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxyXG4gIH0sXHJcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkcuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5JLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uRS5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAxLjEgfSxcclxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEuMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XHJcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCAzOiBQcmlzbSBQcmVzc3VyZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSB0aGlyZCBvbmJvYXJkaW5nIHJ1biBzdHJldGNoZXMgdGhlIHBsYXllclx1MjAxOXMgZW5kdXJhbmNlIHdpdGggbG9uZ2VyIHBhY2luZywgc2FmZXIgdXBncmFkZSB3aW5kb3dzLCBhbmQgZGVuc2VyIGJ1dCBzdGlsbCBmb3JnaXZpbmcgZW5lbXkgcGF0dGVybnMuXCIsXHJcbiAgZHVyYXRpb25TZWNvbmRzOiA2MCxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxyXG4gIGVudmlyb25tZW50OiB7XHJcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXHJcbiAgfSxcclxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi5iIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5KLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlMuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi5iLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDEgfSxcclxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiSlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS4wLFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcclxuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDQ6IFZpb2xldCBTdXJnZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBmb3VydGggcnVuIGRvdWJsZXMgdGhlIGVuZHVyYW5jZSB0ZXN0IGFnYWluLCBhZGRpbmcgZGVuc2VyIHdhdmVzLCBiaWdnZXIgcGlja3VwIHRpbWluZyBkZWNpc2lvbnMsIGFuZCBoaWdoZXItdGllciB0b29scyB3aGlsZSBzdGF5aW5nIHJlYWRhYmxlIGFuZCBmYWlyLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMTIwLFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXHJcbiAgZW52aXJvbm1lbnQ6IHtcclxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcclxuICB9LFxyXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuLi5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uMi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcblMuLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5JLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4uLmIgfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uUy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uSy4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbkVFRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkVFRVxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5YLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYyB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuRUVFLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uRUVFXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkVFRVxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uWC4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRUUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuLi4gfCAuRS4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uRS4gfCAuLi4uLlxyXG4uLkguLiB8IC4uLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS4uLiB8IC4uLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi5FLi4gfCAuLlAuLlxyXG4uLlMuLiB8IC4uSy4uXHJcbi4uYi4uIHwgLi4uLi5cclxuLi5MLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMS4yIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcImJcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC45IH0sXHJcbiAgICAgIFwiS1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJYXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJjXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5uZWVkbGVSYXBpZXJcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJIXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ubmVlZGxlclNtZ1wiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiIH0sXHJcbiAgICAgIFwiTFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDEuMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XHJcbiIsICJpbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayB9IGZyb20gXCIuL1RyYWNrMVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgZ2VuZXJhdGVkVHJhY2syIH0gZnJvbSBcIi4vVHJhY2syXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBnZW5lcmF0ZWRUcmFjazMgfSBmcm9tIFwiLi9UcmFjazNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGdlbmVyYXRlZFRyYWNrNCB9IGZyb20gXCIuL1RyYWNrNFwiO1xuLy8gUmVnaXN0ZXIgYSB0cmFjayBieSBpbXBvcnRpbmcgaXQgYW5kIGFkZGluZyBvbmUgZW50cnkgaGVyZS5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSB7XG4gXG4gIFwidHJhY2sxXCI6IGdlbmVyYXRlZFRyYWNrLFxuICBcInRyYWNrMlwiOiBnZW5lcmF0ZWRUcmFjazIsXG4gIFwidHJhY2szXCI6IGdlbmVyYXRlZFRyYWNrMyxcbiAgXCJ0cmFjazRcIjogZ2VuZXJhdGVkVHJhY2s0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHsgZ2VuZXJhdGVkVHJhY2ssIGdlbmVyYXRlZFRyYWNrMiwgZ2VuZXJhdGVkVHJhY2szLCBnZW5lcmF0ZWRUcmFjazQgfTsgXG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyB0cmFja3MgfSBmcm9tIFwiLi90cmFja3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJ0cmFja1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiVHJhY2tcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHRyYWNrcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2suZHVyYXRpb25TZWNvbmRzID4gMCwgYCR7aWR9IGR1cmF0aW9uIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2sudmlld3BvcnQub3JpZW50YXRpb24gPT09IFwicG9ydHJhaXRcIiAmJiB0cmFjay52aWV3cG9ydC5hc3BlY3RIZWlnaHQgPiB0cmFjay52aWV3cG9ydC5hc3BlY3RXaWR0aCwgYCR7aWR9IG11c3QgdXNlIGl0cyBkZWNsYXJlZCBwb3J0cmFpdCB2aWV3cG9ydC5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0cmFjay52aWV3cG9ydC5sb2dpY2FsV2lkdGggPiAwICYmIHRyYWNrLnZpZXdwb3J0LmxvZ2ljYWxIZWlnaHQgPiAwLCBgJHtpZH0gbG9naWNhbCB2aWV3cG9ydCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZCh0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aXBsaWVyTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3F1YWRBZGRlZDogbnVtYmVyO1xuICBtYXhTcXVhZFNpemU6IG51bWJlcjtcbiAgbWVtYmVyc1BlclJvdzogbnVtYmVyO1xuICBtZW1iZXJSYWRpdXM6IG51bWJlcjtcbiAgc3BhY2luZzogbnVtYmVyO1xuICBwaWNrdXBDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwdWxzZVJhdGU6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNxdWFkIE11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBzcXVhZFBsdXNPbmU6IHtcbiAgICAgIGxhYmVsOiBcIisxIFdpbmdtYXRlXCIsXG4gICAgICBzcXVhZEFkZGVkOiAxLFxuICAgICAgbWF4U3F1YWRTaXplOiAxMCxcbiAgICAgIG1lbWJlcnNQZXJSb3c6IDUsXG4gICAgICBtZW1iZXJSYWRpdXM6IDUuMjUsXG4gICAgICBzcGFjaW5nOiAyOSxcbiAgICAgIHBpY2t1cENvbG9yOiBcImdvbGRcIixcbiAgICAgIGNvcmVDb2xvcjogXCJjeWFuXCIsXG4gICAgICBwdWxzZVJhdGU6IDIuMixcbiAgICAgIHBpY2t1cFNoYXBlWm9vbTogMy4xLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLnNxdWFkQWRkZWQgPiAwLCBgJHtpZH0gbXVzdCBhZGQgc3F1YWQgbWVtYmVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1heFNxdWFkU2l6ZSA+PSBpdGVtLm1lbWJlcnNQZXJSb3csIGAke2lkfSBtYXggc3F1YWQgbXVzdCBmaXQgYXQgbGVhc3Qgb25lIHJvdy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1lbWJlclJhZGl1cyA+IDAgJiYgaXRlbS5zcGFjaW5nID4gaXRlbS5tZW1iZXJSYWRpdXMgKiAyLCBgJHtpZH0gbWVtYmVyIGdlb21ldHJ5IG92ZXJsYXBzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2l0ZW0ucGlja3VwQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwaWNrdXAgY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsaWVyRmFtaWx5ID0gbmV3IE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBNdWx0aXBsaWVySWQgPSBrZXlvZiB0eXBlb2YgbXVsdGlwbGllckZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNoaWVsZE9yYml0ZXJTaGFwZSA9IFwiZG90XCIgfCBcImhleFwiO1xuZXhwb3J0IHR5cGUgU2hpZWxkTW9kZSA9IFwiY2hhcmdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInNoaWVsZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgbW9kZTogU2hpZWxkTW9kZTtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKiBCYXNpYyBzaGllbGQgc3RyZW5ndGguIEVuZW15IEhQIGlzIHN1YnRyYWN0ZWQgZnJvbSB0aGlzIHZhbHVlLiAqL1xuICBtYXhDaGFyZ2VzOiBudW1iZXI7XG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiAwO1xuICBwdXNoRGlzdGFuY2U6IDA7XG4gIHNsb3dNdWx0aXBsaWVyOiAxO1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgb3JiaXRlclNoYXBlOiBTaGllbGRPcmJpdGVyU2hhcGU7XG4gIG9yYml0ZXJDb3VudDogbnVtYmVyO1xuICBvcmJpdGVyU3BlZWQ6IG51bWJlcjtcbiAgb3JiaXRlclNpemU6IG51bWJlcjtcbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNoaWVsZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInNoaWVsZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU2hpZWxkXCI7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBsaWdodEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJMaWdodCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogOCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMSxcbiAgICAgIG9yYml0ZXJTaXplOiA0LjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkxpZ2h0d2VpZ2h0IHNoaWVsZCB3aXRoIHR3byBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBzYXRlbGxpdGVHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiU2F0ZWxsaXRlIEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEwLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDYsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNzUsXG4gICAgICBvcmJpdGVyU2l6ZTogNC43NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiQmFsYW5jZWQgc2hpZWxkIHdpdGggZm91ciBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBoZXhHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiSGV4IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgbWF4Q2hhcmdlczogNyxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTIsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJnb2xkXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiaGV4XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDgsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNDUsXG4gICAgICBvcmJpdGVyU2l6ZTogNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgc2hpZWxkIHdpdGggc2V2ZW4gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc2hpZWxkXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1vZGUgPT09IFwiY2hhcmdlXCIsIGAke2lkfSBtdXN0IHVzZSB0aGUgc2hhcmVkIGNoYXJnZSBiZWhhdmlvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQucmFkaXVzID4gMCwgYCR7aWR9IHJhZGl1cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tYXhDaGFyZ2VzID4gMCwgYCR7aWR9IHN0cmVuZ3RoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJDb3VudCA+IDAsIGAke2lkfSBtdXN0IGhhdmUgb3JiaXRlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJTcGVlZCA+PSAwLCBgJHtpZH0gb3JiaXRlclNwZWVkIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoaWVsZEZhbWlseSA9IG5ldyBTaGllbGRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTaGllbGRJZCA9IGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBIb3cgdGhlIHN3b3JkIHNlbGVjdHMgdGFyZ2V0cyBmcm9tIHRoZSBuZWFyYnkgdGhyZWF0IHBvb2wuXG4gKiBBbGwgbW9kZXMgYXJlIGxhbmUtYXdhcmUgdmlhIHRoZSBOZWFyYnlUaHJlYXRRdWVyeSBtb2R1bGUuXG4gKi9cbmV4cG9ydCB0eXBlIFN3b3JkVGFyZ2V0aW5nTW9kZSA9XG4gIHwgXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiICAgLy8gY2xvc2VzdCBlbmVteSBpbiB0aGUgcGxheWVyJ3MgYWN0aXZlIGxhbmVcbiAgfCBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIiAgICAvLyBjbG9zZXN0IGVuZW15IHJlZ2FyZGxlc3Mgb2YgbGFuZVxuICB8IFwiZnJvbnRNb3N0VGhyZWF0XCIgICAgICAgIC8vIGZhcnRoZXN0LWFkdmFuY2VkIChoaWdoZXN0IHkpIGVuZW15IGluIHJhbmdlXG4gIHwgXCJjbHVzdGVyTmVhclBsYXllclwiOyAgICAgLy8gcGlja3MgdXAgdG8gbWF4VGFyZ2V0cyBlbmVtaWVzIHdpdGhpbiByZWFjaFxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInN3b3JkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICAvKipcbiAgICogQXR0YWNrIHJhbmdlIGluIHBpeGVscyAoYXQgc2NhbGUgMSkuXG4gICAqIFN3b3JkIG9ubHkgc3dpbmdzIHdoZW4gYW4gZW5lbXkgZW50ZXJzIHRoaXMgcmFkaXVzLlxuICAgKi9cbiAgcmFuZ2U6IG51bWJlcjtcbiAgLyoqXG4gICAqIEFuZ3VsYXIgd2lkdGggb2YgdGhlIHNsYXNoIGFyYyBpbiBkZWdyZWVzLlxuICAgKiBXaWRlciA9IGhlYXZpZXIsIGhpdHMgbW9yZSBlbmVtaWVzIHBlciBzd2luZy5cbiAgICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIERhbWFnZSBwZXIgaGl0LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIENvb2xkb3duIGJldHdlZW4gc3dpbmdzIGluIHNlY29uZHMuIFN3b3JkcyBkbyBOT1QgZmlyZSBvbiBhIHRpbWVyIFx1MjAxNCBvbmx5IHdoZW4gYSB0YXJnZXQgZXhpc3RzLiAqL1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgLyoqIE1heGltdW0gdGFyZ2V0cyBoaXQgcGVyIHN3aW5nLiAqL1xuICBtYXhUYXJnZXRzOiBudW1iZXI7XG4gIC8qKiBMYW5lLWF3YXJlIHRhcmdldCBzZWxlY3Rpb24gbW9kZS4gKi9cbiAgdGFyZ2V0aW5nTW9kZTogU3dvcmRUYXJnZXRpbmdNb2RlO1xuICAvKiogVmlzdWFsIHNsYXNoIGFyYyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuICovXG4gIHNsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogUHJpbWFyeSBzbGFzaCBjb2xvci4gKi9cbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIC8qKiBWaXN1YWwgdGhpY2tuZXNzIG11bHRpcGxpZXIgZm9yIHRoZSBzaGFyZWQgc3dvcmQgdHJhaWwuIDEuMCA9IGRlZmF1bHQuICovXG4gIHNsYXNoVGhpY2tuZXNzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBkZXNpZ24gbm90ZXMuIE5vdCB1c2VkIGJ5IHJ1bnRpbWUgXHUyMDE0IGRvY3VtZW50cyBpbnRlbnQgZm9yIGZ1dHVyZSBhZ2VudHMuXG4gICAqL1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZhbWlseSBkZWZpbml0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzd29yZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3dvcmRcIjtcblxuICAvKipcbiAgICogRmFtaWx5LWxldmVsIGltcGxlbWVudGF0aW9uIG5vdGVzOlxuICAgKiAtIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZXkgc3dpbmcgb25seSB3aGVuIGEgdmFsaWQgdGFyZ2V0XG4gICAqICAgaXMgd2l0aGluIHJhbmdlIGFuZCBjb29sZG93biBpcyByZWFkeS4gVGhleSBpZGxlIHNpbGVudGx5IG90aGVyd2lzZS5cbiAgICogLSBPbmUgYWN0aXZlIHN3b3JkIHBlciBwbGF5ZXIgKGZhbWlseS1zY29wZWQgZXhjbHVzaXZpdHkpLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgXHUyMDE0IENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogSGl0cyAxXHUyMDEzMiBlbmVtaWVzIGRlcGVuZGluZyBvbiBhcmMgb3ZlcmxhcC4gU2hvcnQgY29vbGRvd24uXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC44NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwXHUyMDEzMTgwbXMgZmVlbC4gRmFkaW5nIGFmdGVyaW1hZ2UuIExpa2UgYSB3aGlwLWxpa2Uga2F0YW5hIGFyYy5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXZlciBcdTIwMTQgSGVhdnkgc3dvcmQuIFNsb3dlciBidXQgaGl0cyBtdWx0aXBsZSBjbHVzdGVyZWQgZW5lbWllcy5cbiAgICAgKiBXaWRlIGFyYywgdGhpY2tlciBzbGFzaC4gQmV0dGVyIGFnYWluc3QgdGlnaHQgZ3JvdXBzIHRoYW4gZmFzdCBzaW5nbGVzLlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDU2LFxuICAgICAgYXJjRGVncmVlczogMTEwLFxuICAgICAgZGFtYWdlOiAyLjgsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuOCxcbiAgICAgIG1heFRhcmdldHM6IDQsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImNsdXN0ZXJOZWFyUGxheWVyXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDIyMCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuNjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IGFuZCB3aWRlLiBUaGlja2VyIGFyYy4gU3Ryb25nZXIgaW1wYWN0IGZsYXNoLiBHZW9tZXRyaWMgYW5kIHByb2NlZHVyYWwgXHUyMDE0IG5vdCBhIGJ1bGxldC5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmVlZGxlIFJhcGllciBcdTIwMTQgUHJlY2lzaW9uIHN3b3JkLiBMb25nIHJlYWNoLCBuYXJyb3cgYXJjLCBzaW5nbGUgdGFyZ2V0LlxuICAgICAqIFByaW9yaXRpemVzIHRoZSBtb3N0IGRhbmdlcm91cyAoZnJvbnQtbW9zdCkgZW5lbXkuXG4gICAgICovXG4gICAgbmVlZGxlUmFwaWVyOiB7XG4gICAgICBsYWJlbDogXCJOZWVkbGUgUmFwaWVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDcwLFxuICAgICAgYXJjRGVncmVlczogMzAsXG4gICAgICBkYW1hZ2U6IDIuMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMS4xLFxuICAgICAgbWF4VGFyZ2V0czogMSxcbiAgICAgIHRhcmdldGluZ01vZGU6IFwiZnJvbnRNb3N0VGhyZWF0XCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMC41NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRWxlZ2FudCBhbmQgcHJlY2lzZS4gVGhpbiBzdGFiYmluZyBsaW5lLiBOb3QgYSBndW4gc2hvdCBcdTIwMTQgaXQgbXVzdCBmZWVsIG1lbGVlLiBTaW5nbGUgdGFyZ2V0IHByaW9yaXR5LlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gc2xhc2hEdXJhdGlvbk1zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hUaGlja25lc3MgPiAwLCBgJHtpZH0gc2xhc2hUaGlja25lc3MgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzd29yZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3dvcmRGYW1pbHkgPSBuZXcgU3dvcmRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTd29yZElkID0ga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxuICB0eXBlIE5lb25Ub3BEb3duU2hhcGUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBTaGllbGRNZW1iZXIsIFN3b3JkTWVtYmVyIH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZlU2xhc2hBbmltYXRpb24gfSBmcm9tIFwiLi9jb21iYXQvc3dvcmRFdmFsdWF0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGYW1pbHlWaXN1YWxTY2VuZSB7XG4gIHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmNvbnN0IGVtcHR5U2NlbmUgPSAoKTogRmFtaWx5VmlzdWFsU2NlbmUgPT4gKHsgcHJpbWl0aXZlczogW10sIHNoYXBlczogW10gfSk7XG5jb25zdCByZXF1aXJlZFNoYXBlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2hhcGUgPSBnZXROZW9uU2hhcGUoaWQpO1xuICBpZiAoIXNoYXBlKSB0aHJvdyBuZXcgRXJyb3IoYE5lb25GYWN0b3J5IHNoYXBlIFwiJHtpZH1cIiBpcyByZXF1aXJlZCBieSBmYW1pbHkgdmlzdWFscy5gKTtcbiAgcmV0dXJuIHNoYXBlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRWaXN1YWxPcHRpb25zIHtcbiAgZGVmaW5pdGlvbjogU2hpZWxkTWVtYmVyO1xuICBzdHJlbmd0aDogbnVtYmVyO1xuICBpbml0aWFsU3RyZW5ndGg6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG5vdzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgaGl0UHJvZ3Jlc3M/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpZWxkVmlzdWFscyhvcHRpb25zOiBTaGllbGRWaXN1YWxPcHRpb25zKTogRmFtaWx5VmlzdWFsU2NlbmUge1xuICBjb25zdCBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcbiAgY29uc3Qge1xuICAgIGRlZmluaXRpb24sIHgsIHksIG5vdyxcbiAgICBzY2FsZSA9IDEsXG4gICAgaGl0UHJvZ3Jlc3MgPSAxLFxuICAgIHZpc2libGUgPSB0cnVlLFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgc3RyZW5ndGggPSBNYXRoLm1heCgwLCBvcHRpb25zLnN0cmVuZ3RoKTtcbiAgY29uc3QgaW5pdGlhbFN0cmVuZ3RoID0gTWF0aC5tYXgoMSwgb3B0aW9ucy5pbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBpbXBhY3QgPSBNYXRoLm1heCgwLCAxIC0gaGl0UHJvZ3Jlc3MpO1xuICBjb25zdCBleHBsb2RpbmcgPSBzdHJlbmd0aCA8PSAwICYmIGhpdFByb2dyZXNzIDwgMTtcbiAgY29uc3QgY29sb3IgPSBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXTtcbiAgY29uc3QgcmFkaXVzID0gZGVmaW5pdGlvbi5yYWRpdXMgKiBzY2FsZTtcblxuICBpZiAodmlzaWJsZSB8fCBleHBsb2RpbmcpIHtcbiAgICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgICBzaGFwZTogcmVxdWlyZWRTaGFwZShcInNoaWVsZC1yaW5nXCIpLFxuICAgICAgeCwgeSxcbiAgICAgIHNpemU6IHJhZGl1cyxcbiAgICAgIGNvbG9yLFxuICAgICAgbGluZVRoaWNrbmVzczogLjcyLFxuICAgICAgZ2xvdzogMSArIGltcGFjdCAqIC44LFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGVuZXJneUludGVuc2l0eTogMS4xNSArIGltcGFjdCAqIDEuNSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNDIgKyBpbXBhY3QgKiAuMyxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjE1ICsgaW1wYWN0ICogMS4yLFxuICAgICAgZW5lcmd5QmxlZWQ6IC41ICsgaW1wYWN0ICogLjM1LFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiBleHBsb2RpbmcgPyBNYXRoLm1pbigxLCBoaXRQcm9ncmVzcykgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogLjksXG4gICAgfSk7XG4gIH1cblxuICBpZiAoIXZpc2libGUpIHJldHVybiBzY2VuZTtcbiAgY29uc3Qgb3JiaXRlclNoYXBlID0gcmVxdWlyZWRTaGFwZShkZWZpbml0aW9uLm9yYml0ZXJTaGFwZSA9PT0gXCJoZXhcIiA/IFwiaGV4LWZpZ2h0ZXJcIiA6IFwic3Rhci1jb3JlXCIpO1xuICBjb25zdCBvcmJpdGVyQ291bnQgPSBNYXRoLmNlaWwoZGVmaW5pdGlvbi5vcmJpdGVyQ291bnQgKiBzdHJlbmd0aCAvIGluaXRpYWxTdHJlbmd0aCk7XG4gIGNvbnN0IGFuZ2xlU3RlcCA9IE1hdGguUEkgKiAyIC8gZGVmaW5pdGlvbi5vcmJpdGVyQ291bnQ7XG4gIGNvbnN0IGJhc2VBbmdsZSA9IG5vdyAvIDEwMDAgKiBkZWZpbml0aW9uLm9yYml0ZXJTcGVlZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmJpdGVyQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gYmFzZUFuZ2xlICsgaSAqIGFuZ2xlU3RlcDtcbiAgICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgICBzaGFwZTogb3JiaXRlclNoYXBlLFxuICAgICAgeDogeCArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgIHk6IHkgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsXG4gICAgICBzaXplOiBkZWZpbml0aW9uLm9yYml0ZXJTaXplICogMS44ICogc2NhbGUsXG4gICAgICBjb2xvcixcbiAgICAgIHJvdGF0aW9uWjogYW5nbGUgKyBub3cgLyAxNDAwLFxuICAgICAgbGluZVRoaWNrbmVzczogLjcyLFxuICAgICAgZ2xvdzogMSxcbiAgICAgIGVuZXJneUludGVuc2l0eTogMS4xLFxuICAgICAgZW5lcmd5Q292ZXJhZ2U6IC40LFxuICAgICAgZW5lcmd5U3BlZWQ6IDEuMjUsXG4gICAgICBlbmVyZ3lCbGVlZDogLjUsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFN3b3JkTWVtYmVyO1xuICBzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24gfCBudWxsO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzd29yZFRyYWlsKHNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiwgc2NhbGU6IG51bWJlcik6IE5lb25QcmltaXRpdmVbXSB7XG4gIGlmIChzbGFzaC5wcm9ncmVzcyA+PSAxKSByZXR1cm4gW107XG4gIGNvbnN0IGxpZmUgPSAxIC0gc2xhc2gucHJvZ3Jlc3M7XG4gIGNvbnN0IHJhZGl1cyA9IHNsYXNoLnJlYWNoICogc2NhbGU7XG4gIGNvbnN0IGhhbGZBcmMgPSBzbGFzaC5hcmNEZWdyZWVzICogTWF0aC5QSSAvIDM2MDtcbiAgY29uc3QgaGVhZGluZyA9IC1NYXRoLlBJIC8gMjtcbiAgY29uc3Qgc3dlZXAgPSBzbGFzaC5wcm9ncmVzcyA8IC42MiA/IDEgLSBNYXRoLnBvdygxIC0gc2xhc2gucHJvZ3Jlc3MgLyAuNjIsIDMpIDogMTtcbiAgY29uc3QgYmxhZGVBbmdsZSA9IGhlYWRpbmcgLSBoYWxmQXJjICsgc3dlZXAgKiBoYWxmQXJjICogMjtcbiAgY29uc3QgdHJhaWxMZW5ndGggPSBoYWxmQXJjICogKC41NSArIGxpZmUgKiAuNzUpO1xuICBjb25zdCB0aGlja25lc3MgPSBzbGFzaC50aGlja25lc3MgKiBzY2FsZTtcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMTsgaSsrKSB7XG4gICAgY29uc3QgYWdlID0gaSAvIDEwO1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5tYXgoaGVhZGluZyAtIGhhbGZBcmMsIGJsYWRlQW5nbGUgLSB0cmFpbExlbmd0aCAqIGFnZSk7XG4gICAgY29uc3QgZGlzdGFuY2UgPSByYWRpdXMgKiAoLjcyICsgTWF0aC5zaW4oYWdlICogTWF0aC5QSSkgKiAuMDgpO1xuICAgIGNvbnN0IGZhZGUgPSBNYXRoLnBvdygxIC0gYWdlLCAxLjM1KSAqIGxpZmU7XG4gICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgIHg6IHNsYXNoLnggKyBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0YW5jZSxcbiAgICAgIHk6IHNsYXNoLnkgKyBNYXRoLnNpbihhbmdsZSkgKiBkaXN0YW5jZSxcbiAgICAgIHdpZHRoOiBNYXRoLm1heCguOCwgdGhpY2tuZXNzICogKDIuNCAtIGFnZSAqIDEuNTUpKSxcbiAgICAgIGhlaWdodDogcmFkaXVzICogKC4yNCAtIGFnZSAqIC4xKSxcbiAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGdsb3c6IDEuMTUgKiBmYWRlLFxuICAgICAgaW50ZW5zaXR5OiAxLjQ1ICogZmFkZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBhbmdsZSArIE1hdGguUEkgLyAyLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbGVhZGluZ1ggPSBzbGFzaC54ICsgTWF0aC5jb3MoYmxhZGVBbmdsZSkgKiByYWRpdXMgKiAuODI7XG4gIGNvbnN0IGxlYWRpbmdZID0gc2xhc2gueSArIE1hdGguc2luKGJsYWRlQW5nbGUpICogcmFkaXVzICogLjgyO1xuICBwcmltaXRpdmVzLnB1c2goe1xuICAgIHg6IGxlYWRpbmdYLCB5OiBsZWFkaW5nWSxcbiAgICB3aWR0aDogTWF0aC5tYXgoMS4yLCB0aGlja25lc3MgKiAyLjgpLFxuICAgIGhlaWdodDogcmFkaXVzICogLjMyLFxuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICBzZWNvbmRhcnlDb2xvcjogc2xhc2guY29sb3IsXG4gICAgZ2xvdzogMS40ICogbGlmZSxcbiAgICBpbnRlbnNpdHk6IDEuNyAqIGxpZmUsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBibGFkZUFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNyAmJiBzbGFzaC5wcm9ncmVzcyA8IC43OyBpKyspIHtcbiAgICBjb25zdCBzcHJlYWQgPSAoaSAtIDMpICogLjEzO1xuICAgIGNvbnN0IHNwYXJrTGlmZSA9IGxpZmUgKiAoMSAtIE1hdGguYWJzKGkgLSAzKSAqIC4wOCk7XG4gICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgIHg6IGxlYWRpbmdYICsgTWF0aC5jb3MoYmxhZGVBbmdsZSArIHNwcmVhZCkgKiByYWRpdXMgKiAoLjA0ICsgaSAqIC4wMTIpLFxuICAgICAgeTogbGVhZGluZ1kgKyBNYXRoLnNpbihibGFkZUFuZ2xlICsgc3ByZWFkKSAqIHJhZGl1cyAqICguMDQgKyBpICogLjAxMiksXG4gICAgICB3aWR0aDogTWF0aC5tYXgoLjcsIHRoaWNrbmVzcyAqIC43NSksXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqICguMDggKyBpICUgMyAqIC4wMjUpLFxuICAgICAgY29sb3I6IHNsYXNoLmNvbG9yLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgZ2xvdzogMS4xICogc3BhcmtMaWZlLFxuICAgICAgaW50ZW5zaXR5OiAxLjI1ICogc3BhcmtMaWZlLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IGJsYWRlQW5nbGUgKyBzcHJlYWQsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHByaW1pdGl2ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd29yZFZpc3VhbHMob3B0aW9uczogU3dvcmRWaXN1YWxPcHRpb25zKTogRmFtaWx5VmlzdWFsU2NlbmUge1xuICBjb25zdCBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcbiAgaWYgKCFvcHRpb25zLnZpc2libGUpIHJldHVybiBzY2VuZTtcbiAgY29uc3QgeyBkZWZpbml0aW9uLCBzbGFzaCwgeCwgeSwgc2NhbGUgPSAxIH0gPSBvcHRpb25zO1xuICBjb25zdCBoYWxmQXJjID0gZGVmaW5pdGlvbi5hcmNEZWdyZWVzICogTWF0aC5QSSAvIDM2MDtcbiAgY29uc3Qgc3dlZXAgPSBzbGFzaCA/IChzbGFzaC5wcm9ncmVzcyA8IC42MiA/IDEgLSBNYXRoLnBvdygxIC0gc2xhc2gucHJvZ3Jlc3MgLyAuNjIsIDMpIDogMSkgOiAuNTtcbiAgY29uc3Qgc3dvcmRBbmdsZSA9IC1NYXRoLlBJIC8gMiAtIGhhbGZBcmMgKyBzd2VlcCAqIGhhbGZBcmMgKiAyO1xuICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzcGlrZS1sYW5jZVwiKSxcbiAgICB4LCB5LFxuICAgIHNpemU6IE1hdGgubWluKDE3LCBkZWZpbml0aW9uLnJhbmdlICogLjI4KSAqIHNjYWxlLFxuICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICByb3RhdGlvblo6IHN3b3JkQW5nbGUgKyBNYXRoLlBJIC8gMixcbiAgICBsaW5lVGhpY2tuZXNzOiAuODIsXG4gICAgZ2xvdzogc2xhc2ggPyAxLjM1IDogMSxcbiAgICBlbmVyZ3lJbnRlbnNpdHk6IHNsYXNoID8gMS44IDogMS4xNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogc2xhc2ggPyAuNzIgOiAuNDIsXG4gICAgZW5lcmd5U3BlZWQ6IHNsYXNoID8gMi4xIDogMS4yLFxuICAgIGVuZXJneUJsZWVkOiBzbGFzaCA/IC44IDogLjUsXG4gIH0pO1xuICBpZiAoc2xhc2gpIHNjZW5lLnByaW1pdGl2ZXMucHVzaCguLi5zd29yZFRyYWlsKHNsYXNoLCBzY2FsZSkpO1xuICByZXR1cm4gc2NlbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBpY2t1cFNoYXBlKHNoYXBlSWQ6IHN0cmluZywgb3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUge1xuICBjb25zdCB7IHgsIHksIGNvbG9yLCBub3csIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgcmV0dXJuIHtcbiAgICBzaGFwZTogcmVxdWlyZWRTaGFwZShzaGFwZUlkKSxcbiAgICB4OiB4ICsgTWF0aC5zaW4obm93IC8gNDIwICsgeSAqIC4wNykgKiA0LjUgKiBzY2FsZSxcbiAgICB5LFxuICAgIHNpemU6IDEwICogc2NhbGUgKiAoMSArIE1hdGguc2luKG5vdyAvIDYwMCArIHkgKiAuMDUpICogLjA4KSxcbiAgICBjb2xvcixcbiAgICByb3RhdGlvblo6IG5vdyAvIDExMDAsXG4gICAgbGluZVRoaWNrbmVzczogLjc2LFxuICAgIGdsb3c6IDEuMDUsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiAxLjI1LFxuICAgIGVuZXJneUNvdmVyYWdlOiAuNDgsXG4gICAgZW5lcmd5U3BlZWQ6IDEuMzUsXG4gICAgZW5lcmd5QmxlZWQ6IC41NSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHNoaWVsZFBpY2t1cFZpc3VhbCA9IChvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSA9PlxuICBwaWNrdXBTaGFwZShcInNoaWVsZC1yaW5nXCIsIG9wdGlvbnMpO1xuXG5leHBvcnQgY29uc3Qgc3dvcmRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzcGlrZS1sYW5jZVwiLCBvcHRpb25zKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgSGVsaWNvcHRlclZpZXdwb3J0IH0gZnJvbSBcIi4vdmlld3BvcnRcIjtcblxuY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5jb25zdCBwbGF5ZXJGb3J3YXJkUm90YXRpb24gPSB7XG4gIHJvdGF0aW9uWDogZGVncmVlc1RvUmFkaWFucygtNTIpLFxuICByb3RhdGlvblk6IGRlZ3JlZXNUb1JhZGlhbnMoLTEpLFxuICByb3RhdGlvblo6IGRlZ3JlZXNUb1JhZGlhbnMoMSksXG59O1xuY29uc3Qgc2NyZWVuRm9yd2FyZFlhdyA9IChkaXJlY3Rpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMihkaXJlY3Rpb24ueCAvIGxlbmd0aCwgLWRpcmVjdGlvbi55IC8gbGVuZ3RoKTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdG9yVmlzdWFsUm9sZSA9XG4gIHwgXCJncm91bmRGb3J3YXJkXCJcbiAgfCBcInNjcmVlbkJpbGxib2FyZFwiXG4gIHwgXCJ0dW1ibGluZ0JpbGxib2FyZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yT3JpZW50YXRpb25Db250ZXh0IHtcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgcGhhc2U/OiBudW1iZXI7XG4gIGZhY2luZz86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yT3JpZW50YXRpb24ocm9sZTogQWN0b3JWaXN1YWxSb2xlLCBjb250ZXh0OiBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCk6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgc3dpdGNoIChyb2xlKSB7XG4gICAgY2FzZSBcImdyb3VuZEZvcndhcmRcIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGxheWVyRm9yd2FyZFJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblg6IHBsYXllckZvcndhcmRSb3RhdGlvbi5yb3RhdGlvblggKyBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDY1MCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4wNixcbiAgICAgICAgcm90YXRpb25ZOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25ZICsgKGNvbnRleHQuZmFjaW5nID8gc2NyZWVuRm9yd2FyZFlhdyhjb250ZXh0LmZhY2luZykgOiAwKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgXCJ0dW1ibGluZ0JpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDcwMCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4xOCxcbiAgICAgIH07XG4gICAgY2FzZSBcInNjcmVlbkJpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWxpY29wdGVyVmlld3BvcnRGb3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBsYXllclk6IG51bWJlcik6IEhlbGljb3B0ZXJWaWV3cG9ydCB7XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIHBsYXllclkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwiZ3JvdW5kRm9yd2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gICAgZmFjaW5nOiB7IHg6IDAsIHk6IC0xIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInR1bWJsaW5nQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWxsYm9hcmRPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJzY3JlZW5CaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBnZXROZW9uU2hhcGUsIE5lb25TaGFwZUFjdG9yLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlLCB0eXBlIE5lb25TaGFwZUxhYmVsLCB0eXBlIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHN3YXJtU2hhcGVzID0ge1xuICBwbGF5ZXI6IGdldE5lb25TaGFwZShcImFycm93LWNsYXNzaWNcIikhLFxuICBlbmVteTogZ2V0TmVvblNoYXBlKFwiaHVudGVyLWV5ZVwiKSEsXG4gIG11bHRpcGxpZXI6IGdldE5lb25TaGFwZShcImJydWlzZXItY3Jvc3NcIikhLFxuICBndW5QaWNrdXA6IGdldE5lb25TaGFwZShcImhleC1maWdodGVyXCIpISxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwaXhlbHNUb1NoYXBlV29ybGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+ICh7XG4gIHg6ICh4IC8gY2FudmFzLndpZHRoIC0gLjUpICogKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxuICB5OiAoLjUgLSB5IC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwaXhlbHM6IG51bWJlcikgPT4gcGl4ZWxzIC8gY2FudmFzLmhlaWdodCAqIDIuNTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yQXRQaXhlbHMoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgcGl4ZWxTaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgY29uc3Qgd29ybGQgPSBwaXhlbHNUb1NoYXBlV29ybGQoY2FudmFzLCB4LCB5KTtcbiAgYWN0b3IubW92ZVRvKHdvcmxkLngsIHdvcmxkLnkpO1xuICBhY3Rvci5zY2FsZSA9IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZShjYW52YXMsIHBpeGVsU2l6ZSk7XG4gIHJldHVybiBhY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpO1xufVxuXG50eXBlIFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ICYgUGFydGlhbDxQaWNrPE5lb25Ub3BEb3duU2hhcGUsIFwid2lkdGhcIiB8IFwiaGVpZ2h0XCI+PjtcblxuZXhwb3J0IGNvbnN0IGFjdG9ySW5Ub3BEb3duU2NlbmUgPSAoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IHt9KTogTmVvblRvcERvd25TaGFwZSA9PlxuICAoeyAuLi5hY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpLCB4LCB5LCBzaXplIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hhcGVMYWJlbCA9ICh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uOiBOZW9uU2hhcGVMYWJlbFtcInBvc2l0aW9uXCJdLCBmb250U2l6ZTogbnVtYmVyLCBvZmZzZXQgPSA0KTogTmVvblNoYXBlTGFiZWwgPT5cbiAgKHsgdGV4dCwgcG9zaXRpb24sIGZvbnRTaXplLCBvZmZzZXQsIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIiwgZm9udFdlaWdodDogNzAwIH0pO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSwgTmVvblRvcERvd25DbG91ZEJ1cnN0LCBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIGFzcGVjdFdpZHRoOiBudW1iZXI7XG4gIGFzcGVjdEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RlZFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBsYXllclk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDE3MCxcbiAgbG9va0FuZ2xlRGVncmVlczogMjAsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyNTUsXG4gIHpvb206IC43MyxcbiAgaG9yaXpvbjogLjU0LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIGNsb3VkczogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBQcm9qZWN0ZWRTY2VuZSB7XG4gIGNvbnN0IHByb2plY3RQb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCk7XG5cbiAgY29uc3QgcHJvamVjdGVkUHJpbWl0aXZlcyA9IHByaW1pdGl2ZXMubWFwKHByaW1pdGl2ZSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZS5zaGFwZSA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uID8/IDA7XG4gICAgICBjb25zdCBoYWxmTGVuZ3RoID0gcHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGg7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBzdGFydCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCAtIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSAtIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgY29uc3QgZHkgPSBlbmQueSAtIHN0YXJ0Lnk7XG4gICAgICBjb25zdCBzY2FsZSA9IChzdGFydC5zY2FsZSArIGVuZC5zY2FsZSkgKiAuNTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgICAgeDogKHN0YXJ0LnggKyBlbmQueCkgLyAyLFxuICAgICAgICB5OiAoc3RhcnQueSArIGVuZC55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBwcmltaXRpdmUud2lkdGggKiBzY2FsZSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLngsIHByaW1pdGl2ZS55KTtcbiAgICBjb25zdCB3aWR0aCA9IHByaW1pdGl2ZS53aWR0aCAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IGhlaWdodCA9IChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCkgKiBwb2ludC5zY2FsZTtcbiAgICBsZXQgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb247XG4gICAgaWYgKHJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGF4aXNMZW5ndGggPSBNYXRoLm1heChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCwgcHJpbWl0aXZlLndpZHRoLCAxKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBheGlzTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBheGlzTGVuZ3RoKTtcbiAgICAgIHJvdGF0aW9uID0gTWF0aC5hdGFuMihwb2ludC54IC0gZW5kLngsIGVuZC55IC0gcG9pbnQueSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcm90YXRpb24sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdGVkU2hhcGVzID0gc2hhcGVzXG4gICAgLm1hcChzaGFwZSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNoYXBlLFxuICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICBzaXplOiBzaGFwZS5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgICAgIHo6IChzaGFwZS56ID8/IDApIC0gcG9pbnQuZGVwdGggKiAuMDAwOCxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gKChiLnogPz8gMCkgLSAoYS56ID8/IDApKSk7XG5cbiAgY29uc3QgcHJvamVjdGVkQ2xvdWRzID0gY2xvdWRzLm1hcChjbG91ZCA9PiB7XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoY2xvdWQueCwgY2xvdWQueSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICBzaXplOiBjbG91ZC5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlczogcHJvamVjdGVkUHJpbWl0aXZlcywgY2xvdWRzOiBwcm9qZWN0ZWRDbG91ZHMsIHNoYXBlczogcHJvamVjdGVkU2hhcGVzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50KFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSB7XG4gIHJldHVybiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0KSB7XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgbWluRGVwdGggPSAyMDtcblxuICByZXR1cm4gKHg6IG51bWJlciwgeTogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgZGVwdGg6IG51bWJlciB9ID0+IHtcbiAgICBjb25zdCB3b3JsZFggPSB4IC0gY2VudGVyWDtcbiAgICBjb25zdCB3b3JsZFogPSB2aWV3cG9ydC5wbGF5ZXJZIC0geSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlO1xuICAgIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gICAgY29uc3QgY2FtZXJhWSA9IHJlbGF0aXZlWSAqIGNvcyArIHdvcmxkWiAqIHNpbjtcbiAgICBjb25zdCBjYW1lcmFaID0gTWF0aC5tYXgobWluRGVwdGgsIHdvcmxkWiAqIGNvcyAtIHJlbGF0aXZlWSAqIHNpbik7XG4gICAgY29uc3Qgc2NhbGUgPSBmb2NhbExlbmd0aCAvIGNhbWVyYVo7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyB3b3JsZFggKiBzY2FsZSxcbiAgICAgIHk6IGhvcml6b25ZIC0gY2FtZXJhWSAqIHNjYWxlLFxuICAgICAgc2NhbGUsXG4gICAgICBkZXB0aDogY2FtZXJhWixcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29ybGRZRm9yUHJvamVjdGVkWShcbiAgc2NyZWVuWTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogeyBoZWlnaHQ6IG51bWJlcjsgcGxheWVyWTogbnVtYmVyIH0sXG4pOiBudW1iZXIge1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gIGNvbnN0IHNjcmVlblJhdGlvID0gKGhvcml6b25ZIC0gc2NyZWVuWSkgLyBmb2NhbExlbmd0aDtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBzaW4gLSBzY3JlZW5SYXRpbyAqIGNvcztcbiAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IC4wMDAxKSByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIGNvbnN0IHdvcmxkWiA9IC1yZWxhdGl2ZVkgKiAoY29zICsgc2NyZWVuUmF0aW8gKiBzaW4pIC8gZGVub21pbmF0b3I7XG4gIHJldHVybiB2aWV3cG9ydC5wbGF5ZXJZICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2UgLSB3b3JsZFo7XG59XG4iLCAiaW1wb3J0IHtcbiAgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yLFxuICB0eXBlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsXG4gIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0LFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVZpc3VhbFR5cGUgPSBPcmJJZDtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUV4aXRFbnZlbG9wZSB7XG4gIGVudHJ5U2Vjb25kczogbnVtYmVyO1xuICBlbnRyeVB1bmNoOiBudW1iZXI7XG4gIHN1c3RhaW5TZWNvbmRzOiBudW1iZXI7XG4gIHN1c3RhaW5MZXZlbDogbnVtYmVyO1xuICBmYWRlU2Vjb25kczogbnVtYmVyO1xuICBzcGFya0ludGVuc2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdENsb3VkUHJvZmlsZSBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJhZ2VcIiB8IFwiY29sb3JcIiB8IFwiY29yZUNvbG9yXCIgfCBcInhcIiB8IFwieVwiIHwgXCJzZWVkXCI+IHtcbiAgc2l6ZTogbnVtYmVyO1xuICBlbnZlbG9wZTogRW5lbXlFeGl0RW52ZWxvcGU7XG4gIGNsb3VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZDogbnVtYmVyO1xuICBhZ2U6IG51bWJlcjtcbn1cblxuY29uc3QgYmFzaWNPcmJFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICBjbG91ZDogdHJ1ZSxcbiAgc2l6ZTogMTEsXG4gIGRldGFpbDogNixcbiAgdHVyYnVsZW5jZTogMi43MixcbiAgZ2xvdzogMTEsXG4gIGNvcmVJbnRlbnNpdHk6IDEuMjUsXG4gIHJpbUludGVuc2l0eTogLjgsXG4gIG9wYWNpdHk6IC44MixcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBlbnZlbG9wZToge1xuICAgIGVudHJ5U2Vjb25kczogLjE2LFxuICAgIGVudHJ5UHVuY2g6IDIuMzMsXG4gICAgc3VzdGFpblNlY29uZHM6IC4yMSxcbiAgICBzdXN0YWluTGV2ZWw6IDEuMixcbiAgICBmYWRlU2Vjb25kczogLjI5LFxuICAgIHNwYXJrSW50ZW5zaXR5OiAxLjIxLFxuICB9LFxufTtcblxuY29uc3Qgbm9DbG91ZEV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGNsb3VkOiBmYWxzZSxcbiAgc2l6ZTogMCxcbn07XG5cbmNvbnN0IHRhbmtFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICAuLi5iYXNpY09yYkV4aXRQcm9maWxlLFxuICBzaXplOiAxNSxcbiAgZ2xvdzogMTMsXG59O1xuXG5leHBvcnQgY29uc3QgZW5lbXlFeGl0UHJvZmlsZXM6IFJlY29yZDxFbmVteVZpc3VhbFR5cGUsIEVuZW15RXhpdENsb3VkUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiBiYXNpY09yYkV4aXRQcm9maWxlLFxuICBnbGFzc1NoaWVsZDogbm9DbG91ZEV4aXRQcm9maWxlLFxuICB3aW5nZXI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHRhbms6IHRhbmtFeGl0UHJvZmlsZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXREdXJhdGlvbihlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZSk6IG51bWJlciB7XG4gIGNvbnN0IGVudmVsb3BlID0gZW5lbXlFeGl0UHJvZmlsZXNbZW5lbXlUeXBlXS5lbnZlbG9wZTtcbiAgcmV0dXJuIGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzICsgZW52ZWxvcGUuZmFkZVNlY29uZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgcmV0dXJuIHtcbiAgICBlbmVteVR5cGU6IG9wdGlvbnMuZW5lbXlUeXBlLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwLFxuICAgIGFnZTogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHMoZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sIGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGluZGV4ID0gZWZmZWN0cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWZmZWN0ID0gZWZmZWN0c1tpbmRleF07XG4gICAgZWZmZWN0LmFnZSArPSBkZWx0YVNlY29uZHM7XG4gICAgaWYgKGVmZmVjdC5hZ2UgPj0gZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSkpIGVmZmVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlFeGl0Q2xvdWQoZWZmZWN0OiBBY3RpdmVFbmVteUV4aXRFZmZlY3QpOiBOZW9uVG9wRG93bkNsb3VkQnVyc3Qge1xuICBjb25zdCBwcm9maWxlID0gZW5lbXlFeGl0UHJvZmlsZXNbZWZmZWN0LmVuZW15VHlwZV07XG4gIGlmICghcHJvZmlsZS5jbG91ZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgICAgY29yZUNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICB4OiBlZmZlY3QueCxcbiAgICAgIHk6IGVmZmVjdC55LFxuICAgICAgc2l6ZTogMCxcbiAgICAgIGRldGFpbDogMyxcbiAgICAgIHR1cmJ1bGVuY2U6IDAsXG4gICAgICBnbG93OiAwLFxuICAgICAgY29yZUludGVuc2l0eTogMCxcbiAgICAgIHJpbUludGVuc2l0eTogMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkaXNzaXBhdGlvblRpbWU6IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpLFxuICAgICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICAgIGFnZTogZWZmZWN0LmFnZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IGVudmVsb3BlID0gcHJvZmlsZS5lbnZlbG9wZTtcbiAgY29uc3QgZHVyYXRpb24gPSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKTtcbiAgY29uc3QgZW50cnlUID0gTWF0aC5taW4oMSwgZWZmZWN0LmFnZSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmVudHJ5U2Vjb25kcykpO1xuICBjb25zdCBmYWRlU3RhcnQgPSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgKyBlbnZlbG9wZS5zdXN0YWluU2Vjb25kcztcbiAgY29uc3QgZmFkZVQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZWZmZWN0LmFnZSAtIGZhZGVTdGFydCkgLyBNYXRoLm1heCguMDAxLCBlbnZlbG9wZS5mYWRlU2Vjb25kcykpKTtcbiAgY29uc3Qgc3VzdGFpbiA9IGVmZmVjdC5hZ2UgPj0gZW52ZWxvcGUuZW50cnlTZWNvbmRzICYmIGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyBlbnZlbG9wZS5zdXN0YWluTGV2ZWwgOiAxO1xuICBjb25zdCBlbnRyeUZsYXNoID0gMSArIE1hdGguc2luKGVudHJ5VCAqIE1hdGguUEkpICogZW52ZWxvcGUuZW50cnlQdW5jaDtcbiAgY29uc3QgZmFkZUVuZXJneSA9IDEgLSBmYWRlVCAqIC42MjtcbiAgY29uc3Qgc3BhcmtBY2NlbnQgPSAxICsgZmFkZVQgKiBlbnZlbG9wZS5zcGFya0ludGVuc2l0eSAqIC4yMjtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgIGNvcmVDb2xvcjogZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yKGVmZmVjdC5jb2xvciksXG4gICAgeDogZWZmZWN0LngsXG4gICAgeTogZWZmZWN0LnksXG4gICAgc2l6ZTogcHJvZmlsZS5zaXplICogKC40OCArIGVudHJ5VCAqIC41MiksXG4gICAgZGV0YWlsOiBwcm9maWxlLmRldGFpbCxcbiAgICB0dXJidWxlbmNlOiBwcm9maWxlLnR1cmJ1bGVuY2UsXG4gICAgZ2xvdzogKHByb2ZpbGUuZ2xvdyA/PyAxKSAqIGVudHJ5Rmxhc2ggKiBzdXN0YWluICogZmFkZUVuZXJneSAqIHNwYXJrQWNjZW50LFxuICAgIGNvcmVJbnRlbnNpdHk6IChwcm9maWxlLmNvcmVJbnRlbnNpdHkgPz8gMSkgKiAoMSArIGVudmVsb3BlLmVudHJ5UHVuY2ggKiAoMSAtIGVudHJ5VCkgKiAuNTUpLFxuICAgIHJpbUludGVuc2l0eTogKHByb2ZpbGUucmltSW50ZW5zaXR5ID8/IDEpICogKDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjM1KSxcbiAgICBvcGFjaXR5OiAocHJvZmlsZS5vcGFjaXR5ID8/IDEpICogKGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyAxIDogMSAtIGZhZGVUICogLjg4KSxcbiAgICBkaXNzaXBhdGlvblRpbWU6IGR1cmF0aW9uLFxuICAgIGRpc3NpcGF0aW9uQWN0aW9uOiBcInNwYXJrRmFkZVwiLFxuICAgIGRyaWZ0WDogcHJvZmlsZS5kcmlmdFggPz8gMCxcbiAgICBkcmlmdFk6IHByb2ZpbGUuZHJpZnRZID8/IDAsXG4gICAgc2VlZDogZWZmZWN0LnNlZWQsXG4gICAgYWdlOiBNYXRoLm1pbihlZmZlY3QuYWdlLCBkdXJhdGlvbiksXG4gIH07XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5LCB0eXBlIE9yYklkLCB0eXBlIE9yYk1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBlbmVteUVudHJhbmNlUHJvZmlsZXMgfSBmcm9tIFwiLi9lbmVteUVudHJhbmNlVmlzdWFsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlFeGl0RWZmZWN0LCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB9IGZyb20gXCIuL2VuZW15RXhpdFZpc3VhbHNcIjtcbmltcG9ydCB7IHByb2plY3RIZWxpY29wdGVyUG9pbnQsIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB0eXBlIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VHJhY2tJZCA9IGBlbmVteS4ke3N0cmluZ31gO1xuXG5leHBvcnQgY29uc3QgZW5lbXlUcmFja0lkID0gKGVuZW15SWQ6IE9yYklkKTogRW5lbXlUcmFja0lkID0+XG4gIGVuZW15SWQgPT09IFwiYmFzaWNPcmJcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2VuZW15SWR9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoaWQ6IHN0cmluZyk6IHsgZW5lbXlJZDogT3JiSWQ7IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHwgbnVsbCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCA/IHsgZW5lbXlJZCwgZGVmaW5pdGlvbjogb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0gfSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQ6IE9yYklkKTogTmVvblNoYXBlQWN0b3Ige1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF07XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGRlZmluaXRpb24uc2hhcGVJZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgRW5lbXkgXCIke2VuZW15SWR9XCIgdXNlcyBtaXNzaW5nIE5lb25GYWN0b3J5IHNoYXBlIFwiJHtkZWZpbml0aW9uLnNoYXBlSWR9XCIuYCk7XG4gIGNvbnN0IGVudHJhbmNlID0gZW5lbXlFbnRyYW5jZVByb2ZpbGVzW2VuZW15SWRdO1xuICBjb25zdCBhY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7XG4gICAgc2hhcGUsXG4gICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcbiAgICBlbnRyYW5jZUR1cmF0aW9uOiBlbnRyYW5jZS5kdXJhdGlvblNlY29uZHMsXG4gICAgZW50cmFuY2VNYWduaXR1ZGU6IGVudHJhbmNlLnNjYXR0ZXJNYWduaXR1ZGUsXG4gIH0pO1xuICByZXR1cm4gYWN0b3IuZW50ZXIoZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLCBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RGVhdGhFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHwgbnVsbCB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15SWRdO1xuICBpZiAoZGVmaW5pdGlvbi5kZWF0aFZpc3VhbCAhPT0gXCJjbG91ZFwiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNyZWF0ZUVuZW15RXhpdEVmZmVjdCh7XG4gICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15SWQsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZUVuZW15QWN0b3IoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBkZWZpbml0aW9uOiBPcmJNZW1iZXIpOiB2b2lkIHtcbiAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IGRlZmluaXRpb24uZXhwbG9zaW9uTWFnbml0dWRlO1xuICBhY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhbWFnZWFibGVFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVhdEVuZW15KFxuICBlbmVteTogRGFtYWdlYWJsZUVuZW15LFxuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSxcbiAgY29sb3I6IHN0cmluZyA9IG5lb25QYWxldHRlW29yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdLmJhc2VDb2xvcl0sXG4pOiBPcmJNZW1iZXIge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gIGVuZW15LmR5aW5nID0gdHJ1ZTtcbiAgaWYgKCFlbmVteS5leGl0RWZmZWN0U3Bhd25lZCkge1xuICAgIGVuZW15LmV4aXRFZmZlY3RTcGF3bmVkID0gdHJ1ZTtcbiAgICBjb25zdCBlZmZlY3QgPSBjcmVhdGVFbmVteURlYXRoRWZmZWN0KHtcbiAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICB4OiBlbmVteS54LFxuICAgICAgeTogZW5lbXkueSxcbiAgICAgIGNvbG9yLFxuICAgICAgc2VlZDogZW5lbXkuaWQsXG4gICAgfSk7XG4gICAgaWYgKGVmZmVjdCkgZWZmZWN0cy5wdXNoKGVmZmVjdCk7XG4gIH1cbiAgZGlzcG9zZUVuZW15QWN0b3IoZW5lbXkuYWN0b3IsIGRlZmluaXRpb24pO1xuICByZXR1cm4gZGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFbmVteURhbWFnZShvcHRpb25zOiB7XG4gIGVuZW15OiBEYW1hZ2VhYmxlRW5lbXk7XG4gIGVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdO1xuICBkYW1hZ2U/OiBudW1iZXI7XG4gIGltcGFjdE1hZ25pdHVkZT86IG51bWJlcjtcbiAgaGl0Rmxhc2hVbnRpbD86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG59KTogeyBraWxsZWQ6IGJvb2xlYW47IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW29wdGlvbnMuZW5lbXkuZW5lbXlJZF07XG4gIGlmIChvcHRpb25zLmRhbWFnZSkgb3B0aW9ucy5lbmVteS5oZWFsdGggLT0gb3B0aW9ucy5kYW1hZ2U7XG4gIGlmIChvcHRpb25zLmltcGFjdE1hZ25pdHVkZSkge1xuICAgIG9wdGlvbnMuZW5lbXkuYWN0b3IuaW1wYWN0KHtcbiAgICAgIGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sXG4gICAgICBtYWduaXR1ZGU6IG9wdGlvbnMuaW1wYWN0TWFnbml0dWRlIC8gZGVmaW5pdGlvbi5pbXBhY3RSZXNpc3RhbmNlLFxuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLmhpdEZsYXNoVW50aWwgIT09IHVuZGVmaW5lZCkgb3B0aW9ucy5lbmVteS5oaXRGbGFzaFVudGlsID0gb3B0aW9ucy5oaXRGbGFzaFVudGlsO1xuICBpZiAob3B0aW9ucy5lbmVteS5oZWFsdGggPD0gMCkge1xuICAgIHJldHVybiB7IGtpbGxlZDogdHJ1ZSwgZGVmaW5pdGlvbjogZGVmZWF0RW5lbXkob3B0aW9ucy5lbmVteSwgb3B0aW9ucy5lZmZlY3RzLCBvcHRpb25zLmNvbG9yKSB9O1xuICB9XG4gIHJldHVybiB7IGtpbGxlZDogZmFsc2UsIGRlZmluaXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhvcHRpb25zOiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHZpc2libGVUaHJlc2hvbGQ/OiBudW1iZXI7XG59KTogTmVvblByaW1pdGl2ZVtdIHtcbiAgY29uc3QgdGhyZXNob2xkID0gb3B0aW9ucy52aXNpYmxlVGhyZXNob2xkID8/IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmhlYWx0aDtcbiAgaWYgKG9wdGlvbnMubWF4SGVhbHRoIDw9IHRocmVzaG9sZCkgcmV0dXJuIFtdO1xuICBjb25zdCByYXRpbyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wdGlvbnMuaGVhbHRoIC8gb3B0aW9ucy5tYXhIZWFsdGgpKTtcbiAgY29uc3QgeSA9IG9wdGlvbnMueTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgzNiwgb3B0aW9ucy53aWR0aCk7XG4gIGNvbnN0IGxlZnQgPSBvcHRpb25zLnggLSB3aWR0aCAvIDI7XG4gIGNvbnN0IGZpbGxlZCA9IE1hdGgubWF4KDAsIHdpZHRoICogcmF0aW8pO1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHg6IG9wdGlvbnMueCxcbiAgICAgIHksXG4gICAgICB3aWR0aDogOC44LFxuICAgICAgaGVpZ2h0OiB3aWR0aCAvIDIsXG4gICAgICBjb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBnbG93OiAuMDgsXG4gICAgICBpbnRlbnNpdHk6IC40MixcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IGxlZnQgKyBmaWxsZWQgLyAyLFxuICAgICAgeSxcbiAgICAgIHdpZHRoOiA3LjIsXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KDEsIGZpbGxlZCkgLyAyLFxuICAgICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6IC43OCxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15SGVhbHRoQmFyVGFyZ2V0IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoXG4gIHRhcmdldHM6IHJlYWRvbmx5IEVuZW15SGVhbHRoQmFyVGFyZ2V0W10sXG4gIGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gdGFyZ2V0cy5mbGF0TWFwKHRhcmdldCA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW3RhcmdldC5lbmVteUlkXTtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnQodGFyZ2V0LngsIHRhcmdldC55LCBjYW1lcmFTZXR0aW5ncywgdmlld3BvcnQpO1xuICAgIGNvbnN0IHByb2plY3RlZFNpemUgPSB0YXJnZXQuc2l6ZSAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IHNjYWxlID0gdGFyZ2V0LnNjYWxlID8/IDE7XG4gICAgcmV0dXJuIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSAtIHByb2plY3RlZFNpemUgKiAuNzIgLSAxMixcbiAgICAgIHdpZHRoOiBNYXRoLm1heChwcm9qZWN0ZWRTaXplICogMS4zNSwgZGVmaW5pdGlvbi5yYWRpdXMgKiA1LjIgKiBzY2FsZSAqIHBvaW50LnNjYWxlKSxcbiAgICAgIGhlYWx0aDogdGFyZ2V0LmhlYWx0aCxcbiAgICAgIG1heEhlYWx0aDogdGFyZ2V0Lm1heEhlYWx0aCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGdldExhbmVSdW5uZXJTY2VuZU5hbWUsXG4gIGlzTGFuZVJ1bm5lclNjZW5lSWQsXG4gIGxhbmVSdW5uZXJTY2VuZUlkcyxcbiAgTmVvblNoYXBlQWN0b3IsXG4gIG5lb25QYWxldHRlLFxuICBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIsXG4gIGdldE5lb25TaGFwZSxcbiAgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIGd1bkZhbWlseSxcbiAgbXVsdGlwbGllckZhbWlseSxcbiAgb3JiRmFtaWx5LFxuICBzaGllbGRGYW1pbHksXG4gIHN3b3JkRmFtaWx5LFxuICB0cmFja0ZhbWlseSxcbiAgdHlwZSBUcmFja01lbWJlcixcbn0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb25cIjtcbmltcG9ydCB7IHNoaWVsZFBpY2t1cFZpc3VhbCwgc3dvcmRQaWNrdXBWaXN1YWwgfSBmcm9tIFwiLi4vLi4vc3JjL2ZhbWlseVZpc3VhbHNcIjtcbmltcG9ydCB7IGJpbGxib2FyZE9yaWVudGF0aW9uLCBlbmVteU9yaWVudGF0aW9uLCBoZWxpY29wdGVyVmlld3BvcnRGb3IsIHBsYXllck9yaWVudGF0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9yZW5kZXJPcmllbnRhdGlvblwiO1xuaW1wb3J0IHsgYWN0b3JJblRvcERvd25TY2VuZSwgc3dhcm1TaGFwZXMgfSBmcm9tIFwiLi4vLi4vc3JjL3NoYXBlVmlzdWFsc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9zcmMvdmlld3BvcnRcIjtcbmltcG9ydCB7IGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkLCBlbmVteVRyYWNrSWQgfSBmcm9tIFwiLi4vLi4vc3JjL2VuZW15Q2F0YWxvZ1wiO1xuXG50eXBlIFBhbGV0dGVGYW1pbHkgPSBcIlN5c3RlbVwiIHwgXCJFbmVtaWVzXCIgfCBcIkd1bnNcIiB8IFwiU2hpZWxkc1wiIHwgXCJTd29yZHNcIiB8IFwiSXRlbXNcIjtcbnR5cGUgUGFsZXR0ZUl0ZW0gPSB7IGlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IHN5bWJvbDogc3RyaW5nOyBmYW1pbHk6IFBhbGV0dGVGYW1pbHkgfTtcbnR5cGUgQ2VsbFZhbHVlID0gUGFsZXR0ZUl0ZW0gJiB7IHNwZWVkOiBudW1iZXI7IG9jY3VwaWVkQnk/OiB7IHJvdzogbnVtYmVyOyBzaWRlOiAwIHwgMTsgY29sdW1uOiBudW1iZXIgfSB9O1xudHlwZSBTZWxlY3Rpb24gPSB7IHJvdzogbnVtYmVyOyBzaWRlOiAwIHwgMTsgY29sdW1uOiBudW1iZXIgfTtcblxuY29uc3QgZGV2ZWxvcGVyID0gd2luZG93Lkp1c3RUaGVHYW1lc1BsZWFzZT8udXJsT3B0aW9ucz8uaXNFbmFibGVkKFwiZGV2XCIpID8/IGZhbHNlO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZWRpdG9yXCIpIS5oaWRkZW4gPSAhZGV2ZWxvcGVyO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZGV2LXJlcXVpcmVkXCIpIS5oaWRkZW4gPSBkZXZlbG9wZXI7XG5cbmNvbnN0IGxhbmVXaWR0aCA9IDU7XG5jb25zdCBkZWZhdWx0Um93Q291bnQgPSAyNTtcbmNvbnN0IGVtcHR5OiBQYWxldHRlSXRlbSA9IHsgaWQ6IFwiZW1wdHlcIiwgbGFiZWw6IFwiRW1wdHlcIiwgc3ltYm9sOiBcIi5cIiwgZmFtaWx5OiBcIlN5c3RlbVwiIH07XG5jb25zdCBwbGF5ZXJTdGFydDogUGFsZXR0ZUl0ZW0gPSB7IGlkOiBcInBsYXllci5zdGFydFwiLCBsYWJlbDogXCJQbGF5ZXIgU3RhcnRcIiwgc3ltYm9sOiBcIlBcIiwgZmFtaWx5OiBcIlN5c3RlbVwiIH07XG5jb25zdCBwYWxldHRlSXRlbXM6IFBhbGV0dGVJdGVtW10gPSBbXG4gIGVtcHR5LFxuICBwbGF5ZXJTdGFydCxcbiAgLi4uT2JqZWN0LmVudHJpZXMob3JiRmFtaWx5Lm1lbWJlcnMpLm1hcCgoW2lkLCBlbmVteV0sIGluZGV4KSA9PiAoe1xuICAgIGlkOiBlbmVteVRyYWNrSWQoaWQgYXMga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzKSxcbiAgICBsYWJlbDogZW5lbXkubGFiZWwsXG4gICAgc3ltYm9sOiBcIkVHV1RBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiW2luZGV4XSxcbiAgICBmYW1pbHk6IFwiRW5lbWllc1wiIGFzIGNvbnN0LFxuICB9KSksXG4gIC4uLk9iamVjdC5lbnRyaWVzKGd1bkZhbWlseS5tZW1iZXJzKS5tYXAoKFtpZCwgZ3VuXSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGBwaWNrdXAud2VhcG9uLmd1bi4ke2lkfWAsXG4gICAgbGFiZWw6IGd1bi5sYWJlbCxcbiAgICBzeW1ib2w6IFwiR0hJSktMTU5PUVJTVFVWV1hZWlwiW2luZGV4XSxcbiAgICBmYW1pbHk6IFwiR3Vuc1wiIGFzIGNvbnN0LFxuICB9KSksXG4gIC4uLk9iamVjdC5lbnRyaWVzKHNoaWVsZEZhbWlseS5tZW1iZXJzKS5tYXAoKFtpZCwgc2hpZWxkXSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGBwaWNrdXAud2VhcG9uLnNoaWVsZC4ke2lkfWAsXG4gICAgbGFiZWw6IHNoaWVsZC5sYWJlbCxcbiAgICBzeW1ib2w6IFwiU0hYXCJbaW5kZXhdLFxuICAgIGZhbWlseTogXCJTaGllbGRzXCIgYXMgY29uc3QsXG4gIH0pKSxcbiAgLi4uT2JqZWN0LmVudHJpZXMoc3dvcmRGYW1pbHkubWVtYmVycykubWFwKChbaWQsIHN3b3JkXSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGBwaWNrdXAud2VhcG9uLnN3b3JkLiR7aWR9YCxcbiAgICBsYWJlbDogc3dvcmQubGFiZWwsXG4gICAgc3ltYm9sOiBcImFiY1wiW2luZGV4XSxcbiAgICBmYW1pbHk6IFwiU3dvcmRzXCIgYXMgY29uc3QsXG4gIH0pKSxcbiAgeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgbGFiZWw6IFwiMnggU3F1YWRcIiwgc3ltYm9sOiBcIjJcIiwgZmFtaWx5OiBcIkl0ZW1zXCIgfSxcbl07XG5jb25zdCBwYWxldHRlQnlJZCA9IG5ldyBNYXAocGFsZXR0ZUl0ZW1zLm1hcChpdGVtID0+IFtpdGVtLmlkLCBpdGVtXSkpO1xuY29uc3QgcGFsZXR0ZUZhbWlsaWVzOiBQYWxldHRlRmFtaWx5W10gPSBbXCJTeXN0ZW1cIiwgXCJFbmVtaWVzXCIsIFwiR3Vuc1wiLCBcIlNoaWVsZHNcIiwgXCJTd29yZHNcIiwgXCJJdGVtc1wiXTtcblxuY29uc3QgYmxhbmtDZWxsID0gKCk6IENlbGxWYWx1ZSA9PiAoeyAuLi5lbXB0eSwgc3BlZWQ6IDEgfSk7XG5jb25zdCBvY2N1cGllZENlbGwgPSAob3duZXI6IFNlbGVjdGlvbik6IENlbGxWYWx1ZSA9PiAoe1xuICAuLi5lbXB0eSxcbiAgaWQ6IFwiX19vY2N1cGllZFwiLFxuICBsYWJlbDogXCJPY2N1cGllZFwiLFxuICBzeW1ib2w6IFwiXCIsXG4gIGZhbWlseTogXCJTeXN0ZW1cIixcbiAgc3BlZWQ6IDEsXG4gIG9jY3VwaWVkQnk6IG93bmVyLFxufSk7XG5jb25zdCBibGFua1JvdyA9ICgpOiBDZWxsVmFsdWVbXVtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogbGFuZVdpZHRoIH0sIGJsYW5rQ2VsbCkpO1xuXG5sZXQgY2VsbHM6IENlbGxWYWx1ZVtdW11bXSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRlZmF1bHRSb3dDb3VudCB9LCBibGFua1Jvdyk7XG5sZXQgc2VsZWN0ZWQ6IFNlbGVjdGlvbiB8IG51bGwgPSB7IHJvdzogY2VsbHMubGVuZ3RoIC0gMSwgc2lkZTogMCwgY29sdW1uOiAwIH07XG5sZXQgc2VsZWN0ZWRJdGVtID0gZW1wdHk7XG5sZXQgdG9vbFJldmlzaW9uID0gMDtcbmxldCBzZWxlY3Rpb25Ub29sUmV2aXNpb24gPSB0b29sUmV2aXNpb247XG5sZXQgZXhwb3J0VmFyaWFibGVOYW1lID0gXCJuZXdUcmFja1wiO1xubGV0IGV4cG9ydER1cmF0aW9uU2Vjb25kcyA9IGRlZmF1bHRSb3dDb3VudDtcbmxldCBsb2FkZWRMZWdlbmRPcmRlcjogc3RyaW5nW10gfCBudWxsID0gbnVsbDtcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3RyYWNrLWdyaWRcIikhO1xuY29uc3QgZ3JpZFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIuZ3JpZC1wYW5lbFwiKSE7XG5jb25zdCBwYWxldHRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjcGFsZXR0ZVwiKSE7XG5jb25zdCBzcGVlZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNlbnRpdHktc3BlZWRcIikhO1xuY29uc3Qgc2VsZWN0aW9uUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3NlbGVjdGlvblwiKSE7XG5jb25zdCB0cmFja1NvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3RyYWNrLXNvdXJjZVwiKSE7XG5jb25zdCBzY2VuZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3NjZW5lLXNlbGVjdFwiKSE7XG5jb25zdCBncmlkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2dyaWQtY29udGVudFwiKSE7XG5jb25zdCBsYW5lSGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi5sYW5lLWhlYWRpbmdzXCIpITtcbmNvbnN0IG5lYXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLm5lYXItbGFiZWxcIikhO1xuY29uc3QgZ3JpZENhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KFwiI2dyaWQtY2FudmFzXCIpITtcbmNvbnN0IGdyaWRSZW5kZXJFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2dyaWQtcmVuZGVyLWVycm9yXCIpITtcblxuY29uc3QgaW5wdXQgPSA8VCBleHRlbmRzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nKTogVCA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPFQ+KHNlbGVjdG9yKSE7XG5cbmNvbnN0IGNlbGxBdCA9IChzZWxlY3Rpb246IFNlbGVjdGlvbik6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9PlxuICBncmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7c2VsZWN0aW9uLnJvd31cIl1bZGF0YS1zaWRlPVwiJHtzZWxlY3Rpb24uc2lkZX1cIl1bZGF0YS1jb2x1bW49XCIke3NlbGVjdGlvbi5jb2x1bW59XCJdYCk7XG5cbmZ1bmN0aW9uIHJvd0NvdW50KCk6IG51bWJlciB7XG4gIHJldHVybiBjZWxscy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLnJvdyA+PSByb3dDb3VudCgpKSBzZWxlY3RlZC5yb3cgPSByb3dDb3VudCgpIC0gMTtcbiAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLnJvdyA8IDApIHNlbGVjdGVkID0gcm93Q291bnQoKSA+IDAgPyB7IHJvdzogMCwgc2lkZTogMCwgY29sdW1uOiAwIH0gOiBudWxsO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24oKTogdm9pZCB7XG4gIG5vcm1hbGl6ZVNlbGVjdGlvbigpO1xuICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbC5zZWxlY3RlZFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhY2stcm93LnNlbGVjdGVkLXJvd1wiKS5mb3JFYWNoKHJvdyA9PiByb3cuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLXJvd1wiKSk7XG4gIGlmICghc2VsZWN0ZWQpIHtcbiAgICBzZWxlY3Rpb25SZWFkb3V0LnRleHRDb250ZW50ID0gXCJTZWxlY3RlZDogbm9uZVwiO1xuICAgIHJldHVybjtcbiAgfVxuICBjZWxsQXQoc2VsZWN0ZWQpPy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHJhY2stcm93PVwiJHtzZWxlY3RlZC5yb3d9XCJdYCk/LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1yb3dcIik7XG4gIGNvbnN0IGRpc3RhbmNlID0gcm93Q291bnQoKSAtIDEgLSBzZWxlY3RlZC5yb3c7XG4gIHNlbGVjdGlvblJlYWRvdXQudGV4dENvbnRlbnQgPSBgU2VsZWN0ZWQ6IHJvdyAke2Rpc3RhbmNlICsgMX0gZnJvbSBwbGF5ZXIsICR7c2VsZWN0ZWQuc2lkZSA9PT0gMCA/IFwibGVmdFwiIDogXCJyaWdodFwifSBsYW5lLCBjb2x1bW4gJHtzZWxlY3RlZC5jb2x1bW4gKyAxfWA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNlbGwoc2VsZWN0aW9uOiBTZWxlY3Rpb24pOiB2b2lkIHtcbiAgY29uc3QgdmFsdWUgPSBjZWxsc1tzZWxlY3Rpb24ucm93XVtzZWxlY3Rpb24uc2lkZV1bc2VsZWN0aW9uLmNvbHVtbl07XG4gIGNvbnN0IGJ1dHRvbiA9IGNlbGxBdChzZWxlY3Rpb24pO1xuICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuICBidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS5zeW1ib2w7XG4gIGJ1dHRvbi5kYXRhc2V0LmlkID0gdmFsdWUuaWQ7XG4gIGJ1dHRvbi50aXRsZSA9IHZhbHVlLm9jY3VwaWVkQnlcbiAgICA/IGBPY2N1cGllZCBieSAke2NlbGxzW3ZhbHVlLm9jY3VwaWVkQnkucm93XVt2YWx1ZS5vY2N1cGllZEJ5LnNpZGVdW3ZhbHVlLm9jY3VwaWVkQnkuY29sdW1uXS5sYWJlbH1gXG4gICAgOiBgJHt2YWx1ZS5sYWJlbH0ke3ZhbHVlLnNwZWVkID09PSAxID8gXCJcIiA6IGAgLSAke3ZhbHVlLnNwZWVkfXggc3BlZWRgfWA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdyaWQoKTogdm9pZCB7XG4gIGdyaWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dDb3VudCgpOyByb3crKykge1xuICAgIGNvbnN0IHJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvd0VsZW1lbnQuY2xhc3NOYW1lID0gXCJ0cmFjay1yb3dcIjtcbiAgICByb3dFbGVtZW50LmRhdGFzZXQudHJhY2tSb3cgPSBTdHJpbmcocm93KTtcbiAgICByb3dFbGVtZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInJvdy1udW1iZXJcIj4ke3Jvd0NvdW50KCkgLSByb3d9PC9zcGFuPmA7XG4gICAgZm9yIChsZXQgc2lkZSA9IDA7IHNpZGUgPCAyOyBzaWRlKyspIHtcbiAgICAgIGlmIChzaWRlID09PSAxKSByb3dFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPHNwYW4gY2xhc3M9XCJkaXZpZGVyXCI+fDwvc3Bhbj5gKTtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGxhbmVXaWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJjZWxsXCI7XG4gICAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IFN0cmluZyhyb3cpO1xuICAgICAgICBidXR0b24uZGF0YXNldC5zaWRlID0gU3RyaW5nKHNpZGUpO1xuICAgICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBTdHJpbmcoY29sdW1uKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgYFJvdyAke3Jvd0NvdW50KCkgLSByb3d9LCAke3NpZGUgPT09IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIn0gbGFuZSwgY29sdW1uICR7Y29sdW1uICsgMX1gKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZWxlY3RDZWxsKHsgcm93LCBzaWRlOiBzaWRlIGFzIDAgfCAxLCBjb2x1bW4gfSkpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzZWxlY3RlZCA9IHsgcm93LCBzaWRlOiBzaWRlIGFzIDAgfCAxLCBjb2x1bW4gfTtcbiAgICAgICAgICBzZWxlY3Rpb25Ub29sUmV2aXNpb24gPSB0b29sUmV2aXNpb247XG4gICAgICAgICAgcGxhY2VTZWxlY3RlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm93RWxlbWVudC5hcHBlbmQoYnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ3JpZC5hcHBlbmQocm93RWxlbWVudCk7XG4gIH1cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93Q291bnQoKTsgcm93KyspIHtcbiAgICBmb3IgKGxldCBzaWRlID0gMDsgc2lkZSA8IDI7IHNpZGUrKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgbGFuZVdpZHRoOyBjb2x1bW4rKykgcmVuZGVyQ2VsbCh7IHJvdywgc2lkZTogc2lkZSBhcyAwIHwgMSwgY29sdW1uIH0pO1xuICAgIH1cbiAgfVxuICB1cGRhdGVTZWxlY3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0Q2VsbChjYW5kaWRhdGU6IFNlbGVjdGlvbik6IHZvaWQge1xuICBjb25zdCBzYW1lQ2VsbCA9IHNlbGVjdGVkPy5yb3cgPT09IGNhbmRpZGF0ZS5yb3cgJiYgc2VsZWN0ZWQuc2lkZSA9PT0gY2FuZGlkYXRlLnNpZGUgJiYgc2VsZWN0ZWQuY29sdW1uID09PSBjYW5kaWRhdGUuY29sdW1uO1xuICBpZiAoc2FtZUNlbGwgJiYgc2VsZWN0aW9uVG9vbFJldmlzaW9uID09PSB0b29sUmV2aXNpb24pIHtcbiAgICBzZWxlY3RlZCA9IG51bGw7XG4gICAgdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlbGVjdGVkID0gY2FuZGlkYXRlO1xuICBpZiAoc2FtZUNlbGwgJiYgc2VsZWN0aW9uVG9vbFJldmlzaW9uICE9PSB0b29sUmV2aXNpb24pIHBsYWNlU2VsZWN0ZWQoKTtcbiAgc2VsZWN0aW9uVG9vbFJldmlzaW9uID0gdG9vbFJldmlzaW9uO1xuICB1cGRhdGVTZWxlY3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTZWxlY3RlZChpdGVtID0gc2VsZWN0ZWRJdGVtKTogdm9pZCB7XG4gIGlmICghc2VsZWN0ZWQpIHJldHVybjtcbiAgY2xlYXJFbnRpdHlBdChzZWxlY3RlZCk7XG4gIGNvbnN0IHNwYW4gPSBlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZChpdGVtLmlkKT8uZGVmaW5pdGlvbi5jb2x1bW5TcGFuID8/IDE7XG4gIGlmIChzZWxlY3RlZC5jb2x1bW4gKyBzcGFuID4gbGFuZVdpZHRoKSB7XG4gICAgc2VsZWN0aW9uUmVhZG91dC50ZXh0Q29udGVudCA9IGAke2l0ZW0ubGFiZWx9IG5lZWRzICR7c3Bhbn0gY29sdW1ucy4gU2VsZWN0IGNvbHVtbiAke2xhbmVXaWR0aCAtIHNwYW4gKyAxfSBvciBlYXJsaWVyLmA7XG4gICAgcmVuZGVyR3JpZCgpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGxldCBjb2x1bW4gPSBzZWxlY3RlZC5jb2x1bW47IGNvbHVtbiA8IHNlbGVjdGVkLmNvbHVtbiArIHNwYW47IGNvbHVtbisrKSB7XG4gICAgY2xlYXJFbnRpdHlBdCh7IC4uLnNlbGVjdGVkLCBjb2x1bW4gfSk7XG4gIH1cbiAgY29uc3Qgc3BlZWQgPSBOdW1iZXIoc3BlZWRJbnB1dC52YWx1ZSk7XG4gIGNlbGxzW3NlbGVjdGVkLnJvd11bc2VsZWN0ZWQuc2lkZV1bc2VsZWN0ZWQuY29sdW1uXSA9IHtcbiAgICAuLi5pdGVtLFxuICAgIHNwZWVkOiBOdW1iZXIuaXNGaW5pdGUoc3BlZWQpICYmIHNwZWVkID4gMCA/IHNwZWVkIDogMSxcbiAgfTtcbiAgZm9yIChsZXQgY29sdW1uID0gc2VsZWN0ZWQuY29sdW1uICsgMTsgY29sdW1uIDwgc2VsZWN0ZWQuY29sdW1uICsgc3BhbjsgY29sdW1uKyspIHtcbiAgICBjZWxsc1tzZWxlY3RlZC5yb3ddW3NlbGVjdGVkLnNpZGVdW2NvbHVtbl0gPSBvY2N1cGllZENlbGwoc2VsZWN0ZWQpO1xuICB9XG4gIHJlbmRlckdyaWQoKTtcbiAgbG9hZGVkTGVnZW5kT3JkZXIgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBlcmFzZVNlbGVjdGVkKCk6IHZvaWQge1xuICBpZiAoIXNlbGVjdGVkKSByZXR1cm47XG4gIGNsZWFyRW50aXR5QXQoc2VsZWN0ZWQpO1xuICByZW5kZXJHcmlkKCk7XG4gIGxvYWRlZExlZ2VuZE9yZGVyID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbnRpdHlBdChzZWxlY3Rpb246IFNlbGVjdGlvbik6IHZvaWQge1xuICBjb25zdCBjZWxsID0gY2VsbHNbc2VsZWN0aW9uLnJvd11bc2VsZWN0aW9uLnNpZGVdW3NlbGVjdGlvbi5jb2x1bW5dO1xuICBjb25zdCBvd25lciA9IGNlbGwub2NjdXBpZWRCeSA/PyBzZWxlY3Rpb247XG4gIGNvbnN0IG93bmVyQ2VsbCA9IGNlbGxzW293bmVyLnJvd11bb3duZXIuc2lkZV1bb3duZXIuY29sdW1uXTtcbiAgY29uc3Qgc3BhbiA9IGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKG93bmVyQ2VsbC5pZCk/LmRlZmluaXRpb24uY29sdW1uU3BhbiA/PyAxO1xuICBmb3IgKGxldCBjb2x1bW4gPSBvd25lci5jb2x1bW47IGNvbHVtbiA8IE1hdGgubWluKGxhbmVXaWR0aCwgb3duZXIuY29sdW1uICsgc3Bhbik7IGNvbHVtbisrKSB7XG4gICAgY29uc3QgY2FuZGlkYXRlID0gY2VsbHNbb3duZXIucm93XVtvd25lci5zaWRlXVtjb2x1bW5dO1xuICAgIGlmIChjb2x1bW4gPT09IG93bmVyLmNvbHVtbiB8fCBjYW5kaWRhdGUub2NjdXBpZWRCeT8ucm93ID09PSBvd25lci5yb3cgJiYgY2FuZGlkYXRlLm9jY3VwaWVkQnkuc2lkZSA9PT0gb3duZXIuc2lkZSAmJiBjYW5kaWRhdGUub2NjdXBpZWRCeS5jb2x1bW4gPT09IG93bmVyLmNvbHVtbikge1xuICAgICAgY2VsbHNbb3duZXIucm93XVtvd25lci5zaWRlXVtjb2x1bW5dID0gYmxhbmtDZWxsKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhbGV0dGUoKTogdm9pZCB7XG4gIHBhbGV0dGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICBmb3IgKGNvbnN0IGZhbWlseSBvZiBwYWxldHRlRmFtaWxpZXMpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRldGFpbHNcIik7XG4gICAgZGV0YWlscy5vcGVuID0gZmFtaWx5ID09PSBcIlN5c3RlbVwiIHx8IGZhbWlseSA9PT0gXCJFbmVtaWVzXCIgfHwgZmFtaWx5ID09PSBcIkd1bnNcIjtcbiAgICBkZXRhaWxzLmNsYXNzTmFtZSA9IFwicGFsZXR0ZS1mYW1pbHlcIjtcbiAgICBkZXRhaWxzLmlubmVySFRNTCA9IGA8c3VtbWFyeT4ke2ZhbWlseX08L3N1bW1hcnk+YDtcbiAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JvdXAuY2xhc3NOYW1lID0gXCJwYWxldHRlLWl0ZW1zXCI7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBhbGV0dGVJdGVtcy5maWx0ZXIoY2FuZGlkYXRlID0+IGNhbmRpZGF0ZS5mYW1pbHkgPT09IGZhbWlseSkpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICBidXR0b24udGl0bGUgPSBpdGVtLmlkO1xuICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInN5bWJvbFwiPiR7aXRlbS5zeW1ib2x9PC9zcGFuPjxzcGFuPiR7aXRlbS5sYWJlbH08L3NwYW4+YDtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB0b29sUmV2aXNpb24rKztcbiAgICAgICAgcGFsZXR0ZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpLmZvckVhY2goY2FuZGlkYXRlID0+IGNhbmRpZGF0ZS5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIiwgY2FuZGlkYXRlID09PSBidXR0b24pKTtcbiAgICAgIH0pO1xuICAgICAgZ3JvdXAuYXBwZW5kKGJ1dHRvbik7XG4gICAgfVxuICAgIGRldGFpbHMuYXBwZW5kKGdyb3VwKTtcbiAgICBwYWxldHRlLmFwcGVuZChkZXRhaWxzKTtcbiAgfVxuICBwYWxldHRlLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikhLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Um93KG9mZnNldDogMCB8IDEpOiB2b2lkIHtcbiAgY29uc3QgaW5kZXggPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnJvdyArIG9mZnNldCA6IHJvd0NvdW50KCk7XG4gIGNlbGxzLnNwbGljZShpbmRleCwgMCwgYmxhbmtSb3coKSk7XG4gIHNlbGVjdGVkID0geyByb3c6IGluZGV4LCBzaWRlOiBzZWxlY3RlZD8uc2lkZSA/PyAwLCBjb2x1bW46IHNlbGVjdGVkPy5jb2x1bW4gPz8gMCB9O1xuICBleHBvcnREdXJhdGlvblNlY29uZHMgPSByb3dDb3VudCgpO1xuICBsb2FkZWRMZWdlbmRPcmRlciA9IG51bGw7XG4gIHJlbmRlckdyaWQoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU2VsZWN0ZWRSb3coKTogdm9pZCB7XG4gIGlmICghc2VsZWN0ZWQgfHwgcm93Q291bnQoKSA8PSAxKSByZXR1cm47XG4gIGNlbGxzLnNwbGljZShzZWxlY3RlZC5yb3csIDEpO1xuICBzZWxlY3RlZC5yb3cgPSBNYXRoLm1pbihzZWxlY3RlZC5yb3csIHJvd0NvdW50KCkgLSAxKTtcbiAgZXhwb3J0RHVyYXRpb25TZWNvbmRzID0gcm93Q291bnQoKTtcbiAgbG9hZGVkTGVnZW5kT3JkZXIgPSBudWxsO1xuICByZW5kZXJHcmlkKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyR3JpZCgpOiB2b2lkIHtcbiAgY2VsbHMgPSBjZWxscy5tYXAoKCkgPT4gYmxhbmtSb3coKSk7XG4gIGxvYWRlZExlZ2VuZE9yZGVyID0gbnVsbDtcbiAgcmVuZGVyR3JpZCgpO1xufVxuXG5mdW5jdGlvbiBzY2VuZUlkKCk6IExhbmVSdW5uZXJTY2VuZUlkIHtcbiAgcmV0dXJuIGlzTGFuZVJ1bm5lclNjZW5lSWQoc2NlbmVTZWxlY3QudmFsdWUpID8gc2NlbmVTZWxlY3QudmFsdWUgOiBcIm5lb25IYWxsXCI7XG59XG5cbmZ1bmN0aW9uIGxvYWRUcmFjayh0cmFjazogVHJhY2tNZW1iZXIsIGV4cG9ydE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBleHBvcnRWYXJpYWJsZU5hbWUgPSBcImdlbmVyYXRlZFRyYWNrXCI7XG4gIGV4cG9ydER1cmF0aW9uU2Vjb25kcyA9IHRyYWNrLmR1cmF0aW9uU2Vjb25kcztcbiAgbG9hZGVkTGVnZW5kT3JkZXIgPSBPYmplY3Qua2V5cyh0cmFjay5kZWZpbml0aW9uLmxlZ2VuZCk7XG4gIGlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2V4cG9ydC1uYW1lXCIpLnZhbHVlID0gZXhwb3J0VmFyaWFibGVOYW1lO1xuICBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNkaXNwbGF5LW5hbWVcIikudmFsdWUgPSB0cmFjay5sYWJlbDtcbiAgaW5wdXQ8SFRNTFRleHRBcmVhRWxlbWVudD4oXCIjZGVzY3JpcHRpb25cIikudmFsdWUgPSB0cmFjay5kZXNjcmlwdGlvbjtcbiAgaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZW5lbXktaHBcIikudmFsdWUgPSBOdW1iZXIuaXNJbnRlZ2VyKHRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwKSA/IHRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLnRvRml4ZWQoMSkgOiBTdHJpbmcodHJhY2suZGVmaW5pdGlvbi5iYWxhbmNlLmVuZW15SHApO1xuICBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNlbmVteS1zcGVlZFwiKS52YWx1ZSA9IFN0cmluZyh0cmFjay5kZWZpbml0aW9uLmJhbGFuY2UuZW5lbXlTcGVlZCk7XG4gIHNjZW5lU2VsZWN0LnZhbHVlID0gdHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZDtcblxuICBjb25zdCBwYXJzZWRSb3dzID0gdHJhY2suZGVmaW5pdGlvbi5sYXlvdXRcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAocm93ID0+IHJvdy50cmltKCkpXG4gICAgLmZpbHRlcihCb29sZWFuKTtcbiAgY2VsbHMgPSBwYXJzZWRSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IFtsZWZ0ID0gXCJcIiwgcmlnaHQgPSBcIlwiXSA9IHJvdy5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIHJldHVybiBbbGVmdCwgcmlnaHRdLm1hcChzaWRlID0+XG4gICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBsYW5lV2lkdGggfSwgKF8sIGNvbHVtbikgPT4ge1xuICAgICAgICBjb25zdCBzeW1ib2wgPSBzaWRlW2NvbHVtbl0gPz8gXCIuXCI7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdHJhY2suZGVmaW5pdGlvbi5sZWdlbmRbc3ltYm9sXSA/PyB0cmFjay5kZWZpbml0aW9uLmxlZ2VuZFtcIi5cIl0gPz8geyBpZDogXCJlbXB0eVwiIH07XG4gICAgICAgIGNvbnN0IHBhbGV0dGVJdGVtID0gcGFsZXR0ZUJ5SWQuZ2V0KGVudHJ5LmlkKSA/PyB7IGlkOiBlbnRyeS5pZCwgbGFiZWw6IGVudHJ5LmlkLCBzeW1ib2wsIGZhbWlseTogXCJJdGVtc1wiIGFzIGNvbnN0IH07XG4gICAgICAgIHJldHVybiB7IC4uLnBhbGV0dGVJdGVtLCBzeW1ib2wsIHNwZWVkOiBlbnRyeS5zcGVlZCA/PyAxIH07XG4gICAgICB9KSxcbiAgICApIGFzIENlbGxWYWx1ZVtdW107XG4gIH0pO1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBjZWxscy5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgc2lkZSA9IDAgYXMgMCB8IDE7IHNpZGUgPCAyOyBzaWRlID0gKHNpZGUgKyAxKSBhcyAwIHwgMSkge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgbGFuZVdpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCBzcGFuID0gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoY2VsbHNbcm93XVtzaWRlXVtjb2x1bW5dLmlkKT8uZGVmaW5pdGlvbi5jb2x1bW5TcGFuID8/IDE7XG4gICAgICAgIGlmIChzcGFuIDw9IDEpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoY29sdW1uICsgc3BhbiA+IGxhbmVXaWR0aCkgY29udGludWU7XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDE7IG9mZnNldCA8IHNwYW47IG9mZnNldCsrKSBjZWxsc1tyb3ddW3NpZGVdW2NvbHVtbiArIG9mZnNldF0gPSBvY2N1cGllZENlbGwoeyByb3csIHNpZGUsIGNvbHVtbiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2VsZWN0ZWQgPSB7IHJvdzogcm93Q291bnQoKSAtIDEsIHNpZGU6IDAsIGNvbHVtbjogMCB9O1xuICByZW5kZXJHcmlkKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYWNrU291cmNlcygpOiB2b2lkIHtcbiAgdHJhY2tTb3VyY2UuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIj5OZXcgYmxhbmsgdHJhY2s8L29wdGlvbj5gICtcbiAgICBPYmplY3QuZW50cmllcyh0cmFja0ZhbWlseS5tZW1iZXJzKVxuICAgICAgLm1hcCgoW2lkLCB0cmFja10pID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtpZH1cIj4ke3RyYWNrLmxhYmVsfTwvb3B0aW9uPmApXG4gICAgICAuam9pbihcIlwiKTtcbiAgdHJhY2tTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSB0cmFja1NvdXJjZS52YWx1ZSBhcyBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkubWVtYmVycyB8IFwiXCI7XG4gICAgaWYgKCFpZCkge1xuICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBkZWZhdWx0Um93Q291bnQgfSwgYmxhbmtSb3cpO1xuICAgICAgZXhwb3J0VmFyaWFibGVOYW1lID0gXCJuZXdUcmFja1wiO1xuICAgICAgZXhwb3J0RHVyYXRpb25TZWNvbmRzID0gZGVmYXVsdFJvd0NvdW50O1xuICAgICAgbG9hZGVkTGVnZW5kT3JkZXIgPSBudWxsO1xuICAgICAgaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZXhwb3J0LW5hbWVcIikudmFsdWUgPSBcIm5ld1RyYWNrXCI7XG4gICAgICBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNkaXNwbGF5LW5hbWVcIikudmFsdWUgPSBcIk5ldyBUcmFja1wiO1xuICAgICAgaW5wdXQ8SFRNTFRleHRBcmVhRWxlbWVudD4oXCIjZGVzY3JpcHRpb25cIikudmFsdWUgPSBcIkEgaGFuZC1hdXRob3JlZCBOZW9uIFN3YXJtIHRyYWNrLlwiO1xuICAgICAgaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZW5lbXktaHBcIikudmFsdWUgPSBcIjFcIjtcbiAgICAgIGlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2VuZW15LXNwZWVkXCIpLnZhbHVlID0gXCIxXCI7XG4gICAgICBzY2VuZVNlbGVjdC52YWx1ZSA9IFwibmVvbkhhbGxcIjtcbiAgICAgIHNlbGVjdGVkID0geyByb3c6IHJvd0NvdW50KCkgLSAxLCBzaWRlOiAwLCBjb2x1bW46IDAgfTtcbiAgICAgIHJlbmRlckdyaWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9hZFRyYWNrKHRyYWNrRmFtaWx5Lm1lbWJlcnNbaWRdLCBpZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTY2VuZU9wdGlvbnMoKTogdm9pZCB7XG4gIHNjZW5lU2VsZWN0LmlubmVySFRNTCA9IGxhbmVSdW5uZXJTY2VuZUlkc1xuICAgIC5tYXAoaWQgPT4gYDxvcHRpb24gdmFsdWU9XCIke2lkfVwiPiR7Z2V0TGFuZVJ1bm5lclNjZW5lTmFtZShpZCl9PC9vcHRpb24+YClcbiAgICAuam9pbihcIlwiKTtcbiAgc2NlbmVTZWxlY3QudmFsdWUgPSBcIm5lb25IYWxsXCI7XG59XG5cbmNvbnN0IHF1b3RlZCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbmNvbnN0IHNhZmVJZGVudGlmaWVyID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBjbGVhbmVkID0gdmFsdWUucmVwbGFjZSgvW15hLXpBLVowLTlfJF0vZywgXCJcIik7XG4gIHJldHVybiAvXlthLXpBLVpfJF0vLnRlc3QoY2xlYW5lZCkgPyBjbGVhbmVkIDogYHRyYWNrJHtjbGVhbmVkfWA7XG59O1xuXG5mdW5jdGlvbiBleHBvcnRTb3VyY2UoKTogeyBmaWxlTmFtZTogc3RyaW5nOyBzb3VyY2U6IHN0cmluZyB9IHtcbiAgY29uc3QgZXhwb3J0TmFtZSA9IHNhZmVJZGVudGlmaWVyKGlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2V4cG9ydC1uYW1lXCIpLnZhbHVlIHx8IGV4cG9ydFZhcmlhYmxlTmFtZSB8fCBcIm5ld1RyYWNrXCIpO1xuICBjb25zdCBzeW1ib2xzID0gXCIuUEVHSElKS0xNTk9RUlNUVVZXWFlaQUJDREVGR0hJSktMTU5PUVJTVFVWV1hZWjIzNDU2Nzg5XCIuc3BsaXQoXCJcIik7XG4gIGNvbnN0IGVudHJpZXMgPSBuZXcgTWFwPHN0cmluZywgeyBzeW1ib2w6IHN0cmluZzsgdmFsdWU6IENlbGxWYWx1ZSB9PigpO1xuICBjb25zdCB1c2VkU3ltYm9scyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBlbnRyaWVzLnNldChcImVtcHR5QDFcIiwgeyBzeW1ib2w6IFwiLlwiLCB2YWx1ZTogYmxhbmtDZWxsKCkgfSk7XG4gIHVzZWRTeW1ib2xzLmFkZChcIi5cIik7XG4gIGNvbnN0IHN5bWJvbEZvciA9ICh2YWx1ZTogQ2VsbFZhbHVlKTogc3RyaW5nID0+IHtcbiAgICBpZiAodmFsdWUuaWQgPT09IFwiX19vY2N1cGllZFwiKSByZXR1cm4gXCIuXCI7XG4gICAgY29uc3Qga2V5ID0gYCR7dmFsdWUuaWR9QCR7dmFsdWUuc3BlZWR9YDtcbiAgICBjb25zdCBleGlzdGluZyA9IGVudHJpZXMuZ2V0KGtleSk7XG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmcuc3ltYm9sO1xuICAgIGNvbnN0IHByZWZlcnJlZCA9IHZhbHVlLnN5bWJvbC5sZW5ndGggPT09IDEgJiYgIS9cXHN8XFx8Ly50ZXN0KHZhbHVlLnN5bWJvbCkgJiYgIXVzZWRTeW1ib2xzLmhhcyh2YWx1ZS5zeW1ib2wpID8gdmFsdWUuc3ltYm9sIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHN5bWJvbCA9IHByZWZlcnJlZCA/PyBzeW1ib2xzLmZpbmQoY2FuZGlkYXRlID0+ICF1c2VkU3ltYm9scy5oYXMoY2FuZGlkYXRlKSk7XG4gICAgaWYgKCFzeW1ib2wpIHRocm93IG5ldyBFcnJvcihcIlRoaXMgdHJhY2sgdXNlcyBtb3JlIGRpc3RpbmN0IGVudGl0eS9zcGVlZCBjb21iaW5hdGlvbnMgdGhhbiB0aGUgb25lLWNoYXJhY3RlciBsYXlvdXQgY2FuIHJlcHJlc2VudC5cIik7XG4gICAgdXNlZFN5bWJvbHMuYWRkKHN5bWJvbCk7XG4gICAgZW50cmllcy5zZXQoa2V5LCB7IHN5bWJvbCwgdmFsdWUgfSk7XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfTtcbiAgY29uc3QgbGF5b3V0ID0gY2VsbHMubWFwKHJvdyA9PiBgJHtyb3dbMF0ubWFwKHN5bWJvbEZvcikuam9pbihcIlwiKX0gfCAke3Jvd1sxXS5tYXAoc3ltYm9sRm9yKS5qb2luKFwiXCIpfWApLmpvaW4oXCJcXG5cIik7XG4gIGNvbnN0IG9yZGVyZWRFbnRyaWVzID0gWy4uLmVudHJpZXMudmFsdWVzKCldLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoIWxvYWRlZExlZ2VuZE9yZGVyKSByZXR1cm4gMDtcbiAgICBjb25zdCBhSW5kZXggPSBsb2FkZWRMZWdlbmRPcmRlci5pbmRleE9mKGEuc3ltYm9sKTtcbiAgICBjb25zdCBiSW5kZXggPSBsb2FkZWRMZWdlbmRPcmRlci5pbmRleE9mKGIuc3ltYm9sKTtcbiAgICByZXR1cm4gKGFJbmRleCA8IDAgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IGFJbmRleCkgLSAoYkluZGV4IDwgMCA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogYkluZGV4KTtcbiAgfSk7XG4gIGNvbnN0IGxlZ2VuZCA9IG9yZGVyZWRFbnRyaWVzLm1hcCgoeyBzeW1ib2wsIHZhbHVlIH0pID0+XG4gICAgYCAgICAgICR7cXVvdGVkKHN5bWJvbCl9OiB7IGlkOiAke3F1b3RlZCh2YWx1ZS5pZCl9JHt2YWx1ZS5zcGVlZCA9PT0gMSA/IFwiXCIgOiBgLCBzcGVlZDogJHt2YWx1ZS5zcGVlZH1gfSB9LGAsXG4gICkuam9pbihcIlxcblwiKTtcbiAgY29uc3QgaHAgPSBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNlbmVteS1ocFwiKS52YWx1ZSB8fCBcIjFcIjtcbiAgY29uc3Qgc3BlZWQgPSBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNlbmVteS1zcGVlZFwiKS52YWx1ZSB8fCBcIjFcIjtcblxuICByZXR1cm4ge1xuICAgIGZpbGVOYW1lOiBgJHtleHBvcnROYW1lfS50c2AsXG4gICAgc291cmNlOiBgaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0ICR7ZXhwb3J0TmFtZX06IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogJHtxdW90ZWQoaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZGlzcGxheS1uYW1lXCIpLnZhbHVlKX0sXG4gIGRlc2NyaXB0aW9uOiAke3F1b3RlZChpbnB1dDxIVE1MVGV4dEFyZWFFbGVtZW50PihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZSl9LFxuICBkdXJhdGlvblNlY29uZHM6ICR7ZXhwb3J0RHVyYXRpb25TZWNvbmRzfSxcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcbiAgdmlld3BvcnQ6IHtcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxuICAgIGFzcGVjdFdpZHRoOiA5LFxuICAgIGFzcGVjdEhlaWdodDogMTYsXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxuICB9LFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6ICR7cXVvdGVkKHNjZW5lSWQoKSl9LFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBcXGBcbiR7bGF5b3V0fVxuXFxgLFxuICAgIGxlZ2VuZDoge1xuJHtsZWdlbmR9XG4gICAgfSxcbiAgICBiYWxhbmNlOiB7XG4gICAgICBlbmVteUhwOiAke2hwfSxcbiAgICAgIGVuZW15U3BlZWQ6ICR7c3BlZWR9LFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbmAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN5bmNHcmlkQ2FudmFzU2l6ZSgpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICBjb25zdCBvcmlnaW4gPSBncmlkQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgYm91bmRzID0gW2xhbmVIZWFkaW5ncywgZ3JpZCwgbmVhckxhYmVsXS5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwoTWF0aC5tYXgoLi4uYm91bmRzLm1hcChib3VuZCA9PiBib3VuZC5yaWdodCAtIG9yaWdpbi5sZWZ0KSkpKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGdyaWRQYW5lbC5jbGllbnRIZWlnaHQpKTtcbiAgZ3JpZENhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBncmlkQ2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgZ3JpZENhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgZ3JpZENhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICBncmlkQ2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Z3JpZFBhbmVsLnNjcm9sbFRvcH1weClgO1xuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG59XG5cbmZ1bmN0aW9uIGdyaWRTaGFwZXMobm93OiBudW1iZXIpOiBOZW9uVG9wRG93blNoYXBlW10ge1xuICBjb25zdCBhY3RvcnMgPSB7XG4gICAgcGxheWVyOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pLFxuICAgIGd1bjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmd1blBpY2t1cCB9KSxcbiAgICBtdWx0aXBsaWVyOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMubXVsdGlwbGllciB9KSxcbiAgfTtcbiAgY29uc3QgZW5lbXlBY3RvcnMgPSBuZXcgTWFwPHN0cmluZywgTmVvblNoYXBlQWN0b3I+KCk7XG4gIGNvbnN0IGNhbnZhc0JvdW5kcyA9IGdyaWRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHBhbmVsQm91bmRzID0gZ3JpZFBhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB2aWV3cG9ydCA9IHsgd2lkdGg6IGdyaWRDYW52YXMud2lkdGgsIGhlaWdodDogZ3JpZENhbnZhcy5oZWlnaHQsIHBsYXllclk6IGdyaWRDYW52YXMuaGVpZ2h0IH07XG4gIGNvbnN0IGhlbGljb3B0ZXJWaWV3cG9ydCA9IGhlbGljb3B0ZXJWaWV3cG9ydEZvcih2aWV3cG9ydC53aWR0aCwgdmlld3BvcnQuaGVpZ2h0LCB2aWV3cG9ydC5wbGF5ZXJZKTtcbiAgY29uc3Qgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW10gPSBbXTtcbiAgY29uc3QgY2VsbFR1bmluZyA9IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIGxpbmVUaGlja25lc3M6IC40OCxcbiAgICBnbG93OiAuNTIsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiAuNyxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjI0LFxuICAgIGVuZXJneVNwZWVkOiAuNixcbiAgICBlbmVyZ3lCbGVlZDogLjEyLFxuICB9IHNhdGlzZmllcyBQYXJ0aWFsPE5lb25Ub3BEb3duU2hhcGU+O1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd0NvdW50KCk7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgc2lkZSA9IDAgYXMgMCB8IDE7IHNpZGUgPCAyOyBzaWRlID0gKHNpZGUgKyAxKSBhcyAwIHwgMSkge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgbGFuZVdpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxzW3Jvd11bc2lkZV1bY29sdW1uXTtcbiAgICAgICAgaWYgKHZhbHVlLmlkID09PSBcImVtcHR5XCIgfHwgdmFsdWUuaWQgPT09IFwiX19vY2N1cGllZFwiKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gY2VsbEF0KHsgcm93LCBzaWRlLCBjb2x1bW4gfSk7XG4gICAgICAgIGlmICghYnV0dG9uKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgYm91bmRzID0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoYm91bmRzLmJvdHRvbSA8IHBhbmVsQm91bmRzLnRvcCB8fCBib3VuZHMudG9wID4gcGFuZWxCb3VuZHMuYm90dG9tKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZW5lbXlEZWYgPSBlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZCh2YWx1ZS5pZCk/LmRlZmluaXRpb247XG4gICAgICAgIGNvbnN0IHNwYW4gPSBlbmVteURlZj8uY29sdW1uU3BhbiA/PyAxO1xuICAgICAgICBjb25zdCBsYXN0QnV0dG9uID0gc3BhbiA+IDEgPyBjZWxsQXQoeyByb3csIHNpZGUsIGNvbHVtbjogTWF0aC5taW4obGFuZVdpZHRoIC0gMSwgY29sdW1uICsgc3BhbiAtIDEpIH0pIDogYnV0dG9uO1xuICAgICAgICBjb25zdCBsYXN0Qm91bmRzID0gbGFzdEJ1dHRvbj8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgPz8gYm91bmRzO1xuICAgICAgICBjb25zdCBzcGFuV2lkdGggPSBsYXN0Qm91bmRzLnJpZ2h0IC0gYm91bmRzLmxlZnQ7XG4gICAgICAgIGNvbnN0IHggPSAoc3BhbiA+IDEgPyBib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAvIDIgOiBib3VuZHMubGVmdCArIHNwYW5XaWR0aCAvIDIpIC0gY2FudmFzQm91bmRzLmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMudG9wIC0gY2FudmFzQm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCBjZWxsU2l6ZSA9IE1hdGgubWluKGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCkgKiAuMztcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGVuZW15RGVmID8gYm91bmRzLmhlaWdodCAqIC4zNCA6IGNlbGxTaXplO1xuICAgICAgICBpZiAodmFsdWUuaWQgPT09IFwicGxheWVyLnN0YXJ0XCIpIHtcbiAgICAgICAgICBzaGFwZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGFjdG9ycy5wbGF5ZXIsIHgsIHksIHNpemUsIHtcbiAgICAgICAgICAgIC4uLnBsYXllck9yaWVudGF0aW9uKGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgeCwgeSwgbm93LCBjb2x1bW4pLFxuICAgICAgICAgICAgLi4uY2VsbFR1bmluZyxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZW5lbXlEZWYpIHtcbiAgICAgICAgICBsZXQgYWN0b3IgPSBlbmVteUFjdG9ycy5nZXQodmFsdWUuaWQpO1xuICAgICAgICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGVuZW15RGVmLnNoYXBlSWQpO1xuICAgICAgICAgICAgaWYgKCFzaGFwZSkgY29udGludWU7XG4gICAgICAgICAgICBhY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlLCBjb2xvcjogbmVvblBhbGV0dGVbZW5lbXlEZWYuYmFzZUNvbG9yXSB9KTtcbiAgICAgICAgICAgIGVuZW15QWN0b3JzLnNldCh2YWx1ZS5pZCwgYWN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rvci5jb2xvciA9IG5lb25QYWxldHRlW2VuZW15RGVmLmJhc2VDb2xvcl07XG4gICAgICAgICAgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShhY3RvciwgeCwgeSwgc2l6ZSwge1xuICAgICAgICAgICAgLi4uZW5lbXlPcmllbnRhdGlvbihkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHgsIHksIG5vdywgcm93KSxcbiAgICAgICAgICAgIC4uLmNlbGxUdW5pbmcsXG4gICAgICAgICAgICAuLi4oc3BhbiA+IDEgPyB7IHdpZHRoOiBNYXRoLm1pbihzcGFuV2lkdGggKiAuNTgsIHNpemUgKiBzcGFuICogMS44KSwgaGVpZ2h0OiBzaXplIH0gOiB7fSksXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmd1bi5cIikpIHtcbiAgICAgICAgICBjb25zdCBndW5JZCA9IHZhbHVlLmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5ndW4uXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4gICAgICAgICAgY29uc3QgZ3VuID0gZ3VuRmFtaWx5Lm1lbWJlcnNbZ3VuSWRdO1xuICAgICAgICAgIGFjdG9ycy5ndW4uY29sb3IgPSBndW4gPyBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSA6IG5lb25QYWxldHRlLmN5YW47XG4gICAgICAgICAgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShhY3RvcnMuZ3VuLCB4LCB5LCBzaXplLCB7XG4gICAgICAgICAgICAuLi5iaWxsYm9hcmRPcmllbnRhdGlvbihkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHgsIHksIG5vdyksXG4gICAgICAgICAgICAuLi5jZWxsVHVuaW5nLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIpKSB7XG4gICAgICAgICAgY29uc3Qgc2hpZWxkSWQgPSB2YWx1ZS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuICAgICAgICAgIGNvbnN0IHNoaWVsZCA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW3NoaWVsZElkXTtcbiAgICAgICAgICBzaGFwZXMucHVzaCh7XG4gICAgICAgICAgICAuLi5zaGllbGRQaWNrdXBWaXN1YWwoeyB4LCB5LCBub3csIGNvbG9yOiBzaGllbGQgPyBuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdIDogbmVvblBhbGV0dGUuY3lhbiB9KSxcbiAgICAgICAgICAgIC4uLmNlbGxUdW5pbmcsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIpKSB7XG4gICAgICAgICAgY29uc3Qgc3dvcmRJZCA9IHZhbHVlLmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5zd29yZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuICAgICAgICAgIGNvbnN0IHN3b3JkID0gc3dvcmRGYW1pbHkubWVtYmVyc1tzd29yZElkXTtcbiAgICAgICAgICBzaGFwZXMucHVzaCh7XG4gICAgICAgICAgICAuLi5zd29yZFBpY2t1cFZpc3VhbCh7IHgsIHksIG5vdywgY29sb3I6IHN3b3JkID8gbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdIDogbmVvblBhbGV0dGUucGluayB9KSxcbiAgICAgICAgICAgIC4uLmNlbGxUdW5pbmcsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHtcbiAgICAgICAgICBhY3RvcnMubXVsdGlwbGllci5jb2xvciA9IG5lb25QYWxldHRlW211bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmUucGlja3VwQ29sb3JdO1xuICAgICAgICAgIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoYWN0b3JzLm11bHRpcGxpZXIsIHgsIHksIHNpemUsIHtcbiAgICAgICAgICAgIC4uLmJpbGxib2FyZE9yaWVudGF0aW9uKGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgeCwgeSwgbm93KSxcbiAgICAgICAgICAgIC4uLmNlbGxUdW5pbmcsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGFwZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0R3JpZFJlbmRlcmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICBsZXQgcmVuZGVyZXI6IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciB8IG51bGwgPSBudWxsO1xuICBsZXQgcmVuZGVyZXJTaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gIGxldCByZW5kZXJlclJlcXVlc3Q6IFByb21pc2U8TmVvblRvcERvd25TY2VuZVJlbmRlcmVyPiB8IG51bGwgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgbGV0IGZyYW1lID0gMDtcbiAgICBjb25zdCBlbnN1cmVSZW5kZXJlciA9IGFzeW5jICgpOiBQcm9taXNlPE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciB8IG51bGw+ID0+IHtcbiAgICAgIGNvbnN0IHNpemUgPSBzeW5jR3JpZENhbnZhc1NpemUoKTtcbiAgICAgIGlmIChyZW5kZXJlciAmJiByZW5kZXJlclNpemUud2lkdGggPT09IHNpemUud2lkdGggJiYgcmVuZGVyZXJTaXplLmhlaWdodCA9PT0gc2l6ZS5oZWlnaHQpIHJldHVybiByZW5kZXJlcjtcbiAgICAgIGlmICghcmVuZGVyZXJSZXF1ZXN0KSB7XG4gICAgICAgIHJlbmRlcmVyPy5kZXN0cm95KCk7XG4gICAgICAgIHJlbmRlcmVyUmVxdWVzdCA9IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlci5jcmVhdGUoZ3JpZENhbnZhcywgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpLnRoZW4oY3JlYXRlZCA9PiB7XG4gICAgICAgICAgcmVuZGVyZXIgPSBjcmVhdGVkO1xuICAgICAgICAgIHJlbmRlcmVyU2l6ZSA9IHNpemU7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHJlbmRlcmVyUmVxdWVzdCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlcmVyUmVxdWVzdDtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlciA9IChub3c6IG51bWJlcikgPT4ge1xuICAgICAgdm9pZCBlbnN1cmVSZW5kZXJlcigpLnRoZW4oYWN0aXZlUmVuZGVyZXIgPT4ge1xuICAgICAgICBpZiAoIWFjdGl2ZVJlbmRlcmVyKSByZXR1cm47XG4gICAgICAgIGFjdGl2ZVJlbmRlcmVyLnJlbmRlcih7IHNoYXBlczogZ3JpZFNoYXBlcyhub3cpIH0sIG5vdyAvIDEwMDApO1xuICAgICAgfSkuY2F0Y2goY2F1c2UgPT4ge1xuICAgICAgICBncmlkUmVuZGVyRXJyb3IuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGdyaWRSZW5kZXJFcnJvci50ZXh0Q29udGVudCA9IGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZS5tZXNzYWdlIDogU3RyaW5nKGNhdXNlKTtcbiAgICAgIH0pO1xuICAgICAgZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9O1xuICAgIGZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICAgIHJlbmRlcmVyPy5kZXN0cm95KCk7XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChjYXVzZSkge1xuICAgIGdyaWRSZW5kZXJFcnJvci5oaWRkZW4gPSBmYWxzZTtcbiAgICBncmlkUmVuZGVyRXJyb3IudGV4dENvbnRlbnQgPSBjYXVzZSBpbnN0YW5jZW9mIEVycm9yID8gY2F1c2UubWVzc2FnZSA6IFN0cmluZyhjYXVzZSk7XG4gIH1cbn1cblxucmVuZGVyU2NlbmVPcHRpb25zKCk7XG5yZW5kZXJUcmFja1NvdXJjZXMoKTtcbnJlbmRlclBhbGV0dGUoKTtcbnJlbmRlckdyaWQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjcGxhY2UtY2VsbFwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBsYWNlU2VsZWN0ZWQoKSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNlcmFzZS1jZWxsXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXJhc2VTZWxlY3RlZCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNpbnNlcnQtcm93LWZhclwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGluc2VydFJvdygwKSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNpbnNlcnQtcm93LW5lYXJcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBpbnNlcnRSb3coMSkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjZGVsZXRlLXJvd1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVNlbGVjdGVkUm93KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2NsZWFyLWdyaWRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckdyaWQpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjZXhwb3J0LXRyYWNrXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBleHBvcnRlZCA9IGV4cG9ydFNvdXJjZSgpO1xuICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtleHBvcnRlZC5zb3VyY2VdLCB7IHR5cGU6IFwidGV4dC90eXBlc2NyaXB0XCIgfSkpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuaHJlZiA9IHVybDtcbiAgbGluay5kb3dubG9hZCA9IGV4cG9ydGVkLmZpbGVOYW1lO1xuICBsaW5rLmNsaWNrKCk7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFVSTC5yZXZva2VPYmplY3RVUkwodXJsKSwgMTAwMCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2V4cG9ydC1zdGF0dXNcIikhLnRleHRDb250ZW50ID0gYEdlbmVyYXRlZCAke2V4cG9ydGVkLmZpbGVOYW1lfS4gQWRkIGl0IHRvIENvbWJhdERlZmluaXRpb24vdHJhY2tzIGFuZCByZWdpc3RlciBpdCBpbiB0cmFja3MvaW5kZXgudHMuYDtcbn0pO1xuXG52b2lkIHN0YXJ0R3JpZFJlbmRlcmVyKCk7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgSnVzdFRoZUdhbWVzUGxlYXNlPzoge1xuICAgICAgdXJsT3B0aW9ucz86IHtcbiAgICAgICAgaXNFbmFibGVkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLE1BQ3BFLE1BQU0sS0FBSyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3RDLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7QUFDM0MsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEQsQ0FBQztBQUVILElBQU0sT0FBTyxDQUFDLFFBQWdCLFFBQVEsTUFBSyxXQUFXLENBQUMsS0FBSyxLQUFLLE1BQy9ELE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDM0MsUUFBTSxTQUFTLElBQUksSUFBSSxRQUFRO0FBQy9CLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLO0FBQ3ZDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNO0FBQzVELENBQUM7QUFFSCxJQUFNLFVBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFD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QUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBRWxGLEtBQUssUUFBUSxZQUFZLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUMvRSxLQUFLLFFBQVEsWUFBWSxhQUFhLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUwxQixTQUFTLEtBQUtDLE1BQStDO0FBQzNELFFBQU0sUUFBUUEsS0FBSSxRQUFRLEtBQUssRUFBRTtBQUNqQyxNQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBSyxFQUFHLE9BQU0sSUFBSSxNQUFNLDJDQUEyQ0EsSUFBRyxJQUFJO0FBQ3JHLFNBQU87QUFBQSxJQUNMLE9BQU8sU0FBUyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJO0FBQUEsSUFDekMsT0FBTyxTQUFTLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUk7QUFB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O0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixrQkFBa0I7QUFBQSxFQUNsQixVQUFVO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsRUFDakI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTBIUixRQUFRO0FBQUEsTUFDTixLQUFLLEVBQUUsSUFBSSxRQUFRO0FBQUEsTUFDbkIs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Y0FBYyxDQUFDO0FBQ3pHLFNBQVMsY0FBaUMsYUFBYSxFQUFHLGlCQUFpQixTQUFTLGFBQWE7QUFDakcsU0FBUyxjQUFpQyxpQkFBaUIsRUFBRyxpQkFBaUIsU0FBUyxNQUFNLFVBQVUsQ0FBQyxDQUFDO0FBQzFHLFNBQVMsY0FBaUMsa0JBQWtCLEVBQUcsaUJBQWlCLFNBQVMsTUFBTSxVQUFVLENBQUMsQ0FBQztBQUMzRyxTQUFTLGNBQWlDLGFBQWEsRUFBRyxpQkFBaUIsU0FBUyxpQkFBaUI7QUFDckcsU0FBUyxjQUFpQyxhQUFhLEVBQUcsaUJBQWlCLFNBQVMsU0FBUztBQUM3RixTQUFTLGNBQWlDLGVBQWUsRUFBRyxpQkFBaUIsU0FBUyxNQUFNO0FBQzFGLFFBQU0sV0FBVyxhQUFhO0FBQzlCLFFBQU0sTUFBTSxJQUFJLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxTQUFTLE1BQU0sR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUMsQ0FBQztBQUN4RixRQUFNLE9BQU8sU0FBUyxjQUFjLEdBQUc7QUFDdkMsT0FBSyxPQUFPO0FBQ1osT0FBSyxXQUFXLFNBQVM7QUFDekIsT0FBSyxNQUFNO0FBQ1gsU0FBTyxXQUFXLE1BQU0sSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLEdBQUk7QUFDdEQsV0FBUyxjQUEyQixnQkFBZ0IsRUFBRyxjQUFjLGFBQWEsU0FBUyxRQUFRO0FBQ3JHLENBQUM7QUFFRCxLQUFLLGtCQUFrQjsiLAogICJuYW1lcyI6IFsid2lkdGgiLCAiaGVpZ2h0IiwgInNoYWRlciIsICJoZXgiLCAiaGV4IiwgInNoYWRlciIsICJzaGFkZXIiLCAiaGV4IiwgInNjZW5lSWQiLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAiZ2VuZXJhdGVkVHJhY2siLCAiZW5lbXlJZEZyb21UcmFja0lkIl0KfQo=

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
  const depth2 = shape.depth ?? 0.14;
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
  const front = shape.points.map((point, index) => move(point, depth2 / 2, index));
  const back = shape.points.map((point, index) => move(point, -depth2 / 2, index + shape.points.length));
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
  const depth2 = shape.depth ?? 0.14;
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
    const speed2 = magnitude * (0.45 + (Math.sin(index * 91.17) * 0.5 + 0.5) * 0.55);
    const dx = mx / length * progress * speed2, dy = my / length * progress * speed2 + progress * progress * 0.18;
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
  addLoop(shape.points, depth2 / 2, 0.3);
  addLoop(shape.points, -depth2 / 2, 2.1);
  shape.holes?.forEach((hole, index) => {
    addLoop(hole, depth2 / 2 + 2e-3, 3.7 + index);
    addLoop(hole, -depth2 / 2 - 2e-3, 5.2 + index);
  });
  shape.points.forEach((point, index) => addLine(move(point, -depth2 / 2), move(point, depth2 / 2), 6.1 + index));
  const time = performance.now() / 1e3 * (instance.energySpeed ?? 1);
  const branchStrength = (instance.energyIntensity ?? 1) * (instance.energyCoverage ?? 0.32);
  const random = (seed) => {
    const value = Math.sin(seed * 12.9898 + shape.points.length * 78.233) * 43758.5453;
    return value - Math.floor(value);
  };
  const rotated = (x, y, radians2) => [
    x * Math.cos(radians2) - y * Math.sin(radians2),
    x * Math.sin(radians2) + y * Math.cos(radians2)
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
        addLine(move(hazeStart, depth2 / 2 + 2e-3), move(hazeEnd, depth2 / 2 + 2e-3), 31 + seed + segment, 1.45 + fade * 0.55, fade * 0.34);
      });
    }
    if (branchActive) {
      points.slice(0, -1).forEach((start, segment) => {
        addLine(move(start, depth2 / 2 + 6e-3), move(points[segment + 1], depth2 / 2 + 6e-3), 11 + seed + segment, 0.42);
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

// projects/NeonFactory/test-pages/shapes/tuning-storage.ts
var storageKey = "neonFactory.shapeTunings.v1";
var defaultShapeTunings = {
  zoom: 0.21,
  depth: 0.06,
  lineThickness: 0.54,
  energyIntensity: 1.1,
  energyCoverage: 0.32,
  energySpeed: 0.79,
  energyBleed: 0.35
};
function loadShapeTuningStorage() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) ?? "null");
    return {
      version: 1,
      tunings: { ...defaultShapeTunings, ...parsed?.tunings },
      notes: parsed?.notes ?? {},
      labels: parsed?.labels ?? {}
    };
  } catch {
    return { version: 1, tunings: { ...defaultShapeTunings }, notes: {}, labels: {} };
  }
}
function saveShapeTuningStorage(value) {
  localStorage.setItem(storageKey, JSON.stringify(value));
}
function exportShapeTunings(storage2) {
  const notedShapes = Object.entries(storage2.notes).filter(([, note]) => note.trim());
  const notesJson = Object.fromEntries(notedShapes);
  const markdown = `# NeonFactory Shape Tunings

Generated: ${(/* @__PURE__ */ new Date()).toISOString()}

## Global rendering tunings

\`\`\`json
${JSON.stringify(storage2.tunings, null, 2)}
\`\`\`

## Shape notes

\`\`\`json
${JSON.stringify(notesJson, null, 2)}
\`\`\`

## Shape label defaults

\`\`\`json
${JSON.stringify(storage2.labels, null, 2)}
\`\`\`
`;
  const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "neonfactory-shape-tunings.md";
  anchor.click();
  URL.revokeObjectURL(url);
}

// projects/NeonFactory/test-pages/shapes/inspector.ts
var q = (selector) => document.querySelector(selector);
var canvas = q("#stage");
var status = q("#test-status");
var error = q("#error");
var select = q("#shape");
var zoom = q("#zoom");
var depth = q("#depth");
var thickness = q("#thickness");
var intensity = q("#intensity");
var coverage = q("#coverage");
var speed = q("#speed");
var bleed = q("#bleed");
var rotationX = q("#rotation-x");
var rotationY = q("#rotation-y");
var rotationZ = q("#rotation-z");
var rotationReadout = q("#rotation-readout");
var labelText = q("#label-text");
var labelPosition = q("#label-position");
var labelOffset = q("#label-offset");
var labelFont = q("#label-font");
var labelSize = q("#label-size");
var velocityX = q("#velocity-x");
var velocityY = q("#velocity-y");
var impactMagnitude = q("#impact-magnitude");
var impactVector = q("#impact-vector");
var disposal = q("#disposal");
var explodeMagnitude = q("#explode-magnitude");
var notes = q("#notes");
var auto = q("#auto");
var title = q("#title");
var readout = q("#readout");
var entranceDuration = q("#entrance-duration");
var entranceMagnitude = q("#entrance-magnitude");
select.innerHTML = neonShapeCatalog.map((shape, i) => `<option value="${i}">${shape.family.toUpperCase()} \xB7 ${shape.name}</option>`).join("");
var requested = new URLSearchParams(location.search).get("shape");
var requestedIndex = neonShapeCatalog.findIndex((shape) => shape.id === requested);
if (requestedIndex >= 0) select.value = String(requestedIndex);
var storage = loadShapeTuningStorage();
zoom.value = String(storage.tunings.zoom * 100);
depth.value = String(storage.tunings.depth * 100);
thickness.value = String(storage.tunings.lineThickness * 100);
intensity.value = String(storage.tunings.energyIntensity * 100);
coverage.value = String(storage.tunings.energyCoverage * 100);
speed.value = String(storage.tunings.energySpeed * 100);
bleed.value = String(storage.tunings.energyBleed * 100);
var currentShape = () => neonShapeCatalog[Number(select.value)];
var actor = new NeonShapeActor({ shape: currentShape(), scale: Number(zoom.value) / 100 });
var loadShapeSettings = () => {
  const saved = storage.labels[currentShape().id];
  notes.value = storage.notes[currentShape().id] ?? "";
  labelText.value = saved?.text ?? "";
  labelPosition.value = saved?.position ?? "above";
  labelOffset.value = String(saved?.offset ?? 8);
  labelFont.value = saved?.fontFamily ?? "Segoe UI, sans-serif";
  labelSize.value = String(saved?.fontSize ?? 18);
  actor = new NeonShapeActor({ shape: currentShape(), scale: Number(zoom.value) / 100 });
};
loadShapeSettings();
var saveTunings = () => {
  storage.tunings = { zoom: +zoom.value / 100, depth: +depth.value / 100, lineThickness: +thickness.value / 100, energyIntensity: +intensity.value / 100, energyCoverage: +coverage.value / 100, energySpeed: +speed.value / 100, energyBleed: +bleed.value / 100 };
  saveShapeTuningStorage(storage);
};
[zoom, depth, thickness, intensity, coverage, speed, bleed].forEach((control) => control.addEventListener("input", saveTunings));
var saveLabel = () => {
  storage.labels[currentShape().id] = { text: labelText.value, position: labelPosition.value, offset: +labelOffset.value, fontFamily: labelFont.value, fontSize: +labelSize.value };
  saveShapeTuningStorage(storage);
};
[labelText, labelPosition, labelOffset, labelFont, labelSize].forEach((control) => control.addEventListener("input", saveLabel));
select.addEventListener("change", loadShapeSettings);
notes.addEventListener("input", () => {
  storage.notes[currentShape().id] = notes.value;
  saveShapeTuningStorage(storage);
});
q("#export").addEventListener("click", () => exportShapeTunings(storage));
var dragging = false;
var px = 0;
var py = 0;
var inputX = 0;
var inputY = 0;
var impactDirection = { x: 0, y: -1 };
var radians = (degrees) => degrees * Math.PI / 180;
var clampDegrees = (value) => Math.max(-180, Math.min(180, value));
var rotationLabel = () => `X ${(+rotationX.value).toFixed(0)}, Y ${(+rotationY.value).toFixed(0)}, Z ${(+rotationZ.value).toFixed(0)}`;
var reset = () => {
  rotationX.value = "16";
  rotationY.value = "-17";
  rotationZ.value = "0";
  actor.moveTo(0, 0).setVelocity(0, 0).regenerate();
};
q("#reset").addEventListener("click", reset);
canvas.addEventListener("pointerdown", (event) => {
  if (event.shiftKey) {
    dragging = true;
    px = event.clientX;
    py = event.clientY;
    canvas.setPointerCapture(event.pointerId);
    return;
  }
  const rect = canvas.getBoundingClientRect();
  impactDirection = { x: event.clientX - (rect.left + rect.width / 2), y: rect.top + rect.height / 2 - event.clientY };
  impactVector.style.transform = `rotate(${Math.atan2(-impactDirection.y, impactDirection.x)}rad)`;
});
canvas.addEventListener("pointermove", (event) => {
  if (dragging) {
    rotationY.value = String(clampDegrees(+rotationY.value + (event.clientX - px) * 0.45));
    rotationX.value = String(clampDegrees(+rotationX.value + (event.clientY - py) * 0.45));
    px = event.clientX;
    py = event.clientY;
    auto.checked = false;
  }
});
canvas.addEventListener("pointerup", () => dragging = false);
q("#impact").addEventListener("click", () => actor.impact({ direction: impactDirection, magnitude: +impactMagnitude.value / 100 }));
q("#entrance").addEventListener("click", () => actor.enter(+entranceDuration.value / 100, +entranceMagnitude.value / 100));
q("#stop-movement").addEventListener("click", () => {
  velocityX.value = "0";
  velocityY.value = "0";
  actor.setVelocity(0, 0);
});
q("#dispose").addEventListener("click", () => {
  actor.explodeMagnitude = +explodeMagnitude.value / 100;
  actor.dispose(disposal.value);
  setTimeout(() => {
    actor = new NeonShapeActor({ shape: currentShape(), scale: +zoom.value / 100, explodeMagnitude: +explodeMagnitude.value / 100 });
  }, 1100);
});
var controllerWindow = window;
controllerWindow.gameController?.createJoystick({ element: "#stick", knobSelector: "i", radius: 54, orientationLayout: { portrait: { x: 86, yFromBottom: 86 }, landscape: { x: 86, yFromBottom: 86 } } }).onChange((value) => {
  inputX = value.x;
  inputY = value.y;
  auto.checked = false;
});
var test = createTestPage("neon-factory-shape-inspector", { impact: (direction, magnitude) => actor.impact({ direction, magnitude }), dispose: (mode) => actor.dispose(mode), moveTo: (x, y) => actor.moveTo(x, y) }, status);
try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 900, 700);
  let frame = 0, last = performance.now();
  const render = (now) => {
    const dt = Math.min(0.04, (now - last) / 1e3);
    last = now;
    rotationX.value = String(clampDegrees(+rotationX.value + inputY * dt * 126));
    rotationY.value = String(clampDegrees(+rotationY.value + inputX * dt * 126));
    actor.shape = { ...currentShape(), depth: +depth.value / 100 };
    actor.scale = +zoom.value / 100;
    actor.setVelocity(+velocityX.value / 100, +velocityY.value / 100).update(dt);
    let ax = radians(+rotationX.value), ay = radians(+rotationY.value), az = radians(+rotationZ.value);
    if (auto.checked) {
      const wave = Math.sin(now / 700) * 0.24;
      if (actor.shape.rock === "pitch") ax += wave;
      if (actor.shape.rock === "roll") az += wave;
      if (actor.shape.rock === "yaw" || actor.shape.rock === "orbit") ay += wave;
    }
    actor.rotationX = ax;
    actor.rotationY = ay;
    actor.rotationZ = az;
    actor.label = labelText.value ? { text: labelText.value, position: labelPosition.value, offset: +labelOffset.value, fontFamily: labelFont.value, fontSize: +labelSize.value } : void 0;
    actor.entranceDuration = +entranceDuration.value / 100;
    actor.entranceMagnitude = +entranceMagnitude.value / 100;
    const currentRotationLabel = rotationLabel();
    rotationReadout.value = currentRotationLabel;
    title.textContent = actor.shape.name;
    readout.textContent = `${actor.shape.family.toUpperCase()} \xB7 ${actor.shape.rock} \xB7 rotation ${currentRotationLabel} \xB7 entrance ${actor.entranceDuration.toFixed(2)}s \xB7 position ${actor.x.toFixed(2)}, ${actor.y.toFixed(2)}`;
    renderer.render({ shapes: [{ ...actor.renderInstance({ lineThickness: +thickness.value / 100, energyIntensity: +intensity.value / 100, energyCoverage: +coverage.value / 100, energySpeed: +speed.value / 100, energyBleed: +bleed.value / 100 }), x: 450 + actor.x * 280, y: 350 - actor.y * 280, size: actor.scale * 280 }] }, now / 1e3);
    frame = requestAnimationFrame(render);
  };
  frame = requestAnimationFrame(render);
  addEventListener("pagehide", () => {
    cancelAnimationFrame(frame);
    renderer.destroy();
  }, { once: true });
  test.ready();
  test.assert("WebGPU shape renderer initialized", true);
  test.assert("Behavior driver is exposed", true);
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  error.hidden = false;
  error.textContent = message;
  test.assert("WebGPU shape renderer initialized", false, message);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90ZXN0LWhhcm5lc3MudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3RvcnkvdGVzdC1wYWdlcy9zaGFwZXMvdHVuaW5nLXN0b3JhZ2UudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3RvcnkvdGVzdC1wYWdlcy9zaGFwZXMvaW5zcGVjdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgbmVvblBhbGV0dGUgPSB7XG4gIGN5YW46IFwiIzU1ZTdmZlwiLFxuICBwaW5rOiBcIiNmZjRmOWFcIixcbiAgZ3JlZW46IFwiIzdmZmZjMlwiLFxuICBnb2xkOiBcIiNmZmQ0NWNcIixcbiAgdmlvbGV0OiBcIiNhOTg3ZmZcIixcbiAgb3JhbmdlOiBcIiNmZjhhNDVcIixcbiAgcmVkOiBcIiNmZjU1NzdcIixcbiAgZGVlcEJsdWU6IFwiIzI4N2RmZlwiLFxuICB3aGl0ZUhvdDogXCIjZjRmYmZmXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBOZW9uQ29sb3JOYW1lID0ga2V5b2YgdHlwZW9mIG5lb25QYWxldHRlO1xuXG5leHBvcnQgY29uc3QgZ2xvd1ByZXNldHMgPSB7XG4gIHNvZnQ6IDAuMzgsXG4gIHN0YW5kYXJkOiAwLjY1LFxuICBpbnRlbnNlOiAxLFxufSBhcyBjb25zdDtcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVGYW1pbHkgPSBcInBsYXllclwiIHwgXCJodW50ZXJcIiB8IFwiYnJ1aXNlclwiIHwgXCJ0YW5rXCIgfCBcInRyaWNrc3RlclwiIHwgXCJlbGl0ZVwiO1xuZXhwb3J0IHR5cGUgTmVvblJvY2tTdHlsZSA9IFwicGl0Y2hcIiB8IFwicm9sbFwiIHwgXCJ5YXdcIiB8IFwicHVsc2VcIiB8IFwib3JiaXRcIjtcbmV4cG9ydCB0eXBlIE5lb25Qb2ludCA9IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHk7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W107XG4gIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdO1xuICByb2NrOiBOZW9uUm9ja1N0eWxlO1xuICBkZXB0aD86IG51bWJlcjtcbn1cblxuY29uc3QgcmVndWxhciA9IChzaWRlczogbnVtYmVyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMiwgc3ggPSAxLCBzeSA9IDEpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaWRlcyB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAqIDIgLyBzaWRlcztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHN4LCBNYXRoLnNpbihhbmdsZSkgKiBzeV0gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBzdGFyID0gKHBvaW50czogbnVtYmVyLCBpbm5lciA9IC40Miwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwb2ludHMgKiAyIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgcmFkaXVzID0gaSAlIDIgPyBpbm5lciA6IDE7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJIC8gcG9pbnRzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3QgZGlhbW9uZDogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV0sIFstMSwgMF1dO1xuY29uc3QgYXJyb3c6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsuODIsIC42OF0sIFsuMjcsIC40NV0sIFswLCAuOTJdLCBbLS4yNywgLjQ1XSwgWy0uODIsIC42OF1dO1xuY29uc3QgY2hldnJvbjogTmVvblBvaW50W10gPSBbWy0xLCAtLjYyXSwgWzAsIC0uMDVdLCBbMSwgLS42Ml0sIFsuMjgsIC44Ml0sIFswLCAuMzRdLCBbLS4yOCwgLjgyXV07XG5jb25zdCBzcXVhcmU6IE5lb25Qb2ludFtdID0gcmVndWxhcig0LCBNYXRoLlBJIC8gNCk7XG5jb25zdCBjb2xvcnM6IFJlY29yZDxOZW9uU2hhcGVGYW1pbHksIHN0cmluZz4gPSB7XG4gIHBsYXllcjogbmVvblBhbGV0dGUuY3lhbiwgaHVudGVyOiBuZW9uUGFsZXR0ZS5yZWQsIGJydWlzZXI6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgdGFuazogbmVvblBhbGV0dGUuZ29sZCwgdHJpY2tzdGVyOiBcIiM5Y2ZmNTJcIiwgZWxpdGU6IFwiIzcwZGZmZlwiLFxufTtcblxuY29uc3QgbWFrZSA9IChcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHksIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSxcbiAgcm9jazogTmVvblJvY2tTdHlsZSwgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW10sXG4pOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uID0+ICh7IGlkLCBuYW1lLCBmYW1pbHksIHBvaW50cywgaG9sZXMsIHJvY2ssIGNvbG9yOiBjb2xvcnNbZmFtaWx5XSwgZGVwdGg6IGZhbWlseSA9PT0gXCJ0YW5rXCIgPyAuMjIgOiAuMTQgfSk7XG5cbmV4cG9ydCBjb25zdCBuZW9uU2hhcGVDYXRhbG9nOiByZWFkb25seSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uW10gPSBbXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJhcnJvdy1jbGFzc2ljXCIsIFwiQXJyb3cgQ2xhc3NpY1wiLCBhcnJvdywgXCJwaXRjaFwiLCBbYXJyb3cubWFwKChbeCwgeV0pID0+IFt4ICogLjQyLCB5ICogLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImRlbHRhLXNsZWVrXCIsIFwiRGVsdGEgU2xlZWtcIiwgW1swLC0xXSxbLjksLjgyXSxbMCwuNDhdLFstLjksLjgyXV0sIFwicGl0Y2hcIiwgW1tbMCwtLjQ1XSxbLjM1LC40NV0sWzAsLjI4XSxbLS4zNSwuNDVdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Rhci1jb3JlXCIsIFwiU3RhciBDb3JlXCIsIHN0YXIoNCwgLjMyKSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiaGV4LWZpZ2h0ZXJcIiwgXCJIZXggRmlnaHRlclwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LCAtTWF0aC5QSS8yLCAuNDgsIC40OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcIndpbmctc3BsaXRcIiwgXCJXaW5nIFNwbGl0XCIsIFtbLTEsLS44NV0sWy0uMjUsLjFdLFswLC0uMjVdLFsuMjUsLjFdLFsxLC0uODVdLFsuNjYsLjcyXSxbMCwuMzVdLFstLjY2LC43Ml1dLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjE4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInRyaWFkLXBvZFwiLCBcIlRyaWFkIFBvZFwiLCByZWd1bGFyKDMpLCBcInlhd1wiLCBbcmVndWxhcigzLCAtTWF0aC5QSS8yLCAuMzgsIC4zOCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNwaWtlLWxhbmNlXCIsIFwiU3Bpa2UgTGFuY2VcIiwgW1swLC0xXSxbLjQ4LC42NV0sWy4xOCwuNDJdLFswLDFdLFstLjE4LC40Ml0sWy0uNDgsLjY1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJvcmJpdC1kcm9uZVwiLCBcIk9yYml0IERyb25lXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLCAwLCAuNTgsIC41OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNoaWVsZC1yaW5nXCIsIFwiU2hpZWxkIFJpbmdcIiwgcmVndWxhcigzMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMzIsIDAsIC45MSwgLjkxKV0pLFxuXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZGFydFwiLCBcIkRhcnRcIiwgW1stMSwtLjddLFsxLDBdLFstMSwuN10sWy0uNDUsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWtpdGVcIiwgXCJLaXRlXCIsIFtbLTEsLS43NV0sWzEsMF0sWy0xLC43NV0sWy0uNTUsMF1dLCBcInJvbGxcIiwgW3JlZ3VsYXIoMywwLC4zNSwuMzUpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItbmVlZGxlXCIsIFwiTmVlZGxlXCIsIFtbLTEsLS40Ml0sWzEsMF0sWy0xLC40Ml0sWy0uNTUsMF1dLCBcInlhd1wiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci10YWxvblwiLCBcIlRhbG9uXCIsIHN0YXIoMywuMjgpLCBcInJvbGxcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItc2hhcmRcIiwgXCJTaGFyZFwiLCBkaWFtb25kLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXZlZVwiLCBcIlZlZVwiLCBjaGV2cm9uLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWV5ZVwiLCBcIldhdGNoZXJcIiwgcmVndWxhcigzLCBNYXRoLlBJLzIpLCBcInlhd1wiLCBbcmVndWxhcigzLE1hdGguUEkvMiwuNDIsLjQyKV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJ1cnN0XCIsIFwiQnVyc3RcIiwgc3Rhcig4LC4zNSksIFwicHVsc2VcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYm9sdFwiLCBcIkJvbHRcIiwgW1stLjcsLTFdLFsuMTUsLS4zNV0sWy0uMjUsLS4yXSxbLjcsMV0sWy0uMSwuMzJdLFsuMywuMTVdXSwgXCJyb2xsXCIpLFxuXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1mcmFtZVwiLCBcIkZyYW1lXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40OCx5Ki40OF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZW1cIiwgXCJHZW1cIiwgZGlhbW9uZCwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWhleFwiLCBcIkhleCBDb3JlXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvd25cIiwgXCJDcm93blwiLCBbWy0xLC0uNzVdLFstLjUsLS41NV0sWzAsLS44NV0sWy41LC0uNTVdLFsxLC0uNzVdLFsuOCwuOF0sWy0uOCwuOF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm9zc1wiLCBcIkNyb3NzXCIsIFtbLS4zNSwtMV0sWy4zNSwtMV0sWy4zNSwtLjM1XSxbMSwtLjM1XSxbMSwuMzVdLFsuMzUsLjM1XSxbLjM1LDFdLFstLjM1LDFdLFstLjM1LC4zNV0sWy0xLC4zNV0sWy0xLC0uMzVdLFstLjM1LC0uMzVdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1wcmlzbVwiLCBcIlByaXNtXCIsIGRpYW1vbmQsIFwicHVsc2VcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VhclwiLCBcIkdlYXJcIiwgc3Rhcig4LC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXIteFwiLCBcIlggQ29yZVwiLCBbWy0xLC0uNjVdLFstLjY1LC0xXSxbMCwtLjM1XSxbLjY1LC0xXSxbMSwtLjY1XSxbLjM1LDBdLFsxLC42NV0sWy42NSwxXSxbMCwuMzVdLFstLjY1LDFdLFstMSwuNjVdLFstLjM1LDBdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItc2xhYlwiLCBcIlNsYWJcIiwgW1stLjY1LC0xXSxbMSwtMV0sWy42NSwxXSxbLTEsMV1dLCBcInBpdGNoXCIpLFxuXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1oZXhcIiwgXCJIZWF2eSBIZXhcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4zOCwuMzgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1iYXJcIiwgXCJBcm1vciBCYXJcIiwgW1stLjc1LC0xXSxbLjc1LC0xXSxbMSwtLjQ1XSxbLjc1LDFdLFstLjc1LDFdLFstMSwuNDVdXSwgXCJwaXRjaFwiLCBbW1stLjQ4LC0uMThdLFsuNDgsLS4xOF0sWy40OCwuMThdLFstLjQ4LC4xOF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1ibG9ja1wiLCBcIkJsb2NrXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40Mix5Ki40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1vY3RcIiwgXCJPY3RhZ29uXCIsIHJlZ3VsYXIoOCksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstZm9ydFwiLCBcIkZvcnRyZXNzXCIsIHJlZ3VsYXIoNiksIFwicGl0Y2hcIiwgW3JlZ3VsYXIoNiwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1yZWFjdG9yXCIsIFwiUmVhY3RvclwiLCByZWd1bGFyKDEwKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC41NCwuNTQpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1jaXRhZGVsXCIsIFwiQ2l0YWRlbFwiLCBbWy0uNjUsLTFdLFsuNjUsLTFdLFsuNjUsLS43Ml0sWzEsLS43Ml0sWzEsLjcyXSxbLjY1LC43Ml0sWy42NSwxXSxbLS42NSwxXSxbLS42NSwuNzJdLFstMSwuNzJdLFstMSwtLjcyXSxbLS42NSwtLjcyXV0sIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYnVua2VyXCIsIFwiQnVua2VyXCIsIFtbLS43MiwtMV0sWy43MiwtMV0sWzEsLS41OF0sWzEsLjU4XSxbLjcyLDFdLFstLjcyLDFdLFstMSwuNThdLFstMSwtLjU4XV0sIFwicGl0Y2hcIiwgW1tbLS41LC0uMTRdLFsuNSwtLjE0XSxbLjUsLjE0XSxbLS41LC4xNF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1zdW5cIiwgXCJTdW4gVGFua1wiLCByZWd1bGFyKDEyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuMjgsLjI4KV0pLFxuXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1kaWFtb25kXCIsIFwiUGhhc2UgRGlhbW9uZFwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY2hldnJvblwiLCBcIlNsaXBzdHJlYW1cIiwgW1stMSwtLjhdLFstLjIsMF0sWy0xLC44XSxbLS4zNSwuOF0sWy40NSwwXSxbLS4zNSwtLjhdLFsuMjUsLS44XSxbMSwwXSxbLjI1LC44XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1zcXVhcmVcIiwgXCJUaWx0IEJveFwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMzQseSouMzRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY29tcGFzc1wiLCBcIkNvbXBhc3NcIiwgZGlhbW9uZCwgXCJ5YXdcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1leWVcIiwgXCJQaGFzZSBFeWVcIiwgcmVndWxhcigzKSwgXCJwdWxzZVwiLCBbcmVndWxhcig4LDAsLjE4LC4xOCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWhvdXJnbGFzc1wiLCBcIkhvdXJnbGFzc1wiLCBbWy0xLC0xXSxbMSwtMV0sWy4yOCwwXSxbMSwxXSxbLTEsMV0sWy0uMjgsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stbGlua1wiLCBcIkxpbmtcIiwgcmVndWxhcigxMiwwLDEsLjU1KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNjIsLjIyKV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stdm9ydGV4XCIsIFwiVm9ydGV4XCIsIHN0YXIoNywuNTYpLCBcInJvbGxcIiwgW3JlZ3VsYXIoNywwLC4yNSwuMjUpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1nYXRlXCIsIFwiR2hvc3QgR2F0ZVwiLCBzcXVhcmUsIFwicHVsc2VcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjc4LHkqLjc4XSBhcyBjb25zdCldKSxcblxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zdGFyXCIsIFwiTm92YSBTdGFyXCIsIHN0YXIoOCwuNTUpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4zLC4zKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zYXdcIiwgXCJIYWxvIFNhd1wiLCBzdGFyKDEyLC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjQyLC40MildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY3Jvd25cIiwgXCJWb2lkIENyb3duXCIsIHN0YXIoNywuNDgpLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjIseSouMjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1wcmlzbVwiLCBcIlJveWFsIFByaXNtXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjUseSouNV0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLW9yYml0XCIsIFwiT3JiaXQgRXllXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLDAsLjYsLjYpLCByZWd1bGFyKDEyLDAsLjIsLjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNpcmN1aXRcIiwgXCJDaXJjdWl0IExvcmRcIiwgc3Rhcig4LC43NSksIFwieWF3XCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40LHkqLjRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zZW50aW5lbFwiLCBcIlNlbnRpbmVsXCIsIHN0YXIoMTAsLjYyKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC4yMiwuMjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXdpbmdzXCIsIFwiTmlnaHQgV2luZ3NcIiwgW1stMSwtLjhdLFstLjcsLjM1XSxbLS4yNSwuMDVdLFswLC44NV0sWy4yNSwuMDVdLFsuNywuMzVdLFsxLC0uOF0sWy4zNSwtLjM1XSxbMCwtLjA1XSxbLS4zNSwtLjM1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWVtcGVyb3JcIiwgXCJFbXBlcm9yXCIsIHN0YXIoOCwuNDgpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4yNCwuMjQpXSksXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0TmVvblNoYXBlID0gKGlkOiBzdHJpbmcpOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkID0+XG4gIG5lb25TaGFwZUNhdGFsb2cuZmluZChzaGFwZSA9PiBzaGFwZS5pZCA9PT0gaWQpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiwgTmVvblBvaW50IH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uID0gXCJhYm92ZVwiIHwgXCJiZWxvd1wiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVMYWJlbCB7XG4gIHRleHQ6IHN0cmluZztcbiAgcG9zaXRpb24/OiBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogbnVtYmVyO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUluc3RhbmNlIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIGNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgcm90YXRpb25YPzogbnVtYmVyO1xuICByb3RhdGlvblk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWj86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgc2hpZWxkZWQ/OiBib29sZWFuO1xuICBsaW5lVGhpY2tuZXNzPzogbnVtYmVyO1xuICBlbmVyZ3lJbnRlbnNpdHk/OiBudW1iZXI7XG4gIGVuZXJneUNvdmVyYWdlPzogbnVtYmVyO1xuICBlbmVyZ3lTcGVlZD86IG51bWJlcjtcbiAgZW5lcmd5QmxlZWQ/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGVudHJhbmNlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xuICBleHBsb2RlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbnR5cGUgVjMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG50eXBlIFZlcnRleCA9IHtcbiAgcDogVjM7IG46IFYzOyBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdOyBnbG93OiBudW1iZXI7XG4gIGVmZmVjdDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gMTQ7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgU2NlbmUgeyBhc3BlY3Q6IGYzMiwgY2FtZXJhOiBmMzIsIHRpbWU6IGYzMiwgcGFkZGluZzogZjMyIH1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuc3RydWN0IElucHV0IHtcbiAgQGxvY2F0aW9uKDApIHBvc2l0aW9uOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigzKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBlZmZlY3Q6IHZlYzRmLFxufVxuc3RydWN0IE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgZWZmZWN0OiB2ZWM0Zixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihpbnB1dDogSW5wdXQpIC0+IE91dHB1dCB7XG4gIGxldCBkZXB0aCA9IHNjZW5lLmNhbWVyYSAtIGlucHV0LnBvc2l0aW9uLno7XG4gIHZhciBvdXRwdXQ6IE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYoaW5wdXQucG9zaXRpb24ueCAqIDQgLyBzY2VuZS5hc3BlY3QsIGlucHV0LnBvc2l0aW9uLnkgKiA0LCBkZXB0aCAqIC4wNDUsIGRlcHRoKTtcbiAgb3V0cHV0Lm5vcm1hbCA9IGlucHV0Lm5vcm1hbDtcbiAgb3V0cHV0LmNvbG9yID0gaW5wdXQuY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaW5wdXQuZ2xvdztcbiAgb3V0cHV0LmVmZmVjdCA9IGlucHV0LmVmZmVjdDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZShpbnB1dC5ub3JtYWwpO1xuICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLS40NSwgLS43LCAxKSk7XG4gIGxldCBkaWZmdXNlID0gLjE4ICsgbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCkgKiAuODI7XG4gIGxldCByaW0gPSBwb3coMSAtIGFicyhub3JtYWwueiksIDIuMik7XG4gIGxldCBzaWRlID0gMSAtIGFicyhub3JtYWwueik7XG4gIGxldCByYXJlU3VyZ2UgPSBwb3cobWF4KC4wLCBzaW4oc2NlbmUudGltZSAqIGlucHV0LmVmZmVjdC56ICogLjgyICsgaW5wdXQuY29sb3IuciAqIDcuMCkpLCAyMi4wKVxuICAgICogaW5wdXQuZWZmZWN0LnggKiBpbnB1dC5lZmZlY3QueSAqIGlucHV0LmVmZmVjdC53O1xuICBsZXQgZW5lcmd5ID0gaW5wdXQuY29sb3IgKiAoZGlmZnVzZSAqIC4xMiArIHJpbSAqIGlucHV0Lmdsb3cgKiAuMzYgKyBzaWRlICogLjA4ICsgcmFyZVN1cmdlICogLjcpO1xuICByZXR1cm4gdmVjNGYoZW5lcmd5ICsgdmVjM2YocmFyZVN1cmdlICogLjE4KSwgLjEyICsgc2lkZSAqIC4xMiArIHJhcmVTdXJnZSAqIC4yOCk7XG59XG5AZnJhZ21lbnQgZm4gbGluZUZyYWdtZW50KGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBhbG9uZyA9IGlucHV0Lm5vcm1hbC54O1xuICBsZXQgYWNyb3NzID0gYWJzKGlucHV0Lm5vcm1hbC55KTtcbiAgbGV0IHBoYXNlID0gaW5wdXQubm9ybWFsLno7XG4gIGxldCBpbnRlbnNpdHkgPSBpbnB1dC5lZmZlY3QueDtcbiAgbGV0IGNvdmVyYWdlID0gaW5wdXQuZWZmZWN0Lnk7XG4gIGxldCBzcGVlZCA9IGlucHV0LmVmZmVjdC56O1xuICBsZXQgYmxlZWQgPSBpbnB1dC5lZmZlY3QudztcbiAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDMxLjAgLSBzY2VuZS50aW1lICogc3BlZWQgKiA1LjQgKyBwaGFzZSkpLCAxMC4wKTtcbiAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDEzLjAgKyBzY2VuZS50aW1lICogc3BlZWQgKiAzLjEgKyBwaGFzZSAqIDIuNykpLCAxOC4wKTtcbiAgbGV0IG5vaXNlID0gc2luKGFsb25nICogNzEuMCArIHBoYXNlICogOC4zKSAqIC41ICsgLjU7XG4gIGxldCB0aHJlc2hvbGQgPSAxLjAgLSBjb3ZlcmFnZTtcbiAgbGV0IGVsZWN0cmljaXR5ID0gc21vb3Roc3RlcCh0aHJlc2hvbGQsIHRocmVzaG9sZCArIC4xOCwgcHVsc2VBICogLjY1ICsgcHVsc2VCICogLjU1ICsgbm9pc2UgKiAuMTgpO1xuICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoLjA2LCAuMjgsIGFjcm9zcyk7XG4gIGxldCBoYWxvID0gMS4wIC0gc21vb3Roc3RlcCguMTIsIDEuMCwgYWNyb3NzKTtcbiAgbGV0IHN1cmdlID0gZWxlY3RyaWNpdHkgKiBpbnRlbnNpdHk7XG4gIGxldCBwdWxzZSA9IC43OCArIHNpbihzY2VuZS50aW1lICogc3BlZWQgKiAyLjEgKyBwaGFzZSkgKiAuMTMgKyBlbGVjdHJpY2l0eSAqIC4yNDtcbiAgbGV0IGNsb3VkID0gaGFsbyAqICguMTMgKyBzdXJnZSAqIC41Mik7XG4gIGxldCBob3QgPSBpbnB1dC5jb2xvciAqIChwdWxzZSArIGNsb3VkICogMi4xKSAqIGlucHV0Lmdsb3cgKyB2ZWMzZihjb3JlICogc3VyZ2UgKiAxLjM1KTtcbiAgbGV0IGFscGhhID0gKGNvcmUgKiAoLjcyICsgcHVsc2UgKiAuMikgKyBjbG91ZCArICgxLjAgLSBhY3Jvc3MpICogYmxlZWQgKiBlbGVjdHJpY2l0eSAqIC4yNCkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IGVudHJhbmNlT2Zmc2V0ID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IFYzID0+IHtcbiAgICBpZiAoZW50cmFuY2VQcm9ncmVzcyA+PSAxKSByZXR1cm4gWzAsIDAsIDBdO1xuICAgIGNvbnN0IHNlZWQgPSBNYXRoLnNpbihpbmRleCAqIDkxLjE3ICsgcG9pbnRbMF0gKiAzNy4yICsgcG9pbnRbMV0gKiA1My43ICsgeiAqIDI5LjEpICogNDM3NTguNTQ1MztcbiAgICBjb25zdCByYW5kb20gPSBzZWVkIC0gTWF0aC5mbG9vcihzZWVkKTtcbiAgICBjb25zdCBhbmdsZSA9IHJhbmRvbSAqIE1hdGguUEkgKiAyO1xuICAgIGNvbnN0IHJhZGl1cyA9IChpbnN0YW5jZS5lbnRyYW5jZU1hZ25pdHVkZSA/PyBpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAoMSAtIGVudHJhbmNlRWFzZSkgKiAoLjM1ICsgcmFuZG9tICogLjc1KTtcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLCAocmFuZG9tIC0gLjUpICogcmFkaXVzICogLjU1XTtcbiAgfTtcbiAgY29uc3QgbW92ZSA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4ID0gMCk6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlLCAtcG9pbnRbMV0gKiBzY2FsZSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgY29uc3QgZSA9IGVudHJhbmNlT2Zmc2V0KHBvaW50LCB6LCBpbmRleCk7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCkgKyBlWzBdLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCkgKyBlWzFdLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCkgKyBlWzJdXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBjb25zdCBhZGQgPSAoYTogVjMsIGI6IFYzLCBjOiBWMywgbm9ybWFsPzogVjMpID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsID8/IG5vcm1hbGl6ZShjcm9zcyhzdWIoYiwgYSksIHN1YihjLCBhKSkpO1xuICAgIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgICBdO1xuICAgIFthLGIsY10uZm9yRWFjaChwID0+IG91dHB1dC5wdXNoKHsgcCwgbiwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UsIGVmZmVjdCB9KSk7XG4gIH07XG4gIGNvbnN0IGZyb250ID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCBkZXB0aCAvIDIsIGluZGV4KSk7XG4gIGNvbnN0IGJhY2sgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIC1kZXB0aCAvIDIsIGluZGV4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCkpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGZyb250Lmxlbmd0aCAtIDE7IGkrKykgYWRkKGZyb250WzBdLCBmcm9udFtpXSwgZnJvbnRbaSArIDFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBiYWNrLmxlbmd0aCAtIDE7IGkrKykgYWRkKGJhY2tbMF0sIGJhY2tbaSArIDFdLCBiYWNrW2ldKTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGg7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW2ldLCBiYWNrW25leHRdKTtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbbmV4dF0sIGZyb250W25leHRdKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGVkZ2VNZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgZW50cmFuY2VQcm9ncmVzcyA9IGluc3RhbmNlLmVudHJhbmNlUHJvZ3Jlc3MgPz8gMTtcbiAgY29uc3QgZW50cmFuY2VFYXNlID0gZW50cmFuY2VQcm9ncmVzcyAqIGVudHJhbmNlUHJvZ3Jlc3MgKiAoMyAtIDIgKiBlbnRyYW5jZVByb2dyZXNzKTtcbiAgY29uc3QgbW92ZSA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZSwgLXBvaW50WzFdICogc2NhbGUsIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCksIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKV07XG4gIH07XG4gIGNvbnN0IGV4cGxvZGUgPSAoYTogVjMsIGI6IFYzLCBpbmRleDogbnVtYmVyKTogW1YzLCBWM10gPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDAsIDEgLSBlbnRyYW5jZUVhc2UpO1xuICAgIGlmICghcHJvZ3Jlc3MpIHJldHVybiBbYSwgYl07XG4gICAgY29uc3QgbXggPSAoYVswXSArIGJbMF0pIC8gMiAtIChpbnN0YW5jZS54ID8/IDApLCBteSA9IChhWzFdICsgYlsxXSkgLyAyIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChteCwgbXkpIHx8IDE7XG4gICAgY29uc3QgbWFnbml0dWRlID0gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgY29uc3Qgc3BlZWQgPSBtYWduaXR1ZGUgKiAoLjQ1ICsgKE1hdGguc2luKGluZGV4ICogOTEuMTcpICogLjUgKyAuNSkgKiAuNTUpO1xuICAgIGNvbnN0IGR4ID0gbXggLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkLCBkeSA9IG15IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCArIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAuMTg7XG4gICAgY29uc3QgYW5nbGUgPSBwcm9ncmVzcyAqIChpbmRleCAlIDIgPyAxIDogLTEpICogMi40O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IChwOiBWMyk6IFYzID0+IHtcbiAgICAgIGNvbnN0IHggPSBwWzBdIC0gKGluc3RhbmNlLnggPz8gMCksIHkgPSBwWzFdIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgICByZXR1cm4gW3ggKiBNYXRoLmNvcyhhbmdsZSkgLSB5ICogTWF0aC5zaW4oYW5nbGUpICsgKGluc3RhbmNlLnggPz8gMCkgKyBkeCwgeCAqIE1hdGguc2luKGFuZ2xlKSArIHkgKiBNYXRoLmNvcyhhbmdsZSkgKyAoaW5zdGFuY2UueSA/PyAwKSArIGR5LCBwWzJdXTtcbiAgICB9O1xuICAgIHJldHVybiBbdHJhbnNmb3JtKGEpLCB0cmFuc2Zvcm0oYildO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGxldCBkaXN0YW5jZSA9IDA7XG4gIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICBdO1xuICBjb25zdCBhZGRMaW5lID0gKGE6IFYzLCBiOiBWMywgcGhhc2U6IG51bWJlciwgd2lkdGhTY2FsZSA9IDEsIG9wYWNpdHkgPSAxKSA9PiB7XG4gICAgW2EsIGJdID0gZXhwbG9kZShhLCBiLCBNYXRoLmZsb29yKGRpc3RhbmNlICogMTAwKSArIE1hdGguZmxvb3IocGhhc2UgKiAxMCkpO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IC4wMDE7XG4gICAgY29uc3Qgd2lkdGggPSAoaW5zdGFuY2UubGluZVRoaWNrbmVzcyA/PyAxKSAqIC4wMTggKiB3aWR0aFNjYWxlO1xuICAgIGNvbnN0IG94ID0gLWR5IC8gbGVuZ3RoICogd2lkdGgsIG95ID0gZHggLyBsZW5ndGggKiB3aWR0aDtcbiAgICBjb25zdCBhMDogVjMgPSBbYVswXSAtIG94LCBhWzFdIC0gb3ksIGFbMl1dLCBhMTogVjMgPSBbYVswXSArIG94LCBhWzFdICsgb3ksIGFbMl1dO1xuICAgIGNvbnN0IGIwOiBWMyA9IFtiWzBdIC0gb3gsIGJbMV0gLSBveSwgYlsyXV0sIGIxOiBWMyA9IFtiWzBdICsgb3gsIGJbMV0gKyBveSwgYlsyXV07XG4gICAgY29uc3Qgc3RhcnQgPSBkaXN0YW5jZSAqIDIuNCwgZW5kID0gKGRpc3RhbmNlICsgbGVuZ3RoKSAqIDIuNDtcbiAgICBjb25zdCBwdXNoID0gKHA6IFYzLCBhbG9uZzogbnVtYmVyLCBhY3Jvc3M6IG51bWJlcikgPT5cbiAgICAgIG91dHB1dC5wdXNoKHsgcCwgbjogW2Fsb25nLCBhY3Jvc3MsIHBoYXNlXSwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogb3BhY2l0eSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlICogKDEgKyBNYXRoLnNpbigoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogTWF0aC5QSSkgKiAoaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogMi4yKSAqICgxIC0gKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIC43KSwgZWZmZWN0IH0pO1xuICAgIHB1c2goYTAsc3RhcnQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIwLGVuZCwtMSk7XG4gICAgcHVzaChiMCxlbmQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIxLGVuZCwxKTtcbiAgICBkaXN0YW5jZSArPSBsZW5ndGg7XG4gIH07XG4gIGNvbnN0IGFkZExvb3AgPSAocG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSwgejogbnVtYmVyLCBwaGFzZTogbnVtYmVyKSA9PlxuICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgeiksIG1vdmUocG9pbnRzWyhpbmRleCArIDEpICUgcG9pbnRzLmxlbmd0aF0sIHopLCBwaGFzZSArIGluZGV4ICogLjczKSk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCBkZXB0aCAvIDIsIC4zKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIC1kZXB0aCAvIDIsIDIuMSk7XG4gIHNoYXBlLmhvbGVzPy5mb3JFYWNoKChob2xlLCBpbmRleCkgPT4ge1xuICAgIGFkZExvb3AoaG9sZSwgZGVwdGggLyAyICsgLjAwMiwgMy43ICsgaW5kZXgpO1xuICAgIGFkZExvb3AoaG9sZSwgLWRlcHRoIC8gMiAtIC4wMDIsIDUuMiArIGluZGV4KTtcbiAgfSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgLWRlcHRoIC8gMiksIG1vdmUocG9pbnQsIGRlcHRoIC8gMiksIDYuMSArIGluZGV4KSk7XG4gIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAgKiAoaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSk7XG4gIGNvbnN0IGJyYW5jaFN0cmVuZ3RoID0gKGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxKSAqIChpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIpO1xuICBjb25zdCByYW5kb20gPSAoc2VlZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnNpbihzZWVkICogMTIuOTg5OCArIHNoYXBlLnBvaW50cy5sZW5ndGggKiA3OC4yMzMpICogNDM3NTguNTQ1MztcbiAgICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgcm90YXRlZCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaWFuczogbnVtYmVyKTogTmVvblBvaW50ID0+IFtcbiAgICB4ICogTWF0aC5jb3MocmFkaWFucykgLSB5ICogTWF0aC5zaW4ocmFkaWFucyksXG4gICAgeCAqIE1hdGguc2luKHJhZGlhbnMpICsgeSAqIE1hdGguY29zKHJhZGlhbnMpLFxuICBdO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY3ljbGUgPSBNYXRoLmZsb29yKHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEpO1xuICAgIGNvbnN0IGFnZSA9IHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEgLSBjeWNsZTtcbiAgICBjb25zdCBzZWVkID0gY3ljbGUgKiAzNy4xICsgaW5kZXggKiAxMS43O1xuICAgIGNvbnN0IGFjdGl2ZUR1cmF0aW9uID0gLjE4ICsgcmFuZG9tKHNlZWQgKyAxKSAqIC4yNTtcbiAgICBjb25zdCBoYXplRHVyYXRpb24gPSBNYXRoLm1pbigxLCBhY3RpdmVEdXJhdGlvbiArIC4yOCArIHJhbmRvbShzZWVkICsgMikgKiAuMjIpO1xuICAgIGNvbnN0IGJyYW5jaEFjdGl2ZSA9IGFnZSA8IGFjdGl2ZUR1cmF0aW9uO1xuICAgIGNvbnN0IGhhemVBY3RpdmUgPSBhZ2UgPCBoYXplRHVyYXRpb247XG4gICAgaWYgKCghYnJhbmNoQWN0aXZlICYmICFoYXplQWN0aXZlKSB8fCByYW5kb20oc2VlZCArIDMpID4gTWF0aC5taW4oLjc4LCBicmFuY2hTdHJlbmd0aCAqIC41KSkgcmV0dXJuO1xuICAgIGNvbnN0IG5leHQgPSBzaGFwZS5wb2ludHNbKGluZGV4ICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoXTtcbiAgICBjb25zdCB0ID0gLjE2ICsgcmFuZG9tKHNlZWQgKyA0KSAqIC42ODtcbiAgICBjb25zdCBiYXNlOiBOZW9uUG9pbnQgPSBbcG9pbnRbMF0gKyAobmV4dFswXSAtIHBvaW50WzBdKSAqIHQsIHBvaW50WzFdICsgKG5leHRbMV0gLSBwb2ludFsxXSkgKiB0XTtcbiAgICBjb25zdCB0eCA9IG5leHRbMF0gLSBwb2ludFswXSwgdHkgPSBuZXh0WzFdIC0gcG9pbnRbMV0sIHRsID0gTWF0aC5oeXBvdCh0eCwgdHkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcmFuZG9tKHNlZWQgKyA1KSA+IC41ID8gMSA6IC0xO1xuICAgIGNvbnN0IHBlcnBlbmRpY3VsYXI6IE5lb25Qb2ludCA9IFstdHkgLyB0bCAqIGRpcmVjdGlvbiwgdHggLyB0bCAqIGRpcmVjdGlvbl07XG4gICAgY29uc3QgZmlyc3RKaXR0ZXIgPSAoMTAgKyByYW5kb20oc2VlZCArIDYpICogMTApICogTWF0aC5QSSAvIDE4MCAqIChyYW5kb20oc2VlZCArIDcpID4gLjUgPyAxIDogLTEpO1xuICAgIGxldCBoZWFkaW5nID0gcm90YXRlZChwZXJwZW5kaWN1bGFyWzBdLCBwZXJwZW5kaWN1bGFyWzFdLCBmaXJzdEppdHRlcik7XG4gICAgY29uc3Qgc2VnbWVudENvdW50ID0gMSArIE1hdGguZmxvb3IocmFuZG9tKHNlZWQgKyA4KSAqIDMpO1xuICAgIGNvbnN0IHBvaW50czogTmVvblBvaW50W10gPSBbYmFzZV07XG4gICAgZm9yIChsZXQgc2VnbWVudCA9IDA7IHNlZ21lbnQgPCBzZWdtZW50Q291bnQ7IHNlZ21lbnQrKykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gLjA1NSArIHJhbmRvbShzZWVkICsgMTAgKyBzZWdtZW50KSAqIC4wOTU7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBwb2ludHMucHVzaChbcHJldmlvdXNbMF0gKyBoZWFkaW5nWzBdICogbGVuZ3RoLCBwcmV2aW91c1sxXSArIGhlYWRpbmdbMV0gKiBsZW5ndGhdKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICgyMCArIHJhbmRvbShzZWVkICsgMjAgKyBzZWdtZW50KSAqIDQwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICBoZWFkaW5nID0gcm90YXRlZChoZWFkaW5nWzBdLCBoZWFkaW5nWzFdLCBvZmZzZXQgKiAocmFuZG9tKHNlZWQgKyAzMCArIHNlZ21lbnQpID4gLjUgPyAxIDogLTEpKTtcbiAgICB9XG4gICAgaWYgKGhhemVBY3RpdmUpIHtcbiAgICAgIGNvbnN0IGZhZGUgPSAxIC0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pIC8gTWF0aC5tYXgoLjAwMSwgaGF6ZUR1cmF0aW9uIC0gYWN0aXZlRHVyYXRpb24pO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgKiAuMDM1O1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbmQgPSBwb2ludHNbc2VnbWVudCArIDFdO1xuICAgICAgICBjb25zdCBoYXplU3RhcnQ6IE5lb25Qb2ludCA9IFtzdGFydFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgc3RhcnRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBjb25zdCBoYXplRW5kOiBOZW9uUG9pbnQgPSBbZW5kWzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBlbmRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBhZGRMaW5lKG1vdmUoaGF6ZVN0YXJ0LCBkZXB0aCAvIDIgKyAuMDAyKSwgbW92ZShoYXplRW5kLCBkZXB0aCAvIDIgKyAuMDAyKSwgMzEgKyBzZWVkICsgc2VnbWVudCwgMS40NSArIGZhZGUgKiAuNTUsIGZhZGUgKiAuMzQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChicmFuY2hBY3RpdmUpIHtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgYWRkTGluZShtb3ZlKHN0YXJ0LCBkZXB0aCAvIDIgKyAuMDA2KSwgbW92ZShwb2ludHNbc2VnbWVudCArIDFdLCBkZXB0aCAvIDIgKyAuMDA2KSwgMTEgKyBzZWVkICsgc2VnbWVudCwgLjQyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2xpbmVQaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjZGVwdGg6IEdQVVRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgI2xhYmVsTGF5ZXI6IEhUTUxEaXZFbGVtZW50O1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IHBhcmVudCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnQgJiYgZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdGhpcy4jbGFiZWxMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy4jbGFiZWxMYXllci5jbGFzc05hbWUgPSBcIm5lb24tc2hhcGUtbGFiZWwtbGF5ZXJcIjtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHsgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBpbnNldDpcIjBcIiwgcG9pbnRlckV2ZW50czpcIm5vbmVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiB9KTtcbiAgICBwYXJlbnQ/LmFwcGVuZCh0aGlzLiNsYWJlbExheWVyKTtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBleHRydWRlZCBzaGFwZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiwgY3VsbE1vZGU6IFwiYmFja1wiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiBmYWxzZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2xpbmVQaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImxpbmVGcmFnbWVudFwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgICAgfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBzaGFwZSBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10sIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmVydGljZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChtZXNoKTtcbiAgICBjb25zdCBlZGdlcyA9IGluc3RhbmNlcy5mbGF0TWFwKGVkZ2VNZXNoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIGNvbnN0IGVkZ2VEYXRhID0gbmV3IEZsb2F0MzJBcnJheShlZGdlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBlZGdlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGVkZ2VEYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGRhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBjb25zdCBlZGdlQnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZWRnZURhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHZlcnRleEJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgaWYgKGVkZ2VEYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIoZWRnZUJ1ZmZlciwgMCwgZWRnZURhdGEpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgNSwgcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCAwXSkpO1xuICAgIGNvbnN0IGJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgbGluZUJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jbGluZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbeyB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIiwgc3RvcmVPcDogXCJzdG9yZVwiIH1dLFxuICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDogeyB2aWV3OiB0aGlzLiNkZXB0aCEuY3JlYXRlVmlldygpLCBkZXB0aENsZWFyVmFsdWU6IDEsIGRlcHRoTG9hZE9wOiBcImNsZWFyXCIsIGRlcHRoU3RvcmVPcDogXCJzdG9yZVwiIH0sXG4gICAgfSk7XG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgdmVydGV4QnVmZmVyKTsgcGFzcy5kcmF3KHZlcnRpY2VzLmxlbmd0aCk7IH1cbiAgICBpZiAoZWRnZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jbGluZVBpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgbGluZUJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIGVkZ2VCdWZmZXIpOyBwYXNzLmRyYXcoZWRnZXMubGVuZ3RoKTsgfVxuICAgIHBhc3MuZW5kKCk7IHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICAgIHRoaXMuI3JlbmRlckxhYmVscyhpbnN0YW5jZXMpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLm9uU3VibWl0dGVkV29ya0RvbmUoKS50aGVuKCgpID0+IHsgdmVydGV4QnVmZmVyLmRlc3Ryb3koKTsgZWRnZUJ1ZmZlci5kZXN0cm95KCk7IH0pO1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQgeyB0aGlzLiNsYWJlbExheWVyLnJlbW92ZSgpOyB0aGlzLiNkZXB0aD8uZGVzdHJveSgpOyB0aGlzLiNzY2VuZUJ1ZmZlci5kZXN0cm95KCk7IGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7IH1cbiAgI3JlbmRlckxhYmVscyhpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10pOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHtcbiAgICAgIGxlZnQ6IGAke3RoaXMuY2FudmFzLm9mZnNldExlZnR9cHhgLFxuICAgICAgdG9wOiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRUb3B9cHhgLFxuICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgIHdpZHRoOiBgJHt0aGlzLmNhbnZhcy5jbGllbnRXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMuY2FudmFzLmNsaWVudEhlaWdodH1weGAsXG4gICAgfSk7XG4gICAgdGhpcy4jbGFiZWxMYXllci5yZXBsYWNlQ2hpbGRyZW4oLi4uaW5zdGFuY2VzLmZsYXRNYXAoaW5zdGFuY2UgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5sYWJlbD8udGV4dCB8fCAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSA8PSAwKSByZXR1cm4gW107XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gICAgICBjb25zdCB4ID0gNTAgKyAoaW5zdGFuY2UueCA/PyAwKSAqIDQwIC8gKHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHkgPSA1MCAtIChpbnN0YW5jZS55ID8/IDApICogNDA7XG4gICAgICBjb25zdCBzaGFwZVJhZGl1cyA9IHNjYWxlICogdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogLjI7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzaGFwZVJhZGl1cyArIChpbnN0YW5jZS5sYWJlbC5vZmZzZXQgPz8gOCkgKyAoaW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTgpICogLjU7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGluc3RhbmNlLmxhYmVsLnBvc2l0aW9uID8/IFwiYWJvdmVcIjtcbiAgICAgIGxldCB0eCA9IDAsIHR5ID0gMDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJhYm92ZVwiKSB0eSA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYmVsb3dcIikgdHkgPSBvZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibGVmdFwiKSB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwicmlnaHRcIikgdHggPSBvZmZzZXQ7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5zdGFuY2UubGFiZWwudGV4dDtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6YCR7eH0lYCwgdG9wOmAke3l9JWAsIHRyYW5zZm9ybTpgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7dHh9cHgpLGNhbGMoLTUwJSArICR7dHl9cHgpKWAsXG4gICAgICAgIGNvbG9yOmluc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yLCBmb250RmFtaWx5Omluc3RhbmNlLmxhYmVsLmZvbnRGYW1pbHkgPz8gXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBmb250U2l6ZTpgJHtpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOH1weGAsIGZvbnRXZWlnaHQ6U3RyaW5nKGluc3RhbmNlLmxhYmVsLmZvbnRXZWlnaHQgPz8gNjAwKSxcbiAgICAgICAgdGV4dFNoYWRvdzpgMCAwIDVweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfSwwIDAgMTRweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfWAsIHdoaXRlU3BhY2U6XCJub3dyYXBcIixcbiAgICAgICAgb3BhY2l0eTpTdHJpbmcoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtlbGVtZW50XTtcbiAgICB9KSk7XG4gIH1cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy4jbG9naWNhbFNpemU7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0IHx8ICF0aGlzLiNkZXB0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy4jZGVwdGggJiYgdGhpcy5jYW52YXMud2lkdGggPT09IHdpZHRoICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UsIE5lb25TaGFwZUxhYmVsIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBlbnVtIE5lb25TaGFwZURpc3Bvc2FsIHtcbiAgRmFkZU91dCA9IFwiZmFkZU91dFwiLFxuICBEaXNhcHBlYXIgPSBcImRpc2FwcGVhclwiLFxuICBFeHBsb2RlID0gXCJleHBsb2RlXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlVmVjdG9yIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW1wYWN0IHtcbiAgZGlyZWN0aW9uOiBOZW9uU2hhcGVWZWN0b3I7XG4gIG1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUFjdG9yT3B0aW9ucyB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICB2ZWxvY2l0eT86IFBhcnRpYWw8TmVvblNoYXBlVmVjdG9yPjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbD86IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25TaGFwZUFjdG9yIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3I7XG4gIHNjYWxlOiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbDogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU6IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbjogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZTogbnVtYmVyO1xuICByb3RhdGlvblggPSAwO1xuICByb3RhdGlvblkgPSAwO1xuICByb3RhdGlvblogPSAwO1xuICBkaXNwb3NlZCA9IGZhbHNlO1xuICAjZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgI2ltcGFjdFZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcbiAgI2ltcGFjdFJvdGF0aW9uOiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uU2hhcGVBY3Rvck9wdGlvbnMpIHtcbiAgICB0aGlzLnNoYXBlID0gb3B0aW9ucy5zaGFwZTtcbiAgICB0aGlzLnggPSBvcHRpb25zLnggPz8gMDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnkgPz8gMDtcbiAgICB0aGlzLnogPSBvcHRpb25zLnogPz8gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiBvcHRpb25zLnZlbG9jaXR5Py54ID8/IDAsIHk6IG9wdGlvbnMudmVsb2NpdHk/LnkgPz8gMCB9O1xuICAgIHRoaXMuc2NhbGUgPSBvcHRpb25zLnNjYWxlID8/IDE7XG4gICAgdGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG9wdGlvbnMuZGlzcG9zYWwgPz8gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dDtcbiAgICB0aGlzLmV4cGxvZGVNYWduaXR1ZGUgPSBvcHRpb25zLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IG9wdGlvbnMuZW50cmFuY2VEdXJhdGlvbiA/PyAuNDU7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG9wdGlvbnMuZW50cmFuY2VNYWduaXR1ZGUgPz8gLjU1O1xuICB9XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyLCB6ID0gdGhpcy56KTogdGhpcyB7XG4gICAgdGhpcy54ID0geDsgdGhpcy55ID0geTsgdGhpcy56ID0gejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZlbG9jaXR5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0geDsgdGhpcy52ZWxvY2l0eS55ID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltcGFjdCh7IGRpcmVjdGlvbiwgbWFnbml0dWRlIH06IE5lb25TaGFwZUltcGFjdCk6IHRoaXMge1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICAgIGNvbnN0IHggPSBkaXJlY3Rpb24ueCAvIGxlbmd0aCwgeSA9IGRpcmVjdGlvbi55IC8gbGVuZ3RoO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKz0geCAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICs9IHkgKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCArPSB5ICogbWFnbml0dWRlICogLjk7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAtPSB4ICogbWFnbml0dWRlICogLjk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNwb3NlKG1vZGUgPSB0aGlzLmRpc3Bvc2FsKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG1vZGU7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhciA/IDEgOiAuMDAwMTtcbiAgICBpZiAobW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVudGVyKGR1cmF0aW9uID0gdGhpcy5lbnRyYW5jZUR1cmF0aW9uLCBtYWduaXR1ZGUgPSB0aGlzLmVudHJhbmNlTWFnbml0dWRlKTogdGhpcyB7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gTWF0aC5tYXgoLjAwMSwgZHVyYXRpb24pO1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWdlbmVyYXRlKCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSAodGhpcy52ZWxvY2l0eS54ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWCArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25ZICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKiBkZWx0YVNlY29uZHM7XG4gICAgY29uc3QgZGFtcGluZyA9IE1hdGguZXhwKC03ICogZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKj0gZGFtcGluZztcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKj0gZGFtcGluZztcbiAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+IDAgJiYgIXRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IC44NSA6IC41NTtcbiAgICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNkaXNwb3NhbFByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gZHVyYXRpb24pO1xuICAgICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPj0gMSkgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLiNlbnRyYW5jZVByb2dyZXNzIDwgMSkgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyB0aGlzLmVudHJhbmNlRHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICAgIGNvbnN0IGZhZGUgPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0ID8gMSAtIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAxO1xuICAgIHJldHVybiB7XG4gICAgICBzaGFwZTogdGhpcy5zaGFwZSwgeDogdGhpcy54LCB5OiB0aGlzLnksIHo6IHRoaXMueiwgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvblg6IHRoaXMucm90YXRpb25YLCByb3RhdGlvblk6IHRoaXMucm90YXRpb25ZLCByb3RhdGlvblo6IHRoaXMucm90YXRpb25aLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsIGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiB0aGlzLmRpc3Bvc2VkID8gMCA6IGZhZGUsXG4gICAgICBlbnRyYW5jZVByb2dyZXNzOiB0aGlzLiNlbnRyYW5jZVByb2dyZXNzLFxuICAgICAgZW50cmFuY2VNYWduaXR1ZGU6IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IHRoaXMuZXhwbG9kZU1hZ25pdHVkZSxcbiAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICB9O1xuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvblByaW1pdGl2ZVNoYXBlID0gXCJjaXJjbGVcIiB8IFwiYm9sdFwiIHwgXCJvcmJcIiB8IFwicmluZ1wiIHwgXCJzcGFya1wiIHwgXCJkaWFtb25kXCIgfCBcInBlbnRhZ29uXCIgfCBcImxpbmVcIiB8IFwiYXJjXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByaW1pdGl2ZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlY29uZGFyeUNvbG9yPzogc3RyaW5nO1xuICBnbG93PzogbnVtYmVyO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIHRleHR1cmU/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBhcmNTdGFydD86IG51bWJlcjtcbiAgYXJjRW5kPzogbnVtYmVyO1xuICBzaGFwZT86IE5lb25QcmltaXRpdmVTaGFwZTtcbn1cblxuY29uc3QgbWF4UHJpbWl0aXZlcyA9IDEwMjQ7XG5jb25zdCBmbG9hdHNQZXJQcmltaXRpdmUgPSAyMDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqLyBgXG5zdHJ1Y3QgU2NlbmUgeyByZXNvbHV0aW9uOiB2ZWMyZiwgY291bnQ6IGYzMiwgdGltZTogZjMyIH1cbnN0cnVjdCBQcmltaXRpdmUge1xuICBwb3NpdGlvbjogdmVjMmYsXG4gIHNpemU6IHZlYzJmLFxuICBjb2xvcjogdmVjNGYsXG4gIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgZ2xvdzogZjMyLFxuICBpbnRlbnNpdHk6IGYzMixcbiAgc2hhcGU6IGYzMixcbiAgdGV4dHVyZTogZjMyLFxuICByaW1JbnRlbnNpdHk6IGYzMixcbiAgc2hhZG93U3RyZW5ndGg6IGYzMixcbiAgcGFkZGluZzogdmVjMmYsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gaXRlbXM6IGFycmF5PFByaW1pdGl2ZT47XG5cbnN0cnVjdCBWZXJ0ZXhPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgaW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBzaGFwZTogZjMyLFxuICBAbG9jYXRpb24oNSkgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oNikgdGV4dHVyZTogZjMyLFxuICBAbG9jYXRpb24oNykgcmltSW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig4KSBzaGFkb3dTdHJlbmd0aDogZjMyLFxufVxuXG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2ZXJ0ZXg6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IFZlcnRleE91dHB1dCB7XG4gIHZhciBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgaXRlbSA9IGl0ZW1zW2luc3RhbmNlXTtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2ZXJ0ZXhdO1xuICB2YXIgcGl4ZWxPZmZzZXQgPSBsb2NhbCAqIGl0ZW0uc2l6ZTtcbiAgaWYgKGl0ZW0udGV4dHVyZSAhPSAwKSB7XG4gICAgbGV0IGMgPSBjb3MoaXRlbS50ZXh0dXJlKTtcbiAgICBsZXQgcyA9IHNpbihpdGVtLnRleHR1cmUpO1xuICAgIHBpeGVsT2Zmc2V0ID0gdmVjMmYocGl4ZWxPZmZzZXQueCAqIGMgLSBwaXhlbE9mZnNldC55ICogcywgcGl4ZWxPZmZzZXQueCAqIHMgKyBwaXhlbE9mZnNldC55ICogYyk7XG4gIH1cbiAgbGV0IHBpeGVsID0gaXRlbS5wb3NpdGlvbiArIHBpeGVsT2Zmc2V0O1xuICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKHBpeGVsLnggLyBzY2VuZS5yZXNvbHV0aW9uLnggKiAyIC0gMSwgMSAtIHBpeGVsLnkgLyBzY2VuZS5yZXNvbHV0aW9uLnkgKiAyLCAwLCAxKTtcbiAgb3V0cHV0LmxvY2FsID0gbG9jYWw7XG4gIG91dHB1dC5jb2xvciA9IGl0ZW0uY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaXRlbS5nbG93O1xuICBvdXRwdXQuaW50ZW5zaXR5ID0gaXRlbS5pbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFwZSA9IGl0ZW0uc2hhcGU7XG4gIG91dHB1dC5zZWNvbmRhcnlDb2xvciA9IGl0ZW0uc2Vjb25kYXJ5Q29sb3I7XG4gIG91dHB1dC50ZXh0dXJlID0gaXRlbS50ZXh0dXJlO1xuICBvdXRwdXQucmltSW50ZW5zaXR5ID0gaXRlbS5yaW1JbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFkb3dTdHJlbmd0aCA9IGl0ZW0uc2hhZG93U3RyZW5ndGg7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgaWYgKGlucHV0LnNoYXBlID4gNy41KSB7XG4gICAgbGV0IHJhZGl1cyA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gICAgbGV0IGFuZ2xlID0gYXRhbjIoaW5wdXQubG9jYWwueSwgaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFuZ2xlIDwgaW5wdXQucmltSW50ZW5zaXR5IHx8IGFuZ2xlID4gaW5wdXQuc2hhZG93U3RyZW5ndGggfHwgcmFkaXVzID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgbGluZURpc3RhbmNlID0gYWJzKHJhZGl1cyAtIDAuNzgpO1xuICAgIGlmIChsaW5lRGlzdGFuY2UgPiAwLjE2KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTIsIDAuMDM4LCBsaW5lRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4wMjUsIDAuMTYsIGxpbmVEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcHVsc2VBID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDIzLjAgLSBzY2VuZS50aW1lICogOC41KSksIDE2LjApO1xuICAgIGxldCBwdWxzZUIgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMTEuMCArIHNjZW5lLnRpbWUgKiA1LjMgKyAxLjcpKSwgMjQuMCk7XG4gICAgbGV0IGdyYWluID0gc2luKGFuZ2xlICogNzEuMCArIHNjZW5lLnRpbWUgKiAzLjEpICogMC41ICsgMC41O1xuICAgIGxldCBzdXJnZSA9IHNtb290aHN0ZXAoMC43MiwgMC45NCwgcHVsc2VBICogMC43ICsgcHVsc2VCICogMC42NSArIGdyYWluICogMC4xMik7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuODggKyBzdXJnZSAqIDAuNjUpICsgaGFsbyAqICgwLjIyICsgc3VyZ2UgKiAwLjkpKSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogc3VyZ2UgKiAwLjkpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNi41KSB7XG4gICAgbGV0IGFsb25nID0gaW5wdXQubG9jYWwueTtcbiAgICBsZXQgYWNyb3NzID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhY3Jvc3MgPiAxLjAgfHwgYWJzKGFsb25nKSA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDgsIDAuMjQsIGFjcm9zcyk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjEyLCAxLjAsIGFjcm9zcykpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5kRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMC43MiwgMS4wLCBhYnMoYWxvbmcpKTtcbiAgICBsZXQgdHJhdmVsID0gcG93KG1heCgwLjAsIHNpbihhbG9uZyAqIDI0LjAgLSBzY2VuZS50aW1lICogOC4wICsgaW5wdXQudGV4dHVyZSkpLCAxNC4wKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC43NSArIHRyYXZlbCAqIDAuNSkgKyBoYWxvICogKDAuMiArIHRyYXZlbCAqIDAuNTUpKSAqIGVuZEZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHRyYXZlbCAqIDAuNzUpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNS41KSB7XG4gICAgLy8gUGVudGFnb24gU0RGXG4gICAgLy8gbG9jYWwgaXMgaW4gWy0xLCAxXSByYW5nZS4gTGV0J3MgZmluZCBwZW50YWdvbiBkaXN0YW5jZS5cbiAgICBsZXQgcHggPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgbGV0IHB5ID0gaW5wdXQubG9jYWwueTtcbiAgICAvLyBQZW50YWdvbiBjb25zdGFudHMgZm9yIHZlcnRpY2VzL2VkZ2VzXG4gICAgbGV0IGsgPSB2ZWMzZigtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAxLjM3NjM4MTkyKTsgLy8gY29zL3NpbiBvZiA3MiwgcGx1cyBoZWlnaHQgZmFjdG9yXG4gICAgLy8gUHJvamVjdC9NaXJyb3IgYWNyb3NzIHRoZSBzeW1tZXRyeSBheGVzIG9mIHJlZ3VsYXIgcGVudGFnb25cbiAgICB2YXIgcCA9IHZlYzJmKHB4LCBweSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZigtay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZigtay54LCBrLnkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZihrLngsIGsueSk7XG4gICAgcC54ID0gcC54IC0gY2xhbXAocC54LCAtay56ICogMC41LCBrLnogKiAwLjUpO1xuICAgIGxldCBkID0gbGVuZ3RoKHAgLSB2ZWMyZigwLCAwLjcyKSkgKiBzaWduKHAueSAtIDAuNzIpO1xuICAgIC8vIE1hcCBkIHRvIGEgbm9ybWFsaXplZCByYWRpdXMgc2NhbGVcbiAgICBsZXQgc2NhbGVEID0gZCArIDAuMzU7IC8vIG9mZnNldCBwZW50YWdvbiB0byBmaXQgYm91bmRzIG5pY2VseVxuICAgIGlmIChzY2FsZUQgPiAwLjgpIHsgZGlzY2FyZDsgfVxuICAgIFxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC41LCAwLjY1LCBzY2FsZUQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNDUsIDAuNTMsIHNjYWxlRCkgKiAoMSAtIHNtb290aHN0ZXAoMC42NSwgMC43NSwgc2NhbGVEKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgtMC4yLCAwLjUsIHNjYWxlRCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC41NSwgMC44LCBzY2FsZUQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzggKyBib3JkZXIgKiAxLjM1O1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC41KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNzUgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC40NSkgKiBmaWxsICogMC4zNTtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC40O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA0LjUpIHtcbiAgICBsZXQgZCA9IGFicyhpbnB1dC5sb2NhbC54KSArIGFicyhpbnB1dC5sb2NhbC55KTtcbiAgICBpZiAoZCA+IDEuMDgpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC43OCwgMC45MiwgZCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC43MiwgMC44MiwgZCkgKiAoMSAtIHNtb290aHN0ZXAoMC45MiwgMS4wMiwgZCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoMC4wLCAwLjc4LCBkKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjgyLCAxLjA4LCBkKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM1ICsgYm9yZGVyICogMS4yO1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjYgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC41KSAqIGZpbGwgKiAwLjM4O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM1O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAxLjUpIHtcbiAgICBsZXQgcjIgPSBkb3QoaW5wdXQubG9jYWwsIGlucHV0LmxvY2FsKTtcbiAgICBpZiAocjIgPiAxKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgeiA9IHNxcnQobWF4KDAsIDEgLSByMikpO1xuICAgIGxldCBub3JtYWwgPSBub3JtYWxpemUodmVjM2YoaW5wdXQubG9jYWwueCwgLWlucHV0LmxvY2FsLnksIHopKTtcbiAgICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLTAuNTUsIC0wLjcsIDAuOSkpO1xuICAgIGxldCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCk7XG4gICAgbGV0IHJpbSA9IHBvdygxIC0geiwgMi4yKSAqIGlucHV0LnJpbUludGVuc2l0eTtcbiAgICBsZXQgc2hhZG93ID0gbWl4KDEgLSBpbnB1dC5zaGFkb3dTdHJlbmd0aCwgMSwgc21vb3Roc3RlcCgtMC42NSwgMC40NSwgZG90KG5vcm1hbC54eSwgbGlnaHQueHkpKSk7XG4gICAgbGV0IGdyYWluID0gc2luKGlucHV0LmxvY2FsLnggKiAyMyArIGlucHV0LmxvY2FsLnkgKiAxNykgKiBzaW4oaW5wdXQubG9jYWwueSAqIDMxIC0gaW5wdXQubG9jYWwueCAqIDExKTtcbiAgICBsZXQgdGV4dHVyZSA9IDEgKyBncmFpbiAqIGlucHV0LnRleHR1cmUgKiAwLjIyO1xuICAgIGxldCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0LCBub3JtYWwpLCB2ZWMzZigwLDAsMSkpLCAwKSwgMjgpICogMS44O1xuICAgIGxldCBib2R5ID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBkaWZmdXNlICogMC44ICsgMC4yKSAqIHNoYWRvdyAqIHRleHR1cmU7XG4gICAgbGV0IGhhbG8gPSBwb3cobWF4KDAsIDEgLSBsZW5ndGgoaW5wdXQubG9jYWwpKSwgMC4zNSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCByZ2IgPSBib2R5ICogKDAuMzggKyBkaWZmdXNlICogMC45NSkgKyBpbnB1dC5jb2xvci5yZ2IgKiByaW0gKyB2ZWMzZihzcGVjdWxhcikgKyBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IgKiBpbnB1dC5pbnRlbnNpdHksIDEpO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDMuNSkge1xuICAgIGxldCBheGlzID0gbWluKGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgICBsZXQgYXJtID0gMSAtIHNtb290aHN0ZXAoMC4wNCwgMC4xOCwgYXhpcyk7XG4gICAgbGV0IGZhZGUgPSAxIC0gc21vb3Roc3RlcCgwLjIsIDEsIG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSkpO1xuICAgIGxldCBlbmVyZ3kgPSBhcm0gKiBmYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGFybSkgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMi41KSB7XG4gICAgbGV0IHJpbmdEaXN0YW5jZSA9IGFicyhsZW5ndGgoaW5wdXQubG9jYWwpIC0gMC42Mik7XG4gICAgbGV0IHJpbmcgPSAxIC0gc21vb3Roc3RlcCgwLjA1NSwgMC4xOCwgcmluZ0Rpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjEyLCAwLjQyLCByaW5nRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZXJneSA9IChyaW5nICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIHJpbmcpICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMC41KSB7XG4gICAgZGlzdGFuY2UgPSBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICB9XG4gIGxldCBjb3JlID0gMSAtIHNtb290aHN0ZXAoMC4zOCwgMC43NiwgZGlzdGFuY2UpO1xuICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjMsIDEsIGRpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICBsZXQgZW5lcmd5ID0gKGNvcmUgKyBoYWxvICogMC41NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gIGxldCBjaHJvbWF0aWNDb3JlID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBwb3cobWF4KGNvcmUsIDApLCAyKSk7XG4gIGxldCByYXcgPSBjaHJvbWF0aWNDb3JlICogKGNvcmUgKiAxLjA1ICsgaGFsbyAqIDAuNDIpO1xuICBsZXQgcmdiID0gcmF3IC8gKHZlYzNmKDEpICsgcmF3ICogMC4zMik7XG4gIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xufVxuYDtcblxuZnVuY3Rpb24gcmdiYShoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdmFsdWUgPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGlmICghL15bMC05YS1mXXs2fSQvaS50ZXN0KHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzaXgtZGlnaXQgaGV4IGNvbG9yLCByZWNlaXZlZCBcIiR7aGV4fVwiLmApO1xuICByZXR1cm4gW1xuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgwLCAyKSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgyLCA0KSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSg0LCA2KSwgMTYpIC8gMjU1LFxuICAgIDEsXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjcHJpbWl0aXZlQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDogeyBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LCBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9IH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogbWF4UHJpbWl0aXZlcyAqIGZsb2F0c1BlclByaW1pdGl2ZSAqIDQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuICAgIHRoaXMuI2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH0sXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNwcmltaXRpdmVCdWZmZXIgfSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvblByaW1pdGl2ZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5LlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjYW52YXMgY291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIocHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdLCB0aW1lU2Vjb25kcyA9IDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmlzaWJsZSA9IHByaW1pdGl2ZXMuc2xpY2UoMCwgbWF4UHJpbWl0aXZlcyk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmlzaWJsZS5sZW5ndGggKiBmbG9hdHNQZXJQcmltaXRpdmUpO1xuICAgIHZpc2libGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyUHJpbWl0aXZlO1xuICAgICAgZGF0YS5zZXQoW1xuICAgICAgICBpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQgPz8gaXRlbS53aWR0aCxcbiAgICAgICAgLi4ucmdiYShpdGVtLmNvbG9yKSxcbiAgICAgICAgLi4ucmdiYShpdGVtLnNlY29uZGFyeUNvbG9yID8/IGl0ZW0uY29sb3IpLFxuICAgICAgICBpdGVtLmdsb3cgPz8gMC41LFxuICAgICAgICBpdGVtLmludGVuc2l0eSA/PyAxLFxuICAgICAgICBpdGVtLnNoYXBlID09PSBcImFyY1wiID8gOCA6IGl0ZW0uc2hhcGUgPT09IFwibGluZVwiID8gNyA6IGl0ZW0uc2hhcGUgPT09IFwicGVudGFnb25cIiA/IDYgOiBpdGVtLnNoYXBlID09PSBcImRpYW1vbmRcIiA/IDUgOiBpdGVtLnNoYXBlID09PSBcInNwYXJrXCIgPyA0IDogaXRlbS5zaGFwZSA9PT0gXCJyaW5nXCIgPyAzIDogaXRlbS5zaGFwZSA9PT0gXCJvcmJcIiA/IDIgOiBpdGVtLnNoYXBlID09PSBcImJvbHRcIiA/IDEgOiAwLFxuICAgICAgICBpdGVtLnJvdGF0aW9uID8/IGl0ZW0udGV4dHVyZSA/PyAwLFxuICAgICAgICBpdGVtLmFyY1N0YXJ0ID8/IGl0ZW0ucmltSW50ZW5zaXR5ID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjRW5kID8/IGl0ZW0uc2hhZG93U3RyZW5ndGggPz8gMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgIF0sIG9mZnNldCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHZpc2libGUubGVuZ3RoLCB0aW1lU2Vjb25kc10pKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLjAwNiwgZzogMC4wMDksIGI6IDAuMDI1LCBhOiAxIH0sXG4gICAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICB9XSxcbiAgICB9KTtcbiAgICBpZiAodmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZEdyb3VwKTtcbiAgICAgIHBhc3MuZHJhdyg2LCB2aXNpYmxlLmxlbmd0aCk7XG4gICAgfVxuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbiA9IFwiZmFkZVwiIHwgXCJleHBhbmRGYWRlXCIgfCBcImltcGxvZGVcIiB8IFwic3BhcmtGYWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjb3JlQ29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBkZXRhaWw/OiBudW1iZXI7XG4gIHR1cmJ1bGVuY2U/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGNvcmVJbnRlbnNpdHk/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25UaW1lPzogbnVtYmVyO1xuICBkaXNzaXBhdGlvbkFjdGlvbj86IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uO1xuICBkcmlmdFg/OiBudW1iZXI7XG4gIGRyaWZ0WT86IG51bWJlcjtcbiAgc2VlZD86IG51bWJlcjtcbiAgYWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJ4XCIgfCBcInlcIiB8IFwic2l6ZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbnR5cGUgQ2xvdWQgPSBSZXF1aXJlZDxPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwiY29yZUNvbG9yXCI+PiAmIHsgY29yZUNvbG9yOiBzdHJpbmc7IGFnZTogbnVtYmVyIH07XG5cbmNvbnN0IG1heENsb3VkcyA9IDk2O1xuY29uc3QgZmxvYXRzUGVyQ2xvdWQgPSAyNDtcblxuY29uc3QgZGVmYXVsdHM6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+ID0ge1xuICBjb2xvcjogXCIjNjNlOGZmXCIsXG4gIGNvcmVDb2xvcjogXCIjZmZmZmZmXCIsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0aW9uOiAwLFxuICBzaXplOiAuMjUsXG4gIGRldGFpbDogNSxcbiAgdHVyYnVsZW5jZTogLjc1LFxuICBnbG93OiA0LFxuICBjb3JlSW50ZW5zaXR5OiAxLjQsXG4gIHJpbUludGVuc2l0eTogLjg1LFxuICBvcGFjaXR5OiAxLFxuICBkaXNzaXBhdGlvblRpbWU6IC43LFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJleHBhbmRGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBzZWVkOiAwLFxuICBhZ2U6IDAsXG59O1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLnBhZEVuZCg2LCBcIjBcIikuc2xpY2UoMCwgNik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcml2ZU5lb25DbG91ZENvcmVDb2xvciA9IChjb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgW3IsIGcsIGJdID0gaGV4KGNvbG9yKTtcbiAgY29uc3QgbGlmdCA9IChjaGFubmVsOiBudW1iZXIpID0+IE1hdGgucm91bmQoKGNoYW5uZWwgKyAoMSAtIGNoYW5uZWwpICogLjc4KSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAjJHtsaWZ0KHIpfSR7bGlmdChnKX0ke2xpZnQoYil9YDtcbn07XG5cbmNvbnN0IGFjdGlvblZhbHVlID0gKGFjdGlvbjogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24pOiBudW1iZXIgPT5cbiAgYWN0aW9uID09PSBcImZhZGVcIiA/IDAgOiBhY3Rpb24gPT09IFwiZXhwYW5kRmFkZVwiID8gMSA6IGFjdGlvbiA9PT0gXCJpbXBsb2RlXCIgPyAyIDogMztcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBDbG91ZCB7XG4gIHBvczogdmVjMmYsXG4gIHZlbG9jaXR5OiB2ZWMyZixcbiAgYWdlOiBmMzIsXG4gIGxpZmU6IGYzMixcbiAgc2l6ZTogZjMyLFxuICByb3RhdGlvbjogZjMyLFxuICBzZWVkOiBmMzIsXG4gIGFjdGlvbjogZjMyLFxuICBjb2xvcjogdmVjNGYsXG4gIGNvcmU6IHZlYzRmLFxuICB0dW5pbmc6IHZlYzRmLFxufVxuc3RydWN0IEdsb2JhbHMge1xuICBhc3BlY3Q6IGYzMixcbiAgdGltZTogZjMyLFxuICBjb3VudDogZjMyLFxuICBiYWNrZ3JvdW5kOiBmMzIsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IGdsb2JhbHM6IEdsb2JhbHM7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGNsb3VkczogYXJyYXk8Q2xvdWQ+O1xuXG5mbiBoYXNoKHA6IHZlYzJmKSAtPiBmMzIge1xuICByZXR1cm4gZnJhY3Qoc2luKGRvdChwLCB2ZWMyZigxMjcuMSwgMzExLjcpKSkgKiA0Mzc1OC41NDUzMTIzKTtcbn1cbmZuIG5vaXNlKHA6IHZlYzJmKSAtPiBmMzIge1xuICBsZXQgaSA9IGZsb29yKHApO1xuICBsZXQgZiA9IGZyYWN0KHApO1xuICBsZXQgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbWl4KG1peChoYXNoKGkpLCBoYXNoKGkgKyB2ZWMyZigxLDApKSwgdS54KSwgbWl4KGhhc2goaSArIHZlYzJmKDAsMSkpLCBoYXNoKGkgKyB2ZWMyZigxLDEpKSwgdS54KSwgdS55KTtcbn1cbmZuIGZibShwOiB2ZWMyZiwgb2N0YXZlczogZjMyKSAtPiBmMzIge1xuICB2YXIgdiA9IDAuMDtcbiAgdmFyIGEgPSAwLjU7XG4gIHZhciBxID0gcDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBpZiAoZjMyKGkpID49IG9jdGF2ZXMpIHsgYnJlYWs7IH1cbiAgICB2ICs9IGEgKiBub2lzZShxKTtcbiAgICBxID0gcSAqIDIuMDMgKyB2ZWMyZig2LjksIDMuNyk7XG4gICAgYSAqPSAwLjUyO1xuICB9XG4gIHJldHVybiB2O1xufVxuZm4gcm90YXRlKHA6IHZlYzJmLCBhOiBmMzIpIC0+IHZlYzJmIHtcbiAgbGV0IGMgPSBjb3MoYSk7XG4gIGxldCBzID0gc2luKGEpO1xuICByZXR1cm4gdmVjMmYocC54ICogYyAtIHAueSAqIHMsIHAueCAqIHMgKyBwLnkgKiBjKTtcbn1cbnN0cnVjdCBPdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgQGludGVycG9sYXRlKGZsYXQpIGluc3RhbmNlOiB1MzIsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2aTogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gT3V0IHtcbiAgbGV0IGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBjID0gY2xvdWRzW2luc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgYWN0aW9uU2NhbGUgPSBzZWxlY3QoMS4wICsgbGlmZVQgKiAxLjg1LCAxLjAgLSBsaWZlVCAqIC42MiwgYy5hY3Rpb24gPiAxLjUgJiYgYy5hY3Rpb24gPCAyLjUpO1xuICBsZXQgcmFkaXVzID0gbWF4KC4wMDEsIGMuc2l6ZSAqIGFjdGlvblNjYWxlKSAqIDIuMzU7XG4gIHZhciBjZW50ZXIgPSBjLnBvcyArIGMudmVsb2NpdHkgKiBjLmFnZTtcbiAgY2VudGVyLnggKj0gZ2xvYmFscy5hc3BlY3Q7XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmldO1xuICBsZXQgcCA9IGNlbnRlciArIGxvY2FsICogcmFkaXVzO1xuICB2YXIgbzogT3V0O1xuICBvLnBvc2l0aW9uID0gdmVjNGYocC54IC8gZ2xvYmFscy5hc3BlY3QsIHAueSwgMCwgMSk7XG4gIG8ubG9jYWwgPSBsb2NhbCAqIDIuMzU7XG4gIG8uaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgcmV0dXJuIG87XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBjID0gY2xvdWRzW2lucHV0Lmluc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgbG9jYWwgPSByb3RhdGUoaW5wdXQubG9jYWwsIC1jLnJvdGF0aW9uIC0gbGlmZVQgKiAuNDUpO1xuICBsZXQgciA9IGxlbmd0aChsb2NhbCk7XG4gIGlmIChyID49IDIuMzUpIHsgZGlzY2FyZDsgfVxuICBsZXQgZGV0YWlsID0gY2xhbXAoYy50dW5pbmcueCwgMS4wLCA3LjApO1xuICBsZXQgdHVyYnVsZW5jZSA9IGMudHVuaW5nLnk7XG4gIGxldCB3aXNweSA9IGZibShsb2NhbCAqICgxLjcgKyBkZXRhaWwgKiAuMTYpICsgdmVjMmYoYy5zZWVkLCBjLnNlZWQgKiAuNzEpICsgZ2xvYmFscy50aW1lICogdmVjMmYoLjE2LCAuMDkpICogdHVyYnVsZW5jZSwgbWluKGRldGFpbCwgNC4wKSk7XG4gIGxldCBjb3JlID0gZXhwKC1yICogciAqICgxLjIgKyBjLnR1bmluZy56ICogLjIyKSk7XG4gIGxldCByaW0gPSBleHAoLWFicyhyIC0gLjcyKSAqIDMuNik7XG4gIGxldCBzcGFyayA9IHBvdyhtYXgoMC4wLCBzaW4od2lzcHkgKiAxNi4wICsgYy5zZWVkICsgZ2xvYmFscy50aW1lICogOS4wKSksIDE0LjApICogc2VsZWN0KDAuMCwgMS4wLCBjLmFjdGlvbiA+IDIuNSk7XG4gIGxldCBkaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgxLjQ1LCAyLjM1LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgcmltRGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMi43LCAzLjgsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCBlZGdlRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMS43NSwgMi4zNSwgcik7XG4gIGxldCBkZW5zaXR5ID0gKGNvcmUgKiAuNzIgKyByaW0gKiAuMjQgKiByaW1EaXNzaXBhdGUgKyB3aXNweSAqIC4yMiArIHNwYXJrICogLjU1KSAqIGRpc3NpcGF0ZSAqIGMudHVuaW5nLncgKiBlZGdlRmFkZTtcbiAgbGV0IGhvdENvcmUgPSBjLmNvcmUucmdiICogY29yZSAqIGMudHVuaW5nLnogKiAoMS4wICsgc3BhcmspO1xuICBsZXQgbmVvblJpbSA9IGMuY29sb3IucmdiICogKGRlbnNpdHkgKiAoLjc1ICsgYy5jb2xvci5hICogLjA4KSArIHJpbSAqIHJpbURpc3NpcGF0ZSAqIGMuY29sb3IuYSAqIC4wOCk7XG4gIGxldCBnbG93ID0gbmVvblJpbSArIGhvdENvcmUgKiBkZW5zaXR5O1xuICByZXR1cm4gdmVjNGYoZ2xvdywgY2xhbXAoZGVuc2l0eSAqIC44NSArIHNwYXJrICogLjI1LCAwLjAsIDEuMCkpO1xufWA7XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdEFjdG9yIHtcbiAgc2V0dGluZ3M6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+O1xuICBhZ2UgPSAwO1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyA9IHt9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uZGVmYXVsdHMsIC4uLnNldHRpbmdzLCBzZWVkOiBzZXR0aW5ncy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwIH07XG4gIH1cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLmFnZSArPSBkdDtcbiAgICByZXR1cm4gdGhpcy5hZ2UgPCB0aGlzLnNldHRpbmdzLmRpc3NpcGF0aW9uVGltZTtcbiAgfVxuICByZW5kZXJJbnN0YW5jZSgpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnNldHRpbmdzLCBzZWVkOiB0aGlzLnNldHRpbmdzLnNlZWQgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2J1ZmZlcjogR1BVQnVmZmVyO1xuICAjZ2xvYmFsczogR1BVQnVmZmVyO1xuICAjYmluZDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IHByb2NlZHVyYWwgY2xvdWQgdm9sdW1lIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jZ2xvYmFscyA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNidWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogbWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQgKiA0LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2JpbmQgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFtcbiAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNnbG9iYWxzIH0gfSxcbiAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNidWZmZXIgfSB9LFxuICAgIF0gfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IGNsb3VkIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoY2xvdWRzOiByZWFkb25seSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzW10sIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHBhY2tlZCA9IG5ldyBGbG9hdDMyQXJyYXkobWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQpO1xuICAgIGNsb3Vkcy5zbGljZSgwLCBtYXhDbG91ZHMpLmZvckVhY2goKGNsb3VkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYyA9IHsgLi4uZGVmYXVsdHMsIC4uLmNsb3VkIH07XG4gICAgICBjb25zdCBjb2xvciA9IGhleChjLmNvbG9yKSwgY29yZSA9IGhleChjLmNvcmVDb2xvcik7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlckNsb3VkO1xuICAgICAgcGFja2VkLnNldChbYy54LCBjLnksIGMuZHJpZnRYLCBjLmRyaWZ0WSwgYy5hZ2UgPz8gMCwgYy5kaXNzaXBhdGlvblRpbWUsIGMuc2l6ZSwgYy5yb3RhdGlvbiwgYy5zZWVkLCBhY3Rpb25WYWx1ZShjLmRpc3NpcGF0aW9uQWN0aW9uKSwgMCwgMF0sIG9mZnNldCk7XG4gICAgICBwYWNrZWQuc2V0KFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBjLmdsb3csIGNvcmVbMF0sIGNvcmVbMV0sIGNvcmVbMl0sIGMuY29yZUludGVuc2l0eSwgYy5kZXRhaWwsIGMudHVyYnVsZW5jZSwgYy5yaW1JbnRlbnNpdHksIGMub3BhY2l0eV0sIG9mZnNldCArIDEyKTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNidWZmZXIsIDAsIHBhY2tlZCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jZ2xvYmFscywgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIHRpbWVTZWNvbmRzLCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpLCAwXSkpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7IGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSxcbiAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgIH1dIH0pO1xuICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmQpO1xuICAgIHBhc3MuZHJhdyg2LCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpKTtcbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgbWFwVG9wRG93bkNsb3VkKGNsb3VkOiBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICBjb25zdCBhc3BlY3QgPSBsb2dpY2FsV2lkdGggLyBsb2dpY2FsSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IChjbG91ZC54IC8gbG9naWNhbFdpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gY2xvdWQueSAvIGxvZ2ljYWxIZWlnaHQpICogMi41LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgICBkcmlmdFg6IChjbG91ZC5kcmlmdFggPz8gMCkgLyBsb2dpY2FsV2lkdGggKiBhc3BlY3QgKiAyLjUsXG4gICAgICBkcmlmdFk6IC0oY2xvdWQuZHJpZnRZID8/IDApIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuI2J1ZmZlci5kZXN0cm95KCk7XG4gICAgdGhpcy4jZ2xvYmFscy5kZXN0cm95KCk7XG4gICAgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE5lb25QcmltaXRpdmVSZW5kZXJlciwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciwgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgfSBmcm9tIFwiLi9jbG91ZC1idXJzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2hhcGUgZXh0ZW5kcyBPbWl0PE5lb25TaGFwZUluc3RhbmNlLCBcInhcIiB8IFwieVwiIHwgXCJzY2FsZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TY2VuZSB7XG4gIHByaW1pdGl2ZXM/OiByZWFkb25seSBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM/OiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI3ByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVSZW5kZXJlcjtcbiAgI2Nsb3VkczogTmVvbkNsb3VkQnVyc3RSZW5kZXJlcjtcbiAgI3NoYXBlczogTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI7XG4gICN3aWR0aDogbnVtYmVyO1xuICAjaGVpZ2h0OiBudW1iZXI7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0OyB0aGlzLiN3aWR0aCA9IHdpZHRoOyB0aGlzLiNoZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jcHJpbWl0aXZlcyA9IG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jY2xvdWRzID0gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jc2hhcGVzID0gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogUHJvbWlzZTxOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkgdG9wLWRvd24gc2NlbmVzLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0LCBsb2dpY2FsV2lkdGgsIGxvZ2ljYWxIZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNjZW5lOiBOZW9uVG9wRG93blNjZW5lLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy4jcHJpbWl0aXZlcy5yZW5kZXIoWy4uLihzY2VuZS5wcmltaXRpdmVzID8/IFtdKV0sIHRpbWVTZWNvbmRzLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICBjb25zdCBjbG91ZHMgPSBzY2VuZS5jbG91ZHMgPz8gW107XG4gICAgY29uc3QgYXNwZWN0ID0gdGhpcy4jd2lkdGggLyB0aGlzLiNoZWlnaHQ7XG4gICAgY29uc3Qgc2hhcGVzID0gc2NlbmUuc2hhcGVzID8/IFtdO1xuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB0aGlzLiNzaGFwZXMucmVuZGVyKHNoYXBlcy5tYXAoc2hhcGUgPT4gKHtcbiAgICAgIC4uLnNoYXBlLFxuICAgICAgeDogKHNoYXBlLnggLyB0aGlzLiN3aWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIHNoYXBlLnkgLyB0aGlzLiNoZWlnaHQpICogMi41LFxuICAgICAgc2NhbGU6IHNoYXBlLnNpemUgLyB0aGlzLiNoZWlnaHQgKiAyLjUsXG4gICAgfSkpLCB0cnVlLCB0YXJnZXQpO1xuICAgIGlmIChjbG91ZHMubGVuZ3RoKSB0aGlzLiNjbG91ZHMucmVuZGVyKGNsb3Vkcy5tYXAoY2xvdWQgPT4gdGhpcy4jY2xvdWRzLm1hcFRvcERvd25DbG91ZChjbG91ZCwgdGhpcy4jd2lkdGgsIHRoaXMuI2hlaWdodCkpLCB0aW1lU2Vjb25kcywgdHJ1ZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuI3NoYXBlcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLiNjbG91ZHMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgVGVzdFN0YXR1cyA9IFwiYm9vdGluZ1wiIHwgXCJyZWFkeVwiIHwgXCJwYXNzZWRcIiB8IFwiZmFpbGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdEFzc2VydGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFzc2VkOiBib29sZWFuO1xuICBkZXRhaWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdFBhZ2VTbmFwc2hvdCB7XG4gIGlkOiBzdHJpbmc7XG4gIHN0YXR1czogVGVzdFN0YXR1cztcbiAgYXNzZXJ0aW9uczogVGVzdEFzc2VydGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVzdFBhZ2U8VERyaXZlciBleHRlbmRzIG9iamVjdD4oXG4gIGlkOiBzdHJpbmcsXG4gIGRyaXZlcjogVERyaXZlcixcbiAgc3RhdHVzRWxlbWVudDogSFRNTEVsZW1lbnQsXG4pIHtcbiAgY29uc3Qgc25hcHNob3Q6IFRlc3RQYWdlU25hcHNob3QgPSB7IGlkLCBzdGF0dXM6IFwiYm9vdGluZ1wiLCBhc3NlcnRpb25zOiBbXSB9O1xuICBjb25zdCBwdWJsaXNoID0gKCkgPT4ge1xuICAgIHN0YXR1c0VsZW1lbnQuZGF0YXNldC5zdGF0dXMgPSBzbmFwc2hvdC5zdGF0dXM7XG4gICAgc3RhdHVzRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3NuYXBzaG90LnN0YXR1cy50b1VwcGVyQ2FzZSgpfSBcdTAwQjcgJHtzbmFwc2hvdC5hc3NlcnRpb25zLmZpbHRlcihhID0+IGEucGFzc2VkKS5sZW5ndGh9LyR7c25hcHNob3QuYXNzZXJ0aW9ucy5sZW5ndGh9IGFzc2VydGlvbnNgO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRlc3RTdGF0dXMgPSBzbmFwc2hvdC5zdGF0dXM7XG4gIH07XG4gIGNvbnN0IGFwaSA9IHtcbiAgICAuLi5kcml2ZXIsXG4gICAgZ2V0U25hcHNob3Q6ICgpOiBUZXN0UGFnZVNuYXBzaG90ID0+IHN0cnVjdHVyZWRDbG9uZShzbmFwc2hvdCksXG4gICAgcmVhZHkoKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5zdGF0dXMgPSBcInJlYWR5XCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgICBhc3NlcnQobmFtZTogc3RyaW5nLCBwYXNzZWQ6IGJvb2xlYW4sIGRldGFpbD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgc25hcHNob3QuYXNzZXJ0aW9ucy5wdXNoKHsgbmFtZSwgcGFzc2VkLCBkZXRhaWwgfSk7XG4gICAgICBzbmFwc2hvdC5zdGF0dXMgPSBzbmFwc2hvdC5hc3NlcnRpb25zLmV2ZXJ5KGFzc2VydGlvbiA9PiBhc3NlcnRpb24ucGFzc2VkKSA/IFwicGFzc2VkXCIgOiBcImZhaWxlZFwiO1xuICAgICAgcHVibGlzaCgpO1xuICAgIH0sXG4gIH07XG4gICh3aW5kb3cgYXMgdW5rbm93biBhcyB7IG5lb25GYWN0b3J5VGVzdDogdHlwZW9mIGFwaSB9KS5uZW9uRmFjdG9yeVRlc3QgPSBhcGk7XG4gIHB1Ymxpc2goKTtcbiAgcmV0dXJuIGFwaTtcbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIFNoYXBlVHVuaW5ncyB7XG4gIHpvb206IG51bWJlcjtcbiAgZGVwdGg6IG51bWJlcjtcbiAgbGluZVRoaWNrbmVzczogbnVtYmVyO1xuICBlbmVyZ3lJbnRlbnNpdHk6IG51bWJlcjtcbiAgZW5lcmd5Q292ZXJhZ2U6IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ6IG51bWJlcjtcbiAgZW5lcmd5QmxlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGFwZVR1bmluZ1N0b3JhZ2Uge1xuICB2ZXJzaW9uOiAxO1xuICB0dW5pbmdzOiBTaGFwZVR1bmluZ3M7XG4gIG5vdGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBsYWJlbHM6IFJlY29yZDxzdHJpbmcsIHsgdGV4dDogc3RyaW5nOyBwb3NpdGlvbjogc3RyaW5nOyBvZmZzZXQ6IG51bWJlcjsgZm9udEZhbWlseTogc3RyaW5nOyBmb250U2l6ZTogbnVtYmVyIH0+O1xufVxuXG5jb25zdCBzdG9yYWdlS2V5ID0gXCJuZW9uRmFjdG9yeS5zaGFwZVR1bmluZ3MudjFcIjtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2hhcGVUdW5pbmdzOiBTaGFwZVR1bmluZ3MgPSB7XG4gIHpvb206IC4yMSxcbiAgZGVwdGg6IC4wNixcbiAgbGluZVRoaWNrbmVzczogLjU0LFxuICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgZW5lcmd5Q292ZXJhZ2U6IC4zMixcbiAgZW5lcmd5U3BlZWQ6IC43OSxcbiAgZW5lcmd5QmxlZWQ6IC4zNSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2hhcGVUdW5pbmdTdG9yYWdlKCk6IFNoYXBlVHVuaW5nU3RvcmFnZSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSA/PyBcIm51bGxcIikgYXMgUGFydGlhbDxTaGFwZVR1bmluZ1N0b3JhZ2U+IHwgbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIHR1bmluZ3M6IHsgLi4uZGVmYXVsdFNoYXBlVHVuaW5ncywgLi4ucGFyc2VkPy50dW5pbmdzIH0sXG4gICAgICBub3RlczogcGFyc2VkPy5ub3RlcyA/PyB7fSxcbiAgICAgIGxhYmVsczogcGFyc2VkPy5sYWJlbHMgPz8ge30sXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHsgdmVyc2lvbjogMSwgdHVuaW5nczogeyAuLi5kZWZhdWx0U2hhcGVUdW5pbmdzIH0sIG5vdGVzOiB7fSwgbGFiZWxzOiB7fSB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2hhcGVUdW5pbmdTdG9yYWdlKHZhbHVlOiBTaGFwZVR1bmluZ1N0b3JhZ2UpOiB2b2lkIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNoYXBlVHVuaW5ncyhzdG9yYWdlOiBTaGFwZVR1bmluZ1N0b3JhZ2UpOiB2b2lkIHtcbiAgY29uc3Qgbm90ZWRTaGFwZXMgPSBPYmplY3QuZW50cmllcyhzdG9yYWdlLm5vdGVzKS5maWx0ZXIoKFssIG5vdGVdKSA9PiBub3RlLnRyaW0oKSk7XG4gIGNvbnN0IG5vdGVzSnNvbiA9IE9iamVjdC5mcm9tRW50cmllcyhub3RlZFNoYXBlcyk7XG4gIGNvbnN0IG1hcmtkb3duID0gYCMgTmVvbkZhY3RvcnkgU2hhcGUgVHVuaW5nc1xuXG5HZW5lcmF0ZWQ6ICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfVxuXG4jIyBHbG9iYWwgcmVuZGVyaW5nIHR1bmluZ3NcblxuXFxgXFxgXFxganNvblxuJHtKU09OLnN0cmluZ2lmeShzdG9yYWdlLnR1bmluZ3MsIG51bGwsIDIpfVxuXFxgXFxgXFxgXG5cbiMjIFNoYXBlIG5vdGVzXG5cblxcYFxcYFxcYGpzb25cbiR7SlNPTi5zdHJpbmdpZnkobm90ZXNKc29uLCBudWxsLCAyKX1cblxcYFxcYFxcYFxuXG4jIyBTaGFwZSBsYWJlbCBkZWZhdWx0c1xuXG5cXGBcXGBcXGBqc29uXG4ke0pTT04uc3RyaW5naWZ5KHN0b3JhZ2UubGFiZWxzLCBudWxsLCAyKX1cblxcYFxcYFxcYFxuYDtcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbbWFya2Rvd25dLCB7IHR5cGU6IFwidGV4dC9tYXJrZG93blwiIH0pKTtcbiAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFuY2hvci5ocmVmID0gdXJsO1xuICBhbmNob3IuZG93bmxvYWQgPSBcIm5lb25mYWN0b3J5LXNoYXBlLXR1bmluZ3MubWRcIjtcbiAgYW5jaG9yLmNsaWNrKCk7XG4gIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbn1cbiIsICJpbXBvcnQge1xuICBjcmVhdGVUZXN0UGFnZSwgbmVvblNoYXBlQ2F0YWxvZywgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLCBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsIHR5cGUgTmVvblNoYXBlTGFiZWxQb3NpdGlvbixcbn0gZnJvbSBcIi4uLy4uL3NyYy9pbmRleFwiO1xuaW1wb3J0IHsgZXhwb3J0U2hhcGVUdW5pbmdzLCBsb2FkU2hhcGVUdW5pbmdTdG9yYWdlLCBzYXZlU2hhcGVUdW5pbmdTdG9yYWdlIH0gZnJvbSBcIi4vdHVuaW5nLXN0b3JhZ2VcIjtcblxuY29uc3QgcSA9IDxUIGV4dGVuZHMgRWxlbWVudD4oc2VsZWN0b3I6IHN0cmluZykgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihzZWxlY3RvcikhO1xuY29uc3QgY2FudmFzPXE8SFRNTENhbnZhc0VsZW1lbnQ+KFwiI3N0YWdlXCIpLHN0YXR1cz1xPEhUTUxPdXRwdXRFbGVtZW50PihcIiN0ZXN0LXN0YXR1c1wiKSxlcnJvcj1xPEhUTUxFbGVtZW50PihcIiNlcnJvclwiKTtcbmNvbnN0IHNlbGVjdD1xPEhUTUxTZWxlY3RFbGVtZW50PihcIiNzaGFwZVwiKSx6b29tPXE8SFRNTElucHV0RWxlbWVudD4oXCIjem9vbVwiKSxkZXB0aD1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2RlcHRoXCIpLHRoaWNrbmVzcz1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3RoaWNrbmVzc1wiKTtcbmNvbnN0IGludGVuc2l0eT1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2ludGVuc2l0eVwiKSxjb3ZlcmFnZT1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NvdmVyYWdlXCIpLHNwZWVkPXE8SFRNTElucHV0RWxlbWVudD4oXCIjc3BlZWRcIiksYmxlZWQ9cTxIVE1MSW5wdXRFbGVtZW50PihcIiNibGVlZFwiKTtcbmNvbnN0IHJvdGF0aW9uWD1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3JvdGF0aW9uLXhcIikscm90YXRpb25ZPXE8SFRNTElucHV0RWxlbWVudD4oXCIjcm90YXRpb24teVwiKSxyb3RhdGlvblo9cTxIVE1MSW5wdXRFbGVtZW50PihcIiNyb3RhdGlvbi16XCIpLHJvdGF0aW9uUmVhZG91dD1xPEhUTUxPdXRwdXRFbGVtZW50PihcIiNyb3RhdGlvbi1yZWFkb3V0XCIpO1xuY29uc3QgbGFiZWxUZXh0PXE8SFRNTElucHV0RWxlbWVudD4oXCIjbGFiZWwtdGV4dFwiKSxsYWJlbFBvc2l0aW9uPXE8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI2xhYmVsLXBvc2l0aW9uXCIpLGxhYmVsT2Zmc2V0PXE8SFRNTElucHV0RWxlbWVudD4oXCIjbGFiZWwtb2Zmc2V0XCIpLGxhYmVsRm9udD1xPEhUTUxTZWxlY3RFbGVtZW50PihcIiNsYWJlbC1mb250XCIpLGxhYmVsU2l6ZT1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2xhYmVsLXNpemVcIik7XG5jb25zdCB2ZWxvY2l0eVg9cTxIVE1MSW5wdXRFbGVtZW50PihcIiN2ZWxvY2l0eS14XCIpLHZlbG9jaXR5WT1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3ZlbG9jaXR5LXlcIiksaW1wYWN0TWFnbml0dWRlPXE8SFRNTElucHV0RWxlbWVudD4oXCIjaW1wYWN0LW1hZ25pdHVkZVwiKSxpbXBhY3RWZWN0b3I9cTxIVE1MRWxlbWVudD4oXCIjaW1wYWN0LXZlY3RvclwiKTtcbmNvbnN0IGRpc3Bvc2FsPXE8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI2Rpc3Bvc2FsXCIpLGV4cGxvZGVNYWduaXR1ZGU9cTxIVE1MSW5wdXRFbGVtZW50PihcIiNleHBsb2RlLW1hZ25pdHVkZVwiKSxub3Rlcz1xPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFwiI25vdGVzXCIpLGF1dG89cTxIVE1MSW5wdXRFbGVtZW50PihcIiNhdXRvXCIpLHRpdGxlPXE8SFRNTEVsZW1lbnQ+KFwiI3RpdGxlXCIpLHJlYWRvdXQ9cTxIVE1MRWxlbWVudD4oXCIjcmVhZG91dFwiKTtcbmNvbnN0IGVudHJhbmNlRHVyYXRpb249cTxIVE1MSW5wdXRFbGVtZW50PihcIiNlbnRyYW5jZS1kdXJhdGlvblwiKSxlbnRyYW5jZU1hZ25pdHVkZT1xPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2VudHJhbmNlLW1hZ25pdHVkZVwiKTtcbnNlbGVjdC5pbm5lckhUTUw9bmVvblNoYXBlQ2F0YWxvZy5tYXAoKHNoYXBlLGkpPT5gPG9wdGlvbiB2YWx1ZT1cIiR7aX1cIj4ke3NoYXBlLmZhbWlseS50b1VwcGVyQ2FzZSgpfSBcdTAwQjcgJHtzaGFwZS5uYW1lfTwvb3B0aW9uPmApLmpvaW4oXCJcIik7XG5jb25zdCByZXF1ZXN0ZWQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldChcInNoYXBlXCIpLHJlcXVlc3RlZEluZGV4PW5lb25TaGFwZUNhdGFsb2cuZmluZEluZGV4KHNoYXBlPT5zaGFwZS5pZD09PXJlcXVlc3RlZCk7aWYocmVxdWVzdGVkSW5kZXg+PTApc2VsZWN0LnZhbHVlPVN0cmluZyhyZXF1ZXN0ZWRJbmRleCk7XG5jb25zdCBzdG9yYWdlPWxvYWRTaGFwZVR1bmluZ1N0b3JhZ2UoKTtcbnpvb20udmFsdWU9U3RyaW5nKHN0b3JhZ2UudHVuaW5ncy56b29tKjEwMCk7ZGVwdGgudmFsdWU9U3RyaW5nKHN0b3JhZ2UudHVuaW5ncy5kZXB0aCoxMDApO3RoaWNrbmVzcy52YWx1ZT1TdHJpbmcoc3RvcmFnZS50dW5pbmdzLmxpbmVUaGlja25lc3MqMTAwKTtpbnRlbnNpdHkudmFsdWU9U3RyaW5nKHN0b3JhZ2UudHVuaW5ncy5lbmVyZ3lJbnRlbnNpdHkqMTAwKTtjb3ZlcmFnZS52YWx1ZT1TdHJpbmcoc3RvcmFnZS50dW5pbmdzLmVuZXJneUNvdmVyYWdlKjEwMCk7c3BlZWQudmFsdWU9U3RyaW5nKHN0b3JhZ2UudHVuaW5ncy5lbmVyZ3lTcGVlZCoxMDApO2JsZWVkLnZhbHVlPVN0cmluZyhzdG9yYWdlLnR1bmluZ3MuZW5lcmd5QmxlZWQqMTAwKTtcbmNvbnN0IGN1cnJlbnRTaGFwZT0oKT0+bmVvblNoYXBlQ2F0YWxvZ1tOdW1iZXIoc2VsZWN0LnZhbHVlKV07XG5sZXQgYWN0b3I9bmV3IE5lb25TaGFwZUFjdG9yKHtzaGFwZTpjdXJyZW50U2hhcGUoKSxzY2FsZTpOdW1iZXIoem9vbS52YWx1ZSkvMTAwfSk7XG5jb25zdCBsb2FkU2hhcGVTZXR0aW5ncz0oKT0+e2NvbnN0IHNhdmVkPXN0b3JhZ2UubGFiZWxzW2N1cnJlbnRTaGFwZSgpLmlkXTtub3Rlcy52YWx1ZT1zdG9yYWdlLm5vdGVzW2N1cnJlbnRTaGFwZSgpLmlkXT8/XCJcIjtsYWJlbFRleHQudmFsdWU9c2F2ZWQ/LnRleHQ/P1wiXCI7bGFiZWxQb3NpdGlvbi52YWx1ZT1zYXZlZD8ucG9zaXRpb24/P1wiYWJvdmVcIjtsYWJlbE9mZnNldC52YWx1ZT1TdHJpbmcoc2F2ZWQ/Lm9mZnNldD8/OCk7bGFiZWxGb250LnZhbHVlPXNhdmVkPy5mb250RmFtaWx5Pz9cIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCI7bGFiZWxTaXplLnZhbHVlPVN0cmluZyhzYXZlZD8uZm9udFNpemU/PzE4KTthY3Rvcj1uZXcgTmVvblNoYXBlQWN0b3Ioe3NoYXBlOmN1cnJlbnRTaGFwZSgpLHNjYWxlOk51bWJlcih6b29tLnZhbHVlKS8xMDB9KTt9O1xubG9hZFNoYXBlU2V0dGluZ3MoKTtcbmNvbnN0IHNhdmVUdW5pbmdzPSgpPT57c3RvcmFnZS50dW5pbmdzPXt6b29tOit6b29tLnZhbHVlLzEwMCxkZXB0aDorZGVwdGgudmFsdWUvMTAwLGxpbmVUaGlja25lc3M6K3RoaWNrbmVzcy52YWx1ZS8xMDAsZW5lcmd5SW50ZW5zaXR5OitpbnRlbnNpdHkudmFsdWUvMTAwLGVuZXJneUNvdmVyYWdlOitjb3ZlcmFnZS52YWx1ZS8xMDAsZW5lcmd5U3BlZWQ6K3NwZWVkLnZhbHVlLzEwMCxlbmVyZ3lCbGVlZDorYmxlZWQudmFsdWUvMTAwfTtzYXZlU2hhcGVUdW5pbmdTdG9yYWdlKHN0b3JhZ2UpfTtcblt6b29tLGRlcHRoLHRoaWNrbmVzcyxpbnRlbnNpdHksY292ZXJhZ2Usc3BlZWQsYmxlZWRdLmZvckVhY2goY29udHJvbD0+Y29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixzYXZlVHVuaW5ncykpO1xuY29uc3Qgc2F2ZUxhYmVsPSgpPT57c3RvcmFnZS5sYWJlbHNbY3VycmVudFNoYXBlKCkuaWRdPXt0ZXh0OmxhYmVsVGV4dC52YWx1ZSxwb3NpdGlvbjpsYWJlbFBvc2l0aW9uLnZhbHVlLG9mZnNldDorbGFiZWxPZmZzZXQudmFsdWUsZm9udEZhbWlseTpsYWJlbEZvbnQudmFsdWUsZm9udFNpemU6K2xhYmVsU2l6ZS52YWx1ZX07c2F2ZVNoYXBlVHVuaW5nU3RvcmFnZShzdG9yYWdlKX07XG5bbGFiZWxUZXh0LGxhYmVsUG9zaXRpb24sbGFiZWxPZmZzZXQsbGFiZWxGb250LGxhYmVsU2l6ZV0uZm9yRWFjaChjb250cm9sPT5jb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLHNhdmVMYWJlbCkpO1xuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixsb2FkU2hhcGVTZXR0aW5ncyk7bm90ZXMuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9PntzdG9yYWdlLm5vdGVzW2N1cnJlbnRTaGFwZSgpLmlkXT1ub3Rlcy52YWx1ZTtzYXZlU2hhcGVUdW5pbmdTdG9yYWdlKHN0b3JhZ2UpfSk7XG5xKFwiI2V4cG9ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+ZXhwb3J0U2hhcGVUdW5pbmdzKHN0b3JhZ2UpKTtcbmxldCBkcmFnZ2luZz1mYWxzZSxweD0wLHB5PTAsaW5wdXRYPTAsaW5wdXRZPTAsaW1wYWN0RGlyZWN0aW9uPXt4OjAseTotMX07XG5jb25zdCByYWRpYW5zPShkZWdyZWVzOm51bWJlcik9PmRlZ3JlZXMqTWF0aC5QSS8xODA7XG5jb25zdCBjbGFtcERlZ3JlZXM9KHZhbHVlOm51bWJlcik9Pk1hdGgubWF4KC0xODAsTWF0aC5taW4oMTgwLHZhbHVlKSk7XG5jb25zdCByb3RhdGlvbkxhYmVsPSgpPT5gWCAkeygrcm90YXRpb25YLnZhbHVlKS50b0ZpeGVkKDApfSwgWSAkeygrcm90YXRpb25ZLnZhbHVlKS50b0ZpeGVkKDApfSwgWiAkeygrcm90YXRpb25aLnZhbHVlKS50b0ZpeGVkKDApfWA7XG5jb25zdCByZXNldD0oKT0+e3JvdGF0aW9uWC52YWx1ZT1cIjE2XCI7cm90YXRpb25ZLnZhbHVlPVwiLTE3XCI7cm90YXRpb25aLnZhbHVlPVwiMFwiO2FjdG9yLm1vdmVUbygwLDApLnNldFZlbG9jaXR5KDAsMCkucmVnZW5lcmF0ZSgpfTtxKFwiI3Jlc2V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlc2V0KTtcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIixldmVudD0+e2lmKGV2ZW50LnNoaWZ0S2V5KXtkcmFnZ2luZz10cnVlO3B4PWV2ZW50LmNsaWVudFg7cHk9ZXZlbnQuY2xpZW50WTtjYW52YXMuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtyZXR1cm59Y29uc3QgcmVjdD1jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aW1wYWN0RGlyZWN0aW9uPXt4OmV2ZW50LmNsaWVudFgtKHJlY3QubGVmdCtyZWN0LndpZHRoLzIpLHk6KHJlY3QudG9wK3JlY3QuaGVpZ2h0LzIpLWV2ZW50LmNsaWVudFl9O2ltcGFjdFZlY3Rvci5zdHlsZS50cmFuc2Zvcm09YHJvdGF0ZSgke01hdGguYXRhbjIoLWltcGFjdERpcmVjdGlvbi55LGltcGFjdERpcmVjdGlvbi54KX1yYWQpYH0pO1xuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLGV2ZW50PT57aWYoZHJhZ2dpbmcpe3JvdGF0aW9uWS52YWx1ZT1TdHJpbmcoY2xhbXBEZWdyZWVzKCtyb3RhdGlvblkudmFsdWUrKGV2ZW50LmNsaWVudFgtcHgpKi40NSkpO3JvdGF0aW9uWC52YWx1ZT1TdHJpbmcoY2xhbXBEZWdyZWVzKCtyb3RhdGlvblgudmFsdWUrKGV2ZW50LmNsaWVudFktcHkpKi40NSkpO3B4PWV2ZW50LmNsaWVudFg7cHk9ZXZlbnQuY2xpZW50WTthdXRvLmNoZWNrZWQ9ZmFsc2V9fSk7XG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCgpPT5kcmFnZ2luZz1mYWxzZSk7XG5xKFwiI2ltcGFjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+YWN0b3IuaW1wYWN0KHtkaXJlY3Rpb246aW1wYWN0RGlyZWN0aW9uLG1hZ25pdHVkZToraW1wYWN0TWFnbml0dWRlLnZhbHVlLzEwMH0pKTtcbnEoXCIjZW50cmFuY2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PmFjdG9yLmVudGVyKCtlbnRyYW5jZUR1cmF0aW9uLnZhbHVlLzEwMCwrZW50cmFuY2VNYWduaXR1ZGUudmFsdWUvMTAwKSk7XG5xKFwiI3N0b3AtbW92ZW1lbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9Pnt2ZWxvY2l0eVgudmFsdWU9XCIwXCI7dmVsb2NpdHlZLnZhbHVlPVwiMFwiO2FjdG9yLnNldFZlbG9jaXR5KDAsMCl9KTtcbnEoXCIjZGlzcG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e2FjdG9yLmV4cGxvZGVNYWduaXR1ZGU9K2V4cGxvZGVNYWduaXR1ZGUudmFsdWUvMTAwO2FjdG9yLmRpc3Bvc2UoZGlzcG9zYWwudmFsdWUgYXMgTmVvblNoYXBlRGlzcG9zYWwpO3NldFRpbWVvdXQoKCk9PnthY3Rvcj1uZXcgTmVvblNoYXBlQWN0b3Ioe3NoYXBlOmN1cnJlbnRTaGFwZSgpLHNjYWxlOit6b29tLnZhbHVlLzEwMCxleHBsb2RlTWFnbml0dWRlOitleHBsb2RlTWFnbml0dWRlLnZhbHVlLzEwMH0pfSwxMTAwKX0pO1xuY29uc3QgY29udHJvbGxlcldpbmRvdz13aW5kb3cgYXMgdW5rbm93biBhcyB7Z2FtZUNvbnRyb2xsZXI/OntjcmVhdGVKb3lzdGljayhvcHRpb25zOm9iamVjdCk6e29uQ2hhbmdlKGZuOihpbnB1dDp7eDpudW1iZXI7eTpudW1iZXJ9KT0+dm9pZCk6dW5rbm93bn19fTtcbmNvbnRyb2xsZXJXaW5kb3cuZ2FtZUNvbnRyb2xsZXI/LmNyZWF0ZUpveXN0aWNrKHtlbGVtZW50OlwiI3N0aWNrXCIsa25vYlNlbGVjdG9yOlwiaVwiLHJhZGl1czo1NCxvcmllbnRhdGlvbkxheW91dDp7cG9ydHJhaXQ6e3g6ODYseUZyb21Cb3R0b206ODZ9LGxhbmRzY2FwZTp7eDo4Nix5RnJvbUJvdHRvbTo4Nn19fSkub25DaGFuZ2UodmFsdWU9PntpbnB1dFg9dmFsdWUueDtpbnB1dFk9dmFsdWUueTthdXRvLmNoZWNrZWQ9ZmFsc2V9KTtcbmNvbnN0IHRlc3Q9Y3JlYXRlVGVzdFBhZ2UoXCJuZW9uLWZhY3Rvcnktc2hhcGUtaW5zcGVjdG9yXCIse2ltcGFjdDooZGlyZWN0aW9uOnt4Om51bWJlcjt5Om51bWJlcn0sbWFnbml0dWRlOm51bWJlcik9PmFjdG9yLmltcGFjdCh7ZGlyZWN0aW9uLG1hZ25pdHVkZX0pLGRpc3Bvc2U6KG1vZGU6TmVvblNoYXBlRGlzcG9zYWwpPT5hY3Rvci5kaXNwb3NlKG1vZGUpLG1vdmVUbzooeDpudW1iZXIseTpudW1iZXIpPT5hY3Rvci5tb3ZlVG8oeCx5KX0sc3RhdHVzKTtcbnRyeXtjb25zdCByZW5kZXJlcj1hd2FpdCBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIuY3JlYXRlKGNhbnZhcyw5MDAsNzAwKTtsZXQgZnJhbWU9MCxsYXN0PXBlcmZvcm1hbmNlLm5vdygpO1xuY29uc3QgcmVuZGVyPShub3c6bnVtYmVyKT0+e2NvbnN0IGR0PU1hdGgubWluKC4wNCwobm93LWxhc3QpLzEwMDApO2xhc3Q9bm93O3JvdGF0aW9uWC52YWx1ZT1TdHJpbmcoY2xhbXBEZWdyZWVzKCtyb3RhdGlvblgudmFsdWUraW5wdXRZKmR0KjEyNikpO3JvdGF0aW9uWS52YWx1ZT1TdHJpbmcoY2xhbXBEZWdyZWVzKCtyb3RhdGlvblkudmFsdWUraW5wdXRYKmR0KjEyNikpO2FjdG9yLnNoYXBlPXsuLi5jdXJyZW50U2hhcGUoKSxkZXB0aDorZGVwdGgudmFsdWUvMTAwfTthY3Rvci5zY2FsZT0rem9vbS52YWx1ZS8xMDA7YWN0b3Iuc2V0VmVsb2NpdHkoK3ZlbG9jaXR5WC52YWx1ZS8xMDAsK3ZlbG9jaXR5WS52YWx1ZS8xMDApLnVwZGF0ZShkdCk7XG5sZXQgYXg9cmFkaWFucygrcm90YXRpb25YLnZhbHVlKSxheT1yYWRpYW5zKCtyb3RhdGlvblkudmFsdWUpLGF6PXJhZGlhbnMoK3JvdGF0aW9uWi52YWx1ZSk7aWYoYXV0by5jaGVja2VkKXtjb25zdCB3YXZlPU1hdGguc2luKG5vdy83MDApKi4yNDtpZihhY3Rvci5zaGFwZS5yb2NrPT09XCJwaXRjaFwiKWF4Kz13YXZlO2lmKGFjdG9yLnNoYXBlLnJvY2s9PT1cInJvbGxcIilheis9d2F2ZTtpZihhY3Rvci5zaGFwZS5yb2NrPT09XCJ5YXdcInx8YWN0b3Iuc2hhcGUucm9jaz09PVwib3JiaXRcIilheSs9d2F2ZX1cbmFjdG9yLnJvdGF0aW9uWD1heDthY3Rvci5yb3RhdGlvblk9YXk7YWN0b3Iucm90YXRpb25aPWF6O2FjdG9yLmxhYmVsPWxhYmVsVGV4dC52YWx1ZT97dGV4dDpsYWJlbFRleHQudmFsdWUscG9zaXRpb246bGFiZWxQb3NpdGlvbi52YWx1ZSBhcyBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uLG9mZnNldDorbGFiZWxPZmZzZXQudmFsdWUsZm9udEZhbWlseTpsYWJlbEZvbnQudmFsdWUsZm9udFNpemU6K2xhYmVsU2l6ZS52YWx1ZX06dW5kZWZpbmVkO1xuYWN0b3IuZW50cmFuY2VEdXJhdGlvbj0rZW50cmFuY2VEdXJhdGlvbi52YWx1ZS8xMDA7YWN0b3IuZW50cmFuY2VNYWduaXR1ZGU9K2VudHJhbmNlTWFnbml0dWRlLnZhbHVlLzEwMDtjb25zdCBjdXJyZW50Um90YXRpb25MYWJlbD1yb3RhdGlvbkxhYmVsKCk7cm90YXRpb25SZWFkb3V0LnZhbHVlPWN1cnJlbnRSb3RhdGlvbkxhYmVsO1xudGl0bGUudGV4dENvbnRlbnQ9YWN0b3Iuc2hhcGUubmFtZTtyZWFkb3V0LnRleHRDb250ZW50PWAke2FjdG9yLnNoYXBlLmZhbWlseS50b1VwcGVyQ2FzZSgpfSBcdTAwQjcgJHthY3Rvci5zaGFwZS5yb2NrfSBcdTAwQjcgcm90YXRpb24gJHtjdXJyZW50Um90YXRpb25MYWJlbH0gXHUwMEI3IGVudHJhbmNlICR7YWN0b3IuZW50cmFuY2VEdXJhdGlvbi50b0ZpeGVkKDIpfXMgXHUwMEI3IHBvc2l0aW9uICR7YWN0b3IueC50b0ZpeGVkKDIpfSwgJHthY3Rvci55LnRvRml4ZWQoMil9YDtcbnJlbmRlcmVyLnJlbmRlcih7c2hhcGVzOlt7Li4uYWN0b3IucmVuZGVySW5zdGFuY2Uoe2xpbmVUaGlja25lc3M6K3RoaWNrbmVzcy52YWx1ZS8xMDAsZW5lcmd5SW50ZW5zaXR5OitpbnRlbnNpdHkudmFsdWUvMTAwLGVuZXJneUNvdmVyYWdlOitjb3ZlcmFnZS52YWx1ZS8xMDAsZW5lcmd5U3BlZWQ6K3NwZWVkLnZhbHVlLzEwMCxlbmVyZ3lCbGVlZDorYmxlZWQudmFsdWUvMTAwfSkseDo0NTArYWN0b3IueCoyODAseTozNTAtYWN0b3IueSoyODAsc2l6ZTphY3Rvci5zY2FsZSoyODB9XX0sbm93LzEwMDApO2ZyYW1lPXJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpfTtmcmFtZT1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCgpPT57Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWUpO3JlbmRlcmVyLmRlc3Ryb3koKX0se29uY2U6dHJ1ZX0pO3Rlc3QucmVhZHkoKTt0ZXN0LmFzc2VydChcIldlYkdQVSBzaGFwZSByZW5kZXJlciBpbml0aWFsaXplZFwiLHRydWUpO3Rlc3QuYXNzZXJ0KFwiQmVoYXZpb3IgZHJpdmVyIGlzIGV4cG9zZWRcIix0cnVlKTtcbn1jYXRjaChjYXVzZSl7Y29uc3QgbWVzc2FnZT1jYXVzZSBpbnN0YW5jZW9mIEVycm9yP2NhdXNlLm1lc3NhZ2U6U3RyaW5nKGNhdXNlKTtlcnJvci5oaWRkZW49ZmFsc2U7ZXJyb3IudGV4dENvbnRlbnQ9bWVzc2FnZTt0ZXN0LmFzc2VydChcIldlYkdQVSBzaGFwZSByZW5kZXJlciBpbml0aWFsaXplZFwiLGZhbHNlLG1lc3NhZ2UpfVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFPLElBQU0sY0FBYztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFDWjs7O0FDT0EsSUFBTSxVQUFVLENBQUMsT0FBZSxXQUFXLENBQUMsS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssTUFDcEUsTUFBTSxLQUFLLEVBQUUsUUFBUSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDdEMsUUFBTSxRQUFRLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSTtBQUMzQyxTQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRTtBQUNwRCxDQUFDO0FBRUgsSUFBTSxPQUFPLENBQUMsUUFBZ0IsUUFBUSxNQUFLLFdBQVcsQ0FBQyxLQUFLLEtBQUssTUFDL0QsTUFBTSxLQUFLLEVBQUUsUUFBUSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUMzQyxRQUFNLFNBQVMsSUFBSSxJQUFJLFFBQVE7QUFDL0IsUUFBTSxRQUFRLFdBQVcsSUFBSSxLQUFLLEtBQUs7QUFDdkMsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU07QUFDNUQsQ0FBQztBQUVILElBQU0sVUFBdUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlELElBQU0sUUFBcUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBSyxJQUFHLEdBQUcsQ0FBQyxNQUFLLElBQUcsR0FBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLEdBQUcsQ0FBQyxPQUFNLElBQUcsQ0FBQztBQUMvRixJQUFNLFVBQXVCLENBQUMsQ0FBQyxJQUFJLEtBQUksR0FBRyxDQUFDLEdBQUcsS0FBSSxHQUFHLENBQUMsR0FBRyxLQUFJLEdBQUcsQ0FBQyxNQUFLLElBQUcsR0FBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLENBQUM7QUFDakcsSUFBTSxTQUFzQixRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDbEQsSUFBTSxTQUEwQztBQUFBLEVBQzlDLFFBQVEsWUFBWTtBQUFBLEVBQU0sUUFBUSxZQUFZO0FBQUEsRUFBSyxTQUFTLFlBQVk7QUFBQSxFQUN4RSxNQUFNLFlBQVk7QUFBQSxFQUFNLFdBQVc7QUFBQSxFQUFXLE9BQU87QUFDdkQ7QUFFQSxJQUFNLE9BQU8sQ0FDWCxRQUF5QixJQUFZLE1BQWMsUUFDbkQsTUFBcUIsV0FDYSxFQUFFLElBQUksTUFBTSxRQUFRLFFBQVEsT0FBTyxNQUFNLE9BQU8sT0FBTyxNQUFNLEdBQUcsT0FBTyxXQUFXLFNBQVMsT0FBTSxLQUFJO0FBRWxJLElBQU0sbUJBQTREO0FBQUEsRUFDdkUsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsT0FBTyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksTUFBSyxJQUFJLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUNySCxLQUFLLFVBQVUsZUFBZSxlQUFlLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLEtBQUcsSUFBRyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDcEksS0FBSyxVQUFVLGFBQWEsYUFBYSxLQUFLLEdBQUcsSUFBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsSUFBRSxLQUFHLElBQUUsR0FBRSxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQzdHLEtBQUssVUFBVSxlQUFlLGVBQWUsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBRyxHQUFHLE1BQUssSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNsRyxLQUFLLFVBQVUsY0FBYyxjQUFjLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLEdBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQU0sQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDbEwsS0FBSyxVQUFVLGFBQWEsYUFBYSxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxLQUFHLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQzlGLEtBQUssVUFBVSxlQUFlLGVBQWUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxPQUFLLElBQUcsQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUM5RyxLQUFLLFVBQVUsZUFBZSxlQUFlLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxNQUFLLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDN0YsS0FBSyxVQUFVLGVBQWUsZUFBZSxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBRTdGLEtBQUssVUFBVSxlQUFlLFFBQVEsQ0FBQyxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLEdBQUUsR0FBRSxDQUFDLE9BQUssQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBQ2hGLEtBQUssVUFBVSxlQUFlLFFBQVEsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUN6RyxLQUFLLFVBQVUsaUJBQWlCLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUFBLEVBQ3BGLEtBQUssVUFBVSxnQkFBZ0IsU0FBUyxLQUFLLEdBQUUsSUFBRyxHQUFHLE1BQU07QUFBQSxFQUMzRCxLQUFLLFVBQVUsZ0JBQWdCLFNBQVMsU0FBUyxPQUFPO0FBQUEsRUFDeEQsS0FBSyxVQUFVLGNBQWMsT0FBTyxTQUFTLE9BQU87QUFBQSxFQUNwRCxLQUFLLFVBQVUsY0FBYyxXQUFXLFFBQVEsR0FBRyxLQUFLLEtBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUUsS0FBSyxLQUFHLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ3BHLEtBQUssVUFBVSxnQkFBZ0IsU0FBUyxLQUFLLEdBQUUsSUFBRyxHQUFHLE9BQU87QUFBQSxFQUM1RCxLQUFLLFVBQVUsZUFBZSxRQUFRLENBQUMsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxLQUFHLENBQUMsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsS0FBRyxJQUFHLENBQUMsR0FBRyxNQUFNO0FBQUEsRUFFeEcsS0FBSyxXQUFXLGlCQUFpQixTQUFTLFFBQVEsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDdkcsS0FBSyxXQUFXLGVBQWUsT0FBTyxTQUFTLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ3RHLEtBQUssV0FBVyxlQUFlLFlBQVksUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNwRixLQUFLLFdBQVcsaUJBQWlCLFNBQVMsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLEtBQUcsS0FBSSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxLQUFHLEdBQUUsR0FBRSxDQUFDLE1BQUksR0FBRSxDQUFDLEdBQUcsTUFBTTtBQUFBLEVBQ3JILEtBQUssV0FBVyxpQkFBaUIsU0FBUyxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsS0FBSztBQUFBLEVBQ3RLLEtBQUssV0FBVyxpQkFBaUIsU0FBUyxTQUFTLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxLQUFHLElBQUUsR0FBRSxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ3hHLEtBQUssV0FBVyxnQkFBZ0IsUUFBUSxLQUFLLEdBQUUsSUFBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDbEYsS0FBSyxXQUFXLGFBQWEsVUFBVSxDQUFDLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxDQUFDLEdBQUcsTUFBTTtBQUFBLEVBQzFKLEtBQUssV0FBVyxnQkFBZ0IsUUFBUSxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsSUFBRyxDQUFDLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFFbEYsS0FBSyxRQUFRLFlBQVksYUFBYSxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQy9FLEtBQUssUUFBUSxZQUFZLGFBQWEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBSyxLQUFJLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDdkosS0FBSyxRQUFRLGNBQWMsU0FBUyxRQUFRLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ2pHLEtBQUssUUFBUSxZQUFZLFdBQVcsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUM3RSxLQUFLLFFBQVEsYUFBYSxZQUFZLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDakYsS0FBSyxRQUFRLGdCQUFnQixXQUFXLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUcsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDckYsS0FBSyxRQUFRLGdCQUFnQixXQUFXLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsTUFBSSxJQUFFLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUNwTixLQUFLLFFBQVEsZUFBZSxVQUFVLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLElBQUcsS0FBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEtBQUcsS0FBSSxHQUFFLENBQUMsS0FBRyxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNySyxLQUFLLFFBQVEsWUFBWSxZQUFZLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUcsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFFaEYsS0FBSyxhQUFhLGlCQUFpQixpQkFBaUIsU0FBUyxRQUFRLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUNqSCxLQUFLLGFBQWEsaUJBQWlCLGNBQWMsQ0FBQyxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxJQUFHLEdBQUUsR0FBRSxDQUFDLE9BQUssR0FBRSxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxNQUFJLEdBQUUsQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUMxSSxLQUFLLGFBQWEsZ0JBQWdCLFlBQVksUUFBUSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsTUFBSSxJQUFFLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUMzRyxLQUFLLGFBQWEsaUJBQWlCLFdBQVcsU0FBUyxLQUFLO0FBQUEsRUFDNUQsS0FBSyxhQUFhLGFBQWEsYUFBYSxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ3ZGLEtBQUssYUFBYSxtQkFBbUIsYUFBYSxDQUFDLENBQUMsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBQ3pHLEtBQUssYUFBYSxjQUFjLFFBQVEsUUFBUSxJQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBRyxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUMzRixLQUFLLGFBQWEsZ0JBQWdCLFVBQVUsS0FBSyxHQUFFLElBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ3ZGLEtBQUssYUFBYSxjQUFjLGNBQWMsUUFBUSxTQUFTLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsTUFBSSxJQUFFLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUU1RyxLQUFLLFNBQVMsY0FBYyxhQUFhLEtBQUssR0FBRSxJQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRSxHQUFFLEtBQUcsR0FBRSxDQUFDLENBQUM7QUFBQSxFQUNsRixLQUFLLFNBQVMsYUFBYSxZQUFZLEtBQUssSUFBRyxJQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBRyxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNuRixLQUFLLFNBQVMsZUFBZSxjQUFjLEtBQUssR0FBRSxJQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDL0csS0FBSyxTQUFTLGVBQWUsZUFBZSxTQUFTLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxLQUFHLElBQUUsR0FBRSxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ3pHLEtBQUssU0FBUyxlQUFlLGFBQWEsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBRyxHQUFFLEtBQUcsR0FBRSxHQUFHLFFBQVEsSUFBRyxHQUFFLEtBQUcsR0FBRSxDQUFDLENBQUM7QUFBQSxFQUMxRyxLQUFLLFNBQVMsaUJBQWlCLGdCQUFnQixLQUFLLEdBQUUsSUFBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxLQUFHLElBQUUsR0FBRSxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQzlHLEtBQUssU0FBUyxrQkFBa0IsWUFBWSxLQUFLLElBQUcsSUFBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUcsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDMUYsS0FBSyxTQUFTLGVBQWUsZUFBZSxDQUFDLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEtBQUcsSUFBRyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDdkosS0FBSyxTQUFTLGlCQUFpQixXQUFXLEtBQUssR0FBRSxJQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFDdkY7OztBQzlEQSxJQUFNLGtCQUFrQjtBQUV4QixJQUFNO0FBQUE7QUFBQSxFQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZEekIsSUFBTSxNQUFNLENBQUMsVUFBNEM7QUFDdkQsUUFBTSxNQUFNLE1BQU0sUUFBUSxLQUFLLEVBQUU7QUFDakMsU0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxXQUFTLE9BQU8sU0FBUyxJQUFJLE1BQU0sT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRztBQUN0RjtBQUNBLElBQU0sTUFBTSxDQUFDLEdBQU8sTUFBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLElBQU0sUUFBUSxDQUFDLEdBQU8sTUFBYyxDQUFDLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xHLElBQU0sWUFBWSxDQUFDLE1BQWM7QUFDL0IsUUFBTSxTQUFTLEtBQUssTUFBTSxHQUFHLENBQUMsS0FBSztBQUNuQyxTQUFPLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxJQUFJLE1BQU07QUFDckQ7QUFDQSxJQUFNLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQU8sSUFBWSxJQUFZLE9BQW1CO0FBQ3hFLE1BQUksSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7QUFBRyxNQUFJO0FBQUcsTUFBSTtBQUNqRyxNQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQUcsTUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQUcsTUFBSTtBQUFHLE1BQUk7QUFDOUYsU0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDO0FBQ3JGO0FBRUEsU0FBUyxLQUFLLFVBQXVDO0FBQ25ELFFBQU0sRUFBRSxNQUFNLElBQUk7QUFDbEIsUUFBTUEsU0FBUSxNQUFNLFNBQVM7QUFDN0IsUUFBTSxRQUFRLElBQUksU0FBUyxTQUFTLE1BQU0sS0FBSztBQUMvQyxRQUFNLFFBQVEsU0FBUyxTQUFTO0FBQ2hDLFFBQU0sS0FBSyxTQUFTLGFBQWEsR0FBRyxLQUFLLFNBQVMsYUFBYSxHQUFHLEtBQUssU0FBUyxhQUFhO0FBQzdGLFFBQU0sbUJBQW1CLFNBQVMsb0JBQW9CO0FBQ3RELFFBQU0sZUFBZSxtQkFBbUIsb0JBQW9CLElBQUksSUFBSTtBQUNwRSxRQUFNLGlCQUFpQixDQUFDLE9BQWtCLEdBQVcsVUFBc0I7QUFDekUsUUFBSSxvQkFBb0IsRUFBRyxRQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDMUMsVUFBTSxPQUFPLEtBQUssSUFBSSxRQUFRLFFBQVEsTUFBTSxDQUFDLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJO0FBQ3RGLFVBQU0sU0FBUyxPQUFPLEtBQUssTUFBTSxJQUFJO0FBQ3JDLFVBQU0sUUFBUSxTQUFTLEtBQUssS0FBSztBQUNqQyxVQUFNLFVBQVUsU0FBUyxxQkFBcUIsU0FBUyxvQkFBb0IsU0FBUSxJQUFJLGlCQUFpQixPQUFNLFNBQVM7QUFDdkgsV0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVMsU0FBUyxPQUFNLFNBQVMsSUFBRztBQUFBLEVBQzFGO0FBQ0EsUUFBTSxPQUFPLENBQUMsT0FBa0IsR0FBVyxRQUFRLE1BQVU7QUFDM0QsVUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRTtBQUM3RSxVQUFNLElBQUksZUFBZSxPQUFPLEdBQUcsS0FBSztBQUN4QyxXQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxLQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssU0FBUyxLQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssU0FBUyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBQSxFQUMzRztBQUNBLFFBQU0sU0FBbUIsQ0FBQztBQUMxQixRQUFNLE1BQU0sQ0FBQyxHQUFPLEdBQU8sR0FBTyxXQUFnQjtBQUNoRCxVQUFNLElBQUksVUFBVSxVQUFVLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekQsVUFBTSxTQUEyQjtBQUFBLE1BQy9CLFNBQVMsbUJBQW1CO0FBQUEsTUFBRyxTQUFTLGtCQUFrQjtBQUFBLE1BQzFELFNBQVMsZUFBZTtBQUFBLE1BQUcsU0FBUyxlQUFlO0FBQUEsSUFDckQ7QUFDQSxLQUFDLEdBQUUsR0FBRSxDQUFDLEVBQUUsUUFBUSxPQUFLLE9BQU8sS0FBSyxFQUFFLEdBQUcsR0FBRyxPQUFPLE9BQU8sU0FBUyxRQUFRLE1BQU0sU0FBUyxXQUFXLEtBQUssY0FBYyxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQ2hJO0FBQ0EsUUFBTSxRQUFRLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxVQUFVLEtBQUssT0FBT0EsU0FBUSxHQUFHLEtBQUssQ0FBQztBQUM5RSxRQUFNLE9BQU8sTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLFVBQVUsS0FBSyxPQUFPLENBQUNBLFNBQVEsR0FBRyxRQUFRLE1BQU0sT0FBTyxNQUFNLENBQUM7QUFDcEcsV0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFNBQVMsR0FBRyxJQUFLLEtBQUksTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUMvRSxXQUFTLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxHQUFHLElBQUssS0FBSSxLQUFLLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzNFLFFBQU0sT0FBTyxRQUFRLENBQUMsR0FBRyxNQUFNO0FBQzdCLFVBQU0sUUFBUSxJQUFJLEtBQUssTUFBTSxPQUFPO0FBQ3BDLFFBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFDakMsUUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQztBQUFBLEVBQ3ZDLENBQUM7QUFDRCxTQUFPO0FBQ1Q7QUFFQSxTQUFTLFNBQVMsVUFBdUM7QUFDdkQsUUFBTSxFQUFFLE1BQU0sSUFBSTtBQUNsQixRQUFNQSxTQUFRLE1BQU0sU0FBUztBQUM3QixRQUFNLFFBQVEsSUFBSSxTQUFTLFNBQVMsTUFBTSxLQUFLO0FBQy9DLFFBQU0sUUFBUSxTQUFTLFNBQVM7QUFDaEMsUUFBTSxLQUFLLFNBQVMsYUFBYSxHQUFHLEtBQUssU0FBUyxhQUFhLEdBQUcsS0FBSyxTQUFTLGFBQWE7QUFDN0YsUUFBTSxtQkFBbUIsU0FBUyxvQkFBb0I7QUFDdEQsUUFBTSxlQUFlLG1CQUFtQixvQkFBb0IsSUFBSSxJQUFJO0FBQ3BFLFFBQU0sT0FBTyxDQUFDLE9BQWtCLE1BQWtCO0FBQ2hELFVBQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDN0UsV0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxLQUFLLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxLQUFLLFNBQVMsS0FBSyxFQUFFO0FBQUEsRUFDdEY7QUFDQSxRQUFNLFVBQVUsQ0FBQyxHQUFPLEdBQU8sVUFBNEI7QUFDekQsVUFBTSxXQUFXLEtBQUssSUFBSSxTQUFTLG1CQUFtQixHQUFHLElBQUksWUFBWTtBQUN6RSxRQUFJLENBQUMsU0FBVSxRQUFPLENBQUMsR0FBRyxDQUFDO0FBQzNCLFVBQU0sTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsS0FBSyxJQUFJLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLEtBQUs7QUFDMUYsVUFBTSxTQUFTLEtBQUssTUFBTSxJQUFJLEVBQUUsS0FBSztBQUNyQyxVQUFNLFlBQVksU0FBUyxvQkFBb0I7QUFDL0MsVUFBTUMsU0FBUSxhQUFhLFFBQU8sS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJLE1BQUssT0FBTTtBQUN2RSxVQUFNLEtBQUssS0FBSyxTQUFTLFdBQVdBLFFBQU8sS0FBSyxLQUFLLFNBQVMsV0FBV0EsU0FBUSxXQUFXLFdBQVc7QUFDdkcsVUFBTSxRQUFRLFlBQVksUUFBUSxJQUFJLElBQUksTUFBTTtBQUNoRCxVQUFNLFlBQVksQ0FBQyxNQUFjO0FBQy9CLFlBQU0sSUFBSSxFQUFFLENBQUMsS0FBSyxTQUFTLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUFLLFNBQVMsS0FBSztBQUM5RCxhQUFPLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFBLElBQ3RKO0FBQ0EsV0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDcEM7QUFDQSxRQUFNLFNBQW1CLENBQUM7QUFDMUIsTUFBSSxXQUFXO0FBQ2YsUUFBTSxTQUEyQjtBQUFBLElBQy9CLFNBQVMsbUJBQW1CO0FBQUEsSUFBRyxTQUFTLGtCQUFrQjtBQUFBLElBQzFELFNBQVMsZUFBZTtBQUFBLElBQUcsU0FBUyxlQUFlO0FBQUEsRUFDckQ7QUFDQSxRQUFNLFVBQVUsQ0FBQyxHQUFPLEdBQU8sT0FBZSxhQUFhLEdBQUcsVUFBVSxNQUFNO0FBQzVFLEtBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLEdBQUcsS0FBSyxNQUFNLFdBQVcsR0FBRyxJQUFJLEtBQUssTUFBTSxRQUFRLEVBQUUsQ0FBQztBQUMxRSxVQUFNLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdkMsVUFBTSxTQUFTLEtBQUssTUFBTSxJQUFJLEVBQUUsS0FBSztBQUNyQyxVQUFNLFNBQVMsU0FBUyxpQkFBaUIsS0FBSyxRQUFPO0FBQ3JELFVBQU0sS0FBSyxDQUFDLEtBQUssU0FBUyxPQUFPLEtBQUssS0FBSyxTQUFTO0FBQ3BELFVBQU0sS0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakYsVUFBTSxLQUFTLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRixVQUFNLFFBQVEsV0FBVyxLQUFLLE9BQU8sV0FBVyxVQUFVO0FBQzFELFVBQU0sT0FBTyxDQUFDLEdBQU8sT0FBZSxXQUNsQyxPQUFPLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLFFBQVEsS0FBSyxHQUFHLE9BQU8sT0FBTyxTQUFTLFFBQVEsS0FBSyxXQUFXLFNBQVMsV0FBVyxLQUFLLGdCQUFnQixJQUFJLEtBQUssS0FBSyxTQUFTLG1CQUFtQixLQUFLLEtBQUssRUFBRSxLQUFLLFNBQVMsb0JBQW9CLFFBQU8sUUFBUSxLQUFLLFNBQVMsbUJBQW1CLEtBQUssTUFBSyxPQUFPLENBQUM7QUFDaFMsU0FBSyxJQUFHLE9BQU0sRUFBRTtBQUFHLFNBQUssSUFBRyxPQUFNLENBQUM7QUFBRyxTQUFLLElBQUcsS0FBSSxFQUFFO0FBQ25ELFNBQUssSUFBRyxLQUFJLEVBQUU7QUFBRyxTQUFLLElBQUcsT0FBTSxDQUFDO0FBQUcsU0FBSyxJQUFHLEtBQUksQ0FBQztBQUNoRCxnQkFBWTtBQUFBLEVBQ2Q7QUFDQSxRQUFNLFVBQVUsQ0FBQyxRQUE4QixHQUFXLFVBQ3hELE9BQU8sUUFBUSxDQUFDLE9BQU8sVUFBVSxRQUFRLEtBQUssT0FBTyxDQUFDLEdBQUcsS0FBSyxRQUFRLFFBQVEsS0FBSyxPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxRQUFRLElBQUcsQ0FBQztBQUM3SCxVQUFRLE1BQU0sUUFBUUQsU0FBUSxHQUFHLEdBQUU7QUFDbkMsVUFBUSxNQUFNLFFBQVEsQ0FBQ0EsU0FBUSxHQUFHLEdBQUc7QUFDckMsUUFBTSxPQUFPLFFBQVEsQ0FBQyxNQUFNLFVBQVU7QUFDcEMsWUFBUSxNQUFNQSxTQUFRLElBQUksTUFBTSxNQUFNLEtBQUs7QUFDM0MsWUFBUSxNQUFNLENBQUNBLFNBQVEsSUFBSSxNQUFNLE1BQU0sS0FBSztBQUFBLEVBQzlDLENBQUM7QUFDRCxRQUFNLE9BQU8sUUFBUSxDQUFDLE9BQU8sVUFBVSxRQUFRLEtBQUssT0FBTyxDQUFDQSxTQUFRLENBQUMsR0FBRyxLQUFLLE9BQU9BLFNBQVEsQ0FBQyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQzVHLFFBQU0sT0FBTyxZQUFZLElBQUksSUFBSSxPQUFRLFNBQVMsZUFBZTtBQUNqRSxRQUFNLGtCQUFrQixTQUFTLG1CQUFtQixNQUFNLFNBQVMsa0JBQWtCO0FBQ3JGLFFBQU0sU0FBUyxDQUFDLFNBQWlCO0FBQy9CLFVBQU0sUUFBUSxLQUFLLElBQUksT0FBTyxVQUFVLE1BQU0sT0FBTyxTQUFTLE1BQU0sSUFBSTtBQUN4RSxXQUFPLFFBQVEsS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUNqQztBQUNBLFFBQU0sVUFBVSxDQUFDLEdBQVcsR0FBV0UsYUFBK0I7QUFBQSxJQUNwRSxJQUFJLEtBQUssSUFBSUEsUUFBTyxJQUFJLElBQUksS0FBSyxJQUFJQSxRQUFPO0FBQUEsSUFDNUMsSUFBSSxLQUFLLElBQUlBLFFBQU8sSUFBSSxJQUFJLEtBQUssSUFBSUEsUUFBTztBQUFBLEVBQzlDO0FBQ0EsUUFBTSxPQUFPLFFBQVEsQ0FBQyxPQUFPLFVBQVU7QUFDckMsVUFBTSxRQUFRLEtBQUssTUFBTSxPQUFPLE9BQU8sUUFBUSxJQUFHO0FBQ2xELFVBQU0sTUFBTSxPQUFPLE9BQU8sUUFBUSxPQUFNO0FBQ3hDLFVBQU0sT0FBTyxRQUFRLE9BQU8sUUFBUTtBQUNwQyxVQUFNLGlCQUFpQixPQUFNLE9BQU8sT0FBTyxDQUFDLElBQUk7QUFDaEQsVUFBTSxlQUFlLEtBQUssSUFBSSxHQUFHLGlCQUFpQixPQUFNLE9BQU8sT0FBTyxDQUFDLElBQUksSUFBRztBQUM5RSxVQUFNLGVBQWUsTUFBTTtBQUMzQixVQUFNLGFBQWEsTUFBTTtBQUN6QixRQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBZSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxNQUFLLGlCQUFpQixHQUFFLEVBQUc7QUFDN0YsVUFBTSxPQUFPLE1BQU0sUUFBUSxRQUFRLEtBQUssTUFBTSxPQUFPLE1BQU07QUFDM0QsVUFBTSxJQUFJLE9BQU0sT0FBTyxPQUFPLENBQUMsSUFBSTtBQUNuQyxVQUFNLE9BQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pHLFVBQU0sS0FBSyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssS0FBSyxNQUFNLElBQUksRUFBRSxLQUFLO0FBQ25GLFVBQU0sWUFBWSxPQUFPLE9BQU8sQ0FBQyxJQUFJLE1BQUssSUFBSTtBQUM5QyxVQUFNLGdCQUEyQixDQUFDLENBQUMsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFNBQVM7QUFDM0UsVUFBTSxlQUFlLEtBQUssT0FBTyxPQUFPLENBQUMsSUFBSSxNQUFNLEtBQUssS0FBSyxPQUFPLE9BQU8sT0FBTyxDQUFDLElBQUksTUFBSyxJQUFJO0FBQ2hHLFFBQUksVUFBVSxRQUFRLGNBQWMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLFdBQVc7QUFDckUsVUFBTSxlQUFlLElBQUksS0FBSyxNQUFNLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztBQUN4RCxVQUFNLFNBQXNCLENBQUMsSUFBSTtBQUNqQyxhQUFTLFVBQVUsR0FBRyxVQUFVLGNBQWMsV0FBVztBQUN2RCxZQUFNLFNBQVMsUUFBTyxPQUFPLE9BQU8sS0FBSyxPQUFPLElBQUk7QUFDcEQsWUFBTSxXQUFXLE9BQU8sT0FBTyxTQUFTLENBQUM7QUFDekMsYUFBTyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksUUFBUSxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUM7QUFDbEYsWUFBTSxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssT0FBTyxJQUFJLE1BQU0sS0FBSyxLQUFLO0FBQ25FLGdCQUFVLFFBQVEsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsVUFBVSxPQUFPLE9BQU8sS0FBSyxPQUFPLElBQUksTUFBSyxJQUFJLEdBQUc7QUFBQSxJQUNoRztBQUNBLFFBQUksWUFBWTtBQUNkLFlBQU0sT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHLE1BQU0sY0FBYyxJQUFJLEtBQUssSUFBSSxNQUFNLGVBQWUsY0FBYztBQUNqRyxZQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsTUFBTSxjQUFjLElBQUk7QUFDbEQsYUFBTyxNQUFNLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLFlBQVk7QUFDOUMsY0FBTSxNQUFNLE9BQU8sVUFBVSxDQUFDO0FBQzlCLGNBQU0sWUFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLEtBQUs7QUFDdEcsY0FBTSxVQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksS0FBSztBQUNoRyxnQkFBUSxLQUFLLFdBQVdGLFNBQVEsSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTQSxTQUFRLElBQUksSUFBSSxHQUFHLEtBQUssT0FBTyxTQUFTLE9BQU8sT0FBTyxNQUFLLE9BQU8sSUFBRztBQUFBLE1BQ2hJLENBQUM7QUFBQSxJQUNIO0FBQ0EsUUFBSSxjQUFjO0FBQ2hCLGFBQU8sTUFBTSxHQUFHLEVBQUUsRUFBRSxRQUFRLENBQUMsT0FBTyxZQUFZO0FBQzlDLGdCQUFRLEtBQUssT0FBT0EsU0FBUSxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sVUFBVSxDQUFDLEdBQUdBLFNBQVEsSUFBSSxJQUFJLEdBQUcsS0FBSyxPQUFPLFNBQVMsSUFBRztBQUFBLE1BQzlHLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBQ0QsU0FBTztBQUNUO0FBRU8sSUFBTSw2QkFBTixNQUFNLDRCQUEyQjtBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQTRCO0FBQUEsRUFDNUI7QUFBQSxFQUNBLGVBQXlEO0FBQUEsRUFFekQsWUFBWUcsU0FBMkIsUUFBbUIsU0FBMkIsUUFBMEI7QUFDN0csU0FBSyxTQUFTQTtBQUFRLFNBQUssU0FBUztBQUFRLFNBQUssV0FBVztBQUM1RCxVQUFNLFNBQVNBLFFBQU87QUFDdEIsUUFBSSxVQUFVLGlCQUFpQixNQUFNLEVBQUUsYUFBYSxTQUFVLFFBQU8sTUFBTSxXQUFXO0FBQ3RGLFNBQUssY0FBYyxTQUFTLGNBQWMsS0FBSztBQUMvQyxTQUFLLFlBQVksWUFBWTtBQUM3QixXQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sRUFBRSxVQUFTLFlBQVksT0FBTSxLQUFLLGVBQWMsUUFBUSxVQUFTLFNBQVMsQ0FBQztBQUNqSCxZQUFRLE9BQU8sS0FBSyxXQUFXO0FBQy9CLFVBQU0sU0FBUyxPQUFPLG1CQUFtQixFQUFFLE1BQU0sUUFBUSxPQUFPLG9DQUFvQyxDQUFDO0FBQ3JHLFNBQUssWUFBWSxPQUFPLHFCQUFxQjtBQUFBLE1BQzNDLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFBUSxZQUFZO0FBQUEsUUFDcEIsU0FBUyxDQUFDLEVBQUUsYUFBYSxrQkFBa0IsR0FBRyxZQUFZO0FBQUEsVUFDeEQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLEdBQUcsUUFBUSxZQUFZO0FBQUEsVUFDcEQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxZQUFZO0FBQUEsVUFDckQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxZQUFZO0FBQUEsVUFDckQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxVQUFVO0FBQUEsVUFDbkQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxZQUFZO0FBQUEsUUFDdkQsRUFBRSxDQUFDO0FBQUEsTUFDTDtBQUFBLE1BQ0EsVUFBVSxFQUFFLFFBQVEsWUFBWSxnQkFBZ0IsU0FBUyxDQUFDLEVBQUUsUUFBUSxPQUFPO0FBQUEsUUFDekUsT0FBTyxFQUFFLFdBQVcsYUFBYSxXQUFXLE1BQU07QUFBQSxRQUNsRCxPQUFPLEVBQUUsV0FBVyxPQUFPLFdBQVcsc0JBQXNCO0FBQUEsTUFDOUQsRUFBRSxDQUFDLEVBQUU7QUFBQSxNQUNMLFdBQVcsRUFBRSxVQUFVLGlCQUFpQixVQUFVLE9BQU87QUFBQSxNQUN6RCxjQUFjLEVBQUUsUUFBUSxlQUFlLG1CQUFtQixPQUFPLGNBQWMsYUFBYTtBQUFBLElBQzlGLENBQUM7QUFDRCxTQUFLLGdCQUFnQixPQUFPLHFCQUFxQjtBQUFBLE1BQy9DLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFBUSxZQUFZO0FBQUEsUUFDcEIsU0FBUyxDQUFDLEVBQUUsYUFBYSxrQkFBa0IsR0FBRyxZQUFZO0FBQUEsVUFDeEQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLEdBQUcsUUFBUSxZQUFZO0FBQUEsVUFDcEQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxZQUFZO0FBQUEsVUFDckQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxZQUFZO0FBQUEsVUFDckQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxVQUFVO0FBQUEsVUFDbkQsRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLElBQUksUUFBUSxZQUFZO0FBQUEsUUFDdkQsRUFBRSxDQUFDO0FBQUEsTUFDTDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBLFlBQVk7QUFBQSxRQUNaLFNBQVMsQ0FBQyxFQUFFLFFBQVEsT0FBTztBQUFBLFVBQ3pCLE9BQU8sRUFBRSxXQUFXLGFBQWEsV0FBVyxNQUFNO0FBQUEsVUFDbEQsT0FBTyxFQUFFLFdBQVcsT0FBTyxXQUFXLHNCQUFzQjtBQUFBLFFBQzlELEVBQUUsQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLFdBQVcsRUFBRSxVQUFVLGdCQUFnQjtBQUFBLE1BQ3ZDLGNBQWMsRUFBRSxRQUFRLGVBQWUsbUJBQW1CLE1BQU0sY0FBYyxhQUFhO0FBQUEsSUFDN0YsQ0FBQztBQUNELFNBQUssZUFBZSxPQUFPLGFBQWEsRUFBRSxNQUFNLElBQUksT0FBTyxlQUFlLFVBQVUsZUFBZSxTQUFTLENBQUM7QUFBQSxFQUMvRztBQUFBLEVBRUEsYUFBYSxPQUFPQSxTQUFnRTtBQUNsRixRQUFJLENBQUMsVUFBVSxJQUFLLE9BQU0sSUFBSSxNQUFNLHFEQUFxRDtBQUN6RixVQUFNLFVBQVUsTUFBTSxVQUFVLElBQUksZUFBZTtBQUNuRCxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSx5Q0FBeUM7QUFDdkUsVUFBTSxTQUFTLE1BQU0sUUFBUSxjQUFjO0FBQzNDLFVBQU0sVUFBVUEsUUFBTyxXQUFXLFFBQVE7QUFDMUMsUUFBSSxDQUFDLFFBQVMsT0FBTSxJQUFJLE1BQU0sMkNBQTJDO0FBQ3pFLFVBQU0sU0FBUyxVQUFVLElBQUkseUJBQXlCO0FBQ3RELFlBQVEsVUFBVSxFQUFFLFFBQVEsUUFBUSxXQUFXLGdCQUFnQixDQUFDO0FBQ2hFLFdBQU8sSUFBSSw0QkFBMkJBLFNBQVEsUUFBUSxTQUFTLE1BQU07QUFBQSxFQUN2RTtBQUFBLEVBRUEsZUFBZSxPQUFlLFFBQXNCO0FBQ2xELFNBQUssZUFBZSxFQUFFLE9BQU8sT0FBTztBQUNwQyxTQUFLLE9BQU8sUUFBUTtBQUNwQixTQUFLLE9BQU8sU0FBUztBQUNyQixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxXQUF5QyxnQkFBZ0IsT0FBTyxZQUFtQztBQUN4RyxTQUFLLFFBQVE7QUFDYixVQUFNLFdBQVcsVUFBVSxRQUFRLElBQUk7QUFDdkMsVUFBTSxRQUFRLFVBQVUsUUFBUSxRQUFRO0FBQ3hDLFVBQU0sT0FBTyxJQUFJLGFBQWEsU0FBUyxTQUFTLGVBQWU7QUFDL0QsVUFBTSxXQUFXLElBQUksYUFBYSxNQUFNLFNBQVMsZUFBZTtBQUNoRSxhQUFTLFFBQVEsQ0FBQyxRQUFRLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxPQUFPLE9BQU8sT0FBTyxNQUFNLEdBQUcsT0FBTyxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUM7QUFDekksVUFBTSxRQUFRLENBQUMsUUFBUSxNQUFNLFNBQVMsSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxPQUFPLE9BQU8sTUFBTSxHQUFHLE9BQU8sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDO0FBQzFJLFVBQU0sZUFBZSxLQUFLLE9BQU8sYUFBYSxFQUFFLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxVQUFVLEdBQUcsT0FBTyxlQUFlLFNBQVMsZUFBZSxTQUFTLENBQUM7QUFDNUksVUFBTSxhQUFhLEtBQUssT0FBTyxhQUFhLEVBQUUsTUFBTSxLQUFLLElBQUksR0FBRyxTQUFTLFVBQVUsR0FBRyxPQUFPLGVBQWUsU0FBUyxlQUFlLFNBQVMsQ0FBQztBQUM5SSxRQUFJLEtBQUssT0FBUSxNQUFLLE9BQU8sTUFBTSxZQUFZLGNBQWMsR0FBRyxJQUFJO0FBQ3BFLFFBQUksU0FBUyxPQUFRLE1BQUssT0FBTyxNQUFNLFlBQVksWUFBWSxHQUFHLFFBQVE7QUFDMUUsU0FBSyxPQUFPLE1BQU0sWUFBWSxLQUFLLGNBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sUUFBUSxHQUFHLFlBQVksSUFBSSxJQUFJLEtBQU0sQ0FBQyxDQUFDLENBQUM7QUFDOUksVUFBTSxZQUFZLEtBQUssT0FBTyxnQkFBZ0IsRUFBRSxRQUFRLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxVQUFVLEVBQUUsUUFBUSxLQUFLLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNsSyxVQUFNLGdCQUFnQixLQUFLLE9BQU8sZ0JBQWdCLEVBQUUsUUFBUSxLQUFLLGNBQWMsbUJBQW1CLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxTQUFTLEdBQUcsVUFBVSxFQUFFLFFBQVEsS0FBSyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDMUssVUFBTSxVQUFVLEtBQUssT0FBTyxxQkFBcUI7QUFDakQsVUFBTSxPQUFPLFFBQVEsZ0JBQWdCO0FBQUEsTUFDbkMsa0JBQWtCLENBQUMsRUFBRSxNQUFNLGNBQWMsS0FBSyxTQUFTLGtCQUFrQixFQUFFLFdBQVcsR0FBRyxZQUFZLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsUUFBUSxnQkFBZ0IsU0FBUyxTQUFTLFNBQVMsUUFBUSxDQUFDO0FBQUEsTUFDN0wsd0JBQXdCLEVBQUUsTUFBTSxLQUFLLE9BQVEsV0FBVyxHQUFHLGlCQUFpQixHQUFHLGFBQWEsU0FBUyxjQUFjLFFBQVE7QUFBQSxJQUM3SCxDQUFDO0FBQ0QsUUFBSSxTQUFTLFFBQVE7QUFBRSxXQUFLLFlBQVksS0FBSyxTQUFTO0FBQUcsV0FBSyxhQUFhLEdBQUcsU0FBUztBQUFHLFdBQUssZ0JBQWdCLEdBQUcsWUFBWTtBQUFHLFdBQUssS0FBSyxTQUFTLE1BQU07QUFBQSxJQUFHO0FBQzdKLFFBQUksTUFBTSxRQUFRO0FBQUUsV0FBSyxZQUFZLEtBQUssYUFBYTtBQUFHLFdBQUssYUFBYSxHQUFHLGFBQWE7QUFBRyxXQUFLLGdCQUFnQixHQUFHLFVBQVU7QUFBRyxXQUFLLEtBQUssTUFBTSxNQUFNO0FBQUEsSUFBRztBQUM3SixTQUFLLElBQUk7QUFBRyxTQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUN2RCxTQUFLLGNBQWMsU0FBUztBQUM1QixTQUFLLE9BQU8sTUFBTSxvQkFBb0IsRUFBRSxLQUFLLE1BQU07QUFBRSxtQkFBYSxRQUFRO0FBQUcsaUJBQVcsUUFBUTtBQUFBLElBQUcsQ0FBQztBQUFBLEVBQ3RHO0FBQUEsRUFFQSxRQUFRLGdCQUFnQixNQUFZO0FBQUUsU0FBSyxZQUFZLE9BQU87QUFBRyxTQUFLLFFBQVEsUUFBUTtBQUFHLFNBQUssYUFBYSxRQUFRO0FBQUcsUUFBSSxjQUFlLE1BQUssT0FBTyxRQUFRO0FBQUEsRUFBRztBQUFBLEVBQ2hLLGNBQWMsV0FBK0M7QUFDM0QsV0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPO0FBQUEsTUFDcEMsTUFBTSxHQUFHLEtBQUssT0FBTyxVQUFVO0FBQUEsTUFDL0IsS0FBSyxHQUFHLEtBQUssT0FBTyxTQUFTO0FBQUEsTUFDN0IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTyxHQUFHLEtBQUssT0FBTyxXQUFXO0FBQUEsTUFDakMsUUFBUSxHQUFHLEtBQUssT0FBTyxZQUFZO0FBQUEsSUFDckMsQ0FBQztBQUNELFNBQUssWUFBWSxnQkFBZ0IsR0FBRyxVQUFVLFFBQVEsY0FBWTtBQUNoRSxVQUFJLENBQUMsU0FBUyxPQUFPLFNBQVMsU0FBUyxXQUFXLE1BQU0sRUFBRyxRQUFPLENBQUM7QUFDbkUsWUFBTSxVQUFVLFNBQVMsY0FBYyxNQUFNO0FBQzdDLFlBQU0sUUFBUSxTQUFTLFNBQVM7QUFDaEMsWUFBTSxJQUFJLE1BQU0sU0FBUyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU87QUFDekUsWUFBTSxJQUFJLE1BQU0sU0FBUyxLQUFLLEtBQUs7QUFDbkMsWUFBTSxjQUFjLFFBQVEsS0FBSyxPQUFPLGVBQWU7QUFDdkQsWUFBTSxTQUFTLGVBQWUsU0FBUyxNQUFNLFVBQVUsTUFBTSxTQUFTLE1BQU0sWUFBWSxNQUFNO0FBQzlGLFlBQU0sV0FBVyxTQUFTLE1BQU0sWUFBWTtBQUM1QyxVQUFJLEtBQUssR0FBRyxLQUFLO0FBQ2pCLFVBQUksYUFBYSxRQUFTLE1BQUssQ0FBQztBQUNoQyxVQUFJLGFBQWEsUUFBUyxNQUFLO0FBQy9CLFVBQUksYUFBYSxPQUFRLE1BQUssQ0FBQztBQUMvQixVQUFJLGFBQWEsUUFBUyxNQUFLO0FBQy9CLGNBQVEsY0FBYyxTQUFTLE1BQU07QUFDckMsYUFBTyxPQUFPLFFBQVEsT0FBTztBQUFBLFFBQzNCLFVBQVM7QUFBQSxRQUFZLE1BQUssR0FBRyxDQUFDO0FBQUEsUUFBSyxLQUFJLEdBQUcsQ0FBQztBQUFBLFFBQUssV0FBVSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRTtBQUFBLFFBQzFHLE9BQU0sU0FBUyxTQUFTLFNBQVMsTUFBTTtBQUFBLFFBQU8sWUFBVyxTQUFTLE1BQU0sY0FBYztBQUFBLFFBQ3RGLFVBQVMsR0FBRyxTQUFTLE1BQU0sWUFBWSxFQUFFO0FBQUEsUUFBTSxZQUFXLE9BQU8sU0FBUyxNQUFNLGNBQWMsR0FBRztBQUFBLFFBQ2pHLFlBQVcsV0FBVyxTQUFTLFNBQVMsU0FBUyxNQUFNLEtBQUssYUFBYSxTQUFTLFNBQVMsU0FBUyxNQUFNLEtBQUs7QUFBQSxRQUFJLFlBQVc7QUFBQSxRQUM5SCxTQUFRLE9BQU8sU0FBUyxXQUFXLENBQUM7QUFBQSxNQUN0QyxDQUFDO0FBQ0QsYUFBTyxDQUFDLE9BQU87QUFBQSxJQUNqQixDQUFDLENBQUM7QUFBQSxFQUNKO0FBQUEsRUFDQSxVQUFnQjtBQUNkLFFBQUksS0FBSyxjQUFjO0FBQ3JCLFlBQU0sRUFBRSxPQUFBQyxRQUFPLFFBQUFDLFFBQU8sSUFBSSxLQUFLO0FBQy9CLFVBQUksS0FBSyxPQUFPLFVBQVVELFVBQVMsS0FBSyxPQUFPLFdBQVdDLFdBQVUsQ0FBQyxLQUFLLFFBQVE7QUFDaEYsYUFBSyxPQUFPLFFBQVFEO0FBQU8sYUFBSyxPQUFPLFNBQVNDO0FBQ2hELGFBQUssUUFBUSxRQUFRO0FBQ3JCLGFBQUssU0FBUyxLQUFLLE9BQU8sY0FBYyxFQUFFLE1BQU0sQ0FBQ0QsUUFBT0MsT0FBTSxHQUFHLFFBQVEsZUFBZSxPQUFPLGdCQUFnQixrQkFBa0IsQ0FBQztBQUFBLE1BQ3BJO0FBQ0E7QUFBQSxJQUNGO0FBQ0EsVUFBTSxRQUFRLEtBQUssSUFBSSxvQkFBb0IsR0FBRyxDQUFDO0FBQy9DLFVBQU0sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sS0FBSyxPQUFPLGNBQWMsS0FBSyxDQUFDO0FBQ3JFLFVBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sS0FBSyxPQUFPLGVBQWUsS0FBSyxDQUFDO0FBQ3ZFLFFBQUksS0FBSyxVQUFVLEtBQUssT0FBTyxVQUFVLFNBQVMsS0FBSyxPQUFPLFdBQVcsT0FBUTtBQUNqRixTQUFLLE9BQU8sUUFBUTtBQUFPLFNBQUssT0FBTyxTQUFTO0FBQ2hELFNBQUssUUFBUSxRQUFRO0FBQ3JCLFNBQUssU0FBUyxLQUFLLE9BQU8sY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLE1BQU0sR0FBRyxRQUFRLGVBQWUsT0FBTyxnQkFBZ0Isa0JBQWtCLENBQUM7QUFBQSxFQUNwSTtBQUNGOzs7QUNyWk8sSUFBTSxpQkFBTixNQUFxQjtBQUFBLEVBQzFCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLG9CQUFvQjtBQUFBLEVBQ3BCLG9CQUFvQjtBQUFBLEVBQ3BCLGtCQUFtQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUNoRCxrQkFBbUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFFaEQsWUFBWSxTQUFnQztBQUMxQyxTQUFLLFFBQVEsUUFBUTtBQUNyQixTQUFLLElBQUksUUFBUSxLQUFLO0FBQ3RCLFNBQUssSUFBSSxRQUFRLEtBQUs7QUFDdEIsU0FBSyxJQUFJLFFBQVEsS0FBSztBQUN0QixTQUFLLFdBQVcsRUFBRSxHQUFHLFFBQVEsVUFBVSxLQUFLLEdBQUcsR0FBRyxRQUFRLFVBQVUsS0FBSyxFQUFFO0FBQzNFLFNBQUssUUFBUSxRQUFRLFNBQVM7QUFDOUIsU0FBSyxRQUFRLFFBQVE7QUFDckIsU0FBSyxRQUFRLFFBQVE7QUFDckIsU0FBSyxXQUFXLFFBQVEsWUFBWTtBQUNwQyxTQUFLLG1CQUFtQixRQUFRLG9CQUFvQjtBQUNwRCxTQUFLLG1CQUFtQixRQUFRLG9CQUFvQjtBQUNwRCxTQUFLLG9CQUFvQixRQUFRLHFCQUFxQjtBQUFBLEVBQ3hEO0FBQUEsRUFFQSxPQUFPLEdBQVcsR0FBVyxJQUFJLEtBQUssR0FBUztBQUM3QyxTQUFLLElBQUk7QUFBRyxTQUFLLElBQUk7QUFBRyxTQUFLLElBQUk7QUFDakMsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFlBQVksR0FBVyxHQUFpQjtBQUN0QyxTQUFLLFNBQVMsSUFBSTtBQUFHLFNBQUssU0FBUyxJQUFJO0FBQ3ZDLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLEVBQUUsV0FBVyxVQUFVLEdBQTBCO0FBQ3RELFVBQU0sU0FBUyxLQUFLLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLO0FBQ3ZELFVBQU0sSUFBSSxVQUFVLElBQUksUUFBUSxJQUFJLFVBQVUsSUFBSTtBQUNsRCxTQUFLLGdCQUFnQixLQUFLLElBQUksWUFBWTtBQUMxQyxTQUFLLGdCQUFnQixLQUFLLElBQUksWUFBWTtBQUMxQyxTQUFLLGdCQUFnQixLQUFLLElBQUksWUFBWTtBQUMxQyxTQUFLLGdCQUFnQixLQUFLLElBQUksWUFBWTtBQUMxQyxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsUUFBUSxPQUFPLEtBQUssVUFBZ0I7QUFDbEMsU0FBSyxXQUFXO0FBQ2hCLFNBQUssb0JBQW9CLFNBQVMsOEJBQThCLElBQUk7QUFDcEUsUUFBSSxTQUFTLDRCQUE2QixNQUFLLFdBQVc7QUFDMUQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLE1BQU0sV0FBVyxLQUFLLGtCQUFrQixZQUFZLEtBQUssbUJBQXlCO0FBQ2hGLFNBQUssbUJBQW1CLEtBQUssSUFBSSxNQUFNLFFBQVE7QUFDL0MsU0FBSyxvQkFBb0I7QUFDekIsU0FBSyxvQkFBb0I7QUFDekIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLGFBQW1CO0FBQ2pCLFNBQUssV0FBVztBQUNoQixTQUFLLG9CQUFvQjtBQUN6QixTQUFLLG9CQUFvQjtBQUN6QixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxjQUE0QjtBQUNqQyxTQUFLLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxnQkFBZ0IsS0FBSztBQUN2RCxTQUFLLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxnQkFBZ0IsS0FBSztBQUN2RCxTQUFLLGFBQWEsS0FBSyxnQkFBZ0IsSUFBSTtBQUMzQyxTQUFLLGFBQWEsS0FBSyxnQkFBZ0IsSUFBSTtBQUMzQyxVQUFNLFVBQVUsS0FBSyxJQUFJLEtBQUssWUFBWTtBQUMxQyxTQUFLLGdCQUFnQixLQUFLO0FBQVMsU0FBSyxnQkFBZ0IsS0FBSztBQUM3RCxTQUFLLGdCQUFnQixLQUFLO0FBQVMsU0FBSyxnQkFBZ0IsS0FBSztBQUM3RCxRQUFJLEtBQUssb0JBQW9CLEtBQUssQ0FBQyxLQUFLLFVBQVU7QUFDaEQsWUFBTSxXQUFXLEtBQUssYUFBYSwwQkFBNEIsT0FBTTtBQUNyRSxXQUFLLG9CQUFvQixLQUFLLElBQUksR0FBRyxLQUFLLG9CQUFvQixlQUFlLFFBQVE7QUFDckYsVUFBSSxLQUFLLHFCQUFxQixFQUFHLE1BQUssV0FBVztBQUFBLElBQ25EO0FBQ0EsUUFBSSxLQUFLLG9CQUFvQixFQUFHLE1BQUssb0JBQW9CLEtBQUssSUFBSSxHQUFHLEtBQUssb0JBQW9CLGVBQWUsS0FBSyxnQkFBZ0I7QUFDbEksV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLGVBQWUsWUFBd0MsQ0FBQyxHQUFzQjtBQUM1RSxVQUFNLE9BQU8sS0FBSyxhQUFhLDBCQUE0QixJQUFJLEtBQUssb0JBQW9CO0FBQ3hGLFdBQU87QUFBQSxNQUNMLE9BQU8sS0FBSztBQUFBLE1BQU8sR0FBRyxLQUFLO0FBQUEsTUFBRyxHQUFHLEtBQUs7QUFBQSxNQUFHLEdBQUcsS0FBSztBQUFBLE1BQUcsT0FBTyxLQUFLO0FBQUEsTUFDaEUsV0FBVyxLQUFLO0FBQUEsTUFBVyxXQUFXLEtBQUs7QUFBQSxNQUFXLFdBQVcsS0FBSztBQUFBLE1BQ3RFLE9BQU8sS0FBSztBQUFBLE1BQU8sT0FBTyxLQUFLO0FBQUEsTUFBTyxTQUFTLEtBQUssV0FBVyxJQUFJO0FBQUEsTUFDbkUsa0JBQWtCLEtBQUs7QUFBQSxNQUN2QixtQkFBbUIsS0FBSztBQUFBLE1BQ3hCLGlCQUFpQixLQUFLLGFBQWEsMEJBQTRCLEtBQUssb0JBQW9CO0FBQUEsTUFDeEYsa0JBQWtCLEtBQUs7QUFBQSxNQUN2QixHQUFHO0FBQUEsSUFDTDtBQUFBLEVBQ0Y7QUFDRjs7O0FDMUhBLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0scUJBQXFCO0FBRTNCLElBQU1DO0FBQUE7QUFBQSxFQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUwxQixTQUFTLEtBQUtDLE1BQStDO0FBQzNELFFBQU0sUUFBUUEsS0FBSSxRQUFRLEtBQUssRUFBRTtBQUNqQyxNQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBSyxFQUFHLE9BQU0sSUFBSSxNQUFNLDJDQUEyQ0EsSUFBRyxJQUFJO0FBQ3JHLFNBQU87QUFBQSxJQUNMLE9BQU8sU0FBUyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJO0FBQUEs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TSxFQUFDLE1BQUssVUFBVSxPQUFNLFVBQVMsY0FBYyxPQUFnQyxRQUFPLENBQUMsWUFBWSxPQUFNLFlBQVcsVUFBVSxPQUFNLFVBQVMsQ0FBQyxVQUFVLE1BQUssSUFBRTtBQUNsUCxVQUFNLG1CQUFpQixDQUFDLGlCQUFpQixRQUFNO0FBQUksVUFBTSxvQkFBa0IsQ0FBQyxrQkFBa0IsUUFBTTtBQUFJLFVBQU0sdUJBQXFCLGNBQWM7QUFBRSxvQkFBZ0IsUUFBTTtBQUN6SyxVQUFNLGNBQVksTUFBTSxNQUFNO0FBQUssWUFBUSxjQUFZLEdBQUcsTUFBTSxNQUFNLE9BQU8sWUFBWSxDQUFDLFNBQU0sTUFBTSxNQUFNLElBQUksa0JBQWUsb0JBQW9CLGtCQUFlLE1BQU0saUJBQWlCLFFBQVEsQ0FBQyxDQUFDLG1CQUFnQixNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNVAsYUFBUyxPQUFPLEVBQUMsUUFBTyxDQUFDLEVBQUMsR0FBRyxNQUFNLGVBQWUsRUFBQyxlQUFjLENBQUMsVUFBVSxRQUFNLEtBQUksaUJBQWdCLENBQUMsVUFBVSxRQUFNLEtBQUksZ0JBQWUsQ0FBQyxTQUFTLFFBQU0sS0FBSSxhQUFZLENBQUMsTUFBTSxRQUFNLEtBQUksYUFBWSxDQUFDLE1BQU0sUUFBTSxJQUFHLENBQUMsR0FBRSxHQUFFLE1BQUksTUFBTSxJQUFFLEtBQUksR0FBRSxNQUFJLE1BQU0sSUFBRSxLQUFJLE1BQUssTUFBTSxRQUFNLElBQUcsQ0FBQyxFQUFDLEdBQUUsTUFBSSxHQUFJO0FBQUUsWUFBTSxzQkFBc0IsTUFBTTtBQUFBLEVBQUM7QUFBRSxVQUFNLHNCQUFzQixNQUFNO0FBQ3ZXLG1CQUFpQixZQUFXLE1BQUk7QUFBQyx5QkFBcUIsS0FBSztBQUFFLGFBQVMsUUFBUTtBQUFBLEVBQUMsR0FBRSxFQUFDLE1BQUssS0FBSSxDQUFDO0FBQUUsT0FBSyxNQUFNO0FBQUUsT0FBSyxPQUFPLHFDQUFvQyxJQUFJO0FBQUUsT0FBSyxPQUFPLDhCQUE2QixJQUFJO0FBQzlNLFNBQU8sT0FBTTtBQUFDLFFBQU0sVUFBUSxpQkFBaUIsUUFBTSxNQUFNLFVBQVEsT0FBTyxLQUFLO0FBQUUsUUFBTSxTQUFPO0FBQU0sUUFBTSxjQUFZO0FBQVEsT0FBSyxPQUFPLHFDQUFvQyxPQUFNLE9BQU87QUFBQzsiLAogICJuYW1lcyI6IFsiZGVwdGgiLCAic3BlZWQiLCAicmFkaWFucyIsICJjYW52YXMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgInNoYWRlciIsICJoZXgiLCAiY2FudmFzIiwgImhleCIsICJzaGFkZXIiLCAiY2FudmFzIiwgInNoYWRlciIsICJoZXgiLCAiY2FudmFzIiwgInN0b3JhZ2UiXQp9Cg==

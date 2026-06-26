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
  const move = (point, z) => {
    const p = rotate([point[0] * scale, -point[1] * scale, z * scale], rx, ry, rz);
    return [p[0] + (instance.x ?? 0), p[1] + (instance.y ?? 0), p[2] + (instance.z ?? 0)];
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
    [a, b, c].forEach((p) => output.push({ p, n, color, glow: (instance.glow ?? 1) * (instance.opacity ?? 1), effect }));
  };
  const front = shape.points.map((point) => move(point, depth / 2));
  const back = shape.points.map((point) => move(point, -depth / 2));
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
  const move = (point, z) => {
    const p = rotate([point[0] * scale, -point[1] * scale, z * scale], rx, ry, rz);
    return [p[0] + (instance.x ?? 0), p[1] + (instance.y ?? 0), p[2] + (instance.z ?? 0)];
  };
  const explode = (a, b, index) => {
    const progress = instance.explodeProgress ?? 0;
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
    const push = (p, along, across) => output.push({ p, n: [along, across, phase], color, glow: (instance.glow ?? 1) * opacity * (instance.opacity ?? 1) * (1 + Math.sin((instance.explodeProgress ?? 0) * Math.PI) * (instance.explodeMagnitude ?? 0.55) * 2.2) * (1 - (instance.explodeProgress ?? 0) * 0.7), effect });
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
  rotationX = 0;
  rotationY = 0;
  rotationZ = 0;
  disposed = false;
  #disposalProgress = 0;
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
  regenerate() {
    this.disposed = false;
    this.#disposalProgress = 0;
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
  if (item.shape > 6.5 && item.shape < 7.5) {
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
function rgba(hex2) {
  const value = hex2.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) throw new Error(`Expected six-digit hex color, received "${hex2}".`);
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

// projects/NeonFactory/src/top-down-scene.ts
var NeonTopDownSceneRenderer = class _NeonTopDownSceneRenderer {
  canvas;
  device;
  #primitives;
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
    const aspect = this.#width / this.#height;
    this.#shapes.render((scene.shapes ?? []).map((shape) => ({
      ...shape,
      x: (shape.x / this.#width - 0.5) * aspect * 2.5,
      y: (0.5 - shape.y / this.#height) * 2.5,
      scale: shape.size / this.#height * 2.5
    })), true, target);
  }
  destroy() {
    this.#shapes.destroy(false);
    this.device.destroy();
  }
};

// projects/NeonFactory/src/lane-runner-scenes.ts
var laneRunnerSceneIds = ["neonHall"];
var sceneNames = {
  neonHall: "Neon Hall"
};
var hallVanishingY = 0.46;
var hallBottomWidth = 0.92;
var hallHorizonWidth = 0.08;
var hallFloorColor = "#05101f";
var hallDeepBlue = "#12356a";
var hallMutedBlue = "#1b4c8d";
var hallMutedCyan = "#2ac4dc";
var hallMutedViolet = "#453079";
var hallAccentPink = "#a7357e";
var hallEnergySpeed = 17e-4;
function getLaneRunnerSceneName(sceneId) {
  return sceneNames[sceneId];
}
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
  const vp = { x: width * 0.5, y: height * hallVanishingY };
  const bottomY = height * 0.985;
  const horizonY = height * hallVanishingY;
  const bottomHalf = width * hallBottomWidth * 0.5;
  const horizonHalf = width * hallHorizonWidth * 0.5;
  return {
    width,
    height,
    vp,
    leftBottom: { x: width * 0.5 - bottomHalf, y: bottomY },
    rightBottom: { x: width * 0.5 + bottomHalf, y: bottomY },
    leftHorizon: { x: vp.x - horizonHalf, y: horizonY },
    rightHorizon: { x: vp.x + horizonHalf, y: horizonY }
  };
}
function addHallBase(items, width, height, timeMs) {
  const pulse = 0.55 + Math.sin(timeMs * hallEnergySpeed) * 0.2;
  items.push({ x: width / 2, y: height * 0.76, width: width * 0.5, height: height * 0.43, color: hallFloorColor, secondaryColor: "#02050d", glow: 0.05, intensity: 0.23, shape: "bolt" });
  items.push({ x: width / 2, y: height * hallVanishingY, width: width * 0.34, height: 1.4, color: hallDeepBlue, secondaryColor: hallMutedCyan, glow: 0.3, intensity: 0.18 + pulse * 0.07, shape: "bolt" });
  items.push({ x: width / 2, y: height * 0.49, width: width * 0.18, height: 1.2, color: hallAccentPink, secondaryColor: hallMutedViolet, glow: 0.24, intensity: 0.08, shape: "bolt" });
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

// projects/NeonFactory/src/projectile.ts
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
    const items = [{
      x: this.x,
      y: this.y - this.velocityY / Math.abs(this.velocityY || 1) * this.trailLength * 0.5,
      width: this.trailWidth,
      height: this.trailLength,
      color: this.trailColor,
      secondaryColor: this.color,
      glow: this.glow * 0.6,
      intensity: this.intensity * 0.72,
      shape: "bolt"
    }];
    const width = slug ? this.radius * 1.5 : needle ? this.radius * 0.65 : this.radius;
    const height = slug ? this.length * 0.75 : this.length;
    const add = (offset) => items.push({ x: this.x + offset, y: this.y, width, height, color: this.color, secondaryColor: this.coreColor, glow: this.glow, intensity: this.intensity, shape: needle ? "circle" : "bolt" });
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
  globalSpeedMultiplier: 2
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
function projectHelicopterScene(primitives, shapes, settings, viewport) {
  const centerX = viewport.width / 2;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const minDepth = 20;
  const projectPoint = (x, y) => {
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
  const projectedPrimitives = primitives.map((primitive) => {
    const point = projectPoint(primitive.x, primitive.y);
    const width = primitive.width * point.scale;
    const height = (primitive.height ?? primitive.width) * point.scale;
    return {
      ...primitive,
      x: point.x,
      y: point.y,
      width,
      height
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
  return { primitives: projectedPrimitives, shapes: projectedShapes };
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
var sceneLab = document.querySelector("#scene-lab");
var sceneSelect = document.querySelector("#scene-select");
var cameraOutputText = document.querySelector("#camera-output-text");
var urlOptions = window.JustTheGamesPlease?.urlOptions;
var developerMode = urlOptions?.isEnabled("dev") ?? false;
developerTools.hidden = !developerMode;
cameraLab.hidden = !(developerMode && (urlOptions?.isEnabled("cameracontrols") ?? false));
sceneLab.hidden = !developerMode;
var defaultTrack = Object.values(trackFamily.members)[0];
applyPortraitStage(gameElement, defaultTrack.viewport);
var sceneOverride = null;
if (developerMode) {
  const sceneFromUrl = urlOptions?.get?.("scene");
  if (sceneFromUrl && isLaneRunnerSceneId(sceneFromUrl)) sceneOverride = sceneFromUrl;
}
sceneSelect.innerHTML = laneRunnerSceneIds.map((sceneId) => `<option value="${sceneId}">${getLaneRunnerSceneName(sceneId)}</option>`).join("");
sceneSelect.value = sceneOverride ?? defaultTrack.environment.sceneId;
sceneSelect.addEventListener("change", () => {
  sceneOverride = isLaneRunnerSceneId(sceneSelect.value) ? sceneSelect.value : null;
});
var cameraSettings = { ...defaultHelicopterCameraSettings };
var bindCameraSlider = (id, key) => {
  const input = document.querySelector(id);
  input.value = String(cameraSettings[key]);
  input.addEventListener("input", () => {
    cameraSettings[key] = Number(input.value);
    cameraOutputText.value = "";
  });
  return input;
};
bindCameraSlider("#camera-height", "height");
bindCameraSlider("#camera-look", "lookAngleDegrees");
bindCameraSlider("#camera-back", "followDistance");
bindCameraSlider("#camera-zoom", "zoom");
bindCameraSlider("#camera-horizon", "horizon");
document.querySelector("#camera-output").addEventListener("click", async () => {
  const output = `camera: height=${cameraSettings.height.toFixed(0)}, lookAngleDegrees=${cameraSettings.lookAngleDegrees.toFixed(0)}, followDistance=${cameraSettings.followDistance.toFixed(0)}, zoom=${cameraSettings.zoom.toFixed(2)}, horizon=${cameraSettings.horizon.toFixed(2)}`;
  cameraOutputText.value = output;
  if (navigator.clipboard) await navigator.clipboard.writeText(output).catch(() => void 0);
});
try {
  const viewport = defaultTrack.viewport;
  const renderer = await NeonTopDownSceneRenderer.create(canvas, viewport.logicalWidth, viewport.logicalHeight);
  let activeTrack = null;
  let lastFrame = performance.now();
  let combatElapsed = 0;
  let combatNow = 0;
  let playerLane = 0;
  let cooldown = 0;
  let entityIdCounter = 0;
  let trackEntities = [];
  let nextTrackEntity = 0;
  let breaches = 0;
  let enemies = [];
  const gunSimulation = new GunSimulation();
  let gunPickups = [];
  let shieldPickups = [];
  let swordPickups = [];
  let multipliers = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let victory = null;
  let failureReason = "";
  const playerActors = [];
  const explodingPlayers = [];
  const activeByFamily = {
    gun: { id: "pulsePistol", level: 1 },
    shield: null,
    sword: null
  };
  const scale = () => 1;
  const laneX = (lane) => canvas.width * (lane === 0 ? 0.32 : 0.68);
  const entityX = (entity) => laneX(entity.side === "left" ? 0 : 1) + (entity.laneIndex - 2) * 15 * scale();
  const playerY = () => canvas.height * 0.82;
  const activeSceneId = () => sceneOverride ?? activeTrack?.environment.sceneId ?? defaultTrack.environment.sceneId;
  const resetToTracks = () => {
    activeTrack = null;
    result.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track. Tap either side to switch lanes; use the joystick to fine aim.";
    runStatus.textContent = "";
    enemies = [];
    gunSimulation.clear();
    gunPickups = [];
    shieldPickups = [];
    swordPickups = [];
    multipliers = [];
    victory = null;
    failureReason = "";
    activeByFamily.shield = null;
    activeByFamily.sword = null;
  };
  const startTrack = (track) => {
    activeTrack = track;
    if (!sceneOverride) sceneSelect.value = track.environment.sceneId;
    lastFrame = performance.now();
    combatElapsed = 0;
    combatNow = 0;
    const allEntities = parseTrackDefinition(track.definition);
    const playerStart = allEntities.find((entity) => entity.id === "player.start");
    const startLane = playerStart?.side === "right" ? 1 : 0;
    playerLane = startLane;
    activeByFamily.gun = { id: track.startingGun, level: track.startingGunLevel };
    activeByFamily.shield = null;
    activeByFamily.sword = null;
    cooldown = 0;
    nextTrackEntity = 0;
    trackEntities = allEntities.filter((entity) => entity.id !== "player.start");
    breaches = 0;
    enemies = [];
    gunSimulation.clear();
    gunPickups = [];
    shieldPickups = [];
    swordPickups = [];
    multipliers = [];
    squad.count = 1;
    playerActors.length = 0;
    playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    explodingPlayers.length = 0;
    squad.aimOffset = 0;
    squad.lane = startLane;
    squad.x = laneX(startLane);
    squad.targetX = laneX(startLane);
    victory = null;
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap a side to switch lanes. Small joystick motion aims; full motion crosses lanes.";
  };
  trackList.innerHTML = Object.entries(trackFamily.members).map(([id, track]) => `
    <button class="track-card" data-track="${id}">
      <strong>${track.label}</strong><span>${track.description}</span><b>${track.durationSeconds}s \u2192</b>
    </button>`).join("");
  trackList.querySelectorAll("[data-track]").forEach((button) => {
    button.addEventListener("click", () => startTrack(trackFamily.members[button.dataset.track]));
  });
  document.querySelector("#back-to-tracks").addEventListener("click", resetToTracks);
  bindSquadInput(document.querySelector("#game"), "#joystick", {
    lane: () => squad.lane,
    setLane: (lane) => {
      if (!activeTrack) return;
      squad.setLane(lane, laneX, combatNow);
      playerLane = lane;
      aimControl.laneSelected();
    },
    setAim: (value) => {
      if (!activeTrack) return;
      squad.setAim(value, canvas.width * 0.22, laneX);
      aimControl.aimChanged();
    },
    releaseAim: () => {
      aimControl.aimReleased();
    }
  });
  const fire = () => {
    const { id: gunId, level: gunLevel } = activeByFamily.gun;
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find((item) => item.level === gunLevel) ?? gun.levels[0];
    const points = squad.points(playerY(), scale()).map((point) => ({ x: point.x, y: playerY() - 20 * scale() }));
    gunSimulation.fire(gun, tuning, playerLane, points, combatNow, scale());
    cooldown += 1 / tuning.fireRatePerSecond;
    window.gameAudio?.playRotated("Primary", 3);
  };
  const finish = (won) => {
    if (!activeTrack) return;
    result.hidden = false;
    resultTitle.textContent = won ? "FLAWLESS RUN" : "TRACK FAILED";
    resultDetail.textContent = won ? "No enemy touched or escaped past you." : failureReason || `${breaches} enemy${breaches === 1 ? "" : "ies"} breached the defense.`;
    if (won) {
      victory = new NeonVictoryExperience({
        centerX: canvas.width / 2,
        centerY: canvas.height * 0.38,
        width: canvas.width,
        height: canvas.height,
        particleCount: 120
      });
      window.gameAudio?.play("PuzzleComplete");
    } else {
      window.gameAudio?.play("GameOver");
    }
    activeTrack = null;
  };
  const syncPlayerActors = () => {
    while (playerActors.length < squad.count) playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    if (playerActors.length > squad.count) playerActors.length = squad.count;
  };
  const update = (frameNow) => {
    const rawDelta = Math.min(0.05, (frameNow - lastFrame) / 1e3);
    lastFrame = frameNow;
    const delta = rawDelta * combatTuning.globalSpeedMultiplier;
    combatElapsed += delta;
    combatNow = combatElapsed * 1e3;
    for (const item of [...explodingPlayers]) {
      item.actor.update(delta);
      if (item.actor.disposed) explodingPlayers.splice(explodingPlayers.indexOf(item), 1);
    }
    if (!activeTrack) return;
    const elapsed = combatElapsed;
    const { id: gunId } = activeByFamily.gun;
    const shieldDef = activeByFamily.shield ? shieldFamily.members[activeByFamily.shield.shieldId] : null;
    const swordDef = activeByFamily.sword ? swordFamily.members[activeByFamily.sword.swordId] : null;
    runStatus.textContent = `${gunFamily.members[gunId].label}${shieldDef ? ` \xB7 ${shieldDef.label}` : ""}${swordDef ? ` \xB7 ${swordDef.label}` : ""} \xB7 ${Math.max(0, activeTrack.durationSeconds - elapsed).toFixed(1)}s`;
    while (nextTrackEntity < trackEntities.length && trackEntities[nextTrackEntity].distanceFromPlayer <= elapsed) {
      const entity = trackEntities[nextTrackEntity++];
      const lane = entity.side === "left" ? 0 : 1;
      if (entity.id === "enemy.basic") {
        enemies.push({
          id: ++entityIdCounter,
          lane,
          x: entityX(entity),
          y: 110 * scale(),
          health: orbFamily.members.basicOrb.health * activeTrack.definition.balance.enemyHp,
          speedMultiplier: entity.speedMultiplier,
          rowId: entity.rowIndex,
          actor: new NeonShapeActor({ shape: swarmShapes.enemy }),
          dying: false
        });
      } else if (entity.id.startsWith("pickup.weapon.gun.")) {
        const candidate = entity.id.slice("pickup.weapon.gun.".length);
        if (!(candidate in gunFamily.members)) throw new Error(`Track uses unknown gun id "${entity.id}".`);
        gunPickups.push({ lane, x: entityX(entity), y: 120 * scale(), gunId: candidate, level: 1, speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }) });
      } else if (entity.id.startsWith("pickup.weapon.shield.")) {
        const candidate = entity.id.slice("pickup.weapon.shield.".length);
        if (!(candidate in shieldFamily.members)) throw new Error(`Track uses unknown shield id "${entity.id}".`);
        shieldPickups.push({ lane, x: entityX(entity), y: 120 * scale(), shieldId: candidate, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.sword.")) {
        const candidate = entity.id.slice("pickup.weapon.sword.".length);
        if (!(candidate in swordFamily.members)) throw new Error(`Track uses unknown sword id "${entity.id}".`);
        swordPickups.push({ lane, x: entityX(entity), y: 120 * scale(), swordId: candidate, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        multipliers.push({ lane, x: entityX(entity), y: 125 * scale(), multiplierId: "squadPlusOne", speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.multiplier }) });
      } else {
        throw new Error(`Track entity id "${entity.id}" is not supported by the lane runner.`);
      }
    }
    if (!aimControl.manual) {
      const laneEnemies = enemies.filter((enemy) => enemy.lane === squad.lane && !enemy.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * 0.22, laneX);
    }
    squad.update(delta);
    syncPlayerActors();
    gameElement.dataset.squadLane = String(squad.lane);
    gameElement.dataset.squadAim = squad.aimOffset.toFixed(2);
    cooldown -= delta;
    if (cooldown <= 0) fire();
    if (gunSimulation.updateFiring(combatNow) > 0) window.gameAudio?.playRotated("Primary", 3);
    gunSimulation.updateProjectiles(delta, combatNow, enemies.map((enemy) => Object.assign(enemy, {
      radius: orbFamily.members.basicOrb.radius * scale()
    })), { top: -40 * scale(), left: -40, right: canvas.width + 40 }, (shot, enemy) => {
      const gameEnemy = enemy;
      gameEnemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: (shot.damage + shot.knockback * 0.06) / orbFamily.members.basicOrb.impactResistance });
      if (gameEnemy.health <= 0) {
        gameEnemy.dying = true;
        gameEnemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
        gameEnemy.actor.dispose("explode" /* Explode */);
        window.gameAudio?.play("EnemyDestroyed");
      } else window.gameAudio?.play("Hit");
    });
    const px = squad.x;
    const py = playerY();
    if (activeByFamily.shield && shieldDef) {
      const shieldState = activeByFamily.shield;
      const shieldThreats = queryNearbyThreats(enemies, {
        origin: { x: px, y: py },
        lane: playerLane,
        range: shieldDef.radius * scale(),
        includeAdjacentLanes: false,
        purpose: "shield"
      });
      const shieldResult = tickShield(shieldState, shieldDef, shieldThreats, px, py, combatNow, delta);
      if (shieldResult.pushEnemyIds.length > 0) {
        for (const enemy of enemies) {
          if (shieldResult.pushEnemyIds.includes(enemy.id ?? 0)) {
            const dx = enemy.x - px;
            const dy = enemy.y - py;
            const dist = Math.hypot(dx, dy) || 1;
            enemy.x += dx / dist * shieldResult.pushDistance * scale();
            enemy.y += dy / dist * shieldResult.pushDistance * scale();
          }
        }
        window.gameAudio?.play("Hit");
      }
      if (shieldResult.contactDamageEnemyIds.length > 0) {
        for (const enemy of [...enemies]) {
          if (enemy.dying) continue;
          const isContact = shieldResult.contactDamageEnemyIds.includes(enemy.id ?? 0);
          if (!isContact) continue;
          enemy.health -= shieldResult.contactDamageAmount * delta;
          if (enemy.health <= 0) {
            enemy.dying = true;
            enemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
            enemy.actor.dispose("explode" /* Explode */);
            window.gameAudio?.play("EnemyDestroyed");
          }
        }
      }
    }
    if (activeByFamily.sword && swordDef) {
      const swordState = activeByFamily.sword;
      const swordThreats = queryNearbyThreats(enemies, {
        origin: { x: px, y: py },
        lane: playerLane,
        range: swordDef.range * scale(),
        includeAdjacentLanes: swordDef.targetingMode === "nearestInEitherLane",
        maxTargets: swordDef.maxTargets,
        purpose: "sword"
      });
      const swordResult = tickSword(
        swordState,
        swordDef,
        swordThreats,
        px,
        py,
        combatNow,
        delta,
        neonPalette[swordDef.color]
      );
      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        window.gameAudio?.play("Hit");
        for (const enemy of [...enemies]) {
          if (enemy.dying) continue;
          if (!swordResult.hitEnemyIds.includes(enemy.id ?? 0)) continue;
          enemy.health -= swordResult.damage;
          enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: swordResult.damage / orbFamily.members.basicOrb.impactResistance });
          if (enemy.health <= 0) {
            enemy.dying = true;
            enemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
            enemy.actor.dispose("explode" /* Explode */);
            window.gameAudio?.play("EnemyDestroyed");
          }
        }
      }
    }
    const slowEnemyIds = /* @__PURE__ */ new Set();
    for (const enemy of [...enemies]) {
      enemy.actor.setVelocity(0, 0).update(delta);
      const effective = slowEnemyIds.has(enemy.id ?? 0) ? enemy.speedMultiplier * (shieldDef?.slowMultiplier ?? 1) : enemy.speedMultiplier;
      enemy.y += orbFamily.members.basicOrb.speed * effective * scale() * delta - enemy.actor.y * canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) {
        enemies.splice(enemies.indexOf(enemy), 1);
        continue;
      }
      if (enemy.dying) continue;
      if (activeByFamily.shield && shieldDef) {
        const shieldContact = resolveShieldContact(activeByFamily.shield, shieldDef, Object.assign(enemy, {
          radius: orbFamily.members.basicOrb.radius * scale()
        }), px, py, combatNow, scale());
        if (shieldContact.absorbed) {
          if (shieldContact.enemyDestroyed) {
            enemy.dying = true;
            enemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
            enemy.actor.dispose("explode" /* Explode */);
            window.gameAudio?.play("EnemyDestroyed");
          } else {
            enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: shieldContact.damageAbsorbed / orbFamily.members.basicOrb.impactResistance });
            window.gameAudio?.play("Hit");
          }
          continue;
        }
      }
      const points = squad.points(playerY(), scale());
      const hitIndex = points.findIndex((point) => Math.hypot(point.x - enemy.x, point.y - enemy.y) <= orbFamily.members.basicOrb.radius * 3.2);
      if (hitIndex >= 0) {
        const point = points[hitIndex];
        const actor = playerActors[hitIndex] ?? new NeonShapeActor({ shape: swarmShapes.player });
        actor.explodeMagnitude = 0.55;
        actor.dispose("explode" /* Explode */);
        explodingPlayers.push({ actor, x: point.x, y: point.y });
        playerActors.splice(hitIndex, 1);
        squad.remove();
        enemies.splice(enemies.indexOf(enemy), 1);
        window.gameAudio?.play("EnemyDestroyed");
        if (squad.count === 0) {
          failureReason = "The entire squad was destroyed on contact.";
          finish(false);
          return;
        }
        continue;
      }
      if (enemy.y >= playerY()) {
        breaches++;
        enemies.splice(enemies.indexOf(enemy), 1);
        window.gameAudio?.play("EnemyEscaped");
        failureReason = "An enemy passed the defense line.";
        finish(false);
        return;
      }
    }
    for (const pickup of [...gunPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        activeByFamily.gun = { id: pickup.gunId, level: 1 };
        cooldown = 0;
        gunPickups.splice(gunPickups.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) gunPickups.splice(gunPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...shieldPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        const def = shieldFamily.members[pickup.shieldId];
        activeByFamily.shield = new ShieldState(pickup.shieldId, def.maxCharges);
        shieldPickups.splice(shieldPickups.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) shieldPickups.splice(shieldPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...swordPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        activeByFamily.sword = new SwordState(pickup.swordId);
        swordPickups.splice(swordPickups.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) swordPickups.splice(swordPickups.indexOf(pickup), 1);
    }
    for (const pickup of [...multipliers]) {
      pickup.actor.update(delta);
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        syncPlayerActors();
        multipliers.splice(multipliers.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }
    if (elapsed >= activeTrack.durationSeconds && enemies.length === 0) finish(breaches === 0);
  };
  const environment = (track, now) => {
    const scene = createLaneRunnerScene({
      sceneId: activeSceneId(),
      width: canvas.width,
      height: canvas.height,
      timeMs: now
    });
    return [...scene.primitives ?? []];
  };
  const draw = (now) => {
    const primitives = activeTrack ? environment(activeTrack, now) : [];
    const s = scale();
    if (activeTrack) {
      for (const point of squad.points(playerY(), s)) {
        const smear = Math.min(22 * s, Math.abs(squad.targetX - squad.x) * 0.45);
        if (smear > 2) primitives.push({ x: point.x - Math.sign(squad.targetX - squad.x) * smear * 0.5, y: point.y, width: smear, height: 2.2 * s, color: neonPalette.deepBlue, secondaryColor: neonPalette.cyan, glow: 0.45, intensity: 0.5, shape: "bolt" });
      }
      primitives.push(...gunSimulation.projectilePrimitives());
    }
    if (victory) primitives.push(...victory.primitives(now));
    const shapeInstances = [];
    if (activeByFamily.shield) {
      const liveShield = activeByFamily.shield;
      const liveDef = shieldFamily.members[liveShield.shieldId];
      const scene = shieldVisuals({
        definition: liveDef,
        strength: liveShield.charges,
        initialStrength: liveDef.maxCharges,
        x: squad.x,
        y: playerY(),
        now,
        scale: s,
        hitProgress: liveShield.hitFlashProgress
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }
    if (activeByFamily.sword) {
      const liveSword = activeByFamily.sword;
      const liveDef = swordFamily.members[liveSword.swordId];
      const scene = swordVisuals({
        definition: liveDef,
        slash: liveSword.activeSlash,
        x: squad.x,
        y: playerY(),
        scale: s,
        visible: true
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }
    for (const pickup of shieldPickups) {
      const definition = shieldFamily.members[pickup.shieldId];
      shapeInstances.push(shieldPickupVisual({
        x: laneX(pickup.lane),
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s
      }));
    }
    for (const pickup of swordPickups) {
      const definition = swordFamily.members[pickup.swordId];
      shapeInstances.push(swordPickupVisual({
        x: laneX(pickup.lane),
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s
      }));
    }
    const playerSize = 14;
    for (const [index, point] of squad.points(playerY(), s).entries()) {
      const actor = playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, { rotationX: Math.sin(now / 650) * 0.12 }));
    }
    for (const item of explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));
    for (const enemy of enemies) shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, 18, { rotationY: Math.sin(now / 700 + enemy.rowId) * 0.18 }));
    for (const pickup of gunPickups) {
      const gun = gunFamily.members[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 15));
    }
    for (const pickup of multipliers) {
      const spec = multiplierFamily.members[pickup.multiplierId];
      pickup.actor.label = shapeLabel(`${spec.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[spec.pickupColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 16));
    }
    const projected = projectHelicopterScene(primitives, shapeInstances, cameraSettings, {
      width: canvas.width,
      height: canvas.height,
      playerY: playerY()
    });
    renderer.render(projected, now / 1e3);
  };
  const frame = (now) => {
    update(now);
    draw(combatNow);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdG9wLWRvd24tc2NlbmUudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2xhbmUtcnVubmVyLXNjZW5lcy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvcHJvamVjdGlsZS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdmljdG9yeS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Db21iYXRUdW5pbmcudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vRmFtaWx5RGVmaW5pdGlvbi50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9HdW5GYW1pbHkudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vT3JiRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrRGVmaW5pdGlvbi50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2sxLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazIudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s0LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2lucHV0LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc3F1YWQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9hdXRvQWltLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvdmlld3BvcnQudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaGFwZVZpc3VhbHMudHMiLCAiLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc2hpZWxkRXZhbHVhdG9yLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L3N3b3JkRXZhbHVhdG9yLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5LnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZmFtaWx5VmlzdWFscy50cyIsICIuLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9ndW5TaW11bGF0aW9uLnRzIiwgIi4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24sIE5lb25Qb2ludCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlTGFiZWxQb3NpdGlvbiA9IFwiYWJvdmVcIiB8IFwiYmVsb3dcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlTGFiZWwge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogTmVvblNoYXBlTGFiZWxQb3NpdGlvbjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICBjb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgcm90YXRpb25ZPzogbnVtYmVyO1xuICByb3RhdGlvblo/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIHNoaWVsZGVkPzogYm9vbGVhbjtcbiAgbGluZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgZW5lcmd5SW50ZW5zaXR5PzogbnVtYmVyO1xuICBlbmVyZ3lDb3ZlcmFnZT86IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ/OiBudW1iZXI7XG4gIGVuZXJneUJsZWVkPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBleHBsb2RlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbnR5cGUgVjMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG50eXBlIFZlcnRleCA9IHtcbiAgcDogVjM7IG46IFYzOyBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdOyBnbG93OiBudW1iZXI7XG4gIGVmZmVjdDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gMTQ7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgU2NlbmUgeyBhc3BlY3Q6IGYzMiwgY2FtZXJhOiBmMzIsIHRpbWU6IGYzMiwgcGFkZGluZzogZjMyIH1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuc3RydWN0IElucHV0IHtcbiAgQGxvY2F0aW9uKDApIHBvc2l0aW9uOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigzKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBlZmZlY3Q6IHZlYzRmLFxufVxuc3RydWN0IE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgZWZmZWN0OiB2ZWM0Zixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihpbnB1dDogSW5wdXQpIC0+IE91dHB1dCB7XG4gIGxldCBkZXB0aCA9IHNjZW5lLmNhbWVyYSAtIGlucHV0LnBvc2l0aW9uLno7XG4gIHZhciBvdXRwdXQ6IE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYoaW5wdXQucG9zaXRpb24ueCAqIDQgLyBzY2VuZS5hc3BlY3QsIGlucHV0LnBvc2l0aW9uLnkgKiA0LCBkZXB0aCAqIC4wNDUsIGRlcHRoKTtcbiAgb3V0cHV0Lm5vcm1hbCA9IGlucHV0Lm5vcm1hbDtcbiAgb3V0cHV0LmNvbG9yID0gaW5wdXQuY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaW5wdXQuZ2xvdztcbiAgb3V0cHV0LmVmZmVjdCA9IGlucHV0LmVmZmVjdDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZShpbnB1dC5ub3JtYWwpO1xuICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLS40NSwgLS43LCAxKSk7XG4gIGxldCBkaWZmdXNlID0gLjE4ICsgbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCkgKiAuODI7XG4gIGxldCByaW0gPSBwb3coMSAtIGFicyhub3JtYWwueiksIDIuMik7XG4gIGxldCBzaWRlID0gMSAtIGFicyhub3JtYWwueik7XG4gIGxldCByYXJlU3VyZ2UgPSBwb3cobWF4KC4wLCBzaW4oc2NlbmUudGltZSAqIGlucHV0LmVmZmVjdC56ICogLjgyICsgaW5wdXQuY29sb3IuciAqIDcuMCkpLCAyMi4wKVxuICAgICogaW5wdXQuZWZmZWN0LnggKiBpbnB1dC5lZmZlY3QueSAqIGlucHV0LmVmZmVjdC53O1xuICBsZXQgZW5lcmd5ID0gaW5wdXQuY29sb3IgKiAoZGlmZnVzZSAqIC4xMiArIHJpbSAqIGlucHV0Lmdsb3cgKiAuMzYgKyBzaWRlICogLjA4ICsgcmFyZVN1cmdlICogLjcpO1xuICByZXR1cm4gdmVjNGYoZW5lcmd5ICsgdmVjM2YocmFyZVN1cmdlICogLjE4KSwgLjEyICsgc2lkZSAqIC4xMiArIHJhcmVTdXJnZSAqIC4yOCk7XG59XG5AZnJhZ21lbnQgZm4gbGluZUZyYWdtZW50KGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBhbG9uZyA9IGlucHV0Lm5vcm1hbC54O1xuICBsZXQgYWNyb3NzID0gYWJzKGlucHV0Lm5vcm1hbC55KTtcbiAgbGV0IHBoYXNlID0gaW5wdXQubm9ybWFsLno7XG4gIGxldCBpbnRlbnNpdHkgPSBpbnB1dC5lZmZlY3QueDtcbiAgbGV0IGNvdmVyYWdlID0gaW5wdXQuZWZmZWN0Lnk7XG4gIGxldCBzcGVlZCA9IGlucHV0LmVmZmVjdC56O1xuICBsZXQgYmxlZWQgPSBpbnB1dC5lZmZlY3QudztcbiAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDMxLjAgLSBzY2VuZS50aW1lICogc3BlZWQgKiA1LjQgKyBwaGFzZSkpLCAxMC4wKTtcbiAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDEzLjAgKyBzY2VuZS50aW1lICogc3BlZWQgKiAzLjEgKyBwaGFzZSAqIDIuNykpLCAxOC4wKTtcbiAgbGV0IG5vaXNlID0gc2luKGFsb25nICogNzEuMCArIHBoYXNlICogOC4zKSAqIC41ICsgLjU7XG4gIGxldCB0aHJlc2hvbGQgPSAxLjAgLSBjb3ZlcmFnZTtcbiAgbGV0IGVsZWN0cmljaXR5ID0gc21vb3Roc3RlcCh0aHJlc2hvbGQsIHRocmVzaG9sZCArIC4xOCwgcHVsc2VBICogLjY1ICsgcHVsc2VCICogLjU1ICsgbm9pc2UgKiAuMTgpO1xuICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoLjA2LCAuMjgsIGFjcm9zcyk7XG4gIGxldCBoYWxvID0gMS4wIC0gc21vb3Roc3RlcCguMTIsIDEuMCwgYWNyb3NzKTtcbiAgbGV0IHN1cmdlID0gZWxlY3RyaWNpdHkgKiBpbnRlbnNpdHk7XG4gIGxldCBwdWxzZSA9IC43OCArIHNpbihzY2VuZS50aW1lICogc3BlZWQgKiAyLjEgKyBwaGFzZSkgKiAuMTMgKyBlbGVjdHJpY2l0eSAqIC4yNDtcbiAgbGV0IGNsb3VkID0gaGFsbyAqICguMTMgKyBzdXJnZSAqIC41Mik7XG4gIGxldCBob3QgPSBpbnB1dC5jb2xvciAqIChwdWxzZSArIGNsb3VkICogMi4xKSAqIGlucHV0Lmdsb3cgKyB2ZWMzZihjb3JlICogc3VyZ2UgKiAxLjM1KTtcbiAgbGV0IGFscGhhID0gKGNvcmUgKiAoLjcyICsgcHVsc2UgKiAuMikgKyBjbG91ZCArICgxLjAgLSBhY3Jvc3MpICogYmxlZWQgKiBlbGVjdHJpY2l0eSAqIC4yNCkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGUsIC1wb2ludFsxXSAqIHNjYWxlLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCldO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGNvbnN0IGFkZCA9IChhOiBWMywgYjogVjMsIGM6IFYzLCBub3JtYWw/OiBWMykgPT4ge1xuICAgIGNvbnN0IG4gPSBub3JtYWwgPz8gbm9ybWFsaXplKGNyb3NzKHN1YihiLCBhKSwgc3ViKGMsIGEpKSk7XG4gICAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICAgIF07XG4gICAgW2EsYixjXS5mb3JFYWNoKHAgPT4gb3V0cHV0LnB1c2goeyBwLCBuLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSwgZWZmZWN0IH0pKTtcbiAgfTtcbiAgY29uc3QgZnJvbnQgPSBzaGFwZS5wb2ludHMubWFwKHBvaW50ID0+IG1vdmUocG9pbnQsIGRlcHRoIC8gMikpO1xuICBjb25zdCBiYWNrID0gc2hhcGUucG9pbnRzLm1hcChwb2ludCA9PiBtb3ZlKHBvaW50LCAtZGVwdGggLyAyKSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnQubGVuZ3RoIC0gMTsgaSsrKSBhZGQoZnJvbnRbMF0sIGZyb250W2ldLCBmcm9udFtpICsgMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGJhY2subGVuZ3RoIC0gMTsgaSsrKSBhZGQoYmFja1swXSwgYmFja1tpICsgMV0sIGJhY2tbaV0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSAoaSArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aDtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbaV0sIGJhY2tbbmV4dF0pO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tuZXh0XSwgZnJvbnRbbmV4dF0pO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gZWRnZU1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlcik6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlLCAtcG9pbnRbMV0gKiBzY2FsZSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCksIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApXTtcbiAgfTtcbiAgY29uc3QgZXhwbG9kZSA9IChhOiBWMywgYjogVjMsIGluZGV4OiBudW1iZXIpOiBbVjMsIFYzXSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMDtcbiAgICBpZiAoIXByb2dyZXNzKSByZXR1cm4gW2EsIGJdO1xuICAgIGNvbnN0IG14ID0gKGFbMF0gKyBiWzBdKSAvIDIgLSAoaW5zdGFuY2UueCA/PyAwKSwgbXkgPSAoYVsxXSArIGJbMV0pIC8gMiAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QobXgsIG15KSB8fCAxO1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIGNvbnN0IHNwZWVkID0gbWFnbml0dWRlICogKC40NSArIChNYXRoLnNpbihpbmRleCAqIDkxLjE3KSAqIC41ICsgLjUpICogLjU1KTtcbiAgICBjb25zdCBkeCA9IG14IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCwgZHkgPSBteSAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQgKyBwcm9ncmVzcyAqIHByb2dyZXNzICogLjE4O1xuICAgIGNvbnN0IGFuZ2xlID0gcHJvZ3Jlc3MgKiAoaW5kZXggJSAyID8gMSA6IC0xKSAqIDIuNDtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAocDogVjMpOiBWMyA9PiB7XG4gICAgICBjb25zdCB4ID0gcFswXSAtIChpbnN0YW5jZS54ID8/IDApLCB5ID0gcFsxXSAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgICAgcmV0dXJuIFt4ICogTWF0aC5jb3MoYW5nbGUpIC0geSAqIE1hdGguc2luKGFuZ2xlKSArIChpbnN0YW5jZS54ID8/IDApICsgZHgsIHggKiBNYXRoLnNpbihhbmdsZSkgKyB5ICogTWF0aC5jb3MoYW5nbGUpICsgKGluc3RhbmNlLnkgPz8gMCkgKyBkeSwgcFsyXV07XG4gICAgfTtcbiAgICByZXR1cm4gW3RyYW5zZm9ybShhKSwgdHJhbnNmb3JtKGIpXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBsZXQgZGlzdGFuY2UgPSAwO1xuICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgXTtcbiAgY29uc3QgYWRkTGluZSA9IChhOiBWMywgYjogVjMsIHBoYXNlOiBudW1iZXIsIHdpZHRoU2NhbGUgPSAxLCBvcGFjaXR5ID0gMSkgPT4ge1xuICAgIFthLCBiXSA9IGV4cGxvZGUoYSwgYiwgTWF0aC5mbG9vcihkaXN0YW5jZSAqIDEwMCkgKyBNYXRoLmZsb29yKHBoYXNlICogMTApKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAuMDAxO1xuICAgIGNvbnN0IHdpZHRoID0gKGluc3RhbmNlLmxpbmVUaGlja25lc3MgPz8gMSkgKiAuMDE4ICogd2lkdGhTY2FsZTtcbiAgICBjb25zdCBveCA9IC1keSAvIGxlbmd0aCAqIHdpZHRoLCBveSA9IGR4IC8gbGVuZ3RoICogd2lkdGg7XG4gICAgY29uc3QgYTA6IFYzID0gW2FbMF0gLSBveCwgYVsxXSAtIG95LCBhWzJdXSwgYTE6IFYzID0gW2FbMF0gKyBveCwgYVsxXSArIG95LCBhWzJdXTtcbiAgICBjb25zdCBiMDogVjMgPSBbYlswXSAtIG94LCBiWzFdIC0gb3ksIGJbMl1dLCBiMTogVjMgPSBbYlswXSArIG94LCBiWzFdICsgb3ksIGJbMl1dO1xuICAgIGNvbnN0IHN0YXJ0ID0gZGlzdGFuY2UgKiAyLjQsIGVuZCA9IChkaXN0YW5jZSArIGxlbmd0aCkgKiAyLjQ7XG4gICAgY29uc3QgcHVzaCA9IChwOiBWMywgYWxvbmc6IG51bWJlciwgYWNyb3NzOiBudW1iZXIpID0+XG4gICAgICBvdXRwdXQucHVzaCh7IHAsIG46IFthbG9uZywgYWNyb3NzLCBwaGFzZV0sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIG9wYWNpdHkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqICgxICsgTWF0aC5zaW4oKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIE1hdGguUEkpICogKGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqIDIuMikgKiAoMSAtIChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiAuNyksIGVmZmVjdCB9KTtcbiAgICBwdXNoKGEwLHN0YXJ0LC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMCxlbmQsLTEpO1xuICAgIHB1c2goYjAsZW5kLC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMSxlbmQsMSk7XG4gICAgZGlzdGFuY2UgKz0gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBhZGRMb29wID0gKHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sIHo6IG51bWJlciwgcGhhc2U6IG51bWJlcikgPT5cbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIHopLCBtb3ZlKHBvaW50c1soaW5kZXggKyAxKSAlIHBvaW50cy5sZW5ndGhdLCB6KSwgcGhhc2UgKyBpbmRleCAqIC43MykpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgZGVwdGggLyAyLCAuMyk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCAtZGVwdGggLyAyLCAyLjEpO1xuICBzaGFwZS5ob2xlcz8uZm9yRWFjaCgoaG9sZSwgaW5kZXgpID0+IHtcbiAgICBhZGRMb29wKGhvbGUsIGRlcHRoIC8gMiArIC4wMDIsIDMuNyArIGluZGV4KTtcbiAgICBhZGRMb29wKGhvbGUsIC1kZXB0aCAvIDIgLSAuMDAyLCA1LjIgKyBpbmRleCk7XG4gIH0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIC1kZXB0aCAvIDIpLCBtb3ZlKHBvaW50LCBkZXB0aCAvIDIpLCA2LjEgKyBpbmRleCkpO1xuICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwICogKGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEpO1xuICBjb25zdCBicmFuY2hTdHJlbmd0aCA9IChpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSkgKiAoaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyKTtcbiAgY29uc3QgcmFuZG9tID0gKHNlZWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTggKyBzaGFwZS5wb2ludHMubGVuZ3RoICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XG4gICAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGlhbnM6IG51bWJlcik6IE5lb25Qb2ludCA9PiBbXG4gICAgeCAqIE1hdGguY29zKHJhZGlhbnMpIC0geSAqIE1hdGguc2luKHJhZGlhbnMpLFxuICAgIHggKiBNYXRoLnNpbihyYWRpYW5zKSArIHkgKiBNYXRoLmNvcyhyYWRpYW5zKSxcbiAgXTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlID0gTWF0aC5mbG9vcih0aW1lICogMi4zNSArIGluZGV4ICogLjYxKTtcbiAgICBjb25zdCBhZ2UgPSB0aW1lICogMi4zNSArIGluZGV4ICogLjYxIC0gY3ljbGU7XG4gICAgY29uc3Qgc2VlZCA9IGN5Y2xlICogMzcuMSArIGluZGV4ICogMTEuNztcbiAgICBjb25zdCBhY3RpdmVEdXJhdGlvbiA9IC4xOCArIHJhbmRvbShzZWVkICsgMSkgKiAuMjU7XG4gICAgY29uc3QgaGF6ZUR1cmF0aW9uID0gTWF0aC5taW4oMSwgYWN0aXZlRHVyYXRpb24gKyAuMjggKyByYW5kb20oc2VlZCArIDIpICogLjIyKTtcbiAgICBjb25zdCBicmFuY2hBY3RpdmUgPSBhZ2UgPCBhY3RpdmVEdXJhdGlvbjtcbiAgICBjb25zdCBoYXplQWN0aXZlID0gYWdlIDwgaGF6ZUR1cmF0aW9uO1xuICAgIGlmICgoIWJyYW5jaEFjdGl2ZSAmJiAhaGF6ZUFjdGl2ZSkgfHwgcmFuZG9tKHNlZWQgKyAzKSA+IE1hdGgubWluKC43OCwgYnJhbmNoU3RyZW5ndGggKiAuNSkpIHJldHVybjtcbiAgICBjb25zdCBuZXh0ID0gc2hhcGUucG9pbnRzWyhpbmRleCArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aF07XG4gICAgY29uc3QgdCA9IC4xNiArIHJhbmRvbShzZWVkICsgNCkgKiAuNjg7XG4gICAgY29uc3QgYmFzZTogTmVvblBvaW50ID0gW3BvaW50WzBdICsgKG5leHRbMF0gLSBwb2ludFswXSkgKiB0LCBwb2ludFsxXSArIChuZXh0WzFdIC0gcG9pbnRbMV0pICogdF07XG4gICAgY29uc3QgdHggPSBuZXh0WzBdIC0gcG9pbnRbMF0sIHR5ID0gbmV4dFsxXSAtIHBvaW50WzFdLCB0bCA9IE1hdGguaHlwb3QodHgsIHR5KSB8fCAxO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJhbmRvbShzZWVkICsgNSkgPiAuNSA/IDEgOiAtMTtcbiAgICBjb25zdCBwZXJwZW5kaWN1bGFyOiBOZW9uUG9pbnQgPSBbLXR5IC8gdGwgKiBkaXJlY3Rpb24sIHR4IC8gdGwgKiBkaXJlY3Rpb25dO1xuICAgIGNvbnN0IGZpcnN0Sml0dGVyID0gKDEwICsgcmFuZG9tKHNlZWQgKyA2KSAqIDEwKSAqIE1hdGguUEkgLyAxODAgKiAocmFuZG9tKHNlZWQgKyA3KSA+IC41ID8gMSA6IC0xKTtcbiAgICBsZXQgaGVhZGluZyA9IHJvdGF0ZWQocGVycGVuZGljdWxhclswXSwgcGVycGVuZGljdWxhclsxXSwgZmlyc3RKaXR0ZXIpO1xuICAgIGNvbnN0IHNlZ21lbnRDb3VudCA9IDEgKyBNYXRoLmZsb29yKHJhbmRvbShzZWVkICsgOCkgKiAzKTtcbiAgICBjb25zdCBwb2ludHM6IE5lb25Qb2ludFtdID0gW2Jhc2VdO1xuICAgIGZvciAobGV0IHNlZ21lbnQgPSAwOyBzZWdtZW50IDwgc2VnbWVudENvdW50OyBzZWdtZW50KyspIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IC4wNTUgKyByYW5kb20oc2VlZCArIDEwICsgc2VnbWVudCkgKiAuMDk1O1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzWzBdICsgaGVhZGluZ1swXSAqIGxlbmd0aCwgcHJldmlvdXNbMV0gKyBoZWFkaW5nWzFdICogbGVuZ3RoXSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoMjAgKyByYW5kb20oc2VlZCArIDIwICsgc2VnbWVudCkgKiA0MCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaGVhZGluZyA9IHJvdGF0ZWQoaGVhZGluZ1swXSwgaGVhZGluZ1sxXSwgb2Zmc2V0ICogKHJhbmRvbShzZWVkICsgMzAgKyBzZWdtZW50KSA+IC41ID8gMSA6IC0xKSk7XG4gICAgfVxuICAgIGlmIChoYXplQWN0aXZlKSB7XG4gICAgICBjb25zdCBmYWRlID0gMSAtIE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAvIE1hdGgubWF4KC4wMDEsIGhhemVEdXJhdGlvbiAtIGFjdGl2ZUR1cmF0aW9uKTtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pICogLjAzNTtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZW5kID0gcG9pbnRzW3NlZ21lbnQgKyAxXTtcbiAgICAgICAgY29uc3QgaGF6ZVN0YXJ0OiBOZW9uUG9pbnQgPSBbc3RhcnRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIHN0YXJ0WzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgY29uc3QgaGF6ZUVuZDogTmVvblBvaW50ID0gW2VuZFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgZW5kWzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgYWRkTGluZShtb3ZlKGhhemVTdGFydCwgZGVwdGggLyAyICsgLjAwMiksIG1vdmUoaGF6ZUVuZCwgZGVwdGggLyAyICsgLjAwMiksIDMxICsgc2VlZCArIHNlZ21lbnQsIDEuNDUgKyBmYWRlICogLjU1LCBmYWRlICogLjM0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYnJhbmNoQWN0aXZlKSB7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGFkZExpbmUobW92ZShzdGFydCwgZGVwdGggLyAyICsgLjAwNiksIG1vdmUocG9pbnRzW3NlZ21lbnQgKyAxXSwgZGVwdGggLyAyICsgLjAwNiksIDExICsgc2VlZCArIHNlZ21lbnQsIC40Mik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgY2xhc3MgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNsaW5lUGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2RlcHRoOiBHUFVUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICNsYWJlbExheWVyOiBIVE1MRGl2RWxlbWVudDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50ICYmIGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIuY2xhc3NOYW1lID0gXCJuZW9uLXNoYXBlLWxhYmVsLWxheWVyXCI7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaW5zZXQ6XCIwXCIsIHBvaW50ZXJFdmVudHM6XCJub25lXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIgfSk7XG4gICAgcGFyZW50Py5hcHBlbmQodGhpcy4jbGFiZWxMYXllcik7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgZXh0cnVkZWQgc2hhcGUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIsIGN1bGxNb2RlOiBcImJhY2tcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogZmFsc2UsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNsaW5lUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJsaW5lRnJhZ21lbnRcIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICAgIH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3Rvcnkgc2hhcGUgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZlcnRpY2VzID0gaW5zdGFuY2VzLmZsYXRNYXAobWVzaCk7XG4gICAgY29uc3QgZWRnZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChlZGdlTWVzaCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICBjb25zdCBlZGdlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZWRnZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGRhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgZWRnZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBlZGdlRGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBkYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgY29uc3QgZWRnZUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGVkZ2VEYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGlmIChlZGdlRGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGVkZ2VCdWZmZXIsIDAsIGVkZ2VEYXRhKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIDUsIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgMF0pKTtcbiAgICBjb25zdCBiaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGxpbmVCaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI2xpbmVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3sgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLCBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsIHN0b3JlT3A6IFwic3RvcmVcIiB9XSxcbiAgICAgIGRlcHRoU3RlbmNpbEF0dGFjaG1lbnQ6IHsgdmlldzogdGhpcy4jZGVwdGghLmNyZWF0ZVZpZXcoKSwgZGVwdGhDbGVhclZhbHVlOiAxLCBkZXB0aExvYWRPcDogXCJjbGVhclwiLCBkZXB0aFN0b3JlT3A6IFwic3RvcmVcIiB9LFxuICAgIH0pO1xuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIHZlcnRleEJ1ZmZlcik7IHBhc3MuZHJhdyh2ZXJ0aWNlcy5sZW5ndGgpOyB9XG4gICAgaWYgKGVkZ2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI2xpbmVQaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGxpbmVCaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCBlZGdlQnVmZmVyKTsgcGFzcy5kcmF3KGVkZ2VzLmxlbmd0aCk7IH1cbiAgICBwYXNzLmVuZCgpOyB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgICB0aGlzLiNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkudGhlbigoKSA9PiB7IHZlcnRleEJ1ZmZlci5kZXN0cm95KCk7IGVkZ2VCdWZmZXIuZGVzdHJveSgpOyB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHsgdGhpcy4jbGFiZWxMYXllci5yZW1vdmUoKTsgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTsgdGhpcy4jc2NlbmVCdWZmZXIuZGVzdHJveSgpOyBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpOyB9XG4gICNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7XG4gICAgICBsZWZ0OiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0fXB4YCxcbiAgICAgIHRvcDogYCR7dGhpcy5jYW52YXMub2Zmc2V0VG9wfXB4YCxcbiAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICB3aWR0aDogYCR7dGhpcy5jYW52YXMuY2xpZW50V2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHR9cHhgLFxuICAgIH0pO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIucmVwbGFjZUNoaWxkcmVuKC4uLmluc3RhbmNlcy5mbGF0TWFwKGluc3RhbmNlID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2UubGFiZWw/LnRleHQgfHwgKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgPD0gMCkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICAgICAgY29uc3QgeCA9IDUwICsgKGluc3RhbmNlLnggPz8gMCkgKiA0MCAvICh0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCB5ID0gNTAgLSAoaW5zdGFuY2UueSA/PyAwKSAqIDQwO1xuICAgICAgY29uc3Qgc2hhcGVSYWRpdXMgPSBzY2FsZSAqIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIC4yO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2hhcGVSYWRpdXMgKyAoaW5zdGFuY2UubGFiZWwub2Zmc2V0ID8/IDgpICsgKGluc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4KSAqIC41O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnN0YW5jZS5sYWJlbC5wb3NpdGlvbiA/PyBcImFib3ZlXCI7XG4gICAgICBsZXQgdHggPSAwLCB0eSA9IDA7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYWJvdmVcIikgdHkgPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImJlbG93XCIpIHR5ID0gb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImxlZnRcIikgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHR4ID0gb2Zmc2V0O1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGluc3RhbmNlLmxhYmVsLnRleHQ7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OmAke3h9JWAsIHRvcDpgJHt5fSVgLCB0cmFuc2Zvcm06YHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3R4fXB4KSxjYWxjKC01MCUgKyAke3R5fXB4KSlgLFxuICAgICAgICBjb2xvcjppbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvciwgZm9udEZhbWlseTppbnN0YW5jZS5sYWJlbC5mb250RmFtaWx5ID8/IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFNpemU6YCR7aW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTh9cHhgLCBmb250V2VpZ2h0OlN0cmluZyhpbnN0YW5jZS5sYWJlbC5mb250V2VpZ2h0ID8/IDYwMCksXG4gICAgICAgIHRleHRTaGFkb3c6YDAgMCA1cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn0sMCAwIDE0cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn1gLCB3aGl0ZVNwYWNlOlwibm93cmFwXCIsXG4gICAgICAgIG9wYWNpdHk6U3RyaW5nKGluc3RhbmNlLm9wYWNpdHkgPz8gMSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbZWxlbWVudF07XG4gICAgfSkpO1xuICB9XG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuI2xvZ2ljYWxTaXplO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCB8fCAhdGhpcy4jZGVwdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuI2RlcHRoICYmIHRoaXMuY2FudmFzLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlLCBOZW9uU2hhcGVMYWJlbCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgZW51bSBOZW9uU2hhcGVEaXNwb3NhbCB7XG4gIEZhZGVPdXQgPSBcImZhZGVPdXRcIixcbiAgRGlzYXBwZWFyID0gXCJkaXNhcHBlYXJcIixcbiAgRXhwbG9kZSA9IFwiZXhwbG9kZVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZVZlY3RvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUltcGFjdCB7XG4gIGRpcmVjdGlvbjogTmVvblNoYXBlVmVjdG9yO1xuICBtYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVBY3Rvck9wdGlvbnMge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgdmVsb2NpdHk/OiBQYXJ0aWFsPE5lb25TaGFwZVZlY3Rvcj47XG4gIHNjYWxlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw/OiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25TaGFwZUFjdG9yIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3I7XG4gIHNjYWxlOiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbDogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU6IG51bWJlcjtcbiAgcm90YXRpb25YID0gMDtcbiAgcm90YXRpb25ZID0gMDtcbiAgcm90YXRpb25aID0gMDtcbiAgZGlzcG9zZWQgPSBmYWxzZTtcbiAgI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAjaW1wYWN0VmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuICAjaW1wYWN0Um90YXRpb246IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25TaGFwZUFjdG9yT3B0aW9ucykge1xuICAgIHRoaXMuc2hhcGUgPSBvcHRpb25zLnNoYXBlO1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCA/PyAwO1xuICAgIHRoaXMueSA9IG9wdGlvbnMueSA/PyAwO1xuICAgIHRoaXMueiA9IG9wdGlvbnMueiA/PyAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IG9wdGlvbnMudmVsb2NpdHk/LnggPz8gMCwgeTogb3B0aW9ucy52ZWxvY2l0eT8ueSA/PyAwIH07XG4gICAgdGhpcy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgPz8gMTtcbiAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmRpc3Bvc2FsID0gb3B0aW9ucy5kaXNwb3NhbCA/PyBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0O1xuICAgIHRoaXMuZXhwbG9kZU1hZ25pdHVkZSA9IG9wdGlvbnMuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gIH1cblxuICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIsIHogPSB0aGlzLnopOiB0aGlzIHtcbiAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VmVsb2NpdHkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSB4OyB0aGlzLnZlbG9jaXR5LnkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1wYWN0KHsgZGlyZWN0aW9uLCBtYWduaXR1ZGUgfTogTmVvblNoYXBlSW1wYWN0KTogdGhpcyB7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gICAgY29uc3QgeCA9IGRpcmVjdGlvbi54IC8gbGVuZ3RoLCB5ID0gZGlyZWN0aW9uLnkgLyBsZW5ndGg7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCArPSB4ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKz0geSAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICs9IHkgKiBtYWduaXR1ZGUgKiAuOTtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi55IC09IHggKiBtYWduaXR1ZGUgKiAuOTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRpc3Bvc2UobW9kZSA9IHRoaXMuZGlzcG9zYWwpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2FsID0gbW9kZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gbW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyID8gMSA6IC4wMDAxO1xuICAgIGlmIChtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnZW5lcmF0ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gKHRoaXMudmVsb2NpdHkueCArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LngpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSAodGhpcy52ZWxvY2l0eS55ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblggKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWSArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICogZGVsdGFTZWNvbmRzO1xuICAgIGNvbnN0IGRhbXBpbmcgPSBNYXRoLmV4cCgtNyAqIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICo9IGRhbXBpbmc7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICo9IGRhbXBpbmc7XG4gICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPiAwICYmICF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyAuODUgOiAuNTU7XG4gICAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIGR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID49IDEpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckluc3RhbmNlKG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgICBjb25zdCBmYWRlID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dCA/IDEgLSB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMTtcbiAgICByZXR1cm4ge1xuICAgICAgc2hhcGU6IHRoaXMuc2hhcGUsIHg6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnosIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgcm90YXRpb25YOiB0aGlzLnJvdGF0aW9uWCwgcm90YXRpb25ZOiB0aGlzLnJvdGF0aW9uWSwgcm90YXRpb25aOiB0aGlzLnJvdGF0aW9uWixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLCBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogdGhpcy5kaXNwb3NlZCA/IDAgOiBmYWRlLFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiB0aGlzLmV4cGxvZGVNYWduaXR1ZGUsXG4gICAgICAuLi5vdmVycmlkZXMsXG4gICAgfTtcbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25QcmltaXRpdmVTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImJvbHRcIiB8IFwib3JiXCIgfCBcInJpbmdcIiB8IFwic3BhcmtcIiB8IFwiZGlhbW9uZFwiIHwgXCJwZW50YWdvblwiIHwgXCJsaW5lXCIgfCBcImFyY1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25QcmltaXRpdmUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcj86IHN0cmluZztcbiAgZ2xvdz86IG51bWJlcjtcbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICB0ZXh0dXJlPzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoPzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgYXJjU3RhcnQ/OiBudW1iZXI7XG4gIGFyY0VuZD86IG51bWJlcjtcbiAgc2hhcGU/OiBOZW9uUHJpbWl0aXZlU2hhcGU7XG59XG5cbmNvbnN0IG1heFByaW1pdGl2ZXMgPSAxMDI0O1xuY29uc3QgZmxvYXRzUGVyUHJpbWl0aXZlID0gMjA7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi8gYFxuc3RydWN0IFNjZW5lIHsgcmVzb2x1dGlvbjogdmVjMmYsIGNvdW50OiBmMzIsIHRpbWU6IGYzMiB9XG5zdHJ1Y3QgUHJpbWl0aXZlIHtcbiAgcG9zaXRpb246IHZlYzJmLFxuICBzaXplOiB2ZWMyZixcbiAgY29sb3I6IHZlYzRmLFxuICBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIGdsb3c6IGYzMixcbiAgaW50ZW5zaXR5OiBmMzIsXG4gIHNoYXBlOiBmMzIsXG4gIHRleHR1cmU6IGYzMixcbiAgcmltSW50ZW5zaXR5OiBmMzIsXG4gIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG4gIHBhZGRpbmc6IHZlYzJmLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGl0ZW1zOiBhcnJheTxQcmltaXRpdmU+O1xuXG5zdHJ1Y3QgVmVydGV4T3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oNCkgc2hhcGU6IGYzMixcbiAgQGxvY2F0aW9uKDUpIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDYpIHRleHR1cmU6IGYzMixcbiAgQGxvY2F0aW9uKDcpIHJpbUludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oOCkgc2hhZG93U3RyZW5ndGg6IGYzMixcbn1cblxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmVydGV4OiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBWZXJ0ZXhPdXRwdXQge1xuICB2YXIgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGl0ZW0gPSBpdGVtc1tpbnN0YW5jZV07XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmVydGV4XTtcbiAgdmFyIHBpeGVsT2Zmc2V0ID0gbG9jYWwgKiBpdGVtLnNpemU7XG4gIGlmIChpdGVtLnNoYXBlID4gNi41ICYmIGl0ZW0uc2hhcGUgPCA3LjUpIHtcbiAgICBsZXQgYyA9IGNvcyhpdGVtLnRleHR1cmUpO1xuICAgIGxldCBzID0gc2luKGl0ZW0udGV4dHVyZSk7XG4gICAgcGl4ZWxPZmZzZXQgPSB2ZWMyZihwaXhlbE9mZnNldC54ICogYyAtIHBpeGVsT2Zmc2V0LnkgKiBzLCBwaXhlbE9mZnNldC54ICogcyArIHBpeGVsT2Zmc2V0LnkgKiBjKTtcbiAgfVxuICBsZXQgcGl4ZWwgPSBpdGVtLnBvc2l0aW9uICsgcGl4ZWxPZmZzZXQ7XG4gIHZhciBvdXRwdXQ6IFZlcnRleE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYocGl4ZWwueCAvIHNjZW5lLnJlc29sdXRpb24ueCAqIDIgLSAxLCAxIC0gcGl4ZWwueSAvIHNjZW5lLnJlc29sdXRpb24ueSAqIDIsIDAsIDEpO1xuICBvdXRwdXQubG9jYWwgPSBsb2NhbDtcbiAgb3V0cHV0LmNvbG9yID0gaXRlbS5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpdGVtLmdsb3c7XG4gIG91dHB1dC5pbnRlbnNpdHkgPSBpdGVtLmludGVuc2l0eTtcbiAgb3V0cHV0LnNoYXBlID0gaXRlbS5zaGFwZTtcbiAgb3V0cHV0LnNlY29uZGFyeUNvbG9yID0gaXRlbS5zZWNvbmRhcnlDb2xvcjtcbiAgb3V0cHV0LnRleHR1cmUgPSBpdGVtLnRleHR1cmU7XG4gIG91dHB1dC5yaW1JbnRlbnNpdHkgPSBpdGVtLnJpbUludGVuc2l0eTtcbiAgb3V0cHV0LnNoYWRvd1N0cmVuZ3RoID0gaXRlbS5zaGFkb3dTdHJlbmd0aDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogVmVydGV4T3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBpZiAoaW5wdXQuc2hhcGUgPiA3LjUpIHtcbiAgICBsZXQgcmFkaXVzID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgICBsZXQgYW5nbGUgPSBhdGFuMihpbnB1dC5sb2NhbC55LCBpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYW5nbGUgPCBpbnB1dC5yaW1JbnRlbnNpdHkgfHwgYW5nbGUgPiBpbnB1dC5zaGFkb3dTdHJlbmd0aCB8fCByYWRpdXMgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBsaW5lRGlzdGFuY2UgPSBhYnMocmFkaXVzIC0gMC43OCk7XG4gICAgaWYgKGxpbmVEaXN0YW5jZSA+IDAuMTYpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjAxMiwgMC4wMzgsIGxpbmVEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjAyNSwgMC4xNiwgbGluZURpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBwdWxzZUEgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMjMuMCAtIHNjZW5lLnRpbWUgKiA4LjUpKSwgMTYuMCk7XG4gICAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAxMS4wICsgc2NlbmUudGltZSAqIDUuMyArIDEuNykpLCAyNC4wKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oYW5nbGUgKiA3MS4wICsgc2NlbmUudGltZSAqIDMuMSkgKiAwLjUgKyAwLjU7XG4gICAgbGV0IHN1cmdlID0gc21vb3Roc3RlcCgwLjcyLCAwLjk0LCBwdWxzZUEgKiAwLjcgKyBwdWxzZUIgKiAwLjY1ICsgZ3JhaW4gKiAwLjEyKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC44OCArIHN1cmdlICogMC42NSkgKyBoYWxvICogKDAuMjIgKyBzdXJnZSAqIDAuOSkpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiBzdXJnZSAqIDAuOSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA2LjUpIHtcbiAgICBsZXQgYWxvbmcgPSBpbnB1dC5sb2NhbC55O1xuICAgIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFjcm9zcyA+IDEuMCB8fCBhYnMoYWxvbmcpID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wOCwgMC4yNCwgYWNyb3NzKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMTIsIDEuMCwgYWNyb3NzKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmRGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgwLjcyLCAxLjAsIGFicyhhbG9uZykpO1xuICAgIGxldCB0cmF2ZWwgPSBwb3cobWF4KDAuMCwgc2luKGFsb25nICogMjQuMCAtIHNjZW5lLnRpbWUgKiA4LjAgKyBpbnB1dC50ZXh0dXJlKSksIDE0LjApO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjc1ICsgdHJhdmVsICogMC41KSArIGhhbG8gKiAoMC4yICsgdHJhdmVsICogMC41NSkpICogZW5kRmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogdHJhdmVsICogMC43NSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA1LjUpIHtcbiAgICAvLyBQZW50YWdvbiBTREZcbiAgICAvLyBsb2NhbCBpcyBpbiBbLTEsIDFdIHJhbmdlLiBMZXQncyBmaW5kIHBlbnRhZ29uIGRpc3RhbmNlLlxuICAgIGxldCBweCA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBsZXQgcHkgPSBpbnB1dC5sb2NhbC55O1xuICAgIC8vIFBlbnRhZ29uIGNvbnN0YW50cyBmb3IgdmVydGljZXMvZWRnZXNcbiAgICBsZXQgayA9IHZlYzNmKC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDEuMzc2MzgxOTIpOyAvLyBjb3Mvc2luIG9mIDcyLCBwbHVzIGhlaWdodCBmYWN0b3JcbiAgICAvLyBQcm9qZWN0L01pcnJvciBhY3Jvc3MgdGhlIHN5bW1ldHJ5IGF4ZXMgb2YgcmVndWxhciBwZW50YWdvblxuICAgIHZhciBwID0gdmVjMmYocHgsIHB5KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKC1rLngsIGsueSksIHApLCAwKSAqIHZlYzJmKC1rLngsIGsueSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZihrLngsIGsueSksIHApLCAwKSAqIHZlYzJmKGsueCwgay55KTtcbiAgICBwLnggPSBwLnggLSBjbGFtcChwLngsIC1rLnogKiAwLjUsIGsueiAqIDAuNSk7XG4gICAgbGV0IGQgPSBsZW5ndGgocCAtIHZlYzJmKDAsIDAuNzIpKSAqIHNpZ24ocC55IC0gMC43Mik7XG4gICAgLy8gTWFwIGQgdG8gYSBub3JtYWxpemVkIHJhZGl1cyBzY2FsZVxuICAgIGxldCBzY2FsZUQgPSBkICsgMC4zNTsgLy8gb2Zmc2V0IHBlbnRhZ29uIHRvIGZpdCBib3VuZHMgbmljZWx5XG4gICAgaWYgKHNjYWxlRCA+IDAuOCkgeyBkaXNjYXJkOyB9XG4gICAgXG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjUsIDAuNjUsIHNjYWxlRCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC40NSwgMC41Mywgc2NhbGVEKSAqICgxIC0gc21vb3Roc3RlcCgwLjY1LCAwLjc1LCBzY2FsZUQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKC0wLjIsIDAuNSwgc2NhbGVEKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjU1LCAwLjgsIHNjYWxlRCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zOCArIGJvcmRlciAqIDEuMzU7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS43NSArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjQ1KSAqIGZpbGwgKiAwLjM1O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjQ7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDQuNSkge1xuICAgIGxldCBkID0gYWJzKGlucHV0LmxvY2FsLngpICsgYWJzKGlucHV0LmxvY2FsLnkpO1xuICAgIGlmIChkID4gMS4wOCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjc4LCAwLjkyLCBkKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjcyLCAwLjgyLCBkKSAqICgxIC0gc21vb3Roc3RlcCgwLjkyLCAxLjAyLCBkKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgwLjAsIDAuNzgsIGQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuODIsIDEuMDgsIGQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzUgKyBib3JkZXIgKiAxLjI7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNiArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjUpICogZmlsbCAqIDAuMzg7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMzU7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDEuNSkge1xuICAgIGxldCByMiA9IGRvdChpbnB1dC5sb2NhbCwgaW5wdXQubG9jYWwpO1xuICAgIGlmIChyMiA+IDEpIHsgZGlzY2FyZDsgfVxuICAgIGxldCB6ID0gc3FydChtYXgoMCwgMSAtIHIyKSk7XG4gICAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZSh2ZWMzZihpbnB1dC5sb2NhbC54LCAtaW5wdXQubG9jYWwueSwgeikpO1xuICAgIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtMC41NSwgLTAuNywgMC45KSk7XG4gICAgbGV0IGRpZmZ1c2UgPSBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKTtcbiAgICBsZXQgcmltID0gcG93KDEgLSB6LCAyLjIpICogaW5wdXQucmltSW50ZW5zaXR5O1xuICAgIGxldCBzaGFkb3cgPSBtaXgoMSAtIGlucHV0LnNoYWRvd1N0cmVuZ3RoLCAxLCBzbW9vdGhzdGVwKC0wLjY1LCAwLjQ1LCBkb3Qobm9ybWFsLnh5LCBsaWdodC54eSkpKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oaW5wdXQubG9jYWwueCAqIDIzICsgaW5wdXQubG9jYWwueSAqIDE3KSAqIHNpbihpbnB1dC5sb2NhbC55ICogMzEgLSBpbnB1dC5sb2NhbC54ICogMTEpO1xuICAgIGxldCB0ZXh0dXJlID0gMSArIGdyYWluICogaW5wdXQudGV4dHVyZSAqIDAuMjI7XG4gICAgbGV0IHNwZWN1bGFyID0gcG93KG1heChkb3QocmVmbGVjdCgtbGlnaHQsIG5vcm1hbCksIHZlYzNmKDAsMCwxKSksIDApLCAyOCkgKiAxLjg7XG4gICAgbGV0IGJvZHkgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGRpZmZ1c2UgKiAwLjggKyAwLjIpICogc2hhZG93ICogdGV4dHVyZTtcbiAgICBsZXQgaGFsbyA9IHBvdyhtYXgoMCwgMSAtIGxlbmd0aChpbnB1dC5sb2NhbCkpLCAwLjM1KSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHJnYiA9IGJvZHkgKiAoMC4zOCArIGRpZmZ1c2UgKiAwLjk1KSArIGlucHV0LmNvbG9yLnJnYiAqIHJpbSArIHZlYzNmKHNwZWN1bGFyKSArIGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiAqIGlucHV0LmludGVuc2l0eSwgMSk7XG4gIH1cbiAgdmFyIGRpc3RhbmNlID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgaWYgKGlucHV0LnNoYXBlID4gMy41KSB7XG4gICAgbGV0IGF4aXMgPSBtaW4oYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICAgIGxldCBhcm0gPSAxIC0gc21vb3Roc3RlcCgwLjA0LCAwLjE4LCBheGlzKTtcbiAgICBsZXQgZmFkZSA9IDEgLSBzbW9vdGhzdGVwKDAuMiwgMSwgbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKSk7XG4gICAgbGV0IGVuZXJneSA9IGFybSAqIGZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgYXJtKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAyLjUpIHtcbiAgICBsZXQgcmluZ0Rpc3RhbmNlID0gYWJzKGxlbmd0aChpbnB1dC5sb2NhbCkgLSAwLjYyKTtcbiAgICBsZXQgcmluZyA9IDEgLSBzbW9vdGhzdGVwKDAuMDU1LCAwLjE4LCByaW5nRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMTIsIDAuNDIsIHJpbmdEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5lcmd5ID0gKHJpbmcgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgcmluZykgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAwLjUpIHtcbiAgICBkaXN0YW5jZSA9IG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gIH1cbiAgbGV0IGNvcmUgPSAxIC0gc21vb3Roc3RlcCgwLjM4LCAwLjc2LCBkaXN0YW5jZSk7XG4gIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMywgMSwgZGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gIGxldCBlbmVyZ3kgPSAoY29yZSArIGhhbG8gKiAwLjU1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgbGV0IGNocm9tYXRpY0NvcmUgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIHBvdyhtYXgoY29yZSwgMCksIDIpKTtcbiAgbGV0IHJhdyA9IGNocm9tYXRpY0NvcmUgKiAoY29yZSAqIDEuMDUgKyBoYWxvICogMC40Mik7XG4gIGxldCByZ2IgPSByYXcgLyAodmVjM2YoMSkgKyByYXcgKiAwLjMyKTtcbiAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG59XG5gO1xuXG5mdW5jdGlvbiByZ2JhKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB2YWx1ZSA9IGhleC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgaWYgKCEvXlswLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHNpeC1kaWdpdCBoZXggY29sb3IsIHJlY2VpdmVkIFwiJHtoZXh9XCIuYCk7XG4gIHJldHVybiBbXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDAsIDIpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDIsIDQpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDQsIDYpLCAxNikgLyAyNTUsXG4gICAgMSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25QcmltaXRpdmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNwcmltaXRpdmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7IGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0gfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jcHJpbWl0aXZlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBtYXhQcmltaXRpdmVzICogZmxvYXRzUGVyUHJpbWl0aXZlICogNCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgfSk7XG4gICAgdGhpcy4jYmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfSxcbiAgICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciB9IH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uUHJpbWl0aXZlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNhbnZhcyBjb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10sIHRpbWVTZWNvbmRzID0gMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2aXNpYmxlID0gcHJpbWl0aXZlcy5zbGljZSgwLCBtYXhQcmltaXRpdmVzKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2aXNpYmxlLmxlbmd0aCAqIGZsb2F0c1BlclByaW1pdGl2ZSk7XG4gICAgdmlzaWJsZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJQcmltaXRpdmU7XG4gICAgICBkYXRhLnNldChbXG4gICAgICAgIGl0ZW0ueCwgaXRlbS55LCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCA/PyBpdGVtLndpZHRoLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uY29sb3IpLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uc2Vjb25kYXJ5Q29sb3IgPz8gaXRlbS5jb2xvciksXG4gICAgICAgIGl0ZW0uZ2xvdyA/PyAwLjUsXG4gICAgICAgIGl0ZW0uaW50ZW5zaXR5ID8/IDEsXG4gICAgICAgIGl0ZW0uc2hhcGUgPT09IFwiYXJjXCIgPyA4IDogaXRlbS5zaGFwZSA9PT0gXCJsaW5lXCIgPyA3IDogaXRlbS5zaGFwZSA9PT0gXCJwZW50YWdvblwiID8gNiA6IGl0ZW0uc2hhcGUgPT09IFwiZGlhbW9uZFwiID8gNSA6IGl0ZW0uc2hhcGUgPT09IFwic3BhcmtcIiA/IDQgOiBpdGVtLnNoYXBlID09PSBcInJpbmdcIiA/IDMgOiBpdGVtLnNoYXBlID09PSBcIm9yYlwiID8gMiA6IGl0ZW0uc2hhcGUgPT09IFwiYm9sdFwiID8gMSA6IDAsXG4gICAgICAgIGl0ZW0ucm90YXRpb24gPz8gaXRlbS50ZXh0dXJlID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjU3RhcnQgPz8gaXRlbS5yaW1JbnRlbnNpdHkgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNFbmQgPz8gaXRlbS5zaGFkb3dTdHJlbmd0aCA/PyAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgXSwgb2Zmc2V0KTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdmlzaWJsZS5sZW5ndGgsIHRpbWVTZWNvbmRzXSkpO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jcHJpbWl0aXZlQnVmZmVyLCAwLCBkYXRhKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDAuMDA2LCBnOiAwLjAwOSwgYjogMC4wMjUsIGE6IDEgfSxcbiAgICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgIH1dLFxuICAgIH0pO1xuICAgIGlmICh2aXNpYmxlLmxlbmd0aCkge1xuICAgICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kR3JvdXApO1xuICAgICAgcGFzcy5kcmF3KDYsIHZpc2libGUubGVuZ3RoKTtcbiAgICB9XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IE5lb25QcmltaXRpdmVSZW5kZXJlciwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2hhcGUgZXh0ZW5kcyBPbWl0PE5lb25TaGFwZUluc3RhbmNlLCBcInhcIiB8IFwieVwiIHwgXCJzY2FsZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TY2VuZSB7XG4gIHByaW1pdGl2ZXM/OiByZWFkb25seSBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVJlbmRlcmVyO1xuICAjc2hhcGVzOiBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcjtcbiAgI3dpZHRoOiBudW1iZXI7XG4gICNoZWlnaHQ6IG51bWJlcjtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7IHRoaXMuI3dpZHRoID0gd2lkdGg7IHRoaXMuI2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNwcmltaXRpdmVzID0gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNzaGFwZXMgPSBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeSB0b3AtZG93biBzY2VuZXMuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQsIGxvZ2ljYWxXaWR0aCwgbG9naWNhbEhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2NlbmU6IE5lb25Ub3BEb3duU2NlbmUsIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKTtcbiAgICB0aGlzLiNwcmltaXRpdmVzLnJlbmRlcihbLi4uKHNjZW5lLnByaW1pdGl2ZXMgPz8gW10pXSwgdGltZVNlY29uZHMsIGZhbHNlLCB0YXJnZXQpO1xuICAgIGNvbnN0IGFzcGVjdCA9IHRoaXMuI3dpZHRoIC8gdGhpcy4jaGVpZ2h0O1xuICAgIHRoaXMuI3NoYXBlcy5yZW5kZXIoKHNjZW5lLnNoYXBlcyA/PyBbXSkubWFwKHNoYXBlID0+ICh7XG4gICAgICAuLi5zaGFwZSxcbiAgICAgIHg6IChzaGFwZS54IC8gdGhpcy4jd2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBzaGFwZS55IC8gdGhpcy4jaGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNjYWxlOiBzaGFwZS5zaXplIC8gdGhpcy4jaGVpZ2h0ICogMi41LFxuICAgIH0pKSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4jc2hhcGVzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB0eXBlIHsgTmVvblRvcERvd25TY2VuZSB9IGZyb20gXCIuL3RvcC1kb3duLXNjZW5lXCI7XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyU2NlbmVJZHMgPSBbXCJuZW9uSGFsbFwiXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQgPSB0eXBlb2YgbGFuZVJ1bm5lclNjZW5lSWRzW251bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyB7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdGltZU1zOiBudW1iZXI7XG59XG5cbmNvbnN0IHNjZW5lTmFtZXM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgc3RyaW5nPiA9IHtcbiAgbmVvbkhhbGw6IFwiTmVvbiBIYWxsXCIsXG59O1xuXG5jb25zdCBoYWxsVmFuaXNoaW5nWSA9IDAuNDY7XG5jb25zdCBoYWxsQm90dG9tV2lkdGggPSAwLjkyO1xuY29uc3QgaGFsbEhvcml6b25XaWR0aCA9IDAuMDg7XG5jb25zdCBoYWxsRmxvb3JDb2xvciA9IFwiIzA1MTAxZlwiO1xuY29uc3QgaGFsbERlZXBCbHVlID0gXCIjMTIzNTZhXCI7XG5jb25zdCBoYWxsTXV0ZWRCbHVlID0gXCIjMWI0YzhkXCI7XG5jb25zdCBoYWxsTXV0ZWRDeWFuID0gXCIjMmFjNGRjXCI7XG5jb25zdCBoYWxsTXV0ZWRWaW9sZXQgPSBcIiM0NTMwNzlcIjtcbmNvbnN0IGhhbGxBY2NlbnRQaW5rID0gXCIjYTczNTdlXCI7XG5jb25zdCBoYWxsRW5lcmd5U3BlZWQgPSAwLjAwMTc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNjZW5lTmFtZXNbc2NlbmVJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmVSdW5uZXJTY2VuZUlkKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBMYW5lUnVubmVyU2NlbmVJZCB7XG4gIHJldHVybiAobGFuZVJ1bm5lclNjZW5lSWRzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5lUnVubmVyU2NlbmUob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBzd2l0Y2ggKG9wdGlvbnMuc2NlbmVJZCkge1xuICAgIGNhc2UgXCJuZW9uSGFsbFwiOlxuICAgICAgcmV0dXJuIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGhhbGxHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRIYWxsQmFzZShwcmltaXRpdmVzLCB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMpO1xuICBhZGRIYWxsUmFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnkpO1xuICBhZGRIYWxsQ3Jvc3NiYXJzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxGbG9vckdseXBocyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEhvcml6b25EZXRhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsU2lkZVBhbmVscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEVuZXJneVRyYWNlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGhhbGxHZW9tZXRyeSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICBjb25zdCB2cCA9IHsgeDogd2lkdGggKiAuNSwgeTogaGVpZ2h0ICogaGFsbFZhbmlzaGluZ1kgfTtcbiAgY29uc3QgYm90dG9tWSA9IGhlaWdodCAqIC45ODU7XG4gIGNvbnN0IGhvcml6b25ZID0gaGVpZ2h0ICogaGFsbFZhbmlzaGluZ1k7XG4gIGNvbnN0IGJvdHRvbUhhbGYgPSB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCAqIC41O1xuICBjb25zdCBob3Jpem9uSGFsZiA9IHdpZHRoICogaGFsbEhvcml6b25XaWR0aCAqIC41O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2cCxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICBsZWZ0SG9yaXpvbjogeyB4OiB2cC54IC0gaG9yaXpvbkhhbGYsIHk6IGhvcml6b25ZIH0sXG4gICAgcmlnaHRIb3Jpem9uOiB7IHg6IHZwLnggKyBob3Jpem9uSGFsZiwgeTogaG9yaXpvblkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkSGFsbEJhc2UoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHB1bHNlID0gLjU1ICsgTWF0aC5zaW4odGltZU1zICogaGFsbEVuZXJneVNwZWVkKSAqIC4yO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgKiAuNzYsIHdpZHRoOiB3aWR0aCAqIC41LCBoZWlnaHQ6IGhlaWdodCAqIC40MywgY29sb3I6IGhhbGxGbG9vckNvbG9yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogaGFsbFZhbmlzaGluZ1ksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBoYWxsRGVlcEJsdWUsIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRDeWFuLCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgKiAuNDksIHdpZHRoOiB3aWR0aCAqIC4xOCwgaGVpZ2h0OiAxLjIsIGNvbG9yOiBoYWxsQWNjZW50UGluaywgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCwgZ2xvdzogLjI0LCBpbnRlbnNpdHk6IC4wOCwgc2hhcGU6IFwiYm9sdFwiIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRIYWxsUmFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4pOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3QgW2JvdHRvbSwgaG9yaXpvbl0gb2YgW1tsZWZ0Qm90dG9tLCBsZWZ0SG9yaXpvbl0sIFtyaWdodEJvdHRvbSwgcmlnaHRIb3Jpem9uXV0gYXMgY29uc3QpIHtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBoYWxsRGVlcEJsdWUsIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBoYWxsTXV0ZWRDeWFuLCAuNTYsIDEuMyk7XG4gIH1cblxuICBmb3IgKGxldCBsYW5lID0gMTsgbGFuZSA8PSAzOyBsYW5lKyspIHtcbiAgICBjb25zdCB1ID0gbGFuZSAvIDQ7XG4gICAgY29uc3Qgc3RhcnQgPSBsZXJwUG9pbnQobGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIHUpO1xuICAgIGNvbnN0IGVuZCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBjb2xvciA9IGxhbmUgPT09IDIgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsTXV0ZWRCbHVlO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBjb2xvciwgbGFuZSA9PT0gMiA/IC4yOCA6IC4yLCAzLjQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBoYWxsTXV0ZWRDeWFuLCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbENyb3NzYmFycyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDE1OyByb3crKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgcm93UHVsc2UgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA0ODAgKyByb3cgKiAuNzgpICogLjQyO1xuICAgIGNvbnN0IHN1cmdlID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZU1zIC8gODIwIC0gcm93ICogLjcyKSk7XG4gICAgY29uc3QgY29sb3IgPSByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IHJvdyAlIDQgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogcm93ICUgNCA9PT0gMiA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxBY2NlbnRQaW5rO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMTUgKyB0ICogLjIzKSAqICguNTUgKyByb3dQdWxzZSAqIC40NSkgKyBzdXJnZSAqIC4wNTUsIDMuMSArIHQgKiAyKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjIgKyB0ICogLjI3KSAqICguNTIgKyByb3dQdWxzZSAqIC40OCkgKyBzdXJnZSAqIC4wNywgLjc1ICsgdCAqIC42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDc7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxOTAwICsgcHVsc2VJbmRleCAvIDcpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjU1KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjM0ICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgaGFsbE11dGVkQ3lhbiwgb3BhY2l0eSwgMS4xICsgdCAqIDEuNCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEZsb29yR2x5cGhzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3Qgcm93cyA9IFsyLCA0LCA2LCA4LCAxMCwgMTJdO1xuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBjZW50ZXIgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCAuNSk7XG4gICAgY29uc3Qgc2NhbGUgPSAuNDUgKyB0ICogMS4xO1xuICAgIGNvbnN0IHB1bHNlID0gLjQ4ICsgTWF0aC5zaW4odGltZU1zIC8gNzIwICsgcm93ICogMS4zKSAqIC4yNDtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGNlbnRlci54LFxuICAgICAgeTogY2VudGVyLnksXG4gICAgICB3aWR0aDogNyAqIHNjYWxlLFxuICAgICAgaGVpZ2h0OiA3ICogc2NhbGUsXG4gICAgICBjb2xvcjogcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxEZWVwQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiByb3cgJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMjQgKyBwdWxzZSAqIC4xNixcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsSG9yaXpvbkRldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQsIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCBnbG93UHVsc2UgPSAuNzUgKyBNYXRoLnNpbih0aW1lTXMgLyA2ODApICogLjI1O1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIHsgeDogdnAueCArIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCBoYWxsQWNjZW50UGluaywgLjIgKyBnbG93UHVsc2UgKiAuMDgsIDEuMSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54IC0gd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZEN5YW4sIC4xNiwgLjg1KTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCArIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkVmlvbGV0LCAuMTYsIC44NSk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4ICsgLjUpIC8gODtcbiAgICBjb25zdCBiYXNlID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IHNpZGVCaWFzID0gTWF0aC5hYnModSAtIC41KSAqIDI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBiYXNlLngsXG4gICAgICB5OiBiYXNlLnkgLSBoZWlnaHQgKiAoLjAxOCArIHNpZGVCaWFzICogLjAxOCksXG4gICAgICB3aWR0aDogMSArIHNpZGVCaWFzICogLjcsXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgc2lkZUJpYXMgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxBY2NlbnRQaW5rLFxuICAgICAgZ2xvdzogLjI0LFxuICAgICAgaW50ZW5zaXR5OiAuMDcgKyBnbG93UHVsc2UgKiAuMDM1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKGluZGV4ICogMS43KSAqIC4xMixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsU2lkZVBhbmVscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3Qgc2lkZSBvZiBbMCwgMV0pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTAsIDEuNjgpO1xuICAgICAgY29uc3QgcmFpbCA9IHNpZGUgPT09IDBcbiAgICAgICAgPyBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpXG4gICAgICAgIDogbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgICAgY29uc3Qgb3V0d2FyZCA9IHNpZGUgPT09IDAgPyAtMSA6IDE7XG4gICAgICBjb25zdCBmbGlja2VyID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNjAwICsgaW5kZXggKiAxLjUgKyBzaWRlKSAqIC4yODtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB4OiByYWlsLnggKyBvdXR3YXJkICogd2lkdGggKiAoLjAzNSArIHQgKiAuMDYpLFxuICAgICAgICB5OiByYWlsLnkgLSBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDEyKSxcbiAgICAgICAgd2lkdGg6IDEuMiArIHQgKiAxLjIsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyB0ICogLjA4KSxcbiAgICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICAgIGdsb3c6IC4zLFxuICAgICAgICBpbnRlbnNpdHk6ICguMDc1ICsgdCAqIC4wNjUpICogZmxpY2tlcixcbiAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxFbmVyZ3lUcmFjZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4xMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMTE2O1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS43KSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA9PT0gMCA/IC4xOCA6IGluZGV4ICUgNCA9PT0gMSA/IC4zNCA6IGluZGV4ICUgNCA9PT0gMiA/IC42NiA6IC44MjtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgc2lkZSArIE1hdGguc2luKGluZGV4ICogMS43ICsgdGltZU1zIC8gMTcwMCkgKiAuMDM1KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gMzkwICsgaW5kZXggKiAxLjEpICogLjM4O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogLjggKyBpbmRleCAlIDMgKiAuNSxcbiAgICAgIGhlaWdodDogMTAgKyBpbmRleCAlIDUgKiA3LFxuICAgICAgY29sb3I6IGluZGV4ICUgNSA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxNdXRlZEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgKGluZGV4ICUgNCkgKiAuMDE4KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkR2xvd2luZ0xpbmUoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGNvbG9yOiBzdHJpbmcsIGFscGhhOiBudW1iZXIsIHRoaWNrbmVzczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGR4ID0gYi54IC0gYS54O1xuICBjb25zdCBkeSA9IGIueSAtIGEueTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBpdGVtcy5wdXNoKHtcbiAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgIHdpZHRoOiB0aGlja25lc3MsXG4gICAgaGVpZ2h0OiBsZW5ndGggLyAyLFxuICAgIGNvbG9yLFxuICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS53aGl0ZUhvdCxcbiAgICBnbG93OiAuMzIsXG4gICAgaW50ZW5zaXR5OiBhbHBoYSxcbiAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsZXJwUG9pbnQoYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHQ6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIHJldHVybiB7IHg6IGEueCArIChiLnggLSBhLngpICogdCwgeTogYS55ICsgKGIueSAtIGEueSkgKiB0IH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25Qcm9qZWN0aWxlU2hhcGUgPSBcImRhcnRcIiB8IFwibmVlZGxlXCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByb2plY3RpbGVPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WD86IG51bWJlcjtcbiAgdmVsb2NpdHlZPzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGxlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg/OiBudW1iZXI7XG4gIHRyYWlsV2lkdGg/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgc2hhcGU/OiBOZW9uUHJvamVjdGlsZVNoYXBlO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJvamVjdGlsZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2ZWxvY2l0eVg6IG51bWJlcjtcbiAgdmVsb2NpdHlZOiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhaWxXaWR0aDogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB0cmFpbENvbG9yOiBzdHJpbmc7XG4gIGNvcmVDb2xvcjogc3RyaW5nO1xuICBzaGFwZTogTmVvblByb2plY3RpbGVTaGFwZTtcbiAgaW50ZW5zaXR5OiBudW1iZXI7XG4gIGdsb3c6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uUHJvamVjdGlsZU9wdGlvbnMpIHtcbiAgICB0aGlzLng9b3B0aW9ucy54O3RoaXMueT1vcHRpb25zLnk7dGhpcy52ZWxvY2l0eVg9b3B0aW9ucy52ZWxvY2l0eVg/PzA7dGhpcy52ZWxvY2l0eVk9b3B0aW9ucy52ZWxvY2l0eVk/Py01MDA7XG4gICAgdGhpcy5yYWRpdXM9b3B0aW9ucy5yYWRpdXM/PzM7dGhpcy5sZW5ndGg9b3B0aW9ucy5sZW5ndGg/Pzk7dGhpcy50cmFpbExlbmd0aD1vcHRpb25zLnRyYWlsTGVuZ3RoPz8xNjt0aGlzLnRyYWlsV2lkdGg9b3B0aW9ucy50cmFpbFdpZHRoPz8xLjU7XG4gICAgdGhpcy5jb2xvcj1vcHRpb25zLmNvbG9yO3RoaXMudHJhaWxDb2xvcj1vcHRpb25zLnRyYWlsQ29sb3I/P29wdGlvbnMuY29sb3I7dGhpcy5jb3JlQ29sb3I9b3B0aW9ucy5jb3JlQ29sb3I/P29wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5zaGFwZT1vcHRpb25zLnNoYXBlPz9cImRhcnRcIjt0aGlzLmludGVuc2l0eT1vcHRpb25zLmludGVuc2l0eT8/MTt0aGlzLmdsb3c9b3B0aW9ucy5nbG93Pz8uNzU7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eVggKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHlZICogZGVsdGFTZWNvbmRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpbWl0aXZlcygpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIGNvbnN0IHNwbGl0ID0gdGhpcy5zaGFwZSA9PT0gXCJzcGxpdEJvbHRcIjtcbiAgICBjb25zdCBuZWVkbGUgPSB0aGlzLnNoYXBlID09PSBcIm5lZWRsZVwiO1xuICAgIGNvbnN0IHNsdWcgPSB0aGlzLnNoYXBlID09PSBcInNsdWdcIjtcbiAgICBjb25zdCBpdGVtczogTmVvblByaW1pdGl2ZVtdID0gW3tcbiAgICAgIHg6dGhpcy54LHk6dGhpcy55LXRoaXMudmVsb2NpdHlZL01hdGguYWJzKHRoaXMudmVsb2NpdHlZfHwxKSp0aGlzLnRyYWlsTGVuZ3RoKi41LFxuICAgICAgd2lkdGg6dGhpcy50cmFpbFdpZHRoLGhlaWdodDp0aGlzLnRyYWlsTGVuZ3RoLGNvbG9yOnRoaXMudHJhaWxDb2xvcixzZWNvbmRhcnlDb2xvcjp0aGlzLmNvbG9yLFxuICAgICAgZ2xvdzp0aGlzLmdsb3cqLjYsaW50ZW5zaXR5OnRoaXMuaW50ZW5zaXR5Ki43MixzaGFwZTpcImJvbHRcIixcbiAgICB9XTtcbiAgICBjb25zdCB3aWR0aD1zbHVnP3RoaXMucmFkaXVzKjEuNTpuZWVkbGU/dGhpcy5yYWRpdXMqLjY1OnRoaXMucmFkaXVzO1xuICAgIGNvbnN0IGhlaWdodD1zbHVnP3RoaXMubGVuZ3RoKi43NTp0aGlzLmxlbmd0aDtcbiAgICBjb25zdCBhZGQ9KG9mZnNldDpudW1iZXIpPT5pdGVtcy5wdXNoKHt4OnRoaXMueCtvZmZzZXQseTp0aGlzLnksd2lkdGgsaGVpZ2h0LGNvbG9yOnRoaXMuY29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb3JlQ29sb3IsZ2xvdzp0aGlzLmdsb3csaW50ZW5zaXR5OnRoaXMuaW50ZW5zaXR5LHNoYXBlOm5lZWRsZT9cImNpcmNsZVwiOlwiYm9sdFwifSk7XG4gICAgaWYoc3BsaXQpe2FkZCgtdGhpcy5yYWRpdXMqLjcpO2FkZCh0aGlzLnJhZGl1cyouNyl9ZWxzZSBhZGQoMCk7XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblZpY3RvcnlPcHRpb25zIHtcbiAgY2VudGVyWDogbnVtYmVyO1xuICBjZW50ZXJZOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBwYXJ0aWNsZUNvdW50PzogbnVtYmVyO1xuICBkdXJhdGlvbk1zPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblZpY3RvcnlFeHBlcmllbmNlIHtcbiAgcmVhZG9ubHkgc3RhcnRlZEF0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgcmVhZG9ubHkgb3B0aW9uczogTmVvblZpY3RvcnlPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25WaWN0b3J5T3B0aW9ucywgc3RhcnRlZEF0ID0gcGVyZm9ybWFuY2Uubm93KCkpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3RhcnRlZEF0ID0gc3RhcnRlZEF0O1xuICAgIHRoaXMuZHVyYXRpb25NcyA9IG9wdGlvbnMuZHVyYXRpb25NcyA/PyA0MjAwO1xuICB9XG5cbiAgZ2V0IGNvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRlZEF0ID49IHRoaXMuZHVyYXRpb25NcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMobm93ID0gcGVyZm9ybWFuY2Uubm93KCkpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLm1heCgwLCBub3cgLSB0aGlzLnN0YXJ0ZWRBdCk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCBlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbk1zKTtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZUNvdW50ID8/IDkwO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtuZW9uUGFsZXR0ZS5jeWFuLCBuZW9uUGFsZXR0ZS5waW5rLCBuZW9uUGFsZXR0ZS5nb2xkLCBuZW9uUGFsZXR0ZS5ncmVlbiwgbmVvblBhbGV0dGUudmlvbGV0LCBuZW9uUGFsZXR0ZS5vcmFuZ2VdO1xuICAgIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc2VlZCA9IGluZGV4ICogOTEuNzM7XG4gICAgICBjb25zdCBkZWxheSA9IChpbmRleCAlIDEyKSAqIDAuMDM1O1xuICAgICAgY29uc3QgbG9jYWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwcm9ncmVzcyAqIDEuMzUgLSBkZWxheSkpO1xuICAgICAgaWYgKGxvY2FsIDw9IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYW5nbGUgPSAoKHNlZWQgJSAzNjApIC8gMTgwKSAqIE1hdGguUEk7XG4gICAgICBjb25zdCBzcGVlZCA9IDAuMjIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDI2MDtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5zaW4oc2VlZCkgKiB0aGlzLm9wdGlvbnMud2lkdGggKiAwLjA2ICogbG9jYWw7XG4gICAgICBjb25zdCB4ID0gdGhpcy5vcHRpb25zLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLm9wdGlvbnMud2lkdGggKiBzcGVlZCAqIGxvY2FsICsgZHJpZnQ7XG4gICAgICBjb25zdCB5ID0gdGhpcy5vcHRpb25zLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLm9wdGlvbnMuaGVpZ2h0ICogc3BlZWQgKiBsb2NhbCArIHRoaXMub3B0aW9ucy5oZWlnaHQgKiAwLjQyICogbG9jYWwgKiBsb2NhbDtcbiAgICAgIGNvbnN0IGZhZGUgPSBNYXRoLm1heCgwLCAxIC0gbG9jYWwgKiAwLjcyKTtcbiAgICAgIGNvbnN0IHNpemUgPSAyLjUgKyAoaW5kZXggJSA1KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHgsIHksXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUgKiAoMS44ICsgaW5kZXggJSAzKSxcbiAgICAgICAgY29sb3I6IGNvbG9yc1tpbmRleCAlIGNvbG9ycy5sZW5ndGhdLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogY29sb3JzWyhpbmRleCArIDIpICUgY29sb3JzLmxlbmd0aF0sXG4gICAgICAgIGdsb3c6IDAuNTUsXG4gICAgICAgIGludGVuc2l0eTogZmFkZSxcbiAgICAgICAgc2hhcGU6IGluZGV4ICUgNCA9PT0gMCA/IFwic3BhcmtcIiA6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiB0aGlzLm9wdGlvbnMuY2VudGVyWCxcbiAgICAgIHk6IHRoaXMub3B0aW9ucy5jZW50ZXJZLFxuICAgICAgd2lkdGg6IDgwICsgcHJvZ3Jlc3MgKiAxODAsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGUuY3lhbixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gICAgICBnbG93OiAwLjU1ICogKDEgLSBwcm9ncmVzcyksXG4gICAgICBpbnRlbnNpdHk6IE1hdGgubWF4KDAsIDEgLSBwcm9ncmVzcyksXG4gICAgICBzaGFwZTogXCJyaW5nXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIENvbWJhdFR1bmluZyB7XG4gIC8qKlxuICAgKiBNdWx0aXBsaWVzIHRoZSB3aG9sZSBjb21iYXQgc2ltdWxhdGlvbiBwYWNlIHdoaWxlIHByZXNlcnZpbmcgcmVsYXRpdmVcbiAgICogdGltaW5nIGJldHdlZW4gbW92ZW1lbnQsIGNvb2xkb3ducywgcHJvamVjdGlsZXMsIGFuZCBhdXRob3JlZCB0cmFjayBiZWF0cy5cbiAgICovXG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgY29tYmF0VHVuaW5nID0ge1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IDIuMCxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIENvbWJhdFR1bmluZztcblxuaWYgKCFOdW1iZXIuaXNGaW5pdGUoY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllcikgfHwgY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllciA8PSAwKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvbWJhdFR1bmluZzogZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIG11c3QgYmUgYSBwb3NpdGl2ZSBmaW5pdGUgbnVtYmVyLlwiKTtcbn1cbiIsICJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFtaWx5RGVmaW5pdGlvbjxUTWVtYmVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGZhbWlseUlkOiBzdHJpbmc7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gIGFic3RyYWN0IHJlYWRvbmx5IG1lbWJlcnM6IFRNZW1iZXJzO1xuXG4gIHByb3RlY3RlZCByZXF1aXJlKGNvbmRpdGlvbjogdW5rbm93biwgbWVzc2FnZTogc3RyaW5nKTogYXNzZXJ0cyBjb25kaXRpb24ge1xuICAgIGlmICghY29uZGl0aW9uKSB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy5mYW1pbHlJZH06ICR7bWVzc2FnZX1gKTtcbiAgfVxuXG4gIGFic3RyYWN0IHZhbGlkYXRlKCk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hvdFBhdHRlcm4gPSBcInNpbmdsZVwiIHwgXCJyYXBpZFNpbmdsZVwiIHwgXCJidXJzdFwiIHwgXCJoZWF2eVNpbmdsZVwiIHwgXCJwYWlyZWRTcHJlYWRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVCZWhhdmlvciA9IFwic3RyYWlnaHRcIiB8IFwicGllcmNpbmdTdHJhaWdodFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZVNoYXBlID0gXCJuZWVkbGVcIiB8IFwiZGFydFwiIHwgXCJzbHVnXCIgfCBcInNwbGl0Qm9sdFwiO1xuZXhwb3J0IHR5cGUgTXV6emxlRWZmZWN0ID0gXCJjcmlzcFN0YXJcIiB8IFwicmFwaWRGbGlja2VyXCIgfCBcImdyb3VwZWRQdWxzZVwiIHwgXCJzaG9ja0RpYW1vbmRcIiB8IFwidHdpblByb25nc1wiO1xuZXhwb3J0IHR5cGUgSW1wYWN0RWZmZWN0ID0gXCJwaW5TcGFya1wiIHwgXCJuZWVkbGVTY2F0dGVyXCIgfCBcImJ1cnN0Q3Jvc3NcIiB8IFwiaW1wYWN0UmluZ1wiIHwgXCJzcGxpdFJpcHBsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1bkxldmVsIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZmlyZVJhdGVQZXJTZWNvbmQ6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHByb2plY3RpbGVTcGVlZDogbnVtYmVyO1xuICBwcm9qZWN0aWxlUmFkaXVzOiBudW1iZXI7XG4gIHByb2plY3RpbGVDb3VudDogbnVtYmVyO1xuICBidXJzdENvdW50OiBudW1iZXI7XG4gIGJ1cnN0SW50ZXJ2YWxNczogbnVtYmVyO1xuICBzcHJlYWREZWdyZWVzOiBudW1iZXI7XG4gIHBpZXJjZTogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXJFdmVyeU50aFNob3Q6IG51bWJlcjtcbiAgaW1wYWN0UmFkaXVzPzogbnVtYmVyO1xuICBrbm9ja2JhY2s6IG51bWJlcjtcbiAgbXV6emxlRmxhc2hTY2FsZTogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVmlzdWFsSWRlbnRpdHkge1xuICBzaWxob3VldHRlOiBzdHJpbmc7XG4gIG1vdGlvbkxhbmd1YWdlOiBzdHJpbmc7XG4gIHByb2plY3RpbGVTaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBwcm9qZWN0aWxlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHRyYWlsQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHJvamVjdGlsZUFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIG11enpsZUVmZmVjdDogTXV6emxlRWZmZWN0O1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgbXV6emxlRHVyYXRpb25NczogbnVtYmVyO1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIGhvcml6b250YWxKaXR0ZXI6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICB1bmxvY2tQaGFzZTogXCJzdGFydFwiIHwgXCJmaXJzdEJ1aWxkXCIgfCBcInByZXNzdXJlXCI7XG4gIHNob3RQYXR0ZXJuOiBTaG90UGF0dGVybjtcbiAgcHJvamVjdGlsZUJlaGF2aW9yOiBQcm9qZWN0aWxlQmVoYXZpb3I7XG4gIHZpc3VhbElkZW50aXR5OiBHdW5WaXN1YWxJZGVudGl0eTtcbiAgbGV2ZWxzOiByZWFkb25seSBHdW5MZXZlbFtdO1xufVxuXG5jb25zdCBsZXZlbCA9IChcbiAgbGV2ZWxOdW1iZXI6IG51bWJlcixcbiAgdmFsdWVzOiBPbWl0PEd1bkxldmVsLCBcImxldmVsXCIgfCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCI+ICZcbiAgICBQYXJ0aWFsPFBpY2s8R3VuTGV2ZWwsIFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIiB8IFwiaW1wYWN0UmFkaXVzXCI+Pixcbik6IEd1bkxldmVsID0+ICh7XG4gIGxldmVsOiBsZXZlbE51bWJlcixcbiAgcHJvamVjdGlsZUNvdW50OiAxLFxuICBidXJzdENvdW50OiAxLFxuICBidXJzdEludGVydmFsTXM6IDAsXG4gIHNwcmVhZERlZ3JlZXM6IDAsXG4gIHBpZXJjZTogMCxcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiAwLFxuICBrbm9ja2JhY2s6IDAsXG4gIC4uLnZhbHVlcyxcbn0pO1xuXG5leHBvcnQgY2xhc3MgR3VuRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwiZ3VuXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJHdW5cIjtcbiAgcmVhZG9ubHkgaW1wbGVtZW50YXRpb24gPSB7XG4gICAgYXV0b0ZpcmVzOiB0cnVlLFxuICAgIHRhcmdldGluZzogXCJsYW5lRm9yd2FyZFwiLFxuICAgIHByb2plY3RpbGVNb2RlbDogXCJraW5lbWF0aWNcIixcbiAgICBjb2xsaXNpb25Nb2RlbDogXCJjaXJjbGVWc0VuZW15XCIsXG4gICAgYWxsb3dlZFNob3RQYXR0ZXJuczogW1wic2luZ2xlXCIsIFwicmFwaWRTaW5nbGVcIiwgXCJidXJzdFwiLCBcImhlYXZ5U2luZ2xlXCIsIFwicGFpcmVkU3ByZWFkXCJdIHNhdGlzZmllcyBTaG90UGF0dGVybltdLFxuICAgIGFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzOiBbXCJzdHJhaWdodFwiLCBcInBpZXJjaW5nU3RyYWlnaHRcIl0gc2F0aXNmaWVzIFByb2plY3RpbGVCZWhhdmlvcltdLFxuICB9IGFzIGNvbnN0O1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgcHVsc2VQaXN0b2w6IHtcbiAgICAgIGxhYmVsOiBcIlB1bHNlIFBpc3RvbFwiLCByYXJpdHk6IFwic3RhcnRlclwiLCB1bmxvY2tQaGFzZTogXCJzdGFydFwiLCBzaG90UGF0dGVybjogXCJzaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInRpbnlCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY2xlYW5TaW5nbGVTaG90XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJjeWFuXCIsIHRyYWlsQ29sb3I6IFwiZGVlcEJsdWVcIiwgY29yZUNvbG9yOiBcImN5YW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMi44LCB0cmFpbFdpZHRoU2NhbGU6IDAuNjUsIHZpc3VhbEludGVuc2l0eTogMC45LCBtdXp6bGVFZmZlY3Q6IFwiY3Jpc3BTdGFyXCIsIGltcGFjdEVmZmVjdDogXCJwaW5TcGFya1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA3MiwgaW1wYWN0RHVyYXRpb25NczogMTA1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NTQwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjc1LGRhbWFnZToxLjE1LHByb2plY3RpbGVTcGVlZDo1ODAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouOH0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoyLjE1LGRhbWFnZToxLjM1LHByb2plY3RpbGVTcGVlZDo2MjAscHJvamVjdGlsZVJhZGl1czozLjI1LHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6Ljc1LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBuZWVkbGVyU21nOiB7XG4gICAgICBsYWJlbDogXCJOZWVkbGVyIFNNR1wiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwicmFwaWRTaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNwcmF5U3BoZXJlXCIsIG1vdGlvbkxhbmd1YWdlOiBcInN0b2NoYXN0aWNOZWVkbGVTcHJheVwiLCBwcm9qZWN0aWxlU2hhcGU6IFwibmVlZGxlXCIsIHByb2plY3RpbGVDb2xvcjogXCJncmVlblwiLCB0cmFpbENvbG9yOiBcImN5YW5cIiwgY29yZUNvbG9yOiBcImdyZWVuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDEsIHRyYWlsV2lkdGhTY2FsZTogMC4yOCwgdmlzdWFsSW50ZW5zaXR5OiAwLjc4LCBtdXp6bGVFZmZlY3Q6IFwicmFwaWRGbGlja2VyXCIsIGltcGFjdEVmZmVjdDogXCJuZWVkbGVTY2F0dGVyXCIsIG11enpsZUR1cmF0aW9uTXM6IDQ2LCBpbXBhY3REdXJhdGlvbk1zOiA4NSwgaG9yaXpvbnRhbEppdHRlcjogNyB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjUuMjUsZGFtYWdlOi40Mixwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTAsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouMzUsaGl0Rmxhc2hTY2FsZTouNDV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6Ny4yNSxkYW1hZ2U6LjQ4LHByb2plY3RpbGVTcGVlZDo3MzUscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MS41LHRyYWlsTGVuZ3RoOjExLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjQsaGl0Rmxhc2hTY2FsZTouNX0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDo5LjI1LGRhbWFnZTouNTQscHJvamVjdGlsZVNwZWVkOjc4MCxwcm9qZWN0aWxlUmFkaXVzOjIuMTUsc3ByZWFkRGVncmVlczoyLHRyYWlsTGVuZ3RoOjEyLHRyYWNlckV2ZXJ5TnRoU2hvdDo0LG11enpsZUZsYXNoU2NhbGU6LjQ1LGhpdEZsYXNoU2NhbGU6LjU1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgYnVyc3RDYXJiaW5lOiB7XG4gICAgICBsYWJlbDogXCJCdXJzdCBDYXJiaW5lXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJidXJzdFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic2hvcnRUcmFjZXJCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiZ3JvdXBlZFZvbGxleVwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ29sZFwiLCB0cmFpbENvbG9yOiBcIm9yYW5nZVwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjIsIHRyYWlsV2lkdGhTY2FsZTogMC44LCB2aXN1YWxJbnRlbnNpdHk6IDEuMDUsIG11enpsZUVmZmVjdDogXCJncm91cGVkUHVsc2VcIiwgaW1wYWN0RWZmZWN0OiBcImJ1cnN0Q3Jvc3NcIiwgbXV6emxlRHVyYXRpb25NczogODYsIGltcGFjdER1cmF0aW9uTXM6IDEyMCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi45NSxkYW1hZ2U6Ljc1LHByb2plY3RpbGVTcGVlZDo2NTAscHJvamVjdGlsZVJhZGl1czoyLjc1LGJ1cnN0Q291bnQ6MyxidXJzdEludGVydmFsTXM6NzIsc3ByZWFkRGVncmVlczouNzUsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNTUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4wOCxkYW1hZ2U6Ljg1LHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLjg1LGJ1cnN0Q291bnQ6MyxidXJzdEludGVydmFsTXM6NjQsc3ByZWFkRGVncmVlczouNzUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNixoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi45LHByb2plY3RpbGVTcGVlZDo3MjUscHJvamVjdGlsZVJhZGl1czozLGJ1cnN0Q291bnQ6NCxidXJzdEludGVydmFsTXM6NTgsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjE3LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgaGVhdnlDYW5ub246IHtcbiAgICAgIGxhYmVsOiBcIkhlYXZ5IENhbm5vblwiLCByYXJpdHk6IFwidW5jb21tb25cIiwgdW5sb2NrUGhhc2U6IFwicHJlc3N1cmVcIiwgc2hvdFBhdHRlcm46IFwiaGVhdnlTaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInBpZXJjaW5nU3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwiY2h1bmt5Qm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJzbG93SGVhdnlQdW5jaFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwic2x1Z1wiLCBwcm9qZWN0aWxlQ29sb3I6IFwib3JhbmdlXCIsIHRyYWlsQ29sb3I6IFwicmVkXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDEuMzUsIHRyYWlsV2lkdGhTY2FsZTogMS4zNSwgdmlzdWFsSW50ZW5zaXR5OiAxLjIsIG11enpsZUVmZmVjdDogXCJzaG9ja0RpYW1vbmRcIiwgaW1wYWN0RWZmZWN0OiBcImltcGFjdFJpbmdcIiwgbXV6emxlRHVyYXRpb25NczogMTM1LCBpbXBhY3REdXJhdGlvbk1zOiAxOTAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouNzIsZGFtYWdlOjIuNCxwcm9qZWN0aWxlU3BlZWQ6NTAwLHByb2plY3RpbGVSYWRpdXM6NC41LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjIyLGltcGFjdFJhZGl1czoxNCxrbm9ja2JhY2s6MTQsbXV6emxlRmxhc2hTY2FsZToxLjEsaGl0Rmxhc2hTY2FsZToxLjI1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOi44MixkYW1hZ2U6Myxwcm9qZWN0aWxlU3BlZWQ6NTM1LHByb2plY3RpbGVSYWRpdXM6NC43NSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyNCxpbXBhY3RSYWRpdXM6MTYsa25vY2tiYWNrOjE4LG11enpsZUZsYXNoU2NhbGU6MS4yLGhpdEZsYXNoU2NhbGU6MS4zNX0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDouOSxkYW1hZ2U6My42LHByb2plY3RpbGVTcGVlZDo1NzAscHJvamVjdGlsZVJhZGl1czo1LHBpZXJjZToyLHRyYWlsTGVuZ3RoOjI2LGltcGFjdFJhZGl1czoxOCxrbm9ja2JhY2s6MjIsbXV6emxlRmxhc2hTY2FsZToxLjMsaGl0Rmxhc2hTY2FsZToxLjV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzcGxpdHRlclJpZmxlOiB7XG4gICAgICBsYWJlbDogXCJTcGxpdHRlciBSaWZsZVwiLCByYXJpdHk6IFwidW5jb21tb25cIiwgdW5sb2NrUGhhc2U6IFwicHJlc3N1cmVcIiwgc2hvdFBhdHRlcm46IFwicGFpcmVkU3ByZWFkXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJwYWlyZWRCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImN1cnJlbnRMYW5lRm9ya1wiLCBwcm9qZWN0aWxlU2hhcGU6IFwic3BsaXRCb2x0XCIsIHByb2plY3RpbGVDb2xvcjogXCJ2aW9sZXRcIiwgdHJhaWxDb2xvcjogXCJwaW5rXCIsIGNvcmVDb2xvcjogXCJ2aW9sZXRcIiwgcHJvamVjdGlsZUFzcGVjdDogMy40LCB0cmFpbFdpZHRoU2NhbGU6IDAuNTUsIHZpc3VhbEludGVuc2l0eTogMSwgbXV6emxlRWZmZWN0OiBcInR3aW5Qcm9uZ3NcIiwgaW1wYWN0RWZmZWN0OiBcInNwbGl0UmlwcGxlXCIsIG11enpsZUR1cmF0aW9uTXM6IDk1LCBpbXBhY3REdXJhdGlvbk1zOiAxNDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOCxwcm9qZWN0aWxlU3BlZWQ6NTg1LHByb2plY3RpbGVSYWRpdXM6Mi43NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZTouOTUscHJvamVjdGlsZVNwZWVkOjYyNSxwcm9qZWN0aWxlUmFkaXVzOjIuODUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjU1LGRhbWFnZToxLjA1LHByb2plY3RpbGVTcGVlZDo2NjUscHJvamVjdGlsZVJhZGl1czozLHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6My41LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6Ljc1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgZ3VuXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkU2hvdFBhdHRlcm5zLmluY2x1ZGVzKGd1bi5zaG90UGF0dGVybiksIGAke2lkfSBoYXMgYW4gdW5zdXBwb3J0ZWQgc2hvdCBwYXR0ZXJuLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnMuaW5jbHVkZXMoZ3VuLnByb2plY3RpbGVCZWhhdmlvciksIGAke2lkfSBoYXMgYW4gdW5zdXBwb3J0ZWQgcHJvamVjdGlsZSBiZWhhdmlvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcHJvamVjdGlsZSBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHRyYWlsIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zID4gMCAmJiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RHVyYXRpb25NcyA+IDAsIGAke2lkfSBlZmZlY3QgZHVyYXRpb25zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLmxldmVscy5sZW5ndGggPiAwLCBgJHtpZH0gbXVzdCBkZWZpbmUgbGV2ZWxzLmApO1xuICAgICAgZm9yIChjb25zdCB0dW5pbmcgb2YgZ3VuLmxldmVscykge1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmZpcmVSYXRlUGVyU2Vjb25kID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBmaXJlIHJhdGUgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5kYW1hZ2UgPiAwICYmIHR1bmluZy5wcm9qZWN0aWxlU3BlZWQgPiAwICYmIHR1bmluZy5wcm9qZWN0aWxlUmFkaXVzID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBwcm9qZWN0aWxlIHBvd2VyLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJ1cnN0Q291bnQgPj0gMSAmJiB0dW5pbmcucHJvamVjdGlsZUNvdW50ID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgY291bnRzLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ3VuRmFtaWx5ID0gbmV3IEd1bkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIEd1bklkID0ga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcmJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgYmFzZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICByaW1Db2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhZG93Q29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBPcmJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJvcmJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIk9yYiBFbmVteVwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGJhc2ljT3JiOiB7XG4gICAgICBsYWJlbDogXCJCYXNpYyBPcmJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIGdsb3c6IDAuODIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogMC4yOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS4yNSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAwLjcyLFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA5MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS44LFxuICAgICAgc2hhcGVab29tOiAzLjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEd1bklkIH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tMZWdlbmRFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQmFsYW5jZSB7XG4gIGVuZW15SHA6IG51bWJlcjtcbiAgZW5lbXlTcGVlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRGVmaW5pdGlvbiB7XG4gIGxheW91dDogc3RyaW5nO1xuICBsZWdlbmQ6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIFRyYWNrTGVnZW5kRW50cnk+PjtcbiAgYmFsYW5jZTogVHJhY2tCYWxhbmNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZHVyYXRpb25TZWNvbmRzOiBudW1iZXI7XG4gIHN0YXJ0aW5nR3VuOiBHdW5JZDtcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSB8IDIgfCAzO1xuICB2aWV3cG9ydDoge1xuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCI7XG4gICAgYXNwZWN0V2lkdGg6IG51bWJlcjtcbiAgICBhc3BlY3RIZWlnaHQ6IG51bWJlcjtcbiAgICBsb2dpY2FsV2lkdGg6IG51bWJlcjtcbiAgICBsb2dpY2FsSGVpZ2h0OiBudW1iZXI7XG4gIH07XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGRlZmluaXRpb246IFRyYWNrRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFja0VudGl0eSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgbGFuZUluZGV4OiBudW1iZXI7XG4gIHJvd0luZGV4OiBudW1iZXI7XG4gIGRpc3RhbmNlRnJvbVBsYXllcjogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuY29uc3QgaXNFbmVteSA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PiBpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IFBhcnNlZFRyYWNrRW50aXR5W10ge1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGZvciAoY29uc3QgW3N5bWJvbCwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKHRyYWNrLmxlZ2VuZCkpIHtcbiAgICBpZiAoWy4uLnN5bWJvbF0ubGVuZ3RoICE9PSAxIHx8IC9cXHN8XFx8Ly50ZXN0KHN5bWJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIGtleSBcIiR7c3ltYm9sfVwiIG11c3QgYmUgb25lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBvdGhlciB0aGFuIFwifFwiLmApO1xuICAgIH1cbiAgICBpZiAoIWVudHJ5LmlkKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBtdXN0IGhhdmUgYW4gaWQuYCk7XG4gICAgaWYgKGVudHJ5LnNwZWVkICE9PSB1bmRlZmluZWQgJiYgZW50cnkuc3BlZWQgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuXG4gIGxldCBsZWZ0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGV0IHJpZ2h0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcblxuICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBwaXBlQ291bnQgPSBbLi4ucm93LnRleHRdLmZpbHRlcihjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyID09PSBcInxcIikubGVuZ3RoO1xuICAgIGlmIChwaXBlQ291bnQgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IG11c3QgY29udGFpbiBleGFjdGx5IG9uZSBcInxcIiBzZXBhcmF0b3I7IGZvdW5kICR7cGlwZUNvdW50fS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gcm93LnRleHQuc3BsaXQoXCJ8XCIpLm1hcChzaWRlID0+IHNpZGUucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgICBsZWZ0V2lkdGggPz89IGxlZnQubGVuZ3RoO1xuICAgIHJpZ2h0V2lkdGggPz89IHJpZ2h0Lmxlbmd0aDtcblxuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gbGVmdFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgbGVmdCB3aWR0aCAke2xlZnQubGVuZ3RofTsgZXhwZWN0ZWQgJHtsZWZ0V2lkdGh9LmApO1xuICAgIH1cbiAgICBpZiAocmlnaHQubGVuZ3RoICE9PSByaWdodFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgcmlnaHQgd2lkdGggJHtyaWdodC5sZW5ndGh9OyBleHBlY3RlZCAke3JpZ2h0V2lkdGh9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3RhbmNlRnJvbVBsYXllciA9IHJvd3MubGVuZ3RoIC0gMSAtIHJvd0luZGV4O1xuICAgIGZvciAoY29uc3QgW3NpZGUsIGxhbmVdIG9mIFtbXCJsZWZ0XCIsIGxlZnRdLCBbXCJyaWdodFwiLCByaWdodF1dIGFzIGNvbnN0KSB7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG5cbiAgICAgICAgZW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICBzaWRlLFxuICAgICAgICAgIGxhbmVJbmRleCxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBkaXN0YW5jZUZyb21QbGF5ZXIsXG4gICAgICAgICAgc3BlZWRNdWx0aXBsaWVyOiAoZW50cnkuc3BlZWQgPz8gMSkgKiAoaXNFbmVteShlbnRyeS5pZCkgPyB0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgOiAxKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbnRpdGllcy5zb3J0KChhLCBiKSA9PlxuICAgIGEuZGlzdGFuY2VGcm9tUGxheWVyIC0gYi5kaXN0YW5jZUZyb21QbGF5ZXIgfHxcbiAgICBhLnJvd0luZGV4IC0gYi5yb3dJbmRleCB8fFxuICAgIGEuc2lkZS5sb2NhbGVDb21wYXJlKGIuc2lkZSkgfHxcbiAgICBhLmxhbmVJbmRleCAtIGIubGFuZUluZGV4KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCAxOiBGaXJzdCBHbG93XCIsXHJcbiAgZGVzY3JpcHRpb246IFwiQSBnZW50bGUgb25ib2FyZGluZyBydW46IGVhcmx5IHRlbnNpb24sIGEgcXVpY2sgcG93ZXItdXAgYmVhdCwgdGhlbiBlYXN5IGVzY2FsYXRpbmcgd2F2ZXMgZm9yIGEgZmlyc3QtdGltZSBwbGF5ZXIuXCIsXHJcbiAgZHVyYXRpb25TZWNvbmRzOiAyNSxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4yLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLlMuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDAuNzUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcclxuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDI6IE5lb24gV2FrZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBzZWNvbmQgb25ib2FyZGluZyBydW46IGEgc2xpZ2h0bHkgZGVuc2VyIG9wZW5pbmcsIGVhcmx5IHJlY292ZXJ5IHBpY2t1cHMsIGFuZCBhIGdlbnRsZSBmaW5hbGUgdGhhdCB0ZWFjaGVzIHRoZSBwbGF5ZXIgdG8gdHJ1c3QgdGhlaXIgZ3Jvd2luZyBzcXVhZC5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDMwLFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRy4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5TLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDAuNzUgfSxcclxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDAuOTUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDM6IFByaXNtIFByZXNzdXJlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHRoaXJkIG9uYm9hcmRpbmcgcnVuIHN0cmV0Y2hlcyB0aGUgcGxheWVyXHUyMDE5cyBlbmR1cmFuY2Ugd2l0aCBsb25nZXIgcGFjaW5nLCBzYWZlciB1cGdyYWRlIHdpbmRvd3MsIGFuZCBkZW5zZXIgYnV0IHN0aWxsIGZvcmdpdmluZyBlbmVteSBwYXR0ZXJucy5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDYwLFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi5iIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5KLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlMuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDAuNzUgfSxcclxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiSlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS4wLFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCA0OiBWaW9sZXQgU3VyZ2VcIixcclxuICBkZXNjcmlwdGlvbjogXCJUaGUgZm91cnRoIHJ1biBkb3VibGVzIHRoZSBlbmR1cmFuY2UgdGVzdCBhZ2FpbiwgYWRkaW5nIGRlbnNlciB3YXZlcywgYmlnZ2VyIHBpY2t1cCB0aW1pbmcgZGVjaXNpb25zLCBhbmQgaGlnaGVyLXRpZXIgdG9vbHMgd2hpbGUgc3RheWluZyByZWFkYWJsZSBhbmQgZmFpci5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDEyMCxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuRS4uLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4yLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuUy4uLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5TLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5LLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuRUVFLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRUVFXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlguLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi5jIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG5FRUUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi5FRUVcclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuRUVFLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRUVFXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5YLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbkVFRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAwLjc1IH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC45IH0sXHJcbiAgICAgIFwiS1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiWFwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCIsIHNwZWVkOiAwLjk1IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJjXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5uZWVkbGVSYXBpZXJcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS4wNSxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgfSBmcm9tIFwiLi9UcmFjazFcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGdlbmVyYXRlZFRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgZ2VuZXJhdGVkVHJhY2szIH0gZnJvbSBcIi4vVHJhY2szXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBnZW5lcmF0ZWRUcmFjazQgfSBmcm9tIFwiLi9UcmFjazRcIjtcbi8vIFJlZ2lzdGVyIGEgdHJhY2sgYnkgaW1wb3J0aW5nIGl0IGFuZCBhZGRpbmcgb25lIGVudHJ5IGhlcmUuXG5leHBvcnQgY29uc3QgdHJhY2tzID0ge1xuIFxuICBcInRyYWNrMVwiOiBnZW5lcmF0ZWRUcmFjayxcbiAgXCJ0cmFjazJcIjogZ2VuZXJhdGVkVHJhY2syLFxuICBcInRyYWNrM1wiOiBnZW5lcmF0ZWRUcmFjazMsXG4gIFwidHJhY2s0XCI6IGdlbmVyYXRlZFRyYWNrNCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB7IGdlbmVyYXRlZFRyYWNrLCBnZW5lcmF0ZWRUcmFjazIsIGdlbmVyYXRlZFRyYWNrMywgZ2VuZXJhdGVkVHJhY2s0IH07IFxuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCB0cmFja10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLmR1cmF0aW9uU2Vjb25kcyA+IDAsIGAke2lkfSBkdXJhdGlvbiBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLnZpZXdwb3J0Lm9yaWVudGF0aW9uID09PSBcInBvcnRyYWl0XCIgJiYgdHJhY2sudmlld3BvcnQuYXNwZWN0SGVpZ2h0ID4gdHJhY2sudmlld3BvcnQuYXNwZWN0V2lkdGgsIGAke2lkfSBtdXN0IHVzZSBpdHMgZGVjbGFyZWQgcG9ydHJhaXQgdmlld3BvcnQuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2sudmlld3BvcnQubG9naWNhbFdpZHRoID4gMCAmJiB0cmFjay52aWV3cG9ydC5sb2dpY2FsSGVpZ2h0ID4gMCwgYCR7aWR9IGxvZ2ljYWwgdmlld3BvcnQgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWx5ID0gbmV3IFRyYWNrRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgVHJhY2tJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gTk9UIGZpcmUgb24gYSB0aW1lciBcdTIwMTQgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lIFx1MjAxNCBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIE5PVCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBDYW4gY29leGlzdCB3aXRoIGFuIGFjdGl2ZSBHdW4gYW5kIGFuIGFjdGl2ZSBTaGllbGQgc2ltdWx0YW5lb3VzbHkuXG4gICAqIC0gVGFyZ2V0aW5nIGlzIGxhbmUtYXdhcmUgdmlhIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpLlxuICAgKiAtIFRoZSBzbGFzaCBhbmltYXRpb24gcnVucyBmb3Igc2xhc2hEdXJhdGlvbk1zIG1pbGxpc2Vjb25kcywgdGhlbiBmYWRlcy5cbiAgICogLSBEYW1hZ2UgaXMgYXBwbGllZCBpbW1lZGlhdGVseSB3aGVuIHRoZSBzd2luZyBzdGFydHMgKG5vdCBhdCBhbmltYXRpb24gZW5kKS5cbiAgICpcbiAgICogUHJlY2VkZW5jZTogc3dvcmQgYXR0YWNrcyBvY2N1ciBhZnRlciBzaGllbGRCbG9jay9zaGllbGRQdWxzZSBidXQgYmVmb3JlXG4gICAqIHNoaWVsZENvbnRhY3REYW1hZ2UgYW5kIHNoaWVsZEF1cmEuIFNlZSBtYWluLnRzIG5lYXJQbGF5ZXJFZmZlY3RPcmRlci5cbiAgICovXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgLyoqXG4gICAgICogQXJjIEJsYWRlIFx1MjAxNCBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIEhpdHMgMVx1MjAxMzIgZW5lbWllcyBkZXBlbmRpbmcgb24gYXJjIG92ZXJsYXAuIFNob3J0IGNvb2xkb3duLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuODUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMFx1MjAxMzE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgXHUyMDE0IEhlYXZ5IHN3b3JkLiBTbG93ZXIgYnV0IGhpdHMgbXVsdGlwbGUgY2x1c3RlcmVkIGVuZW1pZXMuXG4gICAgICogV2lkZSBhcmMsIHRoaWNrZXIgc2xhc2guIEJldHRlciBhZ2FpbnN0IHRpZ2h0IGdyb3VwcyB0aGFuIGZhc3Qgc2luZ2xlcy5cbiAgICAgKi9cbiAgICBjbGVhdmVyOiB7XG4gICAgICBsYWJlbDogXCJDbGVhdmVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIHJhbmdlOiA1NixcbiAgICAgIGFyY0RlZ3JlZXM6IDExMCxcbiAgICAgIGRhbWFnZTogMi44LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjgsXG4gICAgICBtYXhUYXJnZXRzOiA0LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJjbHVzdGVyTmVhclBsYXllclwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAyMjAsXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjY1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbmQgd2lkZS4gVGhpY2tlciBhcmMuIFN0cm9uZ2VyIGltcGFjdCBmbGFzaC4gR2VvbWV0cmljIGFuZCBwcm9jZWR1cmFsIFx1MjAxNCBub3QgYSBidWxsZXQuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE5lZWRsZSBSYXBpZXIgXHUyMDE0IFByZWNpc2lvbiBzd29yZC4gTG9uZyByZWFjaCwgbmFycm93IGFyYywgc2luZ2xlIHRhcmdldC5cbiAgICAgKiBQcmlvcml0aXplcyB0aGUgbW9zdCBkYW5nZXJvdXMgKGZyb250LW1vc3QpIGVuZW15LlxuICAgICAqL1xuICAgIG5lZWRsZVJhcGllcjoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlIFJhcGllclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIHJhbmdlOiA3MCxcbiAgICAgIGFyY0RlZ3JlZXM6IDMwLFxuICAgICAgZGFtYWdlOiAyLjIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMSxcbiAgICAgIG1heFRhcmdldHM6IDEsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImZyb250TW9zdFRocmVhdFwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDAuNTUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkVsZWdhbnQgYW5kIHByZWNpc2UuIFRoaW4gc3RhYmJpbmcgbGluZS4gTm90IGEgZ3VuIHNob3QgXHUyMDE0IGl0IG11c3QgZmVlbCBtZWxlZS4gU2luZ2xlIHRhcmdldCBwcmlvcml0eS5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5yYW5nZSA+IDAsIGAke2lkfSByYW5nZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmFyY0RlZ3JlZXMgPiAwICYmIHN3b3JkLmFyY0RlZ3JlZXMgPD0gMzYwLCBgJHtpZH0gYXJjRGVncmVlcyBtdXN0IGJlIGluICgwLCAzNjBdLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZSA+IDAsIGAke2lkfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImV4cG9ydCBpbnRlcmZhY2UgU3F1YWRJbnB1dENhbGxiYWNrcyB7XG4gIGxhbmUoKTogMCB8IDE7XG4gIHNldExhbmUobGFuZTogMCB8IDEpOiB2b2lkO1xuICBzZXRBaW0odmFsdWU6IG51bWJlcik6IHZvaWQ7XG4gIHJlbGVhc2VBaW0oKTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTcXVhZElucHV0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBqb3lzdGljazogc3RyaW5nLFxuICBjYWxsYmFja3M6IFNxdWFkSW5wdXRDYWxsYmFja3MsXG4pOiB2b2lkIHtcbiAgbGV0IHBvaW50ZXJJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxldCBwb2ludGVyU3RhcnRlZFggPSAwO1xuICBsZXQgcG9pbnRlck1vdmVkID0gZmFsc2U7XG4gIGNvbnN0IGFwcGx5UG9pbnRlciA9IChjbGllbnRYOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBib3VuZHMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChjbGllbnRYIC0gYm91bmRzLmxlZnQpIC8gYm91bmRzLndpZHRoKSk7XG4gICAgY29uc3QgbGFuZTogMCB8IDEgPSBub3JtYWxpemVkIDwgLjUgPyAwIDogMTtcbiAgICBpZiAobGFuZSAhPT0gY2FsbGJhY2tzLmxhbmUoKSkgY2FsbGJhY2tzLnNldExhbmUobGFuZSk7XG4gICAgY29uc3QgbGFuZVN0YXJ0ID0gbGFuZSA9PT0gMCA/IDAgOiAuNTtcbiAgICBjb25zdCB3aXRoaW5MYW5lID0gKG5vcm1hbGl6ZWQgLSBsYW5lU3RhcnQpIC8gLjU7XG4gICAgY2FsbGJhY2tzLnNldEFpbSgod2l0aGluTGFuZSAtIC41KSAqIDIpO1xuICB9O1xuICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJhXCIgfHwgZXZlbnQua2V5ID09PSBcIkFcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIGNhbGxiYWNrcy5zZXRMYW5lKDApO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiZFwiIHx8IGV2ZW50LmtleSA9PT0gXCJEXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikgY2FsbGJhY2tzLnNldExhbmUoMSk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3Qoam95c3RpY2spIHx8IHRhcmdldC5jbG9zZXN0KFwiYnV0dG9uLGlucHV0LHNlbGVjdCxhXCIpKSByZXR1cm47XG4gICAgcG9pbnRlcklkID0gZXZlbnQucG9pbnRlcklkO1xuICAgIHBvaW50ZXJTdGFydGVkWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgcG9pbnRlck1vdmVkID0gZmFsc2U7XG4gICAgY29udGFpbmVyLnNldFBvaW50ZXJDYXB0dXJlPy4ocG9pbnRlcklkKTtcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBwb2ludGVyTW92ZWQgfHw9IE1hdGguYWJzKGV2ZW50LmNsaWVudFggLSBwb2ludGVyU3RhcnRlZFgpID4gMztcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb25zdCBlbmRQb2ludGVyID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBpZiAoIXBvaW50ZXJNb3ZlZCkgYXBwbHlQb2ludGVyKGV2ZW50LmNsaWVudFgpO1xuICAgIHBvaW50ZXJJZCA9IG51bGw7XG4gICAgY2FsbGJhY2tzLnJlbGVhc2VBaW0oKTtcbiAgfTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgZW5kUG9pbnRlcik7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb3N0cG9pbnRlcmNhcHR1cmVcIiwgKCkgPT4ge1xuICAgIHBvaW50ZXJJZCA9IG51bGw7XG4gICAgY2FsbGJhY2tzLnJlbGVhc2VBaW0oKTtcbiAgfSk7XG4gIGlmIChtYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oam95c3RpY2spO1xuICAgIGNvbnN0IGtub2IgPSBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi5zdGljay1rbm9iXCIpO1xuICAgIGxldCBqb3lzdGlja1BvaW50ZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGFwcGx5Sm95c3RpY2sgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICBjb25zdCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcmFkaXVzID0gYm91bmRzLndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IHJhdyA9IChldmVudC5jbGllbnRYIC0gKGJvdW5kcy5sZWZ0ICsgcmFkaXVzKSkgLyByYWRpdXM7XG4gICAgICBjb25zdCB4ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHJhdykpO1xuICAgICAgaWYgKGtub2IpIGtub2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3ggKiByYWRpdXMgKiAuNjJ9cHgpLC01MCUpYDtcbiAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguYWJzKHgpO1xuICAgICAgaWYgKG1hZ25pdHVkZSA+PSAuOTUpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkOiAwIHwgMSA9IHggPCAwID8gMCA6IDE7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWQgIT09IGNhbGxiYWNrcy5sYW5lKCkpIGNhbGxiYWNrcy5zZXRMYW5lKHJlcXVlc3RlZCk7XG4gICAgICAgIGNhbGxiYWNrcy5zZXRBaW0oMCk7XG4gICAgICB9IGVsc2UgaWYgKG1hZ25pdHVkZSA8PSAuNSkgY2FsbGJhY2tzLnNldEFpbSh4IC8gLjUpO1xuICAgICAgZWxzZSBjYWxsYmFja3Muc2V0QWltKE1hdGguc2lnbih4KSk7XG4gICAgfTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBqb3lzdGlja1BvaW50ZXIgPSBldmVudC5wb2ludGVySWQ7XG4gICAgICBlbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG4gICAgICBhcHBseUpveXN0aWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnBvaW50ZXJJZCA9PT0gam95c3RpY2tQb2ludGVyKSBhcHBseUpveXN0aWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgICBjb25zdCBlbmRKb3lzdGljayA9IChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBqb3lzdGlja1BvaW50ZXIpIHJldHVybjtcbiAgICAgIGpveXN0aWNrUG9pbnRlciA9IG51bGw7XG4gICAgICBpZiAoa25vYikga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLC01MCUpXCI7XG4gICAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICAgIH07XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRKb3lzdGljayk7XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgZW5kSm95c3RpY2spO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uL011bHRpcGxpZXJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcXVhZFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICByb3c6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFkTW9kZWwge1xuICBsYW5lOiAwIHwgMSA9IDA7XG4gIGNvdW50ID0gMTtcbiAgYWltT2Zmc2V0ID0gMDtcbiAgeCA9IDA7XG4gIHRhcmdldFggPSAwO1xuICBsYW5lU2hpZnRTdGFydGVkQXQgPSAwO1xuXG4gIGFkZChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWluKHNwZWMubWF4U3F1YWRTaXplLCB0aGlzLmNvdW50ICsgYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHJlbW92ZShhbW91bnQgPSAxKTogbnVtYmVyIHtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoMCwgdGhpcy5jb3VudCAtIGFtb3VudCk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBzZXRMYW5lKGxhbmU6IDAgfCAxLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlciwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobGFuZSAhPT0gdGhpcy5sYW5lKSB7XG4gICAgICB0aGlzLmxhbmVTaGlmdFN0YXJ0ZWRBdCA9IG5vdztcbiAgICAgIC8vIFJlc2V0IGFpbSBvZmZzZXQgc28gdGhlIHBsYXllciBzbmFwcyB0byB0aGUgY29ycmVjdCBjb2x1bW4gaW4gdGhlIG5ldyBsYW5lLlxuICAgICAgdGhpcy5haW1PZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLmxhbmUgPSBsYW5lO1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIobGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHNldEFpbShub3JtYWxpemVkOiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWltT2Zmc2V0ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIG5vcm1hbGl6ZWQpKSAqIGxhbmVXaWR0aCAqIC4yODtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIGF1dG9BaW0odGFyZ2V0T2Zmc2V0OiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIC8vIEhpZ2ggbGVycCBmYWN0b3IgKDAuODUpIHNvIGF1dG8tYWltIHNuYXBzIGFsbW9zdCBpbnN0YW50YW5lb3VzbHkgZWFjaCBmcmFtZS5cbiAgICB0aGlzLmFpbU9mZnNldCArPSAoTWF0aC5tYXgoLWxhbmVXaWR0aCAqIC4yOCwgTWF0aC5taW4obGFuZVdpZHRoICogLjI4LCB0YXJnZXRPZmZzZXQpKSAtIHRoaXMuYWltT2Zmc2V0KSAqIC44NTtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gMSAtIE1hdGgucG93KC4wMDAwOCwgZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLnggKz0gKHRoaXMudGFyZ2V0WCAtIHRoaXMueCkgKiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKiBYIG9mZnNldHMgb2YgZWFjaCBjb2x1bW4gaW4gdGhlIGZyb250IHJvdywgcmVsYXRpdmUgdG8gc3F1YWQgY2VudGVyLiAqL1xuICBmcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sIChfLCBjb2wpID0+XG4gICAgICAoY29sIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICk7XG4gIH1cblxuICBwb2ludHMoYmFzZVk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFNxdWFkUG9pbnRbXSB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgY29uc3QgcG9pbnRzOiBTcXVhZFBvaW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCAtIHJvdyAqIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpbmRleCAlIHNwZWMubWVtYmVyc1BlclJvdztcbiAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgeDogdGhpcy54ICsgKGNvbHVtbiAtIChyb3dDb3VudCAtIDEpIC8gMikgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgeTogYmFzZVkgKyByb3cgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQXV0b0FpbVRhcmdldCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9BaW1Db250cm9sU3RhdGUge1xuICBtYW51YWwgPSBmYWxzZTtcblxuICBsYW5lU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgLy8gTGFuZSBjaGFuZ2VzIGFyZSBuYXZpZ2F0aW9uLCBub3QgcGVyc2lzdGVudCBtYW51YWwgYWltaW5nLlxuICB9XG5cbiAgYWltQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gIH1cblxuICBhaW1SZWxlYXNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YWQtY2VudGVyIGFpbSBvZmZzZXQgKHJlbGF0aXZlIHRvIGxhbmVDZW50ZXIpIHRoYXQgYmVzdCBhbGlnbnNcbiAqIG9uZSBvZiB0aGUgc3F1YWQncyBmcm9udC1yb3cgY29sdW1ucyB0byB0aGUgbmVhcmVzdCBlbmVteS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0cyAgICAgICAgIEFsbCBsaXZlIChub24tZHlpbmcpIGVuZW1pZXMgaW4gdGhlIGN1cnJlbnQgbGFuZS5cbiAqIEBwYXJhbSBsYW5lQ2VudGVyICAgICAgUGl4ZWwgWCBvZiB0aGUgbGFuZSdzIGNlbnRlci5cbiAqIEBwYXJhbSBjb2x1bW5PZmZzZXRzICAgWCBvZmZzZXRzIG9mIGVhY2ggZnJvbnQtcm93IGNvbHVtbiByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuXG4gKiBAcGFyYW0gY3VycmVudE9mZnNldCAgIEN1cnJlbnQgc3F1YWQgYWltIG9mZnNldCAoc3F1YWQgY2VudGVyID0gbGFuZUNlbnRlciArIGN1cnJlbnRPZmZzZXQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QXV0b0FpbU9mZnNldChcbiAgdGFyZ2V0czogcmVhZG9ubHkgQXV0b0FpbVRhcmdldFtdLFxuICBsYW5lQ2VudGVyOiBudW1iZXIsXG4gIGNvbHVtbk9mZnNldHM6IHJlYWRvbmx5IG51bWJlcltdLFxuICBjdXJyZW50T2Zmc2V0ID0gMCxcbik6IG51bWJlciB7XG4gIGlmICghdGFyZ2V0cy5sZW5ndGgpIHJldHVybiAwO1xuXG4gIC8vIElkZW50aWZ5IHRoZSBmcm9udCByb3c6IGdyb3VwIHRhcmdldHMgYnkgcm93SWQgKG9yIHRyZWF0IHVuZ3JvdXBlZCB0YXJnZXRzIGFzIGEgc2luZ2xlIHJvdykuXG4gIGNvbnN0IGV4cGxpY2l0Um93cyA9IG5ldyBNYXA8bnVtYmVyLCBBdXRvQWltVGFyZ2V0W10+KCk7XG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0LnJvd0lkID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJvdyA9IGV4cGxpY2l0Um93cy5nZXQodGFyZ2V0LnJvd0lkKSA/PyBbXTtcbiAgICByb3cucHVzaCh0YXJnZXQpO1xuICAgIGV4cGxpY2l0Um93cy5zZXQodGFyZ2V0LnJvd0lkLCByb3cpO1xuICB9XG4gIGNvbnN0IGZyb250Um93ID0gZXhwbGljaXRSb3dzLnNpemVcbiAgICA/IFsuLi5leHBsaWNpdFJvd3MudmFsdWVzKCldLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PlxuICAgICAgICBNYXRoLm1heCguLi5yaWdodC5tYXAodCA9PiB0LnkpKSAtIE1hdGgubWF4KC4uLmxlZnQubWFwKHQgPT4gdC55KSkpWzBdXG4gICAgOiB0YXJnZXRzLmZpbHRlcih0ID0+IE1hdGguYWJzKHQueSAtIE1hdGgubWF4KC4uLnRhcmdldHMubWFwKGMgPT4gYy55KSkpIDwgMyk7XG5cbiAgLy8gRm9yIGVhY2ggZW5lbXkgaW4gdGhlIGZyb250IHJvdyBcdTAwRDcgZWFjaCBzcXVhZCBjb2x1bW4sIGNvbXB1dGUgdGhlIHNxdWFkLWNlbnRlclxuICAvLyBvZmZzZXQgdGhhdCB3b3VsZCBwbGFjZSB0aGF0IGNvbHVtbiBleGFjdGx5IG9uIHRoYXQgZW5lbXkncyBYLlxuICAvLyBQaWNrIHRoZSAoZW5lbXksIGNvbHVtbikgcGFpciB3aG9zZSByZXF1aXJlZCBvZmZzZXQgaXMgY2xvc2VzdCB0byB0aGUgY3VycmVudFxuICAvLyBvZmZzZXQgXHUyMDE0IG1pbmltaXNpbmcgdGhlIGFpbSBtb3ZlbWVudCBuZWVkZWQgd2hpbGUgZ3VhcmFudGVlaW5nIGEgaGl0LlxuICBjb25zdCBjb2xzID0gY29sdW1uT2Zmc2V0cy5sZW5ndGggPiAwID8gY29sdW1uT2Zmc2V0cyA6IFswXTtcbiAgbGV0IGJlc3RPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IGVuZW15IG9mIGZyb250Um93KSB7XG4gICAgZm9yIChjb25zdCBjb2xPZmZzZXQgb2YgY29scykge1xuICAgICAgLy8gc3F1YWRDZW50ZXIgPSBsYW5lQ2VudGVyICsgYWltT2Zmc2V0IFx1MjE5MiBjb2x1bW4gbGFuZHMgYXQgbGFuZUNlbnRlciArIGFpbU9mZnNldCArIGNvbE9mZnNldFxuICAgICAgLy8gV2Ugd2FudCB0aGF0IHRvIGVxdWFsIGVuZW15LnggXHUyMTkyIGFpbU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0XG4gICAgICBjb25zdCBjYW5kaWRhdGVPZmZzZXQgPSBlbmVteS54IC0gbGFuZUNlbnRlciAtIGNvbE9mZnNldDtcbiAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhjYW5kaWRhdGVPZmZzZXQgLSBjdXJyZW50T2Zmc2V0KTtcbiAgICAgIGlmIChkaXN0IDwgYmVzdERpc3QpIHtcbiAgICAgICAgYmVzdERpc3QgPSBkaXN0O1xuICAgICAgICBiZXN0T2Zmc2V0ID0gY2FuZGlkYXRlT2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiZXN0T2Zmc2V0O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSwgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kge1xuICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICBhc3BlY3RIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3Mge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbG9va0FuZ2xlRGVncmVlczogbnVtYmVyO1xuICBmb2xsb3dEaXN0YW5jZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGhvcml6b246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0ZWRTY2VuZSB7XG4gIHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBvcnRyYWl0U3RhZ2Uoc3RhZ2U6IEhUTUxFbGVtZW50LCBwb2xpY3k6IFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kpOiB2b2lkIHtcbiAgc3RhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCItLXN0YWdlLWFzcGVjdFwiLCBgJHtwb2xpY3kuYXNwZWN0V2lkdGh9IC8gJHtwb2xpY3kuYXNwZWN0SGVpZ2h0fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhZ2VOb3JtYWxpemVkWChzdGFnZTogSFRNTEVsZW1lbnQsIGNsaWVudFg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGJvdW5kcyA9IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGNsaWVudFggLSBib3VuZHMubGVmdCkgLyBib3VuZHMud2lkdGgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyA9IHtcbiAgaGVpZ2h0OiAxNzAsXG4gIGxvb2tBbmdsZURlZ3JlZXM6IDIwLFxuICBmb2xsb3dEaXN0YW5jZTogMjU1LFxuICB6b29tOiAuNzMsXG4gIGhvcml6b246IC41NCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclNjZW5lKFxuICBwcmltaXRpdmVzOiByZWFkb25seSBOZW9uUHJpbWl0aXZlW10sXG4gIHNoYXBlczogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgcGxheWVyWTogbnVtYmVyIH0sXG4pOiBQcm9qZWN0ZWRTY2VuZSB7XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgbWluRGVwdGggPSAyMDtcblxuICBjb25zdCBwcm9qZWN0UG9pbnQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHdvcmxkWCA9IHggLSBjZW50ZXJYO1xuICAgIGNvbnN0IHdvcmxkWiA9IHZpZXdwb3J0LnBsYXllclkgLSB5ICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2U7XG4gICAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgICBjb25zdCBjYW1lcmFZID0gcmVsYXRpdmVZICogY29zICsgd29ybGRaICogc2luO1xuICAgIGNvbnN0IGNhbWVyYVogPSBNYXRoLm1heChtaW5EZXB0aCwgd29ybGRaICogY29zIC0gcmVsYXRpdmVZICogc2luKTtcbiAgICBjb25zdCBzY2FsZSA9IGZvY2FsTGVuZ3RoIC8gY2FtZXJhWjtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY2VudGVyWCArIHdvcmxkWCAqIHNjYWxlLFxuICAgICAgeTogaG9yaXpvblkgLSBjYW1lcmFZICogc2NhbGUsXG4gICAgICBzY2FsZSxcbiAgICAgIGRlcHRoOiBjYW1lcmFaLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdGVkUHJpbWl0aXZlcyA9IHByaW1pdGl2ZXMubWFwKHByaW1pdGl2ZSA9PiB7XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLngsIHByaW1pdGl2ZS55KTtcbiAgICBjb25zdCB3aWR0aCA9IHByaW1pdGl2ZS53aWR0aCAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IGhlaWdodCA9IChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCkgKiBwb2ludC5zY2FsZTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJpbWl0aXZlLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0ZWRTaGFwZXMgPSBzaGFwZXNcbiAgICAubWFwKHNoYXBlID0+IHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hhcGUsXG4gICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgIHNpemU6IHNoYXBlLnNpemUgKiBwb2ludC5zY2FsZSxcbiAgICAgICAgejogKHNoYXBlLnogPz8gMCkgLSBwb2ludC5kZXB0aCAqIC4wMDA4LFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiAoKGIueiA/PyAwKSAtIChhLnogPz8gMCkpKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzOiBwcm9qZWN0ZWRQcmltaXRpdmVzLCBzaGFwZXM6IHByb2plY3RlZFNoYXBlcyB9O1xufVxuIiwgImltcG9ydCB7IGdldE5lb25TaGFwZSwgTmVvblNoYXBlQWN0b3IsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UsIHR5cGUgTmVvblNoYXBlTGFiZWwsIHR5cGUgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3Qgc3dhcm1TaGFwZXMgPSB7XG4gIHBsYXllcjogZ2V0TmVvblNoYXBlKFwiYXJyb3ctY2xhc3NpY1wiKSEsXG4gIGVuZW15OiBnZXROZW9uU2hhcGUoXCJodW50ZXItZXllXCIpISxcbiAgbXVsdGlwbGllcjogZ2V0TmVvblNoYXBlKFwiYnJ1aXNlci1jcm9zc1wiKSEsXG4gIGd1blBpY2t1cDogZ2V0TmVvblNoYXBlKFwiaGV4LWZpZ2h0ZXJcIikhLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHBpeGVsc1RvU2hhcGVXb3JsZCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gKHtcbiAgeDogKHggLyBjYW52YXMud2lkdGggLSAuNSkgKiAoY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG4gIHk6ICguNSAtIHkgLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcGl4ZWxTaXplVG9TaGFwZVNjYWxlID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHBpeGVsczogbnVtYmVyKSA9PiBwaXhlbHMgLyBjYW52YXMuaGVpZ2h0ICogMi41O1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0b3JBdFBpeGVscyhhY3RvcjogTmVvblNoYXBlQWN0b3IsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBwaXhlbFNpemU6IG51bWJlciwgb3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICBjb25zdCB3b3JsZCA9IHBpeGVsc1RvU2hhcGVXb3JsZChjYW52YXMsIHgsIHkpO1xuICBhY3Rvci5tb3ZlVG8od29ybGQueCwgd29ybGQueSk7XG4gIGFjdG9yLnNjYWxlID0gcGl4ZWxTaXplVG9TaGFwZVNjYWxlKGNhbnZhcywgcGl4ZWxTaXplKTtcbiAgcmV0dXJuIGFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyk7XG59XG5cbmV4cG9ydCBjb25zdCBhY3RvckluVG9wRG93blNjZW5lID0gKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNpemU6IG51bWJlciwgb3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblRvcERvd25TaGFwZSA9PlxuICAoeyAuLi5hY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpLCB4LCB5LCBzaXplIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hhcGVMYWJlbCA9ICh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uOiBOZW9uU2hhcGVMYWJlbFtcInBvc2l0aW9uXCJdLCBmb250U2l6ZTogbnVtYmVyLCBvZmZzZXQgPSA0KTogTmVvblNoYXBlTGFiZWwgPT5cbiAgKHsgdGV4dCwgcG9zaXRpb24sIGZvbnRTaXplLCBvZmZzZXQsIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIiwgZm9udFdlaWdodDogNzAwIH0pO1xuIiwgIi8qKlxuICogU2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc2hpZWxkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIE9uZSBTaGllbGRTdGF0ZSB0cmFja3MgdGhlIGxpdmUgcnVudGltZSBzdGF0ZSBmb3Igd2hhdGV2ZXIgc2hpZWxkIGlzXG4gKiBjdXJyZW50bHkgZXF1aXBwZWQuIFRoZSB0aWNrU2hpZWxkKCkgZnVuY3Rpb24gZHJpdmVzIGFsbCBiZWhhdmlvcmFsIG1vZGVzXG4gKiAoY2hhcmdlLCBwdWxzZSwgY29udGFjdCwgYXVyYSkgYW5kIHJldHVybnMgYSByZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKlxuICogRGVzaWduIHJ1bGU6IHRoaXMgbW9kdWxlIGRvZXMgbm90IG1vZGlmeSBlbmVteSBhcnJheXMgZGlyZWN0bHkuIEl0IHJldHVybnNcbiAqIGEgU2hpZWxkVGlja1Jlc3VsdCB0aGF0IG1haW4udHMgYXBwbGllcy4gVGhpcyBrZWVwcyB0aGUgc2hpZWxkIHN5c3RlbVxuICogdGVzdGFibGUgYW5kIGNvbXBvc2FibGUgd2l0aCBvdGhlciBuZWFyLXBsYXllciBlZmZlY3RzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgU2hpZWxkSWQsIFNoaWVsZE1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBwdWxzZSBlZmZlY3QgKHZpc3VhbClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVB1bHNlRWZmZWN0IHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBwdWxzZUR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBUaW1lc3RhbXAgd2hlbiB0aGUgcHVsc2Ugd2FzIHRyaWdnZXJlZC4gKi9cbiAgc3RhcnRlZEF0OiBudW1iZXI7XG4gIC8qKiBEdXJhdGlvbiBpbiBtcy4gKi9cbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHRyaWdnZXJlZCkuICovXG4gIHg6IG51bWJlcjtcbiAgLyoqIENlbnRlciB5LiAqL1xuICB5OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhZGl1cyBhdCBwZWFrIGV4cGFuc2lvbi4gKi9cbiAgbWF4UmFkaXVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTaGllbGQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkU3RhdGUge1xuICBzaGllbGRJZDogU2hpZWxkSWQ7XG4gIC8qKiBSZW1haW5pbmcgY2hhcmdlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpLiAqL1xuICBjaGFyZ2VzOiBudW1iZXI7XG4gIC8qKiBTZWNvbmRzIHVudGlsIGNvb2xkb3duIGNvbXBsZXRlcy4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBtcyB0aW1lc3RhbXAgYWZ0ZXIgd2hpY2ggdGhlIGhpdCBmbGFzaCBpcyBkb25lLiAqL1xuICBoaXRGbGFzaFVudGlsOiBudW1iZXI7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMSBvZiBoaXQgZmxhc2ggYW5pbWF0aW9uICgxID0gZG9uZSkuICovXG4gIGhpdEZsYXNoUHJvZ3Jlc3M6IG51bWJlcjtcbiAgLyoqIEFjdGl2ZSBleHBhbmRpbmcgcHVsc2UgcmluZ3MgKFB1bHNlIENvcmUpLiAqL1xuICBwdWxzZUVmZmVjdHM6IEFjdGl2ZVB1bHNlRWZmZWN0W107XG4gIC8qKiBFbmVteSBpZHMgYWxyZWFkeSByZXNvbHZlZCBhZ2FpbnN0IHRoaXMgc2hpZWxkLCBwcmV2ZW50aW5nIHJlcGVhdCBkYW1hZ2UgcGVyIGZyYW1lLiAqL1xuICByZWFkb25seSBpbnRlcmNlcHRlZEVuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3Ioc2hpZWxkSWQ6IFNoaWVsZElkLCBtYXhDaGFyZ2VzOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoaWVsZElkID0gc2hpZWxkSWQ7XG4gICAgdGhpcy5jaGFyZ2VzID0gbWF4Q2hhcmdlcztcbiAgICB0aGlzLmNvb2xkb3duTGVmdCA9IDA7XG4gICAgdGhpcy5oaXRGbGFzaFVudGlsID0gMDtcbiAgICB0aGlzLmhpdEZsYXNoUHJvZ3Jlc3MgPSAxO1xuICAgIHRoaXMucHVsc2VFZmZlY3RzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRDb250YWN0VGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkQ29udGFjdFJlc3VsdCB7XG4gIGNvbnRhY3RlZDogYm9vbGVhbjtcbiAgYWJzb3JiZWQ6IGJvb2xlYW47XG4gIGRhbWFnZUFic29yYmVkOiBudW1iZXI7XG4gIGVuZW15RGVzdHJveWVkOiBib29sZWFuO1xufVxuXG4vKiogUmVzb2x2ZSBvbmUgZ2VvbWV0cmljIGVuZW15L3NoaWVsZCBjb250YWN0IGV4YWN0bHkgb25jZSBmb3IgdGhhdCBlbmVteS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlU2hpZWxkQ29udGFjdChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGFyZ2V0OiBTaGllbGRDb250YWN0VGFyZ2V0LFxuICBzaGllbGRYOiBudW1iZXIsXG4gIHNoaWVsZFk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHNjYWxlID0gMSxcbik6IFNoaWVsZENvbnRhY3RSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZENvbnRhY3RSZXN1bHQgPSB7XG4gICAgY29udGFjdGVkOiBmYWxzZSxcbiAgICBhYnNvcmJlZDogZmFsc2UsXG4gICAgZGFtYWdlQWJzb3JiZWQ6IDAsXG4gICAgZW5lbXlEZXN0cm95ZWQ6IGZhbHNlLFxuICB9O1xuICBpZiAodGFyZ2V0LmR5aW5nIHx8IHN0YXRlLmludGVyY2VwdGVkRW5lbXlJZHMuaGFzKHRhcmdldC5pZCkpIHJldHVybiByZXN1bHQ7XG4gIGNvbnN0IHJhZGl1cyA9IHNoaWVsZC5yYWRpdXMgKiBzY2FsZSArIHRhcmdldC5yYWRpdXM7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBzaGllbGRYO1xuICBjb25zdCBkeSA9IHRhcmdldC55IC0gc2hpZWxkWTtcbiAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gcmFkaXVzICogcmFkaXVzKSByZXR1cm4gcmVzdWx0O1xuXG4gIHJlc3VsdC5jb250YWN0ZWQgPSB0cnVlO1xuICBzdGF0ZS5pbnRlcmNlcHRlZEVuZW15SWRzLmFkZCh0YXJnZXQuaWQpO1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIGNvbnN0IGFic29yYmVkID0gTWF0aC5taW4oc3RhdGUuY2hhcmdlcywgdGFyZ2V0LmhlYWx0aCk7XG4gIHN0YXRlLmNoYXJnZXMgLT0gYWJzb3JiZWQ7XG4gIHRhcmdldC5oZWFsdGggLT0gYWJzb3JiZWQ7XG4gIHN0YXRlLmhpdEZsYXNoVW50aWwgPSBub3cgKyAyODA7XG4gIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSAwO1xuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICByZXN1bHQuYWJzb3JiZWQgPSB0cnVlO1xuICByZXN1bHQuZGFtYWdlQWJzb3JiZWQgPSBhYnNvcmJlZDtcbiAgcmVzdWx0LmVuZW15RGVzdHJveWVkID0gdGFyZ2V0LmhlYWx0aCA8PSAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgcmVzdWx0IFx1MjAxNCB3aGF0IG1haW4udHMgc2hvdWxkIGFwcGx5IHRoaXMgZnJhbWVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZFRpY2tSZXN1bHQge1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIHJlY2VpdmUgY29udGFjdERhbWFnZSB0aGlzIGZyYW1lIChjb250YWN0IHNoaWVsZHMpLiAqL1xuICBjb250YWN0RGFtYWdlRW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogQW1vdW50IG9mIGNvbnRhY3QgZGFtYWdlIHBlciBlbmVteS4gKi9cbiAgY29udGFjdERhbWFnZUFtb3VudDogbnVtYmVyO1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIGhhdmUgdGhlaXIgc3BlZWQgbXVsdGlwbGllZCBieSBzbG93TXVsdGlwbGllciAoYXVyYSkuICovXG4gIHNsb3dFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBFZmZlY3RpdmUgc2xvdyBtdWx0aXBsaWVyIHRvIGFwcGx5LiAqL1xuICBzbG93TXVsdGlwbGllcjogbnVtYmVyO1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHNoaWVsZCBhYnNvcmJlZCBhIGhpdCB0aGlzIGZyYW1lIChjaGFyZ2UgY29uc3VtZWQpLlxuICAgKiBtYWluLnRzIHNob3VsZCBOT1Qga2lsbC9kYW1hZ2UgdGhlIHBsYXllciBmb3IgdGhhdCBjb2xsaXNpb24uXG4gICAqL1xuICBhYnNvcmJlZEhpdDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuZW15IElEcyB0byBwdXNoIGF3YXkgZnJvbSB0aGUgcGxheWVyIGNlbnRlciAocHVsc2Ugc2hpZWxkKS5cbiAgICogbWFpbi50cyBzaG91bGQgYWRkIHB1c2hEaXN0YW5jZSB0byB0aGUgZW5lbXkncyBvdXR3YXJkIHZlbG9jaXR5IG9yIHBvc2l0aW9uLlxuICAgKi9cbiAgcHVzaEVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIFB1c2ggZGlzdGFuY2UgaW4gcHguICovXG4gIHB1c2hEaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBQVUxTRV9EVVJBVElPTl9NUyA9IDYwMDtcblxuLyoqXG4gKiBEcml2ZXMgdGhlIHNoaWVsZCBmb3Igb25lIGdhbWUgZnJhbWUuXG4gKlxuICogQHBhcmFtIHN0YXRlICAgICAgIE11dGFibGUgc2hpZWxkIHN0YXRlIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSBzaGllbGQgICAgICBJbW11dGFibGUgc2hpZWxkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgICAgTmVhcmJ5IHRocmVhdHMgZnJvbSBxdWVyeU5lYXJieVRocmVhdHMoKSAocmFuZ2UgPSBzaGllbGQucmFkaXVzKS5cbiAqIEBwYXJhbSBwbGF5ZXJYICAgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeCAoZm9yIHB1bHNlIG9yaWdpbikuXG4gKiBAcGFyYW0gcGxheWVyWSAgICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHkuXG4gKiBAcGFyYW0gbm93ICAgICAgICAgQ3VycmVudCB0aW1lc3RhbXAgaW4gbXMuXG4gKiBAcGFyYW0gZGVsdGEgICAgICAgRnJhbWUgZGVsdGEgaW4gc2Vjb25kcy5cbiAqIEByZXR1cm5zICAgICAgICAgICBBY3Rpb25zIGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGlja1NoaWVsZChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbik6IFNoaWVsZFRpY2tSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZFRpY2tSZXN1bHQgPSB7XG4gICAgY29udGFjdERhbWFnZUVuZW15SWRzOiBbXSxcbiAgICBjb250YWN0RGFtYWdlQW1vdW50OiAwLFxuICAgIHNsb3dFbmVteUlkczogW10sXG4gICAgc2xvd011bHRpcGxpZXI6IDEuMCxcbiAgICBhYnNvcmJlZEhpdDogZmFsc2UsXG4gICAgcHVzaEVuZW15SWRzOiBbXSxcbiAgICBwdXNoRGlzdGFuY2U6IDAsXG4gIH07XG5cbiAgLy8gQWR2YW5jZSBjb29sZG93blxuICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0ID4gMCkgc3RhdGUuY29vbGRvd25MZWZ0ID0gTWF0aC5tYXgoMCwgc3RhdGUuY29vbGRvd25MZWZ0IC0gZGVsdGEpO1xuXG4gIC8vIFVwZGF0ZSBwdWxzZSBwcm9ncmVzc1xuICBmb3IgKGNvbnN0IHB1bHNlIG9mIHN0YXRlLnB1bHNlRWZmZWN0cykge1xuICAgIHB1bHNlLnByb2dyZXNzID0gKG5vdyAtIHB1bHNlLnN0YXJ0ZWRBdCkgLyBwdWxzZS5kdXJhdGlvbk1zO1xuICB9XG4gIHN0YXRlLnB1bHNlRWZmZWN0cyA9IHN0YXRlLnB1bHNlRWZmZWN0cy5maWx0ZXIocCA9PiBwLnByb2dyZXNzIDwgMSk7XG5cbiAgLy8gQWR2YW5jZSBoaXQgZmxhc2hcbiAgaWYgKHN0YXRlLmhpdEZsYXNoVW50aWwgPiAwKSB7XG4gICAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IE1hdGgubWluKDEsIChub3cgLSAoc3RhdGUuaGl0Rmxhc2hVbnRpbCAtIDI4MCkpIC8gMjgwKTtcbiAgfVxuXG4gIC8vIFJlZmlsbCBjaGFyZ2VzIHdoZW4gY29vbGRvd24gY29tcGxldGVzIChjaGFyZ2UtYmFzZWQgc2hpZWxkcylcbiAgaWYgKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiICYmIHN0YXRlLmNvb2xkb3duTGVmdCA9PT0gMCAmJiBzdGF0ZS5jaGFyZ2VzIDwgc2hpZWxkLm1heENoYXJnZXMpIHtcbiAgICBzdGF0ZS5jaGFyZ2VzID0gc2hpZWxkLm1heENoYXJnZXM7XG4gIH1cblxuICBpZiAodGhyZWF0cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IGNvbnRhY3QgXHUyMDE0IGRlYWwgZGFtYWdlIHRvIGVuZW1pZXMgdG91Y2hpbmcgdGhlIHNoaWVsZCBlZGdlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICByZXN1bHQuY29udGFjdERhbWFnZUFtb3VudCA9IHNoaWVsZC5jb250YWN0RGFtYWdlO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogYXVyYSBcdTIwMTQgc2xvdyBlbmVtaWVzIGluc2lkZSByYWRpdXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIHJlc3VsdC5zbG93TXVsdGlwbGllciA9IHNoaWVsZC5zbG93TXVsdGlwbGllcjtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LnNsb3dFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IHB1bHNlIFx1MjAxNCBlbWl0IHB1c2ggcmluZyB3aGVuIGFueSBlbmVteSBlbnRlcnMgcmFuZ2VcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIC8vIFRyaWdnZXIgcHVsc2VcbiAgICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICAgIGNvbnN0IHB1bHNlOiBBY3RpdmVQdWxzZUVmZmVjdCA9IHtcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc3RhcnRlZEF0OiBub3csXG4gICAgICBkdXJhdGlvbk1zOiBQVUxTRV9EVVJBVElPTl9NUyxcbiAgICAgIHg6IHBsYXllclgsXG4gICAgICB5OiBwbGF5ZXJZLFxuICAgICAgbWF4UmFkaXVzOiBzaGllbGQucmFkaXVzICogMS44LFxuICAgICAgY29sb3I6IFwiXCIsIC8vIGZpbGxlZCBieSBkcmF3IGNvZGUgd2l0aCBuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdXG4gICAgfTtcbiAgICBzdGF0ZS5wdWxzZUVmZmVjdHMucHVzaChwdWxzZSk7XG4gICAgcmVzdWx0LnB1c2hEaXN0YW5jZSA9IHNoaWVsZC5wdXNoRGlzdGFuY2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5wdXNoRW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGl0IGFic29ycHRpb24gXHUyMDE0IGNhbGxlZCBieSBtYWluLnRzIHdoZW4gYW4gZW5lbXkgd291bGQgdG91Y2ggdGhlIHBsYXllclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQXR0ZW1wdCB0byBhYnNvcmIgYSBoaXQgdXNpbmcgc2hpZWxkIGNoYXJnZXMuXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhpdCB3YXMgYWJzb3JiZWQgKGNoYXJnZSBjb25zdW1lZCksIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyeUFic29yYkhpdChzdGF0ZTogU2hpZWxkU3RhdGUsIHNoaWVsZDogU2hpZWxkTWVtYmVyLCBub3c6IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gZmFsc2U7XG4gIHN0YXRlLmNoYXJnZXMgLT0gMTtcbiAgc3RhdGUuaGl0Rmxhc2hVbnRpbCA9IG5vdyArIDI4MDtcbiAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IDA7XG4gIC8vIFJlY2hhcmdlIGJlZ2lucyBhZnRlciB0aGUgbW9zdCByZWNlbnQgYWJzb3JiZWQgaGl0LiBLZWVwaW5nIHRoZSBjb29sZG93blxuICAvLyBhY3RpdmUgcHJldmVudHMgdGlja1NoaWVsZCgpIGZyb20gaW1tZWRpYXRlbHkgcmVzdG9yaW5nIGEgcGFydGlhbGx5XG4gIC8vIGRlcGxldGVkIHNoaWVsZCBvbiB0aGUgbmV4dCBmcmFtZS5cbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgcmV0dXJuIHRydWU7XG59XG4iLCAiLyoqXG4gKiBTd29yZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHN3b3JkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZSB0aWNrIGZ1bmN0aW9uIG9ubHkgdHJpZ2dlcnMgYSBzd2luZ1xuICogd2hlbiBhIHZhbGlkIHRhcmdldCBleGlzdHMgaW4gcmFuZ2UgYW5kIHRoZSBjb29sZG93biBpcyByZWFkeS4gSXQgaWRsZXMgc2lsZW50bHlcbiAqIHdoZW4gbm8gdGFyZ2V0IGlzIHByZXNlbnQuXG4gKlxuICogRGVzaWduIHJ1bGU6IHNhbWUgYXMgc2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBubyBkaXJlY3QgZW5lbXkgbXV0YXRpb24uIFJldHVybnMgYVxuICogU3dvcmRUaWNrUmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5cbmltcG9ydCB0eXBlIHsgU3dvcmRJZCwgU3dvcmRNZW1iZXIsIFN3b3JkVGFyZ2V0aW5nTW9kZSB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgdHlwZSB7IE5lYXJieVRocmVhdCB9IGZyb20gXCIuL25lYXJieVRocmVhdFF1ZXJ5XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWN0aXZlIHNsYXNoIGFuaW1hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlU2xhc2hBbmltYXRpb24ge1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEuIERyaXZlbiBieSAobm93IC0gc3RhcnRlZEF0KSAvIGR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeCAoc25hcHNob3Qgb2YgcGxheWVyIHBvc2l0aW9uIHdoZW4gc3dpbmcgb2NjdXJyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgLyoqIFJlYWNoIG9mIHRoZSBhcmMgaW4gcGl4ZWxzLiAqL1xuICByZWFjaDogbnVtYmVyO1xuICAvKiogQXJjIHdpZHRoIGluIGRlZ3JlZXMuICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIENvbG9yLiAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKiogVGhpY2tuZXNzIG11bHRpcGxpZXIuICovXG4gIHRoaWNrbmVzczogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFN3b3JkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkU3RhdGUge1xuICBzd29yZElkOiBTd29yZElkO1xuICAvKiogU2Vjb25kcyByZW1haW5pbmcgdW50aWwgdGhlIHN3b3JkIGNhbiBzd2luZyBhZ2Fpbi4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgc2xhc2ggYW5pbWF0aW9uLCBpZiBhbnkuICovXG4gIGFjdGl2ZVNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc3dvcmRJZDogU3dvcmRJZCkge1xuICAgIHRoaXMuc3dvcmRJZCA9IHN3b3JkSWQ7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSAwO1xuICAgIHRoaXMuYWN0aXZlU2xhc2ggPSBudWxsO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgaGl0IGJ5IHRoZSBzd2luZyB0aGlzIGZyYW1lLiBFbXB0eSBpZiBubyBzd2luZyBvY2N1cnJlZC4gKi9cbiAgaGl0RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogRGFtYWdlIHRvIGFwcGx5IHRvIGVhY2ggaGl0IGVuZW15LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgYSBuZXcgc2xhc2ggd2FzIHRyaWdnZXJlZCB0aGlzIGZyYW1lIChmb3IgYXVkaW8sIGV0Yy4pLiAqL1xuICBzd2luZ1RyaWdnZXJlZDogYm9vbGVhbjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUYXJnZXRpbmcgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldHMoXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBtb2RlOiBTd29yZFRhcmdldGluZ01vZGUsXG4gIG1heFRhcmdldHM6IG51bWJlcixcbik6IE5lYXJieVRocmVhdFtdIHtcbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCI6XG4gICAgY2FzZSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIjpcbiAgICAgIC8vIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIGFscmVhZHkgcmV0dXJucyBzb3J0ZWQgYnkgZGlzdGFuY2VcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgY2FzZSBcImZyb250TW9zdFRocmVhdFwiOlxuICAgICAgLy8gSGlnaGVzdCB5ID0gbW9zdCBhZHZhbmNlZCB0b3dhcmQgcGxheWVyXG4gICAgICByZXR1cm4gWy4uLnRocmVhdHNdLnNvcnQoKGEsIGIpID0+IGIudGFyZ2V0LnkgLSBhLnRhcmdldC55KS5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJjbHVzdGVyTmVhclBsYXllclwiOlxuICAgICAgLy8gQWxyZWFkeSBzb3J0ZWQgYnkgZGlzdGFuY2UgXHUyMDE0IHRha2UgbmVhcmVzdCBjbHVzdGVyXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIERyaXZlcyB0aGUgc3dvcmQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgTXV0YWJsZSBzd29yZCBzdGF0ZS5cbiAqIEBwYXJhbSBzd29yZCAgICAgSW1tdXRhYmxlIHN3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgIE5lYXJieSB0aHJlYXRzIGluIHJhbmdlIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gKiBAcGFyYW0gcGxheWVyWCAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4LlxuICogQHBhcmFtIHBsYXllclkgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgVGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIGNvbG9yICAgICBSZXNvbHZlZCBoZXggY29sb3IgKGZyb20gbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTd29yZChcbiAgc3RhdGU6IFN3b3JkU3RhdGUsXG4gIHN3b3JkOiBTd29yZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbik6IFN3b3JkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU3dvcmRUaWNrUmVzdWx0ID0ge1xuICAgIGhpdEVuZW15SWRzOiBbXSxcbiAgICBkYW1hZ2U6IDAsXG4gICAgc3dpbmdUcmlnZ2VyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIC8vIEFkdmFuY2UgY29vbGRvd25cbiAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdCA+IDApIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWF4KDAsIHN0YXRlLmNvb2xkb3duTGVmdCAtIGRlbHRhKTtcblxuICAvLyBBZHZhbmNlIGFjdGl2ZSBzbGFzaCBhbmltYXRpb25cbiAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoKSB7XG4gICAgc3RhdGUuYWN0aXZlU2xhc2gucHJvZ3Jlc3MgPSAobm93IC0gc3RhdGUuYWN0aXZlU2xhc2guc3RhcnRlZEF0KSAvIHN0YXRlLmFjdGl2ZVNsYXNoLmR1cmF0aW9uTXM7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoLnByb2dyZXNzID49IDEpIHN0YXRlLmFjdGl2ZVNsYXNoID0gbnVsbDtcbiAgfVxuXG4gIC8vIFN3b3JkcyBvbmx5IHN3aW5nIHdoZW4gYSB0YXJnZXQgZXhpc3RzIGluIHJhbmdlIEFORCBjb29sZG93biBpcyByZWFkeS5cbiAgLy8gVGhpcyBpcyB0aGUga2V5IGRpZmZlcmVuY2UgZnJvbSBndW5zLCB3aGljaCBmaXJlIG9uIGEgcGVyaW9kIHJlZ2FyZGxlc3MuXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwIHx8IHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIFNlbGVjdCB0YXJnZXRzXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0VGFyZ2V0cyh0aHJlYXRzLCBzd29yZC50YXJnZXRpbmdNb2RlLCBzd29yZC5tYXhUYXJnZXRzKTtcbiAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBUcmlnZ2VyIHN3aW5nXG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHN3b3JkLmNvb2xkb3duU2Vjb25kcztcbiAgcmVzdWx0LnN3aW5nVHJpZ2dlcmVkID0gdHJ1ZTtcbiAgcmVzdWx0LmRhbWFnZSA9IHN3b3JkLmRhbWFnZTtcbiAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHNlbGVjdGVkKSByZXN1bHQuaGl0RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuXG4gIC8vIFN0YXJ0IHNsYXNoIGFuaW1hdGlvblxuICBzdGF0ZS5hY3RpdmVTbGFzaCA9IHtcbiAgICBwcm9ncmVzczogMCxcbiAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICBkdXJhdGlvbk1zOiBzd29yZC5zbGFzaER1cmF0aW9uTXMsXG4gICAgeDogcGxheWVyWCxcbiAgICB5OiBwbGF5ZXJZLFxuICAgIHJlYWNoOiBzd29yZC5yYW5nZSAqIDAuNzUsIC8vIEFyYyByZWFjaCBpcyBhIGZyYWN0aW9uIG9mIGRldGVjdGlvbiByYW5nZVxuICAgIGFyY0RlZ3JlZXM6IHN3b3JkLmFyY0RlZ3JlZXMsXG4gICAgY29sb3IsXG4gICAgdGhpY2tuZXNzOiBzd29yZC5zbGFzaFRoaWNrbmVzcyxcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwgIi8qKlxuICogTmVhcmJ5VGhyZWF0UXVlcnkgXHUyMDE0IHNoYXJlZCBsYW5lLWF3YXJlIGVuZW15IHF1ZXJ5IGZvciBzaGllbGQgYW5kIHN3b3JkIGZhbWlsaWVzLlxuICpcbiAqIEJvdGggc2hpZWxkcyBhbmQgc3dvcmRzIG9wZXJhdGUgbmVhciB0aGUgcGxheWVyLCBzbyB0aGV5IHNoYXJlIHRoaXMgbW9kdWxlXG4gKiB0byBhdm9pZCBpbmRlcGVuZGVudCwgcG90ZW50aWFsbHkgY29uZmxpY3Rpbmcgc2NhbnMuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgaW50ZW50aW9uYWxseSBtaW5pbWFsLiBJdCBwcm92aWRlcyBlbm91Z2ggc3RydWN0dXJlIHRvIGJlXG4gKiBmdXR1cmUtZnJpZW5kbHkgKG9yaWdpblNoYXBlIGluZGV4LCBjb2x1bW4tYmFuZCBhd2FyZW5lc3MpIHdpdGhvdXRcbiAqIG92ZXItYnVpbGRpbmcuIEV4dGVuZCB3aGVuIG5lZWRlZCBcdTIwMTQgZG8gbm90IHJlZmFjdG9yIHByZW1hdHVyZWx5LlxuICpcbiAqIE5lYXItcGxheWVyIGVmZmVjdCBwcmVjZWRlbmNlIChhcHBsaWVkIGJ5IG1haW4udHMpOlxuICogICAxLiBzaGllbGRCbG9jayAgICAgICAgXHUyMDE0IGNoYXJnZS1iYXNlZCBoaXQgYWJzb3JwdGlvblxuICogICAyLiBzaGllbGRQdWxzZSAgICAgICAgXHUyMDE0IGVtZXJnZW5jeSBwdXNoXG4gKiAgIDMuIHN3b3JkQXR0YWNrICAgICAgICBcdTIwMTQgc3dvcmQgZmFtaWx5XG4gKiAgIDQuIHNoaWVsZENvbnRhY3REYW1hZ2UgXHUyMDE0IGNvbnRhY3QgZGFtYWdlIG9uIHNoaWVsZCBlZGdlXG4gKiAgIDUuIHNoaWVsZEF1cmEgICAgICAgICBcdTIwMTQgc2xvdy9kZWJ1ZmYgYXVyYVxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogTWluaW1hbCBlbmVteSBpbnRlcmZhY2UgZXhwZWN0ZWQgYnkgdGhlIHRocmVhdCBxdWVyeSBzeXN0ZW0uICovXG5leHBvcnQgaW50ZXJmYWNlIFRocmVhdFRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IDAgfCAxO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgU2hpZWxkTWVtYmVyLCBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5VmlzdWFsU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5jb25zdCBlbXB0eVNjZW5lID0gKCk6IEZhbWlseVZpc3VhbFNjZW5lID0+ICh7IHByaW1pdGl2ZXM6IFtdLCBzaGFwZXM6IFtdIH0pO1xuY29uc3QgcmVxdWlyZWRTaGFwZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7aWR9XCIgaXMgcmVxdWlyZWQgYnkgZmFtaWx5IHZpc3VhbHMuYCk7XG4gIHJldHVybiBzaGFwZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFNoaWVsZE1lbWJlcjtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgaW5pdGlhbFN0cmVuZ3RoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGhpdFByb2dyZXNzPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWVsZFZpc3VhbHMob3B0aW9uczogU2hpZWxkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGNvbnN0IHtcbiAgICBkZWZpbml0aW9uLCB4LCB5LCBub3csXG4gICAgc2NhbGUgPSAxLFxuICAgIGhpdFByb2dyZXNzID0gMSxcbiAgICB2aXNpYmxlID0gdHJ1ZSxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0cmVuZ3RoID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5zdHJlbmd0aCk7XG4gIGNvbnN0IGluaXRpYWxTdHJlbmd0aCA9IE1hdGgubWF4KDEsIG9wdGlvbnMuaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgaW1wYWN0ID0gTWF0aC5tYXgoMCwgMSAtIGhpdFByb2dyZXNzKTtcbiAgY29uc3QgZXhwbG9kaW5nID0gc3RyZW5ndGggPD0gMCAmJiBoaXRQcm9ncmVzcyA8IDE7XG4gIGNvbnN0IGNvbG9yID0gbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl07XG4gIGNvbnN0IHJhZGl1cyA9IGRlZmluaXRpb24ucmFkaXVzICogc2NhbGU7XG5cbiAgaWYgKHZpc2libGUgfHwgZXhwbG9kaW5nKSB7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzaGllbGQtcmluZ1wiKSxcbiAgICAgIHgsIHksXG4gICAgICBzaXplOiByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEgKyBpbXBhY3QgKiAuOCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMTUgKyBpbXBhY3QgKiAxLjUsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQyICsgaW1wYWN0ICogLjMsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4xNSArIGltcGFjdCAqIDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiAuNSArIGltcGFjdCAqIC4zNSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogZXhwbG9kaW5nID8gTWF0aC5taW4oMSwgaGl0UHJvZ3Jlc3MpIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IC45LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IG9yYml0ZXJTaGFwZSA9IHJlcXVpcmVkU2hhcGUoZGVmaW5pdGlvbi5vcmJpdGVyU2hhcGUgPT09IFwiaGV4XCIgPyBcImhleC1maWdodGVyXCIgOiBcInN0YXItY29yZVwiKTtcbiAgY29uc3Qgb3JiaXRlckNvdW50ID0gTWF0aC5jZWlsKGRlZmluaXRpb24ub3JiaXRlckNvdW50ICogc3RyZW5ndGggLyBpbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJICogMiAvIGRlZmluaXRpb24ub3JiaXRlckNvdW50O1xuICBjb25zdCBiYXNlQW5nbGUgPSBub3cgLyAxMDAwICogZGVmaW5pdGlvbi5vcmJpdGVyU3BlZWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JiaXRlckNvdW50OyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9IGJhc2VBbmdsZSArIGkgKiBhbmdsZVN0ZXA7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IG9yYml0ZXJTaGFwZSxcbiAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICB5OiB5ICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxuICAgICAgc2l6ZTogZGVmaW5pdGlvbi5vcmJpdGVyU2l6ZSAqIDEuOCAqIHNjYWxlLFxuICAgICAgY29sb3IsXG4gICAgICByb3RhdGlvblo6IGFuZ2xlICsgbm93IC8gMTQwMCxcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNCxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjI1LFxuICAgICAgZW5lcmd5QmxlZWQ6IC41LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTd29yZE1lbWJlcjtcbiAgc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3dvcmRUcmFpbChzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24sIHNjYWxlOiBudW1iZXIpOiBOZW9uUHJpbWl0aXZlW10ge1xuICBpZiAoc2xhc2gucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFtdO1xuICBjb25zdCBsaWZlID0gMSAtIHNsYXNoLnByb2dyZXNzO1xuICBjb25zdCByYWRpdXMgPSBzbGFzaC5yZWFjaCAqIHNjYWxlO1xuICBjb25zdCBoYWxmQXJjID0gc2xhc2guYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IGhlYWRpbmcgPSAtTWF0aC5QSSAvIDI7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDE7XG4gIGNvbnN0IGJsYWRlQW5nbGUgPSBoZWFkaW5nIC0gaGFsZkFyYyArIHN3ZWVwICogaGFsZkFyYyAqIDI7XG4gIGNvbnN0IHRyYWlsTGVuZ3RoID0gaGFsZkFyYyAqICguNTUgKyBsaWZlICogLjc1KTtcbiAgY29uc3QgdGhpY2tuZXNzID0gc2xhc2gudGhpY2tuZXNzICogc2NhbGU7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkrKykge1xuICAgIGNvbnN0IGFnZSA9IGkgLyAxMDtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGgubWF4KGhlYWRpbmcgLSBoYWxmQXJjLCBibGFkZUFuZ2xlIC0gdHJhaWxMZW5ndGggKiBhZ2UpO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gcmFkaXVzICogKC43MiArIE1hdGguc2luKGFnZSAqIE1hdGguUEkpICogLjA4KTtcbiAgICBjb25zdCBmYWRlID0gTWF0aC5wb3coMSAtIGFnZSwgMS4zNSkgKiBsaWZlO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBzbGFzaC54ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB5OiBzbGFzaC55ICsgTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB3aWR0aDogTWF0aC5tYXgoLjgsIHRoaWNrbmVzcyAqICgyLjQgLSBhZ2UgKiAxLjU1KSksXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqICguMjQgLSBhZ2UgKiAuMSksXG4gICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICBnbG93OiAxLjE1ICogZmFkZSxcbiAgICAgIGludGVuc2l0eTogMS40NSAqIGZhZGUsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogYW5nbGUgKyBNYXRoLlBJIC8gMixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGxlYWRpbmdYID0gc2xhc2gueCArIE1hdGguY29zKGJsYWRlQW5nbGUpICogcmFkaXVzICogLjgyO1xuICBjb25zdCBsZWFkaW5nWSA9IHNsYXNoLnkgKyBNYXRoLnNpbihibGFkZUFuZ2xlKSAqIHJhZGl1cyAqIC44MjtcbiAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICB4OiBsZWFkaW5nWCwgeTogbGVhZGluZ1ksXG4gICAgd2lkdGg6IE1hdGgubWF4KDEuMiwgdGhpY2tuZXNzICogMi44KSxcbiAgICBoZWlnaHQ6IHJhZGl1cyAqIC4zMixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IHNsYXNoLmNvbG9yLFxuICAgIGdsb3c6IDEuNCAqIGxpZmUsXG4gICAgaW50ZW5zaXR5OiAxLjcgKiBsaWZlLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogYmxhZGVBbmdsZSArIE1hdGguUEkgLyAyLFxuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcgJiYgc2xhc2gucHJvZ3Jlc3MgPCAuNzsgaSsrKSB7XG4gICAgY29uc3Qgc3ByZWFkID0gKGkgLSAzKSAqIC4xMztcbiAgICBjb25zdCBzcGFya0xpZmUgPSBsaWZlICogKDEgLSBNYXRoLmFicyhpIC0gMykgKiAuMDgpO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBsZWFkaW5nWCArIE1hdGguY29zKGJsYWRlQW5nbGUgKyBzcHJlYWQpICogcmFkaXVzICogKC4wNCArIGkgKiAuMDEyKSxcbiAgICAgIHk6IGxlYWRpbmdZICsgTWF0aC5zaW4oYmxhZGVBbmdsZSArIHNwcmVhZCkgKiByYWRpdXMgKiAoLjA0ICsgaSAqIC4wMTIpLFxuICAgICAgd2lkdGg6IE1hdGgubWF4KC43LCB0aGlja25lc3MgKiAuNzUpLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAoLjA4ICsgaSAlIDMgKiAuMDI1KSxcbiAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGdsb3c6IDEuMSAqIHNwYXJrTGlmZSxcbiAgICAgIGludGVuc2l0eTogMS4yNSAqIHNwYXJrTGlmZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBibGFkZUFuZ2xlICsgc3ByZWFkLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dvcmRWaXN1YWxzKG9wdGlvbnM6IFN3b3JkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGlmICghb3B0aW9ucy52aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IHsgZGVmaW5pdGlvbiwgc2xhc2gsIHgsIHksIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaGFsZkFyYyA9IGRlZmluaXRpb24uYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2ggPyAoc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDEpIDogLjU7XG4gIGNvbnN0IHN3b3JkQW5nbGUgPSAtTWF0aC5QSSAvIDIgLSBoYWxmQXJjICsgc3dlZXAgKiBoYWxmQXJjICogMjtcbiAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic3Bpa2UtbGFuY2VcIiksXG4gICAgeCwgeSxcbiAgICBzaXplOiBNYXRoLm1pbigxNywgZGVmaW5pdGlvbi5yYW5nZSAqIC4yOCkgKiBzY2FsZSxcbiAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgcm90YXRpb25aOiBzd29yZEFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gICAgbGluZVRoaWNrbmVzczogLjgyLFxuICAgIGdsb3c6IHNsYXNoID8gMS4zNSA6IDEsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiBzbGFzaCA/IDEuOCA6IDEuMTUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IHNsYXNoID8gLjcyIDogLjQyLFxuICAgIGVuZXJneVNwZWVkOiBzbGFzaCA/IDIuMSA6IDEuMixcbiAgICBlbmVyZ3lCbGVlZDogc2xhc2ggPyAuOCA6IC41LFxuICB9KTtcbiAgaWYgKHNsYXNoKSBzY2VuZS5wcmltaXRpdmVzLnB1c2goLi4uc3dvcmRUcmFpbChzbGFzaCwgc2NhbGUpKTtcbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBTaGFwZShzaGFwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlIHtcbiAgY29uc3QgeyB4LCB5LCBjb2xvciwgbm93LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoc2hhcGVJZCksXG4gICAgeDogeCArIE1hdGguc2luKG5vdyAvIDQyMCArIHkgKiAuMDcpICogNC41ICogc2NhbGUsXG4gICAgeSxcbiAgICBzaXplOiAxMCAqIHNjYWxlICogKDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyB5ICogLjA1KSAqIC4wOCksXG4gICAgY29sb3IsXG4gICAgcm90YXRpb25aOiBub3cgLyAxMTAwLFxuICAgIGxpbmVUaGlja25lc3M6IC43NixcbiAgICBnbG93OiAxLjA1LFxuICAgIGVuZXJneUludGVuc2l0eTogMS4yNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjQ4LFxuICAgIGVuZXJneVNwZWVkOiAxLjM1LFxuICAgIGVuZXJneUJsZWVkOiAuNTUsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzaGllbGQtcmluZ1wiLCBvcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic3Bpa2UtbGFuY2VcIiwgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHtcbiAgTmVvblByb2plY3RpbGUsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7XG4gIEd1bkxldmVsLFxuICBHdW5NZW1iZXIsXG4gIEltcGFjdEVmZmVjdCxcbiAgTXV6emxlRWZmZWN0LFxuICBQcm9qZWN0aWxlU2hhcGUsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuUHJvamVjdGlsZSB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZ4OiBudW1iZXI7XG4gIHZ5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcGllcmNlUmVtYWluaW5nOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I6IHN0cmluZztcbiAgY29yZUNvbG9yOiBzdHJpbmc7XG4gIGFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlcjogYm9vbGVhbjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0RW5lbXlJZHM6IFNldDxudW1iZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bkVmZmVjdCB7XG4gIGtpbmQ6IFwibXV6emxlXCIgfCBcImltcGFjdFwiIHwgXCJkZWF0aFwiO1xuICBzdHlsZTogTXV6emxlRWZmZWN0IHwgSW1wYWN0RWZmZWN0IHwgXCJkZWF0aEJsb29tXCI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcjogc3RyaW5nO1xuICByYWRpdXM6IG51bWJlcjtcbiAgZXhwaXJlc0F0OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHNlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5UYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2NoZWR1bGVkVm9sbGV5IHtcbiAgZmlyZXNBdDogbnVtYmVyO1xuICBndW46IEd1bk1lbWJlcjtcbiAgbGV2ZWw6IEd1bkxldmVsO1xuICBsYW5lOiBudW1iZXI7XG4gIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdO1xuICBzY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgR3VuU2ltdWxhdGlvbiB7XG4gIHJlYWRvbmx5IHByb2plY3RpbGVzOiBHdW5Qcm9qZWN0aWxlW10gPSBbXTtcbiAgcmVhZG9ubHkgZWZmZWN0czogR3VuRWZmZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBzY2hlZHVsZWRWb2xsZXlzOiBTY2hlZHVsZWRWb2xsZXlbXSA9IFtdO1xuICBwcml2YXRlIHNlcXVlbmNlID0gMDtcbiAgcHJpdmF0ZSBzaG90U2VxdWVuY2UgPSAwO1xuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmVmZmVjdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGZpcmUoZ3VuOiBHdW5NZW1iZXIsIGxldmVsOiBHdW5MZXZlbCwgbGFuZTogbnVtYmVyLCBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgbm93OiBudW1iZXIsIHNjYWxlID0gMSk6IHZvaWQge1xuICAgIGZvciAobGV0IGJ1cnN0SW5kZXggPSAwOyBidXJzdEluZGV4IDwgbGV2ZWwuYnVyc3RDb3VudDsgYnVyc3RJbmRleCsrKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMucHVzaCh7XG4gICAgICAgIGZpcmVzQXQ6IG5vdyArIGJ1cnN0SW5kZXggKiBsZXZlbC5idXJzdEludGVydmFsTXMsXG4gICAgICAgIGd1biwgbGV2ZWwsIGxhbmUsIG9yaWdpbnM6IG9yaWdpbnMubWFwKG9yaWdpbiA9PiAoeyAuLi5vcmlnaW4gfSkpLCBzY2FsZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpcmluZyhub3c6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGZpcmVkID0gMDtcbiAgICBjb25zdCBkdWUgPSB0aGlzLnNjaGVkdWxlZFZvbGxleXMuZmlsdGVyKHZvbGxleSA9PiB2b2xsZXkuZmlyZXNBdCA8PSBub3cpO1xuICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cyA9IHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5maWx0ZXIodm9sbGV5ID0+IHZvbGxleS5maXJlc0F0ID4gbm93KTtcbiAgICBmb3IgKGNvbnN0IHZvbGxleSBvZiBkdWUpIHtcbiAgICAgIHRoaXMuc3Bhd25Wb2xsZXkodm9sbGV5LCBub3cpO1xuICAgICAgZmlyZWQrKztcbiAgICB9XG4gICAgcmV0dXJuIGZpcmVkO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdGlsZXMoXG4gICAgZGVsdGE6IG51bWJlcixcbiAgICBub3c6IG51bWJlcixcbiAgICB0YXJnZXRzOiByZWFkb25seSBHdW5UYXJnZXRbXSxcbiAgICBib3VuZHM6IHsgdG9wOiBudW1iZXI7IGxlZnQ/OiBudW1iZXI7IHJpZ2h0PzogbnVtYmVyIH0sXG4gICAgb25IaXQ6IChwcm9qZWN0aWxlOiBHdW5Qcm9qZWN0aWxlLCB0YXJnZXQ6IEd1blRhcmdldCkgPT4gdm9pZCxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0aWxlIG9mIFsuLi50aGlzLnByb2plY3RpbGVzXSkge1xuICAgICAgcHJvamVjdGlsZS54ICs9IHByb2plY3RpbGUudnggKiBkZWx0YTtcbiAgICAgIHByb2plY3RpbGUueSArPSBwcm9qZWN0aWxlLnZ5ICogZGVsdGE7XG4gICAgICBpZiAocHJvamVjdGlsZS55IDwgYm91bmRzLnRvcCB8fCBwcm9qZWN0aWxlLnggPCAoYm91bmRzLmxlZnQgPz8gLUluZmluaXR5KSB8fCBwcm9qZWN0aWxlLnggPiAoYm91bmRzLnJpZ2h0ID8/IEluZmluaXR5KSkge1xuICAgICAgICB0aGlzLnJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICBpZiAodGFyZ2V0LmR5aW5nIHx8IHByb2plY3RpbGUubGFuZSAhPT0gdGFyZ2V0LmxhbmUgfHwgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5oYXModGFyZ2V0LmlkKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGR4ID0gcHJvamVjdGlsZS54IC0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IGR5ID0gcHJvamVjdGlsZS55IC0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IGhpdFJhZGl1cyA9IHByb2plY3RpbGUucmFkaXVzICsgdGFyZ2V0LnJhZGl1cztcbiAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gaGl0UmFkaXVzICogaGl0UmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5hZGQodGFyZ2V0LmlkKTtcbiAgICAgICAgdGFyZ2V0LmhlYWx0aCAtPSBwcm9qZWN0aWxlLmRhbWFnZTtcbiAgICAgICAgdGFyZ2V0LnkgLT0gcHJvamVjdGlsZS5rbm9ja2JhY2s7XG4gICAgICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgICAgICBraW5kOiBcImltcGFjdFwiLFxuICAgICAgICAgIHN0eWxlOiBwcm9qZWN0aWxlLmltcGFjdEVmZmVjdCxcbiAgICAgICAgICB4OiBwcm9qZWN0aWxlLngsIHk6IHByb2plY3RpbGUueSxcbiAgICAgICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgICAgICByYWRpdXM6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5oaXRGbGFzaFNjYWxlICogNCxcbiAgICAgICAgICBleHBpcmVzQXQ6IG5vdyArIHByb2plY3RpbGUuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICBkdXJhdGlvbjogcHJvamVjdGlsZS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHNlZWQ6IHByb2plY3RpbGUuaWQsXG4gICAgICAgIH0pO1xuICAgICAgICBvbkhpdChwcm9qZWN0aWxlLCB0YXJnZXQpO1xuICAgICAgICBpZiAocHJvamVjdGlsZS5waWVyY2VSZW1haW5pbmcgPiAwKSBwcm9qZWN0aWxlLnBpZXJjZVJlbWFpbmluZy0tO1xuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RpbGVzLmluY2x1ZGVzKHByb2plY3RpbGUpKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlZmZlY3Qgb2YgWy4uLnRoaXMuZWZmZWN0c10pIHtcbiAgICAgIGlmIChlZmZlY3QuZXhwaXJlc0F0IDw9IG5vdykgdGhpcy5lZmZlY3RzLnNwbGljZSh0aGlzLmVmZmVjdHMuaW5kZXhPZihlZmZlY3QpLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcm9qZWN0aWxlUHJpbWl0aXZlcygpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RpbGVzLmZsYXRNYXAocHJvamVjdGlsZSA9PiBuZXcgTmVvblByb2plY3RpbGUoe1xuICAgICAgeDogcHJvamVjdGlsZS54LCB5OiBwcm9qZWN0aWxlLnksXG4gICAgICB2ZWxvY2l0eVg6IHByb2plY3RpbGUudngsIHZlbG9jaXR5WTogcHJvamVjdGlsZS52eSxcbiAgICAgIHJhZGl1czogcHJvamVjdGlsZS5yYWRpdXMsXG4gICAgICBsZW5ndGg6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5hc3BlY3QsXG4gICAgICB0cmFpbExlbmd0aDogcHJvamVjdGlsZS50cmFpbExlbmd0aCxcbiAgICAgIHRyYWlsV2lkdGg6IE1hdGgubWF4KHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS50cmFpbFdpZHRoU2NhbGUsIDEuMSksXG4gICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvcixcbiAgICAgIHRyYWlsQ29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgIGNvcmVDb2xvcjogcHJvamVjdGlsZS5jb3JlQ29sb3IsXG4gICAgICBzaGFwZTogcHJvamVjdGlsZS5zaGFwZSBhcyBOZW9uUHJvamVjdGlsZVNoYXBlLFxuICAgICAgaW50ZW5zaXR5OiBwcm9qZWN0aWxlLnZpc3VhbEludGVuc2l0eSAqIChwcm9qZWN0aWxlLnRyYWNlciA/IDEuMzUgOiAxKSxcbiAgICAgIGdsb3c6IHByb2plY3RpbGUudHJhY2VyID8gMS40IDogLjcyLFxuICAgIH0pLnByaW1pdGl2ZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduVm9sbGV5KHZvbGxleTogU2NoZWR1bGVkVm9sbGV5LCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3VuLCBsZXZlbCwgbGFuZSwgb3JpZ2lucywgc2NhbGUgfSA9IHZvbGxleTtcbiAgICBmb3IgKGNvbnN0IG9yaWdpbiBvZiBvcmlnaW5zKSB7XG4gICAgICBjb25zdCBjb3VudCA9IE1hdGgubWF4KDEsIGxldmVsLnByb2plY3RpbGVDb3VudCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgYW5nbGVEZWdyZWVzID0gY291bnQgPT09IDEgPyAwIDogKGluZGV4IC8gKGNvdW50IC0gMSkgLSAuNSkgKiBsZXZlbC5zcHJlYWREZWdyZWVzO1xuICAgICAgICBjb25zdCBhbmdsZSA9IGFuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gbGV2ZWwucHJvamVjdGlsZVNwZWVkICogc2NhbGU7XG4gICAgICAgIHRoaXMuc2hvdFNlcXVlbmNlKys7XG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6ICsrdGhpcy5zZXF1ZW5jZSwgbGFuZSxcbiAgICAgICAgICB4OiBvcmlnaW4ueCArIChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogZ3VuLnZpc3VhbElkZW50aXR5Lmhvcml6b250YWxKaXR0ZXIgKiBzY2FsZSxcbiAgICAgICAgICB5OiBvcmlnaW4ueSxcbiAgICAgICAgICB2eDogTWF0aC5zaW4oYW5nbGUpICogc3BlZWQsXG4gICAgICAgICAgdnk6IC1NYXRoLmNvcyhhbmdsZSkgKiBzcGVlZCxcbiAgICAgICAgICByYWRpdXM6IGxldmVsLnByb2plY3RpbGVSYWRpdXMgKiBzY2FsZSxcbiAgICAgICAgICBkYW1hZ2U6IGxldmVsLmRhbWFnZSxcbiAgICAgICAgICBwaWVyY2VSZW1haW5pbmc6IGxldmVsLnBpZXJjZSxcbiAgICAgICAgICBjb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0sXG4gICAgICAgICAgdHJhaWxDb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdLFxuICAgICAgICAgIGNvcmVDb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LmNvcmVDb2xvcl0sXG4gICAgICAgICAgYXNwZWN0OiBndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUFzcGVjdCxcbiAgICAgICAgICB0cmFpbFdpZHRoU2NhbGU6IGd1bi52aXN1YWxJZGVudGl0eS50cmFpbFdpZHRoU2NhbGUsXG4gICAgICAgICAgdmlzdWFsSW50ZW5zaXR5OiBndW4udmlzdWFsSWRlbnRpdHkudmlzdWFsSW50ZW5zaXR5LFxuICAgICAgICAgIHNoYXBlOiBndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZVNoYXBlLFxuICAgICAgICAgIGltcGFjdEVmZmVjdDogZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdEVmZmVjdCxcbiAgICAgICAgICBpbXBhY3REdXJhdGlvbk1zOiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICB0cmFpbExlbmd0aDogbGV2ZWwudHJhaWxMZW5ndGggKiBzY2FsZSxcbiAgICAgICAgICB0cmFjZXI6IGxldmVsLnRyYWNlckV2ZXJ5TnRoU2hvdCA+IDAgJiYgdGhpcy5zaG90U2VxdWVuY2UgJSBsZXZlbC50cmFjZXJFdmVyeU50aFNob3QgPT09IDAsXG4gICAgICAgICAga25vY2tiYWNrOiBsZXZlbC5rbm9ja2JhY2sgKiBzY2FsZSxcbiAgICAgICAgICBoaXRGbGFzaFNjYWxlOiBsZXZlbC5oaXRGbGFzaFNjYWxlLFxuICAgICAgICAgIGhpdEVuZW15SWRzOiBuZXcgU2V0KCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVmZmVjdHMucHVzaCh7XG4gICAgICBraW5kOiBcIm11enpsZVwiLCBzdHlsZTogZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUVmZmVjdCxcbiAgICAgIHg6IG9yaWdpbnMucmVkdWNlKChzdW0sIG9yaWdpbikgPT4gc3VtICsgb3JpZ2luLngsIDApIC8gb3JpZ2lucy5sZW5ndGgsXG4gICAgICB5OiBvcmlnaW5zWzBdPy55ID8/IDAsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0sXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdLFxuICAgICAgcmFkaXVzOiAxMCAqIGxldmVsLm11enpsZUZsYXNoU2NhbGUgKiBzY2FsZSxcbiAgICAgIGV4cGlyZXNBdDogbm93ICsgZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMsXG4gICAgICBkdXJhdGlvbjogZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMsXG4gICAgICBzZWVkOiB0aGlzLnNob3RTZXF1ZW5jZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlOiBHdW5Qcm9qZWN0aWxlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RpbGVzLmluZGV4T2YocHJvamVjdGlsZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHRoaXMucHJvamVjdGlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE5lb25TaGFwZUFjdG9yLCBOZW9uU2hhcGVEaXNwb3NhbCwgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLCBOZW9uVmljdG9yeUV4cGVyaWVuY2UsIGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSwgZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZSwgaXNMYW5lUnVubmVyU2NlbmVJZCwgbGFuZVJ1bm5lclNjZW5lSWRzLCBuZW9uUGFsZXR0ZSwgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCwgdHlwZSBOZW9uUHJpbWl0aXZlLCB0eXBlIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IGNvbWJhdFR1bmluZywgZ3VuRmFtaWx5LCBtdWx0aXBsaWVyRmFtaWx5LCBvcmJGYW1pbHksIHBhcnNlVHJhY2tEZWZpbml0aW9uLCBzaGllbGRGYW1pbHksIHN3b3JkRmFtaWx5LCB0cmFja0ZhbWlseSwgdHlwZSBHdW5JZCwgdHlwZSBNdWx0aXBsaWVySWQsIHR5cGUgUGFyc2VkVHJhY2tFbnRpdHksIHR5cGUgU2hpZWxkSWQsIHR5cGUgU3dvcmRJZCwgdHlwZSBUcmFja01lbWJlciwgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgYmluZFNxdWFkSW5wdXQgfSBmcm9tIFwiLi9pbnB1dFwiO1xuaW1wb3J0IHsgU3F1YWRNb2RlbCB9IGZyb20gXCIuL3NxdWFkXCI7XG5pbXBvcnQgeyBBdXRvQWltQ29udHJvbFN0YXRlLCBzZWxlY3RBdXRvQWltT2Zmc2V0IH0gZnJvbSBcIi4vYXV0b0FpbVwiO1xuaW1wb3J0IHsgYXBwbHlQb3J0cmFpdFN0YWdlLCBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBwcm9qZWN0SGVsaWNvcHRlclNjZW5lLCB0eXBlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5pbXBvcnQgeyBhY3RvckluVG9wRG93blNjZW5lLCBzaGFwZUxhYmVsLCBzd2FybVNoYXBlcyB9IGZyb20gXCIuL3NoYXBlVmlzdWFsc1wiO1xuaW1wb3J0IHsgU2hpZWxkU3RhdGUsIHJlc29sdmVTaGllbGRDb250YWN0LCB0aWNrU2hpZWxkIH0gZnJvbSBcIi4vY29tYmF0L3NoaWVsZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgU3dvcmRTdGF0ZSwgdGlja1N3b3JkIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5pbXBvcnQgeyBxdWVyeU5lYXJieVRocmVhdHMgfSBmcm9tIFwiLi9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnlcIjtcbmltcG9ydCB7IHNoaWVsZFBpY2t1cFZpc3VhbCwgc2hpZWxkVmlzdWFscywgc3dvcmRQaWNrdXBWaXN1YWwsIHN3b3JkVmlzdWFscyB9IGZyb20gXCIuL2ZhbWlseVZpc3VhbHNcIjtcbmltcG9ydCB7IEd1blNpbXVsYXRpb24gfSBmcm9tIFwiLi9jb21iYXQvZ3VuU2ltdWxhdGlvblwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEludGVyZmFjZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbnRlcmZhY2UgRW5lbXkgeyBpZDogbnVtYmVyOyBsYW5lOiAwIHwgMTsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGhlYWx0aDogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjsgcm93SWQ6IG51bWJlcjsgYWN0b3I6IE5lb25TaGFwZUFjdG9yOyBkeWluZzogYm9vbGVhbiB9XG5pbnRlcmZhY2UgR3VuUGlja3VwIHsgbGFuZTogMCB8IDE7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBndW5JZDogR3VuSWQ7IGxldmVsOiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcjogbnVtYmVyOyBhY3RvcjogTmVvblNoYXBlQWN0b3IgfVxuaW50ZXJmYWNlIFNoaWVsZFBpY2t1cCB7IGxhbmU6IDAgfCAxOyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2hpZWxkSWQ6IFNoaWVsZElkOyBzcGVlZE11bHRpcGxpZXI6IG51bWJlciB9XG5pbnRlcmZhY2UgU3dvcmRQaWNrdXAgeyBsYW5lOiAwIHwgMTsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHN3b3JkSWQ6IFN3b3JkSWQ7IHNwZWVkTXVsdGlwbGllcjogbnVtYmVyIH1cbmludGVyZmFjZSBNdWx0aXBsaWVyUGlja3VwIHsgbGFuZTogMCB8IDE7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBtdWx0aXBsaWVySWQ6IE11bHRpcGxpZXJJZDsgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7IGFjdG9yOiBOZW9uU2hhcGVBY3RvciB9XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRE9NIHJlZmVyZW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PihcIiNnYW1lLWNhbnZhc1wiKSE7XG5jb25zdCB0cmFja1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3RyYWNrLXNlbGVjdFwiKSE7XG5jb25zdCB0cmFja0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiN0cmFjay1saXN0XCIpITtcbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3N0YXR1c1wiKSE7XG5jb25zdCBydW5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNydW4tc3RhdHVzXCIpITtcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdFwiKSE7XG5jb25zdCByZXN1bHRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdC10aXRsZVwiKSE7XG5jb25zdCByZXN1bHREZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXN1bHQtZGV0YWlsXCIpITtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZXJyb3JcIikhO1xuY29uc3QgZGV2ZWxvcGVyVG9vbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNkZXZlbG9wZXItdG9vbHNcIikhO1xuY29uc3QgZ2FtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNnYW1lXCIpITtcbmNvbnN0IGNhbWVyYUxhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2NhbWVyYS1sYWJcIikhO1xuY29uc3Qgc2NlbmVMYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzY2VuZS1sYWJcIikhO1xuY29uc3Qgc2NlbmVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiNzY2VuZS1zZWxlY3RcIikhO1xuY29uc3QgY2FtZXJhT3V0cHV0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KFwiI2NhbWVyYS1vdXRwdXQtdGV4dFwiKSE7XG5jb25zdCB1cmxPcHRpb25zID0gd2luZG93Lkp1c3RUaGVHYW1lc1BsZWFzZT8udXJsT3B0aW9ucztcbmNvbnN0IGRldmVsb3Blck1vZGUgPSB1cmxPcHRpb25zPy5pc0VuYWJsZWQoXCJkZXZcIikgPz8gZmFsc2U7XG5kZXZlbG9wZXJUb29scy5oaWRkZW4gPSAhZGV2ZWxvcGVyTW9kZTtcbmNhbWVyYUxhYi5oaWRkZW4gPSAhKGRldmVsb3Blck1vZGUgJiYgKHVybE9wdGlvbnM/LmlzRW5hYmxlZChcImNhbWVyYWNvbnRyb2xzXCIpID8/IGZhbHNlKSk7XG5zY2VuZUxhYi5oaWRkZW4gPSAhZGV2ZWxvcGVyTW9kZTtcbmNvbnN0IGRlZmF1bHRUcmFjayA9IE9iamVjdC52YWx1ZXModHJhY2tGYW1pbHkubWVtYmVycylbMF07XG5hcHBseVBvcnRyYWl0U3RhZ2UoZ2FtZUVsZW1lbnQsIGRlZmF1bHRUcmFjay52aWV3cG9ydCk7XG5cbmxldCBzY2VuZU92ZXJyaWRlOiBMYW5lUnVubmVyU2NlbmVJZCB8IG51bGwgPSBudWxsO1xuaWYgKGRldmVsb3Blck1vZGUpIHtcbiAgY29uc3Qgc2NlbmVGcm9tVXJsID0gKHVybE9wdGlvbnMgYXMgeyBnZXQ/KG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgfSB8IHVuZGVmaW5lZCk/LmdldD8uKFwic2NlbmVcIik7XG4gIGlmIChzY2VuZUZyb21VcmwgJiYgaXNMYW5lUnVubmVyU2NlbmVJZChzY2VuZUZyb21VcmwpKSBzY2VuZU92ZXJyaWRlID0gc2NlbmVGcm9tVXJsO1xufVxuXG5zY2VuZVNlbGVjdC5pbm5lckhUTUwgPSBsYW5lUnVubmVyU2NlbmVJZHMubWFwKHNjZW5lSWQgPT4gYDxvcHRpb24gdmFsdWU9XCIke3NjZW5lSWR9XCI+JHtnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQpfTwvb3B0aW9uPmApLmpvaW4oXCJcIik7XG5zY2VuZVNlbGVjdC52YWx1ZSA9IHNjZW5lT3ZlcnJpZGUgPz8gZGVmYXVsdFRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQ7XG5zY2VuZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgc2NlbmVPdmVycmlkZSA9IGlzTGFuZVJ1bm5lclNjZW5lSWQoc2NlbmVTZWxlY3QudmFsdWUpID8gc2NlbmVTZWxlY3QudmFsdWUgOiBudWxsO1xufSk7XG5cbmNvbnN0IGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgfTtcbmNvbnN0IGJpbmRDYW1lcmFTbGlkZXIgPSAoaWQ6IHN0cmluZywga2V5OiBrZXlvZiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MpOiBIVE1MSW5wdXRFbGVtZW50ID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGlkKSE7XG4gIGlucHV0LnZhbHVlID0gU3RyaW5nKGNhbWVyYVNldHRpbmdzW2tleV0pO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGNhbWVyYVNldHRpbmdzW2tleV0gPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xuICAgIGNhbWVyYU91dHB1dFRleHQudmFsdWUgPSBcIlwiO1xuICB9KTtcbiAgcmV0dXJuIGlucHV0O1xufTtcbmJpbmRDYW1lcmFTbGlkZXIoXCIjY2FtZXJhLWhlaWdodFwiLCBcImhlaWdodFwiKTtcbmJpbmRDYW1lcmFTbGlkZXIoXCIjY2FtZXJhLWxvb2tcIiwgXCJsb29rQW5nbGVEZWdyZWVzXCIpO1xuYmluZENhbWVyYVNsaWRlcihcIiNjYW1lcmEtYmFja1wiLCBcImZvbGxvd0Rpc3RhbmNlXCIpO1xuYmluZENhbWVyYVNsaWRlcihcIiNjYW1lcmEtem9vbVwiLCBcInpvb21cIik7XG5iaW5kQ2FtZXJhU2xpZGVyKFwiI2NhbWVyYS1ob3Jpem9uXCIsIFwiaG9yaXpvblwiKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2NhbWVyYS1vdXRwdXRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG91dHB1dCA9IGBjYW1lcmE6IGhlaWdodD0ke2NhbWVyYVNldHRpbmdzLmhlaWdodC50b0ZpeGVkKDApfSwgbG9va0FuZ2xlRGVncmVlcz0ke2NhbWVyYVNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMudG9GaXhlZCgwKX0sIGZvbGxvd0Rpc3RhbmNlPSR7Y2FtZXJhU2V0dGluZ3MuZm9sbG93RGlzdGFuY2UudG9GaXhlZCgwKX0sIHpvb209JHtjYW1lcmFTZXR0aW5ncy56b29tLnRvRml4ZWQoMil9LCBob3Jpem9uPSR7Y2FtZXJhU2V0dGluZ3MuaG9yaXpvbi50b0ZpeGVkKDIpfWA7XG4gIGNhbWVyYU91dHB1dFRleHQudmFsdWUgPSBvdXRwdXQ7XG4gIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChvdXRwdXQpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG59KTtcblxudHJ5IHtcbiAgY29uc3Qgdmlld3BvcnQgPSBkZWZhdWx0VHJhY2sudmlld3BvcnQ7XG4gIGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLmNyZWF0ZShjYW52YXMsIHZpZXdwb3J0LmxvZ2ljYWxXaWR0aCwgdmlld3BvcnQubG9naWNhbEhlaWdodCk7XG4gIGxldCBhY3RpdmVUcmFjazogVHJhY2tNZW1iZXIgfCBudWxsID0gbnVsbDtcbiAgbGV0IGxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBsZXQgY29tYmF0RWxhcHNlZCA9IDA7XG4gIGxldCBjb21iYXROb3cgPSAwO1xuICBsZXQgcGxheWVyTGFuZTogMCB8IDEgPSAwO1xuICBsZXQgY29vbGRvd24gPSAwO1xuICBsZXQgZW50aXR5SWRDb3VudGVyID0gMDtcbiAgbGV0IHRyYWNrRW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcbiAgbGV0IG5leHRUcmFja0VudGl0eSA9IDA7XG4gIGxldCBicmVhY2hlcyA9IDA7XG4gIGxldCBlbmVtaWVzOiBFbmVteVtdID0gW107XG4gIGNvbnN0IGd1blNpbXVsYXRpb24gPSBuZXcgR3VuU2ltdWxhdGlvbigpO1xuICBsZXQgZ3VuUGlja3VwczogR3VuUGlja3VwW10gPSBbXTtcbiAgbGV0IHNoaWVsZFBpY2t1cHM6IFNoaWVsZFBpY2t1cFtdID0gW107XG4gIGxldCBzd29yZFBpY2t1cHM6IFN3b3JkUGlja3VwW10gPSBbXTtcbiAgbGV0IG11bHRpcGxpZXJzOiBNdWx0aXBsaWVyUGlja3VwW10gPSBbXTtcbiAgY29uc3Qgc3F1YWQgPSBuZXcgU3F1YWRNb2RlbCgpO1xuICBjb25zdCBhaW1Db250cm9sID0gbmV3IEF1dG9BaW1Db250cm9sU3RhdGUoKTtcbiAgbGV0IHZpY3Rvcnk6IE5lb25WaWN0b3J5RXhwZXJpZW5jZSB8IG51bGwgPSBudWxsO1xuICBsZXQgZmFpbHVyZVJlYXNvbiA9IFwiXCI7XG4gIGNvbnN0IHBsYXllckFjdG9yczogTmVvblNoYXBlQWN0b3JbXSA9IFtdO1xuICBjb25zdCBleHBsb2RpbmdQbGF5ZXJzOiBBcnJheTx7IGFjdG9yOiBOZW9uU2hhcGVBY3RvcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4gPSBbXTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQWN0aXZlIGZhbWlseSBzbG90cyBcdTIwMTQgb25lIHBlciBmYW1pbHksIGZhbWlseS1zY29wZWQgZXhjbHVzaXZpdHkuXG4gIC8vIEd1biArIFNoaWVsZCArIFN3b3JkIG1heSBhbGwgYmUgYWN0aXZlIHNpbXVsdGFuZW91c2x5LlxuICAvLyBUd28gaXRlbXMgZnJvbSB0aGUgc2FtZSBmYW1pbHkgYXJlIG5vdCBhbGxvd2VkLlxuICAvL1xuICAvLyBuZWFyLXBsYXllciBlZmZlY3Qgb3JkZXIgKGludGVudGlvbmFsbHkgZXhwbGljaXQpOlxuICAvLyAgIDEuIHNoaWVsZEJsb2NrICAgICAgICBcdTIwMTQgY2hhcmdlLWJhc2VkIGhpdCBhYnNvcnB0aW9uXG4gIC8vICAgMi4gc2hpZWxkUHVsc2UgICAgICAgIFx1MjAxNCBlbWVyZ2VuY3kgcHVzaFxuICAvLyAgIDMuIHN3b3JkQXR0YWNrICAgICAgICBcdTIwMTQgc3dvcmQgZmFtaWx5XG4gIC8vICAgNC4gc2hpZWxkQ29udGFjdERhbWFnZSBcdTIwMTQgY29udGFjdCBkYW1hZ2Ugb24gc2hpZWxkIGVkZ2VcbiAgLy8gICA1LiBzaGllbGRBdXJhICAgICAgICAgXHUyMDE0IHNsb3cvZGVidWZmIGF1cmFcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGFjdGl2ZUJ5RmFtaWx5OiB7XG4gICAgZ3VuOiB7IGlkOiBHdW5JZDsgbGV2ZWw6IG51bWJlciB9O1xuICAgIHNoaWVsZDogU2hpZWxkU3RhdGUgfCBudWxsO1xuICAgIHN3b3JkOiBTd29yZFN0YXRlIHwgbnVsbDtcbiAgfSA9IHtcbiAgICBndW46IHsgaWQ6IFwicHVsc2VQaXN0b2xcIiwgbGV2ZWw6IDEgfSxcbiAgICBzaGllbGQ6IG51bGwsXG4gICAgc3dvcmQ6IG51bGwsXG4gIH07XG5cbiAgY29uc3Qgc2NhbGUgPSAoKSA9PiAxO1xuICBjb25zdCBsYW5lWCA9IChsYW5lOiBudW1iZXIpID0+IGNhbnZhcy53aWR0aCAqIChsYW5lID09PSAwID8gLjMyIDogLjY4KTtcbiAgY29uc3QgZW50aXR5WCA9IChlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KSA9PiBsYW5lWChlbnRpdHkuc2lkZSA9PT0gXCJsZWZ0XCIgPyAwIDogMSkgKyAoZW50aXR5LmxhbmVJbmRleCAtIDIpICogMTUgKiBzY2FsZSgpO1xuICBjb25zdCBwbGF5ZXJZID0gKCkgPT4gY2FudmFzLmhlaWdodCAqIC44MjtcbiAgY29uc3QgYWN0aXZlU2NlbmVJZCA9ICgpOiBMYW5lUnVubmVyU2NlbmVJZCA9PiBzY2VuZU92ZXJyaWRlID8/IGFjdGl2ZVRyYWNrPy5lbnZpcm9ubWVudC5zY2VuZUlkID8/IGRlZmF1bHRUcmFjay5lbnZpcm9ubWVudC5zY2VuZUlkO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBSZXNldCAvIHN0YXJ0XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbnN0IHJlc2V0VG9UcmFja3MgPSAoKTogdm9pZCA9PiB7XG4gICAgYWN0aXZlVHJhY2sgPSBudWxsO1xuICAgIHJlc3VsdC5oaWRkZW4gPSB0cnVlO1xuICAgIHRyYWNrU2VsZWN0LmhpZGRlbiA9IGZhbHNlO1xuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgdHJhY2suIFRhcCBlaXRoZXIgc2lkZSB0byBzd2l0Y2ggbGFuZXM7IHVzZSB0aGUgam95c3RpY2sgdG8gZmluZSBhaW0uXCI7XG4gICAgcnVuU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlbmVtaWVzID0gW107XG4gICAgZ3VuU2ltdWxhdGlvbi5jbGVhcigpO1xuICAgIGd1blBpY2t1cHMgPSBbXTtcbiAgICBzaGllbGRQaWNrdXBzID0gW107XG4gICAgc3dvcmRQaWNrdXBzID0gW107XG4gICAgbXVsdGlwbGllcnMgPSBbXTtcbiAgICB2aWN0b3J5ID0gbnVsbDtcbiAgICBmYWlsdXJlUmVhc29uID0gXCJcIjtcbiAgICBhY3RpdmVCeUZhbWlseS5zaGllbGQgPSBudWxsO1xuICAgIGFjdGl2ZUJ5RmFtaWx5LnN3b3JkID0gbnVsbDtcbiAgfTtcblxuICBjb25zdCBzdGFydFRyYWNrID0gKHRyYWNrOiBUcmFja01lbWJlcik6IHZvaWQgPT4ge1xuICAgIGFjdGl2ZVRyYWNrID0gdHJhY2s7XG4gICAgaWYgKCFzY2VuZU92ZXJyaWRlKSBzY2VuZVNlbGVjdC52YWx1ZSA9IHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQ7XG4gICAgbGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29tYmF0RWxhcHNlZCA9IDA7XG4gICAgY29tYmF0Tm93ID0gMDtcbiAgICBjb25zdCBhbGxFbnRpdGllcyA9IHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgIGNvbnN0IHBsYXllclN0YXJ0ID0gYWxsRW50aXRpZXMuZmluZChlbnRpdHkgPT4gZW50aXR5LmlkID09PSBcInBsYXllci5zdGFydFwiKTtcbiAgICBjb25zdCBzdGFydExhbmU6IDAgfCAxID0gcGxheWVyU3RhcnQ/LnNpZGUgPT09IFwicmlnaHRcIiA/IDEgOiAwO1xuICAgIHBsYXllckxhbmUgPSBzdGFydExhbmU7XG4gICAgYWN0aXZlQnlGYW1pbHkuZ3VuID0geyBpZDogdHJhY2suc3RhcnRpbmdHdW4sIGxldmVsOiB0cmFjay5zdGFydGluZ0d1bkxldmVsIH07XG4gICAgYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbnVsbDtcbiAgICBhY3RpdmVCeUZhbWlseS5zd29yZCA9IG51bGw7XG4gICAgY29vbGRvd24gPSAwO1xuICAgIG5leHRUcmFja0VudGl0eSA9IDA7XG4gICAgdHJhY2tFbnRpdGllcyA9IGFsbEVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5LmlkICE9PSBcInBsYXllci5zdGFydFwiKTtcbiAgICBicmVhY2hlcyA9IDA7XG4gICAgZW5lbWllcyA9IFtdO1xuICAgIGd1blNpbXVsYXRpb24uY2xlYXIoKTtcbiAgICBndW5QaWNrdXBzID0gW107XG4gICAgc2hpZWxkUGlja3VwcyA9IFtdO1xuICAgIHN3b3JkUGlja3VwcyA9IFtdO1xuICAgIG11bHRpcGxpZXJzID0gW107XG4gICAgc3F1YWQuY291bnQgPSAxO1xuICAgIHBsYXllckFjdG9ycy5sZW5ndGggPSAwO1xuICAgIHBsYXllckFjdG9ycy5wdXNoKG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSkpO1xuICAgIGV4cGxvZGluZ1BsYXllcnMubGVuZ3RoID0gMDtcbiAgICBzcXVhZC5haW1PZmZzZXQgPSAwO1xuICAgIHNxdWFkLmxhbmUgPSBzdGFydExhbmU7XG4gICAgc3F1YWQueCA9IGxhbmVYKHN0YXJ0TGFuZSk7XG4gICAgc3F1YWQudGFyZ2V0WCA9IGxhbmVYKHN0YXJ0TGFuZSk7XG4gICAgdmljdG9yeSA9IG51bGw7XG4gICAgdHJhY2tTZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICByZXN1bHQuaGlkZGVuID0gdHJ1ZTtcbiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIlRhcCBhIHNpZGUgdG8gc3dpdGNoIGxhbmVzLiBTbWFsbCBqb3lzdGljayBtb3Rpb24gYWltczsgZnVsbCBtb3Rpb24gY3Jvc3NlcyBsYW5lcy5cIjtcbiAgfTtcblxuICB0cmFja0xpc3QuaW5uZXJIVE1MID0gT2JqZWN0LmVudHJpZXModHJhY2tGYW1pbHkubWVtYmVycykubWFwKChbaWQsIHRyYWNrXSkgPT4gYFxuICAgIDxidXR0b24gY2xhc3M9XCJ0cmFjay1jYXJkXCIgZGF0YS10cmFjaz1cIiR7aWR9XCI+XG4gICAgICA8c3Ryb25nPiR7dHJhY2subGFiZWx9PC9zdHJvbmc+PHNwYW4+JHt0cmFjay5kZXNjcmlwdGlvbn08L3NwYW4+PGI+JHt0cmFjay5kdXJhdGlvblNlY29uZHN9cyBcdTIxOTI8L2I+XG4gICAgPC9idXR0b24+YCkuam9pbihcIlwiKTtcbiAgdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtdHJhY2tdXCIpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN0YXJ0VHJhY2sodHJhY2tGYW1pbHkubWVtYmVyc1tidXR0b24uZGF0YXNldC50cmFjayBhcyBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkubWVtYmVyc10pKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2JhY2stdG8tdHJhY2tzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRUb1RyYWNrcyk7XG5cbiAgYmluZFNxdWFkSW5wdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZ2FtZVwiKSEsIFwiI2pveXN0aWNrXCIsIHtcbiAgICBsYW5lOiAoKSA9PiBzcXVhZC5sYW5lLFxuICAgIHNldExhbmU6IGxhbmUgPT4ge1xuICAgICAgaWYgKCFhY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgICAgc3F1YWQuc2V0TGFuZShsYW5lLCBsYW5lWCwgY29tYmF0Tm93KTtcbiAgICAgIHBsYXllckxhbmUgPSBsYW5lO1xuICAgICAgYWltQ29udHJvbC5sYW5lU2VsZWN0ZWQoKTtcbiAgICB9LFxuICAgIHNldEFpbTogdmFsdWUgPT4ge1xuICAgICAgaWYgKCFhY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgICAgc3F1YWQuc2V0QWltKHZhbHVlLCBjYW52YXMud2lkdGggKiAuMjIsIGxhbmVYKTtcbiAgICAgIGFpbUNvbnRyb2wuYWltQ2hhbmdlZCgpO1xuICAgIH0sXG4gICAgcmVsZWFzZUFpbTogKCkgPT4ge1xuICAgICAgYWltQ29udHJvbC5haW1SZWxlYXNlZCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHdW4gZmlyZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdCBmaXJlID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgaWQ6IGd1bklkLCBsZXZlbDogZ3VuTGV2ZWwgfSA9IGFjdGl2ZUJ5RmFtaWx5Lmd1bjtcbiAgICBjb25zdCBndW4gPSBndW5GYW1pbHkubWVtYmVyc1tndW5JZF07XG4gICAgY29uc3QgdHVuaW5nID0gZ3VuLmxldmVscy5maW5kKGl0ZW0gPT4gaXRlbS5sZXZlbCA9PT0gZ3VuTGV2ZWwpID8/IGd1bi5sZXZlbHNbMF07XG4gICAgY29uc3QgcG9pbnRzID0gc3F1YWQucG9pbnRzKHBsYXllclkoKSwgc2NhbGUoKSkubWFwKHBvaW50ID0+ICh7IHg6IHBvaW50LngsIHk6IHBsYXllclkoKSAtIDIwICogc2NhbGUoKSB9KSk7XG4gICAgZ3VuU2ltdWxhdGlvbi5maXJlKGd1biwgdHVuaW5nLCBwbGF5ZXJMYW5lLCBwb2ludHMsIGNvbWJhdE5vdywgc2NhbGUoKSk7XG4gICAgY29vbGRvd24gKz0gMSAvIHR1bmluZy5maXJlUmF0ZVBlclNlY29uZDtcbiAgICB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5Um90YXRlZChcIlByaW1hcnlcIiwgMyk7XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEZpbmlzaFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdCBmaW5pc2ggPSAod29uOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgaWYgKCFhY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIHJlc3VsdC5oaWRkZW4gPSBmYWxzZTtcbiAgICByZXN1bHRUaXRsZS50ZXh0Q29udGVudCA9IHdvbiA/IFwiRkxBV0xFU1MgUlVOXCIgOiBcIlRSQUNLIEZBSUxFRFwiO1xuICAgIHJlc3VsdERldGFpbC50ZXh0Q29udGVudCA9IHdvbiA/IFwiTm8gZW5lbXkgdG91Y2hlZCBvciBlc2NhcGVkIHBhc3QgeW91LlwiIDogZmFpbHVyZVJlYXNvbiB8fCBgJHticmVhY2hlc30gZW5lbXkke2JyZWFjaGVzID09PSAxID8gXCJcIiA6IFwiaWVzXCJ9IGJyZWFjaGVkIHRoZSBkZWZlbnNlLmA7XG4gICAgaWYgKHdvbikge1xuICAgICAgdmljdG9yeSA9IG5ldyBOZW9uVmljdG9yeUV4cGVyaWVuY2Uoe1xuICAgICAgICBjZW50ZXJYOiBjYW52YXMud2lkdGggLyAyLCBjZW50ZXJZOiBjYW52YXMuaGVpZ2h0ICogLjM4LFxuICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsIHBhcnRpY2xlQ291bnQ6IDEyMCxcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIlB1enpsZUNvbXBsZXRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5KFwiR2FtZU92ZXJcIik7XG4gICAgfVxuICAgIGFjdGl2ZVRyYWNrID0gbnVsbDtcbiAgfTtcblxuICBjb25zdCBzeW5jUGxheWVyQWN0b3JzID0gKCk6IHZvaWQgPT4ge1xuICAgIHdoaWxlIChwbGF5ZXJBY3RvcnMubGVuZ3RoIDwgc3F1YWQuY291bnQpIHBsYXllckFjdG9ycy5wdXNoKG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSkpO1xuICAgIGlmIChwbGF5ZXJBY3RvcnMubGVuZ3RoID4gc3F1YWQuY291bnQpIHBsYXllckFjdG9ycy5sZW5ndGggPSBzcXVhZC5jb3VudDtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVXBkYXRlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbnN0IHVwZGF0ZSA9IChmcmFtZU5vdzogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmF3RGVsdGEgPSBNYXRoLm1pbiguMDUsIChmcmFtZU5vdyAtIGxhc3RGcmFtZSkgLyAxMDAwKTtcbiAgICBsYXN0RnJhbWUgPSBmcmFtZU5vdztcbiAgICBjb25zdCBkZWx0YSA9IHJhd0RlbHRhICogY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllcjtcbiAgICBjb21iYXRFbGFwc2VkICs9IGRlbHRhO1xuICAgIGNvbWJhdE5vdyA9IGNvbWJhdEVsYXBzZWQgKiAxMDAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBbLi4uZXhwbG9kaW5nUGxheWVyc10pIHtcbiAgICAgIGl0ZW0uYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIGlmIChpdGVtLmFjdG9yLmRpc3Bvc2VkKSBleHBsb2RpbmdQbGF5ZXJzLnNwbGljZShleHBsb2RpbmdQbGF5ZXJzLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICBpZiAoIWFjdGl2ZVRyYWNrKSByZXR1cm47XG4gICAgY29uc3QgZWxhcHNlZCA9IGNvbWJhdEVsYXBzZWQ7XG5cbiAgICBjb25zdCB7IGlkOiBndW5JZCB9ID0gYWN0aXZlQnlGYW1pbHkuZ3VuO1xuICAgIGNvbnN0IHNoaWVsZERlZiA9IGFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCA/IHNoaWVsZEZhbWlseS5tZW1iZXJzW2FjdGl2ZUJ5RmFtaWx5LnNoaWVsZC5zaGllbGRJZF0gOiBudWxsO1xuICAgIGNvbnN0IHN3b3JkRGVmID0gYWN0aXZlQnlGYW1pbHkuc3dvcmQgPyBzd29yZEZhbWlseS5tZW1iZXJzW2FjdGl2ZUJ5RmFtaWx5LnN3b3JkLnN3b3JkSWRdIDogbnVsbDtcblxuICAgIHJ1blN0YXR1cy50ZXh0Q29udGVudCA9IGAke2d1bkZhbWlseS5tZW1iZXJzW2d1bklkXS5sYWJlbH0ke3NoaWVsZERlZiA/IGAgXHUwMEI3ICR7c2hpZWxkRGVmLmxhYmVsfWAgOiBcIlwifSR7c3dvcmREZWYgPyBgIFx1MDBCNyAke3N3b3JkRGVmLmxhYmVsfWAgOiBcIlwifSBcdTAwQjcgJHtNYXRoLm1heCgwLCBhY3RpdmVUcmFjay5kdXJhdGlvblNlY29uZHMgLSBlbGFwc2VkKS50b0ZpeGVkKDEpfXNgO1xuXG4gICAgd2hpbGUgKG5leHRUcmFja0VudGl0eSA8IHRyYWNrRW50aXRpZXMubGVuZ3RoICYmIHRyYWNrRW50aXRpZXNbbmV4dFRyYWNrRW50aXR5XS5kaXN0YW5jZUZyb21QbGF5ZXIgPD0gZWxhcHNlZCkge1xuICAgICAgY29uc3QgZW50aXR5ID0gdHJhY2tFbnRpdGllc1tuZXh0VHJhY2tFbnRpdHkrK107XG4gICAgICBjb25zdCBsYW5lID0gZW50aXR5LnNpZGUgPT09IFwibGVmdFwiID8gMCA6IDE7XG4gICAgICBpZiAoZW50aXR5LmlkID09PSBcImVuZW15LmJhc2ljXCIpIHtcbiAgICAgICAgZW5lbWllcy5wdXNoKHtcbiAgICAgICAgICBpZDogKytlbnRpdHlJZENvdW50ZXIsXG4gICAgICAgICAgbGFuZSxcbiAgICAgICAgICB4OiBlbnRpdHlYKGVudGl0eSksXG4gICAgICAgICAgeTogMTEwICogc2NhbGUoKSxcbiAgICAgICAgICBoZWFsdGg6IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmhlYWx0aCAqIGFjdGl2ZVRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllcixcbiAgICAgICAgICByb3dJZDogZW50aXR5LnJvd0luZGV4LFxuICAgICAgICAgIGFjdG9yOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMuZW5lbXkgfSksXG4gICAgICAgICAgZHlpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmd1bi5cIikpIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gZW50aXR5LmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5ndW4uXCIubGVuZ3RoKTtcbiAgICAgICAgaWYgKCEoY2FuZGlkYXRlIGluIGd1bkZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayB1c2VzIHVua25vd24gZ3VuIGlkIFwiJHtlbnRpdHkuaWR9XCIuYCk7XG4gICAgICAgIGd1blBpY2t1cHMucHVzaCh7IGxhbmUsIHg6IGVudGl0eVgoZW50aXR5KSwgeTogMTIwICogc2NhbGUoKSwgZ3VuSWQ6IGNhbmRpZGF0ZSBhcyBHdW5JZCwgbGV2ZWw6IDEsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciwgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5ndW5QaWNrdXAgfSkgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLmxlbmd0aCk7XG4gICAgICAgIGlmICghKGNhbmRpZGF0ZSBpbiBzaGllbGRGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgdXNlcyB1bmtub3duIHNoaWVsZCBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICBzaGllbGRQaWNrdXBzLnB1c2goeyBsYW5lLCB4OiBlbnRpdHlYKGVudGl0eSksIHk6IDEyMCAqIHNjYWxlKCksIHNoaWVsZElkOiBjYW5kaWRhdGUgYXMgU2hpZWxkSWQsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiKSkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBlbnRpdHkuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLmxlbmd0aCk7XG4gICAgICAgIGlmICghKGNhbmRpZGF0ZSBpbiBzd29yZEZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayB1c2VzIHVua25vd24gc3dvcmQgaWQgXCIke2VudGl0eS5pZH1cIi5gKTtcbiAgICAgICAgc3dvcmRQaWNrdXBzLnB1c2goeyBsYW5lLCB4OiBlbnRpdHlYKGVudGl0eSksIHk6IDEyMCAqIHNjYWxlKCksIHN3b3JkSWQ6IGNhbmRpZGF0ZSBhcyBTd29yZElkLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZCA9PT0gXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIikge1xuICAgICAgICBtdWx0aXBsaWVycy5wdXNoKHsgbGFuZSwgeDogZW50aXR5WChlbnRpdHkpLCB5OiAxMjUgKiBzY2FsZSgpLCBtdWx0aXBsaWVySWQ6IFwic3F1YWRQbHVzT25lXCIsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciwgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5tdWx0aXBsaWVyIH0pIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBlbnRpdHkgaWQgXCIke2VudGl0eS5pZH1cIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBsYW5lIHJ1bm5lci5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFpbUNvbnRyb2wubWFudWFsKSB7XG4gICAgICBjb25zdCBsYW5lRW5lbWllcyA9IGVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15LmxhbmUgPT09IHNxdWFkLmxhbmUgJiYgIWVuZW15LmR5aW5nKTtcbiAgICAgIGNvbnN0IGNvbE9mZnNldHMgPSBzcXVhZC5mcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGUoKSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGxhbmVFbmVtaWVzLCBsYW5lWChzcXVhZC5sYW5lKSwgY29sT2Zmc2V0cywgc3F1YWQuYWltT2Zmc2V0KTtcbiAgICAgIHNxdWFkLmF1dG9BaW0ob2Zmc2V0LCBjYW52YXMud2lkdGggKiAuMjIsIGxhbmVYKTtcbiAgICB9XG4gICAgc3F1YWQudXBkYXRlKGRlbHRhKTtcbiAgICBzeW5jUGxheWVyQWN0b3JzKCk7XG4gICAgZ2FtZUVsZW1lbnQuZGF0YXNldC5zcXVhZExhbmUgPSBTdHJpbmcoc3F1YWQubGFuZSk7XG4gICAgZ2FtZUVsZW1lbnQuZGF0YXNldC5zcXVhZEFpbSA9IHNxdWFkLmFpbU9mZnNldC50b0ZpeGVkKDIpO1xuXG4gICAgLy8gLS0tIEd1biBmaXJlIC0tLVxuICAgIGNvb2xkb3duIC09IGRlbHRhO1xuICAgIGlmIChjb29sZG93biA8PSAwKSBmaXJlKCk7XG4gICAgaWYgKGd1blNpbXVsYXRpb24udXBkYXRlRmlyaW5nKGNvbWJhdE5vdykgPiAwKSB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5Um90YXRlZChcIlByaW1hcnlcIiwgMyk7XG5cbiAgICAvLyAtLS0gUHJvamVjdGlsZSBtb3ZlbWVudCArIGhpdCBkZXRlY3Rpb24gLS0tXG4gICAgZ3VuU2ltdWxhdGlvbi51cGRhdGVQcm9qZWN0aWxlcyhkZWx0YSwgY29tYmF0Tm93LCBlbmVtaWVzLm1hcChlbmVteSA9PiBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICByYWRpdXM6IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLnJhZGl1cyAqIHNjYWxlKCksXG4gICAgfSkpLCB7IHRvcDogLTQwICogc2NhbGUoKSwgbGVmdDogLTQwLCByaWdodDogY2FudmFzLndpZHRoICsgNDAgfSwgKHNob3QsIGVuZW15KSA9PiB7XG4gICAgICBjb25zdCBnYW1lRW5lbXkgPSBlbmVteSBhcyBFbmVteSAmIHsgcmFkaXVzOiBudW1iZXIgfTtcbiAgICAgIGdhbWVFbmVteS5hY3Rvci5pbXBhY3QoeyBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LCBtYWduaXR1ZGU6IChzaG90LmRhbWFnZSArIHNob3Qua25vY2tiYWNrICogLjA2KSAvIG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmltcGFjdFJlc2lzdGFuY2UgfSk7XG4gICAgICBpZiAoZ2FtZUVuZW15LmhlYWx0aCA8PSAwKSB7XG4gICAgICAgIGdhbWVFbmVteS5keWluZyA9IHRydWU7XG4gICAgICAgIGdhbWVFbmVteS5hY3Rvci5leHBsb2RlTWFnbml0dWRlID0gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmIuZXhwbG9zaW9uTWFnbml0dWRlO1xuICAgICAgICBnYW1lRW5lbXkuYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgICAgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIkVuZW15RGVzdHJveWVkXCIpO1xuICAgICAgfSBlbHNlIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJIaXRcIik7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBOZWFyLXBsYXllciBlZmZlY3Qgc3lzdGVtIFx1MjAxNCBleHBsaWNpdCBwcmVjZWRlbmNlIG9yZGVyOlxuICAgIC8vICAgMS4gc2hpZWxkQmxvY2sgICAgICAgIFx1MjAxNCBjaGFyZ2UtYmFzZWQgaGl0IGFic29ycHRpb24gKGhhbmRsZWQgaW4gZW5lbXkgY29udGFjdCBiZWxvdylcbiAgICAvLyAgIDIuIHNoaWVsZFB1bHNlICAgICAgICBcdTIwMTQgZW1lcmdlbmN5IHB1c2hcbiAgICAvLyAgIDMuIHN3b3JkQXR0YWNrICAgICAgICBcdTIwMTQgc3dvcmQgZmFtaWx5XG4gICAgLy8gICA0LiBzaGllbGRDb250YWN0RGFtYWdlIFx1MjAxNCBjb250YWN0IGRhbWFnZSBvbiBzaGllbGQgZWRnZVxuICAgIC8vICAgNS4gc2hpZWxkQXVyYSAgICAgICAgIFx1MjAxNCBzbG93L2RlYnVmZiBhdXJhXG4gICAgLy9cbiAgICAvLyBTaGllbGRzIGFuZCBzd29yZHMgcXVlcnkgZW5lbWllcyB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkgdG8gYXZvaWRcbiAgICAvLyBpbmRlcGVuZGVudCwgaW5jb21wYXRpYmxlIHNjYW5zLlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3QgcHggPSBzcXVhZC54O1xuICAgIGNvbnN0IHB5ID0gcGxheWVyWSgpO1xuXG4gICAgLy8gLS0tIDIuIFNoaWVsZCBwdWxzZSArIDQuIENvbnRhY3QgZGFtYWdlICsgNS4gQXVyYSBzbG93IC0tLVxuICAgIGlmIChhY3RpdmVCeUZhbWlseS5zaGllbGQgJiYgc2hpZWxkRGVmKSB7XG4gICAgICBjb25zdCBzaGllbGRTdGF0ZSA9IGFjdGl2ZUJ5RmFtaWx5LnNoaWVsZDtcbiAgICAgIGNvbnN0IHNoaWVsZFRocmVhdHMgPSBxdWVyeU5lYXJieVRocmVhdHMoZW5lbWllcywge1xuICAgICAgICBvcmlnaW46IHsgeDogcHgsIHk6IHB5IH0sXG4gICAgICAgIGxhbmU6IHBsYXllckxhbmUsXG4gICAgICAgIHJhbmdlOiBzaGllbGREZWYucmFkaXVzICogc2NhbGUoKSxcbiAgICAgICAgaW5jbHVkZUFkamFjZW50TGFuZXM6IGZhbHNlLFxuICAgICAgICBwdXJwb3NlOiBcInNoaWVsZFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNoaWVsZFJlc3VsdCA9IHRpY2tTaGllbGQoc2hpZWxkU3RhdGUsIHNoaWVsZERlZiwgc2hpZWxkVGhyZWF0cywgcHgsIHB5LCBjb21iYXROb3csIGRlbHRhKTtcblxuICAgICAgLy8gQXBwbHkgcHVzaCAocHVsc2UgbW9kZSlcbiAgICAgIGlmIChzaGllbGRSZXN1bHQucHVzaEVuZW15SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBlbmVteSBvZiBlbmVtaWVzKSB7XG4gICAgICAgICAgaWYgKHNoaWVsZFJlc3VsdC5wdXNoRW5lbXlJZHMuaW5jbHVkZXMoZW5lbXkuaWQgPz8gMCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gZW5lbXkueCAtIHB4O1xuICAgICAgICAgICAgY29uc3QgZHkgPSBlbmVteS55IC0gcHk7XG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IDE7XG4gICAgICAgICAgICBlbmVteS54ICs9IChkeCAvIGRpc3QpICogc2hpZWxkUmVzdWx0LnB1c2hEaXN0YW5jZSAqIHNjYWxlKCk7XG4gICAgICAgICAgICBlbmVteS55ICs9IChkeSAvIGRpc3QpICogc2hpZWxkUmVzdWx0LnB1c2hEaXN0YW5jZSAqIHNjYWxlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJIaXRcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGNvbnRhY3QgZGFtYWdlIChjb250YWN0IG1vZGUpXG4gICAgICBpZiAoc2hpZWxkUmVzdWx0LmNvbnRhY3REYW1hZ2VFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW5lbXkgb2YgWy4uLmVuZW1pZXNdKSB7XG4gICAgICAgICAgaWYgKGVuZW15LmR5aW5nKSBjb250aW51ZTtcbiAgICAgICAgICAvLyBDb250YWN0IGRhbWFnZSBpcyBhcHBsaWVkIHBlci1mcmFtZSBcdTIwMTQgc2NhbGUgYnkgZGVsdGEgc28gaXQncyBwZXItc2Vjb25kXG4gICAgICAgICAgY29uc3QgaXNDb250YWN0ID0gc2hpZWxkUmVzdWx0LmNvbnRhY3REYW1hZ2VFbmVteUlkcy5pbmNsdWRlcyhlbmVteS5pZCA/PyAwKTtcbiAgICAgICAgICBpZiAoIWlzQ29udGFjdCkgY29udGludWU7XG4gICAgICAgICAgZW5lbXkuaGVhbHRoIC09IHNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlQW1vdW50ICogZGVsdGE7XG4gICAgICAgICAgaWYgKGVuZW15LmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICBlbmVteS5keWluZyA9IHRydWU7XG4gICAgICAgICAgICBlbmVteS5hY3Rvci5leHBsb2RlTWFnbml0dWRlID0gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmIuZXhwbG9zaW9uTWFnbml0dWRlO1xuICAgICAgICAgICAgZW5lbXkuYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJFbmVteURlc3Ryb3llZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTm90ZTogc2xvd0VuZW15SWRzIGFyZSBjb25zdW1lZCBkdXJpbmcgZW5lbXkgbW92ZW1lbnQgYmVsb3dcbiAgICB9XG5cbiAgICAvLyAtLS0gMy4gU3dvcmQgYXR0YWNrIC0tLVxuICAgIGlmIChhY3RpdmVCeUZhbWlseS5zd29yZCAmJiBzd29yZERlZikge1xuICAgICAgY29uc3Qgc3dvcmRTdGF0ZSA9IGFjdGl2ZUJ5RmFtaWx5LnN3b3JkO1xuICAgICAgY29uc3Qgc3dvcmRUaHJlYXRzID0gcXVlcnlOZWFyYnlUaHJlYXRzKGVuZW1pZXMsIHtcbiAgICAgICAgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LFxuICAgICAgICBsYW5lOiBwbGF5ZXJMYW5lLFxuICAgICAgICByYW5nZTogc3dvcmREZWYucmFuZ2UgKiBzY2FsZSgpLFxuICAgICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogKHN3b3JkRGVmLnRhcmdldGluZ01vZGUgYXMgU3dvcmRUYXJnZXRpbmdNb2RlKSA9PT0gXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIsXG4gICAgICAgIG1heFRhcmdldHM6IHN3b3JkRGVmLm1heFRhcmdldHMsXG4gICAgICAgIHB1cnBvc2U6IFwic3dvcmRcIixcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzd29yZFJlc3VsdCA9IHRpY2tTd29yZChcbiAgICAgICAgc3dvcmRTdGF0ZSwgc3dvcmREZWYsIHN3b3JkVGhyZWF0cywgcHgsIHB5LCBjb21iYXROb3csIGRlbHRhLFxuICAgICAgICBuZW9uUGFsZXR0ZVtzd29yZERlZi5jb2xvcl0sXG4gICAgICApO1xuXG4gICAgICBpZiAoc3dvcmRSZXN1bHQuc3dpbmdUcmlnZ2VyZWQgJiYgc3dvcmRSZXN1bHQuaGl0RW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5KFwiSGl0XCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi5lbmVtaWVzXSkge1xuICAgICAgICAgIGlmIChlbmVteS5keWluZykgY29udGludWU7XG4gICAgICAgICAgaWYgKCFzd29yZFJlc3VsdC5oaXRFbmVteUlkcy5pbmNsdWRlcyhlbmVteS5pZCA/PyAwKSkgY29udGludWU7XG4gICAgICAgICAgZW5lbXkuaGVhbHRoIC09IHN3b3JkUmVzdWx0LmRhbWFnZTtcbiAgICAgICAgICBlbmVteS5hY3Rvci5pbXBhY3QoeyBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LCBtYWduaXR1ZGU6IHN3b3JkUmVzdWx0LmRhbWFnZSAvIG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmltcGFjdFJlc2lzdGFuY2UgfSk7XG4gICAgICAgICAgaWYgKGVuZW15LmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICBlbmVteS5keWluZyA9IHRydWU7XG4gICAgICAgICAgICBlbmVteS5hY3Rvci5leHBsb2RlTWFnbml0dWRlID0gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmIuZXhwbG9zaW9uTWFnbml0dWRlO1xuICAgICAgICAgICAgZW5lbXkuYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJFbmVteURlc3Ryb3llZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0gRW5lbXkgbW92ZW1lbnQsIGNvbGxpc2lvbiwgYnJlYWNoIC0tLVxuICAgIGNvbnN0IHNsb3dFbmVteUlkcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuXG4gICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4uZW5lbWllc10pIHtcbiAgICAgIGVuZW15LmFjdG9yLnNldFZlbG9jaXR5KDAsIDApLnVwZGF0ZShkZWx0YSk7XG4gICAgICBjb25zdCBlZmZlY3RpdmUgPSBzbG93RW5lbXlJZHMuaGFzKGVuZW15LmlkID8/IDApXG4gICAgICAgID8gZW5lbXkuc3BlZWRNdWx0aXBsaWVyICogKHNoaWVsZERlZj8uc2xvd011bHRpcGxpZXIgPz8gMSlcbiAgICAgICAgOiBlbmVteS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICBlbmVteS55ICs9IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLnNwZWVkICogZWZmZWN0aXZlICogc2NhbGUoKSAqIGRlbHRhIC0gZW5lbXkuYWN0b3IueSAqIGNhbnZhcy5oZWlnaHQgLyAyLjU7XG4gICAgICBlbmVteS5hY3Rvci5tb3ZlVG8oMCwgMCk7XG4gICAgICBpZiAoZW5lbXkuZHlpbmcgJiYgZW5lbXkuYWN0b3IuZGlzcG9zZWQpIHsgZW5lbWllcy5zcGxpY2UoZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7IGNvbnRpbnVlOyB9XG4gICAgICBpZiAoZW5lbXkuZHlpbmcpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTaGllbGQgY29udGFjdCBpcyBnZW9tZXRyaWMgYW5kIGluZGVwZW5kZW50IG9mIGF1dGhvcmVkIGxhbmUuIFRoaXMgY2F0Y2hlc1xuICAgICAgLy8gdmVydGljYWwgYXBwcm9hY2hlcyBhbmQgaG9yaXpvbnRhbCBjb2xsaXNpb25zIHdoaWxlIHRoZSBzcXVhZCBjaGFuZ2VzIGxhbmVzLlxuICAgICAgaWYgKGFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCAmJiBzaGllbGREZWYpIHtcbiAgICAgICAgY29uc3Qgc2hpZWxkQ29udGFjdCA9IHJlc29sdmVTaGllbGRDb250YWN0KGFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCwgc2hpZWxkRGVmLCBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICAgICAgcmFkaXVzOiBvcmJGYW1pbHkubWVtYmVycy5iYXNpY09yYi5yYWRpdXMgKiBzY2FsZSgpLFxuICAgICAgICB9KSwgcHgsIHB5LCBjb21iYXROb3csIHNjYWxlKCkpO1xuICAgICAgICBpZiAoc2hpZWxkQ29udGFjdC5hYnNvcmJlZCkge1xuICAgICAgICAgIGlmIChzaGllbGRDb250YWN0LmVuZW15RGVzdHJveWVkKSB7XG4gICAgICAgICAgICBlbmVteS5keWluZyA9IHRydWU7XG4gICAgICAgICAgICBlbmVteS5hY3Rvci5leHBsb2RlTWFnbml0dWRlID0gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmIuZXhwbG9zaW9uTWFnbml0dWRlO1xuICAgICAgICAgICAgZW5lbXkuYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJFbmVteURlc3Ryb3llZFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5lbXkuYWN0b3IuaW1wYWN0KHsgZGlyZWN0aW9uOiB7IHg6IDAsIHk6IDEgfSwgbWFnbml0dWRlOiBzaGllbGRDb250YWN0LmRhbWFnZUFic29yYmVkIC8gb3JiRmFtaWx5Lm1lbWJlcnMuYmFzaWNPcmIuaW1wYWN0UmVzaXN0YW5jZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJIaXRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYXllciBib2R5IGNvbnRhY3RcbiAgICAgIGNvbnN0IHBvaW50cyA9IHNxdWFkLnBvaW50cyhwbGF5ZXJZKCksIHNjYWxlKCkpO1xuICAgICAgY29uc3QgaGl0SW5kZXggPSBwb2ludHMuZmluZEluZGV4KHBvaW50ID0+IE1hdGguaHlwb3QocG9pbnQueCAtIGVuZW15LngsIHBvaW50LnkgLSBlbmVteS55KSA8PSBvcmJGYW1pbHkubWVtYmVycy5iYXNpY09yYi5yYWRpdXMgKiAzLjIpO1xuICAgICAgaWYgKGhpdEluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaGl0SW5kZXhdO1xuICAgICAgICBjb25zdCBhY3RvciA9IHBsYXllckFjdG9yc1toaXRJbmRleF0gPz8gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcbiAgICAgICAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IC41NTtcbiAgICAgICAgYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgICAgZXhwbG9kaW5nUGxheWVycy5wdXNoKHsgYWN0b3IsIHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSk7XG4gICAgICAgIHBsYXllckFjdG9ycy5zcGxpY2UoaGl0SW5kZXgsIDEpO1xuICAgICAgICBzcXVhZC5yZW1vdmUoKTtcbiAgICAgICAgZW5lbWllcy5zcGxpY2UoZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJFbmVteURlc3Ryb3llZFwiKTtcbiAgICAgICAgaWYgKHNxdWFkLmNvdW50ID09PSAwKSB7IGZhaWx1cmVSZWFzb24gPSBcIlRoZSBlbnRpcmUgc3F1YWQgd2FzIGRlc3Ryb3llZCBvbiBjb250YWN0LlwiOyBmaW5pc2goZmFsc2UpOyByZXR1cm47IH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmVteS55ID49IHBsYXllclkoKSkge1xuICAgICAgICBicmVhY2hlcysrO1xuICAgICAgICBlbmVtaWVzLnNwbGljZShlbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIkVuZW15RXNjYXBlZFwiKTtcbiAgICAgICAgZmFpbHVyZVJlYXNvbiA9IFwiQW4gZW5lbXkgcGFzc2VkIHRoZSBkZWZlbnNlIGxpbmUuXCI7XG4gICAgICAgIGZpbmlzaChmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0gUGlja3VwIGNvbGxlY3Rpb24gLS0tXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLmd1blBpY2t1cHNdKSB7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiBzY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gcGxheWVyWSgpIC0gMTUgKiBzY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSBwbGF5ZXJMYW5lKSB7XG4gICAgICAgIGFjdGl2ZUJ5RmFtaWx5Lmd1biA9IHsgaWQ6IHBpY2t1cC5ndW5JZCwgbGV2ZWw6IDEgfTtcbiAgICAgICAgY29vbGRvd24gPSAwO1xuICAgICAgICBndW5QaWNrdXBzLnNwbGljZShndW5QaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJQaWNrdXBcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gY2FudmFzLmhlaWdodCkgZ3VuUGlja3Vwcy5zcGxpY2UoZ3VuUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi5zaGllbGRQaWNrdXBzXSkge1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHBsYXllclkoKSAtIDE1ICogc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gcGxheWVyTGFuZSkge1xuICAgICAgICAvLyBGYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5OiByZXBsYWNlIGV4aXN0aW5nIHNoaWVsZFxuICAgICAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1twaWNrdXAuc2hpZWxkSWRdO1xuICAgICAgICBhY3RpdmVCeUZhbWlseS5zaGllbGQgPSBuZXcgU2hpZWxkU3RhdGUocGlja3VwLnNoaWVsZElkLCBkZWYubWF4Q2hhcmdlcyk7XG4gICAgICAgIHNoaWVsZFBpY2t1cHMuc3BsaWNlKHNoaWVsZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIlBpY2t1cFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiBjYW52YXMuaGVpZ2h0KSBzaGllbGRQaWNrdXBzLnNwbGljZShzaGllbGRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnN3b3JkUGlja3Vwc10pIHtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSBwbGF5ZXJZKCkgLSAxNSAqIHNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHBsYXllckxhbmUpIHtcbiAgICAgICAgLy8gRmFtaWx5LXNjb3BlZCBleGNsdXNpdml0eTogcmVwbGFjZSBleGlzdGluZyBzd29yZFxuICAgICAgICBhY3RpdmVCeUZhbWlseS5zd29yZCA9IG5ldyBTd29yZFN0YXRlKHBpY2t1cC5zd29yZElkKTtcbiAgICAgICAgc3dvcmRQaWNrdXBzLnNwbGljZShzd29yZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIlBpY2t1cFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiBjYW52YXMuaGVpZ2h0KSBzd29yZFBpY2t1cHMuc3BsaWNlKHN3b3JkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi5tdWx0aXBsaWVyc10pIHtcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpOyBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiBzY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gcGxheWVyWSgpIC0gMTUgKiBzY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSBwbGF5ZXJMYW5lKSB7XG4gICAgICAgIHNxdWFkLmFkZChtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnNbcGlja3VwLm11bHRpcGxpZXJJZF0uc3F1YWRBZGRlZCk7XG4gICAgICAgIHN5bmNQbGF5ZXJBY3RvcnMoKTtcbiAgICAgICAgbXVsdGlwbGllcnMuc3BsaWNlKG11bHRpcGxpZXJzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJQaWNrdXBcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gY2FudmFzLmhlaWdodCkgbXVsdGlwbGllcnMuc3BsaWNlKG11bHRpcGxpZXJzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuXG4gICAgaWYgKGVsYXBzZWQgPj0gYWN0aXZlVHJhY2suZHVyYXRpb25TZWNvbmRzICYmIGVuZW1pZXMubGVuZ3RoID09PSAwKSBmaW5pc2goYnJlYWNoZXMgPT09IDApO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFbnZpcm9ubWVudCByZW5kZXJpbmdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3QgZW52aXJvbm1lbnQgPSAodHJhY2s6IFRyYWNrTWVtYmVyLCBub3c6IG51bWJlcik6IE5lb25QcmltaXRpdmVbXSA9PiB7XG4gICAgY29uc3Qgc2NlbmUgPSBjcmVhdGVMYW5lUnVubmVyU2NlbmUoe1xuICAgICAgc2NlbmVJZDogYWN0aXZlU2NlbmVJZCgpLFxuICAgICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgIHRpbWVNczogbm93LFxuICAgIH0pO1xuICAgIHJldHVybiBbLi4uKHNjZW5lLnByaW1pdGl2ZXMgPz8gW10pXTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRHJhd1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdCBkcmF3ID0gKG5vdzogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IGFjdGl2ZVRyYWNrID8gZW52aXJvbm1lbnQoYWN0aXZlVHJhY2ssIG5vdykgOiBbXTtcbiAgICBjb25zdCBzID0gc2NhbGUoKTtcblxuICAgIGlmIChhY3RpdmVUcmFjaykge1xuICAgICAgLy8gLS0tIFBsYXllciBsYW5lIHNtZWFyIC0tLVxuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiBzcXVhZC5wb2ludHMocGxheWVyWSgpLCBzKSkge1xuICAgICAgICBjb25zdCBzbWVhciA9IE1hdGgubWluKDIyICogcywgTWF0aC5hYnMoc3F1YWQudGFyZ2V0WCAtIHNxdWFkLngpICogLjQ1KTtcbiAgICAgICAgaWYgKHNtZWFyID4gMikgcHJpbWl0aXZlcy5wdXNoKHsgeDogcG9pbnQueCAtIE1hdGguc2lnbihzcXVhZC50YXJnZXRYIC0gc3F1YWQueCkgKiBzbWVhciAqIC41LCB5OiBwb2ludC55LCB3aWR0aDogc21lYXIsIGhlaWdodDogMi4yICogcywgY29sb3I6IG5lb25QYWxldHRlLmRlZXBCbHVlLCBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUuY3lhbiwgZ2xvdzogLjQ1LCBpbnRlbnNpdHk6IC41LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIC0tLSBQcm9qZWN0aWxlcyAtLS1cbiAgICAgIHByaW1pdGl2ZXMucHVzaCguLi5ndW5TaW11bGF0aW9uLnByb2plY3RpbGVQcmltaXRpdmVzKCkpO1xuXG4gICAgfVxuXG4gICAgaWYgKHZpY3RvcnkpIHByaW1pdGl2ZXMucHVzaCguLi52aWN0b3J5LnByaW1pdGl2ZXMobm93KSk7XG5cbiAgICBjb25zdCBzaGFwZUluc3RhbmNlczogTmVvblRvcERvd25TaGFwZVtdID0gW107XG4gICAgaWYgKGFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCkge1xuICAgICAgY29uc3QgbGl2ZVNoaWVsZCA9IGFjdGl2ZUJ5RmFtaWx5LnNoaWVsZDtcbiAgICAgIGNvbnN0IGxpdmVEZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tsaXZlU2hpZWxkLnNoaWVsZElkXTtcbiAgICAgIGNvbnN0IHNjZW5lID0gc2hpZWxkVmlzdWFscyh7XG4gICAgICAgIGRlZmluaXRpb246IGxpdmVEZWYsXG4gICAgICAgIHN0cmVuZ3RoOiBsaXZlU2hpZWxkLmNoYXJnZXMsXG4gICAgICAgIGluaXRpYWxTdHJlbmd0aDogbGl2ZURlZi5tYXhDaGFyZ2VzLFxuICAgICAgICB4OiBzcXVhZC54LCB5OiBwbGF5ZXJZKCksIG5vdywgc2NhbGU6IHMsXG4gICAgICAgIGhpdFByb2dyZXNzOiBsaXZlU2hpZWxkLmhpdEZsYXNoUHJvZ3Jlc3MsXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCguLi5zY2VuZS5wcmltaXRpdmVzKTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goLi4uc2NlbmUuc2hhcGVzKTtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZUJ5RmFtaWx5LnN3b3JkKSB7XG4gICAgICBjb25zdCBsaXZlU3dvcmQgPSBhY3RpdmVCeUZhbWlseS5zd29yZDtcbiAgICAgIGNvbnN0IGxpdmVEZWYgPSBzd29yZEZhbWlseS5tZW1iZXJzW2xpdmVTd29yZC5zd29yZElkXTtcbiAgICAgIGNvbnN0IHNjZW5lID0gc3dvcmRWaXN1YWxzKHtcbiAgICAgICAgZGVmaW5pdGlvbjogbGl2ZURlZixcbiAgICAgICAgc2xhc2g6IGxpdmVTd29yZC5hY3RpdmVTbGFzaCxcbiAgICAgICAgeDogc3F1YWQueCwgeTogcGxheWVyWSgpLCBzY2FsZTogcyxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKC4uLnNjZW5lLnByaW1pdGl2ZXMpO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaCguLi5zY2VuZS5zaGFwZXMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBzaGllbGRQaWNrdXBzKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnNoaWVsZElkXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goc2hpZWxkUGlja3VwVmlzdWFsKHtcbiAgICAgICAgeDogbGFuZVgocGlja3VwLmxhbmUpLCB5OiBwaWNrdXAueSxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgICAgICBub3csIHNjYWxlOiBzLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBzd29yZFBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBzd29yZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zd29yZElkXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goc3dvcmRQaWNrdXBWaXN1YWwoe1xuICAgICAgICB4OiBsYW5lWChwaWNrdXAubGFuZSksIHk6IHBpY2t1cC55LFxuICAgICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgICAgIG5vdywgc2NhbGU6IHMsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXllclNpemUgPSAxNDtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHNxdWFkLnBvaW50cyhwbGF5ZXJZKCksIHMpLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgYWN0b3IgPSBwbGF5ZXJBY3RvcnNbaW5kZXhdID8/IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoYWN0b3IsIHBvaW50LngsIHBvaW50LnksIHBsYXllclNpemUsIHsgcm90YXRpb25YOiBNYXRoLnNpbihub3cgLyA2NTApICogLjEyIH0pKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGV4cGxvZGluZ1BsYXllcnMpIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShpdGVtLmFjdG9yLCBpdGVtLngsIGl0ZW0ueSwgcGxheWVyU2l6ZSkpO1xuICAgIGZvciAoY29uc3QgZW5lbXkgb2YgZW5lbWllcykgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGVuZW15LmFjdG9yLCBlbmVteS54LCBlbmVteS55LCAxOCwgeyByb3RhdGlvblk6IE1hdGguc2luKG5vdyAvIDcwMCArIGVuZW15LnJvd0lkKSAqIC4xOCB9KSk7XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgZ3VuUGlja3Vwcykge1xuICAgICAgY29uc3QgZ3VuID0gZ3VuRmFtaWx5Lm1lbWJlcnNbcGlja3VwLmd1bklkXTtcbiAgICAgIHBpY2t1cC5hY3Rvci5sYWJlbCA9IHNoYXBlTGFiZWwoZ3VuLmxhYmVsLCBcImFib3ZlXCIsIDEwLCA3KTtcbiAgICAgIHBpY2t1cC5hY3Rvci5jb2xvciA9IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKHBpY2t1cC5hY3RvciwgcGlja3VwLngsIHBpY2t1cC55LCAxNSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBtdWx0aXBsaWVycykge1xuICAgICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVyc1twaWNrdXAubXVsdGlwbGllcklkXTtcbiAgICAgIHBpY2t1cC5hY3Rvci5sYWJlbCA9IHNoYXBlTGFiZWwoYCR7c3BlYy5zcXVhZEFkZGVkICsgMX14YCwgXCJjZW50ZXJcIiwgMTEsIDApO1xuICAgICAgcGlja3VwLmFjdG9yLmNvbG9yID0gbmVvblBhbGV0dGVbc3BlYy5waWNrdXBDb2xvcl07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGlja3VwLmFjdG9yLCBwaWNrdXAueCwgcGlja3VwLnksIDE2KSk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVJbnN0YW5jZXMsIGNhbWVyYVNldHRpbmdzLCB7XG4gICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgcGxheWVyWTogcGxheWVyWSgpLFxuICAgIH0pO1xuICAgIHJlbmRlcmVyLnJlbmRlcihwcm9qZWN0ZWQsIG5vdyAvIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IGZyYW1lID0gKG5vdzogbnVtYmVyKSA9PiB7XG4gICAgdXBkYXRlKG5vdyk7XG4gICAgZHJhdyhjb21iYXROb3cpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gIH07XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG59IGNhdGNoIChjYXVzZSkge1xuICBlcnJvci5oaWRkZW4gPSBmYWxzZTtcbiAgZXJyb3IudGV4dENvbnRlbnQgPSBjYXVzZSBpbnN0YW5jZW9mIEVycm9yID8gY2F1c2UubWVzc2FnZSA6IFN0cmluZyhjYXVzZSk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgSnVzdFRoZUdhbWVzUGxlYXNlPzoge1xuICAgICAgdXJsT3B0aW9ucz86IHtcbiAgICAgICAgaXNFbmFibGVkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICB9O1xuICAgIH07XG4gICAgZ2FtZUF1ZGlvPzoge1xuICAgICAgcGxheShpZDogc3RyaW5nKTogdm9pZDtcbiAgICAgIHBsYXlSb3RhdGVkKGlkOiBzdHJpbmcsIGFsdGVybmF0aXZlczogbnVtYmVyKTogdm9pZDtcbiAgICB9O1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQU8sSUFBTSxjQUFjO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUNaOzs7QUNPQSxJQUFNLFVBQVUsQ0FBQyxPQUFlLFdBQVcsQ0FBQyxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxNQUNwRSxNQUFNLEtBQUssRUFBRSxRQUFRLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUN0QyxRQUFNLFFBQVEsV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzNDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3BELENBQUM7QUFFSCxJQUFNLE9BQU8sQ0FBQyxRQUFnQixRQUFRLE1BQUssV0FBVyxDQUFDLEtBQUssS0FBSyxNQUMvRCxNQUFNLEtBQUssRUFBRSxRQUFRLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQzNDLFFBQU0sU0FBUyxJQUFJLElBQUksUUFBUTtBQUMvQixRQUFNLFFBQVEsV0FBVyxJQUFJLEtBQUssS0FBSztBQUN2QyxTQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxRQUFRLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTTtBQUM1RCxDQUFDO0FBRUgsSUFBTSxVQUF1QixDQUFDLENBQUMs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LElBQUksTUFBTSxHQUFHLElBQUksS0FBSSxDQUFDLENBQUM7QUFBQSxJQUN4SDtBQUNBLGVBQVcsUUFBUSxpQkFBa0IsZ0JBQWUsS0FBSyxvQkFBb0IsS0FBSyxPQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQ3BILGVBQVcsU0FBUyxRQUFTLGdCQUFlLEtBQUssb0JBQW9CLE1BQU0sT0FBTyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksRUFBRSxXQUFXLEtBQUssSUFBSSxNQUFNLE1BQU0sTUFBTSxLQUFLLElBQUksS0FBSSxDQUFDLENBQUM7QUFDL0osZUFBVyxVQUFVLFlBQVk7QUFDL0IsWUFBTSxNQUFNLFVBQVUsUUFBUSxPQUFPLEtBQUs7QUFDMUMsYUFBTyxNQUFNLFFBQVEsV0FBVyxJQUFJLE9BQU8sU0FBUyxJQUFJLENBQUM7QUFDekQsYUFBTyxNQUFNLFFBQVEsWUFBWSxJQUFJLGVBQWUsZUFBZTtBQUNuRSxxQkFBZSxLQUFLLG9CQUFvQixPQUFPLE9BQU8sT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFBQSxJQUMvRTtBQUNBLGVBQVcsVUFBVSxhQUFhO0FBQ2hDLFlBQU0sT0FBTyxpQkFBaUIsUUFBUSxPQUFPLFlBQVk7QUFDekQsYUFBTyxNQUFNLFFBQVEsV0FBVyxHQUFHLEtBQUssYUFBYSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUM7QUFDMUUsYUFBTyxNQUFNLFFBQVEsWUFBWSxLQUFLLFdBQVc7QUFDakQscUJBQWUsS0FBSyxvQkFBb0IsT0FBTyxPQUFPLE9BQU8sR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQUEsSUFDL0U7QUFDQSxVQUFNLFlBQVksdUJBQXVCLFlBQVksZ0JBQWdCLGdCQUFnQjtBQUFBLE1BQ25GLE9BQU8sT0FBTztBQUFBLE1BQ2QsUUFBUSxPQUFPO0FBQUEsTUFDZixTQUFTLFFBQVE7QUFBQSxJQUNuQixDQUFDO0FBQ0QsYUFBUyxPQUFPLFdBQVcsTUFBTSxHQUFJO0FBQUEsRUFDdkM7QUFFQSxRQUFNLFFBQVEsQ0FBQyxRQUFnQjtBQUM3QixXQUFPLEdBQUc7QUFDVixTQUFLLFNBQVM7QUFDZCwwQkFBc0IsS0FBSztBQUFBLEVBQzdCO0FBQ0Esd0JBQXNCLEtBQUs7QUFDN0IsU0FBUyxPQUFPO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxjQUFjLGlCQUFpQixRQUFRLE1BQU0sVUFBVSxPQUFPLEtBQUs7QUFDM0U7IiwKICAibmFtZXMiOiBbImNhbnZhcyIsICJ3aWR0aCIsICJoZWlnaHQiLCAic2hhZGVyIiwgImhleCIsICJjYW52YXMiLCAiY2FudmFzIiwgImNvbG9ycyIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJyZXN1bHQiLCAicmVzdWx0IiwgInJlc3VsdCIsICJsZXZlbCJdCn0K

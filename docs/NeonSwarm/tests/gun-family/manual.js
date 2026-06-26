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
  return { primitives: projectedPrimitives, shapes: projectedShapes };
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
var shapeLabel = (text, position, fontSize, offset = 4) => ({ text, position, fontSize, offset, fontFamily: "Segoe UI, sans-serif", fontWeight: 700 });

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

// projects/NeonSwarm/test-pages/gun-family/manual.ts
var canvas = document.querySelector("#game-canvas");
var error = document.querySelector("#error");
var gunSelect = document.querySelector("#gun-select");
var levelSelect = document.querySelector("#level-select");
var weaponReadout = document.querySelector("#weapon-readout");
var scoreReadout = document.querySelector("#score-readout");
var specReadout = document.querySelector("#spec-readout");
var formationSize = document.querySelector("#formation-size");
var formationRows = document.querySelector("#formation-rows");
var shapeZoom = document.querySelector("#shape-zoom");
var gameElement = document.querySelector("#game");
applyPortraitStage(gameElement, { aspectWidth: 9, aspectHeight: 16 });
try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 450, 800);
  const guns = gunFamily.members;
  const orb = orbFamily.members.basicOrb;
  const enemies = [];
  const gunSimulation = new GunSimulation();
  const projectiles = gunSimulation.projectiles;
  const pickups = [];
  const effects = gunSimulation.effects;
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
  for (const [id, gun] of Object.entries(guns)) {
    gunSelect.add(new Option(gun.label, id));
  }
  gunSelect.value = equippedGunId;
  const selectedLevel = () => {
    const levels = guns[equippedGunId].levels;
    return levels.find((level2) => level2.level === equippedLevel) ?? levels[0];
  };
  const updateReadout = () => {
    const gun = guns[equippedGunId];
    const level2 = selectedLevel();
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
      ["Enemy HP", String(orb.health)],
      ["Enemy speed", String(orb.speed)]
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  const equip = (gunId, level2) => {
    equippedGunId = gunId;
    equippedLevel = level2;
    cooldown = 0;
    gunSelect.value = gunId;
    levelSelect.value = String(level2);
    window.gameAudio?.play("Pickup");
    updateReadout();
  };
  squad.x = laneX(0);
  squad.targetX = laneX(0);
  const spawnEnemy = (lane, x = laneX(lane), y = 105 * scale(), rowId = ++entitySequence) => {
    enemies.push({ id: ++entitySequence, lane, x, y, health: orb.health, hitFlashUntil: 0, rowId, actor: new NeonShapeActor({ shape: swarmShapes.enemy }), dying: false });
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
    enemies.length = projectiles.length = pickups.length = effects.length = multipliers.length = 0;
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
    enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: (projectile.damage + projectile.knockback * 0.06) / orb.impactResistance });
    enemy.hitFlashUntil = now + orb.hitFlashDurationMs;
    window.gameAudio?.play("Hit");
    if (enemy.health <= 0) {
      effects.push({
        kind: "death",
        style: "deathBloom",
        x: enemy.x,
        y: enemy.y,
        color: neonPalette[orb.baseColor],
        secondaryColor: neonPalette[orb.rimColor],
        radius: orb.radius * orb.deathFlashScale * scale(),
        expiresAt: now + orb.hitFlashDurationMs * 2,
        duration: orb.hitFlashDurationMs * 2,
        seed: enemy.id
      });
      enemy.dying = true;
      enemy.actor.explodeMagnitude = orb.explosionMagnitude;
      enemy.actor.dispose("explode" /* Explode */);
      kills += 1;
      window.gameAudio?.play("EnemyDestroyed");
      updateReadout();
    }
  };
  const update = (now) => {
    const delta = Math.min((now - lastFrame) / 1e3, 0.05);
    lastFrame = now;
    const gun = guns[equippedGunId];
    const level2 = selectedLevel();
    cooldown -= delta;
    if (cooldown <= 0) {
      fire(gun, level2);
      cooldown += 1 / level2.fireRatePerSecond;
    }
    if (gunSimulation.updateFiring(now) > 0) window.gameAudio?.playRotated("Primary", 3);
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
        radius: orb.radius * scale()
      })),
      { top: -40 * scale(), left: -40, right: canvas.width + 40 },
      (projectile, target) => hitEnemy(projectile, target, now)
    );
    for (const enemy of [...enemies]) {
      enemy.actor.update(delta);
      enemy.y += orb.speed * scale() * delta - enemy.actor.y * canvas.height / 2.5;
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
      ...createLaneRunnerScene({ sceneId: "neonHall", width: canvas.width, height: canvas.height, timeMs: now }).primitives ?? []
    ];
    for (const point of squad.points(playerY() + recoil, s)) void point;
    primitives.push(...gunSimulation.projectilePrimitives());
    if (false) for (const enemy of enemies) {
      primitives.push({
        x: enemy.x + orb.radius * 0.35 * s,
        y: enemy.y + orb.radius * 1.12 * s,
        width: orb.radius * 0.9 * s,
        height: orb.radius * 0.28 * s,
        color: neonPalette[orb.shadowColor],
        glow: 0.18,
        intensity: 0.3,
        shape: "circle"
      });
      primitives.push({
        x: enemy.x,
        y: enemy.y,
        width: orb.radius * s,
        color: enemy.hitFlashUntil > now ? neonPalette.whiteHot : neonPalette[orb.rimColor],
        secondaryColor: neonPalette[orb.baseColor],
        glow: orb.glow,
        texture: orb.surfaceTexture,
        rimIntensity: orb.rimIntensity,
        shadowStrength: orb.shadowStrength,
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
    for (const point of squad.points(playerY() + recoil, s)) shapes.push(actorInTopDownScene(new NeonShapeActor({ shape: swarmShapes.player }), point.x, point.y, 14 * zoom));
    for (const enemy of enemies) shapes.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, 18 * zoom, { rotationY: Math.sin(now / 700 + enemy.id) * 0.18 }));
    for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapes.push(actorInTopDownScene(pickup.actor, laneX(pickup.lane), pickup.y, 15 * zoom));
    }
    for (const pickup of multipliers) {
      pickup.actor.label = shapeLabel(`${multiplierFamily.members.squadPlusOne.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[multiplierFamily.members.squadPlusOne.pickupColor];
      shapes.push(actorInTopDownScene(pickup.actor, laneX(pickup.lane), pickup.y, 16 * zoom));
    }
    renderer.render(projectHelicopterScene(primitives, shapes, defaultHelicopterCameraSettings, {
      width: canvas.width,
      height: canvas.height,
      playerY: playerY()
    }), now / 1e3);
  };
  const frame = (now) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
  equip(equippedGunId, equippedLevel);
  spawnEnemy(0);
  spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdG9wLWRvd24tc2NlbmUudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2xhbmUtcnVubmVyLXNjZW5lcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvcHJvamVjdGlsZS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Db21iYXRUdW5pbmcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vRmFtaWx5RGVmaW5pdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9HdW5GYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vT3JiRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrRGVmaW5pdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2sxLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazIudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2lucHV0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc3F1YWQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9hdXRvQWltLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvdmlld3BvcnQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaGFwZVZpc3VhbHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvZ3VuU2ltdWxhdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vdGVzdC1wYWdlcy9ndW4tZmFtaWx5L21hbnVhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24sIE5lb25Qb2ludCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlTGFiZWxQb3NpdGlvbiA9IFwiYWJvdmVcIiB8IFwiYmVsb3dcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlTGFiZWwge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogTmVvblNoYXBlTGFiZWxQb3NpdGlvbjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICBjb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgcm90YXRpb25ZPzogbnVtYmVyO1xuICByb3RhdGlvblo/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIHNoaWVsZGVkPzogYm9vbGVhbjtcbiAgbGluZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgZW5lcmd5SW50ZW5zaXR5PzogbnVtYmVyO1xuICBlbmVyZ3lDb3ZlcmFnZT86IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ/OiBudW1iZXI7XG4gIGVuZXJneUJsZWVkPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBleHBsb2RlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbnR5cGUgVjMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG50eXBlIFZlcnRleCA9IHtcbiAgcDogVjM7IG46IFYzOyBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdOyBnbG93OiBudW1iZXI7XG4gIGVmZmVjdDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gMTQ7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgU2NlbmUgeyBhc3BlY3Q6IGYzMiwgY2FtZXJhOiBmMzIsIHRpbWU6IGYzMiwgcGFkZGluZzogZjMyIH1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuc3RydWN0IElucHV0IHtcbiAgQGxvY2F0aW9uKDApIHBvc2l0aW9uOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigzKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBlZmZlY3Q6IHZlYzRmLFxufVxuc3RydWN0IE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgZWZmZWN0OiB2ZWM0Zixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihpbnB1dDogSW5wdXQpIC0+IE91dHB1dCB7XG4gIGxldCBkZXB0aCA9IHNjZW5lLmNhbWVyYSAtIGlucHV0LnBvc2l0aW9uLno7XG4gIHZhciBvdXRwdXQ6IE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYoaW5wdXQucG9zaXRpb24ueCAqIDQgLyBzY2VuZS5hc3BlY3QsIGlucHV0LnBvc2l0aW9uLnkgKiA0LCBkZXB0aCAqIC4wNDUsIGRlcHRoKTtcbiAgb3V0cHV0Lm5vcm1hbCA9IGlucHV0Lm5vcm1hbDtcbiAgb3V0cHV0LmNvbG9yID0gaW5wdXQuY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaW5wdXQuZ2xvdztcbiAgb3V0cHV0LmVmZmVjdCA9IGlucHV0LmVmZmVjdDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZShpbnB1dC5ub3JtYWwpO1xuICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLS40NSwgLS43LCAxKSk7XG4gIGxldCBkaWZmdXNlID0gLjE4ICsgbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCkgKiAuODI7XG4gIGxldCByaW0gPSBwb3coMSAtIGFicyhub3JtYWwueiksIDIuMik7XG4gIGxldCBzaWRlID0gMSAtIGFicyhub3JtYWwueik7XG4gIGxldCByYXJlU3VyZ2UgPSBwb3cobWF4KC4wLCBzaW4oc2NlbmUudGltZSAqIGlucHV0LmVmZmVjdC56ICogLjgyICsgaW5wdXQuY29sb3IuciAqIDcuMCkpLCAyMi4wKVxuICAgICogaW5wdXQuZWZmZWN0LnggKiBpbnB1dC5lZmZlY3QueSAqIGlucHV0LmVmZmVjdC53O1xuICBsZXQgZW5lcmd5ID0gaW5wdXQuY29sb3IgKiAoZGlmZnVzZSAqIC4xMiArIHJpbSAqIGlucHV0Lmdsb3cgKiAuMzYgKyBzaWRlICogLjA4ICsgcmFyZVN1cmdlICogLjcpO1xuICByZXR1cm4gdmVjNGYoZW5lcmd5ICsgdmVjM2YocmFyZVN1cmdlICogLjE4KSwgLjEyICsgc2lkZSAqIC4xMiArIHJhcmVTdXJnZSAqIC4yOCk7XG59XG5AZnJhZ21lbnQgZm4gbGluZUZyYWdtZW50KGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBhbG9uZyA9IGlucHV0Lm5vcm1hbC54O1xuICBsZXQgYWNyb3NzID0gYWJzKGlucHV0Lm5vcm1hbC55KTtcbiAgbGV0IHBoYXNlID0gaW5wdXQubm9ybWFsLno7XG4gIGxldCBpbnRlbnNpdHkgPSBpbnB1dC5lZmZlY3QueDtcbiAgbGV0IGNvdmVyYWdlID0gaW5wdXQuZWZmZWN0Lnk7XG4gIGxldCBzcGVlZCA9IGlucHV0LmVmZmVjdC56O1xuICBsZXQgYmxlZWQgPSBpbnB1dC5lZmZlY3QudztcbiAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDMxLjAgLSBzY2VuZS50aW1lICogc3BlZWQgKiA1LjQgKyBwaGFzZSkpLCAxMC4wKTtcbiAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDEzLjAgKyBzY2VuZS50aW1lICogc3BlZWQgKiAzLjEgKyBwaGFzZSAqIDIuNykpLCAxOC4wKTtcbiAgbGV0IG5vaXNlID0gc2luKGFsb25nICogNzEuMCArIHBoYXNlICogOC4zKSAqIC41ICsgLjU7XG4gIGxldCB0aHJlc2hvbGQgPSAxLjAgLSBjb3ZlcmFnZTtcbiAgbGV0IGVsZWN0cmljaXR5ID0gc21vb3Roc3RlcCh0aHJlc2hvbGQsIHRocmVzaG9sZCArIC4xOCwgcHVsc2VBICogLjY1ICsgcHVsc2VCICogLjU1ICsgbm9pc2UgKiAuMTgpO1xuICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoLjA2LCAuMjgsIGFjcm9zcyk7XG4gIGxldCBoYWxvID0gMS4wIC0gc21vb3Roc3RlcCguMTIsIDEuMCwgYWNyb3NzKTtcbiAgbGV0IHN1cmdlID0gZWxlY3RyaWNpdHkgKiBpbnRlbnNpdHk7XG4gIGxldCBwdWxzZSA9IC43OCArIHNpbihzY2VuZS50aW1lICogc3BlZWQgKiAyLjEgKyBwaGFzZSkgKiAuMTMgKyBlbGVjdHJpY2l0eSAqIC4yNDtcbiAgbGV0IGNsb3VkID0gaGFsbyAqICguMTMgKyBzdXJnZSAqIC41Mik7XG4gIGxldCBob3QgPSBpbnB1dC5jb2xvciAqIChwdWxzZSArIGNsb3VkICogMi4xKSAqIGlucHV0Lmdsb3cgKyB2ZWMzZihjb3JlICogc3VyZ2UgKiAxLjM1KTtcbiAgbGV0IGFscGhhID0gKGNvcmUgKiAoLjcyICsgcHVsc2UgKiAuMikgKyBjbG91ZCArICgxLjAgLSBhY3Jvc3MpICogYmxlZWQgKiBlbGVjdHJpY2l0eSAqIC4yNCkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGUsIC1wb2ludFsxXSAqIHNjYWxlLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCldO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGNvbnN0IGFkZCA9IChhOiBWMywgYjogVjMsIGM6IFYzLCBub3JtYWw/OiBWMykgPT4ge1xuICAgIGNvbnN0IG4gPSBub3JtYWwgPz8gbm9ybWFsaXplKGNyb3NzKHN1YihiLCBhKSwgc3ViKGMsIGEpKSk7XG4gICAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICAgIF07XG4gICAgW2EsYixjXS5mb3JFYWNoKHAgPT4gb3V0cHV0LnB1c2goeyBwLCBuLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSwgZWZmZWN0IH0pKTtcbiAgfTtcbiAgY29uc3QgZnJvbnQgPSBzaGFwZS5wb2ludHMubWFwKHBvaW50ID0+IG1vdmUocG9pbnQsIGRlcHRoIC8gMikpO1xuICBjb25zdCBiYWNrID0gc2hhcGUucG9pbnRzLm1hcChwb2ludCA9PiBtb3ZlKHBvaW50LCAtZGVwdGggLyAyKSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnQubGVuZ3RoIC0gMTsgaSsrKSBhZGQoZnJvbnRbMF0sIGZyb250W2ldLCBmcm9udFtpICsgMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGJhY2subGVuZ3RoIC0gMTsgaSsrKSBhZGQoYmFja1swXSwgYmFja1tpICsgMV0sIGJhY2tbaV0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSAoaSArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aDtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbaV0sIGJhY2tbbmV4dF0pO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tuZXh0XSwgZnJvbnRbbmV4dF0pO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gZWRnZU1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlcik6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlLCAtcG9pbnRbMV0gKiBzY2FsZSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCksIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApXTtcbiAgfTtcbiAgY29uc3QgZXhwbG9kZSA9IChhOiBWMywgYjogVjMsIGluZGV4OiBudW1iZXIpOiBbVjMsIFYzXSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMDtcbiAgICBpZiAoIXByb2dyZXNzKSByZXR1cm4gW2EsIGJdO1xuICAgIGNvbnN0IG14ID0gKGFbMF0gKyBiWzBdKSAvIDIgLSAoaW5zdGFuY2UueCA/PyAwKSwgbXkgPSAoYVsxXSArIGJbMV0pIC8gMiAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QobXgsIG15KSB8fCAxO1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIGNvbnN0IHNwZWVkID0gbWFnbml0dWRlICogKC40NSArIChNYXRoLnNpbihpbmRleCAqIDkxLjE3KSAqIC41ICsgLjUpICogLjU1KTtcbiAgICBjb25zdCBkeCA9IG14IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCwgZHkgPSBteSAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQgKyBwcm9ncmVzcyAqIHByb2dyZXNzICogLjE4O1xuICAgIGNvbnN0IGFuZ2xlID0gcHJvZ3Jlc3MgKiAoaW5kZXggJSAyID8gMSA6IC0xKSAqIDIuNDtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAocDogVjMpOiBWMyA9PiB7XG4gICAgICBjb25zdCB4ID0gcFswXSAtIChpbnN0YW5jZS54ID8/IDApLCB5ID0gcFsxXSAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgICAgcmV0dXJuIFt4ICogTWF0aC5jb3MoYW5nbGUpIC0geSAqIE1hdGguc2luKGFuZ2xlKSArIChpbnN0YW5jZS54ID8/IDApICsgZHgsIHggKiBNYXRoLnNpbihhbmdsZSkgKyB5ICogTWF0aC5jb3MoYW5nbGUpICsgKGluc3RhbmNlLnkgPz8gMCkgKyBkeSwgcFsyXV07XG4gICAgfTtcbiAgICByZXR1cm4gW3RyYW5zZm9ybShhKSwgdHJhbnNmb3JtKGIpXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBsZXQgZGlzdGFuY2UgPSAwO1xuICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgXTtcbiAgY29uc3QgYWRkTGluZSA9IChhOiBWMywgYjogVjMsIHBoYXNlOiBudW1iZXIsIHdpZHRoU2NhbGUgPSAxLCBvcGFjaXR5ID0gMSkgPT4ge1xuICAgIFthLCBiXSA9IGV4cGxvZGUoYSwgYiwgTWF0aC5mbG9vcihkaXN0YW5jZSAqIDEwMCkgKyBNYXRoLmZsb29yKHBoYXNlICogMTApKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAuMDAxO1xuICAgIGNvbnN0IHdpZHRoID0gKGluc3RhbmNlLmxpbmVUaGlja25lc3MgPz8gMSkgKiAuMDE4ICogd2lkdGhTY2FsZTtcbiAgICBjb25zdCBveCA9IC1keSAvIGxlbmd0aCAqIHdpZHRoLCBveSA9IGR4IC8gbGVuZ3RoICogd2lkdGg7XG4gICAgY29uc3QgYTA6IFYzID0gW2FbMF0gLSBveCwgYVsxXSAtIG95LCBhWzJdXSwgYTE6IFYzID0gW2FbMF0gKyBveCwgYVsxXSArIG95LCBhWzJdXTtcbiAgICBjb25zdCBiMDogVjMgPSBbYlswXSAtIG94LCBiWzFdIC0gb3ksIGJbMl1dLCBiMTogVjMgPSBbYlswXSArIG94LCBiWzFdICsgb3ksIGJbMl1dO1xuICAgIGNvbnN0IHN0YXJ0ID0gZGlzdGFuY2UgKiAyLjQsIGVuZCA9IChkaXN0YW5jZSArIGxlbmd0aCkgKiAyLjQ7XG4gICAgY29uc3QgcHVzaCA9IChwOiBWMywgYWxvbmc6IG51bWJlciwgYWNyb3NzOiBudW1iZXIpID0+XG4gICAgICBvdXRwdXQucHVzaCh7IHAsIG46IFthbG9uZywgYWNyb3NzLCBwaGFzZV0sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIG9wYWNpdHkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqICgxICsgTWF0aC5zaW4oKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIE1hdGguUEkpICogKGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqIDIuMikgKiAoMSAtIChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiAuNyksIGVmZmVjdCB9KTtcbiAgICBwdXNoKGEwLHN0YXJ0LC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMCxlbmQsLTEpO1xuICAgIHB1c2goYjAsZW5kLC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMSxlbmQsMSk7XG4gICAgZGlzdGFuY2UgKz0gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBhZGRMb29wID0gKHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sIHo6IG51bWJlciwgcGhhc2U6IG51bWJlcikgPT5cbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIHopLCBtb3ZlKHBvaW50c1soaW5kZXggKyAxKSAlIHBvaW50cy5sZW5ndGhdLCB6KSwgcGhhc2UgKyBpbmRleCAqIC43MykpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgZGVwdGggLyAyLCAuMyk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCAtZGVwdGggLyAyLCAyLjEpO1xuICBzaGFwZS5ob2xlcz8uZm9yRWFjaCgoaG9sZSwgaW5kZXgpID0+IHtcbiAgICBhZGRMb29wKGhvbGUsIGRlcHRoIC8gMiArIC4wMDIsIDMuNyArIGluZGV4KTtcbiAgICBhZGRMb29wKGhvbGUsIC1kZXB0aCAvIDIgLSAuMDAyLCA1LjIgKyBpbmRleCk7XG4gIH0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIC1kZXB0aCAvIDIpLCBtb3ZlKHBvaW50LCBkZXB0aCAvIDIpLCA2LjEgKyBpbmRleCkpO1xuICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwICogKGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEpO1xuICBjb25zdCBicmFuY2hTdHJlbmd0aCA9IChpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSkgKiAoaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyKTtcbiAgY29uc3QgcmFuZG9tID0gKHNlZWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTggKyBzaGFwZS5wb2ludHMubGVuZ3RoICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XG4gICAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGlhbnM6IG51bWJlcik6IE5lb25Qb2ludCA9PiBbXG4gICAgeCAqIE1hdGguY29zKHJhZGlhbnMpIC0geSAqIE1hdGguc2luKHJhZGlhbnMpLFxuICAgIHggKiBNYXRoLnNpbihyYWRpYW5zKSArIHkgKiBNYXRoLmNvcyhyYWRpYW5zKSxcbiAgXTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlID0gTWF0aC5mbG9vcih0aW1lICogMi4zNSArIGluZGV4ICogLjYxKTtcbiAgICBjb25zdCBhZ2UgPSB0aW1lICogMi4zNSArIGluZGV4ICogLjYxIC0gY3ljbGU7XG4gICAgY29uc3Qgc2VlZCA9IGN5Y2xlICogMzcuMSArIGluZGV4ICogMTEuNztcbiAgICBjb25zdCBhY3RpdmVEdXJhdGlvbiA9IC4xOCArIHJhbmRvbShzZWVkICsgMSkgKiAuMjU7XG4gICAgY29uc3QgaGF6ZUR1cmF0aW9uID0gTWF0aC5taW4oMSwgYWN0aXZlRHVyYXRpb24gKyAuMjggKyByYW5kb20oc2VlZCArIDIpICogLjIyKTtcbiAgICBjb25zdCBicmFuY2hBY3RpdmUgPSBhZ2UgPCBhY3RpdmVEdXJhdGlvbjtcbiAgICBjb25zdCBoYXplQWN0aXZlID0gYWdlIDwgaGF6ZUR1cmF0aW9uO1xuICAgIGlmICgoIWJyYW5jaEFjdGl2ZSAmJiAhaGF6ZUFjdGl2ZSkgfHwgcmFuZG9tKHNlZWQgKyAzKSA+IE1hdGgubWluKC43OCwgYnJhbmNoU3RyZW5ndGggKiAuNSkpIHJldHVybjtcbiAgICBjb25zdCBuZXh0ID0gc2hhcGUucG9pbnRzWyhpbmRleCArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aF07XG4gICAgY29uc3QgdCA9IC4xNiArIHJhbmRvbShzZWVkICsgNCkgKiAuNjg7XG4gICAgY29uc3QgYmFzZTogTmVvblBvaW50ID0gW3BvaW50WzBdICsgKG5leHRbMF0gLSBwb2ludFswXSkgKiB0LCBwb2ludFsxXSArIChuZXh0WzFdIC0gcG9pbnRbMV0pICogdF07XG4gICAgY29uc3QgdHggPSBuZXh0WzBdIC0gcG9pbnRbMF0sIHR5ID0gbmV4dFsxXSAtIHBvaW50WzFdLCB0bCA9IE1hdGguaHlwb3QodHgsIHR5KSB8fCAxO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJhbmRvbShzZWVkICsgNSkgPiAuNSA/IDEgOiAtMTtcbiAgICBjb25zdCBwZXJwZW5kaWN1bGFyOiBOZW9uUG9pbnQgPSBbLXR5IC8gdGwgKiBkaXJlY3Rpb24sIHR4IC8gdGwgKiBkaXJlY3Rpb25dO1xuICAgIGNvbnN0IGZpcnN0Sml0dGVyID0gKDEwICsgcmFuZG9tKHNlZWQgKyA2KSAqIDEwKSAqIE1hdGguUEkgLyAxODAgKiAocmFuZG9tKHNlZWQgKyA3KSA+IC41ID8gMSA6IC0xKTtcbiAgICBsZXQgaGVhZGluZyA9IHJvdGF0ZWQocGVycGVuZGljdWxhclswXSwgcGVycGVuZGljdWxhclsxXSwgZmlyc3RKaXR0ZXIpO1xuICAgIGNvbnN0IHNlZ21lbnRDb3VudCA9IDEgKyBNYXRoLmZsb29yKHJhbmRvbShzZWVkICsgOCkgKiAzKTtcbiAgICBjb25zdCBwb2ludHM6IE5lb25Qb2ludFtdID0gW2Jhc2VdO1xuICAgIGZvciAobGV0IHNlZ21lbnQgPSAwOyBzZWdtZW50IDwgc2VnbWVudENvdW50OyBzZWdtZW50KyspIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IC4wNTUgKyByYW5kb20oc2VlZCArIDEwICsgc2VnbWVudCkgKiAuMDk1O1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzWzBdICsgaGVhZGluZ1swXSAqIGxlbmd0aCwgcHJldmlvdXNbMV0gKyBoZWFkaW5nWzFdICogbGVuZ3RoXSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoMjAgKyByYW5kb20oc2VlZCArIDIwICsgc2VnbWVudCkgKiA0MCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaGVhZGluZyA9IHJvdGF0ZWQoaGVhZGluZ1swXSwgaGVhZGluZ1sxXSwgb2Zmc2V0ICogKHJhbmRvbShzZWVkICsgMzAgKyBzZWdtZW50KSA+IC41ID8gMSA6IC0xKSk7XG4gICAgfVxuICAgIGlmIChoYXplQWN0aXZlKSB7XG4gICAgICBjb25zdCBmYWRlID0gMSAtIE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAvIE1hdGgubWF4KC4wMDEsIGhhemVEdXJhdGlvbiAtIGFjdGl2ZUR1cmF0aW9uKTtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pICogLjAzNTtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZW5kID0gcG9pbnRzW3NlZ21lbnQgKyAxXTtcbiAgICAgICAgY29uc3QgaGF6ZVN0YXJ0OiBOZW9uUG9pbnQgPSBbc3RhcnRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIHN0YXJ0WzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgY29uc3QgaGF6ZUVuZDogTmVvblBvaW50ID0gW2VuZFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgZW5kWzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgYWRkTGluZShtb3ZlKGhhemVTdGFydCwgZGVwdGggLyAyICsgLjAwMiksIG1vdmUoaGF6ZUVuZCwgZGVwdGggLyAyICsgLjAwMiksIDMxICsgc2VlZCArIHNlZ21lbnQsIDEuNDUgKyBmYWRlICogLjU1LCBmYWRlICogLjM0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYnJhbmNoQWN0aXZlKSB7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGFkZExpbmUobW92ZShzdGFydCwgZGVwdGggLyAyICsgLjAwNiksIG1vdmUocG9pbnRzW3NlZ21lbnQgKyAxXSwgZGVwdGggLyAyICsgLjAwNiksIDExICsgc2VlZCArIHNlZ21lbnQsIC40Mik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgY2xhc3MgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNsaW5lUGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2RlcHRoOiBHUFVUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICNsYWJlbExheWVyOiBIVE1MRGl2RWxlbWVudDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50ICYmIGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIuY2xhc3NOYW1lID0gXCJuZW9uLXNoYXBlLWxhYmVsLWxheWVyXCI7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaW5zZXQ6XCIwXCIsIHBvaW50ZXJFdmVudHM6XCJub25lXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIgfSk7XG4gICAgcGFyZW50Py5hcHBlbmQodGhpcy4jbGFiZWxMYXllcik7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgZXh0cnVkZWQgc2hhcGUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIsIGN1bGxNb2RlOiBcImJhY2tcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogZmFsc2UsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNsaW5lUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJsaW5lRnJhZ21lbnRcIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICAgIH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3Rvcnkgc2hhcGUgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZlcnRpY2VzID0gaW5zdGFuY2VzLmZsYXRNYXAobWVzaCk7XG4gICAgY29uc3QgZWRnZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChlZGdlTWVzaCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICBjb25zdCBlZGdlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZWRnZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGRhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgZWRnZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBlZGdlRGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBkYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgY29uc3QgZWRnZUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGVkZ2VEYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGlmIChlZGdlRGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGVkZ2VCdWZmZXIsIDAsIGVkZ2VEYXRhKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIDUsIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgMF0pKTtcbiAgICBjb25zdCBiaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGxpbmVCaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI2xpbmVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3sgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLCBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsIHN0b3JlT3A6IFwic3RvcmVcIiB9XSxcbiAgICAgIGRlcHRoU3RlbmNpbEF0dGFjaG1lbnQ6IHsgdmlldzogdGhpcy4jZGVwdGghLmNyZWF0ZVZpZXcoKSwgZGVwdGhDbGVhclZhbHVlOiAxLCBkZXB0aExvYWRPcDogXCJjbGVhclwiLCBkZXB0aFN0b3JlT3A6IFwic3RvcmVcIiB9LFxuICAgIH0pO1xuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIHZlcnRleEJ1ZmZlcik7IHBhc3MuZHJhdyh2ZXJ0aWNlcy5sZW5ndGgpOyB9XG4gICAgaWYgKGVkZ2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI2xpbmVQaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGxpbmVCaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCBlZGdlQnVmZmVyKTsgcGFzcy5kcmF3KGVkZ2VzLmxlbmd0aCk7IH1cbiAgICBwYXNzLmVuZCgpOyB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgICB0aGlzLiNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkudGhlbigoKSA9PiB7IHZlcnRleEJ1ZmZlci5kZXN0cm95KCk7IGVkZ2VCdWZmZXIuZGVzdHJveSgpOyB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHsgdGhpcy4jbGFiZWxMYXllci5yZW1vdmUoKTsgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTsgdGhpcy4jc2NlbmVCdWZmZXIuZGVzdHJveSgpOyBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpOyB9XG4gICNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7XG4gICAgICBsZWZ0OiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0fXB4YCxcbiAgICAgIHRvcDogYCR7dGhpcy5jYW52YXMub2Zmc2V0VG9wfXB4YCxcbiAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICB3aWR0aDogYCR7dGhpcy5jYW52YXMuY2xpZW50V2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHR9cHhgLFxuICAgIH0pO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIucmVwbGFjZUNoaWxkcmVuKC4uLmluc3RhbmNlcy5mbGF0TWFwKGluc3RhbmNlID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2UubGFiZWw/LnRleHQgfHwgKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgPD0gMCkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICAgICAgY29uc3QgeCA9IDUwICsgKGluc3RhbmNlLnggPz8gMCkgKiA0MCAvICh0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCB5ID0gNTAgLSAoaW5zdGFuY2UueSA/PyAwKSAqIDQwO1xuICAgICAgY29uc3Qgc2hhcGVSYWRpdXMgPSBzY2FsZSAqIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIC4yO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2hhcGVSYWRpdXMgKyAoaW5zdGFuY2UubGFiZWwub2Zmc2V0ID8/IDgpICsgKGluc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4KSAqIC41O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnN0YW5jZS5sYWJlbC5wb3NpdGlvbiA/PyBcImFib3ZlXCI7XG4gICAgICBsZXQgdHggPSAwLCB0eSA9IDA7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYWJvdmVcIikgdHkgPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImJlbG93XCIpIHR5ID0gb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImxlZnRcIikgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHR4ID0gb2Zmc2V0O1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGluc3RhbmNlLmxhYmVsLnRleHQ7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OmAke3h9JWAsIHRvcDpgJHt5fSVgLCB0cmFuc2Zvcm06YHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3R4fXB4KSxjYWxjKC01MCUgKyAke3R5fXB4KSlgLFxuICAgICAgICBjb2xvcjppbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvciwgZm9udEZhbWlseTppbnN0YW5jZS5sYWJlbC5mb250RmFtaWx5ID8/IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFNpemU6YCR7aW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTh9cHhgLCBmb250V2VpZ2h0OlN0cmluZyhpbnN0YW5jZS5sYWJlbC5mb250V2VpZ2h0ID8/IDYwMCksXG4gICAgICAgIHRleHRTaGFkb3c6YDAgMCA1cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn0sMCAwIDE0cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn1gLCB3aGl0ZVNwYWNlOlwibm93cmFwXCIsXG4gICAgICAgIG9wYWNpdHk6U3RyaW5nKGluc3RhbmNlLm9wYWNpdHkgPz8gMSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbZWxlbWVudF07XG4gICAgfSkpO1xuICB9XG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuI2xvZ2ljYWxTaXplO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCB8fCAhdGhpcy4jZGVwdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuI2RlcHRoICYmIHRoaXMuY2FudmFzLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlLCBOZW9uU2hhcGVMYWJlbCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgZW51bSBOZW9uU2hhcGVEaXNwb3NhbCB7XG4gIEZhZGVPdXQgPSBcImZhZGVPdXRcIixcbiAgRGlzYXBwZWFyID0gXCJkaXNhcHBlYXJcIixcbiAgRXhwbG9kZSA9IFwiZXhwbG9kZVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZVZlY3RvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUltcGFjdCB7XG4gIGRpcmVjdGlvbjogTmVvblNoYXBlVmVjdG9yO1xuICBtYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVBY3Rvck9wdGlvbnMge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgdmVsb2NpdHk/OiBQYXJ0aWFsPE5lb25TaGFwZVZlY3Rvcj47XG4gIHNjYWxlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw/OiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25TaGFwZUFjdG9yIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3I7XG4gIHNjYWxlOiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbDogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU6IG51bWJlcjtcbiAgcm90YXRpb25YID0gMDtcbiAgcm90YXRpb25ZID0gMDtcbiAgcm90YXRpb25aID0gMDtcbiAgZGlzcG9zZWQgPSBmYWxzZTtcbiAgI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAjaW1wYWN0VmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuICAjaW1wYWN0Um90YXRpb246IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25TaGFwZUFjdG9yT3B0aW9ucykge1xuICAgIHRoaXMuc2hhcGUgPSBvcHRpb25zLnNoYXBlO1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCA/PyAwO1xuICAgIHRoaXMueSA9IG9wdGlvbnMueSA/PyAwO1xuICAgIHRoaXMueiA9IG9wdGlvbnMueiA/PyAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IG9wdGlvbnMudmVsb2NpdHk/LnggPz8gMCwgeTogb3B0aW9ucy52ZWxvY2l0eT8ueSA/PyAwIH07XG4gICAgdGhpcy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgPz8gMTtcbiAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmRpc3Bvc2FsID0gb3B0aW9ucy5kaXNwb3NhbCA/PyBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0O1xuICAgIHRoaXMuZXhwbG9kZU1hZ25pdHVkZSA9IG9wdGlvbnMuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gIH1cblxuICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIsIHogPSB0aGlzLnopOiB0aGlzIHtcbiAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VmVsb2NpdHkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSB4OyB0aGlzLnZlbG9jaXR5LnkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1wYWN0KHsgZGlyZWN0aW9uLCBtYWduaXR1ZGUgfTogTmVvblNoYXBlSW1wYWN0KTogdGhpcyB7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gICAgY29uc3QgeCA9IGRpcmVjdGlvbi54IC8gbGVuZ3RoLCB5ID0gZGlyZWN0aW9uLnkgLyBsZW5ndGg7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCArPSB4ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKz0geSAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICs9IHkgKiBtYWduaXR1ZGUgKiAuOTtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi55IC09IHggKiBtYWduaXR1ZGUgKiAuOTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRpc3Bvc2UobW9kZSA9IHRoaXMuZGlzcG9zYWwpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2FsID0gbW9kZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gbW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyID8gMSA6IC4wMDAxO1xuICAgIGlmIChtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnZW5lcmF0ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gKHRoaXMudmVsb2NpdHkueCArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LngpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSAodGhpcy52ZWxvY2l0eS55ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblggKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWSArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICogZGVsdGFTZWNvbmRzO1xuICAgIGNvbnN0IGRhbXBpbmcgPSBNYXRoLmV4cCgtNyAqIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICo9IGRhbXBpbmc7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICo9IGRhbXBpbmc7XG4gICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPiAwICYmICF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyAuODUgOiAuNTU7XG4gICAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIGR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID49IDEpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckluc3RhbmNlKG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgICBjb25zdCBmYWRlID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dCA/IDEgLSB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMTtcbiAgICByZXR1cm4ge1xuICAgICAgc2hhcGU6IHRoaXMuc2hhcGUsIHg6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnosIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgcm90YXRpb25YOiB0aGlzLnJvdGF0aW9uWCwgcm90YXRpb25ZOiB0aGlzLnJvdGF0aW9uWSwgcm90YXRpb25aOiB0aGlzLnJvdGF0aW9uWixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLCBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogdGhpcy5kaXNwb3NlZCA/IDAgOiBmYWRlLFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiB0aGlzLmV4cGxvZGVNYWduaXR1ZGUsXG4gICAgICAuLi5vdmVycmlkZXMsXG4gICAgfTtcbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25QcmltaXRpdmVTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImJvbHRcIiB8IFwib3JiXCIgfCBcInJpbmdcIiB8IFwic3BhcmtcIiB8IFwiZGlhbW9uZFwiIHwgXCJwZW50YWdvblwiIHwgXCJsaW5lXCIgfCBcImFyY1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25QcmltaXRpdmUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcj86IHN0cmluZztcbiAgZ2xvdz86IG51bWJlcjtcbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICB0ZXh0dXJlPzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoPzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgYXJjU3RhcnQ/OiBudW1iZXI7XG4gIGFyY0VuZD86IG51bWJlcjtcbiAgc2hhcGU/OiBOZW9uUHJpbWl0aXZlU2hhcGU7XG59XG5cbmNvbnN0IG1heFByaW1pdGl2ZXMgPSAxMDI0O1xuY29uc3QgZmxvYXRzUGVyUHJpbWl0aXZlID0gMjA7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi8gYFxuc3RydWN0IFNjZW5lIHsgcmVzb2x1dGlvbjogdmVjMmYsIGNvdW50OiBmMzIsIHRpbWU6IGYzMiB9XG5zdHJ1Y3QgUHJpbWl0aXZlIHtcbiAgcG9zaXRpb246IHZlYzJmLFxuICBzaXplOiB2ZWMyZixcbiAgY29sb3I6IHZlYzRmLFxuICBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIGdsb3c6IGYzMixcbiAgaW50ZW5zaXR5OiBmMzIsXG4gIHNoYXBlOiBmMzIsXG4gIHRleHR1cmU6IGYzMixcbiAgcmltSW50ZW5zaXR5OiBmMzIsXG4gIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG4gIHBhZGRpbmc6IHZlYzJmLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGl0ZW1zOiBhcnJheTxQcmltaXRpdmU+O1xuXG5zdHJ1Y3QgVmVydGV4T3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oNCkgc2hhcGU6IGYzMixcbiAgQGxvY2F0aW9uKDUpIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDYpIHRleHR1cmU6IGYzMixcbiAgQGxvY2F0aW9uKDcpIHJpbUludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oOCkgc2hhZG93U3RyZW5ndGg6IGYzMixcbn1cblxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmVydGV4OiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBWZXJ0ZXhPdXRwdXQge1xuICB2YXIgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGl0ZW0gPSBpdGVtc1tpbnN0YW5jZV07XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmVydGV4XTtcbiAgdmFyIHBpeGVsT2Zmc2V0ID0gbG9jYWwgKiBpdGVtLnNpemU7XG4gIGlmIChpdGVtLnRleHR1cmUgIT0gMCkge1xuICAgIGxldCBjID0gY29zKGl0ZW0udGV4dHVyZSk7XG4gICAgbGV0IHMgPSBzaW4oaXRlbS50ZXh0dXJlKTtcbiAgICBwaXhlbE9mZnNldCA9IHZlYzJmKHBpeGVsT2Zmc2V0LnggKiBjIC0gcGl4ZWxPZmZzZXQueSAqIHMsIHBpeGVsT2Zmc2V0LnggKiBzICsgcGl4ZWxPZmZzZXQueSAqIGMpO1xuICB9XG4gIGxldCBwaXhlbCA9IGl0ZW0ucG9zaXRpb24gKyBwaXhlbE9mZnNldDtcbiAgdmFyIG91dHB1dDogVmVydGV4T3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihwaXhlbC54IC8gc2NlbmUucmVzb2x1dGlvbi54ICogMiAtIDEsIDEgLSBwaXhlbC55IC8gc2NlbmUucmVzb2x1dGlvbi55ICogMiwgMCwgMSk7XG4gIG91dHB1dC5sb2NhbCA9IGxvY2FsO1xuICBvdXRwdXQuY29sb3IgPSBpdGVtLmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGl0ZW0uZ2xvdztcbiAgb3V0cHV0LmludGVuc2l0eSA9IGl0ZW0uaW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhcGUgPSBpdGVtLnNoYXBlO1xuICBvdXRwdXQuc2Vjb25kYXJ5Q29sb3IgPSBpdGVtLnNlY29uZGFyeUNvbG9yO1xuICBvdXRwdXQudGV4dHVyZSA9IGl0ZW0udGV4dHVyZTtcbiAgb3V0cHV0LnJpbUludGVuc2l0eSA9IGl0ZW0ucmltSW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhZG93U3RyZW5ndGggPSBpdGVtLnNoYWRvd1N0cmVuZ3RoO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBWZXJ0ZXhPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDcuNSkge1xuICAgIGxldCByYWRpdXMgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICAgIGxldCBhbmdsZSA9IGF0YW4yKGlucHV0LmxvY2FsLnksIGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhbmdsZSA8IGlucHV0LnJpbUludGVuc2l0eSB8fCBhbmdsZSA+IGlucHV0LnNoYWRvd1N0cmVuZ3RoIHx8IHJhZGl1cyA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGxpbmVEaXN0YW5jZSA9IGFicyhyYWRpdXMgLSAwLjc4KTtcbiAgICBpZiAobGluZURpc3RhbmNlID4gMC4xNikgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDEyLCAwLjAzOCwgbGluZURpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMDI1LCAwLjE2LCBsaW5lRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAyMy4wIC0gc2NlbmUudGltZSAqIDguNSkpLCAxNi4wKTtcbiAgICBsZXQgcHVsc2VCID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDExLjAgKyBzY2VuZS50aW1lICogNS4zICsgMS43KSksIDI0LjApO1xuICAgIGxldCBncmFpbiA9IHNpbihhbmdsZSAqIDcxLjAgKyBzY2VuZS50aW1lICogMy4xKSAqIDAuNSArIDAuNTtcbiAgICBsZXQgc3VyZ2UgPSBzbW9vdGhzdGVwKDAuNzIsIDAuOTQsIHB1bHNlQSAqIDAuNyArIHB1bHNlQiAqIDAuNjUgKyBncmFpbiAqIDAuMTIpO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjg4ICsgc3VyZ2UgKiAwLjY1KSArIGhhbG8gKiAoMC4yMiArIHN1cmdlICogMC45KSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHN1cmdlICogMC45KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDYuNSkge1xuICAgIGxldCBhbG9uZyA9IGlucHV0LmxvY2FsLnk7XG4gICAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYWNyb3NzID4gMS4wIHx8IGFicyhhbG9uZykgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjA4LCAwLjI0LCBhY3Jvc3MpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4xMiwgMS4wLCBhY3Jvc3MpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZEZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuNzIsIDEuMCwgYWJzKGFsb25nKSk7XG4gICAgbGV0IHRyYXZlbCA9IHBvdyhtYXgoMC4wLCBzaW4oYWxvbmcgKiAyNC4wIC0gc2NlbmUudGltZSAqIDguMCArIGlucHV0LnRleHR1cmUpKSwgMTQuMCk7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuNzUgKyB0cmF2ZWwgKiAwLjUpICsgaGFsbyAqICgwLjIgKyB0cmF2ZWwgKiAwLjU1KSkgKiBlbmRGYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiB0cmF2ZWwgKiAwLjc1KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDUuNSkge1xuICAgIC8vIFBlbnRhZ29uIFNERlxuICAgIC8vIGxvY2FsIGlzIGluIFstMSwgMV0gcmFuZ2UuIExldCdzIGZpbmQgcGVudGFnb24gZGlzdGFuY2UuXG4gICAgbGV0IHB4ID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGxldCBweSA9IGlucHV0LmxvY2FsLnk7XG4gICAgLy8gUGVudGFnb24gY29uc3RhbnRzIGZvciB2ZXJ0aWNlcy9lZGdlc1xuICAgIGxldCBrID0gdmVjM2YoLTAuODA5MDE2OTk0LCAwLjU4Nzc4NTI1MiwgMS4zNzYzODE5Mik7IC8vIGNvcy9zaW4gb2YgNzIsIHBsdXMgaGVpZ2h0IGZhY3RvclxuICAgIC8vIFByb2plY3QvTWlycm9yIGFjcm9zcyB0aGUgc3ltbWV0cnkgYXhlcyBvZiByZWd1bGFyIHBlbnRhZ29uXG4gICAgdmFyIHAgPSB2ZWMyZihweCwgcHkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoLWsueCwgay55KSwgcCksIDApICogdmVjMmYoLWsueCwgay55KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKGsueCwgay55KSwgcCksIDApICogdmVjMmYoay54LCBrLnkpO1xuICAgIHAueCA9IHAueCAtIGNsYW1wKHAueCwgLWsueiAqIDAuNSwgay56ICogMC41KTtcbiAgICBsZXQgZCA9IGxlbmd0aChwIC0gdmVjMmYoMCwgMC43MikpICogc2lnbihwLnkgLSAwLjcyKTtcbiAgICAvLyBNYXAgZCB0byBhIG5vcm1hbGl6ZWQgcmFkaXVzIHNjYWxlXG4gICAgbGV0IHNjYWxlRCA9IGQgKyAwLjM1OyAvLyBvZmZzZXQgcGVudGFnb24gdG8gZml0IGJvdW5kcyBuaWNlbHlcbiAgICBpZiAoc2NhbGVEID4gMC44KSB7IGRpc2NhcmQ7IH1cbiAgICBcbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNSwgMC42NSwgc2NhbGVEKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjQ1LCAwLjUzLCBzY2FsZUQpICogKDEgLSBzbW9vdGhzdGVwKDAuNjUsIDAuNzUsIHNjYWxlRCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoLTAuMiwgMC41LCBzY2FsZUQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuNTUsIDAuOCwgc2NhbGVEKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM4ICsgYm9yZGVyICogMS4zNTtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjc1ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNDUpICogZmlsbCAqIDAuMzU7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuNDtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNC41KSB7XG4gICAgbGV0IGQgPSBhYnMoaW5wdXQubG9jYWwueCkgKyBhYnMoaW5wdXQubG9jYWwueSk7XG4gICAgaWYgKGQgPiAxLjA4KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNzgsIDAuOTIsIGQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNzIsIDAuODIsIGQpICogKDEgLSBzbW9vdGhzdGVwKDAuOTIsIDEuMDIsIGQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKDAuMCwgMC43OCwgZCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC44MiwgMS4wOCwgZCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zNSArIGJvcmRlciAqIDEuMjtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS42ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNSkgKiBmaWxsICogMC4zODtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zNTtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMS41KSB7XG4gICAgbGV0IHIyID0gZG90KGlucHV0LmxvY2FsLCBpbnB1dC5sb2NhbCk7XG4gICAgaWYgKHIyID4gMSkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IHogPSBzcXJ0KG1heCgwLCAxIC0gcjIpKTtcbiAgICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKHZlYzNmKGlucHV0LmxvY2FsLngsIC1pbnB1dC5sb2NhbC55LCB6KSk7XG4gICAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0wLjU1LCAtMC43LCAwLjkpKTtcbiAgICBsZXQgZGlmZnVzZSA9IG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApO1xuICAgIGxldCByaW0gPSBwb3coMSAtIHosIDIuMikgKiBpbnB1dC5yaW1JbnRlbnNpdHk7XG4gICAgbGV0IHNoYWRvdyA9IG1peCgxIC0gaW5wdXQuc2hhZG93U3RyZW5ndGgsIDEsIHNtb290aHN0ZXAoLTAuNjUsIDAuNDUsIGRvdChub3JtYWwueHksIGxpZ2h0Lnh5KSkpO1xuICAgIGxldCBncmFpbiA9IHNpbihpbnB1dC5sb2NhbC54ICogMjMgKyBpbnB1dC5sb2NhbC55ICogMTcpICogc2luKGlucHV0LmxvY2FsLnkgKiAzMSAtIGlucHV0LmxvY2FsLnggKiAxMSk7XG4gICAgbGV0IHRleHR1cmUgPSAxICsgZ3JhaW4gKiBpbnB1dC50ZXh0dXJlICogMC4yMjtcbiAgICBsZXQgc3BlY3VsYXIgPSBwb3cobWF4KGRvdChyZWZsZWN0KC1saWdodCwgbm9ybWFsKSwgdmVjM2YoMCwwLDEpKSwgMCksIDI4KSAqIDEuODtcbiAgICBsZXQgYm9keSA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZGlmZnVzZSAqIDAuOCArIDAuMikgKiBzaGFkb3cgKiB0ZXh0dXJlO1xuICAgIGxldCBoYWxvID0gcG93KG1heCgwLCAxIC0gbGVuZ3RoKGlucHV0LmxvY2FsKSksIDAuMzUpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcmdiID0gYm9keSAqICgwLjM4ICsgZGlmZnVzZSAqIDAuOTUpICsgaW5wdXQuY29sb3IucmdiICogcmltICsgdmVjM2Yoc3BlY3VsYXIpICsgaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMztcbiAgICByZXR1cm4gdmVjNGYocmdiICogaW5wdXQuaW50ZW5zaXR5LCAxKTtcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICBpZiAoaW5wdXQuc2hhcGUgPiAzLjUpIHtcbiAgICBsZXQgYXhpcyA9IG1pbihhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gICAgbGV0IGFybSA9IDEgLSBzbW9vdGhzdGVwKDAuMDQsIDAuMTgsIGF4aXMpO1xuICAgIGxldCBmYWRlID0gMSAtIHNtb290aHN0ZXAoMC4yLCAxLCBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpKTtcbiAgICBsZXQgZW5lcmd5ID0gYXJtICogZmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBhcm0pICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDIuNSkge1xuICAgIGxldCByaW5nRGlzdGFuY2UgPSBhYnMobGVuZ3RoKGlucHV0LmxvY2FsKSAtIDAuNjIpO1xuICAgIGxldCByaW5nID0gMSAtIHNtb290aHN0ZXAoMC4wNTUsIDAuMTgsIHJpbmdEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4xMiwgMC40MiwgcmluZ0Rpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmVyZ3kgPSAocmluZyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCByaW5nKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDAuNSkge1xuICAgIGRpc3RhbmNlID0gbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgfVxuICBsZXQgY29yZSA9IDEgLSBzbW9vdGhzdGVwKDAuMzgsIDAuNzYsIGRpc3RhbmNlKTtcbiAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4zLCAxLCBkaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgbGV0IGVuZXJneSA9IChjb3JlICsgaGFsbyAqIDAuNTUpICogaW5wdXQuaW50ZW5zaXR5O1xuICBsZXQgY2hyb21hdGljQ29yZSA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgcG93KG1heChjb3JlLCAwKSwgMikpO1xuICBsZXQgcmF3ID0gY2hyb21hdGljQ29yZSAqIChjb3JlICogMS4wNSArIGhhbG8gKiAwLjQyKTtcbiAgbGV0IHJnYiA9IHJhdyAvICh2ZWMzZigxKSArIHJhdyAqIDAuMzIpO1xuICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbn1cbmA7XG5cbmZ1bmN0aW9uIHJnYmEoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHZhbHVlID0gaGV4LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICBpZiAoIS9eWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgc2l4LWRpZ2l0IGhleCBjb2xvciwgcmVjZWl2ZWQgXCIke2hleH1cIi5gKTtcbiAgcmV0dXJuIFtcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMCwgMiksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMiwgNCksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoNCwgNiksIDE2KSAvIDI1NSxcbiAgICAxLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblByaW1pdGl2ZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI3ByaW1pdGl2ZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjYmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgIHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHsgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSwgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNwcmltaXRpdmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IG1heFByaW1pdGl2ZXMgKiBmbG9hdHNQZXJQcmltaXRpdmUgKiA0LFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcbiAgICB0aGlzLiNiaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9LFxuICAgICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jcHJpbWl0aXZlQnVmZmVyIH0gfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25QcmltaXRpdmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2FudmFzIGNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSwgdGltZVNlY29uZHMgPSAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZpc2libGUgPSBwcmltaXRpdmVzLnNsaWNlKDAsIG1heFByaW1pdGl2ZXMpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZpc2libGUubGVuZ3RoICogZmxvYXRzUGVyUHJpbWl0aXZlKTtcbiAgICB2aXNpYmxlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlclByaW1pdGl2ZTtcbiAgICAgIGRhdGEuc2V0KFtcbiAgICAgICAgaXRlbS54LCBpdGVtLnksIGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0ID8/IGl0ZW0ud2lkdGgsXG4gICAgICAgIC4uLnJnYmEoaXRlbS5jb2xvciksXG4gICAgICAgIC4uLnJnYmEoaXRlbS5zZWNvbmRhcnlDb2xvciA/PyBpdGVtLmNvbG9yKSxcbiAgICAgICAgaXRlbS5nbG93ID8/IDAuNSxcbiAgICAgICAgaXRlbS5pbnRlbnNpdHkgPz8gMSxcbiAgICAgICAgaXRlbS5zaGFwZSA9PT0gXCJhcmNcIiA/IDggOiBpdGVtLnNoYXBlID09PSBcImxpbmVcIiA/IDcgOiBpdGVtLnNoYXBlID09PSBcInBlbnRhZ29uXCIgPyA2IDogaXRlbS5zaGFwZSA9PT0gXCJkaWFtb25kXCIgPyA1IDogaXRlbS5zaGFwZSA9PT0gXCJzcGFya1wiID8gNCA6IGl0ZW0uc2hhcGUgPT09IFwicmluZ1wiID8gMyA6IGl0ZW0uc2hhcGUgPT09IFwib3JiXCIgPyAyIDogaXRlbS5zaGFwZSA9PT0gXCJib2x0XCIgPyAxIDogMCxcbiAgICAgICAgaXRlbS5yb3RhdGlvbiA/PyBpdGVtLnRleHR1cmUgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNTdGFydCA/PyBpdGVtLnJpbUludGVuc2l0eSA/PyAwLFxuICAgICAgICBpdGVtLmFyY0VuZCA/PyBpdGVtLnNoYWRvd1N0cmVuZ3RoID8/IDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICBdLCBvZmZzZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB2aXNpYmxlLmxlbmd0aCwgdGltZVNlY29uZHNdKSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNwcmltaXRpdmVCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICAgIGNsZWFyVmFsdWU6IHsgcjogMC4wMDYsIGc6IDAuMDA5LCBiOiAwLjAyNSwgYTogMSB9LFxuICAgICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgaWYgKHZpc2libGUubGVuZ3RoKSB7XG4gICAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmRHcm91cCk7XG4gICAgICBwYXNzLmRyYXcoNiwgdmlzaWJsZS5sZW5ndGgpO1xuICAgIH1cbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgTmVvblByaW1pdGl2ZVJlbmRlcmVyLCB0eXBlIE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TaGFwZSBleHRlbmRzIE9taXQ8TmVvblNoYXBlSW5zdGFuY2UsIFwieFwiIHwgXCJ5XCIgfCBcInNjYWxlXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNjZW5lIHtcbiAgcHJpbWl0aXZlcz86IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXTtcbiAgc2hhcGVzPzogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlUmVuZGVyZXI7XG4gICNzaGFwZXM6IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyO1xuICAjd2lkdGg6IG51bWJlcjtcbiAgI2hlaWdodDogbnVtYmVyO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDsgdGhpcy4jd2lkdGggPSB3aWR0aDsgdGhpcy4jaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMgPSBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI3NoYXBlcyA9IG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IFByb21pc2U8TmVvblRvcERvd25TY2VuZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5IHRvcC1kb3duIHNjZW5lcy5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCwgbG9naWNhbFdpZHRoLCBsb2dpY2FsSGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzY2VuZTogTmVvblRvcERvd25TY2VuZSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDApOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpO1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMucmVuZGVyKFsuLi4oc2NlbmUucHJpbWl0aXZlcyA/PyBbXSldLCB0aW1lU2Vjb25kcywgZmFsc2UsIHRhcmdldCk7XG4gICAgY29uc3QgYXNwZWN0ID0gdGhpcy4jd2lkdGggLyB0aGlzLiNoZWlnaHQ7XG4gICAgdGhpcy4jc2hhcGVzLnJlbmRlcigoc2NlbmUuc2hhcGVzID8/IFtdKS5tYXAoc2hhcGUgPT4gKHtcbiAgICAgIC4uLnNoYXBlLFxuICAgICAgeDogKHNoYXBlLnggLyB0aGlzLiN3aWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIHNoYXBlLnkgLyB0aGlzLiNoZWlnaHQpICogMi41LFxuICAgICAgc2NhbGU6IHNoYXBlLnNpemUgLyB0aGlzLiNoZWlnaHQgKiAyLjUsXG4gICAgfSkpLCB0cnVlLCB0YXJnZXQpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiNzaGFwZXMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCA9IHR5cGVvZiBsYW5lUnVubmVyU2NlbmVJZHNbbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVPcHRpb25zIHtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB0aW1lTXM6IG51bWJlcjtcbn1cblxuY29uc3Qgc2NlbmVOYW1lczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCBzdHJpbmc+ID0ge1xuICBuZW9uSGFsbDogXCJOZW9uIEhhbGxcIixcbn07XG5cbmNvbnN0IGhhbGxCb3R0b21XaWR0aCA9IDAuOTI7XG5jb25zdCBoYWxsRmxvb3JDb2xvciA9IFwiIzA1MTAxZlwiO1xuY29uc3QgaGFsbERlZXBCbHVlID0gXCIjMTIzNTZhXCI7XG5jb25zdCBoYWxsTXV0ZWRCbHVlID0gXCIjMWI0YzhkXCI7XG5jb25zdCBoYWxsTXV0ZWRDeWFuID0gXCIjMmFjNGRjXCI7XG5jb25zdCBoYWxsTXV0ZWRWaW9sZXQgPSBcIiM0NTMwNzlcIjtcbmNvbnN0IGhhbGxBY2NlbnRQaW5rID0gXCIjYTczNTdlXCI7XG5jb25zdCBoYWxsRW5lcmd5U3BlZWQgPSAwLjAwMTc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNjZW5lTmFtZXNbc2NlbmVJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmVSdW5uZXJTY2VuZUlkKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBMYW5lUnVubmVyU2NlbmVJZCB7XG4gIHJldHVybiAobGFuZVJ1bm5lclNjZW5lSWRzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5lUnVubmVyU2NlbmUob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBzd2l0Y2ggKG9wdGlvbnMuc2NlbmVJZCkge1xuICAgIGNhc2UgXCJuZW9uSGFsbFwiOlxuICAgICAgcmV0dXJuIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGhhbGxHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRIYWxsQmFzZShwcmltaXRpdmVzLCB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMpO1xuICBhZGRIYWxsUmFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnkpO1xuICBhZGRIYWxsQ3Jvc3NiYXJzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxGbG9vckdseXBocyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEhvcml6b25EZXRhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsU2lkZVBhbmVscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEVuZXJneVRyYWNlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGhhbGxHZW9tZXRyeSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICBjb25zdCB2cCA9IHsgeDogd2lkdGggKiAuNSwgeTogLWhlaWdodCB9O1xuICBjb25zdCBib3R0b21ZID0gaGVpZ2h0ICogLjk4NTtcbiAgY29uc3QgYm90dG9tSGFsZiA9IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoICogLjU7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHZwLFxuICAgIGxlZnRCb3R0b206IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICByaWdodEJvdHRvbTogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIGxlZnRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gICAgcmlnaHRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxCYXNlKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQyLCB3aWR0aDogd2lkdGggKiBoYWxsQm90dG9tV2lkdGgsIGhlaWdodDogaGVpZ2h0ICogMS4wOCwgY29sb3I6IGhhbGxGbG9vckNvbG9yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC45LCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogaGFsbERlZXBCbHVlLCBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkQ3lhbiwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC43OCwgd2lkdGg6IHdpZHRoICogLjE4LCBoZWlnaHQ6IDEuMiwgY29sb3I6IGhhbGxBY2NlbnRQaW5rLCBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LCBnbG93OiAuMjQsIGludGVuc2l0eTogLjA4LCBzaGFwZTogXCJib2x0XCIgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxSYWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5Pik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBbYm90dG9tLCBob3Jpem9uXSBvZiBbW2xlZnRCb3R0b20sIGxlZnRIb3Jpem9uXSwgW3JpZ2h0Qm90dG9tLCByaWdodEhvcml6b25dXSBhcyBjb25zdCkge1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIGhhbGxEZWVwQmx1ZSwgLjQ4LCA2LjUpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIGhhbGxNdXRlZEN5YW4sIC41NiwgMS4zKTtcbiAgfVxuXG4gIGZvciAobGV0IGxhbmUgPSAxOyBsYW5lIDw9IDM7IGxhbmUrKykge1xuICAgIGNvbnN0IHUgPSBsYW5lIC8gNDtcbiAgICBjb25zdCBzdGFydCA9IGxlcnBQb2ludChsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgdSk7XG4gICAgY29uc3QgZW5kID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IGNvbG9yID0gbGFuZSA9PT0gMiA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxNdXRlZEJsdWU7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIGNvbG9yLCBsYW5lID09PSAyID8gLjI4IDogLjIsIDMuNCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIGhhbGxNdXRlZEN5YW4sIGxhbmUgPT09IDIgPyAuMjYgOiAuMTgsIC45KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsQ3Jvc3NiYXJzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTU7IHJvdysrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByb3dQdWxzZSA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDQ4MCArIHJvdyAqIC43OCkgKiAuNDI7XG4gICAgY29uc3Qgc3VyZ2UgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lTXMgLyA4MjAgLSByb3cgKiAuNzIpKTtcbiAgICBjb25zdCBjb2xvciA9IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogcm93ICUgNCA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiByb3cgJSA0ID09PSAyID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbEFjY2VudFBpbms7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4xNSArIHQgKiAuMjMpICogKC41NSArIHJvd1B1bHNlICogLjQ1KSArIHN1cmdlICogLjA1NSwgMy4xICsgdCAqIDIpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMiArIHQgKiAuMjcpICogKC41MiArIHJvd1B1bHNlICogLjQ4KSArIHN1cmdlICogLjA3LCAuNzUgKyB0ICogLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgNzsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE5MDAgKyBwdWxzZUluZGV4IC8gNykgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNTUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzQgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBoYWxsTXV0ZWRDeWFuLCBvcGFjaXR5LCAxLjEgKyB0ICogMS40KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRmxvb3JHbHlwaHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCByb3dzID0gWzIsIDQsIDYsIDgsIDEwLCAxMl07XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIC41KTtcbiAgICBjb25zdCBzY2FsZSA9IC40NSArIHQgKiAxLjE7XG4gICAgY29uc3QgcHVsc2UgPSAuNDggKyBNYXRoLnNpbih0aW1lTXMgLyA3MjAgKyByb3cgKiAxLjMpICogLjI0O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiA3ICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IDcgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbERlZXBCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJvdyAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4yNCArIHB1bHNlICogLjE2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IGdsb3dQdWxzZSA9IC43NSArIE1hdGguc2luKHRpbWVNcyAvIDY4MCkgKiAuMjU7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIGhhbGxBY2NlbnRQaW5rLCAuMiArIGdsb3dQdWxzZSAqIC4wOCwgMS4xKTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggLSB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkQ3lhbiwgLjE2LCAuODUpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54ICsgd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRWaW9sZXQsIC4xNiwgLjg1KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggKyAuNSkgLyA4O1xuICAgIGNvbnN0IGJhc2UgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3Qgc2lkZUJpYXMgPSBNYXRoLmFicyh1IC0gLjUpICogMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGJhc2UueCxcbiAgICAgIHk6IGJhc2UueSAtIGhlaWdodCAqICguMDE4ICsgc2lkZUJpYXMgKiAuMDE4KSxcbiAgICAgIHdpZHRoOiAxICsgc2lkZUJpYXMgKiAuNyxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyBzaWRlQmlhcyAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbEFjY2VudFBpbmssXG4gICAgICBnbG93OiAuMjQsXG4gICAgICBpbnRlbnNpdHk6IC4wNyArIGdsb3dQdWxzZSAqIC4wMzUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4oaW5kZXggKiAxLjcpICogLjEyLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxTaWRlUGFuZWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBzaWRlIG9mIFswLCAxXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxMCwgMS42OCk7XG4gICAgICBjb25zdCByYWlsID0gc2lkZSA9PT0gMFxuICAgICAgICA/IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdClcbiAgICAgICAgOiBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgICBjb25zdCBvdXR3YXJkID0gc2lkZSA9PT0gMCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaWNrZXIgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA2MDAgKyBpbmRleCAqIDEuNSArIHNpZGUpICogLjI4O1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHg6IHJhaWwueCArIG91dHdhcmQgKiB3aWR0aCAqICguMDM1ICsgdCAqIC4wNiksXG4gICAgICAgIHk6IHJhaWwueSAtIGhlaWdodCAqICguMDE4ICsgdCAqIC4wMTIpLFxuICAgICAgICB3aWR0aDogMS4yICsgdCAqIDEuMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHQgKiAuMDgpLFxuICAgICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkQ3lhbixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgICAgZ2xvdzogLjMsXG4gICAgICAgIGludGVuc2l0eTogKC4wNzUgKyB0ICogLjA2NSkgKiBmbGlja2VyLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEVuZXJneVRyYWNlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjEyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAxMTY7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjcpKTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0ID09PSAwID8gLjE4IDogaW5kZXggJSA0ID09PSAxID8gLjM0IDogaW5kZXggJSA0ID09PSAyID8gLjY2IDogLjgyO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBzaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjcgKyB0aW1lTXMgLyAxNzAwKSAqIC4wMzUpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyAzOTAgKyBpbmRleCAqIDEuMSkgKiAuMzg7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiAuOCArIGluZGV4ICUgMyAqIC41LFxuICAgICAgaGVpZ2h0OiAxMCArIGluZGV4ICUgNSAqIDcsXG4gICAgICBjb2xvcjogaW5kZXggJSA1ID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbE11dGVkQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyAoaW5kZXggJSA0KSAqIC4wMTgpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSA9IFwiZGFydFwiIHwgXCJuZWVkbGVcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJvamVjdGlsZU9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYPzogbnVtYmVyO1xuICB2ZWxvY2l0eVk/OiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgbGVuZ3RoPzogbnVtYmVyO1xuICB0cmFpbExlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxXaWR0aD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICBzaGFwZT86IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbn1cblxuY29uc3Qgcm90YXRpb25Gb3JTY3JlZW5Gb3J3YXJkVmVjdG9yID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMih4IC8gbGVuZ3RoLCAteSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgY2xhc3MgTmVvblByb2plY3RpbGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHZlbG9jaXR5WTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsV2lkdGg6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcjogc3RyaW5nO1xuICBjb3JlQ29sb3I6IHN0cmluZztcbiAgc2hhcGU6IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblByb2plY3RpbGVPcHRpb25zKSB7XG4gICAgdGhpcy54PW9wdGlvbnMueDt0aGlzLnk9b3B0aW9ucy55O3RoaXMudmVsb2NpdHlYPW9wdGlvbnMudmVsb2NpdHlYPz8wO3RoaXMudmVsb2NpdHlZPW9wdGlvbnMudmVsb2NpdHlZPz8tNTAwO1xuICAgIHRoaXMucmFkaXVzPW9wdGlvbnMucmFkaXVzPz8zO3RoaXMubGVuZ3RoPW9wdGlvbnMubGVuZ3RoPz85O3RoaXMudHJhaWxMZW5ndGg9b3B0aW9ucy50cmFpbExlbmd0aD8/MTY7dGhpcy50cmFpbFdpZHRoPW9wdGlvbnMudHJhaWxXaWR0aD8/MS41O1xuICAgIHRoaXMuY29sb3I9b3B0aW9ucy5jb2xvcjt0aGlzLnRyYWlsQ29sb3I9b3B0aW9ucy50cmFpbENvbG9yPz9vcHRpb25zLmNvbG9yO3RoaXMuY29yZUNvbG9yPW9wdGlvbnMuY29yZUNvbG9yPz9vcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuc2hhcGU9b3B0aW9ucy5zaGFwZT8/XCJkYXJ0XCI7dGhpcy5pbnRlbnNpdHk9b3B0aW9ucy5pbnRlbnNpdHk/PzE7dGhpcy5nbG93PW9wdGlvbnMuZ2xvdz8/Ljc1O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlYICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5WSAqIGRlbHRhU2Vjb25kcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc2hhcGUgPT09IFwic3BsaXRCb2x0XCI7XG4gICAgY29uc3QgbmVlZGxlID0gdGhpcy5zaGFwZSA9PT0gXCJuZWVkbGVcIjtcbiAgICBjb25zdCBzbHVnID0gdGhpcy5zaGFwZSA9PT0gXCJzbHVnXCI7XG4gICAgY29uc3Qgc3BlZWQgPSBNYXRoLmh5cG90KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb25YID0gdGhpcy52ZWxvY2l0eVggLyBzcGVlZDtcbiAgICBjb25zdCBkaXJlY3Rpb25ZID0gdGhpcy52ZWxvY2l0eVkgLyBzcGVlZDtcbiAgICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3Rvcih0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpO1xuICAgIGNvbnN0IGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10gPSBbe1xuICAgICAgeDp0aGlzLngtZGlyZWN0aW9uWCp0aGlzLnRyYWlsTGVuZ3RoKi41LHk6dGhpcy55LWRpcmVjdGlvblkqdGhpcy50cmFpbExlbmd0aCouNSxcbiAgICAgIHdpZHRoOnRoaXMudHJhaWxXaWR0aCxoZWlnaHQ6dGhpcy50cmFpbExlbmd0aCxjb2xvcjp0aGlzLnRyYWlsQ29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb2xvcixcbiAgICAgIGdsb3c6dGhpcy5nbG93Ki42LGludGVuc2l0eTp0aGlzLmludGVuc2l0eSouNzIsc2hhcGU6XCJib2x0XCIscm90YXRpb24sXG4gICAgfV07XG4gICAgY29uc3Qgd2lkdGg9c2x1Zz90aGlzLnJhZGl1cyoxLjU6bmVlZGxlP3RoaXMucmFkaXVzKi42NTp0aGlzLnJhZGl1cztcbiAgICBjb25zdCBoZWlnaHQ9c2x1Zz90aGlzLmxlbmd0aCouNzU6dGhpcy5sZW5ndGg7XG4gICAgY29uc3Qgc2lkZVggPSAtZGlyZWN0aW9uWTtcbiAgICBjb25zdCBzaWRlWSA9IGRpcmVjdGlvblg7XG4gICAgY29uc3QgYWRkPShvZmZzZXQ6bnVtYmVyKT0+aXRlbXMucHVzaCh7eDp0aGlzLngrc2lkZVgqb2Zmc2V0LHk6dGhpcy55K3NpZGVZKm9mZnNldCx3aWR0aCxoZWlnaHQsY29sb3I6dGhpcy5jb2xvcixzZWNvbmRhcnlDb2xvcjp0aGlzLmNvcmVDb2xvcixnbG93OnRoaXMuZ2xvdyxpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHksc2hhcGU6bmVlZGxlP1wiY2lyY2xlXCI6XCJib2x0XCIscm90YXRpb259KTtcbiAgICBpZihzcGxpdCl7YWRkKC10aGlzLnJhZGl1cyouNyk7YWRkKHRoaXMucmFkaXVzKi43KX1lbHNlIGFkZCgwKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIENvbWJhdFR1bmluZyB7XG4gIC8qKlxuICAgKiBNdWx0aXBsaWVzIHRoZSB3aG9sZSBjb21iYXQgc2ltdWxhdGlvbiBwYWNlIHdoaWxlIHByZXNlcnZpbmcgcmVsYXRpdmVcbiAgICogdGltaW5nIGJldHdlZW4gbW92ZW1lbnQsIGNvb2xkb3ducywgcHJvamVjdGlsZXMsIGFuZCBhdXRob3JlZCB0cmFjayBiZWF0cy5cbiAgICovXG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgY29tYmF0VHVuaW5nID0ge1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IDEuNSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIENvbWJhdFR1bmluZztcblxuaWYgKCFOdW1iZXIuaXNGaW5pdGUoY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllcikgfHwgY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllciA8PSAwKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvbWJhdFR1bmluZzogZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIG11c3QgYmUgYSBwb3NpdGl2ZSBmaW5pdGUgbnVtYmVyLlwiKTtcbn1cbiIsICJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFtaWx5RGVmaW5pdGlvbjxUTWVtYmVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGZhbWlseUlkOiBzdHJpbmc7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gIGFic3RyYWN0IHJlYWRvbmx5IG1lbWJlcnM6IFRNZW1iZXJzO1xuXG4gIHByb3RlY3RlZCByZXF1aXJlKGNvbmRpdGlvbjogdW5rbm93biwgbWVzc2FnZTogc3RyaW5nKTogYXNzZXJ0cyBjb25kaXRpb24ge1xuICAgIGlmICghY29uZGl0aW9uKSB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy5mYW1pbHlJZH06ICR7bWVzc2FnZX1gKTtcbiAgfVxuXG4gIGFic3RyYWN0IHZhbGlkYXRlKCk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hvdFBhdHRlcm4gPSBcInNpbmdsZVwiIHwgXCJyYXBpZFNpbmdsZVwiIHwgXCJidXJzdFwiIHwgXCJoZWF2eVNpbmdsZVwiIHwgXCJwYWlyZWRTcHJlYWRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVCZWhhdmlvciA9IFwic3RyYWlnaHRcIiB8IFwicGllcmNpbmdTdHJhaWdodFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZVNoYXBlID0gXCJuZWVkbGVcIiB8IFwiZGFydFwiIHwgXCJzbHVnXCIgfCBcInNwbGl0Qm9sdFwiO1xuZXhwb3J0IHR5cGUgTXV6emxlRWZmZWN0ID0gXCJjcmlzcFN0YXJcIiB8IFwicmFwaWRGbGlja2VyXCIgfCBcImdyb3VwZWRQdWxzZVwiIHwgXCJzaG9ja0RpYW1vbmRcIiB8IFwidHdpblByb25nc1wiO1xuZXhwb3J0IHR5cGUgSW1wYWN0RWZmZWN0ID0gXCJwaW5TcGFya1wiIHwgXCJuZWVkbGVTY2F0dGVyXCIgfCBcImJ1cnN0Q3Jvc3NcIiB8IFwiaW1wYWN0UmluZ1wiIHwgXCJzcGxpdFJpcHBsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1bkxldmVsIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZmlyZVJhdGVQZXJTZWNvbmQ6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHByb2plY3RpbGVTcGVlZDogbnVtYmVyO1xuICBwcm9qZWN0aWxlUmFkaXVzOiBudW1iZXI7XG4gIHByb2plY3RpbGVDb3VudDogbnVtYmVyO1xuICBidXJzdENvdW50OiBudW1iZXI7XG4gIGJ1cnN0SW50ZXJ2YWxNczogbnVtYmVyO1xuICBzcHJlYWREZWdyZWVzOiBudW1iZXI7XG4gIHBpZXJjZTogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXJFdmVyeU50aFNob3Q6IG51bWJlcjtcbiAgaW1wYWN0UmFkaXVzPzogbnVtYmVyO1xuICBrbm9ja2JhY2s6IG51bWJlcjtcbiAgbXV6emxlRmxhc2hTY2FsZTogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVmlzdWFsSWRlbnRpdHkge1xuICBzaWxob3VldHRlOiBzdHJpbmc7XG4gIG1vdGlvbkxhbmd1YWdlOiBzdHJpbmc7XG4gIHByb2plY3RpbGVTaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBwcm9qZWN0aWxlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHRyYWlsQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHJvamVjdGlsZUFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIG11enpsZUVmZmVjdDogTXV6emxlRWZmZWN0O1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgbXV6emxlRHVyYXRpb25NczogbnVtYmVyO1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIGhvcml6b250YWxKaXR0ZXI6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICB1bmxvY2tQaGFzZTogXCJzdGFydFwiIHwgXCJmaXJzdEJ1aWxkXCIgfCBcInByZXNzdXJlXCI7XG4gIHNob3RQYXR0ZXJuOiBTaG90UGF0dGVybjtcbiAgcHJvamVjdGlsZUJlaGF2aW9yOiBQcm9qZWN0aWxlQmVoYXZpb3I7XG4gIHZpc3VhbElkZW50aXR5OiBHdW5WaXN1YWxJZGVudGl0eTtcbiAgbGV2ZWxzOiByZWFkb25seSBHdW5MZXZlbFtdO1xufVxuXG5jb25zdCBsZXZlbCA9IChcbiAgbGV2ZWxOdW1iZXI6IG51bWJlcixcbiAgdmFsdWVzOiBPbWl0PEd1bkxldmVsLCBcImxldmVsXCIgfCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCI+ICZcbiAgICBQYXJ0aWFsPFBpY2s8R3VuTGV2ZWwsIFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIiB8IFwiaW1wYWN0UmFkaXVzXCI+Pixcbik6IEd1bkxldmVsID0+ICh7XG4gIGxldmVsOiBsZXZlbE51bWJlcixcbiAgcHJvamVjdGlsZUNvdW50OiAxLFxuICBidXJzdENvdW50OiAxLFxuICBidXJzdEludGVydmFsTXM6IDAsXG4gIHNwcmVhZERlZ3JlZXM6IDAsXG4gIHBpZXJjZTogMCxcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiAwLFxuICBrbm9ja2JhY2s6IDAsXG4gIC4uLnZhbHVlcyxcbn0pO1xuXG5leHBvcnQgY2xhc3MgR3VuRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwiZ3VuXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJHdW5cIjtcbiAgcmVhZG9ubHkgaW1wbGVtZW50YXRpb24gPSB7XG4gICAgYXV0b0ZpcmVzOiB0cnVlLFxuICAgIHRhcmdldGluZzogXCJsYW5lRm9yd2FyZFwiLFxuICAgIHByb2plY3RpbGVNb2RlbDogXCJraW5lbWF0aWNcIixcbiAgICBjb2xsaXNpb25Nb2RlbDogXCJjaXJjbGVWc0VuZW15XCIsXG4gICAgYWxsb3dlZFNob3RQYXR0ZXJuczogW1wic2luZ2xlXCIsIFwicmFwaWRTaW5nbGVcIiwgXCJidXJzdFwiLCBcImhlYXZ5U2luZ2xlXCIsIFwicGFpcmVkU3ByZWFkXCJdIHNhdGlzZmllcyBTaG90UGF0dGVybltdLFxuICAgIGFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzOiBbXCJzdHJhaWdodFwiLCBcInBpZXJjaW5nU3RyYWlnaHRcIl0gc2F0aXNmaWVzIFByb2plY3RpbGVCZWhhdmlvcltdLFxuICB9IGFzIGNvbnN0O1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgcHVsc2VQaXN0b2w6IHtcbiAgICAgIGxhYmVsOiBcIlB1bHNlIFBpc3RvbFwiLCByYXJpdHk6IFwic3RhcnRlclwiLCB1bmxvY2tQaGFzZTogXCJzdGFydFwiLCBzaG90UGF0dGVybjogXCJzaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInRpbnlCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY2xlYW5TaW5nbGVTaG90XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJjeWFuXCIsIHRyYWlsQ29sb3I6IFwiZGVlcEJsdWVcIiwgY29yZUNvbG9yOiBcImN5YW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMi44LCB0cmFpbFdpZHRoU2NhbGU6IDAuNjUsIHZpc3VhbEludGVuc2l0eTogMC45LCBtdXp6bGVFZmZlY3Q6IFwiY3Jpc3BTdGFyXCIsIGltcGFjdEVmZmVjdDogXCJwaW5TcGFya1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA3MiwgaW1wYWN0RHVyYXRpb25NczogMTA1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NTQwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjc1LGRhbWFnZToxLjE1LHByb2plY3RpbGVTcGVlZDo1ODAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouOH0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoyLjE1LGRhbWFnZToxLjM1LHByb2plY3RpbGVTcGVlZDo2MjAscHJvamVjdGlsZVJhZGl1czozLjI1LHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6Ljc1LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBuZWVkbGVyU21nOiB7XG4gICAgICBsYWJlbDogXCJOZWVkbGVyIFNNR1wiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwicmFwaWRTaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNwcmF5U3BoZXJlXCIsIG1vdGlvbkxhbmd1YWdlOiBcInN0b2NoYXN0aWNOZWVkbGVTcHJheVwiLCBwcm9qZWN0aWxlU2hhcGU6IFwibmVlZGxlXCIsIHByb2plY3RpbGVDb2xvcjogXCJncmVlblwiLCB0cmFpbENvbG9yOiBcImN5YW5cIiwgY29yZUNvbG9yOiBcImdyZWVuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDEsIHRyYWlsV2lkdGhTY2FsZTogMC4yOCwgdmlzdWFsSW50ZW5zaXR5OiAwLjc4LCBtdXp6bGVFZmZlY3Q6IFwicmFwaWRGbGlja2VyXCIsIGltcGFjdEVmZmVjdDogXCJuZWVkbGVTY2F0dGVyXCIsIG11enpsZUR1cmF0aW9uTXM6IDQ2LCBpbXBhY3REdXJhdGlvbk1zOiA4NSwgaG9yaXpvbnRhbEppdHRlcjogNyB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjUuMjUsZGFtYWdlOi40Mixwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTAsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouMzUsaGl0Rmxhc2hTY2FsZTouNDV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6Ny4yNSxkYW1hZ2U6LjQ4LHByb2plY3RpbGVTcGVlZDo3MzUscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MS41LHRyYWlsTGVuZ3RoOjExLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjQsaGl0Rmxhc2hTY2FsZTouNX0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDo5LjI1LGRhbWFnZTouNTQscHJvamVjdGlsZVNwZWVkOjc4MCxwcm9qZWN0aWxlUmFkaXVzOjIuMTUsc3ByZWFkRGVncmVlczoyLHRyYWlsTGVuZ3RoOjEyLHRyYWNlckV2ZXJ5TnRoU2hvdDo0LG11enpsZUZsYXNoU2NhbGU6LjQ1LGhpdEZsYXNoU2NhbGU6LjU1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgYnVyc3RDYXJiaW5lOiB7XG4gICAgICBsYWJlbDogXCJCdXJzdCBDYXJiaW5lXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJidXJzdFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic2hvcnRUcmFjZXJCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiZ3JvdXBlZFZvbGxleVwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ29sZFwiLCB0cmFpbENvbG9yOiBcIm9yYW5nZVwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjIsIHRyYWlsV2lkdGhTY2FsZTogMC44LCB2aXN1YWxJbnRlbnNpdHk6IDEuMDUsIG11enpsZUVmZmVjdDogXCJncm91cGVkUHVsc2VcIiwgaW1wYWN0RWZmZWN0OiBcImJ1cnN0Q3Jvc3NcIiwgbXV6emxlRHVyYXRpb25NczogODYsIGltcGFjdER1cmF0aW9uTXM6IDEyMCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi45NSxkYW1hZ2U6Ljc1LHByb2plY3RpbGVTcGVlZDo2NTAscHJvamVjdGlsZVJhZGl1czoyLjc1LGJ1cnN0Q291bnQ6MyxidXJzdEludGVydmFsTXM6NzIsc3ByZWFkRGVncmVlczouNzUsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNTUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4wOCxkYW1hZ2U6Ljg1LHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLjg1LGJ1cnN0Q291bnQ6MyxidXJzdEludGVydmFsTXM6NjQsc3ByZWFkRGVncmVlczouNzUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNixoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi45LHByb2plY3RpbGVTcGVlZDo3MjUscHJvamVjdGlsZVJhZGl1czozLGJ1cnN0Q291bnQ6NCxidXJzdEludGVydmFsTXM6NTgsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjE3LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgaGVhdnlDYW5ub246IHtcbiAgICAgIGxhYmVsOiBcIkhlYXZ5IENhbm5vblwiLCByYXJpdHk6IFwidW5jb21tb25cIiwgdW5sb2NrUGhhc2U6IFwicHJlc3N1cmVcIiwgc2hvdFBhdHRlcm46IFwiaGVhdnlTaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInBpZXJjaW5nU3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwiY2h1bmt5Qm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJzbG93SGVhdnlQdW5jaFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwic2x1Z1wiLCBwcm9qZWN0aWxlQ29sb3I6IFwib3JhbmdlXCIsIHRyYWlsQ29sb3I6IFwicmVkXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDEuMzUsIHRyYWlsV2lkdGhTY2FsZTogMS4zNSwgdmlzdWFsSW50ZW5zaXR5OiAxLjIsIG11enpsZUVmZmVjdDogXCJzaG9ja0RpYW1vbmRcIiwgaW1wYWN0RWZmZWN0OiBcImltcGFjdFJpbmdcIiwgbXV6emxlRHVyYXRpb25NczogMTM1LCBpbXBhY3REdXJhdGlvbk1zOiAxOTAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouNzIsZGFtYWdlOjIuNCxwcm9qZWN0aWxlU3BlZWQ6NTAwLHByb2plY3RpbGVSYWRpdXM6NC41LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjIyLGltcGFjdFJhZGl1czoxNCxrbm9ja2JhY2s6MTQsbXV6emxlRmxhc2hTY2FsZToxLjEsaGl0Rmxhc2hTY2FsZToxLjI1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOi44MixkYW1hZ2U6Myxwcm9qZWN0aWxlU3BlZWQ6NTM1LHByb2plY3RpbGVSYWRpdXM6NC43NSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyNCxpbXBhY3RSYWRpdXM6MTYsa25vY2tiYWNrOjE4LG11enpsZUZsYXNoU2NhbGU6MS4yLGhpdEZsYXNoU2NhbGU6MS4zNX0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDouOSxkYW1hZ2U6My42LHByb2plY3RpbGVTcGVlZDo1NzAscHJvamVjdGlsZVJhZGl1czo1LHBpZXJjZToyLHRyYWlsTGVuZ3RoOjI2LGltcGFjdFJhZGl1czoxOCxrbm9ja2JhY2s6MjIsbXV6emxlRmxhc2hTY2FsZToxLjMsaGl0Rmxhc2hTY2FsZToxLjV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzcGxpdHRlclJpZmxlOiB7XG4gICAgICBsYWJlbDogXCJTcGxpdHRlciBSaWZsZVwiLCByYXJpdHk6IFwidW5jb21tb25cIiwgdW5sb2NrUGhhc2U6IFwicHJlc3N1cmVcIiwgc2hvdFBhdHRlcm46IFwicGFpcmVkU3ByZWFkXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJwYWlyZWRCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImN1cnJlbnRMYW5lRm9ya1wiLCBwcm9qZWN0aWxlU2hhcGU6IFwic3BsaXRCb2x0XCIsIHByb2plY3RpbGVDb2xvcjogXCJ2aW9sZXRcIiwgdHJhaWxDb2xvcjogXCJwaW5rXCIsIGNvcmVDb2xvcjogXCJ2aW9sZXRcIiwgcHJvamVjdGlsZUFzcGVjdDogMy40LCB0cmFpbFdpZHRoU2NhbGU6IDAuNTUsIHZpc3VhbEludGVuc2l0eTogMSwgbXV6emxlRWZmZWN0OiBcInR3aW5Qcm9uZ3NcIiwgaW1wYWN0RWZmZWN0OiBcInNwbGl0UmlwcGxlXCIsIG11enpsZUR1cmF0aW9uTXM6IDk1LCBpbXBhY3REdXJhdGlvbk1zOiAxNDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOCxwcm9qZWN0aWxlU3BlZWQ6NTg1LHByb2plY3RpbGVSYWRpdXM6Mi43NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZTouOTUscHJvamVjdGlsZVNwZWVkOjYyNSxwcm9qZWN0aWxlUmFkaXVzOjIuODUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjU1LGRhbWFnZToxLjA1LHByb2plY3RpbGVTcGVlZDo2NjUscHJvamVjdGlsZVJhZGl1czozLHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6My41LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6Ljc1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgZ3VuXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkU2hvdFBhdHRlcm5zLmluY2x1ZGVzKGd1bi5zaG90UGF0dGVybiksIGAke2lkfSBoYXMgYW4gdW5zdXBwb3J0ZWQgc2hvdCBwYXR0ZXJuLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnMuaW5jbHVkZXMoZ3VuLnByb2plY3RpbGVCZWhhdmlvciksIGAke2lkfSBoYXMgYW4gdW5zdXBwb3J0ZWQgcHJvamVjdGlsZSBiZWhhdmlvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcHJvamVjdGlsZSBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHRyYWlsIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zID4gMCAmJiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RHVyYXRpb25NcyA+IDAsIGAke2lkfSBlZmZlY3QgZHVyYXRpb25zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLmxldmVscy5sZW5ndGggPiAwLCBgJHtpZH0gbXVzdCBkZWZpbmUgbGV2ZWxzLmApO1xuICAgICAgZm9yIChjb25zdCB0dW5pbmcgb2YgZ3VuLmxldmVscykge1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmZpcmVSYXRlUGVyU2Vjb25kID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBmaXJlIHJhdGUgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5kYW1hZ2UgPiAwICYmIHR1bmluZy5wcm9qZWN0aWxlU3BlZWQgPiAwICYmIHR1bmluZy5wcm9qZWN0aWxlUmFkaXVzID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBwcm9qZWN0aWxlIHBvd2VyLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJ1cnN0Q291bnQgPj0gMSAmJiB0dW5pbmcucHJvamVjdGlsZUNvdW50ID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgY291bnRzLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ3VuRmFtaWx5ID0gbmV3IEd1bkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIEd1bklkID0ga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcmJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgYmFzZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICByaW1Db2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhZG93Q29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBPcmJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJvcmJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIk9yYiBFbmVteVwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGJhc2ljT3JiOiB7XG4gICAgICBsYWJlbDogXCJCYXNpYyBPcmJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIGdsb3c6IDAuODIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogMC4yOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS4yNSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAwLjcyLFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA5MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS44LFxuICAgICAgc2hhcGVab29tOiAzLjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEd1bklkIH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tMZWdlbmRFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQmFsYW5jZSB7XG4gIGVuZW15SHA6IG51bWJlcjtcbiAgZW5lbXlTcGVlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRGVmaW5pdGlvbiB7XG4gIGxheW91dDogc3RyaW5nO1xuICBsZWdlbmQ6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIFRyYWNrTGVnZW5kRW50cnk+PjtcbiAgYmFsYW5jZTogVHJhY2tCYWxhbmNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZHVyYXRpb25TZWNvbmRzOiBudW1iZXI7XG4gIHN0YXJ0aW5nR3VuOiBHdW5JZDtcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSB8IDIgfCAzO1xuICB2aWV3cG9ydDoge1xuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCI7XG4gICAgYXNwZWN0V2lkdGg6IG51bWJlcjtcbiAgICBhc3BlY3RIZWlnaHQ6IG51bWJlcjtcbiAgICBsb2dpY2FsV2lkdGg6IG51bWJlcjtcbiAgICBsb2dpY2FsSGVpZ2h0OiBudW1iZXI7XG4gIH07XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGRlZmluaXRpb246IFRyYWNrRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFja0VudGl0eSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgbGFuZUluZGV4OiBudW1iZXI7XG4gIHJvd0luZGV4OiBudW1iZXI7XG4gIGRpc3RhbmNlRnJvbVBsYXllcjogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuY29uc3QgaXNFbmVteSA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PiBpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IFBhcnNlZFRyYWNrRW50aXR5W10ge1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGZvciAoY29uc3QgW3N5bWJvbCwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKHRyYWNrLmxlZ2VuZCkpIHtcbiAgICBpZiAoWy4uLnN5bWJvbF0ubGVuZ3RoICE9PSAxIHx8IC9cXHN8XFx8Ly50ZXN0KHN5bWJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIGtleSBcIiR7c3ltYm9sfVwiIG11c3QgYmUgb25lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBvdGhlciB0aGFuIFwifFwiLmApO1xuICAgIH1cbiAgICBpZiAoIWVudHJ5LmlkKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBtdXN0IGhhdmUgYW4gaWQuYCk7XG4gICAgaWYgKGVudHJ5LnNwZWVkICE9PSB1bmRlZmluZWQgJiYgZW50cnkuc3BlZWQgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuXG4gIGxldCBsZWZ0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGV0IHJpZ2h0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcblxuICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBwaXBlQ291bnQgPSBbLi4ucm93LnRleHRdLmZpbHRlcihjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyID09PSBcInxcIikubGVuZ3RoO1xuICAgIGlmIChwaXBlQ291bnQgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IG11c3QgY29udGFpbiBleGFjdGx5IG9uZSBcInxcIiBzZXBhcmF0b3I7IGZvdW5kICR7cGlwZUNvdW50fS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gcm93LnRleHQuc3BsaXQoXCJ8XCIpLm1hcChzaWRlID0+IHNpZGUucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgICBsZWZ0V2lkdGggPz89IGxlZnQubGVuZ3RoO1xuICAgIHJpZ2h0V2lkdGggPz89IHJpZ2h0Lmxlbmd0aDtcblxuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gbGVmdFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgbGVmdCB3aWR0aCAke2xlZnQubGVuZ3RofTsgZXhwZWN0ZWQgJHtsZWZ0V2lkdGh9LmApO1xuICAgIH1cbiAgICBpZiAocmlnaHQubGVuZ3RoICE9PSByaWdodFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgcmlnaHQgd2lkdGggJHtyaWdodC5sZW5ndGh9OyBleHBlY3RlZCAke3JpZ2h0V2lkdGh9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3RhbmNlRnJvbVBsYXllciA9IHJvd3MubGVuZ3RoIC0gMSAtIHJvd0luZGV4O1xuICAgIGZvciAoY29uc3QgW3NpZGUsIGxhbmVdIG9mIFtbXCJsZWZ0XCIsIGxlZnRdLCBbXCJyaWdodFwiLCByaWdodF1dIGFzIGNvbnN0KSB7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG5cbiAgICAgICAgZW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICBzaWRlLFxuICAgICAgICAgIGxhbmVJbmRleCxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBkaXN0YW5jZUZyb21QbGF5ZXIsXG4gICAgICAgICAgc3BlZWRNdWx0aXBsaWVyOiAoZW50cnkuc3BlZWQgPz8gMSkgKiAoaXNFbmVteShlbnRyeS5pZCkgPyB0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgOiAxKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbnRpdGllcy5zb3J0KChhLCBiKSA9PlxuICAgIGEuZGlzdGFuY2VGcm9tUGxheWVyIC0gYi5kaXN0YW5jZUZyb21QbGF5ZXIgfHxcbiAgICBhLnJvd0luZGV4IC0gYi5yb3dJbmRleCB8fFxuICAgIGEuc2lkZS5sb2NhbGVDb21wYXJlKGIuc2lkZSkgfHxcbiAgICBhLmxhbmVJbmRleCAtIGIubGFuZUluZGV4KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCAxOiBGaXJzdCBHbG93XCIsXHJcbiAgZGVzY3JpcHRpb246IFwiQSBnZW50bGUgb25ib2FyZGluZyBydW46IGVhcmx5IHRlbnNpb24sIGEgcXVpY2sgcG93ZXItdXAgYmVhdCwgdGhlbiBlYXN5IGVzY2FsYXRpbmcgd2F2ZXMgZm9yIGEgZmlyc3QtdGltZSBwbGF5ZXIuXCIsXHJcbiAgZHVyYXRpb25TZWNvbmRzOiAyNSxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4yLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLlMuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDAuNzUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcclxuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDI6IE5lb24gV2FrZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBzZWNvbmQgb25ib2FyZGluZyBydW46IGEgc2xpZ2h0bHkgZGVuc2VyIG9wZW5pbmcsIGVhcmx5IHJlY292ZXJ5IHBpY2t1cHMsIGFuZCBhIGdlbnRsZSBmaW5hbGUgdGhhdCB0ZWFjaGVzIHRoZSBwbGF5ZXIgdG8gdHJ1c3QgdGhlaXIgZ3Jvd2luZyBzcXVhZC5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDMwLFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRy4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5TLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDAuNzUgfSxcclxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICB9LFxyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICBlbmVteUhwOiAxLjAsXHJcbiAgICAgIGVuZW15U3BlZWQ6IDAuOTUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDM6IFByaXNtIFByZXNzdXJlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHRoaXJkIG9uYm9hcmRpbmcgcnVuIHN0cmV0Y2hlcyB0aGUgcGxheWVyXHUyMDE5cyBlbmR1cmFuY2Ugd2l0aCBsb25nZXIgcGFjaW5nLCBzYWZlciB1cGdyYWRlIHdpbmRvd3MsIGFuZCBkZW5zZXIgYnV0IHN0aWxsIGZvcmdpdmluZyBlbmVteSBwYXR0ZXJucy5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDYwLFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi5iIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5KLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlMuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDAuNzUgfSxcclxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiSlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS4wLFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcclxuICBsYWJlbDogXCJMZXZlbCA0OiBWaW9sZXQgU3VyZ2VcIixcclxuICBkZXNjcmlwdGlvbjogXCJUaGUgZm91cnRoIHJ1biBkb3VibGVzIHRoZSBlbmR1cmFuY2UgdGVzdCBhZ2FpbiwgYWRkaW5nIGRlbnNlciB3YXZlcywgYmlnZ2VyIHBpY2t1cCB0aW1pbmcgZGVjaXNpb25zLCBhbmQgaGlnaGVyLXRpZXIgdG9vbHMgd2hpbGUgc3RheWluZyByZWFkYWJsZSBhbmQgZmFpci5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDEyMCxcclxuICBzdGFydGluZ0d1bjogXCJwdWxzZVBpc3RvbFwiLFxyXG4gIHN0YXJ0aW5nR3VuTGV2ZWw6IDEsXHJcbiAgdmlld3BvcnQ6IHtcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgICBhc3BlY3RXaWR0aDogOSxcclxuICAgIGFzcGVjdEhlaWdodDogMTYsXHJcbiAgICBsb2dpY2FsV2lkdGg6IDQ1MCxcclxuICAgIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcclxuICB9LFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xyXG4gICAgbGF5b3V0OiBgXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuRS4uLlxyXG4uLkcuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4yLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuUy4uLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkkuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4yLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLi4uYiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5TLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5LLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuRUVFLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRUVFXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlguLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi5jIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG5FRUUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi5FRUVcclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuRUVFLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRUVFXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5YLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbkVFRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlAuLiB8IC4uLi4uXHJcbmAsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxyXG4gICAgICBcIlBcIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxyXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXHJcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAwLjc1IH0sXHJcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC45IH0sXHJcbiAgICAgIFwiS1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiWFwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCIsIHNwZWVkOiAwLjk1IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJjXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5uZWVkbGVSYXBpZXJcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMS4wNSxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgfSBmcm9tIFwiLi9UcmFjazFcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGdlbmVyYXRlZFRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgZ2VuZXJhdGVkVHJhY2szIH0gZnJvbSBcIi4vVHJhY2szXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBnZW5lcmF0ZWRUcmFjazQgfSBmcm9tIFwiLi9UcmFjazRcIjtcbi8vIFJlZ2lzdGVyIGEgdHJhY2sgYnkgaW1wb3J0aW5nIGl0IGFuZCBhZGRpbmcgb25lIGVudHJ5IGhlcmUuXG5leHBvcnQgY29uc3QgdHJhY2tzID0ge1xuIFxuICBcInRyYWNrMVwiOiBnZW5lcmF0ZWRUcmFjayxcbiAgXCJ0cmFjazJcIjogZ2VuZXJhdGVkVHJhY2syLFxuICBcInRyYWNrM1wiOiBnZW5lcmF0ZWRUcmFjazMsXG4gIFwidHJhY2s0XCI6IGdlbmVyYXRlZFRyYWNrNCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB7IGdlbmVyYXRlZFRyYWNrLCBnZW5lcmF0ZWRUcmFjazIsIGdlbmVyYXRlZFRyYWNrMywgZ2VuZXJhdGVkVHJhY2s0IH07IFxuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCB0cmFja10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLmR1cmF0aW9uU2Vjb25kcyA+IDAsIGAke2lkfSBkdXJhdGlvbiBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrLnZpZXdwb3J0Lm9yaWVudGF0aW9uID09PSBcInBvcnRyYWl0XCIgJiYgdHJhY2sudmlld3BvcnQuYXNwZWN0SGVpZ2h0ID4gdHJhY2sudmlld3BvcnQuYXNwZWN0V2lkdGgsIGAke2lkfSBtdXN0IHVzZSBpdHMgZGVjbGFyZWQgcG9ydHJhaXQgdmlld3BvcnQuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2sudmlld3BvcnQubG9naWNhbFdpZHRoID4gMCAmJiB0cmFjay52aWV3cG9ydC5sb2dpY2FsSGVpZ2h0ID4gMCwgYCR7aWR9IGxvZ2ljYWwgdmlld3BvcnQgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWx5ID0gbmV3IFRyYWNrRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgVHJhY2tJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gTk9UIGZpcmUgb24gYSB0aW1lciBcdTIwMTQgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lIFx1MjAxNCBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIE5PVCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBDYW4gY29leGlzdCB3aXRoIGFuIGFjdGl2ZSBHdW4gYW5kIGFuIGFjdGl2ZSBTaGllbGQgc2ltdWx0YW5lb3VzbHkuXG4gICAqIC0gVGFyZ2V0aW5nIGlzIGxhbmUtYXdhcmUgdmlhIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpLlxuICAgKiAtIFRoZSBzbGFzaCBhbmltYXRpb24gcnVucyBmb3Igc2xhc2hEdXJhdGlvbk1zIG1pbGxpc2Vjb25kcywgdGhlbiBmYWRlcy5cbiAgICogLSBEYW1hZ2UgaXMgYXBwbGllZCBpbW1lZGlhdGVseSB3aGVuIHRoZSBzd2luZyBzdGFydHMgKG5vdCBhdCBhbmltYXRpb24gZW5kKS5cbiAgICpcbiAgICogUHJlY2VkZW5jZTogc3dvcmQgYXR0YWNrcyBvY2N1ciBhZnRlciBzaGllbGRCbG9jay9zaGllbGRQdWxzZSBidXQgYmVmb3JlXG4gICAqIHNoaWVsZENvbnRhY3REYW1hZ2UgYW5kIHNoaWVsZEF1cmEuIFNlZSBtYWluLnRzIG5lYXJQbGF5ZXJFZmZlY3RPcmRlci5cbiAgICovXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgLyoqXG4gICAgICogQXJjIEJsYWRlIFx1MjAxNCBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIEhpdHMgMVx1MjAxMzIgZW5lbWllcyBkZXBlbmRpbmcgb24gYXJjIG92ZXJsYXAuIFNob3J0IGNvb2xkb3duLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuODUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMFx1MjAxMzE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgXHUyMDE0IEhlYXZ5IHN3b3JkLiBTbG93ZXIgYnV0IGhpdHMgbXVsdGlwbGUgY2x1c3RlcmVkIGVuZW1pZXMuXG4gICAgICogV2lkZSBhcmMsIHRoaWNrZXIgc2xhc2guIEJldHRlciBhZ2FpbnN0IHRpZ2h0IGdyb3VwcyB0aGFuIGZhc3Qgc2luZ2xlcy5cbiAgICAgKi9cbiAgICBjbGVhdmVyOiB7XG4gICAgICBsYWJlbDogXCJDbGVhdmVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIHJhbmdlOiA1NixcbiAgICAgIGFyY0RlZ3JlZXM6IDExMCxcbiAgICAgIGRhbWFnZTogMi44LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjgsXG4gICAgICBtYXhUYXJnZXRzOiA0LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJjbHVzdGVyTmVhclBsYXllclwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAyMjAsXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjY1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbmQgd2lkZS4gVGhpY2tlciBhcmMuIFN0cm9uZ2VyIGltcGFjdCBmbGFzaC4gR2VvbWV0cmljIGFuZCBwcm9jZWR1cmFsIFx1MjAxNCBub3QgYSBidWxsZXQuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE5lZWRsZSBSYXBpZXIgXHUyMDE0IFByZWNpc2lvbiBzd29yZC4gTG9uZyByZWFjaCwgbmFycm93IGFyYywgc2luZ2xlIHRhcmdldC5cbiAgICAgKiBQcmlvcml0aXplcyB0aGUgbW9zdCBkYW5nZXJvdXMgKGZyb250LW1vc3QpIGVuZW15LlxuICAgICAqL1xuICAgIG5lZWRsZVJhcGllcjoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlIFJhcGllclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIHJhbmdlOiA3MCxcbiAgICAgIGFyY0RlZ3JlZXM6IDMwLFxuICAgICAgZGFtYWdlOiAyLjIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMSxcbiAgICAgIG1heFRhcmdldHM6IDEsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImZyb250TW9zdFRocmVhdFwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDAuNTUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkVsZWdhbnQgYW5kIHByZWNpc2UuIFRoaW4gc3RhYmJpbmcgbGluZS4gTm90IGEgZ3VuIHNob3QgXHUyMDE0IGl0IG11c3QgZmVlbCBtZWxlZS4gU2luZ2xlIHRhcmdldCBwcmlvcml0eS5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5yYW5nZSA+IDAsIGAke2lkfSByYW5nZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmFyY0RlZ3JlZXMgPiAwICYmIHN3b3JkLmFyY0RlZ3JlZXMgPD0gMzYwLCBgJHtpZH0gYXJjRGVncmVlcyBtdXN0IGJlIGluICgwLCAzNjBdLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZSA+IDAsIGAke2lkfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImV4cG9ydCBpbnRlcmZhY2UgU3F1YWRJbnB1dENhbGxiYWNrcyB7XG4gIGxhbmUoKTogMCB8IDE7XG4gIHNldExhbmUobGFuZTogMCB8IDEpOiB2b2lkO1xuICBzZXRBaW0odmFsdWU6IG51bWJlcik6IHZvaWQ7XG4gIHJlbGVhc2VBaW0oKTogdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTcXVhZElucHV0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBqb3lzdGljazogc3RyaW5nLFxuICBjYWxsYmFja3M6IFNxdWFkSW5wdXRDYWxsYmFja3MsXG4pOiB2b2lkIHtcbiAgbGV0IHBvaW50ZXJJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxldCBwb2ludGVyU3RhcnRlZFggPSAwO1xuICBsZXQgcG9pbnRlck1vdmVkID0gZmFsc2U7XG4gIGNvbnN0IGFwcGx5UG9pbnRlciA9IChjbGllbnRYOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBib3VuZHMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChjbGllbnRYIC0gYm91bmRzLmxlZnQpIC8gYm91bmRzLndpZHRoKSk7XG4gICAgY29uc3QgbGFuZTogMCB8IDEgPSBub3JtYWxpemVkIDwgLjUgPyAwIDogMTtcbiAgICBpZiAobGFuZSAhPT0gY2FsbGJhY2tzLmxhbmUoKSkgY2FsbGJhY2tzLnNldExhbmUobGFuZSk7XG4gICAgY29uc3QgbGFuZVN0YXJ0ID0gbGFuZSA9PT0gMCA/IDAgOiAuNTtcbiAgICBjb25zdCB3aXRoaW5MYW5lID0gKG5vcm1hbGl6ZWQgLSBsYW5lU3RhcnQpIC8gLjU7XG4gICAgY2FsbGJhY2tzLnNldEFpbSgod2l0aGluTGFuZSAtIC41KSAqIDIpO1xuICB9O1xuICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJhXCIgfHwgZXZlbnQua2V5ID09PSBcIkFcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIGNhbGxiYWNrcy5zZXRMYW5lKDApO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiZFwiIHx8IGV2ZW50LmtleSA9PT0gXCJEXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikgY2FsbGJhY2tzLnNldExhbmUoMSk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3Qoam95c3RpY2spIHx8IHRhcmdldC5jbG9zZXN0KFwiYnV0dG9uLGlucHV0LHNlbGVjdCxhXCIpKSByZXR1cm47XG4gICAgcG9pbnRlcklkID0gZXZlbnQucG9pbnRlcklkO1xuICAgIHBvaW50ZXJTdGFydGVkWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgcG9pbnRlck1vdmVkID0gZmFsc2U7XG4gICAgY29udGFpbmVyLnNldFBvaW50ZXJDYXB0dXJlPy4ocG9pbnRlcklkKTtcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBwb2ludGVyTW92ZWQgfHw9IE1hdGguYWJzKGV2ZW50LmNsaWVudFggLSBwb2ludGVyU3RhcnRlZFgpID4gMztcbiAgICBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gIH0pO1xuICBjb25zdCBlbmRQb2ludGVyID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBwb2ludGVySWQpIHJldHVybjtcbiAgICBpZiAoIXBvaW50ZXJNb3ZlZCkgYXBwbHlQb2ludGVyKGV2ZW50LmNsaWVudFgpO1xuICAgIHBvaW50ZXJJZCA9IG51bGw7XG4gICAgY2FsbGJhY2tzLnJlbGVhc2VBaW0oKTtcbiAgfTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgZW5kUG9pbnRlcik7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb3N0cG9pbnRlcmNhcHR1cmVcIiwgKCkgPT4ge1xuICAgIHBvaW50ZXJJZCA9IG51bGw7XG4gICAgY2FsbGJhY2tzLnJlbGVhc2VBaW0oKTtcbiAgfSk7XG4gIGlmIChtYXRjaE1lZGlhKFwiKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oam95c3RpY2spO1xuICAgIGNvbnN0IGtub2IgPSBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi5zdGljay1rbm9iXCIpO1xuICAgIGxldCBqb3lzdGlja1BvaW50ZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGFwcGx5Sm95c3RpY2sgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICBjb25zdCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcmFkaXVzID0gYm91bmRzLndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IHJhdyA9IChldmVudC5jbGllbnRYIC0gKGJvdW5kcy5sZWZ0ICsgcmFkaXVzKSkgLyByYWRpdXM7XG4gICAgICBjb25zdCB4ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHJhdykpO1xuICAgICAgaWYgKGtub2IpIGtub2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3ggKiByYWRpdXMgKiAuNjJ9cHgpLC01MCUpYDtcbiAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguYWJzKHgpO1xuICAgICAgaWYgKG1hZ25pdHVkZSA+PSAuOTUpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkOiAwIHwgMSA9IHggPCAwID8gMCA6IDE7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWQgIT09IGNhbGxiYWNrcy5sYW5lKCkpIGNhbGxiYWNrcy5zZXRMYW5lKHJlcXVlc3RlZCk7XG4gICAgICAgIGNhbGxiYWNrcy5zZXRBaW0oMCk7XG4gICAgICB9IGVsc2UgaWYgKG1hZ25pdHVkZSA8PSAuNSkgY2FsbGJhY2tzLnNldEFpbSh4IC8gLjUpO1xuICAgICAgZWxzZSBjYWxsYmFja3Muc2V0QWltKE1hdGguc2lnbih4KSk7XG4gICAgfTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBqb3lzdGlja1BvaW50ZXIgPSBldmVudC5wb2ludGVySWQ7XG4gICAgICBlbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG4gICAgICBhcHBseUpveXN0aWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnBvaW50ZXJJZCA9PT0gam95c3RpY2tQb2ludGVyKSBhcHBseUpveXN0aWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgICBjb25zdCBlbmRKb3lzdGljayA9IChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQucG9pbnRlcklkICE9PSBqb3lzdGlja1BvaW50ZXIpIHJldHVybjtcbiAgICAgIGpveXN0aWNrUG9pbnRlciA9IG51bGw7XG4gICAgICBpZiAoa25vYikga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLC01MCUpXCI7XG4gICAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICAgIH07XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRKb3lzdGljayk7XG4gICAgZWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgZW5kSm95c3RpY2spO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uL011bHRpcGxpZXJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcXVhZFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICByb3c6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFkTW9kZWwge1xuICBsYW5lOiAwIHwgMSA9IDA7XG4gIGNvdW50ID0gMTtcbiAgYWltT2Zmc2V0ID0gMDtcbiAgeCA9IDA7XG4gIHRhcmdldFggPSAwO1xuICBsYW5lU2hpZnRTdGFydGVkQXQgPSAwO1xuXG4gIGFkZChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWluKHNwZWMubWF4U3F1YWRTaXplLCB0aGlzLmNvdW50ICsgYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHJlbW92ZShhbW91bnQgPSAxKTogbnVtYmVyIHtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoMCwgdGhpcy5jb3VudCAtIGFtb3VudCk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBzZXRMYW5lKGxhbmU6IDAgfCAxLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlciwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobGFuZSAhPT0gdGhpcy5sYW5lKSB7XG4gICAgICB0aGlzLmxhbmVTaGlmdFN0YXJ0ZWRBdCA9IG5vdztcbiAgICAgIC8vIFJlc2V0IGFpbSBvZmZzZXQgc28gdGhlIHBsYXllciBzbmFwcyB0byB0aGUgY29ycmVjdCBjb2x1bW4gaW4gdGhlIG5ldyBsYW5lLlxuICAgICAgdGhpcy5haW1PZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLmxhbmUgPSBsYW5lO1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIobGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHNldEFpbShub3JtYWxpemVkOiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWltT2Zmc2V0ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIG5vcm1hbGl6ZWQpKSAqIGxhbmVXaWR0aCAqIC4yODtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIGF1dG9BaW0odGFyZ2V0T2Zmc2V0OiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIC8vIEhpZ2ggbGVycCBmYWN0b3IgKDAuODUpIHNvIGF1dG8tYWltIHNuYXBzIGFsbW9zdCBpbnN0YW50YW5lb3VzbHkgZWFjaCBmcmFtZS5cbiAgICB0aGlzLmFpbU9mZnNldCArPSAoTWF0aC5tYXgoLWxhbmVXaWR0aCAqIC4yOCwgTWF0aC5taW4obGFuZVdpZHRoICogLjI4LCB0YXJnZXRPZmZzZXQpKSAtIHRoaXMuYWltT2Zmc2V0KSAqIC44NTtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gMSAtIE1hdGgucG93KC4wMDAwOCwgZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLnggKz0gKHRoaXMudGFyZ2V0WCAtIHRoaXMueCkgKiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKiBYIG9mZnNldHMgb2YgZWFjaCBjb2x1bW4gaW4gdGhlIGZyb250IHJvdywgcmVsYXRpdmUgdG8gc3F1YWQgY2VudGVyLiAqL1xuICBmcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sIChfLCBjb2wpID0+XG4gICAgICAoY29sIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICk7XG4gIH1cblxuICBwb2ludHMoYmFzZVk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFNxdWFkUG9pbnRbXSB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgY29uc3QgcG9pbnRzOiBTcXVhZFBvaW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCAtIHJvdyAqIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpbmRleCAlIHNwZWMubWVtYmVyc1BlclJvdztcbiAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgeDogdGhpcy54ICsgKGNvbHVtbiAtIChyb3dDb3VudCAtIDEpIC8gMikgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgeTogYmFzZVkgKyByb3cgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQXV0b0FpbVRhcmdldCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9BaW1Db250cm9sU3RhdGUge1xuICBtYW51YWwgPSBmYWxzZTtcblxuICBsYW5lU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgLy8gTGFuZSBjaGFuZ2VzIGFyZSBuYXZpZ2F0aW9uLCBub3QgcGVyc2lzdGVudCBtYW51YWwgYWltaW5nLlxuICB9XG5cbiAgYWltQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gIH1cblxuICBhaW1SZWxlYXNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YWQtY2VudGVyIGFpbSBvZmZzZXQgKHJlbGF0aXZlIHRvIGxhbmVDZW50ZXIpIHRoYXQgYmVzdCBhbGlnbnNcbiAqIG9uZSBvZiB0aGUgc3F1YWQncyBmcm9udC1yb3cgY29sdW1ucyB0byB0aGUgbmVhcmVzdCBlbmVteS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0cyAgICAgICAgIEFsbCBsaXZlIChub24tZHlpbmcpIGVuZW1pZXMgaW4gdGhlIGN1cnJlbnQgbGFuZS5cbiAqIEBwYXJhbSBsYW5lQ2VudGVyICAgICAgUGl4ZWwgWCBvZiB0aGUgbGFuZSdzIGNlbnRlci5cbiAqIEBwYXJhbSBjb2x1bW5PZmZzZXRzICAgWCBvZmZzZXRzIG9mIGVhY2ggZnJvbnQtcm93IGNvbHVtbiByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuXG4gKiBAcGFyYW0gY3VycmVudE9mZnNldCAgIEN1cnJlbnQgc3F1YWQgYWltIG9mZnNldCAoc3F1YWQgY2VudGVyID0gbGFuZUNlbnRlciArIGN1cnJlbnRPZmZzZXQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QXV0b0FpbU9mZnNldChcbiAgdGFyZ2V0czogcmVhZG9ubHkgQXV0b0FpbVRhcmdldFtdLFxuICBsYW5lQ2VudGVyOiBudW1iZXIsXG4gIGNvbHVtbk9mZnNldHM6IHJlYWRvbmx5IG51bWJlcltdLFxuICBjdXJyZW50T2Zmc2V0ID0gMCxcbik6IG51bWJlciB7XG4gIGlmICghdGFyZ2V0cy5sZW5ndGgpIHJldHVybiAwO1xuXG4gIC8vIElkZW50aWZ5IHRoZSBmcm9udCByb3c6IGdyb3VwIHRhcmdldHMgYnkgcm93SWQgKG9yIHRyZWF0IHVuZ3JvdXBlZCB0YXJnZXRzIGFzIGEgc2luZ2xlIHJvdykuXG4gIGNvbnN0IGV4cGxpY2l0Um93cyA9IG5ldyBNYXA8bnVtYmVyLCBBdXRvQWltVGFyZ2V0W10+KCk7XG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0LnJvd0lkID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJvdyA9IGV4cGxpY2l0Um93cy5nZXQodGFyZ2V0LnJvd0lkKSA/PyBbXTtcbiAgICByb3cucHVzaCh0YXJnZXQpO1xuICAgIGV4cGxpY2l0Um93cy5zZXQodGFyZ2V0LnJvd0lkLCByb3cpO1xuICB9XG4gIGNvbnN0IGZyb250Um93ID0gZXhwbGljaXRSb3dzLnNpemVcbiAgICA/IFsuLi5leHBsaWNpdFJvd3MudmFsdWVzKCldLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PlxuICAgICAgICBNYXRoLm1heCguLi5yaWdodC5tYXAodCA9PiB0LnkpKSAtIE1hdGgubWF4KC4uLmxlZnQubWFwKHQgPT4gdC55KSkpWzBdXG4gICAgOiB0YXJnZXRzLmZpbHRlcih0ID0+IE1hdGguYWJzKHQueSAtIE1hdGgubWF4KC4uLnRhcmdldHMubWFwKGMgPT4gYy55KSkpIDwgMyk7XG5cbiAgLy8gRm9yIGVhY2ggZW5lbXkgaW4gdGhlIGZyb250IHJvdyBcdTAwRDcgZWFjaCBzcXVhZCBjb2x1bW4sIGNvbXB1dGUgdGhlIHNxdWFkLWNlbnRlclxuICAvLyBvZmZzZXQgdGhhdCB3b3VsZCBwbGFjZSB0aGF0IGNvbHVtbiBleGFjdGx5IG9uIHRoYXQgZW5lbXkncyBYLlxuICAvLyBQaWNrIHRoZSAoZW5lbXksIGNvbHVtbikgcGFpciB3aG9zZSByZXF1aXJlZCBvZmZzZXQgaXMgY2xvc2VzdCB0byB0aGUgY3VycmVudFxuICAvLyBvZmZzZXQgXHUyMDE0IG1pbmltaXNpbmcgdGhlIGFpbSBtb3ZlbWVudCBuZWVkZWQgd2hpbGUgZ3VhcmFudGVlaW5nIGEgaGl0LlxuICBjb25zdCBjb2xzID0gY29sdW1uT2Zmc2V0cy5sZW5ndGggPiAwID8gY29sdW1uT2Zmc2V0cyA6IFswXTtcbiAgbGV0IGJlc3RPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IGVuZW15IG9mIGZyb250Um93KSB7XG4gICAgZm9yIChjb25zdCBjb2xPZmZzZXQgb2YgY29scykge1xuICAgICAgLy8gc3F1YWRDZW50ZXIgPSBsYW5lQ2VudGVyICsgYWltT2Zmc2V0IFx1MjE5MiBjb2x1bW4gbGFuZHMgYXQgbGFuZUNlbnRlciArIGFpbU9mZnNldCArIGNvbE9mZnNldFxuICAgICAgLy8gV2Ugd2FudCB0aGF0IHRvIGVxdWFsIGVuZW15LnggXHUyMTkyIGFpbU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0XG4gICAgICBjb25zdCBjYW5kaWRhdGVPZmZzZXQgPSBlbmVteS54IC0gbGFuZUNlbnRlciAtIGNvbE9mZnNldDtcbiAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhjYW5kaWRhdGVPZmZzZXQgLSBjdXJyZW50T2Zmc2V0KTtcbiAgICAgIGlmIChkaXN0IDwgYmVzdERpc3QpIHtcbiAgICAgICAgYmVzdERpc3QgPSBkaXN0O1xuICAgICAgICBiZXN0T2Zmc2V0ID0gY2FuZGlkYXRlT2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiZXN0T2Zmc2V0O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSwgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kge1xuICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICBhc3BlY3RIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3Mge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbG9va0FuZ2xlRGVncmVlczogbnVtYmVyO1xuICBmb2xsb3dEaXN0YW5jZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGhvcml6b246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0ZWRTY2VuZSB7XG4gIHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXTtcbiAgc2hhcGVzOiBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBsYXllclk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDE3MCxcbiAgbG9va0FuZ2xlRGVncmVlczogMjAsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyNTUsXG4gIHpvb206IC43MyxcbiAgaG9yaXpvbjogLjU0LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBQcm9qZWN0ZWRTY2VuZSB7XG4gIGNvbnN0IHByb2plY3RQb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCk7XG5cbiAgY29uc3QgcHJvamVjdGVkUHJpbWl0aXZlcyA9IHByaW1pdGl2ZXMubWFwKHByaW1pdGl2ZSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZS5zaGFwZSA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uID8/IDA7XG4gICAgICBjb25zdCBoYWxmTGVuZ3RoID0gcHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGg7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBzdGFydCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCAtIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSAtIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgY29uc3QgZHkgPSBlbmQueSAtIHN0YXJ0Lnk7XG4gICAgICBjb25zdCBzY2FsZSA9IChzdGFydC5zY2FsZSArIGVuZC5zY2FsZSkgKiAuNTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgICAgeDogKHN0YXJ0LnggKyBlbmQueCkgLyAyLFxuICAgICAgICB5OiAoc3RhcnQueSArIGVuZC55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBwcmltaXRpdmUud2lkdGggKiBzY2FsZSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLngsIHByaW1pdGl2ZS55KTtcbiAgICBjb25zdCB3aWR0aCA9IHByaW1pdGl2ZS53aWR0aCAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IGhlaWdodCA9IChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCkgKiBwb2ludC5zY2FsZTtcbiAgICBsZXQgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb247XG4gICAgaWYgKHJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGF4aXNMZW5ndGggPSBNYXRoLm1heChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCwgcHJpbWl0aXZlLndpZHRoLCAxKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBheGlzTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBheGlzTGVuZ3RoKTtcbiAgICAgIHJvdGF0aW9uID0gTWF0aC5hdGFuMihwb2ludC54IC0gZW5kLngsIGVuZC55IC0gcG9pbnQueSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcm90YXRpb24sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdGVkU2hhcGVzID0gc2hhcGVzXG4gICAgLm1hcChzaGFwZSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNoYXBlLFxuICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICBzaXplOiBzaGFwZS5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgICAgIHo6IChzaGFwZS56ID8/IDApIC0gcG9pbnQuZGVwdGggKiAuMDAwOCxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gKChiLnogPz8gMCkgLSAoYS56ID8/IDApKSk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlczogcHJvamVjdGVkUHJpbWl0aXZlcywgc2hhcGVzOiBwcm9qZWN0ZWRTaGFwZXMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyUG9pbnQoXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgZGVwdGg6IG51bWJlciB9IHtcbiAgcmV0dXJuIHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCkoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQpIHtcbiAgY29uc3QgY2VudGVyWCA9IHZpZXdwb3J0LndpZHRoIC8gMjtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIHJldHVybiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHdvcmxkWCA9IHggLSBjZW50ZXJYO1xuICAgIGNvbnN0IHdvcmxkWiA9IHZpZXdwb3J0LnBsYXllclkgLSB5ICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2U7XG4gICAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgICBjb25zdCBjYW1lcmFZID0gcmVsYXRpdmVZICogY29zICsgd29ybGRaICogc2luO1xuICAgIGNvbnN0IGNhbWVyYVogPSBNYXRoLm1heChtaW5EZXB0aCwgd29ybGRaICogY29zIC0gcmVsYXRpdmVZICogc2luKTtcbiAgICBjb25zdCBzY2FsZSA9IGZvY2FsTGVuZ3RoIC8gY2FtZXJhWjtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY2VudGVyWCArIHdvcmxkWCAqIHNjYWxlLFxuICAgICAgeTogaG9yaXpvblkgLSBjYW1lcmFZICogc2NhbGUsXG4gICAgICBzY2FsZSxcbiAgICAgIGRlcHRoOiBjYW1lcmFaLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3JsZFlGb3JQcm9qZWN0ZWRZKFxuICBzY3JlZW5ZOiBudW1iZXIsXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiB7IGhlaWdodDogbnVtYmVyOyBwbGF5ZXJZOiBudW1iZXIgfSxcbik6IG51bWJlciB7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgY29uc3Qgc2NyZWVuUmF0aW8gPSAoaG9yaXpvblkgLSBzY3JlZW5ZKSAvIGZvY2FsTGVuZ3RoO1xuICBjb25zdCBkZW5vbWluYXRvciA9IHNpbiAtIHNjcmVlblJhdGlvICogY29zO1xuICBpZiAoTWF0aC5hYnMoZGVub21pbmF0b3IpIDwgLjAwMDEpIHJldHVybiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgY29uc3Qgd29ybGRaID0gLXJlbGF0aXZlWSAqIChjb3MgKyBzY3JlZW5SYXRpbyAqIHNpbikgLyBkZW5vbWluYXRvcjtcbiAgcmV0dXJuIHZpZXdwb3J0LnBsYXllclkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZSAtIHdvcmxkWjtcbn1cbiIsICJpbXBvcnQgeyBnZXROZW9uU2hhcGUsIE5lb25TaGFwZUFjdG9yLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlLCB0eXBlIE5lb25TaGFwZUxhYmVsLCB0eXBlIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHN3YXJtU2hhcGVzID0ge1xuICBwbGF5ZXI6IGdldE5lb25TaGFwZShcImFycm93LWNsYXNzaWNcIikhLFxuICBlbmVteTogZ2V0TmVvblNoYXBlKFwiaHVudGVyLWV5ZVwiKSEsXG4gIG11bHRpcGxpZXI6IGdldE5lb25TaGFwZShcImJydWlzZXItY3Jvc3NcIikhLFxuICBndW5QaWNrdXA6IGdldE5lb25TaGFwZShcImhleC1maWdodGVyXCIpISxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwaXhlbHNUb1NoYXBlV29ybGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+ICh7XG4gIHg6ICh4IC8gY2FudmFzLndpZHRoIC0gLjUpICogKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxuICB5OiAoLjUgLSB5IC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwaXhlbHM6IG51bWJlcikgPT4gcGl4ZWxzIC8gY2FudmFzLmhlaWdodCAqIDIuNTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yQXRQaXhlbHMoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgcGl4ZWxTaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgY29uc3Qgd29ybGQgPSBwaXhlbHNUb1NoYXBlV29ybGQoY2FudmFzLCB4LCB5KTtcbiAgYWN0b3IubW92ZVRvKHdvcmxkLngsIHdvcmxkLnkpO1xuICBhY3Rvci5zY2FsZSA9IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZShjYW52YXMsIHBpeGVsU2l6ZSk7XG4gIHJldHVybiBhY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpO1xufVxuXG5leHBvcnQgY29uc3QgYWN0b3JJblRvcERvd25TY2VuZSA9IChhY3RvcjogTmVvblNoYXBlQWN0b3IsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgKHsgLi4uYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKSwgeCwgeSwgc2l6ZSB9KTtcblxuZXhwb3J0IGNvbnN0IHNoYXBlTGFiZWwgPSAodGV4dDogc3RyaW5nLCBwb3NpdGlvbjogTmVvblNoYXBlTGFiZWxbXCJwb3NpdGlvblwiXSwgZm9udFNpemU6IG51bWJlciwgb2Zmc2V0ID0gNCk6IE5lb25TaGFwZUxhYmVsID0+XG4gICh7IHRleHQsIHBvc2l0aW9uLCBmb250U2l6ZSwgb2Zmc2V0LCBmb250RmFtaWx5OiBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsIGZvbnRXZWlnaHQ6IDcwMCB9KTtcbiIsICJpbXBvcnQge1xuICBOZW9uUHJvamVjdGlsZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uUHJvamVjdGlsZVNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHtcbiAgR3VuTGV2ZWwsXG4gIEd1bk1lbWJlcixcbiAgSW1wYWN0RWZmZWN0LFxuICBNdXp6bGVFZmZlY3QsXG4gIFByb2plY3RpbGVTaGFwZSxcbn0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5Qcm9qZWN0aWxlIHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdng6IG51bWJlcjtcbiAgdnk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGRhbWFnZTogbnVtYmVyO1xuICBwaWVyY2VSZW1haW5pbmc6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcjogc3RyaW5nO1xuICBjb3JlQ29sb3I6IHN0cmluZztcbiAgYXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhcGU6IFByb2plY3RpbGVTaGFwZTtcbiAgaW1wYWN0RWZmZWN0OiBJbXBhY3RFZmZlY3Q7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhY2VyOiBib29sZWFuO1xuICBrbm9ja2JhY2s6IG51bWJlcjtcbiAgaGl0Rmxhc2hTY2FsZTogbnVtYmVyO1xuICBoaXRFbmVteUlkczogU2V0PG51bWJlcj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuRWZmZWN0IHtcbiAga2luZDogXCJtdXp6bGVcIiB8IFwiaW1wYWN0XCIgfCBcImRlYXRoXCI7XG4gIHN0eWxlOiBNdXp6bGVFZmZlY3QgfCBJbXBhY3RFZmZlY3QgfCBcImRlYXRoQmxvb21cIjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlY29uZGFyeUNvbG9yOiBzdHJpbmc7XG4gIHJhZGl1czogbnVtYmVyO1xuICBleHBpcmVzQXQ6IG51bWJlcjtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgc2VlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1blRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY2hlZHVsZWRWb2xsZXkge1xuICBmaXJlc0F0OiBudW1iZXI7XG4gIGd1bjogR3VuTWVtYmVyO1xuICBsZXZlbDogR3VuTGV2ZWw7XG4gIGxhbmU6IG51bWJlcjtcbiAgb3JpZ2luczogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XG4gIHNjYWxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHdW5TaW11bGF0aW9uIHtcbiAgcmVhZG9ubHkgcHJvamVjdGlsZXM6IEd1blByb2plY3RpbGVbXSA9IFtdO1xuICByZWFkb25seSBlZmZlY3RzOiBHdW5FZmZlY3RbXSA9IFtdO1xuICBwcml2YXRlIHNjaGVkdWxlZFZvbGxleXM6IFNjaGVkdWxlZFZvbGxleVtdID0gW107XG4gIHByaXZhdGUgc2VxdWVuY2UgPSAwO1xuICBwcml2YXRlIHNob3RTZXF1ZW5jZSA9IDA7XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0aWxlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuZWZmZWN0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5sZW5ndGggPSAwO1xuICB9XG5cbiAgZmlyZShndW46IEd1bk1lbWJlciwgbGV2ZWw6IEd1bkxldmVsLCBsYW5lOiBudW1iZXIsIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdLCBub3c6IG51bWJlciwgc2NhbGUgPSAxKTogdm9pZCB7XG4gICAgZm9yIChsZXQgYnVyc3RJbmRleCA9IDA7IGJ1cnN0SW5kZXggPCBsZXZlbC5idXJzdENvdW50OyBidXJzdEluZGV4KyspIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5wdXNoKHtcbiAgICAgICAgZmlyZXNBdDogbm93ICsgYnVyc3RJbmRleCAqIGxldmVsLmJ1cnN0SW50ZXJ2YWxNcyxcbiAgICAgICAgZ3VuLCBsZXZlbCwgbGFuZSwgb3JpZ2luczogb3JpZ2lucy5tYXAob3JpZ2luID0+ICh7IC4uLm9yaWdpbiB9KSksIHNjYWxlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlyaW5nKG5vdzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyZWQgPSAwO1xuICAgIGNvbnN0IGR1ZSA9IHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5maWx0ZXIodm9sbGV5ID0+IHZvbGxleS5maXJlc0F0IDw9IG5vdyk7XG4gICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzID0gdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmZpbHRlcih2b2xsZXkgPT4gdm9sbGV5LmZpcmVzQXQgPiBub3cpO1xuICAgIGZvciAoY29uc3Qgdm9sbGV5IG9mIGR1ZSkge1xuICAgICAgdGhpcy5zcGF3blZvbGxleSh2b2xsZXksIG5vdyk7XG4gICAgICBmaXJlZCsrO1xuICAgIH1cbiAgICByZXR1cm4gZmlyZWQ7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0aWxlcyhcbiAgICBkZWx0YTogbnVtYmVyLFxuICAgIG5vdzogbnVtYmVyLFxuICAgIHRhcmdldHM6IHJlYWRvbmx5IEd1blRhcmdldFtdLFxuICAgIGJvdW5kczogeyB0b3A6IG51bWJlcjsgbGVmdD86IG51bWJlcjsgcmlnaHQ/OiBudW1iZXIgfSxcbiAgICBvbkhpdDogKHByb2plY3RpbGU6IEd1blByb2plY3RpbGUsIHRhcmdldDogR3VuVGFyZ2V0KSA9PiB2b2lkLFxuICApOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3RpbGUgb2YgWy4uLnRoaXMucHJvamVjdGlsZXNdKSB7XG4gICAgICBwcm9qZWN0aWxlLnggKz0gcHJvamVjdGlsZS52eCAqIGRlbHRhO1xuICAgICAgcHJvamVjdGlsZS55ICs9IHByb2plY3RpbGUudnkgKiBkZWx0YTtcbiAgICAgIGlmIChwcm9qZWN0aWxlLnkgPCBib3VuZHMudG9wIHx8IHByb2plY3RpbGUueCA8IChib3VuZHMubGVmdCA/PyAtSW5maW5pdHkpIHx8IHByb2plY3RpbGUueCA+IChib3VuZHMucmlnaHQgPz8gSW5maW5pdHkpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRzKSB7XG4gICAgICAgIGlmICh0YXJnZXQuZHlpbmcgfHwgcHJvamVjdGlsZS5sYW5lICE9PSB0YXJnZXQubGFuZSB8fCBwcm9qZWN0aWxlLmhpdEVuZW15SWRzLmhhcyh0YXJnZXQuaWQpKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZHggPSBwcm9qZWN0aWxlLnggLSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgZHkgPSBwcm9qZWN0aWxlLnkgLSB0YXJnZXQueTtcbiAgICAgICAgY29uc3QgaGl0UmFkaXVzID0gcHJvamVjdGlsZS5yYWRpdXMgKyB0YXJnZXQucmFkaXVzO1xuICAgICAgICBpZiAoZHggKiBkeCArIGR5ICogZHkgPiBoaXRSYWRpdXMgKiBoaXRSYWRpdXMpIGNvbnRpbnVlO1xuICAgICAgICBwcm9qZWN0aWxlLmhpdEVuZW15SWRzLmFkZCh0YXJnZXQuaWQpO1xuICAgICAgICB0YXJnZXQuaGVhbHRoIC09IHByb2plY3RpbGUuZGFtYWdlO1xuICAgICAgICB0YXJnZXQueSAtPSBwcm9qZWN0aWxlLmtub2NrYmFjaztcbiAgICAgICAgdGhpcy5lZmZlY3RzLnB1c2goe1xuICAgICAgICAgIGtpbmQ6IFwiaW1wYWN0XCIsXG4gICAgICAgICAgc3R5bGU6IHByb2plY3RpbGUuaW1wYWN0RWZmZWN0LFxuICAgICAgICAgIHg6IHByb2plY3RpbGUueCwgeTogcHJvamVjdGlsZS55LFxuICAgICAgICAgIGNvbG9yOiBwcm9qZWN0aWxlLmNvbG9yLCBzZWNvbmRhcnlDb2xvcjogcHJvamVjdGlsZS50cmFpbENvbG9yLFxuICAgICAgICAgIHJhZGl1czogcHJvamVjdGlsZS5yYWRpdXMgKiBwcm9qZWN0aWxlLmhpdEZsYXNoU2NhbGUgKiA0LFxuICAgICAgICAgIGV4cGlyZXNBdDogbm93ICsgcHJvamVjdGlsZS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIGR1cmF0aW9uOiBwcm9qZWN0aWxlLmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgc2VlZDogcHJvamVjdGlsZS5pZCxcbiAgICAgICAgfSk7XG4gICAgICAgIG9uSGl0KHByb2plY3RpbGUsIHRhcmdldCk7XG4gICAgICAgIGlmIChwcm9qZWN0aWxlLnBpZXJjZVJlbWFpbmluZyA+IDApIHByb2plY3RpbGUucGllcmNlUmVtYWluaW5nLS07XG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGUpO1xuICAgICAgICBpZiAoIXRoaXMucHJvamVjdGlsZXMuaW5jbHVkZXMocHJvamVjdGlsZSkpIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVmZmVjdCBvZiBbLi4udGhpcy5lZmZlY3RzXSkge1xuICAgICAgaWYgKGVmZmVjdC5leHBpcmVzQXQgPD0gbm93KSB0aGlzLmVmZmVjdHMuc3BsaWNlKHRoaXMuZWZmZWN0cy5pbmRleE9mKGVmZmVjdCksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByb2plY3RpbGVQcmltaXRpdmVzKCk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlsZXMuZmxhdE1hcChwcm9qZWN0aWxlID0+IG5ldyBOZW9uUHJvamVjdGlsZSh7XG4gICAgICB4OiBwcm9qZWN0aWxlLngsIHk6IHByb2plY3RpbGUueSxcbiAgICAgIHZlbG9jaXR5WDogcHJvamVjdGlsZS52eCwgdmVsb2NpdHlZOiBwcm9qZWN0aWxlLnZ5LFxuICAgICAgcmFkaXVzOiBwcm9qZWN0aWxlLnJhZGl1cyxcbiAgICAgIGxlbmd0aDogcHJvamVjdGlsZS5yYWRpdXMgKiBwcm9qZWN0aWxlLmFzcGVjdCxcbiAgICAgIHRyYWlsTGVuZ3RoOiBwcm9qZWN0aWxlLnRyYWlsTGVuZ3RoLFxuICAgICAgdHJhaWxXaWR0aDogTWF0aC5tYXgocHJvamVjdGlsZS5yYWRpdXMgKiBwcm9qZWN0aWxlLnRyYWlsV2lkdGhTY2FsZSwgMS4xKSxcbiAgICAgIGNvbG9yOiBwcm9qZWN0aWxlLmNvbG9yLFxuICAgICAgdHJhaWxDb2xvcjogcHJvamVjdGlsZS50cmFpbENvbG9yLFxuICAgICAgY29yZUNvbG9yOiBwcm9qZWN0aWxlLmNvcmVDb2xvcixcbiAgICAgIHNoYXBlOiBwcm9qZWN0aWxlLnNoYXBlIGFzIE5lb25Qcm9qZWN0aWxlU2hhcGUsXG4gICAgICBpbnRlbnNpdHk6IHByb2plY3RpbGUudmlzdWFsSW50ZW5zaXR5ICogKHByb2plY3RpbGUudHJhY2VyID8gMS4zNSA6IDEpLFxuICAgICAgZ2xvdzogcHJvamVjdGlsZS50cmFjZXIgPyAxLjQgOiAuNzIsXG4gICAgfSkucHJpbWl0aXZlcygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Bhd25Wb2xsZXkodm9sbGV5OiBTY2hlZHVsZWRWb2xsZXksIG5vdzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBndW4sIGxldmVsLCBsYW5lLCBvcmlnaW5zLCBzY2FsZSB9ID0gdm9sbGV5O1xuICAgIGZvciAoY29uc3Qgb3JpZ2luIG9mIG9yaWdpbnMpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgbGV2ZWwucHJvamVjdGlsZUNvdW50KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBhbmdsZURlZ3JlZXMgPSBjb3VudCA9PT0gMSA/IDAgOiAoaW5kZXggLyAoY291bnQgLSAxKSAtIC41KSAqIGxldmVsLnNwcmVhZERlZ3JlZXM7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gYW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBsZXZlbC5wcm9qZWN0aWxlU3BlZWQgKiBzY2FsZTtcbiAgICAgICAgdGhpcy5zaG90U2VxdWVuY2UrKztcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKHtcbiAgICAgICAgICBpZDogKyt0aGlzLnNlcXVlbmNlLCBsYW5lLFxuICAgICAgICAgIHg6IG9yaWdpbi54ICsgKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiBndW4udmlzdWFsSWRlbnRpdHkuaG9yaXpvbnRhbEppdHRlciAqIHNjYWxlLFxuICAgICAgICAgIHk6IG9yaWdpbi55LFxuICAgICAgICAgIHZ4OiBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZCxcbiAgICAgICAgICB2eTogLU1hdGguY29zKGFuZ2xlKSAqIHNwZWVkLFxuICAgICAgICAgIHJhZGl1czogbGV2ZWwucHJvamVjdGlsZVJhZGl1cyAqIHNjYWxlLFxuICAgICAgICAgIGRhbWFnZTogbGV2ZWwuZGFtYWdlLFxuICAgICAgICAgIHBpZXJjZVJlbWFpbmluZzogbGV2ZWwucGllcmNlLFxuICAgICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgICAgICB0cmFpbENvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICAgICAgY29yZUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkuY29yZUNvbG9yXSxcbiAgICAgICAgICBhc3BlY3Q6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQXNwZWN0LFxuICAgICAgICAgIHRyYWlsV2lkdGhTY2FsZTogZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsV2lkdGhTY2FsZSxcbiAgICAgICAgICB2aXN1YWxJbnRlbnNpdHk6IGd1bi52aXN1YWxJZGVudGl0eS52aXN1YWxJbnRlbnNpdHksXG4gICAgICAgICAgc2hhcGU6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlU2hhcGUsXG4gICAgICAgICAgaW1wYWN0RWZmZWN0OiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RWZmZWN0LFxuICAgICAgICAgIGltcGFjdER1cmF0aW9uTXM6IGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHRyYWlsTGVuZ3RoOiBsZXZlbC50cmFpbExlbmd0aCAqIHNjYWxlLFxuICAgICAgICAgIHRyYWNlcjogbGV2ZWwudHJhY2VyRXZlcnlOdGhTaG90ID4gMCAmJiB0aGlzLnNob3RTZXF1ZW5jZSAlIGxldmVsLnRyYWNlckV2ZXJ5TnRoU2hvdCA9PT0gMCxcbiAgICAgICAgICBrbm9ja2JhY2s6IGxldmVsLmtub2NrYmFjayAqIHNjYWxlLFxuICAgICAgICAgIGhpdEZsYXNoU2NhbGU6IGxldmVsLmhpdEZsYXNoU2NhbGUsXG4gICAgICAgICAgaGl0RW5lbXlJZHM6IG5ldyBTZXQoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgIGtpbmQ6IFwibXV6emxlXCIsIHN0eWxlOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRWZmZWN0LFxuICAgICAgeDogb3JpZ2lucy5yZWR1Y2UoKHN1bSwgb3JpZ2luKSA9PiBzdW0gKyBvcmlnaW4ueCwgMCkgLyBvcmlnaW5zLmxlbmd0aCxcbiAgICAgIHk6IG9yaWdpbnNbMF0/LnkgPz8gMCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICByYWRpdXM6IDEwICogbGV2ZWwubXV6emxlRmxhc2hTY2FsZSAqIHNjYWxlLFxuICAgICAgZXhwaXJlc0F0OiBub3cgKyBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIGR1cmF0aW9uOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIHNlZWQ6IHRoaXMuc2hvdFNlcXVlbmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGU6IEd1blByb2plY3RpbGUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdGlsZXMuaW5kZXhPZihwcm9qZWN0aWxlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkgdGhpcy5wcm9qZWN0aWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlTGFuZVJ1bm5lclNjZW5lLCBOZW9uU2hhcGVBY3RvciwgTmVvblNoYXBlRGlzcG9zYWwsIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciwgbmVvblBhbGV0dGUsIHR5cGUgTmVvblByaW1pdGl2ZSwgdHlwZSBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBndW5GYW1pbHksIG11bHRpcGxpZXJGYW1pbHksIG9yYkZhbWlseSwgdHlwZSBHdW5MZXZlbCwgdHlwZSBHdW5NZW1iZXIgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgYmluZFNxdWFkSW5wdXQgfSBmcm9tIFwiLi4vLi4vc3JjL2lucHV0XCI7XG5pbXBvcnQgeyBTcXVhZE1vZGVsIH0gZnJvbSBcIi4uLy4uL3NyYy9zcXVhZFwiO1xuaW1wb3J0IHsgQXV0b0FpbUNvbnRyb2xTdGF0ZSwgc2VsZWN0QXV0b0FpbU9mZnNldCB9IGZyb20gXCIuLi8uLi9zcmMvYXV0b0FpbVwiO1xuaW1wb3J0IHsgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgYXBwbHlQb3J0cmFpdFN0YWdlLCBwcm9qZWN0SGVsaWNvcHRlclNjZW5lIH0gZnJvbSBcIi4uLy4uL3NyYy92aWV3cG9ydFwiO1xuaW1wb3J0IHsgYWN0b3JJblRvcERvd25TY2VuZSwgc2hhcGVMYWJlbCwgc3dhcm1TaGFwZXMgfSBmcm9tIFwiLi4vLi4vc3JjL3NoYXBlVmlzdWFsc1wiO1xuaW1wb3J0IHsgR3VuU2ltdWxhdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvY29tYmF0L2d1blNpbXVsYXRpb25cIjtcblxuaW50ZXJmYWNlIEVuZW15IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGhpdEZsYXNoVW50aWw6IG51bWJlcjtcbiAgcm93SWQ6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFBpY2t1cCB7XG4gIGd1bklkOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGxhbmU6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG59XG5cbmludGVyZmFjZSBNdWx0aXBsaWVyUGlja3VwIHsgbGFuZTogbnVtYmVyOyB5OiBudW1iZXI7IGFjdG9yOiBOZW9uU2hhcGVBY3RvciB9XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KFwiI2dhbWUtY2FudmFzXCIpITtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZXJyb3JcIikhO1xuY29uc3QgZ3VuU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjZ3VuLXNlbGVjdFwiKSE7XG5jb25zdCBsZXZlbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI2xldmVsLXNlbGVjdFwiKSE7XG5jb25zdCB3ZWFwb25SZWFkb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjd2VhcG9uLXJlYWRvdXRcIikhO1xuY29uc3Qgc2NvcmVSZWFkb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjc2NvcmUtcmVhZG91dFwiKSE7XG5jb25zdCBzcGVjUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3NwZWMtcmVhZG91dFwiKSE7XG5jb25zdCBmb3JtYXRpb25TaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNmb3JtYXRpb24tc2l6ZVwiKSE7XG5jb25zdCBmb3JtYXRpb25Sb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjZm9ybWF0aW9uLXJvd3NcIikhO1xuY29uc3Qgc2hhcGVab29tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNzaGFwZS16b29tXCIpITtcbmNvbnN0IGdhbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZ2FtZVwiKSE7XG5hcHBseVBvcnRyYWl0U3RhZ2UoZ2FtZUVsZW1lbnQsIHsgYXNwZWN0V2lkdGg6IDksIGFzcGVjdEhlaWdodDogMTYgfSk7XG5cbnRyeSB7XG4gIGNvbnN0IHJlbmRlcmVyID0gYXdhaXQgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLmNyZWF0ZShjYW52YXMsIDQ1MCwgODAwKTtcbiAgY29uc3QgZ3VuczogUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPiA9IGd1bkZhbWlseS5tZW1iZXJzO1xuICBjb25zdCBvcmIgPSBvcmJGYW1pbHkubWVtYmVycy5iYXNpY09yYjtcbiAgY29uc3QgZW5lbWllczogRW5lbXlbXSA9IFtdO1xuICBjb25zdCBndW5TaW11bGF0aW9uID0gbmV3IEd1blNpbXVsYXRpb24oKTtcbiAgY29uc3QgcHJvamVjdGlsZXMgPSBndW5TaW11bGF0aW9uLnByb2plY3RpbGVzO1xuICBjb25zdCBwaWNrdXBzOiBQaWNrdXBbXSA9IFtdO1xuICBjb25zdCBlZmZlY3RzID0gZ3VuU2ltdWxhdGlvbi5lZmZlY3RzO1xuICBjb25zdCBtdWx0aXBsaWVyczogTXVsdGlwbGllclBpY2t1cFtdID0gW107XG4gIGNvbnN0IHNxdWFkID0gbmV3IFNxdWFkTW9kZWwoKTtcbiAgbGV0IHBsYXllckxhbmUgPSAwO1xuICBjb25zdCBhaW1Db250cm9sID0gbmV3IEF1dG9BaW1Db250cm9sU3RhdGUoKTtcbiAgbGV0IGVxdWlwcGVkR3VuSWQgPSBcInB1bHNlUGlzdG9sXCI7XG4gIGxldCBlcXVpcHBlZExldmVsID0gMTtcbiAgbGV0IGNvb2xkb3duID0gMDtcbiAgbGV0IHNob3RTZXF1ZW5jZSA9IDA7XG4gIGxldCBlbnRpdHlTZXF1ZW5jZSA9IDA7XG4gIGxldCBraWxscyA9IDA7XG4gIGxldCBsYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgbGV0IHJlY29pbCA9IDA7XG4gIGNvbnN0IHBzZXVkb1JhbmRvbSA9IChzZWVkOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTggKyA3OC4yMzMpICogNDM3NTguNTQ1MztcbiAgICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBsYW5lWCA9IChsYW5lOiBudW1iZXIpID0+IGNhbnZhcy53aWR0aCAqIChsYW5lID09PSAwID8gMC4zMiA6IDAuNjgpO1xuICBjb25zdCBwbGF5ZXJZID0gKCkgPT4gY2FudmFzLmhlaWdodCAqIDAuODI7XG4gIGNvbnN0IHNjYWxlID0gKCkgPT4gMTtcblxuICBmb3IgKGNvbnN0IFtpZCwgZ3VuXSBvZiBPYmplY3QuZW50cmllcyhndW5zKSkge1xuICAgIGd1blNlbGVjdC5hZGQobmV3IE9wdGlvbihndW4ubGFiZWwsIGlkKSk7XG4gIH1cbiAgZ3VuU2VsZWN0LnZhbHVlID0gZXF1aXBwZWRHdW5JZDtcblxuICBjb25zdCBzZWxlY3RlZExldmVsID0gKCk6IEd1bkxldmVsID0+IHtcbiAgICBjb25zdCBsZXZlbHMgPSBndW5zW2VxdWlwcGVkR3VuSWRdLmxldmVscztcbiAgICByZXR1cm4gbGV2ZWxzLmZpbmQobGV2ZWwgPT4gbGV2ZWwubGV2ZWwgPT09IGVxdWlwcGVkTGV2ZWwpID8/IGxldmVsc1swXTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVSZWFkb3V0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGd1biA9IGd1bnNbZXF1aXBwZWRHdW5JZF07XG4gICAgY29uc3QgbGV2ZWwgPSBzZWxlY3RlZExldmVsKCk7XG4gICAgd2VhcG9uUmVhZG91dC50ZXh0Q29udGVudCA9IGAke2d1bi5sYWJlbH0gXHUwMEI3IEwke2xldmVsLmxldmVsfWA7XG4gICAgc2NvcmVSZWFkb3V0LnRleHRDb250ZW50ID0gYEtpbGxzICR7a2lsbHN9YDtcbiAgICBzcGVjUmVhZG91dC5pbm5lckhUTUwgPSBbXG4gICAgICBbXCJQYXR0ZXJuXCIsIGd1bi5zaG90UGF0dGVybl0sXG4gICAgICBbXCJGaXJlIHJhdGVcIiwgYCR7bGV2ZWwuZmlyZVJhdGVQZXJTZWNvbmR9L3NgXSxcbiAgICAgIFtcIkRhbWFnZVwiLCBTdHJpbmcobGV2ZWwuZGFtYWdlKV0sXG4gICAgICBbXCJTcGVlZFwiLCBTdHJpbmcobGV2ZWwucHJvamVjdGlsZVNwZWVkKV0sXG4gICAgICBbXCJSYWRpdXNcIiwgU3RyaW5nKGxldmVsLnByb2plY3RpbGVSYWRpdXMpXSxcbiAgICAgIFtcIkJ1cnN0XCIsIFN0cmluZyhsZXZlbC5idXJzdENvdW50KV0sXG4gICAgICBbXCJQaWVyY2VcIiwgU3RyaW5nKGxldmVsLnBpZXJjZSldLFxuICAgICAgW1wiRW5lbXkgSFBcIiwgU3RyaW5nKG9yYi5oZWFsdGgpXSxcbiAgICAgIFtcIkVuZW15IHNwZWVkXCIsIFN0cmluZyhvcmIuc3BlZWQpXSxcbiAgICBdLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYDxkdD4ke25hbWV9PC9kdD48ZGQ+JHt2YWx1ZX08L2RkPmApLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgY29uc3QgZXF1aXAgPSAoZ3VuSWQ6IHN0cmluZywgbGV2ZWw6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGVxdWlwcGVkR3VuSWQgPSBndW5JZDtcbiAgICBlcXVpcHBlZExldmVsID0gbGV2ZWw7XG4gICAgY29vbGRvd24gPSAwO1xuICAgIGd1blNlbGVjdC52YWx1ZSA9IGd1bklkO1xuICAgIGxldmVsU2VsZWN0LnZhbHVlID0gU3RyaW5nKGxldmVsKTtcbiAgICB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5KFwiUGlja3VwXCIpO1xuICAgIHVwZGF0ZVJlYWRvdXQoKTtcbiAgfTtcblxuICBzcXVhZC54ID0gbGFuZVgoMCk7XG4gIHNxdWFkLnRhcmdldFggPSBsYW5lWCgwKTtcblxuICBjb25zdCBzcGF3bkVuZW15ID0gKGxhbmU6IG51bWJlciwgeCA9IGxhbmVYKGxhbmUpLCB5ID0gMTA1ICogc2NhbGUoKSwgcm93SWQgPSArK2VudGl0eVNlcXVlbmNlKTogdm9pZCA9PiB7XG4gICAgZW5lbWllcy5wdXNoKHsgaWQ6ICsrZW50aXR5U2VxdWVuY2UsIGxhbmUsIHgsIHksIGhlYWx0aDogb3JiLmhlYWx0aCwgaGl0Rmxhc2hVbnRpbDogMCwgcm93SWQsIGFjdG9yOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMuZW5lbXkgfSksIGR5aW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBjb25zdCBzcGF3blBpY2t1cCA9IChsYW5lOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBwaWNrdXBzLnB1c2goeyBndW5JZDogZ3VuU2VsZWN0LnZhbHVlLCBsZXZlbDogTnVtYmVyKGxldmVsU2VsZWN0LnZhbHVlKSwgbGFuZSwgeTogMTM1ICogc2NhbGUoKSwgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5ndW5QaWNrdXAgfSkgfSk7XG4gIH07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQnV0dG9uRWxlbWVudD4oXCJbZGF0YS1zcGF3bi1lbmVteV1cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3Bhd25FbmVteShOdW1iZXIoYnV0dG9uLmRhdGFzZXQuc3Bhd25FbmVteSkpKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tcGlja3VwXVwiKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzcGF3blBpY2t1cChOdW1iZXIoYnV0dG9uLmRhdGFzZXQuc3Bhd25QaWNrdXApKSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIltkYXRhLXNwYXduLWZvcm1hdGlvbl1cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgbGFuZSA9IE51bWJlcihidXR0b24uZGF0YXNldC5zcGF3bkZvcm1hdGlvbik7XG4gICAgICBjb25zdCBjb3VudCA9IE51bWJlcihmb3JtYXRpb25TaXplLnZhbHVlKTtcbiAgICAgIGNvbnN0IHJvd3MgPSBOdW1iZXIoZm9ybWF0aW9uUm93cy52YWx1ZSk7XG4gICAgICBjb25zdCBwZXJSb3cgPSBNYXRoLmNlaWwoY291bnQgLyByb3dzKTtcbiAgICAgIGxldCByZW1haW5pbmcgPSBjb3VudDtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgIGNvbnN0IHJvd0lkID0gKytlbnRpdHlTZXF1ZW5jZTtcbiAgICAgICAgY29uc3Qgcm93Q291bnQgPSBNYXRoLm1pbihwZXJSb3csIHJlbWFpbmluZyk7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHJvd0NvdW50OyBjb2x1bW4rKykge1xuICAgICAgICAgIHNwYXduRW5lbXkobGFuZSwgbGFuZVgobGFuZSkgKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIDE1ICogc2NhbGUoKSwgKDEwNSAtIHJvdyAqIDI0KSAqIHNjYWxlKCksIHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICByZW1haW5pbmcgLT0gcm93Q291bnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxCdXR0b25FbGVtZW50PihcIltkYXRhLXNwYXduLW11bHRpcGxpZXJdXCIpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG11bHRpcGxpZXJzLnB1c2goeyBsYW5lOiBOdW1iZXIoYnV0dG9uLmRhdGFzZXQuc3Bhd25NdWx0aXBsaWVyKSwgeTogMTM1ICogc2NhbGUoKSwgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5tdWx0aXBsaWVyIH0pIH0pKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI3NwYXduLXdhdmVcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3Bhd25FbmVteSgwKTtcbiAgICBzcGF3bkVuZW15KDEpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc3Bhd25FbmVteSgwKSwgNDUwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNwYXduRW5lbXkoMSksIDcwMCk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjbGVhci1zdGFnZVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBlbmVtaWVzLmxlbmd0aCA9IHByb2plY3RpbGVzLmxlbmd0aCA9IHBpY2t1cHMubGVuZ3RoID0gZWZmZWN0cy5sZW5ndGggPSBtdWx0aXBsaWVycy5sZW5ndGggPSAwO1xuICB9KTtcblxuICBiaW5kU3F1YWRJbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNnYW1lXCIpISwgXCIjam95c3RpY2tcIiwge1xuICAgIGxhbmU6ICgpID0+IHNxdWFkLmxhbmUsXG4gICAgc2V0TGFuZTogbGFuZSA9PiB7XG4gICAgICBwbGF5ZXJMYW5lID0gbGFuZTtcbiAgICAgIHNxdWFkLnNldExhbmUobGFuZSwgbGFuZVgsIHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgIGFpbUNvbnRyb2wubGFuZVNlbGVjdGVkKCk7XG4gICAgfSxcbiAgICBzZXRBaW06IHZhbHVlID0+IHtcbiAgICAgIHNxdWFkLnNldEFpbSh2YWx1ZSwgY2FudmFzLndpZHRoICogLjIyLCBsYW5lWCk7XG4gICAgICBhaW1Db250cm9sLmFpbUNoYW5nZWQoKTtcbiAgICB9LFxuICAgIHJlbGVhc2VBaW06ICgpID0+IHsgYWltQ29udHJvbC5haW1SZWxlYXNlZCgpOyB9LFxuICB9KTtcblxuICBjb25zdCBmaXJlVm9sbGV5ID0gKGd1bjogR3VuTWVtYmVyLCBsZXZlbDogR3VuTGV2ZWwpOiB2b2lkID0+IHtcbiAgICBndW5TaW11bGF0aW9uLmZpcmUoZ3VuLCBsZXZlbCwgcGxheWVyTGFuZSwgc3F1YWQucG9pbnRzKHBsYXllclkoKSwgc2NhbGUoKSkubWFwKHBvaW50ID0+ICh7XG4gICAgICB4OiBwb2ludC54LCB5OiBwbGF5ZXJZKCkgLSAyMiAqIHNjYWxlKCksXG4gICAgfSkpLCBwZXJmb3JtYW5jZS5ub3coKSwgc2NhbGUoKSk7XG4gICAgcmVjb2lsID0gbGV2ZWwubXV6emxlRmxhc2hTY2FsZSAqIDcgKiBzY2FsZSgpO1xuICB9O1xuXG4gIGNvbnN0IGZpcmUgPSAoZ3VuOiBHdW5NZW1iZXIsIGxldmVsOiBHdW5MZXZlbCk6IHZvaWQgPT4ge1xuICAgIGZpcmVWb2xsZXkoZ3VuLCBsZXZlbCk7XG4gIH07XG5cbiAgY29uc3QgaGl0RW5lbXkgPSAocHJvamVjdGlsZTogdHlwZW9mIHByb2plY3RpbGVzW251bWJlcl0sIGVuZW15OiBFbmVteSwgbm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBlbmVteS5hY3Rvci5pbXBhY3QoeyBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LCBtYWduaXR1ZGU6IChwcm9qZWN0aWxlLmRhbWFnZSArIHByb2plY3RpbGUua25vY2tiYWNrICogLjA2KSAvIG9yYi5pbXBhY3RSZXNpc3RhbmNlIH0pO1xuICAgIGVuZW15LmhpdEZsYXNoVW50aWwgPSBub3cgKyBvcmIuaGl0Rmxhc2hEdXJhdGlvbk1zO1xuICAgIHdpbmRvdy5nYW1lQXVkaW8/LnBsYXkoXCJIaXRcIik7XG4gICAgaWYgKGVuZW15LmhlYWx0aCA8PSAwKSB7XG4gICAgICBlZmZlY3RzLnB1c2goe1xuICAgICAgICBraW5kOiBcImRlYXRoXCIsXG4gICAgICAgIHN0eWxlOiBcImRlYXRoQmxvb21cIixcbiAgICAgICAgeDogZW5lbXkueCwgeTogZW5lbXkueSwgY29sb3I6IG5lb25QYWxldHRlW29yYi5iYXNlQ29sb3JdLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGVbb3JiLnJpbUNvbG9yXSxcbiAgICAgICAgcmFkaXVzOiBvcmIucmFkaXVzICogb3JiLmRlYXRoRmxhc2hTY2FsZSAqIHNjYWxlKCksXG4gICAgICAgIGV4cGlyZXNBdDogbm93ICsgb3JiLmhpdEZsYXNoRHVyYXRpb25NcyAqIDIsXG4gICAgICAgIGR1cmF0aW9uOiBvcmIuaGl0Rmxhc2hEdXJhdGlvbk1zICogMixcbiAgICAgICAgc2VlZDogZW5lbXkuaWQsXG4gICAgICB9KTtcbiAgICAgIGVuZW15LmR5aW5nID0gdHJ1ZTtcbiAgICAgIGVuZW15LmFjdG9yLmV4cGxvZGVNYWduaXR1ZGUgPSBvcmIuZXhwbG9zaW9uTWFnbml0dWRlO1xuICAgICAgZW5lbXkuYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgIGtpbGxzICs9IDE7XG4gICAgICB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5KFwiRW5lbXlEZXN0cm95ZWRcIik7XG4gICAgICB1cGRhdGVSZWFkb3V0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0gTWF0aC5taW4oKG5vdyAtIGxhc3RGcmFtZSkgLyAxMDAwLCAwLjA1KTtcbiAgICBsYXN0RnJhbWUgPSBub3c7XG4gICAgY29uc3QgZ3VuID0gZ3Vuc1tlcXVpcHBlZEd1bklkXTtcbiAgICBjb25zdCBsZXZlbCA9IHNlbGVjdGVkTGV2ZWwoKTtcbiAgICBjb29sZG93biAtPSBkZWx0YTtcbiAgICBpZiAoY29vbGRvd24gPD0gMCkge1xuICAgICAgZmlyZShndW4sIGxldmVsKTtcbiAgICAgIGNvb2xkb3duICs9IDEgLyBsZXZlbC5maXJlUmF0ZVBlclNlY29uZDtcbiAgICB9XG4gICAgaWYgKGd1blNpbXVsYXRpb24udXBkYXRlRmlyaW5nKG5vdykgPiAwKSB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5Um90YXRlZChcIlByaW1hcnlcIiwgMyk7XG4gICAgcmVjb2lsICo9IE1hdGgucG93KDAuMDAxLCBkZWx0YSk7XG4gICAgaWYgKCFhaW1Db250cm9sLm1hbnVhbCkge1xuICAgICAgY29uc3QgbGFuZUVuZW1pZXMgPSBlbmVtaWVzLmZpbHRlcihlbmVteSA9PiBlbmVteS5sYW5lID09PSBzcXVhZC5sYW5lICYmICFlbmVteS5keWluZyk7XG4gICAgICBjb25zdCBjb2xPZmZzZXRzID0gc3F1YWQuZnJvbnRSb3dDb2x1bW5PZmZzZXRzKHNjYWxlKCkpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChsYW5lRW5lbWllcywgbGFuZVgoc3F1YWQubGFuZSksIGNvbE9mZnNldHMsIHNxdWFkLmFpbU9mZnNldCk7XG4gICAgICBzcXVhZC5hdXRvQWltKG9mZnNldCwgY2FudmFzLndpZHRoICogLjIyLCBsYW5lWCk7XG4gICAgfVxuICAgIHNxdWFkLnVwZGF0ZShkZWx0YSk7XG4gICAgZ2FtZUVsZW1lbnQuZGF0YXNldC5zcXVhZExhbmUgPSBTdHJpbmcoc3F1YWQubGFuZSk7XG4gICAgZ2FtZUVsZW1lbnQuZGF0YXNldC5zcXVhZEFpbSA9IHNxdWFkLmFpbU9mZnNldC50b0ZpeGVkKDIpO1xuXG4gICAgZ3VuU2ltdWxhdGlvbi51cGRhdGVQcm9qZWN0aWxlcyhkZWx0YSwgbm93LCBlbmVtaWVzLm1hcChlbmVteSA9PiBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICByYWRpdXM6IG9yYi5yYWRpdXMgKiBzY2FsZSgpLFxuICAgIH0pKSwgeyB0b3A6IC00MCAqIHNjYWxlKCksIGxlZnQ6IC00MCwgcmlnaHQ6IGNhbnZhcy53aWR0aCArIDQwIH0sXG4gICAgKHByb2plY3RpbGUsIHRhcmdldCkgPT4gaGl0RW5lbXkocHJvamVjdGlsZSwgdGFyZ2V0IGFzIHVua25vd24gYXMgRW5lbXksIG5vdykpO1xuXG4gICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4uZW5lbWllc10pIHtcbiAgICAgIGVuZW15LmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBlbmVteS55ICs9IG9yYi5zcGVlZCAqIHNjYWxlKCkgKiBkZWx0YSAtIGVuZW15LmFjdG9yLnkgKiBjYW52YXMuaGVpZ2h0IC8gMi41O1xuICAgICAgZW5lbXkuYWN0b3IubW92ZVRvKDAsIDApO1xuICAgICAgaWYgKGVuZW15LmR5aW5nICYmIGVuZW15LmFjdG9yLmRpc3Bvc2VkKSB7IGVuZW1pZXMuc3BsaWNlKGVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpOyBjb250aW51ZTsgfVxuICAgICAgaWYgKCFlbmVteS5keWluZyAmJiBlbmVteS55ID49IHBsYXllclkoKSkgZW5lbWllcy5zcGxpY2UoZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi5waWNrdXBzXSkge1xuICAgICAgcGlja3VwLmFjdG9yLnVwZGF0ZShkZWx0YSk7IHBpY2t1cC55ICs9IDYyICogc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHBsYXllclkoKSAtIDEyICogc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gcGxheWVyTGFuZSkge1xuICAgICAgICBlcXVpcChwaWNrdXAuZ3VuSWQsIHBpY2t1cC5sZXZlbCk7XG4gICAgICAgIHBpY2t1cHMuc3BsaWNlKHBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiBjYW52YXMuaGVpZ2h0ICsgMzAgKiBzY2FsZSgpKSB7XG4gICAgICAgIHBpY2t1cHMuc3BsaWNlKHBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLm11bHRpcGxpZXJzXSkge1xuICAgICAgcGlja3VwLmFjdG9yLnVwZGF0ZShkZWx0YSk7IHBpY2t1cC55ICs9IDYyICogc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHBsYXllclkoKSAtIDEyICogc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gcGxheWVyTGFuZSkge1xuICAgICAgICBzcXVhZC5hZGQobXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZS5zcXVhZEFkZGVkKTtcbiAgICAgICAgbXVsdGlwbGllcnMuc3BsaWNlKG11bHRpcGxpZXJzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gY2FudmFzLmhlaWdodCkgbXVsdGlwbGllcnMuc3BsaWNlKG11bHRpcGxpZXJzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYXcgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzID0gc2NhbGUoKTtcbiAgICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXG4gICAgICAuLi4oY3JlYXRlTGFuZVJ1bm5lclNjZW5lKHsgc2NlbmVJZDogXCJuZW9uSGFsbFwiLCB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsIHRpbWVNczogbm93IH0pLnByaW1pdGl2ZXMgPz8gW10pLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBzcXVhZC5wb2ludHMocGxheWVyWSgpICsgcmVjb2lsLCBzKSkgdm9pZCBwb2ludDtcbiAgICBwcmltaXRpdmVzLnB1c2goLi4uZ3VuU2ltdWxhdGlvbi5wcm9qZWN0aWxlUHJpbWl0aXZlcygpKTtcbiAgICBpZiAoZmFsc2UpIGZvciAoY29uc3QgZW5lbXkgb2YgZW5lbWllcykge1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgeDogZW5lbXkueCArIG9yYi5yYWRpdXMgKiAuMzUgKiBzLFxuICAgICAgICB5OiBlbmVteS55ICsgb3JiLnJhZGl1cyAqIDEuMTIgKiBzLFxuICAgICAgICB3aWR0aDogb3JiLnJhZGl1cyAqIC45ICogcyxcbiAgICAgICAgaGVpZ2h0OiBvcmIucmFkaXVzICogLjI4ICogcyxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW29yYi5zaGFkb3dDb2xvcl0sXG4gICAgICAgIGdsb3c6IC4xOCxcbiAgICAgICAgaW50ZW5zaXR5OiAuMyxcbiAgICAgICAgc2hhcGU6IFwiY2lyY2xlXCIsXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHg6IGVuZW15LngsIHk6IGVuZW15LnksIHdpZHRoOiBvcmIucmFkaXVzICogcyxcbiAgICAgICAgY29sb3I6IGVuZW15LmhpdEZsYXNoVW50aWwgPiBub3cgPyBuZW9uUGFsZXR0ZS53aGl0ZUhvdCA6IG5lb25QYWxldHRlW29yYi5yaW1Db2xvcl0sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZVtvcmIuYmFzZUNvbG9yXSxcbiAgICAgICAgZ2xvdzogb3JiLmdsb3csXG4gICAgICAgIHRleHR1cmU6IG9yYi5zdXJmYWNlVGV4dHVyZSxcbiAgICAgICAgcmltSW50ZW5zaXR5OiBvcmIucmltSW50ZW5zaXR5LFxuICAgICAgICBzaGFkb3dTdHJlbmd0aDogb3JiLnNoYWRvd1N0cmVuZ3RoLFxuICAgICAgICBpbnRlbnNpdHk6IGVuZW15LmhpdEZsYXNoVW50aWwgPiBub3cgPyAxLjU1IDogMSxcbiAgICAgICAgc2hhcGU6IFwib3JiXCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZhbHNlKSBmb3IgKGNvbnN0IHBpY2t1cCBvZiBtdWx0aXBsaWVycykge1xuICAgICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgICBjb25zdCBwQ29sb3IgPSBuZW9uUGFsZXR0ZVtzcGVjLnBpY2t1cENvbG9yXTtcbiAgICAgIGNvbnN0IHRDb2xvciA9IG5lb25QYWxldHRlW3NwZWMuY29yZUNvbG9yXTtcbiAgICAgIGNvbnN0IHB4ID0gbGFuZVgocGlja3VwLmxhbmUpO1xuICAgICAgLy8gV29iYmxlICYgc2NhbGUgcHVsc2UgbWF0Y2hpbmcgd2VhcG9uIHBpY2t1cCBzdHlsZVxuICAgICAgY29uc3Qgd29iYmxlID0gTWF0aC5zaW4obm93IC8gNDIwICsgcGlja3VwLnkgKiAwLjA3KSAqIDQuNSAqIHM7XG4gICAgICBjb25zdCB3eCA9IHB4ICsgd29iYmxlO1xuICAgICAgY29uc3QgcHVsc2UgPSAxICsgTWF0aC5zaW4obm93IC8gNjAwICsgcGlja3VwLnkgKiAwLjA1KSAqIDAuMDg7XG5cbiAgICAgIC8vIE91dGVyIGJsb29tIGhhbG8gKGRpZmZlcmVudCBzaXplL2dsb3cgZm9yIGRpc3RpbmN0aW9uKVxuICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3gsIHk6IHBpY2t1cC55LCB3aWR0aDogMjggKiBzICogcHVsc2UsIGNvbG9yOiBwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0Q29sb3IsIGdsb3c6IC45NSwgaW50ZW5zaXR5OiAuMjUsIHNoYXBlOiBcImNpcmNsZVwiIH0pO1xuICAgICAgLy8gUGVudGFnb24gZ2xhc3N5IHBhbmVsIChuZW9uIGVkZ2VzKVxuICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3gsIHk6IHBpY2t1cC55LCB3aWR0aDogMTkgKiBzICogcHVsc2UsIGNvbG9yOiBwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0Q29sb3IsIGdsb3c6IC45LCBpbnRlbnNpdHk6IDEuMSwgc2hhcGU6IFwicGVudGFnb25cIiB9KTtcblxuICAgICAgLy8gSW5uZXIgZ2x5cGggZm9yIFwiKzFcIiAodXNpbmcgc2ltcGxlIGxpbmVzL3NwYXJrIGZvciArIGFuZCBib2x0L2xpbmUgZm9yIDEpXG4gICAgICAvLyBEcmF3IHRoZSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBiYXJzIG9mIFwiK1wiXG4gICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCAtIDMuNSAqIHMsIHk6IHBpY2t1cC55LCB3aWR0aDogMS4wICogcywgaGVpZ2h0OiA2LjAgKiBzLCBjb2xvcjogcENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdENvbG9yLCBnbG93OiAuNiwgaW50ZW5zaXR5OiAxLjE1LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCAtIDMuNSAqIHMsIHk6IHBpY2t1cC55LCB3aWR0aDogNi4wICogcywgaGVpZ2h0OiAxLjAgKiBzLCBjb2xvcjogcENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdENvbG9yLCBnbG93OiAuNiwgaW50ZW5zaXR5OiAxLjE1LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICAvLyBEcmF3IHRoZSBcIjFcIiAodGhpY2sgdmVydGljYWwgbGluZSB3aXRoIGEgc21hbGwgbm90Y2gpXG4gICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCArIDIuNSAqIHMsIHk6IHBpY2t1cC55LCB3aWR0aDogMS40ICogcywgaGVpZ2h0OiA3LjAgKiBzLCBjb2xvcjogcENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdENvbG9yLCBnbG93OiAuNzUsIGludGVuc2l0eTogMS4yLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCArIDEuMiAqIHMsIHk6IHBpY2t1cC55IC0gMi41ICogcywgd2lkdGg6IDEuNSAqIHMsIGhlaWdodDogMS4wICogcywgY29sb3I6IHBDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHRDb2xvciwgZ2xvdzogLjYsIGludGVuc2l0eTogMS4xNSwgc2hhcGU6IFwiYm9sdFwiIH0pO1xuXG4gICAgICAvLyBTcGFya2xlIHBhcnRpY2xlc1xuICAgICAgZm9yIChsZXQgc3AgPSAwOyBzcCA8IDM7IHNwKyspIHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBub3cgLyA5MDAgKyBzcCAqIDIuMDkgKyBwaWNrdXAueTtcbiAgICAgICAgY29uc3QgZGlzdCA9ICgxMCArIHNwICogMy41KSAqIHMgKiBwdWxzZTtcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggKyBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0LCB5OiBwaWNrdXAueSArIE1hdGguc2luKGFuZ2xlKSAqIGRpc3QgKiAwLjcsIHdpZHRoOiAxLjQgKiBzLCBjb2xvcjogcENvbG9yLCBnbG93OiAuOTUsIGludGVuc2l0eTogLjYgKyBNYXRoLnNpbihub3cgLyAzMDAgKyBzcCkgKiAuMjUsIHNoYXBlOiBcImNpcmNsZVwiIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmFsc2UpIGZvciAoY29uc3QgcGlja3VwIG9mIHBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGd1biA9IGd1bnNbcGlja3VwLmd1bklkXTtcbiAgICAgIGNvbnN0IHBpY2t1cENvbG9yID0gbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl07XG4gICAgICBjb25zdCB0cmFpbENvbG9yID0gbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdO1xuICAgICAgY29uc3QgcHggPSBsYW5lWChwaWNrdXAubGFuZSk7XG4gICAgICAvLyBXb2JibGU6IGdlbnRsZSBcdTAwQjExNVx1MDBCMCByb2NraW5nIFx1MjE5MiBob3Jpem9udGFsIG9mZnNldFxuICAgICAgY29uc3Qgd29iYmxlID0gTWF0aC5zaW4obm93IC8gNDIwICsgcGlja3VwLnkgKiAwLjA3KSAqIDQuNSAqIHM7XG4gICAgICBjb25zdCB3eCA9IHB4ICsgd29iYmxlO1xuICAgICAgLy8gU2NhbGUgcHVsc2VcbiAgICAgIGNvbnN0IHB1bHNlID0gMSArIE1hdGguc2luKG5vdyAvIDYwMCArIHBpY2t1cC55ICogMC4wNSkgKiAwLjA4O1xuICAgICAgLy8gT3V0ZXIgYmxvb20gaGFsb1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3gsIHk6IHBpY2t1cC55LCB3aWR0aDogMjggKiBzICogcHVsc2UsIGNvbG9yOiBwaWNrdXBDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHRyYWlsQ29sb3IsIGdsb3c6IC45LCBpbnRlbnNpdHk6IC4yMiwgc2hhcGU6IFwiY2lyY2xlXCIgfSk7XG4gICAgICAvLyBEaWFtb25kIGdsYXNzeSBwYW5lbCAobmVvbiBlZGdlcylcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IHd4LCB5OiBwaWNrdXAueSwgd2lkdGg6IDE4ICogcyAqIHB1bHNlLCBjb2xvcjogcGlja3VwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0cmFpbENvbG9yLCBnbG93OiAuODUsIGludGVuc2l0eTogMS4wNSwgc2hhcGU6IFwiZGlhbW9uZFwiIH0pO1xuICAgICAgLy8gSW5uZXIgd2VhcG9uIGljb24gKHNpbGhvdWV0dGUgdmFyaWVzIHBlciBwcm9qZWN0aWxlIHNoYXBlKVxuICAgICAgY29uc3QgaWNvblNoYXBlID0gZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVTaGFwZTtcbiAgICAgIGlmIChpY29uU2hhcGUgPT09IFwibmVlZGxlXCIpIHtcbiAgICAgICAgZm9yIChsZXQgbiA9IC0xOyBuIDw9IDE7IG4rKykgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggKyBuICogMy4yICogcywgeTogcGlja3VwLnksIHdpZHRoOiAxLjIgKiBzLCBoZWlnaHQ6IDggKiBzLCBjb2xvcjogcGlja3VwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0cmFpbENvbG9yLCBnbG93OiAuNiwgaW50ZW5zaXR5OiAxLjEsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvblNoYXBlID09PSBcInNsdWdcIikge1xuICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCwgeTogcGlja3VwLnksIHdpZHRoOiAzLjUgKiBzLCBoZWlnaHQ6IDkgKiBzLCBjb2xvcjogcGlja3VwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0cmFpbENvbG9yLCBnbG93OiAuNywgaW50ZW5zaXR5OiAxLjE1LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICB9IGVsc2UgaWYgKGljb25TaGFwZSA9PT0gXCJzcGxpdEJvbHRcIikge1xuICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCAtIDIuNSAqIHMsIHk6IHBpY2t1cC55IC0gMSAqIHMsIHdpZHRoOiAxLjUgKiBzLCBoZWlnaHQ6IDggKiBzLCBjb2xvcjogcGlja3VwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0cmFpbENvbG9yLCBnbG93OiAuNiwgaW50ZW5zaXR5OiAxLjEsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggKyAyLjUgKiBzLCB5OiBwaWNrdXAueSAtIDEgKiBzLCB3aWR0aDogMS41ICogcywgaGVpZ2h0OiA4ICogcywgY29sb3I6IHBpY2t1cENvbG9yLCBzZWNvbmRhcnlDb2xvcjogdHJhaWxDb2xvciwgZ2xvdzogLjYsIGludGVuc2l0eTogMS4xLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiB3eCwgeTogcGlja3VwLnkgLSAxICogcywgd2lkdGg6IDIgKiBzLCBoZWlnaHQ6IDkgKiBzLCBjb2xvcjogcGlja3VwQ29sb3IsIHNlY29uZGFyeUNvbG9yOiB0cmFpbENvbG9yLCBnbG93OiAuNjUsIGludGVuc2l0eTogMS4xLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICB9XG4gICAgICAvLyBTcGFya2xlIHBhcnRpY2xlc1xuICAgICAgZm9yIChsZXQgc3AgPSAwOyBzcCA8IDM7IHNwKyspIHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBub3cgLyA5MDAgKyBzcCAqIDIuMDkgKyBwaWNrdXAueTtcbiAgICAgICAgY29uc3QgZGlzdCA9ICg5ICsgc3AgKiAzKSAqIHMgKiBwdWxzZTtcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogd3ggKyBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0LCB5OiBwaWNrdXAueSArIE1hdGguc2luKGFuZ2xlKSAqIGRpc3QgKiAwLjcsIHdpZHRoOiAxLjQgKiBzLCBjb2xvcjogcGlja3VwQ29sb3IsIGdsb3c6IC45LCBpbnRlbnNpdHk6IC41NSArIE1hdGguc2luKG5vdyAvIDMwMCArIHNwKSAqIC4yNSwgc2hhcGU6IFwiY2lyY2xlXCIgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgZWZmZWN0IG9mIGVmZmVjdHMpIHtcbiAgICAgIGNvbnN0IGxpZmUgPSBNYXRoLm1heCgwLCAoZWZmZWN0LmV4cGlyZXNBdCAtIG5vdykgLyBlZmZlY3QuZHVyYXRpb24pO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSAxIC0gbGlmZTtcbiAgICAgIGNvbnN0IHNpemUgPSBlZmZlY3QucmFkaXVzICogKDEgKyBwcm9ncmVzcyAqIDEuMzUpO1xuICAgICAgaWYgKGVmZmVjdC5raW5kID09PSBcIm11enpsZVwiKSB7XG4gICAgICAgIGlmIChlZmZlY3Quc3R5bGUgPT09IFwiY3Jpc3BTdGFyXCIpIHtcbiAgICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCwgeTogZWZmZWN0LnkgLSBzaXplICogLjI4LCB3aWR0aDogc2l6ZSAqIC44NSwgaGVpZ2h0OiBzaXplICogMS42NSwgY29sb3I6IGVmZmVjdC5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgZ2xvdzogLjcgKiBsaWZlLCBpbnRlbnNpdHk6IDEuMSAqIGxpZmUsIHNoYXBlOiBcInNwYXJrXCIgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWZmZWN0LnN0eWxlID09PSBcInJhcGlkRmxpY2tlclwiKSB7XG4gICAgICAgICAgY29uc3Qgaml0dGVyID0gKHBzZXVkb1JhbmRvbShlZmZlY3Quc2VlZCkgKiAyIC0gMSkgKiBzaXplICogLjM1O1xuICAgICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54ICsgaml0dGVyLCB5OiBlZmZlY3QueSAtIHNpemUgKiAuMiwgd2lkdGg6IHNpemUgKiAuNTIsIGhlaWdodDogc2l6ZSAqIC45LCBjb2xvcjogZWZmZWN0LmNvbG9yLCBzZWNvbmRhcnlDb2xvcjogZWZmZWN0LnNlY29uZGFyeUNvbG9yLCBnbG93OiAuNTUsIGludGVuc2l0eTogbGlmZSwgc2hhcGU6IFwiY2lyY2xlXCIgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWZmZWN0LnN0eWxlID09PSBcImdyb3VwZWRQdWxzZVwiKSB7XG4gICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55LCB3aWR0aDogc2l6ZSwgY29sb3I6IGVmZmVjdC5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgZ2xvdzogLjc1ICogbGlmZSwgaW50ZW5zaXR5OiBsaWZlLCBzaGFwZTogXCJyaW5nXCIgfSk7XG4gICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55IC0gc2l6ZSAqIC4yNSwgd2lkdGg6IHNpemUgKiAuNjUsIGhlaWdodDogc2l6ZSAqIDEuNCwgY29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5jb2xvciwgZ2xvdzogLjUsIGludGVuc2l0eTogbGlmZSwgc2hhcGU6IFwic3BhcmtcIiB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChlZmZlY3Quc3R5bGUgPT09IFwic2hvY2tEaWFtb25kXCIpIHtcbiAgICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCwgeTogZWZmZWN0LnkgLSBzaXplICogLjM1LCB3aWR0aDogc2l6ZSAqIC45NSwgaGVpZ2h0OiBzaXplICogMS42NSwgY29sb3I6IGVmZmVjdC5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgZ2xvdzogLjksIGludGVuc2l0eTogMS4xNSAqIGxpZmUsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCwgeTogZWZmZWN0LnksIHdpZHRoOiBzaXplICogMS4yLCBjb2xvcjogZWZmZWN0LnNlY29uZGFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvcjogZWZmZWN0LmNvbG9yLCBnbG93OiAuNTUsIGludGVuc2l0eTogLjc1ICogbGlmZSwgc2hhcGU6IFwicmluZ1wiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54IC0gc2l6ZSAqIC4zNSwgeTogZWZmZWN0LnkgLSBzaXplICogLjIsIHdpZHRoOiBzaXplICogLjM4LCBoZWlnaHQ6IHNpemUgKiAxLjUsIGNvbG9yOiBlZmZlY3QuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IsIGdsb3c6IC42NSwgaW50ZW5zaXR5OiBsaWZlLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LnggKyBzaXplICogLjM1LCB5OiBlZmZlY3QueSAtIHNpemUgKiAuMiwgd2lkdGg6IHNpemUgKiAuMzgsIGhlaWdodDogc2l6ZSAqIDEuNSwgY29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5jb2xvciwgZ2xvdzogLjY1LCBpbnRlbnNpdHk6IGxpZmUsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlZmZlY3Qua2luZCA9PT0gXCJpbXBhY3RcIikge1xuICAgICAgICBpZiAoZWZmZWN0LnN0eWxlID09PSBcImltcGFjdFJpbmdcIiB8fCBlZmZlY3Quc3R5bGUgPT09IFwic3BsaXRSaXBwbGVcIikge1xuICAgICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54LCB5OiBlZmZlY3QueSwgd2lkdGg6IHNpemUsIGNvbG9yOiBlZmZlY3QuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IsIGdsb3c6IC43MiAqIGxpZmUsIGludGVuc2l0eTogbGlmZSwgc2hhcGU6IFwicmluZ1wiIH0pO1xuICAgICAgICAgIGlmIChlZmZlY3Quc3R5bGUgPT09IFwic3BsaXRSaXBwbGVcIikgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55LCB3aWR0aDogc2l6ZSAqIC42MiwgY29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5jb2xvciwgZ2xvdzogLjQ4LCBpbnRlbnNpdHk6IGxpZmUsIHNoYXBlOiBcInJpbmdcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFya0NvdW50ID0gZWZmZWN0LnN0eWxlID09PSBcIm5lZWRsZVNjYXR0ZXJcIiA/IDMgOiBlZmZlY3Quc3R5bGUgPT09IFwiYnVyc3RDcm9zc1wiID8gMiA6IDE7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzcGFya0NvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKGluZGV4IC0gKHNwYXJrQ291bnQgLSAxKSAvIDIpICogc2l6ZSAqIC4zNjtcbiAgICAgICAgICBwcmltaXRpdmVzLnB1c2goeyB4OiBlZmZlY3QueCArIG9mZnNldCwgeTogZWZmZWN0LnksIHdpZHRoOiBzaXplICogLjYyLCBoZWlnaHQ6IHNpemUgKiAoZWZmZWN0LnN0eWxlID09PSBcIm5lZWRsZVNjYXR0ZXJcIiA/IDEuMzUgOiAuOSksIGNvbG9yOiBpbmRleCAlIDIgPyBlZmZlY3Quc2Vjb25kYXJ5Q29sb3IgOiBlZmZlY3QuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBlZmZlY3QuY29sb3IsIGdsb3c6IC41NSAqIGxpZmUsIGludGVuc2l0eTogbGlmZSwgc2hhcGU6IFwic3BhcmtcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHsgeDogZWZmZWN0LngsIHk6IGVmZmVjdC55LCB3aWR0aDogc2l6ZSwgY29sb3I6IGVmZmVjdC5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgZ2xvdzogbGlmZSwgaW50ZW5zaXR5OiBsaWZlLCBzaGFwZTogXCJyaW5nXCIgfSk7XG4gICAgICAgIHByaW1pdGl2ZXMucHVzaCh7IHg6IGVmZmVjdC54LCB5OiBlZmZlY3QueSwgd2lkdGg6IHNpemUgKiAuNywgY29sb3I6IGVmZmVjdC5zZWNvbmRhcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IGVmZmVjdC5jb2xvciwgZ2xvdzogbGlmZSwgaW50ZW5zaXR5OiBsaWZlLCBzaGFwZTogXCJzcGFya1wiIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCB6b29tID0gK3NoYXBlWm9vbS52YWx1ZSAvIDEwMDtcbiAgICBjb25zdCBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcG9pbnQgb2Ygc3F1YWQucG9pbnRzKHBsYXllclkoKSArIHJlY29pbCwgcykpIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUobmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KSwgcG9pbnQueCwgcG9pbnQueSwgMTQgKiB6b29tKSk7XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiBlbmVtaWVzKSBzaGFwZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGVuZW15LmFjdG9yLCBlbmVteS54LCBlbmVteS55LCAxOCAqIHpvb20sIHsgcm90YXRpb25ZOiBNYXRoLnNpbihub3cgLyA3MDAgKyBlbmVteS5pZCkgKiAuMTggfSkpO1xuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGd1biA9IGd1bnNbcGlja3VwLmd1bklkXTtcbiAgICAgIHBpY2t1cC5hY3Rvci5sYWJlbCA9IHNoYXBlTGFiZWwoZ3VuLmxhYmVsLCBcImFib3ZlXCIsIDEwLCA3KTtcbiAgICAgIHBpY2t1cC5hY3Rvci5jb2xvciA9IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdO1xuICAgICAgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShwaWNrdXAuYWN0b3IsIGxhbmVYKHBpY2t1cC5sYW5lKSwgcGlja3VwLnksIDE1ICogem9vbSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBtdWx0aXBsaWVycykge1xuICAgICAgcGlja3VwLmFjdG9yLmxhYmVsID0gc2hhcGVMYWJlbChgJHttdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lLnNxdWFkQWRkZWQgKyAxfXhgLCBcImNlbnRlclwiLCAxMSwgMCk7XG4gICAgICBwaWNrdXAuYWN0b3IuY29sb3IgPSBuZW9uUGFsZXR0ZVttdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lLnBpY2t1cENvbG9yXTtcbiAgICAgIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGlja3VwLmFjdG9yLCBsYW5lWChwaWNrdXAubGFuZSksIHBpY2t1cC55LCAxNiAqIHpvb20pKTtcbiAgICB9XG4gICAgcmVuZGVyZXIucmVuZGVyKHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVzLCBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB7XG4gICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgcGxheWVyWTogcGxheWVyWSgpLFxuICAgIH0pLCBub3cgLyAxMDAwKTtcbiAgfTtcblxuICBjb25zdCBmcmFtZSA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIHVwZGF0ZShub3cpO1xuICAgIGRyYXcobm93KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICB9O1xuXG4gIGVxdWlwKGVxdWlwcGVkR3VuSWQsIGVxdWlwcGVkTGV2ZWwpO1xuICBzcGF3bkVuZW15KDApO1xuICBzcGF3bkVuZW15KDEpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xufSBjYXRjaCAoY2F1c2UpIHtcbiAgZXJyb3IuaGlkZGVuID0gZmFsc2U7XG4gIGVycm9yLnRleHRDb250ZW50ID0gY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlLm1lc3NhZ2UgOiBTdHJpbmcoY2F1c2UpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGdhbWVBdWRpbz86IHtcbiAgICAgIHBsYXkoaWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgICBwbGF5Um90YXRlZChpZDogc3RyaW5nLCBhbHRlcm5hdGl2ZXM6IG51bWJlcik6IHZvaWQ7XG4gICAgfTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFPLElBQU0sY0FBYztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFDWjs7O0FDT0EsSUFBTSxVQUFVLENBQUMsT0FBZSxXQUFXLENBQUMsS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssTUFDcEUsTUFBTSxLQUFLLEVBQUUsUUFBUSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDdEMsUUFBTSxRQUFRLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSTtBQUMzQyxTQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRTtBQUNwRCxDQUFDO0FBRUgsSUFBTSxPQUFPLENBQUMsUUFBZ0IsUUFBUSxNQUFLLFdBQVcsQ0FBQyxLQUFLLEtBQUssTUFDL0QsTUFBTSxLQUFLLEVBQUUsUUFBUSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUMzQyxRQUFNLFNBQVMsSUFBSSxJQUFJLFFBQVE7QUFDL0IsUUFBTSxRQUFRLFdBQVcsSUFBSSxLQUFLLEtBQUs7QUFDdkMsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU07QUFDNUQsQ0FBQztBQUVILElBQU0sVUFBdUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlELElBQU0sUUFBcUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBSyxJQUFHLEdBQUcsQ0FBQyxNQUFLLElBQUcsR0FBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLEdBQUcsQ0FBQyxPQUFNLElBQUcsQ0FBQztBQUMvRixJQUFNLFVBQXVCLENBQUMsQ0FBQyxJQUFJLEtBQUksR0FBRyxDQUFDLEdBQUcsS0FBSSxHQUFHLENBQUMsR0FBRyxLQUFJLEdBQUcsQ0FBQyxNQUFLLElBQUcsR0FBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLENBQUM7QUFDakcsSUFBTSxTQUFzQixRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDbEQsSUFBTSxTQUEwQztBQUFBLEVBQzlDLFFBQVEsWUFBWTtBQUFBLEVBQU0sUUFBUSxZQUFZO0FBQUEsRUFBSyxTQUFTLFlBQVk7QUFBQSxFQUN4RSxNQUFNLFlBQVk7QUFBQSxFQUFNLFdBQVc7QUFBQSxFQUFXLE9BQU87QUFDdkQ7QUFFQSxJQUFNLE9BQU8sQ0FDWCxRQUF5QixJQUFZLE1BQWMsUUFDbkQsTUFBcUIsV0FDYSxFQUFFLElBQUksTUFBTSxRQUFRLFFBQVEsT0FBTyxNQUFNLE9BQU8sT0FBTyxNQUFNLEdBQUcsT0FBTyxXQUFXLFNBQVMsT0FBTSxLQUFJO0FBRWxJLElBQU0sbUJBQTREO0FBQUEsRUFDdkUsS0FBSyxVQUFVLGlCQUFpQixpQkFBaUIsT0FBTyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksTUFBSyxJQUFJLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUNySCxLQUFLLFVBQVUsZUFBZSxlQUFlLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLEtBQUcsSUFBRyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDcEksS0FBSyxVQUFVLGFBQWEsYUFBYSxLQUFLLEdBQUcsSUFBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsSUFBRSxLQUFHLElBQUUsR0FBRSxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQzdHLEtBQUssVUFBVSxlQUFlLGVBQWUsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBRyxHQUFHLE1BQUssSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNsRyxLQUFLLFVBQVUsY0FBYyxjQUFjLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLEdBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQU0sQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDbEwsS0FBSyxVQUFVLGFBQWEsYUFBYSxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxLQUFHLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQzlGLEtBQUssVUFBVSxlQUFlLGVBQWUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFFLENBQUMsTUFBSSxJ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LGFBQWEsYUFBYSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUM7QUFDM0csYUFBTyxNQUFNLFFBQVEsWUFBWSxpQkFBaUIsUUFBUSxhQUFhLFdBQVc7QUFDbEYsYUFBTyxLQUFLLG9CQUFvQixPQUFPLE9BQU8sTUFBTSxPQUFPLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFBQSxJQUN4RjtBQUNBLGFBQVMsT0FBTyx1QkFBdUIsWUFBWSxRQUFRLGlDQUFpQztBQUFBLE1BQzFGLE9BQU8sT0FBTztBQUFBLE1BQ2QsUUFBUSxPQUFPO0FBQUEsTUFDZixTQUFTLFFBQVE7QUFBQSxJQUNuQixDQUFDLEdBQUcsTUFBTSxHQUFJO0FBQUEsRUFDaEI7QUFFQSxRQUFNLFFBQVEsQ0FBQyxRQUFzQjtBQUNuQyxXQUFPLEdBQUc7QUFDVixTQUFLLEdBQUc7QUFDUiwwQkFBc0IsS0FBSztBQUFBLEVBQzdCO0FBRUEsUUFBTSxlQUFlLGFBQWE7QUFDbEMsYUFBVyxDQUFDO0FBQ1osYUFBVyxDQUFDO0FBQ1osd0JBQXNCLEtBQUs7QUFDN0IsU0FBUyxPQUFPO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxjQUFjLGlCQUFpQixRQUFRLE1BQU0sVUFBVSxPQUFPLEtBQUs7QUFDM0U7IiwKICAibmFtZXMiOiBbImNhbnZhcyIsICJ3aWR0aCIsICJoZWlnaHQiLCAic2hhZGVyIiwgImhleCIsICJjYW52YXMiLCAiY2FudmFzIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgInJvdGF0aW9uIiwgImxldmVsIiwgImxldmVsIl0KfQo=

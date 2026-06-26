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
    window.gameAudio?.play("Pickup");
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
    window.gameAudio?.play("EnemyDestroyed");
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
      window.gameAudio?.play("Hit");
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
          window.gameAudio?.play("EnemyDestroyed");
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
    shapes.push(actorInTopDownScene(playerActor, squad.x, py, 14));
    for (const e of enemies) shapes.push(actorInTopDownScene(e.actor, e.x, e.y, 18, { rotationY: Math.sin(now / 700 + e.id) * 0.18 }));
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
  equip(activeSwordId);
  spawnEnemy(0);
  spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdG9wLWRvd24tc2NlbmUudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2xhbmUtcnVubmVyLXNjZW5lcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Db21iYXRUdW5pbmcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vRmFtaWx5RGVmaW5pdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9HdW5GYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vT3JiRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrRGVmaW5pdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2sxLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazIudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2lucHV0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc3F1YWQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9hdXRvQWltLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvdmlld3BvcnQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaGFwZVZpc3VhbHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc3dvcmRFdmFsdWF0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9mYW1pbHlWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS90ZXN0LXBhZ2VzL3N3b3JkLWZhbWlseS9tYW51YWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uLCBOZW9uUG9pbnQgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUxhYmVsUG9zaXRpb24gPSBcImFib3ZlXCIgfCBcImJlbG93XCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUxhYmVsIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbj86IE5lb25TaGFwZUxhYmVsUG9zaXRpb247XG4gIG9mZnNldD86IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW5zdGFuY2Uge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICByb3RhdGlvblg/OiBudW1iZXI7XG4gIHJvdGF0aW9uWT86IG51bWJlcjtcbiAgcm90YXRpb25aPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBzaGllbGRlZD86IGJvb2xlYW47XG4gIGxpbmVUaGlja25lc3M/OiBudW1iZXI7XG4gIGVuZXJneUludGVuc2l0eT86IG51bWJlcjtcbiAgZW5lcmd5Q292ZXJhZ2U/OiBudW1iZXI7XG4gIGVuZXJneVNwZWVkPzogbnVtYmVyO1xuICBlbmVyZ3lCbGVlZD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZXhwbG9kZVByb2dyZXNzPzogbnVtYmVyO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xufVxuXG50eXBlIFYzID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xudHlwZSBWZXJ0ZXggPSB7XG4gIHA6IFYzOyBuOiBWMzsgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTsgZ2xvdzogbnVtYmVyO1xuICBlZmZlY3Q6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IGZsb2F0c1BlclZlcnRleCA9IDE0O1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IFNjZW5lIHsgYXNwZWN0OiBmMzIsIGNhbWVyYTogZjMyLCB0aW1lOiBmMzIsIHBhZGRpbmc6IGYzMiB9XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbnN0cnVjdCBJbnB1dCB7XG4gIEBsb2NhdGlvbigwKSBwb3NpdGlvbjogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMykgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oNCkgZWZmZWN0OiB2ZWM0Zixcbn1cbnN0cnVjdCBPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGVmZmVjdDogdmVjNGYsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oaW5wdXQ6IElucHV0KSAtPiBPdXRwdXQge1xuICBsZXQgZGVwdGggPSBzY2VuZS5jYW1lcmEgLSBpbnB1dC5wb3NpdGlvbi56O1xuICB2YXIgb3V0cHV0OiBPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKGlucHV0LnBvc2l0aW9uLnggKiA0IC8gc2NlbmUuYXNwZWN0LCBpbnB1dC5wb3NpdGlvbi55ICogNCwgZGVwdGggKiAuMDQ1LCBkZXB0aCk7XG4gIG91dHB1dC5ub3JtYWwgPSBpbnB1dC5ub3JtYWw7XG4gIG91dHB1dC5jb2xvciA9IGlucHV0LmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGlucHV0Lmdsb3c7XG4gIG91dHB1dC5lZmZlY3QgPSBpbnB1dC5lZmZlY3Q7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBub3JtYWwgPSBub3JtYWxpemUoaW5wdXQubm9ybWFsKTtcbiAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0uNDUsIC0uNywgMSkpO1xuICBsZXQgZGlmZnVzZSA9IC4xOCArIG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApICogLjgyO1xuICBsZXQgcmltID0gcG93KDEgLSBhYnMobm9ybWFsLnopLCAyLjIpO1xuICBsZXQgc2lkZSA9IDEgLSBhYnMobm9ybWFsLnopO1xuICBsZXQgcmFyZVN1cmdlID0gcG93KG1heCguMCwgc2luKHNjZW5lLnRpbWUgKiBpbnB1dC5lZmZlY3QueiAqIC44MiArIGlucHV0LmNvbG9yLnIgKiA3LjApKSwgMjIuMClcbiAgICAqIGlucHV0LmVmZmVjdC54ICogaW5wdXQuZWZmZWN0LnkgKiBpbnB1dC5lZmZlY3QudztcbiAgbGV0IGVuZXJneSA9IGlucHV0LmNvbG9yICogKGRpZmZ1c2UgKiAuMTIgKyByaW0gKiBpbnB1dC5nbG93ICogLjM2ICsgc2lkZSAqIC4wOCArIHJhcmVTdXJnZSAqIC43KTtcbiAgcmV0dXJuIHZlYzRmKGVuZXJneSArIHZlYzNmKHJhcmVTdXJnZSAqIC4xOCksIC4xMiArIHNpZGUgKiAuMTIgKyByYXJlU3VyZ2UgKiAuMjgpO1xufVxuQGZyYWdtZW50IGZuIGxpbmVGcmFnbWVudChpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYWxvbmcgPSBpbnB1dC5ub3JtYWwueDtcbiAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5ub3JtYWwueSk7XG4gIGxldCBwaGFzZSA9IGlucHV0Lm5vcm1hbC56O1xuICBsZXQgaW50ZW5zaXR5ID0gaW5wdXQuZWZmZWN0Lng7XG4gIGxldCBjb3ZlcmFnZSA9IGlucHV0LmVmZmVjdC55O1xuICBsZXQgc3BlZWQgPSBpbnB1dC5lZmZlY3QuejtcbiAgbGV0IGJsZWVkID0gaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBwdWxzZUEgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAzMS4wIC0gc2NlbmUudGltZSAqIHNwZWVkICogNS40ICsgcGhhc2UpKSwgMTAuMCk7XG4gIGxldCBwdWxzZUIgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAxMy4wICsgc2NlbmUudGltZSAqIHNwZWVkICogMy4xICsgcGhhc2UgKiAyLjcpKSwgMTguMCk7XG4gIGxldCBub2lzZSA9IHNpbihhbG9uZyAqIDcxLjAgKyBwaGFzZSAqIDguMykgKiAuNSArIC41O1xuICBsZXQgdGhyZXNob2xkID0gMS4wIC0gY292ZXJhZ2U7XG4gIGxldCBlbGVjdHJpY2l0eSA9IHNtb290aHN0ZXAodGhyZXNob2xkLCB0aHJlc2hvbGQgKyAuMTgsIHB1bHNlQSAqIC42NSArIHB1bHNlQiAqIC41NSArIG5vaXNlICogLjE4KTtcbiAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKC4wNiwgLjI4LCBhY3Jvc3MpO1xuICBsZXQgaGFsbyA9IDEuMCAtIHNtb290aHN0ZXAoLjEyLCAxLjAsIGFjcm9zcyk7XG4gIGxldCBzdXJnZSA9IGVsZWN0cmljaXR5ICogaW50ZW5zaXR5O1xuICBsZXQgcHVsc2UgPSAuNzggKyBzaW4oc2NlbmUudGltZSAqIHNwZWVkICogMi4xICsgcGhhc2UpICogLjEzICsgZWxlY3RyaWNpdHkgKiAuMjQ7XG4gIGxldCBjbG91ZCA9IGhhbG8gKiAoLjEzICsgc3VyZ2UgKiAuNTIpO1xuICBsZXQgaG90ID0gaW5wdXQuY29sb3IgKiAocHVsc2UgKyBjbG91ZCAqIDIuMSkgKiBpbnB1dC5nbG93ICsgdmVjM2YoY29yZSAqIHN1cmdlICogMS4zNSk7XG4gIGxldCBhbHBoYSA9IChjb3JlICogKC43MiArIHB1bHNlICogLjIpICsgY2xvdWQgKyAoMS4wIC0gYWNyb3NzKSAqIGJsZWVkICogZWxlY3RyaWNpdHkgKiAuMjQpICogaW5wdXQuZ2xvdztcbiAgcmV0dXJuIHZlYzRmKGhvdCwgY2xhbXAoYWxwaGEsIDAuMCwgMS4wKSk7XG59YDtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3Qgc3ViID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcbmNvbnN0IGNyb3NzID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzFdKmJbMl0tYVsyXSpiWzFdLCBhWzJdKmJbMF0tYVswXSpiWzJdLCBhWzBdKmJbMV0tYVsxXSpiWzBdXTtcbmNvbnN0IG5vcm1hbGl6ZSA9ICh2OiBWMyk6IFYzID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCguLi52KSB8fCAxO1xuICByZXR1cm4gW3ZbMF0gLyBsZW5ndGgsIHZbMV0gLyBsZW5ndGgsIHZbMl0gLyBsZW5ndGhdO1xufTtcbmNvbnN0IHJvdGF0ZSA9IChbeCwgeSwgel06IFYzLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCByejogbnVtYmVyKTogVjMgPT4ge1xuICBsZXQgYSA9IHkgKiBNYXRoLmNvcyhyeCkgLSB6ICogTWF0aC5zaW4ocngpLCBiID0geSAqIE1hdGguc2luKHJ4KSArIHogKiBNYXRoLmNvcyhyeCk7IHkgPSBhOyB6ID0gYjtcbiAgYSA9IHggKiBNYXRoLmNvcyhyeSkgKyB6ICogTWF0aC5zaW4ocnkpOyBiID0gLXggKiBNYXRoLnNpbihyeSkgKyB6ICogTWF0aC5jb3MocnkpOyB4ID0gYTsgeiA9IGI7XG4gIHJldHVybiBbeCAqIE1hdGguY29zKHJ6KSAtIHkgKiBNYXRoLnNpbihyeiksIHggKiBNYXRoLnNpbihyeikgKyB5ICogTWF0aC5jb3MocnopLCB6XTtcbn07XG5cbmZ1bmN0aW9uIG1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlcik6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlLCAtcG9pbnRbMV0gKiBzY2FsZSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCksIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBjb25zdCBhZGQgPSAoYTogVjMsIGI6IFYzLCBjOiBWMywgbm9ybWFsPzogVjMpID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsID8/IG5vcm1hbGl6ZShjcm9zcyhzdWIoYiwgYSksIHN1YihjLCBhKSkpO1xuICAgIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgICBdO1xuICAgIFthLGIsY10uZm9yRWFjaChwID0+IG91dHB1dC5wdXNoKHsgcCwgbiwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSksIGVmZmVjdCB9KSk7XG4gIH07XG4gIGNvbnN0IGZyb250ID0gc2hhcGUucG9pbnRzLm1hcChwb2ludCA9PiBtb3ZlKHBvaW50LCBkZXB0aCAvIDIpKTtcbiAgY29uc3QgYmFjayA9IHNoYXBlLnBvaW50cy5tYXAocG9pbnQgPT4gbW92ZShwb2ludCwgLWRlcHRoIC8gMikpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGZyb250Lmxlbmd0aCAtIDE7IGkrKykgYWRkKGZyb250WzBdLCBmcm9udFtpXSwgZnJvbnRbaSArIDFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBiYWNrLmxlbmd0aCAtIDE7IGkrKykgYWRkKGJhY2tbMF0sIGJhY2tbaSArIDFdLCBiYWNrW2ldKTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGg7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW2ldLCBiYWNrW25leHRdKTtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbbmV4dF0sIGZyb250W25leHRdKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGVkZ2VNZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgbW92ZSA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZSwgLXBvaW50WzFdICogc2NhbGUsIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCksIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKV07XG4gIH07XG4gIGNvbnN0IGV4cGxvZGUgPSAoYTogVjMsIGI6IFYzLCBpbmRleDogbnVtYmVyKTogW1YzLCBWM10gPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDA7XG4gICAgaWYgKCFwcm9ncmVzcykgcmV0dXJuIFthLCBiXTtcbiAgICBjb25zdCBteCA9IChhWzBdICsgYlswXSkgLyAyIC0gKGluc3RhbmNlLnggPz8gMCksIG15ID0gKGFbMV0gKyBiWzFdKSAvIDIgLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KG14LCBteSkgfHwgMTtcbiAgICBjb25zdCBtYWduaXR1ZGUgPSBpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICBjb25zdCBzcGVlZCA9IG1hZ25pdHVkZSAqICguNDUgKyAoTWF0aC5zaW4oaW5kZXggKiA5MS4xNykgKiAuNSArIC41KSAqIC41NSk7XG4gICAgY29uc3QgZHggPSBteCAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQsIGR5ID0gbXkgLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkICsgcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqIC4xODtcbiAgICBjb25zdCBhbmdsZSA9IHByb2dyZXNzICogKGluZGV4ICUgMiA/IDEgOiAtMSkgKiAyLjQ7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKHA6IFYzKTogVjMgPT4ge1xuICAgICAgY29uc3QgeCA9IHBbMF0gLSAoaW5zdGFuY2UueCA/PyAwKSwgeSA9IHBbMV0gLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICAgIHJldHVybiBbeCAqIE1hdGguY29zKGFuZ2xlKSAtIHkgKiBNYXRoLnNpbihhbmdsZSkgKyAoaW5zdGFuY2UueCA/PyAwKSArIGR4LCB4ICogTWF0aC5zaW4oYW5nbGUpICsgeSAqIE1hdGguY29zKGFuZ2xlKSArIChpbnN0YW5jZS55ID8/IDApICsgZHksIHBbMl1dO1xuICAgIH07XG4gICAgcmV0dXJuIFt0cmFuc2Zvcm0oYSksIHRyYW5zZm9ybShiKV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgbGV0IGRpc3RhbmNlID0gMDtcbiAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gIF07XG4gIGNvbnN0IGFkZExpbmUgPSAoYTogVjMsIGI6IFYzLCBwaGFzZTogbnVtYmVyLCB3aWR0aFNjYWxlID0gMSwgb3BhY2l0eSA9IDEpID0+IHtcbiAgICBbYSwgYl0gPSBleHBsb2RlKGEsIGIsIE1hdGguZmxvb3IoZGlzdGFuY2UgKiAxMDApICsgTWF0aC5mbG9vcihwaGFzZSAqIDEwKSk7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgLjAwMTtcbiAgICBjb25zdCB3aWR0aCA9IChpbnN0YW5jZS5saW5lVGhpY2tuZXNzID8/IDEpICogLjAxOCAqIHdpZHRoU2NhbGU7XG4gICAgY29uc3Qgb3ggPSAtZHkgLyBsZW5ndGggKiB3aWR0aCwgb3kgPSBkeCAvIGxlbmd0aCAqIHdpZHRoO1xuICAgIGNvbnN0IGEwOiBWMyA9IFthWzBdIC0gb3gsIGFbMV0gLSBveSwgYVsyXV0sIGExOiBWMyA9IFthWzBdICsgb3gsIGFbMV0gKyBveSwgYVsyXV07XG4gICAgY29uc3QgYjA6IFYzID0gW2JbMF0gLSBveCwgYlsxXSAtIG95LCBiWzJdXSwgYjE6IFYzID0gW2JbMF0gKyBveCwgYlsxXSArIG95LCBiWzJdXTtcbiAgICBjb25zdCBzdGFydCA9IGRpc3RhbmNlICogMi40LCBlbmQgPSAoZGlzdGFuY2UgKyBsZW5ndGgpICogMi40O1xuICAgIGNvbnN0IHB1c2ggPSAocDogVjMsIGFsb25nOiBudW1iZXIsIGFjcm9zczogbnVtYmVyKSA9PlxuICAgICAgb3V0cHV0LnB1c2goeyBwLCBuOiBbYWxvbmcsIGFjcm9zcywgcGhhc2VdLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiBvcGFjaXR5ICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiAoMSArIE1hdGguc2luKChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiBNYXRoLlBJKSAqIChpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAyLjIpICogKDEgLSAoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogLjcpLCBlZmZlY3QgfSk7XG4gICAgcHVzaChhMCxzdGFydCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjAsZW5kLC0xKTtcbiAgICBwdXNoKGIwLGVuZCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjEsZW5kLDEpO1xuICAgIGRpc3RhbmNlICs9IGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgYWRkTG9vcCA9IChwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLCB6OiBudW1iZXIsIHBoYXNlOiBudW1iZXIpID0+XG4gICAgcG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCB6KSwgbW92ZShwb2ludHNbKGluZGV4ICsgMSkgJSBwb2ludHMubGVuZ3RoXSwgeiksIHBoYXNlICsgaW5kZXggKiAuNzMpKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIGRlcHRoIC8gMiwgLjMpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgLWRlcHRoIC8gMiwgMi4xKTtcbiAgc2hhcGUuaG9sZXM/LmZvckVhY2goKGhvbGUsIGluZGV4KSA9PiB7XG4gICAgYWRkTG9vcChob2xlLCBkZXB0aCAvIDIgKyAuMDAyLCAzLjcgKyBpbmRleCk7XG4gICAgYWRkTG9vcChob2xlLCAtZGVwdGggLyAyIC0gLjAwMiwgNS4yICsgaW5kZXgpO1xuICB9KTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCAtZGVwdGggLyAyKSwgbW92ZShwb2ludCwgZGVwdGggLyAyKSwgNi4xICsgaW5kZXgpKTtcbiAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCAqIChpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxKTtcbiAgY29uc3QgYnJhbmNoU3RyZW5ndGggPSAoaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEpICogKGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMik7XG4gIGNvbnN0IHJhbmRvbSA9IChzZWVkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hdGguc2luKHNlZWQgKiAxMi45ODk4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCAqIDc4LjIzMykgKiA0Mzc1OC41NDUzO1xuICAgIHJldHVybiB2YWx1ZSAtIE1hdGguZmxvb3IodmFsdWUpO1xuICB9O1xuICBjb25zdCByb3RhdGVkID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpYW5zOiBudW1iZXIpOiBOZW9uUG9pbnQgPT4gW1xuICAgIHggKiBNYXRoLmNvcyhyYWRpYW5zKSAtIHkgKiBNYXRoLnNpbihyYWRpYW5zKSxcbiAgICB4ICogTWF0aC5zaW4ocmFkaWFucykgKyB5ICogTWF0aC5jb3MocmFkaWFucyksXG4gIF07XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjeWNsZSA9IE1hdGguZmxvb3IodGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSk7XG4gICAgY29uc3QgYWdlID0gdGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSAtIGN5Y2xlO1xuICAgIGNvbnN0IHNlZWQgPSBjeWNsZSAqIDM3LjEgKyBpbmRleCAqIDExLjc7XG4gICAgY29uc3QgYWN0aXZlRHVyYXRpb24gPSAuMTggKyByYW5kb20oc2VlZCArIDEpICogLjI1O1xuICAgIGNvbnN0IGhhemVEdXJhdGlvbiA9IE1hdGgubWluKDEsIGFjdGl2ZUR1cmF0aW9uICsgLjI4ICsgcmFuZG9tKHNlZWQgKyAyKSAqIC4yMik7XG4gICAgY29uc3QgYnJhbmNoQWN0aXZlID0gYWdlIDwgYWN0aXZlRHVyYXRpb247XG4gICAgY29uc3QgaGF6ZUFjdGl2ZSA9IGFnZSA8IGhhemVEdXJhdGlvbjtcbiAgICBpZiAoKCFicmFuY2hBY3RpdmUgJiYgIWhhemVBY3RpdmUpIHx8IHJhbmRvbShzZWVkICsgMykgPiBNYXRoLm1pbiguNzgsIGJyYW5jaFN0cmVuZ3RoICogLjUpKSByZXR1cm47XG4gICAgY29uc3QgbmV4dCA9IHNoYXBlLnBvaW50c1soaW5kZXggKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGhdO1xuICAgIGNvbnN0IHQgPSAuMTYgKyByYW5kb20oc2VlZCArIDQpICogLjY4O1xuICAgIGNvbnN0IGJhc2U6IE5lb25Qb2ludCA9IFtwb2ludFswXSArIChuZXh0WzBdIC0gcG9pbnRbMF0pICogdCwgcG9pbnRbMV0gKyAobmV4dFsxXSAtIHBvaW50WzFdKSAqIHRdO1xuICAgIGNvbnN0IHR4ID0gbmV4dFswXSAtIHBvaW50WzBdLCB0eSA9IG5leHRbMV0gLSBwb2ludFsxXSwgdGwgPSBNYXRoLmh5cG90KHR4LCB0eSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSByYW5kb20oc2VlZCArIDUpID4gLjUgPyAxIDogLTE7XG4gICAgY29uc3QgcGVycGVuZGljdWxhcjogTmVvblBvaW50ID0gWy10eSAvIHRsICogZGlyZWN0aW9uLCB0eCAvIHRsICogZGlyZWN0aW9uXTtcbiAgICBjb25zdCBmaXJzdEppdHRlciA9ICgxMCArIHJhbmRvbShzZWVkICsgNikgKiAxMCkgKiBNYXRoLlBJIC8gMTgwICogKHJhbmRvbShzZWVkICsgNykgPiAuNSA/IDEgOiAtMSk7XG4gICAgbGV0IGhlYWRpbmcgPSByb3RhdGVkKHBlcnBlbmRpY3VsYXJbMF0sIHBlcnBlbmRpY3VsYXJbMV0sIGZpcnN0Sml0dGVyKTtcbiAgICBjb25zdCBzZWdtZW50Q291bnQgPSAxICsgTWF0aC5mbG9vcihyYW5kb20oc2VlZCArIDgpICogMyk7XG4gICAgY29uc3QgcG9pbnRzOiBOZW9uUG9pbnRbXSA9IFtiYXNlXTtcbiAgICBmb3IgKGxldCBzZWdtZW50ID0gMDsgc2VnbWVudCA8IHNlZ21lbnRDb3VudDsgc2VnbWVudCsrKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSAuMDU1ICsgcmFuZG9tKHNlZWQgKyAxMCArIHNlZ21lbnQpICogLjA5NTtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIHBvaW50cy5wdXNoKFtwcmV2aW91c1swXSArIGhlYWRpbmdbMF0gKiBsZW5ndGgsIHByZXZpb3VzWzFdICsgaGVhZGluZ1sxXSAqIGxlbmd0aF0pO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKDIwICsgcmFuZG9tKHNlZWQgKyAyMCArIHNlZ21lbnQpICogNDApICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGhlYWRpbmcgPSByb3RhdGVkKGhlYWRpbmdbMF0sIGhlYWRpbmdbMV0sIG9mZnNldCAqIChyYW5kb20oc2VlZCArIDMwICsgc2VnbWVudCkgPiAuNSA/IDEgOiAtMSkpO1xuICAgIH1cbiAgICBpZiAoaGF6ZUFjdGl2ZSkge1xuICAgICAgY29uc3QgZmFkZSA9IDEgLSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgLyBNYXRoLm1heCguMDAxLCBoYXplRHVyYXRpb24gLSBhY3RpdmVEdXJhdGlvbik7XG4gICAgICBjb25zdCBkcmlmdCA9IE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAqIC4wMzU7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHBvaW50c1tzZWdtZW50ICsgMV07XG4gICAgICAgIGNvbnN0IGhhemVTdGFydDogTmVvblBvaW50ID0gW3N0YXJ0WzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBzdGFydFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGNvbnN0IGhhemVFbmQ6IE5lb25Qb2ludCA9IFtlbmRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIGVuZFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGFkZExpbmUobW92ZShoYXplU3RhcnQsIGRlcHRoIC8gMiArIC4wMDIpLCBtb3ZlKGhhemVFbmQsIGRlcHRoIC8gMiArIC4wMDIpLCAzMSArIHNlZWQgKyBzZWdtZW50LCAxLjQ1ICsgZmFkZSAqIC41NSwgZmFkZSAqIC4zNCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJyYW5jaEFjdGl2ZSkge1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBhZGRMaW5lKG1vdmUoc3RhcnQsIGRlcHRoIC8gMiArIC4wMDYpLCBtb3ZlKHBvaW50c1tzZWdtZW50ICsgMV0sIGRlcHRoIC8gMiArIC4wMDYpLCAxMSArIHNlZWQgKyBzZWdtZW50LCAuNDIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjbGluZVBpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNkZXB0aDogR1BVVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAjbGFiZWxMYXllcjogSFRNTERpdkVsZW1lbnQ7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgcGFyZW50ID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCAmJiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0aGlzLiNsYWJlbExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLiNsYWJlbExheWVyLmNsYXNzTmFtZSA9IFwibmVvbi1zaGFwZS1sYWJlbC1sYXllclwiO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwgeyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGluc2V0OlwiMFwiLCBwb2ludGVyRXZlbnRzOlwibm9uZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiIH0pO1xuICAgIHBhcmVudD8uYXBwZW5kKHRoaXMuI2xhYmVsTGF5ZXIpO1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IGV4dHJ1ZGVkIHNoYXBlIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiLCBjdWxsTW9kZTogXCJiYWNrXCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IGZhbHNlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jbGluZVBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwibGluZUZyYWdtZW50XCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgICB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IHRydWUsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IHNoYXBlIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGluc3RhbmNlcy5mbGF0TWFwKG1lc2gpO1xuICAgIGNvbnN0IGVkZ2VzID0gaW5zdGFuY2VzLmZsYXRNYXAoZWRnZU1lc2gpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgY29uc3QgZWRnZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGVkZ2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBkYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGVkZ2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZWRnZURhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGNvbnN0IGVkZ2VCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBlZGdlRGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmZmVyLCAwLCBkYXRhKTtcbiAgICBpZiAoZWRnZURhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihlZGdlQnVmZmVyLCAwLCBlZGdlRGF0YSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCA1LCBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIDBdKSk7XG4gICAgY29uc3QgYmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBsaW5lQmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNsaW5lUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7IHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSwgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLCBzdG9yZU9wOiBcInN0b3JlXCIgfV0sXG4gICAgICBkZXB0aFN0ZW5jaWxBdHRhY2htZW50OiB7IHZpZXc6IHRoaXMuI2RlcHRoIS5jcmVhdGVWaWV3KCksIGRlcHRoQ2xlYXJWYWx1ZTogMSwgZGVwdGhMb2FkT3A6IFwiY2xlYXJcIiwgZGVwdGhTdG9yZU9wOiBcInN0b3JlXCIgfSxcbiAgICB9KTtcbiAgICBpZiAodmVydGljZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBiaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpOyBwYXNzLmRyYXcodmVydGljZXMubGVuZ3RoKTsgfVxuICAgIGlmIChlZGdlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNsaW5lUGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBsaW5lQmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgZWRnZUJ1ZmZlcik7IHBhc3MuZHJhdyhlZGdlcy5sZW5ndGgpOyB9XG4gICAgcGFzcy5lbmQoKTsgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgdGhpcy4jcmVuZGVyTGFiZWxzKGluc3RhbmNlcyk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUub25TdWJtaXR0ZWRXb3JrRG9uZSgpLnRoZW4oKCkgPT4geyB2ZXJ0ZXhCdWZmZXIuZGVzdHJveSgpOyBlZGdlQnVmZmVyLmRlc3Ryb3koKTsgfSk7XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7IHRoaXMuI2xhYmVsTGF5ZXIucmVtb3ZlKCk7IHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7IHRoaXMuI3NjZW5lQnVmZmVyLmRlc3Ryb3koKTsgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTsgfVxuICAjcmVuZGVyTGFiZWxzKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwge1xuICAgICAgbGVmdDogYCR7dGhpcy5jYW52YXMub2Zmc2V0TGVmdH1weGAsXG4gICAgICB0b3A6IGAke3RoaXMuY2FudmFzLm9mZnNldFRvcH1weGAsXG4gICAgICByaWdodDogXCJhdXRvXCIsXG4gICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgd2lkdGg6IGAke3RoaXMuY2FudmFzLmNsaWVudFdpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgICB0aGlzLiNsYWJlbExheWVyLnJlcGxhY2VDaGlsZHJlbiguLi5pbnN0YW5jZXMuZmxhdE1hcChpbnN0YW5jZSA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLmxhYmVsPy50ZXh0IHx8IChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpIDw9IDApIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgICAgIGNvbnN0IHggPSA1MCArIChpbnN0YW5jZS54ID8/IDApICogNDAgLyAodGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgeSA9IDUwIC0gKGluc3RhbmNlLnkgPz8gMCkgKiA0MDtcbiAgICAgIGNvbnN0IHNoYXBlUmFkaXVzID0gc2NhbGUgKiB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiAuMjtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNoYXBlUmFkaXVzICsgKGluc3RhbmNlLmxhYmVsLm9mZnNldCA/PyA4KSArIChpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOCkgKiAuNTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5zdGFuY2UubGFiZWwucG9zaXRpb24gPz8gXCJhYm92ZVwiO1xuICAgICAgbGV0IHR4ID0gMCwgdHkgPSAwO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImFib3ZlXCIpIHR5ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJiZWxvd1wiKSB0eSA9IG9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHR4ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB0eCA9IG9mZnNldDtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnN0YW5jZS5sYWJlbC50ZXh0O1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDpgJHt4fSVgLCB0b3A6YCR7eX0lYCwgdHJhbnNmb3JtOmB0cmFuc2xhdGUoY2FsYygtNTAlICsgJHt0eH1weCksY2FsYygtNTAlICsgJHt0eX1weCkpYCxcbiAgICAgICAgY29sb3I6aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3IsIGZvbnRGYW1pbHk6aW5zdGFuY2UubGFiZWwuZm9udEZhbWlseSA/PyBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIGZvbnRTaXplOmAke2luc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4fXB4YCwgZm9udFdlaWdodDpTdHJpbmcoaW5zdGFuY2UubGFiZWwuZm9udFdlaWdodCA/PyA2MDApLFxuICAgICAgICB0ZXh0U2hhZG93OmAwIDAgNXB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9LDAgMCAxNHB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9YCwgd2hpdGVTcGFjZTpcIm5vd3JhcFwiLFxuICAgICAgICBvcGFjaXR5OlN0cmluZyhpbnN0YW5jZS5vcGFjaXR5ID8/IDEpLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW2VsZW1lbnRdO1xuICAgIH0pKTtcbiAgfVxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLiNsb2dpY2FsU2l6ZTtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQgfHwgIXRoaXMuI2RlcHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLiNkZXB0aCAmJiB0aGlzLmNhbnZhcy53aWR0aCA9PT0gd2lkdGggJiYgdGhpcy5jYW52YXMuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSwgTmVvblNoYXBlTGFiZWwgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGVudW0gTmVvblNoYXBlRGlzcG9zYWwge1xuICBGYWRlT3V0ID0gXCJmYWRlT3V0XCIsXG4gIERpc2FwcGVhciA9IFwiZGlzYXBwZWFyXCIsXG4gIEV4cGxvZGUgPSBcImV4cGxvZGVcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVWZWN0b3Ige1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbXBhY3Qge1xuICBkaXJlY3Rpb246IE5lb25TaGFwZVZlY3RvcjtcbiAgbWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlQWN0b3JPcHRpb25zIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHZlbG9jaXR5PzogUGFydGlhbDxOZW9uU2hhcGVWZWN0b3I+O1xuICBzY2FsZT86IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc3Bvc2FsPzogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uU2hhcGVBY3RvciB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICB2ZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yO1xuICBzY2FsZTogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw6IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlOiBudW1iZXI7XG4gIHJvdGF0aW9uWCA9IDA7XG4gIHJvdGF0aW9uWSA9IDA7XG4gIHJvdGF0aW9uWiA9IDA7XG4gIGRpc3Bvc2VkID0gZmFsc2U7XG4gICNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgI2ltcGFjdFZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcbiAgI2ltcGFjdFJvdGF0aW9uOiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uU2hhcGVBY3Rvck9wdGlvbnMpIHtcbiAgICB0aGlzLnNoYXBlID0gb3B0aW9ucy5zaGFwZTtcbiAgICB0aGlzLnggPSBvcHRpb25zLnggPz8gMDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnkgPz8gMDtcbiAgICB0aGlzLnogPSBvcHRpb25zLnogPz8gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiBvcHRpb25zLnZlbG9jaXR5Py54ID8/IDAsIHk6IG9wdGlvbnMudmVsb2NpdHk/LnkgPz8gMCB9O1xuICAgIHRoaXMuc2NhbGUgPSBvcHRpb25zLnNjYWxlID8/IDE7XG4gICAgdGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG9wdGlvbnMuZGlzcG9zYWwgPz8gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dDtcbiAgICB0aGlzLmV4cGxvZGVNYWduaXR1ZGUgPSBvcHRpb25zLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICB9XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyLCB6ID0gdGhpcy56KTogdGhpcyB7XG4gICAgdGhpcy54ID0geDsgdGhpcy55ID0geTsgdGhpcy56ID0gejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZlbG9jaXR5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0geDsgdGhpcy52ZWxvY2l0eS55ID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltcGFjdCh7IGRpcmVjdGlvbiwgbWFnbml0dWRlIH06IE5lb25TaGFwZUltcGFjdCk6IHRoaXMge1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICAgIGNvbnN0IHggPSBkaXJlY3Rpb24ueCAvIGxlbmd0aCwgeSA9IGRpcmVjdGlvbi55IC8gbGVuZ3RoO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKz0geCAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICs9IHkgKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCArPSB5ICogbWFnbml0dWRlICogLjk7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAtPSB4ICogbWFnbml0dWRlICogLjk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNwb3NlKG1vZGUgPSB0aGlzLmRpc3Bvc2FsKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG1vZGU7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhciA/IDEgOiAuMDAwMTtcbiAgICBpZiAobW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZ2VuZXJhdGUoKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9ICh0aGlzLnZlbG9jaXR5LnggKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS54KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnkgKz0gKHRoaXMudmVsb2NpdHkueSArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25YICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblkgKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqIGRlbHRhU2Vjb25kcztcbiAgICBjb25zdCBkYW1waW5nID0gTWF0aC5leHAoLTcgKiBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSAqPSBkYW1waW5nO1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqPSBkYW1waW5nO1xuICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID4gMCAmJiAhdGhpcy5kaXNwb3NlZCkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gLjg1IDogLjU1O1xuICAgICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyBkdXJhdGlvbik7XG4gICAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+PSAxKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJJbnN0YW5jZShvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gICAgY29uc3QgZmFkZSA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQgPyAxIC0gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYXBlOiB0aGlzLnNoYXBlLCB4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56LCBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIHJvdGF0aW9uWDogdGhpcy5yb3RhdGlvblgsIHJvdGF0aW9uWTogdGhpcy5yb3RhdGlvblksIHJvdGF0aW9uWjogdGhpcy5yb3RhdGlvblosXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCwgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IHRoaXMuZGlzcG9zZWQgPyAwIDogZmFkZSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogdGhpcy5leHBsb2RlTWFnbml0dWRlLFxuICAgICAgLi4ub3ZlcnJpZGVzLFxuICAgIH07XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uUHJpbWl0aXZlU2hhcGUgPSBcImNpcmNsZVwiIHwgXCJib2x0XCIgfCBcIm9yYlwiIHwgXCJyaW5nXCIgfCBcInNwYXJrXCIgfCBcImRpYW1vbmRcIiB8IFwicGVudGFnb25cIiB8IFwibGluZVwiIHwgXCJhcmNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJpbWl0aXZlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I/OiBzdHJpbmc7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgdGV4dHVyZT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aD86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIGFyY1N0YXJ0PzogbnVtYmVyO1xuICBhcmNFbmQ/OiBudW1iZXI7XG4gIHNoYXBlPzogTmVvblByaW1pdGl2ZVNoYXBlO1xufVxuXG5jb25zdCBtYXhQcmltaXRpdmVzID0gMTAyNDtcbmNvbnN0IGZsb2F0c1BlclByaW1pdGl2ZSA9IDIwO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovIGBcbnN0cnVjdCBTY2VuZSB7IHJlc29sdXRpb246IHZlYzJmLCBjb3VudDogZjMyLCB0aW1lOiBmMzIgfVxuc3RydWN0IFByaW1pdGl2ZSB7XG4gIHBvc2l0aW9uOiB2ZWMyZixcbiAgc2l6ZTogdmVjMmYsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBnbG93OiBmMzIsXG4gIGludGVuc2l0eTogZjMyLFxuICBzaGFwZTogZjMyLFxuICB0ZXh0dXJlOiBmMzIsXG4gIHJpbUludGVuc2l0eTogZjMyLFxuICBzaGFkb3dTdHJlbmd0aDogZjMyLFxuICBwYWRkaW5nOiB2ZWMyZixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBpdGVtczogYXJyYXk8UHJpbWl0aXZlPjtcblxuc3RydWN0IFZlcnRleE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBpbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDQpIHNoYXBlOiBmMzIsXG4gIEBsb2NhdGlvbig1KSBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbig2KSB0ZXh0dXJlOiBmMzIsXG4gIEBsb2NhdGlvbig3KSByaW1JbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDgpIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG59XG5cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZlcnRleDogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gVmVydGV4T3V0cHV0IHtcbiAgdmFyIGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBpdGVtID0gaXRlbXNbaW5zdGFuY2VdO1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZlcnRleF07XG4gIHZhciBwaXhlbE9mZnNldCA9IGxvY2FsICogaXRlbS5zaXplO1xuICBpZiAoaXRlbS5zaGFwZSA+IDYuNSAmJiBpdGVtLnNoYXBlIDwgNy41KSB7XG4gICAgbGV0IGMgPSBjb3MoaXRlbS50ZXh0dXJlKTtcbiAgICBsZXQgcyA9IHNpbihpdGVtLnRleHR1cmUpO1xuICAgIHBpeGVsT2Zmc2V0ID0gdmVjMmYocGl4ZWxPZmZzZXQueCAqIGMgLSBwaXhlbE9mZnNldC55ICogcywgcGl4ZWxPZmZzZXQueCAqIHMgKyBwaXhlbE9mZnNldC55ICogYyk7XG4gIH1cbiAgbGV0IHBpeGVsID0gaXRlbS5wb3NpdGlvbiArIHBpeGVsT2Zmc2V0O1xuICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKHBpeGVsLnggLyBzY2VuZS5yZXNvbHV0aW9uLnggKiAyIC0gMSwgMSAtIHBpeGVsLnkgLyBzY2VuZS5yZXNvbHV0aW9uLnkgKiAyLCAwLCAxKTtcbiAgb3V0cHV0LmxvY2FsID0gbG9jYWw7XG4gIG91dHB1dC5jb2xvciA9IGl0ZW0uY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaXRlbS5nbG93O1xuICBvdXRwdXQuaW50ZW5zaXR5ID0gaXRlbS5pbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFwZSA9IGl0ZW0uc2hhcGU7XG4gIG91dHB1dC5zZWNvbmRhcnlDb2xvciA9IGl0ZW0uc2Vjb25kYXJ5Q29sb3I7XG4gIG91dHB1dC50ZXh0dXJlID0gaXRlbS50ZXh0dXJlO1xuICBvdXRwdXQucmltSW50ZW5zaXR5ID0gaXRlbS5yaW1JbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFkb3dTdHJlbmd0aCA9IGl0ZW0uc2hhZG93U3RyZW5ndGg7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgaWYgKGlucHV0LnNoYXBlID4gNy41KSB7XG4gICAgbGV0IHJhZGl1cyA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gICAgbGV0IGFuZ2xlID0gYXRhbjIoaW5wdXQubG9jYWwueSwgaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFuZ2xlIDwgaW5wdXQucmltSW50ZW5zaXR5IHx8IGFuZ2xlID4gaW5wdXQuc2hhZG93U3RyZW5ndGggfHwgcmFkaXVzID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgbGluZURpc3RhbmNlID0gYWJzKHJhZGl1cyAtIDAuNzgpO1xuICAgIGlmIChsaW5lRGlzdGFuY2UgPiAwLjE2KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTIsIDAuMDM4LCBsaW5lRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4wMjUsIDAuMTYsIGxpbmVEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcHVsc2VBID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDIzLjAgLSBzY2VuZS50aW1lICogOC41KSksIDE2LjApO1xuICAgIGxldCBwdWxzZUIgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMTEuMCArIHNjZW5lLnRpbWUgKiA1LjMgKyAxLjcpKSwgMjQuMCk7XG4gICAgbGV0IGdyYWluID0gc2luKGFuZ2xlICogNzEuMCArIHNjZW5lLnRpbWUgKiAzLjEpICogMC41ICsgMC41O1xuICAgIGxldCBzdXJnZSA9IHNtb290aHN0ZXAoMC43MiwgMC45NCwgcHVsc2VBICogMC43ICsgcHVsc2VCICogMC42NSArIGdyYWluICogMC4xMik7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuODggKyBzdXJnZSAqIDAuNjUpICsgaGFsbyAqICgwLjIyICsgc3VyZ2UgKiAwLjkpKSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogc3VyZ2UgKiAwLjkpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNi41KSB7XG4gICAgbGV0IGFsb25nID0gaW5wdXQubG9jYWwueTtcbiAgICBsZXQgYWNyb3NzID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhY3Jvc3MgPiAxLjAgfHwgYWJzKGFsb25nKSA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDgsIDAuMjQsIGFjcm9zcyk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjEyLCAxLjAsIGFjcm9zcykpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5kRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMC43MiwgMS4wLCBhYnMoYWxvbmcpKTtcbiAgICBsZXQgdHJhdmVsID0gcG93KG1heCgwLjAsIHNpbihhbG9uZyAqIDI0LjAgLSBzY2VuZS50aW1lICogOC4wICsgaW5wdXQudGV4dHVyZSkpLCAxNC4wKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC43NSArIHRyYXZlbCAqIDAuNSkgKyBoYWxvICogKDAuMiArIHRyYXZlbCAqIDAuNTUpKSAqIGVuZEZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHRyYXZlbCAqIDAuNzUpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNS41KSB7XG4gICAgLy8gUGVudGFnb24gU0RGXG4gICAgLy8gbG9jYWwgaXMgaW4gWy0xLCAxXSByYW5nZS4gTGV0J3MgZmluZCBwZW50YWdvbiBkaXN0YW5jZS5cbiAgICBsZXQgcHggPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgbGV0IHB5ID0gaW5wdXQubG9jYWwueTtcbiAgICAvLyBQZW50YWdvbiBjb25zdGFudHMgZm9yIHZlcnRpY2VzL2VkZ2VzXG4gICAgbGV0IGsgPSB2ZWMzZigtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAxLjM3NjM4MTkyKTsgLy8gY29zL3NpbiBvZiA3MiwgcGx1cyBoZWlnaHQgZmFjdG9yXG4gICAgLy8gUHJvamVjdC9NaXJyb3IgYWNyb3NzIHRoZSBzeW1tZXRyeSBheGVzIG9mIHJlZ3VsYXIgcGVudGFnb25cbiAgICB2YXIgcCA9IHZlYzJmKHB4LCBweSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZigtay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZigtay54LCBrLnkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZihrLngsIGsueSk7XG4gICAgcC54ID0gcC54IC0gY2xhbXAocC54LCAtay56ICogMC41LCBrLnogKiAwLjUpO1xuICAgIGxldCBkID0gbGVuZ3RoKHAgLSB2ZWMyZigwLCAwLjcyKSkgKiBzaWduKHAueSAtIDAuNzIpO1xuICAgIC8vIE1hcCBkIHRvIGEgbm9ybWFsaXplZCByYWRpdXMgc2NhbGVcbiAgICBsZXQgc2NhbGVEID0gZCArIDAuMzU7IC8vIG9mZnNldCBwZW50YWdvbiB0byBmaXQgYm91bmRzIG5pY2VseVxuICAgIGlmIChzY2FsZUQgPiAwLjgpIHsgZGlzY2FyZDsgfVxuICAgIFxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC41LCAwLjY1LCBzY2FsZUQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNDUsIDAuNTMsIHNjYWxlRCkgKiAoMSAtIHNtb290aHN0ZXAoMC42NSwgMC43NSwgc2NhbGVEKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgtMC4yLCAwLjUsIHNjYWxlRCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC41NSwgMC44LCBzY2FsZUQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzggKyBib3JkZXIgKiAxLjM1O1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC41KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNzUgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC40NSkgKiBmaWxsICogMC4zNTtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC40O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA0LjUpIHtcbiAgICBsZXQgZCA9IGFicyhpbnB1dC5sb2NhbC54KSArIGFicyhpbnB1dC5sb2NhbC55KTtcbiAgICBpZiAoZCA+IDEuMDgpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC43OCwgMC45MiwgZCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC43MiwgMC44MiwgZCkgKiAoMSAtIHNtb290aHN0ZXAoMC45MiwgMS4wMiwgZCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoMC4wLCAwLjc4LCBkKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjgyLCAxLjA4LCBkKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM1ICsgYm9yZGVyICogMS4yO1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjYgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC41KSAqIGZpbGwgKiAwLjM4O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM1O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAxLjUpIHtcbiAgICBsZXQgcjIgPSBkb3QoaW5wdXQubG9jYWwsIGlucHV0LmxvY2FsKTtcbiAgICBpZiAocjIgPiAxKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgeiA9IHNxcnQobWF4KDAsIDEgLSByMikpO1xuICAgIGxldCBub3JtYWwgPSBub3JtYWxpemUodmVjM2YoaW5wdXQubG9jYWwueCwgLWlucHV0LmxvY2FsLnksIHopKTtcbiAgICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLTAuNTUsIC0wLjcsIDAuOSkpO1xuICAgIGxldCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCk7XG4gICAgbGV0IHJpbSA9IHBvdygxIC0geiwgMi4yKSAqIGlucHV0LnJpbUludGVuc2l0eTtcbiAgICBsZXQgc2hhZG93ID0gbWl4KDEgLSBpbnB1dC5zaGFkb3dTdHJlbmd0aCwgMSwgc21vb3Roc3RlcCgtMC42NSwgMC40NSwgZG90KG5vcm1hbC54eSwgbGlnaHQueHkpKSk7XG4gICAgbGV0IGdyYWluID0gc2luKGlucHV0LmxvY2FsLnggKiAyMyArIGlucHV0LmxvY2FsLnkgKiAxNykgKiBzaW4oaW5wdXQubG9jYWwueSAqIDMxIC0gaW5wdXQubG9jYWwueCAqIDExKTtcbiAgICBsZXQgdGV4dHVyZSA9IDEgKyBncmFpbiAqIGlucHV0LnRleHR1cmUgKiAwLjIyO1xuICAgIGxldCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0LCBub3JtYWwpLCB2ZWMzZigwLDAsMSkpLCAwKSwgMjgpICogMS44O1xuICAgIGxldCBib2R5ID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBkaWZmdXNlICogMC44ICsgMC4yKSAqIHNoYWRvdyAqIHRleHR1cmU7XG4gICAgbGV0IGhhbG8gPSBwb3cobWF4KDAsIDEgLSBsZW5ndGgoaW5wdXQubG9jYWwpKSwgMC4zNSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCByZ2IgPSBib2R5ICogKDAuMzggKyBkaWZmdXNlICogMC45NSkgKyBpbnB1dC5jb2xvci5yZ2IgKiByaW0gKyB2ZWMzZihzcGVjdWxhcikgKyBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IgKiBpbnB1dC5pbnRlbnNpdHksIDEpO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDMuNSkge1xuICAgIGxldCBheGlzID0gbWluKGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgICBsZXQgYXJtID0gMSAtIHNtb290aHN0ZXAoMC4wNCwgMC4xOCwgYXhpcyk7XG4gICAgbGV0IGZhZGUgPSAxIC0gc21vb3Roc3RlcCgwLjIsIDEsIG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSkpO1xuICAgIGxldCBlbmVyZ3kgPSBhcm0gKiBmYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGFybSkgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMi41KSB7XG4gICAgbGV0IHJpbmdEaXN0YW5jZSA9IGFicyhsZW5ndGgoaW5wdXQubG9jYWwpIC0gMC42Mik7XG4gICAgbGV0IHJpbmcgPSAxIC0gc21vb3Roc3RlcCgwLjA1NSwgMC4xOCwgcmluZ0Rpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjEyLCAwLjQyLCByaW5nRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZXJneSA9IChyaW5nICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIHJpbmcpICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMC41KSB7XG4gICAgZGlzdGFuY2UgPSBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICB9XG4gIGxldCBjb3JlID0gMSAtIHNtb290aHN0ZXAoMC4zOCwgMC43NiwgZGlzdGFuY2UpO1xuICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjMsIDEsIGRpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICBsZXQgZW5lcmd5ID0gKGNvcmUgKyBoYWxvICogMC41NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gIGxldCBjaHJvbWF0aWNDb3JlID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBwb3cobWF4KGNvcmUsIDApLCAyKSk7XG4gIGxldCByYXcgPSBjaHJvbWF0aWNDb3JlICogKGNvcmUgKiAxLjA1ICsgaGFsbyAqIDAuNDIpO1xuICBsZXQgcmdiID0gcmF3IC8gKHZlYzNmKDEpICsgcmF3ICogMC4zMik7XG4gIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xufVxuYDtcblxuZnVuY3Rpb24gcmdiYShoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdmFsdWUgPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGlmICghL15bMC05YS1mXXs2fSQvaS50ZXN0KHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzaXgtZGlnaXQgaGV4IGNvbG9yLCByZWNlaXZlZCBcIiR7aGV4fVwiLmApO1xuICByZXR1cm4gW1xuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgwLCAyKSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgyLCA0KSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSg0LCA2KSwgMTYpIC8gMjU1LFxuICAgIDEsXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjcHJpbWl0aXZlQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDogeyBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LCBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9IH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogbWF4UHJpbWl0aXZlcyAqIGZsb2F0c1BlclByaW1pdGl2ZSAqIDQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuICAgIHRoaXMuI2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH0sXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNwcmltaXRpdmVCdWZmZXIgfSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvblByaW1pdGl2ZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5LlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjYW52YXMgY291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIocHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdLCB0aW1lU2Vjb25kcyA9IDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmlzaWJsZSA9IHByaW1pdGl2ZXMuc2xpY2UoMCwgbWF4UHJpbWl0aXZlcyk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmlzaWJsZS5sZW5ndGggKiBmbG9hdHNQZXJQcmltaXRpdmUpO1xuICAgIHZpc2libGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyUHJpbWl0aXZlO1xuICAgICAgZGF0YS5zZXQoW1xuICAgICAgICBpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQgPz8gaXRlbS53aWR0aCxcbiAgICAgICAgLi4ucmdiYShpdGVtLmNvbG9yKSxcbiAgICAgICAgLi4ucmdiYShpdGVtLnNlY29uZGFyeUNvbG9yID8/IGl0ZW0uY29sb3IpLFxuICAgICAgICBpdGVtLmdsb3cgPz8gMC41LFxuICAgICAgICBpdGVtLmludGVuc2l0eSA/PyAxLFxuICAgICAgICBpdGVtLnNoYXBlID09PSBcImFyY1wiID8gOCA6IGl0ZW0uc2hhcGUgPT09IFwibGluZVwiID8gNyA6IGl0ZW0uc2hhcGUgPT09IFwicGVudGFnb25cIiA/IDYgOiBpdGVtLnNoYXBlID09PSBcImRpYW1vbmRcIiA/IDUgOiBpdGVtLnNoYXBlID09PSBcInNwYXJrXCIgPyA0IDogaXRlbS5zaGFwZSA9PT0gXCJyaW5nXCIgPyAzIDogaXRlbS5zaGFwZSA9PT0gXCJvcmJcIiA/IDIgOiBpdGVtLnNoYXBlID09PSBcImJvbHRcIiA/IDEgOiAwLFxuICAgICAgICBpdGVtLnJvdGF0aW9uID8/IGl0ZW0udGV4dHVyZSA/PyAwLFxuICAgICAgICBpdGVtLmFyY1N0YXJ0ID8/IGl0ZW0ucmltSW50ZW5zaXR5ID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjRW5kID8/IGl0ZW0uc2hhZG93U3RyZW5ndGggPz8gMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgIF0sIG9mZnNldCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHZpc2libGUubGVuZ3RoLCB0aW1lU2Vjb25kc10pKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLjAwNiwgZzogMC4wMDksIGI6IDAuMDI1LCBhOiAxIH0sXG4gICAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICB9XSxcbiAgICB9KTtcbiAgICBpZiAodmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZEdyb3VwKTtcbiAgICAgIHBhc3MuZHJhdyg2LCB2aXNpYmxlLmxlbmd0aCk7XG4gICAgfVxuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIsIHR5cGUgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNoYXBlIGV4dGVuZHMgT21pdDxOZW9uU2hhcGVJbnN0YW5jZSwgXCJ4XCIgfCBcInlcIiB8IFwic2NhbGVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2NlbmUge1xuICBwcmltaXRpdmVzPzogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdO1xuICBzaGFwZXM/OiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI3ByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVSZW5kZXJlcjtcbiAgI3NoYXBlczogTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI7XG4gICN3aWR0aDogbnVtYmVyO1xuICAjaGVpZ2h0OiBudW1iZXI7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0OyB0aGlzLiN3aWR0aCA9IHdpZHRoOyB0aGlzLiNoZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jcHJpbWl0aXZlcyA9IG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jc2hhcGVzID0gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogUHJvbWlzZTxOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkgdG9wLWRvd24gc2NlbmVzLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0LCBsb2dpY2FsV2lkdGgsIGxvZ2ljYWxIZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNjZW5lOiBOZW9uVG9wRG93blNjZW5lLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy4jcHJpbWl0aXZlcy5yZW5kZXIoWy4uLihzY2VuZS5wcmltaXRpdmVzID8/IFtdKV0sIHRpbWVTZWNvbmRzLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICBjb25zdCBhc3BlY3QgPSB0aGlzLiN3aWR0aCAvIHRoaXMuI2hlaWdodDtcbiAgICB0aGlzLiNzaGFwZXMucmVuZGVyKChzY2VuZS5zaGFwZXMgPz8gW10pLm1hcChzaGFwZSA9PiAoe1xuICAgICAgLi4uc2hhcGUsXG4gICAgICB4OiAoc2hhcGUueCAvIHRoaXMuI3dpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gc2hhcGUueSAvIHRoaXMuI2hlaWdodCkgKiAyLjUsXG4gICAgICBzY2FsZTogc2hhcGUuc2l6ZSAvIHRoaXMuI2hlaWdodCAqIDIuNSxcbiAgICB9KSksIHRydWUsIHRhcmdldCk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuI3NoYXBlcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25Ub3BEb3duU2NlbmUgfSBmcm9tIFwiLi90b3AtZG93bi1zY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclNjZW5lSWRzID0gW1wibmVvbkhhbGxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxufTtcblxuY29uc3QgaGFsbFZhbmlzaGluZ1kgPSAwLjQ2O1xuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxIb3Jpem9uV2lkdGggPSAwLjA4O1xuY29uc3QgaGFsbEZsb29yQ29sb3IgPSBcIiMwNTEwMWZcIjtcbmNvbnN0IGhhbGxEZWVwQmx1ZSA9IFwiIzEyMzU2YVwiO1xuY29uc3QgaGFsbE11dGVkQmx1ZSA9IFwiIzFiNGM4ZFwiO1xuY29uc3QgaGFsbE11dGVkQ3lhbiA9IFwiIzJhYzRkY1wiO1xuY29uc3QgaGFsbE11dGVkVmlvbGV0ID0gXCIjNDUzMDc5XCI7XG5jb25zdCBoYWxsQWNjZW50UGluayA9IFwiI2E3MzU3ZVwiO1xuY29uc3QgaGFsbEVuZXJneVNwZWVkID0gMC4wMDE3O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgc3dpdGNoIChvcHRpb25zLnNjZW5lSWQpIHtcbiAgICBjYXNlIFwibmVvbkhhbGxcIjpcbiAgICAgIHJldHVybiBjcmVhdGVOZW9uSGFsbChvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBoYWxsR2VvbWV0cnkod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkSGFsbEJhc2UocHJpbWl0aXZlcywgd2lkdGgsIGhlaWdodCwgdGltZU1zKTtcbiAgYWRkSGFsbFJhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5KTtcbiAgYWRkSGFsbENyb3NzYmFycyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRmxvb3JHbHlwaHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbFNpZGVQYW5lbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxFbmVyZ3lUcmFjZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBoYWxsR2VvbWV0cnkod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IGhlaWdodCAqIGhhbGxWYW5pc2hpbmdZIH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBob3Jpem9uWSA9IGhlaWdodCAqIGhhbGxWYW5pc2hpbmdZO1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgY29uc3QgaG9yaXpvbkhhbGYgPSB3aWR0aCAqIGhhbGxIb3Jpem9uV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogdnAueCAtIGhvcml6b25IYWxmLCB5OiBob3Jpem9uWSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB2cC54ICsgaG9yaXpvbkhhbGYsIHk6IGhvcml6b25ZIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxCYXNlKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjc2LCB3aWR0aDogd2lkdGggKiAuNSwgaGVpZ2h0OiBoZWlnaHQgKiAuNDMsIGNvbG9yOiBoYWxsRmxvb3JDb2xvciwgc2Vjb25kYXJ5Q29sb3I6IFwiIzAyMDUwZFwiLCBnbG93OiAuMDUsIGludGVuc2l0eTogLjIzLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIGhhbGxWYW5pc2hpbmdZLCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogaGFsbERlZXBCbHVlLCBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkQ3lhbiwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQ5LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogaGFsbEFjY2VudFBpbmssIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFsbFJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+KTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbERlZXBCbHVlLCAuNDgsIDYuNSk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgaGFsbE11dGVkQ3lhbiwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbE11dGVkQmx1ZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgaGFsbE11dGVkQ3lhbiwgbGFuZSA9PT0gMiA/IC4yNiA6IC4xOCwgLjkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxDcm9zc2JhcnMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiByb3cgJSA0ID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IHJvdyAlIDQgPT09IDIgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsQWNjZW50UGluaztcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgaGFsbEdlb21ldHJ5PiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGhhbGxHZW9tZXRyeT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBoYWxsR2VvbWV0cnk+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMi4wLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogbnVtYmVyO1xuICBzY29yZTogbnVtYmVyO1xuICBiYXNlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHJpbUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFkb3dDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgZ2xvdzogbnVtYmVyO1xuICBzdXJmYWNlVGV4dHVyZTogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgaGl0Rmxhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGRlYXRoRmxhc2hTY2FsZTogbnVtYmVyO1xuICBzaGFwZVpvb206IG51bWJlcjtcbiAgaW1wYWN0UmVzaXN0YW5jZTogbnVtYmVyO1xuICBleHBsb3Npb25NYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxMCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgR3VuSWQgfSBmcm9tIFwiLi9HdW5GYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbiAgc3RhcnRpbmdHdW46IEd1bklkO1xuICBzdGFydGluZ0d1bkxldmVsOiAxIHwgMiB8IDM7XG4gIHZpZXdwb3J0OiB7XG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIjtcbiAgICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICAgIGFzcGVjdEhlaWdodDogbnVtYmVyO1xuICAgIGxvZ2ljYWxXaWR0aDogbnVtYmVyO1xuICAgIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgZGVmaW5pdGlvbjogVHJhY2tEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgZGlzdGFuY2VGcm9tUGxheWVyOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5jb25zdCBpc0VuZW15ID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IGlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjazogVHJhY2tEZWZpbml0aW9uKTogUGFyc2VkVHJhY2tFbnRpdHlbXSB7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlTcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgZm9yIChjb25zdCBbc3ltYm9sLCBlbnRyeV0gb2YgT2JqZWN0LmVudHJpZXModHJhY2subGVnZW5kKSkge1xuICAgIGlmIChbLi4uc3ltYm9sXS5sZW5ndGggIT09IDEgfHwgL1xcc3xcXHwvLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQga2V5IFwiJHtzeW1ib2x9XCIgbXVzdCBiZSBvbmUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIG90aGVyIHRoYW4gXCJ8XCIuYCk7XG4gICAgfVxuICAgIGlmICghZW50cnkuaWQpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIG11c3QgaGF2ZSBhbiBpZC5gKTtcbiAgICBpZiAoZW50cnkuc3BlZWQgIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5zcGVlZCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvd3MgPSB0cmFjay5sYXlvdXRcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKHRleHQsIHNvdXJjZUluZGV4KSA9PiAoeyB0ZXh0OiB0ZXh0LnRyaW0oKSwgc291cmNlSW5kZXg6IHNvdXJjZUluZGV4ICsgMSB9KSlcbiAgICAuZmlsdGVyKHJvdyA9PiByb3cudGV4dC5sZW5ndGggPiAwKTtcblxuICBpZiAocm93cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxheW91dCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJvdy5cIik7XG5cbiAgbGV0IGxlZnRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgcmlnaHRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuXG4gIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBpcGVDb3VudCA9IFsuLi5yb3cudGV4dF0uZmlsdGVyKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgPT09IFwifFwiKS5sZW5ndGg7XG4gICAgaWYgKHBpcGVDb3VudCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gbXVzdCBjb250YWluIGV4YWN0bHkgb25lIFwifFwiIHNlcGFyYXRvcjsgZm91bmQgJHtwaXBlQ291bnR9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSByb3cudGV4dC5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIGxlZnRXaWR0aCA/Pz0gbGVmdC5sZW5ndGg7XG4gICAgcmlnaHRXaWR0aCA/Pz0gcmlnaHQubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSBsZWZ0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyBsZWZ0IHdpZHRoICR7bGVmdC5sZW5ndGh9OyBleHBlY3RlZCAke2xlZnRXaWR0aH0uYCk7XG4gICAgfVxuICAgIGlmIChyaWdodC5sZW5ndGggIT09IHJpZ2h0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyByaWdodCB3aWR0aCAke3JpZ2h0Lmxlbmd0aH07IGV4cGVjdGVkICR7cmlnaHRXaWR0aH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzdGFuY2VGcm9tUGxheWVyID0gcm93cy5sZW5ndGggLSAxIC0gcm93SW5kZXg7XG4gICAgZm9yIChjb25zdCBbc2lkZSwgbGFuZV0gb2YgW1tcImxlZnRcIiwgbGVmdF0sIFtcInJpZ2h0XCIsIHJpZ2h0XV0gYXMgY29uc3QpIHtcbiAgICAgIFsuLi5sYW5lXS5mb3JFYWNoKChzeW1ib2wsIGxhbmVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHRyYWNrLmxlZ2VuZFtzeW1ib2xdO1xuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gdXNlcyBzeW1ib2wgXCIke3N5bWJvbH1cIiBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgaXMgbWlzc2luZyBmcm9tIHRoZSBsZWdlbmQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LmlkID09PSBcImVtcHR5XCIpIHJldHVybjtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGRpc3RhbmNlRnJvbVBsYXllcixcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IChlbnRyeS5zcGVlZCA/PyAxKSAqIChpc0VuZW15KGVudHJ5LmlkKSA/IHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA6IDEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+XG4gICAgYS5kaXN0YW5jZUZyb21QbGF5ZXIgLSBiLmRpc3RhbmNlRnJvbVBsYXllciB8fFxuICAgIGEucm93SW5kZXggLSBiLnJvd0luZGV4IHx8XG4gICAgYS5zaWRlLmxvY2FsZUNvbXBhcmUoYi5zaWRlKSB8fFxuICAgIGEubGFuZUluZGV4IC0gYi5sYW5lSW5kZXgpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDE6IEZpcnN0IEdsb3dcIixcclxuICBkZXNjcmlwdGlvbjogXCJBIGdlbnRsZSBvbmJvYXJkaW5nIHJ1bjogZWFybHkgdGVuc2lvbiwgYSBxdWljayBwb3dlci11cCBiZWF0LCB0aGVuIGVhc3kgZXNjYWxhdGluZyB3YXZlcyBmb3IgYSBmaXJzdC10aW1lIHBsYXllci5cIixcclxuICBkdXJhdGlvblNlY29uZHM6IDI1LFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uUy4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMC43NSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgfSxcclxuICAgIGJhbGFuY2U6IHtcclxuICAgICAgZW5lbXlIcDogMS4wLFxyXG4gICAgICBlbmVteVNwZWVkOiAxLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xyXG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMjogTmVvbiBXYWtlXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHNlY29uZCBvbmJvYXJkaW5nIHJ1bjogYSBzbGlnaHRseSBkZW5zZXIgb3BlbmluZywgZWFybHkgcmVjb3ZlcnkgcGlja3VwcywgYW5kIGEgZ2VudGxlIGZpbmFsZSB0aGF0IHRlYWNoZXMgdGhlIHBsYXllciB0byB0cnVzdCB0aGVpciBncm93aW5nIHNxdWFkLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMzAsXHJcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcclxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgYXNwZWN0V2lkdGg6IDksXHJcbiAgICBhc3BlY3RIZWlnaHQ6IDE2LFxyXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXHJcbiAgICBsb2dpY2FsSGVpZ2h0OiA4MDAsXHJcbiAgfSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5HLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLlMuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLmEuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMC43NSB9LFxyXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXHJcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgIH0sXHJcbiAgICBiYWxhbmNlOiB7XHJcbiAgICAgIGVuZW15SHA6IDEuMCxcclxuICAgICAgZW5lbXlTcGVlZDogMC45NSxcclxuICAgIH0sXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XHJcbiAgbGFiZWw6IFwiTGV2ZWwgMzogUHJpc20gUHJlc3N1cmVcIixcclxuICBkZXNjcmlwdGlvbjogXCJUaGUgdGhpcmQgb25ib2FyZGluZyBydW4gc3RyZXRjaGVzIHRoZSBwbGF5ZXJcdTIwMTlzIGVuZHVyYW5jZSB3aXRoIGxvbmdlciBwYWNpbmcsIHNhZmVyIHVwZ3JhZGUgd2luZG93cywgYW5kIGRlbnNlciBidXQgc3RpbGwgZm9yZ2l2aW5nIGVuZW15IHBhdHRlcm5zLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogNjAsXHJcbiAgc3RhcnRpbmdHdW46IFwicHVsc2VQaXN0b2xcIixcclxuICBzdGFydGluZ0d1bkxldmVsOiAxLFxyXG4gIHZpZXdwb3J0OiB7XHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgYXNwZWN0V2lkdGg6IDksXHJcbiAgICBhc3BlY3RIZWlnaHQ6IDE2LFxyXG4gICAgbG9naWNhbFdpZHRoOiA0NTAsXHJcbiAgICBsb2dpY2FsSGVpZ2h0OiA4MDAsXHJcbiAgfSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcclxuICAgIGxheW91dDogYFxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG4uRS4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5HLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uMi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5TLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLi5hLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5JLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4uLmIgfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkouLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uUy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLkUuRS5cclxuLi5QLi4gfCAuLi4uLlxyXG5gLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcclxuICAgICAgXCJQXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcclxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxyXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOCB9LFxyXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMC43NSB9LFxyXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODUgfSxcclxuICAgICAgXCJKXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcImJcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgfSxcclxuICAgIGJhbGFuY2U6IHtcclxuICAgICAgZW5lbXlIcDogMS4wLFxyXG4gICAgICBlbmVteVNwZWVkOiAxLjAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xyXG4gIGxhYmVsOiBcIkxldmVsIDQ6IFZpb2xldCBTdXJnZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBmb3VydGggcnVuIGRvdWJsZXMgdGhlIGVuZHVyYW5jZSB0ZXN0IGFnYWluLCBhZGRpbmcgZGVuc2VyIHdhdmVzLCBiaWdnZXIgcGlja3VwIHRpbWluZyBkZWNpc2lvbnMsIGFuZCBoaWdoZXItdGllciB0b29scyB3aGlsZSBzdGF5aW5nIHJlYWRhYmxlIGFuZCBmYWlyLlwiLFxyXG4gIGR1cmF0aW9uU2Vjb25kczogMTIwLFxyXG4gIHN0YXJ0aW5nR3VuOiBcInB1bHNlUGlzdG9sXCIsXHJcbiAgc3RhcnRpbmdHdW5MZXZlbDogMSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIGFzcGVjdFdpZHRoOiA5LFxyXG4gICAgYXNwZWN0SGVpZ2h0OiAxNixcclxuICAgIGxvZ2ljYWxXaWR0aDogNDUwLFxyXG4gICAgbG9naWNhbEhlaWdodDogODAwLFxyXG4gIH0sXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XHJcbiAgICBsYXlvdXQ6IGBcclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FLi5cclxuLkUuLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC5FLi4uXHJcbi4uRy4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLjIuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG5TLi4uLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi4uYS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uSS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLjIuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuLkUuLlxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uLi5iIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uRS5FLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5KLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi5FLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLlMuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuLkUuLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLksuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG5FRUUuLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi5FRUVcclxuLkUuRS4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uWC4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi4uLmMgfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbkVFRS4uIHwgLi5FLi5cclxuLi4uLi4gfCAuLkVFRVxyXG4uRS5FLiB8IC4uLi4uXHJcbi4uLi4uIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uMi4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLi4uLlxyXG4uRS5FLiB8IC5FLkUuXHJcbi4uRS4uIHwgLi4uLi5cclxuLi4uLi4gfCAuLkUuLlxyXG5FRUUuLiB8IC5FLkUuXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5KLi4gfCAuLi4uLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLkUuRS5cclxuLi5FLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi5FLkUuIHwgLi5FRUVcclxuLi4uLi4gfCAuLi4uLlxyXG4uLlguLiB8IC4uLi4uXHJcbi4uLi4uIHwgLi4uLi5cclxuRUVFLi4gfCAuLkUuLlxyXG4uLi4uLiB8IC5FLkUuXHJcbi5FLkUuIHwgLkUuRS5cclxuLi4uLi4gfCAuLi4uLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi5FLkUuIHwgLi4uLi5cclxuLi4uLi4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLkUuRS4gfCAuRS5FLlxyXG4uLkUuLiB8IC4uRS4uXHJcbi4uLi4uIHwgLi4uLi5cclxuLi5FLi4gfCAuRS5FLlxyXG4uLi4uLiB8IC4uLi4uXHJcbi4uUC4uIHwgLi4uLi5cclxuYCxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXHJcbiAgICAgIFwiUFwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXHJcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcclxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJHXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIiwgc3BlZWQ6IDAuNzUgfSxcclxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg1IH0sXHJcbiAgICAgIFwiSlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCIsIHNwZWVkOiAwLjkgfSxcclxuICAgICAgXCJLXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiLCBzcGVlZDogMC45NSB9LFxyXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjggfSxcclxuICAgICAgXCJYXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIiwgc3BlZWQ6IDAuOTUgfSxcclxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC44NSB9LFxyXG4gICAgICBcImJcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIiwgc3BlZWQ6IDAuOSB9LFxyXG4gICAgICBcImNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLm5lZWRsZVJhcGllclwiLCBzcGVlZDogMC45NSB9LFxyXG4gICAgfSxcclxuICAgIGJhbGFuY2U6IHtcclxuICAgICAgZW5lbXlIcDogMS4wLFxyXG4gICAgICBlbmVteVNwZWVkOiAxLjA1LFxyXG4gICAgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayB9IGZyb20gXCIuL1RyYWNrMVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgZ2VuZXJhdGVkVHJhY2syIH0gZnJvbSBcIi4vVHJhY2syXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBnZW5lcmF0ZWRUcmFjazMgfSBmcm9tIFwiLi9UcmFjazNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGdlbmVyYXRlZFRyYWNrNCB9IGZyb20gXCIuL1RyYWNrNFwiO1xuLy8gUmVnaXN0ZXIgYSB0cmFjayBieSBpbXBvcnRpbmcgaXQgYW5kIGFkZGluZyBvbmUgZW50cnkgaGVyZS5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSB7XG4gXG4gIFwidHJhY2sxXCI6IGdlbmVyYXRlZFRyYWNrLFxuICBcInRyYWNrMlwiOiBnZW5lcmF0ZWRUcmFjazIsXG4gIFwidHJhY2szXCI6IGdlbmVyYXRlZFRyYWNrMyxcbiAgXCJ0cmFjazRcIjogZ2VuZXJhdGVkVHJhY2s0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHsgZ2VuZXJhdGVkVHJhY2ssIGdlbmVyYXRlZFRyYWNrMiwgZ2VuZXJhdGVkVHJhY2szLCBnZW5lcmF0ZWRUcmFjazQgfTsgXG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyB0cmFja3MgfSBmcm9tIFwiLi90cmFja3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJ0cmFja1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiVHJhY2tcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHRyYWNrcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2suZHVyYXRpb25TZWNvbmRzID4gMCwgYCR7aWR9IGR1cmF0aW9uIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodHJhY2sudmlld3BvcnQub3JpZW50YXRpb24gPT09IFwicG9ydHJhaXRcIiAmJiB0cmFjay52aWV3cG9ydC5hc3BlY3RIZWlnaHQgPiB0cmFjay52aWV3cG9ydC5hc3BlY3RXaWR0aCwgYCR7aWR9IG11c3QgdXNlIGl0cyBkZWNsYXJlZCBwb3J0cmFpdCB2aWV3cG9ydC5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0cmFjay52aWV3cG9ydC5sb2dpY2FsV2lkdGggPiAwICYmIHRyYWNrLnZpZXdwb3J0LmxvZ2ljYWxIZWlnaHQgPiAwLCBgJHtpZH0gbG9naWNhbCB2aWV3cG9ydCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZCh0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aXBsaWVyTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3F1YWRBZGRlZDogbnVtYmVyO1xuICBtYXhTcXVhZFNpemU6IG51bWJlcjtcbiAgbWVtYmVyc1BlclJvdzogbnVtYmVyO1xuICBtZW1iZXJSYWRpdXM6IG51bWJlcjtcbiAgc3BhY2luZzogbnVtYmVyO1xuICBwaWNrdXBDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwdWxzZVJhdGU6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNxdWFkIE11bHRpcGxpZXJcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBzcXVhZFBsdXNPbmU6IHtcbiAgICAgIGxhYmVsOiBcIisxIFdpbmdtYXRlXCIsXG4gICAgICBzcXVhZEFkZGVkOiAxLFxuICAgICAgbWF4U3F1YWRTaXplOiAxMCxcbiAgICAgIG1lbWJlcnNQZXJSb3c6IDUsXG4gICAgICBtZW1iZXJSYWRpdXM6IDUuMjUsXG4gICAgICBzcGFjaW5nOiAyOSxcbiAgICAgIHBpY2t1cENvbG9yOiBcImdvbGRcIixcbiAgICAgIGNvcmVDb2xvcjogXCJjeWFuXCIsXG4gICAgICBwdWxzZVJhdGU6IDIuMixcbiAgICAgIHBpY2t1cFNoYXBlWm9vbTogMy4xLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLnNxdWFkQWRkZWQgPiAwLCBgJHtpZH0gbXVzdCBhZGQgc3F1YWQgbWVtYmVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1heFNxdWFkU2l6ZSA+PSBpdGVtLm1lbWJlcnNQZXJSb3csIGAke2lkfSBtYXggc3F1YWQgbXVzdCBmaXQgYXQgbGVhc3Qgb25lIHJvdy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLm1lbWJlclJhZGl1cyA+IDAgJiYgaXRlbS5zcGFjaW5nID4gaXRlbS5tZW1iZXJSYWRpdXMgKiAyLCBgJHtpZH0gbWVtYmVyIGdlb21ldHJ5IG92ZXJsYXBzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2l0ZW0ucGlja3VwQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwaWNrdXAgY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsaWVyRmFtaWx5ID0gbmV3IE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBNdWx0aXBsaWVySWQgPSBrZXlvZiB0eXBlb2YgbXVsdGlwbGllckZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNoaWVsZE9yYml0ZXJTaGFwZSA9IFwiZG90XCIgfCBcImhleFwiO1xuZXhwb3J0IHR5cGUgU2hpZWxkTW9kZSA9IFwiY2hhcmdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInNoaWVsZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgbW9kZTogU2hpZWxkTW9kZTtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKiBCYXNpYyBzaGllbGQgc3RyZW5ndGguIEVuZW15IEhQIGlzIHN1YnRyYWN0ZWQgZnJvbSB0aGlzIHZhbHVlLiAqL1xuICBtYXhDaGFyZ2VzOiBudW1iZXI7XG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiAwO1xuICBwdXNoRGlzdGFuY2U6IDA7XG4gIHNsb3dNdWx0aXBsaWVyOiAxO1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgb3JiaXRlclNoYXBlOiBTaGllbGRPcmJpdGVyU2hhcGU7XG4gIG9yYml0ZXJDb3VudDogbnVtYmVyO1xuICBvcmJpdGVyU3BlZWQ6IG51bWJlcjtcbiAgb3JiaXRlclNpemU6IG51bWJlcjtcbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNoaWVsZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInNoaWVsZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU2hpZWxkXCI7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBsaWdodEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJMaWdodCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogOCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMSxcbiAgICAgIG9yYml0ZXJTaXplOiA0LjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkxpZ2h0d2VpZ2h0IHNoaWVsZCB3aXRoIHR3byBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBzYXRlbGxpdGVHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiU2F0ZWxsaXRlIEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEwLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDYsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNzUsXG4gICAgICBvcmJpdGVyU2l6ZTogNC43NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiQmFsYW5jZWQgc2hpZWxkIHdpdGggZm91ciBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgICBoZXhHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiSGV4IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgbWF4Q2hhcmdlczogNyxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTIsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJnb2xkXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiaGV4XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDgsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDAuNDUsXG4gICAgICBvcmJpdGVyU2l6ZTogNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgc2hpZWxkIHdpdGggc2V2ZW4gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFNoaWVsZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc2hpZWxkXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1vZGUgPT09IFwiY2hhcmdlXCIsIGAke2lkfSBtdXN0IHVzZSB0aGUgc2hhcmVkIGNoYXJnZSBiZWhhdmlvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQucmFkaXVzID4gMCwgYCR7aWR9IHJhZGl1cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tYXhDaGFyZ2VzID4gMCwgYCR7aWR9IHN0cmVuZ3RoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJDb3VudCA+IDAsIGAke2lkfSBtdXN0IGhhdmUgb3JiaXRlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm9yYml0ZXJTcGVlZCA+PSAwLCBgJHtpZH0gb3JiaXRlclNwZWVkIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoaWVsZEZhbWlseSA9IG5ldyBTaGllbGRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTaGllbGRJZCA9IGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBIb3cgdGhlIHN3b3JkIHNlbGVjdHMgdGFyZ2V0cyBmcm9tIHRoZSBuZWFyYnkgdGhyZWF0IHBvb2wuXG4gKiBBbGwgbW9kZXMgYXJlIGxhbmUtYXdhcmUgdmlhIHRoZSBOZWFyYnlUaHJlYXRRdWVyeSBtb2R1bGUuXG4gKi9cbmV4cG9ydCB0eXBlIFN3b3JkVGFyZ2V0aW5nTW9kZSA9XG4gIHwgXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiICAgLy8gY2xvc2VzdCBlbmVteSBpbiB0aGUgcGxheWVyJ3MgYWN0aXZlIGxhbmVcbiAgfCBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIiAgICAvLyBjbG9zZXN0IGVuZW15IHJlZ2FyZGxlc3Mgb2YgbGFuZVxuICB8IFwiZnJvbnRNb3N0VGhyZWF0XCIgICAgICAgIC8vIGZhcnRoZXN0LWFkdmFuY2VkIChoaWdoZXN0IHkpIGVuZW15IGluIHJhbmdlXG4gIHwgXCJjbHVzdGVyTmVhclBsYXllclwiOyAgICAgLy8gcGlja3MgdXAgdG8gbWF4VGFyZ2V0cyBlbmVtaWVzIHdpdGhpbiByZWFjaFxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInN3b3JkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICAvKipcbiAgICogQXR0YWNrIHJhbmdlIGluIHBpeGVscyAoYXQgc2NhbGUgMSkuXG4gICAqIFN3b3JkIG9ubHkgc3dpbmdzIHdoZW4gYW4gZW5lbXkgZW50ZXJzIHRoaXMgcmFkaXVzLlxuICAgKi9cbiAgcmFuZ2U6IG51bWJlcjtcbiAgLyoqXG4gICAqIEFuZ3VsYXIgd2lkdGggb2YgdGhlIHNsYXNoIGFyYyBpbiBkZWdyZWVzLlxuICAgKiBXaWRlciA9IGhlYXZpZXIsIGhpdHMgbW9yZSBlbmVtaWVzIHBlciBzd2luZy5cbiAgICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIERhbWFnZSBwZXIgaGl0LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIENvb2xkb3duIGJldHdlZW4gc3dpbmdzIGluIHNlY29uZHMuIFN3b3JkcyBkbyBOT1QgZmlyZSBvbiBhIHRpbWVyIFx1MjAxNCBvbmx5IHdoZW4gYSB0YXJnZXQgZXhpc3RzLiAqL1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgLyoqIE1heGltdW0gdGFyZ2V0cyBoaXQgcGVyIHN3aW5nLiAqL1xuICBtYXhUYXJnZXRzOiBudW1iZXI7XG4gIC8qKiBMYW5lLWF3YXJlIHRhcmdldCBzZWxlY3Rpb24gbW9kZS4gKi9cbiAgdGFyZ2V0aW5nTW9kZTogU3dvcmRUYXJnZXRpbmdNb2RlO1xuICAvKiogVmlzdWFsIHNsYXNoIGFyYyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuICovXG4gIHNsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogUHJpbWFyeSBzbGFzaCBjb2xvci4gKi9cbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIC8qKiBWaXN1YWwgdGhpY2tuZXNzIG11bHRpcGxpZXIgZm9yIHRoZSBzaGFyZWQgc3dvcmQgdHJhaWwuIDEuMCA9IGRlZmF1bHQuICovXG4gIHNsYXNoVGhpY2tuZXNzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBkZXNpZ24gbm90ZXMuIE5vdCB1c2VkIGJ5IHJ1bnRpbWUgXHUyMDE0IGRvY3VtZW50cyBpbnRlbnQgZm9yIGZ1dHVyZSBhZ2VudHMuXG4gICAqL1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZhbWlseSBkZWZpbml0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzd29yZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3dvcmRcIjtcblxuICAvKipcbiAgICogRmFtaWx5LWxldmVsIGltcGxlbWVudGF0aW9uIG5vdGVzOlxuICAgKiAtIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZXkgc3dpbmcgb25seSB3aGVuIGEgdmFsaWQgdGFyZ2V0XG4gICAqICAgaXMgd2l0aGluIHJhbmdlIGFuZCBjb29sZG93biBpcyByZWFkeS4gVGhleSBpZGxlIHNpbGVudGx5IG90aGVyd2lzZS5cbiAgICogLSBPbmUgYWN0aXZlIHN3b3JkIHBlciBwbGF5ZXIgKGZhbWlseS1zY29wZWQgZXhjbHVzaXZpdHkpLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgXHUyMDE0IENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogSGl0cyAxXHUyMDEzMiBlbmVtaWVzIGRlcGVuZGluZyBvbiBhcmMgb3ZlcmxhcC4gU2hvcnQgY29vbGRvd24uXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC44NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwXHUyMDEzMTgwbXMgZmVlbC4gRmFkaW5nIGFmdGVyaW1hZ2UuIExpa2UgYSB3aGlwLWxpa2Uga2F0YW5hIGFyYy5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXZlciBcdTIwMTQgSGVhdnkgc3dvcmQuIFNsb3dlciBidXQgaGl0cyBtdWx0aXBsZSBjbHVzdGVyZWQgZW5lbWllcy5cbiAgICAgKiBXaWRlIGFyYywgdGhpY2tlciBzbGFzaC4gQmV0dGVyIGFnYWluc3QgdGlnaHQgZ3JvdXBzIHRoYW4gZmFzdCBzaW5nbGVzLlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDU2LFxuICAgICAgYXJjRGVncmVlczogMTEwLFxuICAgICAgZGFtYWdlOiAyLjgsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuOCxcbiAgICAgIG1heFRhcmdldHM6IDQsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImNsdXN0ZXJOZWFyUGxheWVyXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDIyMCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuNjUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IGFuZCB3aWRlLiBUaGlja2VyIGFyYy4gU3Ryb25nZXIgaW1wYWN0IGZsYXNoLiBHZW9tZXRyaWMgYW5kIHByb2NlZHVyYWwgXHUyMDE0IG5vdCBhIGJ1bGxldC5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmVlZGxlIFJhcGllciBcdTIwMTQgUHJlY2lzaW9uIHN3b3JkLiBMb25nIHJlYWNoLCBuYXJyb3cgYXJjLCBzaW5nbGUgdGFyZ2V0LlxuICAgICAqIFByaW9yaXRpemVzIHRoZSBtb3N0IGRhbmdlcm91cyAoZnJvbnQtbW9zdCkgZW5lbXkuXG4gICAgICovXG4gICAgbmVlZGxlUmFwaWVyOiB7XG4gICAgICBsYWJlbDogXCJOZWVkbGUgUmFwaWVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDcwLFxuICAgICAgYXJjRGVncmVlczogMzAsXG4gICAgICBkYW1hZ2U6IDIuMixcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMS4xLFxuICAgICAgbWF4VGFyZ2V0czogMSxcbiAgICAgIHRhcmdldGluZ01vZGU6IFwiZnJvbnRNb3N0VGhyZWF0XCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMC41NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRWxlZ2FudCBhbmQgcHJlY2lzZS4gVGhpbiBzdGFiYmluZyBsaW5lLiBOb3QgYSBndW4gc2hvdCBcdTIwMTQgaXQgbXVzdCBmZWVsIG1lbGVlLiBTaW5nbGUgdGFyZ2V0IHByaW9yaXR5LlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gc2xhc2hEdXJhdGlvbk1zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hUaGlja25lc3MgPiAwLCBgJHtpZH0gc2xhc2hUaGlja25lc3MgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzd29yZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3dvcmRGYW1pbHkgPSBuZXcgU3dvcmRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTd29yZElkID0ga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTcXVhZElucHV0Q2FsbGJhY2tzIHtcbiAgbGFuZSgpOiAwIHwgMTtcbiAgc2V0TGFuZShsYW5lOiAwIHwgMSk6IHZvaWQ7XG4gIHNldEFpbSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcbiAgcmVsZWFzZUFpbSgpOiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZFNxdWFkSW5wdXQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGpveXN0aWNrOiBzdHJpbmcsXG4gIGNhbGxiYWNrczogU3F1YWRJbnB1dENhbGxiYWNrcyxcbik6IHZvaWQge1xuICBsZXQgcG9pbnRlcklkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgbGV0IHBvaW50ZXJTdGFydGVkWCA9IDA7XG4gIGxldCBwb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgY29uc3QgYXBwbHlQb2ludGVyID0gKGNsaWVudFg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJvdW5kcyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBub3JtYWxpemVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGNsaWVudFggLSBib3VuZHMubGVmdCkgLyBib3VuZHMud2lkdGgpKTtcbiAgICBjb25zdCBsYW5lOiAwIHwgMSA9IG5vcm1hbGl6ZWQgPCAuNSA/IDAgOiAxO1xuICAgIGlmIChsYW5lICE9PSBjYWxsYmFja3MubGFuZSgpKSBjYWxsYmFja3Muc2V0TGFuZShsYW5lKTtcbiAgICBjb25zdCBsYW5lU3RhcnQgPSBsYW5lID09PSAwID8gMCA6IC41O1xuICAgIGNvbnN0IHdpdGhpbkxhbmUgPSAobm9ybWFsaXplZCAtIGxhbmVTdGFydCkgLyAuNTtcbiAgICBjYWxsYmFja3Muc2V0QWltKCh3aXRoaW5MYW5lIC0gLjUpICogMik7XG4gIH07XG4gIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcImFcIiB8fCBldmVudC5rZXkgPT09IFwiQVwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikgY2FsbGJhY2tzLnNldExhbmUoMCk7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJkXCIgfHwgZXZlbnQua2V5ID09PSBcIkRcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSBjYWxsYmFja3Muc2V0TGFuZSgxKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChqb3lzdGljaykgfHwgdGFyZ2V0LmNsb3Nlc3QoXCJidXR0b24saW5wdXQsc2VsZWN0LGFcIikpIHJldHVybjtcbiAgICBwb2ludGVySWQgPSBldmVudC5wb2ludGVySWQ7XG4gICAgcG9pbnRlclN0YXJ0ZWRYID0gZXZlbnQuY2xpZW50WDtcbiAgICBwb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgICBjb250YWluZXIuc2V0UG9pbnRlckNhcHR1cmU/Lihwb2ludGVySWQpO1xuICAgIGFwcGx5UG9pbnRlcihldmVudC5jbGllbnRYKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IHBvaW50ZXJJZCkgcmV0dXJuO1xuICAgIHBvaW50ZXJNb3ZlZCB8fD0gTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHBvaW50ZXJTdGFydGVkWCkgPiAzO1xuICAgIGFwcGx5UG9pbnRlcihldmVudC5jbGllbnRYKTtcbiAgfSk7XG4gIGNvbnN0IGVuZFBvaW50ZXIgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IHBvaW50ZXJJZCkgcmV0dXJuO1xuICAgIGlmICghcG9pbnRlck1vdmVkKSBhcHBseVBvaW50ZXIoZXZlbnQuY2xpZW50WCk7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICB9O1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBlbmRQb2ludGVyKTtcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGVuZFBvaW50ZXIpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvc3Rwb2ludGVyY2FwdHVyZVwiLCAoKSA9PiB7XG4gICAgcG9pbnRlcklkID0gbnVsbDtcbiAgICBjYWxsYmFja3MucmVsZWFzZUFpbSgpO1xuICB9KTtcbiAgaWYgKG1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50Pihqb3lzdGljayk7XG4gICAgY29uc3Qga25vYiA9IGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLnN0aWNrLWtub2JcIik7XG4gICAgbGV0IGpveXN0aWNrUG9pbnRlcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgYXBwbHlKb3lzdGljayA9IChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCByYWRpdXMgPSBib3VuZHMud2lkdGggLyAyO1xuICAgICAgY29uc3QgcmF3ID0gKGV2ZW50LmNsaWVudFggLSAoYm91bmRzLmxlZnQgKyByYWRpdXMpKSAvIHJhZGl1cztcbiAgICAgIGNvbnN0IHggPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgcmF3KSk7XG4gICAgICBpZiAoa25vYikga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7eCAqIHJhZGl1cyAqIC42Mn1weCksLTUwJSlgO1xuICAgICAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5hYnMoeCk7XG4gICAgICBpZiAobWFnbml0dWRlID49IC45NSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWQ6IDAgfCAxID0geCA8IDAgPyAwIDogMTtcbiAgICAgICAgaWYgKHJlcXVlc3RlZCAhPT0gY2FsbGJhY2tzLmxhbmUoKSkgY2FsbGJhY2tzLnNldExhbmUocmVxdWVzdGVkKTtcbiAgICAgICAgY2FsbGJhY2tzLnNldEFpbSgwKTtcbiAgICAgIH0gZWxzZSBpZiAobWFnbml0dWRlIDw9IC41KSBjYWxsYmFja3Muc2V0QWltKHggLyAuNSk7XG4gICAgICBlbHNlIGNhbGxiYWNrcy5zZXRBaW0oTWF0aC5zaWduKHgpKTtcbiAgICB9O1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBldmVudCA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGpveXN0aWNrUG9pbnRlciA9IGV2ZW50LnBvaW50ZXJJZDtcbiAgICAgIGVsZW1lbnQuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtcbiAgICAgIGFwcGx5Sm95c3RpY2soZXZlbnQpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQucG9pbnRlcklkID09PSBqb3lzdGlja1BvaW50ZXIpIGFwcGx5Sm95c3RpY2soZXZlbnQpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZEpveXN0aWNrID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5wb2ludGVySWQgIT09IGpveXN0aWNrUG9pbnRlcikgcmV0dXJuO1xuICAgICAgam95c3RpY2tQb2ludGVyID0gbnVsbDtcbiAgICAgIGlmIChrbm9iKSBrbm9iLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsLTUwJSlcIjtcbiAgICAgIGNhbGxiYWNrcy5yZWxlYXNlQWltKCk7XG4gICAgfTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGVuZEpveXN0aWNrKTtcbiAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBlbmRKb3lzdGljayk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4uL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNxdWFkUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIHJvdzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3F1YWRNb2RlbCB7XG4gIGxhbmU6IDAgfCAxID0gMDtcbiAgY291bnQgPSAxO1xuICBhaW1PZmZzZXQgPSAwO1xuICB4ID0gMDtcbiAgdGFyZ2V0WCA9IDA7XG4gIGxhbmVTaGlmdFN0YXJ0ZWRBdCA9IDA7XG5cbiAgYWRkKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5taW4oc3BlYy5tYXhTcXVhZFNpemUsIHRoaXMuY291bnQgKyBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgcmVtb3ZlKGFtb3VudCA9IDEpOiBudW1iZXIge1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCB0aGlzLmNvdW50IC0gYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHNldExhbmUobGFuZTogMCB8IDEsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyLCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChsYW5lICE9PSB0aGlzLmxhbmUpIHtcbiAgICAgIHRoaXMubGFuZVNoaWZ0U3RhcnRlZEF0ID0gbm93O1xuICAgICAgLy8gUmVzZXQgYWltIG9mZnNldCBzbyB0aGUgcGxheWVyIHNuYXBzIHRvIHRoZSBjb3JyZWN0IGNvbHVtbiBpbiB0aGUgbmV3IGxhbmUuXG4gICAgICB0aGlzLmFpbU9mZnNldCA9IDA7XG4gICAgfVxuICAgIHRoaXMubGFuZSA9IGxhbmU7XG4gICAgdGhpcy50YXJnZXRYID0gbGFuZUNlbnRlcihsYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgc2V0QWltKG5vcm1hbGl6ZWQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5haW1PZmZzZXQgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgbm9ybWFsaXplZCkpICogbGFuZVdpZHRoICogLjI4O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgYXV0b0FpbSh0YXJnZXRPZmZzZXQ6IG51bWJlciwgbGFuZVdpZHRoOiBudW1iZXIsIGxhbmVDZW50ZXI6IChsYW5lOiAwIHwgMSkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gSGlnaCBsZXJwIGZhY3RvciAoMC44NSkgc28gYXV0by1haW0gc25hcHMgYWxtb3N0IGluc3RhbnRhbmVvdXNseSBlYWNoIGZyYW1lLlxuICAgIHRoaXMuYWltT2Zmc2V0ICs9IChNYXRoLm1heCgtbGFuZVdpZHRoICogLjI4LCBNYXRoLm1pbihsYW5lV2lkdGggKiAuMjgsIHRhcmdldE9mZnNldCkpIC0gdGhpcy5haW1PZmZzZXQpICogLjg1O1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIodGhpcy5sYW5lKSArIHRoaXMuYWltT2Zmc2V0O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSAxIC0gTWF0aC5wb3coLjAwMDA4LCBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMueCArPSAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAqIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqIFggb2Zmc2V0cyBvZiBlYWNoIGNvbHVtbiBpbiB0aGUgZnJvbnQgcm93LCByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuICovXG4gIGZyb250Um93Q29sdW1uT2Zmc2V0cyhzY2FsZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKF8sIGNvbCkgPT5cbiAgICAgIChjb2wgLSAocm93Q291bnQgLSAxKSAvIDIpICogc3BlYy5zcGFjaW5nICogc2NhbGUsXG4gICAgKTtcbiAgfVxuXG4gIHBvaW50cyhiYXNlWTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogU3F1YWRQb2ludFtdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCBwb2ludHM6IFNxdWFkUG9pbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5taW4oc3BlYy5tZW1iZXJzUGVyUm93LCB0aGlzLmNvdW50IC0gcm93ICogc3BlYy5tZW1iZXJzUGVyUm93KTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGluZGV4ICUgc3BlYy5tZW1iZXJzUGVyUm93O1xuICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICB4OiB0aGlzLnggKyAoY29sdW1uIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICB5OiBiYXNlWSArIHJvdyAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBdXRvQWltVGFyZ2V0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJvd0lkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b0FpbUNvbnRyb2xTdGF0ZSB7XG4gIG1hbnVhbCA9IGZhbHNlO1xuXG4gIGxhbmVTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAvLyBMYW5lIGNoYW5nZXMgYXJlIG5hdmlnYXRpb24sIG5vdCBwZXJzaXN0ZW50IG1hbnVhbCBhaW1pbmcuXG4gIH1cblxuICBhaW1DaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgfVxuXG4gIGFpbVJlbGVhc2VkKCk6IHZvaWQge1xuICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhZC1jZW50ZXIgYWltIG9mZnNldCAocmVsYXRpdmUgdG8gbGFuZUNlbnRlcikgdGhhdCBiZXN0IGFsaWduc1xuICogb25lIG9mIHRoZSBzcXVhZCdzIGZyb250LXJvdyBjb2x1bW5zIHRvIHRoZSBuZWFyZXN0IGVuZW15LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRzICAgICAgICAgQWxsIGxpdmUgKG5vbi1keWluZykgZW5lbWllcyBpbiB0aGUgY3VycmVudCBsYW5lLlxuICogQHBhcmFtIGxhbmVDZW50ZXIgICAgICBQaXhlbCBYIG9mIHRoZSBsYW5lJ3MgY2VudGVyLlxuICogQHBhcmFtIGNvbHVtbk9mZnNldHMgICBYIG9mZnNldHMgb2YgZWFjaCBmcm9udC1yb3cgY29sdW1uIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci5cbiAqIEBwYXJhbSBjdXJyZW50T2Zmc2V0ICAgQ3VycmVudCBzcXVhZCBhaW0gb2Zmc2V0IChzcXVhZCBjZW50ZXIgPSBsYW5lQ2VudGVyICsgY3VycmVudE9mZnNldCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBdXRvQWltT2Zmc2V0KFxuICB0YXJnZXRzOiByZWFkb25seSBBdXRvQWltVGFyZ2V0W10sXG4gIGxhbmVDZW50ZXI6IG51bWJlcixcbiAgY29sdW1uT2Zmc2V0czogcmVhZG9ubHkgbnVtYmVyW10sXG4gIGN1cnJlbnRPZmZzZXQgPSAwLFxuKTogbnVtYmVyIHtcbiAgaWYgKCF0YXJnZXRzLmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgLy8gSWRlbnRpZnkgdGhlIGZyb250IHJvdzogZ3JvdXAgdGFyZ2V0cyBieSByb3dJZCAob3IgdHJlYXQgdW5ncm91cGVkIHRhcmdldHMgYXMgYSBzaW5nbGUgcm93KS5cbiAgY29uc3QgZXhwbGljaXRSb3dzID0gbmV3IE1hcDxudW1iZXIsIEF1dG9BaW1UYXJnZXRbXT4oKTtcbiAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgIGlmICh0YXJnZXQucm93SWQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3Qgcm93ID0gZXhwbGljaXRSb3dzLmdldCh0YXJnZXQucm93SWQpID8/IFtdO1xuICAgIHJvdy5wdXNoKHRhcmdldCk7XG4gICAgZXhwbGljaXRSb3dzLnNldCh0YXJnZXQucm93SWQsIHJvdyk7XG4gIH1cbiAgY29uc3QgZnJvbnRSb3cgPSBleHBsaWNpdFJvd3Muc2l6ZVxuICAgID8gWy4uLmV4cGxpY2l0Um93cy52YWx1ZXMoKV0uc29ydCgobGVmdCwgcmlnaHQpID0+XG4gICAgICAgIE1hdGgubWF4KC4uLnJpZ2h0Lm1hcCh0ID0+IHQueSkpIC0gTWF0aC5tYXgoLi4ubGVmdC5tYXAodCA9PiB0LnkpKSlbMF1cbiAgICA6IHRhcmdldHMuZmlsdGVyKHQgPT4gTWF0aC5hYnModC55IC0gTWF0aC5tYXgoLi4udGFyZ2V0cy5tYXAoYyA9PiBjLnkpKSkgPCAzKTtcblxuICAvLyBGb3IgZWFjaCBlbmVteSBpbiB0aGUgZnJvbnQgcm93IFx1MDBENyBlYWNoIHNxdWFkIGNvbHVtbiwgY29tcHV0ZSB0aGUgc3F1YWQtY2VudGVyXG4gIC8vIG9mZnNldCB0aGF0IHdvdWxkIHBsYWNlIHRoYXQgY29sdW1uIGV4YWN0bHkgb24gdGhhdCBlbmVteSdzIFguXG4gIC8vIFBpY2sgdGhlIChlbmVteSwgY29sdW1uKSBwYWlyIHdob3NlIHJlcXVpcmVkIG9mZnNldCBpcyBjbG9zZXN0IHRvIHRoZSBjdXJyZW50XG4gIC8vIG9mZnNldCBcdTIwMTQgbWluaW1pc2luZyB0aGUgYWltIG1vdmVtZW50IG5lZWRlZCB3aGlsZSBndWFyYW50ZWVpbmcgYSBoaXQuXG4gIGNvbnN0IGNvbHMgPSBjb2x1bW5PZmZzZXRzLmxlbmd0aCA+IDAgPyBjb2x1bW5PZmZzZXRzIDogWzBdO1xuICBsZXQgYmVzdE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG4gIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZnJvbnRSb3cpIHtcbiAgICBmb3IgKGNvbnN0IGNvbE9mZnNldCBvZiBjb2xzKSB7XG4gICAgICAvLyBzcXVhZENlbnRlciA9IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgXHUyMTkyIGNvbHVtbiBsYW5kcyBhdCBsYW5lQ2VudGVyICsgYWltT2Zmc2V0ICsgY29sT2Zmc2V0XG4gICAgICAvLyBXZSB3YW50IHRoYXQgdG8gZXF1YWwgZW5lbXkueCBcdTIxOTIgYWltT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXRcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0O1xuICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGNhbmRpZGF0ZU9mZnNldCAtIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdCkge1xuICAgICAgICBiZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIGJlc3RPZmZzZXQgPSBjYW5kaWRhdGVPZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RPZmZzZXQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlLCBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIGFzcGVjdFdpZHRoOiBudW1iZXI7XG4gIGFzcGVjdEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RlZFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDE3MCxcbiAgbG9va0FuZ2xlRGVncmVlczogMjAsXG4gIGZvbGxvd0Rpc3RhbmNlOiAyNTUsXG4gIHpvb206IC43MyxcbiAgaG9yaXpvbjogLjU0LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBwbGF5ZXJZOiBudW1iZXIgfSxcbik6IFByb2plY3RlZFNjZW5lIHtcbiAgY29uc3QgY2VudGVyWCA9IHZpZXdwb3J0LndpZHRoIC8gMjtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIGNvbnN0IHByb2plY3RQb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3Qgd29ybGRYID0geCAtIGNlbnRlclg7XG4gICAgY29uc3Qgd29ybGRaID0gdmlld3BvcnQucGxheWVyWSAtIHkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZTtcbiAgICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICAgIGNvbnN0IGNhbWVyYVkgPSByZWxhdGl2ZVkgKiBjb3MgKyB3b3JsZFogKiBzaW47XG4gICAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KG1pbkRlcHRoLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICAgIGNvbnN0IHNjYWxlID0gZm9jYWxMZW5ndGggLyBjYW1lcmFaO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjZW50ZXJYICsgd29ybGRYICogc2NhbGUsXG4gICAgICB5OiBob3Jpem9uWSAtIGNhbWVyYVkgKiBzY2FsZSxcbiAgICAgIHNjYWxlLFxuICAgICAgZGVwdGg6IGNhbWVyYVosXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0ZWRQcmltaXRpdmVzID0gcHJpbWl0aXZlcy5tYXAocHJpbWl0aXZlID0+IHtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCwgcHJpbWl0aXZlLnkpO1xuICAgIGNvbnN0IHdpZHRoID0gcHJpbWl0aXZlLndpZHRoICogcG9pbnQuc2NhbGU7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoKSAqIHBvaW50LnNjYWxlO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RlZFNoYXBlcyA9IHNoYXBlc1xuICAgIC5tYXAoc2hhcGUgPT4ge1xuICAgICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zaGFwZSxcbiAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgc2l6ZTogc2hhcGUuc2l6ZSAqIHBvaW50LnNjYWxlLFxuICAgICAgICB6OiAoc2hhcGUueiA/PyAwKSAtIHBvaW50LmRlcHRoICogLjAwMDgsXG4gICAgICB9O1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi56ID8/IDApIC0gKGEueiA/PyAwKSkpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXM6IHByb2plY3RlZFByaW1pdGl2ZXMsIHNoYXBlczogcHJvamVjdGVkU2hhcGVzIH07XG59XG4iLCAiaW1wb3J0IHsgZ2V0TmVvblNoYXBlLCBOZW9uU2hhcGVBY3RvciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSwgdHlwZSBOZW9uU2hhcGVMYWJlbCwgdHlwZSBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBjb25zdCBzd2FybVNoYXBlcyA9IHtcbiAgcGxheWVyOiBnZXROZW9uU2hhcGUoXCJhcnJvdy1jbGFzc2ljXCIpISxcbiAgZW5lbXk6IGdldE5lb25TaGFwZShcImh1bnRlci1leWVcIikhLFxuICBtdWx0aXBsaWVyOiBnZXROZW9uU2hhcGUoXCJicnVpc2VyLWNyb3NzXCIpISxcbiAgZ3VuUGlja3VwOiBnZXROZW9uU2hhcGUoXCJoZXgtZmlnaHRlclwiKSEsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgcGl4ZWxzVG9TaGFwZVdvcmxkID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiAoe1xuICB4OiAoeCAvIGNhbnZhcy53aWR0aCAtIC41KSAqIChjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbiAgeTogKC41IC0geSAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxufSk7XG5cbmV4cG9ydCBjb25zdCBwaXhlbFNpemVUb1NoYXBlU2NhbGUgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcGl4ZWxzOiBudW1iZXIpID0+IHBpeGVscyAvIGNhbnZhcy5oZWlnaHQgKiAyLjU7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RvckF0UGl4ZWxzKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHBpeGVsU2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIGNvbnN0IHdvcmxkID0gcGl4ZWxzVG9TaGFwZVdvcmxkKGNhbnZhcywgeCwgeSk7XG4gIGFjdG9yLm1vdmVUbyh3b3JsZC54LCB3b3JsZC55KTtcbiAgYWN0b3Iuc2NhbGUgPSBwaXhlbFNpemVUb1NoYXBlU2NhbGUoY2FudmFzLCBwaXhlbFNpemUpO1xuICByZXR1cm4gYWN0b3IucmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdG9ySW5Ub3BEb3duU2NlbmUgPSAoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uVG9wRG93blNoYXBlID0+XG4gICh7IC4uLmFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyksIHgsIHksIHNpemUgfSk7XG5cbmV4cG9ydCBjb25zdCBzaGFwZUxhYmVsID0gKHRleHQ6IHN0cmluZywgcG9zaXRpb246IE5lb25TaGFwZUxhYmVsW1wicG9zaXRpb25cIl0sIGZvbnRTaXplOiBudW1iZXIsIG9mZnNldCA9IDQpOiBOZW9uU2hhcGVMYWJlbCA9PlxuICAoeyB0ZXh0LCBwb3NpdGlvbiwgZm9udFNpemUsIG9mZnNldCwgZm9udEZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLCBmb250V2VpZ2h0OiA3MDAgfSk7XG4iLCAiLyoqXG4gKiBTd29yZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHN3b3JkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZSB0aWNrIGZ1bmN0aW9uIG9ubHkgdHJpZ2dlcnMgYSBzd2luZ1xuICogd2hlbiBhIHZhbGlkIHRhcmdldCBleGlzdHMgaW4gcmFuZ2UgYW5kIHRoZSBjb29sZG93biBpcyByZWFkeS4gSXQgaWRsZXMgc2lsZW50bHlcbiAqIHdoZW4gbm8gdGFyZ2V0IGlzIHByZXNlbnQuXG4gKlxuICogRGVzaWduIHJ1bGU6IHNhbWUgYXMgc2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBubyBkaXJlY3QgZW5lbXkgbXV0YXRpb24uIFJldHVybnMgYVxuICogU3dvcmRUaWNrUmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5cbmltcG9ydCB0eXBlIHsgU3dvcmRJZCwgU3dvcmRNZW1iZXIsIFN3b3JkVGFyZ2V0aW5nTW9kZSB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgdHlwZSB7IE5lYXJieVRocmVhdCB9IGZyb20gXCIuL25lYXJieVRocmVhdFF1ZXJ5XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWN0aXZlIHNsYXNoIGFuaW1hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlU2xhc2hBbmltYXRpb24ge1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEuIERyaXZlbiBieSAobm93IC0gc3RhcnRlZEF0KSAvIGR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIHN0YXJ0ZWRBdDogbnVtYmVyO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeCAoc25hcHNob3Qgb2YgcGxheWVyIHBvc2l0aW9uIHdoZW4gc3dpbmcgb2NjdXJyZWQpLiAqL1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgLyoqIFJlYWNoIG9mIHRoZSBhcmMgaW4gcGl4ZWxzLiAqL1xuICByZWFjaDogbnVtYmVyO1xuICAvKiogQXJjIHdpZHRoIGluIGRlZ3JlZXMuICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIENvbG9yLiAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKiogVGhpY2tuZXNzIG11bHRpcGxpZXIuICovXG4gIHRoaWNrbmVzczogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFN3b3JkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkU3RhdGUge1xuICBzd29yZElkOiBTd29yZElkO1xuICAvKiogU2Vjb25kcyByZW1haW5pbmcgdW50aWwgdGhlIHN3b3JkIGNhbiBzd2luZyBhZ2Fpbi4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBBY3RpdmUgc2xhc2ggYW5pbWF0aW9uLCBpZiBhbnkuICovXG4gIGFjdGl2ZVNsYXNoOiBBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc3dvcmRJZDogU3dvcmRJZCkge1xuICAgIHRoaXMuc3dvcmRJZCA9IHN3b3JkSWQ7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSAwO1xuICAgIHRoaXMuYWN0aXZlU2xhc2ggPSBudWxsO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgaGl0IGJ5IHRoZSBzd2luZyB0aGlzIGZyYW1lLiBFbXB0eSBpZiBubyBzd2luZyBvY2N1cnJlZC4gKi9cbiAgaGl0RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogRGFtYWdlIHRvIGFwcGx5IHRvIGVhY2ggaGl0IGVuZW15LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgYSBuZXcgc2xhc2ggd2FzIHRyaWdnZXJlZCB0aGlzIGZyYW1lIChmb3IgYXVkaW8sIGV0Yy4pLiAqL1xuICBzd2luZ1RyaWdnZXJlZDogYm9vbGVhbjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUYXJnZXRpbmcgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldHMoXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBtb2RlOiBTd29yZFRhcmdldGluZ01vZGUsXG4gIG1heFRhcmdldHM6IG51bWJlcixcbik6IE5lYXJieVRocmVhdFtdIHtcbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCI6XG4gICAgY2FzZSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIjpcbiAgICAgIC8vIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIGFscmVhZHkgcmV0dXJucyBzb3J0ZWQgYnkgZGlzdGFuY2VcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgY2FzZSBcImZyb250TW9zdFRocmVhdFwiOlxuICAgICAgLy8gSGlnaGVzdCB5ID0gbW9zdCBhZHZhbmNlZCB0b3dhcmQgcGxheWVyXG4gICAgICByZXR1cm4gWy4uLnRocmVhdHNdLnNvcnQoKGEsIGIpID0+IGIudGFyZ2V0LnkgLSBhLnRhcmdldC55KS5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJjbHVzdGVyTmVhclBsYXllclwiOlxuICAgICAgLy8gQWxyZWFkeSBzb3J0ZWQgYnkgZGlzdGFuY2UgXHUyMDE0IHRha2UgbmVhcmVzdCBjbHVzdGVyXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIERyaXZlcyB0aGUgc3dvcmQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgTXV0YWJsZSBzd29yZCBzdGF0ZS5cbiAqIEBwYXJhbSBzd29yZCAgICAgSW1tdXRhYmxlIHN3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgIE5lYXJieSB0aHJlYXRzIGluIHJhbmdlIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gKiBAcGFyYW0gcGxheWVyWCAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4LlxuICogQHBhcmFtIHBsYXllclkgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgVGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIGNvbG9yICAgICBSZXNvbHZlZCBoZXggY29sb3IgKGZyb20gbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTd29yZChcbiAgc3RhdGU6IFN3b3JkU3RhdGUsXG4gIHN3b3JkOiBTd29yZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbik6IFN3b3JkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU3dvcmRUaWNrUmVzdWx0ID0ge1xuICAgIGhpdEVuZW15SWRzOiBbXSxcbiAgICBkYW1hZ2U6IDAsXG4gICAgc3dpbmdUcmlnZ2VyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIC8vIEFkdmFuY2UgY29vbGRvd25cbiAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdCA+IDApIHN0YXRlLmNvb2xkb3duTGVmdCA9IE1hdGgubWF4KDAsIHN0YXRlLmNvb2xkb3duTGVmdCAtIGRlbHRhKTtcblxuICAvLyBBZHZhbmNlIGFjdGl2ZSBzbGFzaCBhbmltYXRpb25cbiAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoKSB7XG4gICAgc3RhdGUuYWN0aXZlU2xhc2gucHJvZ3Jlc3MgPSAobm93IC0gc3RhdGUuYWN0aXZlU2xhc2guc3RhcnRlZEF0KSAvIHN0YXRlLmFjdGl2ZVNsYXNoLmR1cmF0aW9uTXM7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZVNsYXNoLnByb2dyZXNzID49IDEpIHN0YXRlLmFjdGl2ZVNsYXNoID0gbnVsbDtcbiAgfVxuXG4gIC8vIFN3b3JkcyBvbmx5IHN3aW5nIHdoZW4gYSB0YXJnZXQgZXhpc3RzIGluIHJhbmdlIEFORCBjb29sZG93biBpcyByZWFkeS5cbiAgLy8gVGhpcyBpcyB0aGUga2V5IGRpZmZlcmVuY2UgZnJvbSBndW5zLCB3aGljaCBmaXJlIG9uIGEgcGVyaW9kIHJlZ2FyZGxlc3MuXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwIHx8IHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIFNlbGVjdCB0YXJnZXRzXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0VGFyZ2V0cyh0aHJlYXRzLCBzd29yZC50YXJnZXRpbmdNb2RlLCBzd29yZC5tYXhUYXJnZXRzKTtcbiAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBUcmlnZ2VyIHN3aW5nXG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHN3b3JkLmNvb2xkb3duU2Vjb25kcztcbiAgcmVzdWx0LnN3aW5nVHJpZ2dlcmVkID0gdHJ1ZTtcbiAgcmVzdWx0LmRhbWFnZSA9IHN3b3JkLmRhbWFnZTtcbiAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHNlbGVjdGVkKSByZXN1bHQuaGl0RW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuXG4gIC8vIFN0YXJ0IHNsYXNoIGFuaW1hdGlvblxuICBzdGF0ZS5hY3RpdmVTbGFzaCA9IHtcbiAgICBwcm9ncmVzczogMCxcbiAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICBkdXJhdGlvbk1zOiBzd29yZC5zbGFzaER1cmF0aW9uTXMsXG4gICAgeDogcGxheWVyWCxcbiAgICB5OiBwbGF5ZXJZLFxuICAgIHJlYWNoOiBzd29yZC5yYW5nZSAqIDAuNzUsIC8vIEFyYyByZWFjaCBpcyBhIGZyYWN0aW9uIG9mIGRldGVjdGlvbiByYW5nZVxuICAgIGFyY0RlZ3JlZXM6IHN3b3JkLmFyY0RlZ3JlZXMsXG4gICAgY29sb3IsXG4gICAgdGhpY2tuZXNzOiBzd29yZC5zbGFzaFRoaWNrbmVzcyxcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwgIi8qKlxuICogTmVhcmJ5VGhyZWF0UXVlcnkgXHUyMDE0IHNoYXJlZCBsYW5lLWF3YXJlIGVuZW15IHF1ZXJ5IGZvciBzaGllbGQgYW5kIHN3b3JkIGZhbWlsaWVzLlxuICpcbiAqIEJvdGggc2hpZWxkcyBhbmQgc3dvcmRzIG9wZXJhdGUgbmVhciB0aGUgcGxheWVyLCBzbyB0aGV5IHNoYXJlIHRoaXMgbW9kdWxlXG4gKiB0byBhdm9pZCBpbmRlcGVuZGVudCwgcG90ZW50aWFsbHkgY29uZmxpY3Rpbmcgc2NhbnMuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgaW50ZW50aW9uYWxseSBtaW5pbWFsLiBJdCBwcm92aWRlcyBlbm91Z2ggc3RydWN0dXJlIHRvIGJlXG4gKiBmdXR1cmUtZnJpZW5kbHkgKG9yaWdpblNoYXBlIGluZGV4LCBjb2x1bW4tYmFuZCBhd2FyZW5lc3MpIHdpdGhvdXRcbiAqIG92ZXItYnVpbGRpbmcuIEV4dGVuZCB3aGVuIG5lZWRlZCBcdTIwMTQgZG8gbm90IHJlZmFjdG9yIHByZW1hdHVyZWx5LlxuICpcbiAqIE5lYXItcGxheWVyIGVmZmVjdCBwcmVjZWRlbmNlIChhcHBsaWVkIGJ5IG1haW4udHMpOlxuICogICAxLiBzaGllbGRCbG9jayAgICAgICAgXHUyMDE0IGNoYXJnZS1iYXNlZCBoaXQgYWJzb3JwdGlvblxuICogICAyLiBzaGllbGRQdWxzZSAgICAgICAgXHUyMDE0IGVtZXJnZW5jeSBwdXNoXG4gKiAgIDMuIHN3b3JkQXR0YWNrICAgICAgICBcdTIwMTQgc3dvcmQgZmFtaWx5XG4gKiAgIDQuIHNoaWVsZENvbnRhY3REYW1hZ2UgXHUyMDE0IGNvbnRhY3QgZGFtYWdlIG9uIHNoaWVsZCBlZGdlXG4gKiAgIDUuIHNoaWVsZEF1cmEgICAgICAgICBcdTIwMTQgc2xvdy9kZWJ1ZmYgYXVyYVxuICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogTWluaW1hbCBlbmVteSBpbnRlcmZhY2UgZXhwZWN0ZWQgYnkgdGhlIHRocmVhdCBxdWVyeSBzeXN0ZW0uICovXG5leHBvcnQgaW50ZXJmYWNlIFRocmVhdFRhcmdldCB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IDAgfCAxO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgU2hpZWxkTWVtYmVyLCBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5VmlzdWFsU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5jb25zdCBlbXB0eVNjZW5lID0gKCk6IEZhbWlseVZpc3VhbFNjZW5lID0+ICh7IHByaW1pdGl2ZXM6IFtdLCBzaGFwZXM6IFtdIH0pO1xuY29uc3QgcmVxdWlyZWRTaGFwZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7aWR9XCIgaXMgcmVxdWlyZWQgYnkgZmFtaWx5IHZpc3VhbHMuYCk7XG4gIHJldHVybiBzaGFwZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFNoaWVsZE1lbWJlcjtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgaW5pdGlhbFN0cmVuZ3RoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGhpdFByb2dyZXNzPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWVsZFZpc3VhbHMob3B0aW9uczogU2hpZWxkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGNvbnN0IHtcbiAgICBkZWZpbml0aW9uLCB4LCB5LCBub3csXG4gICAgc2NhbGUgPSAxLFxuICAgIGhpdFByb2dyZXNzID0gMSxcbiAgICB2aXNpYmxlID0gdHJ1ZSxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0cmVuZ3RoID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5zdHJlbmd0aCk7XG4gIGNvbnN0IGluaXRpYWxTdHJlbmd0aCA9IE1hdGgubWF4KDEsIG9wdGlvbnMuaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgaW1wYWN0ID0gTWF0aC5tYXgoMCwgMSAtIGhpdFByb2dyZXNzKTtcbiAgY29uc3QgZXhwbG9kaW5nID0gc3RyZW5ndGggPD0gMCAmJiBoaXRQcm9ncmVzcyA8IDE7XG4gIGNvbnN0IGNvbG9yID0gbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl07XG4gIGNvbnN0IHJhZGl1cyA9IGRlZmluaXRpb24ucmFkaXVzICogc2NhbGU7XG5cbiAgaWYgKHZpc2libGUgfHwgZXhwbG9kaW5nKSB7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzaGllbGQtcmluZ1wiKSxcbiAgICAgIHgsIHksXG4gICAgICBzaXplOiByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEgKyBpbXBhY3QgKiAuOCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMTUgKyBpbXBhY3QgKiAxLjUsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogLjQyICsgaW1wYWN0ICogLjMsXG4gICAgICBlbmVyZ3lTcGVlZDogMS4xNSArIGltcGFjdCAqIDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiAuNSArIGltcGFjdCAqIC4zNSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogZXhwbG9kaW5nID8gTWF0aC5taW4oMSwgaGl0UHJvZ3Jlc3MpIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IC45LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IG9yYml0ZXJTaGFwZSA9IHJlcXVpcmVkU2hhcGUoZGVmaW5pdGlvbi5vcmJpdGVyU2hhcGUgPT09IFwiaGV4XCIgPyBcImhleC1maWdodGVyXCIgOiBcInN0YXItY29yZVwiKTtcbiAgY29uc3Qgb3JiaXRlckNvdW50ID0gTWF0aC5jZWlsKGRlZmluaXRpb24ub3JiaXRlckNvdW50ICogc3RyZW5ndGggLyBpbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJICogMiAvIGRlZmluaXRpb24ub3JiaXRlckNvdW50O1xuICBjb25zdCBiYXNlQW5nbGUgPSBub3cgLyAxMDAwICogZGVmaW5pdGlvbi5vcmJpdGVyU3BlZWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JiaXRlckNvdW50OyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9IGJhc2VBbmdsZSArIGkgKiBhbmdsZVN0ZXA7XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IG9yYml0ZXJTaGFwZSxcbiAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICB5OiB5ICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxuICAgICAgc2l6ZTogZGVmaW5pdGlvbi5vcmJpdGVyU2l6ZSAqIDEuOCAqIHNjYWxlLFxuICAgICAgY29sb3IsXG4gICAgICByb3RhdGlvblo6IGFuZ2xlICsgbm93IC8gMTQwMCxcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNCxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjI1LFxuICAgICAgZW5lcmd5QmxlZWQ6IC41LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTd29yZE1lbWJlcjtcbiAgc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3dvcmRUcmFpbChzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24sIHNjYWxlOiBudW1iZXIpOiBOZW9uUHJpbWl0aXZlW10ge1xuICBpZiAoc2xhc2gucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFtdO1xuICBjb25zdCBsaWZlID0gMSAtIHNsYXNoLnByb2dyZXNzO1xuICBjb25zdCByYWRpdXMgPSBzbGFzaC5yZWFjaCAqIHNjYWxlO1xuICBjb25zdCBoYWxmQXJjID0gc2xhc2guYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IGhlYWRpbmcgPSAtTWF0aC5QSSAvIDI7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDE7XG4gIGNvbnN0IGJsYWRlQW5nbGUgPSBoZWFkaW5nIC0gaGFsZkFyYyArIHN3ZWVwICogaGFsZkFyYyAqIDI7XG4gIGNvbnN0IHRyYWlsTGVuZ3RoID0gaGFsZkFyYyAqICguNTUgKyBsaWZlICogLjc1KTtcbiAgY29uc3QgdGhpY2tuZXNzID0gc2xhc2gudGhpY2tuZXNzICogc2NhbGU7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkrKykge1xuICAgIGNvbnN0IGFnZSA9IGkgLyAxMDtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGgubWF4KGhlYWRpbmcgLSBoYWxmQXJjLCBibGFkZUFuZ2xlIC0gdHJhaWxMZW5ndGggKiBhZ2UpO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gcmFkaXVzICogKC43MiArIE1hdGguc2luKGFnZSAqIE1hdGguUEkpICogLjA4KTtcbiAgICBjb25zdCBmYWRlID0gTWF0aC5wb3coMSAtIGFnZSwgMS4zNSkgKiBsaWZlO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBzbGFzaC54ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB5OiBzbGFzaC55ICsgTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2UsXG4gICAgICB3aWR0aDogTWF0aC5tYXgoLjgsIHRoaWNrbmVzcyAqICgyLjQgLSBhZ2UgKiAxLjU1KSksXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqICguMjQgLSBhZ2UgKiAuMSksXG4gICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICBnbG93OiAxLjE1ICogZmFkZSxcbiAgICAgIGludGVuc2l0eTogMS40NSAqIGZhZGUsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogYW5nbGUgKyBNYXRoLlBJIC8gMixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGxlYWRpbmdYID0gc2xhc2gueCArIE1hdGguY29zKGJsYWRlQW5nbGUpICogcmFkaXVzICogLjgyO1xuICBjb25zdCBsZWFkaW5nWSA9IHNsYXNoLnkgKyBNYXRoLnNpbihibGFkZUFuZ2xlKSAqIHJhZGl1cyAqIC44MjtcbiAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICB4OiBsZWFkaW5nWCwgeTogbGVhZGluZ1ksXG4gICAgd2lkdGg6IE1hdGgubWF4KDEuMiwgdGhpY2tuZXNzICogMi44KSxcbiAgICBoZWlnaHQ6IHJhZGl1cyAqIC4zMixcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IHNsYXNoLmNvbG9yLFxuICAgIGdsb3c6IDEuNCAqIGxpZmUsXG4gICAgaW50ZW5zaXR5OiAxLjcgKiBsaWZlLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogYmxhZGVBbmdsZSArIE1hdGguUEkgLyAyLFxuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcgJiYgc2xhc2gucHJvZ3Jlc3MgPCAuNzsgaSsrKSB7XG4gICAgY29uc3Qgc3ByZWFkID0gKGkgLSAzKSAqIC4xMztcbiAgICBjb25zdCBzcGFya0xpZmUgPSBsaWZlICogKDEgLSBNYXRoLmFicyhpIC0gMykgKiAuMDgpO1xuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiBsZWFkaW5nWCArIE1hdGguY29zKGJsYWRlQW5nbGUgKyBzcHJlYWQpICogcmFkaXVzICogKC4wNCArIGkgKiAuMDEyKSxcbiAgICAgIHk6IGxlYWRpbmdZICsgTWF0aC5zaW4oYmxhZGVBbmdsZSArIHNwcmVhZCkgKiByYWRpdXMgKiAoLjA0ICsgaSAqIC4wMTIpLFxuICAgICAgd2lkdGg6IE1hdGgubWF4KC43LCB0aGlja25lc3MgKiAuNzUpLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAoLjA4ICsgaSAlIDMgKiAuMDI1KSxcbiAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGdsb3c6IDEuMSAqIHNwYXJrTGlmZSxcbiAgICAgIGludGVuc2l0eTogMS4yNSAqIHNwYXJrTGlmZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBibGFkZUFuZ2xlICsgc3ByZWFkLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dvcmRWaXN1YWxzKG9wdGlvbnM6IFN3b3JkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGlmICghb3B0aW9ucy52aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IHsgZGVmaW5pdGlvbiwgc2xhc2gsIHgsIHksIHNjYWxlID0gMSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaGFsZkFyYyA9IGRlZmluaXRpb24uYXJjRGVncmVlcyAqIE1hdGguUEkgLyAzNjA7XG4gIGNvbnN0IHN3ZWVwID0gc2xhc2ggPyAoc2xhc2gucHJvZ3Jlc3MgPCAuNjIgPyAxIC0gTWF0aC5wb3coMSAtIHNsYXNoLnByb2dyZXNzIC8gLjYyLCAzKSA6IDEpIDogLjU7XG4gIGNvbnN0IHN3b3JkQW5nbGUgPSAtTWF0aC5QSSAvIDIgLSBoYWxmQXJjICsgc3dlZXAgKiBoYWxmQXJjICogMjtcbiAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic3Bpa2UtbGFuY2VcIiksXG4gICAgeCwgeSxcbiAgICBzaXplOiBNYXRoLm1pbigxNywgZGVmaW5pdGlvbi5yYW5nZSAqIC4yOCkgKiBzY2FsZSxcbiAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgcm90YXRpb25aOiBzd29yZEFuZ2xlICsgTWF0aC5QSSAvIDIsXG4gICAgbGluZVRoaWNrbmVzczogLjgyLFxuICAgIGdsb3c6IHNsYXNoID8gMS4zNSA6IDEsXG4gICAgZW5lcmd5SW50ZW5zaXR5OiBzbGFzaCA/IDEuOCA6IDEuMTUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IHNsYXNoID8gLjcyIDogLjQyLFxuICAgIGVuZXJneVNwZWVkOiBzbGFzaCA/IDIuMSA6IDEuMixcbiAgICBlbmVyZ3lCbGVlZDogc2xhc2ggPyAuOCA6IC41LFxuICB9KTtcbiAgaWYgKHNsYXNoKSBzY2VuZS5wcmltaXRpdmVzLnB1c2goLi4uc3dvcmRUcmFpbChzbGFzaCwgc2NhbGUpKTtcbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBTaGFwZShzaGFwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlIHtcbiAgY29uc3QgeyB4LCB5LCBjb2xvciwgbm93LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoc2hhcGVJZCksXG4gICAgeDogeCArIE1hdGguc2luKG5vdyAvIDQyMCArIHkgKiAuMDcpICogNC41ICogc2NhbGUsXG4gICAgeSxcbiAgICBzaXplOiAxMCAqIHNjYWxlICogKDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyB5ICogLjA1KSAqIC4wOCksXG4gICAgY29sb3IsXG4gICAgcm90YXRpb25aOiBub3cgLyAxMTAwLFxuICAgIGxpbmVUaGlja25lc3M6IC43NixcbiAgICBnbG93OiAxLjA1LFxuICAgIGVuZXJneUludGVuc2l0eTogMS4yNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjQ4LFxuICAgIGVuZXJneVNwZWVkOiAxLjM1LFxuICAgIGVuZXJneUJsZWVkOiAuNTUsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzaGllbGQtcmluZ1wiLCBvcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic3Bpa2UtbGFuY2VcIiwgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHtcbiAgY3JlYXRlTGFuZVJ1bm5lclNjZW5lLFxuICBOZW9uU2hhcGVBY3RvciwgTmVvblNoYXBlRGlzcG9zYWwsIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcixcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSwgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIHN3b3JkRmFtaWx5LCBvcmJGYW1pbHksXG4gIHR5cGUgU3dvcmRJZCwgdHlwZSBTd29yZFRhcmdldGluZ01vZGUsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBiaW5kU3F1YWRJbnB1dCB9IGZyb20gXCIuLi8uLi9zcmMvaW5wdXRcIjtcbmltcG9ydCB7IFNxdWFkTW9kZWwgfSBmcm9tIFwiLi4vLi4vc3JjL3NxdWFkXCI7XG5pbXBvcnQgeyBBdXRvQWltQ29udHJvbFN0YXRlLCBzZWxlY3RBdXRvQWltT2Zmc2V0IH0gZnJvbSBcIi4uLy4uL3NyYy9hdXRvQWltXCI7XG5pbXBvcnQgeyBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBhcHBseVBvcnRyYWl0U3RhZ2UsIHByb2plY3RIZWxpY29wdGVyU2NlbmUgfSBmcm9tIFwiLi4vLi4vc3JjL3ZpZXdwb3J0XCI7XG5pbXBvcnQgeyBhY3RvckluVG9wRG93blNjZW5lLCBzaGFwZUxhYmVsLCBzd2FybVNoYXBlcyB9IGZyb20gXCIuLi8uLi9zcmMvc2hhcGVWaXN1YWxzXCI7XG5pbXBvcnQgeyBTd29yZFN0YXRlLCB0aWNrU3dvcmQgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbWJhdC9zd29yZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgcXVlcnlOZWFyYnlUaHJlYXRzIH0gZnJvbSBcIi4uLy4uL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnlcIjtcbmltcG9ydCB7IHN3b3JkUGlja3VwVmlzdWFsLCBzd29yZFZpc3VhbHMgfSBmcm9tIFwiLi4vLi4vc3JjL2ZhbWlseVZpc3VhbHNcIjtcblxuaW50ZXJmYWNlIEVuZW15IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogMCB8IDE7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgcm93SWQ6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFN3b3JkUGlja3VwIHtcbiAgc3dvcmRJZDogU3dvcmRJZDtcbiAgbGFuZTogMCB8IDE7XG4gIHk6IG51bWJlcjtcbn1cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oXCIjZ2FtZS1jYW52YXNcIikhO1xuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNlcnJvclwiKSE7XG5jb25zdCBzd29yZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3N3b3JkLXNlbGVjdFwiKSE7XG5jb25zdCB3ZWFwb25SZWFkb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjd2VhcG9uLXJlYWRvdXRcIikhO1xuY29uc3Qgc2NvcmVSZWFkb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjc2NvcmUtcmVhZG91dFwiKSE7XG5jb25zdCBzcGVjUmVhZG91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3NwZWMtcmVhZG91dFwiKSE7XG5jb25zdCBnYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2dhbWVcIikhO1xuYXBwbHlQb3J0cmFpdFN0YWdlKGdhbWVFbGVtZW50LCB7IGFzcGVjdFdpZHRoOiA5LCBhc3BlY3RIZWlnaHQ6IDE2IH0pO1xuXG50cnkge1xuICBjb25zdCByZW5kZXJlciA9IGF3YWl0IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlci5jcmVhdGUoY2FudmFzLCA0NTAsIDgwMCk7XG4gIGNvbnN0IG9yYiA9IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiO1xuICBjb25zdCBlbmVtaWVzOiBFbmVteVtdID0gW107XG4gIGNvbnN0IHBpY2t1cHM6IFN3b3JkUGlja3VwW10gPSBbXTtcbiAgY29uc3Qgc3F1YWQgPSBuZXcgU3F1YWRNb2RlbCgpO1xuICBjb25zdCBhaW1Db250cm9sID0gbmV3IEF1dG9BaW1Db250cm9sU3RhdGUoKTtcbiAgbGV0IHBsYXllckxhbmUgPSAwO1xuICBsZXQgYWN0aXZlU3dvcmRJZDogU3dvcmRJZCA9IFwiYXJjQmxhZGVcIjtcbiAgbGV0IHN3b3JkU3RhdGUgPSBuZXcgU3dvcmRTdGF0ZShhY3RpdmVTd29yZElkKTtcbiAgbGV0IGVudGl0eVNlcXVlbmNlID0gMDtcbiAgbGV0IGtpbGxzID0gMDtcbiAgbGV0IGxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBsZXQgcGxheWVyQWxpdmUgPSB0cnVlO1xuICBsZXQgcmVzdGFydEF0ID0gMDtcbiAgbGV0IHBsYXllckFjdG9yID0gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcblxuICBjb25zdCBsYW5lWCA9IChsYW5lOiBudW1iZXIpID0+IGNhbnZhcy53aWR0aCAqIChsYW5lID09PSAwID8gMC4zMiA6IDAuNjgpO1xuICBjb25zdCBwbGF5ZXJZID0gKCkgPT4gY2FudmFzLmhlaWdodCAqIDAuODI7XG4gIGNvbnN0IHNjYWxlID0gKCkgPT4gMTtcblxuICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHN3b3JkRmFtaWx5Lm1lbWJlcnMpKSB7XG4gICAgc3dvcmRTZWxlY3QuYWRkKG5ldyBPcHRpb24oc3dvcmQubGFiZWwsIGlkKSk7XG4gIH1cbiAgc3dvcmRTZWxlY3QudmFsdWUgPSBhY3RpdmVTd29yZElkO1xuXG4gIGNvbnN0IGVxdWlwID0gKGlkOiBTd29yZElkKSA9PiB7XG4gICAgYWN0aXZlU3dvcmRJZCA9IGlkO1xuICAgIHN3b3JkU3RhdGUgPSBuZXcgU3dvcmRTdGF0ZShpZCk7XG4gICAgc3dvcmRTZWxlY3QudmFsdWUgPSBpZDtcbiAgICB3aW5kb3cuZ2FtZUF1ZGlvPy5wbGF5KFwiUGlja3VwXCIpO1xuICAgIHVwZGF0ZVJlYWRvdXQoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVSZWFkb3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlZiA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbYWN0aXZlU3dvcmRJZF07XG4gICAgd2VhcG9uUmVhZG91dC50ZXh0Q29udGVudCA9IGRlZi5sYWJlbDtcbiAgICBzY29yZVJlYWRvdXQudGV4dENvbnRlbnQgPSBgS2lsbHMgJHtraWxsc31gO1xuICAgIGNvbnN0IGNkTGVmdCA9IHN3b3JkU3RhdGUuY29vbGRvd25MZWZ0LnRvRml4ZWQoMik7XG4gICAgc3BlY1JlYWRvdXQuaW5uZXJIVE1MID0gW1xuICAgICAgW1wiUmFuZ2VcIiwgYCR7ZGVmLnJhbmdlfXB4YF0sXG4gICAgICBbXCJBcmNcIiwgYCR7ZGVmLmFyY0RlZ3JlZXN9XHUwMEIwYF0sXG4gICAgICBbXCJEYW1hZ2VcIiwgU3RyaW5nKGRlZi5kYW1hZ2UpXSxcbiAgICAgIFtcIkNvb2xkb3duXCIsIGAke2RlZi5jb29sZG93blNlY29uZHN9c2BdLFxuICAgICAgW1wiQ29vbGRvd24gbGVmdFwiLCBgJHtjZExlZnR9c2BdLFxuICAgICAgW1wiTWF4IHRhcmdldHNcIiwgU3RyaW5nKGRlZi5tYXhUYXJnZXRzKV0sXG4gICAgICBbXCJUYXJnZXRpbmdcIiwgZGVmLnRhcmdldGluZ01vZGVdLFxuICAgICAgW1wiU2xhc2ggZHVyYXRpb25cIiwgYCR7ZGVmLnNsYXNoRHVyYXRpb25Nc31tc2BdLFxuICAgIF0ubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgPGR0PiR7bmFtZX08L2R0PjxkZD4ke3ZhbHVlfTwvZGQ+YCkuam9pbihcIlwiKTtcbiAgfTtcblxuICBzcXVhZC54ID0gbGFuZVgoMCk7XG4gIHNxdWFkLnRhcmdldFggPSBsYW5lWCgwKTtcblxuICBjb25zdCBzcGF3bkVuZW15ID0gKGxhbmU6IDAgfCAxKTogdm9pZCA9PiB7XG4gICAgZW5lbWllcy5wdXNoKHsgaWQ6ICsrZW50aXR5U2VxdWVuY2UsIGxhbmUsIHg6IGxhbmVYKGxhbmUpLCB5OiAxMDUsIGhlYWx0aDogb3JiLmhlYWx0aCwgcm93SWQ6ICsrZW50aXR5U2VxdWVuY2UsIGFjdG9yOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMuZW5lbXkgfSksIGR5aW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBjb25zdCBzcGF3blBpY2t1cCA9IChsYW5lOiAwIHwgMSk6IHZvaWQgPT4ge1xuICAgIHBpY2t1cHMucHVzaCh7IHN3b3JkSWQ6IHN3b3JkU2VsZWN0LnZhbHVlIGFzIFN3b3JkSWQsIGxhbmUsIHk6IDEzNSB9KTtcbiAgfTtcblxuICBjb25zdCByZXN0YXJ0U2ltdWxhdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgICBlbmVtaWVzLmxlbmd0aCA9IDA7XG4gICAgcGlja3Vwcy5sZW5ndGggPSAwO1xuICAgIHBsYXllckFsaXZlID0gdHJ1ZTtcbiAgICByZXN0YXJ0QXQgPSAwO1xuICAgIHBsYXllckFjdG9yID0gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcbiAgICBlcXVpcChhY3RpdmVTd29yZElkKTtcbiAgICBzcGF3bkVuZW15KDApO1xuICAgIHNwYXduRW5lbXkoMSk7XG4gIH07XG5cbiAgY29uc3Qga2lsbFBsYXllciA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGlmICghcGxheWVyQWxpdmUpIHJldHVybjtcbiAgICBwbGF5ZXJBbGl2ZSA9IGZhbHNlO1xuICAgIHJlc3RhcnRBdCA9IG5vdyArIDkwMDtcbiAgICBwbGF5ZXJBY3Rvci5leHBsb2RlTWFnbml0dWRlID0gMC44O1xuICAgIHBsYXllckFjdG9yLmRpc3Bvc2UoTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSk7XG4gICAgd2VhcG9uUmVhZG91dC50ZXh0Q29udGVudCA9IFwiUGxheWVyIGRlZmVhdGVkXCI7XG4gICAgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIkVuZW15RGVzdHJveWVkXCIpO1xuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tZW5lbXldXCIpLmZvckVhY2goYiA9PiBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzcGF3bkVuZW15KE51bWJlcihiLmRhdGFzZXQuc3Bhd25FbmVteSkgYXMgMCB8IDEpKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtc3Bhd24tcGlja3VwXVwiKS5mb3JFYWNoKGIgPT4gYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3Bhd25QaWNrdXAoTnVtYmVyKGIuZGF0YXNldC5zcGF3blBpY2t1cCkgYXMgMCB8IDEpKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI3NwYXduLXdhdmVcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3Bhd25FbmVteSgwKTsgc3Bhd25FbmVteSgxKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNwYXduRW5lbXkoMCksIDQ1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzcGF3bkVuZW15KDEpLCA3MDApO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjY2xlYXItc3RhZ2VcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZW5lbWllcy5sZW5ndGggPSBwaWNrdXBzLmxlbmd0aCA9IDA7XG4gIH0pO1xuICBzd29yZFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IGVxdWlwKHN3b3JkU2VsZWN0LnZhbHVlIGFzIFN3b3JkSWQpKTtcblxuICBiaW5kU3F1YWRJbnB1dChnYW1lRWxlbWVudCwgXCIjam95c3RpY2tcIiwge1xuICAgIGxhbmU6ICgpID0+IHNxdWFkLmxhbmUsXG4gICAgc2V0TGFuZTogbGFuZSA9PiB7IHBsYXllckxhbmUgPSBsYW5lOyBzcXVhZC5zZXRMYW5lKGxhbmUsIGxhbmVYLCBwZXJmb3JtYW5jZS5ub3coKSk7IGFpbUNvbnRyb2wubGFuZVNlbGVjdGVkKCk7IH0sXG4gICAgc2V0QWltOiB2YWx1ZSA9PiB7IHNxdWFkLnNldEFpbSh2YWx1ZSwgY2FudmFzLndpZHRoICogLjIyLCBsYW5lWCk7IGFpbUNvbnRyb2wuYWltQ2hhbmdlZCgpOyB9LFxuICAgIHJlbGVhc2VBaW06ICgpID0+IHsgYWltQ29udHJvbC5haW1SZWxlYXNlZCgpOyB9LFxuICB9KTtcblxuICBjb25zdCB1cGRhdGUgPSAobm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IE1hdGgubWluKChub3cgLSBsYXN0RnJhbWUpIC8gMTAwMCwgMC4wNSk7XG4gICAgbGFzdEZyYW1lID0gbm93O1xuICAgIHBsYXllckFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgaWYgKCFwbGF5ZXJBbGl2ZSkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW1pZXMpIGUuYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIGlmIChub3cgPj0gcmVzdGFydEF0KSByZXN0YXJ0U2ltdWxhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYWltQ29udHJvbC5tYW51YWwpIHtcbiAgICAgIGNvbnN0IGxhbmVFbmVtaWVzID0gZW5lbWllcy5maWx0ZXIoZSA9PiBlLmxhbmUgPT09IHNxdWFkLmxhbmUgJiYgIWUuZHlpbmcpO1xuICAgICAgY29uc3QgY29sT2Zmc2V0cyA9IHNxdWFkLmZyb250Um93Q29sdW1uT2Zmc2V0cyhzY2FsZSgpKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdEF1dG9BaW1PZmZzZXQobGFuZUVuZW1pZXMsIGxhbmVYKHNxdWFkLmxhbmUpLCBjb2xPZmZzZXRzLCBzcXVhZC5haW1PZmZzZXQpO1xuICAgICAgc3F1YWQuYXV0b0FpbShvZmZzZXQsIGNhbnZhcy53aWR0aCAqIC4yMiwgbGFuZVgpO1xuICAgIH1cbiAgICBzcXVhZC51cGRhdGUoZGVsdGEpO1xuXG4gICAgLy8gU3dvcmQgdGljayBcdTIwMTQgc3dpbmdzIG9ubHkgd2hlbiBlbmVtaWVzIGFyZSBpbiByYW5nZVxuICAgIGNvbnN0IHB4ID0gc3F1YWQueDtcbiAgICBjb25zdCBweSA9IHBsYXllclkoKTtcbiAgICBjb25zdCBkZWYgPSBzd29yZEZhbWlseS5tZW1iZXJzW2FjdGl2ZVN3b3JkSWRdO1xuICAgIGNvbnN0IHRocmVhdHMgPSBxdWVyeU5lYXJieVRocmVhdHMoZW5lbWllcywge1xuICAgICAgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LFxuICAgICAgbGFuZTogcGxheWVyTGFuZSBhcyAwIHwgMSxcbiAgICAgIHJhbmdlOiBkZWYucmFuZ2UsXG4gICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogKGRlZi50YXJnZXRpbmdNb2RlIGFzIFN3b3JkVGFyZ2V0aW5nTW9kZSkgPT09IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiLFxuICAgICAgbWF4VGFyZ2V0czogZGVmLm1heFRhcmdldHMsXG4gICAgICBwdXJwb3NlOiBcInN3b3JkXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzd29yZFJlc3VsdCA9IHRpY2tTd29yZChzd29yZFN0YXRlLCBkZWYsIHRocmVhdHMsIHB4LCBweSwgbm93LCBkZWx0YSwgbmVvblBhbGV0dGVbZGVmLmNvbG9yXSk7XG5cbiAgICBpZiAoc3dvcmRSZXN1bHQuc3dpbmdUcmlnZ2VyZWQgJiYgc3dvcmRSZXN1bHQuaGl0RW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIkhpdFwiKTtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBbLi4uZW5lbWllc10pIHtcbiAgICAgICAgaWYgKGUuZHlpbmcgfHwgIXN3b3JkUmVzdWx0LmhpdEVuZW15SWRzLmluY2x1ZGVzKGUuaWQpKSBjb250aW51ZTtcbiAgICAgICAgZS5oZWFsdGggLT0gc3dvcmRSZXN1bHQuZGFtYWdlO1xuICAgICAgICBlLmFjdG9yLmltcGFjdCh7IGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sIG1hZ25pdHVkZTogc3dvcmRSZXN1bHQuZGFtYWdlIC8gb3JiLmltcGFjdFJlc2lzdGFuY2UgfSk7XG4gICAgICAgIGlmIChlLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgZS5keWluZyA9IHRydWU7IGUuYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IG9yYi5leHBsb3Npb25NYWduaXR1ZGU7XG4gICAgICAgICAgZS5hY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xuICAgICAgICAgIGtpbGxzKys7IHVwZGF0ZVJlYWRvdXQoKTsgd2luZG93LmdhbWVBdWRpbz8ucGxheShcIkVuZW15RGVzdHJveWVkXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW5lbXkgbW92ZW1lbnRcbiAgICBmb3IgKGNvbnN0IGUgb2YgWy4uLmVuZW1pZXNdKSB7XG4gICAgICBlLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBlLnkgKz0gb3JiLnNwZWVkICogZGVsdGEgLSBlLmFjdG9yLnkgKiBjYW52YXMuaGVpZ2h0IC8gMi41O1xuICAgICAgZS5hY3Rvci5tb3ZlVG8oMCwgMCk7XG4gICAgICBpZiAoZS5keWluZyAmJiBlLmFjdG9yLmRpc3Bvc2VkKSB7IGVuZW1pZXMuc3BsaWNlKGVuZW1pZXMuaW5kZXhPZihlKSwgMSk7IGNvbnRpbnVlOyB9XG4gICAgICBpZiAoIWUuZHlpbmcgJiYgTWF0aC5oeXBvdChlLnggLSBzcXVhZC54LCBlLnkgLSBwbGF5ZXJZKCkpIDw9IG9yYi5yYWRpdXMgKiAzLjIpIHtcbiAgICAgICAga2lsbFBsYXllcihub3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBpY2t1cHNcbiAgICBmb3IgKGNvbnN0IHAgb2YgWy4uLnBpY2t1cHNdKSB7XG4gICAgICBwLnkgKz0gNjIgKiBkZWx0YTtcbiAgICAgIGlmIChwLnkgPj0gcGxheWVyWSgpIC0gMTIgJiYgcC5sYW5lID09PSBwbGF5ZXJMYW5lKSB7XG4gICAgICAgIGVxdWlwKHAuc3dvcmRJZCk7IHBpY2t1cHMuc3BsaWNlKHBpY2t1cHMuaW5kZXhPZihwKSwgMSk7XG4gICAgICB9IGVsc2UgaWYgKHAueSA+IGNhbnZhcy5oZWlnaHQgKyAzMCkgcGlja3Vwcy5zcGxpY2UocGlja3Vwcy5pbmRleE9mKHApLCAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZWFkb3V0KCk7XG4gIH07XG5cbiAgY29uc3QgZHJhdyA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHMgPSBzY2FsZSgpO1xuICAgIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtcbiAgICAgIC4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkOiBcIm5lb25IYWxsXCIsIHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCwgdGltZU1zOiBub3cgfSkucHJpbWl0aXZlcyA/PyBbXSksXG4gICAgXTtcbiAgICBjb25zdCBweCA9IHNxdWFkLng7XG4gICAgY29uc3QgcHkgPSBwbGF5ZXJZKCk7XG5cbiAgICBjb25zdCBkZWYgPSBzd29yZEZhbWlseS5tZW1iZXJzW2FjdGl2ZVN3b3JkSWRdO1xuICAgIGNvbnN0IHN3b3JkQ29sb3IgPSBuZW9uUGFsZXR0ZVtkZWYuY29sb3JdO1xuICAgIGNvbnN0IHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdID0gW107XG4gICAgY29uc3Qgc3dvcmRTY2VuZSA9IHN3b3JkVmlzdWFscyh7XG4gICAgICBkZWZpbml0aW9uOiBkZWYsXG4gICAgICBzbGFzaDogc3dvcmRTdGF0ZS5hY3RpdmVTbGFzaCxcbiAgICAgIHg6IHB4LCB5OiBweSwgc2NhbGU6IHMsXG4gICAgICB2aXNpYmxlOiBwbGF5ZXJBbGl2ZSxcbiAgICB9KTtcbiAgICBwcmltaXRpdmVzLnB1c2goLi4uc3dvcmRTY2VuZS5wcmltaXRpdmVzKTtcbiAgICBzaGFwZXMucHVzaCguLi5zd29yZFNjZW5lLnNoYXBlcyk7XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgcGlja3Vwcykge1xuICAgICAgY29uc3QgcGlja3VwRGVmID0gc3dvcmRGYW1pbHkubWVtYmVyc1twaWNrdXAuc3dvcmRJZF07XG4gICAgICBzaGFwZXMucHVzaChzd29yZFBpY2t1cFZpc3VhbCh7XG4gICAgICAgIHg6IGxhbmVYKHBpY2t1cC5sYW5lKSwgeTogcGlja3VwLnksXG4gICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtwaWNrdXBEZWYuY29sb3JdLFxuICAgICAgICBub3csIHNjYWxlOiBzLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBzaGFwZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKHBsYXllckFjdG9yLCBzcXVhZC54LCBweSwgMTQpKTtcbiAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbWllcykgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShlLmFjdG9yLCBlLngsIGUueSwgMTgsIHsgcm90YXRpb25ZOiBNYXRoLnNpbihub3cgLyA3MDAgKyBlLmlkKSAqIC4xOCB9KSk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVzLCBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB7XG4gICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgcGxheWVyWTogcGxheWVyWSgpLFxuICAgIH0pLCBub3cgLyAxMDAwKTtcbiAgfTtcblxuICBjb25zdCBmcmFtZSA9IChub3c6IG51bWJlcik6IHZvaWQgPT4geyB1cGRhdGUobm93KTsgZHJhdyhub3cpOyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpOyB9O1xuICBlcXVpcChhY3RpdmVTd29yZElkKTtcbiAgc3Bhd25FbmVteSgwKTsgc3Bhd25FbmVteSgxKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbn0gY2F0Y2ggKGNhdXNlKSB7XG4gIGVycm9yLmhpZGRlbiA9IGZhbHNlO1xuICBlcnJvci50ZXh0Q29udGVudCA9IGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZS5tZXNzYWdlIDogU3RyaW5nKGNhdXNlKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgZ2FtZUF1ZGlvPzogeyBwbGF5KGlkOiBzdHJpbmcpOiB2b2lkOyBwbGF5Um90YXRlZChpZDogc3RyaW5nLCBuOiBudW1iZXIpOiB2b2lkIH07IH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxH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QyxDQUFDO0FBQUEsRUFDN0UsS0FBSyxRQUFRLGFBQWEsWUFBWSxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2pGLEtBQUssUUFBUSxnQkFBZ0IsV0FBVyxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFHLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ3JGLEtBQUssUUFBUSxnQkFBZ0IsV0FBVyxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDcE4sS0FBSyxRQUFRLGVBQWUsVUFBVSxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxJQUFHLEtBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxLQUFHLEtBQUksR0FBRSxDQUFDLEtBQUcsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDckssS0FBSyxRQUFRLFlBQVksWUFBWSxRQUFR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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1MMUIsU0FBUyxLQUFLQyxNQUErQztBQUMzRCxRQUFNLFFBQVFBLEtBQUksUUFBUSxLQUFLLEVBQUU7QUFDakMsTUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUssRUFBRyxPQUFNLElBQUksTUFBTSwyQ0FBMkNBLElBQUcsSUFBSTtBQUNyRyxTQUFPO0FBQUEsSUFDTCxPQUFPLFNBQVMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSTtBQUFBLElBQ3pDLE9BQU8sU0FBUyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJO0FBQUEsSUFDekMsT0FBTyxTQUFTLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUk7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sd0JBQU4sTUFBTSx1QkFBc0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0E7QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsZUFBeUQ7QUFBQSxFQUV6RCxZQUFZQyxTQUEyQixRQUFtQixTQUEyQixRQUEwQjtBQUM3RyxTQUFLLFNBQVNBO0FBQ2QsU0FBSyxTQUFTO0FBQ2QsU0FBSyxXQUFXO0FBQ2hCLFVBQU0sU0FBUyxPQUFPLG1CQUFtQixFQUFFLE1BQU1GLFFBQU8sQ0FBQztBQUN6RCxTQUFLLFlBQVksT0FBTyxxQkFBcUI7QUFBQSxNQUMzQyxRQUFRO0FBQUEsTUFDUixRQUFRLEVBQUUsUUFBUSxZQUFZLGFBQWE7QUFBQSxNQUMzQyxVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0EsWUFBWTtBQUFBLFFBQ1osU0FBUyxDQUFDLEVBQUUsUUFBUSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsYUFBYSxXQUFXLE1BQU0sR0FBRyxPQUFPLEVBQUUsV0FBVyxPQUFPLFdBQVcsTUFBTSxFQUFFLEVBQUUsQ0FBQztBQUFBLE1BQ3JJO0FBQUEsTUFDQSxXQUFXLEVBQUUsVUFBVSxnQkFBZ0I7QUFBQSxJQUN6QyxDQUFDO0FBQ0QsU0FBSyxlQUFlLE9BQU8sYUFBYSxFQUFFLE1BQU0sSUFBSSxPQUFPLGVBQWUsVUFBVSxlQUFlLFNBQVMsQ0FBQztBQUM3RyxTQUFLLG1CQUFtQixPQUFPLGFBQWE7QUFBQSxNQUMxQyxNQUFNLGdCQUFnQixxQkFBcUI7QUFBQSxNQUMzQyxPQUFPLGVBQWUsVUFBVSxlQUFlO0FBQUEsSUFDakQsQ0FBQztBQUNELFNBQUssYUFBYSxPQUFPLGdCQUFnQjtBQUFBLE1BQ3ZDLFFBQVEsS0FBSyxVQUFVLG1CQUFtQixDQUFDO0FBQUEsTUFDM0MsU0FBUztBQUFBLFFBQ1AsRUFBRSxTQUFTLEdBQUcsVUFBVSxFQUFFLFFBQVEsS0FBSyxhQUFhLEVBQUU7QUFBQSxRQUN0RCxFQUFFLFNBQVMsR0FBRyxVQUFVLEVBQUUsUUFBUSxLQUFLLGlCQUFpQixFQUFFO0FBQUEsTUFDNUQ7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxhQUFhLE9BQU9FLFNBQTJEO0FBQzdFLFFBQUksQ0FBQyxVQUFVLElBQUssT0FBTSxJQUFJLE1BQU0scUNBQXFDO0FBQ3pFLFVBQU0sVUFBVSxNQUFNLFVBQVUsSUFBSSxlQUFlO0FBQ25ELFFBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxNQUFNLHlDQUF5QztBQUN2RSxVQUFNLFNBQVMsTUFBTSxRQUFRLGNBQWM7QUFDM0MsVUFBTSxVQUFVQSxRQUFPLFdBQVcsUUFBUTtBQUMxQyxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSwrQ0FBK0M7QUFDN0UsVUFBTSxTQUFTLFVBQVUsSUFBSSx5QkFBeUI7QUFDdEQsWUFBUSxVQUFVLEVBQUUsUUFBUSxRQUFRLFdBQVcsZ0JBQWdCLENBQUM7QUFDaEUsV0FBTyxJQUFJLHVCQUFzQkEsU0FBUSxRQUFRLFNBQVMsTUFBTTtBQUFBLEVBQ2xFO0FBQUEsRUFFQSxlQUFlLE9BQWUsUUFBc0I7QUFDbEQsU0FBSyxlQUFlLEVBQUUsT0FBTyxPQUFPO0FBQ3BDLFNBQUssT0FBTyxRQUFRO0FBQ3BCLFNBQUssT0FBTyxTQUFTO0FBQ3JCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLFlBQTZCLGNBQWMsR0FBRyxnQkFBZ0IsT0FBTyxZQUFtQztBQUM3RyxTQUFLLFFBQVE7QUFDYixVQUFNLFVBQVUsV0FBVyxNQUFNLEdBQUcsYUFBYTtBQUNqRCxVQUFNLE9BQU8sSUFBSSxhQUFhLFFBQVEsU0FBUyxrQkFBa0I7QUFDakUsWUFBUSxRQUFRLENBQUMsTUFBTSxVQUFVO0FBQy9CLFlBQU0sU0FBUyxRQUFRO0FBQ3ZCLFdBQUssSUFBSTtBQUFBLFFBQ1AsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFBLFFBQU8sS0FBSyxVQUFVLEtBQUs7QUFBQSxRQUNoRCxHQUFHLEtBQUssS0FBSyxLQUFLO0FBQUEsUUFDbEIsR0FBRyxLQUFLLEtBQUssa0JBQWtCLEtBQUssS0FBSztBQUFBLFFBQ3pDLEtBQUssUUFBUTtBQUFBLFFBQ2IsS0FBSyxhQUFhO0FBQUEsUUFDbEIsS0FBSyxVQUFVLFFBQVEsSUFBSSxLQUFLLFVBQVUsU0FBUyxJQUFJLEtBQUssVUFBVSxhQUFhLElBQUksS0FBSyxVQUFVLFlBQVksSUFBSSxLQUFLLFVBQVUsVUFBVSxJQUFJLEtBQUssVUFBVSxTQUFTLElBQUksS0FBSyxVQUFVLFFBQVEsSUFBSSxLQUFLLFVBQVUsU0FBUyxJQUFJO0FBQUEsUUFDdE8sS0FBSyxZQUFZLEtBQUssV0FBVztBQUFBLFFBQ2pDLEtBQUssWUFBWSxLQUFLLGdCQUFnQjtBQUFBLFFBQ3RDLEtBQUssVUFBVSxLQUFLLGtCQUFrQjtBQUFBLFFBQ3RDO0FBQUEsUUFDQTtBQUFBLE1BQ0YsR0FBRyxNQUFNO0FBQUEsSUFDWCxDQUFDO0FBQ0QsU0FBSyxPQUFPLE1BQU0sWUFBWSxLQUFLLGNBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxLQUFLLE9BQU8sT0FBTyxLQUFLLE9BQU8sUUFBUSxRQUFRLFFBQVEsV0FBVyxDQUFDLENBQUM7QUFDMUksUUFBSSxLQUFLLE9BQVEsTUFBSyxPQUFPLE1BQU0sWUFBWSxLQUFLLGtCQUFrQixHQUFHLElBQUk7QUFDN0UsVUFBTSxVQUFVLEtBQUssT0FBTyxxQkFBcUI7QUFDakQsVUFBTSxPQUFPLFFBQVEsZ0JBQWdCO0FBQUEsTUFDbkMsa0JBQWtCLENBQUM7QUFBQSxRQUNqQixNQUFNLGNBQWMsS0FBSyxTQUFTLGtCQUFrQixFQUFFLFdBQVc7QUFBQSxRQUNqRSxZQUFZLEVBQUUsR0FBRyxNQUFPLEdBQUcsTUFBTyxHQUFHLE9BQU8sR0FBRyxFQUFFO0FBQUEsUUFDakQsUUFBUSxnQkFBZ0IsU0FBUztBQUFBLFFBQ2pDLFNBQVM7QUFBQSxNQUNYLENBQUM7QUFBQSxJQUNILENBQUM7QUFDRCxRQUFJLFFBQVEsUUFBUTtBQUNsQixXQUFLLFlBQVksS0FBSyxTQUFTO0FBQy9CLFdBQUssYUFBYSxHQUFHLEtBQUssVUFBVTtBQUNwQyxXQUFLLEtBQUssR0FBRyxRQUFRLE1BQU07QUFBQSxJQUM3QjtBQUNBLFNBQUssSUFBSTtBQUNULFNBQUssT0FBTyxNQUFNLE9BQU8sQ0FBQyxRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDN0M7QUFBQSxFQUVBLFVBQWdCO0FBQ2QsUUFBSSxLQUFLLGNBQWM7QUFDckIsVUFBSSxLQUFLLE9BQU8sVUFBVSxLQUFLLGFBQWEsTUFBTyxNQUFLLE9BQU8sUUFBUSxLQUFLLGFBQWE7QUFDekYsVUFBSSxLQUFLLE9BQU8sV0FBVyxLQUFLLGFBQWEsT0FBUSxNQUFLLE9BQU8sU0FBUyxLQUFLLGFBQWE7QUFDNUY7QUFBQSxJQUNGO0FBQ0EsVUFBTSxRQUFRLEtBQUssSUFBSSxvQkFBb0IsR0FBRyxDQUFDO0FBQy9DLFVBQU0sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sS0FBSyxPQUFPLGNBQWMsS0FBSyxDQUFDO0FBQ3JFLFVBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sS0FBSyxPQUFPLGVBQWUsS0FBSyxDQUFDO0FBQ3ZFLFFBQUksS0FBSyxPQUFPLFVBQVUsU0FBUyxLQUFLLE9BQU8sV0FBVyxRQUFRO0FBQ2hFLFdBQUssT0FBTyxRQUFRO0FBQ3BCLFdBQUssT0FBTyxTQUFTO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQ0Y7OztBQ3ZUTyxJQUFNLDJCQUFOLE1BQU0sMEJBQXlCO0FBQUEsRUFDM0I7QUFBQSxFQUNBO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVRLFlBQVlDLFNBQTJCLFFBQW1CLFNBQTJCLFFBQTBCLE9BQWUsUUFBZ0I7QUFDcEosU0FBSyxTQUFTQTtBQUFRLFNBQUssU0FBUztBQUFRLFNBQUssV0FBVztBQUFTLFNBQUssU0FBUztBQUFPLFNBQUssVUFBVTtBQUN6RyxTQUFLLGNBQWMsSUFBSSxzQkFBc0JBLFNBQVEsUUFBUSxTQUFTLE1BQU0sRUFBRSxlQUFlLE9BQU8sTUFBTTtBQUMxRyxTQUFLLFVBQVUsSUFBSSwyQkFBMkJBLFNBQVEsUUFBUSxTQUFTLE1BQU0sRUFBRSxlQUFlLE9BQU8sTUFBTTtBQUFBLEVBQzdHO0FBQUEsRUFFQSxhQUFhLE9BQU9BLFNBQTJCLGNBQXNCLGVBQTBEO0FBQzdILFFBQUksQ0FBQyxVQUFVLElBQUssT0FBTSxJQUFJLE1BQU0scURBQXFEO0FBQ3pGLFVBQU0sVUFBVSxNQUFNLFVBQVUsSUFBSSxlQUFlO0FBQ25ELFFBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxNQUFNLHlDQUF5QztBQUN2RSxVQUFNLFNBQVMsTUFBTSxRQUFRLGNBQWM7QUFDM0MsVUFBTSxVQUFVQSxRQUFPLFdBQVcsUUFBUTtBQUMxQyxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSwyQ0FBMkM7QUFDekUsVUFBTSxTQUFTLFVBQVUsSUFBSSx5QkFBeUI7QUFDdEQsWUFBUSxVQUFVLEVBQUUsUUFBUSxRQUFRLFdBQVcsZ0JBQWdCLENBQUM7QUFDaEUsV0FBTyxJQUFJLDBCQUF5QkEsU0FBUSxRQUFRLFNBQVMsUUFBUSxjQUFjLGFBQWE7QUFBQSxFQUNsRztBQUFBLEVBRUEsT0FBTyxPQUF5QixjQUFjLFlBQVksSUFBSSxJQUFJLEtBQVk7QUFDNUUsVUFBTSxTQUFTLEtBQUssU0FBUyxrQkFBa0IsRUFBRSxXQUFXO0FBQzVELFNBQUssWUFBWSxPQUFPLENBQUMsR0FBSSxNQUFNLGNBQWMsQ0FBQyxDQUFFLEdBQUcsYUFBYSxPQUFPLE1BQU07QUFDakYsVUFBTSxTQUFTLEtBQUssU0FBUyxLQUFLO0FBQ2xDLFNBQUssUUFBUSxRQUFRLE1BQU0sVUFBVSxDQUFDLEdBQUcsSUFBSSxZQUFVO0FBQUEsTUFDckQsR0FBRztBQUFBLE1BQ0gsSUFBSSxNQUFNLElBQUksS0FBSyxTQUFTLE9BQU0sU0FBUztBQUFBLE1BQzNDLElBQUksTUFBSyxNQUFNLElBQUksS0FBSyxXQUFXO0FBQUEsTUFDbkMsT0FBTyxNQUFNLE9BQU8sS0FBSyxVQUFVO0FBQUEsSUFDckMsRUFBRSxHQUFHLE1BQU0sTUFBTTtBQUFBLEVBQ25CO0FBQUEsRUFFQSxVQUFnQjtBQUNkLFNBQUssUUFBUSxRQUFRLEtBQUs7QUFDMUIsU0FBSyxPQUFPLFFBQVE7QUFBQSxFQUN0QjtBQUNGOzs7QUNyRE8sSUFBTSxxQkFBcUIsQ0FBQyxVQUFVO0FBZTdDLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sZUFBZTtBQUNyQixJQUFNLGdCQUFnQjtBQUN0QixJQUFNLGdCQUFnQjtBQUN0QixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLGlCQUFpQjtBQUN2QixJQUFNLGtCQUFrQjtBQU1qQixTQUFTLG9CQUFvQixPQUEyQztBQUM3RSxTQUFRLG1CQUF5QyxTQUFTLEtBQUs7QUFDakU7QUFFTyxTQUFTLHNCQUFzQixTQUFtRDtBQUN2RixVQUFRLFFBQVEsU0FBUztBQUFBLElBQ3ZCLEtBQUs7QUFDSCxhQUFPLGVBQWUsT0FBTztBQUFBLEVBQ2pDO0FBQ0Y7QUFFQSxTQUFTLGVBQWUsU0FBbUQ7QUFDekUsUUFBTSxFQUFFLE9BQU8sUUFBUSxPQUFPLElBQUk7QUFDbEMsUUFBTSxhQUE4QixDQUFDO0FBQ3JDLFFBQU0sV0FBVyxhQUFhLE9BQU8sTUFBTTtBQUUzQyxjQUFZLFlBQVksT0FBTyxRQUFRLE1BQU07QUFDN0MsZUFBYSxZQUFZLFFBQVE7QUFDakMsbUJBQWlCLFlBQVksVUFBVSxNQUFNO0FBQzdDLHFCQUFtQixZQUFZLFVBQVUsTUFBTTtBQUMvQyxxQkFBbUIsWUFBWSxVQUFVLE1BQU07QUFDL0Msd0JBQXNCLFlBQVksVUFBVSxNQUFNO0FBQ2xELG9CQUFrQixZQUFZLFVBQVUsTUFBTTtBQUM5QyxzQkFBb0IsWUFBWSxVQUFVLE1BQU07QUFFaEQsU0FBTyxFQUFFLFdBQVc7QUFDdEI7QUFFQSxTQUFTLGFBQWEsT0FBZSxRQUFnQjtBQUNuRCxRQUFNLEtBQUssRUFBRSxHQUFHLFFBQVEsS0FBSSxHQUFHLFNBQVMsZUFBZTtBQUN2RCxRQUFNLFVBQVUsU0FBUztBQUN6QixRQUFNLFdBQVcsU0FBUztBQUMxQixRQUFNLGFBQWEsUUFBUSxrQkFBa0I7QUFDN0MsUUFBTSxjQUFjLFFBQVEsbUJBQW1CO0FBQy9DLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLFlBQVksRUFBRSxHQUFHLFFBQVEsTUFBSyxZQUFZLEdBQUcsUUFBUTtBQUFBLElBQ3JELGFBQWEsRUFBRSxHQUFHLFFBQVEsTUFBSyxZQUFZLEdBQUcsUUFBUTtBQUFBLElBQ3RELGFBQWEsRUFBRSxHQUFHLEdBQUcsSUFBSSxhQUFhLEdBQUcsU0FBUztBQUFBLElBQ2xELGNBQWMsRUFBRSxHQUFHLEdBQUcsSUFBSSxhQUFhLEdBQUcsU0FBUztBQUFBLEVBQ3JEO0FBQ0Y7QUFFQSxTQUFTLFlBQVksT0FBd0IsT0FBZSxRQUFnQixRQUFzQjtBQUNoRyxRQUFNLFFBQVEsT0FBTSxLQUFLLElBQUksU0FBUyxlQUFlLElBQUk7QUFDekQsUUFBTSxLQUFLLEVBQUUsR0FBRyxRQUFRLEdBQUcsR0FBRyxTQUFTLE1BQUssT0FBTyxRQUFRLEtBQUksUUFBUSxTQUFTLE1BQUssT0FBTyxnQkFBZ0IsZ0JBQWdCLFdBQVcsTUFBTSxNQUFLLFdBQVcsTUFBSyxPQUFPLE9BQU8sQ0FBQztBQUNqTCxRQUFNLEtBQUssRUFBRSxHQUFHLFFBQVEsR0FBRyxHQUFHLFNBQVMsZ0JBQWdCLE9BQU8sUUFBUSxNQUFLLFFBQVEsS0FBSyxPQUFPLGNBQWMsZ0JBQWdCLGVBQWUsTUFBTSxLQUFJLFdBQVcsT0FBTSxRQUFRLE1BQUssT0FBTyxPQUFPLENBQUM7QUFDbk0sUUFBTSxLQUFLLEVBQUUsR0FBRyxRQUFRLEdBQUcsR0FBRyxTQUFTLE1BQUssT0FBTyxRQUFRLE1BQUssUUFBUSxLQUFLLE9BQU8sZ0JBQWdCLGdCQUFnQixpQkFBaUIsTUFBTSxNQUFLLFdBQVcsTUFBSyxPQUFPLE9BQU8sQ0FBQztBQUNqTDtBQUVBLFNBQVMsYUFBYSxPQUF3QixVQUFpRDtBQUM3RixRQUFNLEVBQUUsWUFBWSxhQUFhLGFBQWEsYUFBYSxJQUFJO0FBQy9ELGFBQVcsQ0FBQyxRQUFRLE9BQU8sS0FBSyxDQUFDLENBQUMsWUFBWSxXQUFXLEdBQUcsQ0FBQyxhQUFhLFlBQVksQ0FBQyxHQUFZO0FBQ2pHLG1CQUFlLE9BQU8sUUFBUSxTQUFTLGNBQWMsTUFBSyxHQUFHO0FBQzdELG1CQUFlLE9BQU8sUUFBUSxTQUFTLGVBQWUsTUFBSyxHQUFHO0FBQUEsRUFDaEU7QUFFQSxXQUFTLE9BQU8sR0FBRyxRQUFRLEdBQUcsUUFBUTtBQUNwQyxVQUFNLElBQUksT0FBTztBQUNqQixVQUFNLFFBQVEsVUFBVSxZQUFZLGFBQWEsQ0FBQztBQUNsRCxVQUFNLE1BQU0sVUFBVSxhQUFhLGNBQWMsQ0FBQztBQUNsRCxVQUFNLFFBQVEsU0FBUyxJQUFJLGtCQUFrQjtBQUM3QyxtQkFBZSxPQUFPLE9BQU8sS0FBSyxPQUFPLFNBQVMsSUFBSSxPQUFNLEtBQUksR0FBRztBQUNuRSxtQkFBZSxPQUFPLE9BQU8sS0FBSyxlQUFlLFNBQVMsSUFBSSxPQUFNLE1BQUssR0FBRTtBQUFBLEVBQzdFO0FBQ0Y7QUFFQSxTQUFTLGlCQUFpQixPQUF3QixVQUEyQyxRQUFzQjtBQUNqSCxRQUFNLEVBQUUsWUFBWSxhQUFhLGFBQWEsYUFBYSxJQUFJO0FBQy9ELFdBQVMsTUFBTSxHQUFHLE1BQU0sSUFBSSxPQUFPO0FBQ2pDLFVBQU0sSUFBSSxLQUFLLElBQUksTUFBTSxJQUFJLElBQUk7QUFDakMsVUFBTSxPQUFPLFVBQVUsYUFBYSxZQUFZLENBQUM7QUFDakQsVUFBTSxRQUFRLFVBQVUsY0FBYyxhQUFhLENBQUM7QUFDcEQsVUFBTSxXQUFXLE9BQU0sS0FBSyxJQUFJLFNBQVMsTUFBTSxNQUFNLElBQUcsSUFBSTtBQUM1RCxVQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLFNBQVMsTUFBTSxNQUFNLElBQUcsQ0FBQztBQUM1RCxVQUFNLFFBQVEsTUFBTSxNQUFNLElBQUksZ0JBQWdCLE1BQU0sTUFBTSxJQUFJLGdCQUFnQixNQUFNLE1BQU0sSUFBSSxrQkFBa0I7QUFDaEgsbUJBQWUsT0FBTyxNQUFNLE9BQU8sUUFBUSxPQUFNLElBQUksU0FBUSxPQUFNLFdBQVcsUUFBTyxRQUFRLE9BQU0sTUFBTSxJQUFJLENBQUM7QUFDOUcsbUJBQWUsT0FBTyxNQUFNLE9BQU8sUUFBUSxNQUFLLElBQUksU0FBUSxPQUFNLFdBQVcsUUFBTyxRQUFRLE1BQUssT0FBTSxJQUFJLEdBQUU7QUFBQSxFQUMvRztBQUNGO0FBRUEsU0FBUyxtQkFBbUIsT0FBd0IsVUFBMkMsUUFBc0I7QUFDbkgsUUFBTSxFQUFFLFlBQVksYUFBYSxhQUFhLGFBQWEsSUFBSTtBQUMvRCxXQUFTLGFBQWEsR0FBRyxhQUFhLEdBQUcsY0FBYztBQUNyRCxVQUFNLFVBQVUsU0FBUyxPQUFPLGFBQWEsS0FBSztBQUNsRCxVQUFNLElBQUksS0FBSyxJQUFJLFFBQVEsSUFBSTtBQUMvQixVQUFNLE9BQU8sVUFBVSxhQUFhLFlBQVksQ0FBQztBQUNqRCxVQUFNLFFBQVEsVUFBVSxjQUFjLGFBQWEsQ0FBQztBQUNwRCxVQUFNLFVBQVUsUUFBTyxJQUFJO0FBQzNCLG1CQUFlLE9BQU8sTUFBTSxPQUFPLGVBQWUsU0FBUyxNQUFNLElBQUksR0FBRztBQUFBLEVBQzFFO0FBQ0Y7QUFFQSxTQUFTLG1CQUFtQixPQUF3QixVQUEyQyxRQUFzQjtBQUNuSCxRQUFNLEVBQUUsWUFBWSxhQUFhLGFBQWEsYUFBYSxJQUFJO0FBQy9ELFFBQU0sT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFO0FBQ2hDLGFBQVcsT0FBTyxNQUFNO0FBQ3RCLFVBQU0sSUFBSSxLQUFLLElBQUksTUFBTSxJQUFJLElBQUk7QUFDakMsVUFBTSxTQUFTLFVBQVUsVUFBVSxhQUFhLFlBQVksQ0FBQyxHQUFHLFVBQVUsY0FBYyxhQUFhLENBQUMsR0FBRyxHQUFFO0FBQzNHLFVBQU0sUUFBUSxPQUFNLElBQUk7QUFDeEIsVUFBTSxRQUFRLE9BQU0sS0FBSyxJQUFJLFNBQVMsTUFBTSxNQUFNLEdBQUcsSUFBSTtBQUN6RCxVQUFNLEtBQUs7QUFBQSxNQUNULEdBQUcsT0FBTztBQUFBLE1BQ1YsR0FBRyxPQUFPO0FBQUEsTUFDVixPQUFPLElBQUk7QUFBQSxNQUNYLFFBQVEsSUFBSTtBQUFBLE1BQ1osT0FBTyxNQUFNLE1BQU0sSUFBSSxrQkFBa0I7QUFBQSxNQUN6QyxnQkFBZ0IsTUFBTSxNQUFNLElBQUksaUJBQWlCO0FBQUEsTUFDakQsTUFBTTtBQUFBLE1BQ04sV0FBVyxPQUFNLFFBQVE7QUFBQSxNQUN6QixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBRUEsU0FBUyxzQkFBc0IsT0FBd0IsVUFBMkMsUUFBc0I7QUFDdEgsUUFBTSxFQUFFLElBQUksT0FBTyxRQUFRLGFBQWEsYUFBYSxJQUFJO0FBQ3pELFFBQU0sWUFBWSxPQUFNLEtBQUssSUFBSSxTQUFTLEdBQUcsSUFBSTtBQUNqRCxpQkFBZSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksUUFBUSxNQUFLLEdBQUcsR0FBRyxJQUFJLFNBQVMsTUFBSyxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksUUFBUSxNQUFLLEdBQUcsR0FBRyxJQUFJLFNBQVMsTUFBSyxHQUFHLGdCQUFnQixNQUFLLFlBQVksTUFBSyxHQUFHO0FBQ3ZLLGlCQUFlLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxRQUFRLE1BQUssR0FBRyxHQUFHLElBQUksU0FBUyxNQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxRQUFRLE1BQUssR0FBRyxHQUFHLElBQUksU0FBUyxNQUFLLEdBQUcsZUFBZSxNQUFLLElBQUc7QUFDckosaUJBQWUsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLFFBQVEsTUFBSyxHQUFHLEdBQUcsSUFBSSxTQUFTLE1BQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLFFBQVEsTUFBSyxHQUFHLEdBQUcsSUFBSSxTQUFTLE1BQUssR0FBRyxpQkFBaUIsTUFBSyxJQUFHO0FBRXZKLFdBQVMsUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTO0FBQ3RDLFVBQU0sS0FBSyxRQUFRLE9BQU07QUFDekIsVUFBTSxPQUFPLFVBQVUsYUFBYSxjQUFjLENBQUM7QUFDbkQsVUFBTSxXQUFXLEtBQUssSUFBSSxJQUFJLEdBQUUsSUFBSTtBQUNwQyxVQUFNLEtBQUs7QUFBQSxNQUNULEdBQUcsS0FBSztBQUFBLE1BQ1IsR0FBRyxLQUFLLElBQUksVUFBVSxRQUFPLFdBQVc7QUFBQSxNQUN4QyxPQUFPLElBQUksV0FBVztBQUFBLE1BQ3RCLFFBQVEsVUFBVSxRQUFPLFdBQVc7QUFBQSxNQUNwQyxPQUFPLFFBQVEsTUFBTSxJQUFJLGdCQUFnQjtBQUFBLE1BQ3pDLGdCQUFnQixRQUFRLE1BQU0sSUFBSSxnQkFBZ0I7QUFBQSxNQUNsRCxNQUFNO0FBQUEsTUFDTixXQUFXLE9BQU0sWUFBWTtBQUFBLE1BQzdCLE9BQU87QUFBQSxNQUNQLFVBQVUsS0FBSyxJQUFJLFFBQVEsR0FBRyxJQUFJO0FBQUEsSUFDcEMsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVBLFNBQVMsa0JBQWtCLE9BQXdCLFVBQTJDLFFBQXNCO0FBQ2xILFFBQU0sRUFBRSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sT0FBTyxJQUFJO0FBQzlFLGFBQVcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQ3pCLGFBQVMsUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTO0FBQ3RDLFlBQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxLQUFLLElBQUksSUFBSTtBQUN6QyxZQUFNLE9BQU8sU0FBUyxJQUNsQixVQUFVLGFBQWEsWUFBWSxDQUFDLElBQ3BDLFVBQVUsY0FBYyxhQUFhLENBQUM7QUFDMUMsWUFBTSxVQUFVLFNBQVMsSUFBSSxLQUFLO0FBQ2xDLFlBQU0sVUFBVSxPQUFNLEtBQUssSUFBSSxTQUFTLE1BQU0sUUFBUSxNQUFNLElBQUksSUFBSTtBQUNwRSxZQUFNLEtBQUs7QUFBQSxRQUNULEdBQUcsS0FBSyxJQUFJLFVBQVUsU0FBUyxRQUFPLElBQUk7QUFBQSxRQUMxQyxHQUFHLEtBQUssSUFBSSxVQUFVLFFBQU8sSUFBSTtBQUFBLFFBQ2pDLE9BQU8sTUFBTSxJQUFJO0FBQUEsUUFDakIsUUFBUSxVQUFVLFFBQU8sSUFBSTtBQUFBLFFBQzdCLE9BQU8sUUFBUSxNQUFNLElBQUksaUJBQWlCLFFBQVEsTUFBTSxJQUFJLGdCQUFnQjtBQUFBLFFBQzVFLGdCQUFnQjtBQUFBLFFBQ2hCLE1BQU07QUFBQSxRQUNOLFlBQVksUUFBTyxJQUFJLFNBQVE7QUFBQSxRQUMvQixPQUFPO0FBQUEsTUFDVCxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsb0JBQW9CLE9BQXdCLFVBQTJDLFFBQXNCO0FBQ3BILFFBQU0sRUFBRSxZQUFZLGFBQWEsYUFBYSxhQUFhLElBQUk7QUFDL0QsV0FBUyxRQUFRLEdBQUcsUUFBUSxJQUFJLFNBQVM7QUFDdkMsVUFBTSxRQUFRLE9BQVEsUUFBUSxLQUFNLE1BQU87QUFDM0MsVUFBTSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQztBQUMxQyxVQUFNLE9BQU8sUUFBUSxNQUFNLElBQUksT0FBTSxRQUFRLE1BQU0sSUFBSSxPQUFNLFFBQVEsTUFBTSxJQUFJLE9BQU07QUFDckYsVUFBTSxPQUFPLFVBQVUsYUFBYSxZQUFZLENBQUM7QUFDakQsVUFBTSxRQUFRLFVBQVUsY0FBYyxhQUFhLENBQUM7QUFDcEQsVUFBTSxRQUFRLFVBQVUsTUFBTSxPQUFPLE9BQU8sS0FBSyxJQUFJLFFBQVEsTUFBTSxTQUFTLElBQUksSUFBSSxLQUFJO0FBQ3hGLFVBQU0sVUFBVSxPQUFNLEtBQUssSUFBSSxTQUFTLE1BQU0sUUFBUSxHQUFHLElBQUk7QUFDN0QsVUFBTSxLQUFLO0FBQUEsTUFDVCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1QsT0FBTyxNQUFLLFFBQVEsSUFBSTtBQUFBLE1BQ3hCLFFBQVEsS0FBSyxRQUFRLElBQUk7QUFBQSxNQUN6QixPQUFPLFFBQVEsTUFBTSxJQUFJLGlCQUFpQixRQUFRLE1BQU0sSUFBSSxnQkFBZ0I7QUFBQSxNQUM1RSxnQkFBZ0I7QUFBQSxNQUNoQixNQUFNO0FBQUEsTUFDTixZQUFZLE9BQU8sUUFBUSxJQUFLLFNBQVE7QUFBQSxNQUN4QyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBRUEsU0FBUyxlQUFlLE9BQXdCLEdBQTZCLEdBQTZCLE9BQWUsT0FBZSxXQUF5QjtBQUMvSixRQUFNLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDbkIsUUFBTSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ25CLFFBQU0sU0FBUyxLQUFLLE1BQU0sSUFBSSxFQUFFO0FBQ2hDLFFBQU0sS0FBSztBQUFBLElBQ1QsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUEsSUFDakIsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUEsSUFDakIsT0FBTztBQUFBLElBQ1AsUUFBUSxTQUFTO0FBQUEsSUFDakI7QUFBQSxJQUNBLGdCQUFnQixZQUFZO0FBQUEsSUFDNUIsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLElBQ1AsVUFBVSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFBQSxFQUM5QixDQUFDO0FBQ0g7QUFFQSxTQUFTLFVBQVUsR0FBNkIsR0FBNkIsR0FBcUM7QUFDaEgsU0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDOUQ7OztBQzlPTyxJQUFNLGVBQWU7QUFBQSxFQUMxQix1QkFBdUI7QUFDekI7QUFFQSxJQUFJLENBQUMsT0FBTyxTQUFTLGFBQWEscUJBQXFCLEtBQUssYUFBYSx5QkFBeUIsR0FBRztBQUNuRyxRQUFNLElBQUksTUFBTSx1RUFBdUU7QUFDekY7OztBQ2RPLElBQWUsbUJBQWYsTUFBMEU7QUFBQSxFQUtyRSxRQUFRLFdBQW9CLFNBQW9DO0FBQ3hFLFFBQUksQ0FBQyxVQUFXLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSyxRQUFRLEtBQUssT0FBTyxFQUFFO0FBQUEsRUFDaEU7QUFHRjs7O0FDOENBLElBQU0sUUFBUSxDQUNaLGFBQ0EsWUFFYztBQUFBLEVBQ2QsT0FBTztBQUFBLEVBQ1AsaUJBQWlCO0FBQUEsRUFDakIsWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsUUFBUTtBQUFBLEVBQ1Isb0JBQW9CO0FBQUEsRUFDcEIsV0FBVztBQUFBLEVBQ1gsR0FBRztBQUNMO0FBRU8sSUFBTSxzQkFBTixjQUFrQyxpQkFBNEM7QUFBQSxFQUMxRSxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixpQkFBaUI7QUFBQSxJQUN4QixXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixxQkFBcUIsQ0FBQyxVQUFVLGVBQWUsU0FBUyxlQUFlLGNBQWM7QUFBQSxJQUNyRiw0QkFBNEIsQ0FBQyxZQUFZLGtCQUFrQjtBQUFBLEVBQzdEO0FBQUEsRUFFUyxVQUFVO0FBQUEsSUFDakIsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQWdCLFFBQVE7QUFBQSxNQUFXLGFBQWE7QUFBQSxNQUFTLGFBQWE7QUFBQSxNQUFVLG9CQUFvQjtBQUFBLE1BQzNHLGdCQUFnQixFQUFFLFlBQVksY0FBYyxnQkFBZ0IsbUJBQW1CLGlCQUFpQixRQUFRLGlCQUFpQixRQUFRLFlBQVksWUFBWSxXQUFXLFFBQVEsa0JBQWtCLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLEtBQUssY0FBYyxhQUFhLGNBQWMsWUFBWSxrQkFBa0IsSUFBSSxrQkFBa0IsS0FBSyxrQkFBa0IsRUFBRTtBQUFBLE1BQ3RXLFFBQVE7QUFBQSxRQUNOLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sR0FBRSxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxRQUN0SSxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUssaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixLQUFHLGVBQWMsSUFBRSxDQUFDO0FBQUEsUUFDdkksTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFLLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLElBQUUsQ0FBQztBQUFBLE1BQzdJO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQWUsUUFBUTtBQUFBLE1BQVUsYUFBYTtBQUFBLE1BQWMsYUFBYTtBQUFBLE1BQWUsb0JBQW9CO0FBQUEsTUFDbkgsZ0JBQWdCLEVBQUUsWUFBWSxlQUFlLGdCQUFnQix5QkFBeUIsaUJBQWlCLFVBQVUsaUJBQWlCLFNBQVMsWUFBWSxRQUFRLFdBQVcsU0FBUyxrQkFBa0IsR0FBRyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxjQUFjLGdCQUFnQixjQUFjLGlCQUFpQixrQkFBa0IsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsRUFBRTtBQUFBLE1BQ25YLFFBQVE7QUFBQSxRQUNOLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxlQUFjLEdBQUUsYUFBWSxJQUFHLG9CQUFtQixHQUFFLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDN0ssTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLGVBQWMsS0FBSSxhQUFZLElBQUcsb0JBQW1CLEdBQUUsa0JBQWlCLEtBQUcsZUFBYyxJQUFFLENBQUM7QUFBQSxRQUM3SyxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUksaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssZUFBYyxHQUFFLGFBQVksSUFBRyxvQkFBbUIsR0FBRSxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLE1BQ2xMO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osT0FBTztBQUFBLE1BQWlCLFFBQVE7QUFBQSxNQUFVLGFBQWE7QUFBQSxNQUFjLGFBQWE7QUFBQSxNQUFTLG9CQUFvQjtBQUFBLE1BQy9HLGdCQUFnQixFQUFFLFlBQVkscUJBQXFCLGdCQUFnQixpQkFBaUIsaUJBQWlCLFFBQVEsaUJBQWlCLFFBQVEsWUFBWSxVQUFVLFdBQVcsUUFBUSxrQkFBa0IsS0FBSyxpQkFBaUIsS0FBSyxpQkFBaUIsTUFBTSxjQUFjLGdCQUFnQixjQUFjLGNBQWMsa0JBQWtCLElBQUksa0JBQWtCLEtBQUssa0JBQWtCLEVBQUU7QUFBQSxNQUM5VyxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSSxRQUFPLE1BQUksaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssWUFBVyxHQUFFLGlCQUFnQixJQUFHLGVBQWMsTUFBSSxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxRQUM1TCxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUksaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssWUFBVyxHQUFFLGlCQUFnQixJQUFHLGVBQWMsTUFBSSxhQUFZLElBQUcsa0JBQWlCLEtBQUcsZUFBYyxJQUFFLENBQUM7QUFBQSxRQUMzTCxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLEtBQUcsaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsWUFBVyxHQUFFLGlCQUFnQixJQUFHLGVBQWMsR0FBRSxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxNQUN6TDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUFnQixRQUFRO0FBQUEsTUFBWSxhQUFhO0FBQUEsTUFBWSxhQUFhO0FBQUEsTUFBZSxvQkFBb0I7QUFBQSxNQUNwSCxnQkFBZ0IsRUFBRSxZQUFZLGNBQWMsZ0JBQWdCLGtCQUFrQixpQkFBaUIsUUFBUSxpQkFBaUIsVUFBVSxZQUFZLE9BQU8sV0FBVyxRQUFRLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGlCQUFpQixLQUFLLGNBQWMsZ0JBQWdCLGNBQWMsY0FBYyxrQkFBa0IsS0FBSyxrQkFBa0IsS0FBSyxrQkFBa0IsRUFBRTtBQUFBLE1BQ3pXLFFBQVE7QUFBQSxRQUNOLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFJLFFBQU8sS0FBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsS0FBSSxRQUFPLEdBQUUsYUFBWSxJQUFHLGNBQWEsSUFBRyxXQUFVLElBQUcsa0JBQWlCLEtBQUksZUFBYyxLQUFJLENBQUM7QUFBQSxRQUNoTCxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSSxRQUFPLEdBQUUsaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssUUFBTyxHQUFFLGFBQVksSUFBRyxjQUFhLElBQUcsV0FBVSxJQUFHLGtCQUFpQixLQUFJLGVBQWMsS0FBSSxDQUFDO0FBQUEsUUFDL0ssTUFBTSxHQUFFLEVBQUMsbUJBQWtCLEtBQUcsUUFBTyxLQUFJLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLFFBQU8sR0FBRSxhQUFZLElBQUcsY0FBYSxJQUFHLFdBQVUsSUFBRyxrQkFBaUIsS0FBSSxlQUFjLElBQUcsQ0FBQztBQUFBLE1BQzlLO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQWtCLFFBQVE7QUFBQSxNQUFZLGFBQWE7QUFBQSxNQUFZLGFBQWE7QUFBQSxNQUFnQixvQkFBb0I7QUFBQSxNQUN2SCxnQkFBZ0IsRUFBRSxZQUFZLGNBQWMsZ0JBQWdCLG1CQUFtQixpQkFBaUIsYUFBYSxpQkFBaUIsVUFBVSxZQUFZLFFBQVEsV0FBVyxVQUFVLGtCQUFrQixLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixHQUFHLGNBQWMsY0FBYyxjQUFjLGVBQWUsa0JBQWtCLElBQUksa0JBQWtCLEtBQUssa0JBQWtCLEVBQUU7QUFBQSxNQUM3VyxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLEtBQUcsaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssaUJBQWdCLEdBQUUsZUFBYyxLQUFJLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLFFBQzlLLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxpQkFBZ0IsR0FBRSxlQUFjLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixLQUFHLGVBQWMsSUFBRSxDQUFDO0FBQUEsUUFDM0ssTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFLLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLGlCQUFnQixHQUFFLGVBQWMsS0FBSSxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxNQUMvSztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDcEQsV0FBSyxRQUFRLEtBQUssZUFBZSxvQkFBb0IsU0FBUyxJQUFJLFdBQVcsR0FBRyxHQUFHLEVBQUUsbUNBQW1DO0FBQ3hILFdBQUssUUFBUSxLQUFLLGVBQWUsMkJBQTJCLFNBQVMsSUFBSSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsMENBQTBDO0FBQzdJLFdBQUssUUFBUSxZQUFZLElBQUksZUFBZSxlQUFlLE1BQU0sUUFBVyxHQUFHLEVBQUUsbUNBQW1DO0FBQ3BILFdBQUssUUFBUSxZQUFZLElBQUksZUFBZSxVQUFVLE1BQU0sUUFBVyxHQUFHLEVBQUUsOEJBQThCO0FBQzFHLFdBQUssUUFBUSxJQUFJLGVBQWUsbUJBQW1CLEtBQUssSUFBSSxlQUFlLG1CQUFtQixHQUFHLEdBQUcsRUFBRSxxQ0FBcUM7QUFDM0ksV0FBSyxRQUFRLElBQUksT0FBTyxTQUFTLEdBQUcsR0FBRyxFQUFFLHNCQUFzQjtBQUMvRCxpQkFBVyxVQUFVLElBQUksUUFBUTtBQUMvQixhQUFLLFFBQVEsT0FBTyxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsVUFBVSxPQUFPLEtBQUssOEJBQThCO0FBQ3BHLGFBQUssUUFBUSxPQUFPLFNBQVMsS0FBSyxPQUFPLGtCQUFrQixLQUFLLE9BQU8sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLFVBQVUsT0FBTyxLQUFLLGdDQUFnQztBQUN4SixhQUFLLFFBQVEsT0FBTyxjQUFjLEtBQUssT0FBTyxtQkFBbUIsR0FBRyxHQUFHLEVBQUUsVUFBVSxPQUFPLEtBQUssc0JBQXNCO0FBQUEsTUFDdkg7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxZQUFZLElBQUksb0JBQW9COzs7QUNsSTFDLElBQU0sc0JBQU4sY0FBa0MsaUJBQTRDO0FBQUEsRUFDMUUsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUFBLElBQ2pCLFVBQVU7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxNQUNmLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLG9CQUFvQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLE1BQ2pCLFdBQVc7QUFBQSxNQUNYLGtCQUFrQjtBQUFBLE1BQ2xCLG9CQUFvQjtBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3BELFdBQUssUUFBUSxJQUFJLFNBQVMsR0FBRyxHQUFHLEVBQUUsMkJBQTJCO0FBQzdELFdBQUssUUFBUSxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUUsMEJBQTBCO0FBQzNELFdBQUssUUFBUSxJQUFJLFNBQVMsR0FBRyxHQUFHLEVBQUUsMkJBQTJCO0FBQzdELFdBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxJQUFJLGdCQUFnQixHQUFHLEdBQUcsRUFBRSx5Q0FBeUM7QUFDbkcsV0FBSyxRQUFRLElBQUksa0JBQWtCLEtBQUssSUFBSSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsc0NBQXNDO0FBQUEsSUFDOUc7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLFlBQVksSUFBSSxvQkFBb0I7OztBQ2xCakQsSUFBTSxVQUFVLENBQUMsT0FBd0IsR0FBRyxXQUFXLFFBQVE7QUFFeEQsU0FBUyxxQkFBcUIsT0FBNkM7QUFDaEYsTUFBSSxNQUFNLFFBQVEsV0FBVyxFQUFHLE9BQU0sSUFBSSxNQUFNLGtEQUFrRDtBQUNsRyxNQUFJLE1BQU0sUUFBUSxjQUFjLEVBQUcsT0FBTSxJQUFJLE1BQU0scURBQXFEO0FBQ3hHLGFBQVcsQ0FBQyxRQUFRLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDMUQsUUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLFdBQVcsS0FBSyxRQUFRLEtBQUssTUFBTSxHQUFHO0FBQ3BELFlBQU0sSUFBSSxNQUFNLHFCQUFxQixNQUFNLHdEQUF3RDtBQUFBLElBQ3JHO0FBQ0EsUUFBSSxDQUFDLE1BQU0sR0FBSSxPQUFNLElBQUksTUFBTSx3QkFBd0IsTUFBTSxvQkFBb0I7QUFDakYsUUFBSSxNQUFNLFVBQVUsVUFBYSxNQUFNLFNBQVMsR0FBRztBQUNqRCxZQUFNLElBQUksTUFBTSx3QkFBd0IsTUFBTSxvQ0FBb0M7QUFBQSxJQUNwRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE9BQU8sTUFBTSxPQUNoQixNQUFNLE9BQU8sRUFDYixJQUFJLENBQUMsTUFBTSxpQkFBaUIsRUFBRSxNQUFNLEtBQUssS0FBSyxHQUFHLGFBQWEsY0FBYyxFQUFFLEVBQUUsRUFDaEYsT0FBTyxTQUFPLElBQUksS0FBSyxTQUFTLENBQUM7QUFFcEMsTUFBSSxLQUFLLFdBQVcsRUFBRyxPQUFNLElBQUksTUFBTSw2Q0FBNkM7QUFFcEYsTUFBSTtBQUNKLE1BQUk7QUFDSixRQUFNLFdBQWdDLENBQUM7QUFFdkMsT0FBSyxRQUFRLENBQUMsS0FBSyxhQUFhO0FBQzlCLFVBQU0sWUFBWSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsT0FBTyxlQUFhLGNBQWMsR0FBRyxFQUFFO0FBQ3ZFLFFBQUksY0FBYyxHQUFHO0FBQ25CLFlBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsa0RBQWtELFNBQVMsR0FBRztBQUFBLElBQ3BIO0FBRUEsVUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxNQUFNLEdBQUcsRUFBRSxJQUFJLFVBQVEsS0FBSyxRQUFRLE9BQU8sRUFBRSxDQUFDO0FBQzdFLGtCQUFjLEtBQUs7QUFDbkIsbUJBQWUsTUFBTTtBQUVyQixRQUFJLEtBQUssV0FBVyxXQUFXO0FBQzdCLFlBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsbUJBQW1CLEtBQUssTUFBTSxjQUFjLFNBQVMsR0FBRztBQUFBLElBQzlHO0FBQ0EsUUFBSSxNQUFNLFdBQVcsWUFBWTtBQUMvQixZQUFNLElBQUksTUFBTSxxQkFBcUIsSUFBSSxXQUFXLG9CQUFvQixNQUFNLE1BQU0sY0FBYyxVQUFVLEdBQUc7QUFBQSxJQUNqSDtBQUVBLFVBQU0scUJBQXFCLEtBQUssU0FBUyxJQUFJO0FBQzdDLGVBQVcsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLEtBQUssQ0FBQyxHQUFZO0FBQ3RFLE9BQUMsR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsY0FBYztBQUN2QyxjQUFNLFFBQVEsTUFBTSxPQUFPLE1BQU07QUFDakMsWUFBSSxDQUFDLE9BQU87QUFDVixnQkFBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksV0FBVyxpQkFBaUIsTUFBTSxRQUFRLElBQUksZUFBZSxTQUFTLHNDQUFzQztBQUFBLFFBQ3ZKO0FBQ0EsWUFBSSxNQUFNLE9BQU8sUUFBUztBQUUxQixpQkFBUyxLQUFLO0FBQUEsVUFDWixJQUFJLE1BQU07QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0Esa0JBQWtCLE1BQU0sU0FBUyxNQUFNLFFBQVEsTUFBTSxFQUFFLElBQUksTUFBTSxRQUFRLGFBQWE7QUFBQSxRQUN4RixDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0YsQ0FBQztBQUVELFNBQU8sU0FBUyxLQUFLLENBQUMsR0FBRyxNQUN2QixFQUFFLHFCQUFxQixFQUFFLHNCQUN6QixFQUFFLFdBQVcsRUFBRSxZQUNmLEVBQUUsS0FBSyxjQUFjLEVBQUUsSUFBSSxLQUMzQixFQUFFLFlBQVksRUFBRSxTQUFTO0FBQzdCOzs7QUNwSE8sSUFBTSxpQkFBOEI7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixrQkFBa0I7QUFBQSxFQUNsQixVQUFVO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsRUFDakI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMkJSLFFBQVE7QUFBQSxNQUNOLEtBQUssRUFBRSxJQUFJLFFBQVE7QUFBQSxNQUNuQixLQUFLLEVBQUUsSUFBSSxlQUFlO0FBQUEsTUFDMUIsS0FBSyxFQUFFLElBQUksY0FBYztBQUFBLE1BQ3pCLEtBQUssRUFBRSxJQUFJLGlDQUFpQyxPQUFPLEtBQUs7QUFBQSxNQUN4RCxLQUFLLEVBQUUsSUFBSSxtQ0FBbUMsT0FBTyxJQUFJO0FBQUEsTUFDekQsS0FBSyxFQUFFLElBQUksZ0NBQWdDLE9BQU8sS0FBSztBQUFBLE1BQ3ZELEtBQUssRUFBRSxJQUFJLDRCQUE0QixPQUFPLElBQUk7QUFBQSxJQUNwRDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQ0Y7OztBQzFETyxJQUFNQyxrQkFBOEI7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixrQkFBa0I7QUFBQSxFQUNsQixVQUFVO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsRUFDakI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWdDUixRQUFRO0FBQUEsTUFDTixLQUFLLEVBQUUsSUFBSSxRQUFRO0FBQUEsTUFDbkIsS0FBSyxFQUFFLElBQUksZUFBZTtBQUFBLE1BQzFCLEtBQUssRUFBRSxJQUFJLGNBQWM7QUFBQSxNQUN6QixLQUFLLEVBQUUsSUFBSSw0QkFBNEIsT0FBTyxJQUFJO0FBQUEsTUFDbEQsS0FBSyxFQUFFLElBQUksaUNBQWlDLE9BQU8sS0FBSztBQUFBLE1BQ3hELEtBQUssRUFBRSxJQUFJLGtDQUFrQyxPQUFPLEtBQUs7QUFBQSxNQUN6RCxLQUFLLEVBQUUsSUFBSSxtQ0FBbUMsT0FBTyxJQUFJO0FBQUEsTUFDekQsS0FBSyxFQUFFLElBQUksZ0NBQWdDLE9BQU8sS0FBSztBQUFBLElBQ3pEO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDRjs7O0FDaEVPLElBQU1DLGtCQUE4QjtBQUFBLEVBQ3pDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLGtCQUFrQjtBQUFBLEVBQ2xCLFVBQVU7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOERSLFFBQVE7QUFBQSxNQUNOLEtBQUssRUFBRSxJQUFJLFFBQVE7QUFBQSxNQUNuQixLQUFLLEVBQUUsSUFBSSxlQUFlO0FBQUEsTUFDMUIsS0FBSyxFQUFFLElBQUksY0FBYztBQUFBLE1BQ3pCLEtBQUssRUFBRSxJQUFJLDRCQUE0QixPQUFPLElBQUk7QUFBQSxNQUNsRCxLQUFLLEVBQUUsSUFBSSxpQ0FBaUMsT0FBTyxLQUFLO0FBQUEsTUFDeEQsS0FBSyxFQUFFLElBQUksa0NBQWtDLE9BQU8sS0FBSztBQUFBLE1BQ3pELEtBQUssRUFBRSxJQUFJLGlDQUFpQyxPQUFPLElBQUk7QUFBQSxNQUN2RCxLQUFLLEVBQUUsSUFBSSxtQ0FBbUMsT0FBTyxJQUFJO0FBQUEsTUFDekQsS0FBSyxFQUFFLElBQUksZ0NBQWdDLE9BQU8sS0FBSztBQUFBLE1BQ3ZELEtBQUssRUFBRSxJQUFJLCtCQUErQixPQUFPLElBQUk7QUFBQSxJQUN2RDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQ0Y7OztBQ2hHTyxJQUFNQyxrQkFBOEI7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixrQkFBa0I7QUFBQSxFQUNsQixVQUFVO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsRUFDakI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTBIUixRQUFRO0FBQUEsTUFDTixLQUFLLEVBQUUsSUFBSSxRQUFRO0FBQUEsTUFDbkIsS0FBSyxFQUFFLElBQUksZUFBZTtBQUFBLE1BQzFCLEtBQUssRUFBRSxJQUFJLGNBQWM7QUFBQSxNQUN6QixLQUFLLEVBQUUsSUFBSSw0QkFBNEIsT0FBTyxJQUFJO0FBQUEsTUFDbEQsS0FBSyxFQUFFLElBQUksaUNBQWlDLE9BQU8sS0FBSztBQUFBLE1BQ3hELEtBQUssRUFBRSxJQUFJLGtDQUFrQyxPQUFPLEtBQUs7QUFBQSxNQUN6RCxLQUFLLEVBQUUsSUFBSSxpQ0FBaUMsT0FBTyxJQUFJO0FBQUEsTUFDdkQsS0FBSyxFQUFFLElBQUksbUNBQW1DLE9BQU8sS0FBSztBQUFBLE1BQzFELEtBQUssRUFBRSxJQUFJLG1DQUFtQyxPQUFPLElBQUk7QUFBQSxNQUN6RCxLQUFLLEVBQUUsSUFBSSxpQ0FBaUMsT0FBTyxLQUFLO0FBQUEsTUFDeEQsS0FBSyxFQUFFLElBQUksZ0NBQWdDLE9BQU8sS0FBSztBQUFBLE1BQ3ZELEtBQUssRUFBRSxJQUFJLCtCQUErQixPQUFPLElBQUk7QUFBQSxNQUNyRCxLQUFLLEVBQUUsSUFBSSxvQ0FBb0MsT0FBTyxLQUFLO0FBQUEsSUFDN0Q7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGOzs7QUM1Sk8sSUFBTSxTQUFTO0FBQUEsRUFFcEIsVUFBVTtBQUFBLEVBQ1YsVUFBVUM7QUFBQSxFQUNWLFVBQVVBO0FBQUEsRUFDVixVQUFVQTtBQUNaOzs7QUNMTyxJQUFNLHdCQUFOLGNBQW9DLGlCQUE4QztBQUFBLEVBQzlFLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUVuQixjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDdEQsV0FBSyxRQUFRLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLDZCQUE2QjtBQUMxRSxXQUFLLFFBQVEsTUFBTSxTQUFTLGdCQUFnQixjQUFjLE1BQU0sU0FBUyxlQUFlLE1BQU0sU0FBUyxhQUFhLEdBQUcsRUFBRSwyQ0FBMkM7QUFDcEssV0FBSyxRQUFRLE1BQU0sU0FBUyxlQUFlLEtBQUssTUFBTSxTQUFTLGdCQUFnQixHQUFHLEdBQUcsRUFBRSxxQ0FBcUM7QUFDNUgsMkJBQXFCLE1BQU0sVUFBVTtBQUNyQyxXQUFLLFFBQVEsb0JBQW9CLE1BQU0sWUFBWSxPQUFPLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUFBLElBQy9GO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxjQUFjLElBQUksc0JBQXNCOzs7QUNYOUMsSUFBTSw2QkFBTixjQUF5QyxpQkFBbUQ7QUFBQSxFQUN4RixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsSUFDakIsY0FBYztBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFFQSxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLElBQUksS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDckQsV0FBSyxRQUFRLEtBQUssYUFBYSxHQUFHLEdBQUcsRUFBRSwwQkFBMEI7QUFDakUsV0FBSyxRQUFRLEtBQUssZ0JBQWdCLEtBQUssZUFBZSxHQUFHLEVBQUUsdUNBQXVDO0FBQ2xHLFdBQUssUUFBUSxLQUFLLGVBQWUsS0FBSyxLQUFLLFVBQVUsS0FBSyxlQUFlLEdBQUcsR0FBRyxFQUFFLDRCQUE0QjtBQUM3RyxXQUFLLFFBQVEsWUFBWSxLQUFLLFdBQVcsTUFBTSxRQUFXLEdBQUcsRUFBRSwrQkFBK0I7QUFBQSxJQUNoRztBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sbUJBQW1CLElBQUksMkJBQTJCOzs7QUN2QnhELElBQU0seUJBQU4sY0FBcUMsaUJBQStDO0FBQUEsRUFDaEYsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBRVIsVUFBVTtBQUFBLElBQ2pCLFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixpQkFBaUI7QUFBQSxNQUNqQixlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksTUFBTSxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUN2RCxXQUFLLFFBQVEsT0FBTyxTQUFTLFVBQVUsR0FBRyxFQUFFLHVDQUF1QztBQUNuRixXQUFLLFFBQVEsT0FBTyxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUNoRSxXQUFLLFFBQVEsT0FBTyxhQUFhLEdBQUcsR0FBRyxFQUFFLDZCQUE2QjtBQUN0RSxXQUFLLFFBQVEsT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLHNCQUFzQjtBQUNqRSxXQUFLLFFBQVEsT0FBTyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUUsbUNBQW1DO0FBQy9FLFdBQUssUUFBUSxZQUFZLE9BQU8sS0FBSyxNQUFNLFFBQVcsR0FBRyxFQUFFLHdCQUF3QjtBQUFBLElBQ3JGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxlQUFlLElBQUksdUJBQXVCOzs7QUNqRGhELElBQU0sd0JBQU4sY0FBb0MsaUJBQThDO0FBQUEsRUFDOUUsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFlUixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtqQixVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUEsSUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUEsSUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNQSxjQUFjO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksS0FBSyxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUN0RCxXQUFLLFFBQVEsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLDBCQUEwQjtBQUM3RCxXQUFLLFFBQVEsTUFBTSxhQUFhLEtBQUssTUFBTSxjQUFjLEtBQUssR0FBRyxFQUFFLGtDQUFrQztBQUNyRyxXQUFLLFFBQVEsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUMvRCxXQUFLLFFBQVEsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsb0NBQW9DO0FBQ2pGLFdBQUssUUFBUSxNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUUsaUNBQWlDO0FBQzFFLFdBQUssUUFBUSxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxvQ0FBb0M7QUFDakYsV0FBSyxRQUFRLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFLG1DQUFtQztBQUMvRSxXQUFLLFFBQVEsWUFBWSxNQUFNLEtBQUssTUFBTSxRQUFXLEdBQUcsRUFBRSx3QkFBd0I7QUFBQSxJQUNwRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sY0FBYyxJQUFJLHNCQUFzQjs7O0FDbEo5QyxTQUFTLGVBQ2QsV0FDQSxVQUNBLFdBQ007QUFDTixNQUFJLFlBQTJCO0FBQy9CLE1BQUksa0JBQWtCO0FBQ3RCLE1BQUksZUFBZTtBQUNuQixRQUFNLGVBQWUsQ0FBQyxZQUEwQjtBQUM5QyxVQUFNLFNBQVMsVUFBVSxzQkFBc0I7QUFDL0MsVUFBTSxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLFVBQVUsT0FBTyxRQUFRLE9BQU8sS0FBSyxDQUFDO0FBQ2xGLFVBQU0sT0FBYyxhQUFhLE1BQUssSUFBSTtBQUMxQyxRQUFJLFNBQVMsVUFBVSxLQUFLLEVBQUcsV0FBVSxRQUFRLElBQUk7QUFDckQsVUFBTSxZQUFZLFNBQVMsSUFBSSxJQUFJO0FBQ25DLFVBQU0sY0FBYyxhQUFhLGFBQWE7QUFDOUMsY0FBVSxRQUFRLGFBQWEsT0FBTSxDQUFDO0FBQUEsRUFDeEM7QUFDQSxtQkFBaUIsV0FBVyxXQUFTO0FBQ25DLFFBQUksTUFBTSxRQUFRLE9BQU8sTUFBTSxRQUFRLE9BQU8sTUFBTSxRQUFRLFlBQWEsV0FBVSxRQUFRLENBQUM7QUFDNUYsUUFBSSxNQUFNLFFBQVEsT0FBTyxNQUFNLFFBQVEsT0FBTyxNQUFNLFFBQVEsYUFBYyxXQUFVLFFBQVEsQ0FBQztBQUFBLEVBQy9GLENBQUM7QUFDRCxZQUFVLGlCQUFpQixlQUFlLFdBQVM7QUFDakQsVUFBTSxTQUFTLE1BQU07QUFDckIsUUFBSSxPQUFPLFFBQVEsUUFBUSxLQUFLLE9BQU8sUUFBUSx1QkFBdUIsRUFBRztBQUN6RSxnQkFBWSxNQUFNO0FBQ2xCLHNCQUFrQixNQUFNO0FBQ3hCLG1CQUFlO0FBQ2YsY0FBVSxvQkFBb0IsU0FBUztBQUN2QyxpQkFBYSxNQUFNLE9BQU87QUFBQSxFQUM1QixDQUFDO0FBQ0QsWUFBVSxpQkFBaUIsZUFBZSxXQUFTO0FBQ2pELFFBQUksTUFBTSxjQUFjLFVBQVc7QUFDbkMscUJBQWlCLEtBQUssSUFBSSxNQUFNLFVBQVUsZUFBZSxJQUFJO0FBQzdELGlCQUFhLE1BQU0sT0FBTztBQUFBLEVBQzVCLENBQUM7QUFDRCxRQUFNLGFBQWEsQ0FBQyxVQUE4QjtBQUNoRCxRQUFJLE1BQU0sY0FBYyxVQUFXO0FBQ25DLFFBQUksQ0FBQyxhQUFjLGNBQWEsTUFBTSxPQUFPO0FBQzdDLGdCQUFZO0FBQ1osY0FBVSxXQUFXO0FBQUEsRUFDdkI7QUFDQSxZQUFVLGlCQUFpQixhQUFhLFVBQVU7QUFDbEQsWUFBVSxpQkFBaUIsaUJBQWlCLFVBQVU7QUFDdEQsWUFBVSxpQkFBaUIsc0JBQXNCLE1BQU07QUFDckQsZ0JBQVk7QUFDWixjQUFVLFdBQVc7QUFBQSxFQUN2QixDQUFDO0FBQ0QsTUFBSSxXQUFXLG1CQUFtQixFQUFFLFNBQVM7QUFDM0MsVUFBTSxVQUFVLFVBQVUsY0FBMkIsUUFBUTtBQUM3RCxVQUFNLE9BQU8sU0FBUyxjQUEyQixhQUFhO0FBQzlELFFBQUksa0JBQWlDO0FBQ3JDLFVBQU0sZ0JBQWdCLENBQUMsVUFBOEI7QUFDbkQsVUFBSSxDQUFDLFFBQVM7QUFDZCxZQUFNLFNBQVMsUUFBUSxzQkFBc0I7QUFDN0MsWUFBTSxTQUFTLE9BQU8sUUFBUTtBQUM5QixZQUFNLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXO0FBQ3ZELFlBQU0sSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUM7QUFDdkMsVUFBSSxLQUFNLE1BQUssTUFBTSxZQUFZLHlCQUF5QixJQUFJLFNBQVMsSUFBRztBQUMxRSxZQUFNLFlBQVksS0FBSyxJQUFJLENBQUM7QUFDNUIsVUFBSSxhQUFhLE1BQUs7QUFDcEIsY0FBTSxZQUFtQixJQUFJLElBQUksSUFBSTtBQUNyQyxZQUFJLGNBQWMsVUFBVSxLQUFLLEVBQUcsV0FBVSxRQUFRLFNBQVM7QUFDL0Qsa0JBQVUsT0FBTyxDQUFDO0FBQUEsTUFDcEIsV0FBVyxhQUFhLElBQUksV0FBVSxPQUFPLElBQUksR0FBRTtBQUFBLFVBQzlDLFdBQVUsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFDcEM7QUFDQSxhQUFTLGlCQUFpQixlQUFlLFdBQVM7QUFDaEQsWUFBTSxnQkFBZ0I7QUFDdEIsd0JBQWtCLE1BQU07QUFDeEIsY0FBUSxrQkFBa0IsTUFBTSxTQUFTO0FBQ3pDLG9CQUFjLEtBQUs7QUFBQSxJQUNyQixDQUFDO0FBQ0QsYUFBUyxpQkFBaUIsZUFBZSxXQUFTO0FBQ2hELFVBQUksTUFBTSxjQUFjLGdCQUFpQixlQUFjLEtBQUs7QUFBQSxJQUM5RCxDQUFDO0FBQ0QsVUFBTSxjQUFjLENBQUMsVUFBOEI7QUFDakQsVUFBSSxNQUFNLGNBQWMsZ0JBQWlCO0FBQ3pDLHdCQUFrQjtBQUNsQixVQUFJLEtBQU0sTUFBSyxNQUFNLFlBQVk7QUFDakMsZ0JBQVUsV0FBVztBQUFBLElBQ3ZCO0FBQ0EsYUFBUyxpQkFBaUIsYUFBYSxXQUFXO0FBQ2xELGFBQVMsaUJBQWlCLGlCQUFpQixXQUFXO0FBQUEsRUFDeEQ7QUFDRjs7O0FDbEZPLElBQU0sYUFBTixNQUFpQjtBQUFBLEVBQ3RCLE9BQWM7QUFBQSxFQUNkLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLElBQUk7QUFBQSxFQUNKLFVBQVU7QUFBQSxFQUNWLHFCQUFxQjtBQUFBLEVBRXJCLElBQUksUUFBd0I7QUFDMUIsVUFBTSxPQUFPLGlCQUFpQixRQUFRO0FBQ3RDLFNBQUssUUFBUSxLQUFLLElBQUksS0FBSyxjQUFjLEtBQUssUUFBUSxNQUFNO0FBQzVELFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUVBLE9BQU8sU0FBUyxHQUFXO0FBQ3pCLFNBQUssUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLFFBQVEsTUFBTTtBQUM1QyxXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFQSxRQUFRLE1BQWEsWUFBcUMsS0FBbUI7QUFDM0UsUUFBSSxTQUFTLEtBQUssTUFBTTtBQUN0QixXQUFLLHFCQUFxQjtBQUUxQixXQUFLLFlBQVk7QUFBQSxJQUNuQjtBQUNBLFNBQUssT0FBTztBQUNaLFNBQUssVUFBVSxXQUFXLElBQUksSUFBSSxLQUFLO0FBQUEsRUFDekM7QUFBQSxFQUVBLE9BQU8sWUFBb0IsV0FBbUIsWUFBMkM7QUFDdkYsU0FBSyxZQUFZLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLFlBQVk7QUFDckUsU0FBSyxVQUFVLFdBQVcsS0FBSyxJQUFJLElBQUksS0FBSztBQUFBLEVBQzlDO0FBQUEsRUFFQSxRQUFRLGNBQXNCLFdBQW1CLFlBQTJDO0FBRTFGLFNBQUssY0FBYyxLQUFLLElBQUksQ0FBQyxZQUFZLE1BQUssS0FBSyxJQUFJLFlBQVksTUFBSyxZQUFZLENBQUMsSUFBSSxLQUFLLGFBQWE7QUFDM0csU0FBSyxVQUFVLFdBQVcsS0FBSyxJQUFJLElBQUksS0FBSztBQUFBLEVBQzlDO0FBQUEsRUFFQSxPQUFPLGNBQTRCO0FBQ2pDLFVBQU0sV0FBVyxJQUFJLEtBQUssSUFBSSxNQUFRLFlBQVk7QUFDbEQsU0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUs7QUFBQSxFQUN0QztBQUFBO0FBQUEsRUFHQSxzQkFBc0IsT0FBeUI7QUFDN0MsVUFBTSxPQUFPLGlCQUFpQixRQUFRO0FBQ3RDLFVBQU0sV0FBVyxLQUFLLElBQUksS0FBSyxlQUFlLEtBQUssS0FBSztBQUN4RCxXQUFPLE1BQU07QUFBQSxNQUFLLEVBQUUsUUFBUSxTQUFTO0FBQUEsTUFBRyxDQUFDLEdBQUcsU0FDekMsT0FBTyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVU7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU8sT0FBZSxPQUE2QjtBQUNqRCxVQUFNLE9BQU8saUJBQWlCLFFBQVE7QUFDdEMsVUFBTSxTQUF1QixDQUFDO0FBQzlCLGFBQVMsUUFBUSxHQUFHLFFBQVEsS0FBSyxPQUFPLFNBQVM7QUFDL0MsWUFBTSxNQUFNLEtBQUssTUFBTSxRQUFRLEtBQUssYUFBYTtBQUNqRCxZQUFNLFdBQVcsS0FBSyxJQUFJLEtBQUssZUFBZSxLQUFLLFFBQVEsTUFBTSxLQUFLLGFBQWE7QUFDbkYsWUFBTSxTQUFTLFFBQVEsS0FBSztBQUM1QixhQUFPLEtBQUs7QUFBQSxRQUNWLEdBQUcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVO0FBQUEsUUFDM0QsR0FBRyxRQUFRLE1BQU0sS0FBSyxVQUFVO0FBQUEsUUFDaEM7QUFBQSxRQUNBO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0Y7OztBQ3pFTyxJQUFNLHNCQUFOLE1BQTBCO0FBQUEsRUFDL0IsU0FBUztBQUFBLEVBRVQsZUFBcUI7QUFBQSxFQUVyQjtBQUFBLEVBRUEsYUFBbUI7QUFDakIsU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLGNBQW9CO0FBQ2xCLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQ0Y7QUFXTyxTQUFTLG9CQUNkLFNBQ0EsWUFDQSxlQUNBLGdCQUFnQixHQUNSO0FBQ1IsTUFBSSxDQUFDLFFBQVEsT0FBUSxRQUFPO0FBRzVCLFFBQU0sZUFBZSxvQkFBSSxJQUE2QjtBQUN0RCxhQUFXLFVBQVUsU0FBUztBQUM1QixRQUFJLE9BQU8sVUFBVSxPQUFXO0FBQ2hDLFVBQU0sTUFBTSxhQUFhLElBQUksT0FBTyxLQUFLLEtBQUssQ0FBQztBQUMvQyxRQUFJLEtBQUssTUFBTTtBQUNmLGlCQUFhLElBQUksT0FBTyxPQUFPLEdBQUc7QUFBQSxFQUNwQztBQUNBLFFBQU0sV0FBVyxhQUFhLE9BQzFCLENBQUMsR0FBRyxhQUFhLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLFVBQ3JDLEtBQUssSUFBSSxHQUFHLE1BQU0sSUFBSSxPQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLE9BQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFDdkUsUUFBUSxPQUFPLE9BQUssS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksR0FBRyxRQUFRLElBQUksT0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQU05RSxRQUFNLE9BQU8sY0FBYyxTQUFTLElBQUksZ0JBQWdCLENBQUMsQ0FBQztBQUMxRCxNQUFJLGFBQWE7QUFDakIsTUFBSSxXQUFXO0FBRWYsYUFBVyxTQUFTLFVBQVU7QUFDNUIsZUFBVyxhQUFhLE1BQU07QUFHNUIsWUFBTSxrQkFBa0IsTUFBTSxJQUFJLGFBQWE7QUFDL0MsWUFBTSxPQUFPLEtBQUssSUFBSSxrQkFBa0IsYUFBYTtBQUNyRCxVQUFJLE9BQU8sVUFBVTtBQUNuQixtQkFBVztBQUNYLHFCQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUNUOzs7QUN0RE8sU0FBUyxtQkFBbUIsT0FBb0IsUUFBc0M7QUFDM0YsUUFBTSxNQUFNLFlBQVksa0JBQWtCLEdBQUcsT0FBTyxXQUFXLE1BQU0sT0FBTyxZQUFZLEVBQUU7QUFDNUY7QUFPTyxJQUFNLGtDQUE0RDtBQUFBLEVBQ3ZFLFFBQVE7QUFBQSxFQUNSLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWDtBQUVPLFNBQVMsdUJBQ2QsWUFDQSxRQUNBLFVBQ0EsVUFDZ0I7QUFDaEIsUUFBTSxVQUFVLFNBQVMsUUFBUTtBQUNqQyxRQUFNLFFBQVEsU0FBUyxtQkFBbUIsS0FBSyxLQUFLO0FBQ3BELFFBQU0sTUFBTSxLQUFLLElBQUksS0FBSztBQUMxQixRQUFNLE1BQU0sS0FBSyxJQUFJLEtBQUs7QUFDMUIsUUFBTSxjQUFjLFNBQVMsU0FBUyxTQUFTO0FBQy9DLFFBQU0sV0FBVyxTQUFTLFNBQVMsU0FBUztBQUM1QyxRQUFNLFdBQVc7QUFFakIsUUFBTSxlQUFlLENBQUMsR0FBVyxNQUFzRTtBQUNyRyxVQUFNLFNBQVMsSUFBSTtBQUNuQixVQUFNLFNBQVMsU0FBUyxVQUFVLElBQUksU0FBUztBQUMvQyxVQUFNLFlBQVksQ0FBQyxTQUFTO0FBQzVCLFVBQU0sVUFBVSxZQUFZLE1BQU0sU0FBUztBQUMzQyxVQUFNLFVBQVUsS0FBSyxJQUFJLFVBQVUsU0FBUyxNQUFNLFlBQVksR0FBRztBQUNqRSxVQUFNLFFBQVEsY0FBYztBQUM1QixXQUFPO0FBQUEsTUFDTCxHQUFHLFVBQVUsU0FBUztBQUFBLE1BQ3RCLEdBQUcsV0FBVyxVQUFVO0FBQUEsTUFDeEI7QUFBQSxNQUNBLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUVBLFFBQU0sc0JBQXNCLFdBQVcsSUFBSSxlQUFhO0FBQ3RELFVBQU0sUUFBUSxhQUFhLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDbkQsVUFBTSxRQUFRLFVBQVUsUUFBUSxNQUFNO0FBQ3RDLFVBQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxTQUFTLE1BQU07QUFDN0QsV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsR0FBRyxNQUFNO0FBQUEsTUFDVCxHQUFHLE1BQU07QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFFRCxRQUFNLGtCQUFrQixPQUNyQixJQUFJLFdBQVM7QUFDWixVQUFNLFFBQVEsYUFBYSxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNDLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILEdBQUcsTUFBTTtBQUFBLE1BQ1QsR0FBRyxNQUFNO0FBQUEsTUFDVCxNQUFNLE1BQU0sT0FBTyxNQUFNO0FBQUEsTUFDekIsSUFBSSxNQUFNLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFBQSxJQUNwQztBQUFBLEVBQ0YsQ0FBQyxFQUNBLEtBQUssQ0FBQyxHQUFHLE9BQVEsRUFBRSxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUc7QUFFM0MsU0FBTyxFQUFFLFlBQVkscUJBQXFCLFFBQVEsZ0JBQWdCO0FBQ3BFOzs7QUMzRk8sSUFBTSxjQUFjO0FBQUEsRUFDekIsUUFBUSxhQUFhLGVBQWU7QUFBQSxFQUNwQyxPQUFPLGFBQWEsWUFBWTtBQUFBLEVBQ2hDLFlBQVksYUFBYSxlQUFlO0FBQUEsRUFDeEMsV0FBVyxhQUFhLGFBQWE7QUFDdkM7QUFnQk8sSUFBTSxzQkFBc0IsQ0FBQyxPQUF1QixHQUFXLEdBQVcsTUFBYyxZQUF3QyxDQUFDLE9BQ3JJLEVBQUUsR0FBRyxNQUFNLGVBQWUsU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFLOzs7QUNnQjdDLElBQU0sYUFBTixNQUFpQjtBQUFBLEVBQ3RCO0FBQUE7QUFBQSxFQUVBO0FBQUE7QUFBQSxFQUVBO0FBQUEsRUFFQSxZQUFZLFNBQWtCO0FBQzVCLFNBQUssVUFBVTtBQUNmLFNBQUssZUFBZTtBQUNwQixTQUFLLGNBQWM7QUFBQSxFQUNyQjtBQUNGO0FBbUJBLFNBQVMsY0FDUCxTQUNBLE1BQ0EsWUFDZ0I7QUFDaEIsTUFBSSxRQUFRLFdBQVcsRUFBRyxRQUFPLENBQUM7QUFFbEMsVUFBUSxNQUFNO0FBQUEsSUFDWixLQUFLO0FBQUEsSUFDTCxLQUFLO0FBRUgsYUFBTyxRQUFRLE1BQU0sR0FBRyxVQUFVO0FBQUEsSUFFcEMsS0FBSztBQUVILGFBQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsT0FBTyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsTUFBTSxHQUFHLFVBQVU7QUFBQSxJQUVqRixLQUFLO0FBRUgsYUFBTyxRQUFRLE1BQU0sR0FBRyxVQUFVO0FBQUEsSUFFcEM7QUFDRSxhQUFPLFFBQVEsTUFBTSxHQUFHLFVBQVU7QUFBQSxFQUN0QztBQUNGO0FBa0JPLFNBQVMsVUFDZCxPQUNBLE9BQ0EsU0FDQSxTQUNBLFNBQ0EsS0FDQSxPQUNBLE9BQ2lCO0FBQ2pCLFFBQU0sU0FBMEI7QUFBQSxJQUM5QixhQUFhLENBQUM7QUFBQSxJQUNkLFFBQVE7QUFBQSxJQUNSLGdCQUFnQjtBQUFBLEVBQ2xCO0FBR0EsTUFBSSxNQUFNLGVBQWUsRUFBRyxPQUFNLGVBQWUsS0FBSyxJQUFJLEdBQUcsTUFBTSxlQUFlLEtBQUs7QUFHdkYsTUFBSSxNQUFNLGFBQWE7QUFDckIsVUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLFlBQVk7QUFDckYsUUFBSSxNQUFNLFlBQVksWUFBWSxFQUFHLE9BQU0sY0FBYztBQUFBLEVBQzNEO0FBSUEsTUFBSSxNQUFNLGVBQWUsS0FBSyxRQUFRLFdBQVcsRUFBRyxRQUFPO0FBRzNELFFBQU0sV0FBVyxjQUFjLFNBQVMsTUFBTSxlQUFlLE1BQU0sVUFBVTtBQUM3RSxNQUFJLFNBQVMsV0FBVyxFQUFHLFFBQU87QUFHbEMsUUFBTSxlQUFlLE1BQU07QUFDM0IsU0FBTyxpQkFBaUI7QUFDeEIsU0FBTyxTQUFTLE1BQU07QUFDdEIsYUFBVyxFQUFFLE9BQU8sS0FBSyxTQUFVLFFBQU8sWUFBWSxLQUFLLE9BQU8sRUFBRTtBQUdwRSxRQUFNLGNBQWM7QUFBQSxJQUNsQixVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxZQUFZLE1BQU07QUFBQSxJQUNsQixHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFDSCxPQUFPLE1BQU0sUUFBUTtBQUFBO0FBQUEsSUFDckIsWUFBWSxNQUFNO0FBQUEsSUFDbEI7QUFBQSxJQUNBLFdBQVcsTUFBTTtBQUFBLEVBQ25CO0FBRUEsU0FBTztBQUNUOzs7QUM5Rk8sU0FBUyxtQkFDZCxTQUNBLE1BQ2dCO0FBQ2hCLFFBQU0sRUFBRSxRQUFRLE1BQU0sT0FBTyx1QkFBdUIsT0FBTyxZQUFZLFdBQVcsSUFBSTtBQUN0RixRQUFNLFVBQVUsUUFBUTtBQUN4QixRQUFNLFVBQTBCLENBQUM7QUFFakMsYUFBVyxVQUFVLFNBQVM7QUFDNUIsUUFBSSxPQUFPLE1BQU87QUFDbEIsUUFBSSxDQUFDLHdCQUF3QixPQUFPLFNBQVMsS0FBTTtBQUNuRCxRQUFJLFlBQVksSUFBSSxPQUFPLEVBQUUsRUFBRztBQUNoQyxVQUFNLEtBQUssT0FBTyxJQUFJLE9BQU87QUFDN0IsVUFBTSxLQUFLLE9BQU8sSUFBSSxPQUFPO0FBQzdCLFVBQU0sU0FBUyxLQUFLLEtBQUssS0FBSztBQUM5QixRQUFJLFNBQVMsUUFBUztBQUN0QixZQUFRLEtBQUssRUFBRSxRQUFRLFVBQVUsS0FBSyxLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQUEsRUFDdEQ7QUFFQSxVQUFRLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUTtBQUU5QyxTQUFPLGVBQWUsU0FBWSxRQUFRLE1BQU0sR0FBRyxVQUFVLElBQUk7QUFDbkU7OztBQ2hGQSxJQUFNLGFBQWEsT0FBMEIsRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRTtBQUMxRSxJQUFNLGdCQUFnQixDQUFDLE9BQWU7QUFDcEMsUUFBTSxRQUFRLGFBQWEsRUFBRTtBQUM3QixNQUFJLENBQUMsTUFBTyxPQUFNLElBQUksTUFBTSxzQkFBc0IsRUFBRSxrQ0FBa0M7QUFDdEYsU0FBTztBQUNUO0FBaUZBLFNBQVMsV0FBVyxPQUE2QixPQUFnQztBQUMvRSxNQUFJLE1BQU0sWUFBWSxFQUFHLFFBQU8sQ0FBQztBQUNqQyxRQUFNLE9BQU8sSUFBSSxNQUFNO0FBQ3ZCLFFBQU0sU0FBUyxNQUFNLFFBQVE7QUFDN0IsUUFBTSxVQUFVLE1BQU0sYUFBYSxLQUFLLEtBQUs7QUFDN0MsUUFBTSxVQUFVLENBQUMsS0FBSyxLQUFLO0FBQzNCLFFBQU0sUUFBUSxNQUFNLFdBQVcsT0FBTSxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sV0FBVyxNQUFLLENBQUMsSUFBSTtBQUNqRixRQUFNLGFBQWEsVUFBVSxVQUFVLFFBQVEsVUFBVTtBQUN6RCxRQUFNLGNBQWMsV0FBVyxPQUFNLE9BQU87QUFDNUMsUUFBTSxZQUFZLE1BQU0sWUFBWTtBQUNwQyxRQUFNLGFBQThCLENBQUM7QUFFckMsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsVUFBTSxNQUFNLElBQUk7QUFDaEIsVUFBTSxRQUFRLEtBQUssSUFBSSxVQUFVLFNBQVMsYUFBYSxjQUFjLEdBQUc7QUFDeEUsVUFBTSxXQUFXLFVBQVUsT0FBTSxLQUFLLElBQUksTUFBTSxLQUFLLEVBQUUsSUFBSTtBQUMzRCxVQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUk7QUFDdkMsZUFBVyxLQUFLO0FBQUEsTUFDZCxHQUFHLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQUEsTUFDL0IsR0FBRyxNQUFNLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSTtBQUFBLE1BQy9CLE9BQU8sS0FBSyxJQUFJLEtBQUksYUFBYSxNQUFNLE1BQU0sS0FBSztBQUFBLE1BQ2xELFFBQVEsVUFBVSxPQUFNLE1BQU07QUFBQSxNQUM5QixPQUFPLE1BQU07QUFBQSxNQUNiLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU0sT0FBTztBQUFBLE1BQ2IsV0FBVyxPQUFPO0FBQUEsTUFDbEIsT0FBTztBQUFBLE1BQ1AsVUFBVSxRQUFRLEtBQUssS0FBSztBQUFBLElBQzlCLENBQUM7QUFBQSxFQUNIO0FBRUEsUUFBTSxXQUFXLE1BQU0sSUFBSSxLQUFLLElBQUksVUFBVSxJQUFJLFNBQVM7QUFDM0QsUUFBTSxXQUFXLE1BQU0sSUFBSSxLQUFLLElBQUksVUFBVSxJQUFJLFNBQVM7QUFDM0QsYUFBVyxLQUFLO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFBVSxHQUFHO0FBQUEsSUFDaEIsT0FBTyxLQUFLLElBQUksS0FBSyxZQUFZLEdBQUc7QUFBQSxJQUNwQyxRQUFRLFNBQVM7QUFBQSxJQUNqQixPQUFPO0FBQUEsSUFDUCxnQkFBZ0IsTUFBTTtBQUFBLElBQ3RCLE1BQU0sTUFBTTtBQUFBLElBQ1osV0FBVyxNQUFNO0FBQUEsSUFDakIsT0FBTztBQUFBLElBQ1AsVUFBVSxhQUFhLEtBQUssS0FBSztBQUFBLEVBQ25DLENBQUM7QUFFRCxXQUFTLElBQUksR0FBRyxJQUFJLEtBQUssTUFBTSxXQUFXLEtBQUksS0FBSztBQUNqRCxVQUFNLFVBQVUsSUFBSSxLQUFLO0FBQ3pCLFVBQU0sWUFBWSxRQUFRLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJO0FBQ2hELGVBQVcsS0FBSztBQUFBLE1BQ2QsR0FBRyxXQUFXLEtBQUssSUFBSSxhQUFhLE1BQU0sSUFBSSxVQUFVLE9BQU0sSUFBSTtBQUFBLE1BQ2xFLEdBQUcsV0FBVyxLQUFLLElBQUksYUFBYSxNQUFNLElBQUksVUFBVSxPQUFNLElBQUk7QUFBQSxNQUNsRSxPQUFPLEtBQUssSUFBSSxLQUFJLFlBQVksSUFBRztBQUFBLE1BQ25DLFFBQVEsVUFBVSxPQUFNLElBQUksSUFBSTtBQUFBLE1BQ2hDLE9BQU8sTUFBTTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsTUFDaEIsTUFBTSxNQUFNO0FBQUEsTUFDWixXQUFXLE9BQU87QUFBQSxNQUNsQixPQUFPO0FBQUEsTUFDUCxVQUFVLGFBQWE7QUFBQSxJQUN6QixDQUFDO0FBQUEsRUFDSDtBQUNBLFNBQU87QUFDVDtBQUVPLFNBQVMsYUFBYSxTQUFnRDtBQUMzRSxRQUFNLFFBQVEsV0FBVztBQUN6QixNQUFJLENBQUMsUUFBUSxRQUFTLFFBQU87QUFDN0IsUUFBTSxFQUFFLFlBQVksT0FBTyxHQUFHLEdBQUcsUUFBUSxFQUFFLElBQUk7QUFDL0MsUUFBTSxVQUFVLFdBQVcsYUFBYSxLQUFLLEtBQUs7QUFDbEQsUUFBTSxRQUFRLFFBQVMsTUFBTSxXQUFXLE9BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLFdBQVcsTUFBSyxDQUFDLElBQUksSUFBSztBQUMvRixRQUFNLGFBQWEsQ0FBQyxLQUFLLEtBQUssSUFBSSxVQUFVLFFBQVEsVUFBVTtBQUM5RCxRQUFNLE9BQU8sS0FBSztBQUFBLElBQ2hCLE9BQU8sY0FBYyxhQUFhO0FBQUEsSUFDbEM7QUFBQSxJQUFHO0FBQUEsSUFDSCxNQUFNLEtBQUssSUFBSSxJQUFJLFdBQVcsUUFBUSxJQUFHLElBQUk7QUFBQSxJQUM3QyxPQUFPLFlBQVksV0FBVyxLQUFLO0FBQUEsSUFDbkMsV0FBVyxhQUFhLEtBQUssS0FBSztBQUFBLElBQ2xDLGVBQWU7QUFBQSxJQUNmLE1BQU0sUUFBUSxPQUFPO0FBQUEsSUFDckIsaUJBQWlCLFFBQVEsTUFBTTtBQUFBLElBQy9CLGdCQUFnQixRQUFRLE9BQU07QUFBQSxJQUM5QixhQUFhLFFBQVEsTUFBTTtBQUFBLElBQzNCLGFBQWEsUUFBUSxNQUFLO0FBQUEsRUFDNUIsQ0FBQztBQUNELE1BQUksTUFBTyxPQUFNLFdBQVcsS0FBSyxHQUFHLFdBQVcsT0FBTyxLQUFLLENBQUM7QUFDNUQsU0FBTztBQUNUO0FBVUEsU0FBUyxZQUFZLFNBQWlCLFNBQXNEO0FBQzFGLFFBQU0sRUFBRSxHQUFHLEdBQUcsT0FBTyxLQUFLLFFBQVEsRUFBRSxJQUFJO0FBQ3hDLFNBQU87QUFBQSxJQUNMLE9BQU8sY0FBYyxPQUFPO0FBQUEsSUFDNUIsR0FBRyxJQUFJLEtBQUssSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFHLElBQUksTUFBTTtBQUFBLElBQzdDO0FBQUEsSUFDQSxNQUFNLEtBQUssU0FBUyxJQUFJLEtBQUssSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFHLElBQUk7QUFBQSxJQUN4RDtBQUFBLElBQ0EsV0FBVyxNQUFNO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04saUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCO0FBQUEsSUFDaEIsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLEVBQ2Y7QUFDRjtBQUtPLElBQU0sb0JBQW9CLENBQUMsWUFDaEMsWUFBWSxlQUFlLE9BQU87OztBQ3RMcEMsSUFBTSxTQUFTLFNBQVMsY0FBaUMsY0FBYztBQUN2RSxJQUFNLFFBQVEsU0FBUyxjQUEyQixRQUFRO0FBQzFELElBQU0sY0FBYyxTQUFTLGNBQWlDLGVBQWU7QUFDN0UsSUFBTSxnQkFBZ0IsU0FBUyxjQUEyQixpQkFBaUI7QUFDM0UsSUFBTSxlQUFlLFNBQVMsY0FBMkIsZ0JBQWdCO0FBQ3pFLElBQU0sY0FBYyxTQUFTLGNBQTJCLGVBQWU7QUFDdkUsSUFBTSxjQUFjLFNBQVMsY0FBMkIsT0FBTztBQUMvRCxtQkFBbUIsYUFBYSxFQUFFLGFBQWEsR0FBRyxjQUFjLEdBQUcsQ0FBQztBQUVwRSxJQUFJO0FBQ0YsUUFBTSxXQUFXLE1BQU0seUJBQXlCLE9BQU8sUUFBUSxLQUFLLEdBQUc7QUFDdkUsUUFBTSxNQUFNLFVBQVUsUUFBUTtBQUM5QixRQUFNLFVBQW1CLENBQUM7QUFDMUIsUUFBTSxVQUF5QixDQUFDO0FBQ2hDLFFBQU0sUUFBUSxJQUFJLFdBQVc7QUFDN0IsUUFBTSxhQUFhLElBQUksb0JBQW9CO0FBQzNDLE1BQUksYUFBYTtBQUNqQixNQUFJLGdCQUF5QjtBQUM3QixNQUFJLGFBQWEsSUFBSSxXQUFXLGFBQWE7QUFDN0MsTUFBSSxpQkFBaUI7QUFDckIsTUFBSSxRQUFRO0FBQ1osTUFBSSxZQUFZLFlBQVksSUFBSTtBQUNoQyxNQUFJLGNBQWM7QUFDbEIsTUFBSSxZQUFZO0FBQ2hCLE1BQUksY0FBYyxJQUFJLGVBQWUsRUFBRSxPQUFPLFlBQVksT0FBTyxDQUFDO0FBRWxFLFFBQU0sUUFBUSxDQUFDLFNBQWlCLE9BQU8sU0FBUyxTQUFTLElBQUksT0FBTztBQUNwRSxRQUFNLFVBQVUsTUFBTSxPQUFPLFNBQVM7QUFDdEMsUUFBTSxRQUFRLE1BQU07QUFFcEIsYUFBVyxDQUFDLElBQUksS0FBSyxLQUFLLE9BQU8sUUFBUSxZQUFZLE9BQU8sR0FBRztBQUM3RCxnQkFBWSxJQUFJLElBQUksT0FBTyxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQUEsRUFDN0M7QUFDQSxjQUFZLFFBQVE7QUFFcEIsUUFBTSxRQUFRLENBQUMsT0FBZ0I7QUFDN0Isb0JBQWdCO0FBQ2hCLGlCQUFhLElBQUksV0FBVyxFQUFFO0FBQzlCLGdCQUFZLFFBQVE7QUFDcEIsV0FBTyxXQUFXLEtBQUssUUFBUTtBQUMvQixrQkFBYztBQUFBLEVBQ2hCO0FBRUEsUUFBTSxnQkFBZ0IsTUFBTTtBQUMxQixVQUFNLE1BQU0sWUFBWSxRQUFRLGFBQWE7QUFDN0Msa0JBQWMsY0FBYyxJQUFJO0FBQ2hDLGlCQUFhLGNBQWMsU0FBUyxLQUFLO0FBQ3pDLFVBQU0sU0FBUyxXQUFXLGFBQWEsUUFBUSxDQUFDO0FBQ2hELGdCQUFZLFlBQVk7QUFBQSxNQUN0QixDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssSUFBSTtBQUFBLE1BQzFCLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxNQUFHO0FBQUEsTUFDNUIsQ0FBQyxVQUFVLE9BQU8sSUFBSSxNQUFNLENBQUM7QUFBQSxNQUM3QixDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsR0FBRztBQUFBLE1BQ3RDLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxHQUFHO0FBQUEsTUFDOUIsQ0FBQyxlQUFlLE9BQU8sSUFBSSxVQUFVLENBQUM7QUFBQSxNQUN0QyxDQUFDLGFBQWEsSUFBSSxhQUFhO0FBQUEsTUFDL0IsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQWUsSUFBSTtBQUFBLElBQy9DLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sT0FBTyxJQUFJLFlBQVksS0FBSyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQUEsRUFDdkU7QUFFQSxRQUFNLElBQUksTUFBTSxDQUFDO0FBQ2pCLFFBQU0sVUFBVSxNQUFNLENBQUM7QUFFdkIsUUFBTSxhQUFhLENBQUMsU0FBc0I7QUFDeEMsWUFBUSxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixNQUFNLEdBQUcsTUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLFFBQVEsSUFBSSxRQUFRLE9BQU8sRUFBRSxnQkFBZ0IsT0FBTyxJQUFJLGVBQWUsRUFBRSxPQUFPLFlBQVksTUFBTSxDQUFDLEdBQUcsT0FBTyxNQUFNLENBQUM7QUFBQSxFQUN6TDtBQUVBLFFBQU0sY0FBYyxDQUFDLFNBQXNCO0FBQ3pDLFlBQVEsS0FBSyxFQUFFLFNBQVMsWUFBWSxPQUFrQixNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDdEU7QUFFQSxRQUFNLG9CQUFvQixNQUFZO0FBQ3BDLFlBQVEsU0FBUztBQUNqQixZQUFRLFNBQVM7QUFDakIsa0JBQWM7QUFDZCxnQkFBWTtBQUNaLGtCQUFjLElBQUksZUFBZSxFQUFFLE9BQU8sWUFBWSxPQUFPLENBQUM7QUFDOUQsVUFBTSxhQUFhO0FBQ25CLGVBQVcsQ0FBQztBQUNaLGVBQVcsQ0FBQztBQUFBLEVBQ2Q7QUFFQSxRQUFNLGFBQWEsQ0FBQyxRQUFzQjtBQUN4QyxRQUFJLENBQUMsWUFBYTtBQUNsQixrQkFBYztBQUNkLGdCQUFZLE1BQU07QUFDbEIsZ0JBQVksbUJBQW1CO0FBQy9CLGdCQUFZLCtCQUFpQztBQUM3QyxrQkFBYyxjQUFjO0FBQzVCLFdBQU8sV0FBVyxLQUFLLGdCQUFnQjtBQUFBLEVBQ3pDO0FBRUEsV0FBUyxpQkFBb0Msb0JBQW9CLEVBQUUsUUFBUSxPQUFLLEVBQUUsaUJBQWlCLFNBQVMsTUFBTSxXQUFXLE9BQU8sRUFBRSxRQUFRLFVBQVUsQ0FBVSxDQUFDLENBQUM7QUFDcEssV0FBUyxpQkFBb0MscUJBQXFCLEVBQUUsUUFBUSxPQUFLLEVBQUUsaUJBQWlCLFNBQVMsTUFBTSxZQUFZLE9BQU8sRUFBRSxRQUFRLFdBQVcsQ0FBVSxDQUFDLENBQUM7QUFDdkssV0FBUyxjQUFpQyxhQUFhLEVBQUcsaUJBQWlCLFNBQVMsTUFBTTtBQUN4RixlQUFXLENBQUM7QUFBRyxlQUFXLENBQUM7QUFDM0IsZUFBVyxNQUFNLFdBQVcsQ0FBQyxHQUFHLEdBQUc7QUFDbkMsZUFBVyxNQUFNLFdBQVcsQ0FBQyxHQUFHLEdBQUc7QUFBQSxFQUNyQyxDQUFDO0FBQ0QsV0FBUyxjQUFpQyxjQUFjLEVBQUcsaUJBQWlCLFNBQVMsTUFBTTtBQUN6RixZQUFRLFNBQVMsUUFBUSxTQUFTO0FBQUEsRUFDcEMsQ0FBQztBQUNELGNBQVksaUJBQWlCLFVBQVUsTUFBTSxNQUFNLFlBQVksS0FBZ0IsQ0FBQztBQUVoRixpQkFBZSxhQUFhLGFBQWE7QUFBQSxJQUN2QyxNQUFNLE1BQU0sTUFBTTtBQUFBLElBQ2xCLFNBQVMsVUFBUTtBQUFFLG1CQUFhO0FBQU0sWUFBTSxRQUFRLE1BQU0sT0FBTyxZQUFZLElBQUksQ0FBQztBQUFHLGlCQUFXLGFBQWE7QUFBQSxJQUFHO0FBQUEsSUFDaEgsUUFBUSxXQUFTO0FBQUUsWUFBTSxPQUFPLE9BQU8sT0FBTyxRQUFRLE1BQUssS0FBSztBQUFHLGlCQUFXLFdBQVc7QUFBQSxJQUFHO0FBQUEsSUFDNUYsWUFBWSxNQUFNO0FBQUUsaUJBQVcsWUFBWTtBQUFBLElBQUc7QUFBQSxFQUNoRCxDQUFDO0FBRUQsUUFBTSxTQUFTLENBQUMsUUFBc0I7QUFDcEMsVUFBTSxRQUFRLEtBQUssS0FBSyxNQUFNLGFBQWEsS0FBTSxJQUFJO0FBQ3JELGdCQUFZO0FBQ1osZ0JBQVksT0FBTyxLQUFLO0FBQ3hCLFFBQUksQ0FBQyxhQUFhO0FBQ2hCLGlCQUFXLEtBQUssUUFBUyxHQUFFLE1BQU0sT0FBTyxLQUFLO0FBQzdDLFVBQUksT0FBTyxVQUFXLG1CQUFrQjtBQUN4QztBQUFBLElBQ0Y7QUFFQSxRQUFJLENBQUMsV0FBVyxRQUFRO0FBQ3RCLFlBQU0sY0FBYyxRQUFRLE9BQU8sT0FBSyxFQUFFLFNBQVMsTUFBTSxRQUFRLENBQUMsRUFBRSxLQUFLO0FBQ3pFLFlBQU0sYUFBYSxNQUFNLHNCQUFzQixNQUFNLENBQUM7QUFDdEQsWUFBTSxTQUFTLG9CQUFvQixhQUFhLE1BQU0sTUFBTSxJQUFJLEdBQUcsWUFBWSxNQUFNLFNBQVM7QUFDOUYsWUFBTSxRQUFRLFFBQVEsT0FBTyxRQUFRLE1BQUssS0FBSztBQUFBLElBQ2pEO0FBQ0EsVUFBTSxPQUFPLEtBQUs7QUFHbEIsVUFBTSxLQUFLLE1BQU07QUFDakIsVUFBTSxLQUFLLFFBQVE7QUFDbkIsVUFBTSxNQUFNLFlBQVksUUFBUSxhQUFhO0FBQzdDLFVBQU0sVUFBVSxtQkFBbUIsU0FBUztBQUFBLE1BQzFDLFFBQVEsRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDdkIsTUFBTTtBQUFBLE1BQ04sT0FBTyxJQUFJO0FBQUEsTUFDWCxzQkFBdUIsSUFBSSxrQkFBeUM7QUFBQSxNQUNwRSxZQUFZLElBQUk7QUFBQSxNQUNoQixTQUFTO0FBQUEsSUFDWCxDQUFDO0FBRUQsVUFBTSxjQUFjLFVBQVUsWUFBWSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssT0FBTyxZQUFZLElBQUksS0FBSyxDQUFDO0FBRWxHLFFBQUksWUFBWSxrQkFBa0IsWUFBWSxZQUFZLFNBQVMsR0FBRztBQUNwRSxhQUFPLFdBQVcsS0FBSyxLQUFLO0FBQzVCLGlCQUFXLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRztBQUM1QixZQUFJLEVBQUUsU0FBUyxDQUFDLFlBQVksWUFBWSxTQUFTLEVBQUUsRUFBRSxFQUFHO0FBQ3hELFVBQUUsVUFBVSxZQUFZO0FBQ3hCLFVBQUUsTUFBTSxPQUFPLEVBQUUsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxXQUFXLFlBQVksU0FBUyxJQUFJLGlCQUFpQixDQUFDO0FBQ2xHLFlBQUksRUFBRSxVQUFVLEdBQUc7QUFDakIsWUFBRSxRQUFRO0FBQU0sWUFBRSxNQUFNLG1CQUFtQixJQUFJO0FBQy9DLFlBQUUsTUFBTSwrQkFBaUM7QUFDekM7QUFBUyx3QkFBYztBQUFHLGlCQUFPLFdBQVcsS0FBSyxnQkFBZ0I7QUFBQSxRQUNuRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBR0EsZUFBVyxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUc7QUFDNUIsUUFBRSxNQUFNLE9BQU8sS0FBSztBQUNwQixRQUFFLEtBQUssSUFBSSxRQUFRLFFBQVEsRUFBRSxNQUFNLElBQUksT0FBTyxTQUFTO0FBQ3ZELFFBQUUsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUNuQixVQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVTtBQUFFLGdCQUFRLE9BQU8sUUFBUSxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQUc7QUFBQSxNQUFVO0FBQ3BGLFVBQUksQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksU0FBUyxLQUFLO0FBQzlFLG1CQUFXLEdBQUc7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFHQSxlQUFXLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRztBQUM1QixRQUFFLEtBQUssS0FBSztBQUNaLFVBQUksRUFBRSxLQUFLLFFBQVEsSUFBSSxNQUFNLEVBQUUsU0FBUyxZQUFZO0FBQ2xELGNBQU0sRUFBRSxPQUFPO0FBQUcsZ0JBQVEsT0FBTyxRQUFRLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFBQSxNQUN4RCxXQUFXLEVBQUUsSUFBSSxPQUFPLFNBQVMsR0FBSSxTQUFRLE9BQU8sUUFBUSxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQUEsSUFDM0U7QUFFQSxrQkFBYztBQUFBLEVBQ2hCO0FBRUEsUUFBTSxPQUFPLENBQUMsUUFBc0I7QUFDbEMsVUFBTSxJQUFJLE1BQU07QUFDaEIsVUFBTSxhQUE4QjtBQUFBLE1BQ2xDLEdBQUksc0JBQXNCLEVBQUUsU0FBUyxZQUFZLE9BQU8sT0FBTyxPQUFPLFFBQVEsT0FBTyxRQUFRLFFBQVEsSUFBSSxDQUFDLEVBQUUsY0FBYyxDQUFDO0FBQUEsSUFDN0g7QUFDQSxVQUFNLEtBQUssTUFBTTtBQUNqQixVQUFNLEtBQUssUUFBUTtBQUVuQixVQUFNLE1BQU0sWUFBWSxRQUFRLGFBQWE7QUFDN0MsVUFBTSxhQUFhLFlBQVksSUFBSSxLQUFLO0FBQ3hDLFVBQU0sU0FBNkIsQ0FBQztBQUNwQyxVQUFNLGFBQWEsYUFBYTtBQUFBLE1BQzlCLFlBQVk7QUFBQSxNQUNaLE9BQU8sV0FBVztBQUFBLE1BQ2xCLEdBQUc7QUFBQSxNQUFJLEdBQUc7QUFBQSxNQUFJLE9BQU87QUFBQSxNQUNyQixTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQ0QsZUFBVyxLQUFLLEdBQUcsV0FBVyxVQUFVO0FBQ3hDLFdBQU8sS0FBSyxHQUFHLFdBQVcsTUFBTTtBQUNoQyxlQUFXLFVBQVUsU0FBUztBQUM1QixZQUFNLFlBQVksWUFBWSxRQUFRLE9BQU8sT0FBTztBQUNwRCxhQUFPLEtBQUssa0JBQWtCO0FBQUEsUUFDNUIsR0FBRyxNQUFNLE9BQU8sSUFBSTtBQUFBLFFBQUcsR0FBRyxPQUFPO0FBQUEsUUFDakMsT0FBTyxZQUFZLFVBQVUsS0FBSztBQUFBLFFBQ2xDO0FBQUEsUUFBSyxPQUFPO0FBQUEsTUFDZCxDQUFDLENBQUM7QUFBQSxJQUNKO0FBQ0EsV0FBTyxLQUFLLG9CQUFvQixhQUFhLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUM3RCxlQUFXLEtBQUssUUFBUyxRQUFPLEtBQUssb0JBQW9CLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxXQUFXLEtBQUssSUFBSSxNQUFNLE1BQU0sRUFBRSxFQUFFLElBQUksS0FBSSxDQUFDLENBQUM7QUFDaEksYUFBUyxPQUFPLHVCQUF1QixZQUFZLFFBQVEsaUNBQWlDO0FBQUEsTUFDMUYsT0FBTyxPQUFPO0FBQUEsTUFDZCxRQUFRLE9BQU87QUFBQSxNQUNmLFNBQVMsUUFBUTtBQUFBLElBQ25CLENBQUMsR0FBRyxNQUFNLEdBQUk7QUFBQSxFQUNoQjtBQUVBLFFBQU0sUUFBUSxDQUFDLFFBQXNCO0FBQUUsV0FBTyxHQUFHO0FBQUcsU0FBSyxHQUFHO0FBQUcsMEJBQXNCLEtBQUs7QUFBQSxFQUFHO0FBQzdGLFFBQU0sYUFBYTtBQUNuQixhQUFXLENBQUM7QUFBRyxhQUFXLENBQUM7QUFDM0Isd0JBQXNCLEtBQUs7QUFDN0IsU0FBUyxPQUFPO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxjQUFjLGlCQUFpQixRQUFRLE1BQU0sVUFBVSxPQUFPLEtBQUs7QUFDM0U7IiwKICAibmFtZXMiOiBbImNhbnZhcyIsICJ3aWR0aCIsICJoZWlnaHQiLCAic2hhZGVyIiwgImhleCIsICJjYW52YXMiLCAiY2FudmFzIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIl0KfQo=

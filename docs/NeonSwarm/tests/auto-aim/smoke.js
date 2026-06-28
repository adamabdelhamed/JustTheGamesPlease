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
  make("player", "sword-arc-katana", "Sword Arc Katana", [[-0.16, -1], [0.16, -1], [0.22, 0.28], [0.48, 0.62], [0.18, 0.52], [0.1, 1], [-0.1, 1], [-0.18, 0.52], [-0.48, 0.62], [-0.22, 0.28]], "pitch", [[[-0.055, -0.72], [0.055, -0.72], [0.055, 0.18], [-0.055, 0.18]]]),
  make("player", "sword-cleaver-wide", "Sword Cleaver Wide", [[-0.28, -1], [0.28, -1], [0.44, -0.76], [0.34, 0.34], [0.72, 0.58], [0.22, 0.55], [0.16, 1], [-0.16, 1], [-0.22, 0.55], [-0.72, 0.58], [-0.34, 0.34], [-0.44, -0.76]], "roll", [[[-0.1, -0.68], [0.1, -0.68], [0.08, 0.18], [-0.08, 0.18]]]),
  make("player", "sword-needle-sabre", "Sword Needle Sabre", [[0, -1], [0.08, -0.82], [0.11, 0.5], [0.32, 0.72], [0.08, 0.64], [0.05, 1], [-0.05, 1], [-0.08, 0.64], [-0.32, 0.72], [-0.11, 0.5], [-0.08, -0.82]], "pitch"),
  make("player", "sword-guarded-blade", "Sword Guarded Blade", [[-0.12, -1], [0.12, -1], [0.16, 0.36], [0.62, 0.36], [0.62, 0.54], [0.14, 0.56], [0.1, 1], [-0.1, 1], [-0.14, 0.56], [-0.62, 0.54], [-0.62, 0.36], [-0.16, 0.36]], "yaw", [[[-0.045, -0.72], [0.045, -0.72], [0.045, 0.22], [-0.045, 0.22]]]),
  make("player", "sword-prism-greatblade", "Sword Prism Greatblade", [[0, -1], [0.34, -0.74], [0.3, 0.28], [0.56, 0.52], [0.2, 0.48], [0.12, 1], [-0.12, 1], [-0.2, 0.48], [-0.56, 0.52], [-0.3, 0.28], [-0.34, -0.74]], "roll", [[[-0.08, -0.48], [0.08, -0.48], [0.08, 0.16], [-0.08, 0.16]]]),
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
  const add = (a, b, c2, normal) => {
    const n = normal ?? normalize(cross(sub(b, a), sub(c2, a)));
    const effect = [
      instance.energyIntensity ?? 1,
      instance.energyCoverage ?? 0.32,
      instance.energySpeed ?? 1,
      instance.energyBleed ?? 0.35
    ];
    [a, b, c2].forEach((p) => output.push({ p, n, color, glow: (instance.glow ?? 1) * (instance.opacity ?? 1) * entranceEase, effect }));
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
      const c2 = { ...defaults, ...cloud };
      const color = hex2(c2.color), core = hex2(c2.coreColor);
      const offset = index * floatsPerCloud;
      packed.set([c2.x, c2.y, c2.driftX, c2.driftY, c2.age ?? 0, c2.dissipationTime, c2.size, c2.rotation, c2.seed, actionValue(c2.dissipationAction), 0, 0], offset);
      packed.set([color[0], color[1], color[2], c2.glow, core[0], core[1], core[2], c2.coreIntensity, c2.detail, c2.turbulence, c2.rimIntensity, c2.opacity], offset + 12);
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
var laneRunnerSceneIds = ["neonHall", "aurora", "crystalForge", "voidGarden", "solarArray"];
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
var crystalForgeLaneRunnerPalette = {
  floor: "#071018",
  boundary: "#26d7ff",
  lane: "#63f1ff",
  centerLane: "#ff5fd8",
  accent: "#ffb84d",
  laneHighlight: "#f4fbff"
};
var voidGardenLaneRunnerPalette = {
  floor: "#080818",
  boundary: "#6f53ff",
  lane: "#35e8b6",
  centerLane: "#ff4fc7",
  accent: "#b9ff6a",
  laneHighlight: "#9bd7ff"
};
var solarArrayLaneRunnerPalette = {
  floor: "#110c07",
  boundary: "#ff9e38",
  lane: "#ffd45a",
  centerLane: "#26d7ff",
  accent: "#ff4f66",
  laneHighlight: "#fff6b8"
};
function isLaneRunnerSceneId(value) {
  return laneRunnerSceneIds.includes(value);
}
function createLaneRunnerScene(options) {
  return sceneCreators[options.sceneId](options);
}
var sceneCreators = {
  neonHall: createNeonHall,
  aurora: createAurora,
  crystalForge: (options) => createThemedLaneRunnerScene(options, crystalForgeLaneRunnerPalette, addCrystalForgeDetails),
  voidGarden: (options) => createThemedLaneRunnerScene(options, voidGardenLaneRunnerPalette, addVoidGardenDetails),
  solarArray: (options) => createThemedLaneRunnerScene(options, solarArrayLaneRunnerPalette, addSolarArrayDetails)
};
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
function createThemedLaneRunnerScene(options, palette, addDetails) {
  const { width, height, timeMs } = options;
  const primitives = [];
  const geometry = laneRunnerPerspective(width, height);
  addStandardLaneRunnerPerspective(primitives, geometry, palette, timeMs);
  addThemedLaneSignals(primitives, geometry, palette, timeMs);
  addDetails(primitives, geometry, timeMs);
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
function addThemedLaneSignals(items, geometry, palette, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let pulseIndex = 0; pulseIndex < 8; pulseIndex++) {
    const travel = (timeMs / 1700 + pulseIndex / 8) % 1;
    const t = Math.pow(travel, 1.5);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    addGlowingLine(items, left, right, pulseIndex % 2 === 0 ? palette.laneHighlight : palette.accent, 0.28 * (1 - travel), 1.1 + t * 1.6);
  }
}
function addCrystalForgeDetails(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 16; index++) {
    const t = Math.pow((index + 1) / 17, 1.55);
    const side = index % 2 === 0 ? 0.14 : 0.86;
    const edge = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side);
    const glint = 0.55 + Math.sin(timeMs / 520 + index * 1.17) * 0.35;
    items.push({
      x: edge.x,
      y: edge.y,
      width: width * (0.012 + t * 0.012),
      height: height * (0.025 + t * 0.06),
      color: index % 3 === 0 ? "#ffb84d" : "#63f1ff",
      secondaryColor: index % 4 === 0 ? "#ff5fd8" : "#f4fbff",
      glow: 0.38,
      intensity: (0.08 + t * 0.055) * glint,
      shape: "diamond",
      rotation: (side < 0.5 ? -0.22 : 0.22) + Math.sin(timeMs / 1400 + index) * 0.08
    });
  }
  addGlowingLine(items, { x: vp.x - width * 0.13, y: vp.y + height * 0.045 }, { x: vp.x + width * 0.13, y: vp.y + height * 0.045 }, "#ffb84d", 0.22, 1.3);
}
function addVoidGardenDetails(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 20; index++) {
    const t = Math.pow(0.08 + index * 23 % 100 / 112, 1.65);
    const side = index % 4 < 2 ? 0.18 : 0.82;
    const center = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side + Math.sin(timeMs / 1900 + index) * 0.035);
    const bloom = 0.5 + Math.sin(timeMs / 760 + index * 0.8) * 0.32;
    items.push({
      x: center.x,
      y: center.y,
      width: width * (6e-3 + t * 0.014),
      height: width * (6e-3 + t * 0.014),
      color: index % 3 === 0 ? "#b9ff6a" : "#35e8b6",
      secondaryColor: index % 2 === 0 ? "#6f53ff" : "#ff4fc7",
      glow: 0.42,
      intensity: (0.07 + t * 0.05) * bloom,
      shape: index % 2 === 0 ? "diamond" : "bolt",
      rotation: Math.sin(timeMs / 1200 + index) * 0.4
    });
  }
  addGlowingLine(items, { x: vp.x - width * 0.18, y: vp.y + height * 0.07 }, { x: vp.x + width * 0.18, y: vp.y + height * 0.07 }, "#35e8b6", 0.18, 1.1);
}
function addSolarArrayDetails(items, geometry, timeMs) {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 18; index++) {
    const t = Math.pow((index + 1) / 19, 1.48);
    const side = index % 2 === 0 ? 0.1 : 0.9;
    const mount = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side);
    const pulse = 0.62 + Math.sin(timeMs / 610 + index * 1.05) * 0.3;
    items.push({
      x: mount.x,
      y: mount.y,
      width: width * (0.018 + t * 0.035),
      height: height * (0.012 + t * 0.024),
      color: index % 3 === 0 ? "#ffd45a" : "#ff9e38",
      secondaryColor: index % 4 === 0 ? "#26d7ff" : "#ff4f66",
      glow: 0.32,
      intensity: (0.08 + t * 0.055) * pulse,
      shape: "bolt",
      rotation: side < 0.5 ? -0.38 : 0.38
    });
  }
  addGlowingLine(items, { x: vp.x - width * 0.11, y: vp.y + height * 0.035 }, { x: vp.x + width * 0.11, y: vp.y + height * 0.035 }, "#fff6b8", 0.24, 1.4);
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
  const frontRow = explicitRows.size ? [...explicitRows.values()].sort((left, right) => Math.max(...right.map((t) => t.y)) - Math.max(...left.map((t) => t.y)))[0] : targets.filter((t) => Math.abs(t.y - Math.max(...targets.map((c2) => c2.y))) < 3);
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
   * - Swords are not period-based like guns. They swing only when a valid target
   *   is within range and cooldown is ready. They idle silently otherwise.
   * - One active sword per player (family-scoped exclusivity).
   * - Repeated pickups of the same sword increase that sword's active level.
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
     * Arc Blade - Core sword. Fast, curved, targets nearest enemy in lane.
     * Short cooldown makes it useful against dense single-lane waves.
     */
    arcBlade: {
      label: "Arc Blade",
      family: "sword",
      rarity: "starter",
      range: 52,
      arcDegrees: 70,
      damage: 1.5,
      cooldownSeconds: 0.55,
      maxTargets: 2,
      targetingMode: "nearestInCurrentLane",
      slashDurationMs: 150,
      color: "cyan",
      slashThickness: 1,
      agentNotes: "Fast and sharp. Curved neon slash. 120-180ms feel. Fading afterimage. Like a whip-like katana arc."
    },
    /**
     * Cleaver - Heavy sword. Slower, but sweeps across every column.
     * Starts with 2 rows of vertical reach and scales to 4 rows at level 5.
     */
    cleaver: {
      label: "Cleaver",
      family: "sword",
      rarity: "common",
      range: 68,
      arcDegrees: 360,
      damage: 2.4,
      damageAtLevel5: 3.4,
      cooldownSeconds: 1.35,
      maxTargets: 12,
      rowReach: { level1: 2, level5: 4 },
      targetingMode: "nearestInEitherLane",
      slashDurationMs: 260,
      color: "orange",
      slashThickness: 1.9,
      agentNotes: "Heavy all-column sweep. Repeated cleaver pickups level it up from 2 rows of reach to 4 rows at level 5, with more total damage per swing."
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
      if (sword.damageAtLevel5 !== void 0) this.require(sword.damageAtLevel5 >= sword.damage, `${id} damageAtLevel5 must be at least damage.`);
      this.require(sword.cooldownSeconds > 0, `${id} cooldownSeconds must be positive.`);
      this.require(sword.maxTargets >= 1, `${id} maxTargets must be at least 1.`);
      if (sword.rowReach) {
        this.require(Number.isInteger(sword.rowReach.level1) && sword.rowReach.level1 >= 1, `${id} rowReach.level1 must be a positive integer.`);
        this.require(Number.isInteger(sword.rowReach.level5) && sword.rowReach.level5 >= sword.rowReach.level1, `${id} rowReach.level5 must be at least level1.`);
      }
      this.require(sword.slashDurationMs > 0, `${id} slashDurationMs must be positive.`);
      this.require(sword.slashThickness > 0, `${id} slashThickness must be positive.`);
      this.require(neonPalette[sword.color] !== void 0, `${id} has an unknown color.`);
    }
  }
};
var swordFamily = new SwordFamilyDefinition();

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

// projects/NeonSwarm/CombatDefinition/TrackBuilder.ts
var c = {
  left: { outer: 0, nearOuter: 1, mid: 2, nearInner: 3, inner: 4 },
  right: { inner: 5, nearInner: 6, mid: 7, nearOuter: 8, outer: 9 }
};
var defaultLaneWidth = 5;
var emptySymbol = ".";
var playerSymbol = "M";
var enemyAliases = {
  basic: "enemy.basic",
  basicOrb: "enemy.basicOrb",
  glass: "enemy.glassShield",
  glassShield: "enemy.glassShield",
  winger: "enemy.winger",
  tank: "enemy.tank"
};
var weaponPrefixes = {
  gun: "pickup.weapon.gun.",
  shield: "pickup.weapon.shield.",
  sword: "pickup.weapon.sword."
};
var pickupAliases = {
  "unitMultiplier.2x": "pickup.unitMultiplier.2x",
  "unitMultiplier.squadPlusOne": "pickup.unitMultiplier.2x"
};
var preferredSymbols = {
  "enemy.basic": "E",
  "enemy.basicOrb": "E",
  "enemy.glassShield": "D",
  "enemy.winger": "W",
  "enemy.tank": "T",
  "pickup.weapon.gun.pulsePistol": "G",
  "pickup.weapon.gun.needlerSmg": "N",
  "pickup.weapon.gun.burstCarbine": "B",
  "pickup.weapon.gun.heavyCannon": "H",
  "pickup.weapon.gun.splitterRifle": "R",
  "pickup.weapon.shield.lightGuard": "S",
  "pickup.weapon.shield.satelliteGuard": "V",
  "pickup.weapon.shield.hexGuard": "X",
  "pickup.weapon.sword.arcBlade": "a",
  "pickup.weapon.sword.cleaver": "c",
  "pickup.unitMultiplier.2x": "2"
};
var fallbackSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789!#$%&*+,-/:;<=>?@^_~".split("").filter((symbol) => symbol !== emptySymbol && symbol !== playerSymbol);
function requireInteger(value, label) {
  if (!Number.isInteger(value)) throw new Error(`${label} must be an integer.`);
}
function requirePositiveInteger(value, label) {
  requireInteger(value, label);
  if (value <= 0) throw new Error(`${label} must be greater than zero.`);
}
function normalizeSpeed(speed, label) {
  const value = speed ?? 1;
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${label} speed must be greater than zero.`);
  return value;
}
function normalizeEnemyId(id) {
  if (id.startsWith("enemy.")) return id;
  return enemyAliases[id] ?? `enemy.${id}`;
}
function normalizeWeaponId(id) {
  if (id.startsWith("pickup.weapon.")) return id;
  const dotIndex = id.indexOf(".");
  if (dotIndex <= 0) throw new Error(`Weapon id "${id}" must use family.id shorthand or a canonical pickup.weapon id.`);
  const family = id.slice(0, dotIndex);
  const member = id.slice(dotIndex + 1);
  const prefix = weaponPrefixes[family];
  if (!prefix) throw new Error(`Weapon id "${id}" has unknown weapon family "${family}".`);
  return `${prefix}${member}`;
}
function normalizePickupId(id) {
  if (id.startsWith("pickup.")) return id;
  return pickupAliases[id] ?? `pickup.${id}`;
}
function enemyMemberId(canonicalId) {
  if (canonicalId === "enemy.basic") return "basicOrb";
  if (!canonicalId.startsWith("enemy.")) return null;
  return canonicalId.slice("enemy.".length);
}
function validateCanonicalId(id) {
  const enemyId = enemyMemberId(id);
  if (enemyId) {
    if (!(enemyId in orbFamily.members)) throw new Error(`Unknown enemy id "${id}".`);
    return;
  }
  const validators = [
    ["pickup.weapon.gun.", gunFamily.members, "gun"],
    ["pickup.weapon.shield.", shieldFamily.members, "shield"],
    ["pickup.weapon.sword.", swordFamily.members, "sword"]
  ];
  for (const [prefix, members, label] of validators) {
    if (!id.startsWith(prefix)) continue;
    const memberId = id.slice(prefix.length);
    if (!(memberId in members)) throw new Error(`Unknown ${label} id "${id}".`);
    return;
  }
  if (id === "pickup.unitMultiplier.2x") return;
  if (id.startsWith("pickup.unitMultiplier.")) {
    const memberId = id.slice("pickup.unitMultiplier.".length);
    if (!(memberId in multiplierFamily.members)) throw new Error(`Unknown multiplier id "${id}".`);
    return;
  }
  throw new Error(`Unsupported track entity id "${id}".`);
}
function spanFor(id) {
  const enemyId = enemyMemberId(id);
  return enemyId && enemyId in orbFamily.members ? orbFamily.members[enemyId].columnSpan : 1;
}
var TrackBuilderCore = class {
  constructor(options) {
    this.options = options;
    this.laneWidth = options.laneWidth ?? defaultLaneWidth;
    requirePositiveInteger(this.laneWidth, "Track laneWidth");
    if (this.laneWidth < 3) throw new Error("Track laneWidth must be at least 3.");
    if (!options.label.trim()) throw new Error("Track label is required.");
    if (!options.description.trim()) throw new Error("Track description is required.");
    if (options.balance.enemyHp <= 0) throw new Error("Track balance enemyHp must be greater than zero.");
    if (options.balance.enemySpeed <= 0) throw new Error("Track balance enemySpeed must be greater than zero.");
    this.validateColumn(options.playerStartColumn ?? c.left.mid, "playerStartColumn", 1);
  }
  laneWidth;
  placements = [];
  cursor = 1;
  enemy(id, options) {
    this.place(normalizeEnemyId(id), options, this.cursor, "enemy");
    return this;
  }
  weapon(id, options) {
    this.place(normalizeWeaponId(id), options, this.cursor, "weapon");
    return this;
  }
  pickup(id, options) {
    this.place(normalizePickupId(id), options, this.cursor, "pickup");
    return this;
  }
  advanceRows(rows) {
    requirePositiveInteger(rows, "advanceRows rows");
    this.cursor += rows;
    return this;
  }
  respite(rows) {
    return this.advanceRows(rows);
  }
  section(name, rows, build) {
    if (!name.trim()) throw new Error("Track section name is required.");
    requirePositiveInteger(rows, `Track section "${name}" rows`);
    const section = new TrackSectionBuilderCore(this, name, this.cursor, rows);
    build(section);
    this.cursor += rows;
    return this;
  }
  pressure(rows, build) {
    return this.section("pressure", rows, build);
  }
  rebuild(rows, build) {
    return this.section("rebuild", rows, build);
  }
  line(enemyId, options) {
    this.addLine(this.cursor, normalizeEnemyId(enemyId), options, "line");
    return this;
  }
  alternating(enemyId, options) {
    this.addAlternating(this.cursor, normalizeEnemyId(enemyId), options, "alternating");
    return this;
  }
  wall(enemyId, options) {
    this.addWall(this.cursor, normalizeEnemyId(enemyId), options, "wall");
    return this;
  }
  drip(enemyId, options) {
    this.addDrip(this.cursor, normalizeEnemyId(enemyId), options, "drip");
    return this;
  }
  addSectionEnemy(baseRow, sectionName, rowOffset, id, options) {
    this.place(normalizeEnemyId(id), options, baseRow + rowOffset, `section "${sectionName}" enemy`);
  }
  addSectionWeapon(baseRow, sectionName, rowOffset, id, options) {
    this.place(normalizeWeaponId(id), options, baseRow + rowOffset, `section "${sectionName}" weapon`);
  }
  addSectionPickup(baseRow, sectionName, rowOffset, id, options) {
    this.place(normalizePickupId(id), options, baseRow + rowOffset, `section "${sectionName}" pickup`);
  }
  addLine(baseRow, enemyId, options, label) {
    requirePositiveInteger(options.count, `${label} count`);
    const gap = options.gap ?? 0;
    requireInteger(gap, `${label} gap`);
    if (gap < 0) throw new Error(`${label} gap cannot be negative.`);
    for (let index = 0; index < options.count; index++) {
      this.place(enemyId, { column: options.column, speed: options.speed }, baseRow + index * (gap + 1), label);
    }
  }
  addAlternating(baseRow, enemyId, options, label) {
    requirePositiveInteger(options.count, `${label} count`);
    if (options.columns.length === 0) throw new Error(`${label} columns must include at least one column.`);
    const gap = options.gap ?? 0;
    requireInteger(gap, `${label} gap`);
    if (gap < 0) throw new Error(`${label} gap cannot be negative.`);
    for (let index = 0; index < options.count; index++) {
      const column = options.columns[index % options.columns.length];
      this.place(enemyId, { column, speed: options.speed }, baseRow + index * (gap + 1), label);
    }
  }
  addWall(baseRow, enemyId, options, label) {
    if (options.columns.length === 0) throw new Error(`${label} columns must include at least one column.`);
    for (const column of options.columns) {
      this.place(enemyId, { column, speed: options.speed }, baseRow, label);
    }
  }
  addDrip(baseRow, enemyId, options, label) {
    requirePositiveInteger(options.rows, `${label} rows`);
    requirePositiveInteger(options.every, `${label} every`);
    for (let offset = 0; offset < options.rows; offset += options.every) {
      this.place(enemyId, { column: options.column, speed: options.speed }, baseRow + offset, label);
    }
  }
  build() {
    const playerStartColumn = this.options.playerStartColumn ?? c.left.mid;
    const maxPlacementRow = this.placements.reduce((max, item) => Math.max(max, item.row), 0);
    const rowCount = Math.max(this.cursor, maxPlacementRow + 1, 1);
    const rows = Array.from({ length: rowCount }, () => Array.from({ length: this.laneWidth * 2 }, () => emptySymbol));
    const occupied = Array.from({ length: rowCount }, () => /* @__PURE__ */ new Map());
    const legend = /* @__PURE__ */ new Map();
    legend.set(emptySymbol, { id: "empty", speed: 1 });
    legend.set(playerSymbol, { id: "player.start", speed: 1 });
    const usedSymbols = /* @__PURE__ */ new Set([emptySymbol, playerSymbol]);
    const symbolByEntity = /* @__PURE__ */ new Map();
    const playerCells = this.cellsFor(playerStartColumn, 1);
    for (const cell of playerCells) occupied[0].set(cell.globalColumn, "player.start");
    rows[0][playerStartColumn] = playerSymbol;
    for (const placement of this.placements) {
      const symbol = this.symbolFor(placement, usedSymbols, symbolByEntity);
      legend.set(symbol, { id: placement.id, speed: placement.speed });
      for (const cell of this.cellsFor(placement.column, placement.span)) {
        const existing = occupied[placement.row].get(cell.globalColumn);
        if (existing) {
          throw new Error(`Track placement overlap at row ${placement.row}, column ${cell.globalColumn}. Existing id "${existing}", new id "${placement.id}".`);
        }
        occupied[placement.row].set(cell.globalColumn, placement.id);
      }
      rows[placement.row][placement.column] = symbol;
    }
    const definition = {
      layout: `
${rows.slice().reverse().map((row) => `${row.slice(0, this.laneWidth).join("")} | ${row.slice(this.laneWidth).join("")}`).join("\n")}
`,
      legend: Object.fromEntries([...legend.entries()].map(([symbol, entry]) => [
        symbol,
        entry.speed === 1 ? { id: entry.id } : { id: entry.id, speed: entry.speed }
      ])),
      balance: this.options.balance
    };
    parseTrackDefinition(definition);
    return {
      label: this.options.label,
      description: this.options.description,
      environment: this.options.environment,
      definition
    };
  }
  validateSectionOffset(sectionName, rowOffset, rows) {
    requireInteger(rowOffset, `Track section "${sectionName}" row offset`);
    if (rowOffset < 0 || rowOffset >= rows) {
      throw new Error(`Track section "${sectionName}" row offset ${rowOffset} is outside the 0-${rows - 1} section range.`);
    }
  }
  validateSectionSpan(sectionName, rowOffset, rows, coveredRows) {
    requirePositiveInteger(coveredRows, `Track section "${sectionName}" covered rows`);
    this.validateSectionOffset(sectionName, rowOffset, rows);
    const lastOffset = rowOffset + coveredRows - 1;
    if (lastOffset >= rows) {
      throw new Error(`Track section "${sectionName}" pattern reaches row offset ${lastOffset}, outside the 0-${rows - 1} section range.`);
    }
  }
  place(id, options, row, label) {
    requireInteger(row, `${label} row`);
    if (row < 0) throw new Error(`${label} row cannot be negative.`);
    validateCanonicalId(id);
    const span = spanFor(id);
    this.validateColumn(options.column, `${label} column`, span);
    this.placements.push({
      row,
      column: options.column,
      id,
      speed: normalizeSpeed(options.speed, label),
      span
    });
  }
  validateColumn(column, label, span) {
    requireInteger(column, label);
    const totalWidth = this.laneWidth * 2;
    if (column < 0 || column >= totalWidth) throw new Error(`${label} ${column} is outside the 0-${totalWidth - 1} track range.`);
    const sideColumn = column % this.laneWidth;
    if (sideColumn + span > this.laneWidth) {
      throw new Error(`${label} ${column} cannot fit a ${span}-column entity inside a ${this.laneWidth}-column lane.`);
    }
  }
  cellsFor(column, span) {
    return Array.from({ length: span }, (_, offset) => ({ globalColumn: column + offset }));
  }
  symbolFor(placement, usedSymbols, symbolByEntity) {
    const key = `${placement.id}@${placement.speed}`;
    const existing = symbolByEntity.get(key);
    if (existing) return existing;
    const preferred = preferredSymbols[placement.id];
    const symbol = preferred && !usedSymbols.has(preferred) ? preferred : fallbackSymbols.find((candidate) => !usedSymbols.has(candidate));
    if (!symbol) throw new Error("Track builder ran out of one-character legend symbols.");
    usedSymbols.add(symbol);
    symbolByEntity.set(key, symbol);
    return symbol;
  }
};
var TrackSectionBuilderCore = class {
  constructor(parent, name, baseRow, rows) {
    this.parent = parent;
    this.name = name;
    this.baseRow = baseRow;
    this.rows = rows;
  }
  rowOffset = 0;
  at(rowOffset) {
    this.parent.validateSectionOffset(this.name, rowOffset, this.rows);
    this.rowOffset = rowOffset;
    return this;
  }
  enemy(id, options) {
    this.parent.addSectionEnemy(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }
  weapon(id, options) {
    this.parent.addSectionWeapon(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }
  pickup(id, options) {
    this.parent.addSectionPickup(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }
  line(enemyId, options) {
    const gap = options.gap ?? 0;
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, (options.count - 1) * (gap + 1) + 1);
    this.parent.addLine(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" line`);
    return this;
  }
  alternating(enemyId, options) {
    const gap = options.gap ?? 0;
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, (options.count - 1) * (gap + 1) + 1);
    this.parent.addAlternating(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" alternating`);
    return this;
  }
  wall(enemyId, options) {
    this.parent.addWall(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" wall`);
    return this;
  }
  drip(enemyId, options) {
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, options.rows);
    this.parent.addDrip(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" drip`);
    return this;
  }
};
var trackBuilder = {
  create(options) {
    return new TrackBuilderCore(options);
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/TrackComposer.ts
var targetRowsByTier = {
  1: 105,
  2: 265,
  3: 425
};
var enemyHpByTier = {
  1: 1,
  2: 1,
  3: 1
};
var pick = (items, tier, cycleIndex) => items[Math.min(items.length - 1, tier - 1 + cycleIndex % 2)];
function createContext(builder, tier) {
  let cursor = 1;
  return {
    tier,
    get cursor() {
      return cursor;
    },
    rebuild(rows, build) {
      builder.rebuild(rows, build);
      cursor += rows;
    },
    pressure(rows, build) {
      builder.pressure(rows, build);
      cursor += rows;
    },
    respite(rows) {
      builder.respite(rows);
      cursor += rows;
    }
  };
}
function gunSchoolPressure(section, tier, cycleIndex) {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 22 });
  section.at(22).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 12 });
  if (cycleIndex > 0) section.at(1).drip("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, rows: 34, every: 6 });
  if (cycleIndex > 0) section.at(34).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 8 });
  if (tier >= 2 && cycleIndex > 0) section.at(6).alternating("winger", { columns: [c.right.inner, c.left.inner], count: 8, gap: 3 });
  if (tier >= 3 && cycleIndex > 0) {
    section.at(24).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
    section.at(28).wall("basic", { columns: [c.left.nearInner, c.right.nearInner] });
  }
}
function guardBladePressure(section, tier, cycleIndex) {
  const hasCleaverSetup = tier >= 2 && cycleIndex > 0;
  section.at(0).line("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, count: 18 });
  section.at(18).alternating("basic", { columns: [c.left.mid, c.right.mid], count: hasCleaverSetup ? 12 : 24, gap: hasCleaverSetup ? 1 : void 0 });
  if (cycleIndex > 0) section.at(3).alternating("glassShield", { columns: [c.left.outer, c.right.outer], count: 8, gap: 3 });
  if (cycleIndex > 0) section.at(8).wall("basic", { columns: [c.left.mid, c.right.mid] });
  if (tier >= 2 && cycleIndex > 0) section.at(14).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 6, gap: 3 });
  if (tier >= 3 && cycleIndex > 0) section.at(25).enemy("tank", { column: c.right.inner });
}
function crystalSiegePressure(section, tier, cycleIndex) {
  section.at(0).alternating("glassShield", { columns: [c.left.outer, c.right.outer, c.left.mid, c.right.mid], count: 16 });
  if (cycleIndex > 0) section.at(23).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
  section.at(25).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 23 });
  if (cycleIndex > 0) section.at(4).line("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, count: 18 });
  if (tier >= 2 && cycleIndex > 0) section.at(24).wall("basic", { columns: [c.left.outer, c.left.nearInner, c.right.nearInner, c.right.outer] });
  if (tier >= 3 && cycleIndex > 0) section.at(36).enemy("tank", { column: cycleIndex % 2 === 0 ? c.right.inner : c.left.nearOuter });
}
function swarmBloomPressure(section, tier, cycleIndex) {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 20 });
  section.at(20).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 24 });
  if (cycleIndex > 0) section.at(2).drip("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, rows: 34, every: 6 });
  if (tier >= 2 && cycleIndex > 0) section.at(7).alternating("winger", { columns: [c.left.inner, c.right.inner], count: 7, gap: 3 });
  if (tier >= 2 && cycleIndex > 0) section.at(21).wall("glassShield", { columns: [c.left.nearOuter, c.right.nearOuter] });
  if (tier >= 3 && cycleIndex > 0) section.at(36).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
}
function mirrorArrayPressure(section, tier, cycleIndex) {
  section.at(4).alternating("basic", { columns: [c.left.mid, c.right.mid, c.left.outer, c.right.outer], count: 18 });
  section.at(22).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 24 });
  if (cycleIndex > 0) section.at(0).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter] });
  if (cycleIndex > 0) section.at(6).drip("glassShield", { column: cycleIndex % 2 === 0 ? c.left.nearInner : c.right.nearInner, rows: 32, every: 6 });
  if (tier >= 2 && cycleIndex > 0) section.at(18).alternating("winger", { columns: [c.right.inner, c.left.inner], count: 7, gap: 3 });
  if (tier >= 3 && cycleIndex > 0) section.at(32).wall("tank", { columns: [c.left.nearOuter, c.right.inner] });
}
var themePlans = {
  gunSchool: {
    finalRows: 42,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.pulsePistol", { column: c.left.mid });
        section.at(4).weapon("shield.lightGuard", { column: c.right.mid });
        section.at(7).enemy("basic", { column: c.left.nearOuter });
        section.at(8).enemy("basic", { column: c.right.nearOuter });
        if (context.tier >= 2) section.at(6).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(42, (section) => gunSchoolPressure(section, context.tier, cycleIndex));
      context.rebuild(10, (section) => {
        section.at(0).weapon(pick(["gun.burstCarbine", "gun.needlerSmg", "gun.splitterRifle", "gun.heavyCannon"], context.tier, cycleIndex), { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(2).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
        if (cycleIndex % 3 === 1) section.at(4).weapon("shield.lightGuard", { column: c.left.nearInner });
        section.at(4).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.outer : c.left.outer });
        section.at(6).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter });
        if (cycleIndex % 2 === 0) section.at(7).pickup("unitMultiplier.2x", { column: c.right.nearOuter });
        section.at(8).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.mid : c.right.mid });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.nearOuter : c.left.nearOuter });
      });
      context.respite(context.tier >= 2 ? 4 : 2);
    },
    finish(context, cycleIndex) {
      context.pressure(42, (section) => gunSchoolPressure(section, context.tier, cycleIndex));
    }
  },
  guardBlades: {
    finalRows: 42,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("sword.arcBlade", { column: c.left.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.right.mid });
        if (context.tier >= 2) section.at(6).weapon("shield.satelliteGuard", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(42, (section) => guardBladePressure(section, context.tier, cycleIndex));
      context.rebuild(10, (section) => {
        section.at(0).weapon(pick(["sword.arcBlade", "sword.cleaver", "sword.cleaver"], context.tier, cycleIndex), { column: c.left.mid });
        section.at(3).weapon(pick(["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard"], context.tier, cycleIndex), { column: c.right.mid });
        if (cycleIndex % 2 === 0) section.at(7).pickup("unitMultiplier.2x", { column: c.left.nearInner });
        section.at(8).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(9).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(42, (section) => guardBladePressure(section, context.tier, cycleIndex));
    }
  },
  crystalSiege: {
    finalRows: 48,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.burstCarbine", { column: c.left.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.right.mid });
        section.at(6).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(48, (section) => crystalSiegePressure(section, context.tier, cycleIndex));
      context.rebuild(11, (section) => {
        section.at(0).weapon(pick(["gun.burstCarbine", "gun.heavyCannon", "gun.splitterRifle"], context.tier, cycleIndex), { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(4).weapon(pick(["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard"], context.tier, cycleIndex), { column: c.left.nearOuter });
        if (context.tier >= 2) section.at(7).weapon("sword.cleaver", { column: c.right.nearOuter });
        section.at(9).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(48, (section) => crystalSiegePressure(section, context.tier, cycleIndex));
    }
  },
  swarmBloom: {
    finalRows: 44,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.pulsePistol", { column: c.left.mid });
        section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid });
        section.at(5).weapon("shield.lightGuard", { column: c.left.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(44, (section) => swarmBloomPressure(section, context.tier, cycleIndex));
      context.rebuild(12, (section) => {
        section.at(0).pickup("unitMultiplier.2x", { column: cycleIndex % 2 === 0 ? c.left.mid : c.right.mid });
        section.at(3).weapon(pick(["gun.needlerSmg", "sword.arcBlade", "gun.burstCarbine", "shield.satelliteGuard"], context.tier, cycleIndex), { column: c.left.nearOuter });
        section.at(7).weapon(pick(["shield.lightGuard", "sword.cleaver", "shield.hexGuard"], context.tier, cycleIndex), { column: c.right.nearOuter });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter });
        section.at(11).enemy("winger", { column: cycleIndex % 2 === 0 ? c.right.outer : c.left.outer });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(44, (section) => swarmBloomPressure(section, context.tier, cycleIndex));
    }
  },
  mirrorArray: {
    finalRows: 46,
    open(context) {
      context.rebuild(9, (section) => {
        section.at(0).weapon("gun.burstCarbine", { column: c.right.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.left.mid });
        if (context.tier >= 2) section.at(6).weapon("sword.cleaver", { column: c.right.nearOuter });
      });
      context.respite(4);
    },
    cycle(context, cycleIndex) {
      context.pressure(46, (section) => mirrorArrayPressure(section, context.tier, cycleIndex));
      context.rebuild(11, (section) => {
        section.at(0).weapon(pick(["gun.splitterRifle", "gun.heavyCannon", "gun.burstCarbine"], context.tier, cycleIndex), { column: c.left.mid });
        section.at(3).weapon(pick(["shield.lightGuard", "sword.cleaver", "shield.hexGuard"], context.tier, cycleIndex), { column: c.right.mid });
        if (cycleIndex % 2 === 0) section.at(8).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.left.nearInner : c.right.nearInner });
      });
      context.respite(2);
    },
    finish(context, cycleIndex) {
      context.pressure(46, (section) => mirrorArrayPressure(section, context.tier, cycleIndex));
    }
  }
};
function composeTrack(options) {
  const builder = trackBuilder.create({
    label: options.label,
    description: options.description,
    environment: { sceneId: options.sceneId },
    balance: { enemyHp: enemyHpByTier[options.tier], enemySpeed: 1 }
  });
  const context = createContext(builder, options.tier);
  const plan = themePlans[options.theme];
  const targetRows = targetRowsByTier[options.tier];
  plan.open(context);
  let cycleIndex = 0;
  while (context.cursor + plan.finalRows < targetRows) {
    plan.cycle(context, cycleIndex);
    cycleIndex++;
  }
  plan.finish(context, cycleIndex);
  return builder.build();
}

// projects/NeonSwarm/CombatDefinition/tracks/Track4.ts
var generatedTrack = composeTrack({
  label: "Skybreak",
  description: "An Aurora opener focused on shields, short sword reads, and patient close-range cleanup.",
  sceneId: "aurora",
  theme: "guardBlades",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track5.ts
var generatedTrack2 = composeTrack({
  label: "Ribbon Storm",
  description: "Aurora pressure expands into alternating shield rebuilds, wider sword choices, and clustered close-range threats.",
  sceneId: "aurora",
  theme: "guardBlades",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track6.ts
var generatedTrack3 = composeTrack({
  label: "Magnetic Dawn",
  description: "The Aurora finale asks for deliberate shield timing and sword selection against long, readable threat waves.",
  sceneId: "aurora",
  theme: "guardBlades",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track7.ts
var generatedTrack4 = composeTrack({
  label: "Prism Ignition",
  description: "A Crystal Forge opener built around burst fire, glass decoys, and early heavy-threat rehearsal.",
  sceneId: "crystalForge",
  theme: "crystalSiege",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track8.ts
var generatedTrack5 = composeTrack({
  label: "Facet Run",
  description: "Crystal Forge density sharpens with heavier guns, sturdier shields, and tank breaks framed by glass decoys.",
  sceneId: "crystalForge",
  theme: "crystalSiege",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track9.ts
var generatedTrack6 = composeTrack({
  label: "Glass Hammer",
  description: "The Crystal Forge finale commits to heavy weapon payoffs, repeated tank lanes, and prismatic decoy pressure.",
  sceneId: "crystalForge",
  theme: "crystalSiege",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track1.ts
var generatedTrack7 = composeTrack({
  label: "First Glow",
  description: "A gun-forward Neon Nebulae opener with clear rebuild shelves and only a few shield safety nets.",
  sceneId: "neonHall",
  theme: "gunSchool",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track2.ts
var generatedTrack8 = composeTrack({
  label: "Drift Lesson",
  description: "A longer Neon Nebulae gun lesson that adds wing pressure, stronger firearm choices, and sparse shield relief.",
  sceneId: "neonHall",
  theme: "gunSchool",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track3.ts
var generatedTrack9 = composeTrack({
  label: "Nebula Gate",
  description: "The Neon Nebulae gun finale layers heavier firearms, tanks, and sustained lane reading without leaning on speed changes.",
  sceneId: "neonHall",
  theme: "gunSchool",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track13.ts
var generatedTrack10 = composeTrack({
  label: "Panel Dawn",
  description: "A Solar Array opener with mirrored reads, split-lane weapon timing, and bright but measured pressure.",
  sceneId: "solarArray",
  theme: "mirrorArray",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track14.ts
var generatedTrack11 = composeTrack({
  label: "Heliostat Rush",
  description: "Solar Array pressure grows through mirrored walls, precision rebuilds, and alternating outer-lane surges.",
  sceneId: "solarArray",
  theme: "mirrorArray",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track15.ts
var generatedTrack12 = composeTrack({
  label: "Mirror Zenith",
  description: "The Solar Array finale mixes mirrored tank breaks, split-fire rebuilds, and long-form precision pressure.",
  sceneId: "solarArray",
  theme: "mirrorArray",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/Track10.ts
var generatedTrack13 = composeTrack({
  label: "Bloom Signal",
  description: "A Void Garden opener about growing the squad early and sustaining calm cross-lane bloom pressure.",
  sceneId: "voidGarden",
  theme: "swarmBloom",
  tier: 1
});

// projects/NeonSwarm/CombatDefinition/tracks/Track11.ts
var generatedTrack14 = composeTrack({
  label: "Root Lattice",
  description: "Void Garden adds denser squad growth windows, split weapon support, and slow-blooming paired pressure.",
  sceneId: "voidGarden",
  theme: "swarmBloom",
  tier: 2
});

// projects/NeonSwarm/CombatDefinition/tracks/Track12.ts
var generatedTrack15 = composeTrack({
  label: "Night Orchard",
  description: "The Void Garden finale leans into squad recovery, layered support pickups, and broad organic pressure.",
  sceneId: "voidGarden",
  theme: "swarmBloom",
  tier: 3
});

// projects/NeonSwarm/CombatDefinition/tracks/index.ts
var tracks = {
  "neon-nebulae-1": generatedTrack7,
  "neon-nebulae-2": generatedTrack8,
  "neon-nebulae-3": generatedTrack9,
  "aurora-1": generatedTrack,
  "aurora-2": generatedTrack2,
  "aurora-3": generatedTrack3,
  "crystal-forge-1": generatedTrack4,
  "crystal-forge-2": generatedTrack5,
  "crystal-forge-3": generatedTrack6,
  "void-garden-1": generatedTrack13,
  "void-garden-2": generatedTrack14,
  "void-garden-3": generatedTrack15,
  "solar-array-1": generatedTrack10,
  "solar-array-2": generatedTrack11,
  "solar-array-3": generatedTrack12
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
  },
  crystalForge: {
    label: "Crystal Forge",
    description: "Prismatic factory lanes with sharp pressure, glass decoys, and heavy crystalline breaks.",
    environment: { sceneId: "crystalForge" },
    trackIds: ["crystal-forge-1", "crystal-forge-2", "crystal-forge-3"]
  },
  voidGarden: {
    label: "Void Garden",
    description: "Bioluminescent night lanes with sparse blooms, decoys, and controlled recovery pockets.",
    environment: { sceneId: "voidGarden" },
    trackIds: ["void-garden-1", "void-garden-2", "void-garden-3"]
  },
  solarArray: {
    label: "Solar Array",
    description: "Bright orbital lanes with mirrored walls, fast outer surges, and decisive heavy tools.",
    environment: { sceneId: "solarArray" },
    trackIds: ["solar-array-1", "solar-array-2", "solar-array-3"]
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
        const aimAngle = origin.aimX === void 0 || origin.aimY === void 0 ? 0 : Math.atan2(origin.aimX - origin.x, origin.y - origin.aimY);
        const spreadDegrees = count === 1 ? 0 : (index / (count - 1) - 0.5) * level2.spreadDegrees;
        const angle = aimAngle + spreadDegrees * Math.PI / 180;
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

// projects/NeonSwarm/src/combat/independentWeaponSlots.ts
function syncSlotArray(slots, count, create) {
  const target = Math.max(1, Math.floor(count));
  while (slots.length < target) slots.push(create());
  slots.length = target;
}
function advanceCooldownSlots(cooldowns, delta) {
  for (let index = 0; index < cooldowns.length; index++) {
    cooldowns[index] = Math.max(0, cooldowns[index] - delta);
  }
}
function updateActiveSlots(slots, update) {
  for (let index = 0; index < slots.length; index++) {
    const item = slots[index];
    if (item) slots[index] = update(item);
  }
}
function removeClaimedTargets(remaining, selected, getId) {
  const selectedIds = new Set(selected.map(getId));
  return remaining.filter((item) => !selectedIds.has(getId(item)));
}
function selectBestUnclaimed(items, claimedIds, getId, score) {
  let best = null;
  for (const item of items) {
    if (claimedIds.has(getId(item))) continue;
    const value = score(item);
    if (value === null || !Number.isFinite(value)) continue;
    if (!best || value < best.score) best = { item, score: value };
  }
  return best?.item ?? null;
}

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
  /** Active sword level. Repeated pickups of the same sword increase this up to 5. */
  level;
  /** Seconds remaining until the sword can swing again. */
  cooldownLeft;
  /** Active slash animation, if any. */
  activeSlash;
  previousSlashSide;
  cooldownLefts;
  activeSlashes;
  previousSlashSides;
  nextSlotLaunchAllowedAt;
  constructor(swordId, level2 = 1) {
    this.swordId = swordId;
    this.level = Math.min(5, Math.max(1, Math.floor(level2)));
    this.cooldownLeft = 0;
    this.activeSlash = null;
    this.previousSlashSide = 1;
    this.cooldownLefts = [0];
    this.activeSlashes = [null];
    this.previousSlashSides = [1];
    this.nextSlotLaunchAllowedAt = 0;
  }
  syncSlots(count) {
    syncSlotArray(this.cooldownLefts, count, () => 0);
    syncSlotArray(this.activeSlashes, count, () => null);
    syncSlotArray(this.previousSlashSides, count, () => 1);
    this.cooldownLeft = Math.min(...this.cooldownLefts);
    this.activeSlash = this.activeSlashes.find(Boolean) ?? null;
    this.previousSlashSide = this.previousSlashSides[0] ?? 1;
  }
};
function selectTargets(threats, mode, maxTargets, rowReach) {
  if (threats.length === 0) return [];
  if (rowReach > 1 && threats[0].target.rowId !== void 0) {
    const centerRow = threats[0].target.rowId;
    const rows = [...new Set(threats.map((threat) => threat.target.rowId).filter((rowId) => rowId !== void 0))].sort((a, b) => Math.abs(a - centerRow) - Math.abs(b - centerRow)).slice(0, rowReach);
    return threats.filter((threat) => threat.target.rowId !== void 0 && rows.includes(threat.target.rowId)).slice(0, maxTargets);
  }
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
function swordRowReach(sword, level2) {
  if (!sword.rowReach) return 1;
  const clampedLevel = Math.min(5, Math.max(1, Math.floor(level2)));
  const progress = (clampedLevel - 1) / 4;
  return Math.round(sword.rowReach.level1 + (sword.rowReach.level5 - sword.rowReach.level1) * progress);
}
function swordDamage(sword, level2) {
  if (sword.damageAtLevel5 === void 0) return sword.damage;
  const clampedLevel = Math.min(5, Math.max(1, Math.floor(level2)));
  const progress = (clampedLevel - 1) / 4;
  return sword.damage + (sword.damageAtLevel5 - sword.damage) * progress;
}
function tickSword(state, sword, threats, playerX, playerY, now, delta, color, visualDurationMs = sword.slashDurationMs, swordCount = 1, slotLaunchStaggerMs = 180) {
  const result = {
    hitEnemyIds: [],
    hitTargets: [],
    damage: 0,
    swingTriggered: false
  };
  state.syncSlots(swordCount);
  advanceCooldownSlots(state.cooldownLefts, delta);
  updateActiveSlots(state.activeSlashes, (slash) => {
    slash.progress = (now - slash.startedAt) / slash.durationMs;
    return slash.progress >= 1 ? null : slash;
  });
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;
  if (threats.length === 0) return result;
  let remaining = [...threats];
  const damage = swordDamage(sword, state.level);
  for (let slot = 0; slot < state.cooldownLefts.length && remaining.length > 0; slot++) {
    if (state.cooldownLefts.length > 1 && now < state.nextSlotLaunchAllowedAt) break;
    if (state.cooldownLefts[slot] > 0) continue;
    const selected = selectTargets(remaining, sword.targetingMode, sword.maxTargets, swordRowReach(sword, state.level));
    if (selected.length === 0) continue;
    const side = state.previousSlashSides[slot] === -1 ? 1 : -1;
    state.previousSlashSides[slot] = side;
    state.previousSlashSide = side;
    state.cooldownLefts[slot] = sword.cooldownSeconds;
    if (state.cooldownLefts.length > 1) state.nextSlotLaunchAllowedAt = now + slotLaunchStaggerMs;
    result.swingTriggered = true;
    result.damage = damage;
    for (const { target } of selected) {
      result.hitEnemyIds.push(target.id);
      result.hitTargets.push({ id: target.id, x: target.x, y: target.y });
    }
    state.activeSlashes[slot] = {
      progress: 0,
      startedAt: now,
      durationMs: visualDurationMs,
      x: playerX,
      y: playerY,
      targetPoints: selected.map(({ target }) => ({ x: target.x, y: target.y })),
      side,
      reach: sword.range * 0.75,
      arcDegrees: sword.arcDegrees,
      color,
      thickness: sword.slashThickness
    };
    remaining = removeClaimedTargets(remaining, selected, ({ target }) => target.id);
  }
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;
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
function unprojectHelicopterScreenPoint(screenX, screenY, settings, viewport) {
  const fallback = { x: screenX, y: screenY };
  const centerX = viewport.width / 2;
  const focusX = viewport.focusX ?? centerX;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const relativeY = -settings.height;
  const screenRatio = (horizonY - screenY) / focalLength;
  const denominator = sin - screenRatio * cos;
  if (Math.abs(denominator) < 1e-4) return fallback;
  const worldZ = -relativeY * (cos + screenRatio * sin) / denominator;
  const cameraZ = Math.max(20, worldZ * cos - relativeY * sin);
  const scale = focalLength / cameraZ;
  const point = {
    x: focusX + (screenX - centerX) / scale,
    y: viewport.playerY + settings.followDistance - worldZ
  };
  return Number.isFinite(point.x) && Number.isFinite(point.y) && Math.abs(point.x) < 5e3 && Math.abs(point.y) < 5e3 ? point : fallback;
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
var isSafeScenePoint = (point) => Number.isFinite(point.x) && Number.isFinite(point.y) && Math.abs(point.x) < 5e3 && Math.abs(point.y) < 5e3;
function shieldVisuals(options) {
  const scene = emptyScene();
  const {
    definition,
    x,
    y,
    now,
    scale = 1,
    projectScreenOffset,
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
    const fallbackOrbiter = { x: x + Math.cos(angle) * radius, y: y + Math.sin(angle) * radius };
    const projectedOrbiter = projectScreenOffset?.(x, y, Math.cos(angle) * radius, Math.sin(angle) * radius);
    const orbiter = projectedOrbiter && isSafeScenePoint(projectedOrbiter) ? projectedOrbiter : fallbackOrbiter;
    scene.shapes.push({
      shape: orbiterShape,
      x: orbiter.x,
      y: orbiter.y,
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
var defaultSwordVisualTuning = {
  dockSideOffset: 13,
  dockForward: 3,
  strikeDuration: 0.31,
  followThroughDuration: 0.18,
  swingAngle: 2.8,
  arcLift: 14,
  arcRadius: 42,
  trailSegments: 14,
  trailWidth: 2.6,
  trailIntensity: 0.75
};
var completeSwordVisualTuning = (tuning) => ({
  ...defaultSwordVisualTuning,
  ...tuning
});
var swordVisualDurationMs = (tuning) => {
  const resolved = completeSwordVisualTuning(tuning);
  return Math.max(120, (resolved.strikeDuration + resolved.followThroughDuration) * 1e3);
};
function quadraticPoint(from, control, to, t) {
  const inv = 1 - t;
  return {
    x: inv * inv * from.x + 2 * inv * t * control.x + t * t * to.x,
    y: inv * inv * from.y + 2 * inv * t * control.y + t * t * to.y
  };
}
function cubicPoint(from, controlA, controlB, to, t) {
  const inv = 1 - t;
  return {
    x: inv ** 3 * from.x + 3 * inv * inv * t * controlA.x + 3 * inv * t * t * controlB.x + t ** 3 * to.x,
    y: inv ** 3 * from.y + 3 * inv * inv * t * controlA.y + 3 * inv * t * t * controlB.y + t ** 3 * to.y
  };
}
function swordPath(base, target, destinationSide, scale, tuning, crossLane, targetSpan2) {
  const startSide = destinationSide === 1 ? -1 : 1;
  const sweepWidth = crossLane ? targetSpan2 * 0.34 : 0;
  const start = { x: base.x + startSide * (tuning.dockSideOffset * scale + sweepWidth), y: base.y - tuning.dockForward * scale };
  const finish = { x: base.x + destinationSide * (tuning.dockSideOffset * scale + sweepWidth), y: base.y - tuning.dockForward * scale };
  const targetInfluence = Math.max(0, Math.min(1, tuning.arcRadius / 100));
  const apex = {
    x: (start.x + finish.x) / 2 * (1 - targetInfluence) + target.x * targetInfluence + destinationSide * (crossLane ? 12 * scale : 0),
    y: Math.min(start.y, finish.y, target.y) - tuning.arcLift * scale
  };
  const controlA = {
    x: start.x + startSide * tuning.swingAngle * (crossLane ? 18 : 13) * scale,
    y: start.y + 10 * scale
  };
  const controlB = {
    x: apex.x - destinationSide * tuning.swingAngle * (crossLane ? 30 : 22) * scale,
    y: apex.y
  };
  return { start, finish, controlA, controlB };
}
function targetSpan(targets) {
  if (targets.length < 2) return 0;
  const xs = targets.map((target) => target.x);
  return Math.max(...xs) - Math.min(...xs);
}
function sweepTargetFor(targets, side, fallback) {
  if (targets.length === 0) return fallback;
  if (targets.length === 1) return targets[0];
  const sorted = [...targets].sort((a, b) => side === 1 ? a.x - b.x : b.x - a.x);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const span = Math.abs(last.x - first.x);
  return {
    x: last.x + side * Math.min(34, Math.max(14, span * 0.1)),
    y: Math.min(...sorted.map((target) => target.y), (first.y + last.y) / 2)
  };
}
function slashPose(base, target, destinationSide, progress, scale, tuning, crossLane, span) {
  const totalDuration = Math.max(0.01, tuning.strikeDuration + tuning.followThroughDuration);
  const strike = tuning.strikeDuration / totalDuration;
  const path = swordPath(base, target, destinationSide, scale, tuning, crossLane, span);
  const tangentSample = (pathT) => {
    const a = cubicPoint(path.start, path.controlA, path.controlB, path.finish, Math.max(0, pathT - 0.015));
    const b = cubicPoint(path.start, path.controlA, path.controlB, path.finish, Math.min(1, pathT + 0.015));
    return Math.atan2(b.y - a.y, b.x - a.x) - Math.PI / 2;
  };
  if (progress < strike) {
    const t2 = progress / strike;
    const ease2 = t2 * t2 * (3 - 2 * t2);
    const point2 = cubicPoint(path.start, path.controlA, path.controlB, path.finish, ease2);
    return {
      x: point2.x,
      y: point2.y,
      rotation: tangentSample(ease2),
      trailProgress: ease2
    };
  }
  const t = (progress - strike) / Math.max(1e-3, 1 - strike);
  const ease = t * t * (3 - 2 * t);
  const overshoot = {
    x: path.finish.x + destinationSide * 7 * scale,
    y: path.finish.y - 4 * scale
  };
  const point = quadraticPoint(path.finish, overshoot, path.finish, ease);
  return {
    x: point.x,
    y: point.y,
    rotation: tangentSample(1) - destinationSide * (1 - ease) * 0.35,
    trailProgress: 1
  };
}
function swordTrail(slash, scale, origins, tuning) {
  if (slash.progress >= 1) return [];
  const life = 1 - slash.progress;
  const thickness = slash.thickness * scale;
  const primitives = [];
  const targets = slash.targetPoints.length > 0 ? slash.targetPoints : [{ x: slash.x, y: slash.y - slash.reach }];
  const span = targetSpan(targets);
  const crossLane = span > 80 * scale;
  const sweepTarget = sweepTargetFor(targets, slash.side, targets[0]);
  for (const [index, origin] of origins.entries()) {
    const target = targets.length > 1 ? sweepTarget : targets[index % targets.length];
    const segments = tuning.trailSegments;
    const pose = slashPose(origin, target, slash.side, slash.progress, scale, tuning, crossLane, span);
    const travel = pose.trailProgress;
    if (travel <= 0) continue;
    const visibleSegments = Math.max(3, Math.ceil(segments * travel));
    for (let i = 0; i < visibleSegments; i++) {
      const t0 = Math.max(0, travel - (visibleSegments - i) / segments);
      const t1 = Math.min(1, t0 + 0.16);
      const totalDuration = tuning.strikeDuration + tuning.followThroughDuration;
      const strike = tuning.strikeDuration / totalDuration;
      const a = slashPose(origin, target, slash.side, t0 * strike, scale, tuning, crossLane, span);
      const b = slashPose(origin, target, slash.side, t1 * strike, scale, tuning, crossLane, span);
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const age = i / visibleSegments;
      const fade = Math.max(0.18, Math.pow(1 - age, 0.85)) * Math.min(1, life + 0.35);
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(1.6, thickness * (tuning.trailWidth - age * tuning.trailWidth * 0.48)),
        height: Math.hypot(dx, dy) / 2,
        color: slash.color,
        secondaryColor: "#ffffff",
        glow: 1.8 * fade,
        intensity: tuning.trailIntensity * fade,
        shape: "line",
        rotation: Math.atan2(-dx, dy)
      });
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(2.2, thickness * (tuning.trailWidth * 1.35 - age * tuning.trailWidth * 0.55)),
        height: Math.hypot(dx, dy) * 0.72,
        color: slash.color,
        secondaryColor: "#ffffff",
        glow: 1.6 * fade,
        intensity: tuning.trailIntensity * fade,
        shape: "bolt",
        rotation: Math.atan2(-dx, dy)
      });
    }
  }
  return primitives;
}
function swordVisuals(options) {
  const scene = emptyScene();
  if (!options.visible) return scene;
  const { definition, slash, points, scale = 1 } = options;
  const tuning = completeSwordVisualTuning(options.tuning);
  const slashes = options.slashes ?? [slash];
  for (const [index, point] of points.entries()) {
    const slotSlash = slashes[index] ?? null;
    const dockSide = slotSlash?.side ?? options.dockSides?.[index] ?? options.dockSide;
    const targets = slotSlash?.targetPoints ?? [];
    const span = targetSpan(targets);
    const crossLane = span > 80 * scale;
    const sweepTarget = slotSlash ? sweepTargetFor(targets, dockSide, { x: point.x, y: point.y - 30 * scale }) : null;
    const target = targets.length > 1 ? sweepTarget : targets[index % Math.max(1, targets.length)];
    const rest = { x: point.x + dockSide * tuning.dockSideOffset * scale, y: point.y - tuning.dockForward * scale };
    const current = slotSlash && target ? slashPose(point, target, dockSide, slotSlash.progress, scale, tuning, crossLane, span) : {
      x: rest.x,
      y: rest.y,
      rotation: -dockSide * 0.95,
      trailProgress: 0
    };
    scene.shapes.push({
      shape: requiredShape("sword-needle-sabre"),
      x: current.x,
      y: current.y,
      z: 0.02 + index * 1e-3,
      size: Math.min(23, definition.range * 0.34) * scale,
      color: neonPalette[definition.color],
      rotationX: 75 * Math.PI / 180,
      rotationY: 13 * Math.PI / 180,
      rotationZ: 15 * Math.PI / 180 + current.rotation,
      lineThickness: 0.92,
      glow: slotSlash ? 1.65 : 1.08,
      energyIntensity: slotSlash ? 2.25 : 1.2,
      energyCoverage: slotSlash ? 0.72 : 0.42,
      energySpeed: slotSlash ? 2.1 : 1.2,
      energyBleed: slotSlash ? 0.8 : 0.5
    });
  }
  for (const [index, slotSlash] of slashes.entries()) {
    if (!slotSlash) continue;
    const point = points[index];
    if (point) scene.primitives.push(...swordTrail(slotSlash, scale, [point], tuning));
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
var swordPickupVisual = (options) => pickupShape("sword-needle-sabre", options);

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
var swordImpactSoundIds = {
  arcBlade: "SwordArcImpact",
  cleaver: "SwordCleaverImpact"
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
  gunCooldowns = [];
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
  swordVisualTuning = {};
  pendingSwordDamage = null;
  failureReason = "";
  playerActors = [];
  explodingPlayers = [];
  simulationSpeed = 1;
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
    this.gunCooldowns = [];
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
    this.pendingSwordDamage = null;
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
    this.pendingSwordDamage = null;
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
    this.gunCooldowns = [];
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
    this.gunCooldowns = [];
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
    const current = this.activeByFamily.sword;
    this.activeByFamily.sword = new SwordState(swordId, current?.swordId === swordId ? current.level + 1 : 1);
    this.playPickup("PickupSword");
    this.play("WeaponReady");
  }
  setSwordVisualTuning(tuning) {
    this.swordVisualTuning = { ...tuning };
  }
  setSimulationSpeed(speed) {
    this.simulationSpeed = Number.isFinite(speed) ? Math.max(0.05, Math.min(2, speed)) : 1;
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
    const delta = rawDelta * combatTuning.globalSpeedMultiplier * this.simulationSpeed;
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
      advanceCooldownSlots(this.gunCooldowns, delta);
      this.fire();
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
    const playerPoints = this.squad.points(this.playerY(), s);
    const helicopterViewport = helicopterViewportFor(this.canvas.width, this.canvas.height, this.playerY(), laneRunnerCameraFocusX(this.canvas.width, this.squad.x));
    for (const point of playerPoints) {
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
        projectScreenOffset: (x, y, offsetX, offsetY) => {
          const center = projectHelicopterPoint(x, y, this.cameraSettings, helicopterViewport);
          return unprojectHelicopterScreenPoint(center.x + offsetX * center.scale, center.y + offsetY * center.scale, this.cameraSettings, helicopterViewport);
        },
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
        slashes: liveSword.activeSlashes,
        dockSide: liveSword.previousSlashSide,
        dockSides: liveSword.previousSlashSides,
        points: playerPoints,
        tuning: this.swordVisualTuning,
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
    const playerSize = 14;
    for (const [index, point] of playerPoints.entries()) {
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
        sword: this.activeByFamily.sword ? { id: this.activeByFamily.sword.swordId, level: this.activeByFamily.sword.level } : null
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
    this.syncGunCooldowns(points.length);
    const claimedTargetIds = /* @__PURE__ */ new Set();
    const cycleSeconds = 1 / tuning.fireRatePerSecond;
    for (const [index, point] of points.entries()) {
      if (this.gunCooldowns[index] > 0) continue;
      const target = this.selectGunTarget(point.x, claimedTargetIds);
      if (!target) continue;
      claimedTargetIds.add(target.id);
      this.gunSimulation.fire(gun, tuning, this.playerLane, [{ ...point, aimX: target.x, aimY: target.y }], this.combatNow, this.scale());
      this.gunCooldowns[index] = cycleSeconds;
    }
    this.cooldown = this.gunCooldowns.length > 0 ? Math.min(...this.gunCooldowns) : 0;
  }
  syncGunCooldowns(count) {
    syncSlotArray(this.gunCooldowns, count, () => 0);
  }
  selectGunTarget(originX, claimedTargetIds) {
    const nativeReach = 42 * this.scale();
    const assistReach = 96 * this.scale();
    const liveLaneEnemies = this.enemies.filter((enemy) => !enemy.dying && enemy.lane === this.playerLane && enemy.y < this.playerY());
    const nativeTarget = selectBestUnclaimed(
      liveLaneEnemies,
      claimedTargetIds,
      (enemy) => enemy.id,
      (enemy) => this.scoreGunNativeTarget(enemy, originX, nativeReach)
    );
    const pressureTarget = selectBestUnclaimed(
      liveLaneEnemies,
      /* @__PURE__ */ new Set(),
      (enemy) => enemy.id,
      (enemy) => this.scoreGunPressureTarget(enemy, originX, assistReach, claimedTargetIds.has(enemy.id))
    );
    if (!nativeTarget) return pressureTarget;
    if (!pressureTarget) return nativeTarget;
    const nativeDistance = this.playerY() - nativeTarget.y;
    const pressureDistance = this.playerY() - pressureTarget.y;
    return pressureDistance + 80 * this.scale() < nativeDistance ? pressureTarget : nativeTarget;
  }
  scoreGunNativeTarget(enemy, originX, horizontalReach) {
    const dx = Math.abs(enemy.x - originX);
    if (dx > horizontalReach + this.enemyDefinition(enemy).radius * this.scale()) return null;
    const dy = this.playerY() - enemy.y;
    return dx * 1e3 + dy;
  }
  scoreGunPressureTarget(enemy, originX, horizontalReach, alreadyClaimed) {
    const dx = Math.abs(enemy.x - originX);
    if (dx > horizontalReach + this.enemyDefinition(enemy).radius * this.scale()) return null;
    const dy = this.playerY() - enemy.y;
    const columnPressure = this.enemies.filter(
      (other) => !other.dying && other.lane === enemy.lane && other.y < this.playerY() && Math.abs(other.x - enemy.x) <= 18 * this.scale() && Math.abs(other.y - enemy.y) <= 180 * this.scale()
    ).length;
    const claimedPenalty = alreadyClaimed ? 450 : 0;
    const pressureBonus = Math.min(4, columnPressure) * 70 * this.scale();
    return claimedPenalty + dx * 7 + dy - pressureBonus;
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
      const swordQueryRange = swordDef.rowReach ? Math.max(this.canvas.width, swordDef.range * this.scale()) : swordDef.range * this.scale();
      const swordThreats = queryNearbyThreats(this.enemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: swordQueryRange,
        includeAdjacentLanes: swordDef.targetingMode === "nearestInEitherLane",
        maxTargets: swordDef.rowReach ? void 0 : swordDef.maxTargets,
        purpose: "sword"
      }).filter((threat) => !swordDef.rowReach || Math.abs(threat.target.y - py) <= swordDef.range * this.scale());
      const swordResult = tickSword(swordState, swordDef, swordThreats, px, py, this.combatNow, delta, neonPalette[swordDef.color], swordVisualDurationMs(this.swordVisualTuning), this.squad.count);
      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        this.applyPendingSwordDamage({ force: true });
        this.play("SwordSwingWhoosh");
        this.pendingSwordDamage = {
          hits: this.scheduleSwordHits(swordResult.hitTargets, swordState.previousSlashSide),
          damage: swordResult.damage,
          color: neonPalette[swordDef.color],
          impactSoundId: swordImpactSoundIds[swordState.swordId]
        };
      }
      this.applyPendingSwordDamage();
    }
  }
  scheduleSwordHits(targets, side) {
    if (targets.length === 0) return [];
    const duration = swordVisualDurationMs(this.swordVisualTuning);
    const xs = targets.map((target) => target.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const span = Math.max(1, maxX - minX);
    const leftToRight = side === 1;
    return targets.map((target) => {
      const laneProgress = leftToRight ? (target.x - minX) / span : (maxX - target.x) / span;
      return {
        enemyId: target.id,
        dueAt: this.combatNow + duration * this.swordStrikeProgress(laneProgress)
      };
    });
  }
  swordStrikeProgress(laneProgress = 0.72) {
    const tuning = this.swordVisualTuning;
    const strike = tuning.strikeDuration ?? 0.31;
    const followThrough = tuning.followThroughDuration ?? 0.18;
    const total = Math.max(0.01, strike + followThrough);
    const clampedLaneProgress = Math.max(0.18, Math.min(0.88, laneProgress));
    return Math.min(0.95, strike * clampedLaneProgress / total);
  }
  applyPendingSwordDamage(options = {}) {
    const pending = this.pendingSwordDamage;
    if (!pending) return;
    const dueHits = options.force ? pending.hits : pending.hits.filter((hit) => this.combatNow >= hit.dueAt);
    if (dueHits.length === 0) return;
    const dueEnemyIds = dueHits.map((hit) => hit.enemyId);
    pending.hits = pending.hits.filter((hit) => !dueEnemyIds.includes(hit.enemyId));
    if (pending.hits.length === 0) this.pendingSwordDamage = null;
    let impacted = false;
    for (const enemy of [...this.enemies]) {
      if (enemy.dying || !dueEnemyIds.includes(enemy.id)) continue;
      impacted = true;
      const result = resolveEnemyDamage({
        enemy,
        effects: this.enemyExitEffects,
        damage: pending.damage,
        impactMagnitude: pending.damage,
        color: pending.color
      });
      if (result.killed) {
        this.kills++;
        this.play(result.definition.deathSound);
      }
    }
    if (impacted) this.play(pending.impactSoundId);
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
      if (this.pendingSwordDamage?.hits.some((hit) => hit.enemyId === enemy.id)) continue;
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
        this.gunCooldowns = [];
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
        const current = this.activeByFamily.sword;
        this.activeByFamily.sword = new SwordState(pickup.swordId, current?.swordId === pickup.swordId ? current.level + 1 : 1);
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
  playPickup(id) {
    this.play("Pickup");
    this.play(id);
  }
};

// projects/NeonSwarm/test-pages/auto-aim/smoke.ts
var status = document.querySelector("#test-status");
var results = document.querySelector("#results");
var run = () => {
  const laneCenter = 200;
  const remaining = [{ x: 170, y: 120, rowId: 1 }, { x: 230, y: 120, rowId: 1 }];
  const fartherCenteredRow = [{ x: 200, y: 80, rowId: 2 }];
  const allTargets = [...remaining, ...fartherCenteredRow];
  const firstOffset = selectAutoAimOffset(allTargets, laneCenter, [0]);
  const firstTarget = firstOffset < 0 ? remaining[0] : firstOffset > 0 ? remaining[1] : null;
  const afterFirstKill = firstTarget ? allTargets.filter((target) => target !== firstTarget) : allTargets;
  const secondOffset = selectAutoAimOffset(afterFirstKill, laneCenter, [0]);
  const noTargetsOffset = selectAutoAimOffset([], laneCenter, [0], secondOffset);
  return { firstOffset, firstTarget, secondOffset, noTargetsOffset };
};
var test = createTestPage("neon-swarm-auto-aim-smoke", { suite: "smoke", run }, status);
test.ready();
var outcome = run();
var assertions = [
  ["Symmetric outside survivors produce a decisive first shift", outcome.firstOffset !== 0],
  ["First shift selects one remaining enemy", outcome.firstTarget !== null],
  ["After first kill auto aim shifts to the other survivor", outcome.firstTarget !== null && outcome.secondOffset !== 0 && Math.sign(outcome.secondOffset) !== Math.sign(outcome.firstOffset)],
  ["Closer row wins over a farther centered row", outcome.firstOffset !== 0],
  ["No targets returns to lane center", outcome.noTargetsOffset === 0]
];
results.innerHTML = assertions.map(([name, passed], index) => `
  <li data-passed="${passed}" data-index="${index}">
    <strong>${name}</strong>
    <span>${passed ? "PASS" : "FAIL"}</span>
  </li>`).join("");
results.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => void startSimulation(Number(item.getAttribute("data-index"))));
});
for (const [name, passed] of assertions) test.assert(name, passed, `first=${outcome.firstOffset} second=${outcome.secondOffset}`);
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
  sim.equipGun("pulsePistol", 1);
  const lane = 0;
  const center = sim.laneX(lane);
  if (activeScenarioIdx === 0 || activeScenarioIdx === 1 || activeScenarioIdx === 2 || activeScenarioIdx === 3) {
    sim.spawnEnemy({ enemyId: "basicOrb", lane, x: center - 30, y: 320, health: 1, playSound: false });
    sim.spawnEnemy({ enemyId: "basicOrb", lane, x: center + 30, y: 320, health: 1, playSound: false });
  }
  if (activeScenarioIdx === 3) sim.spawnEnemy({ enemyId: "basicOrb", lane, x: center, y: 200, health: 1, playSound: false });
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
    <dt>Squad Position</dt><dd>x: ${snapshot.squad.x.toFixed(0)}, aim: ${snapshot.squad.aimOffset.toFixed(0)}</dd>
    <dt>Enemies</dt><dd>${snapshot.enemies.length}</dd>
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Byb2plY3RpbGUudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rlc3QtaGFybmVzcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdmljdG9yeS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2F1dG9BaW0udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tCdWlsZGVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s2LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrOC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2szLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE1LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEwLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazExLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9ndW5TaW11bGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L2luZGVwZW5kZW50V2VhcG9uU2xvdHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9jb21iYXQvc2hpZWxkRXZhbHVhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L3N3b3JkRXZhbHVhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFbnRyYW5jZVZpc3VhbHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUV4aXRWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvdmlld3BvcnQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9lbmVteUNhdGFsb2cudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9mYW1pbHlWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvcmVuZGVyT3JpZW50YXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zY2VuZUVudmlyb25tZW50LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2hhcGVWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc3F1YWQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9zaW11bGF0aW9uL05lb25Td2FybVNpbXVsYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3Rlc3QtcGFnZXMvYXV0by1haW0vc21va2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWFyYy1rYXRhbmFcIiwgXCJTd29yZCBBcmMgS2F0YW5hXCIsIFtbLS4xNiwtMV0sIFsuMTYsLTFdLCBbLjIyLC4yOF0sIFsuNDgsLjYyXSwgWy4xOCwuNTJdLCBbLjEsMV0sIFstLjEsMV0sIFstLjE4LC41Ml0sIFstLjQ4LC42Ml0sIFstLjIyLC4yOF1dLCBcInBpdGNoXCIsIFtbWy0uMDU1LC0uNzJdLCBbLjA1NSwtLjcyXSwgWy4wNTUsLjE4XSwgWy0uMDU1LC4xOF1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1jbGVhdmVyLXdpZGVcIiwgXCJTd29yZCBDbGVhdmVyIFdpZGVcIiwgW1stLjI4LC0xXSwgWy4yOCwtMV0sIFsuNDQsLS43Nl0sIFsuMzQsLjM0XSwgWy43MiwuNThdLCBbLjIyLC41NV0sIFsuMTYsMV0sIFstLjE2LDFdLCBbLS4yMiwuNTVdLCBbLS43MiwuNThdLCBbLS4zNCwuMzRdLCBbLS40NCwtLjc2XV0sIFwicm9sbFwiLCBbW1stLjEsLS42OF0sIFsuMSwtLjY4XSwgWy4wOCwuMThdLCBbLS4wOCwuMThdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtbmVlZGxlLXNhYnJlXCIsIFwiU3dvcmQgTmVlZGxlIFNhYnJlXCIsIFtbMCwtMV0sIFsuMDgsLS44Ml0sIFsuMTEsLjVdLCBbLjMyLC43Ml0sIFsuMDgsLjY0XSwgWy4wNSwxXSwgWy0uMDUsMV0sIFstLjA4LC42NF0sIFstLjMyLC43Ml0sIFstLjExLC41XSwgWy0uMDgsLS44Ml1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtZ3VhcmRlZC1ibGFkZVwiLCBcIlN3b3JkIEd1YXJkZWQgQmxhZGVcIiwgW1stLjEyLC0xXSwgWy4xMiwtMV0sIFsuMTYsLjM2XSwgWy42MiwuMzZdLCBbLjYyLC41NF0sIFsuMTQsLjU2XSwgWy4xLDFdLCBbLS4xLDFdLCBbLS4xNCwuNTZdLCBbLS42MiwuNTRdLCBbLS42MiwuMzZdLCBbLS4xNiwuMzZdXSwgXCJ5YXdcIiwgW1tbLS4wNDUsLS43Ml0sIFsuMDQ1LC0uNzJdLCBbLjA0NSwuMjJdLCBbLS4wNDUsLjIyXV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLXByaXNtLWdyZWF0YmxhZGVcIiwgXCJTd29yZCBQcmlzbSBHcmVhdGJsYWRlXCIsIFtbMCwtMV0sIFsuMzQsLS43NF0sIFsuMywuMjhdLCBbLjU2LC41Ml0sIFsuMiwuNDhdLCBbLjEyLDFdLCBbLS4xMiwxXSwgWy0uMiwuNDhdLCBbLS41NiwuNTJdLCBbLS4zLC4yOF0sIFstLjM0LC0uNzRdXSwgXCJyb2xsXCIsIFtbWy0uMDgsLS40OF0sIFsuMDgsLS40OF0sIFsuMDgsLjE2XSwgWy0uMDgsLjE2XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uLCBOZW9uUG9pbnQgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUxhYmVsUG9zaXRpb24gPSBcImFib3ZlXCIgfCBcImJlbG93XCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUxhYmVsIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbj86IE5lb25TaGFwZUxhYmVsUG9zaXRpb247XG4gIG9mZnNldD86IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW5zdGFuY2Uge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBzY2FsZVg/OiBudW1iZXI7XG4gIHNjYWxlWT86IG51bWJlcjtcbiAgcm90YXRpb25YPzogbnVtYmVyO1xuICByb3RhdGlvblk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWj86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgc2hpZWxkZWQ/OiBib29sZWFuO1xuICBsaW5lVGhpY2tuZXNzPzogbnVtYmVyO1xuICBlbmVyZ3lJbnRlbnNpdHk/OiBudW1iZXI7XG4gIGVuZXJneUNvdmVyYWdlPzogbnVtYmVyO1xuICBlbmVyZ3lTcGVlZD86IG51bWJlcjtcbiAgZW5lcmd5QmxlZWQ/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGVudHJhbmNlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xuICBleHBsb2RlUHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG59XG5cbnR5cGUgVjMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG50eXBlIFZlcnRleCA9IHtcbiAgcDogVjM7IG46IFYzOyBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdOyBnbG93OiBudW1iZXI7XG4gIGVmZmVjdDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gMTQ7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgU2NlbmUgeyBhc3BlY3Q6IGYzMiwgY2FtZXJhOiBmMzIsIHRpbWU6IGYzMiwgcGFkZGluZzogZjMyIH1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuc3RydWN0IElucHV0IHtcbiAgQGxvY2F0aW9uKDApIHBvc2l0aW9uOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigzKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBlZmZlY3Q6IHZlYzRmLFxufVxuc3RydWN0IE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgZWZmZWN0OiB2ZWM0Zixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihpbnB1dDogSW5wdXQpIC0+IE91dHB1dCB7XG4gIGxldCBkZXB0aCA9IHNjZW5lLmNhbWVyYSAtIGlucHV0LnBvc2l0aW9uLno7XG4gIHZhciBvdXRwdXQ6IE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYoaW5wdXQucG9zaXRpb24ueCAqIDQgLyBzY2VuZS5hc3BlY3QsIGlucHV0LnBvc2l0aW9uLnkgKiA0LCBkZXB0aCAqIC4wNDUsIGRlcHRoKTtcbiAgb3V0cHV0Lm5vcm1hbCA9IGlucHV0Lm5vcm1hbDtcbiAgb3V0cHV0LmNvbG9yID0gaW5wdXQuY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaW5wdXQuZ2xvdztcbiAgb3V0cHV0LmVmZmVjdCA9IGlucHV0LmVmZmVjdDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZShpbnB1dC5ub3JtYWwpO1xuICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLS40NSwgLS43LCAxKSk7XG4gIGxldCBkaWZmdXNlID0gLjE4ICsgbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCkgKiAuODI7XG4gIGxldCByaW0gPSBwb3coMSAtIGFicyhub3JtYWwueiksIDIuMik7XG4gIGxldCBzaWRlID0gMSAtIGFicyhub3JtYWwueik7XG4gIGxldCByYXJlU3VyZ2UgPSBwb3cobWF4KC4wLCBzaW4oc2NlbmUudGltZSAqIGlucHV0LmVmZmVjdC56ICogLjgyICsgaW5wdXQuY29sb3IuciAqIDcuMCkpLCAyMi4wKVxuICAgICogaW5wdXQuZWZmZWN0LnggKiBpbnB1dC5lZmZlY3QueSAqIGlucHV0LmVmZmVjdC53O1xuICBsZXQgZW5lcmd5ID0gaW5wdXQuY29sb3IgKiAoZGlmZnVzZSAqIC4xMiArIHJpbSAqIGlucHV0Lmdsb3cgKiAuMzYgKyBzaWRlICogLjA4ICsgcmFyZVN1cmdlICogLjcpO1xuICByZXR1cm4gdmVjNGYoZW5lcmd5ICsgdmVjM2YocmFyZVN1cmdlICogLjE4KSwgLjEyICsgc2lkZSAqIC4xMiArIHJhcmVTdXJnZSAqIC4yOCk7XG59XG5AZnJhZ21lbnQgZm4gbGluZUZyYWdtZW50KGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBhbG9uZyA9IGlucHV0Lm5vcm1hbC54O1xuICBsZXQgYWNyb3NzID0gYWJzKGlucHV0Lm5vcm1hbC55KTtcbiAgbGV0IHBoYXNlID0gaW5wdXQubm9ybWFsLno7XG4gIGxldCBpbnRlbnNpdHkgPSBpbnB1dC5lZmZlY3QueDtcbiAgbGV0IGNvdmVyYWdlID0gaW5wdXQuZWZmZWN0Lnk7XG4gIGxldCBzcGVlZCA9IGlucHV0LmVmZmVjdC56O1xuICBsZXQgYmxlZWQgPSBpbnB1dC5lZmZlY3QudztcbiAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDMxLjAgLSBzY2VuZS50aW1lICogc3BlZWQgKiA1LjQgKyBwaGFzZSkpLCAxMC4wKTtcbiAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoLjAsIHNpbihhbG9uZyAqIDEzLjAgKyBzY2VuZS50aW1lICogc3BlZWQgKiAzLjEgKyBwaGFzZSAqIDIuNykpLCAxOC4wKTtcbiAgbGV0IG5vaXNlID0gc2luKGFsb25nICogNzEuMCArIHBoYXNlICogOC4zKSAqIC41ICsgLjU7XG4gIGxldCB0aHJlc2hvbGQgPSAxLjAgLSBjb3ZlcmFnZTtcbiAgbGV0IGVsZWN0cmljaXR5ID0gc21vb3Roc3RlcCh0aHJlc2hvbGQsIHRocmVzaG9sZCArIC4xOCwgcHVsc2VBICogLjY1ICsgcHVsc2VCICogLjU1ICsgbm9pc2UgKiAuMTgpO1xuICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoLjA2LCAuMjgsIGFjcm9zcyk7XG4gIGxldCBoYWxvID0gMS4wIC0gc21vb3Roc3RlcCguMTIsIDEuMCwgYWNyb3NzKTtcbiAgbGV0IHN1cmdlID0gZWxlY3RyaWNpdHkgKiBpbnRlbnNpdHk7XG4gIGxldCBwdWxzZSA9IC43OCArIHNpbihzY2VuZS50aW1lICogc3BlZWQgKiAyLjEgKyBwaGFzZSkgKiAuMTMgKyBlbGVjdHJpY2l0eSAqIC4yNDtcbiAgbGV0IGNsb3VkID0gaGFsbyAqICguMTMgKyBzdXJnZSAqIC41Mik7XG4gIGxldCBob3QgPSBpbnB1dC5jb2xvciAqIChwdWxzZSArIGNsb3VkICogMi4xKSAqIGlucHV0Lmdsb3cgKyB2ZWMzZihjb3JlICogc3VyZ2UgKiAxLjM1KTtcbiAgbGV0IGFscGhhID0gKGNvcmUgKiAoLjcyICsgcHVsc2UgKiAuMikgKyBjbG91ZCArICgxLjAgLSBhY3Jvc3MpICogYmxlZWQgKiBlbGVjdHJpY2l0eSAqIC4yNCkgKiBpbnB1dC5nbG93O1xuICByZXR1cm4gdmVjNGYoaG90LCBjbGFtcChhbHBoYSwgMC4wLCAxLjApKTtcbn1gO1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBzdWIgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3QgY3Jvc3MgPSAoYTogVjMsIGI6IFYzKTogVjMgPT4gW2FbMV0qYlsyXS1hWzJdKmJbMV0sIGFbMl0qYlswXS1hWzBdKmJbMl0sIGFbMF0qYlsxXS1hWzFdKmJbMF1dO1xuY29uc3Qgbm9ybWFsaXplID0gKHY6IFYzKTogVjMgPT4ge1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KC4uLnYpIHx8IDE7XG4gIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XG59O1xuY29uc3Qgcm90YXRlID0gKFt4LCB5LCB6XTogVjMsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIHJ6OiBudW1iZXIpOiBWMyA9PiB7XG4gIGxldCBhID0geSAqIE1hdGguY29zKHJ4KSAtIHogKiBNYXRoLnNpbihyeCksIGIgPSB5ICogTWF0aC5zaW4ocngpICsgeiAqIE1hdGguY29zKHJ4KTsgeSA9IGE7IHogPSBiO1xuICBhID0geCAqIE1hdGguY29zKHJ5KSArIHogKiBNYXRoLnNpbihyeSk7IGIgPSAteCAqIE1hdGguc2luKHJ5KSArIHogKiBNYXRoLmNvcyhyeSk7IHggPSBhOyB6ID0gYjtcbiAgcmV0dXJuIFt4ICogTWF0aC5jb3MocnopIC0geSAqIE1hdGguc2luKHJ6KSwgeCAqIE1hdGguc2luKHJ6KSArIHkgKiBNYXRoLmNvcyhyeiksIHpdO1xufTtcblxuZnVuY3Rpb24gbWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBlbnRyYW5jZU9mZnNldCA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgaWYgKGVudHJhbmNlUHJvZ3Jlc3MgPj0gMSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICBjb25zdCBzZWVkID0gTWF0aC5zaW4oaW5kZXggKiA5MS4xNyArIHBvaW50WzBdICogMzcuMiArIHBvaW50WzFdICogNTMuNyArIHogKiAyOS4xKSAqIDQzNzU4LjU0NTM7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZCAtIE1hdGguZmxvb3Ioc2VlZCk7XG4gICAgY29uc3QgYW5nbGUgPSByYW5kb20gKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCByYWRpdXMgPSAoaW5zdGFuY2UuZW50cmFuY2VNYWduaXR1ZGUgPz8gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogKDEgLSBlbnRyYW5jZUVhc2UpICogKC4zNSArIHJhbmRvbSAqIC43NSk7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cywgKHJhbmRvbSAtIC41KSAqIHJhZGl1cyAqIC41NV07XG4gIH07XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleCA9IDApOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZVgsIC1wb2ludFsxXSAqIHNjYWxlWSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgY29uc3QgZSA9IGVudHJhbmNlT2Zmc2V0KHBvaW50LCB6LCBpbmRleCk7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCkgKyBlWzBdLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCkgKyBlWzFdLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCkgKyBlWzJdXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBjb25zdCBhZGQgPSAoYTogVjMsIGI6IFYzLCBjOiBWMywgbm9ybWFsPzogVjMpID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsID8/IG5vcm1hbGl6ZShjcm9zcyhzdWIoYiwgYSksIHN1YihjLCBhKSkpO1xuICAgIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgICBdO1xuICAgIFthLGIsY10uZm9yRWFjaChwID0+IG91dHB1dC5wdXNoKHsgcCwgbiwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UsIGVmZmVjdCB9KSk7XG4gIH07XG4gIGNvbnN0IGZyb250ID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCBkZXB0aCAvIDIsIGluZGV4KSk7XG4gIGNvbnN0IGJhY2sgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIC1kZXB0aCAvIDIsIGluZGV4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCkpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGZyb250Lmxlbmd0aCAtIDE7IGkrKykgYWRkKGZyb250WzBdLCBmcm9udFtpXSwgZnJvbnRbaSArIDFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBiYWNrLmxlbmd0aCAtIDE7IGkrKykgYWRkKGJhY2tbMF0sIGJhY2tbaSArIDFdLCBiYWNrW2ldKTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGg7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW2ldLCBiYWNrW25leHRdKTtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbbmV4dF0sIGZyb250W25leHRdKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGVkZ2VNZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3Qgc2NhbGVYID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVYID8/IDEpO1xuICBjb25zdCBzY2FsZVkgPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVkgPz8gMSk7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IG1vdmUgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApLCBwWzFdICsgKGluc3RhbmNlLnkgPz8gMCksIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKV07XG4gIH07XG4gIGNvbnN0IGV4cGxvZGUgPSAoYTogVjMsIGI6IFYzLCBpbmRleDogbnVtYmVyKTogW1YzLCBWM10gPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDAsIDEgLSBlbnRyYW5jZUVhc2UpO1xuICAgIGlmICghcHJvZ3Jlc3MpIHJldHVybiBbYSwgYl07XG4gICAgY29uc3QgbXggPSAoYVswXSArIGJbMF0pIC8gMiAtIChpbnN0YW5jZS54ID8/IDApLCBteSA9IChhWzFdICsgYlsxXSkgLyAyIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChteCwgbXkpIHx8IDE7XG4gICAgY29uc3QgbWFnbml0dWRlID0gaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgY29uc3Qgc3BlZWQgPSBtYWduaXR1ZGUgKiAoLjQ1ICsgKE1hdGguc2luKGluZGV4ICogOTEuMTcpICogLjUgKyAuNSkgKiAuNTUpO1xuICAgIGNvbnN0IGR4ID0gbXggLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkLCBkeSA9IG15IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCArIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAuMTg7XG4gICAgY29uc3QgYW5nbGUgPSBwcm9ncmVzcyAqIChpbmRleCAlIDIgPyAxIDogLTEpICogMi40O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IChwOiBWMyk6IFYzID0+IHtcbiAgICAgIGNvbnN0IHggPSBwWzBdIC0gKGluc3RhbmNlLnggPz8gMCksIHkgPSBwWzFdIC0gKGluc3RhbmNlLnkgPz8gMCk7XG4gICAgICByZXR1cm4gW3ggKiBNYXRoLmNvcyhhbmdsZSkgLSB5ICogTWF0aC5zaW4oYW5nbGUpICsgKGluc3RhbmNlLnggPz8gMCkgKyBkeCwgeCAqIE1hdGguc2luKGFuZ2xlKSArIHkgKiBNYXRoLmNvcyhhbmdsZSkgKyAoaW5zdGFuY2UueSA/PyAwKSArIGR5LCBwWzJdXTtcbiAgICB9O1xuICAgIHJldHVybiBbdHJhbnNmb3JtKGEpLCB0cmFuc2Zvcm0oYildO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGxldCBkaXN0YW5jZSA9IDA7XG4gIGNvbnN0IGVmZmVjdDogVmVydGV4W1wiZWZmZWN0XCJdID0gW1xuICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICBdO1xuICBjb25zdCBhZGRMaW5lID0gKGE6IFYzLCBiOiBWMywgcGhhc2U6IG51bWJlciwgd2lkdGhTY2FsZSA9IDEsIG9wYWNpdHkgPSAxKSA9PiB7XG4gICAgW2EsIGJdID0gZXhwbG9kZShhLCBiLCBNYXRoLmZsb29yKGRpc3RhbmNlICogMTAwKSArIE1hdGguZmxvb3IocGhhc2UgKiAxMCkpO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IC4wMDE7XG4gICAgY29uc3Qgd2lkdGggPSAoaW5zdGFuY2UubGluZVRoaWNrbmVzcyA/PyAxKSAqIC4wMTggKiB3aWR0aFNjYWxlO1xuICAgIGNvbnN0IG94ID0gLWR5IC8gbGVuZ3RoICogd2lkdGgsIG95ID0gZHggLyBsZW5ndGggKiB3aWR0aDtcbiAgICBjb25zdCBhMDogVjMgPSBbYVswXSAtIG94LCBhWzFdIC0gb3ksIGFbMl1dLCBhMTogVjMgPSBbYVswXSArIG94LCBhWzFdICsgb3ksIGFbMl1dO1xuICAgIGNvbnN0IGIwOiBWMyA9IFtiWzBdIC0gb3gsIGJbMV0gLSBveSwgYlsyXV0sIGIxOiBWMyA9IFtiWzBdICsgb3gsIGJbMV0gKyBveSwgYlsyXV07XG4gICAgY29uc3Qgc3RhcnQgPSBkaXN0YW5jZSAqIDIuNCwgZW5kID0gKGRpc3RhbmNlICsgbGVuZ3RoKSAqIDIuNDtcbiAgICBjb25zdCBwdXNoID0gKHA6IFYzLCBhbG9uZzogbnVtYmVyLCBhY3Jvc3M6IG51bWJlcikgPT5cbiAgICAgIG91dHB1dC5wdXNoKHsgcCwgbjogW2Fsb25nLCBhY3Jvc3MsIHBoYXNlXSwgY29sb3IsIGdsb3c6IChpbnN0YW5jZS5nbG93ID8/IDEpICogb3BhY2l0eSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlICogKDEgKyBNYXRoLnNpbigoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogTWF0aC5QSSkgKiAoaW5zdGFuY2UuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTUpICogMi4yKSAqICgxIC0gKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIC43KSwgZWZmZWN0IH0pO1xuICAgIHB1c2goYTAsc3RhcnQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIwLGVuZCwtMSk7XG4gICAgcHVzaChiMCxlbmQsLTEpOyBwdXNoKGExLHN0YXJ0LDEpOyBwdXNoKGIxLGVuZCwxKTtcbiAgICBkaXN0YW5jZSArPSBsZW5ndGg7XG4gIH07XG4gIGNvbnN0IGFkZExvb3AgPSAocG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSwgejogbnVtYmVyLCBwaGFzZTogbnVtYmVyKSA9PlxuICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgeiksIG1vdmUocG9pbnRzWyhpbmRleCArIDEpICUgcG9pbnRzLmxlbmd0aF0sIHopLCBwaGFzZSArIGluZGV4ICogLjczKSk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCBkZXB0aCAvIDIsIC4zKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIC1kZXB0aCAvIDIsIDIuMSk7XG4gIHNoYXBlLmhvbGVzPy5mb3JFYWNoKChob2xlLCBpbmRleCkgPT4ge1xuICAgIGFkZExvb3AoaG9sZSwgZGVwdGggLyAyICsgLjAwMiwgMy43ICsgaW5kZXgpO1xuICAgIGFkZExvb3AoaG9sZSwgLWRlcHRoIC8gMiAtIC4wMDIsIDUuMiArIGluZGV4KTtcbiAgfSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IGFkZExpbmUobW92ZShwb2ludCwgLWRlcHRoIC8gMiksIG1vdmUocG9pbnQsIGRlcHRoIC8gMiksIDYuMSArIGluZGV4KSk7XG4gIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAgKiAoaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSk7XG4gIGNvbnN0IGJyYW5jaFN0cmVuZ3RoID0gKGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxKSAqIChpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIpO1xuICBjb25zdCByYW5kb20gPSAoc2VlZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnNpbihzZWVkICogMTIuOTg5OCArIHNoYXBlLnBvaW50cy5sZW5ndGggKiA3OC4yMzMpICogNDM3NTguNTQ1MztcbiAgICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgcm90YXRlZCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaWFuczogbnVtYmVyKTogTmVvblBvaW50ID0+IFtcbiAgICB4ICogTWF0aC5jb3MocmFkaWFucykgLSB5ICogTWF0aC5zaW4ocmFkaWFucyksXG4gICAgeCAqIE1hdGguc2luKHJhZGlhbnMpICsgeSAqIE1hdGguY29zKHJhZGlhbnMpLFxuICBdO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY3ljbGUgPSBNYXRoLmZsb29yKHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEpO1xuICAgIGNvbnN0IGFnZSA9IHRpbWUgKiAyLjM1ICsgaW5kZXggKiAuNjEgLSBjeWNsZTtcbiAgICBjb25zdCBzZWVkID0gY3ljbGUgKiAzNy4xICsgaW5kZXggKiAxMS43O1xuICAgIGNvbnN0IGFjdGl2ZUR1cmF0aW9uID0gLjE4ICsgcmFuZG9tKHNlZWQgKyAxKSAqIC4yNTtcbiAgICBjb25zdCBoYXplRHVyYXRpb24gPSBNYXRoLm1pbigxLCBhY3RpdmVEdXJhdGlvbiArIC4yOCArIHJhbmRvbShzZWVkICsgMikgKiAuMjIpO1xuICAgIGNvbnN0IGJyYW5jaEFjdGl2ZSA9IGFnZSA8IGFjdGl2ZUR1cmF0aW9uO1xuICAgIGNvbnN0IGhhemVBY3RpdmUgPSBhZ2UgPCBoYXplRHVyYXRpb247XG4gICAgaWYgKCghYnJhbmNoQWN0aXZlICYmICFoYXplQWN0aXZlKSB8fCByYW5kb20oc2VlZCArIDMpID4gTWF0aC5taW4oLjc4LCBicmFuY2hTdHJlbmd0aCAqIC41KSkgcmV0dXJuO1xuICAgIGNvbnN0IG5leHQgPSBzaGFwZS5wb2ludHNbKGluZGV4ICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoXTtcbiAgICBjb25zdCB0ID0gLjE2ICsgcmFuZG9tKHNlZWQgKyA0KSAqIC42ODtcbiAgICBjb25zdCBiYXNlOiBOZW9uUG9pbnQgPSBbcG9pbnRbMF0gKyAobmV4dFswXSAtIHBvaW50WzBdKSAqIHQsIHBvaW50WzFdICsgKG5leHRbMV0gLSBwb2ludFsxXSkgKiB0XTtcbiAgICBjb25zdCB0eCA9IG5leHRbMF0gLSBwb2ludFswXSwgdHkgPSBuZXh0WzFdIC0gcG9pbnRbMV0sIHRsID0gTWF0aC5oeXBvdCh0eCwgdHkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcmFuZG9tKHNlZWQgKyA1KSA+IC41ID8gMSA6IC0xO1xuICAgIGNvbnN0IHBlcnBlbmRpY3VsYXI6IE5lb25Qb2ludCA9IFstdHkgLyB0bCAqIGRpcmVjdGlvbiwgdHggLyB0bCAqIGRpcmVjdGlvbl07XG4gICAgY29uc3QgZmlyc3RKaXR0ZXIgPSAoMTAgKyByYW5kb20oc2VlZCArIDYpICogMTApICogTWF0aC5QSSAvIDE4MCAqIChyYW5kb20oc2VlZCArIDcpID4gLjUgPyAxIDogLTEpO1xuICAgIGxldCBoZWFkaW5nID0gcm90YXRlZChwZXJwZW5kaWN1bGFyWzBdLCBwZXJwZW5kaWN1bGFyWzFdLCBmaXJzdEppdHRlcik7XG4gICAgY29uc3Qgc2VnbWVudENvdW50ID0gMSArIE1hdGguZmxvb3IocmFuZG9tKHNlZWQgKyA4KSAqIDMpO1xuICAgIGNvbnN0IHBvaW50czogTmVvblBvaW50W10gPSBbYmFzZV07XG4gICAgZm9yIChsZXQgc2VnbWVudCA9IDA7IHNlZ21lbnQgPCBzZWdtZW50Q291bnQ7IHNlZ21lbnQrKykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gLjA1NSArIHJhbmRvbShzZWVkICsgMTAgKyBzZWdtZW50KSAqIC4wOTU7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBwb2ludHMucHVzaChbcHJldmlvdXNbMF0gKyBoZWFkaW5nWzBdICogbGVuZ3RoLCBwcmV2aW91c1sxXSArIGhlYWRpbmdbMV0gKiBsZW5ndGhdKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICgyMCArIHJhbmRvbShzZWVkICsgMjAgKyBzZWdtZW50KSAqIDQwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICBoZWFkaW5nID0gcm90YXRlZChoZWFkaW5nWzBdLCBoZWFkaW5nWzFdLCBvZmZzZXQgKiAocmFuZG9tKHNlZWQgKyAzMCArIHNlZ21lbnQpID4gLjUgPyAxIDogLTEpKTtcbiAgICB9XG4gICAgaWYgKGhhemVBY3RpdmUpIHtcbiAgICAgIGNvbnN0IGZhZGUgPSAxIC0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pIC8gTWF0aC5tYXgoLjAwMSwgaGF6ZUR1cmF0aW9uIC0gYWN0aXZlRHVyYXRpb24pO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgKiAuMDM1O1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbmQgPSBwb2ludHNbc2VnbWVudCArIDFdO1xuICAgICAgICBjb25zdCBoYXplU3RhcnQ6IE5lb25Qb2ludCA9IFtzdGFydFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgc3RhcnRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBjb25zdCBoYXplRW5kOiBOZW9uUG9pbnQgPSBbZW5kWzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBlbmRbMV0gKyBwZXJwZW5kaWN1bGFyWzFdICogZHJpZnRdO1xuICAgICAgICBhZGRMaW5lKG1vdmUoaGF6ZVN0YXJ0LCBkZXB0aCAvIDIgKyAuMDAyKSwgbW92ZShoYXplRW5kLCBkZXB0aCAvIDIgKyAuMDAyKSwgMzEgKyBzZWVkICsgc2VnbWVudCwgMS40NSArIGZhZGUgKiAuNTUsIGZhZGUgKiAuMzQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChicmFuY2hBY3RpdmUpIHtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgYWRkTGluZShtb3ZlKHN0YXJ0LCBkZXB0aCAvIDIgKyAuMDA2KSwgbW92ZShwb2ludHNbc2VnbWVudCArIDFdLCBkZXB0aCAvIDIgKyAuMDA2KSwgMTEgKyBzZWVkICsgc2VnbWVudCwgLjQyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2xpbmVQaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjZGVwdGg6IEdQVVRleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgI2xhYmVsTGF5ZXI6IEhUTUxEaXZFbGVtZW50O1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IHBhcmVudCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwYXJlbnQgJiYgZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdGhpcy4jbGFiZWxMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy4jbGFiZWxMYXllci5jbGFzc05hbWUgPSBcIm5lb24tc2hhcGUtbGFiZWwtbGF5ZXJcIjtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHsgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBpbnNldDpcIjBcIiwgcG9pbnRlckV2ZW50czpcIm5vbmVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiB9KTtcbiAgICBwYXJlbnQ/LmFwcGVuZCh0aGlzLiNsYWJlbExheWVyKTtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBleHRydWRlZCBzaGFwZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiwgY3VsbE1vZGU6IFwiYmFja1wiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiBmYWxzZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2xpbmVQaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7XG4gICAgICAgIG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIsXG4gICAgICAgIGJ1ZmZlcnM6IFt7IGFycmF5U3RyaWRlOiBmbG9hdHNQZXJWZXJ0ZXggKiA0LCBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAxLCBvZmZzZXQ6IDEyLCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDI0LCBmb3JtYXQ6IFwiZmxvYXQzMngzXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAzLCBvZmZzZXQ6IDM2LCBmb3JtYXQ6IFwiZmxvYXQzMlwiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiA0MCwgZm9ybWF0OiBcImZsb2F0MzJ4NFwiIH0sXG4gICAgICAgIF0gfV0sXG4gICAgICB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImxpbmVGcmFnbWVudFwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgICAgfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgICBkZXB0aFN0ZW5jaWw6IHsgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBzaGFwZSBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10sIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmVydGljZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChtZXNoKTtcbiAgICBjb25zdCBlZGdlcyA9IGluc3RhbmNlcy5mbGF0TWFwKGVkZ2VNZXNoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIGNvbnN0IGVkZ2VEYXRhID0gbmV3IEZsb2F0MzJBcnJheShlZGdlcy5sZW5ndGggKiBmbG9hdHNQZXJWZXJ0ZXgpO1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBlZGdlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGVkZ2VEYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGRhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBjb25zdCBlZGdlQnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZWRnZURhdGEuYnl0ZUxlbmd0aCksIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHZlcnRleEJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgaWYgKGVkZ2VEYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIoZWRnZUJ1ZmZlciwgMCwgZWRnZURhdGEpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgNSwgcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCAwXSkpO1xuICAgIGNvbnN0IGJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgbGluZUJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jbGluZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbeyB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIiwgc3RvcmVPcDogXCJzdG9yZVwiIH1dLFxuICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDogeyB2aWV3OiB0aGlzLiNkZXB0aCEuY3JlYXRlVmlldygpLCBkZXB0aENsZWFyVmFsdWU6IDEsIGRlcHRoTG9hZE9wOiBcImNsZWFyXCIsIGRlcHRoU3RvcmVPcDogXCJzdG9yZVwiIH0sXG4gICAgfSk7XG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgdmVydGV4QnVmZmVyKTsgcGFzcy5kcmF3KHZlcnRpY2VzLmxlbmd0aCk7IH1cbiAgICBpZiAoZWRnZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jbGluZVBpcGVsaW5lKTsgcGFzcy5zZXRCaW5kR3JvdXAoMCwgbGluZUJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIGVkZ2VCdWZmZXIpOyBwYXNzLmRyYXcoZWRnZXMubGVuZ3RoKTsgfVxuICAgIHBhc3MuZW5kKCk7IHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICAgIHRoaXMuI3JlbmRlckxhYmVscyhpbnN0YW5jZXMpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLm9uU3VibWl0dGVkV29ya0RvbmUoKS50aGVuKCgpID0+IHsgdmVydGV4QnVmZmVyLmRlc3Ryb3koKTsgZWRnZUJ1ZmZlci5kZXN0cm95KCk7IH0pO1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQgeyB0aGlzLiNsYWJlbExheWVyLnJlbW92ZSgpOyB0aGlzLiNkZXB0aD8uZGVzdHJveSgpOyB0aGlzLiNzY2VuZUJ1ZmZlci5kZXN0cm95KCk7IGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7IH1cbiAgI3JlbmRlckxhYmVscyhpbnN0YW5jZXM6IHJlYWRvbmx5IE5lb25TaGFwZUluc3RhbmNlW10pOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2xhYmVsTGF5ZXIuc3R5bGUsIHtcbiAgICAgIGxlZnQ6IGAke3RoaXMuY2FudmFzLm9mZnNldExlZnR9cHhgLFxuICAgICAgdG9wOiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRUb3B9cHhgLFxuICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgIHdpZHRoOiBgJHt0aGlzLmNhbnZhcy5jbGllbnRXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMuY2FudmFzLmNsaWVudEhlaWdodH1weGAsXG4gICAgfSk7XG4gICAgdGhpcy4jbGFiZWxMYXllci5yZXBsYWNlQ2hpbGRyZW4oLi4uaW5zdGFuY2VzLmZsYXRNYXAoaW5zdGFuY2UgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5sYWJlbD8udGV4dCB8fCAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSA8PSAwKSByZXR1cm4gW107XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gICAgICBjb25zdCB4ID0gNTAgKyAoaW5zdGFuY2UueCA/PyAwKSAqIDQwIC8gKHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHkgPSA1MCAtIChpbnN0YW5jZS55ID8/IDApICogNDA7XG4gICAgICBjb25zdCBzaGFwZVJhZGl1cyA9IHNjYWxlICogdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogLjI7XG4gICAgICBjb25zdCBvZmZzZXQgPSBzaGFwZVJhZGl1cyArIChpbnN0YW5jZS5sYWJlbC5vZmZzZXQgPz8gOCkgKyAoaW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTgpICogLjU7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGluc3RhbmNlLmxhYmVsLnBvc2l0aW9uID8/IFwiYWJvdmVcIjtcbiAgICAgIGxldCB0eCA9IDAsIHR5ID0gMDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJhYm92ZVwiKSB0eSA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYmVsb3dcIikgdHkgPSBvZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibGVmdFwiKSB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwicmlnaHRcIikgdHggPSBvZmZzZXQ7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5zdGFuY2UubGFiZWwudGV4dDtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6YCR7eH0lYCwgdG9wOmAke3l9JWAsIHRyYW5zZm9ybTpgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7dHh9cHgpLGNhbGMoLTUwJSArICR7dHl9cHgpKWAsXG4gICAgICAgIGNvbG9yOmluc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yLCBmb250RmFtaWx5Omluc3RhbmNlLmxhYmVsLmZvbnRGYW1pbHkgPz8gXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBmb250U2l6ZTpgJHtpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOH1weGAsIGZvbnRXZWlnaHQ6U3RyaW5nKGluc3RhbmNlLmxhYmVsLmZvbnRXZWlnaHQgPz8gNjAwKSxcbiAgICAgICAgdGV4dFNoYWRvdzpgMCAwIDVweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfSwwIDAgMTRweCAke2luc3RhbmNlLmNvbG9yID8/IGluc3RhbmNlLnNoYXBlLmNvbG9yfWAsIHdoaXRlU3BhY2U6XCJub3dyYXBcIixcbiAgICAgICAgb3BhY2l0eTpTdHJpbmcoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtlbGVtZW50XTtcbiAgICB9KSk7XG4gIH1cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy4jbG9naWNhbFNpemU7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0IHx8ICF0aGlzLiNkZXB0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy4jZGVwdGggJiYgdGhpcy5jYW52YXMud2lkdGggPT09IHdpZHRoICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7XG4gICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UsIE5lb25TaGFwZUxhYmVsIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBlbnVtIE5lb25TaGFwZURpc3Bvc2FsIHtcbiAgRmFkZU91dCA9IFwiZmFkZU91dFwiLFxuICBEaXNhcHBlYXIgPSBcImRpc2FwcGVhclwiLFxuICBFeHBsb2RlID0gXCJleHBsb2RlXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlVmVjdG9yIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlSW1wYWN0IHtcbiAgZGlyZWN0aW9uOiBOZW9uU2hhcGVWZWN0b3I7XG4gIG1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUFjdG9yT3B0aW9ucyB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICB2ZWxvY2l0eT86IFBhcnRpYWw8TmVvblNoYXBlVmVjdG9yPjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbD86IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25TaGFwZUFjdG9yIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3I7XG4gIHNjYWxlOiBudW1iZXI7XG4gIGxhYmVsPzogTmVvblNoYXBlTGFiZWw7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkaXNwb3NhbDogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU6IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbjogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZTogbnVtYmVyO1xuICByb3RhdGlvblggPSAwO1xuICByb3RhdGlvblkgPSAwO1xuICByb3RhdGlvblogPSAwO1xuICBkaXNwb3NlZCA9IGZhbHNlO1xuICAjZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgI2ltcGFjdFZlbG9jaXR5OiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcbiAgI2ltcGFjdFJvdGF0aW9uOiBOZW9uU2hhcGVWZWN0b3IgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZW9uU2hhcGVBY3Rvck9wdGlvbnMpIHtcbiAgICB0aGlzLnNoYXBlID0gb3B0aW9ucy5zaGFwZTtcbiAgICB0aGlzLnggPSBvcHRpb25zLnggPz8gMDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnkgPz8gMDtcbiAgICB0aGlzLnogPSBvcHRpb25zLnogPz8gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiBvcHRpb25zLnZlbG9jaXR5Py54ID8/IDAsIHk6IG9wdGlvbnMudmVsb2NpdHk/LnkgPz8gMCB9O1xuICAgIHRoaXMuc2NhbGUgPSBvcHRpb25zLnNjYWxlID8/IDE7XG4gICAgdGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG9wdGlvbnMuZGlzcG9zYWwgPz8gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dDtcbiAgICB0aGlzLmV4cGxvZGVNYWduaXR1ZGUgPSBvcHRpb25zLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IG9wdGlvbnMuZW50cmFuY2VEdXJhdGlvbiA/PyAuNDU7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG9wdGlvbnMuZW50cmFuY2VNYWduaXR1ZGUgPz8gLjU1O1xuICB9XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyLCB6ID0gdGhpcy56KTogdGhpcyB7XG4gICAgdGhpcy54ID0geDsgdGhpcy55ID0geTsgdGhpcy56ID0gejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZlbG9jaXR5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0geDsgdGhpcy52ZWxvY2l0eS55ID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltcGFjdCh7IGRpcmVjdGlvbiwgbWFnbml0dWRlIH06IE5lb25TaGFwZUltcGFjdCk6IHRoaXMge1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICAgIGNvbnN0IHggPSBkaXJlY3Rpb24ueCAvIGxlbmd0aCwgeSA9IGRpcmVjdGlvbi55IC8gbGVuZ3RoO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKz0geCAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICs9IHkgKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCArPSB5ICogbWFnbml0dWRlICogLjk7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAtPSB4ICogbWFnbml0dWRlICogLjk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNwb3NlKG1vZGUgPSB0aGlzLmRpc3Bvc2FsKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NhbCA9IG1vZGU7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhciA/IDEgOiAuMDAwMTtcbiAgICBpZiAobW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVudGVyKGR1cmF0aW9uID0gdGhpcy5lbnRyYW5jZUR1cmF0aW9uLCBtYWduaXR1ZGUgPSB0aGlzLmVudHJhbmNlTWFnbml0dWRlKTogdGhpcyB7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gTWF0aC5tYXgoLjAwMSwgZHVyYXRpb24pO1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWdlbmVyYXRlKCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSAodGhpcy52ZWxvY2l0eS54ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWCArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25ZICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKiBkZWx0YVNlY29uZHM7XG4gICAgY29uc3QgZGFtcGluZyA9IE1hdGguZXhwKC03ICogZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKj0gZGFtcGluZztcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICo9IGRhbXBpbmc7IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgKj0gZGFtcGluZztcbiAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+IDAgJiYgIXRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IC44NSA6IC41NTtcbiAgICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNkaXNwb3NhbFByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gZHVyYXRpb24pO1xuICAgICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPj0gMSkgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLiNlbnRyYW5jZVByb2dyZXNzIDwgMSkgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyB0aGlzLmVudHJhbmNlRHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVySW5zdGFuY2Uob3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICAgIGNvbnN0IGZhZGUgPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0ID8gMSAtIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAxO1xuICAgIHJldHVybiB7XG4gICAgICBzaGFwZTogdGhpcy5zaGFwZSwgeDogdGhpcy54LCB5OiB0aGlzLnksIHo6IHRoaXMueiwgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvblg6IHRoaXMucm90YXRpb25YLCByb3RhdGlvblk6IHRoaXMucm90YXRpb25ZLCByb3RhdGlvblo6IHRoaXMucm90YXRpb25aLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsIGNvbG9yOiB0aGlzLmNvbG9yLCBvcGFjaXR5OiB0aGlzLmRpc3Bvc2VkID8gMCA6IGZhZGUsXG4gICAgICBlbnRyYW5jZVByb2dyZXNzOiB0aGlzLiNlbnRyYW5jZVByb2dyZXNzLFxuICAgICAgZW50cmFuY2VNYWduaXR1ZGU6IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMCxcbiAgICAgIGV4cGxvZGVNYWduaXR1ZGU6IHRoaXMuZXhwbG9kZU1hZ25pdHVkZSxcbiAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICB9O1xuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvblByaW1pdGl2ZVNoYXBlID0gXCJjaXJjbGVcIiB8IFwiYm9sdFwiIHwgXCJvcmJcIiB8IFwicmluZ1wiIHwgXCJzcGFya1wiIHwgXCJkaWFtb25kXCIgfCBcInBlbnRhZ29uXCIgfCBcImxpbmVcIiB8IFwiYXJjXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByaW1pdGl2ZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlY29uZGFyeUNvbG9yPzogc3RyaW5nO1xuICBnbG93PzogbnVtYmVyO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIHRleHR1cmU/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBhcmNTdGFydD86IG51bWJlcjtcbiAgYXJjRW5kPzogbnVtYmVyO1xuICBzaGFwZT86IE5lb25QcmltaXRpdmVTaGFwZTtcbn1cblxuY29uc3QgbWF4UHJpbWl0aXZlcyA9IDEwMjQ7XG5jb25zdCBmbG9hdHNQZXJQcmltaXRpdmUgPSAyMDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqLyBgXG5zdHJ1Y3QgU2NlbmUgeyByZXNvbHV0aW9uOiB2ZWMyZiwgY291bnQ6IGYzMiwgdGltZTogZjMyIH1cbnN0cnVjdCBQcmltaXRpdmUge1xuICBwb3NpdGlvbjogdmVjMmYsXG4gIHNpemU6IHZlYzJmLFxuICBjb2xvcjogdmVjNGYsXG4gIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgZ2xvdzogZjMyLFxuICBpbnRlbnNpdHk6IGYzMixcbiAgc2hhcGU6IGYzMixcbiAgdGV4dHVyZTogZjMyLFxuICByaW1JbnRlbnNpdHk6IGYzMixcbiAgc2hhZG93U3RyZW5ndGg6IGYzMixcbiAgcGFkZGluZzogdmVjMmYsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gaXRlbXM6IGFycmF5PFByaW1pdGl2ZT47XG5cbnN0cnVjdCBWZXJ0ZXhPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgY29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oMikgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oMykgaW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig0KSBzaGFwZTogZjMyLFxuICBAbG9jYXRpb24oNSkgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBAbG9jYXRpb24oNikgdGV4dHVyZTogZjMyLFxuICBAbG9jYXRpb24oNykgcmltSW50ZW5zaXR5OiBmMzIsXG4gIEBsb2NhdGlvbig4KSBzaGFkb3dTdHJlbmd0aDogZjMyLFxufVxuXG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2ZXJ0ZXg6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IFZlcnRleE91dHB1dCB7XG4gIHZhciBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgaXRlbSA9IGl0ZW1zW2luc3RhbmNlXTtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2ZXJ0ZXhdO1xuICB2YXIgcGl4ZWxPZmZzZXQgPSBsb2NhbCAqIGl0ZW0uc2l6ZTtcbiAgaWYgKGl0ZW0udGV4dHVyZSAhPSAwKSB7XG4gICAgbGV0IGMgPSBjb3MoaXRlbS50ZXh0dXJlKTtcbiAgICBsZXQgcyA9IHNpbihpdGVtLnRleHR1cmUpO1xuICAgIHBpeGVsT2Zmc2V0ID0gdmVjMmYocGl4ZWxPZmZzZXQueCAqIGMgLSBwaXhlbE9mZnNldC55ICogcywgcGl4ZWxPZmZzZXQueCAqIHMgKyBwaXhlbE9mZnNldC55ICogYyk7XG4gIH1cbiAgbGV0IHBpeGVsID0gaXRlbS5wb3NpdGlvbiArIHBpeGVsT2Zmc2V0O1xuICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKHBpeGVsLnggLyBzY2VuZS5yZXNvbHV0aW9uLnggKiAyIC0gMSwgMSAtIHBpeGVsLnkgLyBzY2VuZS5yZXNvbHV0aW9uLnkgKiAyLCAwLCAxKTtcbiAgb3V0cHV0LmxvY2FsID0gbG9jYWw7XG4gIG91dHB1dC5jb2xvciA9IGl0ZW0uY29sb3I7XG4gIG91dHB1dC5nbG93ID0gaXRlbS5nbG93O1xuICBvdXRwdXQuaW50ZW5zaXR5ID0gaXRlbS5pbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFwZSA9IGl0ZW0uc2hhcGU7XG4gIG91dHB1dC5zZWNvbmRhcnlDb2xvciA9IGl0ZW0uc2Vjb25kYXJ5Q29sb3I7XG4gIG91dHB1dC50ZXh0dXJlID0gaXRlbS50ZXh0dXJlO1xuICBvdXRwdXQucmltSW50ZW5zaXR5ID0gaXRlbS5yaW1JbnRlbnNpdHk7XG4gIG91dHB1dC5zaGFkb3dTdHJlbmd0aCA9IGl0ZW0uc2hhZG93U3RyZW5ndGg7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgaWYgKGlucHV0LnNoYXBlID4gNy41KSB7XG4gICAgbGV0IHJhZGl1cyA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gICAgbGV0IGFuZ2xlID0gYXRhbjIoaW5wdXQubG9jYWwueSwgaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFuZ2xlIDwgaW5wdXQucmltSW50ZW5zaXR5IHx8IGFuZ2xlID4gaW5wdXQuc2hhZG93U3RyZW5ndGggfHwgcmFkaXVzID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgbGluZURpc3RhbmNlID0gYWJzKHJhZGl1cyAtIDAuNzgpO1xuICAgIGlmIChsaW5lRGlzdGFuY2UgPiAwLjE2KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTIsIDAuMDM4LCBsaW5lRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4wMjUsIDAuMTYsIGxpbmVEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcHVsc2VBID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDIzLjAgLSBzY2VuZS50aW1lICogOC41KSksIDE2LjApO1xuICAgIGxldCBwdWxzZUIgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMTEuMCArIHNjZW5lLnRpbWUgKiA1LjMgKyAxLjcpKSwgMjQuMCk7XG4gICAgbGV0IGdyYWluID0gc2luKGFuZ2xlICogNzEuMCArIHNjZW5lLnRpbWUgKiAzLjEpICogMC41ICsgMC41O1xuICAgIGxldCBzdXJnZSA9IHNtb290aHN0ZXAoMC43MiwgMC45NCwgcHVsc2VBICogMC43ICsgcHVsc2VCICogMC42NSArIGdyYWluICogMC4xMik7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuODggKyBzdXJnZSAqIDAuNjUpICsgaGFsbyAqICgwLjIyICsgc3VyZ2UgKiAwLjkpKSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogc3VyZ2UgKiAwLjkpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNi41KSB7XG4gICAgbGV0IGFsb25nID0gaW5wdXQubG9jYWwueTtcbiAgICBsZXQgYWNyb3NzID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhY3Jvc3MgPiAxLjAgfHwgYWJzKGFsb25nKSA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDgsIDAuMjQsIGFjcm9zcyk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjEyLCAxLjAsIGFjcm9zcykpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5kRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMC43MiwgMS4wLCBhYnMoYWxvbmcpKTtcbiAgICBsZXQgdHJhdmVsID0gcG93KG1heCgwLjAsIHNpbihhbG9uZyAqIDI0LjAgLSBzY2VuZS50aW1lICogOC4wICsgaW5wdXQudGV4dHVyZSkpLCAxNC4wKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC43NSArIHRyYXZlbCAqIDAuNSkgKyBoYWxvICogKDAuMiArIHRyYXZlbCAqIDAuNTUpKSAqIGVuZEZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHRyYXZlbCAqIDAuNzUpO1xuICAgIHJldHVybiB2ZWM0Zihob3QgKiBlbmVyZ3ksIGNsYW1wKGVuZXJneSwgMC4wLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNS41KSB7XG4gICAgLy8gUGVudGFnb24gU0RGXG4gICAgLy8gbG9jYWwgaXMgaW4gWy0xLCAxXSByYW5nZS4gTGV0J3MgZmluZCBwZW50YWdvbiBkaXN0YW5jZS5cbiAgICBsZXQgcHggPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgbGV0IHB5ID0gaW5wdXQubG9jYWwueTtcbiAgICAvLyBQZW50YWdvbiBjb25zdGFudHMgZm9yIHZlcnRpY2VzL2VkZ2VzXG4gICAgbGV0IGsgPSB2ZWMzZigtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAxLjM3NjM4MTkyKTsgLy8gY29zL3NpbiBvZiA3MiwgcGx1cyBoZWlnaHQgZmFjdG9yXG4gICAgLy8gUHJvamVjdC9NaXJyb3IgYWNyb3NzIHRoZSBzeW1tZXRyeSBheGVzIG9mIHJlZ3VsYXIgcGVudGFnb25cbiAgICB2YXIgcCA9IHZlYzJmKHB4LCBweSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZigtay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZigtay54LCBrLnkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoay54LCBrLnkpLCBwKSwgMCkgKiB2ZWMyZihrLngsIGsueSk7XG4gICAgcC54ID0gcC54IC0gY2xhbXAocC54LCAtay56ICogMC41LCBrLnogKiAwLjUpO1xuICAgIGxldCBkID0gbGVuZ3RoKHAgLSB2ZWMyZigwLCAwLjcyKSkgKiBzaWduKHAueSAtIDAuNzIpO1xuICAgIC8vIE1hcCBkIHRvIGEgbm9ybWFsaXplZCByYWRpdXMgc2NhbGVcbiAgICBsZXQgc2NhbGVEID0gZCArIDAuMzU7IC8vIG9mZnNldCBwZW50YWdvbiB0byBmaXQgYm91bmRzIG5pY2VseVxuICAgIGlmIChzY2FsZUQgPiAwLjgpIHsgZGlzY2FyZDsgfVxuICAgIFxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC41LCAwLjY1LCBzY2FsZUQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNDUsIDAuNTMsIHNjYWxlRCkgKiAoMSAtIHNtb290aHN0ZXAoMC42NSwgMC43NSwgc2NhbGVEKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgtMC4yLCAwLjUsIHNjYWxlRCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC41NSwgMC44LCBzY2FsZUQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzggKyBib3JkZXIgKiAxLjM1O1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC41KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNzUgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC40NSkgKiBmaWxsICogMC4zNTtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC40O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA0LjUpIHtcbiAgICBsZXQgZCA9IGFicyhpbnB1dC5sb2NhbC54KSArIGFicyhpbnB1dC5sb2NhbC55KTtcbiAgICBpZiAoZCA+IDEuMDgpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBlZGdlID0gMSAtIHNtb290aHN0ZXAoMC43OCwgMC45MiwgZCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC43MiwgMC44MiwgZCkgKiAoMSAtIHNtb290aHN0ZXAoMC45MiwgMS4wMiwgZCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoMC4wLCAwLjc4LCBkKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjgyLCAxLjA4LCBkKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM1ICsgYm9yZGVyICogMS4yO1xuICAgIGxldCBlbmVyZ3kgPSAoZ2xhc3MgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjYgKyBlZGdlICogMC4zKTtcbiAgICBsZXQgZmlsbENvbG9yID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBmaWxsICogMC41KSAqIGZpbGwgKiAwLjM4O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM1O1xuICAgIGxldCByZ2IgPSBlZGdlQ29sb3IgKyBmaWxsQ29sb3IgKyBibG9vbTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAxLjUpIHtcbiAgICBsZXQgcjIgPSBkb3QoaW5wdXQubG9jYWwsIGlucHV0LmxvY2FsKTtcbiAgICBpZiAocjIgPiAxKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgeiA9IHNxcnQobWF4KDAsIDEgLSByMikpO1xuICAgIGxldCBub3JtYWwgPSBub3JtYWxpemUodmVjM2YoaW5wdXQubG9jYWwueCwgLWlucHV0LmxvY2FsLnksIHopKTtcbiAgICBsZXQgbGlnaHQgPSBub3JtYWxpemUodmVjM2YoLTAuNTUsIC0wLjcsIDAuOSkpO1xuICAgIGxldCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWwsIGxpZ2h0KSwgMCk7XG4gICAgbGV0IHJpbSA9IHBvdygxIC0geiwgMi4yKSAqIGlucHV0LnJpbUludGVuc2l0eTtcbiAgICBsZXQgc2hhZG93ID0gbWl4KDEgLSBpbnB1dC5zaGFkb3dTdHJlbmd0aCwgMSwgc21vb3Roc3RlcCgtMC42NSwgMC40NSwgZG90KG5vcm1hbC54eSwgbGlnaHQueHkpKSk7XG4gICAgbGV0IGdyYWluID0gc2luKGlucHV0LmxvY2FsLnggKiAyMyArIGlucHV0LmxvY2FsLnkgKiAxNykgKiBzaW4oaW5wdXQubG9jYWwueSAqIDMxIC0gaW5wdXQubG9jYWwueCAqIDExKTtcbiAgICBsZXQgdGV4dHVyZSA9IDEgKyBncmFpbiAqIGlucHV0LnRleHR1cmUgKiAwLjIyO1xuICAgIGxldCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0LCBub3JtYWwpLCB2ZWMzZigwLDAsMSkpLCAwKSwgMjgpICogMS44O1xuICAgIGxldCBib2R5ID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBkaWZmdXNlICogMC44ICsgMC4yKSAqIHNoYWRvdyAqIHRleHR1cmU7XG4gICAgbGV0IGhhbG8gPSBwb3cobWF4KDAsIDEgLSBsZW5ndGgoaW5wdXQubG9jYWwpKSwgMC4zNSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCByZ2IgPSBib2R5ICogKDAuMzggKyBkaWZmdXNlICogMC45NSkgKyBpbnB1dC5jb2xvci5yZ2IgKiByaW0gKyB2ZWMzZihzcGVjdWxhcikgKyBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IgKiBpbnB1dC5pbnRlbnNpdHksIDEpO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IGxlbmd0aChpbnB1dC5sb2NhbCk7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDMuNSkge1xuICAgIGxldCBheGlzID0gbWluKGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgICBsZXQgYXJtID0gMSAtIHNtb290aHN0ZXAoMC4wNCwgMC4xOCwgYXhpcyk7XG4gICAgbGV0IGZhZGUgPSAxIC0gc21vb3Roc3RlcCgwLjIsIDEsIG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSkpO1xuICAgIGxldCBlbmVyZ3kgPSBhcm0gKiBmYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGFybSkgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMi41KSB7XG4gICAgbGV0IHJpbmdEaXN0YW5jZSA9IGFicyhsZW5ndGgoaW5wdXQubG9jYWwpIC0gMC42Mik7XG4gICAgbGV0IHJpbmcgPSAxIC0gc21vb3Roc3RlcCgwLjA1NSwgMC4xOCwgcmluZ0Rpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjEyLCAwLjQyLCByaW5nRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZXJneSA9IChyaW5nICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCByZ2IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIHJpbmcpICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMC41KSB7XG4gICAgZGlzdGFuY2UgPSBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICB9XG4gIGxldCBjb3JlID0gMSAtIHNtb290aHN0ZXAoMC4zOCwgMC43NiwgZGlzdGFuY2UpO1xuICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjMsIDEsIGRpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICBsZXQgZW5lcmd5ID0gKGNvcmUgKyBoYWxvICogMC41NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gIGxldCBjaHJvbWF0aWNDb3JlID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBwb3cobWF4KGNvcmUsIDApLCAyKSk7XG4gIGxldCByYXcgPSBjaHJvbWF0aWNDb3JlICogKGNvcmUgKiAxLjA1ICsgaGFsbyAqIDAuNDIpO1xuICBsZXQgcmdiID0gcmF3IC8gKHZlYzNmKDEpICsgcmF3ICogMC4zMik7XG4gIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xufVxuYDtcblxuZnVuY3Rpb24gcmdiYShoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdmFsdWUgPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGlmICghL15bMC05YS1mXXs2fSQvaS50ZXN0KHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBzaXgtZGlnaXQgaGV4IGNvbG9yLCByZWNlaXZlZCBcIiR7aGV4fVwiLmApO1xuICByZXR1cm4gW1xuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgwLCAyKSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSgyLCA0KSwgMTYpIC8gMjU1LFxuICAgIE51bWJlci5wYXJzZUludCh2YWx1ZS5zbGljZSg0LCA2KSwgMTYpIC8gMjU1LFxuICAgIDEsXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNzY2VuZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjcHJpbWl0aXZlQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDogeyBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LCBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9IH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogbWF4UHJpbWl0aXZlcyAqIGZsb2F0c1BlclByaW1pdGl2ZSAqIDQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgIH0pO1xuICAgIHRoaXMuI2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH0sXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNwcmltaXRpdmVCdWZmZXIgfSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvblByaW1pdGl2ZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5LlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBjYW52YXMgY291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIocHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdLCB0aW1lU2Vjb25kcyA9IDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgdmlzaWJsZSA9IHByaW1pdGl2ZXMuc2xpY2UoMCwgbWF4UHJpbWl0aXZlcyk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmlzaWJsZS5sZW5ndGggKiBmbG9hdHNQZXJQcmltaXRpdmUpO1xuICAgIHZpc2libGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyUHJpbWl0aXZlO1xuICAgICAgZGF0YS5zZXQoW1xuICAgICAgICBpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQgPz8gaXRlbS53aWR0aCxcbiAgICAgICAgLi4ucmdiYShpdGVtLmNvbG9yKSxcbiAgICAgICAgLi4ucmdiYShpdGVtLnNlY29uZGFyeUNvbG9yID8/IGl0ZW0uY29sb3IpLFxuICAgICAgICBpdGVtLmdsb3cgPz8gMC41LFxuICAgICAgICBpdGVtLmludGVuc2l0eSA/PyAxLFxuICAgICAgICBpdGVtLnNoYXBlID09PSBcImFyY1wiID8gOCA6IGl0ZW0uc2hhcGUgPT09IFwibGluZVwiID8gNyA6IGl0ZW0uc2hhcGUgPT09IFwicGVudGFnb25cIiA/IDYgOiBpdGVtLnNoYXBlID09PSBcImRpYW1vbmRcIiA/IDUgOiBpdGVtLnNoYXBlID09PSBcInNwYXJrXCIgPyA0IDogaXRlbS5zaGFwZSA9PT0gXCJyaW5nXCIgPyAzIDogaXRlbS5zaGFwZSA9PT0gXCJvcmJcIiA/IDIgOiBpdGVtLnNoYXBlID09PSBcImJvbHRcIiA/IDEgOiAwLFxuICAgICAgICBpdGVtLnJvdGF0aW9uID8/IGl0ZW0udGV4dHVyZSA/PyAwLFxuICAgICAgICBpdGVtLmFyY1N0YXJ0ID8/IGl0ZW0ucmltSW50ZW5zaXR5ID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjRW5kID8/IGl0ZW0uc2hhZG93U3RyZW5ndGggPz8gMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgIF0sIG9mZnNldCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHZpc2libGUubGVuZ3RoLCB0aW1lU2Vjb25kc10pKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciwgMCwgZGF0YSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLjAwNiwgZzogMC4wMDksIGI6IDAuMDI1LCBhOiAwIH0sXG4gICAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICB9XSxcbiAgICB9KTtcbiAgICBpZiAodmlzaWJsZS5sZW5ndGgpIHtcbiAgICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZEdyb3VwKTtcbiAgICAgIHBhc3MuZHJhdyg2LCB2aXNpYmxlLmxlbmd0aCk7XG4gICAgfVxuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbiA9IFwiZmFkZVwiIHwgXCJleHBhbmRGYWRlXCIgfCBcImltcGxvZGVcIiB8IFwic3BhcmtGYWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjb3JlQ29sb3I/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBkZXRhaWw/OiBudW1iZXI7XG4gIHR1cmJ1bGVuY2U/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGNvcmVJbnRlbnNpdHk/OiBudW1iZXI7XG4gIHJpbUludGVuc2l0eT86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25UaW1lPzogbnVtYmVyO1xuICBkaXNzaXBhdGlvbkFjdGlvbj86IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uO1xuICBkcmlmdFg/OiBudW1iZXI7XG4gIGRyaWZ0WT86IG51bWJlcjtcbiAgc2VlZD86IG51bWJlcjtcbiAgYWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJ4XCIgfCBcInlcIiB8IFwic2l6ZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG5cbnR5cGUgQ2xvdWQgPSBSZXF1aXJlZDxPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwiY29yZUNvbG9yXCI+PiAmIHsgY29yZUNvbG9yOiBzdHJpbmc7IGFnZTogbnVtYmVyIH07XG5cbmNvbnN0IG1heENsb3VkcyA9IDk2O1xuY29uc3QgZmxvYXRzUGVyQ2xvdWQgPSAyNDtcblxuY29uc3QgZGVmYXVsdHM6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+ID0ge1xuICBjb2xvcjogXCIjNjNlOGZmXCIsXG4gIGNvcmVDb2xvcjogXCIjZmZmZmZmXCIsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0aW9uOiAwLFxuICBzaXplOiAuMjUsXG4gIGRldGFpbDogNSxcbiAgdHVyYnVsZW5jZTogLjc1LFxuICBnbG93OiA0LFxuICBjb3JlSW50ZW5zaXR5OiAxLjQsXG4gIHJpbUludGVuc2l0eTogLjg1LFxuICBvcGFjaXR5OiAxLFxuICBkaXNzaXBhdGlvblRpbWU6IC43LFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJleHBhbmRGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBzZWVkOiAwLFxuICBhZ2U6IDAsXG59O1xuXG5jb25zdCBoZXggPSAodmFsdWU6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9PiB7XG4gIGNvbnN0IHJhdyA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLnBhZEVuZCg2LCBcIjBcIikuc2xpY2UoMCwgNik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcml2ZU5lb25DbG91ZENvcmVDb2xvciA9IChjb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgW3IsIGcsIGJdID0gaGV4KGNvbG9yKTtcbiAgY29uc3QgbGlmdCA9IChjaGFubmVsOiBudW1iZXIpID0+IE1hdGgucm91bmQoKGNoYW5uZWwgKyAoMSAtIGNoYW5uZWwpICogLjc4KSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAjJHtsaWZ0KHIpfSR7bGlmdChnKX0ke2xpZnQoYil9YDtcbn07XG5cbmNvbnN0IGFjdGlvblZhbHVlID0gKGFjdGlvbjogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24pOiBudW1iZXIgPT5cbiAgYWN0aW9uID09PSBcImZhZGVcIiA/IDAgOiBhY3Rpb24gPT09IFwiZXhwYW5kRmFkZVwiID8gMSA6IGFjdGlvbiA9PT0gXCJpbXBsb2RlXCIgPyAyIDogMztcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBDbG91ZCB7XG4gIHBvczogdmVjMmYsXG4gIHZlbG9jaXR5OiB2ZWMyZixcbiAgYWdlOiBmMzIsXG4gIGxpZmU6IGYzMixcbiAgc2l6ZTogZjMyLFxuICByb3RhdGlvbjogZjMyLFxuICBzZWVkOiBmMzIsXG4gIGFjdGlvbjogZjMyLFxuICBjb2xvcjogdmVjNGYsXG4gIGNvcmU6IHZlYzRmLFxuICB0dW5pbmc6IHZlYzRmLFxufVxuc3RydWN0IEdsb2JhbHMge1xuICBhc3BlY3Q6IGYzMixcbiAgdGltZTogZjMyLFxuICBjb3VudDogZjMyLFxuICBiYWNrZ3JvdW5kOiBmMzIsXG59XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IGdsb2JhbHM6IEdsb2JhbHM7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGNsb3VkczogYXJyYXk8Q2xvdWQ+O1xuXG5mbiBoYXNoKHA6IHZlYzJmKSAtPiBmMzIge1xuICByZXR1cm4gZnJhY3Qoc2luKGRvdChwLCB2ZWMyZigxMjcuMSwgMzExLjcpKSkgKiA0Mzc1OC41NDUzMTIzKTtcbn1cbmZuIG5vaXNlKHA6IHZlYzJmKSAtPiBmMzIge1xuICBsZXQgaSA9IGZsb29yKHApO1xuICBsZXQgZiA9IGZyYWN0KHApO1xuICBsZXQgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbWl4KG1peChoYXNoKGkpLCBoYXNoKGkgKyB2ZWMyZigxLDApKSwgdS54KSwgbWl4KGhhc2goaSArIHZlYzJmKDAsMSkpLCBoYXNoKGkgKyB2ZWMyZigxLDEpKSwgdS54KSwgdS55KTtcbn1cbmZuIGZibShwOiB2ZWMyZiwgb2N0YXZlczogZjMyKSAtPiBmMzIge1xuICB2YXIgdiA9IDAuMDtcbiAgdmFyIGEgPSAwLjU7XG4gIHZhciBxID0gcDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBpZiAoZjMyKGkpID49IG9jdGF2ZXMpIHsgYnJlYWs7IH1cbiAgICB2ICs9IGEgKiBub2lzZShxKTtcbiAgICBxID0gcSAqIDIuMDMgKyB2ZWMyZig2LjksIDMuNyk7XG4gICAgYSAqPSAwLjUyO1xuICB9XG4gIHJldHVybiB2O1xufVxuZm4gcm90YXRlKHA6IHZlYzJmLCBhOiBmMzIpIC0+IHZlYzJmIHtcbiAgbGV0IGMgPSBjb3MoYSk7XG4gIGxldCBzID0gc2luKGEpO1xuICByZXR1cm4gdmVjMmYocC54ICogYyAtIHAueSAqIHMsIHAueCAqIHMgKyBwLnkgKiBjKTtcbn1cbnN0cnVjdCBPdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbG9jYWw6IHZlYzJmLFxuICBAbG9jYXRpb24oMSkgQGludGVycG9sYXRlKGZsYXQpIGluc3RhbmNlOiB1MzIsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2aTogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gT3V0IHtcbiAgbGV0IGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBjID0gY2xvdWRzW2luc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgYWN0aW9uU2NhbGUgPSBzZWxlY3QoMS4wICsgbGlmZVQgKiAxLjg1LCAxLjAgLSBsaWZlVCAqIC42MiwgYy5hY3Rpb24gPiAxLjUgJiYgYy5hY3Rpb24gPCAyLjUpO1xuICBsZXQgcmFkaXVzID0gbWF4KC4wMDEsIGMuc2l6ZSAqIGFjdGlvblNjYWxlKSAqIDIuMzU7XG4gIHZhciBjZW50ZXIgPSBjLnBvcyArIGMudmVsb2NpdHkgKiBjLmFnZTtcbiAgY2VudGVyLnggKj0gZ2xvYmFscy5hc3BlY3Q7XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmldO1xuICBsZXQgcCA9IGNlbnRlciArIGxvY2FsICogcmFkaXVzO1xuICB2YXIgbzogT3V0O1xuICBvLnBvc2l0aW9uID0gdmVjNGYocC54IC8gZ2xvYmFscy5hc3BlY3QsIHAueSwgMCwgMSk7XG4gIG8ubG9jYWwgPSBsb2NhbCAqIDIuMzU7XG4gIG8uaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgcmV0dXJuIG87XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBjID0gY2xvdWRzW2lucHV0Lmluc3RhbmNlXTtcbiAgbGV0IGxpZmVUID0gY2xhbXAoYy5hZ2UgLyBtYXgoYy5saWZlLCAuMDAxKSwgMC4wLCAxLjApO1xuICBsZXQgbG9jYWwgPSByb3RhdGUoaW5wdXQubG9jYWwsIC1jLnJvdGF0aW9uIC0gbGlmZVQgKiAuNDUpO1xuICBsZXQgciA9IGxlbmd0aChsb2NhbCk7XG4gIGlmIChyID49IDIuMzUpIHsgZGlzY2FyZDsgfVxuICBsZXQgZGV0YWlsID0gY2xhbXAoYy50dW5pbmcueCwgMS4wLCA3LjApO1xuICBsZXQgdHVyYnVsZW5jZSA9IGMudHVuaW5nLnk7XG4gIGxldCB3aXNweSA9IGZibShsb2NhbCAqICgxLjcgKyBkZXRhaWwgKiAuMTYpICsgdmVjMmYoYy5zZWVkLCBjLnNlZWQgKiAuNzEpICsgZ2xvYmFscy50aW1lICogdmVjMmYoLjE2LCAuMDkpICogdHVyYnVsZW5jZSwgbWluKGRldGFpbCwgNC4wKSk7XG4gIGxldCBjb3JlID0gZXhwKC1yICogciAqICgxLjIgKyBjLnR1bmluZy56ICogLjIyKSk7XG4gIGxldCByaW0gPSBleHAoLWFicyhyIC0gLjcyKSAqIDMuNik7XG4gIGxldCBzcGFyayA9IHBvdyhtYXgoMC4wLCBzaW4od2lzcHkgKiAxNi4wICsgYy5zZWVkICsgZ2xvYmFscy50aW1lICogOS4wKSksIDE0LjApICogc2VsZWN0KDAuMCwgMS4wLCBjLmFjdGlvbiA+IDIuNSk7XG4gIGxldCBkaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgxLjQ1LCAyLjM1LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgcmltRGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMi43LCAzLjgsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCBlZGdlRmFkZSA9IDEuMCAtIHNtb290aHN0ZXAoMS43NSwgMi4zNSwgcik7XG4gIGxldCBkZW5zaXR5ID0gKGNvcmUgKiAuNzIgKyByaW0gKiAuMjQgKiByaW1EaXNzaXBhdGUgKyB3aXNweSAqIC4yMiArIHNwYXJrICogLjU1KSAqIGRpc3NpcGF0ZSAqIGMudHVuaW5nLncgKiBlZGdlRmFkZTtcbiAgbGV0IGhvdENvcmUgPSBjLmNvcmUucmdiICogY29yZSAqIGMudHVuaW5nLnogKiAoMS4wICsgc3BhcmspO1xuICBsZXQgbmVvblJpbSA9IGMuY29sb3IucmdiICogKGRlbnNpdHkgKiAoLjc1ICsgYy5jb2xvci5hICogLjA4KSArIHJpbSAqIHJpbURpc3NpcGF0ZSAqIGMuY29sb3IuYSAqIC4wOCk7XG4gIGxldCBnbG93ID0gbmVvblJpbSArIGhvdENvcmUgKiBkZW5zaXR5O1xuICByZXR1cm4gdmVjNGYoZ2xvdywgY2xhbXAoZGVuc2l0eSAqIC44NSArIHNwYXJrICogLjI1LCAwLjAsIDEuMCkpO1xufWA7XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdEFjdG9yIHtcbiAgc2V0dGluZ3M6IFJlcXVpcmVkPE5lb25DbG91ZEJ1cnN0U2V0dGluZ3M+O1xuICBhZ2UgPSAwO1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyA9IHt9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uZGVmYXVsdHMsIC4uLnNldHRpbmdzLCBzZWVkOiBzZXR0aW5ncy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwIH07XG4gIH1cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLmFnZSArPSBkdDtcbiAgICByZXR1cm4gdGhpcy5hZ2UgPCB0aGlzLnNldHRpbmdzLmRpc3NpcGF0aW9uVGltZTtcbiAgfVxuICByZW5kZXJJbnN0YW5jZSgpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnNldHRpbmdzLCBzZWVkOiB0aGlzLnNldHRpbmdzLnNlZWQgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI2J1ZmZlcjogR1BVQnVmZmVyO1xuICAjZ2xvYmFsczogR1BVQnVmZmVyO1xuICAjYmluZDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IHByb2NlZHVyYWwgY2xvdWQgdm9sdW1lIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLCB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7XG4gICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiwgb3BlcmF0aW9uOiBcImFkZFwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jZ2xvYmFscyA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNidWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogbWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQgKiA0LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2JpbmQgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFtcbiAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNnbG9iYWxzIH0gfSxcbiAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNidWZmZXIgfSB9LFxuICAgIF0gfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IGNsb3VkIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoY2xvdWRzOiByZWFkb25seSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzW10sIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHBhY2tlZCA9IG5ldyBGbG9hdDMyQXJyYXkobWF4Q2xvdWRzICogZmxvYXRzUGVyQ2xvdWQpO1xuICAgIGNsb3Vkcy5zbGljZSgwLCBtYXhDbG91ZHMpLmZvckVhY2goKGNsb3VkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYyA9IHsgLi4uZGVmYXVsdHMsIC4uLmNsb3VkIH07XG4gICAgICBjb25zdCBjb2xvciA9IGhleChjLmNvbG9yKSwgY29yZSA9IGhleChjLmNvcmVDb2xvcik7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlckNsb3VkO1xuICAgICAgcGFja2VkLnNldChbYy54LCBjLnksIGMuZHJpZnRYLCBjLmRyaWZ0WSwgYy5hZ2UgPz8gMCwgYy5kaXNzaXBhdGlvblRpbWUsIGMuc2l6ZSwgYy5yb3RhdGlvbiwgYy5zZWVkLCBhY3Rpb25WYWx1ZShjLmRpc3NpcGF0aW9uQWN0aW9uKSwgMCwgMF0sIG9mZnNldCk7XG4gICAgICBwYWNrZWQuc2V0KFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBjLmdsb3csIGNvcmVbMF0sIGNvcmVbMV0sIGNvcmVbMl0sIGMuY29yZUludGVuc2l0eSwgYy5kZXRhaWwsIGMudHVyYnVsZW5jZSwgYy5yaW1JbnRlbnNpdHksIGMub3BhY2l0eV0sIG9mZnNldCArIDEyKTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNidWZmZXIsIDAsIHBhY2tlZCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jZ2xvYmFscywgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIHRpbWVTZWNvbmRzLCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpLCAwXSkpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7IGNvbG9yQXR0YWNobWVudHM6IFt7XG4gICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSxcbiAgICAgIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLFxuICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgIH1dIH0pO1xuICAgIHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpO1xuICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmQpO1xuICAgIHBhc3MuZHJhdyg2LCBNYXRoLm1pbihjbG91ZHMubGVuZ3RoLCBtYXhDbG91ZHMpKTtcbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgbWFwVG9wRG93bkNsb3VkKGNsb3VkOiBOZW9uVG9wRG93bkNsb3VkQnVyc3QsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgICBjb25zdCBhc3BlY3QgPSBsb2dpY2FsV2lkdGggLyBsb2dpY2FsSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jbG91ZCxcbiAgICAgIHg6IChjbG91ZC54IC8gbG9naWNhbFdpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gY2xvdWQueSAvIGxvZ2ljYWxIZWlnaHQpICogMi41LFxuICAgICAgc2l6ZTogY2xvdWQuc2l6ZSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgICBkcmlmdFg6IChjbG91ZC5kcmlmdFggPz8gMCkgLyBsb2dpY2FsV2lkdGggKiBhc3BlY3QgKiAyLjUsXG4gICAgICBkcmlmdFk6IC0oY2xvdWQuZHJpZnRZID8/IDApIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveShkZXN0cm95RGV2aWNlID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuI2J1ZmZlci5kZXN0cm95KCk7XG4gICAgdGhpcy4jZ2xvYmFscy5kZXN0cm95KCk7XG4gICAgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE5lb25QcmltaXRpdmVSZW5kZXJlciwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlciwgdHlwZSBOZW9uU2hhcGVJbnN0YW5jZSB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkNsb3VkQnVyc3RSZW5kZXJlciwgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgfSBmcm9tIFwiLi9jbG91ZC1idXJzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2hhcGUgZXh0ZW5kcyBPbWl0PE5lb25TaGFwZUluc3RhbmNlLCBcInhcIiB8IFwieVwiIHwgXCJzY2FsZVwiPiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TY2VuZSB7XG4gIHByaW1pdGl2ZXM/OiByZWFkb25seSBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM/OiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI3ByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVSZW5kZXJlcjtcbiAgI2Nsb3VkczogTmVvbkNsb3VkQnVyc3RSZW5kZXJlcjtcbiAgI3NoYXBlczogTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI7XG4gICN3aWR0aDogbnVtYmVyO1xuICAjaGVpZ2h0OiBudW1iZXI7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsgdGhpcy5kZXZpY2UgPSBkZXZpY2U7IHRoaXMuI2NvbnRleHQgPSBjb250ZXh0OyB0aGlzLiN3aWR0aCA9IHdpZHRoOyB0aGlzLiNoZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jcHJpbWl0aXZlcyA9IG5ldyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jY2xvdWRzID0gbmV3IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy4jc2hhcGVzID0gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogUHJvbWlzZTxOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkgdG9wLWRvd24gc2NlbmVzLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0LCBsb2dpY2FsV2lkdGgsIGxvZ2ljYWxIZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNjZW5lOiBOZW9uVG9wRG93blNjZW5lLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy4jcHJpbWl0aXZlcy5yZW5kZXIoWy4uLihzY2VuZS5wcmltaXRpdmVzID8/IFtdKV0sIHRpbWVTZWNvbmRzLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICBjb25zdCBjbG91ZHMgPSBzY2VuZS5jbG91ZHMgPz8gW107XG4gICAgY29uc3QgYXNwZWN0ID0gdGhpcy4jd2lkdGggLyB0aGlzLiNoZWlnaHQ7XG4gICAgY29uc3Qgc2hhcGVzID0gc2NlbmUuc2hhcGVzID8/IFtdO1xuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB0aGlzLiNzaGFwZXMucmVuZGVyKHNoYXBlcy5tYXAoc2hhcGUgPT4gKHtcbiAgICAgIC4uLnNoYXBlLFxuICAgICAgeDogKHNoYXBlLnggLyB0aGlzLiN3aWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIHNoYXBlLnkgLyB0aGlzLiNoZWlnaHQpICogMi41LFxuICAgICAgc2NhbGU6IChzaGFwZS5oZWlnaHQgPz8gc2hhcGUuc2l6ZSkgLyB0aGlzLiNoZWlnaHQgKiAyLjUsXG4gICAgICBzY2FsZVg6IChzaGFwZS5zY2FsZVggPz8gMSkgKiAoKHNoYXBlLndpZHRoID8/IHNoYXBlLnNpemUpIC8gKHNoYXBlLmhlaWdodCA/PyBzaGFwZS5zaXplKSksXG4gICAgfSkpLCB0cnVlLCB0YXJnZXQpO1xuICAgIGlmIChjbG91ZHMubGVuZ3RoKSB0aGlzLiNjbG91ZHMucmVuZGVyKGNsb3Vkcy5tYXAoY2xvdWQgPT4gdGhpcy4jY2xvdWRzLm1hcFRvcERvd25DbG91ZChjbG91ZCwgdGhpcy4jd2lkdGgsIHRoaXMuI2hlaWdodCkpLCB0aW1lU2Vjb25kcywgdHJ1ZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuI3NoYXBlcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLiNjbG91ZHMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCIsIFwiYXVyb3JhXCIsIFwiY3J5c3RhbEZvcmdlXCIsIFwidm9pZEdhcmRlblwiLCBcInNvbGFyQXJyYXlcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxuICBhdXJvcmE6IFwiQXVyb3JhXCIsXG4gIGNyeXN0YWxGb3JnZTogXCJDcnlzdGFsIEZvcmdlXCIsXG4gIHZvaWRHYXJkZW46IFwiVm9pZCBHYXJkZW5cIixcbiAgc29sYXJBcnJheTogXCJTb2xhciBBcnJheVwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVQYWxldHRlIHtcbiAgZmxvb3I6IHN0cmluZztcbiAgYm91bmRhcnk6IHN0cmluZztcbiAgbGFuZTogc3RyaW5nO1xuICBjZW50ZXJMYW5lOiBzdHJpbmc7XG4gIGFjY2VudDogc3RyaW5nO1xuICBsYW5lSGlnaGxpZ2h0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBoYWxsRmxvb3JDb2xvcixcbiAgYm91bmRhcnk6IGhhbGxEZWVwQmx1ZSxcbiAgbGFuZTogaGFsbE11dGVkQmx1ZSxcbiAgY2VudGVyTGFuZTogaGFsbE11dGVkVmlvbGV0LFxuICBhY2NlbnQ6IGhhbGxBY2NlbnRQaW5rLFxuICBsYW5lSGlnaGxpZ2h0OiBoYWxsTXV0ZWRDeWFuLFxufTtcblxuY29uc3QgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwMzExMGZcIixcbiAgYm91bmRhcnk6IFwiIzE3OGM5MlwiLFxuICBsYW5lOiBcIiMxN2Q3YjNcIixcbiAgY2VudGVyTGFuZTogXCIjOGY1NmZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZmM3XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2I5ZmY2YVwiLFxufTtcblxuY29uc3QgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwNzEwMThcIixcbiAgYm91bmRhcnk6IFwiIzI2ZDdmZlwiLFxuICBsYW5lOiBcIiM2M2YxZmZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY1ZmQ4XCIsXG4gIGFjY2VudDogXCIjZmZiODRkXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2Y0ZmJmZlwiLFxufTtcblxuY29uc3Qgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDgwODE4XCIsXG4gIGJvdW5kYXJ5OiBcIiM2ZjUzZmZcIixcbiAgbGFuZTogXCIjMzVlOGI2XCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNGZjN1wiLFxuICBhY2NlbnQ6IFwiI2I5ZmY2YVwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiM5YmQ3ZmZcIixcbn07XG5cbmNvbnN0IHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzExMGMwN1wiLFxuICBib3VuZGFyeTogXCIjZmY5ZTM4XCIsXG4gIGxhbmU6IFwiI2ZmZDQ1YVwiLFxuICBjZW50ZXJMYW5lOiBcIiMyNmQ3ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmNjZcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZmZmNmI4XCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgcmV0dXJuIHNjZW5lQ3JlYXRvcnNbb3B0aW9ucy5zY2VuZUlkXShvcHRpb25zKTtcbn1cblxuY29uc3Qgc2NlbmVDcmVhdG9yczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCAob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucykgPT4gTmVvblRvcERvd25TY2VuZT4gPSB7XG4gIG5lb25IYWxsOiBjcmVhdGVOZW9uSGFsbCxcbiAgYXVyb3JhOiBjcmVhdGVBdXJvcmEsXG4gIGNyeXN0YWxGb3JnZTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGUsIGFkZENyeXN0YWxGb3JnZURldGFpbHMpLFxuICB2b2lkR2FyZGVuOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGUsIGFkZFZvaWRHYXJkZW5EZXRhaWxzKSxcbiAgc29sYXJBcnJheTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlLCBhZGRTb2xhckFycmF5RGV0YWlscyksXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXVyb3JhKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUxhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFHcm91bmRGbGFyZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUhvcml6b25WZWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShcbiAgb3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyxcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgYWRkRGV0YWlsczogKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcikgPT4gdm9pZCxcbik6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkVGhlbWVkTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZERldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUoXG4gIGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sXG4gIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICB0aW1lTXM6IG51bWJlcixcbik6IHZvaWQge1xuICBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXMsIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQsIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUpO1xuICBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtczogTmVvblByaW1pdGl2ZVtdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgcHVsc2UgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgKiBoYWxsRW5lcmd5U3BlZWQpICogLjI7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIC40Miwgd2lkdGg6IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoLCBoZWlnaHQ6IGhlaWdodCAqIDEuMDgsIGNvbG9yOiBwYWxldHRlLmZsb29yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC45LCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogcGFsZXR0ZS5ib3VuZGFyeSwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC43OCwgd2lkdGg6IHdpZHRoICogLjE4LCBoZWlnaHQ6IDEuMiwgY29sb3I6IHBhbGV0dGUuYWNjZW50LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5jZW50ZXJMYW5lLCBnbG93OiAuMjQsIGludGVuc2l0eTogLjA4LCBzaGFwZTogXCJib2x0XCIgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSk6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBbYm90dG9tLCBob3Jpem9uXSBvZiBbW2xlZnRCb3R0b20sIGxlZnRIb3Jpem9uXSwgW3JpZ2h0Qm90dG9tLCByaWdodEhvcml6b25dXSBhcyBjb25zdCkge1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUuYm91bmRhcnksIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIC41NiwgMS4zKTtcbiAgfVxuXG4gIGZvciAobGV0IGxhbmUgPSAxOyBsYW5lIDw9IDM7IGxhbmUrKykge1xuICAgIGNvbnN0IHUgPSBsYW5lIC8gNDtcbiAgICBjb25zdCBzdGFydCA9IGxlcnBQb2ludChsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgdSk7XG4gICAgY29uc3QgZW5kID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IGNvbG9yID0gbGFuZSA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUubGFuZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHJvdyAlIDQgPT09IDEgPyBwYWxldHRlLmxhbmUgOiByb3cgJSA0ID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5hY2NlbnQ7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4xNSArIHQgKiAuMjMpICogKC41NSArIHJvd1B1bHNlICogLjQ1KSArIHN1cmdlICogLjA1NSwgMy4xICsgdCAqIDIpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMiArIHQgKiAuMjcpICogKC41MiArIHJvd1B1bHNlICogLjQ4KSArIHN1cmdlICogLjA3LCAuNzUgKyB0ICogLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgNzsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE5MDAgKyBwdWxzZUluZGV4IC8gNykgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNTUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzQgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBoYWxsTXV0ZWRDeWFuLCBvcGFjaXR5LCAxLjEgKyB0ICogMS40KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRmxvb3JHbHlwaHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCByb3dzID0gWzIsIDQsIDYsIDgsIDEwLCAxMl07XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIC41KTtcbiAgICBjb25zdCBzY2FsZSA9IC40NSArIHQgKiAxLjE7XG4gICAgY29uc3QgcHVsc2UgPSAuNDggKyBNYXRoLnNpbih0aW1lTXMgLyA3MjAgKyByb3cgKiAxLjMpICogLjI0O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiA3ICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IDcgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbERlZXBCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJvdyAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4yNCArIHB1bHNlICogLjE2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IGdsb3dQdWxzZSA9IC43NSArIE1hdGguc2luKHRpbWVNcyAvIDY4MCkgKiAuMjU7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIGhhbGxBY2NlbnRQaW5rLCAuMiArIGdsb3dQdWxzZSAqIC4wOCwgMS4xKTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggLSB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkQ3lhbiwgLjE2LCAuODUpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54ICsgd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRWaW9sZXQsIC4xNiwgLjg1KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggKyAuNSkgLyA4O1xuICAgIGNvbnN0IGJhc2UgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3Qgc2lkZUJpYXMgPSBNYXRoLmFicyh1IC0gLjUpICogMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGJhc2UueCxcbiAgICAgIHk6IGJhc2UueSAtIGhlaWdodCAqICguMDE4ICsgc2lkZUJpYXMgKiAuMDE4KSxcbiAgICAgIHdpZHRoOiAxICsgc2lkZUJpYXMgKiAuNyxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyBzaWRlQmlhcyAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbEFjY2VudFBpbmssXG4gICAgICBnbG93OiAuMjQsXG4gICAgICBpbnRlbnNpdHk6IC4wNyArIGdsb3dQdWxzZSAqIC4wMzUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4oaW5kZXggKiAxLjcpICogLjEyLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxTaWRlUGFuZWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBzaWRlIG9mIFswLCAxXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxMCwgMS42OCk7XG4gICAgICBjb25zdCByYWlsID0gc2lkZSA9PT0gMFxuICAgICAgICA/IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdClcbiAgICAgICAgOiBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgICBjb25zdCBvdXR3YXJkID0gc2lkZSA9PT0gMCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaWNrZXIgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA2MDAgKyBpbmRleCAqIDEuNSArIHNpZGUpICogLjI4O1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHg6IHJhaWwueCArIG91dHdhcmQgKiB3aWR0aCAqICguMDM1ICsgdCAqIC4wNiksXG4gICAgICAgIHk6IHJhaWwueSAtIGhlaWdodCAqICguMDE4ICsgdCAqIC4wMTIpLFxuICAgICAgICB3aWR0aDogMS4yICsgdCAqIDEuMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHQgKiAuMDgpLFxuICAgICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkQ3lhbixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgICAgZ2xvdzogLjMsXG4gICAgICAgIGludGVuc2l0eTogKC4wNzUgKyB0ICogLjA2NSkgKiBmbGlja2VyLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEVuZXJneVRyYWNlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjEyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAxMTY7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjcpKTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0ID09PSAwID8gLjE4IDogaW5kZXggJSA0ID09PSAxID8gLjM0IDogaW5kZXggJSA0ID09PSAyID8gLjY2IDogLjgyO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBzaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjcgKyB0aW1lTXMgLyAxNzAwKSAqIC4wMzUpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyAzOTAgKyBpbmRleCAqIDEuMSkgKiAuMzg7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiAuOCArIGluZGV4ICUgMyAqIC41LFxuICAgICAgaGVpZ2h0OiAxMCArIGluZGV4ICUgNSAqIDcsXG4gICAgICBjb2xvcjogaW5kZXggJSA1ID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbE11dGVkQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyAoaW5kZXggJSA0KSAqIC4wMTgpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgOTsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE1NTAgKyBwdWxzZUluZGV4IC8gOSkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNDgpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzIgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMTdkN2IzXCIsIG9wYWNpdHksIDEgKyB0ICogMS43KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFHcm91bmRGbGFyZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4wOCArICgoaW5kZXggKiAyOSkgJSAxMDApIC8gMTEyO1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS42MikpO1xuICAgIGNvbnN0IGxhbmVTaWRlID0gaW5kZXggJSAyID09PSAwID8gLjIyIDogLjc4O1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBsYW5lU2lkZSArIE1hdGguc2luKGluZGV4ICogMS4xICsgdGltZU1zIC8gMTgwMCkgKiAuMDQpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA0MzAgKyBpbmRleCAqIDEuMykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA5ICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IGluZGV4ICUgMyA9PT0gMSA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA2KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjE4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUhvcml6b25WZWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA3OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCAtIDMpIC8gNjtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5zaW4odGltZU1zIC8gMTEwMCArIGluZGV4ICogLjkpO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogdnAueCArIHUgKiB3aWR0aCAqIC4zNixcbiAgICAgIHk6IHZwLnkgKyBoZWlnaHQgKiAoLjA3NSArIGluZGV4ICogLjAwNiksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAzNSArIGluZGV4ICogLjAwNCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMTIgKyBNYXRoLmFicyh3YXZlKSAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMDQ1ICsgTWF0aC5hYnMod2F2ZSkgKiAuMDI1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IHUgKiAuMjggKyB3YXZlICogLjA4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lZExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA4OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTcwMCArIHB1bHNlSW5kZXggLyA4KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcGFsZXR0ZS5hY2NlbnQsIC4yOCAqICgxIC0gdHJhdmVsKSwgMS4xICsgdCAqIDEuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTY7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxNywgMS41NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xNCA6IC44NjtcbiAgICBjb25zdCBlZGdlID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgZ2xpbnQgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA1MjAgKyBpbmRleCAqIDEuMTcpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogZWRnZS54LFxuICAgICAgeTogZWRnZS55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTIgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDI1ICsgdCAqIC4wNiksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZiODRkXCIgOiBcIiM2M2YxZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiNmZjVmZDhcIiA6IFwiI2Y0ZmJmZlwiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogZ2xpbnQsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgICByb3RhdGlvbjogKHNpZGUgPCAuNSA/IC0uMjIgOiAuMjIpICsgTWF0aC5zaW4odGltZU1zIC8gMTQwMCArIGluZGV4KSAqIC4wOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCBcIiNmZmI4NGRcIiwgLjIyLCAxLjMpO1xufVxuXG5mdW5jdGlvbiBhZGRWb2lkR2FyZGVuRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coLjA4ICsgKChpbmRleCAqIDIzKSAlIDEwMCkgLyAxMTIsIDEuNjUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPCAyID8gLjE4IDogLjgyO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUgKyBNYXRoLnNpbih0aW1lTXMgLyAxOTAwICsgaW5kZXgpICogLjAzNSk7XG4gICAgY29uc3QgYmxvb20gPSAuNSArIE1hdGguc2luKHRpbWVNcyAvIDc2MCArIGluZGV4ICogLjgpICogLjMyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgaGVpZ2h0OiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMzVlOGI2XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjNmY1M2ZmXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC40MixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIHQgKiAuMDUpICogYmxvb20sXG4gICAgICBzaGFwZTogaW5kZXggJSAyID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjQsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIFwiIzM1ZThiNlwiLCAuMTgsIDEuMSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNvbGFyQXJyYXlEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE5LCAxLjQ4KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjEgOiAuOTtcbiAgICBjb25zdCBtb3VudCA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IHB1bHNlID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gNjEwICsgaW5kZXggKiAxLjA1KSAqIC4zO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogbW91bnQueCxcbiAgICAgIHk6IG1vdW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTIgKyB0ICogLjAyNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZkNDVhXCIgOiBcIiNmZjllMzhcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiMyNmQ3ZmZcIiA6IFwiI2ZmNGY2NlwiLFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogcHVsc2UsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogc2lkZSA8IC41ID8gLS4zOCA6IC4zOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCBcIiNmZmY2YjhcIiwgLjI0LCAxLjQpO1xufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSA9IFwiZGFydFwiIHwgXCJuZWVkbGVcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJvamVjdGlsZU9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYPzogbnVtYmVyO1xuICB2ZWxvY2l0eVk/OiBudW1iZXI7XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgbGVuZ3RoPzogbnVtYmVyO1xuICB0cmFpbExlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxXaWR0aD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICBzaGFwZT86IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbn1cblxuY29uc3Qgcm90YXRpb25Gb3JTY3JlZW5Gb3J3YXJkVmVjdG9yID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMih4IC8gbGVuZ3RoLCAteSAvIGxlbmd0aCk7XG59O1xuXG5leHBvcnQgY2xhc3MgTmVvblByb2plY3RpbGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHZlbG9jaXR5WTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWlsV2lkdGg6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgdHJhaWxDb2xvcjogc3RyaW5nO1xuICBjb3JlQ29sb3I6IHN0cmluZztcbiAgc2hhcGU6IE5lb25Qcm9qZWN0aWxlU2hhcGU7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblByb2plY3RpbGVPcHRpb25zKSB7XG4gICAgdGhpcy54PW9wdGlvbnMueDt0aGlzLnk9b3B0aW9ucy55O3RoaXMudmVsb2NpdHlYPW9wdGlvbnMudmVsb2NpdHlYPz8wO3RoaXMudmVsb2NpdHlZPW9wdGlvbnMudmVsb2NpdHlZPz8tNTAwO1xuICAgIHRoaXMucmFkaXVzPW9wdGlvbnMucmFkaXVzPz8zO3RoaXMubGVuZ3RoPW9wdGlvbnMubGVuZ3RoPz85O3RoaXMudHJhaWxMZW5ndGg9b3B0aW9ucy50cmFpbExlbmd0aD8/MTY7dGhpcy50cmFpbFdpZHRoPW9wdGlvbnMudHJhaWxXaWR0aD8/MS41O1xuICAgIHRoaXMuY29sb3I9b3B0aW9ucy5jb2xvcjt0aGlzLnRyYWlsQ29sb3I9b3B0aW9ucy50cmFpbENvbG9yPz9vcHRpb25zLmNvbG9yO3RoaXMuY29yZUNvbG9yPW9wdGlvbnMuY29yZUNvbG9yPz9vcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuc2hhcGU9b3B0aW9ucy5zaGFwZT8/XCJkYXJ0XCI7dGhpcy5pbnRlbnNpdHk9b3B0aW9ucy5pbnRlbnNpdHk/PzE7dGhpcy5nbG93PW9wdGlvbnMuZ2xvdz8/Ljc1O1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlYICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5WSAqIGRlbHRhU2Vjb25kcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc2hhcGUgPT09IFwic3BsaXRCb2x0XCI7XG4gICAgY29uc3QgbmVlZGxlID0gdGhpcy5zaGFwZSA9PT0gXCJuZWVkbGVcIjtcbiAgICBjb25zdCBzbHVnID0gdGhpcy5zaGFwZSA9PT0gXCJzbHVnXCI7XG4gICAgY29uc3Qgc3BlZWQgPSBNYXRoLmh5cG90KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb25YID0gdGhpcy52ZWxvY2l0eVggLyBzcGVlZDtcbiAgICBjb25zdCBkaXJlY3Rpb25ZID0gdGhpcy52ZWxvY2l0eVkgLyBzcGVlZDtcbiAgICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3Rvcih0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpO1xuICAgIGNvbnN0IGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10gPSBbe1xuICAgICAgeDp0aGlzLngtZGlyZWN0aW9uWCp0aGlzLnRyYWlsTGVuZ3RoKi41LHk6dGhpcy55LWRpcmVjdGlvblkqdGhpcy50cmFpbExlbmd0aCouNSxcbiAgICAgIHdpZHRoOnRoaXMudHJhaWxXaWR0aCxoZWlnaHQ6dGhpcy50cmFpbExlbmd0aCxjb2xvcjp0aGlzLnRyYWlsQ29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb2xvcixcbiAgICAgIGdsb3c6dGhpcy5nbG93Ki42LGludGVuc2l0eTp0aGlzLmludGVuc2l0eSouNzIsc2hhcGU6XCJib2x0XCIscm90YXRpb24sXG4gICAgfV07XG4gICAgY29uc3Qgd2lkdGg9c2x1Zz90aGlzLnJhZGl1cyoxLjU6bmVlZGxlP3RoaXMucmFkaXVzKi42NTp0aGlzLnJhZGl1cztcbiAgICBjb25zdCBoZWlnaHQ9c2x1Zz90aGlzLmxlbmd0aCouNzU6dGhpcy5sZW5ndGg7XG4gICAgY29uc3Qgc2lkZVggPSAtZGlyZWN0aW9uWTtcbiAgICBjb25zdCBzaWRlWSA9IGRpcmVjdGlvblg7XG4gICAgY29uc3QgYWRkPShvZmZzZXQ6bnVtYmVyKT0+aXRlbXMucHVzaCh7eDp0aGlzLngrc2lkZVgqb2Zmc2V0LHk6dGhpcy55K3NpZGVZKm9mZnNldCx3aWR0aCxoZWlnaHQsY29sb3I6dGhpcy5jb2xvcixzZWNvbmRhcnlDb2xvcjp0aGlzLmNvcmVDb2xvcixnbG93OnRoaXMuZ2xvdyxpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHksc2hhcGU6bmVlZGxlP1wiY2lyY2xlXCI6XCJib2x0XCIscm90YXRpb259KTtcbiAgICBpZihzcGxpdCl7YWRkKC10aGlzLnJhZGl1cyouNyk7YWRkKHRoaXMucmFkaXVzKi43KX1lbHNlIGFkZCgwKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBUZXN0U3RhdHVzID0gXCJib290aW5nXCIgfCBcInJlYWR5XCIgfCBcInBhc3NlZFwiIHwgXCJmYWlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXN0QXNzZXJ0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzZWQ6IGJvb2xlYW47XG4gIGRldGFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0UGFnZVNuYXBzaG90IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBUZXN0U3RhdHVzO1xuICBhc3NlcnRpb25zOiBUZXN0QXNzZXJ0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0UGFnZTxURHJpdmVyIGV4dGVuZHMgb2JqZWN0PihcbiAgaWQ6IHN0cmluZyxcbiAgZHJpdmVyOiBURHJpdmVyLFxuICBzdGF0dXNFbGVtZW50OiBIVE1MRWxlbWVudCxcbikge1xuICBjb25zdCBzbmFwc2hvdDogVGVzdFBhZ2VTbmFwc2hvdCA9IHsgaWQsIHN0YXR1czogXCJib290aW5nXCIsIGFzc2VydGlvbnM6IFtdIH07XG4gIGNvbnN0IHB1Ymxpc2ggPSAoKSA9PiB7XG4gICAgc3RhdHVzRWxlbWVudC5kYXRhc2V0LnN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c25hcHNob3Quc3RhdHVzLnRvVXBwZXJDYXNlKCl9IFx1MDBCNyAke3NuYXBzaG90LmFzc2VydGlvbnMuZmlsdGVyKGEgPT4gYS5wYXNzZWQpLmxlbmd0aH0vJHtzbmFwc2hvdC5hc3NlcnRpb25zLmxlbmd0aH0gYXNzZXJ0aW9uc2A7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGVzdFN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgfTtcbiAgY29uc3QgYXBpID0ge1xuICAgIC4uLmRyaXZlcixcbiAgICBnZXRTbmFwc2hvdDogKCk6IFRlc3RQYWdlU25hcHNob3QgPT4gc3RydWN0dXJlZENsb25lKHNuYXBzaG90KSxcbiAgICByZWFkeSgpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IFwicmVhZHlcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICAgIGFzc2VydChuYW1lOiBzdHJpbmcsIHBhc3NlZDogYm9vbGVhbiwgZGV0YWlsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5hc3NlcnRpb25zLnB1c2goeyBuYW1lLCBwYXNzZWQsIGRldGFpbCB9KTtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IHNuYXBzaG90LmFzc2VydGlvbnMuZXZlcnkoYXNzZXJ0aW9uID0+IGFzc2VydGlvbi5wYXNzZWQpID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgfTtcbiAgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgbmVvbkZhY3RvcnlUZXN0OiB0eXBlb2YgYXBpIH0pLm5lb25GYWN0b3J5VGVzdCA9IGFwaTtcbiAgcHVibGlzaCgpO1xuICByZXR1cm4gYXBpO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVmljdG9yeU9wdGlvbnMge1xuICBjZW50ZXJYOiBudW1iZXI7XG4gIGNlbnRlclk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBhcnRpY2xlQ291bnQ/OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uVmljdG9yeUV4cGVyaWVuY2Uge1xuICByZWFkb25seSBzdGFydGVkQXQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgZHVyYXRpb25NczogbnVtYmVyO1xuICByZWFkb25seSBvcHRpb25zOiBOZW9uVmljdG9yeU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblZpY3RvcnlPcHRpb25zLCBzdGFydGVkQXQgPSBwZXJmb3JtYW5jZS5ub3coKSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdGFydGVkQXQgPSBzdGFydGVkQXQ7XG4gICAgdGhpcy5kdXJhdGlvbk1zID0gb3B0aW9ucy5kdXJhdGlvbk1zID8/IDQyMDA7XG4gIH1cblxuICBnZXQgY29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydGVkQXQgPj0gdGhpcy5kdXJhdGlvbk1zO1xuICB9XG5cbiAgcHJpbWl0aXZlcyhub3cgPSBwZXJmb3JtYW5jZS5ub3coKSk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgY29uc3QgZWxhcHNlZCA9IE1hdGgubWF4KDAsIG5vdyAtIHRoaXMuc3RhcnRlZEF0KTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKDEsIGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uTXMpO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlQ291bnQgPz8gOTA7XG4gICAgY29uc3QgY29sb3JzID0gW25lb25QYWxldHRlLmN5YW4sIG5lb25QYWxldHRlLnBpbmssIG5lb25QYWxldHRlLmdvbGQsIG5lb25QYWxldHRlLmdyZWVuLCBuZW9uUGFsZXR0ZS52aW9sZXQsIG5lb25QYWxldHRlLm9yYW5nZV07XG4gICAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBzZWVkID0gaW5kZXggKiA5MS43MztcbiAgICAgIGNvbnN0IGRlbGF5ID0gKGluZGV4ICUgMTIpICogMC4wMzU7XG4gICAgICBjb25zdCBsb2NhbCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHByb2dyZXNzICogMS4zNSAtIGRlbGF5KSk7XG4gICAgICBpZiAobG9jYWwgPD0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBhbmdsZSA9ICgoc2VlZCAlIDM2MCkgLyAxODApICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IHNwZWVkID0gMC4yMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMjYwO1xuICAgICAgY29uc3QgZHJpZnQgPSBNYXRoLnNpbihzZWVkKSAqIHRoaXMub3B0aW9ucy53aWR0aCAqIDAuMDYgKiBsb2NhbDtcbiAgICAgIGNvbnN0IHggPSB0aGlzLm9wdGlvbnMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy53aWR0aCAqIHNwZWVkICogbG9jYWwgKyBkcmlmdDtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLm9wdGlvbnMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5oZWlnaHQgKiBzcGVlZCAqIGxvY2FsICsgdGhpcy5vcHRpb25zLmhlaWdodCAqIDAuNDIgKiBsb2NhbCAqIGxvY2FsO1xuICAgICAgY29uc3QgZmFkZSA9IE1hdGgubWF4KDAsIDEgLSBsb2NhbCAqIDAuNzIpO1xuICAgICAgY29uc3Qgc2l6ZSA9IDIuNSArIChpbmRleCAlIDUpO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgeCwgeSxcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSAqICgxLjggKyBpbmRleCAlIDMpLFxuICAgICAgICBjb2xvcjogY29sb3JzW2luZGV4ICUgY29sb3JzLmxlbmd0aF0sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBjb2xvcnNbKGluZGV4ICsgMikgJSBjb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgZ2xvdzogMC41NSxcbiAgICAgICAgaW50ZW5zaXR5OiBmYWRlLFxuICAgICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJzcGFya1wiIDogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgIHg6IHRoaXMub3B0aW9ucy5jZW50ZXJYLFxuICAgICAgeTogdGhpcy5vcHRpb25zLmNlbnRlclksXG4gICAgICB3aWR0aDogODAgKyBwcm9ncmVzcyAqIDE4MCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZS5jeWFuLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgICAgIGdsb3c6IDAuNTUgKiAoMSAtIHByb2dyZXNzKSxcbiAgICAgIGludGVuc2l0eTogTWF0aC5tYXgoMCwgMSAtIHByb2dyZXNzKSxcbiAgICAgIHNoYXBlOiBcInJpbmdcIixcbiAgICB9KTtcbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbiAgfVxufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQXV0b0FpbVRhcmdldCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhZC1jZW50ZXIgYWltIG9mZnNldCAocmVsYXRpdmUgdG8gbGFuZUNlbnRlcikgdGhhdCBiZXN0IGFsaWduc1xuICogb25lIG9mIHRoZSBzcXVhZCdzIGZyb250LXJvdyBjb2x1bW5zIHRvIHRoZSBuZWFyZXN0IGVuZW15LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRzICAgICAgICAgQWxsIGxpdmUgKG5vbi1keWluZykgZW5lbWllcyBpbiB0aGUgY3VycmVudCBsYW5lLlxuICogQHBhcmFtIGxhbmVDZW50ZXIgICAgICBQaXhlbCBYIG9mIHRoZSBsYW5lJ3MgY2VudGVyLlxuICogQHBhcmFtIGNvbHVtbk9mZnNldHMgICBYIG9mZnNldHMgb2YgZWFjaCBmcm9udC1yb3cgY29sdW1uIHJlbGF0aXZlIHRvIHNxdWFkIGNlbnRlci5cbiAqIEBwYXJhbSBjdXJyZW50T2Zmc2V0ICAgQ3VycmVudCBzcXVhZCBhaW0gb2Zmc2V0IChzcXVhZCBjZW50ZXIgPSBsYW5lQ2VudGVyICsgY3VycmVudE9mZnNldCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RBdXRvQWltT2Zmc2V0KFxuICB0YXJnZXRzOiByZWFkb25seSBBdXRvQWltVGFyZ2V0W10sXG4gIGxhbmVDZW50ZXI6IG51bWJlcixcbiAgY29sdW1uT2Zmc2V0czogcmVhZG9ubHkgbnVtYmVyW10sXG4gIGN1cnJlbnRPZmZzZXQgPSAwLFxuKTogbnVtYmVyIHtcbiAgaWYgKCF0YXJnZXRzLmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgLy8gSWRlbnRpZnkgdGhlIGZyb250IHJvdzogZ3JvdXAgdGFyZ2V0cyBieSByb3dJZCAob3IgdHJlYXQgdW5ncm91cGVkIHRhcmdldHMgYXMgYSBzaW5nbGUgcm93KS5cbiAgY29uc3QgZXhwbGljaXRSb3dzID0gbmV3IE1hcDxudW1iZXIsIEF1dG9BaW1UYXJnZXRbXT4oKTtcbiAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgIGlmICh0YXJnZXQucm93SWQgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3Qgcm93ID0gZXhwbGljaXRSb3dzLmdldCh0YXJnZXQucm93SWQpID8/IFtdO1xuICAgIHJvdy5wdXNoKHRhcmdldCk7XG4gICAgZXhwbGljaXRSb3dzLnNldCh0YXJnZXQucm93SWQsIHJvdyk7XG4gIH1cbiAgY29uc3QgZnJvbnRSb3cgPSBleHBsaWNpdFJvd3Muc2l6ZVxuICAgID8gWy4uLmV4cGxpY2l0Um93cy52YWx1ZXMoKV0uc29ydCgobGVmdCwgcmlnaHQpID0+XG4gICAgICAgIE1hdGgubWF4KC4uLnJpZ2h0Lm1hcCh0ID0+IHQueSkpIC0gTWF0aC5tYXgoLi4ubGVmdC5tYXAodCA9PiB0LnkpKSlbMF1cbiAgICA6IHRhcmdldHMuZmlsdGVyKHQgPT4gTWF0aC5hYnModC55IC0gTWF0aC5tYXgoLi4udGFyZ2V0cy5tYXAoYyA9PiBjLnkpKSkgPCAzKTtcblxuICAvLyBGb3IgZWFjaCBlbmVteSBpbiB0aGUgZnJvbnQgcm93IFx1MDBENyBlYWNoIHNxdWFkIGNvbHVtbiwgY29tcHV0ZSB0aGUgc3F1YWQtY2VudGVyXG4gIC8vIG9mZnNldCB0aGF0IHdvdWxkIHBsYWNlIHRoYXQgY29sdW1uIGV4YWN0bHkgb24gdGhhdCBlbmVteSdzIFguXG4gIC8vIFBpY2sgdGhlIChlbmVteSwgY29sdW1uKSBwYWlyIHdob3NlIHJlcXVpcmVkIG9mZnNldCBpcyBjbG9zZXN0IHRvIHRoZSBjdXJyZW50XG4gIC8vIG9mZnNldCBcdTIwMTQgbWluaW1pc2luZyB0aGUgYWltIG1vdmVtZW50IG5lZWRlZCB3aGlsZSBndWFyYW50ZWVpbmcgYSBoaXQuXG4gIGNvbnN0IGNvbHMgPSBjb2x1bW5PZmZzZXRzLmxlbmd0aCA+IDAgPyBjb2x1bW5PZmZzZXRzIDogWzBdO1xuICBsZXQgYmVzdE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG4gIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuXG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZnJvbnRSb3cpIHtcbiAgICBmb3IgKGNvbnN0IGNvbE9mZnNldCBvZiBjb2xzKSB7XG4gICAgICAvLyBzcXVhZENlbnRlciA9IGxhbmVDZW50ZXIgKyBhaW1PZmZzZXQgXHUyMTkyIGNvbHVtbiBsYW5kcyBhdCBsYW5lQ2VudGVyICsgYWltT2Zmc2V0ICsgY29sT2Zmc2V0XG4gICAgICAvLyBXZSB3YW50IHRoYXQgdG8gZXF1YWwgZW5lbXkueCBcdTIxOTIgYWltT2Zmc2V0ID0gZW5lbXkueCAtIGxhbmVDZW50ZXIgLSBjb2xPZmZzZXRcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0O1xuICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGNhbmRpZGF0ZU9mZnNldCAtIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdCkge1xuICAgICAgICBiZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIGJlc3RPZmZzZXQgPSBjYW5kaWRhdGVPZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RPZmZzZXQ7XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBDb21iYXRUdW5pbmcge1xuICAvKipcbiAgICogTXVsdGlwbGllcyB0aGUgd2hvbGUgY29tYmF0IHNpbXVsYXRpb24gcGFjZSB3aGlsZSBwcmVzZXJ2aW5nIHJlbGF0aXZlXG4gICAqIHRpbWluZyBiZXR3ZWVuIG1vdmVtZW50LCBjb29sZG93bnMsIHByb2plY3RpbGVzLCBhbmQgYXV0aG9yZWQgdHJhY2sgYmVhdHMuXG4gICAqL1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbWJhdFR1bmluZyA9IHtcbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiAxLjUsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBDb21iYXRUdW5pbmc7XG5cbmlmICghTnVtYmVyLmlzRmluaXRlKGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIpIHx8IGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIgPD0gMCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb21iYXRUdW5pbmc6IGdsb2JhbFNwZWVkTXVsdGlwbGllciBtdXN0IGJlIGEgcG9zaXRpdmUgZmluaXRlIG51bWJlci5cIik7XG59XG4iLCAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhbWlseURlZmluaXRpb248VE1lbWJlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICBhYnN0cmFjdCByZWFkb25seSBmYW1pbHlJZDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBtZW1iZXJzOiBUTWVtYmVycztcblxuICBwcm90ZWN0ZWQgcmVxdWlyZShjb25kaXRpb246IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZyk6IGFzc2VydHMgY29uZGl0aW9uIHtcbiAgICBpZiAoIWNvbmRpdGlvbikgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMuZmFtaWx5SWR9OiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBhYnN0cmFjdCB2YWxpZGF0ZSgpOiB2b2lkO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNob3RQYXR0ZXJuID0gXCJzaW5nbGVcIiB8IFwicmFwaWRTaW5nbGVcIiB8IFwiYnVyc3RcIiB8IFwiaGVhdnlTaW5nbGVcIiB8IFwicGFpcmVkU3ByZWFkXCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlQmVoYXZpb3IgPSBcInN0cmFpZ2h0XCIgfCBcInBpZXJjaW5nU3RyYWlnaHRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVTaGFwZSA9IFwibmVlZGxlXCIgfCBcImRhcnRcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcbmV4cG9ydCB0eXBlIE11enpsZUVmZmVjdCA9IFwiY3Jpc3BTdGFyXCIgfCBcInJhcGlkRmxpY2tlclwiIHwgXCJncm91cGVkUHVsc2VcIiB8IFwic2hvY2tEaWFtb25kXCIgfCBcInR3aW5Qcm9uZ3NcIjtcbmV4cG9ydCB0eXBlIEltcGFjdEVmZmVjdCA9IFwicGluU3BhcmtcIiB8IFwibmVlZGxlU2NhdHRlclwiIHwgXCJidXJzdENyb3NzXCIgfCBcImltcGFjdFJpbmdcIiB8IFwic3BsaXRSaXBwbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5MZXZlbCB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGZpcmVSYXRlUGVyU2Vjb25kOiBudW1iZXI7XG4gIGRhbWFnZTogbnVtYmVyO1xuICBwcm9qZWN0aWxlU3BlZWQ6IG51bWJlcjtcbiAgcHJvamVjdGlsZVJhZGl1czogbnVtYmVyO1xuICBwcm9qZWN0aWxlQ291bnQ6IG51bWJlcjtcbiAgYnVyc3RDb3VudDogbnVtYmVyO1xuICBidXJzdEludGVydmFsTXM6IG51bWJlcjtcbiAgc3ByZWFkRGVncmVlczogbnVtYmVyO1xuICBwaWVyY2U6IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg6IG51bWJlcjtcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiBudW1iZXI7XG4gIGltcGFjdFJhZGl1cz86IG51bWJlcjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIG11enpsZUZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0Rmxhc2hTY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1blZpc3VhbElkZW50aXR5IHtcbiAgc2lsaG91ZXR0ZTogc3RyaW5nO1xuICBtb3Rpb25MYW5ndWFnZTogc3RyaW5nO1xuICBwcm9qZWN0aWxlU2hhcGU6IFByb2plY3RpbGVTaGFwZTtcbiAgcHJvamVjdGlsZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICB0cmFpbENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHByb2plY3RpbGVBc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBtdXp6bGVFZmZlY3Q6IE11enpsZUVmZmVjdDtcbiAgaW1wYWN0RWZmZWN0OiBJbXBhY3RFZmZlY3Q7XG4gIG11enpsZUR1cmF0aW9uTXM6IG51bWJlcjtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICBob3Jpem9udGFsSml0dGVyOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5NZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiB8IFwiZmlyc3RCdWlsZFwiIHwgXCJwcmVzc3VyZVwiO1xuICBzaG90UGF0dGVybjogU2hvdFBhdHRlcm47XG4gIHByb2plY3RpbGVCZWhhdmlvcjogUHJvamVjdGlsZUJlaGF2aW9yO1xuICB2aXN1YWxJZGVudGl0eTogR3VuVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgR3VuTGV2ZWxbXTtcbn1cblxuY29uc3QgbGV2ZWwgPSAoXG4gIGxldmVsTnVtYmVyOiBudW1iZXIsXG4gIHZhbHVlczogT21pdDxHdW5MZXZlbCwgXCJsZXZlbFwiIHwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiPiAmXG4gICAgUGFydGlhbDxQaWNrPEd1bkxldmVsLCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCIgfCBcImltcGFjdFJhZGl1c1wiPj4sXG4pOiBHdW5MZXZlbCA9PiAoe1xuICBsZXZlbDogbGV2ZWxOdW1iZXIsXG4gIHByb2plY3RpbGVDb3VudDogMSxcbiAgYnVyc3RDb3VudDogMSxcbiAgYnVyc3RJbnRlcnZhbE1zOiAwLFxuICBzcHJlYWREZWdyZWVzOiAwLFxuICBwaWVyY2U6IDAsXG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogMCxcbiAga25vY2tiYWNrOiAwLFxuICAuLi52YWx1ZXMsXG59KTtcblxuZXhwb3J0IGNsYXNzIEd1bkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImd1blwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiR3VuXCI7XG4gIHJlYWRvbmx5IGltcGxlbWVudGF0aW9uID0ge1xuICAgIGF1dG9GaXJlczogdHJ1ZSxcbiAgICB0YXJnZXRpbmc6IFwibGFuZUZvcndhcmRcIixcbiAgICBwcm9qZWN0aWxlTW9kZWw6IFwia2luZW1hdGljXCIsXG4gICAgY29sbGlzaW9uTW9kZWw6IFwiY2lyY2xlVnNFbmVteVwiLFxuICAgIGFsbG93ZWRTaG90UGF0dGVybnM6IFtcInNpbmdsZVwiLCBcInJhcGlkU2luZ2xlXCIsIFwiYnVyc3RcIiwgXCJoZWF2eVNpbmdsZVwiLCBcInBhaXJlZFNwcmVhZFwiXSBzYXRpc2ZpZXMgU2hvdFBhdHRlcm5bXSxcbiAgICBhbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9yczogW1wic3RyYWlnaHRcIiwgXCJwaWVyY2luZ1N0cmFpZ2h0XCJdIHNhdGlzZmllcyBQcm9qZWN0aWxlQmVoYXZpb3JbXSxcbiAgfSBhcyBjb25zdDtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHB1bHNlUGlzdG9sOiB7XG4gICAgICBsYWJlbDogXCJQdWxzZSBQaXN0b2xcIiwgcmFyaXR5OiBcInN0YXJ0ZXJcIiwgdW5sb2NrUGhhc2U6IFwic3RhcnRcIiwgc2hvdFBhdHRlcm46IFwic2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJ0aW55QnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImNsZWFuU2luZ2xlU2hvdFwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiY3lhblwiLCB0cmFpbENvbG9yOiBcImRlZXBCbHVlXCIsIGNvcmVDb2xvcjogXCJjeWFuXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuOCwgdHJhaWxXaWR0aFNjYWxlOiAwLjY1LCB2aXN1YWxJbnRlbnNpdHk6IDAuOSwgbXV6emxlRWZmZWN0OiBcImNyaXNwU3RhclwiLCBpbXBhY3RFZmZlY3Q6IFwicGluU3BhcmtcIiwgbXV6emxlRHVyYXRpb25NczogNzIsIGltcGFjdER1cmF0aW9uTXM6IDEwNSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOjEscHJvamVjdGlsZVNwZWVkOjU0MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS43NSxkYW1hZ2U6MS4xNSxwcm9qZWN0aWxlU3BlZWQ6NTgwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljh9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi4xNSxkYW1hZ2U6MS4zNSxwcm9qZWN0aWxlU3BlZWQ6NjIwLHByb2plY3RpbGVSYWRpdXM6My4yNSx0cmFpbExlbmd0aDoxOCxtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi45fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgbmVlZGxlclNtZzoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlciBTTUdcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcInJhcGlkU2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzcHJheVNwaGVyZVwiLCBtb3Rpb25MYW5ndWFnZTogXCJzdG9jaGFzdGljTmVlZGxlU3ByYXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcIm5lZWRsZVwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ3JlZW5cIiwgdHJhaWxDb2xvcjogXCJjeWFuXCIsIGNvcmVDb2xvcjogXCJncmVlblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLCB0cmFpbFdpZHRoU2NhbGU6IDAuMjgsIHZpc3VhbEludGVuc2l0eTogMC43OCwgbXV6emxlRWZmZWN0OiBcInJhcGlkRmxpY2tlclwiLCBpbXBhY3RFZmZlY3Q6IFwibmVlZGxlU2NhdHRlclwiLCBtdXp6bGVEdXJhdGlvbk1zOiA0NiwgaW1wYWN0RHVyYXRpb25NczogODUsIGhvcml6b250YWxKaXR0ZXI6IDcgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDo1LjI1LGRhbWFnZTouNDIscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjEwLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjM1LGhpdEZsYXNoU2NhbGU6LjQ1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjcuMjUsZGFtYWdlOi40OCxwcm9qZWN0aWxlU3BlZWQ6NzM1LHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEuNSx0cmFpbExlbmd0aDoxMSx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi40LGhpdEZsYXNoU2NhbGU6LjV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6OS4yNSxkYW1hZ2U6LjU0LHByb2plY3RpbGVTcGVlZDo3ODAscHJvamVjdGlsZVJhZGl1czoyLjE1LHNwcmVhZERlZ3JlZXM6Mix0cmFpbExlbmd0aDoxMix0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi40NSxoaXRGbGFzaFNjYWxlOi41NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1cnN0Q2FyYmluZToge1xuICAgICAgbGFiZWw6IFwiQnVyc3QgQ2FyYmluZVwiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwiYnVyc3RcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNob3J0VHJhY2VyQnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImdyb3VwZWRWb2xsZXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdvbGRcIiwgdHJhaWxDb2xvcjogXCJvcmFuZ2VcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMi4yLCB0cmFpbFdpZHRoU2NhbGU6IDAuOCwgdmlzdWFsSW50ZW5zaXR5OiAxLjA1LCBtdXp6bGVFZmZlY3Q6IFwiZ3JvdXBlZFB1bHNlXCIsIGltcGFjdEVmZmVjdDogXCJidXJzdENyb3NzXCIsIG11enpsZUR1cmF0aW9uTXM6IDg2LCBpbXBhY3REdXJhdGlvbk1zOiAxMjAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouOTUsZGFtYWdlOi43NSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6Mi43NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjcyLHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDgsZGFtYWdlOi44NSxwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6Mi44NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjY0LHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjYsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOSxwcm9qZWN0aWxlU3BlZWQ6NzI1LHByb2plY3RpbGVSYWRpdXM6MyxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU4LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGhlYXZ5Q2Fubm9uOiB7XG4gICAgICBsYWJlbDogXCJIZWF2eSBDYW5ub25cIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcImhlYXZ5U2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJwaWVyY2luZ1N0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcImNodW5reUJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic2xvd0hlYXZ5UHVuY2hcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNsdWdcIiwgcHJvamVjdGlsZUNvbG9yOiBcIm9yYW5nZVwiLCB0cmFpbENvbG9yOiBcInJlZFwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLjM1LCB0cmFpbFdpZHRoU2NhbGU6IDEuMzUsIHZpc3VhbEludGVuc2l0eTogMS4yLCBtdXp6bGVFZmZlY3Q6IFwic2hvY2tEaWFtb25kXCIsIGltcGFjdEVmZmVjdDogXCJpbXBhY3RSaW5nXCIsIG11enpsZUR1cmF0aW9uTXM6IDEzNSwgaW1wYWN0RHVyYXRpb25NczogMTkwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjcyLGRhbWFnZToyLjQscHJvamVjdGlsZVNwZWVkOjUwMCxwcm9qZWN0aWxlUmFkaXVzOjQuNSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyMixpbXBhY3RSYWRpdXM6MTQsa25vY2tiYWNrOjE0LG11enpsZUZsYXNoU2NhbGU6MS4xLGhpdEZsYXNoU2NhbGU6MS4yNX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDouODIsZGFtYWdlOjMscHJvamVjdGlsZVNwZWVkOjUzNSxwcm9qZWN0aWxlUmFkaXVzOjQuNzUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjQsaW1wYWN0UmFkaXVzOjE2LGtub2NrYmFjazoxOCxtdXp6bGVGbGFzaFNjYWxlOjEuMixoaXRGbGFzaFNjYWxlOjEuMzV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjksZGFtYWdlOjMuNixwcm9qZWN0aWxlU3BlZWQ6NTcwLHByb2plY3RpbGVSYWRpdXM6NSxwaWVyY2U6Mix0cmFpbExlbmd0aDoyNixpbXBhY3RSYWRpdXM6MTgsa25vY2tiYWNrOjIyLG11enpsZUZsYXNoU2NhbGU6MS4zLGhpdEZsYXNoU2NhbGU6MS41fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc3BsaXR0ZXJSaWZsZToge1xuICAgICAgbGFiZWw6IFwiU3BsaXR0ZXIgUmlmbGVcIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcInBhaXJlZFNwcmVhZFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwicGFpcmVkQm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjdXJyZW50TGFuZUZvcmtcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNwbGl0Qm9sdFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwidmlvbGV0XCIsIHRyYWlsQ29sb3I6IFwicGlua1wiLCBjb3JlQ29sb3I6IFwidmlvbGV0XCIsIHByb2plY3RpbGVBc3BlY3Q6IDMuNCwgdHJhaWxXaWR0aFNjYWxlOiAwLjU1LCB2aXN1YWxJbnRlbnNpdHk6IDEsIG11enpsZUVmZmVjdDogXCJ0d2luUHJvbmdzXCIsIGltcGFjdEVmZmVjdDogXCJzcGxpdFJpcHBsZVwiLCBtdXp6bGVEdXJhdGlvbk1zOiA5NSwgaW1wYWN0RHVyYXRpb25NczogMTQ1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjgscHJvamVjdGlsZVNwZWVkOjU4NSxwcm9qZWN0aWxlUmFkaXVzOjIuNzUscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczoyLjUsdHJhaWxMZW5ndGg6MTQsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6Ljk1LHByb2plY3RpbGVTcGVlZDo2MjUscHJvamVjdGlsZVJhZGl1czoyLjg1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Myx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS41NSxkYW1hZ2U6MS4wNSxwcm9qZWN0aWxlU3BlZWQ6NjY1LHByb2plY3RpbGVSYWRpdXM6Myxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMuNSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi43NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGd1bl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFNob3RQYXR0ZXJucy5pbmNsdWRlcyhndW4uc2hvdFBhdHRlcm4pLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHNob3QgcGF0dGVybi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzLmluY2x1ZGVzKGd1bi5wcm9qZWN0aWxlQmVoYXZpb3IpLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHByb2plY3RpbGUgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHByb2plY3RpbGUgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biB0cmFpbCBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyA+IDAgJiYgZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZWZmZWN0IGR1cmF0aW9ucyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgZGVmaW5lIGxldmVscy5gKTtcbiAgICAgIGZvciAoY29uc3QgdHVuaW5nIG9mIGd1bi5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5maXJlUmF0ZVBlclNlY29uZCA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gZmlyZSByYXRlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVNwZWVkID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVJhZGl1cyA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgcHJvamVjdGlsZSBwb3dlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5idXJzdENvdW50ID49IDEgJiYgdHVuaW5nLnByb2plY3RpbGVDb3VudCA+PSAxLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIGNvdW50cy5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGd1bkZhbWlseSA9IG5ldyBHdW5GYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBHdW5JZCA9IGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15U3Bhd25FbnRyYW5jZSA9IFwic2NhdHRlclwiIHwgXCJmYWRlXCI7XG5leHBvcnQgdHlwZSBFbmVteURlYXRoVmlzdWFsID0gXCJjbG91ZFwiIHwgXCJub25lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JiTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaGVhbHRoOiBudW1iZXI7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgYmFzZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICByaW1Db2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhZG93Q29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYXBlSWQ6IHN0cmluZztcbiAgZ2xvdzogbnVtYmVyO1xuICBzdXJmYWNlVGV4dHVyZTogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgaGl0Rmxhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGRlYXRoRmxhc2hTY2FsZTogbnVtYmVyO1xuICBzaGFwZVpvb206IG51bWJlcjtcbiAgaW1wYWN0UmVzaXN0YW5jZTogbnVtYmVyO1xuICBleHBsb3Npb25NYWduaXR1ZGU6IG51bWJlcjtcbiAgc3Bhd25FbnRyYW5jZTogRW5lbXlTcGF3bkVudHJhbmNlO1xuICBzcGF3blNvdW5kOiBzdHJpbmcgfCBudWxsO1xuICBkZWF0aFNvdW5kOiBzdHJpbmc7XG4gIGRlYXRoVmlzdWFsOiBFbmVteURlYXRoVmlzdWFsO1xufVxuXG5leHBvcnQgY2xhc3MgT3JiRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwib3JiXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJPcmIgRW5lbXlcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBiYXNpY09yYjoge1xuICAgICAgbGFiZWw6IFwiQmFzaWMgT3JiXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxMCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJodW50ZXItZXllXCIsXG4gICAgICBnbG93OiAwLjgyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IDAuMjgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMjUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogMC43MixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogOTAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuOCxcbiAgICAgIHNoYXBlWm9vbTogMy40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkVuZW15U3Bhd25cIixcbiAgICAgIGRlYXRoU291bmQ6IFwiRW5lbXlEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgICBnbGFzc1NoaWVsZDoge1xuICAgICAgbGFiZWw6IFwiR2xhc3MgU2hpZWxkXCIsXG4gICAgICBoZWFsdGg6IC4xLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA1LjYsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogLjEsXG4gICAgICBzY29yZTogMyxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0cmljay1nYXRlXCIsXG4gICAgICBnbG93OiAuNjIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjEyLFxuICAgICAgcmltSW50ZW5zaXR5OiAwLjksXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjQ1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA3MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS4xLFxuICAgICAgc2hhcGVab29tOiAzLjA1LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogLjY1LFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuMjUsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcImZhZGVcIixcbiAgICAgIHNwYXduU291bmQ6IG51bGwsXG4gICAgICBkZWF0aFNvdW5kOiBcIkdsYXNzU2hpZWxkU2hhdHRlclwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgd2luZ2VyOiB7XG4gICAgICBsYWJlbDogXCJXaW5nZXJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA3NixcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDE0LFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcImVsaXRlLXdpbmdzXCIsXG4gICAgICBnbG93OiAuODYsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjIyLFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjIsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjY2LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA4NSxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS43NSxcbiAgICAgIHNoYXBlWm9vbTogMy4yNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgdGFuazoge1xuICAgICAgbGFiZWw6IFwiVGFua1wiLFxuICAgICAgaGVhbHRoOiA2LFxuICAgICAgc3BlZWQ6IDQ0LFxuICAgICAgcmFkaXVzOiAxNixcbiAgICAgIGNvbHVtblNwYW46IDMsXG4gICAgICBjb250YWN0RGFtYWdlOiAyLFxuICAgICAgc2NvcmU6IDgwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRhbmstYnVua2VyXCIsXG4gICAgICBnbG93OiAxLjA1LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS40NSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuODUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMi43LFxuICAgICAgc2hhcGVab29tOiA0LjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAyLjEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC45LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkJvc3NcIixcbiAgICAgIGRlYXRoU291bmQ6IFwiQm9zc0Rlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKG9yYi5jb2x1bW5TcGFuKSAmJiBvcmIuY29sdW1uU3BhbiA+PSAxLCBgJHtpZH0gY29sdW1uU3BhbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBsZXZlbCA1IGRhbWFnZSBwZXIgaGl0LlxuICAgKlxuICAgKiBMZXZlbCAxIHVzZXMgZGFtYWdlLCBsZXZlbCA1IHVzZXMgZGFtYWdlQXRMZXZlbDUsIGFuZCBpbnRlcm1lZGlhdGUgbGV2ZWxzXG4gICAqIGludGVycG9sYXRlLiBVc2UgdGhpcyB3aGVuIGR1cGxpY2F0ZSBwaWNrdXBzIHNob3VsZCBpbmNyZWFzZSB0b3RhbCBIUFxuICAgKiBjbGVhcmVkIHdpdGhvdXQgY2hhbmdpbmcgcHJveGltaXR5IHJ1bGVzLlxuICAgKi9cbiAgZGFtYWdlQXRMZXZlbDU/OiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gbm90IGZpcmUgb24gYSB0aW1lcjsgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgdmVydGljYWwgcmVhY2ggaW4gYXV0aG9yZWQgdHJhY2sgcm93cy5cbiAgICpcbiAgICogSGVhdnkgc3dlZXBpbmcgc3dvcmRzIGNhbiB1c2UgdGhpcyB3aXRoIHJlcGVhdGVkIHBpY2t1cHM6IGxldmVsIDEgdXNlc1xuICAgKiBsZXZlbDEgcm93cywgbGV2ZWwgNSB1c2VzIGxldmVsNSByb3dzLCBhbmQgaW50ZXJtZWRpYXRlIGxldmVscyBpbnRlcnBvbGF0ZS5cbiAgICogVGhpcyBleHBhbmRzIGFmZmVjdGVkIHJvd3MgYWZ0ZXIgYSBjbG9zZSB0YXJnZXQgaXMgZm91bmQ7IGl0IGRvZXMgbm90XG4gICAqIGxvb3NlbiB0aGUgbmVhci1wbGF5ZXIgcHJveGltaXR5IHRocmVzaG9sZC5cbiAgICovXG4gIHJvd1JlYWNoPzoge1xuICAgIGxldmVsMTogbnVtYmVyO1xuICAgIGxldmVsNTogbnVtYmVyO1xuICB9O1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lOyBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIG5vdCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBSZXBlYXRlZCBwaWNrdXBzIG9mIHRoZSBzYW1lIHN3b3JkIGluY3JlYXNlIHRoYXQgc3dvcmQncyBhY3RpdmUgbGV2ZWwuXG4gICAqIC0gQ2FuIGNvZXhpc3Qgd2l0aCBhbiBhY3RpdmUgR3VuIGFuZCBhbiBhY3RpdmUgU2hpZWxkIHNpbXVsdGFuZW91c2x5LlxuICAgKiAtIFRhcmdldGluZyBpcyBsYW5lLWF3YXJlIHZpYSBxdWVyeU5lYXJieVRocmVhdHMoKS5cbiAgICogLSBUaGUgc2xhc2ggYW5pbWF0aW9uIHJ1bnMgZm9yIHNsYXNoRHVyYXRpb25NcyBtaWxsaXNlY29uZHMsIHRoZW4gZmFkZXMuXG4gICAqIC0gRGFtYWdlIGlzIGFwcGxpZWQgaW1tZWRpYXRlbHkgd2hlbiB0aGUgc3dpbmcgc3RhcnRzIChub3QgYXQgYW5pbWF0aW9uIGVuZCkuXG4gICAqXG4gICAqIFByZWNlZGVuY2U6IHN3b3JkIGF0dGFja3Mgb2NjdXIgYWZ0ZXIgc2hpZWxkQmxvY2svc2hpZWxkUHVsc2UgYnV0IGJlZm9yZVxuICAgKiBzaGllbGRDb250YWN0RGFtYWdlIGFuZCBzaGllbGRBdXJhLiBTZWUgbWFpbi50cyBuZWFyUGxheWVyRWZmZWN0T3JkZXIuXG4gICAqL1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIC8qKlxuICAgICAqIEFyYyBCbGFkZSAtIENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogU2hvcnQgY29vbGRvd24gbWFrZXMgaXQgdXNlZnVsIGFnYWluc3QgZGVuc2Ugc2luZ2xlLWxhbmUgd2F2ZXMuXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC41NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwLTE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgLSBIZWF2eSBzd29yZC4gU2xvd2VyLCBidXQgc3dlZXBzIGFjcm9zcyBldmVyeSBjb2x1bW4uXG4gICAgICogU3RhcnRzIHdpdGggMiByb3dzIG9mIHZlcnRpY2FsIHJlYWNoIGFuZCBzY2FsZXMgdG8gNCByb3dzIGF0IGxldmVsIDUuXG4gICAgICovXG4gICAgY2xlYXZlcjoge1xuICAgICAgbGFiZWw6IFwiQ2xlYXZlclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICByYW5nZTogNjgsXG4gICAgICBhcmNEZWdyZWVzOiAzNjAsXG4gICAgICBkYW1hZ2U6IDIuNCxcbiAgICAgIGRhbWFnZUF0TGV2ZWw1OiAzLjQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMzUsXG4gICAgICBtYXhUYXJnZXRzOiAxMixcbiAgICAgIHJvd1JlYWNoOiB7IGxldmVsMTogMiwgbGV2ZWw1OiA0IH0sXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMjYwLFxuICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS45LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbGwtY29sdW1uIHN3ZWVwLiBSZXBlYXRlZCBjbGVhdmVyIHBpY2t1cHMgbGV2ZWwgaXQgdXAgZnJvbSAyIHJvd3Mgb2YgcmVhY2ggdG8gNCByb3dzIGF0IGxldmVsIDUsIHdpdGggbW9yZSB0b3RhbCBkYW1hZ2UgcGVyIHN3aW5nLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSBhcyBBcnJheTxbc3RyaW5nLCBTd29yZE1lbWJlcl0+KSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQucmFuZ2UgPiAwLCBgJHtpZH0gcmFuZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5hcmNEZWdyZWVzID4gMCAmJiBzd29yZC5hcmNEZWdyZWVzIDw9IDM2MCwgYCR7aWR9IGFyY0RlZ3JlZXMgbXVzdCBiZSBpbiAoMCwgMzYwXS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2UgPiAwLCBgJHtpZH0gZGFtYWdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICBpZiAoc3dvcmQuZGFtYWdlQXRMZXZlbDUgIT09IHVuZGVmaW5lZCkgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ID49IHN3b3JkLmRhbWFnZSwgYCR7aWR9IGRhbWFnZUF0TGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgZGFtYWdlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIGlmIChzd29yZC5yb3dSZWFjaCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDEpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsMSA+PSAxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWwxIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDUpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsNSA+PSBzd29yZC5yb3dSZWFjaC5sZXZlbDEsIGAke2lkfSByb3dSZWFjaC5sZXZlbDUgbXVzdCBiZSBhdCBsZWFzdCBsZXZlbDEuYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGVnZW5kRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0JhbGFuY2Uge1xuICBlbmVteUhwOiBudW1iZXI7XG4gIGVuZW15U3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RlZmluaXRpb24ge1xuICBsYXlvdXQ6IHN0cmluZztcbiAgbGVnZW5kOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBUcmFja0xlZ2VuZEVudHJ5Pj47XG4gIGJhbGFuY2U6IFRyYWNrQmFsYW5jZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja01lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGRlZmluaXRpb246IFRyYWNrRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0ZhbWlseU1lbWJlcjxUcmFja0lkIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIHRyYWNrSWRzOiByZWFkb25seSBUcmFja0lkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkVHJhY2tFbnRpdHkge1xuICBpZDogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG4gIGxhbmVJbmRleDogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIHJvd0luZGV4OiBudW1iZXI7XG4gIGRpc3RhbmNlRnJvbVBsYXllcjogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuY29uc3QgaXNFbmVteSA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PiBpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpO1xuY29uc3QgZW5lbXlJZEZyb21UcmFja0lkID0gKGlkOiBzdHJpbmcpOiBPcmJJZCB8IG51bGwgPT4ge1xuICBpZiAoaWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY2FuZGlkYXRlID0gaWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xuICByZXR1cm4gY2FuZGlkYXRlIGluIG9yYkZhbWlseS5tZW1iZXJzID8gY2FuZGlkYXRlIGFzIE9yYklkIDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlVHJhY2tSb3dzKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgc291cmNlSW5kZXg6IG51bWJlciB9PiB7XG4gIGNvbnN0IHJvd3MgPSB0cmFjay5sYXlvdXRcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKHRleHQsIHNvdXJjZUluZGV4KSA9PiAoeyB0ZXh0OiB0ZXh0LnRyaW0oKSwgc291cmNlSW5kZXg6IHNvdXJjZUluZGV4ICsgMSB9KSlcbiAgICAuZmlsdGVyKHJvdyA9PiByb3cudGV4dC5sZW5ndGggPiAwKTtcblxuICBpZiAocm93cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxheW91dCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJvdy5cIik7XG4gIHJldHVybiByb3dzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IFBhcnNlZFRyYWNrRW50aXR5W10ge1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGZvciAoY29uc3QgW3N5bWJvbCwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKHRyYWNrLmxlZ2VuZCkpIHtcbiAgICBpZiAoWy4uLnN5bWJvbF0ubGVuZ3RoICE9PSAxIHx8IC9cXHN8XFx8Ly50ZXN0KHN5bWJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIGtleSBcIiR7c3ltYm9sfVwiIG11c3QgYmUgb25lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBvdGhlciB0aGFuIFwifFwiLmApO1xuICAgIH1cbiAgICBpZiAoIWVudHJ5LmlkKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBtdXN0IGhhdmUgYW4gaWQuYCk7XG4gICAgaWYgKGVudHJ5LnNwZWVkICE9PSB1bmRlZmluZWQgJiYgZW50cnkuc3BlZWQgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb3dzID0gcGFyc2VUcmFja1Jvd3ModHJhY2spO1xuICBsZXQgbGVmdFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxldCByaWdodFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG5cbiAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgcGlwZUNvdW50ID0gWy4uLnJvdy50ZXh0XS5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3RlciA9PT0gXCJ8XCIpLmxlbmd0aDtcbiAgICBpZiAocGlwZUNvdW50ICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgXCJ8XCIgc2VwYXJhdG9yOyBmb3VuZCAke3BpcGVDb3VudH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHJvdy50ZXh0LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgbGVmdFdpZHRoID8/PSBsZWZ0Lmxlbmd0aDtcbiAgICByaWdodFdpZHRoID8/PSByaWdodC5sZW5ndGg7XG5cbiAgICBpZiAobGVmdC5sZW5ndGggIT09IGxlZnRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIGxlZnQgd2lkdGggJHtsZWZ0Lmxlbmd0aH07IGV4cGVjdGVkICR7bGVmdFdpZHRofS5gKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0Lmxlbmd0aCAhPT0gcmlnaHRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIHJpZ2h0IHdpZHRoICR7cmlnaHQubGVuZ3RofTsgZXhwZWN0ZWQgJHtyaWdodFdpZHRofS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0YW5jZUZyb21QbGF5ZXIgPSByb3dzLmxlbmd0aCAtIDEgLSByb3dJbmRleDtcbiAgICBmb3IgKGNvbnN0IFtzaWRlLCBsYW5lXSBvZiBbW1wibGVmdFwiLCBsZWZ0XSwgW1wicmlnaHRcIiwgcmlnaHRdXSBhcyBjb25zdCkge1xuICAgICAgY29uc3Qgb2NjdXBpZWRCeSA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoZW50cnkuaWQpO1xuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gZW5lbXlJZCA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdLmNvbHVtblNwYW4gOiAxO1xuICAgICAgICBpZiAobGFuZUluZGV4ICsgY29sdW1uU3BhbiA+IGxhbmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBuZWVkcyAke2NvbHVtblNwYW59IGNvbHVtbnMgYW5kIG9ubHkgJHtsYW5lLmxlbmd0aCAtIGxhbmVJbmRleH0gcmVtYWluLmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSB7XG4gICAgICAgICAgY29uc3Qgb2NjdXBpZWQgPSBvY2N1cGllZEJ5LmdldChsYW5lSW5kZXggKyBvZmZzZXQpO1xuICAgICAgICAgIGlmIChvY2N1cGllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IG9uICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleCArIG9mZnNldH0sIGFscmVhZHkgb2NjdXBpZWQgYnkgJHtvY2N1cGllZH0uYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSBvY2N1cGllZEJ5LnNldChsYW5lSW5kZXggKyBvZmZzZXQsIGVudHJ5LmlkKTtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIGNvbHVtblNwYW4sXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZGlzdGFuY2VGcm9tUGxheWVyLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogKGVudHJ5LnNwZWVkID8/IDEpICogKGlzRW5lbXkoZW50cnkuaWQpID8gdHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDogMSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRpZXMuc29ydCgoYSwgYikgPT5cbiAgICBhLmRpc3RhbmNlRnJvbVBsYXllciAtIGIuZGlzdGFuY2VGcm9tUGxheWVyIHx8XG4gICAgYS5yb3dJbmRleCAtIGIucm93SW5kZXggfHxcbiAgICBhLnNpZGUubG9jYWxlQ29tcGFyZShiLnNpZGUpIHx8XG4gICAgYS5sYW5lSW5kZXggLSBiLmxhbmVJbmRleCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgZ3VuRmFtaWx5IH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4vTXVsdGlwbGllckZhbWlseVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5IH0gZnJvbSBcIi4vT3JiRmFtaWx5XCI7XG5pbXBvcnQgeyBzaGllbGRGYW1pbHkgfSBmcm9tIFwiLi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB7IHN3b3JkRmFtaWx5IH0gZnJvbSBcIi4vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uLCB0eXBlIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbi8qKlxuICogR2xvYmFsIDAtYmFzZWQgY29sdW1uIGluZGV4IGFjcm9zcyBib3RoIGxhbmVzLlxuICpcbiAqIEN1cnJlbnQgbGF5b3V0IHNoYXBlOlxuICogLSBjb2x1bW5zIDAtNCBhcmUgdGhlIGxlZnQgbGFuZVxuICogLSBjb2x1bW5zIDUtOSBhcmUgdGhlIHJpZ2h0IGxhbmVcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC0gMiA9IGxlZnQgbGFuZSBtaWRkbGVcbiAqIC0gNyA9IHJpZ2h0IGxhbmUgbWlkZGxlXG4gKi9cbmV4cG9ydCB0eXBlIFRyYWNrQ29sdW1uID0gbnVtYmVyO1xuXG4vKipcbiAqIEZyaWVuZGx5IGNvbHVtbiBjb25zdGFudHMgZm9yIHRoZSBjdXJyZW50IDItbGFuZSAvIDUtY29sdW1uIHRyYWNrIGZvcm1hdC5cbiAqXG4gKiBUaGVzZSBhcmUgb25seSBzdWdhci4gVGhlIGJ1aWxkZXIgc3RpbGwgYWNjZXB0cyByYXcgbnVtYmVycyBmb3IgZmFzdCBhdXRob3JpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tDb2x1bW5zIHtcbiAgcmVhZG9ubHkgbGVmdDoge1xuICAgIHJlYWRvbmx5IG91dGVyOiAwO1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogMTtcbiAgICByZWFkb25seSBtaWQ6IDI7XG4gICAgcmVhZG9ubHkgbmVhcklubmVyOiAzO1xuICAgIHJlYWRvbmx5IGlubmVyOiA0O1xuICB9O1xuICByZWFkb25seSByaWdodDoge1xuICAgIHJlYWRvbmx5IGlubmVyOiA1O1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogNjtcbiAgICByZWFkb25seSBtaWQ6IDc7XG4gICAgcmVhZG9ubHkgbmVhck91dGVyOiA4O1xuICAgIHJlYWRvbmx5IG91dGVyOiA5O1xuICB9O1xufVxuXG4vKipcbiAqIENvbW1vbiBleHBvcnRlZCBjb2x1bW4gY29uc3RhbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqIGJ1aWxkZXIuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KVxuICogYnVpbGRlci53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGM6IFRyYWNrQ29sdW1ucyA9IHtcbiAgbGVmdDogeyBvdXRlcjogMCwgbmVhck91dGVyOiAxLCBtaWQ6IDIsIG5lYXJJbm5lcjogMywgaW5uZXI6IDQgfSxcbiAgcmlnaHQ6IHsgaW5uZXI6IDUsIG5lYXJJbm5lcjogNiwgbWlkOiA3LCBuZWFyT3V0ZXI6IDgsIG91dGVyOiA5IH0sXG59O1xuXG5leHBvcnQgdHlwZSBUcmFja0VuZW15UmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tXZWFwb25SZWYgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBUcmFja1BpY2t1cFJlZiA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1BsYWNlbWVudE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICAvKipcbiAgICogT3B0aW9uYWwgcGVyLXN5bWJvbCBzcGVlZCBtdWx0aXBsaWVyIGVtaXR0ZWQgaW50byB0aGUgdHJhY2sgbGVnZW5kLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFRoZSBkZWZhdWx0IGlzIDEsIGFuZCBmdXR1cmUgdHJhY2sgZWRpdHNcbiAgICogc2hvdWxkIHByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseSBhc2tzIGZvciBzcGVlZCB0dW5pbmcuXG4gICAqIENoYW5naW5nIHRoaXMgdmFsdWUgaXMgYSBzaWduaWZpY2FudCBiYWxhbmNlIGNoYW5nZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGluZU9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyB7XG4gIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW107XG4gIGNvdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbXB0eSByb3dzIGJldHdlZW4gZWFjaCBlbmVteS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMC4gSW4gcHJlc3N1cmUgc2VjdGlvbnMsIG9taXQgdGhpcyB1bmxlc3MgdGhlIGdhcCBpc1xuICAgKiBpbnRlbnRpb25hbDsgcHJlc3N1cmUgc2hvdWxkIG5vcm1hbGx5IHBsYWNlIGVuZW1pZXMgZXZlcnkgcm93LlxuICAgKi9cbiAgZ2FwPzogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgcmVwZWF0ZWQgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrV2FsbE9wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgd2FsbC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRHJpcE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICByb3dzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQbGFjZSBvbmUgZW5lbXkgZXZlcnkgTiByb3dzLlxuICAgKlxuICAgKiBEcmlwIGlzIGludGVudGlvbmFsbHkgc3BhcnNlLiBQcmVmZXIgbGluZS9hbHRlcm5hdGluZyB3aXRob3V0IGEgZ2FwIGZvclxuICAgKiBub3JtYWwgcHJlc3N1cmUsIGFuZCB1c2UgZHJpcCBvbmx5IHdoZW4gdGhlIHNwYXJzZSBjYWRlbmNlIGlzIGRlbGliZXJhdGUuXG4gICAqL1xuICBldmVyeTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgZHJpcCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgYmFsYW5jZToge1xuICAgIGVuZW15SHA6IG51bWJlcjtcbiAgICBlbmVteVNwZWVkOiBudW1iZXI7XG4gIH07XG4gIHBsYXllclN0YXJ0Q29sdW1uPzogVHJhY2tDb2x1bW47XG4gIGxhbmVXaWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXIge1xuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWR2YW5jZVJvd3Mocm93czogbnVtYmVyKTogVHJhY2tCdWlsZGVyO1xuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICAvKipcbiAgICogQWRkIGEgZGFuZ2VyLWZvY3VzZWQgc2VjdGlvbiB3aXRoIGEgZml4ZWQgZHVyYXRpb24uXG4gICAqXG4gICAqIFByZXNzdXJlIHNob3VsZCB1c3VhbGx5IGNvbnRhaW4gZW5lbXkgcGxhY2VtZW50IGV2ZXJ5IHJvdy4gVXNlIGV4cGxpY2l0XG4gICAqIGdhcHMgb3IgZHJpcCBwYXR0ZXJucyBvbmx5IHdoZW4gdGhlIHF1aWV0IHNwYWNlIGlzIGludGVudGlvbmFsLlxuICAgKi9cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBidWlsZCgpOiBUcmFja01lbWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJGYWN0b3J5IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG59XG5cbmludGVyZmFjZSBQbGFjZW1lbnQge1xuICByb3c6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHNwYW46IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdExhbmVXaWR0aCA9IDU7XG5jb25zdCBlbXB0eVN5bWJvbCA9IFwiLlwiO1xuY29uc3QgcGxheWVyU3ltYm9sID0gXCJNXCI7XG5jb25zdCBlbmVteUFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBiYXNpYzogXCJlbmVteS5iYXNpY1wiLFxuICBiYXNpY09yYjogXCJlbmVteS5iYXNpY09yYlwiLFxuICBnbGFzczogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICBnbGFzc1NoaWVsZDogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICB3aW5nZXI6IFwiZW5lbXkud2luZ2VyXCIsXG4gIHRhbms6IFwiZW5lbXkudGFua1wiLFxufTtcbmNvbnN0IHdlYXBvblByZWZpeGVzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgZ3VuOiBcInBpY2t1cC53ZWFwb24uZ3VuLlwiLFxuICBzaGllbGQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIsXG4gIHN3b3JkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsXG59O1xuY29uc3QgcGlja3VwQWxpYXNlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwidW5pdE11bHRpcGxpZXIuMnhcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbiAgXCJ1bml0TXVsdGlwbGllci5zcXVhZFBsdXNPbmVcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbn07XG5jb25zdCBwcmVmZXJyZWRTeW1ib2xzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgXCJlbmVteS5iYXNpY1wiOiBcIkVcIixcbiAgXCJlbmVteS5iYXNpY09yYlwiOiBcIkVcIixcbiAgXCJlbmVteS5nbGFzc1NoaWVsZFwiOiBcIkRcIixcbiAgXCJlbmVteS53aW5nZXJcIjogXCJXXCIsXG4gIFwiZW5lbXkudGFua1wiOiBcIlRcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiOiBcIkdcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5uZWVkbGVyU21nXCI6IFwiTlwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiOiBcIkJcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiOiBcIkhcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5zcGxpdHRlclJpZmxlXCI6IFwiUlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIjogXCJTXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuc2F0ZWxsaXRlR3VhcmRcIjogXCJWXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIjogXCJYXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiOiBcImFcIixcbiAgXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIjogXCJjXCIsXG4gIFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwiMlwiLFxufTtcbmNvbnN0IGZhbGxiYWNrU3ltYm9scyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2Nzg5ISMkJSYqKywtLzo7PD0+P0BeX35cIi5zcGxpdChcIlwiKVxuICAuZmlsdGVyKHN5bWJvbCA9PiBzeW1ib2wgIT09IGVtcHR5U3ltYm9sICYmIHN5bWJvbCAhPT0gcGxheWVyU3ltYm9sKTtcblxuZnVuY3Rpb24gcmVxdWlyZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIU51bWJlci5pc0ludGVnZXIodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgYW4gaW50ZWdlci5gKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih2YWx1ZTogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHJlcXVpcmVJbnRlZ2VyKHZhbHVlLCBsYWJlbCk7XG4gIGlmICh2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNwZWVkKHNwZWVkOiBudW1iZXIgfCB1bmRlZmluZWQsIGxhYmVsOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZSA9IHNwZWVkID8/IDE7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRW5lbXlJZChpZDogVHJhY2tFbmVteVJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBlbmVteUFsaWFzZXNbaWRdID8/IGBlbmVteS4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdlYXBvbklkKGlkOiBUcmFja1dlYXBvblJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5cIikpIHJldHVybiBpZDtcbiAgY29uc3QgZG90SW5kZXggPSBpZC5pbmRleE9mKFwiLlwiKTtcbiAgaWYgKGRvdEluZGV4IDw9IDApIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBtdXN0IHVzZSBmYW1pbHkuaWQgc2hvcnRoYW5kIG9yIGEgY2Fub25pY2FsIHBpY2t1cC53ZWFwb24gaWQuYCk7XG4gIGNvbnN0IGZhbWlseSA9IGlkLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgY29uc3QgbWVtYmVyID0gaWQuc2xpY2UoZG90SW5kZXggKyAxKTtcbiAgY29uc3QgcHJlZml4ID0gd2VhcG9uUHJlZml4ZXNbZmFtaWx5XTtcbiAgaWYgKCFwcmVmaXgpIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBoYXMgdW5rbm93biB3ZWFwb24gZmFtaWx5IFwiJHtmYW1pbHl9XCIuYCk7XG4gIHJldHVybiBgJHtwcmVmaXh9JHttZW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGlja3VwSWQoaWQ6IFRyYWNrUGlja3VwUmVmKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBwaWNrdXBBbGlhc2VzW2lkXSA/PyBgcGlja3VwLiR7aWR9YDtcbn1cblxuZnVuY3Rpb24gZW5lbXlNZW1iZXJJZChjYW5vbmljYWxJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChjYW5vbmljYWxJZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWNhbm9uaWNhbElkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICByZXR1cm4gY2Fub25pY2FsSWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICBpZiAoZW5lbXlJZCkge1xuICAgIGlmICghKGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZW5lbXkgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWxpZGF0b3JzOiByZWFkb25seSBbc3RyaW5nLCBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIHN0cmluZ11bXSA9IFtcbiAgICBbXCJwaWNrdXAud2VhcG9uLmd1bi5cIiwgZ3VuRmFtaWx5Lm1lbWJlcnMsIFwiZ3VuXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLCBzaGllbGRGYW1pbHkubWVtYmVycywgXCJzaGllbGRcIl0sXG4gICAgW1wicGlja3VwLndlYXBvbi5zd29yZC5cIiwgc3dvcmRGYW1pbHkubWVtYmVycywgXCJzd29yZFwiXSxcbiAgXTtcbiAgZm9yIChjb25zdCBbcHJlZml4LCBtZW1iZXJzLCBsYWJlbF0gb2YgdmFsaWRhdG9ycykge1xuICAgIGlmICghaWQuc3RhcnRzV2l0aChwcmVmaXgpKSBjb250aW51ZTtcbiAgICBjb25zdCBtZW1iZXJJZCA9IGlkLnNsaWNlKHByZWZpeC5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gJHtsYWJlbH0gaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHJldHVybjtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShcInBpY2t1cC51bml0TXVsdGlwbGllci5cIi5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtdWx0aXBsaWVyIGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCB0cmFjayBlbnRpdHkgaWQgXCIke2lkfVwiLmApO1xufVxuXG5mdW5jdGlvbiBzcGFuRm9yKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlNZW1iZXJJZChpZCk7XG4gIHJldHVybiBlbmVteUlkICYmIGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkIGFzIGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVyc10uY29sdW1uU3BhbiA6IDE7XG59XG5cbmNsYXNzIFRyYWNrQnVpbGRlckNvcmUge1xuICBwcml2YXRlIHJlYWRvbmx5IGxhbmVXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IHBsYWNlbWVudHM6IFBsYWNlbWVudFtdID0gW107XG4gIHByaXZhdGUgY3Vyc29yID0gMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpIHtcbiAgICB0aGlzLmxhbmVXaWR0aCA9IG9wdGlvbnMubGFuZVdpZHRoID8/IGRlZmF1bHRMYW5lV2lkdGg7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih0aGlzLmxhbmVXaWR0aCwgXCJUcmFjayBsYW5lV2lkdGhcIik7XG4gICAgaWYgKHRoaXMubGFuZVdpZHRoIDwgMykgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFuZVdpZHRoIG11c3QgYmUgYXQgbGVhc3QgMy5cIik7XG4gICAgaWYgKCFvcHRpb25zLmxhYmVsLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFiZWwgaXMgcmVxdWlyZWQuXCIpO1xuICAgIGlmICghb3B0aW9ucy5kZXNjcmlwdGlvbi50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIGlmIChvcHRpb25zLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLnBsYXllclN0YXJ0Q29sdW1uID8/IGMubGVmdC5taWQsIFwicGxheWVyU3RhcnRDb2x1bW5cIiwgMSk7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwiZW5lbXlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVdlYXBvbklkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwid2VhcG9uXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcInBpY2t1cFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkdmFuY2VSb3dzKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIocm93cywgXCJhZHZhbmNlUm93cyByb3dzXCIpO1xuICAgIHRoaXMuY3Vyc29yICs9IHJvd3M7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmFkdmFuY2VSb3dzKHJvd3MpO1xuICB9XG5cbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgaWYgKCFuYW1lLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgc2VjdGlvbiBuYW1lIGlzIHJlcXVpcmVkLlwiKTtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIGBUcmFjayBzZWN0aW9uIFwiJHtuYW1lfVwiIHJvd3NgKTtcbiAgICBjb25zdCBzZWN0aW9uID0gbmV3IFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlKHRoaXMsIG5hbWUsIHRoaXMuY3Vyc29yLCByb3dzKTtcbiAgICBidWlsZChzZWN0aW9uKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicHJlc3N1cmVcIiwgcm93cywgYnVpbGQpO1xuICB9XG5cbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLnNlY3Rpb24oXCJyZWJ1aWxkXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkTGluZSh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJsaW5lXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZEFsdGVybmF0aW5nKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImFsdGVybmF0aW5nXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRXYWxsKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcIndhbGxcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZERyaXAodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwiZHJpcFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFNlY3Rpb25FbmVteShiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGVuZW15YCk7XG4gIH1cblxuICBhZGRTZWN0aW9uV2VhcG9uKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiB3ZWFwb25gKTtcbiAgfVxuXG4gIGFkZFNlY3Rpb25QaWNrdXAoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVBpY2t1cElkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBpY2t1cGApO1xuICB9XG5cbiAgYWRkTGluZShiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICByZXF1aXJlSW50ZWdlcihnYXAsIGAke2xhYmVsfSBnYXBgKTtcbiAgICBpZiAoZ2FwIDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBnYXAgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQWx0ZXJuYXRpbmcoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmNvdW50LCBgJHtsYWJlbH0gY291bnRgKTtcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBjb2x1bW5zIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgY29sdW1uLmApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gb3B0aW9ucy5jb2x1bW5zW2luZGV4ICUgb3B0aW9ucy5jb2x1bW5zLmxlbmd0aF07XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgaW5kZXggKiAoZ2FwICsgMSksIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGRXYWxsKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBvcHRpb25zLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3csIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGREcmlwKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLnJvd3MsIGAke2xhYmVsfSByb3dzYCk7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmV2ZXJ5LCBgJHtsYWJlbH0gZXZlcnlgKTtcbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBvcHRpb25zLnJvd3M7IG9mZnNldCArPSBvcHRpb25zLmV2ZXJ5KSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIG9mZnNldCwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkKCk6IFRyYWNrTWVtYmVyIHtcbiAgICBjb25zdCBwbGF5ZXJTdGFydENvbHVtbiA9IHRoaXMub3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkO1xuICAgIGNvbnN0IG1heFBsYWNlbWVudFJvdyA9IHRoaXMucGxhY2VtZW50cy5yZWR1Y2UoKG1heCwgaXRlbSkgPT4gTWF0aC5tYXgobWF4LCBpdGVtLnJvdyksIDApO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5tYXgodGhpcy5jdXJzb3IsIG1heFBsYWNlbWVudFJvdyArIDEsIDEpO1xuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmxhbmVXaWR0aCAqIDIgfSwgKCkgPT4gZW1wdHlTeW1ib2wpKTtcbiAgICBjb25zdCBvY2N1cGllZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sICgpID0+IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCkpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IG5ldyBNYXA8c3RyaW5nLCB7IGlkOiBzdHJpbmc7IHNwZWVkOiBudW1iZXIgfT4oKTtcbiAgICBsZWdlbmQuc2V0KGVtcHR5U3ltYm9sLCB7IGlkOiBcImVtcHR5XCIsIHNwZWVkOiAxIH0pO1xuICAgIGxlZ2VuZC5zZXQocGxheWVyU3ltYm9sLCB7IGlkOiBcInBsYXllci5zdGFydFwiLCBzcGVlZDogMSB9KTtcbiAgICBjb25zdCB1c2VkU3ltYm9scyA9IG5ldyBTZXQoW2VtcHR5U3ltYm9sLCBwbGF5ZXJTeW1ib2xdKTtcbiAgICBjb25zdCBzeW1ib2xCeUVudGl0eSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgY29uc3QgcGxheWVyQ2VsbHMgPSB0aGlzLmNlbGxzRm9yKHBsYXllclN0YXJ0Q29sdW1uLCAxKTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIG9jY3VwaWVkWzBdLnNldChjZWxsLmdsb2JhbENvbHVtbiwgXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgcm93c1swXVtwbGF5ZXJTdGFydENvbHVtbl0gPSBwbGF5ZXJTeW1ib2w7XG5cbiAgICBmb3IgKGNvbnN0IHBsYWNlbWVudCBvZiB0aGlzLnBsYWNlbWVudHMpIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuc3ltYm9sRm9yKHBsYWNlbWVudCwgdXNlZFN5bWJvbHMsIHN5bWJvbEJ5RW50aXR5KTtcbiAgICAgIGxlZ2VuZC5zZXQoc3ltYm9sLCB7IGlkOiBwbGFjZW1lbnQuaWQsIHNwZWVkOiBwbGFjZW1lbnQuc3BlZWQgfSk7XG4gICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGhpcy5jZWxsc0ZvcihwbGFjZW1lbnQuY29sdW1uLCBwbGFjZW1lbnQuc3BhbikpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvY2N1cGllZFtwbGFjZW1lbnQucm93XS5nZXQoY2VsbC5nbG9iYWxDb2x1bW4pO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHBsYWNlbWVudCBvdmVybGFwIGF0IHJvdyAke3BsYWNlbWVudC5yb3d9LCBjb2x1bW4gJHtjZWxsLmdsb2JhbENvbHVtbn0uIEV4aXN0aW5nIGlkIFwiJHtleGlzdGluZ31cIiwgbmV3IGlkIFwiJHtwbGFjZW1lbnQuaWR9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uc2V0KGNlbGwuZ2xvYmFsQ29sdW1uLCBwbGFjZW1lbnQuaWQpO1xuICAgICAgfVxuICAgICAgcm93c1twbGFjZW1lbnQucm93XVtwbGFjZW1lbnQuY29sdW1uXSA9IHN5bWJvbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0ge1xuICAgICAgbGF5b3V0OiBgXFxuJHtyb3dzLnNsaWNlKCkucmV2ZXJzZSgpLm1hcChyb3cgPT4gYCR7cm93LnNsaWNlKDAsIHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfSB8ICR7cm93LnNsaWNlKHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfWApLmpvaW4oXCJcXG5cIil9XFxuYCxcbiAgICAgIGxlZ2VuZDogT2JqZWN0LmZyb21FbnRyaWVzKFsuLi5sZWdlbmQuZW50cmllcygpXS5tYXAoKFtzeW1ib2wsIGVudHJ5XSkgPT4gW1xuICAgICAgICBzeW1ib2wsXG4gICAgICAgIGVudHJ5LnNwZWVkID09PSAxID8geyBpZDogZW50cnkuaWQgfSA6IHsgaWQ6IGVudHJ5LmlkLCBzcGVlZDogZW50cnkuc3BlZWQgfSxcbiAgICAgIF0pKSxcbiAgICAgIGJhbGFuY2U6IHRoaXMub3B0aW9ucy5iYWxhbmNlLFxuICAgIH07XG4gICAgcGFyc2VUcmFja0RlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLm9wdGlvbnMubGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5vcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgZW52aXJvbm1lbnQ6IHRoaXMub3B0aW9ucy5lbnZpcm9ubWVudCxcbiAgICAgIGRlZmluaXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIHZhbGlkYXRlU2VjdGlvbk9mZnNldChzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93T2Zmc2V0LCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcm93IG9mZnNldGApO1xuICAgIGlmIChyb3dPZmZzZXQgPCAwIHx8IHJvd09mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXQgJHtyb3dPZmZzZXR9IGlzIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25TcGFuKHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCByb3dzOiBudW1iZXIsIGNvdmVyZWRSb3dzOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKGNvdmVyZWRSb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgY292ZXJlZCByb3dzYCk7XG4gICAgdGhpcy52YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWUsIHJvd09mZnNldCwgcm93cyk7XG4gICAgY29uc3QgbGFzdE9mZnNldCA9IHJvd09mZnNldCArIGNvdmVyZWRSb3dzIC0gMTtcbiAgICBpZiAobGFzdE9mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBhdHRlcm4gcmVhY2hlcyByb3cgb2Zmc2V0ICR7bGFzdE9mZnNldH0sIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBsYWNlKGlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucywgcm93OiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihyb3csIGAke2xhYmVsfSByb3dgKTtcbiAgICBpZiAocm93IDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSByb3cgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIHZhbGlkYXRlQ2Fub25pY2FsSWQoaWQpO1xuICAgIGNvbnN0IHNwYW4gPSBzcGFuRm9yKGlkKTtcbiAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKG9wdGlvbnMuY29sdW1uLCBgJHtsYWJlbH0gY29sdW1uYCwgc3Bhbik7XG4gICAgdGhpcy5wbGFjZW1lbnRzLnB1c2goe1xuICAgICAgcm93LFxuICAgICAgY29sdW1uOiBvcHRpb25zLmNvbHVtbixcbiAgICAgIGlkLFxuICAgICAgc3BlZWQ6IG5vcm1hbGl6ZVNwZWVkKG9wdGlvbnMuc3BlZWQsIGxhYmVsKSxcbiAgICAgIHNwYW4sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlQ29sdW1uKGNvbHVtbjogVHJhY2tDb2x1bW4sIGxhYmVsOiBzdHJpbmcsIHNwYW46IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKGNvbHVtbiwgbGFiZWwpO1xuICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmxhbmVXaWR0aCAqIDI7XG4gICAgaWYgKGNvbHVtbiA8IDAgfHwgY29sdW1uID49IHRvdGFsV2lkdGgpIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gJHtjb2x1bW59IGlzIG91dHNpZGUgdGhlIDAtJHt0b3RhbFdpZHRoIC0gMX0gdHJhY2sgcmFuZ2UuYCk7XG4gICAgY29uc3Qgc2lkZUNvbHVtbiA9IGNvbHVtbiAlIHRoaXMubGFuZVdpZHRoO1xuICAgIGlmIChzaWRlQ29sdW1uICsgc3BhbiA+IHRoaXMubGFuZVdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBjYW5ub3QgZml0IGEgJHtzcGFufS1jb2x1bW4gZW50aXR5IGluc2lkZSBhICR7dGhpcy5sYW5lV2lkdGh9LWNvbHVtbiBsYW5lLmApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbHNGb3IoY29sdW1uOiBudW1iZXIsIHNwYW46IG51bWJlcik6IEFycmF5PHsgZ2xvYmFsQ29sdW1uOiBudW1iZXIgfT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzcGFuIH0sIChfLCBvZmZzZXQpID0+ICh7IGdsb2JhbENvbHVtbjogY29sdW1uICsgb2Zmc2V0IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgc3ltYm9sRm9yKHBsYWNlbWVudDogUGxhY2VtZW50LCB1c2VkU3ltYm9sczogU2V0PHN0cmluZz4sIHN5bWJvbEJ5RW50aXR5OiBNYXA8c3RyaW5nLCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgICBjb25zdCBrZXkgPSBgJHtwbGFjZW1lbnQuaWR9QCR7cGxhY2VtZW50LnNwZWVkfWA7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBzeW1ib2xCeUVudGl0eS5nZXQoa2V5KTtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgICBjb25zdCBwcmVmZXJyZWQgPSBwcmVmZXJyZWRTeW1ib2xzW3BsYWNlbWVudC5pZF07XG4gICAgY29uc3Qgc3ltYm9sID0gcHJlZmVycmVkICYmICF1c2VkU3ltYm9scy5oYXMocHJlZmVycmVkKVxuICAgICAgPyBwcmVmZXJyZWRcbiAgICAgIDogZmFsbGJhY2tTeW1ib2xzLmZpbmQoY2FuZGlkYXRlID0+ICF1c2VkU3ltYm9scy5oYXMoY2FuZGlkYXRlKSk7XG4gICAgaWYgKCFzeW1ib2wpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJ1aWxkZXIgcmFuIG91dCBvZiBvbmUtY2hhcmFjdGVyIGxlZ2VuZCBzeW1ib2xzLlwiKTtcbiAgICB1c2VkU3ltYm9scy5hZGQoc3ltYm9sKTtcbiAgICBzeW1ib2xCeUVudGl0eS5zZXQoa2V5LCBzeW1ib2wpO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cbn1cblxuY2xhc3MgVHJhY2tTZWN0aW9uQnVpbGRlckNvcmUgaW1wbGVtZW50cyBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgcHJpdmF0ZSByb3dPZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBUcmFja0J1aWxkZXJDb3JlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVJvdzogbnVtYmVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm93czogbnVtYmVyLFxuICApIHt9XG5cbiAgYXQocm93T2Zmc2V0OiBudW1iZXIpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25PZmZzZXQodGhpcy5uYW1lLCByb3dPZmZzZXQsIHRoaXMucm93cyk7XG4gICAgdGhpcy5yb3dPZmZzZXQgPSByb3dPZmZzZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbkVuZW15KHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbldlYXBvbih0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25QaWNrdXAodGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkTGluZSh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBsaW5lYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIChvcHRpb25zLmNvdW50IC0gMSkgKiAoZ2FwICsgMSkgKyAxKTtcbiAgICB0aGlzLnBhcmVudC5hZGRBbHRlcm5hdGluZyh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBhbHRlcm5hdGluZ2ApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkV2FsbCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiB3YWxsYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgb3B0aW9ucy5yb3dzKTtcbiAgICB0aGlzLnBhcmVudC5hZGREcmlwKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGRyaXBgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tCdWlsZGVyOiBUcmFja0J1aWxkZXJGYWN0b3J5ID0ge1xuICBjcmVhdGUob3B0aW9uczogVHJhY2tCdWlsZGVyT3B0aW9ucyk6IFRyYWNrQnVpbGRlciB7XG4gICAgcmV0dXJuIG5ldyBUcmFja0J1aWxkZXJDb3JlKG9wdGlvbnMpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBjLCB0cmFja0J1aWxkZXIsIHR5cGUgVHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrU2VjdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi4vVHJhY2tCdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBUcmFja1RoZW1lSWQgPSBcImd1blNjaG9vbFwiIHwgXCJndWFyZEJsYWRlc1wiIHwgXCJjcnlzdGFsU2llZ2VcIiB8IFwic3dhcm1CbG9vbVwiIHwgXCJtaXJyb3JBcnJheVwiO1xuZXhwb3J0IHR5cGUgVHJhY2tUaWVyID0gMSB8IDIgfCAzO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2VkVHJhY2tPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHRoZW1lOiBUcmFja1RoZW1lSWQ7XG4gIHRpZXI6IFRyYWNrVGllcjtcbn1cblxuaW50ZXJmYWNlIFRyYWNrQnVpbGRDb250ZXh0IHtcbiAgcmVhZG9ubHkgdGllcjogVHJhY2tUaWVyO1xuICByZWFkb25seSBjdXJzb3I6IG51bWJlcjtcbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdm9pZDtcbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVGhlbWVQbGFuIHtcbiAgZmluYWxSb3dzOiBudW1iZXI7XG4gIG9wZW4oY29udGV4dDogVHJhY2tCdWlsZENvbnRleHQpOiB2b2lkO1xuICBjeWNsZShjb250ZXh0OiBUcmFja0J1aWxkQ29udGV4dCwgY3ljbGVJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgZmluaXNoKGNvbnRleHQ6IFRyYWNrQnVpbGRDb250ZXh0LCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkO1xufVxuXG5jb25zdCB0YXJnZXRSb3dzQnlUaWVyOiBSZWNvcmQ8VHJhY2tUaWVyLCBudW1iZXI+ID0ge1xuICAxOiAxMDUsXG4gIDI6IDI2NSxcbiAgMzogNDI1LFxufTtcblxuY29uc3QgZW5lbXlIcEJ5VGllcjogUmVjb3JkPFRyYWNrVGllciwgbnVtYmVyPiA9IHtcbiAgMTogMSxcbiAgMjogMSxcbiAgMzogMSxcbn07XG5cbmNvbnN0IHBpY2sgPSA8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiBUID0+XG4gIGl0ZW1zW01hdGgubWluKGl0ZW1zLmxlbmd0aCAtIDEsIHRpZXIgLSAxICsgY3ljbGVJbmRleCAlIDIpXTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChidWlsZGVyOiBUcmFja0J1aWxkZXIsIHRpZXI6IFRyYWNrVGllcik6IFRyYWNrQnVpbGRDb250ZXh0IHtcbiAgbGV0IGN1cnNvciA9IDE7XG4gIHJldHVybiB7XG4gICAgdGllcixcbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgcmV0dXJuIGN1cnNvcjtcbiAgICB9LFxuICAgIHJlYnVpbGQocm93cywgYnVpbGQpIHtcbiAgICAgIGJ1aWxkZXIucmVidWlsZChyb3dzLCBidWlsZCk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICAgIHByZXNzdXJlKHJvd3MsIGJ1aWxkKSB7XG4gICAgICBidWlsZGVyLnByZXNzdXJlKHJvd3MsIGJ1aWxkKTtcbiAgICAgIGN1cnNvciArPSByb3dzO1xuICAgIH0sXG4gICAgcmVzcGl0ZShyb3dzKSB7XG4gICAgICBidWlsZGVyLnJlc3BpdGUocm93cyk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMjIgfSk7XG4gIHNlY3Rpb24uYXQoMjIpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDEyIH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMSkuZHJpcChcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgcm93czogMzQsIGV2ZXJ5OiA2IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMzQpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDggfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoNikuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5yaWdodC5pbm5lciwgYy5sZWZ0LmlubmVyXSwgY291bnQ6IDgsIGdhcDogMyB9KTtcbiAgaWYgKHRpZXIgPj0gMyAmJiBjeWNsZUluZGV4ID4gMCkge1xuICAgIHNlY3Rpb24uYXQoMjQpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbiAgICBzZWN0aW9uLmF0KDI4KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXJdIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGd1YXJkQmxhZGVQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBoYXNDbGVhdmVyU2V0dXAgPSB0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDA7XG4gIHNlY3Rpb24uYXQoMCkubGluZShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgY291bnQ6IDE4IH0pO1xuICBzZWN0aW9uLmF0KDE4KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IGhhc0NsZWF2ZXJTZXR1cCA/IDEyIDogMjQsIGdhcDogaGFzQ2xlYXZlclNldHVwID8gMSA6IHVuZGVmaW5lZCB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDMpLmFsdGVybmF0aW5nKFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDgsIGdhcDogMyB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDgpLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0gfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMTQpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA2LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjUpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogYy5yaWdodC5pbm5lciB9KTtcbn1cblxuZnVuY3Rpb24gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlciwgYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMTYgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgyMykuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0LmlubmVyIH0pO1xuICBzZWN0aW9uLmF0KDI1KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAyMyB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDQpLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIGNvdW50OiAxOCB9KTtcbiAgaWYgKHRpZXIgPj0gMiAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgyNCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXIsIGMucmlnaHQub3V0ZXJdIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDM2KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5pbm5lciA6IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG59XG5cbmZ1bmN0aW9uIHN3YXJtQmxvb21QcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogMjAgfSk7XG4gIHNlY3Rpb24uYXQoMjApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDI0IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMikuZHJpcChcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciwgcm93czogMzQsIGV2ZXJ5OiA2IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDcpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5pbm5lciwgYy5yaWdodC5pbm5lcl0sIGNvdW50OiA3LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjEpLndhbGwoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlcl0gfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMzYpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbn1cblxuZnVuY3Rpb24gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzZWN0aW9uLmF0KDQpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWQsIGMubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAxOCB9KTtcbiAgc2VjdGlvbi5hdCgyMikuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogMjQgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgwKS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdIH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoNikuZHJpcChcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFySW5uZXIgOiBjLnJpZ2h0Lm5lYXJJbm5lciwgcm93czogMzIsIGV2ZXJ5OiA2IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDE4KS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLnJpZ2h0LmlubmVyLCBjLmxlZnQuaW5uZXJdLCBjb3VudDogNywgZ2FwOiAzIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDMyKS53YWxsKFwidGFua1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0LmlubmVyXSB9KTtcbn1cblxuY29uc3QgdGhlbWVQbGFuczogUmVjb3JkPFRyYWNrVGhlbWVJZCwgVGhlbWVQbGFuPiA9IHtcbiAgZ3VuU2Nob29sOiB7XG4gICAgZmluYWxSb3dzOiA0MixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4ucHVsc2VQaXN0b2xcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDcpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIGlmIChjb250ZXh0LnRpZXIgPj0gMikgc2VjdGlvbi5hdCg2KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMCwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5uZWVkbGVyU21nXCIsIFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQubWlkIDogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgyKS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5vdXRlciA6IGMucmlnaHQub3V0ZXIgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMyA9PT0gMSkgc2VjdGlvbi5hdCg0KS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJJbm5lciB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg0KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQub3V0ZXIgOiBjLmxlZnQub3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNikuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMiA9PT0gMCkgc2VjdGlvbi5hdCg3KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubWlkIDogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm5lYXJPdXRlciA6IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZShjb250ZXh0LnRpZXIgPj0gMiA/IDQgOiAyKTtcbiAgICB9LFxuICAgIGZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQyLCBzZWN0aW9uID0+IGd1blNjaG9vbFByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIGd1YXJkQmxhZGVzOiB7XG4gICAgZmluYWxSb3dzOiA0MixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIGlmIChjb250ZXh0LnRpZXIgPj0gMikgc2VjdGlvbi5hdCg2KS53ZWFwb24oXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDIsIHNlY3Rpb24gPT4gZ3VhcmRCbGFkZVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDEwLCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24ocGljayhbXCJzd29yZC5hcmNCbGFkZVwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzd29yZC5jbGVhdmVyXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCBcInNoaWVsZC5oZXhHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBpZiAoY3ljbGVJbmRleCAlIDIgPT09IDApIHNlY3Rpb24uYXQoNykucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFySW5uZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQub3V0ZXIgOiBjLnJpZ2h0Lm91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndWFyZEJsYWRlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgY3J5c3RhbFNpZWdlOiB7XG4gICAgZmluYWxSb3dzOiA0OCxcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4uYnVyc3RDYXJiaW5lXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDMpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg2KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0OCwgc2VjdGlvbiA9PiBjcnlzdGFsU2llZ2VQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImd1bi5zcGxpdHRlclJpZmxlXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNykud2VhcG9uKFwic3dvcmQuY2xlYXZlclwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMTApLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm91dGVyIDogYy5yaWdodC5vdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDgsIHNlY3Rpb24gPT4gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgc3dhcm1CbG9vbToge1xuICAgIGZpbmFsUm93czogNDQsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnB1bHNlUGlzdG9sXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDIpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg1KS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDQpO1xuICAgIH0sXG4gICAgY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0NCwgc2VjdGlvbiA9PiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTIsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5taWQgOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJndW4ubmVlZGxlclNtZ1wiLCBcInN3b3JkLmFyY0JsYWRlXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNykud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoOSkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMTApLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDExKS5lbmVteShcIndpbmdlclwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm91dGVyIDogYy5sZWZ0Lm91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0NCwgc2VjdGlvbiA9PiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbiAgbWlycm9yQXJyYXk6IHtcbiAgICBmaW5hbFJvd3M6IDQ2LFxuICAgIG9wZW4oY29udGV4dCkge1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDksIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5idXJzdENhcmJpbmVcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDMpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNikud2VhcG9uKFwic3dvcmQuY2xlYXZlclwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDYsIHNlY3Rpb24gPT4gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJndW4uYnVyc3RDYXJiaW5lXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24ocGljayhbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgaWYgKGN5Y2xlSW5kZXggJSAyID09PSAwKSBzZWN0aW9uLmF0KDgpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFySW5uZXIgOiBjLnJpZ2h0Lm5lYXJJbm5lciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDYsIHNlY3Rpb24gPT4gbWlycm9yQXJyYXlQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFjayhvcHRpb25zOiBDb21wb3NlZFRyYWNrT3B0aW9ucyk6IFRyYWNrTWVtYmVyIHtcbiAgY29uc3QgYnVpbGRlciA9IHRyYWNrQnVpbGRlci5jcmVhdGUoe1xuICAgIGxhYmVsOiBvcHRpb25zLmxhYmVsLFxuICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IG9wdGlvbnMuc2NlbmVJZCB9LFxuICAgIGJhbGFuY2U6IHsgZW5lbXlIcDogZW5lbXlIcEJ5VGllcltvcHRpb25zLnRpZXJdLCBlbmVteVNwZWVkOiAxIH0sXG4gIH0pO1xuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dChidWlsZGVyLCBvcHRpb25zLnRpZXIpO1xuICBjb25zdCBwbGFuID0gdGhlbWVQbGFuc1tvcHRpb25zLnRoZW1lXTtcbiAgY29uc3QgdGFyZ2V0Um93cyA9IHRhcmdldFJvd3NCeVRpZXJbb3B0aW9ucy50aWVyXTtcbiAgcGxhbi5vcGVuKGNvbnRleHQpO1xuICBsZXQgY3ljbGVJbmRleCA9IDA7XG4gIHdoaWxlIChjb250ZXh0LmN1cnNvciArIHBsYW4uZmluYWxSb3dzIDwgdGFyZ2V0Um93cykge1xuICAgIHBsYW4uY3ljbGUoY29udGV4dCwgY3ljbGVJbmRleCk7XG4gICAgY3ljbGVJbmRleCsrO1xuICB9XG4gIHBsYW4uZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpO1xuICByZXR1cm4gYnVpbGRlci5idWlsZCgpO1xufVxuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiU2t5YnJlYWtcIixcbiAgZGVzY3JpcHRpb246IFwiQW4gQXVyb3JhIG9wZW5lciBmb2N1c2VkIG9uIHNoaWVsZHMsIHNob3J0IHN3b3JkIHJlYWRzLCBhbmQgcGF0aWVudCBjbG9zZS1yYW5nZSBjbGVhbnVwLlwiLFxuICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJSaWJib24gU3Rvcm1cIixcbiAgZGVzY3JpcHRpb246IFwiQXVyb3JhIHByZXNzdXJlIGV4cGFuZHMgaW50byBhbHRlcm5hdGluZyBzaGllbGQgcmVidWlsZHMsIHdpZGVyIHN3b3JkIGNob2ljZXMsIGFuZCBjbHVzdGVyZWQgY2xvc2UtcmFuZ2UgdGhyZWF0cy5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTWFnbmV0aWMgRGF3blwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgQXVyb3JhIGZpbmFsZSBhc2tzIGZvciBkZWxpYmVyYXRlIHNoaWVsZCB0aW1pbmcgYW5kIHN3b3JkIHNlbGVjdGlvbiBhZ2FpbnN0IGxvbmcsIHJlYWRhYmxlIHRocmVhdCB3YXZlcy5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUHJpc20gSWduaXRpb25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBDcnlzdGFsIEZvcmdlIG9wZW5lciBidWlsdCBhcm91bmQgYnVyc3QgZmlyZSwgZ2xhc3MgZGVjb3lzLCBhbmQgZWFybHkgaGVhdnktdGhyZWF0IHJlaGVhcnNhbC5cIixcbiAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gIHRpZXI6IDEsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkZhY2V0IFJ1blwiLFxuICBkZXNjcmlwdGlvbjogXCJDcnlzdGFsIEZvcmdlIGRlbnNpdHkgc2hhcnBlbnMgd2l0aCBoZWF2aWVyIGd1bnMsIHN0dXJkaWVyIHNoaWVsZHMsIGFuZCB0YW5rIGJyZWFrcyBmcmFtZWQgYnkgZ2xhc3MgZGVjb3lzLlwiLFxuICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiR2xhc3MgSGFtbWVyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBDcnlzdGFsIEZvcmdlIGZpbmFsZSBjb21taXRzIHRvIGhlYXZ5IHdlYXBvbiBwYXlvZmZzLCByZXBlYXRlZCB0YW5rIGxhbmVzLCBhbmQgcHJpc21hdGljIGRlY295IHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiRmlyc3QgR2xvd1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIGd1bi1mb3J3YXJkIE5lb24gTmVidWxhZSBvcGVuZXIgd2l0aCBjbGVhciByZWJ1aWxkIHNoZWx2ZXMgYW5kIG9ubHkgYSBmZXcgc2hpZWxkIHNhZmV0eSBuZXRzLlwiLFxuICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJEcmlmdCBMZXNzb25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBsb25nZXIgTmVvbiBOZWJ1bGFlIGd1biBsZXNzb24gdGhhdCBhZGRzIHdpbmcgcHJlc3N1cmUsIHN0cm9uZ2VyIGZpcmVhcm0gY2hvaWNlcywgYW5kIHNwYXJzZSBzaGllbGQgcmVsaWVmLlwiLFxuICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJOZWJ1bGEgR2F0ZVwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgTmVvbiBOZWJ1bGFlIGd1biBmaW5hbGUgbGF5ZXJzIGhlYXZpZXIgZmlyZWFybXMsIHRhbmtzLCBhbmQgc3VzdGFpbmVkIGxhbmUgcmVhZGluZyB3aXRob3V0IGxlYW5pbmcgb24gc3BlZWQgY2hhbmdlcy5cIixcbiAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUGFuZWwgRGF3blwiLFxuICBkZXNjcmlwdGlvbjogXCJBIFNvbGFyIEFycmF5IG9wZW5lciB3aXRoIG1pcnJvcmVkIHJlYWRzLCBzcGxpdC1sYW5lIHdlYXBvbiB0aW1pbmcsIGFuZCBicmlnaHQgYnV0IG1lYXN1cmVkIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiSGVsaW9zdGF0IFJ1c2hcIixcbiAgZGVzY3JpcHRpb246IFwiU29sYXIgQXJyYXkgcHJlc3N1cmUgZ3Jvd3MgdGhyb3VnaCBtaXJyb3JlZCB3YWxscywgcHJlY2lzaW9uIHJlYnVpbGRzLCBhbmQgYWx0ZXJuYXRpbmcgb3V0ZXItbGFuZSBzdXJnZXMuXCIsXG4gIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJNaXJyb3IgWmVuaXRoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBTb2xhciBBcnJheSBmaW5hbGUgbWl4ZXMgbWlycm9yZWQgdGFuayBicmVha3MsIHNwbGl0LWZpcmUgcmVidWlsZHMsIGFuZCBsb25nLWZvcm0gcHJlY2lzaW9uIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiQmxvb20gU2lnbmFsXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgVm9pZCBHYXJkZW4gb3BlbmVyIGFib3V0IGdyb3dpbmcgdGhlIHNxdWFkIGVhcmx5IGFuZCBzdXN0YWluaW5nIGNhbG0gY3Jvc3MtbGFuZSBibG9vbSBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUm9vdCBMYXR0aWNlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlZvaWQgR2FyZGVuIGFkZHMgZGVuc2VyIHNxdWFkIGdyb3d0aCB3aW5kb3dzLCBzcGxpdCB3ZWFwb24gc3VwcG9ydCwgYW5kIHNsb3ctYmxvb21pbmcgcGFpcmVkIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICB0aWVyOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJOaWdodCBPcmNoYXJkXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSBWb2lkIEdhcmRlbiBmaW5hbGUgbGVhbnMgaW50byBzcXVhZCByZWNvdmVyeSwgbGF5ZXJlZCBzdXBwb3J0IHBpY2t1cHMsIGFuZCBicm9hZCBvcmdhbmljIHByZXNzdXJlLlwiLFxuICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICB0aWVyOiAzLFxufSk7XG4iLCAiaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2s0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazIgfSBmcm9tIFwiLi9UcmFjazVcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrNlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgY3J5c3RhbEZvcmdlVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2s3XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBjcnlzdGFsRm9yZ2VUcmFjazIgfSBmcm9tIFwiLi9UcmFjazhcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGNyeXN0YWxGb3JnZVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrOVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazEgfSBmcm9tIFwiLi9UcmFjazFcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2syIH0gZnJvbSBcIi4vVHJhY2syXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrM1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgc29sYXJBcnJheVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrMTNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHNvbGFyQXJyYXlUcmFjazIgfSBmcm9tIFwiLi9UcmFjazE0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBzb2xhckFycmF5VHJhY2szIH0gZnJvbSBcIi4vVHJhY2sxNVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgdm9pZEdhcmRlblRyYWNrMSB9IGZyb20gXCIuL1RyYWNrMTBcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHZvaWRHYXJkZW5UcmFjazIgfSBmcm9tIFwiLi9UcmFjazExXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyB2b2lkR2FyZGVuVHJhY2szIH0gZnJvbSBcIi4vVHJhY2sxMlwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja0ZhbWlseU1lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHRyYWNrcyA9IHtcbiAgXCJuZW9uLW5lYnVsYWUtMVwiOiBuZW9uTmVidWxhZVRyYWNrMSxcbiAgXCJuZW9uLW5lYnVsYWUtMlwiOiBuZW9uTmVidWxhZVRyYWNrMixcbiAgXCJuZW9uLW5lYnVsYWUtM1wiOiBuZW9uTmVidWxhZVRyYWNrMyxcbiAgXCJhdXJvcmEtMVwiOiBhdXJvcmFUcmFjazEsXG4gIFwiYXVyb3JhLTJcIjogYXVyb3JhVHJhY2syLFxuICBcImF1cm9yYS0zXCI6IGF1cm9yYVRyYWNrMyxcbiAgXCJjcnlzdGFsLWZvcmdlLTFcIjogY3J5c3RhbEZvcmdlVHJhY2sxLFxuICBcImNyeXN0YWwtZm9yZ2UtMlwiOiBjcnlzdGFsRm9yZ2VUcmFjazIsXG4gIFwiY3J5c3RhbC1mb3JnZS0zXCI6IGNyeXN0YWxGb3JnZVRyYWNrMyxcbiAgXCJ2b2lkLWdhcmRlbi0xXCI6IHZvaWRHYXJkZW5UcmFjazEsXG4gIFwidm9pZC1nYXJkZW4tMlwiOiB2b2lkR2FyZGVuVHJhY2syLFxuICBcInZvaWQtZ2FyZGVuLTNcIjogdm9pZEdhcmRlblRyYWNrMyxcbiAgXCJzb2xhci1hcnJheS0xXCI6IHNvbGFyQXJyYXlUcmFjazEsXG4gIFwic29sYXItYXJyYXktMlwiOiBzb2xhckFycmF5VHJhY2syLFxuICBcInNvbGFyLWFycmF5LTNcIjogc29sYXJBcnJheVRyYWNrMyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlsaWVzID0ge1xuICBuZW9uTmVidWxhZToge1xuICAgIGxhYmVsOiBcIk5lb24gTmVidWxhZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbGVhcm5pbmcgYXJjIGFib3V0IGxhbmVzLCBwaWNrdXBzLCBzaGllbGRzLCBhbmQgY29udHJvbGxlZCBwcmVzc3VyZS5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcIm5lb25IYWxsXCIgfSxcbiAgICB0cmFja0lkczogW1wibmVvbi1uZWJ1bGFlLTFcIiwgXCJuZW9uLW5lYnVsYWUtMlwiLCBcIm5lb24tbmVidWxhZS0zXCJdLFxuICB9LFxuICBhdXJvcmE6IHtcbiAgICBsYWJlbDogXCJBdXJvcmFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZW5zZSBwbGFuZXRhcnkgYXNzYXVsdHMgd2l0aCBicmlnaHRlciByZWNvdmVyeSB3aW5kb3dzIGFuZCBzaGFycGVyIHRocmVhdCB3YXZlcy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcImF1cm9yYVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcImF1cm9yYS0xXCIsIFwiYXVyb3JhLTJcIiwgXCJhdXJvcmEtM1wiXSxcbiAgfSxcbiAgY3J5c3RhbEZvcmdlOiB7XG4gICAgbGFiZWw6IFwiQ3J5c3RhbCBGb3JnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByaXNtYXRpYyBmYWN0b3J5IGxhbmVzIHdpdGggc2hhcnAgcHJlc3N1cmUsIGdsYXNzIGRlY295cywgYW5kIGhlYXZ5IGNyeXN0YWxsaW5lIGJyZWFrcy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcImNyeXN0YWwtZm9yZ2UtMVwiLCBcImNyeXN0YWwtZm9yZ2UtMlwiLCBcImNyeXN0YWwtZm9yZ2UtM1wiXSxcbiAgfSxcbiAgdm9pZEdhcmRlbjoge1xuICAgIGxhYmVsOiBcIlZvaWQgR2FyZGVuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlvbHVtaW5lc2NlbnQgbmlnaHQgbGFuZXMgd2l0aCBzcGFyc2UgYmxvb21zLCBkZWNveXMsIGFuZCBjb250cm9sbGVkIHJlY292ZXJ5IHBvY2tldHMuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIgfSxcbiAgICB0cmFja0lkczogW1widm9pZC1nYXJkZW4tMVwiLCBcInZvaWQtZ2FyZGVuLTJcIiwgXCJ2b2lkLWdhcmRlbi0zXCJdLFxuICB9LFxuICBzb2xhckFycmF5OiB7XG4gICAgbGFiZWw6IFwiU29sYXIgQXJyYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCcmlnaHQgb3JiaXRhbCBsYW5lcyB3aXRoIG1pcnJvcmVkIHdhbGxzLCBmYXN0IG91dGVyIHN1cmdlcywgYW5kIGRlY2lzaXZlIGhlYXZ5IHRvb2xzLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwic29sYXJBcnJheVwiIH0sXG4gICAgdHJhY2tJZHM6IFtcInNvbGFyLWFycmF5LTFcIiwgXCJzb2xhci1hcnJheS0yXCIsIFwic29sYXItYXJyYXktM1wiXSxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrRmFtaWx5TWVtYmVyPGtleW9mIHR5cGVvZiB0cmFja3M+PjtcblxuZXhwb3J0IHtcbiAgYXVyb3JhVHJhY2sxLFxuICBhdXJvcmFUcmFjazIsXG4gIGF1cm9yYVRyYWNrMyxcbiAgY3J5c3RhbEZvcmdlVHJhY2sxLFxuICBjcnlzdGFsRm9yZ2VUcmFjazIsXG4gIGNyeXN0YWxGb3JnZVRyYWNrMyxcbiAgbmVvbk5lYnVsYWVUcmFjazEsXG4gIG5lb25OZWJ1bGFlVHJhY2syLFxuICBuZW9uTmVidWxhZVRyYWNrMyxcbiAgc29sYXJBcnJheVRyYWNrMSxcbiAgc29sYXJBcnJheVRyYWNrMixcbiAgc29sYXJBcnJheVRyYWNrMyxcbiAgdm9pZEdhcmRlblRyYWNrMSxcbiAgdm9pZEdhcmRlblRyYWNrMixcbiAgdm9pZEdhcmRlblRyYWNrMyxcbn07XG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIsIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tGYW1pbGllcywgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcbiAgcmVhZG9ubHkgZmFtaWxpZXMgPSB0cmFja0ZhbWlsaWVzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgdHJhY2tdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaWQsIGZhbWlseV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5mYW1pbGllcykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShmYW1pbHkudHJhY2tJZHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgdHJhY2suYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZChmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICAgIGZvciAoY29uc3QgdHJhY2tJZCBvZiBmYW1pbHkudHJhY2tJZHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrSWQgaW4gdGhpcy5tZW1iZXJzLCBgJHtpZH0gcmVmZXJlbmNlcyB1bmtub3duIHRyYWNrIFwiJHt0cmFja0lkfVwiLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodGhpcy5tZW1iZXJzW3RyYWNrSWRdLmVudmlyb25tZW50LnNjZW5lSWQgPT09IGZhbWlseS5lbnZpcm9ubWVudC5zY2VuZUlkLCBgJHt0cmFja0lkfSBtdXN0IHVzZSB0aGUgJHtpZH0gc2NlbmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlseSA9IG5ldyBUcmFja0ZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFRyYWNrSWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkubWVtYmVycztcbmV4cG9ydCB0eXBlIFRyYWNrRmFtaWx5SWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkuZmFtaWxpZXM7XG4iLCAiaW1wb3J0IHtcbiAgTmVvblByb2plY3RpbGUsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblByb2plY3RpbGVTaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7XG4gIEd1bkxldmVsLFxuICBHdW5NZW1iZXIsXG4gIEltcGFjdEVmZmVjdCxcbiAgTXV6emxlRWZmZWN0LFxuICBQcm9qZWN0aWxlU2hhcGUsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuUHJvamVjdGlsZSB7XG4gIGlkOiBudW1iZXI7XG4gIGxhbmU6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZ4OiBudW1iZXI7XG4gIHZ5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcGllcmNlUmVtYWluaW5nOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I6IHN0cmluZztcbiAgY29yZUNvbG9yOiBzdHJpbmc7XG4gIGFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlcjogYm9vbGVhbjtcbiAga25vY2tiYWNrOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgaGl0RW5lbXlJZHM6IFNldDxudW1iZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bkVmZmVjdCB7XG4gIGtpbmQ6IFwibXV6emxlXCIgfCBcImltcGFjdFwiIHwgXCJkZWF0aFwiO1xuICBzdHlsZTogTXV6emxlRWZmZWN0IHwgSW1wYWN0RWZmZWN0IHwgXCJkZWF0aEJsb29tXCI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcjogc3RyaW5nO1xuICByYWRpdXM6IG51bWJlcjtcbiAgZXhwaXJlc0F0OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHNlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5UYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGR5aW5nOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2NoZWR1bGVkVm9sbGV5IHtcbiAgZmlyZXNBdDogbnVtYmVyO1xuICBndW46IEd1bk1lbWJlcjtcbiAgbGV2ZWw6IEd1bkxldmVsO1xuICBsYW5lOiBudW1iZXI7XG4gIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGFpbVg/OiBudW1iZXI7IGFpbVk/OiBudW1iZXIgfVtdO1xuICBzY2FsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgR3VuU2ltdWxhdGlvbiB7XG4gIHJlYWRvbmx5IHByb2plY3RpbGVzOiBHdW5Qcm9qZWN0aWxlW10gPSBbXTtcbiAgcmVhZG9ubHkgZWZmZWN0czogR3VuRWZmZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBzY2hlZHVsZWRWb2xsZXlzOiBTY2hlZHVsZWRWb2xsZXlbXSA9IFtdO1xuICBwcml2YXRlIHNlcXVlbmNlID0gMDtcbiAgcHJpdmF0ZSBzaG90U2VxdWVuY2UgPSAwO1xuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmVmZmVjdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGZpcmUoZ3VuOiBHdW5NZW1iZXIsIGxldmVsOiBHdW5MZXZlbCwgbGFuZTogbnVtYmVyLCBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBhaW1YPzogbnVtYmVyOyBhaW1ZPzogbnVtYmVyIH1bXSwgbm93OiBudW1iZXIsIHNjYWxlID0gMSk6IHZvaWQge1xuICAgIGZvciAobGV0IGJ1cnN0SW5kZXggPSAwOyBidXJzdEluZGV4IDwgbGV2ZWwuYnVyc3RDb3VudDsgYnVyc3RJbmRleCsrKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMucHVzaCh7XG4gICAgICAgIGZpcmVzQXQ6IG5vdyArIGJ1cnN0SW5kZXggKiBsZXZlbC5idXJzdEludGVydmFsTXMsXG4gICAgICAgIGd1biwgbGV2ZWwsIGxhbmUsIG9yaWdpbnM6IG9yaWdpbnMubWFwKG9yaWdpbiA9PiAoeyAuLi5vcmlnaW4gfSkpLCBzY2FsZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpcmluZyhub3c6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGZpcmVkID0gMDtcbiAgICBjb25zdCBkdWUgPSB0aGlzLnNjaGVkdWxlZFZvbGxleXMuZmlsdGVyKHZvbGxleSA9PiB2b2xsZXkuZmlyZXNBdCA8PSBub3cpO1xuICAgIHRoaXMuc2NoZWR1bGVkVm9sbGV5cyA9IHRoaXMuc2NoZWR1bGVkVm9sbGV5cy5maWx0ZXIodm9sbGV5ID0+IHZvbGxleS5maXJlc0F0ID4gbm93KTtcbiAgICBmb3IgKGNvbnN0IHZvbGxleSBvZiBkdWUpIHtcbiAgICAgIHRoaXMuc3Bhd25Wb2xsZXkodm9sbGV5LCBub3cpO1xuICAgICAgZmlyZWQrKztcbiAgICB9XG4gICAgcmV0dXJuIGZpcmVkO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdGlsZXMoXG4gICAgZGVsdGE6IG51bWJlcixcbiAgICBub3c6IG51bWJlcixcbiAgICB0YXJnZXRzOiByZWFkb25seSBHdW5UYXJnZXRbXSxcbiAgICBib3VuZHM6IHsgdG9wOiBudW1iZXI7IGxlZnQ/OiBudW1iZXI7IHJpZ2h0PzogbnVtYmVyIH0sXG4gICAgb25IaXQ6IChwcm9qZWN0aWxlOiBHdW5Qcm9qZWN0aWxlLCB0YXJnZXQ6IEd1blRhcmdldCkgPT4gdm9pZCxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0aWxlIG9mIFsuLi50aGlzLnByb2plY3RpbGVzXSkge1xuICAgICAgcHJvamVjdGlsZS54ICs9IHByb2plY3RpbGUudnggKiBkZWx0YTtcbiAgICAgIHByb2plY3RpbGUueSArPSBwcm9qZWN0aWxlLnZ5ICogZGVsdGE7XG4gICAgICBpZiAocHJvamVjdGlsZS55IDwgYm91bmRzLnRvcCB8fCBwcm9qZWN0aWxlLnggPCAoYm91bmRzLmxlZnQgPz8gLUluZmluaXR5KSB8fCBwcm9qZWN0aWxlLnggPiAoYm91bmRzLnJpZ2h0ID8/IEluZmluaXR5KSkge1xuICAgICAgICB0aGlzLnJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICBpZiAodGFyZ2V0LmR5aW5nIHx8IHByb2plY3RpbGUubGFuZSAhPT0gdGFyZ2V0LmxhbmUgfHwgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5oYXModGFyZ2V0LmlkKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGR4ID0gcHJvamVjdGlsZS54IC0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IGR5ID0gcHJvamVjdGlsZS55IC0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IGhpdFJhZGl1cyA9IHByb2plY3RpbGUucmFkaXVzICsgdGFyZ2V0LnJhZGl1cztcbiAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gaGl0UmFkaXVzICogaGl0UmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgcHJvamVjdGlsZS5oaXRFbmVteUlkcy5hZGQodGFyZ2V0LmlkKTtcbiAgICAgICAgdGFyZ2V0LmhlYWx0aCAtPSBwcm9qZWN0aWxlLmRhbWFnZTtcbiAgICAgICAgdGFyZ2V0LnkgLT0gcHJvamVjdGlsZS5rbm9ja2JhY2s7XG4gICAgICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgICAgICBraW5kOiBcImltcGFjdFwiLFxuICAgICAgICAgIHN0eWxlOiBwcm9qZWN0aWxlLmltcGFjdEVmZmVjdCxcbiAgICAgICAgICB4OiBwcm9qZWN0aWxlLngsIHk6IHByb2plY3RpbGUueSxcbiAgICAgICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvciwgc2Vjb25kYXJ5Q29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgICAgICByYWRpdXM6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5oaXRGbGFzaFNjYWxlICogNCxcbiAgICAgICAgICBleHBpcmVzQXQ6IG5vdyArIHByb2plY3RpbGUuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICBkdXJhdGlvbjogcHJvamVjdGlsZS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHNlZWQ6IHByb2plY3RpbGUuaWQsXG4gICAgICAgIH0pO1xuICAgICAgICBvbkhpdChwcm9qZWN0aWxlLCB0YXJnZXQpO1xuICAgICAgICBpZiAocHJvamVjdGlsZS5waWVyY2VSZW1haW5pbmcgPiAwKSBwcm9qZWN0aWxlLnBpZXJjZVJlbWFpbmluZy0tO1xuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlUHJvamVjdGlsZShwcm9qZWN0aWxlKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RpbGVzLmluY2x1ZGVzKHByb2plY3RpbGUpKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlZmZlY3Qgb2YgWy4uLnRoaXMuZWZmZWN0c10pIHtcbiAgICAgIGlmIChlZmZlY3QuZXhwaXJlc0F0IDw9IG5vdykgdGhpcy5lZmZlY3RzLnNwbGljZSh0aGlzLmVmZmVjdHMuaW5kZXhPZihlZmZlY3QpLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcm9qZWN0aWxlUHJpbWl0aXZlcygpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RpbGVzLmZsYXRNYXAocHJvamVjdGlsZSA9PiBuZXcgTmVvblByb2plY3RpbGUoe1xuICAgICAgeDogcHJvamVjdGlsZS54LCB5OiBwcm9qZWN0aWxlLnksXG4gICAgICB2ZWxvY2l0eVg6IHByb2plY3RpbGUudngsIHZlbG9jaXR5WTogcHJvamVjdGlsZS52eSxcbiAgICAgIHJhZGl1czogcHJvamVjdGlsZS5yYWRpdXMsXG4gICAgICBsZW5ndGg6IHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS5hc3BlY3QsXG4gICAgICB0cmFpbExlbmd0aDogcHJvamVjdGlsZS50cmFpbExlbmd0aCxcbiAgICAgIHRyYWlsV2lkdGg6IE1hdGgubWF4KHByb2plY3RpbGUucmFkaXVzICogcHJvamVjdGlsZS50cmFpbFdpZHRoU2NhbGUsIDEuMSksXG4gICAgICBjb2xvcjogcHJvamVjdGlsZS5jb2xvcixcbiAgICAgIHRyYWlsQ29sb3I6IHByb2plY3RpbGUudHJhaWxDb2xvcixcbiAgICAgIGNvcmVDb2xvcjogcHJvamVjdGlsZS5jb3JlQ29sb3IsXG4gICAgICBzaGFwZTogcHJvamVjdGlsZS5zaGFwZSBhcyBOZW9uUHJvamVjdGlsZVNoYXBlLFxuICAgICAgaW50ZW5zaXR5OiBwcm9qZWN0aWxlLnZpc3VhbEludGVuc2l0eSAqIChwcm9qZWN0aWxlLnRyYWNlciA/IDEuMzUgOiAxKSxcbiAgICAgIGdsb3c6IHByb2plY3RpbGUudHJhY2VyID8gMS40IDogLjcyLFxuICAgIH0pLnByaW1pdGl2ZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNwYXduVm9sbGV5KHZvbGxleTogU2NoZWR1bGVkVm9sbGV5LCBub3c6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3VuLCBsZXZlbCwgbGFuZSwgb3JpZ2lucywgc2NhbGUgfSA9IHZvbGxleTtcbiAgICBmb3IgKGNvbnN0IG9yaWdpbiBvZiBvcmlnaW5zKSB7XG4gICAgICBjb25zdCBjb3VudCA9IE1hdGgubWF4KDEsIGxldmVsLnByb2plY3RpbGVDb3VudCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgYWltQW5nbGUgPSBvcmlnaW4uYWltWCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbi5haW1ZID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IDBcbiAgICAgICAgICA6IE1hdGguYXRhbjIob3JpZ2luLmFpbVggLSBvcmlnaW4ueCwgb3JpZ2luLnkgLSBvcmlnaW4uYWltWSk7XG4gICAgICAgIGNvbnN0IHNwcmVhZERlZ3JlZXMgPSBjb3VudCA9PT0gMSA/IDAgOiAoaW5kZXggLyAoY291bnQgLSAxKSAtIC41KSAqIGxldmVsLnNwcmVhZERlZ3JlZXM7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gYWltQW5nbGUgKyBzcHJlYWREZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBsZXZlbC5wcm9qZWN0aWxlU3BlZWQgKiBzY2FsZTtcbiAgICAgICAgdGhpcy5zaG90U2VxdWVuY2UrKztcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKHtcbiAgICAgICAgICBpZDogKyt0aGlzLnNlcXVlbmNlLCBsYW5lLFxuICAgICAgICAgIHg6IG9yaWdpbi54ICsgKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiBndW4udmlzdWFsSWRlbnRpdHkuaG9yaXpvbnRhbEppdHRlciAqIHNjYWxlLFxuICAgICAgICAgIHk6IG9yaWdpbi55LFxuICAgICAgICAgIHZ4OiBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZCxcbiAgICAgICAgICB2eTogLU1hdGguY29zKGFuZ2xlKSAqIHNwZWVkLFxuICAgICAgICAgIHJhZGl1czogbGV2ZWwucHJvamVjdGlsZVJhZGl1cyAqIHNjYWxlLFxuICAgICAgICAgIGRhbWFnZTogbGV2ZWwuZGFtYWdlLFxuICAgICAgICAgIHBpZXJjZVJlbWFpbmluZzogbGV2ZWwucGllcmNlLFxuICAgICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgICAgICB0cmFpbENvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICAgICAgY29yZUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkuY29yZUNvbG9yXSxcbiAgICAgICAgICBhc3BlY3Q6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQXNwZWN0LFxuICAgICAgICAgIHRyYWlsV2lkdGhTY2FsZTogZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsV2lkdGhTY2FsZSxcbiAgICAgICAgICB2aXN1YWxJbnRlbnNpdHk6IGd1bi52aXN1YWxJZGVudGl0eS52aXN1YWxJbnRlbnNpdHksXG4gICAgICAgICAgc2hhcGU6IGd1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlU2hhcGUsXG4gICAgICAgICAgaW1wYWN0RWZmZWN0OiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RWZmZWN0LFxuICAgICAgICAgIGltcGFjdER1cmF0aW9uTXM6IGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zLFxuICAgICAgICAgIHRyYWlsTGVuZ3RoOiBsZXZlbC50cmFpbExlbmd0aCAqIHNjYWxlLFxuICAgICAgICAgIHRyYWNlcjogbGV2ZWwudHJhY2VyRXZlcnlOdGhTaG90ID4gMCAmJiB0aGlzLnNob3RTZXF1ZW5jZSAlIGxldmVsLnRyYWNlckV2ZXJ5TnRoU2hvdCA9PT0gMCxcbiAgICAgICAgICBrbm9ja2JhY2s6IGxldmVsLmtub2NrYmFjayAqIHNjYWxlLFxuICAgICAgICAgIGhpdEZsYXNoU2NhbGU6IGxldmVsLmhpdEZsYXNoU2NhbGUsXG4gICAgICAgICAgaGl0RW5lbXlJZHM6IG5ldyBTZXQoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZWZmZWN0cy5wdXNoKHtcbiAgICAgIGtpbmQ6IFwibXV6emxlXCIsIHN0eWxlOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRWZmZWN0LFxuICAgICAgeDogb3JpZ2lucy5yZWR1Y2UoKHN1bSwgb3JpZ2luKSA9PiBzdW0gKyBvcmlnaW4ueCwgMCkgLyBvcmlnaW5zLmxlbmd0aCxcbiAgICAgIHk6IG9yaWdpbnNbMF0/LnkgPz8gMCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0sXG4gICAgICByYWRpdXM6IDEwICogbGV2ZWwubXV6emxlRmxhc2hTY2FsZSAqIHNjYWxlLFxuICAgICAgZXhwaXJlc0F0OiBub3cgKyBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIGR1cmF0aW9uOiBndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyxcbiAgICAgIHNlZWQ6IHRoaXMuc2hvdFNlcXVlbmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGU6IEd1blByb2plY3RpbGUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdGlsZXMuaW5kZXhPZihwcm9qZWN0aWxlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkgdGhpcy5wcm9qZWN0aWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHN5bmNTbG90QXJyYXk8VD4oc2xvdHM6IFRbXSwgY291bnQ6IG51bWJlciwgY3JlYXRlOiAoKSA9PiBUKTogdm9pZCB7XG4gIGNvbnN0IHRhcmdldCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IoY291bnQpKTtcbiAgd2hpbGUgKHNsb3RzLmxlbmd0aCA8IHRhcmdldCkgc2xvdHMucHVzaChjcmVhdGUoKSk7XG4gIHNsb3RzLmxlbmd0aCA9IHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkdmFuY2VDb29sZG93blNsb3RzKGNvb2xkb3duczogbnVtYmVyW10sIGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvb2xkb3ducy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb29sZG93bnNbaW5kZXhdID0gTWF0aC5tYXgoMCwgY29vbGRvd25zW2luZGV4XSAtIGRlbHRhKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlU2xvdHM8VD4oc2xvdHM6IEFycmF5PFQgfCBudWxsPiwgdXBkYXRlOiAoaXRlbTogVCkgPT4gVCB8IG51bGwpOiB2b2lkIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNsb3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBzbG90c1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHNsb3RzW2luZGV4XSA9IHVwZGF0ZShpdGVtKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhaW1lZFRhcmdldHM8VD4oXG4gIHJlbWFpbmluZzogcmVhZG9ubHkgVFtdLFxuICBzZWxlY3RlZDogcmVhZG9ubHkgVFtdLFxuICBnZXRJZDogKGl0ZW06IFQpID0+IG51bWJlcixcbik6IFRbXSB7XG4gIGNvbnN0IHNlbGVjdGVkSWRzID0gbmV3IFNldChzZWxlY3RlZC5tYXAoZ2V0SWQpKTtcbiAgcmV0dXJuIHJlbWFpbmluZy5maWx0ZXIoaXRlbSA9PiAhc2VsZWN0ZWRJZHMuaGFzKGdldElkKGl0ZW0pKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RCZXN0VW5jbGFpbWVkPFQ+KFxuICBpdGVtczogcmVhZG9ubHkgVFtdLFxuICBjbGFpbWVkSWRzOiBSZWFkb25seVNldDxudW1iZXI+LFxuICBnZXRJZDogKGl0ZW06IFQpID0+IG51bWJlcixcbiAgc2NvcmU6IChpdGVtOiBUKSA9PiBudW1iZXIgfCBudWxsLFxuKTogVCB8IG51bGwge1xuICBsZXQgYmVzdDogeyBpdGVtOiBUOyBzY29yZTogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgaWYgKGNsYWltZWRJZHMuaGFzKGdldElkKGl0ZW0pKSkgY29udGludWU7XG4gICAgY29uc3QgdmFsdWUgPSBzY29yZShpdGVtKTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIGNvbnRpbnVlO1xuICAgIGlmICghYmVzdCB8fCB2YWx1ZSA8IGJlc3Quc2NvcmUpIGJlc3QgPSB7IGl0ZW0sIHNjb3JlOiB2YWx1ZSB9O1xuICB9XG4gIHJldHVybiBiZXN0Py5pdGVtID8/IG51bGw7XG59XG4iLCAiLyoqXG4gKiBOZWFyYnlUaHJlYXRRdWVyeSBcdTIwMTQgc2hhcmVkIGxhbmUtYXdhcmUgZW5lbXkgcXVlcnkgZm9yIHNoaWVsZCBhbmQgc3dvcmQgZmFtaWxpZXMuXG4gKlxuICogQm90aCBzaGllbGRzIGFuZCBzd29yZHMgb3BlcmF0ZSBuZWFyIHRoZSBwbGF5ZXIsIHNvIHRoZXkgc2hhcmUgdGhpcyBtb2R1bGVcbiAqIHRvIGF2b2lkIGluZGVwZW5kZW50LCBwb3RlbnRpYWxseSBjb25mbGljdGluZyBzY2Fucy5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBpbnRlbnRpb25hbGx5IG1pbmltYWwuIEl0IHByb3ZpZGVzIGVub3VnaCBzdHJ1Y3R1cmUgdG8gYmVcbiAqIGZ1dHVyZS1mcmllbmRseSAob3JpZ2luU2hhcGUgaW5kZXgsIGNvbHVtbi1iYW5kIGF3YXJlbmVzcykgd2l0aG91dFxuICogb3Zlci1idWlsZGluZy4gRXh0ZW5kIHdoZW4gbmVlZGVkIFx1MjAxNCBkbyBub3QgcmVmYWN0b3IgcHJlbWF0dXJlbHkuXG4gKlxuICogTmVhci1wbGF5ZXIgZWZmZWN0IHByZWNlZGVuY2UgKGFwcGxpZWQgYnkgbWFpbi50cyk6XG4gKiAgIDEuIHNoaWVsZEJsb2NrICAgICAgICBcdTIwMTQgY2hhcmdlLWJhc2VkIGhpdCBhYnNvcnB0aW9uXG4gKiAgIDIuIHNoaWVsZFB1bHNlICAgICAgICBcdTIwMTQgZW1lcmdlbmN5IHB1c2hcbiAqICAgMy4gc3dvcmRBdHRhY2sgICAgICAgIFx1MjAxNCBzd29yZCBmYW1pbHlcbiAqICAgNC4gc2hpZWxkQ29udGFjdERhbWFnZSBcdTIwMTQgY29udGFjdCBkYW1hZ2Ugb24gc2hpZWxkIGVkZ2VcbiAqICAgNS4gc2hpZWxkQXVyYSAgICAgICAgIFx1MjAxNCBzbG93L2RlYnVmZiBhdXJhXG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKiBNaW5pbWFsIGVuZW15IGludGVyZmFjZSBleHBlY3RlZCBieSB0aGUgdGhyZWF0IHF1ZXJ5IHN5c3RlbS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0VGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogMCB8IDE7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByb3dJZD86IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWF0UXVlcnlPcHRpb25zIHtcbiAgLyoqIFBsYXllci9zaGllbGQvc3dvcmQgb3JpZ2luIGluIHNjcmVlbiBjb29yZGluYXRlcy4gKi9cbiAgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIC8qKiBQbGF5ZXIncyBjdXJyZW50IGxhbmUuICovXG4gIGxhbmU6IDAgfCAxO1xuICAvKiogTWF4IGNpcmN1bGFyIGRpc3RhbmNlIHRvIGluY2x1ZGUuICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGFsc28gaW5jbHVkZSBlbmVtaWVzIGluIHRoZSBhZGphY2VudCBsYW5lLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgaW5jbHVkZUFkamFjZW50TGFuZXM/OiBib29sZWFuO1xuICAvKiogTGltaXQgdGhlIG51bWJlciBvZiByZXR1cm5lZCB0aHJlYXRzLiBEZWZhdWx0cyB0byB1bmxpbWl0ZWQuICovXG4gIG1heFRhcmdldHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmVteSBJRHMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBjbGFpbWVkIGJ5IGEgaGlnaGVyLXByaW9yaXR5IGVmZmVjdFxuICAgKiB0aGlzIGZyYW1lIGFuZCBzaG91bGQgbm90IGJlIGRvdWJsZS1jb3VudGVkLlxuICAgKiBGdXR1cmUgdXNlIFx1MjAxNCBjdXJyZW50bHkgZW5lbWllcyBjYW4gYmUgYWZmZWN0ZWQgYnkgbXVsdGlwbGUgc3lzdGVtcyBwZXJcbiAgICogZnJhbWUsIGJ1dCB0aGlzIHNldCBwcm92aWRlcyB0aGUgaG9vayB0byBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGV4Y2x1ZGVJZHM/OiBSZWFkb25seVNldDxudW1iZXI+O1xuICAvKipcbiAgICogUHVycG9zZSBhbm5vdGF0aW9uLiBMb2dnZWQgaW4gZGV2IGJ1aWxkcy4gTm90IHVzZWQgZm9yIGZpbHRlcmluZyB5ZXQuXG4gICAqIEZ1dHVyZTogY291bGQgZHJpdmUgcGVyLWZhbWlseSB0YXJnZXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBwdXJwb3NlOiBcInNoaWVsZFwiIHwgXCJzd29yZFwiIHwgXCJhdXJhXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVhcmJ5VGhyZWF0IHtcbiAgdGFyZ2V0OiBUaHJlYXRUYXJnZXQ7XG4gIC8qKiBFdWNsaWRlYW4gZGlzdGFuY2UgZnJvbSBvcmlnaW4gdG8gZW5lbXkgY2VudGVyLiAqL1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5IGZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXR1cm5zIGxpdmUgZW5lbWllcyBzb3J0ZWQgYnkgZGlzdGFuY2UgKG5lYXJlc3QgZmlyc3QpIHRoYXQgZmFsbCB3aXRoaW5cbiAqIHRoZSBnaXZlbiByYW5nZSBhbmQgbGFuZSBwb2xpY3kuXG4gKlxuICogRW5lbWllcyB0aGF0IGFyZSBkeWluZyBhcmUgYWx3YXlzIGV4Y2x1ZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlOZWFyYnlUaHJlYXRzKFxuICBlbmVtaWVzOiByZWFkb25seSBUaHJlYXRUYXJnZXRbXSxcbiAgb3B0czogVGhyZWF0UXVlcnlPcHRpb25zLFxuKTogTmVhcmJ5VGhyZWF0W10ge1xuICBjb25zdCB7IG9yaWdpbiwgbGFuZSwgcmFuZ2UsIGluY2x1ZGVBZGphY2VudExhbmVzID0gZmFsc2UsIG1heFRhcmdldHMsIGV4Y2x1ZGVJZHMgfSA9IG9wdHM7XG4gIGNvbnN0IHJhbmdlU3EgPSByYW5nZSAqIHJhbmdlO1xuICBjb25zdCByZXN1bHRzOiBOZWFyYnlUaHJlYXRbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVuZW1pZXMpIHtcbiAgICBpZiAodGFyZ2V0LmR5aW5nKSBjb250aW51ZTtcbiAgICBpZiAoIWluY2x1ZGVBZGphY2VudExhbmVzICYmIHRhcmdldC5sYW5lICE9PSBsYW5lKSBjb250aW51ZTtcbiAgICBpZiAoZXhjbHVkZUlkcz8uaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG4gICAgY29uc3QgZGlzdFNxID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgaWYgKGRpc3RTcSA+IHJhbmdlU3EpIGNvbnRpbnVlO1xuICAgIHJlc3VsdHMucHVzaCh7IHRhcmdldCwgZGlzdGFuY2U6IE1hdGguc3FydChkaXN0U3EpIH0pO1xuICB9XG5cbiAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XG5cbiAgcmV0dXJuIG1heFRhcmdldHMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHMuc2xpY2UoMCwgbWF4VGFyZ2V0cykgOiByZXN1bHRzO1xufVxuIiwgIi8qKlxuICogU2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc2hpZWxkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIE9uZSBTaGllbGRTdGF0ZSB0cmFja3MgdGhlIGxpdmUgcnVudGltZSBzdGF0ZSBmb3Igd2hhdGV2ZXIgc2hpZWxkIGlzXG4gKiBjdXJyZW50bHkgZXF1aXBwZWQuIFRoZSB0aWNrU2hpZWxkKCkgZnVuY3Rpb24gZHJpdmVzIGFsbCBiZWhhdmlvcmFsIG1vZGVzXG4gKiAoY2hhcmdlLCBwdWxzZSwgY29udGFjdCwgYXVyYSkgYW5kIHJldHVybnMgYSByZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKlxuICogRGVzaWduIHJ1bGU6IHRoaXMgbW9kdWxlIGRvZXMgbm90IG1vZGlmeSBlbmVteSBhcnJheXMgZGlyZWN0bHkuIEl0IHJldHVybnNcbiAqIGEgU2hpZWxkVGlja1Jlc3VsdCB0aGF0IG1haW4udHMgYXBwbGllcy4gVGhpcyBrZWVwcyB0aGUgc2hpZWxkIHN5c3RlbVxuICogdGVzdGFibGUgYW5kIGNvbXBvc2FibGUgd2l0aCBvdGhlciBuZWFyLXBsYXllciBlZmZlY3RzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgU2hpZWxkSWQsIFNoaWVsZE1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBwdWxzZSBlZmZlY3QgKHZpc3VhbClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVB1bHNlRWZmZWN0IHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBwdWxzZUR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBUaW1lc3RhbXAgd2hlbiB0aGUgcHVsc2Ugd2FzIHRyaWdnZXJlZC4gKi9cbiAgc3RhcnRlZEF0OiBudW1iZXI7XG4gIC8qKiBEdXJhdGlvbiBpbiBtcy4gKi9cbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHRyaWdnZXJlZCkuICovXG4gIHg6IG51bWJlcjtcbiAgLyoqIENlbnRlciB5LiAqL1xuICB5OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhZGl1cyBhdCBwZWFrIGV4cGFuc2lvbi4gKi9cbiAgbWF4UmFkaXVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTaGllbGQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkU3RhdGUge1xuICBzaGllbGRJZDogU2hpZWxkSWQ7XG4gIC8qKiBSZW1haW5pbmcgY2hhcmdlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpLiAqL1xuICBjaGFyZ2VzOiBudW1iZXI7XG4gIC8qKiBTZWNvbmRzIHVudGlsIGNvb2xkb3duIGNvbXBsZXRlcy4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBtcyB0aW1lc3RhbXAgYWZ0ZXIgd2hpY2ggdGhlIGhpdCBmbGFzaCBpcyBkb25lLiAqL1xuICBoaXRGbGFzaFVudGlsOiBudW1iZXI7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMSBvZiBoaXQgZmxhc2ggYW5pbWF0aW9uICgxID0gZG9uZSkuICovXG4gIGhpdEZsYXNoUHJvZ3Jlc3M6IG51bWJlcjtcbiAgLyoqIEFjdGl2ZSBleHBhbmRpbmcgcHVsc2UgcmluZ3MgKFB1bHNlIENvcmUpLiAqL1xuICBwdWxzZUVmZmVjdHM6IEFjdGl2ZVB1bHNlRWZmZWN0W107XG4gIC8qKiBFbmVteSBpZHMgYWxyZWFkeSByZXNvbHZlZCBhZ2FpbnN0IHRoaXMgc2hpZWxkLCBwcmV2ZW50aW5nIHJlcGVhdCBkYW1hZ2UgcGVyIGZyYW1lLiAqL1xuICByZWFkb25seSBpbnRlcmNlcHRlZEVuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3Ioc2hpZWxkSWQ6IFNoaWVsZElkLCBtYXhDaGFyZ2VzOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoaWVsZElkID0gc2hpZWxkSWQ7XG4gICAgdGhpcy5jaGFyZ2VzID0gbWF4Q2hhcmdlcztcbiAgICB0aGlzLmNvb2xkb3duTGVmdCA9IDA7XG4gICAgdGhpcy5oaXRGbGFzaFVudGlsID0gMDtcbiAgICB0aGlzLmhpdEZsYXNoUHJvZ3Jlc3MgPSAxO1xuICAgIHRoaXMucHVsc2VFZmZlY3RzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRDb250YWN0VGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgZHlpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkQ29udGFjdFJlc3VsdCB7XG4gIGNvbnRhY3RlZDogYm9vbGVhbjtcbiAgYWJzb3JiZWQ6IGJvb2xlYW47XG4gIGRhbWFnZUFic29yYmVkOiBudW1iZXI7XG4gIGVuZW15RGVzdHJveWVkOiBib29sZWFuO1xufVxuXG4vKiogUmVzb2x2ZSBvbmUgZ2VvbWV0cmljIGVuZW15L3NoaWVsZCBjb250YWN0IGV4YWN0bHkgb25jZSBmb3IgdGhhdCBlbmVteS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlU2hpZWxkQ29udGFjdChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGFyZ2V0OiBTaGllbGRDb250YWN0VGFyZ2V0LFxuICBzaGllbGRYOiBudW1iZXIsXG4gIHNoaWVsZFk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHNjYWxlID0gMSxcbik6IFNoaWVsZENvbnRhY3RSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZENvbnRhY3RSZXN1bHQgPSB7XG4gICAgY29udGFjdGVkOiBmYWxzZSxcbiAgICBhYnNvcmJlZDogZmFsc2UsXG4gICAgZGFtYWdlQWJzb3JiZWQ6IDAsXG4gICAgZW5lbXlEZXN0cm95ZWQ6IGZhbHNlLFxuICB9O1xuICBpZiAodGFyZ2V0LmR5aW5nIHx8IHN0YXRlLmludGVyY2VwdGVkRW5lbXlJZHMuaGFzKHRhcmdldC5pZCkpIHJldHVybiByZXN1bHQ7XG4gIGNvbnN0IHJhZGl1cyA9IHNoaWVsZC5yYWRpdXMgKiBzY2FsZSArIHRhcmdldC5yYWRpdXM7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBzaGllbGRYO1xuICBjb25zdCBkeSA9IHRhcmdldC55IC0gc2hpZWxkWTtcbiAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gcmFkaXVzICogcmFkaXVzKSByZXR1cm4gcmVzdWx0O1xuXG4gIHJlc3VsdC5jb250YWN0ZWQgPSB0cnVlO1xuICBzdGF0ZS5pbnRlcmNlcHRlZEVuZW15SWRzLmFkZCh0YXJnZXQuaWQpO1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIGNvbnN0IGFic29yYmVkID0gTWF0aC5taW4oc3RhdGUuY2hhcmdlcywgdGFyZ2V0LmhlYWx0aCk7XG4gIHN0YXRlLmNoYXJnZXMgLT0gYWJzb3JiZWQ7XG4gIHRhcmdldC5oZWFsdGggLT0gYWJzb3JiZWQ7XG4gIHN0YXRlLmhpdEZsYXNoVW50aWwgPSBub3cgKyAyODA7XG4gIHN0YXRlLmhpdEZsYXNoUHJvZ3Jlc3MgPSAwO1xuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICByZXN1bHQuYWJzb3JiZWQgPSB0cnVlO1xuICByZXN1bHQuZGFtYWdlQWJzb3JiZWQgPSBhYnNvcmJlZDtcbiAgcmVzdWx0LmVuZW15RGVzdHJveWVkID0gdGFyZ2V0LmhlYWx0aCA8PSAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgcmVzdWx0IFx1MjAxNCB3aGF0IG1haW4udHMgc2hvdWxkIGFwcGx5IHRoaXMgZnJhbWVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZFRpY2tSZXN1bHQge1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIHJlY2VpdmUgY29udGFjdERhbWFnZSB0aGlzIGZyYW1lIChjb250YWN0IHNoaWVsZHMpLiAqL1xuICBjb250YWN0RGFtYWdlRW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogQW1vdW50IG9mIGNvbnRhY3QgZGFtYWdlIHBlciBlbmVteS4gKi9cbiAgY29udGFjdERhbWFnZUFtb3VudDogbnVtYmVyO1xuICAvKiogRW5lbXkgSURzIHRoYXQgc2hvdWxkIGhhdmUgdGhlaXIgc3BlZWQgbXVsdGlwbGllZCBieSBzbG93TXVsdGlwbGllciAoYXVyYSkuICovXG4gIHNsb3dFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBFZmZlY3RpdmUgc2xvdyBtdWx0aXBsaWVyIHRvIGFwcGx5LiAqL1xuICBzbG93TXVsdGlwbGllcjogbnVtYmVyO1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHNoaWVsZCBhYnNvcmJlZCBhIGhpdCB0aGlzIGZyYW1lIChjaGFyZ2UgY29uc3VtZWQpLlxuICAgKiBtYWluLnRzIHNob3VsZCBOT1Qga2lsbC9kYW1hZ2UgdGhlIHBsYXllciBmb3IgdGhhdCBjb2xsaXNpb24uXG4gICAqL1xuICBhYnNvcmJlZEhpdDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuZW15IElEcyB0byBwdXNoIGF3YXkgZnJvbSB0aGUgcGxheWVyIGNlbnRlciAocHVsc2Ugc2hpZWxkKS5cbiAgICogbWFpbi50cyBzaG91bGQgYWRkIHB1c2hEaXN0YW5jZSB0byB0aGUgZW5lbXkncyBvdXR3YXJkIHZlbG9jaXR5IG9yIHBvc2l0aW9uLlxuICAgKi9cbiAgcHVzaEVuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIFB1c2ggZGlzdGFuY2UgaW4gcHguICovXG4gIHB1c2hEaXN0YW5jZTogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBQVUxTRV9EVVJBVElPTl9NUyA9IDYwMDtcblxuLyoqXG4gKiBEcml2ZXMgdGhlIHNoaWVsZCBmb3Igb25lIGdhbWUgZnJhbWUuXG4gKlxuICogQHBhcmFtIHN0YXRlICAgICAgIE11dGFibGUgc2hpZWxkIHN0YXRlIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSBzaGllbGQgICAgICBJbW11dGFibGUgc2hpZWxkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgICAgTmVhcmJ5IHRocmVhdHMgZnJvbSBxdWVyeU5lYXJieVRocmVhdHMoKSAocmFuZ2UgPSBzaGllbGQucmFkaXVzKS5cbiAqIEBwYXJhbSBwbGF5ZXJYICAgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeCAoZm9yIHB1bHNlIG9yaWdpbikuXG4gKiBAcGFyYW0gcGxheWVyWSAgICAgQ3VycmVudCBwbGF5ZXIgY2VudGVyIHkuXG4gKiBAcGFyYW0gbm93ICAgICAgICAgQ3VycmVudCB0aW1lc3RhbXAgaW4gbXMuXG4gKiBAcGFyYW0gZGVsdGEgICAgICAgRnJhbWUgZGVsdGEgaW4gc2Vjb25kcy5cbiAqIEByZXR1cm5zICAgICAgICAgICBBY3Rpb25zIGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGlja1NoaWVsZChcbiAgc3RhdGU6IFNoaWVsZFN0YXRlLFxuICBzaGllbGQ6IFNoaWVsZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbik6IFNoaWVsZFRpY2tSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFNoaWVsZFRpY2tSZXN1bHQgPSB7XG4gICAgY29udGFjdERhbWFnZUVuZW15SWRzOiBbXSxcbiAgICBjb250YWN0RGFtYWdlQW1vdW50OiAwLFxuICAgIHNsb3dFbmVteUlkczogW10sXG4gICAgc2xvd011bHRpcGxpZXI6IDEuMCxcbiAgICBhYnNvcmJlZEhpdDogZmFsc2UsXG4gICAgcHVzaEVuZW15SWRzOiBbXSxcbiAgICBwdXNoRGlzdGFuY2U6IDAsXG4gIH07XG5cbiAgLy8gQWR2YW5jZSBjb29sZG93blxuICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0ID4gMCkgc3RhdGUuY29vbGRvd25MZWZ0ID0gTWF0aC5tYXgoMCwgc3RhdGUuY29vbGRvd25MZWZ0IC0gZGVsdGEpO1xuXG4gIC8vIFVwZGF0ZSBwdWxzZSBwcm9ncmVzc1xuICBmb3IgKGNvbnN0IHB1bHNlIG9mIHN0YXRlLnB1bHNlRWZmZWN0cykge1xuICAgIHB1bHNlLnByb2dyZXNzID0gKG5vdyAtIHB1bHNlLnN0YXJ0ZWRBdCkgLyBwdWxzZS5kdXJhdGlvbk1zO1xuICB9XG4gIHN0YXRlLnB1bHNlRWZmZWN0cyA9IHN0YXRlLnB1bHNlRWZmZWN0cy5maWx0ZXIocCA9PiBwLnByb2dyZXNzIDwgMSk7XG5cbiAgLy8gQWR2YW5jZSBoaXQgZmxhc2hcbiAgaWYgKHN0YXRlLmhpdEZsYXNoVW50aWwgPiAwKSB7XG4gICAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IE1hdGgubWluKDEsIChub3cgLSAoc3RhdGUuaGl0Rmxhc2hVbnRpbCAtIDI4MCkpIC8gMjgwKTtcbiAgfVxuXG4gIC8vIFJlZmlsbCBjaGFyZ2VzIHdoZW4gY29vbGRvd24gY29tcGxldGVzIChjaGFyZ2UtYmFzZWQgc2hpZWxkcylcbiAgaWYgKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiICYmIHN0YXRlLmNvb2xkb3duTGVmdCA9PT0gMCAmJiBzdGF0ZS5jaGFyZ2VzIDwgc2hpZWxkLm1heENoYXJnZXMpIHtcbiAgICBzdGF0ZS5jaGFyZ2VzID0gc2hpZWxkLm1heENoYXJnZXM7XG4gIH1cblxuICBpZiAodGhyZWF0cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IGNvbnRhY3QgXHUyMDE0IGRlYWwgZGFtYWdlIHRvIGVuZW1pZXMgdG91Y2hpbmcgdGhlIHNoaWVsZCBlZGdlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoZmFsc2UpIHtcbiAgICByZXN1bHQuY29udGFjdERhbWFnZUFtb3VudCA9IHNoaWVsZC5jb250YWN0RGFtYWdlO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogYXVyYSBcdTIwMTQgc2xvdyBlbmVtaWVzIGluc2lkZSByYWRpdXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIHJlc3VsdC5zbG93TXVsdGlwbGllciA9IHNoaWVsZC5zbG93TXVsdGlwbGllcjtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LnNsb3dFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGU6IHB1bHNlIFx1MjAxNCBlbWl0IHB1c2ggcmluZyB3aGVuIGFueSBlbmVteSBlbnRlcnMgcmFuZ2VcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIC8vIFRyaWdnZXIgcHVsc2VcbiAgICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICAgIGNvbnN0IHB1bHNlOiBBY3RpdmVQdWxzZUVmZmVjdCA9IHtcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc3RhcnRlZEF0OiBub3csXG4gICAgICBkdXJhdGlvbk1zOiBQVUxTRV9EVVJBVElPTl9NUyxcbiAgICAgIHg6IHBsYXllclgsXG4gICAgICB5OiBwbGF5ZXJZLFxuICAgICAgbWF4UmFkaXVzOiBzaGllbGQucmFkaXVzICogMS44LFxuICAgICAgY29sb3I6IFwiXCIsIC8vIGZpbGxlZCBieSBkcmF3IGNvZGUgd2l0aCBuZW9uUGFsZXR0ZVtzaGllbGQuY29sb3JdXG4gICAgfTtcbiAgICBzdGF0ZS5wdWxzZUVmZmVjdHMucHVzaChwdWxzZSk7XG4gICAgcmVzdWx0LnB1c2hEaXN0YW5jZSA9IHNoaWVsZC5wdXNoRGlzdGFuY2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5wdXNoRW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGl0IGFic29ycHRpb24gXHUyMDE0IGNhbGxlZCBieSBtYWluLnRzIHdoZW4gYW4gZW5lbXkgd291bGQgdG91Y2ggdGhlIHBsYXllclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQXR0ZW1wdCB0byBhYnNvcmIgYSBoaXQgdXNpbmcgc2hpZWxkIGNoYXJnZXMuXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhpdCB3YXMgYWJzb3JiZWQgKGNoYXJnZSBjb25zdW1lZCksIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyeUFic29yYkhpdChzdGF0ZTogU2hpZWxkU3RhdGUsIHNoaWVsZDogU2hpZWxkTWVtYmVyLCBub3c6IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoc3RhdGUuY2hhcmdlcyA8PSAwKSByZXR1cm4gZmFsc2U7XG4gIHN0YXRlLmNoYXJnZXMgLT0gMTtcbiAgc3RhdGUuaGl0Rmxhc2hVbnRpbCA9IG5vdyArIDI4MDtcbiAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IDA7XG4gIC8vIFJlY2hhcmdlIGJlZ2lucyBhZnRlciB0aGUgbW9zdCByZWNlbnQgYWJzb3JiZWQgaGl0LiBLZWVwaW5nIHRoZSBjb29sZG93blxuICAvLyBhY3RpdmUgcHJldmVudHMgdGlja1NoaWVsZCgpIGZyb20gaW1tZWRpYXRlbHkgcmVzdG9yaW5nIGEgcGFydGlhbGx5XG4gIC8vIGRlcGxldGVkIHNoaWVsZCBvbiB0aGUgbmV4dCBmcmFtZS5cbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gc2hpZWxkLmNvb2xkb3duU2Vjb25kcztcbiAgcmV0dXJuIHRydWU7XG59XG4iLCAiLyoqXG4gKiBTd29yZEV2YWx1YXRvciBcdTIwMTQgcGVyLWZyYW1lIHN3b3JkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIFN3b3JkcyBhcmUgTk9UIHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZSB0aWNrIGZ1bmN0aW9uIG9ubHkgdHJpZ2dlcnMgYSBzd2luZ1xuICogd2hlbiBhIHZhbGlkIHRhcmdldCBleGlzdHMgaW4gcmFuZ2UgYW5kIHRoZSBjb29sZG93biBpcyByZWFkeS4gSXQgaWRsZXMgc2lsZW50bHlcbiAqIHdoZW4gbm8gdGFyZ2V0IGlzIHByZXNlbnQuXG4gKlxuICogRGVzaWduIHJ1bGU6IHNhbWUgYXMgc2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBubyBkaXJlY3QgZW5lbXkgbXV0YXRpb24uIFJldHVybnMgYVxuICogU3dvcmRUaWNrUmVzdWx0IGZvciBtYWluLnRzIHRvIGFwcGx5LlxuICovXG5cbmltcG9ydCB0eXBlIHsgU3dvcmRJZCwgU3dvcmRNZW1iZXIsIFN3b3JkVGFyZ2V0aW5nTW9kZSB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgeyBhZHZhbmNlQ29vbGRvd25TbG90cywgcmVtb3ZlQ2xhaW1lZFRhcmdldHMsIHN5bmNTbG90QXJyYXksIHVwZGF0ZUFjdGl2ZVNsb3RzIH0gZnJvbSBcIi4vaW5kZXBlbmRlbnRXZWFwb25TbG90c1wiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBzbGFzaCBhbmltYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBkdXJhdGlvbk1zLiAqL1xuICBwcm9ncmVzczogbnVtYmVyO1xuICBzdGFydGVkQXQ6IG51bWJlcjtcbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHN3aW5nIG9jY3VycmVkKS4gKi9cbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHRhcmdldFBvaW50czogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XG4gIHNpZGU6IC0xIHwgMTtcbiAgLyoqIFJlYWNoIG9mIHRoZSBhcmMgaW4gcGl4ZWxzLiAqL1xuICByZWFjaDogbnVtYmVyO1xuICAvKiogQXJjIHdpZHRoIGluIGRlZ3JlZXMuICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIENvbG9yLiAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKiogVGhpY2tuZXNzIG11bHRpcGxpZXIuICovXG4gIHRoaWNrbmVzczogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFN3b3JkIHN0YXRlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkU3RhdGUge1xuICBzd29yZElkOiBTd29yZElkO1xuICAvKiogQWN0aXZlIHN3b3JkIGxldmVsLiBSZXBlYXRlZCBwaWNrdXBzIG9mIHRoZSBzYW1lIHN3b3JkIGluY3JlYXNlIHRoaXMgdXAgdG8gNS4gKi9cbiAgbGV2ZWw6IG51bWJlcjtcbiAgLyoqIFNlY29uZHMgcmVtYWluaW5nIHVudGlsIHRoZSBzd29yZCBjYW4gc3dpbmcgYWdhaW4uICovXG4gIGNvb2xkb3duTGVmdDogbnVtYmVyO1xuICAvKiogQWN0aXZlIHNsYXNoIGFuaW1hdGlvbiwgaWYgYW55LiAqL1xuICBhY3RpdmVTbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24gfCBudWxsO1xuICBwcmV2aW91c1NsYXNoU2lkZTogLTEgfCAxO1xuICBjb29sZG93bkxlZnRzOiBudW1iZXJbXTtcbiAgYWN0aXZlU2xhc2hlczogQXJyYXk8QWN0aXZlU2xhc2hBbmltYXRpb24gfCBudWxsPjtcbiAgcHJldmlvdXNTbGFzaFNpZGVzOiBBcnJheTwtMSB8IDE+O1xuICBuZXh0U2xvdExhdW5jaEFsbG93ZWRBdDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN3b3JkSWQ6IFN3b3JkSWQsIGxldmVsID0gMSkge1xuICAgIHRoaXMuc3dvcmRJZCA9IHN3b3JkSWQ7XG4gICAgdGhpcy5sZXZlbCA9IE1hdGgubWluKDUsIE1hdGgubWF4KDEsIE1hdGguZmxvb3IobGV2ZWwpKSk7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSAwO1xuICAgIHRoaXMuYWN0aXZlU2xhc2ggPSBudWxsO1xuICAgIHRoaXMucHJldmlvdXNTbGFzaFNpZGUgPSAxO1xuICAgIHRoaXMuY29vbGRvd25MZWZ0cyA9IFswXTtcbiAgICB0aGlzLmFjdGl2ZVNsYXNoZXMgPSBbbnVsbF07XG4gICAgdGhpcy5wcmV2aW91c1NsYXNoU2lkZXMgPSBbMV07XG4gICAgdGhpcy5uZXh0U2xvdExhdW5jaEFsbG93ZWRBdCA9IDA7XG4gIH1cblxuICBzeW5jU2xvdHMoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHN5bmNTbG90QXJyYXkodGhpcy5jb29sZG93bkxlZnRzLCBjb3VudCwgKCkgPT4gMCk7XG4gICAgc3luY1Nsb3RBcnJheSh0aGlzLmFjdGl2ZVNsYXNoZXMsIGNvdW50LCAoKSA9PiBudWxsKTtcbiAgICBzeW5jU2xvdEFycmF5KHRoaXMucHJldmlvdXNTbGFzaFNpZGVzLCBjb3VudCwgKCkgPT4gMSk7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSBNYXRoLm1pbiguLi50aGlzLmNvb2xkb3duTGVmdHMpO1xuICAgIHRoaXMuYWN0aXZlU2xhc2ggPSB0aGlzLmFjdGl2ZVNsYXNoZXMuZmluZChCb29sZWFuKSA/PyBudWxsO1xuICAgIHRoaXMucHJldmlvdXNTbGFzaFNpZGUgPSB0aGlzLnByZXZpb3VzU2xhc2hTaWRlc1swXSA/PyAxO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgaGl0IGJ5IHRoZSBzd2luZyB0aGlzIGZyYW1lLiBFbXB0eSBpZiBubyBzd2luZyBvY2N1cnJlZC4gKi9cbiAgaGl0RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogSGl0IHRhcmdldHMgd2l0aCB0aGVpciBwb3NpdGlvbnMgZm9yIGRlbGF5ZWQgdmlzdWFsL2NvbnRhY3QgdGltaW5nLiAqL1xuICBoaXRUYXJnZXRzOiBBcnJheTx7IGlkOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+O1xuICAvKiogRGFtYWdlIHRvIGFwcGx5IHRvIGVhY2ggaGl0IGVuZW15LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgYSBuZXcgc2xhc2ggd2FzIHRyaWdnZXJlZCB0aGlzIGZyYW1lIChmb3IgYXVkaW8sIGV0Yy4pLiAqL1xuICBzd2luZ1RyaWdnZXJlZDogYm9vbGVhbjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUYXJnZXRpbmcgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldHMoXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBtb2RlOiBTd29yZFRhcmdldGluZ01vZGUsXG4gIG1heFRhcmdldHM6IG51bWJlcixcbiAgcm93UmVhY2g6IG51bWJlcixcbik6IE5lYXJieVRocmVhdFtdIHtcbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGlmIChyb3dSZWFjaCA+IDEgJiYgdGhyZWF0c1swXS50YXJnZXQucm93SWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNlbnRlclJvdyA9IHRocmVhdHNbMF0udGFyZ2V0LnJvd0lkO1xuICAgIGNvbnN0IHJvd3MgPSBbLi4ubmV3IFNldCh0aHJlYXRzXG4gICAgICAubWFwKHRocmVhdCA9PiB0aHJlYXQudGFyZ2V0LnJvd0lkKVxuICAgICAgLmZpbHRlcihyb3dJZCA9PiByb3dJZCAhPT0gdW5kZWZpbmVkKSldXG4gICAgICAuc29ydCgoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGNlbnRlclJvdykgLSBNYXRoLmFicyhiIC0gY2VudGVyUm93KSlcbiAgICAgIC5zbGljZSgwLCByb3dSZWFjaCk7XG4gICAgcmV0dXJuIHRocmVhdHNcbiAgICAgIC5maWx0ZXIodGhyZWF0ID0+IHRocmVhdC50YXJnZXQucm93SWQgIT09IHVuZGVmaW5lZCAmJiByb3dzLmluY2x1ZGVzKHRocmVhdC50YXJnZXQucm93SWQpKVxuICAgICAgLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuICB9XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCI6XG4gICAgY2FzZSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIjpcbiAgICAgIC8vIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIGFscmVhZHkgcmV0dXJucyBzb3J0ZWQgYnkgZGlzdGFuY2VcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgY2FzZSBcImZyb250TW9zdFRocmVhdFwiOlxuICAgICAgLy8gSGlnaGVzdCB5ID0gbW9zdCBhZHZhbmNlZCB0b3dhcmQgcGxheWVyXG4gICAgICByZXR1cm4gWy4uLnRocmVhdHNdLnNvcnQoKGEsIGIpID0+IGIudGFyZ2V0LnkgLSBhLnRhcmdldC55KS5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJjbHVzdGVyTmVhclBsYXllclwiOlxuICAgICAgLy8gQWxyZWFkeSBzb3J0ZWQgYnkgZGlzdGFuY2UgXHUyMDE0IHRha2UgbmVhcmVzdCBjbHVzdGVyXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzd29yZFJvd1JlYWNoKHN3b3JkOiBTd29yZE1lbWJlciwgbGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICghc3dvcmQucm93UmVhY2gpIHJldHVybiAxO1xuICBjb25zdCBjbGFtcGVkTGV2ZWwgPSBNYXRoLm1pbig1LCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGxldmVsKSkpO1xuICBjb25zdCBwcm9ncmVzcyA9IChjbGFtcGVkTGV2ZWwgLSAxKSAvIDQ7XG4gIHJldHVybiBNYXRoLnJvdW5kKHN3b3JkLnJvd1JlYWNoLmxldmVsMSArIChzd29yZC5yb3dSZWFjaC5sZXZlbDUgLSBzd29yZC5yb3dSZWFjaC5sZXZlbDEpICogcHJvZ3Jlc3MpO1xufVxuXG5mdW5jdGlvbiBzd29yZERhbWFnZShzd29yZDogU3dvcmRNZW1iZXIsIGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoc3dvcmQuZGFtYWdlQXRMZXZlbDUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHN3b3JkLmRhbWFnZTtcbiAgY29uc3QgY2xhbXBlZExldmVsID0gTWF0aC5taW4oNSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihsZXZlbCkpKTtcbiAgY29uc3QgcHJvZ3Jlc3MgPSAoY2xhbXBlZExldmVsIC0gMSkgLyA0O1xuICByZXR1cm4gc3dvcmQuZGFtYWdlICsgKHN3b3JkLmRhbWFnZUF0TGV2ZWw1IC0gc3dvcmQuZGFtYWdlKSAqIHByb2dyZXNzO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIERyaXZlcyB0aGUgc3dvcmQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgTXV0YWJsZSBzd29yZCBzdGF0ZS5cbiAqIEBwYXJhbSBzd29yZCAgICAgSW1tdXRhYmxlIHN3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgIE5lYXJieSB0aHJlYXRzIGluIHJhbmdlIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gKiBAcGFyYW0gcGxheWVyWCAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4LlxuICogQHBhcmFtIHBsYXllclkgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgVGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIGNvbG9yICAgICBSZXNvbHZlZCBoZXggY29sb3IgKGZyb20gbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTd29yZChcbiAgc3RhdGU6IFN3b3JkU3RhdGUsXG4gIHN3b3JkOiBTd29yZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbiAgdmlzdWFsRHVyYXRpb25NcyA9IHN3b3JkLnNsYXNoRHVyYXRpb25NcyxcbiAgc3dvcmRDb3VudCA9IDEsXG4gIHNsb3RMYXVuY2hTdGFnZ2VyTXMgPSAxODAsXG4pOiBTd29yZFRpY2tSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFN3b3JkVGlja1Jlc3VsdCA9IHtcbiAgICBoaXRFbmVteUlkczogW10sXG4gICAgaGl0VGFyZ2V0czogW10sXG4gICAgZGFtYWdlOiAwLFxuICAgIHN3aW5nVHJpZ2dlcmVkOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0ZS5zeW5jU2xvdHMoc3dvcmRDb3VudCk7XG5cbiAgYWR2YW5jZUNvb2xkb3duU2xvdHMoc3RhdGUuY29vbGRvd25MZWZ0cywgZGVsdGEpO1xuICB1cGRhdGVBY3RpdmVTbG90cyhzdGF0ZS5hY3RpdmVTbGFzaGVzLCBzbGFzaCA9PiB7XG4gICAgc2xhc2gucHJvZ3Jlc3MgPSAobm93IC0gc2xhc2guc3RhcnRlZEF0KSAvIHNsYXNoLmR1cmF0aW9uTXM7XG4gICAgcmV0dXJuIHNsYXNoLnByb2dyZXNzID49IDEgPyBudWxsIDogc2xhc2g7XG4gIH0pO1xuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBNYXRoLm1pbiguLi5zdGF0ZS5jb29sZG93bkxlZnRzKTtcbiAgc3RhdGUuYWN0aXZlU2xhc2ggPSBzdGF0ZS5hY3RpdmVTbGFzaGVzLmZpbmQoQm9vbGVhbikgPz8gbnVsbDtcblxuICAvLyBTd29yZHMgb25seSBzd2luZyB3aGVuIGEgdGFyZ2V0IGV4aXN0cyBpbiByYW5nZSBBTkQgY29vbGRvd24gaXMgcmVhZHkuXG4gIC8vIFRoaXMgaXMgdGhlIGtleSBkaWZmZXJlbmNlIGZyb20gZ3Vucywgd2hpY2ggZmlyZSBvbiBhIHBlcmlvZCByZWdhcmRsZXNzLlxuICBpZiAodGhyZWF0cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgbGV0IHJlbWFpbmluZyA9IFsuLi50aHJlYXRzXTtcbiAgY29uc3QgZGFtYWdlID0gc3dvcmREYW1hZ2Uoc3dvcmQsIHN0YXRlLmxldmVsKTtcbiAgZm9yIChsZXQgc2xvdCA9IDA7IHNsb3QgPCBzdGF0ZS5jb29sZG93bkxlZnRzLmxlbmd0aCAmJiByZW1haW5pbmcubGVuZ3RoID4gMDsgc2xvdCsrKSB7XG4gICAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdHMubGVuZ3RoID4gMSAmJiBub3cgPCBzdGF0ZS5uZXh0U2xvdExhdW5jaEFsbG93ZWRBdCkgYnJlYWs7XG4gICAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdHNbc2xvdF0gPiAwKSBjb250aW51ZTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdFRhcmdldHMocmVtYWluaW5nLCBzd29yZC50YXJnZXRpbmdNb2RlLCBzd29yZC5tYXhUYXJnZXRzLCBzd29yZFJvd1JlYWNoKHN3b3JkLCBzdGF0ZS5sZXZlbCkpO1xuICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuICAgIGNvbnN0IHNpZGU6IC0xIHwgMSA9IHN0YXRlLnByZXZpb3VzU2xhc2hTaWRlc1tzbG90XSA9PT0gLTEgPyAxIDogLTE7XG4gICAgc3RhdGUucHJldmlvdXNTbGFzaFNpZGVzW3Nsb3RdID0gc2lkZTtcbiAgICBzdGF0ZS5wcmV2aW91c1NsYXNoU2lkZSA9IHNpZGU7XG4gICAgc3RhdGUuY29vbGRvd25MZWZ0c1tzbG90XSA9IHN3b3JkLmNvb2xkb3duU2Vjb25kcztcbiAgICBpZiAoc3RhdGUuY29vbGRvd25MZWZ0cy5sZW5ndGggPiAxKSBzdGF0ZS5uZXh0U2xvdExhdW5jaEFsbG93ZWRBdCA9IG5vdyArIHNsb3RMYXVuY2hTdGFnZ2VyTXM7XG4gICAgcmVzdWx0LnN3aW5nVHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICByZXN1bHQuZGFtYWdlID0gZGFtYWdlO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiBzZWxlY3RlZCkge1xuICAgICAgcmVzdWx0LmhpdEVuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICAgIHJlc3VsdC5oaXRUYXJnZXRzLnB1c2goeyBpZDogdGFyZ2V0LmlkLCB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSk7XG4gICAgfVxuICAgIHN0YXRlLmFjdGl2ZVNsYXNoZXNbc2xvdF0gPSB7XG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIHN0YXJ0ZWRBdDogbm93LFxuICAgICAgZHVyYXRpb25NczogdmlzdWFsRHVyYXRpb25NcyxcbiAgICAgIHg6IHBsYXllclgsXG4gICAgICB5OiBwbGF5ZXJZLFxuICAgICAgdGFyZ2V0UG9pbnRzOiBzZWxlY3RlZC5tYXAoKHsgdGFyZ2V0IH0pID0+ICh7IHg6IHRhcmdldC54LCB5OiB0YXJnZXQueSB9KSksXG4gICAgICBzaWRlLFxuICAgICAgcmVhY2g6IHN3b3JkLnJhbmdlICogMC43NSxcbiAgICAgIGFyY0RlZ3JlZXM6IHN3b3JkLmFyY0RlZ3JlZXMsXG4gICAgICBjb2xvcixcbiAgICAgIHRoaWNrbmVzczogc3dvcmQuc2xhc2hUaGlja25lc3MsXG4gICAgfTtcbiAgICByZW1haW5pbmcgPSByZW1vdmVDbGFpbWVkVGFyZ2V0cyhyZW1haW5pbmcsIHNlbGVjdGVkLCAoeyB0YXJnZXQgfSkgPT4gdGFyZ2V0LmlkKTtcbiAgfVxuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBNYXRoLm1pbiguLi5zdGF0ZS5jb29sZG93bkxlZnRzKTtcbiAgc3RhdGUuYWN0aXZlU2xhc2ggPSBzdGF0ZS5hY3RpdmVTbGFzaGVzLmZpbmQoQm9vbGVhbikgPz8gbnVsbDtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwgImltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RW50cmFuY2VQcm9maWxlIHtcbiAgZHVyYXRpb25TZWNvbmRzOiBudW1iZXI7XG4gIHNjYXR0ZXJNYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGVuZW15RW50cmFuY2VQcm9maWxlczogUmVjb3JkPE9yYklkLCBFbmVteUVudHJhbmNlUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuNDgsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogLjU4LFxuICB9LFxuICBnbGFzc1NoaWVsZDoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjM0LFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IDAsXG4gIH0sXG4gIHdpbmdlcjoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjQyLFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC41LFxuICB9LFxuICB0YW5rOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuNzIsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogLjM0LFxuICB9LFxufTtcbiIsICJpbXBvcnQge1xuICBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IsXG4gIHR5cGUgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyxcbiAgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBPcmJJZCB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VmlzdWFsVHlwZSA9IE9yYklkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdEVudmVsb3BlIHtcbiAgZW50cnlTZWNvbmRzOiBudW1iZXI7XG4gIGVudHJ5UHVuY2g6IG51bWJlcjtcbiAgc3VzdGFpblNlY29uZHM6IG51bWJlcjtcbiAgc3VzdGFpbkxldmVsOiBudW1iZXI7XG4gIGZhZGVTZWNvbmRzOiBudW1iZXI7XG4gIHNwYXJrSW50ZW5zaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5lbXlFeGl0Q2xvdWRQcm9maWxlIGV4dGVuZHMgT21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcImFnZVwiIHwgXCJjb2xvclwiIHwgXCJjb3JlQ29sb3JcIiB8IFwieFwiIHwgXCJ5XCIgfCBcInNlZWRcIj4ge1xuICBzaXplOiBudW1iZXI7XG4gIGVudmVsb3BlOiBFbmVteUV4aXRFbnZlbG9wZTtcbiAgY2xvdWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgZW5lbXlUeXBlOiBFbmVteVZpc3VhbFR5cGU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWVkOiBudW1iZXI7XG4gIGFnZTogbnVtYmVyO1xufVxuXG5jb25zdCBiYXNpY09yYkV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIGNsb3VkOiB0cnVlLFxuICBzaXplOiAxMSxcbiAgZGV0YWlsOiA2LFxuICB0dXJidWxlbmNlOiAyLjcyLFxuICBnbG93OiAxMSxcbiAgY29yZUludGVuc2l0eTogMS4yNSxcbiAgcmltSW50ZW5zaXR5OiAuOCxcbiAgb3BhY2l0eTogLjgyLFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJzcGFya0ZhZGVcIixcbiAgZHJpZnRYOiAwLFxuICBkcmlmdFk6IDAsXG4gIGVudmVsb3BlOiB7XG4gICAgZW50cnlTZWNvbmRzOiAuMTYsXG4gICAgZW50cnlQdW5jaDogMi4zMyxcbiAgICBzdXN0YWluU2Vjb25kczogLjIxLFxuICAgIHN1c3RhaW5MZXZlbDogMS4yLFxuICAgIGZhZGVTZWNvbmRzOiAuMjksXG4gICAgc3BhcmtJbnRlbnNpdHk6IDEuMjEsXG4gIH0sXG59O1xuXG5jb25zdCBub0Nsb3VkRXhpdFByb2ZpbGU6IEVuZW15RXhpdENsb3VkUHJvZmlsZSA9IHtcbiAgLi4uYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgY2xvdWQ6IGZhbHNlLFxuICBzaXplOiAwLFxufTtcblxuY29uc3QgdGFua0V4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHNpemU6IDE1LFxuICBnbG93OiAxMyxcbn07XG5cbmV4cG9ydCBjb25zdCBlbmVteUV4aXRQcm9maWxlczogUmVjb3JkPEVuZW15VmlzdWFsVHlwZSwgRW5lbXlFeGl0Q2xvdWRQcm9maWxlPiA9IHtcbiAgYmFzaWNPcmI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGdsYXNzU2hpZWxkOiBub0Nsb3VkRXhpdFByb2ZpbGUsXG4gIHdpbmdlcjogYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgdGFuazogdGFua0V4aXRQcm9maWxlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15RXhpdER1cmF0aW9uKGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlKTogbnVtYmVyIHtcbiAgY29uc3QgZW52ZWxvcGUgPSBlbmVteUV4aXRQcm9maWxlc1tlbmVteVR5cGVdLmVudmVsb3BlO1xuICByZXR1cm4gZW52ZWxvcGUuZW50cnlTZWNvbmRzICsgZW52ZWxvcGUuc3VzdGFpblNlY29uZHMgKyBlbnZlbG9wZS5mYWRlU2Vjb25kcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RXhpdEVmZmVjdChvcHRpb25zOiB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZD86IG51bWJlcjtcbn0pOiBBY3RpdmVFbmVteUV4aXRFZmZlY3Qge1xuICByZXR1cm4ge1xuICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteVR5cGUsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQgPz8gTWF0aC5yYW5kb20oKSAqIDEwMDAsXG4gICAgYWdlOiAwLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRW5lbXlFeGl0RWZmZWN0cyhlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSwgZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgaW5kZXggPSBlZmZlY3RzLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlZmZlY3QgPSBlZmZlY3RzW2luZGV4XTtcbiAgICBlZmZlY3QuYWdlICs9IGRlbHRhU2Vjb25kcztcbiAgICBpZiAoZWZmZWN0LmFnZSA+PSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKSkgZWZmZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXRDbG91ZChlZmZlY3Q6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdCk6IE5lb25Ub3BEb3duQ2xvdWRCdXJzdCB7XG4gIGNvbnN0IHByb2ZpbGUgPSBlbmVteUV4aXRQcm9maWxlc1tlZmZlY3QuZW5lbXlUeXBlXTtcbiAgaWYgKCFwcm9maWxlLmNsb3VkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICBjb3JlQ29sb3I6IGVmZmVjdC5jb2xvcixcbiAgICAgIHg6IGVmZmVjdC54LFxuICAgICAgeTogZWZmZWN0LnksXG4gICAgICBzaXplOiAwLFxuICAgICAgZGV0YWlsOiAzLFxuICAgICAgdHVyYnVsZW5jZTogMCxcbiAgICAgIGdsb3c6IDAsXG4gICAgICBjb3JlSW50ZW5zaXR5OiAwLFxuICAgICAgcmltSW50ZW5zaXR5OiAwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGRpc3NpcGF0aW9uVGltZTogZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSksXG4gICAgICBkaXNzaXBhdGlvbkFjdGlvbjogXCJzcGFya0ZhZGVcIixcbiAgICAgIHNlZWQ6IGVmZmVjdC5zZWVkLFxuICAgICAgYWdlOiBlZmZlY3QuYWdlLFxuICAgIH07XG4gIH1cbiAgY29uc3QgZW52ZWxvcGUgPSBwcm9maWxlLmVudmVsb3BlO1xuICBjb25zdCBkdXJhdGlvbiA9IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpO1xuICBjb25zdCBlbnRyeVQgPSBNYXRoLm1pbigxLCBlZmZlY3QuYWdlIC8gTWF0aC5tYXgoLjAwMSwgZW52ZWxvcGUuZW50cnlTZWNvbmRzKSk7XG4gIGNvbnN0IGZhZGVTdGFydCA9IGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzO1xuICBjb25zdCBmYWRlVCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChlZmZlY3QuYWdlIC0gZmFkZVN0YXJ0KSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmZhZGVTZWNvbmRzKSkpO1xuICBjb25zdCBzdXN0YWluID0gZWZmZWN0LmFnZSA+PSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgJiYgZWZmZWN0LmFnZSA8IGZhZGVTdGFydCA/IGVudmVsb3BlLnN1c3RhaW5MZXZlbCA6IDE7XG4gIGNvbnN0IGVudHJ5Rmxhc2ggPSAxICsgTWF0aC5zaW4oZW50cnlUICogTWF0aC5QSSkgKiBlbnZlbG9wZS5lbnRyeVB1bmNoO1xuICBjb25zdCBmYWRlRW5lcmd5ID0gMSAtIGZhZGVUICogLjYyO1xuICBjb25zdCBzcGFya0FjY2VudCA9IDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjIyO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgY29yZUNvbG9yOiBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IoZWZmZWN0LmNvbG9yKSxcbiAgICB4OiBlZmZlY3QueCxcbiAgICB5OiBlZmZlY3QueSxcbiAgICBzaXplOiBwcm9maWxlLnNpemUgKiAoLjQ4ICsgZW50cnlUICogLjUyKSxcbiAgICBkZXRhaWw6IHByb2ZpbGUuZGV0YWlsLFxuICAgIHR1cmJ1bGVuY2U6IHByb2ZpbGUudHVyYnVsZW5jZSxcbiAgICBnbG93OiAocHJvZmlsZS5nbG93ID8/IDEpICogZW50cnlGbGFzaCAqIHN1c3RhaW4gKiBmYWRlRW5lcmd5ICogc3BhcmtBY2NlbnQsXG4gICAgY29yZUludGVuc2l0eTogKHByb2ZpbGUuY29yZUludGVuc2l0eSA/PyAxKSAqICgxICsgZW52ZWxvcGUuZW50cnlQdW5jaCAqICgxIC0gZW50cnlUKSAqIC41NSksXG4gICAgcmltSW50ZW5zaXR5OiAocHJvZmlsZS5yaW1JbnRlbnNpdHkgPz8gMSkgKiAoMSArIGZhZGVUICogZW52ZWxvcGUuc3BhcmtJbnRlbnNpdHkgKiAuMzUpLFxuICAgIG9wYWNpdHk6IChwcm9maWxlLm9wYWNpdHkgPz8gMSkgKiAoZWZmZWN0LmFnZSA8IGZhZGVTdGFydCA/IDEgOiAxIC0gZmFkZVQgKiAuODgpLFxuICAgIGRpc3NpcGF0aW9uVGltZTogZHVyYXRpb24sXG4gICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgZHJpZnRYOiBwcm9maWxlLmRyaWZ0WCA/PyAwLFxuICAgIGRyaWZ0WTogcHJvZmlsZS5kcmlmdFkgPz8gMCxcbiAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICBhZ2U6IE1hdGgubWluKGVmZmVjdC5hZ2UsIGR1cmF0aW9uKSxcbiAgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUsIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCwgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kge1xuICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICBhc3BlY3RIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyVmlld3BvcnRQb2xpY3kgZXh0ZW5kcyBQb3J0cmFpdFZpZXdwb3J0UG9saWN5IHtcbiAgcmVhZG9ubHkgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIjtcbiAgcmVhZG9ubHkgbG9naWNhbFdpZHRoOiBudW1iZXI7XG4gIHJlYWRvbmx5IGxvZ2ljYWxIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJWaWV3cG9ydDogTGFuZVJ1bm5lclZpZXdwb3J0UG9saWN5ID0ge1xuICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxuICBhc3BlY3RXaWR0aDogOSxcbiAgYXNwZWN0SGVpZ2h0OiAxNixcbiAgbG9naWNhbFdpZHRoOiA0NTAsXG4gIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzIHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxvb2tBbmdsZURlZ3JlZXM6IG51bWJlcjtcbiAgZm9sbG93RGlzdGFuY2U6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBob3Jpem9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdGVkU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyVmlld3BvcnQge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcGxheWVyWTogbnVtYmVyO1xuICBmb2N1c1g/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYKHdpZHRoOiBudW1iZXIsIHRhcmdldFg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gIHJldHVybiBjZW50ZXJYICsgKHRhcmdldFggLSBjZW50ZXJYKSAqIC41NTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDY1LFxuICBsb29rQW5nbGVEZWdyZWVzOiAyNyxcbiAgZm9sbG93RGlzdGFuY2U6IDIwLFxuICB6b29tOiAuMixcbiAgaG9yaXpvbjogLjUxLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIGNsb3VkczogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBQcm9qZWN0ZWRTY2VuZSB7XG4gIGNvbnN0IHByb2plY3RQb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCk7XG5cbiAgY29uc3QgcHJvamVjdGVkUHJpbWl0aXZlcyA9IHByaW1pdGl2ZXMubWFwKHByaW1pdGl2ZSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZS5zaGFwZSA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uID8/IDA7XG4gICAgICBjb25zdCBoYWxmTGVuZ3RoID0gcHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGg7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBzdGFydCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCAtIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSAtIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgY29uc3QgZHkgPSBlbmQueSAtIHN0YXJ0Lnk7XG4gICAgICBjb25zdCBzY2FsZSA9IChzdGFydC5zY2FsZSArIGVuZC5zY2FsZSkgKiAuNTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgICAgeDogKHN0YXJ0LnggKyBlbmQueCkgLyAyLFxuICAgICAgICB5OiAoc3RhcnQueSArIGVuZC55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBwcmltaXRpdmUud2lkdGggKiBzY2FsZSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLngsIHByaW1pdGl2ZS55KTtcbiAgICBjb25zdCB3aWR0aCA9IHByaW1pdGl2ZS53aWR0aCAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IGhlaWdodCA9IChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCkgKiBwb2ludC5zY2FsZTtcbiAgICBsZXQgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb247XG4gICAgaWYgKHJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGF4aXNMZW5ndGggPSBNYXRoLm1heChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCwgcHJpbWl0aXZlLndpZHRoLCAxKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBheGlzTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBheGlzTGVuZ3RoKTtcbiAgICAgIHJvdGF0aW9uID0gTWF0aC5hdGFuMihwb2ludC54IC0gZW5kLngsIGVuZC55IC0gcG9pbnQueSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcm90YXRpb24sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdGVkU2hhcGVzID0gc2hhcGVzXG4gICAgLm1hcChzaGFwZSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNoYXBlLFxuICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICBzaXplOiBzaGFwZS5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgICAgIHo6IChzaGFwZS56ID8/IDApIC0gcG9pbnQuZGVwdGggKiAuMDAwOCxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gKChiLnogPz8gMCkgLSAoYS56ID8/IDApKSk7XG5cbiAgY29uc3QgcHJvamVjdGVkQ2xvdWRzID0gY2xvdWRzLm1hcChjbG91ZCA9PiB7XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoY2xvdWQueCwgY2xvdWQueSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICBzaXplOiBjbG91ZC5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlczogcHJvamVjdGVkUHJpbWl0aXZlcywgY2xvdWRzOiBwcm9qZWN0ZWRDbG91ZHMsIHNoYXBlczogcHJvamVjdGVkU2hhcGVzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50KFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSB7XG4gIHJldHVybiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpKHgsIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5wcm9qZWN0SGVsaWNvcHRlclNjcmVlblBvaW50KFxuICBzY3JlZW5YOiBudW1iZXIsXG4gIHNjcmVlblk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGNvbnN0IGZhbGxiYWNrID0geyB4OiBzY3JlZW5YLCB5OiBzY3JlZW5ZIH07XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IGZvY3VzWCA9IHZpZXdwb3J0LmZvY3VzWCA/PyBjZW50ZXJYO1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gIGNvbnN0IHNjcmVlblJhdGlvID0gKGhvcml6b25ZIC0gc2NyZWVuWSkgLyBmb2NhbExlbmd0aDtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBzaW4gLSBzY3JlZW5SYXRpbyAqIGNvcztcbiAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IC4wMDAxKSByZXR1cm4gZmFsbGJhY2s7XG4gIGNvbnN0IHdvcmxkWiA9IC1yZWxhdGl2ZVkgKiAoY29zICsgc2NyZWVuUmF0aW8gKiBzaW4pIC8gZGVub21pbmF0b3I7XG4gIGNvbnN0IGNhbWVyYVogPSBNYXRoLm1heCgyMCwgd29ybGRaICogY29zIC0gcmVsYXRpdmVZICogc2luKTtcbiAgY29uc3Qgc2NhbGUgPSBmb2NhbExlbmd0aCAvIGNhbWVyYVo7XG4gIGNvbnN0IHBvaW50ID0ge1xuICAgIHg6IGZvY3VzWCArIChzY3JlZW5YIC0gY2VudGVyWCkgLyBzY2FsZSxcbiAgICB5OiB2aWV3cG9ydC5wbGF5ZXJZICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2UgLSB3b3JsZFosXG4gIH07XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUocG9pbnQueCkgJiYgTnVtYmVyLmlzRmluaXRlKHBvaW50LnkpICYmIE1hdGguYWJzKHBvaW50LngpIDwgNTAwMCAmJiBNYXRoLmFicyhwb2ludC55KSA8IDUwMDBcbiAgICA/IHBvaW50XG4gICAgOiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCkge1xuICBjb25zdCBjZW50ZXJYID0gdmlld3BvcnQud2lkdGggLyAyO1xuICBjb25zdCBmb2N1c1ggPSB2aWV3cG9ydC5mb2N1c1ggPz8gY2VudGVyWDtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIHJldHVybiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHdvcmxkWCA9IHggLSBmb2N1c1g7XG4gICAgY29uc3Qgd29ybGRaID0gdmlld3BvcnQucGxheWVyWSAtIHkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZTtcbiAgICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICAgIGNvbnN0IGNhbWVyYVkgPSByZWxhdGl2ZVkgKiBjb3MgKyB3b3JsZFogKiBzaW47XG4gICAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KG1pbkRlcHRoLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICAgIGNvbnN0IHNjYWxlID0gZm9jYWxMZW5ndGggLyBjYW1lcmFaO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjZW50ZXJYICsgd29ybGRYICogc2NhbGUsXG4gICAgICB5OiBob3Jpem9uWSAtIGNhbWVyYVkgKiBzY2FsZSxcbiAgICAgIHNjYWxlLFxuICAgICAgZGVwdGg6IGNhbWVyYVosXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmxkWUZvclByb2plY3RlZFkoXG4gIHNjcmVlblk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IHsgaGVpZ2h0OiBudW1iZXI7IHBsYXllclk6IG51bWJlciB9LFxuKTogbnVtYmVyIHtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICBjb25zdCBzY3JlZW5SYXRpbyA9IChob3Jpem9uWSAtIHNjcmVlblkpIC8gZm9jYWxMZW5ndGg7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gc2luIC0gc2NyZWVuUmF0aW8gKiBjb3M7XG4gIGlmIChNYXRoLmFicyhkZW5vbWluYXRvcikgPCAuMDAwMSkgcmV0dXJuIE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICBjb25zdCB3b3JsZFogPSAtcmVsYXRpdmVZICogKGNvcyArIHNjcmVlblJhdGlvICogc2luKSAvIGRlbm9taW5hdG9yO1xuICByZXR1cm4gdmlld3BvcnQucGxheWVyWSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlIC0gd29ybGRaO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgTmVvblNoYXBlQWN0b3IsXG4gIE5lb25TaGFwZURpc3Bvc2FsLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCwgdHlwZSBPcmJNZW1iZXIgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgZW5lbXlFbnRyYW5jZVByb2ZpbGVzIH0gZnJvbSBcIi4vZW5lbXlFbnRyYW5jZVZpc3VhbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUVuZW15RXhpdEVmZmVjdCwgdHlwZSBBY3RpdmVFbmVteUV4aXRFZmZlY3QgfSBmcm9tIFwiLi9lbmVteUV4aXRWaXN1YWxzXCI7XG5pbXBvcnQgeyBwcm9qZWN0SGVsaWNvcHRlclBvaW50LCB0eXBlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgdHlwZSBIZWxpY29wdGVyVmlld3BvcnQgfSBmcm9tIFwiLi92aWV3cG9ydFwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVRyYWNrSWQgPSBgZW5lbXkuJHtzdHJpbmd9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15VHJhY2tJZCA9IChlbmVteUlkOiBPcmJJZCk6IEVuZW15VHJhY2tJZCA9PlxuICBlbmVteUlkID09PSBcImJhc2ljT3JiXCIgPyBcImVuZW15LmJhc2ljXCIgOiBgZW5lbXkuJHtlbmVteUlkfWA7XG5cbmV4cG9ydCBjb25zdCBlbmVteUlkRnJvbVRyYWNrSWQgPSAoaWQ6IHN0cmluZyk6IE9yYklkIHwgbnVsbCA9PiB7XG4gIGlmIChpZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBjYW5kaWRhdGUgPSBpZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG4gIHJldHVybiBjYW5kaWRhdGUgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgT3JiSWQgOiBudWxsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGlkOiBzdHJpbmcpOiB7IGVuZW15SWQ6IE9yYklkOyBkZWZpbml0aW9uOiBPcmJNZW1iZXIgfSB8IG51bGwge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGlkKTtcbiAgcmV0dXJuIGVuZW15SWQgPyB7IGVuZW15SWQsIGRlZmluaXRpb246IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdIH0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5lbXlBY3RvcihlbmVteUlkOiBPcmJJZCk6IE5lb25TaGFwZUFjdG9yIHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdO1xuICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShkZWZpbml0aW9uLnNoYXBlSWQpO1xuICBpZiAoIXNoYXBlKSB0aHJvdyBuZXcgRXJyb3IoYEVuZW15IFwiJHtlbmVteUlkfVwiIHVzZXMgbWlzc2luZyBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7ZGVmaW5pdGlvbi5zaGFwZUlkfVwiLmApO1xuICBjb25zdCBlbnRyYW5jZSA9IGVuZW15RW50cmFuY2VQcm9maWxlc1tlbmVteUlkXTtcbiAgY29uc3QgYWN0b3IgPSBuZXcgTmVvblNoYXBlQWN0b3Ioe1xuICAgIHNoYXBlLFxuICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgZW50cmFuY2VEdXJhdGlvbjogZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLFxuICAgIGVudHJhbmNlTWFnbml0dWRlOiBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlLFxuICB9KTtcbiAgcmV0dXJuIGFjdG9yLmVudGVyKGVudHJhbmNlLmR1cmF0aW9uU2Vjb25kcywgZW50cmFuY2Uuc2NhdHRlck1hZ25pdHVkZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteURlYXRoRWZmZWN0KG9wdGlvbnM6IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWVkPzogbnVtYmVyO1xufSk6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB8IG51bGwge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbb3B0aW9ucy5lbmVteUlkXTtcbiAgaWYgKGRlZmluaXRpb24uZGVhdGhWaXN1YWwgIT09IFwiY2xvdWRcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qoe1xuICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteUlkLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3Bvc2VFbmVteUFjdG9yKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgZGVmaW5pdGlvbjogT3JiTWVtYmVyKTogdm9pZCB7XG4gIGFjdG9yLmV4cGxvZGVNYWduaXR1ZGUgPSBkZWZpbml0aW9uLmV4cGxvc2lvbk1hZ25pdHVkZTtcbiAgYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYW1hZ2VhYmxlRW5lbXkge1xuICBpZDogbnVtYmVyO1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG4gIGR5aW5nOiBib29sZWFuO1xuICBoaXRGbGFzaFVudGlsPzogbnVtYmVyO1xuICBleGl0RWZmZWN0U3Bhd25lZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlYXRFbmVteShcbiAgZW5lbXk6IERhbWFnZWFibGVFbmVteSxcbiAgZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sXG4gIGNvbG9yOiBzdHJpbmcgPSBuZW9uUGFsZXR0ZVtvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXS5iYXNlQ29sb3JdLFxuKTogT3JiTWVtYmVyIHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdO1xuICBlbmVteS5keWluZyA9IHRydWU7XG4gIGlmICghZW5lbXkuZXhpdEVmZmVjdFNwYXduZWQpIHtcbiAgICBlbmVteS5leGl0RWZmZWN0U3Bhd25lZCA9IHRydWU7XG4gICAgY29uc3QgZWZmZWN0ID0gY3JlYXRlRW5lbXlEZWF0aEVmZmVjdCh7XG4gICAgICBlbmVteUlkOiBlbmVteS5lbmVteUlkLFxuICAgICAgeDogZW5lbXkueCxcbiAgICAgIHk6IGVuZW15LnksXG4gICAgICBjb2xvcixcbiAgICAgIHNlZWQ6IGVuZW15LmlkLFxuICAgIH0pO1xuICAgIGlmIChlZmZlY3QpIGVmZmVjdHMucHVzaChlZmZlY3QpO1xuICB9XG4gIGRpc3Bvc2VFbmVteUFjdG9yKGVuZW15LmFjdG9yLCBkZWZpbml0aW9uKTtcbiAgcmV0dXJuIGRlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRW5lbXlEYW1hZ2Uob3B0aW9uczoge1xuICBlbmVteTogRGFtYWdlYWJsZUVuZW15O1xuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXTtcbiAgZGFtYWdlPzogbnVtYmVyO1xuICBpbXBhY3RNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGNvbG9yPzogc3RyaW5nO1xufSk6IHsga2lsbGVkOiBib29sZWFuOyBkZWZpbml0aW9uOiBPcmJNZW1iZXIgfSB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15LmVuZW15SWRdO1xuICBpZiAob3B0aW9ucy5kYW1hZ2UpIG9wdGlvbnMuZW5lbXkuaGVhbHRoIC09IG9wdGlvbnMuZGFtYWdlO1xuICBpZiAob3B0aW9ucy5pbXBhY3RNYWduaXR1ZGUpIHtcbiAgICBvcHRpb25zLmVuZW15LmFjdG9yLmltcGFjdCh7XG4gICAgICBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LFxuICAgICAgbWFnbml0dWRlOiBvcHRpb25zLmltcGFjdE1hZ25pdHVkZSAvIGRlZmluaXRpb24uaW1wYWN0UmVzaXN0YW5jZSxcbiAgICB9KTtcbiAgfVxuICBpZiAob3B0aW9ucy5oaXRGbGFzaFVudGlsICE9PSB1bmRlZmluZWQpIG9wdGlvbnMuZW5lbXkuaGl0Rmxhc2hVbnRpbCA9IG9wdGlvbnMuaGl0Rmxhc2hVbnRpbDtcbiAgaWYgKG9wdGlvbnMuZW5lbXkuaGVhbHRoIDw9IDApIHtcbiAgICByZXR1cm4geyBraWxsZWQ6IHRydWUsIGRlZmluaXRpb246IGRlZmVhdEVuZW15KG9wdGlvbnMuZW5lbXksIG9wdGlvbnMuZWZmZWN0cywgb3B0aW9ucy5jb2xvcikgfTtcbiAgfVxuICByZXR1cm4geyBraWxsZWQ6IGZhbHNlLCBkZWZpbml0aW9uIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUhlYWx0aEJhclByaW1pdGl2ZXMob3B0aW9uczoge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB2aXNpYmxlVGhyZXNob2xkPzogbnVtYmVyO1xufSk6IE5lb25QcmltaXRpdmVbXSB7XG4gIGNvbnN0IHRocmVzaG9sZCA9IG9wdGlvbnMudmlzaWJsZVRocmVzaG9sZCA/PyBvcmJGYW1pbHkubWVtYmVycy5iYXNpY09yYi5oZWFsdGg7XG4gIGlmIChvcHRpb25zLm1heEhlYWx0aCA8PSB0aHJlc2hvbGQpIHJldHVybiBbXTtcbiAgY29uc3QgcmF0aW8gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvcHRpb25zLmhlYWx0aCAvIG9wdGlvbnMubWF4SGVhbHRoKSk7XG4gIGNvbnN0IHkgPSBvcHRpb25zLnk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMzYsIG9wdGlvbnMud2lkdGgpO1xuICBjb25zdCBsZWZ0ID0gb3B0aW9ucy54IC0gd2lkdGggLyAyO1xuICBjb25zdCBmaWxsZWQgPSBNYXRoLm1heCgwLCB3aWR0aCAqIHJhdGlvKTtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB4OiBvcHRpb25zLngsXG4gICAgICB5LFxuICAgICAgd2lkdGg6IDguOCxcbiAgICAgIGhlaWdodDogd2lkdGggLyAyLFxuICAgICAgY29sb3I6IFwiIzE2MDgxN1wiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiIzE2MDgxN1wiLFxuICAgICAgZ2xvdzogLjA4LFxuICAgICAgaW50ZW5zaXR5OiAuNDIsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5QSSAvIDIsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBsZWZ0ICsgZmlsbGVkIC8gMixcbiAgICAgIHksXG4gICAgICB3aWR0aDogNy4yLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBmaWxsZWQpIC8gMixcbiAgICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAuNzgsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5QSSAvIDIsXG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUhlYWx0aEJhclRhcmdldCB7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKFxuICB0YXJnZXRzOiByZWFkb25seSBFbmVteUhlYWx0aEJhclRhcmdldFtdLFxuICBjYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgcmV0dXJuIHRhcmdldHMuZmxhdE1hcCh0YXJnZXQgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1t0YXJnZXQuZW5lbXlJZF07XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0SGVsaWNvcHRlclBvaW50KHRhcmdldC54LCB0YXJnZXQueSwgY2FtZXJhU2V0dGluZ3MsIHZpZXdwb3J0KTtcbiAgICBjb25zdCBwcm9qZWN0ZWRTaXplID0gdGFyZ2V0LnNpemUgKiBwb2ludC5zY2FsZTtcbiAgICBjb25zdCBzY2FsZSA9IHRhcmdldC5zY2FsZSA/PyAxO1xuICAgIHJldHVybiBlbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnkgLSBwcm9qZWN0ZWRTaXplICogLjcyIC0gMTIsXG4gICAgICB3aWR0aDogTWF0aC5tYXgocHJvamVjdGVkU2l6ZSAqIDEuMzUsIGRlZmluaXRpb24ucmFkaXVzICogNS4yICogc2NhbGUgKiBwb2ludC5zY2FsZSksXG4gICAgICBoZWFsdGg6IHRhcmdldC5oZWFsdGgsXG4gICAgICBtYXhIZWFsdGg6IHRhcmdldC5tYXhIZWFsdGgsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5iYXNlQ29sb3JdLFxuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBnZXROZW9uU2hhcGUsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblRvcERvd25TaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IFNoaWVsZE1lbWJlciwgU3dvcmRNZW1iZXIgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBBY3RpdmVTbGFzaEFuaW1hdGlvbiB9IGZyb20gXCIuL2NvbWJhdC9zd29yZEV2YWx1YXRvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuY29uc3QgZW1wdHlTY2VuZSA9ICgpOiBGYW1pbHlWaXN1YWxTY2VuZSA9PiAoeyBwcmltaXRpdmVzOiBbXSwgc2hhcGVzOiBbXSB9KTtcbmNvbnN0IHJlcXVpcmVkU2hhcGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShpZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgTmVvbkZhY3Rvcnkgc2hhcGUgXCIke2lkfVwiIGlzIHJlcXVpcmVkIGJ5IGZhbWlseSB2aXN1YWxzLmApO1xuICByZXR1cm4gc2hhcGU7XG59O1xuY29uc3QgaXNTYWZlU2NlbmVQb2ludCA9IChwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogYm9vbGVhbiA9PlxuICBOdW1iZXIuaXNGaW5pdGUocG9pbnQueCkgJiYgTnVtYmVyLmlzRmluaXRlKHBvaW50LnkpICYmIE1hdGguYWJzKHBvaW50LngpIDwgNTAwMCAmJiBNYXRoLmFicyhwb2ludC55KSA8IDUwMDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFNoaWVsZE1lbWJlcjtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgaW5pdGlhbFN0cmVuZ3RoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHByb2plY3RTY3JlZW5PZmZzZXQ/OiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9mZnNldFg6IG51bWJlciwgb2Zmc2V0WTogbnVtYmVyKSA9PiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIGhpdFByb2dyZXNzPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWVsZFZpc3VhbHMob3B0aW9uczogU2hpZWxkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGNvbnN0IHtcbiAgICBkZWZpbml0aW9uLCB4LCB5LCBub3csXG4gICAgc2NhbGUgPSAxLFxuICAgIHByb2plY3RTY3JlZW5PZmZzZXQsXG4gICAgaGl0UHJvZ3Jlc3MgPSAxLFxuICAgIHZpc2libGUgPSB0cnVlLFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgc3RyZW5ndGggPSBNYXRoLm1heCgwLCBvcHRpb25zLnN0cmVuZ3RoKTtcbiAgY29uc3QgaW5pdGlhbFN0cmVuZ3RoID0gTWF0aC5tYXgoMSwgb3B0aW9ucy5pbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBpbXBhY3QgPSBNYXRoLm1heCgwLCAxIC0gaGl0UHJvZ3Jlc3MpO1xuICBjb25zdCBleHBsb2RpbmcgPSBzdHJlbmd0aCA8PSAwICYmIGhpdFByb2dyZXNzIDwgMTtcbiAgY29uc3QgY29sb3IgPSBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXTtcbiAgY29uc3QgcmFkaXVzID0gZGVmaW5pdGlvbi5yYWRpdXMgKiBzY2FsZTtcblxuICBpZiAodmlzaWJsZSB8fCBleHBsb2RpbmcpIHtcbiAgICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgICBzaGFwZTogcmVxdWlyZWRTaGFwZShcInNoaWVsZC1yaW5nXCIpLFxuICAgICAgeCwgeSxcbiAgICAgIHNpemU6IHJhZGl1cyxcbiAgICAgIGNvbG9yLFxuICAgICAgbGluZVRoaWNrbmVzczogLjcyLFxuICAgICAgZ2xvdzogMSArIGltcGFjdCAqIC44LFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGVuZXJneUludGVuc2l0eTogMS4xNSArIGltcGFjdCAqIDEuNSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNDIgKyBpbXBhY3QgKiAuMyxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjE1ICsgaW1wYWN0ICogMS4yLFxuICAgICAgZW5lcmd5QmxlZWQ6IC41ICsgaW1wYWN0ICogLjM1LFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiBleHBsb2RpbmcgPyBNYXRoLm1pbigxLCBoaXRQcm9ncmVzcykgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogLjksXG4gICAgfSk7XG4gIH1cblxuICBpZiAoIXZpc2libGUpIHJldHVybiBzY2VuZTtcbiAgY29uc3Qgb3JiaXRlclNoYXBlID0gcmVxdWlyZWRTaGFwZShkZWZpbml0aW9uLm9yYml0ZXJTaGFwZSA9PT0gXCJoZXhcIiA/IFwiaGV4LWZpZ2h0ZXJcIiA6IFwic3Rhci1jb3JlXCIpO1xuICBjb25zdCBvcmJpdGVyQ291bnQgPSBNYXRoLmNlaWwoZGVmaW5pdGlvbi5vcmJpdGVyQ291bnQgKiBzdHJlbmd0aCAvIGluaXRpYWxTdHJlbmd0aCk7XG4gIGNvbnN0IGFuZ2xlU3RlcCA9IE1hdGguUEkgKiAyIC8gZGVmaW5pdGlvbi5vcmJpdGVyQ291bnQ7XG4gIGNvbnN0IGJhc2VBbmdsZSA9IG5vdyAvIDEwMDAgKiBkZWZpbml0aW9uLm9yYml0ZXJTcGVlZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmJpdGVyQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gYmFzZUFuZ2xlICsgaSAqIGFuZ2xlU3RlcDtcbiAgICBjb25zdCBmYWxsYmFja09yYml0ZXIgPSB7IHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIHk6IHkgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMgfTtcbiAgICBjb25zdCBwcm9qZWN0ZWRPcmJpdGVyID0gcHJvamVjdFNjcmVlbk9mZnNldD8uKHgsIHksIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzKTtcbiAgICBjb25zdCBvcmJpdGVyID0gcHJvamVjdGVkT3JiaXRlciAmJiBpc1NhZmVTY2VuZVBvaW50KHByb2plY3RlZE9yYml0ZXIpID8gcHJvamVjdGVkT3JiaXRlciA6IGZhbGxiYWNrT3JiaXRlcjtcbiAgICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgICBzaGFwZTogb3JiaXRlclNoYXBlLFxuICAgICAgeDogb3JiaXRlci54LFxuICAgICAgeTogb3JiaXRlci55LFxuICAgICAgc2l6ZTogZGVmaW5pdGlvbi5vcmJpdGVyU2l6ZSAqIDEuOCAqIHNjYWxlLFxuICAgICAgY29sb3IsXG4gICAgICByb3RhdGlvblo6IGFuZ2xlICsgbm93IC8gMTQwMCxcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNCxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjI1LFxuICAgICAgZW5lcmd5QmxlZWQ6IC41LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTd29yZE1lbWJlcjtcbiAgc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgc2xhc2hlcz86IHJlYWRvbmx5IChBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGwpW107XG4gIGRvY2tTaWRlOiAtMSB8IDE7XG4gIGRvY2tTaWRlcz86IHJlYWRvbmx5ICgtMSB8IDEpW107XG4gIHBvaW50czogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XG4gIHR1bmluZz86IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+O1xuICBzY2FsZT86IG51bWJlcjtcbiAgdmlzaWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRWaXN1YWxUdW5pbmcge1xuICBkb2NrU2lkZU9mZnNldDogbnVtYmVyO1xuICBkb2NrRm9yd2FyZDogbnVtYmVyO1xuICBzdHJpa2VEdXJhdGlvbjogbnVtYmVyO1xuICBmb2xsb3dUaHJvdWdoRHVyYXRpb246IG51bWJlcjtcbiAgc3dpbmdBbmdsZTogbnVtYmVyO1xuICBhcmNMaWZ0OiBudW1iZXI7XG4gIGFyY1JhZGl1czogbnVtYmVyO1xuICB0cmFpbFNlZ21lbnRzOiBudW1iZXI7XG4gIHRyYWlsV2lkdGg6IG51bWJlcjtcbiAgdHJhaWxJbnRlbnNpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTd29yZFZpc3VhbFR1bmluZzogU3dvcmRWaXN1YWxUdW5pbmcgPSB7XG4gIGRvY2tTaWRlT2Zmc2V0OiAxMyxcbiAgZG9ja0ZvcndhcmQ6IDMsXG4gIHN0cmlrZUR1cmF0aW9uOiAuMzEsXG4gIGZvbGxvd1Rocm91Z2hEdXJhdGlvbjogLjE4LFxuICBzd2luZ0FuZ2xlOiAyLjgsXG4gIGFyY0xpZnQ6IDE0LFxuICBhcmNSYWRpdXM6IDQyLFxuICB0cmFpbFNlZ21lbnRzOiAxNCxcbiAgdHJhaWxXaWR0aDogMi42LFxuICB0cmFpbEludGVuc2l0eTogLjc1LFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlU3dvcmRWaXN1YWxUdW5pbmcgPSAodHVuaW5nPzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz4pOiBTd29yZFZpc3VhbFR1bmluZyA9PiAoe1xuICAuLi5kZWZhdWx0U3dvcmRWaXN1YWxUdW5pbmcsXG4gIC4uLnR1bmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3dvcmRWaXN1YWxEdXJhdGlvbk1zID0gKHR1bmluZz86IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+KTogbnVtYmVyID0+IHtcbiAgY29uc3QgcmVzb2x2ZWQgPSBjb21wbGV0ZVN3b3JkVmlzdWFsVHVuaW5nKHR1bmluZyk7XG4gIHJldHVybiBNYXRoLm1heCgxMjAsIChyZXNvbHZlZC5zdHJpa2VEdXJhdGlvbiArIHJlc29sdmVkLmZvbGxvd1Rocm91Z2hEdXJhdGlvbikgKiAxMDAwKTtcbn07XG5cbmZ1bmN0aW9uIHF1YWRyYXRpY1BvaW50KGZyb206IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29udHJvbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0bzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICBjb25zdCBpbnYgPSAxIC0gdDtcbiAgcmV0dXJuIHtcbiAgICB4OiBpbnYgKiBpbnYgKiBmcm9tLnggKyAyICogaW52ICogdCAqIGNvbnRyb2wueCArIHQgKiB0ICogdG8ueCxcbiAgICB5OiBpbnYgKiBpbnYgKiBmcm9tLnkgKyAyICogaW52ICogdCAqIGNvbnRyb2wueSArIHQgKiB0ICogdG8ueSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3ViaWNQb2ludChcbiAgZnJvbTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBjb250cm9sQTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBjb250cm9sQjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0bzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0OiBudW1iZXIsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICBjb25zdCBpbnYgPSAxIC0gdDtcbiAgcmV0dXJuIHtcbiAgICB4OiBpbnYgKiogMyAqIGZyb20ueCArIDMgKiBpbnYgKiBpbnYgKiB0ICogY29udHJvbEEueCArIDMgKiBpbnYgKiB0ICogdCAqIGNvbnRyb2xCLnggKyB0ICoqIDMgKiB0by54LFxuICAgIHk6IGludiAqKiAzICogZnJvbS55ICsgMyAqIGludiAqIGludiAqIHQgKiBjb250cm9sQS55ICsgMyAqIGludiAqIHQgKiB0ICogY29udHJvbEIueSArIHQgKiogMyAqIHRvLnksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN3b3JkUGF0aChcbiAgYmFzZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0YXJnZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgZGVzdGluYXRpb25TaWRlOiAtMSB8IDEsXG4gIHNjYWxlOiBudW1iZXIsXG4gIHR1bmluZzogU3dvcmRWaXN1YWxUdW5pbmcsXG4gIGNyb3NzTGFuZTogYm9vbGVhbixcbiAgdGFyZ2V0U3BhbjogbnVtYmVyLFxuKSB7XG4gIGNvbnN0IHN0YXJ0U2lkZTogLTEgfCAxID0gZGVzdGluYXRpb25TaWRlID09PSAxID8gLTEgOiAxO1xuICBjb25zdCBzd2VlcFdpZHRoID0gY3Jvc3NMYW5lID8gdGFyZ2V0U3BhbiAqIC4zNCA6IDA7XG4gIGNvbnN0IHN0YXJ0ID0geyB4OiBiYXNlLnggKyBzdGFydFNpZGUgKiAodHVuaW5nLmRvY2tTaWRlT2Zmc2V0ICogc2NhbGUgKyBzd2VlcFdpZHRoKSwgeTogYmFzZS55IC0gdHVuaW5nLmRvY2tGb3J3YXJkICogc2NhbGUgfTtcbiAgY29uc3QgZmluaXNoID0geyB4OiBiYXNlLnggKyBkZXN0aW5hdGlvblNpZGUgKiAodHVuaW5nLmRvY2tTaWRlT2Zmc2V0ICogc2NhbGUgKyBzd2VlcFdpZHRoKSwgeTogYmFzZS55IC0gdHVuaW5nLmRvY2tGb3J3YXJkICogc2NhbGUgfTtcbiAgY29uc3QgdGFyZ2V0SW5mbHVlbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdHVuaW5nLmFyY1JhZGl1cyAvIDEwMCkpO1xuICBjb25zdCBhcGV4ID0ge1xuICAgIHg6ICgoc3RhcnQueCArIGZpbmlzaC54KSAvIDIgKiAoMSAtIHRhcmdldEluZmx1ZW5jZSkgKyB0YXJnZXQueCAqIHRhcmdldEluZmx1ZW5jZSkgKyBkZXN0aW5hdGlvblNpZGUgKiAoY3Jvc3NMYW5lID8gMTIgKiBzY2FsZSA6IDApLFxuICAgIHk6IE1hdGgubWluKHN0YXJ0LnksIGZpbmlzaC55LCB0YXJnZXQueSkgLSB0dW5pbmcuYXJjTGlmdCAqIHNjYWxlLFxuICB9O1xuICBjb25zdCBjb250cm9sQSA9IHtcbiAgICB4OiBzdGFydC54ICsgc3RhcnRTaWRlICogdHVuaW5nLnN3aW5nQW5nbGUgKiAoY3Jvc3NMYW5lID8gMTggOiAxMykgKiBzY2FsZSxcbiAgICB5OiBzdGFydC55ICsgMTAgKiBzY2FsZSxcbiAgfTtcbiAgY29uc3QgY29udHJvbEIgPSB7XG4gICAgeDogYXBleC54IC0gZGVzdGluYXRpb25TaWRlICogdHVuaW5nLnN3aW5nQW5nbGUgKiAoY3Jvc3NMYW5lID8gMzAgOiAyMikgKiBzY2FsZSxcbiAgICB5OiBhcGV4LnksXG4gIH07XG4gIHJldHVybiB7IHN0YXJ0LCBmaW5pc2gsIGNvbnRyb2xBLCBjb250cm9sQiB9O1xufVxuXG5mdW5jdGlvbiB0YXJnZXRTcGFuKHRhcmdldHM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdKTogbnVtYmVyIHtcbiAgaWYgKHRhcmdldHMubGVuZ3RoIDwgMikgcmV0dXJuIDA7XG4gIGNvbnN0IHhzID0gdGFyZ2V0cy5tYXAodGFyZ2V0ID0+IHRhcmdldC54KTtcbiAgcmV0dXJuIE1hdGgubWF4KC4uLnhzKSAtIE1hdGgubWluKC4uLnhzKTtcbn1cblxuZnVuY3Rpb24gc3dlZXBUYXJnZXRGb3IodGFyZ2V0czogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIHNpZGU6IC0xIHwgMSwgZmFsbGJhY2s6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbGxiYWNrO1xuICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEpIHJldHVybiB0YXJnZXRzWzBdO1xuICBjb25zdCBzb3J0ZWQgPSBbLi4udGFyZ2V0c10uc29ydCgoYSwgYikgPT4gc2lkZSA9PT0gMSA/IGEueCAtIGIueCA6IGIueCAtIGEueCk7XG4gIGNvbnN0IGZpcnN0ID0gc29ydGVkWzBdO1xuICBjb25zdCBsYXN0ID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXTtcbiAgY29uc3Qgc3BhbiA9IE1hdGguYWJzKGxhc3QueCAtIGZpcnN0LngpO1xuICByZXR1cm4ge1xuICAgIHg6IGxhc3QueCArIHNpZGUgKiBNYXRoLm1pbigzNCwgTWF0aC5tYXgoMTQsIHNwYW4gKiAuMSkpLFxuICAgIHk6IE1hdGgubWluKC4uLnNvcnRlZC5tYXAodGFyZ2V0ID0+IHRhcmdldC55KSwgKGZpcnN0LnkgKyBsYXN0LnkpIC8gMiksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNsYXNoUG9zZShcbiAgYmFzZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0YXJnZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgZGVzdGluYXRpb25TaWRlOiAtMSB8IDEsXG4gIHByb2dyZXNzOiBudW1iZXIsXG4gIHNjYWxlOiBudW1iZXIsXG4gIHR1bmluZzogU3dvcmRWaXN1YWxUdW5pbmcsXG4gIGNyb3NzTGFuZTogYm9vbGVhbixcbiAgc3BhbjogbnVtYmVyLFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgcm90YXRpb246IG51bWJlcjsgdHJhaWxQcm9ncmVzczogbnVtYmVyIH0ge1xuICBjb25zdCB0b3RhbER1cmF0aW9uID0gTWF0aC5tYXgoLjAxLCB0dW5pbmcuc3RyaWtlRHVyYXRpb24gKyB0dW5pbmcuZm9sbG93VGhyb3VnaER1cmF0aW9uKTtcbiAgY29uc3Qgc3RyaWtlID0gdHVuaW5nLnN0cmlrZUR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbjtcbiAgY29uc3QgcGF0aCA9IHN3b3JkUGF0aChiYXNlLCB0YXJnZXQsIGRlc3RpbmF0aW9uU2lkZSwgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKTtcbiAgY29uc3QgdGFuZ2VudFNhbXBsZSA9IChwYXRoVDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYSA9IGN1YmljUG9pbnQocGF0aC5zdGFydCwgcGF0aC5jb250cm9sQSwgcGF0aC5jb250cm9sQiwgcGF0aC5maW5pc2gsIE1hdGgubWF4KDAsIHBhdGhUIC0gLjAxNSkpO1xuICAgIGNvbnN0IGIgPSBjdWJpY1BvaW50KHBhdGguc3RhcnQsIHBhdGguY29udHJvbEEsIHBhdGguY29udHJvbEIsIHBhdGguZmluaXNoLCBNYXRoLm1pbigxLCBwYXRoVCArIC4wMTUpKTtcbiAgICByZXR1cm4gTWF0aC5hdGFuMihiLnkgLSBhLnksIGIueCAtIGEueCkgLSBNYXRoLlBJIC8gMjtcbiAgfTtcblxuICBpZiAocHJvZ3Jlc3MgPCBzdHJpa2UpIHtcbiAgICBjb25zdCB0ID0gcHJvZ3Jlc3MgLyBzdHJpa2U7XG4gICAgY29uc3QgZWFzZSA9IHQgKiB0ICogKDMgLSAyICogdCk7XG4gICAgY29uc3QgcG9pbnQgPSBjdWJpY1BvaW50KHBhdGguc3RhcnQsIHBhdGguY29udHJvbEEsIHBhdGguY29udHJvbEIsIHBhdGguZmluaXNoLCBlYXNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICByb3RhdGlvbjogdGFuZ2VudFNhbXBsZShlYXNlKSxcbiAgICAgIHRyYWlsUHJvZ3Jlc3M6IGVhc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHQgPSAocHJvZ3Jlc3MgLSBzdHJpa2UpIC8gTWF0aC5tYXgoLjAwMSwgMSAtIHN0cmlrZSk7XG4gIGNvbnN0IGVhc2UgPSB0ICogdCAqICgzIC0gMiAqIHQpO1xuICBjb25zdCBvdmVyc2hvb3QgPSB7XG4gICAgeDogcGF0aC5maW5pc2gueCArIGRlc3RpbmF0aW9uU2lkZSAqIDcgKiBzY2FsZSxcbiAgICB5OiBwYXRoLmZpbmlzaC55IC0gNCAqIHNjYWxlLFxuICB9O1xuICBjb25zdCBwb2ludCA9IHF1YWRyYXRpY1BvaW50KHBhdGguZmluaXNoLCBvdmVyc2hvb3QsIHBhdGguZmluaXNoLCBlYXNlKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBwb2ludC54LFxuICAgIHk6IHBvaW50LnksXG4gICAgcm90YXRpb246IHRhbmdlbnRTYW1wbGUoMSkgLSBkZXN0aW5hdGlvblNpZGUgKiAoMSAtIGVhc2UpICogLjM1LFxuICAgIHRyYWlsUHJvZ3Jlc3M6IDEsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN3b3JkVHJhaWwoc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgdHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyk6IE5lb25QcmltaXRpdmVbXSB7XG4gIGlmIChzbGFzaC5wcm9ncmVzcyA+PSAxKSByZXR1cm4gW107XG4gIGNvbnN0IGxpZmUgPSAxIC0gc2xhc2gucHJvZ3Jlc3M7XG4gIGNvbnN0IHRoaWNrbmVzcyA9IHNsYXNoLnRoaWNrbmVzcyAqIHNjYWxlO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgdGFyZ2V0cyA9IHNsYXNoLnRhcmdldFBvaW50cy5sZW5ndGggPiAwID8gc2xhc2gudGFyZ2V0UG9pbnRzIDogW3sgeDogc2xhc2gueCwgeTogc2xhc2gueSAtIHNsYXNoLnJlYWNoIH1dO1xuICBjb25zdCBzcGFuID0gdGFyZ2V0U3Bhbih0YXJnZXRzKTtcbiAgY29uc3QgY3Jvc3NMYW5lID0gc3BhbiA+IDgwICogc2NhbGU7XG4gIGNvbnN0IHN3ZWVwVGFyZ2V0ID0gc3dlZXBUYXJnZXRGb3IodGFyZ2V0cywgc2xhc2guc2lkZSwgdGFyZ2V0c1swXSk7XG4gIGZvciAoY29uc3QgW2luZGV4LCBvcmlnaW5dIG9mIG9yaWdpbnMuZW50cmllcygpKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0cy5sZW5ndGggPiAxID8gc3dlZXBUYXJnZXQgOiB0YXJnZXRzW2luZGV4ICUgdGFyZ2V0cy5sZW5ndGhdO1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdHVuaW5nLnRyYWlsU2VnbWVudHM7XG4gICAgY29uc3QgcG9zZSA9IHNsYXNoUG9zZShvcmlnaW4sIHRhcmdldCwgc2xhc2guc2lkZSwgc2xhc2gucHJvZ3Jlc3MsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3Bhbik7XG4gICAgY29uc3QgdHJhdmVsID0gcG9zZS50cmFpbFByb2dyZXNzO1xuICAgIGlmICh0cmF2ZWwgPD0gMCkgY29udGludWU7XG4gICAgY29uc3QgdmlzaWJsZVNlZ21lbnRzID0gTWF0aC5tYXgoMywgTWF0aC5jZWlsKHNlZ21lbnRzICogdHJhdmVsKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXNpYmxlU2VnbWVudHM7IGkrKykge1xuICAgICAgY29uc3QgdDAgPSBNYXRoLm1heCgwLCB0cmF2ZWwgLSAodmlzaWJsZVNlZ21lbnRzIC0gaSkgLyBzZWdtZW50cyk7XG4gICAgICBjb25zdCB0MSA9IE1hdGgubWluKDEsIHQwICsgLjE2KTtcbiAgICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gKyB0dW5pbmcuZm9sbG93VGhyb3VnaER1cmF0aW9uO1xuICAgICAgY29uc3Qgc3RyaWtlID0gdHVuaW5nLnN0cmlrZUR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbjtcbiAgICAgIGNvbnN0IGEgPSBzbGFzaFBvc2Uob3JpZ2luLCB0YXJnZXQsIHNsYXNoLnNpZGUsIHQwICogc3RyaWtlLCBzY2FsZSwgdHVuaW5nLCBjcm9zc0xhbmUsIHNwYW4pO1xuICAgICAgY29uc3QgYiA9IHNsYXNoUG9zZShvcmlnaW4sIHRhcmdldCwgc2xhc2guc2lkZSwgdDEgKiBzdHJpa2UsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3Bhbik7XG4gICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICAgICAgY29uc3QgYWdlID0gaSAvIHZpc2libGVTZWdtZW50cztcbiAgICAgIGNvbnN0IGZhZGUgPSBNYXRoLm1heCguMTgsIE1hdGgucG93KDEgLSBhZ2UsIC44NSkpICogTWF0aC5taW4oMSwgbGlmZSArIC4zNSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KDEuNiwgdGhpY2tuZXNzICogKHR1bmluZy50cmFpbFdpZHRoIC0gYWdlICogdHVuaW5nLnRyYWlsV2lkdGggKiAuNDgpKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZ2xvdzogMS44ICogZmFkZSxcbiAgICAgICAgaW50ZW5zaXR5OiB0dW5pbmcudHJhaWxJbnRlbnNpdHkgKiBmYWRlLFxuICAgICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICAgICAgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KDIuMiwgdGhpY2tuZXNzICogKHR1bmluZy50cmFpbFdpZHRoICogMS4zNSAtIGFnZSAqIHR1bmluZy50cmFpbFdpZHRoICogLjU1KSksXG4gICAgICAgIGhlaWdodDogTWF0aC5oeXBvdChkeCwgZHkpICogLjcyLFxuICAgICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZ2xvdzogMS42ICogZmFkZSxcbiAgICAgICAgaW50ZW5zaXR5OiB0dW5pbmcudHJhaWxJbnRlbnNpdHkgKiBmYWRlLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dvcmRWaXN1YWxzKG9wdGlvbnM6IFN3b3JkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGlmICghb3B0aW9ucy52aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IHsgZGVmaW5pdGlvbiwgc2xhc2gsIHBvaW50cywgc2NhbGUgPSAxIH0gPSBvcHRpb25zO1xuICBjb25zdCB0dW5pbmcgPSBjb21wbGV0ZVN3b3JkVmlzdWFsVHVuaW5nKG9wdGlvbnMudHVuaW5nKTtcbiAgY29uc3Qgc2xhc2hlcyA9IG9wdGlvbnMuc2xhc2hlcyA/PyBbc2xhc2hdO1xuICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBzbG90U2xhc2ggPSBzbGFzaGVzW2luZGV4XSA/PyBudWxsO1xuICAgIGNvbnN0IGRvY2tTaWRlID0gc2xvdFNsYXNoPy5zaWRlID8/IG9wdGlvbnMuZG9ja1NpZGVzPy5baW5kZXhdID8/IG9wdGlvbnMuZG9ja1NpZGU7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHNsb3RTbGFzaD8udGFyZ2V0UG9pbnRzID8/IFtdO1xuICAgIGNvbnN0IHNwYW4gPSB0YXJnZXRTcGFuKHRhcmdldHMpO1xuICAgIGNvbnN0IGNyb3NzTGFuZSA9IHNwYW4gPiA4MCAqIHNjYWxlO1xuICAgIGNvbnN0IHN3ZWVwVGFyZ2V0ID0gc2xvdFNsYXNoID8gc3dlZXBUYXJnZXRGb3IodGFyZ2V0cywgZG9ja1NpZGUsIHsgeDogcG9pbnQueCwgeTogcG9pbnQueSAtIDMwICogc2NhbGUgfSkgOiBudWxsO1xuICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldHMubGVuZ3RoID4gMSA/IHN3ZWVwVGFyZ2V0IDogdGFyZ2V0c1tpbmRleCAlIE1hdGgubWF4KDEsIHRhcmdldHMubGVuZ3RoKV07XG4gICAgY29uc3QgcmVzdCA9IHsgeDogcG9pbnQueCArIGRvY2tTaWRlICogdHVuaW5nLmRvY2tTaWRlT2Zmc2V0ICogc2NhbGUsIHk6IHBvaW50LnkgLSB0dW5pbmcuZG9ja0ZvcndhcmQgKiBzY2FsZSB9O1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzbG90U2xhc2ggJiYgdGFyZ2V0ID8gc2xhc2hQb3NlKHBvaW50LCB0YXJnZXQsIGRvY2tTaWRlLCBzbG90U2xhc2gucHJvZ3Jlc3MsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3BhbikgOiB7XG4gICAgICB4OiByZXN0LngsXG4gICAgICB5OiByZXN0LnksXG4gICAgICByb3RhdGlvbjogLWRvY2tTaWRlICogLjk1LFxuICAgICAgdHJhaWxQcm9ncmVzczogMCxcbiAgICB9O1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic3dvcmQtbmVlZGxlLXNhYnJlXCIpLFxuICAgICAgeDogY3VycmVudC54LFxuICAgICAgeTogY3VycmVudC55LFxuICAgICAgejogLjAyICsgaW5kZXggKiAuMDAxLFxuICAgICAgc2l6ZTogTWF0aC5taW4oMjMsIGRlZmluaXRpb24ucmFuZ2UgKiAuMzQpICogc2NhbGUsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgICByb3RhdGlvblg6IDc1ICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIHJvdGF0aW9uWTogMTMgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgcm90YXRpb25aOiAxNSAqIE1hdGguUEkgLyAxODAgKyBjdXJyZW50LnJvdGF0aW9uLFxuICAgICAgbGluZVRoaWNrbmVzczogLjkyLFxuICAgICAgZ2xvdzogc2xvdFNsYXNoID8gMS42NSA6IDEuMDgsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IHNsb3RTbGFzaCA/IDIuMjUgOiAxLjIsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogc2xvdFNsYXNoID8gLjcyIDogLjQyLFxuICAgICAgZW5lcmd5U3BlZWQ6IHNsb3RTbGFzaCA/IDIuMSA6IDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiBzbG90U2xhc2ggPyAuOCA6IC41LFxuICAgIH0pO1xuICB9XG4gIGZvciAoY29uc3QgW2luZGV4LCBzbG90U2xhc2hdIG9mIHNsYXNoZXMuZW50cmllcygpKSB7XG4gICAgaWYgKCFzbG90U2xhc2gpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2luZGV4XTtcbiAgICBpZiAocG9pbnQpIHNjZW5lLnByaW1pdGl2ZXMucHVzaCguLi5zd29yZFRyYWlsKHNsb3RTbGFzaCwgc2NhbGUsIFtwb2ludF0sIHR1bmluZykpO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIG5vdzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGlja3VwU2hhcGUoc2hhcGVJZDogc3RyaW5nLCBvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSB7XG4gIGNvbnN0IHsgeCwgeSwgY29sb3IsIG5vdywgc2NhbGUgPSAxIH0gPSBvcHRpb25zO1xuICByZXR1cm4ge1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKHNoYXBlSWQpLFxuICAgIHg6IHggKyBNYXRoLnNpbihub3cgLyA0MjAgKyB5ICogLjA3KSAqIDQuNSAqIHNjYWxlLFxuICAgIHksXG4gICAgc2l6ZTogMTAgKiBzY2FsZSAqICgxICsgTWF0aC5zaW4obm93IC8gNjAwICsgeSAqIC4wNSkgKiAuMDgpLFxuICAgIGNvbG9yLFxuICAgIHJvdGF0aW9uWjogbm93IC8gMTEwMCxcbiAgICBsaW5lVGhpY2tuZXNzOiAuNzYsXG4gICAgZ2xvdzogMS4wNSxcbiAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMjUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IC40OCxcbiAgICBlbmVyZ3lTcGVlZDogMS4zNSxcbiAgICBlbmVyZ3lCbGVlZDogLjU1LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic2hpZWxkLXJpbmdcIiwgb3B0aW9ucyk7XG5cbmV4cG9ydCBjb25zdCBzd29yZFBpY2t1cFZpc3VhbCA9IChvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSA9PlxuICBwaWNrdXBTaGFwZShcInN3b3JkLW5lZWRsZS1zYWJyZVwiLCBvcHRpb25zKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgSGVsaWNvcHRlclZpZXdwb3J0IH0gZnJvbSBcIi4vdmlld3BvcnRcIjtcblxuY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5jb25zdCBwbGF5ZXJGb3J3YXJkUm90YXRpb24gPSB7XG4gIHJvdGF0aW9uWDogZGVncmVlc1RvUmFkaWFucygtNTIpLFxuICByb3RhdGlvblk6IGRlZ3JlZXNUb1JhZGlhbnMoLTEpLFxuICByb3RhdGlvblo6IGRlZ3JlZXNUb1JhZGlhbnMoMSksXG59O1xuY29uc3Qgc2NyZWVuRm9yd2FyZFlhdyA9IChkaXJlY3Rpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMihkaXJlY3Rpb24ueCAvIGxlbmd0aCwgLWRpcmVjdGlvbi55IC8gbGVuZ3RoKTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdG9yVmlzdWFsUm9sZSA9XG4gIHwgXCJncm91bmRGb3J3YXJkXCJcbiAgfCBcInNjcmVlbkJpbGxib2FyZFwiXG4gIHwgXCJ0dW1ibGluZ0JpbGxib2FyZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yT3JpZW50YXRpb25Db250ZXh0IHtcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgcGhhc2U/OiBudW1iZXI7XG4gIGZhY2luZz86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yT3JpZW50YXRpb24ocm9sZTogQWN0b3JWaXN1YWxSb2xlLCBjb250ZXh0OiBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCk6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgc3dpdGNoIChyb2xlKSB7XG4gICAgY2FzZSBcImdyb3VuZEZvcndhcmRcIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGxheWVyRm9yd2FyZFJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblg6IHBsYXllckZvcndhcmRSb3RhdGlvbi5yb3RhdGlvblggKyBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDY1MCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4wNixcbiAgICAgICAgcm90YXRpb25ZOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25ZICsgKGNvbnRleHQuZmFjaW5nID8gc2NyZWVuRm9yd2FyZFlhdyhjb250ZXh0LmZhY2luZykgOiAwKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgXCJ0dW1ibGluZ0JpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDcwMCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4xOCxcbiAgICAgIH07XG4gICAgY2FzZSBcInNjcmVlbkJpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWxpY29wdGVyVmlld3BvcnRGb3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBsYXllclk6IG51bWJlciwgZm9jdXNYPzogbnVtYmVyKTogSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCwgcGxheWVyWSwgZm9jdXNYIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcImdyb3VuZEZvcndhcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICAgIHBoYXNlLFxuICAgIGZhY2luZzogeyB4OiAwLCB5OiAtMSB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15T3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHBoYXNlID0gMCxcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJ0dW1ibGluZ0JpbGxib2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmlsbGJvYXJkT3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwic2NyZWVuQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlTGFuZVJ1bm5lclNjZW5lLCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkLCB0eXBlIE5lb25QcmltaXRpdmUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxudHlwZSBTY2VuZUJhY2tncm91bmRTdGF0ZSA9IFwibWlzc2luZ1wiIHwgXCJsb2FkZWRcIiB8IFwibG9hZGluZ1wiO1xuXG5jb25zdCBzY2VuZUJhY2tncm91bmRzID0gbmV3IE1hcDxzdHJpbmcsIFNjZW5lQmFja2dyb3VuZFN0YXRlPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lclNjZW5lUHJpbWl0aXZlcyhcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICB0aW1lTXM6IG51bWJlcixcbik6IE5lb25QcmltaXRpdmVbXSB7XG4gIHJldHVybiBbLi4uKGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSh7IHNjZW5lSWQsIHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9KS5wcmltaXRpdmVzID8/IFtdKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVXJsKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICBjb25zdCBtYXJrZXIgPSBcIi9OZW9uU3dhcm0vXCI7XG4gIGNvbnN0IG5lc3RlZEluZGV4ID0gcGF0aC5pbmRleE9mKG1hcmtlcik7XG4gIGlmIChuZXN0ZWRJbmRleCA+PSAwKSByZXR1cm4gYCR7cGF0aC5zbGljZSgwLCBuZXN0ZWRJbmRleCl9L05lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xuXG4gIGNvbnN0IHBhZ2VJbmRleCA9IHBhdGgubGFzdEluZGV4T2YoXCIvTmVvblN3YXJtLmh0bWxcIik7XG4gIGlmIChwYWdlSW5kZXggPj0gMCkgcmV0dXJuIGAke3BhdGguc2xpY2UoMCwgcGFnZUluZGV4KX0vTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG5cbiAgcmV0dXJuIGBOZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiB2b2lkIHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuXG4gIGNvbnN0IHBhdGggPSBsYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVXJsKHNjZW5lSWQpO1xuICBjb25zdCBzdGF0ZSA9IHNjZW5lQmFja2dyb3VuZHMuZ2V0KHBhdGgpO1xuICBpZiAoc3RhdGUgPT09IFwibG9hZGVkXCIpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3BhdGh9XCIpYDtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgaWYgKHN0YXRlKSByZXR1cm47XG5cbiAgc2NlbmVCYWNrZ3JvdW5kcy5zZXQocGF0aCwgXCJsb2FkaW5nXCIpO1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgc2NlbmVCYWNrZ3JvdW5kcy5zZXQocGF0aCwgXCJsb2FkZWRcIik7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtwYXRofVwiKWA7XG4gIH07XG4gIGltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgc2NlbmVCYWNrZ3JvdW5kcy5zZXQocGF0aCwgXCJtaXNzaW5nXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZ3JvdW5kLWltYWdlXCIpO1xuICB9O1xuICBpbWFnZS5zcmMgPSBwYXRoO1xufVxuIiwgImltcG9ydCB7IGdldE5lb25TaGFwZSwgTmVvblNoYXBlQWN0b3IsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UsIHR5cGUgTmVvblNoYXBlTGFiZWwsIHR5cGUgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3Qgc3dhcm1TaGFwZXMgPSB7XG4gIHBsYXllcjogZ2V0TmVvblNoYXBlKFwiYXJyb3ctY2xhc3NpY1wiKSEsXG4gIGVuZW15OiBnZXROZW9uU2hhcGUoXCJodW50ZXItZXllXCIpISxcbiAgbXVsdGlwbGllcjogZ2V0TmVvblNoYXBlKFwiYnJ1aXNlci1jcm9zc1wiKSEsXG4gIGd1blBpY2t1cDogZ2V0TmVvblNoYXBlKFwiaGV4LWZpZ2h0ZXJcIikhLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHBpeGVsc1RvU2hhcGVXb3JsZCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gKHtcbiAgeDogKHggLyBjYW52YXMud2lkdGggLSAuNSkgKiAoY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG4gIHk6ICguNSAtIHkgLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcGl4ZWxTaXplVG9TaGFwZVNjYWxlID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHBpeGVsczogbnVtYmVyKSA9PiBwaXhlbHMgLyBjYW52YXMuaGVpZ2h0ICogMi41O1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0b3JBdFBpeGVscyhhY3RvcjogTmVvblNoYXBlQWN0b3IsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBwaXhlbFNpemU6IG51bWJlciwgb3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICBjb25zdCB3b3JsZCA9IHBpeGVsc1RvU2hhcGVXb3JsZChjYW52YXMsIHgsIHkpO1xuICBhY3Rvci5tb3ZlVG8od29ybGQueCwgd29ybGQueSk7XG4gIGFjdG9yLnNjYWxlID0gcGl4ZWxTaXplVG9TaGFwZVNjYWxlKGNhbnZhcywgcGl4ZWxTaXplKTtcbiAgcmV0dXJuIGFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyk7XG59XG5cbnR5cGUgVG9wRG93blNoYXBlT3ZlcnJpZGVzID0gUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gJiBQYXJ0aWFsPFBpY2s8TmVvblRvcERvd25TaGFwZSwgXCJ3aWR0aFwiIHwgXCJoZWlnaHRcIj4+O1xuXG5leHBvcnQgY29uc3QgYWN0b3JJblRvcERvd25TY2VuZSA9IChhY3RvcjogTmVvblNoYXBlQWN0b3IsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIG92ZXJyaWRlczogVG9wRG93blNoYXBlT3ZlcnJpZGVzID0ge30pOiBOZW9uVG9wRG93blNoYXBlID0+XG4gICh7IC4uLmFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyksIHgsIHksIHNpemUgfSk7XG5cbmV4cG9ydCBjb25zdCBzaGFwZUxhYmVsID0gKHRleHQ6IHN0cmluZywgcG9zaXRpb246IE5lb25TaGFwZUxhYmVsW1wicG9zaXRpb25cIl0sIGZvbnRTaXplOiBudW1iZXIsIG9mZnNldCA9IDQpOiBOZW9uU2hhcGVMYWJlbCA9PlxuICAoeyB0ZXh0LCBwb3NpdGlvbiwgZm9udFNpemUsIG9mZnNldCwgZm9udEZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLCBmb250V2VpZ2h0OiA3MDAgfSk7XG4iLCAiaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uL011bHRpcGxpZXJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcXVhZFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICByb3c6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFkTW9kZWwge1xuICBsYW5lOiAwIHwgMSA9IDA7XG4gIGNvdW50ID0gMTtcbiAgYWltT2Zmc2V0ID0gMDtcbiAgeCA9IDA7XG4gIHRhcmdldFggPSAwO1xuICBsYW5lU2hpZnRTdGFydGVkQXQgPSAwO1xuXG4gIGFkZChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWluKHNwZWMubWF4U3F1YWRTaXplLCB0aGlzLmNvdW50ICsgYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHJlbW92ZShhbW91bnQgPSAxKTogbnVtYmVyIHtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoMCwgdGhpcy5jb3VudCAtIGFtb3VudCk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBzZXRMYW5lKGxhbmU6IDAgfCAxLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlciwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobGFuZSAhPT0gdGhpcy5sYW5lKSB7XG4gICAgICB0aGlzLmxhbmVTaGlmdFN0YXJ0ZWRBdCA9IG5vdztcbiAgICAgIC8vIFJlc2V0IGFpbSBvZmZzZXQgc28gdGhlIHBsYXllciBzbmFwcyB0byB0aGUgY29ycmVjdCBjb2x1bW4gaW4gdGhlIG5ldyBsYW5lLlxuICAgICAgdGhpcy5haW1PZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLmxhbmUgPSBsYW5lO1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIobGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIGF1dG9BaW0odGFyZ2V0T2Zmc2V0OiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIC8vIEhpZ2ggbGVycCBmYWN0b3IgKDAuODUpIHNvIGF1dG8tYWltIHNuYXBzIGFsbW9zdCBpbnN0YW50YW5lb3VzbHkgZWFjaCBmcmFtZS5cbiAgICB0aGlzLmFpbU9mZnNldCArPSAoTWF0aC5tYXgoLWxhbmVXaWR0aCAqIC4yOCwgTWF0aC5taW4obGFuZVdpZHRoICogLjI4LCB0YXJnZXRPZmZzZXQpKSAtIHRoaXMuYWltT2Zmc2V0KSAqIC44NTtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gMSAtIE1hdGgucG93KC4wMDAwOCwgZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLnggKz0gKHRoaXMudGFyZ2V0WCAtIHRoaXMueCkgKiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKiBYIG9mZnNldHMgb2YgZWFjaCBjb2x1bW4gaW4gdGhlIGZyb250IHJvdywgcmVsYXRpdmUgdG8gc3F1YWQgY2VudGVyLiAqL1xuICBmcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sIChfLCBjb2wpID0+XG4gICAgICAoY29sIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICk7XG4gIH1cblxuICBwb2ludHMoYmFzZVk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFNxdWFkUG9pbnRbXSB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgY29uc3QgcG9pbnRzOiBTcXVhZFBvaW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCAtIHJvdyAqIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpbmRleCAlIHNwZWMubWVtYmVyc1BlclJvdztcbiAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgeDogdGhpcy54ICsgKGNvbHVtbiAtIChyb3dDb3VudCAtIDEpIC8gMikgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgeTogYmFzZVkgKyByb3cgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxufVxuIiwgImltcG9ydCB7XG4gIE5lb25TaGFwZUFjdG9yLFxuICBOZW9uU2hhcGVEaXNwb3NhbCxcbiAgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLFxuICBOZW9uVmljdG9yeUV4cGVyaWVuY2UsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIExhbmVSdW5uZXJTY2VuZUlkLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblRvcERvd25TaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQge1xuICBjb21iYXRUdW5pbmcsXG4gIGd1bkZhbWlseSxcbiAgbXVsdGlwbGllckZhbWlseSxcbiAgb3JiRmFtaWx5LFxuICBwYXJzZVRyYWNrRGVmaW5pdGlvbixcbiAgc2hpZWxkRmFtaWx5LFxuICBzd29yZEZhbWlseSxcbiAgdHlwZSBHdW5JZCxcbiAgdHlwZSBNdWx0aXBsaWVySWQsXG4gIHR5cGUgT3JiSWQsXG4gIHR5cGUgUGFyc2VkVHJhY2tFbnRpdHksXG4gIHR5cGUgU2hpZWxkSWQsXG4gIHR5cGUgU3dvcmRJZCxcbiAgdHlwZSBTd29yZE1lbWJlcixcbiAgdHlwZSBTd29yZFRhcmdldGluZ01vZGUsXG4gIHR5cGUgVHJhY2tNZW1iZXIsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBzZWxlY3RBdXRvQWltT2Zmc2V0IH0gZnJvbSBcIi4uL2F1dG9BaW1cIjtcbmltcG9ydCB7IEd1blNpbXVsYXRpb24gfSBmcm9tIFwiLi4vY29tYmF0L2d1blNpbXVsYXRpb25cIjtcbmltcG9ydCB7IGFkdmFuY2VDb29sZG93blNsb3RzLCBzZWxlY3RCZXN0VW5jbGFpbWVkLCBzeW5jU2xvdEFycmF5IH0gZnJvbSBcIi4uL2NvbWJhdC9pbmRlcGVuZGVudFdlYXBvblNsb3RzXCI7XG5pbXBvcnQgeyBxdWVyeU5lYXJieVRocmVhdHMgfSBmcm9tIFwiLi4vY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5XCI7XG5pbXBvcnQgeyByZXNvbHZlU2hpZWxkQ29udGFjdCwgU2hpZWxkU3RhdGUsIHRpY2tTaGllbGQgfSBmcm9tIFwiLi4vY29tYmF0L3NoaWVsZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgU3dvcmRTdGF0ZSwgdGlja1N3b3JkIH0gZnJvbSBcIi4uL2NvbWJhdC9zd29yZEV2YWx1YXRvclwiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlBY3RvciwgZGVmZWF0RW5lbXksIGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkLCBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMsIHJlc29sdmVFbmVteURhbWFnZSB9IGZyb20gXCIuLi9lbmVteUNhdGFsb2dcIjtcbmltcG9ydCB7IGVuZW15RXhpdENsb3VkLCB1cGRhdGVFbmVteUV4aXRFZmZlY3RzLCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCwgdHlwZSBFbmVteVZpc3VhbFR5cGUgfSBmcm9tIFwiLi4vZW5lbXlFeGl0VmlzdWFsc1wiO1xuaW1wb3J0IHsgc2hpZWxkUGlja3VwVmlzdWFsLCBzaGllbGRWaXN1YWxzLCBzd29yZFBpY2t1cFZpc3VhbCwgc3dvcmRWaXN1YWxEdXJhdGlvbk1zLCBzd29yZFZpc3VhbHMgfSBmcm9tIFwiLi4vZmFtaWx5VmlzdWFsc1wiO1xuaW1wb3J0IHR5cGUgeyBTd29yZFZpc3VhbFR1bmluZyB9IGZyb20gXCIuLi9mYW1pbHlWaXN1YWxzXCI7XG5pbXBvcnQgeyBiaWxsYm9hcmRPcmllbnRhdGlvbiwgZW5lbXlPcmllbnRhdGlvbiwgaGVsaWNvcHRlclZpZXdwb3J0Rm9yLCBwbGF5ZXJPcmllbnRhdGlvbiB9IGZyb20gXCIuLi9yZW5kZXJPcmllbnRhdGlvblwiO1xuaW1wb3J0IHsgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kLCBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzIH0gZnJvbSBcIi4uL3NjZW5lRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IGFjdG9ySW5Ub3BEb3duU2NlbmUsIHNoYXBlTGFiZWwsIHN3YXJtU2hhcGVzIH0gZnJvbSBcIi4uL3NoYXBlVmlzdWFsc1wiO1xuaW1wb3J0IHsgU3F1YWRNb2RlbCB9IGZyb20gXCIuLi9zcXVhZFwiO1xuaW1wb3J0IHtcbiAgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCxcbiAgbGFuZVJ1bm5lclZpZXdwb3J0LFxuICBwcm9qZWN0SGVsaWNvcHRlclNjZW5lLFxuICBwcm9qZWN0SGVsaWNvcHRlclBvaW50LFxuICB1bnByb2plY3RIZWxpY29wdGVyU2NyZWVuUG9pbnQsXG4gIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxufSBmcm9tIFwiLi4vdmlld3BvcnRcIjtcblxudHlwZSBMYW5lID0gMCB8IDE7XG5cbmV4cG9ydCB0eXBlIE5lb25Td2FybVNpbXVsYXRpb25Nb2RlID0gXCJnYW1lXCIgfCBcImxhYlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Td2FybVNvdW5kIHtcbiAgcGxheShpZDogc3RyaW5nKTogdm9pZDtcbiAgcGxheVJvdGF0ZWQ/KGlkOiBzdHJpbmcsIGFsdGVybmF0aXZlczogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucyB7XG4gIG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBzdGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjYW1lcmFTZXR0aW5ncz86IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncztcbiAgc291bmQ/OiBOZW9uU3dhcm1Tb3VuZDtcbiAgc2NlbmVJZD86IExhbmVSdW5uZXJTY2VuZUlkO1xuICBvblJ1blN0YXR1cz86IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcbiAgb25GaW5pc2g/OiAocmVzdWx0OiBOZW9uU3dhcm1GaW5pc2hSZXN1bHQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtRmluaXNoUmVzdWx0IHtcbiAgd29uOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXRhaWw6IHN0cmluZztcbiAgYnJlYWNoZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1TbmFwc2hvdCB7XG4gIG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICBhY3RpdmVUcmFjazogYm9vbGVhbjtcbiAgY29tYmF0Tm93OiBudW1iZXI7XG4gIGNvbWJhdEVsYXBzZWQ6IG51bWJlcjtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHNxdWFkOiB7XG4gICAgbGFuZTogTGFuZTtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB0YXJnZXRYOiBudW1iZXI7XG4gICAgYWltT2Zmc2V0OiBudW1iZXI7XG4gIH07XG4gIGFjdGl2ZToge1xuICAgIGd1bjogeyBpZDogR3VuSWQ7IGxldmVsOiBudW1iZXIgfSB8IG51bGw7XG4gICAgc2hpZWxkOiBTaGllbGRJZCB8IG51bGw7XG4gICAgc3dvcmQ6IHsgaWQ6IFN3b3JkSWQ7IGxldmVsOiBudW1iZXIgfSB8IG51bGw7XG4gIH07XG4gIGVuZW1pZXM6IEFycmF5PHsgaWQ6IG51bWJlcjsgZW5lbXlJZDogT3JiSWQ7IGxhbmU6IExhbmU7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBoZWFsdGg6IG51bWJlcjsgbWF4SGVhbHRoOiBudW1iZXI7IGR5aW5nOiBib29sZWFuIH0+O1xuICBwaWNrdXBzOiB7XG4gICAgZ3VuczogbnVtYmVyO1xuICAgIHNoaWVsZHM6IG51bWJlcjtcbiAgICBzd29yZHM6IG51bWJlcjtcbiAgICBtdWx0aXBsaWVyczogbnVtYmVyO1xuICB9O1xuICBraWxsczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRW5lbXkge1xuICBpZDogbnVtYmVyO1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xuICByb3dJZDogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG4gIGR5aW5nOiBib29sZWFuO1xuICBleGl0RWZmZWN0U3Bhd25lZD86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBHdW5QaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZ3VuSWQ6IEd1bklkO1xuICBsZXZlbDogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbiAgYWN0b3I6IE5lb25TaGFwZUFjdG9yO1xufVxuXG5pbnRlcmZhY2UgU2hpZWxkUGlja3VwIHtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNoaWVsZElkOiBTaGllbGRJZDtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBTd29yZFBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzd29yZElkOiBTd29yZElkO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIE11bHRpcGxpZXJQaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbXVsdGlwbGllcklkOiBNdWx0aXBsaWVySWQ7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG59XG5cbmludGVyZmFjZSBQZW5kaW5nU3dvcmREYW1hZ2Uge1xuICBoaXRzOiBBcnJheTx7IGVuZW15SWQ6IG51bWJlcjsgZHVlQXQ6IG51bWJlciB9PjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGltcGFjdFNvdW5kSWQ6IHN0cmluZztcbn1cblxuY29uc3QgZ3VuRmlyZVNvdW5kSWRzOiBSZWNvcmQ8R3VuSWQsIHN0cmluZz4gPSB7XG4gIHB1bHNlUGlzdG9sOiBcIlByaW1hcnlcIixcbiAgbmVlZGxlclNtZzogXCJOZWVkbGVyRmlyZVwiLFxuICBidXJzdENhcmJpbmU6IFwiQnVyc3RDYXJiaW5lRmlyZVwiLFxuICBoZWF2eUNhbm5vbjogXCJIZWF2eUNhbm5vbkZpcmVcIixcbiAgc3BsaXR0ZXJSaWZsZTogXCJTcGxpdHRlclJpZmxlRmlyZVwiLFxufTtcblxuY29uc3Qgc3dvcmRJbXBhY3RTb3VuZElkczogUmVjb3JkPFN3b3JkSWQsIHN0cmluZz4gPSB7XG4gIGFyY0JsYWRlOiBcIlN3b3JkQXJjSW1wYWN0XCIsXG4gIGNsZWF2ZXI6IFwiU3dvcmRDbGVhdmVySW1wYWN0XCIsXG59O1xuXG5jb25zdCBzb3VuZEFsdGVybmF0aXZlQ291bnRzOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+ID0ge1xuICBQcmltYXJ5OiAzLFxuICBFbmVteURlc3Ryb3llZDogMixcbiAgRW5lbXlIaXQ6IDIsXG4gIEVuZW15U3Bhd246IDIsXG4gIEJvc3M6IDEsXG4gIFByb2plY3RpbGVIaXQ6IDIsXG59O1xuY29uc3QgbWF4VHJhY2tTcGF3bkxlYWRTZWNvbmRzID0gMTg7XG5jb25zdCBmaXJzdFRyYWNrUm93QXJyaXZhbFNlY29uZHMgPSAyICogY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllcjtcbmNvbnN0IHRyYWNrUm93VHJhdmVsU2Vjb25kcyA9IC4zNzUgKiBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyO1xuXG5leHBvcnQgY2xhc3MgTmVvblN3YXJtU2ltdWxhdGlvbiB7XG4gIHJlYWRvbmx5IG1vZGU6IE5lb25Td2FybVNpbXVsYXRpb25Nb2RlO1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBzdGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSBjYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICByZWFkb25seSBzcXVhZCA9IG5ldyBTcXVhZE1vZGVsKCk7XG5cbiAgcHJpdmF0ZSByZW5kZXJlcjogTmVvblRvcERvd25TY2VuZVJlbmRlcmVyO1xuICBwcml2YXRlIHNvdW5kPzogTmVvblN3YXJtU291bmQ7XG4gIHByaXZhdGUgb25SdW5TdGF0dXM/OiAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHByaXZhdGUgb25GaW5pc2g/OiAocmVzdWx0OiBOZW9uU3dhcm1GaW5pc2hSZXN1bHQpID0+IHZvaWQ7XG4gIHByaXZhdGUgYW5pbWF0aW9uRnJhbWUgPSAwO1xuICBwcml2YXRlIGFjdGl2ZVRyYWNrOiBUcmFja01lbWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHRyYWNrU2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHByaXZhdGUgbGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHByaXZhdGUgY29tYmF0RWxhcHNlZCA9IDA7XG4gIHByaXZhdGUgY29tYmF0Tm93ID0gMDtcbiAgcHJpdmF0ZSBwbGF5ZXJMYW5lOiBMYW5lID0gMDtcbiAgcHJpdmF0ZSBjb29sZG93biA9IDA7XG4gIHByaXZhdGUgZ3VuQ29vbGRvd25zOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIGVudGl0eUlkQ291bnRlciA9IDA7XG4gIHByaXZhdGUgdHJhY2tFbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuICBwcml2YXRlIG5leHRUcmFja0VudGl0eSA9IDA7XG4gIHByaXZhdGUgYnJlYWNoZXMgPSAwO1xuICBwcml2YXRlIGtpbGxzID0gMDtcbiAgcHJpdmF0ZSBlbmVtaWVzOiBFbmVteVtdID0gW107XG4gIHByaXZhdGUgZ3VuU2ltdWxhdGlvbiA9IG5ldyBHdW5TaW11bGF0aW9uKCk7XG4gIHByaXZhdGUgZ3VuUGlja3VwczogR3VuUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBzaGllbGRQaWNrdXBzOiBTaGllbGRQaWNrdXBbXSA9IFtdO1xuICBwcml2YXRlIHN3b3JkUGlja3VwczogU3dvcmRQaWNrdXBbXSA9IFtdO1xuICBwcml2YXRlIG11bHRpcGxpZXJzOiBNdWx0aXBsaWVyUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBlbmVteUV4aXRFZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSA9IFtdO1xuICBwcml2YXRlIHZpY3Rvcnk6IE5lb25WaWN0b3J5RXhwZXJpZW5jZSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN3b3JkVmlzdWFsVHVuaW5nOiBQYXJ0aWFsPFN3b3JkVmlzdWFsVHVuaW5nPiA9IHt9O1xuICBwcml2YXRlIHBlbmRpbmdTd29yZERhbWFnZTogUGVuZGluZ1N3b3JkRGFtYWdlIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZmFpbHVyZVJlYXNvbiA9IFwiXCI7XG4gIHByaXZhdGUgcGxheWVyQWN0b3JzOiBOZW9uU2hhcGVBY3RvcltdID0gW107XG4gIHByaXZhdGUgZXhwbG9kaW5nUGxheWVyczogQXJyYXk8eyBhY3RvcjogTmVvblNoYXBlQWN0b3I7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+ID0gW107XG4gIHByaXZhdGUgc2ltdWxhdGlvblNwZWVkID0gMTtcbiAgcHJpdmF0ZSBhY3RpdmVCeUZhbWlseToge1xuICAgIGd1bjogeyBpZDogR3VuSWQ7IGxldmVsOiBudW1iZXIgfSB8IG51bGw7XG4gICAgc2hpZWxkOiBTaGllbGRTdGF0ZSB8IG51bGw7XG4gICAgc3dvcmQ6IFN3b3JkU3RhdGUgfCBudWxsO1xuICB9ID0ge1xuICAgIGd1bjogbnVsbCxcbiAgICBzaGllbGQ6IG51bGwsXG4gICAgc3dvcmQ6IG51bGwsXG4gIH07XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihyZW5kZXJlcjogTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLCBvcHRpb25zOiBOZW9uU3dhcm1TaW11bGF0aW9uT3B0aW9ucykge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGU7XG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcbiAgICB0aGlzLnN0YWdlRWxlbWVudCA9IG9wdGlvbnMuc3RhZ2VFbGVtZW50O1xuICAgIHRoaXMuY2FtZXJhU2V0dGluZ3MgPSBvcHRpb25zLmNhbWVyYVNldHRpbmdzID8/IHsgLi4uZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyB9O1xuICAgIHRoaXMuc291bmQgPSBvcHRpb25zLnNvdW5kO1xuICAgIHRoaXMub25SdW5TdGF0dXMgPSBvcHRpb25zLm9uUnVuU3RhdHVzO1xuICAgIHRoaXMub25GaW5pc2ggPSBvcHRpb25zLm9uRmluaXNoO1xuICAgIHRoaXMudHJhY2tTY2VuZUlkID0gb3B0aW9ucy5zY2VuZUlkID8/IFwibmVvbkhhbGxcIjtcbiAgICB0aGlzLmFwcGx5U2NlbmVCYWNrZ3JvdW5kKCk7XG4gICAgdGhpcy5yZXNldCh7IHNpbGVudDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUob3B0aW9uczogTmVvblN3YXJtU2ltdWxhdGlvbk9wdGlvbnMpOiBQcm9taXNlPE5lb25Td2FybVNpbXVsYXRpb24+IHtcbiAgICBjb25zdCByZW5kZXJlciA9IGF3YWl0IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlci5jcmVhdGUob3B0aW9ucy5jYW52YXMsIGxhbmVSdW5uZXJWaWV3cG9ydC5sb2dpY2FsV2lkdGgsIGxhbmVSdW5uZXJWaWV3cG9ydC5sb2dpY2FsSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IE5lb25Td2FybVNpbXVsYXRpb24ocmVuZGVyZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0IG5vdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbWJhdE5vdztcbiAgfVxuXG4gIGdldCBhY3RpdmVUcmFja1J1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVHJhY2sgIT09IG51bGw7XG4gIH1cblxuICBsYW5lWChsYW5lOiBMYW5lKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGggKiAobGFuZSA9PT0gMCA/IC4zMiA6IC42OCk7XG4gIH1cblxuICBwbGF5ZXJZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodCAqIC44MjtcbiAgfVxuXG4gIHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXNldChvcHRpb25zOiB7IHNpbGVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUcmFjayA9IG51bGw7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmNvbWJhdEVsYXBzZWQgPSAwO1xuICAgIHRoaXMuY29tYmF0Tm93ID0gMDtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLmd1bkNvb2xkb3ducyA9IFtdO1xuICAgIHRoaXMubmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgICB0aGlzLnRyYWNrRW50aXRpZXMgPSBbXTtcbiAgICB0aGlzLmJyZWFjaGVzID0gMDtcbiAgICB0aGlzLmtpbGxzID0gMDtcbiAgICB0aGlzLmNsZWFyU3RhZ2UoKTtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBudWxsO1xuICAgIHRoaXMuc3F1YWQuY291bnQgPSAxO1xuICAgIHRoaXMuc3F1YWQuYWltT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnNxdWFkLmxhbmUgPSAwO1xuICAgIHRoaXMuc3F1YWQueCA9IHRoaXMubGFuZVgoMCk7XG4gICAgdGhpcy5zcXVhZC50YXJnZXRYID0gdGhpcy5sYW5lWCgwKTtcbiAgICB0aGlzLnBsYXllckxhbmUgPSAwO1xuICAgIHRoaXMucGxheWVyQWN0b3JzID0gW25ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSldO1xuICAgIHRoaXMuZmFpbHVyZVJlYXNvbiA9IFwiXCI7XG4gICAgdGhpcy52aWN0b3J5ID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmdTd29yZERhbWFnZSA9IG51bGw7XG4gICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5wbGF5KFwiTWVudU9wZW5cIik7XG4gIH1cblxuICBjbGVhclN0YWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgIHRoaXMuZ3VuU2ltdWxhdGlvbi5jbGVhcigpO1xuICAgIHRoaXMuZ3VuUGlja3VwcyA9IFtdO1xuICAgIHRoaXMuc2hpZWxkUGlja3VwcyA9IFtdO1xuICAgIHRoaXMuc3dvcmRQaWNrdXBzID0gW107XG4gICAgdGhpcy5tdWx0aXBsaWVycyA9IFtdO1xuICAgIHRoaXMuZW5lbXlFeGl0RWZmZWN0cyA9IFtdO1xuICAgIHRoaXMuZXhwbG9kaW5nUGxheWVycyA9IFtdO1xuICAgIHRoaXMudmljdG9yeSA9IG51bGw7XG4gICAgdGhpcy5wZW5kaW5nU3dvcmREYW1hZ2UgPSBudWxsO1xuICB9XG5cbiAgc3RhcnRUcmFjayh0cmFjazogVHJhY2tNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRyYWNrID0gdHJhY2s7XG4gICAgdGhpcy50cmFja1NjZW5lSWQgPSB0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkO1xuICAgIHRoaXMuYXBwbHlTY2VuZUJhY2tncm91bmQoKTtcbiAgICB0aGlzLmxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuY29tYmF0RWxhcHNlZCA9IDA7XG4gICAgdGhpcy5jb21iYXROb3cgPSAwO1xuICAgIGNvbnN0IGFsbEVudGl0aWVzID0gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgY29uc3QgcGxheWVyU3RhcnQgPSBhbGxFbnRpdGllcy5maW5kKGVudGl0eSA9PiBlbnRpdHkuaWQgPT09IFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIGNvbnN0IHN0YXJ0TGFuZTogTGFuZSA9IHBsYXllclN0YXJ0Py5zaWRlID09PSBcInJpZ2h0XCIgPyAxIDogMDtcbiAgICB0aGlzLnBsYXllckxhbmUgPSBzdGFydExhbmU7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkID0gbnVsbDtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLmd1bkNvb2xkb3ducyA9IFtdO1xuICAgIHRoaXMubmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgICB0aGlzLnRyYWNrRW50aXRpZXMgPSBhbGxFbnRpdGllcy5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS5pZCAhPT0gXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgdGhpcy5icmVhY2hlcyA9IDA7XG4gICAgdGhpcy5jbGVhclN0YWdlKCk7XG4gICAgdGhpcy5zcXVhZC5jb3VudCA9IDE7XG4gICAgdGhpcy5wbGF5ZXJBY3RvcnMgPSBbbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KV07XG4gICAgdGhpcy5zcXVhZC5haW1PZmZzZXQgPSAwO1xuICAgIHRoaXMuc3F1YWQubGFuZSA9IHN0YXJ0TGFuZTtcbiAgICB0aGlzLnNxdWFkLnggPSB0aGlzLmxhbmVYKHN0YXJ0TGFuZSk7XG4gICAgdGhpcy5zcXVhZC50YXJnZXRYID0gdGhpcy5sYW5lWChzdGFydExhbmUpO1xuICAgIHRoaXMucGxheShcIlRyYWNrU3RhcnRcIik7XG4gIH1cblxuICBzZXRTY2VuZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHZvaWQge1xuICAgIHRoaXMudHJhY2tTY2VuZUlkID0gc2NlbmVJZDtcbiAgICB0aGlzLmFwcGx5U2NlbmVCYWNrZ3JvdW5kKCk7XG4gIH1cblxuICBzZXRTcXVhZExhbmUobGFuZTogTGFuZSwgb3B0aW9uczogeyByZXF1aXJlQWN0aXZlVHJhY2s/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLnJlcXVpcmVBY3RpdmVUcmFjayAmJiAhdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIGlmIChsYW5lICE9PSB0aGlzLnNxdWFkLmxhbmUpIHRoaXMucGxheShcIkxhbmVTd2l0Y2hcIik7XG4gICAgdGhpcy5zcXVhZC5zZXRMYW5lKGxhbmUsIHZhbHVlID0+IHRoaXMubGFuZVgodmFsdWUpLCB0aGlzLmNvbWJhdE5vdyk7XG4gICAgdGhpcy5wbGF5ZXJMYW5lID0gbGFuZTtcbiAgfVxuXG4gIGVxdWlwR3VuKGd1bklkOiBHdW5JZCwgbGV2ZWwgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSB7IGlkOiBndW5JZCwgbGV2ZWwgfTtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLmd1bkNvb2xkb3ducyA9IFtdO1xuICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cEd1blwiKTtcbiAgICB0aGlzLnBsYXkoXCJXZWFwb25SZWFkeVwiKTtcbiAgfVxuXG4gIGVxdWlwU2hpZWxkKHNoaWVsZElkOiBTaGllbGRJZCk6IHZvaWQge1xuICAgIGNvbnN0IGRlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW3NoaWVsZElkXTtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCA9IG5ldyBTaGllbGRTdGF0ZShzaGllbGRJZCwgZGVmLm1heENoYXJnZXMpO1xuICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFNoaWVsZFwiKTtcbiAgICB0aGlzLnBsYXkoXCJTaGllbGRcIik7XG4gIH1cblxuICBlcXVpcFN3b3JkKHN3b3JkSWQ6IFN3b3JkSWQpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZDtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkID0gbmV3IFN3b3JkU3RhdGUoc3dvcmRJZCwgY3VycmVudD8uc3dvcmRJZCA9PT0gc3dvcmRJZCA/IGN1cnJlbnQubGV2ZWwgKyAxIDogMSk7XG4gICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwU3dvcmRcIik7XG4gICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gIH1cblxuICBzZXRTd29yZFZpc3VhbFR1bmluZyh0dW5pbmc6IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+KTogdm9pZCB7XG4gICAgdGhpcy5zd29yZFZpc3VhbFR1bmluZyA9IHsgLi4udHVuaW5nIH07XG4gIH1cblxuICBzZXRTaW11bGF0aW9uU3BlZWQoc3BlZWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2ltdWxhdGlvblNwZWVkID0gTnVtYmVyLmlzRmluaXRlKHNwZWVkKSA/IE1hdGgubWF4KC4wNSwgTWF0aC5taW4oMiwgc3BlZWQpKSA6IDE7XG4gIH1cblxuICBhZGRTcXVhZE1lbWJlcnMoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNxdWFkLmFkZChhbW91bnQpO1xuICAgIHRoaXMuc3luY1BsYXllckFjdG9ycygpO1xuICB9XG5cbiAgc3Bhd25FbmVteShvcHRpb25zOiB7IGVuZW15SWQ6IE9yYklkOyBsYW5lOiBMYW5lOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBoZWFsdGg/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlcjsgcm93SWQ/OiBudW1iZXI7IHBsYXlTb3VuZD86IGJvb2xlYW47IGNvbG9yPzogc3RyaW5nIH0pOiBudW1iZXIge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15SWRdO1xuICAgIGNvbnN0IGhlYWx0aCA9IG9wdGlvbnMuaGVhbHRoID8/IGRlZmluaXRpb24uaGVhbHRoO1xuICAgIGNvbnN0IGlkID0gKyt0aGlzLmVudGl0eUlkQ291bnRlcjtcbiAgICBjb25zdCBhY3RvciA9IGNyZWF0ZUVuZW15QWN0b3Iob3B0aW9ucy5lbmVteUlkKTtcbiAgICBpZiAob3B0aW9ucy5jb2xvcikgYWN0b3IuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZW5lbWllcy5wdXNoKHtcbiAgICAgIGlkLFxuICAgICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15SWQsXG4gICAgICBlbmVteUlkOiBvcHRpb25zLmVuZW15SWQsXG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEwNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIGhlYWx0aCxcbiAgICAgIG1heEhlYWx0aDogaGVhbHRoLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgcm93SWQ6IG9wdGlvbnMucm93SWQgPz8gaWQsXG4gICAgICBhY3RvcixcbiAgICAgIGR5aW5nOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy5wbGF5U291bmQgIT09IGZhbHNlICYmIGRlZmluaXRpb24uc3Bhd25Tb3VuZCkgdGhpcy5wbGF5KGRlZmluaXRpb24uc3Bhd25Tb3VuZCk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgZGVmZWF0RW5lbXlCeUlkKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBlbmVteSA9IHRoaXMuZW5lbWllcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIGlmIChlbmVteSAmJiAhZW5lbXkuZHlpbmcpIHRoaXMuZGVzdHJveUVuZW15KGVuZW15KTtcbiAgfVxuXG4gIHNwYXduR3VuUGlja3VwKG9wdGlvbnM6IHsgZ3VuSWQ6IEd1bklkOyBsYW5lOiBMYW5lOyBsZXZlbD86IG51bWJlcjsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLmd1blBpY2t1cHMucHVzaCh7XG4gICAgICBsYW5lOiBvcHRpb25zLmxhbmUsXG4gICAgICB4OiBvcHRpb25zLnggPz8gdGhpcy5sYW5lWChvcHRpb25zLmxhbmUpLFxuICAgICAgeTogb3B0aW9ucy55ID8/IDEzNSAqIHRoaXMuc2NhbGUoKSxcbiAgICAgIGd1bklkOiBvcHRpb25zLmd1bklkLFxuICAgICAgbGV2ZWw6IG9wdGlvbnMubGV2ZWwgPz8gMSxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgIGFjdG9yOiBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMuZ3VuUGlja3VwIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgc3Bhd25TaGllbGRQaWNrdXAob3B0aW9uczogeyBzaGllbGRJZDogU2hpZWxkSWQ7IGxhbmU6IExhbmU7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy5zaGllbGRQaWNrdXBzLnB1c2goe1xuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMzUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBzaGllbGRJZDogb3B0aW9ucy5zaGllbGRJZCxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICB9KTtcbiAgfVxuXG4gIHNwYXduU3dvcmRQaWNrdXAob3B0aW9uczogeyBzd29yZElkOiBTd29yZElkOyBsYW5lOiBMYW5lOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMuc3dvcmRQaWNrdXBzLnB1c2goe1xuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMzUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBzd29yZElkOiBvcHRpb25zLnN3b3JkSWQsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgfSk7XG4gIH1cblxuICBzcGF3bk11bHRpcGxpZXJQaWNrdXAob3B0aW9uczogeyBsYW5lOiBMYW5lOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXI7IG11bHRpcGxpZXJJZD86IE11bHRpcGxpZXJJZCB9KTogdm9pZCB7XG4gICAgY29uc3QgbXVsdGlwbGllcklkID0gb3B0aW9ucy5tdWx0aXBsaWVySWQgPz8gXCJzcXVhZFBsdXNPbmVcIjtcbiAgICB0aGlzLm11bHRpcGxpZXJzLnB1c2goe1xuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMzUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBtdWx0aXBsaWVySWQsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLm11bHRpcGxpZXIgfSksXG4gICAgfSk7XG4gIH1cblxuICBzdGFydExvb3AoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wTG9vcCgpO1xuICAgIGNvbnN0IGZyYW1lID0gKG5vdzogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLnRpY2sobm93KTtcbiAgICAgIHRoaXMucmVuZGVyKHRoaXMuY29tYmF0Tm93KTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgIH07XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gIH1cblxuICBzdG9wTG9vcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IDA7XG4gIH1cblxuICB0aWNrKGZyYW1lTm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCByYXdEZWx0YSA9IE1hdGgubWluKC4wNSwgKGZyYW1lTm93IC0gdGhpcy5sYXN0RnJhbWUpIC8gMTAwMCk7XG4gICAgdGhpcy5sYXN0RnJhbWUgPSBmcmFtZU5vdztcbiAgICBjb25zdCBkZWx0YSA9IHJhd0RlbHRhICogY29tYmF0VHVuaW5nLmdsb2JhbFNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2ltdWxhdGlvblNwZWVkO1xuICAgIHRoaXMuY29tYmF0RWxhcHNlZCArPSBkZWx0YTtcbiAgICB0aGlzLmNvbWJhdE5vdyA9IHRoaXMuY29tYmF0RWxhcHNlZCAqIDEwMDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIFsuLi50aGlzLmV4cGxvZGluZ1BsYXllcnNdKSB7XG4gICAgICBpdGVtLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBpZiAoaXRlbS5hY3Rvci5kaXNwb3NlZCkgdGhpcy5leHBsb2RpbmdQbGF5ZXJzLnNwbGljZSh0aGlzLmV4cGxvZGluZ1BsYXllcnMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuICAgIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHModGhpcy5lbmVteUV4aXRFZmZlY3RzLCBkZWx0YSk7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBcImdhbWVcIiAmJiAhdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIGlmICh0aGlzLmFjdGl2ZVRyYWNrKSB0aGlzLnNwYXduVHJhY2tFbnRpdGllcygpO1xuXG4gICAgY29uc3QgZ3VuU3RhdHVzID0gdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPyBndW5GYW1pbHkubWVtYmVyc1t0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bi5pZF0ubGFiZWwgOiBcIk5vIHdlYXBvblwiO1xuICAgIGNvbnN0IHNoaWVsZERlZiA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkID8gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQuc2hpZWxkSWRdIDogbnVsbDtcbiAgICBjb25zdCBzd29yZERlZiA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPyBzd29yZEZhbWlseS5tZW1iZXJzW3RoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQuc3dvcmRJZF0gOiBudWxsO1xuICAgIGlmICh0aGlzLmFjdGl2ZVRyYWNrKSB7XG4gICAgICB0aGlzLm9uUnVuU3RhdHVzPy4oYCR7Z3VuU3RhdHVzfSR7c2hpZWxkRGVmID8gYCBcdTAwQjcgJHtzaGllbGREZWYubGFiZWx9YCA6IFwiXCJ9JHtzd29yZERlZiA/IGAgXHUwMEI3ICR7c3dvcmREZWYubGFiZWx9YCA6IFwiXCJ9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFuZUVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15LmxhbmUgPT09IHRoaXMuc3F1YWQubGFuZSAmJiAhZW5lbXkuZHlpbmcpO1xuICAgIGNvbnN0IGNvbE9mZnNldHMgPSB0aGlzLnNxdWFkLmZyb250Um93Q29sdW1uT2Zmc2V0cyh0aGlzLnNjYWxlKCkpO1xuICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdEF1dG9BaW1PZmZzZXQobGFuZUVuZW1pZXMsIHRoaXMubGFuZVgodGhpcy5zcXVhZC5sYW5lKSwgY29sT2Zmc2V0cywgdGhpcy5zcXVhZC5haW1PZmZzZXQpO1xuICAgIHRoaXMuc3F1YWQuYXV0b0FpbShvZmZzZXQsIHRoaXMuY2FudmFzLndpZHRoICogLjIyLCBsYW5lID0+IHRoaXMubGFuZVgobGFuZSkpO1xuICAgIHRoaXMuc3F1YWQudXBkYXRlKGRlbHRhKTtcbiAgICB0aGlzLnN0YWdlRWxlbWVudC5kYXRhc2V0LnNxdWFkTGFuZSA9IFN0cmluZyh0aGlzLnNxdWFkLmxhbmUpO1xuICAgIHRoaXMuc3luY1BsYXllckFjdG9ycygpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuKSB7XG4gICAgICBhZHZhbmNlQ29vbGRvd25TbG90cyh0aGlzLmd1bkNvb2xkb3ducywgZGVsdGEpO1xuICAgICAgdGhpcy5maXJlKCk7XG4gICAgICBpZiAodGhpcy5ndW5TaW11bGF0aW9uLnVwZGF0ZUZpcmluZyh0aGlzLmNvbWJhdE5vdykgPiAwKSB0aGlzLnBsYXlHdW5GaXJlKHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuLmlkKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVByb2plY3RpbGVzKGRlbHRhKTtcbiAgICB0aGlzLnVwZGF0ZU5lYXJQbGF5ZXJFZmZlY3RzKGRlbHRhLCBzaGllbGREZWYsIHN3b3JkRGVmKTtcbiAgICB0aGlzLnVwZGF0ZUVuZW1pZXMoZGVsdGEsIHNoaWVsZERlZik7XG4gICAgdGhpcy51cGRhdGVQaWNrdXBzKGRlbHRhKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVRyYWNrICYmIHRoaXMudHJhY2tSZXNvbHZlZCgpKSB0aGlzLmZpbmlzaCh0aGlzLmJyZWFjaGVzID09PSAwKTtcbiAgfVxuXG4gIHJlbmRlcihub3cgPSB0aGlzLmNvbWJhdE5vdyk6IHZvaWQge1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBsYW5lUnVubmVyU2NlbmVQcmltaXRpdmVzKHRoaXMudHJhY2tTY2VuZUlkLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCBub3cpO1xuICAgIGNvbnN0IHMgPSB0aGlzLnNjYWxlKCk7XG4gICAgY29uc3QgcGxheWVyUG9pbnRzID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHMpO1xuICAgIGNvbnN0IGhlbGljb3B0ZXJWaWV3cG9ydCA9IGhlbGljb3B0ZXJWaWV3cG9ydEZvcih0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLnBsYXllclkoKSwgbGFuZVJ1bm5lckNhbWVyYUZvY3VzWCh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5zcXVhZC54KSk7XG5cbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHBsYXllclBvaW50cykge1xuICAgICAgY29uc3Qgc21lYXIgPSBNYXRoLm1pbigyMiAqIHMsIE1hdGguYWJzKHRoaXMuc3F1YWQudGFyZ2V0WCAtIHRoaXMuc3F1YWQueCkgKiAuNDUpO1xuICAgICAgaWYgKHNtZWFyID4gMikge1xuICAgICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICAgIHg6IHBvaW50LnggLSBNYXRoLnNpZ24odGhpcy5zcXVhZC50YXJnZXRYIC0gdGhpcy5zcXVhZC54KSAqIHNtZWFyICogLjUsXG4gICAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgICB3aWR0aDogc21lYXIsXG4gICAgICAgICAgaGVpZ2h0OiAyLjIgKiBzLFxuICAgICAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZS5kZWVwQmx1ZSxcbiAgICAgICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUuY3lhbixcbiAgICAgICAgICBnbG93OiAuNDUsXG4gICAgICAgICAgaW50ZW5zaXR5OiAuNSxcbiAgICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaW1pdGl2ZXMucHVzaCguLi50aGlzLmd1blNpbXVsYXRpb24ucHJvamVjdGlsZVByaW1pdGl2ZXMoKSk7XG4gICAgaWYgKHRoaXMudmljdG9yeSkgcHJpbWl0aXZlcy5wdXNoKC4uLnRoaXMudmljdG9yeS5wcmltaXRpdmVzKG5vdykpO1xuXG4gICAgY29uc3Qgc2hhcGVJbnN0YW5jZXM6IE5lb25Ub3BEb3duU2hhcGVbXSA9IFtdO1xuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCkge1xuICAgICAgY29uc3QgbGl2ZVNoaWVsZCA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkO1xuICAgICAgY29uc3QgbGl2ZURlZiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW2xpdmVTaGllbGQuc2hpZWxkSWRdO1xuICAgICAgY29uc3Qgc2NlbmUgPSBzaGllbGRWaXN1YWxzKHtcbiAgICAgICAgZGVmaW5pdGlvbjogbGl2ZURlZixcbiAgICAgICAgc3RyZW5ndGg6IGxpdmVTaGllbGQuY2hhcmdlcyxcbiAgICAgICAgaW5pdGlhbFN0cmVuZ3RoOiBsaXZlRGVmLm1heENoYXJnZXMsXG4gICAgICAgIHg6IHRoaXMuc3F1YWQueCxcbiAgICAgICAgeTogdGhpcy5wbGF5ZXJZKCksXG4gICAgICAgIG5vdyxcbiAgICAgICAgc2NhbGU6IHMsXG4gICAgICAgIHByb2plY3RTY3JlZW5PZmZzZXQ6ICh4LCB5LCBvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VudGVyID0gcHJvamVjdEhlbGljb3B0ZXJQb2ludCh4LCB5LCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpO1xuICAgICAgICAgIHJldHVybiB1bnByb2plY3RIZWxpY29wdGVyU2NyZWVuUG9pbnQoY2VudGVyLnggKyBvZmZzZXRYICogY2VudGVyLnNjYWxlLCBjZW50ZXIueSArIG9mZnNldFkgKiBjZW50ZXIuc2NhbGUsIHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdFByb2dyZXNzOiBsaXZlU2hpZWxkLmhpdEZsYXNoUHJvZ3Jlc3MsXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCguLi5zY2VuZS5wcmltaXRpdmVzKTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goLi4uc2NlbmUuc2hhcGVzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQpIHtcbiAgICAgIGNvbnN0IGxpdmVTd29yZCA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQ7XG4gICAgICBjb25zdCBsaXZlRGVmID0gc3dvcmRGYW1pbHkubWVtYmVyc1tsaXZlU3dvcmQuc3dvcmRJZF07XG4gICAgICBjb25zdCBzY2VuZSA9IHN3b3JkVmlzdWFscyh7XG4gICAgICAgIGRlZmluaXRpb246IGxpdmVEZWYsXG4gICAgICAgIHNsYXNoOiBsaXZlU3dvcmQuYWN0aXZlU2xhc2gsXG4gICAgICAgIHNsYXNoZXM6IGxpdmVTd29yZC5hY3RpdmVTbGFzaGVzLFxuICAgICAgICBkb2NrU2lkZTogbGl2ZVN3b3JkLnByZXZpb3VzU2xhc2hTaWRlLFxuICAgICAgICBkb2NrU2lkZXM6IGxpdmVTd29yZC5wcmV2aW91c1NsYXNoU2lkZXMsXG4gICAgICAgIHBvaW50czogcGxheWVyUG9pbnRzLFxuICAgICAgICB0dW5pbmc6IHRoaXMuc3dvcmRWaXN1YWxUdW5pbmcsXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goLi4uc2NlbmUucHJpbWl0aXZlcyk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKC4uLnNjZW5lLnNoYXBlcyk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgdGhpcy5zaGllbGRQaWNrdXBzKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnNoaWVsZElkXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goc2hpZWxkUGlja3VwVmlzdWFsKHtcbiAgICAgICAgeDogcGlja3VwLngsXG4gICAgICAgIHk6IHBpY2t1cC55LFxuICAgICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgICAgIG5vdyxcbiAgICAgICAgc2NhbGU6IHMsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHRoaXMuc3dvcmRQaWNrdXBzKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gc3dvcmRGYW1pbHkubWVtYmVyc1twaWNrdXAuc3dvcmRJZF07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKHN3b3JkUGlja3VwVmlzdWFsKHtcbiAgICAgICAgeDogcGlja3VwLngsXG4gICAgICAgIHk6IHBpY2t1cC55LFxuICAgICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgICAgIG5vdyxcbiAgICAgICAgc2NhbGU6IHMsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyU2l6ZSA9IDE0O1xuICAgIGZvciAoY29uc3QgW2luZGV4LCBwb2ludF0gb2YgcGxheWVyUG9pbnRzLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgYWN0b3IgPSB0aGlzLnBsYXllckFjdG9yc1tpbmRleF0gPz8gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShhY3RvciwgcG9pbnQueCwgcG9pbnQueSwgcGxheWVyU2l6ZSwgcGxheWVyT3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBwb2ludC54LCBwb2ludC55LCBub3csIGluZGV4KSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5leHBsb2RpbmdQbGF5ZXJzKSBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoaXRlbS5hY3RvciwgaXRlbS54LCBpdGVtLnksIHBsYXllclNpemUpKTtcblxuICAgIGNvbnN0IGVuZW15SGVhbHRoQmFyczogUGFyYW1ldGVyczx0eXBlb2YgcHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzPlswXVtudW1iZXJdW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVuZW15IG9mIHRoaXMuZW5lbWllcykge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KTtcbiAgICAgIGNvbnN0IHNpemUgPSAxOCAqIGRlZmluaXRpb24uY29sdW1uU3BhbjtcbiAgICAgIGVuZW15SGVhbHRoQmFycy5wdXNoKHsgZW5lbXlJZDogZW5lbXkuZW5lbXlJZCwgeDogZW5lbXkueCwgeTogZW5lbXkueSwgaGVhbHRoOiBlbmVteS5oZWFsdGgsIG1heEhlYWx0aDogZW5lbXkubWF4SGVhbHRoLCBzaXplLCBzY2FsZTogcyB9KTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShlbmVteS5hY3RvciwgZW5lbXkueCwgZW5lbXkueSwgc2l6ZSwgZW5lbXlPcmllbnRhdGlvbih0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIGVuZW15LngsIGVuZW15LnksIG5vdywgZW5lbXkucm93SWQpKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHRoaXMuZ3VuUGlja3Vwcykge1xuICAgICAgY29uc3QgZ3VuID0gZ3VuRmFtaWx5Lm1lbWJlcnNbcGlja3VwLmd1bklkXTtcbiAgICAgIHBpY2t1cC5hY3Rvci5sYWJlbCA9IHNoYXBlTGFiZWwoZ3VuLmxhYmVsLCBcImFib3ZlXCIsIDEwLCA3KTtcbiAgICAgIHBpY2t1cC5hY3Rvci5jb2xvciA9IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKHBpY2t1cC5hY3RvciwgcGlja3VwLngsIHBpY2t1cC55LCAxNSwgYmlsbGJvYXJkT3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBwaWNrdXAueCwgcGlja3VwLnksIG5vdykpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgdGhpcy5tdWx0aXBsaWVycykge1xuICAgICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVyc1twaWNrdXAubXVsdGlwbGllcklkXTtcbiAgICAgIHBpY2t1cC5hY3Rvci5sYWJlbCA9IHNoYXBlTGFiZWwoYCR7c3BlYy5zcXVhZEFkZGVkICsgMX14YCwgXCJjZW50ZXJcIiwgMTEsIDApO1xuICAgICAgcGlja3VwLmFjdG9yLmNvbG9yID0gbmVvblBhbGV0dGVbc3BlYy5waWNrdXBDb2xvcl07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUocGlja3VwLmFjdG9yLCBwaWNrdXAueCwgcGlja3VwLnksIDE2LCBiaWxsYm9hcmRPcmllbnRhdGlvbih0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHBpY2t1cC54LCBwaWNrdXAueSwgbm93KSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RIZWxpY29wdGVyU2NlbmUocHJpbWl0aXZlcywgc2hhcGVJbnN0YW5jZXMsIHRoaXMuZW5lbXlFeGl0RWZmZWN0cy5tYXAoZW5lbXlFeGl0Q2xvdWQpLCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpO1xuICAgIHByb2plY3RlZC5wcmltaXRpdmVzLnB1c2goLi4ucHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKGVuZW15SGVhbHRoQmFycywgdGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KSk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIocHJvamVjdGVkLCBub3cgLyAxMDAwKTtcbiAgfVxuXG4gIHNuYXBzaG90KCk6IE5lb25Td2FybVNuYXBzaG90IHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgYWN0aXZlVHJhY2s6IHRoaXMuYWN0aXZlVHJhY2sgIT09IG51bGwsXG4gICAgICBjb21iYXROb3c6IHRoaXMuY29tYmF0Tm93LFxuICAgICAgY29tYmF0RWxhcHNlZDogdGhpcy5jb21iYXRFbGFwc2VkLFxuICAgICAgc2NlbmVJZDogdGhpcy50cmFja1NjZW5lSWQsXG4gICAgICBzcXVhZDoge1xuICAgICAgICBsYW5lOiB0aGlzLnNxdWFkLmxhbmUsXG4gICAgICAgIGNvdW50OiB0aGlzLnNxdWFkLmNvdW50LFxuICAgICAgICB4OiB0aGlzLnNxdWFkLngsXG4gICAgICAgIHRhcmdldFg6IHRoaXMuc3F1YWQudGFyZ2V0WCxcbiAgICAgICAgYWltT2Zmc2V0OiB0aGlzLnNxdWFkLmFpbU9mZnNldCxcbiAgICAgIH0sXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgZ3VuOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA/IHsgLi4udGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gfSA6IG51bGwsXG4gICAgICAgIHNoaWVsZDogdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQ/LnNoaWVsZElkID8/IG51bGwsXG4gICAgICAgIHN3b3JkOiB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkID8geyBpZDogdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZC5zd29yZElkLCBsZXZlbDogdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZC5sZXZlbCB9IDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBlbmVtaWVzOiB0aGlzLmVuZW1pZXMubWFwKGVuZW15ID0+ICh7XG4gICAgICAgIGlkOiBlbmVteS5pZCxcbiAgICAgICAgZW5lbXlJZDogZW5lbXkuZW5lbXlJZCxcbiAgICAgICAgbGFuZTogZW5lbXkubGFuZSxcbiAgICAgICAgeDogZW5lbXkueCxcbiAgICAgICAgeTogZW5lbXkueSxcbiAgICAgICAgaGVhbHRoOiBlbmVteS5oZWFsdGgsXG4gICAgICAgIG1heEhlYWx0aDogZW5lbXkubWF4SGVhbHRoLFxuICAgICAgICBkeWluZzogZW5lbXkuZHlpbmcsXG4gICAgICB9KSksXG4gICAgICBwaWNrdXBzOiB7XG4gICAgICAgIGd1bnM6IHRoaXMuZ3VuUGlja3Vwcy5sZW5ndGgsXG4gICAgICAgIHNoaWVsZHM6IHRoaXMuc2hpZWxkUGlja3Vwcy5sZW5ndGgsXG4gICAgICAgIHN3b3JkczogdGhpcy5zd29yZFBpY2t1cHMubGVuZ3RoLFxuICAgICAgICBtdWx0aXBsaWVyczogdGhpcy5tdWx0aXBsaWVycy5sZW5ndGgsXG4gICAgICB9LFxuICAgICAga2lsbHM6IHRoaXMua2lsbHMsXG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wTG9vcCgpO1xuICAgIHRoaXMucmVuZGVyZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGF3blRyYWNrRW50aXRpZXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZVRyYWNrKSByZXR1cm47XG4gICAgd2hpbGUgKFxuICAgICAgdGhpcy5uZXh0VHJhY2tFbnRpdHkgPCB0aGlzLnRyYWNrRW50aXRpZXMubGVuZ3RoICYmXG4gICAgICB0aGlzLmVudGl0eUFycml2YWxTZWNvbmRzKHRoaXMudHJhY2tFbnRpdGllc1t0aGlzLm5leHRUcmFja0VudGl0eV0pIDw9IHRoaXMuY29tYmF0RWxhcHNlZCArIHRoaXMuc3Bhd25MZWFkU2Vjb25kcyh0aGlzLnRyYWNrRW50aXRpZXNbdGhpcy5uZXh0VHJhY2tFbnRpdHldKVxuICAgICkge1xuICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy50cmFja0VudGl0aWVzW3RoaXMubmV4dFRyYWNrRW50aXR5KytdO1xuICAgICAgY29uc3QgbGFuZTogTGFuZSA9IGVudGl0eS5zaWRlID09PSBcImxlZnRcIiA/IDAgOiAxO1xuICAgICAgY29uc3QgZW5lbXlEZWZpbml0aW9uRW50cnkgPSBlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZChlbnRpdHkuaWQpO1xuICAgICAgaWYgKGVuZW15RGVmaW5pdGlvbkVudHJ5KSB7XG4gICAgICAgIGNvbnN0IHsgZW5lbXlJZCwgZGVmaW5pdGlvbiB9ID0gZW5lbXlEZWZpbml0aW9uRW50cnk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHtcbiAgICAgICAgICBpZDogKyt0aGlzLmVudGl0eUlkQ291bnRlcixcbiAgICAgICAgICBlbmVteVR5cGU6IGVuZW15SWQsXG4gICAgICAgICAgZW5lbXlJZCxcbiAgICAgICAgICBsYW5lLFxuICAgICAgICAgIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLFxuICAgICAgICAgIHk6IHRoaXMuZW5lbXlTcGF3blkoZW50aXR5KSxcbiAgICAgICAgICBoZWFsdGg6IGRlZmluaXRpb24uaGVhbHRoICogdGhpcy5hY3RpdmVUcmFjay5kZWZpbml0aW9uLmJhbGFuY2UuZW5lbXlIcCxcbiAgICAgICAgICBtYXhIZWFsdGg6IGRlZmluaXRpb24uaGVhbHRoICogdGhpcy5hY3RpdmVUcmFjay5kZWZpbml0aW9uLmJhbGFuY2UuZW5lbXlIcCxcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIsXG4gICAgICAgICAgcm93SWQ6IGVudGl0eS5yb3dJbmRleCxcbiAgICAgICAgICBhY3RvcjogY3JlYXRlRW5lbXlBY3RvcihlbmVteUlkKSxcbiAgICAgICAgICBkeWluZzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5zcGF3blNvdW5kKSB0aGlzLnBsYXkoZGVmaW5pdGlvbi5zcGF3blNvdW5kKTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmd1bi5cIikpIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gZW50aXR5LmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5ndW4uXCIubGVuZ3RoKTtcbiAgICAgICAgaWYgKCEoY2FuZGlkYXRlIGluIGd1bkZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayB1c2VzIHVua25vd24gZ3VuIGlkIFwiJHtlbnRpdHkuaWR9XCIuYCk7XG4gICAgICAgIHRoaXMuc3Bhd25HdW5QaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoZW50aXR5KSwgZ3VuSWQ6IGNhbmRpZGF0ZSBhcyBHdW5JZCwgbGV2ZWw6IDEsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gZW50aXR5LmlkLnNsaWNlKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIubGVuZ3RoKTtcbiAgICAgICAgaWYgKCEoY2FuZGlkYXRlIGluIHNoaWVsZEZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayB1c2VzIHVua25vd24gc2hpZWxkIGlkIFwiJHtlbnRpdHkuaWR9XCIuYCk7XG4gICAgICAgIHRoaXMuc3Bhd25TaGllbGRQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoZW50aXR5KSwgc2hpZWxkSWQ6IGNhbmRpZGF0ZSBhcyBTaGllbGRJZCwgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyIH0pO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIubGVuZ3RoKTtcbiAgICAgICAgaWYgKCEoY2FuZGlkYXRlIGluIHN3b3JkRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHVzZXMgdW5rbm93biBzd29yZCBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICB0aGlzLnNwYXduU3dvcmRQaWNrdXAoeyBsYW5lLCB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSwgeTogdGhpcy5waWNrdXBTcGF3blkoZW50aXR5KSwgc3dvcmRJZDogY2FuZGlkYXRlIGFzIFN3b3JkSWQsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSB7XG4gICAgICAgIHRoaXMuc3Bhd25NdWx0aXBsaWVyUGlja3VwKHsgbGFuZSwgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksIHk6IHRoaXMucGlja3VwU3Bhd25ZKGVudGl0eSksIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgZW50aXR5IGlkIFwiJHtlbnRpdHkuaWR9XCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgbGFuZSBydW5uZXIuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFja1Jlc29sdmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5leHRUcmFja0VudGl0eSA+PSB0aGlzLnRyYWNrRW50aXRpZXMubGVuZ3RoXG4gICAgICAmJiB0aGlzLmVuZW1pZXMubGVuZ3RoID09PSAwXG4gICAgICAmJiB0aGlzLmd1blBpY2t1cHMubGVuZ3RoID09PSAwXG4gICAgICAmJiB0aGlzLnNoaWVsZFBpY2t1cHMubGVuZ3RoID09PSAwXG4gICAgICAmJiB0aGlzLnN3b3JkUGlja3Vwcy5sZW5ndGggPT09IDBcbiAgICAgICYmIHRoaXMubXVsdGlwbGllcnMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXJlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4pIHJldHVybjtcbiAgICBjb25zdCB7IGlkOiBndW5JZCwgbGV2ZWw6IGd1bkxldmVsIH0gPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bjtcbiAgICBjb25zdCBndW4gPSBndW5GYW1pbHkubWVtYmVyc1tndW5JZF07XG4gICAgY29uc3QgdHVuaW5nID0gZ3VuLmxldmVscy5maW5kKGl0ZW0gPT4gaXRlbS5sZXZlbCA9PT0gZ3VuTGV2ZWwpID8/IGd1bi5sZXZlbHNbMF07XG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5zcXVhZC5wb2ludHModGhpcy5wbGF5ZXJZKCksIHRoaXMuc2NhbGUoKSkubWFwKHBvaW50ID0+ICh7IHg6IHBvaW50LngsIHk6IHRoaXMucGxheWVyWSgpIC0gMjAgKiB0aGlzLnNjYWxlKCkgfSkpO1xuICAgIHRoaXMuc3luY0d1bkNvb2xkb3ducyhwb2ludHMubGVuZ3RoKTtcbiAgICBjb25zdCBjbGFpbWVkVGFyZ2V0SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgY29uc3QgY3ljbGVTZWNvbmRzID0gMSAvIHR1bmluZy5maXJlUmF0ZVBlclNlY29uZDtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmICh0aGlzLmd1bkNvb2xkb3duc1tpbmRleF0gPiAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2VsZWN0R3VuVGFyZ2V0KHBvaW50LngsIGNsYWltZWRUYXJnZXRJZHMpO1xuICAgICAgaWYgKCF0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgY2xhaW1lZFRhcmdldElkcy5hZGQodGFyZ2V0LmlkKTtcbiAgICAgIHRoaXMuZ3VuU2ltdWxhdGlvbi5maXJlKGd1biwgdHVuaW5nLCB0aGlzLnBsYXllckxhbmUsIFt7IC4uLnBvaW50LCBhaW1YOiB0YXJnZXQueCwgYWltWTogdGFyZ2V0LnkgfV0sIHRoaXMuY29tYmF0Tm93LCB0aGlzLnNjYWxlKCkpO1xuICAgICAgdGhpcy5ndW5Db29sZG93bnNbaW5kZXhdID0gY3ljbGVTZWNvbmRzO1xuICAgIH1cbiAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5ndW5Db29sZG93bnMubGVuZ3RoID4gMCA/IE1hdGgubWluKC4uLnRoaXMuZ3VuQ29vbGRvd25zKSA6IDA7XG4gIH1cblxuICBwcml2YXRlIHN5bmNHdW5Db29sZG93bnMoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHN5bmNTbG90QXJyYXkodGhpcy5ndW5Db29sZG93bnMsIGNvdW50LCAoKSA9PiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0R3VuVGFyZ2V0KG9yaWdpblg6IG51bWJlciwgY2xhaW1lZFRhcmdldElkczogUmVhZG9ubHlTZXQ8bnVtYmVyPik6IEVuZW15IHwgbnVsbCB7XG4gICAgY29uc3QgbmF0aXZlUmVhY2ggPSA0MiAqIHRoaXMuc2NhbGUoKTtcbiAgICBjb25zdCBhc3Npc3RSZWFjaCA9IDk2ICogdGhpcy5zY2FsZSgpO1xuICAgIGNvbnN0IGxpdmVMYW5lRW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoZW5lbXkgPT4gIWVuZW15LmR5aW5nICYmIGVuZW15LmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSAmJiBlbmVteS55IDwgdGhpcy5wbGF5ZXJZKCkpO1xuICAgIGNvbnN0IG5hdGl2ZVRhcmdldCA9IHNlbGVjdEJlc3RVbmNsYWltZWQoXG4gICAgICBsaXZlTGFuZUVuZW1pZXMsXG4gICAgICBjbGFpbWVkVGFyZ2V0SWRzLFxuICAgICAgZW5lbXkgPT4gZW5lbXkuaWQsXG4gICAgICBlbmVteSA9PiB0aGlzLnNjb3JlR3VuTmF0aXZlVGFyZ2V0KGVuZW15LCBvcmlnaW5YLCBuYXRpdmVSZWFjaCksXG4gICAgKTtcbiAgICBjb25zdCBwcmVzc3VyZVRhcmdldCA9IHNlbGVjdEJlc3RVbmNsYWltZWQoXG4gICAgICBsaXZlTGFuZUVuZW1pZXMsXG4gICAgICBuZXcgU2V0KCksXG4gICAgICBlbmVteSA9PiBlbmVteS5pZCxcbiAgICAgIGVuZW15ID0+IHRoaXMuc2NvcmVHdW5QcmVzc3VyZVRhcmdldChlbmVteSwgb3JpZ2luWCwgYXNzaXN0UmVhY2gsIGNsYWltZWRUYXJnZXRJZHMuaGFzKGVuZW15LmlkKSksXG4gICAgKTtcbiAgICBpZiAoIW5hdGl2ZVRhcmdldCkgcmV0dXJuIHByZXNzdXJlVGFyZ2V0O1xuICAgIGlmICghcHJlc3N1cmVUYXJnZXQpIHJldHVybiBuYXRpdmVUYXJnZXQ7XG5cbiAgICBjb25zdCBuYXRpdmVEaXN0YW5jZSA9IHRoaXMucGxheWVyWSgpIC0gbmF0aXZlVGFyZ2V0Lnk7XG4gICAgY29uc3QgcHJlc3N1cmVEaXN0YW5jZSA9IHRoaXMucGxheWVyWSgpIC0gcHJlc3N1cmVUYXJnZXQueTtcbiAgICByZXR1cm4gcHJlc3N1cmVEaXN0YW5jZSArIDgwICogdGhpcy5zY2FsZSgpIDwgbmF0aXZlRGlzdGFuY2UgPyBwcmVzc3VyZVRhcmdldCA6IG5hdGl2ZVRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgc2NvcmVHdW5OYXRpdmVUYXJnZXQoZW5lbXk6IEVuZW15LCBvcmlnaW5YOiBudW1iZXIsIGhvcml6b250YWxSZWFjaDogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgZHggPSBNYXRoLmFicyhlbmVteS54IC0gb3JpZ2luWCk7XG4gICAgaWYgKGR4ID4gaG9yaXpvbnRhbFJlYWNoICsgdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZHkgPSB0aGlzLnBsYXllclkoKSAtIGVuZW15Lnk7XG4gICAgcmV0dXJuIGR4ICogMTAwMCArIGR5O1xuICB9XG5cbiAgcHJpdmF0ZSBzY29yZUd1blByZXNzdXJlVGFyZ2V0KGVuZW15OiBFbmVteSwgb3JpZ2luWDogbnVtYmVyLCBob3Jpem9udGFsUmVhY2g6IG51bWJlciwgYWxyZWFkeUNsYWltZWQ6IGJvb2xlYW4pOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBkeCA9IE1hdGguYWJzKGVuZW15LnggLSBvcmlnaW5YKTtcbiAgICBpZiAoZHggPiBob3Jpem9udGFsUmVhY2ggKyB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogdGhpcy5zY2FsZSgpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBkeSA9IHRoaXMucGxheWVyWSgpIC0gZW5lbXkueTtcbiAgICBjb25zdCBjb2x1bW5QcmVzc3VyZSA9IHRoaXMuZW5lbWllcy5maWx0ZXIob3RoZXIgPT5cbiAgICAgICFvdGhlci5keWluZyAmJlxuICAgICAgb3RoZXIubGFuZSA9PT0gZW5lbXkubGFuZSAmJlxuICAgICAgb3RoZXIueSA8IHRoaXMucGxheWVyWSgpICYmXG4gICAgICBNYXRoLmFicyhvdGhlci54IC0gZW5lbXkueCkgPD0gMTggKiB0aGlzLnNjYWxlKCkgJiZcbiAgICAgIE1hdGguYWJzKG90aGVyLnkgLSBlbmVteS55KSA8PSAxODAgKiB0aGlzLnNjYWxlKClcbiAgICApLmxlbmd0aDtcbiAgICBjb25zdCBjbGFpbWVkUGVuYWx0eSA9IGFscmVhZHlDbGFpbWVkID8gNDUwIDogMDtcbiAgICBjb25zdCBwcmVzc3VyZUJvbnVzID0gTWF0aC5taW4oNCwgY29sdW1uUHJlc3N1cmUpICogNzAgKiB0aGlzLnNjYWxlKCk7XG4gICAgcmV0dXJuIGNsYWltZWRQZW5hbHR5ICsgZHggKiA3ICsgZHkgLSBwcmVzc3VyZUJvbnVzO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQcm9qZWN0aWxlcyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5ndW5TaW11bGF0aW9uLnVwZGF0ZVByb2plY3RpbGVzKGRlbHRhLCB0aGlzLmNvbWJhdE5vdywgdGhpcy5lbmVtaWVzLm1hcChlbmVteSA9PiBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICByYWRpdXM6IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5yYWRpdXMgKiB0aGlzLnNjYWxlKCksXG4gICAgfSkpLCB7IHRvcDogLTQwICogdGhpcy5zY2FsZSgpLCBsZWZ0OiAtNDAsIHJpZ2h0OiB0aGlzLmNhbnZhcy53aWR0aCArIDQwIH0sIChzaG90LCBlbmVteSkgPT4ge1xuICAgICAgY29uc3QgZ2FtZUVuZW15ID0gZW5lbXkgYXMgRW5lbXkgJiB7IHJhZGl1czogbnVtYmVyIH07XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNvbHZlRW5lbXlEYW1hZ2Uoe1xuICAgICAgICBlbmVteTogZ2FtZUVuZW15LFxuICAgICAgICBlZmZlY3RzOiB0aGlzLmVuZW15RXhpdEVmZmVjdHMsXG4gICAgICAgIGltcGFjdE1hZ25pdHVkZTogc2hvdC5kYW1hZ2UgKyBzaG90Lmtub2NrYmFjayAqIC4wNixcbiAgICAgICAgY29sb3I6IHRoaXMuZW5lbXlFeGl0Q29sb3IoZ2FtZUVuZW15KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdC5raWxsZWQpIHtcbiAgICAgICAgdGhpcy5raWxscysrO1xuICAgICAgICB0aGlzLnBsYXkocmVzdWx0LmRlZmluaXRpb24uZGVhdGhTb3VuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXkoXCJQcm9qZWN0aWxlSGl0XCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJFbmVteUhpdFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTmVhclBsYXllckVmZmVjdHMoZGVsdGE6IG51bWJlciwgc2hpZWxkRGVmOiAodHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzKVtTaGllbGRJZF0gfCBudWxsLCBzd29yZERlZjogU3dvcmRNZW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcHggPSB0aGlzLnNxdWFkLng7XG4gICAgY29uc3QgcHkgPSB0aGlzLnBsYXllclkoKTtcbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgJiYgc2hpZWxkRGVmKSB7XG4gICAgICBjb25zdCBzaGllbGRTdGF0ZSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkO1xuICAgICAgY29uc3Qgc2hpZWxkVGhyZWF0cyA9IHF1ZXJ5TmVhcmJ5VGhyZWF0cyh0aGlzLmVuZW1pZXMsIHtcbiAgICAgICAgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LFxuICAgICAgICBsYW5lOiB0aGlzLnBsYXllckxhbmUsXG4gICAgICAgIHJhbmdlOiBzaGllbGREZWYucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogZmFsc2UsXG4gICAgICAgIHB1cnBvc2U6IFwic2hpZWxkXCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2hpZWxkUmVzdWx0ID0gdGlja1NoaWVsZChzaGllbGRTdGF0ZSwgc2hpZWxkRGVmLCBzaGllbGRUaHJlYXRzLCBweCwgcHksIHRoaXMuY29tYmF0Tm93LCBkZWx0YSk7XG4gICAgICBpZiAoc2hpZWxkUmVzdWx0LnB1c2hFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW5lbXkgb2YgdGhpcy5lbmVtaWVzKSB7XG4gICAgICAgICAgaWYgKCFzaGllbGRSZXN1bHQucHVzaEVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICAgICAgY29uc3QgZHggPSBlbmVteS54IC0gcHg7XG4gICAgICAgICAgY29uc3QgZHkgPSBlbmVteS55IC0gcHk7XG4gICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAxO1xuICAgICAgICAgIGVuZW15LnggKz0gKGR4IC8gZGlzdCkgKiBzaGllbGRSZXN1bHQucHVzaERpc3RhbmNlICogdGhpcy5zY2FsZSgpO1xuICAgICAgICAgIGVuZW15LnkgKz0gKGR5IC8gZGlzdCkgKiBzaGllbGRSZXN1bHQucHVzaERpc3RhbmNlICogdGhpcy5zY2FsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheShcIlNoaWVsZFB1bHNlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlRW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICAgICAgaWYgKGVuZW15LmR5aW5nIHx8ICFzaGllbGRSZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICAgICAgZW5lbXkuaGVhbHRoIC09IHNoaWVsZFJlc3VsdC5jb250YWN0RGFtYWdlQW1vdW50ICogZGVsdGE7XG4gICAgICAgICAgaWYgKGVuZW15LmhlYWx0aCA8PSAwKSB0aGlzLmRlc3Ryb3lFbmVteShlbmVteSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCAmJiBzd29yZERlZikge1xuICAgICAgY29uc3Qgc3dvcmRTdGF0ZSA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQ7XG4gICAgICBjb25zdCBzd29yZFF1ZXJ5UmFuZ2UgPSBzd29yZERlZi5yb3dSZWFjaFxuICAgICAgICA/IE1hdGgubWF4KHRoaXMuY2FudmFzLndpZHRoLCBzd29yZERlZi5yYW5nZSAqIHRoaXMuc2NhbGUoKSlcbiAgICAgICAgOiBzd29yZERlZi5yYW5nZSAqIHRoaXMuc2NhbGUoKTtcbiAgICAgIGNvbnN0IHN3b3JkVGhyZWF0cyA9IHF1ZXJ5TmVhcmJ5VGhyZWF0cyh0aGlzLmVuZW1pZXMsIHtcbiAgICAgICAgb3JpZ2luOiB7IHg6IHB4LCB5OiBweSB9LFxuICAgICAgICBsYW5lOiB0aGlzLnBsYXllckxhbmUsXG4gICAgICAgIHJhbmdlOiBzd29yZFF1ZXJ5UmFuZ2UsXG4gICAgICAgIGluY2x1ZGVBZGphY2VudExhbmVzOiAoc3dvcmREZWYudGFyZ2V0aW5nTW9kZSBhcyBTd29yZFRhcmdldGluZ01vZGUpID09PSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgICAgbWF4VGFyZ2V0czogc3dvcmREZWYucm93UmVhY2ggPyB1bmRlZmluZWQgOiBzd29yZERlZi5tYXhUYXJnZXRzLFxuICAgICAgICBwdXJwb3NlOiBcInN3b3JkXCIsXG4gICAgICB9KS5maWx0ZXIodGhyZWF0ID0+ICFzd29yZERlZi5yb3dSZWFjaCB8fCBNYXRoLmFicyh0aHJlYXQudGFyZ2V0LnkgLSBweSkgPD0gc3dvcmREZWYucmFuZ2UgKiB0aGlzLnNjYWxlKCkpO1xuICAgICAgY29uc3Qgc3dvcmRSZXN1bHQgPSB0aWNrU3dvcmQoc3dvcmRTdGF0ZSwgc3dvcmREZWYsIHN3b3JkVGhyZWF0cywgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgZGVsdGEsIG5lb25QYWxldHRlW3N3b3JkRGVmLmNvbG9yXSwgc3dvcmRWaXN1YWxEdXJhdGlvbk1zKHRoaXMuc3dvcmRWaXN1YWxUdW5pbmcpLCB0aGlzLnNxdWFkLmNvdW50KTtcbiAgICAgIGlmIChzd29yZFJlc3VsdC5zd2luZ1RyaWdnZXJlZCAmJiBzd29yZFJlc3VsdC5oaXRFbmVteUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYXBwbHlQZW5kaW5nU3dvcmREYW1hZ2UoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wbGF5KFwiU3dvcmRTd2luZ1dob29zaFwiKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nU3dvcmREYW1hZ2UgPSB7XG4gICAgICAgICAgaGl0czogdGhpcy5zY2hlZHVsZVN3b3JkSGl0cyhzd29yZFJlc3VsdC5oaXRUYXJnZXRzLCBzd29yZFN0YXRlLnByZXZpb3VzU2xhc2hTaWRlKSxcbiAgICAgICAgICBkYW1hZ2U6IHN3b3JkUmVzdWx0LmRhbWFnZSxcbiAgICAgICAgICBjb2xvcjogbmVvblBhbGV0dGVbc3dvcmREZWYuY29sb3JdLFxuICAgICAgICAgIGltcGFjdFNvdW5kSWQ6IHN3b3JkSW1wYWN0U291bmRJZHNbc3dvcmRTdGF0ZS5zd29yZElkXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwbHlQZW5kaW5nU3dvcmREYW1hZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlU3dvcmRIaXRzKHRhcmdldHM6IEFycmF5PHsgaWQ6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4sIHNpZGU6IC0xIHwgMSk6IEFycmF5PHsgZW5lbXlJZDogbnVtYmVyOyBkdWVBdDogbnVtYmVyIH0+IHtcbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHN3b3JkVmlzdWFsRHVyYXRpb25Ncyh0aGlzLnN3b3JkVmlzdWFsVHVuaW5nKTtcbiAgICBjb25zdCB4cyA9IHRhcmdldHMubWFwKHRhcmdldCA9PiB0YXJnZXQueCk7XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLnhzKTtcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4ueHMpO1xuICAgIGNvbnN0IHNwYW4gPSBNYXRoLm1heCgxLCBtYXhYIC0gbWluWCk7XG4gICAgY29uc3QgbGVmdFRvUmlnaHQgPSBzaWRlID09PSAxO1xuICAgIHJldHVybiB0YXJnZXRzLm1hcCh0YXJnZXQgPT4ge1xuICAgICAgY29uc3QgbGFuZVByb2dyZXNzID0gbGVmdFRvUmlnaHRcbiAgICAgICAgPyAodGFyZ2V0LnggLSBtaW5YKSAvIHNwYW5cbiAgICAgICAgOiAobWF4WCAtIHRhcmdldC54KSAvIHNwYW47XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmVteUlkOiB0YXJnZXQuaWQsXG4gICAgICAgIGR1ZUF0OiB0aGlzLmNvbWJhdE5vdyArIGR1cmF0aW9uICogdGhpcy5zd29yZFN0cmlrZVByb2dyZXNzKGxhbmVQcm9ncmVzcyksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzd29yZFN0cmlrZVByb2dyZXNzKGxhbmVQcm9ncmVzcyA9IC43Mik6IG51bWJlciB7XG4gICAgY29uc3QgdHVuaW5nID0gdGhpcy5zd29yZFZpc3VhbFR1bmluZztcbiAgICBjb25zdCBzdHJpa2UgPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gPz8gLjMxO1xuICAgIGNvbnN0IGZvbGxvd1Rocm91Z2ggPSB0dW5pbmcuZm9sbG93VGhyb3VnaER1cmF0aW9uID8/IC4xODtcbiAgICBjb25zdCB0b3RhbCA9IE1hdGgubWF4KC4wMSwgc3RyaWtlICsgZm9sbG93VGhyb3VnaCk7XG4gICAgY29uc3QgY2xhbXBlZExhbmVQcm9ncmVzcyA9IE1hdGgubWF4KC4xOCwgTWF0aC5taW4oLjg4LCBsYW5lUHJvZ3Jlc3MpKTtcbiAgICByZXR1cm4gTWF0aC5taW4oLjk1LCAoc3RyaWtlICogY2xhbXBlZExhbmVQcm9ncmVzcykgLyB0b3RhbCk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UGVuZGluZ1N3b3JkRGFtYWdlKG9wdGlvbnM6IHsgZm9yY2U/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xuICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLnBlbmRpbmdTd29yZERhbWFnZTtcbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybjtcbiAgICBjb25zdCBkdWVIaXRzID0gb3B0aW9ucy5mb3JjZVxuICAgICAgPyBwZW5kaW5nLmhpdHNcbiAgICAgIDogcGVuZGluZy5oaXRzLmZpbHRlcihoaXQgPT4gdGhpcy5jb21iYXROb3cgPj0gaGl0LmR1ZUF0KTtcbiAgICBpZiAoZHVlSGl0cy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBkdWVFbmVteUlkcyA9IGR1ZUhpdHMubWFwKGhpdCA9PiBoaXQuZW5lbXlJZCk7XG4gICAgcGVuZGluZy5oaXRzID0gcGVuZGluZy5oaXRzLmZpbHRlcihoaXQgPT4gIWR1ZUVuZW15SWRzLmluY2x1ZGVzKGhpdC5lbmVteUlkKSk7XG4gICAgaWYgKHBlbmRpbmcuaGl0cy5sZW5ndGggPT09IDApIHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlID0gbnVsbDtcbiAgICBsZXQgaW1wYWN0ZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICBpZiAoZW5lbXkuZHlpbmcgfHwgIWR1ZUVuZW15SWRzLmluY2x1ZGVzKGVuZW15LmlkKSkgY29udGludWU7XG4gICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNvbHZlRW5lbXlEYW1hZ2Uoe1xuICAgICAgICBlbmVteSxcbiAgICAgICAgZWZmZWN0czogdGhpcy5lbmVteUV4aXRFZmZlY3RzLFxuICAgICAgICBkYW1hZ2U6IHBlbmRpbmcuZGFtYWdlLFxuICAgICAgICBpbXBhY3RNYWduaXR1ZGU6IHBlbmRpbmcuZGFtYWdlLFxuICAgICAgICBjb2xvcjogcGVuZGluZy5jb2xvcixcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdC5raWxsZWQpIHtcbiAgICAgICAgdGhpcy5raWxscysrO1xuICAgICAgICB0aGlzLnBsYXkocmVzdWx0LmRlZmluaXRpb24uZGVhdGhTb3VuZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbXBhY3RlZCkgdGhpcy5wbGF5KHBlbmRpbmcuaW1wYWN0U291bmRJZCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVuZW1pZXMoZGVsdGE6IG51bWJlciwgc2hpZWxkRGVmOiAodHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzKVtTaGllbGRJZF0gfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3Qgc2xvd0VuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgY29uc3QgcHggPSB0aGlzLnNxdWFkLng7XG4gICAgY29uc3QgcHkgPSB0aGlzLnBsYXllclkoKTtcbiAgICBmb3IgKGNvbnN0IGVuZW15IG9mIFsuLi50aGlzLmVuZW1pZXNdKSB7XG4gICAgICBlbmVteS5hY3Rvci5zZXRWZWxvY2l0eSgwLCAwKS51cGRhdGUoZGVsdGEpO1xuICAgICAgY29uc3QgZWZmZWN0aXZlID0gc2xvd0VuZW15SWRzLmhhcyhlbmVteS5pZClcbiAgICAgICAgPyBlbmVteS5zcGVlZE11bHRpcGxpZXIgKiAoc2hpZWxkRGVmPy5zbG93TXVsdGlwbGllciA/PyAxKVxuICAgICAgICA6IGVuZW15LnNwZWVkTXVsdGlwbGllcjtcbiAgICAgIGVuZW15LnkgKz0gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnNwZWVkICogZWZmZWN0aXZlICogdGhpcy5zY2FsZSgpICogZGVsdGEgLSBlbmVteS5hY3Rvci55ICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gMi41O1xuICAgICAgZW5lbXkuYWN0b3IubW92ZVRvKDAsIDApO1xuICAgICAgaWYgKGVuZW15LmR5aW5nICYmIGVuZW15LmFjdG9yLmRpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoZW5lbXkuZHlpbmcpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgJiYgc2hpZWxkRGVmKSB7XG4gICAgICAgIGNvbnN0IHNoaWVsZENvbnRhY3QgPSByZXNvbHZlU2hpZWxkQ29udGFjdCh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCwgc2hpZWxkRGVmLCBPYmplY3QuYXNzaWduKGVuZW15LCB7XG4gICAgICAgICAgcmFkaXVzOiB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgICAgICB9KSwgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgdGhpcy5zY2FsZSgpKTtcbiAgICAgICAgaWYgKHNoaWVsZENvbnRhY3QuYWJzb3JiZWQpIHtcbiAgICAgICAgICBpZiAoc2hpZWxkQ29udGFjdC5lbmVteURlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95RW5lbXkoZW5lbXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmVteS5hY3Rvci5pbXBhY3QoeyBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LCBtYWduaXR1ZGU6IHNoaWVsZENvbnRhY3QuZGFtYWdlQWJzb3JiZWQgLyB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkuaW1wYWN0UmVzaXN0YW5jZSB9KTtcbiAgICAgICAgICAgIHRoaXMucGxheShcIlNoaWVsZEltcGFjdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlPy5oaXRzLnNvbWUoaGl0ID0+IGhpdC5lbmVteUlkID09PSBlbmVteS5pZCkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBoaXRJbmRleCA9IHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCB0aGlzLnNjYWxlKCkpLmZpbmRJbmRleChwb2ludCA9PiBNYXRoLmh5cG90KHBvaW50LnggLSBlbmVteS54LCBwb2ludC55IC0gZW5lbXkueSkgPD0gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIDMuMik7XG4gICAgICBpZiAoaGl0SW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCB0aGlzLnNjYWxlKCkpW2hpdEluZGV4XTtcbiAgICAgICAgY29uc3QgYWN0b3IgPSB0aGlzLnBsYXllckFjdG9yc1toaXRJbmRleF0gPz8gbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KTtcbiAgICAgICAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IC41NTtcbiAgICAgICAgYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbiAgICAgICAgdGhpcy5leHBsb2RpbmdQbGF5ZXJzLnB1c2goeyBhY3RvciwgeDogcG9pbnQueCwgeTogcG9pbnQueSB9KTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBY3RvcnMuc3BsaWNlKGhpdEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zcXVhZC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICB0aGlzLnBsYXkoXCJQbGF5ZXJEYW1hZ2VcIik7XG4gICAgICAgIHRoaXMucGxheShcIlNxdWFkTWVtYmVyTG9zdFwiKTtcbiAgICAgICAgaWYgKHRoaXMuc3F1YWQuY291bnQgPT09IDEpIHRoaXMucGxheShcIkxvd0hlYWx0aFdhcm5pbmdcIik7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZ2FtZVwiICYmIHRoaXMuc3F1YWQuY291bnQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZWFzb24gPSBcIlRoZSBlbnRpcmUgc3F1YWQgd2FzIGRlc3Ryb3llZCBvbiBjb250YWN0LlwiO1xuICAgICAgICAgIHRoaXMuZmluaXNoKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmVteS55ID49IHRoaXMucGxheWVyWSgpKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IFwiZ2FtZVwiKSB7XG4gICAgICAgICAgdGhpcy5icmVhY2hlcysrO1xuICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgICB0aGlzLnBsYXkoXCJFbmVteUVzY2FwZWRcIik7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVhc29uID0gXCJBbiBlbmVteSBwYXNzZWQgdGhlIGRlZmVuc2UgbGluZS5cIjtcbiAgICAgICAgICB0aGlzLmZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmVteS55ID4gdGhpcy5jYW52YXMuaGVpZ2h0ICsgdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIDIpIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBpY2t1cHMoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLmd1blBpY2t1cHNdKSB7XG4gICAgICBwaWNrdXAuYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHRoaXMucGxheWVyWSgpIC0gMTUgKiB0aGlzLnNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA9IHsgaWQ6IHBpY2t1cC5ndW5JZCwgbGV2ZWw6IHBpY2t1cC5sZXZlbCB9O1xuICAgICAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICAgICAgdGhpcy5ndW5Db29sZG93bnMgPSBbXTtcbiAgICAgICAgdGhpcy5ndW5QaWNrdXBzLnNwbGljZSh0aGlzLmd1blBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwR3VuXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJXZWFwb25SZWFkeVwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMuZ3VuUGlja3Vwcy5zcGxpY2UodGhpcy5ndW5QaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnRoaXMuc2hpZWxkUGlja3Vwc10pIHtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHRoaXMucGxheWVyWSgpIC0gMTUgKiB0aGlzLnNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSkge1xuICAgICAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1twaWNrdXAuc2hpZWxkSWRdO1xuICAgICAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCA9IG5ldyBTaGllbGRTdGF0ZShwaWNrdXAuc2hpZWxkSWQsIGRlZi5tYXhDaGFyZ2VzKTtcbiAgICAgICAgdGhpcy5zaGllbGRQaWNrdXBzLnNwbGljZSh0aGlzLnNoaWVsZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwU2hpZWxkXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJTaGllbGRcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLnNoaWVsZFBpY2t1cHMuc3BsaWNlKHRoaXMuc2hpZWxkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLnN3b3JkUGlja3Vwc10pIHtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHRoaXMucGxheWVyWSgpIC0gMTUgKiB0aGlzLnNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZDtcbiAgICAgICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG5ldyBTd29yZFN0YXRlKHBpY2t1cC5zd29yZElkLCBjdXJyZW50Py5zd29yZElkID09PSBwaWNrdXAuc3dvcmRJZCA/IGN1cnJlbnQubGV2ZWwgKyAxIDogMSk7XG4gICAgICAgIHRoaXMuc3dvcmRQaWNrdXBzLnNwbGljZSh0aGlzLnN3b3JkUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgICAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTd29yZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLnN3b3JkUGlja3Vwcy5zcGxpY2UodGhpcy5zd29yZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5tdWx0aXBsaWVyc10pIHtcbiAgICAgIHBpY2t1cC5hY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgICAgcGlja3VwLnkgKz0gNzIgKiBwaWNrdXAuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpICogZGVsdGE7XG4gICAgICBpZiAocGlja3VwLnkgPj0gdGhpcy5wbGF5ZXJZKCkgLSAxNSAqIHRoaXMuc2NhbGUoKSAmJiBwaWNrdXAubGFuZSA9PT0gdGhpcy5wbGF5ZXJMYW5lKSB7XG4gICAgICAgIHRoaXMuc3F1YWQuYWRkKG11bHRpcGxpZXJGYW1pbHkubWVtYmVyc1twaWNrdXAubXVsdGlwbGllcklkXS5zcXVhZEFkZGVkKTtcbiAgICAgICAgdGhpcy5zeW5jUGxheWVyQWN0b3JzKCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGllcnMuc3BsaWNlKHRoaXMubXVsdGlwbGllcnMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwTXVsdGlwbGllclwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGlja3VwLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMubXVsdGlwbGllcnMuc3BsaWNlKHRoaXMubXVsdGlwbGllcnMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmlzaCh3b246IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICBjb25zdCB0aXRsZSA9IHdvbiA/IFwiRkxBV0xFU1MgUlVOXCIgOiBcIlRSQUNLIEZBSUxFRFwiO1xuICAgIGNvbnN0IGRldGFpbCA9IHdvbiA/IFwiTm8gZW5lbXkgdG91Y2hlZCBvciBlc2NhcGVkIHBhc3QgeW91LlwiIDogdGhpcy5mYWlsdXJlUmVhc29uIHx8IGAke3RoaXMuYnJlYWNoZXN9IGVuZW15JHt0aGlzLmJyZWFjaGVzID09PSAxID8gXCJcIiA6IFwiaWVzXCJ9IGJyZWFjaGVkIHRoZSBkZWZlbnNlLmA7XG4gICAgaWYgKHdvbikge1xuICAgICAgdGhpcy52aWN0b3J5ID0gbmV3IE5lb25WaWN0b3J5RXhwZXJpZW5jZSh7XG4gICAgICAgIGNlbnRlclg6IHRoaXMuY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgY2VudGVyWTogdGhpcy5jYW52YXMuaGVpZ2h0ICogLjM4LFxuICAgICAgICB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBwYXJ0aWNsZUNvdW50OiAxMjAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheShcIlB1enpsZUNvbXBsZXRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoXCJHYW1lT3ZlclwiKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVUcmFjayA9IG51bGw7XG4gICAgdGhpcy5vbkZpbmlzaD8uKHsgd29uLCB0aXRsZSwgZGV0YWlsLCBicmVhY2hlczogdGhpcy5icmVhY2hlcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1BsYXllckFjdG9ycygpOiB2b2lkIHtcbiAgICB3aGlsZSAodGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoIDwgdGhpcy5zcXVhZC5jb3VudCkgdGhpcy5wbGF5ZXJBY3RvcnMucHVzaChuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZTogc3dhcm1TaGFwZXMucGxheWVyIH0pKTtcbiAgICBpZiAodGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoID4gdGhpcy5zcXVhZC5jb3VudCkgdGhpcy5wbGF5ZXJBY3RvcnMubGVuZ3RoID0gdGhpcy5zcXVhZC5jb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlTY2VuZUJhY2tncm91bmQoKTogdm9pZCB7XG4gICAgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kKHRoaXMuc3RhZ2VFbGVtZW50LCB0aGlzLnRyYWNrU2NlbmVJZCk7XG4gIH1cblxuICBwcml2YXRlIGVuZW15RXhpdENvbG9yKGVuZW15OiBFbmVteSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVuZW15LmFjdG9yLmNvbG9yID8/IGVuZW15LmFjdG9yLnNoYXBlLmNvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmVteURlZmluaXRpb24oZW5lbXk6IEVuZW15KTogKHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycylbT3JiSWRdIHtcbiAgICByZXR1cm4gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lFbmVteShlbmVteTogRW5lbXkpOiB2b2lkIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gZGVmZWF0RW5lbXkoZW5lbXksIHRoaXMuZW5lbXlFeGl0RWZmZWN0cywgdGhpcy5lbmVteUV4aXRDb2xvcihlbmVteSkpO1xuICAgIHRoaXMua2lsbHMrKztcbiAgICB0aGlzLnBsYXkoZGVmaW5pdGlvbi5kZWF0aFNvdW5kKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5WChlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5sYW5lWChlbnRpdHkuc2lkZSA9PT0gXCJsZWZ0XCIgPyAwIDogMSkgKyAoZW50aXR5LmxhbmVJbmRleCAtIDIgKyAoZW50aXR5LmNvbHVtblNwYW4gLSAxKSAvIDIpICogMTUgKiB0aGlzLnNjYWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGVudGl0eVNwZWVkKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiAoZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoZW50aXR5LmlkKT8uZGVmaW5pdGlvbi5zcGVlZCA/PyA3MikgKiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyICogdGhpcy5zY2FsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmVteVNwYXduWShlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJZKCkgLSB0aGlzLmVudGl0eVNwZWVkKGVudGl0eSkgKiB0aGlzLnNwYXduTGVhZFNlY29uZHMoZW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgcGlja3VwU3Bhd25ZKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBsYXllclkoKSAtIHRoaXMuZW50aXR5U3BlZWQoZW50aXR5KSAqIHRoaXMuc3Bhd25MZWFkU2Vjb25kcyhlbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGF3bkxlYWRTZWNvbmRzKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIGNvbnN0IGFycml2YWxTZWNvbmRzID0gdGhpcy5lbnRpdHlBcnJpdmFsU2Vjb25kcyhlbnRpdHkpO1xuICAgIHJldHVybiBNYXRoLm1pbihtYXhUcmFja1NwYXduTGVhZFNlY29uZHMsIGFycml2YWxTZWNvbmRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5QXJyaXZhbFNlY29uZHMoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGZpcnN0VHJhY2tSb3dBcnJpdmFsU2Vjb25kcyArIE1hdGgubWF4KDAsIGVudGl0eS5kaXN0YW5jZUZyb21QbGF5ZXIgLSAxKSAqIHRyYWNrUm93VHJhdmVsU2Vjb25kcztcbiAgfVxuXG4gIHByaXZhdGUgcGxheShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgYWx0ZXJuYXRpdmVzID0gc291bmRBbHRlcm5hdGl2ZUNvdW50c1tpZF0gPz8gMDtcbiAgICBpZiAoYWx0ZXJuYXRpdmVzID4gMCAmJiB0aGlzLnNvdW5kPy5wbGF5Um90YXRlZCkgdGhpcy5zb3VuZC5wbGF5Um90YXRlZChpZCwgYWx0ZXJuYXRpdmVzKTtcbiAgICBlbHNlIHRoaXMuc291bmQ/LnBsYXkoaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5R3VuRmlyZShndW5JZDogR3VuSWQpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoZ3VuRmlyZVNvdW5kSWRzW2d1bklkXSk7XG4gIH1cblxuICBwcml2YXRlIHBsYXlQaWNrdXAoaWQ6IFwiUGlja3VwR3VuXCIgfCBcIlBpY2t1cFNoaWVsZFwiIHwgXCJQaWNrdXBTd29yZFwiIHwgXCJQaWNrdXBNdWx0aXBsaWVyXCIpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoXCJQaWNrdXBcIik7XG4gICAgdGhpcy5wbGF5KGlkKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZVRlc3RQYWdlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBzZWxlY3RBdXRvQWltT2Zmc2V0IH0gZnJvbSBcIi4uLy4uL3NyYy9hdXRvQWltXCI7XG5pbXBvcnQgeyBOZW9uU3dhcm1TaW11bGF0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9zaW11bGF0aW9uL05lb25Td2FybVNpbXVsYXRpb25cIjtcblxuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MT3V0cHV0RWxlbWVudD4oXCIjdGVzdC1zdGF0dXNcIikhO1xuY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE9MaXN0RWxlbWVudD4oXCIjcmVzdWx0c1wiKSE7XG5cbmNvbnN0IHJ1biA9ICgpID0+IHtcbiAgY29uc3QgbGFuZUNlbnRlciA9IDIwMDtcbiAgY29uc3QgcmVtYWluaW5nID0gW3sgeDogMTcwLCB5OiAxMjAsIHJvd0lkOiAxIH0sIHsgeDogMjMwLCB5OiAxMjAsIHJvd0lkOiAxIH1dO1xuICBjb25zdCBmYXJ0aGVyQ2VudGVyZWRSb3cgPSBbeyB4OiAyMDAsIHk6IDgwLCByb3dJZDogMiB9XTtcbiAgY29uc3QgYWxsVGFyZ2V0cyA9IFsuLi5yZW1haW5pbmcsIC4uLmZhcnRoZXJDZW50ZXJlZFJvd107XG4gIGNvbnN0IGZpcnN0T2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChhbGxUYXJnZXRzLCBsYW5lQ2VudGVyLCBbMF0pO1xuICBjb25zdCBmaXJzdFRhcmdldCA9IGZpcnN0T2Zmc2V0IDwgMCA/IHJlbWFpbmluZ1swXSA6IGZpcnN0T2Zmc2V0ID4gMCA/IHJlbWFpbmluZ1sxXSA6IG51bGw7XG4gIGNvbnN0IGFmdGVyRmlyc3RLaWxsID0gZmlyc3RUYXJnZXQgPyBhbGxUYXJnZXRzLmZpbHRlcih0YXJnZXQgPT4gdGFyZ2V0ICE9PSBmaXJzdFRhcmdldCkgOiBhbGxUYXJnZXRzO1xuICBjb25zdCBzZWNvbmRPZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGFmdGVyRmlyc3RLaWxsLCBsYW5lQ2VudGVyLCBbMF0pO1xuICBjb25zdCBub1RhcmdldHNPZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KFtdLCBsYW5lQ2VudGVyLCBbMF0sIHNlY29uZE9mZnNldCk7XG4gIHJldHVybiB7IGZpcnN0T2Zmc2V0LCBmaXJzdFRhcmdldCwgc2Vjb25kT2Zmc2V0LCBub1RhcmdldHNPZmZzZXQgfTtcbn07XG5cbmNvbnN0IHRlc3QgPSBjcmVhdGVUZXN0UGFnZShcIm5lb24tc3dhcm0tYXV0by1haW0tc21va2VcIiwgeyBzdWl0ZTogXCJzbW9rZVwiLCBydW4gfSwgc3RhdHVzKTtcbnRlc3QucmVhZHkoKTtcbmNvbnN0IG91dGNvbWUgPSBydW4oKTtcbmNvbnN0IGFzc2VydGlvbnMgPSBbXG4gIFtcIlN5bW1ldHJpYyBvdXRzaWRlIHN1cnZpdm9ycyBwcm9kdWNlIGEgZGVjaXNpdmUgZmlyc3Qgc2hpZnRcIiwgb3V0Y29tZS5maXJzdE9mZnNldCAhPT0gMF0sXG4gIFtcIkZpcnN0IHNoaWZ0IHNlbGVjdHMgb25lIHJlbWFpbmluZyBlbmVteVwiLCBvdXRjb21lLmZpcnN0VGFyZ2V0ICE9PSBudWxsXSxcbiAgW1wiQWZ0ZXIgZmlyc3Qga2lsbCBhdXRvIGFpbSBzaGlmdHMgdG8gdGhlIG90aGVyIHN1cnZpdm9yXCIsIG91dGNvbWUuZmlyc3RUYXJnZXQgIT09IG51bGwgJiYgb3V0Y29tZS5zZWNvbmRPZmZzZXQgIT09IDAgJiYgTWF0aC5zaWduKG91dGNvbWUuc2Vjb25kT2Zmc2V0KSAhPT0gTWF0aC5zaWduKG91dGNvbWUuZmlyc3RPZmZzZXQpXSxcbiAgW1wiQ2xvc2VyIHJvdyB3aW5zIG92ZXIgYSBmYXJ0aGVyIGNlbnRlcmVkIHJvd1wiLCBvdXRjb21lLmZpcnN0T2Zmc2V0ICE9PSAwXSxcbiAgW1wiTm8gdGFyZ2V0cyByZXR1cm5zIHRvIGxhbmUgY2VudGVyXCIsIG91dGNvbWUubm9UYXJnZXRzT2Zmc2V0ID09PSAwXSxcbl0gYXMgY29uc3Q7XG5cbnJlc3VsdHMuaW5uZXJIVE1MID0gYXNzZXJ0aW9ucy5tYXAoKFtuYW1lLCBwYXNzZWRdLCBpbmRleCkgPT4gYFxuICA8bGkgZGF0YS1wYXNzZWQ9XCIke3Bhc3NlZH1cIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj5cbiAgICA8c3Ryb25nPiR7bmFtZX08L3N0cm9uZz5cbiAgICA8c3Bhbj4ke3Bhc3NlZCA/IFwiUEFTU1wiIDogXCJGQUlMXCJ9PC9zcGFuPlxuICA8L2xpPmApLmpvaW4oXCJcIik7XG5yZXN1bHRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB2b2lkIHN0YXJ0U2ltdWxhdGlvbihOdW1iZXIoaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKSkpO1xufSk7XG5mb3IgKGNvbnN0IFtuYW1lLCBwYXNzZWRdIG9mIGFzc2VydGlvbnMpIHRlc3QuYXNzZXJ0KG5hbWUsIHBhc3NlZCwgYGZpcnN0PSR7b3V0Y29tZS5maXJzdE9mZnNldH0gc2Vjb25kPSR7b3V0Y29tZS5zZWNvbmRPZmZzZXR9YCk7XG5cbmNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtY29udGFpbmVyXCIpITtcbmNvbnN0IHNpbXVsYXRvclBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW11bGF0b3ItcGFuZWxcIikhO1xuY29uc3QgY2xvc2VTaW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXNpbVwiKSE7XG5jb25zdCByZXBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcGxheS1idG5cIikhO1xuY29uc3QgcGF1c2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlLWJ0blwiKSE7XG5jb25zdCBzaW1TdGF0dXNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW0tc3RhdHVzXCIpITtcbmNvbnN0IHNpbVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW0tdGl0bGVcIikhO1xuY29uc3Qgc2ltRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLWRldGFpbHNcIikhO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IHN0YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtY29udGFpbmVyXCIpID8/IHNpbXVsYXRvclBhbmVsO1xuXG5sZXQgc2ltOiBOZW9uU3dhcm1TaW11bGF0aW9uIHwgbnVsbCA9IG51bGw7XG5sZXQgYWN0aXZlU2NlbmFyaW9JZHggPSAwO1xubGV0IGlzUGF1c2VkID0gZmFsc2U7XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVNpbXVsYXRpb24oKTogUHJvbWlzZTxOZW9uU3dhcm1TaW11bGF0aW9uPiB7XG4gIHNpbSA/Pz0gYXdhaXQgTmVvblN3YXJtU2ltdWxhdGlvbi5jcmVhdGUoeyBtb2RlOiBcImxhYlwiLCBjYW52YXMsIHN0YWdlRWxlbWVudDogc3RhZ2UgfSk7XG4gIHJldHVybiBzaW07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2ltdWxhdGlvbihpbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGFjdGl2ZVNjZW5hcmlvSWR4ID0gaW5kZXg7XG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpbXVsYXRvci1hY3RpdmVcIik7XG4gIHNpbXVsYXRvclBhbmVsLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcbiAgc2ltVGl0bGUudGV4dENvbnRlbnQgPSBhc3NlcnRpb25zW2luZGV4XVswXTtcbiAgYXdhaXQgZW5zdXJlU2ltdWxhdGlvbigpO1xuICByZXNldFNpbXVsYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTaW11bGF0aW9uKCk6IHZvaWQge1xuICBpZiAoIXNpbSkgcmV0dXJuO1xuICBzaW0uc3RvcExvb3AoKTtcbiAgc2ltLnJlc2V0KHsgc2lsZW50OiB0cnVlIH0pO1xuICBzaW0uZXF1aXBHdW4oXCJwdWxzZVBpc3RvbFwiLCAxKTtcbiAgY29uc3QgbGFuZSA9IDA7XG4gIGNvbnN0IGNlbnRlciA9IHNpbS5sYW5lWChsYW5lKTtcbiAgaWYgKGFjdGl2ZVNjZW5hcmlvSWR4ID09PSAwIHx8IGFjdGl2ZVNjZW5hcmlvSWR4ID09PSAxIHx8IGFjdGl2ZVNjZW5hcmlvSWR4ID09PSAyIHx8IGFjdGl2ZVNjZW5hcmlvSWR4ID09PSAzKSB7XG4gICAgc2ltLnNwYXduRW5lbXkoeyBlbmVteUlkOiBcImJhc2ljT3JiXCIsIGxhbmUsIHg6IGNlbnRlciAtIDMwLCB5OiAzMjAsIGhlYWx0aDogMSwgcGxheVNvdW5kOiBmYWxzZSB9KTtcbiAgICBzaW0uc3Bhd25FbmVteSh7IGVuZW15SWQ6IFwiYmFzaWNPcmJcIiwgbGFuZSwgeDogY2VudGVyICsgMzAsIHk6IDMyMCwgaGVhbHRoOiAxLCBwbGF5U291bmQ6IGZhbHNlIH0pO1xuICB9XG4gIGlmIChhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMykgc2ltLnNwYXduRW5lbXkoeyBlbmVteUlkOiBcImJhc2ljT3JiXCIsIGxhbmUsIHg6IGNlbnRlciwgeTogMjAwLCBoZWFsdGg6IDEsIHBsYXlTb3VuZDogZmFsc2UgfSk7XG4gIGlzUGF1c2VkID0gZmFsc2U7XG4gIHBhdXNlQnRuLnRleHRDb250ZW50ID0gXCJQYXVzZVwiO1xuICBzaW1TdGF0dXNUZXh0LnRleHRDb250ZW50ID0gXCJQQVNTRURcIjtcbiAgc2ltU3RhdHVzVGV4dC5jbGFzc05hbWUgPSBcInNpbS1zdGF0dXNcIjtcbiAgdXBkYXRlRGV0YWlscygpO1xuICBzaW0uc3RhcnRMb29wKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURldGFpbHMoKTogdm9pZCB7XG4gIGlmICghc2ltKSByZXR1cm47XG4gIGNvbnN0IHNuYXBzaG90ID0gc2ltLnNuYXBzaG90KCk7XG4gIHNpbURldGFpbHMuaW5uZXJIVE1MID0gYFxuICAgIDxkdD5TY2VuYXJpbzwvZHQ+PGRkPiR7YXNzZXJ0aW9uc1thY3RpdmVTY2VuYXJpb0lkeF1bMF19PC9kZD5cbiAgICA8ZHQ+U3F1YWQgUG9zaXRpb248L2R0PjxkZD54OiAke3NuYXBzaG90LnNxdWFkLngudG9GaXhlZCgwKX0sIGFpbTogJHtzbmFwc2hvdC5zcXVhZC5haW1PZmZzZXQudG9GaXhlZCgwKX08L2RkPlxuICAgIDxkdD5FbmVtaWVzPC9kdD48ZGQ+JHtzbmFwc2hvdC5lbmVtaWVzLmxlbmd0aH08L2RkPlxuICAgIDxkdD5UaW1lIEVsYXBzZWQ8L2R0PjxkZD4ke3NuYXBzaG90LmNvbWJhdE5vdy50b0ZpeGVkKDApfSBtczwvZGQ+XG4gICAgPGR0PlN0YXR1czwvZHQ+PGRkPlNoYXJlZCBydW50aW1lIHJlcGxheTwvZGQ+XG4gIGA7XG59XG5cbndpbmRvdy5zZXRJbnRlcnZhbCh1cGRhdGVEZXRhaWxzLCAxNTApO1xuY2xvc2VTaW1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2ltPy5zdG9wTG9vcCgpO1xuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaW11bGF0b3ItYWN0aXZlXCIpO1xuICBzaW11bGF0b3JQYW5lbC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJ0cnVlXCIpO1xufSk7XG5yZXBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0U2ltdWxhdGlvbik7XG5wYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpc1BhdXNlZCA9ICFpc1BhdXNlZDtcbiAgcGF1c2VCdG4udGV4dENvbnRlbnQgPSBpc1BhdXNlZCA/IFwiUmVzdW1lXCIgOiBcIlBhdXNlXCI7XG4gIGlmIChpc1BhdXNlZCkgc2ltPy5zdG9wTG9vcCgpO1xuICBlbHNlIHNpbT8uc3RhcnRMb29wKCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLE1BQ3BFLE1BQU0sS0FBSyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3RDLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7QUFDM0MsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEQsQ0FBQztBQUVILElBQU0sT0FBTyxDQUFDLFFBQWdCLFFBQVEsTUFBSyxXQUFXLENBQUMsS0FBSyxLQUFLLE1BQy9ELE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDM0MsUUFBTSxTQUFTLElBQUksSUFBSSxRQUFRO0FBQy9CLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLO0FBQ3ZDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNO0FBQzVELENBQUM7QUFFSCxJQUFNLFVBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RCxJQUFNLFFBQXFCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQUssSUFBRyxHQUFHLENBQUMsTUFBSyxJQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUcsR0FBRyxDQUFDLE9BQU0sSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLENBQUM7QUFDL0YsSUFBTSxVQUF1QixDQUFDLENBQUMsSUFBSSxLQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUksR0FBRyxDQUFDLEdBQUcsS0FBSSxHQUFHLENBQUMsTUFBSyxJQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUcsR0FBRyxDQUFDLE9BQU0sSUFBRyxDQUFDO0FBQ2pHLElBQU0sU0FBc0IsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQ2xELElBQU0sU0FBMEM7QUFBQSxFQUM5QyxRQUFRLFlBQVk7QUFBQSxFQUFNLFFBQVEsWUFBWTtBQUFBLEVBQUssU0FBUyxZQUFZO0FBQUEsRUFDeEUsTUFBTSxZQUFZO0FBQUEsRUFBTSxXQUFXO0FBQUEsRUFBVyxPQUFPO0FBQ3ZEO0FBRUEsSUFBTSxPQUFPLENBQ1gsUUFBeUIsSUFBWSxNQUFjLFFBQ25ELE1BQXFCLFdBQ2EsRUFBRSxJQUFJLE1BQU0sUUFBUSxRQUFRLE9BQU8sTUFBTSxPQUFPLE9BQU8sTUFBTSxHQUFHLE9BQU8sV0FBVyxTQUFTLE9BQU0sS0FBSTtBQUVsSSxJQUFNLG1CQUE0RDtBQUFBLEVBQ3ZFLEtBQUssVUFBVSxpQkFBaUIsaUJBQWlCLE9BQU8sU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQUssSUFBSSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDckgsS0FBSyxVQUFVLGVBQWUsZUFBZSxDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxLQUFHLElBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3BJLEtBQUssVUFBVSxhQUFhLGFBQWEsS0FBSyxHQUFHLElBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBTSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUM3RyxLQUFLLFVBQVUsZUFBZSxlQUFlLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLEtBQUcsR0FBRyxNQUFLLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDbEcsS0FBSyxVQUFVLGNBQWMsY0FBYyxDQUFDLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEdBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxHQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxPQUFLLElBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ2xMLEtBQUssVUFBVSxhQUFhLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBRyxHQUFHLE1BQUssSUFBRyxDQUFDLENBQUM7QUFBQSxFQUM5RixLQUFLLFVBQVUsZUFBZSxlQUFlLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxHQUFFLENBQUMsR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsT0FBSyxJQUFHLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDOUcsS0FBSyxVQUFVLG9CQUFvQixvQkFBb0IsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFHLENBQUMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFNLEtBQUksR0FBRyxDQUFDLE9BQUssS0FBSSxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxRQUFNLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNuTyxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLEtBQUcsS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMzUCxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLE1BQUksR0FBRSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxHQUFFLEdBQUcsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUMzTCxLQUFLLFVBQVUsdUJBQXVCLHVCQUF1QixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFNLEtBQUksR0FBRyxDQUFDLE9BQUssS0FBSSxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxRQUFNLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUM5UCxLQUFLLFVBQVUsMEJBQTBCLDBCQUEwQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLEtBQUcsSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxH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LEdBQUUsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUNySCxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxN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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUwxQixTQUFTLEtBQUtDLE1BQStDO0FBQzNELFFBQU0sUUFBUUEsS0FBSSxRQUFRLEtB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QUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsa0JBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsbUJBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsbUJBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsbUJBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQ1IsQ0FBQzs7O0FDTk0sSUFBTUMsbUJBQWlCLGFBQWE7QUFBQSxFQUN6QyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxNQUFN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TUFBSyxTQUFTO0FBQUEsTUFDdkIsTUFBSyxVQUFVO0FBQ3RCLENBQUM7IiwKICAibmFtZXMiOiBbImMiLCAiY2FudmFzIiwgIndpZHRoIiwgImhlaWdodCIsICJzaGFkZXIiLCAiaGV4IiwgImNhbnZhcyIsICJoZXgiLCAic2hhZGVyIiwgImNhbnZhcyIsICJzaGFkZXIiLCAiYyIsICJoZXgiLCAiY2FudmFzIiwgImNvbG9ycyIsICJjIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImxldmVsIiwgInJlc3VsdHMiLCAibGV2ZWwiLCAicm90YXRpb24iLCAiZW5lbXlJZEZyb21UcmFja0lkIiwgInRhcmdldFNwYW4iLCAidCIsICJlYXNlIiwgInBvaW50IiwgImxldmVsIl0KfQo=

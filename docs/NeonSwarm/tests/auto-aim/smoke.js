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
  2: 1.08,
  3: 1.16
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
    const target = Math.max(1, Math.floor(count));
    while (this.cooldownLefts.length < target) this.cooldownLefts.push(0);
    while (this.activeSlashes.length < target) this.activeSlashes.push(null);
    while (this.previousSlashSides.length < target) this.previousSlashSides.push(1);
    this.cooldownLefts.length = target;
    this.activeSlashes.length = target;
    this.previousSlashSides.length = target;
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
  for (let slot = 0; slot < state.cooldownLefts.length; slot++) {
    if (state.cooldownLefts[slot] > 0) state.cooldownLefts[slot] = Math.max(0, state.cooldownLefts[slot] - delta);
    const slash = state.activeSlashes[slot];
    if (slash) {
      slash.progress = (now - slash.startedAt) / slash.durationMs;
      if (slash.progress >= 1) state.activeSlashes[slot] = null;
    }
  }
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
    const selectedIds = new Set(selected.map(({ target }) => target.id));
    remaining = remaining.filter(({ target }) => !selectedIds.has(target.id));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Byb2plY3RpbGUudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rlc3QtaGFybmVzcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvdmljdG9yeS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2F1dG9BaW0udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tCdWlsZGVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s2LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrOC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2szLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE1LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEwLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazExLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9ndW5TaW11bGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L25lYXJieVRocmVhdFF1ZXJ5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvY29tYmF0L3NoaWVsZEV2YWx1YXRvci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9zd29yZEV2YWx1YXRvci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2VuZW15RW50cmFuY2VWaXN1YWxzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFeGl0VmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3ZpZXdwb3J0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlDYXRhbG9nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZmFtaWx5VmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3JlbmRlck9yaWVudGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2NlbmVFbnZpcm9ubWVudC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NoYXBlVmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NxdWFkLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvc2ltdWxhdGlvbi9OZW9uU3dhcm1TaW11bGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS90ZXN0LXBhZ2VzL2F1dG8tYWltL3Ntb2tlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgbmVvblBhbGV0dGUgPSB7XG4gIGN5YW46IFwiIzU1ZTdmZlwiLFxuICBwaW5rOiBcIiNmZjRmOWFcIixcbiAgZ3JlZW46IFwiIzdmZmZjMlwiLFxuICBnb2xkOiBcIiNmZmQ0NWNcIixcbiAgdmlvbGV0OiBcIiNhOTg3ZmZcIixcbiAgb3JhbmdlOiBcIiNmZjhhNDVcIixcbiAgcmVkOiBcIiNmZjU1NzdcIixcbiAgZGVlcEJsdWU6IFwiIzI4N2RmZlwiLFxuICB3aGl0ZUhvdDogXCIjZjRmYmZmXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBOZW9uQ29sb3JOYW1lID0ga2V5b2YgdHlwZW9mIG5lb25QYWxldHRlO1xuXG5leHBvcnQgY29uc3QgZ2xvd1ByZXNldHMgPSB7XG4gIHNvZnQ6IDAuMzgsXG4gIHN0YW5kYXJkOiAwLjY1LFxuICBpbnRlbnNlOiAxLFxufSBhcyBjb25zdDtcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVGYW1pbHkgPSBcInBsYXllclwiIHwgXCJodW50ZXJcIiB8IFwiYnJ1aXNlclwiIHwgXCJ0YW5rXCIgfCBcInRyaWNrc3RlclwiIHwgXCJlbGl0ZVwiO1xuZXhwb3J0IHR5cGUgTmVvblJvY2tTdHlsZSA9IFwicGl0Y2hcIiB8IFwicm9sbFwiIHwgXCJ5YXdcIiB8IFwicHVsc2VcIiB8IFwib3JiaXRcIjtcbmV4cG9ydCB0eXBlIE5lb25Qb2ludCA9IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHk7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W107XG4gIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdO1xuICByb2NrOiBOZW9uUm9ja1N0eWxlO1xuICBkZXB0aD86IG51bWJlcjtcbn1cblxuY29uc3QgcmVndWxhciA9IChzaWRlczogbnVtYmVyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMiwgc3ggPSAxLCBzeSA9IDEpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaWRlcyB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAqIDIgLyBzaWRlcztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHN4LCBNYXRoLnNpbihhbmdsZSkgKiBzeV0gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBzdGFyID0gKHBvaW50czogbnVtYmVyLCBpbm5lciA9IC40Miwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIpOiBOZW9uUG9pbnRbXSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwb2ludHMgKiAyIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgcmFkaXVzID0gaSAlIDIgPyBpbm5lciA6IDE7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJIC8gcG9pbnRzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3QgZGlhbW9uZDogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV0sIFstMSwgMF1dO1xuY29uc3QgYXJyb3c6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsuODIsIC42OF0sIFsuMjcsIC40NV0sIFswLCAuOTJdLCBbLS4yNywgLjQ1XSwgWy0uODIsIC42OF1dO1xuY29uc3QgY2hldnJvbjogTmVvblBvaW50W10gPSBbWy0xLCAtLjYyXSwgWzAsIC0uMDVdLCBbMSwgLS42Ml0sIFsuMjgsIC44Ml0sIFswLCAuMzRdLCBbLS4yOCwgLjgyXV07XG5jb25zdCBzcXVhcmU6IE5lb25Qb2ludFtdID0gcmVndWxhcig0LCBNYXRoLlBJIC8gNCk7XG5jb25zdCBjb2xvcnM6IFJlY29yZDxOZW9uU2hhcGVGYW1pbHksIHN0cmluZz4gPSB7XG4gIHBsYXllcjogbmVvblBhbGV0dGUuY3lhbiwgaHVudGVyOiBuZW9uUGFsZXR0ZS5yZWQsIGJydWlzZXI6IG5lb25QYWxldHRlLnZpb2xldCxcbiAgdGFuazogbmVvblBhbGV0dGUuZ29sZCwgdHJpY2tzdGVyOiBcIiM5Y2ZmNTJcIiwgZWxpdGU6IFwiIzcwZGZmZlwiLFxufTtcblxuY29uc3QgbWFrZSA9IChcbiAgZmFtaWx5OiBOZW9uU2hhcGVGYW1pbHksIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXSxcbiAgcm9jazogTmVvblJvY2tTdHlsZSwgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW10sXG4pOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uID0+ICh7IGlkLCBuYW1lLCBmYW1pbHksIHBvaW50cywgaG9sZXMsIHJvY2ssIGNvbG9yOiBjb2xvcnNbZmFtaWx5XSwgZGVwdGg6IGZhbWlseSA9PT0gXCJ0YW5rXCIgPyAuMjIgOiAuMTQgfSk7XG5cbmV4cG9ydCBjb25zdCBuZW9uU2hhcGVDYXRhbG9nOiByZWFkb25seSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uW10gPSBbXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJhcnJvdy1jbGFzc2ljXCIsIFwiQXJyb3cgQ2xhc3NpY1wiLCBhcnJvdywgXCJwaXRjaFwiLCBbYXJyb3cubWFwKChbeCwgeV0pID0+IFt4ICogLjQyLCB5ICogLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImRlbHRhLXNsZWVrXCIsIFwiRGVsdGEgU2xlZWtcIiwgW1swLC0xXSxbLjksLjgyXSxbMCwuNDhdLFstLjksLjgyXV0sIFwicGl0Y2hcIiwgW1tbMCwtLjQ1XSxbLjM1LC40NV0sWzAsLjI4XSxbLS4zNSwuNDVdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Rhci1jb3JlXCIsIFwiU3RhciBDb3JlXCIsIHN0YXIoNCwgLjMyKSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiaGV4LWZpZ2h0ZXJcIiwgXCJIZXggRmlnaHRlclwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LCAtTWF0aC5QSS8yLCAuNDgsIC40OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcIndpbmctc3BsaXRcIiwgXCJXaW5nIFNwbGl0XCIsIFtbLTEsLS44NV0sWy0uMjUsLjFdLFswLC0uMjVdLFsuMjUsLjFdLFsxLC0uODVdLFsuNjYsLjcyXSxbMCwuMzVdLFstLjY2LC43Ml1dLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjE4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInRyaWFkLXBvZFwiLCBcIlRyaWFkIFBvZFwiLCByZWd1bGFyKDMpLCBcInlhd1wiLCBbcmVndWxhcigzLCAtTWF0aC5QSS8yLCAuMzgsIC4zOCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNwaWtlLWxhbmNlXCIsIFwiU3Bpa2UgTGFuY2VcIiwgW1swLC0xXSxbLjQ4LC42NV0sWy4xOCwuNDJdLFswLDFdLFstLjE4LC40Ml0sWy0uNDgsLjY1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1hcmMta2F0YW5hXCIsIFwiU3dvcmQgQXJjIEthdGFuYVwiLCBbWy0uMTYsLTFdLCBbLjE2LC0xXSwgWy4yMiwuMjhdLCBbLjQ4LC42Ml0sIFsuMTgsLjUyXSwgWy4xLDFdLCBbLS4xLDFdLCBbLS4xOCwuNTJdLCBbLS40OCwuNjJdLCBbLS4yMiwuMjhdXSwgXCJwaXRjaFwiLCBbW1stLjA1NSwtLjcyXSwgWy4wNTUsLS43Ml0sIFsuMDU1LC4xOF0sIFstLjA1NSwuMThdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtY2xlYXZlci13aWRlXCIsIFwiU3dvcmQgQ2xlYXZlciBXaWRlXCIsIFtbLS4yOCwtMV0sIFsuMjgsLTFdLCBbLjQ0LC0uNzZdLCBbLjM0LC4zNF0sIFsuNzIsLjU4XSwgWy4yMiwuNTVdLCBbLjE2LDFdLCBbLS4xNiwxXSwgWy0uMjIsLjU1XSwgWy0uNzIsLjU4XSwgWy0uMzQsLjM0XSwgWy0uNDQsLS43Nl1dLCBcInJvbGxcIiwgW1tbLS4xLC0uNjhdLCBbLjEsLS42OF0sIFsuMDgsLjE4XSwgWy0uMDgsLjE4XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLW5lZWRsZS1zYWJyZVwiLCBcIlN3b3JkIE5lZWRsZSBTYWJyZVwiLCBbWzAsLTFdLCBbLjA4LC0uODJdLCBbLjExLC41XSwgWy4zMiwuNzJdLCBbLjA4LC42NF0sIFsuMDUsMV0sIFstLjA1LDFdLCBbLS4wOCwuNjRdLCBbLS4zMiwuNzJdLCBbLS4xMSwuNV0sIFstLjA4LC0uODJdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWd1YXJkZWQtYmxhZGVcIiwgXCJTd29yZCBHdWFyZGVkIEJsYWRlXCIsIFtbLS4xMiwtMV0sIFsuMTIsLTFdLCBbLjE2LC4zNl0sIFsuNjIsLjM2XSwgWy42MiwuNTRdLCBbLjE0LC41Nl0sIFsuMSwxXSwgWy0uMSwxXSwgWy0uMTQsLjU2XSwgWy0uNjIsLjU0XSwgWy0uNjIsLjM2XSwgWy0uMTYsLjM2XV0sIFwieWF3XCIsIFtbWy0uMDQ1LC0uNzJdLCBbLjA0NSwtLjcyXSwgWy4wNDUsLjIyXSwgWy0uMDQ1LC4yMl1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1wcmlzbS1ncmVhdGJsYWRlXCIsIFwiU3dvcmQgUHJpc20gR3JlYXRibGFkZVwiLCBbWzAsLTFdLCBbLjM0LC0uNzRdLCBbLjMsLjI4XSwgWy41NiwuNTJdLCBbLjIsLjQ4XSwgWy4xMiwxXSwgWy0uMTIsMV0sIFstLjIsLjQ4XSwgWy0uNTYsLjUyXSwgWy0uMywuMjhdLCBbLS4zNCwtLjc0XV0sIFwicm9sbFwiLCBbW1stLjA4LC0uNDhdLCBbLjA4LC0uNDhdLCBbLjA4LC4xNl0sIFstLjA4LC4xNl1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJvcmJpdC1kcm9uZVwiLCBcIk9yYml0IERyb25lXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLCAwLCAuNTgsIC41OCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcInNoaWVsZC1yaW5nXCIsIFwiU2hpZWxkIFJpbmdcIiwgcmVndWxhcigzMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMzIsIDAsIC45MSwgLjkxKV0pLFxuXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZGFydFwiLCBcIkRhcnRcIiwgW1stMSwtLjddLFsxLDBdLFstMSwuN10sWy0uNDUsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWtpdGVcIiwgXCJLaXRlXCIsIFtbLTEsLS43NV0sWzEsMF0sWy0xLC43NV0sWy0uNTUsMF1dLCBcInJvbGxcIiwgW3JlZ3VsYXIoMywwLC4zNSwuMzUpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItbmVlZGxlXCIsIFwiTmVlZGxlXCIsIFtbLTEsLS40Ml0sWzEsMF0sWy0xLC40Ml0sWy0uNTUsMF1dLCBcInlhd1wiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci10YWxvblwiLCBcIlRhbG9uXCIsIHN0YXIoMywuMjgpLCBcInJvbGxcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItc2hhcmRcIiwgXCJTaGFyZFwiLCBkaWFtb25kLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXZlZVwiLCBcIlZlZVwiLCBjaGV2cm9uLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWV5ZVwiLCBcIldhdGNoZXJcIiwgcmVndWxhcigzLCBNYXRoLlBJLzIpLCBcInlhd1wiLCBbcmVndWxhcigzLE1hdGguUEkvMiwuNDIsLjQyKV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJ1cnN0XCIsIFwiQnVyc3RcIiwgc3Rhcig4LC4zNSksIFwicHVsc2VcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYm9sdFwiLCBcIkJvbHRcIiwgW1stLjcsLTFdLFsuMTUsLS4zNV0sWy0uMjUsLS4yXSxbLjcsMV0sWy0uMSwuMzJdLFsuMywuMTVdXSwgXCJyb2xsXCIpLFxuXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1mcmFtZVwiLCBcIkZyYW1lXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40OCx5Ki40OF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZW1cIiwgXCJHZW1cIiwgZGlhbW9uZCwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWhleFwiLCBcIkhleCBDb3JlXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvd25cIiwgXCJDcm93blwiLCBbWy0xLC0uNzVdLFstLjUsLS41NV0sWzAsLS44NV0sWy41LC0uNTVdLFsxLC0uNzVdLFsuOCwuOF0sWy0uOCwuOF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm9zc1wiLCBcIkNyb3NzXCIsIFtbLS4zNSwtMV0sWy4zNSwtMV0sWy4zNSwtLjM1XSxbMSwtLjM1XSxbMSwuMzVdLFsuMzUsLjM1XSxbLjM1LDFdLFstLjM1LDFdLFstLjM1LC4zNV0sWy0xLC4zNV0sWy0xLC0uMzVdLFstLjM1LC0uMzVdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1wcmlzbVwiLCBcIlByaXNtXCIsIGRpYW1vbmQsIFwicHVsc2VcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VhclwiLCBcIkdlYXJcIiwgc3Rhcig4LC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuMjgsLjI4KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXIteFwiLCBcIlggQ29yZVwiLCBbWy0xLC0uNjVdLFstLjY1LC0xXSxbMCwtLjM1XSxbLjY1LC0xXSxbMSwtLjY1XSxbLjM1LDBdLFsxLC42NV0sWy42NSwxXSxbMCwuMzVdLFstLjY1LDFdLFstMSwuNjVdLFstLjM1LDBdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItc2xhYlwiLCBcIlNsYWJcIiwgW1stLjY1LC0xXSxbMSwtMV0sWy42NSwxXSxbLTEsMV1dLCBcInBpdGNoXCIpLFxuXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1oZXhcIiwgXCJIZWF2eSBIZXhcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4zOCwuMzgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1iYXJcIiwgXCJBcm1vciBCYXJcIiwgW1stLjc1LC0xXSxbLjc1LC0xXSxbMSwtLjQ1XSxbLjc1LDFdLFstLjc1LDFdLFstMSwuNDVdXSwgXCJwaXRjaFwiLCBbW1stLjQ4LC0uMThdLFsuNDgsLS4xOF0sWy40OCwuMThdLFstLjQ4LC4xOF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1ibG9ja1wiLCBcIkJsb2NrXCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40Mix5Ki40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1vY3RcIiwgXCJPY3RhZ29uXCIsIHJlZ3VsYXIoOCksIFwieWF3XCIsIFtyZWd1bGFyKDgsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstZm9ydFwiLCBcIkZvcnRyZXNzXCIsIHJlZ3VsYXIoNiksIFwicGl0Y2hcIiwgW3JlZ3VsYXIoNiwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1yZWFjdG9yXCIsIFwiUmVhY3RvclwiLCByZWd1bGFyKDEwKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC41NCwuNTQpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1jaXRhZGVsXCIsIFwiQ2l0YWRlbFwiLCBbWy0uNjUsLTFdLFsuNjUsLTFdLFsuNjUsLS43Ml0sWzEsLS43Ml0sWzEsLjcyXSxbLjY1LC43Ml0sWy42NSwxXSxbLS42NSwxXSxbLS42NSwuNzJdLFstMSwuNzJdLFstMSwtLjcyXSxbLS42NSwtLjcyXV0sIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYnVua2VyXCIsIFwiQnVua2VyXCIsIFtbLS43MiwtMV0sWy43MiwtMV0sWzEsLS41OF0sWzEsLjU4XSxbLjcyLDFdLFstLjcyLDFdLFstMSwuNThdLFstMSwtLjU4XV0sIFwicGl0Y2hcIiwgW1tbLS41LC0uMTRdLFsuNSwtLjE0XSxbLjUsLjE0XSxbLS41LC4xNF1dXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1zdW5cIiwgXCJTdW4gVGFua1wiLCByZWd1bGFyKDEyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuMjgsLjI4KV0pLFxuXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1kaWFtb25kXCIsIFwiUGhhc2UgRGlhbW9uZFwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yLHkqLjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY2hldnJvblwiLCBcIlNsaXBzdHJlYW1cIiwgW1stMSwtLjhdLFstLjIsMF0sWy0xLC44XSxbLS4zNSwuOF0sWy40NSwwXSxbLS4zNSwtLjhdLFsuMjUsLS44XSxbMSwwXSxbLjI1LC44XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1zcXVhcmVcIiwgXCJUaWx0IEJveFwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouMzQseSouMzRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stY29tcGFzc1wiLCBcIkNvbXBhc3NcIiwgZGlhbW9uZCwgXCJ5YXdcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1leWVcIiwgXCJQaGFzZSBFeWVcIiwgcmVndWxhcigzKSwgXCJwdWxzZVwiLCBbcmVndWxhcig4LDAsLjE4LC4xOCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWhvdXJnbGFzc1wiLCBcIkhvdXJnbGFzc1wiLCBbWy0xLC0xXSxbMSwtMV0sWy4yOCwwXSxbMSwxXSxbLTEsMV0sWy0uMjgsMF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stbGlua1wiLCBcIkxpbmtcIiwgcmVndWxhcigxMiwwLDEsLjU1KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNjIsLjIyKV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stdm9ydGV4XCIsIFwiVm9ydGV4XCIsIHN0YXIoNywuNTYpLCBcInJvbGxcIiwgW3JlZ3VsYXIoNywwLC4yNSwuMjUpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1nYXRlXCIsIFwiR2hvc3QgR2F0ZVwiLCBzcXVhcmUsIFwicHVsc2VcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjc4LHkqLjc4XSBhcyBjb25zdCldKSxcblxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zdGFyXCIsIFwiTm92YSBTdGFyXCIsIHN0YXIoOCwuNTUpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4zLC4zKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zYXdcIiwgXCJIYWxvIFNhd1wiLCBzdGFyKDEyLC43MiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjQyLC40MildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY3Jvd25cIiwgXCJWb2lkIENyb3duXCIsIHN0YXIoNywuNDgpLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjIseSouMjJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1wcmlzbVwiLCBcIlJveWFsIFByaXNtXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjUseSouNV0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLW9yYml0XCIsIFwiT3JiaXQgRXllXCIsIHJlZ3VsYXIoMTIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDEyLDAsLjYsLjYpLCByZWd1bGFyKDEyLDAsLjIsLjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNpcmN1aXRcIiwgXCJDaXJjdWl0IExvcmRcIiwgc3Rhcig4LC43NSksIFwieWF3XCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki40LHkqLjRdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1zZW50aW5lbFwiLCBcIlNlbnRpbmVsXCIsIHN0YXIoMTAsLjYyKSwgXCJwdWxzZVwiLCBbcmVndWxhcigxMCwwLC4yMiwuMjIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXdpbmdzXCIsIFwiTmlnaHQgV2luZ3NcIiwgW1stMSwtLjhdLFstLjcsLjM1XSxbLS4yNSwuMDVdLFswLC44NV0sWy4yNSwuMDVdLFsuNywuMzVdLFsxLC0uOF0sWy4zNSwtLjM1XSxbMCwtLjA1XSxbLS4zNSwtLjM1XV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWVtcGVyb3JcIiwgXCJFbXBlcm9yXCIsIHN0YXIoOCwuNDgpLCBcInJvbGxcIiwgW3JlZ3VsYXIoOCwwLC4yNCwuMjQpXSksXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0TmVvblNoYXBlID0gKGlkOiBzdHJpbmcpOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkID0+XG4gIG5lb25TaGFwZUNhdGFsb2cuZmluZChzaGFwZSA9PiBzaGFwZS5pZCA9PT0gaWQpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiwgTmVvblBvaW50IH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuXG5leHBvcnQgdHlwZSBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uID0gXCJhYm92ZVwiIHwgXCJiZWxvd1wiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVMYWJlbCB7XG4gIHRleHQ6IHN0cmluZztcbiAgcG9zaXRpb24/OiBOZW9uU2hhcGVMYWJlbFBvc2l0aW9uO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogbnVtYmVyO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUluc3RhbmNlIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIGNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgc2NhbGVYPzogbnVtYmVyO1xuICBzY2FsZVk/OiBudW1iZXI7XG4gIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgcm90YXRpb25ZPzogbnVtYmVyO1xuICByb3RhdGlvblo/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG4gIHNoaWVsZGVkPzogYm9vbGVhbjtcbiAgbGluZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgZW5lcmd5SW50ZW5zaXR5PzogbnVtYmVyO1xuICBlbmVyZ3lDb3ZlcmFnZT86IG51bWJlcjtcbiAgZW5lcmd5U3BlZWQ/OiBudW1iZXI7XG4gIGVuZXJneUJsZWVkPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBlbnRyYW5jZVByb2dyZXNzPzogbnVtYmVyO1xuICBlbnRyYW5jZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZXhwbG9kZVByb2dyZXNzPzogbnVtYmVyO1xuICBleHBsb2RlTWFnbml0dWRlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xufVxuXG50eXBlIFYzID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xudHlwZSBWZXJ0ZXggPSB7XG4gIHA6IFYzOyBuOiBWMzsgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTsgZ2xvdzogbnVtYmVyO1xuICBlZmZlY3Q6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IGZsb2F0c1BlclZlcnRleCA9IDE0O1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IFNjZW5lIHsgYXNwZWN0OiBmMzIsIGNhbWVyYTogZjMyLCB0aW1lOiBmMzIsIHBhZGRpbmc6IGYzMiB9XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lOiBTY2VuZTtcbnN0cnVjdCBJbnB1dCB7XG4gIEBsb2NhdGlvbigwKSBwb3NpdGlvbjogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBub3JtYWw6IHZlYzNmLFxuICBAbG9jYXRpb24oMikgY29sb3I6IHZlYzNmLFxuICBAbG9jYXRpb24oMykgZ2xvdzogZjMyLFxuICBAbG9jYXRpb24oNCkgZWZmZWN0OiB2ZWM0Zixcbn1cbnN0cnVjdCBPdXRwdXQge1xuICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLFxuICBAbG9jYXRpb24oMCkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGVmZmVjdDogdmVjNGYsXG59XG5AdmVydGV4IGZuIHZlcnRleE1haW4oaW5wdXQ6IElucHV0KSAtPiBPdXRwdXQge1xuICBsZXQgZGVwdGggPSBzY2VuZS5jYW1lcmEgLSBpbnB1dC5wb3NpdGlvbi56O1xuICB2YXIgb3V0cHV0OiBPdXRwdXQ7XG4gIG91dHB1dC5wb3NpdGlvbiA9IHZlYzRmKGlucHV0LnBvc2l0aW9uLnggKiA0IC8gc2NlbmUuYXNwZWN0LCBpbnB1dC5wb3NpdGlvbi55ICogNCwgZGVwdGggKiAuMDQ1LCBkZXB0aCk7XG4gIG91dHB1dC5ub3JtYWwgPSBpbnB1dC5ub3JtYWw7XG4gIG91dHB1dC5jb2xvciA9IGlucHV0LmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGlucHV0Lmdsb3c7XG4gIG91dHB1dC5lZmZlY3QgPSBpbnB1dC5lZmZlY3Q7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGxldCBub3JtYWwgPSBub3JtYWxpemUoaW5wdXQubm9ybWFsKTtcbiAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0uNDUsIC0uNywgMSkpO1xuICBsZXQgZGlmZnVzZSA9IC4xOCArIG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApICogLjgyO1xuICBsZXQgcmltID0gcG93KDEgLSBhYnMobm9ybWFsLnopLCAyLjIpO1xuICBsZXQgc2lkZSA9IDEgLSBhYnMobm9ybWFsLnopO1xuICBsZXQgcmFyZVN1cmdlID0gcG93KG1heCguMCwgc2luKHNjZW5lLnRpbWUgKiBpbnB1dC5lZmZlY3QueiAqIC44MiArIGlucHV0LmNvbG9yLnIgKiA3LjApKSwgMjIuMClcbiAgICAqIGlucHV0LmVmZmVjdC54ICogaW5wdXQuZWZmZWN0LnkgKiBpbnB1dC5lZmZlY3QudztcbiAgbGV0IGVuZXJneSA9IGlucHV0LmNvbG9yICogKGRpZmZ1c2UgKiAuMTIgKyByaW0gKiBpbnB1dC5nbG93ICogLjM2ICsgc2lkZSAqIC4wOCArIHJhcmVTdXJnZSAqIC43KTtcbiAgcmV0dXJuIHZlYzRmKGVuZXJneSArIHZlYzNmKHJhcmVTdXJnZSAqIC4xOCksIC4xMiArIHNpZGUgKiAuMTIgKyByYXJlU3VyZ2UgKiAuMjgpO1xufVxuQGZyYWdtZW50IGZuIGxpbmVGcmFnbWVudChpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYWxvbmcgPSBpbnB1dC5ub3JtYWwueDtcbiAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5ub3JtYWwueSk7XG4gIGxldCBwaGFzZSA9IGlucHV0Lm5vcm1hbC56O1xuICBsZXQgaW50ZW5zaXR5ID0gaW5wdXQuZWZmZWN0Lng7XG4gIGxldCBjb3ZlcmFnZSA9IGlucHV0LmVmZmVjdC55O1xuICBsZXQgc3BlZWQgPSBpbnB1dC5lZmZlY3QuejtcbiAgbGV0IGJsZWVkID0gaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBwdWxzZUEgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAzMS4wIC0gc2NlbmUudGltZSAqIHNwZWVkICogNS40ICsgcGhhc2UpKSwgMTAuMCk7XG4gIGxldCBwdWxzZUIgPSBwb3cobWF4KC4wLCBzaW4oYWxvbmcgKiAxMy4wICsgc2NlbmUudGltZSAqIHNwZWVkICogMy4xICsgcGhhc2UgKiAyLjcpKSwgMTguMCk7XG4gIGxldCBub2lzZSA9IHNpbihhbG9uZyAqIDcxLjAgKyBwaGFzZSAqIDguMykgKiAuNSArIC41O1xuICBsZXQgdGhyZXNob2xkID0gMS4wIC0gY292ZXJhZ2U7XG4gIGxldCBlbGVjdHJpY2l0eSA9IHNtb290aHN0ZXAodGhyZXNob2xkLCB0aHJlc2hvbGQgKyAuMTgsIHB1bHNlQSAqIC42NSArIHB1bHNlQiAqIC41NSArIG5vaXNlICogLjE4KTtcbiAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKC4wNiwgLjI4LCBhY3Jvc3MpO1xuICBsZXQgaGFsbyA9IDEuMCAtIHNtb290aHN0ZXAoLjEyLCAxLjAsIGFjcm9zcyk7XG4gIGxldCBzdXJnZSA9IGVsZWN0cmljaXR5ICogaW50ZW5zaXR5O1xuICBsZXQgcHVsc2UgPSAuNzggKyBzaW4oc2NlbmUudGltZSAqIHNwZWVkICogMi4xICsgcGhhc2UpICogLjEzICsgZWxlY3RyaWNpdHkgKiAuMjQ7XG4gIGxldCBjbG91ZCA9IGhhbG8gKiAoLjEzICsgc3VyZ2UgKiAuNTIpO1xuICBsZXQgaG90ID0gaW5wdXQuY29sb3IgKiAocHVsc2UgKyBjbG91ZCAqIDIuMSkgKiBpbnB1dC5nbG93ICsgdmVjM2YoY29yZSAqIHN1cmdlICogMS4zNSk7XG4gIGxldCBhbHBoYSA9IChjb3JlICogKC43MiArIHB1bHNlICogLjIpICsgY2xvdWQgKyAoMS4wIC0gYWNyb3NzKSAqIGJsZWVkICogZWxlY3RyaWNpdHkgKiAuMjQpICogaW5wdXQuZ2xvdztcbiAgcmV0dXJuIHZlYzRmKGhvdCwgY2xhbXAoYWxwaGEsIDAuMCwgMS4wKSk7XG59YDtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuY29uc3Qgc3ViID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcbmNvbnN0IGNyb3NzID0gKGE6IFYzLCBiOiBWMyk6IFYzID0+IFthWzFdKmJbMl0tYVsyXSpiWzFdLCBhWzJdKmJbMF0tYVswXSpiWzJdLCBhWzBdKmJbMV0tYVsxXSpiWzBdXTtcbmNvbnN0IG5vcm1hbGl6ZSA9ICh2OiBWMyk6IFYzID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCguLi52KSB8fCAxO1xuICByZXR1cm4gW3ZbMF0gLyBsZW5ndGgsIHZbMV0gLyBsZW5ndGgsIHZbMl0gLyBsZW5ndGhdO1xufTtcbmNvbnN0IHJvdGF0ZSA9IChbeCwgeSwgel06IFYzLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCByejogbnVtYmVyKTogVjMgPT4ge1xuICBsZXQgYSA9IHkgKiBNYXRoLmNvcyhyeCkgLSB6ICogTWF0aC5zaW4ocngpLCBiID0geSAqIE1hdGguc2luKHJ4KSArIHogKiBNYXRoLmNvcyhyeCk7IHkgPSBhOyB6ID0gYjtcbiAgYSA9IHggKiBNYXRoLmNvcyhyeSkgKyB6ICogTWF0aC5zaW4ocnkpOyBiID0gLXggKiBNYXRoLnNpbihyeSkgKyB6ICogTWF0aC5jb3MocnkpOyB4ID0gYTsgeiA9IGI7XG4gIHJldHVybiBbeCAqIE1hdGguY29zKHJ6KSAtIHkgKiBNYXRoLnNpbihyeiksIHggKiBNYXRoLnNpbihyeikgKyB5ICogTWF0aC5jb3MocnopLCB6XTtcbn07XG5cbmZ1bmN0aW9uIG1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCBzY2FsZVggPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVggPz8gMSk7XG4gIGNvbnN0IHNjYWxlWSA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWSA/PyAxKTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgZW50cmFuY2VQcm9ncmVzcyA9IGluc3RhbmNlLmVudHJhbmNlUHJvZ3Jlc3MgPz8gMTtcbiAgY29uc3QgZW50cmFuY2VFYXNlID0gZW50cmFuY2VQcm9ncmVzcyAqIGVudHJhbmNlUHJvZ3Jlc3MgKiAoMyAtIDIgKiBlbnRyYW5jZVByb2dyZXNzKTtcbiAgY29uc3QgZW50cmFuY2VPZmZzZXQgPSAocG9pbnQ6IE5lb25Qb2ludCwgejogbnVtYmVyLCBpbmRleDogbnVtYmVyKTogVjMgPT4ge1xuICAgIGlmIChlbnRyYW5jZVByb2dyZXNzID49IDEpIHJldHVybiBbMCwgMCwgMF07XG4gICAgY29uc3Qgc2VlZCA9IE1hdGguc2luKGluZGV4ICogOTEuMTcgKyBwb2ludFswXSAqIDM3LjIgKyBwb2ludFsxXSAqIDUzLjcgKyB6ICogMjkuMSkgKiA0Mzc1OC41NDUzO1xuICAgIGNvbnN0IHJhbmRvbSA9IHNlZWQgLSBNYXRoLmZsb29yKHNlZWQpO1xuICAgIGNvbnN0IGFuZ2xlID0gcmFuZG9tICogTWF0aC5QSSAqIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKGluc3RhbmNlLmVudHJhbmNlTWFnbml0dWRlID8/IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqICgxIC0gZW50cmFuY2VFYXNlKSAqICguMzUgKyByYW5kb20gKiAuNzUpO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsIChyYW5kb20gLSAuNSkgKiByYWRpdXMgKiAuNTVdO1xuICB9O1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlciwgaW5kZXggPSAwKTogVjMgPT4ge1xuICAgIGNvbnN0IHAgPSByb3RhdGUoW3BvaW50WzBdICogc2NhbGVYLCAtcG9pbnRbMV0gKiBzY2FsZVksIHogKiBzY2FsZV0sIHJ4LCByeSwgcnopO1xuICAgIGNvbnN0IGUgPSBlbnRyYW5jZU9mZnNldChwb2ludCwgeiwgaW5kZXgpO1xuICAgIHJldHVybiBbcFswXSArIChpbnN0YW5jZS54ID8/IDApICsgZVswXSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApICsgZVsxXSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApICsgZVsyXV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgY29uc3QgYWRkID0gKGE6IFYzLCBiOiBWMywgYzogVjMsIG5vcm1hbD86IFYzKSA9PiB7XG4gICAgY29uc3QgbiA9IG5vcm1hbCA/PyBub3JtYWxpemUoY3Jvc3Moc3ViKGIsIGEpLCBzdWIoYywgYSkpKTtcbiAgICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICAgIGluc3RhbmNlLmVuZXJneUludGVuc2l0eSA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lDb3ZlcmFnZSA/PyAuMzIsXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gICAgXTtcbiAgICBbYSxiLGNdLmZvckVhY2gocCA9PiBvdXRwdXQucHVzaCh7IHAsIG4sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpICogZW50cmFuY2VFYXNlLCBlZmZlY3QgfSkpO1xuICB9O1xuICBjb25zdCBmcm9udCA9IHNoYXBlLnBvaW50cy5tYXAoKHBvaW50LCBpbmRleCkgPT4gbW92ZShwb2ludCwgZGVwdGggLyAyLCBpbmRleCkpO1xuICBjb25zdCBiYWNrID0gc2hhcGUucG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiBtb3ZlKHBvaW50LCAtZGVwdGggLyAyLCBpbmRleCArIHNoYXBlLnBvaW50cy5sZW5ndGgpKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBmcm9udC5sZW5ndGggLSAxOyBpKyspIGFkZChmcm9udFswXSwgZnJvbnRbaV0sIGZyb250W2kgKyAxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYmFjay5sZW5ndGggLSAxOyBpKyspIGFkZChiYWNrWzBdLCBiYWNrW2kgKyAxXSwgYmFja1tpXSk7XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IChpICsgMSkgJSBzaGFwZS5wb2ludHMubGVuZ3RoO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tpXSwgYmFja1tuZXh0XSk7XG4gICAgYWRkKGZyb250W2ldLCBiYWNrW25leHRdLCBmcm9udFtuZXh0XSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBlZGdlTWVzaChpbnN0YW5jZTogTmVvblNoYXBlSW5zdGFuY2UpOiBWZXJ0ZXhbXSB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGluc3RhbmNlO1xuICBjb25zdCBkZXB0aCA9IHNoYXBlLmRlcHRoID8/IC4xNDtcbiAgY29uc3QgY29sb3IgPSBoZXgoaW5zdGFuY2UuY29sb3IgPz8gc2hhcGUuY29sb3IpO1xuICBjb25zdCBzY2FsZSA9IGluc3RhbmNlLnNjYWxlID8/IDE7XG4gIGNvbnN0IHNjYWxlWCA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWCA/PyAxKTtcbiAgY29uc3Qgc2NhbGVZID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVZID8/IDEpO1xuICBjb25zdCByeCA9IGluc3RhbmNlLnJvdGF0aW9uWCA/PyAwLCByeSA9IGluc3RhbmNlLnJvdGF0aW9uWSA/PyAwLCByeiA9IGluc3RhbmNlLnJvdGF0aW9uWiA/PyAwO1xuICBjb25zdCBlbnRyYW5jZVByb2dyZXNzID0gaW5zdGFuY2UuZW50cmFuY2VQcm9ncmVzcyA/PyAxO1xuICBjb25zdCBlbnRyYW5jZUVhc2UgPSBlbnRyYW5jZVByb2dyZXNzICogZW50cmFuY2VQcm9ncmVzcyAqICgzIC0gMiAqIGVudHJhbmNlUHJvZ3Jlc3MpO1xuICBjb25zdCBtb3ZlID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlcik6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlWCwgLXBvaW50WzFdICogc2NhbGVZLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSwgcFsxXSArIChpbnN0YW5jZS55ID8/IDApLCBwWzJdICsgKGluc3RhbmNlLnogPz8gMCldO1xuICB9O1xuICBjb25zdCBleHBsb2RlID0gKGE6IFYzLCBiOiBWMywgaW5kZXg6IG51bWJlcik6IFtWMywgVjNdID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwLCAxIC0gZW50cmFuY2VFYXNlKTtcbiAgICBpZiAoIXByb2dyZXNzKSByZXR1cm4gW2EsIGJdO1xuICAgIGNvbnN0IG14ID0gKGFbMF0gKyBiWzBdKSAvIDIgLSAoaW5zdGFuY2UueCA/PyAwKSwgbXkgPSAoYVsxXSArIGJbMV0pIC8gMiAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QobXgsIG15KSB8fCAxO1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1O1xuICAgIGNvbnN0IHNwZWVkID0gbWFnbml0dWRlICogKC40NSArIChNYXRoLnNpbihpbmRleCAqIDkxLjE3KSAqIC41ICsgLjUpICogLjU1KTtcbiAgICBjb25zdCBkeCA9IG14IC8gbGVuZ3RoICogcHJvZ3Jlc3MgKiBzcGVlZCwgZHkgPSBteSAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQgKyBwcm9ncmVzcyAqIHByb2dyZXNzICogLjE4O1xuICAgIGNvbnN0IGFuZ2xlID0gcHJvZ3Jlc3MgKiAoaW5kZXggJSAyID8gMSA6IC0xKSAqIDIuNDtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAocDogVjMpOiBWMyA9PiB7XG4gICAgICBjb25zdCB4ID0gcFswXSAtIChpbnN0YW5jZS54ID8/IDApLCB5ID0gcFsxXSAtIChpbnN0YW5jZS55ID8/IDApO1xuICAgICAgcmV0dXJuIFt4ICogTWF0aC5jb3MoYW5nbGUpIC0geSAqIE1hdGguc2luKGFuZ2xlKSArIChpbnN0YW5jZS54ID8/IDApICsgZHgsIHggKiBNYXRoLnNpbihhbmdsZSkgKyB5ICogTWF0aC5jb3MoYW5nbGUpICsgKGluc3RhbmNlLnkgPz8gMCkgKyBkeSwgcFsyXV07XG4gICAgfTtcbiAgICByZXR1cm4gW3RyYW5zZm9ybShhKSwgdHJhbnNmb3JtKGIpXTtcbiAgfTtcbiAgY29uc3Qgb3V0cHV0OiBWZXJ0ZXhbXSA9IFtdO1xuICBsZXQgZGlzdGFuY2UgPSAwO1xuICBjb25zdCBlZmZlY3Q6IFZlcnRleFtcImVmZmVjdFwiXSA9IFtcbiAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgIGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEsIGluc3RhbmNlLmVuZXJneUJsZWVkID8/IC4zNSxcbiAgXTtcbiAgY29uc3QgYWRkTGluZSA9IChhOiBWMywgYjogVjMsIHBoYXNlOiBudW1iZXIsIHdpZHRoU2NhbGUgPSAxLCBvcGFjaXR5ID0gMSkgPT4ge1xuICAgIFthLCBiXSA9IGV4cGxvZGUoYSwgYiwgTWF0aC5mbG9vcihkaXN0YW5jZSAqIDEwMCkgKyBNYXRoLmZsb29yKHBoYXNlICogMTApKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KSB8fCAuMDAxO1xuICAgIGNvbnN0IHdpZHRoID0gKGluc3RhbmNlLmxpbmVUaGlja25lc3MgPz8gMSkgKiAuMDE4ICogd2lkdGhTY2FsZTtcbiAgICBjb25zdCBveCA9IC1keSAvIGxlbmd0aCAqIHdpZHRoLCBveSA9IGR4IC8gbGVuZ3RoICogd2lkdGg7XG4gICAgY29uc3QgYTA6IFYzID0gW2FbMF0gLSBveCwgYVsxXSAtIG95LCBhWzJdXSwgYTE6IFYzID0gW2FbMF0gKyBveCwgYVsxXSArIG95LCBhWzJdXTtcbiAgICBjb25zdCBiMDogVjMgPSBbYlswXSAtIG94LCBiWzFdIC0gb3ksIGJbMl1dLCBiMTogVjMgPSBbYlswXSArIG94LCBiWzFdICsgb3ksIGJbMl1dO1xuICAgIGNvbnN0IHN0YXJ0ID0gZGlzdGFuY2UgKiAyLjQsIGVuZCA9IChkaXN0YW5jZSArIGxlbmd0aCkgKiAyLjQ7XG4gICAgY29uc3QgcHVzaCA9IChwOiBWMywgYWxvbmc6IG51bWJlciwgYWNyb3NzOiBudW1iZXIpID0+XG4gICAgICBvdXRwdXQucHVzaCh7IHAsIG46IFthbG9uZywgYWNyb3NzLCBwaGFzZV0sIGNvbG9yLCBnbG93OiAoaW5zdGFuY2UuZ2xvdyA/PyAxKSAqIG9wYWNpdHkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqIGVudHJhbmNlRWFzZSAqICgxICsgTWF0aC5zaW4oKGluc3RhbmNlLmV4cGxvZGVQcm9ncmVzcyA/PyAwKSAqIE1hdGguUEkpICogKGluc3RhbmNlLmV4cGxvZGVNYWduaXR1ZGUgPz8gLjU1KSAqIDIuMikgKiAoMSAtIChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiAuNyksIGVmZmVjdCB9KTtcbiAgICBwdXNoKGEwLHN0YXJ0LC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMCxlbmQsLTEpO1xuICAgIHB1c2goYjAsZW5kLC0xKTsgcHVzaChhMSxzdGFydCwxKTsgcHVzaChiMSxlbmQsMSk7XG4gICAgZGlzdGFuY2UgKz0gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBhZGRMb29wID0gKHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sIHo6IG51bWJlciwgcGhhc2U6IG51bWJlcikgPT5cbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIHopLCBtb3ZlKHBvaW50c1soaW5kZXggKyAxKSAlIHBvaW50cy5sZW5ndGhdLCB6KSwgcGhhc2UgKyBpbmRleCAqIC43MykpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgZGVwdGggLyAyLCAuMyk7XG4gIGFkZExvb3Aoc2hhcGUucG9pbnRzLCAtZGVwdGggLyAyLCAyLjEpO1xuICBzaGFwZS5ob2xlcz8uZm9yRWFjaCgoaG9sZSwgaW5kZXgpID0+IHtcbiAgICBhZGRMb29wKGhvbGUsIGRlcHRoIC8gMiArIC4wMDIsIDMuNyArIGluZGV4KTtcbiAgICBhZGRMb29wKGhvbGUsIC1kZXB0aCAvIDIgLSAuMDAyLCA1LjIgKyBpbmRleCk7XG4gIH0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBhZGRMaW5lKG1vdmUocG9pbnQsIC1kZXB0aCAvIDIpLCBtb3ZlKHBvaW50LCBkZXB0aCAvIDIpLCA2LjEgKyBpbmRleCkpO1xuICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwICogKGluc3RhbmNlLmVuZXJneVNwZWVkID8/IDEpO1xuICBjb25zdCBicmFuY2hTdHJlbmd0aCA9IChpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSkgKiAoaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyKTtcbiAgY29uc3QgcmFuZG9tID0gKHNlZWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5zaW4oc2VlZCAqIDEyLjk4OTggKyBzaGFwZS5wb2ludHMubGVuZ3RoICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XG4gICAgcmV0dXJuIHZhbHVlIC0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGlhbnM6IG51bWJlcik6IE5lb25Qb2ludCA9PiBbXG4gICAgeCAqIE1hdGguY29zKHJhZGlhbnMpIC0geSAqIE1hdGguc2luKHJhZGlhbnMpLFxuICAgIHggKiBNYXRoLnNpbihyYWRpYW5zKSArIHkgKiBNYXRoLmNvcyhyYWRpYW5zKSxcbiAgXTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlID0gTWF0aC5mbG9vcih0aW1lICogMi4zNSArIGluZGV4ICogLjYxKTtcbiAgICBjb25zdCBhZ2UgPSB0aW1lICogMi4zNSArIGluZGV4ICogLjYxIC0gY3ljbGU7XG4gICAgY29uc3Qgc2VlZCA9IGN5Y2xlICogMzcuMSArIGluZGV4ICogMTEuNztcbiAgICBjb25zdCBhY3RpdmVEdXJhdGlvbiA9IC4xOCArIHJhbmRvbShzZWVkICsgMSkgKiAuMjU7XG4gICAgY29uc3QgaGF6ZUR1cmF0aW9uID0gTWF0aC5taW4oMSwgYWN0aXZlRHVyYXRpb24gKyAuMjggKyByYW5kb20oc2VlZCArIDIpICogLjIyKTtcbiAgICBjb25zdCBicmFuY2hBY3RpdmUgPSBhZ2UgPCBhY3RpdmVEdXJhdGlvbjtcbiAgICBjb25zdCBoYXplQWN0aXZlID0gYWdlIDwgaGF6ZUR1cmF0aW9uO1xuICAgIGlmICgoIWJyYW5jaEFjdGl2ZSAmJiAhaGF6ZUFjdGl2ZSkgfHwgcmFuZG9tKHNlZWQgKyAzKSA+IE1hdGgubWluKC43OCwgYnJhbmNoU3RyZW5ndGggKiAuNSkpIHJldHVybjtcbiAgICBjb25zdCBuZXh0ID0gc2hhcGUucG9pbnRzWyhpbmRleCArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aF07XG4gICAgY29uc3QgdCA9IC4xNiArIHJhbmRvbShzZWVkICsgNCkgKiAuNjg7XG4gICAgY29uc3QgYmFzZTogTmVvblBvaW50ID0gW3BvaW50WzBdICsgKG5leHRbMF0gLSBwb2ludFswXSkgKiB0LCBwb2ludFsxXSArIChuZXh0WzFdIC0gcG9pbnRbMV0pICogdF07XG4gICAgY29uc3QgdHggPSBuZXh0WzBdIC0gcG9pbnRbMF0sIHR5ID0gbmV4dFsxXSAtIHBvaW50WzFdLCB0bCA9IE1hdGguaHlwb3QodHgsIHR5KSB8fCAxO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJhbmRvbShzZWVkICsgNSkgPiAuNSA/IDEgOiAtMTtcbiAgICBjb25zdCBwZXJwZW5kaWN1bGFyOiBOZW9uUG9pbnQgPSBbLXR5IC8gdGwgKiBkaXJlY3Rpb24sIHR4IC8gdGwgKiBkaXJlY3Rpb25dO1xuICAgIGNvbnN0IGZpcnN0Sml0dGVyID0gKDEwICsgcmFuZG9tKHNlZWQgKyA2KSAqIDEwKSAqIE1hdGguUEkgLyAxODAgKiAocmFuZG9tKHNlZWQgKyA3KSA+IC41ID8gMSA6IC0xKTtcbiAgICBsZXQgaGVhZGluZyA9IHJvdGF0ZWQocGVycGVuZGljdWxhclswXSwgcGVycGVuZGljdWxhclsxXSwgZmlyc3RKaXR0ZXIpO1xuICAgIGNvbnN0IHNlZ21lbnRDb3VudCA9IDEgKyBNYXRoLmZsb29yKHJhbmRvbShzZWVkICsgOCkgKiAzKTtcbiAgICBjb25zdCBwb2ludHM6IE5lb25Qb2ludFtdID0gW2Jhc2VdO1xuICAgIGZvciAobGV0IHNlZ21lbnQgPSAwOyBzZWdtZW50IDwgc2VnbWVudENvdW50OyBzZWdtZW50KyspIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IC4wNTUgKyByYW5kb20oc2VlZCArIDEwICsgc2VnbWVudCkgKiAuMDk1O1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzWzBdICsgaGVhZGluZ1swXSAqIGxlbmd0aCwgcHJldmlvdXNbMV0gKyBoZWFkaW5nWzFdICogbGVuZ3RoXSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoMjAgKyByYW5kb20oc2VlZCArIDIwICsgc2VnbWVudCkgKiA0MCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgaGVhZGluZyA9IHJvdGF0ZWQoaGVhZGluZ1swXSwgaGVhZGluZ1sxXSwgb2Zmc2V0ICogKHJhbmRvbShzZWVkICsgMzAgKyBzZWdtZW50KSA+IC41ID8gMSA6IC0xKSk7XG4gICAgfVxuICAgIGlmIChoYXplQWN0aXZlKSB7XG4gICAgICBjb25zdCBmYWRlID0gMSAtIE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAvIE1hdGgubWF4KC4wMDEsIGhhemVEdXJhdGlvbiAtIGFjdGl2ZUR1cmF0aW9uKTtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5tYXgoMCwgYWdlIC0gYWN0aXZlRHVyYXRpb24pICogLjAzNTtcbiAgICAgIHBvaW50cy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RhcnQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZW5kID0gcG9pbnRzW3NlZ21lbnQgKyAxXTtcbiAgICAgICAgY29uc3QgaGF6ZVN0YXJ0OiBOZW9uUG9pbnQgPSBbc3RhcnRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIHN0YXJ0WzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgY29uc3QgaGF6ZUVuZDogTmVvblBvaW50ID0gW2VuZFswXSArIHBlcnBlbmRpY3VsYXJbMF0gKiBkcmlmdCwgZW5kWzFdICsgcGVycGVuZGljdWxhclsxXSAqIGRyaWZ0XTtcbiAgICAgICAgYWRkTGluZShtb3ZlKGhhemVTdGFydCwgZGVwdGggLyAyICsgLjAwMiksIG1vdmUoaGF6ZUVuZCwgZGVwdGggLyAyICsgLjAwMiksIDMxICsgc2VlZCArIHNlZ21lbnQsIDEuNDUgKyBmYWRlICogLjU1LCBmYWRlICogLjM0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYnJhbmNoQWN0aXZlKSB7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGFkZExpbmUobW92ZShzdGFydCwgZGVwdGggLyAyICsgLjAwNiksIG1vdmUocG9pbnRzW3NlZ21lbnQgKyAxXSwgZGVwdGggLyAyICsgLjAwNiksIDExICsgc2VlZCArIHNlZ21lbnQsIC40Mik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgY2xhc3MgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNsaW5lUGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2RlcHRoOiBHUFVUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICNsYWJlbExheWVyOiBIVE1MRGl2RWxlbWVudDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBwYXJlbnQgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50ICYmIGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIuY2xhc3NOYW1lID0gXCJuZW9uLXNoYXBlLWxhYmVsLWxheWVyXCI7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaW5zZXQ6XCIwXCIsIHBvaW50ZXJFdmVudHM6XCJub25lXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIgfSk7XG4gICAgcGFyZW50Py5hcHBlbmQodGhpcy4jbGFiZWxMYXllcik7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgZXh0cnVkZWQgc2hhcGUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIsIGN1bGxNb2RlOiBcImJhY2tcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogZmFsc2UsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNsaW5lUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDoge1xuICAgICAgICBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiLFxuICAgICAgICBidWZmZXJzOiBbeyBhcnJheVN0cmlkZTogZmxvYXRzUGVyVmVydGV4ICogNCwgYXR0cmlidXRlczogW1xuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMiwgb2Zmc2V0OiAyNCwgZm9ybWF0OiBcImZsb2F0MzJ4M1wiIH0sXG4gICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAzNiwgZm9ybWF0OiBcImZsb2F0MzJcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDQsIG9mZnNldDogNDAsIGZvcm1hdDogXCJmbG9hdDMyeDRcIiB9LFxuICAgICAgICBdIH1dLFxuICAgICAgfSxcbiAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogXCJsaW5lRnJhZ21lbnRcIixcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sXG4gICAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICAgIH0gfV0sXG4gICAgICB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgICAgZGVwdGhTdGVuY2lsOiB7IGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSwgZGVwdGhDb21wYXJlOiBcImxlc3MtZXF1YWxcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI3NjZW5lQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3Rvcnkgc2hhcGUgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCk7XG4gIH1cblxuICBzZXRMb2dpY2FsU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMuI2xvZ2ljYWxTaXplID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZlcnRpY2VzID0gaW5zdGFuY2VzLmZsYXRNYXAobWVzaCk7XG4gICAgY29uc3QgZWRnZXMgPSBpbnN0YW5jZXMuZmxhdE1hcChlZGdlTWVzaCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICBjb25zdCBlZGdlRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZWRnZXMubGVuZ3RoICogZmxvYXRzUGVyVmVydGV4KTtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IGRhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgZWRnZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBlZGdlRGF0YS5zZXQoWy4uLnZlcnRleC5wLCAuLi52ZXJ0ZXgubiwgLi4udmVydGV4LmNvbG9yLCB2ZXJ0ZXguZ2xvdywgLi4udmVydGV4LmVmZmVjdF0sIGkgKiBmbG9hdHNQZXJWZXJ0ZXgpKTtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBkYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgY29uc3QgZWRnZUJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IE1hdGgubWF4KDQsIGVkZ2VEYXRhLmJ5dGVMZW5ndGgpLCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih2ZXJ0ZXhCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGlmIChlZGdlRGF0YS5sZW5ndGgpIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGVkZ2VCdWZmZXIsIDAsIGVkZ2VEYXRhKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQsIDUsIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgMF0pKTtcbiAgICBjb25zdCBiaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW3sgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLiNzY2VuZUJ1ZmZlciB9IH1dIH0pO1xuICAgIGNvbnN0IGxpbmVCaW5kR3JvdXAgPSB0aGlzLmRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI2xpbmVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3sgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLCBjbGVhclZhbHVlOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsIHN0b3JlT3A6IFwic3RvcmVcIiB9XSxcbiAgICAgIGRlcHRoU3RlbmNpbEF0dGFjaG1lbnQ6IHsgdmlldzogdGhpcy4jZGVwdGghLmNyZWF0ZVZpZXcoKSwgZGVwdGhDbGVhclZhbHVlOiAxLCBkZXB0aExvYWRPcDogXCJjbGVhclwiLCBkZXB0aFN0b3JlT3A6IFwic3RvcmVcIiB9LFxuICAgIH0pO1xuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGJpbmRHcm91cCk7IHBhc3Muc2V0VmVydGV4QnVmZmVyKDAsIHZlcnRleEJ1ZmZlcik7IHBhc3MuZHJhdyh2ZXJ0aWNlcy5sZW5ndGgpOyB9XG4gICAgaWYgKGVkZ2VzLmxlbmd0aCkgeyBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI2xpbmVQaXBlbGluZSk7IHBhc3Muc2V0QmluZEdyb3VwKDAsIGxpbmVCaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCBlZGdlQnVmZmVyKTsgcGFzcy5kcmF3KGVkZ2VzLmxlbmd0aCk7IH1cbiAgICBwYXNzLmVuZCgpOyB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgICB0aGlzLiNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkudGhlbigoKSA9PiB7IHZlcnRleEJ1ZmZlci5kZXN0cm95KCk7IGVkZ2VCdWZmZXIuZGVzdHJveSgpOyB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHsgdGhpcy4jbGFiZWxMYXllci5yZW1vdmUoKTsgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTsgdGhpcy4jc2NlbmVCdWZmZXIuZGVzdHJveSgpOyBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpOyB9XG4gICNyZW5kZXJMYWJlbHMoaW5zdGFuY2VzOiByZWFkb25seSBOZW9uU2hhcGVJbnN0YW5jZVtdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNsYWJlbExheWVyLnN0eWxlLCB7XG4gICAgICBsZWZ0OiBgJHt0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0fXB4YCxcbiAgICAgIHRvcDogYCR7dGhpcy5jYW52YXMub2Zmc2V0VG9wfXB4YCxcbiAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICB3aWR0aDogYCR7dGhpcy5jYW52YXMuY2xpZW50V2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHR9cHhgLFxuICAgIH0pO1xuICAgIHRoaXMuI2xhYmVsTGF5ZXIucmVwbGFjZUNoaWxkcmVuKC4uLmluc3RhbmNlcy5mbGF0TWFwKGluc3RhbmNlID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2UubGFiZWw/LnRleHQgfHwgKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgPD0gMCkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICAgICAgY29uc3QgeCA9IDUwICsgKGluc3RhbmNlLnggPz8gMCkgKiA0MCAvICh0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCB5ID0gNTAgLSAoaW5zdGFuY2UueSA/PyAwKSAqIDQwO1xuICAgICAgY29uc3Qgc2hhcGVSYWRpdXMgPSBzY2FsZSAqIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIC4yO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2hhcGVSYWRpdXMgKyAoaW5zdGFuY2UubGFiZWwub2Zmc2V0ID8/IDgpICsgKGluc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4KSAqIC41O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnN0YW5jZS5sYWJlbC5wb3NpdGlvbiA/PyBcImFib3ZlXCI7XG4gICAgICBsZXQgdHggPSAwLCB0eSA9IDA7XG4gICAgICBpZiAocG9zaXRpb24gPT09IFwiYWJvdmVcIikgdHkgPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImJlbG93XCIpIHR5ID0gb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImxlZnRcIikgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHR4ID0gb2Zmc2V0O1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGluc3RhbmNlLmxhYmVsLnRleHQ7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OmAke3h9JWAsIHRvcDpgJHt5fSVgLCB0cmFuc2Zvcm06YHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke3R4fXB4KSxjYWxjKC01MCUgKyAke3R5fXB4KSlgLFxuICAgICAgICBjb2xvcjppbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvciwgZm9udEZhbWlseTppbnN0YW5jZS5sYWJlbC5mb250RmFtaWx5ID8/IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFNpemU6YCR7aW5zdGFuY2UubGFiZWwuZm9udFNpemUgPz8gMTh9cHhgLCBmb250V2VpZ2h0OlN0cmluZyhpbnN0YW5jZS5sYWJlbC5mb250V2VpZ2h0ID8/IDYwMCksXG4gICAgICAgIHRleHRTaGFkb3c6YDAgMCA1cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn0sMCAwIDE0cHggJHtpbnN0YW5jZS5jb2xvciA/PyBpbnN0YW5jZS5zaGFwZS5jb2xvcn1gLCB3aGl0ZVNwYWNlOlwibm93cmFwXCIsXG4gICAgICAgIG9wYWNpdHk6U3RyaW5nKGluc3RhbmNlLm9wYWNpdHkgPz8gMSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbZWxlbWVudF07XG4gICAgfSkpO1xuICB9XG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuI2xvZ2ljYWxTaXplO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCB8fCAhdGhpcy4jZGVwdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKHRoaXMuI2RlcHRoICYmIHRoaXMuY2FudmFzLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNkZXB0aD8uZGVzdHJveSgpO1xuICAgIHRoaXMuI2RlcHRoID0gdGhpcy5kZXZpY2UuY3JlYXRlVGV4dHVyZSh7IHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwgZm9ybWF0OiBcImRlcHRoMjRwbHVzXCIsIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlLCBOZW9uU2hhcGVMYWJlbCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZS1yZW5kZXJlclwiO1xuXG5leHBvcnQgZW51bSBOZW9uU2hhcGVEaXNwb3NhbCB7XG4gIEZhZGVPdXQgPSBcImZhZGVPdXRcIixcbiAgRGlzYXBwZWFyID0gXCJkaXNhcHBlYXJcIixcbiAgRXhwbG9kZSA9IFwiZXhwbG9kZVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZVZlY3RvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25TaGFwZUltcGFjdCB7XG4gIGRpcmVjdGlvbjogTmVvblNoYXBlVmVjdG9yO1xuICBtYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVBY3Rvck9wdGlvbnMge1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgdmVsb2NpdHk/OiBQYXJ0aWFsPE5lb25TaGFwZVZlY3Rvcj47XG4gIHNjYWxlPzogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw/OiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgZW50cmFuY2VEdXJhdGlvbj86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uU2hhcGVBY3RvciB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICB2ZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yO1xuICBzY2FsZTogbnVtYmVyO1xuICBsYWJlbD86IE5lb25TaGFwZUxhYmVsO1xuICBjb2xvcj86IHN0cmluZztcbiAgZGlzcG9zYWw6IE5lb25TaGFwZURpc3Bvc2FsO1xuICBleHBsb2RlTWFnbml0dWRlOiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb246IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU6IG51bWJlcjtcbiAgcm90YXRpb25YID0gMDtcbiAgcm90YXRpb25ZID0gMDtcbiAgcm90YXRpb25aID0gMDtcbiAgZGlzcG9zZWQgPSBmYWxzZTtcbiAgI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAjZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICNpbXBhY3RWZWxvY2l0eTogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG4gICNpbXBhY3RSb3RhdGlvbjogTmVvblNoYXBlVmVjdG9yID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmVvblNoYXBlQWN0b3JPcHRpb25zKSB7XG4gICAgdGhpcy5zaGFwZSA9IG9wdGlvbnMuc2hhcGU7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54ID8/IDA7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55ID8/IDA7XG4gICAgdGhpcy56ID0gb3B0aW9ucy56ID8/IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogb3B0aW9ucy52ZWxvY2l0eT8ueCA/PyAwLCB5OiBvcHRpb25zLnZlbG9jaXR5Py55ID8/IDAgfTtcbiAgICB0aGlzLnNjYWxlID0gb3B0aW9ucy5zY2FsZSA/PyAxO1xuICAgIHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZGlzcG9zYWwgPSBvcHRpb25zLmRpc3Bvc2FsID8/IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQ7XG4gICAgdGhpcy5leHBsb2RlTWFnbml0dWRlID0gb3B0aW9ucy5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBvcHRpb25zLmVudHJhbmNlRHVyYXRpb24gPz8gLjQ1O1xuICAgIHRoaXMuZW50cmFuY2VNYWduaXR1ZGUgPSBvcHRpb25zLmVudHJhbmNlTWFnbml0dWRlID8/IC41NTtcbiAgfVxuXG4gIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlciwgeiA9IHRoaXMueik6IHRoaXMge1xuICAgIHRoaXMueCA9IHg7IHRoaXMueSA9IHk7IHRoaXMueiA9IHo7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRWZWxvY2l0eSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IHg7IHRoaXMudmVsb2NpdHkueSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbXBhY3QoeyBkaXJlY3Rpb24sIG1hZ25pdHVkZSB9OiBOZW9uU2hhcGVJbXBhY3QpOiB0aGlzIHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSkgfHwgMTtcbiAgICBjb25zdCB4ID0gZGlyZWN0aW9uLnggLyBsZW5ndGgsIHkgPSBkaXJlY3Rpb24ueSAvIGxlbmd0aDtcbiAgICB0aGlzLiNpbXBhY3RWZWxvY2l0eS54ICs9IHggKiBtYWduaXR1ZGUgKiAuMzQ7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSArPSB5ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKz0geSAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnkgLT0geCAqIG1hZ25pdHVkZSAqIC45O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzcG9zZShtb2RlID0gdGhpcy5kaXNwb3NhbCk6IHRoaXMge1xuICAgIHRoaXMuZGlzcG9zYWwgPSBtb2RlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSBtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIgPyAxIDogLjAwMDE7XG4gICAgaWYgKG1vZGUgPT09IE5lb25TaGFwZURpc3Bvc2FsLkRpc2FwcGVhcikgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbnRlcihkdXJhdGlvbiA9IHRoaXMuZW50cmFuY2VEdXJhdGlvbiwgbWFnbml0dWRlID0gdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSk6IHRoaXMge1xuICAgIHRoaXMuZW50cmFuY2VEdXJhdGlvbiA9IE1hdGgubWF4KC4wMDEsIGR1cmF0aW9uKTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gbWFnbml0dWRlO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnZW5lcmF0ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IDA7XG4gICAgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyA9IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gKHRoaXMudmVsb2NpdHkueCArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LngpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMueSArPSAodGhpcy52ZWxvY2l0eS55ICsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSkgKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblggKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnJvdGF0aW9uWSArPSB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICogZGVsdGFTZWNvbmRzO1xuICAgIGNvbnN0IGRhbXBpbmcgPSBNYXRoLmV4cCgtNyAqIGRlbHRhU2Vjb25kcyk7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RWZWxvY2l0eS55ICo9IGRhbXBpbmc7XG4gICAgdGhpcy4jaW1wYWN0Um90YXRpb24ueCAqPSBkYW1waW5nOyB0aGlzLiNpbXBhY3RSb3RhdGlvbi55ICo9IGRhbXBpbmc7XG4gICAgaWYgKHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPiAwICYmICF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUgPyAuODUgOiAuNTU7XG4gICAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIGR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID49IDEpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy4jZW50cmFuY2VQcm9ncmVzcyA8IDEpIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLiNlbnRyYW5jZVByb2dyZXNzICsgZGVsdGFTZWNvbmRzIC8gdGhpcy5lbnRyYW5jZUR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckluc3RhbmNlKG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgICBjb25zdCBmYWRlID0gdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRmFkZU91dCA/IDEgLSB0aGlzLiNkaXNwb3NhbFByb2dyZXNzIDogMTtcbiAgICByZXR1cm4ge1xuICAgICAgc2hhcGU6IHRoaXMuc2hhcGUsIHg6IHRoaXMueCwgeTogdGhpcy55LCB6OiB0aGlzLnosIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgcm90YXRpb25YOiB0aGlzLnJvdGF0aW9uWCwgcm90YXRpb25ZOiB0aGlzLnJvdGF0aW9uWSwgcm90YXRpb25aOiB0aGlzLnJvdGF0aW9uWixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLCBjb2xvcjogdGhpcy5jb2xvciwgb3BhY2l0eTogdGhpcy5kaXNwb3NlZCA/IDAgOiBmYWRlLFxuICAgICAgZW50cmFuY2VQcm9ncmVzczogdGhpcy4jZW50cmFuY2VQcm9ncmVzcyxcbiAgICAgIGVudHJhbmNlTWFnbml0dWRlOiB0aGlzLmVudHJhbmNlTWFnbml0dWRlLFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiB0aGlzLmV4cGxvZGVNYWduaXR1ZGUsXG4gICAgICAuLi5vdmVycmlkZXMsXG4gICAgfTtcbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25QcmltaXRpdmVTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImJvbHRcIiB8IFwib3JiXCIgfCBcInJpbmdcIiB8IFwic3BhcmtcIiB8IFwiZGlhbW9uZFwiIHwgXCJwZW50YWdvblwiIHwgXCJsaW5lXCIgfCBcImFyY1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25QcmltaXRpdmUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWNvbmRhcnlDb2xvcj86IHN0cmluZztcbiAgZ2xvdz86IG51bWJlcjtcbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuICB0ZXh0dXJlPzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoPzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgYXJjU3RhcnQ/OiBudW1iZXI7XG4gIGFyY0VuZD86IG51bWJlcjtcbiAgc2hhcGU/OiBOZW9uUHJpbWl0aXZlU2hhcGU7XG59XG5cbmNvbnN0IG1heFByaW1pdGl2ZXMgPSAxMDI0O1xuY29uc3QgZmxvYXRzUGVyUHJpbWl0aXZlID0gMjA7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi8gYFxuc3RydWN0IFNjZW5lIHsgcmVzb2x1dGlvbjogdmVjMmYsIGNvdW50OiBmMzIsIHRpbWU6IGYzMiB9XG5zdHJ1Y3QgUHJpbWl0aXZlIHtcbiAgcG9zaXRpb246IHZlYzJmLFxuICBzaXplOiB2ZWMyZixcbiAgY29sb3I6IHZlYzRmLFxuICBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIGdsb3c6IGYzMixcbiAgaW50ZW5zaXR5OiBmMzIsXG4gIHNoYXBlOiBmMzIsXG4gIHRleHR1cmU6IGYzMixcbiAgcmltSW50ZW5zaXR5OiBmMzIsXG4gIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG4gIHBhZGRpbmc6IHZlYzJmLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGl0ZW1zOiBhcnJheTxQcmltaXRpdmU+O1xuXG5zdHJ1Y3QgVmVydGV4T3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIGNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDIpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDMpIGludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oNCkgc2hhcGU6IGYzMixcbiAgQGxvY2F0aW9uKDUpIHNlY29uZGFyeUNvbG9yOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDYpIHRleHR1cmU6IGYzMixcbiAgQGxvY2F0aW9uKDcpIHJpbUludGVuc2l0eTogZjMyLFxuICBAbG9jYXRpb24oOCkgc2hhZG93U3RyZW5ndGg6IGYzMixcbn1cblxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmVydGV4OiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBWZXJ0ZXhPdXRwdXQge1xuICB2YXIgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGl0ZW0gPSBpdGVtc1tpbnN0YW5jZV07XG4gIGxldCBsb2NhbCA9IGNvcm5lcnNbdmVydGV4XTtcbiAgdmFyIHBpeGVsT2Zmc2V0ID0gbG9jYWwgKiBpdGVtLnNpemU7XG4gIGlmIChpdGVtLnRleHR1cmUgIT0gMCkge1xuICAgIGxldCBjID0gY29zKGl0ZW0udGV4dHVyZSk7XG4gICAgbGV0IHMgPSBzaW4oaXRlbS50ZXh0dXJlKTtcbiAgICBwaXhlbE9mZnNldCA9IHZlYzJmKHBpeGVsT2Zmc2V0LnggKiBjIC0gcGl4ZWxPZmZzZXQueSAqIHMsIHBpeGVsT2Zmc2V0LnggKiBzICsgcGl4ZWxPZmZzZXQueSAqIGMpO1xuICB9XG4gIGxldCBwaXhlbCA9IGl0ZW0ucG9zaXRpb24gKyBwaXhlbE9mZnNldDtcbiAgdmFyIG91dHB1dDogVmVydGV4T3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihwaXhlbC54IC8gc2NlbmUucmVzb2x1dGlvbi54ICogMiAtIDEsIDEgLSBwaXhlbC55IC8gc2NlbmUucmVzb2x1dGlvbi55ICogMiwgMCwgMSk7XG4gIG91dHB1dC5sb2NhbCA9IGxvY2FsO1xuICBvdXRwdXQuY29sb3IgPSBpdGVtLmNvbG9yO1xuICBvdXRwdXQuZ2xvdyA9IGl0ZW0uZ2xvdztcbiAgb3V0cHV0LmludGVuc2l0eSA9IGl0ZW0uaW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhcGUgPSBpdGVtLnNoYXBlO1xuICBvdXRwdXQuc2Vjb25kYXJ5Q29sb3IgPSBpdGVtLnNlY29uZGFyeUNvbG9yO1xuICBvdXRwdXQudGV4dHVyZSA9IGl0ZW0udGV4dHVyZTtcbiAgb3V0cHV0LnJpbUludGVuc2l0eSA9IGl0ZW0ucmltSW50ZW5zaXR5O1xuICBvdXRwdXQuc2hhZG93U3RyZW5ndGggPSBpdGVtLnNoYWRvd1N0cmVuZ3RoO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5AZnJhZ21lbnQgZm4gZnJhZ21lbnRNYWluKGlucHV0OiBWZXJ0ZXhPdXRwdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0ZiB7XG4gIGlmIChpbnB1dC5zaGFwZSA+IDcuNSkge1xuICAgIGxldCByYWRpdXMgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICAgIGxldCBhbmdsZSA9IGF0YW4yKGlucHV0LmxvY2FsLnksIGlucHV0LmxvY2FsLngpO1xuICAgIGlmIChhbmdsZSA8IGlucHV0LnJpbUludGVuc2l0eSB8fCBhbmdsZSA+IGlucHV0LnNoYWRvd1N0cmVuZ3RoIHx8IHJhZGl1cyA+IDEuMCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGxpbmVEaXN0YW5jZSA9IGFicyhyYWRpdXMgLSAwLjc4KTtcbiAgICBpZiAobGluZURpc3RhbmNlID4gMC4xNikgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGNvcmUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuMDEyLCAwLjAzOCwgbGluZURpc3RhbmNlKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMDI1LCAwLjE2LCBsaW5lRGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHB1bHNlQSA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAyMy4wIC0gc2NlbmUudGltZSAqIDguNSkpLCAxNi4wKTtcbiAgICBsZXQgcHVsc2VCID0gcG93KG1heCgwLjAsIHNpbihhbmdsZSAqIDExLjAgKyBzY2VuZS50aW1lICogNS4zICsgMS43KSksIDI0LjApO1xuICAgIGxldCBncmFpbiA9IHNpbihhbmdsZSAqIDcxLjAgKyBzY2VuZS50aW1lICogMy4xKSAqIDAuNSArIDAuNTtcbiAgICBsZXQgc3VyZ2UgPSBzbW9vdGhzdGVwKDAuNzIsIDAuOTQsIHB1bHNlQSAqIDAuNyArIHB1bHNlQiAqIDAuNjUgKyBncmFpbiAqIDAuMTIpO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjg4ICsgc3VyZ2UgKiAwLjY1KSArIGhhbG8gKiAoMC4yMiArIHN1cmdlICogMC45KSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGhvdCA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgY29yZSAqIHN1cmdlICogMC45KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDYuNSkge1xuICAgIGxldCBhbG9uZyA9IGlucHV0LmxvY2FsLnk7XG4gICAgbGV0IGFjcm9zcyA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYWNyb3NzID4gMS4wIHx8IGFicyhhbG9uZykgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjA4LCAwLjI0LCBhY3Jvc3MpO1xuICAgIGxldCBoYWxvID0gKDEuMCAtIHNtb290aHN0ZXAoMC4xMiwgMS4wLCBhY3Jvc3MpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGVuZEZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDAuNzIsIDEuMCwgYWJzKGFsb25nKSk7XG4gICAgbGV0IHRyYXZlbCA9IHBvdyhtYXgoMC4wLCBzaW4oYWxvbmcgKiAyNC4wIC0gc2NlbmUudGltZSAqIDguMCArIGlucHV0LnRleHR1cmUpKSwgMTQuMCk7XG4gICAgbGV0IGVuZXJneSA9IChjb3JlICogKDAuNzUgKyB0cmF2ZWwgKiAwLjUpICsgaGFsbyAqICgwLjIgKyB0cmF2ZWwgKiAwLjU1KSkgKiBlbmRGYWRlICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiB0cmF2ZWwgKiAwLjc1KTtcbiAgICByZXR1cm4gdmVjNGYoaG90ICogZW5lcmd5LCBjbGFtcChlbmVyZ3ksIDAuMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDUuNSkge1xuICAgIC8vIFBlbnRhZ29uIFNERlxuICAgIC8vIGxvY2FsIGlzIGluIFstMSwgMV0gcmFuZ2UuIExldCdzIGZpbmQgcGVudGFnb24gZGlzdGFuY2UuXG4gICAgbGV0IHB4ID0gYWJzKGlucHV0LmxvY2FsLngpO1xuICAgIGxldCBweSA9IGlucHV0LmxvY2FsLnk7XG4gICAgLy8gUGVudGFnb24gY29uc3RhbnRzIGZvciB2ZXJ0aWNlcy9lZGdlc1xuICAgIGxldCBrID0gdmVjM2YoLTAuODA5MDE2OTk0LCAwLjU4Nzc4NTI1MiwgMS4zNzYzODE5Mik7IC8vIGNvcy9zaW4gb2YgNzIsIHBsdXMgaGVpZ2h0IGZhY3RvclxuICAgIC8vIFByb2plY3QvTWlycm9yIGFjcm9zcyB0aGUgc3ltbWV0cnkgYXhlcyBvZiByZWd1bGFyIHBlbnRhZ29uXG4gICAgdmFyIHAgPSB2ZWMyZihweCwgcHkpO1xuICAgIHAgPSBwIC0gMiAqIG1pbihkb3QodmVjMmYoLWsueCwgay55KSwgcCksIDApICogdmVjMmYoLWsueCwgay55KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKGsueCwgay55KSwgcCksIDApICogdmVjMmYoay54LCBrLnkpO1xuICAgIHAueCA9IHAueCAtIGNsYW1wKHAueCwgLWsueiAqIDAuNSwgay56ICogMC41KTtcbiAgICBsZXQgZCA9IGxlbmd0aChwIC0gdmVjMmYoMCwgMC43MikpICogc2lnbihwLnkgLSAwLjcyKTtcbiAgICAvLyBNYXAgZCB0byBhIG5vcm1hbGl6ZWQgcmFkaXVzIHNjYWxlXG4gICAgbGV0IHNjYWxlRCA9IGQgKyAwLjM1OyAvLyBvZmZzZXQgcGVudGFnb24gdG8gZml0IGJvdW5kcyBuaWNlbHlcbiAgICBpZiAoc2NhbGVEID4gMC44KSB7IGRpc2NhcmQ7IH1cbiAgICBcbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNSwgMC42NSwgc2NhbGVEKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjQ1LCAwLjUzLCBzY2FsZUQpICogKDEgLSBzbW9vdGhzdGVwKDAuNjUsIDAuNzUsIHNjYWxlRCkpO1xuICAgIGxldCBmaWxsID0gMSAtIHNtb290aHN0ZXAoLTAuMiwgMC41LCBzY2FsZUQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuNTUsIDAuOCwgc2NhbGVEKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBnbGFzcyA9IGZpbGwgKiAwLjM4ICsgYm9yZGVyICogMS4zNTtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IGVkZ2VDb2xvciA9IGlucHV0LmNvbG9yLnJnYiAqIChib3JkZXIgKiAxLjc1ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNDUpICogZmlsbCAqIDAuMzU7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuNDtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gNC41KSB7XG4gICAgbGV0IGQgPSBhYnMoaW5wdXQubG9jYWwueCkgKyBhYnMoaW5wdXQubG9jYWwueSk7XG4gICAgaWYgKGQgPiAxLjA4KSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgZWRnZSA9IDEgLSBzbW9vdGhzdGVwKDAuNzgsIDAuOTIsIGQpO1xuICAgIGxldCBib3JkZXIgPSBzbW9vdGhzdGVwKDAuNzIsIDAuODIsIGQpICogKDEgLSBzbW9vdGhzdGVwKDAuOTIsIDEuMDIsIGQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKDAuMCwgMC43OCwgZCk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC44MiwgMS4wOCwgZCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zNSArIGJvcmRlciAqIDEuMjtcbiAgICBsZXQgZW5lcmd5ID0gKGdsYXNzICsgaGFsbyAqIDAuNDUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS42ICsgZWRnZSAqIDAuMyk7XG4gICAgbGV0IGZpbGxDb2xvciA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZmlsbCAqIDAuNSkgKiBmaWxsICogMC4zODtcbiAgICBsZXQgYmxvb20gPSBpbnB1dC5jb2xvci5yZ2IgKiBoYWxvICogMC4zNTtcbiAgICBsZXQgcmdiID0gZWRnZUNvbG9yICsgZmlsbENvbG9yICsgYmxvb207XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjk1KSk7XG4gIH1cbiAgaWYgKGlucHV0LnNoYXBlID4gMS41KSB7XG4gICAgbGV0IHIyID0gZG90KGlucHV0LmxvY2FsLCBpbnB1dC5sb2NhbCk7XG4gICAgaWYgKHIyID4gMSkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IHogPSBzcXJ0KG1heCgwLCAxIC0gcjIpKTtcbiAgICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKHZlYzNmKGlucHV0LmxvY2FsLngsIC1pbnB1dC5sb2NhbC55LCB6KSk7XG4gICAgbGV0IGxpZ2h0ID0gbm9ybWFsaXplKHZlYzNmKC0wLjU1LCAtMC43LCAwLjkpKTtcbiAgICBsZXQgZGlmZnVzZSA9IG1heChkb3Qobm9ybWFsLCBsaWdodCksIDApO1xuICAgIGxldCByaW0gPSBwb3coMSAtIHosIDIuMikgKiBpbnB1dC5yaW1JbnRlbnNpdHk7XG4gICAgbGV0IHNoYWRvdyA9IG1peCgxIC0gaW5wdXQuc2hhZG93U3RyZW5ndGgsIDEsIHNtb290aHN0ZXAoLTAuNjUsIDAuNDUsIGRvdChub3JtYWwueHksIGxpZ2h0Lnh5KSkpO1xuICAgIGxldCBncmFpbiA9IHNpbihpbnB1dC5sb2NhbC54ICogMjMgKyBpbnB1dC5sb2NhbC55ICogMTcpICogc2luKGlucHV0LmxvY2FsLnkgKiAzMSAtIGlucHV0LmxvY2FsLnggKiAxMSk7XG4gICAgbGV0IHRleHR1cmUgPSAxICsgZ3JhaW4gKiBpbnB1dC50ZXh0dXJlICogMC4yMjtcbiAgICBsZXQgc3BlY3VsYXIgPSBwb3cobWF4KGRvdChyZWZsZWN0KC1saWdodCwgbm9ybWFsKSwgdmVjM2YoMCwwLDEpKSwgMCksIDI4KSAqIDEuODtcbiAgICBsZXQgYm9keSA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgZGlmZnVzZSAqIDAuOCArIDAuMikgKiBzaGFkb3cgKiB0ZXh0dXJlO1xuICAgIGxldCBoYWxvID0gcG93KG1heCgwLCAxIC0gbGVuZ3RoKGlucHV0LmxvY2FsKSksIDAuMzUpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgcmdiID0gYm9keSAqICgwLjM4ICsgZGlmZnVzZSAqIDAuOTUpICsgaW5wdXQuY29sb3IucmdiICogcmltICsgdmVjM2Yoc3BlY3VsYXIpICsgaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMztcbiAgICByZXR1cm4gdmVjNGYocmdiICogaW5wdXQuaW50ZW5zaXR5LCAxKTtcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSBsZW5ndGgoaW5wdXQubG9jYWwpO1xuICBpZiAoaW5wdXQuc2hhcGUgPiAzLjUpIHtcbiAgICBsZXQgYXhpcyA9IG1pbihhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gICAgbGV0IGFybSA9IDEgLSBzbW9vdGhzdGVwKDAuMDQsIDAuMTgsIGF4aXMpO1xuICAgIGxldCBmYWRlID0gMSAtIHNtb290aHN0ZXAoMC4yLCAxLCBtYXgoYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpKTtcbiAgICBsZXQgZW5lcmd5ID0gYXJtICogZmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCBhcm0pICogZW5lcmd5O1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45MikpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDIuNSkge1xuICAgIGxldCByaW5nRGlzdGFuY2UgPSBhYnMobGVuZ3RoKGlucHV0LmxvY2FsKSAtIDAuNjIpO1xuICAgIGxldCByaW5nID0gMSAtIHNtb290aHN0ZXAoMC4wNTUsIDAuMTgsIHJpbmdEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4xMiwgMC40MiwgcmluZ0Rpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmVyZ3kgPSAocmluZyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgcmdiID0gbWl4KGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgaW5wdXQuY29sb3IucmdiLCByaW5nKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDAuNSkge1xuICAgIGRpc3RhbmNlID0gbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKTtcbiAgfVxuICBsZXQgY29yZSA9IDEgLSBzbW9vdGhzdGVwKDAuMzgsIDAuNzYsIGRpc3RhbmNlKTtcbiAgbGV0IGhhbG8gPSAoMSAtIHNtb290aHN0ZXAoMC4zLCAxLCBkaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgbGV0IGVuZXJneSA9IChjb3JlICsgaGFsbyAqIDAuNTUpICogaW5wdXQuaW50ZW5zaXR5O1xuICBsZXQgY2hyb21hdGljQ29yZSA9IG1peChpbnB1dC5jb2xvci5yZ2IsIGlucHV0LnNlY29uZGFyeUNvbG9yLnJnYiwgcG93KG1heChjb3JlLCAwKSwgMikpO1xuICBsZXQgcmF3ID0gY2hyb21hdGljQ29yZSAqIChjb3JlICogMS4wNSArIGhhbG8gKiAwLjQyKTtcbiAgbGV0IHJnYiA9IHJhdyAvICh2ZWMzZigxKSArIHJhdyAqIDAuMzIpO1xuICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbn1cbmA7XG5cbmZ1bmN0aW9uIHJnYmEoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHZhbHVlID0gaGV4LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICBpZiAoIS9eWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgc2l4LWRpZ2l0IGhleCBjb2xvciwgcmVjZWl2ZWQgXCIke2hleH1cIi5gKTtcbiAgcmV0dXJuIFtcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMCwgMiksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoMiwgNCksIDE2KSAvIDI1NSxcbiAgICBOdW1iZXIucGFyc2VJbnQodmFsdWUuc2xpY2UoNCwgNiksIDE2KSAvIDI1NSxcbiAgICAxLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblByaW1pdGl2ZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjc2NlbmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI3ByaW1pdGl2ZUJ1ZmZlcjogR1BVQnVmZmVyO1xuICAjYmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xuICAgIHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHsgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSwgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNwcmltaXRpdmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IG1heFByaW1pdGl2ZXMgKiBmbG9hdHNQZXJQcmltaXRpdmUgKiA0LFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcbiAgICB0aGlzLiNiaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9LFxuICAgICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jcHJpbWl0aXZlQnVmZmVyIH0gfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPE5lb25QcmltaXRpdmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2FudmFzIGNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSwgdGltZVNlY29uZHMgPSAwLCBwcmVzZXJ2ZUNvbG9yID0gZmFsc2UsIHRhcmdldFZpZXc/OiBHUFVUZXh0dXJlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuI3Jlc2l6ZSgpO1xuICAgIGNvbnN0IHZpc2libGUgPSBwcmltaXRpdmVzLnNsaWNlKDAsIG1heFByaW1pdGl2ZXMpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZpc2libGUubGVuZ3RoICogZmxvYXRzUGVyUHJpbWl0aXZlKTtcbiAgICB2aXNpYmxlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIGZsb2F0c1BlclByaW1pdGl2ZTtcbiAgICAgIGRhdGEuc2V0KFtcbiAgICAgICAgaXRlbS54LCBpdGVtLnksIGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0ID8/IGl0ZW0ud2lkdGgsXG4gICAgICAgIC4uLnJnYmEoaXRlbS5jb2xvciksXG4gICAgICAgIC4uLnJnYmEoaXRlbS5zZWNvbmRhcnlDb2xvciA/PyBpdGVtLmNvbG9yKSxcbiAgICAgICAgaXRlbS5nbG93ID8/IDAuNSxcbiAgICAgICAgaXRlbS5pbnRlbnNpdHkgPz8gMSxcbiAgICAgICAgaXRlbS5zaGFwZSA9PT0gXCJhcmNcIiA/IDggOiBpdGVtLnNoYXBlID09PSBcImxpbmVcIiA/IDcgOiBpdGVtLnNoYXBlID09PSBcInBlbnRhZ29uXCIgPyA2IDogaXRlbS5zaGFwZSA9PT0gXCJkaWFtb25kXCIgPyA1IDogaXRlbS5zaGFwZSA9PT0gXCJzcGFya1wiID8gNCA6IGl0ZW0uc2hhcGUgPT09IFwicmluZ1wiID8gMyA6IGl0ZW0uc2hhcGUgPT09IFwib3JiXCIgPyAyIDogaXRlbS5zaGFwZSA9PT0gXCJib2x0XCIgPyAxIDogMCxcbiAgICAgICAgaXRlbS5yb3RhdGlvbiA/PyBpdGVtLnRleHR1cmUgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNTdGFydCA/PyBpdGVtLnJpbUludGVuc2l0eSA/PyAwLFxuICAgICAgICBpdGVtLmFyY0VuZCA/PyBpdGVtLnNoYWRvd1N0cmVuZ3RoID8/IDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICBdLCBvZmZzZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI3NjZW5lQnVmZmVyLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB2aXNpYmxlLmxlbmd0aCwgdGltZVNlY29uZHNdKSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNwcmltaXRpdmVCdWZmZXIsIDAsIGRhdGEpO1xuICAgIGNvbnN0IGVuY29kZXIgPSB0aGlzLmRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgIGNvbnN0IHBhc3MgPSBlbmNvZGVyLmJlZ2luUmVuZGVyUGFzcyh7XG4gICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgICB2aWV3OiB0YXJnZXRWaWV3ID8/IHRoaXMuI2NvbnRleHQuZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksXG4gICAgICAgIGNsZWFyVmFsdWU6IHsgcjogMC4wMDYsIGc6IDAuMDA5LCBiOiAwLjAyNSwgYTogMCB9LFxuICAgICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgaWYgKHZpc2libGUubGVuZ3RoKSB7XG4gICAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICAgIHBhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuI2JpbmRHcm91cCk7XG4gICAgICBwYXNzLmRyYXcoNiwgdmlzaWJsZS5sZW5ndGgpO1xuICAgIH1cbiAgICBwYXNzLmVuZCgpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLnN1Ym1pdChbZW5jb2Rlci5maW5pc2goKV0pO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb24gPSBcImZhZGVcIiB8IFwiZXhwYW5kRmFkZVwiIHwgXCJpbXBsb2RlXCIgfCBcInNwYXJrRmFkZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICBjb2xvcj86IHN0cmluZztcbiAgY29yZUNvbG9yPzogc3RyaW5nO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlcjtcbiAgZGV0YWlsPzogbnVtYmVyO1xuICB0dXJidWxlbmNlPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBjb3JlSW50ZW5zaXR5PzogbnVtYmVyO1xuICByaW1JbnRlbnNpdHk/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uVGltZT86IG51bWJlcjtcbiAgZGlzc2lwYXRpb25BY3Rpb24/OiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbjtcbiAgZHJpZnRYPzogbnVtYmVyO1xuICBkcmlmdFk/OiBudW1iZXI7XG4gIHNlZWQ/OiBudW1iZXI7XG4gIGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QgZXh0ZW5kcyBPbWl0PE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsIFwieFwiIHwgXCJ5XCIgfCBcInNpemVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xufVxuXG50eXBlIENsb3VkID0gUmVxdWlyZWQ8T21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcImNvcmVDb2xvclwiPj4gJiB7IGNvcmVDb2xvcjogc3RyaW5nOyBhZ2U6IG51bWJlciB9O1xuXG5jb25zdCBtYXhDbG91ZHMgPSA5NjtcbmNvbnN0IGZsb2F0c1BlckNsb3VkID0gMjQ7XG5cbmNvbnN0IGRlZmF1bHRzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPiA9IHtcbiAgY29sb3I6IFwiIzYzZThmZlwiLFxuICBjb3JlQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGlvbjogMCxcbiAgc2l6ZTogLjI1LFxuICBkZXRhaWw6IDUsXG4gIHR1cmJ1bGVuY2U6IC43NSxcbiAgZ2xvdzogNCxcbiAgY29yZUludGVuc2l0eTogMS40LFxuICByaW1JbnRlbnNpdHk6IC44NSxcbiAgb3BhY2l0eTogMSxcbiAgZGlzc2lwYXRpb25UaW1lOiAuNyxcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwiZXhwYW5kRmFkZVwiLFxuICBkcmlmdFg6IDAsXG4gIGRyaWZ0WTogMCxcbiAgc2VlZDogMCxcbiAgYWdlOiAwLFxufTtcblxuY29uc3QgaGV4ID0gKHZhbHVlOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByYXcgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKS5wYWRFbmQoNiwgXCIwXCIpLnNsaWNlKDAsIDYpO1xuICByZXR1cm4gWzAsIDIsIDRdLm1hcChpbmRleCA9PiBOdW1iZXIucGFyc2VJbnQocmF3LnNsaWNlKGluZGV4LCBpbmRleCArIDIpLCAxNikgLyAyNTUpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IgPSAoY29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IFtyLCBnLCBiXSA9IGhleChjb2xvcik7XG4gIGNvbnN0IGxpZnQgPSAoY2hhbm5lbDogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKChjaGFubmVsICsgKDEgLSBjaGFubmVsKSAqIC43OCkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIHJldHVybiBgIyR7bGlmdChyKX0ke2xpZnQoZyl9JHtsaWZ0KGIpfWA7XG59O1xuXG5jb25zdCBhY3Rpb25WYWx1ZSA9IChhY3Rpb246IE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uKTogbnVtYmVyID0+XG4gIGFjdGlvbiA9PT0gXCJmYWRlXCIgPyAwIDogYWN0aW9uID09PSBcImV4cGFuZEZhZGVcIiA/IDEgOiBhY3Rpb24gPT09IFwiaW1wbG9kZVwiID8gMiA6IDM7XG5cbmNvbnN0IHNoYWRlciA9IC8qIHdnc2wgKi9gXG5zdHJ1Y3QgQ2xvdWQge1xuICBwb3M6IHZlYzJmLFxuICB2ZWxvY2l0eTogdmVjMmYsXG4gIGFnZTogZjMyLFxuICBsaWZlOiBmMzIsXG4gIHNpemU6IGYzMixcbiAgcm90YXRpb246IGYzMixcbiAgc2VlZDogZjMyLFxuICBhY3Rpb246IGYzMixcbiAgY29sb3I6IHZlYzRmLFxuICBjb3JlOiB2ZWM0ZixcbiAgdHVuaW5nOiB2ZWM0Zixcbn1cbnN0cnVjdCBHbG9iYWxzIHtcbiAgYXNwZWN0OiBmMzIsXG4gIHRpbWU6IGYzMixcbiAgY291bnQ6IGYzMixcbiAgYmFja2dyb3VuZDogZjMyLFxufVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBnbG9iYWxzOiBHbG9iYWxzO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBjbG91ZHM6IGFycmF5PENsb3VkPjtcblxuZm4gaGFzaChwOiB2ZWMyZikgLT4gZjMyIHtcbiAgcmV0dXJuIGZyYWN0KHNpbihkb3QocCwgdmVjMmYoMTI3LjEsIDMxMS43KSkpICogNDM3NTguNTQ1MzEyMyk7XG59XG5mbiBub2lzZShwOiB2ZWMyZikgLT4gZjMyIHtcbiAgbGV0IGkgPSBmbG9vcihwKTtcbiAgbGV0IGYgPSBmcmFjdChwKTtcbiAgbGV0IHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgcmV0dXJuIG1peChtaXgoaGFzaChpKSwgaGFzaChpICsgdmVjMmYoMSwwKSksIHUueCksIG1peChoYXNoKGkgKyB2ZWMyZigwLDEpKSwgaGFzaChpICsgdmVjMmYoMSwxKSksIHUueCksIHUueSk7XG59XG5mbiBmYm0ocDogdmVjMmYsIG9jdGF2ZXM6IGYzMikgLT4gZjMyIHtcbiAgdmFyIHYgPSAwLjA7XG4gIHZhciBhID0gMC41O1xuICB2YXIgcSA9IHA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgaWYgKGYzMihpKSA+PSBvY3RhdmVzKSB7IGJyZWFrOyB9XG4gICAgdiArPSBhICogbm9pc2UocSk7XG4gICAgcSA9IHEgKiAyLjAzICsgdmVjMmYoNi45LCAzLjcpO1xuICAgIGEgKj0gMC41MjtcbiAgfVxuICByZXR1cm4gdjtcbn1cbmZuIHJvdGF0ZShwOiB2ZWMyZiwgYTogZjMyKSAtPiB2ZWMyZiB7XG4gIGxldCBjID0gY29zKGEpO1xuICBsZXQgcyA9IHNpbihhKTtcbiAgcmV0dXJuIHZlYzJmKHAueCAqIGMgLSBwLnkgKiBzLCBwLnggKiBzICsgcC55ICogYyk7XG59XG5zdHJ1Y3QgT3V0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIGxvY2FsOiB2ZWMyZixcbiAgQGxvY2F0aW9uKDEpIEBpbnRlcnBvbGF0ZShmbGF0KSBpbnN0YW5jZTogdTMyLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKEBidWlsdGluKHZlcnRleF9pbmRleCkgdmk6IHUzMiwgQGJ1aWx0aW4oaW5zdGFuY2VfaW5kZXgpIGluc3RhbmNlOiB1MzIpIC0+IE91dCB7XG4gIGxldCBjb3JuZXJzID0gYXJyYXk8dmVjMmYsIDY+KFxuICAgIHZlYzJmKC0xLC0xKSwgdmVjMmYoMSwtMSksIHZlYzJmKC0xLDEpLFxuICAgIHZlYzJmKC0xLDEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoMSwxKVxuICApO1xuICBsZXQgYyA9IGNsb3Vkc1tpbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGFjdGlvblNjYWxlID0gc2VsZWN0KDEuMCArIGxpZmVUICogMS44NSwgMS4wIC0gbGlmZVQgKiAuNjIsIGMuYWN0aW9uID4gMS41ICYmIGMuYWN0aW9uIDwgMi41KTtcbiAgbGV0IHJhZGl1cyA9IG1heCguMDAxLCBjLnNpemUgKiBhY3Rpb25TY2FsZSkgKiAyLjM1O1xuICB2YXIgY2VudGVyID0gYy5wb3MgKyBjLnZlbG9jaXR5ICogYy5hZ2U7XG4gIGNlbnRlci54ICo9IGdsb2JhbHMuYXNwZWN0O1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZpXTtcbiAgbGV0IHAgPSBjZW50ZXIgKyBsb2NhbCAqIHJhZGl1cztcbiAgdmFyIG86IE91dDtcbiAgby5wb3NpdGlvbiA9IHZlYzRmKHAueCAvIGdsb2JhbHMuYXNwZWN0LCBwLnksIDAsIDEpO1xuICBvLmxvY2FsID0gbG9jYWwgKiAyLjM1O1xuICBvLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIHJldHVybiBvO1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgYyA9IGNsb3Vkc1tpbnB1dC5pbnN0YW5jZV07XG4gIGxldCBsaWZlVCA9IGNsYW1wKGMuYWdlIC8gbWF4KGMubGlmZSwgLjAwMSksIDAuMCwgMS4wKTtcbiAgbGV0IGxvY2FsID0gcm90YXRlKGlucHV0LmxvY2FsLCAtYy5yb3RhdGlvbiAtIGxpZmVUICogLjQ1KTtcbiAgbGV0IHIgPSBsZW5ndGgobG9jYWwpO1xuICBpZiAociA+PSAyLjM1KSB7IGRpc2NhcmQ7IH1cbiAgbGV0IGRldGFpbCA9IGNsYW1wKGMudHVuaW5nLngsIDEuMCwgNy4wKTtcbiAgbGV0IHR1cmJ1bGVuY2UgPSBjLnR1bmluZy55O1xuICBsZXQgd2lzcHkgPSBmYm0obG9jYWwgKiAoMS43ICsgZGV0YWlsICogLjE2KSArIHZlYzJmKGMuc2VlZCwgYy5zZWVkICogLjcxKSArIGdsb2JhbHMudGltZSAqIHZlYzJmKC4xNiwgLjA5KSAqIHR1cmJ1bGVuY2UsIG1pbihkZXRhaWwsIDQuMCkpO1xuICBsZXQgY29yZSA9IGV4cCgtciAqIHIgKiAoMS4yICsgYy50dW5pbmcueiAqIC4yMikpO1xuICBsZXQgcmltID0gZXhwKC1hYnMociAtIC43MikgKiAzLjYpO1xuICBsZXQgc3BhcmsgPSBwb3cobWF4KDAuMCwgc2luKHdpc3B5ICogMTYuMCArIGMuc2VlZCArIGdsb2JhbHMudGltZSAqIDkuMCkpLCAxNC4wKSAqIHNlbGVjdCgwLjAsIDEuMCwgYy5hY3Rpb24gPiAyLjUpO1xuICBsZXQgZGlzc2lwYXRlID0gcG93KDEuMCAtIGxpZmVULCBzZWxlY3QoMS40NSwgMi4zNSwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IHJpbURpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDIuNywgMy44LCBjLmFjdGlvbiA+IDIuNSkpO1xuICBsZXQgZWRnZUZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKDEuNzUsIDIuMzUsIHIpO1xuICBsZXQgZGVuc2l0eSA9IChjb3JlICogLjcyICsgcmltICogLjI0ICogcmltRGlzc2lwYXRlICsgd2lzcHkgKiAuMjIgKyBzcGFyayAqIC41NSkgKiBkaXNzaXBhdGUgKiBjLnR1bmluZy53ICogZWRnZUZhZGU7XG4gIGxldCBob3RDb3JlID0gYy5jb3JlLnJnYiAqIGNvcmUgKiBjLnR1bmluZy56ICogKDEuMCArIHNwYXJrKTtcbiAgbGV0IG5lb25SaW0gPSBjLmNvbG9yLnJnYiAqIChkZW5zaXR5ICogKC43NSArIGMuY29sb3IuYSAqIC4wOCkgKyByaW0gKiByaW1EaXNzaXBhdGUgKiBjLmNvbG9yLmEgKiAuMDgpO1xuICBsZXQgZ2xvdyA9IG5lb25SaW0gKyBob3RDb3JlICogZGVuc2l0eTtcbiAgcmV0dXJuIHZlYzRmKGdsb3csIGNsYW1wKGRlbnNpdHkgKiAuODUgKyBzcGFyayAqIC4yNSwgMC4wLCAxLjApKTtcbn1gO1xuXG5leHBvcnQgY2xhc3MgTmVvbkNsb3VkQnVyc3RBY3RvciB7XG4gIHNldHRpbmdzOiBSZXF1aXJlZDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzPjtcbiAgYWdlID0gMDtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MgPSB7fSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRzLCAuLi5zZXR0aW5ncywgc2VlZDogc2V0dGluZ3Muc2VlZCA/PyBNYXRoLnJhbmRvbSgpICogMTAwMCB9O1xuICB9XG4gIHVwZGF0ZShkdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy5hZ2UgKz0gZHQ7XG4gICAgcmV0dXJuIHRoaXMuYWdlIDwgdGhpcy5zZXR0aW5ncy5kaXNzaXBhdGlvblRpbWU7XG4gIH1cbiAgcmVuZGVySW5zdGFuY2UoKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5zZXR0aW5ncywgc2VlZDogdGhpcy5zZXR0aW5ncy5zZWVkIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIge1xuICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICByZWFkb25seSBkZXZpY2U6IEdQVURldmljZTtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG4gICNwaXBlbGluZTogR1BVUmVuZGVyUGlwZWxpbmU7XG4gICNidWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2dsb2JhbHM6IEdQVUJ1ZmZlcjtcbiAgI2JpbmQ6IEdQVUJpbmRHcm91cDtcbiAgI2xvZ2ljYWxTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyLCBsYWJlbDogXCJOZW9uRmFjdG9yeSBwcm9jZWR1cmFsIGNsb3VkIHZvbHVtZSBzaGFkZXJcIiB9KTtcbiAgICB0aGlzLiNwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICBsYXlvdXQ6IFwiYXV0b1wiLFxuICAgICAgdmVydGV4OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJ2ZXJ0ZXhNYWluXCIgfSxcbiAgICAgIGZyYWdtZW50OiB7IG1vZHVsZSwgZW50cnlQb2ludDogXCJmcmFnbWVudE1haW5cIiwgdGFyZ2V0czogW3sgZm9ybWF0LCBibGVuZDoge1xuICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6IFwib25lXCIsIGRzdEZhY3RvcjogXCJvbmUtbWludXMtc3JjLWFscGhhXCIsIG9wZXJhdGlvbjogXCJhZGRcIiB9LFxuICAgICAgfSB9XSB9LFxuICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIiB9LFxuICAgIH0pO1xuICAgIHRoaXMuI2dsb2JhbHMgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkICogNCwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgICB0aGlzLiNiaW5kID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7IGxheW91dDogdGhpcy4jcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbXG4gICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jZ2xvYmFscyB9IH0sXG4gICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jYnVmZmVyIH0gfSxcbiAgICBdIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIHRoZSBOZW9uRmFjdG9yeSBjbG91ZCBzdWl0ZS5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGNsb3VkczogcmVhZG9ubHkgTmVvbkNsb3VkQnVyc3RTZXR0aW5nc1tdLCB0aW1lU2Vjb25kcyA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCBwYWNrZWQgPSBuZXcgRmxvYXQzMkFycmF5KG1heENsb3VkcyAqIGZsb2F0c1BlckNsb3VkKTtcbiAgICBjbG91ZHMuc2xpY2UoMCwgbWF4Q2xvdWRzKS5mb3JFYWNoKChjbG91ZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGMgPSB7IC4uLmRlZmF1bHRzLCAuLi5jbG91ZCB9O1xuICAgICAgY29uc3QgY29sb3IgPSBoZXgoYy5jb2xvciksIGNvcmUgPSBoZXgoYy5jb3JlQ29sb3IpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJDbG91ZDtcbiAgICAgIHBhY2tlZC5zZXQoW2MueCwgYy55LCBjLmRyaWZ0WCwgYy5kcmlmdFksIGMuYWdlID8/IDAsIGMuZGlzc2lwYXRpb25UaW1lLCBjLnNpemUsIGMucm90YXRpb24sIGMuc2VlZCwgYWN0aW9uVmFsdWUoYy5kaXNzaXBhdGlvbkFjdGlvbiksIDAsIDBdLCBvZmZzZXQpO1xuICAgICAgcGFja2VkLnNldChbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgYy5nbG93LCBjb3JlWzBdLCBjb3JlWzFdLCBjb3JlWzJdLCBjLmNvcmVJbnRlbnNpdHksIGMuZGV0YWlsLCBjLnR1cmJ1bGVuY2UsIGMucmltSW50ZW5zaXR5LCBjLm9wYWNpdHldLCBvZmZzZXQgKyAxMik7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jYnVmZmVyLCAwLCBwYWNrZWQpO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2dsb2JhbHMsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCB0aW1lU2Vjb25kcywgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSwgMF0pKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3MoeyBjb2xvckF0dGFjaG1lbnRzOiBbe1xuICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sXG4gICAgICBsb2FkT3A6IHByZXNlcnZlQ29sb3IgPyBcImxvYWRcIiA6IFwiY2xlYXJcIixcbiAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICB9XSB9KTtcbiAgICBwYXNzLnNldFBpcGVsaW5lKHRoaXMuI3BpcGVsaW5lKTtcbiAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kKTtcbiAgICBwYXNzLmRyYXcoNiwgTWF0aC5taW4oY2xvdWRzLmxlbmd0aCwgbWF4Q2xvdWRzKSk7XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gIG1hcFRvcERvd25DbG91ZChjbG91ZDogTmVvblRvcERvd25DbG91ZEJ1cnN0LCBsb2dpY2FsV2lkdGg6IG51bWJlciwgbG9naWNhbEhlaWdodDogbnVtYmVyKTogTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyB7XG4gICAgY29uc3QgYXNwZWN0ID0gbG9naWNhbFdpZHRoIC8gbG9naWNhbEhlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xvdWQsXG4gICAgICB4OiAoY2xvdWQueCAvIGxvZ2ljYWxXaWR0aCAtIC41KSAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIHk6ICguNSAtIGNsb3VkLnkgLyBsb2dpY2FsSGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNpemU6IGNsb3VkLnNpemUgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgICAgZHJpZnRYOiAoY2xvdWQuZHJpZnRYID8/IDApIC8gbG9naWNhbFdpZHRoICogYXNwZWN0ICogMi41LFxuICAgICAgZHJpZnRZOiAtKGNsb3VkLmRyaWZ0WSA/PyAwKSAvIGxvZ2ljYWxIZWlnaHQgKiAyLjUsXG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koZGVzdHJveURldmljZSA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLiNidWZmZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuI2dsb2JhbHMuZGVzdHJveSgpO1xuICAgIGlmIChkZXN0cm95RGV2aWNlKSB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cblxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aCkgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLiNsb2dpY2FsU2l6ZS53aWR0aDtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodCkgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKGRldmljZVBpeGVsUmF0aW8gfHwgMSwgMik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogcmF0aW8pKTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIHJhdGlvKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBOZW9uUHJpbWl0aXZlUmVuZGVyZXIsIHR5cGUgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHsgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXIsIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0IH0gZnJvbSBcIi4vY2xvdWQtYnVyc3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNoYXBlIGV4dGVuZHMgT21pdDxOZW9uU2hhcGVJbnN0YW5jZSwgXCJ4XCIgfCBcInlcIiB8IFwic2NhbGVcIj4ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Ub3BEb3duU2NlbmUge1xuICBwcmltaXRpdmVzPzogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdO1xuICBjbG91ZHM/OiByZWFkb25seSBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXTtcbiAgc2hhcGVzPzogcmVhZG9ubHkgTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlUmVuZGVyZXI7XG4gICNjbG91ZHM6IE5lb25DbG91ZEJ1cnN0UmVuZGVyZXI7XG4gICNzaGFwZXM6IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyO1xuICAjd2lkdGg6IG51bWJlcjtcbiAgI2hlaWdodDogbnVtYmVyO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7IHRoaXMuZGV2aWNlID0gZGV2aWNlOyB0aGlzLiNjb250ZXh0ID0gY29udGV4dDsgdGhpcy4jd2lkdGggPSB3aWR0aDsgdGhpcy4jaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMgPSBuZXcgTmVvblByaW1pdGl2ZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI2Nsb3VkcyA9IG5ldyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpLnNldExvZ2ljYWxTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuI3NoYXBlcyA9IG5ldyBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IFByb21pc2U8TmVvblRvcERvd25TY2VuZVJlbmRlcmVyPiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ3B1KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgcmVxdWlyZWQgZm9yIE5lb25GYWN0b3J5IHRvcC1kb3duIHNjZW5lcy5cIik7XG4gICAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICBpZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBhdGlibGUgV2ViR1BVIGFkYXB0ZXIgd2FzIGZvdW5kLlwiKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJncHVcIik7XG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNhbnZhcyBjb250ZXh0LlwiKTtcbiAgICBjb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xuICAgIGNvbnRleHQuY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIgfSk7XG4gICAgcmV0dXJuIG5ldyBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCwgbG9naWNhbFdpZHRoLCBsb2dpY2FsSGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzY2VuZTogTmVvblRvcERvd25TY2VuZSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDApOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpO1xuICAgIHRoaXMuI3ByaW1pdGl2ZXMucmVuZGVyKFsuLi4oc2NlbmUucHJpbWl0aXZlcyA/PyBbXSldLCB0aW1lU2Vjb25kcywgZmFsc2UsIHRhcmdldCk7XG4gICAgY29uc3QgY2xvdWRzID0gc2NlbmUuY2xvdWRzID8/IFtdO1xuICAgIGNvbnN0IGFzcGVjdCA9IHRoaXMuI3dpZHRoIC8gdGhpcy4jaGVpZ2h0O1xuICAgIGNvbnN0IHNoYXBlcyA9IHNjZW5lLnNoYXBlcyA/PyBbXTtcbiAgICBpZiAoc2hhcGVzLmxlbmd0aCkgdGhpcy4jc2hhcGVzLnJlbmRlcihzaGFwZXMubWFwKHNoYXBlID0+ICh7XG4gICAgICAuLi5zaGFwZSxcbiAgICAgIHg6IChzaGFwZS54IC8gdGhpcy4jd2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBzaGFwZS55IC8gdGhpcy4jaGVpZ2h0KSAqIDIuNSxcbiAgICAgIHNjYWxlOiAoc2hhcGUuaGVpZ2h0ID8/IHNoYXBlLnNpemUpIC8gdGhpcy4jaGVpZ2h0ICogMi41LFxuICAgICAgc2NhbGVYOiAoc2hhcGUuc2NhbGVYID8/IDEpICogKChzaGFwZS53aWR0aCA/PyBzaGFwZS5zaXplKSAvIChzaGFwZS5oZWlnaHQgPz8gc2hhcGUuc2l6ZSkpLFxuICAgIH0pKSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgICBpZiAoY2xvdWRzLmxlbmd0aCkgdGhpcy4jY2xvdWRzLnJlbmRlcihjbG91ZHMubWFwKGNsb3VkID0+IHRoaXMuI2Nsb3Vkcy5tYXBUb3BEb3duQ2xvdWQoY2xvdWQsIHRoaXMuI3dpZHRoLCB0aGlzLiNoZWlnaHQpKSwgdGltZVNlY29uZHMsIHRydWUpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiNzaGFwZXMuZGVzdHJveShmYWxzZSk7XG4gICAgdGhpcy4jY2xvdWRzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB0eXBlIHsgTmVvblRvcERvd25TY2VuZSB9IGZyb20gXCIuL3RvcC1kb3duLXNjZW5lXCI7XG5cbmV4cG9ydCBjb25zdCBsYW5lUnVubmVyU2NlbmVJZHMgPSBbXCJuZW9uSGFsbFwiLCBcImF1cm9yYVwiLCBcImNyeXN0YWxGb3JnZVwiLCBcInZvaWRHYXJkZW5cIiwgXCJzb2xhckFycmF5XCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCA9IHR5cGVvZiBsYW5lUnVubmVyU2NlbmVJZHNbbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVPcHRpb25zIHtcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB0aW1lTXM6IG51bWJlcjtcbn1cblxuY29uc3Qgc2NlbmVOYW1lczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCBzdHJpbmc+ID0ge1xuICBuZW9uSGFsbDogXCJOZW9uIEhhbGxcIixcbiAgYXVyb3JhOiBcIkF1cm9yYVwiLFxuICBjcnlzdGFsRm9yZ2U6IFwiQ3J5c3RhbCBGb3JnZVwiLFxuICB2b2lkR2FyZGVuOiBcIlZvaWQgR2FyZGVuXCIsXG4gIHNvbGFyQXJyYXk6IFwiU29sYXIgQXJyYXlcIixcbn07XG5cbmNvbnN0IGhhbGxCb3R0b21XaWR0aCA9IDAuOTI7XG5jb25zdCBoYWxsRmxvb3JDb2xvciA9IFwiIzA1MTAxZlwiO1xuY29uc3QgaGFsbERlZXBCbHVlID0gXCIjMTIzNTZhXCI7XG5jb25zdCBoYWxsTXV0ZWRCbHVlID0gXCIjMWI0YzhkXCI7XG5jb25zdCBoYWxsTXV0ZWRDeWFuID0gXCIjMmFjNGRjXCI7XG5jb25zdCBoYWxsTXV0ZWRWaW9sZXQgPSBcIiM0NTMwNzlcIjtcbmNvbnN0IGhhbGxBY2NlbnRQaW5rID0gXCIjYTczNTdlXCI7XG5jb25zdCBoYWxsRW5lcmd5U3BlZWQgPSAwLjAwMTc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSB7XG4gIGZsb29yOiBzdHJpbmc7XG4gIGJvdW5kYXJ5OiBzdHJpbmc7XG4gIGxhbmU6IHN0cmluZztcbiAgY2VudGVyTGFuZTogc3RyaW5nO1xuICBhY2NlbnQ6IHN0cmluZztcbiAgbGFuZUhpZ2hsaWdodDogc3RyaW5nO1xufVxuXG5jb25zdCBzdGFuZGFyZExhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogaGFsbEZsb29yQ29sb3IsXG4gIGJvdW5kYXJ5OiBoYWxsRGVlcEJsdWUsXG4gIGxhbmU6IGhhbGxNdXRlZEJsdWUsXG4gIGNlbnRlckxhbmU6IGhhbGxNdXRlZFZpb2xldCxcbiAgYWNjZW50OiBoYWxsQWNjZW50UGluayxcbiAgbGFuZUhpZ2hsaWdodDogaGFsbE11dGVkQ3lhbixcbn07XG5cbmNvbnN0IGF1cm9yYUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDMxMTBmXCIsXG4gIGJvdW5kYXJ5OiBcIiMxNzhjOTJcIixcbiAgbGFuZTogXCIjMTdkN2IzXCIsXG4gIGNlbnRlckxhbmU6IFwiIzhmNTZmZlwiLFxuICBhY2NlbnQ6IFwiI2ZmNGZjN1wiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNiOWZmNmFcIixcbn07XG5cbmNvbnN0IGNyeXN0YWxGb3JnZUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDcxMDE4XCIsXG4gIGJvdW5kYXJ5OiBcIiMyNmQ3ZmZcIixcbiAgbGFuZTogXCIjNjNmMWZmXCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNWZkOFwiLFxuICBhY2NlbnQ6IFwiI2ZmYjg0ZFwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNmNGZiZmZcIixcbn07XG5cbmNvbnN0IHZvaWRHYXJkZW5MYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzA4MDgxOFwiLFxuICBib3VuZGFyeTogXCIjNmY1M2ZmXCIsXG4gIGxhbmU6IFwiIzM1ZThiNlwiLFxuICBjZW50ZXJMYW5lOiBcIiNmZjRmYzdcIixcbiAgYWNjZW50OiBcIiNiOWZmNmFcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjOWJkN2ZmXCIsXG59O1xuXG5jb25zdCBzb2xhckFycmF5TGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMxMTBjMDdcIixcbiAgYm91bmRhcnk6IFwiI2ZmOWUzOFwiLFxuICBsYW5lOiBcIiNmZmQ0NWFcIixcbiAgY2VudGVyTGFuZTogXCIjMjZkN2ZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZjY2XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2ZmZjZiOFwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmVSdW5uZXJTY2VuZU5hbWUoc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiBzdHJpbmcge1xuICByZXR1cm4gc2NlbmVOYW1lc1tzY2VuZUlkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGFuZVJ1bm5lclNjZW5lSWQodmFsdWU6IHN0cmluZyk6IHZhbHVlIGlzIExhbmVSdW5uZXJTY2VuZUlkIHtcbiAgcmV0dXJuIChsYW5lUnVubmVyU2NlbmVJZHMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmVSdW5uZXJTY2VuZShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIHJldHVybiBzY2VuZUNyZWF0b3JzW29wdGlvbnMuc2NlbmVJZF0ob3B0aW9ucyk7XG59XG5cbmNvbnN0IHNjZW5lQ3JlYXRvcnM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpID0+IE5lb25Ub3BEb3duU2NlbmU+ID0ge1xuICBuZW9uSGFsbDogY3JlYXRlTmVvbkhhbGwsXG4gIGF1cm9yYTogY3JlYXRlQXVyb3JhLFxuICBjcnlzdGFsRm9yZ2U6IG9wdGlvbnMgPT4gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnMsIGNyeXN0YWxGb3JnZUxhbmVSdW5uZXJQYWxldHRlLCBhZGRDcnlzdGFsRm9yZ2VEZXRhaWxzKSxcbiAgdm9pZEdhcmRlbjogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlLCBhZGRWb2lkR2FyZGVuRGV0YWlscyksXG4gIHNvbGFyQXJyYXk6IG9wdGlvbnMgPT4gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnMsIHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZSwgYWRkU29sYXJBcnJheURldGFpbHMpLFxufTtcblxuZnVuY3Rpb24gY3JlYXRlTmVvbkhhbGwob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBzdGFuZGFyZExhbmVSdW5uZXJQYWxldHRlLCB0aW1lTXMpO1xuICBhZGRIYWxsTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxGbG9vckdseXBocyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEhvcml6b25EZXRhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsU2lkZVBhbmVscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEVuZXJneVRyYWNlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF1cm9yYShvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIGF1cm9yYUxhbmVSdW5uZXJQYWxldHRlLCB0aW1lTXMpO1xuICBhZGRBdXJvcmFMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhR3JvdW5kRmxhcmVzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFIb3Jpem9uVmVpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUoXG4gIG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMsXG4gIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsXG4gIGFkZERldGFpbHM6IChpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpID0+IHZvaWQsXG4pOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZFRoZW1lZExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGREZXRhaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICBjb25zdCB2cCA9IHsgeDogd2lkdGggKiAuNSwgeTogLWhlaWdodCB9O1xuICBjb25zdCBib3R0b21ZID0gaGVpZ2h0ICogLjk4NTtcbiAgY29uc3QgYm90dG9tSGFsZiA9IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoICogLjU7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHZwLFxuICAgIGxlZnRCb3R0b206IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICByaWdodEJvdHRvbTogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIGxlZnRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gICAgcmlnaHRIb3Jpem9uOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiB2cC55IH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKFxuICBpdGVtczogTmVvblByaW1pdGl2ZVtdLFxuICBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPixcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgdGltZU1zOiBudW1iZXIsXG4pOiB2b2lkIHtcbiAgYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGRMYW5lUnVubmVyUmFpbHMoaXRlbXMsIGdlb21ldHJ5LCBwYWxldHRlKTtcbiAgYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHB1bHNlID0gLjU1ICsgTWF0aC5zaW4odGltZU1zICogaGFsbEVuZXJneVNwZWVkKSAqIC4yO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgKiAuNDIsIHdpZHRoOiB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgKiAxLjA4LCBjb2xvcjogcGFsZXR0ZS5mbG9vciwgc2Vjb25kYXJ5Q29sb3I6IFwiIzAyMDUwZFwiLCBnbG93OiAuMDUsIGludGVuc2l0eTogLjIzLCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuOSwgd2lkdGg6IHdpZHRoICogLjM0LCBoZWlnaHQ6IDEuNCwgY29sb3I6IHBhbGV0dGUuYm91bmRhcnksIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGdsb3c6IC4zLCBpbnRlbnNpdHk6IC4xOCArIHB1bHNlICogLjA3LCBzaGFwZTogXCJib2x0XCIgfSk7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IC1oZWlnaHQgKiAuNzgsIHdpZHRoOiB3aWR0aCAqIC4xOCwgaGVpZ2h0OiAxLjIsIGNvbG9yOiBwYWxldHRlLmFjY2VudCwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUuY2VudGVyTGFuZSwgZ2xvdzogLjI0LCBpbnRlbnNpdHk6IC4wOCwgc2hhcGU6IFwiYm9sdFwiIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyUmFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3QgW2JvdHRvbSwgaG9yaXpvbl0gb2YgW1tsZWZ0Qm90dG9tLCBsZWZ0SG9yaXpvbl0sIFtyaWdodEJvdHRvbSwgcmlnaHRIb3Jpem9uXV0gYXMgY29uc3QpIHtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmJvdW5kYXJ5LCAuNDgsIDYuNSk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCAuNTYsIDEuMyk7XG4gIH1cblxuICBmb3IgKGxldCBsYW5lID0gMTsgbGFuZSA8PSAzOyBsYW5lKyspIHtcbiAgICBjb25zdCB1ID0gbGFuZSAvIDQ7XG4gICAgY29uc3Qgc3RhcnQgPSBsZXJwUG9pbnQobGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIHUpO1xuICAgIGNvbnN0IGVuZCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBjb2xvciA9IGxhbmUgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmxhbmU7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIGNvbG9yLCBsYW5lID09PSAyID8gLjI4IDogLjIsIDMuNCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHN0YXJ0LCBlbmQsIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgbGFuZSA9PT0gMiA/IC4yNiA6IC4xOCwgLjkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTU7IHJvdysrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByb3dQdWxzZSA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDQ4MCArIHJvdyAqIC43OCkgKiAuNDI7XG4gICAgY29uc3Qgc3VyZ2UgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lTXMgLyA4MjAgLSByb3cgKiAuNzIpKTtcbiAgICBjb25zdCBjb2xvciA9IHJvdyAlIDQgPT09IDAgPyBwYWxldHRlLmxhbmVIaWdobGlnaHQgOiByb3cgJSA0ID09PSAxID8gcGFsZXR0ZS5sYW5lIDogcm93ICUgNCA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUuYWNjZW50O1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMTUgKyB0ICogLjIzKSAqICguNTUgKyByb3dQdWxzZSAqIC40NSkgKyBzdXJnZSAqIC4wNTUsIDMuMSArIHQgKiAyKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjIgKyB0ICogLjI3KSAqICguNTIgKyByb3dQdWxzZSAqIC40OCkgKyBzdXJnZSAqIC4wNywgLjc1ICsgdCAqIC42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDc7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxOTAwICsgcHVsc2VJbmRleCAvIDcpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjU1KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjM0ICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgaGFsbE11dGVkQ3lhbiwgb3BhY2l0eSwgMS4xICsgdCAqIDEuNCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEZsb29yR2x5cGhzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3Qgcm93cyA9IFsyLCA0LCA2LCA4LCAxMCwgMTJdO1xuICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHJvdyAvIDE0LCAxLjgyKTtcbiAgICBjb25zdCBjZW50ZXIgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCAuNSk7XG4gICAgY29uc3Qgc2NhbGUgPSAuNDUgKyB0ICogMS4xO1xuICAgIGNvbnN0IHB1bHNlID0gLjQ4ICsgTWF0aC5zaW4odGltZU1zIC8gNzIwICsgcm93ICogMS4zKSAqIC4yNDtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGNlbnRlci54LFxuICAgICAgeTogY2VudGVyLnksXG4gICAgICB3aWR0aDogNyAqIHNjYWxlLFxuICAgICAgaGVpZ2h0OiA3ICogc2NhbGUsXG4gICAgICBjb2xvcjogcm93ICUgNCA9PT0gMCA/IGhhbGxNdXRlZFZpb2xldCA6IGhhbGxEZWVwQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiByb3cgJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMjQgKyBwdWxzZSAqIC4xNixcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsSG9yaXpvbkRldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQsIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCBnbG93UHVsc2UgPSAuNzUgKyBNYXRoLnNpbih0aW1lTXMgLyA2ODApICogLjI1O1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIHsgeDogdnAueCArIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCBoYWxsQWNjZW50UGluaywgLjIgKyBnbG93UHVsc2UgKiAuMDgsIDEuMSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54IC0gd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZEN5YW4sIC4xNiwgLjg1KTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCArIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkVmlvbGV0LCAuMTYsIC44NSk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4ICsgLjUpIC8gODtcbiAgICBjb25zdCBiYXNlID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IHNpZGVCaWFzID0gTWF0aC5hYnModSAtIC41KSAqIDI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBiYXNlLngsXG4gICAgICB5OiBiYXNlLnkgLSBoZWlnaHQgKiAoLjAxOCArIHNpZGVCaWFzICogLjAxOCksXG4gICAgICB3aWR0aDogMSArIHNpZGVCaWFzICogLjcsXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgc2lkZUJpYXMgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxBY2NlbnRQaW5rLFxuICAgICAgZ2xvdzogLjI0LFxuICAgICAgaW50ZW5zaXR5OiAuMDcgKyBnbG93UHVsc2UgKiAuMDM1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKGluZGV4ICogMS43KSAqIC4xMixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsU2lkZVBhbmVscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAoY29uc3Qgc2lkZSBvZiBbMCwgMV0pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTAsIDEuNjgpO1xuICAgICAgY29uc3QgcmFpbCA9IHNpZGUgPT09IDBcbiAgICAgICAgPyBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpXG4gICAgICAgIDogbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgICAgY29uc3Qgb3V0d2FyZCA9IHNpZGUgPT09IDAgPyAtMSA6IDE7XG4gICAgICBjb25zdCBmbGlja2VyID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNjAwICsgaW5kZXggKiAxLjUgKyBzaWRlKSAqIC4yODtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB4OiByYWlsLnggKyBvdXR3YXJkICogd2lkdGggKiAoLjAzNSArIHQgKiAuMDYpLFxuICAgICAgICB5OiByYWlsLnkgLSBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDEyKSxcbiAgICAgICAgd2lkdGg6IDEuMiArIHQgKiAxLjIsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyB0ICogLjA4KSxcbiAgICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAxID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICAgIGdsb3c6IC4zLFxuICAgICAgICBpbnRlbnNpdHk6ICguMDc1ICsgdCAqIC4wNjUpICogZmxpY2tlcixcbiAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxFbmVyZ3lUcmFjZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjQ7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4xMiArICgoaW5kZXggKiAzNykgJSAxMDApIC8gMTE2O1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS43KSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA9PT0gMCA/IC4xOCA6IGluZGV4ICUgNCA9PT0gMSA/IC4zNCA6IGluZGV4ICUgNCA9PT0gMiA/IC42NiA6IC44MjtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgc2lkZSArIE1hdGguc2luKGluZGV4ICogMS43ICsgdGltZU1zIC8gMTcwMCkgKiAuMDM1KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gMzkwICsgaW5kZXggKiAxLjEpICogLjM4O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogLjggKyBpbmRleCAlIDMgKiAuNSxcbiAgICAgIGhlaWdodDogMTAgKyBpbmRleCAlIDUgKiA3LFxuICAgICAgY29sb3I6IGluZGV4ICUgNSA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaW5kZXggJSAzID09PSAwID8gaGFsbE11dGVkQ3lhbiA6IGhhbGxNdXRlZEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgKGluZGV4ICUgNCkgKiAuMDE4KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDk7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxNTUwICsgcHVsc2VJbmRleCAvIDkpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjQ4KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gLjMyICogKDEgLSB0cmF2ZWwpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgcHVsc2VJbmRleCAlIDIgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiIzE3ZDdiM1wiLCBvcGFjaXR5LCAxICsgdCAqIDEuNyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhR3JvdW5kRmxhcmVzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMDggKyAoKGluZGV4ICogMjkpICUgMTAwKSAvIDExMjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNjIpKTtcbiAgICBjb25zdCBsYW5lU2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4yMiA6IC43ODtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IGxlcnBQb2ludChsZWZ0LCByaWdodCwgbGFuZVNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuMSArIHRpbWVNcyAvIDE4MDApICogLjA0KTtcbiAgICBjb25zdCBzaGltbWVyID0gLjU1ICsgTWF0aC5zaW4odGltZU1zIC8gNDMwICsgaW5kZXggKiAxLjMpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAwOSArIHQgKiAuMDEyKSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTggKyB0ICogLjAzNSksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBpbmRleCAlIDMgPT09IDEgPyBcIiMxN2Q3YjNcIiA6IFwiIzhmNTZmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNikgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IGluZGV4ICUgNCA9PT0gMCA/IFwiZGlhbW9uZFwiIDogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4odGltZU1zIC8gMTIwMCArIGluZGV4KSAqIC4xOCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFIb3Jpem9uVmVpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgdnAsIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNzsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggLSAzKSAvIDY7XG4gICAgY29uc3Qgd2F2ZSA9IE1hdGguc2luKHRpbWVNcyAvIDExMDAgKyBpbmRleCAqIC45KTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHZwLnggKyB1ICogd2lkdGggKiAuMzYsXG4gICAgICB5OiB2cC55ICsgaGVpZ2h0ICogKC4wNzUgKyBpbmRleCAqIC4wMDYpLFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMzUgKyBpbmRleCAqIC4wMDQpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjEyICsgTWF0aC5hYnMod2F2ZSkgKiAuMDMpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjA0NSArIE1hdGguYWJzKHdhdmUpICogLjAyNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiB1ICogLjI4ICsgd2F2ZSAqIC4wOCxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUaGVtZWRMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgODsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE3MDAgKyBwdWxzZUluZGV4IC8gOCkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHBhbGV0dGUuYWNjZW50LCAuMjggKiAoMSAtIHRyYXZlbCksIDEuMSArIHQgKiAxLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENyeXN0YWxGb3JnZURldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQsIHZwIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE2OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTcsIDEuNTUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMTQgOiAuODY7XG4gICAgY29uc3QgZWRnZSA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IGdsaW50ID0gLjU1ICsgTWF0aC5zaW4odGltZU1zIC8gNTIwICsgaW5kZXggKiAxLjE3KSAqIC4zNTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGVkZ2UueCxcbiAgICAgIHk6IGVkZ2UueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDEyICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAyNSArIHQgKiAuMDYpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2ZmYjg0ZFwiIDogXCIjNjNmMWZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSA0ID09PSAwID8gXCIjZmY1ZmQ4XCIgOiBcIiNmNGZiZmZcIixcbiAgICAgIGdsb3c6IC4zOCxcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDU1KSAqIGdsaW50LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgICAgcm90YXRpb246IChzaWRlIDwgLjUgPyAtLjIyIDogLjIyKSArIE1hdGguc2luKHRpbWVNcyAvIDE0MDAgKyBpbmRleCkgKiAuMDgsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMywgeTogdnAueSArIGhlaWdodCAqIC4wNDUgfSwgXCIjZmZiODRkXCIsIC4yMiwgMS4zKTtcbn1cblxuZnVuY3Rpb24gYWRkVm9pZEdhcmRlbkRldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQsIHZwIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KC4wOCArICgoaW5kZXggKiAyMykgJSAxMDApIC8gMTEyLCAxLjY1KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0IDwgMiA/IC4xOCA6IC44MjtcbiAgICBjb25zdCBjZW50ZXIgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCBzaWRlICsgTWF0aC5zaW4odGltZU1zIC8gMTkwMCArIGluZGV4KSAqIC4wMzUpO1xuICAgIGNvbnN0IGJsb29tID0gLjUgKyBNYXRoLnNpbih0aW1lTXMgLyA3NjAgKyBpbmRleCAqIC44KSAqIC4zMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGNlbnRlci54LFxuICAgICAgeTogY2VudGVyLnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAwNiArIHQgKiAuMDE0KSxcbiAgICAgIGhlaWdodDogd2lkdGggKiAoLjAwNiArIHQgKiAuMDE0KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiIzM1ZThiNlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMiA9PT0gMCA/IFwiIzZmNTNmZlwiIDogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuNDIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyB0ICogLjA1KSAqIGJsb29tLFxuICAgICAgc2hhcGU6IGluZGV4ICUgMiA9PT0gMCA/IFwiZGlhbW9uZFwiIDogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4odGltZU1zIC8gMTIwMCArIGluZGV4KSAqIC40LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xOCwgeTogdnAueSArIGhlaWdodCAqIC4wNyB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xOCwgeTogdnAueSArIGhlaWdodCAqIC4wNyB9LCBcIiMzNWU4YjZcIiwgLjE4LCAxLjEpO1xufVxuXG5mdW5jdGlvbiBhZGRTb2xhckFycmF5RGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxOSwgMS40OCk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xIDogLjk7XG4gICAgY29uc3QgbW91bnQgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCBzaWRlKTtcbiAgICBjb25zdCBwdWxzZSA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDYxMCArIGluZGV4ICogMS4wNSkgKiAuMztcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IG1vdW50LngsXG4gICAgICB5OiBtb3VudC55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTggKyB0ICogLjAzNSksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDEyICsgdCAqIC4wMjQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2ZmZDQ1YVwiIDogXCIjZmY5ZTM4XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSA0ID09PSAwID8gXCIjMjZkN2ZmXCIgOiBcIiNmZjRmNjZcIixcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDU1KSAqIHB1bHNlLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IHNpZGUgPCAuNSA/IC0uMzggOiAuMzgsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMSwgeTogdnAueSArIGhlaWdodCAqIC4wMzUgfSwgXCIjZmZmNmI4XCIsIC4yNCwgMS40KTtcbn1cblxuZnVuY3Rpb24gYWRkR2xvd2luZ0xpbmUoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGNvbG9yOiBzdHJpbmcsIGFscGhhOiBudW1iZXIsIHRoaWNrbmVzczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGR4ID0gYi54IC0gYS54O1xuICBjb25zdCBkeSA9IGIueSAtIGEueTtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBpdGVtcy5wdXNoKHtcbiAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgIHdpZHRoOiB0aGlja25lc3MsXG4gICAgaGVpZ2h0OiBsZW5ndGggLyAyLFxuICAgIGNvbG9yLFxuICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS53aGl0ZUhvdCxcbiAgICBnbG93OiAuMzIsXG4gICAgaW50ZW5zaXR5OiBhbHBoYSxcbiAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsZXJwUG9pbnQoYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHQ6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIHJldHVybiB7IHg6IGEueCArIChiLnggLSBhLngpICogdCwgeTogYS55ICsgKGIueSAtIGEueSkgKiB0IH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25Qcm9qZWN0aWxlU2hhcGUgPSBcImRhcnRcIiB8IFwibmVlZGxlXCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblByb2plY3RpbGVPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WD86IG51bWJlcjtcbiAgdmVsb2NpdHlZPzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGxlbmd0aD86IG51bWJlcjtcbiAgdHJhaWxMZW5ndGg/OiBudW1iZXI7XG4gIHRyYWlsV2lkdGg/OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgc2hhcGU/OiBOZW9uUHJvamVjdGlsZVNoYXBlO1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG4gIGdsb3c/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJvdGF0aW9uRm9yU2NyZWVuRm9yd2FyZFZlY3RvciA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoeCwgeSkgfHwgMTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeCAvIGxlbmd0aCwgLXkgLyBsZW5ndGgpO1xufTtcblxuZXhwb3J0IGNsYXNzIE5lb25Qcm9qZWN0aWxlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WDogbnVtYmVyO1xuICB2ZWxvY2l0eVk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGxlbmd0aDogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFpbFdpZHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRyYWlsQ29sb3I6IHN0cmluZztcbiAgY29yZUNvbG9yOiBzdHJpbmc7XG4gIHNoYXBlOiBOZW9uUHJvamVjdGlsZVNoYXBlO1xuICBpbnRlbnNpdHk6IG51bWJlcjtcbiAgZ2xvdzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25Qcm9qZWN0aWxlT3B0aW9ucykge1xuICAgIHRoaXMueD1vcHRpb25zLng7dGhpcy55PW9wdGlvbnMueTt0aGlzLnZlbG9jaXR5WD1vcHRpb25zLnZlbG9jaXR5WD8/MDt0aGlzLnZlbG9jaXR5WT1vcHRpb25zLnZlbG9jaXR5WT8/LTUwMDtcbiAgICB0aGlzLnJhZGl1cz1vcHRpb25zLnJhZGl1cz8/Mzt0aGlzLmxlbmd0aD1vcHRpb25zLmxlbmd0aD8/OTt0aGlzLnRyYWlsTGVuZ3RoPW9wdGlvbnMudHJhaWxMZW5ndGg/PzE2O3RoaXMudHJhaWxXaWR0aD1vcHRpb25zLnRyYWlsV2lkdGg/PzEuNTtcbiAgICB0aGlzLmNvbG9yPW9wdGlvbnMuY29sb3I7dGhpcy50cmFpbENvbG9yPW9wdGlvbnMudHJhaWxDb2xvcj8/b3B0aW9ucy5jb2xvcjt0aGlzLmNvcmVDb2xvcj1vcHRpb25zLmNvcmVDb2xvcj8/b3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLnNoYXBlPW9wdGlvbnMuc2hhcGU/P1wiZGFydFwiO3RoaXMuaW50ZW5zaXR5PW9wdGlvbnMuaW50ZW5zaXR5Pz8xO3RoaXMuZ2xvdz1vcHRpb25zLmdsb3c/Py43NTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5WCAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eVkgKiBkZWx0YVNlY29uZHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcmltaXRpdmVzKCk6IE5lb25QcmltaXRpdmVbXSB7XG4gICAgY29uc3Qgc3BsaXQgPSB0aGlzLnNoYXBlID09PSBcInNwbGl0Qm9sdFwiO1xuICAgIGNvbnN0IG5lZWRsZSA9IHRoaXMuc2hhcGUgPT09IFwibmVlZGxlXCI7XG4gICAgY29uc3Qgc2x1ZyA9IHRoaXMuc2hhcGUgPT09IFwic2x1Z1wiO1xuICAgIGNvbnN0IHNwZWVkID0gTWF0aC5oeXBvdCh0aGlzLnZlbG9jaXR5WCwgdGhpcy52ZWxvY2l0eVkpIHx8IDE7XG4gICAgY29uc3QgZGlyZWN0aW9uWCA9IHRoaXMudmVsb2NpdHlYIC8gc3BlZWQ7XG4gICAgY29uc3QgZGlyZWN0aW9uWSA9IHRoaXMudmVsb2NpdHlZIC8gc3BlZWQ7XG4gICAgY29uc3Qgcm90YXRpb24gPSByb3RhdGlvbkZvclNjcmVlbkZvcndhcmRWZWN0b3IodGhpcy52ZWxvY2l0eVgsIHRoaXMudmVsb2NpdHlZKTtcbiAgICBjb25zdCBpdGVtczogTmVvblByaW1pdGl2ZVtdID0gW3tcbiAgICAgIHg6dGhpcy54LWRpcmVjdGlvblgqdGhpcy50cmFpbExlbmd0aCouNSx5OnRoaXMueS1kaXJlY3Rpb25ZKnRoaXMudHJhaWxMZW5ndGgqLjUsXG4gICAgICB3aWR0aDp0aGlzLnRyYWlsV2lkdGgsaGVpZ2h0OnRoaXMudHJhaWxMZW5ndGgsY29sb3I6dGhpcy50cmFpbENvbG9yLHNlY29uZGFyeUNvbG9yOnRoaXMuY29sb3IsXG4gICAgICBnbG93OnRoaXMuZ2xvdyouNixpbnRlbnNpdHk6dGhpcy5pbnRlbnNpdHkqLjcyLHNoYXBlOlwiYm9sdFwiLHJvdGF0aW9uLFxuICAgIH1dO1xuICAgIGNvbnN0IHdpZHRoPXNsdWc/dGhpcy5yYWRpdXMqMS41Om5lZWRsZT90aGlzLnJhZGl1cyouNjU6dGhpcy5yYWRpdXM7XG4gICAgY29uc3QgaGVpZ2h0PXNsdWc/dGhpcy5sZW5ndGgqLjc1OnRoaXMubGVuZ3RoO1xuICAgIGNvbnN0IHNpZGVYID0gLWRpcmVjdGlvblk7XG4gICAgY29uc3Qgc2lkZVkgPSBkaXJlY3Rpb25YO1xuICAgIGNvbnN0IGFkZD0ob2Zmc2V0Om51bWJlcik9Pml0ZW1zLnB1c2goe3g6dGhpcy54K3NpZGVYKm9mZnNldCx5OnRoaXMueStzaWRlWSpvZmZzZXQsd2lkdGgsaGVpZ2h0LGNvbG9yOnRoaXMuY29sb3Isc2Vjb25kYXJ5Q29sb3I6dGhpcy5jb3JlQ29sb3IsZ2xvdzp0aGlzLmdsb3csaW50ZW5zaXR5OnRoaXMuaW50ZW5zaXR5LHNoYXBlOm5lZWRsZT9cImNpcmNsZVwiOlwiYm9sdFwiLHJvdGF0aW9ufSk7XG4gICAgaWYoc3BsaXQpe2FkZCgtdGhpcy5yYWRpdXMqLjcpO2FkZCh0aGlzLnJhZGl1cyouNyl9ZWxzZSBhZGQoMCk7XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG4iLCAiZXhwb3J0IHR5cGUgVGVzdFN0YXR1cyA9IFwiYm9vdGluZ1wiIHwgXCJyZWFkeVwiIHwgXCJwYXNzZWRcIiB8IFwiZmFpbGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdEFzc2VydGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFzc2VkOiBib29sZWFuO1xuICBkZXRhaWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdFBhZ2VTbmFwc2hvdCB7XG4gIGlkOiBzdHJpbmc7XG4gIHN0YXR1czogVGVzdFN0YXR1cztcbiAgYXNzZXJ0aW9uczogVGVzdEFzc2VydGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVzdFBhZ2U8VERyaXZlciBleHRlbmRzIG9iamVjdD4oXG4gIGlkOiBzdHJpbmcsXG4gIGRyaXZlcjogVERyaXZlcixcbiAgc3RhdHVzRWxlbWVudDogSFRNTEVsZW1lbnQsXG4pIHtcbiAgY29uc3Qgc25hcHNob3Q6IFRlc3RQYWdlU25hcHNob3QgPSB7IGlkLCBzdGF0dXM6IFwiYm9vdGluZ1wiLCBhc3NlcnRpb25zOiBbXSB9O1xuICBjb25zdCBwdWJsaXNoID0gKCkgPT4ge1xuICAgIHN0YXR1c0VsZW1lbnQuZGF0YXNldC5zdGF0dXMgPSBzbmFwc2hvdC5zdGF0dXM7XG4gICAgc3RhdHVzRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3NuYXBzaG90LnN0YXR1cy50b1VwcGVyQ2FzZSgpfSBcdTAwQjcgJHtzbmFwc2hvdC5hc3NlcnRpb25zLmZpbHRlcihhID0+IGEucGFzc2VkKS5sZW5ndGh9LyR7c25hcHNob3QuYXNzZXJ0aW9ucy5sZW5ndGh9IGFzc2VydGlvbnNgO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRlc3RTdGF0dXMgPSBzbmFwc2hvdC5zdGF0dXM7XG4gIH07XG4gIGNvbnN0IGFwaSA9IHtcbiAgICAuLi5kcml2ZXIsXG4gICAgZ2V0U25hcHNob3Q6ICgpOiBUZXN0UGFnZVNuYXBzaG90ID0+IHN0cnVjdHVyZWRDbG9uZShzbmFwc2hvdCksXG4gICAgcmVhZHkoKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5zdGF0dXMgPSBcInJlYWR5XCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgICBhc3NlcnQobmFtZTogc3RyaW5nLCBwYXNzZWQ6IGJvb2xlYW4sIGRldGFpbD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgc25hcHNob3QuYXNzZXJ0aW9ucy5wdXNoKHsgbmFtZSwgcGFzc2VkLCBkZXRhaWwgfSk7XG4gICAgICBzbmFwc2hvdC5zdGF0dXMgPSBzbmFwc2hvdC5hc3NlcnRpb25zLmV2ZXJ5KGFzc2VydGlvbiA9PiBhc3NlcnRpb24ucGFzc2VkKSA/IFwicGFzc2VkXCIgOiBcImZhaWxlZFwiO1xuICAgICAgcHVibGlzaCgpO1xuICAgIH0sXG4gIH07XG4gICh3aW5kb3cgYXMgdW5rbm93biBhcyB7IG5lb25GYWN0b3J5VGVzdDogdHlwZW9mIGFwaSB9KS5uZW9uRmFjdG9yeVRlc3QgPSBhcGk7XG4gIHB1Ymxpc2goKTtcbiAgcmV0dXJuIGFwaTtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblZpY3RvcnlPcHRpb25zIHtcbiAgY2VudGVyWDogbnVtYmVyO1xuICBjZW50ZXJZOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBwYXJ0aWNsZUNvdW50PzogbnVtYmVyO1xuICBkdXJhdGlvbk1zPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblZpY3RvcnlFeHBlcmllbmNlIHtcbiAgcmVhZG9ubHkgc3RhcnRlZEF0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgcmVhZG9ubHkgb3B0aW9uczogTmVvblZpY3RvcnlPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25WaWN0b3J5T3B0aW9ucywgc3RhcnRlZEF0ID0gcGVyZm9ybWFuY2Uubm93KCkpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3RhcnRlZEF0ID0gc3RhcnRlZEF0O1xuICAgIHRoaXMuZHVyYXRpb25NcyA9IG9wdGlvbnMuZHVyYXRpb25NcyA/PyA0MjAwO1xuICB9XG5cbiAgZ2V0IGNvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRlZEF0ID49IHRoaXMuZHVyYXRpb25NcztcbiAgfVxuXG4gIHByaW1pdGl2ZXMobm93ID0gcGVyZm9ybWFuY2Uubm93KCkpOiBOZW9uUHJpbWl0aXZlW10ge1xuICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLm1heCgwLCBub3cgLSB0aGlzLnN0YXJ0ZWRBdCk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCBlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbk1zKTtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZUNvdW50ID8/IDkwO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtuZW9uUGFsZXR0ZS5jeWFuLCBuZW9uUGFsZXR0ZS5waW5rLCBuZW9uUGFsZXR0ZS5nb2xkLCBuZW9uUGFsZXR0ZS5ncmVlbiwgbmVvblBhbGV0dGUudmlvbGV0LCBuZW9uUGFsZXR0ZS5vcmFuZ2VdO1xuICAgIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc2VlZCA9IGluZGV4ICogOTEuNzM7XG4gICAgICBjb25zdCBkZWxheSA9IChpbmRleCAlIDEyKSAqIDAuMDM1O1xuICAgICAgY29uc3QgbG9jYWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwcm9ncmVzcyAqIDEuMzUgLSBkZWxheSkpO1xuICAgICAgaWYgKGxvY2FsIDw9IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYW5nbGUgPSAoKHNlZWQgJSAzNjApIC8gMTgwKSAqIE1hdGguUEk7XG4gICAgICBjb25zdCBzcGVlZCA9IDAuMjIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDI2MDtcbiAgICAgIGNvbnN0IGRyaWZ0ID0gTWF0aC5zaW4oc2VlZCkgKiB0aGlzLm9wdGlvbnMud2lkdGggKiAwLjA2ICogbG9jYWw7XG4gICAgICBjb25zdCB4ID0gdGhpcy5vcHRpb25zLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLm9wdGlvbnMud2lkdGggKiBzcGVlZCAqIGxvY2FsICsgZHJpZnQ7XG4gICAgICBjb25zdCB5ID0gdGhpcy5vcHRpb25zLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLm9wdGlvbnMuaGVpZ2h0ICogc3BlZWQgKiBsb2NhbCArIHRoaXMub3B0aW9ucy5oZWlnaHQgKiAwLjQyICogbG9jYWwgKiBsb2NhbDtcbiAgICAgIGNvbnN0IGZhZGUgPSBNYXRoLm1heCgwLCAxIC0gbG9jYWwgKiAwLjcyKTtcbiAgICAgIGNvbnN0IHNpemUgPSAyLjUgKyAoaW5kZXggJSA1KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHgsIHksXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUgKiAoMS44ICsgaW5kZXggJSAzKSxcbiAgICAgICAgY29sb3I6IGNvbG9yc1tpbmRleCAlIGNvbG9ycy5sZW5ndGhdLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogY29sb3JzWyhpbmRleCArIDIpICUgY29sb3JzLmxlbmd0aF0sXG4gICAgICAgIGdsb3c6IDAuNTUsXG4gICAgICAgIGludGVuc2l0eTogZmFkZSxcbiAgICAgICAgc2hhcGU6IGluZGV4ICUgNCA9PT0gMCA/IFwic3BhcmtcIiA6IFwiYm9sdFwiLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICB4OiB0aGlzLm9wdGlvbnMuY2VudGVyWCxcbiAgICAgIHk6IHRoaXMub3B0aW9ucy5jZW50ZXJZLFxuICAgICAgd2lkdGg6IDgwICsgcHJvZ3Jlc3MgKiAxODAsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGUuY3lhbixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gICAgICBnbG93OiAwLjU1ICogKDEgLSBwcm9ncmVzcyksXG4gICAgICBpbnRlbnNpdHk6IE1hdGgubWF4KDAsIDEgLSBwcm9ncmVzcyksXG4gICAgICBzaGFwZTogXCJyaW5nXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIEF1dG9BaW1UYXJnZXQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcm93SWQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YWQtY2VudGVyIGFpbSBvZmZzZXQgKHJlbGF0aXZlIHRvIGxhbmVDZW50ZXIpIHRoYXQgYmVzdCBhbGlnbnNcbiAqIG9uZSBvZiB0aGUgc3F1YWQncyBmcm9udC1yb3cgY29sdW1ucyB0byB0aGUgbmVhcmVzdCBlbmVteS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0cyAgICAgICAgIEFsbCBsaXZlIChub24tZHlpbmcpIGVuZW1pZXMgaW4gdGhlIGN1cnJlbnQgbGFuZS5cbiAqIEBwYXJhbSBsYW5lQ2VudGVyICAgICAgUGl4ZWwgWCBvZiB0aGUgbGFuZSdzIGNlbnRlci5cbiAqIEBwYXJhbSBjb2x1bW5PZmZzZXRzICAgWCBvZmZzZXRzIG9mIGVhY2ggZnJvbnQtcm93IGNvbHVtbiByZWxhdGl2ZSB0byBzcXVhZCBjZW50ZXIuXG4gKiBAcGFyYW0gY3VycmVudE9mZnNldCAgIEN1cnJlbnQgc3F1YWQgYWltIG9mZnNldCAoc3F1YWQgY2VudGVyID0gbGFuZUNlbnRlciArIGN1cnJlbnRPZmZzZXQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QXV0b0FpbU9mZnNldChcbiAgdGFyZ2V0czogcmVhZG9ubHkgQXV0b0FpbVRhcmdldFtdLFxuICBsYW5lQ2VudGVyOiBudW1iZXIsXG4gIGNvbHVtbk9mZnNldHM6IHJlYWRvbmx5IG51bWJlcltdLFxuICBjdXJyZW50T2Zmc2V0ID0gMCxcbik6IG51bWJlciB7XG4gIGlmICghdGFyZ2V0cy5sZW5ndGgpIHJldHVybiAwO1xuXG4gIC8vIElkZW50aWZ5IHRoZSBmcm9udCByb3c6IGdyb3VwIHRhcmdldHMgYnkgcm93SWQgKG9yIHRyZWF0IHVuZ3JvdXBlZCB0YXJnZXRzIGFzIGEgc2luZ2xlIHJvdykuXG4gIGNvbnN0IGV4cGxpY2l0Um93cyA9IG5ldyBNYXA8bnVtYmVyLCBBdXRvQWltVGFyZ2V0W10+KCk7XG4gIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0LnJvd0lkID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJvdyA9IGV4cGxpY2l0Um93cy5nZXQodGFyZ2V0LnJvd0lkKSA/PyBbXTtcbiAgICByb3cucHVzaCh0YXJnZXQpO1xuICAgIGV4cGxpY2l0Um93cy5zZXQodGFyZ2V0LnJvd0lkLCByb3cpO1xuICB9XG4gIGNvbnN0IGZyb250Um93ID0gZXhwbGljaXRSb3dzLnNpemVcbiAgICA/IFsuLi5leHBsaWNpdFJvd3MudmFsdWVzKCldLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PlxuICAgICAgICBNYXRoLm1heCguLi5yaWdodC5tYXAodCA9PiB0LnkpKSAtIE1hdGgubWF4KC4uLmxlZnQubWFwKHQgPT4gdC55KSkpWzBdXG4gICAgOiB0YXJnZXRzLmZpbHRlcih0ID0+IE1hdGguYWJzKHQueSAtIE1hdGgubWF4KC4uLnRhcmdldHMubWFwKGMgPT4gYy55KSkpIDwgMyk7XG5cbiAgLy8gRm9yIGVhY2ggZW5lbXkgaW4gdGhlIGZyb250IHJvdyBcdTAwRDcgZWFjaCBzcXVhZCBjb2x1bW4sIGNvbXB1dGUgdGhlIHNxdWFkLWNlbnRlclxuICAvLyBvZmZzZXQgdGhhdCB3b3VsZCBwbGFjZSB0aGF0IGNvbHVtbiBleGFjdGx5IG9uIHRoYXQgZW5lbXkncyBYLlxuICAvLyBQaWNrIHRoZSAoZW5lbXksIGNvbHVtbikgcGFpciB3aG9zZSByZXF1aXJlZCBvZmZzZXQgaXMgY2xvc2VzdCB0byB0aGUgY3VycmVudFxuICAvLyBvZmZzZXQgXHUyMDE0IG1pbmltaXNpbmcgdGhlIGFpbSBtb3ZlbWVudCBuZWVkZWQgd2hpbGUgZ3VhcmFudGVlaW5nIGEgaGl0LlxuICBjb25zdCBjb2xzID0gY29sdW1uT2Zmc2V0cy5sZW5ndGggPiAwID8gY29sdW1uT2Zmc2V0cyA6IFswXTtcbiAgbGV0IGJlc3RPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IGVuZW15IG9mIGZyb250Um93KSB7XG4gICAgZm9yIChjb25zdCBjb2xPZmZzZXQgb2YgY29scykge1xuICAgICAgLy8gc3F1YWRDZW50ZXIgPSBsYW5lQ2VudGVyICsgYWltT2Zmc2V0IFx1MjE5MiBjb2x1bW4gbGFuZHMgYXQgbGFuZUNlbnRlciArIGFpbU9mZnNldCArIGNvbE9mZnNldFxuICAgICAgLy8gV2Ugd2FudCB0aGF0IHRvIGVxdWFsIGVuZW15LnggXHUyMTkyIGFpbU9mZnNldCA9IGVuZW15LnggLSBsYW5lQ2VudGVyIC0gY29sT2Zmc2V0XG4gICAgICBjb25zdCBjYW5kaWRhdGVPZmZzZXQgPSBlbmVteS54IC0gbGFuZUNlbnRlciAtIGNvbE9mZnNldDtcbiAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhjYW5kaWRhdGVPZmZzZXQgLSBjdXJyZW50T2Zmc2V0KTtcbiAgICAgIGlmIChkaXN0IDwgYmVzdERpc3QpIHtcbiAgICAgICAgYmVzdERpc3QgPSBkaXN0O1xuICAgICAgICBiZXN0T2Zmc2V0ID0gY2FuZGlkYXRlT2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiZXN0T2Zmc2V0O1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVNwYXduRW50cmFuY2UgPSBcInNjYXR0ZXJcIiB8IFwiZmFkZVwiO1xuZXhwb3J0IHR5cGUgRW5lbXlEZWF0aFZpc3VhbCA9IFwiY2xvdWRcIiB8IFwibm9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFwZUlkOiBzdHJpbmc7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG4gIHNwYXduRW50cmFuY2U6IEVuZW15U3Bhd25FbnRyYW5jZTtcbiAgc3Bhd25Tb3VuZDogc3RyaW5nIHwgbnVsbDtcbiAgZGVhdGhTb3VuZDogc3RyaW5nO1xuICBkZWF0aFZpc3VhbDogRW5lbXlEZWF0aFZpc3VhbDtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiaHVudGVyLWV5ZVwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgZ2xhc3NTaGllbGQ6IHtcbiAgICAgIGxhYmVsOiBcIkdsYXNzIFNoaWVsZFwiLFxuICAgICAgaGVhbHRoOiAuMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNS42LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IC4xLFxuICAgICAgc2NvcmU6IDMsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidHJpY2stZ2F0ZVwiLFxuICAgICAgZ2xvdzogLjYyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xMixcbiAgICAgIHJpbUludGVuc2l0eTogMC45LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC40NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogNzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuMSxcbiAgICAgIHNoYXBlWm9vbTogMy4wNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IC42NSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjI1LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJmYWRlXCIsXG4gICAgICBzcGF3blNvdW5kOiBudWxsLFxuICAgICAgZGVhdGhTb3VuZDogXCJHbGFzc1NoaWVsZFNoYXR0ZXJcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHdpbmdlcjoge1xuICAgICAgbGFiZWw6IFwiV2luZ2VyXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNzYsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxNCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJlbGl0ZS13aW5nc1wiLFxuICAgICAgZ2xvdzogLjg2LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4yMixcbiAgICAgIHJpbUludGVuc2l0eTogMS4yLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC42NixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogODUsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuNzUsXG4gICAgICBzaGFwZVpvb206IDMuMjUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIHRhbms6IHtcbiAgICAgIGxhYmVsOiBcIlRhbmtcIixcbiAgICAgIGhlYWx0aDogNixcbiAgICAgIHNwZWVkOiA0NCxcbiAgICAgIHJhZGl1czogMTYsXG4gICAgICBjb2x1bW5TcGFuOiAzLFxuICAgICAgY29udGFjdERhbWFnZTogMixcbiAgICAgIHNjb3JlOiA4MCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0YW5rLWJ1bmtlclwiLFxuICAgICAgZ2xvdzogMS4wNSxcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuNDUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjg1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDIuNyxcbiAgICAgIHNoYXBlWm9vbTogNC40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMi4xLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuOSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJCb3NzXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkJvc3NEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihvcmIuY29sdW1uU3BhbikgJiYgb3JiLmNvbHVtblNwYW4gPj0gMSwgYCR7aWR9IGNvbHVtblNwYW4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpcGxpZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBzcXVhZEFkZGVkOiBudW1iZXI7XG4gIG1heFNxdWFkU2l6ZTogbnVtYmVyO1xuICBtZW1iZXJzUGVyUm93OiBudW1iZXI7XG4gIG1lbWJlclJhZGl1czogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIHBpY2t1cENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHB1bHNlUmF0ZTogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb206IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibXVsdGlwbGllclwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3F1YWQgTXVsdGlwbGllclwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHNxdWFkUGx1c09uZToge1xuICAgICAgbGFiZWw6IFwiKzEgV2luZ21hdGVcIixcbiAgICAgIHNxdWFkQWRkZWQ6IDEsXG4gICAgICBtYXhTcXVhZFNpemU6IDEwLFxuICAgICAgbWVtYmVyc1BlclJvdzogNSxcbiAgICAgIG1lbWJlclJhZGl1czogNS4yNSxcbiAgICAgIHNwYWNpbmc6IDI5LFxuICAgICAgcGlja3VwQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgY29yZUNvbG9yOiBcImN5YW5cIixcbiAgICAgIHB1bHNlUmF0ZTogMi4yLFxuICAgICAgcGlja3VwU2hhcGVab29tOiAzLjEsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uc3F1YWRBZGRlZCA+IDAsIGAke2lkfSBtdXN0IGFkZCBzcXVhZCBtZW1iZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWF4U3F1YWRTaXplID49IGl0ZW0ubWVtYmVyc1BlclJvdywgYCR7aWR9IG1heCBzcXVhZCBtdXN0IGZpdCBhdCBsZWFzdCBvbmUgcm93LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWVtYmVyUmFkaXVzID4gMCAmJiBpdGVtLnNwYWNpbmcgPiBpdGVtLm1lbWJlclJhZGl1cyAqIDIsIGAke2lkfSBtZW1iZXIgZ2VvbWV0cnkgb3ZlcmxhcHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpZXJGYW1pbHkgPSBuZXcgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE11bHRpcGxpZXJJZCA9IGtleW9mIHR5cGVvZiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hpZWxkT3JiaXRlclNoYXBlID0gXCJkb3RcIiB8IFwiaGV4XCI7XG5leHBvcnQgdHlwZSBTaGllbGRNb2RlID0gXCJjaGFyZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic2hpZWxkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICBtb2RlOiBTaGllbGRNb2RlO1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqIEJhc2ljIHNoaWVsZCBzdHJlbmd0aC4gRW5lbXkgSFAgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgdmFsdWUuICovXG4gIG1heENoYXJnZXM6IG51bWJlcjtcbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IDA7XG4gIHB1c2hEaXN0YW5jZTogMDtcbiAgc2xvd011bHRpcGxpZXI6IDE7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBvcmJpdGVyU2hhcGU6IFNoaWVsZE9yYml0ZXJTaGFwZTtcbiAgb3JiaXRlckNvdW50OiBudW1iZXI7XG4gIG9yYml0ZXJTcGVlZDogbnVtYmVyO1xuICBvcmJpdGVyU2l6ZTogbnVtYmVyO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hpZWxkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaGllbGRcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGxpZ2h0R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkxpZ2h0IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiAyLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiA4LFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA0LFxuICAgICAgb3JiaXRlclNwZWVkOiAxLFxuICAgICAgb3JiaXRlclNpemU6IDQuNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiTGlnaHR3ZWlnaHQgc2hpZWxkIHdpdGggdHdvIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIHNhdGVsbGl0ZUd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJTYXRlbGxpdGUgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTAsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNixcbiAgICAgIG9yYml0ZXJTcGVlZDogMC43NSxcbiAgICAgIG9yYml0ZXJTaXplOiA0Ljc1LFxuICAgICAgYWdlbnROb3RlczogXCJCYWxhbmNlZCBzaGllbGQgd2l0aCBmb3VyIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIGhleEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJIZXggR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBtYXhDaGFyZ2VzOiA3LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMixcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJoZXhcIixcbiAgICAgIG9yYml0ZXJDb3VudDogOCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMC40NSxcbiAgICAgIG9yYml0ZXJTaXplOiA1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBzaGllbGQgd2l0aCBzZXZlbiBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzaGllbGRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiwgYCR7aWR9IG11c3QgdXNlIHRoZSBzaGFyZWQgY2hhcmdlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1heENoYXJnZXMgPiAwLCBgJHtpZH0gc3RyZW5ndGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlckNvdW50ID4gMCwgYCR7aWR9IG11c3QgaGF2ZSBvcmJpdGVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlclNwZWVkID49IDAsIGAke2lkfSBvcmJpdGVyU3BlZWQgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkRmFtaWx5ID0gbmV3IFNoaWVsZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNoaWVsZElkID0ga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEhvdyB0aGUgc3dvcmQgc2VsZWN0cyB0YXJnZXRzIGZyb20gdGhlIG5lYXJieSB0aHJlYXQgcG9vbC5cbiAqIEFsbCBtb2RlcyBhcmUgbGFuZS1hd2FyZSB2aWEgdGhlIE5lYXJieVRocmVhdFF1ZXJ5IG1vZHVsZS5cbiAqL1xuZXhwb3J0IHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlID1cbiAgfCBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIgICAvLyBjbG9zZXN0IGVuZW15IGluIHRoZSBwbGF5ZXIncyBhY3RpdmUgbGFuZVxuICB8IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiICAgIC8vIGNsb3Nlc3QgZW5lbXkgcmVnYXJkbGVzcyBvZiBsYW5lXG4gIHwgXCJmcm9udE1vc3RUaHJlYXRcIiAgICAgICAgLy8gZmFydGhlc3QtYWR2YW5jZWQgKGhpZ2hlc3QgeSkgZW5lbXkgaW4gcmFuZ2VcbiAgfCBcImNsdXN0ZXJOZWFyUGxheWVyXCI7ICAgICAvLyBwaWNrcyB1cCB0byBtYXhUYXJnZXRzIGVuZW1pZXMgd2l0aGluIHJlYWNoXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic3dvcmRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIC8qKlxuICAgKiBBdHRhY2sgcmFuZ2UgaW4gcGl4ZWxzIChhdCBzY2FsZSAxKS5cbiAgICogU3dvcmQgb25seSBzd2luZ3Mgd2hlbiBhbiBlbmVteSBlbnRlcnMgdGhpcyByYWRpdXMuXG4gICAqL1xuICByYW5nZTogbnVtYmVyO1xuICAvKipcbiAgICogQW5ndWxhciB3aWR0aCBvZiB0aGUgc2xhc2ggYXJjIGluIGRlZ3JlZXMuXG4gICAqIFdpZGVyID0gaGVhdmllciwgaGl0cyBtb3JlIGVuZW1pZXMgcGVyIHN3aW5nLlxuICAgKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogRGFtYWdlIHBlciBoaXQuICovXG4gIGRhbWFnZTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgbGV2ZWwgNSBkYW1hZ2UgcGVyIGhpdC5cbiAgICpcbiAgICogTGV2ZWwgMSB1c2VzIGRhbWFnZSwgbGV2ZWwgNSB1c2VzIGRhbWFnZUF0TGV2ZWw1LCBhbmQgaW50ZXJtZWRpYXRlIGxldmVsc1xuICAgKiBpbnRlcnBvbGF0ZS4gVXNlIHRoaXMgd2hlbiBkdXBsaWNhdGUgcGlja3VwcyBzaG91bGQgaW5jcmVhc2UgdG90YWwgSFBcbiAgICogY2xlYXJlZCB3aXRob3V0IGNoYW5naW5nIHByb3hpbWl0eSBydWxlcy5cbiAgICovXG4gIGRhbWFnZUF0TGV2ZWw1PzogbnVtYmVyO1xuICAvKiogQ29vbGRvd24gYmV0d2VlbiBzd2luZ3MgaW4gc2Vjb25kcy4gU3dvcmRzIGRvIG5vdCBmaXJlIG9uIGEgdGltZXI7IG9ubHkgd2hlbiBhIHRhcmdldCBleGlzdHMuICovXG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICAvKiogTWF4aW11bSB0YXJnZXRzIGhpdCBwZXIgc3dpbmcuICovXG4gIG1heFRhcmdldHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHZlcnRpY2FsIHJlYWNoIGluIGF1dGhvcmVkIHRyYWNrIHJvd3MuXG4gICAqXG4gICAqIEhlYXZ5IHN3ZWVwaW5nIHN3b3JkcyBjYW4gdXNlIHRoaXMgd2l0aCByZXBlYXRlZCBwaWNrdXBzOiBsZXZlbCAxIHVzZXNcbiAgICogbGV2ZWwxIHJvd3MsIGxldmVsIDUgdXNlcyBsZXZlbDUgcm93cywgYW5kIGludGVybWVkaWF0ZSBsZXZlbHMgaW50ZXJwb2xhdGUuXG4gICAqIFRoaXMgZXhwYW5kcyBhZmZlY3RlZCByb3dzIGFmdGVyIGEgY2xvc2UgdGFyZ2V0IGlzIGZvdW5kOyBpdCBkb2VzIG5vdFxuICAgKiBsb29zZW4gdGhlIG5lYXItcGxheWVyIHByb3hpbWl0eSB0aHJlc2hvbGQuXG4gICAqL1xuICByb3dSZWFjaD86IHtcbiAgICBsZXZlbDE6IG51bWJlcjtcbiAgICBsZXZlbDU6IG51bWJlcjtcbiAgfTtcbiAgLyoqIExhbmUtYXdhcmUgdGFyZ2V0IHNlbGVjdGlvbiBtb2RlLiAqL1xuICB0YXJnZXRpbmdNb2RlOiBTd29yZFRhcmdldGluZ01vZGU7XG4gIC8qKiBWaXN1YWwgc2xhc2ggYXJjIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy4gKi9cbiAgc2xhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBQcmltYXJ5IHNsYXNoIGNvbG9yLiAqL1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgLyoqIFZpc3VhbCB0aGlja25lc3MgbXVsdGlwbGllciBmb3IgdGhlIHNoYXJlZCBzd29yZCB0cmFpbC4gMS4wID0gZGVmYXVsdC4gKi9cbiAgc2xhc2hUaGlja25lc3M6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRlc2lnbiBub3Rlcy4gTm90IHVzZWQgYnkgcnVudGltZTsgZG9jdW1lbnRzIGludGVudCBmb3IgZnV0dXJlIGFnZW50cy5cbiAgICovXG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRmFtaWx5IGRlZmluaXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInN3b3JkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTd29yZFwiO1xuXG4gIC8qKlxuICAgKiBGYW1pbHktbGV2ZWwgaW1wbGVtZW50YXRpb24gbm90ZXM6XG4gICAqIC0gU3dvcmRzIGFyZSBub3QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhleSBzd2luZyBvbmx5IHdoZW4gYSB2YWxpZCB0YXJnZXRcbiAgICogICBpcyB3aXRoaW4gcmFuZ2UgYW5kIGNvb2xkb3duIGlzIHJlYWR5LiBUaGV5IGlkbGUgc2lsZW50bHkgb3RoZXJ3aXNlLlxuICAgKiAtIE9uZSBhY3RpdmUgc3dvcmQgcGVyIHBsYXllciAoZmFtaWx5LXNjb3BlZCBleGNsdXNpdml0eSkuXG4gICAqIC0gUmVwZWF0ZWQgcGlja3VwcyBvZiB0aGUgc2FtZSBzd29yZCBpbmNyZWFzZSB0aGF0IHN3b3JkJ3MgYWN0aXZlIGxldmVsLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgLSBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIFNob3J0IGNvb2xkb3duIG1ha2VzIGl0IHVzZWZ1bCBhZ2FpbnN0IGRlbnNlIHNpbmdsZS1sYW5lIHdhdmVzLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuNTUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMC0xODBtcyBmZWVsLiBGYWRpbmcgYWZ0ZXJpbWFnZS4gTGlrZSBhIHdoaXAtbGlrZSBrYXRhbmEgYXJjLlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhdmVyIC0gSGVhdnkgc3dvcmQuIFNsb3dlciwgYnV0IHN3ZWVwcyBhY3Jvc3MgZXZlcnkgY29sdW1uLlxuICAgICAqIFN0YXJ0cyB3aXRoIDIgcm93cyBvZiB2ZXJ0aWNhbCByZWFjaCBhbmQgc2NhbGVzIHRvIDQgcm93cyBhdCBsZXZlbCA1LlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDY4LFxuICAgICAgYXJjRGVncmVlczogMzYwLFxuICAgICAgZGFtYWdlOiAyLjQsXG4gICAgICBkYW1hZ2VBdExldmVsNTogMy40LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjM1LFxuICAgICAgbWF4VGFyZ2V0czogMTIsXG4gICAgICByb3dSZWFjaDogeyBsZXZlbDE6IDIsIGxldmVsNTogNCB9LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDI2MCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuOSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgYWxsLWNvbHVtbiBzd2VlcC4gUmVwZWF0ZWQgY2xlYXZlciBwaWNrdXBzIGxldmVsIGl0IHVwIGZyb20gMiByb3dzIG9mIHJlYWNoIHRvIDQgcm93cyBhdCBsZXZlbCA1LCB3aXRoIG1vcmUgdG90YWwgZGFtYWdlIHBlciBzd2luZy5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykgYXMgQXJyYXk8W3N0cmluZywgU3dvcmRNZW1iZXJdPikge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgaWYgKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ICE9PSB1bmRlZmluZWQpIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2VBdExldmVsNSA+PSBzd29yZC5kYW1hZ2UsIGAke2lkfSBkYW1hZ2VBdExldmVsNSBtdXN0IGJlIGF0IGxlYXN0IGRhbWFnZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICBpZiAoc3dvcmQucm93UmVhY2gpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWwxKSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDEgPj0gMSwgYCR7aWR9IHJvd1JlYWNoLmxldmVsMSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWw1KSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDUgPj0gc3dvcmQucm93UmVhY2gubGV2ZWwxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgbGV2ZWwxLmApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoRHVyYXRpb25NcyA+IDAsIGAke2lkfSBzbGFzaER1cmF0aW9uTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaFRoaWNrbmVzcyA+IDAsIGAke2lkfSBzbGFzaFRoaWNrbmVzcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzd29yZEZhbWlseSA9IG5ldyBTd29yZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFN3b3JkSWQgPSBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBkZWZpbml0aW9uOiBUcmFja0RlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tGYW1pbHlNZW1iZXI8VHJhY2tJZCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICB0cmFja0lkczogcmVhZG9ubHkgVHJhY2tJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBkaXN0YW5jZUZyb21QbGF5ZXI6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzRW5lbXkgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKTtcbmNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBwYXJzZVRyYWNrUm93cyh0cmFjazogVHJhY2tEZWZpbml0aW9uKTogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHNvdXJjZUluZGV4OiBudW1iZXIgfT4ge1xuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuICByZXR1cm4gcm93cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHBhcnNlVHJhY2tSb3dzKHRyYWNrKTtcbiAgbGV0IGxlZnRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgcmlnaHRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuXG4gIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBpcGVDb3VudCA9IFsuLi5yb3cudGV4dF0uZmlsdGVyKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgPT09IFwifFwiKS5sZW5ndGg7XG4gICAgaWYgKHBpcGVDb3VudCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gbXVzdCBjb250YWluIGV4YWN0bHkgb25lIFwifFwiIHNlcGFyYXRvcjsgZm91bmQgJHtwaXBlQ291bnR9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSByb3cudGV4dC5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIGxlZnRXaWR0aCA/Pz0gbGVmdC5sZW5ndGg7XG4gICAgcmlnaHRXaWR0aCA/Pz0gcmlnaHQubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSBsZWZ0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyBsZWZ0IHdpZHRoICR7bGVmdC5sZW5ndGh9OyBleHBlY3RlZCAke2xlZnRXaWR0aH0uYCk7XG4gICAgfVxuICAgIGlmIChyaWdodC5sZW5ndGggIT09IHJpZ2h0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyByaWdodCB3aWR0aCAke3JpZ2h0Lmxlbmd0aH07IGV4cGVjdGVkICR7cmlnaHRXaWR0aH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzdGFuY2VGcm9tUGxheWVyID0gcm93cy5sZW5ndGggLSAxIC0gcm93SW5kZXg7XG4gICAgZm9yIChjb25zdCBbc2lkZSwgbGFuZV0gb2YgW1tcImxlZnRcIiwgbGVmdF0sIFtcInJpZ2h0XCIsIHJpZ2h0XV0gYXMgY29uc3QpIHtcbiAgICAgIGNvbnN0IG9jY3VwaWVkQnkgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICAgICAgWy4uLmxhbmVdLmZvckVhY2goKHN5bWJvbCwgbGFuZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdHJhY2subGVnZW5kW3N5bWJvbF07XG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSB1c2VzIHN5bWJvbCBcIiR7c3ltYm9sfVwiIGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBpcyBtaXNzaW5nIGZyb20gdGhlIGxlZ2VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuaWQgPT09IFwiZW1wdHlcIikgcmV0dXJuO1xuICAgICAgICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGVudHJ5LmlkKTtcbiAgICAgICAgY29uc3QgY29sdW1uU3BhbiA9IGVuZW15SWQgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkXS5jb2x1bW5TcGFuIDogMTtcbiAgICAgICAgaWYgKGxhbmVJbmRleCArIGNvbHVtblNwYW4gPiBsYW5lLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgbmVlZHMgJHtjb2x1bW5TcGFufSBjb2x1bW5zIGFuZCBvbmx5ICR7bGFuZS5sZW5ndGggLSBsYW5lSW5kZXh9IHJlbWFpbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykge1xuICAgICAgICAgIGNvbnN0IG9jY3VwaWVkID0gb2NjdXBpZWRCeS5nZXQobGFuZUluZGV4ICsgb2Zmc2V0KTtcbiAgICAgICAgICBpZiAob2NjdXBpZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBvbiAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXggKyBvZmZzZXR9LCBhbHJlYWR5IG9jY3VwaWVkIGJ5ICR7b2NjdXBpZWR9LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykgb2NjdXBpZWRCeS5zZXQobGFuZUluZGV4ICsgb2Zmc2V0LCBlbnRyeS5pZCk7XG5cbiAgICAgICAgZW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICBzaWRlLFxuICAgICAgICAgIGxhbmVJbmRleCxcbiAgICAgICAgICBjb2x1bW5TcGFuLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGRpc3RhbmNlRnJvbVBsYXllcixcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IChlbnRyeS5zcGVlZCA/PyAxKSAqIChpc0VuZW15KGVudHJ5LmlkKSA/IHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA6IDEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+XG4gICAgYS5kaXN0YW5jZUZyb21QbGF5ZXIgLSBiLmRpc3RhbmNlRnJvbVBsYXllciB8fFxuICAgIGEucm93SW5kZXggLSBiLnJvd0luZGV4IHx8XG4gICAgYS5zaWRlLmxvY2FsZUNvbXBhcmUoYi5zaWRlKSB8fFxuICAgIGEubGFuZUluZGV4IC0gYi5sYW5lSW5kZXgpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IGd1bkZhbWlseSB9IGZyb20gXCIuL0d1bkZhbWlseVwiO1xuaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuL011bHRpcGxpZXJGYW1pbHlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuaW1wb3J0IHsgc2hpZWxkRmFtaWx5IH0gZnJvbSBcIi4vU2hpZWxkRmFtaWx5XCI7XG5pbXBvcnQgeyBzd29yZEZhbWlseSB9IGZyb20gXCIuL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiwgdHlwZSBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuXG4vKipcbiAqIEdsb2JhbCAwLWJhc2VkIGNvbHVtbiBpbmRleCBhY3Jvc3MgYm90aCBsYW5lcy5cbiAqXG4gKiBDdXJyZW50IGxheW91dCBzaGFwZTpcbiAqIC0gY29sdW1ucyAwLTQgYXJlIHRoZSBsZWZ0IGxhbmVcbiAqIC0gY29sdW1ucyA1LTkgYXJlIHRoZSByaWdodCBsYW5lXG4gKlxuICogRXhhbXBsZXM6XG4gKiAtIDIgPSBsZWZ0IGxhbmUgbWlkZGxlXG4gKiAtIDcgPSByaWdodCBsYW5lIG1pZGRsZVxuICovXG5leHBvcnQgdHlwZSBUcmFja0NvbHVtbiA9IG51bWJlcjtcblxuLyoqXG4gKiBGcmllbmRseSBjb2x1bW4gY29uc3RhbnRzIGZvciB0aGUgY3VycmVudCAyLWxhbmUgLyA1LWNvbHVtbiB0cmFjayBmb3JtYXQuXG4gKlxuICogVGhlc2UgYXJlIG9ubHkgc3VnYXIuIFRoZSBidWlsZGVyIHN0aWxsIGFjY2VwdHMgcmF3IG51bWJlcnMgZm9yIGZhc3QgYXV0aG9yaW5nLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQ29sdW1ucyB7XG4gIHJlYWRvbmx5IGxlZnQ6IHtcbiAgICByZWFkb25seSBvdXRlcjogMDtcbiAgICByZWFkb25seSBuZWFyT3V0ZXI6IDE7XG4gICAgcmVhZG9ubHkgbWlkOiAyO1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogMztcbiAgICByZWFkb25seSBpbm5lcjogNDtcbiAgfTtcbiAgcmVhZG9ubHkgcmlnaHQ6IHtcbiAgICByZWFkb25seSBpbm5lcjogNTtcbiAgICByZWFkb25seSBuZWFySW5uZXI6IDY7XG4gICAgcmVhZG9ubHkgbWlkOiA3O1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogODtcbiAgICByZWFkb25seSBvdXRlcjogOTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb21tb24gZXhwb3J0ZWQgY29sdW1uIGNvbnN0YW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiBidWlsZGVyLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSlcbiAqIGJ1aWxkZXIud2VhcG9uKFwic3dvcmQuYXJjQmxhZGVcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pXG4gKi9cbmV4cG9ydCBjb25zdCBjOiBUcmFja0NvbHVtbnMgPSB7XG4gIGxlZnQ6IHsgb3V0ZXI6IDAsIG5lYXJPdXRlcjogMSwgbWlkOiAyLCBuZWFySW5uZXI6IDMsIGlubmVyOiA0IH0sXG4gIHJpZ2h0OiB7IGlubmVyOiA1LCBuZWFySW5uZXI6IDYsIG1pZDogNywgbmVhck91dGVyOiA4LCBvdXRlcjogOSB9LFxufTtcblxuZXhwb3J0IHR5cGUgVHJhY2tFbmVteVJlZiA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFRyYWNrV2VhcG9uUmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tQaWNrdXBSZWYgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tQbGFjZW1lbnRPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBlci1zeW1ib2wgc3BlZWQgbXVsdGlwbGllciBlbWl0dGVkIGludG8gdGhlIHRyYWNrIGxlZ2VuZC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBUaGUgZGVmYXVsdCBpcyAxLCBhbmQgZnV0dXJlIHRyYWNrIGVkaXRzXG4gICAqIHNob3VsZCBwcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHkgYXNrcyBmb3Igc3BlZWQgdHVuaW5nLlxuICAgKiBDaGFuZ2luZyB0aGlzIHZhbHVlIGlzIGEgc2lnbmlmaWNhbnQgYmFsYW5jZSBjaGFuZ2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xpbmVPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgY291bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEVtcHR5IHJvd3MgYmV0d2VlbiBlYWNoIGVuZW15LlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byAwLiBJbiBwcmVzc3VyZSBzZWN0aW9ucywgb21pdCB0aGlzIHVubGVzcyB0aGUgZ2FwIGlzXG4gICAqIGludGVudGlvbmFsOyBwcmVzc3VyZSBzaG91bGQgbm9ybWFsbHkgcGxhY2UgZW5lbWllcyBldmVyeSByb3cuXG4gICAqL1xuICBnYXA/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBlbmVteSBzcGVlZCBvdmVycmlkZSBmb3IgdGhpcyByZXBlYXRlZCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1dhbGxPcHRpb25zIHtcbiAgY29sdW1uczogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXTtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHdhbGwuXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RyaXBPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgcm93czogbnVtYmVyO1xuICAvKipcbiAgICogUGxhY2Ugb25lIGVuZW15IGV2ZXJ5IE4gcm93cy5cbiAgICpcbiAgICogRHJpcCBpcyBpbnRlbnRpb25hbGx5IHNwYXJzZS4gUHJlZmVyIGxpbmUvYWx0ZXJuYXRpbmcgd2l0aG91dCBhIGdhcCBmb3JcbiAgICogbm9ybWFsIHByZXNzdXJlLCBhbmQgdXNlIGRyaXAgb25seSB3aGVuIHRoZSBzcGFyc2UgY2FkZW5jZSBpcyBkZWxpYmVyYXRlLlxuICAgKi9cbiAgZXZlcnk6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIGRyaXAgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICBhdChyb3dPZmZzZXQ6IG51bWJlcik6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyT3B0aW9ucyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGJhbGFuY2U6IHtcbiAgICBlbmVteUhwOiBudW1iZXI7XG4gICAgZW5lbXlTcGVlZDogbnVtYmVyO1xuICB9O1xuICBwbGF5ZXJTdGFydENvbHVtbj86IFRyYWNrQ29sdW1uO1xuICBsYW5lV2lkdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyIHtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGFkdmFuY2VSb3dzKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiBUcmFja0J1aWxkZXI7XG4gIHNlY3Rpb24obmFtZTogc3RyaW5nLCByb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IFRyYWNrQnVpbGRlcjtcbiAgLyoqXG4gICAqIEFkZCBhIGRhbmdlci1mb2N1c2VkIHNlY3Rpb24gd2l0aCBhIGZpeGVkIGR1cmF0aW9uLlxuICAgKlxuICAgKiBQcmVzc3VyZSBzaG91bGQgdXN1YWxseSBjb250YWluIGVuZW15IHBsYWNlbWVudCBldmVyeSByb3cuIFVzZSBleHBsaWNpdFxuICAgKiBnYXBzIG9yIGRyaXAgcGF0dGVybnMgb25seSB3aGVuIHRoZSBxdWlldCBzcGFjZSBpcyBpbnRlbnRpb25hbC5cbiAgICovXG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICByZWJ1aWxkKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYnVpbGQoKTogVHJhY2tNZW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyRmFjdG9yeSB7XG4gIGNyZWF0ZShvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xufVxuXG5pbnRlcmZhY2UgUGxhY2VtZW50IHtcbiAgcm93OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICBpZDogc3RyaW5nO1xuICBzcGVlZDogbnVtYmVyO1xuICBzcGFuOiBudW1iZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRMYW5lV2lkdGggPSA1O1xuY29uc3QgZW1wdHlTeW1ib2wgPSBcIi5cIjtcbmNvbnN0IHBsYXllclN5bWJvbCA9IFwiTVwiO1xuY29uc3QgZW5lbXlBbGlhc2VzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYmFzaWM6IFwiZW5lbXkuYmFzaWNcIixcbiAgYmFzaWNPcmI6IFwiZW5lbXkuYmFzaWNPcmJcIixcbiAgZ2xhc3M6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgZ2xhc3NTaGllbGQ6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgd2luZ2VyOiBcImVuZW15LndpbmdlclwiLFxuICB0YW5rOiBcImVuZW15LnRhbmtcIixcbn07XG5jb25zdCB3ZWFwb25QcmVmaXhlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIGd1bjogXCJwaWNrdXAud2VhcG9uLmd1bi5cIixcbiAgc2hpZWxkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLFxuICBzd29yZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLFxufTtcbmNvbnN0IHBpY2t1cEFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcInVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG4gIFwidW5pdE11bHRpcGxpZXIuc3F1YWRQbHVzT25lXCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG59O1xuY29uc3QgcHJlZmVycmVkU3ltYm9sczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiZW5lbXkuYmFzaWNcIjogXCJFXCIsXG4gIFwiZW5lbXkuYmFzaWNPcmJcIjogXCJFXCIsXG4gIFwiZW5lbXkuZ2xhc3NTaGllbGRcIjogXCJEXCIsXG4gIFwiZW5lbXkud2luZ2VyXCI6IFwiV1wiLFxuICBcImVuZW15LnRhbmtcIjogXCJUXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIjogXCJHXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ubmVlZGxlclNtZ1wiOiBcIk5cIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIjogXCJCXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIjogXCJIXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiOiBcIlJcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCI6IFwiU1wiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCI6IFwiVlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCI6IFwiWFwiLFxuICBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIjogXCJhXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCI6IFwiY1wiLFxuICBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiOiBcIjJcIixcbn07XG5jb25zdCBmYWxsYmFja1N5bWJvbHMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoyMzQ1Njc4OSEjJCUmKissLS86Ozw9Pj9AXl9+XCIuc3BsaXQoXCJcIilcbiAgLmZpbHRlcihzeW1ib2wgPT4gc3ltYm9sICE9PSBlbXB0eVN5bWJvbCAmJiBzeW1ib2wgIT09IHBsYXllclN5bWJvbCk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbnRlZ2VyKHZhbHVlOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGFuIGludGVnZXIuYCk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICByZXF1aXJlSW50ZWdlcih2YWx1ZSwgbGFiZWwpO1xuICBpZiAodmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcGVlZChzcGVlZDogbnVtYmVyIHwgdW5kZWZpbmVkLCBsYWJlbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzcGVlZCA/PyAxO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgfHwgdmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVuZW15SWQoaWQ6IFRyYWNrRW5lbXlSZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gZW5lbXlBbGlhc2VzW2lkXSA/PyBgZW5lbXkuJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVXZWFwb25JZChpZDogVHJhY2tXZWFwb25SZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uXCIpKSByZXR1cm4gaWQ7XG4gIGNvbnN0IGRvdEluZGV4ID0gaWQuaW5kZXhPZihcIi5cIik7XG4gIGlmIChkb3RJbmRleCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgbXVzdCB1c2UgZmFtaWx5LmlkIHNob3J0aGFuZCBvciBhIGNhbm9uaWNhbCBwaWNrdXAud2VhcG9uIGlkLmApO1xuICBjb25zdCBmYW1pbHkgPSBpZC5zbGljZSgwLCBkb3RJbmRleCk7XG4gIGNvbnN0IG1lbWJlciA9IGlkLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gIGNvbnN0IHByZWZpeCA9IHdlYXBvblByZWZpeGVzW2ZhbWlseV07XG4gIGlmICghcHJlZml4KSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgaGFzIHVua25vd24gd2VhcG9uIGZhbWlseSBcIiR7ZmFtaWx5fVwiLmApO1xuICByZXR1cm4gYCR7cHJlZml4fSR7bWVtYmVyfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBpY2t1cElkKGlkOiBUcmFja1BpY2t1cFJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gcGlja3VwQWxpYXNlc1tpZF0gPz8gYHBpY2t1cC4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIGVuZW15TWVtYmVySWQoY2Fub25pY2FsSWQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoY2Fub25pY2FsSWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFjYW5vbmljYWxJZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNhbm9uaWNhbElkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDYW5vbmljYWxJZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteU1lbWJlcklkKGlkKTtcbiAgaWYgKGVuZW15SWQpIHtcbiAgICBpZiAoIShlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGVuZW15IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsaWRhdG9yczogcmVhZG9ubHkgW3N0cmluZywgUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LCBzdHJpbmddW10gPSBbXG4gICAgW1wicGlja3VwLndlYXBvbi5ndW4uXCIsIGd1bkZhbWlseS5tZW1iZXJzLCBcImd1blwiXSxcbiAgICBbXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIiwgc2hpZWxkRmFtaWx5Lm1lbWJlcnMsIFwic2hpZWxkXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsIHN3b3JkRmFtaWx5Lm1lbWJlcnMsIFwic3dvcmRcIl0sXG4gIF07XG4gIGZvciAoY29uc3QgW3ByZWZpeCwgbWVtYmVycywgbGFiZWxdIG9mIHZhbGlkYXRvcnMpIHtcbiAgICBpZiAoIWlkLnN0YXJ0c1dpdGgocHJlZml4KSkgY29udGludWU7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShwcmVmaXgubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duICR7bGFiZWx9IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSByZXR1cm47XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlcklkID0gaWQuc2xpY2UoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbXVsdGlwbGllciBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgdHJhY2sgZW50aXR5IGlkIFwiJHtpZH1cIi5gKTtcbn1cblxuZnVuY3Rpb24gc3BhbkZvcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCAmJiBlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzID8gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZCBhcyBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnNdLmNvbHVtblNwYW4gOiAxO1xufVxuXG5jbGFzcyBUcmFja0J1aWxkZXJDb3JlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsYW5lV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGN1cnNvciA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKSB7XG4gICAgdGhpcy5sYW5lV2lkdGggPSBvcHRpb25zLmxhbmVXaWR0aCA/PyBkZWZhdWx0TGFuZVdpZHRoO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodGhpcy5sYW5lV2lkdGgsIFwiVHJhY2sgbGFuZVdpZHRoXCIpO1xuICAgIGlmICh0aGlzLmxhbmVXaWR0aCA8IDMpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhbmVXaWR0aCBtdXN0IGJlIGF0IGxlYXN0IDMuXCIpO1xuICAgIGlmICghb3B0aW9ucy5sYWJlbC50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhYmVsIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAoIW9wdGlvbnMuZGVzY3JpcHRpb24udHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBkZXNjcmlwdGlvbiBpcyByZXF1aXJlZC5cIik7XG4gICAgaWYgKG9wdGlvbnMuYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIHRoaXMudmFsaWRhdGVDb2x1bW4ob3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkLCBcInBsYXllclN0YXJ0Q29sdW1uXCIsIDEpO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcImVuZW15XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcIndlYXBvblwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplUGlja3VwSWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJwaWNrdXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZHZhbmNlUm93cyhyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIFwiYWR2YW5jZVJvd3Mgcm93c1wiKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5hZHZhbmNlUm93cyhyb3dzKTtcbiAgfVxuXG4gIHNlY3Rpb24obmFtZTogc3RyaW5nLCByb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIGlmICghbmFtZS50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIHNlY3Rpb24gbmFtZSBpcyByZXF1aXJlZC5cIik7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihyb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7bmFtZX1cIiByb3dzYCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IG5ldyBUcmFja1NlY3Rpb25CdWlsZGVyQ29yZSh0aGlzLCBuYW1lLCB0aGlzLmN1cnNvciwgcm93cyk7XG4gICAgYnVpbGQoc2VjdGlvbik7XG4gICAgdGhpcy5jdXJzb3IgKz0gcm93cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuc2VjdGlvbihcInByZXNzdXJlXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicmVidWlsZFwiLCByb3dzLCBidWlsZCk7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZExpbmUodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwibGluZVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRBbHRlcm5hdGluZyh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJhbHRlcm5hdGluZ1wiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkV2FsbCh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJ3YWxsXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGREcmlwKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImRyaXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRTZWN0aW9uRW5lbXkoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBlbmVteWApO1xuICB9XG5cbiAgYWRkU2VjdGlvbldlYXBvbihiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplV2VhcG9uSWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgd2VhcG9uYCk7XG4gIH1cblxuICBhZGRTZWN0aW9uUGlja3VwKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwaWNrdXBgKTtcbiAgfVxuXG4gIGFkZExpbmUoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuY291bnQsIGAke2xhYmVsfSBjb3VudGApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBpbmRleCAqIChnYXAgKyAxKSwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFsdGVybmF0aW5nKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHJlcXVpcmVJbnRlZ2VyKGdhcCwgYCR7bGFiZWx9IGdhcGApO1xuICAgIGlmIChnYXAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGdhcCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbnMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG9wdGlvbnMuY29sdW1uc1tpbmRleCAlIG9wdGlvbnMuY29sdW1ucy5sZW5ndGhdO1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkV2FsbChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLmNvbHVtbnMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGNvbHVtbnMgbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBjb2x1bW4uYCk7XG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2Ygb3B0aW9ucy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93LCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRHJpcChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5yb3dzLCBgJHtsYWJlbH0gcm93c2ApO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5ldmVyeSwgYCR7bGFiZWx9IGV2ZXJ5YCk7XG4gICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgb3B0aW9ucy5yb3dzOyBvZmZzZXQgKz0gb3B0aW9ucy5ldmVyeSkge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBvZmZzZXQsIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBidWlsZCgpOiBUcmFja01lbWJlciB7XG4gICAgY29uc3QgcGxheWVyU3RhcnRDb2x1bW4gPSB0aGlzLm9wdGlvbnMucGxheWVyU3RhcnRDb2x1bW4gPz8gYy5sZWZ0Lm1pZDtcbiAgICBjb25zdCBtYXhQbGFjZW1lbnRSb3cgPSB0aGlzLnBsYWNlbWVudHMucmVkdWNlKChtYXgsIGl0ZW0pID0+IE1hdGgubWF4KG1heCwgaXRlbS5yb3cpLCAwKTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWF4KHRoaXMuY3Vyc29yLCBtYXhQbGFjZW1lbnRSb3cgKyAxLCAxKTtcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5sYW5lV2lkdGggKiAyIH0sICgpID0+IGVtcHR5U3ltYm9sKSk7XG4gICAgY29uc3Qgb2NjdXBpZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpKTtcbiAgICBjb25zdCBsZWdlbmQgPSBuZXcgTWFwPHN0cmluZywgeyBpZDogc3RyaW5nOyBzcGVlZDogbnVtYmVyIH0+KCk7XG4gICAgbGVnZW5kLnNldChlbXB0eVN5bWJvbCwgeyBpZDogXCJlbXB0eVwiLCBzcGVlZDogMSB9KTtcbiAgICBsZWdlbmQuc2V0KHBsYXllclN5bWJvbCwgeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiwgc3BlZWQ6IDEgfSk7XG4gICAgY29uc3QgdXNlZFN5bWJvbHMgPSBuZXcgU2V0KFtlbXB0eVN5bWJvbCwgcGxheWVyU3ltYm9sXSk7XG4gICAgY29uc3Qgc3ltYm9sQnlFbnRpdHkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIGNvbnN0IHBsYXllckNlbGxzID0gdGhpcy5jZWxsc0ZvcihwbGF5ZXJTdGFydENvbHVtbiwgMSk7XG4gICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSBvY2N1cGllZFswXS5zZXQoY2VsbC5nbG9iYWxDb2x1bW4sIFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIHJvd3NbMF1bcGxheWVyU3RhcnRDb2x1bW5dID0gcGxheWVyU3ltYm9sO1xuXG4gICAgZm9yIChjb25zdCBwbGFjZW1lbnQgb2YgdGhpcy5wbGFjZW1lbnRzKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbEZvcihwbGFjZW1lbnQsIHVzZWRTeW1ib2xzLCBzeW1ib2xCeUVudGl0eSk7XG4gICAgICBsZWdlbmQuc2V0KHN5bWJvbCwgeyBpZDogcGxhY2VtZW50LmlkLCBzcGVlZDogcGxhY2VtZW50LnNwZWVkIH0pO1xuICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHRoaXMuY2VsbHNGb3IocGxhY2VtZW50LmNvbHVtbiwgcGxhY2VtZW50LnNwYW4pKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uZ2V0KGNlbGwuZ2xvYmFsQ29sdW1uKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBwbGFjZW1lbnQgb3ZlcmxhcCBhdCByb3cgJHtwbGFjZW1lbnQucm93fSwgY29sdW1uICR7Y2VsbC5nbG9iYWxDb2x1bW59LiBFeGlzdGluZyBpZCBcIiR7ZXhpc3Rpbmd9XCIsIG5ldyBpZCBcIiR7cGxhY2VtZW50LmlkfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIG9jY3VwaWVkW3BsYWNlbWVudC5yb3ddLnNldChjZWxsLmdsb2JhbENvbHVtbiwgcGxhY2VtZW50LmlkKTtcbiAgICAgIH1cbiAgICAgIHJvd3NbcGxhY2VtZW50LnJvd11bcGxhY2VtZW50LmNvbHVtbl0gPSBzeW1ib2w7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgICAgIGxheW91dDogYFxcbiR7cm93cy5zbGljZSgpLnJldmVyc2UoKS5tYXAocm93ID0+IGAke3Jvdy5zbGljZSgwLCB0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX0gfCAke3Jvdy5zbGljZSh0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX1gKS5qb2luKFwiXFxuXCIpfVxcbmAsXG4gICAgICBsZWdlbmQ6IE9iamVjdC5mcm9tRW50cmllcyhbLi4ubGVnZW5kLmVudHJpZXMoKV0ubWFwKChbc3ltYm9sLCBlbnRyeV0pID0+IFtcbiAgICAgICAgc3ltYm9sLFxuICAgICAgICBlbnRyeS5zcGVlZCA9PT0gMSA/IHsgaWQ6IGVudHJ5LmlkIH0gOiB7IGlkOiBlbnRyeS5pZCwgc3BlZWQ6IGVudHJ5LnNwZWVkIH0sXG4gICAgICBdKSksXG4gICAgICBiYWxhbmNlOiB0aGlzLm9wdGlvbnMuYmFsYW5jZSxcbiAgICB9O1xuICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogdGhpcy5vcHRpb25zLmxhYmVsLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGVudmlyb25tZW50OiB0aGlzLm9wdGlvbnMuZW52aXJvbm1lbnQsXG4gICAgICBkZWZpbml0aW9uLFxuICAgIH07XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIHJvd3M6IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKHJvd09mZnNldCwgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXRgKTtcbiAgICBpZiAocm93T2Zmc2V0IDwgMCB8fCByb3dPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiByb3cgb2Zmc2V0ICR7cm93T2Zmc2V0fSBpcyBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVTZWN0aW9uU3BhbihzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyLCBjb3ZlcmVkUm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihjb3ZlcmVkUm93cywgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGNvdmVyZWQgcm93c2ApO1xuICAgIHRoaXMudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHNlY3Rpb25OYW1lLCByb3dPZmZzZXQsIHJvd3MpO1xuICAgIGNvbnN0IGxhc3RPZmZzZXQgPSByb3dPZmZzZXQgKyBjb3ZlcmVkUm93cyAtIDE7XG4gICAgaWYgKGxhc3RPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwYXR0ZXJuIHJlYWNoZXMgcm93IG9mZnNldCAke2xhc3RPZmZzZXR9LCBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwbGFjZShpZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMsIHJvdzogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93LCBgJHtsYWJlbH0gcm93YCk7XG4gICAgaWYgKHJvdyA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gcm93IGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkKTtcbiAgICBjb25zdCBzcGFuID0gc3BhbkZvcihpZCk7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLmNvbHVtbiwgYCR7bGFiZWx9IGNvbHVtbmAsIHNwYW4pO1xuICAgIHRoaXMucGxhY2VtZW50cy5wdXNoKHtcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sXG4gICAgICBpZCxcbiAgICAgIHNwZWVkOiBub3JtYWxpemVTcGVlZChvcHRpb25zLnNwZWVkLCBsYWJlbCksXG4gICAgICBzcGFuLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUNvbHVtbihjb2x1bW46IFRyYWNrQ29sdW1uLCBsYWJlbDogc3RyaW5nLCBzcGFuOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihjb2x1bW4sIGxhYmVsKTtcbiAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5sYW5lV2lkdGggKiAyO1xuICAgIGlmIChjb2x1bW4gPCAwIHx8IGNvbHVtbiA+PSB0b3RhbFdpZHRoKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBpcyBvdXRzaWRlIHRoZSAwLSR7dG90YWxXaWR0aCAtIDF9IHRyYWNrIHJhbmdlLmApO1xuICAgIGNvbnN0IHNpZGVDb2x1bW4gPSBjb2x1bW4gJSB0aGlzLmxhbmVXaWR0aDtcbiAgICBpZiAoc2lkZUNvbHVtbiArIHNwYW4gPiB0aGlzLmxhbmVXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSAke2NvbHVtbn0gY2Fubm90IGZpdCBhICR7c3Bhbn0tY29sdW1uIGVudGl0eSBpbnNpZGUgYSAke3RoaXMubGFuZVdpZHRofS1jb2x1bW4gbGFuZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxzRm9yKGNvbHVtbjogbnVtYmVyLCBzcGFuOiBudW1iZXIpOiBBcnJheTx7IGdsb2JhbENvbHVtbjogbnVtYmVyIH0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc3BhbiB9LCAoXywgb2Zmc2V0KSA9PiAoeyBnbG9iYWxDb2x1bW46IGNvbHVtbiArIG9mZnNldCB9KSk7XG4gIH1cblxuICBwcml2YXRlIHN5bWJvbEZvcihwbGFjZW1lbnQ6IFBsYWNlbWVudCwgdXNlZFN5bWJvbHM6IFNldDxzdHJpbmc+LCBzeW1ib2xCeUVudGl0eTogTWFwPHN0cmluZywgc3RyaW5nPik6IHN0cmluZyB7XG4gICAgY29uc3Qga2V5ID0gYCR7cGxhY2VtZW50LmlkfUAke3BsYWNlbWVudC5zcGVlZH1gO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gc3ltYm9sQnlFbnRpdHkuZ2V0KGtleSk7XG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7XG4gICAgY29uc3QgcHJlZmVycmVkID0gcHJlZmVycmVkU3ltYm9sc1twbGFjZW1lbnQuaWRdO1xuICAgIGNvbnN0IHN5bWJvbCA9IHByZWZlcnJlZCAmJiAhdXNlZFN5bWJvbHMuaGFzKHByZWZlcnJlZClcbiAgICAgID8gcHJlZmVycmVkXG4gICAgICA6IGZhbGxiYWNrU3ltYm9scy5maW5kKGNhbmRpZGF0ZSA9PiAhdXNlZFN5bWJvbHMuaGFzKGNhbmRpZGF0ZSkpO1xuICAgIGlmICghc3ltYm9sKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBidWlsZGVyIHJhbiBvdXQgb2Ygb25lLWNoYXJhY3RlciBsZWdlbmQgc3ltYm9scy5cIik7XG4gICAgdXNlZFN5bWJvbHMuYWRkKHN5bWJvbCk7XG4gICAgc3ltYm9sQnlFbnRpdHkuc2V0KGtleSwgc3ltYm9sKTtcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG59XG5cbmNsYXNzIFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlIGltcGxlbWVudHMgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIHByaXZhdGUgcm93T2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogVHJhY2tCdWlsZGVyQ29yZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhc2VSb3c6IG51bWJlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvd3M6IG51bWJlcixcbiAgKSB7fVxuXG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHRoaXMubmFtZSwgcm93T2Zmc2V0LCB0aGlzLnJvd3MpO1xuICAgIHRoaXMucm93T2Zmc2V0ID0gcm93T2Zmc2V0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25FbmVteSh0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25XZWFwb24odGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uUGlja3VwKHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgKG9wdGlvbnMuY291bnQgLSAxKSAqIChnYXAgKyAxKSArIDEpO1xuICAgIHRoaXMucGFyZW50LmFkZExpbmUodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgbGluZWApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkQWx0ZXJuYXRpbmcodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgYWx0ZXJuYXRpbmdgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFdhbGwodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgd2FsbGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIG9wdGlvbnMucm93cyk7XG4gICAgdGhpcy5wYXJlbnQuYWRkRHJpcCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBkcmlwYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrQnVpbGRlcjogVHJhY2tCdWlsZGVyRmFjdG9yeSA9IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXIge1xuICAgIHJldHVybiBuZXcgVHJhY2tCdWlsZGVyQ29yZShvcHRpb25zKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrQnVpbGRlciwgdHlwZSBUcmFja1NlY3Rpb25CdWlsZGVyIH0gZnJvbSBcIi4uL1RyYWNrQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgVHJhY2tUaGVtZUlkID0gXCJndW5TY2hvb2xcIiB8IFwiZ3VhcmRCbGFkZXNcIiB8IFwiY3J5c3RhbFNpZWdlXCIgfCBcInN3YXJtQmxvb21cIiB8IFwibWlycm9yQXJyYXlcIjtcbmV4cG9ydCB0eXBlIFRyYWNrVGllciA9IDEgfCAyIHwgMztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NlZFRyYWNrT3B0aW9ucyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB0aGVtZTogVHJhY2tUaGVtZUlkO1xuICB0aWVyOiBUcmFja1RpZXI7XG59XG5cbmludGVyZmFjZSBUcmFja0J1aWxkQ29udGV4dCB7XG4gIHJlYWRvbmx5IHRpZXI6IFRyYWNrVGllcjtcbiAgcmVhZG9ubHkgY3Vyc29yOiBudW1iZXI7XG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB2b2lkO1xuICBwcmVzc3VyZShyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHJlc3BpdGUocm93czogbnVtYmVyKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRoZW1lUGxhbiB7XG4gIGZpbmFsUm93czogbnVtYmVyO1xuICBvcGVuKGNvbnRleHQ6IFRyYWNrQnVpbGRDb250ZXh0KTogdm9pZDtcbiAgY3ljbGUoY29udGV4dDogVHJhY2tCdWlsZENvbnRleHQsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQ7XG4gIGZpbmlzaChjb250ZXh0OiBUcmFja0J1aWxkQ29udGV4dCwgY3ljbGVJbmRleDogbnVtYmVyKTogdm9pZDtcbn1cblxuY29uc3QgdGFyZ2V0Um93c0J5VGllcjogUmVjb3JkPFRyYWNrVGllciwgbnVtYmVyPiA9IHtcbiAgMTogMTA1LFxuICAyOiAyNjUsXG4gIDM6IDQyNSxcbn07XG5cbmNvbnN0IGVuZW15SHBCeVRpZXI6IFJlY29yZDxUcmFja1RpZXIsIG51bWJlcj4gPSB7XG4gIDE6IDEsXG4gIDI6IDEuMDgsXG4gIDM6IDEuMTYsXG59O1xuXG5jb25zdCBwaWNrID0gPFQ+KGl0ZW1zOiByZWFkb25seSBUW10sIHRpZXI6IFRyYWNrVGllciwgY3ljbGVJbmRleDogbnVtYmVyKTogVCA9PlxuICBpdGVtc1tNYXRoLm1pbihpdGVtcy5sZW5ndGggLSAxLCB0aWVyIC0gMSArIGN5Y2xlSW5kZXggJSAyKV07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoYnVpbGRlcjogVHJhY2tCdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIpOiBUcmFja0J1aWxkQ29udGV4dCB7XG4gIGxldCBjdXJzb3IgPSAxO1xuICByZXR1cm4ge1xuICAgIHRpZXIsXG4gICAgZ2V0IGN1cnNvcigpIHtcbiAgICAgIHJldHVybiBjdXJzb3I7XG4gICAgfSxcbiAgICByZWJ1aWxkKHJvd3MsIGJ1aWxkKSB7XG4gICAgICBidWlsZGVyLnJlYnVpbGQocm93cywgYnVpbGQpO1xuICAgICAgY3Vyc29yICs9IHJvd3M7XG4gICAgfSxcbiAgICBwcmVzc3VyZShyb3dzLCBidWlsZCkge1xuICAgICAgYnVpbGRlci5wcmVzc3VyZShyb3dzLCBidWlsZCk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICAgIHJlc3BpdGUocm93cykge1xuICAgICAgYnVpbGRlci5yZXNwaXRlKHJvd3MpO1xuICAgICAgY3Vyc29yICs9IHJvd3M7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ3VuU2Nob29sUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IDIyIH0pO1xuICBzZWN0aW9uLmF0KDIyKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAxMiB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDEpLmRyaXAoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIHJvd3M6IDM0LCBldmVyeTogNiB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDM0KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA4IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDYpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MucmlnaHQuaW5uZXIsIGMubGVmdC5pbm5lcl0sIGNvdW50OiA4LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHtcbiAgICBzZWN0aW9uLmF0KDI0KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQuaW5uZXIgfSk7XG4gICAgc2VjdGlvbi5hdCgyOCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFySW5uZXIsIGMucmlnaHQubmVhcklubmVyXSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBndWFyZEJsYWRlUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgaGFzQ2xlYXZlclNldHVwID0gdGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwO1xuICBzZWN0aW9uLmF0KDApLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIGNvdW50OiAxOCB9KTtcbiAgc2VjdGlvbi5hdCgxOCkuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0sIGNvdW50OiBoYXNDbGVhdmVyU2V0dXAgPyAxMiA6IDI0LCBnYXA6IGhhc0NsZWF2ZXJTZXR1cCA/IDEgOiB1bmRlZmluZWQgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgzKS5hbHRlcm5hdGluZyhcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA4LCBnYXA6IDMgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCg4KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdIH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDE0KS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogNiwgZ2FwOiAzIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDI1KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGMucmlnaHQuaW5uZXIgfSk7XG59XG5cbmZ1bmN0aW9uIGNyeXN0YWxTaWVnZVByZXNzdXJlKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIsIHRpZXI6IFRyYWNrVGllciwgY3ljbGVJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIHNlY3Rpb24uYXQoMCkuYWx0ZXJuYXRpbmcoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXIsIGMubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IDE2IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjMpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbiAgc2VjdGlvbi5hdCgyNSkuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogMjMgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCg0KS5saW5lKFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQubmVhck91dGVyLCBjb3VudDogMTggfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjQpLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMubGVmdC5uZWFySW5uZXIsIGMucmlnaHQubmVhcklubmVyLCBjLnJpZ2h0Lm91dGVyXSB9KTtcbiAgaWYgKHRpZXIgPj0gMyAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgzNikuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQuaW5uZXIgOiBjLmxlZnQubmVhck91dGVyIH0pO1xufVxuXG5mdW5jdGlvbiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IDIwIH0pO1xuICBzZWN0aW9uLmF0KDIwKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAyNCB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDIpLmRyaXAoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIHJvd3M6IDM0LCBldmVyeTogNiB9KTtcbiAgaWYgKHRpZXIgPj0gMiAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCg3KS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLmxlZnQuaW5uZXIsIGMucmlnaHQuaW5uZXJdLCBjb3VudDogNywgZ2FwOiAzIH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDIxKS53YWxsKFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDM2KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQuaW5uZXIgfSk7XG59XG5cbmZ1bmN0aW9uIG1pcnJvckFycmF5UHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCg0KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkLCBjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogMTggfSk7XG4gIHNlY3Rpb24uYXQoMjIpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDI0IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyXSB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDYpLmRyaXAoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhcklubmVyIDogYy5yaWdodC5uZWFySW5uZXIsIHJvd3M6IDMyLCBldmVyeTogNiB9KTtcbiAgaWYgKHRpZXIgPj0gMiAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgxOCkuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5yaWdodC5pbm5lciwgYy5sZWZ0LmlubmVyXSwgY291bnQ6IDcsIGdhcDogMyB9KTtcbiAgaWYgKHRpZXIgPj0gMyAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgzMikud2FsbChcInRhbmtcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5pbm5lcl0gfSk7XG59XG5cbmNvbnN0IHRoZW1lUGxhbnM6IFJlY29yZDxUcmFja1RoZW1lSWQsIFRoZW1lUGxhbj4gPSB7XG4gIGd1blNjaG9vbDoge1xuICAgIGZpbmFsUm93czogNDIsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnB1bHNlUGlzdG9sXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDQpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg3KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDgpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDIsIHNlY3Rpb24gPT4gZ3VuU2Nob29sUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTAsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihwaWNrKFtcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4ubmVlZGxlclNtZ1wiLCBcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMikuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQub3V0ZXIgOiBjLnJpZ2h0Lm91dGVyIH0pO1xuICAgICAgICBpZiAoY3ljbGVJbmRleCAlIDMgPT09IDEpIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFySW5uZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm91dGVyIDogYy5sZWZ0Lm91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDYpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBpZiAoY3ljbGVJbmRleCAlIDIgPT09IDApIHNlY3Rpb24uYXQoNykucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDgpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm1pZCA6IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5uZWFyT3V0ZXIgOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoY29udGV4dC50aWVyID49IDIgPyA0IDogMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICB9LFxuICB9LFxuICBndWFyZEJsYWRlczoge1xuICAgIGZpbmFsUm93czogNDIsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwic3dvcmQuYXJjQmxhZGVcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNikud2VhcG9uKFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoNCk7XG4gICAgfSxcbiAgICBjeWNsZShjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQyLCBzZWN0aW9uID0+IGd1YXJkQmxhZGVQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMCwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic3dvcmQuY2xlYXZlclwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgaWYgKGN5Y2xlSW5kZXggJSAyID09PSAwKSBzZWN0aW9uLmF0KDcpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLmxlZnQubmVhcklubmVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDgpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm91dGVyIDogYy5yaWdodC5vdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDIsIHNlY3Rpb24gPT4gZ3VhcmRCbGFkZVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIGNyeXN0YWxTaWVnZToge1xuICAgIGZpbmFsUm93czogNDgsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDgsIHNlY3Rpb24gPT4gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTEsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihwaWNrKFtcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJndW4uc3BsaXR0ZXJSaWZsZVwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDQpLndlYXBvbihwaWNrKFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgICAgaWYgKGNvbnRleHQudGllciA+PSAyKSBzZWN0aW9uLmF0KDcpLndlYXBvbihcInN3b3JkLmNsZWF2ZXJcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5vdXRlciA6IGMucmlnaHQub3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSgyKTtcbiAgICB9LFxuICAgIGZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQ4LCBzZWN0aW9uID0+IGNyeXN0YWxTaWVnZVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIHN3YXJtQmxvb206IHtcbiAgICBmaW5hbFJvd3M6IDQ0LFxuICAgIG9wZW4oY29udGV4dCkge1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDksIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5wdWxzZVBpc3RvbFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgyKS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNSkud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDQsIHNlY3Rpb24gPT4gc3dhcm1CbG9vbVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDEyLCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubWlkIDogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKHBpY2soW1wiZ3VuLm5lZWRsZXJTbWdcIiwgXCJzd29yZC5hcmNCbGFkZVwiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDcpLndlYXBvbihwaWNrKFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic3dvcmQuY2xlYXZlclwiLCBcInNoaWVsZC5oZXhHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgxMSkuZW5lbXkoXCJ3aW5nZXJcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5vdXRlciA6IGMubGVmdC5vdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDQsIHNlY3Rpb24gPT4gc3dhcm1CbG9vbVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIG1pcnJvckFycmF5OiB7XG4gICAgZmluYWxSb3dzOiA0NixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4uYnVyc3RDYXJiaW5lXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgaWYgKGNvbnRleHQudGllciA+PSAyKSBzZWN0aW9uLmF0KDYpLndlYXBvbihcInN3b3JkLmNsZWF2ZXJcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoNCk7XG4gICAgfSxcbiAgICBjeWNsZShjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQ2LCBzZWN0aW9uID0+IG1pcnJvckFycmF5UHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTEsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihwaWNrKFtcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMiA9PT0gMCkgc2VjdGlvbi5hdCg4KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg5KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQubWlkIDogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgxMCkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhcklubmVyIDogYy5yaWdodC5uZWFySW5uZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSgyKTtcbiAgICB9LFxuICAgIGZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQ2LCBzZWN0aW9uID0+IG1pcnJvckFycmF5UHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhY2sob3B0aW9uczogQ29tcG9zZWRUcmFja09wdGlvbnMpOiBUcmFja01lbWJlciB7XG4gIGNvbnN0IGJ1aWxkZXIgPSB0cmFja0J1aWxkZXIuY3JlYXRlKHtcbiAgICBsYWJlbDogb3B0aW9ucy5sYWJlbCxcbiAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBvcHRpb25zLnNjZW5lSWQgfSxcbiAgICBiYWxhbmNlOiB7IGVuZW15SHA6IGVuZW15SHBCeVRpZXJbb3B0aW9ucy50aWVyXSwgZW5lbXlTcGVlZDogMSB9LFxuICB9KTtcbiAgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoYnVpbGRlciwgb3B0aW9ucy50aWVyKTtcbiAgY29uc3QgcGxhbiA9IHRoZW1lUGxhbnNbb3B0aW9ucy50aGVtZV07XG4gIGNvbnN0IHRhcmdldFJvd3MgPSB0YXJnZXRSb3dzQnlUaWVyW29wdGlvbnMudGllcl07XG4gIHBsYW4ub3Blbihjb250ZXh0KTtcbiAgbGV0IGN5Y2xlSW5kZXggPSAwO1xuICB3aGlsZSAoY29udGV4dC5jdXJzb3IgKyBwbGFuLmZpbmFsUm93cyA8IHRhcmdldFJvd3MpIHtcbiAgICBwbGFuLmN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpO1xuICAgIGN5Y2xlSW5kZXgrKztcbiAgfVxuICBwbGFuLmZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KTtcbiAgcmV0dXJuIGJ1aWxkZXIuYnVpbGQoKTtcbn1cbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlNreWJyZWFrXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFuIEF1cm9yYSBvcGVuZXIgZm9jdXNlZCBvbiBzaGllbGRzLCBzaG9ydCBzd29yZCByZWFkcywgYW5kIHBhdGllbnQgY2xvc2UtcmFuZ2UgY2xlYW51cC5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUmliYm9uIFN0b3JtXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkF1cm9yYSBwcmVzc3VyZSBleHBhbmRzIGludG8gYWx0ZXJuYXRpbmcgc2hpZWxkIHJlYnVpbGRzLCB3aWRlciBzd29yZCBjaG9pY2VzLCBhbmQgY2x1c3RlcmVkIGNsb3NlLXJhbmdlIHRocmVhdHMuXCIsXG4gIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gIHRpZXI6IDIsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIk1hZ25ldGljIERhd25cIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIEF1cm9yYSBmaW5hbGUgYXNrcyBmb3IgZGVsaWJlcmF0ZSBzaGllbGQgdGltaW5nIGFuZCBzd29yZCBzZWxlY3Rpb24gYWdhaW5zdCBsb25nLCByZWFkYWJsZSB0aHJlYXQgd2F2ZXMuXCIsXG4gIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlByaXNtIElnbml0aW9uXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgQ3J5c3RhbCBGb3JnZSBvcGVuZXIgYnVpbHQgYXJvdW5kIGJ1cnN0IGZpcmUsIGdsYXNzIGRlY295cywgYW5kIGVhcmx5IGhlYXZ5LXRocmVhdCByZWhlYXJzYWwuXCIsXG4gIHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gIHRoZW1lOiBcImNyeXN0YWxTaWVnZVwiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJGYWNldCBSdW5cIixcbiAgZGVzY3JpcHRpb246IFwiQ3J5c3RhbCBGb3JnZSBkZW5zaXR5IHNoYXJwZW5zIHdpdGggaGVhdmllciBndW5zLCBzdHVyZGllciBzaGllbGRzLCBhbmQgdGFuayBicmVha3MgZnJhbWVkIGJ5IGdsYXNzIGRlY295cy5cIixcbiAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gIHRpZXI6IDIsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkdsYXNzIEhhbW1lclwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgQ3J5c3RhbCBGb3JnZSBmaW5hbGUgY29tbWl0cyB0byBoZWF2eSB3ZWFwb24gcGF5b2ZmcywgcmVwZWF0ZWQgdGFuayBsYW5lcywgYW5kIHByaXNtYXRpYyBkZWNveSBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkZpcnN0IEdsb3dcIixcbiAgZGVzY3JpcHRpb246IFwiQSBndW4tZm9yd2FyZCBOZW9uIE5lYnVsYWUgb3BlbmVyIHdpdGggY2xlYXIgcmVidWlsZCBzaGVsdmVzIGFuZCBvbmx5IGEgZmV3IHNoaWVsZCBzYWZldHkgbmV0cy5cIixcbiAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiRHJpZnQgTGVzc29uXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbG9uZ2VyIE5lb24gTmVidWxhZSBndW4gbGVzc29uIHRoYXQgYWRkcyB3aW5nIHByZXNzdXJlLCBzdHJvbmdlciBmaXJlYXJtIGNob2ljZXMsIGFuZCBzcGFyc2Ugc2hpZWxkIHJlbGllZi5cIixcbiAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTmVidWxhIEdhdGVcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIE5lb24gTmVidWxhZSBndW4gZmluYWxlIGxheWVycyBoZWF2aWVyIGZpcmVhcm1zLCB0YW5rcywgYW5kIHN1c3RhaW5lZCBsYW5lIHJlYWRpbmcgd2l0aG91dCBsZWFuaW5nIG9uIHNwZWVkIGNoYW5nZXMuXCIsXG4gIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgdGhlbWU6IFwiZ3VuU2Nob29sXCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlBhbmVsIERhd25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBTb2xhciBBcnJheSBvcGVuZXIgd2l0aCBtaXJyb3JlZCByZWFkcywgc3BsaXQtbGFuZSB3ZWFwb24gdGltaW5nLCBhbmQgYnJpZ2h0IGJ1dCBtZWFzdXJlZCBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gIHRpZXI6IDEsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkhlbGlvc3RhdCBSdXNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlNvbGFyIEFycmF5IHByZXNzdXJlIGdyb3dzIHRocm91Z2ggbWlycm9yZWQgd2FsbHMsIHByZWNpc2lvbiByZWJ1aWxkcywgYW5kIGFsdGVybmF0aW5nIG91dGVyLWxhbmUgc3VyZ2VzLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTWlycm9yIFplbml0aFwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgU29sYXIgQXJyYXkgZmluYWxlIG1peGVzIG1pcnJvcmVkIHRhbmsgYnJlYWtzLCBzcGxpdC1maXJlIHJlYnVpbGRzLCBhbmQgbG9uZy1mb3JtIHByZWNpc2lvbiBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkJsb29tIFNpZ25hbFwiLFxuICBkZXNjcmlwdGlvbjogXCJBIFZvaWQgR2FyZGVuIG9wZW5lciBhYm91dCBncm93aW5nIHRoZSBzcXVhZCBlYXJseSBhbmQgc3VzdGFpbmluZyBjYWxtIGNyb3NzLWxhbmUgYmxvb20gcHJlc3N1cmUuXCIsXG4gIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICB0aGVtZTogXCJzd2FybUJsb29tXCIsXG4gIHRpZXI6IDEsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlJvb3QgTGF0dGljZVwiLFxuICBkZXNjcmlwdGlvbjogXCJWb2lkIEdhcmRlbiBhZGRzIGRlbnNlciBzcXVhZCBncm93dGggd2luZG93cywgc3BsaXQgd2VhcG9uIHN1cHBvcnQsIGFuZCBzbG93LWJsb29taW5nIHBhaXJlZCBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTmlnaHQgT3JjaGFyZFwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgVm9pZCBHYXJkZW4gZmluYWxlIGxlYW5zIGludG8gc3F1YWQgcmVjb3ZlcnksIGxheWVyZWQgc3VwcG9ydCBwaWNrdXBzLCBhbmQgYnJvYWQgb3JnYW5pYyBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrNFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2syIH0gZnJvbSBcIi4vVHJhY2s1XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazMgfSBmcm9tIFwiLi9UcmFjazZcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGNyeXN0YWxGb3JnZVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrN1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgY3J5c3RhbEZvcmdlVHJhY2syIH0gZnJvbSBcIi4vVHJhY2s4XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBjcnlzdGFsRm9yZ2VUcmFjazMgfSBmcm9tIFwiLi9UcmFjazlcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2sxXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazMgfSBmcm9tIFwiLi9UcmFjazNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHNvbGFyQXJyYXlUcmFjazEgfSBmcm9tIFwiLi9UcmFjazEzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBzb2xhckFycmF5VHJhY2syIH0gZnJvbSBcIi4vVHJhY2sxNFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgc29sYXJBcnJheVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrMTVcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHZvaWRHYXJkZW5UcmFjazEgfSBmcm9tIFwiLi9UcmFjazEwXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyB2b2lkR2FyZGVuVHJhY2syIH0gZnJvbSBcIi4vVHJhY2sxMVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgdm9pZEdhcmRlblRyYWNrMyB9IGZyb20gXCIuL1RyYWNrMTJcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSB7XG4gIFwibmVvbi1uZWJ1bGFlLTFcIjogbmVvbk5lYnVsYWVUcmFjazEsXG4gIFwibmVvbi1uZWJ1bGFlLTJcIjogbmVvbk5lYnVsYWVUcmFjazIsXG4gIFwibmVvbi1uZWJ1bGFlLTNcIjogbmVvbk5lYnVsYWVUcmFjazMsXG4gIFwiYXVyb3JhLTFcIjogYXVyb3JhVHJhY2sxLFxuICBcImF1cm9yYS0yXCI6IGF1cm9yYVRyYWNrMixcbiAgXCJhdXJvcmEtM1wiOiBhdXJvcmFUcmFjazMsXG4gIFwiY3J5c3RhbC1mb3JnZS0xXCI6IGNyeXN0YWxGb3JnZVRyYWNrMSxcbiAgXCJjcnlzdGFsLWZvcmdlLTJcIjogY3J5c3RhbEZvcmdlVHJhY2syLFxuICBcImNyeXN0YWwtZm9yZ2UtM1wiOiBjcnlzdGFsRm9yZ2VUcmFjazMsXG4gIFwidm9pZC1nYXJkZW4tMVwiOiB2b2lkR2FyZGVuVHJhY2sxLFxuICBcInZvaWQtZ2FyZGVuLTJcIjogdm9pZEdhcmRlblRyYWNrMixcbiAgXCJ2b2lkLWdhcmRlbi0zXCI6IHZvaWRHYXJkZW5UcmFjazMsXG4gIFwic29sYXItYXJyYXktMVwiOiBzb2xhckFycmF5VHJhY2sxLFxuICBcInNvbGFyLWFycmF5LTJcIjogc29sYXJBcnJheVRyYWNrMixcbiAgXCJzb2xhci1hcnJheS0zXCI6IHNvbGFyQXJyYXlUcmFjazMsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbGllcyA9IHtcbiAgbmVvbk5lYnVsYWU6IHtcbiAgICBsYWJlbDogXCJOZW9uIE5lYnVsYWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxlYXJuaW5nIGFyYyBhYm91dCBsYW5lcywgcGlja3Vwcywgc2hpZWxkcywgYW5kIGNvbnRyb2xsZWQgcHJlc3N1cmUuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJuZW9uSGFsbFwiIH0sXG4gICAgdHJhY2tJZHM6IFtcIm5lb24tbmVidWxhZS0xXCIsIFwibmVvbi1uZWJ1bGFlLTJcIiwgXCJuZW9uLW5lYnVsYWUtM1wiXSxcbiAgfSxcbiAgYXVyb3JhOiB7XG4gICAgbGFiZWw6IFwiQXVyb3JhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVuc2UgcGxhbmV0YXJ5IGFzc2F1bHRzIHdpdGggYnJpZ2h0ZXIgcmVjb3Zlcnkgd2luZG93cyBhbmQgc2hhcnBlciB0aHJlYXQgd2F2ZXMuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJhdXJvcmFcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJhdXJvcmEtMVwiLCBcImF1cm9yYS0yXCIsIFwiYXVyb3JhLTNcIl0sXG4gIH0sXG4gIGNyeXN0YWxGb3JnZToge1xuICAgIGxhYmVsOiBcIkNyeXN0YWwgRm9yZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmlzbWF0aWMgZmFjdG9yeSBsYW5lcyB3aXRoIHNoYXJwIHByZXNzdXJlLCBnbGFzcyBkZWNveXMsIGFuZCBoZWF2eSBjcnlzdGFsbGluZSBicmVha3MuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJjcnlzdGFsLWZvcmdlLTFcIiwgXCJjcnlzdGFsLWZvcmdlLTJcIiwgXCJjcnlzdGFsLWZvcmdlLTNcIl0sXG4gIH0sXG4gIHZvaWRHYXJkZW46IHtcbiAgICBsYWJlbDogXCJWb2lkIEdhcmRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpb2x1bWluZXNjZW50IG5pZ2h0IGxhbmVzIHdpdGggc3BhcnNlIGJsb29tcywgZGVjb3lzLCBhbmQgY29udHJvbGxlZCByZWNvdmVyeSBwb2NrZXRzLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiIH0sXG4gICAgdHJhY2tJZHM6IFtcInZvaWQtZ2FyZGVuLTFcIiwgXCJ2b2lkLWdhcmRlbi0yXCIsIFwidm9pZC1nYXJkZW4tM1wiXSxcbiAgfSxcbiAgc29sYXJBcnJheToge1xuICAgIGxhYmVsOiBcIlNvbGFyIEFycmF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnJpZ2h0IG9yYml0YWwgbGFuZXMgd2l0aCBtaXJyb3JlZCB3YWxscywgZmFzdCBvdXRlciBzdXJnZXMsIGFuZCBkZWNpc2l2ZSBoZWF2eSB0b29scy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJzb2xhci1hcnJheS0xXCIsIFwic29sYXItYXJyYXktMlwiLCBcInNvbGFyLWFycmF5LTNcIl0sXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbmV4cG9ydCB7XG4gIGF1cm9yYVRyYWNrMSxcbiAgYXVyb3JhVHJhY2syLFxuICBhdXJvcmFUcmFjazMsXG4gIGNyeXN0YWxGb3JnZVRyYWNrMSxcbiAgY3J5c3RhbEZvcmdlVHJhY2syLFxuICBjcnlzdGFsRm9yZ2VUcmFjazMsXG4gIG5lb25OZWJ1bGFlVHJhY2sxLFxuICBuZW9uTmVidWxhZVRyYWNrMixcbiAgbmVvbk5lYnVsYWVUcmFjazMsXG4gIHNvbGFyQXJyYXlUcmFjazEsXG4gIHNvbGFyQXJyYXlUcmFjazIsXG4gIHNvbGFyQXJyYXlUcmFjazMsXG4gIHZvaWRHYXJkZW5UcmFjazEsXG4gIHZvaWRHYXJkZW5UcmFjazIsXG4gIHZvaWRHYXJkZW5UcmFjazMsXG59O1xuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrRmFtaWx5TWVtYmVyLCBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcGFyc2VUcmFja0RlZmluaXRpb24gfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHRyYWNrRmFtaWxpZXMsIHRyYWNrcyB9IGZyb20gXCIuL3RyYWNrc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInRyYWNrXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJUcmFja1wiO1xuICByZWFkb25seSBtZW1iZXJzID0gdHJhY2tzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj47XG4gIHJlYWRvbmx5IGZhbWlsaWVzID0gdHJhY2tGYW1pbGllcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlNZW1iZXI8a2V5b2YgdHlwZW9mIHRyYWNrcz4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICAgIHRoaXMucmVxdWlyZShpc0xhbmVSdW5uZXJTY2VuZUlkKHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2lkLCBmYW1pbHldIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmFtaWxpZXMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoZmFtaWx5LnRyYWNrSWRzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIHRyYWNrLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQoZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgICBmb3IgKGNvbnN0IHRyYWNrSWQgb2YgZmFtaWx5LnRyYWNrSWRzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0cmFja0lkIGluIHRoaXMubWVtYmVycywgYCR7aWR9IHJlZmVyZW5jZXMgdW5rbm93biB0cmFjayBcIiR7dHJhY2tJZH1cIi5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRoaXMubWVtYmVyc1t0cmFja0lkXS5lbnZpcm9ubWVudC5zY2VuZUlkID09PSBmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCwgYCR7dHJhY2tJZH0gbXVzdCB1c2UgdGhlICR7aWR9IHNjZW5lLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG5leHBvcnQgdHlwZSBUcmFja0ZhbWlseUlkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5LmZhbWlsaWVzO1xuIiwgImltcG9ydCB7XG4gIE5lb25Qcm9qZWN0aWxlLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxuICB0eXBlIE5lb25Qcm9qZWN0aWxlU2hhcGUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUge1xuICBHdW5MZXZlbCxcbiAgR3VuTWVtYmVyLFxuICBJbXBhY3RFZmZlY3QsXG4gIE11enpsZUVmZmVjdCxcbiAgUHJvamVjdGlsZVNoYXBlLFxufSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1blByb2plY3RpbGUge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2eDogbnVtYmVyO1xuICB2eTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHBpZXJjZVJlbWFpbmluZzogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB0cmFpbENvbG9yOiBzdHJpbmc7XG4gIGNvcmVDb2xvcjogc3RyaW5nO1xuICBhc3BlY3Q6IG51bWJlcjtcbiAgdHJhaWxXaWR0aFNjYWxlOiBudW1iZXI7XG4gIHZpc3VhbEludGVuc2l0eTogbnVtYmVyO1xuICBzaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgaW1wYWN0RHVyYXRpb25NczogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXI6IGJvb2xlYW47XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEVuZW15SWRzOiBTZXQ8bnVtYmVyPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5FZmZlY3Qge1xuICBraW5kOiBcIm11enpsZVwiIHwgXCJpbXBhY3RcIiB8IFwiZGVhdGhcIjtcbiAgc3R5bGU6IE11enpsZUVmZmVjdCB8IEltcGFjdEVmZmVjdCB8IFwiZGVhdGhCbG9vbVwiO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I6IHN0cmluZztcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGV4cGlyZXNBdDogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBzZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVGFyZ2V0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFuZTogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFNjaGVkdWxlZFZvbGxleSB7XG4gIGZpcmVzQXQ6IG51bWJlcjtcbiAgZ3VuOiBHdW5NZW1iZXI7XG4gIGxldmVsOiBHdW5MZXZlbDtcbiAgbGFuZTogbnVtYmVyO1xuICBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbiAgc2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEd1blNpbXVsYXRpb24ge1xuICByZWFkb25seSBwcm9qZWN0aWxlczogR3VuUHJvamVjdGlsZVtdID0gW107XG4gIHJlYWRvbmx5IGVmZmVjdHM6IEd1bkVmZmVjdFtdID0gW107XG4gIHByaXZhdGUgc2NoZWR1bGVkVm9sbGV5czogU2NoZWR1bGVkVm9sbGV5W10gPSBbXTtcbiAgcHJpdmF0ZSBzZXF1ZW5jZSA9IDA7XG4gIHByaXZhdGUgc2hvdFNlcXVlbmNlID0gMDtcblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5lZmZlY3RzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBmaXJlKGd1bjogR3VuTWVtYmVyLCBsZXZlbDogR3VuTGV2ZWwsIGxhbmU6IG51bWJlciwgb3JpZ2luczogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIG5vdzogbnVtYmVyLCBzY2FsZSA9IDEpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBidXJzdEluZGV4ID0gMDsgYnVyc3RJbmRleCA8IGxldmVsLmJ1cnN0Q291bnQ7IGJ1cnN0SW5kZXgrKykge1xuICAgICAgdGhpcy5zY2hlZHVsZWRWb2xsZXlzLnB1c2goe1xuICAgICAgICBmaXJlc0F0OiBub3cgKyBidXJzdEluZGV4ICogbGV2ZWwuYnVyc3RJbnRlcnZhbE1zLFxuICAgICAgICBndW4sIGxldmVsLCBsYW5lLCBvcmlnaW5zOiBvcmlnaW5zLm1hcChvcmlnaW4gPT4gKHsgLi4ub3JpZ2luIH0pKSwgc2NhbGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaXJpbmcobm93OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBmaXJlZCA9IDA7XG4gICAgY29uc3QgZHVlID0gdGhpcy5zY2hlZHVsZWRWb2xsZXlzLmZpbHRlcih2b2xsZXkgPT4gdm9sbGV5LmZpcmVzQXQgPD0gbm93KTtcbiAgICB0aGlzLnNjaGVkdWxlZFZvbGxleXMgPSB0aGlzLnNjaGVkdWxlZFZvbGxleXMuZmlsdGVyKHZvbGxleSA9PiB2b2xsZXkuZmlyZXNBdCA+IG5vdyk7XG4gICAgZm9yIChjb25zdCB2b2xsZXkgb2YgZHVlKSB7XG4gICAgICB0aGlzLnNwYXduVm9sbGV5KHZvbGxleSwgbm93KTtcbiAgICAgIGZpcmVkKys7XG4gICAgfVxuICAgIHJldHVybiBmaXJlZDtcbiAgfVxuXG4gIHVwZGF0ZVByb2plY3RpbGVzKFxuICAgIGRlbHRhOiBudW1iZXIsXG4gICAgbm93OiBudW1iZXIsXG4gICAgdGFyZ2V0czogcmVhZG9ubHkgR3VuVGFyZ2V0W10sXG4gICAgYm91bmRzOiB7IHRvcDogbnVtYmVyOyBsZWZ0PzogbnVtYmVyOyByaWdodD86IG51bWJlciB9LFxuICAgIG9uSGl0OiAocHJvamVjdGlsZTogR3VuUHJvamVjdGlsZSwgdGFyZ2V0OiBHdW5UYXJnZXQpID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJvamVjdGlsZSBvZiBbLi4udGhpcy5wcm9qZWN0aWxlc10pIHtcbiAgICAgIHByb2plY3RpbGUueCArPSBwcm9qZWN0aWxlLnZ4ICogZGVsdGE7XG4gICAgICBwcm9qZWN0aWxlLnkgKz0gcHJvamVjdGlsZS52eSAqIGRlbHRhO1xuICAgICAgaWYgKHByb2plY3RpbGUueSA8IGJvdW5kcy50b3AgfHwgcHJvamVjdGlsZS54IDwgKGJvdW5kcy5sZWZ0ID8/IC1JbmZpbml0eSkgfHwgcHJvamVjdGlsZS54ID4gKGJvdW5kcy5yaWdodCA/PyBJbmZpbml0eSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9qZWN0aWxlKHByb2plY3RpbGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgaWYgKHRhcmdldC5keWluZyB8fCBwcm9qZWN0aWxlLmxhbmUgIT09IHRhcmdldC5sYW5lIHx8IHByb2plY3RpbGUuaGl0RW5lbXlJZHMuaGFzKHRhcmdldC5pZCkpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkeCA9IHByb2plY3RpbGUueCAtIHRhcmdldC54O1xuICAgICAgICBjb25zdCBkeSA9IHByb2plY3RpbGUueSAtIHRhcmdldC55O1xuICAgICAgICBjb25zdCBoaXRSYWRpdXMgPSBwcm9qZWN0aWxlLnJhZGl1cyArIHRhcmdldC5yYWRpdXM7XG4gICAgICAgIGlmIChkeCAqIGR4ICsgZHkgKiBkeSA+IGhpdFJhZGl1cyAqIGhpdFJhZGl1cykgY29udGludWU7XG4gICAgICAgIHByb2plY3RpbGUuaGl0RW5lbXlJZHMuYWRkKHRhcmdldC5pZCk7XG4gICAgICAgIHRhcmdldC5oZWFsdGggLT0gcHJvamVjdGlsZS5kYW1hZ2U7XG4gICAgICAgIHRhcmdldC55IC09IHByb2plY3RpbGUua25vY2tiYWNrO1xuICAgICAgICB0aGlzLmVmZmVjdHMucHVzaCh7XG4gICAgICAgICAga2luZDogXCJpbXBhY3RcIixcbiAgICAgICAgICBzdHlsZTogcHJvamVjdGlsZS5pbXBhY3RFZmZlY3QsXG4gICAgICAgICAgeDogcHJvamVjdGlsZS54LCB5OiBwcm9qZWN0aWxlLnksXG4gICAgICAgICAgY29sb3I6IHByb2plY3RpbGUuY29sb3IsIHNlY29uZGFyeUNvbG9yOiBwcm9qZWN0aWxlLnRyYWlsQ29sb3IsXG4gICAgICAgICAgcmFkaXVzOiBwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUuaGl0Rmxhc2hTY2FsZSAqIDQsXG4gICAgICAgICAgZXhwaXJlc0F0OiBub3cgKyBwcm9qZWN0aWxlLmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgZHVyYXRpb246IHByb2plY3RpbGUuaW1wYWN0RHVyYXRpb25NcyxcbiAgICAgICAgICBzZWVkOiBwcm9qZWN0aWxlLmlkLFxuICAgICAgICB9KTtcbiAgICAgICAgb25IaXQocHJvamVjdGlsZSwgdGFyZ2V0KTtcbiAgICAgICAgaWYgKHByb2plY3RpbGUucGllcmNlUmVtYWluaW5nID4gMCkgcHJvamVjdGlsZS5waWVyY2VSZW1haW5pbmctLTtcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZSk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0aWxlcy5pbmNsdWRlcyhwcm9qZWN0aWxlKSkgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgZWZmZWN0IG9mIFsuLi50aGlzLmVmZmVjdHNdKSB7XG4gICAgICBpZiAoZWZmZWN0LmV4cGlyZXNBdCA8PSBub3cpIHRoaXMuZWZmZWN0cy5zcGxpY2UodGhpcy5lZmZlY3RzLmluZGV4T2YoZWZmZWN0KSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJvamVjdGlsZVByaW1pdGl2ZXMoKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aWxlcy5mbGF0TWFwKHByb2plY3RpbGUgPT4gbmV3IE5lb25Qcm9qZWN0aWxlKHtcbiAgICAgIHg6IHByb2plY3RpbGUueCwgeTogcHJvamVjdGlsZS55LFxuICAgICAgdmVsb2NpdHlYOiBwcm9qZWN0aWxlLnZ4LCB2ZWxvY2l0eVk6IHByb2plY3RpbGUudnksXG4gICAgICByYWRpdXM6IHByb2plY3RpbGUucmFkaXVzLFxuICAgICAgbGVuZ3RoOiBwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUuYXNwZWN0LFxuICAgICAgdHJhaWxMZW5ndGg6IHByb2plY3RpbGUudHJhaWxMZW5ndGgsXG4gICAgICB0cmFpbFdpZHRoOiBNYXRoLm1heChwcm9qZWN0aWxlLnJhZGl1cyAqIHByb2plY3RpbGUudHJhaWxXaWR0aFNjYWxlLCAxLjEpLFxuICAgICAgY29sb3I6IHByb2plY3RpbGUuY29sb3IsXG4gICAgICB0cmFpbENvbG9yOiBwcm9qZWN0aWxlLnRyYWlsQ29sb3IsXG4gICAgICBjb3JlQ29sb3I6IHByb2plY3RpbGUuY29yZUNvbG9yLFxuICAgICAgc2hhcGU6IHByb2plY3RpbGUuc2hhcGUgYXMgTmVvblByb2plY3RpbGVTaGFwZSxcbiAgICAgIGludGVuc2l0eTogcHJvamVjdGlsZS52aXN1YWxJbnRlbnNpdHkgKiAocHJvamVjdGlsZS50cmFjZXIgPyAxLjM1IDogMSksXG4gICAgICBnbG93OiBwcm9qZWN0aWxlLnRyYWNlciA/IDEuNCA6IC43MixcbiAgICB9KS5wcmltaXRpdmVzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGF3blZvbGxleSh2b2xsZXk6IFNjaGVkdWxlZFZvbGxleSwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGd1biwgbGV2ZWwsIGxhbmUsIG9yaWdpbnMsIHNjYWxlIH0gPSB2b2xsZXk7XG4gICAgZm9yIChjb25zdCBvcmlnaW4gb2Ygb3JpZ2lucykge1xuICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1heCgxLCBsZXZlbC5wcm9qZWN0aWxlQ291bnQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlRGVncmVlcyA9IGNvdW50ID09PSAxID8gMCA6IChpbmRleCAvIChjb3VudCAtIDEpIC0gLjUpICogbGV2ZWwuc3ByZWFkRGVncmVlcztcbiAgICAgICAgY29uc3QgYW5nbGUgPSBhbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGxldmVsLnByb2plY3RpbGVTcGVlZCAqIHNjYWxlO1xuICAgICAgICB0aGlzLnNob3RTZXF1ZW5jZSsrO1xuICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2goe1xuICAgICAgICAgIGlkOiArK3RoaXMuc2VxdWVuY2UsIGxhbmUsXG4gICAgICAgICAgeDogb3JpZ2luLnggKyAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIGd1bi52aXN1YWxJZGVudGl0eS5ob3Jpem9udGFsSml0dGVyICogc2NhbGUsXG4gICAgICAgICAgeTogb3JpZ2luLnksXG4gICAgICAgICAgdng6IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkLFxuICAgICAgICAgIHZ5OiAtTWF0aC5jb3MoYW5nbGUpICogc3BlZWQsXG4gICAgICAgICAgcmFkaXVzOiBsZXZlbC5wcm9qZWN0aWxlUmFkaXVzICogc2NhbGUsXG4gICAgICAgICAgZGFtYWdlOiBsZXZlbC5kYW1hZ2UsXG4gICAgICAgICAgcGllcmNlUmVtYWluaW5nOiBsZXZlbC5waWVyY2UsXG4gICAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdLFxuICAgICAgICAgIHRyYWlsQ29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSxcbiAgICAgICAgICBjb3JlQ29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5jb3JlQ29sb3JdLFxuICAgICAgICAgIGFzcGVjdDogZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVBc3BlY3QsXG4gICAgICAgICAgdHJhaWxXaWR0aFNjYWxlOiBndW4udmlzdWFsSWRlbnRpdHkudHJhaWxXaWR0aFNjYWxlLFxuICAgICAgICAgIHZpc3VhbEludGVuc2l0eTogZ3VuLnZpc3VhbElkZW50aXR5LnZpc3VhbEludGVuc2l0eSxcbiAgICAgICAgICBzaGFwZTogZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVTaGFwZSxcbiAgICAgICAgICBpbXBhY3RFZmZlY3Q6IGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3RFZmZlY3QsXG4gICAgICAgICAgaW1wYWN0RHVyYXRpb25NczogZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMsXG4gICAgICAgICAgdHJhaWxMZW5ndGg6IGxldmVsLnRyYWlsTGVuZ3RoICogc2NhbGUsXG4gICAgICAgICAgdHJhY2VyOiBsZXZlbC50cmFjZXJFdmVyeU50aFNob3QgPiAwICYmIHRoaXMuc2hvdFNlcXVlbmNlICUgbGV2ZWwudHJhY2VyRXZlcnlOdGhTaG90ID09PSAwLFxuICAgICAgICAgIGtub2NrYmFjazogbGV2ZWwua25vY2tiYWNrICogc2NhbGUsXG4gICAgICAgICAgaGl0Rmxhc2hTY2FsZTogbGV2ZWwuaGl0Rmxhc2hTY2FsZSxcbiAgICAgICAgICBoaXRFbmVteUlkczogbmV3IFNldCgpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lZmZlY3RzLnB1c2goe1xuICAgICAga2luZDogXCJtdXp6bGVcIiwgc3R5bGU6IGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVFZmZlY3QsXG4gICAgICB4OiBvcmlnaW5zLnJlZHVjZSgoc3VtLCBvcmlnaW4pID0+IHN1bSArIG9yaWdpbi54LCAwKSAvIG9yaWdpbnMubGVuZ3RoLFxuICAgICAgeTogb3JpZ2luc1swXT8ueSA/PyAwLFxuICAgICAgY29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSxcbiAgICAgIHJhZGl1czogMTAgKiBsZXZlbC5tdXp6bGVGbGFzaFNjYWxlICogc2NhbGUsXG4gICAgICBleHBpcmVzQXQ6IG5vdyArIGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zLFxuICAgICAgZHVyYXRpb246IGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zLFxuICAgICAgc2VlZDogdGhpcy5zaG90U2VxdWVuY2UsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVByb2plY3RpbGUocHJvamVjdGlsZTogR3VuUHJvamVjdGlsZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0aWxlcy5pbmRleE9mKHByb2plY3RpbGUpO1xuICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLnByb2plY3RpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsICIvKipcbiAqIE5lYXJieVRocmVhdFF1ZXJ5IFx1MjAxNCBzaGFyZWQgbGFuZS1hd2FyZSBlbmVteSBxdWVyeSBmb3Igc2hpZWxkIGFuZCBzd29yZCBmYW1pbGllcy5cbiAqXG4gKiBCb3RoIHNoaWVsZHMgYW5kIHN3b3JkcyBvcGVyYXRlIG5lYXIgdGhlIHBsYXllciwgc28gdGhleSBzaGFyZSB0aGlzIG1vZHVsZVxuICogdG8gYXZvaWQgaW5kZXBlbmRlbnQsIHBvdGVudGlhbGx5IGNvbmZsaWN0aW5nIHNjYW5zLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIGludGVudGlvbmFsbHkgbWluaW1hbC4gSXQgcHJvdmlkZXMgZW5vdWdoIHN0cnVjdHVyZSB0byBiZVxuICogZnV0dXJlLWZyaWVuZGx5IChvcmlnaW5TaGFwZSBpbmRleCwgY29sdW1uLWJhbmQgYXdhcmVuZXNzKSB3aXRob3V0XG4gKiBvdmVyLWJ1aWxkaW5nLiBFeHRlbmQgd2hlbiBuZWVkZWQgXHUyMDE0IGRvIG5vdCByZWZhY3RvciBwcmVtYXR1cmVseS5cbiAqXG4gKiBOZWFyLXBsYXllciBlZmZlY3QgcHJlY2VkZW5jZSAoYXBwbGllZCBieSBtYWluLnRzKTpcbiAqICAgMS4gc2hpZWxkQmxvY2sgICAgICAgIFx1MjAxNCBjaGFyZ2UtYmFzZWQgaGl0IGFic29ycHRpb25cbiAqICAgMi4gc2hpZWxkUHVsc2UgICAgICAgIFx1MjAxNCBlbWVyZ2VuY3kgcHVzaFxuICogICAzLiBzd29yZEF0dGFjayAgICAgICAgXHUyMDE0IHN3b3JkIGZhbWlseVxuICogICA0LiBzaGllbGRDb250YWN0RGFtYWdlIFx1MjAxNCBjb250YWN0IGRhbWFnZSBvbiBzaGllbGQgZWRnZVxuICogICA1LiBzaGllbGRBdXJhICAgICAgICAgXHUyMDE0IHNsb3cvZGVidWZmIGF1cmFcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqIE1pbmltYWwgZW5lbXkgaW50ZXJmYWNlIGV4cGVjdGVkIGJ5IHRoZSB0aHJlYXQgcXVlcnkgc3lzdGVtLiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaHJlYXRUYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICBsYW5lOiAwIHwgMTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJvd0lkPzogbnVtYmVyO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaHJlYXRRdWVyeU9wdGlvbnMge1xuICAvKiogUGxheWVyL3NoaWVsZC9zd29yZCBvcmlnaW4gaW4gc2NyZWVuIGNvb3JkaW5hdGVzLiAqL1xuICBvcmlnaW46IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgLyoqIFBsYXllcidzIGN1cnJlbnQgbGFuZS4gKi9cbiAgbGFuZTogMCB8IDE7XG4gIC8qKiBNYXggY2lyY3VsYXIgZGlzdGFuY2UgdG8gaW5jbHVkZS4gKi9cbiAgcmFuZ2U6IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgdG8gYWxzbyBpbmNsdWRlIGVuZW1pZXMgaW4gdGhlIGFkamFjZW50IGxhbmUuIERlZmF1bHRzIHRvIGZhbHNlLiAqL1xuICBpbmNsdWRlQWRqYWNlbnRMYW5lcz86IGJvb2xlYW47XG4gIC8qKiBMaW1pdCB0aGUgbnVtYmVyIG9mIHJldHVybmVkIHRocmVhdHMuIERlZmF1bHRzIHRvIHVubGltaXRlZC4gKi9cbiAgbWF4VGFyZ2V0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIEVuZW15IElEcyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGNsYWltZWQgYnkgYSBoaWdoZXItcHJpb3JpdHkgZWZmZWN0XG4gICAqIHRoaXMgZnJhbWUgYW5kIHNob3VsZCBub3QgYmUgZG91YmxlLWNvdW50ZWQuXG4gICAqIEZ1dHVyZSB1c2UgXHUyMDE0IGN1cnJlbnRseSBlbmVtaWVzIGNhbiBiZSBhZmZlY3RlZCBieSBtdWx0aXBsZSBzeXN0ZW1zIHBlclxuICAgKiBmcmFtZSwgYnV0IHRoaXMgc2V0IHByb3ZpZGVzIHRoZSBob29rIHRvIGNoYW5nZSB0aGF0LlxuICAgKi9cbiAgZXhjbHVkZUlkcz86IFJlYWRvbmx5U2V0PG51bWJlcj47XG4gIC8qKlxuICAgKiBQdXJwb3NlIGFubm90YXRpb24uIExvZ2dlZCBpbiBkZXYgYnVpbGRzLiBOb3QgdXNlZCBmb3IgZmlsdGVyaW5nIHlldC5cbiAgICogRnV0dXJlOiBjb3VsZCBkcml2ZSBwZXItZmFtaWx5IHRhcmdldGluZyBwcmVmZXJlbmNlcy5cbiAgICovXG4gIHB1cnBvc2U6IFwic2hpZWxkXCIgfCBcInN3b3JkXCIgfCBcImF1cmFcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZWFyYnlUaHJlYXQge1xuICB0YXJnZXQ6IFRocmVhdFRhcmdldDtcbiAgLyoqIEV1Y2xpZGVhbiBkaXN0YW5jZSBmcm9tIG9yaWdpbiB0byBlbmVteSBjZW50ZXIuICovXG4gIGRpc3RhbmNlOiBudW1iZXI7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUXVlcnkgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFJldHVybnMgbGl2ZSBlbmVtaWVzIHNvcnRlZCBieSBkaXN0YW5jZSAobmVhcmVzdCBmaXJzdCkgdGhhdCBmYWxsIHdpdGhpblxuICogdGhlIGdpdmVuIHJhbmdlIGFuZCBsYW5lIHBvbGljeS5cbiAqXG4gKiBFbmVtaWVzIHRoYXQgYXJlIGR5aW5nIGFyZSBhbHdheXMgZXhjbHVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeU5lYXJieVRocmVhdHMoXG4gIGVuZW1pZXM6IHJlYWRvbmx5IFRocmVhdFRhcmdldFtdLFxuICBvcHRzOiBUaHJlYXRRdWVyeU9wdGlvbnMsXG4pOiBOZWFyYnlUaHJlYXRbXSB7XG4gIGNvbnN0IHsgb3JpZ2luLCBsYW5lLCByYW5nZSwgaW5jbHVkZUFkamFjZW50TGFuZXMgPSBmYWxzZSwgbWF4VGFyZ2V0cywgZXhjbHVkZUlkcyB9ID0gb3B0cztcbiAgY29uc3QgcmFuZ2VTcSA9IHJhbmdlICogcmFuZ2U7XG4gIGNvbnN0IHJlc3VsdHM6IE5lYXJieVRocmVhdFtdID0gW107XG5cbiAgZm9yIChjb25zdCB0YXJnZXQgb2YgZW5lbWllcykge1xuICAgIGlmICh0YXJnZXQuZHlpbmcpIGNvbnRpbnVlO1xuICAgIGlmICghaW5jbHVkZUFkamFjZW50TGFuZXMgJiYgdGFyZ2V0LmxhbmUgIT09IGxhbmUpIGNvbnRpbnVlO1xuICAgIGlmIChleGNsdWRlSWRzPy5oYXModGFyZ2V0LmlkKSkgY29udGludWU7XG4gICAgY29uc3QgZHggPSB0YXJnZXQueCAtIG9yaWdpbi54O1xuICAgIGNvbnN0IGR5ID0gdGFyZ2V0LnkgLSBvcmlnaW4ueTtcbiAgICBjb25zdCBkaXN0U3EgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICBpZiAoZGlzdFNxID4gcmFuZ2VTcSkgY29udGludWU7XG4gICAgcmVzdWx0cy5wdXNoKHsgdGFyZ2V0LCBkaXN0YW5jZTogTWF0aC5zcXJ0KGRpc3RTcSkgfSk7XG4gIH1cblxuICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IGEuZGlzdGFuY2UgLSBiLmRpc3RhbmNlKTtcblxuICByZXR1cm4gbWF4VGFyZ2V0cyAhPT0gdW5kZWZpbmVkID8gcmVzdWx0cy5zbGljZSgwLCBtYXhUYXJnZXRzKSA6IHJlc3VsdHM7XG59XG4iLCAiLyoqXG4gKiBTaGllbGRFdmFsdWF0b3IgXHUyMDE0IHBlci1mcmFtZSBzaGllbGQgc3RhdGUgYW5kIHRpY2sgbG9naWMuXG4gKlxuICogT25lIFNoaWVsZFN0YXRlIHRyYWNrcyB0aGUgbGl2ZSBydW50aW1lIHN0YXRlIGZvciB3aGF0ZXZlciBzaGllbGQgaXNcbiAqIGN1cnJlbnRseSBlcXVpcHBlZC4gVGhlIHRpY2tTaGllbGQoKSBmdW5jdGlvbiBkcml2ZXMgYWxsIGJlaGF2aW9yYWwgbW9kZXNcbiAqIChjaGFyZ2UsIHB1bHNlLCBjb250YWN0LCBhdXJhKSBhbmQgcmV0dXJucyBhIHJlc3VsdCBmb3IgbWFpbi50cyB0byBhcHBseS5cbiAqXG4gKiBEZXNpZ24gcnVsZTogdGhpcyBtb2R1bGUgZG9lcyBub3QgbW9kaWZ5IGVuZW15IGFycmF5cyBkaXJlY3RseS4gSXQgcmV0dXJuc1xuICogYSBTaGllbGRUaWNrUmVzdWx0IHRoYXQgbWFpbi50cyBhcHBsaWVzLiBUaGlzIGtlZXBzIHRoZSBzaGllbGQgc3lzdGVtXG4gKiB0ZXN0YWJsZSBhbmQgY29tcG9zYWJsZSB3aXRoIG90aGVyIG5lYXItcGxheWVyIGVmZmVjdHMuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBTaGllbGRJZCwgU2hpZWxkTWVtYmVyIH0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb24vU2hpZWxkRmFtaWx5XCI7XG5pbXBvcnQgdHlwZSB7IE5lYXJieVRocmVhdCB9IGZyb20gXCIuL25lYXJieVRocmVhdFF1ZXJ5XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWN0aXZlIHB1bHNlIGVmZmVjdCAodmlzdWFsKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlUHVsc2VFZmZlY3Qge1xuICAvKiogUHJvZ3Jlc3MgMFx1MjE5MjEuIERyaXZlbiBieSAobm93IC0gc3RhcnRlZEF0KSAvIHB1bHNlRHVyYXRpb25Ncy4gKi9cbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgLyoqIFRpbWVzdGFtcCB3aGVuIHRoZSBwdWxzZSB3YXMgdHJpZ2dlcmVkLiAqL1xuICBzdGFydGVkQXQ6IG51bWJlcjtcbiAgLyoqIER1cmF0aW9uIGluIG1zLiAqL1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBDZW50ZXIgeCAoc25hcHNob3Qgb2YgcGxheWVyIHBvc2l0aW9uIHdoZW4gdHJpZ2dlcmVkKS4gKi9cbiAgeDogbnVtYmVyO1xuICAvKiogQ2VudGVyIHkuICovXG4gIHk6IG51bWJlcjtcbiAgLyoqIE1heGltdW0gcmFkaXVzIGF0IHBlYWsgZXhwYW5zaW9uLiAqL1xuICBtYXhSYWRpdXM6IG51bWJlcjtcbiAgLyoqIENvbG9yLiAqL1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNoaWVsZCBzdGF0ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTaGllbGRTdGF0ZSB7XG4gIHNoaWVsZElkOiBTaGllbGRJZDtcbiAgLyoqIFJlbWFpbmluZyBjaGFyZ2VzIChjaGFyZ2UtYmFzZWQgc2hpZWxkcykuICovXG4gIGNoYXJnZXM6IG51bWJlcjtcbiAgLyoqIFNlY29uZHMgdW50aWwgY29vbGRvd24gY29tcGxldGVzLiAqL1xuICBjb29sZG93bkxlZnQ6IG51bWJlcjtcbiAgLyoqIG1zIHRpbWVzdGFtcCBhZnRlciB3aGljaCB0aGUgaGl0IGZsYXNoIGlzIGRvbmUuICovXG4gIGhpdEZsYXNoVW50aWw6IG51bWJlcjtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxIG9mIGhpdCBmbGFzaCBhbmltYXRpb24gKDEgPSBkb25lKS4gKi9cbiAgaGl0Rmxhc2hQcm9ncmVzczogbnVtYmVyO1xuICAvKiogQWN0aXZlIGV4cGFuZGluZyBwdWxzZSByaW5ncyAoUHVsc2UgQ29yZSkuICovXG4gIHB1bHNlRWZmZWN0czogQWN0aXZlUHVsc2VFZmZlY3RbXTtcbiAgLyoqIEVuZW15IGlkcyBhbHJlYWR5IHJlc29sdmVkIGFnYWluc3QgdGhpcyBzaGllbGQsIHByZXZlbnRpbmcgcmVwZWF0IGRhbWFnZSBwZXIgZnJhbWUuICovXG4gIHJlYWRvbmx5IGludGVyY2VwdGVkRW5lbXlJZHMgPSBuZXcgU2V0PG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3RvcihzaGllbGRJZDogU2hpZWxkSWQsIG1heENoYXJnZXM6IG51bWJlcikge1xuICAgIHRoaXMuc2hpZWxkSWQgPSBzaGllbGRJZDtcbiAgICB0aGlzLmNoYXJnZXMgPSBtYXhDaGFyZ2VzO1xuICAgIHRoaXMuY29vbGRvd25MZWZ0ID0gMDtcbiAgICB0aGlzLmhpdEZsYXNoVW50aWwgPSAwO1xuICAgIHRoaXMuaGl0Rmxhc2hQcm9ncmVzcyA9IDE7XG4gICAgdGhpcy5wdWxzZUVmZmVjdHMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZENvbnRhY3RUYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRDb250YWN0UmVzdWx0IHtcbiAgY29udGFjdGVkOiBib29sZWFuO1xuICBhYnNvcmJlZDogYm9vbGVhbjtcbiAgZGFtYWdlQWJzb3JiZWQ6IG51bWJlcjtcbiAgZW5lbXlEZXN0cm95ZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBSZXNvbHZlIG9uZSBnZW9tZXRyaWMgZW5lbXkvc2hpZWxkIGNvbnRhY3QgZXhhY3RseSBvbmNlIGZvciB0aGF0IGVuZW15LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVTaGllbGRDb250YWN0KFxuICBzdGF0ZTogU2hpZWxkU3RhdGUsXG4gIHNoaWVsZDogU2hpZWxkTWVtYmVyLFxuICB0YXJnZXQ6IFNoaWVsZENvbnRhY3RUYXJnZXQsXG4gIHNoaWVsZFg6IG51bWJlcixcbiAgc2hpZWxkWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgc2NhbGUgPSAxLFxuKTogU2hpZWxkQ29udGFjdFJlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU2hpZWxkQ29udGFjdFJlc3VsdCA9IHtcbiAgICBjb250YWN0ZWQ6IGZhbHNlLFxuICAgIGFic29yYmVkOiBmYWxzZSxcbiAgICBkYW1hZ2VBYnNvcmJlZDogMCxcbiAgICBlbmVteURlc3Ryb3llZDogZmFsc2UsXG4gIH07XG4gIGlmICh0YXJnZXQuZHlpbmcgfHwgc3RhdGUuaW50ZXJjZXB0ZWRFbmVteUlkcy5oYXModGFyZ2V0LmlkKSkgcmV0dXJuIHJlc3VsdDtcbiAgY29uc3QgcmFkaXVzID0gc2hpZWxkLnJhZGl1cyAqIHNjYWxlICsgdGFyZ2V0LnJhZGl1cztcbiAgY29uc3QgZHggPSB0YXJnZXQueCAtIHNoaWVsZFg7XG4gIGNvbnN0IGR5ID0gdGFyZ2V0LnkgLSBzaGllbGRZO1xuICBpZiAoZHggKiBkeCArIGR5ICogZHkgPiByYWRpdXMgKiByYWRpdXMpIHJldHVybiByZXN1bHQ7XG5cbiAgcmVzdWx0LmNvbnRhY3RlZCA9IHRydWU7XG4gIHN0YXRlLmludGVyY2VwdGVkRW5lbXlJZHMuYWRkKHRhcmdldC5pZCk7XG4gIGlmIChzdGF0ZS5jaGFyZ2VzIDw9IDApIHJldHVybiByZXN1bHQ7XG5cbiAgY29uc3QgYWJzb3JiZWQgPSBNYXRoLm1pbihzdGF0ZS5jaGFyZ2VzLCB0YXJnZXQuaGVhbHRoKTtcbiAgc3RhdGUuY2hhcmdlcyAtPSBhYnNvcmJlZDtcbiAgdGFyZ2V0LmhlYWx0aCAtPSBhYnNvcmJlZDtcbiAgc3RhdGUuaGl0Rmxhc2hVbnRpbCA9IG5vdyArIDI4MDtcbiAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IDA7XG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gIHJlc3VsdC5hYnNvcmJlZCA9IHRydWU7XG4gIHJlc3VsdC5kYW1hZ2VBYnNvcmJlZCA9IGFic29yYmVkO1xuICByZXN1bHQuZW5lbXlEZXN0cm95ZWQgPSB0YXJnZXQuaGVhbHRoIDw9IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHQgXHUyMDE0IHdoYXQgbWFpbi50cyBzaG91bGQgYXBwbHkgdGhpcyBmcmFtZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBjb250YWN0RGFtYWdlIHRoaXMgZnJhbWUgKGNvbnRhY3Qgc2hpZWxkcykuICovXG4gIGNvbnRhY3REYW1hZ2VFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBBbW91bnQgb2YgY29udGFjdCBkYW1hZ2UgcGVyIGVuZW15LiAqL1xuICBjb250YWN0RGFtYWdlQW1vdW50OiBudW1iZXI7XG4gIC8qKiBFbmVteSBJRHMgdGhhdCBzaG91bGQgaGF2ZSB0aGVpciBzcGVlZCBtdWx0aXBsaWVkIGJ5IHNsb3dNdWx0aXBsaWVyIChhdXJhKS4gKi9cbiAgc2xvd0VuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIEVmZmVjdGl2ZSBzbG93IG11bHRpcGxpZXIgdG8gYXBwbHkuICovXG4gIHNsb3dNdWx0aXBsaWVyOiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgc2hpZWxkIGFic29yYmVkIGEgaGl0IHRoaXMgZnJhbWUgKGNoYXJnZSBjb25zdW1lZCkuXG4gICAqIG1haW4udHMgc2hvdWxkIE5PVCBraWxsL2RhbWFnZSB0aGUgcGxheWVyIGZvciB0aGF0IGNvbGxpc2lvbi5cbiAgICovXG4gIGFic29yYmVkSGl0OiBib29sZWFuO1xuICAvKipcbiAgICogRW5lbXkgSURzIHRvIHB1c2ggYXdheSBmcm9tIHRoZSBwbGF5ZXIgY2VudGVyIChwdWxzZSBzaGllbGQpLlxuICAgKiBtYWluLnRzIHNob3VsZCBhZGQgcHVzaERpc3RhbmNlIHRvIHRoZSBlbmVteSdzIG91dHdhcmQgdmVsb2NpdHkgb3IgcG9zaXRpb24uXG4gICAqL1xuICBwdXNoRW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogUHVzaCBkaXN0YW5jZSBpbiBweC4gKi9cbiAgcHVzaERpc3RhbmNlOiBudW1iZXI7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayBmdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFBVTFNFX0RVUkFUSU9OX01TID0gNjAwO1xuXG4vKipcbiAqIERyaXZlcyB0aGUgc2hpZWxkIGZvciBvbmUgZ2FtZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgICAgICAgTXV0YWJsZSBzaGllbGQgc3RhdGUgdG8gdXBkYXRlLlxuICogQHBhcmFtIHNoaWVsZCAgICAgIEltbXV0YWJsZSBzaGllbGQgZGVmaW5pdGlvbi5cbiAqIEBwYXJhbSB0aHJlYXRzICAgICBOZWFyYnkgdGhyZWF0cyBmcm9tIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIChyYW5nZSA9IHNoaWVsZC5yYWRpdXMpLlxuICogQHBhcmFtIHBsYXllclggICAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4IChmb3IgcHVsc2Ugb3JpZ2luKS5cbiAqIEBwYXJhbSBwbGF5ZXJZICAgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgICBDdXJyZW50IHRpbWVzdGFtcCBpbiBtcy5cbiAqIEBwYXJhbSBkZWx0YSAgICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHJldHVybnMgICAgICAgICAgIEFjdGlvbnMgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU2hpZWxkKFxuICBzdGF0ZTogU2hpZWxkU3RhdGUsXG4gIHNoaWVsZDogU2hpZWxkTWVtYmVyLFxuICB0aHJlYXRzOiByZWFkb25seSBOZWFyYnlUaHJlYXRbXSxcbiAgcGxheWVyWDogbnVtYmVyLFxuICBwbGF5ZXJZOiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBkZWx0YTogbnVtYmVyLFxuKTogU2hpZWxkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU2hpZWxkVGlja1Jlc3VsdCA9IHtcbiAgICBjb250YWN0RGFtYWdlRW5lbXlJZHM6IFtdLFxuICAgIGNvbnRhY3REYW1hZ2VBbW91bnQ6IDAsXG4gICAgc2xvd0VuZW15SWRzOiBbXSxcbiAgICBzbG93TXVsdGlwbGllcjogMS4wLFxuICAgIGFic29yYmVkSGl0OiBmYWxzZSxcbiAgICBwdXNoRW5lbXlJZHM6IFtdLFxuICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgfTtcblxuICAvLyBBZHZhbmNlIGNvb2xkb3duXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwKSBzdGF0ZS5jb29sZG93bkxlZnQgPSBNYXRoLm1heCgwLCBzdGF0ZS5jb29sZG93bkxlZnQgLSBkZWx0YSk7XG5cbiAgLy8gVXBkYXRlIHB1bHNlIHByb2dyZXNzXG4gIGZvciAoY29uc3QgcHVsc2Ugb2Ygc3RhdGUucHVsc2VFZmZlY3RzKSB7XG4gICAgcHVsc2UucHJvZ3Jlc3MgPSAobm93IC0gcHVsc2Uuc3RhcnRlZEF0KSAvIHB1bHNlLmR1cmF0aW9uTXM7XG4gIH1cbiAgc3RhdGUucHVsc2VFZmZlY3RzID0gc3RhdGUucHVsc2VFZmZlY3RzLmZpbHRlcihwID0+IHAucHJvZ3Jlc3MgPCAxKTtcblxuICAvLyBBZHZhbmNlIGhpdCBmbGFzaFxuICBpZiAoc3RhdGUuaGl0Rmxhc2hVbnRpbCA+IDApIHtcbiAgICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gTWF0aC5taW4oMSwgKG5vdyAtIChzdGF0ZS5oaXRGbGFzaFVudGlsIC0gMjgwKSkgLyAyODApO1xuICB9XG5cbiAgLy8gUmVmaWxsIGNoYXJnZXMgd2hlbiBjb29sZG93biBjb21wbGV0ZXMgKGNoYXJnZS1iYXNlZCBzaGllbGRzKVxuICBpZiAoc2hpZWxkLm1vZGUgPT09IFwiY2hhcmdlXCIgJiYgc3RhdGUuY29vbGRvd25MZWZ0ID09PSAwICYmIHN0YXRlLmNoYXJnZXMgPCBzaGllbGQubWF4Q2hhcmdlcykge1xuICAgIHN0YXRlLmNoYXJnZXMgPSBzaGllbGQubWF4Q2hhcmdlcztcbiAgfVxuXG4gIGlmICh0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogY29udGFjdCBcdTIwMTQgZGVhbCBkYW1hZ2UgdG8gZW5lbWllcyB0b3VjaGluZyB0aGUgc2hpZWxkIGVkZ2VcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIHJlc3VsdC5jb250YWN0RGFtYWdlQW1vdW50ID0gc2hpZWxkLmNvbnRhY3REYW1hZ2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5jb250YWN0RGFtYWdlRW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RlOiBhdXJhIFx1MjAxNCBzbG93IGVuZW1pZXMgaW5zaWRlIHJhZGl1c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgcmVzdWx0LnNsb3dNdWx0aXBsaWVyID0gc2hpZWxkLnNsb3dNdWx0aXBsaWVyO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQuc2xvd0VuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogcHVsc2UgXHUyMDE0IGVtaXQgcHVzaCByaW5nIHdoZW4gYW55IGVuZW15IGVudGVycyByYW5nZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8gVHJpZ2dlciBwdWxzZVxuICAgIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gICAgY29uc3QgcHVsc2U6IEFjdGl2ZVB1bHNlRWZmZWN0ID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICAgIGR1cmF0aW9uTXM6IFBVTFNFX0RVUkFUSU9OX01TLFxuICAgICAgeDogcGxheWVyWCxcbiAgICAgIHk6IHBsYXllclksXG4gICAgICBtYXhSYWRpdXM6IHNoaWVsZC5yYWRpdXMgKiAxLjgsXG4gICAgICBjb2xvcjogXCJcIiwgLy8gZmlsbGVkIGJ5IGRyYXcgY29kZSB3aXRoIG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl1cbiAgICB9O1xuICAgIHN0YXRlLnB1bHNlRWZmZWN0cy5wdXNoKHB1bHNlKTtcbiAgICByZXN1bHQucHVzaERpc3RhbmNlID0gc2hpZWxkLnB1c2hEaXN0YW5jZTtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LnB1c2hFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIaXQgYWJzb3JwdGlvbiBcdTIwMTQgY2FsbGVkIGJ5IG1haW4udHMgd2hlbiBhbiBlbmVteSB3b3VsZCB0b3VjaCB0aGUgcGxheWVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGFic29yYiBhIGhpdCB1c2luZyBzaGllbGQgY2hhcmdlcy5cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaGl0IHdhcyBhYnNvcmJlZCAoY2hhcmdlIGNvbnN1bWVkKSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ5QWJzb3JiSGl0KHN0YXRlOiBTaGllbGRTdGF0ZSwgc2hpZWxkOiBTaGllbGRNZW1iZXIsIG5vdzogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChzdGF0ZS5jaGFyZ2VzIDw9IDApIHJldHVybiBmYWxzZTtcbiAgc3RhdGUuY2hhcmdlcyAtPSAxO1xuICBzdGF0ZS5oaXRGbGFzaFVudGlsID0gbm93ICsgMjgwO1xuICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gMDtcbiAgLy8gUmVjaGFyZ2UgYmVnaW5zIGFmdGVyIHRoZSBtb3N0IHJlY2VudCBhYnNvcmJlZCBoaXQuIEtlZXBpbmcgdGhlIGNvb2xkb3duXG4gIC8vIGFjdGl2ZSBwcmV2ZW50cyB0aWNrU2hpZWxkKCkgZnJvbSBpbW1lZGlhdGVseSByZXN0b3JpbmcgYSBwYXJ0aWFsbHlcbiAgLy8gZGVwbGV0ZWQgc2hpZWxkIG9uIHRoZSBuZXh0IGZyYW1lLlxuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiIsICIvKipcbiAqIFN3b3JkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc3dvcmQgc3RhdGUgYW5kIHRpY2sgbG9naWMuXG4gKlxuICogU3dvcmRzIGFyZSBOT1QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhlIHRpY2sgZnVuY3Rpb24gb25seSB0cmlnZ2VycyBhIHN3aW5nXG4gKiB3aGVuIGEgdmFsaWQgdGFyZ2V0IGV4aXN0cyBpbiByYW5nZSBhbmQgdGhlIGNvb2xkb3duIGlzIHJlYWR5LiBJdCBpZGxlcyBzaWxlbnRseVxuICogd2hlbiBubyB0YXJnZXQgaXMgcHJlc2VudC5cbiAqXG4gKiBEZXNpZ24gcnVsZTogc2FtZSBhcyBzaGllbGRFdmFsdWF0b3IgXHUyMDE0IG5vIGRpcmVjdCBlbmVteSBtdXRhdGlvbi4gUmV0dXJucyBhXG4gKiBTd29yZFRpY2tSZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBTd29yZElkLCBTd29yZE1lbWJlciwgU3dvcmRUYXJnZXRpbmdNb2RlIH0gZnJvbSBcIi4uLy4uL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB0eXBlIHsgTmVhcmJ5VGhyZWF0IH0gZnJvbSBcIi4vbmVhcmJ5VGhyZWF0UXVlcnlcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBY3RpdmUgc2xhc2ggYW5pbWF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVTbGFzaEFuaW1hdGlvbiB7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMS4gRHJpdmVuIGJ5IChub3cgLSBzdGFydGVkQXQpIC8gZHVyYXRpb25Ncy4gKi9cbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgc3RhcnRlZEF0OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIENlbnRlciB4IChzbmFwc2hvdCBvZiBwbGF5ZXIgcG9zaXRpb24gd2hlbiBzd2luZyBvY2N1cnJlZCkuICovXG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB0YXJnZXRQb2ludHM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdO1xuICBzaWRlOiAtMSB8IDE7XG4gIC8qKiBSZWFjaCBvZiB0aGUgYXJjIGluIHBpeGVscy4gKi9cbiAgcmVhY2g6IG51bWJlcjtcbiAgLyoqIEFyYyB3aWR0aCBpbiBkZWdyZWVzLiAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqIFRoaWNrbmVzcyBtdWx0aXBsaWVyLiAqL1xuICB0aGlja25lc3M6IG51bWJlcjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTd29yZCBzdGF0ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZFN0YXRlIHtcbiAgc3dvcmRJZDogU3dvcmRJZDtcbiAgLyoqIEFjdGl2ZSBzd29yZCBsZXZlbC4gUmVwZWF0ZWQgcGlja3VwcyBvZiB0aGUgc2FtZSBzd29yZCBpbmNyZWFzZSB0aGlzIHVwIHRvIDUuICovXG4gIGxldmVsOiBudW1iZXI7XG4gIC8qKiBTZWNvbmRzIHJlbWFpbmluZyB1bnRpbCB0aGUgc3dvcmQgY2FuIHN3aW5nIGFnYWluLiAqL1xuICBjb29sZG93bkxlZnQ6IG51bWJlcjtcbiAgLyoqIEFjdGl2ZSBzbGFzaCBhbmltYXRpb24sIGlmIGFueS4gKi9cbiAgYWN0aXZlU2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgcHJldmlvdXNTbGFzaFNpZGU6IC0xIHwgMTtcbiAgY29vbGRvd25MZWZ0czogbnVtYmVyW107XG4gIGFjdGl2ZVNsYXNoZXM6IEFycmF5PEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbD47XG4gIHByZXZpb3VzU2xhc2hTaWRlczogQXJyYXk8LTEgfCAxPjtcbiAgbmV4dFNsb3RMYXVuY2hBbGxvd2VkQXQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihzd29yZElkOiBTd29yZElkLCBsZXZlbCA9IDEpIHtcbiAgICB0aGlzLnN3b3JkSWQgPSBzd29yZElkO1xuICAgIHRoaXMubGV2ZWwgPSBNYXRoLm1pbig1LCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGxldmVsKSkpO1xuICAgIHRoaXMuY29vbGRvd25MZWZ0ID0gMDtcbiAgICB0aGlzLmFjdGl2ZVNsYXNoID0gbnVsbDtcbiAgICB0aGlzLnByZXZpb3VzU2xhc2hTaWRlID0gMTtcbiAgICB0aGlzLmNvb2xkb3duTGVmdHMgPSBbMF07XG4gICAgdGhpcy5hY3RpdmVTbGFzaGVzID0gW251bGxdO1xuICAgIHRoaXMucHJldmlvdXNTbGFzaFNpZGVzID0gWzFdO1xuICAgIHRoaXMubmV4dFNsb3RMYXVuY2hBbGxvd2VkQXQgPSAwO1xuICB9XG5cbiAgc3luY1Nsb3RzKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGNvdW50KSk7XG4gICAgd2hpbGUgKHRoaXMuY29vbGRvd25MZWZ0cy5sZW5ndGggPCB0YXJnZXQpIHRoaXMuY29vbGRvd25MZWZ0cy5wdXNoKDApO1xuICAgIHdoaWxlICh0aGlzLmFjdGl2ZVNsYXNoZXMubGVuZ3RoIDwgdGFyZ2V0KSB0aGlzLmFjdGl2ZVNsYXNoZXMucHVzaChudWxsKTtcbiAgICB3aGlsZSAodGhpcy5wcmV2aW91c1NsYXNoU2lkZXMubGVuZ3RoIDwgdGFyZ2V0KSB0aGlzLnByZXZpb3VzU2xhc2hTaWRlcy5wdXNoKDEpO1xuICAgIHRoaXMuY29vbGRvd25MZWZ0cy5sZW5ndGggPSB0YXJnZXQ7XG4gICAgdGhpcy5hY3RpdmVTbGFzaGVzLmxlbmd0aCA9IHRhcmdldDtcbiAgICB0aGlzLnByZXZpb3VzU2xhc2hTaWRlcy5sZW5ndGggPSB0YXJnZXQ7XG4gICAgdGhpcy5jb29sZG93bkxlZnQgPSBNYXRoLm1pbiguLi50aGlzLmNvb2xkb3duTGVmdHMpO1xuICAgIHRoaXMuYWN0aXZlU2xhc2ggPSB0aGlzLmFjdGl2ZVNsYXNoZXMuZmluZChCb29sZWFuKSA/PyBudWxsO1xuICAgIHRoaXMucHJldmlvdXNTbGFzaFNpZGUgPSB0aGlzLnByZXZpb3VzU2xhc2hTaWRlc1swXSA/PyAxO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgaGl0IGJ5IHRoZSBzd2luZyB0aGlzIGZyYW1lLiBFbXB0eSBpZiBubyBzd2luZyBvY2N1cnJlZC4gKi9cbiAgaGl0RW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogSGl0IHRhcmdldHMgd2l0aCB0aGVpciBwb3NpdGlvbnMgZm9yIGRlbGF5ZWQgdmlzdWFsL2NvbnRhY3QgdGltaW5nLiAqL1xuICBoaXRUYXJnZXRzOiBBcnJheTx7IGlkOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+O1xuICAvKiogRGFtYWdlIHRvIGFwcGx5IHRvIGVhY2ggaGl0IGVuZW15LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgYSBuZXcgc2xhc2ggd2FzIHRyaWdnZXJlZCB0aGlzIGZyYW1lIChmb3IgYXVkaW8sIGV0Yy4pLiAqL1xuICBzd2luZ1RyaWdnZXJlZDogYm9vbGVhbjtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUYXJnZXRpbmcgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNlbGVjdFRhcmdldHMoXG4gIHRocmVhdHM6IHJlYWRvbmx5IE5lYXJieVRocmVhdFtdLFxuICBtb2RlOiBTd29yZFRhcmdldGluZ01vZGUsXG4gIG1heFRhcmdldHM6IG51bWJlcixcbiAgcm93UmVhY2g6IG51bWJlcixcbik6IE5lYXJieVRocmVhdFtdIHtcbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGlmIChyb3dSZWFjaCA+IDEgJiYgdGhyZWF0c1swXS50YXJnZXQucm93SWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNlbnRlclJvdyA9IHRocmVhdHNbMF0udGFyZ2V0LnJvd0lkO1xuICAgIGNvbnN0IHJvd3MgPSBbLi4ubmV3IFNldCh0aHJlYXRzXG4gICAgICAubWFwKHRocmVhdCA9PiB0aHJlYXQudGFyZ2V0LnJvd0lkKVxuICAgICAgLmZpbHRlcihyb3dJZCA9PiByb3dJZCAhPT0gdW5kZWZpbmVkKSldXG4gICAgICAuc29ydCgoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGNlbnRlclJvdykgLSBNYXRoLmFicyhiIC0gY2VudGVyUm93KSlcbiAgICAgIC5zbGljZSgwLCByb3dSZWFjaCk7XG4gICAgcmV0dXJuIHRocmVhdHNcbiAgICAgIC5maWx0ZXIodGhyZWF0ID0+IHRocmVhdC50YXJnZXQucm93SWQgIT09IHVuZGVmaW5lZCAmJiByb3dzLmluY2x1ZGVzKHRocmVhdC50YXJnZXQucm93SWQpKVxuICAgICAgLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuICB9XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCI6XG4gICAgY2FzZSBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIjpcbiAgICAgIC8vIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIGFscmVhZHkgcmV0dXJucyBzb3J0ZWQgYnkgZGlzdGFuY2VcbiAgICAgIHJldHVybiB0aHJlYXRzLnNsaWNlKDAsIG1heFRhcmdldHMpO1xuXG4gICAgY2FzZSBcImZyb250TW9zdFRocmVhdFwiOlxuICAgICAgLy8gSGlnaGVzdCB5ID0gbW9zdCBhZHZhbmNlZCB0b3dhcmQgcGxheWVyXG4gICAgICByZXR1cm4gWy4uLnRocmVhdHNdLnNvcnQoKGEsIGIpID0+IGIudGFyZ2V0LnkgLSBhLnRhcmdldC55KS5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGNhc2UgXCJjbHVzdGVyTmVhclBsYXllclwiOlxuICAgICAgLy8gQWxyZWFkeSBzb3J0ZWQgYnkgZGlzdGFuY2UgXHUyMDE0IHRha2UgbmVhcmVzdCBjbHVzdGVyXG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhyZWF0cy5zbGljZSgwLCBtYXhUYXJnZXRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzd29yZFJvd1JlYWNoKHN3b3JkOiBTd29yZE1lbWJlciwgbGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICghc3dvcmQucm93UmVhY2gpIHJldHVybiAxO1xuICBjb25zdCBjbGFtcGVkTGV2ZWwgPSBNYXRoLm1pbig1LCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGxldmVsKSkpO1xuICBjb25zdCBwcm9ncmVzcyA9IChjbGFtcGVkTGV2ZWwgLSAxKSAvIDQ7XG4gIHJldHVybiBNYXRoLnJvdW5kKHN3b3JkLnJvd1JlYWNoLmxldmVsMSArIChzd29yZC5yb3dSZWFjaC5sZXZlbDUgLSBzd29yZC5yb3dSZWFjaC5sZXZlbDEpICogcHJvZ3Jlc3MpO1xufVxuXG5mdW5jdGlvbiBzd29yZERhbWFnZShzd29yZDogU3dvcmRNZW1iZXIsIGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoc3dvcmQuZGFtYWdlQXRMZXZlbDUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHN3b3JkLmRhbWFnZTtcbiAgY29uc3QgY2xhbXBlZExldmVsID0gTWF0aC5taW4oNSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihsZXZlbCkpKTtcbiAgY29uc3QgcHJvZ3Jlc3MgPSAoY2xhbXBlZExldmVsIC0gMSkgLyA0O1xuICByZXR1cm4gc3dvcmQuZGFtYWdlICsgKHN3b3JkLmRhbWFnZUF0TGV2ZWw1IC0gc3dvcmQuZGFtYWdlKSAqIHByb2dyZXNzO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRpY2sgZnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIERyaXZlcyB0aGUgc3dvcmQgZm9yIG9uZSBnYW1lIGZyYW1lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZSAgICAgTXV0YWJsZSBzd29yZCBzdGF0ZS5cbiAqIEBwYXJhbSBzd29yZCAgICAgSW1tdXRhYmxlIHN3b3JkIGRlZmluaXRpb24uXG4gKiBAcGFyYW0gdGhyZWF0cyAgIE5lYXJieSB0aHJlYXRzIGluIHJhbmdlIGZyb20gcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gKiBAcGFyYW0gcGxheWVyWCAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4LlxuICogQHBhcmFtIHBsYXllclkgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgVGltZXN0YW1wIGluIG1zLlxuICogQHBhcmFtIGRlbHRhICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIGNvbG9yICAgICBSZXNvbHZlZCBoZXggY29sb3IgKGZyb20gbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTd29yZChcbiAgc3RhdGU6IFN3b3JkU3RhdGUsXG4gIHN3b3JkOiBTd29yZE1lbWJlcixcbiAgdGhyZWF0czogcmVhZG9ubHkgTmVhcmJ5VGhyZWF0W10sXG4gIHBsYXllclg6IG51bWJlcixcbiAgcGxheWVyWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgZGVsdGE6IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbiAgdmlzdWFsRHVyYXRpb25NcyA9IHN3b3JkLnNsYXNoRHVyYXRpb25NcyxcbiAgc3dvcmRDb3VudCA9IDEsXG4gIHNsb3RMYXVuY2hTdGFnZ2VyTXMgPSAxODAsXG4pOiBTd29yZFRpY2tSZXN1bHQge1xuICBjb25zdCByZXN1bHQ6IFN3b3JkVGlja1Jlc3VsdCA9IHtcbiAgICBoaXRFbmVteUlkczogW10sXG4gICAgaGl0VGFyZ2V0czogW10sXG4gICAgZGFtYWdlOiAwLFxuICAgIHN3aW5nVHJpZ2dlcmVkOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0ZS5zeW5jU2xvdHMoc3dvcmRDb3VudCk7XG5cbiAgZm9yIChsZXQgc2xvdCA9IDA7IHNsb3QgPCBzdGF0ZS5jb29sZG93bkxlZnRzLmxlbmd0aDsgc2xvdCsrKSB7XG4gICAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdHNbc2xvdF0gPiAwKSBzdGF0ZS5jb29sZG93bkxlZnRzW3Nsb3RdID0gTWF0aC5tYXgoMCwgc3RhdGUuY29vbGRvd25MZWZ0c1tzbG90XSAtIGRlbHRhKTtcbiAgICBjb25zdCBzbGFzaCA9IHN0YXRlLmFjdGl2ZVNsYXNoZXNbc2xvdF07XG4gICAgaWYgKHNsYXNoKSB7XG4gICAgICBzbGFzaC5wcm9ncmVzcyA9IChub3cgLSBzbGFzaC5zdGFydGVkQXQpIC8gc2xhc2guZHVyYXRpb25NcztcbiAgICAgIGlmIChzbGFzaC5wcm9ncmVzcyA+PSAxKSBzdGF0ZS5hY3RpdmVTbGFzaGVzW3Nsb3RdID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgc3RhdGUuY29vbGRvd25MZWZ0ID0gTWF0aC5taW4oLi4uc3RhdGUuY29vbGRvd25MZWZ0cyk7XG4gIHN0YXRlLmFjdGl2ZVNsYXNoID0gc3RhdGUuYWN0aXZlU2xhc2hlcy5maW5kKEJvb2xlYW4pID8/IG51bGw7XG5cbiAgLy8gU3dvcmRzIG9ubHkgc3dpbmcgd2hlbiBhIHRhcmdldCBleGlzdHMgaW4gcmFuZ2UgQU5EIGNvb2xkb3duIGlzIHJlYWR5LlxuICAvLyBUaGlzIGlzIHRoZSBrZXkgZGlmZmVyZW5jZSBmcm9tIGd1bnMsIHdoaWNoIGZpcmUgb24gYSBwZXJpb2QgcmVnYXJkbGVzcy5cbiAgaWYgKHRocmVhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIGxldCByZW1haW5pbmcgPSBbLi4udGhyZWF0c107XG4gIGNvbnN0IGRhbWFnZSA9IHN3b3JkRGFtYWdlKHN3b3JkLCBzdGF0ZS5sZXZlbCk7XG4gIGZvciAobGV0IHNsb3QgPSAwOyBzbG90IDwgc3RhdGUuY29vbGRvd25MZWZ0cy5sZW5ndGggJiYgcmVtYWluaW5nLmxlbmd0aCA+IDA7IHNsb3QrKykge1xuICAgIGlmIChzdGF0ZS5jb29sZG93bkxlZnRzLmxlbmd0aCA+IDEgJiYgbm93IDwgc3RhdGUubmV4dFNsb3RMYXVuY2hBbGxvd2VkQXQpIGJyZWFrO1xuICAgIGlmIChzdGF0ZS5jb29sZG93bkxlZnRzW3Nsb3RdID4gMCkgY29udGludWU7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RUYXJnZXRzKHJlbWFpbmluZywgc3dvcmQudGFyZ2V0aW5nTW9kZSwgc3dvcmQubWF4VGFyZ2V0cywgc3dvcmRSb3dSZWFjaChzd29yZCwgc3RhdGUubGV2ZWwpKTtcbiAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICBjb25zdCBzaWRlOiAtMSB8IDEgPSBzdGF0ZS5wcmV2aW91c1NsYXNoU2lkZXNbc2xvdF0gPT09IC0xID8gMSA6IC0xO1xuICAgIHN0YXRlLnByZXZpb3VzU2xhc2hTaWRlc1tzbG90XSA9IHNpZGU7XG4gICAgc3RhdGUucHJldmlvdXNTbGFzaFNpZGUgPSBzaWRlO1xuICAgIHN0YXRlLmNvb2xkb3duTGVmdHNbc2xvdF0gPSBzd29yZC5jb29sZG93blNlY29uZHM7XG4gICAgaWYgKHN0YXRlLmNvb2xkb3duTGVmdHMubGVuZ3RoID4gMSkgc3RhdGUubmV4dFNsb3RMYXVuY2hBbGxvd2VkQXQgPSBub3cgKyBzbG90TGF1bmNoU3RhZ2dlck1zO1xuICAgIHJlc3VsdC5zd2luZ1RyaWdnZXJlZCA9IHRydWU7XG4gICAgcmVzdWx0LmRhbWFnZSA9IGRhbWFnZTtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2Ygc2VsZWN0ZWQpIHtcbiAgICAgIHJlc3VsdC5oaXRFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgICByZXN1bHQuaGl0VGFyZ2V0cy5wdXNoKHsgaWQ6IHRhcmdldC5pZCwgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0pO1xuICAgIH1cbiAgICBzdGF0ZS5hY3RpdmVTbGFzaGVzW3Nsb3RdID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICAgIGR1cmF0aW9uTXM6IHZpc3VhbER1cmF0aW9uTXMsXG4gICAgICB4OiBwbGF5ZXJYLFxuICAgICAgeTogcGxheWVyWSxcbiAgICAgIHRhcmdldFBvaW50czogc2VsZWN0ZWQubWFwKCh7IHRhcmdldCB9KSA9PiAoeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSkpLFxuICAgICAgc2lkZSxcbiAgICAgIHJlYWNoOiBzd29yZC5yYW5nZSAqIDAuNzUsXG4gICAgICBhcmNEZWdyZWVzOiBzd29yZC5hcmNEZWdyZWVzLFxuICAgICAgY29sb3IsXG4gICAgICB0aGlja25lc3M6IHN3b3JkLnNsYXNoVGhpY2tuZXNzLFxuICAgIH07XG4gICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBuZXcgU2V0KHNlbGVjdGVkLm1hcCgoeyB0YXJnZXQgfSkgPT4gdGFyZ2V0LmlkKSk7XG4gICAgcmVtYWluaW5nID0gcmVtYWluaW5nLmZpbHRlcigoeyB0YXJnZXQgfSkgPT4gIXNlbGVjdGVkSWRzLmhhcyh0YXJnZXQuaWQpKTtcbiAgfVxuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBNYXRoLm1pbiguLi5zdGF0ZS5jb29sZG93bkxlZnRzKTtcbiAgc3RhdGUuYWN0aXZlU2xhc2ggPSBzdGF0ZS5hY3RpdmVTbGFzaGVzLmZpbmQoQm9vbGVhbikgPz8gbnVsbDtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwgImltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RW50cmFuY2VQcm9maWxlIHtcbiAgZHVyYXRpb25TZWNvbmRzOiBudW1iZXI7XG4gIHNjYXR0ZXJNYWduaXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGVuZW15RW50cmFuY2VQcm9maWxlczogUmVjb3JkPE9yYklkLCBFbmVteUVudHJhbmNlUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuNDgsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogLjU4LFxuICB9LFxuICBnbGFzc1NoaWVsZDoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjM0LFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IDAsXG4gIH0sXG4gIHdpbmdlcjoge1xuICAgIGR1cmF0aW9uU2Vjb25kczogLjQyLFxuICAgIHNjYXR0ZXJNYWduaXR1ZGU6IC41LFxuICB9LFxuICB0YW5rOiB7XG4gICAgZHVyYXRpb25TZWNvbmRzOiAuNzIsXG4gICAgc2NhdHRlck1hZ25pdHVkZTogLjM0LFxuICB9LFxufTtcbiIsICJpbXBvcnQge1xuICBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IsXG4gIHR5cGUgTmVvbkNsb3VkQnVyc3RTZXR0aW5ncyxcbiAgdHlwZSBOZW9uVG9wRG93bkNsb3VkQnVyc3QsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBPcmJJZCB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VmlzdWFsVHlwZSA9IE9yYklkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdEVudmVsb3BlIHtcbiAgZW50cnlTZWNvbmRzOiBudW1iZXI7XG4gIGVudHJ5UHVuY2g6IG51bWJlcjtcbiAgc3VzdGFpblNlY29uZHM6IG51bWJlcjtcbiAgc3VzdGFpbkxldmVsOiBudW1iZXI7XG4gIGZhZGVTZWNvbmRzOiBudW1iZXI7XG4gIHNwYXJrSW50ZW5zaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5lbXlFeGl0Q2xvdWRQcm9maWxlIGV4dGVuZHMgT21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcImFnZVwiIHwgXCJjb2xvclwiIHwgXCJjb3JlQ29sb3JcIiB8IFwieFwiIHwgXCJ5XCIgfCBcInNlZWRcIj4ge1xuICBzaXplOiBudW1iZXI7XG4gIGVudmVsb3BlOiBFbmVteUV4aXRFbnZlbG9wZTtcbiAgY2xvdWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgZW5lbXlUeXBlOiBFbmVteVZpc3VhbFR5cGU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWVkOiBudW1iZXI7XG4gIGFnZTogbnVtYmVyO1xufVxuXG5jb25zdCBiYXNpY09yYkV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIGNsb3VkOiB0cnVlLFxuICBzaXplOiAxMSxcbiAgZGV0YWlsOiA2LFxuICB0dXJidWxlbmNlOiAyLjcyLFxuICBnbG93OiAxMSxcbiAgY29yZUludGVuc2l0eTogMS4yNSxcbiAgcmltSW50ZW5zaXR5OiAuOCxcbiAgb3BhY2l0eTogLjgyLFxuICBkaXNzaXBhdGlvbkFjdGlvbjogXCJzcGFya0ZhZGVcIixcbiAgZHJpZnRYOiAwLFxuICBkcmlmdFk6IDAsXG4gIGVudmVsb3BlOiB7XG4gICAgZW50cnlTZWNvbmRzOiAuMTYsXG4gICAgZW50cnlQdW5jaDogMi4zMyxcbiAgICBzdXN0YWluU2Vjb25kczogLjIxLFxuICAgIHN1c3RhaW5MZXZlbDogMS4yLFxuICAgIGZhZGVTZWNvbmRzOiAuMjksXG4gICAgc3BhcmtJbnRlbnNpdHk6IDEuMjEsXG4gIH0sXG59O1xuXG5jb25zdCBub0Nsb3VkRXhpdFByb2ZpbGU6IEVuZW15RXhpdENsb3VkUHJvZmlsZSA9IHtcbiAgLi4uYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgY2xvdWQ6IGZhbHNlLFxuICBzaXplOiAwLFxufTtcblxuY29uc3QgdGFua0V4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHNpemU6IDE1LFxuICBnbG93OiAxMyxcbn07XG5cbmV4cG9ydCBjb25zdCBlbmVteUV4aXRQcm9maWxlczogUmVjb3JkPEVuZW15VmlzdWFsVHlwZSwgRW5lbXlFeGl0Q2xvdWRQcm9maWxlPiA9IHtcbiAgYmFzaWNPcmI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGdsYXNzU2hpZWxkOiBub0Nsb3VkRXhpdFByb2ZpbGUsXG4gIHdpbmdlcjogYmFzaWNPcmJFeGl0UHJvZmlsZSxcbiAgdGFuazogdGFua0V4aXRQcm9maWxlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15RXhpdER1cmF0aW9uKGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlKTogbnVtYmVyIHtcbiAgY29uc3QgZW52ZWxvcGUgPSBlbmVteUV4aXRQcm9maWxlc1tlbmVteVR5cGVdLmVudmVsb3BlO1xuICByZXR1cm4gZW52ZWxvcGUuZW50cnlTZWNvbmRzICsgZW52ZWxvcGUuc3VzdGFpblNlY29uZHMgKyBlbnZlbG9wZS5mYWRlU2Vjb25kcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RXhpdEVmZmVjdChvcHRpb25zOiB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZD86IG51bWJlcjtcbn0pOiBBY3RpdmVFbmVteUV4aXRFZmZlY3Qge1xuICByZXR1cm4ge1xuICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteVR5cGUsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQgPz8gTWF0aC5yYW5kb20oKSAqIDEwMDAsXG4gICAgYWdlOiAwLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRW5lbXlFeGl0RWZmZWN0cyhlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSwgZGVsdGFTZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgaW5kZXggPSBlZmZlY3RzLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlZmZlY3QgPSBlZmZlY3RzW2luZGV4XTtcbiAgICBlZmZlY3QuYWdlICs9IGRlbHRhU2Vjb25kcztcbiAgICBpZiAoZWZmZWN0LmFnZSA+PSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKSkgZWZmZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXRDbG91ZChlZmZlY3Q6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdCk6IE5lb25Ub3BEb3duQ2xvdWRCdXJzdCB7XG4gIGNvbnN0IHByb2ZpbGUgPSBlbmVteUV4aXRQcm9maWxlc1tlZmZlY3QuZW5lbXlUeXBlXTtcbiAgaWYgKCFwcm9maWxlLmNsb3VkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICBjb3JlQ29sb3I6IGVmZmVjdC5jb2xvcixcbiAgICAgIHg6IGVmZmVjdC54LFxuICAgICAgeTogZWZmZWN0LnksXG4gICAgICBzaXplOiAwLFxuICAgICAgZGV0YWlsOiAzLFxuICAgICAgdHVyYnVsZW5jZTogMCxcbiAgICAgIGdsb3c6IDAsXG4gICAgICBjb3JlSW50ZW5zaXR5OiAwLFxuICAgICAgcmltSW50ZW5zaXR5OiAwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGRpc3NpcGF0aW9uVGltZTogZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSksXG4gICAgICBkaXNzaXBhdGlvbkFjdGlvbjogXCJzcGFya0ZhZGVcIixcbiAgICAgIHNlZWQ6IGVmZmVjdC5zZWVkLFxuICAgICAgYWdlOiBlZmZlY3QuYWdlLFxuICAgIH07XG4gIH1cbiAgY29uc3QgZW52ZWxvcGUgPSBwcm9maWxlLmVudmVsb3BlO1xuICBjb25zdCBkdXJhdGlvbiA9IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpO1xuICBjb25zdCBlbnRyeVQgPSBNYXRoLm1pbigxLCBlZmZlY3QuYWdlIC8gTWF0aC5tYXgoLjAwMSwgZW52ZWxvcGUuZW50cnlTZWNvbmRzKSk7XG4gIGNvbnN0IGZhZGVTdGFydCA9IGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzO1xuICBjb25zdCBmYWRlVCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChlZmZlY3QuYWdlIC0gZmFkZVN0YXJ0KSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmZhZGVTZWNvbmRzKSkpO1xuICBjb25zdCBzdXN0YWluID0gZWZmZWN0LmFnZSA+PSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgJiYgZWZmZWN0LmFnZSA8IGZhZGVTdGFydCA/IGVudmVsb3BlLnN1c3RhaW5MZXZlbCA6IDE7XG4gIGNvbnN0IGVudHJ5Rmxhc2ggPSAxICsgTWF0aC5zaW4oZW50cnlUICogTWF0aC5QSSkgKiBlbnZlbG9wZS5lbnRyeVB1bmNoO1xuICBjb25zdCBmYWRlRW5lcmd5ID0gMSAtIGZhZGVUICogLjYyO1xuICBjb25zdCBzcGFya0FjY2VudCA9IDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjIyO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgY29yZUNvbG9yOiBkZXJpdmVOZW9uQ2xvdWRDb3JlQ29sb3IoZWZmZWN0LmNvbG9yKSxcbiAgICB4OiBlZmZlY3QueCxcbiAgICB5OiBlZmZlY3QueSxcbiAgICBzaXplOiBwcm9maWxlLnNpemUgKiAoLjQ4ICsgZW50cnlUICogLjUyKSxcbiAgICBkZXRhaWw6IHByb2ZpbGUuZGV0YWlsLFxuICAgIHR1cmJ1bGVuY2U6IHByb2ZpbGUudHVyYnVsZW5jZSxcbiAgICBnbG93OiAocHJvZmlsZS5nbG93ID8/IDEpICogZW50cnlGbGFzaCAqIHN1c3RhaW4gKiBmYWRlRW5lcmd5ICogc3BhcmtBY2NlbnQsXG4gICAgY29yZUludGVuc2l0eTogKHByb2ZpbGUuY29yZUludGVuc2l0eSA/PyAxKSAqICgxICsgZW52ZWxvcGUuZW50cnlQdW5jaCAqICgxIC0gZW50cnlUKSAqIC41NSksXG4gICAgcmltSW50ZW5zaXR5OiAocHJvZmlsZS5yaW1JbnRlbnNpdHkgPz8gMSkgKiAoMSArIGZhZGVUICogZW52ZWxvcGUuc3BhcmtJbnRlbnNpdHkgKiAuMzUpLFxuICAgIG9wYWNpdHk6IChwcm9maWxlLm9wYWNpdHkgPz8gMSkgKiAoZWZmZWN0LmFnZSA8IGZhZGVTdGFydCA/IDEgOiAxIC0gZmFkZVQgKiAuODgpLFxuICAgIGRpc3NpcGF0aW9uVGltZTogZHVyYXRpb24sXG4gICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgZHJpZnRYOiBwcm9maWxlLmRyaWZ0WCA/PyAwLFxuICAgIGRyaWZ0WTogcHJvZmlsZS5kcmlmdFkgPz8gMCxcbiAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICBhZ2U6IE1hdGgubWluKGVmZmVjdC5hZ2UsIGR1cmF0aW9uKSxcbiAgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE5lb25QcmltaXRpdmUsIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCwgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kge1xuICBhc3BlY3RXaWR0aDogbnVtYmVyO1xuICBhc3BlY3RIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyVmlld3BvcnRQb2xpY3kgZXh0ZW5kcyBQb3J0cmFpdFZpZXdwb3J0UG9saWN5IHtcbiAgcmVhZG9ubHkgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIjtcbiAgcmVhZG9ubHkgbG9naWNhbFdpZHRoOiBudW1iZXI7XG4gIHJlYWRvbmx5IGxvZ2ljYWxIZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJWaWV3cG9ydDogTGFuZVJ1bm5lclZpZXdwb3J0UG9saWN5ID0ge1xuICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxuICBhc3BlY3RXaWR0aDogOSxcbiAgYXNwZWN0SGVpZ2h0OiAxNixcbiAgbG9naWNhbFdpZHRoOiA0NTAsXG4gIGxvZ2ljYWxIZWlnaHQ6IDgwMCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzIHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxvb2tBbmdsZURlZ3JlZXM6IG51bWJlcjtcbiAgZm9sbG93RGlzdGFuY2U6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBob3Jpem9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdGVkU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIGNsb3Vkcz86IE5lb25Ub3BEb3duQ2xvdWRCdXJzdFtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyVmlld3BvcnQge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcGxheWVyWTogbnVtYmVyO1xuICBmb2N1c1g/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYKHdpZHRoOiBudW1iZXIsIHRhcmdldFg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gIHJldHVybiBjZW50ZXJYICsgKHRhcmdldFggLSBjZW50ZXJYKSAqIC41NTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UG9ydHJhaXRTdGFnZShzdGFnZTogSFRNTEVsZW1lbnQsIHBvbGljeTogUG9ydHJhaXRWaWV3cG9ydFBvbGljeSk6IHZvaWQge1xuICBzdGFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3RhZ2UtYXNwZWN0XCIsIGAke3BvbGljeS5hc3BlY3RXaWR0aH0gLyAke3BvbGljeS5hc3BlY3RIZWlnaHR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFnZU5vcm1hbGl6ZWRYKHN0YWdlOiBIVE1MRWxlbWVudCwgY2xpZW50WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYm91bmRzID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WCAtIGJvdW5kcy5sZWZ0KSAvIGJvdW5kcy53aWR0aCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzID0ge1xuICBoZWlnaHQ6IDY1LFxuICBsb29rQW5nbGVEZWdyZWVzOiAyNyxcbiAgZm9sbG93RGlzdGFuY2U6IDIwLFxuICB6b29tOiAuMixcbiAgaG9yaXpvbjogLjUxLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyU2NlbmUoXG4gIHByaW1pdGl2ZXM6IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXSxcbiAgc2hhcGVzOiByZWFkb25seSBOZW9uVG9wRG93blNoYXBlW10sXG4gIGNsb3VkczogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W10sXG4gIHNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBQcm9qZWN0ZWRTY2VuZSB7XG4gIGNvbnN0IHByb2plY3RQb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCk7XG5cbiAgY29uc3QgcHJvamVjdGVkUHJpbWl0aXZlcyA9IHByaW1pdGl2ZXMubWFwKHByaW1pdGl2ZSA9PiB7XG4gICAgaWYgKHByaW1pdGl2ZS5zaGFwZSA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gcHJpbWl0aXZlLnJvdGF0aW9uID8/IDA7XG4gICAgICBjb25zdCBoYWxmTGVuZ3RoID0gcHJpbWl0aXZlLmhlaWdodCA/PyBwcmltaXRpdmUud2lkdGg7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gLU1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICBjb25zdCBzdGFydCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCAtIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSAtIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBoYWxmTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBoYWxmTGVuZ3RoKTtcbiAgICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xuICAgICAgY29uc3QgZHkgPSBlbmQueSAtIHN0YXJ0Lnk7XG4gICAgICBjb25zdCBzY2FsZSA9IChzdGFydC5zY2FsZSArIGVuZC5zY2FsZSkgKiAuNTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgICAgeDogKHN0YXJ0LnggKyBlbmQueCkgLyAyLFxuICAgICAgICB5OiAoc3RhcnQueSArIGVuZC55KSAvIDIsXG4gICAgICAgIHdpZHRoOiBwcmltaXRpdmUud2lkdGggKiBzY2FsZSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQocHJpbWl0aXZlLngsIHByaW1pdGl2ZS55KTtcbiAgICBjb25zdCB3aWR0aCA9IHByaW1pdGl2ZS53aWR0aCAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IGhlaWdodCA9IChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCkgKiBwb2ludC5zY2FsZTtcbiAgICBsZXQgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb247XG4gICAgaWYgKHJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGF4aXNMZW5ndGggPSBNYXRoLm1heChwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aCwgcHJpbWl0aXZlLndpZHRoLCAxKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IGVuZCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCArIGRpcmVjdGlvblggKiBheGlzTGVuZ3RoLCBwcmltaXRpdmUueSArIGRpcmVjdGlvblkgKiBheGlzTGVuZ3RoKTtcbiAgICAgIHJvdGF0aW9uID0gTWF0aC5hdGFuMihwb2ludC54IC0gZW5kLngsIGVuZC55IC0gcG9pbnQueSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmltaXRpdmUsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcm90YXRpb24sXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdGVkU2hhcGVzID0gc2hhcGVzXG4gICAgLm1hcChzaGFwZSA9PiB7XG4gICAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNoYXBlLFxuICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICBzaXplOiBzaGFwZS5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgICAgIHo6IChzaGFwZS56ID8/IDApIC0gcG9pbnQuZGVwdGggKiAuMDAwOCxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gKChiLnogPz8gMCkgLSAoYS56ID8/IDApKSk7XG5cbiAgY29uc3QgcHJvamVjdGVkQ2xvdWRzID0gY2xvdWRzLm1hcChjbG91ZCA9PiB7XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0UG9pbnQoY2xvdWQueCwgY2xvdWQueSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICBzaXplOiBjbG91ZC5zaXplICogcG9pbnQuc2NhbGUsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlczogcHJvamVjdGVkUHJpbWl0aXZlcywgY2xvdWRzOiBwcm9qZWN0ZWRDbG91ZHMsIHNoYXBlczogcHJvamVjdGVkU2hhcGVzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50KFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSB7XG4gIHJldHVybiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5ncywgdmlld3BvcnQpKHgsIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5wcm9qZWN0SGVsaWNvcHRlclNjcmVlblBvaW50KFxuICBzY3JlZW5YOiBudW1iZXIsXG4gIHNjcmVlblk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGNvbnN0IGZhbGxiYWNrID0geyB4OiBzY3JlZW5YLCB5OiBzY3JlZW5ZIH07XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IGZvY3VzWCA9IHZpZXdwb3J0LmZvY3VzWCA/PyBjZW50ZXJYO1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gIGNvbnN0IHNjcmVlblJhdGlvID0gKGhvcml6b25ZIC0gc2NyZWVuWSkgLyBmb2NhbExlbmd0aDtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBzaW4gLSBzY3JlZW5SYXRpbyAqIGNvcztcbiAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IC4wMDAxKSByZXR1cm4gZmFsbGJhY2s7XG4gIGNvbnN0IHdvcmxkWiA9IC1yZWxhdGl2ZVkgKiAoY29zICsgc2NyZWVuUmF0aW8gKiBzaW4pIC8gZGVub21pbmF0b3I7XG4gIGNvbnN0IGNhbWVyYVogPSBNYXRoLm1heCgyMCwgd29ybGRaICogY29zIC0gcmVsYXRpdmVZICogc2luKTtcbiAgY29uc3Qgc2NhbGUgPSBmb2NhbExlbmd0aCAvIGNhbWVyYVo7XG4gIGNvbnN0IHBvaW50ID0ge1xuICAgIHg6IGZvY3VzWCArIChzY3JlZW5YIC0gY2VudGVyWCkgLyBzY2FsZSxcbiAgICB5OiB2aWV3cG9ydC5wbGF5ZXJZICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2UgLSB3b3JsZFosXG4gIH07XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUocG9pbnQueCkgJiYgTnVtYmVyLmlzRmluaXRlKHBvaW50LnkpICYmIE1hdGguYWJzKHBvaW50LngpIDwgNTAwMCAmJiBNYXRoLmFicyhwb2ludC55KSA8IDUwMDBcbiAgICA/IHBvaW50XG4gICAgOiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCkge1xuICBjb25zdCBjZW50ZXJYID0gdmlld3BvcnQud2lkdGggLyAyO1xuICBjb25zdCBmb2N1c1ggPSB2aWV3cG9ydC5mb2N1c1ggPz8gY2VudGVyWDtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCBtaW5EZXB0aCA9IDIwO1xuXG4gIHJldHVybiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyOyBkZXB0aDogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHdvcmxkWCA9IHggLSBmb2N1c1g7XG4gICAgY29uc3Qgd29ybGRaID0gdmlld3BvcnQucGxheWVyWSAtIHkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZTtcbiAgICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICAgIGNvbnN0IGNhbWVyYVkgPSByZWxhdGl2ZVkgKiBjb3MgKyB3b3JsZFogKiBzaW47XG4gICAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KG1pbkRlcHRoLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICAgIGNvbnN0IHNjYWxlID0gZm9jYWxMZW5ndGggLyBjYW1lcmFaO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjZW50ZXJYICsgd29ybGRYICogc2NhbGUsXG4gICAgICB5OiBob3Jpem9uWSAtIGNhbWVyYVkgKiBzY2FsZSxcbiAgICAgIHNjYWxlLFxuICAgICAgZGVwdGg6IGNhbWVyYVosXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmxkWUZvclByb2plY3RlZFkoXG4gIHNjcmVlblk6IG51bWJlcixcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IHsgaGVpZ2h0OiBudW1iZXI7IHBsYXllclk6IG51bWJlciB9LFxuKTogbnVtYmVyIHtcbiAgY29uc3QgcGl0Y2ggPSBzZXR0aW5ncy5sb29rQW5nbGVEZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocGl0Y2gpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihwaXRjaCk7XG4gIGNvbnN0IGZvY2FsTGVuZ3RoID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3Muem9vbTtcbiAgY29uc3QgaG9yaXpvblkgPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy5ob3Jpem9uO1xuICBjb25zdCByZWxhdGl2ZVkgPSAtc2V0dGluZ3MuaGVpZ2h0O1xuICBjb25zdCBzY3JlZW5SYXRpbyA9IChob3Jpem9uWSAtIHNjcmVlblkpIC8gZm9jYWxMZW5ndGg7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gc2luIC0gc2NyZWVuUmF0aW8gKiBjb3M7XG4gIGlmIChNYXRoLmFicyhkZW5vbWluYXRvcikgPCAuMDAwMSkgcmV0dXJuIE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICBjb25zdCB3b3JsZFogPSAtcmVsYXRpdmVZICogKGNvcyArIHNjcmVlblJhdGlvICogc2luKSAvIGRlbm9taW5hdG9yO1xuICByZXR1cm4gdmlld3BvcnQucGxheWVyWSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlIC0gd29ybGRaO1xufVxuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgTmVvblNoYXBlQWN0b3IsXG4gIE5lb25TaGFwZURpc3Bvc2FsLFxuICBuZW9uUGFsZXR0ZSxcbiAgdHlwZSBOZW9uUHJpbWl0aXZlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCwgdHlwZSBPcmJNZW1iZXIgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgZW5lbXlFbnRyYW5jZVByb2ZpbGVzIH0gZnJvbSBcIi4vZW5lbXlFbnRyYW5jZVZpc3VhbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUVuZW15RXhpdEVmZmVjdCwgdHlwZSBBY3RpdmVFbmVteUV4aXRFZmZlY3QgfSBmcm9tIFwiLi9lbmVteUV4aXRWaXN1YWxzXCI7XG5pbXBvcnQgeyBwcm9qZWN0SGVsaWNvcHRlclBvaW50LCB0eXBlIEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgdHlwZSBIZWxpY29wdGVyVmlld3BvcnQgfSBmcm9tIFwiLi92aWV3cG9ydFwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVRyYWNrSWQgPSBgZW5lbXkuJHtzdHJpbmd9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15VHJhY2tJZCA9IChlbmVteUlkOiBPcmJJZCk6IEVuZW15VHJhY2tJZCA9PlxuICBlbmVteUlkID09PSBcImJhc2ljT3JiXCIgPyBcImVuZW15LmJhc2ljXCIgOiBgZW5lbXkuJHtlbmVteUlkfWA7XG5cbmV4cG9ydCBjb25zdCBlbmVteUlkRnJvbVRyYWNrSWQgPSAoaWQ6IHN0cmluZyk6IE9yYklkIHwgbnVsbCA9PiB7XG4gIGlmIChpZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBjYW5kaWRhdGUgPSBpZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG4gIHJldHVybiBjYW5kaWRhdGUgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgT3JiSWQgOiBudWxsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGlkOiBzdHJpbmcpOiB7IGVuZW15SWQ6IE9yYklkOyBkZWZpbml0aW9uOiBPcmJNZW1iZXIgfSB8IG51bGwge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGlkKTtcbiAgcmV0dXJuIGVuZW15SWQgPyB7IGVuZW15SWQsIGRlZmluaXRpb246IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdIH0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5lbXlBY3RvcihlbmVteUlkOiBPcmJJZCk6IE5lb25TaGFwZUFjdG9yIHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdO1xuICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShkZWZpbml0aW9uLnNoYXBlSWQpO1xuICBpZiAoIXNoYXBlKSB0aHJvdyBuZXcgRXJyb3IoYEVuZW15IFwiJHtlbmVteUlkfVwiIHVzZXMgbWlzc2luZyBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7ZGVmaW5pdGlvbi5zaGFwZUlkfVwiLmApO1xuICBjb25zdCBlbnRyYW5jZSA9IGVuZW15RW50cmFuY2VQcm9maWxlc1tlbmVteUlkXTtcbiAgY29uc3QgYWN0b3IgPSBuZXcgTmVvblNoYXBlQWN0b3Ioe1xuICAgIHNoYXBlLFxuICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgZW50cmFuY2VEdXJhdGlvbjogZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLFxuICAgIGVudHJhbmNlTWFnbml0dWRlOiBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlLFxuICB9KTtcbiAgcmV0dXJuIGFjdG9yLmVudGVyKGVudHJhbmNlLmR1cmF0aW9uU2Vjb25kcywgZW50cmFuY2Uuc2NhdHRlck1hZ25pdHVkZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteURlYXRoRWZmZWN0KG9wdGlvbnM6IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBzZWVkPzogbnVtYmVyO1xufSk6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB8IG51bGwge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbb3B0aW9ucy5lbmVteUlkXTtcbiAgaWYgKGRlZmluaXRpb24uZGVhdGhWaXN1YWwgIT09IFwiY2xvdWRcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qoe1xuICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteUlkLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3Bvc2VFbmVteUFjdG9yKGFjdG9yOiBOZW9uU2hhcGVBY3RvciwgZGVmaW5pdGlvbjogT3JiTWVtYmVyKTogdm9pZCB7XG4gIGFjdG9yLmV4cGxvZGVNYWduaXR1ZGUgPSBkZWZpbml0aW9uLmV4cGxvc2lvbk1hZ25pdHVkZTtcbiAgYWN0b3IuZGlzcG9zZShOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYW1hZ2VhYmxlRW5lbXkge1xuICBpZDogbnVtYmVyO1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG4gIGR5aW5nOiBib29sZWFuO1xuICBoaXRGbGFzaFVudGlsPzogbnVtYmVyO1xuICBleGl0RWZmZWN0U3Bhd25lZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlYXRFbmVteShcbiAgZW5lbXk6IERhbWFnZWFibGVFbmVteSxcbiAgZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sXG4gIGNvbG9yOiBzdHJpbmcgPSBuZW9uUGFsZXR0ZVtvcmJGYW1pbHkubWVtYmVyc1tlbmVteS5lbmVteUlkXS5iYXNlQ29sb3JdLFxuKTogT3JiTWVtYmVyIHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdO1xuICBlbmVteS5keWluZyA9IHRydWU7XG4gIGlmICghZW5lbXkuZXhpdEVmZmVjdFNwYXduZWQpIHtcbiAgICBlbmVteS5leGl0RWZmZWN0U3Bhd25lZCA9IHRydWU7XG4gICAgY29uc3QgZWZmZWN0ID0gY3JlYXRlRW5lbXlEZWF0aEVmZmVjdCh7XG4gICAgICBlbmVteUlkOiBlbmVteS5lbmVteUlkLFxuICAgICAgeDogZW5lbXkueCxcbiAgICAgIHk6IGVuZW15LnksXG4gICAgICBjb2xvcixcbiAgICAgIHNlZWQ6IGVuZW15LmlkLFxuICAgIH0pO1xuICAgIGlmIChlZmZlY3QpIGVmZmVjdHMucHVzaChlZmZlY3QpO1xuICB9XG4gIGRpc3Bvc2VFbmVteUFjdG9yKGVuZW15LmFjdG9yLCBkZWZpbml0aW9uKTtcbiAgcmV0dXJuIGRlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRW5lbXlEYW1hZ2Uob3B0aW9uczoge1xuICBlbmVteTogRGFtYWdlYWJsZUVuZW15O1xuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXTtcbiAgZGFtYWdlPzogbnVtYmVyO1xuICBpbXBhY3RNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGNvbG9yPzogc3RyaW5nO1xufSk6IHsga2lsbGVkOiBib29sZWFuOyBkZWZpbml0aW9uOiBPcmJNZW1iZXIgfSB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15LmVuZW15SWRdO1xuICBpZiAob3B0aW9ucy5kYW1hZ2UpIG9wdGlvbnMuZW5lbXkuaGVhbHRoIC09IG9wdGlvbnMuZGFtYWdlO1xuICBpZiAob3B0aW9ucy5pbXBhY3RNYWduaXR1ZGUpIHtcbiAgICBvcHRpb25zLmVuZW15LmFjdG9yLmltcGFjdCh7XG4gICAgICBkaXJlY3Rpb246IHsgeDogMCwgeTogMSB9LFxuICAgICAgbWFnbml0dWRlOiBvcHRpb25zLmltcGFjdE1hZ25pdHVkZSAvIGRlZmluaXRpb24uaW1wYWN0UmVzaXN0YW5jZSxcbiAgICB9KTtcbiAgfVxuICBpZiAob3B0aW9ucy5oaXRGbGFzaFVudGlsICE9PSB1bmRlZmluZWQpIG9wdGlvbnMuZW5lbXkuaGl0Rmxhc2hVbnRpbCA9IG9wdGlvbnMuaGl0Rmxhc2hVbnRpbDtcbiAgaWYgKG9wdGlvbnMuZW5lbXkuaGVhbHRoIDw9IDApIHtcbiAgICByZXR1cm4geyBraWxsZWQ6IHRydWUsIGRlZmluaXRpb246IGRlZmVhdEVuZW15KG9wdGlvbnMuZW5lbXksIG9wdGlvbnMuZWZmZWN0cywgb3B0aW9ucy5jb2xvcikgfTtcbiAgfVxuICByZXR1cm4geyBraWxsZWQ6IGZhbHNlLCBkZWZpbml0aW9uIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUhlYWx0aEJhclByaW1pdGl2ZXMob3B0aW9uczoge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICB2aXNpYmxlVGhyZXNob2xkPzogbnVtYmVyO1xufSk6IE5lb25QcmltaXRpdmVbXSB7XG4gIGNvbnN0IHRocmVzaG9sZCA9IG9wdGlvbnMudmlzaWJsZVRocmVzaG9sZCA/PyBvcmJGYW1pbHkubWVtYmVycy5iYXNpY09yYi5oZWFsdGg7XG4gIGlmIChvcHRpb25zLm1heEhlYWx0aCA8PSB0aHJlc2hvbGQpIHJldHVybiBbXTtcbiAgY29uc3QgcmF0aW8gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvcHRpb25zLmhlYWx0aCAvIG9wdGlvbnMubWF4SGVhbHRoKSk7XG4gIGNvbnN0IHkgPSBvcHRpb25zLnk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMzYsIG9wdGlvbnMud2lkdGgpO1xuICBjb25zdCBsZWZ0ID0gb3B0aW9ucy54IC0gd2lkdGggLyAyO1xuICBjb25zdCBmaWxsZWQgPSBNYXRoLm1heCgwLCB3aWR0aCAqIHJhdGlvKTtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB4OiBvcHRpb25zLngsXG4gICAgICB5LFxuICAgICAgd2lkdGg6IDguOCxcbiAgICAgIGhlaWdodDogd2lkdGggLyAyLFxuICAgICAgY29sb3I6IFwiIzE2MDgxN1wiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiIzE2MDgxN1wiLFxuICAgICAgZ2xvdzogLjA4LFxuICAgICAgaW50ZW5zaXR5OiAuNDIsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5QSSAvIDIsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBsZWZ0ICsgZmlsbGVkIC8gMixcbiAgICAgIHksXG4gICAgICB3aWR0aDogNy4yLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBmaWxsZWQpIC8gMixcbiAgICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAuNzgsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5QSSAvIDIsXG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUhlYWx0aEJhclRhcmdldCB7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGVkRW5lbXlIZWFsdGhCYXJQcmltaXRpdmVzKFxuICB0YXJnZXRzOiByZWFkb25seSBFbmVteUhlYWx0aEJhclRhcmdldFtdLFxuICBjYW1lcmFTZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgcmV0dXJuIHRhcmdldHMuZmxhdE1hcCh0YXJnZXQgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1t0YXJnZXQuZW5lbXlJZF07XG4gICAgY29uc3QgcG9pbnQgPSBwcm9qZWN0SGVsaWNvcHRlclBvaW50KHRhcmdldC54LCB0YXJnZXQueSwgY2FtZXJhU2V0dGluZ3MsIHZpZXdwb3J0KTtcbiAgICBjb25zdCBwcm9qZWN0ZWRTaXplID0gdGFyZ2V0LnNpemUgKiBwb2ludC5zY2FsZTtcbiAgICBjb25zdCBzY2FsZSA9IHRhcmdldC5zY2FsZSA/PyAxO1xuICAgIHJldHVybiBlbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnkgLSBwcm9qZWN0ZWRTaXplICogLjcyIC0gMTIsXG4gICAgICB3aWR0aDogTWF0aC5tYXgocHJvamVjdGVkU2l6ZSAqIDEuMzUsIGRlZmluaXRpb24ucmFkaXVzICogNS4yICogc2NhbGUgKiBwb2ludC5zY2FsZSksXG4gICAgICBoZWFsdGg6IHRhcmdldC5oZWFsdGgsXG4gICAgICBtYXhIZWFsdGg6IHRhcmdldC5tYXhIZWFsdGgsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5iYXNlQ29sb3JdLFxuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBnZXROZW9uU2hhcGUsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblRvcERvd25TaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IFNoaWVsZE1lbWJlciwgU3dvcmRNZW1iZXIgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBBY3RpdmVTbGFzaEFuaW1hdGlvbiB9IGZyb20gXCIuL2NvbWJhdC9zd29yZEV2YWx1YXRvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdO1xuICBzaGFwZXM6IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuY29uc3QgZW1wdHlTY2VuZSA9ICgpOiBGYW1pbHlWaXN1YWxTY2VuZSA9PiAoeyBwcmltaXRpdmVzOiBbXSwgc2hhcGVzOiBbXSB9KTtcbmNvbnN0IHJlcXVpcmVkU2hhcGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShpZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgTmVvbkZhY3Rvcnkgc2hhcGUgXCIke2lkfVwiIGlzIHJlcXVpcmVkIGJ5IGZhbWlseSB2aXN1YWxzLmApO1xuICByZXR1cm4gc2hhcGU7XG59O1xuY29uc3QgaXNTYWZlU2NlbmVQb2ludCA9IChwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogYm9vbGVhbiA9PlxuICBOdW1iZXIuaXNGaW5pdGUocG9pbnQueCkgJiYgTnVtYmVyLmlzRmluaXRlKHBvaW50LnkpICYmIE1hdGguYWJzKHBvaW50LngpIDwgNTAwMCAmJiBNYXRoLmFicyhwb2ludC55KSA8IDUwMDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFNoaWVsZE1lbWJlcjtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgaW5pdGlhbFN0cmVuZ3RoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHByb2plY3RTY3JlZW5PZmZzZXQ/OiAoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9mZnNldFg6IG51bWJlciwgb2Zmc2V0WTogbnVtYmVyKSA9PiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIGhpdFByb2dyZXNzPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWVsZFZpc3VhbHMob3B0aW9uczogU2hpZWxkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGNvbnN0IHtcbiAgICBkZWZpbml0aW9uLCB4LCB5LCBub3csXG4gICAgc2NhbGUgPSAxLFxuICAgIHByb2plY3RTY3JlZW5PZmZzZXQsXG4gICAgaGl0UHJvZ3Jlc3MgPSAxLFxuICAgIHZpc2libGUgPSB0cnVlLFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgc3RyZW5ndGggPSBNYXRoLm1heCgwLCBvcHRpb25zLnN0cmVuZ3RoKTtcbiAgY29uc3QgaW5pdGlhbFN0cmVuZ3RoID0gTWF0aC5tYXgoMSwgb3B0aW9ucy5pbml0aWFsU3RyZW5ndGgpO1xuICBjb25zdCBpbXBhY3QgPSBNYXRoLm1heCgwLCAxIC0gaGl0UHJvZ3Jlc3MpO1xuICBjb25zdCBleHBsb2RpbmcgPSBzdHJlbmd0aCA8PSAwICYmIGhpdFByb2dyZXNzIDwgMTtcbiAgY29uc3QgY29sb3IgPSBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXTtcbiAgY29uc3QgcmFkaXVzID0gZGVmaW5pdGlvbi5yYWRpdXMgKiBzY2FsZTtcblxuICBpZiAodmlzaWJsZSB8fCBleHBsb2RpbmcpIHtcbiAgICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgICBzaGFwZTogcmVxdWlyZWRTaGFwZShcInNoaWVsZC1yaW5nXCIpLFxuICAgICAgeCwgeSxcbiAgICAgIHNpemU6IHJhZGl1cyxcbiAgICAgIGNvbG9yLFxuICAgICAgbGluZVRoaWNrbmVzczogLjcyLFxuICAgICAgZ2xvdzogMSArIGltcGFjdCAqIC44LFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGVuZXJneUludGVuc2l0eTogMS4xNSArIGltcGFjdCAqIDEuNSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNDIgKyBpbXBhY3QgKiAuMyxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjE1ICsgaW1wYWN0ICogMS4yLFxuICAgICAgZW5lcmd5QmxlZWQ6IC41ICsgaW1wYWN0ICogLjM1LFxuICAgICAgZXhwbG9kZVByb2dyZXNzOiBleHBsb2RpbmcgPyBNYXRoLm1pbigxLCBoaXRQcm9ncmVzcykgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogLjksXG4gICAgfSk7XG4gIH1cblxuICBpZiAoIXZpc2libGUpIHJldHVybiBzY2VuZTtcbiAgY29uc3Qgb3JiaXRlclNoYXBlID0gcmVxdWlyZWRTaGFwZShkZWZpbml0aW9uLm9yYml0ZXJTaGFwZSA9PT0gXCJoZXhcIiA/IFwiaGV4LWZpZ2h0ZXJcIiA6IFwic3Rhci1jb3JlXCIpO1xuICBjb25zdCBvcmJpdGVyQ291bnQgPSBNYXRoLmNlaWwoZGVmaW5pdGlvbi5vcmJpdGVyQ291bnQgKiBzdHJlbmd0aCAvIGluaXRpYWxTdHJlbmd0aCk7XG4gIGNvbnN0IGFuZ2xlU3RlcCA9IE1hdGguUEkgKiAyIC8gZGVmaW5pdGlvbi5vcmJpdGVyQ291bnQ7XG4gIGNvbnN0IGJhc2VBbmdsZSA9IG5vdyAvIDEwMDAgKiBkZWZpbml0aW9uLm9yYml0ZXJTcGVlZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmJpdGVyQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gYmFzZUFuZ2xlICsgaSAqIGFuZ2xlU3RlcDtcbiAgICBjb25zdCBmYWxsYmFja09yYml0ZXIgPSB7IHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIHk6IHkgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMgfTtcbiAgICBjb25zdCBwcm9qZWN0ZWRPcmJpdGVyID0gcHJvamVjdFNjcmVlbk9mZnNldD8uKHgsIHksIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzKTtcbiAgICBjb25zdCBvcmJpdGVyID0gcHJvamVjdGVkT3JiaXRlciAmJiBpc1NhZmVTY2VuZVBvaW50KHByb2plY3RlZE9yYml0ZXIpID8gcHJvamVjdGVkT3JiaXRlciA6IGZhbGxiYWNrT3JiaXRlcjtcbiAgICBzY2VuZS5zaGFwZXMucHVzaCh7XG4gICAgICBzaGFwZTogb3JiaXRlclNoYXBlLFxuICAgICAgeDogb3JiaXRlci54LFxuICAgICAgeTogb3JiaXRlci55LFxuICAgICAgc2l6ZTogZGVmaW5pdGlvbi5vcmJpdGVyU2l6ZSAqIDEuOCAqIHNjYWxlLFxuICAgICAgY29sb3IsXG4gICAgICByb3RhdGlvblo6IGFuZ2xlICsgbm93IC8gMTQwMCxcbiAgICAgIGxpbmVUaGlja25lc3M6IC43MixcbiAgICAgIGdsb3c6IDEsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMSxcbiAgICAgIGVuZXJneUNvdmVyYWdlOiAuNCxcbiAgICAgIGVuZXJneVNwZWVkOiAxLjI1LFxuICAgICAgZW5lcmd5QmxlZWQ6IC41LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbE9wdGlvbnMge1xuICBkZWZpbml0aW9uOiBTd29yZE1lbWJlcjtcbiAgc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbDtcbiAgc2xhc2hlcz86IHJlYWRvbmx5IChBY3RpdmVTbGFzaEFuaW1hdGlvbiB8IG51bGwpW107XG4gIGRvY2tTaWRlOiAtMSB8IDE7XG4gIGRvY2tTaWRlcz86IHJlYWRvbmx5ICgtMSB8IDEpW107XG4gIHBvaW50czogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XG4gIHR1bmluZz86IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+O1xuICBzY2FsZT86IG51bWJlcjtcbiAgdmlzaWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRWaXN1YWxUdW5pbmcge1xuICBkb2NrU2lkZU9mZnNldDogbnVtYmVyO1xuICBkb2NrRm9yd2FyZDogbnVtYmVyO1xuICBzdHJpa2VEdXJhdGlvbjogbnVtYmVyO1xuICBmb2xsb3dUaHJvdWdoRHVyYXRpb246IG51bWJlcjtcbiAgc3dpbmdBbmdsZTogbnVtYmVyO1xuICBhcmNMaWZ0OiBudW1iZXI7XG4gIGFyY1JhZGl1czogbnVtYmVyO1xuICB0cmFpbFNlZ21lbnRzOiBudW1iZXI7XG4gIHRyYWlsV2lkdGg6IG51bWJlcjtcbiAgdHJhaWxJbnRlbnNpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTd29yZFZpc3VhbFR1bmluZzogU3dvcmRWaXN1YWxUdW5pbmcgPSB7XG4gIGRvY2tTaWRlT2Zmc2V0OiAxMyxcbiAgZG9ja0ZvcndhcmQ6IDMsXG4gIHN0cmlrZUR1cmF0aW9uOiAuMzEsXG4gIGZvbGxvd1Rocm91Z2hEdXJhdGlvbjogLjE4LFxuICBzd2luZ0FuZ2xlOiAyLjgsXG4gIGFyY0xpZnQ6IDE0LFxuICBhcmNSYWRpdXM6IDQyLFxuICB0cmFpbFNlZ21lbnRzOiAxNCxcbiAgdHJhaWxXaWR0aDogMi42LFxuICB0cmFpbEludGVuc2l0eTogLjc1LFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlU3dvcmRWaXN1YWxUdW5pbmcgPSAodHVuaW5nPzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz4pOiBTd29yZFZpc3VhbFR1bmluZyA9PiAoe1xuICAuLi5kZWZhdWx0U3dvcmRWaXN1YWxUdW5pbmcsXG4gIC4uLnR1bmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3dvcmRWaXN1YWxEdXJhdGlvbk1zID0gKHR1bmluZz86IFBhcnRpYWw8U3dvcmRWaXN1YWxUdW5pbmc+KTogbnVtYmVyID0+IHtcbiAgY29uc3QgcmVzb2x2ZWQgPSBjb21wbGV0ZVN3b3JkVmlzdWFsVHVuaW5nKHR1bmluZyk7XG4gIHJldHVybiBNYXRoLm1heCgxMjAsIChyZXNvbHZlZC5zdHJpa2VEdXJhdGlvbiArIHJlc29sdmVkLmZvbGxvd1Rocm91Z2hEdXJhdGlvbikgKiAxMDAwKTtcbn07XG5cbmZ1bmN0aW9uIHF1YWRyYXRpY1BvaW50KGZyb206IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29udHJvbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0bzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICBjb25zdCBpbnYgPSAxIC0gdDtcbiAgcmV0dXJuIHtcbiAgICB4OiBpbnYgKiBpbnYgKiBmcm9tLnggKyAyICogaW52ICogdCAqIGNvbnRyb2wueCArIHQgKiB0ICogdG8ueCxcbiAgICB5OiBpbnYgKiBpbnYgKiBmcm9tLnkgKyAyICogaW52ICogdCAqIGNvbnRyb2wueSArIHQgKiB0ICogdG8ueSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3ViaWNQb2ludChcbiAgZnJvbTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBjb250cm9sQTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBjb250cm9sQjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0bzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0OiBudW1iZXIsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICBjb25zdCBpbnYgPSAxIC0gdDtcbiAgcmV0dXJuIHtcbiAgICB4OiBpbnYgKiogMyAqIGZyb20ueCArIDMgKiBpbnYgKiBpbnYgKiB0ICogY29udHJvbEEueCArIDMgKiBpbnYgKiB0ICogdCAqIGNvbnRyb2xCLnggKyB0ICoqIDMgKiB0by54LFxuICAgIHk6IGludiAqKiAzICogZnJvbS55ICsgMyAqIGludiAqIGludiAqIHQgKiBjb250cm9sQS55ICsgMyAqIGludiAqIHQgKiB0ICogY29udHJvbEIueSArIHQgKiogMyAqIHRvLnksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN3b3JkUGF0aChcbiAgYmFzZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0YXJnZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgZGVzdGluYXRpb25TaWRlOiAtMSB8IDEsXG4gIHNjYWxlOiBudW1iZXIsXG4gIHR1bmluZzogU3dvcmRWaXN1YWxUdW5pbmcsXG4gIGNyb3NzTGFuZTogYm9vbGVhbixcbiAgdGFyZ2V0U3BhbjogbnVtYmVyLFxuKSB7XG4gIGNvbnN0IHN0YXJ0U2lkZTogLTEgfCAxID0gZGVzdGluYXRpb25TaWRlID09PSAxID8gLTEgOiAxO1xuICBjb25zdCBzd2VlcFdpZHRoID0gY3Jvc3NMYW5lID8gdGFyZ2V0U3BhbiAqIC4zNCA6IDA7XG4gIGNvbnN0IHN0YXJ0ID0geyB4OiBiYXNlLnggKyBzdGFydFNpZGUgKiAodHVuaW5nLmRvY2tTaWRlT2Zmc2V0ICogc2NhbGUgKyBzd2VlcFdpZHRoKSwgeTogYmFzZS55IC0gdHVuaW5nLmRvY2tGb3J3YXJkICogc2NhbGUgfTtcbiAgY29uc3QgZmluaXNoID0geyB4OiBiYXNlLnggKyBkZXN0aW5hdGlvblNpZGUgKiAodHVuaW5nLmRvY2tTaWRlT2Zmc2V0ICogc2NhbGUgKyBzd2VlcFdpZHRoKSwgeTogYmFzZS55IC0gdHVuaW5nLmRvY2tGb3J3YXJkICogc2NhbGUgfTtcbiAgY29uc3QgdGFyZ2V0SW5mbHVlbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdHVuaW5nLmFyY1JhZGl1cyAvIDEwMCkpO1xuICBjb25zdCBhcGV4ID0ge1xuICAgIHg6ICgoc3RhcnQueCArIGZpbmlzaC54KSAvIDIgKiAoMSAtIHRhcmdldEluZmx1ZW5jZSkgKyB0YXJnZXQueCAqIHRhcmdldEluZmx1ZW5jZSkgKyBkZXN0aW5hdGlvblNpZGUgKiAoY3Jvc3NMYW5lID8gMTIgKiBzY2FsZSA6IDApLFxuICAgIHk6IE1hdGgubWluKHN0YXJ0LnksIGZpbmlzaC55LCB0YXJnZXQueSkgLSB0dW5pbmcuYXJjTGlmdCAqIHNjYWxlLFxuICB9O1xuICBjb25zdCBjb250cm9sQSA9IHtcbiAgICB4OiBzdGFydC54ICsgc3RhcnRTaWRlICogdHVuaW5nLnN3aW5nQW5nbGUgKiAoY3Jvc3NMYW5lID8gMTggOiAxMykgKiBzY2FsZSxcbiAgICB5OiBzdGFydC55ICsgMTAgKiBzY2FsZSxcbiAgfTtcbiAgY29uc3QgY29udHJvbEIgPSB7XG4gICAgeDogYXBleC54IC0gZGVzdGluYXRpb25TaWRlICogdHVuaW5nLnN3aW5nQW5nbGUgKiAoY3Jvc3NMYW5lID8gMzAgOiAyMikgKiBzY2FsZSxcbiAgICB5OiBhcGV4LnksXG4gIH07XG4gIHJldHVybiB7IHN0YXJ0LCBmaW5pc2gsIGNvbnRyb2xBLCBjb250cm9sQiB9O1xufVxuXG5mdW5jdGlvbiB0YXJnZXRTcGFuKHRhcmdldHM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdKTogbnVtYmVyIHtcbiAgaWYgKHRhcmdldHMubGVuZ3RoIDwgMikgcmV0dXJuIDA7XG4gIGNvbnN0IHhzID0gdGFyZ2V0cy5tYXAodGFyZ2V0ID0+IHRhcmdldC54KTtcbiAgcmV0dXJuIE1hdGgubWF4KC4uLnhzKSAtIE1hdGgubWluKC4uLnhzKTtcbn1cblxuZnVuY3Rpb24gc3dlZXBUYXJnZXRGb3IodGFyZ2V0czogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10sIHNpZGU6IC0xIHwgMSwgZmFsbGJhY2s6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbGxiYWNrO1xuICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEpIHJldHVybiB0YXJnZXRzWzBdO1xuICBjb25zdCBzb3J0ZWQgPSBbLi4udGFyZ2V0c10uc29ydCgoYSwgYikgPT4gc2lkZSA9PT0gMSA/IGEueCAtIGIueCA6IGIueCAtIGEueCk7XG4gIGNvbnN0IGZpcnN0ID0gc29ydGVkWzBdO1xuICBjb25zdCBsYXN0ID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXTtcbiAgY29uc3Qgc3BhbiA9IE1hdGguYWJzKGxhc3QueCAtIGZpcnN0LngpO1xuICByZXR1cm4ge1xuICAgIHg6IGxhc3QueCArIHNpZGUgKiBNYXRoLm1pbigzNCwgTWF0aC5tYXgoMTQsIHNwYW4gKiAuMSkpLFxuICAgIHk6IE1hdGgubWluKC4uLnNvcnRlZC5tYXAodGFyZ2V0ID0+IHRhcmdldC55KSwgKGZpcnN0LnkgKyBsYXN0LnkpIC8gMiksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNsYXNoUG9zZShcbiAgYmFzZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICB0YXJnZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgZGVzdGluYXRpb25TaWRlOiAtMSB8IDEsXG4gIHByb2dyZXNzOiBudW1iZXIsXG4gIHNjYWxlOiBudW1iZXIsXG4gIHR1bmluZzogU3dvcmRWaXN1YWxUdW5pbmcsXG4gIGNyb3NzTGFuZTogYm9vbGVhbixcbiAgc3BhbjogbnVtYmVyLFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgcm90YXRpb246IG51bWJlcjsgdHJhaWxQcm9ncmVzczogbnVtYmVyIH0ge1xuICBjb25zdCB0b3RhbER1cmF0aW9uID0gTWF0aC5tYXgoLjAxLCB0dW5pbmcuc3RyaWtlRHVyYXRpb24gKyB0dW5pbmcuZm9sbG93VGhyb3VnaER1cmF0aW9uKTtcbiAgY29uc3Qgc3RyaWtlID0gdHVuaW5nLnN0cmlrZUR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbjtcbiAgY29uc3QgcGF0aCA9IHN3b3JkUGF0aChiYXNlLCB0YXJnZXQsIGRlc3RpbmF0aW9uU2lkZSwgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKTtcbiAgY29uc3QgdGFuZ2VudFNhbXBsZSA9IChwYXRoVDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYSA9IGN1YmljUG9pbnQocGF0aC5zdGFydCwgcGF0aC5jb250cm9sQSwgcGF0aC5jb250cm9sQiwgcGF0aC5maW5pc2gsIE1hdGgubWF4KDAsIHBhdGhUIC0gLjAxNSkpO1xuICAgIGNvbnN0IGIgPSBjdWJpY1BvaW50KHBhdGguc3RhcnQsIHBhdGguY29udHJvbEEsIHBhdGguY29udHJvbEIsIHBhdGguZmluaXNoLCBNYXRoLm1pbigxLCBwYXRoVCArIC4wMTUpKTtcbiAgICByZXR1cm4gTWF0aC5hdGFuMihiLnkgLSBhLnksIGIueCAtIGEueCkgLSBNYXRoLlBJIC8gMjtcbiAgfTtcblxuICBpZiAocHJvZ3Jlc3MgPCBzdHJpa2UpIHtcbiAgICBjb25zdCB0ID0gcHJvZ3Jlc3MgLyBzdHJpa2U7XG4gICAgY29uc3QgZWFzZSA9IHQgKiB0ICogKDMgLSAyICogdCk7XG4gICAgY29uc3QgcG9pbnQgPSBjdWJpY1BvaW50KHBhdGguc3RhcnQsIHBhdGguY29udHJvbEEsIHBhdGguY29udHJvbEIsIHBhdGguZmluaXNoLCBlYXNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnksXG4gICAgICByb3RhdGlvbjogdGFuZ2VudFNhbXBsZShlYXNlKSxcbiAgICAgIHRyYWlsUHJvZ3Jlc3M6IGVhc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHQgPSAocHJvZ3Jlc3MgLSBzdHJpa2UpIC8gTWF0aC5tYXgoLjAwMSwgMSAtIHN0cmlrZSk7XG4gIGNvbnN0IGVhc2UgPSB0ICogdCAqICgzIC0gMiAqIHQpO1xuICBjb25zdCBvdmVyc2hvb3QgPSB7XG4gICAgeDogcGF0aC5maW5pc2gueCArIGRlc3RpbmF0aW9uU2lkZSAqIDcgKiBzY2FsZSxcbiAgICB5OiBwYXRoLmZpbmlzaC55IC0gNCAqIHNjYWxlLFxuICB9O1xuICBjb25zdCBwb2ludCA9IHF1YWRyYXRpY1BvaW50KHBhdGguZmluaXNoLCBvdmVyc2hvb3QsIHBhdGguZmluaXNoLCBlYXNlKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBwb2ludC54LFxuICAgIHk6IHBvaW50LnksXG4gICAgcm90YXRpb246IHRhbmdlbnRTYW1wbGUoMSkgLSBkZXN0aW5hdGlvblNpZGUgKiAoMSAtIGVhc2UpICogLjM1LFxuICAgIHRyYWlsUHJvZ3Jlc3M6IDEsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN3b3JkVHJhaWwoc2xhc2g6IEFjdGl2ZVNsYXNoQW5pbWF0aW9uLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5zOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgdHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyk6IE5lb25QcmltaXRpdmVbXSB7XG4gIGlmIChzbGFzaC5wcm9ncmVzcyA+PSAxKSByZXR1cm4gW107XG4gIGNvbnN0IGxpZmUgPSAxIC0gc2xhc2gucHJvZ3Jlc3M7XG4gIGNvbnN0IHRoaWNrbmVzcyA9IHNsYXNoLnRoaWNrbmVzcyAqIHNjYWxlO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgdGFyZ2V0cyA9IHNsYXNoLnRhcmdldFBvaW50cy5sZW5ndGggPiAwID8gc2xhc2gudGFyZ2V0UG9pbnRzIDogW3sgeDogc2xhc2gueCwgeTogc2xhc2gueSAtIHNsYXNoLnJlYWNoIH1dO1xuICBjb25zdCBzcGFuID0gdGFyZ2V0U3Bhbih0YXJnZXRzKTtcbiAgY29uc3QgY3Jvc3NMYW5lID0gc3BhbiA+IDgwICogc2NhbGU7XG4gIGNvbnN0IHN3ZWVwVGFyZ2V0ID0gc3dlZXBUYXJnZXRGb3IodGFyZ2V0cywgc2xhc2guc2lkZSwgdGFyZ2V0c1swXSk7XG4gIGZvciAoY29uc3QgW2luZGV4LCBvcmlnaW5dIG9mIG9yaWdpbnMuZW50cmllcygpKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0cy5sZW5ndGggPiAxID8gc3dlZXBUYXJnZXQgOiB0YXJnZXRzW2luZGV4ICUgdGFyZ2V0cy5sZW5ndGhdO1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdHVuaW5nLnRyYWlsU2VnbWVudHM7XG4gICAgY29uc3QgcG9zZSA9IHNsYXNoUG9zZShvcmlnaW4sIHRhcmdldCwgc2xhc2guc2lkZSwgc2xhc2gucHJvZ3Jlc3MsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3Bhbik7XG4gICAgY29uc3QgdHJhdmVsID0gcG9zZS50cmFpbFByb2dyZXNzO1xuICAgIGlmICh0cmF2ZWwgPD0gMCkgY29udGludWU7XG4gICAgY29uc3QgdmlzaWJsZVNlZ21lbnRzID0gTWF0aC5tYXgoMywgTWF0aC5jZWlsKHNlZ21lbnRzICogdHJhdmVsKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXNpYmxlU2VnbWVudHM7IGkrKykge1xuICAgICAgY29uc3QgdDAgPSBNYXRoLm1heCgwLCB0cmF2ZWwgLSAodmlzaWJsZVNlZ21lbnRzIC0gaSkgLyBzZWdtZW50cyk7XG4gICAgICBjb25zdCB0MSA9IE1hdGgubWluKDEsIHQwICsgLjE2KTtcbiAgICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gKyB0dW5pbmcuZm9sbG93VGhyb3VnaER1cmF0aW9uO1xuICAgICAgY29uc3Qgc3RyaWtlID0gdHVuaW5nLnN0cmlrZUR1cmF0aW9uIC8gdG90YWxEdXJhdGlvbjtcbiAgICAgIGNvbnN0IGEgPSBzbGFzaFBvc2Uob3JpZ2luLCB0YXJnZXQsIHNsYXNoLnNpZGUsIHQwICogc3RyaWtlLCBzY2FsZSwgdHVuaW5nLCBjcm9zc0xhbmUsIHNwYW4pO1xuICAgICAgY29uc3QgYiA9IHNsYXNoUG9zZShvcmlnaW4sIHRhcmdldCwgc2xhc2guc2lkZSwgdDEgKiBzdHJpa2UsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3Bhbik7XG4gICAgICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgICAgIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICAgICAgY29uc3QgYWdlID0gaSAvIHZpc2libGVTZWdtZW50cztcbiAgICAgIGNvbnN0IGZhZGUgPSBNYXRoLm1heCguMTgsIE1hdGgucG93KDEgLSBhZ2UsIC44NSkpICogTWF0aC5taW4oMSwgbGlmZSArIC4zNSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KDEuNiwgdGhpY2tuZXNzICogKHR1bmluZy50cmFpbFdpZHRoIC0gYWdlICogdHVuaW5nLnRyYWlsV2lkdGggKiAuNDgpKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgLyAyLFxuICAgICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZ2xvdzogMS44ICogZmFkZSxcbiAgICAgICAgaW50ZW5zaXR5OiB0dW5pbmcudHJhaWxJbnRlbnNpdHkgKiBmYWRlLFxuICAgICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICAgICAgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goe1xuICAgICAgICB4OiAoYS54ICsgYi54KSAvIDIsXG4gICAgICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KDIuMiwgdGhpY2tuZXNzICogKHR1bmluZy50cmFpbFdpZHRoICogMS4zNSAtIGFnZSAqIHR1bmluZy50cmFpbFdpZHRoICogLjU1KSksXG4gICAgICAgIGhlaWdodDogTWF0aC5oeXBvdChkeCwgZHkpICogLjcyLFxuICAgICAgICBjb2xvcjogc2xhc2guY29sb3IsXG4gICAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZ2xvdzogMS42ICogZmFkZSxcbiAgICAgICAgaW50ZW5zaXR5OiB0dW5pbmcudHJhaWxJbnRlbnNpdHkgKiBmYWRlLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcmltaXRpdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dvcmRWaXN1YWxzKG9wdGlvbnM6IFN3b3JkVmlzdWFsT3B0aW9ucyk6IEZhbWlseVZpc3VhbFNjZW5lIHtcbiAgY29uc3Qgc2NlbmUgPSBlbXB0eVNjZW5lKCk7XG4gIGlmICghb3B0aW9ucy52aXNpYmxlKSByZXR1cm4gc2NlbmU7XG4gIGNvbnN0IHsgZGVmaW5pdGlvbiwgc2xhc2gsIHBvaW50cywgc2NhbGUgPSAxIH0gPSBvcHRpb25zO1xuICBjb25zdCB0dW5pbmcgPSBjb21wbGV0ZVN3b3JkVmlzdWFsVHVuaW5nKG9wdGlvbnMudHVuaW5nKTtcbiAgY29uc3Qgc2xhc2hlcyA9IG9wdGlvbnMuc2xhc2hlcyA/PyBbc2xhc2hdO1xuICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBzbG90U2xhc2ggPSBzbGFzaGVzW2luZGV4XSA/PyBudWxsO1xuICAgIGNvbnN0IGRvY2tTaWRlID0gc2xvdFNsYXNoPy5zaWRlID8/IG9wdGlvbnMuZG9ja1NpZGVzPy5baW5kZXhdID8/IG9wdGlvbnMuZG9ja1NpZGU7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHNsb3RTbGFzaD8udGFyZ2V0UG9pbnRzID8/IFtdO1xuICAgIGNvbnN0IHNwYW4gPSB0YXJnZXRTcGFuKHRhcmdldHMpO1xuICAgIGNvbnN0IGNyb3NzTGFuZSA9IHNwYW4gPiA4MCAqIHNjYWxlO1xuICAgIGNvbnN0IHN3ZWVwVGFyZ2V0ID0gc2xvdFNsYXNoID8gc3dlZXBUYXJnZXRGb3IodGFyZ2V0cywgZG9ja1NpZGUsIHsgeDogcG9pbnQueCwgeTogcG9pbnQueSAtIDMwICogc2NhbGUgfSkgOiBudWxsO1xuICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldHMubGVuZ3RoID4gMSA/IHN3ZWVwVGFyZ2V0IDogdGFyZ2V0c1tpbmRleCAlIE1hdGgubWF4KDEsIHRhcmdldHMubGVuZ3RoKV07XG4gICAgY29uc3QgcmVzdCA9IHsgeDogcG9pbnQueCArIGRvY2tTaWRlICogdHVuaW5nLmRvY2tTaWRlT2Zmc2V0ICogc2NhbGUsIHk6IHBvaW50LnkgLSB0dW5pbmcuZG9ja0ZvcndhcmQgKiBzY2FsZSB9O1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzbG90U2xhc2ggJiYgdGFyZ2V0ID8gc2xhc2hQb3NlKHBvaW50LCB0YXJnZXQsIGRvY2tTaWRlLCBzbG90U2xhc2gucHJvZ3Jlc3MsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3BhbikgOiB7XG4gICAgICB4OiByZXN0LngsXG4gICAgICB5OiByZXN0LnksXG4gICAgICByb3RhdGlvbjogLWRvY2tTaWRlICogLjk1LFxuICAgICAgdHJhaWxQcm9ncmVzczogMCxcbiAgICB9O1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic3dvcmQtbmVlZGxlLXNhYnJlXCIpLFxuICAgICAgeDogY3VycmVudC54LFxuICAgICAgeTogY3VycmVudC55LFxuICAgICAgejogLjAyICsgaW5kZXggKiAuMDAxLFxuICAgICAgc2l6ZTogTWF0aC5taW4oMjMsIGRlZmluaXRpb24ucmFuZ2UgKiAuMzQpICogc2NhbGUsXG4gICAgICBjb2xvcjogbmVvblBhbGV0dGVbZGVmaW5pdGlvbi5jb2xvcl0sXG4gICAgICByb3RhdGlvblg6IDc1ICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIHJvdGF0aW9uWTogMTMgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgcm90YXRpb25aOiAxNSAqIE1hdGguUEkgLyAxODAgKyBjdXJyZW50LnJvdGF0aW9uLFxuICAgICAgbGluZVRoaWNrbmVzczogLjkyLFxuICAgICAgZ2xvdzogc2xvdFNsYXNoID8gMS42NSA6IDEuMDgsXG4gICAgICBlbmVyZ3lJbnRlbnNpdHk6IHNsb3RTbGFzaCA/IDIuMjUgOiAxLjIsXG4gICAgICBlbmVyZ3lDb3ZlcmFnZTogc2xvdFNsYXNoID8gLjcyIDogLjQyLFxuICAgICAgZW5lcmd5U3BlZWQ6IHNsb3RTbGFzaCA/IDIuMSA6IDEuMixcbiAgICAgIGVuZXJneUJsZWVkOiBzbG90U2xhc2ggPyAuOCA6IC41LFxuICAgIH0pO1xuICB9XG4gIGZvciAoY29uc3QgW2luZGV4LCBzbG90U2xhc2hdIG9mIHNsYXNoZXMuZW50cmllcygpKSB7XG4gICAgaWYgKCFzbG90U2xhc2gpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2luZGV4XTtcbiAgICBpZiAocG9pbnQpIHNjZW5lLnByaW1pdGl2ZXMucHVzaCguLi5zd29yZFRyYWlsKHNsb3RTbGFzaCwgc2NhbGUsIFtwb2ludF0sIHR1bmluZykpO1xuICB9XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIG5vdzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGlja3VwU2hhcGUoc2hhcGVJZDogc3RyaW5nLCBvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSB7XG4gIGNvbnN0IHsgeCwgeSwgY29sb3IsIG5vdywgc2NhbGUgPSAxIH0gPSBvcHRpb25zO1xuICByZXR1cm4ge1xuICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKHNoYXBlSWQpLFxuICAgIHg6IHggKyBNYXRoLnNpbihub3cgLyA0MjAgKyB5ICogLjA3KSAqIDQuNSAqIHNjYWxlLFxuICAgIHksXG4gICAgc2l6ZTogMTAgKiBzY2FsZSAqICgxICsgTWF0aC5zaW4obm93IC8gNjAwICsgeSAqIC4wNSkgKiAuMDgpLFxuICAgIGNvbG9yLFxuICAgIHJvdGF0aW9uWjogbm93IC8gMTEwMCxcbiAgICBsaW5lVGhpY2tuZXNzOiAuNzYsXG4gICAgZ2xvdzogMS4wNSxcbiAgICBlbmVyZ3lJbnRlbnNpdHk6IDEuMjUsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IC40OCxcbiAgICBlbmVyZ3lTcGVlZDogMS4zNSxcbiAgICBlbmVyZ3lCbGVlZDogLjU1LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic2hpZWxkLXJpbmdcIiwgb3B0aW9ucyk7XG5cbmV4cG9ydCBjb25zdCBzd29yZFBpY2t1cFZpc3VhbCA9IChvcHRpb25zOiBGYW1pbHlQaWNrdXBWaXN1YWxPcHRpb25zKTogTmVvblRvcERvd25TaGFwZSA9PlxuICBwaWNrdXBTaGFwZShcInN3b3JkLW5lZWRsZS1zYWJyZVwiLCBvcHRpb25zKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgSGVsaWNvcHRlclZpZXdwb3J0IH0gZnJvbSBcIi4vdmlld3BvcnRcIjtcblxuY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5jb25zdCBwbGF5ZXJGb3J3YXJkUm90YXRpb24gPSB7XG4gIHJvdGF0aW9uWDogZGVncmVlc1RvUmFkaWFucygtNTIpLFxuICByb3RhdGlvblk6IGRlZ3JlZXNUb1JhZGlhbnMoLTEpLFxuICByb3RhdGlvblo6IGRlZ3JlZXNUb1JhZGlhbnMoMSksXG59O1xuY29uc3Qgc2NyZWVuRm9yd2FyZFlhdyA9IChkaXJlY3Rpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55KSB8fCAxO1xuICByZXR1cm4gTWF0aC5hdGFuMihkaXJlY3Rpb24ueCAvIGxlbmd0aCwgLWRpcmVjdGlvbi55IC8gbGVuZ3RoKTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdG9yVmlzdWFsUm9sZSA9XG4gIHwgXCJncm91bmRGb3J3YXJkXCJcbiAgfCBcInNjcmVlbkJpbGxib2FyZFwiXG4gIHwgXCJ0dW1ibGluZ0JpbGxib2FyZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yT3JpZW50YXRpb25Db250ZXh0IHtcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBub3c6IG51bWJlcjtcbiAgcGhhc2U/OiBudW1iZXI7XG4gIGZhY2luZz86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yT3JpZW50YXRpb24ocm9sZTogQWN0b3JWaXN1YWxSb2xlLCBjb250ZXh0OiBBY3Rvck9yaWVudGF0aW9uQ29udGV4dCk6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgc3dpdGNoIChyb2xlKSB7XG4gICAgY2FzZSBcImdyb3VuZEZvcndhcmRcIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGxheWVyRm9yd2FyZFJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblg6IHBsYXllckZvcndhcmRSb3RhdGlvbi5yb3RhdGlvblggKyBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDY1MCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4wNixcbiAgICAgICAgcm90YXRpb25ZOiBwbGF5ZXJGb3J3YXJkUm90YXRpb24ucm90YXRpb25ZICsgKGNvbnRleHQuZmFjaW5nID8gc2NyZWVuRm9yd2FyZFlhdyhjb250ZXh0LmZhY2luZykgOiAwKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgXCJ0dW1ibGluZ0JpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBNYXRoLnNpbihjb250ZXh0Lm5vdyAvIDcwMCArIChjb250ZXh0LnBoYXNlID8/IDApKSAqIC4xOCxcbiAgICAgIH07XG4gICAgY2FzZSBcInNjcmVlbkJpbGxib2FyZFwiOlxuICAgICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWxpY29wdGVyVmlld3BvcnRGb3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBsYXllclk6IG51bWJlciwgZm9jdXNYPzogbnVtYmVyKTogSGVsaWNvcHRlclZpZXdwb3J0IHtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCwgcGxheWVyWSwgZm9jdXNYIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcImdyb3VuZEZvcndhcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICAgIHBoYXNlLFxuICAgIGZhY2luZzogeyB4OiAwLCB5OiAtMSB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15T3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4gIHBoYXNlID0gMCxcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJ0dW1ibGluZ0JpbGxib2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmlsbGJvYXJkT3JpZW50YXRpb24oXG4gIGNhbWVyYTogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbm93OiBudW1iZXIsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwic2NyZWVuQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlTGFuZVJ1bm5lclNjZW5lLCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkLCB0eXBlIE5lb25QcmltaXRpdmUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxudHlwZSBTY2VuZUJhY2tncm91bmRTdGF0ZSA9IFwibWlzc2luZ1wiIHwgXCJsb2FkZWRcIiB8IFwibG9hZGluZ1wiO1xuXG5jb25zdCBzY2VuZUJhY2tncm91bmRzID0gbmV3IE1hcDxzdHJpbmcsIFNjZW5lQmFja2dyb3VuZFN0YXRlPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lclNjZW5lUHJpbWl0aXZlcyhcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICB0aW1lTXM6IG51bWJlcixcbik6IE5lb25QcmltaXRpdmVbXSB7XG4gIHJldHVybiBbLi4uKGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSh7IHNjZW5lSWQsIHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9KS5wcmltaXRpdmVzID8/IFtdKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVXJsKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICBjb25zdCBtYXJrZXIgPSBcIi9OZW9uU3dhcm0vXCI7XG4gIGNvbnN0IG5lc3RlZEluZGV4ID0gcGF0aC5pbmRleE9mKG1hcmtlcik7XG4gIGlmIChuZXN0ZWRJbmRleCA+PSAwKSByZXR1cm4gYCR7cGF0aC5zbGljZSgwLCBuZXN0ZWRJbmRleCl9L05lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xuXG4gIGNvbnN0IHBhZ2VJbmRleCA9IHBhdGgubGFzdEluZGV4T2YoXCIvTmVvblN3YXJtLmh0bWxcIik7XG4gIGlmIChwYWdlSW5kZXggPj0gMCkgcmV0dXJuIGAke3BhdGguc2xpY2UoMCwgcGFnZUluZGV4KX0vTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG5cbiAgcmV0dXJuIGBOZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQpOiB2b2lkIHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuXG4gIGNvbnN0IHBhdGggPSBsYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kVXJsKHNjZW5lSWQpO1xuICBjb25zdCBzdGF0ZSA9IHNjZW5lQmFja2dyb3VuZHMuZ2V0KHBhdGgpO1xuICBpZiAoc3RhdGUgPT09IFwibG9hZGVkXCIpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3BhdGh9XCIpYDtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgaWYgKHN0YXRlKSByZXR1cm47XG5cbiAgc2NlbmVCYWNrZ3JvdW5kcy5zZXQocGF0aCwgXCJsb2FkaW5nXCIpO1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgc2NlbmVCYWNrZ3JvdW5kcy5zZXQocGF0aCwgXCJsb2FkZWRcIik7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtwYXRofVwiKWA7XG4gIH07XG4gIGltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgc2NlbmVCYWNrZ3JvdW5kcy5zZXQocGF0aCwgXCJtaXNzaW5nXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZ3JvdW5kLWltYWdlXCIpO1xuICB9O1xuICBpbWFnZS5zcmMgPSBwYXRoO1xufVxuIiwgImltcG9ydCB7IGdldE5lb25TaGFwZSwgTmVvblNoYXBlQWN0b3IsIHR5cGUgTmVvblNoYXBlSW5zdGFuY2UsIHR5cGUgTmVvblNoYXBlTGFiZWwsIHR5cGUgTmVvblRvcERvd25TaGFwZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3Qgc3dhcm1TaGFwZXMgPSB7XG4gIHBsYXllcjogZ2V0TmVvblNoYXBlKFwiYXJyb3ctY2xhc3NpY1wiKSEsXG4gIGVuZW15OiBnZXROZW9uU2hhcGUoXCJodW50ZXItZXllXCIpISxcbiAgbXVsdGlwbGllcjogZ2V0TmVvblNoYXBlKFwiYnJ1aXNlci1jcm9zc1wiKSEsXG4gIGd1blBpY2t1cDogZ2V0TmVvblNoYXBlKFwiaGV4LWZpZ2h0ZXJcIikhLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHBpeGVsc1RvU2hhcGVXb3JsZCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gKHtcbiAgeDogKHggLyBjYW52YXMud2lkdGggLSAuNSkgKiAoY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG4gIHk6ICguNSAtIHkgLyBjYW52YXMuaGVpZ2h0KSAqIDIuNSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcGl4ZWxTaXplVG9TaGFwZVNjYWxlID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHBpeGVsczogbnVtYmVyKSA9PiBwaXhlbHMgLyBjYW52YXMuaGVpZ2h0ICogMi41O1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0b3JBdFBpeGVscyhhY3RvcjogTmVvblNoYXBlQWN0b3IsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBwaXhlbFNpemU6IG51bWJlciwgb3ZlcnJpZGVzOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiA9IHt9KTogTmVvblNoYXBlSW5zdGFuY2Uge1xuICBjb25zdCB3b3JsZCA9IHBpeGVsc1RvU2hhcGVXb3JsZChjYW52YXMsIHgsIHkpO1xuICBhY3Rvci5tb3ZlVG8od29ybGQueCwgd29ybGQueSk7XG4gIGFjdG9yLnNjYWxlID0gcGl4ZWxTaXplVG9TaGFwZVNjYWxlKGNhbnZhcywgcGl4ZWxTaXplKTtcbiAgcmV0dXJuIGFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyk7XG59XG5cbnR5cGUgVG9wRG93blNoYXBlT3ZlcnJpZGVzID0gUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gJiBQYXJ0aWFsPFBpY2s8TmVvblRvcERvd25TaGFwZSwgXCJ3aWR0aFwiIHwgXCJoZWlnaHRcIj4+O1xuXG5leHBvcnQgY29uc3QgYWN0b3JJblRvcERvd25TY2VuZSA9IChhY3RvcjogTmVvblNoYXBlQWN0b3IsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIG92ZXJyaWRlczogVG9wRG93blNoYXBlT3ZlcnJpZGVzID0ge30pOiBOZW9uVG9wRG93blNoYXBlID0+XG4gICh7IC4uLmFjdG9yLnJlbmRlckluc3RhbmNlKG92ZXJyaWRlcyksIHgsIHksIHNpemUgfSk7XG5cbmV4cG9ydCBjb25zdCBzaGFwZUxhYmVsID0gKHRleHQ6IHN0cmluZywgcG9zaXRpb246IE5lb25TaGFwZUxhYmVsW1wicG9zaXRpb25cIl0sIGZvbnRTaXplOiBudW1iZXIsIG9mZnNldCA9IDQpOiBOZW9uU2hhcGVMYWJlbCA9PlxuICAoeyB0ZXh0LCBwb3NpdGlvbiwgZm9udFNpemUsIG9mZnNldCwgZm9udEZhbWlseTogXCJTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLCBmb250V2VpZ2h0OiA3MDAgfSk7XG4iLCAiaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uL011bHRpcGxpZXJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcXVhZFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICByb3c6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFkTW9kZWwge1xuICBsYW5lOiAwIHwgMSA9IDA7XG4gIGNvdW50ID0gMTtcbiAgYWltT2Zmc2V0ID0gMDtcbiAgeCA9IDA7XG4gIHRhcmdldFggPSAwO1xuICBsYW5lU2hpZnRTdGFydGVkQXQgPSAwO1xuXG4gIGFkZChhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgdGhpcy5jb3VudCA9IE1hdGgubWluKHNwZWMubWF4U3F1YWRTaXplLCB0aGlzLmNvdW50ICsgYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHJlbW92ZShhbW91bnQgPSAxKTogbnVtYmVyIHtcbiAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoMCwgdGhpcy5jb3VudCAtIGFtb3VudCk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBzZXRMYW5lKGxhbmU6IDAgfCAxLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlciwgbm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobGFuZSAhPT0gdGhpcy5sYW5lKSB7XG4gICAgICB0aGlzLmxhbmVTaGlmdFN0YXJ0ZWRBdCA9IG5vdztcbiAgICAgIC8vIFJlc2V0IGFpbSBvZmZzZXQgc28gdGhlIHBsYXllciBzbmFwcyB0byB0aGUgY29ycmVjdCBjb2x1bW4gaW4gdGhlIG5ldyBsYW5lLlxuICAgICAgdGhpcy5haW1PZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLmxhbmUgPSBsYW5lO1xuICAgIHRoaXMudGFyZ2V0WCA9IGxhbmVDZW50ZXIobGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIGF1dG9BaW0odGFyZ2V0T2Zmc2V0OiBudW1iZXIsIGxhbmVXaWR0aDogbnVtYmVyLCBsYW5lQ2VudGVyOiAobGFuZTogMCB8IDEpID0+IG51bWJlcik6IHZvaWQge1xuICAgIC8vIEhpZ2ggbGVycCBmYWN0b3IgKDAuODUpIHNvIGF1dG8tYWltIHNuYXBzIGFsbW9zdCBpbnN0YW50YW5lb3VzbHkgZWFjaCBmcmFtZS5cbiAgICB0aGlzLmFpbU9mZnNldCArPSAoTWF0aC5tYXgoLWxhbmVXaWR0aCAqIC4yOCwgTWF0aC5taW4obGFuZVdpZHRoICogLjI4LCB0YXJnZXRPZmZzZXQpKSAtIHRoaXMuYWltT2Zmc2V0KSAqIC44NTtcbiAgICB0aGlzLnRhcmdldFggPSBsYW5lQ2VudGVyKHRoaXMubGFuZSkgKyB0aGlzLmFpbU9mZnNldDtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gMSAtIE1hdGgucG93KC4wMDAwOCwgZGVsdGFTZWNvbmRzKTtcbiAgICB0aGlzLnggKz0gKHRoaXMudGFyZ2V0WCAtIHRoaXMueCkgKiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKiBYIG9mZnNldHMgb2YgZWFjaCBjb2x1bW4gaW4gdGhlIGZyb250IHJvdywgcmVsYXRpdmUgdG8gc3F1YWQgY2VudGVyLiAqL1xuICBmcm9udFJvd0NvbHVtbk9mZnNldHMoc2NhbGU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBjb25zdCBzcGVjID0gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sIChfLCBjb2wpID0+XG4gICAgICAoY29sIC0gKHJvd0NvdW50IC0gMSkgLyAyKSAqIHNwZWMuc3BhY2luZyAqIHNjYWxlLFxuICAgICk7XG4gIH1cblxuICBwb2ludHMoYmFzZVk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFNxdWFkUG9pbnRbXSB7XG4gICAgY29uc3Qgc3BlYyA9IG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmU7XG4gICAgY29uc3QgcG9pbnRzOiBTcXVhZFBvaW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWluKHNwZWMubWVtYmVyc1BlclJvdywgdGhpcy5jb3VudCAtIHJvdyAqIHNwZWMubWVtYmVyc1BlclJvdyk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpbmRleCAlIHNwZWMubWVtYmVyc1BlclJvdztcbiAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgeDogdGhpcy54ICsgKGNvbHVtbiAtIChyb3dDb3VudCAtIDEpIC8gMikgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgeTogYmFzZVkgKyByb3cgKiBzcGVjLnNwYWNpbmcgKiBzY2FsZSxcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxufVxuIiwgImltcG9ydCB7XG4gIE5lb25TaGFwZUFjdG9yLFxuICBOZW9uU2hhcGVEaXNwb3NhbCxcbiAgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLFxuICBOZW9uVmljdG9yeUV4cGVyaWVuY2UsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIExhbmVSdW5uZXJTY2VuZUlkLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG4gIHR5cGUgTmVvblRvcERvd25TaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQge1xuICBjb21iYXRUdW5pbmcsXG4gIGd1bkZhbWlseSxcbiAgbXVsdGlwbGllckZhbWlseSxcbiAgb3JiRmFtaWx5LFxuICBwYXJzZVRyYWNrRGVmaW5pdGlvbixcbiAgc2hpZWxkRmFtaWx5LFxuICBzd29yZEZhbWlseSxcbiAgdHlwZSBHdW5JZCxcbiAgdHlwZSBNdWx0aXBsaWVySWQsXG4gIHR5cGUgT3JiSWQsXG4gIHR5cGUgUGFyc2VkVHJhY2tFbnRpdHksXG4gIHR5cGUgU2hpZWxkSWQsXG4gIHR5cGUgU3dvcmRJZCxcbiAgdHlwZSBTd29yZE1lbWJlcixcbiAgdHlwZSBTd29yZFRhcmdldGluZ01vZGUsXG4gIHR5cGUgVHJhY2tNZW1iZXIsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBzZWxlY3RBdXRvQWltT2Zmc2V0IH0gZnJvbSBcIi4uL2F1dG9BaW1cIjtcbmltcG9ydCB7IEd1blNpbXVsYXRpb24gfSBmcm9tIFwiLi4vY29tYmF0L2d1blNpbXVsYXRpb25cIjtcbmltcG9ydCB7IHF1ZXJ5TmVhcmJ5VGhyZWF0cyB9IGZyb20gXCIuLi9jb21iYXQvbmVhcmJ5VGhyZWF0UXVlcnlcIjtcbmltcG9ydCB7IHJlc29sdmVTaGllbGRDb250YWN0LCBTaGllbGRTdGF0ZSwgdGlja1NoaWVsZCB9IGZyb20gXCIuLi9jb21iYXQvc2hpZWxkRXZhbHVhdG9yXCI7XG5pbXBvcnQgeyBTd29yZFN0YXRlLCB0aWNrU3dvcmQgfSBmcm9tIFwiLi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVFbmVteUFjdG9yLCBkZWZlYXRFbmVteSwgZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQsIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcywgcmVzb2x2ZUVuZW15RGFtYWdlIH0gZnJvbSBcIi4uL2VuZW15Q2F0YWxvZ1wiO1xuaW1wb3J0IHsgZW5lbXlFeGl0Q2xvdWQsIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHMsIHR5cGUgQWN0aXZlRW5lbXlFeGl0RWZmZWN0LCB0eXBlIEVuZW15VmlzdWFsVHlwZSB9IGZyb20gXCIuLi9lbmVteUV4aXRWaXN1YWxzXCI7XG5pbXBvcnQgeyBzaGllbGRQaWNrdXBWaXN1YWwsIHNoaWVsZFZpc3VhbHMsIHN3b3JkUGlja3VwVmlzdWFsLCBzd29yZFZpc3VhbER1cmF0aW9uTXMsIHN3b3JkVmlzdWFscyB9IGZyb20gXCIuLi9mYW1pbHlWaXN1YWxzXCI7XG5pbXBvcnQgdHlwZSB7IFN3b3JkVmlzdWFsVHVuaW5nIH0gZnJvbSBcIi4uL2ZhbWlseVZpc3VhbHNcIjtcbmltcG9ydCB7IGJpbGxib2FyZE9yaWVudGF0aW9uLCBlbmVteU9yaWVudGF0aW9uLCBoZWxpY29wdGVyVmlld3BvcnRGb3IsIHBsYXllck9yaWVudGF0aW9uIH0gZnJvbSBcIi4uL3JlbmRlck9yaWVudGF0aW9uXCI7XG5pbXBvcnQgeyBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQsIGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXMgfSBmcm9tIFwiLi4vc2NlbmVFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgYWN0b3JJblRvcERvd25TY2VuZSwgc2hhcGVMYWJlbCwgc3dhcm1TaGFwZXMgfSBmcm9tIFwiLi4vc2hhcGVWaXN1YWxzXCI7XG5pbXBvcnQgeyBTcXVhZE1vZGVsIH0gZnJvbSBcIi4uL3NxdWFkXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICBsYW5lUnVubmVyQ2FtZXJhRm9jdXNYLFxuICBsYW5lUnVubmVyVmlld3BvcnQsXG4gIHByb2plY3RIZWxpY29wdGVyU2NlbmUsXG4gIHByb2plY3RIZWxpY29wdGVyUG9pbnQsXG4gIHVucHJvamVjdEhlbGljb3B0ZXJTY3JlZW5Qb2ludCxcbiAgdHlwZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG59IGZyb20gXCIuLi92aWV3cG9ydFwiO1xuXG50eXBlIExhbmUgPSAwIHwgMTtcblxuZXhwb3J0IHR5cGUgTmVvblN3YXJtU2ltdWxhdGlvbk1vZGUgPSBcImdhbWVcIiB8IFwibGFiXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblN3YXJtU291bmQge1xuICBwbGF5KGlkOiBzdHJpbmcpOiB2b2lkO1xuICBwbGF5Um90YXRlZD8oaWQ6IHN0cmluZywgYWx0ZXJuYXRpdmVzOiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Td2FybVNpbXVsYXRpb25PcHRpb25zIHtcbiAgbW9kZTogTmVvblN3YXJtU2ltdWxhdGlvbk1vZGU7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHN0YWdlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGNhbWVyYVNldHRpbmdzPzogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzO1xuICBzb3VuZD86IE5lb25Td2FybVNvdW5kO1xuICBzY2VuZUlkPzogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIG9uUnVuU3RhdHVzPzogKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkZpbmlzaD86IChyZXN1bHQ6IE5lb25Td2FybUZpbmlzaFJlc3VsdCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU3dhcm1GaW5pc2hSZXN1bHQge1xuICB3b246IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRldGFpbDogc3RyaW5nO1xuICBicmVhY2hlczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25Td2FybVNuYXBzaG90IHtcbiAgbW9kZTogTmVvblN3YXJtU2ltdWxhdGlvbk1vZGU7XG4gIGFjdGl2ZVRyYWNrOiBib29sZWFuO1xuICBjb21iYXROb3c6IG51bWJlcjtcbiAgY29tYmF0RWxhcHNlZDogbnVtYmVyO1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgc3F1YWQ6IHtcbiAgICBsYW5lOiBMYW5lO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHRhcmdldFg6IG51bWJlcjtcbiAgICBhaW1PZmZzZXQ6IG51bWJlcjtcbiAgfTtcbiAgYWN0aXZlOiB7XG4gICAgZ3VuOiB7IGlkOiBHdW5JZDsgbGV2ZWw6IG51bWJlciB9IHwgbnVsbDtcbiAgICBzaGllbGQ6IFNoaWVsZElkIHwgbnVsbDtcbiAgICBzd29yZDogeyBpZDogU3dvcmRJZDsgbGV2ZWw6IG51bWJlciB9IHwgbnVsbDtcbiAgfTtcbiAgZW5lbWllczogQXJyYXk8eyBpZDogbnVtYmVyOyBlbmVteUlkOiBPcmJJZDsgbGFuZTogTGFuZTsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGhlYWx0aDogbnVtYmVyOyBtYXhIZWFsdGg6IG51bWJlcjsgZHlpbmc6IGJvb2xlYW4gfT47XG4gIHBpY2t1cHM6IHtcbiAgICBndW5zOiBudW1iZXI7XG4gICAgc2hpZWxkczogbnVtYmVyO1xuICAgIHN3b3JkczogbnVtYmVyO1xuICAgIG11bHRpcGxpZXJzOiBudW1iZXI7XG4gIH07XG4gIGtpbGxzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICBlbmVteUlkOiBPcmJJZDtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBtYXhIZWFsdGg6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG4gIHJvd0lkOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEd1blBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBndW5JZDogR3VuSWQ7XG4gIGxldmVsOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xuICBhY3RvcjogTmVvblNoYXBlQWN0b3I7XG59XG5cbmludGVyZmFjZSBTaGllbGRQaWNrdXAge1xuICBsYW5lOiBMYW5lO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2hpZWxkSWQ6IFNoaWVsZElkO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFN3b3JkUGlja3VwIHtcbiAgbGFuZTogTGFuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHN3b3JkSWQ6IFN3b3JkSWQ7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTXVsdGlwbGllclBpY2t1cCB7XG4gIGxhbmU6IExhbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBtdWx0aXBsaWVySWQ6IE11bHRpcGxpZXJJZDtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3Rvcjtcbn1cblxuaW50ZXJmYWNlIFBlbmRpbmdTd29yZERhbWFnZSB7XG4gIGhpdHM6IEFycmF5PHsgZW5lbXlJZDogbnVtYmVyOyBkdWVBdDogbnVtYmVyIH0+O1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgaW1wYWN0U291bmRJZDogc3RyaW5nO1xufVxuXG5jb25zdCBndW5GaXJlU291bmRJZHM6IFJlY29yZDxHdW5JZCwgc3RyaW5nPiA9IHtcbiAgcHVsc2VQaXN0b2w6IFwiUHJpbWFyeVwiLFxuICBuZWVkbGVyU21nOiBcIk5lZWRsZXJGaXJlXCIsXG4gIGJ1cnN0Q2FyYmluZTogXCJCdXJzdENhcmJpbmVGaXJlXCIsXG4gIGhlYXZ5Q2Fubm9uOiBcIkhlYXZ5Q2Fubm9uRmlyZVwiLFxuICBzcGxpdHRlclJpZmxlOiBcIlNwbGl0dGVyUmlmbGVGaXJlXCIsXG59O1xuXG5jb25zdCBzd29yZEltcGFjdFNvdW5kSWRzOiBSZWNvcmQ8U3dvcmRJZCwgc3RyaW5nPiA9IHtcbiAgYXJjQmxhZGU6IFwiU3dvcmRBcmNJbXBhY3RcIixcbiAgY2xlYXZlcjogXCJTd29yZENsZWF2ZXJJbXBhY3RcIixcbn07XG5cbmNvbnN0IHNvdW5kQWx0ZXJuYXRpdmVDb3VudHM6IFBhcnRpYWw8UmVjb3JkPHN0cmluZywgbnVtYmVyPj4gPSB7XG4gIFByaW1hcnk6IDMsXG4gIEVuZW15RGVzdHJveWVkOiAyLFxuICBFbmVteUhpdDogMixcbiAgRW5lbXlTcGF3bjogMixcbiAgQm9zczogMSxcbiAgUHJvamVjdGlsZUhpdDogMixcbn07XG5jb25zdCBtYXhUcmFja1NwYXduTGVhZFNlY29uZHMgPSAxODtcbmNvbnN0IGZpcnN0VHJhY2tSb3dBcnJpdmFsU2Vjb25kcyA9IDIgKiBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyO1xuY29uc3QgdHJhY2tSb3dUcmF2ZWxTZWNvbmRzID0gLjM3NSAqIGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXI7XG5cbmV4cG9ydCBjbGFzcyBOZW9uU3dhcm1TaW11bGF0aW9uIHtcbiAgcmVhZG9ubHkgbW9kZTogTmVvblN3YXJtU2ltdWxhdGlvbk1vZGU7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IHN0YWdlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3M7XG4gIHJlYWRvbmx5IHNxdWFkID0gbmV3IFNxdWFkTW9kZWwoKTtcblxuICBwcml2YXRlIHJlbmRlcmVyOiBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXI7XG4gIHByaXZhdGUgc291bmQ/OiBOZW9uU3dhcm1Tb3VuZDtcbiAgcHJpdmF0ZSBvblJ1blN0YXR1cz86IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvbkZpbmlzaD86IChyZXN1bHQ6IE5lb25Td2FybUZpbmlzaFJlc3VsdCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZSA9IDA7XG4gIHByaXZhdGUgYWN0aXZlVHJhY2s6IFRyYWNrTWVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdHJhY2tTY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgcHJpdmF0ZSBsYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgcHJpdmF0ZSBjb21iYXRFbGFwc2VkID0gMDtcbiAgcHJpdmF0ZSBjb21iYXROb3cgPSAwO1xuICBwcml2YXRlIHBsYXllckxhbmU6IExhbmUgPSAwO1xuICBwcml2YXRlIGNvb2xkb3duID0gMDtcbiAgcHJpdmF0ZSBlbnRpdHlJZENvdW50ZXIgPSAwO1xuICBwcml2YXRlIHRyYWNrRW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcbiAgcHJpdmF0ZSBuZXh0VHJhY2tFbnRpdHkgPSAwO1xuICBwcml2YXRlIGJyZWFjaGVzID0gMDtcbiAgcHJpdmF0ZSBraWxscyA9IDA7XG4gIHByaXZhdGUgZW5lbWllczogRW5lbXlbXSA9IFtdO1xuICBwcml2YXRlIGd1blNpbXVsYXRpb24gPSBuZXcgR3VuU2ltdWxhdGlvbigpO1xuICBwcml2YXRlIGd1blBpY2t1cHM6IEd1blBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgc2hpZWxkUGlja3VwczogU2hpZWxkUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBzd29yZFBpY2t1cHM6IFN3b3JkUGlja3VwW10gPSBbXTtcbiAgcHJpdmF0ZSBtdWx0aXBsaWVyczogTXVsdGlwbGllclBpY2t1cFtdID0gW107XG4gIHByaXZhdGUgZW5lbXlFeGl0RWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSB2aWN0b3J5OiBOZW9uVmljdG9yeUV4cGVyaWVuY2UgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzd29yZFZpc3VhbFR1bmluZzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz4gPSB7fTtcbiAgcHJpdmF0ZSBwZW5kaW5nU3dvcmREYW1hZ2U6IFBlbmRpbmdTd29yZERhbWFnZSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGZhaWx1cmVSZWFzb24gPSBcIlwiO1xuICBwcml2YXRlIHBsYXllckFjdG9yczogTmVvblNoYXBlQWN0b3JbXSA9IFtdO1xuICBwcml2YXRlIGV4cGxvZGluZ1BsYXllcnM6IEFycmF5PHsgYWN0b3I6IE5lb25TaGFwZUFjdG9yOyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiA9IFtdO1xuICBwcml2YXRlIHNpbXVsYXRpb25TcGVlZCA9IDE7XG4gIHByaXZhdGUgYWN0aXZlQnlGYW1pbHk6IHtcbiAgICBndW46IHsgaWQ6IEd1bklkOyBsZXZlbDogbnVtYmVyIH0gfCBudWxsO1xuICAgIHNoaWVsZDogU2hpZWxkU3RhdGUgfCBudWxsO1xuICAgIHN3b3JkOiBTd29yZFN0YXRlIHwgbnVsbDtcbiAgfSA9IHtcbiAgICBndW46IG51bGwsXG4gICAgc2hpZWxkOiBudWxsLFxuICAgIHN3b3JkOiBudWxsLFxuICB9O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocmVuZGVyZXI6IE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciwgb3B0aW9uczogTmVvblN3YXJtU2ltdWxhdGlvbk9wdGlvbnMpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlO1xuICAgIHRoaXMuY2FudmFzID0gb3B0aW9ucy5jYW52YXM7XG4gICAgdGhpcy5zdGFnZUVsZW1lbnQgPSBvcHRpb25zLnN0YWdlRWxlbWVudDtcbiAgICB0aGlzLmNhbWVyYVNldHRpbmdzID0gb3B0aW9ucy5jYW1lcmFTZXR0aW5ncyA/PyB7IC4uLmRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgfTtcbiAgICB0aGlzLnNvdW5kID0gb3B0aW9ucy5zb3VuZDtcbiAgICB0aGlzLm9uUnVuU3RhdHVzID0gb3B0aW9ucy5vblJ1blN0YXR1cztcbiAgICB0aGlzLm9uRmluaXNoID0gb3B0aW9ucy5vbkZpbmlzaDtcbiAgICB0aGlzLnRyYWNrU2NlbmVJZCA9IG9wdGlvbnMuc2NlbmVJZCA/PyBcIm5lb25IYWxsXCI7XG4gICAgdGhpcy5hcHBseVNjZW5lQmFja2dyb3VuZCgpO1xuICAgIHRoaXMucmVzZXQoeyBzaWxlbnQ6IHRydWUgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IE5lb25Td2FybVNpbXVsYXRpb25PcHRpb25zKTogUHJvbWlzZTxOZW9uU3dhcm1TaW11bGF0aW9uPiB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBhd2FpdCBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIuY3JlYXRlKG9wdGlvbnMuY2FudmFzLCBsYW5lUnVubmVyVmlld3BvcnQubG9naWNhbFdpZHRoLCBsYW5lUnVubmVyVmlld3BvcnQubG9naWNhbEhlaWdodCk7XG4gICAgcmV0dXJuIG5ldyBOZW9uU3dhcm1TaW11bGF0aW9uKHJlbmRlcmVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldCBub3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb21iYXROb3c7XG4gIH1cblxuICBnZXQgYWN0aXZlVHJhY2tSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRyYWNrICE9PSBudWxsO1xuICB9XG5cbiAgbGFuZVgobGFuZTogTGFuZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoICogKGxhbmUgPT09IDAgPyAuMzIgOiAuNjgpO1xuICB9XG5cbiAgcGxheWVyWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuODI7XG4gIH1cblxuICBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmVzZXQob3B0aW9uczogeyBzaWxlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVHJhY2sgPSBudWxsO1xuICAgIHRoaXMubGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkID0gMDtcbiAgICB0aGlzLmNvbWJhdE5vdyA9IDA7XG4gICAgdGhpcy5jb29sZG93biA9IDA7XG4gICAgdGhpcy5uZXh0VHJhY2tFbnRpdHkgPSAwO1xuICAgIHRoaXMudHJhY2tFbnRpdGllcyA9IFtdO1xuICAgIHRoaXMuYnJlYWNoZXMgPSAwO1xuICAgIHRoaXMua2lsbHMgPSAwO1xuICAgIHRoaXMuY2xlYXJTdGFnZSgpO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG51bGw7XG4gICAgdGhpcy5zcXVhZC5jb3VudCA9IDE7XG4gICAgdGhpcy5zcXVhZC5haW1PZmZzZXQgPSAwO1xuICAgIHRoaXMuc3F1YWQubGFuZSA9IDA7XG4gICAgdGhpcy5zcXVhZC54ID0gdGhpcy5sYW5lWCgwKTtcbiAgICB0aGlzLnNxdWFkLnRhcmdldFggPSB0aGlzLmxhbmVYKDApO1xuICAgIHRoaXMucGxheWVyTGFuZSA9IDA7XG4gICAgdGhpcy5wbGF5ZXJBY3RvcnMgPSBbbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KV07XG4gICAgdGhpcy5mYWlsdXJlUmVhc29uID0gXCJcIjtcbiAgICB0aGlzLnZpY3RvcnkgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlID0gbnVsbDtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLnBsYXkoXCJNZW51T3BlblwiKTtcbiAgfVxuXG4gIGNsZWFyU3RhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgdGhpcy5ndW5TaW11bGF0aW9uLmNsZWFyKCk7XG4gICAgdGhpcy5ndW5QaWNrdXBzID0gW107XG4gICAgdGhpcy5zaGllbGRQaWNrdXBzID0gW107XG4gICAgdGhpcy5zd29yZFBpY2t1cHMgPSBbXTtcbiAgICB0aGlzLm11bHRpcGxpZXJzID0gW107XG4gICAgdGhpcy5lbmVteUV4aXRFZmZlY3RzID0gW107XG4gICAgdGhpcy5leHBsb2RpbmdQbGF5ZXJzID0gW107XG4gICAgdGhpcy52aWN0b3J5ID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmdTd29yZERhbWFnZSA9IG51bGw7XG4gIH1cblxuICBzdGFydFRyYWNrKHRyYWNrOiBUcmFja01lbWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVHJhY2sgPSB0cmFjaztcbiAgICB0aGlzLnRyYWNrU2NlbmVJZCA9IHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQ7XG4gICAgdGhpcy5hcHBseVNjZW5lQmFja2dyb3VuZCgpO1xuICAgIHRoaXMubGFzdEZyYW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5jb21iYXRFbGFwc2VkID0gMDtcbiAgICB0aGlzLmNvbWJhdE5vdyA9IDA7XG4gICAgY29uc3QgYWxsRW50aXRpZXMgPSBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICBjb25zdCBwbGF5ZXJTdGFydCA9IGFsbEVudGl0aWVzLmZpbmQoZW50aXR5ID0+IGVudGl0eS5pZCA9PT0gXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgY29uc3Qgc3RhcnRMYW5lOiBMYW5lID0gcGxheWVyU3RhcnQ/LnNpZGUgPT09IFwicmlnaHRcIiA/IDEgOiAwO1xuICAgIHRoaXMucGxheWVyTGFuZSA9IHN0YXJ0TGFuZTtcbiAgICB0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1biA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBudWxsO1xuICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgIHRoaXMubmV4dFRyYWNrRW50aXR5ID0gMDtcbiAgICB0aGlzLnRyYWNrRW50aXRpZXMgPSBhbGxFbnRpdGllcy5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS5pZCAhPT0gXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgdGhpcy5icmVhY2hlcyA9IDA7XG4gICAgdGhpcy5jbGVhclN0YWdlKCk7XG4gICAgdGhpcy5zcXVhZC5jb3VudCA9IDE7XG4gICAgdGhpcy5wbGF5ZXJBY3RvcnMgPSBbbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KV07XG4gICAgdGhpcy5zcXVhZC5haW1PZmZzZXQgPSAwO1xuICAgIHRoaXMuc3F1YWQubGFuZSA9IHN0YXJ0TGFuZTtcbiAgICB0aGlzLnNxdWFkLnggPSB0aGlzLmxhbmVYKHN0YXJ0TGFuZSk7XG4gICAgdGhpcy5zcXVhZC50YXJnZXRYID0gdGhpcy5sYW5lWChzdGFydExhbmUpO1xuICAgIHRoaXMucGxheShcIlRyYWNrU3RhcnRcIik7XG4gIH1cblxuICBzZXRTY2VuZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHZvaWQge1xuICAgIHRoaXMudHJhY2tTY2VuZUlkID0gc2NlbmVJZDtcbiAgICB0aGlzLmFwcGx5U2NlbmVCYWNrZ3JvdW5kKCk7XG4gIH1cblxuICBzZXRTcXVhZExhbmUobGFuZTogTGFuZSwgb3B0aW9uczogeyByZXF1aXJlQWN0aXZlVHJhY2s/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLnJlcXVpcmVBY3RpdmVUcmFjayAmJiAhdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIGlmIChsYW5lICE9PSB0aGlzLnNxdWFkLmxhbmUpIHRoaXMucGxheShcIkxhbmVTd2l0Y2hcIik7XG4gICAgdGhpcy5zcXVhZC5zZXRMYW5lKGxhbmUsIHZhbHVlID0+IHRoaXMubGFuZVgodmFsdWUpLCB0aGlzLmNvbWJhdE5vdyk7XG4gICAgdGhpcy5wbGF5ZXJMYW5lID0gbGFuZTtcbiAgfVxuXG4gIGVxdWlwR3VuKGd1bklkOiBHdW5JZCwgbGV2ZWwgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSB7IGlkOiBndW5JZCwgbGV2ZWwgfTtcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcbiAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBHdW5cIik7XG4gICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gIH1cblxuICBlcXVpcFNoaWVsZChzaGllbGRJZDogU2hpZWxkSWQpOiB2b2lkIHtcbiAgICBjb25zdCBkZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tzaGllbGRJZF07XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBuZXcgU2hpZWxkU3RhdGUoc2hpZWxkSWQsIGRlZi5tYXhDaGFyZ2VzKTtcbiAgICB0aGlzLnBsYXlQaWNrdXAoXCJQaWNrdXBTaGllbGRcIik7XG4gICAgdGhpcy5wbGF5KFwiU2hpZWxkXCIpO1xuICB9XG5cbiAgZXF1aXBTd29yZChzd29yZElkOiBTd29yZElkKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQ7XG4gICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA9IG5ldyBTd29yZFN0YXRlKHN3b3JkSWQsIGN1cnJlbnQ/LnN3b3JkSWQgPT09IHN3b3JkSWQgPyBjdXJyZW50LmxldmVsICsgMSA6IDEpO1xuICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFN3b3JkXCIpO1xuICAgIHRoaXMucGxheShcIldlYXBvblJlYWR5XCIpO1xuICB9XG5cbiAgc2V0U3dvcmRWaXN1YWxUdW5pbmcodHVuaW5nOiBQYXJ0aWFsPFN3b3JkVmlzdWFsVHVuaW5nPik6IHZvaWQge1xuICAgIHRoaXMuc3dvcmRWaXN1YWxUdW5pbmcgPSB7IC4uLnR1bmluZyB9O1xuICB9XG5cbiAgc2V0U2ltdWxhdGlvblNwZWVkKHNwZWVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNpbXVsYXRpb25TcGVlZCA9IE51bWJlci5pc0Zpbml0ZShzcGVlZCkgPyBNYXRoLm1heCguMDUsIE1hdGgubWluKDIsIHNwZWVkKSkgOiAxO1xuICB9XG5cbiAgYWRkU3F1YWRNZW1iZXJzKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zcXVhZC5hZGQoYW1vdW50KTtcbiAgICB0aGlzLnN5bmNQbGF5ZXJBY3RvcnMoKTtcbiAgfVxuXG4gIHNwYXduRW5lbXkob3B0aW9uczogeyBlbmVteUlkOiBPcmJJZDsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgaGVhbHRoPzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXI7IHJvd0lkPzogbnVtYmVyOyBwbGF5U291bmQ/OiBib29sZWFuOyBjb2xvcj86IHN0cmluZyB9KTogbnVtYmVyIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbb3B0aW9ucy5lbmVteUlkXTtcbiAgICBjb25zdCBoZWFsdGggPSBvcHRpb25zLmhlYWx0aCA/PyBkZWZpbml0aW9uLmhlYWx0aDtcbiAgICBjb25zdCBpZCA9ICsrdGhpcy5lbnRpdHlJZENvdW50ZXI7XG4gICAgY29uc3QgYWN0b3IgPSBjcmVhdGVFbmVteUFjdG9yKG9wdGlvbnMuZW5lbXlJZCk7XG4gICAgaWYgKG9wdGlvbnMuY29sb3IpIGFjdG9yLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmVuZW1pZXMucHVzaCh7XG4gICAgICBpZCxcbiAgICAgIGVuZW15VHlwZTogb3B0aW9ucy5lbmVteUlkLFxuICAgICAgZW5lbXlJZDogb3B0aW9ucy5lbmVteUlkLFxuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMDUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBoZWFsdGgsXG4gICAgICBtYXhIZWFsdGg6IGhlYWx0aCxcbiAgICAgIHNwZWVkTXVsdGlwbGllcjogb3B0aW9ucy5zcGVlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgIHJvd0lkOiBvcHRpb25zLnJvd0lkID8/IGlkLFxuICAgICAgYWN0b3IsXG4gICAgICBkeWluZzogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMucGxheVNvdW5kICE9PSBmYWxzZSAmJiBkZWZpbml0aW9uLnNwYXduU291bmQpIHRoaXMucGxheShkZWZpbml0aW9uLnNwYXduU291bmQpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIGRlZmVhdEVuZW15QnlJZChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZW5lbXkgPSB0aGlzLmVuZW1pZXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICBpZiAoZW5lbXkgJiYgIWVuZW15LmR5aW5nKSB0aGlzLmRlc3Ryb3lFbmVteShlbmVteSk7XG4gIH1cblxuICBzcGF3bkd1blBpY2t1cChvcHRpb25zOiB7IGd1bklkOiBHdW5JZDsgbGFuZTogTGFuZTsgbGV2ZWw/OiBudW1iZXI7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwZWVkTXVsdGlwbGllcj86IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy5ndW5QaWNrdXBzLnB1c2goe1xuICAgICAgbGFuZTogb3B0aW9ucy5sYW5lLFxuICAgICAgeDogb3B0aW9ucy54ID8/IHRoaXMubGFuZVgob3B0aW9ucy5sYW5lKSxcbiAgICAgIHk6IG9wdGlvbnMueSA/PyAxMzUgKiB0aGlzLnNjYWxlKCksXG4gICAgICBndW5JZDogb3B0aW9ucy5ndW5JZCxcbiAgICAgIGxldmVsOiBvcHRpb25zLmxldmVsID8/IDEsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICBhY3RvcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLmd1blBpY2t1cCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHNwYXduU2hpZWxkUGlja3VwKG9wdGlvbnM6IHsgc2hpZWxkSWQ6IFNoaWVsZElkOyBsYW5lOiBMYW5lOyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBzcGVlZE11bHRpcGxpZXI/OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMuc2hpZWxkUGlja3Vwcy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgc2hpZWxkSWQ6IG9wdGlvbnMuc2hpZWxkSWQsXG4gICAgICBzcGVlZE11bHRpcGxpZXI6IG9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgfSk7XG4gIH1cblxuICBzcGF3blN3b3JkUGlja3VwKG9wdGlvbnM6IHsgc3dvcmRJZDogU3dvcmRJZDsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnN3b3JkUGlja3Vwcy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgc3dvcmRJZDogb3B0aW9ucy5zd29yZElkLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgIH0pO1xuICB9XG5cbiAgc3Bhd25NdWx0aXBsaWVyUGlja3VwKG9wdGlvbnM6IHsgbGFuZTogTGFuZTsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BlZWRNdWx0aXBsaWVyPzogbnVtYmVyOyBtdWx0aXBsaWVySWQ/OiBNdWx0aXBsaWVySWQgfSk6IHZvaWQge1xuICAgIGNvbnN0IG11bHRpcGxpZXJJZCA9IG9wdGlvbnMubXVsdGlwbGllcklkID8/IFwic3F1YWRQbHVzT25lXCI7XG4gICAgdGhpcy5tdWx0aXBsaWVycy5wdXNoKHtcbiAgICAgIGxhbmU6IG9wdGlvbnMubGFuZSxcbiAgICAgIHg6IG9wdGlvbnMueCA/PyB0aGlzLmxhbmVYKG9wdGlvbnMubGFuZSksXG4gICAgICB5OiBvcHRpb25zLnkgPz8gMTM1ICogdGhpcy5zY2FsZSgpLFxuICAgICAgbXVsdGlwbGllcklkLFxuICAgICAgc3BlZWRNdWx0aXBsaWVyOiBvcHRpb25zLnNwZWVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgYWN0b3I6IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5tdWx0aXBsaWVyIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhcnRMb29wKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcExvb3AoKTtcbiAgICBjb25zdCBmcmFtZSA9IChub3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgdGhpcy50aWNrKG5vdyk7XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNvbWJhdE5vdyk7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICB9O1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgc3RvcExvb3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWUpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xuICB9XG5cbiAgdGljayhmcmFtZU5vdzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcmF3RGVsdGEgPSBNYXRoLm1pbiguMDUsIChmcmFtZU5vdyAtIHRoaXMubGFzdEZyYW1lKSAvIDEwMDApO1xuICAgIHRoaXMubGFzdEZyYW1lID0gZnJhbWVOb3c7XG4gICAgY29uc3QgZGVsdGEgPSByYXdEZWx0YSAqIGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNpbXVsYXRpb25TcGVlZDtcbiAgICB0aGlzLmNvbWJhdEVsYXBzZWQgKz0gZGVsdGE7XG4gICAgdGhpcy5jb21iYXROb3cgPSB0aGlzLmNvbWJhdEVsYXBzZWQgKiAxMDAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBbLi4udGhpcy5leHBsb2RpbmdQbGF5ZXJzXSkge1xuICAgICAgaXRlbS5hY3Rvci51cGRhdGUoZGVsdGEpO1xuICAgICAgaWYgKGl0ZW0uYWN0b3IuZGlzcG9zZWQpIHRoaXMuZXhwbG9kaW5nUGxheWVycy5zcGxpY2UodGhpcy5leHBsb2RpbmdQbGF5ZXJzLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICB1cGRhdGVFbmVteUV4aXRFZmZlY3RzKHRoaXMuZW5lbXlFeGl0RWZmZWN0cywgZGVsdGEpO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gXCJnYW1lXCIgJiYgIXRoaXMuYWN0aXZlVHJhY2spIHJldHVybjtcbiAgICBpZiAodGhpcy5hY3RpdmVUcmFjaykgdGhpcy5zcGF3blRyYWNrRW50aXRpZXMoKTtcblxuICAgIGNvbnN0IGd1blN0YXR1cyA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuID8gZ3VuRmFtaWx5Lm1lbWJlcnNbdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4uaWRdLmxhYmVsIDogXCJObyB3ZWFwb25cIjtcbiAgICBjb25zdCBzaGllbGREZWYgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZCA/IHNoaWVsZEZhbWlseS5tZW1iZXJzW3RoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkLnNoaWVsZElkXSA6IG51bGw7XG4gICAgY29uc3Qgc3dvcmREZWYgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkID8gc3dvcmRGYW1pbHkubWVtYmVyc1t0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkLnN3b3JkSWRdIDogbnVsbDtcbiAgICBpZiAodGhpcy5hY3RpdmVUcmFjaykge1xuICAgICAgdGhpcy5vblJ1blN0YXR1cz8uKGAke2d1blN0YXR1c30ke3NoaWVsZERlZiA/IGAgXHUwMEI3ICR7c2hpZWxkRGVmLmxhYmVsfWAgOiBcIlwifSR7c3dvcmREZWYgPyBgIFx1MDBCNyAke3N3b3JkRGVmLmxhYmVsfWAgOiBcIlwifWApO1xuICAgIH1cblxuICAgIGNvbnN0IGxhbmVFbmVtaWVzID0gdGhpcy5lbmVtaWVzLmZpbHRlcihlbmVteSA9PiBlbmVteS5sYW5lID09PSB0aGlzLnNxdWFkLmxhbmUgJiYgIWVuZW15LmR5aW5nKTtcbiAgICBjb25zdCBjb2xPZmZzZXRzID0gdGhpcy5zcXVhZC5mcm9udFJvd0NvbHVtbk9mZnNldHModGhpcy5zY2FsZSgpKTtcbiAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RBdXRvQWltT2Zmc2V0KGxhbmVFbmVtaWVzLCB0aGlzLmxhbmVYKHRoaXMuc3F1YWQubGFuZSksIGNvbE9mZnNldHMsIHRoaXMuc3F1YWQuYWltT2Zmc2V0KTtcbiAgICB0aGlzLnNxdWFkLmF1dG9BaW0ob2Zmc2V0LCB0aGlzLmNhbnZhcy53aWR0aCAqIC4yMiwgbGFuZSA9PiB0aGlzLmxhbmVYKGxhbmUpKTtcbiAgICB0aGlzLnNxdWFkLnVwZGF0ZShkZWx0YSk7XG4gICAgdGhpcy5zdGFnZUVsZW1lbnQuZGF0YXNldC5zcXVhZExhbmUgPSBTdHJpbmcodGhpcy5zcXVhZC5sYW5lKTtcbiAgICB0aGlzLnN5bmNQbGF5ZXJBY3RvcnMoKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bikge1xuICAgICAgdGhpcy5jb29sZG93biAtPSBkZWx0YTtcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duIDw9IDApIHRoaXMuZmlyZSgpO1xuICAgICAgaWYgKHRoaXMuZ3VuU2ltdWxhdGlvbi51cGRhdGVGaXJpbmcodGhpcy5jb21iYXROb3cpID4gMCkgdGhpcy5wbGF5R3VuRmlyZSh0aGlzLmFjdGl2ZUJ5RmFtaWx5Lmd1bi5pZCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aWxlcyhkZWx0YSk7XG4gICAgdGhpcy51cGRhdGVOZWFyUGxheWVyRWZmZWN0cyhkZWx0YSwgc2hpZWxkRGVmLCBzd29yZERlZik7XG4gICAgdGhpcy51cGRhdGVFbmVtaWVzKGRlbHRhLCBzaGllbGREZWYpO1xuICAgIHRoaXMudXBkYXRlUGlja3VwcyhkZWx0YSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVUcmFjayAmJiB0aGlzLnRyYWNrUmVzb2x2ZWQoKSkgdGhpcy5maW5pc2godGhpcy5icmVhY2hlcyA9PT0gMCk7XG4gIH1cblxuICByZW5kZXIobm93ID0gdGhpcy5jb21iYXROb3cpOiB2b2lkIHtcbiAgICBjb25zdCBwcmltaXRpdmVzID0gbGFuZVJ1bm5lclNjZW5lUHJpbWl0aXZlcyh0aGlzLnRyYWNrU2NlbmVJZCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgbm93KTtcbiAgICBjb25zdCBzID0gdGhpcy5zY2FsZSgpO1xuICAgIGNvbnN0IHBsYXllclBvaW50cyA9IHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCBzKTtcbiAgICBjb25zdCBoZWxpY29wdGVyVmlld3BvcnQgPSBoZWxpY29wdGVyVmlld3BvcnRGb3IodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5wbGF5ZXJZKCksIGxhbmVSdW5uZXJDYW1lcmFGb2N1c1godGhpcy5jYW52YXMud2lkdGgsIHRoaXMuc3F1YWQueCkpO1xuXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBwbGF5ZXJQb2ludHMpIHtcbiAgICAgIGNvbnN0IHNtZWFyID0gTWF0aC5taW4oMjIgKiBzLCBNYXRoLmFicyh0aGlzLnNxdWFkLnRhcmdldFggLSB0aGlzLnNxdWFkLngpICogLjQ1KTtcbiAgICAgIGlmIChzbWVhciA+IDIpIHtcbiAgICAgICAgcHJpbWl0aXZlcy5wdXNoKHtcbiAgICAgICAgICB4OiBwb2ludC54IC0gTWF0aC5zaWduKHRoaXMuc3F1YWQudGFyZ2V0WCAtIHRoaXMuc3F1YWQueCkgKiBzbWVhciAqIC41LFxuICAgICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgICAgd2lkdGg6IHNtZWFyLFxuICAgICAgICAgIGhlaWdodDogMi4yICogcyxcbiAgICAgICAgICBjb2xvcjogbmVvblBhbGV0dGUuZGVlcEJsdWUsXG4gICAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLmN5YW4sXG4gICAgICAgICAgZ2xvdzogLjQ1LFxuICAgICAgICAgIGludGVuc2l0eTogLjUsXG4gICAgICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmltaXRpdmVzLnB1c2goLi4udGhpcy5ndW5TaW11bGF0aW9uLnByb2plY3RpbGVQcmltaXRpdmVzKCkpO1xuICAgIGlmICh0aGlzLnZpY3RvcnkpIHByaW1pdGl2ZXMucHVzaCguLi50aGlzLnZpY3RvcnkucHJpbWl0aXZlcyhub3cpKTtcblxuICAgIGNvbnN0IHNoYXBlSW5zdGFuY2VzOiBOZW9uVG9wRG93blNoYXBlW10gPSBbXTtcbiAgICBpZiAodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQpIHtcbiAgICAgIGNvbnN0IGxpdmVTaGllbGQgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZDtcbiAgICAgIGNvbnN0IGxpdmVEZWYgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tsaXZlU2hpZWxkLnNoaWVsZElkXTtcbiAgICAgIGNvbnN0IHNjZW5lID0gc2hpZWxkVmlzdWFscyh7XG4gICAgICAgIGRlZmluaXRpb246IGxpdmVEZWYsXG4gICAgICAgIHN0cmVuZ3RoOiBsaXZlU2hpZWxkLmNoYXJnZXMsXG4gICAgICAgIGluaXRpYWxTdHJlbmd0aDogbGl2ZURlZi5tYXhDaGFyZ2VzLFxuICAgICAgICB4OiB0aGlzLnNxdWFkLngsXG4gICAgICAgIHk6IHRoaXMucGxheWVyWSgpLFxuICAgICAgICBub3csXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgICBwcm9qZWN0U2NyZWVuT2Zmc2V0OiAoeCwgeSwgb2Zmc2V0WCwgb2Zmc2V0WSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNlbnRlciA9IHByb2plY3RIZWxpY29wdGVyUG9pbnQoeCwgeSwgdGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KTtcbiAgICAgICAgICByZXR1cm4gdW5wcm9qZWN0SGVsaWNvcHRlclNjcmVlblBvaW50KGNlbnRlci54ICsgb2Zmc2V0WCAqIGNlbnRlci5zY2FsZSwgY2VudGVyLnkgKyBvZmZzZXRZICogY2VudGVyLnNjYWxlLCB0aGlzLmNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQpO1xuICAgICAgICB9LFxuICAgICAgICBoaXRQcm9ncmVzczogbGl2ZVNoaWVsZC5oaXRGbGFzaFByb2dyZXNzLFxuICAgICAgfSk7XG4gICAgICBwcmltaXRpdmVzLnB1c2goLi4uc2NlbmUucHJpbWl0aXZlcyk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKC4uLnNjZW5lLnNoYXBlcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkKSB7XG4gICAgICBjb25zdCBsaXZlU3dvcmQgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkO1xuICAgICAgY29uc3QgbGl2ZURlZiA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbbGl2ZVN3b3JkLnN3b3JkSWRdO1xuICAgICAgY29uc3Qgc2NlbmUgPSBzd29yZFZpc3VhbHMoe1xuICAgICAgICBkZWZpbml0aW9uOiBsaXZlRGVmLFxuICAgICAgICBzbGFzaDogbGl2ZVN3b3JkLmFjdGl2ZVNsYXNoLFxuICAgICAgICBzbGFzaGVzOiBsaXZlU3dvcmQuYWN0aXZlU2xhc2hlcyxcbiAgICAgICAgZG9ja1NpZGU6IGxpdmVTd29yZC5wcmV2aW91c1NsYXNoU2lkZSxcbiAgICAgICAgZG9ja1NpZGVzOiBsaXZlU3dvcmQucHJldmlvdXNTbGFzaFNpZGVzLFxuICAgICAgICBwb2ludHM6IHBsYXllclBvaW50cyxcbiAgICAgICAgdHVuaW5nOiB0aGlzLnN3b3JkVmlzdWFsVHVuaW5nLFxuICAgICAgICBzY2FsZTogcyxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcHJpbWl0aXZlcy5wdXNoKC4uLnNjZW5lLnByaW1pdGl2ZXMpO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaCguLi5zY2VuZS5zaGFwZXMpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHRoaXMuc2hpZWxkUGlja3Vwcykge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW3BpY2t1cC5zaGllbGRJZF07XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKHNoaWVsZFBpY2t1cFZpc3VhbCh7XG4gICAgICAgIHg6IHBpY2t1cC54LFxuICAgICAgICB5OiBwaWNrdXAueSxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgICAgICBub3csXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLnN3b3JkUGlja3Vwcykge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnN3b3JkSWRdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChzd29yZFBpY2t1cFZpc3VhbCh7XG4gICAgICAgIHg6IHBpY2t1cC54LFxuICAgICAgICB5OiBwaWNrdXAueSxcbiAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdLFxuICAgICAgICBub3csXG4gICAgICAgIHNjYWxlOiBzLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllclNpemUgPSAxNDtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHBsYXllclBvaW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGFjdG9yID0gdGhpcy5wbGF5ZXJBY3RvcnNbaW5kZXhdID8/IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoYWN0b3IsIHBvaW50LngsIHBvaW50LnksIHBsYXllclNpemUsIHBsYXllck9yaWVudGF0aW9uKHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgcG9pbnQueCwgcG9pbnQueSwgbm93LCBpbmRleCkpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZXhwbG9kaW5nUGxheWVycykgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGl0ZW0uYWN0b3IsIGl0ZW0ueCwgaXRlbS55LCBwbGF5ZXJTaXplKSk7XG5cbiAgICBjb25zdCBlbmVteUhlYWx0aEJhcnM6IFBhcmFtZXRlcnM8dHlwZW9mIHByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcz5bMF1bbnVtYmVyXVtdID0gW107XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiB0aGlzLmVuZW1pZXMpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSk7XG4gICAgICBjb25zdCBzaXplID0gMTggKiBkZWZpbml0aW9uLmNvbHVtblNwYW47XG4gICAgICBlbmVteUhlYWx0aEJhcnMucHVzaCh7IGVuZW15SWQ6IGVuZW15LmVuZW15SWQsIHg6IGVuZW15LngsIHk6IGVuZW15LnksIGhlYWx0aDogZW5lbXkuaGVhbHRoLCBtYXhIZWFsdGg6IGVuZW15Lm1heEhlYWx0aCwgc2l6ZSwgc2NhbGU6IHMgfSk7XG4gICAgICBzaGFwZUluc3RhbmNlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoZW5lbXkuYWN0b3IsIGVuZW15LngsIGVuZW15LnksIHNpemUsIGVuZW15T3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBlbmVteS54LCBlbmVteS55LCBub3csIGVuZW15LnJvd0lkKSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiB0aGlzLmd1blBpY2t1cHMpIHtcbiAgICAgIGNvbnN0IGd1biA9IGd1bkZhbWlseS5tZW1iZXJzW3BpY2t1cC5ndW5JZF07XG4gICAgICBwaWNrdXAuYWN0b3IubGFiZWwgPSBzaGFwZUxhYmVsKGd1bi5sYWJlbCwgXCJhYm92ZVwiLCAxMCwgNyk7XG4gICAgICBwaWNrdXAuYWN0b3IuY29sb3IgPSBuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXTtcbiAgICAgIHNoYXBlSW5zdGFuY2VzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShwaWNrdXAuYWN0b3IsIHBpY2t1cC54LCBwaWNrdXAueSwgMTUsIGJpbGxib2FyZE9yaWVudGF0aW9uKHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCwgcGlja3VwLngsIHBpY2t1cC55LCBub3cpKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIHRoaXMubXVsdGlwbGllcnMpIHtcbiAgICAgIGNvbnN0IHNwZWMgPSBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnNbcGlja3VwLm11bHRpcGxpZXJJZF07XG4gICAgICBwaWNrdXAuYWN0b3IubGFiZWwgPSBzaGFwZUxhYmVsKGAke3NwZWMuc3F1YWRBZGRlZCArIDF9eGAsIFwiY2VudGVyXCIsIDExLCAwKTtcbiAgICAgIHBpY2t1cC5hY3Rvci5jb2xvciA9IG5lb25QYWxldHRlW3NwZWMucGlja3VwQ29sb3JdO1xuICAgICAgc2hhcGVJbnN0YW5jZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKHBpY2t1cC5hY3RvciwgcGlja3VwLngsIHBpY2t1cC55LCAxNiwgYmlsbGJvYXJkT3JpZW50YXRpb24odGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCBwaWNrdXAueCwgcGlja3VwLnksIG5vdykpKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0SGVsaWNvcHRlclNjZW5lKHByaW1pdGl2ZXMsIHNoYXBlSW5zdGFuY2VzLCB0aGlzLmVuZW15RXhpdEVmZmVjdHMubWFwKGVuZW15RXhpdENsb3VkKSwgdGhpcy5jYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0KTtcbiAgICBwcm9qZWN0ZWQucHJpbWl0aXZlcy5wdXNoKC4uLnByb2plY3RlZEVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhlbmVteUhlYWx0aEJhcnMsIHRoaXMuY2FtZXJhU2V0dGluZ3MsIGhlbGljb3B0ZXJWaWV3cG9ydCkpO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHByb2plY3RlZCwgbm93IC8gMTAwMCk7XG4gIH1cblxuICBzbmFwc2hvdCgpOiBOZW9uU3dhcm1TbmFwc2hvdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgIGFjdGl2ZVRyYWNrOiB0aGlzLmFjdGl2ZVRyYWNrICE9PSBudWxsLFxuICAgICAgY29tYmF0Tm93OiB0aGlzLmNvbWJhdE5vdyxcbiAgICAgIGNvbWJhdEVsYXBzZWQ6IHRoaXMuY29tYmF0RWxhcHNlZCxcbiAgICAgIHNjZW5lSWQ6IHRoaXMudHJhY2tTY2VuZUlkLFxuICAgICAgc3F1YWQ6IHtcbiAgICAgICAgbGFuZTogdGhpcy5zcXVhZC5sYW5lLFxuICAgICAgICBjb3VudDogdGhpcy5zcXVhZC5jb3VudCxcbiAgICAgICAgeDogdGhpcy5zcXVhZC54LFxuICAgICAgICB0YXJnZXRYOiB0aGlzLnNxdWFkLnRhcmdldFgsXG4gICAgICAgIGFpbU9mZnNldDogdGhpcy5zcXVhZC5haW1PZmZzZXQsXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiB7XG4gICAgICAgIGd1bjogdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPyB7IC4uLnRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuIH0gOiBudWxsLFxuICAgICAgICBzaGllbGQ6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkPy5zaGllbGRJZCA/PyBudWxsLFxuICAgICAgICBzd29yZDogdGhpcy5hY3RpdmVCeUZhbWlseS5zd29yZCA/IHsgaWQ6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQuc3dvcmRJZCwgbGV2ZWw6IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQubGV2ZWwgfSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgZW5lbWllczogdGhpcy5lbmVtaWVzLm1hcChlbmVteSA9PiAoe1xuICAgICAgICBpZDogZW5lbXkuaWQsXG4gICAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICAgIGxhbmU6IGVuZW15LmxhbmUsXG4gICAgICAgIHg6IGVuZW15LngsXG4gICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgIGhlYWx0aDogZW5lbXkuaGVhbHRoLFxuICAgICAgICBtYXhIZWFsdGg6IGVuZW15Lm1heEhlYWx0aCxcbiAgICAgICAgZHlpbmc6IGVuZW15LmR5aW5nLFxuICAgICAgfSkpLFxuICAgICAgcGlja3Vwczoge1xuICAgICAgICBndW5zOiB0aGlzLmd1blBpY2t1cHMubGVuZ3RoLFxuICAgICAgICBzaGllbGRzOiB0aGlzLnNoaWVsZFBpY2t1cHMubGVuZ3RoLFxuICAgICAgICBzd29yZHM6IHRoaXMuc3dvcmRQaWNrdXBzLmxlbmd0aCxcbiAgICAgICAgbXVsdGlwbGllcnM6IHRoaXMubXVsdGlwbGllcnMubGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIGtpbGxzOiB0aGlzLmtpbGxzLFxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcExvb3AoKTtcbiAgICB0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Bhd25UcmFja0VudGl0aWVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVUcmFjaykgcmV0dXJuO1xuICAgIHdoaWxlIChcbiAgICAgIHRoaXMubmV4dFRyYWNrRW50aXR5IDwgdGhpcy50cmFja0VudGl0aWVzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5lbnRpdHlBcnJpdmFsU2Vjb25kcyh0aGlzLnRyYWNrRW50aXRpZXNbdGhpcy5uZXh0VHJhY2tFbnRpdHldKSA8PSB0aGlzLmNvbWJhdEVsYXBzZWQgKyB0aGlzLnNwYXduTGVhZFNlY29uZHModGhpcy50cmFja0VudGl0aWVzW3RoaXMubmV4dFRyYWNrRW50aXR5XSlcbiAgICApIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMudHJhY2tFbnRpdGllc1t0aGlzLm5leHRUcmFja0VudGl0eSsrXTtcbiAgICAgIGNvbnN0IGxhbmU6IExhbmUgPSBlbnRpdHkuc2lkZSA9PT0gXCJsZWZ0XCIgPyAwIDogMTtcbiAgICAgIGNvbnN0IGVuZW15RGVmaW5pdGlvbkVudHJ5ID0gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoZW50aXR5LmlkKTtcbiAgICAgIGlmIChlbmVteURlZmluaXRpb25FbnRyeSkge1xuICAgICAgICBjb25zdCB7IGVuZW15SWQsIGRlZmluaXRpb24gfSA9IGVuZW15RGVmaW5pdGlvbkVudHJ5O1xuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh7XG4gICAgICAgICAgaWQ6ICsrdGhpcy5lbnRpdHlJZENvdW50ZXIsXG4gICAgICAgICAgZW5lbXlUeXBlOiBlbmVteUlkLFxuICAgICAgICAgIGVuZW15SWQsXG4gICAgICAgICAgbGFuZSxcbiAgICAgICAgICB4OiB0aGlzLmVudGl0eVgoZW50aXR5KSxcbiAgICAgICAgICB5OiB0aGlzLmVuZW15U3Bhd25ZKGVudGl0eSksXG4gICAgICAgICAgaGVhbHRoOiBkZWZpbml0aW9uLmhlYWx0aCAqIHRoaXMuYWN0aXZlVHJhY2suZGVmaW5pdGlvbi5iYWxhbmNlLmVuZW15SHAsXG4gICAgICAgICAgbWF4SGVhbHRoOiBkZWZpbml0aW9uLmhlYWx0aCAqIHRoaXMuYWN0aXZlVHJhY2suZGVmaW5pdGlvbi5iYWxhbmNlLmVuZW15SHAsXG4gICAgICAgICAgc3BlZWRNdWx0aXBsaWVyOiBlbnRpdHkuc3BlZWRNdWx0aXBsaWVyLFxuICAgICAgICAgIHJvd0lkOiBlbnRpdHkucm93SW5kZXgsXG4gICAgICAgICAgYWN0b3I6IGNyZWF0ZUVuZW15QWN0b3IoZW5lbXlJZCksXG4gICAgICAgICAgZHlpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24uc3Bhd25Tb3VuZCkgdGhpcy5wbGF5KGRlZmluaXRpb24uc3Bhd25Tb3VuZCk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5ndW4uXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uZ3VuLlwiLmxlbmd0aCk7XG4gICAgICAgIGlmICghKGNhbmRpZGF0ZSBpbiBndW5GYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgdXNlcyB1bmtub3duIGd1biBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICB0aGlzLnNwYXduR3VuUGlja3VwKHsgbGFuZSwgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksIHk6IHRoaXMucGlja3VwU3Bhd25ZKGVudGl0eSksIGd1bklkOiBjYW5kaWRhdGUgYXMgR3VuSWQsIGxldmVsOiAxLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGVudGl0eS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLmxlbmd0aCk7XG4gICAgICAgIGlmICghKGNhbmRpZGF0ZSBpbiBzaGllbGRGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgdXNlcyB1bmtub3duIHNoaWVsZCBpZCBcIiR7ZW50aXR5LmlkfVwiLmApO1xuICAgICAgICB0aGlzLnNwYXduU2hpZWxkUGlja3VwKHsgbGFuZSwgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksIHk6IHRoaXMucGlja3VwU3Bhd25ZKGVudGl0eSksIHNoaWVsZElkOiBjYW5kaWRhdGUgYXMgU2hpZWxkSWQsIHNwZWVkTXVsdGlwbGllcjogZW50aXR5LnNwZWVkTXVsdGlwbGllciB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiKSkge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBlbnRpdHkuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLmxlbmd0aCk7XG4gICAgICAgIGlmICghKGNhbmRpZGF0ZSBpbiBzd29yZEZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayB1c2VzIHVua25vd24gc3dvcmQgaWQgXCIke2VudGl0eS5pZH1cIi5gKTtcbiAgICAgICAgdGhpcy5zcGF3blN3b3JkUGlja3VwKHsgbGFuZSwgeDogdGhpcy5lbnRpdHlYKGVudGl0eSksIHk6IHRoaXMucGlja3VwU3Bhd25ZKGVudGl0eSksIHN3b3JkSWQ6IGNhbmRpZGF0ZSBhcyBTd29yZElkLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5pZCA9PT0gXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIikge1xuICAgICAgICB0aGlzLnNwYXduTXVsdGlwbGllclBpY2t1cCh7IGxhbmUsIHg6IHRoaXMuZW50aXR5WChlbnRpdHkpLCB5OiB0aGlzLnBpY2t1cFNwYXduWShlbnRpdHkpLCBzcGVlZE11bHRpcGxpZXI6IGVudGl0eS5zcGVlZE11bHRpcGxpZXIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGVudGl0eSBpZCBcIiR7ZW50aXR5LmlkfVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGxhbmUgcnVubmVyLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhY2tSZXNvbHZlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0VHJhY2tFbnRpdHkgPj0gdGhpcy50cmFja0VudGl0aWVzLmxlbmd0aFxuICAgICAgJiYgdGhpcy5lbmVtaWVzLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgdGhpcy5ndW5QaWNrdXBzLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgdGhpcy5zaGllbGRQaWNrdXBzLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgdGhpcy5zd29yZFBpY2t1cHMubGVuZ3RoID09PSAwXG4gICAgICAmJiB0aGlzLm11bHRpcGxpZXJzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIHByaXZhdGUgZmlyZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlQnlGYW1pbHkuZ3VuKSByZXR1cm47XG4gICAgY29uc3QgeyBpZDogZ3VuSWQsIGxldmVsOiBndW5MZXZlbCB9ID0gdGhpcy5hY3RpdmVCeUZhbWlseS5ndW47XG4gICAgY29uc3QgZ3VuID0gZ3VuRmFtaWx5Lm1lbWJlcnNbZ3VuSWRdO1xuICAgIGNvbnN0IHR1bmluZyA9IGd1bi5sZXZlbHMuZmluZChpdGVtID0+IGl0ZW0ubGV2ZWwgPT09IGd1bkxldmVsKSA/PyBndW4ubGV2ZWxzWzBdO1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuc3F1YWQucG9pbnRzKHRoaXMucGxheWVyWSgpLCB0aGlzLnNjYWxlKCkpLm1hcChwb2ludCA9PiAoeyB4OiBwb2ludC54LCB5OiB0aGlzLnBsYXllclkoKSAtIDIwICogdGhpcy5zY2FsZSgpIH0pKTtcbiAgICB0aGlzLmd1blNpbXVsYXRpb24uZmlyZShndW4sIHR1bmluZywgdGhpcy5wbGF5ZXJMYW5lLCBwb2ludHMsIHRoaXMuY29tYmF0Tm93LCB0aGlzLnNjYWxlKCkpO1xuICAgIHRoaXMuY29vbGRvd24gKz0gMSAvIHR1bmluZy5maXJlUmF0ZVBlclNlY29uZDtcbiAgICB0aGlzLnBsYXlHdW5GaXJlKGd1bklkKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvamVjdGlsZXMoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ3VuU2ltdWxhdGlvbi51cGRhdGVQcm9qZWN0aWxlcyhkZWx0YSwgdGhpcy5jb21iYXROb3csIHRoaXMuZW5lbWllcy5tYXAoZW5lbXkgPT4gT2JqZWN0LmFzc2lnbihlbmVteSwge1xuICAgICAgcmFkaXVzOiB0aGlzLmVuZW15RGVmaW5pdGlvbihlbmVteSkucmFkaXVzICogdGhpcy5zY2FsZSgpLFxuICAgIH0pKSwgeyB0b3A6IC00MCAqIHRoaXMuc2NhbGUoKSwgbGVmdDogLTQwLCByaWdodDogdGhpcy5jYW52YXMud2lkdGggKyA0MCB9LCAoc2hvdCwgZW5lbXkpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVFbmVteSA9IGVuZW15IGFzIEVuZW15ICYgeyByYWRpdXM6IG51bWJlciB9O1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzb2x2ZUVuZW15RGFtYWdlKHtcbiAgICAgICAgZW5lbXk6IGdhbWVFbmVteSxcbiAgICAgICAgZWZmZWN0czogdGhpcy5lbmVteUV4aXRFZmZlY3RzLFxuICAgICAgICBpbXBhY3RNYWduaXR1ZGU6IHNob3QuZGFtYWdlICsgc2hvdC5rbm9ja2JhY2sgKiAuMDYsXG4gICAgICAgIGNvbG9yOiB0aGlzLmVuZW15RXhpdENvbG9yKGdhbWVFbmVteSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQua2lsbGVkKSB7XG4gICAgICAgIHRoaXMua2lsbHMrKztcbiAgICAgICAgdGhpcy5wbGF5KHJlc3VsdC5kZWZpbml0aW9uLmRlYXRoU291bmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5KFwiUHJvamVjdGlsZUhpdFwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiRW5lbXlIaXRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU5lYXJQbGF5ZXJFZmZlY3RzKGRlbHRhOiBudW1iZXIsIHNoaWVsZERlZjogKHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycylbU2hpZWxkSWRdIHwgbnVsbCwgc3dvcmREZWY6IFN3b3JkTWVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHB4ID0gdGhpcy5zcXVhZC54O1xuICAgIGNvbnN0IHB5ID0gdGhpcy5wbGF5ZXJZKCk7XG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkICYmIHNoaWVsZERlZikge1xuICAgICAgY29uc3Qgc2hpZWxkU3RhdGUgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnNoaWVsZDtcbiAgICAgIGNvbnN0IHNoaWVsZFRocmVhdHMgPSBxdWVyeU5lYXJieVRocmVhdHModGhpcy5lbmVtaWVzLCB7XG4gICAgICAgIG9yaWdpbjogeyB4OiBweCwgeTogcHkgfSxcbiAgICAgICAgbGFuZTogdGhpcy5wbGF5ZXJMYW5lLFxuICAgICAgICByYW5nZTogc2hpZWxkRGVmLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSxcbiAgICAgICAgaW5jbHVkZUFkamFjZW50TGFuZXM6IGZhbHNlLFxuICAgICAgICBwdXJwb3NlOiBcInNoaWVsZFwiLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNoaWVsZFJlc3VsdCA9IHRpY2tTaGllbGQoc2hpZWxkU3RhdGUsIHNoaWVsZERlZiwgc2hpZWxkVGhyZWF0cywgcHgsIHB5LCB0aGlzLmNvbWJhdE5vdywgZGVsdGEpO1xuICAgICAgaWYgKHNoaWVsZFJlc3VsdC5wdXNoRW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVuZW15IG9mIHRoaXMuZW5lbWllcykge1xuICAgICAgICAgIGlmICghc2hpZWxkUmVzdWx0LnB1c2hFbmVteUlkcy5pbmNsdWRlcyhlbmVteS5pZCkpIGNvbnRpbnVlO1xuICAgICAgICAgIGNvbnN0IGR4ID0gZW5lbXkueCAtIHB4O1xuICAgICAgICAgIGNvbnN0IGR5ID0gZW5lbXkueSAtIHB5O1xuICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgMTtcbiAgICAgICAgICBlbmVteS54ICs9IChkeCAvIGRpc3QpICogc2hpZWxkUmVzdWx0LnB1c2hEaXN0YW5jZSAqIHRoaXMuc2NhbGUoKTtcbiAgICAgICAgICBlbmVteS55ICs9IChkeSAvIGRpc3QpICogc2hpZWxkUmVzdWx0LnB1c2hEaXN0YW5jZSAqIHRoaXMuc2NhbGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXkoXCJTaGllbGRQdWxzZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGllbGRSZXN1bHQuY29udGFjdERhbWFnZUVuZW15SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4udGhpcy5lbmVtaWVzXSkge1xuICAgICAgICAgIGlmIChlbmVteS5keWluZyB8fCAhc2hpZWxkUmVzdWx0LmNvbnRhY3REYW1hZ2VFbmVteUlkcy5pbmNsdWRlcyhlbmVteS5pZCkpIGNvbnRpbnVlO1xuICAgICAgICAgIGVuZW15LmhlYWx0aCAtPSBzaGllbGRSZXN1bHQuY29udGFjdERhbWFnZUFtb3VudCAqIGRlbHRhO1xuICAgICAgICAgIGlmIChlbmVteS5oZWFsdGggPD0gMCkgdGhpcy5kZXN0cm95RW5lbXkoZW5lbXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgJiYgc3dvcmREZWYpIHtcbiAgICAgIGNvbnN0IHN3b3JkU3RhdGUgPSB0aGlzLmFjdGl2ZUJ5RmFtaWx5LnN3b3JkO1xuICAgICAgY29uc3Qgc3dvcmRRdWVyeVJhbmdlID0gc3dvcmREZWYucm93UmVhY2hcbiAgICAgICAgPyBNYXRoLm1heCh0aGlzLmNhbnZhcy53aWR0aCwgc3dvcmREZWYucmFuZ2UgKiB0aGlzLnNjYWxlKCkpXG4gICAgICAgIDogc3dvcmREZWYucmFuZ2UgKiB0aGlzLnNjYWxlKCk7XG4gICAgICBjb25zdCBzd29yZFRocmVhdHMgPSBxdWVyeU5lYXJieVRocmVhdHModGhpcy5lbmVtaWVzLCB7XG4gICAgICAgIG9yaWdpbjogeyB4OiBweCwgeTogcHkgfSxcbiAgICAgICAgbGFuZTogdGhpcy5wbGF5ZXJMYW5lLFxuICAgICAgICByYW5nZTogc3dvcmRRdWVyeVJhbmdlLFxuICAgICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogKHN3b3JkRGVmLnRhcmdldGluZ01vZGUgYXMgU3dvcmRUYXJnZXRpbmdNb2RlKSA9PT0gXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIsXG4gICAgICAgIG1heFRhcmdldHM6IHN3b3JkRGVmLnJvd1JlYWNoID8gdW5kZWZpbmVkIDogc3dvcmREZWYubWF4VGFyZ2V0cyxcbiAgICAgICAgcHVycG9zZTogXCJzd29yZFwiLFxuICAgICAgfSkuZmlsdGVyKHRocmVhdCA9PiAhc3dvcmREZWYucm93UmVhY2ggfHwgTWF0aC5hYnModGhyZWF0LnRhcmdldC55IC0gcHkpIDw9IHN3b3JkRGVmLnJhbmdlICogdGhpcy5zY2FsZSgpKTtcbiAgICAgIGNvbnN0IHN3b3JkUmVzdWx0ID0gdGlja1N3b3JkKHN3b3JkU3RhdGUsIHN3b3JkRGVmLCBzd29yZFRocmVhdHMsIHB4LCBweSwgdGhpcy5jb21iYXROb3csIGRlbHRhLCBuZW9uUGFsZXR0ZVtzd29yZERlZi5jb2xvcl0sIHN3b3JkVmlzdWFsRHVyYXRpb25Ncyh0aGlzLnN3b3JkVmlzdWFsVHVuaW5nKSwgdGhpcy5zcXVhZC5jb3VudCk7XG4gICAgICBpZiAoc3dvcmRSZXN1bHQuc3dpbmdUcmlnZ2VyZWQgJiYgc3dvcmRSZXN1bHQuaGl0RW5lbXlJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmFwcGx5UGVuZGluZ1N3b3JkRGFtYWdlKHsgZm9yY2U6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucGxheShcIlN3b3JkU3dpbmdXaG9vc2hcIik7XG4gICAgICAgIHRoaXMucGVuZGluZ1N3b3JkRGFtYWdlID0ge1xuICAgICAgICAgIGhpdHM6IHRoaXMuc2NoZWR1bGVTd29yZEhpdHMoc3dvcmRSZXN1bHQuaGl0VGFyZ2V0cywgc3dvcmRTdGF0ZS5wcmV2aW91c1NsYXNoU2lkZSksXG4gICAgICAgICAgZGFtYWdlOiBzd29yZFJlc3VsdC5kYW1hZ2UsXG4gICAgICAgICAgY29sb3I6IG5lb25QYWxldHRlW3N3b3JkRGVmLmNvbG9yXSxcbiAgICAgICAgICBpbXBhY3RTb3VuZElkOiBzd29yZEltcGFjdFNvdW5kSWRzW3N3b3JkU3RhdGUuc3dvcmRJZF0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLmFwcGx5UGVuZGluZ1N3b3JkRGFtYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVN3b3JkSGl0cyh0YXJnZXRzOiBBcnJheTx7IGlkOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+LCBzaWRlOiAtMSB8IDEpOiBBcnJheTx7IGVuZW15SWQ6IG51bWJlcjsgZHVlQXQ6IG51bWJlciB9PiB7XG4gICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgY29uc3QgZHVyYXRpb24gPSBzd29yZFZpc3VhbER1cmF0aW9uTXModGhpcy5zd29yZFZpc3VhbFR1bmluZyk7XG4gICAgY29uc3QgeHMgPSB0YXJnZXRzLm1hcCh0YXJnZXQgPT4gdGFyZ2V0LngpO1xuICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbiguLi54cyk7XG4gICAgY29uc3QgbWF4WCA9IE1hdGgubWF4KC4uLnhzKTtcbiAgICBjb25zdCBzcGFuID0gTWF0aC5tYXgoMSwgbWF4WCAtIG1pblgpO1xuICAgIGNvbnN0IGxlZnRUb1JpZ2h0ID0gc2lkZSA9PT0gMTtcbiAgICByZXR1cm4gdGFyZ2V0cy5tYXAodGFyZ2V0ID0+IHtcbiAgICAgIGNvbnN0IGxhbmVQcm9ncmVzcyA9IGxlZnRUb1JpZ2h0XG4gICAgICAgID8gKHRhcmdldC54IC0gbWluWCkgLyBzcGFuXG4gICAgICAgIDogKG1heFggLSB0YXJnZXQueCkgLyBzcGFuO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5lbXlJZDogdGFyZ2V0LmlkLFxuICAgICAgICBkdWVBdDogdGhpcy5jb21iYXROb3cgKyBkdXJhdGlvbiAqIHRoaXMuc3dvcmRTdHJpa2VQcm9ncmVzcyhsYW5lUHJvZ3Jlc3MpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3dvcmRTdHJpa2VQcm9ncmVzcyhsYW5lUHJvZ3Jlc3MgPSAuNzIpOiBudW1iZXIge1xuICAgIGNvbnN0IHR1bmluZyA9IHRoaXMuc3dvcmRWaXN1YWxUdW5pbmc7XG4gICAgY29uc3Qgc3RyaWtlID0gdHVuaW5nLnN0cmlrZUR1cmF0aW9uID8/IC4zMTtcbiAgICBjb25zdCBmb2xsb3dUaHJvdWdoID0gdHVuaW5nLmZvbGxvd1Rocm91Z2hEdXJhdGlvbiA/PyAuMTg7XG4gICAgY29uc3QgdG90YWwgPSBNYXRoLm1heCguMDEsIHN0cmlrZSArIGZvbGxvd1Rocm91Z2gpO1xuICAgIGNvbnN0IGNsYW1wZWRMYW5lUHJvZ3Jlc3MgPSBNYXRoLm1heCguMTgsIE1hdGgubWluKC44OCwgbGFuZVByb2dyZXNzKSk7XG4gICAgcmV0dXJuIE1hdGgubWluKC45NSwgKHN0cmlrZSAqIGNsYW1wZWRMYW5lUHJvZ3Jlc3MpIC8gdG90YWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVBlbmRpbmdTd29yZERhbWFnZShvcHRpb25zOiB7IGZvcmNlPzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcbiAgICBjb25zdCBwZW5kaW5nID0gdGhpcy5wZW5kaW5nU3dvcmREYW1hZ2U7XG4gICAgaWYgKCFwZW5kaW5nKSByZXR1cm47XG4gICAgY29uc3QgZHVlSGl0cyA9IG9wdGlvbnMuZm9yY2VcbiAgICAgID8gcGVuZGluZy5oaXRzXG4gICAgICA6IHBlbmRpbmcuaGl0cy5maWx0ZXIoaGl0ID0+IHRoaXMuY29tYmF0Tm93ID49IGhpdC5kdWVBdCk7XG4gICAgaWYgKGR1ZUhpdHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgZHVlRW5lbXlJZHMgPSBkdWVIaXRzLm1hcChoaXQgPT4gaGl0LmVuZW15SWQpO1xuICAgIHBlbmRpbmcuaGl0cyA9IHBlbmRpbmcuaGl0cy5maWx0ZXIoaGl0ID0+ICFkdWVFbmVteUlkcy5pbmNsdWRlcyhoaXQuZW5lbXlJZCkpO1xuICAgIGlmIChwZW5kaW5nLmhpdHMubGVuZ3RoID09PSAwKSB0aGlzLnBlbmRpbmdTd29yZERhbWFnZSA9IG51bGw7XG4gICAgbGV0IGltcGFjdGVkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4udGhpcy5lbmVtaWVzXSkge1xuICAgICAgaWYgKGVuZW15LmR5aW5nIHx8ICFkdWVFbmVteUlkcy5pbmNsdWRlcyhlbmVteS5pZCkpIGNvbnRpbnVlO1xuICAgICAgaW1wYWN0ZWQgPSB0cnVlO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzb2x2ZUVuZW15RGFtYWdlKHtcbiAgICAgICAgZW5lbXksXG4gICAgICAgIGVmZmVjdHM6IHRoaXMuZW5lbXlFeGl0RWZmZWN0cyxcbiAgICAgICAgZGFtYWdlOiBwZW5kaW5nLmRhbWFnZSxcbiAgICAgICAgaW1wYWN0TWFnbml0dWRlOiBwZW5kaW5nLmRhbWFnZSxcbiAgICAgICAgY29sb3I6IHBlbmRpbmcuY29sb3IsXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQua2lsbGVkKSB7XG4gICAgICAgIHRoaXMua2lsbHMrKztcbiAgICAgICAgdGhpcy5wbGF5KHJlc3VsdC5kZWZpbml0aW9uLmRlYXRoU291bmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW1wYWN0ZWQpIHRoaXMucGxheShwZW5kaW5nLmltcGFjdFNvdW5kSWQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFbmVtaWVzKGRlbHRhOiBudW1iZXIsIHNoaWVsZERlZjogKHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycylbU2hpZWxkSWRdIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHNsb3dFbmVteUlkcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICAgIGNvbnN0IHB4ID0gdGhpcy5zcXVhZC54O1xuICAgIGNvbnN0IHB5ID0gdGhpcy5wbGF5ZXJZKCk7XG4gICAgZm9yIChjb25zdCBlbmVteSBvZiBbLi4udGhpcy5lbmVtaWVzXSkge1xuICAgICAgZW5lbXkuYWN0b3Iuc2V0VmVsb2NpdHkoMCwgMCkudXBkYXRlKGRlbHRhKTtcbiAgICAgIGNvbnN0IGVmZmVjdGl2ZSA9IHNsb3dFbmVteUlkcy5oYXMoZW5lbXkuaWQpXG4gICAgICAgID8gZW5lbXkuc3BlZWRNdWx0aXBsaWVyICogKHNoaWVsZERlZj8uc2xvd011bHRpcGxpZXIgPz8gMSlcbiAgICAgICAgOiBlbmVteS5zcGVlZE11bHRpcGxpZXI7XG4gICAgICBlbmVteS55ICs9IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5zcGVlZCAqIGVmZmVjdGl2ZSAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhIC0gZW5lbXkuYWN0b3IueSAqIHRoaXMuY2FudmFzLmhlaWdodCAvIDIuNTtcbiAgICAgIGVuZW15LmFjdG9yLm1vdmVUbygwLCAwKTtcbiAgICAgIGlmIChlbmVteS5keWluZyAmJiBlbmVteS5hY3Rvci5kaXNwb3NlZCkge1xuICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGVuZW15LmR5aW5nKSBjb250aW51ZTtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlQnlGYW1pbHkuc2hpZWxkICYmIHNoaWVsZERlZikge1xuICAgICAgICBjb25zdCBzaGllbGRDb250YWN0ID0gcmVzb2x2ZVNoaWVsZENvbnRhY3QodGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQsIHNoaWVsZERlZiwgT2JqZWN0LmFzc2lnbihlbmVteSwge1xuICAgICAgICAgIHJhZGl1czogdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLnJhZGl1cyAqIHRoaXMuc2NhbGUoKSxcbiAgICAgICAgfSksIHB4LCBweSwgdGhpcy5jb21iYXROb3csIHRoaXMuc2NhbGUoKSk7XG4gICAgICAgIGlmIChzaGllbGRDb250YWN0LmFic29yYmVkKSB7XG4gICAgICAgICAgaWYgKHNoaWVsZENvbnRhY3QuZW5lbXlEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUVuZW15KGVuZW15KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5lbXkuYWN0b3IuaW1wYWN0KHsgZGlyZWN0aW9uOiB7IHg6IDAsIHk6IDEgfSwgbWFnbml0dWRlOiBzaGllbGRDb250YWN0LmRhbWFnZUFic29yYmVkIC8gdGhpcy5lbmVteURlZmluaXRpb24oZW5lbXkpLmltcGFjdFJlc2lzdGFuY2UgfSk7XG4gICAgICAgICAgICB0aGlzLnBsYXkoXCJTaGllbGRJbXBhY3RcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBlbmRpbmdTd29yZERhbWFnZT8uaGl0cy5zb21lKGhpdCA9PiBoaXQuZW5lbXlJZCA9PT0gZW5lbXkuaWQpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgaGl0SW5kZXggPSB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgdGhpcy5zY2FsZSgpKS5maW5kSW5kZXgocG9pbnQgPT4gTWF0aC5oeXBvdChwb2ludC54IC0gZW5lbXkueCwgcG9pbnQueSAtIGVuZW15LnkpIDw9IHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5yYWRpdXMgKiAzLjIpO1xuICAgICAgaWYgKGhpdEluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLnNxdWFkLnBvaW50cyh0aGlzLnBsYXllclkoKSwgdGhpcy5zY2FsZSgpKVtoaXRJbmRleF07XG4gICAgICAgIGNvbnN0IGFjdG9yID0gdGhpcy5wbGF5ZXJBY3RvcnNbaGl0SW5kZXhdID8/IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5wbGF5ZXIgfSk7XG4gICAgICAgIGFjdG9yLmV4cGxvZGVNYWduaXR1ZGUgPSAuNTU7XG4gICAgICAgIGFjdG9yLmRpc3Bvc2UoTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSk7XG4gICAgICAgIHRoaXMuZXhwbG9kaW5nUGxheWVycy5wdXNoKHsgYWN0b3IsIHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSk7XG4gICAgICAgIHRoaXMucGxheWVyQWN0b3JzLnNwbGljZShoaXRJbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc3F1YWQucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiUGxheWVyRGFtYWdlXCIpO1xuICAgICAgICB0aGlzLnBsYXkoXCJTcXVhZE1lbWJlckxvc3RcIik7XG4gICAgICAgIGlmICh0aGlzLnNxdWFkLmNvdW50ID09PSAxKSB0aGlzLnBsYXkoXCJMb3dIZWFsdGhXYXJuaW5nXCIpO1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBcImdhbWVcIiAmJiB0aGlzLnNxdWFkLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVhc29uID0gXCJUaGUgZW50aXJlIHNxdWFkIHdhcyBkZXN0cm95ZWQgb24gY29udGFjdC5cIjtcbiAgICAgICAgICB0aGlzLmZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5lbXkueSA+PSB0aGlzLnBsYXllclkoKSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBcImdhbWVcIikge1xuICAgICAgICAgIHRoaXMuYnJlYWNoZXMrKztcbiAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgICAgdGhpcy5wbGF5KFwiRW5lbXlFc2NhcGVkXCIpO1xuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlYXNvbiA9IFwiQW4gZW5lbXkgcGFzc2VkIHRoZSBkZWZlbnNlIGxpbmUuXCI7XG4gICAgICAgICAgdGhpcy5maW5pc2goZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5lbXkueSA+IHRoaXMuY2FudmFzLmhlaWdodCArIHRoaXMuZW5lbXlEZWZpbml0aW9uKGVuZW15KS5yYWRpdXMgKiAyKSB0aGlzLmVuZW1pZXMuc3BsaWNlKHRoaXMuZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQaWNrdXBzKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5ndW5QaWNrdXBzXSkge1xuICAgICAgcGlja3VwLmFjdG9yLnVwZGF0ZShkZWx0YSk7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCeUZhbWlseS5ndW4gPSB7IGlkOiBwaWNrdXAuZ3VuSWQsIGxldmVsOiBwaWNrdXAubGV2ZWwgfTtcbiAgICAgICAgdGhpcy5jb29sZG93biA9IDA7XG4gICAgICAgIHRoaXMuZ3VuUGlja3Vwcy5zcGxpY2UodGhpcy5ndW5QaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cEd1blwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiV2VhcG9uUmVhZHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLmd1blBpY2t1cHMuc3BsaWNlKHRoaXMuZ3VuUGlja3Vwcy5pbmRleE9mKHBpY2t1cCksIDEpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGlja3VwIG9mIFsuLi50aGlzLnNoaWVsZFBpY2t1cHNdKSB7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgY29uc3QgZGVmID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbcGlja3VwLnNoaWVsZElkXTtcbiAgICAgICAgdGhpcy5hY3RpdmVCeUZhbWlseS5zaGllbGQgPSBuZXcgU2hpZWxkU3RhdGUocGlja3VwLnNoaWVsZElkLCBkZWYubWF4Q2hhcmdlcyk7XG4gICAgICAgIHRoaXMuc2hpZWxkUGlja3Vwcy5zcGxpY2UodGhpcy5zaGllbGRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cFNoaWVsZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5KFwiU2hpZWxkXCIpO1xuICAgICAgfSBlbHNlIGlmIChwaWNrdXAueSA+IHRoaXMuY2FudmFzLmhlaWdodCkgdGhpcy5zaGllbGRQaWNrdXBzLnNwbGljZSh0aGlzLnNoaWVsZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBpY2t1cCBvZiBbLi4udGhpcy5zd29yZFBpY2t1cHNdKSB7XG4gICAgICBwaWNrdXAueSArPSA3MiAqIHBpY2t1cC5zcGVlZE11bHRpcGxpZXIgKiB0aGlzLnNjYWxlKCkgKiBkZWx0YTtcbiAgICAgIGlmIChwaWNrdXAueSA+PSB0aGlzLnBsYXllclkoKSAtIDE1ICogdGhpcy5zY2FsZSgpICYmIHBpY2t1cC5sYW5lID09PSB0aGlzLnBsYXllckxhbmUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQ7XG4gICAgICAgIHRoaXMuYWN0aXZlQnlGYW1pbHkuc3dvcmQgPSBuZXcgU3dvcmRTdGF0ZShwaWNrdXAuc3dvcmRJZCwgY3VycmVudD8uc3dvcmRJZCA9PT0gcGlja3VwLnN3b3JkSWQgPyBjdXJyZW50LmxldmVsICsgMSA6IDEpO1xuICAgICAgICB0aGlzLnN3b3JkUGlja3Vwcy5zcGxpY2UodGhpcy5zd29yZFBpY2t1cHMuaW5kZXhPZihwaWNrdXApLCAxKTtcbiAgICAgICAgdGhpcy5wbGF5UGlja3VwKFwiUGlja3VwU3dvcmRcIik7XG4gICAgICAgIHRoaXMucGxheShcIldlYXBvblJlYWR5XCIpO1xuICAgICAgfSBlbHNlIGlmIChwaWNrdXAueSA+IHRoaXMuY2FudmFzLmhlaWdodCkgdGhpcy5zd29yZFBpY2t1cHMuc3BsaWNlKHRoaXMuc3dvcmRQaWNrdXBzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwaWNrdXAgb2YgWy4uLnRoaXMubXVsdGlwbGllcnNdKSB7XG4gICAgICBwaWNrdXAuYWN0b3IudXBkYXRlKGRlbHRhKTtcbiAgICAgIHBpY2t1cC55ICs9IDcyICogcGlja3VwLnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKSAqIGRlbHRhO1xuICAgICAgaWYgKHBpY2t1cC55ID49IHRoaXMucGxheWVyWSgpIC0gMTUgKiB0aGlzLnNjYWxlKCkgJiYgcGlja3VwLmxhbmUgPT09IHRoaXMucGxheWVyTGFuZSkge1xuICAgICAgICB0aGlzLnNxdWFkLmFkZChtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnNbcGlja3VwLm11bHRpcGxpZXJJZF0uc3F1YWRBZGRlZCk7XG4gICAgICAgIHRoaXMuc3luY1BsYXllckFjdG9ycygpO1xuICAgICAgICB0aGlzLm11bHRpcGxpZXJzLnNwbGljZSh0aGlzLm11bHRpcGxpZXJzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgICAgIHRoaXMucGxheVBpY2t1cChcIlBpY2t1cE11bHRpcGxpZXJcIik7XG4gICAgICB9IGVsc2UgaWYgKHBpY2t1cC55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLm11bHRpcGxpZXJzLnNwbGljZSh0aGlzLm11bHRpcGxpZXJzLmluZGV4T2YocGlja3VwKSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5pc2god29uOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZVRyYWNrKSByZXR1cm47XG4gICAgY29uc3QgdGl0bGUgPSB3b24gPyBcIkZMQVdMRVNTIFJVTlwiIDogXCJUUkFDSyBGQUlMRURcIjtcbiAgICBjb25zdCBkZXRhaWwgPSB3b24gPyBcIk5vIGVuZW15IHRvdWNoZWQgb3IgZXNjYXBlZCBwYXN0IHlvdS5cIiA6IHRoaXMuZmFpbHVyZVJlYXNvbiB8fCBgJHt0aGlzLmJyZWFjaGVzfSBlbmVteSR7dGhpcy5icmVhY2hlcyA9PT0gMSA/IFwiXCIgOiBcImllc1wifSBicmVhY2hlZCB0aGUgZGVmZW5zZS5gO1xuICAgIGlmICh3b24pIHtcbiAgICAgIHRoaXMudmljdG9yeSA9IG5ldyBOZW9uVmljdG9yeUV4cGVyaWVuY2Uoe1xuICAgICAgICBjZW50ZXJYOiB0aGlzLmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgIGNlbnRlclk6IHRoaXMuY2FudmFzLmhlaWdodCAqIC4zOCxcbiAgICAgICAgd2lkdGg6IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgICAgcGFydGljbGVDb3VudDogMTIwLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXkoXCJQdXp6bGVDb21wbGV0ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5KFwiR2FtZU92ZXJcIik7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlVHJhY2sgPSBudWxsO1xuICAgIHRoaXMub25GaW5pc2g/Lih7IHdvbiwgdGl0bGUsIGRldGFpbCwgYnJlYWNoZXM6IHRoaXMuYnJlYWNoZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIHN5bmNQbGF5ZXJBY3RvcnMoKTogdm9pZCB7XG4gICAgd2hpbGUgKHRoaXMucGxheWVyQWN0b3JzLmxlbmd0aCA8IHRoaXMuc3F1YWQuY291bnQpIHRoaXMucGxheWVyQWN0b3JzLnB1c2gobmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KSk7XG4gICAgaWYgKHRoaXMucGxheWVyQWN0b3JzLmxlbmd0aCA+IHRoaXMuc3F1YWQuY291bnQpIHRoaXMucGxheWVyQWN0b3JzLmxlbmd0aCA9IHRoaXMuc3F1YWQuY291bnQ7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5U2NlbmVCYWNrZ3JvdW5kKCk6IHZvaWQge1xuICAgIGFwcGx5TGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZCh0aGlzLnN0YWdlRWxlbWVudCwgdGhpcy50cmFja1NjZW5lSWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmVteUV4aXRDb2xvcihlbmVteTogRW5lbXkpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmVteS5hY3Rvci5jb2xvciA/PyBlbmVteS5hY3Rvci5zaGFwZS5jb2xvcjtcbiAgfVxuXG4gIHByaXZhdGUgZW5lbXlEZWZpbml0aW9uKGVuZW15OiBFbmVteSk6ICh0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnMpW09yYklkXSB7XG4gICAgcmV0dXJuIG9yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95RW5lbXkoZW5lbXk6IEVuZW15KTogdm9pZCB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGRlZmVhdEVuZW15KGVuZW15LCB0aGlzLmVuZW15RXhpdEVmZmVjdHMsIHRoaXMuZW5lbXlFeGl0Q29sb3IoZW5lbXkpKTtcbiAgICB0aGlzLmtpbGxzKys7XG4gICAgdGhpcy5wbGF5KGRlZmluaXRpb24uZGVhdGhTb3VuZCk7XG4gIH1cblxuICBwcml2YXRlIGVudGl0eVgoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubGFuZVgoZW50aXR5LnNpZGUgPT09IFwibGVmdFwiID8gMCA6IDEpICsgKGVudGl0eS5sYW5lSW5kZXggLSAyICsgKGVudGl0eS5jb2x1bW5TcGFuIC0gMSkgLyAyKSAqIDE1ICogdGhpcy5zY2FsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlTcGVlZChlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gKGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGVudGl0eS5pZCk/LmRlZmluaXRpb24uc3BlZWQgPz8gNzIpICogZW50aXR5LnNwZWVkTXVsdGlwbGllciAqIHRoaXMuc2NhbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5lbXlTcGF3blkoZW50aXR5OiBQYXJzZWRUcmFja0VudGl0eSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyWSgpIC0gdGhpcy5lbnRpdHlTcGVlZChlbnRpdHkpICogdGhpcy5zcGF3bkxlYWRTZWNvbmRzKGVudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIHBpY2t1cFNwYXduWShlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJZKCkgLSB0aGlzLmVudGl0eVNwZWVkKGVudGl0eSkgKiB0aGlzLnNwYXduTGVhZFNlY29uZHMoZW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Bhd25MZWFkU2Vjb25kcyhlbnRpdHk6IFBhcnNlZFRyYWNrRW50aXR5KTogbnVtYmVyIHtcbiAgICBjb25zdCBhcnJpdmFsU2Vjb25kcyA9IHRoaXMuZW50aXR5QXJyaXZhbFNlY29uZHMoZW50aXR5KTtcbiAgICByZXR1cm4gTWF0aC5taW4obWF4VHJhY2tTcGF3bkxlYWRTZWNvbmRzLCBhcnJpdmFsU2Vjb25kcyk7XG4gIH1cblxuICBwcml2YXRlIGVudGl0eUFycml2YWxTZWNvbmRzKGVudGl0eTogUGFyc2VkVHJhY2tFbnRpdHkpOiBudW1iZXIge1xuICAgIHJldHVybiBmaXJzdFRyYWNrUm93QXJyaXZhbFNlY29uZHMgKyBNYXRoLm1heCgwLCBlbnRpdHkuZGlzdGFuY2VGcm9tUGxheWVyIC0gMSkgKiB0cmFja1Jvd1RyYXZlbFNlY29uZHM7XG4gIH1cblxuICBwcml2YXRlIHBsYXkoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGFsdGVybmF0aXZlcyA9IHNvdW5kQWx0ZXJuYXRpdmVDb3VudHNbaWRdID8/IDA7XG4gICAgaWYgKGFsdGVybmF0aXZlcyA+IDAgJiYgdGhpcy5zb3VuZD8ucGxheVJvdGF0ZWQpIHRoaXMuc291bmQucGxheVJvdGF0ZWQoaWQsIGFsdGVybmF0aXZlcyk7XG4gICAgZWxzZSB0aGlzLnNvdW5kPy5wbGF5KGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgcGxheUd1bkZpcmUoZ3VuSWQ6IEd1bklkKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5KGd1bkZpcmVTb3VuZElkc1tndW5JZF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5UGlja3VwKGlkOiBcIlBpY2t1cEd1blwiIHwgXCJQaWNrdXBTaGllbGRcIiB8IFwiUGlja3VwU3dvcmRcIiB8IFwiUGlja3VwTXVsdGlwbGllclwiKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5KFwiUGlja3VwXCIpO1xuICAgIHRoaXMucGxheShpZCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVUZXN0UGFnZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgc2VsZWN0QXV0b0FpbU9mZnNldCB9IGZyb20gXCIuLi8uLi9zcmMvYXV0b0FpbVwiO1xuaW1wb3J0IHsgTmVvblN3YXJtU2ltdWxhdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvc2ltdWxhdGlvbi9OZW9uU3dhcm1TaW11bGF0aW9uXCI7XG5cbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KFwiI3Rlc3Qtc3RhdHVzXCIpITtcbmNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxPTGlzdEVsZW1lbnQ+KFwiI3Jlc3VsdHNcIikhO1xuXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gIGNvbnN0IGxhbmVDZW50ZXIgPSAyMDA7XG4gIGNvbnN0IHJlbWFpbmluZyA9IFt7IHg6IDE3MCwgeTogMTIwLCByb3dJZDogMSB9LCB7IHg6IDIzMCwgeTogMTIwLCByb3dJZDogMSB9XTtcbiAgY29uc3QgZmFydGhlckNlbnRlcmVkUm93ID0gW3sgeDogMjAwLCB5OiA4MCwgcm93SWQ6IDIgfV07XG4gIGNvbnN0IGFsbFRhcmdldHMgPSBbLi4ucmVtYWluaW5nLCAuLi5mYXJ0aGVyQ2VudGVyZWRSb3ddO1xuICBjb25zdCBmaXJzdE9mZnNldCA9IHNlbGVjdEF1dG9BaW1PZmZzZXQoYWxsVGFyZ2V0cywgbGFuZUNlbnRlciwgWzBdKTtcbiAgY29uc3QgZmlyc3RUYXJnZXQgPSBmaXJzdE9mZnNldCA8IDAgPyByZW1haW5pbmdbMF0gOiBmaXJzdE9mZnNldCA+IDAgPyByZW1haW5pbmdbMV0gOiBudWxsO1xuICBjb25zdCBhZnRlckZpcnN0S2lsbCA9IGZpcnN0VGFyZ2V0ID8gYWxsVGFyZ2V0cy5maWx0ZXIodGFyZ2V0ID0+IHRhcmdldCAhPT0gZmlyc3RUYXJnZXQpIDogYWxsVGFyZ2V0cztcbiAgY29uc3Qgc2Vjb25kT2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChhZnRlckZpcnN0S2lsbCwgbGFuZUNlbnRlciwgWzBdKTtcbiAgY29uc3Qgbm9UYXJnZXRzT2Zmc2V0ID0gc2VsZWN0QXV0b0FpbU9mZnNldChbXSwgbGFuZUNlbnRlciwgWzBdLCBzZWNvbmRPZmZzZXQpO1xuICByZXR1cm4geyBmaXJzdE9mZnNldCwgZmlyc3RUYXJnZXQsIHNlY29uZE9mZnNldCwgbm9UYXJnZXRzT2Zmc2V0IH07XG59O1xuXG5jb25zdCB0ZXN0ID0gY3JlYXRlVGVzdFBhZ2UoXCJuZW9uLXN3YXJtLWF1dG8tYWltLXNtb2tlXCIsIHsgc3VpdGU6IFwic21va2VcIiwgcnVuIH0sIHN0YXR1cyk7XG50ZXN0LnJlYWR5KCk7XG5jb25zdCBvdXRjb21lID0gcnVuKCk7XG5jb25zdCBhc3NlcnRpb25zID0gW1xuICBbXCJTeW1tZXRyaWMgb3V0c2lkZSBzdXJ2aXZvcnMgcHJvZHVjZSBhIGRlY2lzaXZlIGZpcnN0IHNoaWZ0XCIsIG91dGNvbWUuZmlyc3RPZmZzZXQgIT09IDBdLFxuICBbXCJGaXJzdCBzaGlmdCBzZWxlY3RzIG9uZSByZW1haW5pbmcgZW5lbXlcIiwgb3V0Y29tZS5maXJzdFRhcmdldCAhPT0gbnVsbF0sXG4gIFtcIkFmdGVyIGZpcnN0IGtpbGwgYXV0byBhaW0gc2hpZnRzIHRvIHRoZSBvdGhlciBzdXJ2aXZvclwiLCBvdXRjb21lLmZpcnN0VGFyZ2V0ICE9PSBudWxsICYmIG91dGNvbWUuc2Vjb25kT2Zmc2V0ICE9PSAwICYmIE1hdGguc2lnbihvdXRjb21lLnNlY29uZE9mZnNldCkgIT09IE1hdGguc2lnbihvdXRjb21lLmZpcnN0T2Zmc2V0KV0sXG4gIFtcIkNsb3NlciByb3cgd2lucyBvdmVyIGEgZmFydGhlciBjZW50ZXJlZCByb3dcIiwgb3V0Y29tZS5maXJzdE9mZnNldCAhPT0gMF0sXG4gIFtcIk5vIHRhcmdldHMgcmV0dXJucyB0byBsYW5lIGNlbnRlclwiLCBvdXRjb21lLm5vVGFyZ2V0c09mZnNldCA9PT0gMF0sXG5dIGFzIGNvbnN0O1xuXG5yZXN1bHRzLmlubmVySFRNTCA9IGFzc2VydGlvbnMubWFwKChbbmFtZSwgcGFzc2VkXSwgaW5kZXgpID0+IGBcbiAgPGxpIGRhdGEtcGFzc2VkPVwiJHtwYXNzZWR9XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XG4gICAgPHN0cm9uZz4ke25hbWV9PC9zdHJvbmc+XG4gICAgPHNwYW4+JHtwYXNzZWQgPyBcIlBBU1NcIiA6IFwiRkFJTFwifTwvc3Bhbj5cbiAgPC9saT5gKS5qb2luKFwiXCIpO1xucmVzdWx0cy5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIikuZm9yRWFjaChpdGVtID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdm9pZCBzdGFydFNpbXVsYXRpb24oTnVtYmVyKGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkpKTtcbn0pO1xuZm9yIChjb25zdCBbbmFtZSwgcGFzc2VkXSBvZiBhc3NlcnRpb25zKSB0ZXN0LmFzc2VydChuYW1lLCBwYXNzZWQsIGBmaXJzdD0ke291dGNvbWUuZmlyc3RPZmZzZXR9IHNlY29uZD0ke291dGNvbWUuc2Vjb25kT2Zmc2V0fWApO1xuXG5jb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLWNvbnRhaW5lclwiKSE7XG5jb25zdCBzaW11bGF0b3JQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltdWxhdG9yLXBhbmVsXCIpITtcbmNvbnN0IGNsb3NlU2ltQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1zaW1cIikhO1xuY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBsYXktYnRuXCIpITtcbmNvbnN0IHBhdXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZS1idG5cIikhO1xuY29uc3Qgc2ltU3RhdHVzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXN0YXR1c1wiKSE7XG5jb25zdCBzaW1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXRpdGxlXCIpITtcbmNvbnN0IHNpbURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbS1kZXRhaWxzXCIpITtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWNvbnRhaW5lclwiKSA/PyBzaW11bGF0b3JQYW5lbDtcblxubGV0IHNpbTogTmVvblN3YXJtU2ltdWxhdGlvbiB8IG51bGwgPSBudWxsO1xubGV0IGFjdGl2ZVNjZW5hcmlvSWR4ID0gMDtcbmxldCBpc1BhdXNlZCA9IGZhbHNlO1xuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVTaW11bGF0aW9uKCk6IFByb21pc2U8TmVvblN3YXJtU2ltdWxhdGlvbj4ge1xuICBzaW0gPz89IGF3YWl0IE5lb25Td2FybVNpbXVsYXRpb24uY3JlYXRlKHsgbW9kZTogXCJsYWJcIiwgY2FudmFzLCBzdGFnZUVsZW1lbnQ6IHN0YWdlIH0pO1xuICByZXR1cm4gc2ltO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFNpbXVsYXRpb24oaW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhY3RpdmVTY2VuYXJpb0lkeCA9IGluZGV4O1xuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaW11bGF0b3ItYWN0aXZlXCIpO1xuICBzaW11bGF0b3JQYW5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gIHNpbVRpdGxlLnRleHRDb250ZW50ID0gYXNzZXJ0aW9uc1tpbmRleF1bMF07XG4gIGF3YWl0IGVuc3VyZVNpbXVsYXRpb24oKTtcbiAgcmVzZXRTaW11bGF0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2ltdWxhdGlvbigpOiB2b2lkIHtcbiAgaWYgKCFzaW0pIHJldHVybjtcbiAgc2ltLnN0b3BMb29wKCk7XG4gIHNpbS5yZXNldCh7IHNpbGVudDogdHJ1ZSB9KTtcbiAgc2ltLmVxdWlwR3VuKFwicHVsc2VQaXN0b2xcIiwgMSk7XG4gIGNvbnN0IGxhbmUgPSAwO1xuICBjb25zdCBjZW50ZXIgPSBzaW0ubGFuZVgobGFuZSk7XG4gIGlmIChhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMCB8fCBhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMSB8fCBhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMiB8fCBhY3RpdmVTY2VuYXJpb0lkeCA9PT0gMykge1xuICAgIHNpbS5zcGF3bkVuZW15KHsgZW5lbXlJZDogXCJiYXNpY09yYlwiLCBsYW5lLCB4OiBjZW50ZXIgLSAzMCwgeTogMzIwLCBoZWFsdGg6IDEsIHBsYXlTb3VuZDogZmFsc2UgfSk7XG4gICAgc2ltLnNwYXduRW5lbXkoeyBlbmVteUlkOiBcImJhc2ljT3JiXCIsIGxhbmUsIHg6IGNlbnRlciArIDMwLCB5OiAzMjAsIGhlYWx0aDogMSwgcGxheVNvdW5kOiBmYWxzZSB9KTtcbiAgfVxuICBpZiAoYWN0aXZlU2NlbmFyaW9JZHggPT09IDMpIHNpbS5zcGF3bkVuZW15KHsgZW5lbXlJZDogXCJiYXNpY09yYlwiLCBsYW5lLCB4OiBjZW50ZXIsIHk6IDIwMCwgaGVhbHRoOiAxLCBwbGF5U291bmQ6IGZhbHNlIH0pO1xuICBpc1BhdXNlZCA9IGZhbHNlO1xuICBwYXVzZUJ0bi50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcbiAgc2ltU3RhdHVzVGV4dC50ZXh0Q29udGVudCA9IFwiUEFTU0VEXCI7XG4gIHNpbVN0YXR1c1RleHQuY2xhc3NOYW1lID0gXCJzaW0tc3RhdHVzXCI7XG4gIHVwZGF0ZURldGFpbHMoKTtcbiAgc2ltLnN0YXJ0TG9vcCgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEZXRhaWxzKCk6IHZvaWQge1xuICBpZiAoIXNpbSkgcmV0dXJuO1xuICBjb25zdCBzbmFwc2hvdCA9IHNpbS5zbmFwc2hvdCgpO1xuICBzaW1EZXRhaWxzLmlubmVySFRNTCA9IGBcbiAgICA8ZHQ+U2NlbmFyaW88L2R0PjxkZD4ke2Fzc2VydGlvbnNbYWN0aXZlU2NlbmFyaW9JZHhdWzBdfTwvZGQ+XG4gICAgPGR0PlNxdWFkIFBvc2l0aW9uPC9kdD48ZGQ+eDogJHtzbmFwc2hvdC5zcXVhZC54LnRvRml4ZWQoMCl9LCBhaW06ICR7c25hcHNob3Quc3F1YWQuYWltT2Zmc2V0LnRvRml4ZWQoMCl9PC9kZD5cbiAgICA8ZHQ+RW5lbWllczwvZHQ+PGRkPiR7c25hcHNob3QuZW5lbWllcy5sZW5ndGh9PC9kZD5cbiAgICA8ZHQ+VGltZSBFbGFwc2VkPC9kdD48ZGQ+JHtzbmFwc2hvdC5jb21iYXROb3cudG9GaXhlZCgwKX0gbXM8L2RkPlxuICAgIDxkdD5TdGF0dXM8L2R0PjxkZD5TaGFyZWQgcnVudGltZSByZXBsYXk8L2RkPlxuICBgO1xufVxuXG53aW5kb3cuc2V0SW50ZXJ2YWwodXBkYXRlRGV0YWlscywgMTUwKTtcbmNsb3NlU2ltQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNpbT8uc3RvcExvb3AoKTtcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2ltdWxhdG9yLWFjdGl2ZVwiKTtcbiAgc2ltdWxhdG9yUGFuZWwuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbn0pO1xucmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldFNpbXVsYXRpb24pO1xucGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaXNQYXVzZWQgPSAhaXNQYXVzZWQ7XG4gIHBhdXNlQnRuLnRleHRDb250ZW50ID0gaXNQYXVzZWQgPyBcIlJlc3VtZVwiIDogXCJQYXVzZVwiO1xuICBpZiAoaXNQYXVzZWQpIHNpbT8uc3RvcExvb3AoKTtcbiAgZWxzZSBzaW0/LnN0YXJ0TG9vcCgpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQU8sSUFBTSxjQUFjO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUNaOzs7QUNPQSxJQUFNLFVBQVUsQ0FBQyxPQUFlLFdBQVcsQ0FBQyxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxNQUNwRSxNQUFNLEtBQUssRUFBRSxRQUFRLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUN0QyxRQUFNLFFBQVEsV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzNDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3BELENBQUM7QUFFSCxJQUFNLE9BQU8sQ0FBQyxRQUFnQixRQUFRLE1BQUssV0FBVyxDQUFDLEtBQUssS0FBSyxNQUMvRCxNQUFNLEtBQUssRUFB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TUFBSSxLQUFJLEdBQUcsQ0FBQyxLQUFHLEtBQUksR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDM1AsS0FBSyxVQUFVLHNCQUFzQixzQkFBc0IsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxNQUFJLEdBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssR0FBRSxHQUFHLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDM0wsS0FBSyxVQUFVLHVCQUF1Qix1QkFBdUIsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFHLENBQUMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBTSxLQUFJLEdBQUcsQ0FBQyxPQUFLLEtBQUksR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsUUFBTSxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDOVAsS0FBSyxVQUFVLDBCQUEwQiwwQkFBMEIsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxLQUFHLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsS0FBRyxJQUFHLEdBQUcsQ0FBQyxNQUFJLENBQUMs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SSxHQUFFLENBQUMsR0FBRyxNQUFNO0FBQUEsRUFDckgsS0FBSyxXQUFXLGlCQUFpQixTQUFTLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxLQUFLO0FBQUEsRUFDdEssS0FBSyxXQUFXLGlCQUFpQixTQUFTLFNBQVMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLEtBQUcsSUFBRSxHQUFFLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDeEcsS0FBSyxXQUFXLGdCQUFnQixRQUFRLEtBQUssR0FBRSxJQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNsRixLQUFLLFdBQVcsYUFBYSxVQUFVLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsT0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNO0FBQUEsRUFDMUosS0FBSyxXQUFXLGdCQUFnQixRQUFRLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFFLENBQUMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1MMUIsU0FBUyxLQUFLQyxNQUErQztBQUMzRCxRQUFNLFFBQVFBLEtBQUksUUFBUSxL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QUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLG1CQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLG1CQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLG1CQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLG1CQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLG1CQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLG1CQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ1NNLElBQU0sU0FBUztBQUFBLEVBQ3BCLGtCQUFrQkM7QUFBQSxFQUNsQixrQkFBa0JBO0FBQUEsRUFDbEIsa0JBQWtCQTtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLFlBQVlBO0FBQUEsRUFDWixZQUFZQTtBQUFBLEVBQ1osbUJBQW1CQTtBQUFBLEVBQ25CLG1CQUFtQkE7QUFBQSxFQUNuQixtQkFBbUJBO0FBQUEsRUFDbkIsaUJBQWlCQTtBQUFBLEVBQ2pCLGlCQUFpQkE7QUFBQSxFQUNqQixpQkFBaUJBO0FBQUEsRUFDakIsaUJBQWlCQTtBQUFBLEVBQ2pCLGlCQUFpQkE7QUFBQSxFQUNqQixpQkFBaUJBO0FBQ25CO0FBRU8sSUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixhQUFhO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixhQUFhLEVBQUUsU0FBUyxXQUFXO0FBQUEsSUFDbkMsVUFBVSxDQUFDLGtCQUFrQixrQkFBa0IsZ0JBQWdCO0FBQUEsRUFDakU7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLGFBQWEsRUFBRSxTQUFTLFNBQVM7QUFBQSxJQUNqQyxVQUFVLENBQUMsWUFBWSxZQUFZLFVBQVU7QUFBQSxFQUMvQztBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsYUFBYSxFQUFFLFNBQVMsZUFBZTtBQUFBLElBQ3ZDLFVBQVUsQ0FBQyxtQkFBbUIsbUJBQW1CLGlCQUFpQjtBQUFBLEVBQ3BFO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixhQUFhLEVBQUUsU0FBUyxhQUFhO0FBQUEsSUFDckMsVUFBVSxDQUFDLGlCQUFpQixpQkFBaUIsZUFBZTtBQUFBLEVBQzlEO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixhQUFhLEVBQUUsU0FBUyxhQUFhO0FBQUEsSUFDckMsVUFBVSxDQUFDLGlCQUFpQixpQkFBaUIsZUFBZTtBQUFBLEVBQzlEO0FBQ0Y7OztBQzVETyxJQUFNLHdCQUFOLGNBQW9DLGlCQUE4QztBQUFBLEVBQzlFLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUVwQixjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDdEQsMkJBQXFCLE1BQU0sVUFBVTtBQUNyQyxXQUFLLFFBQVEsb0JBQW9CLE1BQU0sWUFBWSxPQUFPLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUFBLElBQy9GO0FBQ0EsZUFBVyxDQUFDLElBQUksTUFBTSxLQUFLLE9BQU8sUUFBUSxLQUFLLFFBQVEsR0FBRztBQUN4RCxXQUFLLFFBQVEsT0FBTyxTQUFTLFNBQVMsR0FBRyxHQUFHLEVBQUUsbUNBQW1DO0FBQ2pGLFdBQUssUUFBUSxvQkFBb0IsT0FBTyxZQUFZLE9BQU8sR0FBRyxHQUFHLEVBQUUsMkJBQTJCO0FBQzlGLGlCQUFXLFdBQVcsT0FBTyxVQUFVO0FBQ3JDLGFBQUssUUFBUSxXQUFXLEtBQUssU0FBUyxHQUFHLEVBQUUsOEJBQThCLE9BQU8sSUFBSTtBQUNwRixhQUFLLFFBQVEsS0FBSyxRQUFRLE9BQU8sRUFBRSxZQUFZLFlBQVksT0FBTyxZQUFZLFNBQVMsR0FBRyxPQUFPLGlCQUFpQixFQUFFLFNBQVM7QUFBQSxNQUMvSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLGNBQWMsSUFBSSxzQkFBc0I7OztBQ3VDOUMsSUFBTSxnQkFBTixNQUFvQjtBQUFBLEVBQ2hCLGNBQStCLENBQUM7QUFBQSxFQUNoQyxVQUF1QixDQUFDO0FBQUEsRUFDekIsbUJBQXNDLENBQUM7QUFBQSxFQUN2QyxXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFFdkIsUUFBYztBQUNaLFNBQUssWUFBWSxTQUFTO0FBQzFCLFNBQUssUUFBUSxTQUFTO0FBQ3RCLFNBQUssaUJBQWlCLFNBQVM7QUFBQSxFQUNqQztBQUFBLEVBRUEsS0FBSyxLQUFnQkMsUUFBaUIsTUFBYyxTQUE4QyxLQUFhLFFBQVEsR0FBUztBQUM5SCxhQUFTLGFBQWEsR0FBRyxhQUFhQSxPQUFNLFlBQVksY0FBYztBQUNwRSxXQUFLLGlCQUFpQixLQUFLO0FBQUEsUUFDekIsU0FBUyxNQUFNLGFBQWFBLE9BQU07QUFBQSxRQUNsQztBQUFBLFFBQUssT0FBQUE7QUFBQSxRQUFPO0FBQUEsUUFBTSxTQUFTLFFBQVEsSUFBSSxhQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUU7QUFBQSxRQUFHO0FBQUEsTUFDckUsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFFQSxhQUFhLEtBQXFCO0FBQ2hDLFFBQUksUUFBUTtBQUNaLFVBQU0sTUFBTSxLQUFLLGlCQUFpQixPQUFPLFlBQVUsT0FBTyxXQUFXLEdBQUc7QUFDeEUsU0FBSyxtQkFBbUIsS0FBSyxpQkFBaUIsT0FBTyxZQUFVLE9BQU8sVUFBVSxHQUFHO0FBQ25GLGVBQVcsVUFBVSxLQUFLO0FBQ3hCLFdBQUssWUFBWSxRQUFRLEdBQUc7QUFDNUI7QUFBQSxJQUNGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLGtCQUNFLE9BQ0EsS0FDQSxTQUNBLFFBQ0EsT0FDTTtBQUNOLGVBQVcsY0FBYyxDQUFDLEdBQUcsS0FBSyxXQUFXLEdBQUc7QUFDOUMsaUJBQVcsS0FBSyxXQUFXLEtBQUs7QUFDaEMsaUJBQVcsS0FBSyxXQUFXLEtBQUs7QUFDaEMsVUFBSSxXQUFXLElBQUksT0FBTyxPQUFPLFdBQVcsS0FBSyxPQUFPLFFBQVEsY0FBYyxXQUFXLEtBQUssT0FBTyxTQUFTLFdBQVc7QUFDdkgsYUFBSyxpQkFBaUIsVUFBVTtBQUNoQztBQUFBLE1BQ0Y7QUFDQSxpQkFBVyxVQUFVLFNBQVM7QUFDNUIsWUFBSSxPQUFPLFNBQVMsV0FBVyxTQUFTLE9BQU8sUUFBUSxXQUFXLFlBQVksSUFBSSxPQUFPLEVBQUUsRUFBRztBQUM5RixjQUFNLEtBQUssV0FBVyxJQUFJLE9BQU87QUFDakMsY0FBTSxLQUFLLFdBQVcsSUFBSSxPQUFPO0FBQ2pDLGNBQU0sWUFBWSxXQUFXLFNBQVMsT0FBTztBQUM3QyxZQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxVQUFXO0FBQy9DLG1CQUFXLFlBQVksSUFBSSxPQUFPLEVBQUU7QUFDcEMsZUFBTyxVQUFVLFdBQVc7QUFDNUIsZUFBTyxLQUFLLFdBQVc7QUFDdkIsYUFBSyxRQUFRLEtBQUs7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixPQUFPLFdBQVc7QUFBQSxVQUNsQixHQUFHLFdBQVc7QUFBQSxVQUFHLEdBQUcsV0FBVztBQUFBLFVBQy9CLE9BQU8sV0FBVztBQUFBLFVBQU8sZ0JBQWdCLFdBQVc7QUFBQSxVQUNwRCxRQUFRLFdBQVcsU0FBUyxXQUFXLGdCQUFnQjtBQUFBLFVBQ3ZELFdBQVcsTUFBTSxXQUFXO0FBQUEsVUFDNUIsVUFBVSxXQUFXO0FBQUEsVUFDckIsTUFBTSxXQUFXO0FBQUEsUUFDbkIsQ0FBQztBQUNELGNBQU0sWUFBWSxNQUFNO0FBQ3hCLFlBQUksV0FBVyxrQkFBa0IsRUFBRyxZQUFXO0FBQUEsWUFDMUMsTUFBSyxpQkFBaUIsVUFBVTtBQUNyQyxZQUFJLENBQUMsS0FBSyxZQUFZLFNBQVMsVUFBVSxFQUFHO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQ0EsZUFBVyxVQUFVLENBQUMsR0FBRyxLQUFLLE9BQU8sR0FBRztBQUN0QyxVQUFJLE9BQU8sYUFBYSxJQUFLLE1BQUssUUFBUSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQUEsSUFDbEY7QUFBQSxFQUNGO0FBQUEsRUFFQSx1QkFBd0M7QUFDdEMsV0FBTyxLQUFLLFlBQVksUUFBUSxnQkFBYyxJQUFJLGVBQWU7QUFBQSxNQUMvRCxHQUFHLFdBQVc7QUFBQSxNQUFHLEdBQUcsV0FBVztBQUFBLE1BQy9CLFdBQVcsV0FBVztBQUFBLE1BQUksV0FBVyxXQUFXO0FBQUEsTUFDaEQsUUFBUSxXQUFXO0FBQUEsTUFDbkIsUUFBUSxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQ3ZDLGFBQWEsV0FBVztBQUFBLE1BQ3hCLFlBQVksS0FBSyxJQUFJLFdBQVcsU0FBUyxXQUFXLGlCQUFpQixHQUFHO0FBQUEsTUFDeEUsT0FBTyxXQUFXO0FBQUEsTUFDbEIsWUFBWSxXQUFXO0FBQUEsTUFDdkIsV0FBVyxXQUFXO0FBQUEsTUFDdEIsT0FBTyxXQUFXO0FBQUEsTUFDbEIsV0FBVyxXQUFXLG1CQUFtQixXQUFXLFNBQVMsT0FBTztBQUFBLE1BQ3BFLE1BQU0sV0FBVyxTQUFTLE1BQU07QUFBQSxJQUNsQyxDQUFDLEVBQUUsV0FBVyxDQUFDO0FBQUEsRUFDakI7QUFBQSxFQUVRLFlBQVksUUFBeUIsS0FBbUI7QUFDOUQsVUFBTSxFQUFFLEtBQUssT0FBQUEsUUFBTyxNQUFNLFNBQVMsTUFBTSxJQUFJO0FBQzdDLGVBQVcsVUFBVSxTQUFTO0FBQzVCLFlBQU0sUUFBUSxLQUFLLElBQUksR0FBR0EsT0FBTSxlQUFlO0FBQy9DLGVBQVMsUUFBUSxHQUFHLFFBQVEsT0FBTyxTQUFTO0FBQzFDLGNBQU0sZUFBZSxVQUFVLElBQUksS0FBSyxTQUFTLFFBQVEsS0FBSyxPQUFNQSxPQUFNO0FBQzFFLGNBQU0sUUFBUSxlQUFlLEtBQUssS0FBSztBQUN2QyxjQUFNLFFBQVFBLE9BQU0sa0JBQWtCO0FBQ3RDLGFBQUs7QUFDTCxhQUFLLFlBQVksS0FBSztBQUFBLFVBQ3BCLElBQUksRUFBRSxLQUFLO0FBQUEsVUFBVTtBQUFBLFVBQ3JCLEdBQUcsT0FBTyxLQUFLLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLGVBQWUsbUJBQW1CO0FBQUEsVUFDOUUsR0FBRyxPQUFPO0FBQUEsVUFDVixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUk7QUFBQSxVQUN0QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSTtBQUFBLFVBQ3ZCLFFBQVFBLE9BQU0sbUJBQW1CO0FBQUEsVUFDakMsUUFBUUEsT0FBTTtBQUFBLFVBQ2QsaUJBQWlCQSxPQUFNO0FBQUEsVUFDdkIsT0FBTyxZQUFZLElBQUksZUFBZSxlQUFlO0FBQUEsVUFDckQsWUFBWSxZQUFZLElBQUksZUFBZSxVQUFVO0FBQUEsVUFDckQsV0FBVyxZQUFZLElBQUksZUFBZSxTQUFTO0FBQUEsVUFDbkQsUUFBUSxJQUFJLGVBQWU7QUFBQSxVQUMzQixpQkFBaUIsSUFBSSxlQUFlO0FBQUEsVUFDcEMsaUJBQWlCLElBQUksZUFBZTtBQUFBLFVBQ3BDLE9BQU8sSUFBSSxlQUFlO0FBQUEsVUFDMUIsY0FBYyxJQUFJLGVBQWU7QUFBQSxVQUNqQyxrQkFBa0IsSUFBSSxlQUFlO0FBQUEsVUFDckMsYUFBYUEsT0FBTSxjQUFjO0FBQUEsVUFDakMsUUFBUUEsT0FBTSxxQkFBcUIsS0FBSyxLQUFLLGVBQWVBLE9BQU0sdUJBQXVCO0FBQUEsVUFDekYsV0FBV0EsT0FBTSxZQUFZO0FBQUEsVUFDN0IsZUFBZUEsT0FBTTtBQUFBLFVBQ3JCLGFBQWEsb0JBQUksSUFBSTtBQUFBLFFBQ3ZCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUNBLFNBQUssUUFBUSxLQUFLO0FBQUEsTUFDaEIsTUFBTTtBQUFBLE1BQVUsT0FBTyxJQUFJLGVBQWU7QUFBQSxNQUMxQyxHQUFHLFFBQVEsT0FBTyxDQUFDLEtBQUssV0FBVyxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksUUFBUTtBQUFBLE1BQ2hFLEdBQUcsUUFBUSxDQUFDLEdBQUcsS0FBSztBQUFBLE1BQ3BCLE9BQU8sWUFBWSxJQUFJLGVBQWUsZUFBZTtBQUFBLE1BQ3JELGdCQUFnQixZQUFZLElBQUksZUFBZSxVQUFVO0FBQUEsTUFDekQsUUFBUSxLQUFLQSxPQUFNLG1CQUFtQjtBQUFBLE1BQ3RDLFdBQVcsTUFBTSxJQUFJLGVBQWU7QUFBQSxNQUNwQyxVQUFVLElBQUksZUFBZTtBQUFBLE1BQzdCLE1BQU0sS0FBSztBQUFBLElBQ2IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVRLGlCQUFpQixZQUFpQztBQUN4RCxVQUFNLFFBQVEsS0FBSyxZQUFZLFFBQVEsVUFBVTtBQUNqRCxRQUFJLFNBQVMsRUFBRyxNQUFLLFlBQVksT0FBTyxPQUFPLENBQUM7QUFBQSxFQUNsRDtBQUNGOzs7QUNqSk8sU0FBUyxtQkFDZCxTQUNBLE1BQ2dCO0FBQ2hCLFFBQU0sRUFBRSxRQUFRLE1BQU0sT0FBTyx1QkFBdUIsT0FBTyxZQUFZLFdBQVcsSUFBSTtBQUN0RixRQUFNLFVBQVUsUUFBUTtBQUN4QixRQUFNQyxXQUEwQixDQUFDO0FBRWpDLGFBQVcsVUFBVSxTQUFTO0FBQzVCLFFBQUksT0FBTyxNQUFPO0FBQ2xCLFFBQUksQ0FBQyx3QkFBd0IsT0FBTyxTQUFTLEtBQU07QUFDbkQsUUFBSSxZQUFZLElBQUksT0FBTyxFQUFFLEVBQUc7QUFDaEMsVUFBTSxLQUFLLE9BQU8sSUFBSSxPQUFPO0FBQzdCLFVBQU0sS0FBSyxPQUFPLElBQUksT0FBTztBQUM3QixVQUFNLFNBQVMsS0FBSyxLQUFLLEtBQUs7QUFDOUIsUUFBSSxTQUFTLFFBQVM7QUFDdEIsSUFBQUEsU0FBUSxLQUFLLEVBQUUsUUFBUSxVQUFVLEtBQUssS0FBSyxNQUFNLEVBQUUsQ0FBQztBQUFBLEVBQ3REO0FBRUEsRUFBQUEsU0FBUSxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVE7QUFFOUMsU0FBTyxlQUFlLFNBQVlBLFNBQVEsTUFBTSxHQUFHLFVBQVUsSUFBSUE7QUFDbkU7OztBQ3ZETyxJQUFNLGNBQU4sTUFBa0I7QUFBQSxFQUN2QjtBQUFBO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFFUyxzQkFBc0Isb0JBQUksSUFBWTtBQUFBLEVBRS9DLFlBQVksVUFBb0IsWUFBb0I7QUFDbEQsU0FBSyxXQUFXO0FBQ2hCLFNBQUssVUFBVTtBQUNmLFNBQUssZUFBZTtBQUNwQixTQUFLLGdCQUFnQjtBQUNyQixTQUFLLG1CQUFtQjtBQUN4QixTQUFLLGVBQWUsQ0FBQztBQUFBLEVBQ3ZCO0FBQ0Y7QUFtQk8sU0FBUyxxQkFDZCxPQUNBLFFBQ0EsUUFDQSxTQUNBLFNBQ0EsS0FDQSxRQUFRLEdBQ2E7QUFDckIsUUFBTSxTQUE4QjtBQUFBLElBQ2xDLFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLEVBQ2xCO0FBQ0EsTUFBSSxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsSUFBSSxPQUFPLEVBQUUsRUFBRyxRQUFPO0FBQ3JFLFFBQU0sU0FBUyxPQUFPLFNBQVMsUUFBUSxPQUFPO0FBQzlDLFFBQU0sS0FBSyxPQUFPLElBQUk7QUFDdEIsUUFBTSxLQUFLLE9BQU8sSUFBSTtBQUN0QixNQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssU0FBUyxPQUFRLFFBQU87QUFFaEQsU0FBTyxZQUFZO0FBQ25CLFFBQU0sb0JBQW9CLElBQUksT0FBTyxFQUFFO0FBQ3ZDLE1BQUksTUFBTSxXQUFXLEVBQUcsUUFBTztBQUUvQixRQUFNLFdBQVcsS0FBSyxJQUFJLE1BQU0sU0FBUyxPQUFPLE1BQU07QUFDdEQsUUFBTSxXQUFXO0FBQ2pCLFNBQU8sVUFBVTtBQUNqQixRQUFNLGdCQUFnQixNQUFNO0FBQzVCLFFBQU0sbUJBQW1CO0FBQ3pCLFFBQU0sZUFBZSxPQUFPO0FBQzVCLFNBQU8sV0FBVztBQUNsQixTQUFPLGlCQUFpQjtBQUN4QixTQUFPLGlCQUFpQixPQUFPLFVBQVU7QUFDekMsU0FBTztBQUNUO0FBK0NPLFNBQVMsV0FDZCxPQUNBLFFBQ0EsU0FDQSxTQUNBLFNBQ0EsS0FDQSxPQUNrQjtBQUNsQixRQUFNLFNBQTJCO0FBQUEsSUFDL0IsdUJBQXVCLENBQUM7QUFBQSxJQUN4QixxQkFBcUI7QUFBQSxJQUNyQixjQUFjLENBQUM7QUFBQSxJQUNmLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLGNBQWMsQ0FBQztBQUFBLElBQ2YsY0FBYztBQUFBLEVBQ2hCO0FBR0EsTUFBSSxNQUFNLGVBQWUsRUFBRyxPQUFNLGVBQWUsS0FBSyxJQUFJLEdBQUcsTUFBTSxlQUFlLEtBQUs7QUFHdkYsYUFBVyxTQUFTLE1BQU0sY0FBYztBQUN0QyxVQUFNLFlBQVksTUFBTSxNQUFNLGFBQWEsTUFBTTtBQUFBLEVBQ25EO0FBQ0EsUUFBTSxlQUFlLE1BQU0sYUFBYSxPQUFPLE9BQUssRUFBRSxXQUFXLENBQUM7QUFHbEUsTUFBSSxNQUFNLGdCQUFnQixHQUFHO0FBQzNCLFVBQU0sbUJBQW1CLEtBQUssSUFBSSxJQUFJLE9BQU8sTUFBTSxnQkFBZ0IsUUFBUSxHQUFHO0FBQUEsRUFDaEY7QUFHQSxNQUFJLE9BQU8sU0FBUyxZQUFZLE1BQU0saUJBQWlCLEtBQUssTUFBTSxVQUFVLE9BQU8sWUFBWTtBQUM3RixVQUFNLFVBQVUsT0FBTztBQUFBLEVBQ3pCO0FBRUEsTUFBSSxRQUFRLFdBQVcsRUFBRyxRQUFPO0FBS2pDLE1BQUksT0FBTztBQUNULFdBQU8sc0JBQXNCLE9BQU87QUFDcEMsZUFBVyxFQUFFLE9BQU8sS0FBSyxTQUFTO0FBQ2hDLGFBQU8sc0JBQXNCLEtBQUssT0FBTyxFQUFFO0FBQUEsSUFDN0M7QUFBQSxFQUNGO0FBS0EsTUFBSSxPQUFPO0FBQ1QsV0FBTyxpQkFBaUIsT0FBTztBQUMvQixlQUFXLEVBQUUsT0FBTyxLQUFLLFNBQVM7QUFDaEMsYUFBTyxhQUFhLEtBQUssT0FBTyxFQUFFO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBS0EsTUFBSSxPQUFPO0FBRVQsVUFBTSxlQUFlLE9BQU87QUFDNUIsVUFBTSxRQUEyQjtBQUFBLE1BQy9CLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLEdBQUc7QUFBQSxNQUNILEdBQUc7QUFBQSxNQUNILFdBQVcsT0FBTyxTQUFTO0FBQUEsTUFDM0IsT0FBTztBQUFBO0FBQUEsSUFDVDtBQUNBLFVBQU0sYUFBYSxLQUFLLEtBQUs7QUFDN0IsV0FBTyxlQUFlLE9BQU87QUFDN0IsZUFBVyxFQUFFLE9BQU8sS0FBSyxTQUFTO0FBQ2hDLGFBQU8sYUFBYSxLQUFLLE9BQU8sRUFBRTtBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUVBLFNBQU87QUFDVDs7O0FDN01PLElBQU0sYUFBTixNQUFpQjtBQUFBLEVBQ3RCO0FBQUE7QUFBQSxFQUVBO0FBQUE7QUFBQSxFQUVBO0FBQUE7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBLFlBQVksU0FBa0JDLFNBQVEsR0FBRztBQUN2QyxTQUFLLFVBQVU7QUFDZixTQUFLLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNQSxNQUFLLENBQUMsQ0FBQztBQUN2RCxTQUFLLGVBQWU7QUFDcEIsU0FBSyxjQUFjO0FBQ25CLFNBQUssb0JBQW9CO0FBQ3pCLFNBQUssZ0JBQWdCLENBQUMsQ0FBQztBQUN2QixTQUFLLGdCQUFnQixDQUFDLElBQUk7QUFDMUIsU0FBSyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzVCLFNBQUssMEJBQTBCO0FBQUEsRUFDakM7QUFBQSxFQUVBLFVBQVUsT0FBcUI7QUFDN0IsVUFBTSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxLQUFLLENBQUM7QUFDNUMsV0FBTyxLQUFLLGNBQWMsU0FBUyxPQUFRLE1BQUssY0FBYyxLQUFLLENBQUM7QUFDcEUsV0FBTyxLQUFLLGNBQWMsU0FBUyxPQUFRLE1BQUssY0FBYyxLQUFLLElBQUk7QUFDdkUsV0FBTyxLQUFLLG1CQUFtQixTQUFTLE9BQVEsTUFBSyxtQkFBbUIsS0FBSyxDQUFDO0FBQzlFLFNBQUssY0FBYyxTQUFTO0FBQzVCLFNBQUssY0FBYyxTQUFTO0FBQzVCLFNBQUssbUJBQW1CLFNBQVM7QUFDakMsU0FBSyxlQUFlLEtBQUssSUFBSSxHQUFHLEtBQUssYUFBYTtBQUNsRCxTQUFLLGNBQWMsS0FBSyxjQUFjLEtBQUssT0FBTyxLQUFLO0FBQ3ZELFNBQUssb0JBQW9CLEtBQUssbUJBQW1CLENBQUMsS0FBSztBQUFBLEVBQ3pEO0FBQ0Y7QUFxQkEsU0FBUyxjQUNQLFNBQ0EsTUFDQSxZQUNBLFVBQ2dCO0FBQ2hCLE1BQUksUUFBUSxXQUFXLEVBQUcsUUFBTyxDQUFDO0FBQ2xDLE1BQUksV0FBVyxLQUFLLFFBQVEsQ0FBQyxFQUFFLE9BQU8sVUFBVSxRQUFXO0FBQ3pELFVBQU0sWUFBWSxRQUFRLENBQUMsRUFBRSxPQUFPO0FBQ3BDLFVBQU0sT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLFFBQ3RCLElBQUksWUFBVSxPQUFPLE9BQU8sS0FBSyxFQUNqQyxPQUFPLFdBQVMsVUFBVSxNQUFTLENBQUMsQ0FBQyxFQUNyQyxLQUFLLENBQUMsR0FBRyxNQUFNLEtBQUssSUFBSSxJQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxTQUFTLENBQUMsRUFDaEUsTUFBTSxHQUFHLFFBQVE7QUFDcEIsV0FBTyxRQUNKLE9BQU8sWUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFhLEtBQUssU0FBUyxPQUFPLE9BQU8sS0FBSyxDQUFDLEVBQ3hGLE1BQU0sR0FBRyxVQUFVO0FBQUEsRUFDeEI7QUFFQSxVQUFRLE1BQU07QUFBQSxJQUNaLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFFSCxhQUFPLFFBQVEsTUFBTSxHQUFHLFVBQVU7QUFBQSxJQUVwQyxLQUFLO0FBRUgsYUFBTyxDQUFDLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxPQUFPLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFNLEdBQUcsVUFBVTtBQUFBLElBRWpGLEtBQUs7QUFFSCxhQUFPLFFBQVEsTUFBTSxHQUFHLFVBQVU7QUFBQSxJQUVwQztBQUNFLGFBQU8sUUFBUSxNQUFNLEdBQUcsVUFBVTtBQUFBLEVBQ3RDO0FBQ0Y7QUFFQSxTQUFTLGNBQWMsT0FBb0JBLFFBQXVCO0FBQ2hFLE1BQUksQ0FBQyxNQUFNLFNBQVUsUUFBTztBQUM1QixRQUFNLGVBQWUsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNQSxNQUFLLENBQUMsQ0FBQztBQUMvRCxRQUFNLFlBQVksZUFBZSxLQUFLO0FBQ3RDLFNBQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxVQUFVLE1BQU0sU0FBUyxTQUFTLE1BQU0sU0FBUyxVQUFVLFFBQVE7QUFDdEc7QUFFQSxTQUFTLFlBQVksT0FBb0JBLFFBQXVCO0FBQzlELE1BQUksTUFBTSxtQkFBbUIsT0FBVyxRQUFPLE1BQU07QUFDckQsUUFBTSxlQUFlLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTUEsTUFBSyxDQUFDLENBQUM7QUFDL0QsUUFBTSxZQUFZLGVBQWUsS0FBSztBQUN0QyxTQUFPLE1BQU0sVUFBVSxNQUFNLGlCQUFpQixNQUFNLFVBQVU7QUFDaEU7QUFrQk8sU0FBUyxVQUNkLE9BQ0EsT0FDQSxTQUNBLFNBQ0EsU0FDQSxLQUNBLE9BQ0EsT0FDQSxtQkFBbUIsTUFBTSxpQkFDekIsYUFBYSxHQUNiLHNCQUFzQixLQUNMO0FBQ2pCLFFBQU0sU0FBMEI7QUFBQSxJQUM5QixhQUFhLENBQUM7QUFBQSxJQUNkLFlBQVksQ0FBQztBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1IsZ0JBQWdCO0FBQUEsRUFDbEI7QUFFQSxRQUFNLFVBQVUsVUFBVTtBQUUxQixXQUFTLE9BQU8sR0FBRyxPQUFPLE1BQU0sY0FBYyxRQUFRLFFBQVE7QUFDNUQsUUFBSSxNQUFNLGNBQWMsSUFBSSxJQUFJLEVBQUcsT0FBTSxjQUFjLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxNQUFNLGNBQWMsSUFBSSxJQUFJLEtBQUs7QUFDNUcsVUFBTSxRQUFRLE1BQU0sY0FBYyxJQUFJO0FBQ3RDLFFBQUksT0FBTztBQUNULFlBQU0sWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNO0FBQ2pELFVBQUksTUFBTSxZQUFZLEVBQUcsT0FBTSxjQUFjLElBQUksSUFBSTtBQUFBLElBQ3ZEO0FBQUEsRUFDRjtBQUNBLFFBQU0sZUFBZSxLQUFLLElBQUksR0FBRyxNQUFNLGFBQWE7QUFDcEQsUUFBTSxjQUFjLE1BQU0sY0FBYyxLQUFLLE9BQU8sS0FBSztBQUl6RCxNQUFJLFFBQVEsV0FBVyxFQUFHLFFBQU87QUFFakMsTUFBSSxZQUFZLENBQUMsR0FBRyxPQUFPO0FBQzNCLFFBQU0sU0FBUyxZQUFZLE9BQU8sTUFBTSxLQUFLO0FBQzdDLFdBQVMsT0FBTyxHQUFHLE9BQU8sTUFBTSxjQUFjLFVBQVUsVUFBVSxTQUFTLEdBQUcsUUFBUTtBQUNwRixRQUFJLE1BQU0sY0FBYyxTQUFTLEtBQUssTUFBTSxNQUFNLHdCQUF5QjtBQUMzRSxRQUFJLE1BQU0sY0FBYyxJQUFJLElBQUksRUFBRztBQUNuQyxVQUFNLFdBQVcsY0FBYyxXQUFXLE1BQU0sZUFBZSxNQUFNLFlBQVksY0FBYyxPQUFPLE1BQU0sS0FBSyxDQUFDO0FBQ2xILFFBQUksU0FBUyxXQUFXLEVBQUc7QUFDM0IsVUFBTSxPQUFlLE1BQU0sbUJBQW1CLElBQUksTUFBTSxLQUFLLElBQUk7QUFDakUsVUFBTSxtQkFBbUIsSUFBSSxJQUFJO0FBQ2pDLFVBQU0sb0JBQW9CO0FBQzFCLFVBQU0sY0FBYyxJQUFJLElBQUksTUFBTTtBQUNsQyxRQUFJLE1BQU0sY0FBYyxTQUFTLEVBQUcsT0FBTSwwQkFBMEIsTUFBTTtBQUMxRSxXQUFPLGlCQUFpQjtBQUN4QixXQUFPLFNBQVM7QUFDaEIsZUFBVyxFQUFFLE9BQU8sS0FBSyxVQUFVO0FBQ2pDLGFBQU8sWUFBWSxLQUFLLE9BQU8sRUFBRTtBQUNqQyxhQUFPLFdBQVcsS0FBSyxFQUFFLElBQUksT0FBTyxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFBQSxJQUNwRTtBQUNBLFVBQU0sY0FBYyxJQUFJLElBQUk7QUFBQSxNQUMxQixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixHQUFHO0FBQUEsTUFDSCxHQUFHO0FBQUEsTUFDSCxjQUFjLFNBQVMsSUFBSSxDQUFDLEVBQUUsT0FBTyxPQUFPLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxPQUFPLEVBQUUsRUFBRTtBQUFBLE1BQ3pFO0FBQUEsTUFDQSxPQUFPLE1BQU0sUUFBUTtBQUFBLE1BQ3JCLFlBQVksTUFBTTtBQUFBLE1BQ2xCO0FBQUEsTUFDQSxXQUFXLE1BQU07QUFBQSxJQUNuQjtBQUNBLFVBQU0sY0FBYyxJQUFJLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxPQUFPLE1BQU0sT0FBTyxFQUFFLENBQUM7QUFDbkUsZ0JBQVksVUFBVSxPQUFPLENBQUMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLENBQUM7QUFBQSxFQUMxRTtBQUNBLFFBQU0sZUFBZSxLQUFLLElBQUksR0FBRyxNQUFNLGFBQWE7QUFDcEQsUUFBTSxjQUFjLE1BQU0sY0FBYyxLQUFLLE9BQU8sS0FBSztBQUV6RCxTQUFPO0FBQ1Q7OztBQzdPTyxJQUFNLHdCQUE2RDtBQUFBLEVBQ3hFLFVBQVU7QUFBQSxJQUNSLGlCQUFpQjtBQUFBLElBQ2pCLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxpQkFBaUI7QUFBQSxJQUNqQixrQkFBa0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04saUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGlCQUFpQjtBQUFBLElBQ2pCLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQ0Y7OztBQ1NBLElBQU0sc0JBQTZDO0FBQUEsRUFDakQsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsU0FBUztBQUFBLEVBQ1QsbUJBQW1CO0FBQUEsRUFDbkIsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsWUFBWTtBQUFBLElBQ1osZ0JBQWdCO0FBQUEsSUFDaEIsY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLElBQ2IsZ0JBQWdCO0FBQUEsRUFDbEI7QUFDRjtBQUVBLElBQU0scUJBQTRDO0FBQUEsRUFDaEQsR0FBRztBQUFBLEVBQ0gsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSO0FBRUEsSUFBTSxrQkFBeUM7QUFBQSxFQUM3QyxHQUFHO0FBQUEsRUFDSCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQ1I7QUFFTyxJQUFNLG9CQUFvRTtBQUFBLEVBQy9FLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFDUjtBQUVPLFNBQVMsa0JBQWtCLFdBQW9DO0FBQ3BFLFFBQU0sV0FBVyxrQkFBa0IsU0FBUyxFQUFFO0FBQzlDLFNBQU8sU0FBUyxlQUFlLFNBQVMsaUJBQWlCLFNBQVM7QUFDcEU7QUFFTyxTQUFTLHNCQUFzQixTQU1aO0FBQ3hCLFNBQU87QUFBQSxJQUNMLFdBQVcsUUFBUTtBQUFBLElBQ25CLEdBQUcsUUFBUTtBQUFBLElBQ1gsR0FBRyxRQUFRO0FBQUEsSUFDWCxPQUFPLFFBQVE7QUFBQSxJQUNmLE1BQU0sUUFBUSxRQUFRLEtBQUssT0FBTyxJQUFJO0FBQUEsSUFDdEMsS0FBSztBQUFBLEVBQ1A7QUFDRjtBQUVPLFNBQVMsdUJBQXVCLFNBQWtDLGNBQTRCO0FBQ25HLFdBQVMsUUFBUSxRQUFRLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUztBQUN4RCxVQUFNLFNBQVMsUUFBUSxLQUFLO0FBQzVCLFdBQU8sT0FBTztBQUNkLFFBQUksT0FBTyxPQUFPLGtCQUFrQixPQUFPLFNBQVMsRUFBRyxTQUFRLE9BQU8sT0FBTyxDQUFDO0FBQUEsRUFDaEY7QUFDRjtBQUVPLFNBQVMsZUFBZSxRQUFzRDtBQUNuRixRQUFNLFVBQVUsa0JBQWtCLE9BQU8sU0FBUztBQUNsRCxNQUFJLENBQUMsUUFBUSxPQUFPO0FBQ2xCLFdBQU87QUFBQSxNQUNMLE9BQU8sT0FBTztBQUFBLE1BQ2QsV0FBVyxPQUFPO0FBQUEsTUFDbEIsR0FBRyxPQUFPO0FBQUEsTUFDVixHQUFHLE9BQU87QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLFNBQVM7QUFBQSxNQUNULGlCQUFpQixrQkFBa0IsT0FBTyxTQUFTO0FBQUEsTUFDbkQsbUJBQW1CO0FBQUEsTUFDbkIsTUFBTSxPQUFPO0FBQUEsTUFDYixLQUFLLE9BQU87QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNBLFFBQU0sV0FBVyxRQUFRO0FBQ3pCLFFBQU0sV0FBVyxrQkFBa0IsT0FBTyxTQUFTO0FBQ25ELFFBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxJQUFJLE1BQU0sU0FBUyxZQUFZLENBQUM7QUFDN0UsUUFBTSxZQUFZLFNBQVMsZUFBZSxTQUFTO0FBQ25ELFFBQU0sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLE1BQU0sYUFBYSxLQUFLLElBQUksTUFBTSxTQUFTLFdBQVcsQ0FBQyxDQUFDO0FBQ3RHLFFBQU0sVUFBVSxPQUFPLE9BQU8sU0FBUyxnQkFBZ0IsT0FBTyxNQUFNLFlBQVksU0FBUyxlQUFlO0FBQ3hHLFFBQU0sYUFBYSxJQUFJLEtBQUssSUFBSSxTQUFTLEtBQUssRUFBRSxJQUFJLFNBQVM7QUFDN0QsUUFBTSxhQUFhLElBQUksUUFBUTtBQUMvQixRQUFNLGNBQWMsSUFBSSxRQUFRLFNBQVMsaUJBQWlCO0FBQzFELFNBQU87QUFBQSxJQUNMLE9BQU8sT0FBTztBQUFBLElBQ2QsV0FBVyx5QkFBeUIsT0FBTyxLQUFLO0FBQUEsSUFDaEQsR0FBRyxPQUFPO0FBQUEsSUFDVixHQUFHLE9BQU87QUFBQSxJQUNWLE1BQU0sUUFBUSxRQUFRLE9BQU0sU0FBUztBQUFBLElBQ3JDLFFBQVEsUUFBUTtBQUFBLElBQ2hCLFlBQVksUUFBUTtBQUFBLElBQ3BCLE9BQU8sUUFBUSxRQUFRLEtBQUssYUFBYSxVQUFVLGFBQWE7QUFBQSxJQUNoRSxnQkFBZ0IsUUFBUSxpQkFBaUIsTUFBTSxJQUFJLFNBQVMsY0FBYyxJQUFJLFVBQVU7QUFBQSxJQUN4RixlQUFlLFFBQVEsZ0JBQWdCLE1BQU0sSUFBSSxRQUFRLFNBQVMsaUJBQWlCO0FBQUEsSUFDbkYsVUFBVSxRQUFRLFdBQVcsTUFBTSxPQUFPLE1BQU0sWUFBWSxJQUFJLElBQUksUUFBUTtBQUFBLElBQzVFLGlCQUFpQjtBQUFBLElBQ2pCLG1CQUFtQjtBQUFBLElBQ25CLFFBQVEsUUFBUSxVQUFVO0FBQUEsSUFDMUIsUUFBUSxRQUFRLFVBQVU7QUFBQSxJQUMxQixNQUFNLE9BQU87QUFBQSxJQUNiLEtBQUssS0FBSyxJQUFJLE9BQU8sS0FBSyxRQUFRO0FBQUEsRUFDcEM7QUFDRjs7O0FDNUlPLElBQU0scUJBQStDO0FBQUEsRUFDMUQsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUNqQjtBQXVCTyxTQUFTLHVCQUF1QixPQUFlLFNBQXlCO0FBQzdFLFFBQU0sVUFBVSxRQUFRO0FBQ3hCLFNBQU8sV0FBVyxVQUFVLFdBQVc7QUFDekM7QUFXTyxJQUFNLGtDQUE0RDtBQUFBLEVBQ3ZFLFFBQVE7QUFBQSxFQUNSLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWDtBQUVPLFNBQVMsdUJBQ2QsWUFDQSxRQUNBLFFBQ0EsVUFDQSxVQUNnQjtBQUNoQixRQUFNLGVBQWUsOEJBQThCLFVBQVUsUUFBUTtBQUVyRSxRQUFNLHNCQUFzQixXQUFXLElBQUksZUFBYTtBQUN0RCxRQUFJLFVBQVUsVUFBVSxRQUFRO0FBQzlCLFlBQU1DLFlBQVcsVUFBVSxZQUFZO0FBQ3ZDLFlBQU0sYUFBYSxVQUFVLFVBQVUsVUFBVTtBQUNqRCxZQUFNLGFBQWEsQ0FBQyxLQUFLLElBQUlBLFNBQVE7QUFDckMsWUFBTSxhQUFhLEtBQUssSUFBSUEsU0FBUTtBQUNwQyxZQUFNLFFBQVEsYUFBYSxVQUFVLElBQUksYUFBYSxZQUFZLFVBQVUsSUFBSSxhQUFhLFVBQVU7QUFDdkcsWUFBTSxNQUFNLGFBQWEsVUFBVSxJQUFJLGFBQWEsWUFBWSxVQUFVLElBQUksYUFBYSxVQUFVO0FBQ3JHLFlBQU0sS0FBSyxJQUFJLElBQUksTUFBTTtBQUN6QixZQUFNLEtBQUssSUFBSSxJQUFJLE1BQU07QUFDekIsWUFBTSxTQUFTLE1BQU0sUUFBUSxJQUFJLFNBQVM7QUFDMUMsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsSUFBSSxNQUFNLElBQUksSUFBSSxLQUFLO0FBQUEsUUFDdkIsSUFBSSxNQUFNLElBQUksSUFBSSxLQUFLO0FBQUEsUUFDdkIsT0FBTyxVQUFVLFFBQVE7QUFBQSxRQUN6QixRQUFRLEtBQUssTUFBTSxJQUFJLEVBQUUsSUFBSTtBQUFBLFFBQzdCLFVBQVUsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDOUI7QUFBQSxJQUNGO0FBRUEsVUFBTSxRQUFRLGFBQWEsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUNuRCxVQUFNLFFBQVEsVUFBVSxRQUFRLE1BQU07QUFDdEMsVUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFNBQVMsTUFBTTtBQUM3RCxRQUFJLFdBQVcsVUFBVTtBQUN6QixRQUFJLGFBQWEsUUFBVztBQUMxQixZQUFNLGFBQWEsS0FBSyxJQUFJLFVBQVUsVUFBVSxVQUFVLE9BQU8sVUFBVSxPQUFPLENBQUM7QUFDbkYsWUFBTSxhQUFhLENBQUMsS0FBSyxJQUFJLFFBQVE7QUFDckMsWUFBTSxhQUFhLEtBQUssSUFBSSxRQUFRO0FBQ3BDLFlBQU0sTUFBTSxhQUFhLFVBQVUsSUFBSSxhQUFhLFlBQVksVUFBVSxJQUFJLGFBQWEsVUFBVTtBQUNyRyxpQkFBVyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO0FBQUEsSUFDeEQ7QUFDQSxXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFFRCxRQUFNLGtCQUFrQixPQUNyQixJQUFJLFdBQVM7QUFDWixVQUFNLFFBQVEsYUFBYSxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNDLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILEdBQUcsTUFBTTtBQUFBLE1BQ1QsR0FBRyxNQUFNO0FBQUEsTUFDVCxNQUFNLE1BQU0sT0FBTyxNQUFNO0FBQUEsTUFDekIsSUFBSSxNQUFNLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFBQSxJQUNwQztBQUFBLEVBQ0YsQ0FBQyxFQUNBLEtBQUssQ0FBQyxHQUFHLE9BQVEsRUFBRSxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUc7QUFFM0MsUUFBTSxrQkFBa0IsT0FBTyxJQUFJLFdBQVM7QUFDMUMsVUFBTSxRQUFRLGFBQWEsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQyxXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1QsTUFBTSxNQUFNLE9BQU8sTUFBTTtBQUFBLElBQzNCO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTyxFQUFFLFlBQVkscUJBQXFCLFFBQVEsaUJBQWlCLFFBQVEsZ0JBQWdCO0FBQzdGO0FBRU8sU0FBUyx1QkFDZCxHQUNBLEdBQ0EsVUFDQSxVQUN3RDtBQUN4RCxTQUFPLDhCQUE4QixVQUFVLFFBQVEsRUFBRSxHQUFHLENBQUM7QUFDL0Q7QUFFTyxTQUFTLCtCQUNkLFNBQ0EsU0FDQSxVQUNBLFVBQzBCO0FBQzFCLFFBQU0sV0FBVyxFQUFFLEdBQUcsU0FBUyxHQUFHLFFBQVE7QUFDMUMsUUFBTSxVQUFVLFNBQVMsUUFBUTtBQUNqQyxRQUFNLFNBQVMsU0FBUyxVQUFVO0FBQ2xDLFFBQU0sUUFBUSxTQUFTLG1CQUFtQixLQUFLLEtBQUs7QUFDcEQsUUFBTSxNQUFNLEtBQUssSUFBSSxLQUFLO0FBQzFCLFFBQU0sTUFBTSxLQUFLLElBQUksS0FBSztBQUMxQixRQUFNLGNBQWMsU0FBUyxTQUFTLFNBQVM7QUFDL0MsUUFBTSxXQUFXLFNBQVMsU0FBUyxTQUFTO0FBQzVDLFFBQU0sWUFBWSxDQUFDLFNBQVM7QUFDNUIsUUFBTSxlQUFlLFdBQVcsV0FBVztBQUMzQyxRQUFNLGNBQWMsTUFBTSxjQUFjO0FBQ3hDLE1BQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxLQUFPLFFBQU87QUFDMUMsUUFBTSxTQUFTLENBQUMsYUFBYSxNQUFNLGNBQWMsT0FBTztBQUN4RCxRQUFNLFVBQVUsS0FBSyxJQUFJLElBQUksU0FBUyxNQUFNLFlBQVksR0FBRztBQUMzRCxRQUFNLFFBQVEsY0FBYztBQUM1QixRQUFNLFFBQVE7QUFBQSxJQUNaLEdBQUcsVUFBVSxVQUFVLFdBQVc7QUFBQSxJQUNsQyxHQUFHLFNBQVMsVUFBVSxTQUFTLGlCQUFpQjtBQUFBLEVBQ2xEO0FBQ0EsU0FBTyxPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxPQUFRLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxNQUMzRyxRQUNBO0FBQ047QUFFQSxTQUFTLDhCQUE4QixVQUFvQyxVQUE4QjtBQUN2RyxRQUFNLFVBQVUsU0FBUyxRQUFRO0FBQ2pDLFFBQU0sU0FBUyxTQUFTLFVBQVU7QUFDbEMsUUFBTSxRQUFRLFNBQVMsbUJBQW1CLEtBQUssS0FBSztBQUNwRCxRQUFNLE1BQU0sS0FBSyxJQUFJLEtBQUs7QUFDMUIsUUFBTSxNQUFNLEtBQUssSUFBSSxLQUFLO0FBQzFCLFFBQU0sY0FBYyxTQUFTLFNBQVMsU0FBUztBQUMvQyxRQUFNLFdBQVcsU0FBUyxTQUFTLFNBQVM7QUFDNUMsUUFBTSxXQUFXO0FBRWpCLFNBQU8sQ0FBQyxHQUFXLE1BQXNFO0FBQ3ZGLFVBQU0sU0FBUyxJQUFJO0FBQ25CLFVBQU0sU0FBUyxTQUFTLFVBQVUsSUFBSSxTQUFTO0FBQy9DLFVBQU0sWUFBWSxDQUFDLFNBQVM7QUFDNUIsVUFBTSxVQUFVLFlBQVksTUFBTSxTQUFTO0FBQzNDLFVBQU0sVUFBVSxLQUFLLElBQUksVUFBVSxTQUFTLE1BQU0sWUFBWSxHQUFHO0FBQ2pFLFVBQU0sUUFBUSxjQUFjO0FBQzVCLFdBQU87QUFBQSxNQUNMLEdBQUcsVUFBVSxTQUFTO0FBQUEsTUFDdEIsR0FBRyxXQUFXLFVBQVU7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7OztBQzNMTyxJQUFNQyxzQkFBcUIsQ0FBQyxPQUE2QjtBQUM5RCxNQUFJLE9BQU8sY0FBZSxRQUFPO0FBQ2pDLE1BQUksQ0FBQyxHQUFHLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDckMsUUFBTSxZQUFZLEdBQUcsTUFBTSxTQUFTLE1BQU07QUFDMUMsU0FBTyxhQUFhLFVBQVUsVUFBVSxZQUFxQjtBQUMvRDtBQUVPLFNBQVMsMkJBQTJCLElBQThEO0FBQ3ZHLFFBQU0sVUFBVUEsb0JBQW1CLEVBQUU7QUFDckMsU0FBTyxVQUFVLEVBQUUsU0FBUyxZQUFZLFVBQVUsUUFBUSxPQUFPLEVBQUUsSUFBSTtBQUN6RTtBQUVPLFNBQVMsaUJBQWlCLFNBQWdDO0FBQy9ELFFBQU0sYUFBYSxVQUFVLFFBQVEsT0FBTztBQUM1QyxRQUFNLFFBQVEsYUFBYSxXQUFXLE9BQU87QUFDN0MsTUFBSSxDQUFDLE1BQU8sT0FBTSxJQUFJLE1BQU0sVUFBVSxPQUFPLHFDQUFxQyxXQUFXLE9BQU8sSUFBSTtBQUN4RyxRQUFNLFdBQVcsc0JBQXNCLE9BQU87QUFDOUMsUUFBTSxRQUFRLElBQUksZUFBZTtBQUFBLElBQy9CO0FBQUEsSUFDQSxPQUFPLFlBQVksV0FBVyxTQUFTO0FBQUEsSUFDdkMsa0JBQWtCLFNBQVM7QUFBQSxJQUMzQixtQkFBbUIsU0FBUztBQUFBLEVBQzlCLENBQUM7QUFDRCxTQUFPLE1BQU0sTUFBTSxTQUFTLGlCQUFpQixTQUFTLGdCQUFnQjtBQUN4RTtBQUVPLFNBQVMsdUJBQXVCLFNBTU47QUFDL0IsUUFBTSxhQUFhLFVBQVUsUUFBUSxRQUFRLE9BQU87QUFDcEQsTUFBSSxXQUFXLGdCQUFnQixRQUFTLFFBQU87QUFDL0MsU0FBTyxzQkFBc0I7QUFBQSxJQUMzQixXQUFXLFFBQVE7QUFBQSxJQUNuQixHQUFHLFFBQVE7QUFBQSxJQUNYLEdBQUcsUUFBUTtBQUFBLElBQ1gsT0FBTyxRQUFRO0FBQUEsSUFDZixNQUFNLFFBQVE7QUFBQSxFQUNoQixDQUFDO0FBQ0g7QUFFTyxTQUFTLGtCQUFrQixPQUF1QixZQUE2QjtBQUNwRixRQUFNLG1CQUFtQixXQUFXO0FBQ3BDLFFBQU0sK0JBQWlDO0FBQ3pDO0FBY08sU0FBUyxZQUNkLE9BQ0EsU0FDQSxRQUFnQixZQUFZLFVBQVUsUUFBUSxNQUFNLE9BQU8sRUFBRSxTQUFTLEdBQzNEO0FBQ1gsUUFBTSxhQUFhLFVBQVUsUUFBUSxNQUFNLE9BQU87QUFDbEQsUUFBTSxRQUFRO0FBQ2QsTUFBSSxDQUFDLE1BQU0sbUJBQW1CO0FBQzVCLFVBQU0sb0JBQW9CO0FBQzFCLFVBQU0sU0FBUyx1QkFBdUI7QUFBQSxNQUNwQyxTQUFTLE1BQU07QUFBQSxNQUNmLEdBQUcsTUFBTTtBQUFBLE1BQ1QsR0FBRyxNQUFNO0FBQUEsTUFDVDtBQUFBLE1BQ0EsTUFBTSxNQUFNO0FBQUEsSUFDZCxDQUFDO0FBQ0QsUUFBSSxPQUFRLFNBQVEsS0FBSyxNQUFNO0FBQUEsRUFDakM7QUFDQSxvQkFBa0IsTUFBTSxPQUFPLFVBQVU7QUFDekMsU0FBTztBQUNUO0FBRU8sU0FBUyxtQkFBbUIsU0FPWTtBQUM3QyxRQUFNLGFBQWEsVUFBVSxRQUFRLFFBQVEsTUFBTSxPQUFPO0FBQzFELE1BQUksUUFBUSxPQUFRLFNBQVEsTUFBTSxVQUFVLFFBQVE7QUFDcEQsTUFBSSxRQUFRLGlCQUFpQjtBQUMzQixZQUFRLE1BQU0sTUFBTSxPQUFPO0FBQUEsTUFDekIsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxNQUN4QixXQUFXLFFBQVEsa0JBQWtCLFdBQVc7QUFBQSxJQUNsRCxDQUFDO0FBQUEsRUFDSDtBQUNBLE1BQUksUUFBUSxrQkFBa0IsT0FBVyxTQUFRLE1BQU0sZ0JBQWdCLFFBQVE7QUFDL0UsTUFBSSxRQUFRLE1BQU0sVUFBVSxHQUFHO0FBQzdCLFdBQU8sRUFBRSxRQUFRLE1BQU0sWUFBWSxZQUFZLFFBQVEsT0FBTyxRQUFRLFNBQVMsUUFBUSxLQUFLLEVBQUU7QUFBQSxFQUNoRztBQUNBLFNBQU8sRUFBRSxRQUFRLE9BQU8sV0FBVztBQUNyQztBQUVPLFNBQVMseUJBQXlCLFNBUXJCO0FBQ2xCLFFBQU0sWUFBWSxRQUFRLG9CQUFvQixVQUFVLFFBQVEsU0FBUztBQUN6RSxNQUFJLFFBQVEsYUFBYSxVQUFXLFFBQU8sQ0FBQztBQUM1QyxRQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsUUFBUSxTQUFTLFFBQVEsU0FBUyxDQUFDO0FBQ3pFLFFBQU0sSUFBSSxRQUFRO0FBQ2xCLFFBQU0sUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDeEMsUUFBTSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBQ2pDLFFBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxRQUFRLEtBQUs7QUFDeEMsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLEdBQUcsUUFBUTtBQUFBLE1BQ1g7QUFBQSxNQUNBLE9BQU87QUFBQSxNQUNQLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLFVBQVUsS0FBSyxLQUFLO0FBQUEsSUFDdEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxHQUFHLE9BQU8sU0FBUztBQUFBLE1BQ25CO0FBQUEsTUFDQSxPQUFPO0FBQUEsTUFDUCxRQUFRLEtBQUssSUFBSSxHQUFHLE1BQU0sSUFBSTtBQUFBLE1BQzlCLE9BQU8sUUFBUTtBQUFBLE1BQ2YsZ0JBQWdCLFlBQVk7QUFBQSxNQUM1QixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxVQUFVLEtBQUssS0FBSztBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUNGO0FBWU8sU0FBUyxrQ0FDZCxTQUNBLGdCQUNBLFVBQ2lCO0FBQ2pCLFNBQU8sUUFBUSxRQUFRLFlBQVU7QUFDL0IsVUFBTSxhQUFhLFVBQVUsUUFBUSxPQUFPLE9BQU87QUFDbkQsVUFBTSxRQUFRLHVCQUF1QixPQUFPLEdBQUcsT0FBTyxHQUFHLGdCQUFnQixRQUFRO0FBQ2pGLFVBQU0sZ0JBQWdCLE9BQU8sT0FBTyxNQUFNO0FBQzFDLFVBQU0sUUFBUSxPQUFPLFNBQVM7QUFDOUIsV0FBTyx5QkFBeUI7QUFBQSxNQUM5QixHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTSxJQUFJLGdCQUFnQixPQUFNO0FBQUEsTUFDbkMsT0FBTyxLQUFLLElBQUksZ0JBQWdCLE1BQU0sV0FBVyxTQUFTLE1BQU0sUUFBUSxNQUFNLEtBQUs7QUFBQSxNQUNuRixRQUFRLE9BQU87QUFBQSxNQUNmLFdBQVcsT0FBTztBQUFBLE1BQ2xCLE9BQU8sWUFBWSxXQUFXLFNBQVM7QUFBQSxJQUN6QyxDQUFDO0FBQUEsRUFDSCxDQUFDO0FBQ0g7OztBQ3RMQSxJQUFNLGFBQWEsT0FBMEIsRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRTtBQUMxRSxJQUFNLGdCQUFnQixDQUFDLE9BQWU7QUFDcEMsUUFBTSxRQUFRLGFBQWEsRUFBRTtBQUM3QixNQUFJLENBQUMsTUFBTyxPQUFNLElBQUksTUFBTSxzQkFBc0IsRUFBRSxrQ0FBa0M7QUFDdEYsU0FBTztBQUNUO0FBQ0EsSUFBTSxtQkFBbUIsQ0FBQyxVQUN4QixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxPQUFRLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSTtBQWVuRyxTQUFTLGNBQWMsU0FBaUQ7QUFDN0UsUUFBTSxRQUFRLFdBQVc7QUFDekIsUUFBTTtBQUFBLElBQ0o7QUFBQSxJQUFZO0FBQUEsSUFBRztBQUFBLElBQUc7QUFBQSxJQUNsQixRQUFRO0FBQUEsSUFDUjtBQUFBLElBQ0EsY0FBYztBQUFBLElBQ2QsVUFBVTtBQUFBLEVBQ1osSUFBSTtBQUNKLFFBQU0sV0FBVyxLQUFLLElBQUksR0FBRyxRQUFRLFFBQVE7QUFDN0MsUUFBTSxrQkFBa0IsS0FBSyxJQUFJLEdBQUcsUUFBUSxlQUFlO0FBQzNELFFBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxJQUFJLFdBQVc7QUFDMUMsUUFBTSxZQUFZLFlBQVksS0FBSyxjQUFjO0FBQ2pELFFBQU0sUUFBUSxZQUFZLFdBQVcsS0FBSztBQUMxQyxRQUFNLFNBQVMsV0FBVyxTQUFTO0FBRW5DLE1BQUksV0FBVyxXQUFXO0FBQ3hCLFVBQU0sT0FBTyxLQUFLO0FBQUEsTUFDaEIsT0FBTyxjQUFjLGFBQWE7QUFBQSxNQUNsQztBQUFBLE1BQUc7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOO0FBQUEsTUFDQSxlQUFlO0FBQUEsTUFDZixNQUFNLElBQUksU0FBUztBQUFBLE1BQ25CLFNBQVM7QUFBQSxNQUNULGlCQUFpQixPQUFPLFNBQVM7QUFBQSxNQUNqQyxnQkFBZ0IsT0FBTSxTQUFTO0FBQUEsTUFDL0IsYUFBYSxPQUFPLFNBQVM7QUFBQSxNQUM3QixhQUFhLE1BQUssU0FBUztBQUFBLE1BQzNCLGlCQUFpQixZQUFZLEtBQUssSUFBSSxHQUFHLFdBQVcsSUFBSTtBQUFBLE1BQ3hELGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxFQUNIO0FBRUEsTUFBSSxDQUFDLFFBQVMsUUFBTztBQUNyQixRQUFNLGVBQWUsY0FBYyxXQUFXLGlCQUFpQixRQUFRLGdCQUFnQixXQUFXO0FBQ2xHLFFBQU0sZUFBZSxLQUFLLEtBQUssV0FBVyxlQUFlLFdBQVcsZUFBZTtBQUNuRixRQUFNLFlBQVksS0FBSyxLQUFLLElBQUksV0FBVztBQUMzQyxRQUFNLFlBQVksTUFBTSxNQUFPLFdBQVc7QUFDMUMsV0FBUyxJQUFJLEdBQUcsSUFBSSxjQUFjLEtBQUs7QUFDckMsVUFBTSxRQUFRLFlBQVksSUFBSTtBQUM5QixVQUFNLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksT0FBTztBQUMzRixVQUFNLG1CQUFtQixzQkFBc0IsR0FBRyxHQUFHLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU07QUFDdkcsVUFBTSxVQUFVLG9CQUFvQixpQkFBaUIsZ0JBQWdCLElBQUksbUJBQW1CO0FBQzVGLFVBQU0sT0FBTyxLQUFLO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsR0FBRyxRQUFRO0FBQUEsTUFDWCxHQUFHLFFBQVE7QUFBQSxNQUNYLE1BQU0sV0FBVyxjQUFjLE1BQU07QUFBQSxNQUNyQztBQUFBLE1BQ0EsV0FBVyxRQUFRLE1BQU07QUFBQSxNQUN6QixlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixpQkFBaUI7QUFBQSxNQUNqQixnQkFBZ0I7QUFBQSxNQUNoQixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUNBLFNBQU87QUFDVDtBQTJCTyxJQUFNLDJCQUE4QztBQUFBLEVBQ3pELGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLHVCQUF1QjtBQUFBLEVBQ3ZCLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUNsQjtBQUVPLElBQU0sNEJBQTRCLENBQUMsWUFBNEQ7QUFBQSxFQUNwRyxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQ0w7QUFFTyxJQUFNLHdCQUF3QixDQUFDLFdBQWdEO0FBQ3BGLFFBQU0sV0FBVywwQkFBMEIsTUFBTTtBQUNqRCxTQUFPLEtBQUssSUFBSSxNQUFNLFNBQVMsaUJBQWlCLFNBQVMseUJBQXlCLEdBQUk7QUFDeEY7QUFFQSxTQUFTLGVBQWUsTUFBZ0MsU0FBbUMsSUFBOEIsR0FBcUM7QUFDNUosUUFBTSxNQUFNLElBQUk7QUFDaEIsU0FBTztBQUFBLElBQ0wsR0FBRyxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksR0FBRztBQUFBLElBQzdELEdBQUcsTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLEdBQUc7QUFBQSxFQUMvRDtBQUNGO0FBRUEsU0FBUyxXQUNQLE1BQ0EsVUFDQSxVQUNBLElBQ0EsR0FDMEI7QUFDMUIsUUFBTSxNQUFNLElBQUk7QUFDaEIsU0FBTztBQUFBLElBQ0wsR0FBRyxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksU0FBUyxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxHQUFHO0FBQUEsSUFDbkcsR0FBRyxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksU0FBUyxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxHQUFHO0FBQUEsRUFDckc7QUFDRjtBQUVBLFNBQVMsVUFDUCxNQUNBLFFBQ0EsaUJBQ0EsT0FDQSxRQUNBLFdBQ0FDLGFBQ0E7QUFDQSxRQUFNLFlBQW9CLG9CQUFvQixJQUFJLEtBQUs7QUFDdkQsUUFBTSxhQUFhLFlBQVlBLGNBQWEsT0FBTTtBQUNsRCxRQUFNLFFBQVEsRUFBRSxHQUFHLEtBQUssSUFBSSxhQUFhLE9BQU8saUJBQWlCLFFBQVEsYUFBYSxHQUFHLEtBQUssSUFBSSxPQUFPLGNBQWMsTUFBTTtBQUM3SCxRQUFNLFNBQVMsRUFBRSxHQUFHLEtBQUssSUFBSSxtQkFBbUIsT0FBTyxpQkFBaUIsUUFBUSxhQUFhLEdBQUcsS0FBSyxJQUFJLE9BQU8sY0FBYyxNQUFNO0FBQ3BJLFFBQU0sa0JBQWtCLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLE9BQU8sWUFBWSxHQUFHLENBQUM7QUFDdkUsUUFBTSxPQUFPO0FBQUEsSUFDWCxJQUFLLE1BQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLG1CQUFtQixPQUFPLElBQUksa0JBQW1CLG1CQUFtQixZQUFZLEtBQUssUUFBUTtBQUFBLElBQ2pJLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksT0FBTyxVQUFVO0FBQUEsRUFDOUQ7QUFDQSxRQUFNLFdBQVc7QUFBQSxJQUNmLEdBQUcsTUFBTSxJQUFJLFlBQVksT0FBTyxjQUFjLFlBQVksS0FBSyxNQUFNO0FBQUEsSUFDckUsR0FBRyxNQUFNLElBQUksS0FBSztBQUFBLEVBQ3BCO0FBQ0EsUUFBTSxXQUFXO0FBQUEsSUFDZixHQUFHLEtBQUssSUFBSSxrQkFBa0IsT0FBTyxjQUFjLFlBQVksS0FBSyxNQUFNO0FBQUEsSUFDMUUsR0FBRyxLQUFLO0FBQUEsRUFDVjtBQUNBLFNBQU8sRUFBRSxPQUFPLFFBQVEsVUFBVSxTQUFTO0FBQzdDO0FBRUEsU0FBUyxXQUFXLFNBQXNEO0FBQ3hFLE1BQUksUUFBUSxTQUFTLEVBQUcsUUFBTztBQUMvQixRQUFNLEtBQUssUUFBUSxJQUFJLFlBQVUsT0FBTyxDQUFDO0FBQ3pDLFNBQU8sS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFFQSxTQUFTLGVBQWUsU0FBOEMsTUFBYyxVQUE4RDtBQUNoSixNQUFJLFFBQVEsV0FBVyxFQUFHLFFBQU87QUFDakMsTUFBSSxRQUFRLFdBQVcsRUFBRyxRQUFPLFFBQVEsQ0FBQztBQUMxQyxRQUFNLFNBQVMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDN0UsUUFBTSxRQUFRLE9BQU8sQ0FBQztBQUN0QixRQUFNLE9BQU8sT0FBTyxPQUFPLFNBQVMsQ0FBQztBQUNyQyxRQUFNLE9BQU8sS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUM7QUFDdEMsU0FBTztBQUFBLElBQ0wsR0FBRyxLQUFLLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUUsQ0FBQztBQUFBLElBQ3ZELEdBQUcsS0FBSyxJQUFJLEdBQUcsT0FBTyxJQUFJLFlBQVUsT0FBTyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssS0FBSyxDQUFDO0FBQUEsRUFDdkU7QUFDRjtBQUVBLFNBQVMsVUFDUCxNQUNBLFFBQ0EsaUJBQ0EsVUFDQSxPQUNBLFFBQ0EsV0FDQSxNQUNtRTtBQUNuRSxRQUFNLGdCQUFnQixLQUFLLElBQUksTUFBSyxPQUFPLGlCQUFpQixPQUFPLHFCQUFxQjtBQUN4RixRQUFNLFNBQVMsT0FBTyxpQkFBaUI7QUFDdkMsUUFBTSxPQUFPLFVBQVUsTUFBTSxRQUFRLGlCQUFpQixPQUFPLFFBQVEsV0FBVyxJQUFJO0FBQ3BGLFFBQU0sZ0JBQWdCLENBQUMsVUFBa0I7QUFDdkMsVUFBTSxJQUFJLFdBQVcsS0FBSyxPQUFPLEtBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUssSUFBSSxHQUFHLFFBQVEsS0FBSSxDQUFDO0FBQ3JHLFVBQU0sSUFBSSxXQUFXLEtBQUssT0FBTyxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLLElBQUksR0FBRyxRQUFRLEtBQUksQ0FBQztBQUNyRyxXQUFPLEtBQUssTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUs7QUFBQSxFQUN0RDtBQUVBLE1BQUksV0FBVyxRQUFRO0FBQ3JCLFVBQU1DLEtBQUksV0FBVztBQUNyQixVQUFNQyxRQUFPRCxLQUFJQSxNQUFLLElBQUksSUFBSUE7QUFDOUIsVUFBTUUsU0FBUSxXQUFXLEtBQUssT0FBTyxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssUUFBUUQsS0FBSTtBQUNwRixXQUFPO0FBQUEsTUFDTCxHQUFHQyxPQUFNO0FBQUEsTUFDVCxHQUFHQSxPQUFNO0FBQUEsTUFDVCxVQUFVLGNBQWNELEtBQUk7QUFBQSxNQUM1QixlQUFlQTtBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUVBLFFBQU0sS0FBSyxXQUFXLFVBQVUsS0FBSyxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQ3pELFFBQU0sT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJO0FBQzlCLFFBQU0sWUFBWTtBQUFBLElBQ2hCLEdBQUcsS0FBSyxPQUFPLElBQUksa0JBQWtCLElBQUk7QUFBQSxJQUN6QyxHQUFHLEtBQUssT0FBTyxJQUFJLElBQUk7QUFBQSxFQUN6QjtBQUNBLFFBQU0sUUFBUSxlQUFlLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxJQUFJO0FBQ3RFLFNBQU87QUFBQSxJQUNMLEdBQUcsTUFBTTtBQUFBLElBQ1QsR0FBRyxNQUFNO0FBQUEsSUFDVCxVQUFVLGNBQWMsQ0FBQyxJQUFJLG1CQUFtQixJQUFJLFFBQVE7QUFBQSxJQUM1RCxlQUFlO0FBQUEsRUFDakI7QUFDRjtBQUVBLFNBQVMsV0FBVyxPQUE2QixPQUFlLFNBQThDLFFBQTRDO0FBQ3hKLE1BQUksTUFBTSxZQUFZLEVBQUcsUUFBTyxDQUFDO0FBQ2pDLFFBQU0sT0FBTyxJQUFJLE1BQU07QUFDdkIsUUFBTSxZQUFZLE1BQU0sWUFBWTtBQUNwQyxRQUFNLGFBQThCLENBQUM7QUFDckMsUUFBTSxVQUFVLE1BQU0sYUFBYSxTQUFTLElBQUksTUFBTSxlQUFlLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM5RyxRQUFNLE9BQU8sV0FBVyxPQUFPO0FBQy9CLFFBQU0sWUFBWSxPQUFPLEtBQUs7QUFDOUIsUUFBTSxjQUFjLGVBQWUsU0FBUyxNQUFNLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDbEUsYUFBVyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsUUFBUSxHQUFHO0FBQy9DLFVBQU0sU0FBUyxRQUFRLFNBQVMsSUFBSSxjQUFjLFFBQVEsUUFBUSxRQUFRLE1BQU07QUFDaEYsVUFBTSxXQUFXLE9BQU87QUFDeEIsVUFBTSxPQUFPLFVBQVUsUUFBUSxRQUFRLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxRQUFRLFdBQVcsSUFBSTtBQUNqRyxVQUFNLFNBQVMsS0FBSztBQUNwQixRQUFJLFVBQVUsRUFBRztBQUNqQixVQUFNLGtCQUFrQixLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssV0FBVyxNQUFNLENBQUM7QUFDaEUsYUFBUyxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsS0FBSztBQUN4QyxZQUFNLEtBQUssS0FBSyxJQUFJLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxRQUFRO0FBQ2hFLFlBQU0sS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUc7QUFDL0IsWUFBTSxnQkFBZ0IsT0FBTyxpQkFBaUIsT0FBTztBQUNyRCxZQUFNLFNBQVMsT0FBTyxpQkFBaUI7QUFDdkMsWUFBTSxJQUFJLFVBQVUsUUFBUSxRQUFRLE1BQU0sTUFBTSxLQUFLLFFBQVEsT0FBTyxRQUFRLFdBQVcsSUFBSTtBQUMzRixZQUFNLElBQUksVUFBVSxRQUFRLFFBQVEsTUFBTSxNQUFNLEtBQUssUUFBUSxPQUFPLFFBQVEsV0FBVyxJQUFJO0FBQzNGLFlBQU0sS0FBSyxFQUFFLElBQUksRUFBRTtBQUNuQixZQUFNLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDbkIsWUFBTSxNQUFNLElBQUk7QUFDaEIsWUFBTSxPQUFPLEtBQUssSUFBSSxNQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBRyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsT0FBTyxJQUFHO0FBQzNFLGlCQUFXLEtBQUs7QUFBQSxRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztBQUFBLFFBQ2pCLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztBQUFBLFFBQ2pCLE9BQU8sS0FBSyxJQUFJLEtBQUssYUFBYSxPQUFPLGFBQWEsTUFBTSxPQUFPLGFBQWEsS0FBSTtBQUFBLFFBQ3BGLFFBQVEsS0FBSyxNQUFNLElBQUksRUFBRSxJQUFJO0FBQUEsUUFDN0IsT0FBTyxNQUFNO0FBQUEsUUFDYixnQkFBZ0I7QUFBQSxRQUNoQixNQUFNLE1BQU07QUFBQSxRQUNaLFdBQVcsT0FBTyxpQkFBaUI7QUFBQSxRQUNuQyxPQUFPO0FBQUEsUUFDUCxVQUFVLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRTtBQUFBLE1BQzlCLENBQUM7QUFDRCxpQkFBVyxLQUFLO0FBQUEsUUFDZCxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFBQSxRQUNqQixJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFBQSxRQUNqQixPQUFPLEtBQUssSUFBSSxLQUFLLGFBQWEsT0FBTyxhQUFhLE9BQU8sTUFBTSxPQUFPLGFBQWEsS0FBSTtBQUFBLFFBQzNGLFFBQVEsS0FBSyxNQUFNLElBQUksRUFBRSxJQUFJO0FBQUEsUUFDN0IsT0FBTyxNQUFNO0FBQUEsUUFDYixnQkFBZ0I7QUFBQSxRQUNoQixNQUFNLE1BQU07QUFBQSxRQUNaLFdBQVcsT0FBTyxpQkFBaUI7QUFBQSxRQUNuQyxPQUFPO0FBQUEsUUFDUCxVQUFVLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRTtBQUFBLE1BQzlCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUVPLFNBQVMsYUFBYSxTQUFnRDtBQUMzRSxRQUFNLFFBQVEsV0FBVztBQUN6QixNQUFJLENBQUMsUUFBUSxRQUFTLFFBQU87QUFDN0IsUUFBTSxFQUFFLFlBQVksT0FBTyxRQUFRLFFBQVEsRUFBRSxJQUFJO0FBQ2pELFFBQU0sU0FBUywwQkFBMEIsUUFBUSxNQUFNO0FBQ3ZELFFBQU0sVUFBVSxRQUFRLFdBQVcsQ0FBQyxLQUFLO0FBQ3pDLGFBQVcsQ0FBQyxPQUFPLEtBQUssS0FBSyxPQUFPLFFBQVEsR0FBRztBQUM3QyxVQUFNLFlBQVksUUFBUSxLQUFLLEtBQUs7QUFDcEMsVUFBTSxXQUFXLFdBQVcsUUFBUSxRQUFRLFlBQVksS0FBSyxLQUFLLFFBQVE7QUFDMUUsVUFBTSxVQUFVLFdBQVcsZ0JBQWdCLENBQUM7QUFDNUMsVUFBTSxPQUFPLFdBQVcsT0FBTztBQUMvQixVQUFNLFlBQVksT0FBTyxLQUFLO0FBQzlCLFVBQU0sY0FBYyxZQUFZLGVBQWUsU0FBUyxVQUFVLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSTtBQUM3RyxVQUFNLFNBQVMsUUFBUSxTQUFTLElBQUksY0FBYyxRQUFRLFFBQVEsS0FBSyxJQUFJLEdBQUcsUUFBUSxNQUFNLENBQUM7QUFDN0YsVUFBTSxPQUFPLEVBQUUsR0FBRyxNQUFNLElBQUksV0FBVyxPQUFPLGlCQUFpQixPQUFPLEdBQUcsTUFBTSxJQUFJLE9BQU8sY0FBYyxNQUFNO0FBQzlHLFVBQU0sVUFBVSxhQUFhLFNBQVMsVUFBVSxPQUFPLFFBQVEsVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsSUFBSSxJQUFJO0FBQUEsTUFDN0gsR0FBRyxLQUFLO0FBQUEsTUFDUixHQUFHLEtBQUs7QUFBQSxNQUNSLFVBQVUsQ0FBQyxXQUFXO0FBQUEsTUFDdEIsZUFBZTtBQUFBLElBQ2pCO0FBQ0EsVUFBTSxPQUFPLEtBQUs7QUFBQSxNQUNoQixPQUFPLGNBQWMsb0JBQW9CO0FBQUEsTUFDekMsR0FBRyxRQUFRO0FBQUEsTUFDWCxHQUFHLFFBQVE7QUFBQSxNQUNYLEdBQUcsT0FBTSxRQUFRO0FBQUEsTUFDakIsTUFBTSxLQUFLLElBQUksSUFBSSxXQUFXLFFBQVEsSUFBRyxJQUFJO0FBQUEsTUFDN0MsT0FBTyxZQUFZLFdBQVcsS0FBSztBQUFBLE1BQ25DLFdBQVcsS0FBSyxLQUFLLEtBQUs7QUFBQSxNQUMxQixXQUFXLEtBQUssS0FBSyxLQUFLO0FBQUEsTUFDMUIsV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFFBQVE7QUFBQSxNQUN4QyxlQUFlO0FBQUEsTUFDZixNQUFNLFlBQVksT0FBTztBQUFBLE1BQ3pCLGlCQUFpQixZQUFZLE9BQU87QUFBQSxNQUNwQyxnQkFBZ0IsWUFBWSxPQUFNO0FBQUEsTUFDbEMsYUFBYSxZQUFZLE1BQU07QUFBQSxNQUMvQixhQUFhLFlBQVksTUFBSztBQUFBLElBQ2hDLENBQUM7QUFBQSxFQUNIO0FBQ0EsYUFBVyxDQUFDLE9BQU8sU0FBUyxLQUFLLFFBQVEsUUFBUSxHQUFHO0FBQ2xELFFBQUksQ0FBQyxVQUFXO0FBQ2hCLFVBQU0sUUFBUSxPQUFPLEtBQUs7QUFDMUIsUUFBSSxNQUFPLE9BQU0sV0FBVyxLQUFLLEdBQUcsV0FBVyxXQUFXLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDbkY7QUFDQSxTQUFPO0FBQ1Q7QUFVQSxTQUFTLFlBQVksU0FBaUIsU0FBc0Q7QUFDMUYsUUFBTSxFQUFFLEdBQUcsR0FBRyxPQUFPLEtBQUssUUFBUSxFQUFFLElBQUk7QUFDeEMsU0FBTztBQUFBLElBQ0wsT0FBTyxjQUFjLE9BQU87QUFBQSxJQUM1QixHQUFHLElBQUksS0FBSyxJQUFJLE1BQU0sTUFBTSxJQUFJLElBQUcsSUFBSSxNQUFNO0FBQUEsSUFDN0M7QUFBQSxJQUNBLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxJQUFJLE1BQU0sTUFBTSxJQUFJLElBQUcsSUFBSTtBQUFBLElBQ3hEO0FBQUEsSUFDQSxXQUFXLE1BQU07QUFBQSxJQUNqQixlQUFlO0FBQUEsSUFDZixNQUFNO0FBQUEsSUFDTixpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsRUFDZjtBQUNGO0FBRU8sSUFBTSxxQkFBcUIsQ0FBQyxZQUNqQyxZQUFZLGVBQWUsT0FBTztBQUU3QixJQUFNLG9CQUFvQixDQUFDLFlBQ2hDLFlBQVksc0JBQXNCLE9BQU87OztBQ3hZM0MsSUFBTSxtQkFBbUIsQ0FBQyxZQUE0QixVQUFVLEtBQUssS0FBSztBQUMxRSxJQUFNLHdCQUF3QjtBQUFBLEVBQzVCLFdBQVcsaUJBQWlCLEdBQUc7QUFBQSxFQUMvQixXQUFXLGlCQUFpQixFQUFFO0FBQUEsRUFDOUIsV0FBVyxpQkFBaUIsQ0FBQztBQUMvQjtBQUNBLElBQU0sbUJBQW1CLENBQUMsY0FBZ0Q7QUFDeEUsUUFBTSxTQUFTLEtBQUssTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUs7QUFDdkQsU0FBTyxLQUFLLE1BQU0sVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksTUFBTTtBQUMvRDtBQWlCTyxTQUFTLGlCQUFpQixNQUF1QixTQUE4RDtBQUNwSCxVQUFRLE1BQU07QUFBQSxJQUNaLEtBQUssaUJBQWlCO0FBQ3BCLGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFdBQVcsc0JBQXNCLFlBQVksS0FBSyxJQUFJLFFBQVEsTUFBTSxPQUFPLFFBQVEsU0FBUyxFQUFFLElBQUk7QUFBQSxRQUNsRyxXQUFXLHNCQUFzQixhQUFhLFFBQVEsU0FBUyxpQkFBaUIsUUFBUSxNQUFNLElBQUk7QUFBQSxNQUNwRztBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFDSCxhQUFPO0FBQUEsUUFDTCxXQUFXLEtBQUssSUFBSSxRQUFRLE1BQU0sT0FBTyxRQUFRLFNBQVMsRUFBRSxJQUFJO0FBQUEsTUFDbEU7QUFBQSxJQUNGLEtBQUs7QUFDSCxhQUFPLENBQUM7QUFBQSxFQUNaO0FBQ0Y7QUFFTyxTQUFTLHNCQUFzQixPQUFlLFFBQWdCLFNBQWlCLFFBQXFDO0FBQ3pILFNBQU8sRUFBRSxPQUFPLFFBQVEsU0FBUyxPQUFPO0FBQzFDO0FBRU8sU0FBUyxrQkFDZCxRQUNBLFVBQ0EsR0FDQSxHQUNBLEtBQ0EsUUFBUSxHQUNvQjtBQUM1QixTQUFPLGlCQUFpQixpQkFBaUI7QUFBQSxJQUN2QztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUFBLEVBQ3hCLENBQUM7QUFDSDtBQUVPLFNBQVMsaUJBQ2QsUUFDQSxVQUNBLEdBQ0EsR0FDQSxLQUNBLFFBQVEsR0FDb0I7QUFDNUIsU0FBTyxpQkFBaUIscUJBQXFCO0FBQUEsSUFDM0M7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRU8sU0FBUyxxQkFDZCxRQUNBLFVBQ0EsR0FDQSxHQUNBLEtBQzRCO0FBQzVCLFNBQU8saUJBQWlCLG1CQUFtQjtBQUFBLElBQ3pDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QUNsR0EsSUFBTSxtQkFBbUIsb0JBQUksSUFBa0M7QUFFeEQsU0FBUywwQkFDZCxTQUNBLE9BQ0EsUUFDQSxRQUNpQjtBQUNqQixTQUFPLENBQUMsR0FBSSxzQkFBc0IsRUFBRSxTQUFTLE9BQU8sUUFBUSxPQUFPLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBRTtBQUN6RjtBQUVPLFNBQVMsNkJBQTZCLFNBQW9DO0FBQy9FLFFBQU0sT0FBTyxTQUFTO0FBQ3RCLFFBQU0sU0FBUztBQUNmLFFBQU0sY0FBYyxLQUFLLFFBQVEsTUFBTTtBQUN2QyxNQUFJLGVBQWUsRUFBRyxRQUFPLEdBQUcsS0FBSyxNQUFNLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixPQUFPO0FBRXRGLFFBQU0sWUFBWSxLQUFLLFlBQVksaUJBQWlCO0FBQ3BELE1BQUksYUFBYSxFQUFHLFFBQU8sR0FBRyxLQUFLLE1BQU0sR0FBRyxTQUFTLENBQUMscUJBQXFCLE9BQU87QUFFbEYsU0FBTyxvQkFBb0IsT0FBTztBQUNwQztBQUVPLFNBQVMsK0JBQStCLFNBQXNCLFNBQWtDO0FBQ3JHLFVBQVEsTUFBTSxxQkFBcUI7QUFDbkMsVUFBUSxNQUFNLGlCQUFpQjtBQUMvQixVQUFRLE1BQU0sbUJBQW1CO0FBRWpDLFFBQU0sT0FBTyw2QkFBNkIsT0FBTztBQUNqRCxRQUFNLFFBQVEsaUJBQWlCLElBQUksSUFBSTtBQUN2QyxNQUFJLFVBQVUsVUFBVTtBQUN0QixZQUFRLE1BQU0sa0JBQWtCLFFBQVEsSUFBSTtBQUM1QztBQUFBLEVBQ0Y7QUFFQSxVQUFRLE1BQU0sZUFBZSxrQkFBa0I7QUFDL0MsTUFBSSxNQUFPO0FBRVgsbUJBQWlCLElBQUksTUFBTSxTQUFTO0FBQ3BDLFFBQU0sUUFBUSxJQUFJLE1BQU07QUFDeEIsUUFBTSxTQUFTLE1BQU07QUFDbkIscUJBQWlCLElBQUksTUFBTSxRQUFRO0FBQ25DLFlBQVEsTUFBTSxrQkFBa0IsUUFBUSxJQUFJO0FBQUEsRUFDOUM7QUFDQSxRQUFNLFVBQVUsTUFBTTtBQUNwQixxQkFBaUIsSUFBSSxNQUFNLFNBQVM7QUFDcEMsWUFBUSxNQUFNLGVBQWUsa0JBQWtCO0FBQUEsRUFDakQ7QUFDQSxRQUFNLE1BQU07QUFDZDs7O0FDbkRPLElBQU0sY0FBYztBQUFBLEVBQ3pCLFFBQVEsYUFBYSxlQUFlO0FBQUEsRUFDcEMsT0FBTyxhQUFhLFlBQVk7QUFBQSxFQUNoQyxZQUFZLGFBQWEsZUFBZTtBQUFBLEVBQ3hDLFdBQVcsYUFBYSxhQUFhO0FBQ3ZDO0FBa0JPLElBQU0sc0JBQXNCLENBQUMsT0FBdUIsR0FBVyxHQUFXLE1BQWMsWUFBbUMsQ0FBQyxPQUNoSSxFQUFFLEdBQUcsTUFBTSxlQUFlLFNBQVMsR0FBRyxHQUFHLEdBQUcsS0FBSztBQUU3QyxJQUFNLGFBQWEsQ0FBQyxNQUFjLFVBQXNDLFVBQWtCLFNBQVMsT0FDdkcsRUFBRSxNQUFNLFVBQVUsVUFBVSxRQUFRLFlBQVksd0JBQXdCLFlBQVksSUFBSTs7O0FDcEJwRixJQUFNLGFBQU4sTUFBaUI7QUFBQSxFQUN0QixPQUFjO0FBQUEsRUFDZCxRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixJQUFJO0FBQUEsRUFDSixVQUFVO0FBQUEsRUFDVixxQkFBcUI7QUFBQSxFQUVyQixJQUFJLFFBQXdCO0FBQzFCLFVBQU0sT0FBTyxpQkFBaUIsUUFBUTtBQUN0QyxTQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssY0FBYyxLQUFLLFFBQVEsTUFBTTtBQUM1RCxXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFQSxPQUFPLFNBQVMsR0FBVztBQUN6QixTQUFLLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxRQUFRLE1BQU07QUFDNUMsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBLEVBRUEsUUFBUSxNQUFhLFlBQXFDLEtBQW1CO0FBQzNFLFFBQUksU0FBUyxLQUFLLE1BQU07QUFDdEIsV0FBSyxxQkFBcUI7QUFFMUIsV0FBSyxZQUFZO0FBQUEsSUFDbkI7QUFDQSxTQUFLLE9BQU87QUFDWixTQUFLLFVBQVUsV0FBVyxJQUFJLElBQUksS0FBSztBQUFBLEVBQ3pDO0FBQUEsRUFFQSxRQUFRLGNBQXNCLFdBQW1CLFlBQTJDO0FBRTFGLFNBQUssY0FBYyxLQUFLLElBQUksQ0FBQyxZQUFZLE1BQUssS0FBSyxJQUFJLFlBQVksTUFBSyxZQUFZLENBQUMsSUFBSSxLQUFLLGFBQWE7QUFDM0csU0FBSyxVQUFVLFdBQVcsS0FBSyxJQUFJLElBQUksS0FBSztBQUFBLEVBQzlDO0FBQUEsRUFFQSxPQUFPLGNBQTRCO0FBQ2pDLFVBQU0sV0FBVyxJQUFJLEtBQUssSUFBSSxNQUFRLFlBQVk7QUFDbEQsU0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUs7QUFBQSxFQUN0QztBQUFBO0FBQUEsRUFHQSxzQkFBc0IsT0FBeUI7QUFDN0MsVUFBTSxPQUFPLGlCQUFpQixRQUFRO0FBQ3RDLFVBQU0sV0FBVyxLQUFLLElBQUksS0FBSyxlQUFlLEtBQUssS0FBSztBQUN4RCxXQUFPLE1BQU07QUFBQSxNQUFLLEVBQUUsUUFBUSxTQUFTO0FBQUEsTUFBRyxDQUFDLEdBQUcsU0FDekMsT0FBTyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVU7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU8sT0FBZSxPQUE2QjtBQUNqRCxVQUFNLE9BQU8saUJBQWlCLFFBQVE7QUFDdEMsVUFBTSxTQUF1QixDQUFDO0FBQzlCLGFBQVMsUUFBUSxHQUFHLFFBQVEsS0FBSyxPQUFPLFNBQVM7QUFDL0MsWUFBTSxNQUFNLEtBQUssTUFBTSxRQUFRLEtBQUssYUFBYTtBQUNqRCxZQUFNLFdBQVcsS0FBSyxJQUFJLEtBQUssZUFBZSxLQUFLLFFBQVEsTUFBTSxLQUFLLGFBQWE7QUFDbkYsWUFBTSxTQUFTLFFBQVEsS0FBSztBQUM1QixhQUFPLEtBQUs7QUFBQSxRQUNWLEdBQUcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVO0FBQUEsUUFDM0QsR0FBRyxRQUFRLE1BQU0sS0FBSyxVQUFVO0FBQUEsUUFDaEM7QUFBQSxRQUNBO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0Y7OztBQzBGQSxJQUFNLGtCQUF5QztBQUFBLEVBQzdDLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFDakI7QUFFQSxJQUFNLHNCQUErQztBQUFBLEVBQ25ELFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFDWDtBQUVBLElBQU0seUJBQTBEO0FBQUEsRUFDOUQsU0FBUztBQUFBLEVBQ1QsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sZUFBZTtBQUNqQjtBQUNBLElBQU0sMkJBQTJCO0FBQ2pDLElBQU0sOEJBQThCLElBQUksYUFBYTtBQUNyRCxJQUFNLHdCQUF3QixRQUFPLGFBQWE7QUFFM0MsSUFBTSxzQkFBTixNQUFNLHFCQUFvQjtBQUFBLEVBQ3RCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxRQUFRLElBQUksV0FBVztBQUFBLEVBRXhCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxFQUNqQixjQUFrQztBQUFBLEVBQ2xDO0FBQUEsRUFDQSxZQUFZLFlBQVksSUFBSTtBQUFBLEVBQzVCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLGFBQW1CO0FBQUEsRUFDbkIsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQXFDLENBQUM7QUFBQSxFQUN0QyxrQkFBa0I7QUFBQSxFQUNsQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixVQUFtQixDQUFDO0FBQUEsRUFDcEIsZ0JBQWdCLElBQUksY0FBYztBQUFBLEVBQ2xDLGFBQTBCLENBQUM7QUFBQSxFQUMzQixnQkFBZ0MsQ0FBQztBQUFBLEVBQ2pDLGVBQThCLENBQUM7QUFBQSxFQUMvQixjQUFrQyxDQUFDO0FBQUEsRUFDbkMsbUJBQTRDLENBQUM7QUFBQSxFQUM3QyxVQUF3QztBQUFBLEVBQ3hDLG9CQUFnRCxDQUFDO0FBQUEsRUFDakQscUJBQWdEO0FBQUEsRUFDaEQsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBaUMsQ0FBQztBQUFBLEVBQ2xDLG1CQUEyRSxDQUFDO0FBQUEsRUFDNUUsa0JBQWtCO0FBQUEsRUFDbEIsaUJBSUo7QUFBQSxJQUNGLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFFUSxZQUFZLFVBQW9DLFNBQXFDO0FBQzNGLFNBQUssV0FBVztBQUNoQixTQUFLLE9BQU8sUUFBUTtBQUNwQixTQUFLLFNBQVMsUUFBUTtBQUN0QixTQUFLLGVBQWUsUUFBUTtBQUM1QixTQUFLLGlCQUFpQixRQUFRLGtCQUFrQixFQUFFLEdBQUcsZ0NBQWdDO0FBQ3JGLFNBQUssUUFBUSxRQUFRO0FBQ3JCLFNBQUssY0FBYyxRQUFRO0FBQzNCLFNBQUssV0FBVyxRQUFRO0FBQ3hCLFNBQUssZUFBZSxRQUFRLFdBQVc7QUFDdkMsU0FBSyxxQkFBcUI7QUFDMUIsU0FBSyxNQUFNLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFBQSxFQUM3QjtBQUFBLEVBRUEsYUFBYSxPQUFPLFNBQW1FO0FBQ3JGLFVBQU0sV0FBVyxNQUFNLHlCQUF5QixPQUFPLFFBQVEsUUFBUSxtQkFBbUIsY0FBYyxtQkFBbUIsYUFBYTtBQUN4SSxXQUFPLElBQUkscUJBQW9CLFVBQVUsT0FBTztBQUFBLEVBQ2xEO0FBQUEsRUFFQSxJQUFJLE1BQWM7QUFDaEIsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBLEVBRUEsSUFBSSxxQkFBOEI7QUFDaEMsV0FBTyxLQUFLLGdCQUFnQjtBQUFBLEVBQzlCO0FBQUEsRUFFQSxNQUFNLE1BQW9CO0FBQ3hCLFdBQU8sS0FBSyxPQUFPLFNBQVMsU0FBUyxJQUFJLE9BQU07QUFBQSxFQUNqRDtBQUFBLEVBRUEsVUFBa0I7QUFDaEIsV0FBTyxLQUFLLE9BQU8sU0FBUztBQUFBLEVBQzlCO0FBQUEsRUFFQSxRQUFnQjtBQUNkLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxNQUFNLFVBQWdDLENBQUMsR0FBUztBQUM5QyxTQUFLLGNBQWM7QUFDbkIsU0FBSyxZQUFZLFlBQVksSUFBSTtBQUNqQyxTQUFLLGdCQUFnQjtBQUNyQixTQUFLLFlBQVk7QUFDakIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssZ0JBQWdCLENBQUM7QUFDdEIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssUUFBUTtBQUNiLFNBQUssV0FBVztBQUNoQixTQUFLLGVBQWUsTUFBTTtBQUMxQixTQUFLLGVBQWUsU0FBUztBQUM3QixTQUFLLGVBQWUsUUFBUTtBQUM1QixTQUFLLE1BQU0sUUFBUTtBQUNuQixTQUFLLE1BQU0sWUFBWTtBQUN2QixTQUFLLE1BQU0sT0FBTztBQUNsQixTQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUMzQixTQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sQ0FBQztBQUNqQyxTQUFLLGFBQWE7QUFDbEIsU0FBSyxlQUFlLENBQUMsSUFBSSxlQUFlLEVBQUUsT0FBTyxZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFNBQUssZ0JBQWdCO0FBQ3JCLFNBQUssVUFBVTtBQUNmLFNBQUsscUJBQXFCO0FBQzFCLFFBQUksQ0FBQyxRQUFRLE9BQVEsTUFBSyxLQUFLLFVBQVU7QUFBQSxFQUMzQztBQUFBLEVBRUEsYUFBbUI7QUFDakIsU0FBSyxVQUFVLENBQUM7QUFDaEIsU0FBSyxjQUFjLE1BQU07QUFDekIsU0FBSyxhQUFhLENBQUM7QUFDbkIsU0FBSyxnQkFBZ0IsQ0FBQztBQUN0QixTQUFLLGVBQWUsQ0FBQztBQUNyQixTQUFLLGNBQWMsQ0FBQztBQUNwQixTQUFLLG1CQUFtQixDQUFDO0FBQ3pCLFNBQUssbUJBQW1CLENBQUM7QUFDekIsU0FBSyxVQUFVO0FBQ2YsU0FBSyxxQkFBcUI7QUFBQSxFQUM1QjtBQUFBLEVBRUEsV0FBVyxPQUEwQjtBQUNuQyxTQUFLLGNBQWM7QUFDbkIsU0FBSyxlQUFlLE1BQU0sWUFBWTtBQUN0QyxTQUFLLHFCQUFxQjtBQUMxQixTQUFLLFlBQVksWUFBWSxJQUFJO0FBQ2pDLFNBQUssZ0JBQWdCO0FBQ3JCLFNBQUssWUFBWTtBQUNqQixVQUFNLGNBQWMscUJBQXFCLE1BQU0sVUFBVTtBQUN6RCxVQUFNLGNBQWMsWUFBWSxLQUFLLFlBQVUsT0FBTyxPQUFPLGNBQWM7QUFDM0UsVUFBTSxZQUFrQixhQUFhLFNBQVMsVUFBVSxJQUFJO0FBQzVELFNBQUssYUFBYTtBQUNsQixTQUFLLGVBQWUsTUFBTTtBQUMxQixTQUFLLGVBQWUsU0FBUztBQUM3QixTQUFLLGVBQWUsUUFBUTtBQUM1QixTQUFLLFdBQVc7QUFDaEIsU0FBSyxrQkFBa0I7QUFDdkIsU0FBSyxnQkFBZ0IsWUFBWSxPQUFPLFlBQVUsT0FBTyxPQUFPLGNBQWM7QUFDOUUsU0FBSyxXQUFXO0FBQ2hCLFNBQUssV0FBVztBQUNoQixTQUFLLE1BQU0sUUFBUTtBQUNuQixTQUFLLGVBQWUsQ0FBQyxJQUFJLGVBQWUsRUFBRSxPQUFPLFlBQVksT0FBTyxDQUFDLENBQUM7QUFDdEUsU0FBSyxNQUFNLFlBQVk7QUFDdkIsU0FBSyxNQUFNLE9BQU87QUFDbEIsU0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLFNBQVM7QUFDbkMsU0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFNBQVM7QUFDekMsU0FBSyxLQUFLLFlBQVk7QUFBQSxFQUN4QjtBQUFBLEVBRUEsU0FBUyxTQUFrQztBQUN6QyxTQUFLLGVBQWU7QUFDcEIsU0FBSyxxQkFBcUI7QUFBQSxFQUM1QjtBQUFBLEVBRUEsYUFBYSxNQUFZLFVBQTRDLENBQUMsR0FBUztBQUM3RSxRQUFJLFFBQVEsc0JBQXNCLENBQUMsS0FBSyxZQUFhO0FBQ3JELFFBQUksU0FBUyxLQUFLLE1BQU0sS0FBTSxNQUFLLEtBQUssWUFBWTtBQUNwRCxTQUFLLE1BQU0sUUFBUSxNQUFNLFdBQVMsS0FBSyxNQUFNLEtBQUssR0FBRyxLQUFLLFNBQVM7QUFDbkUsU0FBSyxhQUFhO0FBQUEsRUFDcEI7QUFBQSxFQUVBLFNBQVMsT0FBY0UsU0FBUSxHQUFTO0FBQ3RDLFNBQUssZUFBZSxNQUFNLEVBQUUsSUFBSSxPQUFPLE9BQUFBLE9BQU07QUFDN0MsU0FBSyxXQUFXO0FBQ2hCLFNBQUssV0FBVyxXQUFXO0FBQzNCLFNBQUssS0FBSyxhQUFhO0FBQUEsRUFDekI7QUFBQSxFQUVBLFlBQVksVUFBMEI7QUFDcEMsVUFBTSxNQUFNLGFBQWEsUUFBUSxRQUFRO0FBQ3pDLFNBQUssZUFBZSxTQUFTLElBQUksWUFBWSxVQUFVLElBQUksVUFBVTtBQUNyRSxTQUFLLFdBQVcsY0FBYztBQUM5QixTQUFLLEtBQUssUUFBUTtBQUFBLEVBQ3BCO0FBQUEsRUFFQSxXQUFXLFNBQXdCO0FBQ2pDLFVBQU0sVUFBVSxLQUFLLGVBQWU7QUFDcEMsU0FBSyxlQUFlLFFBQVEsSUFBSSxXQUFXLFNBQVMsU0FBUyxZQUFZLFVBQVUsUUFBUSxRQUFRLElBQUksQ0FBQztBQUN4RyxTQUFLLFdBQVcsYUFBYTtBQUM3QixTQUFLLEtBQUssYUFBYTtBQUFBLEVBQ3pCO0FBQUEsRUFFQSxxQkFBcUIsUUFBMEM7QUFDN0QsU0FBSyxvQkFBb0IsRUFBRSxHQUFHLE9BQU87QUFBQSxFQUN2QztBQUFBLEVBRUEsbUJBQW1CLE9BQXFCO0FBQ3RDLFNBQUssa0JBQWtCLE9BQU8sU0FBUyxLQUFLLElBQUksS0FBSyxJQUFJLE1BQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7QUFBQSxFQUN0RjtBQUFBLEVBRUEsZ0JBQWdCLFFBQXNCO0FBQ3BDLFNBQUssTUFBTSxJQUFJLE1BQU07QUFDckIsU0FBSyxpQkFBaUI7QUFBQSxFQUN4QjtBQUFBLEVBRUEsV0FBVyxTQUF5SztBQUNsTCxVQUFNLGFBQWEsVUFBVSxRQUFRLFFBQVEsT0FBTztBQUNwRCxVQUFNLFNBQVMsUUFBUSxVQUFVLFdBQVc7QUFDNUMsVUFBTSxLQUFLLEVBQUUsS0FBSztBQUNsQixVQUFNLFFBQVEsaUJBQWlCLFFBQVEsT0FBTztBQUM5QyxRQUFJLFFBQVEsTUFBTyxPQUFNLFFBQVEsUUFBUTtBQUN6QyxTQUFLLFFBQVEsS0FBSztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxXQUFXLFFBQVE7QUFBQSxNQUNuQixTQUFTLFFBQVE7QUFBQSxNQUNqQixNQUFNLFFBQVE7QUFBQSxNQUNkLEdBQUcsUUFBUSxLQUFLLEtBQUssTUFBTSxRQUFRLElBQUk7QUFBQSxNQUN2QyxHQUFHLFFBQVEsS0FBSyxNQUFNLEtBQUssTUFBTTtBQUFBLE1BQ2pDO0FBQUEsTUFDQSxXQUFXO0FBQUEsTUFDWCxpQkFBaUIsUUFBUSxtQkFBbUI7QUFBQSxNQUM1QyxPQUFPLFFBQVEsU0FBUztBQUFBLE1BQ3hCO0FBQUEsTUFDQSxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsUUFBSSxRQUFRLGNBQWMsU0FBUyxXQUFXLFdBQVksTUFBSyxLQUFLLFdBQVcsVUFBVTtBQUN6RixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsZ0JBQWdCLElBQWtCO0FBQ2hDLFVBQU0sUUFBUSxLQUFLLFFBQVEsS0FBSyxVQUFRLEtBQUssT0FBTyxFQUFFO0FBQ3RELFFBQUksU0FBUyxDQUFDLE1BQU0sTUFBTyxNQUFLLGFBQWEsS0FBSztBQUFBLEVBQ3BEO0FBQUEsRUFFQSxlQUFlLFNBQStHO0FBQzVILFNBQUssV0FBVyxLQUFLO0FBQUEsTUFDbkIsTUFBTSxRQUFRO0FBQUEsTUFDZCxHQUFHLFFBQVEsS0FBSyxLQUFLLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDdkMsR0FBRyxRQUFRLEtBQUssTUFBTSxLQUFLLE1BQU07QUFBQSxNQUNqQyxPQUFPLFFBQVE7QUFBQSxNQUNmLE9BQU8sUUFBUSxTQUFTO0FBQUEsTUFDeEIsaUJBQWlCLFFBQVEsbUJBQW1CO0FBQUEsTUFDNUMsT0FBTyxJQUFJLGVBQWUsRUFBRSxPQUFPLFlBQVksVUFBVSxDQUFDO0FBQUEsSUFDNUQsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLGtCQUFrQixTQUFxRztBQUNySCxTQUFLLGNBQWMsS0FBSztBQUFBLE1BQ3RCLE1BQU0sUUFBUTtBQUFBLE1BQ2QsR0FBRyxRQUFRLEtBQUssS0FBSyxNQUFNLFFBQVEsSUFBSTtBQUFBLE1BQ3ZDLEdBQUcsUUFBUSxLQUFLLE1BQU0sS0FBSyxNQUFNO0FBQUEsTUFDakMsVUFBVSxRQUFRO0FBQUEsTUFDbEIsaUJBQWlCLFFBQVEsbUJBQW1CO0FBQUEsSUFDOUMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLGlCQUFpQixTQUFtRztBQUNsSCxTQUFLLGFBQWEsS0FBSztBQUFBLE1BQ3JCLE1BQU0sUUFBUTtBQUFBLE1BQ2QsR0FBRyxRQUFRLEtBQUssS0FBSyxNQUFNLFFBQVEsSUFBSTtBQUFBLE1BQ3ZDLEdBQUcsUUFBUSxLQUFLLE1BQU0sS0FBSyxNQUFNO0FBQUEsTUFDakMsU0FBUyxRQUFRO0FBQUEsTUFDakIsaUJBQWlCLFFBQVEsbUJBQW1CO0FBQUEsSUFDOUMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLHNCQUFzQixTQUE4RztBQUNsSSxVQUFNLGVBQWUsUUFBUSxnQkFBZ0I7QUFDN0MsU0FBSyxZQUFZLEtBQUs7QUFBQSxNQUNwQixNQUFNLFFBQVE7QUFBQSxNQUNkLEdBQUcsUUFBUSxLQUFLLEtBQUssTUFBTSxRQUFRLElBQUk7QUFBQSxNQUN2QyxHQUFHLFFBQVEsS0FBSyxNQUFNLEtBQUssTUFBTTtBQUFBLE1BQ2pDO0FBQUEsTUFDQSxpQkFBaUIsUUFBUSxtQkFBbUI7QUFBQSxNQUM1QyxPQUFPLElBQUksZUFBZSxFQUFFLE9BQU8sWUFBWSxXQUFXLENBQUM7QUFBQSxJQUM3RCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsWUFBa0I7QUFDaEIsU0FBSyxTQUFTO0FBQ2QsVUFBTSxRQUFRLENBQUMsUUFBc0I7QUFDbkMsV0FBSyxLQUFLLEdBQUc7QUFDYixXQUFLLE9BQU8sS0FBSyxTQUFTO0FBQzFCLFdBQUssaUJBQWlCLHNCQUFzQixLQUFLO0FBQUEsSUFDbkQ7QUFDQSxTQUFLLGlCQUFpQixzQkFBc0IsS0FBSztBQUFBLEVBQ25EO0FBQUEsRUFFQSxXQUFpQjtBQUNmLFFBQUksS0FBSyxlQUFnQixzQkFBcUIsS0FBSyxjQUFjO0FBQ2pFLFNBQUssaUJBQWlCO0FBQUEsRUFDeEI7QUFBQSxFQUVBLEtBQUssVUFBd0I7QUFDM0IsVUFBTSxXQUFXLEtBQUssSUFBSSxPQUFNLFdBQVcsS0FBSyxhQUFhLEdBQUk7QUFDakUsU0FBSyxZQUFZO0FBQ2pCLFVBQU0sUUFBUSxXQUFXLGFBQWEsd0JBQXdCLEtBQUs7QUFDbkUsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxZQUFZLEtBQUssZ0JBQWdCO0FBQ3RDLGVBQVcsUUFBUSxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsR0FBRztBQUM3QyxXQUFLLE1BQU0sT0FBTyxLQUFLO0FBQ3ZCLFVBQUksS0FBSyxNQUFNLFNBQVUsTUFBSyxpQkFBaUIsT0FBTyxLQUFLLGlCQUFpQixRQUFRLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDOUY7QUFDQSwyQkFBdUIsS0FBSyxrQkFBa0IsS0FBSztBQUVuRCxRQUFJLEtBQUssU0FBUyxVQUFVLENBQUMsS0FBSyxZQUFhO0FBQy9DLFFBQUksS0FBSyxZQUFhLE1BQUssbUJBQW1CO0FBRTlDLFVBQU0sWUFBWSxLQUFLLGVBQWUsTUFBTSxVQUFVLFFBQVEsS0FBSyxlQUFlLElBQUksRUFBRSxFQUFFLFFBQVE7QUFDbEcsVUFBTSxZQUFZLEtBQUssZUFBZSxTQUFTLGFBQWEsUUFBUSxLQUFLLGVBQWUsT0FBTyxRQUFRLElBQUk7QUFDM0csVUFBTSxXQUFXLEtBQUssZUFBZSxRQUFRLFlBQVksUUFBUSxLQUFLLGVBQWUsTUFBTSxPQUFPLElBQUk7QUFDdEcsUUFBSSxLQUFLLGFBQWE7QUFDcEIsV0FBSyxjQUFjLEdBQUcsU0FBUyxHQUFHLFlBQVksU0FBTSxVQUFVLEtBQUssS0FBSyxFQUFFLEdBQUcsV0FBVyxTQUFNLFNBQVMsS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUFBLElBQ3ZIO0FBRUEsVUFBTSxjQUFjLEtBQUssUUFBUSxPQUFPLFdBQVMsTUFBTSxTQUFTLEtBQUssTUFBTSxRQUFRLENBQUMsTUFBTSxLQUFLO0FBQy9GLFVBQU0sYUFBYSxLQUFLLE1BQU0sc0JBQXNCLEtBQUssTUFBTSxDQUFDO0FBQ2hFLFVBQU0sU0FBUyxvQkFBb0IsYUFBYSxLQUFLLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRyxZQUFZLEtBQUssTUFBTSxTQUFTO0FBQzdHLFNBQUssTUFBTSxRQUFRLFFBQVEsS0FBSyxPQUFPLFFBQVEsTUFBSyxVQUFRLEtBQUssTUFBTSxJQUFJLENBQUM7QUFDNUUsU0FBSyxNQUFNLE9BQU8sS0FBSztBQUN2QixTQUFLLGFBQWEsUUFBUSxZQUFZLE9BQU8sS0FBSyxNQUFNLElBQUk7QUFDNUQsU0FBSyxpQkFBaUI7QUFFdEIsUUFBSSxLQUFLLGVBQWUsS0FBSztBQUMzQixXQUFLLFlBQVk7QUFDakIsVUFBSSxLQUFLLFlBQVksRUFBRyxNQUFLLEtBQUs7QUFDbEMsVUFBSSxLQUFLLGNBQWMsYUFBYSxLQUFLLFNBQVMsSUFBSSxFQUFHLE1BQUssWUFBWSxLQUFLLGVBQWUsSUFBSSxFQUFFO0FBQUEsSUFDdEc7QUFFQSxTQUFLLGtCQUFrQixLQUFLO0FBQzVCLFNBQUssd0JBQXdCLE9BQU8sV0FBVyxRQUFRO0FBQ3ZELFNBQUssY0FBYyxPQUFPLFNBQVM7QUFDbkMsU0FBSyxjQUFjLEtBQUs7QUFFeEIsUUFBSSxLQUFLLGVBQWUsS0FBSyxjQUFjLEVBQUcsTUFBSyxPQUFPLEtBQUssYUFBYSxDQUFDO0FBQUEsRUFDL0U7QUFBQSxFQUVBLE9BQU8sTUFBTSxLQUFLLFdBQWlCO0FBQ2pDLFVBQU0sYUFBYSwwQkFBMEIsS0FBSyxjQUFjLEtBQUssT0FBTyxPQUFPLEtBQUssT0FBTyxRQUFRLEdBQUc7QUFDMUcsVUFBTSxJQUFJLEtBQUssTUFBTTtBQUNyQixVQUFNLGVBQWUsS0FBSyxNQUFNLE9BQU8sS0FBSyxRQUFRLEdBQUcsQ0FBQztBQUN4RCxVQUFNLHFCQUFxQixzQkFBc0IsS0FBSyxPQUFPLE9BQU8sS0FBSyxPQUFPLFFBQVEsS0FBSyxRQUFRLEdBQUcsdUJBQXVCLEtBQUssT0FBTyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUM7QUFFL0osZUFBVyxTQUFTLGNBQWM7QUFDaEMsWUFBTSxRQUFRLEtBQUssSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxDQUFDLElBQUksSUFBRztBQUNoRixVQUFJLFFBQVEsR0FBRztBQUNiLG1CQUFXLEtBQUs7QUFBQSxVQUNkLEdBQUcsTUFBTSxJQUFJLEtBQUssS0FBSyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVE7QUFBQSxVQUNwRSxHQUFHLE1BQU07QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLFFBQVEsTUFBTTtBQUFBLFVBQ2QsT0FBTyxZQUFZO0FBQUEsVUFDbkIsZ0JBQWdCLFlBQVk7QUFBQSxVQUM1QixNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsUUFDVCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFFQSxlQUFXLEtBQUssR0FBRyxLQUFLLGNBQWMscUJBQXFCLENBQUM7QUFDNUQsUUFBSSxLQUFLLFFBQVMsWUFBVyxLQUFLLEdBQUcsS0FBSyxRQUFRLFdBQVcsR0FBRyxDQUFDO0FBRWpFLFVBQU0saUJBQXFDLENBQUM7QUFDNUMsUUFBSSxLQUFLLGVBQWUsUUFBUTtBQUM5QixZQUFNLGFBQWEsS0FBSyxlQUFlO0FBQ3ZDLFlBQU0sVUFBVSxhQUFhLFFBQVEsV0FBVyxRQUFRO0FBQ3hELFlBQU0sUUFBUSxjQUFjO0FBQUEsUUFDMUIsWUFBWTtBQUFBLFFBQ1osVUFBVSxXQUFXO0FBQUEsUUFDckIsaUJBQWlCLFFBQVE7QUFBQSxRQUN6QixHQUFHLEtBQUssTUFBTTtBQUFBLFFBQ2QsR0FBRyxLQUFLLFFBQVE7QUFBQSxRQUNoQjtBQUFBLFFBQ0EsT0FBTztBQUFBLFFBQ1AscUJBQXFCLENBQUMsR0FBRyxHQUFHLFNBQVMsWUFBWTtBQUMvQyxnQkFBTSxTQUFTLHVCQUF1QixHQUFHLEdBQUcsS0FBSyxnQkFBZ0Isa0JBQWtCO0FBQ25GLGlCQUFPLCtCQUErQixPQUFPLElBQUksVUFBVSxPQUFPLE9BQU8sT0FBTyxJQUFJLFVBQVUsT0FBTyxPQUFPLEtBQUssZ0JBQWdCLGtCQUFrQjtBQUFBLFFBQ3JKO0FBQUEsUUFDQSxhQUFhLFdBQVc7QUFBQSxNQUMxQixDQUFDO0FBQ0QsaUJBQVcsS0FBSyxHQUFHLE1BQU0sVUFBVTtBQUNuQyxxQkFBZSxLQUFLLEdBQUcsTUFBTSxNQUFNO0FBQUEsSUFDckM7QUFDQSxRQUFJLEtBQUssZUFBZSxPQUFPO0FBQzdCLFlBQU0sWUFBWSxLQUFLLGVBQWU7QUFDdEMsWUFBTSxVQUFVLFlBQVksUUFBUSxVQUFVLE9BQU87QUFDckQsWUFBTSxRQUFRLGFBQWE7QUFBQSxRQUN6QixZQUFZO0FBQUEsUUFDWixPQUFPLFVBQVU7QUFBQSxRQUNqQixTQUFTLFVBQVU7QUFBQSxRQUNuQixVQUFVLFVBQVU7QUFBQSxRQUNwQixXQUFXLFVBQVU7QUFBQSxRQUNyQixRQUFRO0FBQUEsUUFDUixRQUFRLEtBQUs7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYLENBQUM7QUFDRCxpQkFBVyxLQUFLLEdBQUcsTUFBTSxVQUFVO0FBQ25DLHFCQUFlLEtBQUssR0FBRyxNQUFNLE1BQU07QUFBQSxJQUNyQztBQUVBLGVBQVcsVUFBVSxLQUFLLGVBQWU7QUFDdkMsWUFBTSxhQUFhLGFBQWEsUUFBUSxPQUFPLFFBQVE7QUFDdkQscUJBQWUsS0FBSyxtQkFBbUI7QUFBQSxRQUNyQyxHQUFHLE9BQU87QUFBQSxRQUNWLEdBQUcsT0FBTztBQUFBLFFBQ1YsT0FBTyxZQUFZLFdBQVcsS0FBSztBQUFBLFFBQ25DO0FBQUEsUUFDQSxPQUFPO0FBQUEsTUFDVCxDQUFDLENBQUM7QUFBQSxJQUNKO0FBQ0EsZUFBVyxVQUFVLEtBQUssY0FBYztBQUN0QyxZQUFNLGFBQWEsWUFBWSxRQUFRLE9BQU8sT0FBTztBQUNyRCxxQkFBZSxLQUFLLGtCQUFrQjtBQUFBLFFBQ3BDLEdBQUcsT0FBTztBQUFBLFFBQ1YsR0FBRyxPQUFPO0FBQUEsUUFDVixPQUFPLFlBQVksV0FBVyxLQUFLO0FBQUEsUUFDbkM7QUFBQSxRQUNBLE9BQU87QUFBQSxNQUNULENBQUMsQ0FBQztBQUFBLElBQ0o7QUFFQSxVQUFNLGFBQWE7QUFDbkIsZUFBVyxDQUFDLE9BQU8sS0FBSyxLQUFLLGFBQWEsUUFBUSxHQUFHO0FBQ25ELFlBQU0sUUFBUSxLQUFLLGFBQWEsS0FBSyxLQUFLLElBQUksZUFBZSxFQUFFLE9BQU8sWUFBWSxPQUFPLENBQUM7QUFDMUYscUJBQWUsS0FBSyxvQkFBb0IsT0FBTyxNQUFNLEdBQUcsTUFBTSxHQUFHLFlBQVksa0JBQWtCLEtBQUssZ0JBQWdCLG9CQUFvQixNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7QUFBQSxJQUN4SztBQUNBLGVBQVcsUUFBUSxLQUFLLGlCQUFrQixnQkFBZSxLQUFLLG9CQUFvQixLQUFLLE9BQU8sS0FBSyxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUM7QUFFekgsVUFBTSxrQkFBcUYsQ0FBQztBQUM1RixlQUFXLFNBQVMsS0FBSyxTQUFTO0FBQ2hDLFlBQU0sYUFBYSxLQUFLLGdCQUFnQixLQUFLO0FBQzdDLFlBQU0sT0FBTyxLQUFLLFdBQVc7QUFDN0Isc0JBQWdCLEtBQUssRUFBRSxTQUFTLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxRQUFRLE1BQU0sUUFBUSxXQUFXLE1BQU0sV0FBVyxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ3pJLHFCQUFlLEtBQUssb0JBQW9CLE1BQU0sT0FBTyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0saUJBQWlCLEtBQUssZ0JBQWdCLG9CQUFvQixNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssTUFBTSxLQUFLLENBQUMsQ0FBQztBQUFBLElBQzdLO0FBQ0EsZUFBVyxVQUFVLEtBQUssWUFBWTtBQUNwQyxZQUFNLE1BQU0sVUFBVSxRQUFRLE9BQU8sS0FBSztBQUMxQyxhQUFPLE1BQU0sUUFBUSxXQUFXLElBQUksT0FBTyxTQUFTLElBQUksQ0FBQztBQUN6RCxhQUFPLE1BQU0sUUFBUSxZQUFZLElBQUksZUFBZSxlQUFlO0FBQ25FLHFCQUFlLEtBQUssb0JBQW9CLE9BQU8sT0FBTyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUkscUJBQXFCLEtBQUssZ0JBQWdCLG9CQUFvQixPQUFPLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFDdks7QUFDQSxlQUFXLFVBQVUsS0FBSyxhQUFhO0FBQ3JDLFlBQU0sT0FBTyxpQkFBaUIsUUFBUSxPQUFPLFlBQVk7QUFDekQsYUFBTyxNQUFNLFFBQVEsV0FBVyxHQUFHLEtBQUssYUFBYSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUM7QUFDMUUsYUFBTyxNQUFNLFFBQVEsWUFBWSxLQUFLLFdBQVc7QUFDakQscUJBQWUsS0FBSyxvQkFBb0IsT0FBTyxPQUFPLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxxQkFBcUIsS0FBSyxnQkFBZ0Isb0JBQW9CLE9BQU8sR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFBQSxJQUN2SztBQUVBLFVBQU0sWUFBWSx1QkFBdUIsWUFBWSxnQkFBZ0IsS0FBSyxpQkFBaUIsSUFBSSxjQUFjLEdBQUcsS0FBSyxnQkFBZ0Isa0JBQWtCO0FBQ3ZKLGNBQVUsV0FBVyxLQUFLLEdBQUcsa0NBQWtDLGlCQUFpQixLQUFLLGdCQUFnQixrQkFBa0IsQ0FBQztBQUN4SCxTQUFLLFNBQVMsT0FBTyxXQUFXLE1BQU0sR0FBSTtBQUFBLEVBQzVDO0FBQUEsRUFFQSxXQUE4QjtBQUM1QixXQUFPO0FBQUEsTUFDTCxNQUFNLEtBQUs7QUFBQSxNQUNYLGFBQWEsS0FBSyxnQkFBZ0I7QUFBQSxNQUNsQyxXQUFXLEtBQUs7QUFBQSxNQUNoQixlQUFlLEtBQUs7QUFBQSxNQUNwQixTQUFTLEtBQUs7QUFBQSxNQUNkLE9BQU87QUFBQSxRQUNMLE1BQU0sS0FBSyxNQUFNO0FBQUEsUUFDakIsT0FBTyxLQUFLLE1BQU07QUFBQSxRQUNsQixHQUFHLEtBQUssTUFBTTtBQUFBLFFBQ2QsU0FBUyxLQUFLLE1BQU07QUFBQSxRQUNwQixXQUFXLEtBQUssTUFBTTtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixLQUFLLEtBQUssZUFBZSxNQUFNLEVBQUUsR0FBRyxLQUFLLGVBQWUsSUFBSSxJQUFJO0FBQUEsUUFDaEUsUUFBUSxLQUFLLGVBQWUsUUFBUSxZQUFZO0FBQUEsUUFDaEQsT0FBTyxLQUFLLGVBQWUsUUFBUSxFQUFFLElBQUksS0FBSyxlQUFlLE1BQU0sU0FBUyxPQUFPLEtBQUssZUFBZSxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ3pIO0FBQUEsTUFDQSxTQUFTLEtBQUssUUFBUSxJQUFJLFlBQVU7QUFBQSxRQUNsQyxJQUFJLE1BQU07QUFBQSxRQUNWLFNBQVMsTUFBTTtBQUFBLFFBQ2YsTUFBTSxNQUFNO0FBQUEsUUFDWixHQUFHLE1BQU07QUFBQSxRQUNULEdBQUcsTUFBTTtBQUFBLFFBQ1QsUUFBUSxNQUFNO0FBQUEsUUFDZCxXQUFXLE1BQU07QUFBQSxRQUNqQixPQUFPLE1BQU07QUFBQSxNQUNmLEVBQUU7QUFBQSxNQUNGLFNBQVM7QUFBQSxRQUNQLE1BQU0sS0FBSyxXQUFXO0FBQUEsUUFDdEIsU0FBUyxLQUFLLGNBQWM7QUFBQSxRQUM1QixRQUFRLEtBQUssYUFBYTtBQUFBLFFBQzFCLGFBQWEsS0FBSyxZQUFZO0FBQUEsTUFDaEM7QUFBQSxNQUNBLE9BQU8sS0FBSztBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxVQUFnQjtBQUNkLFNBQUssU0FBUztBQUNkLFNBQUssU0FBUyxRQUFRO0FBQUEsRUFDeEI7QUFBQSxFQUVRLHFCQUEyQjtBQUNqQyxRQUFJLENBQUMsS0FBSyxZQUFhO0FBQ3ZCLFdBQ0UsS0FBSyxrQkFBa0IsS0FBSyxjQUFjLFVBQzFDLEtBQUsscUJBQXFCLEtBQUssY0FBYyxLQUFLLGVBQWUsQ0FBQyxLQUFLLEtBQUssZ0JBQWdCLEtBQUssaUJBQWlCLEtBQUssY0FBYyxLQUFLLGVBQWUsQ0FBQyxHQUMxSjtBQUNBLFlBQU0sU0FBUyxLQUFLLGNBQWMsS0FBSyxpQkFBaUI7QUFDeEQsWUFBTSxPQUFhLE9BQU8sU0FBUyxTQUFTLElBQUk7QUFDaEQsWUFBTSx1QkFBdUIsMkJBQTJCLE9BQU8sRUFBRTtBQUNqRSxVQUFJLHNCQUFzQjtBQUN4QixjQUFNLEVBQUUsU0FBUyxXQUFXLElBQUk7QUFDaEMsYUFBSyxRQUFRLEtBQUs7QUFBQSxVQUNoQixJQUFJLEVBQUUsS0FBSztBQUFBLFVBQ1gsV0FBVztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsVUFDQSxHQUFHLEtBQUssUUFBUSxNQUFNO0FBQUEsVUFDdEIsR0FBRyxLQUFLLFlBQVksTUFBTTtBQUFBLFVBQzFCLFFBQVEsV0FBVyxTQUFTLEtBQUssWUFBWSxXQUFXLFFBQVE7QUFBQSxVQUNoRSxXQUFXLFdBQVcsU0FBUyxLQUFLLFlBQVksV0FBVyxRQUFRO0FBQUEsVUFDbkUsaUJBQWlCLE9BQU87QUFBQSxVQUN4QixPQUFPLE9BQU87QUFBQSxVQUNkLE9BQU8saUJBQWlCLE9BQU87QUFBQSxVQUMvQixPQUFPO0FBQUEsUUFDVCxDQUFDO0FBQ0QsWUFBSSxXQUFXLFdBQVksTUFBSyxLQUFLLFdBQVcsVUFBVTtBQUFBLE1BQzVELFdBQVcsT0FBTyxHQUFHLFdBQVcsb0JBQW9CLEdBQUc7QUFDckQsY0FBTSxZQUFZLE9BQU8sR0FBRyxNQUFNLHFCQUFxQixNQUFNO0FBQzdELFlBQUksRUFBRSxhQUFhLFVBQVUsU0FBVSxPQUFNLElBQUksTUFBTSw4QkFBOEIsT0FBTyxFQUFFLElBQUk7QUFDbEcsYUFBSyxlQUFlLEVBQUUsTUFBTSxHQUFHLEtBQUssUUFBUSxNQUFNLEdBQUcsR0FBRyxLQUFLLGFBQWEsTUFBTSxHQUFHLE9BQU8sV0FBb0IsT0FBTyxHQUFHLGlCQUFpQixPQUFPLGdCQUFnQixDQUFDO0FBQUEsTUFDbkssV0FBVyxPQUFPLEdBQUcsV0FBVyx1QkFBdUIsR0FBRztBQUN4RCxjQUFNLFlBQVksT0FBTyxHQUFHLE1BQU0sd0JBQXdCLE1BQU07QUFDaEUsWUFBSSxFQUFFLGFBQWEsYUFBYSxTQUFVLE9BQU0sSUFBSSxNQUFNLGlDQUFpQyxPQUFPLEVBQUUsSUFBSTtBQUN4RyxhQUFLLGtCQUFrQixFQUFFLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxHQUFHLEdBQUcsS0FBSyxhQUFhLE1BQU0sR0FBRyxVQUFVLFdBQXVCLGlCQUFpQixPQUFPLGdCQUFnQixDQUFDO0FBQUEsTUFDbEssV0FBVyxPQUFPLEdBQUcsV0FBVyxzQkFBc0IsR0FBRztBQUN2RCxjQUFNLFlBQVksT0FBTyxHQUFHLE1BQU0sdUJBQXVCLE1BQU07QUFDL0QsWUFBSSxFQUFFLGFBQWEsWUFBWSxTQUFVLE9BQU0sSUFBSSxNQUFNLGdDQUFnQyxPQUFPLEVBQUUsSUFBSTtBQUN0RyxhQUFLLGlCQUFpQixFQUFFLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxHQUFHLEdBQUcsS0FBSyxhQUFhLE1BQU0sR0FBRyxTQUFTLFdBQXNCLGlCQUFpQixPQUFPLGdCQUFnQixDQUFDO0FBQUEsTUFDL0osV0FBVyxPQUFPLE9BQU8sNEJBQTRCO0FBQ25ELGFBQUssc0JBQXNCLEVBQUUsTUFBTSxHQUFHLEtBQUssUUFBUSxNQUFNLEdBQUcsR0FBRyxLQUFLLGFBQWEsTUFBTSxHQUFHLGlCQUFpQixPQUFPLGdCQUFnQixDQUFDO0FBQUEsTUFDckksT0FBTztBQUNMLGNBQU0sSUFBSSxNQUFNLG9CQUFvQixPQUFPLEVBQUUsd0NBQXdDO0FBQUEsTUFDdkY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRVEsZ0JBQXlCO0FBQy9CLFdBQU8sS0FBSyxtQkFBbUIsS0FBSyxjQUFjLFVBQzdDLEtBQUssUUFBUSxXQUFXLEtBQ3hCLEtBQUssV0FBVyxXQUFXLEtBQzNCLEtBQUssY0FBYyxXQUFXLEtBQzlCLEtBQUssYUFBYSxXQUFXLEtBQzdCLEtBQUssWUFBWSxXQUFXO0FBQUEsRUFDbkM7QUFBQSxFQUVRLE9BQWE7QUFDbkIsUUFBSSxDQUFDLEtBQUssZUFBZSxJQUFLO0FBQzlCLFVBQU0sRUFBRSxJQUFJLE9BQU8sT0FBTyxTQUFTLElBQUksS0FBSyxlQUFlO0FBQzNELFVBQU0sTUFBTSxVQUFVLFFBQVEsS0FBSztBQUNuQyxVQUFNLFNBQVMsSUFBSSxPQUFPLEtBQUssVUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLElBQUksT0FBTyxDQUFDO0FBQy9FLFVBQU0sU0FBUyxLQUFLLE1BQU0sT0FBTyxLQUFLLFFBQVEsR0FBRyxLQUFLLE1BQU0sQ0FBQyxFQUFFLElBQUksWUFBVSxFQUFFLEdBQUcsTUFBTSxHQUFHLEdBQUcsS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRSxFQUFFO0FBQ25JLFNBQUssY0FBYyxLQUFLLEtBQUssUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFdBQVcsS0FBSyxNQUFNLENBQUM7QUFDMUYsU0FBSyxZQUFZLElBQUksT0FBTztBQUM1QixTQUFLLFlBQVksS0FBSztBQUFBLEVBQ3hCO0FBQUEsRUFFUSxrQkFBa0IsT0FBcUI7QUFDN0MsU0FBSyxjQUFjLGtCQUFrQixPQUFPLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxXQUFTLE9BQU8sT0FBTyxPQUFPO0FBQUEsTUFDekcsUUFBUSxLQUFLLGdCQUFnQixLQUFLLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFBQSxJQUMxRCxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sR0FBRyxNQUFNLEtBQUssT0FBTyxLQUFLLE9BQU8sUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLFVBQVU7QUFDM0YsWUFBTSxZQUFZO0FBQ2xCLFlBQU0sU0FBUyxtQkFBbUI7QUFBQSxRQUNoQyxPQUFPO0FBQUEsUUFDUCxTQUFTLEtBQUs7QUFBQSxRQUNkLGlCQUFpQixLQUFLLFNBQVMsS0FBSyxZQUFZO0FBQUEsUUFDaEQsT0FBTyxLQUFLLGVBQWUsU0FBUztBQUFBLE1BQ3RDLENBQUM7QUFDRCxVQUFJLE9BQU8sUUFBUTtBQUNqQixhQUFLO0FBQ0wsYUFBSyxLQUFLLE9BQU8sV0FBVyxVQUFVO0FBQUEsTUFDeEMsT0FBTztBQUNMLGFBQUssS0FBSyxlQUFlO0FBQ3pCLGFBQUssS0FBSyxVQUFVO0FBQUEsTUFDdEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFUSx3QkFBd0IsT0FBZSxXQUEyRCxVQUFvQztBQUM1SSxVQUFNLEtBQUssS0FBSyxNQUFNO0FBQ3RCLFVBQU0sS0FBSyxLQUFLLFFBQVE7QUFDeEIsUUFBSSxLQUFLLGVBQWUsVUFBVSxXQUFXO0FBQzNDLFlBQU0sY0FBYyxLQUFLLGVBQWU7QUFDeEMsWUFBTSxnQkFBZ0IsbUJBQW1CLEtBQUssU0FBUztBQUFBLFFBQ3JELFFBQVEsRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHO0FBQUEsUUFDdkIsTUFBTSxLQUFLO0FBQUEsUUFDWCxPQUFPLFVBQVUsU0FBUyxLQUFLLE1BQU07QUFBQSxRQUNyQyxzQkFBc0I7QUFBQSxRQUN0QixTQUFTO0FBQUEsTUFDWCxDQUFDO0FBRUQsWUFBTSxlQUFlLFdBQVcsYUFBYSxXQUFXLGVBQWUsSUFBSSxJQUFJLEtBQUssV0FBVyxLQUFLO0FBQ3BHLFVBQUksYUFBYSxhQUFhLFNBQVMsR0FBRztBQUN4QyxtQkFBVyxTQUFTLEtBQUssU0FBUztBQUNoQyxjQUFJLENBQUMsYUFBYSxhQUFhLFNBQVMsTUFBTSxFQUFFLEVBQUc7QUFDbkQsZ0JBQU0sS0FBSyxNQUFNLElBQUk7QUFDckIsZ0JBQU0sS0FBSyxNQUFNLElBQUk7QUFDckIsZ0JBQU0sT0FBTyxLQUFLLE1BQU0sSUFBSSxFQUFFLEtBQUs7QUFDbkMsZ0JBQU0sS0FBTSxLQUFLLE9BQVEsYUFBYSxlQUFlLEtBQUssTUFBTTtBQUNoRSxnQkFBTSxLQUFNLEtBQUssT0FBUSxhQUFhLGVBQWUsS0FBSyxNQUFNO0FBQUEsUUFDbEU7QUFDQSxhQUFLLEtBQUssYUFBYTtBQUFBLE1BQ3pCO0FBQ0EsVUFBSSxhQUFhLHNCQUFzQixTQUFTLEdBQUc7QUFDakQsbUJBQVcsU0FBUyxDQUFDLEdBQUcsS0FBSyxPQUFPLEdBQUc7QUFDckMsY0FBSSxNQUFNLFNBQVMsQ0FBQyxhQUFhLHNCQUFzQixTQUFTLE1BQU0sRUFBRSxFQUFHO0FBQzNFLGdCQUFNLFVBQVUsYUFBYSxzQkFBc0I7QUFDbkQsY0FBSSxNQUFNLFVBQVUsRUFBRyxNQUFLLGFBQWEsS0FBSztBQUFBLFFBQ2hEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxRQUFJLEtBQUssZUFBZSxTQUFTLFVBQVU7QUFDekMsWUFBTSxhQUFhLEtBQUssZUFBZTtBQUN2QyxZQUFNLGtCQUFrQixTQUFTLFdBQzdCLEtBQUssSUFBSSxLQUFLLE9BQU8sT0FBTyxTQUFTLFFBQVEsS0FBSyxNQUFNLENBQUMsSUFDekQsU0FBUyxRQUFRLEtBQUssTUFBTTtBQUNoQyxZQUFNLGVBQWUsbUJBQW1CLEtBQUssU0FBUztBQUFBLFFBQ3BELFFBQVEsRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHO0FBQUEsUUFDdkIsTUFBTSxLQUFLO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxzQkFBdUIsU0FBUyxrQkFBeUM7QUFBQSxRQUN6RSxZQUFZLFNBQVMsV0FBVyxTQUFZLFNBQVM7QUFBQSxRQUNyRCxTQUFTO0FBQUEsTUFDWCxDQUFDLEVBQUUsT0FBTyxZQUFVLENBQUMsU0FBUyxZQUFZLEtBQUssSUFBSSxPQUFPLE9BQU8sSUFBSSxFQUFFLEtBQUssU0FBUyxRQUFRLEtBQUssTUFBTSxDQUFDO0FBQ3pHLFlBQU0sY0FBYyxVQUFVLFlBQVksVUFBVSxjQUFjLElBQUksSUFBSSxLQUFLLFdBQVcsT0FBTyxZQUFZLFNBQVMsS0FBSyxHQUFHLHNCQUFzQixLQUFLLGlCQUFpQixHQUFHLEtBQUssTUFBTSxLQUFLO0FBQzdMLFVBQUksWUFBWSxrQkFBa0IsWUFBWSxZQUFZLFNBQVMsR0FBRztBQUNwRSxhQUFLLHdCQUF3QixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVDLGFBQUssS0FBSyxrQkFBa0I7QUFDNUIsYUFBSyxxQkFBcUI7QUFBQSxVQUN4QixNQUFNLEtBQUssa0JBQWtCLFlBQVksWUFBWSxXQUFXLGlCQUFpQjtBQUFBLFVBQ2pGLFFBQVEsWUFBWTtBQUFBLFVBQ3BCLE9BQU8sWUFBWSxTQUFTLEtBQUs7QUFBQSxVQUNqQyxlQUFlLG9CQUFvQixXQUFXLE9BQU87QUFBQSxRQUN2RDtBQUFBLE1BQ0Y7QUFDQSxXQUFLLHdCQUF3QjtBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBLEVBRVEsa0JBQWtCLFNBQXNELE1BQXlEO0FBQ3ZJLFFBQUksUUFBUSxXQUFXLEVBQUcsUUFBTyxDQUFDO0FBQ2xDLFVBQU0sV0FBVyxzQkFBc0IsS0FBSyxpQkFBaUI7QUFDN0QsVUFBTSxLQUFLLFFBQVEsSUFBSSxZQUFVLE9BQU8sQ0FBQztBQUN6QyxVQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRTtBQUMzQixVQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRTtBQUMzQixVQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxJQUFJO0FBQ3BDLFVBQU0sY0FBYyxTQUFTO0FBQzdCLFdBQU8sUUFBUSxJQUFJLFlBQVU7QUFDM0IsWUFBTSxlQUFlLGVBQ2hCLE9BQU8sSUFBSSxRQUFRLFFBQ25CLE9BQU8sT0FBTyxLQUFLO0FBQ3hCLGFBQU87QUFBQSxRQUNMLFNBQVMsT0FBTztBQUFBLFFBQ2hCLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxvQkFBb0IsWUFBWTtBQUFBLE1BQzFFO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRVEsb0JBQW9CLGVBQWUsTUFBYTtBQUN0RCxVQUFNLFNBQVMsS0FBSztBQUNwQixVQUFNLFNBQVMsT0FBTyxrQkFBa0I7QUFDeEMsVUFBTSxnQkFBZ0IsT0FBTyx5QkFBeUI7QUFDdEQsVUFBTSxRQUFRLEtBQUssSUFBSSxNQUFLLFNBQVMsYUFBYTtBQUNsRCxVQUFNLHNCQUFzQixLQUFLLElBQUksTUFBSyxLQUFLLElBQUksTUFBSyxZQUFZLENBQUM7QUFDckUsV0FBTyxLQUFLLElBQUksTUFBTSxTQUFTLHNCQUF1QixLQUFLO0FBQUEsRUFDN0Q7QUFBQSxFQUVRLHdCQUF3QixVQUErQixDQUFDLEdBQVM7QUFDdkUsVUFBTSxVQUFVLEtBQUs7QUFDckIsUUFBSSxDQUFDLFFBQVM7QUFDZCxVQUFNLFVBQVUsUUFBUSxRQUNwQixRQUFRLE9BQ1IsUUFBUSxLQUFLLE9BQU8sU0FBTyxLQUFLLGFBQWEsSUFBSSxLQUFLO0FBQzFELFFBQUksUUFBUSxXQUFXLEVBQUc7QUFDMUIsVUFBTSxjQUFjLFFBQVEsSUFBSSxTQUFPLElBQUksT0FBTztBQUNsRCxZQUFRLE9BQU8sUUFBUSxLQUFLLE9BQU8sU0FBTyxDQUFDLFlBQVksU0FBUyxJQUFJLE9BQU8sQ0FBQztBQUM1RSxRQUFJLFFBQVEsS0FBSyxXQUFXLEVBQUcsTUFBSyxxQkFBcUI7QUFDekQsUUFBSSxXQUFXO0FBQ2YsZUFBVyxTQUFTLENBQUMsR0FBRyxLQUFLLE9BQU8sR0FBRztBQUNyQyxVQUFJLE1BQU0sU0FBUyxDQUFDLFlBQVksU0FBUyxNQUFNLEVBQUUsRUFBRztBQUNwRCxpQkFBVztBQUNYLFlBQU0sU0FBUyxtQkFBbUI7QUFBQSxRQUNoQztBQUFBLFFBQ0EsU0FBUyxLQUFLO0FBQUEsUUFDZCxRQUFRLFFBQVE7QUFBQSxRQUNoQixpQkFBaUIsUUFBUTtBQUFBLFFBQ3pCLE9BQU8sUUFBUTtBQUFBLE1BQ2pCLENBQUM7QUFDRCxVQUFJLE9BQU8sUUFBUTtBQUNqQixhQUFLO0FBQ0wsYUFBSyxLQUFLLE9BQU8sV0FBVyxVQUFVO0FBQUEsTUFDeEM7QUFBQSxJQUNGO0FBQ0EsUUFBSSxTQUFVLE1BQUssS0FBSyxRQUFRLGFBQWE7QUFBQSxFQUMvQztBQUFBLEVBRVEsY0FBYyxPQUFlLFdBQWlFO0FBQ3BHLFVBQU0sZUFBZSxvQkFBSSxJQUFZO0FBQ3JDLFVBQU0sS0FBSyxLQUFLLE1BQU07QUFDdEIsVUFBTSxLQUFLLEtBQUssUUFBUTtBQUN4QixlQUFXLFNBQVMsQ0FBQyxHQUFHLEtBQUssT0FBTyxHQUFHO0FBQ3JDLFlBQU0sTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSztBQUMxQyxZQUFNLFlBQVksYUFBYSxJQUFJLE1BQU0sRUFBRSxJQUN2QyxNQUFNLG1CQUFtQixXQUFXLGtCQUFrQixLQUN0RCxNQUFNO0FBQ1YsWUFBTSxLQUFLLEtBQUssZ0JBQWdCLEtBQUssRUFBRSxRQUFRLFlBQVksS0FBSyxNQUFNLElBQUksUUFBUSxNQUFNLE1BQU0sSUFBSSxLQUFLLE9BQU8sU0FBUztBQUN2SCxZQUFNLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDdkIsVUFBSSxNQUFNLFNBQVMsTUFBTSxNQUFNLFVBQVU7QUFDdkMsYUFBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLFFBQVEsS0FBSyxHQUFHLENBQUM7QUFDbEQ7QUFBQSxNQUNGO0FBQ0EsVUFBSSxNQUFNLE1BQU87QUFFakIsVUFBSSxLQUFLLGVBQWUsVUFBVSxXQUFXO0FBQzNDLGNBQU0sZ0JBQWdCLHFCQUFxQixLQUFLLGVBQWUsUUFBUSxXQUFXLE9BQU8sT0FBTyxPQUFPO0FBQUEsVUFDckcsUUFBUSxLQUFLLGdCQUFnQixLQUFLLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFBQSxRQUMxRCxDQUFDLEdBQUcsSUFBSSxJQUFJLEtBQUssV0FBVyxLQUFLLE1BQU0sQ0FBQztBQUN4QyxZQUFJLGNBQWMsVUFBVTtBQUMxQixjQUFJLGNBQWMsZ0JBQWdCO0FBQ2hDLGlCQUFLLGFBQWEsS0FBSztBQUFBLFVBQ3pCLE9BQU87QUFDTCxrQkFBTSxNQUFNLE9BQU8sRUFBRSxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLFdBQVcsY0FBYyxpQkFBaUIsS0FBSyxnQkFBZ0IsS0FBSyxFQUFFLGlCQUFpQixDQUFDO0FBQ3hJLGlCQUFLLEtBQUssY0FBYztBQUFBLFVBQzFCO0FBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLFVBQUksS0FBSyxvQkFBb0IsS0FBSyxLQUFLLFNBQU8sSUFBSSxZQUFZLE1BQU0sRUFBRSxFQUFHO0FBRXpFLFlBQU0sV0FBVyxLQUFLLE1BQU0sT0FBTyxLQUFLLFFBQVEsR0FBRyxLQUFLLE1BQU0sQ0FBQyxFQUFFLFVBQVUsV0FBUyxLQUFLLE1BQU0sTUFBTSxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxnQkFBZ0IsS0FBSyxFQUFFLFNBQVMsR0FBRztBQUNoTCxVQUFJLFlBQVksR0FBRztBQUNqQixjQUFNLFFBQVEsS0FBSyxNQUFNLE9BQU8sS0FBSyxRQUFRLEdBQUcsS0FBSyxNQUFNLENBQUMsRUFBRSxRQUFRO0FBQ3RFLGNBQU0sUUFBUSxLQUFLLGFBQWEsUUFBUSxLQUFLLElBQUksZUFBZSxFQUFFLE9BQU8sWUFBWSxPQUFPLENBQUM7QUFDN0YsY0FBTSxtQkFBbUI7QUFDekIsY0FBTSwrQkFBaUM7QUFDdkMsYUFBSyxpQkFBaUIsS0FBSyxFQUFFLE9BQU8sR0FBRyxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUM1RCxhQUFLLGFBQWEsT0FBTyxVQUFVLENBQUM7QUFDcEMsYUFBSyxNQUFNLE9BQU87QUFDbEIsYUFBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLFFBQVEsS0FBSyxHQUFHLENBQUM7QUFDbEQsYUFBSyxLQUFLLGNBQWM7QUFDeEIsYUFBSyxLQUFLLGlCQUFpQjtBQUMzQixZQUFJLEtBQUssTUFBTSxVQUFVLEVBQUcsTUFBSyxLQUFLLGtCQUFrQjtBQUN4RCxZQUFJLEtBQUssU0FBUyxVQUFVLEtBQUssTUFBTSxVQUFVLEdBQUc7QUFDbEQsZUFBSyxnQkFBZ0I7QUFDckIsZUFBSyxPQUFPLEtBQUs7QUFDakI7QUFBQSxRQUNGO0FBQ0E7QUFBQSxNQUNGO0FBRUEsVUFBSSxNQUFNLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFDN0IsWUFBSSxLQUFLLFNBQVMsUUFBUTtBQUN4QixlQUFLO0FBQ0wsZUFBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLFFBQVEsS0FBSyxHQUFHLENBQUM7QUFDbEQsZUFBSyxLQUFLLGNBQWM7QUFDeEIsZUFBSyxnQkFBZ0I7QUFDckIsZUFBSyxPQUFPLEtBQUs7QUFDakI7QUFBQSxRQUNGO0FBQ0EsWUFBSSxNQUFNLElBQUksS0FBSyxPQUFPLFNBQVMsS0FBSyxnQkFBZ0IsS0FBSyxFQUFFLFNBQVMsRUFBRyxNQUFLLFFBQVEsT0FBTyxLQUFLLFFBQVEsUUFBUSxLQUFLLEdBQUcsQ0FBQztBQUFBLE1BQy9IO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVRLGNBQWMsT0FBcUI7QUFDekMsZUFBVyxVQUFVLENBQUMsR0FBRyxLQUFLLFVBQVUsR0FBRztBQUN6QyxhQUFPLE1BQU0sT0FBTyxLQUFLO0FBQ3pCLGFBQU8sS0FBSyxLQUFLLE9BQU8sa0JBQWtCLEtBQUssTUFBTSxJQUFJO0FBQ3pELFVBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxTQUFTLEtBQUssWUFBWTtBQUNyRixhQUFLLGVBQWUsTUFBTSxFQUFFLElBQUksT0FBTyxPQUFPLE9BQU8sT0FBTyxNQUFNO0FBQ2xFLGFBQUssV0FBVztBQUNoQixhQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUN6RCxhQUFLLFdBQVcsV0FBVztBQUMzQixhQUFLLEtBQUssYUFBYTtBQUFBLE1BQ3pCLFdBQVcsT0FBTyxJQUFJLEtBQUssT0FBTyxPQUFRLE1BQUssV0FBVyxPQUFPLEtBQUssV0FBVyxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQUEsSUFDckc7QUFFQSxlQUFXLFVBQVUsQ0FBQyxHQUFHLEtBQUssYUFBYSxHQUFHO0FBQzVDLGFBQU8sS0FBSyxLQUFLLE9BQU8sa0JBQWtCLEtBQUssTUFBTSxJQUFJO0FBQ3pELFVBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxTQUFTLEtBQUssWUFBWTtBQUNyRixjQUFNLE1BQU0sYUFBYSxRQUFRLE9BQU8sUUFBUTtBQUNoRCxhQUFLLGVBQWUsU0FBUyxJQUFJLFlBQVksT0FBTyxVQUFVLElBQUksVUFBVTtBQUM1RSxhQUFLLGNBQWMsT0FBTyxLQUFLLGNBQWMsUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUMvRCxhQUFLLFdBQVcsY0FBYztBQUM5QixhQUFLLEtBQUssUUFBUTtBQUFBLE1BQ3BCLFdBQVcsT0FBTyxJQUFJLEtBQUssT0FBTyxPQUFRLE1BQUssY0FBYyxPQUFPLEtBQUssY0FBYyxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQUEsSUFDM0c7QUFFQSxlQUFXLFVBQVUsQ0FBQyxHQUFHLEtBQUssWUFBWSxHQUFHO0FBQzNDLGFBQU8sS0FBSyxLQUFLLE9BQU8sa0JBQWtCLEtBQUssTUFBTSxJQUFJO0FBQ3pELFVBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxTQUFTLEtBQUssWUFBWTtBQUNyRixjQUFNLFVBQVUsS0FBSyxlQUFlO0FBQ3BDLGFBQUssZUFBZSxRQUFRLElBQUksV0FBVyxPQUFPLFNBQVMsU0FBUyxZQUFZLE9BQU8sVUFBVSxRQUFRLFFBQVEsSUFBSSxDQUFDO0FBQ3RILGFBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQzdELGFBQUssV0FBVyxhQUFhO0FBQzdCLGFBQUssS0FBSyxhQUFhO0FBQUEsTUFDekIsV0FBVyxPQUFPLElBQUksS0FBSyxPQUFPLE9BQVEsTUFBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxJQUN6RztBQUVBLGVBQVcsVUFBVSxDQUFDLEdBQUcsS0FBSyxXQUFXLEdBQUc7QUFDMUMsYUFBTyxNQUFNLE9BQU8sS0FBSztBQUN6QixhQUFPLEtBQUssS0FBSyxPQUFPLGtCQUFrQixLQUFLLE1BQU0sSUFBSTtBQUN6RCxVQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sU0FBUyxLQUFLLFlBQVk7QUFDckYsYUFBSyxNQUFNLElBQUksaUJBQWlCLFFBQVEsT0FBTyxZQUFZLEVBQUUsVUFBVTtBQUN2RSxhQUFLLGlCQUFpQjtBQUN0QixhQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUMzRCxhQUFLLFdBQVcsa0JBQWtCO0FBQUEsTUFDcEMsV0FBVyxPQUFPLElBQUksS0FBSyxPQUFPLE9BQVEsTUFBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxJQUN2RztBQUFBLEVBQ0Y7QUFBQSxFQUVRLE9BQU8sS0FBb0I7QUFDakMsUUFBSSxDQUFDLEtBQUssWUFBYTtBQUN2QixVQUFNLFFBQVEsTUFBTSxpQkFBaUI7QUFDckMsVUFBTSxTQUFTLE1BQU0sMENBQTBDLEtBQUssaUJBQWlCLEdBQUcsS0FBSyxRQUFRLFNBQVMsS0FBSyxhQUFhLElBQUksS0FBSyxLQUFLO0FBQzlJLFFBQUksS0FBSztBQUNQLFdBQUssVUFBVSxJQUFJLHNCQUFzQjtBQUFBLFFBQ3ZDLFNBQVMsS0FBSyxPQUFPLFFBQVE7QUFBQSxRQUM3QixTQUFTLEtBQUssT0FBTyxTQUFTO0FBQUEsUUFDOUIsT0FBTyxLQUFLLE9BQU87QUFBQSxRQUNuQixRQUFRLEtBQUssT0FBTztBQUFBLFFBQ3BCLGVBQWU7QUFBQSxNQUNqQixDQUFDO0FBQ0QsV0FBSyxLQUFLLGdCQUFnQjtBQUFBLElBQzVCLE9BQU87QUFDTCxXQUFLLEtBQUssVUFBVTtBQUFBLElBQ3RCO0FBQ0EsU0FBSyxjQUFjO0FBQ25CLFNBQUssV0FBVyxFQUFFLEtBQUssT0FBTyxRQUFRLFVBQVUsS0FBSyxTQUFTLENBQUM7QUFBQSxFQUNqRTtBQUFBLEVBRVEsbUJBQXlCO0FBQy9CLFdBQU8sS0FBSyxhQUFhLFNBQVMsS0FBSyxNQUFNLE1BQU8sTUFBSyxhQUFhLEtBQUssSUFBSSxlQUFlLEVBQUUsT0FBTyxZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQzVILFFBQUksS0FBSyxhQUFhLFNBQVMsS0FBSyxNQUFNLE1BQU8sTUFBSyxhQUFhLFNBQVMsS0FBSyxNQUFNO0FBQUEsRUFDekY7QUFBQSxFQUVRLHVCQUE2QjtBQUNuQyxtQ0FBK0IsS0FBSyxjQUFjLEtBQUssWUFBWTtBQUFBLEVBQ3JFO0FBQUEsRUFFUSxlQUFlLE9BQXNCO0FBQzNDLFdBQU8sTUFBTSxNQUFNLFNBQVMsTUFBTSxNQUFNLE1BQU07QUFBQSxFQUNoRDtBQUFBLEVBRVEsZ0JBQWdCLE9BQWlEO0FBQ3ZFLFdBQU8sVUFBVSxRQUFRLE1BQU0sT0FBTztBQUFBLEVBQ3hDO0FBQUEsRUFFUSxhQUFhLE9BQW9CO0FBQ3ZDLFVBQU0sYUFBYSxZQUFZLE9BQU8sS0FBSyxrQkFBa0IsS0FBSyxlQUFlLEtBQUssQ0FBQztBQUN2RixTQUFLO0FBQ0wsU0FBSyxLQUFLLFdBQVcsVUFBVTtBQUFBLEVBQ2pDO0FBQUEsRUFFUSxRQUFRLFFBQW1DO0FBQ2pELFdBQU8sS0FBSyxNQUFNLE9BQU8sU0FBUyxTQUFTLElBQUksQ0FBQyxLQUFLLE9BQU8sWUFBWSxLQUFLLE9BQU8sYUFBYSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU07QUFBQSxFQUM3SDtBQUFBLEVBRVEsWUFBWSxRQUFtQztBQUNyRCxZQUFRLDJCQUEyQixPQUFPLEVBQUUsR0FBRyxXQUFXLFNBQVMsTUFBTSxPQUFPLGtCQUFrQixLQUFLLE1BQU07QUFBQSxFQUMvRztBQUFBLEVBRVEsWUFBWSxRQUFtQztBQUNyRCxXQUFPLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxNQUFNLElBQUksS0FBSyxpQkFBaUIsTUFBTTtBQUFBLEVBQ2pGO0FBQUEsRUFFUSxhQUFhLFFBQW1DO0FBQ3RELFdBQU8sS0FBSyxRQUFRLElBQUksS0FBSyxZQUFZLE1BQU0sSUFBSSxLQUFLLGlCQUFpQixNQUFNO0FBQUEsRUFDakY7QUFBQSxFQUVRLGlCQUFpQixRQUFtQztBQUMxRCxVQUFNLGlCQUFpQixLQUFLLHFCQUFxQixNQUFNO0FBQ3ZELFdBQU8sS0FBSyxJQUFJLDBCQUEwQixjQUFjO0FBQUEsRUFDMUQ7QUFBQSxFQUVRLHFCQUFxQixRQUFtQztBQUM5RCxXQUFPLDhCQUE4QixLQUFLLElBQUksR0FBRyxPQUFPLHFCQUFxQixDQUFDLElBQUk7QUFBQSxFQUNwRjtBQUFBLEVBRVEsS0FBSyxJQUFrQjtBQUM3QixVQUFNLGVBQWUsdUJBQXVCLEVBQUUsS0FBSztBQUNuRCxRQUFJLGVBQWUsS0FBSyxLQUFLLE9BQU8sWUFBYSxNQUFLLE1BQU0sWUFBWSxJQUFJLFlBQVk7QUFBQSxRQUNuRixNQUFLLE9BQU8sS0FBSyxFQUFFO0FBQUEsRUFDMUI7QUFBQSxFQUVRLFlBQVksT0FBb0I7QUFDdEMsU0FBSyxLQUFLLGdCQUFnQixLQUFLLENBQUM7QUFBQSxFQUNsQztBQUFBLEVBRVEsV0FBVyxJQUE2RTtBQUM5RixTQUFLLEtBQUssUUFBUTtBQUNsQixTQUFLLEtBQUssRUFBRTtBQUFBLEVBQ2Q7QUFDRjs7O0FDNWpDQSxJQUFNLFNBQVMsU0FBUyxjQUFpQyxjQUFjO0FBQ3ZFLElBQU0sVUFBVSxTQUFTLGNBQWdDLFVBQVU7QUFFbkUsSUFBTSxNQUFNLE1BQU07QUFDaEIsUUFBTSxhQUFhO0FBQ25CLFFBQU0sWUFBWSxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsS0FBSyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEtBQUssT0FBTyxFQUFFLENBQUM7QUFDN0UsUUFBTSxxQkFBcUIsQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDdkQsUUFBTSxhQUFhLENBQUMsR0FBRyxXQUFXLEdBQUcsa0JBQWtCO0FBQ3ZELFFBQU0sY0FBYyxvQkFBb0IsWUFBWSxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25FLFFBQU0sY0FBYyxjQUFjLElBQUksVUFBVSxDQUFDLElBQUksY0FBYyxJQUFJLFVBQVUsQ0FBQyxJQUFJO0FBQ3RGLFFBQU0saUJBQWlCLGNBQWMsV0FBVyxPQUFPLFlBQVUsV0FBVyxXQUFXLElBQUk7QUFDM0YsUUFBTSxlQUFlLG9CQUFvQixnQkFBZ0IsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN4RSxRQUFNLGtCQUFrQixvQkFBb0IsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsWUFBWTtBQUM3RSxTQUFPLEVBQUUsYUFBYSxhQUFhLGNBQWMsZ0JBQWdCO0FBQ25FO0FBRUEsSUFBTSxPQUFPLGVBQWUsNkJBQTZCLEVBQUUsT0FBTyxTQUFTLElBQUksR0FBRyxNQUFNO0FBQ3hGLEtBQUssTUFBTTtBQUNYLElBQU0sVUFBVSxJQUFJO0FBQ3BCLElBQU0sYUFBYTtBQUFBLEVBQ2pCLENBQUMsOERBQThELFFBQVEsZ0JBQWdCLENBQUM7QUFBQSxFQUN4RixDQUFDLDJDQUEyQyxRQUFRLGdCQUFnQixJQUFJO0FBQUEsRUFDeEUsQ0FBQywwREFBMEQsUUFBUSxnQkFBZ0IsUUFBUSxRQUFRLGlCQUFpQixLQUFLLEtBQUssS0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLEtBQUssUUFBUSxXQUFXLENBQUM7QUFBQSxFQUMzTCxDQUFDLCtDQUErQyxRQUFRLGdCQUFnQixDQUFDO0FBQUEsRUFDekUsQ0FBQyxxQ0FBcUMsUUFBUSxvQkFBb0IsQ0FBQztBQUNyRTtBQUVBLFFBQVEsWUFBWSxXQUFXLElBQUksQ0FBQyxDQUFDLE1BQU0sTUFBTSxHQUFHLFVBQVU7QUFBQSxxQkFDekMsTUFBTSxpQkFBaUIsS0FBSztBQUFBLGNBQ25DLElBQUk7QUFBQSxZQUNOLFNBQVMsU0FBUyxNQUFNO0FBQUEsUUFDNUIsRUFBRSxLQUFLLEVBQUU7QUFDakIsUUFBUSxpQkFBaUIsSUFBSSxFQUFFLFFBQVEsVUFBUTtBQUM3QyxPQUFLLGlCQUFpQixTQUFTLE1BQU0sS0FBSyxnQkFBZ0IsT0FBTyxLQUFLLGFBQWEsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNwRyxDQUFDO0FBQ0QsV0FBVyxDQUFDLE1BQU0sTUFBTSxLQUFLLFdBQVksTUFBSyxPQUFPLE1BQU0sUUFBUSxTQUFTLFFBQVEsV0FBVyxXQUFXLFFBQVEsWUFBWSxFQUFFO0FBRWhJLElBQU0sZ0JBQWdCLFNBQVMsZUFBZSxnQkFBZ0I7QUFDOUQsSUFBTSxpQkFBaUIsU0FBUyxlQUFlLGlCQUFpQjtBQUNoRSxJQUFNLGNBQWMsU0FBUyxlQUFlLFdBQVc7QUFDdkQsSUFBTSxZQUFZLFNBQVMsZUFBZSxZQUFZO0FBQ3RELElBQU0sV0FBVyxTQUFTLGVBQWUsV0FBVztBQUNwRCxJQUFNLGdCQUFnQixTQUFTLGVBQWUsWUFBWTtBQUMxRCxJQUFNLFdBQVcsU0FBUyxlQUFlLFdBQVc7QUFDcEQsSUFBTSxhQUFhLFNBQVMsZUFBZSxhQUFhO0FBQ3hELElBQU0sU0FBUyxTQUFTLGVBQWUsYUFBYTtBQUNwRCxJQUFNLFFBQVEsU0FBUyxlQUFlLGtCQUFrQixLQUFLO0FBRTdELElBQUksTUFBa0M7QUFDdEMsSUFBSSxvQkFBb0I7QUFDeEIsSUFBSSxXQUFXO0FBRWYsZUFBZSxtQkFBaUQ7QUFDOUQsVUFBUSxNQUFNLG9CQUFvQixPQUFPLEVBQUUsTUFBTSxPQUFPLFFBQVEsY0FBYyxNQUFNLENBQUM7QUFDckYsU0FBTztBQUNUO0FBRUEsZUFBZSxnQkFBZ0IsT0FBOEI7QUFDM0Qsc0JBQW9CO0FBQ3BCLGdCQUFjLFVBQVUsSUFBSSxrQkFBa0I7QUFDOUMsaUJBQWUsZ0JBQWdCLFFBQVE7QUFDdkMsV0FBUyxjQUFjLFdBQVcsS0FBSyxFQUFFLENBQUM7QUFDMUMsUUFBTSxpQkFBaUI7QUFDdkIsa0JBQWdCO0FBQ2xCO0FBRUEsU0FBUyxrQkFBd0I7QUFDL0IsTUFBSSxDQUFDLElBQUs7QUFDVixNQUFJLFNBQVM7QUFDYixNQUFJLE1BQU0sRUFBRSxRQUFRLEtBQUssQ0FBQztBQUMxQixNQUFJLFNBQVMsZUFBZSxDQUFDO0FBQzdCLFFBQU0sT0FBTztBQUNiLFFBQU0sU0FBUyxJQUFJLE1BQU0sSUFBSTtBQUM3QixNQUFJLHNCQUFzQixLQUFLLHNCQUFzQixLQUFLLHNCQUFzQixLQUFLLHNCQUFzQixHQUFHO0FBQzVHLFFBQUksV0FBVyxFQUFFLFNBQVMsWUFBWSxNQUFNLEdBQUcsU0FBUyxJQUFJLEdBQUcsS0FBSyxRQUFRLEdBQUcsV0FBVyxNQUFNLENBQUM7QUFDakcsUUFBSSxXQUFXLEVBQUUsU0FBUyxZQUFZLE1BQU0sR0FBRyxTQUFTLElBQUksR0FBRyxLQUFLLFFBQVEsR0FBRyxXQUFXLE1BQU0sQ0FBQztBQUFBLEVBQ25HO0FBQ0EsTUFBSSxzQkFBc0IsRUFBRyxLQUFJLFdBQVcsRUFBRSxTQUFTLFlBQVksTUFBTSxHQUFHLFFBQVEsR0FBRyxLQUFLLFFBQVEsR0FBRyxXQUFXLE1BQU0sQ0FBQztBQUN6SCxhQUFXO0FBQ1gsV0FBUyxjQUFjO0FBQ3ZCLGdCQUFjLGNBQWM7QUFDNUIsZ0JBQWMsWUFBWTtBQUMxQixnQkFBYztBQUNkLE1BQUksVUFBVTtBQUNoQjtBQUVBLFNBQVMsZ0JBQXNCO0FBQzdCLE1BQUksQ0FBQyxJQUFLO0FBQ1YsUUFBTSxXQUFXLElBQUksU0FBUztBQUM5QixhQUFXLFlBQVk7QUFBQSwyQkFDRSxXQUFXLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUFBLG9DQUN2QixTQUFTLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxVQUFVLFNBQVMsTUFBTSxVQUFVLFFBQVEsQ0FBQyxDQUFDO0FBQUEsMEJBQ2xGLFNBQVMsUUFBUSxNQUFNO0FBQUEsK0JBQ2xCLFNBQVMsVUFBVSxRQUFRLENBQUMsQ0FBQztBQUFBO0FBQUE7QUFHNUQ7QUFFQSxPQUFPLFlBQVksZUFBZSxHQUFHO0FBQ3JDLFlBQVksaUJBQWlCLFNBQVMsTUFBTTtBQUMxQyxPQUFLLFNBQVM7QUFDZCxnQkFBYyxVQUFVLE9BQU8sa0JBQWtCO0FBQ2pELGlCQUFlLGFBQWEsVUFBVSxNQUFNO0FBQzlDLENBQUM7QUFDRCxVQUFVLGlCQUFpQixTQUFTLGVBQWU7QUFDbkQsU0FBUyxpQkFBaUIsU0FBUyxNQUFNO0FBQ3ZDLGFBQVcsQ0FBQztBQUNaLFdBQVMsY0FBYyxXQUFXLFdBQVc7QUFDN0MsTUFBSSxTQUFVLE1BQUssU0FBUztBQUFBLE1BQ3ZCLE1BQUssVUFBVTtBQUN0QixDQUFDOyIsCiAgIm5hbWVzIjogWyJjIiwgImNhbnZhcyIsICJ3aWR0aCIsICJoZWlnaHQiLCAic2hhZGVyIiwgImhleCIsICJjYW52YXMiLCAiaGV4IiwgInNoYWRlciIsICJjYW52YXMiLCAic2hhZGVyIiwgImMiLCAiaGV4IiwgImNhbnZhcyIsICJjb2xvcnMiLCAiYyIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJnZW5lcmF0ZWRUcmFjayIsICJsZXZlbCIsICJyZXN1bHRzIiwgImxldmVsIiwgInJvdGF0aW9uIiwgImVuZW15SWRGcm9tVHJhY2tJZCIsICJ0YXJnZXRTcGFuIiwgInQiLCAiZWFzZSIsICJwb2ludCIsICJsZXZlbCJdCn0K

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
var laneRunnerSceneIds = ["neonHall", "aurora", "crystalForge", "voidGarden", "solarArray"];
var sceneNames = {
  neonHall: "Neon Hall",
  aurora: "Aurora",
  crystalForge: "Crystal Forge",
  voidGarden: "Void Garden",
  solarArray: "Solar Array"
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
    const rowCount2 = Math.max(this.cursor, maxPlacementRow + 1, 1);
    const rows = Array.from({ length: rowCount2 }, () => Array.from({ length: this.laneWidth * 2 }, () => emptySymbol));
    const occupied = Array.from({ length: rowCount2 }, () => /* @__PURE__ */ new Map());
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
  height: 65,
  lookAngleDegrees: 27,
  followDistance: 20,
  zoom: 0.2,
  horizon: 0.51
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

// projects/NeonSwarm/src/sceneEnvironment.ts
var sceneBackgrounds = /* @__PURE__ */ new Map();
function laneRunnerSceneBackgroundUrl(sceneId2) {
  const path = location.pathname;
  const marker = "/NeonSwarm/";
  const nestedIndex = path.indexOf(marker);
  if (nestedIndex >= 0) return `${path.slice(0, nestedIndex)}/NeonSwarm/scenes/${sceneId2}.png`;
  const pageIndex = path.lastIndexOf("/NeonSwarm.html");
  if (pageIndex >= 0) return `${path.slice(0, pageIndex)}/NeonSwarm/scenes/${sceneId2}.png`;
  return `NeonSwarm/scenes/${sceneId2}.png`;
}
function applyLaneRunnerSceneBackground(element, sceneId2) {
  element.style.backgroundPosition = "center";
  element.style.backgroundSize = "cover";
  element.style.backgroundRepeat = "no-repeat";
  const path = laneRunnerSceneBackgroundUrl(sceneId2);
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
  loadedLegendOrder = null;
  renderGrid();
}
function deleteSelectedRow() {
  if (!selected || rowCount() <= 1) return;
  cells.splice(selected.row, 1);
  selected.row = Math.min(selected.row, rowCount() - 1);
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
function syncSceneBackground() {
  applyLaneRunnerSceneBackground(gridPanel, sceneId());
}
function loadTrack(track, exportName) {
  exportVariableName = "generatedTrack";
  loadedLegendOrder = Object.keys(track.definition.legend);
  input("#export-name").value = exportVariableName;
  input("#display-name").value = track.label;
  input("#description").value = track.description;
  input("#enemy-hp").value = Number.isInteger(track.definition.balance.enemyHp) ? track.definition.balance.enemyHp.toFixed(1) : String(track.definition.balance.enemyHp);
  input("#enemy-speed").value = String(track.definition.balance.enemySpeed);
  sceneSelect.value = track.environment.sceneId;
  syncSceneBackground();
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
      loadedLegendOrder = null;
      input("#export-name").value = "newTrack";
      input("#display-name").value = "New Track";
      input("#description").value = "A hand-authored Neon Swarm track.";
      input("#enemy-hp").value = "1";
      input("#enemy-speed").value = "1";
      sceneSelect.value = "neonHall";
      syncSceneBackground();
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
  sceneSelect.addEventListener("change", syncSceneBackground);
  syncSceneBackground();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9nZW9tZXRyaWMtc2hhcGUtYWN0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3ByaW1pdGl2ZS1yZW5kZXJlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvY2xvdWQtYnVyc3QudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3RvcC1kb3duLXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy9sYW5lLXJ1bm5lci1zY2VuZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tCdWlsZGVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s2LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrOC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2szLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE1LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEwLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazExLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2ZhbWlseVZpc3VhbHMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3NyYy9yZW5kZXJPcmllbnRhdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NoYXBlVmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3ZpZXdwb3J0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9zcmMvZW5lbXlFeGl0VmlzdWFscy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2VuZW15Q2F0YWxvZy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL3NjZW5lRW52aXJvbm1lbnQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3Rlc3QtcGFnZXMvdHJhY2stZWRpdG9yL3RyYWNrLWVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtYXJjLWthdGFuYVwiLCBcIlN3b3JkIEFyYyBLYXRhbmFcIiwgW1stLjE2LC0xXSwgWy4xNiwtMV0sIFsuMjIsLjI4XSwgWy40OCwuNjJdLCBbLjE4LC41Ml0sIFsuMSwxXSwgWy0uMSwxXSwgWy0uMTgsLjUyXSwgWy0uNDgsLjYyXSwgWy0uMjIsLjI4XV0sIFwicGl0Y2hcIiwgW1tbLS4wNTUsLS43Ml0sIFsuMDU1LC0uNzJdLCBbLjA1NSwuMThdLCBbLS4wNTUsLjE4XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWNsZWF2ZXItd2lkZVwiLCBcIlN3b3JkIENsZWF2ZXIgV2lkZVwiLCBbWy0uMjgsLTFdLCBbLjI4LC0xXSwgWy40NCwtLjc2XSwgWy4zNCwuMzRdLCBbLjcyLC41OF0sIFsuMjIsLjU1XSwgWy4xNiwxXSwgWy0uMTYsMV0sIFstLjIyLC41NV0sIFstLjcyLC41OF0sIFstLjM0LC4zNF0sIFstLjQ0LC0uNzZdXSwgXCJyb2xsXCIsIFtbWy0uMSwtLjY4XSwgWy4xLC0uNjhdLCBbLjA4LC4xOF0sIFstLjA4LC4xOF1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1uZWVkbGUtc2FicmVcIiwgXCJTd29yZCBOZWVkbGUgU2FicmVcIiwgW1swLC0xXSwgWy4wOCwtLjgyXSwgWy4xMSwuNV0sIFsuMzIsLjcyXSwgWy4wOCwuNjRdLCBbLjA1LDFdLCBbLS4wNSwxXSwgWy0uMDgsLjY0XSwgWy0uMzIsLjcyXSwgWy0uMTEsLjVdLCBbLS4wOCwtLjgyXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1ndWFyZGVkLWJsYWRlXCIsIFwiU3dvcmQgR3VhcmRlZCBCbGFkZVwiLCBbWy0uMTIsLTFdLCBbLjEyLC0xXSwgWy4xNiwuMzZdLCBbLjYyLC4zNl0sIFsuNjIsLjU0XSwgWy4xNCwuNTZdLCBbLjEsMV0sIFstLjEsMV0sIFstLjE0LC41Nl0sIFstLjYyLC41NF0sIFstLjYyLC4zNl0sIFstLjE2LC4zNl1dLCBcInlhd1wiLCBbW1stLjA0NSwtLjcyXSwgWy4wNDUsLS43Ml0sIFsuMDQ1LC4yMl0sIFstLjA0NSwuMjJdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtcHJpc20tZ3JlYXRibGFkZVwiLCBcIlN3b3JkIFByaXNtIEdyZWF0YmxhZGVcIiwgW1swLC0xXSwgWy4zNCwtLjc0XSwgWy4zLC4yOF0sIFsuNTYsLjUyXSwgWy4yLC40OF0sIFsuMTIsMV0sIFstLjEyLDFdLCBbLS4yLC40OF0sIFstLjU2LC41Ml0sIFstLjMsLjI4XSwgWy0uMzQsLS43NF1dLCBcInJvbGxcIiwgW1tbLS4wOCwtLjQ4XSwgWy4wOCwtLjQ4XSwgWy4wOCwuMTZdLCBbLS4wOCwuMTZdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJpbXBvcnQgdHlwZSB7IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24sIE5lb25Qb2ludCB9IGZyb20gXCIuL2dlb21ldHJpYy1zaGFwZXNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlTGFiZWxQb3NpdGlvbiA9IFwiYWJvdmVcIiB8IFwiYmVsb3dcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlTGFiZWwge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogTmVvblNoYXBlTGFiZWxQb3NpdGlvbjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gIHNoYXBlOiBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uO1xuICBjb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHNjYWxlWD86IG51bWJlcjtcbiAgc2NhbGVZPzogbnVtYmVyO1xuICByb3RhdGlvblg/OiBudW1iZXI7XG4gIHJvdGF0aW9uWT86IG51bWJlcjtcbiAgcm90YXRpb25aPzogbnVtYmVyO1xuICBnbG93PzogbnVtYmVyO1xuICBzaGllbGRlZD86IGJvb2xlYW47XG4gIGxpbmVUaGlja25lc3M/OiBudW1iZXI7XG4gIGVuZXJneUludGVuc2l0eT86IG51bWJlcjtcbiAgZW5lcmd5Q292ZXJhZ2U/OiBudW1iZXI7XG4gIGVuZXJneVNwZWVkPzogbnVtYmVyO1xuICBlbmVyZ3lCbGVlZD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgZW50cmFuY2VQcm9ncmVzcz86IG51bWJlcjtcbiAgZW50cmFuY2VNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGV4cGxvZGVQcm9ncmVzcz86IG51bWJlcjtcbiAgZXhwbG9kZU1hZ25pdHVkZT86IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbn1cblxudHlwZSBWMyA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbnR5cGUgVmVydGV4ID0ge1xuICBwOiBWMzsgbjogVjM7IGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07IGdsb3c6IG51bWJlcjtcbiAgZWZmZWN0OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn07XG5jb25zdCBmbG9hdHNQZXJWZXJ0ZXggPSAxNDtcblxuY29uc3Qgc2hhZGVyID0gLyogd2dzbCAqL2BcbnN0cnVjdCBTY2VuZSB7IGFzcGVjdDogZjMyLCBjYW1lcmE6IGYzMiwgdGltZTogZjMyLCBwYWRkaW5nOiBmMzIgfVxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBzY2VuZTogU2NlbmU7XG5zdHJ1Y3QgSW5wdXQge1xuICBAbG9jYXRpb24oMCkgcG9zaXRpb246IHZlYzNmLFxuICBAbG9jYXRpb24oMSkgbm9ybWFsOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDIpIGNvbG9yOiB2ZWMzZixcbiAgQGxvY2F0aW9uKDMpIGdsb3c6IGYzMixcbiAgQGxvY2F0aW9uKDQpIGVmZmVjdDogdmVjNGYsXG59XG5zdHJ1Y3QgT3V0cHV0IHtcbiAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0ZixcbiAgQGxvY2F0aW9uKDApIG5vcm1hbDogdmVjM2YsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjM2YsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBlZmZlY3Q6IHZlYzRmLFxufVxuQHZlcnRleCBmbiB2ZXJ0ZXhNYWluKGlucHV0OiBJbnB1dCkgLT4gT3V0cHV0IHtcbiAgbGV0IGRlcHRoID0gc2NlbmUuY2FtZXJhIC0gaW5wdXQucG9zaXRpb24uejtcbiAgdmFyIG91dHB1dDogT3V0cHV0O1xuICBvdXRwdXQucG9zaXRpb24gPSB2ZWM0ZihpbnB1dC5wb3NpdGlvbi54ICogNCAvIHNjZW5lLmFzcGVjdCwgaW5wdXQucG9zaXRpb24ueSAqIDQsIGRlcHRoICogLjA0NSwgZGVwdGgpO1xuICBvdXRwdXQubm9ybWFsID0gaW5wdXQubm9ybWFsO1xuICBvdXRwdXQuY29sb3IgPSBpbnB1dC5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpbnB1dC5nbG93O1xuICBvdXRwdXQuZWZmZWN0ID0gaW5wdXQuZWZmZWN0O1xuICByZXR1cm4gb3V0cHV0O1xufVxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBsZXQgbm9ybWFsID0gbm9ybWFsaXplKGlucHV0Lm5vcm1hbCk7XG4gIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtLjQ1LCAtLjcsIDEpKTtcbiAgbGV0IGRpZmZ1c2UgPSAuMTggKyBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKSAqIC44MjtcbiAgbGV0IHJpbSA9IHBvdygxIC0gYWJzKG5vcm1hbC56KSwgMi4yKTtcbiAgbGV0IHNpZGUgPSAxIC0gYWJzKG5vcm1hbC56KTtcbiAgbGV0IHJhcmVTdXJnZSA9IHBvdyhtYXgoLjAsIHNpbihzY2VuZS50aW1lICogaW5wdXQuZWZmZWN0LnogKiAuODIgKyBpbnB1dC5jb2xvci5yICogNy4wKSksIDIyLjApXG4gICAgKiBpbnB1dC5lZmZlY3QueCAqIGlucHV0LmVmZmVjdC55ICogaW5wdXQuZWZmZWN0Lnc7XG4gIGxldCBlbmVyZ3kgPSBpbnB1dC5jb2xvciAqIChkaWZmdXNlICogLjEyICsgcmltICogaW5wdXQuZ2xvdyAqIC4zNiArIHNpZGUgKiAuMDggKyByYXJlU3VyZ2UgKiAuNyk7XG4gIHJldHVybiB2ZWM0ZihlbmVyZ3kgKyB2ZWMzZihyYXJlU3VyZ2UgKiAuMTgpLCAuMTIgKyBzaWRlICogLjEyICsgcmFyZVN1cmdlICogLjI4KTtcbn1cbkBmcmFnbWVudCBmbiBsaW5lRnJhZ21lbnQoaW5wdXQ6IE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGFsb25nID0gaW5wdXQubm9ybWFsLng7XG4gIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubm9ybWFsLnkpO1xuICBsZXQgcGhhc2UgPSBpbnB1dC5ub3JtYWwuejtcbiAgbGV0IGludGVuc2l0eSA9IGlucHV0LmVmZmVjdC54O1xuICBsZXQgY292ZXJhZ2UgPSBpbnB1dC5lZmZlY3QueTtcbiAgbGV0IHNwZWVkID0gaW5wdXQuZWZmZWN0Lno7XG4gIGxldCBibGVlZCA9IGlucHV0LmVmZmVjdC53O1xuICBsZXQgcHVsc2VBID0gcG93KG1heCguMCwgc2luKGFsb25nICogMzEuMCAtIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDUuNCArIHBoYXNlKSksIDEwLjApO1xuICBsZXQgcHVsc2VCID0gcG93KG1heCguMCwgc2luKGFsb25nICogMTMuMCArIHNjZW5lLnRpbWUgKiBzcGVlZCAqIDMuMSArIHBoYXNlICogMi43KSksIDE4LjApO1xuICBsZXQgbm9pc2UgPSBzaW4oYWxvbmcgKiA3MS4wICsgcGhhc2UgKiA4LjMpICogLjUgKyAuNTtcbiAgbGV0IHRocmVzaG9sZCA9IDEuMCAtIGNvdmVyYWdlO1xuICBsZXQgZWxlY3RyaWNpdHkgPSBzbW9vdGhzdGVwKHRocmVzaG9sZCwgdGhyZXNob2xkICsgLjE4LCBwdWxzZUEgKiAuNjUgKyBwdWxzZUIgKiAuNTUgKyBub2lzZSAqIC4xOCk7XG4gIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCguMDYsIC4yOCwgYWNyb3NzKTtcbiAgbGV0IGhhbG8gPSAxLjAgLSBzbW9vdGhzdGVwKC4xMiwgMS4wLCBhY3Jvc3MpO1xuICBsZXQgc3VyZ2UgPSBlbGVjdHJpY2l0eSAqIGludGVuc2l0eTtcbiAgbGV0IHB1bHNlID0gLjc4ICsgc2luKHNjZW5lLnRpbWUgKiBzcGVlZCAqIDIuMSArIHBoYXNlKSAqIC4xMyArIGVsZWN0cmljaXR5ICogLjI0O1xuICBsZXQgY2xvdWQgPSBoYWxvICogKC4xMyArIHN1cmdlICogLjUyKTtcbiAgbGV0IGhvdCA9IGlucHV0LmNvbG9yICogKHB1bHNlICsgY2xvdWQgKiAyLjEpICogaW5wdXQuZ2xvdyArIHZlYzNmKGNvcmUgKiBzdXJnZSAqIDEuMzUpO1xuICBsZXQgYWxwaGEgPSAoY29yZSAqICguNzIgKyBwdWxzZSAqIC4yKSArIGNsb3VkICsgKDEuMCAtIGFjcm9zcykgKiBibGVlZCAqIGVsZWN0cmljaXR5ICogLjI0KSAqIGlucHV0Lmdsb3c7XG4gIHJldHVybiB2ZWM0Zihob3QsIGNsYW1wKGFscGhhLCAwLjAsIDEuMCkpO1xufWA7XG5cbmNvbnN0IGhleCA9ICh2YWx1ZTogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgcmF3ID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIHJldHVybiBbMCwgMiwgNF0ubWFwKGluZGV4ID0+IE51bWJlci5wYXJzZUludChyYXcuc2xpY2UoaW5kZXgsIGluZGV4ICsgMiksIDE2KSAvIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufTtcbmNvbnN0IHN1YiA9IChhOiBWMywgYjogVjMpOiBWMyA9PiBbYVswXSAtIGJbMF0sIGFbMV0gLSBiWzFdLCBhWzJdIC0gYlsyXV07XG5jb25zdCBjcm9zcyA9IChhOiBWMywgYjogVjMpOiBWMyA9PiBbYVsxXSpiWzJdLWFbMl0qYlsxXSwgYVsyXSpiWzBdLWFbMF0qYlsyXSwgYVswXSpiWzFdLWFbMV0qYlswXV07XG5jb25zdCBub3JtYWxpemUgPSAodjogVjMpOiBWMyA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoLi4udikgfHwgMTtcbiAgcmV0dXJuIFt2WzBdIC8gbGVuZ3RoLCB2WzFdIC8gbGVuZ3RoLCB2WzJdIC8gbGVuZ3RoXTtcbn07XG5jb25zdCByb3RhdGUgPSAoW3gsIHksIHpdOiBWMywgcng6IG51bWJlciwgcnk6IG51bWJlciwgcno6IG51bWJlcik6IFYzID0+IHtcbiAgbGV0IGEgPSB5ICogTWF0aC5jb3MocngpIC0geiAqIE1hdGguc2luKHJ4KSwgYiA9IHkgKiBNYXRoLnNpbihyeCkgKyB6ICogTWF0aC5jb3MocngpOyB5ID0gYTsgeiA9IGI7XG4gIGEgPSB4ICogTWF0aC5jb3MocnkpICsgeiAqIE1hdGguc2luKHJ5KTsgYiA9IC14ICogTWF0aC5zaW4ocnkpICsgeiAqIE1hdGguY29zKHJ5KTsgeCA9IGE7IHogPSBiO1xuICByZXR1cm4gW3ggKiBNYXRoLmNvcyhyeikgLSB5ICogTWF0aC5zaW4ocnopLCB4ICogTWF0aC5zaW4ocnopICsgeSAqIE1hdGguY29zKHJ6KSwgel07XG59O1xuXG5mdW5jdGlvbiBtZXNoKGluc3RhbmNlOiBOZW9uU2hhcGVJbnN0YW5jZSk6IFZlcnRleFtdIHtcbiAgY29uc3QgeyBzaGFwZSB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IGRlcHRoID0gc2hhcGUuZGVwdGggPz8gLjE0O1xuICBjb25zdCBjb2xvciA9IGhleChpbnN0YW5jZS5jb2xvciA/PyBzaGFwZS5jb2xvcik7XG4gIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgY29uc3Qgc2NhbGVYID0gc2NhbGUgKiAoaW5zdGFuY2Uuc2NhbGVYID8/IDEpO1xuICBjb25zdCBzY2FsZVkgPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVkgPz8gMSk7XG4gIGNvbnN0IHJ4ID0gaW5zdGFuY2Uucm90YXRpb25YID8/IDAsIHJ5ID0gaW5zdGFuY2Uucm90YXRpb25ZID8/IDAsIHJ6ID0gaW5zdGFuY2Uucm90YXRpb25aID8/IDA7XG4gIGNvbnN0IGVudHJhbmNlUHJvZ3Jlc3MgPSBpbnN0YW5jZS5lbnRyYW5jZVByb2dyZXNzID8/IDE7XG4gIGNvbnN0IGVudHJhbmNlRWFzZSA9IGVudHJhbmNlUHJvZ3Jlc3MgKiBlbnRyYW5jZVByb2dyZXNzICogKDMgLSAyICogZW50cmFuY2VQcm9ncmVzcyk7XG4gIGNvbnN0IGVudHJhbmNlT2Zmc2V0ID0gKHBvaW50OiBOZW9uUG9pbnQsIHo6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IFYzID0+IHtcbiAgICBpZiAoZW50cmFuY2VQcm9ncmVzcyA+PSAxKSByZXR1cm4gWzAsIDAsIDBdO1xuICAgIGNvbnN0IHNlZWQgPSBNYXRoLnNpbihpbmRleCAqIDkxLjE3ICsgcG9pbnRbMF0gKiAzNy4yICsgcG9pbnRbMV0gKiA1My43ICsgeiAqIDI5LjEpICogNDM3NTguNTQ1MztcbiAgICBjb25zdCByYW5kb20gPSBzZWVkIC0gTWF0aC5mbG9vcihzZWVkKTtcbiAgICBjb25zdCBhbmdsZSA9IHJhbmRvbSAqIE1hdGguUEkgKiAyO1xuICAgIGNvbnN0IHJhZGl1cyA9IChpbnN0YW5jZS5lbnRyYW5jZU1hZ25pdHVkZSA/PyBpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAoMSAtIGVudHJhbmNlRWFzZSkgKiAoLjM1ICsgcmFuZG9tICogLjc1KTtcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLCAocmFuZG9tIC0gLjUpICogcmFkaXVzICogLjU1XTtcbiAgfTtcbiAgY29uc3QgbW92ZSA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIsIGluZGV4ID0gMCk6IFYzID0+IHtcbiAgICBjb25zdCBwID0gcm90YXRlKFtwb2ludFswXSAqIHNjYWxlWCwgLXBvaW50WzFdICogc2NhbGVZLCB6ICogc2NhbGVdLCByeCwgcnksIHJ6KTtcbiAgICBjb25zdCBlID0gZW50cmFuY2VPZmZzZXQocG9pbnQsIHosIGluZGV4KTtcbiAgICByZXR1cm4gW3BbMF0gKyAoaW5zdGFuY2UueCA/PyAwKSArIGVbMF0sIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSArIGVbMV0sIHBbMl0gKyAoaW5zdGFuY2UueiA/PyAwKSArIGVbMl1dO1xuICB9O1xuICBjb25zdCBvdXRwdXQ6IFZlcnRleFtdID0gW107XG4gIGNvbnN0IGFkZCA9IChhOiBWMywgYjogVjMsIGM6IFYzLCBub3JtYWw/OiBWMykgPT4ge1xuICAgIGNvbnN0IG4gPSBub3JtYWwgPz8gbm9ybWFsaXplKGNyb3NzKHN1YihiLCBhKSwgc3ViKGMsIGEpKSk7XG4gICAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgICBpbnN0YW5jZS5lbmVyZ3lJbnRlbnNpdHkgPz8gMSwgaW5zdGFuY2UuZW5lcmd5Q292ZXJhZ2UgPz8gLjMyLFxuICAgICAgaW5zdGFuY2UuZW5lcmd5U3BlZWQgPz8gMSwgaW5zdGFuY2UuZW5lcmd5QmxlZWQgPz8gLjM1LFxuICAgIF07XG4gICAgW2EsYixjXS5mb3JFYWNoKHAgPT4gb3V0cHV0LnB1c2goeyBwLCBuLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiAoaW5zdGFuY2Uub3BhY2l0eSA/PyAxKSAqIGVudHJhbmNlRWFzZSwgZWZmZWN0IH0pKTtcbiAgfTtcbiAgY29uc3QgZnJvbnQgPSBzaGFwZS5wb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IG1vdmUocG9pbnQsIGRlcHRoIC8gMiwgaW5kZXgpKTtcbiAgY29uc3QgYmFjayA9IHNoYXBlLnBvaW50cy5tYXAoKHBvaW50LCBpbmRleCkgPT4gbW92ZShwb2ludCwgLWRlcHRoIC8gMiwgaW5kZXggKyBzaGFwZS5wb2ludHMubGVuZ3RoKSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnQubGVuZ3RoIC0gMTsgaSsrKSBhZGQoZnJvbnRbMF0sIGZyb250W2ldLCBmcm9udFtpICsgMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGJhY2subGVuZ3RoIC0gMTsgaSsrKSBhZGQoYmFja1swXSwgYmFja1tpICsgMV0sIGJhY2tbaV0pO1xuICBzaGFwZS5wb2ludHMuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSAoaSArIDEpICUgc2hhcGUucG9pbnRzLmxlbmd0aDtcbiAgICBhZGQoZnJvbnRbaV0sIGJhY2tbaV0sIGJhY2tbbmV4dF0pO1xuICAgIGFkZChmcm9udFtpXSwgYmFja1tuZXh0XSwgZnJvbnRbbmV4dF0pO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gZWRnZU1lc2goaW5zdGFuY2U6IE5lb25TaGFwZUluc3RhbmNlKTogVmVydGV4W10ge1xuICBjb25zdCB7IHNoYXBlIH0gPSBpbnN0YW5jZTtcbiAgY29uc3QgZGVwdGggPSBzaGFwZS5kZXB0aCA/PyAuMTQ7XG4gIGNvbnN0IGNvbG9yID0gaGV4KGluc3RhbmNlLmNvbG9yID8/IHNoYXBlLmNvbG9yKTtcbiAgY29uc3Qgc2NhbGUgPSBpbnN0YW5jZS5zY2FsZSA/PyAxO1xuICBjb25zdCBzY2FsZVggPSBzY2FsZSAqIChpbnN0YW5jZS5zY2FsZVggPz8gMSk7XG4gIGNvbnN0IHNjYWxlWSA9IHNjYWxlICogKGluc3RhbmNlLnNjYWxlWSA/PyAxKTtcbiAgY29uc3QgcnggPSBpbnN0YW5jZS5yb3RhdGlvblggPz8gMCwgcnkgPSBpbnN0YW5jZS5yb3RhdGlvblkgPz8gMCwgcnogPSBpbnN0YW5jZS5yb3RhdGlvblogPz8gMDtcbiAgY29uc3QgZW50cmFuY2VQcm9ncmVzcyA9IGluc3RhbmNlLmVudHJhbmNlUHJvZ3Jlc3MgPz8gMTtcbiAgY29uc3QgZW50cmFuY2VFYXNlID0gZW50cmFuY2VQcm9ncmVzcyAqIGVudHJhbmNlUHJvZ3Jlc3MgKiAoMyAtIDIgKiBlbnRyYW5jZVByb2dyZXNzKTtcbiAgY29uc3QgbW92ZSA9IChwb2ludDogTmVvblBvaW50LCB6OiBudW1iZXIpOiBWMyA9PiB7XG4gICAgY29uc3QgcCA9IHJvdGF0ZShbcG9pbnRbMF0gKiBzY2FsZVgsIC1wb2ludFsxXSAqIHNjYWxlWSwgeiAqIHNjYWxlXSwgcngsIHJ5LCByeik7XG4gICAgcmV0dXJuIFtwWzBdICsgKGluc3RhbmNlLnggPz8gMCksIHBbMV0gKyAoaW5zdGFuY2UueSA/PyAwKSwgcFsyXSArIChpbnN0YW5jZS56ID8/IDApXTtcbiAgfTtcbiAgY29uc3QgZXhwbG9kZSA9IChhOiBWMywgYjogVjMsIGluZGV4OiBudW1iZXIpOiBbVjMsIFYzXSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCwgMSAtIGVudHJhbmNlRWFzZSk7XG4gICAgaWYgKCFwcm9ncmVzcykgcmV0dXJuIFthLCBiXTtcbiAgICBjb25zdCBteCA9IChhWzBdICsgYlswXSkgLyAyIC0gKGluc3RhbmNlLnggPz8gMCksIG15ID0gKGFbMV0gKyBiWzFdKSAvIDIgLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KG14LCBteSkgfHwgMTtcbiAgICBjb25zdCBtYWduaXR1ZGUgPSBpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NTtcbiAgICBjb25zdCBzcGVlZCA9IG1hZ25pdHVkZSAqICguNDUgKyAoTWF0aC5zaW4oaW5kZXggKiA5MS4xNykgKiAuNSArIC41KSAqIC41NSk7XG4gICAgY29uc3QgZHggPSBteCAvIGxlbmd0aCAqIHByb2dyZXNzICogc3BlZWQsIGR5ID0gbXkgLyBsZW5ndGggKiBwcm9ncmVzcyAqIHNwZWVkICsgcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqIC4xODtcbiAgICBjb25zdCBhbmdsZSA9IHByb2dyZXNzICogKGluZGV4ICUgMiA/IDEgOiAtMSkgKiAyLjQ7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKHA6IFYzKTogVjMgPT4ge1xuICAgICAgY29uc3QgeCA9IHBbMF0gLSAoaW5zdGFuY2UueCA/PyAwKSwgeSA9IHBbMV0gLSAoaW5zdGFuY2UueSA/PyAwKTtcbiAgICAgIHJldHVybiBbeCAqIE1hdGguY29zKGFuZ2xlKSAtIHkgKiBNYXRoLnNpbihhbmdsZSkgKyAoaW5zdGFuY2UueCA/PyAwKSArIGR4LCB4ICogTWF0aC5zaW4oYW5nbGUpICsgeSAqIE1hdGguY29zKGFuZ2xlKSArIChpbnN0YW5jZS55ID8/IDApICsgZHksIHBbMl1dO1xuICAgIH07XG4gICAgcmV0dXJuIFt0cmFuc2Zvcm0oYSksIHRyYW5zZm9ybShiKV07XG4gIH07XG4gIGNvbnN0IG91dHB1dDogVmVydGV4W10gPSBbXTtcbiAgbGV0IGRpc3RhbmNlID0gMDtcbiAgY29uc3QgZWZmZWN0OiBWZXJ0ZXhbXCJlZmZlY3RcIl0gPSBbXG4gICAgaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEsIGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMixcbiAgICBpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxLCBpbnN0YW5jZS5lbmVyZ3lCbGVlZCA/PyAuMzUsXG4gIF07XG4gIGNvbnN0IGFkZExpbmUgPSAoYTogVjMsIGI6IFYzLCBwaGFzZTogbnVtYmVyLCB3aWR0aFNjYWxlID0gMSwgb3BhY2l0eSA9IDEpID0+IHtcbiAgICBbYSwgYl0gPSBleHBsb2RlKGEsIGIsIE1hdGguZmxvb3IoZGlzdGFuY2UgKiAxMDApICsgTWF0aC5mbG9vcihwaGFzZSAqIDEwKSk7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgLjAwMTtcbiAgICBjb25zdCB3aWR0aCA9IChpbnN0YW5jZS5saW5lVGhpY2tuZXNzID8/IDEpICogLjAxOCAqIHdpZHRoU2NhbGU7XG4gICAgY29uc3Qgb3ggPSAtZHkgLyBsZW5ndGggKiB3aWR0aCwgb3kgPSBkeCAvIGxlbmd0aCAqIHdpZHRoO1xuICAgIGNvbnN0IGEwOiBWMyA9IFthWzBdIC0gb3gsIGFbMV0gLSBveSwgYVsyXV0sIGExOiBWMyA9IFthWzBdICsgb3gsIGFbMV0gKyBveSwgYVsyXV07XG4gICAgY29uc3QgYjA6IFYzID0gW2JbMF0gLSBveCwgYlsxXSAtIG95LCBiWzJdXSwgYjE6IFYzID0gW2JbMF0gKyBveCwgYlsxXSArIG95LCBiWzJdXTtcbiAgICBjb25zdCBzdGFydCA9IGRpc3RhbmNlICogMi40LCBlbmQgPSAoZGlzdGFuY2UgKyBsZW5ndGgpICogMi40O1xuICAgIGNvbnN0IHB1c2ggPSAocDogVjMsIGFsb25nOiBudW1iZXIsIGFjcm9zczogbnVtYmVyKSA9PlxuICAgICAgb3V0cHV0LnB1c2goeyBwLCBuOiBbYWxvbmcsIGFjcm9zcywgcGhhc2VdLCBjb2xvciwgZ2xvdzogKGluc3RhbmNlLmdsb3cgPz8gMSkgKiBvcGFjaXR5ICogKGluc3RhbmNlLm9wYWNpdHkgPz8gMSkgKiBlbnRyYW5jZUVhc2UgKiAoMSArIE1hdGguc2luKChpbnN0YW5jZS5leHBsb2RlUHJvZ3Jlc3MgPz8gMCkgKiBNYXRoLlBJKSAqIChpbnN0YW5jZS5leHBsb2RlTWFnbml0dWRlID8/IC41NSkgKiAyLjIpICogKDEgLSAoaW5zdGFuY2UuZXhwbG9kZVByb2dyZXNzID8/IDApICogLjcpLCBlZmZlY3QgfSk7XG4gICAgcHVzaChhMCxzdGFydCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjAsZW5kLC0xKTtcbiAgICBwdXNoKGIwLGVuZCwtMSk7IHB1c2goYTEsc3RhcnQsMSk7IHB1c2goYjEsZW5kLDEpO1xuICAgIGRpc3RhbmNlICs9IGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgYWRkTG9vcCA9IChwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLCB6OiBudW1iZXIsIHBoYXNlOiBudW1iZXIpID0+XG4gICAgcG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCB6KSwgbW92ZShwb2ludHNbKGluZGV4ICsgMSkgJSBwb2ludHMubGVuZ3RoXSwgeiksIHBoYXNlICsgaW5kZXggKiAuNzMpKTtcbiAgYWRkTG9vcChzaGFwZS5wb2ludHMsIGRlcHRoIC8gMiwgLjMpO1xuICBhZGRMb29wKHNoYXBlLnBvaW50cywgLWRlcHRoIC8gMiwgMi4xKTtcbiAgc2hhcGUuaG9sZXM/LmZvckVhY2goKGhvbGUsIGluZGV4KSA9PiB7XG4gICAgYWRkTG9vcChob2xlLCBkZXB0aCAvIDIgKyAuMDAyLCAzLjcgKyBpbmRleCk7XG4gICAgYWRkTG9vcChob2xlLCAtZGVwdGggLyAyIC0gLjAwMiwgNS4yICsgaW5kZXgpO1xuICB9KTtcbiAgc2hhcGUucG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gYWRkTGluZShtb3ZlKHBvaW50LCAtZGVwdGggLyAyKSwgbW92ZShwb2ludCwgZGVwdGggLyAyKSwgNi4xICsgaW5kZXgpKTtcbiAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCAqIChpbnN0YW5jZS5lbmVyZ3lTcGVlZCA/PyAxKTtcbiAgY29uc3QgYnJhbmNoU3RyZW5ndGggPSAoaW5zdGFuY2UuZW5lcmd5SW50ZW5zaXR5ID8/IDEpICogKGluc3RhbmNlLmVuZXJneUNvdmVyYWdlID8/IC4zMik7XG4gIGNvbnN0IHJhbmRvbSA9IChzZWVkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hdGguc2luKHNlZWQgKiAxMi45ODk4ICsgc2hhcGUucG9pbnRzLmxlbmd0aCAqIDc4LjIzMykgKiA0Mzc1OC41NDUzO1xuICAgIHJldHVybiB2YWx1ZSAtIE1hdGguZmxvb3IodmFsdWUpO1xuICB9O1xuICBjb25zdCByb3RhdGVkID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpYW5zOiBudW1iZXIpOiBOZW9uUG9pbnQgPT4gW1xuICAgIHggKiBNYXRoLmNvcyhyYWRpYW5zKSAtIHkgKiBNYXRoLnNpbihyYWRpYW5zKSxcbiAgICB4ICogTWF0aC5zaW4ocmFkaWFucykgKyB5ICogTWF0aC5jb3MocmFkaWFucyksXG4gIF07XG4gIHNoYXBlLnBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjeWNsZSA9IE1hdGguZmxvb3IodGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSk7XG4gICAgY29uc3QgYWdlID0gdGltZSAqIDIuMzUgKyBpbmRleCAqIC42MSAtIGN5Y2xlO1xuICAgIGNvbnN0IHNlZWQgPSBjeWNsZSAqIDM3LjEgKyBpbmRleCAqIDExLjc7XG4gICAgY29uc3QgYWN0aXZlRHVyYXRpb24gPSAuMTggKyByYW5kb20oc2VlZCArIDEpICogLjI1O1xuICAgIGNvbnN0IGhhemVEdXJhdGlvbiA9IE1hdGgubWluKDEsIGFjdGl2ZUR1cmF0aW9uICsgLjI4ICsgcmFuZG9tKHNlZWQgKyAyKSAqIC4yMik7XG4gICAgY29uc3QgYnJhbmNoQWN0aXZlID0gYWdlIDwgYWN0aXZlRHVyYXRpb247XG4gICAgY29uc3QgaGF6ZUFjdGl2ZSA9IGFnZSA8IGhhemVEdXJhdGlvbjtcbiAgICBpZiAoKCFicmFuY2hBY3RpdmUgJiYgIWhhemVBY3RpdmUpIHx8IHJhbmRvbShzZWVkICsgMykgPiBNYXRoLm1pbiguNzgsIGJyYW5jaFN0cmVuZ3RoICogLjUpKSByZXR1cm47XG4gICAgY29uc3QgbmV4dCA9IHNoYXBlLnBvaW50c1soaW5kZXggKyAxKSAlIHNoYXBlLnBvaW50cy5sZW5ndGhdO1xuICAgIGNvbnN0IHQgPSAuMTYgKyByYW5kb20oc2VlZCArIDQpICogLjY4O1xuICAgIGNvbnN0IGJhc2U6IE5lb25Qb2ludCA9IFtwb2ludFswXSArIChuZXh0WzBdIC0gcG9pbnRbMF0pICogdCwgcG9pbnRbMV0gKyAobmV4dFsxXSAtIHBvaW50WzFdKSAqIHRdO1xuICAgIGNvbnN0IHR4ID0gbmV4dFswXSAtIHBvaW50WzBdLCB0eSA9IG5leHRbMV0gLSBwb2ludFsxXSwgdGwgPSBNYXRoLmh5cG90KHR4LCB0eSkgfHwgMTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSByYW5kb20oc2VlZCArIDUpID4gLjUgPyAxIDogLTE7XG4gICAgY29uc3QgcGVycGVuZGljdWxhcjogTmVvblBvaW50ID0gWy10eSAvIHRsICogZGlyZWN0aW9uLCB0eCAvIHRsICogZGlyZWN0aW9uXTtcbiAgICBjb25zdCBmaXJzdEppdHRlciA9ICgxMCArIHJhbmRvbShzZWVkICsgNikgKiAxMCkgKiBNYXRoLlBJIC8gMTgwICogKHJhbmRvbShzZWVkICsgNykgPiAuNSA/IDEgOiAtMSk7XG4gICAgbGV0IGhlYWRpbmcgPSByb3RhdGVkKHBlcnBlbmRpY3VsYXJbMF0sIHBlcnBlbmRpY3VsYXJbMV0sIGZpcnN0Sml0dGVyKTtcbiAgICBjb25zdCBzZWdtZW50Q291bnQgPSAxICsgTWF0aC5mbG9vcihyYW5kb20oc2VlZCArIDgpICogMyk7XG4gICAgY29uc3QgcG9pbnRzOiBOZW9uUG9pbnRbXSA9IFtiYXNlXTtcbiAgICBmb3IgKGxldCBzZWdtZW50ID0gMDsgc2VnbWVudCA8IHNlZ21lbnRDb3VudDsgc2VnbWVudCsrKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSAuMDU1ICsgcmFuZG9tKHNlZWQgKyAxMCArIHNlZ21lbnQpICogLjA5NTtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIHBvaW50cy5wdXNoKFtwcmV2aW91c1swXSArIGhlYWRpbmdbMF0gKiBsZW5ndGgsIHByZXZpb3VzWzFdICsgaGVhZGluZ1sxXSAqIGxlbmd0aF0pO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKDIwICsgcmFuZG9tKHNlZWQgKyAyMCArIHNlZ21lbnQpICogNDApICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGhlYWRpbmcgPSByb3RhdGVkKGhlYWRpbmdbMF0sIGhlYWRpbmdbMV0sIG9mZnNldCAqIChyYW5kb20oc2VlZCArIDMwICsgc2VnbWVudCkgPiAuNSA/IDEgOiAtMSkpO1xuICAgIH1cbiAgICBpZiAoaGF6ZUFjdGl2ZSkge1xuICAgICAgY29uc3QgZmFkZSA9IDEgLSBNYXRoLm1heCgwLCBhZ2UgLSBhY3RpdmVEdXJhdGlvbikgLyBNYXRoLm1heCguMDAxLCBoYXplRHVyYXRpb24gLSBhY3RpdmVEdXJhdGlvbik7XG4gICAgICBjb25zdCBkcmlmdCA9IE1hdGgubWF4KDAsIGFnZSAtIGFjdGl2ZUR1cmF0aW9uKSAqIC4wMzU7XG4gICAgICBwb2ludHMuc2xpY2UoMCwgLTEpLmZvckVhY2goKHN0YXJ0LCBzZWdtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHBvaW50c1tzZWdtZW50ICsgMV07XG4gICAgICAgIGNvbnN0IGhhemVTdGFydDogTmVvblBvaW50ID0gW3N0YXJ0WzBdICsgcGVycGVuZGljdWxhclswXSAqIGRyaWZ0LCBzdGFydFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGNvbnN0IGhhemVFbmQ6IE5lb25Qb2ludCA9IFtlbmRbMF0gKyBwZXJwZW5kaWN1bGFyWzBdICogZHJpZnQsIGVuZFsxXSArIHBlcnBlbmRpY3VsYXJbMV0gKiBkcmlmdF07XG4gICAgICAgIGFkZExpbmUobW92ZShoYXplU3RhcnQsIGRlcHRoIC8gMiArIC4wMDIpLCBtb3ZlKGhhemVFbmQsIGRlcHRoIC8gMiArIC4wMDIpLCAzMSArIHNlZWQgKyBzZWdtZW50LCAxLjQ1ICsgZmFkZSAqIC41NSwgZmFkZSAqIC4zNCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJyYW5jaEFjdGl2ZSkge1xuICAgICAgcG9pbnRzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKChzdGFydCwgc2VnbWVudCkgPT4ge1xuICAgICAgICBhZGRMaW5lKG1vdmUoc3RhcnQsIGRlcHRoIC8gMiArIC4wMDYpLCBtb3ZlKHBvaW50c1tzZWdtZW50ICsgMV0sIGRlcHRoIC8gMiArIC4wMDYpLCAxMSArIHNlZWQgKyBzZWdtZW50LCAuNDIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjbGluZVBpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNkZXB0aDogR1BVVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAjbGFiZWxMYXllcjogSFRNTERpdkVsZW1lbnQ7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgcGFyZW50ID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCAmJiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0aGlzLiNsYWJlbExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLiNsYWJlbExheWVyLmNsYXNzTmFtZSA9IFwibmVvbi1zaGFwZS1sYWJlbC1sYXllclwiO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwgeyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGluc2V0OlwiMFwiLCBwb2ludGVyRXZlbnRzOlwibm9uZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiIH0pO1xuICAgIHBhcmVudD8uYXBwZW5kKHRoaXMuI2xhYmVsTGF5ZXIpO1xuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXIsIGxhYmVsOiBcIk5lb25GYWN0b3J5IGV4dHJ1ZGVkIHNoYXBlIHNoYWRlclwiIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcInNyYy1hbHBoYVwiLCBkc3RGYWN0b3I6IFwib25lXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiIH0sXG4gICAgICB9IH1dIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiLCBjdWxsTW9kZTogXCJiYWNrXCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IGZhbHNlLCBkZXB0aENvbXBhcmU6IFwibGVzcy1lcXVhbFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jbGluZVBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIixcbiAgICAgICAgYnVmZmVyczogW3sgYXJyYXlTdHJpZGU6IGZsb2F0c1BlclZlcnRleCAqIDQsIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAwLCBvZmZzZXQ6IDAsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogMjQsIGZvcm1hdDogXCJmbG9hdDMyeDNcIiB9LFxuICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDMsIG9mZnNldDogMzYsIGZvcm1hdDogXCJmbG9hdDMyXCIgfSxcbiAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDQwLCBmb3JtYXQ6IFwiZmxvYXQzMng0XCIgfSxcbiAgICAgICAgXSB9XSxcbiAgICAgIH0sXG4gICAgICBmcmFnbWVudDoge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6IFwibGluZUZyYWdtZW50XCIsXG4gICAgICAgIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6IFwic3JjLWFscGhhXCIsIGRzdEZhY3RvcjogXCJvbmVcIiB9LFxuICAgICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZS1taW51cy1zcmMtYWxwaGFcIiB9LFxuICAgICAgICB9IH1dLFxuICAgICAgfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICAgIGRlcHRoU3RlbmNpbDogeyBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgZGVwdGhXcml0ZUVuYWJsZWQ6IHRydWUsIGRlcHRoQ29tcGFyZTogXCJsZXNzLWVxdWFsXCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNzY2VuZUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiAxNiwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgdGhlIE5lb25GYWN0b3J5IHNoYXBlIHN1aXRlLlwiKTtcbiAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICAgIGlmICghYWRhcHRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGF0aWJsZSBXZWJHUFUgYWRhcHRlciB3YXMgZm91bmQuXCIpO1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdwdVwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYSBXZWJHUFUgY2FudmFzIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQpO1xuICB9XG5cbiAgc2V0TG9naWNhbFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLiNsb2dpY2FsU2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGluc3RhbmNlcy5mbGF0TWFwKG1lc2gpO1xuICAgIGNvbnN0IGVkZ2VzID0gaW5zdGFuY2VzLmZsYXRNYXAoZWRnZU1lc2gpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgY29uc3QgZWRnZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGVkZ2VzLmxlbmd0aCAqIGZsb2F0c1BlclZlcnRleCk7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiBkYXRhLnNldChbLi4udmVydGV4LnAsIC4uLnZlcnRleC5uLCAuLi52ZXJ0ZXguY29sb3IsIHZlcnRleC5nbG93LCAuLi52ZXJ0ZXguZWZmZWN0XSwgaSAqIGZsb2F0c1BlclZlcnRleCkpO1xuICAgIGVkZ2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4gZWRnZURhdGEuc2V0KFsuLi52ZXJ0ZXgucCwgLi4udmVydGV4Lm4sIC4uLnZlcnRleC5jb2xvciwgdmVydGV4Lmdsb3csIC4uLnZlcnRleC5lZmZlY3RdLCBpICogZmxvYXRzUGVyVmVydGV4KSk7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogTWF0aC5tYXgoNCwgZGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGNvbnN0IGVkZ2VCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBNYXRoLm1heCg0LCBlZGdlRGF0YS5ieXRlTGVuZ3RoKSwgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmZmVyLCAwLCBkYXRhKTtcbiAgICBpZiAoZWRnZURhdGEubGVuZ3RoKSB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihlZGdlQnVmZmVyLCAwLCBlZGdlRGF0YSk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jc2NlbmVCdWZmZXIsIDAsIG5ldyBGbG9hdDMyQXJyYXkoW3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCA1LCBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIDBdKSk7XG4gICAgY29uc3QgYmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNwaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksIGVudHJpZXM6IFt7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy4jc2NlbmVCdWZmZXIgfSB9XSB9KTtcbiAgICBjb25zdCBsaW5lQmluZEdyb3VwID0gdGhpcy5kZXZpY2UuY3JlYXRlQmluZEdyb3VwKHsgbGF5b3V0OiB0aGlzLiNsaW5lUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLCBlbnRyaWVzOiBbeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfV0gfSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHtcbiAgICAgIGNvbG9yQXR0YWNobWVudHM6IFt7IHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSwgY2xlYXJWYWx1ZTogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIGxvYWRPcDogcHJlc2VydmVDb2xvciA/IFwibG9hZFwiIDogXCJjbGVhclwiLCBzdG9yZU9wOiBcInN0b3JlXCIgfV0sXG4gICAgICBkZXB0aFN0ZW5jaWxBdHRhY2htZW50OiB7IHZpZXc6IHRoaXMuI2RlcHRoIS5jcmVhdGVWaWV3KCksIGRlcHRoQ2xlYXJWYWx1ZTogMSwgZGVwdGhMb2FkT3A6IFwiY2xlYXJcIiwgZGVwdGhTdG9yZU9wOiBcInN0b3JlXCIgfSxcbiAgICB9KTtcbiAgICBpZiAodmVydGljZXMubGVuZ3RoKSB7IHBhc3Muc2V0UGlwZWxpbmUodGhpcy4jcGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBiaW5kR3JvdXApOyBwYXNzLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpOyBwYXNzLmRyYXcodmVydGljZXMubGVuZ3RoKTsgfVxuICAgIGlmIChlZGdlcy5sZW5ndGgpIHsgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNsaW5lUGlwZWxpbmUpOyBwYXNzLnNldEJpbmRHcm91cCgwLCBsaW5lQmluZEdyb3VwKTsgcGFzcy5zZXRWZXJ0ZXhCdWZmZXIoMCwgZWRnZUJ1ZmZlcik7IHBhc3MuZHJhdyhlZGdlcy5sZW5ndGgpOyB9XG4gICAgcGFzcy5lbmQoKTsgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgdGhpcy4jcmVuZGVyTGFiZWxzKGluc3RhbmNlcyk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUub25TdWJtaXR0ZWRXb3JrRG9uZSgpLnRoZW4oKCkgPT4geyB2ZXJ0ZXhCdWZmZXIuZGVzdHJveSgpOyBlZGdlQnVmZmVyLmRlc3Ryb3koKTsgfSk7XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7IHRoaXMuI2xhYmVsTGF5ZXIucmVtb3ZlKCk7IHRoaXMuI2RlcHRoPy5kZXN0cm95KCk7IHRoaXMuI3NjZW5lQnVmZmVyLmRlc3Ryb3koKTsgaWYgKGRlc3Ryb3lEZXZpY2UpIHRoaXMuZGV2aWNlLmRlc3Ryb3koKTsgfVxuICAjcmVuZGVyTGFiZWxzKGluc3RhbmNlczogcmVhZG9ubHkgTmVvblNoYXBlSW5zdGFuY2VbXSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy4jbGFiZWxMYXllci5zdHlsZSwge1xuICAgICAgbGVmdDogYCR7dGhpcy5jYW52YXMub2Zmc2V0TGVmdH1weGAsXG4gICAgICB0b3A6IGAke3RoaXMuY2FudmFzLm9mZnNldFRvcH1weGAsXG4gICAgICByaWdodDogXCJhdXRvXCIsXG4gICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgd2lkdGg6IGAke3RoaXMuY2FudmFzLmNsaWVudFdpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgICB0aGlzLiNsYWJlbExheWVyLnJlcGxhY2VDaGlsZHJlbiguLi5pbnN0YW5jZXMuZmxhdE1hcChpbnN0YW5jZSA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLmxhYmVsPy50ZXh0IHx8IChpbnN0YW5jZS5vcGFjaXR5ID8/IDEpIDw9IDApIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IHNjYWxlID0gaW5zdGFuY2Uuc2NhbGUgPz8gMTtcbiAgICAgIGNvbnN0IHggPSA1MCArIChpbnN0YW5jZS54ID8/IDApICogNDAgLyAodGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgeSA9IDUwIC0gKGluc3RhbmNlLnkgPz8gMCkgKiA0MDtcbiAgICAgIGNvbnN0IHNoYXBlUmFkaXVzID0gc2NhbGUgKiB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiAuMjtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNoYXBlUmFkaXVzICsgKGluc3RhbmNlLmxhYmVsLm9mZnNldCA/PyA4KSArIChpbnN0YW5jZS5sYWJlbC5mb250U2l6ZSA/PyAxOCkgKiAuNTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5zdGFuY2UubGFiZWwucG9zaXRpb24gPz8gXCJhYm92ZVwiO1xuICAgICAgbGV0IHR4ID0gMCwgdHkgPSAwO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBcImFib3ZlXCIpIHR5ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJiZWxvd1wiKSB0eSA9IG9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHR4ID0gLW9mZnNldDtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB0eCA9IG9mZnNldDtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnN0YW5jZS5sYWJlbC50ZXh0O1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDpgJHt4fSVgLCB0b3A6YCR7eX0lYCwgdHJhbnNmb3JtOmB0cmFuc2xhdGUoY2FsYygtNTAlICsgJHt0eH1weCksY2FsYygtNTAlICsgJHt0eX1weCkpYCxcbiAgICAgICAgY29sb3I6aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3IsIGZvbnRGYW1pbHk6aW5zdGFuY2UubGFiZWwuZm9udEZhbWlseSA/PyBcIlNlZ29lIFVJLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIGZvbnRTaXplOmAke2luc3RhbmNlLmxhYmVsLmZvbnRTaXplID8/IDE4fXB4YCwgZm9udFdlaWdodDpTdHJpbmcoaW5zdGFuY2UubGFiZWwuZm9udFdlaWdodCA/PyA2MDApLFxuICAgICAgICB0ZXh0U2hhZG93OmAwIDAgNXB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9LDAgMCAxNHB4ICR7aW5zdGFuY2UuY29sb3IgPz8gaW5zdGFuY2Uuc2hhcGUuY29sb3J9YCwgd2hpdGVTcGFjZTpcIm5vd3JhcFwiLFxuICAgICAgICBvcGFjaXR5OlN0cmluZyhpbnN0YW5jZS5vcGFjaXR5ID8/IDEpLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW2VsZW1lbnRdO1xuICAgIH0pKTtcbiAgfVxuICAjcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiNsb2dpY2FsU2l6ZSkge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLiNsb2dpY2FsU2l6ZTtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQgfHwgIXRoaXMuI2RlcHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7IHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4jZGVwdGggPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLCBmb3JtYXQ6IFwiZGVwdGgyNHBsdXNcIiwgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmICh0aGlzLiNkZXB0aCAmJiB0aGlzLmNhbnZhcy53aWR0aCA9PT0gd2lkdGggJiYgdGhpcy5jYW52YXMuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoOyB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy4jZGVwdGg/LmRlc3Ryb3koKTtcbiAgICB0aGlzLiNkZXB0aCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoeyBzaXplOiBbd2lkdGgsIGhlaWdodF0sIGZvcm1hdDogXCJkZXB0aDI0cGx1c1wiLCB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uU2hhcGVJbnN0YW5jZSwgTmVvblNoYXBlTGFiZWwgfSBmcm9tIFwiLi9nZW9tZXRyaWMtc2hhcGUtcmVuZGVyZXJcIjtcblxuZXhwb3J0IGVudW0gTmVvblNoYXBlRGlzcG9zYWwge1xuICBGYWRlT3V0ID0gXCJmYWRlT3V0XCIsXG4gIERpc2FwcGVhciA9IFwiZGlzYXBwZWFyXCIsXG4gIEV4cGxvZGUgPSBcImV4cGxvZGVcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVWZWN0b3Ige1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uU2hhcGVJbXBhY3Qge1xuICBkaXJlY3Rpb246IE5lb25TaGFwZVZlY3RvcjtcbiAgbWFnbml0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblNoYXBlQWN0b3JPcHRpb25zIHtcbiAgc2hhcGU6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb247XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHZlbG9jaXR5PzogUGFydGlhbDxOZW9uU2hhcGVWZWN0b3I+O1xuICBzY2FsZT86IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc3Bvc2FsPzogTmVvblNoYXBlRGlzcG9zYWw7XG4gIGV4cGxvZGVNYWduaXR1ZGU/OiBudW1iZXI7XG4gIGVudHJhbmNlRHVyYXRpb24/OiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmVvblNoYXBlQWN0b3Ige1xuICBzaGFwZTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHo6IG51bWJlcjtcbiAgdmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgbGFiZWw/OiBOZW9uU2hhcGVMYWJlbDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc3Bvc2FsOiBOZW9uU2hhcGVEaXNwb3NhbDtcbiAgZXhwbG9kZU1hZ25pdHVkZTogbnVtYmVyO1xuICBlbnRyYW5jZUR1cmF0aW9uOiBudW1iZXI7XG4gIGVudHJhbmNlTWFnbml0dWRlOiBudW1iZXI7XG4gIHJvdGF0aW9uWCA9IDA7XG4gIHJvdGF0aW9uWSA9IDA7XG4gIHJvdGF0aW9uWiA9IDA7XG4gIGRpc3Bvc2VkID0gZmFsc2U7XG4gICNkaXNwb3NhbFByb2dyZXNzID0gMDtcbiAgI2VudHJhbmNlUHJvZ3Jlc3MgPSAxO1xuICAjaW1wYWN0VmVsb2NpdHk6IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuICAjaW1wYWN0Um90YXRpb246IE5lb25TaGFwZVZlY3RvciA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5lb25TaGFwZUFjdG9yT3B0aW9ucykge1xuICAgIHRoaXMuc2hhcGUgPSBvcHRpb25zLnNoYXBlO1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCA/PyAwO1xuICAgIHRoaXMueSA9IG9wdGlvbnMueSA/PyAwO1xuICAgIHRoaXMueiA9IG9wdGlvbnMueiA/PyAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IG9wdGlvbnMudmVsb2NpdHk/LnggPz8gMCwgeTogb3B0aW9ucy52ZWxvY2l0eT8ueSA/PyAwIH07XG4gICAgdGhpcy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgPz8gMTtcbiAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmRpc3Bvc2FsID0gb3B0aW9ucy5kaXNwb3NhbCA/PyBOZW9uU2hhcGVEaXNwb3NhbC5GYWRlT3V0O1xuICAgIHRoaXMuZXhwbG9kZU1hZ25pdHVkZSA9IG9wdGlvbnMuZXhwbG9kZU1hZ25pdHVkZSA/PyAuNTU7XG4gICAgdGhpcy5lbnRyYW5jZUR1cmF0aW9uID0gb3B0aW9ucy5lbnRyYW5jZUR1cmF0aW9uID8/IC40NTtcbiAgICB0aGlzLmVudHJhbmNlTWFnbml0dWRlID0gb3B0aW9ucy5lbnRyYW5jZU1hZ25pdHVkZSA/PyAuNTU7XG4gIH1cblxuICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIsIHogPSB0aGlzLnopOiB0aGlzIHtcbiAgICB0aGlzLnggPSB4OyB0aGlzLnkgPSB5OyB0aGlzLnogPSB6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VmVsb2NpdHkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSB4OyB0aGlzLnZlbG9jaXR5LnkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1wYWN0KHsgZGlyZWN0aW9uLCBtYWduaXR1ZGUgfTogTmVvblNoYXBlSW1wYWN0KTogdGhpcyB7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gICAgY29uc3QgeCA9IGRpcmVjdGlvbi54IC8gbGVuZ3RoLCB5ID0gZGlyZWN0aW9uLnkgLyBsZW5ndGg7XG4gICAgdGhpcy4jaW1wYWN0VmVsb2NpdHkueCArPSB4ICogbWFnbml0dWRlICogLjM0O1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkgKz0geSAqIG1hZ25pdHVkZSAqIC4zNDtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi54ICs9IHkgKiBtYWduaXR1ZGUgKiAuOTtcbiAgICB0aGlzLiNpbXBhY3RSb3RhdGlvbi55IC09IHggKiBtYWduaXR1ZGUgKiAuOTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRpc3Bvc2UobW9kZSA9IHRoaXMuZGlzcG9zYWwpOiB0aGlzIHtcbiAgICB0aGlzLmRpc3Bvc2FsID0gbW9kZTtcbiAgICB0aGlzLiNkaXNwb3NhbFByb2dyZXNzID0gbW9kZSA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRGlzYXBwZWFyID8gMSA6IC4wMDAxO1xuICAgIGlmIChtb2RlID09PSBOZW9uU2hhcGVEaXNwb3NhbC5EaXNhcHBlYXIpIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW50ZXIoZHVyYXRpb24gPSB0aGlzLmVudHJhbmNlRHVyYXRpb24sIG1hZ25pdHVkZSA9IHRoaXMuZW50cmFuY2VNYWduaXR1ZGUpOiB0aGlzIHtcbiAgICB0aGlzLmVudHJhbmNlRHVyYXRpb24gPSBNYXRoLm1heCguMDAxLCBkdXJhdGlvbik7XG4gICAgdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSA9IG1hZ25pdHVkZTtcbiAgICB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZ2VuZXJhdGUoKTogdGhpcyB7XG4gICAgdGhpcy5kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPSAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhU2Vjb25kczogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy54ICs9ICh0aGlzLnZlbG9jaXR5LnggKyB0aGlzLiNpbXBhY3RWZWxvY2l0eS54KSAqIGRlbHRhU2Vjb25kcztcbiAgICB0aGlzLnkgKz0gKHRoaXMudmVsb2NpdHkueSArIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnkpICogZGVsdGFTZWNvbmRzO1xuICAgIHRoaXMucm90YXRpb25YICs9IHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKiBkZWx0YVNlY29uZHM7XG4gICAgdGhpcy5yb3RhdGlvblkgKz0gdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqIGRlbHRhU2Vjb25kcztcbiAgICBjb25zdCBkYW1waW5nID0gTWF0aC5leHAoLTcgKiBkZWx0YVNlY29uZHMpO1xuICAgIHRoaXMuI2ltcGFjdFZlbG9jaXR5LnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0VmVsb2NpdHkueSAqPSBkYW1waW5nO1xuICAgIHRoaXMuI2ltcGFjdFJvdGF0aW9uLnggKj0gZGFtcGluZzsgdGhpcy4jaW1wYWN0Um90YXRpb24ueSAqPSBkYW1waW5nO1xuICAgIGlmICh0aGlzLiNkaXNwb3NhbFByb2dyZXNzID4gMCAmJiAhdGhpcy5kaXNwb3NlZCkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmRpc3Bvc2FsID09PSBOZW9uU2hhcGVEaXNwb3NhbC5FeHBsb2RlID8gLjg1IDogLjU1O1xuICAgICAgdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgKyBkZWx0YVNlY29uZHMgLyBkdXJhdGlvbik7XG4gICAgICBpZiAodGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA+PSAxKSB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MgPCAxKSB0aGlzLiNlbnRyYW5jZVByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy4jZW50cmFuY2VQcm9ncmVzcyArIGRlbHRhU2Vjb25kcyAvIHRoaXMuZW50cmFuY2VEdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJJbnN0YW5jZShvdmVycmlkZXM6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ID0ge30pOiBOZW9uU2hhcGVJbnN0YW5jZSB7XG4gICAgY29uc3QgZmFkZSA9IHRoaXMuZGlzcG9zYWwgPT09IE5lb25TaGFwZURpc3Bvc2FsLkZhZGVPdXQgPyAxIC0gdGhpcy4jZGlzcG9zYWxQcm9ncmVzcyA6IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYXBlOiB0aGlzLnNoYXBlLCB4OiB0aGlzLngsIHk6IHRoaXMueSwgejogdGhpcy56LCBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIHJvdGF0aW9uWDogdGhpcy5yb3RhdGlvblgsIHJvdGF0aW9uWTogdGhpcy5yb3RhdGlvblksIHJvdGF0aW9uWjogdGhpcy5yb3RhdGlvblosXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCwgY29sb3I6IHRoaXMuY29sb3IsIG9wYWNpdHk6IHRoaXMuZGlzcG9zZWQgPyAwIDogZmFkZSxcbiAgICAgIGVudHJhbmNlUHJvZ3Jlc3M6IHRoaXMuI2VudHJhbmNlUHJvZ3Jlc3MsXG4gICAgICBlbnRyYW5jZU1hZ25pdHVkZTogdGhpcy5lbnRyYW5jZU1hZ25pdHVkZSxcbiAgICAgIGV4cGxvZGVQcm9ncmVzczogdGhpcy5kaXNwb3NhbCA9PT0gTmVvblNoYXBlRGlzcG9zYWwuRXhwbG9kZSA/IHRoaXMuI2Rpc3Bvc2FsUHJvZ3Jlc3MgOiAwLFxuICAgICAgZXhwbG9kZU1hZ25pdHVkZTogdGhpcy5leHBsb2RlTWFnbml0dWRlLFxuICAgICAgLi4ub3ZlcnJpZGVzLFxuICAgIH07XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBOZW9uUHJpbWl0aXZlU2hhcGUgPSBcImNpcmNsZVwiIHwgXCJib2x0XCIgfCBcIm9yYlwiIHwgXCJyaW5nXCIgfCBcInNwYXJrXCIgfCBcImRpYW1vbmRcIiB8IFwicGVudGFnb25cIiB8IFwibGluZVwiIHwgXCJhcmNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uUHJpbWl0aXZlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2Vjb25kYXJ5Q29sb3I/OiBzdHJpbmc7XG4gIGdsb3c/OiBudW1iZXI7XG4gIGludGVuc2l0eT86IG51bWJlcjtcbiAgdGV4dHVyZT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aD86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIGFyY1N0YXJ0PzogbnVtYmVyO1xuICBhcmNFbmQ/OiBudW1iZXI7XG4gIHNoYXBlPzogTmVvblByaW1pdGl2ZVNoYXBlO1xufVxuXG5jb25zdCBtYXhQcmltaXRpdmVzID0gMTAyNDtcbmNvbnN0IGZsb2F0c1BlclByaW1pdGl2ZSA9IDIwO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovIGBcbnN0cnVjdCBTY2VuZSB7IHJlc29sdXRpb246IHZlYzJmLCBjb3VudDogZjMyLCB0aW1lOiBmMzIgfVxuc3RydWN0IFByaW1pdGl2ZSB7XG4gIHBvc2l0aW9uOiB2ZWMyZixcbiAgc2l6ZTogdmVjMmYsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgc2Vjb25kYXJ5Q29sb3I6IHZlYzRmLFxuICBnbG93OiBmMzIsXG4gIGludGVuc2l0eTogZjMyLFxuICBzaGFwZTogZjMyLFxuICB0ZXh0dXJlOiBmMzIsXG4gIHJpbUludGVuc2l0eTogZjMyLFxuICBzaGFkb3dTdHJlbmd0aDogZjMyLFxuICBwYWRkaW5nOiB2ZWMyZixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmU6IFNjZW5lO1xuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkPiBpdGVtczogYXJyYXk8UHJpbWl0aXZlPjtcblxuc3RydWN0IFZlcnRleE91dHB1dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBjb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbigyKSBnbG93OiBmMzIsXG4gIEBsb2NhdGlvbigzKSBpbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDQpIHNoYXBlOiBmMzIsXG4gIEBsb2NhdGlvbig1KSBzZWNvbmRhcnlDb2xvcjogdmVjNGYsXG4gIEBsb2NhdGlvbig2KSB0ZXh0dXJlOiBmMzIsXG4gIEBsb2NhdGlvbig3KSByaW1JbnRlbnNpdHk6IGYzMixcbiAgQGxvY2F0aW9uKDgpIHNoYWRvd1N0cmVuZ3RoOiBmMzIsXG59XG5cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZlcnRleDogdTMyLCBAYnVpbHRpbihpbnN0YW5jZV9pbmRleCkgaW5zdGFuY2U6IHUzMikgLT4gVmVydGV4T3V0cHV0IHtcbiAgdmFyIGNvcm5lcnMgPSBhcnJheTx2ZWMyZiwgNj4oXG4gICAgdmVjMmYoLTEsLTEpLCB2ZWMyZigxLC0xKSwgdmVjMmYoLTEsMSksXG4gICAgdmVjMmYoLTEsMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigxLDEpXG4gICk7XG4gIGxldCBpdGVtID0gaXRlbXNbaW5zdGFuY2VdO1xuICBsZXQgbG9jYWwgPSBjb3JuZXJzW3ZlcnRleF07XG4gIHZhciBwaXhlbE9mZnNldCA9IGxvY2FsICogaXRlbS5zaXplO1xuICBpZiAoaXRlbS50ZXh0dXJlICE9IDApIHtcbiAgICBsZXQgYyA9IGNvcyhpdGVtLnRleHR1cmUpO1xuICAgIGxldCBzID0gc2luKGl0ZW0udGV4dHVyZSk7XG4gICAgcGl4ZWxPZmZzZXQgPSB2ZWMyZihwaXhlbE9mZnNldC54ICogYyAtIHBpeGVsT2Zmc2V0LnkgKiBzLCBwaXhlbE9mZnNldC54ICogcyArIHBpeGVsT2Zmc2V0LnkgKiBjKTtcbiAgfVxuICBsZXQgcGl4ZWwgPSBpdGVtLnBvc2l0aW9uICsgcGl4ZWxPZmZzZXQ7XG4gIHZhciBvdXRwdXQ6IFZlcnRleE91dHB1dDtcbiAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYocGl4ZWwueCAvIHNjZW5lLnJlc29sdXRpb24ueCAqIDIgLSAxLCAxIC0gcGl4ZWwueSAvIHNjZW5lLnJlc29sdXRpb24ueSAqIDIsIDAsIDEpO1xuICBvdXRwdXQubG9jYWwgPSBsb2NhbDtcbiAgb3V0cHV0LmNvbG9yID0gaXRlbS5jb2xvcjtcbiAgb3V0cHV0Lmdsb3cgPSBpdGVtLmdsb3c7XG4gIG91dHB1dC5pbnRlbnNpdHkgPSBpdGVtLmludGVuc2l0eTtcbiAgb3V0cHV0LnNoYXBlID0gaXRlbS5zaGFwZTtcbiAgb3V0cHV0LnNlY29uZGFyeUNvbG9yID0gaXRlbS5zZWNvbmRhcnlDb2xvcjtcbiAgb3V0cHV0LnRleHR1cmUgPSBpdGVtLnRleHR1cmU7XG4gIG91dHB1dC5yaW1JbnRlbnNpdHkgPSBpdGVtLnJpbUludGVuc2l0eTtcbiAgb3V0cHV0LnNoYWRvd1N0cmVuZ3RoID0gaXRlbS5zaGFkb3dTdHJlbmd0aDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuQGZyYWdtZW50IGZuIGZyYWdtZW50TWFpbihpbnB1dDogVmVydGV4T3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICBpZiAoaW5wdXQuc2hhcGUgPiA3LjUpIHtcbiAgICBsZXQgcmFkaXVzID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgICBsZXQgYW5nbGUgPSBhdGFuMihpbnB1dC5sb2NhbC55LCBpbnB1dC5sb2NhbC54KTtcbiAgICBpZiAoYW5nbGUgPCBpbnB1dC5yaW1JbnRlbnNpdHkgfHwgYW5nbGUgPiBpbnB1dC5zaGFkb3dTdHJlbmd0aCB8fCByYWRpdXMgPiAxLjApIHsgZGlzY2FyZDsgfVxuICAgIGxldCBsaW5lRGlzdGFuY2UgPSBhYnMocmFkaXVzIC0gMC43OCk7XG4gICAgaWYgKGxpbmVEaXN0YW5jZSA+IDAuMTYpIHsgZGlzY2FyZDsgfVxuICAgIGxldCBjb3JlID0gMS4wIC0gc21vb3Roc3RlcCgwLjAxMiwgMC4wMzgsIGxpbmVEaXN0YW5jZSk7XG4gICAgbGV0IGhhbG8gPSAoMS4wIC0gc21vb3Roc3RlcCgwLjAyNSwgMC4xNiwgbGluZURpc3RhbmNlKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBwdWxzZUEgPSBwb3cobWF4KDAuMCwgc2luKGFuZ2xlICogMjMuMCAtIHNjZW5lLnRpbWUgKiA4LjUpKSwgMTYuMCk7XG4gICAgbGV0IHB1bHNlQiA9IHBvdyhtYXgoMC4wLCBzaW4oYW5nbGUgKiAxMS4wICsgc2NlbmUudGltZSAqIDUuMyArIDEuNykpLCAyNC4wKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oYW5nbGUgKiA3MS4wICsgc2NlbmUudGltZSAqIDMuMSkgKiAwLjUgKyAwLjU7XG4gICAgbGV0IHN1cmdlID0gc21vb3Roc3RlcCgwLjcyLCAwLjk0LCBwdWxzZUEgKiAwLjcgKyBwdWxzZUIgKiAwLjY1ICsgZ3JhaW4gKiAwLjEyKTtcbiAgICBsZXQgZW5lcmd5ID0gKGNvcmUgKiAoMC44OCArIHN1cmdlICogMC42NSkgKyBoYWxvICogKDAuMjIgKyBzdXJnZSAqIDAuOSkpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBob3QgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGNvcmUgKiBzdXJnZSAqIDAuOSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA2LjUpIHtcbiAgICBsZXQgYWxvbmcgPSBpbnB1dC5sb2NhbC55O1xuICAgIGxldCBhY3Jvc3MgPSBhYnMoaW5wdXQubG9jYWwueCk7XG4gICAgaWYgKGFjcm9zcyA+IDEuMCB8fCBhYnMoYWxvbmcpID4gMS4wKSB7IGRpc2NhcmQ7IH1cbiAgICBsZXQgY29yZSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wOCwgMC4yNCwgYWNyb3NzKTtcbiAgICBsZXQgaGFsbyA9ICgxLjAgLSBzbW9vdGhzdGVwKDAuMTIsIDEuMCwgYWNyb3NzKSkgKiBpbnB1dC5nbG93O1xuICAgIGxldCBlbmRGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgwLjcyLCAxLjAsIGFicyhhbG9uZykpO1xuICAgIGxldCB0cmF2ZWwgPSBwb3cobWF4KDAuMCwgc2luKGFsb25nICogMjQuMCAtIHNjZW5lLnRpbWUgKiA4LjAgKyBpbnB1dC50ZXh0dXJlKSksIDE0LjApO1xuICAgIGxldCBlbmVyZ3kgPSAoY29yZSAqICgwLjc1ICsgdHJhdmVsICogMC41KSArIGhhbG8gKiAoMC4yICsgdHJhdmVsICogMC41NSkpICogZW5kRmFkZSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgaG90ID0gbWl4KGlucHV0LmNvbG9yLnJnYiwgaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBjb3JlICogdHJhdmVsICogMC43NSk7XG4gICAgcmV0dXJuIHZlYzRmKGhvdCAqIGVuZXJneSwgY2xhbXAoZW5lcmd5LCAwLjAsIDAuOTUpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiA1LjUpIHtcbiAgICAvLyBQZW50YWdvbiBTREZcbiAgICAvLyBsb2NhbCBpcyBpbiBbLTEsIDFdIHJhbmdlLiBMZXQncyBmaW5kIHBlbnRhZ29uIGRpc3RhbmNlLlxuICAgIGxldCBweCA9IGFicyhpbnB1dC5sb2NhbC54KTtcbiAgICBsZXQgcHkgPSBpbnB1dC5sb2NhbC55O1xuICAgIC8vIFBlbnRhZ29uIGNvbnN0YW50cyBmb3IgdmVydGljZXMvZWRnZXNcbiAgICBsZXQgayA9IHZlYzNmKC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDEuMzc2MzgxOTIpOyAvLyBjb3Mvc2luIG9mIDcyLCBwbHVzIGhlaWdodCBmYWN0b3JcbiAgICAvLyBQcm9qZWN0L01pcnJvciBhY3Jvc3MgdGhlIHN5bW1ldHJ5IGF4ZXMgb2YgcmVndWxhciBwZW50YWdvblxuICAgIHZhciBwID0gdmVjMmYocHgsIHB5KTtcbiAgICBwID0gcCAtIDIgKiBtaW4oZG90KHZlYzJmKC1rLngsIGsueSksIHApLCAwKSAqIHZlYzJmKC1rLngsIGsueSk7XG4gICAgcCA9IHAgLSAyICogbWluKGRvdCh2ZWMyZihrLngsIGsueSksIHApLCAwKSAqIHZlYzJmKGsueCwgay55KTtcbiAgICBwLnggPSBwLnggLSBjbGFtcChwLngsIC1rLnogKiAwLjUsIGsueiAqIDAuNSk7XG4gICAgbGV0IGQgPSBsZW5ndGgocCAtIHZlYzJmKDAsIDAuNzIpKSAqIHNpZ24ocC55IC0gMC43Mik7XG4gICAgLy8gTWFwIGQgdG8gYSBub3JtYWxpemVkIHJhZGl1cyBzY2FsZVxuICAgIGxldCBzY2FsZUQgPSBkICsgMC4zNTsgLy8gb2Zmc2V0IHBlbnRhZ29uIHRvIGZpdCBib3VuZHMgbmljZWx5XG4gICAgaWYgKHNjYWxlRCA+IDAuOCkgeyBkaXNjYXJkOyB9XG4gICAgXG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjUsIDAuNjUsIHNjYWxlRCk7XG4gICAgbGV0IGJvcmRlciA9IHNtb290aHN0ZXAoMC40NSwgMC41Mywgc2NhbGVEKSAqICgxIC0gc21vb3Roc3RlcCgwLjY1LCAwLjc1LCBzY2FsZUQpKTtcbiAgICBsZXQgZmlsbCA9IDEgLSBzbW9vdGhzdGVwKC0wLjIsIDAuNSwgc2NhbGVEKTtcbiAgICBsZXQgaGFsbyA9ICgxIC0gc21vb3Roc3RlcCgwLjU1LCAwLjgsIHNjYWxlRCkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZ2xhc3MgPSBmaWxsICogMC4zOCArIGJvcmRlciAqIDEuMzU7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjUpICogaW5wdXQuaW50ZW5zaXR5O1xuICAgIGxldCBlZGdlQ29sb3IgPSBpbnB1dC5jb2xvci5yZ2IgKiAoYm9yZGVyICogMS43NSArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjQ1KSAqIGZpbGwgKiAwLjM1O1xuICAgIGxldCBibG9vbSA9IGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjQ7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDQuNSkge1xuICAgIGxldCBkID0gYWJzKGlucHV0LmxvY2FsLngpICsgYWJzKGlucHV0LmxvY2FsLnkpO1xuICAgIGlmIChkID4gMS4wOCkgeyBkaXNjYXJkOyB9XG4gICAgbGV0IGVkZ2UgPSAxIC0gc21vb3Roc3RlcCgwLjc4LCAwLjkyLCBkKTtcbiAgICBsZXQgYm9yZGVyID0gc21vb3Roc3RlcCgwLjcyLCAwLjgyLCBkKSAqICgxIC0gc21vb3Roc3RlcCgwLjkyLCAxLjAyLCBkKSk7XG4gICAgbGV0IGZpbGwgPSAxIC0gc21vb3Roc3RlcCgwLjAsIDAuNzgsIGQpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuODIsIDEuMDgsIGQpKSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IGdsYXNzID0gZmlsbCAqIDAuMzUgKyBib3JkZXIgKiAxLjI7XG4gICAgbGV0IGVuZXJneSA9IChnbGFzcyArIGhhbG8gKiAwLjQ1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgICBsZXQgZWRnZUNvbG9yID0gaW5wdXQuY29sb3IucmdiICogKGJvcmRlciAqIDEuNiArIGVkZ2UgKiAwLjMpO1xuICAgIGxldCBmaWxsQ29sb3IgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGZpbGwgKiAwLjUpICogZmlsbCAqIDAuMzg7XG4gICAgbGV0IGJsb29tID0gaW5wdXQuY29sb3IucmdiICogaGFsbyAqIDAuMzU7XG4gICAgbGV0IHJnYiA9IGVkZ2VDb2xvciArIGZpbGxDb2xvciArIGJsb29tO1xuICAgIHJldHVybiB2ZWM0ZihyZ2IsIGNsYW1wKGVuZXJneSwgMCwgMC45NSkpO1xuICB9XG4gIGlmIChpbnB1dC5zaGFwZSA+IDEuNSkge1xuICAgIGxldCByMiA9IGRvdChpbnB1dC5sb2NhbCwgaW5wdXQubG9jYWwpO1xuICAgIGlmIChyMiA+IDEpIHsgZGlzY2FyZDsgfVxuICAgIGxldCB6ID0gc3FydChtYXgoMCwgMSAtIHIyKSk7XG4gICAgbGV0IG5vcm1hbCA9IG5vcm1hbGl6ZSh2ZWMzZihpbnB1dC5sb2NhbC54LCAtaW5wdXQubG9jYWwueSwgeikpO1xuICAgIGxldCBsaWdodCA9IG5vcm1hbGl6ZSh2ZWMzZigtMC41NSwgLTAuNywgMC45KSk7XG4gICAgbGV0IGRpZmZ1c2UgPSBtYXgoZG90KG5vcm1hbCwgbGlnaHQpLCAwKTtcbiAgICBsZXQgcmltID0gcG93KDEgLSB6LCAyLjIpICogaW5wdXQucmltSW50ZW5zaXR5O1xuICAgIGxldCBzaGFkb3cgPSBtaXgoMSAtIGlucHV0LnNoYWRvd1N0cmVuZ3RoLCAxLCBzbW9vdGhzdGVwKC0wLjY1LCAwLjQ1LCBkb3Qobm9ybWFsLnh5LCBsaWdodC54eSkpKTtcbiAgICBsZXQgZ3JhaW4gPSBzaW4oaW5wdXQubG9jYWwueCAqIDIzICsgaW5wdXQubG9jYWwueSAqIDE3KSAqIHNpbihpbnB1dC5sb2NhbC55ICogMzEgLSBpbnB1dC5sb2NhbC54ICogMTEpO1xuICAgIGxldCB0ZXh0dXJlID0gMSArIGdyYWluICogaW5wdXQudGV4dHVyZSAqIDAuMjI7XG4gICAgbGV0IHNwZWN1bGFyID0gcG93KG1heChkb3QocmVmbGVjdCgtbGlnaHQsIG5vcm1hbCksIHZlYzNmKDAsMCwxKSksIDApLCAyOCkgKiAxLjg7XG4gICAgbGV0IGJvZHkgPSBtaXgoaW5wdXQuc2Vjb25kYXJ5Q29sb3IucmdiLCBpbnB1dC5jb2xvci5yZ2IsIGRpZmZ1c2UgKiAwLjggKyAwLjIpICogc2hhZG93ICogdGV4dHVyZTtcbiAgICBsZXQgaGFsbyA9IHBvdyhtYXgoMCwgMSAtIGxlbmd0aChpbnB1dC5sb2NhbCkpLCAwLjM1KSAqIGlucHV0Lmdsb3c7XG4gICAgbGV0IHJnYiA9IGJvZHkgKiAoMC4zOCArIGRpZmZ1c2UgKiAwLjk1KSArIGlucHV0LmNvbG9yLnJnYiAqIHJpbSArIHZlYzNmKHNwZWN1bGFyKSArIGlucHV0LmNvbG9yLnJnYiAqIGhhbG8gKiAwLjM7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiAqIGlucHV0LmludGVuc2l0eSwgMSk7XG4gIH1cbiAgdmFyIGRpc3RhbmNlID0gbGVuZ3RoKGlucHV0LmxvY2FsKTtcbiAgaWYgKGlucHV0LnNoYXBlID4gMy41KSB7XG4gICAgbGV0IGF4aXMgPSBtaW4oYWJzKGlucHV0LmxvY2FsLngpLCBhYnMoaW5wdXQubG9jYWwueSkpO1xuICAgIGxldCBhcm0gPSAxIC0gc21vb3Roc3RlcCgwLjA0LCAwLjE4LCBheGlzKTtcbiAgICBsZXQgZmFkZSA9IDEgLSBzbW9vdGhzdGVwKDAuMiwgMSwgbWF4KGFicyhpbnB1dC5sb2NhbC54KSwgYWJzKGlucHV0LmxvY2FsLnkpKSk7XG4gICAgbGV0IGVuZXJneSA9IGFybSAqIGZhZGUgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgYXJtKSAqIGVuZXJneTtcbiAgICByZXR1cm4gdmVjNGYocmdiLCBjbGFtcChlbmVyZ3ksIDAsIDAuOTIpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAyLjUpIHtcbiAgICBsZXQgcmluZ0Rpc3RhbmNlID0gYWJzKGxlbmd0aChpbnB1dC5sb2NhbCkgLSAwLjYyKTtcbiAgICBsZXQgcmluZyA9IDEgLSBzbW9vdGhzdGVwKDAuMDU1LCAwLjE4LCByaW5nRGlzdGFuY2UpO1xuICAgIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMTIsIDAuNDIsIHJpbmdEaXN0YW5jZSkpICogaW5wdXQuZ2xvdztcbiAgICBsZXQgZW5lcmd5ID0gKHJpbmcgKyBoYWxvICogMC40NSkgKiBpbnB1dC5pbnRlbnNpdHk7XG4gICAgbGV0IHJnYiA9IG1peChpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIGlucHV0LmNvbG9yLnJnYiwgcmluZykgKiBlbmVyZ3k7XG4gICAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkpKTtcbiAgfVxuICBpZiAoaW5wdXQuc2hhcGUgPiAwLjUpIHtcbiAgICBkaXN0YW5jZSA9IG1heChhYnMoaW5wdXQubG9jYWwueCksIGFicyhpbnB1dC5sb2NhbC55KSk7XG4gIH1cbiAgbGV0IGNvcmUgPSAxIC0gc21vb3Roc3RlcCgwLjM4LCAwLjc2LCBkaXN0YW5jZSk7XG4gIGxldCBoYWxvID0gKDEgLSBzbW9vdGhzdGVwKDAuMywgMSwgZGlzdGFuY2UpKSAqIGlucHV0Lmdsb3c7XG4gIGxldCBlbmVyZ3kgPSAoY29yZSArIGhhbG8gKiAwLjU1KSAqIGlucHV0LmludGVuc2l0eTtcbiAgbGV0IGNocm9tYXRpY0NvcmUgPSBtaXgoaW5wdXQuY29sb3IucmdiLCBpbnB1dC5zZWNvbmRhcnlDb2xvci5yZ2IsIHBvdyhtYXgoY29yZSwgMCksIDIpKTtcbiAgbGV0IHJhdyA9IGNocm9tYXRpY0NvcmUgKiAoY29yZSAqIDEuMDUgKyBoYWxvICogMC40Mik7XG4gIGxldCByZ2IgPSByYXcgLyAodmVjM2YoMSkgKyByYXcgKiAwLjMyKTtcbiAgcmV0dXJuIHZlYzRmKHJnYiwgY2xhbXAoZW5lcmd5LCAwLCAwLjkyKSk7XG59XG5gO1xuXG5mdW5jdGlvbiByZ2JhKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB2YWx1ZSA9IGhleC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgaWYgKCEvXlswLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHNpeC1kaWdpdCBoZXggY29sb3IsIHJlY2VpdmVkIFwiJHtoZXh9XCIuYCk7XG4gIHJldHVybiBbXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDAsIDIpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDIsIDQpLCAxNikgLyAyNTUsXG4gICAgTnVtYmVyLnBhcnNlSW50KHZhbHVlLnNsaWNlKDQsIDYpLCAxNikgLyAyNTUsXG4gICAgMSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25QcmltaXRpdmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjY29udGV4dDogR1BVQ2FudmFzQ29udGV4dDtcbiAgI3BpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcbiAgI3NjZW5lQnVmZmVyOiBHUFVCdWZmZXI7XG4gICNwcmltaXRpdmVCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgI2JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICAjbG9naWNhbFNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRldmljZTogR1BVRGV2aWNlLCBjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0LCBmb3JtYXQ6IEdQVVRleHR1cmVGb3JtYXQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyIH0pO1xuICAgIHRoaXMuI3BpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcbiAgICAgIGxheW91dDogXCJhdXRvXCIsXG4gICAgICB2ZXJ0ZXg6IHsgbW9kdWxlLCBlbnRyeVBvaW50OiBcInZlcnRleE1haW5cIiB9LFxuICAgICAgZnJhZ21lbnQ6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiBcImZyYWdtZW50TWFpblwiLFxuICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQsIGJsZW5kOiB7IGNvbG9yOiB7IHNyY0ZhY3RvcjogXCJzcmMtYWxwaGFcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0sIGFscGhhOiB7IHNyY0ZhY3RvcjogXCJvbmVcIiwgZHN0RmFjdG9yOiBcIm9uZVwiIH0gfSB9XSxcbiAgICAgIH0sXG4gICAgICBwcmltaXRpdmU6IHsgdG9wb2xvZ3k6IFwidHJpYW5nbGUtbGlzdFwiIH0sXG4gICAgfSk7XG4gICAgdGhpcy4jc2NlbmVCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsgc2l6ZTogMTYsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jcHJpbWl0aXZlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBtYXhQcmltaXRpdmVzICogZmxvYXRzUGVyUHJpbWl0aXZlICogNCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgfSk7XG4gICAgdGhpcy4jYmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3NjZW5lQnVmZmVyIH0gfSxcbiAgICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI3ByaW1pdGl2ZUJ1ZmZlciB9IH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxOZW9uUHJpbWl0aXZlUmVuZGVyZXI+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5ncHUpIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyByZXF1aXJlZCBmb3IgTmVvbkZhY3RvcnkuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNhbnZhcyBjb3VsZCBub3QgY3JlYXRlIGEgV2ViR1BVIGNvbnRleHQuXCIpO1xuICAgIGNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgY29udGV4dC5jb25maWd1cmUoeyBkZXZpY2UsIGZvcm1hdCwgYWxwaGFNb2RlOiBcInByZW11bHRpcGxpZWRcIiB9KTtcbiAgICByZXR1cm4gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10sIHRpbWVTZWNvbmRzID0gMCwgcHJlc2VydmVDb2xvciA9IGZhbHNlLCB0YXJnZXRWaWV3PzogR1BVVGV4dHVyZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLiNyZXNpemUoKTtcbiAgICBjb25zdCB2aXNpYmxlID0gcHJpbWl0aXZlcy5zbGljZSgwLCBtYXhQcmltaXRpdmVzKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2aXNpYmxlLmxlbmd0aCAqIGZsb2F0c1BlclByaW1pdGl2ZSk7XG4gICAgdmlzaWJsZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiBmbG9hdHNQZXJQcmltaXRpdmU7XG4gICAgICBkYXRhLnNldChbXG4gICAgICAgIGl0ZW0ueCwgaXRlbS55LCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCA/PyBpdGVtLndpZHRoLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uY29sb3IpLFxuICAgICAgICAuLi5yZ2JhKGl0ZW0uc2Vjb25kYXJ5Q29sb3IgPz8gaXRlbS5jb2xvciksXG4gICAgICAgIGl0ZW0uZ2xvdyA/PyAwLjUsXG4gICAgICAgIGl0ZW0uaW50ZW5zaXR5ID8/IDEsXG4gICAgICAgIGl0ZW0uc2hhcGUgPT09IFwiYXJjXCIgPyA4IDogaXRlbS5zaGFwZSA9PT0gXCJsaW5lXCIgPyA3IDogaXRlbS5zaGFwZSA9PT0gXCJwZW50YWdvblwiID8gNiA6IGl0ZW0uc2hhcGUgPT09IFwiZGlhbW9uZFwiID8gNSA6IGl0ZW0uc2hhcGUgPT09IFwic3BhcmtcIiA/IDQgOiBpdGVtLnNoYXBlID09PSBcInJpbmdcIiA/IDMgOiBpdGVtLnNoYXBlID09PSBcIm9yYlwiID8gMiA6IGl0ZW0uc2hhcGUgPT09IFwiYm9sdFwiID8gMSA6IDAsXG4gICAgICAgIGl0ZW0ucm90YXRpb24gPz8gaXRlbS50ZXh0dXJlID8/IDAsXG4gICAgICAgIGl0ZW0uYXJjU3RhcnQgPz8gaXRlbS5yaW1JbnRlbnNpdHkgPz8gMCxcbiAgICAgICAgaXRlbS5hcmNFbmQgPz8gaXRlbS5zaGFkb3dTdHJlbmd0aCA/PyAwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgXSwgb2Zmc2V0KTtcbiAgICB9KTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNzY2VuZUJ1ZmZlciwgMCwgbmV3IEZsb2F0MzJBcnJheShbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdmlzaWJsZS5sZW5ndGgsIHRpbWVTZWNvbmRzXSkpO1xuICAgIGlmIChkYXRhLmxlbmd0aCkgdGhpcy5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy4jcHJpbWl0aXZlQnVmZmVyLCAwLCBkYXRhKTtcbiAgICBjb25zdCBlbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICBjb25zdCBwYXNzID0gZW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xuICAgICAgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgICAgdmlldzogdGFyZ2V0VmlldyA/PyB0aGlzLiNjb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCkuY3JlYXRlVmlldygpLFxuICAgICAgICBjbGVhclZhbHVlOiB7IHI6IDAuMDA2LCBnOiAwLjAwOSwgYjogMC4wMjUsIGE6IDAgfSxcbiAgICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgIH1dLFxuICAgIH0pO1xuICAgIGlmICh2aXNpYmxlLmxlbmd0aCkge1xuICAgICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgICBwYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLiNiaW5kR3JvdXApO1xuICAgICAgcGFzcy5kcmF3KDYsIHZpc2libGUubGVuZ3RoKTtcbiAgICB9XG4gICAgcGFzcy5lbmQoKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2VuY29kZXIuZmluaXNoKCldKTtcbiAgfVxuXG4gICNyZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuI2xvZ2ljYWxTaXplKSB7XG4gICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoKSB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuI2xvZ2ljYWxTaXplLndpZHRoO1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmhlaWdodCAhPT0gdGhpcy4jbG9naWNhbFNpemUuaGVpZ2h0KSB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4oZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogcmF0aW8pKTtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIiwgImV4cG9ydCB0eXBlIE5lb25DbG91ZERpc3NpcGF0aW9uQWN0aW9uID0gXCJmYWRlXCIgfCBcImV4cGFuZEZhZGVcIiB8IFwiaW1wbG9kZVwiIHwgXCJzcGFya0ZhZGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzIHtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGNvcmVDb2xvcj86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIGRldGFpbD86IG51bWJlcjtcbiAgdHVyYnVsZW5jZT86IG51bWJlcjtcbiAgZ2xvdz86IG51bWJlcjtcbiAgY29yZUludGVuc2l0eT86IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5PzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBkaXNzaXBhdGlvblRpbWU/OiBudW1iZXI7XG4gIGRpc3NpcGF0aW9uQWN0aW9uPzogTmVvbkNsb3VkRGlzc2lwYXRpb25BY3Rpb247XG4gIGRyaWZ0WD86IG51bWJlcjtcbiAgZHJpZnRZPzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyO1xuICBhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25DbG91ZEJ1cnN0IGV4dGVuZHMgT21pdDxOZW9uQ2xvdWRCdXJzdFNldHRpbmdzLCBcInhcIiB8IFwieVwiIHwgXCJzaXplXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbn1cblxudHlwZSBDbG91ZCA9IFJlcXVpcmVkPE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJjb3JlQ29sb3JcIj4+ICYgeyBjb3JlQ29sb3I6IHN0cmluZzsgYWdlOiBudW1iZXIgfTtcblxuY29uc3QgbWF4Q2xvdWRzID0gOTY7XG5jb25zdCBmbG9hdHNQZXJDbG91ZCA9IDI0O1xuXG5jb25zdCBkZWZhdWx0czogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz4gPSB7XG4gIGNvbG9yOiBcIiM2M2U4ZmZcIixcbiAgY29yZUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRpb246IDAsXG4gIHNpemU6IC4yNSxcbiAgZGV0YWlsOiA1LFxuICB0dXJidWxlbmNlOiAuNzUsXG4gIGdsb3c6IDQsXG4gIGNvcmVJbnRlbnNpdHk6IDEuNCxcbiAgcmltSW50ZW5zaXR5OiAuODUsXG4gIG9wYWNpdHk6IDEsXG4gIGRpc3NpcGF0aW9uVGltZTogLjcsXG4gIGRpc3NpcGF0aW9uQWN0aW9uOiBcImV4cGFuZEZhZGVcIixcbiAgZHJpZnRYOiAwLFxuICBkcmlmdFk6IDAsXG4gIHNlZWQ6IDAsXG4gIGFnZTogMCxcbn07XG5cbmNvbnN0IGhleCA9ICh2YWx1ZTogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgcmF3ID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIikucGFkRW5kKDYsIFwiMFwiKS5zbGljZSgwLCA2KTtcbiAgcmV0dXJuIFswLCAyLCA0XS5tYXAoaW5kZXggPT4gTnVtYmVyLnBhcnNlSW50KHJhdy5zbGljZShpbmRleCwgaW5kZXggKyAyKSwgMTYpIC8gMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59O1xuXG5leHBvcnQgY29uc3QgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yID0gKGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBbciwgZywgYl0gPSBoZXgoY29sb3IpO1xuICBjb25zdCBsaWZ0ID0gKGNoYW5uZWw6IG51bWJlcikgPT4gTWF0aC5yb3VuZCgoY2hhbm5lbCArICgxIC0gY2hhbm5lbCkgKiAuNzgpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICByZXR1cm4gYCMke2xpZnQocil9JHtsaWZ0KGcpfSR7bGlmdChiKX1gO1xufTtcblxuY29uc3QgYWN0aW9uVmFsdWUgPSAoYWN0aW9uOiBOZW9uQ2xvdWREaXNzaXBhdGlvbkFjdGlvbik6IG51bWJlciA9PlxuICBhY3Rpb24gPT09IFwiZmFkZVwiID8gMCA6IGFjdGlvbiA9PT0gXCJleHBhbmRGYWRlXCIgPyAxIDogYWN0aW9uID09PSBcImltcGxvZGVcIiA/IDIgOiAzO1xuXG5jb25zdCBzaGFkZXIgPSAvKiB3Z3NsICovYFxuc3RydWN0IENsb3VkIHtcbiAgcG9zOiB2ZWMyZixcbiAgdmVsb2NpdHk6IHZlYzJmLFxuICBhZ2U6IGYzMixcbiAgbGlmZTogZjMyLFxuICBzaXplOiBmMzIsXG4gIHJvdGF0aW9uOiBmMzIsXG4gIHNlZWQ6IGYzMixcbiAgYWN0aW9uOiBmMzIsXG4gIGNvbG9yOiB2ZWM0ZixcbiAgY29yZTogdmVjNGYsXG4gIHR1bmluZzogdmVjNGYsXG59XG5zdHJ1Y3QgR2xvYmFscyB7XG4gIGFzcGVjdDogZjMyLFxuICB0aW1lOiBmMzIsXG4gIGNvdW50OiBmMzIsXG4gIGJhY2tncm91bmQ6IGYzMixcbn1cbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gZ2xvYmFsczogR2xvYmFscztcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gY2xvdWRzOiBhcnJheTxDbG91ZD47XG5cbmZuIGhhc2gocDogdmVjMmYpIC0+IGYzMiB7XG4gIHJldHVybiBmcmFjdChzaW4oZG90KHAsIHZlYzJmKDEyNy4xLCAzMTEuNykpKSAqIDQzNzU4LjU0NTMxMjMpO1xufVxuZm4gbm9pc2UocDogdmVjMmYpIC0+IGYzMiB7XG4gIGxldCBpID0gZmxvb3IocCk7XG4gIGxldCBmID0gZnJhY3QocCk7XG4gIGxldCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBtaXgobWl4KGhhc2goaSksIGhhc2goaSArIHZlYzJmKDEsMCkpLCB1LngpLCBtaXgoaGFzaChpICsgdmVjMmYoMCwxKSksIGhhc2goaSArIHZlYzJmKDEsMSkpLCB1LngpLCB1LnkpO1xufVxuZm4gZmJtKHA6IHZlYzJmLCBvY3RhdmVzOiBmMzIpIC0+IGYzMiB7XG4gIHZhciB2ID0gMC4wO1xuICB2YXIgYSA9IDAuNTtcbiAgdmFyIHEgPSBwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGlmIChmMzIoaSkgPj0gb2N0YXZlcykgeyBicmVhazsgfVxuICAgIHYgKz0gYSAqIG5vaXNlKHEpO1xuICAgIHEgPSBxICogMi4wMyArIHZlYzJmKDYuOSwgMy43KTtcbiAgICBhICo9IDAuNTI7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5mbiByb3RhdGUocDogdmVjMmYsIGE6IGYzMikgLT4gdmVjMmYge1xuICBsZXQgYyA9IGNvcyhhKTtcbiAgbGV0IHMgPSBzaW4oYSk7XG4gIHJldHVybiB2ZWMyZihwLnggKiBjIC0gcC55ICogcywgcC54ICogcyArIHAueSAqIGMpO1xufVxuc3RydWN0IE91dCB7XG4gIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gIEBsb2NhdGlvbigwKSBsb2NhbDogdmVjMmYsXG4gIEBsb2NhdGlvbigxKSBAaW50ZXJwb2xhdGUoZmxhdCkgaW5zdGFuY2U6IHUzMixcbn1cbkB2ZXJ0ZXggZm4gdmVydGV4TWFpbihAYnVpbHRpbih2ZXJ0ZXhfaW5kZXgpIHZpOiB1MzIsIEBidWlsdGluKGluc3RhbmNlX2luZGV4KSBpbnN0YW5jZTogdTMyKSAtPiBPdXQge1xuICBsZXQgY29ybmVycyA9IGFycmF5PHZlYzJmLCA2PihcbiAgICB2ZWMyZigtMSwtMSksIHZlYzJmKDEsLTEpLCB2ZWMyZigtMSwxKSxcbiAgICB2ZWMyZigtMSwxKSwgdmVjMmYoMSwtMSksIHZlYzJmKDEsMSlcbiAgKTtcbiAgbGV0IGMgPSBjbG91ZHNbaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBhY3Rpb25TY2FsZSA9IHNlbGVjdCgxLjAgKyBsaWZlVCAqIDEuODUsIDEuMCAtIGxpZmVUICogLjYyLCBjLmFjdGlvbiA+IDEuNSAmJiBjLmFjdGlvbiA8IDIuNSk7XG4gIGxldCByYWRpdXMgPSBtYXgoLjAwMSwgYy5zaXplICogYWN0aW9uU2NhbGUpICogMi4zNTtcbiAgdmFyIGNlbnRlciA9IGMucG9zICsgYy52ZWxvY2l0eSAqIGMuYWdlO1xuICBjZW50ZXIueCAqPSBnbG9iYWxzLmFzcGVjdDtcbiAgbGV0IGxvY2FsID0gY29ybmVyc1t2aV07XG4gIGxldCBwID0gY2VudGVyICsgbG9jYWwgKiByYWRpdXM7XG4gIHZhciBvOiBPdXQ7XG4gIG8ucG9zaXRpb24gPSB2ZWM0ZihwLnggLyBnbG9iYWxzLmFzcGVjdCwgcC55LCAwLCAxKTtcbiAgby5sb2NhbCA9IGxvY2FsICogMi4zNTtcbiAgby5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICByZXR1cm4gbztcbn1cbkBmcmFnbWVudCBmbiBmcmFnbWVudE1haW4oaW5wdXQ6IE91dCkgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHtcbiAgbGV0IGMgPSBjbG91ZHNbaW5wdXQuaW5zdGFuY2VdO1xuICBsZXQgbGlmZVQgPSBjbGFtcChjLmFnZSAvIG1heChjLmxpZmUsIC4wMDEpLCAwLjAsIDEuMCk7XG4gIGxldCBsb2NhbCA9IHJvdGF0ZShpbnB1dC5sb2NhbCwgLWMucm90YXRpb24gLSBsaWZlVCAqIC40NSk7XG4gIGxldCByID0gbGVuZ3RoKGxvY2FsKTtcbiAgaWYgKHIgPj0gMi4zNSkgeyBkaXNjYXJkOyB9XG4gIGxldCBkZXRhaWwgPSBjbGFtcChjLnR1bmluZy54LCAxLjAsIDcuMCk7XG4gIGxldCB0dXJidWxlbmNlID0gYy50dW5pbmcueTtcbiAgbGV0IHdpc3B5ID0gZmJtKGxvY2FsICogKDEuNyArIGRldGFpbCAqIC4xNikgKyB2ZWMyZihjLnNlZWQsIGMuc2VlZCAqIC43MSkgKyBnbG9iYWxzLnRpbWUgKiB2ZWMyZiguMTYsIC4wOSkgKiB0dXJidWxlbmNlLCBtaW4oZGV0YWlsLCA0LjApKTtcbiAgbGV0IGNvcmUgPSBleHAoLXIgKiByICogKDEuMiArIGMudHVuaW5nLnogKiAuMjIpKTtcbiAgbGV0IHJpbSA9IGV4cCgtYWJzKHIgLSAuNzIpICogMy42KTtcbiAgbGV0IHNwYXJrID0gcG93KG1heCgwLjAsIHNpbih3aXNweSAqIDE2LjAgKyBjLnNlZWQgKyBnbG9iYWxzLnRpbWUgKiA5LjApKSwgMTQuMCkgKiBzZWxlY3QoMC4wLCAxLjAsIGMuYWN0aW9uID4gMi41KTtcbiAgbGV0IGRpc3NpcGF0ZSA9IHBvdygxLjAgLSBsaWZlVCwgc2VsZWN0KDEuNDUsIDIuMzUsIGMuYWN0aW9uID4gMi41KSk7XG4gIGxldCByaW1EaXNzaXBhdGUgPSBwb3coMS4wIC0gbGlmZVQsIHNlbGVjdCgyLjcsIDMuOCwgYy5hY3Rpb24gPiAyLjUpKTtcbiAgbGV0IGVkZ2VGYWRlID0gMS4wIC0gc21vb3Roc3RlcCgxLjc1LCAyLjM1LCByKTtcbiAgbGV0IGRlbnNpdHkgPSAoY29yZSAqIC43MiArIHJpbSAqIC4yNCAqIHJpbURpc3NpcGF0ZSArIHdpc3B5ICogLjIyICsgc3BhcmsgKiAuNTUpICogZGlzc2lwYXRlICogYy50dW5pbmcudyAqIGVkZ2VGYWRlO1xuICBsZXQgaG90Q29yZSA9IGMuY29yZS5yZ2IgKiBjb3JlICogYy50dW5pbmcueiAqICgxLjAgKyBzcGFyayk7XG4gIGxldCBuZW9uUmltID0gYy5jb2xvci5yZ2IgKiAoZGVuc2l0eSAqICguNzUgKyBjLmNvbG9yLmEgKiAuMDgpICsgcmltICogcmltRGlzc2lwYXRlICogYy5jb2xvci5hICogLjA4KTtcbiAgbGV0IGdsb3cgPSBuZW9uUmltICsgaG90Q29yZSAqIGRlbnNpdHk7XG4gIHJldHVybiB2ZWM0ZihnbG93LCBjbGFtcChkZW5zaXR5ICogLjg1ICsgc3BhcmsgKiAuMjUsIDAuMCwgMS4wKSk7XG59YDtcblxuZXhwb3J0IGNsYXNzIE5lb25DbG91ZEJ1cnN0QWN0b3Ige1xuICBzZXR0aW5nczogUmVxdWlyZWQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncz47XG4gIGFnZSA9IDA7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBOZW9uQ2xvdWRCdXJzdFNldHRpbmdzID0ge30pIHtcbiAgICB0aGlzLnNldHRpbmdzID0geyAuLi5kZWZhdWx0cywgLi4uc2V0dGluZ3MsIHNlZWQ6IHNldHRpbmdzLnNlZWQgPz8gTWF0aC5yYW5kb20oKSAqIDEwMDAgfTtcbiAgfVxuICB1cGRhdGUoZHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuYWdlICs9IGR0O1xuICAgIHJldHVybiB0aGlzLmFnZSA8IHRoaXMuc2V0dGluZ3MuZGlzc2lwYXRpb25UaW1lO1xuICB9XG4gIHJlbmRlckluc3RhbmNlKCk6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3MsIHNlZWQ6IHRoaXMuc2V0dGluZ3Muc2VlZCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyIHtcbiAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcmVhZG9ubHkgZGV2aWNlOiBHUFVEZXZpY2U7XG4gICNjb250ZXh0OiBHUFVDYW52YXNDb250ZXh0O1xuICAjcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xuICAjYnVmZmVyOiBHUFVCdWZmZXI7XG4gICNnbG9iYWxzOiBHUFVCdWZmZXI7XG4gICNiaW5kOiBHUFVCaW5kR3JvdXA7XG4gICNsb2dpY2FsU2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGV2aWNlOiBHUFVEZXZpY2UsIGNvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlciwgbGFiZWw6IFwiTmVvbkZhY3RvcnkgcHJvY2VkdXJhbCBjbG91ZCB2b2x1bWUgc2hhZGVyXCIgfSk7XG4gICAgdGhpcy4jcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgbGF5b3V0OiBcImF1dG9cIixcbiAgICAgIHZlcnRleDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwidmVydGV4TWFpblwiIH0sXG4gICAgICBmcmFnbWVudDogeyBtb2R1bGUsIGVudHJ5UG9pbnQ6IFwiZnJhZ21lbnRNYWluXCIsIHRhcmdldHM6IFt7IGZvcm1hdCwgYmxlbmQ6IHtcbiAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiBcIm9uZVwiLCBkc3RGYWN0b3I6IFwib25lLW1pbnVzLXNyYy1hbHBoYVwiLCBvcGVyYXRpb246IFwiYWRkXCIgfSxcbiAgICAgIH0gfV0gfSxcbiAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIgfSxcbiAgICB9KTtcbiAgICB0aGlzLiNnbG9iYWxzID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7IHNpemU6IDE2LCB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIH0pO1xuICAgIHRoaXMuI2J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoeyBzaXplOiBtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCAqIDQsIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfSk7XG4gICAgdGhpcy4jYmluZCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoeyBsYXlvdXQ6IHRoaXMuI3BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSwgZW50cmllczogW1xuICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2dsb2JhbHMgfSB9LFxuICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IHRoaXMuI2J1ZmZlciB9IH0sXG4gICAgXSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8TmVvbkNsb3VkQnVyc3RSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciB0aGUgTmVvbkZhY3RvcnkgY2xvdWQgc3VpdGUuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KTtcbiAgfVxuXG4gIHNldExvZ2ljYWxTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy4jbG9naWNhbFNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihjbG91ZHM6IHJlYWRvbmx5IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3NbXSwgdGltZVNlY29uZHMgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAsIHByZXNlcnZlQ29sb3IgPSBmYWxzZSwgdGFyZ2V0Vmlldz86IEdQVVRleHR1cmVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy4jcmVzaXplKCk7XG4gICAgY29uc3QgcGFja2VkID0gbmV3IEZsb2F0MzJBcnJheShtYXhDbG91ZHMgKiBmbG9hdHNQZXJDbG91ZCk7XG4gICAgY2xvdWRzLnNsaWNlKDAsIG1heENsb3VkcykuZm9yRWFjaCgoY2xvdWQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjID0geyAuLi5kZWZhdWx0cywgLi4uY2xvdWQgfTtcbiAgICAgIGNvbnN0IGNvbG9yID0gaGV4KGMuY29sb3IpLCBjb3JlID0gaGV4KGMuY29yZUNvbG9yKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogZmxvYXRzUGVyQ2xvdWQ7XG4gICAgICBwYWNrZWQuc2V0KFtjLngsIGMueSwgYy5kcmlmdFgsIGMuZHJpZnRZLCBjLmFnZSA/PyAwLCBjLmRpc3NpcGF0aW9uVGltZSwgYy5zaXplLCBjLnJvdGF0aW9uLCBjLnNlZWQsIGFjdGlvblZhbHVlKGMuZGlzc2lwYXRpb25BY3Rpb24pLCAwLCAwXSwgb2Zmc2V0KTtcbiAgICAgIHBhY2tlZC5zZXQoW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGMuZ2xvdywgY29yZVswXSwgY29yZVsxXSwgY29yZVsyXSwgYy5jb3JlSW50ZW5zaXR5LCBjLmRldGFpbCwgYy50dXJidWxlbmNlLCBjLnJpbUludGVuc2l0eSwgYy5vcGFjaXR5XSwgb2Zmc2V0ICsgMTIpO1xuICAgIH0pO1xuICAgIHRoaXMuZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMuI2J1ZmZlciwgMCwgcGFja2VkKTtcbiAgICB0aGlzLmRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLiNnbG9iYWxzLCAwLCBuZXcgRmxvYXQzMkFycmF5KFt0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCwgdGltZVNlY29uZHMsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcyksIDBdKSk7XG4gICAgY29uc3QgZW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgY29uc3QgcGFzcyA9IGVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHsgY29sb3JBdHRhY2htZW50czogW3tcbiAgICAgIHZpZXc6IHRhcmdldFZpZXcgPz8gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSxcbiAgICAgIGNsZWFyVmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LFxuICAgICAgbG9hZE9wOiBwcmVzZXJ2ZUNvbG9yID8gXCJsb2FkXCIgOiBcImNsZWFyXCIsXG4gICAgICBzdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgfV0gfSk7XG4gICAgcGFzcy5zZXRQaXBlbGluZSh0aGlzLiNwaXBlbGluZSk7XG4gICAgcGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy4jYmluZCk7XG4gICAgcGFzcy5kcmF3KDYsIE1hdGgubWluKGNsb3Vkcy5sZW5ndGgsIG1heENsb3VkcykpO1xuICAgIHBhc3MuZW5kKCk7XG4gICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtlbmNvZGVyLmZpbmlzaCgpXSk7XG4gIH1cblxuICBtYXBUb3BEb3duQ2xvdWQoY2xvdWQ6IE5lb25Ub3BEb3duQ2xvdWRCdXJzdCwgbG9naWNhbFdpZHRoOiBudW1iZXIsIGxvZ2ljYWxIZWlnaHQ6IG51bWJlcik6IE5lb25DbG91ZEJ1cnN0U2V0dGluZ3Mge1xuICAgIGNvbnN0IGFzcGVjdCA9IGxvZ2ljYWxXaWR0aCAvIGxvZ2ljYWxIZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNsb3VkLFxuICAgICAgeDogKGNsb3VkLnggLyBsb2dpY2FsV2lkdGggLSAuNSkgKiBhc3BlY3QgKiAyLjUsXG4gICAgICB5OiAoLjUgLSBjbG91ZC55IC8gbG9naWNhbEhlaWdodCkgKiAyLjUsXG4gICAgICBzaXplOiBjbG91ZC5zaXplIC8gbG9naWNhbEhlaWdodCAqIDIuNSxcbiAgICAgIGRyaWZ0WDogKGNsb3VkLmRyaWZ0WCA/PyAwKSAvIGxvZ2ljYWxXaWR0aCAqIGFzcGVjdCAqIDIuNSxcbiAgICAgIGRyaWZ0WTogLShjbG91ZC5kcmlmdFkgPz8gMCkgLyBsb2dpY2FsSGVpZ2h0ICogMi41LFxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KGRlc3Ryb3lEZXZpY2UgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy4jYnVmZmVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLiNnbG9iYWxzLmRlc3Ryb3koKTtcbiAgICBpZiAoZGVzdHJveURldmljZSkgdGhpcy5kZXZpY2UuZGVzdHJveSgpO1xuICB9XG5cbiAgI3Jlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy4jbG9naWNhbFNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gdGhpcy4jbG9naWNhbFNpemUud2lkdGgpIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy4jbG9naWNhbFNpemUud2lkdGg7XG4gICAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLiNsb2dpY2FsU2l6ZS5oZWlnaHQpIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuI2xvZ2ljYWxTaXplLmhlaWdodDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihkZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIHJhdGlvKSk7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiByYXRpbykpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgTmVvblByaW1pdGl2ZVJlbmRlcmVyLCB0eXBlIE5lb25QcmltaXRpdmUgfSBmcm9tIFwiLi9wcmltaXRpdmUtcmVuZGVyZXJcIjtcbmltcG9ydCB7IE5lb25HZW9tZXRyaWNTaGFwZVJlbmRlcmVyLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlIH0gZnJvbSBcIi4vZ2VvbWV0cmljLXNoYXBlLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyLCB0eXBlIE5lb25Ub3BEb3duQ2xvdWRCdXJzdCB9IGZyb20gXCIuL2Nsb3VkLWJ1cnN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVvblRvcERvd25TaGFwZSBleHRlbmRzIE9taXQ8TmVvblNoYXBlSW5zdGFuY2UsIFwieFwiIHwgXCJ5XCIgfCBcInNjYWxlXCI+IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZW9uVG9wRG93blNjZW5lIHtcbiAgcHJpbWl0aXZlcz86IHJlYWRvbmx5IE5lb25QcmltaXRpdmVbXTtcbiAgY2xvdWRzPzogcmVhZG9ubHkgTmVvblRvcERvd25DbG91ZEJ1cnN0W107XG4gIHNoYXBlcz86IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlciB7XG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHJlYWRvbmx5IGRldmljZTogR1BVRGV2aWNlO1xuICAjcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVJlbmRlcmVyO1xuICAjY2xvdWRzOiBOZW9uQ2xvdWRCdXJzdFJlbmRlcmVyO1xuICAjc2hhcGVzOiBOZW9uR2VvbWV0cmljU2hhcGVSZW5kZXJlcjtcbiAgI3dpZHRoOiBudW1iZXI7XG4gICNoZWlnaHQ6IG51bWJlcjtcbiAgI2NvbnRleHQ6IEdQVUNhbnZhc0NvbnRleHQ7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBkZXZpY2U6IEdQVURldmljZSwgY29udGV4dDogR1BVQ2FudmFzQ29udGV4dCwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyB0aGlzLmRldmljZSA9IGRldmljZTsgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7IHRoaXMuI3dpZHRoID0gd2lkdGg7IHRoaXMuI2hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLiNwcmltaXRpdmVzID0gbmV3IE5lb25QcmltaXRpdmVSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNjbG91ZHMgPSBuZXcgTmVvbkNsb3VkQnVyc3RSZW5kZXJlcihjYW52YXMsIGRldmljZSwgY29udGV4dCwgZm9ybWF0KS5zZXRMb2dpY2FsU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLiNzaGFwZXMgPSBuZXcgTmVvbkdlb21ldHJpY1NoYXBlUmVuZGVyZXIoY2FudmFzLCBkZXZpY2UsIGNvbnRleHQsIGZvcm1hdCkuc2V0TG9naWNhbFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGxvZ2ljYWxXaWR0aDogbnVtYmVyLCBsb2dpY2FsSGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcj4ge1xuICAgIGlmICghbmF2aWdhdG9yLmdwdSkgdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIHJlcXVpcmVkIGZvciBOZW9uRmFjdG9yeSB0b3AtZG93biBzY2VuZXMuXCIpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gICAgaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21wYXRpYmxlIFdlYkdQVSBhZGFwdGVyIHdhcyBmb3VuZC5cIik7XG4gICAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBhIFdlYkdQVSBjYW52YXMgY29udGV4dC5cIik7XG4gICAgY29uc3QgZm9ybWF0ID0gbmF2aWdhdG9yLmdwdS5nZXRQcmVmZXJyZWRDYW52YXNGb3JtYXQoKTtcbiAgICBjb250ZXh0LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiIH0pO1xuICAgIHJldHVybiBuZXcgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyKGNhbnZhcywgZGV2aWNlLCBjb250ZXh0LCBmb3JtYXQsIGxvZ2ljYWxXaWR0aCwgbG9naWNhbEhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2NlbmU6IE5lb25Ub3BEb3duU2NlbmUsIHRpbWVTZWNvbmRzID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy4jY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKTtcbiAgICB0aGlzLiNwcmltaXRpdmVzLnJlbmRlcihbLi4uKHNjZW5lLnByaW1pdGl2ZXMgPz8gW10pXSwgdGltZVNlY29uZHMsIGZhbHNlLCB0YXJnZXQpO1xuICAgIGNvbnN0IGNsb3VkcyA9IHNjZW5lLmNsb3VkcyA/PyBbXTtcbiAgICBjb25zdCBhc3BlY3QgPSB0aGlzLiN3aWR0aCAvIHRoaXMuI2hlaWdodDtcbiAgICBjb25zdCBzaGFwZXMgPSBzY2VuZS5zaGFwZXMgPz8gW107XG4gICAgaWYgKHNoYXBlcy5sZW5ndGgpIHRoaXMuI3NoYXBlcy5yZW5kZXIoc2hhcGVzLm1hcChzaGFwZSA9PiAoe1xuICAgICAgLi4uc2hhcGUsXG4gICAgICB4OiAoc2hhcGUueCAvIHRoaXMuI3dpZHRoIC0gLjUpICogYXNwZWN0ICogMi41LFxuICAgICAgeTogKC41IC0gc2hhcGUueSAvIHRoaXMuI2hlaWdodCkgKiAyLjUsXG4gICAgICBzY2FsZTogKHNoYXBlLmhlaWdodCA/PyBzaGFwZS5zaXplKSAvIHRoaXMuI2hlaWdodCAqIDIuNSxcbiAgICAgIHNjYWxlWDogKHNoYXBlLnNjYWxlWCA/PyAxKSAqICgoc2hhcGUud2lkdGggPz8gc2hhcGUuc2l6ZSkgLyAoc2hhcGUuaGVpZ2h0ID8/IHNoYXBlLnNpemUpKSxcbiAgICB9KSksIHRydWUsIHRhcmdldCk7XG4gICAgaWYgKGNsb3Vkcy5sZW5ndGgpIHRoaXMuI2Nsb3Vkcy5yZW5kZXIoY2xvdWRzLm1hcChjbG91ZCA9PiB0aGlzLiNjbG91ZHMubWFwVG9wRG93bkNsb3VkKGNsb3VkLCB0aGlzLiN3aWR0aCwgdGhpcy4jaGVpZ2h0KSksIHRpbWVTZWNvbmRzLCB0cnVlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4jc2hhcGVzLmRlc3Ryb3koZmFsc2UpO1xuICAgIHRoaXMuI2Nsb3Vkcy5kZXN0cm95KGZhbHNlKTtcbiAgICB0aGlzLmRldmljZS5kZXN0cm95KCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25Ub3BEb3duU2NlbmUgfSBmcm9tIFwiLi90b3AtZG93bi1zY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclNjZW5lSWRzID0gW1wibmVvbkhhbGxcIiwgXCJhdXJvcmFcIiwgXCJjcnlzdGFsRm9yZ2VcIiwgXCJ2b2lkR2FyZGVuXCIsIFwic29sYXJBcnJheVwiXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQgPSB0eXBlb2YgbGFuZVJ1bm5lclNjZW5lSWRzW251bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyB7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdGltZU1zOiBudW1iZXI7XG59XG5cbmNvbnN0IHNjZW5lTmFtZXM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgc3RyaW5nPiA9IHtcbiAgbmVvbkhhbGw6IFwiTmVvbiBIYWxsXCIsXG4gIGF1cm9yYTogXCJBdXJvcmFcIixcbiAgY3J5c3RhbEZvcmdlOiBcIkNyeXN0YWwgRm9yZ2VcIixcbiAgdm9pZEdhcmRlbjogXCJWb2lkIEdhcmRlblwiLFxuICBzb2xhckFycmF5OiBcIlNvbGFyIEFycmF5XCIsXG59O1xuXG5jb25zdCBoYWxsQm90dG9tV2lkdGggPSAwLjkyO1xuY29uc3QgaGFsbEZsb29yQ29sb3IgPSBcIiMwNTEwMWZcIjtcbmNvbnN0IGhhbGxEZWVwQmx1ZSA9IFwiIzEyMzU2YVwiO1xuY29uc3QgaGFsbE11dGVkQmx1ZSA9IFwiIzFiNGM4ZFwiO1xuY29uc3QgaGFsbE11dGVkQ3lhbiA9IFwiIzJhYzRkY1wiO1xuY29uc3QgaGFsbE11dGVkVmlvbGV0ID0gXCIjNDUzMDc5XCI7XG5jb25zdCBoYWxsQWNjZW50UGluayA9IFwiI2E3MzU3ZVwiO1xuY29uc3QgaGFsbEVuZXJneVNwZWVkID0gMC4wMDE3O1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZVBhbGV0dGUge1xuICBmbG9vcjogc3RyaW5nO1xuICBib3VuZGFyeTogc3RyaW5nO1xuICBsYW5lOiBzdHJpbmc7XG4gIGNlbnRlckxhbmU6IHN0cmluZztcbiAgYWNjZW50OiBzdHJpbmc7XG4gIGxhbmVIaWdobGlnaHQ6IHN0cmluZztcbn1cblxuY29uc3Qgc3RhbmRhcmRMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IGhhbGxGbG9vckNvbG9yLFxuICBib3VuZGFyeTogaGFsbERlZXBCbHVlLFxuICBsYW5lOiBoYWxsTXV0ZWRCbHVlLFxuICBjZW50ZXJMYW5lOiBoYWxsTXV0ZWRWaW9sZXQsXG4gIGFjY2VudDogaGFsbEFjY2VudFBpbmssXG4gIGxhbmVIaWdobGlnaHQ6IGhhbGxNdXRlZEN5YW4sXG59O1xuXG5jb25zdCBhdXJvcmFMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzAzMTEwZlwiLFxuICBib3VuZGFyeTogXCIjMTc4YzkyXCIsXG4gIGxhbmU6IFwiIzE3ZDdiM1wiLFxuICBjZW50ZXJMYW5lOiBcIiM4ZjU2ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmYzdcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjYjlmZjZhXCIsXG59O1xuXG5jb25zdCBjcnlzdGFsRm9yZ2VMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzA3MTAxOFwiLFxuICBib3VuZGFyeTogXCIjMjZkN2ZmXCIsXG4gIGxhbmU6IFwiIzYzZjFmZlwiLFxuICBjZW50ZXJMYW5lOiBcIiNmZjVmZDhcIixcbiAgYWNjZW50OiBcIiNmZmI4NGRcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZjRmYmZmXCIsXG59O1xuXG5jb25zdCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwODA4MThcIixcbiAgYm91bmRhcnk6IFwiIzZmNTNmZlwiLFxuICBsYW5lOiBcIiMzNWU4YjZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY0ZmM3XCIsXG4gIGFjY2VudDogXCIjYjlmZjZhXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiIzliZDdmZlwiLFxufTtcblxuY29uc3Qgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMTEwYzA3XCIsXG4gIGJvdW5kYXJ5OiBcIiNmZjllMzhcIixcbiAgbGFuZTogXCIjZmZkNDVhXCIsXG4gIGNlbnRlckxhbmU6IFwiIzI2ZDdmZlwiLFxuICBhY2NlbnQ6IFwiI2ZmNGY2NlwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNmZmY2YjhcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNjZW5lTmFtZXNbc2NlbmVJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmVSdW5uZXJTY2VuZUlkKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBMYW5lUnVubmVyU2NlbmVJZCB7XG4gIHJldHVybiAobGFuZVJ1bm5lclNjZW5lSWRzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5lUnVubmVyU2NlbmUob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICByZXR1cm4gc2NlbmVDcmVhdG9yc1tvcHRpb25zLnNjZW5lSWRdKG9wdGlvbnMpO1xufVxuXG5jb25zdCBzY2VuZUNyZWF0b3JzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKSA9PiBOZW9uVG9wRG93blNjZW5lPiA9IHtcbiAgbmVvbkhhbGw6IGNyZWF0ZU5lb25IYWxsLFxuICBhdXJvcmE6IGNyZWF0ZUF1cm9yYSxcbiAgY3J5c3RhbEZvcmdlOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCBjcnlzdGFsRm9yZ2VMYW5lUnVubmVyUGFsZXR0ZSwgYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyksXG4gIHZvaWRHYXJkZW46IG9wdGlvbnMgPT4gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnMsIHZvaWRHYXJkZW5MYW5lUnVubmVyUGFsZXR0ZSwgYWRkVm9pZEdhcmRlbkRldGFpbHMpLFxuICBzb2xhckFycmF5OiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCBzb2xhckFycmF5TGFuZVJ1bm5lclBhbGV0dGUsIGFkZFNvbGFyQXJyYXlEZXRhaWxzKSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgc3RhbmRhcmRMYW5lUnVubmVyUGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkSGFsbExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRmxvb3JHbHlwaHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbFNpZGVQYW5lbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxFbmVyZ3lUcmFjZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBdXJvcmEob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBhdXJvcmFMYW5lUnVubmVyUGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUdyb3VuZEZsYXJlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhSG9yaXpvblZlaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKFxuICBvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zLFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICBhZGREZXRhaWxzOiAoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKSA9PiB2b2lkLFxuKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGRUaGVtZWRMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IC1oZWlnaHQgfTtcbiAgY29uc3QgYm90dG9tWSA9IGhlaWdodCAqIC45ODU7XG4gIGNvbnN0IGJvdHRvbUhhbGYgPSB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCAqIC41O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2cCxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICBsZWZ0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShcbiAgaXRlbXM6IE5lb25QcmltaXRpdmVbXSxcbiAgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sXG4gIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsXG4gIHRpbWVNczogbnVtYmVyLFxuKTogdm9pZCB7XG4gIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtcywgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSk7XG4gIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQyLCB3aWR0aDogd2lkdGggKiBoYWxsQm90dG9tV2lkdGgsIGhlaWdodDogaGVpZ2h0ICogMS4wOCwgY29sb3I6IHBhbGV0dGUuZmxvb3IsIHNlY29uZGFyeUNvbG9yOiBcIiMwMjA1MGRcIiwgZ2xvdzogLjA1LCBpbnRlbnNpdHk6IC4yMywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBwYWxldHRlLmJvdW5kYXJ5LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjc4LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogcGFsZXR0ZS5hY2NlbnQsIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmNlbnRlckxhbmUsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5ib3VuZGFyeSwgLjQ4LCA2LjUpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5sYW5lO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBjb2xvciwgbGFuZSA9PT0gMiA/IC4yOCA6IC4yLCAzLjQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGxhbmUgPT09IDIgPyAuMjYgOiAuMTgsIC45KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDE1OyByb3crKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgcm93UHVsc2UgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA0ODAgKyByb3cgKiAuNzgpICogLjQyO1xuICAgIGNvbnN0IHN1cmdlID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZU1zIC8gODIwIC0gcm93ICogLjcyKSk7XG4gICAgY29uc3QgY29sb3IgPSByb3cgJSA0ID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcm93ICUgNCA9PT0gMSA/IHBhbGV0dGUubGFuZSA6IHJvdyAlIDQgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmFjY2VudDtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUxhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA5OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTU1MCArIHB1bHNlSW5kZXggLyA5KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS40OCk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zMiAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiMxN2Q3YjNcIiwgb3BhY2l0eSwgMSArIHQgKiAxLjcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUdyb3VuZEZsYXJlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjA4ICsgKChpbmRleCAqIDI5KSAlIDEwMCkgLyAxMTI7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjYyKSk7XG4gICAgY29uc3QgbGFuZVNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMjIgOiAuNzg7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIGxhbmVTaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjEgKyB0aW1lTXMgLyAxODAwKSAqIC4wNCk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC41NSArIE1hdGguc2luKHRpbWVNcyAvIDQzMCArIGluZGV4ICogMS4zKSAqIC4zNTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMDkgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDE4ICsgdCAqIC4wMzUpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogaW5kZXggJSAzID09PSAxID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC4zOCxcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDYpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBpbmRleCAlIDQgPT09IDAgPyBcImRpYW1vbmRcIiA6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKHRpbWVNcyAvIDEyMDAgKyBpbmRleCkgKiAuMTgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhSG9yaXpvblZlaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4IC0gMykgLyA2O1xuICAgIGNvbnN0IHdhdmUgPSBNYXRoLnNpbih0aW1lTXMgLyAxMTAwICsgaW5kZXggKiAuOSk7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiB2cC54ICsgdSAqIHdpZHRoICogLjM2LFxuICAgICAgeTogdnAueSArIGhlaWdodCAqICguMDc1ICsgaW5kZXggKiAuMDA2KSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDM1ICsgaW5kZXggKiAuMDA0KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4xMiArIE1hdGguYWJzKHdhdmUpICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcIiMxN2Q3YjNcIiA6IFwiIzhmNTZmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4wNDUgKyBNYXRoLmFicyh3YXZlKSAqIC4wMjUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogdSAqIC4yOCArIHdhdmUgKiAuMDgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVkTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDg7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxNzAwICsgcHVsc2VJbmRleCAvIDgpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgcHVsc2VJbmRleCAlIDIgPT09IDAgPyBwYWxldHRlLmxhbmVIaWdobGlnaHQgOiBwYWxldHRlLmFjY2VudCwgLjI4ICogKDEgLSB0cmF2ZWwpLCAxLjEgKyB0ICogMS42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDcnlzdGFsRm9yZ2VEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxNjsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE3LCAxLjU1KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjE0IDogLjg2O1xuICAgIGNvbnN0IGVkZ2UgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCBzaWRlKTtcbiAgICBjb25zdCBnbGludCA9IC41NSArIE1hdGguc2luKHRpbWVNcyAvIDUyMCArIGluZGV4ICogMS4xNykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBlZGdlLngsXG4gICAgICB5OiBlZGdlLnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxMiArIHQgKiAuMDEyKSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMjUgKyB0ICogLjA2KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNmZmI4NGRcIiA6IFwiIzYzZjFmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgNCA9PT0gMCA/IFwiI2ZmNWZkOFwiIDogXCIjZjRmYmZmXCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA1NSkgKiBnbGludCxcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICAgIHJvdGF0aW9uOiAoc2lkZSA8IC41ID8gLS4yMiA6IC4yMikgKyBNYXRoLnNpbih0aW1lTXMgLyAxNDAwICsgaW5kZXgpICogLjA4LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMywgeTogdnAueSArIGhlaWdodCAqIC4wNDUgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIFwiI2ZmYjg0ZFwiLCAuMjIsIDEuMyk7XG59XG5cbmZ1bmN0aW9uIGFkZFZvaWRHYXJkZW5EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyguMDggKyAoKGluZGV4ICogMjMpICUgMTAwKSAvIDExMiwgMS42NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA8IDIgPyAuMTggOiAuODI7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSArIE1hdGguc2luKHRpbWVNcyAvIDE5MDAgKyBpbmRleCkgKiAuMDM1KTtcbiAgICBjb25zdCBibG9vbSA9IC41ICsgTWF0aC5zaW4odGltZU1zIC8gNzYwICsgaW5kZXggKiAuOCkgKiAuMzI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMDYgKyB0ICogLjAxNCksXG4gICAgICBoZWlnaHQ6IHdpZHRoICogKC4wMDYgKyB0ICogLjAxNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiMzNWU4YjZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcIiM2ZjUzZmZcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjQyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgdCAqIC4wNSkgKiBibG9vbSxcbiAgICAgIHNoYXBlOiBpbmRleCAlIDIgPT09IDAgPyBcImRpYW1vbmRcIiA6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKHRpbWVNcyAvIDEyMDAgKyBpbmRleCkgKiAuNCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTgsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDcgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTgsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDcgfSwgXCIjMzVlOGI2XCIsIC4xOCwgMS4xKTtcbn1cblxuZnVuY3Rpb24gYWRkU29sYXJBcnJheURldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQsIHZwIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTksIDEuNDgpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMSA6IC45O1xuICAgIGNvbnN0IG1vdW50ID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgcHVsc2UgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyA2MTAgKyBpbmRleCAqIDEuMDUpICogLjM7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBtb3VudC54LFxuICAgICAgeTogbW91bnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDE4ICsgdCAqIC4wMzUpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxMiArIHQgKiAuMDI0KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNmZmQ0NWFcIiA6IFwiI2ZmOWUzOFwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgNCA9PT0gMCA/IFwiIzI2ZDdmZlwiIDogXCIjZmY0ZjY2XCIsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA1NSkgKiBwdWxzZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBzaWRlIDwgLjUgPyAtLjM4IDogLjM4LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMSwgeTogdnAueSArIGhlaWdodCAqIC4wMzUgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIFwiI2ZmZjZiOFwiLCAuMjQsIDEuNCk7XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVNwYXduRW50cmFuY2UgPSBcInNjYXR0ZXJcIiB8IFwiZmFkZVwiO1xuZXhwb3J0IHR5cGUgRW5lbXlEZWF0aFZpc3VhbCA9IFwiY2xvdWRcIiB8IFwibm9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFwZUlkOiBzdHJpbmc7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG4gIHNwYXduRW50cmFuY2U6IEVuZW15U3Bhd25FbnRyYW5jZTtcbiAgc3Bhd25Tb3VuZDogc3RyaW5nIHwgbnVsbDtcbiAgZGVhdGhTb3VuZDogc3RyaW5nO1xuICBkZWF0aFZpc3VhbDogRW5lbXlEZWF0aFZpc3VhbDtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiaHVudGVyLWV5ZVwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgZ2xhc3NTaGllbGQ6IHtcbiAgICAgIGxhYmVsOiBcIkdsYXNzIFNoaWVsZFwiLFxuICAgICAgaGVhbHRoOiAuMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNS42LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IC4xLFxuICAgICAgc2NvcmU6IDMsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidHJpY2stZ2F0ZVwiLFxuICAgICAgZ2xvdzogLjYyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xMixcbiAgICAgIHJpbUludGVuc2l0eTogMC45LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC40NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogNzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuMSxcbiAgICAgIHNoYXBlWm9vbTogMy4wNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IC42NSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjI1LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJmYWRlXCIsXG4gICAgICBzcGF3blNvdW5kOiBudWxsLFxuICAgICAgZGVhdGhTb3VuZDogXCJHbGFzc1NoaWVsZFNoYXR0ZXJcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHdpbmdlcjoge1xuICAgICAgbGFiZWw6IFwiV2luZ2VyXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNzYsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxNCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJlbGl0ZS13aW5nc1wiLFxuICAgICAgZ2xvdzogLjg2LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4yMixcbiAgICAgIHJpbUludGVuc2l0eTogMS4yLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC42NixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogODUsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuNzUsXG4gICAgICBzaGFwZVpvb206IDMuMjUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIHRhbms6IHtcbiAgICAgIGxhYmVsOiBcIlRhbmtcIixcbiAgICAgIGhlYWx0aDogNixcbiAgICAgIHNwZWVkOiA0NCxcbiAgICAgIHJhZGl1czogMTYsXG4gICAgICBjb2x1bW5TcGFuOiAzLFxuICAgICAgY29udGFjdERhbWFnZTogMixcbiAgICAgIHNjb3JlOiA4MCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0YW5rLWJ1bmtlclwiLFxuICAgICAgZ2xvdzogMS4wNSxcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuNDUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjg1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDIuNyxcbiAgICAgIHNoYXBlWm9vbTogNC40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMi4xLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuOSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJCb3NzXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkJvc3NEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihvcmIuY29sdW1uU3BhbikgJiYgb3JiLmNvbHVtblNwYW4gPj0gMSwgYCR7aWR9IGNvbHVtblNwYW4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpcGxpZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBzcXVhZEFkZGVkOiBudW1iZXI7XG4gIG1heFNxdWFkU2l6ZTogbnVtYmVyO1xuICBtZW1iZXJzUGVyUm93OiBudW1iZXI7XG4gIG1lbWJlclJhZGl1czogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIHBpY2t1cENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHB1bHNlUmF0ZTogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb206IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibXVsdGlwbGllclwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3F1YWQgTXVsdGlwbGllclwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHNxdWFkUGx1c09uZToge1xuICAgICAgbGFiZWw6IFwiKzEgV2luZ21hdGVcIixcbiAgICAgIHNxdWFkQWRkZWQ6IDEsXG4gICAgICBtYXhTcXVhZFNpemU6IDEwLFxuICAgICAgbWVtYmVyc1BlclJvdzogNSxcbiAgICAgIG1lbWJlclJhZGl1czogNS4yNSxcbiAgICAgIHNwYWNpbmc6IDI5LFxuICAgICAgcGlja3VwQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgY29yZUNvbG9yOiBcImN5YW5cIixcbiAgICAgIHB1bHNlUmF0ZTogMi4yLFxuICAgICAgcGlja3VwU2hhcGVab29tOiAzLjEsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uc3F1YWRBZGRlZCA+IDAsIGAke2lkfSBtdXN0IGFkZCBzcXVhZCBtZW1iZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWF4U3F1YWRTaXplID49IGl0ZW0ubWVtYmVyc1BlclJvdywgYCR7aWR9IG1heCBzcXVhZCBtdXN0IGZpdCBhdCBsZWFzdCBvbmUgcm93LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWVtYmVyUmFkaXVzID4gMCAmJiBpdGVtLnNwYWNpbmcgPiBpdGVtLm1lbWJlclJhZGl1cyAqIDIsIGAke2lkfSBtZW1iZXIgZ2VvbWV0cnkgb3ZlcmxhcHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpZXJGYW1pbHkgPSBuZXcgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE11bHRpcGxpZXJJZCA9IGtleW9mIHR5cGVvZiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hpZWxkT3JiaXRlclNoYXBlID0gXCJkb3RcIiB8IFwiaGV4XCI7XG5leHBvcnQgdHlwZSBTaGllbGRNb2RlID0gXCJjaGFyZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic2hpZWxkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICBtb2RlOiBTaGllbGRNb2RlO1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqIEJhc2ljIHNoaWVsZCBzdHJlbmd0aC4gRW5lbXkgSFAgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgdmFsdWUuICovXG4gIG1heENoYXJnZXM6IG51bWJlcjtcbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IDA7XG4gIHB1c2hEaXN0YW5jZTogMDtcbiAgc2xvd011bHRpcGxpZXI6IDE7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBvcmJpdGVyU2hhcGU6IFNoaWVsZE9yYml0ZXJTaGFwZTtcbiAgb3JiaXRlckNvdW50OiBudW1iZXI7XG4gIG9yYml0ZXJTcGVlZDogbnVtYmVyO1xuICBvcmJpdGVyU2l6ZTogbnVtYmVyO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hpZWxkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaGllbGRcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGxpZ2h0R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkxpZ2h0IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiAyLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiA4LFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA0LFxuICAgICAgb3JiaXRlclNwZWVkOiAxLFxuICAgICAgb3JiaXRlclNpemU6IDQuNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiTGlnaHR3ZWlnaHQgc2hpZWxkIHdpdGggdHdvIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIHNhdGVsbGl0ZUd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJTYXRlbGxpdGUgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTAsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNixcbiAgICAgIG9yYml0ZXJTcGVlZDogMC43NSxcbiAgICAgIG9yYml0ZXJTaXplOiA0Ljc1LFxuICAgICAgYWdlbnROb3RlczogXCJCYWxhbmNlZCBzaGllbGQgd2l0aCBmb3VyIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIGhleEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJIZXggR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBtYXhDaGFyZ2VzOiA3LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMixcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJoZXhcIixcbiAgICAgIG9yYml0ZXJDb3VudDogOCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMC40NSxcbiAgICAgIG9yYml0ZXJTaXplOiA1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBzaGllbGQgd2l0aCBzZXZlbiBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzaGllbGRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiwgYCR7aWR9IG11c3QgdXNlIHRoZSBzaGFyZWQgY2hhcmdlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1heENoYXJnZXMgPiAwLCBgJHtpZH0gc3RyZW5ndGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlckNvdW50ID4gMCwgYCR7aWR9IG11c3QgaGF2ZSBvcmJpdGVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlclNwZWVkID49IDAsIGAke2lkfSBvcmJpdGVyU3BlZWQgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkRmFtaWx5ID0gbmV3IFNoaWVsZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNoaWVsZElkID0ga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEhvdyB0aGUgc3dvcmQgc2VsZWN0cyB0YXJnZXRzIGZyb20gdGhlIG5lYXJieSB0aHJlYXQgcG9vbC5cbiAqIEFsbCBtb2RlcyBhcmUgbGFuZS1hd2FyZSB2aWEgdGhlIE5lYXJieVRocmVhdFF1ZXJ5IG1vZHVsZS5cbiAqL1xuZXhwb3J0IHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlID1cbiAgfCBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIgICAvLyBjbG9zZXN0IGVuZW15IGluIHRoZSBwbGF5ZXIncyBhY3RpdmUgbGFuZVxuICB8IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiICAgIC8vIGNsb3Nlc3QgZW5lbXkgcmVnYXJkbGVzcyBvZiBsYW5lXG4gIHwgXCJmcm9udE1vc3RUaHJlYXRcIiAgICAgICAgLy8gZmFydGhlc3QtYWR2YW5jZWQgKGhpZ2hlc3QgeSkgZW5lbXkgaW4gcmFuZ2VcbiAgfCBcImNsdXN0ZXJOZWFyUGxheWVyXCI7ICAgICAvLyBwaWNrcyB1cCB0byBtYXhUYXJnZXRzIGVuZW1pZXMgd2l0aGluIHJlYWNoXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic3dvcmRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIC8qKlxuICAgKiBBdHRhY2sgcmFuZ2UgaW4gcGl4ZWxzIChhdCBzY2FsZSAxKS5cbiAgICogU3dvcmQgb25seSBzd2luZ3Mgd2hlbiBhbiBlbmVteSBlbnRlcnMgdGhpcyByYWRpdXMuXG4gICAqL1xuICByYW5nZTogbnVtYmVyO1xuICAvKipcbiAgICogQW5ndWxhciB3aWR0aCBvZiB0aGUgc2xhc2ggYXJjIGluIGRlZ3JlZXMuXG4gICAqIFdpZGVyID0gaGVhdmllciwgaGl0cyBtb3JlIGVuZW1pZXMgcGVyIHN3aW5nLlxuICAgKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogRGFtYWdlIHBlciBoaXQuICovXG4gIGRhbWFnZTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgbGV2ZWwgNSBkYW1hZ2UgcGVyIGhpdC5cbiAgICpcbiAgICogTGV2ZWwgMSB1c2VzIGRhbWFnZSwgbGV2ZWwgNSB1c2VzIGRhbWFnZUF0TGV2ZWw1LCBhbmQgaW50ZXJtZWRpYXRlIGxldmVsc1xuICAgKiBpbnRlcnBvbGF0ZS4gVXNlIHRoaXMgd2hlbiBkdXBsaWNhdGUgcGlja3VwcyBzaG91bGQgaW5jcmVhc2UgdG90YWwgSFBcbiAgICogY2xlYXJlZCB3aXRob3V0IGNoYW5naW5nIHByb3hpbWl0eSBydWxlcy5cbiAgICovXG4gIGRhbWFnZUF0TGV2ZWw1PzogbnVtYmVyO1xuICAvKiogQ29vbGRvd24gYmV0d2VlbiBzd2luZ3MgaW4gc2Vjb25kcy4gU3dvcmRzIGRvIG5vdCBmaXJlIG9uIGEgdGltZXI7IG9ubHkgd2hlbiBhIHRhcmdldCBleGlzdHMuICovXG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICAvKiogTWF4aW11bSB0YXJnZXRzIGhpdCBwZXIgc3dpbmcuICovXG4gIG1heFRhcmdldHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHZlcnRpY2FsIHJlYWNoIGluIGF1dGhvcmVkIHRyYWNrIHJvd3MuXG4gICAqXG4gICAqIEhlYXZ5IHN3ZWVwaW5nIHN3b3JkcyBjYW4gdXNlIHRoaXMgd2l0aCByZXBlYXRlZCBwaWNrdXBzOiBsZXZlbCAxIHVzZXNcbiAgICogbGV2ZWwxIHJvd3MsIGxldmVsIDUgdXNlcyBsZXZlbDUgcm93cywgYW5kIGludGVybWVkaWF0ZSBsZXZlbHMgaW50ZXJwb2xhdGUuXG4gICAqIFRoaXMgZXhwYW5kcyBhZmZlY3RlZCByb3dzIGFmdGVyIGEgY2xvc2UgdGFyZ2V0IGlzIGZvdW5kOyBpdCBkb2VzIG5vdFxuICAgKiBsb29zZW4gdGhlIG5lYXItcGxheWVyIHByb3hpbWl0eSB0aHJlc2hvbGQuXG4gICAqL1xuICByb3dSZWFjaD86IHtcbiAgICBsZXZlbDE6IG51bWJlcjtcbiAgICBsZXZlbDU6IG51bWJlcjtcbiAgfTtcbiAgLyoqIExhbmUtYXdhcmUgdGFyZ2V0IHNlbGVjdGlvbiBtb2RlLiAqL1xuICB0YXJnZXRpbmdNb2RlOiBTd29yZFRhcmdldGluZ01vZGU7XG4gIC8qKiBWaXN1YWwgc2xhc2ggYXJjIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy4gKi9cbiAgc2xhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBQcmltYXJ5IHNsYXNoIGNvbG9yLiAqL1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgLyoqIFZpc3VhbCB0aGlja25lc3MgbXVsdGlwbGllciBmb3IgdGhlIHNoYXJlZCBzd29yZCB0cmFpbC4gMS4wID0gZGVmYXVsdC4gKi9cbiAgc2xhc2hUaGlja25lc3M6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRlc2lnbiBub3Rlcy4gTm90IHVzZWQgYnkgcnVudGltZTsgZG9jdW1lbnRzIGludGVudCBmb3IgZnV0dXJlIGFnZW50cy5cbiAgICovXG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRmFtaWx5IGRlZmluaXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInN3b3JkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTd29yZFwiO1xuXG4gIC8qKlxuICAgKiBGYW1pbHktbGV2ZWwgaW1wbGVtZW50YXRpb24gbm90ZXM6XG4gICAqIC0gU3dvcmRzIGFyZSBub3QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhleSBzd2luZyBvbmx5IHdoZW4gYSB2YWxpZCB0YXJnZXRcbiAgICogICBpcyB3aXRoaW4gcmFuZ2UgYW5kIGNvb2xkb3duIGlzIHJlYWR5LiBUaGV5IGlkbGUgc2lsZW50bHkgb3RoZXJ3aXNlLlxuICAgKiAtIE9uZSBhY3RpdmUgc3dvcmQgcGVyIHBsYXllciAoZmFtaWx5LXNjb3BlZCBleGNsdXNpdml0eSkuXG4gICAqIC0gUmVwZWF0ZWQgcGlja3VwcyBvZiB0aGUgc2FtZSBzd29yZCBpbmNyZWFzZSB0aGF0IHN3b3JkJ3MgYWN0aXZlIGxldmVsLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgLSBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIFNob3J0IGNvb2xkb3duIG1ha2VzIGl0IHVzZWZ1bCBhZ2FpbnN0IGRlbnNlIHNpbmdsZS1sYW5lIHdhdmVzLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuNTUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMC0xODBtcyBmZWVsLiBGYWRpbmcgYWZ0ZXJpbWFnZS4gTGlrZSBhIHdoaXAtbGlrZSBrYXRhbmEgYXJjLlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhdmVyIC0gSGVhdnkgc3dvcmQuIFNsb3dlciwgYnV0IHN3ZWVwcyBhY3Jvc3MgZXZlcnkgY29sdW1uLlxuICAgICAqIFN0YXJ0cyB3aXRoIDIgcm93cyBvZiB2ZXJ0aWNhbCByZWFjaCBhbmQgc2NhbGVzIHRvIDQgcm93cyBhdCBsZXZlbCA1LlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDY4LFxuICAgICAgYXJjRGVncmVlczogMzYwLFxuICAgICAgZGFtYWdlOiAyLjQsXG4gICAgICBkYW1hZ2VBdExldmVsNTogMy40LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjM1LFxuICAgICAgbWF4VGFyZ2V0czogMTIsXG4gICAgICByb3dSZWFjaDogeyBsZXZlbDE6IDIsIGxldmVsNTogNCB9LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDI2MCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuOSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgYWxsLWNvbHVtbiBzd2VlcC4gUmVwZWF0ZWQgY2xlYXZlciBwaWNrdXBzIGxldmVsIGl0IHVwIGZyb20gMiByb3dzIG9mIHJlYWNoIHRvIDQgcm93cyBhdCBsZXZlbCA1LCB3aXRoIG1vcmUgdG90YWwgZGFtYWdlIHBlciBzd2luZy5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykgYXMgQXJyYXk8W3N0cmluZywgU3dvcmRNZW1iZXJdPikge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgaWYgKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ICE9PSB1bmRlZmluZWQpIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2VBdExldmVsNSA+PSBzd29yZC5kYW1hZ2UsIGAke2lkfSBkYW1hZ2VBdExldmVsNSBtdXN0IGJlIGF0IGxlYXN0IGRhbWFnZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICBpZiAoc3dvcmQucm93UmVhY2gpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWwxKSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDEgPj0gMSwgYCR7aWR9IHJvd1JlYWNoLmxldmVsMSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWw1KSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDUgPj0gc3dvcmQucm93UmVhY2gubGV2ZWwxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgbGV2ZWwxLmApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoRHVyYXRpb25NcyA+IDAsIGAke2lkfSBzbGFzaER1cmF0aW9uTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaFRoaWNrbmVzcyA+IDAsIGAke2lkfSBzbGFzaFRoaWNrbmVzcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzd29yZEZhbWlseSA9IG5ldyBTd29yZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFN3b3JkSWQgPSBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBkZWZpbml0aW9uOiBUcmFja0RlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tGYW1pbHlNZW1iZXI8VHJhY2tJZCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICB0cmFja0lkczogcmVhZG9ubHkgVHJhY2tJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBkaXN0YW5jZUZyb21QbGF5ZXI6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzRW5lbXkgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKTtcbmNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBwYXJzZVRyYWNrUm93cyh0cmFjazogVHJhY2tEZWZpbml0aW9uKTogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHNvdXJjZUluZGV4OiBudW1iZXIgfT4ge1xuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuICByZXR1cm4gcm93cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHBhcnNlVHJhY2tSb3dzKHRyYWNrKTtcbiAgbGV0IGxlZnRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgcmlnaHRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuXG4gIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBpcGVDb3VudCA9IFsuLi5yb3cudGV4dF0uZmlsdGVyKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgPT09IFwifFwiKS5sZW5ndGg7XG4gICAgaWYgKHBpcGVDb3VudCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gbXVzdCBjb250YWluIGV4YWN0bHkgb25lIFwifFwiIHNlcGFyYXRvcjsgZm91bmQgJHtwaXBlQ291bnR9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSByb3cudGV4dC5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIGxlZnRXaWR0aCA/Pz0gbGVmdC5sZW5ndGg7XG4gICAgcmlnaHRXaWR0aCA/Pz0gcmlnaHQubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSBsZWZ0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyBsZWZ0IHdpZHRoICR7bGVmdC5sZW5ndGh9OyBleHBlY3RlZCAke2xlZnRXaWR0aH0uYCk7XG4gICAgfVxuICAgIGlmIChyaWdodC5sZW5ndGggIT09IHJpZ2h0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyByaWdodCB3aWR0aCAke3JpZ2h0Lmxlbmd0aH07IGV4cGVjdGVkICR7cmlnaHRXaWR0aH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzdGFuY2VGcm9tUGxheWVyID0gcm93cy5sZW5ndGggLSAxIC0gcm93SW5kZXg7XG4gICAgZm9yIChjb25zdCBbc2lkZSwgbGFuZV0gb2YgW1tcImxlZnRcIiwgbGVmdF0sIFtcInJpZ2h0XCIsIHJpZ2h0XV0gYXMgY29uc3QpIHtcbiAgICAgIGNvbnN0IG9jY3VwaWVkQnkgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICAgICAgWy4uLmxhbmVdLmZvckVhY2goKHN5bWJvbCwgbGFuZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdHJhY2subGVnZW5kW3N5bWJvbF07XG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSB1c2VzIHN5bWJvbCBcIiR7c3ltYm9sfVwiIGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBpcyBtaXNzaW5nIGZyb20gdGhlIGxlZ2VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuaWQgPT09IFwiZW1wdHlcIikgcmV0dXJuO1xuICAgICAgICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGVudHJ5LmlkKTtcbiAgICAgICAgY29uc3QgY29sdW1uU3BhbiA9IGVuZW15SWQgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkXS5jb2x1bW5TcGFuIDogMTtcbiAgICAgICAgaWYgKGxhbmVJbmRleCArIGNvbHVtblNwYW4gPiBsYW5lLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgbmVlZHMgJHtjb2x1bW5TcGFufSBjb2x1bW5zIGFuZCBvbmx5ICR7bGFuZS5sZW5ndGggLSBsYW5lSW5kZXh9IHJlbWFpbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykge1xuICAgICAgICAgIGNvbnN0IG9jY3VwaWVkID0gb2NjdXBpZWRCeS5nZXQobGFuZUluZGV4ICsgb2Zmc2V0KTtcbiAgICAgICAgICBpZiAob2NjdXBpZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBvbiAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXggKyBvZmZzZXR9LCBhbHJlYWR5IG9jY3VwaWVkIGJ5ICR7b2NjdXBpZWR9LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykgb2NjdXBpZWRCeS5zZXQobGFuZUluZGV4ICsgb2Zmc2V0LCBlbnRyeS5pZCk7XG5cbiAgICAgICAgZW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICBzaWRlLFxuICAgICAgICAgIGxhbmVJbmRleCxcbiAgICAgICAgICBjb2x1bW5TcGFuLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGRpc3RhbmNlRnJvbVBsYXllcixcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IChlbnRyeS5zcGVlZCA/PyAxKSAqIChpc0VuZW15KGVudHJ5LmlkKSA/IHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA6IDEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+XG4gICAgYS5kaXN0YW5jZUZyb21QbGF5ZXIgLSBiLmRpc3RhbmNlRnJvbVBsYXllciB8fFxuICAgIGEucm93SW5kZXggLSBiLnJvd0luZGV4IHx8XG4gICAgYS5zaWRlLmxvY2FsZUNvbXBhcmUoYi5zaWRlKSB8fFxuICAgIGEubGFuZUluZGV4IC0gYi5sYW5lSW5kZXgpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IGd1bkZhbWlseSB9IGZyb20gXCIuL0d1bkZhbWlseVwiO1xuaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuL011bHRpcGxpZXJGYW1pbHlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuaW1wb3J0IHsgc2hpZWxkRmFtaWx5IH0gZnJvbSBcIi4vU2hpZWxkRmFtaWx5XCI7XG5pbXBvcnQgeyBzd29yZEZhbWlseSB9IGZyb20gXCIuL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiwgdHlwZSBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuXG4vKipcbiAqIEdsb2JhbCAwLWJhc2VkIGNvbHVtbiBpbmRleCBhY3Jvc3MgYm90aCBsYW5lcy5cbiAqXG4gKiBDdXJyZW50IGxheW91dCBzaGFwZTpcbiAqIC0gY29sdW1ucyAwLTQgYXJlIHRoZSBsZWZ0IGxhbmVcbiAqIC0gY29sdW1ucyA1LTkgYXJlIHRoZSByaWdodCBsYW5lXG4gKlxuICogRXhhbXBsZXM6XG4gKiAtIDIgPSBsZWZ0IGxhbmUgbWlkZGxlXG4gKiAtIDcgPSByaWdodCBsYW5lIG1pZGRsZVxuICovXG5leHBvcnQgdHlwZSBUcmFja0NvbHVtbiA9IG51bWJlcjtcblxuLyoqXG4gKiBGcmllbmRseSBjb2x1bW4gY29uc3RhbnRzIGZvciB0aGUgY3VycmVudCAyLWxhbmUgLyA1LWNvbHVtbiB0cmFjayBmb3JtYXQuXG4gKlxuICogVGhlc2UgYXJlIG9ubHkgc3VnYXIuIFRoZSBidWlsZGVyIHN0aWxsIGFjY2VwdHMgcmF3IG51bWJlcnMgZm9yIGZhc3QgYXV0aG9yaW5nLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQ29sdW1ucyB7XG4gIHJlYWRvbmx5IGxlZnQ6IHtcbiAgICByZWFkb25seSBvdXRlcjogMDtcbiAgICByZWFkb25seSBuZWFyT3V0ZXI6IDE7XG4gICAgcmVhZG9ubHkgbWlkOiAyO1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogMztcbiAgICByZWFkb25seSBpbm5lcjogNDtcbiAgfTtcbiAgcmVhZG9ubHkgcmlnaHQ6IHtcbiAgICByZWFkb25seSBpbm5lcjogNTtcbiAgICByZWFkb25seSBuZWFySW5uZXI6IDY7XG4gICAgcmVhZG9ubHkgbWlkOiA3O1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogODtcbiAgICByZWFkb25seSBvdXRlcjogOTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb21tb24gZXhwb3J0ZWQgY29sdW1uIGNvbnN0YW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiBidWlsZGVyLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSlcbiAqIGJ1aWxkZXIud2VhcG9uKFwic3dvcmQuYXJjQmxhZGVcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pXG4gKi9cbmV4cG9ydCBjb25zdCBjOiBUcmFja0NvbHVtbnMgPSB7XG4gIGxlZnQ6IHsgb3V0ZXI6IDAsIG5lYXJPdXRlcjogMSwgbWlkOiAyLCBuZWFySW5uZXI6IDMsIGlubmVyOiA0IH0sXG4gIHJpZ2h0OiB7IGlubmVyOiA1LCBuZWFySW5uZXI6IDYsIG1pZDogNywgbmVhck91dGVyOiA4LCBvdXRlcjogOSB9LFxufTtcblxuZXhwb3J0IHR5cGUgVHJhY2tFbmVteVJlZiA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFRyYWNrV2VhcG9uUmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tQaWNrdXBSZWYgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tQbGFjZW1lbnRPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBlci1zeW1ib2wgc3BlZWQgbXVsdGlwbGllciBlbWl0dGVkIGludG8gdGhlIHRyYWNrIGxlZ2VuZC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBUaGUgZGVmYXVsdCBpcyAxLCBhbmQgZnV0dXJlIHRyYWNrIGVkaXRzXG4gICAqIHNob3VsZCBwcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHkgYXNrcyBmb3Igc3BlZWQgdHVuaW5nLlxuICAgKiBDaGFuZ2luZyB0aGlzIHZhbHVlIGlzIGEgc2lnbmlmaWNhbnQgYmFsYW5jZSBjaGFuZ2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xpbmVPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgY291bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEVtcHR5IHJvd3MgYmV0d2VlbiBlYWNoIGVuZW15LlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byAwLiBJbiBwcmVzc3VyZSBzZWN0aW9ucywgb21pdCB0aGlzIHVubGVzcyB0aGUgZ2FwIGlzXG4gICAqIGludGVudGlvbmFsOyBwcmVzc3VyZSBzaG91bGQgbm9ybWFsbHkgcGxhY2UgZW5lbWllcyBldmVyeSByb3cuXG4gICAqL1xuICBnYXA/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBlbmVteSBzcGVlZCBvdmVycmlkZSBmb3IgdGhpcyByZXBlYXRlZCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1dhbGxPcHRpb25zIHtcbiAgY29sdW1uczogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXTtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHdhbGwuXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RyaXBPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgcm93czogbnVtYmVyO1xuICAvKipcbiAgICogUGxhY2Ugb25lIGVuZW15IGV2ZXJ5IE4gcm93cy5cbiAgICpcbiAgICogRHJpcCBpcyBpbnRlbnRpb25hbGx5IHNwYXJzZS4gUHJlZmVyIGxpbmUvYWx0ZXJuYXRpbmcgd2l0aG91dCBhIGdhcCBmb3JcbiAgICogbm9ybWFsIHByZXNzdXJlLCBhbmQgdXNlIGRyaXAgb25seSB3aGVuIHRoZSBzcGFyc2UgY2FkZW5jZSBpcyBkZWxpYmVyYXRlLlxuICAgKi9cbiAgZXZlcnk6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIGRyaXAgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICBhdChyb3dPZmZzZXQ6IG51bWJlcik6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyT3B0aW9ucyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGJhbGFuY2U6IHtcbiAgICBlbmVteUhwOiBudW1iZXI7XG4gICAgZW5lbXlTcGVlZDogbnVtYmVyO1xuICB9O1xuICBwbGF5ZXJTdGFydENvbHVtbj86IFRyYWNrQ29sdW1uO1xuICBsYW5lV2lkdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyIHtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGFkdmFuY2VSb3dzKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiBUcmFja0J1aWxkZXI7XG4gIHNlY3Rpb24obmFtZTogc3RyaW5nLCByb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IFRyYWNrQnVpbGRlcjtcbiAgLyoqXG4gICAqIEFkZCBhIGRhbmdlci1mb2N1c2VkIHNlY3Rpb24gd2l0aCBhIGZpeGVkIGR1cmF0aW9uLlxuICAgKlxuICAgKiBQcmVzc3VyZSBzaG91bGQgdXN1YWxseSBjb250YWluIGVuZW15IHBsYWNlbWVudCBldmVyeSByb3cuIFVzZSBleHBsaWNpdFxuICAgKiBnYXBzIG9yIGRyaXAgcGF0dGVybnMgb25seSB3aGVuIHRoZSBxdWlldCBzcGFjZSBpcyBpbnRlbnRpb25hbC5cbiAgICovXG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICByZWJ1aWxkKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYnVpbGQoKTogVHJhY2tNZW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyRmFjdG9yeSB7XG4gIGNyZWF0ZShvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xufVxuXG5pbnRlcmZhY2UgUGxhY2VtZW50IHtcbiAgcm93OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICBpZDogc3RyaW5nO1xuICBzcGVlZDogbnVtYmVyO1xuICBzcGFuOiBudW1iZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRMYW5lV2lkdGggPSA1O1xuY29uc3QgZW1wdHlTeW1ib2wgPSBcIi5cIjtcbmNvbnN0IHBsYXllclN5bWJvbCA9IFwiTVwiO1xuY29uc3QgZW5lbXlBbGlhc2VzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYmFzaWM6IFwiZW5lbXkuYmFzaWNcIixcbiAgYmFzaWNPcmI6IFwiZW5lbXkuYmFzaWNPcmJcIixcbiAgZ2xhc3M6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgZ2xhc3NTaGllbGQ6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgd2luZ2VyOiBcImVuZW15LndpbmdlclwiLFxuICB0YW5rOiBcImVuZW15LnRhbmtcIixcbn07XG5jb25zdCB3ZWFwb25QcmVmaXhlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIGd1bjogXCJwaWNrdXAud2VhcG9uLmd1bi5cIixcbiAgc2hpZWxkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLFxuICBzd29yZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLFxufTtcbmNvbnN0IHBpY2t1cEFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcInVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG4gIFwidW5pdE11bHRpcGxpZXIuc3F1YWRQbHVzT25lXCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG59O1xuY29uc3QgcHJlZmVycmVkU3ltYm9sczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiZW5lbXkuYmFzaWNcIjogXCJFXCIsXG4gIFwiZW5lbXkuYmFzaWNPcmJcIjogXCJFXCIsXG4gIFwiZW5lbXkuZ2xhc3NTaGllbGRcIjogXCJEXCIsXG4gIFwiZW5lbXkud2luZ2VyXCI6IFwiV1wiLFxuICBcImVuZW15LnRhbmtcIjogXCJUXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIjogXCJHXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ubmVlZGxlclNtZ1wiOiBcIk5cIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIjogXCJCXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIjogXCJIXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiOiBcIlJcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCI6IFwiU1wiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCI6IFwiVlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCI6IFwiWFwiLFxuICBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIjogXCJhXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCI6IFwiY1wiLFxuICBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiOiBcIjJcIixcbn07XG5jb25zdCBmYWxsYmFja1N5bWJvbHMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoyMzQ1Njc4OSEjJCUmKissLS86Ozw9Pj9AXl9+XCIuc3BsaXQoXCJcIilcbiAgLmZpbHRlcihzeW1ib2wgPT4gc3ltYm9sICE9PSBlbXB0eVN5bWJvbCAmJiBzeW1ib2wgIT09IHBsYXllclN5bWJvbCk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbnRlZ2VyKHZhbHVlOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGFuIGludGVnZXIuYCk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICByZXF1aXJlSW50ZWdlcih2YWx1ZSwgbGFiZWwpO1xuICBpZiAodmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcGVlZChzcGVlZDogbnVtYmVyIHwgdW5kZWZpbmVkLCBsYWJlbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzcGVlZCA/PyAxO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgfHwgdmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVuZW15SWQoaWQ6IFRyYWNrRW5lbXlSZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gZW5lbXlBbGlhc2VzW2lkXSA/PyBgZW5lbXkuJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVXZWFwb25JZChpZDogVHJhY2tXZWFwb25SZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uXCIpKSByZXR1cm4gaWQ7XG4gIGNvbnN0IGRvdEluZGV4ID0gaWQuaW5kZXhPZihcIi5cIik7XG4gIGlmIChkb3RJbmRleCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgbXVzdCB1c2UgZmFtaWx5LmlkIHNob3J0aGFuZCBvciBhIGNhbm9uaWNhbCBwaWNrdXAud2VhcG9uIGlkLmApO1xuICBjb25zdCBmYW1pbHkgPSBpZC5zbGljZSgwLCBkb3RJbmRleCk7XG4gIGNvbnN0IG1lbWJlciA9IGlkLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gIGNvbnN0IHByZWZpeCA9IHdlYXBvblByZWZpeGVzW2ZhbWlseV07XG4gIGlmICghcHJlZml4KSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgaGFzIHVua25vd24gd2VhcG9uIGZhbWlseSBcIiR7ZmFtaWx5fVwiLmApO1xuICByZXR1cm4gYCR7cHJlZml4fSR7bWVtYmVyfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBpY2t1cElkKGlkOiBUcmFja1BpY2t1cFJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gcGlja3VwQWxpYXNlc1tpZF0gPz8gYHBpY2t1cC4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIGVuZW15TWVtYmVySWQoY2Fub25pY2FsSWQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoY2Fub25pY2FsSWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFjYW5vbmljYWxJZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNhbm9uaWNhbElkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDYW5vbmljYWxJZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteU1lbWJlcklkKGlkKTtcbiAgaWYgKGVuZW15SWQpIHtcbiAgICBpZiAoIShlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGVuZW15IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsaWRhdG9yczogcmVhZG9ubHkgW3N0cmluZywgUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LCBzdHJpbmddW10gPSBbXG4gICAgW1wicGlja3VwLndlYXBvbi5ndW4uXCIsIGd1bkZhbWlseS5tZW1iZXJzLCBcImd1blwiXSxcbiAgICBbXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIiwgc2hpZWxkRmFtaWx5Lm1lbWJlcnMsIFwic2hpZWxkXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsIHN3b3JkRmFtaWx5Lm1lbWJlcnMsIFwic3dvcmRcIl0sXG4gIF07XG4gIGZvciAoY29uc3QgW3ByZWZpeCwgbWVtYmVycywgbGFiZWxdIG9mIHZhbGlkYXRvcnMpIHtcbiAgICBpZiAoIWlkLnN0YXJ0c1dpdGgocHJlZml4KSkgY29udGludWU7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShwcmVmaXgubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duICR7bGFiZWx9IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSByZXR1cm47XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlcklkID0gaWQuc2xpY2UoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbXVsdGlwbGllciBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgdHJhY2sgZW50aXR5IGlkIFwiJHtpZH1cIi5gKTtcbn1cblxuZnVuY3Rpb24gc3BhbkZvcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCAmJiBlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzID8gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZCBhcyBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnNdLmNvbHVtblNwYW4gOiAxO1xufVxuXG5jbGFzcyBUcmFja0J1aWxkZXJDb3JlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsYW5lV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGN1cnNvciA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKSB7XG4gICAgdGhpcy5sYW5lV2lkdGggPSBvcHRpb25zLmxhbmVXaWR0aCA/PyBkZWZhdWx0TGFuZVdpZHRoO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodGhpcy5sYW5lV2lkdGgsIFwiVHJhY2sgbGFuZVdpZHRoXCIpO1xuICAgIGlmICh0aGlzLmxhbmVXaWR0aCA8IDMpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhbmVXaWR0aCBtdXN0IGJlIGF0IGxlYXN0IDMuXCIpO1xuICAgIGlmICghb3B0aW9ucy5sYWJlbC50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhYmVsIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAoIW9wdGlvbnMuZGVzY3JpcHRpb24udHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBkZXNjcmlwdGlvbiBpcyByZXF1aXJlZC5cIik7XG4gICAgaWYgKG9wdGlvbnMuYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIHRoaXMudmFsaWRhdGVDb2x1bW4ob3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkLCBcInBsYXllclN0YXJ0Q29sdW1uXCIsIDEpO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcImVuZW15XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcIndlYXBvblwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplUGlja3VwSWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJwaWNrdXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZHZhbmNlUm93cyhyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIFwiYWR2YW5jZVJvd3Mgcm93c1wiKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5hZHZhbmNlUm93cyhyb3dzKTtcbiAgfVxuXG4gIHNlY3Rpb24obmFtZTogc3RyaW5nLCByb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIGlmICghbmFtZS50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIHNlY3Rpb24gbmFtZSBpcyByZXF1aXJlZC5cIik7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihyb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7bmFtZX1cIiByb3dzYCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IG5ldyBUcmFja1NlY3Rpb25CdWlsZGVyQ29yZSh0aGlzLCBuYW1lLCB0aGlzLmN1cnNvciwgcm93cyk7XG4gICAgYnVpbGQoc2VjdGlvbik7XG4gICAgdGhpcy5jdXJzb3IgKz0gcm93cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuc2VjdGlvbihcInByZXNzdXJlXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicmVidWlsZFwiLCByb3dzLCBidWlsZCk7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZExpbmUodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwibGluZVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRBbHRlcm5hdGluZyh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJhbHRlcm5hdGluZ1wiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkV2FsbCh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJ3YWxsXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGREcmlwKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImRyaXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRTZWN0aW9uRW5lbXkoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBlbmVteWApO1xuICB9XG5cbiAgYWRkU2VjdGlvbldlYXBvbihiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplV2VhcG9uSWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgd2VhcG9uYCk7XG4gIH1cblxuICBhZGRTZWN0aW9uUGlja3VwKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwaWNrdXBgKTtcbiAgfVxuXG4gIGFkZExpbmUoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuY291bnQsIGAke2xhYmVsfSBjb3VudGApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBpbmRleCAqIChnYXAgKyAxKSwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFsdGVybmF0aW5nKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHJlcXVpcmVJbnRlZ2VyKGdhcCwgYCR7bGFiZWx9IGdhcGApO1xuICAgIGlmIChnYXAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGdhcCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbnMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG9wdGlvbnMuY29sdW1uc1tpbmRleCAlIG9wdGlvbnMuY29sdW1ucy5sZW5ndGhdO1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkV2FsbChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLmNvbHVtbnMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGNvbHVtbnMgbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBjb2x1bW4uYCk7XG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2Ygb3B0aW9ucy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93LCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRHJpcChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5yb3dzLCBgJHtsYWJlbH0gcm93c2ApO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5ldmVyeSwgYCR7bGFiZWx9IGV2ZXJ5YCk7XG4gICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgb3B0aW9ucy5yb3dzOyBvZmZzZXQgKz0gb3B0aW9ucy5ldmVyeSkge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBvZmZzZXQsIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBidWlsZCgpOiBUcmFja01lbWJlciB7XG4gICAgY29uc3QgcGxheWVyU3RhcnRDb2x1bW4gPSB0aGlzLm9wdGlvbnMucGxheWVyU3RhcnRDb2x1bW4gPz8gYy5sZWZ0Lm1pZDtcbiAgICBjb25zdCBtYXhQbGFjZW1lbnRSb3cgPSB0aGlzLnBsYWNlbWVudHMucmVkdWNlKChtYXgsIGl0ZW0pID0+IE1hdGgubWF4KG1heCwgaXRlbS5yb3cpLCAwKTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWF4KHRoaXMuY3Vyc29yLCBtYXhQbGFjZW1lbnRSb3cgKyAxLCAxKTtcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5sYW5lV2lkdGggKiAyIH0sICgpID0+IGVtcHR5U3ltYm9sKSk7XG4gICAgY29uc3Qgb2NjdXBpZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpKTtcbiAgICBjb25zdCBsZWdlbmQgPSBuZXcgTWFwPHN0cmluZywgeyBpZDogc3RyaW5nOyBzcGVlZDogbnVtYmVyIH0+KCk7XG4gICAgbGVnZW5kLnNldChlbXB0eVN5bWJvbCwgeyBpZDogXCJlbXB0eVwiLCBzcGVlZDogMSB9KTtcbiAgICBsZWdlbmQuc2V0KHBsYXllclN5bWJvbCwgeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiwgc3BlZWQ6IDEgfSk7XG4gICAgY29uc3QgdXNlZFN5bWJvbHMgPSBuZXcgU2V0KFtlbXB0eVN5bWJvbCwgcGxheWVyU3ltYm9sXSk7XG4gICAgY29uc3Qgc3ltYm9sQnlFbnRpdHkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIGNvbnN0IHBsYXllckNlbGxzID0gdGhpcy5jZWxsc0ZvcihwbGF5ZXJTdGFydENvbHVtbiwgMSk7XG4gICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSBvY2N1cGllZFswXS5zZXQoY2VsbC5nbG9iYWxDb2x1bW4sIFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIHJvd3NbMF1bcGxheWVyU3RhcnRDb2x1bW5dID0gcGxheWVyU3ltYm9sO1xuXG4gICAgZm9yIChjb25zdCBwbGFjZW1lbnQgb2YgdGhpcy5wbGFjZW1lbnRzKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbEZvcihwbGFjZW1lbnQsIHVzZWRTeW1ib2xzLCBzeW1ib2xCeUVudGl0eSk7XG4gICAgICBsZWdlbmQuc2V0KHN5bWJvbCwgeyBpZDogcGxhY2VtZW50LmlkLCBzcGVlZDogcGxhY2VtZW50LnNwZWVkIH0pO1xuICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHRoaXMuY2VsbHNGb3IocGxhY2VtZW50LmNvbHVtbiwgcGxhY2VtZW50LnNwYW4pKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uZ2V0KGNlbGwuZ2xvYmFsQ29sdW1uKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBwbGFjZW1lbnQgb3ZlcmxhcCBhdCByb3cgJHtwbGFjZW1lbnQucm93fSwgY29sdW1uICR7Y2VsbC5nbG9iYWxDb2x1bW59LiBFeGlzdGluZyBpZCBcIiR7ZXhpc3Rpbmd9XCIsIG5ldyBpZCBcIiR7cGxhY2VtZW50LmlkfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIG9jY3VwaWVkW3BsYWNlbWVudC5yb3ddLnNldChjZWxsLmdsb2JhbENvbHVtbiwgcGxhY2VtZW50LmlkKTtcbiAgICAgIH1cbiAgICAgIHJvd3NbcGxhY2VtZW50LnJvd11bcGxhY2VtZW50LmNvbHVtbl0gPSBzeW1ib2w7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgICAgIGxheW91dDogYFxcbiR7cm93cy5zbGljZSgpLnJldmVyc2UoKS5tYXAocm93ID0+IGAke3Jvdy5zbGljZSgwLCB0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX0gfCAke3Jvdy5zbGljZSh0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX1gKS5qb2luKFwiXFxuXCIpfVxcbmAsXG4gICAgICBsZWdlbmQ6IE9iamVjdC5mcm9tRW50cmllcyhbLi4ubGVnZW5kLmVudHJpZXMoKV0ubWFwKChbc3ltYm9sLCBlbnRyeV0pID0+IFtcbiAgICAgICAgc3ltYm9sLFxuICAgICAgICBlbnRyeS5zcGVlZCA9PT0gMSA/IHsgaWQ6IGVudHJ5LmlkIH0gOiB7IGlkOiBlbnRyeS5pZCwgc3BlZWQ6IGVudHJ5LnNwZWVkIH0sXG4gICAgICBdKSksXG4gICAgICBiYWxhbmNlOiB0aGlzLm9wdGlvbnMuYmFsYW5jZSxcbiAgICB9O1xuICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogdGhpcy5vcHRpb25zLmxhYmVsLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGVudmlyb25tZW50OiB0aGlzLm9wdGlvbnMuZW52aXJvbm1lbnQsXG4gICAgICBkZWZpbml0aW9uLFxuICAgIH07XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIHJvd3M6IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKHJvd09mZnNldCwgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXRgKTtcbiAgICBpZiAocm93T2Zmc2V0IDwgMCB8fCByb3dPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiByb3cgb2Zmc2V0ICR7cm93T2Zmc2V0fSBpcyBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVTZWN0aW9uU3BhbihzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyLCBjb3ZlcmVkUm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihjb3ZlcmVkUm93cywgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGNvdmVyZWQgcm93c2ApO1xuICAgIHRoaXMudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHNlY3Rpb25OYW1lLCByb3dPZmZzZXQsIHJvd3MpO1xuICAgIGNvbnN0IGxhc3RPZmZzZXQgPSByb3dPZmZzZXQgKyBjb3ZlcmVkUm93cyAtIDE7XG4gICAgaWYgKGxhc3RPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwYXR0ZXJuIHJlYWNoZXMgcm93IG9mZnNldCAke2xhc3RPZmZzZXR9LCBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwbGFjZShpZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMsIHJvdzogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93LCBgJHtsYWJlbH0gcm93YCk7XG4gICAgaWYgKHJvdyA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gcm93IGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkKTtcbiAgICBjb25zdCBzcGFuID0gc3BhbkZvcihpZCk7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLmNvbHVtbiwgYCR7bGFiZWx9IGNvbHVtbmAsIHNwYW4pO1xuICAgIHRoaXMucGxhY2VtZW50cy5wdXNoKHtcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sXG4gICAgICBpZCxcbiAgICAgIHNwZWVkOiBub3JtYWxpemVTcGVlZChvcHRpb25zLnNwZWVkLCBsYWJlbCksXG4gICAgICBzcGFuLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUNvbHVtbihjb2x1bW46IFRyYWNrQ29sdW1uLCBsYWJlbDogc3RyaW5nLCBzcGFuOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihjb2x1bW4sIGxhYmVsKTtcbiAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5sYW5lV2lkdGggKiAyO1xuICAgIGlmIChjb2x1bW4gPCAwIHx8IGNvbHVtbiA+PSB0b3RhbFdpZHRoKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBpcyBvdXRzaWRlIHRoZSAwLSR7dG90YWxXaWR0aCAtIDF9IHRyYWNrIHJhbmdlLmApO1xuICAgIGNvbnN0IHNpZGVDb2x1bW4gPSBjb2x1bW4gJSB0aGlzLmxhbmVXaWR0aDtcbiAgICBpZiAoc2lkZUNvbHVtbiArIHNwYW4gPiB0aGlzLmxhbmVXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSAke2NvbHVtbn0gY2Fubm90IGZpdCBhICR7c3Bhbn0tY29sdW1uIGVudGl0eSBpbnNpZGUgYSAke3RoaXMubGFuZVdpZHRofS1jb2x1bW4gbGFuZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxzRm9yKGNvbHVtbjogbnVtYmVyLCBzcGFuOiBudW1iZXIpOiBBcnJheTx7IGdsb2JhbENvbHVtbjogbnVtYmVyIH0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc3BhbiB9LCAoXywgb2Zmc2V0KSA9PiAoeyBnbG9iYWxDb2x1bW46IGNvbHVtbiArIG9mZnNldCB9KSk7XG4gIH1cblxuICBwcml2YXRlIHN5bWJvbEZvcihwbGFjZW1lbnQ6IFBsYWNlbWVudCwgdXNlZFN5bWJvbHM6IFNldDxzdHJpbmc+LCBzeW1ib2xCeUVudGl0eTogTWFwPHN0cmluZywgc3RyaW5nPik6IHN0cmluZyB7XG4gICAgY29uc3Qga2V5ID0gYCR7cGxhY2VtZW50LmlkfUAke3BsYWNlbWVudC5zcGVlZH1gO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gc3ltYm9sQnlFbnRpdHkuZ2V0KGtleSk7XG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7XG4gICAgY29uc3QgcHJlZmVycmVkID0gcHJlZmVycmVkU3ltYm9sc1twbGFjZW1lbnQuaWRdO1xuICAgIGNvbnN0IHN5bWJvbCA9IHByZWZlcnJlZCAmJiAhdXNlZFN5bWJvbHMuaGFzKHByZWZlcnJlZClcbiAgICAgID8gcHJlZmVycmVkXG4gICAgICA6IGZhbGxiYWNrU3ltYm9scy5maW5kKGNhbmRpZGF0ZSA9PiAhdXNlZFN5bWJvbHMuaGFzKGNhbmRpZGF0ZSkpO1xuICAgIGlmICghc3ltYm9sKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBidWlsZGVyIHJhbiBvdXQgb2Ygb25lLWNoYXJhY3RlciBsZWdlbmQgc3ltYm9scy5cIik7XG4gICAgdXNlZFN5bWJvbHMuYWRkKHN5bWJvbCk7XG4gICAgc3ltYm9sQnlFbnRpdHkuc2V0KGtleSwgc3ltYm9sKTtcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG59XG5cbmNsYXNzIFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlIGltcGxlbWVudHMgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIHByaXZhdGUgcm93T2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogVHJhY2tCdWlsZGVyQ29yZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhc2VSb3c6IG51bWJlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvd3M6IG51bWJlcixcbiAgKSB7fVxuXG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHRoaXMubmFtZSwgcm93T2Zmc2V0LCB0aGlzLnJvd3MpO1xuICAgIHRoaXMucm93T2Zmc2V0ID0gcm93T2Zmc2V0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25FbmVteSh0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25XZWFwb24odGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uUGlja3VwKHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgKG9wdGlvbnMuY291bnQgLSAxKSAqIChnYXAgKyAxKSArIDEpO1xuICAgIHRoaXMucGFyZW50LmFkZExpbmUodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgbGluZWApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkQWx0ZXJuYXRpbmcodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgYWx0ZXJuYXRpbmdgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFdhbGwodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgd2FsbGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIG9wdGlvbnMucm93cyk7XG4gICAgdGhpcy5wYXJlbnQuYWRkRHJpcCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBkcmlwYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrQnVpbGRlcjogVHJhY2tCdWlsZGVyRmFjdG9yeSA9IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXIge1xuICAgIHJldHVybiBuZXcgVHJhY2tCdWlsZGVyQ29yZShvcHRpb25zKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrQnVpbGRlciwgdHlwZSBUcmFja1NlY3Rpb25CdWlsZGVyIH0gZnJvbSBcIi4uL1RyYWNrQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgVHJhY2tUaGVtZUlkID0gXCJndW5TY2hvb2xcIiB8IFwiZ3VhcmRCbGFkZXNcIiB8IFwiY3J5c3RhbFNpZWdlXCIgfCBcInN3YXJtQmxvb21cIiB8IFwibWlycm9yQXJyYXlcIjtcbmV4cG9ydCB0eXBlIFRyYWNrVGllciA9IDEgfCAyIHwgMztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NlZFRyYWNrT3B0aW9ucyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB0aGVtZTogVHJhY2tUaGVtZUlkO1xuICB0aWVyOiBUcmFja1RpZXI7XG59XG5cbmludGVyZmFjZSBUcmFja0J1aWxkQ29udGV4dCB7XG4gIHJlYWRvbmx5IHRpZXI6IFRyYWNrVGllcjtcbiAgcmVhZG9ubHkgY3Vyc29yOiBudW1iZXI7XG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB2b2lkO1xuICBwcmVzc3VyZShyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHJlc3BpdGUocm93czogbnVtYmVyKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRoZW1lUGxhbiB7XG4gIGZpbmFsUm93czogbnVtYmVyO1xuICBvcGVuKGNvbnRleHQ6IFRyYWNrQnVpbGRDb250ZXh0KTogdm9pZDtcbiAgY3ljbGUoY29udGV4dDogVHJhY2tCdWlsZENvbnRleHQsIGN5Y2xlSW5kZXg6IG51bWJlcik6IHZvaWQ7XG4gIGZpbmlzaChjb250ZXh0OiBUcmFja0J1aWxkQ29udGV4dCwgY3ljbGVJbmRleDogbnVtYmVyKTogdm9pZDtcbn1cblxuY29uc3QgdGFyZ2V0Um93c0J5VGllcjogUmVjb3JkPFRyYWNrVGllciwgbnVtYmVyPiA9IHtcbiAgMTogMTA1LFxuICAyOiAyNjUsXG4gIDM6IDQyNSxcbn07XG5cbmNvbnN0IGVuZW15SHBCeVRpZXI6IFJlY29yZDxUcmFja1RpZXIsIG51bWJlcj4gPSB7XG4gIDE6IDEsXG4gIDI6IDEuMDgsXG4gIDM6IDEuMTYsXG59O1xuXG5jb25zdCBwaWNrID0gPFQ+KGl0ZW1zOiByZWFkb25seSBUW10sIHRpZXI6IFRyYWNrVGllciwgY3ljbGVJbmRleDogbnVtYmVyKTogVCA9PlxuICBpdGVtc1tNYXRoLm1pbihpdGVtcy5sZW5ndGggLSAxLCB0aWVyIC0gMSArIGN5Y2xlSW5kZXggJSAyKV07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoYnVpbGRlcjogVHJhY2tCdWlsZGVyLCB0aWVyOiBUcmFja1RpZXIpOiBUcmFja0J1aWxkQ29udGV4dCB7XG4gIGxldCBjdXJzb3IgPSAxO1xuICByZXR1cm4ge1xuICAgIHRpZXIsXG4gICAgZ2V0IGN1cnNvcigpIHtcbiAgICAgIHJldHVybiBjdXJzb3I7XG4gICAgfSxcbiAgICByZWJ1aWxkKHJvd3MsIGJ1aWxkKSB7XG4gICAgICBidWlsZGVyLnJlYnVpbGQocm93cywgYnVpbGQpO1xuICAgICAgY3Vyc29yICs9IHJvd3M7XG4gICAgfSxcbiAgICBwcmVzc3VyZShyb3dzLCBidWlsZCkge1xuICAgICAgYnVpbGRlci5wcmVzc3VyZShyb3dzLCBidWlsZCk7XG4gICAgICBjdXJzb3IgKz0gcm93cztcbiAgICB9LFxuICAgIHJlc3BpdGUocm93cykge1xuICAgICAgYnVpbGRlci5yZXNwaXRlKHJvd3MpO1xuICAgICAgY3Vyc29yICs9IHJvd3M7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ3VuU2Nob29sUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IDIyIH0pO1xuICBzZWN0aW9uLmF0KDIyKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAxMiB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDEpLmRyaXAoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIHJvd3M6IDM0LCBldmVyeTogNiB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDM0KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA4IH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDYpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MucmlnaHQuaW5uZXIsIGMubGVmdC5pbm5lcl0sIGNvdW50OiA4LCBnYXA6IDMgfSk7XG4gIGlmICh0aWVyID49IDMgJiYgY3ljbGVJbmRleCA+IDApIHtcbiAgICBzZWN0aW9uLmF0KDI0KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQuaW5uZXIgfSk7XG4gICAgc2VjdGlvbi5hdCgyOCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFySW5uZXIsIGMucmlnaHQubmVhcklubmVyXSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBndWFyZEJsYWRlUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgaGFzQ2xlYXZlclNldHVwID0gdGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwO1xuICBzZWN0aW9uLmF0KDApLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIGNvdW50OiAxOCB9KTtcbiAgc2VjdGlvbi5hdCgxOCkuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0sIGNvdW50OiBoYXNDbGVhdmVyU2V0dXAgPyAxMiA6IDI0LCBnYXA6IGhhc0NsZWF2ZXJTZXR1cCA/IDEgOiB1bmRlZmluZWQgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgzKS5hbHRlcm5hdGluZyhcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA4LCBnYXA6IDMgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCg4KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdIH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDE0KS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogNiwgZ2FwOiAzIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDI1KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGMucmlnaHQuaW5uZXIgfSk7XG59XG5cbmZ1bmN0aW9uIGNyeXN0YWxTaWVnZVByZXNzdXJlKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIsIHRpZXI6IFRyYWNrVGllciwgY3ljbGVJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIHNlY3Rpb24uYXQoMCkuYWx0ZXJuYXRpbmcoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXIsIGMubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IDE2IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjMpLmVuZW15KFwidGFua1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lciB9KTtcbiAgc2VjdGlvbi5hdCgyNSkuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogMjMgfSk7XG4gIGlmIChjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCg0KS5saW5lKFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQubmVhck91dGVyLCBjb3VudDogMTggfSk7XG4gIGlmICh0aWVyID49IDIgJiYgY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMjQpLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMubGVmdC5uZWFySW5uZXIsIGMucmlnaHQubmVhcklubmVyLCBjLnJpZ2h0Lm91dGVyXSB9KTtcbiAgaWYgKHRpZXIgPj0gMyAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgzNikuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQuaW5uZXIgOiBjLmxlZnQubmVhck91dGVyIH0pO1xufVxuXG5mdW5jdGlvbiBzd2FybUJsb29tUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IDIwIH0pO1xuICBzZWN0aW9uLmF0KDIwKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiAyNCB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDIpLmRyaXAoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5uZWFyT3V0ZXIsIHJvd3M6IDM0LCBldmVyeTogNiB9KTtcbiAgaWYgKHRpZXIgPj0gMiAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCg3KS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLmxlZnQuaW5uZXIsIGMucmlnaHQuaW5uZXJdLCBjb3VudDogNywgZ2FwOiAzIH0pO1xuICBpZiAodGllciA+PSAyICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDIxKS53YWxsKFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdIH0pO1xuICBpZiAodGllciA+PSAzICYmIGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDM2KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQuaW5uZXIgfSk7XG59XG5cbmZ1bmN0aW9uIG1pcnJvckFycmF5UHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgdGllcjogVHJhY2tUaWVyLCBjeWNsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc2VjdGlvbi5hdCg0KS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkLCBjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogMTggfSk7XG4gIHNlY3Rpb24uYXQoMjIpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDI0IH0pO1xuICBpZiAoY3ljbGVJbmRleCA+IDApIHNlY3Rpb24uYXQoMCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyXSB9KTtcbiAgaWYgKGN5Y2xlSW5kZXggPiAwKSBzZWN0aW9uLmF0KDYpLmRyaXAoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhcklubmVyIDogYy5yaWdodC5uZWFySW5uZXIsIHJvd3M6IDMyLCBldmVyeTogNiB9KTtcbiAgaWYgKHRpZXIgPj0gMiAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgxOCkuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5yaWdodC5pbm5lciwgYy5sZWZ0LmlubmVyXSwgY291bnQ6IDcsIGdhcDogMyB9KTtcbiAgaWYgKHRpZXIgPj0gMyAmJiBjeWNsZUluZGV4ID4gMCkgc2VjdGlvbi5hdCgzMikud2FsbChcInRhbmtcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5pbm5lcl0gfSk7XG59XG5cbmNvbnN0IHRoZW1lUGxhbnM6IFJlY29yZDxUcmFja1RoZW1lSWQsIFRoZW1lUGxhbj4gPSB7XG4gIGd1blNjaG9vbDoge1xuICAgIGZpbmFsUm93czogNDIsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnB1bHNlUGlzdG9sXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDQpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg3KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDgpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDIsIHNlY3Rpb24gPT4gZ3VuU2Nob29sUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTAsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihwaWNrKFtcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4ubmVlZGxlclNtZ1wiLCBcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm1pZCA6IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMikuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQub3V0ZXIgOiBjLnJpZ2h0Lm91dGVyIH0pO1xuICAgICAgICBpZiAoY3ljbGVJbmRleCAlIDMgPT09IDEpIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFySW5uZXIgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNCkuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLnJpZ2h0Lm91dGVyIDogYy5sZWZ0Lm91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDYpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBpZiAoY3ljbGVJbmRleCAlIDIgPT09IDApIHNlY3Rpb24uYXQoNykucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDgpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm1pZCA6IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5uZWFyT3V0ZXIgOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoY29udGV4dC50aWVyID49IDIgPyA0IDogMik7XG4gICAgfSxcbiAgICBmaW5pc2goY29udGV4dCwgY3ljbGVJbmRleCkge1xuICAgICAgY29udGV4dC5wcmVzc3VyZSg0Miwgc2VjdGlvbiA9PiBndW5TY2hvb2xQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICB9LFxuICB9LFxuICBndWFyZEJsYWRlczoge1xuICAgIGZpbmFsUm93czogNDIsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwic3dvcmQuYXJjQmxhZGVcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pO1xuICAgICAgICBpZiAoY29udGV4dC50aWVyID49IDIpIHNlY3Rpb24uYXQoNikud2VhcG9uKFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoNCk7XG4gICAgfSxcbiAgICBjeWNsZShjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQyLCBzZWN0aW9uID0+IGd1YXJkQmxhZGVQcmVzc3VyZShzZWN0aW9uLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpKTtcbiAgICAgIGNvbnRleHQucmVidWlsZCgxMCwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKHBpY2soW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic3dvcmQuY2xlYXZlclwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgaWYgKGN5Y2xlSW5kZXggJSAyID09PSAwKSBzZWN0aW9uLmF0KDcpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLmxlZnQubmVhcklubmVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDgpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5sZWZ0Lm91dGVyIDogYy5yaWdodC5vdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDIsIHNlY3Rpb24gPT4gZ3VhcmRCbGFkZVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIGNyeXN0YWxTaWVnZToge1xuICAgIGZpbmFsUm93czogNDgsXG4gICAgb3Blbihjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoOSwgc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDgsIHNlY3Rpb24gPT4gY3J5c3RhbFNpZWdlUHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTEsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihwaWNrKFtcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJndW4uc3BsaXR0ZXJSaWZsZVwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDQpLndlYXBvbihwaWNrKFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgICAgaWYgKGNvbnRleHQudGllciA+PSAyKSBzZWN0aW9uLmF0KDcpLndlYXBvbihcInN3b3JkLmNsZWF2ZXJcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5vdXRlciA6IGMucmlnaHQub3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSgyKTtcbiAgICB9LFxuICAgIGZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQ4LCBzZWN0aW9uID0+IGNyeXN0YWxTaWVnZVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIHN3YXJtQmxvb206IHtcbiAgICBmaW5hbFJvd3M6IDQ0LFxuICAgIG9wZW4oY29udGV4dCkge1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDksIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5wdWxzZVBpc3RvbFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgyKS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoNSkud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSg0KTtcbiAgICB9LFxuICAgIGN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDQsIHNlY3Rpb24gPT4gc3dhcm1CbG9vbVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgICAgY29udGV4dC5yZWJ1aWxkKDEyLCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubWlkIDogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKHBpY2soW1wiZ3VuLm5lZWRsZXJTbWdcIiwgXCJzd29yZC5hcmNCbGFkZVwiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIl0sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCksIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDcpLndlYXBvbihwaWNrKFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic3dvcmQuY2xlYXZlclwiLCBcInNoaWVsZC5oZXhHdWFyZFwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDkpLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5taWQgOiBjLmxlZnQubWlkIH0pO1xuICAgICAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0Lm5lYXJPdXRlciB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgxMSkuZW5lbXkoXCJ3aW5nZXJcIiwgeyBjb2x1bW46IGN5Y2xlSW5kZXggJSAyID09PSAwID8gYy5yaWdodC5vdXRlciA6IGMubGVmdC5vdXRlciB9KTtcbiAgICAgIH0pO1xuICAgICAgY29udGV4dC5yZXNwaXRlKDIpO1xuICAgIH0sXG4gICAgZmluaXNoKGNvbnRleHQsIGN5Y2xlSW5kZXgpIHtcbiAgICAgIGNvbnRleHQucHJlc3N1cmUoNDQsIHNlY3Rpb24gPT4gc3dhcm1CbG9vbVByZXNzdXJlKHNlY3Rpb24sIGNvbnRleHQudGllciwgY3ljbGVJbmRleCkpO1xuICAgIH0sXG4gIH0sXG4gIG1pcnJvckFycmF5OiB7XG4gICAgZmluYWxSb3dzOiA0NixcbiAgICBvcGVuKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQucmVidWlsZCg5LCBzZWN0aW9uID0+IHtcbiAgICAgICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4uYnVyc3RDYXJiaW5lXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgzKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgaWYgKGNvbnRleHQudGllciA+PSAyKSBzZWN0aW9uLmF0KDYpLndlYXBvbihcInN3b3JkLmNsZWF2ZXJcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZXh0LnJlc3BpdGUoNCk7XG4gICAgfSxcbiAgICBjeWNsZShjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQ2LCBzZWN0aW9uID0+IG1pcnJvckFycmF5UHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgICBjb250ZXh0LnJlYnVpbGQoMTEsIHNlY3Rpb24gPT4ge1xuICAgICAgICBzZWN0aW9uLmF0KDApLndlYXBvbihwaWNrKFtcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiXSwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSwgeyBjb2x1bW46IGMubGVmdC5taWQgfSk7XG4gICAgICAgIHNlY3Rpb24uYXQoMykud2VhcG9uKHBpY2soW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLCBjb250ZXh0LnRpZXIsIGN5Y2xlSW5kZXgpLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSk7XG4gICAgICAgIGlmIChjeWNsZUluZGV4ICUgMiA9PT0gMCkgc2VjdGlvbi5hdCg4KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCg5KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjeWNsZUluZGV4ICUgMiA9PT0gMCA/IGMucmlnaHQubWlkIDogYy5sZWZ0Lm1pZCB9KTtcbiAgICAgICAgc2VjdGlvbi5hdCgxMCkuZW5lbXkoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogY3ljbGVJbmRleCAlIDIgPT09IDAgPyBjLmxlZnQubmVhcklubmVyIDogYy5yaWdodC5uZWFySW5uZXIgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQucmVzcGl0ZSgyKTtcbiAgICB9LFxuICAgIGZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KSB7XG4gICAgICBjb250ZXh0LnByZXNzdXJlKDQ2LCBzZWN0aW9uID0+IG1pcnJvckFycmF5UHJlc3N1cmUoc2VjdGlvbiwgY29udGV4dC50aWVyLCBjeWNsZUluZGV4KSk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhY2sob3B0aW9uczogQ29tcG9zZWRUcmFja09wdGlvbnMpOiBUcmFja01lbWJlciB7XG4gIGNvbnN0IGJ1aWxkZXIgPSB0cmFja0J1aWxkZXIuY3JlYXRlKHtcbiAgICBsYWJlbDogb3B0aW9ucy5sYWJlbCxcbiAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBvcHRpb25zLnNjZW5lSWQgfSxcbiAgICBiYWxhbmNlOiB7IGVuZW15SHA6IGVuZW15SHBCeVRpZXJbb3B0aW9ucy50aWVyXSwgZW5lbXlTcGVlZDogMSB9LFxuICB9KTtcbiAgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoYnVpbGRlciwgb3B0aW9ucy50aWVyKTtcbiAgY29uc3QgcGxhbiA9IHRoZW1lUGxhbnNbb3B0aW9ucy50aGVtZV07XG4gIGNvbnN0IHRhcmdldFJvd3MgPSB0YXJnZXRSb3dzQnlUaWVyW29wdGlvbnMudGllcl07XG4gIHBsYW4ub3Blbihjb250ZXh0KTtcbiAgbGV0IGN5Y2xlSW5kZXggPSAwO1xuICB3aGlsZSAoY29udGV4dC5jdXJzb3IgKyBwbGFuLmZpbmFsUm93cyA8IHRhcmdldFJvd3MpIHtcbiAgICBwbGFuLmN5Y2xlKGNvbnRleHQsIGN5Y2xlSW5kZXgpO1xuICAgIGN5Y2xlSW5kZXgrKztcbiAgfVxuICBwbGFuLmZpbmlzaChjb250ZXh0LCBjeWNsZUluZGV4KTtcbiAgcmV0dXJuIGJ1aWxkZXIuYnVpbGQoKTtcbn1cbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlNreWJyZWFrXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFuIEF1cm9yYSBvcGVuZXIgZm9jdXNlZCBvbiBzaGllbGRzLCBzaG9ydCBzd29yZCByZWFkcywgYW5kIHBhdGllbnQgY2xvc2UtcmFuZ2UgY2xlYW51cC5cIixcbiAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiUmliYm9uIFN0b3JtXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkF1cm9yYSBwcmVzc3VyZSBleHBhbmRzIGludG8gYWx0ZXJuYXRpbmcgc2hpZWxkIHJlYnVpbGRzLCB3aWRlciBzd29yZCBjaG9pY2VzLCBhbmQgY2x1c3RlcmVkIGNsb3NlLXJhbmdlIHRocmVhdHMuXCIsXG4gIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gIHRpZXI6IDIsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIk1hZ25ldGljIERhd25cIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIEF1cm9yYSBmaW5hbGUgYXNrcyBmb3IgZGVsaWJlcmF0ZSBzaGllbGQgdGltaW5nIGFuZCBzd29yZCBzZWxlY3Rpb24gYWdhaW5zdCBsb25nLCByZWFkYWJsZSB0aHJlYXQgd2F2ZXMuXCIsXG4gIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlByaXNtIElnbml0aW9uXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgQ3J5c3RhbCBGb3JnZSBvcGVuZXIgYnVpbHQgYXJvdW5kIGJ1cnN0IGZpcmUsIGdsYXNzIGRlY295cywgYW5kIGVhcmx5IGhlYXZ5LXRocmVhdCByZWhlYXJzYWwuXCIsXG4gIHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gIHRoZW1lOiBcImNyeXN0YWxTaWVnZVwiLFxuICB0aWVyOiAxLFxufSk7XG4iLCAiaW1wb3J0IHsgY29tcG9zZVRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSBjb21wb3NlVHJhY2soe1xuICBsYWJlbDogXCJGYWNldCBSdW5cIixcbiAgZGVzY3JpcHRpb246IFwiQ3J5c3RhbCBGb3JnZSBkZW5zaXR5IHNoYXJwZW5zIHdpdGggaGVhdmllciBndW5zLCBzdHVyZGllciBzaGllbGRzLCBhbmQgdGFuayBicmVha3MgZnJhbWVkIGJ5IGdsYXNzIGRlY295cy5cIixcbiAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gIHRpZXI6IDIsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkdsYXNzIEhhbW1lclwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgQ3J5c3RhbCBGb3JnZSBmaW5hbGUgY29tbWl0cyB0byBoZWF2eSB3ZWFwb24gcGF5b2ZmcywgcmVwZWF0ZWQgdGFuayBsYW5lcywgYW5kIHByaXNtYXRpYyBkZWNveSBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkZpcnN0IEdsb3dcIixcbiAgZGVzY3JpcHRpb246IFwiQSBndW4tZm9yd2FyZCBOZW9uIE5lYnVsYWUgb3BlbmVyIHdpdGggY2xlYXIgcmVidWlsZCBzaGVsdmVzIGFuZCBvbmx5IGEgZmV3IHNoaWVsZCBzYWZldHkgbmV0cy5cIixcbiAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgdGllcjogMSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiRHJpZnQgTGVzc29uXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbG9uZ2VyIE5lb24gTmVidWxhZSBndW4gbGVzc29uIHRoYXQgYWRkcyB3aW5nIHByZXNzdXJlLCBzdHJvbmdlciBmaXJlYXJtIGNob2ljZXMsIGFuZCBzcGFyc2Ugc2hpZWxkIHJlbGllZi5cIixcbiAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTmVidWxhIEdhdGVcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIE5lb24gTmVidWxhZSBndW4gZmluYWxlIGxheWVycyBoZWF2aWVyIGZpcmVhcm1zLCB0YW5rcywgYW5kIHN1c3RhaW5lZCBsYW5lIHJlYWRpbmcgd2l0aG91dCBsZWFuaW5nIG9uIHNwZWVkIGNoYW5nZXMuXCIsXG4gIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgdGhlbWU6IFwiZ3VuU2Nob29sXCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlBhbmVsIERhd25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBTb2xhciBBcnJheSBvcGVuZXIgd2l0aCBtaXJyb3JlZCByZWFkcywgc3BsaXQtbGFuZSB3ZWFwb24gdGltaW5nLCBhbmQgYnJpZ2h0IGJ1dCBtZWFzdXJlZCBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gIHRpZXI6IDEsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkhlbGlvc3RhdCBSdXNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlNvbGFyIEFycmF5IHByZXNzdXJlIGdyb3dzIHRocm91Z2ggbWlycm9yZWQgd2FsbHMsIHByZWNpc2lvbiByZWJ1aWxkcywgYW5kIGFsdGVybmF0aW5nIG91dGVyLWxhbmUgc3VyZ2VzLlwiLFxuICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTWlycm9yIFplbml0aFwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgU29sYXIgQXJyYXkgZmluYWxlIG1peGVzIG1pcnJvcmVkIHRhbmsgYnJlYWtzLCBzcGxpdC1maXJlIHJlYnVpbGRzLCBhbmQgbG9uZy1mb3JtIHByZWNpc2lvbiBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gIHRpZXI6IDMsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIkJsb29tIFNpZ25hbFwiLFxuICBkZXNjcmlwdGlvbjogXCJBIFZvaWQgR2FyZGVuIG9wZW5lciBhYm91dCBncm93aW5nIHRoZSBzcXVhZCBlYXJseSBhbmQgc3VzdGFpbmluZyBjYWxtIGNyb3NzLWxhbmUgYmxvb20gcHJlc3N1cmUuXCIsXG4gIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICB0aGVtZTogXCJzd2FybUJsb29tXCIsXG4gIHRpZXI6IDEsXG59KTtcbiIsICJpbXBvcnQgeyBjb21wb3NlVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IGNvbXBvc2VUcmFjayh7XG4gIGxhYmVsOiBcIlJvb3QgTGF0dGljZVwiLFxuICBkZXNjcmlwdGlvbjogXCJWb2lkIEdhcmRlbiBhZGRzIGRlbnNlciBzcXVhZCBncm93dGggd2luZG93cywgc3BsaXQgd2VhcG9uIHN1cHBvcnQsIGFuZCBzbG93LWJsb29taW5nIHBhaXJlZCBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgdGllcjogMixcbn0pO1xuIiwgImltcG9ydCB7IGNvbXBvc2VUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gY29tcG9zZVRyYWNrKHtcbiAgbGFiZWw6IFwiTmlnaHQgT3JjaGFyZFwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgVm9pZCBHYXJkZW4gZmluYWxlIGxlYW5zIGludG8gc3F1YWQgcmVjb3ZlcnksIGxheWVyZWQgc3VwcG9ydCBwaWNrdXBzLCBhbmQgYnJvYWQgb3JnYW5pYyBwcmVzc3VyZS5cIixcbiAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgdGllcjogMyxcbn0pO1xuIiwgImltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrNFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2syIH0gZnJvbSBcIi4vVHJhY2s1XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazMgfSBmcm9tIFwiLi9UcmFjazZcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGNyeXN0YWxGb3JnZVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrN1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgY3J5c3RhbEZvcmdlVHJhY2syIH0gZnJvbSBcIi4vVHJhY2s4XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBjcnlzdGFsRm9yZ2VUcmFjazMgfSBmcm9tIFwiLi9UcmFjazlcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2sxXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazMgfSBmcm9tIFwiLi9UcmFjazNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHNvbGFyQXJyYXlUcmFjazEgfSBmcm9tIFwiLi9UcmFjazEzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBzb2xhckFycmF5VHJhY2syIH0gZnJvbSBcIi4vVHJhY2sxNFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgc29sYXJBcnJheVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrMTVcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHZvaWRHYXJkZW5UcmFjazEgfSBmcm9tIFwiLi9UcmFjazEwXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyB2b2lkR2FyZGVuVHJhY2syIH0gZnJvbSBcIi4vVHJhY2sxMVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgdm9pZEdhcmRlblRyYWNrMyB9IGZyb20gXCIuL1RyYWNrMTJcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSB7XG4gIFwibmVvbi1uZWJ1bGFlLTFcIjogbmVvbk5lYnVsYWVUcmFjazEsXG4gIFwibmVvbi1uZWJ1bGFlLTJcIjogbmVvbk5lYnVsYWVUcmFjazIsXG4gIFwibmVvbi1uZWJ1bGFlLTNcIjogbmVvbk5lYnVsYWVUcmFjazMsXG4gIFwiYXVyb3JhLTFcIjogYXVyb3JhVHJhY2sxLFxuICBcImF1cm9yYS0yXCI6IGF1cm9yYVRyYWNrMixcbiAgXCJhdXJvcmEtM1wiOiBhdXJvcmFUcmFjazMsXG4gIFwiY3J5c3RhbC1mb3JnZS0xXCI6IGNyeXN0YWxGb3JnZVRyYWNrMSxcbiAgXCJjcnlzdGFsLWZvcmdlLTJcIjogY3J5c3RhbEZvcmdlVHJhY2syLFxuICBcImNyeXN0YWwtZm9yZ2UtM1wiOiBjcnlzdGFsRm9yZ2VUcmFjazMsXG4gIFwidm9pZC1nYXJkZW4tMVwiOiB2b2lkR2FyZGVuVHJhY2sxLFxuICBcInZvaWQtZ2FyZGVuLTJcIjogdm9pZEdhcmRlblRyYWNrMixcbiAgXCJ2b2lkLWdhcmRlbi0zXCI6IHZvaWRHYXJkZW5UcmFjazMsXG4gIFwic29sYXItYXJyYXktMVwiOiBzb2xhckFycmF5VHJhY2sxLFxuICBcInNvbGFyLWFycmF5LTJcIjogc29sYXJBcnJheVRyYWNrMixcbiAgXCJzb2xhci1hcnJheS0zXCI6IHNvbGFyQXJyYXlUcmFjazMsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbGllcyA9IHtcbiAgbmVvbk5lYnVsYWU6IHtcbiAgICBsYWJlbDogXCJOZW9uIE5lYnVsYWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxlYXJuaW5nIGFyYyBhYm91dCBsYW5lcywgcGlja3Vwcywgc2hpZWxkcywgYW5kIGNvbnRyb2xsZWQgcHJlc3N1cmUuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJuZW9uSGFsbFwiIH0sXG4gICAgdHJhY2tJZHM6IFtcIm5lb24tbmVidWxhZS0xXCIsIFwibmVvbi1uZWJ1bGFlLTJcIiwgXCJuZW9uLW5lYnVsYWUtM1wiXSxcbiAgfSxcbiAgYXVyb3JhOiB7XG4gICAgbGFiZWw6IFwiQXVyb3JhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVuc2UgcGxhbmV0YXJ5IGFzc2F1bHRzIHdpdGggYnJpZ2h0ZXIgcmVjb3Zlcnkgd2luZG93cyBhbmQgc2hhcnBlciB0aHJlYXQgd2F2ZXMuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJhdXJvcmFcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJhdXJvcmEtMVwiLCBcImF1cm9yYS0yXCIsIFwiYXVyb3JhLTNcIl0sXG4gIH0sXG4gIGNyeXN0YWxGb3JnZToge1xuICAgIGxhYmVsOiBcIkNyeXN0YWwgRm9yZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmlzbWF0aWMgZmFjdG9yeSBsYW5lcyB3aXRoIHNoYXJwIHByZXNzdXJlLCBnbGFzcyBkZWNveXMsIGFuZCBoZWF2eSBjcnlzdGFsbGluZSBicmVha3MuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJjcnlzdGFsLWZvcmdlLTFcIiwgXCJjcnlzdGFsLWZvcmdlLTJcIiwgXCJjcnlzdGFsLWZvcmdlLTNcIl0sXG4gIH0sXG4gIHZvaWRHYXJkZW46IHtcbiAgICBsYWJlbDogXCJWb2lkIEdhcmRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpb2x1bWluZXNjZW50IG5pZ2h0IGxhbmVzIHdpdGggc3BhcnNlIGJsb29tcywgZGVjb3lzLCBhbmQgY29udHJvbGxlZCByZWNvdmVyeSBwb2NrZXRzLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiIH0sXG4gICAgdHJhY2tJZHM6IFtcInZvaWQtZ2FyZGVuLTFcIiwgXCJ2b2lkLWdhcmRlbi0yXCIsIFwidm9pZC1nYXJkZW4tM1wiXSxcbiAgfSxcbiAgc29sYXJBcnJheToge1xuICAgIGxhYmVsOiBcIlNvbGFyIEFycmF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnJpZ2h0IG9yYml0YWwgbGFuZXMgd2l0aCBtaXJyb3JlZCB3YWxscywgZmFzdCBvdXRlciBzdXJnZXMsIGFuZCBkZWNpc2l2ZSBoZWF2eSB0b29scy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJzb2xhci1hcnJheS0xXCIsIFwic29sYXItYXJyYXktMlwiLCBcInNvbGFyLWFycmF5LTNcIl0sXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbmV4cG9ydCB7XG4gIGF1cm9yYVRyYWNrMSxcbiAgYXVyb3JhVHJhY2syLFxuICBhdXJvcmFUcmFjazMsXG4gIGNyeXN0YWxGb3JnZVRyYWNrMSxcbiAgY3J5c3RhbEZvcmdlVHJhY2syLFxuICBjcnlzdGFsRm9yZ2VUcmFjazMsXG4gIG5lb25OZWJ1bGFlVHJhY2sxLFxuICBuZW9uTmVidWxhZVRyYWNrMixcbiAgbmVvbk5lYnVsYWVUcmFjazMsXG4gIHNvbGFyQXJyYXlUcmFjazEsXG4gIHNvbGFyQXJyYXlUcmFjazIsXG4gIHNvbGFyQXJyYXlUcmFjazMsXG4gIHZvaWRHYXJkZW5UcmFjazEsXG4gIHZvaWRHYXJkZW5UcmFjazIsXG4gIHZvaWRHYXJkZW5UcmFjazMsXG59O1xuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrRmFtaWx5TWVtYmVyLCBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcGFyc2VUcmFja0RlZmluaXRpb24gfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHRyYWNrRmFtaWxpZXMsIHRyYWNrcyB9IGZyb20gXCIuL3RyYWNrc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInRyYWNrXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJUcmFja1wiO1xuICByZWFkb25seSBtZW1iZXJzID0gdHJhY2tzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj47XG4gIHJlYWRvbmx5IGZhbWlsaWVzID0gdHJhY2tGYW1pbGllcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlNZW1iZXI8a2V5b2YgdHlwZW9mIHRyYWNrcz4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICAgIHRoaXMucmVxdWlyZShpc0xhbmVSdW5uZXJTY2VuZUlkKHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2lkLCBmYW1pbHldIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmFtaWxpZXMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoZmFtaWx5LnRyYWNrSWRzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIHRyYWNrLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQoZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgICBmb3IgKGNvbnN0IHRyYWNrSWQgb2YgZmFtaWx5LnRyYWNrSWRzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0cmFja0lkIGluIHRoaXMubWVtYmVycywgYCR7aWR9IHJlZmVyZW5jZXMgdW5rbm93biB0cmFjayBcIiR7dHJhY2tJZH1cIi5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRoaXMubWVtYmVyc1t0cmFja0lkXS5lbnZpcm9ubWVudC5zY2VuZUlkID09PSBmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCwgYCR7dHJhY2tJZH0gbXVzdCB1c2UgdGhlICR7aWR9IHNjZW5lLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG5leHBvcnQgdHlwZSBUcmFja0ZhbWlseUlkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5LmZhbWlsaWVzO1xuIiwgImltcG9ydCB7XG4gIGdldE5lb25TaGFwZSxcbiAgbmVvblBhbGV0dGUsXG4gIHR5cGUgTmVvblByaW1pdGl2ZSxcbiAgdHlwZSBOZW9uVG9wRG93blNoYXBlLFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgU2hpZWxkTWVtYmVyLCBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNsYXNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vY29tYmF0L3N3b3JkRXZhbHVhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5VmlzdWFsU2NlbmUge1xuICBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5jb25zdCBlbXB0eVNjZW5lID0gKCk6IEZhbWlseVZpc3VhbFNjZW5lID0+ICh7IHByaW1pdGl2ZXM6IFtdLCBzaGFwZXM6IFtdIH0pO1xuY29uc3QgcmVxdWlyZWRTaGFwZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGlkKTtcbiAgaWYgKCFzaGFwZSkgdGhyb3cgbmV3IEVycm9yKGBOZW9uRmFjdG9yeSBzaGFwZSBcIiR7aWR9XCIgaXMgcmVxdWlyZWQgYnkgZmFtaWx5IHZpc3VhbHMuYCk7XG4gIHJldHVybiBzaGFwZTtcbn07XG5jb25zdCBpc1NhZmVTY2VuZVBvaW50ID0gKHBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBib29sZWFuID0+XG4gIE51bWJlci5pc0Zpbml0ZShwb2ludC54KSAmJiBOdW1iZXIuaXNGaW5pdGUocG9pbnQueSkgJiYgTWF0aC5hYnMocG9pbnQueCkgPCA1MDAwICYmIE1hdGguYWJzKHBvaW50LnkpIDwgNTAwMDtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRWaXN1YWxPcHRpb25zIHtcbiAgZGVmaW5pdGlvbjogU2hpZWxkTWVtYmVyO1xuICBzdHJlbmd0aDogbnVtYmVyO1xuICBpbml0aWFsU3RyZW5ndGg6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG5vdzogbnVtYmVyO1xuICBzY2FsZT86IG51bWJlcjtcbiAgcHJvamVjdFNjcmVlbk9mZnNldD86ICh4OiBudW1iZXIsIHk6IG51bWJlciwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIpID0+IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgaGl0UHJvZ3Jlc3M/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpZWxkVmlzdWFscyhvcHRpb25zOiBTaGllbGRWaXN1YWxPcHRpb25zKTogRmFtaWx5VmlzdWFsU2NlbmUge1xuICBjb25zdCBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcbiAgY29uc3Qge1xuICAgIGRlZmluaXRpb24sIHgsIHksIG5vdyxcbiAgICBzY2FsZSA9IDEsXG4gICAgcHJvamVjdFNjcmVlbk9mZnNldCxcbiAgICBoaXRQcm9ncmVzcyA9IDEsXG4gICAgdmlzaWJsZSA9IHRydWUsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBzdHJlbmd0aCA9IE1hdGgubWF4KDAsIG9wdGlvbnMuc3RyZW5ndGgpO1xuICBjb25zdCBpbml0aWFsU3RyZW5ndGggPSBNYXRoLm1heCgxLCBvcHRpb25zLmluaXRpYWxTdHJlbmd0aCk7XG4gIGNvbnN0IGltcGFjdCA9IE1hdGgubWF4KDAsIDEgLSBoaXRQcm9ncmVzcyk7XG4gIGNvbnN0IGV4cGxvZGluZyA9IHN0cmVuZ3RoIDw9IDAgJiYgaGl0UHJvZ3Jlc3MgPCAxO1xuICBjb25zdCBjb2xvciA9IG5lb25QYWxldHRlW2RlZmluaXRpb24uY29sb3JdO1xuICBjb25zdCByYWRpdXMgPSBkZWZpbml0aW9uLnJhZGl1cyAqIHNjYWxlO1xuXG4gIGlmICh2aXNpYmxlIHx8IGV4cGxvZGluZykge1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiByZXF1aXJlZFNoYXBlKFwic2hpZWxkLXJpbmdcIiksXG4gICAgICB4LCB5LFxuICAgICAgc2l6ZTogcmFkaXVzLFxuICAgICAgY29sb3IsXG4gICAgICBsaW5lVGhpY2tuZXNzOiAuNzIsXG4gICAgICBnbG93OiAxICsgaW1wYWN0ICogLjgsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZW5lcmd5SW50ZW5zaXR5OiAxLjE1ICsgaW1wYWN0ICogMS41LFxuICAgICAgZW5lcmd5Q292ZXJhZ2U6IC40MiArIGltcGFjdCAqIC4zLFxuICAgICAgZW5lcmd5U3BlZWQ6IDEuMTUgKyBpbXBhY3QgKiAxLjIsXG4gICAgICBlbmVyZ3lCbGVlZDogLjUgKyBpbXBhY3QgKiAuMzUsXG4gICAgICBleHBsb2RlUHJvZ3Jlc3M6IGV4cGxvZGluZyA/IE1hdGgubWluKDEsIGhpdFByb2dyZXNzKSA6IDAsXG4gICAgICBleHBsb2RlTWFnbml0dWRlOiAuOSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghdmlzaWJsZSkgcmV0dXJuIHNjZW5lO1xuICBjb25zdCBvcmJpdGVyU2hhcGUgPSByZXF1aXJlZFNoYXBlKGRlZmluaXRpb24ub3JiaXRlclNoYXBlID09PSBcImhleFwiID8gXCJoZXgtZmlnaHRlclwiIDogXCJzdGFyLWNvcmVcIik7XG4gIGNvbnN0IG9yYml0ZXJDb3VudCA9IE1hdGguY2VpbChkZWZpbml0aW9uLm9yYml0ZXJDb3VudCAqIHN0cmVuZ3RoIC8gaW5pdGlhbFN0cmVuZ3RoKTtcbiAgY29uc3QgYW5nbGVTdGVwID0gTWF0aC5QSSAqIDIgLyBkZWZpbml0aW9uLm9yYml0ZXJDb3VudDtcbiAgY29uc3QgYmFzZUFuZ2xlID0gbm93IC8gMTAwMCAqIGRlZmluaXRpb24ub3JiaXRlclNwZWVkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yYml0ZXJDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSBiYXNlQW5nbGUgKyBpICogYW5nbGVTdGVwO1xuICAgIGNvbnN0IGZhbGxiYWNrT3JiaXRlciA9IHsgeDogeCArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgeTogeSArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cyB9O1xuICAgIGNvbnN0IHByb2plY3RlZE9yYml0ZXIgPSBwcm9qZWN0U2NyZWVuT2Zmc2V0Py4oeCwgeSwgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMpO1xuICAgIGNvbnN0IG9yYml0ZXIgPSBwcm9qZWN0ZWRPcmJpdGVyICYmIGlzU2FmZVNjZW5lUG9pbnQocHJvamVjdGVkT3JiaXRlcikgPyBwcm9qZWN0ZWRPcmJpdGVyIDogZmFsbGJhY2tPcmJpdGVyO1xuICAgIHNjZW5lLnNoYXBlcy5wdXNoKHtcbiAgICAgIHNoYXBlOiBvcmJpdGVyU2hhcGUsXG4gICAgICB4OiBvcmJpdGVyLngsXG4gICAgICB5OiBvcmJpdGVyLnksXG4gICAgICBzaXplOiBkZWZpbml0aW9uLm9yYml0ZXJTaXplICogMS44ICogc2NhbGUsXG4gICAgICBjb2xvcixcbiAgICAgIHJvdGF0aW9uWjogYW5nbGUgKyBub3cgLyAxNDAwLFxuICAgICAgbGluZVRoaWNrbmVzczogLjcyLFxuICAgICAgZ2xvdzogMSxcbiAgICAgIGVuZXJneUludGVuc2l0eTogMS4xLFxuICAgICAgZW5lcmd5Q292ZXJhZ2U6IC40LFxuICAgICAgZW5lcmd5U3BlZWQ6IDEuMjUsXG4gICAgICBlbmVyZ3lCbGVlZDogLjUsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkVmlzdWFsT3B0aW9ucyB7XG4gIGRlZmluaXRpb246IFN3b3JkTWVtYmVyO1xuICBzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24gfCBudWxsO1xuICBzbGFzaGVzPzogcmVhZG9ubHkgKEFjdGl2ZVNsYXNoQW5pbWF0aW9uIHwgbnVsbClbXTtcbiAgZG9ja1NpZGU6IC0xIHwgMTtcbiAgZG9ja1NpZGVzPzogcmVhZG9ubHkgKC0xIHwgMSlbXTtcbiAgcG9pbnRzOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbiAgdHVuaW5nPzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz47XG4gIHNjYWxlPzogbnVtYmVyO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTd29yZFZpc3VhbFR1bmluZyB7XG4gIGRvY2tTaWRlT2Zmc2V0OiBudW1iZXI7XG4gIGRvY2tGb3J3YXJkOiBudW1iZXI7XG4gIHN0cmlrZUR1cmF0aW9uOiBudW1iZXI7XG4gIGZvbGxvd1Rocm91Z2hEdXJhdGlvbjogbnVtYmVyO1xuICBzd2luZ0FuZ2xlOiBudW1iZXI7XG4gIGFyY0xpZnQ6IG51bWJlcjtcbiAgYXJjUmFkaXVzOiBudW1iZXI7XG4gIHRyYWlsU2VnbWVudHM6IG51bWJlcjtcbiAgdHJhaWxXaWR0aDogbnVtYmVyO1xuICB0cmFpbEludGVuc2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN3b3JkVmlzdWFsVHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyA9IHtcbiAgZG9ja1NpZGVPZmZzZXQ6IDEzLFxuICBkb2NrRm9yd2FyZDogMyxcbiAgc3RyaWtlRHVyYXRpb246IC4zMSxcbiAgZm9sbG93VGhyb3VnaER1cmF0aW9uOiAuMTgsXG4gIHN3aW5nQW5nbGU6IDIuOCxcbiAgYXJjTGlmdDogMTQsXG4gIGFyY1JhZGl1czogNDIsXG4gIHRyYWlsU2VnbWVudHM6IDE0LFxuICB0cmFpbFdpZHRoOiAyLjYsXG4gIHRyYWlsSW50ZW5zaXR5OiAuNzUsXG59O1xuXG5leHBvcnQgY29uc3QgY29tcGxldGVTd29yZFZpc3VhbFR1bmluZyA9ICh0dW5pbmc/OiBQYXJ0aWFsPFN3b3JkVmlzdWFsVHVuaW5nPik6IFN3b3JkVmlzdWFsVHVuaW5nID0+ICh7XG4gIC4uLmRlZmF1bHRTd29yZFZpc3VhbFR1bmluZyxcbiAgLi4udHVuaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzd29yZFZpc3VhbER1cmF0aW9uTXMgPSAodHVuaW5nPzogUGFydGlhbDxTd29yZFZpc3VhbFR1bmluZz4pOiBudW1iZXIgPT4ge1xuICBjb25zdCByZXNvbHZlZCA9IGNvbXBsZXRlU3dvcmRWaXN1YWxUdW5pbmcodHVuaW5nKTtcbiAgcmV0dXJuIE1hdGgubWF4KDEyMCwgKHJlc29sdmVkLnN0cmlrZUR1cmF0aW9uICsgcmVzb2x2ZWQuZm9sbG93VGhyb3VnaER1cmF0aW9uKSAqIDEwMDApO1xufTtcblxuZnVuY3Rpb24gcXVhZHJhdGljUG9pbnQoZnJvbTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb250cm9sOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHRvOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHQ6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGNvbnN0IGludiA9IDEgLSB0O1xuICByZXR1cm4ge1xuICAgIHg6IGludiAqIGludiAqIGZyb20ueCArIDIgKiBpbnYgKiB0ICogY29udHJvbC54ICsgdCAqIHQgKiB0by54LFxuICAgIHk6IGludiAqIGludiAqIGZyb20ueSArIDIgKiBpbnYgKiB0ICogY29udHJvbC55ICsgdCAqIHQgKiB0by55LFxuICB9O1xufVxuXG5mdW5jdGlvbiBjdWJpY1BvaW50KFxuICBmcm9tOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIGNvbnRyb2xBOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIGNvbnRyb2xCOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHRvOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHQ6IG51bWJlcixcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gIGNvbnN0IGludiA9IDEgLSB0O1xuICByZXR1cm4ge1xuICAgIHg6IGludiAqKiAzICogZnJvbS54ICsgMyAqIGludiAqIGludiAqIHQgKiBjb250cm9sQS54ICsgMyAqIGludiAqIHQgKiB0ICogY29udHJvbEIueCArIHQgKiogMyAqIHRvLngsXG4gICAgeTogaW52ICoqIDMgKiBmcm9tLnkgKyAzICogaW52ICogaW52ICogdCAqIGNvbnRyb2xBLnkgKyAzICogaW52ICogdCAqIHQgKiBjb250cm9sQi55ICsgdCAqKiAzICogdG8ueSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3dvcmRQYXRoKFxuICBiYXNlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHRhcmdldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBkZXN0aW5hdGlvblNpZGU6IC0xIHwgMSxcbiAgc2NhbGU6IG51bWJlcixcbiAgdHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyxcbiAgY3Jvc3NMYW5lOiBib29sZWFuLFxuICB0YXJnZXRTcGFuOiBudW1iZXIsXG4pIHtcbiAgY29uc3Qgc3RhcnRTaWRlOiAtMSB8IDEgPSBkZXN0aW5hdGlvblNpZGUgPT09IDEgPyAtMSA6IDE7XG4gIGNvbnN0IHN3ZWVwV2lkdGggPSBjcm9zc0xhbmUgPyB0YXJnZXRTcGFuICogLjM0IDogMDtcbiAgY29uc3Qgc3RhcnQgPSB7IHg6IGJhc2UueCArIHN0YXJ0U2lkZSAqICh0dW5pbmcuZG9ja1NpZGVPZmZzZXQgKiBzY2FsZSArIHN3ZWVwV2lkdGgpLCB5OiBiYXNlLnkgLSB0dW5pbmcuZG9ja0ZvcndhcmQgKiBzY2FsZSB9O1xuICBjb25zdCBmaW5pc2ggPSB7IHg6IGJhc2UueCArIGRlc3RpbmF0aW9uU2lkZSAqICh0dW5pbmcuZG9ja1NpZGVPZmZzZXQgKiBzY2FsZSArIHN3ZWVwV2lkdGgpLCB5OiBiYXNlLnkgLSB0dW5pbmcuZG9ja0ZvcndhcmQgKiBzY2FsZSB9O1xuICBjb25zdCB0YXJnZXRJbmZsdWVuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0dW5pbmcuYXJjUmFkaXVzIC8gMTAwKSk7XG4gIGNvbnN0IGFwZXggPSB7XG4gICAgeDogKChzdGFydC54ICsgZmluaXNoLngpIC8gMiAqICgxIC0gdGFyZ2V0SW5mbHVlbmNlKSArIHRhcmdldC54ICogdGFyZ2V0SW5mbHVlbmNlKSArIGRlc3RpbmF0aW9uU2lkZSAqIChjcm9zc0xhbmUgPyAxMiAqIHNjYWxlIDogMCksXG4gICAgeTogTWF0aC5taW4oc3RhcnQueSwgZmluaXNoLnksIHRhcmdldC55KSAtIHR1bmluZy5hcmNMaWZ0ICogc2NhbGUsXG4gIH07XG4gIGNvbnN0IGNvbnRyb2xBID0ge1xuICAgIHg6IHN0YXJ0LnggKyBzdGFydFNpZGUgKiB0dW5pbmcuc3dpbmdBbmdsZSAqIChjcm9zc0xhbmUgPyAxOCA6IDEzKSAqIHNjYWxlLFxuICAgIHk6IHN0YXJ0LnkgKyAxMCAqIHNjYWxlLFxuICB9O1xuICBjb25zdCBjb250cm9sQiA9IHtcbiAgICB4OiBhcGV4LnggLSBkZXN0aW5hdGlvblNpZGUgKiB0dW5pbmcuc3dpbmdBbmdsZSAqIChjcm9zc0xhbmUgPyAzMCA6IDIyKSAqIHNjYWxlLFxuICAgIHk6IGFwZXgueSxcbiAgfTtcbiAgcmV0dXJuIHsgc3RhcnQsIGZpbmlzaCwgY29udHJvbEEsIGNvbnRyb2xCIH07XG59XG5cbmZ1bmN0aW9uIHRhcmdldFNwYW4odGFyZ2V0czogcmVhZG9ubHkgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10pOiBudW1iZXIge1xuICBpZiAodGFyZ2V0cy5sZW5ndGggPCAyKSByZXR1cm4gMDtcbiAgY29uc3QgeHMgPSB0YXJnZXRzLm1hcCh0YXJnZXQgPT4gdGFyZ2V0LngpO1xuICByZXR1cm4gTWF0aC5tYXgoLi4ueHMpIC0gTWF0aC5taW4oLi4ueHMpO1xufVxuXG5mdW5jdGlvbiBzd2VlcFRhcmdldEZvcih0YXJnZXRzOiByZWFkb25seSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgc2lkZTogLTEgfCAxLCBmYWxsYmFjazogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsbGJhY2s7XG4gIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHRhcmdldHNbMF07XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi50YXJnZXRzXS5zb3J0KChhLCBiKSA9PiBzaWRlID09PSAxID8gYS54IC0gYi54IDogYi54IC0gYS54KTtcbiAgY29uc3QgZmlyc3QgPSBzb3J0ZWRbMF07XG4gIGNvbnN0IGxhc3QgPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdO1xuICBjb25zdCBzcGFuID0gTWF0aC5hYnMobGFzdC54IC0gZmlyc3QueCk7XG4gIHJldHVybiB7XG4gICAgeDogbGFzdC54ICsgc2lkZSAqIE1hdGgubWluKDM0LCBNYXRoLm1heCgxNCwgc3BhbiAqIC4xKSksXG4gICAgeTogTWF0aC5taW4oLi4uc29ydGVkLm1hcCh0YXJnZXQgPT4gdGFyZ2V0LnkpLCAoZmlyc3QueSArIGxhc3QueSkgLyAyKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2xhc2hQb3NlKFxuICBiYXNlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gIHRhcmdldDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICBkZXN0aW5hdGlvblNpZGU6IC0xIHwgMSxcbiAgcHJvZ3Jlc3M6IG51bWJlcixcbiAgc2NhbGU6IG51bWJlcixcbiAgdHVuaW5nOiBTd29yZFZpc3VhbFR1bmluZyxcbiAgY3Jvc3NMYW5lOiBib29sZWFuLFxuICBzcGFuOiBudW1iZXIsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyByb3RhdGlvbjogbnVtYmVyOyB0cmFpbFByb2dyZXNzOiBudW1iZXIgfSB7XG4gIGNvbnN0IHRvdGFsRHVyYXRpb24gPSBNYXRoLm1heCguMDEsIHR1bmluZy5zdHJpa2VEdXJhdGlvbiArIHR1bmluZy5mb2xsb3dUaHJvdWdoRHVyYXRpb24pO1xuICBjb25zdCBzdHJpa2UgPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uO1xuICBjb25zdCBwYXRoID0gc3dvcmRQYXRoKGJhc2UsIHRhcmdldCwgZGVzdGluYXRpb25TaWRlLCBzY2FsZSwgdHVuaW5nLCBjcm9zc0xhbmUsIHNwYW4pO1xuICBjb25zdCB0YW5nZW50U2FtcGxlID0gKHBhdGhUOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBhID0gY3ViaWNQb2ludChwYXRoLnN0YXJ0LCBwYXRoLmNvbnRyb2xBLCBwYXRoLmNvbnRyb2xCLCBwYXRoLmZpbmlzaCwgTWF0aC5tYXgoMCwgcGF0aFQgLSAuMDE1KSk7XG4gICAgY29uc3QgYiA9IGN1YmljUG9pbnQocGF0aC5zdGFydCwgcGF0aC5jb250cm9sQSwgcGF0aC5jb250cm9sQiwgcGF0aC5maW5pc2gsIE1hdGgubWluKDEsIHBhdGhUICsgLjAxNSkpO1xuICAgIHJldHVybiBNYXRoLmF0YW4yKGIueSAtIGEueSwgYi54IC0gYS54KSAtIE1hdGguUEkgLyAyO1xuICB9O1xuXG4gIGlmIChwcm9ncmVzcyA8IHN0cmlrZSkge1xuICAgIGNvbnN0IHQgPSBwcm9ncmVzcyAvIHN0cmlrZTtcbiAgICBjb25zdCBlYXNlID0gdCAqIHQgKiAoMyAtIDIgKiB0KTtcbiAgICBjb25zdCBwb2ludCA9IGN1YmljUG9pbnQocGF0aC5zdGFydCwgcGF0aC5jb250cm9sQSwgcGF0aC5jb250cm9sQiwgcGF0aC5maW5pc2gsIGVhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHJvdGF0aW9uOiB0YW5nZW50U2FtcGxlKGVhc2UpLFxuICAgICAgdHJhaWxQcm9ncmVzczogZWFzZSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgdCA9IChwcm9ncmVzcyAtIHN0cmlrZSkgLyBNYXRoLm1heCguMDAxLCAxIC0gc3RyaWtlKTtcbiAgY29uc3QgZWFzZSA9IHQgKiB0ICogKDMgLSAyICogdCk7XG4gIGNvbnN0IG92ZXJzaG9vdCA9IHtcbiAgICB4OiBwYXRoLmZpbmlzaC54ICsgZGVzdGluYXRpb25TaWRlICogNyAqIHNjYWxlLFxuICAgIHk6IHBhdGguZmluaXNoLnkgLSA0ICogc2NhbGUsXG4gIH07XG4gIGNvbnN0IHBvaW50ID0gcXVhZHJhdGljUG9pbnQocGF0aC5maW5pc2gsIG92ZXJzaG9vdCwgcGF0aC5maW5pc2gsIGVhc2UpO1xuICByZXR1cm4ge1xuICAgIHg6IHBvaW50LngsXG4gICAgeTogcG9pbnQueSxcbiAgICByb3RhdGlvbjogdGFuZ2VudFNhbXBsZSgxKSAtIGRlc3RpbmF0aW9uU2lkZSAqICgxIC0gZWFzZSkgKiAuMzUsXG4gICAgdHJhaWxQcm9ncmVzczogMSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3dvcmRUcmFpbChzbGFzaDogQWN0aXZlU2xhc2hBbmltYXRpb24sIHNjYWxlOiBudW1iZXIsIG9yaWdpbnM6IHJlYWRvbmx5IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdLCB0dW5pbmc6IFN3b3JkVmlzdWFsVHVuaW5nKTogTmVvblByaW1pdGl2ZVtdIHtcbiAgaWYgKHNsYXNoLnByb2dyZXNzID49IDEpIHJldHVybiBbXTtcbiAgY29uc3QgbGlmZSA9IDEgLSBzbGFzaC5wcm9ncmVzcztcbiAgY29uc3QgdGhpY2tuZXNzID0gc2xhc2gudGhpY2tuZXNzICogc2NhbGU7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCB0YXJnZXRzID0gc2xhc2gudGFyZ2V0UG9pbnRzLmxlbmd0aCA+IDAgPyBzbGFzaC50YXJnZXRQb2ludHMgOiBbeyB4OiBzbGFzaC54LCB5OiBzbGFzaC55IC0gc2xhc2gucmVhY2ggfV07XG4gIGNvbnN0IHNwYW4gPSB0YXJnZXRTcGFuKHRhcmdldHMpO1xuICBjb25zdCBjcm9zc0xhbmUgPSBzcGFuID4gODAgKiBzY2FsZTtcbiAgY29uc3Qgc3dlZXBUYXJnZXQgPSBzd2VlcFRhcmdldEZvcih0YXJnZXRzLCBzbGFzaC5zaWRlLCB0YXJnZXRzWzBdKTtcbiAgZm9yIChjb25zdCBbaW5kZXgsIG9yaWdpbl0gb2Ygb3JpZ2lucy5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRzLmxlbmd0aCA+IDEgPyBzd2VlcFRhcmdldCA6IHRhcmdldHNbaW5kZXggJSB0YXJnZXRzLmxlbmd0aF07XG4gICAgY29uc3Qgc2VnbWVudHMgPSB0dW5pbmcudHJhaWxTZWdtZW50cztcbiAgICBjb25zdCBwb3NlID0gc2xhc2hQb3NlKG9yaWdpbiwgdGFyZ2V0LCBzbGFzaC5zaWRlLCBzbGFzaC5wcm9ncmVzcywgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKTtcbiAgICBjb25zdCB0cmF2ZWwgPSBwb3NlLnRyYWlsUHJvZ3Jlc3M7XG4gICAgaWYgKHRyYXZlbCA8PSAwKSBjb250aW51ZTtcbiAgICBjb25zdCB2aXNpYmxlU2VnbWVudHMgPSBNYXRoLm1heCgzLCBNYXRoLmNlaWwoc2VnbWVudHMgKiB0cmF2ZWwpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc2libGVTZWdtZW50czsgaSsrKSB7XG4gICAgICBjb25zdCB0MCA9IE1hdGgubWF4KDAsIHRyYXZlbCAtICh2aXNpYmxlU2VnbWVudHMgLSBpKSAvIHNlZ21lbnRzKTtcbiAgICAgIGNvbnN0IHQxID0gTWF0aC5taW4oMSwgdDAgKyAuMTYpO1xuICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IHR1bmluZy5zdHJpa2VEdXJhdGlvbiArIHR1bmluZy5mb2xsb3dUaHJvdWdoRHVyYXRpb247XG4gICAgICBjb25zdCBzdHJpa2UgPSB0dW5pbmcuc3RyaWtlRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uO1xuICAgICAgY29uc3QgYSA9IHNsYXNoUG9zZShvcmlnaW4sIHRhcmdldCwgc2xhc2guc2lkZSwgdDAgKiBzdHJpa2UsIHNjYWxlLCB0dW5pbmcsIGNyb3NzTGFuZSwgc3Bhbik7XG4gICAgICBjb25zdCBiID0gc2xhc2hQb3NlKG9yaWdpbiwgdGFyZ2V0LCBzbGFzaC5zaWRlLCB0MSAqIHN0cmlrZSwgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKTtcbiAgICAgIGNvbnN0IGR4ID0gYi54IC0gYS54O1xuICAgICAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gICAgICBjb25zdCBhZ2UgPSBpIC8gdmlzaWJsZVNlZ21lbnRzO1xuICAgICAgY29uc3QgZmFkZSA9IE1hdGgubWF4KC4xOCwgTWF0aC5wb3coMSAtIGFnZSwgLjg1KSkgKiBNYXRoLm1pbigxLCBsaWZlICsgLjM1KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICAgICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgICAgICB3aWR0aDogTWF0aC5tYXgoMS42LCB0aGlja25lc3MgKiAodHVuaW5nLnRyYWlsV2lkdGggLSBhZ2UgKiB0dW5pbmcudHJhaWxXaWR0aCAqIC40OCkpLFxuICAgICAgICBoZWlnaHQ6IE1hdGguaHlwb3QoZHgsIGR5KSAvIDIsXG4gICAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBnbG93OiAxLjggKiBmYWRlLFxuICAgICAgICBpbnRlbnNpdHk6IHR1bmluZy50cmFpbEludGVuc2l0eSAqIGZhZGUsXG4gICAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gICAgICB9KTtcbiAgICAgIHByaW1pdGl2ZXMucHVzaCh7XG4gICAgICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICAgICAgeTogKGEueSArIGIueSkgLyAyLFxuICAgICAgICB3aWR0aDogTWF0aC5tYXgoMi4yLCB0aGlja25lc3MgKiAodHVuaW5nLnRyYWlsV2lkdGggKiAxLjM1IC0gYWdlICogdHVuaW5nLnRyYWlsV2lkdGggKiAuNTUpKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmh5cG90KGR4LCBkeSkgKiAuNzIsXG4gICAgICAgIGNvbG9yOiBzbGFzaC5jb2xvcixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBnbG93OiAxLjYgKiBmYWRlLFxuICAgICAgICBpbnRlbnNpdHk6IHR1bmluZy50cmFpbEludGVuc2l0eSAqIGZhZGUsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgICAgcm90YXRpb246IE1hdGguYXRhbjIoLWR4LCBkeSksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByaW1pdGl2ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd29yZFZpc3VhbHMob3B0aW9uczogU3dvcmRWaXN1YWxPcHRpb25zKTogRmFtaWx5VmlzdWFsU2NlbmUge1xuICBjb25zdCBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcbiAgaWYgKCFvcHRpb25zLnZpc2libGUpIHJldHVybiBzY2VuZTtcbiAgY29uc3QgeyBkZWZpbml0aW9uLCBzbGFzaCwgcG9pbnRzLCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHR1bmluZyA9IGNvbXBsZXRlU3dvcmRWaXN1YWxUdW5pbmcob3B0aW9ucy50dW5pbmcpO1xuICBjb25zdCBzbGFzaGVzID0gb3B0aW9ucy5zbGFzaGVzID8/IFtzbGFzaF07XG4gIGZvciAoY29uc3QgW2luZGV4LCBwb2ludF0gb2YgcG9pbnRzLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHNsb3RTbGFzaCA9IHNsYXNoZXNbaW5kZXhdID8/IG51bGw7XG4gICAgY29uc3QgZG9ja1NpZGUgPSBzbG90U2xhc2g/LnNpZGUgPz8gb3B0aW9ucy5kb2NrU2lkZXM/LltpbmRleF0gPz8gb3B0aW9ucy5kb2NrU2lkZTtcbiAgICBjb25zdCB0YXJnZXRzID0gc2xvdFNsYXNoPy50YXJnZXRQb2ludHMgPz8gW107XG4gICAgY29uc3Qgc3BhbiA9IHRhcmdldFNwYW4odGFyZ2V0cyk7XG4gICAgY29uc3QgY3Jvc3NMYW5lID0gc3BhbiA+IDgwICogc2NhbGU7XG4gICAgY29uc3Qgc3dlZXBUYXJnZXQgPSBzbG90U2xhc2ggPyBzd2VlcFRhcmdldEZvcih0YXJnZXRzLCBkb2NrU2lkZSwgeyB4OiBwb2ludC54LCB5OiBwb2ludC55IC0gMzAgKiBzY2FsZSB9KSA6IG51bGw7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0cy5sZW5ndGggPiAxID8gc3dlZXBUYXJnZXQgOiB0YXJnZXRzW2luZGV4ICUgTWF0aC5tYXgoMSwgdGFyZ2V0cy5sZW5ndGgpXTtcbiAgICBjb25zdCByZXN0ID0geyB4OiBwb2ludC54ICsgZG9ja1NpZGUgKiB0dW5pbmcuZG9ja1NpZGVPZmZzZXQgKiBzY2FsZSwgeTogcG9pbnQueSAtIHR1bmluZy5kb2NrRm9yd2FyZCAqIHNjYWxlIH07XG4gICAgY29uc3QgY3VycmVudCA9IHNsb3RTbGFzaCAmJiB0YXJnZXQgPyBzbGFzaFBvc2UocG9pbnQsIHRhcmdldCwgZG9ja1NpZGUsIHNsb3RTbGFzaC5wcm9ncmVzcywgc2NhbGUsIHR1bmluZywgY3Jvc3NMYW5lLCBzcGFuKSA6IHtcbiAgICAgIHg6IHJlc3QueCxcbiAgICAgIHk6IHJlc3QueSxcbiAgICAgIHJvdGF0aW9uOiAtZG9ja1NpZGUgKiAuOTUsXG4gICAgICB0cmFpbFByb2dyZXNzOiAwLFxuICAgIH07XG4gICAgc2NlbmUuc2hhcGVzLnB1c2goe1xuICAgICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoXCJzd29yZC1uZWVkbGUtc2FicmVcIiksXG4gICAgICB4OiBjdXJyZW50LngsXG4gICAgICB5OiBjdXJyZW50LnksXG4gICAgICB6OiAuMDIgKyBpbmRleCAqIC4wMDEsXG4gICAgICBzaXplOiBNYXRoLm1pbigyMywgZGVmaW5pdGlvbi5yYW5nZSAqIC4zNCkgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmNvbG9yXSxcbiAgICAgIHJvdGF0aW9uWDogNzUgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgcm90YXRpb25ZOiAxMyAqIE1hdGguUEkgLyAxODAsXG4gICAgICByb3RhdGlvblo6IDE1ICogTWF0aC5QSSAvIDE4MCArIGN1cnJlbnQucm90YXRpb24sXG4gICAgICBsaW5lVGhpY2tuZXNzOiAuOTIsXG4gICAgICBnbG93OiBzbG90U2xhc2ggPyAxLjY1IDogMS4wOCxcbiAgICAgIGVuZXJneUludGVuc2l0eTogc2xvdFNsYXNoID8gMi4yNSA6IDEuMixcbiAgICAgIGVuZXJneUNvdmVyYWdlOiBzbG90U2xhc2ggPyAuNzIgOiAuNDIsXG4gICAgICBlbmVyZ3lTcGVlZDogc2xvdFNsYXNoID8gMi4xIDogMS4yLFxuICAgICAgZW5lcmd5QmxlZWQ6IHNsb3RTbGFzaCA/IC44IDogLjUsXG4gICAgfSk7XG4gIH1cbiAgZm9yIChjb25zdCBbaW5kZXgsIHNsb3RTbGFzaF0gb2Ygc2xhc2hlcy5lbnRyaWVzKCkpIHtcbiAgICBpZiAoIXNsb3RTbGFzaCkgY29udGludWU7XG4gICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaW5kZXhdO1xuICAgIGlmIChwb2ludCkgc2NlbmUucHJpbWl0aXZlcy5wdXNoKC4uLnN3b3JkVHJhaWwoc2xvdFNsYXNoLCBzY2FsZSwgW3BvaW50XSwgdHVuaW5nKSk7XG4gIH1cbiAgcmV0dXJuIHNjZW5lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgbm93OiBudW1iZXI7XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBTaGFwZShzaGFwZUlkOiBzdHJpbmcsIG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlIHtcbiAgY29uc3QgeyB4LCB5LCBjb2xvciwgbm93LCBzY2FsZSA9IDEgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgc2hhcGU6IHJlcXVpcmVkU2hhcGUoc2hhcGVJZCksXG4gICAgeDogeCArIE1hdGguc2luKG5vdyAvIDQyMCArIHkgKiAuMDcpICogNC41ICogc2NhbGUsXG4gICAgeSxcbiAgICBzaXplOiAxMCAqIHNjYWxlICogKDEgKyBNYXRoLnNpbihub3cgLyA2MDAgKyB5ICogLjA1KSAqIC4wOCksXG4gICAgY29sb3IsXG4gICAgcm90YXRpb25aOiBub3cgLyAxMTAwLFxuICAgIGxpbmVUaGlja25lc3M6IC43NixcbiAgICBnbG93OiAxLjA1LFxuICAgIGVuZXJneUludGVuc2l0eTogMS4yNSxcbiAgICBlbmVyZ3lDb3ZlcmFnZTogLjQ4LFxuICAgIGVuZXJneVNwZWVkOiAxLjM1LFxuICAgIGVuZXJneUJsZWVkOiAuNTUsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRQaWNrdXBWaXN1YWwgPSAob3B0aW9uczogRmFtaWx5UGlja3VwVmlzdWFsT3B0aW9ucyk6IE5lb25Ub3BEb3duU2hhcGUgPT5cbiAgcGlja3VwU2hhcGUoXCJzaGllbGQtcmluZ1wiLCBvcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IHN3b3JkUGlja3VwVmlzdWFsID0gKG9wdGlvbnM6IEZhbWlseVBpY2t1cFZpc3VhbE9wdGlvbnMpOiBOZW9uVG9wRG93blNoYXBlID0+XG4gIHBpY2t1cFNoYXBlKFwic3dvcmQtbmVlZGxlLXNhYnJlXCIsIG9wdGlvbnMpO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvblNoYXBlSW5zdGFuY2UgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBIZWxpY29wdGVyVmlld3BvcnQgfSBmcm9tIFwiLi92aWV3cG9ydFwiO1xuXG5jb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbmNvbnN0IHBsYXllckZvcndhcmRSb3RhdGlvbiA9IHtcbiAgcm90YXRpb25YOiBkZWdyZWVzVG9SYWRpYW5zKC01MiksXG4gIHJvdGF0aW9uWTogZGVncmVlc1RvUmFkaWFucygtMSksXG4gIHJvdGF0aW9uWjogZGVncmVlc1RvUmFkaWFucygxKSxcbn07XG5jb25zdCBzY3JlZW5Gb3J3YXJkWWF3ID0gKGRpcmVjdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogbnVtYmVyID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdChkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnkpIHx8IDE7XG4gIHJldHVybiBNYXRoLmF0YW4yKGRpcmVjdGlvbi54IC8gbGVuZ3RoLCAtZGlyZWN0aW9uLnkgLyBsZW5ndGgpO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0b3JWaXN1YWxSb2xlID1cbiAgfCBcImdyb3VuZEZvcndhcmRcIlxuICB8IFwic2NyZWVuQmlsbGJvYXJkXCJcbiAgfCBcInR1bWJsaW5nQmlsbGJvYXJkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JPcmllbnRhdGlvbkNvbnRleHQge1xuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncztcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG5vdzogbnVtYmVyO1xuICBwaGFzZT86IG51bWJlcjtcbiAgZmFjaW5nPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0b3JPcmllbnRhdGlvbihyb2xlOiBBY3RvclZpc3VhbFJvbGUsIGNvbnRleHQ6IEFjdG9yT3JpZW50YXRpb25Db250ZXh0KTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICBzd2l0Y2ggKHJvbGUpIHtcbiAgICBjYXNlIFwiZ3JvdW5kRm9yd2FyZFwiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wbGF5ZXJGb3J3YXJkUm90YXRpb24sXG4gICAgICAgIHJvdGF0aW9uWDogcGxheWVyRm9yd2FyZFJvdGF0aW9uLnJvdGF0aW9uWCArIE1hdGguc2luKGNvbnRleHQubm93IC8gNjUwICsgKGNvbnRleHQucGhhc2UgPz8gMCkpICogLjA2LFxuICAgICAgICByb3RhdGlvblk6IHBsYXllckZvcndhcmRSb3RhdGlvbi5yb3RhdGlvblkgKyAoY29udGV4dC5mYWNpbmcgPyBzY3JlZW5Gb3J3YXJkWWF3KGNvbnRleHQuZmFjaW5nKSA6IDApLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBcInR1bWJsaW5nQmlsbGJvYXJkXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3RhdGlvblk6IE1hdGguc2luKGNvbnRleHQubm93IC8gNzAwICsgKGNvbnRleHQucGhhc2UgPz8gMCkpICogLjE4LFxuICAgICAgfTtcbiAgICBjYXNlIFwic2NyZWVuQmlsbGJvYXJkXCI6XG4gICAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlbGljb3B0ZXJWaWV3cG9ydEZvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGxheWVyWTogbnVtYmVyLCBmb2N1c1g/OiBudW1iZXIpOiBIZWxpY29wdGVyVmlld3BvcnQge1xuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBwbGF5ZXJZLCBmb2N1c1ggfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck9yaWVudGF0aW9uKFxuICBjYW1lcmE6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBwaGFzZSA9IDAsXG4pOiBQYXJ0aWFsPE5lb25TaGFwZUluc3RhbmNlPiB7XG4gIHJldHVybiBhY3Rvck9yaWVudGF0aW9uKFwiZ3JvdW5kRm9yd2FyZFwiLCB7XG4gICAgY2FtZXJhLFxuICAgIHZpZXdwb3J0LFxuICAgIHgsXG4gICAgeSxcbiAgICBub3csXG4gICAgcGhhc2UsXG4gICAgZmFjaW5nOiB7IHg6IDAsIHk6IC0xIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgcGhhc2UgPSAwLFxuKTogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4ge1xuICByZXR1cm4gYWN0b3JPcmllbnRhdGlvbihcInR1bWJsaW5nQmlsbGJvYXJkXCIsIHtcbiAgICBjYW1lcmEsXG4gICAgdmlld3BvcnQsXG4gICAgeCxcbiAgICB5LFxuICAgIG5vdyxcbiAgICBwaGFzZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWxsYm9hcmRPcmllbnRhdGlvbihcbiAgY2FtZXJhOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbik6IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+IHtcbiAgcmV0dXJuIGFjdG9yT3JpZW50YXRpb24oXCJzY3JlZW5CaWxsYm9hcmRcIiwge1xuICAgIGNhbWVyYSxcbiAgICB2aWV3cG9ydCxcbiAgICB4LFxuICAgIHksXG4gICAgbm93LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBnZXROZW9uU2hhcGUsIE5lb25TaGFwZUFjdG9yLCB0eXBlIE5lb25TaGFwZUluc3RhbmNlLCB0eXBlIE5lb25TaGFwZUxhYmVsLCB0eXBlIE5lb25Ub3BEb3duU2hhcGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHN3YXJtU2hhcGVzID0ge1xuICBwbGF5ZXI6IGdldE5lb25TaGFwZShcImFycm93LWNsYXNzaWNcIikhLFxuICBlbmVteTogZ2V0TmVvblNoYXBlKFwiaHVudGVyLWV5ZVwiKSEsXG4gIG11bHRpcGxpZXI6IGdldE5lb25TaGFwZShcImJydWlzZXItY3Jvc3NcIikhLFxuICBndW5QaWNrdXA6IGdldE5lb25TaGFwZShcImhleC1maWdodGVyXCIpISxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwaXhlbHNUb1NoYXBlV29ybGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+ICh7XG4gIHg6ICh4IC8gY2FudmFzLndpZHRoIC0gLjUpICogKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpICogMi41LFxuICB5OiAoLjUgLSB5IC8gY2FudmFzLmhlaWdodCkgKiAyLjUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwaXhlbHM6IG51bWJlcikgPT4gcGl4ZWxzIC8gY2FudmFzLmhlaWdodCAqIDIuNTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdG9yQXRQaXhlbHMoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgcGl4ZWxTaXplOiBudW1iZXIsIG92ZXJyaWRlczogUGFydGlhbDxOZW9uU2hhcGVJbnN0YW5jZT4gPSB7fSk6IE5lb25TaGFwZUluc3RhbmNlIHtcbiAgY29uc3Qgd29ybGQgPSBwaXhlbHNUb1NoYXBlV29ybGQoY2FudmFzLCB4LCB5KTtcbiAgYWN0b3IubW92ZVRvKHdvcmxkLngsIHdvcmxkLnkpO1xuICBhY3Rvci5zY2FsZSA9IHBpeGVsU2l6ZVRvU2hhcGVTY2FsZShjYW52YXMsIHBpeGVsU2l6ZSk7XG4gIHJldHVybiBhY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpO1xufVxuXG50eXBlIFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IFBhcnRpYWw8TmVvblNoYXBlSW5zdGFuY2U+ICYgUGFydGlhbDxQaWNrPE5lb25Ub3BEb3duU2hhcGUsIFwid2lkdGhcIiB8IFwiaGVpZ2h0XCI+PjtcblxuZXhwb3J0IGNvbnN0IGFjdG9ySW5Ub3BEb3duU2NlbmUgPSAoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBvdmVycmlkZXM6IFRvcERvd25TaGFwZU92ZXJyaWRlcyA9IHt9KTogTmVvblRvcERvd25TaGFwZSA9PlxuICAoeyAuLi5hY3Rvci5yZW5kZXJJbnN0YW5jZShvdmVycmlkZXMpLCB4LCB5LCBzaXplIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hhcGVMYWJlbCA9ICh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uOiBOZW9uU2hhcGVMYWJlbFtcInBvc2l0aW9uXCJdLCBmb250U2l6ZTogbnVtYmVyLCBvZmZzZXQgPSA0KTogTmVvblNoYXBlTGFiZWwgPT5cbiAgKHsgdGV4dCwgcG9zaXRpb24sIGZvbnRTaXplLCBvZmZzZXQsIGZvbnRGYW1pbHk6IFwiU2Vnb2UgVUksIHNhbnMtc2VyaWZcIiwgZm9udFdlaWdodDogNzAwIH0pO1xuIiwgImltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSwgTmVvblRvcERvd25DbG91ZEJ1cnN0LCBOZW9uVG9wRG93blNoYXBlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydHJhaXRWaWV3cG9ydFBvbGljeSB7XG4gIGFzcGVjdFdpZHRoOiBudW1iZXI7XG4gIGFzcGVjdEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJWaWV3cG9ydFBvbGljeSBleHRlbmRzIFBvcnRyYWl0Vmlld3BvcnRQb2xpY3kge1xuICByZWFkb25seSBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiO1xuICByZWFkb25seSBsb2dpY2FsV2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgbG9naWNhbEhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclZpZXdwb3J0OiBMYW5lUnVubmVyVmlld3BvcnRQb2xpY3kgPSB7XG4gIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXG4gIGFzcGVjdFdpZHRoOiA5LFxuICBhc3BlY3RIZWlnaHQ6IDE2LFxuICBsb2dpY2FsV2lkdGg6IDQ1MCxcbiAgbG9naWNhbEhlaWdodDogODAwLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3Mge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbG9va0FuZ2xlRGVncmVlczogbnVtYmVyO1xuICBmb2xsb3dEaXN0YW5jZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGhvcml6b246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0ZWRTY2VuZSB7XG4gIHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXTtcbiAgY2xvdWRzPzogTmVvblRvcERvd25DbG91ZEJ1cnN0W107XG4gIHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGljb3B0ZXJWaWV3cG9ydCB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBwbGF5ZXJZOiBudW1iZXI7XG4gIGZvY3VzWD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJDYW1lcmFGb2N1c1god2lkdGg6IG51bWJlciwgdGFyZ2V0WDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbiAgcmV0dXJuIGNlbnRlclggKyAodGFyZ2V0WCAtIGNlbnRlclgpICogLjU1O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQb3J0cmFpdFN0YWdlKHN0YWdlOiBIVE1MRWxlbWVudCwgcG9saWN5OiBQb3J0cmFpdFZpZXdwb3J0UG9saWN5KTogdm9pZCB7XG4gIHN0YWdlLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zdGFnZS1hc3BlY3RcIiwgYCR7cG9saWN5LmFzcGVjdFdpZHRofSAvICR7cG9saWN5LmFzcGVjdEhlaWdodH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YWdlTm9ybWFsaXplZFgoc3RhZ2U6IEhUTUxFbGVtZW50LCBjbGllbnRYOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBib3VuZHMgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChjbGllbnRYIC0gYm91bmRzLmxlZnQpIC8gYm91bmRzLndpZHRoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgPSB7XG4gIGhlaWdodDogNjUsXG4gIGxvb2tBbmdsZURlZ3JlZXM6IDI3LFxuICBmb2xsb3dEaXN0YW5jZTogMjAsXG4gIHpvb206IC4yLFxuICBob3Jpem9uOiAuNTEsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEhlbGljb3B0ZXJTY2VuZShcbiAgcHJpbWl0aXZlczogcmVhZG9ubHkgTmVvblByaW1pdGl2ZVtdLFxuICBzaGFwZXM6IHJlYWRvbmx5IE5lb25Ub3BEb3duU2hhcGVbXSxcbiAgY2xvdWRzOiByZWFkb25seSBOZW9uVG9wRG93bkNsb3VkQnVyc3RbXSxcbiAgc2V0dGluZ3M6IEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncyxcbiAgdmlld3BvcnQ6IEhlbGljb3B0ZXJWaWV3cG9ydCxcbik6IFByb2plY3RlZFNjZW5lIHtcbiAgY29uc3QgcHJvamVjdFBvaW50ID0gcHJvamVjdEhlbGljb3B0ZXJQb2ludEZhY3Rvcnkoc2V0dGluZ3MsIHZpZXdwb3J0KTtcblxuICBjb25zdCBwcm9qZWN0ZWRQcmltaXRpdmVzID0gcHJpbWl0aXZlcy5tYXAocHJpbWl0aXZlID0+IHtcbiAgICBpZiAocHJpbWl0aXZlLnNoYXBlID09PSBcImxpbmVcIikge1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBwcmltaXRpdmUucm90YXRpb24gPz8gMDtcbiAgICAgIGNvbnN0IGhhbGZMZW5ndGggPSBwcmltaXRpdmUuaGVpZ2h0ID8/IHByaW1pdGl2ZS53aWR0aDtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSAtTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54IC0gZGlyZWN0aW9uWCAqIGhhbGZMZW5ndGgsIHByaW1pdGl2ZS55IC0gZGlyZWN0aW9uWSAqIGhhbGZMZW5ndGgpO1xuICAgICAgY29uc3QgZW5kID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54ICsgZGlyZWN0aW9uWCAqIGhhbGZMZW5ndGgsIHByaW1pdGl2ZS55ICsgZGlyZWN0aW9uWSAqIGhhbGZMZW5ndGgpO1xuICAgICAgY29uc3QgZHggPSBlbmQueCAtIHN0YXJ0Lng7XG4gICAgICBjb25zdCBkeSA9IGVuZC55IC0gc3RhcnQueTtcbiAgICAgIGNvbnN0IHNjYWxlID0gKHN0YXJ0LnNjYWxlICsgZW5kLnNjYWxlKSAqIC41O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJpbWl0aXZlLFxuICAgICAgICB4OiAoc3RhcnQueCArIGVuZC54KSAvIDIsXG4gICAgICAgIHk6IChzdGFydC55ICsgZW5kLnkpIC8gMixcbiAgICAgICAgd2lkdGg6IHByaW1pdGl2ZS53aWR0aCAqIHNjYWxlLFxuICAgICAgICBoZWlnaHQ6IE1hdGguaHlwb3QoZHgsIGR5KSAvIDIsXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChwcmltaXRpdmUueCwgcHJpbWl0aXZlLnkpO1xuICAgIGNvbnN0IHdpZHRoID0gcHJpbWl0aXZlLndpZHRoICogcG9pbnQuc2NhbGU7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoKSAqIHBvaW50LnNjYWxlO1xuICAgIGxldCByb3RhdGlvbiA9IHByaW1pdGl2ZS5yb3RhdGlvbjtcbiAgICBpZiAocm90YXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYXhpc0xlbmd0aCA9IE1hdGgubWF4KHByaW1pdGl2ZS5oZWlnaHQgPz8gcHJpbWl0aXZlLndpZHRoLCBwcmltaXRpdmUud2lkdGgsIDEpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uWCA9IC1NYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICBjb25zdCBkaXJlY3Rpb25ZID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgY29uc3QgZW5kID0gcHJvamVjdFBvaW50KHByaW1pdGl2ZS54ICsgZGlyZWN0aW9uWCAqIGF4aXNMZW5ndGgsIHByaW1pdGl2ZS55ICsgZGlyZWN0aW9uWSAqIGF4aXNMZW5ndGgpO1xuICAgICAgcm90YXRpb24gPSBNYXRoLmF0YW4yKHBvaW50LnggLSBlbmQueCwgZW5kLnkgLSBwb2ludC55KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByaW1pdGl2ZSxcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByb3RhdGlvbixcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0ZWRTaGFwZXMgPSBzaGFwZXNcbiAgICAubWFwKHNoYXBlID0+IHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcHJvamVjdFBvaW50KHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2hhcGUsXG4gICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgIHNpemU6IHNoYXBlLnNpemUgKiBwb2ludC5zY2FsZSxcbiAgICAgICAgejogKHNoYXBlLnogPz8gMCkgLSBwb2ludC5kZXB0aCAqIC4wMDA4LFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiAoKGIueiA/PyAwKSAtIChhLnogPz8gMCkpKTtcblxuICBjb25zdCBwcm9qZWN0ZWRDbG91ZHMgPSBjbG91ZHMubWFwKGNsb3VkID0+IHtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RQb2ludChjbG91ZC54LCBjbG91ZC55KTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xvdWQsXG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHNpemU6IGNsb3VkLnNpemUgKiBwb2ludC5zY2FsZSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzOiBwcm9qZWN0ZWRQcmltaXRpdmVzLCBjbG91ZHM6IHByb2plY3RlZENsb3Vkcywgc2hhcGVzOiBwcm9qZWN0ZWRTaGFwZXMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RIZWxpY29wdGVyUG9pbnQoXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlcjsgZGVwdGg6IG51bWJlciB9IHtcbiAgcmV0dXJuIHByb2plY3RIZWxpY29wdGVyUG9pbnRGYWN0b3J5KHNldHRpbmdzLCB2aWV3cG9ydCkoeCwgeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnByb2plY3RIZWxpY29wdGVyU2NyZWVuUG9pbnQoXG4gIHNjcmVlblg6IG51bWJlcixcbiAgc2NyZWVuWTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0LFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgY29uc3QgZmFsbGJhY2sgPSB7IHg6IHNjcmVlblgsIHk6IHNjcmVlblkgfTtcbiAgY29uc3QgY2VudGVyWCA9IHZpZXdwb3J0LndpZHRoIC8gMjtcbiAgY29uc3QgZm9jdXNYID0gdmlld3BvcnQuZm9jdXNYID8/IGNlbnRlclg7XG4gIGNvbnN0IHBpdGNoID0gc2V0dGluZ3MubG9va0FuZ2xlRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHBpdGNoKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocGl0Y2gpO1xuICBjb25zdCBmb2NhbExlbmd0aCA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLnpvb207XG4gIGNvbnN0IGhvcml6b25ZID0gdmlld3BvcnQuaGVpZ2h0ICogc2V0dGluZ3MuaG9yaXpvbjtcbiAgY29uc3QgcmVsYXRpdmVZID0gLXNldHRpbmdzLmhlaWdodDtcbiAgY29uc3Qgc2NyZWVuUmF0aW8gPSAoaG9yaXpvblkgLSBzY3JlZW5ZKSAvIGZvY2FsTGVuZ3RoO1xuICBjb25zdCBkZW5vbWluYXRvciA9IHNpbiAtIHNjcmVlblJhdGlvICogY29zO1xuICBpZiAoTWF0aC5hYnMoZGVub21pbmF0b3IpIDwgLjAwMDEpIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3Qgd29ybGRaID0gLXJlbGF0aXZlWSAqIChjb3MgKyBzY3JlZW5SYXRpbyAqIHNpbikgLyBkZW5vbWluYXRvcjtcbiAgY29uc3QgY2FtZXJhWiA9IE1hdGgubWF4KDIwLCB3b3JsZFogKiBjb3MgLSByZWxhdGl2ZVkgKiBzaW4pO1xuICBjb25zdCBzY2FsZSA9IGZvY2FsTGVuZ3RoIC8gY2FtZXJhWjtcbiAgY29uc3QgcG9pbnQgPSB7XG4gICAgeDogZm9jdXNYICsgKHNjcmVlblggLSBjZW50ZXJYKSAvIHNjYWxlLFxuICAgIHk6IHZpZXdwb3J0LnBsYXllclkgKyBzZXR0aW5ncy5mb2xsb3dEaXN0YW5jZSAtIHdvcmxkWixcbiAgfTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShwb2ludC54KSAmJiBOdW1iZXIuaXNGaW5pdGUocG9pbnQueSkgJiYgTWF0aC5hYnMocG9pbnQueCkgPCA1MDAwICYmIE1hdGguYWJzKHBvaW50LnkpIDwgNTAwMFxuICAgID8gcG9pbnRcbiAgICA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0SGVsaWNvcHRlclBvaW50RmFjdG9yeShzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB2aWV3cG9ydDogSGVsaWNvcHRlclZpZXdwb3J0KSB7XG4gIGNvbnN0IGNlbnRlclggPSB2aWV3cG9ydC53aWR0aCAvIDI7XG4gIGNvbnN0IGZvY3VzWCA9IHZpZXdwb3J0LmZvY3VzWCA/PyBjZW50ZXJYO1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IG1pbkRlcHRoID0gMjA7XG5cbiAgcmV0dXJuICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXI7IGRlcHRoOiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3Qgd29ybGRYID0geCAtIGZvY3VzWDtcbiAgICBjb25zdCB3b3JsZFogPSB2aWV3cG9ydC5wbGF5ZXJZIC0geSArIHNldHRpbmdzLmZvbGxvd0Rpc3RhbmNlO1xuICAgIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gICAgY29uc3QgY2FtZXJhWSA9IHJlbGF0aXZlWSAqIGNvcyArIHdvcmxkWiAqIHNpbjtcbiAgICBjb25zdCBjYW1lcmFaID0gTWF0aC5tYXgobWluRGVwdGgsIHdvcmxkWiAqIGNvcyAtIHJlbGF0aXZlWSAqIHNpbik7XG4gICAgY29uc3Qgc2NhbGUgPSBmb2NhbExlbmd0aCAvIGNhbWVyYVo7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyB3b3JsZFggKiBzY2FsZSxcbiAgICAgIHk6IGhvcml6b25ZIC0gY2FtZXJhWSAqIHNjYWxlLFxuICAgICAgc2NhbGUsXG4gICAgICBkZXB0aDogY2FtZXJhWixcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29ybGRZRm9yUHJvamVjdGVkWShcbiAgc2NyZWVuWTogbnVtYmVyLFxuICBzZXR0aW5nczogSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLFxuICB2aWV3cG9ydDogeyBoZWlnaHQ6IG51bWJlcjsgcGxheWVyWTogbnVtYmVyIH0sXG4pOiBudW1iZXIge1xuICBjb25zdCBwaXRjaCA9IHNldHRpbmdzLmxvb2tBbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhwaXRjaCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHBpdGNoKTtcbiAgY29uc3QgZm9jYWxMZW5ndGggPSB2aWV3cG9ydC5oZWlnaHQgKiBzZXR0aW5ncy56b29tO1xuICBjb25zdCBob3Jpem9uWSA9IHZpZXdwb3J0LmhlaWdodCAqIHNldHRpbmdzLmhvcml6b247XG4gIGNvbnN0IHJlbGF0aXZlWSA9IC1zZXR0aW5ncy5oZWlnaHQ7XG4gIGNvbnN0IHNjcmVlblJhdGlvID0gKGhvcml6b25ZIC0gc2NyZWVuWSkgLyBmb2NhbExlbmd0aDtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBzaW4gLSBzY3JlZW5SYXRpbyAqIGNvcztcbiAgaWYgKE1hdGguYWJzKGRlbm9taW5hdG9yKSA8IC4wMDAxKSByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIGNvbnN0IHdvcmxkWiA9IC1yZWxhdGl2ZVkgKiAoY29zICsgc2NyZWVuUmF0aW8gKiBzaW4pIC8gZGVub21pbmF0b3I7XG4gIHJldHVybiB2aWV3cG9ydC5wbGF5ZXJZICsgc2V0dGluZ3MuZm9sbG93RGlzdGFuY2UgLSB3b3JsZFo7XG59XG4iLCAiaW1wb3J0IHtcbiAgZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yLFxuICB0eXBlIE5lb25DbG91ZEJ1cnN0U2V0dGluZ3MsXG4gIHR5cGUgTmVvblRvcERvd25DbG91ZEJ1cnN0LFxufSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgT3JiSWQgfSBmcm9tIFwiLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVZpc3VhbFR5cGUgPSBPcmJJZDtcblxuZXhwb3J0IGludGVyZmFjZSBFbmVteUV4aXRFbnZlbG9wZSB7XG4gIGVudHJ5U2Vjb25kczogbnVtYmVyO1xuICBlbnRyeVB1bmNoOiBudW1iZXI7XG4gIHN1c3RhaW5TZWNvbmRzOiBudW1iZXI7XG4gIHN1c3RhaW5MZXZlbDogbnVtYmVyO1xuICBmYWRlU2Vjb25kczogbnVtYmVyO1xuICBzcGFya0ludGVuc2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15RXhpdENsb3VkUHJvZmlsZSBleHRlbmRzIE9taXQ8TmVvbkNsb3VkQnVyc3RTZXR0aW5ncywgXCJhZ2VcIiB8IFwiY29sb3JcIiB8IFwiY29yZUNvbG9yXCIgfCBcInhcIiB8IFwieVwiIHwgXCJzZWVkXCI+IHtcbiAgc2l6ZTogbnVtYmVyO1xuICBlbnZlbG9wZTogRW5lbXlFeGl0RW52ZWxvcGU7XG4gIGNsb3VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB7XG4gIGVuZW15VHlwZTogRW5lbXlWaXN1YWxUeXBlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgc2VlZDogbnVtYmVyO1xuICBhZ2U6IG51bWJlcjtcbn1cblxuY29uc3QgYmFzaWNPcmJFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICBjbG91ZDogdHJ1ZSxcbiAgc2l6ZTogMTEsXG4gIGRldGFpbDogNixcbiAgdHVyYnVsZW5jZTogMi43MixcbiAgZ2xvdzogMTEsXG4gIGNvcmVJbnRlbnNpdHk6IDEuMjUsXG4gIHJpbUludGVuc2l0eTogLjgsXG4gIG9wYWNpdHk6IC44MixcbiAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gIGRyaWZ0WDogMCxcbiAgZHJpZnRZOiAwLFxuICBlbnZlbG9wZToge1xuICAgIGVudHJ5U2Vjb25kczogLjE2LFxuICAgIGVudHJ5UHVuY2g6IDIuMzMsXG4gICAgc3VzdGFpblNlY29uZHM6IC4yMSxcbiAgICBzdXN0YWluTGV2ZWw6IDEuMixcbiAgICBmYWRlU2Vjb25kczogLjI5LFxuICAgIHNwYXJrSW50ZW5zaXR5OiAxLjIxLFxuICB9LFxufTtcblxuY29uc3Qgbm9DbG91ZEV4aXRQcm9maWxlOiBFbmVteUV4aXRDbG91ZFByb2ZpbGUgPSB7XG4gIC4uLmJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIGNsb3VkOiBmYWxzZSxcbiAgc2l6ZTogMCxcbn07XG5cbmNvbnN0IHRhbmtFeGl0UHJvZmlsZTogRW5lbXlFeGl0Q2xvdWRQcm9maWxlID0ge1xuICAuLi5iYXNpY09yYkV4aXRQcm9maWxlLFxuICBzaXplOiAxNSxcbiAgZ2xvdzogMTMsXG59O1xuXG5leHBvcnQgY29uc3QgZW5lbXlFeGl0UHJvZmlsZXM6IFJlY29yZDxFbmVteVZpc3VhbFR5cGUsIEVuZW15RXhpdENsb3VkUHJvZmlsZT4gPSB7XG4gIGJhc2ljT3JiOiBiYXNpY09yYkV4aXRQcm9maWxlLFxuICBnbGFzc1NoaWVsZDogbm9DbG91ZEV4aXRQcm9maWxlLFxuICB3aW5nZXI6IGJhc2ljT3JiRXhpdFByb2ZpbGUsXG4gIHRhbms6IHRhbmtFeGl0UHJvZmlsZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmVteUV4aXREdXJhdGlvbihlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZSk6IG51bWJlciB7XG4gIGNvbnN0IGVudmVsb3BlID0gZW5lbXlFeGl0UHJvZmlsZXNbZW5lbXlUeXBlXS5lbnZlbG9wZTtcbiAgcmV0dXJuIGVudmVsb3BlLmVudHJ5U2Vjb25kcyArIGVudmVsb3BlLnN1c3RhaW5TZWNvbmRzICsgZW52ZWxvcGUuZmFkZVNlY29uZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUV4aXRFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteVR5cGU6IEVuZW15VmlzdWFsVHlwZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHtcbiAgcmV0dXJuIHtcbiAgICBlbmVteVR5cGU6IG9wdGlvbnMuZW5lbXlUeXBlLFxuICAgIHg6IG9wdGlvbnMueCxcbiAgICB5OiBvcHRpb25zLnksXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgc2VlZDogb3B0aW9ucy5zZWVkID8/IE1hdGgucmFuZG9tKCkgKiAxMDAwLFxuICAgIGFnZTogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVuZW15RXhpdEVmZmVjdHMoZWZmZWN0czogQWN0aXZlRW5lbXlFeGl0RWZmZWN0W10sIGRlbHRhU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGluZGV4ID0gZWZmZWN0cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWZmZWN0ID0gZWZmZWN0c1tpbmRleF07XG4gICAgZWZmZWN0LmFnZSArPSBkZWx0YVNlY29uZHM7XG4gICAgaWYgKGVmZmVjdC5hZ2UgPj0gZW5lbXlFeGl0RHVyYXRpb24oZWZmZWN0LmVuZW15VHlwZSkpIGVmZmVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlFeGl0Q2xvdWQoZWZmZWN0OiBBY3RpdmVFbmVteUV4aXRFZmZlY3QpOiBOZW9uVG9wRG93bkNsb3VkQnVyc3Qge1xuICBjb25zdCBwcm9maWxlID0gZW5lbXlFeGl0UHJvZmlsZXNbZWZmZWN0LmVuZW15VHlwZV07XG4gIGlmICghcHJvZmlsZS5jbG91ZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgICAgY29yZUNvbG9yOiBlZmZlY3QuY29sb3IsXG4gICAgICB4OiBlZmZlY3QueCxcbiAgICAgIHk6IGVmZmVjdC55LFxuICAgICAgc2l6ZTogMCxcbiAgICAgIGRldGFpbDogMyxcbiAgICAgIHR1cmJ1bGVuY2U6IDAsXG4gICAgICBnbG93OiAwLFxuICAgICAgY29yZUludGVuc2l0eTogMCxcbiAgICAgIHJpbUludGVuc2l0eTogMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkaXNzaXBhdGlvblRpbWU6IGVuZW15RXhpdER1cmF0aW9uKGVmZmVjdC5lbmVteVR5cGUpLFxuICAgICAgZGlzc2lwYXRpb25BY3Rpb246IFwic3BhcmtGYWRlXCIsXG4gICAgICBzZWVkOiBlZmZlY3Quc2VlZCxcbiAgICAgIGFnZTogZWZmZWN0LmFnZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IGVudmVsb3BlID0gcHJvZmlsZS5lbnZlbG9wZTtcbiAgY29uc3QgZHVyYXRpb24gPSBlbmVteUV4aXREdXJhdGlvbihlZmZlY3QuZW5lbXlUeXBlKTtcbiAgY29uc3QgZW50cnlUID0gTWF0aC5taW4oMSwgZWZmZWN0LmFnZSAvIE1hdGgubWF4KC4wMDEsIGVudmVsb3BlLmVudHJ5U2Vjb25kcykpO1xuICBjb25zdCBmYWRlU3RhcnQgPSBlbnZlbG9wZS5lbnRyeVNlY29uZHMgKyBlbnZlbG9wZS5zdXN0YWluU2Vjb25kcztcbiAgY29uc3QgZmFkZVQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZWZmZWN0LmFnZSAtIGZhZGVTdGFydCkgLyBNYXRoLm1heCguMDAxLCBlbnZlbG9wZS5mYWRlU2Vjb25kcykpKTtcbiAgY29uc3Qgc3VzdGFpbiA9IGVmZmVjdC5hZ2UgPj0gZW52ZWxvcGUuZW50cnlTZWNvbmRzICYmIGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyBlbnZlbG9wZS5zdXN0YWluTGV2ZWwgOiAxO1xuICBjb25zdCBlbnRyeUZsYXNoID0gMSArIE1hdGguc2luKGVudHJ5VCAqIE1hdGguUEkpICogZW52ZWxvcGUuZW50cnlQdW5jaDtcbiAgY29uc3QgZmFkZUVuZXJneSA9IDEgLSBmYWRlVCAqIC42MjtcbiAgY29uc3Qgc3BhcmtBY2NlbnQgPSAxICsgZmFkZVQgKiBlbnZlbG9wZS5zcGFya0ludGVuc2l0eSAqIC4yMjtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogZWZmZWN0LmNvbG9yLFxuICAgIGNvcmVDb2xvcjogZGVyaXZlTmVvbkNsb3VkQ29yZUNvbG9yKGVmZmVjdC5jb2xvciksXG4gICAgeDogZWZmZWN0LngsXG4gICAgeTogZWZmZWN0LnksXG4gICAgc2l6ZTogcHJvZmlsZS5zaXplICogKC40OCArIGVudHJ5VCAqIC41MiksXG4gICAgZGV0YWlsOiBwcm9maWxlLmRldGFpbCxcbiAgICB0dXJidWxlbmNlOiBwcm9maWxlLnR1cmJ1bGVuY2UsXG4gICAgZ2xvdzogKHByb2ZpbGUuZ2xvdyA/PyAxKSAqIGVudHJ5Rmxhc2ggKiBzdXN0YWluICogZmFkZUVuZXJneSAqIHNwYXJrQWNjZW50LFxuICAgIGNvcmVJbnRlbnNpdHk6IChwcm9maWxlLmNvcmVJbnRlbnNpdHkgPz8gMSkgKiAoMSArIGVudmVsb3BlLmVudHJ5UHVuY2ggKiAoMSAtIGVudHJ5VCkgKiAuNTUpLFxuICAgIHJpbUludGVuc2l0eTogKHByb2ZpbGUucmltSW50ZW5zaXR5ID8/IDEpICogKDEgKyBmYWRlVCAqIGVudmVsb3BlLnNwYXJrSW50ZW5zaXR5ICogLjM1KSxcbiAgICBvcGFjaXR5OiAocHJvZmlsZS5vcGFjaXR5ID8/IDEpICogKGVmZmVjdC5hZ2UgPCBmYWRlU3RhcnQgPyAxIDogMSAtIGZhZGVUICogLjg4KSxcbiAgICBkaXNzaXBhdGlvblRpbWU6IGR1cmF0aW9uLFxuICAgIGRpc3NpcGF0aW9uQWN0aW9uOiBcInNwYXJrRmFkZVwiLFxuICAgIGRyaWZ0WDogcHJvZmlsZS5kcmlmdFggPz8gMCxcbiAgICBkcmlmdFk6IHByb2ZpbGUuZHJpZnRZID8/IDAsXG4gICAgc2VlZDogZWZmZWN0LnNlZWQsXG4gICAgYWdlOiBNYXRoLm1pbihlZmZlY3QuYWdlLCBkdXJhdGlvbiksXG4gIH07XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2V0TmVvblNoYXBlLFxuICBOZW9uU2hhcGVBY3RvcixcbiAgTmVvblNoYXBlRGlzcG9zYWwsXG4gIG5lb25QYWxldHRlLFxuICB0eXBlIE5lb25QcmltaXRpdmUsXG59IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5LCB0eXBlIE9yYklkLCB0eXBlIE9yYk1lbWJlciB9IGZyb20gXCIuLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBlbmVteUVudHJhbmNlUHJvZmlsZXMgfSBmcm9tIFwiLi9lbmVteUVudHJhbmNlVmlzdWFsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRW5lbXlFeGl0RWZmZWN0LCB0eXBlIEFjdGl2ZUVuZW15RXhpdEVmZmVjdCB9IGZyb20gXCIuL2VuZW15RXhpdFZpc3VhbHNcIjtcbmltcG9ydCB7IHByb2plY3RIZWxpY29wdGVyUG9pbnQsIHR5cGUgSGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCB0eXBlIEhlbGljb3B0ZXJWaWV3cG9ydCB9IGZyb20gXCIuL3ZpZXdwb3J0XCI7XG5cbmV4cG9ydCB0eXBlIEVuZW15VHJhY2tJZCA9IGBlbmVteS4ke3N0cmluZ31gO1xuXG5leHBvcnQgY29uc3QgZW5lbXlUcmFja0lkID0gKGVuZW15SWQ6IE9yYklkKTogRW5lbXlUcmFja0lkID0+XG4gIGVuZW15SWQgPT09IFwiYmFzaWNPcmJcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2VuZW15SWR9YDtcblxuZXhwb3J0IGNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQoaWQ6IHN0cmluZyk6IHsgZW5lbXlJZDogT3JiSWQ7IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHwgbnVsbCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCA/IHsgZW5lbXlJZCwgZGVmaW5pdGlvbjogb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0gfSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmVteUFjdG9yKGVuZW15SWQ6IE9yYklkKTogTmVvblNoYXBlQWN0b3Ige1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF07XG4gIGNvbnN0IHNoYXBlID0gZ2V0TmVvblNoYXBlKGRlZmluaXRpb24uc2hhcGVJZCk7XG4gIGlmICghc2hhcGUpIHRocm93IG5ldyBFcnJvcihgRW5lbXkgXCIke2VuZW15SWR9XCIgdXNlcyBtaXNzaW5nIE5lb25GYWN0b3J5IHNoYXBlIFwiJHtkZWZpbml0aW9uLnNoYXBlSWR9XCIuYCk7XG4gIGNvbnN0IGVudHJhbmNlID0gZW5lbXlFbnRyYW5jZVByb2ZpbGVzW2VuZW15SWRdO1xuICBjb25zdCBhY3RvciA9IG5ldyBOZW9uU2hhcGVBY3Rvcih7XG4gICAgc2hhcGUsXG4gICAgY29sb3I6IG5lb25QYWxldHRlW2RlZmluaXRpb24uYmFzZUNvbG9yXSxcbiAgICBlbnRyYW5jZUR1cmF0aW9uOiBlbnRyYW5jZS5kdXJhdGlvblNlY29uZHMsXG4gICAgZW50cmFuY2VNYWduaXR1ZGU6IGVudHJhbmNlLnNjYXR0ZXJNYWduaXR1ZGUsXG4gIH0pO1xuICByZXR1cm4gYWN0b3IuZW50ZXIoZW50cmFuY2UuZHVyYXRpb25TZWNvbmRzLCBlbnRyYW5jZS5zY2F0dGVyTWFnbml0dWRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZW15RGVhdGhFZmZlY3Qob3B0aW9uczoge1xuICBlbmVteUlkOiBPcmJJZDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHNlZWQ/OiBudW1iZXI7XG59KTogQWN0aXZlRW5lbXlFeGl0RWZmZWN0IHwgbnVsbCB7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBvcmJGYW1pbHkubWVtYmVyc1tvcHRpb25zLmVuZW15SWRdO1xuICBpZiAoZGVmaW5pdGlvbi5kZWF0aFZpc3VhbCAhPT0gXCJjbG91ZFwiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNyZWF0ZUVuZW15RXhpdEVmZmVjdCh7XG4gICAgZW5lbXlUeXBlOiBvcHRpb25zLmVuZW15SWQsXG4gICAgeDogb3B0aW9ucy54LFxuICAgIHk6IG9wdGlvbnMueSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvcixcbiAgICBzZWVkOiBvcHRpb25zLnNlZWQsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZUVuZW15QWN0b3IoYWN0b3I6IE5lb25TaGFwZUFjdG9yLCBkZWZpbml0aW9uOiBPcmJNZW1iZXIpOiB2b2lkIHtcbiAgYWN0b3IuZXhwbG9kZU1hZ25pdHVkZSA9IGRlZmluaXRpb24uZXhwbG9zaW9uTWFnbml0dWRlO1xuICBhY3Rvci5kaXNwb3NlKE5lb25TaGFwZURpc3Bvc2FsLkV4cGxvZGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhbWFnZWFibGVFbmVteSB7XG4gIGlkOiBudW1iZXI7XG4gIGVuZW15SWQ6IE9yYklkO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGFjdG9yOiBOZW9uU2hhcGVBY3RvcjtcbiAgZHlpbmc6IGJvb2xlYW47XG4gIGhpdEZsYXNoVW50aWw/OiBudW1iZXI7XG4gIGV4aXRFZmZlY3RTcGF3bmVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVhdEVuZW15KFxuICBlbmVteTogRGFtYWdlYWJsZUVuZW15LFxuICBlZmZlY3RzOiBBY3RpdmVFbmVteUV4aXRFZmZlY3RbXSxcbiAgY29sb3I6IHN0cmluZyA9IG5lb25QYWxldHRlW29yYkZhbWlseS5tZW1iZXJzW2VuZW15LmVuZW15SWRdLmJhc2VDb2xvcl0sXG4pOiBPcmJNZW1iZXIge1xuICBjb25zdCBkZWZpbml0aW9uID0gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXkuZW5lbXlJZF07XG4gIGVuZW15LmR5aW5nID0gdHJ1ZTtcbiAgaWYgKCFlbmVteS5leGl0RWZmZWN0U3Bhd25lZCkge1xuICAgIGVuZW15LmV4aXRFZmZlY3RTcGF3bmVkID0gdHJ1ZTtcbiAgICBjb25zdCBlZmZlY3QgPSBjcmVhdGVFbmVteURlYXRoRWZmZWN0KHtcbiAgICAgIGVuZW15SWQ6IGVuZW15LmVuZW15SWQsXG4gICAgICB4OiBlbmVteS54LFxuICAgICAgeTogZW5lbXkueSxcbiAgICAgIGNvbG9yLFxuICAgICAgc2VlZDogZW5lbXkuaWQsXG4gICAgfSk7XG4gICAgaWYgKGVmZmVjdCkgZWZmZWN0cy5wdXNoKGVmZmVjdCk7XG4gIH1cbiAgZGlzcG9zZUVuZW15QWN0b3IoZW5lbXkuYWN0b3IsIGRlZmluaXRpb24pO1xuICByZXR1cm4gZGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFbmVteURhbWFnZShvcHRpb25zOiB7XG4gIGVuZW15OiBEYW1hZ2VhYmxlRW5lbXk7XG4gIGVmZmVjdHM6IEFjdGl2ZUVuZW15RXhpdEVmZmVjdFtdO1xuICBkYW1hZ2U/OiBudW1iZXI7XG4gIGltcGFjdE1hZ25pdHVkZT86IG51bWJlcjtcbiAgaGl0Rmxhc2hVbnRpbD86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG59KTogeyBraWxsZWQ6IGJvb2xlYW47IGRlZmluaXRpb246IE9yYk1lbWJlciB9IHtcbiAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW29wdGlvbnMuZW5lbXkuZW5lbXlJZF07XG4gIGlmIChvcHRpb25zLmRhbWFnZSkgb3B0aW9ucy5lbmVteS5oZWFsdGggLT0gb3B0aW9ucy5kYW1hZ2U7XG4gIGlmIChvcHRpb25zLmltcGFjdE1hZ25pdHVkZSkge1xuICAgIG9wdGlvbnMuZW5lbXkuYWN0b3IuaW1wYWN0KHtcbiAgICAgIGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxIH0sXG4gICAgICBtYWduaXR1ZGU6IG9wdGlvbnMuaW1wYWN0TWFnbml0dWRlIC8gZGVmaW5pdGlvbi5pbXBhY3RSZXNpc3RhbmNlLFxuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLmhpdEZsYXNoVW50aWwgIT09IHVuZGVmaW5lZCkgb3B0aW9ucy5lbmVteS5oaXRGbGFzaFVudGlsID0gb3B0aW9ucy5oaXRGbGFzaFVudGlsO1xuICBpZiAob3B0aW9ucy5lbmVteS5oZWFsdGggPD0gMCkge1xuICAgIHJldHVybiB7IGtpbGxlZDogdHJ1ZSwgZGVmaW5pdGlvbjogZGVmZWF0RW5lbXkob3B0aW9ucy5lbmVteSwgb3B0aW9ucy5lZmZlY3RzLCBvcHRpb25zLmNvbG9yKSB9O1xuICB9XG4gIHJldHVybiB7IGtpbGxlZDogZmFsc2UsIGRlZmluaXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyhvcHRpb25zOiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHZpc2libGVUaHJlc2hvbGQ/OiBudW1iZXI7XG59KTogTmVvblByaW1pdGl2ZVtdIHtcbiAgY29uc3QgdGhyZXNob2xkID0gb3B0aW9ucy52aXNpYmxlVGhyZXNob2xkID8/IG9yYkZhbWlseS5tZW1iZXJzLmJhc2ljT3JiLmhlYWx0aDtcbiAgaWYgKG9wdGlvbnMubWF4SGVhbHRoIDw9IHRocmVzaG9sZCkgcmV0dXJuIFtdO1xuICBjb25zdCByYXRpbyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wdGlvbnMuaGVhbHRoIC8gb3B0aW9ucy5tYXhIZWFsdGgpKTtcbiAgY29uc3QgeSA9IG9wdGlvbnMueTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgzNiwgb3B0aW9ucy53aWR0aCk7XG4gIGNvbnN0IGxlZnQgPSBvcHRpb25zLnggLSB3aWR0aCAvIDI7XG4gIGNvbnN0IGZpbGxlZCA9IE1hdGgubWF4KDAsIHdpZHRoICogcmF0aW8pO1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHg6IG9wdGlvbnMueCxcbiAgICAgIHksXG4gICAgICB3aWR0aDogOC44LFxuICAgICAgaGVpZ2h0OiB3aWR0aCAvIDIsXG4gICAgICBjb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjMTYwODE3XCIsXG4gICAgICBnbG93OiAuMDgsXG4gICAgICBpbnRlbnNpdHk6IC40MixcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IGxlZnQgKyBmaWxsZWQgLyAyLFxuICAgICAgeSxcbiAgICAgIHdpZHRoOiA3LjIsXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KDEsIGZpbGxlZCkgLyAyLFxuICAgICAgY29sb3I6IG9wdGlvbnMuY29sb3IsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6IC43OCxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gMixcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZW15SGVhbHRoQmFyVGFyZ2V0IHtcbiAgZW5lbXlJZDogT3JiSWQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc2NhbGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0ZWRFbmVteUhlYWx0aEJhclByaW1pdGl2ZXMoXG4gIHRhcmdldHM6IHJlYWRvbmx5IEVuZW15SGVhbHRoQmFyVGFyZ2V0W10sXG4gIGNhbWVyYVNldHRpbmdzOiBIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MsXG4gIHZpZXdwb3J0OiBIZWxpY29wdGVyVmlld3BvcnQsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gdGFyZ2V0cy5mbGF0TWFwKHRhcmdldCA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG9yYkZhbWlseS5tZW1iZXJzW3RhcmdldC5lbmVteUlkXTtcbiAgICBjb25zdCBwb2ludCA9IHByb2plY3RIZWxpY29wdGVyUG9pbnQodGFyZ2V0LngsIHRhcmdldC55LCBjYW1lcmFTZXR0aW5ncywgdmlld3BvcnQpO1xuICAgIGNvbnN0IHByb2plY3RlZFNpemUgPSB0YXJnZXQuc2l6ZSAqIHBvaW50LnNjYWxlO1xuICAgIGNvbnN0IHNjYWxlID0gdGFyZ2V0LnNjYWxlID8/IDE7XG4gICAgcmV0dXJuIGVuZW15SGVhbHRoQmFyUHJpbWl0aXZlcyh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSAtIHByb2plY3RlZFNpemUgKiAuNzIgLSAxMixcbiAgICAgIHdpZHRoOiBNYXRoLm1heChwcm9qZWN0ZWRTaXplICogMS4zNSwgZGVmaW5pdGlvbi5yYWRpdXMgKiA1LjIgKiBzY2FsZSAqIHBvaW50LnNjYWxlKSxcbiAgICAgIGhlYWx0aDogdGFyZ2V0LmhlYWx0aCxcbiAgICAgIG1heEhlYWx0aDogdGFyZ2V0Lm1heEhlYWx0aCxcbiAgICAgIGNvbG9yOiBuZW9uUGFsZXR0ZVtkZWZpbml0aW9uLmJhc2VDb2xvcl0sXG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUxhbmVSdW5uZXJTY2VuZSwgdHlwZSBMYW5lUnVubmVyU2NlbmVJZCwgdHlwZSBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5cbnR5cGUgU2NlbmVCYWNrZ3JvdW5kU3RhdGUgPSBcIm1pc3NpbmdcIiB8IFwibG9hZGVkXCIgfCBcImxvYWRpbmdcIjtcblxuY29uc3Qgc2NlbmVCYWNrZ3JvdW5kcyA9IG5ldyBNYXA8c3RyaW5nLCBTY2VuZUJhY2tncm91bmRTdGF0ZT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhbmVSdW5uZXJTY2VuZVByaW1pdGl2ZXMoXG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgdGltZU1zOiBudW1iZXIsXG4pOiBOZW9uUHJpbWl0aXZlW10ge1xuICByZXR1cm4gWy4uLihjcmVhdGVMYW5lUnVubmVyU2NlbmUoeyBzY2VuZUlkLCB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSkucHJpbWl0aXZlcyA/PyBbXSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgbWFya2VyID0gXCIvTmVvblN3YXJtL1wiO1xuICBjb25zdCBuZXN0ZWRJbmRleCA9IHBhdGguaW5kZXhPZihtYXJrZXIpO1xuICBpZiAobmVzdGVkSW5kZXggPj0gMCkgcmV0dXJuIGAke3BhdGguc2xpY2UoMCwgbmVzdGVkSW5kZXgpfS9OZW9uU3dhcm0vc2NlbmVzLyR7c2NlbmVJZH0ucG5nYDtcblxuICBjb25zdCBwYWdlSW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFwiL05lb25Td2FybS5odG1sXCIpO1xuICBpZiAocGFnZUluZGV4ID49IDApIHJldHVybiBgJHtwYXRoLnNsaWNlKDAsIHBhZ2VJbmRleCl9L05lb25Td2FybS9zY2VuZXMvJHtzY2VuZUlkfS5wbmdgO1xuXG4gIHJldHVybiBgTmVvblN3YXJtL3NjZW5lcy8ke3NjZW5lSWR9LnBuZ2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxhbmVSdW5uZXJTY2VuZUJhY2tncm91bmQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogdm9pZCB7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcblxuICBjb25zdCBwYXRoID0gbGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZFVybChzY2VuZUlkKTtcbiAgY29uc3Qgc3RhdGUgPSBzY2VuZUJhY2tncm91bmRzLmdldChwYXRoKTtcbiAgaWYgKHN0YXRlID09PSBcImxvYWRlZFwiKSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtwYXRofVwiKWA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIik7XG4gIGlmIChzdGF0ZSkgcmV0dXJuO1xuXG4gIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGluZ1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibG9hZGVkXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cGF0aH1cIilgO1xuICB9O1xuICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgIHNjZW5lQmFja2dyb3VuZHMuc2V0KHBhdGgsIFwibWlzc2luZ1wiKTtcbiAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgfTtcbiAgaW1hZ2Uuc3JjID0gcGF0aDtcbn1cbiIsICJpbXBvcnQge1xuICBnZXRMYW5lUnVubmVyU2NlbmVOYW1lLFxuICBpc0xhbmVSdW5uZXJTY2VuZUlkLFxuICBsYW5lUnVubmVyU2NlbmVJZHMsXG4gIE5lb25TaGFwZUFjdG9yLFxuICBuZW9uUGFsZXR0ZSxcbiAgTmVvblRvcERvd25TY2VuZVJlbmRlcmVyLFxuICBnZXROZW9uU2hhcGUsXG4gIHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQsXG4gIHR5cGUgTmVvblRvcERvd25TaGFwZSxcbn0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQge1xuICBndW5GYW1pbHksXG4gIG11bHRpcGxpZXJGYW1pbHksXG4gIG9yYkZhbWlseSxcbiAgc2hpZWxkRmFtaWx5LFxuICBzd29yZEZhbWlseSxcbiAgdHJhY2tGYW1pbHksXG4gIHR5cGUgVHJhY2tNZW1iZXIsXG59IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBzaGllbGRQaWNrdXBWaXN1YWwsIHN3b3JkUGlja3VwVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy9mYW1pbHlWaXN1YWxzXCI7XG5pbXBvcnQgeyBiaWxsYm9hcmRPcmllbnRhdGlvbiwgZW5lbXlPcmllbnRhdGlvbiwgaGVsaWNvcHRlclZpZXdwb3J0Rm9yLCBwbGF5ZXJPcmllbnRhdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvcmVuZGVyT3JpZW50YXRpb25cIjtcbmltcG9ydCB7IGFjdG9ySW5Ub3BEb3duU2NlbmUsIHN3YXJtU2hhcGVzIH0gZnJvbSBcIi4uLy4uL3NyYy9zaGFwZVZpc3VhbHNcIjtcbmltcG9ydCB7IGRlZmF1bHRIZWxpY29wdGVyQ2FtZXJhU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vc3JjL3ZpZXdwb3J0XCI7XG5pbXBvcnQgeyBlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZCwgZW5lbXlUcmFja0lkIH0gZnJvbSBcIi4uLy4uL3NyYy9lbmVteUNhdGFsb2dcIjtcbmltcG9ydCB7IGFwcGx5TGFuZVJ1bm5lclNjZW5lQmFja2dyb3VuZCB9IGZyb20gXCIuLi8uLi9zcmMvc2NlbmVFbnZpcm9ubWVudFwiO1xuXG50eXBlIFBhbGV0dGVGYW1pbHkgPSBcIlN5c3RlbVwiIHwgXCJFbmVtaWVzXCIgfCBcIkd1bnNcIiB8IFwiU2hpZWxkc1wiIHwgXCJTd29yZHNcIiB8IFwiSXRlbXNcIjtcbnR5cGUgUGFsZXR0ZUl0ZW0gPSB7IGlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IHN5bWJvbDogc3RyaW5nOyBmYW1pbHk6IFBhbGV0dGVGYW1pbHkgfTtcbnR5cGUgQ2VsbFZhbHVlID0gUGFsZXR0ZUl0ZW0gJiB7IHNwZWVkOiBudW1iZXI7IG9jY3VwaWVkQnk/OiB7IHJvdzogbnVtYmVyOyBzaWRlOiAwIHwgMTsgY29sdW1uOiBudW1iZXIgfSB9O1xudHlwZSBTZWxlY3Rpb24gPSB7IHJvdzogbnVtYmVyOyBzaWRlOiAwIHwgMTsgY29sdW1uOiBudW1iZXIgfTtcblxuY29uc3QgZGV2ZWxvcGVyID0gd2luZG93Lkp1c3RUaGVHYW1lc1BsZWFzZT8udXJsT3B0aW9ucz8uaXNFbmFibGVkKFwiZGV2XCIpID8/IGZhbHNlO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZWRpdG9yXCIpIS5oaWRkZW4gPSAhZGV2ZWxvcGVyO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZGV2LXJlcXVpcmVkXCIpIS5oaWRkZW4gPSBkZXZlbG9wZXI7XG5cbmNvbnN0IGxhbmVXaWR0aCA9IDU7XG5jb25zdCBkZWZhdWx0Um93Q291bnQgPSAyNTtcbmNvbnN0IGVtcHR5OiBQYWxldHRlSXRlbSA9IHsgaWQ6IFwiZW1wdHlcIiwgbGFiZWw6IFwiRW1wdHlcIiwgc3ltYm9sOiBcIi5cIiwgZmFtaWx5OiBcIlN5c3RlbVwiIH07XG5jb25zdCBwbGF5ZXJTdGFydDogUGFsZXR0ZUl0ZW0gPSB7IGlkOiBcInBsYXllci5zdGFydFwiLCBsYWJlbDogXCJQbGF5ZXIgU3RhcnRcIiwgc3ltYm9sOiBcIlBcIiwgZmFtaWx5OiBcIlN5c3RlbVwiIH07XG5jb25zdCBwYWxldHRlSXRlbXM6IFBhbGV0dGVJdGVtW10gPSBbXG4gIGVtcHR5LFxuICBwbGF5ZXJTdGFydCxcbiAgLi4uT2JqZWN0LmVudHJpZXMob3JiRmFtaWx5Lm1lbWJlcnMpLm1hcCgoW2lkLCBlbmVteV0sIGluZGV4KSA9PiAoe1xuICAgIGlkOiBlbmVteVRyYWNrSWQoaWQgYXMga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzKSxcbiAgICBsYWJlbDogZW5lbXkubGFiZWwsXG4gICAgc3ltYm9sOiBcIkVHV1RBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiW2luZGV4XSxcbiAgICBmYW1pbHk6IFwiRW5lbWllc1wiIGFzIGNvbnN0LFxuICB9KSksXG4gIC4uLk9iamVjdC5lbnRyaWVzKGd1bkZhbWlseS5tZW1iZXJzKS5tYXAoKFtpZCwgZ3VuXSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGBwaWNrdXAud2VhcG9uLmd1bi4ke2lkfWAsXG4gICAgbGFiZWw6IGd1bi5sYWJlbCxcbiAgICBzeW1ib2w6IFwiR0hJSktMTU5PUVJTVFVWV1hZWlwiW2luZGV4XSxcbiAgICBmYW1pbHk6IFwiR3Vuc1wiIGFzIGNvbnN0LFxuICB9KSksXG4gIC4uLk9iamVjdC5lbnRyaWVzKHNoaWVsZEZhbWlseS5tZW1iZXJzKS5tYXAoKFtpZCwgc2hpZWxkXSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGBwaWNrdXAud2VhcG9uLnNoaWVsZC4ke2lkfWAsXG4gICAgbGFiZWw6IHNoaWVsZC5sYWJlbCxcbiAgICBzeW1ib2w6IFwiU0hYXCJbaW5kZXhdLFxuICAgIGZhbWlseTogXCJTaGllbGRzXCIgYXMgY29uc3QsXG4gIH0pKSxcbiAgLi4uT2JqZWN0LmVudHJpZXMoc3dvcmRGYW1pbHkubWVtYmVycykubWFwKChbaWQsIHN3b3JkXSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGBwaWNrdXAud2VhcG9uLnN3b3JkLiR7aWR9YCxcbiAgICBsYWJlbDogc3dvcmQubGFiZWwsXG4gICAgc3ltYm9sOiBcImFiY1wiW2luZGV4XSxcbiAgICBmYW1pbHk6IFwiU3dvcmRzXCIgYXMgY29uc3QsXG4gIH0pKSxcbiAgeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgbGFiZWw6IFwiMnggU3F1YWRcIiwgc3ltYm9sOiBcIjJcIiwgZmFtaWx5OiBcIkl0ZW1zXCIgfSxcbl07XG5jb25zdCBwYWxldHRlQnlJZCA9IG5ldyBNYXAocGFsZXR0ZUl0ZW1zLm1hcChpdGVtID0+IFtpdGVtLmlkLCBpdGVtXSkpO1xuY29uc3QgcGFsZXR0ZUZhbWlsaWVzOiBQYWxldHRlRmFtaWx5W10gPSBbXCJTeXN0ZW1cIiwgXCJFbmVtaWVzXCIsIFwiR3Vuc1wiLCBcIlNoaWVsZHNcIiwgXCJTd29yZHNcIiwgXCJJdGVtc1wiXTtcblxuY29uc3QgYmxhbmtDZWxsID0gKCk6IENlbGxWYWx1ZSA9PiAoeyAuLi5lbXB0eSwgc3BlZWQ6IDEgfSk7XG5jb25zdCBvY2N1cGllZENlbGwgPSAob3duZXI6IFNlbGVjdGlvbik6IENlbGxWYWx1ZSA9PiAoe1xuICAuLi5lbXB0eSxcbiAgaWQ6IFwiX19vY2N1cGllZFwiLFxuICBsYWJlbDogXCJPY2N1cGllZFwiLFxuICBzeW1ib2w6IFwiXCIsXG4gIGZhbWlseTogXCJTeXN0ZW1cIixcbiAgc3BlZWQ6IDEsXG4gIG9jY3VwaWVkQnk6IG93bmVyLFxufSk7XG5jb25zdCBibGFua1JvdyA9ICgpOiBDZWxsVmFsdWVbXVtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogbGFuZVdpZHRoIH0sIGJsYW5rQ2VsbCkpO1xuXG5sZXQgY2VsbHM6IENlbGxWYWx1ZVtdW11bXSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRlZmF1bHRSb3dDb3VudCB9LCBibGFua1Jvdyk7XG5sZXQgc2VsZWN0ZWQ6IFNlbGVjdGlvbiB8IG51bGwgPSB7IHJvdzogY2VsbHMubGVuZ3RoIC0gMSwgc2lkZTogMCwgY29sdW1uOiAwIH07XG5sZXQgc2VsZWN0ZWRJdGVtID0gZW1wdHk7XG5sZXQgdG9vbFJldmlzaW9uID0gMDtcbmxldCBzZWxlY3Rpb25Ub29sUmV2aXNpb24gPSB0b29sUmV2aXNpb247XG5sZXQgZXhwb3J0VmFyaWFibGVOYW1lID0gXCJuZXdUcmFja1wiO1xubGV0IGxvYWRlZExlZ2VuZE9yZGVyOiBzdHJpbmdbXSB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjdHJhY2stZ3JpZFwiKSE7XG5jb25zdCBncmlkUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi5ncmlkLXBhbmVsXCIpITtcbmNvbnN0IHBhbGV0dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNwYWxldHRlXCIpITtcbmNvbnN0IHNwZWVkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2VudGl0eS1zcGVlZFwiKSE7XG5jb25zdCBzZWxlY3Rpb25SZWFkb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjc2VsZWN0aW9uXCIpITtcbmNvbnN0IHRyYWNrU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjdHJhY2stc291cmNlXCIpITtcbmNvbnN0IHNjZW5lU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjc2NlbmUtc2VsZWN0XCIpITtcbmNvbnN0IGdyaWRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZ3JpZC1jb250ZW50XCIpITtcbmNvbnN0IGxhbmVIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLmxhbmUtaGVhZGluZ3NcIikhO1xuY29uc3QgbmVhckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIubmVhci1sYWJlbFwiKSE7XG5jb25zdCBncmlkQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oXCIjZ3JpZC1jYW52YXNcIikhO1xuY29uc3QgZ3JpZFJlbmRlckVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZ3JpZC1yZW5kZXItZXJyb3JcIikhO1xuXG5jb25zdCBpbnB1dCA9IDxUIGV4dGVuZHMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcpOiBUID0+XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4oc2VsZWN0b3IpITtcblxuY29uc3QgY2VsbEF0ID0gKHNlbGVjdGlvbjogU2VsZWN0aW9uKTogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0+XG4gIGdyaWQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtzZWxlY3Rpb24ucm93fVwiXVtkYXRhLXNpZGU9XCIke3NlbGVjdGlvbi5zaWRlfVwiXVtkYXRhLWNvbHVtbj1cIiR7c2VsZWN0aW9uLmNvbHVtbn1cIl1gKTtcblxuZnVuY3Rpb24gcm93Q291bnQoKTogbnVtYmVyIHtcbiAgcmV0dXJuIGNlbGxzLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU2VsZWN0aW9uKCk6IHZvaWQge1xuICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQucm93ID49IHJvd0NvdW50KCkpIHNlbGVjdGVkLnJvdyA9IHJvd0NvdW50KCkgLSAxO1xuICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQucm93IDwgMCkgc2VsZWN0ZWQgPSByb3dDb3VudCgpID4gMCA/IHsgcm93OiAwLCBzaWRlOiAwLCBjb2x1bW46IDAgfSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgbm9ybWFsaXplU2VsZWN0aW9uKCk7XG4gIGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsLnNlbGVjdGVkXCIpLmZvckVhY2goY2VsbCA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG4gIGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi50cmFjay1yb3cuc2VsZWN0ZWQtcm93XCIpLmZvckVhY2gocm93ID0+IHJvdy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtcm93XCIpKTtcbiAgaWYgKCFzZWxlY3RlZCkge1xuICAgIHNlbGVjdGlvblJlYWRvdXQudGV4dENvbnRlbnQgPSBcIlNlbGVjdGVkOiBub25lXCI7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNlbGxBdChzZWxlY3RlZCk/LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10cmFjay1yb3c9XCIke3NlbGVjdGVkLnJvd31cIl1gKT8uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXJvd1wiKTtcbiAgY29uc3QgZGlzdGFuY2UgPSByb3dDb3VudCgpIC0gMSAtIHNlbGVjdGVkLnJvdztcbiAgc2VsZWN0aW9uUmVhZG91dC50ZXh0Q29udGVudCA9IGBTZWxlY3RlZDogcm93ICR7ZGlzdGFuY2UgKyAxfSBmcm9tIHBsYXllciwgJHtzZWxlY3RlZC5zaWRlID09PSAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJ9IGxhbmUsIGNvbHVtbiAke3NlbGVjdGVkLmNvbHVtbiArIDF9YDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2VsbChzZWxlY3Rpb246IFNlbGVjdGlvbik6IHZvaWQge1xuICBjb25zdCB2YWx1ZSA9IGNlbGxzW3NlbGVjdGlvbi5yb3ddW3NlbGVjdGlvbi5zaWRlXVtzZWxlY3Rpb24uY29sdW1uXTtcbiAgY29uc3QgYnV0dG9uID0gY2VsbEF0KHNlbGVjdGlvbik7XG4gIGlmICghYnV0dG9uKSByZXR1cm47XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLnN5bWJvbDtcbiAgYnV0dG9uLmRhdGFzZXQuaWQgPSB2YWx1ZS5pZDtcbiAgYnV0dG9uLnRpdGxlID0gdmFsdWUub2NjdXBpZWRCeVxuICAgID8gYE9jY3VwaWVkIGJ5ICR7Y2VsbHNbdmFsdWUub2NjdXBpZWRCeS5yb3ddW3ZhbHVlLm9jY3VwaWVkQnkuc2lkZV1bdmFsdWUub2NjdXBpZWRCeS5jb2x1bW5dLmxhYmVsfWBcbiAgICA6IGAke3ZhbHVlLmxhYmVsfSR7dmFsdWUuc3BlZWQgPT09IDEgPyBcIlwiIDogYCAtICR7dmFsdWUuc3BlZWR9eCBzcGVlZGB9YDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR3JpZCgpOiB2b2lkIHtcbiAgZ3JpZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd0NvdW50KCk7IHJvdysrKSB7XG4gICAgY29uc3Qgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93RWxlbWVudC5jbGFzc05hbWUgPSBcInRyYWNrLXJvd1wiO1xuICAgIHJvd0VsZW1lbnQuZGF0YXNldC50cmFja1JvdyA9IFN0cmluZyhyb3cpO1xuICAgIHJvd0VsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicm93LW51bWJlclwiPiR7cm93Q291bnQoKSAtIHJvd308L3NwYW4+YDtcbiAgICBmb3IgKGxldCBzaWRlID0gMDsgc2lkZSA8IDI7IHNpZGUrKykge1xuICAgICAgaWYgKHNpZGUgPT09IDEpIHJvd0VsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8c3BhbiBjbGFzcz1cImRpdmlkZXJcIj58PC9zcGFuPmApO1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgbGFuZVdpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcImNlbGxcIjtcbiAgICAgICAgYnV0dG9uLmRhdGFzZXQucm93ID0gU3RyaW5nKHJvdyk7XG4gICAgICAgIGJ1dHRvbi5kYXRhc2V0LnNpZGUgPSBTdHJpbmcoc2lkZSk7XG4gICAgICAgIGJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IFN0cmluZyhjb2x1bW4pO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBgUm93ICR7cm93Q291bnQoKSAtIHJvd30sICR7c2lkZSA9PT0gMCA/IFwibGVmdFwiIDogXCJyaWdodFwifSBsYW5lLCBjb2x1bW4gJHtjb2x1bW4gKyAxfWApO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNlbGVjdENlbGwoeyByb3csIHNpZGU6IHNpZGUgYXMgMCB8IDEsIGNvbHVtbiB9KSk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdGVkID0geyByb3csIHNpZGU6IHNpZGUgYXMgMCB8IDEsIGNvbHVtbiB9O1xuICAgICAgICAgIHNlbGVjdGlvblRvb2xSZXZpc2lvbiA9IHRvb2xSZXZpc2lvbjtcbiAgICAgICAgICBwbGFjZVNlbGVjdGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByb3dFbGVtZW50LmFwcGVuZChidXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgICBncmlkLmFwcGVuZChyb3dFbGVtZW50KTtcbiAgfVxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dDb3VudCgpOyByb3crKykge1xuICAgIGZvciAobGV0IHNpZGUgPSAwOyBzaWRlIDwgMjsgc2lkZSsrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBsYW5lV2lkdGg7IGNvbHVtbisrKSByZW5kZXJDZWxsKHsgcm93LCBzaWRlOiBzaWRlIGFzIDAgfCAxLCBjb2x1bW4gfSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVNlbGVjdGlvbigpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RDZWxsKGNhbmRpZGF0ZTogU2VsZWN0aW9uKTogdm9pZCB7XG4gIGNvbnN0IHNhbWVDZWxsID0gc2VsZWN0ZWQ/LnJvdyA9PT0gY2FuZGlkYXRlLnJvdyAmJiBzZWxlY3RlZC5zaWRlID09PSBjYW5kaWRhdGUuc2lkZSAmJiBzZWxlY3RlZC5jb2x1bW4gPT09IGNhbmRpZGF0ZS5jb2x1bW47XG4gIGlmIChzYW1lQ2VsbCAmJiBzZWxlY3Rpb25Ub29sUmV2aXNpb24gPT09IHRvb2xSZXZpc2lvbikge1xuICAgIHNlbGVjdGVkID0gbnVsbDtcbiAgICB1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICByZXR1cm47XG4gIH1cbiAgc2VsZWN0ZWQgPSBjYW5kaWRhdGU7XG4gIGlmIChzYW1lQ2VsbCAmJiBzZWxlY3Rpb25Ub29sUmV2aXNpb24gIT09IHRvb2xSZXZpc2lvbikgcGxhY2VTZWxlY3RlZCgpO1xuICBzZWxlY3Rpb25Ub29sUmV2aXNpb24gPSB0b29sUmV2aXNpb247XG4gIHVwZGF0ZVNlbGVjdGlvbigpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNlbGVjdGVkKGl0ZW0gPSBzZWxlY3RlZEl0ZW0pOiB2b2lkIHtcbiAgaWYgKCFzZWxlY3RlZCkgcmV0dXJuO1xuICBjbGVhckVudGl0eUF0KHNlbGVjdGVkKTtcbiAgY29uc3Qgc3BhbiA9IGVuZW15RGVmaW5pdGlvbkZyb21UcmFja0lkKGl0ZW0uaWQpPy5kZWZpbml0aW9uLmNvbHVtblNwYW4gPz8gMTtcbiAgaWYgKHNlbGVjdGVkLmNvbHVtbiArIHNwYW4gPiBsYW5lV2lkdGgpIHtcbiAgICBzZWxlY3Rpb25SZWFkb3V0LnRleHRDb250ZW50ID0gYCR7aXRlbS5sYWJlbH0gbmVlZHMgJHtzcGFufSBjb2x1bW5zLiBTZWxlY3QgY29sdW1uICR7bGFuZVdpZHRoIC0gc3BhbiArIDF9IG9yIGVhcmxpZXIuYDtcbiAgICByZW5kZXJHcmlkKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAobGV0IGNvbHVtbiA9IHNlbGVjdGVkLmNvbHVtbjsgY29sdW1uIDwgc2VsZWN0ZWQuY29sdW1uICsgc3BhbjsgY29sdW1uKyspIHtcbiAgICBjbGVhckVudGl0eUF0KHsgLi4uc2VsZWN0ZWQsIGNvbHVtbiB9KTtcbiAgfVxuICBjb25zdCBzcGVlZCA9IE51bWJlcihzcGVlZElucHV0LnZhbHVlKTtcbiAgY2VsbHNbc2VsZWN0ZWQucm93XVtzZWxlY3RlZC5zaWRlXVtzZWxlY3RlZC5jb2x1bW5dID0ge1xuICAgIC4uLml0ZW0sXG4gICAgc3BlZWQ6IE51bWJlci5pc0Zpbml0ZShzcGVlZCkgJiYgc3BlZWQgPiAwID8gc3BlZWQgOiAxLFxuICB9O1xuICBmb3IgKGxldCBjb2x1bW4gPSBzZWxlY3RlZC5jb2x1bW4gKyAxOyBjb2x1bW4gPCBzZWxlY3RlZC5jb2x1bW4gKyBzcGFuOyBjb2x1bW4rKykge1xuICAgIGNlbGxzW3NlbGVjdGVkLnJvd11bc2VsZWN0ZWQuc2lkZV1bY29sdW1uXSA9IG9jY3VwaWVkQ2VsbChzZWxlY3RlZCk7XG4gIH1cbiAgcmVuZGVyR3JpZCgpO1xuICBsb2FkZWRMZWdlbmRPcmRlciA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGVyYXNlU2VsZWN0ZWQoKTogdm9pZCB7XG4gIGlmICghc2VsZWN0ZWQpIHJldHVybjtcbiAgY2xlYXJFbnRpdHlBdChzZWxlY3RlZCk7XG4gIHJlbmRlckdyaWQoKTtcbiAgbG9hZGVkTGVnZW5kT3JkZXIgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjbGVhckVudGl0eUF0KHNlbGVjdGlvbjogU2VsZWN0aW9uKTogdm9pZCB7XG4gIGNvbnN0IGNlbGwgPSBjZWxsc1tzZWxlY3Rpb24ucm93XVtzZWxlY3Rpb24uc2lkZV1bc2VsZWN0aW9uLmNvbHVtbl07XG4gIGNvbnN0IG93bmVyID0gY2VsbC5vY2N1cGllZEJ5ID8/IHNlbGVjdGlvbjtcbiAgY29uc3Qgb3duZXJDZWxsID0gY2VsbHNbb3duZXIucm93XVtvd25lci5zaWRlXVtvd25lci5jb2x1bW5dO1xuICBjb25zdCBzcGFuID0gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQob3duZXJDZWxsLmlkKT8uZGVmaW5pdGlvbi5jb2x1bW5TcGFuID8/IDE7XG4gIGZvciAobGV0IGNvbHVtbiA9IG93bmVyLmNvbHVtbjsgY29sdW1uIDwgTWF0aC5taW4obGFuZVdpZHRoLCBvd25lci5jb2x1bW4gKyBzcGFuKTsgY29sdW1uKyspIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBjZWxsc1tvd25lci5yb3ddW293bmVyLnNpZGVdW2NvbHVtbl07XG4gICAgaWYgKGNvbHVtbiA9PT0gb3duZXIuY29sdW1uIHx8IGNhbmRpZGF0ZS5vY2N1cGllZEJ5Py5yb3cgPT09IG93bmVyLnJvdyAmJiBjYW5kaWRhdGUub2NjdXBpZWRCeS5zaWRlID09PSBvd25lci5zaWRlICYmIGNhbmRpZGF0ZS5vY2N1cGllZEJ5LmNvbHVtbiA9PT0gb3duZXIuY29sdW1uKSB7XG4gICAgICBjZWxsc1tvd25lci5yb3ddW293bmVyLnNpZGVdW2NvbHVtbl0gPSBibGFua0NlbGwoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFsZXR0ZSgpOiB2b2lkIHtcbiAgcGFsZXR0ZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGZvciAoY29uc3QgZmFtaWx5IG9mIHBhbGV0dGVGYW1pbGllcykge1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLm9wZW4gPSBmYW1pbHkgPT09IFwiU3lzdGVtXCIgfHwgZmFtaWx5ID09PSBcIkVuZW1pZXNcIiB8fCBmYW1pbHkgPT09IFwiR3Vuc1wiO1xuICAgIGRldGFpbHMuY2xhc3NOYW1lID0gXCJwYWxldHRlLWZhbWlseVwiO1xuICAgIGRldGFpbHMuaW5uZXJIVE1MID0gYDxzdW1tYXJ5PiR7ZmFtaWx5fTwvc3VtbWFyeT5gO1xuICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncm91cC5jbGFzc05hbWUgPSBcInBhbGV0dGUtaXRlbXNcIjtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcGFsZXR0ZUl0ZW1zLmZpbHRlcihjYW5kaWRhdGUgPT4gY2FuZGlkYXRlLmZhbWlseSA9PT0gZmFtaWx5KSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IGl0ZW0uaWQ7XG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwic3ltYm9sXCI+JHtpdGVtLnN5bWJvbH08L3NwYW4+PHNwYW4+JHtpdGVtLmxhYmVsfTwvc3Bhbj5gO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICAgIHRvb2xSZXZpc2lvbisrO1xuICAgICAgICBwYWxldHRlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChjYW5kaWRhdGUgPT4gY2FuZGlkYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiLCBjYW5kaWRhdGUgPT09IGJ1dHRvbikpO1xuICAgICAgfSk7XG4gICAgICBncm91cC5hcHBlbmQoYnV0dG9uKTtcbiAgICB9XG4gICAgZGV0YWlscy5hcHBlbmQoZ3JvdXApO1xuICAgIHBhbGV0dGUuYXBwZW5kKGRldGFpbHMpO1xuICB9XG4gIHBhbGV0dGUucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKSEuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRSb3cob2Zmc2V0OiAwIHwgMSk6IHZvaWQge1xuICBjb25zdCBpbmRleCA9IHNlbGVjdGVkID8gc2VsZWN0ZWQucm93ICsgb2Zmc2V0IDogcm93Q291bnQoKTtcbiAgY2VsbHMuc3BsaWNlKGluZGV4LCAwLCBibGFua1JvdygpKTtcbiAgc2VsZWN0ZWQgPSB7IHJvdzogaW5kZXgsIHNpZGU6IHNlbGVjdGVkPy5zaWRlID8/IDAsIGNvbHVtbjogc2VsZWN0ZWQ/LmNvbHVtbiA/PyAwIH07XG4gIGxvYWRlZExlZ2VuZE9yZGVyID0gbnVsbDtcbiAgcmVuZGVyR3JpZCgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVTZWxlY3RlZFJvdygpOiB2b2lkIHtcbiAgaWYgKCFzZWxlY3RlZCB8fCByb3dDb3VudCgpIDw9IDEpIHJldHVybjtcbiAgY2VsbHMuc3BsaWNlKHNlbGVjdGVkLnJvdywgMSk7XG4gIHNlbGVjdGVkLnJvdyA9IE1hdGgubWluKHNlbGVjdGVkLnJvdywgcm93Q291bnQoKSAtIDEpO1xuICBsb2FkZWRMZWdlbmRPcmRlciA9IG51bGw7XG4gIHJlbmRlckdyaWQoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJHcmlkKCk6IHZvaWQge1xuICBjZWxscyA9IGNlbGxzLm1hcCgoKSA9PiBibGFua1JvdygpKTtcbiAgbG9hZGVkTGVnZW5kT3JkZXIgPSBudWxsO1xuICByZW5kZXJHcmlkKCk7XG59XG5cbmZ1bmN0aW9uIHNjZW5lSWQoKTogTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gaXNMYW5lUnVubmVyU2NlbmVJZChzY2VuZVNlbGVjdC52YWx1ZSkgPyBzY2VuZVNlbGVjdC52YWx1ZSA6IFwibmVvbkhhbGxcIjtcbn1cblxuZnVuY3Rpb24gc3luY1NjZW5lQmFja2dyb3VuZCgpOiB2b2lkIHtcbiAgYXBwbHlMYW5lUnVubmVyU2NlbmVCYWNrZ3JvdW5kKGdyaWRQYW5lbCwgc2NlbmVJZCgpKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRyYWNrKHRyYWNrOiBUcmFja01lbWJlciwgZXhwb3J0TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGV4cG9ydFZhcmlhYmxlTmFtZSA9IFwiZ2VuZXJhdGVkVHJhY2tcIjtcbiAgbG9hZGVkTGVnZW5kT3JkZXIgPSBPYmplY3Qua2V5cyh0cmFjay5kZWZpbml0aW9uLmxlZ2VuZCk7XG4gIGlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2V4cG9ydC1uYW1lXCIpLnZhbHVlID0gZXhwb3J0VmFyaWFibGVOYW1lO1xuICBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNkaXNwbGF5LW5hbWVcIikudmFsdWUgPSB0cmFjay5sYWJlbDtcbiAgaW5wdXQ8SFRNTFRleHRBcmVhRWxlbWVudD4oXCIjZGVzY3JpcHRpb25cIikudmFsdWUgPSB0cmFjay5kZXNjcmlwdGlvbjtcbiAgaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZW5lbXktaHBcIikudmFsdWUgPSBOdW1iZXIuaXNJbnRlZ2VyKHRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwKSA/IHRyYWNrLmRlZmluaXRpb24uYmFsYW5jZS5lbmVteUhwLnRvRml4ZWQoMSkgOiBTdHJpbmcodHJhY2suZGVmaW5pdGlvbi5iYWxhbmNlLmVuZW15SHApO1xuICBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNlbmVteS1zcGVlZFwiKS52YWx1ZSA9IFN0cmluZyh0cmFjay5kZWZpbml0aW9uLmJhbGFuY2UuZW5lbXlTcGVlZCk7XG4gIHNjZW5lU2VsZWN0LnZhbHVlID0gdHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZDtcbiAgc3luY1NjZW5lQmFja2dyb3VuZCgpO1xuXG4gIGNvbnN0IHBhcnNlZFJvd3MgPSB0cmFjay5kZWZpbml0aW9uLmxheW91dFxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcChyb3cgPT4gcm93LnRyaW0oKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICBjZWxscyA9IHBhcnNlZFJvd3MubWFwKHJvdyA9PiB7XG4gICAgY29uc3QgW2xlZnQgPSBcIlwiLCByaWdodCA9IFwiXCJdID0gcm93LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgcmV0dXJuIFtsZWZ0LCByaWdodF0ubWFwKHNpZGUgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGxhbmVXaWR0aCB9LCAoXywgY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IHNpZGVbY29sdW1uXSA/PyBcIi5cIjtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5kZWZpbml0aW9uLmxlZ2VuZFtzeW1ib2xdID8/IHRyYWNrLmRlZmluaXRpb24ubGVnZW5kW1wiLlwiXSA/PyB7IGlkOiBcImVtcHR5XCIgfTtcbiAgICAgICAgY29uc3QgcGFsZXR0ZUl0ZW0gPSBwYWxldHRlQnlJZC5nZXQoZW50cnkuaWQpID8/IHsgaWQ6IGVudHJ5LmlkLCBsYWJlbDogZW50cnkuaWQsIHN5bWJvbCwgZmFtaWx5OiBcIkl0ZW1zXCIgYXMgY29uc3QgfTtcbiAgICAgICAgcmV0dXJuIHsgLi4ucGFsZXR0ZUl0ZW0sIHN5bWJvbCwgc3BlZWQ6IGVudHJ5LnNwZWVkID8/IDEgfTtcbiAgICAgIH0pLFxuICAgICkgYXMgQ2VsbFZhbHVlW11bXTtcbiAgfSk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGNlbGxzLmxlbmd0aDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBzaWRlID0gMCBhcyAwIHwgMTsgc2lkZSA8IDI7IHNpZGUgPSAoc2lkZSArIDEpIGFzIDAgfCAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBsYW5lV2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBlbmVteURlZmluaXRpb25Gcm9tVHJhY2tJZChjZWxsc1tyb3ddW3NpZGVdW2NvbHVtbl0uaWQpPy5kZWZpbml0aW9uLmNvbHVtblNwYW4gPz8gMTtcbiAgICAgICAgaWYgKHNwYW4gPD0gMSkgY29udGludWU7XG4gICAgICAgIGlmIChjb2x1bW4gKyBzcGFuID4gbGFuZVdpZHRoKSBjb250aW51ZTtcbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMTsgb2Zmc2V0IDwgc3Bhbjsgb2Zmc2V0KyspIGNlbGxzW3Jvd11bc2lkZV1bY29sdW1uICsgb2Zmc2V0XSA9IG9jY3VwaWVkQ2VsbCh7IHJvdywgc2lkZSwgY29sdW1uIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZWxlY3RlZCA9IHsgcm93OiByb3dDb3VudCgpIC0gMSwgc2lkZTogMCwgY29sdW1uOiAwIH07XG4gIHJlbmRlckdyaWQoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhY2tTb3VyY2VzKCk6IHZvaWQge1xuICB0cmFja1NvdXJjZS5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiPk5ldyBibGFuayB0cmFjazwvb3B0aW9uPmAgK1xuICAgIE9iamVjdC5lbnRyaWVzKHRyYWNrRmFtaWx5Lm1lbWJlcnMpXG4gICAgICAubWFwKChbaWQsIHRyYWNrXSkgPT4gYDxvcHRpb24gdmFsdWU9XCIke2lkfVwiPiR7dHJhY2subGFiZWx9PC9vcHRpb24+YClcbiAgICAgIC5qb2luKFwiXCIpO1xuICB0cmFja1NvdXJjZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zdCBpZCA9IHRyYWNrU291cmNlLnZhbHVlIGFzIGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5tZW1iZXJzIHwgXCJcIjtcbiAgICBpZiAoIWlkKSB7XG4gICAgICBjZWxscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRlZmF1bHRSb3dDb3VudCB9LCBibGFua1Jvdyk7XG4gICAgICBleHBvcnRWYXJpYWJsZU5hbWUgPSBcIm5ld1RyYWNrXCI7XG4gICAgICBsb2FkZWRMZWdlbmRPcmRlciA9IG51bGw7XG4gICAgICBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNleHBvcnQtbmFtZVwiKS52YWx1ZSA9IFwibmV3VHJhY2tcIjtcbiAgICAgIGlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2Rpc3BsYXktbmFtZVwiKS52YWx1ZSA9IFwiTmV3IFRyYWNrXCI7XG4gICAgICBpbnB1dDxIVE1MVGV4dEFyZWFFbGVtZW50PihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiQSBoYW5kLWF1dGhvcmVkIE5lb24gU3dhcm0gdHJhY2suXCI7XG4gICAgICBpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNlbmVteS1ocFwiKS52YWx1ZSA9IFwiMVwiO1xuICAgICAgaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZW5lbXktc3BlZWRcIikudmFsdWUgPSBcIjFcIjtcbiAgICAgIHNjZW5lU2VsZWN0LnZhbHVlID0gXCJuZW9uSGFsbFwiO1xuICAgICAgc3luY1NjZW5lQmFja2dyb3VuZCgpO1xuICAgICAgc2VsZWN0ZWQgPSB7IHJvdzogcm93Q291bnQoKSAtIDEsIHNpZGU6IDAsIGNvbHVtbjogMCB9O1xuICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2FkVHJhY2sodHJhY2tGYW1pbHkubWVtYmVyc1tpZF0sIGlkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNjZW5lT3B0aW9ucygpOiB2b2lkIHtcbiAgc2NlbmVTZWxlY3QuaW5uZXJIVE1MID0gbGFuZVJ1bm5lclNjZW5lSWRzXG4gICAgLm1hcChpZCA9PiBgPG9wdGlvbiB2YWx1ZT1cIiR7aWR9XCI+JHtnZXRMYW5lUnVubmVyU2NlbmVOYW1lKGlkKX08L29wdGlvbj5gKVxuICAgIC5qb2luKFwiXCIpO1xuICBzY2VuZVNlbGVjdC52YWx1ZSA9IFwibmVvbkhhbGxcIjtcbiAgc2NlbmVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzeW5jU2NlbmVCYWNrZ3JvdW5kKTtcbiAgc3luY1NjZW5lQmFja2dyb3VuZCgpO1xufVxuXG5jb25zdCBxdW90ZWQgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5jb25zdCBzYWZlSWRlbnRpZmllciA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgY2xlYW5lZCA9IHZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05XyRdL2csIFwiXCIpO1xuICByZXR1cm4gL15bYS16QS1aXyRdLy50ZXN0KGNsZWFuZWQpID8gY2xlYW5lZCA6IGB0cmFjayR7Y2xlYW5lZH1gO1xufTtcblxuZnVuY3Rpb24gZXhwb3J0U291cmNlKCk6IHsgZmlsZU5hbWU6IHN0cmluZzsgc291cmNlOiBzdHJpbmcgfSB7XG4gIGNvbnN0IGV4cG9ydE5hbWUgPSBzYWZlSWRlbnRpZmllcihpbnB1dDxIVE1MSW5wdXRFbGVtZW50PihcIiNleHBvcnQtbmFtZVwiKS52YWx1ZSB8fCBleHBvcnRWYXJpYWJsZU5hbWUgfHwgXCJuZXdUcmFja1wiKTtcbiAgY29uc3Qgc3ltYm9scyA9IFwiLlBFR0hJSktMTU5PUVJTVFVWV1hZWkFCQ0RFRkdISUpLTE1OT1FSU1RVVldYWVoyMzQ1Njc4OVwiLnNwbGl0KFwiXCIpO1xuICBjb25zdCBlbnRyaWVzID0gbmV3IE1hcDxzdHJpbmcsIHsgc3ltYm9sOiBzdHJpbmc7IHZhbHVlOiBDZWxsVmFsdWUgfT4oKTtcbiAgY29uc3QgdXNlZFN5bWJvbHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgZW50cmllcy5zZXQoXCJlbXB0eUAxXCIsIHsgc3ltYm9sOiBcIi5cIiwgdmFsdWU6IGJsYW5rQ2VsbCgpIH0pO1xuICB1c2VkU3ltYm9scy5hZGQoXCIuXCIpO1xuICBjb25zdCBzeW1ib2xGb3IgPSAodmFsdWU6IENlbGxWYWx1ZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHZhbHVlLmlkID09PSBcIl9fb2NjdXBpZWRcIikgcmV0dXJuIFwiLlwiO1xuICAgIGNvbnN0IGtleSA9IGAke3ZhbHVlLmlkfUAke3ZhbHVlLnNwZWVkfWA7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBlbnRyaWVzLmdldChrZXkpO1xuICAgIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nLnN5bWJvbDtcbiAgICBjb25zdCBwcmVmZXJyZWQgPSB2YWx1ZS5zeW1ib2wubGVuZ3RoID09PSAxICYmICEvXFxzfFxcfC8udGVzdCh2YWx1ZS5zeW1ib2wpICYmICF1c2VkU3ltYm9scy5oYXModmFsdWUuc3ltYm9sKSA/IHZhbHVlLnN5bWJvbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzeW1ib2wgPSBwcmVmZXJyZWQgPz8gc3ltYm9scy5maW5kKGNhbmRpZGF0ZSA9PiAhdXNlZFN5bWJvbHMuaGFzKGNhbmRpZGF0ZSkpO1xuICAgIGlmICghc3ltYm9sKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHRyYWNrIHVzZXMgbW9yZSBkaXN0aW5jdCBlbnRpdHkvc3BlZWQgY29tYmluYXRpb25zIHRoYW4gdGhlIG9uZS1jaGFyYWN0ZXIgbGF5b3V0IGNhbiByZXByZXNlbnQuXCIpO1xuICAgIHVzZWRTeW1ib2xzLmFkZChzeW1ib2wpO1xuICAgIGVudHJpZXMuc2V0KGtleSwgeyBzeW1ib2wsIHZhbHVlIH0pO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH07XG4gIGNvbnN0IGxheW91dCA9IGNlbGxzLm1hcChyb3cgPT4gYCR7cm93WzBdLm1hcChzeW1ib2xGb3IpLmpvaW4oXCJcIil9IHwgJHtyb3dbMV0ubWFwKHN5bWJvbEZvcikuam9pbihcIlwiKX1gKS5qb2luKFwiXFxuXCIpO1xuICBjb25zdCBvcmRlcmVkRW50cmllcyA9IFsuLi5lbnRyaWVzLnZhbHVlcygpXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKCFsb2FkZWRMZWdlbmRPcmRlcikgcmV0dXJuIDA7XG4gICAgY29uc3QgYUluZGV4ID0gbG9hZGVkTGVnZW5kT3JkZXIuaW5kZXhPZihhLnN5bWJvbCk7XG4gICAgY29uc3QgYkluZGV4ID0gbG9hZGVkTGVnZW5kT3JkZXIuaW5kZXhPZihiLnN5bWJvbCk7XG4gICAgcmV0dXJuIChhSW5kZXggPCAwID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBhSW5kZXgpIC0gKGJJbmRleCA8IDAgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IGJJbmRleCk7XG4gIH0pO1xuICBjb25zdCBsZWdlbmQgPSBvcmRlcmVkRW50cmllcy5tYXAoKHsgc3ltYm9sLCB2YWx1ZSB9KSA9PlxuICAgIGAgICAgICAke3F1b3RlZChzeW1ib2wpfTogeyBpZDogJHtxdW90ZWQodmFsdWUuaWQpfSR7dmFsdWUuc3BlZWQgPT09IDEgPyBcIlwiIDogYCwgc3BlZWQ6ICR7dmFsdWUuc3BlZWR9YH0gfSxgLFxuICApLmpvaW4oXCJcXG5cIik7XG4gIGNvbnN0IGhwID0gaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZW5lbXktaHBcIikudmFsdWUgfHwgXCIxXCI7XG4gIGNvbnN0IHNwZWVkID0gaW5wdXQ8SFRNTElucHV0RWxlbWVudD4oXCIjZW5lbXktc3BlZWRcIikudmFsdWUgfHwgXCIxXCI7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlTmFtZTogYCR7ZXhwb3J0TmFtZX0udHNgLFxuICAgIHNvdXJjZTogYGltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCAke2V4cG9ydE5hbWV9OiBUcmFja01lbWJlciA9IHtcbiAgbGFiZWw6ICR7cXVvdGVkKGlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2Rpc3BsYXktbmFtZVwiKS52YWx1ZSl9LFxuICBkZXNjcmlwdGlvbjogJHtxdW90ZWQoaW5wdXQ8SFRNTFRleHRBcmVhRWxlbWVudD4oXCIjZGVzY3JpcHRpb25cIikudmFsdWUpfSxcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiAke3F1b3RlZChzY2VuZUlkKCkpfSxcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xuICAgIGxheW91dDogXFxgXG4ke2xheW91dH1cblxcYCxcbiAgICBsZWdlbmQ6IHtcbiR7bGVnZW5kfVxuICAgIH0sXG4gICAgYmFsYW5jZToge1xuICAgICAgZW5lbXlIcDogJHtocH0sXG4gICAgICBlbmVteVNwZWVkOiAke3NwZWVkfSxcbiAgICB9LFxuICB9LFxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG5gLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzeW5jR3JpZENhbnZhc1NpemUoKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgY29uc3Qgb3JpZ2luID0gZ3JpZENvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGJvdW5kcyA9IFtsYW5lSGVhZGluZ3MsIGdyaWQsIG5lYXJMYWJlbF0ubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKE1hdGgubWF4KC4uLmJvdW5kcy5tYXAoYm91bmQgPT4gYm91bmQucmlnaHQgLSBvcmlnaW4ubGVmdCkpKSk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChncmlkUGFuZWwuY2xpZW50SGVpZ2h0KSk7XG4gIGdyaWRDYW52YXMud2lkdGggPSB3aWR0aDtcbiAgZ3JpZENhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGdyaWRDYW52YXMuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gIGdyaWRDYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgZ3JpZENhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2dyaWRQYW5lbC5zY3JvbGxUb3B9cHgpYDtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xufVxuXG5mdW5jdGlvbiBncmlkU2hhcGVzKG5vdzogbnVtYmVyKTogTmVvblRvcERvd25TaGFwZVtdIHtcbiAgY29uc3QgYWN0b3JzID0ge1xuICAgIHBsYXllcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLnBsYXllciB9KSxcbiAgICBndW46IG5ldyBOZW9uU2hhcGVBY3Rvcih7IHNoYXBlOiBzd2FybVNoYXBlcy5ndW5QaWNrdXAgfSksXG4gICAgbXVsdGlwbGllcjogbmV3IE5lb25TaGFwZUFjdG9yKHsgc2hhcGU6IHN3YXJtU2hhcGVzLm11bHRpcGxpZXIgfSksXG4gIH07XG4gIGNvbnN0IGVuZW15QWN0b3JzID0gbmV3IE1hcDxzdHJpbmcsIE5lb25TaGFwZUFjdG9yPigpO1xuICBjb25zdCBjYW52YXNCb3VuZHMgPSBncmlkQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBwYW5lbEJvdW5kcyA9IGdyaWRQYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qgdmlld3BvcnQgPSB7IHdpZHRoOiBncmlkQ2FudmFzLndpZHRoLCBoZWlnaHQ6IGdyaWRDYW52YXMuaGVpZ2h0LCBwbGF5ZXJZOiBncmlkQ2FudmFzLmhlaWdodCB9O1xuICBjb25zdCBoZWxpY29wdGVyVmlld3BvcnQgPSBoZWxpY29wdGVyVmlld3BvcnRGb3Iodmlld3BvcnQud2lkdGgsIHZpZXdwb3J0LmhlaWdodCwgdmlld3BvcnQucGxheWVyWSk7XG4gIGNvbnN0IHNoYXBlczogTmVvblRvcERvd25TaGFwZVtdID0gW107XG4gIGNvbnN0IGNlbGxUdW5pbmcgPSB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBsaW5lVGhpY2tuZXNzOiAuNDgsXG4gICAgZ2xvdzogLjUyLFxuICAgIGVuZXJneUludGVuc2l0eTogLjcsXG4gICAgZW5lcmd5Q292ZXJhZ2U6IC4yNCxcbiAgICBlbmVyZ3lTcGVlZDogLjYsXG4gICAgZW5lcmd5QmxlZWQ6IC4xMixcbiAgfSBzYXRpc2ZpZXMgUGFydGlhbDxOZW9uVG9wRG93blNoYXBlPjtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dDb3VudCgpOyByb3crKykge1xuICAgIGZvciAobGV0IHNpZGUgPSAwIGFzIDAgfCAxOyBzaWRlIDwgMjsgc2lkZSA9IChzaWRlICsgMSkgYXMgMCB8IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGxhbmVXaWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsc1tyb3ddW3NpZGVdW2NvbHVtbl07XG4gICAgICAgIGlmICh2YWx1ZS5pZCA9PT0gXCJlbXB0eVwiIHx8IHZhbHVlLmlkID09PSBcIl9fb2NjdXBpZWRcIikgY29udGludWU7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNlbGxBdCh7IHJvdywgc2lkZSwgY29sdW1uIH0pO1xuICAgICAgICBpZiAoIWJ1dHRvbikgY29udGludWU7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGJvdW5kcy5ib3R0b20gPCBwYW5lbEJvdW5kcy50b3AgfHwgYm91bmRzLnRvcCA+IHBhbmVsQm91bmRzLmJvdHRvbSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGVuZW15RGVmID0gZW5lbXlEZWZpbml0aW9uRnJvbVRyYWNrSWQodmFsdWUuaWQpPy5kZWZpbml0aW9uO1xuICAgICAgICBjb25zdCBzcGFuID0gZW5lbXlEZWY/LmNvbHVtblNwYW4gPz8gMTtcbiAgICAgICAgY29uc3QgbGFzdEJ1dHRvbiA9IHNwYW4gPiAxID8gY2VsbEF0KHsgcm93LCBzaWRlLCBjb2x1bW46IE1hdGgubWluKGxhbmVXaWR0aCAtIDEsIGNvbHVtbiArIHNwYW4gLSAxKSB9KSA6IGJ1dHRvbjtcbiAgICAgICAgY29uc3QgbGFzdEJvdW5kcyA9IGxhc3RCdXR0b24/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpID8/IGJvdW5kcztcbiAgICAgICAgY29uc3Qgc3BhbldpZHRoID0gbGFzdEJvdW5kcy5yaWdodCAtIGJvdW5kcy5sZWZ0O1xuICAgICAgICBjb25zdCB4ID0gKHNwYW4gPiAxID8gYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLyAyIDogYm91bmRzLmxlZnQgKyBzcGFuV2lkdGggLyAyKSAtIGNhbnZhc0JvdW5kcy5sZWZ0O1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLnRvcCAtIGNhbnZhc0JvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0IC8gMjtcbiAgICAgICAgY29uc3QgY2VsbFNpemUgPSBNYXRoLm1pbihib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpICogLjM7XG4gICAgICAgIGNvbnN0IHNpemUgPSBlbmVteURlZiA/IGJvdW5kcy5oZWlnaHQgKiAuMzQgOiBjZWxsU2l6ZTtcbiAgICAgICAgaWYgKHZhbHVlLmlkID09PSBcInBsYXllci5zdGFydFwiKSB7XG4gICAgICAgICAgc2hhcGVzLnB1c2goYWN0b3JJblRvcERvd25TY2VuZShhY3RvcnMucGxheWVyLCB4LCB5LCBzaXplLCB7XG4gICAgICAgICAgICAuLi5wbGF5ZXJPcmllbnRhdGlvbihkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHgsIHksIG5vdywgY29sdW1uKSxcbiAgICAgICAgICAgIC4uLmNlbGxUdW5pbmcsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGVuZW15RGVmKSB7XG4gICAgICAgICAgbGV0IGFjdG9yID0gZW5lbXlBY3RvcnMuZ2V0KHZhbHVlLmlkKTtcbiAgICAgICAgICBpZiAoIWFjdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IGdldE5lb25TaGFwZShlbmVteURlZi5zaGFwZUlkKTtcbiAgICAgICAgICAgIGlmICghc2hhcGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgYWN0b3IgPSBuZXcgTmVvblNoYXBlQWN0b3IoeyBzaGFwZSwgY29sb3I6IG5lb25QYWxldHRlW2VuZW15RGVmLmJhc2VDb2xvcl0gfSk7XG4gICAgICAgICAgICBlbmVteUFjdG9ycy5zZXQodmFsdWUuaWQsIGFjdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0b3IuY29sb3IgPSBuZW9uUGFsZXR0ZVtlbmVteURlZi5iYXNlQ29sb3JdO1xuICAgICAgICAgIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoYWN0b3IsIHgsIHksIHNpemUsIHtcbiAgICAgICAgICAgIC4uLmVuZW15T3JpZW50YXRpb24oZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCB4LCB5LCBub3csIHJvdyksXG4gICAgICAgICAgICAuLi5jZWxsVHVuaW5nLFxuICAgICAgICAgICAgLi4uKHNwYW4gPiAxID8geyB3aWR0aDogTWF0aC5taW4oc3BhbldpZHRoICogLjU4LCBzaXplICogc3BhbiAqIDEuOCksIGhlaWdodDogc2l6ZSB9IDoge30pLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5ndW4uXCIpKSB7XG4gICAgICAgICAgY29uc3QgZ3VuSWQgPSB2YWx1ZS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uZ3VuLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzO1xuICAgICAgICAgIGNvbnN0IGd1biA9IGd1bkZhbWlseS5tZW1iZXJzW2d1bklkXTtcbiAgICAgICAgICBhY3RvcnMuZ3VuLmNvbG9yID0gZ3VuID8gbmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gOiBuZW9uUGFsZXR0ZS5jeWFuO1xuICAgICAgICAgIHNoYXBlcy5wdXNoKGFjdG9ySW5Ub3BEb3duU2NlbmUoYWN0b3JzLmd1biwgeCwgeSwgc2l6ZSwge1xuICAgICAgICAgICAgLi4uYmlsbGJvYXJkT3JpZW50YXRpb24oZGVmYXVsdEhlbGljb3B0ZXJDYW1lcmFTZXR0aW5ncywgaGVsaWNvcHRlclZpZXdwb3J0LCB4LCB5LCBub3cpLFxuICAgICAgICAgICAgLi4uY2VsbFR1bmluZyxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiKSkge1xuICAgICAgICAgIGNvbnN0IHNoaWVsZElkID0gdmFsdWUuaWQuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVycztcbiAgICAgICAgICBjb25zdCBzaGllbGQgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tzaGllbGRJZF07XG4gICAgICAgICAgc2hhcGVzLnB1c2goe1xuICAgICAgICAgICAgLi4uc2hpZWxkUGlja3VwVmlzdWFsKHsgeCwgeSwgbm93LCBjb2xvcjogc2hpZWxkID8gbmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSA6IG5lb25QYWxldHRlLmN5YW4gfSksXG4gICAgICAgICAgICAuLi5jZWxsVHVuaW5nLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiKSkge1xuICAgICAgICAgIGNvbnN0IHN3b3JkSWQgPSB2YWx1ZS5pZC5zbGljZShcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycztcbiAgICAgICAgICBjb25zdCBzd29yZCA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbc3dvcmRJZF07XG4gICAgICAgICAgc2hhcGVzLnB1c2goe1xuICAgICAgICAgICAgLi4uc3dvcmRQaWNrdXBWaXN1YWwoeyB4LCB5LCBub3csIGNvbG9yOiBzd29yZCA/IG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSA6IG5lb25QYWxldHRlLnBpbmsgfSksXG4gICAgICAgICAgICAuLi5jZWxsVHVuaW5nLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSB7XG4gICAgICAgICAgYWN0b3JzLm11bHRpcGxpZXIuY29sb3IgPSBuZW9uUGFsZXR0ZVttdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lLnBpY2t1cENvbG9yXTtcbiAgICAgICAgICBzaGFwZXMucHVzaChhY3RvckluVG9wRG93blNjZW5lKGFjdG9ycy5tdWx0aXBsaWVyLCB4LCB5LCBzaXplLCB7XG4gICAgICAgICAgICAuLi5iaWxsYm9hcmRPcmllbnRhdGlvbihkZWZhdWx0SGVsaWNvcHRlckNhbWVyYVNldHRpbmdzLCBoZWxpY29wdGVyVmlld3BvcnQsIHgsIHksIG5vdyksXG4gICAgICAgICAgICAuLi5jZWxsVHVuaW5nLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2hhcGVzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydEdyaWRSZW5kZXJlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgbGV0IHJlbmRlcmVyOiBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIgfCBudWxsID0gbnVsbDtcbiAgbGV0IHJlbmRlcmVyU2l6ZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICBsZXQgcmVuZGVyZXJSZXF1ZXN0OiBQcm9taXNlPE5lb25Ub3BEb3duU2NlbmVSZW5kZXJlcj4gfCBudWxsID0gbnVsbDtcblxuICB0cnkge1xuICAgIGxldCBmcmFtZSA9IDA7XG4gICAgY29uc3QgZW5zdXJlUmVuZGVyZXIgPSBhc3luYyAoKTogUHJvbWlzZTxOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIgfCBudWxsPiA9PiB7XG4gICAgICBjb25zdCBzaXplID0gc3luY0dyaWRDYW52YXNTaXplKCk7XG4gICAgICBpZiAocmVuZGVyZXIgJiYgcmVuZGVyZXJTaXplLndpZHRoID09PSBzaXplLndpZHRoICYmIHJlbmRlcmVyU2l6ZS5oZWlnaHQgPT09IHNpemUuaGVpZ2h0KSByZXR1cm4gcmVuZGVyZXI7XG4gICAgICBpZiAoIXJlbmRlcmVyUmVxdWVzdCkge1xuICAgICAgICByZW5kZXJlcj8uZGVzdHJveSgpO1xuICAgICAgICByZW5kZXJlclJlcXVlc3QgPSBOZW9uVG9wRG93blNjZW5lUmVuZGVyZXIuY3JlYXRlKGdyaWRDYW52YXMsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KS50aGVuKGNyZWF0ZWQgPT4ge1xuICAgICAgICAgIHJlbmRlcmVyID0gY3JlYXRlZDtcbiAgICAgICAgICByZW5kZXJlclNpemUgPSBzaXplO1xuICAgICAgICAgIHJldHVybiBjcmVhdGVkO1xuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICByZW5kZXJlclJlcXVlc3QgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXJlclJlcXVlc3Q7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXIgPSAobm93OiBudW1iZXIpID0+IHtcbiAgICAgIHZvaWQgZW5zdXJlUmVuZGVyZXIoKS50aGVuKGFjdGl2ZVJlbmRlcmVyID0+IHtcbiAgICAgICAgaWYgKCFhY3RpdmVSZW5kZXJlcikgcmV0dXJuO1xuICAgICAgICBhY3RpdmVSZW5kZXJlci5yZW5kZXIoeyBzaGFwZXM6IGdyaWRTaGFwZXMobm93KSB9LCBub3cgLyAxMDAwKTtcbiAgICAgIH0pLmNhdGNoKGNhdXNlID0+IHtcbiAgICAgICAgZ3JpZFJlbmRlckVycm9yLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICBncmlkUmVuZGVyRXJyb3IudGV4dENvbnRlbnQgPSBjYXVzZSBpbnN0YW5jZW9mIEVycm9yID8gY2F1c2UubWVzc2FnZSA6IFN0cmluZyhjYXVzZSk7XG4gICAgICB9KTtcbiAgICAgIGZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfTtcbiAgICBmcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgICByZW5kZXJlcj8uZGVzdHJveSgpO1xuICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICBncmlkUmVuZGVyRXJyb3IuaGlkZGVuID0gZmFsc2U7XG4gICAgZ3JpZFJlbmRlckVycm9yLnRleHRDb250ZW50ID0gY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlLm1lc3NhZ2UgOiBTdHJpbmcoY2F1c2UpO1xuICB9XG59XG5cbnJlbmRlclNjZW5lT3B0aW9ucygpO1xucmVuZGVyVHJhY2tTb3VyY2VzKCk7XG5yZW5kZXJQYWxldHRlKCk7XG5yZW5kZXJHcmlkKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI3BsYWNlLWNlbGxcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwbGFjZVNlbGVjdGVkKCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjZXJhc2UtY2VsbFwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVyYXNlU2VsZWN0ZWQpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjaW5zZXJ0LXJvdy1mYXJcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBpbnNlcnRSb3coMCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjaW5zZXJ0LXJvdy1uZWFyXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaW5zZXJ0Um93KDEpKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2RlbGV0ZS1yb3dcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVTZWxlY3RlZFJvdyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjbGVhci1ncmlkXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJHcmlkKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2V4cG9ydC10cmFja1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgZXhwb3J0ZWQgPSBleHBvcnRTb3VyY2UoKTtcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbZXhwb3J0ZWQuc291cmNlXSwgeyB0eXBlOiBcInRleHQvdHlwZXNjcmlwdFwiIH0pKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSB1cmw7XG4gIGxpbmsuZG93bmxvYWQgPSBleHBvcnRlZC5maWxlTmFtZTtcbiAgbGluay5jbGljaygpO1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCksIDEwMDApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNleHBvcnQtc3RhdHVzXCIpIS50ZXh0Q29udGVudCA9IGBHZW5lcmF0ZWQgJHtleHBvcnRlZC5maWxlTmFtZX0uIEFkZCBpdCB0byBDb21iYXREZWZpbml0aW9uL3RyYWNrcyBhbmQgcmVnaXN0ZXIgaXQgaW4gdHJhY2tzL2luZGV4LnRzLmA7XG59KTtcblxudm9pZCBzdGFydEdyaWRSZW5kZXJlcigpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEp1c3RUaGVHYW1lc1BsZWFzZT86IHtcbiAgICAgIHVybE9wdGlvbnM/OiB7XG4gICAgICAgIGlzRW5hYmxlZChuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQU8sSUFBTSxjQUFjO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUNaOzs7QUNPQSxJQUFNLFVBQVUsQ0FBQyxPQUFlLFdBQVcsQ0FBQyxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxNQUNwRSxNQUFNLEtBQUssRUFBRSxRQUFRLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUN0QyxRQUFNLFFBQVEsV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQzNDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ3BELENBQUM7QUFFSCxJQUFNLE9BQU8sQ0FBQyxRQUFnQixRQUFR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Q0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxLQUFHLEtBQUksR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDM1AsS0FBSyxVQUFVLHNCQUFzQixzQkFBc0IsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxNQUFJLEdBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssR0FBRSxHQUFHLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDM0wsS0FBSyxVQUFVLHVCQUF1Qix1QkFBdUIsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFHLENBQUMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBTSxLQUFJLEdBQUcsQ0FBQyxPQUFLLEtBQUksR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsUUFBTSxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDOVAsS0FBSyxVQUFVLDBCQUEwQiwwQkFBMEIsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxLQUFHLElBQUcsR0FBRyxDQUFDLE1BQUks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QyxHQUFFLEtBQUksR0FBRSxDQUFDLEtBQUcsR0FBRSxHQUFFLENBQUMsTUFBSSxHQUFFLENBQUMsR0FBRyxNQUFNO0FBQUEsRUFDckgsS0FBSyxXQUFXLGlCQUFpQixTQUFTLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxLQUFLO0FBQUEsRUFDdEssS0FBSyxXQUFXLGlCQUFpQixTQUFTLFNBQVMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLEtBQUcsSUFBRSxHQUFFLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDeEcsS0FBSyxXQUFXLGdCQUFnQixRQUFRLEtBQUssR0FBRSxJQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNsRixLQUFLLFdBQVcsYUFBYSxVQUFVLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsT0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNO0FBQUEsRUFDMUosS0FBSyxXQUFXLGdCQUFnQixRQUFRLENBQUMs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LENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RSxJQUFNLFFBQVEsQ0FBQyxHQUFPLE1BQWMsQ0FBQyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRyxJQUFNLFlBQVksQ0FBQyxNQUFjO0FBQy9CLFFBQU0sU0FBUyxLQUFLLE1BQU0sR0FBRyxDQUFDLEtBQUs7QUFDbkMsU0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsSUFBSSxNQUFNO0FBQ3JEO0FBQ0EsSUFBTSxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFPLElBQVksSUFBWSxPQUFtQjtBQUN4RSxNQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQUcsTUFBSTtBQUFHLE1BQUk7QUFDakcsTUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUFHLE1BQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUFHLE1BQUk7QUFBRyxNQUFJO0FBQzlGLFNBQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUNyRjtBQUVB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1MMUIsU0FBUyxLQUFLQyxNQUErQztBQUMzRCxRQUFNLFFBQVFBLEtBQUksUUFBUSxLQUFLLEVBQUU7QUFDakMsTUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUssRUFBRyxPQUFNLElBQUksTUFBTSwyQ0FBMkNBLElBQUcsSUFBSTtBQUNyRyxTQUFPO0FBQUEsSUFDTCxPQUFPLFNBQVMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSTtBQUFBLElBQ3pDLE9BQU8sU0FBUyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJO0FBQUEsSUFDekMsT0FBTyxTQUFTLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUk7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sd0JBQU4sTUFBTSx1QkFBc0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0E7QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsZUFBeUQ7QUFBQSxFQUV6RCxZQUFZLFFBQTJCLFFBQW1CLFNBQTJCLFFBQTBCO0FBQzdHLFNBQUssU0FBUztBQUNkLFNBQUssU0FBUztBQUNkLFNBQUssV0FBVztBQUNoQixVQUFNLFNBQVMsT0FBTyxtQkFBbUIsRUFBRSxNQUFNRCxRQUFPLENBQUM7QUFDekQsU0FBSyxZQUFZLE9BQU8scUJBQXFCO0FBQUEsTUFDM0MsUUFBUTtBQUFBLE1BQ1IsUUFBUSxFQUFFLFFBQVEsWUFBWSxhQUFhO0FBQUEsTUFDM0MsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBLFlBQVk7QUFBQSxRQUNaLFNBQVMsQ0FBQyxFQUFFLFFBQVEsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLGFBQWEsV0FBVyxNQUFNLEdBQUcsT0FBTyxFQUFFLFdBQVcsT0FBTyxXQUFXLE1BQU0sRUFBRSxFQUFFLENBQUM7QUFBQSxNQUNySTtBQUFBLE1BQ0EsV0FBVyxFQUFFLFVBQVUsZ0JBQWdCO0FBQUEsSUFDekMsQ0FBQztBQUNELFNBQUssZUFBZSxPQUFPLGFBQWEsRUFBRSxNQUFNLElBQUksT0FBTyxlQUFlLFVBQVUsZUFBZSxTQUFTLENBQUM7QUFDN0csU0FBSyxtQkFBbUIsT0FBTyxhQUFhO0FBQUEsTUFDMUMsTUFBTSxnQkFBZ0IscUJBQXFCO0FBQUEsTUFDM0MsT0FBTyxlQUFlLFVBQVUsZUFBZTtBQUFBLElBQ2pELENBQUM7QUFDRCxTQUFLLGFBQWEsT0FBTyxnQkFBZ0I7QUFBQSxNQUN2QyxRQUFRLEtBQUssVUFBVSxtQkFBbUIsQ0FBQztBQUFBLE1BQzNDLFNBQVM7QUFBQSxRQUNQLEVBQUUsU0FBUyxHQUFHLFVBQVUsRUFBRSxRQUFRLEtBQUssYUFBYSxFQUFFO0FBQUEsUUFDdEQsRUFBRSxTQUFTLEdBQUcsVUFBVSxFQUFFLFFBQVEsS0FBSyxpQkFBaUIsRUFBRTtBQUFBLE1BQzVEO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsYUFBYSxPQUFPLFFBQTJEO0FBQzdFLFFBQUksQ0FBQyxVQUFVLElBQUssT0FBTSxJQUFJLE1BQU0scUNBQXFDO0FBQ3pFLFVBQU0sVUFBVSxNQUFNLFVBQVUsSUFBSSxlQUFlO0FBQ25ELFFBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxNQUFNLHlDQUF5QztBQUN2RSxVQUFNLFNBQVMsTUFBTSxRQUFRLGNBQWM7QUFDM0MsVUFBTSxVQUFVLE9BQU8sV0FBVyxRQUFRO0FBQzFDLFFBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxNQUFNLCtDQUErQztBQUM3RSxVQUFNLFNBQVMsVUFBVSxJQUFJLHlCQUF5QjtBQUN0RCxZQUFRLFVBQVUsRUFBRSxRQUFRLFFBQVEsV0FBVyxnQkFBZ0IsQ0FBQztBQUNoRSxXQUFPLElBQUksdUJBQXNCLFFBQVEsUUFBUSxTQUFTLE1BQU07QUFBQSxFQUNsRTtBQUFBLEVBRUEsZUFBZSxPQUFlLFFBQXNCO0FBQ2xELFNBQUssZUFBZSxFQUFFLE9BQU8sT0FBTztBQUNwQyxTQUFLLE9BQU8sUUFBUTtBQUNwQixTQUFLLE9BQU8sU0FBUztBQUNyQixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxZQUE2QixjQUFjLEdBQUcsZ0JBQWdCLE9BQU8sWUFBbUM7QUFDN0csU0FBSyxRQUFRO0FBQ2IsVUFBTSxVQUFVLFdBQVcsTUFBTSxHQUFHLGFBQWE7QUFDakQsVUFBTSxPQUFPLElBQUksYUFBYSxRQUFRLFNBQVMsa0JBQWtCO0FBQ2pFLFlBQVEsUUFBUSxDQUFDLE1BQU0sVUFBVTtBQUMvQixZQUFNLFNBQVMsUUFBUTtBQUN2QixXQUFLLElBQUk7QUFBQSxRQUNQLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFPLEtBQUssVUFBVSxLQUFLO0FBQUEsUUFDaEQsR0FBRyxLQUFLLEtBQUssS0FBSztBQUFBLFFBQ2xCLEdBQUcsS0FBSyxLQUFLLGtCQUFrQixLQUFLLEtBQUs7QUFBQSxRQUN6QyxLQUFLLFFBQVE7QUFBQSxRQUNiLEtBQUssYUFBYTtBQUFBLFFBQ2xCLEtBQUssVUFBVSxRQUFRLElBQUksS0FBSyxVQUFVLFNBQVMsSUFBSSxLQUFLLFVBQVUsYUFBYSxJQUFJLEtBQUssVUFBVSxZQUFZLElBQUksS0FBSyxVQUFVLFVBQVUsSUFBSSxLQUFLLFVBQVUsU0FBUyxJQUFJLEtBQUssVUFBVSxRQUFRLElBQUksS0FBSyxVQUFVLFNBQVMsSUFBSTtBQUFBLFFBQ3RPLEtBQUssWUFBWSxLQUFLLFdBQVc7QUFBQSxRQUNqQyxLQUFLLFlBQVksS0FBSyxnQkFBZ0I7QUFBQSxRQUN0QyxLQUFLLFVBQVUsS0FBSyxrQkFBa0I7QUFBQSxRQUN0QztBQUFBLFFBQ0E7QUFBQSxNQUNGLEdBQUcsTUFBTTtBQUFBLElBQ1gsQ0FBQztBQUNELFNBQUssT0FBTyxNQUFNLFlBQVksS0FBSyxjQUFjLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxPQUFPLE9BQU8sS0FBSyxPQUFPLFFBQVEsUUFBUSxRQUFRLFdBQVcsQ0FBQyxDQUFDO0FBQzFJLFFBQUksS0FBSyxPQUFRLE1BQUssT0FBTyxNQUFNLFlBQVksS0FBSyxrQkFBa0IsR0FBRyxJQUFJO0FBQzdFLFVBQU0sVUFBVSxLQUFLLE9BQU8scUJBQXFCO0FBQ2pELFVBQU0sT0FBTyxRQUFRLGdCQUFnQjtBQUFBLE1BQ25DLGtCQUFrQixDQUFDO0FBQUEsUUFDakIsTUFBTSxjQUFjLEtBQUssU0FBUyxrQkFBa0IsRUFBRSxXQUFXO0FBQUEsUUFDakUsWUFBWSxFQUFFLEdBQUcsTUFBTyxHQUFHLE1BQU8sR0FBRyxPQUFPLEdBQUcsRUFBRTtBQUFBLFFBQ2pELFFBQVEsZ0JBQWdCLFNBQVM7QUFBQSxRQUNqQyxTQUFTO0FBQUEsTUFDWCxDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQ0QsUUFBSSxRQUFRLFFBQVE7QUFDbEIsV0FBSyxZQUFZLEtBQUssU0FBUztBQUMvQixXQUFLLGFBQWEsR0FBRyxLQUFLLFVBQVU7QUFDcEMsV0FBSyxLQUFLLEdBQUcsUUFBUSxNQUFNO0FBQUEsSUFDN0I7QUFDQSxTQUFLLElBQUk7QUFDVCxTQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQzdDO0FBQUEsRUFFQSxVQUFnQjtBQUNkLFFBQUksS0FBSyxjQUFjO0FBQ3JCLFVBQUksS0FBSyxPQUFPLFVBQVUsS0FBSyxhQUFhLE1BQU8sTUFBSyxPQUFPLFFBQVEsS0FBSyxhQUFhO0FBQ3pGLFVBQUksS0FBSyxPQUFPLFdBQVcsS0FBSyxhQUFhLE9BQVEsTUFBSyxPQUFPLFNBQVMsS0FBSyxhQUFhO0FBQzVGO0FBQUEsSUFDRjtBQUNBLFVBQU0sUUFBUSxLQUFLLElBQUksb0JBQW9CLEdBQUcsQ0FBQztBQUMvQyxVQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssT0FBTyxjQUFjLEtBQUssQ0FBQztBQUNyRSxVQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssT0FBTyxlQUFlLEtBQUssQ0FBQztBQUN2RSxRQUFJLEtBQUssT0FBTyxVQUFVLFNBQVMsS0FBSyxPQUFPLFdBQVcsUUFBUTtBQUNoRSxXQUFLLE9BQU8sUUFBUTtBQUNwQixXQUFLLE9BQU8sU0FBUztBQUFBLElBQ3ZCO0FBQUEsRUFDRjtBQUNGOzs7QUN0U0EsSUFBTSxZQUFZO0FBQ2xCLElBQU0saUJBQWlCO0FBRXZCLElBQU0sV0FBNkM7QUFBQSxFQUNqRCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFDSCxVQUFVO0FBQUEsRUFDVixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxTQUFTO0FBQUEsRUFDVCxpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixLQUFLO0FBQ1A7QUFFQSxJQUFNRSxPQUFNLENBQUMsVUFBNEM7QUFDdkQsUUFBTSxNQUFNLE1BQU0sUUFBUSxLQUFLLEVBQUUsRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQzVELFNBQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksV0FBUyxPQUFPLFNBQVMsSUFBSSxNQUFNLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUc7QUFDdEY7QUFRQSxJQUFNLGNBQWMsQ0FBQyxXQUNuQixXQUFXLFNBQVMsSUFBSSxXQUFXLGVBQWUsSUFBSSxXQUFXLFlBQVksSUFBSTtBQUVuRixJQUFNQztBQUFBO0FBQUEsRUFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThHbEIsSUFBTSx5QkFBTixNQUFNLHdCQUF1QjtBQUFBLEVBQ3pCO0FBQUEsRUFDQTtBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxlQUF5RDtBQUFBLEVBRXpELFlBQVksUUFBMkIsUUFBbUIsU0FBMkIsUUFBMEI7QUFDN0csU0FBSyxTQUFTO0FBQVEsU0FBSyxTQUFTO0FBQVEsU0FBSyxXQUFXO0FBQzVELFVBQU0sU0FBUyxPQUFPLG1CQUFtQixFQUFFLE1BQU1DLFNBQVEsT0FBTyw2Q0FBNkMsQ0FBQztBQUM5RyxTQUFLLFlBQVksT0FBTyxxQkFBcUI7QUFBQSxNQUMzQyxRQUFRO0FBQUEsTUFDUixRQUFRLEVBQUUsUUFBUSxZQUFZLGFBQWE7QUFBQSxNQUMzQyxVQUFVLEVBQUUsUUFBUSxZQUFZLGdCQUFnQixTQUFTLENBQUMsRUFBRSxRQUFRLE9BQU87QUFBQSxRQUN6RSxPQUFPLEVBQUUsV0FBVyxPQUFPLFdBQVcsdUJBQXVCLFdBQVcsTUFBTTtBQUFBLFFBQzlFLE9BQU8sRUFBRSxXQUFXLE9BQU8sV0FBVyx1QkFBdUIsV0FBVyxNQUFNO0FBQUEsTUFDaEYsRUFBRSxDQUFDLEVBQUU7QUFBQSxNQUNMLFdBQVcsRUFBRSxVQUFVLGdCQUFnQjtBQUFBLElBQ3pDLENBQUM7QUFDRCxTQUFLLFdBQVcsT0FBTyxhQUFhLEVBQUUsTUFBTSxJQUFJLE9BQU8sZUFBZSxVQUFVLGVBQWUsU0FBUyxDQUFDO0FBQ3pHLFNBQUssVUFBVSxPQUFPLGFBQWEsRUFBRSxNQUFNLFlBQVksaUJBQWlCLEdBQUcsT0FBTyxlQUFlLFVBQVUsZUFBZSxTQUFTLENBQUM7QUFDcEksU0FBSyxRQUFRLE9BQU8sZ0JBQWdCLEVBQUUsUUFBUSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsR0FBRyxTQUFTO0FBQUEsTUFDM0YsRUFBRSxTQUFTLEdBQUcsVUFBVSxFQUFFLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFBQSxNQUNsRCxFQUFFLFNBQVMsR0FBRyxVQUFVLEVBQUUsUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUFBLElBQ25ELEVBQUUsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUVBLGFBQWEsT0FBTyxRQUE0RDtBQUM5RSxRQUFJLENBQUMsVUFBVSxJQUFLLE9BQU0sSUFBSSxNQUFNLHFEQUFxRDtBQUN6RixVQUFNLFVBQVUsTUFBTSxVQUFVLElBQUksZUFBZTtBQUNuRCxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSx5Q0FBeUM7QUFDdkUsVUFBTSxTQUFTLE1BQU0sUUFBUSxjQUFjO0FBQzNDLFVBQU0sVUFBVSxPQUFPLFdBQVcsUUFBUTtBQUMxQyxRQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSwyQ0FBMkM7QUFDekUsVUFBTSxTQUFTLFVBQVUsSUFBSSx5QkFBeUI7QUFDdEQsWUFBUSxVQUFVLEVBQUUsUUFBUSxRQUFRLFdBQVcsZ0JBQWdCLENBQUM7QUFDaEUsV0FBTyxJQUFJLHdCQUF1QixRQUFRLFFBQVEsU0FBUyxNQUFNO0FBQUEsRUFDbkU7QUFBQSxFQUVBLGVBQWUsT0FBZSxRQUFzQjtBQUNsRCxTQUFLLGVBQWUsRUFBRSxPQUFPLE9BQU87QUFDcEMsU0FBSyxPQUFPLFFBQVE7QUFDcEIsU0FBSyxPQUFPLFNBQVM7QUFDckIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLE9BQU8sUUFBMkMsY0FBYyxZQUFZLElBQUksSUFBSSxLQUFNLGdCQUFnQixPQUFPLFlBQW1DO0FBQ2xKLFNBQUssUUFBUTtBQUNiLFVBQU0sU0FBUyxJQUFJLGFBQWEsWUFBWSxjQUFjO0FBQzFELFdBQU8sTUFBTSxHQUFHLFNBQVMsRUFBRSxRQUFRLENBQUMsT0FBTyxVQUFVO0FBQ25ELFlBQU1DLEtBQUksRUFBRSxHQUFHLFVBQVUsR0FBRyxNQUFNO0FBQ2xDLFlBQU0sUUFBUUMsS0FBSUQsR0FBRSxLQUFLLEdBQUcsT0FBT0MsS0FBSUQsR0FBRSxTQUFTO0FBQ2xELFlBQU0sU0FBUyxRQUFRO0FBQ3ZCLGFBQU8sSUFBSSxDQUFDQSxHQUFFLEdBQUdBLEdBQUUsR0FBR0EsR0FBRSxRQUFRQSxHQUFFLFFBQVFBLEdBQUUsT0FBTyxHQUFHQSxHQUFFLGlCQUFpQkEsR0FBRSxNQUFNQSxHQUFFLFVBQVVBLEdBQUUsTUFBTSxZQUFZQSxHQUFFLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDcEosYUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUdBLEdBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsR0FBRSxlQUFlQSxHQUFFLFFBQVFBLEdBQUUsWUFBWUEsR0FBRSxjQUFjQSxHQUFFLE9BQU8sR0FBRyxTQUFTLEVBQUU7QUFBQSxJQUMvSixDQUFDO0FBQ0QsU0FBSyxPQUFPLE1BQU0sWUFBWSxLQUFLLFNBQVMsR0FBRyxNQUFNO0FBQ3JELFNBQUssT0FBTyxNQUFNLFlBQVksS0FBSyxVQUFVLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLFFBQVEsYUFBYSxLQUFLLElBQUksT0FBTyxRQUFRLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5SixVQUFNLFVBQVUsS0FBSyxPQUFPLHFCQUFxQjtBQUNqRCxVQUFNLE9BQU8sUUFBUSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQztBQUFBLE1BQ3hELE1BQU0sY0FBYyxLQUFLLFNBQVMsa0JBQWtCLEVBQUUsV0FBVztBQUFBLE1BQ2pFLFlBQVksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxNQUNyQyxRQUFRLGdCQUFnQixTQUFTO0FBQUEsTUFDakMsU0FBUztBQUFBLElBQ1gsQ0FBQyxFQUFFLENBQUM7QUFDSixTQUFLLFlBQVksS0FBSyxTQUFTO0FBQy9CLFNBQUssYUFBYSxHQUFHLEtBQUssS0FBSztBQUMvQixTQUFLLEtBQUssR0FBRyxLQUFLLElBQUksT0FBTyxRQUFRLFNBQVMsQ0FBQztBQUMvQyxTQUFLLElBQUk7QUFDVCxTQUFLLE9BQU8sTUFBTSxPQUFPLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQzdDO0FBQUEsRUFFQSxnQkFBZ0IsT0FBOEIsY0FBc0IsZUFBK0M7QUFDakgsVUFBTSxTQUFTLGVBQWU7QUFDOUIsV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsSUFBSSxNQUFNLElBQUksZUFBZSxPQUFNLFNBQVM7QUFBQSxNQUM1QyxJQUFJLE1BQUssTUFBTSxJQUFJLGlCQUFpQjtBQUFBLE1BQ3BDLE1BQU0sTUFBTSxPQUFPLGdCQUFnQjtBQUFBLE1BQ25DLFNBQVMsTUFBTSxVQUFVLEtBQUssZUFBZSxTQUFTO0FBQUEsTUFDdEQsUUFBUSxFQUFFLE1BQU0sVUFBVSxLQUFLLGdCQUFnQjtBQUFBLElBQ2pEO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUSxnQkFBZ0IsTUFBWTtBQUNsQyxTQUFLLFFBQVEsUUFBUTtBQUNyQixTQUFLLFNBQVMsUUFBUTtBQUN0QixRQUFJLGNBQWUsTUFBSyxPQUFPLFFBQVE7QUFBQSxFQUN6QztBQUFBLEVBRUEsVUFBZ0I7QUFDZCxRQUFJLEtBQUssY0FBYztBQUNyQixVQUFJLEtBQUssT0FBTyxVQUFVLEtBQUssYUFBYSxNQUFPLE1BQUssT0FBTyxRQUFRLEtBQUssYUFBYTtBQUN6RixVQUFJLEtBQUssT0FBTyxXQUFXLEtBQUssYUFBYSxPQUFRLE1BQUssT0FBTyxTQUFTLEtBQUssYUFBYTtBQUM1RjtBQUFBLElBQ0Y7QUFDQSxVQUFNLFFBQVEsS0FBSyxJQUFJLG9CQUFvQixHQUFHLENBQUM7QUFDL0MsU0FBSyxPQUFPLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssT0FBTyxjQUFjLEtBQUssQ0FBQztBQUMzRSxTQUFLLE9BQU8sU0FBUyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sS0FBSyxPQUFPLGVBQWUsS0FBSyxDQUFDO0FBQUEsRUFDL0U7QUFDRjs7O0FDeFFPLElBQU0sMkJBQU4sTUFBTSwwQkFBeUI7QUFBQSxFQUMzQjtBQUFBLEVBQ0E7QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVRLFlBQVksUUFBMkIsUUFBbUIsU0FBMkIsUUFBMEIsT0FBZSxRQUFnQjtBQUNwSixTQUFLLFNBQVM7QUFBUSxTQUFLLFNBQVM7QUFBUSxTQUFLLFdBQVc7QUFBUyxTQUFLLFNBQVM7QUFBTyxTQUFLLFVBQVU7QUFDekcsU0FBSyxjQUFjLElBQUksc0JBQXNCLFFBQVEsUUFBUSxTQUFTLE1BQU0sRUFBRSxlQUFlLE9BQU8sTUFBTTtBQUMxRyxTQUFLLFVBQVUsSUFBSSx1QkFBdUIsUUFBUSxRQUFRLFNBQVMsTUFBTSxFQUFFLGVBQWUsT0FBTyxNQUFNO0FBQ3ZHLFNBQUssVUFBVSxJQUFJLDJCQUEyQixRQUFRLFFBQVEsU0FBUyxNQUFNLEVBQUUsZUFBZSxPQUFPLE1BQU07QUFBQSxFQUM3RztBQUFBLEVBRUEsYUFBYSxPQUFPLFFBQTJCLGNBQXNCLGVBQTBEO0FBQzdILFFBQUksQ0FBQyxVQUFVLElBQUssT0FBTSxJQUFJLE1BQU0scURBQXFEO0FBQ3pGLFVBQU0sVUFBVSxNQUFNLFVBQVUsSUFBSSxlQUFlO0FBQ25ELFFBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxNQUFNLHlDQUF5QztBQUN2RSxVQUFNLFNBQVMsTUFBTSxRQUFRLGNBQWM7QUFDM0MsVUFBTSxVQUFVLE9BQU8sV0FBVyxRQUFRO0FBQzFDLFFBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxNQUFNLDJDQUEyQztBQUN6RSxVQUFNLFNBQVMsVUFBVSxJQUFJLHlCQUF5QjtBQUN0RCxZQUFRLFVBQVUsRUFBRSxRQUFRLFFBQVEsV0FBVyxnQkFBZ0IsQ0FBQztBQUNoRSxXQUFPLElBQUksMEJBQXlCLFFBQVEsUUFBUSxTQUFTLFFBQVEsY0FBYyxhQUFhO0FBQUEsRUFDbEc7QUFBQSxFQUVBLE9BQU8sT0FBeUIsY0FBYyxZQUFZLElBQUksSUFBSSxLQUFZO0FBQzVFLFVBQU0sU0FBUyxLQUFLLFNBQVMsa0JBQWtCLEVBQUUsV0FBVztBQUM1RCxTQUFLLFlBQVksT0FBTyxDQUFDLEdBQUksTUFBTSxjQUFjLENBQUMsQ0FBRSxHQUFHLGFBQWEsT0FBTyxNQUFNO0FBQ2pGLFVBQU0sU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxVQUFNLFNBQVMsS0FBSyxTQUFTLEtBQUs7QUFDbEMsVUFBTSxTQUFTLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLFFBQUksT0FBTyxPQUFRLE1BQUssUUFBUSxPQUFPLE9BQU8sSUFBSSxZQUFVO0FBQUEsTUFDMUQsR0FBRztBQUFBLE1BQ0gsSUFBSSxNQUFNLElBQUksS0FBSyxTQUFTLE9BQU0sU0FBUztBQUFBLE1BQzNDLElBQUksTUFBSyxNQUFNLElBQUksS0FBSyxXQUFXO0FBQUEsTUFDbkMsUUFBUSxNQUFNLFVBQVUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQ3JELFNBQVMsTUFBTSxVQUFVLE9BQU8sTUFBTSxTQUFTLE1BQU0sU0FBUyxNQUFNLFVBQVUsTUFBTTtBQUFBLElBQ3RGLEVBQUUsR0FBRyxNQUFNLE1BQU07QUFDakIsUUFBSSxPQUFPLE9BQVEsTUFBSyxRQUFRLE9BQU8sT0FBTyxJQUFJLFdBQVMsS0FBSyxRQUFRLGdCQUFnQixPQUFPLEtBQUssUUFBUSxLQUFLLE9BQU8sQ0FBQyxHQUFHLGFBQWEsSUFBSTtBQUFBLEVBQy9JO0FBQUEsRUFFQSxVQUFnQjtBQUNkLFNBQUssUUFBUSxRQUFRLEtBQUs7QUFDMUIsU0FBSyxRQUFRLFFBQVEsS0FBSztBQUMxQixTQUFLLE9BQU8sUUFBUTtBQUFBLEVBQ3RCO0FBQ0Y7OztBQ2hFTyxJQUFNLHFCQUFxQixDQUFDLFlBQVksVUFBVSxnQkFBZ0IsY0FBYyxZQUFZO0FBV25HLElBQU0sYUFBZ0Q7QUFBQSxFQUNwRCxVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixZQUFZO0FBQ2Q7QUFpRU8sU0FBUyx1QkFBdUJFLFVBQW9DO0FBQ3pFLFNBQU8sV0FBV0EsUUFBTztBQUMzQjtBQUVPLFNBQVMsb0JBQW9CLE9BQTJDO0FBQzdFLFNBQVEsbUJBQXlDLFNBQVMsS0FBSztBQUNqRTs7O0FDcEZPLElBQU0sZUFBZTtBQUFBLEVBQzFCLHVCQUF1QjtBQUN6QjtBQUVBLElBQUksQ0FBQyxPQUFPLFNBQVMsYUFBYSxxQkFBcUIsS0FBSyxhQUFhLHlCQUF5QixHQUFHO0FBQ25HLFFBQU0sSUFBSSxNQUFNLHVFQUF1RTtBQUN6Rjs7O0FDZE8sSUFBZSxtQkFBZixNQUEwRTtBQUFBLEVBS3JFLFFBQVEsV0FBb0IsU0FBb0M7QUFDeEUsUUFBSSxDQUFDLFVBQVcsT0FBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLFFBQVEsS0FBSyxPQUFPLEVBQUU7QUFBQSxFQUNoRTtBQUdGOzs7QUM4Q0EsSUFBTSxRQUFRLENBQ1osYUFDQSxZQUVjO0FBQUEsRUFDZCxPQUFPO0FBQUEsRUFDUCxpQkFBaUI7QUFBQSxFQUNqQixZQUFZO0FBQUEsRUFDWixpQkFBaUI7QUFBQSxFQUNqQixlQUFlO0FBQUEsRUFDZixRQUFRO0FBQUEsRUFDUixvQkFBb0I7QUFBQSxFQUNwQixXQUFXO0FBQUEsRUFDWCxHQUFHO0FBQ0w7QUFFTyxJQUFNLHNCQUFOLGNBQWtDLGlCQUE0QztBQUFBLEVBQzFFLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLGlCQUFpQjtBQUFBLElBQ3hCLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLGlCQUFpQjtBQUFBLElBQ2pCLGdCQUFnQjtBQUFBLElBQ2hCLHFCQUFxQixDQUFDLFVBQVUsZUFBZSxTQUFTLGVBQWUsY0FBYztBQUFBLElBQ3JGLDRCQUE0QixDQUFDLFlBQVksa0JBQWtCO0FBQUEsRUFDN0Q7QUFBQSxFQUVTLFVBQVU7QUFBQSxJQUNqQixhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFBZ0IsUUFBUTtBQUFBLE1BQVcsYUFBYTtBQUFBLE1BQVMsYUFBYTtBQUFBLE1BQVUsb0JBQW9CO0FBQUEsTUFDM0csZ0JBQWdCLEVBQUUsWUFBWSxjQUFjLGdCQUFnQixtQkFBbUIsaUJBQWlCLFFBQVEsaUJBQWlCLFFBQVEsWUFBWSxZQUFZLFdBQVcsUUFBUSxrQkFBa0IsS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsS0FBSyxjQUFjLGFBQWEsY0FBYyxZQUFZLGtCQUFrQixJQUFJLGtCQUFrQixLQUFLLGtCQUFrQixFQUFFO0FBQUEsTUFDdFcsUUFBUTtBQUFBLFFBQ04sTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxHQUFFLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLFFBQ3RJLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSyxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxhQUFZLElBQUcsa0JBQWlCLEtBQUcsZUFBYyxJQUFFLENBQUM7QUFBQSxRQUN2SSxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUssaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsSUFBRSxDQUFDO0FBQUEsTUFDN0k7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFBZSxRQUFRO0FBQUEsTUFBVSxhQUFhO0FBQUEsTUFBYyxhQUFhO0FBQUEsTUFBZSxvQkFBb0I7QUFBQSxNQUNuSCxnQkFBZ0IsRUFBRSxZQUFZLGVBQWUsZ0JBQWdCLHlCQUF5QixpQkFBaUIsVUFBVSxpQkFBaUIsU0FBUyxZQUFZLFFBQVEsV0FBVyxTQUFTLGtCQUFrQixHQUFHLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLGNBQWMsZ0JBQWdCLGNBQWMsaUJBQWlCLGtCQUFrQixJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixFQUFFO0FBQUEsTUFDblgsUUFBUTtBQUFBLFFBQ04sTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLGVBQWMsR0FBRSxhQUFZLElBQUcsb0JBQW1CLEdBQUUsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxRQUM3SyxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUksaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsZUFBYyxLQUFJLGFBQVksSUFBRyxvQkFBbUIsR0FBRSxrQkFBaUIsS0FBRyxlQUFjLElBQUUsQ0FBQztBQUFBLFFBQzdLLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxlQUFjLEdBQUUsYUFBWSxJQUFHLG9CQUFtQixHQUFFLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsTUFDbEw7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFBaUIsUUFBUTtBQUFBLE1BQVUsYUFBYTtBQUFBLE1BQWMsYUFBYTtBQUFBLE1BQVMsb0JBQW9CO0FBQUEsTUFDL0csZ0JBQWdCLEVBQUUsWUFBWSxxQkFBcUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsUUFBUSxpQkFBaUIsUUFBUSxZQUFZLFVBQVUsV0FBVyxRQUFRLGtCQUFrQixLQUFLLGlCQUFpQixLQUFLLGlCQUFpQixNQUFNLGNBQWMsZ0JBQWdCLGNBQWMsY0FBYyxrQkFBa0IsSUFBSSxrQkFBa0IsS0FBSyxrQkFBa0IsRUFBRTtBQUFBLE1BQzlXLFFBQVE7QUFBQSxRQUNOLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFJLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxZQUFXLEdBQUUsaUJBQWdCLElBQUcsZUFBYyxNQUFJLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLFFBQzVMLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxZQUFXLEdBQUUsaUJBQWdCLElBQUcsZUFBYyxNQUFJLGFBQVksSUFBRyxrQkFBaUIsS0FBRyxlQUFjLElBQUUsQ0FBQztBQUFBLFFBQzNMLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sS0FBRyxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxZQUFXLEdBQUUsaUJBQWdCLElBQUcsZUFBYyxHQUFFLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLE1BQ3pMO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQWdCLFFBQVE7QUFBQSxNQUFZLGFBQWE7QUFBQSxNQUFZLGFBQWE7QUFBQSxNQUFlLG9CQUFvQjtBQUFBLE1BQ3BILGdCQUFnQixFQUFFLFlBQVksY0FBYyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixRQUFRLGlCQUFpQixVQUFVLFlBQVksT0FBTyxXQUFXLFFBQVEsa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLEtBQUssY0FBYyxnQkFBZ0IsY0FBYyxjQUFjLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLLGtCQUFrQixFQUFFO0FBQUEsTUFDelcsUUFBUTtBQUFBLFFBQ04sTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUksUUFBTyxLQUFJLGlCQUFnQixLQUFJLGtCQUFpQixLQUFJLFFBQU8sR0FBRSxhQUFZLElBQUcsY0FBYSxJQUFHLFdBQVUsSUFBRyxrQkFBaUIsS0FBSSxlQUFjLEtBQUksQ0FBQztBQUFBLFFBQ2hMLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFJLFFBQU8sR0FBRSxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxRQUFPLEdBQUUsYUFBWSxJQUFHLGNBQWEsSUFBRyxXQUFVLElBQUcsa0JBQWlCLEtBQUksZUFBYyxLQUFJLENBQUM7QUFBQSxRQUMvSyxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsS0FBRyxRQUFPLEtBQUksaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsUUFBTyxHQUFFLGFBQVksSUFBRyxjQUFhLElBQUcsV0FBVSxJQUFHLGtCQUFpQixLQUFJLGVBQWMsSUFBRyxDQUFDO0FBQUEsTUFDOUs7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFBa0IsUUFBUTtBQUFBLE1BQVksYUFBYTtBQUFBLE1BQVksYUFBYTtBQUFBLE1BQWdCLG9CQUFvQjtBQUFBLE1BQ3ZILGdCQUFnQixFQUFFLFlBQVksY0FBYyxnQkFBZ0IsbUJBQW1CLGlCQUFpQixhQUFhLGlCQUFpQixVQUFVLFlBQVksUUFBUSxXQUFXLFVBQVUsa0JBQWtCLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLEdBQUcsY0FBYyxjQUFjLGNBQWMsZUFBZSxrQkFBa0IsSUFBSSxrQkFBa0IsS0FBSyxrQkFBa0IsRUFBRTtBQUFBLE1BQzdXLFFBQVE7QUFBQSxRQUNOLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sS0FBRyxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxpQkFBZ0IsR0FBRSxlQUFjLEtBQUksYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDOUssTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLGlCQUFnQixHQUFFLGVBQWMsR0FBRSxhQUFZLElBQUcsa0JBQWlCLEtBQUcsZUFBYyxJQUFFLENBQUM7QUFBQSxRQUMzSyxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUssaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsaUJBQWdCLEdBQUUsZUFBYyxLQUFJLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLE1BQy9LO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksR0FBRyxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUNwRCxXQUFLLFFBQVEsS0FBSyxlQUFlLG9CQUFvQixTQUFTLElBQUksV0FBVyxHQUFHLEdBQUcsRUFBRSxtQ0FBbUM7QUFDeEgsV0FBSyxRQUFRLEtBQUssZUFBZSwyQkFBMkIsU0FBUyxJQUFJLGtCQUFrQixHQUFHLEdBQUcsRUFBRSwwQ0FBMEM7QUFDN0ksV0FBSyxRQUFRLFlBQVksSUFBSSxlQUFlLGVBQWUsTUFBTSxRQUFXLEdBQUcsRUFBRSxtQ0FBbUM7QUFDcEgsV0FBSyxRQUFRLFlBQVksSUFBSSxlQUFlLFVBQVUsTUFBTSxRQUFXLEdBQUcsRUFBRSw4QkFBOEI7QUFDMUcsV0FBSyxRQUFRLElBQUksZUFBZSxtQkFBbUIsS0FBSyxJQUFJLGVBQWUsbUJBQW1CLEdBQUcsR0FBRyxFQUFFLHFDQUFxQztBQUMzSSxXQUFLLFFBQVEsSUFBSSxPQUFPLFNBQVMsR0FBRyxHQUFHLEVBQUUsc0JBQXNCO0FBQy9ELGlCQUFXLFVBQVUsSUFBSSxRQUFRO0FBQy9CLGFBQUssUUFBUSxPQUFPLG9CQUFvQixHQUFHLEdBQUcsRUFBRSxVQUFVLE9BQU8sS0FBSyw4QkFBOEI7QUFDcEcsYUFBSyxRQUFRLE9BQU8sU0FBUyxLQUFLLE9BQU8sa0JBQWtCLEtBQUssT0FBTyxtQkFBbUIsR0FBRyxHQUFHLEVBQUUsVUFBVSxPQUFPLEtBQUssZ0NBQWdDO0FBQ3hKLGFBQUssUUFBUSxPQUFPLGNBQWMsS0FBSyxPQUFPLG1CQUFtQixHQUFHLEdBQUcsRUFBRSxVQUFVLE9BQU8sS0FBSyxzQkFBc0I7QUFBQSxNQUN2SDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLFlBQVksSUFBSSxvQkFBb0I7OztBQ3pIMUMsSUFBTSxzQkFBTixjQUFrQyxpQkFBNEM7QUFBQSxFQUMxRSxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsSUFDakIsVUFBVTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsb0JBQW9CO0FBQUEsTUFDcEIsaUJBQWlCO0FBQUEsTUFDakIsV0FBVztBQUFBLE1BQ1gsa0JBQWtCO0FBQUEsTUFDbEIsb0JBQW9CO0FBQUEsTUFDcEIsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLG9CQUFvQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLE1BQ2pCLFdBQVc7QUFBQSxNQUNYLGtCQUFrQjtBQUFBLE1BQ2xCLG9CQUFvQjtBQUFBLE1BQ3BCLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixpQkFBaUI7QUFBQSxNQUNqQixXQUFXO0FBQUEsTUFDWCxrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxNQUNwQixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsb0JBQW9CO0FBQUEsTUFDcEIsaUJBQWlCO0FBQUEsTUFDakIsV0FBVztBQUFBLE1BQ1gsa0JBQWtCO0FBQUEsTUFDbEIsb0JBQW9CO0FBQUEsTUFDcEIsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDcEQsV0FBSyxRQUFRLElBQUksU0FBUyxHQUFHLEdBQUcsRUFBRSwyQkFBMkI7QUFDN0QsV0FBSyxRQUFRLElBQUksUUFBUSxHQUFHLEdBQUcsRUFBRSwwQkFBMEI7QUFDM0QsV0FBSyxRQUFRLElBQUksU0FBUyxHQUFHLEdBQUcsRUFBRSwyQkFBMkI7QUFDN0QsV0FBSyxRQUFRLE9BQU8sVUFBVSxJQUFJLFVBQVUsS0FBSyxJQUFJLGNBQWMsR0FBRyxHQUFHLEVBQUUseUNBQXlDO0FBQ3BILFdBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxJQUFJLGdCQUFnQixHQUFHLEdBQUcsRUFBRSx5Q0FBeUM7QUFDbkcsV0FBSyxRQUFRLElBQUksa0JBQWtCLEtBQUssSUFBSSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsc0NBQXNDO0FBQUEsSUFDOUc7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLFlBQVksSUFBSSxvQkFBb0I7OztBQ2hKMUMsSUFBTSw2QkFBTixjQUF5QyxpQkFBbUQ7QUFBQSxFQUN4RixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsSUFDakIsY0FBYztBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFFQSxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLElBQUksS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDckQsV0FBSyxRQUFRLEtBQUssYUFBYSxHQUFHLEdBQUcsRUFBRSwwQkFBMEI7QUFDakUsV0FBSyxRQUFRLEtBQUssZ0JBQWdCLEtBQUssZUFBZSxHQUFHLEVBQUUsdUNBQXVDO0FBQ2xHLFdBQUssUUFBUSxLQUFLLGVBQWUsS0FBSyxLQUFLLFVBQVUsS0FBSyxlQUFlLEdBQUcsR0FBRyxFQUFFLDRCQUE0QjtBQUM3RyxXQUFLLFFBQVEsWUFBWSxLQUFLLFdBQVcsTUFBTSxRQUFXLEdBQUcsRUFBRSwrQkFBK0I7QUFBQSxJQUNoRztBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sbUJBQW1CLElBQUksMkJBQTJCOzs7QUN2QnhELElBQU0seUJBQU4sY0FBcUMsaUJBQStDO0FBQUEsRUFDaEYsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBRVIsVUFBVTtBQUFBLElBQ2pCLFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixpQkFBaUI7QUFBQSxNQUNqQixlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksTUFBTSxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUN2RCxXQUFLLFFBQVEsT0FBTyxTQUFTLFVBQVUsR0FBRyxFQUFFLHVDQUF1QztBQUNuRixXQUFLLFFBQVEsT0FBTyxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUNoRSxXQUFLLFFBQVEsT0FBTyxhQUFhLEdBQUcsR0FBRyxFQUFFLDZCQUE2QjtBQUN0RSxXQUFLLFFBQVEsT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLHNCQUFzQjtBQUNqRSxXQUFLLFFBQVEsT0FBTyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUUsbUNBQW1DO0FBQy9FLFdBQUssUUFBUSxZQUFZLE9BQU8sS0FBSyxNQUFNLFFBQVcsR0FBRyxFQUFFLHdCQUF3QjtBQUFBLElBQ3JGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxlQUFlLElBQUksdUJBQXVCOzs7QUM3QmhELElBQU0sd0JBQU4sY0FBb0MsaUJBQThDO0FBQUEsRUFDOUUsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWdCUixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtqQixVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUEsSUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixnQkFBZ0I7QUFBQSxNQUNoQixpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixVQUFVLEVBQUUsUUFBUSxHQUFHLFFBQVEsRUFBRTtBQUFBLE1BQ2pDLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFtQztBQUN0RixXQUFLLFFBQVEsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLDBCQUEwQjtBQUM3RCxXQUFLLFFBQVEsTUFBTSxhQUFhLEtBQUssTUFBTSxjQUFjLEtBQUssR0FBRyxFQUFFLGtDQUFrQztBQUNyRyxXQUFLLFFBQVEsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUMvRCxVQUFJLE1BQU0sbUJBQW1CLE9BQVcsTUFBSyxRQUFRLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxHQUFHLEVBQUUsMENBQTBDO0FBQzFJLFdBQUssUUFBUSxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxvQ0FBb0M7QUFDakYsV0FBSyxRQUFRLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRSxpQ0FBaUM7QUFDMUUsVUFBSSxNQUFNLFVBQVU7QUFDbEIsYUFBSyxRQUFRLE9BQU8sVUFBVSxNQUFNLFNBQVMsTUFBTSxLQUFLLE1BQU0sU0FBUyxVQUFVLEdBQUcsR0FBRyxFQUFFLDhDQUE4QztBQUN2SSxhQUFLLFFBQVEsT0FBTyxVQUFVLE1BQU0sU0FBUyxNQUFNLEtBQUssTUFBTSxTQUFTLFVBQVUsTUFBTSxTQUFTLFFBQVEsR0FBRyxFQUFFLDJDQUEyQztBQUFBLE1BQzFKO0FBQ0EsV0FBSyxRQUFRLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLG9DQUFvQztBQUNqRixXQUFLLFFBQVEsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUUsbUNBQW1DO0FBQy9FLFdBQUssUUFBUSxZQUFZLE1BQU0sS0FBSyxNQUFNLFFBQVcsR0FBRyxFQUFFLHdCQUF3QjtBQUFBLElBQ3BGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxjQUFjLElBQUksc0JBQXNCOzs7QUNqSHJELElBQU0sVUFBVSxDQUFDLE9BQXdCLEdBQUcsV0FBVyxRQUFRO0FBQy9ELElBQU0scUJBQXFCLENBQUMsT0FBNkI7QUFDdkQsTUFBSSxPQUFPLGNBQWUsUUFBTztBQUNqQyxNQUFJLENBQUMsR0FBRyxXQUFXLFFBQVEsRUFBRyxRQUFPO0FBQ3JDLFFBQU0sWUFBWSxHQUFHLE1BQU0sU0FBUyxNQUFNO0FBQzFDLFNBQU8sYUFBYSxVQUFVLFVBQVUsWUFBcUI7QUFDL0Q7QUFFQSxTQUFTLGVBQWUsT0FBc0U7QUFDNUYsUUFBTSxPQUFPLE1BQU0sT0FDaEIsTUFBTSxPQUFPLEVBQ2IsSUFBSSxDQUFDLE1BQU0saUJBQWlCLEVBQUUsTUFBTSxLQUFLLEtBQUssR0FBRyxhQUFhLGNBQWMsRUFBRSxFQUFFLEVBQ2hGLE9BQU8sU0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0FBRXBDLE1BQUksS0FBSyxXQUFXLEVBQUcsT0FBTSxJQUFJLE1BQU0sNkNBQTZDO0FBQ3BGLFNBQU87QUFDVDtBQUVPLFNBQVMscUJBQXFCLE9BQTZDO0FBQ2hGLE1BQUksTUFBTSxRQUFRLFdBQVcsRUFBRyxPQUFNLElBQUksTUFBTSxrREFBa0Q7QUFDbEcsTUFBSSxNQUFNLFFBQVEsY0FBYyxFQUFHLE9BQU0sSUFBSSxNQUFNLHFEQUFxRDtBQUN4RyxhQUFXLENBQUMsUUFBUSxLQUFLLEtBQUssT0FBTyxRQUFRLE1BQU0sTUFBTSxHQUFHO0FBQzFELFFBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxXQUFXLEtBQUssUUFBUSxLQUFLLE1BQU0sR0FBRztBQUNwRCxZQUFNLElBQUksTUFBTSxxQkFBcUIsTUFBTSx3REFBd0Q7QUFBQSxJQUNyRztBQUNBLFFBQUksQ0FBQyxNQUFNLEdBQUksT0FBTSxJQUFJLE1BQU0sd0JBQXdCLE1BQU0sb0JBQW9CO0FBQ2pGLFFBQUksTUFBTSxVQUFVLFVBQWEsTUFBTSxTQUFTLEdBQUc7QUFDakQsWUFBTSxJQUFJLE1BQU0sd0JBQXdCLE1BQU0sb0NBQW9DO0FBQUEsSUFDcEY7QUFBQSxFQUNGO0FBRUEsUUFBTSxPQUFPLGVBQWUsS0FBSztBQUNqQyxNQUFJO0FBQ0osTUFBSTtBQUNKLFFBQU0sV0FBZ0MsQ0FBQztBQUV2QyxPQUFLLFFBQVEsQ0FBQyxLQUFLLGFBQWE7QUFDOUIsVUFBTSxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxPQUFPLGVBQWEsY0FBYyxHQUFHLEVBQUU7QUFDdkUsUUFBSSxjQUFjLEdBQUc7QUFDbkIsWUFBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksV0FBVyxrREFBa0QsU0FBUyxHQUFHO0FBQUEsSUFDcEg7QUFFQSxVQUFNLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxLQUFLLE1BQU0sR0FBRyxFQUFFLElBQUksVUFBUSxLQUFLLFFBQVEsT0FBTyxFQUFFLENBQUM7QUFDN0Usa0JBQWMsS0FBSztBQUNuQixtQkFBZSxNQUFNO0FBRXJCLFFBQUksS0FBSyxXQUFXLFdBQVc7QUFDN0IsWUFBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksV0FBVyxtQkFBbUIsS0FBSyxNQUFNLGNBQWMsU0FBUyxHQUFHO0FBQUEsSUFDOUc7QUFDQSxRQUFJLE1BQU0sV0FBVyxZQUFZO0FBQy9CLFlBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsb0JBQW9CLE1BQU0sTUFBTSxjQUFjLFVBQVUsR0FBRztBQUFBLElBQ2pIO0FBRUEsVUFBTSxxQkFBcUIsS0FBSyxTQUFTLElBQUk7QUFDN0MsZUFBVyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxDQUFDLEdBQVk7QUFDdEUsWUFBTSxhQUFhLG9CQUFJLElBQW9CO0FBQzNDLE9BQUMsR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsY0FBYztBQUN2QyxjQUFNLFFBQVEsTUFBTSxPQUFPLE1BQU07QUFDakMsWUFBSSxDQUFDLE9BQU87QUFDVixnQkFBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksV0FBVyxpQkFBaUIsTUFBTSxRQUFRLElBQUksZUFBZSxTQUFTLHNDQUFzQztBQUFBLFFBQ3ZKO0FBQ0EsWUFBSSxNQUFNLE9BQU8sUUFBUztBQUMxQixjQUFNLFVBQVUsbUJBQW1CLE1BQU0sRUFBRTtBQUMzQyxjQUFNLGFBQWEsVUFBVSxVQUFVLFFBQVEsT0FBTyxFQUFFLGFBQWE7QUFDckUsWUFBSSxZQUFZLGFBQWEsS0FBSyxRQUFRO0FBQ3hDLGdCQUFNLElBQUksTUFBTSxxQkFBcUIsSUFBSSxXQUFXLFdBQVcsTUFBTSxFQUFFLE9BQU8sSUFBSSxlQUFlLFNBQVMsa0JBQWtCLFVBQVUscUJBQXFCLEtBQUssU0FBUyxTQUFTLFVBQVU7QUFBQSxRQUM5TDtBQUNBLGlCQUFTLFNBQVMsR0FBRyxTQUFTLFlBQVksVUFBVTtBQUNsRCxnQkFBTSxXQUFXLFdBQVcsSUFBSSxZQUFZLE1BQU07QUFDbEQsY0FBSSxVQUFVO0FBQ1osa0JBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsV0FBVyxNQUFNLEVBQUUsT0FBTyxJQUFJLGVBQWUsWUFBWSxNQUFNLHlCQUF5QixRQUFRLEdBQUc7QUFBQSxVQUN6SjtBQUFBLFFBQ0Y7QUFDQSxpQkFBUyxTQUFTLEdBQUcsU0FBUyxZQUFZLFNBQVUsWUFBVyxJQUFJLFlBQVksUUFBUSxNQUFNLEVBQUU7QUFFL0YsaUJBQVMsS0FBSztBQUFBLFVBQ1osSUFBSSxNQUFNO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxrQkFBa0IsTUFBTSxTQUFTLE1BQU0sUUFBUSxNQUFNLEVBQUUsSUFBSSxNQUFNLFFBQVEsYUFBYTtBQUFBLFFBQ3hGLENBQUM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTyxTQUFTLEtBQUssQ0FBQyxHQUFHLE1BQ3ZCLEVBQUUscUJBQXFCLEVBQUUsc0JBQ3pCLEVBQUUsV0FBVyxFQUFFLFlBQ2YsRUFBRSxLQUFLLGNBQWMsRUFBRSxJQUFJLEtBQzNCLEVBQUUsWUFBWSxFQUFFLFNBQVM7QUFDN0I7OztBQzNGTyxJQUFNLElBQWtCO0FBQUEsRUFDN0IsTUFBTSxFQUFFLE9BQU8sR0FBRyxXQUFXLEdBQUcsS0FBSyxHQUFHLFdBQVcsR0FBRyxPQUFPLEVBQUU7QUFBQSxFQUMvRCxPQUFPLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRyxLQUFLLEdBQUcsV0FBVyxHQUFHLE9BQU8sRUFBRTtBQUNsRTtBQWlKQSxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLGNBQWM7QUFDcEIsSUFBTSxlQUFlO0FBQ3JCLElBQU0sZUFBaUQ7QUFBQSxFQUNyRCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixNQUFNO0FBQ1I7QUFDQSxJQUFNLGlCQUFtRDtBQUFBLEVBQ3ZELEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFDVDtBQUNBLElBQU0sZ0JBQWtEO0FBQUEsRUFDdEQscUJBQXFCO0FBQUEsRUFDckIsK0JBQStCO0FBQ2pDO0FBQ0EsSUFBTSxtQkFBcUQ7QUFBQSxFQUN6RCxlQUFlO0FBQUEsRUFDZixrQkFBa0I7QUFBQSxFQUNsQixxQkFBcUI7QUFBQSxFQUNyQixnQkFBZ0I7QUFBQSxFQUNoQixjQUFjO0FBQUEsRUFDZCxpQ0FBaUM7QUFBQSxFQUNqQyxnQ0FBZ0M7QUFBQSxFQUNoQyxrQ0FBa0M7QUFBQSxFQUNsQyxpQ0FBaUM7QUFBQSxFQUNqQyxtQ0FBbUM7QUFBQSxFQUNuQyxtQ0FBbUM7QUFBQSxFQUNuQyx1Q0FBdUM7QUFBQSxFQUN2QyxpQ0FBaUM7QUFBQSxFQUNqQyxnQ0FBZ0M7QUFBQSxFQUNoQywrQkFBK0I7QUFBQSxFQUMvQiw0QkFBNEI7QUFDOUI7QUFDQSxJQUFNLGtCQUFrQixtRkFBbUYsTUFBTSxFQUFFLEVBQ2hILE9BQU8sWUFBVSxXQUFXLGVBQWUsV0FBVyxZQUFZO0FBRXJFLFNBQVMsZUFBZSxPQUFlLE9BQXFCO0FBQzFELE1BQUksQ0FBQyxPQUFPLFVBQVUsS0FBSyxFQUFHLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSyxzQkFBc0I7QUFDOUU7QUFFQSxTQUFTLHVCQUF1QixPQUFlLE9BQXFCO0FBQ2xFLGlCQUFlLE9BQU8sS0FBSztBQUMzQixNQUFJLFNBQVMsRUFBRyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssNkJBQTZCO0FBQ3ZFO0FBRUEsU0FBUyxlQUFlLE9BQTJCLE9BQXVCO0FBQ3hFLFFBQU0sUUFBUSxTQUFTO0FBQ3ZCLE1BQUksQ0FBQyxPQUFPLFNBQVMsS0FBSyxLQUFLLFNBQVMsRUFBRyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssbUNBQW1DO0FBQ3RHLFNBQU87QUFDVDtBQUVBLFNBQVMsaUJBQWlCLElBQTJCO0FBQ25ELE1BQUksR0FBRyxXQUFXLFFBQVEsRUFBRyxRQUFPO0FBQ3BDLFNBQU8sYUFBYSxFQUFFLEtBQUssU0FBUyxFQUFFO0FBQ3hDO0FBRUEsU0FBUyxrQkFBa0IsSUFBNEI7QUFDckQsTUFBSSxHQUFHLFdBQVcsZ0JBQWdCLEVBQUcsUUFBTztBQUM1QyxRQUFNLFdBQVcsR0FBRyxRQUFRLEdBQUc7QUFDL0IsTUFBSSxZQUFZLEVBQUcsT0FBTSxJQUFJLE1BQU0sY0FBYyxFQUFFLGlFQUFpRTtBQUNwSCxRQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsUUFBUTtBQUNuQyxRQUFNLFNBQVMsR0FBRyxNQUFNLFdBQVcsQ0FBQztBQUNwQyxRQUFNLFNBQVMsZUFBZSxNQUFNO0FBQ3BDLE1BQUksQ0FBQyxPQUFRLE9BQU0sSUFBSSxNQUFNLGNBQWMsRUFBRSxnQ0FBZ0MsTUFBTSxJQUFJO0FBQ3ZGLFNBQU8sR0FBRyxNQUFNLEdBQUcsTUFBTTtBQUMzQjtBQUVBLFNBQVMsa0JBQWtCLElBQTRCO0FBQ3JELE1BQUksR0FBRyxXQUFXLFNBQVMsRUFBRyxRQUFPO0FBQ3JDLFNBQU8sY0FBYyxFQUFFLEtBQUssVUFBVSxFQUFFO0FBQzFDO0FBRUEsU0FBUyxjQUFjLGFBQW9DO0FBQ3pELE1BQUksZ0JBQWdCLGNBQWUsUUFBTztBQUMxQyxNQUFJLENBQUMsWUFBWSxXQUFXLFFBQVEsRUFBRyxRQUFPO0FBQzlDLFNBQU8sWUFBWSxNQUFNLFNBQVMsTUFBTTtBQUMxQztBQUVBLFNBQVMsb0JBQW9CLElBQWtCO0FBQzdDLFFBQU0sVUFBVSxjQUFjLEVBQUU7QUFDaEMsTUFBSSxTQUFTO0FBQ1gsUUFBSSxFQUFFLFdBQVcsVUFBVSxTQUFVLE9BQU0sSUFBSSxNQUFNLHFCQUFxQixFQUFFLElBQUk7QUFDaEY7QUFBQSxFQUNGO0FBQ0EsUUFBTSxhQUE2RTtBQUFBLElBQ2pGLENBQUMsc0JBQXNCLFVBQVUsU0FBUyxLQUFLO0FBQUEsSUFDL0MsQ0FBQyx5QkFBeUIsYUFBYSxTQUFTLFFBQVE7QUFBQSxJQUN4RCxDQUFDLHdCQUF3QixZQUFZLFNBQVMsT0FBTztBQUFBLEVBQ3ZEO0FBQ0EsYUFBVyxDQUFDLFFBQVEsU0FBUyxLQUFLLEtBQUssWUFBWTtBQUNqRCxRQUFJLENBQUMsR0FBRyxXQUFXLE1BQU0sRUFBRztBQUM1QixVQUFNLFdBQVcsR0FBRyxNQUFNLE9BQU8sTUFBTTtBQUN2QyxRQUFJLEVBQUUsWUFBWSxTQUFVLE9BQU0sSUFBSSxNQUFNLFdBQVcsS0FBSyxRQUFRLEVBQUUsSUFBSTtBQUMxRTtBQUFBLEVBQ0Y7QUFDQSxNQUFJLE9BQU8sMkJBQTRCO0FBQ3ZDLE1BQUksR0FBRyxXQUFXLHdCQUF3QixHQUFHO0FBQzNDLFVBQU0sV0FBVyxHQUFHLE1BQU0seUJBQXlCLE1BQU07QUFDekQsUUFBSSxFQUFFLFlBQVksaUJBQWlCLFNBQVUsT0FBTSxJQUFJLE1BQU0sMEJBQTBCLEVBQUUsSUFBSTtBQUM3RjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksTUFBTSxnQ0FBZ0MsRUFBRSxJQUFJO0FBQ3hEO0FBRUEsU0FBUyxRQUFRLElBQW9CO0FBQ25DLFFBQU0sVUFBVSxjQUFjLEVBQUU7QUFDaEMsU0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUF5QyxFQUFFLGFBQWE7QUFDN0g7QUFFQSxJQUFNLG1CQUFOLE1BQXVCO0FBQUEsRUFLckIsWUFBNkIsU0FBOEI7QUFBOUI7QUFDM0IsU0FBSyxZQUFZLFFBQVEsYUFBYTtBQUN0QywyQkFBdUIsS0FBSyxXQUFXLGlCQUFpQjtBQUN4RCxRQUFJLEtBQUssWUFBWSxFQUFHLE9BQU0sSUFBSSxNQUFNLHFDQUFxQztBQUM3RSxRQUFJLENBQUMsUUFBUSxNQUFNLEtBQUssRUFBRyxPQUFNLElBQUksTUFBTSwwQkFBMEI7QUFDckUsUUFBSSxDQUFDLFFBQVEsWUFBWSxLQUFLLEVBQUcsT0FBTSxJQUFJLE1BQU0sZ0NBQWdDO0FBQ2pGLFFBQUksUUFBUSxRQUFRLFdBQVcsRUFBRyxPQUFNLElBQUksTUFBTSxrREFBa0Q7QUFDcEcsUUFBSSxRQUFRLFFBQVEsY0FBYyxFQUFHLE9BQU0sSUFBSSxNQUFNLHFEQUFxRDtBQUMxRyxTQUFLLGVBQWUsUUFBUSxxQkFBcUIsRUFBRSxLQUFLLEtBQUsscUJBQXFCLENBQUM7QUFBQSxFQUNyRjtBQUFBLEVBYmlCO0FBQUEsRUFDQSxhQUEwQixDQUFDO0FBQUEsRUFDcEMsU0FBUztBQUFBLEVBYWpCLE1BQU0sSUFBbUIsU0FBc0M7QUFDN0QsU0FBSyxNQUFNLGlCQUFpQixFQUFFLEdBQUcsU0FBUyxLQUFLLFFBQVEsT0FBTztBQUM5RCxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxJQUFvQixTQUFzQztBQUMvRCxTQUFLLE1BQU0sa0JBQWtCLEVBQUUsR0FBRyxTQUFTLEtBQUssUUFBUSxRQUFRO0FBQ2hFLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLElBQW9CLFNBQXNDO0FBQy9ELFNBQUssTUFBTSxrQkFBa0IsRUFBRSxHQUFHLFNBQVMsS0FBSyxRQUFRLFFBQVE7QUFDaEUsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFlBQVksTUFBb0I7QUFDOUIsMkJBQXVCLE1BQU0sa0JBQWtCO0FBQy9DLFNBQUssVUFBVTtBQUNmLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxRQUFRLE1BQW9CO0FBQzFCLFdBQU8sS0FBSyxZQUFZLElBQUk7QUFBQSxFQUM5QjtBQUFBLEVBRUEsUUFBUSxNQUFjLE1BQWMsT0FBcUQ7QUFDdkYsUUFBSSxDQUFDLEtBQUssS0FBSyxFQUFHLE9BQU0sSUFBSSxNQUFNLGlDQUFpQztBQUNuRSwyQkFBdUIsTUFBTSxrQkFBa0IsSUFBSSxRQUFRO0FBQzNELFVBQU0sVUFBVSxJQUFJLHdCQUF3QixNQUFNLE1BQU0sS0FBSyxRQUFRLElBQUk7QUFDekUsVUFBTSxPQUFPO0FBQ2IsU0FBSyxVQUFVO0FBQ2YsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFNBQVMsTUFBYyxPQUFxRDtBQUMxRSxXQUFPLEtBQUssUUFBUSxZQUFZLE1BQU0sS0FBSztBQUFBLEVBQzdDO0FBQUEsRUFFQSxRQUFRLE1BQWMsT0FBcUQ7QUFDekUsV0FBTyxLQUFLLFFBQVEsV0FBVyxNQUFNLEtBQUs7QUFBQSxFQUM1QztBQUFBLEVBRUEsS0FBSyxTQUF3QixTQUFpQztBQUM1RCxTQUFLLFFBQVEsS0FBSyxRQUFRLGlCQUFpQixPQUFPLEdBQUcsU0FBUyxNQUFNO0FBQ3BFLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxZQUFZLFNBQXdCLFNBQXdDO0FBQzFFLFNBQUssZUFBZSxLQUFLLFFBQVEsaUJBQWlCLE9BQU8sR0FBRyxTQUFTLGFBQWE7QUFDbEYsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLEtBQUssU0FBd0IsU0FBaUM7QUFDNUQsU0FBSyxRQUFRLEtBQUssUUFBUSxpQkFBaUIsT0FBTyxHQUFHLFNBQVMsTUFBTTtBQUNwRSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsS0FBSyxTQUF3QixTQUFpQztBQUM1RCxTQUFLLFFBQVEsS0FBSyxRQUFRLGlCQUFpQixPQUFPLEdBQUcsU0FBUyxNQUFNO0FBQ3BFLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxnQkFBZ0IsU0FBaUIsYUFBcUIsV0FBbUIsSUFBbUIsU0FBc0M7QUFDaEksU0FBSyxNQUFNLGlCQUFpQixFQUFFLEdBQUcsU0FBUyxVQUFVLFdBQVcsWUFBWSxXQUFXLFNBQVM7QUFBQSxFQUNqRztBQUFBLEVBRUEsaUJBQWlCLFNBQWlCLGFBQXFCLFdBQW1CLElBQW9CLFNBQXNDO0FBQ2xJLFNBQUssTUFBTSxrQkFBa0IsRUFBRSxHQUFHLFNBQVMsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVO0FBQUEsRUFDbkc7QUFBQSxFQUVBLGlCQUFpQixTQUFpQixhQUFxQixXQUFtQixJQUFvQixTQUFzQztBQUNsSSxTQUFLLE1BQU0sa0JBQWtCLEVBQUUsR0FBRyxTQUFTLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVTtBQUFBLEVBQ25HO0FBQUEsRUFFQSxRQUFRLFNBQWlCLFNBQWlCLFNBQTJCLE9BQXFCO0FBQ3hGLDJCQUF1QixRQUFRLE9BQU8sR0FBRyxLQUFLLFFBQVE7QUFDdEQsVUFBTSxNQUFNLFFBQVEsT0FBTztBQUMzQixtQkFBZSxLQUFLLEdBQUcsS0FBSyxNQUFNO0FBQ2xDLFFBQUksTUFBTSxFQUFHLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSywwQkFBMEI7QUFDL0QsYUFBUyxRQUFRLEdBQUcsUUFBUSxRQUFRLE9BQU8sU0FBUztBQUNsRCxXQUFLLE1BQU0sU0FBUyxFQUFFLFFBQVEsUUFBUSxRQUFRLE9BQU8sUUFBUSxNQUFNLEdBQUcsVUFBVSxTQUFTLE1BQU0sSUFBSSxLQUFLO0FBQUEsSUFDMUc7QUFBQSxFQUNGO0FBQUEsRUFFQSxlQUFlLFNBQWlCLFNBQWlCLFNBQWtDLE9BQXFCO0FBQ3RHLDJCQUF1QixRQUFRLE9BQU8sR0FBRyxLQUFLLFFBQVE7QUFDdEQsUUFBSSxRQUFRLFFBQVEsV0FBVyxFQUFHLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSyw0Q0FBNEM7QUFDdEcsVUFBTSxNQUFNLFFBQVEsT0FBTztBQUMzQixtQkFBZSxLQUFLLEdBQUcsS0FBSyxNQUFNO0FBQ2xDLFFBQUksTUFBTSxFQUFHLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSywwQkFBMEI7QUFDL0QsYUFBUyxRQUFRLEdBQUcsUUFBUSxRQUFRLE9BQU8sU0FBUztBQUNsRCxZQUFNLFNBQVMsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLE1BQU07QUFDN0QsV0FBSyxNQUFNLFNBQVMsRUFBRSxRQUFRLE9BQU8sUUFBUSxNQUFNLEdBQUcsVUFBVSxTQUFTLE1BQU0sSUFBSSxLQUFLO0FBQUEsSUFDMUY7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRLFNBQWlCLFNBQWlCLFNBQTJCLE9BQXFCO0FBQ3hGLFFBQUksUUFBUSxRQUFRLFdBQVcsRUFBRyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssNENBQTRDO0FBQ3RHLGVBQVcsVUFBVSxRQUFRLFNBQVM7QUFDcEMsV0FBSyxNQUFNLFNBQVMsRUFBRSxRQUFRLE9BQU8sUUFBUSxNQUFNLEdBQUcsU0FBUyxLQUFLO0FBQUEsSUFDdEU7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRLFNBQWlCLFNBQWlCLFNBQTJCLE9BQXFCO0FBQ3hGLDJCQUF1QixRQUFRLE1BQU0sR0FBRyxLQUFLLE9BQU87QUFDcEQsMkJBQXVCLFFBQVEsT0FBTyxHQUFHLEtBQUssUUFBUTtBQUN0RCxhQUFTLFNBQVMsR0FBRyxTQUFTLFFBQVEsTUFBTSxVQUFVLFFBQVEsT0FBTztBQUNuRSxXQUFLLE1BQU0sU0FBUyxFQUFFLFFBQVEsUUFBUSxRQUFRLE9BQU8sUUFBUSxNQUFNLEdBQUcsVUFBVSxRQUFRLEtBQUs7QUFBQSxJQUMvRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFFBQXFCO0FBQ25CLFVBQU0sb0JBQW9CLEtBQUssUUFBUSxxQkFBcUIsRUFBRSxLQUFLO0FBQ25FLFVBQU0sa0JBQWtCLEtBQUssV0FBVyxPQUFPLENBQUMsS0FBSyxTQUFTLEtBQUssSUFBSSxLQUFLLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDeEYsVUFBTUMsWUFBVyxLQUFLLElBQUksS0FBSyxRQUFRLGtCQUFrQixHQUFHLENBQUM7QUFDN0QsVUFBTSxPQUFPLE1BQU0sS0FBSyxFQUFFLFFBQVFBLFVBQVMsR0FBRyxNQUFNLE1BQU0sS0FBSyxFQUFFLFFBQVEsS0FBSyxZQUFZLEVBQUUsR0FBRyxNQUFNLFdBQVcsQ0FBQztBQUNqSCxVQUFNLFdBQVcsTUFBTSxLQUFLLEVBQUUsUUFBUUEsVUFBUyxHQUFHLE1BQU0sb0JBQUksSUFBb0IsQ0FBQztBQUNqRixVQUFNLFNBQVMsb0JBQUksSUFBMkM7QUFDOUQsV0FBTyxJQUFJLGFBQWEsRUFBRSxJQUFJLFNBQVMsT0FBTyxFQUFFLENBQUM7QUFDakQsV0FBTyxJQUFJLGNBQWMsRUFBRSxJQUFJLGdCQUFnQixPQUFPLEVBQUUsQ0FBQztBQUN6RCxVQUFNLGNBQWMsb0JBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSxDQUFDO0FBQ3ZELFVBQU0saUJBQWlCLG9CQUFJLElBQW9CO0FBQy9DLFVBQU0sY0FBYyxLQUFLLFNBQVMsbUJBQW1CLENBQUM7QUFDdEQsZUFBVyxRQUFRLFlBQWEsVUFBUyxDQUFDLEVBQUUsSUFBSSxLQUFLLGNBQWMsY0FBYztBQUNqRixTQUFLLENBQUMsRUFBRSxpQkFBaUIsSUFBSTtBQUU3QixlQUFXLGFBQWEsS0FBSyxZQUFZO0FBQ3ZDLFlBQU0sU0FBUyxLQUFLLFVBQVUsV0FBVyxhQUFhLGNBQWM7QUFDcEUsYUFBTyxJQUFJLFFBQVEsRUFBRSxJQUFJLFVBQVUsSUFBSSxPQUFPLFVBQVUsTUFBTSxDQUFDO0FBQy9ELGlCQUFXLFFBQVEsS0FBSyxTQUFTLFVBQVUsUUFBUSxVQUFVLElBQUksR0FBRztBQUNsRSxjQUFNLFdBQVcsU0FBUyxVQUFVLEdBQUcsRUFBRSxJQUFJLEtBQUssWUFBWTtBQUM5RCxZQUFJLFVBQVU7QUFDWixnQkFBTSxJQUFJLE1BQU0sa0NBQWtDLFVBQVUsR0FBRyxZQUFZLEtBQUssWUFBWSxrQkFBa0IsUUFBUSxjQUFjLFVBQVUsRUFBRSxJQUFJO0FBQUEsUUFDdEo7QUFDQSxpQkFBUyxVQUFVLEdBQUcsRUFBRSxJQUFJLEtBQUssY0FBYyxVQUFVLEVBQUU7QUFBQSxNQUM3RDtBQUNBLFdBQUssVUFBVSxHQUFHLEVBQUUsVUFBVSxNQUFNLElBQUk7QUFBQSxJQUMxQztBQUVBLFVBQU0sYUFBYTtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxFQUFLLEtBQUssTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLFNBQU8sR0FBRyxJQUFJLE1BQU0sR0FBRyxLQUFLLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFBQTtBQUFBLE1BQzdJLFFBQVEsT0FBTyxZQUFZLENBQUMsR0FBRyxPQUFPLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxNQUFNO0FBQUEsUUFDeEU7QUFBQSxRQUNBLE1BQU0sVUFBVSxJQUFJLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLE9BQU8sTUFBTSxNQUFNO0FBQUEsTUFDNUUsQ0FBQyxDQUFDO0FBQUEsTUFDRixTQUFTLEtBQUssUUFBUTtBQUFBLElBQ3hCO0FBQ0EseUJBQXFCLFVBQVU7QUFDL0IsV0FBTztBQUFBLE1BQ0wsT0FBTyxLQUFLLFFBQVE7QUFBQSxNQUNwQixhQUFhLEtBQUssUUFBUTtBQUFBLE1BQzFCLGFBQWEsS0FBSyxRQUFRO0FBQUEsTUFDMUI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsc0JBQXNCLGFBQXFCLFdBQW1CLE1BQW9CO0FBQ2hGLG1CQUFlLFdBQVcsa0JBQWtCLFdBQVcsY0FBYztBQUNyRSxRQUFJLFlBQVksS0FBSyxhQUFhLE1BQU07QUFDdEMsWUFBTSxJQUFJLE1BQU0sa0JBQWtCLFdBQVcsZ0JBQWdCLFNBQVMscUJBQXFCLE9BQU8sQ0FBQyxpQkFBaUI7QUFBQSxJQUN0SDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLG9CQUFvQixhQUFxQixXQUFtQixNQUFjLGFBQTJCO0FBQ25HLDJCQUF1QixhQUFhLGtCQUFrQixXQUFXLGdCQUFnQjtBQUNqRixTQUFLLHNCQUFzQixhQUFhLFdBQVcsSUFBSTtBQUN2RCxVQUFNLGFBQWEsWUFBWSxjQUFjO0FBQzdDLFFBQUksY0FBYyxNQUFNO0FBQ3RCLFlBQU0sSUFBSSxNQUFNLGtCQUFrQixXQUFXLGdDQUFnQyxVQUFVLG1CQUFtQixPQUFPLENBQUMsaUJBQWlCO0FBQUEsSUFDckk7QUFBQSxFQUNGO0FBQUEsRUFFUSxNQUFNLElBQVksU0FBZ0MsS0FBYSxPQUFxQjtBQUMxRixtQkFBZSxLQUFLLEdBQUcsS0FBSyxNQUFNO0FBQ2xDLFFBQUksTUFBTSxFQUFHLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSywwQkFBMEI7QUFDL0Qsd0JBQW9CLEVBQUU7QUFDdEIsVUFBTSxPQUFPLFFBQVEsRUFBRTtBQUN2QixTQUFLLGVBQWUsUUFBUSxRQUFRLEdBQUcsS0FBSyxXQUFXLElBQUk7QUFDM0QsU0FBSyxXQUFXLEtBQUs7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsUUFBUSxRQUFRO0FBQUEsTUFDaEI7QUFBQSxNQUNBLE9BQU8sZUFBZSxRQUFRLE9BQU8sS0FBSztBQUFBLE1BQzFDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRVEsZUFBZSxRQUFxQixPQUFlLE1BQW9CO0FBQzdFLG1CQUFlLFFBQVEsS0FBSztBQUM1QixVQUFNLGFBQWEsS0FBSyxZQUFZO0FBQ3BDLFFBQUksU0FBUyxLQUFLLFVBQVUsV0FBWSxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssSUFBSSxNQUFNLHFCQUFxQixhQUFhLENBQUMsZUFBZTtBQUM1SCxVQUFNLGFBQWEsU0FBUyxLQUFLO0FBQ2pDLFFBQUksYUFBYSxPQUFPLEtBQUssV0FBVztBQUN0QyxZQUFNLElBQUksTUFBTSxHQUFHLEtBQUssSUFBSSxNQUFNLGlCQUFpQixJQUFJLDJCQUEyQixLQUFLLFNBQVMsZUFBZTtBQUFBLElBQ2pIO0FBQUEsRUFDRjtBQUFBLEVBRVEsU0FBUyxRQUFnQixNQUErQztBQUM5RSxXQUFPLE1BQU0sS0FBSyxFQUFFLFFBQVEsS0FBSyxHQUFHLENBQUMsR0FBRyxZQUFZLEVBQUUsY0FBYyxTQUFTLE9BQU8sRUFBRTtBQUFBLEVBQ3hGO0FBQUEsRUFFUSxVQUFVLFdBQXNCLGFBQTBCLGdCQUE2QztBQUM3RyxVQUFNLE1BQU0sR0FBRyxVQUFVLEVBQUUsSUFBSSxVQUFVLEtBQUs7QUFDOUMsVUFBTSxXQUFXLGVBQWUsSUFBSSxHQUFHO0FBQ3ZDLFFBQUksU0FBVSxRQUFPO0FBQ3JCLFVBQU0sWUFBWSxpQkFBaUIsVUFBVSxFQUFFO0FBQy9DLFVBQU0sU0FBUyxhQUFhLENBQUMsWUFBWSxJQUFJLFNBQVMsSUFDbEQsWUFDQSxnQkFBZ0IsS0FBSyxlQUFhLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQztBQUNqRSxRQUFJLENBQUMsT0FBUSxPQUFNLElBQUksTUFBTSx3REFBd0Q7QUFDckYsZ0JBQVksSUFBSSxNQUFNO0FBQ3RCLG1CQUFlLElBQUksS0FBSyxNQUFNO0FBQzlCLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFFQSxJQUFNLDBCQUFOLE1BQTZEO0FBQUEsRUFHM0QsWUFDbUIsUUFDQSxNQUNBLFNBQ0EsTUFDakI7QUFKaUI7QUFDQTtBQUNBO0FBQ0E7QUFBQSxFQUNoQjtBQUFBLEVBUEssWUFBWTtBQUFBLEVBU3BCLEdBQUcsV0FBd0M7QUFDekMsU0FBSyxPQUFPLHNCQUFzQixLQUFLLE1BQU0sV0FBVyxLQUFLLElBQUk7QUFDakUsU0FBSyxZQUFZO0FBQ2pCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxNQUFNLElBQW1CLFNBQXFEO0FBQzVFLFNBQUssT0FBTyxnQkFBZ0IsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPO0FBQ2hGLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLElBQW9CLFNBQXFEO0FBQzlFLFNBQUssT0FBTyxpQkFBaUIsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPO0FBQ2pGLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLElBQW9CLFNBQXFEO0FBQzlFLFNBQUssT0FBTyxpQkFBaUIsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPO0FBQ2pGLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxLQUFLLFNBQXdCLFNBQWdEO0FBQzNFLFVBQU0sTUFBTSxRQUFRLE9BQU87QUFDM0IsU0FBSyxPQUFPLG9CQUFvQixLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssT0FBTyxRQUFRLFFBQVEsTUFBTSxNQUFNLEtBQUssQ0FBQztBQUN6RyxTQUFLLE9BQU8sUUFBUSxLQUFLLFVBQVUsS0FBSyxXQUFXLGlCQUFpQixPQUFPLEdBQUcsU0FBUyxZQUFZLEtBQUssSUFBSSxRQUFRO0FBQ3BILFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxZQUFZLFNBQXdCLFNBQXVEO0FBQ3pGLFVBQU0sTUFBTSxRQUFRLE9BQU87QUFDM0IsU0FBSyxPQUFPLG9CQUFvQixLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssT0FBTyxRQUFRLFFBQVEsTUFBTSxNQUFNLEtBQUssQ0FBQztBQUN6RyxTQUFLLE9BQU8sZUFBZSxLQUFLLFVBQVUsS0FBSyxXQUFXLGlCQUFpQixPQUFPLEdBQUcsU0FBUyxZQUFZLEtBQUssSUFBSSxlQUFlO0FBQ2xJLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxLQUFLLFNBQXdCLFNBQWdEO0FBQzNFLFNBQUssT0FBTyxRQUFRLEtBQUssVUFBVSxLQUFLLFdBQVcsaUJBQWlCLE9BQU8sR0FBRyxTQUFTLFlBQVksS0FBSyxJQUFJLFFBQVE7QUFDcEgsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLEtBQUssU0FBd0IsU0FBZ0Q7QUFDM0UsU0FBSyxPQUFPLG9CQUFvQixLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxRQUFRLElBQUk7QUFDbEYsU0FBSyxPQUFPLFFBQVEsS0FBSyxVQUFVLEtBQUssV0FBVyxpQkFBaUIsT0FBTyxHQUFHLFNBQVMsWUFBWSxLQUFLLElBQUksUUFBUTtBQUNwSCxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBRU8sSUFBTSxlQUFvQztBQUFBLEVBQy9DLE9BQU8sU0FBNEM7QUFDakQsV0FBTyxJQUFJLGlCQUFpQixPQUFPO0FBQUEsRUFDckM7QUFDRjs7O0FDaGtCQSxJQUFNLG1CQUE4QztBQUFBLEVBQ2xELEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILEdBQUc7QUFDTDtBQUVBLElBQU0sZ0JBQTJDO0FBQUEsRUFDL0MsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUNMO0FBRUEsSUFBTSxPQUFPLENBQUksT0FBcUIsTUFBaUIsZUFDckQsTUFBTSxLQUFLLElBQUksTUFBTSxTQUFTLEdBQUcsT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDO0FBRTdELFNBQVMsY0FBYyxTQUF1QixNQUFvQztBQUNoRixNQUFJLFNBQVM7QUFDYixTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxTQUFTO0FBQ1gsYUFBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFFBQVEsTUFBTSxPQUFPO0FBQ25CLGNBQVEsUUFBUSxNQUFNLEtBQUs7QUFDM0IsZ0JBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxTQUFTLE1BQU0sT0FBTztBQUNwQixjQUFRLFNBQVMsTUFBTSxLQUFLO0FBQzVCLGdCQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsUUFBUSxNQUFNO0FBQ1osY0FBUSxRQUFRLElBQUk7QUFDcEIsZ0JBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGO0FBRUEsU0FBUyxrQkFBa0IsU0FBOEIsTUFBaUIsWUFBMEI7QUFDbEcsVUFBUSxHQUFHLENBQUMsRUFBRSxZQUFZLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsQ0FBQztBQUNwRixVQUFRLEdBQUcsRUFBRSxFQUFFLFlBQVksU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE1BQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDO0FBQ3pGLE1BQUksYUFBYSxFQUFHLFNBQVEsR0FBRyxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUksT0FBTyxFQUFFLENBQUM7QUFDM0ksTUFBSSxhQUFhLEVBQUcsU0FBUSxHQUFHLEVBQUUsRUFBRSxZQUFZLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxNQUFNLEtBQUssR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUM1RyxNQUFJLFFBQVEsS0FBSyxhQUFhLEVBQUcsU0FBUSxHQUFHLENBQUMsRUFBRSxZQUFZLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxNQUFNLE9BQU8sRUFBRSxLQUFLLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUM7QUFDakksTUFBSSxRQUFRLEtBQUssYUFBYSxHQUFHO0FBQy9CLFlBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxRQUFRLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hHLFlBQVEsR0FBRyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxXQUFXLEVBQUUsTUFBTSxTQUFTLEVBQUUsQ0FBQztBQUFBLEVBQ2pGO0FBQ0Y7QUFFQSxTQUFTLG1CQUFtQixTQUE4QixNQUFpQixZQUEwQjtBQUNuRyxRQUFNLGtCQUFrQixRQUFRLEtBQUssYUFBYTtBQUNsRCxVQUFRLEdBQUcsQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxLQUFLLFlBQVksRUFBRSxNQUFNLFdBQVcsT0FBTyxHQUFHLENBQUM7QUFDOUcsVUFBUSxHQUFHLEVBQUUsRUFBRSxZQUFZLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxNQUFNLEdBQUcsR0FBRyxPQUFPLGtCQUFrQixLQUFLLElBQUksS0FBSyxrQkFBa0IsSUFBSSxPQUFVLENBQUM7QUFDbEosTUFBSSxhQUFhLEVBQUcsU0FBUSxHQUFHLENBQUMsRUFBRSxZQUFZLGVBQWUsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxNQUFNLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUM7QUFDekgsTUFBSSxhQUFhLEVBQUcsU0FBUSxHQUFHLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3RGLE1BQUksUUFBUSxLQUFLLGFBQWEsRUFBRyxTQUFRLEdBQUcsRUFBRSxFQUFFLFlBQVksVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE1BQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztBQUNsSSxNQUFJLFFBQVEsS0FBSyxhQUFhLEVBQUcsU0FBUSxHQUFHLEVBQUUsRUFBRSxNQUFNLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekY7QUFFQSxTQUFTLHFCQUFxQixTQUE4QixNQUFpQixZQUEwQjtBQUNyRyxVQUFRLEdBQUcsQ0FBQyxFQUFFLFlBQVksZUFBZSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE1BQU0sT0FBTyxFQUFFLEtBQUssS0FBSyxFQUFFLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxDQUFDO0FBQ3ZILE1BQUksYUFBYSxFQUFHLFNBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxRQUFRLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BILFVBQVEsR0FBRyxFQUFFLEVBQUUsWUFBWSxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUUsTUFBTSxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUM7QUFDekYsTUFBSSxhQUFhLEVBQUcsU0FBUSxHQUFHLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsS0FBSyxZQUFZLEVBQUUsTUFBTSxXQUFXLE9BQU8sR0FBRyxDQUFDO0FBQ2xJLE1BQUksUUFBUSxLQUFLLGFBQWEsRUFBRyxTQUFRLEdBQUcsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLEtBQUssV0FBVyxFQUFFLE1BQU0sV0FBVyxFQUFFLE1BQU0sS0FBSyxFQUFFLENBQUM7QUFDN0ksTUFBSSxRQUFRLEtBQUssYUFBYSxFQUFHLFNBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxRQUFRLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLE1BQU0sUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ25JO0FBRUEsU0FBUyxtQkFBbUIsU0FBOEIsTUFBaUIsWUFBMEI7QUFDbkcsVUFBUSxHQUFHLENBQUMsRUFBRSxZQUFZLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsQ0FBQztBQUNwRixVQUFRLEdBQUcsRUFBRSxFQUFFLFlBQVksU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE1BQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDO0FBQ3pGLE1BQUksYUFBYSxFQUFHLFNBQVEsR0FBRyxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUksT0FBTyxFQUFFLENBQUM7QUFDM0ksTUFBSSxRQUFRLEtBQUssYUFBYSxFQUFHLFNBQVEsR0FBRyxDQUFDLEVBQUUsWUFBWSxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUUsTUFBTSxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQ2pJLE1BQUksUUFBUSxLQUFLLGFBQWEsRUFBRyxTQUFRLEdBQUcsRUFBRSxFQUFFLEtBQUssZUFBZSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssV0FBVyxFQUFFLE1BQU0sU0FBUyxFQUFFLENBQUM7QUFDdEgsTUFBSSxRQUFRLEtBQUssYUFBYSxFQUFHLFNBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxRQUFRLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25JO0FBRUEsU0FBUyxvQkFBb0IsU0FBOEIsTUFBaUIsWUFBMEI7QUFDcEcsVUFBUSxHQUFHLENBQUMsRUFBRSxZQUFZLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxNQUFNLEtBQUssRUFBRSxLQUFLLE9BQU8sRUFBRSxNQUFNLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQztBQUNqSCxVQUFRLEdBQUcsRUFBRSxFQUFFLFlBQVksU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLE1BQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDO0FBQ3pGLE1BQUksYUFBYSxFQUFHLFNBQVEsR0FBRyxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxXQUFXLEVBQUUsTUFBTSxTQUFTLEVBQUUsQ0FBQztBQUNsRyxNQUFJLGFBQWEsRUFBRyxTQUFRLEdBQUcsQ0FBQyxFQUFFLEtBQUssZUFBZSxFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxLQUFLLFlBQVksRUFBRSxNQUFNLFdBQVcsTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2pKLE1BQUksUUFBUSxLQUFLLGFBQWEsRUFBRyxTQUFRLEdBQUcsRUFBRSxFQUFFLFlBQVksVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFLE1BQU0sT0FBTyxFQUFFLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztBQUNsSSxNQUFJLFFBQVEsS0FBSyxhQUFhLEVBQUcsU0FBUSxHQUFHLEVBQUUsRUFBRSxLQUFLLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLFdBQVcsRUFBRSxNQUFNLEtBQUssRUFBRSxDQUFDO0FBQzdHO0FBRUEsSUFBTSxhQUE4QztBQUFBLEVBQ2xELFdBQVc7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLEtBQUssU0FBUztBQUNaLGNBQVEsUUFBUSxHQUFHLGFBQVc7QUFDNUIsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDOUQsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDakUsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ3pELGdCQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMxRCxZQUFJLFFBQVEsUUFBUSxFQUFHLFNBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUM7QUFBQSxNQUMvRixDQUFDO0FBQ0QsY0FBUSxRQUFRLENBQUM7QUFBQSxJQUNuQjtBQUFBLElBQ0EsTUFBTSxTQUFTLFlBQVk7QUFDekIsY0FBUSxTQUFTLElBQUksYUFBVyxrQkFBa0IsU0FBUyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ3BGLGNBQVEsUUFBUSxJQUFJLGFBQVc7QUFDN0IsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUMsb0JBQW9CLGtCQUFrQixxQkFBcUIsaUJBQWlCLEdBQUcsUUFBUSxNQUFNLFVBQVUsR0FBRyxFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxNQUFNLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQztBQUNoTSxnQkFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUYsWUFBSSxhQUFhLE1BQU0sRUFBRyxTQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8scUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ2hHLGdCQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxNQUFNLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQztBQUM1RixnQkFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsS0FBSyxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEcsWUFBSSxhQUFhLE1BQU0sRUFBRyxTQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8scUJBQXFCLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pHLGdCQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRSxNQUFNLElBQUksQ0FBQztBQUN4RixnQkFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsTUFBTSxZQUFZLEVBQUUsS0FBSyxVQUFVLENBQUM7QUFBQSxNQUN0RyxDQUFDO0FBQ0QsY0FBUSxRQUFRLFFBQVEsUUFBUSxJQUFJLElBQUksQ0FBQztBQUFBLElBQzNDO0FBQUEsSUFDQSxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFRLFNBQVMsSUFBSSxhQUFXLGtCQUFrQixTQUFTLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFBQSxJQUN0RjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLEtBQUssU0FBUztBQUNaLGNBQVEsUUFBUSxHQUFHLGFBQVc7QUFDNUIsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDN0QsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDakUsWUFBSSxRQUFRLFFBQVEsRUFBRyxTQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8seUJBQXlCLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQUEsTUFDbkcsQ0FBQztBQUNELGNBQVEsUUFBUSxDQUFDO0FBQUEsSUFDbkI7QUFBQSxJQUNBLE1BQU0sU0FBUyxZQUFZO0FBQ3pCLGNBQVEsU0FBUyxJQUFJLGFBQVcsbUJBQW1CLFNBQVMsUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNyRixjQUFRLFFBQVEsSUFBSSxhQUFXO0FBQzdCLGdCQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixpQkFBaUIsZUFBZSxHQUFHLFFBQVEsTUFBTSxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDakksZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUMscUJBQXFCLHlCQUF5QixpQkFBaUIsR0FBRyxRQUFRLE1BQU0sVUFBVSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQy9JLFlBQUksYUFBYSxNQUFNLEVBQUcsU0FBUSxHQUFHLENBQUMsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxLQUFLLFVBQVUsQ0FBQztBQUNoRyxnQkFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsTUFBTSxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDeEYsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxlQUFlLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQUEsTUFDcEcsQ0FBQztBQUNELGNBQVEsUUFBUSxDQUFDO0FBQUEsSUFDbkI7QUFBQSxJQUNBLE9BQU8sU0FBUyxZQUFZO0FBQzFCLGNBQVEsU0FBUyxJQUFJLGFBQVcsbUJBQW1CLFNBQVMsUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUFBLElBQ3ZGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osV0FBVztBQUFBLElBQ1gsS0FBSyxTQUFTO0FBQ1osY0FBUSxRQUFRLEdBQUcsYUFBVztBQUM1QixnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQztBQUMvRCxnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQztBQUNqRSxnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxLQUFLLFVBQVUsQ0FBQztBQUFBLE1BQ3hFLENBQUM7QUFDRCxjQUFRLFFBQVEsQ0FBQztBQUFBLElBQ25CO0FBQUEsSUFDQSxNQUFNLFNBQVMsWUFBWTtBQUN6QixjQUFRLFNBQVMsSUFBSSxhQUFXLHFCQUFxQixTQUFTLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDdkYsY0FBUSxRQUFRLElBQUksYUFBVztBQUM3QixnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsbUJBQW1CLG1CQUFtQixHQUFHLFFBQVEsTUFBTSxVQUFVLEdBQUcsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsTUFBTSxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDOUssZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUMscUJBQXFCLHlCQUF5QixpQkFBaUIsR0FBRyxRQUFRLE1BQU0sVUFBVSxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ3BKLFlBQUksUUFBUSxRQUFRLEVBQUcsU0FBUSxHQUFHLENBQUMsRUFBRSxPQUFPLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMxRixnQkFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLGVBQWUsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsTUFBTSxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDOUYsZ0JBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxTQUFTLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQUEsTUFDL0YsQ0FBQztBQUNELGNBQVEsUUFBUSxDQUFDO0FBQUEsSUFDbkI7QUFBQSxJQUNBLE9BQU8sU0FBUyxZQUFZO0FBQzFCLGNBQVEsU0FBUyxJQUFJLGFBQVcscUJBQXFCLFNBQVMsUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUFBLElBQ3pGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsS0FBSyxTQUFTO0FBQ1osY0FBUSxRQUFRLEdBQUcsYUFBVztBQUM1QixnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQztBQUM5RCxnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQztBQUNqRSxnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxLQUFLLFVBQVUsQ0FBQztBQUFBLE1BQ3hFLENBQUM7QUFDRCxjQUFRLFFBQVEsQ0FBQztBQUFBLElBQ25CO0FBQUEsSUFDQSxNQUFNLFNBQVMsWUFBWTtBQUN6QixjQUFRLFNBQVMsSUFBSSxhQUFXLG1CQUFtQixTQUFTLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDckYsY0FBUSxRQUFRLElBQUksYUFBVztBQUM3QixnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRSxNQUFNLElBQUksQ0FBQztBQUNyRyxnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLEtBQUssQ0FBQyxrQkFBa0Isa0JBQWtCLG9CQUFvQix1QkFBdUIsR0FBRyxRQUFRLE1BQU0sVUFBVSxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ3BLLGdCQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSyxDQUFDLHFCQUFxQixpQkFBaUIsaUJBQWlCLEdBQUcsUUFBUSxNQUFNLFVBQVUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM3SSxnQkFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsTUFBTSxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDeEYsZ0JBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxTQUFTLEVBQUUsUUFBUSxhQUFhLE1BQU0sSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JHLGdCQUFRLEdBQUcsRUFBRSxFQUFFLE1BQU0sVUFBVSxFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxNQUFNLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFBLE1BQ2hHLENBQUM7QUFDRCxjQUFRLFFBQVEsQ0FBQztBQUFBLElBQ25CO0FBQUEsSUFDQSxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFRLFNBQVMsSUFBSSxhQUFXLG1CQUFtQixTQUFTLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFBQSxJQUN2RjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLEtBQUssU0FBUztBQUNaLGNBQVEsUUFBUSxHQUFHLGFBQVc7QUFDNUIsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDaEUsZ0JBQVEsR0FBRyxDQUFDLEVBQUUsT0FBTyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFDaEUsWUFBSSxRQUFRLFFBQVEsRUFBRyxTQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8saUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQUEsTUFDNUYsQ0FBQztBQUNELGNBQVEsUUFBUSxDQUFDO0FBQUEsSUFDbkI7QUFBQSxJQUNBLE1BQU0sU0FBUyxZQUFZO0FBQ3pCLGNBQVEsU0FBUyxJQUFJLGFBQVcsb0JBQW9CLFNBQVMsUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUN0RixjQUFRLFFBQVEsSUFBSSxhQUFXO0FBQzdCLGdCQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSyxDQUFDLHFCQUFxQixtQkFBbUIsa0JBQWtCLEdBQUcsUUFBUSxNQUFNLFVBQVUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQztBQUN6SSxnQkFBUSxHQUFHLENBQUMsRUFBRSxPQUFPLEtBQUssQ0FBQyxxQkFBcUIsaUJBQWlCLGlCQUFpQixHQUFHLFFBQVEsTUFBTSxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDdkksWUFBSSxhQUFhLE1BQU0sRUFBRyxTQUFRLEdBQUcsQ0FBQyxFQUFFLE9BQU8scUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ2hHLGdCQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxFQUFFLFFBQVEsYUFBYSxNQUFNLElBQUksRUFBRSxNQUFNLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQztBQUN4RixnQkFBUSxHQUFHLEVBQUUsRUFBRSxNQUFNLGVBQWUsRUFBRSxRQUFRLGFBQWEsTUFBTSxJQUFJLEVBQUUsS0FBSyxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFBQSxNQUM3RyxDQUFDO0FBQ0QsY0FBUSxRQUFRLENBQUM7QUFBQSxJQUNuQjtBQUFBLElBQ0EsT0FBTyxTQUFTLFlBQVk7QUFDMUIsY0FBUSxTQUFTLElBQUksYUFBVyxvQkFBb0IsU0FBUyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQUEsSUFDeEY7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxTQUFTLGFBQWEsU0FBNEM7QUFDdkUsUUFBTSxVQUFVLGFBQWEsT0FBTztBQUFBLElBQ2xDLE9BQU8sUUFBUTtBQUFBLElBQ2YsYUFBYSxRQUFRO0FBQUEsSUFDckIsYUFBYSxFQUFFLFNBQVMsUUFBUSxRQUFRO0FBQUEsSUFDeEMsU0FBUyxFQUFFLFNBQVMsY0FBYyxRQUFRLElBQUksR0FBRyxZQUFZLEVBQUU7QUFBQSxFQUNqRSxDQUFDO0FBQ0QsUUFBTSxVQUFVLGNBQWMsU0FBUyxRQUFRLElBQUk7QUFDbkQsUUFBTSxPQUFPLFdBQVcsUUFBUSxLQUFLO0FBQ3JDLFFBQU0sYUFBYSxpQkFBaUIsUUFBUSxJQUFJO0FBQ2hELE9BQUssS0FBSyxPQUFPO0FBQ2pCLE1BQUksYUFBYTtBQUNqQixTQUFPLFFBQVEsU0FBUyxLQUFLLFlBQVksWUFBWTtBQUNuRCxTQUFLLE1BQU0sU0FBUyxVQUFVO0FBQzlCO0FBQUEsRUFDRjtBQUNBLE9BQUssT0FBTyxTQUFTLFVBQVU7QUFDL0IsU0FBTyxRQUFRLE1BQU07QUFDdkI7OztBQzFRTyxJQUFNLGlCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLGtCQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUNSLENBQUM7OztBQ05NLElBQU1DLG1CQUFpQixhQUFhO0FBQUEsRUFDekMsT0FBTztBQUFB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QUFPLEtBQUs7QUFBQSxFQUNyRjtBQUNGO0FBRUEsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2QsV0FBVztBQUVYLFNBQVMsY0FBaUMsYUFBYSxFQUFHLGlCQUFpQixTQUFTLE1BQU0sY0FBYyxDQUFDO0FBQ3pHLFNBQVMsY0FBaUMsYUFBYSxFQUFHLGlCQUFpQixTQUFTLGFBQWE7QUFDakcsU0FBUyxjQUFpQyxpQkFBaUIsRUFBRyxpQkFBaUIsU0FBUyxNQUFNLFVBQVUsQ0FBQyxDQUFDO0FBQzFHLFNBQVMsY0FBaUMsa0JBQWtCLEVBQUcsaUJBQWlCLFNBQVMsTUFBTSxVQUFVLENBQUMsQ0FBQztBQUMzRyxTQUFTLGNBQWlDLGFBQWEsRUFBRyxpQkFBaUIsU0FBUyxpQkFBaUI7QUFDckcsU0FBUyxjQUFpQyxhQUFhLEVBQUcsaUJBQWlCLFNBQVMsU0FBUztBQUM3RixTQUFTLGNBQWlDLGVBQWUsRUFBRyxpQkFBaUIsU0FBUyxNQUFNO0FBQzFGLFFBQU0sV0FBVyxhQUFhO0FBQzlCLFFBQU0sTUFBTSxJQUFJLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxTQUFTLE1BQU0sR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUMsQ0FBQztBQUN4RixRQUFNLE9BQU8sU0FBUyxjQUFjLEdBQUc7QUFDdkMsT0FBSyxPQUFPO0FBQ1osT0FBSyxXQUFXLFNBQVM7QUFDekIsT0FBSyxNQUFNO0FBQ1gsU0FBTyxXQUFXLE1BQU0sSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLEdBQUk7QUFDdEQsV0FBUyxjQUEyQixnQkFBZ0IsRUFBRyxjQUFjLGFBQWEsU0FBUyxRQUFRO0FBQ3JHLENBQUM7QUFFRCxLQUFLLGtCQUFrQjsiLAogICJuYW1lcyI6IFsiYyIsICJ3aWR0aCIsICJoZWlnaHQiLCAic2hhZGVyIiwgImhleCIsICJoZXgiLCAic2hhZGVyIiwgInNoYWRlciIsICJjIiwgImhleCIsICJzY2VuZUlkIiwgInJvd0NvdW50IiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImVuZW15SWRGcm9tVHJhY2tJZCIsICJzY2VuZUlkIl0KfQo=

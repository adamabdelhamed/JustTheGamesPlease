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

// projects/NeonFactory/src/primitive-renderer.ts
var maxPrimitives = 1024;
var floatsPerPrimitive = 20;
var shader = (
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
  let pixel = item.position + local * item.size;
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
function rgba(hex) {
  const value = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) throw new Error(`Expected six-digit hex color, received "${hex}".`);
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
  constructor(canvas2, device, context, format) {
    this.canvas = canvas2;
    this.device = device;
    this.#context = context;
    const module = device.createShaderModule({ code: shader });
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
  render(primitives, timeSeconds = 0) {
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
        item.shape === "spark" ? 4 : item.shape === "ring" ? 3 : item.shape === "orb" ? 2 : item.shape === "bolt" ? 1 : 0,
        item.texture ?? 0,
        item.rimIntensity ?? 0,
        item.shadowStrength ?? 0,
        0,
        0
      ], offset);
    });
    this.device.queue.writeBuffer(this.#sceneBuffer, 0, new Float32Array([this.canvas.width, this.canvas.height, visible.length, timeSeconds]));
    if (data.length) this.device.queue.writeBuffer(this.#primitiveBuffer, 0, data);
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.#context.getCurrentTexture().createView(),
        clearValue: { r: 6e-3, g: 9e-3, b: 0.025, a: 1 },
        loadOp: "clear",
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
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
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
    const colors = [neonPalette.cyan, neonPalette.pink, neonPalette.gold, neonPalette.green, neonPalette.violet, neonPalette.orange];
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
        color: colors[index % colors.length],
        secondaryColor: colors[(index + 2) % colors.length],
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
      deathFlashScale: 1.8
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

// projects/NeonSwarm/CombatDefinition/TrackFamily.ts
var TrackFamilyDefinition = class extends FamilyDefinition {
  familyId = "track";
  label = "Track";
  members = {
    electricCauseway: {
      label: "Electric Causeway",
      description: "A short cyan causeway with fractured power seams and alternating lane pressure.",
      durationSeconds: 26,
      startingGun: "pulsePistol",
      startingGunLevel: 1,
      environment: {
        floorColor: "deepBlue",
        crackColor: "cyan",
        airColor: "violet",
        horizonColor: "pink",
        pulseRate: 1.35,
        crackDensity: 14,
        airStreakCount: 11
      },
      enemySchedule: [
        { atSeconds: 1.5, enemyId: "basicOrb", lane: 0, count: 3, spacing: 16 },
        { atSeconds: 3.8, enemyId: "basicOrb", lane: 1, count: 3, spacing: 16 },
        { atSeconds: 6.2, enemyId: "basicOrb", lane: 0, count: 4, spacing: 15 },
        { atSeconds: 8.1, enemyId: "basicOrb", lane: 1, count: 4, spacing: 15 },
        { atSeconds: 10.6, enemyId: "basicOrb", lane: 1, count: 5, spacing: 14 },
        { atSeconds: 13.2, enemyId: "basicOrb", lane: 0, count: 5, spacing: 14 },
        { atSeconds: 16.1, enemyId: "basicOrb", lane: 1, count: 5, spacing: 14 },
        { atSeconds: 19, enemyId: "basicOrb", lane: 0, count: 5, spacing: 14 }
      ],
      pickupSchedule: [
        { atSeconds: 5, gunId: "needlerSmg", level: 1, lane: 1 },
        { atSeconds: 11.5, gunId: "burstCarbine", level: 1, lane: 0 },
        { atSeconds: 17, gunId: "heavyCannon", level: 1, lane: 1 }
      ],
      multiplierSchedule: [
        { atSeconds: 2.5, multiplierId: "squadPlusOne", lane: 0 },
        { atSeconds: 4.8, multiplierId: "squadPlusOne", lane: 1 },
        { atSeconds: 7.4, multiplierId: "squadPlusOne", lane: 0 },
        { atSeconds: 9.6, multiplierId: "squadPlusOne", lane: 1 }
      ]
    }
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, track] of Object.entries(this.members)) {
      this.require(track.durationSeconds > 0, `${id} duration must be positive.`);
      this.require(track.enemySchedule.every((event) => event.atSeconds < track.durationSeconds), `${id} has an enemy after the finish.`);
      this.require(track.pickupSchedule.every((event) => event.atSeconds < track.durationSeconds), `${id} has a pickup after the finish.`);
      this.require(track.multiplierSchedule.every((event) => event.atSeconds < track.durationSeconds), `${id} has a multiplier after the finish.`);
      this.require(track.environment.crackDensity > 0 && track.environment.airStreakCount > 0, `${id} environment must contain detail.`);
      this.require(neonPalette[track.environment.floorColor] !== void 0, `${id} has an unknown floor color.`);
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
      spacing: 13,
      pickupColor: "gold",
      coreColor: "cyan",
      pulseRate: 2.2
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

// projects/NeonSwarm/src/input.ts
function bindSquadInput(container, joystick, callbacks) {
  addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") callbacks.setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") callbacks.setLane(1);
  });
  container.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (target.closest(joystick) || target.closest("button,input,select,a")) return;
    callbacks.setLane(event.clientX < innerWidth / 2 ? 0 : 1);
  });
  window.gameController?.createJoystick({
    element: joystick,
    container,
    radius: 54,
    orientationLayout: { portrait: { x: 82, yFromBottom: 88 }, landscape: { x: 88, yFromBottom: 82 } },
    recenterRadius: { portrait: 130, landscape: 150 }
  }).onChange((input) => {
    const magnitude = Math.abs(input.x);
    if (magnitude >= 0.95) {
      const requested = input.x < 0 ? 0 : 1;
      if (requested !== callbacks.lane()) callbacks.setLane(requested);
      callbacks.setAim(0);
    } else if (magnitude <= 0.5) {
      callbacks.setAim(input.x / 0.5);
    } else {
      callbacks.setAim(Math.sign(input.x));
    }
    if (input.magnitude === 0) callbacks.releaseAim();
  });
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
  setLane(lane, laneCenter, now) {
    if (lane !== this.lane) this.laneShiftStartedAt = now;
    this.lane = lane;
    this.targetX = laneCenter(lane) + this.aimOffset;
  }
  setAim(normalized, laneWidth, laneCenter) {
    this.aimOffset = Math.max(-1, Math.min(1, normalized)) * laneWidth * 0.28;
    this.targetX = laneCenter(this.lane) + this.aimOffset;
  }
  autoAim(targetOffset, laneWidth, laneCenter) {
    this.aimOffset += (Math.max(-laneWidth * 0.28, Math.min(laneWidth * 0.28, targetOffset)) - this.aimOffset) * 0.075;
    this.targetX = laneCenter(this.lane) + this.aimOffset;
  }
  update(deltaSeconds) {
    const response = 1 - Math.pow(8e-5, deltaSeconds);
    this.x += (this.targetX - this.x) * response;
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
function selectAutoAimOffset(targets, laneCenter, currentOffset = 0) {
  if (!targets.length) return 0;
  const closestY = Math.max(...targets.map((target) => target.y));
  const closestRow = targets.filter((target) => Math.abs(target.y - closestY) < 3);
  const currentAimX = laneCenter + currentOffset;
  const selected = [...closestRow].sort((left, right) => {
    const distanceDifference = Math.abs(left.x - currentAimX) - Math.abs(right.x - currentAimX);
    return distanceDifference || left.x - right.x;
  })[0];
  return selected.x - laneCenter;
}

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
developerTools.hidden = new URLSearchParams(location.search).get("dev") !== "1";
try {
  const renderer = await NeonPrimitiveRenderer.create(canvas);
  let activeTrack = null;
  let startedAt = 0;
  let lastFrame = performance.now();
  let playerLane = 0;
  let gunId = "pulsePistol";
  let gunLevel = 1;
  let cooldown = 0;
  let nextEnemy = 0;
  let nextPickup = 0;
  let nextMultiplier = 0;
  let breaches = 0;
  let enemies = [];
  let projectiles = [];
  let pickups = [];
  let multipliers = [];
  const squad = new SquadModel();
  let manualAim = false;
  let victory = null;
  const scale = () => Math.min(devicePixelRatio || 1, 2);
  const laneX = (lane) => canvas.width * (lane === 0 ? 0.39 : 0.61);
  const playerY = () => canvas.height * 0.82;
  const resetToTracks = () => {
    activeTrack = null;
    result.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track. Tap either side to switch lanes; use the joystick to fine aim.";
    runStatus.textContent = "";
    enemies = [];
    projectiles = [];
    pickups = [];
    multipliers = [];
    victory = null;
  };
  const startTrack = (track) => {
    activeTrack = track;
    startedAt = performance.now();
    lastFrame = startedAt;
    playerLane = 0;
    gunId = track.startingGun;
    gunLevel = track.startingGunLevel;
    cooldown = 0;
    nextEnemy = 0;
    nextPickup = 0;
    nextMultiplier = 0;
    breaches = 0;
    enemies = [];
    projectiles = [];
    pickups = [];
    multipliers = [];
    squad.count = 1;
    squad.aimOffset = 0;
    squad.x = laneX(0);
    squad.targetX = laneX(0);
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
      squad.setLane(lane, laneX, performance.now());
      playerLane = lane;
      manualAim = true;
    },
    setAim: (value) => {
      if (!activeTrack) return;
      squad.setAim(value, canvas.width * 0.22, laneX);
      manualAim = true;
    },
    releaseAim: () => {
      manualAim = false;
    }
  });
  const fire = () => {
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find((item) => item.level === gunLevel) ?? gun.levels[0];
    const points = squad.points(playerY(), scale());
    for (const point of points) {
      projectiles.push({
        lane: playerLane,
        x: point.x,
        y: playerY() - 20 * scale(),
        damage: tuning.damage,
        speed: tuning.projectileSpeed * scale(),
        radius: tuning.projectileRadius * scale(),
        color: neonPalette[gun.visualIdentity.projectileColor],
        trail: neonPalette[gun.visualIdentity.trailColor]
      });
    }
    cooldown += 1 / tuning.fireRatePerSecond;
  };
  const finish = (won) => {
    if (!activeTrack) return;
    result.hidden = false;
    resultTitle.textContent = won ? "FLAWLESS RUN" : "TRACK FAILED";
    resultDetail.textContent = won ? "No enemy touched or escaped past you." : `${breaches} enemy${breaches === 1 ? "" : "ies"} breached the defense.`;
    if (won) {
      victory = new NeonVictoryExperience({
        centerX: canvas.width / 2,
        centerY: canvas.height * 0.38,
        width: canvas.width,
        height: canvas.height,
        particleCount: 120
      });
    }
    activeTrack = null;
  };
  const update = (now) => {
    if (!activeTrack) return;
    const delta = Math.min(0.05, (now - lastFrame) / 1e3);
    lastFrame = now;
    const elapsed = (now - startedAt) / 1e3;
    runStatus.textContent = `${gunFamily.members[gunId].label} \xB7 ${Math.max(0, activeTrack.durationSeconds - elapsed).toFixed(1)}s`;
    while (nextEnemy < activeTrack.enemySchedule.length && activeTrack.enemySchedule[nextEnemy].atSeconds <= elapsed) {
      const event = activeTrack.enemySchedule[nextEnemy++];
      const count = event.count ?? 1;
      const spacing = (event.spacing ?? 15) * scale();
      for (let index = 0; index < count; index++) {
        enemies.push({
          lane: event.lane,
          x: laneX(event.lane) + (index - (count - 1) / 2) * spacing,
          y: 110 * scale(),
          health: orbFamily.members[event.enemyId].health,
          rowId: nextEnemy
        });
      }
    }
    while (nextPickup < activeTrack.pickupSchedule.length && activeTrack.pickupSchedule[nextPickup].atSeconds <= elapsed) {
      const event = activeTrack.pickupSchedule[nextPickup++];
      pickups.push({ lane: event.lane, y: 120 * scale(), gunId: event.gunId, level: event.level });
    }
    while (nextMultiplier < activeTrack.multiplierSchedule.length && activeTrack.multiplierSchedule[nextMultiplier].atSeconds <= elapsed) {
      const event = activeTrack.multiplierSchedule[nextMultiplier++];
      multipliers.push({ lane: event.lane, y: 125 * scale(), multiplierId: event.multiplierId });
    }
    if (!manualAim) {
      const laneEnemies = enemies.filter((enemy) => enemy.lane === squad.lane);
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), squad.aimOffset);
      squad.autoAim(offset, canvas.width * 0.22, laneX);
    }
    squad.update(delta);
    cooldown -= delta;
    if (cooldown <= 0) fire();
    for (const shot of [...projectiles]) {
      shot.y -= shot.speed * delta;
      if (shot.y < 0) projectiles.splice(projectiles.indexOf(shot), 1);
      for (const enemy of [...enemies]) {
        const hitRadius = shot.radius + orbFamily.members.basicOrb.radius * scale();
        if (shot.lane !== enemy.lane || Math.hypot(shot.x - enemy.x, shot.y - enemy.y) > hitRadius) continue;
        enemy.health -= shot.damage;
        projectiles.splice(projectiles.indexOf(shot), 1);
        if (enemy.health <= 0) enemies.splice(enemies.indexOf(enemy), 1);
        break;
      }
    }
    for (const enemy of [...enemies]) {
      enemy.y += orbFamily.members.basicOrb.speed * scale() * delta;
      if (enemy.y >= playerY()) {
        breaches++;
        enemies.splice(enemies.indexOf(enemy), 1);
      }
    }
    for (const pickup of [...pickups]) {
      pickup.y += 72 * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        gunId = pickup.gunId;
        gunLevel = pickup.level;
        cooldown = 0;
        pickups.splice(pickups.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height) pickups.splice(pickups.indexOf(pickup), 1);
    }
    for (const pickup of [...multipliers]) {
      pickup.y += 72 * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        multipliers.splice(multipliers.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }
    if (elapsed >= activeTrack.durationSeconds && enemies.length === 0) finish(breaches === 0);
  };
  const environment = (track, now) => {
    const s = scale();
    const pulse = 0.6 + Math.sin(now / 1e3 * track.environment.pulseRate * Math.PI * 2) * 0.2;
    const items = [];
    items.push({ x: canvas.width / 2, y: canvas.height * 0.76, width: canvas.width * 0.44, height: canvas.height * 0.46, color: neonPalette[track.environment.floorColor], secondaryColor: "#030712", glow: 0.1, intensity: 0.22, shape: "bolt" });
    items.push({ x: canvas.width / 2, y: canvas.height * 0.49, width: canvas.width * 0.34, height: 2 * s, color: neonPalette[track.environment.horizonColor], glow: 0.8, intensity: pulse, shape: "bolt" });
    for (let depth = 0; depth < 8; depth++) {
      const perspective = depth / 7;
      const y = canvas.height * (0.53 + perspective * 0.38);
      const width = canvas.width * (0.2 + perspective * 0.25);
      items.push({ x: canvas.width / 2, y, width, height: (1 + perspective * 1.5) * s, color: neonPalette[track.environment.floorColor], glow: 0.3, intensity: 0.18 + pulse * 0.18, shape: "bolt" });
    }
    for (const side of [-1, 1]) {
      for (let segment = 0; segment < 9; segment++) {
        const perspective = segment / 8;
        const x = canvas.width / 2 + side * canvas.width * (0.1 + perspective * 0.13);
        const y = canvas.height * (0.53 + perspective * 0.38);
        items.push({ x, y, width: (1 + perspective) * s, height: (18 + perspective * 42) * s, color: neonPalette[track.environment.crackColor], glow: 0.42, intensity: 0.22 + pulse * 0.2, shape: "bolt" });
      }
    }
    for (let index = 0; index < track.environment.crackDensity; index++) {
      const x = canvas.width * (0.3 + index * 37 % 100 / 250);
      const y = canvas.height * (0.56 + index * 61 % 100 / 250);
      items.push({ x, y, width: (1 + index % 3) * s, height: (20 + index % 5 * 12) * s, color: neonPalette[track.environment.crackColor], glow: 0.5, intensity: pulse * (0.45 + index % 4 * 0.1), shape: index % 3 ? "bolt" : "spark" });
    }
    for (let index = 0; index < track.environment.airStreakCount; index++) {
      const x = canvas.width * (0.12 + index * 53 % 100 / 130);
      const y = canvas.height * (0.16 + (index * 29 + now / 35) % 100 / 330);
      items.push({ x, y, width: 1.2 * s, height: (12 + index % 4 * 9) * s, color: neonPalette[track.environment.airColor], glow: 0.4, intensity: 0.3 + pulse * 0.25, shape: "bolt" });
    }
    return items;
  };
  const draw = (now) => {
    const primitives = activeTrack ? environment(activeTrack, now) : [];
    const s = scale();
    if (activeTrack) {
      for (const point of squad.points(playerY(), s)) {
        const smear = Math.min(22 * s, Math.abs(squad.targetX - squad.x) * 0.45);
        if (smear > 2) primitives.push({ x: point.x - Math.sign(squad.targetX - squad.x) * smear * 0.5, y: point.y, width: smear, height: 2.2 * s, color: neonPalette.deepBlue, secondaryColor: neonPalette.cyan, glow: 0.45, intensity: 0.5, shape: "bolt" });
        primitives.push({ x: point.x, y: point.y, width: multiplierFamily.members.squadPlusOne.memberRadius * s, color: neonPalette.cyan, secondaryColor: neonPalette.deepBlue, glow: 0.82, shape: "orb", rimIntensity: 0.8, shadowStrength: 0.4 });
      }
      for (const shot of projectiles) {
        primitives.push({ x: shot.x, y: shot.y + 9 * s, width: Math.max(1.2 * s, shot.radius * 0.5), height: 18 * s, color: shot.trail, secondaryColor: shot.color, glow: 0.35, intensity: 0.7, shape: "bolt" });
        primitives.push({ x: shot.x, y: shot.y, width: shot.radius, height: shot.radius * 2.5, color: shot.color, secondaryColor: shot.trail, glow: 0.65, shape: "bolt" });
      }
      for (const enemy of enemies) primitives.push({ x: enemy.x, y: enemy.y, width: orbFamily.members.basicOrb.radius * s, color: neonPalette.pink, secondaryColor: neonPalette.violet, glow: 0.75, texture: 0.25, rimIntensity: 1.1, shadowStrength: 0.65, shape: "orb" });
      for (const pickup of pickups) {
        const visual = gunFamily.members[pickup.gunId].visualIdentity;
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 18 * s, color: neonPalette[visual.projectileColor], secondaryColor: neonPalette[visual.trailColor], glow: 0.5, shape: "ring" });
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 9 * s, height: 20 * s, color: neonPalette[visual.projectileColor], secondaryColor: neonPalette[visual.trailColor], glow: 0.7, shape: "bolt" });
      }
      for (const pickup of multipliers) {
        const spec = multiplierFamily.members[pickup.multiplierId];
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 18 * s, color: neonPalette[spec.pickupColor], secondaryColor: neonPalette[spec.coreColor], glow: 0.65, shape: "ring" });
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 10 * s, color: neonPalette[spec.coreColor], secondaryColor: neonPalette[spec.pickupColor], glow: 0.8, shape: "spark" });
      }
    }
    if (victory) primitives.push(...victory.primitives(now));
    renderer.render(primitives, now / 1e3);
  };
  const frame = (now) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=game.js.map

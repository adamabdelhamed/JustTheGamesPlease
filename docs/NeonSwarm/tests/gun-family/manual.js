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
function selectAutoAimOffset(targets, laneCenter, currentOffset = 0) {
  if (!targets.length) return 0;
  const explicitRows = /* @__PURE__ */ new Map();
  for (const target of targets) {
    if (target.rowId === void 0) continue;
    const row = explicitRows.get(target.rowId) ?? [];
    row.push(target);
    explicitRows.set(target.rowId, row);
  }
  const closestRow = explicitRows.size ? [...explicitRows.values()].sort((left, right) => Math.max(...right.map((target) => target.y)) - Math.max(...left.map((target) => target.y)))[0] : targets.filter((target) => Math.abs(target.y - Math.max(...targets.map((candidate) => candidate.y))) < 3);
  const currentAimX = laneCenter + currentOffset;
  const selected = [...closestRow].sort((left, right) => {
    const distanceDifference = Math.abs(left.x - currentAimX) - Math.abs(right.x - currentAimX);
    return distanceDifference || left.x - right.x;
  })[0];
  return selected.x - laneCenter;
}

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
try {
  const renderer = await NeonPrimitiveRenderer.create(canvas);
  const guns = gunFamily.members;
  const orb = orbFamily.members.basicOrb;
  const enemies = [];
  const projectiles = [];
  const pickups = [];
  const effects = [];
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
  const laneX = (lane) => canvas.width * (lane === 0 ? 0.38 : 0.62);
  const playerY = () => canvas.height * 0.82;
  const scale = () => Math.min(devicePixelRatio || 1, 2);
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
    enemies.push({ id: ++entitySequence, lane, x, y, health: orb.health, hitFlashUntil: 0, rowId });
  };
  const spawnPickup = (lane) => {
    pickups.push({ gunId: gunSelect.value, level: Number(levelSelect.value), lane, y: 135 * scale() });
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
    button.addEventListener("click", () => multipliers.push({ lane: Number(button.dataset.spawnMultiplier), y: 135 * scale() }));
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
  const spawnProjectile = (lane, spawnX, angleDegrees, level2, gun) => {
    shotSequence += 1;
    const angle = angleDegrees * Math.PI / 180;
    const speed = level2.projectileSpeed * scale();
    projectiles.push({
      id: ++entitySequence,
      lane,
      x: spawnX + (pseudoRandom(entitySequence + shotSequence * 3.17) * 2 - 1) * gun.visualIdentity.horizontalJitter * scale(),
      y: playerY() - 22 * scale(),
      vx: Math.sin(angle) * speed,
      radius: level2.projectileRadius * scale(),
      damage: level2.damage,
      speed: Math.cos(angle) * speed,
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
      trailLength: level2.trailLength * scale(),
      tracer: level2.tracerEveryNthShot > 0 && shotSequence % level2.tracerEveryNthShot === 0,
      knockback: level2.knockback * scale(),
      hitFlashScale: level2.hitFlashScale,
      hitEnemyIds: /* @__PURE__ */ new Set()
    });
  };
  const fireVolley = (gun, level2) => {
    for (const point of squad.points(playerY(), scale())) {
      const count = Math.max(1, level2.projectileCount);
      for (let index = 0; index < count; index++) {
        const offset = count === 1 ? 0 : (index / (count - 1) - 0.5) * level2.spreadDegrees;
        spawnProjectile(playerLane, point.x, offset, level2, gun);
      }
    }
    recoil = level2.muzzleFlashScale * 7 * scale();
    effects.push({
      kind: "muzzle",
      style: gun.visualIdentity.muzzleEffect,
      x: squad.x,
      y: playerY() - 22 * scale(),
      color: neonPalette[gun.visualIdentity.projectileColor],
      secondaryColor: neonPalette[gun.visualIdentity.trailColor],
      radius: 10 * level2.muzzleFlashScale * scale(),
      expiresAt: performance.now() + gun.visualIdentity.muzzleDurationMs,
      duration: gun.visualIdentity.muzzleDurationMs,
      seed: shotSequence
    });
    window.gameAudio?.playRotated("Primary", 3);
  };
  const fire = (gun, level2) => {
    fireVolley(gun, level2);
    for (let index = 1; index < level2.burstCount; index++) {
      setTimeout(() => fireVolley(gun, level2), level2.burstIntervalMs * index);
    }
  };
  const hitEnemy = (projectile, enemy, now) => {
    projectile.hitEnemyIds.add(enemy.id);
    enemy.health -= projectile.damage;
    enemy.y -= projectile.knockback;
    enemy.hitFlashUntil = now + orb.hitFlashDurationMs;
    effects.push({
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
      enemies.splice(enemies.indexOf(enemy), 1);
      kills += 1;
      window.gameAudio?.play("EnemyDestroyed");
      updateReadout();
    }
    if (projectile.pierceRemaining > 0) projectile.pierceRemaining -= 1;
    else projectiles.splice(projectiles.indexOf(projectile), 1);
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
    recoil *= Math.pow(1e-3, delta);
    if (!aimControl.manual) {
      const laneEnemies = enemies.filter((enemy) => enemy.lane === squad.lane);
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), squad.aimOffset);
      squad.autoAim(offset, canvas.width * 0.22, laneX);
    }
    squad.update(delta);
    for (const projectile of [...projectiles]) {
      projectile.x += projectile.vx * delta;
      projectile.y -= projectile.speed * delta;
      if (projectile.y < -40 * scale()) {
        projectiles.splice(projectiles.indexOf(projectile), 1);
        continue;
      }
      for (const enemy of [...enemies]) {
        if (projectile.hitEnemyIds.has(enemy.id)) continue;
        const dx = projectile.x - enemy.x;
        const dy = projectile.y - enemy.y;
        const hitRadius = projectile.radius + orb.radius * scale();
        if (dx * dx + dy * dy <= hitRadius * hitRadius) {
          hitEnemy(projectile, enemy, now);
          if (!projectiles.includes(projectile)) break;
        }
      }
    }
    for (const enemy of [...enemies]) {
      enemy.y += orb.speed * scale() * delta;
      if (enemy.y >= playerY()) enemies.splice(enemies.indexOf(enemy), 1);
    }
    for (const pickup of [...pickups]) {
      pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        equip(pickup.gunId, pickup.level);
        pickups.splice(pickups.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height + 30 * scale()) {
        pickups.splice(pickups.indexOf(pickup), 1);
      }
    }
    for (const pickup of [...multipliers]) {
      pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members.squadPlusOne.squadAdded);
        multipliers.splice(multipliers.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }
    for (const effect of [...effects]) {
      if (effect.expiresAt <= now) effects.splice(effects.indexOf(effect), 1);
    }
  };
  const draw = (now) => {
    const s = scale();
    const primitives = [];
    for (const point of squad.points(playerY() + recoil, s)) primitives.push({ x: point.x, y: point.y, width: multiplierFamily.members.squadPlusOne.memberRadius * s, color: neonPalette.cyan, secondaryColor: neonPalette.deepBlue, glow: 0.85, shape: "orb", rimIntensity: 0.8 });
    for (const projectile of projectiles) {
      primitives.push({
        x: projectile.x,
        y: projectile.y + projectile.trailLength / 2,
        width: Math.max(projectile.radius * projectile.trailWidthScale, 1.1 * s),
        height: projectile.trailLength,
        color: projectile.trailColor,
        secondaryColor: projectile.color,
        glow: projectile.tracer ? 1.25 : 0.45,
        intensity: projectile.visualIntensity * (projectile.tracer ? 1.45 : 0.72),
        shape: "bolt"
      });
      primitives.push({
        x: projectile.x,
        y: projectile.y,
        width: projectile.radius,
        height: projectile.radius * projectile.aspect,
        color: projectile.color,
        secondaryColor: projectile.coreColor,
        glow: projectile.tracer ? 1.4 : 0.72,
        intensity: projectile.visualIntensity * (projectile.tracer ? 1.35 : 1),
        shape: projectile.shape === "needle" ? "circle" : "bolt"
      });
    }
    for (const enemy of enemies) {
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
    for (const pickup of multipliers) {
      const spec = multiplierFamily.members.squadPlusOne;
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 18 * s, color: neonPalette[spec.pickupColor], secondaryColor: neonPalette[spec.coreColor], glow: 0.6, shape: "ring" });
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 10 * s, color: neonPalette[spec.coreColor], secondaryColor: neonPalette[spec.pickupColor], glow: 0.75, shape: "spark" });
    }
    for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      const pickupColor = neonPalette[gun.visualIdentity.projectileColor];
      const trailColor = neonPalette[gun.visualIdentity.trailColor];
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 9 * s, height: 9 * gun.visualIdentity.projectileAspect * 0.55 * s, color: pickupColor, secondaryColor: trailColor, glow: 0.82, intensity: gun.visualIdentity.visualIntensity, shape: gun.visualIdentity.projectileShape === "needle" ? "circle" : "bolt" });
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 18 * s, color: pickupColor, secondaryColor: trailColor, glow: 0.48, intensity: 0.72, shape: "ring" });
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 13 * s, color: trailColor, secondaryColor: pickupColor, glow: 0.34, intensity: 0.58, shape: "spark" });
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
    renderer.render(primitives, now / 1e3);
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
//# sourceMappingURL=manual.js.map

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

// projects/NeonFactory/src/lane-runner-scenes.ts
var laneRunnerSceneIds = ["neonHall", "aurora", "crystalForge", "voidGarden", "solarArray"];
function isLaneRunnerSceneId(value) {
  return laneRunnerSceneIds.includes(value);
}

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
  "pickup.weapon.sword.needleRapier": "n",
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

// projects/NeonSwarm/CombatDefinition/tracks/Track4.ts
var generatedTrack = {
  label: "Skybreak",
  description: "The Aurora opener is busier than the tutorial arc, but gives a nearby shield and burst weapon before the first squeeze.",
  environment: {
    sceneId: "aurora"
  },
  definition: {
    layout: `
..... | .....
.E.E. | .E.E.
..... | .....
..W.. | ..E..
..E.. | ..W..
..... | .....
..2.. | .....
..... | .....
.E... | ...E.
..E.. | ..E..
..... | .....
..a.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..W.. | .....
..... | ..W..
..... | .....
..I.. | .....
..... | .....
.E... | ..E..
..... | .....
..S.. | .....
..... | .....
..E.. | ..E..
.E... | .....
..... | ...E.
..... | .....
..2.. | .....
..... | .....
..E.. | .....
..... | .....
..I.. | .....
..... | .....
..S.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.9 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.82 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.9 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.78 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1.08
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track5.ts
var generatedTrack2 = {
  label: "Ribbon Storm",
  description: "Aurora pressure comes in waves: flankers, glass decoys, a tank break, then a heavy weapon payoff.",
  environment: {
    sceneId: "aurora"
  },
  definition: {
    layout: `
..... | .....
.E.E. | .E.E.
..W.. | .....
..... | ..W..
..... | .....
..X.. | .....
..... | .....
.P.E. | .E.P.
..... | .....
..W.. | ..E..
..E.. | ..W..
..... | .....
..J.. | .....
..... | .....
.E.E. | .E.E.
..... | .....
..T.. | .....
..... | .....
..2.. | .....
..... | .....
.E... | ...E.
..W.. | ..W..
..... | .....
..... | .....
..... | .....
...E. | .....
..... | .....
..P.. | ..E..
..E.. | ..P..
..... | ..P..
..K.. | ..P..
..... | ..P..
..W.. | ..P..
..... | .....
..... | .....
..S.. | .....
..... | .....
..E.. | .....
..... | .....
..b.. | .....
..S.. | .....
..J.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "T": { id: "enemy.tank" },
      "P": { id: "enemy.glassShield" },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.92 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.88 },
      "K": { id: "pickup.weapon.gun.splitterRifle", speed: 0.92 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.86 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.86 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.78 }
    },
    balance: {
      enemyHp: 1.04,
      enemySpeed: 1.12
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track6.ts
var generatedTrack3 = {
  label: "Magnetic Dawn",
  description: "A dense Aurora finale with hard surges, deliberate safe shelves, and top-tier tools before the biggest waves.",
  environment: {
    sceneId: "aurora"
  },
  definition: {
    layout: `
..T.. | ..T..
.E.E. | .E.E.
..W.. | ..W..
..... | .....
..T.. | .....
..... | ..T..
..... | .....
..X.. | .....
..... | .....
.P.E. | .E.P.
..W.. | ..W..
..... | .....
..K.. | .....
..... | .....
.E.E. | .E.E.
..W.. | .....
..... | ..W..
..... | .....
..2.. | .....
..... | .....
..T.. | .....
..... | .....
..b.. | .....
..... | .....
.E.E. | .E.E.
..P.. | ..P..
..W.. | ..E..
..E.. | ..W..
..... | .....
..J.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..W.. | ..W..
..... | .....
..X.. | .....
..... | .....
..T.. | .....
..... | ..E..
.E.E. | .E.E.
..... | .....
..c.. | .....
..... | .....
..W.. | ..W..
.E.E. | .E.E.
..... | .....
..2.. | .....
..... | .....
.P.E. | .E.P.
..W.. | ..W..
..... | .....
..K.. | .....
..... | .....
..E.. | .....
..... | .....
..S.. | .....
..... | .....
..I.. | .....
..... | .....
..X.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "T": { id: "enemy.tank" },
      "P": { id: "enemy.glassShield" },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.92 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.86 },
      "K": { id: "pickup.weapon.gun.splitterRifle", speed: 0.9 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.78 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.84 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.84 },
      "c": { id: "pickup.weapon.sword.needleRapier", speed: 0.86 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.76 }
    },
    balance: {
      enemyHp: 1.08,
      enemySpeed: 1.16
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track7.ts
var generatedTrack4 = trackBuilder.create({
  label: "Prism Ignition",
  description: "A clean Crystal Forge opener with early pistol access, simple lane reading, and a gentle winger reveal.",
  environment: { sceneId: "crystalForge" },
  balance: { enemyHp: 1, enemySpeed: 1 }
}).rebuild(5, (section) => {
  section.at(0).weapon("gun.pulsePistol", { column: c.left.mid, speed: 0.9 });
  section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid, speed: 0.9 });
}).respite(4).pressure(9, (section) => {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 5, gap: 1, speed: 0.96 });
  section.at(3).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 0.92 });
}).respite(2).rebuild(5, (section) => {
  section.at(0).weapon("sword.arcBlade", { column: c.left.nearInner, speed: 0.85 });
  section.at(2).weapon("shield.lightGuard", { column: c.right.nearInner, speed: 0.85 });
  section.at(4).enemy("winger", { column: c.right.outer, speed: 0.9 });
}).pressure(9, (section) => {
  section.at(0).line("basic", { column: c.left.mid, count: 4, gap: 1, speed: 1 });
  section.at(1).alternating("winger", { columns: [c.right.outer, c.left.outer], count: 3, gap: 2, speed: 0.9 });
  section.at(6).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track8.ts
var generatedTrack5 = trackBuilder.create({
  label: "Facet Run",
  description: "Crystal pressure sharpens with decoys, cross-lane walls, and a mid-run needler pickup.",
  environment: { sceneId: "crystalForge" },
  balance: { enemyHp: 1.05, enemySpeed: 1.04 }
}).rebuild(5, (section) => {
  section.at(0).weapon("gun.pulsePistol", { column: c.right.mid, speed: 0.9 });
  section.at(2).weapon("shield.lightGuard", { column: c.left.nearOuter, speed: 0.86 });
}).respite(4).pressure(11, (section) => {
  section.at(0).alternating("basic", { columns: [c.left.nearOuter, c.right.nearOuter, c.left.mid, c.right.mid], count: 6, gap: 1, speed: 1 });
  section.at(2).drip("glassShield", { column: c.left.outer, rows: 7, every: 3, speed: 1.05 });
  section.at(7).wall("basic", { columns: [c.left.mid, c.right.mid], speed: 1.02 });
}).respite(2).rebuild(6, (section) => {
  section.at(0).weapon("gun.needlerSmg", { column: c.left.mid, speed: 0.86 });
  section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid, speed: 0.88 });
  section.at(4).weapon("sword.arcBlade", { column: c.left.nearInner, speed: 0.9 });
}).pressure(11, (section) => {
  section.at(0).line("winger", { column: c.right.outer, count: 4, gap: 1, speed: 0.94 });
  section.at(1).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 5, gap: 1, speed: 1.06 });
  section.at(8).wall("basic", { columns: [c.left.nearOuter, c.left.nearInner, c.right.nearInner, c.right.nearOuter], speed: 0.98 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track9.ts
var generatedTrack6 = trackBuilder.create({
  label: "Glass Hammer",
  description: "The Crystal Forge finale alternates fast wing pressure with tank breaks and deliberate power shelves.",
  environment: { sceneId: "crystalForge" },
  balance: { enemyHp: 1.12, enemySpeed: 1.08 }
}).rebuild(6, (section) => {
  section.at(0).weapon("gun.burstCarbine", { column: c.left.mid, speed: 0.84 });
  section.at(1).weapon("shield.satelliteGuard", { column: c.right.mid, speed: 0.86 });
  section.at(4).pickup("unitMultiplier.2x", { column: c.left.nearOuter, speed: 0.88 });
}).respite(4).pressure(12, (section) => {
  section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 5, gap: 1, speed: 1 });
  section.at(2).drip("glassShield", { column: c.right.mid, rows: 8, every: 2, speed: 1.08 });
  section.at(8).enemy("tank", { column: c.left.nearOuter, speed: 0.82 });
}).respite(2).rebuild(6, (section) => {
  section.at(0).weapon("gun.heavyCannon", { column: c.right.mid, speed: 0.82 });
  section.at(2).weapon("sword.cleaver", { column: c.left.mid, speed: 0.85 });
  section.at(4).weapon("shield.hexGuard", { column: c.right.nearOuter, speed: 0.86 });
}).pressure(13, (section) => {
  section.at(0).wall("basic", { columns: [c.left.outer, c.left.nearInner, c.right.nearInner, c.right.outer], speed: 1.02 });
  section.at(2).line("winger", { column: c.left.outer, count: 4, gap: 2, speed: 0.98 });
  section.at(3).line("basic", { column: c.right.mid, count: 5, gap: 1, speed: 1.08 });
  section.at(10).wall("tank", { columns: [c.left.nearOuter, c.right.inner], speed: 0.78 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track1.ts
var generatedTrack7 = {
  label: "First Glow",
  description: "A short teaching run with a weapon in reach, one lane at a time, then a calm two-lane finish.",
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..E.. | .....
..... | .....
..... | ..E..
..... | .....
..... | .....
..... | .....
..E.. | .....
..... | ..E..
..E.. | .....
..... | .....
..... | ..E..
..... | .....
..... | .....
..... | .....
..E.. | .....
..... | ..E..
..... | .....
..... | ..E..
..... | ..E..
..... | .....
..... | ...E.
..2.. | .....
..a.. | .....
..... | .....
..E.. | .....
..E.. | .....
.E... | .....
..... | .....
..... | .....
..... | .....
..E.. | ..S..
..... | .....
..... | .....
..G.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.15 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.92 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.95 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.9 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 0.92
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track2.ts
var generatedTrack8 = {
  label: "Drift Lesson",
  description: "Alternating lanes introduce aim pressure, with a shield pocket before the first paired wave.",
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
..E.. | ..E..
..... | .....
.E... | ...E.
..... | .....
..2.. | .....
..... | .....
..E.. | ..E..
..... | .....
..I.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..... | .....
..S.. | .....
..... | .....
..E.. | ..E..
.E... | .....
..... | ...E.
..... | .....
..a.. | .....
..... | ..E..
.E.E. | .....
..... | .....
..... | .....
..E.. | .....
..... | .....
..G.. | .....
..... | .....
.E... | .....
..... | .....
..... | .....
..S.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.1 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.88 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.86 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.9 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.82 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track3.ts
var generatedTrack9 = {
  label: "Nebula Gate",
  description: "The learning finale adds fast flankers and a single tank, with clear recovery shelves between pressure waves.",
  environment: {
    sceneId: "neonHall"
  },
  definition: {
    layout: `
..... | .....
.E.E. | .E.E.
..... | .....
..W.. | .....
..... | ..W..
..... | .....
..J.. | .....
..... | .....
.E... | ...E.
..E.. | ..E..
..... | .....
..X.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..W.. | .....
..T.. | ..W..
..... | .....
..2.. | .....
..... | .....
..... | .....
..... | ..E..
.E... | .....
..... | .....
..b.. | .....
..... | .....
.E.E. | .E.E.
..... | .....
..W.. | ..E..
..E.. | ..W..
..... | .....
..I.. | .....
..... | .....
.E.E. | .....
..... | .....
..S.. | .....
..... | .....
..E.. | .....
..... | .....
..G.. | .....
..M.. | .....
`,
    legend: {
      ".": { id: "empty" },
      "M": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "W": { id: "enemy.winger" },
      "T": { id: "enemy.tank" },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 1.15 },
      "I": { id: "pickup.weapon.gun.burstCarbine", speed: 0.88 },
      "J": { id: "pickup.weapon.gun.heavyCannon", speed: 0.9 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.85 },
      "X": { id: "pickup.weapon.shield.hexGuard", speed: 0.9 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.92 },
      "b": { id: "pickup.weapon.sword.cleaver", speed: 0.9 },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.82 }
    },
    balance: {
      enemyHp: 1,
      enemySpeed: 1.04
    }
  }
};

// projects/NeonSwarm/CombatDefinition/tracks/Track13.ts
var generatedTrack10 = trackBuilder.create({
  label: "Panel Dawn",
  description: "A Solar Array opener built around straight reads, clean weapon timing, and brief bright recovery windows.",
  environment: { sceneId: "solarArray" },
  balance: { enemyHp: 1, enemySpeed: 1.03 }
}).rebuild(5, (section) => {
  section.at(0).weapon("gun.pulsePistol", { column: c.right.mid, speed: 0.88 });
  section.at(2).weapon("shield.lightGuard", { column: c.left.mid, speed: 0.86 });
  section.at(4).enemy("basic", { column: c.left.outer, speed: 0.92 });
}).respite(4).pressure(9, (section) => {
  section.at(0).line("basic", { column: c.right.mid, count: 4, gap: 1, speed: 1 });
  section.at(1).alternating("basic", { columns: [c.left.mid, c.right.nearOuter], count: 4, gap: 1, speed: 0.98 });
  section.at(8).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
}).respite(2).rebuild(5, (section) => {
  section.at(0).pickup("unitMultiplier.2x", { column: c.left.nearInner, speed: 0.86 });
  section.at(2).weapon("sword.arcBlade", { column: c.right.nearInner, speed: 0.86 });
}).pressure(10, (section) => {
  section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 4, gap: 2, speed: 0.94 });
  section.at(1).drip("basic", { column: c.left.mid, rows: 8, every: 2, speed: 1.02 });
  section.at(8).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track14.ts
var generatedTrack11 = trackBuilder.create({
  label: "Heliostat Rush",
  description: "Solar Array pressure accelerates with brighter flankers, glass cover, and a decisive burst carbine rebuild.",
  environment: { sceneId: "solarArray" },
  balance: { enemyHp: 1.08, enemySpeed: 1.08 }
}).rebuild(6, (section) => {
  section.at(0).weapon("gun.burstCarbine", { column: c.left.mid, speed: 0.84 });
  section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid, speed: 0.86 });
  section.at(4).weapon("shield.satelliteGuard", { column: c.left.nearOuter, speed: 0.84 });
}).respite(4).pressure(12, (section) => {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid, c.left.nearOuter, c.right.nearOuter], count: 6, gap: 1, speed: 1.05 });
  section.at(1).drip("glassShield", { column: c.right.outer, rows: 9, every: 3, speed: 1.12 });
  section.at(8).wall("winger", { columns: [c.left.outer, c.right.outer], speed: 0.96 });
}).respite(2).rebuild(6, (section) => {
  section.at(0).weapon("gun.splitterRifle", { column: c.right.mid, speed: 0.82 });
  section.at(2).weapon("sword.needleRapier", { column: c.left.mid, speed: 0.84 });
  section.at(4).weapon("shield.lightGuard", { column: c.right.nearOuter, speed: 0.86 });
}).pressure(12, (section) => {
  section.at(0).line("winger", { column: c.left.outer, count: 4, gap: 1, speed: 0.98 });
  section.at(1).line("basic", { column: c.right.mid, count: 5, gap: 1, speed: 1.08 });
  section.at(8).enemy("tank", { column: c.left.nearOuter, speed: 0.82 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track15.ts
var generatedTrack12 = trackBuilder.create({
  label: "Mirror Zenith",
  description: "The Solar Array finale combines mirrored walls, heavy tools, and fast outer-lane surges.",
  environment: { sceneId: "solarArray" },
  balance: { enemyHp: 1.16, enemySpeed: 1.12 }
}).rebuild(6, (section) => {
  section.at(0).weapon("gun.heavyCannon", { column: c.right.mid, speed: 0.8 });
  section.at(1).weapon("shield.hexGuard", { column: c.left.mid, speed: 0.82 });
  section.at(4).pickup("unitMultiplier.2x", { column: c.right.nearOuter, speed: 0.84 });
}).respite(4).pressure(13, (section) => {
  section.at(0).wall("basic", { columns: [c.left.nearOuter, c.left.nearInner, c.right.nearInner, c.right.nearOuter], speed: 1.04 });
  section.at(2).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 5, gap: 1, speed: 1 });
  section.at(5).drip("glassShield", { column: c.left.mid, rows: 8, every: 2, speed: 1.12 });
  section.at(10).enemy("tank", { column: c.right.inner, speed: 0.78 });
}).respite(2).rebuild(7, (section) => {
  section.at(0).weapon("gun.splitterRifle", { column: c.left.mid, speed: 0.8 });
  section.at(2).weapon("sword.cleaver", { column: c.right.mid, speed: 0.82 });
  section.at(4).weapon("shield.satelliteGuard", { column: c.left.nearOuter, speed: 0.84 });
}).pressure(14, (section) => {
  section.at(0).line("basic", { column: c.right.mid, count: 5, gap: 1, speed: 1.1 });
  section.at(1).alternating("winger", { columns: [c.left.outer, c.right.outer, c.left.nearOuter], count: 5, gap: 2, speed: 0.98 });
  section.at(10).wall("tank", { columns: [c.left.nearOuter, c.right.inner], speed: 0.76 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track10.ts
var generatedTrack13 = trackBuilder.create({
  label: "Bloom Signal",
  description: "A Void Garden opener with sparse drifting threats, readable rebuilds, and soft cross-lane pressure.",
  environment: { sceneId: "voidGarden" },
  balance: { enemyHp: 1, enemySpeed: 1 }
}).rebuild(5, (section) => {
  section.at(0).weapon("gun.pulsePistol", { column: c.left.mid, speed: 1 });
  section.at(3).weapon("sword.arcBlade", { column: c.right.mid, speed: 1 });
}).respite(4).pressure(11, (section) => {
  section.at(0).drip("basic", { column: c.left.nearOuter, rows: 8, every: 2, speed: 1 });
  section.at(1).alternating("basic", { columns: [c.right.mid, c.left.mid], count: 4, gap: 2, speed: 1 });
  section.at(6).wall("glassShield", { columns: [c.left.outer, c.right.outer], speed: 1 });
}).respite(3).rebuild(5, (section) => {
  section.at(0).weapon("shield.lightGuard", { column: c.left.nearInner, speed: 1 });
  section.at(2).pickup("unitMultiplier.2x", { column: c.right.nearInner, speed: 1 });
}).pressure(9, (section) => {
  section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 4, gap: 1, speed: 1 });
  section.at(1).line("basic", { column: c.right.mid, count: 4, gap: 1, speed: 1 });
  section.at(7).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track11.ts
var generatedTrack14 = trackBuilder.create({
  label: "Root Lattice",
  description: "Void Garden density grows through offset lines, decoy blooms, and controlled shield timing.",
  environment: { sceneId: "voidGarden" },
  balance: { enemyHp: 1.04, enemySpeed: 1.07 }
}).rebuild(6, (section) => {
  section.at(0).weapon("gun.needlerSmg", { column: c.right.mid, speed: 0.86 });
  section.at(2).weapon("shield.satelliteGuard", { column: c.left.mid, speed: 0.84 });
  section.at(4).enemy("glassShield", { column: c.right.outer, speed: 1.08 });
}).respite(4).pressure(12, (section) => {
  section.at(0).line("basic", { column: c.left.nearOuter, count: 5, gap: 1, speed: 1.02 });
  section.at(1).line("basic", { column: c.right.nearOuter, count: 5, gap: 1, speed: 1.02 });
  section.at(4).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 3, gap: 2, speed: 0.98 });
  section.at(9).wall("glassShield", { columns: [c.left.mid, c.right.mid], speed: 1.1 });
}).respite(2).rebuild(6, (section) => {
  section.at(0).weapon("sword.needleRapier", { column: c.left.nearInner, speed: 0.84 });
  section.at(2).pickup("unitMultiplier.2x", { column: c.right.nearInner, speed: 0.85 });
  section.at(4).weapon("gun.burstCarbine", { column: c.left.mid, speed: 0.86 });
}).pressure(12, (section) => {
  section.at(0).drip("glassShield", { column: c.left.outer, rows: 10, every: 2, speed: 1.1 });
  section.at(1).alternating("basic", { columns: [c.right.mid, c.left.mid, c.right.nearOuter], count: 6, gap: 1, speed: 1.08 });
  section.at(8).enemy("tank", { column: c.right.inner, speed: 0.82 });
}).build();

// projects/NeonSwarm/CombatDefinition/tracks/Track12.ts
var generatedTrack15 = trackBuilder.create({
  label: "Night Orchard",
  description: "The Void Garden finale uses clustered blooms, paired tanks, and precision pickups without crowding the read.",
  environment: { sceneId: "voidGarden" },
  balance: { enemyHp: 1.12, enemySpeed: 1.1 }
}).rebuild(6, (section) => {
  section.at(0).weapon("gun.splitterRifle", { column: c.left.mid, speed: 0.84 });
  section.at(1).weapon("shield.satelliteGuard", { column: c.right.mid, speed: 0.84 });
  section.at(4).pickup("unitMultiplier.2x", { column: c.left.nearOuter, speed: 0.86 });
}).respite(4).pressure(13, (section) => {
  section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer, c.left.nearOuter], count: 6, gap: 1, speed: 1 });
  section.at(2).drip("glassShield", { column: c.right.mid, rows: 9, every: 2, speed: 1.12 });
  section.at(9).wall("basic", { columns: [c.left.nearOuter, c.left.nearInner, c.right.nearInner, c.right.nearOuter], speed: 1.04 });
}).respite(2).rebuild(7, (section) => {
  section.at(0).weapon("gun.heavyCannon", { column: c.right.mid, speed: 0.82 });
  section.at(2).weapon("sword.cleaver", { column: c.left.mid, speed: 0.84 });
  section.at(4).weapon("shield.hexGuard", { column: c.right.nearOuter, speed: 0.84 });
}).pressure(14, (section) => {
  section.at(0).line("basic", { column: c.left.mid, count: 5, gap: 1, speed: 1.08 });
  section.at(1).line("winger", { column: c.right.outer, count: 4, gap: 2, speed: 0.98 });
  section.at(6).enemy("tank", { column: c.right.inner, speed: 0.8 });
  section.at(10).wall("tank", { columns: [c.left.nearOuter, c.right.inner], speed: 0.76 });
}).build();

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

// projects/NeonSwarm/test-pages/sword-family/smoke.ts
var status = document.querySelector("#test-status");
var resultsElement = document.querySelector("#results");
function validateSword(id, sword) {
  const failures = [];
  if (sword.range <= 0) failures.push(`range ${sword.range} must be positive`);
  if (sword.arcDegrees <= 0 || sword.arcDegrees > 360) failures.push(`arcDegrees ${sword.arcDegrees} must be in (0, 360]`);
  if (sword.damage <= 0) failures.push(`damage ${sword.damage} must be positive`);
  if (sword.cooldownSeconds <= 0) failures.push(`cooldownSeconds ${sword.cooldownSeconds} must be positive`);
  if (sword.maxTargets < 1) failures.push(`maxTargets ${sword.maxTargets} must be >= 1`);
  if (sword.slashDurationMs <= 0) failures.push(`slashDurationMs ${sword.slashDurationMs} must be positive`);
  if (sword.slashThickness <= 0) failures.push(`slashThickness ${sword.slashThickness} must be positive`);
  if (!neonPalette[sword.color]) failures.push(`color "${sword.color}" not in neonPalette`);
  return { swordId: id, passed: failures.length === 0, failures };
}
var run = () => {
  const results = Object.entries(swordFamily.members).map(([id, sword]) => validateSword(id, sword));
  resultsElement.innerHTML = results.map((r) => `
    <li data-passed="${r.passed}" data-sword-id="${r.swordId}">
      <strong>${swordFamily.members[r.swordId].label}</strong>
      <span>${r.passed ? "PASS" : "FAIL"}</span>
      <span class="detail">${r.passed ? `range: ${swordFamily.members[r.swordId].range}px \xB7 arc: ${swordFamily.members[r.swordId].arcDegrees}\xB0 \xB7 cd: ${swordFamily.members[r.swordId].cooldownSeconds}s` : r.failures.join(" | ")}</span>
    </li>`).join("");
  return results;
};
var test = createTestPage("neon-swarm-sword-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(
    `${result.swordId} definition is valid`,
    result.passed,
    result.failures.join("; ") || "all checks passed"
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvbGFuZS1ydW5uZXItc2NlbmVzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90ZXN0LWhhcm5lc3MudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9NdWx0aXBsaWVyRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9Td29yZEZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0RlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tCdWlsZGVyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazQudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrNS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s2LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazcudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrOC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2s5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrMi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2szLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE0LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazE1LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEwLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazExLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFjazEyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vdGVzdC1wYWdlcy9zd29yZC1mYW1pbHkvc21va2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCIsIFwiYXVyb3JhXCIsIFwiY3J5c3RhbEZvcmdlXCIsIFwidm9pZEdhcmRlblwiLCBcInNvbGFyQXJyYXlcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxuICBhdXJvcmE6IFwiQXVyb3JhXCIsXG4gIGNyeXN0YWxGb3JnZTogXCJDcnlzdGFsIEZvcmdlXCIsXG4gIHZvaWRHYXJkZW46IFwiVm9pZCBHYXJkZW5cIixcbiAgc29sYXJBcnJheTogXCJTb2xhciBBcnJheVwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVQYWxldHRlIHtcbiAgZmxvb3I6IHN0cmluZztcbiAgYm91bmRhcnk6IHN0cmluZztcbiAgbGFuZTogc3RyaW5nO1xuICBjZW50ZXJMYW5lOiBzdHJpbmc7XG4gIGFjY2VudDogc3RyaW5nO1xuICBsYW5lSGlnaGxpZ2h0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBoYWxsRmxvb3JDb2xvcixcbiAgYm91bmRhcnk6IGhhbGxEZWVwQmx1ZSxcbiAgbGFuZTogaGFsbE11dGVkQmx1ZSxcbiAgY2VudGVyTGFuZTogaGFsbE11dGVkVmlvbGV0LFxuICBhY2NlbnQ6IGhhbGxBY2NlbnRQaW5rLFxuICBsYW5lSGlnaGxpZ2h0OiBoYWxsTXV0ZWRDeWFuLFxufTtcblxuY29uc3QgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwMzExMGZcIixcbiAgYm91bmRhcnk6IFwiIzE3OGM5MlwiLFxuICBsYW5lOiBcIiMxN2Q3YjNcIixcbiAgY2VudGVyTGFuZTogXCIjOGY1NmZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZmM3XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2I5ZmY2YVwiLFxufTtcblxuY29uc3QgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwNzEwMThcIixcbiAgYm91bmRhcnk6IFwiIzI2ZDdmZlwiLFxuICBsYW5lOiBcIiM2M2YxZmZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY1ZmQ4XCIsXG4gIGFjY2VudDogXCIjZmZiODRkXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2Y0ZmJmZlwiLFxufTtcblxuY29uc3Qgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDgwODE4XCIsXG4gIGJvdW5kYXJ5OiBcIiM2ZjUzZmZcIixcbiAgbGFuZTogXCIjMzVlOGI2XCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNGZjN1wiLFxuICBhY2NlbnQ6IFwiI2I5ZmY2YVwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiM5YmQ3ZmZcIixcbn07XG5cbmNvbnN0IHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzExMGMwN1wiLFxuICBib3VuZGFyeTogXCIjZmY5ZTM4XCIsXG4gIGxhbmU6IFwiI2ZmZDQ1YVwiLFxuICBjZW50ZXJMYW5lOiBcIiMyNmQ3ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmNjZcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZmZmNmI4XCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgcmV0dXJuIHNjZW5lQ3JlYXRvcnNbb3B0aW9ucy5zY2VuZUlkXShvcHRpb25zKTtcbn1cblxuY29uc3Qgc2NlbmVDcmVhdG9yczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCAob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucykgPT4gTmVvblRvcERvd25TY2VuZT4gPSB7XG4gIG5lb25IYWxsOiBjcmVhdGVOZW9uSGFsbCxcbiAgYXVyb3JhOiBjcmVhdGVBdXJvcmEsXG4gIGNyeXN0YWxGb3JnZTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGUsIGFkZENyeXN0YWxGb3JnZURldGFpbHMpLFxuICB2b2lkR2FyZGVuOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGUsIGFkZFZvaWRHYXJkZW5EZXRhaWxzKSxcbiAgc29sYXJBcnJheTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlLCBhZGRTb2xhckFycmF5RGV0YWlscyksXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXVyb3JhKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUxhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFHcm91bmRGbGFyZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUhvcml6b25WZWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShcbiAgb3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyxcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgYWRkRGV0YWlsczogKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcikgPT4gdm9pZCxcbik6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkVGhlbWVkTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZERldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUoXG4gIGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sXG4gIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICB0aW1lTXM6IG51bWJlcixcbik6IHZvaWQge1xuICBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXMsIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQsIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUpO1xuICBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtczogTmVvblByaW1pdGl2ZVtdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgcHVsc2UgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgKiBoYWxsRW5lcmd5U3BlZWQpICogLjI7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIC40Miwgd2lkdGg6IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoLCBoZWlnaHQ6IGhlaWdodCAqIDEuMDgsIGNvbG9yOiBwYWxldHRlLmZsb29yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC45LCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogcGFsZXR0ZS5ib3VuZGFyeSwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC43OCwgd2lkdGg6IHdpZHRoICogLjE4LCBoZWlnaHQ6IDEuMiwgY29sb3I6IHBhbGV0dGUuYWNjZW50LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5jZW50ZXJMYW5lLCBnbG93OiAuMjQsIGludGVuc2l0eTogLjA4LCBzaGFwZTogXCJib2x0XCIgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSk6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBbYm90dG9tLCBob3Jpem9uXSBvZiBbW2xlZnRCb3R0b20sIGxlZnRIb3Jpem9uXSwgW3JpZ2h0Qm90dG9tLCByaWdodEhvcml6b25dXSBhcyBjb25zdCkge1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUuYm91bmRhcnksIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIC41NiwgMS4zKTtcbiAgfVxuXG4gIGZvciAobGV0IGxhbmUgPSAxOyBsYW5lIDw9IDM7IGxhbmUrKykge1xuICAgIGNvbnN0IHUgPSBsYW5lIC8gNDtcbiAgICBjb25zdCBzdGFydCA9IGxlcnBQb2ludChsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgdSk7XG4gICAgY29uc3QgZW5kID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IGNvbG9yID0gbGFuZSA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUubGFuZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHJvdyAlIDQgPT09IDEgPyBwYWxldHRlLmxhbmUgOiByb3cgJSA0ID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5hY2NlbnQ7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4xNSArIHQgKiAuMjMpICogKC41NSArIHJvd1B1bHNlICogLjQ1KSArIHN1cmdlICogLjA1NSwgMy4xICsgdCAqIDIpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMiArIHQgKiAuMjcpICogKC41MiArIHJvd1B1bHNlICogLjQ4KSArIHN1cmdlICogLjA3LCAuNzUgKyB0ICogLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgNzsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE5MDAgKyBwdWxzZUluZGV4IC8gNykgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNTUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzQgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBoYWxsTXV0ZWRDeWFuLCBvcGFjaXR5LCAxLjEgKyB0ICogMS40KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRmxvb3JHbHlwaHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCByb3dzID0gWzIsIDQsIDYsIDgsIDEwLCAxMl07XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIC41KTtcbiAgICBjb25zdCBzY2FsZSA9IC40NSArIHQgKiAxLjE7XG4gICAgY29uc3QgcHVsc2UgPSAuNDggKyBNYXRoLnNpbih0aW1lTXMgLyA3MjAgKyByb3cgKiAxLjMpICogLjI0O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiA3ICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IDcgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbERlZXBCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJvdyAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4yNCArIHB1bHNlICogLjE2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IGdsb3dQdWxzZSA9IC43NSArIE1hdGguc2luKHRpbWVNcyAvIDY4MCkgKiAuMjU7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIGhhbGxBY2NlbnRQaW5rLCAuMiArIGdsb3dQdWxzZSAqIC4wOCwgMS4xKTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggLSB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkQ3lhbiwgLjE2LCAuODUpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54ICsgd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRWaW9sZXQsIC4xNiwgLjg1KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggKyAuNSkgLyA4O1xuICAgIGNvbnN0IGJhc2UgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3Qgc2lkZUJpYXMgPSBNYXRoLmFicyh1IC0gLjUpICogMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGJhc2UueCxcbiAgICAgIHk6IGJhc2UueSAtIGhlaWdodCAqICguMDE4ICsgc2lkZUJpYXMgKiAuMDE4KSxcbiAgICAgIHdpZHRoOiAxICsgc2lkZUJpYXMgKiAuNyxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyBzaWRlQmlhcyAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbEFjY2VudFBpbmssXG4gICAgICBnbG93OiAuMjQsXG4gICAgICBpbnRlbnNpdHk6IC4wNyArIGdsb3dQdWxzZSAqIC4wMzUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4oaW5kZXggKiAxLjcpICogLjEyLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxTaWRlUGFuZWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBzaWRlIG9mIFswLCAxXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxMCwgMS42OCk7XG4gICAgICBjb25zdCByYWlsID0gc2lkZSA9PT0gMFxuICAgICAgICA/IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdClcbiAgICAgICAgOiBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgICBjb25zdCBvdXR3YXJkID0gc2lkZSA9PT0gMCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaWNrZXIgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA2MDAgKyBpbmRleCAqIDEuNSArIHNpZGUpICogLjI4O1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHg6IHJhaWwueCArIG91dHdhcmQgKiB3aWR0aCAqICguMDM1ICsgdCAqIC4wNiksXG4gICAgICAgIHk6IHJhaWwueSAtIGhlaWdodCAqICguMDE4ICsgdCAqIC4wMTIpLFxuICAgICAgICB3aWR0aDogMS4yICsgdCAqIDEuMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHQgKiAuMDgpLFxuICAgICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkQ3lhbixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgICAgZ2xvdzogLjMsXG4gICAgICAgIGludGVuc2l0eTogKC4wNzUgKyB0ICogLjA2NSkgKiBmbGlja2VyLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEVuZXJneVRyYWNlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjEyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAxMTY7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjcpKTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0ID09PSAwID8gLjE4IDogaW5kZXggJSA0ID09PSAxID8gLjM0IDogaW5kZXggJSA0ID09PSAyID8gLjY2IDogLjgyO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBzaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjcgKyB0aW1lTXMgLyAxNzAwKSAqIC4wMzUpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyAzOTAgKyBpbmRleCAqIDEuMSkgKiAuMzg7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiAuOCArIGluZGV4ICUgMyAqIC41LFxuICAgICAgaGVpZ2h0OiAxMCArIGluZGV4ICUgNSAqIDcsXG4gICAgICBjb2xvcjogaW5kZXggJSA1ID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbE11dGVkQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyAoaW5kZXggJSA0KSAqIC4wMTgpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgOTsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE1NTAgKyBwdWxzZUluZGV4IC8gOSkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNDgpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzIgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMTdkN2IzXCIsIG9wYWNpdHksIDEgKyB0ICogMS43KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFHcm91bmRGbGFyZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4wOCArICgoaW5kZXggKiAyOSkgJSAxMDApIC8gMTEyO1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS42MikpO1xuICAgIGNvbnN0IGxhbmVTaWRlID0gaW5kZXggJSAyID09PSAwID8gLjIyIDogLjc4O1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBsYW5lU2lkZSArIE1hdGguc2luKGluZGV4ICogMS4xICsgdGltZU1zIC8gMTgwMCkgKiAuMDQpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA0MzAgKyBpbmRleCAqIDEuMykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA5ICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IGluZGV4ICUgMyA9PT0gMSA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA2KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjE4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUhvcml6b25WZWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA3OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCAtIDMpIC8gNjtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5zaW4odGltZU1zIC8gMTEwMCArIGluZGV4ICogLjkpO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogdnAueCArIHUgKiB3aWR0aCAqIC4zNixcbiAgICAgIHk6IHZwLnkgKyBoZWlnaHQgKiAoLjA3NSArIGluZGV4ICogLjAwNiksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAzNSArIGluZGV4ICogLjAwNCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMTIgKyBNYXRoLmFicyh3YXZlKSAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMDQ1ICsgTWF0aC5hYnMod2F2ZSkgKiAuMDI1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IHUgKiAuMjggKyB3YXZlICogLjA4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lZExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA4OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTcwMCArIHB1bHNlSW5kZXggLyA4KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcGFsZXR0ZS5hY2NlbnQsIC4yOCAqICgxIC0gdHJhdmVsKSwgMS4xICsgdCAqIDEuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTY7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxNywgMS41NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xNCA6IC44NjtcbiAgICBjb25zdCBlZGdlID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgZ2xpbnQgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA1MjAgKyBpbmRleCAqIDEuMTcpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogZWRnZS54LFxuICAgICAgeTogZWRnZS55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTIgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDI1ICsgdCAqIC4wNiksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZiODRkXCIgOiBcIiM2M2YxZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiNmZjVmZDhcIiA6IFwiI2Y0ZmJmZlwiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogZ2xpbnQsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgICByb3RhdGlvbjogKHNpZGUgPCAuNSA/IC0uMjIgOiAuMjIpICsgTWF0aC5zaW4odGltZU1zIC8gMTQwMCArIGluZGV4KSAqIC4wOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCBcIiNmZmI4NGRcIiwgLjIyLCAxLjMpO1xufVxuXG5mdW5jdGlvbiBhZGRWb2lkR2FyZGVuRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coLjA4ICsgKChpbmRleCAqIDIzKSAlIDEwMCkgLyAxMTIsIDEuNjUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPCAyID8gLjE4IDogLjgyO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUgKyBNYXRoLnNpbih0aW1lTXMgLyAxOTAwICsgaW5kZXgpICogLjAzNSk7XG4gICAgY29uc3QgYmxvb20gPSAuNSArIE1hdGguc2luKHRpbWVNcyAvIDc2MCArIGluZGV4ICogLjgpICogLjMyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgaGVpZ2h0OiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMzVlOGI2XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjNmY1M2ZmXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC40MixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIHQgKiAuMDUpICogYmxvb20sXG4gICAgICBzaGFwZTogaW5kZXggJSAyID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjQsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIFwiIzM1ZThiNlwiLCAuMTgsIDEuMSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNvbGFyQXJyYXlEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE5LCAxLjQ4KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjEgOiAuOTtcbiAgICBjb25zdCBtb3VudCA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IHB1bHNlID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gNjEwICsgaW5kZXggKiAxLjA1KSAqIC4zO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogbW91bnQueCxcbiAgICAgIHk6IG1vdW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTIgKyB0ICogLjAyNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZkNDVhXCIgOiBcIiNmZjllMzhcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiMyNmQ3ZmZcIiA6IFwiI2ZmNGY2NlwiLFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogcHVsc2UsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogc2lkZSA8IC41ID8gLS4zOCA6IC4zOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCBcIiNmZmY2YjhcIiwgLjI0LCAxLjQpO1xufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJleHBvcnQgdHlwZSBUZXN0U3RhdHVzID0gXCJib290aW5nXCIgfCBcInJlYWR5XCIgfCBcInBhc3NlZFwiIHwgXCJmYWlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXN0QXNzZXJ0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzZWQ6IGJvb2xlYW47XG4gIGRldGFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0UGFnZVNuYXBzaG90IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBUZXN0U3RhdHVzO1xuICBhc3NlcnRpb25zOiBUZXN0QXNzZXJ0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0UGFnZTxURHJpdmVyIGV4dGVuZHMgb2JqZWN0PihcbiAgaWQ6IHN0cmluZyxcbiAgZHJpdmVyOiBURHJpdmVyLFxuICBzdGF0dXNFbGVtZW50OiBIVE1MRWxlbWVudCxcbikge1xuICBjb25zdCBzbmFwc2hvdDogVGVzdFBhZ2VTbmFwc2hvdCA9IHsgaWQsIHN0YXR1czogXCJib290aW5nXCIsIGFzc2VydGlvbnM6IFtdIH07XG4gIGNvbnN0IHB1Ymxpc2ggPSAoKSA9PiB7XG4gICAgc3RhdHVzRWxlbWVudC5kYXRhc2V0LnN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c25hcHNob3Quc3RhdHVzLnRvVXBwZXJDYXNlKCl9IFx1MDBCNyAke3NuYXBzaG90LmFzc2VydGlvbnMuZmlsdGVyKGEgPT4gYS5wYXNzZWQpLmxlbmd0aH0vJHtzbmFwc2hvdC5hc3NlcnRpb25zLmxlbmd0aH0gYXNzZXJ0aW9uc2A7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGVzdFN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgfTtcbiAgY29uc3QgYXBpID0ge1xuICAgIC4uLmRyaXZlcixcbiAgICBnZXRTbmFwc2hvdDogKCk6IFRlc3RQYWdlU25hcHNob3QgPT4gc3RydWN0dXJlZENsb25lKHNuYXBzaG90KSxcbiAgICByZWFkeSgpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IFwicmVhZHlcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICAgIGFzc2VydChuYW1lOiBzdHJpbmcsIHBhc3NlZDogYm9vbGVhbiwgZGV0YWlsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5hc3NlcnRpb25zLnB1c2goeyBuYW1lLCBwYXNzZWQsIGRldGFpbCB9KTtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IHNuYXBzaG90LmFzc2VydGlvbnMuZXZlcnkoYXNzZXJ0aW9uID0+IGFzc2VydGlvbi5wYXNzZWQpID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgfTtcbiAgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgbmVvbkZhY3RvcnlUZXN0OiB0eXBlb2YgYXBpIH0pLm5lb25GYWN0b3J5VGVzdCA9IGFwaTtcbiAgcHVibGlzaCgpO1xuICByZXR1cm4gYXBpO1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidXJzdENhcmJpbmU6IHtcbiAgICAgIGxhYmVsOiBcIkJ1cnN0IENhcmJpbmVcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcImJ1cnN0XCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzaG9ydFRyYWNlckJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJncm91cGVkVm9sbGV5XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJnb2xkXCIsIHRyYWlsQ29sb3I6IFwib3JhbmdlXCIsIGNvcmVDb2xvcjogXCJnb2xkXCIsIHByb2plY3RpbGVBc3BlY3Q6IDIuMiwgdHJhaWxXaWR0aFNjYWxlOiAwLjgsIHZpc3VhbEludGVuc2l0eTogMS4wNSwgbXV6emxlRWZmZWN0OiBcImdyb3VwZWRQdWxzZVwiLCBpbXBhY3RFZmZlY3Q6IFwiYnVyc3RDcm9zc1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA4NiwgaW1wYWN0RHVyYXRpb25NczogMTIwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Ljk1LGRhbWFnZTouNzUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo3MixzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjA4LGRhbWFnZTouODUscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIuODUsYnVyc3RDb3VudDozLGJ1cnN0SW50ZXJ2YWxNczo2NCxzcHJlYWREZWdyZWVzOi43NSx0cmFpbExlbmd0aDoxNixtdXp6bGVGbGFzaFNjYWxlOi42LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjkscHJvamVjdGlsZVNwZWVkOjcyNSxwcm9qZWN0aWxlUmFkaXVzOjMsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1OCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouNjUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNwbGl0dGVyUmlmbGU6IHtcbiAgICAgIGxhYmVsOiBcIlNwbGl0dGVyIFJpZmxlXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJwYWlyZWRTcHJlYWRcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInBhaXJlZEJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY3VycmVudExhbmVGb3JrXCIsIHByb2plY3RpbGVTaGFwZTogXCJzcGxpdEJvbHRcIiwgcHJvamVjdGlsZUNvbG9yOiBcInZpb2xldFwiLCB0cmFpbENvbG9yOiBcInBpbmtcIiwgY29yZUNvbG9yOiBcInZpb2xldFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAzLjQsIHRyYWlsV2lkdGhTY2FsZTogMC41NSwgdmlzdWFsSW50ZW5zaXR5OiAxLCBtdXp6bGVFZmZlY3Q6IFwidHdpblByb25nc1wiLCBpbXBhY3RFZmZlY3Q6IFwic3BsaXRSaXBwbGVcIiwgbXV6emxlRHVyYXRpb25NczogOTUsIGltcGFjdER1cmF0aW9uTXM6IDE0NSwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi44LHByb2plY3RpbGVTcGVlZDo1ODUscHJvamVjdGlsZVJhZGl1czoyLjc1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNTUsZGFtYWdlOjEuMDUscHJvamVjdGlsZVNwZWVkOjY2NSxwcm9qZWN0aWxlUmFkaXVzOjMscHJvamVjdGlsZUNvdW50OjIsc3ByZWFkRGVncmVlczozLjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBndW5dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRTaG90UGF0dGVybnMuaW5jbHVkZXMoZ3VuLnNob3RQYXR0ZXJuKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBzaG90IHBhdHRlcm4uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkUHJvamVjdGlsZUJlaGF2aW9ycy5pbmNsdWRlcyhndW4ucHJvamVjdGlsZUJlaGF2aW9yKSwgYCR7aWR9IGhhcyBhbiB1bnN1cHBvcnRlZCBwcm9qZWN0aWxlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS5wcm9qZWN0aWxlQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwcm9qZWN0aWxlIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2d1bi52aXN1YWxJZGVudGl0eS50cmFpbENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gdHJhaWwgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLnZpc3VhbElkZW50aXR5Lm11enpsZUR1cmF0aW9uTXMgPiAwICYmIGd1bi52aXN1YWxJZGVudGl0eS5pbXBhY3REdXJhdGlvbk1zID4gMCwgYCR7aWR9IGVmZmVjdCBkdXJhdGlvbnMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGRlZmluZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVNwYXduRW50cmFuY2UgPSBcInNjYXR0ZXJcIiB8IFwiZmFkZVwiO1xuZXhwb3J0IHR5cGUgRW5lbXlEZWF0aFZpc3VhbCA9IFwiY2xvdWRcIiB8IFwibm9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFwZUlkOiBzdHJpbmc7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG4gIHNwYXduRW50cmFuY2U6IEVuZW15U3Bhd25FbnRyYW5jZTtcbiAgc3Bhd25Tb3VuZDogc3RyaW5nIHwgbnVsbDtcbiAgZGVhdGhTb3VuZDogc3RyaW5nO1xuICBkZWF0aFZpc3VhbDogRW5lbXlEZWF0aFZpc3VhbDtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiaHVudGVyLWV5ZVwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgZ2xhc3NTaGllbGQ6IHtcbiAgICAgIGxhYmVsOiBcIkdsYXNzIFNoaWVsZFwiLFxuICAgICAgaGVhbHRoOiAuMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNS42LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IC4xLFxuICAgICAgc2NvcmU6IDMsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidHJpY2stZ2F0ZVwiLFxuICAgICAgZ2xvdzogLjYyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xMixcbiAgICAgIHJpbUludGVuc2l0eTogMC45LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC40NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogNzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuMSxcbiAgICAgIHNoYXBlWm9vbTogMy4wNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IC42NSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjI1LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJmYWRlXCIsXG4gICAgICBzcGF3blNvdW5kOiBudWxsLFxuICAgICAgZGVhdGhTb3VuZDogXCJHbGFzc1NoaWVsZFNoYXR0ZXJcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHdpbmdlcjoge1xuICAgICAgbGFiZWw6IFwiV2luZ2VyXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNzYsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxNCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJlbGl0ZS13aW5nc1wiLFxuICAgICAgZ2xvdzogLjg2LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4yMixcbiAgICAgIHJpbUludGVuc2l0eTogMS4yLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC42NixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogODUsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuNzUsXG4gICAgICBzaGFwZVpvb206IDMuMjUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIHRhbms6IHtcbiAgICAgIGxhYmVsOiBcIlRhbmtcIixcbiAgICAgIGhlYWx0aDogNixcbiAgICAgIHNwZWVkOiA0NCxcbiAgICAgIHJhZGl1czogMTYsXG4gICAgICBjb2x1bW5TcGFuOiAzLFxuICAgICAgY29udGFjdERhbWFnZTogMixcbiAgICAgIHNjb3JlOiA4MCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJ0YW5rLWJ1bmtlclwiLFxuICAgICAgZ2xvdzogMS4wNSxcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTgsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuNDUsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogLjg1LFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiAxMzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDIuNyxcbiAgICAgIHNoYXBlWm9vbTogNC40LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMi4xLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuOSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJCb3NzXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkJvc3NEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgT3JiTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBvcmJdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuaGVhbHRoID4gMCwgYCR7aWR9IGhlYWx0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zcGVlZCA+IDAsIGAke2lkfSBzcGVlZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihvcmIuY29sdW1uU3BhbikgJiYgb3JiLmNvbHVtblNwYW4gPj0gMSwgYCR7aWR9IGNvbHVtblNwYW4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmdsb3cgPj0gMCAmJiBvcmIucmltSW50ZW5zaXR5ID49IDAsIGAke2lkfSB2aXN1YWwgaW50ZW5zaXRpZXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5zdXJmYWNlVGV4dHVyZSA+PSAwICYmIG9yYi5zdXJmYWNlVGV4dHVyZSA8PSAxLCBgJHtpZH0gc3VyZmFjZVRleHR1cmUgbXVzdCBiZSBmcm9tIDAgdG8gMS5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yYkZhbWlseSA9IG5ldyBPcmJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBPcmJJZCA9IGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpcGxpZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBzcXVhZEFkZGVkOiBudW1iZXI7XG4gIG1heFNxdWFkU2l6ZTogbnVtYmVyO1xuICBtZW1iZXJzUGVyUm93OiBudW1iZXI7XG4gIG1lbWJlclJhZGl1czogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIHBpY2t1cENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHB1bHNlUmF0ZTogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb206IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibXVsdGlwbGllclwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3F1YWQgTXVsdGlwbGllclwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHNxdWFkUGx1c09uZToge1xuICAgICAgbGFiZWw6IFwiKzEgV2luZ21hdGVcIixcbiAgICAgIHNxdWFkQWRkZWQ6IDEsXG4gICAgICBtYXhTcXVhZFNpemU6IDEwLFxuICAgICAgbWVtYmVyc1BlclJvdzogNSxcbiAgICAgIG1lbWJlclJhZGl1czogNS4yNSxcbiAgICAgIHNwYWNpbmc6IDI5LFxuICAgICAgcGlja3VwQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgY29yZUNvbG9yOiBcImN5YW5cIixcbiAgICAgIHB1bHNlUmF0ZTogMi4yLFxuICAgICAgcGlja3VwU2hhcGVab29tOiAzLjEsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uc3F1YWRBZGRlZCA+IDAsIGAke2lkfSBtdXN0IGFkZCBzcXVhZCBtZW1iZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWF4U3F1YWRTaXplID49IGl0ZW0ubWVtYmVyc1BlclJvdywgYCR7aWR9IG1heCBzcXVhZCBtdXN0IGZpdCBhdCBsZWFzdCBvbmUgcm93LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWVtYmVyUmFkaXVzID4gMCAmJiBpdGVtLnNwYWNpbmcgPiBpdGVtLm1lbWJlclJhZGl1cyAqIDIsIGAke2lkfSBtZW1iZXIgZ2VvbWV0cnkgb3ZlcmxhcHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpZXJGYW1pbHkgPSBuZXcgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE11bHRpcGxpZXJJZCA9IGtleW9mIHR5cGVvZiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hpZWxkT3JiaXRlclNoYXBlID0gXCJkb3RcIiB8IFwiaGV4XCI7XG5leHBvcnQgdHlwZSBTaGllbGRNb2RlID0gXCJjaGFyZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic2hpZWxkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICBtb2RlOiBTaGllbGRNb2RlO1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqIEJhc2ljIHNoaWVsZCBzdHJlbmd0aC4gRW5lbXkgSFAgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgdmFsdWUuICovXG4gIG1heENoYXJnZXM6IG51bWJlcjtcbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IDA7XG4gIHB1c2hEaXN0YW5jZTogMDtcbiAgc2xvd011bHRpcGxpZXI6IDE7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBvcmJpdGVyU2hhcGU6IFNoaWVsZE9yYml0ZXJTaGFwZTtcbiAgb3JiaXRlckNvdW50OiBudW1iZXI7XG4gIG9yYml0ZXJTcGVlZDogbnVtYmVyO1xuICBvcmJpdGVyU2l6ZTogbnVtYmVyO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hpZWxkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaGllbGRcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGxpZ2h0R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkxpZ2h0IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiAyLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiA4LFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA0LFxuICAgICAgb3JiaXRlclNwZWVkOiAxLFxuICAgICAgb3JiaXRlclNpemU6IDQuNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiTGlnaHR3ZWlnaHQgc2hpZWxkIHdpdGggdHdvIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIHNhdGVsbGl0ZUd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJTYXRlbGxpdGUgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTAsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNixcbiAgICAgIG9yYml0ZXJTcGVlZDogMC43NSxcbiAgICAgIG9yYml0ZXJTaXplOiA0Ljc1LFxuICAgICAgYWdlbnROb3RlczogXCJCYWxhbmNlZCBzaGllbGQgd2l0aCBmb3VyIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIGhleEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJIZXggR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBtYXhDaGFyZ2VzOiA3LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMixcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJoZXhcIixcbiAgICAgIG9yYml0ZXJDb3VudDogOCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMC40NSxcbiAgICAgIG9yYml0ZXJTaXplOiA1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBzaGllbGQgd2l0aCBzZXZlbiBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzaGllbGRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiwgYCR7aWR9IG11c3QgdXNlIHRoZSBzaGFyZWQgY2hhcmdlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1heENoYXJnZXMgPiAwLCBgJHtpZH0gc3RyZW5ndGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlckNvdW50ID4gMCwgYCR7aWR9IG11c3QgaGF2ZSBvcmJpdGVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlclNwZWVkID49IDAsIGAke2lkfSBvcmJpdGVyU3BlZWQgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkRmFtaWx5ID0gbmV3IFNoaWVsZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNoaWVsZElkID0ga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEhvdyB0aGUgc3dvcmQgc2VsZWN0cyB0YXJnZXRzIGZyb20gdGhlIG5lYXJieSB0aHJlYXQgcG9vbC5cbiAqIEFsbCBtb2RlcyBhcmUgbGFuZS1hd2FyZSB2aWEgdGhlIE5lYXJieVRocmVhdFF1ZXJ5IG1vZHVsZS5cbiAqL1xuZXhwb3J0IHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlID1cbiAgfCBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIgICAvLyBjbG9zZXN0IGVuZW15IGluIHRoZSBwbGF5ZXIncyBhY3RpdmUgbGFuZVxuICB8IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiICAgIC8vIGNsb3Nlc3QgZW5lbXkgcmVnYXJkbGVzcyBvZiBsYW5lXG4gIHwgXCJmcm9udE1vc3RUaHJlYXRcIiAgICAgICAgLy8gZmFydGhlc3QtYWR2YW5jZWQgKGhpZ2hlc3QgeSkgZW5lbXkgaW4gcmFuZ2VcbiAgfCBcImNsdXN0ZXJOZWFyUGxheWVyXCI7ICAgICAvLyBwaWNrcyB1cCB0byBtYXhUYXJnZXRzIGVuZW1pZXMgd2l0aGluIHJlYWNoXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic3dvcmRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIC8qKlxuICAgKiBBdHRhY2sgcmFuZ2UgaW4gcGl4ZWxzIChhdCBzY2FsZSAxKS5cbiAgICogU3dvcmQgb25seSBzd2luZ3Mgd2hlbiBhbiBlbmVteSBlbnRlcnMgdGhpcyByYWRpdXMuXG4gICAqL1xuICByYW5nZTogbnVtYmVyO1xuICAvKipcbiAgICogQW5ndWxhciB3aWR0aCBvZiB0aGUgc2xhc2ggYXJjIGluIGRlZ3JlZXMuXG4gICAqIFdpZGVyID0gaGVhdmllciwgaGl0cyBtb3JlIGVuZW1pZXMgcGVyIHN3aW5nLlxuICAgKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogRGFtYWdlIHBlciBoaXQuICovXG4gIGRhbWFnZTogbnVtYmVyO1xuICAvKiogQ29vbGRvd24gYmV0d2VlbiBzd2luZ3MgaW4gc2Vjb25kcy4gU3dvcmRzIGRvIE5PVCBmaXJlIG9uIGEgdGltZXIgXHUyMDE0IG9ubHkgd2hlbiBhIHRhcmdldCBleGlzdHMuICovXG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICAvKiogTWF4aW11bSB0YXJnZXRzIGhpdCBwZXIgc3dpbmcuICovXG4gIG1heFRhcmdldHM6IG51bWJlcjtcbiAgLyoqIExhbmUtYXdhcmUgdGFyZ2V0IHNlbGVjdGlvbiBtb2RlLiAqL1xuICB0YXJnZXRpbmdNb2RlOiBTd29yZFRhcmdldGluZ01vZGU7XG4gIC8qKiBWaXN1YWwgc2xhc2ggYXJjIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy4gKi9cbiAgc2xhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBQcmltYXJ5IHNsYXNoIGNvbG9yLiAqL1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgLyoqIFZpc3VhbCB0aGlja25lc3MgbXVsdGlwbGllciBmb3IgdGhlIHNoYXJlZCBzd29yZCB0cmFpbC4gMS4wID0gZGVmYXVsdC4gKi9cbiAgc2xhc2hUaGlja25lc3M6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRlc2lnbiBub3Rlcy4gTm90IHVzZWQgYnkgcnVudGltZSBcdTIwMTQgZG9jdW1lbnRzIGludGVudCBmb3IgZnV0dXJlIGFnZW50cy5cbiAgICovXG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRmFtaWx5IGRlZmluaXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInN3b3JkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTd29yZFwiO1xuXG4gIC8qKlxuICAgKiBGYW1pbHktbGV2ZWwgaW1wbGVtZW50YXRpb24gbm90ZXM6XG4gICAqIC0gU3dvcmRzIGFyZSBOT1QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhleSBzd2luZyBvbmx5IHdoZW4gYSB2YWxpZCB0YXJnZXRcbiAgICogICBpcyB3aXRoaW4gcmFuZ2UgYW5kIGNvb2xkb3duIGlzIHJlYWR5LiBUaGV5IGlkbGUgc2lsZW50bHkgb3RoZXJ3aXNlLlxuICAgKiAtIE9uZSBhY3RpdmUgc3dvcmQgcGVyIHBsYXllciAoZmFtaWx5LXNjb3BlZCBleGNsdXNpdml0eSkuXG4gICAqIC0gQ2FuIGNvZXhpc3Qgd2l0aCBhbiBhY3RpdmUgR3VuIGFuZCBhbiBhY3RpdmUgU2hpZWxkIHNpbXVsdGFuZW91c2x5LlxuICAgKiAtIFRhcmdldGluZyBpcyBsYW5lLWF3YXJlIHZpYSBxdWVyeU5lYXJieVRocmVhdHMoKS5cbiAgICogLSBUaGUgc2xhc2ggYW5pbWF0aW9uIHJ1bnMgZm9yIHNsYXNoRHVyYXRpb25NcyBtaWxsaXNlY29uZHMsIHRoZW4gZmFkZXMuXG4gICAqIC0gRGFtYWdlIGlzIGFwcGxpZWQgaW1tZWRpYXRlbHkgd2hlbiB0aGUgc3dpbmcgc3RhcnRzIChub3QgYXQgYW5pbWF0aW9uIGVuZCkuXG4gICAqXG4gICAqIFByZWNlZGVuY2U6IHN3b3JkIGF0dGFja3Mgb2NjdXIgYWZ0ZXIgc2hpZWxkQmxvY2svc2hpZWxkUHVsc2UgYnV0IGJlZm9yZVxuICAgKiBzaGllbGRDb250YWN0RGFtYWdlIGFuZCBzaGllbGRBdXJhLiBTZWUgbWFpbi50cyBuZWFyUGxheWVyRWZmZWN0T3JkZXIuXG4gICAqL1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIC8qKlxuICAgICAqIEFyYyBCbGFkZSBcdTIwMTQgQ29yZSBzd29yZC4gRmFzdCwgY3VydmVkLCB0YXJnZXRzIG5lYXJlc3QgZW5lbXkgaW4gbGFuZS5cbiAgICAgKiBIaXRzIDFcdTIwMTMyIGVuZW1pZXMgZGVwZW5kaW5nIG9uIGFyYyBvdmVybGFwLiBTaG9ydCBjb29sZG93bi5cbiAgICAgKi9cbiAgICBhcmNCbGFkZToge1xuICAgICAgbGFiZWw6IFwiQXJjIEJsYWRlXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICByYW5nZTogNTIsXG4gICAgICBhcmNEZWdyZWVzOiA3MCxcbiAgICAgIGRhbWFnZTogMS41LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAwLjg1LFxuICAgICAgbWF4VGFyZ2V0czogMixcbiAgICAgIHRhcmdldGluZ01vZGU6IFwibmVhcmVzdEluQ3VycmVudExhbmVcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMTUwLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuMCxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRmFzdCBhbmQgc2hhcnAuIEN1cnZlZCBuZW9uIHNsYXNoLiAxMjBcdTIwMTMxODBtcyBmZWVsLiBGYWRpbmcgYWZ0ZXJpbWFnZS4gTGlrZSBhIHdoaXAtbGlrZSBrYXRhbmEgYXJjLlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhdmVyIFx1MjAxNCBIZWF2eSBzd29yZC4gU2xvd2VyIGJ1dCBoaXRzIG11bHRpcGxlIGNsdXN0ZXJlZCBlbmVtaWVzLlxuICAgICAqIFdpZGUgYXJjLCB0aGlja2VyIHNsYXNoLiBCZXR0ZXIgYWdhaW5zdCB0aWdodCBncm91cHMgdGhhbiBmYXN0IHNpbmdsZXMuXG4gICAgICovXG4gICAgY2xlYXZlcjoge1xuICAgICAgbGFiZWw6IFwiQ2xlYXZlclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICByYW5nZTogNTYsXG4gICAgICBhcmNEZWdyZWVzOiAxMTAsXG4gICAgICBkYW1hZ2U6IDIuOCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMS44LFxuICAgICAgbWF4VGFyZ2V0czogNCxcbiAgICAgIHRhcmdldGluZ01vZGU6IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMjIwLFxuICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS42NSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgYW5kIHdpZGUuIFRoaWNrZXIgYXJjLiBTdHJvbmdlciBpbXBhY3QgZmxhc2guIEdlb21ldHJpYyBhbmQgcHJvY2VkdXJhbCBcdTIwMTQgbm90IGEgYnVsbGV0LlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBOZWVkbGUgUmFwaWVyIFx1MjAxNCBQcmVjaXNpb24gc3dvcmQuIExvbmcgcmVhY2gsIG5hcnJvdyBhcmMsIHNpbmdsZSB0YXJnZXQuXG4gICAgICogUHJpb3JpdGl6ZXMgdGhlIG1vc3QgZGFuZ2Vyb3VzIChmcm9udC1tb3N0KSBlbmVteS5cbiAgICAgKi9cbiAgICBuZWVkbGVSYXBpZXI6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZSBSYXBpZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICByYW5nZTogNzAsXG4gICAgICBhcmNEZWdyZWVzOiAzMCxcbiAgICAgIGRhbWFnZTogMi4yLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjEsXG4gICAgICBtYXhUYXJnZXRzOiAxLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJmcm9udE1vc3RUaHJlYXRcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMTMwLFxuICAgICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAwLjU1LFxuICAgICAgYWdlbnROb3RlczogXCJFbGVnYW50IGFuZCBwcmVjaXNlLiBUaGluIHN0YWJiaW5nIGxpbmUuIE5vdCBhIGd1biBzaG90IFx1MjAxNCBpdCBtdXN0IGZlZWwgbWVsZWUuIFNpbmdsZSB0YXJnZXQgcHJpb3JpdHkuXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHN3b3JkXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQucmFuZ2UgPiAwLCBgJHtpZH0gcmFuZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5hcmNEZWdyZWVzID4gMCAmJiBzd29yZC5hcmNEZWdyZWVzIDw9IDM2MCwgYCR7aWR9IGFyY0RlZ3JlZXMgbXVzdCBiZSBpbiAoMCwgMzYwXS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2UgPiAwLCBgJHtpZH0gZGFtYWdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuY29vbGRvd25TZWNvbmRzID4gMCwgYCR7aWR9IGNvb2xkb3duU2Vjb25kcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLm1heFRhcmdldHMgPj0gMSwgYCR7aWR9IG1heFRhcmdldHMgbXVzdCBiZSBhdCBsZWFzdCAxLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoRHVyYXRpb25NcyA+IDAsIGAke2lkfSBzbGFzaER1cmF0aW9uTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaFRoaWNrbmVzcyA+IDAsIGAke2lkfSBzbGFzaFRoaWNrbmVzcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzd29yZEZhbWlseSA9IG5ldyBTd29yZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFN3b3JkSWQgPSBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBkZWZpbml0aW9uOiBUcmFja0RlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tGYW1pbHlNZW1iZXI8VHJhY2tJZCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICB0cmFja0lkczogcmVhZG9ubHkgVHJhY2tJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBkaXN0YW5jZUZyb21QbGF5ZXI6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzRW5lbXkgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKTtcbmNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBwYXJzZVRyYWNrUm93cyh0cmFjazogVHJhY2tEZWZpbml0aW9uKTogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHNvdXJjZUluZGV4OiBudW1iZXIgfT4ge1xuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuICByZXR1cm4gcm93cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHBhcnNlVHJhY2tSb3dzKHRyYWNrKTtcbiAgbGV0IGxlZnRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgcmlnaHRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuXG4gIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBpcGVDb3VudCA9IFsuLi5yb3cudGV4dF0uZmlsdGVyKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgPT09IFwifFwiKS5sZW5ndGg7XG4gICAgaWYgKHBpcGVDb3VudCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gbXVzdCBjb250YWluIGV4YWN0bHkgb25lIFwifFwiIHNlcGFyYXRvcjsgZm91bmQgJHtwaXBlQ291bnR9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSByb3cudGV4dC5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIGxlZnRXaWR0aCA/Pz0gbGVmdC5sZW5ndGg7XG4gICAgcmlnaHRXaWR0aCA/Pz0gcmlnaHQubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSBsZWZ0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyBsZWZ0IHdpZHRoICR7bGVmdC5sZW5ndGh9OyBleHBlY3RlZCAke2xlZnRXaWR0aH0uYCk7XG4gICAgfVxuICAgIGlmIChyaWdodC5sZW5ndGggIT09IHJpZ2h0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyByaWdodCB3aWR0aCAke3JpZ2h0Lmxlbmd0aH07IGV4cGVjdGVkICR7cmlnaHRXaWR0aH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzdGFuY2VGcm9tUGxheWVyID0gcm93cy5sZW5ndGggLSAxIC0gcm93SW5kZXg7XG4gICAgZm9yIChjb25zdCBbc2lkZSwgbGFuZV0gb2YgW1tcImxlZnRcIiwgbGVmdF0sIFtcInJpZ2h0XCIsIHJpZ2h0XV0gYXMgY29uc3QpIHtcbiAgICAgIGNvbnN0IG9jY3VwaWVkQnkgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICAgICAgWy4uLmxhbmVdLmZvckVhY2goKHN5bWJvbCwgbGFuZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdHJhY2subGVnZW5kW3N5bWJvbF07XG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSB1c2VzIHN5bWJvbCBcIiR7c3ltYm9sfVwiIGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBpcyBtaXNzaW5nIGZyb20gdGhlIGxlZ2VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuaWQgPT09IFwiZW1wdHlcIikgcmV0dXJuO1xuICAgICAgICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGVudHJ5LmlkKTtcbiAgICAgICAgY29uc3QgY29sdW1uU3BhbiA9IGVuZW15SWQgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkXS5jb2x1bW5TcGFuIDogMTtcbiAgICAgICAgaWYgKGxhbmVJbmRleCArIGNvbHVtblNwYW4gPiBsYW5lLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgbmVlZHMgJHtjb2x1bW5TcGFufSBjb2x1bW5zIGFuZCBvbmx5ICR7bGFuZS5sZW5ndGggLSBsYW5lSW5kZXh9IHJlbWFpbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykge1xuICAgICAgICAgIGNvbnN0IG9jY3VwaWVkID0gb2NjdXBpZWRCeS5nZXQobGFuZUluZGV4ICsgb2Zmc2V0KTtcbiAgICAgICAgICBpZiAob2NjdXBpZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBvbiAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXggKyBvZmZzZXR9LCBhbHJlYWR5IG9jY3VwaWVkIGJ5ICR7b2NjdXBpZWR9LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykgb2NjdXBpZWRCeS5zZXQobGFuZUluZGV4ICsgb2Zmc2V0LCBlbnRyeS5pZCk7XG5cbiAgICAgICAgZW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICBzaWRlLFxuICAgICAgICAgIGxhbmVJbmRleCxcbiAgICAgICAgICBjb2x1bW5TcGFuLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGRpc3RhbmNlRnJvbVBsYXllcixcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IChlbnRyeS5zcGVlZCA/PyAxKSAqIChpc0VuZW15KGVudHJ5LmlkKSA/IHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA6IDEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+XG4gICAgYS5kaXN0YW5jZUZyb21QbGF5ZXIgLSBiLmRpc3RhbmNlRnJvbVBsYXllciB8fFxuICAgIGEucm93SW5kZXggLSBiLnJvd0luZGV4IHx8XG4gICAgYS5zaWRlLmxvY2FsZUNvbXBhcmUoYi5zaWRlKSB8fFxuICAgIGEubGFuZUluZGV4IC0gYi5sYW5lSW5kZXgpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IGd1bkZhbWlseSB9IGZyb20gXCIuL0d1bkZhbWlseVwiO1xuaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuL011bHRpcGxpZXJGYW1pbHlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuaW1wb3J0IHsgc2hpZWxkRmFtaWx5IH0gZnJvbSBcIi4vU2hpZWxkRmFtaWx5XCI7XG5pbXBvcnQgeyBzd29yZEZhbWlseSB9IGZyb20gXCIuL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiwgdHlwZSBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuXG4vKipcbiAqIEdsb2JhbCAwLWJhc2VkIGNvbHVtbiBpbmRleCBhY3Jvc3MgYm90aCBsYW5lcy5cbiAqXG4gKiBDdXJyZW50IGxheW91dCBzaGFwZTpcbiAqIC0gY29sdW1ucyAwLTQgYXJlIHRoZSBsZWZ0IGxhbmVcbiAqIC0gY29sdW1ucyA1LTkgYXJlIHRoZSByaWdodCBsYW5lXG4gKlxuICogRXhhbXBsZXM6XG4gKiAtIDIgPSBsZWZ0IGxhbmUgbWlkZGxlXG4gKiAtIDcgPSByaWdodCBsYW5lIG1pZGRsZVxuICovXG5leHBvcnQgdHlwZSBUcmFja0NvbHVtbiA9IG51bWJlcjtcblxuLyoqXG4gKiBGcmllbmRseSBjb2x1bW4gY29uc3RhbnRzIGZvciB0aGUgY3VycmVudCAyLWxhbmUgLyA1LWNvbHVtbiB0cmFjayBmb3JtYXQuXG4gKlxuICogVGhlc2UgYXJlIG9ubHkgc3VnYXIuIFRoZSBidWlsZGVyIHN0aWxsIGFjY2VwdHMgcmF3IG51bWJlcnMgZm9yIGZhc3QgYXV0aG9yaW5nLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQ29sdW1ucyB7XG4gIHJlYWRvbmx5IGxlZnQ6IHtcbiAgICByZWFkb25seSBvdXRlcjogMDtcbiAgICByZWFkb25seSBuZWFyT3V0ZXI6IDE7XG4gICAgcmVhZG9ubHkgbWlkOiAyO1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogMztcbiAgICByZWFkb25seSBpbm5lcjogNDtcbiAgfTtcbiAgcmVhZG9ubHkgcmlnaHQ6IHtcbiAgICByZWFkb25seSBpbm5lcjogNTtcbiAgICByZWFkb25seSBuZWFySW5uZXI6IDY7XG4gICAgcmVhZG9ubHkgbWlkOiA3O1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogODtcbiAgICByZWFkb25seSBvdXRlcjogOTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb21tb24gZXhwb3J0ZWQgY29sdW1uIGNvbnN0YW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiBidWlsZGVyLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSlcbiAqIGJ1aWxkZXIud2VhcG9uKFwic3dvcmQuYXJjQmxhZGVcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pXG4gKi9cbmV4cG9ydCBjb25zdCBjOiBUcmFja0NvbHVtbnMgPSB7XG4gIGxlZnQ6IHsgb3V0ZXI6IDAsIG5lYXJPdXRlcjogMSwgbWlkOiAyLCBuZWFySW5uZXI6IDMsIGlubmVyOiA0IH0sXG4gIHJpZ2h0OiB7IGlubmVyOiA1LCBuZWFySW5uZXI6IDYsIG1pZDogNywgbmVhck91dGVyOiA4LCBvdXRlcjogOSB9LFxufTtcblxuZXhwb3J0IHR5cGUgVHJhY2tFbmVteVJlZiA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFRyYWNrV2VhcG9uUmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tQaWNrdXBSZWYgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tQbGFjZW1lbnRPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tMaW5lT3B0aW9ucyB7XG4gIGNvbHVtbjogVHJhY2tDb2x1bW47XG4gIGNvdW50OiBudW1iZXI7XG4gIGdhcD86IG51bWJlcjtcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICBjb3VudDogbnVtYmVyO1xuICBnYXA/OiBudW1iZXI7XG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrV2FsbE9wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RyaXBPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgcm93czogbnVtYmVyO1xuICBldmVyeTogbnVtYmVyO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgYXQocm93T2Zmc2V0OiBudW1iZXIpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQnVpbGRlck9wdGlvbnMge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBiYWxhbmNlOiB7XG4gICAgZW5lbXlIcDogbnVtYmVyO1xuICAgIGVuZW15U3BlZWQ6IG51bWJlcjtcbiAgfTtcbiAgcGxheWVyU3RhcnRDb2x1bW4/OiBUcmFja0NvbHVtbjtcbiAgbGFuZVdpZHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQnVpbGRlciB7XG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBhZHZhbmNlUm93cyhyb3dzOiBudW1iZXIpOiBUcmFja0J1aWxkZXI7XG4gIHJlc3BpdGUocm93czogbnVtYmVyKTogVHJhY2tCdWlsZGVyO1xuICBzZWN0aW9uKG5hbWU6IHN0cmluZywgcm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICByZWJ1aWxkKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYnVpbGQoKTogVHJhY2tNZW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyRmFjdG9yeSB7XG4gIGNyZWF0ZShvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xufVxuXG5pbnRlcmZhY2UgUGxhY2VtZW50IHtcbiAgcm93OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICBpZDogc3RyaW5nO1xuICBzcGVlZDogbnVtYmVyO1xuICBzcGFuOiBudW1iZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRMYW5lV2lkdGggPSA1O1xuY29uc3QgZW1wdHlTeW1ib2wgPSBcIi5cIjtcbmNvbnN0IHBsYXllclN5bWJvbCA9IFwiTVwiO1xuY29uc3QgZW5lbXlBbGlhc2VzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYmFzaWM6IFwiZW5lbXkuYmFzaWNcIixcbiAgYmFzaWNPcmI6IFwiZW5lbXkuYmFzaWNPcmJcIixcbiAgZ2xhc3M6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgZ2xhc3NTaGllbGQ6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgd2luZ2VyOiBcImVuZW15LndpbmdlclwiLFxuICB0YW5rOiBcImVuZW15LnRhbmtcIixcbn07XG5jb25zdCB3ZWFwb25QcmVmaXhlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIGd1bjogXCJwaWNrdXAud2VhcG9uLmd1bi5cIixcbiAgc2hpZWxkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLFxuICBzd29yZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLFxufTtcbmNvbnN0IHBpY2t1cEFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcInVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG4gIFwidW5pdE11bHRpcGxpZXIuc3F1YWRQbHVzT25lXCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG59O1xuY29uc3QgcHJlZmVycmVkU3ltYm9sczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiZW5lbXkuYmFzaWNcIjogXCJFXCIsXG4gIFwiZW5lbXkuYmFzaWNPcmJcIjogXCJFXCIsXG4gIFwiZW5lbXkuZ2xhc3NTaGllbGRcIjogXCJEXCIsXG4gIFwiZW5lbXkud2luZ2VyXCI6IFwiV1wiLFxuICBcImVuZW15LnRhbmtcIjogXCJUXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIjogXCJHXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ubmVlZGxlclNtZ1wiOiBcIk5cIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIjogXCJCXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIjogXCJIXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiOiBcIlJcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCI6IFwiU1wiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCI6IFwiVlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCI6IFwiWFwiLFxuICBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIjogXCJhXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCI6IFwiY1wiLFxuICBcInBpY2t1cC53ZWFwb24uc3dvcmQubmVlZGxlUmFwaWVyXCI6IFwiblwiLFxuICBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiOiBcIjJcIixcbn07XG5jb25zdCBmYWxsYmFja1N5bWJvbHMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoyMzQ1Njc4OSEjJCUmKissLS86Ozw9Pj9AXl9+XCIuc3BsaXQoXCJcIilcbiAgLmZpbHRlcihzeW1ib2wgPT4gc3ltYm9sICE9PSBlbXB0eVN5bWJvbCAmJiBzeW1ib2wgIT09IHBsYXllclN5bWJvbCk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbnRlZ2VyKHZhbHVlOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGFuIGludGVnZXIuYCk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICByZXF1aXJlSW50ZWdlcih2YWx1ZSwgbGFiZWwpO1xuICBpZiAodmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcGVlZChzcGVlZDogbnVtYmVyIHwgdW5kZWZpbmVkLCBsYWJlbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzcGVlZCA/PyAxO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgfHwgdmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVuZW15SWQoaWQ6IFRyYWNrRW5lbXlSZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gZW5lbXlBbGlhc2VzW2lkXSA/PyBgZW5lbXkuJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVXZWFwb25JZChpZDogVHJhY2tXZWFwb25SZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uXCIpKSByZXR1cm4gaWQ7XG4gIGNvbnN0IGRvdEluZGV4ID0gaWQuaW5kZXhPZihcIi5cIik7XG4gIGlmIChkb3RJbmRleCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgbXVzdCB1c2UgZmFtaWx5LmlkIHNob3J0aGFuZCBvciBhIGNhbm9uaWNhbCBwaWNrdXAud2VhcG9uIGlkLmApO1xuICBjb25zdCBmYW1pbHkgPSBpZC5zbGljZSgwLCBkb3RJbmRleCk7XG4gIGNvbnN0IG1lbWJlciA9IGlkLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gIGNvbnN0IHByZWZpeCA9IHdlYXBvblByZWZpeGVzW2ZhbWlseV07XG4gIGlmICghcHJlZml4KSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgaGFzIHVua25vd24gd2VhcG9uIGZhbWlseSBcIiR7ZmFtaWx5fVwiLmApO1xuICByZXR1cm4gYCR7cHJlZml4fSR7bWVtYmVyfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBpY2t1cElkKGlkOiBUcmFja1BpY2t1cFJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gcGlja3VwQWxpYXNlc1tpZF0gPz8gYHBpY2t1cC4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIGVuZW15TWVtYmVySWQoY2Fub25pY2FsSWQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoY2Fub25pY2FsSWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFjYW5vbmljYWxJZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNhbm9uaWNhbElkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDYW5vbmljYWxJZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteU1lbWJlcklkKGlkKTtcbiAgaWYgKGVuZW15SWQpIHtcbiAgICBpZiAoIShlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGVuZW15IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsaWRhdG9yczogcmVhZG9ubHkgW3N0cmluZywgUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LCBzdHJpbmddW10gPSBbXG4gICAgW1wicGlja3VwLndlYXBvbi5ndW4uXCIsIGd1bkZhbWlseS5tZW1iZXJzLCBcImd1blwiXSxcbiAgICBbXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIiwgc2hpZWxkRmFtaWx5Lm1lbWJlcnMsIFwic2hpZWxkXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsIHN3b3JkRmFtaWx5Lm1lbWJlcnMsIFwic3dvcmRcIl0sXG4gIF07XG4gIGZvciAoY29uc3QgW3ByZWZpeCwgbWVtYmVycywgbGFiZWxdIG9mIHZhbGlkYXRvcnMpIHtcbiAgICBpZiAoIWlkLnN0YXJ0c1dpdGgocHJlZml4KSkgY29udGludWU7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShwcmVmaXgubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duICR7bGFiZWx9IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSByZXR1cm47XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlcklkID0gaWQuc2xpY2UoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbXVsdGlwbGllciBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgdHJhY2sgZW50aXR5IGlkIFwiJHtpZH1cIi5gKTtcbn1cblxuZnVuY3Rpb24gc3BhbkZvcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCAmJiBlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzID8gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZCBhcyBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnNdLmNvbHVtblNwYW4gOiAxO1xufVxuXG5jbGFzcyBUcmFja0J1aWxkZXJDb3JlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsYW5lV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGN1cnNvciA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKSB7XG4gICAgdGhpcy5sYW5lV2lkdGggPSBvcHRpb25zLmxhbmVXaWR0aCA/PyBkZWZhdWx0TGFuZVdpZHRoO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodGhpcy5sYW5lV2lkdGgsIFwiVHJhY2sgbGFuZVdpZHRoXCIpO1xuICAgIGlmICh0aGlzLmxhbmVXaWR0aCA8IDMpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhbmVXaWR0aCBtdXN0IGJlIGF0IGxlYXN0IDMuXCIpO1xuICAgIGlmICghb3B0aW9ucy5sYWJlbC50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhYmVsIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAoIW9wdGlvbnMuZGVzY3JpcHRpb24udHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBkZXNjcmlwdGlvbiBpcyByZXF1aXJlZC5cIik7XG4gICAgaWYgKG9wdGlvbnMuYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIHRoaXMudmFsaWRhdGVDb2x1bW4ob3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkLCBcInBsYXllclN0YXJ0Q29sdW1uXCIsIDEpO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcImVuZW15XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcIndlYXBvblwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplUGlja3VwSWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJwaWNrdXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZHZhbmNlUm93cyhyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIFwiYWR2YW5jZVJvd3Mgcm93c1wiKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5hZHZhbmNlUm93cyhyb3dzKTtcbiAgfVxuXG4gIHNlY3Rpb24obmFtZTogc3RyaW5nLCByb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIGlmICghbmFtZS50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIHNlY3Rpb24gbmFtZSBpcyByZXF1aXJlZC5cIik7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihyb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7bmFtZX1cIiByb3dzYCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IG5ldyBUcmFja1NlY3Rpb25CdWlsZGVyQ29yZSh0aGlzLCBuYW1lLCB0aGlzLmN1cnNvciwgcm93cyk7XG4gICAgYnVpbGQoc2VjdGlvbik7XG4gICAgdGhpcy5jdXJzb3IgKz0gcm93cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuc2VjdGlvbihcInByZXNzdXJlXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicmVidWlsZFwiLCByb3dzLCBidWlsZCk7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZExpbmUodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwibGluZVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRBbHRlcm5hdGluZyh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJhbHRlcm5hdGluZ1wiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkV2FsbCh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJ3YWxsXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGREcmlwKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImRyaXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRTZWN0aW9uRW5lbXkoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBlbmVteWApO1xuICB9XG5cbiAgYWRkU2VjdGlvbldlYXBvbihiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplV2VhcG9uSWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgd2VhcG9uYCk7XG4gIH1cblxuICBhZGRTZWN0aW9uUGlja3VwKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwaWNrdXBgKTtcbiAgfVxuXG4gIGFkZExpbmUoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuY291bnQsIGAke2xhYmVsfSBjb3VudGApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBpbmRleCAqIChnYXAgKyAxKSwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFsdGVybmF0aW5nKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHJlcXVpcmVJbnRlZ2VyKGdhcCwgYCR7bGFiZWx9IGdhcGApO1xuICAgIGlmIChnYXAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGdhcCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbnMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG9wdGlvbnMuY29sdW1uc1tpbmRleCAlIG9wdGlvbnMuY29sdW1ucy5sZW5ndGhdO1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkV2FsbChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLmNvbHVtbnMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGNvbHVtbnMgbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBjb2x1bW4uYCk7XG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2Ygb3B0aW9ucy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93LCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRHJpcChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5yb3dzLCBgJHtsYWJlbH0gcm93c2ApO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5ldmVyeSwgYCR7bGFiZWx9IGV2ZXJ5YCk7XG4gICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgb3B0aW9ucy5yb3dzOyBvZmZzZXQgKz0gb3B0aW9ucy5ldmVyeSkge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBvZmZzZXQsIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBidWlsZCgpOiBUcmFja01lbWJlciB7XG4gICAgY29uc3QgcGxheWVyU3RhcnRDb2x1bW4gPSB0aGlzLm9wdGlvbnMucGxheWVyU3RhcnRDb2x1bW4gPz8gYy5sZWZ0Lm1pZDtcbiAgICBjb25zdCBtYXhQbGFjZW1lbnRSb3cgPSB0aGlzLnBsYWNlbWVudHMucmVkdWNlKChtYXgsIGl0ZW0pID0+IE1hdGgubWF4KG1heCwgaXRlbS5yb3cpLCAwKTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWF4KHRoaXMuY3Vyc29yLCBtYXhQbGFjZW1lbnRSb3cgKyAxLCAxKTtcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5sYW5lV2lkdGggKiAyIH0sICgpID0+IGVtcHR5U3ltYm9sKSk7XG4gICAgY29uc3Qgb2NjdXBpZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpKTtcbiAgICBjb25zdCBsZWdlbmQgPSBuZXcgTWFwPHN0cmluZywgeyBpZDogc3RyaW5nOyBzcGVlZDogbnVtYmVyIH0+KCk7XG4gICAgbGVnZW5kLnNldChlbXB0eVN5bWJvbCwgeyBpZDogXCJlbXB0eVwiLCBzcGVlZDogMSB9KTtcbiAgICBsZWdlbmQuc2V0KHBsYXllclN5bWJvbCwgeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiwgc3BlZWQ6IDEgfSk7XG4gICAgY29uc3QgdXNlZFN5bWJvbHMgPSBuZXcgU2V0KFtlbXB0eVN5bWJvbCwgcGxheWVyU3ltYm9sXSk7XG4gICAgY29uc3Qgc3ltYm9sQnlFbnRpdHkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIGNvbnN0IHBsYXllckNlbGxzID0gdGhpcy5jZWxsc0ZvcihwbGF5ZXJTdGFydENvbHVtbiwgMSk7XG4gICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSBvY2N1cGllZFswXS5zZXQoY2VsbC5nbG9iYWxDb2x1bW4sIFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIHJvd3NbMF1bcGxheWVyU3RhcnRDb2x1bW5dID0gcGxheWVyU3ltYm9sO1xuXG4gICAgZm9yIChjb25zdCBwbGFjZW1lbnQgb2YgdGhpcy5wbGFjZW1lbnRzKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbEZvcihwbGFjZW1lbnQsIHVzZWRTeW1ib2xzLCBzeW1ib2xCeUVudGl0eSk7XG4gICAgICBsZWdlbmQuc2V0KHN5bWJvbCwgeyBpZDogcGxhY2VtZW50LmlkLCBzcGVlZDogcGxhY2VtZW50LnNwZWVkIH0pO1xuICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHRoaXMuY2VsbHNGb3IocGxhY2VtZW50LmNvbHVtbiwgcGxhY2VtZW50LnNwYW4pKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uZ2V0KGNlbGwuZ2xvYmFsQ29sdW1uKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBwbGFjZW1lbnQgb3ZlcmxhcCBhdCByb3cgJHtwbGFjZW1lbnQucm93fSwgY29sdW1uICR7Y2VsbC5nbG9iYWxDb2x1bW59LiBFeGlzdGluZyBpZCBcIiR7ZXhpc3Rpbmd9XCIsIG5ldyBpZCBcIiR7cGxhY2VtZW50LmlkfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIG9jY3VwaWVkW3BsYWNlbWVudC5yb3ddLnNldChjZWxsLmdsb2JhbENvbHVtbiwgcGxhY2VtZW50LmlkKTtcbiAgICAgIH1cbiAgICAgIHJvd3NbcGxhY2VtZW50LnJvd11bcGxhY2VtZW50LmNvbHVtbl0gPSBzeW1ib2w7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgICAgIGxheW91dDogYFxcbiR7cm93cy5zbGljZSgpLnJldmVyc2UoKS5tYXAocm93ID0+IGAke3Jvdy5zbGljZSgwLCB0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX0gfCAke3Jvdy5zbGljZSh0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX1gKS5qb2luKFwiXFxuXCIpfVxcbmAsXG4gICAgICBsZWdlbmQ6IE9iamVjdC5mcm9tRW50cmllcyhbLi4ubGVnZW5kLmVudHJpZXMoKV0ubWFwKChbc3ltYm9sLCBlbnRyeV0pID0+IFtcbiAgICAgICAgc3ltYm9sLFxuICAgICAgICBlbnRyeS5zcGVlZCA9PT0gMSA/IHsgaWQ6IGVudHJ5LmlkIH0gOiB7IGlkOiBlbnRyeS5pZCwgc3BlZWQ6IGVudHJ5LnNwZWVkIH0sXG4gICAgICBdKSksXG4gICAgICBiYWxhbmNlOiB0aGlzLm9wdGlvbnMuYmFsYW5jZSxcbiAgICB9O1xuICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogdGhpcy5vcHRpb25zLmxhYmVsLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGVudmlyb25tZW50OiB0aGlzLm9wdGlvbnMuZW52aXJvbm1lbnQsXG4gICAgICBkZWZpbml0aW9uLFxuICAgIH07XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIHJvd3M6IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKHJvd09mZnNldCwgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXRgKTtcbiAgICBpZiAocm93T2Zmc2V0IDwgMCB8fCByb3dPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiByb3cgb2Zmc2V0ICR7cm93T2Zmc2V0fSBpcyBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVTZWN0aW9uU3BhbihzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyLCBjb3ZlcmVkUm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihjb3ZlcmVkUm93cywgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGNvdmVyZWQgcm93c2ApO1xuICAgIHRoaXMudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHNlY3Rpb25OYW1lLCByb3dPZmZzZXQsIHJvd3MpO1xuICAgIGNvbnN0IGxhc3RPZmZzZXQgPSByb3dPZmZzZXQgKyBjb3ZlcmVkUm93cyAtIDE7XG4gICAgaWYgKGxhc3RPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwYXR0ZXJuIHJlYWNoZXMgcm93IG9mZnNldCAke2xhc3RPZmZzZXR9LCBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwbGFjZShpZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMsIHJvdzogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93LCBgJHtsYWJlbH0gcm93YCk7XG4gICAgaWYgKHJvdyA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gcm93IGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkKTtcbiAgICBjb25zdCBzcGFuID0gc3BhbkZvcihpZCk7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLmNvbHVtbiwgYCR7bGFiZWx9IGNvbHVtbmAsIHNwYW4pO1xuICAgIHRoaXMucGxhY2VtZW50cy5wdXNoKHtcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sXG4gICAgICBpZCxcbiAgICAgIHNwZWVkOiBub3JtYWxpemVTcGVlZChvcHRpb25zLnNwZWVkLCBsYWJlbCksXG4gICAgICBzcGFuLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUNvbHVtbihjb2x1bW46IFRyYWNrQ29sdW1uLCBsYWJlbDogc3RyaW5nLCBzcGFuOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihjb2x1bW4sIGxhYmVsKTtcbiAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5sYW5lV2lkdGggKiAyO1xuICAgIGlmIChjb2x1bW4gPCAwIHx8IGNvbHVtbiA+PSB0b3RhbFdpZHRoKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBpcyBvdXRzaWRlIHRoZSAwLSR7dG90YWxXaWR0aCAtIDF9IHRyYWNrIHJhbmdlLmApO1xuICAgIGNvbnN0IHNpZGVDb2x1bW4gPSBjb2x1bW4gJSB0aGlzLmxhbmVXaWR0aDtcbiAgICBpZiAoc2lkZUNvbHVtbiArIHNwYW4gPiB0aGlzLmxhbmVXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSAke2NvbHVtbn0gY2Fubm90IGZpdCBhICR7c3Bhbn0tY29sdW1uIGVudGl0eSBpbnNpZGUgYSAke3RoaXMubGFuZVdpZHRofS1jb2x1bW4gbGFuZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxzRm9yKGNvbHVtbjogbnVtYmVyLCBzcGFuOiBudW1iZXIpOiBBcnJheTx7IGdsb2JhbENvbHVtbjogbnVtYmVyIH0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc3BhbiB9LCAoXywgb2Zmc2V0KSA9PiAoeyBnbG9iYWxDb2x1bW46IGNvbHVtbiArIG9mZnNldCB9KSk7XG4gIH1cblxuICBwcml2YXRlIHN5bWJvbEZvcihwbGFjZW1lbnQ6IFBsYWNlbWVudCwgdXNlZFN5bWJvbHM6IFNldDxzdHJpbmc+LCBzeW1ib2xCeUVudGl0eTogTWFwPHN0cmluZywgc3RyaW5nPik6IHN0cmluZyB7XG4gICAgY29uc3Qga2V5ID0gYCR7cGxhY2VtZW50LmlkfUAke3BsYWNlbWVudC5zcGVlZH1gO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gc3ltYm9sQnlFbnRpdHkuZ2V0KGtleSk7XG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7XG4gICAgY29uc3QgcHJlZmVycmVkID0gcHJlZmVycmVkU3ltYm9sc1twbGFjZW1lbnQuaWRdO1xuICAgIGNvbnN0IHN5bWJvbCA9IHByZWZlcnJlZCAmJiAhdXNlZFN5bWJvbHMuaGFzKHByZWZlcnJlZClcbiAgICAgID8gcHJlZmVycmVkXG4gICAgICA6IGZhbGxiYWNrU3ltYm9scy5maW5kKGNhbmRpZGF0ZSA9PiAhdXNlZFN5bWJvbHMuaGFzKGNhbmRpZGF0ZSkpO1xuICAgIGlmICghc3ltYm9sKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBidWlsZGVyIHJhbiBvdXQgb2Ygb25lLWNoYXJhY3RlciBsZWdlbmQgc3ltYm9scy5cIik7XG4gICAgdXNlZFN5bWJvbHMuYWRkKHN5bWJvbCk7XG4gICAgc3ltYm9sQnlFbnRpdHkuc2V0KGtleSwgc3ltYm9sKTtcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG59XG5cbmNsYXNzIFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlIGltcGxlbWVudHMgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIHByaXZhdGUgcm93T2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogVHJhY2tCdWlsZGVyQ29yZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhc2VSb3c6IG51bWJlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvd3M6IG51bWJlcixcbiAgKSB7fVxuXG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHRoaXMubmFtZSwgcm93T2Zmc2V0LCB0aGlzLnJvd3MpO1xuICAgIHRoaXMucm93T2Zmc2V0ID0gcm93T2Zmc2V0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25FbmVteSh0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25XZWFwb24odGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uUGlja3VwKHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgKG9wdGlvbnMuY291bnQgLSAxKSAqIChnYXAgKyAxKSArIDEpO1xuICAgIHRoaXMucGFyZW50LmFkZExpbmUodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgbGluZWApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkQWx0ZXJuYXRpbmcodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgYWx0ZXJuYXRpbmdgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFdhbGwodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgd2FsbGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIG9wdGlvbnMucm93cyk7XG4gICAgdGhpcy5wYXJlbnQuYWRkRHJpcCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBkcmlwYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrQnVpbGRlcjogVHJhY2tCdWlsZGVyRmFjdG9yeSA9IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXIge1xuICAgIHJldHVybiBuZXcgVHJhY2tCdWlsZGVyQ29yZShvcHRpb25zKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcbiAgbGFiZWw6IFwiU2t5YnJlYWtcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIEF1cm9yYSBvcGVuZXIgaXMgYnVzaWVyIHRoYW4gdGhlIHR1dG9yaWFsIGFyYywgYnV0IGdpdmVzIGEgbmVhcmJ5IHNoaWVsZCBhbmQgYnVyc3Qgd2VhcG9uIGJlZm9yZSB0aGUgZmlyc3Qgc3F1ZWV6ZS5cIixcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBgXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLlcuLiB8IC4uRS4uXG4uLkUuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uLkUuXG4uLkUuLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLmEuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC4uLi4uXG4uLi4uLiB8IC5FLkUuXG4uLlcuLiB8IC4uLi4uXG4uLi4uLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uRS4uXG4uRS4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLkUuXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLk0uLiB8IC4uLi4uXG5gLFxuICAgIGxlZ2VuZDoge1xuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxuICAgICAgXCJNXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcbiAgICAgIFwiV1wiOiB7IGlkOiBcImVuZW15LndpbmdlclwiIH0sXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuOSB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44MiB9LFxuICAgICAgXCJhXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuNzggfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEsXG4gICAgICBlbmVteVNwZWVkOiAxLjA4LFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJSaWJib24gU3Rvcm1cIixcbiAgZGVzY3JpcHRpb246IFwiQXVyb3JhIHByZXNzdXJlIGNvbWVzIGluIHdhdmVzOiBmbGFua2VycywgZ2xhc3MgZGVjb3lzLCBhIHRhbmsgYnJlYWssIHRoZW4gYSBoZWF2eSB3ZWFwb24gcGF5b2ZmLlwiLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBsYXlvdXQ6IGBcbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uVy4uIHwgLi4uLi5cbi4uLi4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uWC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5QLkUuIHwgLkUuUC5cbi4uLi4uIHwgLi4uLi5cbi4uVy4uIHwgLi5FLi5cbi4uRS4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uSi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLkUuIHwgLkUuRS5cbi4uLi4uIHwgLi4uLi5cbi4uVC4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uMi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi5FLi4uIHwgLi4uRS5cbi4uVy4uIHwgLi5XLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uLkUuIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uUC4uIHwgLi5FLi5cbi4uRS4uIHwgLi5QLi5cbi4uLi4uIHwgLi5QLi5cbi4uSy4uIHwgLi5QLi5cbi4uLi4uIHwgLi5QLi5cbi4uVy4uIHwgLi5QLi5cbi4uLi4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uRS4uIHwgLi4uLi5cbi4uLi4uIHwgLi4uLi5cbi4uYi4uIHwgLi4uLi5cbi4uUy4uIHwgLi4uLi5cbi4uSi4uIHwgLi4uLi5cbi4uTS4uIHwgLi4uLi5cbmAsXG4gICAgbGVnZW5kOiB7XG4gICAgICBcIi5cIjogeyBpZDogXCJlbXB0eVwiIH0sXG4gICAgICBcIk1cIjogeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiB9LFxuICAgICAgXCJFXCI6IHsgaWQ6IFwiZW5lbXkuYmFzaWNcIiB9LFxuICAgICAgXCJXXCI6IHsgaWQ6IFwiZW5lbXkud2luZ2VyXCIgfSxcbiAgICAgIFwiVFwiOiB7IGlkOiBcImVuZW15LnRhbmtcIiB9LFxuICAgICAgXCJQXCI6IHsgaWQ6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIiB9LFxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjkyIH0sXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC44OCB9LFxuICAgICAgXCJLXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiLCBzcGVlZDogMC45MiB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC44IH0sXG4gICAgICBcIlhcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5oZXhHdWFyZFwiLCBzcGVlZDogMC44NiB9LFxuICAgICAgXCJiXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCIsIHNwZWVkOiAwLjg2IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuNzggfSxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHtcbiAgICAgIGVuZW15SHA6IDEuMDQsXG4gICAgICBlbmVteVNwZWVkOiAxLjEyLFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2s6IFRyYWNrTWVtYmVyID0ge1xuICBsYWJlbDogXCJNYWduZXRpYyBEYXduXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgZGVuc2UgQXVyb3JhIGZpbmFsZSB3aXRoIGhhcmQgc3VyZ2VzLCBkZWxpYmVyYXRlIHNhZmUgc2hlbHZlcywgYW5kIHRvcC10aWVyIHRvb2xzIGJlZm9yZSB0aGUgYmlnZ2VzdCB3YXZlcy5cIixcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBgXG4uLlQuLiB8IC4uVC4uXG4uRS5FLiB8IC5FLkUuXG4uLlcuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLlQuLiB8IC4uLi4uXG4uLi4uLiB8IC4uVC4uXG4uLi4uLiB8IC4uLi4uXG4uLlguLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uUC5FLiB8IC5FLlAuXG4uLlcuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLksuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLlcuLiB8IC4uLi4uXG4uLi4uLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlQuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLmIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC5FLkUuXG4uLlAuLiB8IC4uUC4uXG4uLlcuLiB8IC4uRS4uXG4uLkUuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLkouLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uRS5FLiB8IC4uLi4uXG4uLi4uLiB8IC5FLkUuXG4uLlcuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLlguLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlQuLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uRS5FLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLmMuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlcuLiB8IC4uVy4uXG4uRS5FLiB8IC5FLkUuXG4uLi4uLiB8IC4uLi4uXG4uLjIuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uUC5FLiB8IC5FLlAuXG4uLlcuLiB8IC4uVy4uXG4uLi4uLiB8IC4uLi4uXG4uLksuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlMuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkkuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLlguLiB8IC4uLi4uXG4uLk0uLiB8IC4uLi4uXG5gLFxuICAgIGxlZ2VuZDoge1xuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxuICAgICAgXCJNXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcbiAgICAgIFwiV1wiOiB7IGlkOiBcImVuZW15LndpbmdlclwiIH0sXG4gICAgICBcIlRcIjogeyBpZDogXCJlbmVteS50YW5rXCIgfSxcbiAgICAgIFwiUFwiOiB7IGlkOiBcImVuZW15LmdsYXNzU2hpZWxkXCIgfSxcbiAgICAgIFwiSVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiLCBzcGVlZDogMC45MiB9LFxuICAgICAgXCJKXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIiwgc3BlZWQ6IDAuODYgfSxcbiAgICAgIFwiS1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIiwgc3BlZWQ6IDAuOSB9LFxuICAgICAgXCJTXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiLCBzcGVlZDogMC43OCB9LFxuICAgICAgXCJYXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIiwgc3BlZWQ6IDAuODQgfSxcbiAgICAgIFwiYlwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiLCBzcGVlZDogMC44NCB9LFxuICAgICAgXCJjXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5uZWVkbGVSYXBpZXJcIiwgc3BlZWQ6IDAuODYgfSxcbiAgICAgIFwiMlwiOiB7IGlkOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLCBzcGVlZDogMC43NiB9LFxuICAgIH0sXG4gICAgYmFsYW5jZToge1xuICAgICAgZW5lbXlIcDogMS4wOCxcbiAgICAgIGVuZW15U3BlZWQ6IDEuMTYsXG4gICAgfSxcbiAgfSxcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB7IGMsIHRyYWNrQnVpbGRlciB9IGZyb20gXCIuLi9UcmFja0J1aWxkZXJcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IHRyYWNrQnVpbGRlci5jcmVhdGUoe1xuICBsYWJlbDogXCJQcmlzbSBJZ25pdGlvblwiLFxuICBkZXNjcmlwdGlvbjogXCJBIGNsZWFuIENyeXN0YWwgRm9yZ2Ugb3BlbmVyIHdpdGggZWFybHkgcGlzdG9sIGFjY2Vzcywgc2ltcGxlIGxhbmUgcmVhZGluZywgYW5kIGEgZ2VudGxlIHdpbmdlciByZXZlYWwuXCIsXG4gIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIgfSxcbiAgYmFsYW5jZTogeyBlbmVteUhwOiAxLCBlbmVteVNwZWVkOiAxIH0sXG59KVxuICAucmVidWlsZCg1LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5wdWxzZVBpc3RvbFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCwgc3BlZWQ6IC45IH0pO1xuICAgIHNlY3Rpb24uYXQoMikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkLCBzcGVlZDogLjkgfSk7XG4gIH0pXG4gIC5yZXNwaXRlKDQpXG4gIC5wcmVzc3VyZSg5LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLCBjb3VudDogNSwgZ2FwOiAxLCBzcGVlZDogLjk2IH0pO1xuICAgIHNlY3Rpb24uYXQoMykud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyXSwgc3BlZWQ6IC45MiB9KTtcbiAgfSlcbiAgLnJlc3BpdGUoMilcbiAgLnJlYnVpbGQoNSwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJJbm5lciwgc3BlZWQ6IC44NSB9KTtcbiAgICBzZWN0aW9uLmF0KDIpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm5lYXJJbm5lciwgc3BlZWQ6IC44NSB9KTtcbiAgICBzZWN0aW9uLmF0KDQpLmVuZW15KFwid2luZ2VyXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm91dGVyLCBzcGVlZDogLjkgfSk7XG4gIH0pXG4gIC5wcmVzc3VyZSg5LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCwgY291bnQ6IDQsIGdhcDogMSwgc3BlZWQ6IDEgfSk7XG4gICAgc2VjdGlvbi5hdCgxKS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLnJpZ2h0Lm91dGVyLCBjLmxlZnQub3V0ZXJdLCBjb3VudDogMywgZ2FwOiAyLCBzcGVlZDogLjkgfSk7XG4gICAgc2VjdGlvbi5hdCg2KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdLCBzcGVlZDogMSB9KTtcbiAgfSlcbiAgLmJ1aWxkKCkgc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB7IGMsIHRyYWNrQnVpbGRlciB9IGZyb20gXCIuLi9UcmFja0J1aWxkZXJcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IHRyYWNrQnVpbGRlci5jcmVhdGUoe1xuICBsYWJlbDogXCJGYWNldCBSdW5cIixcbiAgZGVzY3JpcHRpb246IFwiQ3J5c3RhbCBwcmVzc3VyZSBzaGFycGVucyB3aXRoIGRlY295cywgY3Jvc3MtbGFuZSB3YWxscywgYW5kIGEgbWlkLXJ1biBuZWVkbGVyIHBpY2t1cC5cIixcbiAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIiB9LFxuICBiYWxhbmNlOiB7IGVuZW15SHA6IDEuMDUsIGVuZW15U3BlZWQ6IDEuMDQgfSxcbn0pXG4gIC5yZWJ1aWxkKDUsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnB1bHNlUGlzdG9sXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgc3BlZWQ6IC45IH0pO1xuICAgIHNlY3Rpb24uYXQoMikud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIsIHNwZWVkOiAuODYgfSk7XG4gIH0pXG4gIC5yZXNwaXRlKDQpXG4gIC5wcmVzc3VyZSgxMSwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyLCBjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0sIGNvdW50OiA2LCBnYXA6IDEsIHNwZWVkOiAxIH0pO1xuICAgIHNlY3Rpb24uYXQoMikuZHJpcChcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjLmxlZnQub3V0ZXIsIHJvd3M6IDcsIGV2ZXJ5OiAzLCBzcGVlZDogMS4wNSB9KTtcbiAgICBzZWN0aW9uLmF0KDcpLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0sIHNwZWVkOiAxLjAyIH0pO1xuICB9KVxuICAucmVzcGl0ZSgyKVxuICAucmVidWlsZCg2LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5uZWVkbGVyU21nXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkLCBzcGVlZDogLjg2IH0pO1xuICAgIHNlY3Rpb24uYXQoMikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkLCBzcGVlZDogLjg4IH0pO1xuICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic3dvcmQuYXJjQmxhZGVcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFySW5uZXIsIHNwZWVkOiAuOSB9KTtcbiAgfSlcbiAgLnByZXNzdXJlKDExLCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmxpbmUoXCJ3aW5nZXJcIiwgeyBjb2x1bW46IGMucmlnaHQub3V0ZXIsIGNvdW50OiA0LCBnYXA6IDEsIHNwZWVkOiAuOTQgfSk7XG4gICAgc2VjdGlvbi5hdCgxKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSwgY291bnQ6IDUsIGdhcDogMSwgc3BlZWQ6IDEuMDYgfSk7XG4gICAgc2VjdGlvbi5hdCg4KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXIsIGMucmlnaHQubmVhck91dGVyXSwgc3BlZWQ6IC45OCB9KTtcbiAgfSlcbiAgLmJ1aWxkKCkgc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB7IGMsIHRyYWNrQnVpbGRlciB9IGZyb20gXCIuLi9UcmFja0J1aWxkZXJcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjayA9IHRyYWNrQnVpbGRlci5jcmVhdGUoe1xuICBsYWJlbDogXCJHbGFzcyBIYW1tZXJcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIENyeXN0YWwgRm9yZ2UgZmluYWxlIGFsdGVybmF0ZXMgZmFzdCB3aW5nIHByZXNzdXJlIHdpdGggdGFuayBicmVha3MgYW5kIGRlbGliZXJhdGUgcG93ZXIgc2hlbHZlcy5cIixcbiAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIiB9LFxuICBiYWxhbmNlOiB7IGVuZW15SHA6IDEuMTIsIGVuZW15U3BlZWQ6IDEuMDggfSxcbn0pXG4gIC5yZWJ1aWxkKDYsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCwgc3BlZWQ6IC44NCB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLndlYXBvbihcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQsIHNwZWVkOiAuODYgfSk7XG4gICAgc2VjdGlvbi5hdCg0KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJPdXRlciwgc3BlZWQ6IC44OCB9KTtcbiAgfSlcbiAgLnJlc3BpdGUoNClcbiAgLnByZXNzdXJlKDEyLCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA1LCBnYXA6IDEsIHNwZWVkOiAxIH0pO1xuICAgIHNlY3Rpb24uYXQoMikuZHJpcChcImdsYXNzU2hpZWxkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgcm93czogOCwgZXZlcnk6IDIsIHNwZWVkOiAxLjA4IH0pO1xuICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyLCBzcGVlZDogLjgyIH0pO1xuICB9KVxuICAucmVzcGl0ZSgyKVxuICAucmVidWlsZCg2LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5oZWF2eUNhbm5vblwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQsIHNwZWVkOiAuODIgfSk7XG4gICAgc2VjdGlvbi5hdCgyKS53ZWFwb24oXCJzd29yZC5jbGVhdmVyXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkLCBzcGVlZDogLjg1IH0pO1xuICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLmhleEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm5lYXJPdXRlciwgc3BlZWQ6IC44NiB9KTtcbiAgfSlcbiAgLnByZXNzdXJlKDEzLCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMubGVmdC5uZWFySW5uZXIsIGMucmlnaHQubmVhcklubmVyLCBjLnJpZ2h0Lm91dGVyXSwgc3BlZWQ6IDEuMDIgfSk7XG4gICAgc2VjdGlvbi5hdCgyKS5saW5lKFwid2luZ2VyXCIsIHsgY29sdW1uOiBjLmxlZnQub3V0ZXIsIGNvdW50OiA0LCBnYXA6IDIsIHNwZWVkOiAuOTggfSk7XG4gICAgc2VjdGlvbi5hdCgzKS5saW5lKFwiYmFzaWNcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkLCBjb3VudDogNSwgZ2FwOiAxLCBzcGVlZDogMS4wOCB9KTtcbiAgICBzZWN0aW9uLmF0KDEwKS53YWxsKFwidGFua1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0LmlubmVyXSwgc3BlZWQ6IC43OCB9KTtcbiAgfSlcbiAgLmJ1aWxkKCkgc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XG4gIGxhYmVsOiBcIkZpcnN0IEdsb3dcIixcbiAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCB0ZWFjaGluZyBydW4gd2l0aCBhIHdlYXBvbiBpbiByZWFjaCwgb25lIGxhbmUgYXQgYSB0aW1lLCB0aGVuIGEgY2FsbSB0d28tbGFuZSBmaW5pc2guXCIsXG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgbGF5b3V0OiBgXG4uLkUuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uLkUuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uRS4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLkUuXG4uLjIuLiB8IC4uLi4uXG4uLmEuLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uLi4uXG4uLkUuLiB8IC4uLi4uXG4uRS4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkUuLiB8IC4uUy4uXG4uLi4uLiB8IC4uLi4uXG4uLi4uLiB8IC4uLi4uXG4uLkcuLiB8IC4uLi4uXG4uLk0uLiB8IC4uLi4uXG5gLFxuICAgIGxlZ2VuZDoge1xuICAgICAgXCIuXCI6IHsgaWQ6IFwiZW1wdHlcIiB9LFxuICAgICAgXCJNXCI6IHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIgfSxcbiAgICAgIFwiRVwiOiB7IGlkOiBcImVuZW15LmJhc2ljXCIgfSxcbiAgICAgIFwiR1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCIsIHNwZWVkOiAxLjE1IH0sXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjkyIH0sXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjk1IH0sXG4gICAgICBcIjJcIjogeyBpZDogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIiwgc3BlZWQ6IDAuOSB9LFxuICAgIH0sXG4gICAgYmFsYW5jZToge1xuICAgICAgZW5lbXlIcDogMSxcbiAgICAgIGVuZW15U3BlZWQ6IDAuOTIsXG4gICAgfSxcbiAgfSxcbn0gc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZWRUcmFjazogVHJhY2tNZW1iZXIgPSB7XG4gIGxhYmVsOiBcIkRyaWZ0IExlc3NvblwiLFxuICBkZXNjcmlwdGlvbjogXCJBbHRlcm5hdGluZyBsYW5lcyBpbnRyb2R1Y2UgYWltIHByZXNzdXJlLCB3aXRoIGEgc2hpZWxkIHBvY2tldCBiZWZvcmUgdGhlIGZpcnN0IHBhaXJlZCB3YXZlLlwiLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xuICAgIGxheW91dDogYFxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLkUuLlxuLi4uLi4gfCAuLi4uLlxuLkUuLi4gfCAuLi5FLlxuLi4uLi4gfCAuLi4uLlxuLi4yLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLkUuLlxuLi4uLi4gfCAuLi4uLlxuLi5JLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuLi4uLlxuLi4uLi4gfCAuRS5FLlxuLi4uLi4gfCAuLi4uLlxuLi5TLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLkUuLlxuLkUuLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi5FLlxuLi4uLi4gfCAuLi4uLlxuLi5hLi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLkUuRS4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5HLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5TLi4gfCAuLi4uLlxuLi5NLi4gfCAuLi4uLlxuYCxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcbiAgICAgIFwiTVwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMS4xIH0sXG4gICAgICBcIklcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIiwgc3BlZWQ6IDAuODggfSxcbiAgICAgIFwiU1wiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIiwgc3BlZWQ6IDAuODYgfSxcbiAgICAgIFwiYVwiOiB7IGlkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIiwgc3BlZWQ6IDAuOSB9LFxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjgyIH0sXG4gICAgfSxcbiAgICBiYWxhbmNlOiB7XG4gICAgICBlbmVteUhwOiAxLFxuICAgICAgZW5lbXlTcGVlZDogMSxcbiAgICB9LFxuICB9LFxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrOiBUcmFja01lbWJlciA9IHtcbiAgbGFiZWw6IFwiTmVidWxhIEdhdGVcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIGxlYXJuaW5nIGZpbmFsZSBhZGRzIGZhc3QgZmxhbmtlcnMgYW5kIGEgc2luZ2xlIHRhbmssIHdpdGggY2xlYXIgcmVjb3Zlcnkgc2hlbHZlcyBiZXR3ZWVuIHByZXNzdXJlIHdhdmVzLlwiLFxuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xuICAgIGxheW91dDogYFxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuRS5FLlxuLi4uLi4gfCAuLi4uLlxuLi5XLi4gfCAuLi4uLlxuLi4uLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi5KLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuLi4gfCAuLi5FLlxuLi5FLi4gfCAuLkUuLlxuLi4uLi4gfCAuLi4uLlxuLi5YLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuLi4uLlxuLi4uLi4gfCAuRS5FLlxuLi5XLi4gfCAuLi4uLlxuLi5ULi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi4yLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi4uLi4gfCAuLkUuLlxuLkUuLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5iLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuRS5FLlxuLi4uLi4gfCAuLi4uLlxuLi5XLi4gfCAuLkUuLlxuLi5FLi4gfCAuLlcuLlxuLi4uLi4gfCAuLi4uLlxuLi5JLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLkUuRS4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5TLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5FLi4gfCAuLi4uLlxuLi4uLi4gfCAuLi4uLlxuLi5HLi4gfCAuLi4uLlxuLi5NLi4gfCAuLi4uLlxuYCxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIFwiLlwiOiB7IGlkOiBcImVtcHR5XCIgfSxcbiAgICAgIFwiTVwiOiB7IGlkOiBcInBsYXllci5zdGFydFwiIH0sXG4gICAgICBcIkVcIjogeyBpZDogXCJlbmVteS5iYXNpY1wiIH0sXG4gICAgICBcIldcIjogeyBpZDogXCJlbmVteS53aW5nZXJcIiB9LFxuICAgICAgXCJUXCI6IHsgaWQ6IFwiZW5lbXkudGFua1wiIH0sXG4gICAgICBcIkdcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiLCBzcGVlZDogMS4xNSB9LFxuICAgICAgXCJJXCI6IHsgaWQ6IFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCIsIHNwZWVkOiAwLjg4IH0sXG4gICAgICBcIkpcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcIlNcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCIsIHNwZWVkOiAwLjg1IH0sXG4gICAgICBcIlhcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5oZXhHdWFyZFwiLCBzcGVlZDogMC45IH0sXG4gICAgICBcImFcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCIsIHNwZWVkOiAwLjkyIH0sXG4gICAgICBcImJcIjogeyBpZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIiwgc3BlZWQ6IDAuOSB9LFxuICAgICAgXCIyXCI6IHsgaWQ6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsIHNwZWVkOiAwLjgyIH0sXG4gICAgfSxcbiAgICBiYWxhbmNlOiB7XG4gICAgICBlbmVteUhwOiAxLFxuICAgICAgZW5lbXlTcGVlZDogMS4wNCxcbiAgICB9LFxuICB9LFxufSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyIH0gZnJvbSBcIi4uL1RyYWNrQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gdHJhY2tCdWlsZGVyLmNyZWF0ZSh7XG4gIGxhYmVsOiBcIlBhbmVsIERhd25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBTb2xhciBBcnJheSBvcGVuZXIgYnVpbHQgYXJvdW5kIHN0cmFpZ2h0IHJlYWRzLCBjbGVhbiB3ZWFwb24gdGltaW5nLCBhbmQgYnJpZWYgYnJpZ2h0IHJlY292ZXJ5IHdpbmRvd3MuXCIsXG4gIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwic29sYXJBcnJheVwiIH0sXG4gIGJhbGFuY2U6IHsgZW5lbXlIcDogMSwgZW5lbXlTcGVlZDogMS4wMyB9LFxufSlcbiAgLnJlYnVpbGQoNSwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4ucHVsc2VQaXN0b2xcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkLCBzcGVlZDogLjg4IH0pO1xuICAgIHNlY3Rpb24uYXQoMikud2VhcG9uKFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgeyBjb2x1bW46IGMubGVmdC5taWQsIHNwZWVkOiAuODYgfSk7XG4gICAgc2VjdGlvbi5hdCg0KS5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjLmxlZnQub3V0ZXIsIHNwZWVkOiAuOTIgfSk7XG4gIH0pXG4gIC5yZXNwaXRlKDQpXG4gIC5wcmVzc3VyZSg5LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5yaWdodC5taWQsIGNvdW50OiA0LCBnYXA6IDEsIHNwZWVkOiAxIH0pO1xuICAgIHNlY3Rpb24uYXQoMSkuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm5lYXJPdXRlcl0sIGNvdW50OiA0LCBnYXA6IDEsIHNwZWVkOiAuOTggfSk7XG4gICAgc2VjdGlvbi5hdCg4KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdLCBzcGVlZDogMSB9KTtcbiAgfSlcbiAgLnJlc3BpdGUoMilcbiAgLnJlYnVpbGQoNSwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJJbm5lciwgc3BlZWQ6IC44NiB9KTtcbiAgICBzZWN0aW9uLmF0KDIpLndlYXBvbihcInN3b3JkLmFyY0JsYWRlXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm5lYXJJbm5lciwgc3BlZWQ6IC44NiB9KTtcbiAgfSlcbiAgLnByZXNzdXJlKDEwLCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlcl0sIGNvdW50OiA0LCBnYXA6IDIsIHNwZWVkOiAuOTQgfSk7XG4gICAgc2VjdGlvbi5hdCgxKS5kcmlwKFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5taWQsIHJvd3M6IDgsIGV2ZXJ5OiAyLCBzcGVlZDogMS4wMiB9KTtcbiAgICBzZWN0aW9uLmF0KDgpLndhbGwoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlcl0sIHNwZWVkOiAxIH0pO1xuICB9KVxuICAuYnVpbGQoKSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyIH0gZnJvbSBcIi4uL1RyYWNrQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gdHJhY2tCdWlsZGVyLmNyZWF0ZSh7XG4gIGxhYmVsOiBcIkhlbGlvc3RhdCBSdXNoXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlNvbGFyIEFycmF5IHByZXNzdXJlIGFjY2VsZXJhdGVzIHdpdGggYnJpZ2h0ZXIgZmxhbmtlcnMsIGdsYXNzIGNvdmVyLCBhbmQgYSBkZWNpc2l2ZSBidXJzdCBjYXJiaW5lIHJlYnVpbGQuXCIsXG4gIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwic29sYXJBcnJheVwiIH0sXG4gIGJhbGFuY2U6IHsgZW5lbXlIcDogMS4wOCwgZW5lbXlTcGVlZDogMS4wOCB9LFxufSlcbiAgLnJlYnVpbGQoNiwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJndW4uYnVyc3RDYXJiaW5lXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkLCBzcGVlZDogLjg0IH0pO1xuICAgIHNlY3Rpb24uYXQoMikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkLCBzcGVlZDogLjg2IH0pO1xuICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyLCBzcGVlZDogLjg0IH0pO1xuICB9KVxuICAucmVzcGl0ZSg0KVxuICAucHJlc3N1cmUoMTIsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkuYWx0ZXJuYXRpbmcoXCJiYXNpY1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZCwgYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdLCBjb3VudDogNiwgZ2FwOiAxLCBzcGVlZDogMS4wNSB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLmRyaXAoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogYy5yaWdodC5vdXRlciwgcm93czogOSwgZXZlcnk6IDMsIHNwZWVkOiAxLjEyIH0pO1xuICAgIHNlY3Rpb24uYXQoOCkud2FsbChcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBzcGVlZDogLjk2IH0pO1xuICB9KVxuICAucmVzcGl0ZSgyKVxuICAucmVidWlsZCg2LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5zcGxpdHRlclJpZmxlXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgc3BlZWQ6IC44MiB9KTtcbiAgICBzZWN0aW9uLmF0KDIpLndlYXBvbihcInN3b3JkLm5lZWRsZVJhcGllclwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCwgc3BlZWQ6IC44NCB9KTtcbiAgICBzZWN0aW9uLmF0KDQpLndlYXBvbihcInNoaWVsZC5saWdodEd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm5lYXJPdXRlciwgc3BlZWQ6IC44NiB9KTtcbiAgfSlcbiAgLnByZXNzdXJlKDEyLCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmxpbmUoXCJ3aW5nZXJcIiwgeyBjb2x1bW46IGMubGVmdC5vdXRlciwgY291bnQ6IDQsIGdhcDogMSwgc3BlZWQ6IC45OCB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5yaWdodC5taWQsIGNvdW50OiA1LCBnYXA6IDEsIHNwZWVkOiAxLjA4IH0pO1xuICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyLCBzcGVlZDogLjgyIH0pO1xuICB9KVxuICAuYnVpbGQoKSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyIH0gZnJvbSBcIi4uL1RyYWNrQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gdHJhY2tCdWlsZGVyLmNyZWF0ZSh7XG4gIGxhYmVsOiBcIk1pcnJvciBaZW5pdGhcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIFNvbGFyIEFycmF5IGZpbmFsZSBjb21iaW5lcyBtaXJyb3JlZCB3YWxscywgaGVhdnkgdG9vbHMsIGFuZCBmYXN0IG91dGVyLWxhbmUgc3VyZ2VzLlwiLFxuICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIiB9LFxuICBiYWxhbmNlOiB7IGVuZW15SHA6IDEuMTYsIGVuZW15U3BlZWQ6IDEuMTIgfSxcbn0pXG4gIC5yZWJ1aWxkKDYsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgc3BlZWQ6IC44IH0pO1xuICAgIHNlY3Rpb24uYXQoMSkud2VhcG9uKFwic2hpZWxkLmhleEd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkLCBzcGVlZDogLjgyIH0pO1xuICAgIHNlY3Rpb24uYXQoNCkucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyLCBzcGVlZDogLjg0IH0pO1xuICB9KVxuICAucmVzcGl0ZSg0KVxuICAucHJlc3N1cmUoMTMsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFyT3V0ZXIsIGMubGVmdC5uZWFySW5uZXIsIGMucmlnaHQubmVhcklubmVyLCBjLnJpZ2h0Lm5lYXJPdXRlcl0sIHNwZWVkOiAxLjA0IH0pO1xuICAgIHNlY3Rpb24uYXQoMikuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDUsIGdhcDogMSwgc3BlZWQ6IDEgfSk7XG4gICAgc2VjdGlvbi5hdCg1KS5kcmlwKFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW46IGMubGVmdC5taWQsIHJvd3M6IDgsIGV2ZXJ5OiAyLCBzcGVlZDogMS4xMiB9KTtcbiAgICBzZWN0aW9uLmF0KDEwKS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGMucmlnaHQuaW5uZXIsIHNwZWVkOiAuNzggfSk7XG4gIH0pXG4gIC5yZXNwaXRlKDIpXG4gIC5yZWJ1aWxkKDcsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgeyBjb2x1bW46IGMubGVmdC5taWQsIHNwZWVkOiAuOCB9KTtcbiAgICBzZWN0aW9uLmF0KDIpLndlYXBvbihcInN3b3JkLmNsZWF2ZXJcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkLCBzcGVlZDogLjgyIH0pO1xuICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyLCBzcGVlZDogLjg0IH0pO1xuICB9KVxuICAucHJlc3N1cmUoMTQsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkubGluZShcImJhc2ljXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgY291bnQ6IDUsIGdhcDogMSwgc3BlZWQ6IDEuMSB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLmFsdGVybmF0aW5nKFwid2luZ2VyXCIsIHsgY29sdW1uczogW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlciwgYy5sZWZ0Lm5lYXJPdXRlcl0sIGNvdW50OiA1LCBnYXA6IDIsIHNwZWVkOiAuOTggfSk7XG4gICAgc2VjdGlvbi5hdCgxMCkud2FsbChcInRhbmtcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5pbm5lcl0sIHNwZWVkOiAuNzYgfSk7XG4gIH0pXG4gIC5idWlsZCgpIHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgeyBjLCB0cmFja0J1aWxkZXIgfSBmcm9tIFwiLi4vVHJhY2tCdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSB0cmFja0J1aWxkZXIuY3JlYXRlKHtcbiAgbGFiZWw6IFwiQmxvb20gU2lnbmFsXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgVm9pZCBHYXJkZW4gb3BlbmVyIHdpdGggc3BhcnNlIGRyaWZ0aW5nIHRocmVhdHMsIHJlYWRhYmxlIHJlYnVpbGRzLCBhbmQgc29mdCBjcm9zcy1sYW5lIHByZXNzdXJlLlwiLFxuICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIiB9LFxuICBiYWxhbmNlOiB7IGVuZW15SHA6IDEsIGVuZW15U3BlZWQ6IDEgfSxcbn0pXG4gIC5yZWJ1aWxkKDUsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLnB1bHNlUGlzdG9sXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkLCBzcGVlZDogMSB9KTtcbiAgICBzZWN0aW9uLmF0KDMpLndlYXBvbihcInN3b3JkLmFyY0JsYWRlXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgc3BlZWQ6IDEgfSk7XG4gIH0pXG4gIC5yZXNwaXRlKDQpXG4gIC5wcmVzc3VyZSgxMSwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS5kcmlwKFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5uZWFyT3V0ZXIsIHJvd3M6IDgsIGV2ZXJ5OiAyLCBzcGVlZDogMSB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLmFsdGVybmF0aW5nKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5yaWdodC5taWQsIGMubGVmdC5taWRdLCBjb3VudDogNCwgZ2FwOiAyLCBzcGVlZDogMSB9KTtcbiAgICBzZWN0aW9uLmF0KDYpLndhbGwoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBzcGVlZDogMSB9KTtcbiAgfSlcbiAgLnJlc3BpdGUoMylcbiAgLnJlYnVpbGQoNSwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS53ZWFwb24oXCJzaGllbGQubGlnaHRHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm5lYXJJbm5lciwgc3BlZWQ6IDEgfSk7XG4gICAgc2VjdGlvbi5hdCgyKS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFySW5uZXIsIHNwZWVkOiAxIH0pO1xuICB9KVxuICAucHJlc3N1cmUoOSwgc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5hdCgwKS5hbHRlcm5hdGluZyhcIndpbmdlclwiLCB7IGNvbHVtbnM6IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXJdLCBjb3VudDogNCwgZ2FwOiAxLCBzcGVlZDogMSB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5yaWdodC5taWQsIGNvdW50OiA0LCBnYXA6IDEsIHNwZWVkOiAxIH0pO1xuICAgIHNlY3Rpb24uYXQoNykud2FsbChcImJhc2ljXCIsIHsgY29sdW1uczogW2MubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyXSwgc3BlZWQ6IDEgfSk7XG4gIH0pXG4gIC5idWlsZCgpIHNhdGlzZmllcyBUcmFja01lbWJlcjtcbiIsICJpbXBvcnQgeyBjLCB0cmFja0J1aWxkZXIgfSBmcm9tIFwiLi4vVHJhY2tCdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVkVHJhY2sgPSB0cmFja0J1aWxkZXIuY3JlYXRlKHtcbiAgbGFiZWw6IFwiUm9vdCBMYXR0aWNlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlZvaWQgR2FyZGVuIGRlbnNpdHkgZ3Jvd3MgdGhyb3VnaCBvZmZzZXQgbGluZXMsIGRlY295IGJsb29tcywgYW5kIGNvbnRyb2xsZWQgc2hpZWxkIHRpbWluZy5cIixcbiAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIgfSxcbiAgYmFsYW5jZTogeyBlbmVteUhwOiAxLjA0LCBlbmVteVNwZWVkOiAxLjA3IH0sXG59KVxuICAucmVidWlsZCg2LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5uZWVkbGVyU21nXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgc3BlZWQ6IC44NiB9KTtcbiAgICBzZWN0aW9uLmF0KDIpLndlYXBvbihcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCwgc3BlZWQ6IC44NCB9KTtcbiAgICBzZWN0aW9uLmF0KDQpLmVuZW15KFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW46IGMucmlnaHQub3V0ZXIsIHNwZWVkOiAxLjA4IH0pO1xuICB9KVxuICAucmVzcGl0ZSg0KVxuICAucHJlc3N1cmUoMTIsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkubGluZShcImJhc2ljXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyLCBjb3VudDogNSwgZ2FwOiAxLCBzcGVlZDogMS4wMiB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLmxpbmUoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5yaWdodC5uZWFyT3V0ZXIsIGNvdW50OiA1LCBnYXA6IDEsIHNwZWVkOiAxLjAyIH0pO1xuICAgIHNlY3Rpb24uYXQoNCkuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyXSwgY291bnQ6IDMsIGdhcDogMiwgc3BlZWQ6IC45OCB9KTtcbiAgICBzZWN0aW9uLmF0KDkpLndhbGwoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbnM6IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0sIHNwZWVkOiAxLjEgfSk7XG4gIH0pXG4gIC5yZXNwaXRlKDIpXG4gIC5yZWJ1aWxkKDYsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwic3dvcmQubmVlZGxlUmFwaWVyXCIsIHsgY29sdW1uOiBjLmxlZnQubmVhcklubmVyLCBzcGVlZDogLjg0IH0pO1xuICAgIHNlY3Rpb24uYXQoMikucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhcklubmVyLCBzcGVlZDogLjg1IH0pO1xuICAgIHNlY3Rpb24uYXQoNCkud2VhcG9uKFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCwgc3BlZWQ6IC44NiB9KTtcbiAgfSlcbiAgLnByZXNzdXJlKDEyLCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLmRyaXAoXCJnbGFzc1NoaWVsZFwiLCB7IGNvbHVtbjogYy5sZWZ0Lm91dGVyLCByb3dzOiAxMCwgZXZlcnk6IDIsIHNwZWVkOiAxLjEgfSk7XG4gICAgc2VjdGlvbi5hdCgxKS5hbHRlcm5hdGluZyhcImJhc2ljXCIsIHsgY29sdW1uczogW2MucmlnaHQubWlkLCBjLmxlZnQubWlkLCBjLnJpZ2h0Lm5lYXJPdXRlcl0sIGNvdW50OiA2LCBnYXA6IDEsIHNwZWVkOiAxLjA4IH0pO1xuICAgIHNlY3Rpb24uYXQoOCkuZW5lbXkoXCJ0YW5rXCIsIHsgY29sdW1uOiBjLnJpZ2h0LmlubmVyLCBzcGVlZDogLjgyIH0pO1xuICB9KVxuICAuYnVpbGQoKSBzYXRpc2ZpZXMgVHJhY2tNZW1iZXI7XG4iLCAiaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyIH0gZnJvbSBcIi4uL1RyYWNrQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlZFRyYWNrID0gdHJhY2tCdWlsZGVyLmNyZWF0ZSh7XG4gIGxhYmVsOiBcIk5pZ2h0IE9yY2hhcmRcIixcbiAgZGVzY3JpcHRpb246IFwiVGhlIFZvaWQgR2FyZGVuIGZpbmFsZSB1c2VzIGNsdXN0ZXJlZCBibG9vbXMsIHBhaXJlZCB0YW5rcywgYW5kIHByZWNpc2lvbiBwaWNrdXBzIHdpdGhvdXQgY3Jvd2RpbmcgdGhlIHJlYWQuXCIsXG4gIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiIH0sXG4gIGJhbGFuY2U6IHsgZW5lbXlIcDogMS4xMiwgZW5lbXlTcGVlZDogMS4xIH0sXG59KVxuICAucmVidWlsZCg2LCBzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmF0KDApLndlYXBvbihcImd1bi5zcGxpdHRlclJpZmxlXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkLCBzcGVlZDogLjg0IH0pO1xuICAgIHNlY3Rpb24uYXQoMSkud2VhcG9uKFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgc3BlZWQ6IC44NCB9KTtcbiAgICBzZWN0aW9uLmF0KDQpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjLmxlZnQubmVhck91dGVyLCBzcGVlZDogLjg2IH0pO1xuICB9KVxuICAucmVzcGl0ZSg0KVxuICAucHJlc3N1cmUoMTMsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkuYWx0ZXJuYXRpbmcoXCJ3aW5nZXJcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyLCBjLmxlZnQubmVhck91dGVyXSwgY291bnQ6IDYsIGdhcDogMSwgc3BlZWQ6IDEgfSk7XG4gICAgc2VjdGlvbi5hdCgyKS5kcmlwKFwiZ2xhc3NTaGllbGRcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkLCByb3dzOiA5LCBldmVyeTogMiwgc3BlZWQ6IDEuMTIgfSk7XG4gICAgc2VjdGlvbi5hdCg5KS53YWxsKFwiYmFzaWNcIiwgeyBjb2x1bW5zOiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXIsIGMucmlnaHQubmVhck91dGVyXSwgc3BlZWQ6IDEuMDQgfSk7XG4gIH0pXG4gIC5yZXNwaXRlKDIpXG4gIC5yZWJ1aWxkKDcsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkud2VhcG9uKFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCwgc3BlZWQ6IC44MiB9KTtcbiAgICBzZWN0aW9uLmF0KDIpLndlYXBvbihcInN3b3JkLmNsZWF2ZXJcIiwgeyBjb2x1bW46IGMubGVmdC5taWQsIHNwZWVkOiAuODQgfSk7XG4gICAgc2VjdGlvbi5hdCg0KS53ZWFwb24oXCJzaGllbGQuaGV4R3VhcmRcIiwgeyBjb2x1bW46IGMucmlnaHQubmVhck91dGVyLCBzcGVlZDogLjg0IH0pO1xuICB9KVxuICAucHJlc3N1cmUoMTQsIHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uYXQoMCkubGluZShcImJhc2ljXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkLCBjb3VudDogNSwgZ2FwOiAxLCBzcGVlZDogMS4wOCB9KTtcbiAgICBzZWN0aW9uLmF0KDEpLmxpbmUoXCJ3aW5nZXJcIiwgeyBjb2x1bW46IGMucmlnaHQub3V0ZXIsIGNvdW50OiA0LCBnYXA6IDIsIHNwZWVkOiAuOTggfSk7XG4gICAgc2VjdGlvbi5hdCg2KS5lbmVteShcInRhbmtcIiwgeyBjb2x1bW46IGMucmlnaHQuaW5uZXIsIHNwZWVkOiAuOCB9KTtcbiAgICBzZWN0aW9uLmF0KDEwKS53YWxsKFwidGFua1wiLCB7IGNvbHVtbnM6IFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0LmlubmVyXSwgc3BlZWQ6IC43NiB9KTtcbiAgfSlcbiAgLmJ1aWxkKCkgc2F0aXNmaWVzIFRyYWNrTWVtYmVyO1xuIiwgImltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGF1cm9yYVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrNFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgYXVyb3JhVHJhY2syIH0gZnJvbSBcIi4vVHJhY2s1XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBhdXJvcmFUcmFjazMgfSBmcm9tIFwiLi9UcmFjazZcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIGNyeXN0YWxGb3JnZVRyYWNrMSB9IGZyb20gXCIuL1RyYWNrN1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgY3J5c3RhbEZvcmdlVHJhY2syIH0gZnJvbSBcIi4vVHJhY2s4XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBjcnlzdGFsRm9yZ2VUcmFjazMgfSBmcm9tIFwiLi9UcmFjazlcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIG5lb25OZWJ1bGFlVHJhY2sxIH0gZnJvbSBcIi4vVHJhY2sxXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBuZW9uTmVidWxhZVRyYWNrMiB9IGZyb20gXCIuL1RyYWNrMlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgbmVvbk5lYnVsYWVUcmFjazMgfSBmcm9tIFwiLi9UcmFjazNcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHNvbGFyQXJyYXlUcmFjazEgfSBmcm9tIFwiLi9UcmFjazEzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyBzb2xhckFycmF5VHJhY2syIH0gZnJvbSBcIi4vVHJhY2sxNFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgc29sYXJBcnJheVRyYWNrMyB9IGZyb20gXCIuL1RyYWNrMTVcIjtcbmltcG9ydCB7IGdlbmVyYXRlZFRyYWNrIGFzIHZvaWRHYXJkZW5UcmFjazEgfSBmcm9tIFwiLi9UcmFjazEwXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWRUcmFjayBhcyB2b2lkR2FyZGVuVHJhY2syIH0gZnJvbSBcIi4vVHJhY2sxMVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVkVHJhY2sgYXMgdm9pZEdhcmRlblRyYWNrMyB9IGZyb20gXCIuL1RyYWNrMTJcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSB7XG4gIFwibmVvbi1uZWJ1bGFlLTFcIjogbmVvbk5lYnVsYWVUcmFjazEsXG4gIFwibmVvbi1uZWJ1bGFlLTJcIjogbmVvbk5lYnVsYWVUcmFjazIsXG4gIFwibmVvbi1uZWJ1bGFlLTNcIjogbmVvbk5lYnVsYWVUcmFjazMsXG4gIFwiYXVyb3JhLTFcIjogYXVyb3JhVHJhY2sxLFxuICBcImF1cm9yYS0yXCI6IGF1cm9yYVRyYWNrMixcbiAgXCJhdXJvcmEtM1wiOiBhdXJvcmFUcmFjazMsXG4gIFwiY3J5c3RhbC1mb3JnZS0xXCI6IGNyeXN0YWxGb3JnZVRyYWNrMSxcbiAgXCJjcnlzdGFsLWZvcmdlLTJcIjogY3J5c3RhbEZvcmdlVHJhY2syLFxuICBcImNyeXN0YWwtZm9yZ2UtM1wiOiBjcnlzdGFsRm9yZ2VUcmFjazMsXG4gIFwidm9pZC1nYXJkZW4tMVwiOiB2b2lkR2FyZGVuVHJhY2sxLFxuICBcInZvaWQtZ2FyZGVuLTJcIjogdm9pZEdhcmRlblRyYWNrMixcbiAgXCJ2b2lkLWdhcmRlbi0zXCI6IHZvaWRHYXJkZW5UcmFjazMsXG4gIFwic29sYXItYXJyYXktMVwiOiBzb2xhckFycmF5VHJhY2sxLFxuICBcInNvbGFyLWFycmF5LTJcIjogc29sYXJBcnJheVRyYWNrMixcbiAgXCJzb2xhci1hcnJheS0zXCI6IHNvbGFyQXJyYXlUcmFjazMsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbGllcyA9IHtcbiAgbmVvbk5lYnVsYWU6IHtcbiAgICBsYWJlbDogXCJOZW9uIE5lYnVsYWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxlYXJuaW5nIGFyYyBhYm91dCBsYW5lcywgcGlja3Vwcywgc2hpZWxkcywgYW5kIGNvbnRyb2xsZWQgcHJlc3N1cmUuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJuZW9uSGFsbFwiIH0sXG4gICAgdHJhY2tJZHM6IFtcIm5lb24tbmVidWxhZS0xXCIsIFwibmVvbi1uZWJ1bGFlLTJcIiwgXCJuZW9uLW5lYnVsYWUtM1wiXSxcbiAgfSxcbiAgYXVyb3JhOiB7XG4gICAgbGFiZWw6IFwiQXVyb3JhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVuc2UgcGxhbmV0YXJ5IGFzc2F1bHRzIHdpdGggYnJpZ2h0ZXIgcmVjb3Zlcnkgd2luZG93cyBhbmQgc2hhcnBlciB0aHJlYXQgd2F2ZXMuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJhdXJvcmFcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJhdXJvcmEtMVwiLCBcImF1cm9yYS0yXCIsIFwiYXVyb3JhLTNcIl0sXG4gIH0sXG4gIGNyeXN0YWxGb3JnZToge1xuICAgIGxhYmVsOiBcIkNyeXN0YWwgRm9yZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmlzbWF0aWMgZmFjdG9yeSBsYW5lcyB3aXRoIHNoYXJwIHByZXNzdXJlLCBnbGFzcyBkZWNveXMsIGFuZCBoZWF2eSBjcnlzdGFsbGluZSBicmVha3MuXCIsXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJjcnlzdGFsLWZvcmdlLTFcIiwgXCJjcnlzdGFsLWZvcmdlLTJcIiwgXCJjcnlzdGFsLWZvcmdlLTNcIl0sXG4gIH0sXG4gIHZvaWRHYXJkZW46IHtcbiAgICBsYWJlbDogXCJWb2lkIEdhcmRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpb2x1bWluZXNjZW50IG5pZ2h0IGxhbmVzIHdpdGggc3BhcnNlIGJsb29tcywgZGVjb3lzLCBhbmQgY29udHJvbGxlZCByZWNvdmVyeSBwb2NrZXRzLlwiLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiIH0sXG4gICAgdHJhY2tJZHM6IFtcInZvaWQtZ2FyZGVuLTFcIiwgXCJ2b2lkLWdhcmRlbi0yXCIsIFwidm9pZC1nYXJkZW4tM1wiXSxcbiAgfSxcbiAgc29sYXJBcnJheToge1xuICAgIGxhYmVsOiBcIlNvbGFyIEFycmF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnJpZ2h0IG9yYml0YWwgbGFuZXMgd2l0aCBtaXJyb3JlZCB3YWxscywgZmFzdCBvdXRlciBzdXJnZXMsIGFuZCBkZWNpc2l2ZSBoZWF2eSB0b29scy5cIixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIiB9LFxuICAgIHRyYWNrSWRzOiBbXCJzb2xhci1hcnJheS0xXCIsIFwic29sYXItYXJyYXktMlwiLCBcInNvbGFyLWFycmF5LTNcIl0sXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbmV4cG9ydCB7XG4gIGF1cm9yYVRyYWNrMSxcbiAgYXVyb3JhVHJhY2syLFxuICBhdXJvcmFUcmFjazMsXG4gIGNyeXN0YWxGb3JnZVRyYWNrMSxcbiAgY3J5c3RhbEZvcmdlVHJhY2syLFxuICBjcnlzdGFsRm9yZ2VUcmFjazMsXG4gIG5lb25OZWJ1bGFlVHJhY2sxLFxuICBuZW9uTmVidWxhZVRyYWNrMixcbiAgbmVvbk5lYnVsYWVUcmFjazMsXG4gIHNvbGFyQXJyYXlUcmFjazEsXG4gIHNvbGFyQXJyYXlUcmFjazIsXG4gIHNvbGFyQXJyYXlUcmFjazMsXG4gIHZvaWRHYXJkZW5UcmFjazEsXG4gIHZvaWRHYXJkZW5UcmFjazIsXG4gIHZvaWRHYXJkZW5UcmFjazMsXG59O1xuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrRmFtaWx5TWVtYmVyLCBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcGFyc2VUcmFja0RlZmluaXRpb24gfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHRyYWNrRmFtaWxpZXMsIHRyYWNrcyB9IGZyb20gXCIuL3RyYWNrc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInRyYWNrXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJUcmFja1wiO1xuICByZWFkb25seSBtZW1iZXJzID0gdHJhY2tzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj47XG4gIHJlYWRvbmx5IGZhbWlsaWVzID0gdHJhY2tGYW1pbGllcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlNZW1iZXI8a2V5b2YgdHlwZW9mIHRyYWNrcz4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICAgIHRoaXMucmVxdWlyZShpc0xhbmVSdW5uZXJTY2VuZUlkKHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2lkLCBmYW1pbHldIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmFtaWxpZXMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoZmFtaWx5LnRyYWNrSWRzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIHRyYWNrLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQoZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgICBmb3IgKGNvbnN0IHRyYWNrSWQgb2YgZmFtaWx5LnRyYWNrSWRzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0cmFja0lkIGluIHRoaXMubWVtYmVycywgYCR7aWR9IHJlZmVyZW5jZXMgdW5rbm93biB0cmFjayBcIiR7dHJhY2tJZH1cIi5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRoaXMubWVtYmVyc1t0cmFja0lkXS5lbnZpcm9ubWVudC5zY2VuZUlkID09PSBmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCwgYCR7dHJhY2tJZH0gbXVzdCB1c2UgdGhlICR7aWR9IHNjZW5lLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG5leHBvcnQgdHlwZSBUcmFja0ZhbWlseUlkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5LmZhbWlsaWVzO1xuIiwgImltcG9ydCB7IGNyZWF0ZVRlc3RQYWdlLCBuZW9uUGFsZXR0ZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgc3dvcmRGYW1pbHksIHR5cGUgU3dvcmRJZCwgdHlwZSBTd29yZE1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmludGVyZmFjZSBTd29yZFNtb2tlUmVzdWx0IHtcbiAgc3dvcmRJZDogU3dvcmRJZDtcbiAgcGFzc2VkOiBib29sZWFuO1xuICBmYWlsdXJlczogc3RyaW5nW107XG59XG5cbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KFwiI3Rlc3Qtc3RhdHVzXCIpITtcbmNvbnN0IHJlc3VsdHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MT0xpc3RFbGVtZW50PihcIiNyZXN1bHRzXCIpITtcblxuZnVuY3Rpb24gdmFsaWRhdGVTd29yZChpZDogU3dvcmRJZCwgc3dvcmQ6IFN3b3JkTWVtYmVyKTogU3dvcmRTbW9rZVJlc3VsdCB7XG4gIGNvbnN0IGZhaWx1cmVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGlmIChzd29yZC5yYW5nZSA8PSAwKSBmYWlsdXJlcy5wdXNoKGByYW5nZSAke3N3b3JkLnJhbmdlfSBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gIGlmIChzd29yZC5hcmNEZWdyZWVzIDw9IDAgfHwgc3dvcmQuYXJjRGVncmVlcyA+IDM2MCkgZmFpbHVyZXMucHVzaChgYXJjRGVncmVlcyAke3N3b3JkLmFyY0RlZ3JlZXN9IG11c3QgYmUgaW4gKDAsIDM2MF1gKTtcbiAgaWYgKHN3b3JkLmRhbWFnZSA8PSAwKSBmYWlsdXJlcy5wdXNoKGBkYW1hZ2UgJHtzd29yZC5kYW1hZ2V9IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgaWYgKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA8PSAwKSBmYWlsdXJlcy5wdXNoKGBjb29sZG93blNlY29uZHMgJHtzd29yZC5jb29sZG93blNlY29uZHN9IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgaWYgKHN3b3JkLm1heFRhcmdldHMgPCAxKSBmYWlsdXJlcy5wdXNoKGBtYXhUYXJnZXRzICR7c3dvcmQubWF4VGFyZ2V0c30gbXVzdCBiZSA+PSAxYCk7XG4gIGlmIChzd29yZC5zbGFzaER1cmF0aW9uTXMgPD0gMCkgZmFpbHVyZXMucHVzaChgc2xhc2hEdXJhdGlvbk1zICR7c3dvcmQuc2xhc2hEdXJhdGlvbk1zfSBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gIGlmIChzd29yZC5zbGFzaFRoaWNrbmVzcyA8PSAwKSBmYWlsdXJlcy5wdXNoKGBzbGFzaFRoaWNrbmVzcyAke3N3b3JkLnNsYXNoVGhpY2tuZXNzfSBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gIGlmICghbmVvblBhbGV0dGVbc3dvcmQuY29sb3JdKSBmYWlsdXJlcy5wdXNoKGBjb2xvciBcIiR7c3dvcmQuY29sb3J9XCIgbm90IGluIG5lb25QYWxldHRlYCk7XG5cbiAgcmV0dXJuIHsgc3dvcmRJZDogaWQsIHBhc3NlZDogZmFpbHVyZXMubGVuZ3RoID09PSAwLCBmYWlsdXJlcyB9O1xufVxuXG5jb25zdCBydW4gPSAoKTogU3dvcmRTbW9rZVJlc3VsdFtdID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IE9iamVjdC5lbnRyaWVzKHN3b3JkRmFtaWx5Lm1lbWJlcnMpLm1hcCgoW2lkLCBzd29yZF0pID0+XG4gICAgdmFsaWRhdGVTd29yZChpZCBhcyBTd29yZElkLCBzd29yZCkpO1xuXG4gIHJlc3VsdHNFbGVtZW50LmlubmVySFRNTCA9IHJlc3VsdHMubWFwKHIgPT4gYFxuICAgIDxsaSBkYXRhLXBhc3NlZD1cIiR7ci5wYXNzZWR9XCIgZGF0YS1zd29yZC1pZD1cIiR7ci5zd29yZElkfVwiPlxuICAgICAgPHN0cm9uZz4ke3N3b3JkRmFtaWx5Lm1lbWJlcnNbci5zd29yZElkIGFzIGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzXS5sYWJlbH08L3N0cm9uZz5cbiAgICAgIDxzcGFuPiR7ci5wYXNzZWQgPyBcIlBBU1NcIiA6IFwiRkFJTFwifTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsXCI+JHtyLnBhc3NlZFxuICAgICAgICA/IGByYW5nZTogJHtzd29yZEZhbWlseS5tZW1iZXJzW3Iuc3dvcmRJZCBhcyBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVyc10ucmFuZ2V9cHggXHUwMEI3IGFyYzogJHtzd29yZEZhbWlseS5tZW1iZXJzW3Iuc3dvcmRJZCBhcyBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVyc10uYXJjRGVncmVlc31cdTAwQjAgXHUwMEI3IGNkOiAke3N3b3JkRmFtaWx5Lm1lbWJlcnNbci5zd29yZElkIGFzIGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzXS5jb29sZG93blNlY29uZHN9c2BcbiAgICAgICAgOiByLmZhaWx1cmVzLmpvaW4oXCIgfCBcIil9PC9zcGFuPlxuICAgIDwvbGk+YCkuam9pbihcIlwiKTtcblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmNvbnN0IHRlc3QgPSBjcmVhdGVUZXN0UGFnZShcIm5lb24tc3dhcm0tc3dvcmQtZmFtaWx5LXNtb2tlXCIsIHsgc3VpdGU6IFwic21va2VcIiwgcnVuIH0sIHN0YXR1cyk7XG50ZXN0LnJlYWR5KCk7XG5mb3IgKGNvbnN0IHJlc3VsdCBvZiBydW4oKSkge1xuICB0ZXN0LmFzc2VydChcbiAgICBgJHtyZXN1bHQuc3dvcmRJZH0gZGVmaW5pdGlvbiBpcyB2YWxpZGAsXG4gICAgcmVzdWx0LnBhc3NlZCxcbiAgICByZXN1bHQuZmFpbHVyZXMuam9pbihcIjsgXCIpIHx8IFwiYWxsIGNoZWNrcyBwYXNzZWRcIixcbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLE1BQ3BFLE1BQU0sS0FBSyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3RDLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7QUFDM0MsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEQsQ0FBQztBQUVILElBQU0sT0FBTyxDQUFDLFFBQWdCLFFBQVEsTUFBSyxXQUFXLENBQUMsS0FBSyxLQUFLLE1BQy9ELE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDM0MsUUFBTSxTQUFTLElBQUksSUFBSSxRQUFRO0FBQy9CLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLO0FBQ3ZDLFNBQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNO0FBQzVELENBQUM7QUFFSCxJQUFNLFVBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RCxJQUFNLFFBQXFCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQUssSUFBRyxHQUFHLENBQUMsTUFBSyxJQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUcsR0FBRyxDQUFDLE9BQU0sSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLENBQUM7QUFDL0YsSUFBTSxVQUF1QixDQUFDLENBQUMsSUFBSSxLQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUksR0FBRyxDQUFDLEdBQUcsS0FBSSxHQUFHLENBQUMsTUFBSyxJQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUcsR0FBRyxDQUFDLE9BQU0sSUFBRyxDQUFDO0FBQ2pHLElBQU0sU0FBc0IsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQ2xELElBQU0sU0FBMEM7QUFBQSxFQUM5QyxRQUFRLFlBQVk7QUFBQSxFQUFNLFFBQVEsWUFBWTtBQUFBLEVBQUssU0FBUyxZQUFZO0FBQUEsRUFDeEUsTUFBTSxZQUFZO0FBQUEsRUFBTSxXQUFXO0FBQUEsRUFBVyxPQUFPO0FBQ3ZEO0FBRUEsSUFBTSxPQUFPLENBQ1gsUUFBeUIsSUFBWSxNQUFjLFFBQ25ELE1BQXFCLFdBQ2EsRUFBRSxJQUFJLE1BQU0sUUFBUSxRQUFRLE9BQU8sTUFBTSxPQUFPLE9BQU8sTUFBTSxHQUFHLE9BQU8sV0FBVyxTQUFTLE9BQU0sS0FBSTtBQUVsSSxJQUFNLG1CQUE0RDtBQUFBLEVBQ3ZFLEtBQUssVUFBVSxpQkFBaUIsaUJBQWlCLE9BQU8sU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQUssSUFBSSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDckgsS0FBSyxVQUFVLGVBQWUsZUFBZSxDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxLQUFHLElBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3BJLEtBQUssVUFBVSxhQUFhLGFBQWEsS0FBSyxHQUFHLElBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBTSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUM3RyxLQUFLLFVBQVUsZUFBZSxlQUFlLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLEtBQUcsR0FBRyxNQUFLLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDbEcsS0FBSyxVQUFVLGNBQWMsY0FBYyxDQUFDLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEdBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsTUFBSSxHQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxPQUFLLElBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ2xMLEtBQUssVUFBVSxhQUFhLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBRyxHQUFHLE1BQUssSUFBRyxDQUFDLENBQUM7QUFBQSxFQUM5RixLQUFLLFVBQVUsZUFBZSxlQUFlLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxHQUFFLENBQUMsR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsT0FBSyxJQUFHLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDOUcsS0FBSyxVQUFVLGVBQWUsZUFBZSxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQzdGLEtBQUssVUFBVSxlQUFlLGVBQWUsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxHQUFHLE1BQUssSUFBRyxDQUFDLENBQUM7QUFBQSxFQUU3RixLQUFLLFVBQVUsZUFBZSxRQUFRLENBQUMsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRyxHQUFFLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUNoRixLQUFLLFVBQVUsZUFBZSxRQUFRLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDekcsS0FBSyxVQUFVLGlCQUFpQixVQUFVLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUNwRixLQUFLLFVBQVUsZ0JBQWdCLFNBQVMsS0FBSyxHQUFFLElBQUcsR0FBRyxNQUFNO0FBQUEsRUFDM0QsS0FBSyxVQUFVLGdCQUFnQixTQUFTLFNBQVMsT0FBTztBQUFBLEVBQ3hELEtBQUssVUFBVSxjQUFjLE9BQU8sU0FBUyxPQUFPO0FBQUEsRUFDcEQsS0FBSyxVQUFVLGNBQWMsV0FBVyxRQUFRLEdBQUcsS0FBSyxLQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEtBQUssS0FBRyxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNwRyxLQUFLLFVBQVUsZ0JBQWdCLFNBQVMsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPO0FBQUEsRUFDNUQsS0FBSyxVQUFVLGVBQWUsUUFBUSxDQUFDLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsS0FBRyxDQUFDLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEtBQUcsSUFBRyxDQUFDLEdBQUcsTUFBTTtBQUFBLEVBRXhHLEtBQUssV0FBVyxpQkFBaUIsU0FBUyxRQUFRLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ3ZHLEtBQUssV0FBVyxlQUFlLE9BQU8sU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsTUFBSSxJQUFFLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN0RyxLQUFLLFdBQVcsZUFBZSxZQUFZLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDcEYsS0FBSyxXQUFXLGlCQUFpQixTQUFTLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxLQUFHLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsS0FBRyxHQUFFLEdBQUUsQ0FBQyxNQUFJLEdBQUUsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUNySCxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBRWxGLEtBQUssUUFBUSxZQUFZLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FB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Y0FBYyxtQkFBbUI7QUFDdEcsTUFBSSxDQUFDLFlBQVksTUFBTSxLQUFLLEVBQUcsVUFBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLHNCQUFzQjtBQUV4RixTQUFPLEVBQUUsU0FBUyxJQUFJLFFBQVEsU0FBUyxXQUFXLEdBQUcsU0FBUztBQUNoRTtBQUVBLElBQU0sTUFBTSxNQUEwQjtBQUNwQyxRQUFNLFVBQVUsT0FBTyxRQUFRLFlBQVksT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxNQUNqRSxjQUFjLElBQWUsS0FBSyxDQUFDO0FBRXJDLGlCQUFlLFlBQVksUUFBUSxJQUFJLE9BQUs7QUFBQSx1QkFDdkIsRUFBRSxNQUFNLG9CQUFvQixFQUFFLE9BQU87QUFBQSxnQkFDNUMsWUFBWSxRQUFRLEVBQUUsT0FBMkMsRUFBRSxLQUFLO0FBQUEsY0FDMUUsRUFBRSxTQUFTLFNBQVMsTUFBTTtBQUFBLDZCQUNYLEVBQUUsU0FDckIsVUFBVSxZQUFZLFFBQVEsRUFBRSxPQUEyQyxFQUFFLEtBQUssZ0JBQWEsWUFBWSxRQUFRLEVBQUUsT0FBMkMsRUFBRSxVQUFVLGlCQUFXLFlBQVksUUFBUSxFQUFFLE9BQTJDLEVBQUUsZUFBZSxNQUN6USxFQUFFLFNBQVMsS0FBSyxLQUFLLENBQUM7QUFBQSxVQUN0QixFQUFFLEtBQUssRUFBRTtBQUVqQixTQUFPO0FBQ1Q7QUFFQSxJQUFNLE9BQU8sZUFBZSxpQ0FBaUMsRUFBRSxPQUFPLFNBQVMsSUFBSSxHQUFHLE1BQU07QUFDNUYsS0FBSyxNQUFNO0FBQ1gsV0FBVyxVQUFVLElBQUksR0FBRztBQUMxQixPQUFLO0FBQUEsSUFDSCxHQUFHLE9BQU8sT0FBTztBQUFBLElBQ2pCLE9BQU87QUFBQSxJQUNQLE9BQU8sU0FBUyxLQUFLLElBQUksS0FBSztBQUFBLEVBQ2hDO0FBQ0Y7IiwKICAibmFtZXMiOiBbImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIiwgImdlbmVyYXRlZFRyYWNrIl0KfQo=

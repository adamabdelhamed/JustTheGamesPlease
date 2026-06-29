// projects/NeonSwarm/CombatDefinition/CombatTuning.ts
var combatTuning = {
  globalSpeedMultiplier: 1.5
};
if (!Number.isFinite(combatTuning.globalSpeedMultiplier) || combatTuning.globalSpeedMultiplier <= 0) {
  throw new Error("combatTuning: globalSpeedMultiplier must be a positive finite number.");
}

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

// projects/NeonFactory/src/lane-runner-scenes.ts
var laneRunnerSceneIds = ["neonHall", "aurora", "crystalForge", "voidGarden", "solarArray"];
function isLaneRunnerSceneId(value) {
  return laneRunnerSceneIds.includes(value);
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
        level(3, { fireRatePerSecond: 2.15, damage: 1.35, projectileSpeed: 620, projectileRadius: 3.25, trailLength: 18, muzzleFlashScale: 0.75, hitFlashScale: 0.9 }),
        level(4, { fireRatePerSecond: 2.45, damage: 1.5, projectileSpeed: 650, projectileRadius: 3.35, trailLength: 19, muzzleFlashScale: 0.8, hitFlashScale: 0.95 }),
        level(5, { fireRatePerSecond: 2.75, damage: 1.65, projectileSpeed: 680, projectileRadius: 3.5, trailLength: 20, muzzleFlashScale: 0.85, hitFlashScale: 1 })
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
        level(3, { fireRatePerSecond: 9.25, damage: 0.54, projectileSpeed: 780, projectileRadius: 2.15, spreadDegrees: 2, trailLength: 12, tracerEveryNthShot: 4, muzzleFlashScale: 0.45, hitFlashScale: 0.55 }),
        level(4, { fireRatePerSecond: 10.75, damage: 0.59, projectileSpeed: 815, projectileRadius: 2.2, spreadDegrees: 2.25, trailLength: 13, tracerEveryNthShot: 4, muzzleFlashScale: 0.5, hitFlashScale: 0.6 }),
        level(5, { fireRatePerSecond: 12.25, damage: 0.64, projectileSpeed: 850, projectileRadius: 2.25, spreadDegrees: 2.5, trailLength: 14, tracerEveryNthShot: 3, muzzleFlashScale: 0.55, hitFlashScale: 0.65 })
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
        level(3, { fireRatePerSecond: 1.15, damage: 0.9, projectileSpeed: 725, projectileRadius: 3, burstCount: 4, burstIntervalMs: 58, spreadDegrees: 1, trailLength: 17, muzzleFlashScale: 0.65, hitFlashScale: 0.75 }),
        level(4, { fireRatePerSecond: 1.28, damage: 1, projectileSpeed: 760, projectileRadius: 3.05, burstCount: 4, burstIntervalMs: 54, spreadDegrees: 1, trailLength: 18, muzzleFlashScale: 0.7, hitFlashScale: 0.82 }),
        level(5, { fireRatePerSecond: 1.38, damage: 1.08, projectileSpeed: 795, projectileRadius: 3.1, burstCount: 5, burstIntervalMs: 50, spreadDegrees: 1.15, trailLength: 19, muzzleFlashScale: 0.78, hitFlashScale: 0.9 })
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
        level(3, { fireRatePerSecond: 0.9, damage: 3.6, projectileSpeed: 570, projectileRadius: 5, pierce: 2, trailLength: 26, impactRadius: 18, knockback: 22, muzzleFlashScale: 1.3, hitFlashScale: 1.5 }),
        level(4, { fireRatePerSecond: 0.98, damage: 4.1, projectileSpeed: 600, projectileRadius: 5.2, pierce: 2, trailLength: 28, impactRadius: 20, knockback: 26, muzzleFlashScale: 1.4, hitFlashScale: 1.62 }),
        level(5, { fireRatePerSecond: 1.05, damage: 4.6, projectileSpeed: 630, projectileRadius: 5.4, pierce: 3, trailLength: 30, impactRadius: 22, knockback: 30, muzzleFlashScale: 1.5, hitFlashScale: 1.75 })
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
        level(1, { fireRatePerSecond: 1.15, damage: 0.8, projectileSpeed: 585, projectileRadius: 2.75, collisionRadiusScale: 1.85, projectileCount: 2, spreadDegrees: 2.5, trailLength: 14, muzzleFlashScale: 0.65, hitFlashScale: 0.65 }),
        level(2, { fireRatePerSecond: 1.35, damage: 0.95, projectileSpeed: 625, projectileRadius: 2.85, collisionRadiusScale: 1.85, projectileCount: 2, spreadDegrees: 3, trailLength: 15, muzzleFlashScale: 0.7, hitFlashScale: 0.7 }),
        level(3, { fireRatePerSecond: 1.5, damage: 1, projectileSpeed: 660, projectileRadius: 2.95, collisionRadiusScale: 1.9, projectileCount: 3, spreadDegrees: 5, trailLength: 16, muzzleFlashScale: 0.78, hitFlashScale: 0.75 }),
        level(4, { fireRatePerSecond: 1.7, damage: 1.12, projectileSpeed: 700, projectileRadius: 3.05, collisionRadiusScale: 1.9, projectileCount: 3, spreadDegrees: 5.5, trailLength: 17, muzzleFlashScale: 0.84, hitFlashScale: 0.82 }),
        level(5, { fireRatePerSecond: 1.85, damage: 1.2, projectileSpeed: 735, projectileRadius: 3.1, collisionRadiusScale: 1.95, projectileCount: 4, spreadDegrees: 6.25, trailLength: 18, muzzleFlashScale: 0.92, hitFlashScale: 0.9 })
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
      this.require(gun.levels.length === 5, `${id} must define exactly five levels.`);
      for (const tuning of gun.levels) {
        this.require(tuning.fireRatePerSecond > 0, `${id} level ${tuning.level} fire rate must be positive.`);
        this.require(tuning.damage > 0 && tuning.projectileSpeed > 0 && tuning.projectileRadius > 0, `${id} level ${tuning.level} has invalid projectile power.`);
        this.require(tuning.collisionRadiusScale === void 0 || tuning.collisionRadiusScale >= 1, `${id} level ${tuning.level} collision radius scale cannot shrink collision.`);
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
      health: 24,
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

// projects/NeonSwarm/CombatDefinition/LightningFamily.ts
var level2 = (levelNumber, values) => ({
  level: levelNumber,
  ...values
});
var sharedVisual = {
  color: "cyan",
  secondaryColor: "#ffffff",
  jaggedness: 96,
  segments: 8,
  movement: 0.55,
  boltWidth: 0.1,
  haloWidth: 8,
  intensity: 3.07,
  glow: 6.2,
  durationMs: 529,
  branchSparks: 0.11,
  sparkVelocity: 150,
  sparkVelocitySpread: 0.55,
  sparkEasePower: 0.44,
  sparkDimPower: 0.6,
  sparkLength: 6,
  sparkWidth: 0.7,
  impactSparks: 26,
  impactSparkVelocity: 154,
  impactSparkRadius: 10
};
var LightningFamilyDefinition = class extends FamilyDefinition {
  familyId = "lightning";
  label = "Lightning";
  members = {
    chainSpark: {
      label: "Chain Spark",
      family: "lightning",
      rarity: "uncommon",
      targetingMode: "nearestForward",
      includeAdjacentLanes: true,
      visualIdentity: sharedVisual,
      levels: [
        level2(1, { cooldownSeconds: 1.95, damage: 1.25, chainRange: 150, maxJumps: 2, branchFanout: 1, maxDepth: 2, branchDecay: 0.72 }),
        level2(2, { cooldownSeconds: 1.7, damage: 1.38, chainRange: 170, maxJumps: 3, branchFanout: 1, maxDepth: 2, branchDecay: 0.72 }),
        level2(3, { cooldownSeconds: 1.5, damage: 1.5, chainRange: 190, maxJumps: 4, branchFanout: 1, maxDepth: 3, branchDecay: 0.7 }),
        level2(4, { cooldownSeconds: 1.34, damage: 1.64, chainRange: 212, maxJumps: 5, branchFanout: 1, maxDepth: 3, branchDecay: 0.7 }),
        level2(5, { cooldownSeconds: 1.18, damage: 1.8, chainRange: 236, maxJumps: 6, branchFanout: 1, maxDepth: 4, branchDecay: 0.68 })
      ],
      agentNotes: "Fast single-chain cleanup. Best against staggered enemies; weaker against isolated durable targets than focused guns."
    },
    forkCapacitor: {
      label: "Fork Capacitor",
      family: "lightning",
      rarity: "rare",
      targetingMode: "densestCluster",
      includeAdjacentLanes: true,
      visualIdentity: {
        ...sharedVisual,
        color: "violet",
        boltWidth: 2.1,
        branchSparks: 0.18,
        impactSparks: 34
      },
      levels: [
        level2(1, { cooldownSeconds: 2.55, damage: 1.8, chainRange: 138, maxJumps: 3, branchFanout: 2, maxDepth: 2, branchDecay: 0.58 }),
        level2(2, { cooldownSeconds: 2.35, damage: 1.95, chainRange: 152, maxJumps: 4, branchFanout: 2, maxDepth: 2, branchDecay: 0.58 }),
        level2(3, { cooldownSeconds: 2.18, damage: 2.1, chainRange: 168, maxJumps: 5, branchFanout: 3, maxDepth: 2, branchDecay: 0.56 }),
        level2(4, { cooldownSeconds: 2.02, damage: 2.28, chainRange: 184, maxJumps: 7, branchFanout: 3, maxDepth: 3, branchDecay: 0.54 }),
        level2(5, { cooldownSeconds: 1.86, damage: 2.45, chainRange: 204, maxJumps: 9, branchFanout: 4, maxDepth: 3, branchDecay: 0.52 })
      ],
      agentNotes: "Cluster discharge. The anchor hits hard, then shallow sibling branches spread through packed formations."
    }
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, item] of Object.entries(this.members)) {
      this.require(item.family === "lightning", `${id} must be in lightning family.`);
      this.require(neonPalette[item.visualIdentity.color] !== void 0, `${id} has unknown color.`);
      this.require(item.levels.length === 5, `${id} must define exactly five levels.`);
      for (const tuning of item.levels) {
        this.require(tuning.cooldownSeconds > 0, `${id} level ${tuning.level} cooldown must be positive.`);
        this.require(tuning.damage > 0, `${id} level ${tuning.level} damage must be positive.`);
        this.require(tuning.chainRange > 0, `${id} level ${tuning.level} chainRange must be positive.`);
        this.require(tuning.maxJumps >= 1 && tuning.branchFanout >= 1 && tuning.maxDepth >= 1, `${id} level ${tuning.level} branch counts must be positive.`);
        this.require(tuning.branchDecay > 0 && tuning.branchDecay <= 1, `${id} level ${tuning.level} branchDecay must be in (0, 1].`);
      }
    }
  }
};
var lightningFamily = new LightningFamilyDefinition();

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
  sword: "pickup.weapon.sword.",
  lightning: "pickup.weapon.lightning."
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
  "pickup.weapon.lightning.chainSpark": "L",
  "pickup.weapon.lightning.forkCapacitor": "F",
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
    ["pickup.weapon.sword.", swordFamily.members, "sword"],
    ["pickup.weapon.lightning.", lightningFamily.members, "lightning"]
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

// projects/NeonSwarm/CombatDefinition/tracks/TrackCatalog.ts
var trackCatalog = {
  "neon-nebulae-1": {
    id: "neon-nebulae-1",
    label: "First Glow",
    description: "A gun-forward Neon Nebulae opener with clear rebuild shelves and only a few shield safety nets.",
    sceneId: "neonHall",
    theme: "gunSchool",
    tier: 1
  },
  "neon-nebulae-2": {
    id: "neon-nebulae-2",
    label: "Drift Lesson",
    description: "A longer Neon Nebulae gun lesson that adds wing pressure, stronger firearm choices, and sparse shield relief.",
    sceneId: "neonHall",
    theme: "gunSchool",
    tier: 2
  },
  "neon-nebulae-3": {
    id: "neon-nebulae-3",
    label: "Nebula Gate",
    description: "The Neon Nebulae gun finale layers heavier firearms, tanks, and sustained lane reading without leaning on speed changes.",
    sceneId: "neonHall",
    theme: "gunSchool",
    tier: 3
  },
  "aurora-1": {
    id: "aurora-1",
    label: "Skybreak",
    description: "An Aurora opener focused on shields, short sword reads, and patient close-range cleanup.",
    sceneId: "aurora",
    theme: "guardBlades",
    tier: 1
  },
  "aurora-2": {
    id: "aurora-2",
    label: "Ribbon Storm",
    description: "Aurora pressure expands into alternating shield rebuilds, wider sword choices, and clustered close-range threats.",
    sceneId: "aurora",
    theme: "guardBlades",
    tier: 2
  },
  "aurora-3": {
    id: "aurora-3",
    label: "Magnetic Dawn",
    description: "The Aurora finale asks for deliberate shield timing and sword selection against long, readable threat waves.",
    sceneId: "aurora",
    theme: "guardBlades",
    tier: 3
  },
  "crystal-forge-1": {
    id: "crystal-forge-1",
    label: "Prism Ignition",
    description: "A Crystal Forge opener built around burst fire, glass decoys, and early heavy-threat rehearsal.",
    sceneId: "crystalForge",
    theme: "crystalSiege",
    tier: 1
  },
  "crystal-forge-2": {
    id: "crystal-forge-2",
    label: "Facet Run",
    description: "Crystal Forge density sharpens with heavier guns, sturdier shields, and tank breaks framed by glass decoys.",
    sceneId: "crystalForge",
    theme: "crystalSiege",
    tier: 2
  },
  "crystal-forge-3": {
    id: "crystal-forge-3",
    label: "Glass Hammer",
    description: "The Crystal Forge finale commits to heavy weapon payoffs, repeated tank lanes, and prismatic decoy pressure.",
    sceneId: "crystalForge",
    theme: "crystalSiege",
    tier: 3
  },
  "void-garden-1": {
    id: "void-garden-1",
    label: "Bloom Signal",
    description: "A Void Garden opener about growing the squad early and sustaining calm cross-lane bloom pressure.",
    sceneId: "voidGarden",
    theme: "swarmBloom",
    tier: 1
  },
  "void-garden-2": {
    id: "void-garden-2",
    label: "Root Lattice",
    description: "Void Garden adds denser squad growth windows, split weapon support, and slow-blooming paired pressure.",
    sceneId: "voidGarden",
    theme: "swarmBloom",
    tier: 2
  },
  "void-garden-3": {
    id: "void-garden-3",
    label: "Night Orchard",
    description: "The Void Garden finale leans into squad recovery, layered support pickups, and broad organic pressure.",
    sceneId: "voidGarden",
    theme: "swarmBloom",
    tier: 3
  },
  "solar-array-1": {
    id: "solar-array-1",
    label: "Panel Dawn",
    description: "A Solar Array opener with mirrored reads, split-lane weapon timing, and bright but measured pressure.",
    sceneId: "solarArray",
    theme: "mirrorArray",
    tier: 1
  },
  "solar-array-2": {
    id: "solar-array-2",
    label: "Heliostat Rush",
    description: "Solar Array pressure grows through mirrored walls, precision rebuilds, and alternating outer-lane surges.",
    sceneId: "solarArray",
    theme: "mirrorArray",
    tier: 2
  },
  "solar-array-3": {
    id: "solar-array-3",
    label: "Mirror Zenith",
    description: "The Solar Array finale mixes mirrored tank breaks, split-fire rebuilds, and long-form precision pressure.",
    sceneId: "solarArray",
    theme: "mirrorArray",
    tier: 3
  }
};
var trackFamilyCatalog = {
  neonNebulae: {
    id: "neonNebulae",
    label: "Neon Nebulae",
    description: "A learning arc about lanes, pickups, shields, and controlled pressure.",
    sceneId: "neonHall",
    accent: "#ff3bd5",
    trackIds: ["neon-nebulae-1", "neon-nebulae-2", "neon-nebulae-3"]
  },
  aurora: {
    id: "aurora",
    label: "Aurora",
    description: "Dense planetary assaults with brighter recovery windows and sharper threat waves.",
    sceneId: "aurora",
    accent: "#20eaff",
    trackIds: ["aurora-1", "aurora-2", "aurora-3"]
  },
  crystalForge: {
    id: "crystalForge",
    label: "Crystal Forge",
    description: "Prismatic factory lanes with sharp pressure, glass decoys, and heavy crystalline breaks.",
    sceneId: "crystalForge",
    accent: "#9b42ff",
    trackIds: ["crystal-forge-1", "crystal-forge-2", "crystal-forge-3"]
  },
  voidGarden: {
    id: "voidGarden",
    label: "Void Garden",
    description: "Bioluminescent night lanes with sparse blooms, decoys, and controlled recovery pockets.",
    sceneId: "voidGarden",
    accent: "#4b86ff",
    trackIds: ["void-garden-1", "void-garden-2", "void-garden-3"]
  },
  solarArray: {
    id: "solarArray",
    label: "Solar Array",
    description: "Bright orbital lanes with mirrored walls, fast outer surges, and decisive heavy tools.",
    sceneId: "solarArray",
    accent: "#ffb23a",
    trackIds: ["solar-array-1", "solar-array-2", "solar-array-3"]
  }
};
var trackFamiliesFromCatalog = Object.fromEntries(
  Object.entries(trackFamilyCatalog).map(([id, family]) => [
    id,
    {
      label: family.label,
      description: family.description,
      environment: { sceneId: family.sceneId },
      trackIds: family.trackIds
    }
  ])
);

// projects/NeonSwarm/CombatDefinition/tracks/TrackComposer.ts
var tierProfiles = {
  1: {
    targetRows: 112,
    enemyHp: 1,
    enemySpeed: 1,
    pressureThreat: { low: 18, medium: 30, high: 44, peak: 56 },
    pressureRows: { low: 18, medium: 26, high: 34, peak: 40 },
    rebuildRows: 8,
    restRows: 2,
    maxWallWidth: 4
  },
  2: {
    targetRows: 270,
    enemyHp: 1,
    enemySpeed: 1,
    pressureThreat: { low: 20, medium: 34, high: 50, peak: 66 },
    pressureRows: { low: 24, medium: 34, high: 44, peak: 52 },
    rebuildRows: 9,
    restRows: 3,
    maxWallWidth: 4
  },
  3: {
    targetRows: 430,
    enemyHp: 1,
    enemySpeed: 1,
    pressureThreat: { low: 34, medium: 56, high: 92, peak: 136 },
    pressureRows: { low: 30, medium: 42, high: 54, peak: 74 },
    rebuildRows: 8,
    restRows: 2,
    maxWallWidth: 5
  }
};
var familyRecipes = {
  gunSchool: {
    theme: "gunSchool",
    preferredWeapons: ["gun.pulsePistol", "gun.burstCarbine", "gun.needlerSmg", "gun.splitterRifle", "gun.heavyCannon", "lightning.chainSpark"],
    supportWeapons: ["shield.lightGuard", "shield.satelliteGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["lightning.chainSpark", "sword.arcBlade"],
    preferredEnemies: ["basic", "glassShield", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["centerAlternating", "outerAlternating", "laneLine", "wideSweep"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    upgradeSpacing: 2
  },
  guardBlades: {
    theme: "guardBlades",
    preferredWeapons: ["sword.arcBlade", "sword.cleaver", "shield.lightGuard", "shield.satelliteGuard", "lightning.chainSpark"],
    supportWeapons: ["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["sword.arcBlade", "sword.cleaver", "lightning.chainSpark"],
    preferredEnemies: ["basic", "glassShield", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["laneLine", "centerAlternating", "wideSweep", "mirroredWalls"],
    openingWeapons: ["sword.arcBlade", "shield.lightGuard"],
    upgradeSpacing: 3
  },
  crystalSiege: {
    theme: "crystalSiege",
    preferredWeapons: ["gun.pulsePistol", "gun.burstCarbine", "gun.splitterRifle", "gun.heavyCannon", "lightning.forkCapacitor", "sword.cleaver"],
    supportWeapons: ["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["sword.cleaver", "lightning.chainSpark"],
    preferredEnemies: ["glassShield", "basic", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["mirroredWalls", "tankBreak", "outerAlternating", "wideSweep"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    openingPickups: ["unitMultiplier.2x"],
    upgradeSpacing: 2
  },
  swarmBloom: {
    theme: "swarmBloom",
    preferredWeapons: ["gun.needlerSmg", "sword.arcBlade", "lightning.chainSpark", "gun.burstCarbine", "shield.satelliteGuard"],
    supportWeapons: ["shield.lightGuard", "sword.cleaver", "lightning.forkCapacitor", "shield.hexGuard"],
    closeRangeWeapons: ["sword.arcBlade", "lightning.chainSpark", "sword.cleaver"],
    preferredEnemies: ["basic", "winger", "glassShield"],
    bossEnemies: ["tank"],
    pressureStyles: ["centerAlternating", "wideSweep", "outerAlternating", "laneLine"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    openingPickups: ["unitMultiplier.2x"],
    upgradeSpacing: 1
  },
  mirrorArray: {
    theme: "mirrorArray",
    preferredWeapons: ["gun.pulsePistol", "gun.burstCarbine", "gun.splitterRifle", "lightning.chainSpark", "gun.heavyCannon", "lightning.forkCapacitor"],
    supportWeapons: ["shield.lightGuard", "sword.cleaver", "shield.hexGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["lightning.chainSpark", "sword.cleaver"],
    preferredEnemies: ["basic", "glassShield", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["mirroredWalls", "outerAlternating", "centerAlternating", "tankBreak"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    upgradeSpacing: 2
  }
};
var defaultJourney = {
  1: [
    { kind: "intro", pickupRoles: ["primary", "support"] },
    { kind: "lesson", pressure: "low" },
    { kind: "rebuild", pickupRoles: ["primary", "upgrade"] },
    { kind: "pressure", pressure: "medium" },
    { kind: "rest" },
    { kind: "challenge", pressure: "high", pickupRoles: ["support"] },
    { kind: "finale", pressure: "high" }
  ],
  2: [
    { kind: "intro", pickupRoles: ["primary", "support", "upgrade"] },
    { kind: "ramp", pressure: "low", pickupRoles: ["primary"], styles: ["centerAlternating", "laneLine"] },
    { kind: "lesson", pressure: "medium", styles: ["centerAlternating", "outerAlternating"] },
    { kind: "rebuild", pickupRoles: ["support"] },
    { kind: "challenge", pressure: "medium", styles: ["laneLine", "centerAlternating", "outerAlternating"] },
    { kind: "rebuild", pickupRoles: ["primary", "upgrade"] },
    { kind: "pressure", pressure: "high" },
    { kind: "challenge", pressure: "peak" },
    { kind: "finale", pressure: "peak" }
  ],
  3: [
    { kind: "intro", pickupRoles: ["primary", "support", "closeRange", "upgrade"] },
    { kind: "ramp", pressure: "low", pickupRoles: ["primary"], styles: ["centerAlternating", "laneLine", "outerAlternating"] },
    { kind: "challenge", pressure: "medium", styles: ["centerAlternating", "outerAlternating", "laneLine"] },
    { kind: "rebuild", pickupRoles: ["support", "upgrade"] },
    { kind: "pressure", pressure: "high" },
    { kind: "rebuild", pickupRoles: ["primary", "closeRange", "upgrade"] },
    { kind: "challenge", pressure: "peak" },
    { kind: "rebuild", pickupRoles: ["support", "upgrade"] },
    { kind: "pressure", pressure: "peak", styles: ["wideSweep", "mirroredWalls", "outerAlternating"] },
    { kind: "rebuild", pickupRoles: ["primary", "support"] },
    { kind: "finale", pressure: "peak", styles: ["wideSweep", "mirroredWalls", "wideSweep", "outerAlternating"] }
  ]
};
var trackRecipes = Object.fromEntries(
  Object.entries(trackCatalog).map(([trackId, entry]) => [
    trackId,
    {
      goals: [entry.description],
      seed: `${trackId}:${entry.tier}`,
      journey: defaultJourney[entry.tier]
    }
  ])
);
var allColumns = [c.left.outer, c.left.nearOuter, c.left.mid, c.left.nearInner, c.left.inner, c.right.inner, c.right.nearInner, c.right.mid, c.right.nearOuter, c.right.outer];
var centerColumns = [c.left.mid, c.right.mid];
var outerColumns = [c.left.outer, c.right.outer, c.left.nearOuter, c.right.nearOuter];
var leftColumns = [c.left.outer, c.left.nearOuter, c.left.mid, c.left.nearInner, c.left.inner];
var rightColumns = [c.right.inner, c.right.nearInner, c.right.mid, c.right.nearOuter, c.right.outer];
function createRng(seed) {
  let value = 2166136261;
  for (let index = 0; index < seed.length; index++) {
    value ^= seed.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }
  value >>>= 0;
  return {
    seedValue: value,
    next() {
      value = Math.imul(value + 1831565813, 1);
      let mixed = value;
      mixed = Math.imul(mixed ^ mixed >>> 15, mixed | 1);
      mixed ^= mixed + Math.imul(mixed ^ mixed >>> 7, mixed | 61);
      return ((mixed ^ mixed >>> 14) >>> 0) / 4294967296;
    },
    pick(items) {
      if (items.length === 0) throw new Error("Cannot pick from an empty collection.");
      return items[Math.floor(this.next() * items.length)];
    }
  };
}
function canonicalWeaponId(id) {
  if (id.startsWith("pickup.weapon.")) return id;
  const [family, member] = id.split(".");
  return `pickup.weapon.${family}.${member}`;
}
function minimumTierForWeapon(id) {
  const canonical = canonicalWeaponId(id);
  if (canonical.startsWith("pickup.weapon.gun.")) {
    const member = gunFamily.members[canonical.slice("pickup.weapon.gun.".length)];
    return member.rarity === "starter" ? 1 : member.rarity === "common" ? 2 : 3;
  }
  if (canonical.startsWith("pickup.weapon.sword.")) {
    const member = swordFamily.members[canonical.slice("pickup.weapon.sword.".length)];
    return member.rarity === "starter" ? 1 : member.rarity === "common" ? 2 : 3;
  }
  if (canonical.startsWith("pickup.weapon.shield.")) {
    const member = shieldFamily.members[canonical.slice("pickup.weapon.shield.".length)];
    return member.rarity === "starter" ? 1 : member.rarity === "common" ? 2 : 3;
  }
  if (canonical.startsWith("pickup.weapon.lightning.")) {
    const member = lightningFamily.members[canonical.slice("pickup.weapon.lightning.".length)];
    return member.rarity === "uncommon" ? 3 : 3;
  }
  return 1;
}
function minimumTierForEnemy(id) {
  const canonical = id === "basic" || id === "enemy.basic" ? "basicOrb" : id.replace(/^enemy\./, "");
  if (canonical === "tank") return 3;
  if (canonical === "winger") return 2;
  return 1;
}
function weaponPower(id) {
  const canonical = canonicalWeaponId(id);
  if (canonical.startsWith("pickup.weapon.gun.")) {
    const member = gunFamily.members[canonical.slice("pickup.weapon.gun.".length)];
    const level3 = member.levels[0];
    return level3.fireRatePerSecond * level3.damage * level3.projectileCount * level3.burstCount * (1 + level3.pierce * 0.35);
  }
  if (canonical.startsWith("pickup.weapon.sword.")) {
    const member = swordFamily.members[canonical.slice("pickup.weapon.sword.".length)];
    return member.damage * member.maxTargets / member.cooldownSeconds * (member.rowReach ? 1.35 : 1);
  }
  if (canonical.startsWith("pickup.weapon.shield.")) {
    const member = shieldFamily.members[canonical.slice("pickup.weapon.shield.".length)];
    return member.maxCharges * 0.8 + member.radius / 30;
  }
  if (canonical.startsWith("pickup.weapon.lightning.")) {
    const member = lightningFamily.members[canonical.slice("pickup.weapon.lightning.".length)];
    const level3 = member.levels[0];
    return level3.damage * (level3.maxJumps + level3.branchFanout) / level3.cooldownSeconds;
  }
  return 1;
}
function enemyThreat(id) {
  const memberId = id === "basic" || id === "enemy.basic" ? "basicOrb" : id.replace(/^enemy\./, "");
  const enemy = orbFamily.members[memberId];
  return enemy.health * 2 + enemy.speed / 58 + enemy.columnSpan * 1.4 + enemy.contactDamage * 1.6 + enemy.impactResistance;
}
function enemyColumnSpan(id) {
  const memberId = id === "basic" || id === "enemy.basic" ? "basicOrb" : id.replace(/^enemy\./, "");
  return orbFamily.members[memberId].columnSpan;
}
function pickupPower(id) {
  if (id === "unitMultiplier.2x" || id === "pickup.unitMultiplier.2x") {
    return multiplierFamily.members.squadPlusOne.squadAdded * 4;
  }
  return weaponPower(id);
}
function createState() {
  return {
    cursor: 1,
    playerPower: 1,
    cycle: 0,
    selectedWeapons: /* @__PURE__ */ new Set(),
    selectedPickups: /* @__PURE__ */ new Set(),
    selectedEnemies: /* @__PURE__ */ new Set(),
    segments: [],
    warnings: [],
    bossesPlaced: 0,
    lastBossTrackRow: Number.NEGATIVE_INFINITY
  };
}
function rowsForBeat(beat, profile) {
  if (beat.rows) return beat.rows;
  if (beat.kind === "intro") return profile.rebuildRows;
  if (beat.kind === "rebuild") return profile.rebuildRows;
  if (beat.kind === "rest") return profile.restRows;
  if (beat.kind === "ramp") return profile.pressureRows.medium;
  return profile.pressureRows[beat.pressure ?? "medium"];
}
function selectWeapon(recipe, role, tier, state, rng) {
  if (role === "upgrade") return null;
  const rawPool = role === "support" ? recipe.supportWeapons : role === "closeRange" ? recipe.closeRangeWeapons : recipe.preferredWeapons;
  const rolePool = role === "closeRange" ? rawPool : role === "primary" ? rawPool.filter((weapon) => !canonicalWeaponId(weapon).startsWith("pickup.weapon.shield.")) : rawPool;
  const pool = rolePool.length > 0 ? rolePool : rawPool;
  const tierPool = pool.filter((weapon) => minimumTierForWeapon(weapon) <= tier);
  const availablePool = tierPool.length > 0 ? tierPool : pool.filter((weapon) => minimumTierForWeapon(weapon) === 1);
  if (availablePool.length === 0) {
    state.warnings.push(`No ${role} weapon was available for tier ${tier} in ${recipe.theme}.`);
    return null;
  }
  const offset = Math.min(availablePool.length - 1, state.cycle);
  const candidates = availablePool.slice(offset).concat(availablePool.slice(0, offset));
  return rng.pick(candidates);
}
function placePickups(section, recipe, beat, tier, state, rng) {
  const roles = beat.pickupRoles ?? [];
  const columns = [c.left.mid, c.right.mid, c.left.nearOuter, c.right.nearOuter, c.left.nearInner, c.right.nearInner];
  const weapons = [];
  const pickups = [];
  let row = 0;
  for (const role of roles) {
    if (role === "upgrade") {
      const authoredUpgrade = beat.pickupRoles?.includes("upgrade") ?? false;
      if (authoredUpgrade || state.cycle % recipe.upgradeSpacing === 0) {
        section.at(row).pickup("unitMultiplier.2x", { column: columns[(row + 1) % columns.length] });
        state.playerPower += pickupPower("unitMultiplier.2x");
        state.selectedPickups.add("pickup.unitMultiplier.2x");
        pickups.push("pickup.unitMultiplier.2x");
      }
    } else {
      const weapon = selectWeapon(recipe, role, tier, state, rng);
      if (weapon) {
        section.at(row).weapon(weapon, { column: columns[row % columns.length] });
        state.playerPower += weaponPower(weapon);
        state.selectedWeapons.add(canonicalWeaponId(weapon));
        weapons.push(canonicalWeaponId(weapon));
      }
    }
    row += 2;
  }
  return { weapons, pickups };
}
function enemyForThreat(recipe, tier, target) {
  const allowedEnemies = recipe.preferredEnemies.filter((id) => minimumTierForEnemy(id) <= tier);
  const pool = allowedEnemies.length > 0 ? allowedEnemies : recipe.preferredEnemies;
  const candidates = pool.filter((id) => enemyThreat(id) <= target + 4);
  return candidates[candidates.length - 1] ?? pool[0];
}
function enemyForPressure(recipe, tier, pressure, row, target) {
  if (tier === 2 && (pressure === "low" || pressure === "medium")) {
    const hasGlass = recipe.preferredEnemies.includes("glassShield");
    const hasWinger = recipe.preferredEnemies.includes("winger");
    if (hasWinger && row % 7 === 0) return "winger";
    if (hasGlass) return "glassShield";
  }
  return enemyForThreat(recipe, tier, target);
}
function bossForPressure(recipe, tier, state) {
  const availableBosses = recipe.bossEnemies.filter((id) => minimumTierForEnemy(id) <= tier + 1);
  if (availableBosses.length === 0) {
    state.warnings.push(`No boss enemy is available for ${recipe.theme} at tier ${tier}.`);
    return null;
  }
  return availableBosses[state.bossesPlaced % availableBosses.length];
}
function canPlaceBoss(tier, state, trackRow) {
  const maxBosses = tier === 2 ? 2 : tier >= 3 ? 4 : 0;
  const minSpacing = tier === 2 ? 34 : 58;
  return state.bossesPlaced < maxBosses && trackRow - state.lastBossTrackRow >= minSpacing;
}
function columnsForStyle(style, rng, maxWallWidth) {
  if (style === "centerAlternating") return centerColumns;
  if (style === "outerAlternating") return outerColumns;
  if (style === "wideSweep") return rng.next() > 0.5 ? leftColumns.slice(0, maxWallWidth) : rightColumns.slice(0, maxWallWidth);
  if (style === "mirroredWalls") return [c.left.nearOuter, c.right.nearOuter, c.left.mid, c.right.mid].slice(0, Math.max(2, Math.min(4, maxWallWidth)));
  if (style === "tankBreak") return rng.next() > 0.5 ? [c.left.nearOuter] : [c.right.inner];
  return rng.next() > 0.5 ? [c.left.nearOuter] : [c.right.nearOuter];
}
function columnsThatFit(enemy, columns) {
  const span = enemyColumnSpan(enemy);
  return columns.filter((column) => column % 5 + span <= 5);
}
function nonOverlappingColumns(enemy, columns) {
  const span = enemyColumnSpan(enemy);
  const occupied = /* @__PURE__ */ new Set();
  const selected = [];
  for (const column of columns) {
    const cells = Array.from({ length: span }, (_, offset) => column + offset);
    if (cells.some((cell) => occupied.has(cell))) continue;
    selected.push(column);
    for (const cell of cells) occupied.add(cell);
  }
  return selected;
}
function placePressure(section, recipe, beat, tier, profile, state, rng, startRow = 0) {
  const pressure = beat.pressure ?? "medium";
  const targetThreat = profile.pressureThreat[pressure] + state.playerPower * (pressure === "peak" ? 0.45 : 0.25);
  const baseStyles = beat.styles ?? recipe.pressureStyles;
  const styles = tier === 1 && pressure === "high" ? [...baseStyles, "wideSweep", "wideSweep", "mirroredWalls"] : tier >= 3 && pressure === "peak" ? [...baseStyles, "wideSweep", "wideSweep", "wideSweep", "mirroredWalls", "mirroredWalls"] : baseStyles;
  let row = startRow;
  let emittedThreat = 0;
  const enemies = /* @__PURE__ */ new Set();
  const beatRows = rowsForBeat(beat, profile);
  while (row < beatRows - 1) {
    const style = rng.pick(styles);
    const columns = columnsForStyle(style, rng, profile.maxWallWidth);
    const remainingThreat = Math.max(0, targetThreat - emittedThreat);
    const trackRow = state.cursor + row;
    const tierTwoFinaleBossRows = [
      startRow + Math.floor((beatRows - startRow) * 0.3),
      startRow + Math.floor((beatRows - startRow) * 0.72)
    ];
    const tierTwoFinaleBoss = tier === 2 && beat.kind === "finale" && state.bossesPlaced < tierTwoFinaleBossRows.length && row >= tierTwoFinaleBossRows[state.bossesPlaced] && canPlaceBoss(tier, state, trackRow);
    const tierThreeBoss = tier >= 3 && canPlaceBoss(tier, state, trackRow) && emittedThreat < targetThreat * 1.15 && (style === "tankBreak" || pressure === "peak" && remainingThreat > 18 && row > 12);
    const shouldUseHeavy = tierTwoFinaleBoss || tierThreeBoss;
    const bossEnemy = shouldUseHeavy ? bossForPressure(recipe, tier, state) : null;
    const enemy = shouldUseHeavy ? bossEnemy ?? enemyForPressure(recipe, tier, pressure, row, Math.max(4, remainingThreat / Math.max(1, columns.length))) : enemyForPressure(recipe, tier, pressure, row, Math.max(4, remainingThreat / Math.max(1, columns.length)));
    if (tierTwoFinaleBoss && bossEnemy) {
      const column = state.bossesPlaced % 2 === 0 ? c.left.nearOuter : c.right.inner;
      section.at(row).enemy(bossEnemy, { column });
      emittedThreat += enemyThreat(bossEnemy);
      state.bossesPlaced++;
      state.lastBossTrackRow = trackRow;
      enemies.add(bossEnemy === "basic" ? "enemy.basic" : `enemy.${bossEnemy}`);
      row += 12;
      continue;
    }
    if (tierThreeBoss && bossEnemy) {
      const column = state.bossesPlaced % 2 === 0 ? c.left.nearOuter : c.right.inner;
      section.at(row).enemy(bossEnemy, { column });
      emittedThreat += enemyThreat(bossEnemy);
      state.bossesPlaced++;
      state.lastBossTrackRow = trackRow;
      enemies.add(bossEnemy === "basic" ? "enemy.basic" : `enemy.${bossEnemy}`);
      row += 14;
      continue;
    }
    const fittingColumns = columnsThatFit(enemy, columns);
    const safeEnemy = fittingColumns.length > 0 ? enemy : "basic";
    const safeColumns = nonOverlappingColumns(safeEnemy, fittingColumns.length > 0 ? fittingColumns : columnsThatFit("basic", columns));
    const threat = enemyThreat(safeEnemy) * safeColumns.length;
    const breathRows = tier === 1 && pressure !== "high" && pressure !== "peak" ? 1 : 0;
    if (style === "laneLine" && safeColumns.length === 1) {
      const count = Math.min(8, Math.max(1, beatRows - row - 1));
      section.at(row).line(safeEnemy, { column: safeColumns[0], count });
      row += count + breathRows;
      emittedThreat += enemyThreat(safeEnemy) * count;
    } else if (style === "mirroredWalls" || style === "wideSweep" || tier === 1 && pressure === "high" && safeColumns.length > 1) {
      section.at(row).wall(safeEnemy, { columns: safeColumns });
      row += pressure === "low" ? 3 : 2;
      emittedThreat += threat;
    } else {
      const count = Math.min(14, Math.max(1, beatRows - row - 1));
      section.at(row).alternating(safeEnemy, { columns: safeColumns, count });
      row += count + breathRows;
      emittedThreat += enemyThreat(safeEnemy) * count;
    }
    enemies.add(safeEnemy === "basic" ? "enemy.basic" : `enemy.${safeEnemy}`);
  }
  for (const enemy of enemies) state.selectedEnemies.add(enemy);
  return { threat: emittedThreat, enemies: [...enemies] };
}
function compileBeat(builder, recipe, beat, tier, profile, state, rng) {
  const rows = rowsForBeat(beat, profile);
  const segmentStartPower = state.playerPower;
  let placedWeapons = [];
  let placedPickups = [];
  let emittedThreat = 0;
  let selectedEnemies = [];
  if (beat.kind === "rest") {
    builder.respite(rows);
  } else {
    const sectionKind = beat.kind === "intro" || beat.kind === "rebuild" ? "rebuild" : "pressure";
    builder.section(sectionKind, rows, (section) => {
      const pickups = placePickups(section, recipe, beat, tier, state, rng);
      placedWeapons = pickups.weapons;
      placedPickups = pickups.pickups;
      if (beat.kind !== "intro" && beat.kind !== "rebuild") {
        const pressureStartRow = Math.max(0, (beat.pickupRoles?.length ?? 0) * 2 - 1);
        const pressure = placePressure(section, recipe, beat, tier, profile, state, rng, pressureStartRow);
        emittedThreat = pressure.threat;
        selectedEnemies = pressure.enemies;
      } else if (beat.kind === "rebuild" && rows > 4) {
        const enemy = recipe.preferredEnemies[0];
        section.at(rows - 2).enemy(enemy, { column: rng.pick(allColumns) });
        emittedThreat = enemyThreat(enemy);
        selectedEnemies = [enemy === "basic" ? "enemy.basic" : `enemy.${enemy}`];
        state.selectedEnemies.add(selectedEnemies[0]);
      }
    });
  }
  state.cursor += rows;
  state.cycle++;
  state.segments.push({
    kind: beat.kind,
    rows,
    pressure: beat.pressure ?? "none",
    threatEstimate: Number(emittedThreat.toFixed(2)),
    playerPowerEstimate: Number(segmentStartPower.toFixed(2)),
    selectedWeapons: placedWeapons,
    selectedPickups: placedPickups,
    selectedEnemies
  });
}
function composeInternal(options) {
  const profile = tierProfiles[options.tier];
  const recipe = familyRecipes[options.theme];
  const trackId = options.trackId ?? "neon-nebulae-1";
  const trackRecipe = options.trackId ? trackRecipes[options.trackId] : { goals: [options.description], seed: options.seed ?? `${options.theme}:${options.tier}`, journey: defaultJourney[options.tier] };
  const seed = options.seed ?? trackRecipe.seed;
  const rng = createRng(seed);
  const state = createState();
  const builder = trackBuilder.create({
    label: options.label,
    description: options.description,
    environment: { sceneId: options.sceneId },
    balance: { enemyHp: profile.enemyHp, enemySpeed: profile.enemySpeed }
  });
  compileBeat(builder, recipe, {
    kind: "intro",
    rows: profile.rebuildRows,
    pickupRoles: ["primary", "support", ...options.tier >= 3 ? ["closeRange"] : [], ...recipe.openingPickups?.length ? ["upgrade"] : []]
  }, options.tier, profile, state, rng);
  for (const beat of trackRecipe.journey.filter((item) => item.kind !== "intro")) {
    if (state.cursor >= profile.targetRows - profile.pressureRows.high) break;
    compileBeat(builder, recipe, beat, options.tier, profile, state, rng);
  }
  while (state.cursor < profile.targetRows - profile.pressureRows.high) {
    compileBeat(builder, recipe, { kind: state.cycle % 3 === 0 ? "rebuild" : "pressure", pressure: state.cycle % 2 === 0 ? "high" : "medium", pickupRoles: state.cycle % 3 === 0 ? ["primary", "upgrade"] : void 0 }, options.tier, profile, state, rng);
  }
  compileBeat(builder, recipe, { kind: "finale", pressure: options.tier === 1 ? "high" : "peak" }, options.tier, profile, state, rng);
  const track = builder.build();
  const generatedRows = track.definition.layout.split(/\r?\n/).filter((row) => row.trim()).length;
  const weaponPowerEntries = [...state.selectedWeapons].map((id) => [id, Number(weaponPower(id).toFixed(2))]);
  const enemyThreatEntries = [...state.selectedEnemies].map((id) => [id, Number(enemyThreat(id).toFixed(2))]);
  return {
    track,
    debug: {
      seed,
      seedValue: rng.seedValue,
      familyId: options.theme,
      trackId,
      tier: options.tier,
      generatedRows,
      selectedWeapons: [...state.selectedWeapons],
      selectedPickups: [...state.selectedPickups],
      selectedEnemies: [...state.selectedEnemies],
      weaponPower: Object.fromEntries(weaponPowerEntries),
      enemyThreat: Object.fromEntries(enemyThreatEntries),
      segments: state.segments,
      warnings: state.warnings
    }
  };
}
function composeCatalogTrack(trackId) {
  const entry = trackCatalog[trackId];
  return composeInternal({
    trackId,
    label: entry.label,
    description: entry.description,
    sceneId: entry.sceneId,
    theme: entry.theme,
    tier: entry.tier
  }).track;
}
function describeComposedCatalogTrack(trackId) {
  const entry = trackCatalog[trackId];
  return composeInternal({
    trackId,
    label: entry.label,
    description: entry.description,
    sceneId: entry.sceneId,
    theme: entry.theme,
    tier: entry.tier
  }).debug;
}

// projects/NeonSwarm/CombatDefinition/tracks/index.ts
var tracks = Object.fromEntries(
  Object.keys(trackCatalog).map((trackId) => [trackId, composeCatalogTrack(trackId)])
);
var trackFamilies = trackFamiliesFromCatalog;
var neonNebulaeTrack1 = tracks["neon-nebulae-1"];
var neonNebulaeTrack2 = tracks["neon-nebulae-2"];
var neonNebulaeTrack3 = tracks["neon-nebulae-3"];
var auroraTrack1 = tracks["aurora-1"];
var auroraTrack2 = tracks["aurora-2"];
var auroraTrack3 = tracks["aurora-3"];
var crystalForgeTrack1 = tracks["crystal-forge-1"];
var crystalForgeTrack2 = tracks["crystal-forge-2"];
var crystalForgeTrack3 = tracks["crystal-forge-3"];
var voidGardenTrack1 = tracks["void-garden-1"];
var voidGardenTrack2 = tracks["void-garden-2"];
var voidGardenTrack3 = tracks["void-garden-3"];
var solarArrayTrack1 = tracks["solar-array-1"];
var solarArrayTrack2 = tracks["solar-array-2"];
var solarArrayTrack3 = tracks["solar-array-3"];

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

// projects/NeonSwarm/test-pages/track-generator/track-generator.ts
var developer = window.JustTheGamesPlease?.urlOptions?.isEnabled("dev") ?? false;
document.querySelector("#generator-container").hidden = !developer;
document.querySelector("#dev-required").hidden = developer;
var trackSelect = document.querySelector("#track-select");
var copyBtn = document.querySelector("#copy-btn");
var preview = document.querySelector("#prompt-preview");
for (const [trackId, track] of Object.entries(trackCatalog)) {
  const option = document.createElement("option");
  option.value = trackId;
  option.textContent = `${track.label} (${trackId}, tier ${track.tier})`;
  trackSelect.append(option);
}
function selectedTrackId() {
  return trackSelect.value;
}
function renderSummary() {
  const summary = describeComposedCatalogTrack(selectedTrackId());
  preview.textContent = JSON.stringify(summary, null, 2);
}
async function copySummary() {
  await navigator.clipboard.writeText(preview.textContent);
  const text = copyBtn.querySelector(".btn-text");
  text.textContent = "Copied";
  window.setTimeout(() => {
    text.textContent = "Copy JSON";
  }, 1400);
}
trackSelect.addEventListener("change", renderSummary);
copyBtn.addEventListener("click", () => {
  copySummary().catch((error) => {
    console.error("Failed to copy composer summary.", error);
  });
});
renderSummary();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90b2tlbnMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2dlb21ldHJpYy1zaGFwZXMudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL2xhbmUtcnVubmVyLXNjZW5lcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9GYW1pbHlEZWZpbml0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0d1bkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9PcmJGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTGlnaHRuaW5nRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL011bHRpcGxpZXJGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU2hpZWxkRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1N3b3JkRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrRGVmaW5pdGlvbi50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0J1aWxkZXIudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vdHJhY2tzL1RyYWNrQ2F0YWxvZy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2tDb21wb3Nlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3Rlc3QtcGFnZXMvdHJhY2stZ2VuZXJhdG9yL3RyYWNrLWdlbmVyYXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGludGVyZmFjZSBDb21iYXRUdW5pbmcge1xuICAvKipcbiAgICogTXVsdGlwbGllcyB0aGUgd2hvbGUgY29tYmF0IHNpbXVsYXRpb24gcGFjZSB3aGlsZSBwcmVzZXJ2aW5nIHJlbGF0aXZlXG4gICAqIHRpbWluZyBiZXR3ZWVuIG1vdmVtZW50LCBjb29sZG93bnMsIHByb2plY3RpbGVzLCBhbmQgYXV0aG9yZWQgdHJhY2sgYmVhdHMuXG4gICAqL1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbWJhdFR1bmluZyA9IHtcbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiAxLjUsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBDb21iYXRUdW5pbmc7XG5cbmlmICghTnVtYmVyLmlzRmluaXRlKGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIpIHx8IGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIgPD0gMCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb21iYXRUdW5pbmc6IGdsb2JhbFNwZWVkTXVsdGlwbGllciBtdXN0IGJlIGEgcG9zaXRpdmUgZmluaXRlIG51bWJlci5cIik7XG59XG4iLCAiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtYXJjLWthdGFuYVwiLCBcIlN3b3JkIEFyYyBLYXRhbmFcIiwgW1stLjE2LC0xXSwgWy4xNiwtMV0sIFsuMjIsLjI4XSwgWy40OCwuNjJdLCBbLjE4LC41Ml0sIFsuMSwxXSwgWy0uMSwxXSwgWy0uMTgsLjUyXSwgWy0uNDgsLjYyXSwgWy0uMjIsLjI4XV0sIFwicGl0Y2hcIiwgW1tbLS4wNTUsLS43Ml0sIFsuMDU1LC0uNzJdLCBbLjA1NSwuMThdLCBbLS4wNTUsLjE4XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWNsZWF2ZXItd2lkZVwiLCBcIlN3b3JkIENsZWF2ZXIgV2lkZVwiLCBbWy0uMjgsLTFdLCBbLjI4LC0xXSwgWy40NCwtLjc2XSwgWy4zNCwuMzRdLCBbLjcyLC41OF0sIFsuMjIsLjU1XSwgWy4xNiwxXSwgWy0uMTYsMV0sIFstLjIyLC41NV0sIFstLjcyLC41OF0sIFstLjM0LC4zNF0sIFstLjQ0LC0uNzZdXSwgXCJyb2xsXCIsIFtbWy0uMSwtLjY4XSwgWy4xLC0uNjhdLCBbLjA4LC4xOF0sIFstLjA4LC4xOF1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1uZWVkbGUtc2FicmVcIiwgXCJTd29yZCBOZWVkbGUgU2FicmVcIiwgW1swLC0xXSwgWy4wOCwtLjgyXSwgWy4xMSwuNV0sIFsuMzIsLjcyXSwgWy4wOCwuNjRdLCBbLjA1LDFdLCBbLS4wNSwxXSwgWy0uMDgsLjY0XSwgWy0uMzIsLjcyXSwgWy0uMTEsLjVdLCBbLS4wOCwtLjgyXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1ndWFyZGVkLWJsYWRlXCIsIFwiU3dvcmQgR3VhcmRlZCBCbGFkZVwiLCBbWy0uMTIsLTFdLCBbLjEyLC0xXSwgWy4xNiwuMzZdLCBbLjYyLC4zNl0sIFsuNjIsLjU0XSwgWy4xNCwuNTZdLCBbLjEsMV0sIFstLjEsMV0sIFstLjE0LC41Nl0sIFstLjYyLC41NF0sIFstLjYyLC4zNl0sIFstLjE2LC4zNl1dLCBcInlhd1wiLCBbW1stLjA0NSwtLjcyXSwgWy4wNDUsLS43Ml0sIFsuMDQ1LC4yMl0sIFstLjA0NSwuMjJdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtcHJpc20tZ3JlYXRibGFkZVwiLCBcIlN3b3JkIFByaXNtIEdyZWF0YmxhZGVcIiwgW1swLC0xXSwgWy4zNCwtLjc0XSwgWy4zLC4yOF0sIFsuNTYsLjUyXSwgWy4yLC40OF0sIFsuMTIsMV0sIFstLjEyLDFdLCBbLS4yLC40OF0sIFstLjU2LC41Ml0sIFstLjMsLjI4XSwgWy0uMzQsLS43NF1dLCBcInJvbGxcIiwgW1tbLS4wOCwtLjQ4XSwgWy4wOCwtLjQ4XSwgWy4wOCwuMTZdLCBbLS4wOCwuMTZdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25Ub3BEb3duU2NlbmUgfSBmcm9tIFwiLi90b3AtZG93bi1zY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclNjZW5lSWRzID0gW1wibmVvbkhhbGxcIiwgXCJhdXJvcmFcIiwgXCJjcnlzdGFsRm9yZ2VcIiwgXCJ2b2lkR2FyZGVuXCIsIFwic29sYXJBcnJheVwiXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQgPSB0eXBlb2YgbGFuZVJ1bm5lclNjZW5lSWRzW251bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyB7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdGltZU1zOiBudW1iZXI7XG59XG5cbmNvbnN0IHNjZW5lTmFtZXM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgc3RyaW5nPiA9IHtcbiAgbmVvbkhhbGw6IFwiTmVvbiBIYWxsXCIsXG4gIGF1cm9yYTogXCJBdXJvcmFcIixcbiAgY3J5c3RhbEZvcmdlOiBcIkNyeXN0YWwgRm9yZ2VcIixcbiAgdm9pZEdhcmRlbjogXCJWb2lkIEdhcmRlblwiLFxuICBzb2xhckFycmF5OiBcIlNvbGFyIEFycmF5XCIsXG59O1xuXG5jb25zdCBoYWxsQm90dG9tV2lkdGggPSAwLjkyO1xuY29uc3QgaGFsbEZsb29yQ29sb3IgPSBcIiMwNTEwMWZcIjtcbmNvbnN0IGhhbGxEZWVwQmx1ZSA9IFwiIzEyMzU2YVwiO1xuY29uc3QgaGFsbE11dGVkQmx1ZSA9IFwiIzFiNGM4ZFwiO1xuY29uc3QgaGFsbE11dGVkQ3lhbiA9IFwiIzJhYzRkY1wiO1xuY29uc3QgaGFsbE11dGVkVmlvbGV0ID0gXCIjNDUzMDc5XCI7XG5jb25zdCBoYWxsQWNjZW50UGluayA9IFwiI2E3MzU3ZVwiO1xuY29uc3QgaGFsbEVuZXJneVNwZWVkID0gMC4wMDE3O1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZVBhbGV0dGUge1xuICBmbG9vcjogc3RyaW5nO1xuICBib3VuZGFyeTogc3RyaW5nO1xuICBsYW5lOiBzdHJpbmc7XG4gIGNlbnRlckxhbmU6IHN0cmluZztcbiAgYWNjZW50OiBzdHJpbmc7XG4gIGxhbmVIaWdobGlnaHQ6IHN0cmluZztcbn1cblxuY29uc3Qgc3RhbmRhcmRMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IGhhbGxGbG9vckNvbG9yLFxuICBib3VuZGFyeTogaGFsbERlZXBCbHVlLFxuICBsYW5lOiBoYWxsTXV0ZWRCbHVlLFxuICBjZW50ZXJMYW5lOiBoYWxsTXV0ZWRWaW9sZXQsXG4gIGFjY2VudDogaGFsbEFjY2VudFBpbmssXG4gIGxhbmVIaWdobGlnaHQ6IGhhbGxNdXRlZEN5YW4sXG59O1xuXG5jb25zdCBhdXJvcmFMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzAzMTEwZlwiLFxuICBib3VuZGFyeTogXCIjMTc4YzkyXCIsXG4gIGxhbmU6IFwiIzE3ZDdiM1wiLFxuICBjZW50ZXJMYW5lOiBcIiM4ZjU2ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmYzdcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjYjlmZjZhXCIsXG59O1xuXG5jb25zdCBjcnlzdGFsRm9yZ2VMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzA3MTAxOFwiLFxuICBib3VuZGFyeTogXCIjMjZkN2ZmXCIsXG4gIGxhbmU6IFwiIzYzZjFmZlwiLFxuICBjZW50ZXJMYW5lOiBcIiNmZjVmZDhcIixcbiAgYWNjZW50OiBcIiNmZmI4NGRcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZjRmYmZmXCIsXG59O1xuXG5jb25zdCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwODA4MThcIixcbiAgYm91bmRhcnk6IFwiIzZmNTNmZlwiLFxuICBsYW5lOiBcIiMzNWU4YjZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY0ZmM3XCIsXG4gIGFjY2VudDogXCIjYjlmZjZhXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiIzliZDdmZlwiLFxufTtcblxuY29uc3Qgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMTEwYzA3XCIsXG4gIGJvdW5kYXJ5OiBcIiNmZjllMzhcIixcbiAgbGFuZTogXCIjZmZkNDVhXCIsXG4gIGNlbnRlckxhbmU6IFwiIzI2ZDdmZlwiLFxuICBhY2NlbnQ6IFwiI2ZmNGY2NlwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNmZmY2YjhcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNjZW5lTmFtZXNbc2NlbmVJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmVSdW5uZXJTY2VuZUlkKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBMYW5lUnVubmVyU2NlbmVJZCB7XG4gIHJldHVybiAobGFuZVJ1bm5lclNjZW5lSWRzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5lUnVubmVyU2NlbmUob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICByZXR1cm4gc2NlbmVDcmVhdG9yc1tvcHRpb25zLnNjZW5lSWRdKG9wdGlvbnMpO1xufVxuXG5jb25zdCBzY2VuZUNyZWF0b3JzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKSA9PiBOZW9uVG9wRG93blNjZW5lPiA9IHtcbiAgbmVvbkhhbGw6IGNyZWF0ZU5lb25IYWxsLFxuICBhdXJvcmE6IGNyZWF0ZUF1cm9yYSxcbiAgY3J5c3RhbEZvcmdlOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCBjcnlzdGFsRm9yZ2VMYW5lUnVubmVyUGFsZXR0ZSwgYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyksXG4gIHZvaWRHYXJkZW46IG9wdGlvbnMgPT4gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnMsIHZvaWRHYXJkZW5MYW5lUnVubmVyUGFsZXR0ZSwgYWRkVm9pZEdhcmRlbkRldGFpbHMpLFxuICBzb2xhckFycmF5OiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCBzb2xhckFycmF5TGFuZVJ1bm5lclBhbGV0dGUsIGFkZFNvbGFyQXJyYXlEZXRhaWxzKSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgc3RhbmRhcmRMYW5lUnVubmVyUGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkSGFsbExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRmxvb3JHbHlwaHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbFNpZGVQYW5lbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxFbmVyZ3lUcmFjZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBdXJvcmEob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBhdXJvcmFMYW5lUnVubmVyUGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUdyb3VuZEZsYXJlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhSG9yaXpvblZlaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKFxuICBvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zLFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICBhZGREZXRhaWxzOiAoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKSA9PiB2b2lkLFxuKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGRUaGVtZWRMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IC1oZWlnaHQgfTtcbiAgY29uc3QgYm90dG9tWSA9IGhlaWdodCAqIC45ODU7XG4gIGNvbnN0IGJvdHRvbUhhbGYgPSB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCAqIC41O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2cCxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICBsZWZ0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShcbiAgaXRlbXM6IE5lb25QcmltaXRpdmVbXSxcbiAgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sXG4gIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsXG4gIHRpbWVNczogbnVtYmVyLFxuKTogdm9pZCB7XG4gIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtcywgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSk7XG4gIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQyLCB3aWR0aDogd2lkdGggKiBoYWxsQm90dG9tV2lkdGgsIGhlaWdodDogaGVpZ2h0ICogMS4wOCwgY29sb3I6IHBhbGV0dGUuZmxvb3IsIHNlY29uZGFyeUNvbG9yOiBcIiMwMjA1MGRcIiwgZ2xvdzogLjA1LCBpbnRlbnNpdHk6IC4yMywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBwYWxldHRlLmJvdW5kYXJ5LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjc4LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogcGFsZXR0ZS5hY2NlbnQsIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmNlbnRlckxhbmUsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5ib3VuZGFyeSwgLjQ4LCA2LjUpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5sYW5lO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBjb2xvciwgbGFuZSA9PT0gMiA/IC4yOCA6IC4yLCAzLjQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGxhbmUgPT09IDIgPyAuMjYgOiAuMTgsIC45KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDE1OyByb3crKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgcm93UHVsc2UgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA0ODAgKyByb3cgKiAuNzgpICogLjQyO1xuICAgIGNvbnN0IHN1cmdlID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZU1zIC8gODIwIC0gcm93ICogLjcyKSk7XG4gICAgY29uc3QgY29sb3IgPSByb3cgJSA0ID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcm93ICUgNCA9PT0gMSA/IHBhbGV0dGUubGFuZSA6IHJvdyAlIDQgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmFjY2VudDtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUxhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA5OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTU1MCArIHB1bHNlSW5kZXggLyA5KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS40OCk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zMiAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiMxN2Q3YjNcIiwgb3BhY2l0eSwgMSArIHQgKiAxLjcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUdyb3VuZEZsYXJlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjA4ICsgKChpbmRleCAqIDI5KSAlIDEwMCkgLyAxMTI7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjYyKSk7XG4gICAgY29uc3QgbGFuZVNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMjIgOiAuNzg7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIGxhbmVTaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjEgKyB0aW1lTXMgLyAxODAwKSAqIC4wNCk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC41NSArIE1hdGguc2luKHRpbWVNcyAvIDQzMCArIGluZGV4ICogMS4zKSAqIC4zNTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMDkgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDE4ICsgdCAqIC4wMzUpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogaW5kZXggJSAzID09PSAxID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC4zOCxcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDYpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBpbmRleCAlIDQgPT09IDAgPyBcImRpYW1vbmRcIiA6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKHRpbWVNcyAvIDEyMDAgKyBpbmRleCkgKiAuMTgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhSG9yaXpvblZlaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4IC0gMykgLyA2O1xuICAgIGNvbnN0IHdhdmUgPSBNYXRoLnNpbih0aW1lTXMgLyAxMTAwICsgaW5kZXggKiAuOSk7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiB2cC54ICsgdSAqIHdpZHRoICogLjM2LFxuICAgICAgeTogdnAueSArIGhlaWdodCAqICguMDc1ICsgaW5kZXggKiAuMDA2KSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDM1ICsgaW5kZXggKiAuMDA0KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4xMiArIE1hdGguYWJzKHdhdmUpICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcIiMxN2Q3YjNcIiA6IFwiIzhmNTZmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4wNDUgKyBNYXRoLmFicyh3YXZlKSAqIC4wMjUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogdSAqIC4yOCArIHdhdmUgKiAuMDgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVkTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDg7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxNzAwICsgcHVsc2VJbmRleCAvIDgpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgcHVsc2VJbmRleCAlIDIgPT09IDAgPyBwYWxldHRlLmxhbmVIaWdobGlnaHQgOiBwYWxldHRlLmFjY2VudCwgLjI4ICogKDEgLSB0cmF2ZWwpLCAxLjEgKyB0ICogMS42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDcnlzdGFsRm9yZ2VEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxNjsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE3LCAxLjU1KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjE0IDogLjg2O1xuICAgIGNvbnN0IGVkZ2UgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCBzaWRlKTtcbiAgICBjb25zdCBnbGludCA9IC41NSArIE1hdGguc2luKHRpbWVNcyAvIDUyMCArIGluZGV4ICogMS4xNykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBlZGdlLngsXG4gICAgICB5OiBlZGdlLnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxMiArIHQgKiAuMDEyKSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMjUgKyB0ICogLjA2KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNmZmI4NGRcIiA6IFwiIzYzZjFmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgNCA9PT0gMCA/IFwiI2ZmNWZkOFwiIDogXCIjZjRmYmZmXCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA1NSkgKiBnbGludCxcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICAgIHJvdGF0aW9uOiAoc2lkZSA8IC41ID8gLS4yMiA6IC4yMikgKyBNYXRoLnNpbih0aW1lTXMgLyAxNDAwICsgaW5kZXgpICogLjA4LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMywgeTogdnAueSArIGhlaWdodCAqIC4wNDUgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIFwiI2ZmYjg0ZFwiLCAuMjIsIDEuMyk7XG59XG5cbmZ1bmN0aW9uIGFkZFZvaWRHYXJkZW5EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyguMDggKyAoKGluZGV4ICogMjMpICUgMTAwKSAvIDExMiwgMS42NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA8IDIgPyAuMTggOiAuODI7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSArIE1hdGguc2luKHRpbWVNcyAvIDE5MDAgKyBpbmRleCkgKiAuMDM1KTtcbiAgICBjb25zdCBibG9vbSA9IC41ICsgTWF0aC5zaW4odGltZU1zIC8gNzYwICsgaW5kZXggKiAuOCkgKiAuMzI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMDYgKyB0ICogLjAxNCksXG4gICAgICBoZWlnaHQ6IHdpZHRoICogKC4wMDYgKyB0ICogLjAxNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiMzNWU4YjZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcIiM2ZjUzZmZcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjQyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgdCAqIC4wNSkgKiBibG9vbSxcbiAgICAgIHNoYXBlOiBpbmRleCAlIDIgPT09IDAgPyBcImRpYW1vbmRcIiA6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKHRpbWVNcyAvIDEyMDAgKyBpbmRleCkgKiAuNCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTgsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDcgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTgsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDcgfSwgXCIjMzVlOGI2XCIsIC4xOCwgMS4xKTtcbn1cblxuZnVuY3Rpb24gYWRkU29sYXJBcnJheURldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQsIHZwIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTksIDEuNDgpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMSA6IC45O1xuICAgIGNvbnN0IG1vdW50ID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgcHVsc2UgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyA2MTAgKyBpbmRleCAqIDEuMDUpICogLjM7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBtb3VudC54LFxuICAgICAgeTogbW91bnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDE4ICsgdCAqIC4wMzUpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxMiArIHQgKiAuMDI0KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNmZmQ0NWFcIiA6IFwiI2ZmOWUzOFwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgNCA9PT0gMCA/IFwiIzI2ZDdmZlwiIDogXCIjZmY0ZjY2XCIsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA1NSkgKiBwdWxzZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBzaWRlIDwgLjUgPyAtLjM4IDogLjM4LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMSwgeTogdnAueSArIGhlaWdodCAqIC4wMzUgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIFwiI2ZmZjZiOFwiLCAuMjQsIDEuNCk7XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgY29sbGlzaW9uUmFkaXVzU2NhbGU/OiBudW1iZXI7XG4gIHByb2plY3RpbGVDb3VudDogbnVtYmVyO1xuICBidXJzdENvdW50OiBudW1iZXI7XG4gIGJ1cnN0SW50ZXJ2YWxNczogbnVtYmVyO1xuICBzcHJlYWREZWdyZWVzOiBudW1iZXI7XG4gIHBpZXJjZTogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXJFdmVyeU50aFNob3Q6IG51bWJlcjtcbiAgaW1wYWN0UmFkaXVzPzogbnVtYmVyO1xuICBrbm9ja2JhY2s6IG51bWJlcjtcbiAgbXV6emxlRmxhc2hTY2FsZTogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVmlzdWFsSWRlbnRpdHkge1xuICBzaWxob3VldHRlOiBzdHJpbmc7XG4gIG1vdGlvbkxhbmd1YWdlOiBzdHJpbmc7XG4gIHByb2plY3RpbGVTaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBwcm9qZWN0aWxlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHRyYWlsQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHJvamVjdGlsZUFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIG11enpsZUVmZmVjdDogTXV6emxlRWZmZWN0O1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgbXV6emxlRHVyYXRpb25NczogbnVtYmVyO1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIGhvcml6b250YWxKaXR0ZXI6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICB1bmxvY2tQaGFzZTogXCJzdGFydFwiIHwgXCJmaXJzdEJ1aWxkXCIgfCBcInByZXNzdXJlXCI7XG4gIHNob3RQYXR0ZXJuOiBTaG90UGF0dGVybjtcbiAgcHJvamVjdGlsZUJlaGF2aW9yOiBQcm9qZWN0aWxlQmVoYXZpb3I7XG4gIHZpc3VhbElkZW50aXR5OiBHdW5WaXN1YWxJZGVudGl0eTtcbiAgbGV2ZWxzOiByZWFkb25seSBHdW5MZXZlbFtdO1xufVxuXG5jb25zdCBsZXZlbCA9IChcbiAgbGV2ZWxOdW1iZXI6IG51bWJlcixcbiAgdmFsdWVzOiBPbWl0PEd1bkxldmVsLCBcImxldmVsXCIgfCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCI+ICZcbiAgICBQYXJ0aWFsPFBpY2s8R3VuTGV2ZWwsIFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIiB8IFwiaW1wYWN0UmFkaXVzXCI+Pixcbik6IEd1bkxldmVsID0+ICh7XG4gIGxldmVsOiBsZXZlbE51bWJlcixcbiAgcHJvamVjdGlsZUNvdW50OiAxLFxuICBidXJzdENvdW50OiAxLFxuICBidXJzdEludGVydmFsTXM6IDAsXG4gIHNwcmVhZERlZ3JlZXM6IDAsXG4gIHBpZXJjZTogMCxcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiAwLFxuICBrbm9ja2JhY2s6IDAsXG4gIC4uLnZhbHVlcyxcbn0pO1xuXG5leHBvcnQgY2xhc3MgR3VuRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwiZ3VuXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJHdW5cIjtcbiAgcmVhZG9ubHkgaW1wbGVtZW50YXRpb24gPSB7XG4gICAgYXV0b0ZpcmVzOiB0cnVlLFxuICAgIHRhcmdldGluZzogXCJsYW5lRm9yd2FyZFwiLFxuICAgIHByb2plY3RpbGVNb2RlbDogXCJraW5lbWF0aWNcIixcbiAgICBjb2xsaXNpb25Nb2RlbDogXCJjaXJjbGVWc0VuZW15XCIsXG4gICAgYWxsb3dlZFNob3RQYXR0ZXJuczogW1wic2luZ2xlXCIsIFwicmFwaWRTaW5nbGVcIiwgXCJidXJzdFwiLCBcImhlYXZ5U2luZ2xlXCIsIFwicGFpcmVkU3ByZWFkXCJdIHNhdGlzZmllcyBTaG90UGF0dGVybltdLFxuICAgIGFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzOiBbXCJzdHJhaWdodFwiLCBcInBpZXJjaW5nU3RyYWlnaHRcIl0gc2F0aXNmaWVzIFByb2plY3RpbGVCZWhhdmlvcltdLFxuICB9IGFzIGNvbnN0O1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgcHVsc2VQaXN0b2w6IHtcbiAgICAgIGxhYmVsOiBcIlB1bHNlIFBpc3RvbFwiLCByYXJpdHk6IFwic3RhcnRlclwiLCB1bmxvY2tQaGFzZTogXCJzdGFydFwiLCBzaG90UGF0dGVybjogXCJzaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInRpbnlCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY2xlYW5TaW5nbGVTaG90XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJjeWFuXCIsIHRyYWlsQ29sb3I6IFwiZGVlcEJsdWVcIiwgY29yZUNvbG9yOiBcImN5YW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMi44LCB0cmFpbFdpZHRoU2NhbGU6IDAuNjUsIHZpc3VhbEludGVuc2l0eTogMC45LCBtdXp6bGVFZmZlY3Q6IFwiY3Jpc3BTdGFyXCIsIGltcGFjdEVmZmVjdDogXCJwaW5TcGFya1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA3MiwgaW1wYWN0RHVyYXRpb25NczogMTA1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NTQwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjc1LGRhbWFnZToxLjE1LHByb2plY3RpbGVTcGVlZDo1ODAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouOH0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoyLjE1LGRhbWFnZToxLjM1LHByb2plY3RpbGVTcGVlZDo2MjAscHJvamVjdGlsZVJhZGl1czozLjI1LHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6Ljc1LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi40NSxkYW1hZ2U6MS41LHByb2plY3RpbGVTcGVlZDo2NTAscHJvamVjdGlsZVJhZGl1czozLjM1LHRyYWlsTGVuZ3RoOjE5LG11enpsZUZsYXNoU2NhbGU6LjgsaGl0Rmxhc2hTY2FsZTouOTV9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi43NSxkYW1hZ2U6MS42NSxwcm9qZWN0aWxlU3BlZWQ6NjgwLHByb2plY3RpbGVSYWRpdXM6My41LHRyYWlsTGVuZ3RoOjIwLG11enpsZUZsYXNoU2NhbGU6Ljg1LGhpdEZsYXNoU2NhbGU6MX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6MTAuNzUsZGFtYWdlOi41OSxwcm9qZWN0aWxlU3BlZWQ6ODE1LHByb2plY3RpbGVSYWRpdXM6Mi4yLHNwcmVhZERlZ3JlZXM6Mi4yNSx0cmFpbExlbmd0aDoxMyx0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi41LGhpdEZsYXNoU2NhbGU6LjZ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MTIuMjUsZGFtYWdlOi42NCxwcm9qZWN0aWxlU3BlZWQ6ODUwLHByb2plY3RpbGVSYWRpdXM6Mi4yNSxzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCx0cmFjZXJFdmVyeU50aFNob3Q6MyxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1cnN0Q2FyYmluZToge1xuICAgICAgbGFiZWw6IFwiQnVyc3QgQ2FyYmluZVwiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwiYnVyc3RcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNob3J0VHJhY2VyQnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImdyb3VwZWRWb2xsZXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdvbGRcIiwgdHJhaWxDb2xvcjogXCJvcmFuZ2VcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMi4yLCB0cmFpbFdpZHRoU2NhbGU6IDAuOCwgdmlzdWFsSW50ZW5zaXR5OiAxLjA1LCBtdXp6bGVFZmZlY3Q6IFwiZ3JvdXBlZFB1bHNlXCIsIGltcGFjdEVmZmVjdDogXCJidXJzdENyb3NzXCIsIG11enpsZUR1cmF0aW9uTXM6IDg2LCBpbXBhY3REdXJhdGlvbk1zOiAxMjAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouOTUsZGFtYWdlOi43NSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6Mi43NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjcyLHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDgsZGFtYWdlOi44NSxwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6Mi44NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjY0LHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjYsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOSxwcm9qZWN0aWxlU3BlZWQ6NzI1LHByb2plY3RpbGVSYWRpdXM6MyxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU4LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDoxLjI4LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo3NjAscHJvamVjdGlsZVJhZGl1czozLjA1LGJ1cnN0Q291bnQ6NCxidXJzdEludGVydmFsTXM6NTQsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouODJ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zOCxkYW1hZ2U6MS4wOCxwcm9qZWN0aWxlU3BlZWQ6Nzk1LHByb2plY3RpbGVSYWRpdXM6My4xLGJ1cnN0Q291bnQ6NSxidXJzdEludGVydmFsTXM6NTAsc3ByZWFkRGVncmVlczoxLjE1LHRyYWlsTGVuZ3RoOjE5LG11enpsZUZsYXNoU2NhbGU6Ljc4LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDouOTgsZGFtYWdlOjQuMSxwcm9qZWN0aWxlU3BlZWQ6NjAwLHByb2plY3RpbGVSYWRpdXM6NS4yLHBpZXJjZToyLHRyYWlsTGVuZ3RoOjI4LGltcGFjdFJhZGl1czoyMCxrbm9ja2JhY2s6MjYsbXV6emxlRmxhc2hTY2FsZToxLjQsaGl0Rmxhc2hTY2FsZToxLjYyfSksXG4gICAgICAgIGxldmVsKDUse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDUsZGFtYWdlOjQuNixwcm9qZWN0aWxlU3BlZWQ6NjMwLHByb2plY3RpbGVSYWRpdXM6NS40LHBpZXJjZTozLHRyYWlsTGVuZ3RoOjMwLGltcGFjdFJhZGl1czoyMixrbm9ja2JhY2s6MzAsbXV6emxlRmxhc2hTY2FsZToxLjUsaGl0Rmxhc2hTY2FsZToxLjc1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc3BsaXR0ZXJSaWZsZToge1xuICAgICAgbGFiZWw6IFwiU3BsaXR0ZXIgUmlmbGVcIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcInBhaXJlZFNwcmVhZFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwicGFpcmVkQm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjdXJyZW50TGFuZUZvcmtcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNwbGl0Qm9sdFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwidmlvbGV0XCIsIHRyYWlsQ29sb3I6IFwicGlua1wiLCBjb3JlQ29sb3I6IFwidmlvbGV0XCIsIHByb2plY3RpbGVBc3BlY3Q6IDMuNCwgdHJhaWxXaWR0aFNjYWxlOiAwLjU1LCB2aXN1YWxJbnRlbnNpdHk6IDEsIG11enpsZUVmZmVjdDogXCJ0d2luUHJvbmdzXCIsIGltcGFjdEVmZmVjdDogXCJzcGxpdFJpcHBsZVwiLCBtdXp6bGVEdXJhdGlvbk1zOiA5NSwgaW1wYWN0RHVyYXRpb25NczogMTQ1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjgscHJvamVjdGlsZVNwZWVkOjU4NSxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZTouOTUscHJvamVjdGlsZVNwZWVkOjYyNSxwcm9qZWN0aWxlUmFkaXVzOjIuODUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NjYwLHByb2plY3RpbGVSYWRpdXM6Mi45NSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjkscHJvamVjdGlsZUNvdW50OjMsc3ByZWFkRGVncmVlczo1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6Ljc4LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDQse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNyxkYW1hZ2U6MS4xMixwcm9qZWN0aWxlU3BlZWQ6NzAwLHByb2plY3RpbGVSYWRpdXM6My4wNSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjkscHJvamVjdGlsZUNvdW50OjMsc3ByZWFkRGVncmVlczo1LjUsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouODQsaGl0Rmxhc2hTY2FsZTouODJ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS44NSxkYW1hZ2U6MS4yLHByb2plY3RpbGVTcGVlZDo3MzUscHJvamVjdGlsZVJhZGl1czozLjEsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS45NSxwcm9qZWN0aWxlQ291bnQ6NCxzcHJlYWREZWdyZWVzOjYuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouOTIsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGd1bl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFNob3RQYXR0ZXJucy5pbmNsdWRlcyhndW4uc2hvdFBhdHRlcm4pLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHNob3QgcGF0dGVybi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzLmluY2x1ZGVzKGd1bi5wcm9qZWN0aWxlQmVoYXZpb3IpLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHByb2plY3RpbGUgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHByb2plY3RpbGUgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biB0cmFpbCBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyA+IDAgJiYgZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZWZmZWN0IGR1cmF0aW9ucyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgZGVmaW5lIGxldmVscy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA9PT0gNSwgYCR7aWR9IG11c3QgZGVmaW5lIGV4YWN0bHkgZml2ZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuY29sbGlzaW9uUmFkaXVzU2NhbGUgPT09IHVuZGVmaW5lZCB8fCB0dW5pbmcuY29sbGlzaW9uUmFkaXVzU2NhbGUgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBjb2xsaXNpb24gcmFkaXVzIHNjYWxlIGNhbm5vdCBzaHJpbmsgY29sbGlzaW9uLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJ1cnN0Q291bnQgPj0gMSAmJiB0dW5pbmcucHJvamVjdGlsZUNvdW50ID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgY291bnRzLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ3VuRmFtaWx5ID0gbmV3IEd1bkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIEd1bklkID0ga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgRW5lbXlTcGF3bkVudHJhbmNlID0gXCJzY2F0dGVyXCIgfCBcImZhZGVcIjtcbmV4cG9ydCB0eXBlIEVuZW15RGVhdGhWaXN1YWwgPSBcImNsb3VkXCIgfCBcIm5vbmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcmJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbHVtblNwYW46IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogbnVtYmVyO1xuICBzY29yZTogbnVtYmVyO1xuICBiYXNlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHJpbUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFkb3dDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhcGVJZDogc3RyaW5nO1xuICBnbG93OiBudW1iZXI7XG4gIHN1cmZhY2VUZXh0dXJlOiBudW1iZXI7XG4gIHJpbUludGVuc2l0eTogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuICBoaXRGbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgZGVhdGhGbGFzaFNjYWxlOiBudW1iZXI7XG4gIHNoYXBlWm9vbTogbnVtYmVyO1xuICBpbXBhY3RSZXNpc3RhbmNlOiBudW1iZXI7XG4gIGV4cGxvc2lvbk1hZ25pdHVkZTogbnVtYmVyO1xuICBzcGF3bkVudHJhbmNlOiBFbmVteVNwYXduRW50cmFuY2U7XG4gIHNwYXduU291bmQ6IHN0cmluZyB8IG51bGw7XG4gIGRlYXRoU291bmQ6IHN0cmluZztcbiAgZGVhdGhWaXN1YWw6IEVuZW15RGVhdGhWaXN1YWw7XG59XG5cbmV4cG9ydCBjbGFzcyBPcmJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJvcmJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIk9yYiBFbmVteVwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGJhc2ljT3JiOiB7XG4gICAgICBsYWJlbDogXCJCYXNpYyBPcmJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDEwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcImh1bnRlci1leWVcIixcbiAgICAgIGdsb3c6IDAuODIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogMC4yOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS4yNSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAwLjcyLFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA5MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS44LFxuICAgICAgc2hhcGVab29tOiAzLjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIGdsYXNzU2hpZWxkOiB7XG4gICAgICBsYWJlbDogXCJHbGFzcyBTaGllbGRcIixcbiAgICAgIGhlYWx0aDogLjEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDUuNixcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAuMSxcbiAgICAgIHNjb3JlOiAzLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRyaWNrLWdhdGVcIixcbiAgICAgIGdsb3c6IC42MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTIsXG4gICAgICByaW1JbnRlbnNpdHk6IDAuOSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuNDUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDcwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjEsXG4gICAgICBzaGFwZVpvb206IDMuMDUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAuNjUsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC4yNSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwiZmFkZVwiLFxuICAgICAgc3Bhd25Tb3VuZDogbnVsbCxcbiAgICAgIGRlYXRoU291bmQ6IFwiR2xhc3NTaGllbGRTaGF0dGVyXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJub25lXCIsXG4gICAgfSxcbiAgICB3aW5nZXI6IHtcbiAgICAgIGxhYmVsOiBcIldpbmdlclwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDc2LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTQsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiZWxpdGUtd2luZ3NcIixcbiAgICAgIGdsb3c6IC44NixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMjIsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMixcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuNjYsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDg1LFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjc1LFxuICAgICAgc2hhcGVab29tOiAzLjI1LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkVuZW15U3Bhd25cIixcbiAgICAgIGRlYXRoU291bmQ6IFwiRW5lbXlEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgICB0YW5rOiB7XG4gICAgICBsYWJlbDogXCJUYW5rXCIsXG4gICAgICBoZWFsdGg6IDI0LFxuICAgICAgc3BlZWQ6IDQ0LFxuICAgICAgcmFkaXVzOiAxNixcbiAgICAgIGNvbHVtblNwYW46IDMsXG4gICAgICBjb250YWN0RGFtYWdlOiAyLFxuICAgICAgc2NvcmU6IDgwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRhbmstYnVua2VyXCIsXG4gICAgICBnbG93OiAxLjA1LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS40NSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuODUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMi43LFxuICAgICAgc2hhcGVab29tOiA0LjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAyLjEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC45LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkJvc3NcIixcbiAgICAgIGRlYXRoU291bmQ6IFwiQm9zc0Rlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKG9yYi5jb2x1bW5TcGFuKSAmJiBvcmIuY29sdW1uU3BhbiA+PSAxLCBgJHtpZH0gY29sdW1uU3BhbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIExpZ2h0bmluZ1RhcmdldGluZ01vZGUgPSBcIm5lYXJlc3RGb3J3YXJkXCIgfCBcImRlbnNlc3RDbHVzdGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRuaW5nTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIGNoYWluUmFuZ2U6IG51bWJlcjtcbiAgbWF4SnVtcHM6IG51bWJlcjtcbiAgYnJhbmNoRmFub3V0OiBudW1iZXI7XG4gIG1heERlcHRoOiBudW1iZXI7XG4gIGJyYW5jaERlY2F5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRuaW5nVmlzdWFsSWRlbnRpdHkge1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2Vjb25kYXJ5Q29sb3I6IHN0cmluZztcbiAgamFnZ2VkbmVzczogbnVtYmVyO1xuICBzZWdtZW50czogbnVtYmVyO1xuICBtb3ZlbWVudDogbnVtYmVyO1xuICBib2x0V2lkdGg6IG51bWJlcjtcbiAgaGFsb1dpZHRoOiBudW1iZXI7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgYnJhbmNoU3BhcmtzOiBudW1iZXI7XG4gIHNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgc3BhcmtWZWxvY2l0eVNwcmVhZDogbnVtYmVyO1xuICBzcGFya0Vhc2VQb3dlcjogbnVtYmVyO1xuICBzcGFya0RpbVBvd2VyOiBudW1iZXI7XG4gIHNwYXJrTGVuZ3RoOiBudW1iZXI7XG4gIHNwYXJrV2lkdGg6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtzOiBudW1iZXI7XG4gIGltcGFjdFNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtSYWRpdXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaWdodG5pbmdNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwibGlnaHRuaW5nXCI7XG4gIHJhcml0eTogXCJ1bmNvbW1vblwiIHwgXCJyYXJlXCI7XG4gIHRhcmdldGluZ01vZGU6IExpZ2h0bmluZ1RhcmdldGluZ01vZGU7XG4gIGluY2x1ZGVBZGphY2VudExhbmVzOiBib29sZWFuO1xuICB2aXN1YWxJZGVudGl0eTogTGlnaHRuaW5nVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgTGlnaHRuaW5nTGV2ZWxbXTtcbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuY29uc3QgbGV2ZWwgPSAobGV2ZWxOdW1iZXI6IG51bWJlciwgdmFsdWVzOiBPbWl0PExpZ2h0bmluZ0xldmVsLCBcImxldmVsXCI+KTogTGlnaHRuaW5nTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICAuLi52YWx1ZXMsXG59KTtcblxuY29uc3Qgc2hhcmVkVmlzdWFsID0ge1xuICBjb2xvcjogXCJjeWFuXCIsXG4gIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgamFnZ2VkbmVzczogOTYsXG4gIHNlZ21lbnRzOiA4LFxuICBtb3ZlbWVudDogLjU1LFxuICBib2x0V2lkdGg6IC4xLFxuICBoYWxvV2lkdGg6IDgsXG4gIGludGVuc2l0eTogMy4wNyxcbiAgZ2xvdzogNi4yLFxuICBkdXJhdGlvbk1zOiA1MjksXG4gIGJyYW5jaFNwYXJrczogLjExLFxuICBzcGFya1ZlbG9jaXR5OiAxNTAsXG4gIHNwYXJrVmVsb2NpdHlTcHJlYWQ6IC41NSxcbiAgc3BhcmtFYXNlUG93ZXI6IC40NCxcbiAgc3BhcmtEaW1Qb3dlcjogLjYsXG4gIHNwYXJrTGVuZ3RoOiA2LFxuICBzcGFya1dpZHRoOiAuNyxcbiAgaW1wYWN0U3BhcmtzOiAyNixcbiAgaW1wYWN0U3BhcmtWZWxvY2l0eTogMTU0LFxuICBpbXBhY3RTcGFya1JhZGl1czogMTAsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBMaWdodG5pbmdWaXN1YWxJZGVudGl0eTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0bmluZ0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIExpZ2h0bmluZ01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImxpZ2h0bmluZ1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiTGlnaHRuaW5nXCI7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBjaGFpblNwYXJrOiB7XG4gICAgICBsYWJlbDogXCJDaGFpbiBTcGFya1wiLFxuICAgICAgZmFtaWx5OiBcImxpZ2h0bmluZ1wiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RGb3J3YXJkXCIsXG4gICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogdHJ1ZSxcbiAgICAgIHZpc3VhbElkZW50aXR5OiBzaGFyZWRWaXN1YWwsXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSwgeyBjb29sZG93blNlY29uZHM6IDEuOTUsIGRhbWFnZTogMS4yNSwgY2hhaW5SYW5nZTogMTUwLCBtYXhKdW1wczogMiwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogMiwgYnJhbmNoRGVjYXk6IC43MiB9KSxcbiAgICAgICAgbGV2ZWwoMiwgeyBjb29sZG93blNlY29uZHM6IDEuNywgZGFtYWdlOiAxLjM4LCBjaGFpblJhbmdlOiAxNzAsIG1heEp1bXBzOiAzLCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjcyIH0pLFxuICAgICAgICBsZXZlbCgzLCB7IGNvb2xkb3duU2Vjb25kczogMS41LCBkYW1hZ2U6IDEuNSwgY2hhaW5SYW5nZTogMTkwLCBtYXhKdW1wczogNCwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogMywgYnJhbmNoRGVjYXk6IC43IH0pLFxuICAgICAgICBsZXZlbCg0LCB7IGNvb2xkb3duU2Vjb25kczogMS4zNCwgZGFtYWdlOiAxLjY0LCBjaGFpblJhbmdlOiAyMTIsIG1heEp1bXBzOiA1LCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAzLCBicmFuY2hEZWNheTogLjcgfSksXG4gICAgICAgIGxldmVsKDUsIHsgY29vbGRvd25TZWNvbmRzOiAxLjE4LCBkYW1hZ2U6IDEuOCwgY2hhaW5SYW5nZTogMjM2LCBtYXhKdW1wczogNiwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogNCwgYnJhbmNoRGVjYXk6IC42OCB9KSxcbiAgICAgIF0sXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3Qgc2luZ2xlLWNoYWluIGNsZWFudXAuIEJlc3QgYWdhaW5zdCBzdGFnZ2VyZWQgZW5lbWllczsgd2Vha2VyIGFnYWluc3QgaXNvbGF0ZWQgZHVyYWJsZSB0YXJnZXRzIHRoYW4gZm9jdXNlZCBndW5zLlwiLFxuICAgIH0sXG4gICAgZm9ya0NhcGFjaXRvcjoge1xuICAgICAgbGFiZWw6IFwiRm9yayBDYXBhY2l0b3JcIixcbiAgICAgIGZhbWlseTogXCJsaWdodG5pbmdcIixcbiAgICAgIHJhcml0eTogXCJyYXJlXCIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImRlbnNlc3RDbHVzdGVyXCIsXG4gICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogdHJ1ZSxcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7XG4gICAgICAgIC4uLnNoYXJlZFZpc3VhbCxcbiAgICAgICAgY29sb3I6IFwidmlvbGV0XCIsXG4gICAgICAgIGJvbHRXaWR0aDogMi4xLFxuICAgICAgICBicmFuY2hTcGFya3M6IC4xOCxcbiAgICAgICAgaW1wYWN0U3BhcmtzOiAzNCxcbiAgICAgIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSwgeyBjb29sZG93blNlY29uZHM6IDIuNTUsIGRhbWFnZTogMS44LCBjaGFpblJhbmdlOiAxMzgsIG1heEp1bXBzOiAzLCBicmFuY2hGYW5vdXQ6IDIsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjU4IH0pLFxuICAgICAgICBsZXZlbCgyLCB7IGNvb2xkb3duU2Vjb25kczogMi4zNSwgZGFtYWdlOiAxLjk1LCBjaGFpblJhbmdlOiAxNTIsIG1heEp1bXBzOiA0LCBicmFuY2hGYW5vdXQ6IDIsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjU4IH0pLFxuICAgICAgICBsZXZlbCgzLCB7IGNvb2xkb3duU2Vjb25kczogMi4xOCwgZGFtYWdlOiAyLjEsIGNoYWluUmFuZ2U6IDE2OCwgbWF4SnVtcHM6IDUsIGJyYW5jaEZhbm91dDogMywgbWF4RGVwdGg6IDIsIGJyYW5jaERlY2F5OiAuNTYgfSksXG4gICAgICAgIGxldmVsKDQsIHsgY29vbGRvd25TZWNvbmRzOiAyLjAyLCBkYW1hZ2U6IDIuMjgsIGNoYWluUmFuZ2U6IDE4NCwgbWF4SnVtcHM6IDcsIGJyYW5jaEZhbm91dDogMywgbWF4RGVwdGg6IDMsIGJyYW5jaERlY2F5OiAuNTQgfSksXG4gICAgICAgIGxldmVsKDUsIHsgY29vbGRvd25TZWNvbmRzOiAxLjg2LCBkYW1hZ2U6IDIuNDUsIGNoYWluUmFuZ2U6IDIwNCwgbWF4SnVtcHM6IDksIGJyYW5jaEZhbm91dDogNCwgbWF4RGVwdGg6IDMsIGJyYW5jaERlY2F5OiAuNTIgfSksXG4gICAgICBdLFxuICAgICAgYWdlbnROb3RlczogXCJDbHVzdGVyIGRpc2NoYXJnZS4gVGhlIGFuY2hvciBoaXRzIGhhcmQsIHRoZW4gc2hhbGxvdyBzaWJsaW5nIGJyYW5jaGVzIHNwcmVhZCB0aHJvdWdoIHBhY2tlZCBmb3JtYXRpb25zLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIExpZ2h0bmluZ01lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uZmFtaWx5ID09PSBcImxpZ2h0bmluZ1wiLCBgJHtpZH0gbXVzdCBiZSBpbiBsaWdodG5pbmcgZmFtaWx5LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2l0ZW0udmlzdWFsSWRlbnRpdHkuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgdW5rbm93biBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLmxldmVscy5sZW5ndGggPT09IDUsIGAke2lkfSBtdXN0IGRlZmluZSBleGFjdGx5IGZpdmUgbGV2ZWxzLmApO1xuICAgICAgZm9yIChjb25zdCB0dW5pbmcgb2YgaXRlbS5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGNvb2xkb3duIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5jaGFpblJhbmdlID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBjaGFpblJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcubWF4SnVtcHMgPj0gMSAmJiB0dW5pbmcuYnJhbmNoRmFub3V0ID49IDEgJiYgdHVuaW5nLm1heERlcHRoID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gYnJhbmNoIGNvdW50cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJyYW5jaERlY2F5ID4gMCAmJiB0dW5pbmcuYnJhbmNoRGVjYXkgPD0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBicmFuY2hEZWNheSBtdXN0IGJlIGluICgwLCAxXS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpZ2h0bmluZ0ZhbWlseSA9IG5ldyBMaWdodG5pbmdGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBMaWdodG5pbmdJZCA9IGtleW9mIHR5cGVvZiBsaWdodG5pbmdGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpcGxpZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBzcXVhZEFkZGVkOiBudW1iZXI7XG4gIG1heFNxdWFkU2l6ZTogbnVtYmVyO1xuICBtZW1iZXJzUGVyUm93OiBudW1iZXI7XG4gIG1lbWJlclJhZGl1czogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIHBpY2t1cENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHB1bHNlUmF0ZTogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb206IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibXVsdGlwbGllclwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3F1YWQgTXVsdGlwbGllclwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHNxdWFkUGx1c09uZToge1xuICAgICAgbGFiZWw6IFwiKzEgV2luZ21hdGVcIixcbiAgICAgIHNxdWFkQWRkZWQ6IDEsXG4gICAgICBtYXhTcXVhZFNpemU6IDEwLFxuICAgICAgbWVtYmVyc1BlclJvdzogNSxcbiAgICAgIG1lbWJlclJhZGl1czogNS4yNSxcbiAgICAgIHNwYWNpbmc6IDI5LFxuICAgICAgcGlja3VwQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgY29yZUNvbG9yOiBcImN5YW5cIixcbiAgICAgIHB1bHNlUmF0ZTogMi4yLFxuICAgICAgcGlja3VwU2hhcGVab29tOiAzLjEsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uc3F1YWRBZGRlZCA+IDAsIGAke2lkfSBtdXN0IGFkZCBzcXVhZCBtZW1iZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWF4U3F1YWRTaXplID49IGl0ZW0ubWVtYmVyc1BlclJvdywgYCR7aWR9IG1heCBzcXVhZCBtdXN0IGZpdCBhdCBsZWFzdCBvbmUgcm93LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWVtYmVyUmFkaXVzID4gMCAmJiBpdGVtLnNwYWNpbmcgPiBpdGVtLm1lbWJlclJhZGl1cyAqIDIsIGAke2lkfSBtZW1iZXIgZ2VvbWV0cnkgb3ZlcmxhcHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpZXJGYW1pbHkgPSBuZXcgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE11bHRpcGxpZXJJZCA9IGtleW9mIHR5cGVvZiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hpZWxkT3JiaXRlclNoYXBlID0gXCJkb3RcIiB8IFwiaGV4XCI7XG5leHBvcnQgdHlwZSBTaGllbGRNb2RlID0gXCJjaGFyZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic2hpZWxkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICBtb2RlOiBTaGllbGRNb2RlO1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqIEJhc2ljIHNoaWVsZCBzdHJlbmd0aC4gRW5lbXkgSFAgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgdmFsdWUuICovXG4gIG1heENoYXJnZXM6IG51bWJlcjtcbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IDA7XG4gIHB1c2hEaXN0YW5jZTogMDtcbiAgc2xvd011bHRpcGxpZXI6IDE7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBvcmJpdGVyU2hhcGU6IFNoaWVsZE9yYml0ZXJTaGFwZTtcbiAgb3JiaXRlckNvdW50OiBudW1iZXI7XG4gIG9yYml0ZXJTcGVlZDogbnVtYmVyO1xuICBvcmJpdGVyU2l6ZTogbnVtYmVyO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hpZWxkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaGllbGRcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGxpZ2h0R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkxpZ2h0IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiAyLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiA4LFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA0LFxuICAgICAgb3JiaXRlclNwZWVkOiAxLFxuICAgICAgb3JiaXRlclNpemU6IDQuNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiTGlnaHR3ZWlnaHQgc2hpZWxkIHdpdGggdHdvIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIHNhdGVsbGl0ZUd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJTYXRlbGxpdGUgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTAsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNixcbiAgICAgIG9yYml0ZXJTcGVlZDogMC43NSxcbiAgICAgIG9yYml0ZXJTaXplOiA0Ljc1LFxuICAgICAgYWdlbnROb3RlczogXCJCYWxhbmNlZCBzaGllbGQgd2l0aCBmb3VyIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIGhleEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJIZXggR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBtYXhDaGFyZ2VzOiA3LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMixcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJoZXhcIixcbiAgICAgIG9yYml0ZXJDb3VudDogOCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMC40NSxcbiAgICAgIG9yYml0ZXJTaXplOiA1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBzaGllbGQgd2l0aCBzZXZlbiBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzaGllbGRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiwgYCR7aWR9IG11c3QgdXNlIHRoZSBzaGFyZWQgY2hhcmdlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1heENoYXJnZXMgPiAwLCBgJHtpZH0gc3RyZW5ndGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlckNvdW50ID4gMCwgYCR7aWR9IG11c3QgaGF2ZSBvcmJpdGVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlclNwZWVkID49IDAsIGAke2lkfSBvcmJpdGVyU3BlZWQgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkRmFtaWx5ID0gbmV3IFNoaWVsZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNoaWVsZElkID0ga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEhvdyB0aGUgc3dvcmQgc2VsZWN0cyB0YXJnZXRzIGZyb20gdGhlIG5lYXJieSB0aHJlYXQgcG9vbC5cbiAqIEFsbCBtb2RlcyBhcmUgbGFuZS1hd2FyZSB2aWEgdGhlIE5lYXJieVRocmVhdFF1ZXJ5IG1vZHVsZS5cbiAqL1xuZXhwb3J0IHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlID1cbiAgfCBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIgICAvLyBjbG9zZXN0IGVuZW15IGluIHRoZSBwbGF5ZXIncyBhY3RpdmUgbGFuZVxuICB8IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiICAgIC8vIGNsb3Nlc3QgZW5lbXkgcmVnYXJkbGVzcyBvZiBsYW5lXG4gIHwgXCJmcm9udE1vc3RUaHJlYXRcIiAgICAgICAgLy8gZmFydGhlc3QtYWR2YW5jZWQgKGhpZ2hlc3QgeSkgZW5lbXkgaW4gcmFuZ2VcbiAgfCBcImNsdXN0ZXJOZWFyUGxheWVyXCI7ICAgICAvLyBwaWNrcyB1cCB0byBtYXhUYXJnZXRzIGVuZW1pZXMgd2l0aGluIHJlYWNoXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic3dvcmRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIC8qKlxuICAgKiBBdHRhY2sgcmFuZ2UgaW4gcGl4ZWxzIChhdCBzY2FsZSAxKS5cbiAgICogU3dvcmQgb25seSBzd2luZ3Mgd2hlbiBhbiBlbmVteSBlbnRlcnMgdGhpcyByYWRpdXMuXG4gICAqL1xuICByYW5nZTogbnVtYmVyO1xuICAvKipcbiAgICogQW5ndWxhciB3aWR0aCBvZiB0aGUgc2xhc2ggYXJjIGluIGRlZ3JlZXMuXG4gICAqIFdpZGVyID0gaGVhdmllciwgaGl0cyBtb3JlIGVuZW1pZXMgcGVyIHN3aW5nLlxuICAgKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogRGFtYWdlIHBlciBoaXQuICovXG4gIGRhbWFnZTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgbGV2ZWwgNSBkYW1hZ2UgcGVyIGhpdC5cbiAgICpcbiAgICogTGV2ZWwgMSB1c2VzIGRhbWFnZSwgbGV2ZWwgNSB1c2VzIGRhbWFnZUF0TGV2ZWw1LCBhbmQgaW50ZXJtZWRpYXRlIGxldmVsc1xuICAgKiBpbnRlcnBvbGF0ZS4gVXNlIHRoaXMgd2hlbiBkdXBsaWNhdGUgcGlja3VwcyBzaG91bGQgaW5jcmVhc2UgdG90YWwgSFBcbiAgICogY2xlYXJlZCB3aXRob3V0IGNoYW5naW5nIHByb3hpbWl0eSBydWxlcy5cbiAgICovXG4gIGRhbWFnZUF0TGV2ZWw1PzogbnVtYmVyO1xuICAvKiogQ29vbGRvd24gYmV0d2VlbiBzd2luZ3MgaW4gc2Vjb25kcy4gU3dvcmRzIGRvIG5vdCBmaXJlIG9uIGEgdGltZXI7IG9ubHkgd2hlbiBhIHRhcmdldCBleGlzdHMuICovXG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICAvKiogTWF4aW11bSB0YXJnZXRzIGhpdCBwZXIgc3dpbmcuICovXG4gIG1heFRhcmdldHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHZlcnRpY2FsIHJlYWNoIGluIGF1dGhvcmVkIHRyYWNrIHJvd3MuXG4gICAqXG4gICAqIEhlYXZ5IHN3ZWVwaW5nIHN3b3JkcyBjYW4gdXNlIHRoaXMgd2l0aCByZXBlYXRlZCBwaWNrdXBzOiBsZXZlbCAxIHVzZXNcbiAgICogbGV2ZWwxIHJvd3MsIGxldmVsIDUgdXNlcyBsZXZlbDUgcm93cywgYW5kIGludGVybWVkaWF0ZSBsZXZlbHMgaW50ZXJwb2xhdGUuXG4gICAqIFRoaXMgZXhwYW5kcyBhZmZlY3RlZCByb3dzIGFmdGVyIGEgY2xvc2UgdGFyZ2V0IGlzIGZvdW5kOyBpdCBkb2VzIG5vdFxuICAgKiBsb29zZW4gdGhlIG5lYXItcGxheWVyIHByb3hpbWl0eSB0aHJlc2hvbGQuXG4gICAqL1xuICByb3dSZWFjaD86IHtcbiAgICBsZXZlbDE6IG51bWJlcjtcbiAgICBsZXZlbDU6IG51bWJlcjtcbiAgfTtcbiAgLyoqIExhbmUtYXdhcmUgdGFyZ2V0IHNlbGVjdGlvbiBtb2RlLiAqL1xuICB0YXJnZXRpbmdNb2RlOiBTd29yZFRhcmdldGluZ01vZGU7XG4gIC8qKiBWaXN1YWwgc2xhc2ggYXJjIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy4gKi9cbiAgc2xhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBQcmltYXJ5IHNsYXNoIGNvbG9yLiAqL1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgLyoqIFZpc3VhbCB0aGlja25lc3MgbXVsdGlwbGllciBmb3IgdGhlIHNoYXJlZCBzd29yZCB0cmFpbC4gMS4wID0gZGVmYXVsdC4gKi9cbiAgc2xhc2hUaGlja25lc3M6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRlc2lnbiBub3Rlcy4gTm90IHVzZWQgYnkgcnVudGltZTsgZG9jdW1lbnRzIGludGVudCBmb3IgZnV0dXJlIGFnZW50cy5cbiAgICovXG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRmFtaWx5IGRlZmluaXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInN3b3JkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTd29yZFwiO1xuXG4gIC8qKlxuICAgKiBGYW1pbHktbGV2ZWwgaW1wbGVtZW50YXRpb24gbm90ZXM6XG4gICAqIC0gU3dvcmRzIGFyZSBub3QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhleSBzd2luZyBvbmx5IHdoZW4gYSB2YWxpZCB0YXJnZXRcbiAgICogICBpcyB3aXRoaW4gcmFuZ2UgYW5kIGNvb2xkb3duIGlzIHJlYWR5LiBUaGV5IGlkbGUgc2lsZW50bHkgb3RoZXJ3aXNlLlxuICAgKiAtIE9uZSBhY3RpdmUgc3dvcmQgcGVyIHBsYXllciAoZmFtaWx5LXNjb3BlZCBleGNsdXNpdml0eSkuXG4gICAqIC0gUmVwZWF0ZWQgcGlja3VwcyBvZiB0aGUgc2FtZSBzd29yZCBpbmNyZWFzZSB0aGF0IHN3b3JkJ3MgYWN0aXZlIGxldmVsLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgLSBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIFNob3J0IGNvb2xkb3duIG1ha2VzIGl0IHVzZWZ1bCBhZ2FpbnN0IGRlbnNlIHNpbmdsZS1sYW5lIHdhdmVzLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuNTUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMC0xODBtcyBmZWVsLiBGYWRpbmcgYWZ0ZXJpbWFnZS4gTGlrZSBhIHdoaXAtbGlrZSBrYXRhbmEgYXJjLlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhdmVyIC0gSGVhdnkgc3dvcmQuIFNsb3dlciwgYnV0IHN3ZWVwcyBhY3Jvc3MgZXZlcnkgY29sdW1uLlxuICAgICAqIFN0YXJ0cyB3aXRoIDIgcm93cyBvZiB2ZXJ0aWNhbCByZWFjaCBhbmQgc2NhbGVzIHRvIDQgcm93cyBhdCBsZXZlbCA1LlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDY4LFxuICAgICAgYXJjRGVncmVlczogMzYwLFxuICAgICAgZGFtYWdlOiAyLjQsXG4gICAgICBkYW1hZ2VBdExldmVsNTogMy40LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjM1LFxuICAgICAgbWF4VGFyZ2V0czogMTIsXG4gICAgICByb3dSZWFjaDogeyBsZXZlbDE6IDIsIGxldmVsNTogNCB9LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDI2MCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuOSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgYWxsLWNvbHVtbiBzd2VlcC4gUmVwZWF0ZWQgY2xlYXZlciBwaWNrdXBzIGxldmVsIGl0IHVwIGZyb20gMiByb3dzIG9mIHJlYWNoIHRvIDQgcm93cyBhdCBsZXZlbCA1LCB3aXRoIG1vcmUgdG90YWwgZGFtYWdlIHBlciBzd2luZy5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykgYXMgQXJyYXk8W3N0cmluZywgU3dvcmRNZW1iZXJdPikge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgaWYgKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ICE9PSB1bmRlZmluZWQpIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2VBdExldmVsNSA+PSBzd29yZC5kYW1hZ2UsIGAke2lkfSBkYW1hZ2VBdExldmVsNSBtdXN0IGJlIGF0IGxlYXN0IGRhbWFnZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICBpZiAoc3dvcmQucm93UmVhY2gpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWwxKSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDEgPj0gMSwgYCR7aWR9IHJvd1JlYWNoLmxldmVsMSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWw1KSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDUgPj0gc3dvcmQucm93UmVhY2gubGV2ZWwxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgbGV2ZWwxLmApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoRHVyYXRpb25NcyA+IDAsIGAke2lkfSBzbGFzaER1cmF0aW9uTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaFRoaWNrbmVzcyA+IDAsIGAke2lkfSBzbGFzaFRoaWNrbmVzcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzd29yZEZhbWlseSA9IG5ldyBTd29yZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFN3b3JkSWQgPSBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBkZWZpbml0aW9uOiBUcmFja0RlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tGYW1pbHlNZW1iZXI8VHJhY2tJZCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICB0cmFja0lkczogcmVhZG9ubHkgVHJhY2tJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBkaXN0YW5jZUZyb21QbGF5ZXI6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzRW5lbXkgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKTtcbmNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBwYXJzZVRyYWNrUm93cyh0cmFjazogVHJhY2tEZWZpbml0aW9uKTogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHNvdXJjZUluZGV4OiBudW1iZXIgfT4ge1xuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuICByZXR1cm4gcm93cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHBhcnNlVHJhY2tSb3dzKHRyYWNrKTtcbiAgbGV0IGxlZnRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgcmlnaHRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuXG4gIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBpcGVDb3VudCA9IFsuLi5yb3cudGV4dF0uZmlsdGVyKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgPT09IFwifFwiKS5sZW5ndGg7XG4gICAgaWYgKHBpcGVDb3VudCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gbXVzdCBjb250YWluIGV4YWN0bHkgb25lIFwifFwiIHNlcGFyYXRvcjsgZm91bmQgJHtwaXBlQ291bnR9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSByb3cudGV4dC5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIGxlZnRXaWR0aCA/Pz0gbGVmdC5sZW5ndGg7XG4gICAgcmlnaHRXaWR0aCA/Pz0gcmlnaHQubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSBsZWZ0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyBsZWZ0IHdpZHRoICR7bGVmdC5sZW5ndGh9OyBleHBlY3RlZCAke2xlZnRXaWR0aH0uYCk7XG4gICAgfVxuICAgIGlmIChyaWdodC5sZW5ndGggIT09IHJpZ2h0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyByaWdodCB3aWR0aCAke3JpZ2h0Lmxlbmd0aH07IGV4cGVjdGVkICR7cmlnaHRXaWR0aH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzdGFuY2VGcm9tUGxheWVyID0gcm93cy5sZW5ndGggLSAxIC0gcm93SW5kZXg7XG4gICAgZm9yIChjb25zdCBbc2lkZSwgbGFuZV0gb2YgW1tcImxlZnRcIiwgbGVmdF0sIFtcInJpZ2h0XCIsIHJpZ2h0XV0gYXMgY29uc3QpIHtcbiAgICAgIGNvbnN0IG9jY3VwaWVkQnkgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICAgICAgWy4uLmxhbmVdLmZvckVhY2goKHN5bWJvbCwgbGFuZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdHJhY2subGVnZW5kW3N5bWJvbF07XG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSB1c2VzIHN5bWJvbCBcIiR7c3ltYm9sfVwiIGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBpcyBtaXNzaW5nIGZyb20gdGhlIGxlZ2VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuaWQgPT09IFwiZW1wdHlcIikgcmV0dXJuO1xuICAgICAgICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGVudHJ5LmlkKTtcbiAgICAgICAgY29uc3QgY29sdW1uU3BhbiA9IGVuZW15SWQgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkXS5jb2x1bW5TcGFuIDogMTtcbiAgICAgICAgaWYgKGxhbmVJbmRleCArIGNvbHVtblNwYW4gPiBsYW5lLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgbmVlZHMgJHtjb2x1bW5TcGFufSBjb2x1bW5zIGFuZCBvbmx5ICR7bGFuZS5sZW5ndGggLSBsYW5lSW5kZXh9IHJlbWFpbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykge1xuICAgICAgICAgIGNvbnN0IG9jY3VwaWVkID0gb2NjdXBpZWRCeS5nZXQobGFuZUluZGV4ICsgb2Zmc2V0KTtcbiAgICAgICAgICBpZiAob2NjdXBpZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBvbiAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXggKyBvZmZzZXR9LCBhbHJlYWR5IG9jY3VwaWVkIGJ5ICR7b2NjdXBpZWR9LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykgb2NjdXBpZWRCeS5zZXQobGFuZUluZGV4ICsgb2Zmc2V0LCBlbnRyeS5pZCk7XG5cbiAgICAgICAgZW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICBzaWRlLFxuICAgICAgICAgIGxhbmVJbmRleCxcbiAgICAgICAgICBjb2x1bW5TcGFuLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGRpc3RhbmNlRnJvbVBsYXllcixcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IChlbnRyeS5zcGVlZCA/PyAxKSAqIChpc0VuZW15KGVudHJ5LmlkKSA/IHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA6IDEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+XG4gICAgYS5kaXN0YW5jZUZyb21QbGF5ZXIgLSBiLmRpc3RhbmNlRnJvbVBsYXllciB8fFxuICAgIGEucm93SW5kZXggLSBiLnJvd0luZGV4IHx8XG4gICAgYS5zaWRlLmxvY2FsZUNvbXBhcmUoYi5zaWRlKSB8fFxuICAgIGEubGFuZUluZGV4IC0gYi5sYW5lSW5kZXgpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IGd1bkZhbWlseSB9IGZyb20gXCIuL0d1bkZhbWlseVwiO1xuaW1wb3J0IHsgbGlnaHRuaW5nRmFtaWx5IH0gZnJvbSBcIi4vTGlnaHRuaW5nRmFtaWx5XCI7XG5pbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4vTXVsdGlwbGllckZhbWlseVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5IH0gZnJvbSBcIi4vT3JiRmFtaWx5XCI7XG5pbXBvcnQgeyBzaGllbGRGYW1pbHkgfSBmcm9tIFwiLi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB7IHN3b3JkRmFtaWx5IH0gZnJvbSBcIi4vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uLCB0eXBlIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbi8qKlxuICogR2xvYmFsIDAtYmFzZWQgY29sdW1uIGluZGV4IGFjcm9zcyBib3RoIGxhbmVzLlxuICpcbiAqIEN1cnJlbnQgbGF5b3V0IHNoYXBlOlxuICogLSBjb2x1bW5zIDAtNCBhcmUgdGhlIGxlZnQgbGFuZVxuICogLSBjb2x1bW5zIDUtOSBhcmUgdGhlIHJpZ2h0IGxhbmVcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC0gMiA9IGxlZnQgbGFuZSBtaWRkbGVcbiAqIC0gNyA9IHJpZ2h0IGxhbmUgbWlkZGxlXG4gKi9cbmV4cG9ydCB0eXBlIFRyYWNrQ29sdW1uID0gbnVtYmVyO1xuXG4vKipcbiAqIEZyaWVuZGx5IGNvbHVtbiBjb25zdGFudHMgZm9yIHRoZSBjdXJyZW50IDItbGFuZSAvIDUtY29sdW1uIHRyYWNrIGZvcm1hdC5cbiAqXG4gKiBUaGVzZSBhcmUgb25seSBzdWdhci4gVGhlIGJ1aWxkZXIgc3RpbGwgYWNjZXB0cyByYXcgbnVtYmVycyBmb3IgZmFzdCBhdXRob3JpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tDb2x1bW5zIHtcbiAgcmVhZG9ubHkgbGVmdDoge1xuICAgIHJlYWRvbmx5IG91dGVyOiAwO1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogMTtcbiAgICByZWFkb25seSBtaWQ6IDI7XG4gICAgcmVhZG9ubHkgbmVhcklubmVyOiAzO1xuICAgIHJlYWRvbmx5IGlubmVyOiA0O1xuICB9O1xuICByZWFkb25seSByaWdodDoge1xuICAgIHJlYWRvbmx5IGlubmVyOiA1O1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogNjtcbiAgICByZWFkb25seSBtaWQ6IDc7XG4gICAgcmVhZG9ubHkgbmVhck91dGVyOiA4O1xuICAgIHJlYWRvbmx5IG91dGVyOiA5O1xuICB9O1xufVxuXG4vKipcbiAqIENvbW1vbiBleHBvcnRlZCBjb2x1bW4gY29uc3RhbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqIGJ1aWxkZXIuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KVxuICogYnVpbGRlci53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGM6IFRyYWNrQ29sdW1ucyA9IHtcbiAgbGVmdDogeyBvdXRlcjogMCwgbmVhck91dGVyOiAxLCBtaWQ6IDIsIG5lYXJJbm5lcjogMywgaW5uZXI6IDQgfSxcbiAgcmlnaHQ6IHsgaW5uZXI6IDUsIG5lYXJJbm5lcjogNiwgbWlkOiA3LCBuZWFyT3V0ZXI6IDgsIG91dGVyOiA5IH0sXG59O1xuXG5leHBvcnQgdHlwZSBUcmFja0VuZW15UmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tXZWFwb25SZWYgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBUcmFja1BpY2t1cFJlZiA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1BsYWNlbWVudE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICAvKipcbiAgICogT3B0aW9uYWwgcGVyLXN5bWJvbCBzcGVlZCBtdWx0aXBsaWVyIGVtaXR0ZWQgaW50byB0aGUgdHJhY2sgbGVnZW5kLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFRoZSBkZWZhdWx0IGlzIDEsIGFuZCBmdXR1cmUgdHJhY2sgZWRpdHNcbiAgICogc2hvdWxkIHByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseSBhc2tzIGZvciBzcGVlZCB0dW5pbmcuXG4gICAqIENoYW5naW5nIHRoaXMgdmFsdWUgaXMgYSBzaWduaWZpY2FudCBiYWxhbmNlIGNoYW5nZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGluZU9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyB7XG4gIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW107XG4gIGNvdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbXB0eSByb3dzIGJldHdlZW4gZWFjaCBlbmVteS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMC4gSW4gcHJlc3N1cmUgc2VjdGlvbnMsIG9taXQgdGhpcyB1bmxlc3MgdGhlIGdhcCBpc1xuICAgKiBpbnRlbnRpb25hbDsgcHJlc3N1cmUgc2hvdWxkIG5vcm1hbGx5IHBsYWNlIGVuZW1pZXMgZXZlcnkgcm93LlxuICAgKi9cbiAgZ2FwPzogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgcmVwZWF0ZWQgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrV2FsbE9wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgd2FsbC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRHJpcE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICByb3dzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQbGFjZSBvbmUgZW5lbXkgZXZlcnkgTiByb3dzLlxuICAgKlxuICAgKiBEcmlwIGlzIGludGVudGlvbmFsbHkgc3BhcnNlLiBQcmVmZXIgbGluZS9hbHRlcm5hdGluZyB3aXRob3V0IGEgZ2FwIGZvclxuICAgKiBub3JtYWwgcHJlc3N1cmUsIGFuZCB1c2UgZHJpcCBvbmx5IHdoZW4gdGhlIHNwYXJzZSBjYWRlbmNlIGlzIGRlbGliZXJhdGUuXG4gICAqL1xuICBldmVyeTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgZHJpcCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgYmFsYW5jZToge1xuICAgIGVuZW15SHA6IG51bWJlcjtcbiAgICBlbmVteVNwZWVkOiBudW1iZXI7XG4gIH07XG4gIHBsYXllclN0YXJ0Q29sdW1uPzogVHJhY2tDb2x1bW47XG4gIGxhbmVXaWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXIge1xuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWR2YW5jZVJvd3Mocm93czogbnVtYmVyKTogVHJhY2tCdWlsZGVyO1xuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICAvKipcbiAgICogQWRkIGEgZGFuZ2VyLWZvY3VzZWQgc2VjdGlvbiB3aXRoIGEgZml4ZWQgZHVyYXRpb24uXG4gICAqXG4gICAqIFByZXNzdXJlIHNob3VsZCB1c3VhbGx5IGNvbnRhaW4gZW5lbXkgcGxhY2VtZW50IGV2ZXJ5IHJvdy4gVXNlIGV4cGxpY2l0XG4gICAqIGdhcHMgb3IgZHJpcCBwYXR0ZXJucyBvbmx5IHdoZW4gdGhlIHF1aWV0IHNwYWNlIGlzIGludGVudGlvbmFsLlxuICAgKi9cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBidWlsZCgpOiBUcmFja01lbWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJGYWN0b3J5IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG59XG5cbmludGVyZmFjZSBQbGFjZW1lbnQge1xuICByb3c6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHNwYW46IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdExhbmVXaWR0aCA9IDU7XG5jb25zdCBlbXB0eVN5bWJvbCA9IFwiLlwiO1xuY29uc3QgcGxheWVyU3ltYm9sID0gXCJNXCI7XG5jb25zdCBlbmVteUFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBiYXNpYzogXCJlbmVteS5iYXNpY1wiLFxuICBiYXNpY09yYjogXCJlbmVteS5iYXNpY09yYlwiLFxuICBnbGFzczogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICBnbGFzc1NoaWVsZDogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICB3aW5nZXI6IFwiZW5lbXkud2luZ2VyXCIsXG4gIHRhbms6IFwiZW5lbXkudGFua1wiLFxufTtcbmNvbnN0IHdlYXBvblByZWZpeGVzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgZ3VuOiBcInBpY2t1cC53ZWFwb24uZ3VuLlwiLFxuICBzaGllbGQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIsXG4gIHN3b3JkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsXG4gIGxpZ2h0bmluZzogXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIixcbn07XG5jb25zdCBwaWNrdXBBbGlhc2VzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgXCJ1bml0TXVsdGlwbGllci4yeFwiOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLFxuICBcInVuaXRNdWx0aXBsaWVyLnNxdWFkUGx1c09uZVwiOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLFxufTtcbmNvbnN0IHByZWZlcnJlZFN5bWJvbHM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcImVuZW15LmJhc2ljXCI6IFwiRVwiLFxuICBcImVuZW15LmJhc2ljT3JiXCI6IFwiRVwiLFxuICBcImVuZW15LmdsYXNzU2hpZWxkXCI6IFwiRFwiLFxuICBcImVuZW15LndpbmdlclwiOiBcIldcIixcbiAgXCJlbmVteS50YW5rXCI6IFwiVFwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCI6IFwiR1wiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLm5lZWRsZXJTbWdcIjogXCJOXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCI6IFwiQlwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCI6IFwiSFwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIjogXCJSXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiOiBcIlNcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiOiBcIlZcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5oZXhHdWFyZFwiOiBcIlhcIixcbiAgXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCI6IFwiYVwiLFxuICBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiOiBcImNcIixcbiAgXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5jaGFpblNwYXJrXCI6IFwiTFwiLFxuICBcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLmZvcmtDYXBhY2l0b3JcIjogXCJGXCIsXG4gIFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwiMlwiLFxufTtcbmNvbnN0IGZhbGxiYWNrU3ltYm9scyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2Nzg5ISMkJSYqKywtLzo7PD0+P0BeX35cIi5zcGxpdChcIlwiKVxuICAuZmlsdGVyKHN5bWJvbCA9PiBzeW1ib2wgIT09IGVtcHR5U3ltYm9sICYmIHN5bWJvbCAhPT0gcGxheWVyU3ltYm9sKTtcblxuZnVuY3Rpb24gcmVxdWlyZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIU51bWJlci5pc0ludGVnZXIodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgYW4gaW50ZWdlci5gKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih2YWx1ZTogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHJlcXVpcmVJbnRlZ2VyKHZhbHVlLCBsYWJlbCk7XG4gIGlmICh2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNwZWVkKHNwZWVkOiBudW1iZXIgfCB1bmRlZmluZWQsIGxhYmVsOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZSA9IHNwZWVkID8/IDE7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRW5lbXlJZChpZDogVHJhY2tFbmVteVJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBlbmVteUFsaWFzZXNbaWRdID8/IGBlbmVteS4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdlYXBvbklkKGlkOiBUcmFja1dlYXBvblJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5cIikpIHJldHVybiBpZDtcbiAgY29uc3QgZG90SW5kZXggPSBpZC5pbmRleE9mKFwiLlwiKTtcbiAgaWYgKGRvdEluZGV4IDw9IDApIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBtdXN0IHVzZSBmYW1pbHkuaWQgc2hvcnRoYW5kIG9yIGEgY2Fub25pY2FsIHBpY2t1cC53ZWFwb24gaWQuYCk7XG4gIGNvbnN0IGZhbWlseSA9IGlkLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgY29uc3QgbWVtYmVyID0gaWQuc2xpY2UoZG90SW5kZXggKyAxKTtcbiAgY29uc3QgcHJlZml4ID0gd2VhcG9uUHJlZml4ZXNbZmFtaWx5XTtcbiAgaWYgKCFwcmVmaXgpIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBoYXMgdW5rbm93biB3ZWFwb24gZmFtaWx5IFwiJHtmYW1pbHl9XCIuYCk7XG4gIHJldHVybiBgJHtwcmVmaXh9JHttZW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGlja3VwSWQoaWQ6IFRyYWNrUGlja3VwUmVmKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBwaWNrdXBBbGlhc2VzW2lkXSA/PyBgcGlja3VwLiR7aWR9YDtcbn1cblxuZnVuY3Rpb24gZW5lbXlNZW1iZXJJZChjYW5vbmljYWxJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChjYW5vbmljYWxJZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWNhbm9uaWNhbElkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICByZXR1cm4gY2Fub25pY2FsSWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICBpZiAoZW5lbXlJZCkge1xuICAgIGlmICghKGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZW5lbXkgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWxpZGF0b3JzOiByZWFkb25seSBbc3RyaW5nLCBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIHN0cmluZ11bXSA9IFtcbiAgICBbXCJwaWNrdXAud2VhcG9uLmd1bi5cIiwgZ3VuRmFtaWx5Lm1lbWJlcnMsIFwiZ3VuXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLCBzaGllbGRGYW1pbHkubWVtYmVycywgXCJzaGllbGRcIl0sXG4gICAgW1wicGlja3VwLndlYXBvbi5zd29yZC5cIiwgc3dvcmRGYW1pbHkubWVtYmVycywgXCJzd29yZFwiXSxcbiAgICBbXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIiwgbGlnaHRuaW5nRmFtaWx5Lm1lbWJlcnMsIFwibGlnaHRuaW5nXCJdLFxuICBdO1xuICBmb3IgKGNvbnN0IFtwcmVmaXgsIG1lbWJlcnMsIGxhYmVsXSBvZiB2YWxpZGF0b3JzKSB7XG4gICAgaWYgKCFpZC5zdGFydHNXaXRoKHByZWZpeCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IG1lbWJlcklkID0gaWQuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgaWYgKCEobWVtYmVySWQgaW4gbWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biAke2xhYmVsfSBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpZCA9PT0gXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIikgcmV0dXJuO1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC51bml0TXVsdGlwbGllci5cIikpIHtcbiAgICBjb25zdCBtZW1iZXJJZCA9IGlkLnNsaWNlKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLlwiLmxlbmd0aCk7XG4gICAgaWYgKCEobWVtYmVySWQgaW4gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG11bHRpcGxpZXIgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHRyYWNrIGVudGl0eSBpZCBcIiR7aWR9XCIuYCk7XG59XG5cbmZ1bmN0aW9uIHNwYW5Gb3IoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteU1lbWJlcklkKGlkKTtcbiAgcmV0dXJuIGVuZW15SWQgJiYgZW5lbXlJZCBpbiBvcmJGYW1pbHkubWVtYmVycyA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWQgYXMga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzXS5jb2x1bW5TcGFuIDogMTtcbn1cblxuY2xhc3MgVHJhY2tCdWlsZGVyQ29yZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGFuZVdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2VtZW50czogUGxhY2VtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBjdXJzb3IgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogVHJhY2tCdWlsZGVyT3B0aW9ucykge1xuICAgIHRoaXMubGFuZVdpZHRoID0gb3B0aW9ucy5sYW5lV2lkdGggPz8gZGVmYXVsdExhbmVXaWR0aDtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHRoaXMubGFuZVdpZHRoLCBcIlRyYWNrIGxhbmVXaWR0aFwiKTtcbiAgICBpZiAodGhpcy5sYW5lV2lkdGggPCAzKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYW5lV2lkdGggbXVzdCBiZSBhdCBsZWFzdCAzLlwiKTtcbiAgICBpZiAoIW9wdGlvbnMubGFiZWwudHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYWJlbCBpcyByZXF1aXJlZC5cIik7XG4gICAgaWYgKCFvcHRpb25zLmRlc2NyaXB0aW9uLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgZGVzY3JpcHRpb24gaXMgcmVxdWlyZWQuXCIpO1xuICAgIGlmIChvcHRpb25zLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgaWYgKG9wdGlvbnMuYmFsYW5jZS5lbmVteVNwZWVkIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlTcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKG9wdGlvbnMucGxheWVyU3RhcnRDb2x1bW4gPz8gYy5sZWZ0Lm1pZCwgXCJwbGF5ZXJTdGFydENvbHVtblwiLCAxKTtcbiAgfVxuXG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZUVuZW15SWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJlbmVteVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplV2VhcG9uSWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJ3ZWFwb25cIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVBpY2t1cElkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwicGlja3VwXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWR2YW5jZVJvd3Mocm93czogbnVtYmVyKTogdGhpcyB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihyb3dzLCBcImFkdmFuY2VSb3dzIHJvd3NcIik7XG4gICAgdGhpcy5jdXJzb3IgKz0gcm93cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc3BpdGUocm93czogbnVtYmVyKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuYWR2YW5jZVJvd3Mocm93cyk7XG4gIH1cblxuICBzZWN0aW9uKG5hbWU6IHN0cmluZywgcm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICBpZiAoIW5hbWUudHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBzZWN0aW9uIG5hbWUgaXMgcmVxdWlyZWQuXCIpO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIocm93cywgYFRyYWNrIHNlY3Rpb24gXCIke25hbWV9XCIgcm93c2ApO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBuZXcgVHJhY2tTZWN0aW9uQnVpbGRlckNvcmUodGhpcywgbmFtZSwgdGhpcy5jdXJzb3IsIHJvd3MpO1xuICAgIGJ1aWxkKHNlY3Rpb24pO1xuICAgIHRoaXMuY3Vyc29yICs9IHJvd3M7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcmVzc3VyZShyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLnNlY3Rpb24oXCJwcmVzc3VyZVwiLCByb3dzLCBidWlsZCk7XG4gIH1cblxuICByZWJ1aWxkKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuc2VjdGlvbihcInJlYnVpbGRcIiwgcm93cywgYnVpbGQpO1xuICB9XG5cbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRMaW5lKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImxpbmVcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkQWx0ZXJuYXRpbmcodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwiYWx0ZXJuYXRpbmdcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZFdhbGwodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwid2FsbFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkRHJpcCh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJkcmlwXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkU2VjdGlvbkVuZW15KGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZUVuZW15SWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgZW5lbXlgKTtcbiAgfVxuXG4gIGFkZFNlY3Rpb25XZWFwb24oYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVdlYXBvbklkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHdlYXBvbmApO1xuICB9XG5cbiAgYWRkU2VjdGlvblBpY2t1cChiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplUGlja3VwSWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcGlja3VwYCk7XG4gIH1cblxuICBhZGRMaW5lKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmNvdW50LCBgJHtsYWJlbH0gY291bnRgKTtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHJlcXVpcmVJbnRlZ2VyKGdhcCwgYCR7bGFiZWx9IGdhcGApO1xuICAgIGlmIChnYXAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGdhcCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbnMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW46IG9wdGlvbnMuY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgaW5kZXggKiAoZ2FwICsgMSksIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGRBbHRlcm5hdGluZyhiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuY291bnQsIGAke2xhYmVsfSBjb3VudGApO1xuICAgIGlmIChvcHRpb25zLmNvbHVtbnMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGNvbHVtbnMgbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBjb2x1bW4uYCk7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICByZXF1aXJlSW50ZWdlcihnYXAsIGAke2xhYmVsfSBnYXBgKTtcbiAgICBpZiAoZ2FwIDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBnYXAgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBvcHRpb25zLmNvbHVtbnNbaW5kZXggJSBvcHRpb25zLmNvbHVtbnMubGVuZ3RoXTtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBpbmRleCAqIChnYXAgKyAxKSwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFdhbGwoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBjb2x1bW5zIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgY29sdW1uLmApO1xuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIG9wdGlvbnMuY29sdW1ucykge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdywgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZERyaXAoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMucm93cywgYCR7bGFiZWx9IHJvd3NgKTtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuZXZlcnksIGAke2xhYmVsfSBldmVyeWApO1xuICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IG9wdGlvbnMucm93czsgb2Zmc2V0ICs9IG9wdGlvbnMuZXZlcnkpIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW46IG9wdGlvbnMuY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgb2Zmc2V0LCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGQoKTogVHJhY2tNZW1iZXIge1xuICAgIGNvbnN0IHBsYXllclN0YXJ0Q29sdW1uID0gdGhpcy5vcHRpb25zLnBsYXllclN0YXJ0Q29sdW1uID8/IGMubGVmdC5taWQ7XG4gICAgY29uc3QgbWF4UGxhY2VtZW50Um93ID0gdGhpcy5wbGFjZW1lbnRzLnJlZHVjZSgobWF4LCBpdGVtKSA9PiBNYXRoLm1heChtYXgsIGl0ZW0ucm93KSwgMCk7XG4gICAgY29uc3Qgcm93Q291bnQgPSBNYXRoLm1heCh0aGlzLmN1cnNvciwgbWF4UGxhY2VtZW50Um93ICsgMSwgMSk7XG4gICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sICgpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubGFuZVdpZHRoICogMiB9LCAoKSA9PiBlbXB0eVN5bWJvbCkpO1xuICAgIGNvbnN0IG9jY3VwaWVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKCkgPT4gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKSk7XG4gICAgY29uc3QgbGVnZW5kID0gbmV3IE1hcDxzdHJpbmcsIHsgaWQ6IHN0cmluZzsgc3BlZWQ6IG51bWJlciB9PigpO1xuICAgIGxlZ2VuZC5zZXQoZW1wdHlTeW1ib2wsIHsgaWQ6IFwiZW1wdHlcIiwgc3BlZWQ6IDEgfSk7XG4gICAgbGVnZW5kLnNldChwbGF5ZXJTeW1ib2wsIHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIsIHNwZWVkOiAxIH0pO1xuICAgIGNvbnN0IHVzZWRTeW1ib2xzID0gbmV3IFNldChbZW1wdHlTeW1ib2wsIHBsYXllclN5bWJvbF0pO1xuICAgIGNvbnN0IHN5bWJvbEJ5RW50aXR5ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgICBjb25zdCBwbGF5ZXJDZWxscyA9IHRoaXMuY2VsbHNGb3IocGxheWVyU3RhcnRDb2x1bW4sIDEpO1xuICAgIGZvciAoY29uc3QgY2VsbCBvZiBwbGF5ZXJDZWxscykgb2NjdXBpZWRbMF0uc2V0KGNlbGwuZ2xvYmFsQ29sdW1uLCBcInBsYXllci5zdGFydFwiKTtcbiAgICByb3dzWzBdW3BsYXllclN0YXJ0Q29sdW1uXSA9IHBsYXllclN5bWJvbDtcblxuICAgIGZvciAoY29uc3QgcGxhY2VtZW50IG9mIHRoaXMucGxhY2VtZW50cykge1xuICAgICAgY29uc3Qgc3ltYm9sID0gdGhpcy5zeW1ib2xGb3IocGxhY2VtZW50LCB1c2VkU3ltYm9scywgc3ltYm9sQnlFbnRpdHkpO1xuICAgICAgbGVnZW5kLnNldChzeW1ib2wsIHsgaWQ6IHBsYWNlbWVudC5pZCwgc3BlZWQ6IHBsYWNlbWVudC5zcGVlZCB9KTtcbiAgICAgIGZvciAoY29uc3QgY2VsbCBvZiB0aGlzLmNlbGxzRm9yKHBsYWNlbWVudC5jb2x1bW4sIHBsYWNlbWVudC5zcGFuKSkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IG9jY3VwaWVkW3BsYWNlbWVudC5yb3ddLmdldChjZWxsLmdsb2JhbENvbHVtbik7XG4gICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgcGxhY2VtZW50IG92ZXJsYXAgYXQgcm93ICR7cGxhY2VtZW50LnJvd30sIGNvbHVtbiAke2NlbGwuZ2xvYmFsQ29sdW1ufS4gRXhpc3RpbmcgaWQgXCIke2V4aXN0aW5nfVwiLCBuZXcgaWQgXCIke3BsYWNlbWVudC5pZH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBvY2N1cGllZFtwbGFjZW1lbnQucm93XS5zZXQoY2VsbC5nbG9iYWxDb2x1bW4sIHBsYWNlbWVudC5pZCk7XG4gICAgICB9XG4gICAgICByb3dzW3BsYWNlbWVudC5yb3ddW3BsYWNlbWVudC5jb2x1bW5dID0gc3ltYm9sO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7XG4gICAgICBsYXlvdXQ6IGBcXG4ke3Jvd3Muc2xpY2UoKS5yZXZlcnNlKCkubWFwKHJvdyA9PiBgJHtyb3cuc2xpY2UoMCwgdGhpcy5sYW5lV2lkdGgpLmpvaW4oXCJcIil9IHwgJHtyb3cuc2xpY2UodGhpcy5sYW5lV2lkdGgpLmpvaW4oXCJcIil9YCkuam9pbihcIlxcblwiKX1cXG5gLFxuICAgICAgbGVnZW5kOiBPYmplY3QuZnJvbUVudHJpZXMoWy4uLmxlZ2VuZC5lbnRyaWVzKCldLm1hcCgoW3N5bWJvbCwgZW50cnldKSA9PiBbXG4gICAgICAgIHN5bWJvbCxcbiAgICAgICAgZW50cnkuc3BlZWQgPT09IDEgPyB7IGlkOiBlbnRyeS5pZCB9IDogeyBpZDogZW50cnkuaWQsIHNwZWVkOiBlbnRyeS5zcGVlZCB9LFxuICAgICAgXSkpLFxuICAgICAgYmFsYW5jZTogdGhpcy5vcHRpb25zLmJhbGFuY2UsXG4gICAgfTtcbiAgICBwYXJzZVRyYWNrRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHRoaXMub3B0aW9ucy5sYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBlbnZpcm9ubWVudDogdGhpcy5vcHRpb25zLmVudmlyb25tZW50LFxuICAgICAgZGVmaW5pdGlvbixcbiAgICB9O1xuICB9XG5cbiAgdmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCByb3dzOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihyb3dPZmZzZXQsIGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiByb3cgb2Zmc2V0YCk7XG4gICAgaWYgKHJvd09mZnNldCA8IDAgfHwgcm93T2Zmc2V0ID49IHJvd3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcm93IG9mZnNldCAke3Jvd09mZnNldH0gaXMgb3V0c2lkZSB0aGUgMC0ke3Jvd3MgLSAxfSBzZWN0aW9uIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlU2VjdGlvblNwYW4oc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIHJvd3M6IG51bWJlciwgY292ZXJlZFJvd3M6IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIoY292ZXJlZFJvd3MsIGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBjb3ZlcmVkIHJvd3NgKTtcbiAgICB0aGlzLnZhbGlkYXRlU2VjdGlvbk9mZnNldChzZWN0aW9uTmFtZSwgcm93T2Zmc2V0LCByb3dzKTtcbiAgICBjb25zdCBsYXN0T2Zmc2V0ID0gcm93T2Zmc2V0ICsgY292ZXJlZFJvd3MgLSAxO1xuICAgIGlmIChsYXN0T2Zmc2V0ID49IHJvd3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcGF0dGVybiByZWFjaGVzIHJvdyBvZmZzZXQgJHtsYXN0T2Zmc2V0fSwgb3V0c2lkZSB0aGUgMC0ke3Jvd3MgLSAxfSBzZWN0aW9uIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGxhY2UoaWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zLCByb3c6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKHJvdywgYCR7bGFiZWx9IHJvd2ApO1xuICAgIGlmIChyb3cgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IHJvdyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgdmFsaWRhdGVDYW5vbmljYWxJZChpZCk7XG4gICAgY29uc3Qgc3BhbiA9IHNwYW5Gb3IoaWQpO1xuICAgIHRoaXMudmFsaWRhdGVDb2x1bW4ob3B0aW9ucy5jb2x1bW4sIGAke2xhYmVsfSBjb2x1bW5gLCBzcGFuKTtcbiAgICB0aGlzLnBsYWNlbWVudHMucHVzaCh7XG4gICAgICByb3csXG4gICAgICBjb2x1bW46IG9wdGlvbnMuY29sdW1uLFxuICAgICAgaWQsXG4gICAgICBzcGVlZDogbm9ybWFsaXplU3BlZWQob3B0aW9ucy5zcGVlZCwgbGFiZWwpLFxuICAgICAgc3BhbixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVDb2x1bW4oY29sdW1uOiBUcmFja0NvbHVtbiwgbGFiZWw6IHN0cmluZywgc3BhbjogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIoY29sdW1uLCBsYWJlbCk7XG4gICAgY29uc3QgdG90YWxXaWR0aCA9IHRoaXMubGFuZVdpZHRoICogMjtcbiAgICBpZiAoY29sdW1uIDwgMCB8fCBjb2x1bW4gPj0gdG90YWxXaWR0aCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSAke2NvbHVtbn0gaXMgb3V0c2lkZSB0aGUgMC0ke3RvdGFsV2lkdGggLSAxfSB0cmFjayByYW5nZS5gKTtcbiAgICBjb25zdCBzaWRlQ29sdW1uID0gY29sdW1uICUgdGhpcy5sYW5lV2lkdGg7XG4gICAgaWYgKHNpZGVDb2x1bW4gKyBzcGFuID4gdGhpcy5sYW5lV2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gJHtjb2x1bW59IGNhbm5vdCBmaXQgYSAke3NwYW59LWNvbHVtbiBlbnRpdHkgaW5zaWRlIGEgJHt0aGlzLmxhbmVXaWR0aH0tY29sdW1uIGxhbmUuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjZWxsc0Zvcihjb2x1bW46IG51bWJlciwgc3BhbjogbnVtYmVyKTogQXJyYXk8eyBnbG9iYWxDb2x1bW46IG51bWJlciB9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHNwYW4gfSwgKF8sIG9mZnNldCkgPT4gKHsgZ2xvYmFsQ29sdW1uOiBjb2x1bW4gKyBvZmZzZXQgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW1ib2xGb3IocGxhY2VtZW50OiBQbGFjZW1lbnQsIHVzZWRTeW1ib2xzOiBTZXQ8c3RyaW5nPiwgc3ltYm9sQnlFbnRpdHk6IE1hcDxzdHJpbmcsIHN0cmluZz4pOiBzdHJpbmcge1xuICAgIGNvbnN0IGtleSA9IGAke3BsYWNlbWVudC5pZH1AJHtwbGFjZW1lbnQuc3BlZWR9YDtcbiAgICBjb25zdCBleGlzdGluZyA9IHN5bWJvbEJ5RW50aXR5LmdldChrZXkpO1xuICAgIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xuICAgIGNvbnN0IHByZWZlcnJlZCA9IHByZWZlcnJlZFN5bWJvbHNbcGxhY2VtZW50LmlkXTtcbiAgICBjb25zdCBzeW1ib2wgPSBwcmVmZXJyZWQgJiYgIXVzZWRTeW1ib2xzLmhhcyhwcmVmZXJyZWQpXG4gICAgICA/IHByZWZlcnJlZFxuICAgICAgOiBmYWxsYmFja1N5bWJvbHMuZmluZChjYW5kaWRhdGUgPT4gIXVzZWRTeW1ib2xzLmhhcyhjYW5kaWRhdGUpKTtcbiAgICBpZiAoIXN5bWJvbCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYnVpbGRlciByYW4gb3V0IG9mIG9uZS1jaGFyYWN0ZXIgbGVnZW5kIHN5bWJvbHMuXCIpO1xuICAgIHVzZWRTeW1ib2xzLmFkZChzeW1ib2wpO1xuICAgIHN5bWJvbEJ5RW50aXR5LnNldChrZXksIHN5bWJvbCk7XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfVxufVxuXG5jbGFzcyBUcmFja1NlY3Rpb25CdWlsZGVyQ29yZSBpbXBsZW1lbnRzIFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICBwcml2YXRlIHJvd09mZnNldCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnQ6IFRyYWNrQnVpbGRlckNvcmUsXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYXNlUm93OiBudW1iZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSByb3dzOiBudW1iZXIsXG4gICkge31cblxuICBhdChyb3dPZmZzZXQ6IG51bWJlcik6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvbk9mZnNldCh0aGlzLm5hbWUsIHJvd09mZnNldCwgdGhpcy5yb3dzKTtcbiAgICB0aGlzLnJvd09mZnNldCA9IHJvd09mZnNldDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uRW5lbXkodGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uV2VhcG9uKHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvblBpY2t1cCh0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIChvcHRpb25zLmNvdW50IC0gMSkgKiAoZ2FwICsgMSkgKyAxKTtcbiAgICB0aGlzLnBhcmVudC5hZGRMaW5lKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGxpbmVgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgKG9wdGlvbnMuY291bnQgLSAxKSAqIChnYXAgKyAxKSArIDEpO1xuICAgIHRoaXMucGFyZW50LmFkZEFsdGVybmF0aW5nKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGFsdGVybmF0aW5nYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRXYWxsKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIHdhbGxgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCBvcHRpb25zLnJvd3MpO1xuICAgIHRoaXMucGFyZW50LmFkZERyaXAodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgZHJpcGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0J1aWxkZXI6IFRyYWNrQnVpbGRlckZhY3RvcnkgPSB7XG4gIGNyZWF0ZShvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKTogVHJhY2tCdWlsZGVyIHtcbiAgICByZXR1cm4gbmV3IFRyYWNrQnVpbGRlckNvcmUob3B0aW9ucyk7XG4gIH0sXG59O1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFRyYWNrVGhlbWVJZCA9IFwiZ3VuU2Nob29sXCIgfCBcImd1YXJkQmxhZGVzXCIgfCBcImNyeXN0YWxTaWVnZVwiIHwgXCJzd2FybUJsb29tXCIgfCBcIm1pcnJvckFycmF5XCI7XG5leHBvcnQgdHlwZSBUcmFja1RpZXIgPSAxIHwgMiB8IDM7XG5leHBvcnQgdHlwZSBUcmFja05vZGVTaGFwZUlkID0gXCJodW50ZXItZXllXCIgfCBcImJydWlzZXItcHJpc21cIiB8IFwiZWxpdGUtc3RhclwiIHwgXCJ0cmljay12b3J0ZXhcIiB8IFwidGFuay1yZWFjdG9yXCIgfCBcInNwaWtlLWxhbmNlXCIgfCBcImh1bnRlci1ib2x0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tDYXRhbG9nRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgdGhlbWU6IFRyYWNrVGhlbWVJZDtcbiAgdGllcjogVHJhY2tUaWVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRmFtaWx5Q2F0YWxvZ0VudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIGFjY2VudDogc3RyaW5nO1xuICB0cmFja0lkczogcmVhZG9ubHkgVHJhY2tDYXRhbG9nSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1RoZW1lQ2F0YWxvZ0VudHJ5IHtcbiAgaWQ6IFRyYWNrVGhlbWVJZDtcbiAgbGFiZWw6IHN0cmluZztcbiAgbm9kZVNoYXBlSWRzOiByZWFkb25seSBUcmFja05vZGVTaGFwZUlkW107XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja1RoZW1lQ2F0YWxvZyA9IHtcbiAgZ3VuU2Nob29sOiB7XG4gICAgaWQ6IFwiZ3VuU2Nob29sXCIsXG4gICAgbGFiZWw6IFwiR3VuIFNjaG9vbFwiLFxuICAgIG5vZGVTaGFwZUlkczogW1wiaHVudGVyLWV5ZVwiLCBcImJydWlzZXItcHJpc21cIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbiAgZ3VhcmRCbGFkZXM6IHtcbiAgICBpZDogXCJndWFyZEJsYWRlc1wiLFxuICAgIGxhYmVsOiBcIkd1YXJkIEJsYWRlc1wiLFxuICAgIG5vZGVTaGFwZUlkczogW1wiZWxpdGUtc3RhclwiLCBcInNwaWtlLWxhbmNlXCIsIFwiaHVudGVyLWJvbHRcIl0sXG4gIH0sXG4gIGNyeXN0YWxTaWVnZToge1xuICAgIGlkOiBcImNyeXN0YWxTaWVnZVwiLFxuICAgIGxhYmVsOiBcIkNyeXN0YWwgU2llZ2VcIixcbiAgICBub2RlU2hhcGVJZHM6IFtcInRhbmstcmVhY3RvclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbiAgc3dhcm1CbG9vbToge1xuICAgIGlkOiBcInN3YXJtQmxvb21cIixcbiAgICBsYWJlbDogXCJTd2FybSBCbG9vbVwiLFxuICAgIG5vZGVTaGFwZUlkczogW1widHJpY2stdm9ydGV4XCIsIFwiaHVudGVyLWV5ZVwiLCBcImh1bnRlci1ib2x0XCJdLFxuICB9LFxuICBtaXJyb3JBcnJheToge1xuICAgIGlkOiBcIm1pcnJvckFycmF5XCIsXG4gICAgbGFiZWw6IFwiTWlycm9yIEFycmF5XCIsXG4gICAgbm9kZVNoYXBlSWRzOiBbXCJzcGlrZS1sYW5jZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxUcmFja1RoZW1lSWQsIFRyYWNrVGhlbWVDYXRhbG9nRW50cnk+O1xuXG5leHBvcnQgY29uc3QgdHJhY2tDYXRhbG9nID0ge1xuICBcIm5lb24tbmVidWxhZS0xXCI6IHtcbiAgICBpZDogXCJuZW9uLW5lYnVsYWUtMVwiLFxuICAgIGxhYmVsOiBcIkZpcnN0IEdsb3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGd1bi1mb3J3YXJkIE5lb24gTmVidWxhZSBvcGVuZXIgd2l0aCBjbGVhciByZWJ1aWxkIHNoZWx2ZXMgYW5kIG9ubHkgYSBmZXcgc2hpZWxkIHNhZmV0eSBuZXRzLlwiLFxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgICB0aWVyOiAxLFxuICB9LFxuICBcIm5lb24tbmVidWxhZS0yXCI6IHtcbiAgICBpZDogXCJuZW9uLW5lYnVsYWUtMlwiLFxuICAgIGxhYmVsOiBcIkRyaWZ0IExlc3NvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbG9uZ2VyIE5lb24gTmVidWxhZSBndW4gbGVzc29uIHRoYXQgYWRkcyB3aW5nIHByZXNzdXJlLCBzdHJvbmdlciBmaXJlYXJtIGNob2ljZXMsIGFuZCBzcGFyc2Ugc2hpZWxkIHJlbGllZi5cIixcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gICAgdGhlbWU6IFwiZ3VuU2Nob29sXCIsXG4gICAgdGllcjogMixcbiAgfSxcbiAgXCJuZW9uLW5lYnVsYWUtM1wiOiB7XG4gICAgaWQ6IFwibmVvbi1uZWJ1bGFlLTNcIixcbiAgICBsYWJlbDogXCJOZWJ1bGEgR2F0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBOZW9uIE5lYnVsYWUgZ3VuIGZpbmFsZSBsYXllcnMgaGVhdmllciBmaXJlYXJtcywgdGFua3MsIGFuZCBzdXN0YWluZWQgbGFuZSByZWFkaW5nIHdpdGhvdXQgbGVhbmluZyBvbiBzcGVlZCBjaGFuZ2VzLlwiLFxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgICB0aWVyOiAzLFxuICB9LFxuICBcImF1cm9yYS0xXCI6IHtcbiAgICBpZDogXCJhdXJvcmEtMVwiLFxuICAgIGxhYmVsOiBcIlNreWJyZWFrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW4gQXVyb3JhIG9wZW5lciBmb2N1c2VkIG9uIHNoaWVsZHMsIHNob3J0IHN3b3JkIHJlYWRzLCBhbmQgcGF0aWVudCBjbG9zZS1yYW5nZSBjbGVhbnVwLlwiLFxuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gICAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgICB0aWVyOiAxLFxuICB9LFxuICBcImF1cm9yYS0yXCI6IHtcbiAgICBpZDogXCJhdXJvcmEtMlwiLFxuICAgIGxhYmVsOiBcIlJpYmJvbiBTdG9ybVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1cm9yYSBwcmVzc3VyZSBleHBhbmRzIGludG8gYWx0ZXJuYXRpbmcgc2hpZWxkIHJlYnVpbGRzLCB3aWRlciBzd29yZCBjaG9pY2VzLCBhbmQgY2x1c3RlcmVkIGNsb3NlLXJhbmdlIHRocmVhdHMuXCIsXG4gICAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICAgIHRpZXI6IDIsXG4gIH0sXG4gIFwiYXVyb3JhLTNcIjoge1xuICAgIGlkOiBcImF1cm9yYS0zXCIsXG4gICAgbGFiZWw6IFwiTWFnbmV0aWMgRGF3blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBBdXJvcmEgZmluYWxlIGFza3MgZm9yIGRlbGliZXJhdGUgc2hpZWxkIHRpbWluZyBhbmQgc3dvcmQgc2VsZWN0aW9uIGFnYWluc3QgbG9uZywgcmVhZGFibGUgdGhyZWF0IHdhdmVzLlwiLFxuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gICAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgICB0aWVyOiAzLFxuICB9LFxuICBcImNyeXN0YWwtZm9yZ2UtMVwiOiB7XG4gICAgaWQ6IFwiY3J5c3RhbC1mb3JnZS0xXCIsXG4gICAgbGFiZWw6IFwiUHJpc20gSWduaXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIENyeXN0YWwgRm9yZ2Ugb3BlbmVyIGJ1aWx0IGFyb3VuZCBidXJzdCBmaXJlLCBnbGFzcyBkZWNveXMsIGFuZCBlYXJseSBoZWF2eS10aHJlYXQgcmVoZWFyc2FsLlwiLFxuICAgIHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gICAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gICAgdGllcjogMSxcbiAgfSxcbiAgXCJjcnlzdGFsLWZvcmdlLTJcIjoge1xuICAgIGlkOiBcImNyeXN0YWwtZm9yZ2UtMlwiLFxuICAgIGxhYmVsOiBcIkZhY2V0IFJ1blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNyeXN0YWwgRm9yZ2UgZGVuc2l0eSBzaGFycGVucyB3aXRoIGhlYXZpZXIgZ3Vucywgc3R1cmRpZXIgc2hpZWxkcywgYW5kIHRhbmsgYnJlYWtzIGZyYW1lZCBieSBnbGFzcyBkZWNveXMuXCIsXG4gICAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgICB0aWVyOiAyLFxuICB9LFxuICBcImNyeXN0YWwtZm9yZ2UtM1wiOiB7XG4gICAgaWQ6IFwiY3J5c3RhbC1mb3JnZS0zXCIsXG4gICAgbGFiZWw6IFwiR2xhc3MgSGFtbWVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIENyeXN0YWwgRm9yZ2UgZmluYWxlIGNvbW1pdHMgdG8gaGVhdnkgd2VhcG9uIHBheW9mZnMsIHJlcGVhdGVkIHRhbmsgbGFuZXMsIGFuZCBwcmlzbWF0aWMgZGVjb3kgcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgICB0aWVyOiAzLFxuICB9LFxuICBcInZvaWQtZ2FyZGVuLTFcIjoge1xuICAgIGlkOiBcInZvaWQtZ2FyZGVuLTFcIixcbiAgICBsYWJlbDogXCJCbG9vbSBTaWduYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIFZvaWQgR2FyZGVuIG9wZW5lciBhYm91dCBncm93aW5nIHRoZSBzcXVhZCBlYXJseSBhbmQgc3VzdGFpbmluZyBjYWxtIGNyb3NzLWxhbmUgYmxvb20gcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gICAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICAgIHRpZXI6IDEsXG4gIH0sXG4gIFwidm9pZC1nYXJkZW4tMlwiOiB7XG4gICAgaWQ6IFwidm9pZC1nYXJkZW4tMlwiLFxuICAgIGxhYmVsOiBcIlJvb3QgTGF0dGljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZvaWQgR2FyZGVuIGFkZHMgZGVuc2VyIHNxdWFkIGdyb3d0aCB3aW5kb3dzLCBzcGxpdCB3ZWFwb24gc3VwcG9ydCwgYW5kIHNsb3ctYmxvb21pbmcgcGFpcmVkIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICAgIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgICB0aWVyOiAyLFxuICB9LFxuICBcInZvaWQtZ2FyZGVuLTNcIjoge1xuICAgIGlkOiBcInZvaWQtZ2FyZGVuLTNcIixcbiAgICBsYWJlbDogXCJOaWdodCBPcmNoYXJkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIFZvaWQgR2FyZGVuIGZpbmFsZSBsZWFucyBpbnRvIHNxdWFkIHJlY292ZXJ5LCBsYXllcmVkIHN1cHBvcnQgcGlja3VwcywgYW5kIGJyb2FkIG9yZ2FuaWMgcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gICAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICAgIHRpZXI6IDMsXG4gIH0sXG4gIFwic29sYXItYXJyYXktMVwiOiB7XG4gICAgaWQ6IFwic29sYXItYXJyYXktMVwiLFxuICAgIGxhYmVsOiBcIlBhbmVsIERhd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIFNvbGFyIEFycmF5IG9wZW5lciB3aXRoIG1pcnJvcmVkIHJlYWRzLCBzcGxpdC1sYW5lIHdlYXBvbiB0aW1pbmcsIGFuZCBicmlnaHQgYnV0IG1lYXN1cmVkIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICAgIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gICAgdGllcjogMSxcbiAgfSxcbiAgXCJzb2xhci1hcnJheS0yXCI6IHtcbiAgICBpZDogXCJzb2xhci1hcnJheS0yXCIsXG4gICAgbGFiZWw6IFwiSGVsaW9zdGF0IFJ1c2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTb2xhciBBcnJheSBwcmVzc3VyZSBncm93cyB0aHJvdWdoIG1pcnJvcmVkIHdhbGxzLCBwcmVjaXNpb24gcmVidWlsZHMsIGFuZCBhbHRlcm5hdGluZyBvdXRlci1sYW5lIHN1cmdlcy5cIixcbiAgICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICAgIHRpZXI6IDIsXG4gIH0sXG4gIFwic29sYXItYXJyYXktM1wiOiB7XG4gICAgaWQ6IFwic29sYXItYXJyYXktM1wiLFxuICAgIGxhYmVsOiBcIk1pcnJvciBaZW5pdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgU29sYXIgQXJyYXkgZmluYWxlIG1peGVzIG1pcnJvcmVkIHRhbmsgYnJlYWtzLCBzcGxpdC1maXJlIHJlYnVpbGRzLCBhbmQgbG9uZy1mb3JtIHByZWNpc2lvbiBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICAgIHRpZXI6IDMsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0NhdGFsb2dFbnRyeT47XG5cbmV4cG9ydCB0eXBlIFRyYWNrQ2F0YWxvZ0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrQ2F0YWxvZztcblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWx5Q2F0YWxvZyA9IHtcbiAgbmVvbk5lYnVsYWU6IHtcbiAgICBpZDogXCJuZW9uTmVidWxhZVwiLFxuICAgIGxhYmVsOiBcIk5lb24gTmVidWxhZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbGVhcm5pbmcgYXJjIGFib3V0IGxhbmVzLCBwaWNrdXBzLCBzaGllbGRzLCBhbmQgY29udHJvbGxlZCBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gICAgYWNjZW50OiBcIiNmZjNiZDVcIixcbiAgICB0cmFja0lkczogW1wibmVvbi1uZWJ1bGFlLTFcIiwgXCJuZW9uLW5lYnVsYWUtMlwiLCBcIm5lb24tbmVidWxhZS0zXCJdLFxuICB9LFxuICBhdXJvcmE6IHtcbiAgICBpZDogXCJhdXJvcmFcIixcbiAgICBsYWJlbDogXCJBdXJvcmFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZW5zZSBwbGFuZXRhcnkgYXNzYXVsdHMgd2l0aCBicmlnaHRlciByZWNvdmVyeSB3aW5kb3dzIGFuZCBzaGFycGVyIHRocmVhdCB3YXZlcy5cIixcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICAgIGFjY2VudDogXCIjMjBlYWZmXCIsXG4gICAgdHJhY2tJZHM6IFtcImF1cm9yYS0xXCIsIFwiYXVyb3JhLTJcIiwgXCJhdXJvcmEtM1wiXSxcbiAgfSxcbiAgY3J5c3RhbEZvcmdlOiB7XG4gICAgaWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gICAgbGFiZWw6IFwiQ3J5c3RhbCBGb3JnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByaXNtYXRpYyBmYWN0b3J5IGxhbmVzIHdpdGggc2hhcnAgcHJlc3N1cmUsIGdsYXNzIGRlY295cywgYW5kIGhlYXZ5IGNyeXN0YWxsaW5lIGJyZWFrcy5cIixcbiAgICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICAgIGFjY2VudDogXCIjOWI0MmZmXCIsXG4gICAgdHJhY2tJZHM6IFtcImNyeXN0YWwtZm9yZ2UtMVwiLCBcImNyeXN0YWwtZm9yZ2UtMlwiLCBcImNyeXN0YWwtZm9yZ2UtM1wiXSxcbiAgfSxcbiAgdm9pZEdhcmRlbjoge1xuICAgIGlkOiBcInZvaWRHYXJkZW5cIixcbiAgICBsYWJlbDogXCJWb2lkIEdhcmRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpb2x1bWluZXNjZW50IG5pZ2h0IGxhbmVzIHdpdGggc3BhcnNlIGJsb29tcywgZGVjb3lzLCBhbmQgY29udHJvbGxlZCByZWNvdmVyeSBwb2NrZXRzLlwiLFxuICAgIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICAgIGFjY2VudDogXCIjNGI4NmZmXCIsXG4gICAgdHJhY2tJZHM6IFtcInZvaWQtZ2FyZGVuLTFcIiwgXCJ2b2lkLWdhcmRlbi0yXCIsIFwidm9pZC1nYXJkZW4tM1wiXSxcbiAgfSxcbiAgc29sYXJBcnJheToge1xuICAgIGlkOiBcInNvbGFyQXJyYXlcIixcbiAgICBsYWJlbDogXCJTb2xhciBBcnJheVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJyaWdodCBvcmJpdGFsIGxhbmVzIHdpdGggbWlycm9yZWQgd2FsbHMsIGZhc3Qgb3V0ZXIgc3VyZ2VzLCBhbmQgZGVjaXNpdmUgaGVhdnkgdG9vbHMuXCIsXG4gICAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gICAgYWNjZW50OiBcIiNmZmIyM2FcIixcbiAgICB0cmFja0lkczogW1wic29sYXItYXJyYXktMVwiLCBcInNvbGFyLWFycmF5LTJcIiwgXCJzb2xhci1hcnJheS0zXCJdLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlDYXRhbG9nRW50cnk+O1xuXG5leHBvcnQgdHlwZSBUcmFja0ZhbWlseUNhdGFsb2dJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseUNhdGFsb2c7XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlsaWVzRnJvbUNhdGFsb2cgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIE9iamVjdC5lbnRyaWVzKHRyYWNrRmFtaWx5Q2F0YWxvZykubWFwKChbaWQsIGZhbWlseV0pID0+IFtcbiAgICBpZCxcbiAgICB7XG4gICAgICBsYWJlbDogZmFtaWx5LmxhYmVsLFxuICAgICAgZGVzY3JpcHRpb246IGZhbWlseS5kZXNjcmlwdGlvbixcbiAgICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IGZhbWlseS5zY2VuZUlkIH0sXG4gICAgICB0cmFja0lkczogZmFtaWx5LnRyYWNrSWRzLFxuICAgIH0sXG4gIF0pLFxuKSBhcyB1bmtub3duIGFzIHsgcmVhZG9ubHkgW0ZhbWlseUlkIGluIFRyYWNrRmFtaWx5Q2F0YWxvZ0lkXTogVHJhY2tGYW1pbHlNZW1iZXI8VHJhY2tDYXRhbG9nSWQ+IH07XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgZ3VuRmFtaWx5IH0gZnJvbSBcIi4uL0d1bkZhbWlseVwiO1xuaW1wb3J0IHsgbGlnaHRuaW5nRmFtaWx5IH0gZnJvbSBcIi4uL0xpZ2h0bmluZ0ZhbWlseVwiO1xuaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuLi9NdWx0aXBsaWVyRmFtaWx5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi4vT3JiRmFtaWx5XCI7XG5pbXBvcnQgeyBzaGllbGRGYW1pbHkgfSBmcm9tIFwiLi4vU2hpZWxkRmFtaWx5XCI7XG5pbXBvcnQgeyBzd29yZEZhbWlseSwgdHlwZSBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Td29yZEZhbWlseVwiO1xuaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrQnVpbGRlciwgdHlwZSBUcmFja0NvbHVtbiwgdHlwZSBUcmFja0VuZW15UmVmLCB0eXBlIFRyYWNrU2VjdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi4vVHJhY2tCdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tDYXRhbG9nLCB0eXBlIFRyYWNrQ2F0YWxvZ0lkLCB0eXBlIFRyYWNrVGhlbWVJZCwgdHlwZSBUcmFja1RpZXIgfSBmcm9tIFwiLi9UcmFja0NhdGFsb2dcIjtcblxuZXhwb3J0IHR5cGUgSm91cm5leUJlYXRLaW5kID0gXCJpbnRyb1wiIHwgXCJyYW1wXCIgfCBcImxlc3NvblwiIHwgXCJwcmVzc3VyZVwiIHwgXCJyZXN0XCIgfCBcInJlYnVpbGRcIiB8IFwiY2hhbGxlbmdlXCIgfCBcImZpbmFsZVwiO1xuZXhwb3J0IHR5cGUgUHJlc3N1cmVMZXZlbCA9IFwibG93XCIgfCBcIm1lZGl1bVwiIHwgXCJoaWdoXCIgfCBcInBlYWtcIjtcbmV4cG9ydCB0eXBlIFByZXNzdXJlU3R5bGUgPSBcImNlbnRlckFsdGVybmF0aW5nXCIgfCBcIm91dGVyQWx0ZXJuYXRpbmdcIiB8IFwibGFuZUxpbmVcIiB8IFwibWlycm9yZWRXYWxsc1wiIHwgXCJ3aWRlU3dlZXBcIiB8IFwidGFua0JyZWFrXCI7XG5leHBvcnQgdHlwZSBQaWNrdXBSb2xlID0gXCJwcmltYXJ5XCIgfCBcInN1cHBvcnRcIiB8IFwiY2xvc2VSYW5nZVwiIHwgXCJ1cGdyYWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm91cm5leUJlYXRSZWNpcGUge1xuICBraW5kOiBKb3VybmV5QmVhdEtpbmQ7XG4gIHByZXNzdXJlPzogUHJlc3N1cmVMZXZlbDtcbiAgcm93cz86IG51bWJlcjtcbiAgcGlja3VwUm9sZXM/OiByZWFkb25seSBQaWNrdXBSb2xlW107XG4gIHN0eWxlcz86IHJlYWRvbmx5IFByZXNzdXJlU3R5bGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1JlY2lwZSB7XG4gIGdvYWxzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgc2VlZDogc3RyaW5nO1xuICBqb3VybmV5OiByZWFkb25seSBKb3VybmV5QmVhdFJlY2lwZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVJlY2lwZSB7XG4gIHRoZW1lOiBUcmFja1RoZW1lSWQ7XG4gIHByZWZlcnJlZFdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzdXBwb3J0V2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIGNsb3NlUmFuZ2VXZWFwb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgcHJlZmVycmVkRW5lbWllczogcmVhZG9ubHkgVHJhY2tFbmVteVJlZltdO1xuICBib3NzRW5lbWllczogcmVhZG9ubHkgVHJhY2tFbmVteVJlZltdO1xuICBwcmVzc3VyZVN0eWxlczogcmVhZG9ubHkgUHJlc3N1cmVTdHlsZVtdO1xuICBvcGVuaW5nV2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIG9wZW5pbmdQaWNrdXBzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIHVwZ3JhZGVTcGFjaW5nOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGllclByb2ZpbGUge1xuICB0YXJnZXRSb3dzOiBudW1iZXI7XG4gIGVuZW15SHA6IG51bWJlcjtcbiAgZW5lbXlTcGVlZDogbnVtYmVyO1xuICBwcmVzc3VyZVRocmVhdDogUmVjb3JkPFByZXNzdXJlTGV2ZWwsIG51bWJlcj47XG4gIHByZXNzdXJlUm93czogUmVjb3JkPFByZXNzdXJlTGV2ZWwsIG51bWJlcj47XG4gIHJlYnVpbGRSb3dzOiBudW1iZXI7XG4gIHJlc3RSb3dzOiBudW1iZXI7XG4gIG1heFdhbGxXaWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnREZWJ1Z1N1bW1hcnkge1xuICBraW5kOiBKb3VybmV5QmVhdEtpbmQ7XG4gIHJvd3M6IG51bWJlcjtcbiAgcHJlc3N1cmU6IFByZXNzdXJlTGV2ZWwgfCBcIm5vbmVcIjtcbiAgdGhyZWF0RXN0aW1hdGU6IG51bWJlcjtcbiAgcGxheWVyUG93ZXJFc3RpbWF0ZTogbnVtYmVyO1xuICBzZWxlY3RlZFdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZFBpY2t1cHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZEVuZW1pZXM6IHJlYWRvbmx5IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2VyRGVidWdTdW1tYXJ5IHtcbiAgc2VlZDogc3RyaW5nO1xuICBzZWVkVmFsdWU6IG51bWJlcjtcbiAgZmFtaWx5SWQ6IFRyYWNrVGhlbWVJZDtcbiAgdHJhY2tJZDogVHJhY2tDYXRhbG9nSWQ7XG4gIHRpZXI6IFRyYWNrVGllcjtcbiAgZ2VuZXJhdGVkUm93czogbnVtYmVyO1xuICBzZWxlY3RlZFdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZFBpY2t1cHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZEVuZW1pZXM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB3ZWFwb25Qb3dlcjogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgbnVtYmVyPj47XG4gIGVuZW15VGhyZWF0OiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PjtcbiAgc2VnbWVudHM6IHJlYWRvbmx5IFNlZ21lbnREZWJ1Z1N1bW1hcnlbXTtcbiAgd2FybmluZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2VkVHJhY2tPcHRpb25zIHtcbiAgdHJhY2tJZD86IFRyYWNrQ2F0YWxvZ0lkO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgdGhlbWU6IFRyYWNrVGhlbWVJZDtcbiAgdGllcjogVHJhY2tUaWVyO1xuICBzZWVkPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29tcG9zZVJlc3VsdCB7XG4gIHRyYWNrOiBUcmFja01lbWJlcjtcbiAgZGVidWc6IENvbXBvc2VyRGVidWdTdW1tYXJ5O1xufVxuXG5pbnRlcmZhY2UgR2VuZXJhdG9yU3RhdGUge1xuICBjdXJzb3I6IG51bWJlcjtcbiAgcGxheWVyUG93ZXI6IG51bWJlcjtcbiAgY3ljbGU6IG51bWJlcjtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRXZWFwb25zOiBTZXQ8c3RyaW5nPjtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRQaWNrdXBzOiBTZXQ8c3RyaW5nPjtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRFbmVtaWVzOiBTZXQ8c3RyaW5nPjtcbiAgcmVhZG9ubHkgc2VnbWVudHM6IFNlZ21lbnREZWJ1Z1N1bW1hcnlbXTtcbiAgcmVhZG9ubHkgd2FybmluZ3M6IHN0cmluZ1tdO1xuICBib3NzZXNQbGFjZWQ6IG51bWJlcjtcbiAgbGFzdEJvc3NUcmFja1JvdzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUm5nIHtcbiAgbmV4dCgpOiBudW1iZXI7XG4gIHBpY2s8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSk6IFQ7XG59XG5cbmNvbnN0IHRpZXJQcm9maWxlczogUmVjb3JkPFRyYWNrVGllciwgVGllclByb2ZpbGU+ID0ge1xuICAxOiB7XG4gICAgdGFyZ2V0Um93czogMTEyLFxuICAgIGVuZW15SHA6IDEsXG4gICAgZW5lbXlTcGVlZDogMSxcbiAgICBwcmVzc3VyZVRocmVhdDogeyBsb3c6IDE4LCBtZWRpdW06IDMwLCBoaWdoOiA0NCwgcGVhazogNTYgfSxcbiAgICBwcmVzc3VyZVJvd3M6IHsgbG93OiAxOCwgbWVkaXVtOiAyNiwgaGlnaDogMzQsIHBlYWs6IDQwIH0sXG4gICAgcmVidWlsZFJvd3M6IDgsXG4gICAgcmVzdFJvd3M6IDIsXG4gICAgbWF4V2FsbFdpZHRoOiA0LFxuICB9LFxuICAyOiB7XG4gICAgdGFyZ2V0Um93czogMjcwLFxuICAgIGVuZW15SHA6IDEsXG4gICAgZW5lbXlTcGVlZDogMSxcbiAgICBwcmVzc3VyZVRocmVhdDogeyBsb3c6IDIwLCBtZWRpdW06IDM0LCBoaWdoOiA1MCwgcGVhazogNjYgfSxcbiAgICBwcmVzc3VyZVJvd3M6IHsgbG93OiAyNCwgbWVkaXVtOiAzNCwgaGlnaDogNDQsIHBlYWs6IDUyIH0sXG4gICAgcmVidWlsZFJvd3M6IDksXG4gICAgcmVzdFJvd3M6IDMsXG4gICAgbWF4V2FsbFdpZHRoOiA0LFxuICB9LFxuICAzOiB7XG4gICAgdGFyZ2V0Um93czogNDMwLFxuICAgIGVuZW15SHA6IDEsXG4gICAgZW5lbXlTcGVlZDogMSxcbiAgICBwcmVzc3VyZVRocmVhdDogeyBsb3c6IDM0LCBtZWRpdW06IDU2LCBoaWdoOiA5MiwgcGVhazogMTM2IH0sXG4gICAgcHJlc3N1cmVSb3dzOiB7IGxvdzogMzAsIG1lZGl1bTogNDIsIGhpZ2g6IDU0LCBwZWFrOiA3NCB9LFxuICAgIHJlYnVpbGRSb3dzOiA4LFxuICAgIHJlc3RSb3dzOiAyLFxuICAgIG1heFdhbGxXaWR0aDogNSxcbiAgfSxcbn07XG5cbmNvbnN0IGZhbWlseVJlY2lwZXM6IFJlY29yZDxUcmFja1RoZW1lSWQsIEZhbWlseVJlY2lwZT4gPSB7XG4gIGd1blNjaG9vbDoge1xuICAgIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICAgIHByZWZlcnJlZFdlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4ubmVlZGxlclNtZ1wiLCBcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgc3VwcG9ydFdlYXBvbnM6IFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgY2xvc2VSYW5nZVdlYXBvbnM6IFtcImxpZ2h0bmluZy5jaGFpblNwYXJrXCIsIFwic3dvcmQuYXJjQmxhZGVcIl0sXG4gICAgcHJlZmVycmVkRW5lbWllczogW1wiYmFzaWNcIiwgXCJnbGFzc1NoaWVsZFwiLCBcIndpbmdlclwiXSxcbiAgICBib3NzRW5lbWllczogW1widGFua1wiXSxcbiAgICBwcmVzc3VyZVN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwibGFuZUxpbmVcIiwgXCJ3aWRlU3dlZXBcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcInNoaWVsZC5saWdodEd1YXJkXCJdLFxuICAgIHVwZ3JhZGVTcGFjaW5nOiAyLFxuICB9LFxuICBndWFyZEJsYWRlczoge1xuICAgIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gICAgcHJlZmVycmVkV2VhcG9uczogW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgcHJlZmVycmVkRW5lbWllczogW1wiYmFzaWNcIiwgXCJnbGFzc1NoaWVsZFwiLCBcIndpbmdlclwiXSxcbiAgICBib3NzRW5lbWllczogW1widGFua1wiXSxcbiAgICBwcmVzc3VyZVN0eWxlczogW1wibGFuZUxpbmVcIiwgXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcInN3b3JkLmFyY0JsYWRlXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDMsXG4gIH0sXG4gIGNyeXN0YWxTaWVnZToge1xuICAgIHRoZW1lOiBcImNyeXN0YWxTaWVnZVwiLFxuICAgIHByZWZlcnJlZFdlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4uc3BsaXR0ZXJSaWZsZVwiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImxpZ2h0bmluZy5mb3JrQ2FwYWNpdG9yXCIsIFwic3dvcmQuY2xlYXZlclwiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wic3dvcmQuY2xlYXZlclwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImdsYXNzU2hpZWxkXCIsIFwiYmFzaWNcIiwgXCJ3aW5nZXJcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcIm1pcnJvcmVkV2FsbHNcIiwgXCJ0YW5rQnJlYWtcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwid2lkZVN3ZWVwXCJdLFxuICAgIG9wZW5pbmdXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiXSxcbiAgICBvcGVuaW5nUGlja3VwczogW1widW5pdE11bHRpcGxpZXIuMnhcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDIsXG4gIH0sXG4gIHN3YXJtQmxvb206IHtcbiAgICB0aGVtZTogXCJzd2FybUJsb29tXCIsXG4gICAgcHJlZmVycmVkV2VhcG9uczogW1wiZ3VuLm5lZWRsZXJTbWdcIiwgXCJzd29yZC5hcmNCbGFkZVwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwibGlnaHRuaW5nLmZvcmtDYXBhY2l0b3JcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sXG4gICAgY2xvc2VSYW5nZVdlYXBvbnM6IFtcInN3b3JkLmFyY0JsYWRlXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIiwgXCJzd29yZC5jbGVhdmVyXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImJhc2ljXCIsIFwid2luZ2VyXCIsIFwiZ2xhc3NTaGllbGRcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwid2lkZVN3ZWVwXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiLCBcImxhbmVMaW5lXCJdLFxuICAgIG9wZW5pbmdXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiXSxcbiAgICBvcGVuaW5nUGlja3VwczogW1widW5pdE11bHRpcGxpZXIuMnhcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDEsXG4gIH0sXG4gIG1pcnJvckFycmF5OiB7XG4gICAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgICBwcmVmZXJyZWRXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJndW4uYnVyc3RDYXJiaW5lXCIsIFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImxpZ2h0bmluZy5mb3JrQ2FwYWNpdG9yXCJdLFxuICAgIHN1cHBvcnRXZWFwb25zOiBbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzaGllbGQuaGV4R3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wibGlnaHRuaW5nLmNoYWluU3BhcmtcIiwgXCJzd29yZC5jbGVhdmVyXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImJhc2ljXCIsIFwiZ2xhc3NTaGllbGRcIiwgXCJ3aW5nZXJcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcIm1pcnJvcmVkV2FsbHNcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJ0YW5rQnJlYWtcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcInNoaWVsZC5saWdodEd1YXJkXCJdLFxuICAgIHVwZ3JhZGVTcGFjaW5nOiAyLFxuICB9LFxufTtcblxuY29uc3QgZGVmYXVsdEpvdXJuZXk6IFJlY29yZDxUcmFja1RpZXIsIHJlYWRvbmx5IEpvdXJuZXlCZWF0UmVjaXBlW10+ID0ge1xuICAxOiBbXG4gICAgeyBraW5kOiBcImludHJvXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwic3VwcG9ydFwiXSB9LFxuICAgIHsga2luZDogXCJsZXNzb25cIiwgcHJlc3N1cmU6IFwibG93XCIgfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicHJlc3N1cmVcIiwgcHJlc3N1cmU6IFwibWVkaXVtXCIgfSxcbiAgICB7IGtpbmQ6IFwicmVzdFwiIH0sXG4gICAgeyBraW5kOiBcImNoYWxsZW5nZVwiLCBwcmVzc3VyZTogXCJoaWdoXCIsIHBpY2t1cFJvbGVzOiBbXCJzdXBwb3J0XCJdIH0sXG4gICAgeyBraW5kOiBcImZpbmFsZVwiLCBwcmVzc3VyZTogXCJoaWdoXCIgfSxcbiAgXSxcbiAgMjogW1xuICAgIHsga2luZDogXCJpbnRyb1wiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInN1cHBvcnRcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInJhbXBcIiwgcHJlc3N1cmU6IFwibG93XCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCJdLCBzdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwibGFuZUxpbmVcIl0gfSxcbiAgICB7IGtpbmQ6IFwibGVzc29uXCIsIHByZXNzdXJlOiBcIm1lZGl1bVwiLCBzdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJzdXBwb3J0XCJdIH0sXG4gICAgeyBraW5kOiBcImNoYWxsZW5nZVwiLCBwcmVzc3VyZTogXCJtZWRpdW1cIiwgc3R5bGVzOiBbXCJsYW5lTGluZVwiLCBcImNlbnRlckFsdGVybmF0aW5nXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJwcmVzc3VyZVwiLCBwcmVzc3VyZTogXCJoaWdoXCIgfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcInBlYWtcIiB9LFxuICAgIHsga2luZDogXCJmaW5hbGVcIiwgcHJlc3N1cmU6IFwicGVha1wiIH0sXG4gIF0sXG4gIDM6IFtcbiAgICB7IGtpbmQ6IFwiaW50cm9cIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJzdXBwb3J0XCIsIFwiY2xvc2VSYW5nZVwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmFtcFwiLCBwcmVzc3VyZTogXCJsb3dcIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIl0sIHN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJsYW5lTGluZVwiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIl0gfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcIm1lZGl1bVwiLCBzdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiLCBcImxhbmVMaW5lXCJdIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInN1cHBvcnRcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInByZXNzdXJlXCIsIHByZXNzdXJlOiBcImhpZ2hcIiB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwiY2xvc2VSYW5nZVwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcInBlYWtcIiB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJzdXBwb3J0XCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJwcmVzc3VyZVwiLCBwcmVzc3VyZTogXCJwZWFrXCIsIHN0eWxlczogW1wid2lkZVN3ZWVwXCIsIFwibWlycm9yZWRXYWxsc1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInN1cHBvcnRcIl0gfSxcbiAgICB7IGtpbmQ6IFwiZmluYWxlXCIsIHByZXNzdXJlOiBcInBlYWtcIiwgc3R5bGVzOiBbXCJ3aWRlU3dlZXBcIiwgXCJtaXJyb3JlZFdhbGxzXCIsIFwid2lkZVN3ZWVwXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICBdLFxufTtcblxuY29uc3QgdHJhY2tSZWNpcGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBPYmplY3QuZW50cmllcyh0cmFja0NhdGFsb2cpLm1hcCgoW3RyYWNrSWQsIGVudHJ5XSkgPT4gW1xuICAgIHRyYWNrSWQsXG4gICAge1xuICAgICAgZ29hbHM6IFtlbnRyeS5kZXNjcmlwdGlvbl0sXG4gICAgICBzZWVkOiBgJHt0cmFja0lkfToke2VudHJ5LnRpZXJ9YCxcbiAgICAgIGpvdXJuZXk6IGRlZmF1bHRKb3VybmV5W2VudHJ5LnRpZXJdLFxuICAgIH0sXG4gIF0pLFxuKSBhcyB1bmtub3duIGFzIFJlY29yZDxUcmFja0NhdGFsb2dJZCwgVHJhY2tSZWNpcGU+O1xuXG5jb25zdCBhbGxDb2x1bW5zID0gW2MubGVmdC5vdXRlciwgYy5sZWZ0Lm5lYXJPdXRlciwgYy5sZWZ0Lm1pZCwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5sZWZ0LmlubmVyLCBjLnJpZ2h0LmlubmVyLCBjLnJpZ2h0Lm5lYXJJbm5lciwgYy5yaWdodC5taWQsIGMucmlnaHQubmVhck91dGVyLCBjLnJpZ2h0Lm91dGVyXSBhcyBjb25zdDtcbmNvbnN0IGNlbnRlckNvbHVtbnMgPSBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdIGFzIGNvbnN0O1xuY29uc3Qgb3V0ZXJDb2x1bW5zID0gW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlciwgYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdIGFzIGNvbnN0O1xuY29uc3QgbGVmdENvbHVtbnMgPSBbYy5sZWZ0Lm91dGVyLCBjLmxlZnQubmVhck91dGVyLCBjLmxlZnQubWlkLCBjLmxlZnQubmVhcklubmVyLCBjLmxlZnQuaW5uZXJdIGFzIGNvbnN0O1xuY29uc3QgcmlnaHRDb2x1bW5zID0gW2MucmlnaHQuaW5uZXIsIGMucmlnaHQubmVhcklubmVyLCBjLnJpZ2h0Lm1pZCwgYy5yaWdodC5uZWFyT3V0ZXIsIGMucmlnaHQub3V0ZXJdIGFzIGNvbnN0O1xuXG5mdW5jdGlvbiBjcmVhdGVSbmcoc2VlZDogc3RyaW5nKTogUm5nICYgeyByZWFkb25seSBzZWVkVmFsdWU6IG51bWJlciB9IHtcbiAgbGV0IHZhbHVlID0gMjE2NjEzNjI2MTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFsdWUgXj0gc2VlZC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICB2YWx1ZSA9IE1hdGguaW11bCh2YWx1ZSwgMTY3Nzc2MTkpO1xuICB9XG4gIHZhbHVlID4+Pj0gMDtcbiAgcmV0dXJuIHtcbiAgICBzZWVkVmFsdWU6IHZhbHVlLFxuICAgIG5leHQoKSB7XG4gICAgICB2YWx1ZSA9IE1hdGguaW11bCh2YWx1ZSArIDB4NmQyYjc5ZjUsIDEpO1xuICAgICAgbGV0IG1peGVkID0gdmFsdWU7XG4gICAgICBtaXhlZCA9IE1hdGguaW11bChtaXhlZCBeIG1peGVkID4+PiAxNSwgbWl4ZWQgfCAxKTtcbiAgICAgIG1peGVkIF49IG1peGVkICsgTWF0aC5pbXVsKG1peGVkIF4gbWl4ZWQgPj4+IDcsIG1peGVkIHwgNjEpO1xuICAgICAgcmV0dXJuICgobWl4ZWQgXiBtaXhlZCA+Pj4gMTQpID4+PiAwKSAvIDQyOTQ5NjcyOTY7XG4gICAgfSxcbiAgICBwaWNrPFQ+KGl0ZW1zOiByZWFkb25seSBUW10pOiBUIHtcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwaWNrIGZyb20gYW4gZW1wdHkgY29sbGVjdGlvbi5cIik7XG4gICAgICByZXR1cm4gaXRlbXNbTWF0aC5mbG9vcih0aGlzLm5leHQoKSAqIGl0ZW1zLmxlbmd0aCldO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbm9uaWNhbFdlYXBvbklkKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uXCIpKSByZXR1cm4gaWQ7XG4gIGNvbnN0IFtmYW1pbHksIG1lbWJlcl0gPSBpZC5zcGxpdChcIi5cIik7XG4gIHJldHVybiBgcGlja3VwLndlYXBvbi4ke2ZhbWlseX0uJHttZW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gbWluaW11bVRpZXJGb3JXZWFwb24oaWQ6IHN0cmluZyk6IFRyYWNrVGllciB7XG4gIGNvbnN0IGNhbm9uaWNhbCA9IGNhbm9uaWNhbFdlYXBvbklkKGlkKTtcbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5ndW4uXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gZ3VuRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5ndW4uXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnNdO1xuICAgIHJldHVybiBtZW1iZXIucmFyaXR5ID09PSBcInN0YXJ0ZXJcIiA/IDEgOiBtZW1iZXIucmFyaXR5ID09PSBcImNvbW1vblwiID8gMiA6IDM7XG4gIH1cbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zd29yZC5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBzd29yZEZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVyc10gYXMgU3dvcmRNZW1iZXI7XG4gICAgcmV0dXJuIG1lbWJlci5yYXJpdHkgPT09IFwic3RhcnRlclwiID8gMSA6IG1lbWJlci5yYXJpdHkgPT09IFwiY29tbW9uXCIgPyAyIDogMztcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVyc107XG4gICAgcmV0dXJuIG1lbWJlci5yYXJpdHkgPT09IFwic3RhcnRlclwiID8gMSA6IG1lbWJlci5yYXJpdHkgPT09IFwiY29tbW9uXCIgPyAyIDogMztcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBsaWdodG5pbmdGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBsaWdodG5pbmdGYW1pbHkubWVtYmVyc107XG4gICAgcmV0dXJuIG1lbWJlci5yYXJpdHkgPT09IFwidW5jb21tb25cIiA/IDMgOiAzO1xuICB9XG4gIHJldHVybiAxO1xufVxuXG5mdW5jdGlvbiBtaW5pbXVtVGllckZvckVuZW15KGlkOiBUcmFja0VuZW15UmVmKTogVHJhY2tUaWVyIHtcbiAgY29uc3QgY2Fub25pY2FsID0gaWQgPT09IFwiYmFzaWNcIiB8fCBpZCA9PT0gXCJlbmVteS5iYXNpY1wiID8gXCJiYXNpY09yYlwiIDogaWQucmVwbGFjZSgvXmVuZW15XFwuLywgXCJcIik7XG4gIGlmIChjYW5vbmljYWwgPT09IFwidGFua1wiKSByZXR1cm4gMztcbiAgaWYgKGNhbm9uaWNhbCA9PT0gXCJ3aW5nZXJcIikgcmV0dXJuIDI7XG4gIHJldHVybiAxO1xufVxuXG5mdW5jdGlvbiB3ZWFwb25Qb3dlcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgY2Fub25pY2FsID0gY2Fub25pY2FsV2VhcG9uSWQoaWQpO1xuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmd1bi5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBndW5GYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmd1bi5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVyc107XG4gICAgY29uc3QgbGV2ZWwgPSBtZW1iZXIubGV2ZWxzWzBdO1xuICAgIHJldHVybiBsZXZlbC5maXJlUmF0ZVBlclNlY29uZCAqIGxldmVsLmRhbWFnZSAqIGxldmVsLnByb2plY3RpbGVDb3VudCAqIGxldmVsLmJ1cnN0Q291bnQgKiAoMSArIGxldmVsLnBpZXJjZSAqIDAuMzUpO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gc3dvcmRGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnNdIGFzIFN3b3JkTWVtYmVyO1xuICAgIHJldHVybiBtZW1iZXIuZGFtYWdlICogbWVtYmVyLm1heFRhcmdldHMgLyBtZW1iZXIuY29vbGRvd25TZWNvbmRzICogKG1lbWJlci5yb3dSZWFjaCA/IDEuMzUgOiAxKTtcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVyc107XG4gICAgcmV0dXJuIG1lbWJlci5tYXhDaGFyZ2VzICogMC44ICsgbWVtYmVyLnJhZGl1cyAvIDMwO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzXTtcbiAgICBjb25zdCBsZXZlbCA9IG1lbWJlci5sZXZlbHNbMF07XG4gICAgcmV0dXJuIGxldmVsLmRhbWFnZSAqIChsZXZlbC5tYXhKdW1wcyArIGxldmVsLmJyYW5jaEZhbm91dCkgLyBsZXZlbC5jb29sZG93blNlY29uZHM7XG4gIH1cbiAgcmV0dXJuIDE7XG59XG5cbmZ1bmN0aW9uIGVuZW15VGhyZWF0KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBtZW1iZXJJZCA9IGlkID09PSBcImJhc2ljXCIgfHwgaWQgPT09IFwiZW5lbXkuYmFzaWNcIiA/IFwiYmFzaWNPcmJcIiA6IGlkLnJlcGxhY2UoL15lbmVteVxcLi8sIFwiXCIpIGFzIE9yYklkO1xuICBjb25zdCBlbmVteSA9IG9yYkZhbWlseS5tZW1iZXJzW21lbWJlcklkIGFzIGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVyc107XG4gIHJldHVybiBlbmVteS5oZWFsdGggKiAyICsgZW5lbXkuc3BlZWQgLyA1OCArIGVuZW15LmNvbHVtblNwYW4gKiAxLjQgKyBlbmVteS5jb250YWN0RGFtYWdlICogMS42ICsgZW5lbXkuaW1wYWN0UmVzaXN0YW5jZTtcbn1cblxuZnVuY3Rpb24gZW5lbXlDb2x1bW5TcGFuKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBtZW1iZXJJZCA9IGlkID09PSBcImJhc2ljXCIgfHwgaWQgPT09IFwiZW5lbXkuYmFzaWNcIiA/IFwiYmFzaWNPcmJcIiA6IGlkLnJlcGxhY2UoL15lbmVteVxcLi8sIFwiXCIpIGFzIE9yYklkO1xuICByZXR1cm4gb3JiRmFtaWx5Lm1lbWJlcnNbbWVtYmVySWQgYXMga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzXS5jb2x1bW5TcGFuO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBQb3dlcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgaWYgKGlkID09PSBcInVuaXRNdWx0aXBsaWVyLjJ4XCIgfHwgaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHtcbiAgICByZXR1cm4gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZS5zcXVhZEFkZGVkICogNDtcbiAgfVxuICByZXR1cm4gd2VhcG9uUG93ZXIoaWQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZSgpOiBHZW5lcmF0b3JTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgY3Vyc29yOiAxLFxuICAgIHBsYXllclBvd2VyOiAxLFxuICAgIGN5Y2xlOiAwLFxuICAgIHNlbGVjdGVkV2VhcG9uczogbmV3IFNldCgpLFxuICAgIHNlbGVjdGVkUGlja3VwczogbmV3IFNldCgpLFxuICAgIHNlbGVjdGVkRW5lbWllczogbmV3IFNldCgpLFxuICAgIHNlZ21lbnRzOiBbXSxcbiAgICB3YXJuaW5nczogW10sXG4gICAgYm9zc2VzUGxhY2VkOiAwLFxuICAgIGxhc3RCb3NzVHJhY2tSb3c6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcm93c0ZvckJlYXQoYmVhdDogSm91cm5leUJlYXRSZWNpcGUsIHByb2ZpbGU6IFRpZXJQcm9maWxlKTogbnVtYmVyIHtcbiAgaWYgKGJlYXQucm93cykgcmV0dXJuIGJlYXQucm93cztcbiAgaWYgKGJlYXQua2luZCA9PT0gXCJpbnRyb1wiKSByZXR1cm4gcHJvZmlsZS5yZWJ1aWxkUm93cztcbiAgaWYgKGJlYXQua2luZCA9PT0gXCJyZWJ1aWxkXCIpIHJldHVybiBwcm9maWxlLnJlYnVpbGRSb3dzO1xuICBpZiAoYmVhdC5raW5kID09PSBcInJlc3RcIikgcmV0dXJuIHByb2ZpbGUucmVzdFJvd3M7XG4gIGlmIChiZWF0LmtpbmQgPT09IFwicmFtcFwiKSByZXR1cm4gcHJvZmlsZS5wcmVzc3VyZVJvd3MubWVkaXVtO1xuICByZXR1cm4gcHJvZmlsZS5wcmVzc3VyZVJvd3NbYmVhdC5wcmVzc3VyZSA/PyBcIm1lZGl1bVwiXTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0V2VhcG9uKHJlY2lwZTogRmFtaWx5UmVjaXBlLCByb2xlOiBQaWNrdXBSb2xlLCB0aWVyOiBUcmFja1RpZXIsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgcm5nOiBSbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKHJvbGUgPT09IFwidXBncmFkZVwiKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcmF3UG9vbCA9IHJvbGUgPT09IFwic3VwcG9ydFwiXG4gICAgPyByZWNpcGUuc3VwcG9ydFdlYXBvbnNcbiAgICA6IHJvbGUgPT09IFwiY2xvc2VSYW5nZVwiXG4gICAgPyByZWNpcGUuY2xvc2VSYW5nZVdlYXBvbnNcbiAgICA6IHJlY2lwZS5wcmVmZXJyZWRXZWFwb25zO1xuICBjb25zdCByb2xlUG9vbCA9IHJvbGUgPT09IFwiY2xvc2VSYW5nZVwiXG4gICAgPyByYXdQb29sXG4gICAgOiByb2xlID09PSBcInByaW1hcnlcIlxuICAgID8gcmF3UG9vbC5maWx0ZXIod2VhcG9uID0+ICFjYW5vbmljYWxXZWFwb25JZCh3ZWFwb24pLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpXG4gICAgOiByYXdQb29sO1xuICBjb25zdCBwb29sID0gcm9sZVBvb2wubGVuZ3RoID4gMCA/IHJvbGVQb29sIDogcmF3UG9vbDtcbiAgY29uc3QgdGllclBvb2wgPSBwb29sLmZpbHRlcih3ZWFwb24gPT4gbWluaW11bVRpZXJGb3JXZWFwb24od2VhcG9uKSA8PSB0aWVyKTtcbiAgY29uc3QgYXZhaWxhYmxlUG9vbCA9IHRpZXJQb29sLmxlbmd0aCA+IDAgPyB0aWVyUG9vbCA6IHBvb2wuZmlsdGVyKHdlYXBvbiA9PiBtaW5pbXVtVGllckZvcldlYXBvbih3ZWFwb24pID09PSAxKTtcbiAgaWYgKGF2YWlsYWJsZVBvb2wubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUud2FybmluZ3MucHVzaChgTm8gJHtyb2xlfSB3ZWFwb24gd2FzIGF2YWlsYWJsZSBmb3IgdGllciAke3RpZXJ9IGluICR7cmVjaXBlLnRoZW1lfS5gKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBvZmZzZXQgPSBNYXRoLm1pbihhdmFpbGFibGVQb29sLmxlbmd0aCAtIDEsIHN0YXRlLmN5Y2xlKTtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IGF2YWlsYWJsZVBvb2wuc2xpY2Uob2Zmc2V0KS5jb25jYXQoYXZhaWxhYmxlUG9vbC5zbGljZSgwLCBvZmZzZXQpKTtcbiAgcmV0dXJuIHJuZy5waWNrKGNhbmRpZGF0ZXMpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVBpY2t1cHMoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgcmVjaXBlOiBGYW1pbHlSZWNpcGUsIGJlYXQ6IEpvdXJuZXlCZWF0UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgcm5nOiBSbmcpOiB7IHdlYXBvbnM6IHN0cmluZ1tdOyBwaWNrdXBzOiBzdHJpbmdbXSB9IHtcbiAgY29uc3Qgcm9sZXMgPSBiZWF0LnBpY2t1cFJvbGVzID8/IFtdO1xuICBjb25zdCBjb2x1bW5zID0gW2MubGVmdC5taWQsIGMucmlnaHQubWlkLCBjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlciwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXJdIGFzIGNvbnN0O1xuICBjb25zdCB3ZWFwb25zOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBwaWNrdXBzOiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgcm93ID0gMDtcbiAgZm9yIChjb25zdCByb2xlIG9mIHJvbGVzKSB7XG4gICAgaWYgKHJvbGUgPT09IFwidXBncmFkZVwiKSB7XG4gICAgICBjb25zdCBhdXRob3JlZFVwZ3JhZGUgPSBiZWF0LnBpY2t1cFJvbGVzPy5pbmNsdWRlcyhcInVwZ3JhZGVcIikgPz8gZmFsc2U7XG4gICAgICBpZiAoYXV0aG9yZWRVcGdyYWRlIHx8IHN0YXRlLmN5Y2xlICUgcmVjaXBlLnVwZ3JhZGVTcGFjaW5nID09PSAwKSB7XG4gICAgICAgIHNlY3Rpb24uYXQocm93KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogY29sdW1uc1socm93ICsgMSkgJSBjb2x1bW5zLmxlbmd0aF0gfSk7XG4gICAgICAgIHN0YXRlLnBsYXllclBvd2VyICs9IHBpY2t1cFBvd2VyKFwidW5pdE11bHRpcGxpZXIuMnhcIik7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkUGlja3Vwcy5hZGQoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIik7XG4gICAgICAgIHBpY2t1cHMucHVzaChcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd2VhcG9uID0gc2VsZWN0V2VhcG9uKHJlY2lwZSwgcm9sZSwgdGllciwgc3RhdGUsIHJuZyk7XG4gICAgICBpZiAod2VhcG9uKSB7XG4gICAgICAgIHNlY3Rpb24uYXQocm93KS53ZWFwb24od2VhcG9uLCB7IGNvbHVtbjogY29sdW1uc1tyb3cgJSBjb2x1bW5zLmxlbmd0aF0gfSk7XG4gICAgICAgIHN0YXRlLnBsYXllclBvd2VyICs9IHdlYXBvblBvd2VyKHdlYXBvbik7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkV2VhcG9ucy5hZGQoY2Fub25pY2FsV2VhcG9uSWQod2VhcG9uKSk7XG4gICAgICAgIHdlYXBvbnMucHVzaChjYW5vbmljYWxXZWFwb25JZCh3ZWFwb24pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm93ICs9IDI7XG4gIH1cbiAgcmV0dXJuIHsgd2VhcG9ucywgcGlja3VwcyB9O1xufVxuXG5mdW5jdGlvbiBlbmVteUZvclRocmVhdChyZWNpcGU6IEZhbWlseVJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCB0YXJnZXQ6IG51bWJlcik6IFRyYWNrRW5lbXlSZWYge1xuICBjb25zdCBhbGxvd2VkRW5lbWllcyA9IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzLmZpbHRlcihpZCA9PiBtaW5pbXVtVGllckZvckVuZW15KGlkKSA8PSB0aWVyKTtcbiAgY29uc3QgcG9vbCA9IGFsbG93ZWRFbmVtaWVzLmxlbmd0aCA+IDAgPyBhbGxvd2VkRW5lbWllcyA6IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzO1xuICBjb25zdCBjYW5kaWRhdGVzID0gcG9vbC5maWx0ZXIoaWQgPT4gZW5lbXlUaHJlYXQoaWQpIDw9IHRhcmdldCArIDQpO1xuICByZXR1cm4gY2FuZGlkYXRlc1tjYW5kaWRhdGVzLmxlbmd0aCAtIDFdID8/IHBvb2xbMF07XG59XG5cbmZ1bmN0aW9uIGVuZW15Rm9yUHJlc3N1cmUocmVjaXBlOiBGYW1pbHlSZWNpcGUsIHRpZXI6IFRyYWNrVGllciwgcHJlc3N1cmU6IFByZXNzdXJlTGV2ZWwsIHJvdzogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcik6IFRyYWNrRW5lbXlSZWYge1xuICBpZiAodGllciA9PT0gMiAmJiAocHJlc3N1cmUgPT09IFwibG93XCIgfHwgcHJlc3N1cmUgPT09IFwibWVkaXVtXCIpKSB7XG4gICAgY29uc3QgaGFzR2xhc3MgPSByZWNpcGUucHJlZmVycmVkRW5lbWllcy5pbmNsdWRlcyhcImdsYXNzU2hpZWxkXCIpO1xuICAgIGNvbnN0IGhhc1dpbmdlciA9IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzLmluY2x1ZGVzKFwid2luZ2VyXCIpO1xuICAgIGlmIChoYXNXaW5nZXIgJiYgcm93ICUgNyA9PT0gMCkgcmV0dXJuIFwid2luZ2VyXCI7XG4gICAgaWYgKGhhc0dsYXNzKSByZXR1cm4gXCJnbGFzc1NoaWVsZFwiO1xuICB9XG4gIHJldHVybiBlbmVteUZvclRocmVhdChyZWNpcGUsIHRpZXIsIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGJvc3NGb3JQcmVzc3VyZShyZWNpcGU6IEZhbWlseVJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUpOiBUcmFja0VuZW15UmVmIHwgbnVsbCB7XG4gIGNvbnN0IGF2YWlsYWJsZUJvc3NlcyA9IHJlY2lwZS5ib3NzRW5lbWllcy5maWx0ZXIoaWQgPT4gbWluaW11bVRpZXJGb3JFbmVteShpZCkgPD0gdGllciArIDEpO1xuICBpZiAoYXZhaWxhYmxlQm9zc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLndhcm5pbmdzLnB1c2goYE5vIGJvc3MgZW5lbXkgaXMgYXZhaWxhYmxlIGZvciAke3JlY2lwZS50aGVtZX0gYXQgdGllciAke3RpZXJ9LmApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBhdmFpbGFibGVCb3NzZXNbc3RhdGUuYm9zc2VzUGxhY2VkICUgYXZhaWxhYmxlQm9zc2VzLmxlbmd0aF07XG59XG5cbmZ1bmN0aW9uIGNhblBsYWNlQm9zcyh0aWVyOiBUcmFja1RpZXIsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgdHJhY2tSb3c6IG51bWJlcik6IGJvb2xlYW4ge1xuICBjb25zdCBtYXhCb3NzZXMgPSB0aWVyID09PSAyID8gMiA6IHRpZXIgPj0gMyA/IDQgOiAwO1xuICBjb25zdCBtaW5TcGFjaW5nID0gdGllciA9PT0gMiA/IDM0IDogNTg7XG4gIHJldHVybiBzdGF0ZS5ib3NzZXNQbGFjZWQgPCBtYXhCb3NzZXMgJiYgdHJhY2tSb3cgLSBzdGF0ZS5sYXN0Qm9zc1RyYWNrUm93ID49IG1pblNwYWNpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbHVtbnNGb3JTdHlsZShzdHlsZTogUHJlc3N1cmVTdHlsZSwgcm5nOiBSbmcsIG1heFdhbGxXaWR0aDogbnVtYmVyKTogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSB7XG4gIGlmIChzdHlsZSA9PT0gXCJjZW50ZXJBbHRlcm5hdGluZ1wiKSByZXR1cm4gY2VudGVyQ29sdW1ucztcbiAgaWYgKHN0eWxlID09PSBcIm91dGVyQWx0ZXJuYXRpbmdcIikgcmV0dXJuIG91dGVyQ29sdW1ucztcbiAgaWYgKHN0eWxlID09PSBcIndpZGVTd2VlcFwiKSByZXR1cm4gcm5nLm5leHQoKSA+IDAuNSA/IGxlZnRDb2x1bW5zLnNsaWNlKDAsIG1heFdhbGxXaWR0aCkgOiByaWdodENvbHVtbnMuc2xpY2UoMCwgbWF4V2FsbFdpZHRoKTtcbiAgaWYgKHN0eWxlID09PSBcIm1pcnJvcmVkV2FsbHNcIikgcmV0dXJuIFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlciwgYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLnNsaWNlKDAsIE1hdGgubWF4KDIsIE1hdGgubWluKDQsIG1heFdhbGxXaWR0aCkpKTtcbiAgaWYgKHN0eWxlID09PSBcInRhbmtCcmVha1wiKSByZXR1cm4gcm5nLm5leHQoKSA+IDAuNSA/IFtjLmxlZnQubmVhck91dGVyXSA6IFtjLnJpZ2h0LmlubmVyXTtcbiAgcmV0dXJuIHJuZy5uZXh0KCkgPiAwLjUgPyBbYy5sZWZ0Lm5lYXJPdXRlcl0gOiBbYy5yaWdodC5uZWFyT3V0ZXJdO1xufVxuXG5mdW5jdGlvbiBjb2x1bW5zVGhhdEZpdChlbmVteTogVHJhY2tFbmVteVJlZiwgY29sdW1uczogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSk6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW10ge1xuICBjb25zdCBzcGFuID0gZW5lbXlDb2x1bW5TcGFuKGVuZW15KTtcbiAgcmV0dXJuIGNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4gJSA1ICsgc3BhbiA8PSA1KTtcbn1cblxuZnVuY3Rpb24gbm9uT3ZlcmxhcHBpbmdDb2x1bW5zKGVuZW15OiBUcmFja0VuZW15UmVmLCBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdKTogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSB7XG4gIGNvbnN0IHNwYW4gPSBlbmVteUNvbHVtblNwYW4oZW5lbXkpO1xuICBjb25zdCBvY2N1cGllZCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICBjb25zdCBzZWxlY3RlZDogVHJhY2tDb2x1bW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XG4gICAgY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzcGFuIH0sIChfLCBvZmZzZXQpID0+IGNvbHVtbiArIG9mZnNldCk7XG4gICAgaWYgKGNlbGxzLnNvbWUoY2VsbCA9PiBvY2N1cGllZC5oYXMoY2VsbCkpKSBjb250aW51ZTtcbiAgICBzZWxlY3RlZC5wdXNoKGNvbHVtbik7XG4gICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSBvY2N1cGllZC5hZGQoY2VsbCk7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdGVkO1xufVxuXG5mdW5jdGlvbiBwbGFjZVByZXNzdXJlKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIsIHJlY2lwZTogRmFtaWx5UmVjaXBlLCBiZWF0OiBKb3VybmV5QmVhdFJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCBwcm9maWxlOiBUaWVyUHJvZmlsZSwgc3RhdGU6IEdlbmVyYXRvclN0YXRlLCBybmc6IFJuZywgc3RhcnRSb3cgPSAwKTogeyB0aHJlYXQ6IG51bWJlcjsgZW5lbWllczogc3RyaW5nW10gfSB7XG4gIGNvbnN0IHByZXNzdXJlID0gYmVhdC5wcmVzc3VyZSA/PyBcIm1lZGl1bVwiO1xuICBjb25zdCB0YXJnZXRUaHJlYXQgPSBwcm9maWxlLnByZXNzdXJlVGhyZWF0W3ByZXNzdXJlXSArIHN0YXRlLnBsYXllclBvd2VyICogKHByZXNzdXJlID09PSBcInBlYWtcIiA/IDAuNDUgOiAwLjI1KTtcbiAgY29uc3QgYmFzZVN0eWxlcyA9IGJlYXQuc3R5bGVzID8/IHJlY2lwZS5wcmVzc3VyZVN0eWxlcztcbiAgY29uc3Qgc3R5bGVzID0gdGllciA9PT0gMSAmJiBwcmVzc3VyZSA9PT0gXCJoaWdoXCJcbiAgICA/IFsuLi5iYXNlU3R5bGVzLCBcIndpZGVTd2VlcFwiLCBcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIl0gYXMgY29uc3RcbiAgICA6IHRpZXIgPj0gMyAmJiBwcmVzc3VyZSA9PT0gXCJwZWFrXCJcbiAgICA/IFsuLi5iYXNlU3R5bGVzLCBcIndpZGVTd2VlcFwiLCBcIndpZGVTd2VlcFwiLCBcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIiwgXCJtaXJyb3JlZFdhbGxzXCJdIGFzIGNvbnN0XG4gICAgOiBiYXNlU3R5bGVzO1xuICBsZXQgcm93ID0gc3RhcnRSb3c7XG4gIGxldCBlbWl0dGVkVGhyZWF0ID0gMDtcbiAgY29uc3QgZW5lbWllcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBiZWF0Um93cyA9IHJvd3NGb3JCZWF0KGJlYXQsIHByb2ZpbGUpO1xuICB3aGlsZSAocm93IDwgYmVhdFJvd3MgLSAxKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBybmcucGljayhzdHlsZXMpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW5zRm9yU3R5bGUoc3R5bGUsIHJuZywgcHJvZmlsZS5tYXhXYWxsV2lkdGgpO1xuICAgIGNvbnN0IHJlbWFpbmluZ1RocmVhdCA9IE1hdGgubWF4KDAsIHRhcmdldFRocmVhdCAtIGVtaXR0ZWRUaHJlYXQpO1xuICAgIGNvbnN0IHRyYWNrUm93ID0gc3RhdGUuY3Vyc29yICsgcm93O1xuICAgIGNvbnN0IHRpZXJUd29GaW5hbGVCb3NzUm93cyA9IFtcbiAgICAgIHN0YXJ0Um93ICsgTWF0aC5mbG9vcigoYmVhdFJvd3MgLSBzdGFydFJvdykgKiAuMyksXG4gICAgICBzdGFydFJvdyArIE1hdGguZmxvb3IoKGJlYXRSb3dzIC0gc3RhcnRSb3cpICogLjcyKSxcbiAgICBdO1xuICAgIGNvbnN0IHRpZXJUd29GaW5hbGVCb3NzID0gdGllciA9PT0gMlxuICAgICAgJiYgYmVhdC5raW5kID09PSBcImZpbmFsZVwiXG4gICAgICAmJiBzdGF0ZS5ib3NzZXNQbGFjZWQgPCB0aWVyVHdvRmluYWxlQm9zc1Jvd3MubGVuZ3RoXG4gICAgICAmJiByb3cgPj0gdGllclR3b0ZpbmFsZUJvc3NSb3dzW3N0YXRlLmJvc3Nlc1BsYWNlZF1cbiAgICAgICYmIGNhblBsYWNlQm9zcyh0aWVyLCBzdGF0ZSwgdHJhY2tSb3cpO1xuICAgIGNvbnN0IHRpZXJUaHJlZUJvc3MgPSB0aWVyID49IDNcbiAgICAgICYmIGNhblBsYWNlQm9zcyh0aWVyLCBzdGF0ZSwgdHJhY2tSb3cpXG4gICAgICAmJiBlbWl0dGVkVGhyZWF0IDwgdGFyZ2V0VGhyZWF0ICogMS4xNVxuICAgICAgJiYgKHN0eWxlID09PSBcInRhbmtCcmVha1wiIHx8IChwcmVzc3VyZSA9PT0gXCJwZWFrXCIgJiYgcmVtYWluaW5nVGhyZWF0ID4gMTggJiYgcm93ID4gMTIpKTtcbiAgICBjb25zdCBzaG91bGRVc2VIZWF2eSA9IHRpZXJUd29GaW5hbGVCb3NzIHx8IHRpZXJUaHJlZUJvc3M7XG4gICAgY29uc3QgYm9zc0VuZW15ID0gc2hvdWxkVXNlSGVhdnkgPyBib3NzRm9yUHJlc3N1cmUocmVjaXBlLCB0aWVyLCBzdGF0ZSkgOiBudWxsO1xuICAgIGNvbnN0IGVuZW15ID0gc2hvdWxkVXNlSGVhdnlcbiAgICAgID8gYm9zc0VuZW15ID8/IGVuZW15Rm9yUHJlc3N1cmUocmVjaXBlLCB0aWVyLCBwcmVzc3VyZSwgcm93LCBNYXRoLm1heCg0LCByZW1haW5pbmdUaHJlYXQgLyBNYXRoLm1heCgxLCBjb2x1bW5zLmxlbmd0aCkpKVxuICAgICAgOiBlbmVteUZvclByZXNzdXJlKHJlY2lwZSwgdGllciwgcHJlc3N1cmUsIHJvdywgTWF0aC5tYXgoNCwgcmVtYWluaW5nVGhyZWF0IC8gTWF0aC5tYXgoMSwgY29sdW1ucy5sZW5ndGgpKSk7XG4gICAgaWYgKHRpZXJUd29GaW5hbGVCb3NzICYmIGJvc3NFbmVteSkge1xuICAgICAgY29uc3QgY29sdW1uID0gc3RhdGUuYm9zc2VzUGxhY2VkICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0LmlubmVyO1xuICAgICAgc2VjdGlvbi5hdChyb3cpLmVuZW15KGJvc3NFbmVteSwgeyBjb2x1bW4gfSk7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IGVuZW15VGhyZWF0KGJvc3NFbmVteSk7XG4gICAgICBzdGF0ZS5ib3NzZXNQbGFjZWQrKztcbiAgICAgIHN0YXRlLmxhc3RCb3NzVHJhY2tSb3cgPSB0cmFja1JvdztcbiAgICAgIGVuZW1pZXMuYWRkKGJvc3NFbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7Ym9zc0VuZW15fWApO1xuICAgICAgcm93ICs9IDEyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICh0aWVyVGhyZWVCb3NzICYmIGJvc3NFbmVteSkge1xuICAgICAgY29uc3QgY29sdW1uID0gc3RhdGUuYm9zc2VzUGxhY2VkICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0LmlubmVyO1xuICAgICAgc2VjdGlvbi5hdChyb3cpLmVuZW15KGJvc3NFbmVteSwgeyBjb2x1bW4gfSk7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IGVuZW15VGhyZWF0KGJvc3NFbmVteSk7XG4gICAgICBzdGF0ZS5ib3NzZXNQbGFjZWQrKztcbiAgICAgIHN0YXRlLmxhc3RCb3NzVHJhY2tSb3cgPSB0cmFja1JvdztcbiAgICAgIGVuZW1pZXMuYWRkKGJvc3NFbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7Ym9zc0VuZW15fWApO1xuICAgICAgcm93ICs9IDE0O1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGZpdHRpbmdDb2x1bW5zID0gY29sdW1uc1RoYXRGaXQoZW5lbXksIGNvbHVtbnMpO1xuICAgIGNvbnN0IHNhZmVFbmVteSA9IGZpdHRpbmdDb2x1bW5zLmxlbmd0aCA+IDAgPyBlbmVteSA6IFwiYmFzaWNcIjtcbiAgICBjb25zdCBzYWZlQ29sdW1ucyA9IG5vbk92ZXJsYXBwaW5nQ29sdW1ucyhzYWZlRW5lbXksIGZpdHRpbmdDb2x1bW5zLmxlbmd0aCA+IDAgPyBmaXR0aW5nQ29sdW1ucyA6IGNvbHVtbnNUaGF0Rml0KFwiYmFzaWNcIiwgY29sdW1ucykpO1xuICAgIGNvbnN0IHRocmVhdCA9IGVuZW15VGhyZWF0KHNhZmVFbmVteSkgKiBzYWZlQ29sdW1ucy5sZW5ndGg7XG4gICAgY29uc3QgYnJlYXRoUm93cyA9IHRpZXIgPT09IDEgJiYgcHJlc3N1cmUgIT09IFwiaGlnaFwiICYmIHByZXNzdXJlICE9PSBcInBlYWtcIiA/IDEgOiAwO1xuICAgIGlmIChzdHlsZSA9PT0gXCJsYW5lTGluZVwiICYmIHNhZmVDb2x1bW5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1pbig4LCBNYXRoLm1heCgxLCBiZWF0Um93cyAtIHJvdyAtIDEpKTtcbiAgICAgIHNlY3Rpb24uYXQocm93KS5saW5lKHNhZmVFbmVteSwgeyBjb2x1bW46IHNhZmVDb2x1bW5zWzBdLCBjb3VudCB9KTtcbiAgICAgIHJvdyArPSBjb3VudCArIGJyZWF0aFJvd3M7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IGVuZW15VGhyZWF0KHNhZmVFbmVteSkgKiBjb3VudDtcbiAgICB9IGVsc2UgaWYgKHN0eWxlID09PSBcIm1pcnJvcmVkV2FsbHNcIiB8fCBzdHlsZSA9PT0gXCJ3aWRlU3dlZXBcIiB8fCAodGllciA9PT0gMSAmJiBwcmVzc3VyZSA9PT0gXCJoaWdoXCIgJiYgc2FmZUNvbHVtbnMubGVuZ3RoID4gMSkpIHtcbiAgICAgIHNlY3Rpb24uYXQocm93KS53YWxsKHNhZmVFbmVteSwgeyBjb2x1bW5zOiBzYWZlQ29sdW1ucyB9KTtcbiAgICAgIHJvdyArPSBwcmVzc3VyZSA9PT0gXCJsb3dcIiA/IDMgOiAyO1xuICAgICAgZW1pdHRlZFRocmVhdCArPSB0aHJlYXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4oMTQsIE1hdGgubWF4KDEsIGJlYXRSb3dzIC0gcm93IC0gMSkpO1xuICAgICAgc2VjdGlvbi5hdChyb3cpLmFsdGVybmF0aW5nKHNhZmVFbmVteSwgeyBjb2x1bW5zOiBzYWZlQ29sdW1ucywgY291bnQgfSk7XG4gICAgICByb3cgKz0gY291bnQgKyBicmVhdGhSb3dzO1xuICAgICAgZW1pdHRlZFRocmVhdCArPSBlbmVteVRocmVhdChzYWZlRW5lbXkpICogY291bnQ7XG4gICAgfVxuICAgIGVuZW1pZXMuYWRkKHNhZmVFbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7c2FmZUVuZW15fWApO1xuICB9XG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZW5lbWllcykgc3RhdGUuc2VsZWN0ZWRFbmVtaWVzLmFkZChlbmVteSk7XG4gIHJldHVybiB7IHRocmVhdDogZW1pdHRlZFRocmVhdCwgZW5lbWllczogWy4uLmVuZW1pZXNdIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVCZWF0KGJ1aWxkZXI6IFRyYWNrQnVpbGRlciwgcmVjaXBlOiBGYW1pbHlSZWNpcGUsIGJlYXQ6IEpvdXJuZXlCZWF0UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHByb2ZpbGU6IFRpZXJQcm9maWxlLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUsIHJuZzogUm5nKTogdm9pZCB7XG4gIGNvbnN0IHJvd3MgPSByb3dzRm9yQmVhdChiZWF0LCBwcm9maWxlKTtcbiAgY29uc3Qgc2VnbWVudFN0YXJ0UG93ZXIgPSBzdGF0ZS5wbGF5ZXJQb3dlcjtcbiAgbGV0IHBsYWNlZFdlYXBvbnM6IHN0cmluZ1tdID0gW107XG4gIGxldCBwbGFjZWRQaWNrdXBzOiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgZW1pdHRlZFRocmVhdCA9IDA7XG4gIGxldCBzZWxlY3RlZEVuZW1pZXM6IHN0cmluZ1tdID0gW107XG5cbiAgaWYgKGJlYXQua2luZCA9PT0gXCJyZXN0XCIpIHtcbiAgICBidWlsZGVyLnJlc3BpdGUocm93cyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2VjdGlvbktpbmQgPSBiZWF0LmtpbmQgPT09IFwiaW50cm9cIiB8fCBiZWF0LmtpbmQgPT09IFwicmVidWlsZFwiID8gXCJyZWJ1aWxkXCIgOiBcInByZXNzdXJlXCI7XG4gICAgYnVpbGRlci5zZWN0aW9uKHNlY3Rpb25LaW5kLCByb3dzLCBzZWN0aW9uID0+IHtcbiAgICAgIGNvbnN0IHBpY2t1cHMgPSBwbGFjZVBpY2t1cHMoc2VjdGlvbiwgcmVjaXBlLCBiZWF0LCB0aWVyLCBzdGF0ZSwgcm5nKTtcbiAgICAgIHBsYWNlZFdlYXBvbnMgPSBwaWNrdXBzLndlYXBvbnM7XG4gICAgICBwbGFjZWRQaWNrdXBzID0gcGlja3Vwcy5waWNrdXBzO1xuICAgICAgaWYgKGJlYXQua2luZCAhPT0gXCJpbnRyb1wiICYmIGJlYXQua2luZCAhPT0gXCJyZWJ1aWxkXCIpIHtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVTdGFydFJvdyA9IE1hdGgubWF4KDAsIChiZWF0LnBpY2t1cFJvbGVzPy5sZW5ndGggPz8gMCkgKiAyIC0gMSk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlID0gcGxhY2VQcmVzc3VyZShzZWN0aW9uLCByZWNpcGUsIGJlYXQsIHRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcsIHByZXNzdXJlU3RhcnRSb3cpO1xuICAgICAgICBlbWl0dGVkVGhyZWF0ID0gcHJlc3N1cmUudGhyZWF0O1xuICAgICAgICBzZWxlY3RlZEVuZW1pZXMgPSBwcmVzc3VyZS5lbmVtaWVzO1xuICAgICAgfSBlbHNlIGlmIChiZWF0LmtpbmQgPT09IFwicmVidWlsZFwiICYmIHJvd3MgPiA0KSB7XG4gICAgICAgIGNvbnN0IGVuZW15ID0gcmVjaXBlLnByZWZlcnJlZEVuZW1pZXNbMF07XG4gICAgICAgIHNlY3Rpb24uYXQocm93cyAtIDIpLmVuZW15KGVuZW15LCB7IGNvbHVtbjogcm5nLnBpY2soYWxsQ29sdW1ucykgfSk7XG4gICAgICAgIGVtaXR0ZWRUaHJlYXQgPSBlbmVteVRocmVhdChlbmVteSk7XG4gICAgICAgIHNlbGVjdGVkRW5lbWllcyA9IFtlbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7ZW5lbXl9YF07XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkRW5lbWllcy5hZGQoc2VsZWN0ZWRFbmVtaWVzWzBdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLmN1cnNvciArPSByb3dzO1xuICBzdGF0ZS5jeWNsZSsrO1xuICBzdGF0ZS5zZWdtZW50cy5wdXNoKHtcbiAgICBraW5kOiBiZWF0LmtpbmQsXG4gICAgcm93cyxcbiAgICBwcmVzc3VyZTogYmVhdC5wcmVzc3VyZSA/PyBcIm5vbmVcIixcbiAgICB0aHJlYXRFc3RpbWF0ZTogTnVtYmVyKGVtaXR0ZWRUaHJlYXQudG9GaXhlZCgyKSksXG4gICAgcGxheWVyUG93ZXJFc3RpbWF0ZTogTnVtYmVyKHNlZ21lbnRTdGFydFBvd2VyLnRvRml4ZWQoMikpLFxuICAgIHNlbGVjdGVkV2VhcG9uczogcGxhY2VkV2VhcG9ucyxcbiAgICBzZWxlY3RlZFBpY2t1cHM6IHBsYWNlZFBpY2t1cHMsXG4gICAgc2VsZWN0ZWRFbmVtaWVzLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZUludGVybmFsKG9wdGlvbnM6IENvbXBvc2VkVHJhY2tPcHRpb25zKTogQ29tcG9zZVJlc3VsdCB7XG4gIGNvbnN0IHByb2ZpbGUgPSB0aWVyUHJvZmlsZXNbb3B0aW9ucy50aWVyXTtcbiAgY29uc3QgcmVjaXBlID0gZmFtaWx5UmVjaXBlc1tvcHRpb25zLnRoZW1lXTtcbiAgY29uc3QgdHJhY2tJZCA9IG9wdGlvbnMudHJhY2tJZCA/PyBcIm5lb24tbmVidWxhZS0xXCI7XG4gIGNvbnN0IHRyYWNrUmVjaXBlID0gb3B0aW9ucy50cmFja0lkID8gdHJhY2tSZWNpcGVzW29wdGlvbnMudHJhY2tJZF0gOiB7IGdvYWxzOiBbb3B0aW9ucy5kZXNjcmlwdGlvbl0sIHNlZWQ6IG9wdGlvbnMuc2VlZCA/PyBgJHtvcHRpb25zLnRoZW1lfToke29wdGlvbnMudGllcn1gLCBqb3VybmV5OiBkZWZhdWx0Sm91cm5leVtvcHRpb25zLnRpZXJdIH07XG4gIGNvbnN0IHNlZWQgPSBvcHRpb25zLnNlZWQgPz8gdHJhY2tSZWNpcGUuc2VlZDtcbiAgY29uc3Qgcm5nID0gY3JlYXRlUm5nKHNlZWQpO1xuICBjb25zdCBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gIGNvbnN0IGJ1aWxkZXIgPSB0cmFja0J1aWxkZXIuY3JlYXRlKHtcbiAgICBsYWJlbDogb3B0aW9ucy5sYWJlbCxcbiAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBvcHRpb25zLnNjZW5lSWQgfSxcbiAgICBiYWxhbmNlOiB7IGVuZW15SHA6IHByb2ZpbGUuZW5lbXlIcCwgZW5lbXlTcGVlZDogcHJvZmlsZS5lbmVteVNwZWVkIH0sXG4gIH0pO1xuXG4gIGNvbXBpbGVCZWF0KGJ1aWxkZXIsIHJlY2lwZSwge1xuICAgIGtpbmQ6IFwiaW50cm9cIixcbiAgICByb3dzOiBwcm9maWxlLnJlYnVpbGRSb3dzLFxuICAgIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwic3VwcG9ydFwiLCAuLi4ob3B0aW9ucy50aWVyID49IDMgPyBbXCJjbG9zZVJhbmdlXCIgYXMgY29uc3RdIDogW10pLCAuLi4ocmVjaXBlLm9wZW5pbmdQaWNrdXBzPy5sZW5ndGggPyBbXCJ1cGdyYWRlXCIgYXMgY29uc3RdIDogW10pXSxcbiAgfSwgb3B0aW9ucy50aWVyLCBwcm9maWxlLCBzdGF0ZSwgcm5nKTtcbiAgZm9yIChjb25zdCBiZWF0IG9mIHRyYWNrUmVjaXBlLmpvdXJuZXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5raW5kICE9PSBcImludHJvXCIpKSB7XG4gICAgaWYgKHN0YXRlLmN1cnNvciA+PSBwcm9maWxlLnRhcmdldFJvd3MgLSBwcm9maWxlLnByZXNzdXJlUm93cy5oaWdoKSBicmVhaztcbiAgICBjb21waWxlQmVhdChidWlsZGVyLCByZWNpcGUsIGJlYXQsIG9wdGlvbnMudGllciwgcHJvZmlsZSwgc3RhdGUsIHJuZyk7XG4gIH1cbiAgd2hpbGUgKHN0YXRlLmN1cnNvciA8IHByb2ZpbGUudGFyZ2V0Um93cyAtIHByb2ZpbGUucHJlc3N1cmVSb3dzLmhpZ2gpIHtcbiAgICBjb21waWxlQmVhdChidWlsZGVyLCByZWNpcGUsIHsga2luZDogc3RhdGUuY3ljbGUgJSAzID09PSAwID8gXCJyZWJ1aWxkXCIgOiBcInByZXNzdXJlXCIsIHByZXNzdXJlOiBzdGF0ZS5jeWNsZSAlIDIgPT09IDAgPyBcImhpZ2hcIiA6IFwibWVkaXVtXCIsIHBpY2t1cFJvbGVzOiBzdGF0ZS5jeWNsZSAlIDMgPT09IDAgPyBbXCJwcmltYXJ5XCIsIFwidXBncmFkZVwiXSA6IHVuZGVmaW5lZCB9LCBvcHRpb25zLnRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcpO1xuICB9XG4gIGNvbXBpbGVCZWF0KGJ1aWxkZXIsIHJlY2lwZSwgeyBraW5kOiBcImZpbmFsZVwiLCBwcmVzc3VyZTogb3B0aW9ucy50aWVyID09PSAxID8gXCJoaWdoXCIgOiBcInBlYWtcIiB9LCBvcHRpb25zLnRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcpO1xuXG4gIGNvbnN0IHRyYWNrID0gYnVpbGRlci5idWlsZCgpO1xuICBjb25zdCBnZW5lcmF0ZWRSb3dzID0gdHJhY2suZGVmaW5pdGlvbi5sYXlvdXQuc3BsaXQoL1xccj9cXG4vKS5maWx0ZXIocm93ID0+IHJvdy50cmltKCkpLmxlbmd0aDtcbiAgY29uc3Qgd2VhcG9uUG93ZXJFbnRyaWVzID0gWy4uLnN0YXRlLnNlbGVjdGVkV2VhcG9uc10ubWFwKGlkID0+IFtpZCwgTnVtYmVyKHdlYXBvblBvd2VyKGlkKS50b0ZpeGVkKDIpKV0gYXMgY29uc3QpO1xuICBjb25zdCBlbmVteVRocmVhdEVudHJpZXMgPSBbLi4uc3RhdGUuc2VsZWN0ZWRFbmVtaWVzXS5tYXAoaWQgPT4gW2lkLCBOdW1iZXIoZW5lbXlUaHJlYXQoaWQpLnRvRml4ZWQoMikpXSBhcyBjb25zdCk7XG4gIHJldHVybiB7XG4gICAgdHJhY2ssXG4gICAgZGVidWc6IHtcbiAgICAgIHNlZWQsXG4gICAgICBzZWVkVmFsdWU6IHJuZy5zZWVkVmFsdWUsXG4gICAgICBmYW1pbHlJZDogb3B0aW9ucy50aGVtZSxcbiAgICAgIHRyYWNrSWQsXG4gICAgICB0aWVyOiBvcHRpb25zLnRpZXIsXG4gICAgICBnZW5lcmF0ZWRSb3dzLFxuICAgICAgc2VsZWN0ZWRXZWFwb25zOiBbLi4uc3RhdGUuc2VsZWN0ZWRXZWFwb25zXSxcbiAgICAgIHNlbGVjdGVkUGlja3VwczogWy4uLnN0YXRlLnNlbGVjdGVkUGlja3Vwc10sXG4gICAgICBzZWxlY3RlZEVuZW1pZXM6IFsuLi5zdGF0ZS5zZWxlY3RlZEVuZW1pZXNdLFxuICAgICAgd2VhcG9uUG93ZXI6IE9iamVjdC5mcm9tRW50cmllcyh3ZWFwb25Qb3dlckVudHJpZXMpLFxuICAgICAgZW5lbXlUaHJlYXQ6IE9iamVjdC5mcm9tRW50cmllcyhlbmVteVRocmVhdEVudHJpZXMpLFxuICAgICAgc2VnbWVudHM6IHN0YXRlLnNlZ21lbnRzLFxuICAgICAgd2FybmluZ3M6IHN0YXRlLndhcm5pbmdzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhY2sob3B0aW9uczogQ29tcG9zZWRUcmFja09wdGlvbnMpOiBUcmFja01lbWJlciB7XG4gIHJldHVybiBjb21wb3NlSW50ZXJuYWwob3B0aW9ucykudHJhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjcmliZUNvbXBvc2VkVHJhY2sob3B0aW9uczogQ29tcG9zZWRUcmFja09wdGlvbnMpOiBDb21wb3NlckRlYnVnU3VtbWFyeSB7XG4gIHJldHVybiBjb21wb3NlSW50ZXJuYWwob3B0aW9ucykuZGVidWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlQ2F0YWxvZ1RyYWNrKHRyYWNrSWQ6IFRyYWNrQ2F0YWxvZ0lkKTogVHJhY2tNZW1iZXIge1xuICBjb25zdCBlbnRyeSA9IHRyYWNrQ2F0YWxvZ1t0cmFja0lkXTtcbiAgcmV0dXJuIGNvbXBvc2VJbnRlcm5hbCh7XG4gICAgdHJhY2tJZCxcbiAgICBsYWJlbDogZW50cnkubGFiZWwsXG4gICAgZGVzY3JpcHRpb246IGVudHJ5LmRlc2NyaXB0aW9uLFxuICAgIHNjZW5lSWQ6IGVudHJ5LnNjZW5lSWQsXG4gICAgdGhlbWU6IGVudHJ5LnRoZW1lLFxuICAgIHRpZXI6IGVudHJ5LnRpZXIsXG4gIH0pLnRyYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmVDb21wb3NlZENhdGFsb2dUcmFjayh0cmFja0lkOiBUcmFja0NhdGFsb2dJZCk6IENvbXBvc2VyRGVidWdTdW1tYXJ5IHtcbiAgY29uc3QgZW50cnkgPSB0cmFja0NhdGFsb2dbdHJhY2tJZF07XG4gIHJldHVybiBjb21wb3NlSW50ZXJuYWwoe1xuICAgIHRyYWNrSWQsXG4gICAgbGFiZWw6IGVudHJ5LmxhYmVsLFxuICAgIGRlc2NyaXB0aW9uOiBlbnRyeS5kZXNjcmlwdGlvbixcbiAgICBzY2VuZUlkOiBlbnRyeS5zY2VuZUlkLFxuICAgIHRoZW1lOiBlbnRyeS50aGVtZSxcbiAgICB0aWVyOiBlbnRyeS50aWVyLFxuICB9KS5kZWJ1Zztcbn1cbiIsICJpbXBvcnQgeyBjb21wb3NlQ2F0YWxvZ1RyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuaW1wb3J0IHsgdHJhY2tDYXRhbG9nLCB0cmFja0ZhbWlsaWVzRnJvbUNhdGFsb2cgfSBmcm9tIFwiLi9UcmFja0NhdGFsb2dcIjtcblxuZXhwb3J0IGNvbnN0IHRyYWNrcyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgT2JqZWN0LmtleXModHJhY2tDYXRhbG9nKS5tYXAodHJhY2tJZCA9PiBbdHJhY2tJZCwgY29tcG9zZUNhdGFsb2dUcmFjayh0cmFja0lkIGFzIGtleW9mIHR5cGVvZiB0cmFja0NhdGFsb2cpXSksXG4pIGFzIHsgcmVhZG9ubHkgW1RyYWNrSWQgaW4ga2V5b2YgdHlwZW9mIHRyYWNrQ2F0YWxvZ106IFJldHVyblR5cGU8dHlwZW9mIGNvbXBvc2VDYXRhbG9nVHJhY2s+IH07XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlsaWVzID0gdHJhY2tGYW1pbGllc0Zyb21DYXRhbG9nO1xuZXhwb3J0IHsgdHJhY2tDYXRhbG9nLCB0cmFja0ZhbWlseUNhdGFsb2csIHRyYWNrVGhlbWVDYXRhbG9nIH0gZnJvbSBcIi4vVHJhY2tDYXRhbG9nXCI7XG5leHBvcnQgdHlwZSB7IFRyYWNrQ2F0YWxvZ0lkLCBUcmFja0ZhbWlseUNhdGFsb2dJZCwgVHJhY2tUaGVtZUlkLCBUcmFja1RpZXIgfSBmcm9tIFwiLi9UcmFja0NhdGFsb2dcIjtcbmV4cG9ydCB7IGRlc2NyaWJlQ29tcG9zZWRDYXRhbG9nVHJhY2ssIGRlc2NyaWJlQ29tcG9zZWRUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcbmV4cG9ydCB0eXBlIHsgQ29tcG9zZXJEZWJ1Z1N1bW1hcnksIEZhbWlseVJlY2lwZSwgSm91cm5leUJlYXRLaW5kLCBKb3VybmV5QmVhdFJlY2lwZSwgUHJlc3N1cmVMZXZlbCwgUHJlc3N1cmVTdHlsZSwgU2VnbWVudERlYnVnU3VtbWFyeSwgVGllclByb2ZpbGUsIFRyYWNrUmVjaXBlIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgbmVvbk5lYnVsYWVUcmFjazEgPSB0cmFja3NbXCJuZW9uLW5lYnVsYWUtMVwiXTtcbmV4cG9ydCBjb25zdCBuZW9uTmVidWxhZVRyYWNrMiA9IHRyYWNrc1tcIm5lb24tbmVidWxhZS0yXCJdO1xuZXhwb3J0IGNvbnN0IG5lb25OZWJ1bGFlVHJhY2szID0gdHJhY2tzW1wibmVvbi1uZWJ1bGFlLTNcIl07XG5leHBvcnQgY29uc3QgYXVyb3JhVHJhY2sxID0gdHJhY2tzW1wiYXVyb3JhLTFcIl07XG5leHBvcnQgY29uc3QgYXVyb3JhVHJhY2syID0gdHJhY2tzW1wiYXVyb3JhLTJcIl07XG5leHBvcnQgY29uc3QgYXVyb3JhVHJhY2szID0gdHJhY2tzW1wiYXVyb3JhLTNcIl07XG5leHBvcnQgY29uc3QgY3J5c3RhbEZvcmdlVHJhY2sxID0gdHJhY2tzW1wiY3J5c3RhbC1mb3JnZS0xXCJdO1xuZXhwb3J0IGNvbnN0IGNyeXN0YWxGb3JnZVRyYWNrMiA9IHRyYWNrc1tcImNyeXN0YWwtZm9yZ2UtMlwiXTtcbmV4cG9ydCBjb25zdCBjcnlzdGFsRm9yZ2VUcmFjazMgPSB0cmFja3NbXCJjcnlzdGFsLWZvcmdlLTNcIl07XG5leHBvcnQgY29uc3Qgdm9pZEdhcmRlblRyYWNrMSA9IHRyYWNrc1tcInZvaWQtZ2FyZGVuLTFcIl07XG5leHBvcnQgY29uc3Qgdm9pZEdhcmRlblRyYWNrMiA9IHRyYWNrc1tcInZvaWQtZ2FyZGVuLTJcIl07XG5leHBvcnQgY29uc3Qgdm9pZEdhcmRlblRyYWNrMyA9IHRyYWNrc1tcInZvaWQtZ2FyZGVuLTNcIl07XG5leHBvcnQgY29uc3Qgc29sYXJBcnJheVRyYWNrMSA9IHRyYWNrc1tcInNvbGFyLWFycmF5LTFcIl07XG5leHBvcnQgY29uc3Qgc29sYXJBcnJheVRyYWNrMiA9IHRyYWNrc1tcInNvbGFyLWFycmF5LTJcIl07XG5leHBvcnQgY29uc3Qgc29sYXJBcnJheVRyYWNrMyA9IHRyYWNrc1tcInNvbGFyLWFycmF5LTNcIl07XG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIsIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tGYW1pbGllcywgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcbiAgcmVhZG9ubHkgZmFtaWxpZXMgPSB0cmFja0ZhbWlsaWVzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgdHJhY2tdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaWQsIGZhbWlseV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5mYW1pbGllcykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShmYW1pbHkudHJhY2tJZHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgdHJhY2suYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZChmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICAgIGZvciAoY29uc3QgdHJhY2tJZCBvZiBmYW1pbHkudHJhY2tJZHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrSWQgaW4gdGhpcy5tZW1iZXJzLCBgJHtpZH0gcmVmZXJlbmNlcyB1bmtub3duIHRyYWNrIFwiJHt0cmFja0lkfVwiLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodGhpcy5tZW1iZXJzW3RyYWNrSWRdLmVudmlyb25tZW50LnNjZW5lSWQgPT09IGZhbWlseS5lbnZpcm9ubWVudC5zY2VuZUlkLCBgJHt0cmFja0lkfSBtdXN0IHVzZSB0aGUgJHtpZH0gc2NlbmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlseSA9IG5ldyBUcmFja0ZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFRyYWNrSWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkubWVtYmVycztcbmV4cG9ydCB0eXBlIFRyYWNrRmFtaWx5SWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkuZmFtaWxpZXM7XG4iLCAiaW1wb3J0IHtcbiAgZGVzY3JpYmVDb21wb3NlZENhdGFsb2dUcmFjayxcbiAgdHJhY2tDYXRhbG9nLFxuICB0eXBlIFRyYWNrQ2F0YWxvZ0lkLFxufSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5jb25zdCBkZXZlbG9wZXIgPSB3aW5kb3cuSnVzdFRoZUdhbWVzUGxlYXNlPy51cmxPcHRpb25zPy5pc0VuYWJsZWQoXCJkZXZcIikgPz8gZmFsc2U7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNnZW5lcmF0b3ItY29udGFpbmVyXCIpIS5oaWRkZW4gPSAhZGV2ZWxvcGVyO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjZGV2LXJlcXVpcmVkXCIpIS5oaWRkZW4gPSBkZXZlbG9wZXI7XG5cbmNvbnN0IHRyYWNrU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjdHJhY2stc2VsZWN0XCIpITtcbmNvbnN0IGNvcHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjb3B5LWJ0blwiKSE7XG5jb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MUHJlRWxlbWVudD4oXCIjcHJvbXB0LXByZXZpZXdcIikhO1xuXG5mb3IgKGNvbnN0IFt0cmFja0lkLCB0cmFja10gb2YgT2JqZWN0LmVudHJpZXModHJhY2tDYXRhbG9nKSkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24udmFsdWUgPSB0cmFja0lkO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHt0cmFjay5sYWJlbH0gKCR7dHJhY2tJZH0sIHRpZXIgJHt0cmFjay50aWVyfSlgO1xuICB0cmFja1NlbGVjdC5hcHBlbmQob3B0aW9uKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0ZWRUcmFja0lkKCk6IFRyYWNrQ2F0YWxvZ0lkIHtcbiAgcmV0dXJuIHRyYWNrU2VsZWN0LnZhbHVlIGFzIFRyYWNrQ2F0YWxvZ0lkO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdW1tYXJ5KCk6IHZvaWQge1xuICBjb25zdCBzdW1tYXJ5ID0gZGVzY3JpYmVDb21wb3NlZENhdGFsb2dUcmFjayhzZWxlY3RlZFRyYWNrSWQoKSk7XG4gIHByZXZpZXcudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShzdW1tYXJ5LCBudWxsLCAyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weVN1bW1hcnkoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByZXZpZXcudGV4dENvbnRlbnQpO1xuICBjb25zdCB0ZXh0ID0gY29weUJ0bi5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi5idG4tdGV4dFwiKSE7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIkNvcGllZFwiO1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiQ29weSBKU09OXCI7XG4gIH0sIDE0MDApO1xufVxuXG50cmFja1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHJlbmRlclN1bW1hcnkpO1xuY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb3B5U3VtbWFyeSgpLmNhdGNoKGVycm9yID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHkgY29tcG9zZXIgc3VtbWFyeS5cIiwgZXJyb3IpO1xuICB9KTtcbn0pO1xuXG5yZW5kZXJTdW1t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QixvQkFBb0IsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFHLENBQUMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFNLEtBQUksR0FBRyxDQUFDLE9BQUssS0FBSSxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxRQUFNLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNuTyxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLEtBQUcsS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMzUCxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLE1BQUksR0FBRSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxHQUFFLEdBQUcsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUMzTCxLQUFLLFVBQVUsdUJBQXVCLHVCQUF1QixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFNLEtBQUksR0FBRyxDQUFDLE9BQUssS0FBSSxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxRQUFNLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUM5UCxLQUFLLFVBQVUsMEJBQTBCLDBCQUEwQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLEtBQUcsSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBSyxLQUFJLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDcFAsS0FBSyxVQUFVLGVBQWUsZUFBZSxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQzdGLEtBQUssVUFBVSxlQUFlLGVBQWUsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxHQUFHLE1BQUssSUFBRyxDQUFDLENBQUM7QUFBQSxFQUU3RixLQUFLLFVBQVUsZUFBZSxRQUFRLENBQUMsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRyxHQUFFLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUNoRixLQUFLLFVBQVUsZUFBZSxRQUFRLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDekcsS0FBSyxVQUFVLGlCQUFpQixVQUFVLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUNwRixLQUFLLFVBQVUsZ0JBQWdCLFNBQVMsS0FBSyxHQUFFLElBQUcsR0FBRyxNQUFNO0FBQUEsRUFDM0QsS0FBSyxVQUFVLGdCQUFnQixTQUFTLFNBQVMsT0FBTztBQUFBLEVBQ3hELEtBQUssVUFBVSxjQUFjLE9BQU8sU0FBUyxPQUFPO0FBQUEsRUFDcEQsS0FBSyxVQUFVLGNBQWMsV0FBVyxRQUFRLEdBQUcsS0FBSyxLQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEtBQUssS0FBRyxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUNwRyxLQUFLLFVBQVUsZ0JBQWdCLFNBQVMsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPO0FBQUEsRUFDNUQsS0FBSyxVQUFVLGVBQWUsUUFBUSxDQUFDLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsS0FBRyxDQUFDLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEtBQUcsSUFBRyxDQUFDLEdBQUcsTUFBTTtBQUFBLEVBRXhHLEtBQUssV0FBVyxpQkFBaUIsU0FBUyxRQUFRLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQ3ZHLEtBQUssV0FBVyxlQUFlLE9BQU8sU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsTUFBSSxJQUFFLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN0RyxLQUFLLFdBQVcsZUFBZSxZQUFZLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDcEYsS0FBSyxXQUFXLGlCQUFpQixTQUFTLENBQUMsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxLQUFHLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsS0FBRyxHQUFFLEdBQUUsQ0FBQyxNQUFJLEdBQUUsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUNySCxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBRWxGLEtBQUssUUFBUSxZQUFZLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUMvRSxLQUFLLFFBQVEsWUFBWSxhQUFhLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFF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
